class ChemistryDiagramsRegistry {






static diagrams = {


// ===== ATOMIC STRUCTURE & QUANTUM MECHANICS =====
'valenceCoreElectronShieldingZeffDiagram': {
    name: 'Valence Core Electron Shielding Zeff Diagram',
    category: 'Atomic Structure',
    description: 'Valence and core electrons with shielding effect and effective nuclear charge',
    type: 'valence_core_electron_shielding_zeff',
    defaultOptions: {
        title: 'Electron Shielding and Effective Nuclear Charge',
        showShieldingArrows: true,
        showZeffValues: true,
        showLabels: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'paramagneticDiamagneticUnpairedElectronDiagram': {
    name: 'Paramagnetic Diamagnetic Unpaired Electron Diagram',
    category: 'Atomic Structure',
    description: 'Orbital box diagrams contrasting paramagnetic and diamagnetic configurations',
    type: 'paramagnetic_diamagnetic_unpaired_electron',
    defaultOptions: {
        title: 'Paramagnetic vs Diamagnetic Electron Configurations',
        showOrbitalBoxes: true,
        showMagneticBehaviour: true,
        showLabels: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'successiveIonisationEnergyBarGraphDiagram': {
    name: 'Successive Ionisation Energy Bar Graph Diagram',
    category: 'Atomic Structure',
    description: 'Bar graph of successive ionisation energies showing shell jumps',
    type: 'successive_ionisation_energy_bar_graph',
    defaultOptions: {
        title: 'Successive Ionisation Energies',
        showShellJumps: true,
        showLogScale: true,
        showLabels: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'electronConfigurationCommonMistakesAnnotatedDiagram': {
    name: 'Electron Configuration Common Mistakes Annotated Diagram',
    category: 'Atomic Structure',
    description: 'Annotated electron configurations highlighting common errors and corrections',
    type: 'electron_configuration_common_mistakes_annotated',
    defaultOptions: {
        title: 'Electron Configuration Common Mistakes',
        showCorrections: true,
        showAnnotations: true,
        showLabels: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'schrodingerEquationWaveFunctionAnnotatedDiagram': {
    name: 'Schrodinger Equation Wave Function Annotated Diagram',
    category: 'Atomic Structure',
    description: 'Annotated Schrödinger equation with wave function components and physical meaning',
    type: 'schrodinger_equation_wave_function_annotated',
    defaultOptions: {
        title: 'Schrödinger Equation and Wave Function',
        showEquationComponents: true,
        showAnnotations: true,
        showProbabilityDensity: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'shellEnergyLevelRadialProbabilityDiagram': {
    name: 'Shell Energy Level Radial Probability Diagram',
    category: 'Atomic Structure',
    description: 'Radial probability distribution plots for atomic shells and subshells',
    type: 'shell_energy_level_radial_probability',
    defaultOptions: {
        title: 'Radial Probability Distribution',
        showNodes: true,
        showShellLabels: true,
        showProbabilityCurves: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'subshellAngularMomentumOrbitalShapesDiagram': {
    name: 'Subshell Angular Momentum Orbital Shapes Diagram',
    category: 'Atomic Structure',
    description: 'Orbital shapes with angular momentum quantum numbers for s, p, d, f subshells',
    type: 'subshell_angular_momentum_orbital_shapes',
    defaultOptions: {
        title: 'Subshell Angular Momentum and Orbital Shapes',
        showAngularMomentum: true,
        showOrbitalShapes: true,
        showQuantumNumbers: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'pOrbitalThreeOrientationsMagneticQuantumDiagram': {
    name: 'p Orbital Three Orientations Magnetic Quantum Diagram',
    category: 'Atomic Structure',
    description: 'Three p orbital orientations (px, py, pz) with magnetic quantum number labels',
    type: 'p_orbital_three_orientations_magnetic_quantum',
    defaultOptions: {
        title: 'p Orbital Orientations and Magnetic Quantum Numbers',
        showAxes: true,
        showMagneticQuantumNumbers: true,
        showLabels: true,
        width: 900,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'sternGerlachBeamSplittingSpinDiagram': {
    name: 'Stern Gerlach Beam Splitting Spin Diagram',
    category: 'Atomic Structure',
    description: 'Stern-Gerlach experiment showing beam splitting due to electron spin',
    type: 'stern_gerlach_beam_splitting_spin',
    defaultOptions: {
        title: 'Stern-Gerlach Experiment',
        showMagneticField: true,
        showBeamPaths: true,
        showSpinLabels: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'pauliExclusionOrbitalOccupancyForbiddenStatesDiagram': {
    name: 'Pauli Exclusion Orbital Occupancy Forbidden States Diagram',
    category: 'Atomic Structure',
    description: 'Orbital occupancy rules with forbidden states illustrating the Pauli exclusion principle',
    type: 'pauli_exclusion_orbital_occupancy_forbidden_states',
    defaultOptions: {
        title: 'Pauli Exclusion Principle and Forbidden States',
        showAllowedStates: true,
        showForbiddenStates: true,
        showSpinArrows: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'spdfOrbitalThreeDimensionalShapesDiagram': {
    name: 'spdf Orbital Three Dimensional Shapes Diagram',
    category: 'Atomic Structure',
    description: '3D shapes of s, p, d, and f orbitals with node surfaces',
    type: 'spdf_orbital_three_dimensional_shapes',
    defaultOptions: {
        title: 's, p, d, f Orbital 3D Shapes',
        showNodeSurfaces: true,
        showAxes: true,
        showLabels: true,
        width: 1100,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'quantumNumberAllowedRangesValidationFlowchartDiagram': {
    name: 'Quantum Number Allowed Ranges Validation Flowchart Diagram',
    category: 'Atomic Structure',
    description: 'Flowchart for validating allowed ranges of n, l, ml, ms quantum numbers',
    type: 'quantum_number_allowed_ranges_validation_flowchart',
    defaultOptions: {
        title: 'Quantum Number Validation Flowchart',
        showAllQuantumNumbers: true,
        showAllowedRanges: true,
        showDecisionNodes: true,
        width: 900,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'periodicTableQuantumNumberBlockWidthDiagram': {
    name: 'Periodic Table Quantum Number Block Width Diagram',
    category: 'Atomic Structure',
    description: 'Periodic table blocks (s, p, d, f) with quantum number basis for block widths',
    type: 'periodic_table_quantum_number_block_width',
    defaultOptions: {
        title: 'Periodic Table Blocks and Quantum Numbers',
        showBlockLabels: true,
        showBlockWidths: true,
        showQuantumNumbers: true,
        width: 1200,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'nmrNuclearSpinEnergyLevelSplittingDiagram': {
    name: 'NMR Nuclear Spin Energy Level Splitting Diagram',
    category: 'Atomic Structure',
    description: 'Nuclear spin energy level splitting in an applied magnetic field for NMR',
    type: 'nmr_nuclear_spin_energy_level_splitting',
    defaultOptions: {
        title: 'NMR Nuclear Spin Energy Level Splitting',
        showEnergyLevels: true,
        showMagneticField: true,
        showTransitionArrow: true,
        width: 900,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

// ===== PERIODIC TRENDS =====
'effectiveNuclearChargeShieldingPenetrationDiagram': {
    name: 'Effective Nuclear Charge Shielding Penetration Diagram',
    category: 'Periodic Trends',
    description: 'Effective nuclear charge with shielding and penetration effects across periods',
    type: 'effective_nuclear_charge_shielding_penetration',
    defaultOptions: {
        title: 'Effective Nuclear Charge, Shielding and Penetration',
        showSlatersRules: true,
        showPenetrationCurves: true,
        showLabels: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'atomicRadiusPeriodGroupTrendAnnotatedDiagram': {
    name: 'Atomic Radius Period Group Trend Annotated Diagram',
    category: 'Periodic Trends',
    description: 'Atomic radius trends across periods and down groups with annotations',
    type: 'atomic_radius_period_group_trend_annotated',
    defaultOptions: {
        title: 'Atomic Radius Trends',
        showPeriodTrend: true,
        showGroupTrend: true,
        showAnnotations: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'isoelectronicSeriesIonicRadiusComparisonDiagram': {
    name: 'Isoelectronic Series Ionic Radius Comparison Diagram',
    category: 'Periodic Trends',
    description: 'Ionic radius comparison within isoelectronic series showing nuclear charge effect',
    type: 'isoelectronic_series_ionic_radius_comparison',
    defaultOptions: {
        title: 'Isoelectronic Series Ionic Radius Comparison',
        showNuclearCharge: true,
        showRadiusScale: true,
        showLabels: true,
        width: 1000,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'firstIonisationEnergyPeriod2AnomaliesBarGraphDiagram': {
    name: 'First Ionisation Energy Period 2 Anomalies Bar Graph Diagram',
    category: 'Periodic Trends',
    description: 'Bar graph of first ionisation energies across Period 2 with anomaly annotations',
    type: 'first_ionisation_energy_period2_anomalies_bar_graph',
    defaultOptions: {
        title: 'First Ionisation Energy - Period 2 Anomalies',
        showAnomalyAnnotations: true,
        showTrendLine: true,
        showLabels: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'electronAffinityPeriodTrendWithAnomaliesDiagram': {
    name: 'Electron Affinity Period Trend With Anomalies Diagram',
    category: 'Periodic Trends',
    description: 'Electron affinity trends across a period with anomaly explanations',
    type: 'electron_affinity_period_trend_with_anomalies',
    defaultOptions: {
        title: 'Electron Affinity Period Trends and Anomalies',
        showAnomalies: true,
        showAnnotations: true,
        showLabels: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'paulingElectronegativityScalePeriodicTableHeatmapDiagram': {
    name: 'Pauling Electronegativity Scale Periodic Table Heatmap Diagram',
    category: 'Periodic Trends',
    description: 'Heatmap of Pauling electronegativity values across the periodic table',
    type: 'pauling_electronegativity_scale_periodic_table_heatmap',
    defaultOptions: {
        title: 'Pauling Electronegativity Heatmap',
        showColorScale: true,
        showValues: true,
        showLabels: true,
        width: 1200,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'metalNonmetalMetalloidPeriodicTableBoundaryDiagram': {
    name: 'Metal Nonmetal Metalloid Periodic Table Boundary Diagram',
    category: 'Periodic Trends',
    description: 'Periodic table showing the staircase boundary between metals, metalloids and non-metals',
    type: 'metal_nonmetal_metalloid_periodic_table_boundary',
    defaultOptions: {
        title: 'Metal, Non-metal and Metalloid Boundary',
        showStaircaseBoundary: true,
        showRegionLabels: true,
        showExamples: true,
        width: 1200,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'group1Group17ReactivityOpposingTrendsDiagram': {
    name: 'Group 1 Group 17 Reactivity Opposing Trends Diagram',
    category: 'Periodic Trends',
    description: 'Opposing reactivity trends down Group 1 (increasing) and Group 17 (decreasing)',
    type: 'group1_group17_reactivity_opposing_trends',
    defaultOptions: {
        title: 'Group 1 and Group 17 Opposing Reactivity Trends',
        showGroup1Trend: true,
        showGroup17Trend: true,
        showAnnotations: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'period3OxideAcidBaseCharacterTrendDiagram': {
    name: 'Period 3 Oxide Acid Base Character Trend Diagram',
    category: 'Periodic Trends',
    description: 'Acid-base character of Period 3 oxides from basic to acidic across the period',
    type: 'period3_oxide_acid_base_character_trend',
    defaultOptions: {
        title: 'Period 3 Oxide Acid-Base Character',
        showOxideFormulas: true,
        showAcidBaseTrend: true,
        showAnnotations: true,
        width: 1100,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'periodicTrendCommonMistakeAnnotationDiagram': {
    name: 'Periodic Trend Common Mistake Annotation Diagram',
    category: 'Periodic Trends',
    description: 'Annotated periodic trends highlighting common misconceptions and corrections',
    type: 'periodic_trend_common_mistake_annotation',
    defaultOptions: {
        title: 'Periodic Trend Common Mistakes',
        showMistakes: true,
        showCorrections: true,
        showAnnotations: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

// ===== NUCLEAR CHEMISTRY =====
'bandOfStabilityNeutronProtonPlotDiagram': {
    name: 'Band Of Stability Neutron Proton Plot Diagram',
    category: 'Nuclear Chemistry',
    description: 'Neutron vs proton plot showing the band of nuclear stability',
    type: 'band_of_stability_neutron_proton_plot',
    defaultOptions: {
        title: 'Band of Stability',
        showStabilityBand: true,
        showDecayModes: true,
        showLabels: true,
        width: 900,
        height: 900,
        backgroundColor: '#ffffff'
    }
},
'alphaBetagammaDecayNuclearChangeAnnotatedDiagram': {
    name: 'Alpha Beta Gamma Decay Nuclear Change Annotated Diagram',
    category: 'Nuclear Chemistry',
    description: 'Annotated nuclear equations for alpha, beta, and gamma decay processes',
    type: 'alpha_beta_gamma_decay_nuclear_change_annotated',
    defaultOptions: {
        title: 'Alpha, Beta and Gamma Decay',
        showNuclearEquations: true,
        showAnnotations: true,
        showMassNumberChanges: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'radiationElectricMagneticFieldDeflectionDiagram': {
    name: 'Radiation Electric Magnetic Field Deflection Diagram',
    category: 'Nuclear Chemistry',
    description: 'Deflection of alpha, beta and gamma radiation in electric and magnetic fields',
    type: 'radiation_electric_magnetic_field_deflection',
    defaultOptions: {
        title: 'Radiation Deflection in Electric and Magnetic Fields',
        showFieldLines: true,
        showDeflectionPaths: true,
        showLabels: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'uraniumDecaySeriesChainDiagram': {
    name: 'Uranium Decay Series Chain Diagram',
    category: 'Nuclear Chemistry',
    description: 'Complete uranium-238 decay series chain to stable lead-206',
    type: 'uranium_decay_series_chain',
    defaultOptions: {
        title: 'Uranium-238 Decay Series',
        showDecaySteps: true,
        showHalfLives: true,
        showRadiationTypes: true,
        width: 1100,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'exponentialDecayCurveHalfLifeAnnotatedGraph': {
    name: 'Exponential Decay Curve Half Life Annotated Graph',
    category: 'Nuclear Chemistry',
    description: 'Exponential radioactive decay curve with half-life intervals annotated',
    type: 'exponential_decay_curve_half_life_annotated',
    defaultOptions: {
        title: 'Exponential Radioactive Decay Curve',
        showHalfLifeMarkers: true,
        showAnnotations: true,
        showDecayEquation: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'carbon14RadiocarbonDatingDecayCurveDiagram': {
    name: 'Carbon 14 Radiocarbon Dating Decay Curve Diagram',
    category: 'Nuclear Chemistry',
    description: 'Carbon-14 decay curve applied to radiocarbon dating with age estimation',
    type: 'carbon14_radiocarbon_dating_decay_curve',
    defaultOptions: {
        title: 'Carbon-14 Radiocarbon Dating',
        showDecayCurve: true,
        showAgeScale: true,
        showAnnotations: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'uranium235NeutronInducedFissionChainReactionDiagram': {
    name: 'Uranium 235 Neutron Induced Fission Chain Reaction Diagram',
    category: 'Nuclear Chemistry',
    description: 'Uranium-235 neutron-induced fission chain reaction with branching',
    type: 'uranium235_neutron_induced_fission_chain_reaction',
    defaultOptions: {
        title: 'Uranium-235 Fission Chain Reaction',
        showChainBranching: true,
        showEnergyRelease: true,
        showLabels: true,
        width: 1100,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'deuteriumTritiumFusionEnergyReleaseDiagram': {
    name: 'Deuterium Tritium Fusion Energy Release Diagram',
    category: 'Nuclear Chemistry',
    description: 'D-T nuclear fusion reaction with energy release and helium-neutron products',
    type: 'deuterium_tritium_fusion_energy_release',
    defaultOptions: {
        title: 'Deuterium-Tritium Fusion',
        showReactionEquation: true,
        showEnergyRelease: true,
        showLabels: true,
        width: 1000,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'medicalRadioisotopePetScanTechnetiumDiagram': {
    name: 'Medical Radioisotope Pet Scan Technetium Diagram',
    category: 'Nuclear Chemistry',
    description: 'Medical applications of radioisotopes including PET scans and Technetium-99m',
    type: 'medical_radioisotope_pet_scan_technetium',
    defaultOptions: {
        title: 'Medical Radioisotopes: PET Scan and Technetium-99m',
        showDecayScheme: true,
        showApplicationDiagram: true,
        showLabels: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'radiationDoseUnitsBecquerelGraySievertDiagram': {
    name: 'Radiation Dose Units Becquerel Gray Sievert Diagram',
    category: 'Nuclear Chemistry',
    description: 'Comparison of radiation dose units: Becquerel, Gray, and Sievert with conversions',
    type: 'radiation_dose_units_becquerel_gray_sievert',
    defaultOptions: {
        title: 'Radiation Dose Units: Bq, Gy, Sv',
        showUnitDefinitions: true,
        showConversions: true,
        showLabels: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

// ===== AMOUNT OF SUBSTANCE / STOICHIOMETRY =====
'atomicScaleToMacroScaleBridgeDiagram': {
    name: 'Atomic Scale To Macro Scale Bridge Diagram',
    category: 'Amount of Substance',
    description: 'Bridge diagram connecting atomic scale particles to macroscopic measurable quantities',
    type: 'atomic_scale_to_macro_scale_bridge',
    defaultOptions: {
        title: 'Atomic to Macroscopic Scale Bridge',
        showScaleLevels: true,
        showConversionFactors: true,
        showLabels: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'avogadrosNumberParticleScalingDiagram': {
    name: 'Avogadros Number Particle Scaling Diagram',
    category: 'Amount of Substance',
    description: "Avogadro's number visualised with particle scaling from individual atoms to one mole",
    type: 'avogadros_number_particle_scaling',
    defaultOptions: {
        title: "Avogadro's Number and Particle Scaling",
        showParticleCount: true,
        showScaleComparison: true,
        showLabels: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'periodicTableMolarMassReadingDiagram': {
    name: 'Periodic Table Molar Mass Reading Diagram',
    category: 'Amount of Substance',
    description: 'Guide to reading molar mass values from the periodic table with worked examples',
    type: 'periodic_table_molar_mass_reading',
    defaultOptions: {
        title: 'Reading Molar Mass from the Periodic Table',
        showAtomicMass: true,
        showWorkedExamples: true,
        showLabels: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'moleTriangleInterconversionDiagram': {
    name: 'Mole Triangle Interconversion Diagram',
    category: 'Amount of Substance',
    description: 'Triangle diagram for interconverting moles, mass, molar mass, particles and volume',
    type: 'mole_triangle_interconversion',
    defaultOptions: {
        title: 'Mole Interconversion Triangle',
        showAllConversions: true,
        showFormulas: true,
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'elementalPercentageCompositionPieChartDiagram': {
    name: 'Elemental Percentage Composition Pie Chart Diagram',
    category: 'Amount of Substance',
    description: 'Pie chart showing percentage composition by mass for a compound',
    type: 'elemental_percentage_composition_pie_chart',
    defaultOptions: {
        title: 'Elemental Percentage Composition',
        showPercentageLabels: true,
        showMassCalculation: true,
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'empiricalToMolecularFormulaScalingDiagram': {
    name: 'Empirical To Molecular Formula Scaling Diagram',
    category: 'Amount of Substance',
    description: 'Step-by-step scaling from empirical formula to molecular formula using molar mass',
    type: 'empirical_to_molecular_formula_scaling',
    defaultOptions: {
        title: 'Empirical to Molecular Formula',
        showScalingSteps: true,
        showWorkedExample: true,
        showLabels: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'molarVolumeStandardConditionsComparisonDiagram': {
    name: 'Molar Volume Standard Conditions Comparison Diagram',
    category: 'Amount of Substance',
    description: 'Molar volume of gases at STP and RTP with comparison of conditions',
    type: 'molar_volume_standard_conditions_comparison',
    defaultOptions: {
        title: 'Molar Volume at Standard Conditions',
        showSTPandRTP: true,
        showComparison: true,
        showLabels: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'concentrationVolumeTriangleDiagram': {
    name: 'Concentration Volume Triangle Diagram',
    category: 'Amount of Substance',
    description: 'Triangle interconversion diagram for concentration, volume and moles',
    type: 'concentration_volume_triangle',
    defaultOptions: {
        title: 'Concentration-Volume-Moles Triangle',
        showFormulas: true,
        showWorkedExample: true,
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'hydratedSaltCrystalLatticeWaterDiagram': {
    name: 'Hydrated Salt Crystal Lattice Water Diagram',
    category: 'Amount of Substance',
    description: 'Crystal lattice of a hydrated salt showing water of crystallisation positions',
    type: 'hydrated_salt_crystal_lattice_water',
    defaultOptions: {
        title: 'Hydrated Salt and Water of Crystallisation',
        showLatticeStructure: true,
        showWaterMolecules: true,
        showLabels: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'isotopeAbundanceWeightedAverageMassDiagram': {
    name: 'Isotope Abundance Weighted Average Mass Diagram',
    category: 'Amount of Substance',
    description: 'Weighted average relative atomic mass calculation using isotope abundances',
    type: 'isotope_abundance_weighted_average_mass',
    defaultOptions: {
        title: 'Isotope Abundance and Weighted Average Mass',
        showIsotopeAbundances: true,
        showCalculation: true,
        showMassSpectrum: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'stoichiometricRatioReactantProductDiagram': {
    name: 'Stoichiometric Ratio Reactant Product Diagram',
    category: 'Amount of Substance',
    description: 'Mole ratio relationships between reactants and products in a balanced equation',
    type: 'stoichiometric_ratio_reactant_product',
    defaultOptions: {
        title: 'Stoichiometric Mole Ratios',
        showBalancedEquation: true,
        showMoleRatios: true,
        showLabels: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'divideByCoefficientsLimitingReagentDecisionDiagram': {
    name: 'Divide By Coefficients Limiting Reagent Decision Diagram',
    category: 'Amount of Substance',
    description: 'Decision diagram for identifying the limiting reagent by dividing moles by coefficients',
    type: 'divide_by_coefficients_limiting_reagent_decision',
    defaultOptions: {
        title: 'Limiting Reagent: Divide by Coefficients Method',
        showDecisionSteps: true,
        showWorkedExample: true,
        showLabels: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'theoreticalYieldCalculationFlowchartDiagram': {
    name: 'Theoretical Yield Calculation Flowchart Diagram',
    category: 'Amount of Substance',
    description: 'Flowchart for calculating theoretical yield from limiting reagent and stoichiometry',
    type: 'theoretical_yield_calculation_flowchart',
    defaultOptions: {
        title: 'Theoretical Yield Calculation Flowchart',
        showDecisionNodes: true,
        showWorkedExample: true,
        showLabels: true,
        width: 1000,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'theoreticalVsActualYieldBarComparisonDiagram': {
    name: 'Theoretical Vs Actual Yield Bar Comparison Diagram',
    category: 'Amount of Substance',
    description: 'Bar chart comparing theoretical and actual yield with percentage yield calculation',
    type: 'theoretical_vs_actual_yield_bar_comparison',
    defaultOptions: {
        title: 'Theoretical vs Actual Yield Comparison',
        showPercentageYield: true,
        showBarChart: true,
        showLabels: true,
        width: 900,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'excessReagentRemainingMassCalculationDiagram': {
    name: 'Excess Reagent Remaining Mass Calculation Diagram',
    category: 'Amount of Substance',
    description: 'Calculation diagram showing remaining mass of excess reagent after reaction',
    type: 'excess_reagent_remaining_mass_calculation',
    defaultOptions: {
        title: 'Excess Reagent Remaining Mass',
        showBeforeAfter: true,
        showCalculationSteps: true,
        showLabels: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'concentrationVolumeToMolesPrecipitationDiagram': {
    name: 'Concentration Volume To Moles Precipitation Diagram',
    category: 'Amount of Substance',
    description: 'Concentration and volume to moles conversion applied to a precipitation reaction',
    type: 'concentration_volume_to_moles_precipitation',
    defaultOptions: {
        title: 'Concentration and Volume to Moles in Precipitation',
        showConversionSteps: true,
        showPrecipitationReaction: true,
        showLabels: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'completeVsIncompleteCombustionProductsDiagram': {
    name: 'Complete Vs Incomplete Combustion Products Diagram',
    category: 'Amount of Substance',
    description: 'Comparison of products from complete and incomplete combustion reactions',
    type: 'complete_vs_incomplete_combustion_products',
    defaultOptions: {
        title: 'Complete vs Incomplete Combustion Products',
        showProductComparison: true,
        showEquations: true,
        showLabels: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'haberProcessFeedRatioOptimisationDiagram': {
    name: 'Haber Process Feed Ratio Optimisation Diagram',
    category: 'Amount of Substance',
    description: 'Feed gas ratio optimisation in the Haber process with stoichiometric analysis',
    type: 'haber_process_feed_ratio_optimisation',
    defaultOptions: {
        title: 'Haber Process Feed Ratio Optimisation',
        showFeedRatios: true,
        showStoichiometry: true,
        showLabels: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'cascadingYieldMultiStepSynthesisDiagram': {
    name: 'Cascading Yield Multi Step Synthesis Diagram',
    category: 'Amount of Substance',
    description: 'Overall yield calculation through cascading percentage yields in multi-step synthesis',
    type: 'cascading_yield_multi_step_synthesis',
    defaultOptions: {
        title: 'Cascading Yield in Multi-Step Synthesis',
        showYieldPerStep: true,
        showOverallYield: true,
        showLabels: true,
        width: 1100,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'impureReagentPurityCorrectionFlowchartDiagram': {
    name: 'Impure Reagent Purity Correction Flowchart Diagram',
    category: 'Amount of Substance',
    description: 'Flowchart for correcting mass calculations when using impure reagents',
    type: 'impure_reagent_purity_correction_flowchart',
    defaultOptions: {
        title: 'Impure Reagent Purity Correction Flowchart',
        showPurityCorrection: true,
        showDecisionNodes: true,
        showLabels: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'conservationOfMassAtomCountingDiagram': {
    name: 'Conservation Of Mass Atom Counting Diagram',
    category: 'Amount of Substance',
    description: 'Atom counting diagram demonstrating conservation of mass in chemical equations',
    type: 'conservation_of_mass_atom_counting',
    defaultOptions: {
        title: 'Conservation of Mass - Atom Counting',
        showAtomCounts: true,
        showBeforeAfter: true,
        showLabels: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

// ===== EQUATIONS & BALANCING =====
'equationTypeProgressionWordToNetIonicDiagram': {
    name: 'Equation Type Progression Word To Net Ionic Diagram',
    category: 'Chemical Equations',
    description: 'Progression from word equation to full ionic to net ionic equation with annotations',
    type: 'equation_type_progression_word_to_net_ionic',
    defaultOptions: {
        title: 'Equation Type Progression: Word to Net Ionic',
        showProgressionSteps: true,
        showAnnotations: true,
        showLabels: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'inspectionBalancingOrderMetalsNonmetalsHydrogenOxygenDiagram': {
    name: 'Inspection Balancing Order Metals Nonmetals Hydrogen Oxygen Diagram',
    category: 'Chemical Equations',
    description: 'Step-by-step inspection balancing order: metals, non-metals, hydrogen, then oxygen',
    type: 'inspection_balancing_order_metals_nonmetals_hydrogen_oxygen',
    defaultOptions: {
        title: 'Inspection Balancing: Recommended Order',
        showBalancingOrder: true,
        showWorkedExample: true,
        showLabels: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'algebraicCoefficientSimultaneousEquationsDiagram': {
    name: 'Algebraic Coefficient Simultaneous Equations Diagram',
    category: 'Chemical Equations',
    description: 'Algebraic method for balancing complex equations using simultaneous equations',
    type: 'algebraic_coefficient_simultaneous_equations',
    defaultOptions: {
        title: 'Algebraic Coefficient Balancing Method',
        showAlgebraicSteps: true,
        showSimultaneousEquations: true,
        showLabels: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'molecularToFullIonicToNetIonicProgressionDiagram': {
    name: 'Molecular To Full Ionic To Net Ionic Progression Diagram',
    category: 'Chemical Equations',
    description: 'Conversion progression from molecular to full ionic to net ionic equation',
    type: 'molecular_to_full_ionic_to_net_ionic_progression',
    defaultOptions: {
        title: 'Molecular → Full Ionic → Net Ionic Progression',
        showSpectatorIons: true,
        showProgressionSteps: true,
        showLabels: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'halfEquationElectronTransferOxidationReductionDiagram': {
    name: 'Half Equation Electron Transfer Oxidation Reduction Diagram',
    category: 'Chemical Equations',
    description: 'Half equations showing electron transfer in oxidation and reduction processes',
    type: 'half_equation_electron_transfer_oxidation_reduction',
    defaultOptions: {
        title: 'Half Equations: Electron Transfer in Redox',
        showHalfEquations: true,
        showElectronTransfer: true,
        showLabels: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'sixReactionTypesPatternClassificationDiagram': {
    name: 'Six Reaction Types Pattern Classification Diagram',
    category: 'Chemical Equations',
    description: 'Classification of the six main reaction types with pattern recognition',
    type: 'six_reaction_types_pattern_classification',
    defaultOptions: {
        title: 'Six Reaction Types Classification',
        showAllTypes: true,
        showPatternExamples: true,
        showLabels: true,
        width: 1100,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'polyatomicIonBracketExpansionUnitBalancingDiagram': {
    name: 'Polyatomic Ion Bracket Expansion Unit Balancing Diagram',
    category: 'Chemical Equations',
    description: 'Bracket expansion for polyatomic ions in unit balancing of chemical formulas',
    type: 'polyatomic_ion_bracket_expansion_unit_balancing',
    defaultOptions: {
        title: 'Polyatomic Ion Bracket Expansion',
        showBracketExpansion: true,
        showBalancingSteps: true,
        showLabels: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'coefficientMoleRatioMassVolumeInterpretationDiagram': {
    name: 'Coefficient Mole Ratio Mass Volume Interpretation Diagram',
    category: 'Chemical Equations',
    description: 'Interpretation of stoichiometric coefficients as mole ratios, masses and volumes',
    type: 'coefficient_mole_ratio_mass_volume_interpretation',
    defaultOptions: {
        title: 'Coefficient Interpretation: Moles, Mass, Volume',
        showCoefficientMeaning: true,
        showWorkedExample: true,
        showLabels: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'balancingVerificationAtomCountChecklistDiagram': {
    name: 'Balancing Verification Atom Count Checklist Diagram',
    category: 'Chemical Equations',
    description: 'Checklist-style atom count verification for confirming balanced equations',
    type: 'balancing_verification_atom_count_checklist',
    defaultOptions: {
        title: 'Balancing Verification: Atom Count Checklist',
        showChecklistFormat: true,
        showAtomCounts: true,
        showLabels: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

// ===== VOLUMETRIC ANALYSIS =====
'molarConcentrationSoluteVolumeTriangleDiagram': {
    name: 'Molar Concentration Solute Volume Triangle Diagram',
    category: 'Volumetric Analysis',
    description: 'Triangle relationship between molar concentration, moles of solute, and volume',
    type: 'molar_concentration_solute_volume_triangle',
    defaultOptions: {
        title: 'Molar Concentration Triangle',
        showTriangleFormula: true,
        showWorkedExample: true,
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'primaryStandardVolumetricFlaskPreparationDiagram': {
    name: 'Primary Standard Volumetric Flask Preparation Diagram',
    category: 'Volumetric Analysis',
    description: 'Step-by-step preparation of a primary standard solution using a volumetric flask',
    type: 'primary_standard_volumetric_flask_preparation',
    defaultOptions: {
        title: 'Primary Standard Solution Preparation',
        showPreparationSteps: true,
        showEquipmentLabels: true,
        showLabels: true,
        width: 1000,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'titrationApparatusSetupBurettePipetteFlaskDiagram': {
    name: 'Titration Apparatus Setup Burette Pipette Flask Diagram',
    category: 'Volumetric Analysis',
    description: 'Labelled titration apparatus showing burette, pipette and conical flask setup',
    type: 'titration_apparatus_setup_burette_pipette_flask',
    defaultOptions: {
        title: 'Titration Apparatus Setup',
        showEquipmentLabels: true,
        showTechniqueTips: true,
        showLabels: true,
        width: 900,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'acidBaseTitrationCurveIndicatorRangeDiagram': {
    name: 'Acid Base Titration Curve Indicator Range Diagram',
    category: 'Volumetric Analysis',
    description: 'Acid-base titration curve with indicator pH ranges overlaid for selection',
    type: 'acid_base_titration_curve_indicator_range',
    defaultOptions: {
        title: 'Acid-Base Titration Curve with Indicator Ranges',
        showEquivalencePoint: true,
        showIndicatorRanges: true,
        showBufferRegion: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'permanganateSelfIndicatingRedoxTitrationColorChangeDiagram': {
    name: 'Permanganate Self Indicating Redox Titration Color Change Diagram',
    category: 'Volumetric Analysis',
    description: 'Permanganate redox titration colour change as self-indicating end-point',
    type: 'permanganate_self_indicating_redox_titration_color_change',
    defaultOptions: {
        title: 'Permanganate Self-Indicating Redox Titration',
        showColorChange: true,
        showReactionEquation: true,
        showLabels: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'backTitrationTwoStageReactionFlowchartDiagram': {
    name: 'Back Titration Two Stage Reaction Flowchart Diagram',
    category: 'Volumetric Analysis',
    description: 'Two-stage flowchart for back titration calculations',
    type: 'back_titration_two_stage_reaction_flowchart',
    defaultOptions: {
        title: 'Back Titration Flowchart',
        showTwoStages: true,
        showCalculationSteps: true,
        showLabels: true,
        width: 1000,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'ionicDissociationSubscriptMultiplierConcentrationDiagram': {
    name: 'Ionic Dissociation Subscript Multiplier Concentration Diagram',
    category: 'Volumetric Analysis',
    description: 'Ionic dissociation with subscript multiplier effect on ion concentrations',
    type: 'ionic_dissociation_subscript_multiplier_concentration',
    defaultOptions: {
        title: 'Ionic Dissociation and Concentration Multipliers',
        showDissociationEquation: true,
        showConcentrationMultipliers: true,
        showLabels: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'precipitationFiltrationDryingWeighingGravimetricDiagram': {
    name: 'Precipitation Filtration Drying Weighing Gravimetric Diagram',
    category: 'Volumetric Analysis',
    description: 'Gravimetric analysis steps: precipitation, filtration, drying and weighing',
    type: 'precipitation_filtration_drying_weighing_gravimetric',
    defaultOptions: {
        title: 'Gravimetric Analysis Steps',
        showStepSequence: true,
        showEquipment: true,
        showLabels: true,
        width: 1100,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'edtaMetalComplexOneToOneBindingDiagram': {
    name: 'EDTA Metal Complex One To One Binding Diagram',
    category: 'Volumetric Analysis',
    description: 'EDTA complexometric titration showing 1:1 metal-EDTA binding complex',
    type: 'edta_metal_complex_one_to_one_binding',
    defaultOptions: {
        title: 'EDTA Metal Complex Binding (1:1)',
        showComplexStructure: true,
        showBindingSites: true,
        showLabels: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'commercialProductAnalysisTitrationWorkflowDiagram': {
    name: 'Commercial Product Analysis Titration Workflow Diagram',
    category: 'Volumetric Analysis',
    description: 'Full workflow for analysing a commercial product using titration methods',
    type: 'commercial_product_analysis_titration_workflow',
    defaultOptions: {
        title: 'Commercial Product Titration Analysis Workflow',
        showWorkflowSteps: true,
        showCalculationPath: true,
        showLabels: true,
        width: 1100,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

// ===== GASES (EXTENDED) =====
'gasVariablesPressureVolumeTemperatureMolsDiagram': {
    name: 'Gas Variables Pressure Volume Temperature Mols Diagram',
    category: 'Gases',
    description: 'Overview of the four gas variables: pressure, volume, temperature and moles',
    type: 'gas_variables_pressure_volume_temperature_mols',
    defaultOptions: {
        title: 'Gas Variables: P, V, T, n',
        showAllVariables: true,
        showRelationships: true,
        showLabels: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'idealGasLawPVnRTVariableRelationshipDiagram': {
    name: 'Ideal Gas Law PVnRT Variable Relationship Diagram',
    category: 'Gases',
    description: 'Annotated ideal gas law PV=nRT with variable relationships and units',
    type: 'ideal_gas_law_pvnrt_variable_relationship',
    defaultOptions: {
        title: 'Ideal Gas Law: PV = nRT',
        showVariableAnnotations: true,
        showUnits: true,
        showRearrangements: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'boylesCharlesGayLussacCombinedLawGraphsDiagram': {
    name: 'Boyles Charles Gay Lussac Combined Law Graphs Diagram',
    category: 'Gases',
    description: 'Graphical representations of Boyle\'s, Charles\'s, Gay-Lussac\'s and combined gas laws',
    type: 'boyles_charles_gaylussac_combined_law_graphs',
    defaultOptions: {
        title: 'Gas Laws Graphical Representations',
        showAllFourGraphs: true,
        showEquations: true,
        showLabels: true,
        width: 1200,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'partialPressureMoleFractionGasMixtureDiagram': {
    name: 'Partial Pressure Mole Fraction Gas Mixture Diagram',
    category: 'Gases',
    description: "Dalton's law: partial pressure from mole fractions in a gas mixture",
    type: 'partial_pressure_mole_fraction_gas_mixture',
    defaultOptions: {
        title: 'Partial Pressure and Mole Fraction',
        showDaltonsLaw: true,
        showMoleFractionCalculation: true,
        showLabels: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'avogadrosLawEqualVolumesEqualMolesSTPDiagram': {
    name: 'Avogadros Law Equal Volumes Equal Moles STP Diagram',
    category: 'Gases',
    description: "Avogadro's law showing equal volumes contain equal moles at STP",
    type: 'avogadros_law_equal_volumes_equal_moles_stp',
    defaultOptions: {
        title: "Avogadro's Law: Equal Volumes, Equal Moles at STP",
        showVolumeComparison: true,
        showMoleEquality: true,
        showLabels: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'solidLiquidGasPhaseConversionMoleHubDiagram': {
    name: 'Solid Liquid Gas Phase Conversion Mole Hub Diagram',
    category: 'Gases',
    description: 'Mole as central hub for converting between solid mass, liquid volume and gas volume',
    type: 'solid_liquid_gas_phase_conversion_mole_hub',
    defaultOptions: {
        title: 'Mole Hub: Phase Conversion Diagram',
        showPhaseConversions: true,
        showConversionFactors: true,
        showLabels: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'gasVolumeLimitingReagentDivideByCoefficientsComparisonDiagram': {
    name: 'Gas Volume Limiting Reagent Divide By Coefficients Comparison Diagram',
    category: 'Gases',
    description: 'Limiting reagent identification using gas volume ratios and coefficient division',
    type: 'gas_volume_limiting_reagent_divide_by_coefficients_comparison',
    defaultOptions: {
        title: 'Gas Volume and Limiting Reagent',
        showCoefficientDivision: true,
        showVolumeComparison: true,
        showLabels: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'vanDerWaalsCompressibilityFactorZDeviationDiagram': {
    name: 'Van Der Waals Compressibility Factor Z Deviation Diagram',
    category: 'Gases',
    description: 'Compressibility factor Z vs pressure showing deviation from ideal gas behaviour',
    type: 'van_der_waals_compressibility_factor_z_deviation',
    defaultOptions: {
        title: 'Compressibility Factor Z and Real Gas Deviation',
        showIdealLine: true,
        showRealGasCurves: true,
        showAnnotations: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'grahamsLawEffusionRateInverseSqrtMassDiagram': {
    name: 'Grahams Law Effusion Rate Inverse Sqrt Mass Diagram',
    category: 'Gases',
    description: "Graham's law: effusion rate inversely proportional to square root of molar mass",
    type: 'grahams_law_effusion_rate_inverse_sqrt_mass',
    defaultOptions: {
        title: "Graham's Law of Effusion",
        showEffusionDiagram: true,
        showFormula: true,
        showComparison: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'haberProcessGasVolumeRatioFeedStreamDiagram': {
    name: 'Haber Process Gas Volume Ratio Feed Stream Diagram',
    category: 'Gases',
    description: 'Gas volume ratios in the Haber process feed stream at industrial conditions',
    type: 'haber_process_gas_volume_ratio_feed_stream',
    defaultOptions: {
        title: 'Haber Process Gas Volume Ratios',
        showFeedStreamRatios: true,
        showProcessDiagram: true,
        showLabels: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

// ===== ORGANIC CHEMISTRY (EXTENDED) =====
'carbonHybridisationOrbitalGeometryDiagram': {
    name: 'Carbon Hybridisation Orbital Geometry Diagram',
    category: 'Organic Chemistry',
    description: 'sp3, sp2 and sp hybridisation of carbon with orbital geometry and bond angles',
    type: 'carbon_hybridisation_orbital_geometry',
    defaultOptions: {
        title: 'Carbon Hybridisation and Orbital Geometry',
        showSp3: true,
        showSp2: true,
        showSp: true,
        showBondAngles: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'alkaneHomologousSeriesBoilingPointTrendChart': {
    name: 'Alkane Homologous Series Boiling Point Trend Chart',
    category: 'Organic Chemistry',
    description: 'Boiling point trend chart for the alkane homologous series with chain length',
    type: 'alkane_homologous_series_boiling_point_trend',
    defaultOptions: {
        title: 'Alkane Homologous Series: Boiling Point Trend',
        showBoilingPoints: true,
        showTrendLine: true,
        showLabels: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'electrophilicAdditionBromoniumIonMechanism': {
    name: 'Electrophilic Addition Bromonium Ion Mechanism',
    category: 'Organic Chemistry',
    description: 'Electrophilic addition mechanism via bromonium ion intermediate',
    type: 'electrophilic_addition_bromonium_ion_mechanism',
    defaultOptions: {
        title: 'Electrophilic Addition: Bromonium Ion Mechanism',
        showCurvedArrows: true,
        showIntermediate: true,
        showLabels: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'alkyneSPHybridisationLinearGeometryDiagram': {
    name: 'Alkyne SP Hybridisation Linear Geometry Diagram',
    category: 'Organic Chemistry',
    description: 'sp hybridisation in alkynes with linear geometry and triple bond orbital diagram',
    type: 'alkyne_sp_hybridisation_linear_geometry',
    defaultOptions: {
        title: 'Alkyne sp Hybridisation and Linear Geometry',
        showOrbitalDiagram: true,
        showBondAngles: true,
        showLabels: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'benzeneResonanceDelocalisation': {
    name: 'Benzene Resonance Delocalisation',
    category: 'Organic Chemistry',
    description: 'Benzene resonance structures and delocalised pi electron cloud',
    type: 'benzene_resonance_delocalisation',
    defaultOptions: {
        title: 'Benzene Resonance and Delocalisation',
        showResonanceStructures: true,
        showPiCloud: true,
        showLabels: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'fractionalDistillationColumnFractionsBpDiagram': {
    name: 'Fractional Distillation Column Fractions Bp Diagram',
    category: 'Organic Chemistry',
    description: 'Fractional distillation column with petroleum fractions and boiling point ranges',
    type: 'fractional_distillation_column_fractions_bp',
    defaultOptions: {
        title: 'Fractional Distillation Column and Fractions',
        showFractionLabels: true,
        showBoilingPointRanges: true,
        showUses: true,
        width: 900,
        height: 900,
        backgroundColor: '#ffffff'
    }
},
'chemicalTestsHydrocarbonIdentificationFlowchart': {
    name: 'Chemical Tests Hydrocarbon Identification Flowchart',
    category: 'Organic Chemistry',
    description: 'Flowchart for identifying hydrocarbons using chemical tests',
    type: 'chemical_tests_hydrocarbon_identification_flowchart',
    defaultOptions: {
        title: 'Hydrocarbon Identification Flowchart',
        showTestReagents: true,
        showObservations: true,
        showDecisionNodes: true,
        width: 1000,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'chainPositionGeometricIsomerismComparisonDiagram': {
    name: 'Chain Position Geometric Isomerism Comparison Diagram',
    category: 'Organic Chemistry',
    description: 'Comparison of chain, position and geometric isomerism types with examples',
    type: 'chain_position_geometric_isomerism_comparison',
    defaultOptions: {
        title: 'Chain, Position and Geometric Isomerism',
        showAllIsomerTypes: true,
        showExamples: true,
        showLabels: true,
        width: 1100,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'hydrocarbonReactionTypesCrossReferenceTable': {
    name: 'Hydrocarbon Reaction Types Cross Reference Table',
    category: 'Organic Chemistry',
    description: 'Cross-reference table of hydrocarbon reaction types with conditions and products',
    type: 'hydrocarbon_reaction_types_cross_reference_table',
    defaultOptions: {
        title: 'Hydrocarbon Reaction Types Cross-Reference',
        showReactionTypes: true,
        showConditions: true,
        showProducts: true,
        width: 1200,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'petrochemicalFeedstockProductsFlowDiagram': {
    name: 'Petrochemical Feedstock Products Flow Diagram',
    category: 'Organic Chemistry',
    description: 'Flow diagram of petrochemical feedstocks and their downstream products',
    type: 'petrochemical_feedstock_products_flow',
    defaultOptions: {
        title: 'Petrochemical Feedstock and Products Flow',
        showFeedstocks: true,
        showProducts: true,
        showProcessPaths: true,
        width: 1200,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'functionalGroupClassificationAndPolarityOverviewDiagram': {
    name: 'Functional Group Classification And Polarity Overview Diagram',
    category: 'Organic Chemistry',
    description: 'Overview of functional group classifications with polarity and reactivity summary',
    type: 'functional_group_classification_and_polarity_overview',
    defaultOptions: {
        title: 'Functional Groups: Classification and Polarity',
        showFunctionalGroups: true,
        showPolarityArrows: true,
        showReactivitySummary: true,
        width: 1200,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'sn1SN2MechanismComparisonEnergyProfileDiagram': {
    name: 'SN1 SN2 Mechanism Comparison Energy Profile Diagram',
    category: 'Organic Chemistry',
    description: 'Side-by-side energy profile comparison of SN1 and SN2 mechanisms',
    type: 'sn1_sn2_mechanism_comparison_energy_profile',
    defaultOptions: {
        title: 'SN1 vs SN2 Mechanism Energy Profiles',
        showEnergyProfiles: true,
        showMechanismSteps: true,
        showLabels: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'primarySecondaryTertiaryAlcoholOxidationProductsDiagram': {
    name: 'Primary Secondary Tertiary Alcohol Oxidation Products Diagram',
    category: 'Organic Chemistry',
    description: 'Oxidation products of primary, secondary and tertiary alcohols comparison',
    type: 'primary_secondary_tertiary_alcohol_oxidation_products',
    defaultOptions: {
        title: 'Alcohol Oxidation: Primary, Secondary, Tertiary',
        showOxidationProducts: true,
        showReagents: true,
        showLabels: true,
        width: 1100,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'williamsonEtherSynthesisReactionSchemeDiagram': {
    name: 'Williamson Ether Synthesis Reaction Scheme Diagram',
    category: 'Organic Chemistry',
    description: 'Williamson ether synthesis reaction scheme with nucleophilic substitution mechanism',
    type: 'williamson_ether_synthesis_reaction_scheme',
    defaultOptions: {
        title: 'Williamson Ether Synthesis',
        showReactionScheme: true,
        showMechanism: true,
        showLabels: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'nucleophilicAdditionCarbonylMechanismDiagram': {
    name: 'Nucleophilic Addition Carbonyl Mechanism Diagram',
    category: 'Organic Chemistry',
    description: 'Nucleophilic addition mechanism at the carbonyl group with curved arrows',
    type: 'nucleophilic_addition_carbonyl_mechanism',
    defaultOptions: {
        title: 'Nucleophilic Addition to Carbonyl',
        showCurvedArrows: true,
        showIntermediate: true,
        showLabels: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'carboxylateResonanceStabilisationAcidityDiagram': {
    name: 'Carboxylate Resonance Stabilisation Acidity Diagram',
    category: 'Organic Chemistry',
    description: 'Carboxylate ion resonance stabilisation and its effect on carboxylic acid acidity',
    type: 'carboxylate_resonance_stabilisation_acidity',
    defaultOptions: {
        title: 'Carboxylate Resonance Stabilisation and Acidity',
        showResonanceStructures: true,
        showChargeDelocalisation: true,
        showLabels: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'fischerEsterificationEquilibriumReactionSchemeDiagram': {
    name: 'Fischer Esterification Equilibrium Reaction Scheme Diagram',
    category: 'Organic Chemistry',
    description: 'Fischer esterification equilibrium reaction scheme with conditions',
    type: 'fischer_esterification_equilibrium_reaction_scheme',
    defaultOptions: {
        title: 'Fischer Esterification Equilibrium',
        showReactionScheme: true,
        showEquilibriumArrows: true,
        showConditions: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'amineBasicityComparisonAlkylArylAmidePKbDiagram': {
    name: 'Amine Basicity Comparison Alkyl Aryl Amide PKb Diagram',
    category: 'Organic Chemistry',
    description: 'Basicity comparison of alkyl, aryl amines and amides with pKb values',
    type: 'amine_basicity_comparison_alkyl_aryl_amide_pkb',
    defaultOptions: {
        title: 'Amine Basicity: Alkyl, Aryl, Amide Comparison',
        showPKbValues: true,
        showReasoningAnnotations: true,
        showLabels: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'amidePlanarResonanceBondRotationRestrictionDiagram': {
    name: 'Amide Planar Resonance Bond Rotation Restriction Diagram',
    category: 'Organic Chemistry',
    description: 'Amide planarity from resonance stabilisation restricting C-N bond rotation',
    type: 'amide_planar_resonance_bond_rotation_restriction',
    defaultOptions: {
        title: 'Amide Planarity: Resonance and Bond Rotation',
        showResonanceContributors: true,
        showPlanarStructure: true,
        showLabels: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'carboxylicAcidDerivativesReactivityOrderDiagram': {
    name: 'Carboxylic Acid Derivatives Reactivity Order Diagram',
    category: 'Organic Chemistry',
    description: 'Reactivity order of carboxylic acid derivatives towards nucleophilic substitution',
    type: 'carboxylic_acid_derivatives_reactivity_order',
    defaultOptions: {
        title: 'Carboxylic Acid Derivatives Reactivity Order',
        showReactivityLadder: true,
        showReasoningAnnotations: true,
        showLabels: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'nitrileHydrolysisReductionTransformationFlowDiagram': {
    name: 'Nitrile Hydrolysis Reduction Transformation Flow Diagram',
    category: 'Organic Chemistry',
    description: 'Flow diagram of nitrile hydrolysis to carboxylic acid and reduction to amine',
    type: 'nitrile_hydrolysis_reduction_transformation_flow',
    defaultOptions: {
        title: 'Nitrile Hydrolysis and Reduction Transformations',
        showFlowPaths: true,
        showReagents: true,
        showLabels: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'phenolPhenoxideResonanceAcidityComparisonDiagram': {
    name: 'Phenol Phenoxide Resonance Acidity Comparison Diagram',
    category: 'Organic Chemistry',
    description: 'Phenol acidity explained through phenoxide resonance stabilisation comparison',
    type: 'phenol_phenoxide_resonance_acidity_comparison',
    defaultOptions: {
        title: 'Phenol and Phenoxide: Resonance and Acidity',
        showResonanceStructures: true,
        showAcidityComparison: true,
        showLabels: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'functionalGroupInterconversionNetworkDiagram': {
    name: 'Functional Group Interconversion Network Diagram',
    category: 'Organic Chemistry',
    description: 'Network diagram of functional group interconversions with reagents and conditions',
    type: 'functional_group_interconversion_network',
    defaultOptions: {
        title: 'Functional Group Interconversion Network',
        showAllInterconversions: true,
        showReagents: true,
        showConditions: true,
        width: 1300,
        height: 900,
        backgroundColor: '#ffffff'
    }
},
'curvedArrowElectronFlowNucleophileElectrophileDiagram': {
    name: 'Curved Arrow Electron Flow Nucleophile Electrophile Diagram',
    category: 'Organic Chemistry',
    description: 'Curved arrow notation for electron flow between nucleophile and electrophile',
    type: 'curved_arrow_electron_flow_nucleophile_electrophile',
    defaultOptions: {
        title: 'Curved Arrow: Nucleophile-Electrophile Electron Flow',
        showCurvedArrows: true,
        showChargeChanges: true,
        showLabels: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'sn1SN2EASFreeRadicalSubstitutionMechanismComparisonDiagram': {
    name: 'SN1 SN2 EAS Free Radical Substitution Mechanism Comparison Diagram',
    category: 'Organic Chemistry',
    description: 'Side-by-side comparison of SN1, SN2, EAS and free radical substitution mechanisms',
    type: 'sn1_sn2_eas_free_radical_substitution_mechanism_comparison',
    defaultOptions: {
        title: 'Mechanism Comparison: SN1, SN2, EAS, Free Radical',
        showAllMechanisms: true,
        showKeyDifferences: true,
        showLabels: true,
        width: 1300,
        height: 900,
        backgroundColor: '#ffffff'
    }
},
'e2AntiPeriplanarGeometryZaitsevHofmannRegioselectivityDiagram': {
    name: 'E2 Anti Periplanar Geometry Zaitsev Hofmann Regioselectivity Diagram',
    category: 'Organic Chemistry',
    description: 'E2 elimination anti-periplanar geometry with Zaitsev and Hofmann regioselectivity',
    type: 'e2_anti_periplanar_geometry_zaitsev_hofmann_regioselectivity',
    defaultOptions: {
        title: 'E2: Anti-Periplanar Geometry and Regioselectivity',
        showAntiPeriplanar: true,
        showZaitsevHofmann: true,
        showLabels: true,
        width: 1100,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'electrophilicNucleophilicRadicalAdditionComparisonDiagram': {
    name: 'Electrophilic Nucleophilic Radical Addition Comparison Diagram',
    category: 'Organic Chemistry',
    description: 'Comparison of electrophilic, nucleophilic and radical addition mechanisms',
    type: 'electrophilic_nucleophilic_radical_addition_comparison',
    defaultOptions: {
        title: 'Addition Mechanism Comparison: Electrophilic, Nucleophilic, Radical',
        showMechanismComparison: true,
        showSubstratePreferences: true,
        showLabels: true,
        width: 1200,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'organicOxidationLadderAlkaneToCarboxylicAcidDiagram': {
    name: 'Organic Oxidation Ladder Alkane To Carboxylic Acid Diagram',
    category: 'Organic Chemistry',
    description: 'Oxidation ladder from alkane through alcohol, aldehyde to carboxylic acid',
    type: 'organic_oxidation_ladder_alkane_to_carboxylic_acid',
    defaultOptions: {
        title: 'Organic Oxidation Ladder',
        showOxidationSteps: true,
        showReagents: true,
        showLabels: true,
        width: 1000,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'aldolCondensationClaisenEsterMechanismSchemeDiagram': {
    name: 'Aldol Condensation Claisen Ester Mechanism Scheme Diagram',
    category: 'Organic Chemistry',
    description: 'Aldol condensation and Claisen ester condensation mechanism schemes',
    type: 'aldol_condensation_claisen_ester_mechanism_scheme',
    defaultOptions: {
        title: 'Aldol and Claisen Condensation Mechanisms',
        showAldolMechanism: true,
        showClaisenMechanism: true,
        showLabels: true,
        width: 1200,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'carbocationRearrangementHydrideAlkylShiftEnergyDiagram': {
    name: 'Carbocation Rearrangement Hydride Alkyl Shift Energy Diagram',
    category: 'Organic Chemistry',
    description: 'Carbocation rearrangements via hydride and alkyl shifts with energy diagram',
    type: 'carbocation_rearrangement_hydride_alkyl_shift_energy',
    defaultOptions: {
        title: 'Carbocation Rearrangements: Hydride and Alkyl Shifts',
        showRearrangementMechanism: true,
        showEnergyDiagram: true,
        showLabels: true,
        width: 1100,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'dielsAlderHOMOLUMOOrbitalSymmetryFrontierDiagram': {
    name: 'Diels Alder HOMO LUMO Orbital Symmetry Frontier Diagram',
    category: 'Organic Chemistry',
    description: 'Diels-Alder reaction with HOMO-LUMO frontier orbital symmetry analysis',
    type: 'diels_alder_homo_lumo_orbital_symmetry_frontier',
    defaultOptions: {
        title: 'Diels-Alder: HOMO-LUMO Orbital Symmetry',
        showHOMOLUMO: true,
        showSymmetryMatch: true,
        showLabels: true,
        width: 1100,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'namedReactionsMechanismClassificationSummaryTable': {
    name: 'Named Reactions Mechanism Classification Summary Table',
    category: 'Organic Chemistry',
    description: 'Summary table classifying named organic reactions by mechanism type',
    type: 'named_reactions_mechanism_classification_summary_table',
    defaultOptions: {
        title: 'Named Reactions: Mechanism Classification',
        showReactionNames: true,
        showMechanismTypes: true,
        showConditions: true,
        width: 1300,
        height: 900,
        backgroundColor: '#ffffff'
    }
},
'retrosynthesisDisconnectionSynthonArrowNotationDiagram': {
    name: 'Retrosynthesis Disconnection Synthon Arrow Notation Diagram',
    category: 'Organic Chemistry',
    description: 'Retrosynthetic analysis with disconnection approach and synthon arrow notation',
    type: 'retrosynthesis_disconnection_synthon_arrow_notation',
    defaultOptions: {
        title: 'Retrosynthesis: Disconnection and Synthon Notation',
        showDisconnectionArrows: true,
        showSynthons: true,
        showLabels: true,
        width: 1100,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

// ===== STEREOCHEMISTRY =====
'wedgeDashFischerNewmanProjectionComparisonDiagram': {
    name: 'Wedge Dash Fischer Newman Projection Comparison Diagram',
    category: 'Stereochemistry',
    description: 'Comparison of wedge-dash, Fischer and Newman projection representations',
    type: 'wedge_dash_fischer_newman_projection_comparison',
    defaultOptions: {
        title: 'Projection Comparison: Wedge-Dash, Fischer, Newman',
        showAllProjections: true,
        showInterconversions: true,
        showLabels: true,
        width: 1200,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'chiralCentreTetrahedralFourDifferentGroupsHandednessDiagram': {
    name: 'Chiral Centre Tetrahedral Four Different Groups Handedness Diagram',
    category: 'Stereochemistry',
    description: 'Chiral centre tetrahedral geometry with four different groups and handedness',
    type: 'chiral_centre_tetrahedral_four_different_groups_handedness',
    defaultOptions: {
        title: 'Chiral Centre: Tetrahedral Geometry and Handedness',
        showTetrahedralGeometry: true,
        showHandedness: true,
        showLabels: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'polarimeterPlaneOfPolarisedLightRotationDiagram': {
    name: 'Polarimeter Plane Of Polarised Light Rotation Diagram',
    category: 'Stereochemistry',
    description: 'Polarimeter setup showing rotation of plane-polarised light by chiral compounds',
    type: 'polarimeter_plane_of_polarised_light_rotation',
    defaultOptions: {
        title: 'Polarimeter and Plane-Polarised Light Rotation',
        showPolarimeterSetup: true,
        showLightRotation: true,
        showLabels: true,
        width: 1100,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'diastereomerEprimerAnomarMesoRelationshipDiagram': {
    name: 'Diastereomer Eprimer Anomar Meso Relationship Diagram',
    category: 'Stereochemistry',
    description: 'Relationships between diastereomers, epimers, anomers and meso compounds',
    type: 'diastereomer_eprimer_anomar_meso_relationship',
    defaultOptions: {
        title: 'Diastereomers, Epimers, Anomers and Meso Compounds',
        showRelationships: true,
        showExamples: true,
        showLabels: true,
        width: 1100,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'cyclohexaneChairBoatAxialEquatorialNewmanDiagram': {
    name: 'Cyclohexane Chair Boat Axial Equatorial Newman Diagram',
    category: 'Stereochemistry',
    description: 'Cyclohexane chair and boat conformations with axial/equatorial positions and Newman projections',
    type: 'cyclohexane_chair_boat_axial_equatorial_newman',
    defaultOptions: {
        title: 'Cyclohexane Conformations: Chair, Boat, Newman',
        showChairConformation: true,
        showBoatConformation: true,
        showAxialEquatorial: true,
        showNewmanProjection: true,
        width: 1200,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'sn2InversionSn1RacemisationE2AntiPeriplanarStereoDiagram': {
    name: 'SN2 Inversion SN1 Racemisation E2 Anti Periplanar Stereo Diagram',
    category: 'Stereochemistry',
    description: 'Stereochemical outcomes: SN2 inversion, SN1 racemisation, E2 anti-periplanar',
    type: 'sn2_inversion_sn1_racemisation_e2_anti_periplanar_stereo',
    defaultOptions: {
        title: 'Stereochemical Outcomes: SN2, SN1, E2',
        showSN2Inversion: true,
        showSN1Racemisation: true,
        showE2Geometry: true,
        width: 1200,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'prochiralityDiagram': {
    name: 'Prochirality Diagram',
    category: 'Stereochemistry',
    description: 'Prochirality: enantiotopic and diastereotopic faces and groups in prochiral centres',
    type: 'prochirality',
    defaultOptions: {
        title: 'Prochirality: Enantiotopic and Diastereotopic Groups',
        showProchiralCentre: true,
        showFaceLabels: true,
        showLabels: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'classicalResolutionDiastereomericSaltCrystallisationFlowDiagram': {
    name: 'Classical Resolution Diastereomeric Salt Crystallisation Flow Diagram',
    category: 'Stereochemistry',
    description: 'Classical resolution of enantiomers via diastereomeric salt formation and crystallisation',
    type: 'classical_resolution_diastereomeric_salt_crystallisation_flow',
    defaultOptions: {
        title: 'Classical Resolution: Diastereomeric Salt Crystallisation',
        showResolutionFlow: true,
        showCrystallisationStep: true,
        showLabels: true,
        width: 1100,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'laminoAcidDGlucoseNaturalConfigurationFischerProjectionDiagram': {
    name: 'L Amino Acid D Glucose Natural Configuration Fischer Projection Diagram',
    category: 'Stereochemistry',
    description: 'Fischer projections of L-amino acids and D-glucose showing natural configurations',
    type: 'l_amino_acid_d_glucose_natural_configuration_fischer_projection',
    defaultOptions: {
        title: 'L-Amino Acids and D-Glucose: Fischer Projections',
        showFischerProjections: true,
        showConfigurationLabels: true,
        showLabels: true,
        width: 1000,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'homotopicEnantiotopicDiastereotopicGroupsNMRDistinctionDiagram': {
    name: 'Homotopic Enantiotopic Diastereotopic Groups NMR Distinction Diagram',
    category: 'Stereochemistry',
    description: 'NMR distinction between homotopic, enantiotopic and diastereotopic groups',
    type: 'homotopic_enantiotopic_diastereotopic_groups_nmr_distinction',
    defaultOptions: {
        title: 'Homotopic, Enantiotopic, Diastereotopic Groups in NMR',
        showGroupTypes: true,
        showNMRDistinction: true,
        showLabels: true,
        width: 1100,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

// ===== SPECTROSCOPY =====
'electromagneticSpectrumEnergyFrequencyWavelengthDiagram': {
    name: 'Electromagnetic Spectrum Energy Frequency Wavelength Diagram',
    category: 'Spectroscopy',
    description: 'Full electromagnetic spectrum with energy, frequency and wavelength scales',
    type: 'electromagnetic_spectrum_energy_frequency_wavelength',
    defaultOptions: {
        title: 'Electromagnetic Spectrum',
        showEnergyScale: true,
        showFrequencyScale: true,
        showWavelengthScale: true,
        showRegionLabels: true,
        width: 1300,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'massSpectrumMolecularIonFragmentIsotopePatternAnnotatedDiagram': {
    name: 'Mass Spectrum Molecular Ion Fragment Isotope Pattern Annotated Diagram',
    category: 'Spectroscopy',
    description: 'Annotated mass spectrum showing molecular ion, fragmentation and isotope patterns',
    type: 'mass_spectrum_molecular_ion_fragment_isotope_pattern_annotated',
    defaultOptions: {
        title: 'Mass Spectrum: Molecular Ion, Fragments, Isotope Patterns',
        showMolecularIon: true,
        showFragmentPeaks: true,
        showIsotopePattern: true,
        showAnnotations: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'irAbsorptionBandsFunctionalGroupWavenumberReferenceChart': {
    name: 'IR Absorption Bands Functional Group Wavenumber Reference Chart',
    category: 'Spectroscopy',
    description: 'Reference chart of IR absorption bands by functional group and wavenumber range',
    type: 'ir_absorption_bands_functional_group_wavenumber_reference',
    defaultOptions: {
        title: 'IR Absorption Bands Reference Chart',
        showWavenumberRanges: true,
        showFunctionalGroups: true,
        showBandStrengths: true,
        width: 1200,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'uvVisElectronicTransitionConjugationBathochromicShiftDiagram': {
    name: 'UV Vis Electronic Transition Conjugation Bathochromic Shift Diagram',
    category: 'Spectroscopy',
    description: 'UV-Vis electronic transitions with conjugation length and bathochromic shift',
    type: 'uv_vis_electronic_transition_conjugation_bathochromic_shift',
    defaultOptions: {
        title: 'UV-Vis: Electronic Transitions and Bathochromic Shift',
        showEnergyLevels: true,
        showConjugationEffect: true,
        showLabels: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'protonNMRChemicalShiftCouplingMultiplicityIntegrationAnnotatedSpectrum': {
    name: 'Proton NMR Chemical Shift Coupling Multiplicity Integration Annotated Spectrum',
    category: 'Spectroscopy',
    description: 'Annotated 1H NMR spectrum showing chemical shift, coupling, multiplicity and integration',
    type: 'proton_nmr_chemical_shift_coupling_multiplicity_integration_annotated',
    defaultOptions: {
        title: '¹H NMR: Shift, Coupling, Multiplicity, Integration',
        showChemicalShifts: true,
        showCouplingPatterns: true,
        showIntegration: true,
        showAnnotations: true,
        width: 1200,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'carbon13ChemicalShiftRangeDEPT135PhaseComparisonDiagram': {
    name: 'Carbon 13 Chemical Shift Range DEPT 135 Phase Comparison Diagram',
    category: 'Spectroscopy',
    description: '13C chemical shift ranges with DEPT-135 phase comparison for CH, CH2, CH3',
    type: 'carbon13_chemical_shift_range_dept135_phase_comparison',
    defaultOptions: {
        title: '¹³C NMR: Chemical Shifts and DEPT-135',
        showShiftRanges: true,
        showDEPT135Phases: true,
        showLabels: true,
        width: 1200,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'cosy_hsqc_hmbc_noesy_2dNMRCrosspeakConnectivityMapDiagram': {
    name: 'COSY HSQC HMBC NOESY 2D NMR Crosspeak Connectivity Map Diagram',
    category: 'Spectroscopy',
    description: '2D NMR crosspeak connectivity maps for COSY, HSQC, HMBC and NOESY experiments',
    type: 'cosy_hsqc_hmbc_noesy_2d_nmr_crosspeak_connectivity_map',
    defaultOptions: {
        title: '2D NMR: COSY, HSQC, HMBC, NOESY Connectivity',
        showCOSY: true,
        showHSQC: true,
        showHMBC: true,
        showNOESY: true,
        width: 1300,
        height: 900,
        backgroundColor: '#ffffff'
    }
},
'structureElucidationStepwiseDecisionTreeFlowchart': {
    name: 'Structure Elucidation Stepwise Decision Tree Flowchart',
    category: 'Spectroscopy',
    description: 'Stepwise decision tree flowchart for organic structure elucidation using spectroscopy',
    type: 'structure_elucidation_stepwise_decision_tree_flowchart',
    defaultOptions: {
        title: 'Structure Elucidation Decision Tree',
        showDecisionNodes: true,
        showSpectralData: true,
        showLabels: true,
        width: 1200,
        height: 900,
        backgroundColor: '#ffffff'
    }
},
'xrayCrystallographyFluorescenceRamanCircularDichroismTechniqueOverviewDiagram': {
    name: 'XRay Crystallography Fluorescence Raman Circular Dichroism Technique Overview Diagram',
    category: 'Spectroscopy',
    description: 'Overview of X-ray crystallography, fluorescence, Raman and circular dichroism techniques',
    type: 'xray_crystallography_fluorescence_raman_circular_dichroism_overview',
    defaultOptions: {
        title: 'Advanced Spectroscopic Techniques Overview',
        showTechniqueComparison: true,
        showApplications: true,
        showLabels: true,
        width: 1300,
        height: 850,
        backgroundColor: '#ffffff'
    }
},
'spectroscopicFingerprintFunctionalGroupCrossReferenceTable': {
    name: 'Spectroscopic Fingerprint Functional Group Cross Reference Table',
    category: 'Spectroscopy',
    description: 'Cross-reference table of spectroscopic fingerprints for functional group identification',
    type: 'spectroscopic_fingerprint_functional_group_cross_reference',
    defaultOptions: {
        title: 'Spectroscopic Fingerprint Cross-Reference',
        showIRData: true,
        showNMRData: true,
        showMSData: true,
        width: 1300,
        height: 900,
        backgroundColor: '#ffffff'
    }
},

// ===== POLYMERS =====
'polymerClassificationMolecularWeightDistributionDispersityDiagram': {
    name: 'Polymer Classification Molecular Weight Distribution Dispersity Diagram',
    category: 'Polymers',
    description: 'Polymer classification with molecular weight distribution and dispersity index',
    type: 'polymer_classification_molecular_weight_distribution_dispersity',
    defaultOptions: {
        title: 'Polymer Classification and Molecular Weight Distribution',
        showDistributionCurve: true,
        showDispersityIndex: true,
        showLabels: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'freeRadicalChainGrowthInitiationPropagationTerminationDiagram': {
    name: 'Free Radical Chain Growth Initiation Propagation Termination Diagram',
    category: 'Polymers',
    description: 'Free radical chain growth polymerisation stages: initiation, propagation, termination',
    type: 'free_radical_chain_growth_initiation_propagation_termination',
    defaultOptions: {
        title: 'Free Radical Polymerisation: Initiation, Propagation, Termination',
        showAllStages: true,
        showMechanismArrows: true,
        showLabels: true,
        width: 1100,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'carothersEquationConversionVsMolecularWeightStepGrowthDiagram': {
    name: 'Carothers Equation Conversion Vs Molecular Weight Step Growth Diagram',
    category: 'Polymers',
    description: "Carothers equation: conversion vs molecular weight relationship in step-growth polymerisation",
    type: 'carothers_equation_conversion_vs_molecular_weight_step_growth',
    defaultOptions: {
        title: "Carothers Equation: Conversion vs Molecular Weight",
        showCarothersEquation: true,
        showGraph: true,
        showLabels: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'tgTmCrystallinityAmorphousMechanicalPropertyRelationshipDiagram': {
    name: 'Tg Tm Crystallinity Amorphous Mechanical Property Relationship Diagram',
    category: 'Polymers',
    description: 'Relationship between Tg, Tm, crystallinity and mechanical properties of polymers',
    type: 'tg_tm_crystallinity_amorphous_mechanical_property_relationship',
    defaultOptions: {
        title: 'Tg, Tm and Crystallinity Effects on Mechanical Properties',
        showThermalTransitions: true,
        showPropertyChanges: true,
        showLabels: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'vulcanisationSulfurCrosslinkingNaturalRubberNetworkDiagram': {
    name: 'Vulcanisation Sulfur Crosslinking Natural Rubber Network Diagram',
    category: 'Polymers',
    description: 'Vulcanisation of natural rubber via sulfur crosslinking to form a polymer network',
    type: 'vulcanisation_sulfur_crosslinking_natural_rubber_network',
    defaultOptions: {
        title: 'Vulcanisation: Sulfur Crosslinking in Natural Rubber',
        showCrosslinkingDiagram: true,
        showNetworkStructure: true,
        showLabels: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'celluloseStarchAlpha_betaGlycosidicLinkageComparisonDiagram': {
    name: 'Cellulose Starch Alpha Beta Glycosidic Linkage Comparison Diagram',
    category: 'Polymers',
    description: 'Comparison of alpha and beta glycosidic linkages in starch and cellulose',
    type: 'cellulose_starch_alpha_beta_glycosidic_linkage_comparison',
    defaultOptions: {
        title: 'Starch vs Cellulose: Alpha/Beta Glycosidic Linkages',
        showLinkageComparison: true,
        showStructuralConsequences: true,
        showLabels: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'pla_phaDegradationPathwayCompostingConditionsDiagram': {
    name: 'PLA PHA Degradation Pathway Composting Conditions Diagram',
    category: 'Polymers',
    description: 'Degradation pathways and composting conditions for PLA and PHA biopolymers',
    type: 'pla_pha_degradation_pathway_composting_conditions',
    defaultOptions: {
        title: 'PLA and PHA Degradation Pathways',
        showDegradationSteps: true,
        showCompostingConditions: true,
        showLabels: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'gpcMolecularWeightDistributionChromatogramDispersityDiagram': {
    name: 'GPC Molecular Weight Distribution Chromatogram Dispersity Diagram',
    category: 'Polymers',
    description: 'GPC chromatogram with molecular weight distribution and dispersity index annotation',
    type: 'gpc_molecular_weight_distribution_chromatogram_dispersity',
    defaultOptions: {
        title: 'GPC: Molecular Weight Distribution and Dispersity',
        showChromatogram: true,
        showDispersityAnnotation: true,
        showLabels: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'plasticRecyclingHierarchyMechanicalChemicalLifecycleDiagram': {
    name: 'Plastic Recycling Hierarchy Mechanical Chemical Lifecycle Diagram',
    category: 'Polymers',
    description: 'Plastic recycling hierarchy comparing mechanical and chemical recycling lifecycles',
    type: 'plastic_recycling_hierarchy_mechanical_chemical_lifecycle',
    defaultOptions: {
        title: 'Plastic Recycling Hierarchy and Lifecycle',
        showRecyclingHierarchy: true,
        showLifecycleComparison: true,
        showLabels: true,
        width: 1100,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'conductingPolymerBlockCopolymerSelfAssemblyHydrogelSmartMaterialOverviewDiagram': {
    name: 'Conducting Polymer Block Copolymer Self Assembly Hydrogel Smart Material Overview Diagram',
    category: 'Polymers',
    description: 'Overview of advanced polymer materials: conducting polymers, block copolymers, hydrogels',
    type: 'conducting_polymer_block_copolymer_self_assembly_hydrogel_smart_material_overview',
    defaultOptions: {
        title: 'Advanced Polymer Materials Overview',
        showMaterialTypes: true,
        showStructureApplications: true,
        showLabels: true,
        width: 1300,
        height: 850,
        backgroundColor: '#ffffff'
    }
},

// ===== KINETICS =====
'reactionRateConcentrationTimeAnnotatedCurveDiagram': {
    name: 'Reaction Rate Concentration Time Annotated Curve Diagram',
    category: 'Kinetics',
    description: 'Annotated concentration-time curve showing reaction rate as gradient',
    type: 'reaction_rate_concentration_time_annotated_curve',
    defaultOptions: {
        title: 'Reaction Rate: Concentration-Time Annotated Curve',
        showGradientAnnotations: true,
        showRateCalculation: true,
        showLabels: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'maxwellBoltzmannDistributionActivationEnergyShadeAreaDiagram': {
    name: 'Maxwell Boltzmann Distribution Activation Energy Shade Area Diagram',
    category: 'Kinetics',
    description: 'Maxwell-Boltzmann distribution with shaded area above activation energy threshold',
    type: 'maxwell_boltzmann_distribution_activation_energy_shade_area',
    defaultOptions: {
        title: 'Maxwell-Boltzmann Distribution and Activation Energy',
        showShadedArea: true,
        showEaMarker: true,
        showLabels: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'fiveFactorsRateSummaryComparisonDiagram': {
    name: 'Five Factors Rate Summary Comparison Diagram',
    category: 'Kinetics',
    description: 'Summary comparison of five factors affecting reaction rate with explanations',
    type: 'five_factors_rate_summary_comparison',
    defaultOptions: {
        title: 'Five Factors Affecting Reaction Rate',
        showAllFactors: true,
        showExplanations: true,
        showLabels: true,
        width: 1100,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'gasCollectionSyringeColorimetrySetupDiagram': {
    name: 'Gas Collection Syringe Colorimetry Setup Diagram',
    category: 'Kinetics',
    description: 'Experimental setup for measuring reaction rate using gas collection and colorimetry',
    type: 'gas_collection_syringe_colorimetry_setup',
    defaultOptions: {
        title: 'Rate Measurement: Gas Collection and Colorimetry',
        showGasCollectionSetup: true,
        showColorimetrySetup: true,
        showLabels: true,
        width: 1100,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'reactionOrderRateLawComparisonTable': {
    name: 'Reaction Order Rate Law Comparison Table',
    category: 'Kinetics',
    description: 'Comparison table of zero, first and second order rate laws and their characteristics',
    type: 'reaction_order_rate_law_comparison_table',
    defaultOptions: {
        title: 'Reaction Order and Rate Law Comparison',
        showAllOrders: true,
        showRateLaws: true,
        showGraphShapes: true,
        width: 1200,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'firstOrderConstantHalfLifeConcentrationTimeDiagram': {
    name: 'First Order Constant Half Life Concentration Time Diagram',
    category: 'Kinetics',
    description: 'First-order reaction showing constant half-life on a concentration-time curve',
    type: 'first_order_constant_half_life_concentration_time',
    defaultOptions: {
        title: 'First-Order Kinetics: Constant Half-Life',
        showHalfLifeMarkers: true,
        showConcentrationCurve: true,
        showLabels: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'zeroFirstSecondOrderLinearisedPlotComparisonDiagram': {
    name: 'Zero First Second Order Linearised Plot Comparison Diagram',
    category: 'Kinetics',
    description: 'Linearised plots for zero, first and second order kinetics side by side',
    type: 'zero_first_second_order_linearised_plot_comparison',
    defaultOptions: {
        title: 'Linearised Plots: Zero, First and Second Order',
        showAllOrderPlots: true,
        showLinearisedEquations: true,
        showLabels: true,
        width: 1200,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'arrheniusLnKVsOneOverTLinearPlotDiagram': {
    name: 'Arrhenius Ln K Vs One Over T Linear Plot Diagram',
    category: 'Kinetics',
    description: 'Arrhenius plot of ln(k) vs 1/T for determining activation energy from gradient',
    type: 'arrhenius_ln_k_vs_one_over_t_linear_plot',
    defaultOptions: {
        title: 'Arrhenius Plot: ln(k) vs 1/T',
        showGradientAnnotation: true,
        showEaCalculation: true,
        showLabels: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'rateDeterminingStepMultiStepEnergyProfileDiagram': {
    name: 'Rate Determining Step Multi Step Energy Profile Diagram',
    category: 'Kinetics',
    description: 'Multi-step reaction energy profile with rate-determining step identified',
    type: 'rate_determining_step_multi_step_energy_profile',
    defaultOptions: {
        title: 'Rate-Determining Step in Multi-Step Energy Profile',
        showAllSteps: true,
        showRDSAnnotation: true,
        showLabels: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'industrialBiologicalEnvironmentalRateApplicationsInfographic': {
    name: 'Industrial Biological Environmental Rate Applications Infographic',
    category: 'Kinetics',
    description: 'Infographic of industrial, biological and environmental applications of reaction rate',
    type: 'industrial_biological_environmental_rate_applications',
    defaultOptions: {
        title: 'Rate Applications: Industrial, Biological, Environmental',
        showIndustrialExamples: true,
        showBiologicalExamples: true,
        showEnvironmentalExamples: true,
        width: 1200,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'rateLawComponentsAnnotatedExpressionDiagram': {
    name: 'Rate Law Components Annotated Expression Diagram',
    category: 'Kinetics',
    description: 'Annotated rate law expression identifying rate constant, concentrations and orders',
    type: 'rate_law_components_annotated_expression',
    defaultOptions: {
        title: 'Rate Law Components Annotated',
        showAnnotations: true,
        showComponentDefinitions: true,
        showLabels: true,
        width: 1000,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'zeroOrderConcentrationTimeLinearDecayDiagram': {
    name: 'Zero Order Concentration Time Linear Decay Diagram',
    category: 'Kinetics',
    description: 'Zero-order kinetics: linear concentration-time decay graph with gradient = -k',
    type: 'zero_order_concentration_time_linear_decay',
    defaultOptions: {
        title: 'Zero-Order Kinetics: Linear Concentration-Time Decay',
        showLinearDecay: true,
        showGradientAnnotation: true,
        showLabels: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'firstOrderExponentialDecayAndLnLinearisationDiagram': {
    name: 'First Order Exponential Decay And Ln Linearisation Diagram',
    category: 'Kinetics',
    description: 'First-order exponential decay curve and its ln[A] vs time linearisation',
    type: 'first_order_exponential_decay_and_ln_linearisation',
    defaultOptions: {
        title: 'First-Order: Exponential Decay and ln Linearisation',
        showExponentialCurve: true,
        showLnLinearisation: true,
        showLabels: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'secondOrderOneOverConcentrationLinearisationDiagram': {
    name: 'Second Order One Over Concentration Linearisation Diagram',
    category: 'Kinetics',
    description: 'Second-order kinetics: 1/[A] vs time linearisation for rate constant determination',
    type: 'second_order_one_over_concentration_linearisation',
    defaultOptions: {
        title: 'Second-Order: 1/[A] vs Time Linearisation',
        showLinearisedPlot: true,
        showGradientAnnotation: true,
        showLabels: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'initialRatesMethodDataTableOrderDeterminationDiagram': {
    name: 'Initial Rates Method Data Table Order Determination Diagram',
    category: 'Kinetics',
    description: 'Initial rates method data table for determining reaction orders experimentally',
    type: 'initial_rates_method_data_table_order_determination',
    defaultOptions: {
        title: 'Initial Rates Method: Order Determination',
        showDataTable: true,
        showCalculationSteps: true,
        showLabels: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'arrheniusTwoPointCalculationAnnotatedWorkingDiagram': {
    name: 'Arrhenius Two Point Calculation Annotated Working Diagram',
    category: 'Kinetics',
    description: 'Annotated two-point Arrhenius calculation for activation energy from two temperatures',
    type: 'arrhenius_two_point_calculation_annotated_working',
    defaultOptions: {
        title: 'Arrhenius Two-Point Calculation',
        showAnnotatedWorking: true,
        showFormula: true,
        showLabels: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'rateDeterminingStepMechanismRateLawDerivationFlowchart': {
    name: 'Rate Determining Step Mechanism Rate Law Derivation Flowchart',
    category: 'Kinetics',
    description: 'Flowchart for deriving the rate law from a multi-step mechanism and rate-determining step',
    type: 'rate_determining_step_mechanism_rate_law_derivation_flowchart',
    defaultOptions: {
        title: 'Rate Law Derivation from Mechanism Flowchart',
        showDecisionNodes: true,
        showRateLawDerivation: true,
        showLabels: true,
        width: 1100,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'michaelisMentenHyperbolicCurveAndLineweaverBurkDiagram': {
    name: 'Michaelis Menten Hyperbolic Curve And Lineweaver Burk Diagram',
    category: 'Kinetics',
    description: 'Michaelis-Menten hyperbolic curve and Lineweaver-Burk double reciprocal plot',
    type: 'michaelis_menten_hyperbolic_curve_and_lineweaver_burk',
    defaultOptions: {
        title: 'Michaelis-Menten and Lineweaver-Burk Plot',
        showHyperbolicCurve: true,
        showLineweaverBurk: true,
        showKmVmax: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'integratedRateLawFormulaApplicationDecisionTreeDiagram': {
    name: 'Integrated Rate Law Formula Application Decision Tree Diagram',
    category: 'Kinetics',
    description: 'Decision tree for selecting and applying the correct integrated rate law',
    type: 'integrated_rate_law_formula_application_decision_tree',
    defaultOptions: {
        title: 'Integrated Rate Law Application Decision Tree',
        showDecisionTree: true,
        showFormulas: true,
        showLabels: true,
        width: 1100,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'pharmacokineticsDrugPlasmaConcentrationTimeProfileDiagram': {
    name: 'Pharmacokinetics Drug Plasma Concentration Time Profile Diagram',
    category: 'Kinetics',
    description: 'Pharmacokinetic drug plasma concentration-time profile with dosing intervals',
    type: 'pharmacokinetics_drug_plasma_concentration_time_profile',
    defaultOptions: {
        title: 'Pharmacokinetics: Drug Plasma Concentration Profile',
        showAbsorptionPhase: true,
        showEliminationPhase: true,
        showTherapeuticWindow: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

// ===== TRANSITION STATE THEORY =====
'activatedComplexReactionCoordinateAnnotatedDiagram': {
    name: 'Activated Complex Reaction Coordinate Annotated Diagram',
    category: 'Transition State Theory',
    description: 'Annotated reaction coordinate diagram showing the activated complex at the transition state',
    type: 'activated_complex_reaction_coordinate_annotated',
    defaultOptions: {
        title: 'Activated Complex on Reaction Coordinate Diagram',
        showTransitionState: true,
        showAnnotations: true,
        showLabels: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'exothermicEndothermicMultiStepEnergyProfileComparisonDiagram': {
    name: 'Exothermic Endothermic Multi Step Energy Profile Comparison Diagram',
    category: 'Transition State Theory',
    description: 'Comparison of exothermic and endothermic energy profiles for multi-step reactions',
    type: 'exothermic_endothermic_multi_step_energy_profile_comparison',
    defaultOptions: {
        title: 'Exothermic vs Endothermic Multi-Step Energy Profiles',
        showExothermicProfile: true,
        showEndothermicProfile: true,
        showLabels: true,
        width: 1200,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'maxwellBoltzmannTemperatureShiftEaThresholdShadedAreaDiagram': {
    name: 'Maxwell Boltzmann Temperature Shift Ea Threshold Shaded Area Diagram',
    category: 'Transition State Theory',
    description: 'Maxwell-Boltzmann curves at two temperatures with Ea threshold and shaded area comparison',
    type: 'maxwell_boltzmann_temperature_shift_ea_threshold_shaded_area',
    defaultOptions: {
        title: 'Maxwell-Boltzmann Temperature Shift and Ea Threshold',
        showTwoTemperatureCurves: true,
        showShadedAreas: true,
        showEaMarker: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'arrheniusEquationComponentsAnnotatedFormulaAndLinearPlotDiagram': {
    name: 'Arrhenius Equation Components Annotated Formula And Linear Plot Diagram',
    category: 'Transition State Theory',
    description: 'Annotated Arrhenius equation components alongside the linearised Arrhenius plot',
    type: 'arrhenius_equation_components_annotated_formula_and_linear_plot',
    defaultOptions: {
        title: 'Arrhenius Equation: Annotated Formula and Linear Plot',
        showAnnotatedFormula: true,
        showLinearPlot: true,
        showLabels: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'eyringEquationPotentialEnergySaddlePointSurfaceDiagram': {
    name: 'Eyring Equation Potential Energy Saddle Point Surface Diagram',
    category: 'Transition State Theory',
    description: 'Eyring equation with potential energy surface showing saddle point',
    type: 'eyring_equation_potential_energy_saddle_point_surface',
    defaultOptions: {
        title: 'Eyring Equation and Potential Energy Saddle Point',
        showPotentialEnergySurface: true,
        showSaddlePoint: true,
        showEyringEquation: true,
        width: 1100,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'arrheniusPlotDataTableAndBestFitLineDiagram': {
    name: 'Arrhenius Plot Data Table And Best Fit Line Diagram',
    category: 'Transition State Theory',
    description: 'Arrhenius plot with data table and best-fit line for activation energy determination',
    type: 'arrhenius_plot_data_table_and_best_fit_line',
    defaultOptions: {
        title: 'Arrhenius Plot: Data Table and Best-Fit Line',
        showDataTable: true,
        showBestFitLine: true,
        showGradientCalculation: true,
        width: 1100,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'catalysedUncatalysedEnergyProfileOverlayDiagram': {
    name: 'Catalysed Uncatalysed Energy Profile Overlay Diagram',
    category: 'Transition State Theory',
    description: 'Overlaid energy profiles comparing catalysed and uncatalysed reaction pathways',
    type: 'catalysed_uncatalysed_energy_profile_overlay',
    defaultOptions: {
        title: 'Catalysed vs Uncatalysed Energy Profile Overlay',
        showOverlayProfiles: true,
        showEaReduction: true,
        showLabels: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'photonAbsorptionExcitedStateReactionPathwayDiagram': {
    name: 'Photon Absorption Excited State Reaction Pathway Diagram',
    category: 'Transition State Theory',
    description: 'Photon absorption producing excited state and its photochemical reaction pathway',
    type: 'photon_absorption_excited_state_reaction_pathway',
    defaultOptions: {
        title: 'Photon Absorption and Excited State Pathways',
        showExcitedState: true,
        showReactionPathways: true,
        showLabels: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'enzymeTemperatureOptimumRateVsTemperatureBellCurveDiagram': {
    name: 'Enzyme Temperature Optimum Rate Vs Temperature Bell Curve Diagram',
    category: 'Transition State Theory',
    description: 'Enzyme rate vs temperature bell curve showing optimum temperature and denaturation',
    type: 'enzyme_temperature_optimum_rate_vs_temperature_bell_curve',
    defaultOptions: {
        title: 'Enzyme Activity: Rate vs Temperature Bell Curve',
        showOptimumTemperature: true,
        showDenaturationAnnotation: true,
        showLabels: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'industrialActivationEnergyTradeoffTemperatureYieldRateDiagram': {
    name: 'Industrial Activation Energy Tradeoff Temperature Yield Rate Diagram',
    category: 'Transition State Theory',
    description: 'Industrial trade-off between temperature, reaction rate and equilibrium yield',
    type: 'industrial_activation_energy_tradeoff_temperature_yield_rate',
    defaultOptions: {
        title: 'Industrial Temperature: Rate vs Yield Trade-off',
        showTradeoffCurves: true,
        showOptimalConditions: true,
        showLabels: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'catalyticCycleTurnoverNumberRegenerationAnnotatedDiagram': {
    name: 'Catalytic Cycle Turnover Number Regeneration Annotated Diagram',
    category: 'Transition State Theory',
    description: 'Catalytic cycle with turnover number and catalyst regeneration annotated',
    type: 'catalytic_cycle_turnover_number_regeneration_annotated',
    defaultOptions: {
        title: 'Catalytic Cycle and Turnover Number',
        showCycleDiagram: true,
        showTurnoverNumber: true,
        showAnnotations: true,
        width: 1000,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'homogeneousCatalyticCycleIntermediateFormationDiagram': {
    name: 'Homogeneous Catalytic Cycle Intermediate Formation Diagram',
    category: 'Transition State Theory',
    description: 'Homogeneous catalytic cycle showing intermediate formation and catalyst recovery',
    type: 'homogeneous_catalytic_cycle_intermediate_formation',
    defaultOptions: {
        title: 'Homogeneous Catalytic Cycle: Intermediate Formation',
        showCycleDiagram: true,
        showIntermediates: true,
        showLabels: true,
        width: 1000,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'adsorptionActiveSiteChemisorptionSurfaceReactionDesorptionDiagram': {
    name: 'Adsorption Active Site Chemisorption Surface Reaction Desorption Diagram',
    category: 'Transition State Theory',
    description: 'Heterogeneous catalysis: adsorption, active site, chemisorption, reaction and desorption',
    type: 'adsorption_active_site_chemisorption_surface_reaction_desorption',
    defaultOptions: {
        title: 'Heterogeneous Catalysis: Surface Reaction Steps',
        showAdsorptionStep: true,
        showSurfaceReaction: true,
        showDesorption: true,
        width: 1200,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'michaelisMentenMechanismLineweaverBurkInhibitionComparisonDiagram': {
    name: 'Michaelis Menten Mechanism Lineweaver Burk Inhibition Comparison Diagram',
    category: 'Transition State Theory',
    description: 'Michaelis-Menten mechanism with Lineweaver-Burk plots comparing inhibition types',
    type: 'michaelis_menten_mechanism_lineweaver_burk_inhibition_comparison',
    defaultOptions: {
        title: 'Michaelis-Menten Inhibition: Lineweaver-Burk Comparison',
        showCompetitiveInhibition: true,
        showNonCompetitiveInhibition: true,
        showLineweaverBurk: true,
        width: 1200,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'haberProcessContactProcessCatalyticConverterConditionsDiagram': {
    name: 'Haber Process Contact Process Catalytic Converter Conditions Diagram',
    category: 'Transition State Theory',
    description: 'Conditions and catalysts for Haber process, Contact process and catalytic converters',
    type: 'haber_process_contact_process_catalytic_converter_conditions',
    defaultOptions: {
        title: 'Industrial Catalysts: Haber, Contact, Catalytic Converter',
        showProcessConditions: true,
        showCatalysts: true,
        showLabels: true,
        width: 1200,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'tio2BandGapElectronHolePairOhRadicalFormationDiagram': {
    name: 'TiO2 Band Gap Electron Hole Pair OH Radical Formation Diagram',
    category: 'Transition State Theory',
    description: 'TiO2 photocatalysis: band gap, electron-hole pair generation and OH radical formation',
    type: 'tio2_band_gap_electron_hole_pair_oh_radical_formation',
    defaultOptions: {
        title: 'TiO₂ Photocatalysis: Band Gap and OH Radical Formation',
        showBandGap: true,
        showElectronHolePair: true,
        showRadicalFormation: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'prolineEnamineIntermediateCovalentOrganocatalysisDiagram': {
    name: 'Proline Enamine Intermediate Covalent Organocatalysis Diagram',
    category: 'Transition State Theory',
    description: 'Proline organocatalysis via enamine intermediate in covalent catalytic cycle',
    type: 'proline_enamine_intermediate_covalent_organocatalysis',
    defaultOptions: {
        title: 'Proline Organocatalysis: Enamine Intermediate',
        showCatalyticCycle: true,
        showEnamineIntermediate: true,
        showLabels: true,
        width: 1100,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'atomEconomyEFactorGreenCatalysisBiocatalysisComparisonDiagram': {
    name: 'Atom Economy E Factor Green Catalysis Biocatalysis Comparison Diagram',
    category: 'Transition State Theory',
    description: 'Comparison of atom economy, E-factor, green catalysis and biocatalysis metrics',
    type: 'atom_economy_e_factor_green_catalysis_biocatalysis_comparison',
    defaultOptions: {
        title: 'Green Chemistry Metrics: Atom Economy, E-Factor',
        showAtomEconomy: true,
        showEFactor: true,
        showGreenMetrics: true,
        width: 1200,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'homogeneousHeterogeneousEnzymeOrganocatalysisComparisonTableDiagram': {
    name: 'Homogeneous Heterogeneous Enzyme Organocatalysis Comparison Table Diagram',
    category: 'Transition State Theory',
    description: 'Comparison table of homogeneous, heterogeneous, enzyme and organocatalysis',
    type: 'homogeneous_heterogeneous_enzyme_organocatalysis_comparison_table',
    defaultOptions: {
        title: 'Catalysis Types Comparison Table',
        showComparisonTable: true,
        showAdvantagesDisadvantages: true,
        showLabels: true,
        width: 1200,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'catalyticConverterFuelCellHaberEnzymeDrugRealWorldApplicationsDiagram': {
    name: 'Catalytic Converter Fuel Cell Haber Enzyme Drug Real World Applications Diagram',
    category: 'Transition State Theory',
    description: 'Real-world catalysis applications: catalytic converter, fuel cell, Haber, enzymes, drugs',
    type: 'catalytic_converter_fuel_cell_haber_enzyme_drug_real_world_applications',
    defaultOptions: {
        title: 'Real-World Catalysis Applications',
        showApplicationExamples: true,
        showCatalystDetails: true,
        showLabels: true,
        width: 1300,
        height: 850,
        backgroundColor: '#ffffff'
    }
},

// ===== THERMODYNAMICS =====
'microsateMacrostateEnergyDispersalDiagram': {
    name: 'Microstate Macrostate Energy Dispersal Diagram',
    category: 'Thermodynamics',
    description: 'Microstates and macrostates illustrating energy and matter dispersal',
    type: 'microstate_macrostate_energy_dispersal',
    defaultOptions: {
        title: 'Microstates, Macrostates and Energy Dispersal',
        showMicrostates: true,
        showEnergyDispersal: true,
        showLabels: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'threeThermodynamicLawsEntropyRelationshipChart': {
    name: 'Three Thermodynamic Laws Entropy Relationship Chart',
    category: 'Thermodynamics',
    description: 'Chart summarising the three laws of thermodynamics and their entropy relationships',
    type: 'three_thermodynamic_laws_entropy_relationship',
    defaultOptions: {
        title: 'Three Laws of Thermodynamics and Entropy',
        showAllThreeLaws: true,
        showEntropyRelationships: true,
        showLabels: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'standardMolarEntropyComparisonBarChart': {
    name: 'Standard Molar Entropy Comparison Bar Chart',
    category: 'Thermodynamics',
    description: 'Bar chart comparing standard molar entropy values for common substances',
    type: 'standard_molar_entropy_comparison_bar_chart',
    defaultOptions: {
        title: 'Standard Molar Entropy Comparison',
        showBarChart: true,
        showSubstanceLabels: true,
        showTrendAnnotations: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'spontaneityUniverseEntropyDecisionFlowchart': {
    name: 'Spontaneity Universe Entropy Decision Flowchart',
    category: 'Thermodynamics',
    description: 'Flowchart for predicting spontaneity based on total universe entropy change',
    type: 'spontaneity_universe_entropy_decision_flowchart',
    defaultOptions: {
        title: 'Spontaneity: Universe Entropy Decision Flowchart',
        showDecisionNodes: true,
        showEntropyComponents: true,
        showLabels: true,
        width: 1000,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'solidLiquidGasEntropyOrderingDiagram': {
    name: 'Solid Liquid Gas Entropy Ordering Diagram',
    category: 'Thermodynamics',
    description: 'Entropy ordering across solid, liquid and gas phases with molecular disorder',
    type: 'solid_liquid_gas_entropy_ordering',
    defaultOptions: {
        title: 'Entropy Ordering: Solid, Liquid, Gas',
        showPhaseStates: true,
        showEntropyOrder: true,
        showLabels: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'molecularComplexityMolarMassEntropyTrendChart': {
    name: 'Molecular Complexity Molar Mass Entropy Trend Chart',
    category: 'Thermodynamics',
    description: 'Entropy trend with molecular complexity and molar mass for related compounds',
    type: 'molecular_complexity_molar_mass_entropy_trend',
    defaultOptions: {
        title: 'Molecular Complexity and Molar Mass: Entropy Trends',
        showComplexityTrend: true,
        showMolarMassTrend: true,
        showLabels: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'boltzmannEquationMicrostateCountingDiagram': {
    name: 'Boltzmann Equation Microstate Counting Diagram',
    category: 'Thermodynamics',
    description: 'Boltzmann equation S = k ln(W) with microstate counting visualisation',
    type: 'boltzmann_equation_microstate_counting',
    defaultOptions: {
        title: 'Boltzmann Equation: S = k ln(W)',
        showMicrostateCount: true,
        showAnnotatedEquation: true,
        showLabels: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'deltaGasMolesEntropyChangeReactionDiagram': {
    name: 'Delta Gas Moles Entropy Change Reaction Diagram',
    category: 'Thermodynamics',
    description: 'Entropy change prediction based on change in moles of gas during reaction',
    type: 'delta_gas_moles_entropy_change_reaction',
    defaultOptions: {
        title: 'Gas Mole Change and Reaction Entropy',
        showGasMoleChange: true,
        showEntropyPrediction: true,
        showLabels: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'shannonBoltzmannEntropyAnalogyComparisonDiagram': {
    name: 'Shannon Boltzmann Entropy Analogy Comparison Diagram',
    category: 'Thermodynamics',
    description: 'Analogy and comparison between Shannon information entropy and Boltzmann entropy',
    type: 'shannon_boltzmann_entropy_analogy_comparison',
    defaultOptions: {
        title: 'Shannon vs Boltzmann Entropy Analogy',
        showAnalogyComparison: true,
        showFormulas: true,
        showLabels: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'biologicalSystemsEntropyExportOpenSystemDiagram': {
    name: 'Biological Systems Entropy Export Open System Diagram',
    category: 'Thermodynamics',
    description: 'Biological systems as open systems that export entropy to maintain order',
    type: 'biological_systems_entropy_export_open_system',
    defaultOptions: {
        title: 'Biological Systems: Entropy Export as Open Systems',
        showOpenSystemDiagram: true,
        showEntropyExport: true,
        showLabels: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'enthalpyInternalEnergyPVTermRelationshipDiagram': {
    name: 'Enthalpy Internal Energy PV Term Relationship Diagram',
    category: 'Thermodynamics',
    description: 'Relationship between enthalpy H, internal energy U and PV work term',
    type: 'enthalpy_internal_energy_pv_term_relationship',
    defaultOptions: {
        title: 'Enthalpy, Internal Energy and PV Relationship',
        showHEquation: true,
        showPVTerm: true,
        showLabels: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'exothermicEndothermicEnergyProfileDiagram': {
    name: 'Exothermic Endothermic Energy Profile Diagram',
    category: 'Thermodynamics',
    description: 'Energy profile diagrams for exothermic and endothermic reactions comparison',
    type: 'exothermic_endothermic_energy_profile',
    defaultOptions: {
        title: 'Exothermic and Endothermic Energy Profiles',
        showBothProfiles: true,
        showDeltaHAnnotations: true,
        showLabels: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'standardEnthalpyTypesComparisonTable': {
    name: 'Standard Enthalpy Types Comparison Table',
    category: 'Thermodynamics',
    description: 'Comparison table of standard enthalpy types: formation, combustion, neutralisation, etc.',
    type: 'standard_enthalpy_types_comparison_table',
    defaultOptions: {
        title: 'Standard Enthalpy Types Comparison',
        showAllEnthalpyTypes: true,
        showDefinitions: true,
        showExamples: true,
        width: 1200,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'hessLawEnergyLevelCycleRouteDiagram': {
    name: 'Hess Law Energy Level Cycle Route Diagram',
    category: 'Thermodynamics',
    description: "Hess's law energy level cycle showing direct and indirect routes",
    type: 'hess_law_energy_level_cycle_route',
    defaultOptions: {
        title: "Hess's Law: Energy Level Cycle",
        showDirectRoute: true,
        showIndirectRoute: true,
        showEnergyLevels: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'bondBreakingFormingEnergyBudgetDiagram': {
    name: 'Bond Breaking Forming Energy Budget Diagram',
    category: 'Thermodynamics',
    description: 'Energy budget diagram showing bond breaking (endothermic) and forming (exothermic)',
    type: 'bond_breaking_forming_energy_budget',
    defaultOptions: {
        title: 'Bond Breaking and Forming: Energy Budget',
        showBondBreaking: true,
        showBondForming: true,
        showNetEnthalpy: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'bornHaberCycleNaClEnergyLevelDiagram': {
    name: 'Born Haber Cycle NaCl Energy Level Diagram',
    category: 'Thermodynamics',
    description: 'Born-Haber cycle for NaCl with all energy level steps annotated',
    type: 'born_haber_cycle_nacl_energy_level',
    defaultOptions: {
        title: 'Born-Haber Cycle for NaCl',
        showAllSteps: true,
        showEnergyLevels: true,
        showAnnotations: true,
        width: 1000,
        height: 900,
        backgroundColor: '#ffffff'
    }
},
'kirchhoffHeatCapacityDeltaHTemperatureCorrectionDiagram': {
    name: 'Kirchhoff Heat Capacity Delta H Temperature Correction Diagram',
    category: 'Thermodynamics',
    description: "Kirchhoff's law: heat capacity correction for ΔH at different temperatures",
    type: 'kirchhoff_heat_capacity_delta_h_temperature_correction',
    defaultOptions: {
        title: "Kirchhoff's Law: ΔH Temperature Correction",
        showKirchhoffEquation: true,
        showHeatCapacityGraph: true,
        showLabels: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'hydrogenationResonanceEnergyBenzeneDelocalisationDiagram': {
    name: 'Hydrogenation Resonance Energy Benzene Delocalisation Diagram',
    category: 'Thermodynamics',
    description: 'Resonance energy of benzene from hydrogenation enthalpy comparison',
    type: 'hydrogenation_resonance_energy_benzene_delocalisation',
    defaultOptions: {
        title: 'Benzene Resonance Energy from Hydrogenation',
        showExpectedVsActual: true,
        showResonanceEnergy: true,
        showLabels: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'atwaterFuelValueMacronutrientComparisonChart': {
    name: 'Atwater Fuel Value Macronutrient Comparison Chart',
    category: 'Thermodynamics',
    description: 'Atwater fuel values for macronutrients: carbohydrates, fats and proteins',
    type: 'atwater_fuel_value_macronutrient_comparison',
    defaultOptions: {
        title: 'Atwater Fuel Values: Macronutrient Comparison',
        showFuelValues: true,
        showBarChart: true,
        showLabels: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'haberProcessTemperaturePressureEquilibriumYieldDiagram': {
    name: 'Haber Process Temperature Pressure Equilibrium Yield Diagram',
    category: 'Thermodynamics',
    description: 'Haber process equilibrium yield as a function of temperature and pressure',
    type: 'haber_process_temperature_pressure_equilibrium_yield',
    defaultOptions: {
        title: 'Haber Process: Equilibrium Yield vs T and P',
        showYieldContours: true,
        showOptimalConditions: true,
        showLabels: true,
        width: 1100,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'gibbsEnergyEnthalpyEntropyRelationshipTriangleDiagram': {
    name: 'Gibbs Energy Enthalpy Entropy Relationship Triangle Diagram',
    category: 'Thermodynamics',
    description: 'Triangle relationship diagram for Gibbs energy, enthalpy and entropy (ΔG = ΔH - TΔS)',
    type: 'gibbs_energy_enthalpy_entropy_relationship_triangle',
    defaultOptions: {
        title: 'Gibbs Energy: ΔG = ΔH - TΔS Triangle',
        showTriangleDiagram: true,
        showEquation: true,
        showLabels: true,
        width: 900,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'deltaGvsTemperatureFourSignCombinationsGraph': {
    name: 'Delta G Vs Temperature Four Sign Combinations Graph',
    category: 'Thermodynamics',
    description: 'ΔG vs temperature graph showing four sign combination scenarios for spontaneity',
    type: 'delta_g_vs_temperature_four_sign_combinations',
    defaultOptions: {
        title: 'ΔG vs Temperature: Four Sign Combinations',
        showAllFourScenarios: true,
        showSpontaneityRegions: true,
        showLabels: true,
        width: 1100,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'standardGibbsFormationEnergyStabilityLadderDiagram': {
    name: 'Standard Gibbs Formation Energy Stability Ladder Diagram',
    category: 'Thermodynamics',
    description: 'Stability ladder of standard Gibbs formation energies for common compounds',
    type: 'standard_gibbs_formation_energy_stability_ladder',
    defaultOptions: {
        title: 'Standard Gibbs Formation Energy Stability Ladder',
        showStabilityLadder: true,
        showFormationValues: true,
        showLabels: true,
        width: 900,
        height: 900,
        backgroundColor: '#ffffff'
    }
},
'gibbsEnergyReactionProgressMinimumEquilibriumCurve': {
    name: 'Gibbs Energy Reaction Progress Minimum Equilibrium Curve',
    category: 'Thermodynamics',
    description: 'Gibbs energy vs reaction progress curve showing minimum at equilibrium',
    type: 'gibbs_energy_reaction_progress_minimum_equilibrium',
    defaultOptions: {
        title: 'Gibbs Energy vs Reaction Progress at Equilibrium',
        showMinimumPoint: true,
        showEquilibriumAnnotation: true,
        showLabels: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'nernstEquationCellPotentialConcentrationDependenceDiagram': {
    name: 'Nernst Equation Cell Potential Concentration Dependence Diagram',
    category: 'Thermodynamics',
    description: 'Nernst equation showing cell potential dependence on ion concentrations',
    type: 'nernst_equation_cell_potential_concentration_dependence',
    defaultOptions: {
        title: 'Nernst Equation: Cell Potential vs Concentration',
        showNernstEquation: true,
        showConcentrationEffect: true,
        showLabels: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'coupledReactionGibbsEnergyTransferDiagram': {
    name: 'Coupled Reaction Gibbs Energy Transfer Diagram',
    category: 'Thermodynamics',
    description: 'Coupled reactions where Gibbs energy from spontaneous reaction drives non-spontaneous',
    type: 'coupled_reaction_gibbs_energy_transfer',
    defaultOptions: {
        title: 'Coupled Reactions: Gibbs Energy Transfer',
        showCoupledDiagram: true,
        showEnergyTransfer: true,
        showLabels: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'reactionQuotientQvsKGibbsEnergyDirectionDiagram': {
    name: 'Reaction Quotient Q Vs K Gibbs Energy Direction Diagram',
    category: 'Thermodynamics',
    description: 'Q vs K comparison to predict reaction direction from Gibbs energy',
    type: 'reaction_quotient_q_vs_k_gibbs_energy_direction',
    defaultOptions: {
        title: 'Q vs K: Reaction Direction from Gibbs Energy',
        showQvsKComparison: true,
        showDirectionPrediction: true,
        showLabels: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'clausiusClapeyronSlopePhaseTransitionPressureTemperatureDiagram': {
    name: 'Clausius Clapeyron Slope Phase Transition Pressure Temperature Diagram',
    category: 'Thermodynamics',
    description: 'Clausius-Clapeyron equation: slope of phase transition lines on P-T phase diagram',
    type: 'clausius_clapeyron_slope_phase_transition_pressure_temperature',
    defaultOptions: {
        title: 'Clausius-Clapeyron: Phase Transition P-T Diagram',
        showPhaseDiagram: true,
        showClausiusClapeyronEquation: true,
        showLabels: true,
        width: 1000,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'atpHydrolysisGibbsEnergyBiologicalCouplingDiagram': {
    name: 'ATP Hydrolysis Gibbs Energy Biological Coupling Diagram',
    category: 'Thermodynamics',
    description: 'ATP hydrolysis Gibbs energy release and biological coupling to drive reactions',
    type: 'atp_hydrolysis_gibbs_energy_biological_coupling',
    defaultOptions: {
        title: 'ATP Hydrolysis: Gibbs Energy and Biological Coupling',
        showATPHydrolysis: true,
        showCouplingMechanism: true,
        showLabels: true,
        width: 1100,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'ellinghamDiagramMetalOxideReductionTemperaturePlot': {
    name: 'Ellingham Diagram Metal Oxide Reduction Temperature Plot',
    category: 'Thermodynamics',
    description: 'Ellingham diagram: ΔG vs temperature for metal oxide reduction reactions',
    type: 'ellingham_diagram_metal_oxide_reduction_temperature',
    defaultOptions: {
        title: 'Ellingham Diagram: Metal Oxide Reduction',
        showMultipleMetals: true,
        showReductionTemperatures: true,
        showLabels: true,
        width: 1200,
        height: 900,
        backgroundColor: '#ffffff'
    }
},

// ===== CALORIMETRY =====
'specificHeatCapacityMassTemperatureHeatTriangleDiagram': {
    name: 'Specific Heat Capacity Mass Temperature Heat Triangle Diagram',
    category: 'Calorimetry',
    description: 'Triangle relationship for specific heat capacity, mass, temperature change and heat',
    type: 'specific_heat_capacity_mass_temperature_heat_triangle',
    defaultOptions: {
        title: 'Specific Heat Capacity Triangle: q = mcΔT',
        showTriangleFormula: true,
        showWorkedExample: true,
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'qMcDeltaTVariableRelationshipDiagram': {
    name: 'q Mc Delta T Variable Relationship Diagram',
    category: 'Calorimetry',
    description: 'Annotated q = mcΔT equation with variable definitions and unit relationships',
    type: 'q_mc_delta_t_variable_relationship',
    defaultOptions: {
        title: 'q = mcΔT: Variable Relationships',
        showAnnotatedEquation: true,
        showUnits: true,
        showLabels: true,
        width: 1000,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'calorimetryTypesDesignComparisonAnnotatedDiagram': {
    name: 'Calorimetry Types Design Comparison Annotated Diagram',
    category: 'Calorimetry',
    description: 'Annotated comparison of different calorimeter designs and their applications',
    type: 'calorimetry_types_design_comparison_annotated',
    defaultOptions: {
        title: 'Calorimetry Types: Design Comparison',
        showDesignComparison: true,
        showAnnotations: true,
        showLabels: true,
        width: 1200,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'constantPressurePolystyreneCupSetupAnnotatedDiagram': {
    name: 'Constant Pressure Polystyrene Cup Setup Annotated Diagram',
    category: 'Calorimetry',
    description: 'Annotated setup of a constant pressure polystyrene cup calorimeter',
    type: 'constant_pressure_polystyrene_cup_setup_annotated',
    defaultOptions: {
        title: 'Polystyrene Cup Calorimeter Setup',
        showEquipmentLabels: true,
        showAnnotations: true,
        showLabels: true,
        width: 900,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'bombCalorimeterCrossSectionAnnotatedDiagram': {
    name: 'Bomb Calorimeter Cross Section Annotated Diagram',
    category: 'Calorimetry',
    description: 'Cross-section diagram of a bomb calorimeter with all components annotated',
    type: 'bomb_calorimeter_cross_section_annotated',
    defaultOptions: {
        title: 'Bomb Calorimeter Cross-Section',
        showCrossSectionLabels: true,
        showAnnotations: true,
        showLabels: true,
        width: 900,
        height: 850,
        backgroundColor: '#ffffff'
    }
},
'hessLawIndirectRouteEnergyLevelCycleCalorimetryDiagram': {
    name: 'Hess Law Indirect Route Energy Level Cycle Calorimetry Diagram',
    category: 'Calorimetry',
    description: "Hess's law applied to calorimetry via indirect energy level cycle route",
    type: 'hess_law_indirect_route_energy_level_cycle_calorimetry',
    defaultOptions: {
        title: "Hess's Law: Indirect Route in Calorimetry",
        showEnergyCycle: true,
        showIndirectRoute: true,
        showLabels: true,
        width: 1000,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'temperatureTimeExtrapolationHeatLossCorrectionGraph': {
    name: 'Temperature Time Extrapolation Heat Loss Correction Graph',
    category: 'Calorimetry',
    description: 'Temperature-time graph with extrapolation correction for heat loss in calorimetry',
    type: 'temperature_time_extrapolation_heat_loss_correction',
    defaultOptions: {
        title: 'Temperature-Time Extrapolation: Heat Loss Correction',
        showExtrapolation: true,
        showHeatLossAnnotation: true,
        showLabels: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'calorimetryErrorSourcesSystematicRandomComparisonChart': {
    name: 'Calorimetry Error Sources Systematic Random Comparison Chart',
    category: 'Calorimetry',
    description: 'Comparison chart of systematic and random error sources in calorimetry experiments',
    type: 'calorimetry_error_sources_systematic_random_comparison',
    defaultOptions: {
        title: 'Calorimetry Error Sources: Systematic vs Random',
        showSystematicErrors: true,
        showRandomErrors: true,
        showLabels: true,
        width: 1100,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'atwaterFactorMacronutrientCaloricDensityComparisonChart': {
    name: 'Atwater Factor Macronutrient Caloric Density Comparison Chart',
    category: 'Calorimetry',
    description: 'Atwater factors with macronutrient caloric density comparison chart',
    type: 'atwater_factor_macronutrient_caloric_density_comparison',
    defaultOptions: {
        title: 'Atwater Factors: Macronutrient Caloric Density',
        showAtwaterFactors: true,
        showBarComparison: true,
        showLabels: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'differentialScanningCalorimeterHeatFlowPeakAnnotatedDiagram': {
    name: 'Differential Scanning Calorimeter Heat Flow Peak Annotated Diagram',
    category: 'Calorimetry',
    description: 'DSC heat flow curve with annotated peaks for thermal transitions',
    type: 'differential_scanning_calorimeter_heat_flow_peak_annotated',
    defaultOptions: {
        title: 'DSC: Heat Flow Peaks Annotated',
        showHeatFlowCurve: true,
        showPeakAnnotations: true,
        showPhaseTransitions: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},



// ===== ACID-BASE CHEMISTRY =====
'acidBaseVocabularyConceptMap': {
    name: 'Acid-Base Vocabulary Concept Map',
    category: 'Acid-Base Chemistry',
    description: 'Concept map linking key acid-base vocabulary and definitions',
    type: 'acid_base_vocabulary_concept_map',
    defaultOptions: {
        title: 'Acid-Base Vocabulary Concept Map',
        showDefinitions: true,
        showConnections: true,
        showExamples: true,
        width: 1100,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'arrheniusIonDissociationInWaterDiagram': {
    name: 'Arrhenius Ion Dissociation in Water',
    category: 'Acid-Base Chemistry',
    description: 'Arrhenius acid/base dissociation producing H⁺ and OH⁻ ions in water',
    type: 'arrhenius_ion_dissociation_water',
    defaultOptions: {
        title: 'Arrhenius Ion Dissociation in Water',
        showDissociationEquations: true,
        showIonLabels: true,
        showWaterMolecules: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'protonTransferConjugatePairArrowDiagram': {
    name: 'Proton Transfer Conjugate Pair Arrow Diagram',
    category: 'Acid-Base Chemistry',
    description: 'Brønsted-Lowry proton transfer showing conjugate acid-base pairs with curved arrows',
    type: 'proton_transfer_conjugate_pair_arrow',
    defaultOptions: {
        title: 'Proton Transfer & Conjugate Pairs',
        showConjugatePairs: true,
        showCurvedArrows: true,
        showCharges: true,
        width: 950,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'lewisAcidBaseElectronPairDonationDiagram': {
    name: 'Lewis Acid-Base Electron Pair Donation',
    category: 'Acid-Base Chemistry',
    description: 'Lewis acid-base theory showing electron pair donor and acceptor interactions',
    type: 'lewis_acid_base_electron_pair_donation',
    defaultOptions: {
        title: 'Lewis Acid-Base Electron Pair Donation',
        showElectronPairs: true,
        showDonorAcceptorLabels: true,
        showCurvedArrows: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'strongWeakAcidDissociationComparisonDiagram': {
    name: 'Strong vs Weak Acid Dissociation Comparison',
    category: 'Acid-Base Chemistry',
    description: 'Side-by-side comparison of complete vs partial dissociation of strong and weak acids',
    type: 'strong_weak_acid_dissociation_comparison',
    defaultOptions: {
        title: 'Strong vs Weak Acid Dissociation',
        showDissociationExtent: true,
        showEquilibriumArrows: true,
        showIonConcentrations: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

'waterAutoionisationEquilibriumDiagram': {
    name: 'Water Autoionisation Equilibrium',
    category: 'Acid-Base Chemistry',
    description: 'Self-ionisation of water producing H₃O⁺ and OH⁻ with Kw expression',
    type: 'water_autoionisation_equilibrium',
    defaultOptions: {
        title: 'Water Autoionisation Equilibrium',
        showKwExpression: true,
        showEquilibriumArrows: true,
        showIonConcentrations: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'polyproticAcidStepwiseIonisationDiagram': {
    name: 'Polyprotic Acid Stepwise Ionisation',
    category: 'Acid-Base Chemistry',
    description: 'Sequential proton loss steps for polyprotic acids with Ka values at each stage',
    type: 'polyprotic_acid_stepwise_ionisation',
    defaultOptions: {
        title: 'Polyprotic Acid Stepwise Ionisation',
        showKaValues: true,
        showStepLabels: true,
        showChargeChanges: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'molecularCompleteNetIonicEquationComparisonDiagram': {
    name: 'Molecular, Complete & Net Ionic Equation Comparison',
    category: 'Acid-Base Chemistry',
    description: 'Three-level comparison of molecular, complete ionic, and net ionic equations',
    type: 'molecular_complete_net_ionic_equation_comparison',
    defaultOptions: {
        title: 'Molecular vs Complete vs Net Ionic Equations',
        showSpectatorIons: true,
        showCancellationSteps: true,
        showLabels: true,
        width: 1050,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

'saltHydrolysisPhOutcomeSummaryTable': {
    name: 'Salt Hydrolysis pH Outcome Summary Table',
    category: 'Acid-Base Chemistry',
    description: 'Table summarising pH outcomes for salts of strong/weak acid and base combinations',
    type: 'salt_hydrolysis_ph_outcome_summary_table',
    defaultOptions: {
        title: 'Salt Hydrolysis pH Outcome Summary',
        showExamples: true,
        showHydrolysisReactions: true,
        showPhOutcomes: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

'indicatorColorChangePhRangeChart': {
    name: 'Indicator Colour Change pH Range Chart',
    category: 'Acid-Base Chemistry',
    description: 'Chart showing colour transitions and pH ranges for common acid-base indicators',
    type: 'indicator_color_change_ph_range_chart',
    defaultOptions: {
        title: 'Indicator Colour Change pH Ranges',
        showColourBands: true,
        showPhScale: true,
        showIndicatorNames: true,
        width: 1100,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'acidRainFormationAndOceanAcidificationDiagram': {
    name: 'Acid Rain Formation & Ocean Acidification',
    category: 'Acid-Base Chemistry',
    description: 'Formation of acid rain from pollutants and CO₂-driven ocean acidification',
    type: 'acid_rain_formation_ocean_acidification',
    defaultOptions: {
        title: 'Acid Rain & Ocean Acidification',
        showChemicalEquations: true,
        showEnvironmentalImpacts: true,
        showSourceLabels: true,
        width: 1100,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'logarithmBaseConceptAndAntilogDiagram': {
    name: 'Logarithm Base Concept & Antilog',
    category: 'Acid-Base Chemistry',
    description: 'Visual explanation of logarithm base 10 and antilog operations for pH calculations',
    type: 'logarithm_base_concept_antilog',
    defaultOptions: {
        title: 'Logarithm & Antilog Concept',
        showNumberLine: true,
        showExamples: true,
        showInverseRelationship: true,
        width: 950,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'phScaleCommonSubstancesNumberLineDiagram': {
    name: 'pH Scale Common Substances Number Line',
    category: 'Acid-Base Chemistry',
    description: 'Number line pH scale annotated with common household and biological substances',
    type: 'ph_scale_common_substances_number_line',
    defaultOptions: {
        title: 'pH Scale with Common Substances',
        showSubstanceLabels: true,
        showAcidBaseZones: true,
        showNeutralPoint: true,
        width: 1100,
        height: 500,
        backgroundColor: '#ffffff'
    }
},

'strongAcidFullDissociationPhCalculationFlowchart': {
    name: 'Strong Acid Full Dissociation pH Calculation Flowchart',
    category: 'Acid-Base Chemistry',
    description: 'Step-by-step flowchart for calculating pH of strong acid solutions assuming full dissociation',
    type: 'strong_acid_full_dissociation_ph_calculation_flowchart',
    defaultOptions: {
        title: 'Strong Acid pH Calculation Flowchart',
        showSteps: true,
        showExampleValues: true,
        showFormulas: true,
        width: 900,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'strongBasePoHToPhConversionDiagram': {
    name: 'Strong Base pOH to pH Conversion',
    category: 'Acid-Base Chemistry',
    description: 'Diagram showing conversion pathway from strong base concentration through pOH to pH',
    type: 'strong_base_poh_to_ph_conversion',
    defaultOptions: {
        title: 'Strong Base pOH to pH Conversion',
        showConversionSteps: true,
        showKwRelationship: true,
        showExampleValues: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'weakAcidICETableEquilibriumDiagram': {
    name: 'Weak Acid ICE Table Equilibrium',
    category: 'Acid-Base Chemistry',
    description: 'ICE table method for weak acid equilibrium with Ka expression and pH calculation',
    type: 'weak_acid_ice_table_equilibrium',
    defaultOptions: {
        title: 'Weak Acid ICE Table Equilibrium',
        showICERows: true,
        showKaExpression: true,
        showApproximation: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'weakBaseICETableOHMinusToPhDiagram': {
    name: 'Weak Base ICE Table OH⁻ to pH',
    category: 'Acid-Base Chemistry',
    description: 'ICE table for weak base equilibrium calculating [OH⁻], pOH, and converting to pH',
    type: 'weak_base_ice_table_oh_to_ph',
    defaultOptions: {
        title: 'Weak Base ICE Table to pH',
        showICERows: true,
        showKbExpression: true,
        showPohToPhConversion: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'phPohHConcentrationInterconversionCycleDiagram': {
    name: 'pH, pOH, [H⁺] Concentration Interconversion Cycle',
    category: 'Acid-Base Chemistry',
    description: 'Cycle diagram showing all mathematical interconversion pathways between pH, pOH, [H⁺], and [OH⁻]',
    type: 'ph_poh_h_concentration_interconversion_cycle',
    defaultOptions: {
        title: 'pH/pOH/[H⁺]/[OH⁻] Interconversion Cycle',
        showFormulas: true,
        showDirectionArrows: true,
        showKwRelationship: true,
        width: 950,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'saltHydrolysisPhPredictionDecisionTree': {
    name: 'Salt Hydrolysis pH Prediction Decision Tree',
    category: 'Acid-Base Chemistry',
    description: 'Decision tree for predicting whether a salt solution will be acidic, basic, or neutral',
    type: 'salt_hydrolysis_ph_prediction_decision_tree',
    defaultOptions: {
        title: 'Salt Hydrolysis pH Prediction Decision Tree',
        showDecisionNodes: true,
        showExamples: true,
        showOutcomeLabels: true,
        width: 1000,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'phVsDilutionCurveStrongWeakAcidComparisonGraph': {
    name: 'pH vs Dilution Curve: Strong vs Weak Acid Comparison',
    category: 'Acid-Base Chemistry',
    description: 'Graph comparing pH change upon dilution for strong and weak acids',
    type: 'ph_vs_dilution_curve_strong_weak_acid_comparison',
    defaultOptions: {
        title: 'pH vs Dilution: Strong vs Weak Acid',
        showBothCurves: true,
        showAxisLabels: true,
        showLimitingBehaviour: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

'excessReagentMixingPhCalculationFlowchart': {
    name: 'Excess Reagent Mixing pH Calculation Flowchart',
    category: 'Acid-Base Chemistry',
    description: 'Flowchart for calculating pH after mixing acid and base with one reagent in excess',
    type: 'excess_reagent_mixing_ph_calculation_flowchart',
    defaultOptions: {
        title: 'Excess Reagent Mixing pH Calculation',
        showMolesCalculation: true,
        showExcessDetermination: true,
        showPhCalculationStep: true,
        width: 950,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'physiologicalPhRangesOrganSystemsDiagram': {
    name: 'Physiological pH Ranges: Organ Systems',
    category: 'Acid-Base Chemistry',
    description: 'Diagram of human body organ systems annotated with their normal physiological pH ranges',
    type: 'physiological_ph_ranges_organ_systems',
    defaultOptions: {
        title: 'Physiological pH Ranges by Organ System',
        showPhValues: true,
        showOrganLabels: true,
        showNormalRanges: true,
        width: 900,
        height: 800,
        backgroundColor: '#ffffff'
    }
},

'partialIonisationEquilibriumArrowDiagram': {
    name: 'Partial Ionisation Equilibrium Arrow Diagram',
    category: 'Acid-Base Chemistry',
    description: 'Equilibrium arrow diagram illustrating partial ionisation of weak acids and bases',
    type: 'partial_ionisation_equilibrium_arrow',
    defaultOptions: {
        title: 'Partial Ionisation Equilibrium Arrows',
        showForwardReverseArrows: true,
        showConcentrationRatio: true,
        showWeakAcidExample: true,
        width: 950,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'kaExpressionEquilibriumPositionDiagram': {
    name: 'Ka Expression & Equilibrium Position',
    category: 'Acid-Base Chemistry',
    description: 'Annotated Ka expression linked to equilibrium position and degree of dissociation',
    type: 'ka_expression_equilibrium_position',
    defaultOptions: {
        title: 'Ka Expression & Equilibrium Position',
        showKaFormula: true,
        showEquilibriumPosition: true,
        showStrengthRanking: true,
        width: 950,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

'kbExpressionKaKbKwRelationshipDiagram': {
    name: 'Kb Expression & Ka·Kb = Kw Relationship',
    category: 'Acid-Base Chemistry',
    description: 'Kb expression with annotated Ka × Kb = Kw conjugate pair relationship',
    type: 'kb_expression_ka_kb_kw_relationship',
    defaultOptions: {
        title: 'Kb Expression & Ka·Kb·Kw Relationship',
        showKbFormula: true,
        showKaKbKwTriangle: true,
        showConjugatePairLink: true,
        width: 950,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

'iceTableWeakAcidSolvedStepByStepDiagram': {
    name: 'ICE Table Weak Acid Solved Step-by-Step',
    category: 'Acid-Base Chemistry',
    description: 'Fully worked ICE table solution for weak acid pH with each algebraic step annotated',
    type: 'ice_table_weak_acid_solved_step_by_step',
    defaultOptions: {
        title: 'ICE Table Weak Acid Step-by-Step Solution',
        showAllSteps: true,
        showApproximationCheck: true,
        showFinalPhCalculation: true,
        width: 1000,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'periodicTrendsAcidStrengthBondPolarityDiagram': {
    name: 'Periodic Trends: Acid Strength & Bond Polarity',
    category: 'Acid-Base Chemistry',
    description: 'Periodic table trends linking bond polarity, bond strength, and acid strength across periods and groups',
    type: 'periodic_trends_acid_strength_bond_polarity',
    defaultOptions: {
        title: 'Periodic Trends: Acid Strength & Bond Polarity',
        showGroupTrends: true,
        showPeriodTrends: true,
        showBondStrengthAnnotations: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'hendersonHasselbalchDerivationAndRatioInterpretationDiagram': {
    name: 'Henderson-Hasselbalch Derivation & Ratio Interpretation',
    category: 'Acid-Base Chemistry',
    description: 'Derivation of Henderson-Hasselbalch equation with ratio interpretation and buffer pH prediction',
    type: 'henderson_hasselbalch_derivation_ratio_interpretation',
    defaultOptions: {
        title: 'Henderson-Hasselbalch Derivation & Interpretation',
        showDerivationSteps: true,
        showRatioInterpretation: true,
        showExampleCalculation: true,
        width: 1050,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'polyproticAcidKaStepwiseLadderDiagram': {
    name: 'Polyprotic Acid Ka Stepwise Ladder',
    category: 'Acid-Base Chemistry',
    description: 'Ladder diagram showing decreasing Ka values at each successive deprotonation step',
    type: 'polyprotic_acid_ka_stepwise_ladder',
    defaultOptions: {
        title: 'Polyprotic Acid Ka Stepwise Ladder',
        showKaValues: true,
        showChargeStates: true,
        showRelativeMagnitude: true,
        width: 950,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'commonIonEquilibriumShiftLeChatelierDiagram': {
    name: 'Common Ion Equilibrium Shift (Le Chatelier)',
    category: 'Acid-Base Chemistry',
    description: 'Common ion effect on weak acid/base equilibrium explained via Le Chatelier\'s principle',
    type: 'common_ion_equilibrium_shift_le_chatelier',
    defaultOptions: {
        title: 'Common Ion Effect & Le Chatelier Shift',
        showEquilibriumShift: true,
        showIonConcentrationChange: true,
        showPhEffect: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

'aminoAcidZwitterionIsoelectricPointDiagram': {
    name: 'Amino Acid Zwitterion & Isoelectric Point',
    category: 'Acid-Base Chemistry',
    description: 'pH-dependent protonation states of amino acids including zwitterion form and isoelectric point',
    type: 'amino_acid_zwitterion_isoelectric_point',
    defaultOptions: {
        title: 'Amino Acid Zwitterion & Isoelectric Point',
        showProtonationStates: true,
        showPhScale: true,
        showIsoelectricPoint: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

'drugIonisationPhAbsorptionDiagram': {
    name: 'Drug Ionisation, pH & Absorption',
    category: 'Acid-Base Chemistry',
    description: 'Relationship between drug ionisation state, pH environment, and membrane absorption',
    type: 'drug_ionisation_ph_absorption',
    defaultOptions: {
        title: 'Drug Ionisation, pH & Absorption',
        showIonisationStates: true,
        showMembranePermeability: true,
        showPhEnvironments: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'acidStrengthRankingKaScaleDiagram': {
    name: 'Acid Strength Ranking Ka Scale',
    category: 'Acid-Base Chemistry',
    description: 'Ranked scale of common acids by Ka value with pKa annotations',
    type: 'acid_strength_ranking_ka_scale',
    defaultOptions: {
        title: 'Acid Strength Ranking by Ka',
        showKaValues: true,
        showPkaValues: true,
        showStrongWeakDivision: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

// ===== BUFFERS =====

'bufferConceptShockAbsorberAnalogyDiagram': {
    name: 'Buffer Concept: Shock Absorber Analogy',
    category: 'Buffers',
    description: 'Conceptual analogy comparing buffer action to a shock absorber resisting pH change',
    type: 'buffer_concept_shock_absorber_analogy',
    defaultOptions: {
        title: 'Buffer Concept: Shock Absorber Analogy',
        showAnalogyComparison: true,
        showPhResistance: true,
        showLabels: true,
        width: 950,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

'acidBaseBufferPairComponentsDiagram': {
    name: 'Acid-Base Buffer Pair Components',
    category: 'Buffers',
    description: 'Diagram showing weak acid/conjugate base and weak base/conjugate acid buffer pair components',
    type: 'acid_base_buffer_pair_components',
    defaultOptions: {
        title: 'Buffer Pair Components',
        showConjugatePairs: true,
        showEquilibrium: true,
        showExamples: true,
        width: 950,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

'bufferResponseToAcidBaseAdditionMolecularDiagram': {
    name: 'Buffer Response to Acid/Base Addition (Molecular)',
    category: 'Buffers',
    description: 'Molecular-level diagram showing how buffer components neutralise added acid or base',
    type: 'buffer_response_acid_base_addition_molecular',
    defaultOptions: {
        title: 'Buffer Response to Acid & Base Addition',
        showMolecularReactions: true,
        showBeforeAfter: true,
        showEquations: true,
        width: 1050,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'hhEquationRatioPhRelationshipBufferDiagram': {
    name: 'Henderson-Hasselbalch Ratio–pH Relationship',
    category: 'Buffers',
    description: 'Graphical relationship between [A⁻]/[HA] ratio and buffer pH relative to pKa',
    type: 'hh_equation_ratio_ph_relationship_buffer',
    defaultOptions: {
        title: 'H-H Equation: Ratio vs pH',
        showRatioScale: true,
        showPkaReference: true,
        showPhCalculation: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

'bufferCapacityVsPhBellCurveDiagram': {
    name: 'Buffer Capacity vs pH Bell Curve',
    category: 'Buffers',
    description: 'Bell-shaped curve showing maximum buffer capacity at pKa with flanking decline',
    type: 'buffer_capacity_vs_ph_bell_curve',
    defaultOptions: {
        title: 'Buffer Capacity vs pH Bell Curve',
        showPkaMaximum: true,
        showCapacityFalloff: true,
        showAxisLabels: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

'bufferPreparationDirectMixingFlowchart': {
    name: 'Buffer Preparation: Direct Mixing Flowchart',
    category: 'Buffers',
    description: 'Flowchart for preparing a buffer of target pH by direct mixing of weak acid and conjugate base',
    type: 'buffer_preparation_direct_mixing_flowchart',
    defaultOptions: {
        title: 'Buffer Preparation by Direct Mixing',
        showTargetPhStep: true,
        showMolesCalculation: true,
        showVolumeAdjustment: true,
        width: 950,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'bloodBicarbonateCO2BufferSystemDiagram': {
    name: 'Blood Bicarbonate–CO₂ Buffer System',
    category: 'Buffers',
    description: 'Physiological bicarbonate/carbonic acid buffer system in blood with respiratory and renal regulation',
    type: 'blood_bicarbonate_co2_buffer_system',
    defaultOptions: {
        title: 'Blood Bicarbonate–CO₂ Buffer System',
        showEquilibriumEquations: true,
        showRespiratoryLink: true,
        showRenalLink: true,
        width: 1100,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'bufferEffectiveRangePkaTargetPhMatchingChart': {
    name: 'Buffer Effective Range & pKa–Target pH Matching',
    category: 'Buffers',
    description: 'Chart matching target pH to appropriate buffer system using pKa ± 1 effective range rule',
    type: 'buffer_effective_range_pka_target_ph_matching',
    defaultOptions: {
        title: 'Buffer Effective Range & pKa Matching',
        showEffectiveRangeBands: true,
        showCommonBuffers: true,
        showSelectionGuide: true,
        width: 1050,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

'bufferMolesShiftAfterAcidBaseAdditionDiagram': {
    name: 'Buffer Moles Shift After Acid/Base Addition',
    category: 'Buffers',
    description: 'Quantitative before/after moles diagram showing buffer component shift after acid or base addition',
    type: 'buffer_moles_shift_after_acid_base_addition',
    defaultOptions: {
        title: 'Buffer Moles Shift After Acid/Base Addition',
        showBeforeAfterMoles: true,
        showPhCalculation: true,
        showStoichiometry: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'phMeterCalibrationStandardBuffersDiagram': {
    name: 'pH Meter Calibration with Standard Buffers',
    category: 'Buffers',
    description: 'Diagram of pH meter calibration procedure using two- or three-point standard buffer solutions',
    type: 'ph_meter_calibration_standard_buffers',
    defaultOptions: {
        title: 'pH Meter Calibration with Standard Buffers',
        showCalibrationSteps: true,
        showStandardBufferValues: true,
        showEquipmentLabels: true,
        width: 950,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'pharmaceuticalBufferPhStabilityShelfLifeDiagram': {
    name: 'Pharmaceutical Buffer pH Stability & Shelf Life',
    category: 'Buffers',
    description: 'Diagram linking buffer pH stability to drug degradation rate and pharmaceutical shelf life',
    type: 'pharmaceutical_buffer_ph_stability_shelf_life',
    defaultOptions: {
        title: 'Pharmaceutical Buffer: pH Stability & Shelf Life',
        showDegradationCurves: true,
        showOptimalPhRange: true,
        showShelfLifeAnnotations: true,
        width: 1050,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

// ===== TITRATIONS =====

'titrationApparatusLabelledSetupDiagram': {
    name: 'Titration Apparatus Labelled Setup',
    category: 'Titrations',
    description: 'Fully labelled diagram of standard acid-base titration apparatus',
    type: 'titration_apparatus_labelled_setup',
    defaultOptions: {
        title: 'Titration Apparatus Setup',
        showAllLabels: true,
        showBurette: true,
        showConicalFlask: true,
        width: 800,
        height: 900,
        backgroundColor: '#ffffff'
    }
},

'fourTitrationCurveTypesComparisonDiagram': {
    name: 'Four Titration Curve Types Comparison',
    category: 'Titrations',
    description: 'Comparative graph of strong/strong, strong/weak, weak/strong, and weak/weak titration curves',
    type: 'four_titration_curve_types_comparison',
    defaultOptions: {
        title: 'Four Titration Curve Types Comparison',
        showAllFourCurves: true,
        showEquivalencePoints: true,
        showBufferRegions: true,
        width: 1100,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'indicatorTransitionRangeEquivalencePointOverlapDiagram': {
    name: 'Indicator Transition Range & Equivalence Point Overlap',
    category: 'Titrations',
    description: 'Overlay of indicator transition ranges on titration curves to show appropriate indicator selection',
    type: 'indicator_transition_range_equivalence_point_overlap',
    defaultOptions: {
        title: 'Indicator Range & Equivalence Point Overlap',
        showIndicatorBands: true,
        showTitrationCurve: true,
        showSuitabilityAnnotations: true,
        width: 1050,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'phCalculationRegionsByTitrationStageDiagram': {
    name: 'pH Calculation Regions by Titration Stage',
    category: 'Titrations',
    description: 'Titration curve annotated with the pH calculation method appropriate for each region',
    type: 'ph_calculation_regions_by_titration_stage',
    defaultOptions: {
        title: 'pH Calculation by Titration Stage',
        showRegionAnnotations: true,
        showFormulaPerRegion: true,
        showEquivalencePoint: true,
        width: 1050,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'polyproticAcidMultipleEquivalencePointsCurveDiagram': {
    name: 'Polyprotic Acid Multiple Equivalence Points Curve',
    category: 'Titrations',
    description: 'Titration curve for a polyprotic acid showing multiple equivalence points and buffer regions',
    type: 'polyprotic_acid_multiple_equivalence_points_curve',
    defaultOptions: {
        title: 'Polyprotic Acid Titration Curve',
        showMultipleEquivalencePoints: true,
        showBufferRegions: true,
        showHalfEquivalencePoints: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'backTitrationExcessReagentSubtractionFlowchart': {
    name: 'Back Titration: Excess Reagent Subtraction Flowchart',
    category: 'Titrations',
    description: 'Flowchart for back titration calculations subtracting excess reagent moles',
    type: 'back_titration_excess_reagent_subtraction_flowchart',
    defaultOptions: {
        title: 'Back Titration Calculation Flowchart',
        showMolesSubtraction: true,
        showStepLabels: true,
        showExampleValues: true,
        width: 950,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'redoxTitrationElectronTransferEndpointDiagram': {
    name: 'Redox Titration Electron Transfer & Endpoint',
    category: 'Titrations',
    description: 'Redox titration diagram showing electron transfer half-equations and colour-change endpoint',
    type: 'redox_titration_electron_transfer_endpoint',
    defaultOptions: {
        title: 'Redox Titration: Electron Transfer & Endpoint',
        showHalfEquations: true,
        showEndpointColour: true,
        showElectronTransfer: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'edtaMetalIonChelationComplexDiagram': {
    name: 'EDTA Metal Ion Chelation Complex',
    category: 'Titrations',
    description: 'Diagram of EDTA chelation of metal ions with coordination bonds and complex stability',
    type: 'edta_metal_ion_chelation_complex',
    defaultOptions: {
        title: 'EDTA Metal Ion Chelation Complex',
        showCoordinationBonds: true,
        showMetalLabel: true,
        showEDTAStructure: true,
        width: 950,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'titrationsSystematicRandomErrorSourcesDiagram': {
    name: 'Titrations: Systematic & Random Error Sources',
    category: 'Titrations',
    description: 'Annotated diagram categorising systematic and random error sources in titration experiments',
    type: 'titrations_systematic_random_error_sources',
    defaultOptions: {
        title: 'Titration Error Sources',
        showSystematicErrors: true,
        showRandomErrors: true,
        showMitigationStrategies: true,
        width: 1050,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'industrialPharmaceuticalTitrationUseCasesDiagram': {
    name: 'Industrial & Pharmaceutical Titration Use Cases',
    category: 'Titrations',
    description: 'Infographic of real-world titration applications in industrial quality control and pharmaceuticals',
    type: 'industrial_pharmaceutical_titration_use_cases',
    defaultOptions: {
        title: 'Industrial & Pharmaceutical Titration Use Cases',
        showIndustrialExamples: true,
        showPharmaceuticalExamples: true,
        showTitrationTypes: true,
        width: 1100,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

// ===== IONIC BONDING =====

'atomicStructureShellConfigurationDiagram': {
    name: 'Atomic Structure Shell Configuration',
    category: 'Ionic Bonding',
    description: 'Diagram of atomic shell configuration showing electron arrangement by energy level',
    type: 'atomic_structure_shell_configuration',
    defaultOptions: {
        title: 'Atomic Structure Shell Configuration',
        showShellNumbers: true,
        showElectronCounts: true,
        showNucleusLabel: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'electronTransferCationAnionFormationDiagram': {
    name: 'Electron Transfer: Cation & Anion Formation',
    category: 'Ionic Bonding',
    description: 'Diagram showing electron transfer from metal to non-metal forming cation and anion',
    type: 'electron_transfer_cation_anion_formation',
    defaultOptions: {
        title: 'Electron Transfer: Cation & Anion Formation',
        showElectronTransferArrow: true,
        showChargeLabels: true,
        showShellDiagrams: true,
        width: 950,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

'dotAndCrossElectronTransferNaClDiagram': {
    name: 'Dot & Cross Electron Transfer: NaCl',
    category: 'Ionic Bonding',
    description: 'Dot-and-cross diagram of electron transfer in NaCl ionic bond formation',
    type: 'dot_and_cross_electron_transfer_nacl',
    defaultOptions: {
        title: 'Dot & Cross: NaCl Electron Transfer',
        showDotCrossNotation: true,
        showChargeLabels: true,
        showTransferArrow: true,
        width: 900,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

'chargeBalanceCrossoverMethodDiagram': {
    name: 'Charge Balance Crossover Method',
    category: 'Ionic Bonding',
    description: 'Crossover method for determining ionic compound formulae from ion charges',
    type: 'charge_balance_crossover_method',
    defaultOptions: {
        title: 'Charge Balance Crossover Method',
        showCrossoverArrows: true,
        showChargeValues: true,
        showExamples: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'naClFccRockSaltLatticeUnitCellDiagram': {
    name: 'NaCl FCC Rock Salt Lattice Unit Cell',
    category: 'Ionic Bonding',
    description: '3D unit cell of NaCl rock salt face-centred cubic lattice structure',
    type: 'nacl_fcc_rock_salt_lattice_unit_cell',
    defaultOptions: {
        title: 'NaCl Rock Salt Lattice Unit Cell',
        showUnitCell: true,
        showIonLabels: true,
        showCoordinationNumbers: true,
        width: 900,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'bornHaberCycleEnthalpyLadderNaClDiagram': {
    name: 'Born-Haber Cycle Enthalpy Ladder: NaCl',
    category: 'Ionic Bonding',
    description: 'Full Born-Haber cycle enthalpy ladder for NaCl with all component steps labelled',
    type: 'born_haber_cycle_enthalpy_ladder_nacl',
    defaultOptions: {
        title: 'Born-Haber Cycle: NaCl',
        showAllEnthalpySteps: true,
        showArrowDirections: true,
        showEnergyValues: true,
        width: 1000,
        height: 850,
        backgroundColor: '#ffffff'
    }
},

'ionicCompoundPropertiesStructureExplanationChart': {
    name: 'Ionic Compound Properties & Structure Explanation',
    category: 'Ionic Bonding',
    description: 'Chart linking ionic compound physical properties to lattice structure explanations',
    type: 'ionic_compound_properties_structure_explanation_chart',
    defaultOptions: {
        title: 'Ionic Compound Properties & Structure',
        showPropertyList: true,
        showStructuralExplanations: true,
        showExamples: true,
        width: 1050,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'fajansRulesCationPolarisationAnionDistortionDiagram': {
    name: 'Fajans\' Rules: Cation Polarisation & Anion Distortion',
    category: 'Ionic Bonding',
    description: 'Diagram illustrating Fajans\' rules for cation polarising power and anion polarisability',
    type: 'fajans_rules_cation_polarisation_anion_distortion',
    defaultOptions: {
        title: 'Fajans\' Rules: Polarisation & Distortion',
        showPolarisationEffect: true,
        showAnionDistortion: true,
        showCovalentCharacterSpectrum: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'electrolysisAnodeCathodeIonMigrationDiagram': {
    name: 'Electrolysis: Anode, Cathode & Ion Migration',
    category: 'Ionic Bonding',
    description: 'Diagram of electrolysis cell showing ion migration, anode oxidation, and cathode reduction',
    type: 'electrolysis_anode_cathode_ion_migration',
    defaultOptions: {
        title: 'Electrolysis: Ion Migration & Electrode Reactions',
        showIonMovement: true,
        showElectrodeReactions: true,
        showCurrentDirection: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'ionicCompoundsIndustryBiologyApplicationsInfographic': {
    name: 'Ionic Compounds in Industry & Biology Applications',
    category: 'Ionic Bonding',
    description: 'Infographic of industrial and biological applications of ionic compounds',
    type: 'ionic_compounds_industry_biology_applications_infographic',
    defaultOptions: {
        title: 'Ionic Compounds: Industry & Biology Applications',
        showIndustrialApplications: true,
        showBiologicalApplications: true,
        showCompoundExamples: true,
        width: 1100,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

// ===== COVALENT BONDING =====

'electronSharingBondingPairLonePairFoundationDiagram': {
    name: 'Electron Sharing: Bonding Pair & Lone Pair Foundation',
    category: 'Covalent Bonding',
    description: 'Foundation diagram showing electron sharing to form bonding pairs and lone pairs',
    type: 'electron_sharing_bonding_pair_lone_pair_foundation',
    defaultOptions: {
        title: 'Electron Sharing: Bonding & Lone Pairs',
        showBondingPairs: true,
        showLonePairs: true,
        showSharedElectronNotation: true,
        width: 900,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

'singleDoubleTripleBondOrderLengthStrengthComparisonDiagram': {
    name: 'Single, Double & Triple Bond Order, Length & Strength Comparison',
    category: 'Covalent Bonding',
    description: 'Comparative diagram of single, double, and triple bonds showing order, length, and strength trends',
    type: 'single_double_triple_bond_order_length_strength_comparison',
    defaultOptions: {
        title: 'Bond Order, Length & Strength Comparison',
        showBondOrderTrend: true,
        showLengthTrend: true,
        showStrengthTrend: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

'electronegativityDifferencePolaritySpectrumDiagram': {
    name: 'Electronegativity Difference & Polarity Spectrum',
    category: 'Covalent Bonding',
    description: 'Spectrum from pure covalent to polar covalent to ionic based on electronegativity difference',
    type: 'electronegativity_difference_polarity_spectrum',
    defaultOptions: {
        title: 'Electronegativity Difference & Bond Polarity Spectrum',
        showSpectrumScale: true,
        showBondTypeLabels: true,
        showExamples: true,
        width: 1050,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'dotCrossDiagramH2ONH3CO2StepByStepDiagram': {
    name: 'Dot & Cross Diagrams: H₂O, NH₃, CO₂ Step-by-Step',
    category: 'Covalent Bonding',
    description: 'Step-by-step dot and cross diagrams for water, ammonia, and carbon dioxide',
    type: 'dot_cross_diagram_h2o_nh3_co2_step_by_step',
    defaultOptions: {
        title: 'Dot & Cross: H₂O, NH₃, CO₂',
        showConstructionSteps: true,
        showLonePairs: true,
        showAllThreeMolecules: true,
        width: 1100,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'sigmaHeadOnPiLateralOrbitalOverlapHybridisationDiagram': {
    name: 'Sigma Head-On & Pi Lateral Orbital Overlap Hybridisation',
    category: 'Covalent Bonding',
    description: 'Diagram comparing head-on sigma and lateral pi orbital overlap with hybridisation context',
    type: 'sigma_head_on_pi_lateral_orbital_overlap_hybridisation',
    defaultOptions: {
        title: 'Sigma & Pi Orbital Overlap',
        showSigmaOverlap: true,
        showPiOverlap: true,
        showHybridisationLabels: true,
        width: 1050,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'resonanceStructuresBenzeneNitrateCarbonateHybridDiagram': {
    name: 'Resonance Structures: Benzene, Nitrate & Carbonate Hybrid',
    category: 'Covalent Bonding',
    description: 'Resonance structures and hybrid representations for benzene, nitrate, and carbonate',
    type: 'resonance_structures_benzene_nitrate_carbonate_hybrid',
    defaultOptions: {
        title: 'Resonance Structures: Benzene, Nitrate, Carbonate',
        showResonanceForms: true,
        showHybridStructure: true,
        showCurvedArrows: true,
        width: 1100,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'bondEnthalpyBreakingFormingEnergyProfileDiagram': {
    name: 'Bond Enthalpy: Breaking & Forming Energy Profile',
    category: 'Covalent Bonding',
    description: 'Energy profile diagram showing endothermic bond breaking and exothermic bond forming',
    type: 'bond_enthalpy_breaking_forming_energy_profile',
    defaultOptions: {
        title: 'Bond Enthalpy: Breaking & Forming',
        showEndothermicBreaking: true,
        showExothermicForming: true,
        showNetEnthalpyChange: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'simpleDiscretesMoleculeVsGiantLatticeStructureComparisonDiagram': {
    name: 'Simple Discrete Molecules vs Giant Lattice Structure Comparison',
    category: 'Covalent Bonding',
    description: 'Side-by-side structural comparison of simple discrete molecular and giant covalent lattice structures',
    type: 'simple_discretes_molecule_vs_giant_lattice_structure_comparison',
    defaultOptions: {
        title: 'Simple Molecules vs Giant Lattice Structures',
        showBothStructures: true,
        showPropertyComparison: true,
        showExamples: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'diamondGraphiteGrapheneSiliconDioxideStructureComparisonDiagram': {
    name: 'Diamond, Graphite, Graphene & Silicon Dioxide Structure Comparison',
    category: 'Covalent Bonding',
    description: 'Structural comparison of diamond, graphite, graphene, and silicon dioxide giant covalent lattices',
    type: 'diamond_graphite_graphene_silicon_dioxide_structure_comparison',
    defaultOptions: {
        title: 'Diamond, Graphite, Graphene & SiO₂ Structures',
        showAllFourStructures: true,
        showBondingAnnotations: true,
        showPropertyLinks: true,
        width: 1200,
        height: 800,
        backgroundColor: '#ffffff'
    }
},

'covalentBondingOrganicBiochemistryMaterialsApplicationsInfographic': {
    name: 'Covalent Bonding: Organic, Biochemistry & Materials Applications',
    category: 'Covalent Bonding',
    description: 'Infographic of covalent bonding applications across organic chemistry, biochemistry, and materials science',
    type: 'covalent_bonding_organic_biochemistry_materials_applications_infographic',
    defaultOptions: {
        title: 'Covalent Bonding Applications',
        showOrganicExamples: true,
        showBiochemistryExamples: true,
        showMaterialsExamples: true,
        width: 1150,
        height: 800,
        backgroundColor: '#ffffff'
    }
},

// ===== LEWIS STRUCTURES =====

'valenceElectronGroupPeriodicTableBondingPairLonePairLegendDiagram': {
    name: 'Valence Electron Group Periodic Table: Bonding & Lone Pair Legend',
    category: 'Lewis Structures',
    description: 'Periodic table annotated with valence electron group counts and bonding/lone pair legend',
    type: 'valence_electron_group_periodic_table_bonding_pair_lone_pair_legend',
    defaultOptions: {
        title: 'Valence Electron Groups & Bonding Pairs',
        showValenceElectronGroups: true,
        showBondingPairLegend: true,
        showLonePairLegend: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'lewisStructureSixStepFlowchartDrawingProcedureDiagram': {
    name: 'Lewis Structure Six-Step Drawing Procedure Flowchart',
    category: 'Lewis Structures',
    description: 'Six-step flowchart procedure for drawing Lewis structures systematically',
    type: 'lewis_structure_six_step_flowchart_drawing_procedure',
    defaultOptions: {
        title: 'Lewis Structure Drawing Procedure',
        showAllSixSteps: true,
        showDecisionPoints: true,
        showExampleApplication: true,
        width: 950,
        height: 850,
        backgroundColor: '#ffffff'
    }
},

'formalChargeCalculationElectronAllocationDiagram': {
    name: 'Formal Charge Calculation & Electron Allocation',
    category: 'Lewis Structures',
    description: 'Step-by-step formal charge calculation with electron allocation method annotated',
    type: 'formal_charge_calculation_electron_allocation',
    defaultOptions: {
        title: 'Formal Charge Calculation',
        showFormula: true,
        showElectronAllocation: true,
        showWorkedExample: true,
        width: 950,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'resonanceHybridCurvedArrowElectronMovementOzoneBenzeneDiagram': {
    name: 'Resonance Hybrid: Curved Arrow Electron Movement (Ozone & Benzene)',
    category: 'Lewis Structures',
    description: 'Curved arrow electron movement diagrams for ozone and benzene resonance hybrid structures',
    type: 'resonance_hybrid_curved_arrow_electron_movement_ozone_benzene',
    defaultOptions: {
        title: 'Resonance Hybrid: Ozone & Benzene',
        showCurvedArrows: true,
        showResonanceForms: true,
        showHybridOverlay: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'octetExceptionsElectronDeficientRadicalExpandedOctetComparisonDiagram': {
    name: 'Octet Exceptions: Electron-Deficient, Radical & Expanded Octet Comparison',
    category: 'Lewis Structures',
    description: 'Comparison of three types of octet exceptions with examples of each',
    type: 'octet_exceptions_electron_deficient_radical_expanded_octet_comparison',
    defaultOptions: {
        title: 'Octet Exceptions: Deficient, Radical & Expanded',
        showElectronDeficientExamples: true,
        showRadicalExamples: true,
        showExpandedOctetExamples: true,
        width: 1100,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'polyatomicIonBracketChargeNotationNH4SO4CO3Diagram': {
    name: 'Polyatomic Ion Bracket & Charge Notation: NH₄⁺, SO₄²⁻, CO₃²⁻',
    category: 'Lewis Structures',
    description: 'Lewis structures with bracket and charge notation for common polyatomic ions',
    type: 'polyatomic_ion_bracket_charge_notation_nh4_so4_co3',
    defaultOptions: {
        title: 'Polyatomic Ion Notation: NH₄⁺, SO₄²⁻, CO₃²⁻',
        showBracketNotation: true,
        showFormalCharges: true,
        showAllThreeIons: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'lewisAcidBaseCoordinateBondAdductFormationDiagram': {
    name: 'Lewis Acid-Base Coordinate Bond & Adduct Formation',
    category: 'Lewis Structures',
    description: 'Diagram of Lewis acid-base coordinate bond formation producing an adduct',
    type: 'lewis_acid_base_coordinate_bond_adduct_formation',
    defaultOptions: {
        title: 'Lewis Acid-Base Coordinate Bond & Adduct',
        showElectronPairDonation: true,
        showAdductFormation: true,
        showCurvedArrow: true,
        width: 950,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

'bondOrderLengthStrengthInverseTrendComparisonTableDiagram': {
    name: 'Bond Order, Length & Strength Inverse Trend Comparison Table',
    category: 'Lewis Structures',
    description: 'Table and visual comparison of inverse trend between bond order, length, and strength',
    type: 'bond_order_length_strength_inverse_trend_comparison_table',
    defaultOptions: {
        title: 'Bond Order, Length & Strength Inverse Trends',
        showComparisonTable: true,
        showTrendArrows: true,
        showExampleData: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

'hypervalentXeF4SF4OrganicMoleculeAdvancedLewisStructuresDiagram': {
    name: 'Hypervalent XeF₄, SF₄ & Organic Molecule Advanced Lewis Structures',
    category: 'Lewis Structures',
    description: 'Advanced Lewis structures for hypervalent XeF₄, SF₄, and selected organic molecules',
    type: 'hypervalent_xef4_sf4_organic_molecule_advanced_lewis_structures',
    defaultOptions: {
        title: 'Hypervalent & Advanced Lewis Structures',
        showXeF4Structure: true,
        showSF4Structure: true,
        showOrganicExamples: true,
        width: 1100,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

// ===== VSEPR =====

'electronDomainCountToVSEPRGeometryBridgingFlowchartDiagram': {
    name: 'Electron Domain Count to VSEPR Geometry Bridging Flowchart',
    category: 'VSEPR',
    description: 'Flowchart bridging electron domain count to predicted VSEPR molecular geometry',
    type: 'electron_domain_count_to_vsepr_geometry_bridging_flowchart',
    defaultOptions: {
        title: 'Electron Domain Count to VSEPR Geometry',
        showElectronDomainSteps: true,
        showGeometryOutcomes: true,
        showDecisionBranches: true,
        width: 1000,
        height: 850,
        backgroundColor: '#ffffff'
    }
},

'electronDomainVsMolecularGeometryDistinctionFoundationDiagram': {
    name: 'Electron Domain vs Molecular Geometry Distinction',
    category: 'VSEPR',
    description: 'Foundation diagram distinguishing electron domain geometry from molecular geometry',
    type: 'electron_domain_vs_molecular_geometry_distinction_foundation',
    defaultOptions: {
        title: 'Electron Domain vs Molecular Geometry',
        showElectronGeometry: true,
        showMolecularGeometry: true,
        showLonePairEffect: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'vsepRRepulsionHierarchyElectronPairArrangementDiagram': {
    name: 'VSEPR Repulsion Hierarchy & Electron Pair Arrangement',
    category: 'VSEPR',
    description: 'Diagram of VSEPR repulsion hierarchy: lone-lone > lone-bond > bond-bond',
    type: 'vsepr_repulsion_hierarchy_electron_pair_arrangement',
    defaultOptions: {
        title: 'VSEPR Repulsion Hierarchy',
        showRepulsionRanking: true,
        showAngleDeviations: true,
        showPairArrangements: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'allThirteenVSEPRShapesElectronBondingGeometryCompleteCatalogueDiagram': {
    name: 'All Thirteen VSEPR Shapes: Complete Catalogue',
    category: 'VSEPR',
    description: 'Complete catalogue of all thirteen VSEPR electron and molecular geometry shapes',
    type: 'all_thirteen_vsepr_shapes_complete_catalogue',
    defaultOptions: {
        title: 'All Thirteen VSEPR Shapes',
        showAllShapes: true,
        showElectronGeometryLabels: true,
        showMolecularGeometryLabels: true,
        width: 1400,
        height: 1000,
        backgroundColor: '#ffffff'
    }
},

'lonePairCompressionBondAngleCH4NH3H2ODeviationComparisonDiagram': {
    name: 'Lone Pair Compression Bond Angle: CH₄, NH₃, H₂O Deviation Comparison',
    category: 'VSEPR',
    description: 'Comparison of bond angle deviation in CH₄, NH₃, and H₂O due to lone pair compression',
    type: 'lone_pair_compression_bond_angle_ch4_nh3_h2o_deviation_comparison',
    defaultOptions: {
        title: 'Lone Pair Bond Angle Compression: CH₄, NH₃, H₂O',
        showAllThreeMolecules: true,
        showBondAngles: true,
        showDeviationAnnotations: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'dipoleMomentVectorSumCancellationPolarNonpolarMoleculesDiagram': {
    name: 'Dipole Moment Vector Sum & Cancellation: Polar vs Nonpolar',
    category: 'VSEPR',
    description: 'Vector sum and cancellation of bond dipoles determining overall molecular polarity',
    type: 'dipole_moment_vector_sum_cancellation_polar_nonpolar',
    defaultOptions: {
        title: 'Dipole Moment Vectors: Polar vs Nonpolar',
        showDipoleVectors: true,
        showVectorSumResult: true,
        showPolarNonpolarExamples: true,
        width: 1050,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'multipleBondSingleDomainCO2H2COVSEPRTreatmentDiagram': {
    name: 'Multiple Bond as Single Domain: CO₂ & H₂CO VSEPR Treatment',
    category: 'VSEPR',
    description: 'VSEPR treatment of multiple bonds as single electron domains for CO₂ and H₂CO',
    type: 'multiple_bond_single_domain_co2_h2co_vsepr_treatment',
    defaultOptions: {
        title: 'Multiple Bond Single Domain: CO₂ & H₂CO',
        showDomainCounting: true,
        showGeometryPrediction: true,
        showBothMolecules: true,
        width: 1050,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'wedgeDashSolidDashedBondNotation3dStructureDiagram': {
    name: 'Wedge-Dash & Solid-Dashed Bond Notation: 3D Structure',
    category: 'VSEPR',
    description: 'Explanation of wedge-dash and solid-dashed bond notation for representing 3D molecular structures',
    type: 'wedge_dash_solid_dashed_bond_notation_3d_structure',
    defaultOptions: {
        title: 'Wedge-Dash Bond Notation: 3D Structures',
        showNotationKey: true,
        showExampleMolecules: true,
        showPerspectiveDiagrams: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'geometryPolarityBoilingPointSolubilityPropertyLinksDiagram': {
    name: 'Geometry, Polarity, Boiling Point & Solubility Property Links',
    category: 'VSEPR',
    description: 'Diagram linking molecular geometry and polarity to boiling point and solubility properties',
    type: 'geometry_polarity_boiling_point_solubility_property_links',
    defaultOptions: {
        title: 'Geometry → Polarity → Properties',
        showGeometryLinks: true,
        showPropertyOutcomes: true,
        showExamples: true,
        width: 1100,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'hybridisationSp3Sp2SpOrbitalGeometryBondAngleSummaryDiagram': {
    name: 'Hybridisation: sp³, sp², sp Orbital Geometry & Bond Angle Summary',
    category: 'VSEPR',
    description: 'Summary diagram of sp³, sp², and sp hybridisation geometries and bond angles',
    type: 'hybridisation_sp3_sp2_sp_orbital_geometry_bond_angle_summary',
    defaultOptions: {
        title: 'Hybridisation: sp³, sp², sp Summary',
        showAllThreeHybridisations: true,
        showOrbitalShapes: true,
        showBondAngles: true,
        width: 1150,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'bondingAntibondingMOEnergyDiagramH2O2N2DiatomicsDiagram': {
    name: 'Bonding & Antibonding MO Energy Diagram: H₂, O₂, N₂',
    category: 'VSEPR',
    description: 'Molecular orbital energy diagrams showing bonding and antibonding orbitals for H₂, O₂, and N₂',
    type: 'bonding_antibonding_mo_energy_diagram_h2_o2_n2_diatomics',
    defaultOptions: {
        title: 'MO Energy Diagrams: H₂, O₂, N₂',
        showBondingOrbitals: true,
        showAntibondingOrbitals: true,
        showAllThreeMolecules: true,
        width: 1200,
        height: 800,
        backgroundColor: '#ffffff'
    }
},

// ===== METALLIC BONDING =====

'metalLocationPeriodicTableLowIELowENCharacteristicsDiagram': {
    name: 'Metal Location on Periodic Table: Low IE & Low EN Characteristics',
    category: 'Metallic Bonding',
    description: 'Periodic table highlighting metal location with low ionisation energy and electronegativity characteristics',
    type: 'metal_location_periodic_table_low_ie_low_en_characteristics',
    defaultOptions: {
        title: 'Metals: Location, Low IE & Low EN',
        showMetalRegion: true,
        showIETrend: true,
        showENTrend: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'metalCationLatticeDelocalizedElectronSeaModelDiagram': {
    name: 'Metal Cation Lattice & Delocalised Electron Sea Model',
    category: 'Metallic Bonding',
    description: 'Diagram of metallic bonding sea-of-electrons model with cation lattice and delocalised electrons',
    type: 'metal_cation_lattice_delocalized_electron_sea_model',
    defaultOptions: {
        title: 'Metallic Bonding: Electron Sea Model',
        showCationLattice: true,
        showDelocalizedElectrons: true,
        showElectronFlow: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'fccHcpBccUnitCellPackingEfficiencyComparisonDiagram': {
    name: 'FCC, HCP & BCC Unit Cell Packing Efficiency Comparison',
    category: 'Metallic Bonding',
    description: 'Comparison of face-centred cubic, hexagonal close-packed, and body-centred cubic unit cells and packing efficiencies',
    type: 'fcc_hcp_bcc_unit_cell_packing_efficiency_comparison',
    defaultOptions: {
        title: 'FCC, HCP & BCC Unit Cell Comparison',
        showAllThreeStructures: true,
        showPackingEfficiency: true,
        showCoordinationNumbers: true,
        width: 1200,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'conductorSemiconductorInsulatorBandGapEnergyDiagram': {
    name: 'Conductor, Semiconductor & Insulator Band Gap Energy Diagram',
    category: 'Metallic Bonding',
    description: 'Energy band diagrams comparing conductors, semiconductors, and insulators by band gap',
    type: 'conductor_semiconductor_insulator_band_gap_energy',
    defaultOptions: {
        title: 'Band Gap: Conductor, Semiconductor & Insulator',
        showAllThreeTypes: true,
        showBandGapEnergies: true,
        showElectronPopulation: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'metalPropertiesSeaOfElectronsStructuralExplanationSummaryDiagram': {
    name: 'Metal Properties: Sea-of-Electrons Structural Explanation Summary',
    category: 'Metallic Bonding',
    description: 'Summary diagram explaining metallic properties (conductivity, malleability, lustre) via electron sea model',
    type: 'metal_properties_sea_of_electrons_structural_explanation_summary',
    defaultOptions: {
        title: 'Metal Properties: Electron Sea Explanations',
        showPropertyList: true,
        showStructuralExplanations: true,
        showElectronSeaModel: true,
        width: 1100,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'substitutionalInterstitialAlloyLatticeDistortionDislocationPinningDiagram': {
    name: 'Substitutional & Interstitial Alloy: Lattice Distortion & Dislocation Pinning',
    category: 'Metallic Bonding',
    description: 'Diagram of substitutional and interstitial alloy types with lattice distortion and dislocation pinning mechanism',
    type: 'substitutional_interstitial_alloy_lattice_distortion_dislocation_pinning',
    defaultOptions: {
        title: 'Alloy Types: Lattice Distortion & Dislocation Pinning',
        showSubstitutionalAlloy: true,
        showInterstitialAlloy: true,
        showDislocationPinning: true,
        width: 1100,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'dBlockMeltingPointTrendPeriod4dElectronBondingContributionDiagram': {
    name: 'd-Block Melting Point Trend: Period 4 d-Electron Bonding Contribution',
    category: 'Metallic Bonding',
    description: 'Graph of d-block melting point trend across Period 4 with d-electron bonding contribution explanation',
    type: 'd_block_melting_point_trend_period4_d_electron_bonding_contribution',
    defaultOptions: {
        title: 'd-Block Melting Point Trend: Period 4',
        showMeltingPointGraph: true,
        showDElectronAnnotations: true,
        showPeakExplanation: true,
        width: 1050,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'ironRustingElectrochemicalCellAnodeCathodeCorrosionMechanismDiagram': {
    name: 'Iron Rusting: Electrochemical Cell Anode, Cathode & Corrosion Mechanism',
    category: 'Metallic Bonding',
    description: 'Electrochemical mechanism of iron rusting with anode and cathode half-reactions',
    type: 'iron_rusting_electrochemical_cell_anode_cathode_corrosion_mechanism',
    defaultOptions: {
        title: 'Iron Rusting: Electrochemical Mechanism',
        showAnodeReaction: true,
        showCathodeReaction: true,
        showCorrosionProducts: true,
        width: 1050,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'goldNanoparticleSurfacePlasmonResonanceColourSizeRelationshipDiagram': {
    name: 'Gold Nanoparticle Surface Plasmon Resonance: Colour–Size Relationship',
    category: 'Metallic Bonding',
    description: 'Diagram of gold nanoparticle surface plasmon resonance and colour change with particle size',
    type: 'gold_nanoparticle_surface_plasmon_resonance_colour_size_relationship',
    defaultOptions: {
        title: 'Gold Nanoparticle: Plasmon Resonance & Colour',
        showSizeColourRelationship: true,
        showPlasmonResonanceDiagram: true,
        showAbsorptionSpectra: true,
        width: 1050,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'metallicBondingIndustrialBiologicalTechnologyApplicationsInfographic': {
    name: 'Metallic Bonding: Industrial, Biological & Technology Applications',
    category: 'Metallic Bonding',
    description: 'Infographic of metallic bonding applications across industrial, biological, and technology contexts',
    type: 'metallic_bonding_industrial_biological_technology_applications_infographic',
    defaultOptions: {
        title: 'Metallic Bonding Applications',
        showIndustrialExamples: true,
        showBiologicalExamples: true,
        showTechnologyExamples: true,
        width: 1150,
        height: 800,
        backgroundColor: '#ffffff'
    }
},

// ===== INTERMOLECULAR FORCES =====

'intramolecularVsIntermolecularForceStrengthScaleComparisonDiagram': {
    name: 'Intramolecular vs Intermolecular Force Strength Scale Comparison',
    category: 'Intermolecular Forces',
    description: 'Scale comparison of intramolecular bond strengths versus intermolecular force strengths',
    type: 'intramolecular_vs_intermolecular_force_strength_scale_comparison',
    defaultOptions: {
        title: 'Intramolecular vs Intermolecular Force Strength',
        showStrengthScale: true,
        showExamplesForEach: true,
        showRelativeMagnitudes: true,
        width: 1050,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'instantaneousInducedDipolePolarisabilityElectronFluctuationLDFDiagram': {
    name: 'Instantaneous-Induced Dipole, Polarisability & Electron Fluctuation (LDF)',
    category: 'Intermolecular Forces',
    description: 'Mechanism of London dispersion forces via instantaneous and induced dipoles and electron cloud fluctuation',
    type: 'instantaneous_induced_dipole_polarisability_electron_fluctuation_ldf',
    defaultOptions: {
        title: 'London Dispersion Forces: Electron Fluctuation',
        showElectronFluctuation: true,
        showInducedDipoles: true,
        showPolarisabilityTrend: true,
        width: 1050,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'permanentDipoleDeltaPlusDeltaMinusOrientationAttractionDiagram': {
    name: 'Permanent Dipole: δ⁺/δ⁻ Orientation & Attraction',
    category: 'Intermolecular Forces',
    description: 'Diagram of permanent dipole-dipole interactions showing δ⁺/δ⁻ orientation and attraction',
    type: 'permanent_dipole_delta_plus_delta_minus_orientation_attraction',
    defaultOptions: {
        title: 'Permanent Dipole-Dipole Attraction',
        showDeltaCharges: true,
        showOrientationArrangement: true,
        showAttractionAnnotation: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

'hydrogenBondDonorAcceptorNOFAnomalousBoilingPointGroupTrendDiagram': {
    name: 'Hydrogen Bond: Donor/Acceptor, N/O/F & Anomalous Boiling Point Group Trend',
    category: 'Intermolecular Forces',
    description: 'Hydrogen bonding diagram with donor/acceptor roles, N/O/F requirement, and anomalous group boiling point trend',
    type: 'hydrogen_bond_donor_acceptor_nof_anomalous_boiling_point_group_trend',
    defaultOptions: {
        title: 'Hydrogen Bonding & Anomalous Boiling Points',
        showDonorAcceptorRoles: true,
        showNOFRequirement: true,
        showBoilingPointAnomaly: true,
        width: 1100,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'ionHydrationShellWaterOrientationCationAnionSolvationDiagram': {
    name: 'Ion Hydration Shell: Water Orientation & Cation/Anion Solvation',
    category: 'Intermolecular Forces',
    description: 'Diagram of water orientation in hydration shells around cations and anions',
    type: 'ion_hydration_shell_water_orientation_cation_anion_solvation',
    defaultOptions: {
        title: 'Ion Hydration Shells: Cation & Anion Solvation',
        showCationHydration: true,
        showAnionHydration: true,
        showWaterOrientation: true,
        width: 1050,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'imfTypeStrengthRankingDecisionFlowchartBoilingPointPredictionDiagram': {
    name: 'IMF Type & Strength Ranking Decision Flowchart for Boiling Point Prediction',
    category: 'Intermolecular Forces',
    description: 'Decision flowchart for identifying dominant IMF type and predicting relative boiling points',
    type: 'imf_type_strength_ranking_decision_flowchart_boiling_point_prediction',
    defaultOptions: {
        title: 'IMF Decision Flowchart: Boiling Point Prediction',
        showDecisionSteps: true,
        showIMFRanking: true,
        showBoilingPointOutcome: true,
        width: 1000,
        height: 850,
        backgroundColor: '#ffffff'
    }
},

'imfStrengthBoilingPointViscositySurfaceTensionSolubilityCorrelationDiagram': {
    name: 'IMF Strength, Boiling Point, Viscosity, Surface Tension & Solubility Correlation',
    category: 'Intermolecular Forces',
    description: 'Correlation diagram linking IMF strength to bulk physical properties including boiling point, viscosity, surface tension, and solubility',
    type: 'imf_strength_boiling_point_viscosity_surface_tension_solubility_correlation',
    defaultOptions: {
        title: 'IMF Strength vs Physical Properties',
        showAllFourProperties: true,
        showIMFStrengthAxis: true,
        showCorrelationArrows: true,
        width: 1150,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'proteinFoldingHydrogenBondingDNABaseStackingLipidBilayerIMFDiagram': {
    name: 'Protein Folding (H-bonding), DNA Base Stacking & Lipid Bilayer IMF',
    category: 'Intermolecular Forces',
    description: 'Biological IMF applications: protein folding hydrogen bonds, DNA base stacking, and lipid bilayer forces',
    type: 'protein_folding_hydrogen_bonding_dna_base_stacking_lipid_bilayer_imf',
    defaultOptions: {
        title: 'Biological IMF: Proteins, DNA & Lipid Bilayers',
        showProteinFolding: true,
        showDNAStacking: true,
        showLipidBilayer: true,
        width: 1200,
        height: 850,
        backgroundColor: '#ffffff'
    }
},

'piPiStackingHalogenBondingCationPiMetallophilicInteractionsDiagram': {
    name: 'π-π Stacking, Halogen Bonding, Cation-π & Metallophilic Interactions',
    category: 'Intermolecular Forces',
    description: 'Advanced intermolecular interactions: π-π stacking, halogen bonding, cation-π, and metallophilic interactions',
    type: 'pi_pi_stacking_halogen_bonding_cation_pi_metallophilic_interactions',
    defaultOptions: {
        title: 'Advanced IMF: π-π, Halogen, Cation-π & Metallophilic',
        showPiPiStacking: true,
        showHalogenBonding: true,
        showCationPiInteraction: true,
        showMetallophilicInteraction: true,
        width: 1200,
        height: 800,
        backgroundColor: '#ffffff'
    }
},

'heatingCurvePhaseChangePlateauEnthalpyFusionVapourisationIMFDiagram': {
    name: 'Heating Curve: Phase Change Plateau, Enthalpy of Fusion & Vaporisation (IMF)',
    category: 'Intermolecular Forces',
    description: 'Heating curve with phase change plateaus annotated with ΔHfus and ΔHvap linked to IMF strength',
    type: 'heating_curve_phase_change_plateau_enthalpy_fusion_vapourisation_imf',
    defaultOptions: {
        title: 'Heating Curve: Phase Changes & IMF Enthalpy',
        showHeatingCurve: true,
        showPlateauAnnotations: true,
        showIMFStrengthLink: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

// ===== OXIDATION STATES =====

'electronBookkeepingBondPolarityDiagram': {
    name: 'Electron Bookkeeping & Bond Polarity',
    category: 'Oxidation States',
    description: 'Diagram illustrating electron bookkeeping in polar bonds for oxidation state assignment',
    type: 'electron_bookkeeping_bond_polarity',
    defaultOptions: {
        title: 'Electron Bookkeeping & Bond Polarity',
        showElectronAllocation: true,
        showBondPolarity: true,
        showOxidationStateResult: true,
        width: 950,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

'oxidationStateRulePriorityFlowchart': {
    name: 'Oxidation State Rule Priority Flowchart',
    category: 'Oxidation States',
    description: 'Priority-ordered flowchart for assigning oxidation states using standard rules',
    type: 'oxidation_state_rule_priority_flowchart',
    defaultOptions: {
        title: 'Oxidation State Rule Priority Flowchart',
        showPriorityOrder: true,
        showRuleExamples: true,
        showDecisionNodes: true,
        width: 950,
        height: 800,
        backgroundColor: '#ffffff'
    }
},

'oxidationStateAlgebraicWorkingDiagram': {
    name: 'Oxidation State Algebraic Working',
    category: 'Oxidation States',
    description: 'Step-by-step algebraic working for calculating unknown oxidation states in compounds',
    type: 'oxidation_state_algebraic_working',
    defaultOptions: {
        title: 'Oxidation State Algebraic Working',
        showAlgebraicSteps: true,
        showWorkedExamples: true,
        showChargeSumCheck: true,
        width: 950,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'transitionMetalVariableOxidationStatesPeriodicTable': {
    name: 'Transition Metal Variable Oxidation States Periodic Table',
    category: 'Oxidation States',
    description: 'Periodic table of d-block transition metals annotated with their variable oxidation states',
    type: 'transition_metal_variable_oxidation_states_periodic_table',
    defaultOptions: {
        title: 'Transition Metal Variable Oxidation States',
        showDBlockOnly: true,
        showAllOxidationStates: true,
        showCommonStatesHighlighted: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'oxidationStateChangeArrowTrackingDiagram': {
    name: 'Oxidation State Change Arrow Tracking',
    category: 'Oxidation States',
    description: 'Diagram tracking oxidation state changes with arrows across a redox reaction',
    type: 'oxidation_state_change_arrow_tracking',
    defaultOptions: {
        title: 'Oxidation State Change Tracking',
        showOxidationArrows: true,
        showReductionArrows: true,
        showStateChanges: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

'oxidisingReducingAgentElectronTransferDiagram': {
    name: 'Oxidising & Reducing Agent Electron Transfer',
    category: 'Oxidation States',
    description: 'Diagram identifying oxidising and reducing agents via electron transfer in redox reactions',
    type: 'oxidising_reducing_agent_electron_transfer',
    defaultOptions: {
        title: 'Oxidising & Reducing Agents: Electron Transfer',
        showElectronTransfer: true,
        showAgentLabels: true,
        showOxidationStateChanges: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

'disproportionationSingleSpeciesSplitOxidationDiagram': {
    name: 'Disproportionation: Single Species Split Oxidation',
    category: 'Oxidation States',
    description: 'Diagram of disproportionation where a single species simultaneously oxidises and reduces',
    type: 'disproportionation_single_species_split_oxidation',
    defaultOptions: {
        title: 'Disproportionation: Single Species Redox Split',
        showSimultaneousOxidationReduction: true,
        showOxidationStateArrows: true,
        showExample: true,
        width: 950,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

'maxOxidationStatePeriod3PeriodicTrendChart': {
    name: 'Maximum Oxidation State: Period 3 Periodic Trend Chart',
    category: 'Oxidation States',
    description: 'Chart of maximum oxidation states across Period 3 elements with periodic trend explanation',
    type: 'max_oxidation_state_period3_periodic_trend_chart',
    defaultOptions: {
        title: 'Maximum Oxidation States: Period 3 Trend',
        showPeriod3Elements: true,
        showMaxOxStates: true,
        showGroupNumberLink: true,
        width: 1050,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

'stockNomenclatureRomanNumeralNamingFlowchart': {
    name: 'Stock Nomenclature: Roman Numeral Naming Flowchart',
    category: 'Oxidation States',
    description: 'Flowchart for naming ionic compounds using Stock system Roman numeral notation',
    type: 'stock_nomenclature_roman_numeral_naming_flowchart',
    defaultOptions: {
        title: 'Stock Nomenclature: Roman Numeral Naming',
        showNamingSteps: true,
        showRomanNumeralRule: true,
        showExamples: true,
        width: 950,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'permanganateDichromateTitrationOxidationStateApplicationDiagram': {
    name: 'Permanganate & Dichromate Titration: Oxidation State Application',
    category: 'Oxidation States',
    description: 'Oxidation state application in permanganate and dichromate redox titrations',
    type: 'permanganate_dichromate_titration_oxidation_state_application',
    defaultOptions: {
        title: 'Permanganate & Dichromate Titration: Oxidation States',
        showHalfEquations: true,
        showOxidationStateChanges: true,
        showColourChanges: true,
        width: 1050,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

// ===== REDOX REACTIONS =====

'oilRigElectronTransferRedoxDefinitionDiagram': {
    name: 'OIL RIG Electron Transfer Redox Definition',
    category: 'Redox Reactions',
    description: 'OIL RIG mnemonic diagram defining oxidation and reduction in terms of electron transfer',
    type: 'oil_rig_electron_transfer_redox_definition',
    defaultOptions: {
        title: 'OIL RIG: Redox Electron Transfer',
        showOILRIGMnemonic: true,
        showElectronTransferArrows: true,
        showDefinitionLabels: true,
        width: 900,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

'halfEquationAcidicBasicBalancingStepsDiagram': {
    name: 'Half Equation: Acidic & Basic Balancing Steps',
    category: 'Redox Reactions',
    description: 'Step-by-step balancing procedure for half equations in acidic and basic conditions',
    type: 'half_equation_acidic_basic_balancing_steps',
    defaultOptions: {
        title: 'Half Equation Balancing: Acidic & Basic',
        showAcidicSteps: true,
        showBasicSteps: true,
        showWorkedExample: true,
        width: 1050,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'halfEquationCombinationElectronCancellationDiagram': {
    name: 'Half Equation Combination & Electron Cancellation',
    category: 'Redox Reactions',
    description: 'Diagram combining oxidation and reduction half equations with electron cancellation',
    type: 'half_equation_combination_electron_cancellation',
    defaultOptions: {
        title: 'Half Equation Combination & Electron Cancellation',
        showHalfEquations: true,
        showElectronCancellation: true,
        showOverallEquation: true,
        width: 1050,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'redoxReactionTypesClassificationTreeDiagram': {
    name: 'Redox Reaction Types Classification Tree',
    category: 'Redox Reactions',
    description: 'Classification tree of redox reaction types including combination, decomposition, displacement, and disproportionation',
    type: 'redox_reaction_types_classification_tree',
    defaultOptions: {
        title: 'Redox Reaction Types Classification Tree',
        showAllTypes: true,
        showExamplesPerType: true,
        showClassificationCriteria: true,
        width: 1100,
        height: 800,
        backgroundColor: '#ffffff'
    }
},

'metalActivitySeriesDisplacementReactionDiagram': {
    name: 'Metal Activity Series & Displacement Reaction',
    category: 'Redox Reactions',
    description: 'Metal activity series with displacement reaction examples showing more active metal displacing less active',
    type: 'metal_activity_series_displacement_reaction',
    defaultOptions: {
        title: 'Metal Activity Series & Displacement',
        showActivitySeries: true,
        showDisplacementExamples: true,
        showElectronTransfer: true,
        width: 1000,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'manganateDichromateTitrationEndpointColourChangeDiagram': {
    name: 'Manganate & Dichromate Titration Endpoint Colour Change',
    category: 'Redox Reactions',
    description: 'Colour change diagrams for manganate(VII) and dichromate(VI) titration endpoints',
    type: 'manganate_dichromate_titration_endpoint_colour_change',
    defaultOptions: {
        title: 'Manganate & Dichromate Endpoint Colour Changes',
        showColourChangeDiagrams: true,
        showEndpointAnnotations: true,
        showBothTitrants: true,
        width: 1050,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'permanganateProductsAcidicNeutralAlkalineMediumComparisonDiagram': {
    name: 'Permanganate Products: Acidic, Neutral & Alkaline Medium Comparison',
    category: 'Redox Reactions',
    description: 'Comparison of KMnO₄ reduction products in acidic, neutral, and alkaline media',
    type: 'permanganate_products_acidic_neutral_alkaline_medium_comparison',
    defaultOptions: {
        title: 'Permanganate Products by Medium',
        showAllThreeMedia: true,
        showProductFormulas: true,
        showColourChanges: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'blastFurnaceIronReductionOxidationStateFlowDiagram': {
    name: 'Blast Furnace: Iron Reduction & Oxidation State Flow',
    category: 'Redox Reactions',
    description: 'Diagram of blast furnace iron reduction with oxidation state changes tracked through the process',
    type: 'blast_furnace_iron_reduction_oxidation_state_flow',
    defaultOptions: {
        title: 'Blast Furnace: Iron Reduction & Oxidation States',
        showFurnaceZones: true,
        showOxidationStateChanges: true,
        showReactionEquations: true,
        width: 1000,
        height: 850,
        backgroundColor: '#ffffff'
    }
},

'cellularRespirationElectronTransportChainRedoxDiagram': {
    name: 'Cellular Respiration: Electron Transport Chain Redox',
    category: 'Redox Reactions',
    description: 'Redox diagram of the mitochondrial electron transport chain in cellular respiration',
    type: 'cellular_respiration_electron_transport_chain_redox',
    defaultOptions: {
        title: 'Electron Transport Chain: Cellular Respiration Redox',
        showElectronCarriers: true,
        showRedoxSteps: true,
        showATPSynthesis: true,
        width: 1200,
        height: 800,
        backgroundColor: '#ffffff'
    }
},

'redoxIndicatorColourChangeTestSummaryDiagram': {
    name: 'Redox Indicator Colour Change Test Summary',
    category: 'Redox Reactions',
    description: 'Summary of common redox indicators and their colour change tests for oxidising and reducing agents',
    type: 'redox_indicator_colour_change_test_summary',
    defaultOptions: {
        title: 'Redox Indicator Colour Change Tests',
        showIndicatorList: true,
        showColourChanges: true,
        showTestConditions: true,
        width: 1050,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

// ===== ELECTROCHEMISTRY =====

'electrochemicalCellAnodeCathodeElectronFlowDiagram': {
    name: 'Electrochemical Cell: Anode, Cathode & Electron Flow',
    category: 'Electrochemistry',
    description: 'Diagram of electrochemical cell labelling anode, cathode, and electron flow direction',
    type: 'electrochemical_cell_anode_cathode_electron_flow',
    defaultOptions: {
        title: 'Electrochemical Cell: Anode, Cathode & Electron Flow',
        showAnodeCathodeLabels: true,
        showElectronFlowArrows: true,
        showHalfReactions: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'daniellCellSaltBridgeElectronIonFlowDiagram': {
    name: 'Daniell Cell: Salt Bridge, Electron & Ion Flow',
    category: 'Electrochemistry',
    description: 'Fully labelled Daniell cell showing salt bridge function, electron flow, and ion migration',
    type: 'daniell_cell_salt_bridge_electron_ion_flow',
    defaultOptions: {
        title: 'Daniell Cell: Salt Bridge & Ion/Electron Flow',
        showSaltBridge: true,
        showElectronFlow: true,
        showIonMigration: true,
        width: 1050,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'electrochemicalSeriesStandardReductionPotentialLadderDiagram': {
    name: 'Electrochemical Series: Standard Reduction Potential Ladder',
    category: 'Electrochemistry',
    description: 'Ladder diagram of standard electrode reduction potentials with spontaneity prediction',
    type: 'electrochemical_series_standard_reduction_potential_ladder',
    defaultOptions: {
        title: 'Electrochemical Series: Standard Reduction Potentials',
        showReductionPotentials: true,
        showSpontaneityPrediction: true,
        showSelectedHalfReactions: true,
        width: 1000,
        height: 850,
        backgroundColor: '#ffffff'
    }
},

'nernstEquationConcentrationVsEmfGraphDiagram': {
    name: 'Nernst Equation: Concentration vs EMF Graph',
    category: 'Electrochemistry',
    description: 'Graph of cell EMF versus concentration ratio using the Nernst equation',
    type: 'nernst_equation_concentration_vs_emf_graph',
    defaultOptions: {
        title: 'Nernst Equation: Concentration vs EMF',
        showNernstFormula: true,
        showEmfConcentrationGraph: true,
        showStandardPotentialReference: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'electrolyticCellProductSelectionAnodeCathodeComparisonDiagram': {
    name: 'Electrolytic Cell Product Selection: Anode & Cathode Comparison',
    category: 'Electrochemistry',
    description: 'Diagram for predicting products at anode and cathode in electrolytic cells based on electrode potential',
    type: 'electrolytic_cell_product_selection_anode_cathode_comparison',
    defaultOptions: {
        title: 'Electrolytic Cell Product Selection',
        showProductSelectionRules: true,
        showAnodeCathodeComparison: true,
        showExamples: true,
        width: 1050,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'faradayChargeToMassQuantitativeRelationshipDiagram': {
    name: 'Faraday: Charge to Mass Quantitative Relationship',
    category: 'Electrochemistry',
    description: 'Diagram of Faraday\'s laws relating charge, moles of electrons, and mass deposited',
    type: 'faraday_charge_to_mass_quantitative_relationship',
    defaultOptions: {
        title: 'Faraday: Charge to Mass Relationship',
        showFaradayFormula: true,
        showCalculationSteps: true,
        showWorkedExample: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'primarySecondaryFuelCellComparativeStructureDiagram': {
    name: 'Primary, Secondary & Fuel Cell Comparative Structure',
    category: 'Electrochemistry',
    description: 'Comparative structural diagrams of primary cells, secondary (rechargeable) cells, and fuel cells',
    type: 'primary_secondary_fuel_cell_comparative_structure',
    defaultOptions: {
        title: 'Primary, Secondary & Fuel Cell Comparison',
        showAllThreeTypes: true,
        showStructuralDifferences: true,
        showAdvantagesDisadvantages: true,
        width: 1200,
        height: 800,
        backgroundColor: '#ffffff'
    }
},

'hallHeroultChlorAlkaliIndustrialElectrolysisCellDiagram': {
    name: 'Hall-Héroult & Chlor-Alkali Industrial Electrolysis Cells',
    category: 'Electrochemistry',
    description: 'Diagrams of Hall-Héroult aluminium smelting and chlor-alkali industrial electrolysis cells',
    type: 'hall_heroult_chlor_alkali_industrial_electrolysis_cell',
    defaultOptions: {
        title: 'Hall-Héroult & Chlor-Alkali Electrolysis',
        showBothCells: true,
        showElectrodeReactions: true,
        showIndustrialContext: true,
        width: 1200,
        height: 800,
        backgroundColor: '#ffffff'
    }
},

'concentrationCellGlassElectrodePHMeasurementDiagram': {
    name: 'Concentration Cell & Glass Electrode pH Measurement',
    category: 'Electrochemistry',
    description: 'Diagram of glass electrode pH measurement cell and concentration cell principle',
    type: 'concentration_cell_glass_electrode_ph_measurement',
    defaultOptions: {
        title: 'Glass Electrode & pH Measurement Cell',
        showGlassElectrode: true,
        showConcentrationCellPrinciple: true,
        showPhMeasurementSetup: true,
        width: 1050,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'gibbsEnergyEmfEquilibriumConstantTriangleRelationshipDiagram': {
    name: 'Gibbs Energy, EMF & Equilibrium Constant Triangle Relationship',
    category: 'Electrochemistry',
    description: 'Triangle relationship diagram linking ΔG°, E°cell, and equilibrium constant K',
    type: 'gibbs_energy_emf_equilibrium_constant_triangle_relationship',
    defaultOptions: {
        title: 'ΔG°, EMF & K Triangle Relationship',
        showThreeWayRelationship: true,
        showConversionFormulas: true,
        showSignConventions: true,
        width: 950,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

// ===== CORROSION =====

'corrosionElectrochemicalCellAnodeCathodeSurfaceDiagram': {
    name: 'Corrosion Electrochemical Cell: Anode & Cathode Surface',
    category: 'Corrosion',
    description: 'Electrochemical cell model of corrosion showing anodic and cathodic surface regions',
    type: 'corrosion_electrochemical_cell_anode_cathode_surface',
    defaultOptions: {
        title: 'Corrosion: Electrochemical Cell Model',
        showAnodeSurface: true,
        showCathodeSurface: true,
        showElectronIonFlow: true,
        width: 1050,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'corrosionTypesClassificationMorphologyComparisonDiagram': {
    name: 'Corrosion Types Classification & Morphology Comparison',
    category: 'Corrosion',
    description: 'Classification and morphology comparison of common corrosion types',
    type: 'corrosion_types_classification_morphology_comparison',
    defaultOptions: {
        title: 'Corrosion Types: Classification & Morphology',
        showCorrosionTypes: true,
        showMorphologyDiagrams: true,
        showClassificationCriteria: true,
        width: 1150,
        height: 800,
        backgroundColor: '#ffffff'
    }
},

'ironRustingElectrochemicalMechanismAnodeCathodeHalfReactionDiagram': {
    name: 'Iron Rusting: Electrochemical Mechanism, Anode & Cathode Half-Reactions',
    category: 'Corrosion',
    description: 'Detailed electrochemical mechanism of iron rusting with anode and cathode half-reactions',
    type: 'iron_rusting_electrochemical_mechanism_anode_cathode_half_reaction',
    defaultOptions: {
        title: 'Iron Rusting: Electrochemical Half-Reactions',
        showAnodeHalfReaction: true,
        showCathodeHalfReaction: true,
        showRustFormation: true,
        width: 1050,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'corrosionRateEnvironmentalFactorsInfluenceChart': {
    name: 'Corrosion Rate Environmental Factors Influence Chart',
    category: 'Corrosion',
    description: 'Chart showing how environmental factors (humidity, pH, temperature, chloride) influence corrosion rate',
    type: 'corrosion_rate_environmental_factors_influence_chart',
    defaultOptions: {
        title: 'Corrosion Rate: Environmental Factors',
        showAllFactors: true,
        showInfluenceDirection: true,
        showQuantitativeEffect: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'metalPassivationActiveCorrosionComparisonGalvanicSeriesDiagram': {
    name: 'Metal Passivation vs Active Corrosion: Galvanic Series Comparison',
    category: 'Corrosion',
    description: 'Comparison of passivation and active corrosion behaviour on the galvanic series',
    type: 'metal_passivation_active_corrosion_comparison_galvanic_series',
    defaultOptions: {
        title: 'Passivation vs Active Corrosion: Galvanic Series',
        showGalvanicSeries: true,
        showPassivationRegions: true,
        showActiveCorrosionRegions: true,
        width: 1050,
        height: 800,
        backgroundColor: '#ffffff'
    }
},

'protectiveCoatingTypesBarrierGalvanicConversionLayerDiagram': {
    name: 'Protective Coating Types: Barrier, Galvanic & Conversion Layer',
    category: 'Corrosion',
    description: 'Diagram of corrosion protection coating types including barrier, galvanic, and conversion layer coatings',
    type: 'protective_coating_types_barrier_galvanic_conversion_layer',
    defaultOptions: {
        title: 'Protective Coatings: Barrier, Galvanic & Conversion',
        showAllThreeTypes: true,
        showMechanismAnnotations: true,
        showExamples: true,
        width: 1100,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'sacrificialAnodeImpressedCurrentCathodicProtectionComparisonDiagram': {
    name: 'Sacrificial Anode vs Impressed Current Cathodic Protection Comparison',
    category: 'Corrosion',
    description: 'Comparative diagram of sacrificial anode and impressed current cathodic protection methods',
    type: 'sacrificial_anode_impressed_current_cathodic_protection_comparison',
    defaultOptions: {
        title: 'Cathodic Protection: Sacrificial Anode vs Impressed Current',
        showBothMethods: true,
        showCircuitDiagrams: true,
        showAdvantagesComparison: true,
        width: 1150,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'anodicCathodicMixedInhibitorAdsorptionMechanismDiagram': {
    name: 'Anodic, Cathodic & Mixed Inhibitor Adsorption Mechanism',
    category: 'Corrosion',
    description: 'Mechanism diagrams for anodic, cathodic, and mixed corrosion inhibitor adsorption',
    type: 'anodic_cathodic_mixed_inhibitor_adsorption_mechanism',
    defaultOptions: {
        title: 'Corrosion Inhibitor Adsorption Mechanisms',
        showAnodicInhibitor: true,
        showCathodicInhibitor: true,
        showMixedInhibitor: true,
        width: 1150,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'corrosionControlDesignPrinciplesCreviceDissimilarMetalDiagram': {
    name: 'Corrosion Control Design Principles: Crevice & Dissimilar Metal',
    category: 'Corrosion',
    description: 'Design principles for corrosion control addressing crevice corrosion and dissimilar metal contact',
    type: 'corrosion_control_design_principles_crevice_dissimilar_metal',
    defaultOptions: {
        title: 'Corrosion Control Design Principles',
        showCreviceCorrosionDesign: true,
        showDissimilarMetalDesign: true,
        showBestPracticeAnnotations: true,
        width: 1100,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'globalCorrosionCostBreakdownDirectIndirectPieChartDiagram': {
    name: 'Global Corrosion Cost Breakdown: Direct & Indirect Pie Chart',
    category: 'Corrosion',
    description: 'Pie chart of global corrosion economic cost broken down by direct and indirect components',
    type: 'global_corrosion_cost_breakdown_direct_indirect_pie_chart',
    defaultOptions: {
        title: 'Global Corrosion Cost: Direct & Indirect Breakdown',
        showPieChart: true,
        showSectorLabels: true,
        showTotalCostAnnotation: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

// ===== CHEMICAL EQUILIBRIUM =====

'reversibleVsIrreversibleReactionArrowDiagram': {
    name: 'Reversible vs Irreversible Reaction Arrow Diagram',
    category: 'Chemical Equilibrium',
    description: 'Comparison of single-headed and double-headed equilibrium arrows for reversible and irreversible reactions',
    type: 'reversible_vs_irreversible_reaction_arrow',
    defaultOptions: {
        title: 'Reversible vs Irreversible Reaction Arrows',
        showArrowTypes: true,
        showExamples: true,
        showCompletionCriteria: true,
        width: 950,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'equalForwardReverseRateEquilibriumDiagram': {
    name: 'Equal Forward & Reverse Rate at Equilibrium',
    category: 'Chemical Equilibrium',
    description: 'Diagram showing equal forward and reverse reaction rates defining dynamic equilibrium',
    type: 'equal_forward_reverse_rate_equilibrium',
    defaultOptions: {
        title: 'Dynamic Equilibrium: Equal Forward & Reverse Rates',
        showRateDiagram: true,
        showEquilibriumDefinition: true,
        showTimeGraph: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

'equilibriumPositionReactantsProductsSpectrumDiagram': {
    name: 'Equilibrium Position: Reactants–Products Spectrum',
    category: 'Chemical Equilibrium',
    description: 'Spectrum diagram showing equilibrium position from reactant-favoured to product-favoured',
    type: 'equilibrium_position_reactants_products_spectrum',
    defaultOptions: {
        title: 'Equilibrium Position Spectrum',
        showSpectrum: true,
        showKRelationship: true,
        showExamples: true,
        width: 1000,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'rateTimeAndConcentrationTimeEquilibriumGraphs': {
    name: 'Rate-Time & Concentration-Time Equilibrium Graphs',
    category: 'Chemical Equilibrium',
    description: 'Paired rate-time and concentration-time graphs showing approach to equilibrium',
    type: 'rate_time_and_concentration_time_equilibrium_graphs',
    defaultOptions: {
        title: 'Rate-Time & Concentration-Time Equilibrium Graphs',
        showBothGraphs: true,
        showEquilibriumAnnotations: true,
        showAxisLabels: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'homogeneousVsHeterogeneousEquilibriumPhasesDiagram': {
    name: 'Homogeneous vs Heterogeneous Equilibrium Phases',
    category: 'Chemical Equilibrium',
    description: 'Comparison of homogeneous and heterogeneous equilibria with phase notation',
    type: 'homogeneous_vs_heterogeneous_equilibrium_phases',
    defaultOptions: {
        title: 'Homogeneous vs Heterogeneous Equilibrium',
        showPhaseNotation: true,
        showKExpressionDifference: true,
        showExamples: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

'reactionQuotientQVersusKEquilibriumApproachDiagram': {
    name: 'Reaction Quotient Q versus K Equilibrium Approach',
    category: 'Chemical Equilibrium',
    description: 'Diagram comparing Q and K values to predict direction of reaction shift to reach equilibrium',
    type: 'reaction_quotient_q_versus_k_equilibrium_approach',
    defaultOptions: {
        title: 'Q vs K: Predicting Equilibrium Shift',
        showQKComparison: true,
        showShiftDirections: true,
        showNumberLine: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

'activationEnergyProfileForwardReverseReactionDiagram': {
    name: 'Activation Energy Profile: Forward & Reverse Reaction',
    category: 'Chemical Equilibrium',
    description: 'Energy profile diagram labelling activation energies for forward and reverse reactions at equilibrium',
    type: 'activation_energy_profile_forward_reverse_reaction',
    defaultOptions: {
        title: 'Activation Energy Profile: Forward & Reverse',
        showBothActivationEnergies: true,
        showEnthalpyChange: true,
        showTransitionState: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'haberProcessFlowDiagramEquilibriumConditions': {
    name: 'Haber Process Flow Diagram & Equilibrium Conditions',
    category: 'Chemical Equilibrium',
    description: 'Industrial flow diagram of the Haber process annotated with equilibrium and kinetic compromise conditions',
    type: 'haber_process_flow_diagram_equilibrium_conditions',
    defaultOptions: {
        title: 'Haber Process: Flow Diagram & Conditions',
        showProcessFlow: true,
        showEquilibriumConditions: true,
        showYieldAnnotations: true,
        width: 1100,
        height: 800,
        backgroundColor: '#ffffff'
    }
},

'no2N2o4ColourChangeEquilibriumTubeDiagram': {
    name: 'NO₂/N₂O₄ Colour Change Equilibrium Tube',
    category: 'Chemical Equilibrium',
    description: 'Equilibrium tube diagram showing NO₂/N₂O₄ colour change with temperature and pressure changes',
    type: 'no2_n2o4_colour_change_equilibrium_tube',
    defaultOptions: {
        title: 'NO₂/N₂O₄ Colour Change Equilibrium',
        showColourChange: true,
        showTemperatureEffect: true,
        showPressureEffect: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'dynamicEquilibriumCommonMisconceptionsAnnotatedDiagram': {
    name: 'Dynamic Equilibrium Common Misconceptions Annotated',
    category: 'Chemical Equilibrium',
    description: 'Annotated diagram correcting common misconceptions about dynamic equilibrium',
    type: 'dynamic_equilibrium_common_misconceptions_annotated',
    defaultOptions: {
        title: 'Dynamic Equilibrium: Correcting Misconceptions',
        showMisconceptions: true,
        showCorrections: true,
        showAnnotations: true,
        width: 1050,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'lawOfMassActionExpressionAnnotatedDiagram': {
    name: 'Law of Mass Action Expression Annotated',
    category: 'Chemical Equilibrium',
    description: 'Annotated law of mass action Kc expression with stoichiometry, numerator/denominator, and units',
    type: 'law_of_mass_action_expression_annotated',
    defaultOptions: {
        title: 'Law of Mass Action: Kc Expression',
        showKcFormula: true,
        showStoichiometryAnnotation: true,
        showUnitsNote: true,
        width: 950,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

'kcExpressionNumeratorDenominatorStoichiometryDiagram': {
    name: 'Kc Expression: Numerator, Denominator & Stoichiometry',
    category: 'Chemical Equilibrium',
    description: 'Detailed diagram of Kc expression numerator/denominator structure with stoichiometric exponents',
    type: 'kc_expression_numerator_denominator_stoichiometry',
    defaultOptions: {
        title: 'Kc Expression: Stoichiometry & Structure',
        showNumeratorDenominator: true,
        showExponentAnnotations: true,
        showWorkedExample: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'partialPressureMoleFractionKpDiagram': {
    name: 'Partial Pressure, Mole Fraction & Kp',
    category: 'Chemical Equilibrium',
    description: 'Diagram linking partial pressure, mole fraction, and Kp equilibrium constant for gas phase equilibria',
    type: 'partial_pressure_mole_fraction_kp',
    defaultOptions: {
        title: 'Partial Pressure, Mole Fraction & Kp',
        showPartialPressureFormula: true,
        showMoleFractionCalculation: true,
        showKpExpression: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'iceTableInitialChangeEquilibriumRowsDiagram': {
    name: 'ICE Table: Initial, Change & Equilibrium Rows',
    category: 'Chemical Equilibrium',
    description: 'Template ICE table with annotated Initial, Change, and Equilibrium rows for equilibrium calculations',
    type: 'ice_table_initial_change_equilibrium_rows',
    defaultOptions: {
        title: 'ICE Table Structure & Method',
        showAllThreeRows: true,
        showRowAnnotations: true,
        showWorkedExample: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'qVersusKDirectionOfShiftNumberLineDiagram': {
    name: 'Q versus K Direction of Shift Number Line',
    category: 'Chemical Equilibrium',
    description: 'Number line diagram showing Q vs K comparison and resulting direction of equilibrium shift',
    type: 'q_versus_k_direction_of_shift_number_line',
    defaultOptions: {
        title: 'Q vs K: Direction of Shift',
        showNumberLine: true,
        showShiftArrows: true,
        showQKRegions: true,
        width: 1000,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'vanTHoffPlotLnKVersusOneOverTDiagram': {
    name: "Van 't Hoff Plot: ln K versus 1/T",
    category: 'Chemical Equilibrium',
    description: "Van 't Hoff plot of ln K versus 1/T for determining ΔH° and ΔS° from equilibrium data",
    type: 'van_t_hoff_plot_ln_k_versus_one_over_t',
    defaultOptions: {
        title: "Van 't Hoff Plot: ln K vs 1/T",
        showGraph: true,
        showSlopeIntercept: true,
        showThermodynamicLink: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'reversalMultiplicationAdditionKRulesSummaryDiagram': {
    name: 'Reversal, Multiplication & Addition K Rules Summary',
    category: 'Chemical Equilibrium',
    description: 'Summary of rules for K manipulation: reversal (1/K), multiplication (Kⁿ), and addition (K₁×K₂)',
    type: 'reversal_multiplication_addition_k_rules_summary',
    defaultOptions: {
        title: 'K Manipulation Rules: Reversal, Multiplication & Addition',
        showAllThreeRules: true,
        showFormulaAnnotations: true,
        showWorkedExamples: true,
        width: 1050,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'degreeOfDissociationAlphaKspRelationshipDiagram': {
    name: 'Degree of Dissociation (α) & Ksp Relationship',
    category: 'Chemical Equilibrium',
    description: 'Diagram linking degree of dissociation α to Ka or Ksp with algebraic derivation',
    type: 'degree_of_dissociation_alpha_ksp_relationship',
    defaultOptions: {
        title: 'Degree of Dissociation α & K Relationship',
        showAlphaDefinition: true,
        showKRelationship: true,
        showAlgebraicDerivation: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'equilibriumCalculationProblemTypeDecisionTreeDiagram': {
    name: 'Equilibrium Calculation Problem Type Decision Tree',
    category: 'Chemical Equilibrium',
    description: 'Decision tree for identifying and solving different types of equilibrium calculation problems',
    type: 'equilibrium_calculation_problem_type_decision_tree',
    defaultOptions: {
        title: 'Equilibrium Calculation Decision Tree',
        showDecisionNodes: true,
        showProblemTypes: true,
        showSolutionMethods: true,
        width: 1050,
        height: 850,
        backgroundColor: '#ffffff'
    }
},

'activityVsConcentrationIdealRealBehaviourDiagram': {
    name: 'Activity vs Concentration: Ideal & Real Behaviour',
    category: 'Chemical Equilibrium',
    description: 'Diagram comparing thermodynamic activity to concentration for ideal and real solution behaviour',
    type: 'activity_vs_concentration_ideal_real_behaviour',
    defaultOptions: {
        title: 'Activity vs Concentration: Ideal & Real Behaviour',
        showIdealLine: true,
        showRealCurve: true,
        showActivityCoefficient: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

// ===== LE CHATELIER'S PRINCIPLE =====

'leChatelierStressResponseEquilibriumShiftDiagram': {
    name: "Le Chatelier's Stress-Response Equilibrium Shift",
    category: "Le Chatelier's Principle",
    description: "Overview diagram of Le Chatelier's principle with stress types and equilibrium shift responses",
    type: 'le_chatelier_stress_response_equilibrium_shift',
    defaultOptions: {
        title: "Le Chatelier's Principle: Stress & Response",
        showStressTypes: true,
        showShiftDirections: true,
        showPrincipleStatement: true,
        width: 1100,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'concentrationAddRemoveEquilibriumShiftArrowDiagram': {
    name: 'Concentration Add/Remove Equilibrium Shift Arrow Diagram',
    category: "Le Chatelier's Principle",
    description: 'Arrow diagram showing equilibrium shift upon adding or removing reactant/product concentration',
    type: 'concentration_add_remove_equilibrium_shift_arrow',
    defaultOptions: {
        title: 'Concentration Change: Equilibrium Shift',
        showAdditionShift: true,
        showRemovalShift: true,
        showArrowDirections: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

'gasMolesEitherSidePressureShiftDeltaNDiagram': {
    name: 'Gas Moles Either Side & Pressure Shift (ΔN)',
    category: "Le Chatelier's Principle",
    description: 'Diagram predicting pressure shift direction from mole count difference (ΔN) across equilibrium',
    type: 'gas_moles_either_side_pressure_shift_delta_n',
    defaultOptions: {
        title: 'Pressure Shift: Gas Moles & ΔN',
        showMoleCountComparison: true,
        showPressureShiftPrediction: true,
        showDeltaNAnnotation: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

'exothermicEndothermicTemperatureKShiftSummaryDiagram': {
    name: 'Exothermic & Endothermic Temperature K Shift Summary',
    category: "Le Chatelier's Principle",
    description: 'Summary diagram of temperature effects on K for exothermic and endothermic equilibria',
    type: 'exothermic_endothermic_temperature_k_shift_summary',
    defaultOptions: {
        title: 'Temperature Effect on K: Exothermic & Endothermic',
        showExothermicCase: true,
        showEndothermicCase: true,
        showKChangeAnnotation: true,
        width: 1050,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'catalystLowersActivationEnergyBothDirectionsEnergyProfileDiagram': {
    name: 'Catalyst Lowers Activation Energy Both Directions: Energy Profile',
    category: "Le Chatelier's Principle",
    description: 'Energy profile showing catalyst lowering activation energy equally for forward and reverse reactions',
    type: 'catalyst_lowers_activation_energy_both_directions_energy_profile',
    defaultOptions: {
        title: 'Catalyst: Equal Ea Reduction Both Directions',
        showCatalysedProfile: true,
        showUncatalysedProfile: true,
        showEqualReductionAnnotation: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'qVersusKPostPerturbationShiftCalculationDiagram': {
    name: 'Q versus K Post-Perturbation Shift Calculation',
    category: "Le Chatelier's Principle",
    description: 'Calculation diagram using Q vs K comparison after a perturbation to quantify equilibrium shift',
    type: 'q_versus_k_post_perturbation_shift_calculation',
    defaultOptions: {
        title: 'Q vs K: Post-Perturbation Shift Calculation',
        showPerturbationStep: true,
        showQCalculation: true,
        showShiftDetermination: true,
        width: 1050,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'haberContactProcessConditionsCompromiseSummaryDiagram': {
    name: 'Haber & Contact Process Conditions Compromise Summary',
    category: "Le Chatelier's Principle",
    description: 'Summary of industrial compromise conditions for Haber and Contact processes balancing yield and rate',
    type: 'haber_contact_process_conditions_compromise_summary',
    defaultOptions: {
        title: 'Haber & Contact Process: Conditions Compromise',
        showHaberConditions: true,
        showContactConditions: true,
        showYieldRateCompromise: true,
        width: 1150,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'bufferSystemLeChatelierAcidBaseShiftDiagram': {
    name: "Buffer System & Le Chatelier Acid/Base Shift",
    category: "Le Chatelier's Principle",
    description: "Le Chatelier's explanation of buffer system response to acid and base addition",
    type: 'buffer_system_le_chatelier_acid_base_shift',
    defaultOptions: {
        title: "Buffer System: Le Chatelier's Acid/Base Shift",
        showAcidAdditionShift: true,
        showBaseAdditionShift: true,
        showEquilibriumEquations: true,
        width: 1050,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'concentrationTimeGraphPerturbationNewEquilibriumDiagram': {
    name: 'Concentration-Time Graph: Perturbation & New Equilibrium',
    category: "Le Chatelier's Principle",
    description: 'Concentration-time graph showing system response to perturbation and re-establishment of new equilibrium',
    type: 'concentration_time_graph_perturbation_new_equilibrium',
    defaultOptions: {
        title: 'Concentration-Time: Perturbation & New Equilibrium',
        showPerturbationEvent: true,
        showNewEquilibriumLine: true,
        showConcentrationCurves: true,
        width: 1050,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'leChatelierMisconceptionAnnotatedCorrectionsDiagram': {
    name: "Le Chatelier Misconception Annotated Corrections",
    category: "Le Chatelier's Principle",
    description: "Annotated corrections to common Le Chatelier's principle misconceptions",
    type: 'le_chatelier_misconception_annotated_corrections',
    defaultOptions: {
        title: "Le Chatelier's Principle: Correcting Misconceptions",
        showMisconceptions: true,
        showCorrections: true,
        showAnnotationBoxes: true,
        width: 1100,
        height: 800,
        backgroundColor: '#ffffff'
    }
},

// ===== SOLUBILITY EQUILIBRIA =====

'dissolutionSolidIonsAqueousHeterogeneousEquilibriumDiagram': {
    name: 'Dissolution: Solid to Ions Aqueous Heterogeneous Equilibrium',
    category: 'Solubility Equilibria',
    description: 'Diagram of heterogeneous dissolution equilibrium of ionic solid producing aqueous ions',
    type: 'dissolution_solid_ions_aqueous_heterogeneous_equilibrium',
    defaultOptions: {
        title: 'Dissolution: Solid to Aqueous Ions',
        showSolidPhase: true,
        showIonisation: true,
        showHeterogeneousEquilibrium: true,
        width: 950,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

'kspExpressionStoichiometricPowersSilverChlorideAnnotatedDiagram': {
    name: 'Ksp Expression: Stoichiometric Powers, Silver Chloride Annotated',
    category: 'Solubility Equilibria',
    description: 'Annotated Ksp expression for silver chloride showing stoichiometric powers and units',
    type: 'ksp_expression_stoichiometric_powers_silver_chloride_annotated',
    defaultOptions: {
        title: 'Ksp Expression: AgCl Annotated',
        showKspFormula: true,
        showStoichiometricPowers: true,
        showAnnotations: true,
        width: 950,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

'kspToMolarSolubilityStoichiometryTypeComparisonDiagram': {
    name: 'Ksp to Molar Solubility: Stoichiometry Type Comparison',
    category: 'Solubility Equilibria',
    description: 'Comparison of Ksp to molar solubility calculation for different stoichiometry types (AB, AB₂, A₂B)',
    type: 'ksp_to_molar_solubility_stoichiometry_type_comparison',
    defaultOptions: {
        title: 'Ksp to Molar Solubility: Stoichiometry Comparison',
        showABType: true,
        showAB2Type: true,
        showA2BType: true,
        width: 1100,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'qspVersusKspPrecipitationNoPrecipitationDecisionDiagram': {
    name: 'Qsp versus Ksp: Precipitation/No-Precipitation Decision',
    category: 'Solubility Equilibria',
    description: 'Decision diagram using Qsp vs Ksp comparison to predict whether precipitation will occur',
    type: 'qsp_versus_ksp_precipitation_no_precipitation_decision',
    defaultOptions: {
        title: 'Qsp vs Ksp: Precipitation Decision',
        showQspKspComparison: true,
        showDecisionOutcomes: true,
        showNumberLine: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

'commonIonSolubilitySuppressionLeChatelierShiftDiagram': {
    name: 'Common Ion Solubility Suppression & Le Chatelier Shift',
    category: 'Solubility Equilibria',
    description: 'Common ion effect on solubility explained via Le Chatelier\'s principle equilibrium shift',
    type: 'common_ion_solubility_suppression_le_chatelier_shift',
    defaultOptions: {
        title: 'Common Ion: Solubility Suppression',
        showCommonIonAddition: true,
        showEquilibriumShift: true,
        showSolubilityReduction: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'hydroxideSolubilityVspHAcidicBasicConditionsDiagram': {
    name: 'Hydroxide Solubility vs pH: Acidic & Basic Conditions',
    category: 'Solubility Equilibria',
    description: 'Graph of metal hydroxide solubility versus pH in acidic and basic conditions',
    type: 'hydroxide_solubility_vs_ph_acidic_basic_conditions',
    defaultOptions: {
        title: 'Hydroxide Solubility vs pH',
        showSolubilityPhGraph: true,
        showAcidicBasicRegions: true,
        showExampleHydroxides: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'complexIonFormationMetalLigandKfSolubilityEnhancementDiagram': {
    name: 'Complex Ion Formation: Metal-Ligand Kf & Solubility Enhancement',
    category: 'Solubility Equilibria',
    description: 'Diagram of complex ion formation with metal-ligand Kf expression and solubility enhancement effect',
    type: 'complex_ion_formation_metal_ligand_kf_solubility_enhancement',
    defaultOptions: {
        title: 'Complex Ion Formation & Solubility Enhancement',
        showKfExpression: true,
        showLigandCoordination: true,
        showSolubilityEnhancement: true,
        width: 1050,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'kspVsTemperatureSolubilityCurveEndothermicExothermicDiagram': {
    name: 'Ksp vs Temperature Solubility Curve: Endothermic & Exothermic',
    category: 'Solubility Equilibria',
    description: 'Solubility-temperature curves for endothermic and exothermic dissolution processes',
    type: 'ksp_vs_temperature_solubility_curve_endothermic_exothermic',
    defaultOptions: {
        title: 'Ksp vs Temperature: Endothermic & Exothermic',
        showEndothermicCurve: true,
        showExothermicCurve: true,
        showTemperatureEffect: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'kidneyStoneCalciumOxalatePrecipitationFormationDiagram': {
    name: 'Kidney Stone: Calcium Oxalate Precipitation Formation',
    category: 'Solubility Equilibria',
    description: 'Diagram of kidney stone formation via calcium oxalate precipitation when Qsp exceeds Ksp',
    type: 'kidney_stone_calcium_oxalate_precipitation_formation',
    defaultOptions: {
        title: 'Kidney Stone: Calcium Oxalate Precipitation',
        showQspKspExceedance: true,
        showPrecipitationMechanism: true,
        showBiologicalContext: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'kspSolubilityComparisonStoichiometryTypePitfallsDiagram': {
    name: 'Ksp Solubility Comparison: Stoichiometry Type Pitfalls',
    category: 'Solubility Equilibria',
    description: 'Diagram highlighting pitfalls in comparing solubility using Ksp alone across different stoichiometry types',
    type: 'ksp_solubility_comparison_stoichiometry_type_pitfalls',
    defaultOptions: {
        title: 'Ksp Solubility Comparison Pitfalls',
        showPitfallExamples: true,
        showCorrectComparison: true,
        showStoichiometryTypeEffect: true,
        width: 1050,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

// ===== ATOMIC STRUCTURE =====

'atomNucleusElectronCloudScaleDiagram': {
    name: 'Atom Nucleus & Electron Cloud Scale Diagram',
    category: 'Atomic Structure',
    description: 'Scale diagram of atom showing nucleus and electron cloud relative sizes',
    type: 'atom_nucleus_electron_cloud_scale',
    defaultOptions: {
        title: 'Atom: Nucleus & Electron Cloud Scale',
        showScaleAnnotation: true,
        showNucleusLabel: true,
        showElectronCloud: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'protonNeutronElectronPropertiesComparisonChart': {
    name: 'Proton, Neutron & Electron Properties Comparison Chart',
    category: 'Atomic Structure',
    description: 'Comparison chart of mass, charge, and location of protons, neutrons, and electrons',
    type: 'proton_neutron_electron_properties_comparison_chart',
    defaultOptions: {
        title: 'Subatomic Particle Properties Comparison',
        showMassComparison: true,
        showChargeComparison: true,
        showLocationComparison: true,
        width: 950,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'nuclearSymbolNotationAnnotatedDiagram': {
    name: 'Nuclear Symbol Notation Annotated',
    category: 'Atomic Structure',
    description: 'Annotated nuclear symbol notation showing mass number, atomic number, and element symbol',
    type: 'nuclear_symbol_notation_annotated',
    defaultOptions: {
        title: 'Nuclear Symbol Notation',
        showMassNumber: true,
        showAtomicNumber: true,
        showAnnotationArrows: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'hydrogenIsotopeStructureComparisonDiagram': {
    name: 'Hydrogen Isotope Structure Comparison',
    category: 'Atomic Structure',
    description: 'Structural comparison of hydrogen, deuterium, and tritium isotopes',
    type: 'hydrogen_isotope_structure_comparison',
    defaultOptions: {
        title: 'Hydrogen Isotopes: Structure Comparison',
        showAllThreeIsotopes: true,
        showNeutronDifference: true,
        showMassNumbers: true,
        width: 950,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'cationAnionElectronLossGainDiagram': {
    name: 'Cation & Anion: Electron Loss & Gain',
    category: 'Atomic Structure',
    description: 'Diagram showing cation formation by electron loss and anion formation by electron gain',
    type: 'cation_anion_electron_loss_gain',
    defaultOptions: {
        title: 'Cation & Anion: Electron Loss & Gain',
        showElectronLoss: true,
        showElectronGain: true,
        showChargeResults: true,
        width: 950,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

'bindingEnergyPerNucleonCurveGraph': {
    name: 'Binding Energy per Nucleon Curve Graph',
    category: 'Atomic Structure',
    description: 'Graph of binding energy per nucleon versus mass number showing nuclear stability curve',
    type: 'binding_energy_per_nucleon_curve_graph',
    defaultOptions: {
        title: 'Binding Energy per Nucleon Curve',
        showStabilityCurve: true,
        showIronPeak: true,
        showFusionFissionRegions: true,
        width: 1050,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'standardModelParticleClassificationChart': {
    name: 'Standard Model Particle Classification Chart',
    category: 'Atomic Structure',
    description: 'Classification chart of Standard Model particles including quarks, leptons, and bosons',
    type: 'standard_model_particle_classification_chart',
    defaultOptions: {
        title: 'Standard Model Particle Classification',
        showQuarks: true,
        showLeptons: true,
        showBosons: true,
        width: 1100,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'subatomicParticlePropertySummaryTable': {
    name: 'Subatomic Particle Property Summary Table',
    category: 'Atomic Structure',
    description: 'Summary table of subatomic particle properties including relative mass, charge, and location',
    type: 'subatomic_particle_property_summary_table',
    defaultOptions: {
        title: 'Subatomic Particle Property Summary',
        showRelativeMass: true,
        showRelativeCharge: true,
        showLocation: true,
        width: 950,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'relativeAtomicMassWeightedAverageCalculationDiagram': {
    name: 'Relative Atomic Mass: Weighted Average Calculation',
    category: 'Atomic Structure',
    description: 'Step-by-step diagram of relative atomic mass calculation as isotope abundance weighted average',
    type: 'relative_atomic_mass_weighted_average_calculation',
    defaultOptions: {
        title: 'Relative Atomic Mass: Weighted Average',
        showIsotopeAbundances: true,
        showWeightingCalculation: true,
        showWorkedExample: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'subatomicParticleConceptualErrorAnnotationDiagram': {
    name: 'Subatomic Particle Conceptual Error Annotation',
    category: 'Atomic Structure',
    description: 'Annotated diagram correcting common conceptual errors about subatomic particles',
    type: 'subatomic_particle_conceptual_error_annotation',
    defaultOptions: {
        title: 'Subatomic Particle: Correcting Misconceptions',
        showCommonErrors: true,
        showCorrections: true,
        showAnnotations: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

// ===== ATOMIC MODELS =====

'hydrogenEmissionAbsorptionSpectrumDiagram': {
    name: 'Hydrogen Emission & Absorption Spectrum',
    category: 'Atomic Models',
    description: 'Hydrogen emission and absorption spectra showing spectral lines and energy transitions',
    type: 'hydrogen_emission_absorption_spectrum',
    defaultOptions: {
        title: 'Hydrogen Emission & Absorption Spectra',
        showEmissionSpectrum: true,
        showAbsorptionSpectrum: true,
        showEnergyTransitions: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'daltonSolidSphereAtomDiagram': {
    name: "Dalton's Solid Sphere Atom Model",
    category: 'Atomic Models',
    description: "Diagram of Dalton's solid sphere atomic model with key postulates",
    type: 'dalton_solid_sphere_atom',
    defaultOptions: {
        title: "Dalton's Solid Sphere Atom Model",
        showSphereModel: true,
        showPostulates: true,
        showHistoricalContext: true,
        width: 800,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

'thomsonPlumPuddingModelAnnotatedDiagram': {
    name: "Thomson's Plum Pudding Model Annotated",
    category: 'Atomic Models',
    description: "Annotated diagram of Thomson's plum pudding atomic model with electron positions",
    type: 'thomson_plum_pudding_model_annotated',
    defaultOptions: {
        title: "Thomson's Plum Pudding Model",
        showElectronPositions: true,
        showPositiveMatrix: true,
        showAnnotations: true,
        width: 850,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'goldFoilExperimentScatteringResultsDiagram': {
    name: 'Gold Foil Experiment Scattering Results',
    category: 'Atomic Models',
    description: "Rutherford's gold foil experiment setup and alpha particle scattering results",
    type: 'gold_foil_experiment_scattering_results',
    defaultOptions: {
        title: 'Gold Foil Experiment: Scattering Results',
        showExperimentSetup: true,
        showScatteringPattern: true,
        showNucleusDiscovery: true,
        width: 1000,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'bohrEnergyLevelTransitionDiagram': {
    name: 'Bohr Energy Level Transition Diagram',
    category: 'Atomic Models',
    description: "Bohr model showing electron energy level transitions and photon emission/absorption",
    type: 'bohr_energy_level_transition',
    defaultOptions: {
        title: 'Bohr Model: Energy Level Transitions',
        showEnergyLevels: true,
        showTransitionArrows: true,
        showPhotonEmission: true,
        width: 950,
        height: 800,
        backgroundColor: '#ffffff'
    }
},

'sommerfeldEllipticalOrbitSubshellDiagram': {
    name: 'Sommerfeld Elliptical Orbit & Subshell Diagram',
    category: 'Atomic Models',
    description: "Sommerfeld's extension of Bohr model with elliptical orbits and subshell introduction",
    type: 'sommerfeld_elliptical_orbit_subshell',
    defaultOptions: {
        title: "Sommerfeld's Elliptical Orbits & Subshells",
        showEllipticalOrbits: true,
        showSubshellLabels: true,
        showQuantumNumberLink: true,
        width: 950,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'electronProbabilityCloudOrbitalShapesDiagram': {
    name: 'Electron Probability Cloud & Orbital Shapes',
    category: 'Atomic Models',
    description: 'Quantum mechanical electron probability cloud and s, p, d orbital shapes',
    type: 'electron_probability_cloud_orbital_shapes',
    defaultOptions: {
        title: 'Electron Probability Cloud & Orbital Shapes',
        showSOrbitals: true,
        showPOrbitals: true,
        showDOrbitals: true,
        width: 1100,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'atomicModelEvolutionTimelineDiagram': {
    name: 'Atomic Model Evolution Timeline',
    category: 'Atomic Models',
    description: 'Timeline diagram of atomic model evolution from Dalton through quantum mechanical model',
    type: 'atomic_model_evolution_timeline',
    defaultOptions: {
        title: 'Atomic Model Evolution Timeline',
        showAllModels: true,
        showDates: true,
        showKeyFeatures: true,
        width: 1400,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'milliканOilDropExperimentSetupDiagram': {
    name: "Millikan Oil Drop Experiment Setup",
    category: 'Atomic Models',
    description: "Millikan's oil drop experiment apparatus and electron charge determination method",
    type: 'millikan_oil_drop_experiment_setup',
    defaultOptions: {
        title: "Millikan's Oil Drop Experiment",
        showApparatusSetup: true,
        showForceBalance: true,
        showChargeCalculation: true,
        width: 1000,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'orbitVsOrbitalConceptualDifferenceDiagram': {
    name: 'Orbit vs Orbital Conceptual Difference',
    category: 'Atomic Models',
    description: 'Diagram clarifying the conceptual difference between Bohr orbit and quantum mechanical orbital',
    type: 'orbit_vs_orbital_conceptual_difference',
    defaultOptions: {
        title: 'Orbit vs Orbital: Conceptual Difference',
        showOrbitDiagram: true,
        showOrbitalDiagram: true,
        showConceptualDistinction: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

// ===== ELECTRON CONFIGURATION =====

'subshellEnergyOrderingDiagonalRuleDiagram': {
    name: 'Subshell Energy Ordering Diagonal Rule',
    category: 'Electron Configuration',
    description: 'Diagonal rule (Madelung rule) for subshell filling order by energy',
    type: 'subshell_energy_ordering_diagonal_rule',
    defaultOptions: {
        title: 'Subshell Energy Ordering: Diagonal Rule',
        showDiagonalArrows: true,
        showSubshellLabels: true,
        showFillingOrder: true,
        width: 950,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'aufbauPauliHundRuleOrbitalBoxDiagram': {
    name: 'Aufbau, Pauli & Hund\'s Rule Orbital Box Diagram',
    category: 'Electron Configuration',
    description: "Orbital box diagram illustrating Aufbau principle, Pauli exclusion principle, and Hund's rule",
    type: 'aufbau_pauli_hund_rule_orbital_box',
    defaultOptions: {
        title: "Aufbau, Pauli & Hund's Rule Orbital Boxes",
        showAufbauPrinciple: true,
        showPauliExclusion: true,
        showHundsRule: true,
        width: 1050,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

'spdfNotationNobleGasShorthandComparisonDiagram': {
    name: 'spdf Notation & Noble Gas Shorthand Comparison',
    category: 'Electron Configuration',
    description: 'Comparison of full spdf electron configuration notation and noble gas shorthand notation',
    type: 'spdf_notation_noble_gas_shorthand_comparison',
    defaultOptions: {
        title: 'spdf vs Noble Gas Shorthand Notation',
        showFullNotation: true,
        showNobleGasShorthand: true,
        showComparisonExamples: true,
        width: 1050,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'cationAnionElectronRemovalAdditionConfigDiagram': {
    name: 'Cation & Anion Electron Removal/Addition Configuration',
    category: 'Electron Configuration',
    description: 'Electron configuration changes when forming cations (electron removal) and anions (electron addition)',
    type: 'cation_anion_electron_removal_addition_config',
    defaultOptions: {
        title: 'Ion Formation: Electron Config Changes',
        showCationRemoval: true,
        showAnionAddition: true,
        showConfigurationChanges: true,
        width: 1050,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'chromiumCopperAnomalousConfigurationStabilityDiagram': {
    name: 'Chromium & Copper Anomalous Configuration Stability',
    category: 'Electron Configuration',
    description: 'Explanation of anomalous electron configurations of Cr and Cu via half-filled and fully-filled d-orbital stability',
    type: 'chromium_copper_anomalous_configuration_stability',
    defaultOptions: {
        title: 'Cr & Cu Anomalous Configurations',
        showExpectedConfig: true,
        showActualConfig: true,
        showStabilityExplanation: true,
        width: 1050,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'periodicTableSPDFBlockAnnotatedDiagram': {
    name: 'Periodic Table spdf Block Annotated Diagram',
    category: 'Electron Configuration',
    description: 'Periodic table annotated with s, p, d, and f block regions and corresponding electron subshells',
    type: 'periodic_table_spdf_block_annotated',
    defaultOptions: {
        title: 'Periodic Table: s, p, d, f Block Annotations',
        showSBlock: true,
        showPBlock: true,
        showDBlock: true,
        showFBlock: true,
        width: 1300,
        height: 800,
        backgroundColor: '#ffffff'
    }
},




// ===== 2. ORGANIC CHEMISTRY =====
'organicStructuralFormula': {
    name: 'Organic Structural Formula',
    category: 'Organic Chemistry',
    description: 'Full structural formula showing all bonds and atoms',
    type: 'organic_structural_formula',
    molecule: 'Ethanol',
    defaultOptions: {
        title: 'Structural Formula - Ethanol',
        showAllBonds: true,
        showHydrogens: true,
        showLabels: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'skeletalFormula': {
    name: 'Skeletal Formula',
    category: 'Organic Chemistry',
    description: 'Line-angle skeletal structure of organic molecules',
    type: 'skeletal_formula',
    molecule: 'Hexane',
    defaultOptions: {
        title: 'Skeletal Formula - Hexane',
        showCarbonLabels: false,
        showHeteroatoms: true,
        showLabels: true,
        width: 800,
        height: 500,
        backgroundColor: '#ffffff'
    }
},

'balancingEquations': {
    name: 'Balancing Chemical Equations',
    category: 'Organic Chemistry',
    description: 'Balanced chemical equation with coefficients',
    type: 'balancing_equations',
    reaction: 'combustion',
    defaultOptions: {
        title: 'Balancing Chemical Equations - Combustion',
        showCoefficients: true,
        showAtomCount: true,
        showArrow: true,
        showLabels: true,
        width: 1000,
        height: 500,
        backgroundColor: '#ffffff'
    }
},

'isomers': {
    name: 'Structural Isomers',
    category: 'Organic Chemistry',
    description: 'Same molecular formula, different structures',
    type: 'isomers',
    formula: 'C4H10',
    isomerTypes: ['n-butane', 'isobutane'],
    defaultOptions: {
        title: 'Structural Isomers - C₄H₁₀',
        showFormulas: true,
        showNames: true,
        showComparison: true,
        showLabels: true,
        width: 1000,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'reactionMechanism': {
    name: 'Reaction Mechanism Diagram',
    category: 'Organic Chemistry',
    description: 'Step-by-step arrow-pushing mechanism',
    type: 'reaction_mechanism',
    reactionType: 'SN2',
    defaultOptions: {
        title: 'SN2 Reaction Mechanism',
        showCurvedArrows: true,
        showIntermediates: true,
        showCharges: true,
        showLabels: true,
        width: 1000,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'polymerization': {
    name: 'Polymerization Diagram',
    category: 'Organic Chemistry',
    description: 'Monomer to polymer chain formation',
    type: 'polymerization',
    monomer: 'Ethylene',
    polymerType: 'addition',
    defaultOptions: {
        title: 'Addition Polymerization - Polyethylene',
        showMonomer: true,
        showChain: true,
        showRepeatingUnit: true,
        showLabels: true,
        width: 1000,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'sigmaPiBonds': {
    name: 'Sigma and Pi Bonds',
    category: 'Organic Chemistry',
    description: 'Orbital overlap forming sigma and pi bonds',
    type: 'sigma_pi_bonds',
    defaultOptions: {
        title: 'Sigma and Pi Bond Orbitals',
        showSigma: true,
        showPi: true,
        showOrbitalOverlap: true,
        showLabels: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'aromaticRing': {
    name: 'Aromatic Ring (Benzene)',
    category: 'Organic Chemistry',
    description: 'Benzene ring with delocalized electrons',
    type: 'aromatic_ring',
    molecule: 'Benzene',
    defaultOptions: {
        title: 'Aromatic Ring - Benzene',
        showDelocalizedRing: true,
        showKekuleForms: true,
        showElectronCloud: true,
        showLabels: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'energyProfile': {
    name: 'Reaction Energy Profile',
    category: 'Organic Chemistry',
    description: 'Potential energy diagram for a reaction',
    type: 'energy_profile',
    reactionType: 'exothermic',
    defaultOptions: {
        title: 'Reaction Energy Profile',
        showActivationEnergy: true,
        showDeltaH: true,
        showTransitionState: true,
        showLabels: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'functionalGroups': {
    name: 'Functional Groups Chart',
    category: 'Organic Chemistry',
    description: 'Common organic functional groups with structures',
    type: 'functional_groups',
    groups: ['alcohol', 'aldehyde', 'ketone', 'carboxylic acid', 'amine', 'ester'],
    defaultOptions: {
        title: 'Common Functional Groups',
        showStructures: true,
        showNames: true,
        showExamples: true,
        showLabels: true,
        width: 1100,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'resonanceStructures': {
    name: 'Resonance Structures',
    category: 'Organic Chemistry',
    description: 'Resonance contributors and hybrid structure',
    type: 'resonance_structures',
    molecule: 'Benzene',
    defaultOptions: {
        title: 'Resonance Structures - Benzene',
        showContributors: true,
        showHybrid: true,
        showDoubleHeadedArrow: true,
        showLabels: true,
        width: 1000,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

// ===== 1. ATOMIC STRUCTURE =====
        'atomicStructure': {
            name: 'Atomic Structure Diagram',
            category: 'Atomic Structure',
            description: 'Nucleus with electron shells',
            type: 'atomic_structure',
            protons: 6,
            neutrons: 6,
            electrons: 6,
            element: 'Carbon',
            defaultOptions: {
                title: 'Carbon Atom Structure',
                showNucleus: true,
                showElectronShells: true,
                showLabels: true,
                showCharges: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'electronConfiguration': {
            name: 'Electron Configuration Diagram',
            category: 'Atomic Structure',
            description: 'Orbital filling diagram (spdf)',
            type: 'electron_configuration',
            element: 'Iron',
            atomicNumber: 26,
            defaultOptions: {
                title: 'Electron Configuration - Iron',
                showOrbitals: true,
                showSpinArrows: true,
                showNotation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'orbitalShapes': {
            name: 'Atomic Orbital Shapes',
            category: 'Atomic Structure',
            description: 's, p, d, f orbital geometries',
            type: 'orbital_shapes',
            orbitalsToShow: ['1s', '2p', '3d', '4f'],
            defaultOptions: {
                title: 'Atomic Orbital Shapes',
                show3D: true,
                showNodes: true,
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'isotope': {
            name: 'Isotope Comparison',
            category: 'Atomic Structure',
            description: 'Same element, different neutrons',
            type: 'isotope_comparison',
            element: 'Carbon',
            isotopes: [12, 13, 14],
            defaultOptions: {
                title: 'Carbon Isotopes',
                showNuclei: true,
                showMassNumbers: true,
                showNeutronDifference: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'ionFormation': {
            name: 'Ion Formation Diagram',
            category: 'Atomic Structure',
            description: 'Atom gaining/losing electrons',
            type: 'ion_formation',
            element: 'Sodium',
            ionType: 'cation',
            charge: 1,
            defaultOptions: {
                title: 'Sodium Ion Formation (Na⁺)',
                showBefore: true,
                showAfter: true,
                showElectronTransfer: true,
                showCharges: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'ionizationEnergyGraph': {
            name: 'Ionization Energy Trends',
            category: 'Atomic Structure',
            description: 'Ionization energy vs atomic number',
            type: 'ionization_energy',
            period: 3,
            defaultOptions: {
                title: 'Ionization Energy - Period 3',
                showTrend: true,
                showNobleGases: true,
                showExplanation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'atomicRadiusTrends': {
            name: 'Atomic Radius Trends',
            category: 'Atomic Structure',
            description: 'Size trends across periodic table',
            type: 'atomic_radius',
            defaultOptions: {
                title: 'Atomic Radius Trends',
                showPeriodicTable: true,
                showArrows: true,
                showExplanation: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'bohrModelCarbon': {
            name: 'Bohr Model Diagram',
            category: 'Atomic Structure',
            description: 'Bohr model with quantised electron orbits',
            type: 'bohr_model',
            element: 'Carbon',
            atomicNumber: 6,
            defaultOptions: {
                title: 'Bohr Model - Carbon',
                showOrbitNumbers: true,
                showElectronCount: true,
                showEnergyLevels: true,
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'nuclearStructure': {
            name: 'Nuclear Structure Diagram',
            category: 'Atomic Structure',
            description: 'Protons and neutrons inside the nucleus',
            type: 'nuclear_structure',
            element: 'Carbon',
            protons: 6,
            neutrons: 6,
            defaultOptions: {
                title: 'Nuclear Structure - Carbon-12',
                showProtons: true,
                showNeutrons: true,
                showLabels: true,
                showLegend: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'periodicTrends': {
            name: 'Periodic Trends Diagram',
            category: 'Atomic Structure',
            description: 'Electronegativity, atomic radius, ionization energy trends',
            type: 'periodic_trends',
            trends: ['electronegativity', 'atomicRadius', 'ionizationEnergy', 'electronAffinity'],
            defaultOptions: {
                title: 'Periodic Table Trends',
                showArrows: true,
                showGradient: true,
                showLegend: true,
                highlightGroups: true,
                width: 1100,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 2. MOLES & STOICHIOMETRY =====

        'moleTriangle': {
            name: 'Mole Triangle',
            category: 'Moles & Stoichiometry',
            description: 'Triangle relating moles, mass, and molar mass',
            type: 'mole_triangle',
            defaultOptions: {
                title: 'Mole Triangle',
                showFormulas: true,
                showUnits: true,
                showLabels: true,
                showArrows: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'particleTriangle': {
            name: 'Particle Triangle',
            category: 'Moles & Stoichiometry',
            description: 'Triangle relating moles, particles, and Avogadro\'s number',
            type: 'particle_triangle',
            defaultOptions: {
                title: 'Particle Triangle',
                showAvogadroNumber: true,
                showFormulas: true,
                showUnits: true,
                showArrows: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'unitConversionMap': {
            name: 'Unit Conversion Map',
            category: 'Moles & Stoichiometry',
            description: 'Flowchart of mole unit conversions',
            type: 'unit_conversion_map',
            defaultOptions: {
                title: 'Mole Unit Conversion Map',
                showConversionFactors: true,
                showArrows: true,
                showExamples: true,
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'balancingEquations': {
            name: 'Balancing Equations Diagram',
            category: 'Moles & Stoichiometry',
            description: 'Step-by-step visual balancing of a chemical equation',
            type: 'balancing_equations',
            equation: 'CH4 + O2 -> CO2 + H2O',
            defaultOptions: {
                title: 'Balancing Chemical Equations',
                showAtomCount: true,
                showCoefficients: true,
                showSteps: true,
                showBeforeAfter: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'stoichiometryRoadmap': {
            name: 'Stoichiometry Roadmap',
            category: 'Moles & Stoichiometry',
            description: 'Full flowchart from given quantity to unknown quantity',
            type: 'stoichiometry_roadmap',
            defaultOptions: {
                title: 'Stoichiometry Roadmap',
                showConversionSteps: true,
                showMoleRatio: true,
                showArrows: true,
                showExamples: true,
                width: 1100,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'stoichiometricRatio': {
            name: 'Stoichiometric Ratio Diagram',
            category: 'Moles & Stoichiometry',
            description: 'Mole ratio from balanced equation coefficients',
            type: 'stoichiometric_ratio',
            equation: '2H2 + O2 -> 2H2O',
            defaultOptions: {
                title: 'Stoichiometric Mole Ratios',
                showCoefficients: true,
                showRatioTable: true,
                showArrows: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'molarMass': {
            name: 'Molar Mass Calculation Diagram',
            category: 'Moles & Stoichiometry',
            description: 'Breaking down molar mass from atomic masses',
            type: 'molar_mass',
            compound: 'H2SO4',
            defaultOptions: {
                title: 'Molar Mass of H₂SO₄',
                showAtomicMasses: true,
                showBreakdown: true,
                showTotal: true,
                showUnits: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'limitingReagent': {
            name: 'Limiting Reagent Diagram',
            category: 'Moles & Stoichiometry',
            description: 'Visual comparison of reagents to identify limiting reagent',
            type: 'limiting_reagent',
            defaultOptions: {
                title: 'Limiting Reagent Identification',
                showMoleComparison: true,
                showExcessReagent: true,
                showArrows: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'limitingReagentBar': {
            name: 'Limiting Reagent Bar Chart',
            category: 'Moles & Stoichiometry',
            description: 'Bar chart comparing available vs required moles of reagents',
            type: 'limiting_reagent_bar',
            defaultOptions: {
                title: 'Limiting Reagent Bar Chart',
                showAvailableMoles: true,
                showRequiredMoles: true,
                highlightLimitingReagent: true,
                showLegend: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'yieldDiagram': {
            name: 'Yield Diagram',
            category: 'Moles & Stoichiometry',
            description: 'Theoretical, actual, and percentage yield comparison',
            type: 'yield_diagram',
            defaultOptions: {
                title: 'Theoretical vs Actual Yield',
                showTheoreticalYield: true,
                showActualYield: true,
                showPercentageYield: true,
                showFormula: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'empiricalFormula': {
            name: 'Empirical Formula Diagram',
            category: 'Moles & Stoichiometry',
            description: 'Step-by-step derivation of empirical formula from % composition',
            type: 'empirical_formula',
            compound: 'C6H12O6',
            defaultOptions: {
                title: 'Empirical Formula Derivation',
                showPercentComposition: true,
                showMoleRatios: true,
                showSimplification: true,
                showSteps: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'compositionPieChart': {
            name: 'Composition Pie Chart',
            category: 'Moles & Stoichiometry',
            description: 'Pie chart of elemental percentage composition',
            type: 'composition_pie_chart',
            compound: 'H2O',
            defaultOptions: {
                title: 'Percentage Composition of H₂O',
                showPercentages: true,
                showElementLabels: true,
                showLegend: true,
                showMolarMass: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 3. GASES =====

        'gasTriangle': {
            name: 'Gas Triangle',
            category: 'Gases',
            description: 'Triangle relating moles, volume, and molar volume of a gas',
            type: 'gas_triangle',
            defaultOptions: {
                title: 'Gas Molar Volume Triangle',
                showMolarVolume: true,
                showConditions: true,
                showFormulas: true,
                showArrows: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'gasLawsDiagram': {
            name: 'Gas Laws Diagram',
            category: 'Gases',
            description: 'Boyle\'s, Charles\'s, Gay-Lussac\'s, and combined gas laws',
            type: 'gas_laws',
            laws: ['boyles', 'charles', 'gayLussac', 'combined', 'ideal'],
            defaultOptions: {
                title: 'Gas Laws Summary',
                showGraphs: true,
                showFormulas: true,
                showVariables: true,
                showRelationships: true,
                width: 1100,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'particleStates': {
            name: 'Particle States of Matter',
            category: 'Gases',
            description: 'Particle arrangement in solid, liquid, and gas',
            type: 'particle_states',
            defaultOptions: {
                title: 'States of Matter - Particle Model',
                showSolid: true,
                showLiquid: true,
                showGas: true,
                showLabels: true,
                showProperties: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'diffusion': {
            name: 'Diffusion Diagram',
            category: 'Gases',
            description: 'Particle diffusion across a concentration gradient',
            type: 'diffusion',
            defaultOptions: {
                title: 'Diffusion of Gas Particles',
                showConcentrationGradient: true,
                showParticleMovement: true,
                showTimeSteps: true,
                showArrows: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'brownianMotion': {
            name: 'Brownian Motion Diagram',
            category: 'Gases',
            description: 'Random particle motion in a gas or liquid',
            type: 'brownian_motion',
            defaultOptions: {
                title: 'Brownian Motion',
                showRandomPath: true,
                showCollisions: true,
                showParticles: true,
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'maxwellBoltzmann': {
            name: 'Maxwell-Boltzmann Distribution',
            category: 'Gases',
            description: 'Distribution of molecular speeds at different temperatures',
            type: 'maxwell_boltzmann',
            temperatures: [300, 500, 1000],
            defaultOptions: {
                title: 'Maxwell-Boltzmann Speed Distribution',
                showMultipleTemperatures: true,
                showActivationEnergy: true,
                showMostProbableSpeed: true,
                showLegend: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 4. SOLUTIONS & CONCENTRATION =====

        'molarity': {
            name: 'Molarity Diagram',
            category: 'Solutions & Concentration',
            description: 'Visual representation of molarity formula and calculation',
            type: 'molarity',
            defaultOptions: {
                title: 'Molarity Calculation',
                showFormula: true,
                showUnits: true,
                showExample: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'dilution': {
            name: 'Dilution Diagram',
            category: 'Solutions & Concentration',
            description: 'C1V1 = C2V2 dilution before and after',
            type: 'dilution',
            defaultOptions: {
                title: 'Dilution: C₁V₁ = C₂V₂',
                showBeforeAfter: true,
                showFormula: true,
                showConcentrationChange: true,
                showVolumeChange: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'solubilityCurve': {
            name: 'Solubility Curve',
            category: 'Solutions & Concentration',
            description: 'Solubility vs temperature for common salts',
            type: 'solubility_curve',
            solutes: ['KNO3', 'NaCl', 'KCl', 'NH4Cl'],
            defaultOptions: {
                title: 'Solubility Curves',
                showMultipleSolutes: true,
                showSaturatedRegion: true,
                showUnsaturatedRegion: true,
                showLegend: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'concentrationVsTime': {
            name: 'Concentration vs Time Graph',
            category: 'Solutions & Concentration',
            description: 'Reactant and product concentrations over time',
            type: 'concentration_vs_time',
            defaultOptions: {
                title: 'Concentration vs Time',
                showReactants: true,
                showProducts: true,
                showEquilibriumLine: true,
                showLegend: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 5. ACIDS, BASES & TITRATION =====

        'phScale': {
            name: 'pH Scale Diagram',
            category: 'Acids, Bases & Titration',
            description: 'pH scale from 0–14 with common substances',
            type: 'ph_scale',
            defaultOptions: {
                title: 'The pH Scale',
                showColorGradient: true,
                showCommonSubstances: true,
                showAcidBase: true,
                showNeutral: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'titrationCurve': {
            name: 'Titration Curve',
            category: 'Acids, Bases & Titration',
            description: 'pH vs volume of titrant added',
            type: 'titration_curve',
            titrationTypes: ['strongAcidStrongBase', 'weakAcidStrongBase'],
            defaultOptions: {
                title: 'Titration Curve',
                showEquivalencePoint: true,
                showBufferRegion: true,
                showHalfEquivalencePoint: true,
                showpHRange: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'titrationSetup': {
            name: 'Titration Setup Diagram',
            category: 'Acids, Bases & Titration',
            description: 'Laboratory apparatus for acid-base titration',
            type: 'titration_setup',
            defaultOptions: {
                title: 'Titration Apparatus Setup',
                showBurette: true,
                showConicalFlask: true,
                showIndicator: true,
                showLabels: true,
                width: 700,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'titrationStoichiometry': {
            name: 'Titration Stoichiometry Diagram',
            category: 'Acids, Bases & Titration',
            description: 'Mole relationships in neutralisation titration',
            type: 'titration_stoichiometry',
            defaultOptions: {
                title: 'Titration Stoichiometry',
                showMoleRatio: true,
                showConcentrationCalc: true,
                showNeutralisationEquation: true,
                showSteps: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'indicatorChart': {
            name: 'Indicator Colour Chart',
            category: 'Acids, Bases & Titration',
            description: 'Colour changes of common acid-base indicators',
            type: 'indicator_chart',
            indicators: ['litmus', 'phenolphthalein', 'methylOrange', 'universalIndicator'],
            defaultOptions: {
                title: 'Acid-Base Indicator Colours',
                showColourChange: true,
                showpHRange: true,
                showTransitionRange: true,
                showLegend: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'dissociationDiagram': {
            name: 'Dissociation Diagram',
            category: 'Acids, Bases & Titration',
            description: 'Strong vs weak acid/base dissociation comparison',
            type: 'dissociation_diagram',
            defaultOptions: {
                title: 'Strong vs Weak Acid Dissociation',
                showStrongAcid: true,
                showWeakAcid: true,
                showEquilibrium: true,
                showIonConcentration: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 6. ENERGETICS & THERMOCHEMISTRY =====

        'energyProfile': {
            name: 'Energy Profile Diagram',
            category: 'Energetics & Thermochemistry',
            description: 'Reaction coordinate diagram with activation energy',
            type: 'energy_profile',
            defaultOptions: {
                title: 'Energy Profile Diagram',
                showActivationEnergy: true,
                showEnthalpyChange: true,
                showTransitionState: true,
                showCatalysedRoute: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'enthalpyChange': {
            name: 'Enthalpy Change Diagram',
            category: 'Energetics & Thermochemistry',
            description: 'Exothermic and endothermic enthalpy level diagrams',
            type: 'enthalpy_change',
            defaultOptions: {
                title: 'Enthalpy Change Diagrams',
                showExothermic: true,
                showEndothermic: true,
                showDeltaH: true,
                showEnergyLevels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'hessLawCycle': {
            name: 'Hess\'s Law Cycle',
            category: 'Energetics & Thermochemistry',
            description: 'Enthalpy cycle applying Hess\'s law',
            type: 'hess_law_cycle',
            defaultOptions: {
                title: 'Hess\'s Law Enthalpy Cycle',
                showDirectRoute: true,
                showIndirectRoute: true,
                showDeltaHValues: true,
                showArrows: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'calorimeter': {
            name: 'Calorimeter Diagram',
            category: 'Energetics & Thermochemistry',
            description: 'Calorimetry apparatus and Q = mcΔT',
            type: 'calorimeter',
            defaultOptions: {
                title: 'Calorimetry Setup',
                showApparatus: true,
                showFormula: true,
                showTemperatureChange: true,
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'heatingCurve': {
            name: 'Heating Curve',
            category: 'Energetics & Thermochemistry',
            description: 'Temperature vs heat added showing phase changes',
            type: 'heating_curve',
            defaultOptions: {
                title: 'Heating Curve of Water',
                showPhaseChanges: true,
                showPlateus: true,
                showLatentHeat: true,
                showStateLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'coolingCurve': {
            name: 'Cooling Curve',
            category: 'Energetics & Thermochemistry',
            description: 'Temperature vs time as a substance cools and solidifies',
            type: 'cooling_curve',
            defaultOptions: {
                title: 'Cooling Curve',
                showPhaseChanges: true,
                showPlateus: true,
                showFreezing: true,
                showStateLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'energyBarChart': {
            name: 'Energy Bar Chart',
            category: 'Energetics & Thermochemistry',
            description: 'Bond enthalpy bar chart for reactants and products',
            type: 'energy_bar_chart',
            defaultOptions: {
                title: 'Bond Enthalpy Energy Bar Chart',
                showBondBreaking: true,
                showBondForming: true,
                showNetEnergy: true,
                showLegend: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 7. EQUILIBRIUM =====

        'iceTable': {
            name: 'ICE Table',
            category: 'Equilibrium',
            description: 'Initial, Change, Equilibrium table for equilibrium calculations',
            type: 'ice_table',
            defaultOptions: {
                title: 'ICE Table',
                showInitial: true,
                showChange: true,
                showEquilibrium: true,
                showKcExpression: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'equilibriumGraph': {
            name: 'Equilibrium Graph',
            category: 'Equilibrium',
            description: 'Concentration vs time reaching dynamic equilibrium',
            type: 'equilibrium_graph',
            defaultOptions: {
                title: 'Dynamic Equilibrium Graph',
                showForwardRate: true,
                showReverseRate: true,
                showEquilibriumPoint: true,
                showLegend: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'leChatelierShift': {
            name: 'Le Chatelier\'s Principle Shift Diagram',
            category: 'Equilibrium',
            description: 'Equilibrium position shift in response to changes',
            type: 'le_chatelier_shift',
            stresses: ['concentration', 'temperature', 'pressure'],
            defaultOptions: {
                title: 'Le Chatelier\'s Principle',
                showStressTypes: true,
                showShiftDirection: true,
                showArrows: true,
                showExamples: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 8. BONDING & MOLECULAR STRUCTURE =====

        'lewisStructureWater': {
            name: 'Lewis Structure Diagram',
            category: 'Bonding & Molecular Structure',
            description: 'Electron dot (Lewis) structure of a molecule',
            type: 'lewis_structure',
            molecule: 'H2O',
            defaultOptions: {
                title: 'Lewis Structure of Water (H₂O)',
                showLonePairs: true,
                showBondingPairs: true,
                showFormalCharges: true,
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'polarBonds': {
            name: 'Polar Bonds Diagram',
            category: 'Bonding & Molecular Structure',
            description: 'Bond polarity, dipole arrows, and partial charges',
            type: 'polar_bonds',
            molecule: 'HCl',
            defaultOptions: {
                title: 'Polar Covalent Bonds',
                showDipoleArrows: true,
                showPartialCharges: true,
                showElectronegativityDiff: true,
                showBondType: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'resonanceStructures': {
            name: 'Resonance Structures Diagram',
            category: 'Bonding & Molecular Structure',
            description: 'Resonance forms and delocalization of a molecule',
            type: 'resonance_structures',
            molecule: 'O3',
            defaultOptions: {
                title: 'Resonance Structures of Ozone (O₃)',
                showAllForms: true,
                showDoubleHeadedArrow: true,
                showResonanceHybrid: true,
                showDelocalisation: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'vsepGeometry': {
            name: 'VSEPR Geometry Diagram',
            category: 'Bonding & Molecular Structure',
            description: 'Molecular shapes based on VSEPR theory',
            type: 'vsepr_geometry',
            shapes: ['linear', 'bentTriagonal', 'trigonalPlanar', 'tetrahedral', 'trigonalBipyramidal', 'octahedral'],
            defaultOptions: {
                title: 'VSEPR Molecular Geometries',
                show3D: true,
                showBondAngles: true,
                showLonePairs: true,
                showExamples: true,
                width: 1100,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'hybridization': {
            name: 'Hybridization Diagram',
            category: 'Bonding & Molecular Structure',
            description: 'sp, sp2, sp3 orbital hybridization schemes',
            type: 'hybridization',
            types: ['sp', 'sp2', 'sp3'],
            defaultOptions: {
                title: 'Orbital Hybridization',
                showOrbitalMixing: true,
                showGeometry: true,
                showExamples: true,
                showBondAngles: true,
                width: 1100,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'intermolecularForces': {
            name: 'Intermolecular Forces Diagram',
            category: 'Bonding & Molecular Structure',
            description: 'London dispersion, dipole-dipole, and hydrogen bonding',
            type: 'intermolecular_forces',
            forces: ['londonDispersion', 'dipoleDipole', 'hydrogenBonding'],
            defaultOptions: {
                title: 'Intermolecular Forces',
                showForceTypes: true,
                showStrengthComparison: true,
                showExamples: true,
                showLegend: true,
                width: 1100,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 9. ELECTROCHEMISTRY =====

        'galvanicCell': {
            name: 'Galvanic Cell Diagram',
            category: 'Electrochemistry',
            description: 'Electrochemical cell with anode, cathode, and salt bridge',
            type: 'galvanic_cell',
            defaultOptions: {
                title: 'Galvanic Cell',
                showAnode: true,
                showCathode: true,
                showSaltBridge: true,
                showElectronFlow: true,
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'electrodeProcesses': {
            name: 'Electrode Processes Diagram',
            category: 'Electrochemistry',
            description: 'Oxidation at anode and reduction at cathode',
            type: 'electrode_processes',
            defaultOptions: {
                title: 'Electrode Processes (OIL RIG)',
                showOxidation: true,
                showReduction: true,
                showHalfEquations: true,
                showElectronTransfer: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'electrochemicalSeries': {
            name: 'Electrochemical Series',
            category: 'Electrochemistry',
            description: 'Standard electrode potentials ranked by reduction potential',
            type: 'electrochemical_series',
            defaultOptions: {
                title: 'Electrochemical Series',
                showStandardPotentials: true,
                showOxidizingStrength: true,
                showReducingStrength: true,
                showLegend: true,
                width: 900,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'concentrationCellDiagram': {
            name: 'Concentration Cell Diagram',
            category: 'Electrochemistry',
            description: 'Electrochemical cell driven by concentration difference',
            type: 'concentration_cell',
            defaultOptions: {
                title: 'Concentration Cell',
                showConcentrationDifference: true,
                showElectronFlow: true,
                showIonMovement: true,
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'electrolysisSetup': {
            name: 'Electrolysis Setup Diagram',
            category: 'Electrochemistry',
            description: 'Electrolytic cell with external power supply',
            type: 'electrolysis_setup',
            defaultOptions: {
                title: 'Electrolysis Setup',
                showPowerSupply: true,
                showElectrodes: true,
                showIonMovement: true,
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'moltenElectrolysis': {
            name: 'Molten Electrolysis Diagram',
            category: 'Electrochemistry',
            description: 'Electrolysis of a molten ionic compound',
            type: 'molten_electrolysis',
            compound: 'NaCl',
            defaultOptions: {
                title: 'Electrolysis of Molten NaCl',
                showMoltenCompound: true,
                showIonDischarge: true,
                showHalfEquations: true,
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 10. KINETICS =====

        'concentrationVsRate': {
            name: 'Concentration vs Rate Graph',
            category: 'Kinetics',
            description: 'Graph of reaction rate against reactant concentration',
            type: 'concentration_vs_rate',
            defaultOptions: {
                title: 'Concentration vs Rate of Reaction',
                showZeroOrder: true,
                showFirstOrder: true,
                showSecondOrder: true,
                showLegend: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'surfaceAreaEffect': {
            name: 'Surface Area Effect Diagram',
            category: 'Kinetics',
            description: 'Effect of surface area on reaction rate with particle diagrams',
            type: 'surface_area_effect',
            defaultOptions: {
                title: 'Surface Area and Reaction Rate',
                showLargePiece: true,
                showSmallPieces: true,
                showSurfaceAreaComparison: true,
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'collisionTheory': {
            name: 'Collision Theory Diagram',
            category: 'Kinetics',
            description: 'Effective vs ineffective collisions and activation energy',
            type: 'collision_theory',
            defaultOptions: {
                title: 'Collision Theory',
                showEffectiveCollision: true,
                showIneffectiveCollision: true,
                showActivationEnergy: true,
                showOrientationEffect: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'temperatureVsRate': {
            name: 'Temperature vs Rate Graph',
            category: 'Kinetics',
            description: 'Effect of temperature on reaction rate',
            type: 'temperature_vs_rate',
            defaultOptions: {
                title: 'Temperature vs Rate of Reaction',
                showExponentialCurve: true,
                showDoubleRuleAnnotation: true,
                showAxisLabels: true,
                showLegend: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 11. LABORATORY & SAFETY =====

        'hazardSymbols': {
            name: 'Hazard Symbols Diagram',
            category: 'Laboratory & Safety',
            description: 'GHS/COSHH hazard warning symbols and meanings',
            type: 'hazard_symbols',
            symbols: ['flammable', 'corrosive', 'toxic', 'oxidising', 'irritant', 'environmentalHazard', 'explosive', 'healthHazard'],
            defaultOptions: {
                title: 'Chemical Hazard Symbols',
                showSymbols: true,
                showNames: true,
                showDescriptions: true,
                showExamples: true,
                width: 1100,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'safetyEquipment': {
            name: 'Safety Equipment Diagram',
            category: 'Laboratory & Safety',
            description: 'PPE and laboratory safety equipment',
            type: 'safety_equipment',
            equipment: ['goggles', 'labCoat', 'gloves', 'faceShield', 'fumeHood'],
            defaultOptions: {
                title: 'Laboratory Safety Equipment',
                showEquipmentLabels: true,
                showUsageNotes: true,
                showWhenToUse: true,
                showIllustrations: true,
                width: 1100,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'laboratoryGlassware': {
            name: 'Laboratory Glassware Diagram',
            category: 'Laboratory & Safety',
            description: 'Common glassware with names and uses',
            type: 'laboratory_glassware',
            glassware: ['beaker', 'conicalFlask', 'roundBottomFlask', 'burette', 'pipette', 'measuringCylinder', 'volumetricFlask', 'testTube'],
            defaultOptions: {
                title: 'Laboratory Glassware',
                showNames: true,
                showUses: true,
                showCapacities: true,
                showIllustrations: true,
                width: 1100,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'distillationApparatus': {
            name: 'Distillation Apparatus Diagram',
            category: 'Laboratory & Safety',
            description: 'Simple and fractional distillation setup',
            type: 'distillation_apparatus',
            defaultOptions: {
                title: 'Distillation Apparatus',
                showSimpleDistillation: true,
                showFractionalDistillation: true,
                showLabels: true,
                showHeatSource: true,
                width: 1100,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'filtrationSetup': {
            name: 'Filtration Setup Diagram',
            category: 'Laboratory & Safety',
            description: 'Gravity and vacuum filtration apparatus',
            type: 'filtration_setup',
            defaultOptions: {
                title: 'Filtration Setup',
                showGravityFiltration: true,
                showVacuumFiltration: true,
                showLabels: true,
                showFilterPaper: true,
                width: 1000,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'gasCollection': {
            name: 'Gas Collection Diagram',
            category: 'Laboratory & Safety',
            description: 'Upward/downward displacement and water displacement gas collection',
            type: 'gas_collection',
            methods: ['waterDisplacement', 'upwardDisplacement', 'downwardDisplacement'],
            defaultOptions: {
                title: 'Methods of Gas Collection',
                showAllMethods: true,
                showLabels: true,
                showGasDensityNotes: true,
                showExamples: true,
                width: 1100,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },




        // ===== 1. ATOMIC STRUCTURE =====
        'atomicStructureDiagram': {
            name: 'Atomic Structure Diagram',
            category: 'Atomic Structure',
            description: 'Nucleus with electron shells',
            type: 'atomic_structure',
            protons: 6,
            neutrons: 6,
            electrons: 6,
            element: 'Carbon',
            defaultOptions: {
                title: 'Carbon Atom Structure',
                showNucleus: true,
                showElectronShells: true,
                showLabels: true,
                showCharges: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'electronConfigurationDiagram': {
            name: 'Electron Configuration Diagram',
            category: 'Atomic Structure',
            description: 'Orbital filling diagram (spdf)',
            type: 'electron_configuration',
            element: 'Iron',
            atomicNumber: 26,
            defaultOptions: {
                title: 'Electron Configuration - Iron',
                showOrbitals: true,
                showSpinArrows: true,
                showNotation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'orbitalShapesDiagram': {
            name: 'Atomic Orbital Shapes',
            category: 'Atomic Structure',
            description: 's, p, d, f orbital geometries',
            type: 'orbital_shapes',
            orbitalsToShow: ['1s', '2p', '3d', '4f'],
            defaultOptions: {
                title: 'Atomic Orbital Shapes',
                show3D: true,
                showNodes: true,
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'isotopeDiagram': {
            name: 'Isotope Comparison',
            category: 'Atomic Structure',
            description: 'Same element, different neutrons',
            type: 'isotope_comparison',
            element: 'Carbon',
            isotopes: [12, 13, 14],
            defaultOptions: {
                title: 'Carbon Isotopes',
                showNuclei: true,
                showMassNumbers: true,
                showNeutronDifference: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'ionFormationDiagram': {
            name: 'Ion Formation Diagram',
            category: 'Atomic Structure',
            description: 'Atom gaining/losing electrons',
            type: 'ion_formation',
            element: 'Sodium',
            ionType: 'cation',
            charge: 1,
            defaultOptions: {
                title: 'Sodium Ion Formation (Na⁺)',
                showBefore: true,
                showAfter: true,
                showElectronTransfer: true,
                showCharges: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'ionizationEnergyGraph': {
            name: 'Ionization Energy Trends',
            category: 'Atomic Structure',
            description: 'Ionization energy vs atomic number',
            type: 'ionization_energy',
            period: 3,
            defaultOptions: {
                title: 'Ionization Energy - Period 3',
                showTrend: true,
                showNobleGases: true,
                showExplanation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'atomicRadiusTrends': {
            name: 'Atomic Radius Trends',
            category: 'Atomic Structure',
            description: 'Size trends across periodic table',
            type: 'atomic_radius',
            defaultOptions: {
                title: 'Atomic Radius Trends',
                showPeriodicTable: true,
                showArrows: true,
                showExplanation: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'electronAffinityDiagram': {
            name: 'Electron Affinity Diagram',
            category: 'Atomic Structure',
            description: 'Energy change when gaining electron',
            type: 'electron_affinity',
            element: 'Chlorine',
            defaultOptions: {
                title: 'Electron Affinity - Chlorine',
                showEnergyLevel: true,
                showElectronAddition: true,
                showEnergyChange: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== ATOMIC STRUCTURE APPARATUS DIAGRAMS =====
        'massSpectrometerChemistry': {
            name: 'Mass Spectrometer (Chemistry)',
            category: 'Atomic Structure',
            description: 'Determining relative atomic mass and isotope abundance',
            type: 'apparatus_diagram',
            apparatusType: 'mass_spectrometer_chem',
            sample: 'Chlorine',
            isotopes: [35, 37],
            defaultOptions: {
                title: 'Mass Spectrometer - Isotope Analysis',
                showRealObject: true,
                showIonization: true,
                showAcceleration: true,
                showDeflection: true,
                showDetector: true,
                showMassSpectrum: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Deflection path (with mass/charge ratio)',
                    constant: 'Magnetic field strength, accelerating voltage',
                    law: 'r = mv/qB, heavier isotopes deflect less'
                },
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'flameTestApparatus': {
            name: 'Flame Test Apparatus',
            category: 'Atomic Structure',
            description: 'Identifying elements by characteristic flame colors',
            type: 'apparatus_diagram',
            apparatusType: 'flame_test',
            element: 'Sodium',
            flameColor: 'yellow',
            defaultOptions: {
                title: 'Flame Test',
                showRealObject: true,
                showBunsenBurner: true,
                showWire: true,
                showFlameColor: true,
                showEnergyTransitions: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Electron energy levels (excitation then emission)',
                    constant: 'Energy level differences (unique to each element)',
                    law: 'E = hf, ΔE = hc/λ (specific wavelengths → specific colors)'
                },
                width: 700,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'emissionSpectroscopyApparatus': {
            name: 'Emission Spectroscopy Setup',
            category: 'Atomic Structure',
            description: 'Analyzing emission spectra through diffraction grating',
            type: 'apparatus_diagram',
            apparatusType: 'emission_spectroscopy',
            element: 'Hydrogen',
            visibleLines: [656, 486, 434, 410],
            defaultOptions: {
                title: 'Emission Spectroscopy',
                showRealObject: true,
                showDischargetube: true,
                showDiffractionGrating: true,
                showSpectrum: true,
                showWavelengths: true,
                showEnergyLevels: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Wavelengths emitted (electron transitions)',
                    constant: 'Energy levels (quantized)',
                    law: '1/λ = R(1/n₁² - 1/n₂²) (Rydberg equation)'
                },
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 2. CHEMICAL BONDING =====
        'ionicBondingDiagram': {
            name: 'Ionic Bonding Diagram',
            category: 'Chemical Bonding',
            description: 'Electron transfer forming ions',
            type: 'ionic_bonding',
            compound: 'NaCl',
            cation: 'Na+',
            anion: 'Cl-',
            defaultOptions: {
                title: 'Ionic Bonding - NaCl',
                showElectronTransfer: true,
                showIons: true,
                showElectrostaticAttraction: true,
                showLattice: false,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'covalentBondingDiagram': {
            name: 'Covalent Bonding Diagram',
            category: 'Chemical Bonding',
            description: 'Electron sharing between atoms',
            type: 'covalent_bonding',
            molecule: 'H2O',
            bondType: 'single',
            defaultOptions: {
                title: 'Covalent Bonding - Water',
                showElectronSharing: true,
                showLonePairs: true,
                showBondingPairs: true,
                showDotCross: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'lewisStructureDiagram': {
            name: 'Lewis Structure Diagram',
            category: 'Chemical Bonding',
            description: 'Dot-cross diagram showing valence electrons',
            type: 'lewis_structure',
            molecule: 'CO2',
            defaultOptions: {
                title: 'Lewis Structure - CO₂',
                showValenceElectrons: true,
                showBonds: true,
                showLonePairs: true,
                showFormalCharges: false,
                width: 700,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'vsepirTheoryDiagram': {
            name: 'VSEPR Theory Molecular Shapes',
            category: 'Chemical Bonding',
            description: 'Molecular geometry from electron pair repulsion',
            type: 'vsepr_theory',
            molecule: 'CH4',
            geometry: 'tetrahedral',
            defaultOptions: {
                title: 'VSEPR - Methane (Tetrahedral)',
                show3DShape: true,
                showBondAngles: true,
                showLonePairs: true,
                showElectronPairs: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'polarityDiagram': {
            name: 'Molecular Polarity Diagram',
            category: 'Chemical Bonding',
            description: 'Dipole moments and polar vs nonpolar',
            type: 'polarity',
            molecule: 'H2O',
            polar: true,
            defaultOptions: {
                title: 'Molecular Polarity - Water',
                showDipoles: true,
                showPartialCharges: true,
                showNetDipole: true,
                showElectronegativity: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'hybridizationDiagram': {
            name: 'Orbital Hybridization Diagram',
            category: 'Chemical Bonding',
            description: 'sp, sp2, sp3 hybrid orbital formation',
            type: 'hybridization',
            centralAtom: 'Carbon',
            hybridization: 'sp3',
            defaultOptions: {
                title: 'sp³ Hybridization - Carbon',
                showAtomicOrbitals: true,
                showHybridOrbitals: true,
                showEnergyLevels: true,
                show3DShape: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'molecularOrbitalDiagram': {
            name: 'Molecular Orbital Diagram',
            category: 'Chemical Bonding',
            description: 'MO theory bonding and antibonding orbitals',
            type: 'molecular_orbital',
            molecule: 'O2',
            defaultOptions: {
                title: 'Molecular Orbital Diagram - O₂',
                showAtomicOrbitals: true,
                showMolecularOrbitals: true,
                showElectronFilling: true,
                showBondOrder: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'hydrogenBondingDiagram': {
            name: 'Hydrogen Bonding Diagram',
            category: 'Chemical Bonding',
            description: 'Intermolecular hydrogen bonds',
            type: 'hydrogen_bonding',
            molecules: 'water',
            defaultOptions: {
                title: 'Hydrogen Bonding - Water',
                showMolecules: true,
                showHydrogenBonds: true,
                showDipoles: true,
                showPartialCharges: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'intermolecularForcesDiagram': {
            name: 'Intermolecular Forces Comparison',
            category: 'Chemical Bonding',
            description: 'London, dipole-dipole, hydrogen bonding',
            type: 'intermolecular_forces',
            defaultOptions: {
                title: 'Types of Intermolecular Forces',
                showLondonForces: true,
                showDipoleDipole: true,
                showHydrogenBonding: true,
                showStrengthComparison: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'crystalLatticeDiagram': {
            name: 'Crystal Lattice Structure',
            category: 'Chemical Bonding',
            description: 'Ionic crystal lattice structure',
            type: 'crystal_lattice',
            compound: 'NaCl',
            latticeType: 'face-centered cubic',
            defaultOptions: {
                title: 'NaCl Crystal Lattice',
                show3DStructure: true,
                showUnitCell: true,
                showIons: true,
                showCoordinationNumber: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'metallicBondingDiagram': {
            name: 'Metallic Bonding Diagram',
            category: 'Chemical Bonding',
            description: 'Electron sea model',
            type: 'metallic_bonding',
            metal: 'Sodium',
            defaultOptions: {
                title: 'Metallic Bonding - Electron Sea',
                showCations: true,
                showElectronSea: true,
                showDelocalization: true,
                showProperties: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== BONDING APPARATUS DIAGRAMS =====
        'electrolysisCellApparatus': {
            name: 'Electrolysis Cell',
            category: 'Chemical Bonding',
            description: 'Using electricity to break ionic compounds',
            type: 'apparatus_diagram',
            apparatusType: 'electrolysis_cell',
            electrolyte: 'CuCl2',
            defaultOptions: {
                title: 'Electrolysis of Copper Chloride',
                showRealObject: true,
                showElectrodes: true,
                showElectrolyte: true,
                showBattery: true,
                showIonMovement: true,
                showReactions: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Ion movement, electrode products',
                    constant: 'Voltage, ion charges',
                    law: 'Cations → cathode (reduction), Anions → anode (oxidation)'
                },
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'conductivityTesterApparatus': {
            name: 'Electrical Conductivity Tester',
            category: 'Chemical Bonding',
            description: 'Testing ionic vs covalent compounds',
            type: 'apparatus_diagram',
            apparatusType: 'conductivity_tester',
            substance: 'NaCl solution',
            defaultOptions: {
                title: 'Conductivity Tester',
                showRealObject: true,
                showElectrodes: true,
                showBulb: true,
                showSolution: true,
                showIons: true,
                showCurrentFlow: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Conductivity (with mobile ions)',
                    constant: 'Voltage applied',
                    law: 'Mobile ions conduct electricity, covalent molecules don\'t'
                },
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 3. CHEMICAL REACTIONS =====
        'balancedEquationDiagram': {
            name: 'Balanced Chemical Equation',
            category: 'Chemical Reactions',
            description: 'Visual representation of balanced equation',
            type: 'balanced_equation',
            reaction: '2H2 + O2 → 2H2O',
            defaultOptions: {
                title: 'Balanced Equation - Water Formation',
                showReactants: true,
                showProducts: true,
                showMolecules: true,
                showCoefficients: true,
                showArrow: true,
                width: 1000,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'reactionTypesDiagram': {
            name: 'Types of Chemical Reactions',
            category: 'Chemical Reactions',
            description: 'Synthesis, decomposition, single/double displacement',
            type: 'reaction_types',
            reactionType: 'synthesis',
            defaultOptions: {
                title: 'Reaction Types',
                showAllTypes: true,
                showExamples: true,
                showPatterns: true,
                width: 1000,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'oxidationNumbersDiagram': {
            name: 'Oxidation Numbers Diagram',
            category: 'Chemical Reactions',
            description: 'Assigning oxidation states',
            type: 'oxidation_numbers',
            compound: 'H2SO4',
            defaultOptions: {
                title: 'Oxidation Numbers - Sulfuric Acid',
                showCompound: true,
                showNumbers: true,
                showRules: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'redoxReactionDiagram': {
            name: 'Redox Reaction Diagram',
            category: 'Chemical Reactions',
            description: 'Electron transfer in redox reactions',
            type: 'redox_reaction',
            reaction: 'Zn + Cu²⁺ → Zn²⁺ + Cu',
            defaultOptions: {
                title: 'Redox Reaction',
                showElectronTransfer: true,
                showOxidationStates: true,
                showHalfReactions: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },
        'combustionReactionDiagram': {
            name: 'Combustion Reaction Diagram',
            category: 'Chemical Reactions',
            description: 'Complete and incomplete combustion',
            type: 'combustion',
            fuel: 'CH4',
            combustionType: 'complete',
            defaultOptions: {
                title: 'Complete Combustion of Methane',
                showReactants: true,
                showProducts: true,
                showFlame: true,
                showEnergy: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'precipitationReactionDiagram': {
            name: 'Precipitation Reaction',
            category: 'Chemical Reactions',
            description: 'Forming insoluble product',
            type: 'precipitation',
            reaction: 'AgNO3 + NaCl → AgCl + NaNO3',
            defaultOptions: {
                title: 'Precipitation - Silver Chloride',
                showSolutions: true,
                showPrecipitate: true,
                showIons: true,
                showMixing: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'acidBaseNeutralizationDiagram': {
            name: 'Acid-Base Neutralization',
            category: 'Chemical Reactions',
            description: 'Acid + base → salt + water',
            type: 'neutralization',
            acid: 'HCl',
            base: 'NaOH',
            defaultOptions: {
                title: 'Neutralization Reaction',
                showReactants: true,
                showProducts: true,
                showIons: true,
                showWaterFormation: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'collisionTheoryDiagram': {
            name: 'Collision Theory Diagram',
            category: 'Chemical Reactions',
            description: 'Successful vs unsuccessful collisions',
            type: 'collision_theory',
            defaultOptions: {
                title: 'Collision Theory',
                showParticles: true,
                showCollisions: true,
                showActivationEnergy: true,
                showOrientation: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== REACTION APPARATUS DIAGRAMS =====
        'testTubeReactionApparatus': {
            name: 'Test Tube Reactions',
            category: 'Chemical Reactions',
            description: 'Simple mixing and observation',
            type: 'apparatus_diagram',
            apparatusType: 'test_tube_reaction',
            reaction: 'precipitation',
            defaultOptions: {
                title: 'Test Tube Reaction',
                showRealObject: true,
                showTestTubes: true,
                showReactants: true,
                showProducts: true,
                showObservations: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Color, precipitate formation, temperature',
                    constant: 'Conservation of mass, mole ratios',
                    law: 'Law of conservation of mass, stoichiometry'
                },
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'eudiometerApparatus': {
            name: 'Eudiometer (Gas Collection)',
            category: 'Chemical Reactions',
            description: 'Collecting and measuring gas volume',
            type: 'apparatus_diagram',
            apparatusType: 'eudiometer',
            gasCollected: 'H2',
            defaultOptions: {
                title: 'Eudiometer - Gas Collection',
                showRealObject: true,
                showTube: true,
                showWater: true,
                showGas: true,
                showVolumeMarkings: true,
                showReaction: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Gas volume produced',
                    constant: 'Temperature, pressure (or corrected for)',
                    law: 'PV = nRT, molar volume at STP'
                },
                width: 600,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'gasCollectionApparatus': {
            name: 'Gas Collection Over Water',
            category: 'Chemical Reactions',
            description: 'Collecting gas by water displacement',
            type: 'apparatus_diagram',
            apparatusType: 'gas_collection',
            gas: 'O2',
            defaultOptions: {
                title: 'Gas Collection Over Water',
                showRealObject: true,
                showReactionVessel: true,
                showDeliveryTube: true,
                showCollectionVessel: true,
                showWater: true,
                showGasBubbles: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Volume of gas collected',
                    constant: 'Water vapor pressure, stoichiometry',
                    law: 'P_total = P_gas + P_water, mole ratios'
                },
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 4. STOICHIOMETRY & MOLES =====
        'moleDiagram': {
            name: 'Mole Concept Diagram',
            category: 'Stoichiometry',
            description: 'Avogadro\'s number visualization',
            type: 'mole_concept',
            substance: 'Carbon',
            defaultOptions: {
                title: 'The Mole Concept',
                showParticles: true,
                showAvogadroNumber: true,
                showMolarMass: true,
                showScale: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'stoichiometryMapDiagram': {
            name: 'Stoichiometry Conversion Map',
            category: 'Stoichiometry',
            description: 'Moles, mass, volume, particles interconversion',
            type: 'stoichiometry_map',
            defaultOptions: {
                title: 'Stoichiometry Conversion Pathways',
                showMass: true,
                showMoles: true,
                showVolume: true,
                showParticles: true,
                showConversionFactors: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'limitingReagentDiagram': {
            name: 'Limiting Reagent Diagram',
            category: 'Stoichiometry',
            description: 'Visual showing which reactant limits product',
            type: 'limiting_reagent',
            reaction: '2H2 + O2 → 2H2O',
            H2Amount: 3,
            O2Amount: 1,
            defaultOptions: {
                title: 'Limiting Reagent',
                showReactants: true,
                showProducts: true,
                showExcess: true,
                showLimiting: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'percentYieldDiagram': {
            name: 'Percent Yield Diagram',
            category: 'Stoichiometry',
            description: 'Theoretical vs actual yield',
            type: 'percent_yield',
            theoreticalYield: 10,
            actualYield: 8.5,
            defaultOptions: {
                title: 'Percent Yield',
                showTheoretical: true,
                showActual: true,
                showComparison: true,
                showCalculation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'empiricalFormulaDerivation': {
            name: 'Empirical Formula Derivation',
            category: 'Stoichiometry',
            description: 'From mass composition to simplest formula',
            type: 'empirical_formula',
            compound: 'glucose',
            percentComposition: {C: 40, H: 6.7, O: 53.3},
            defaultOptions: {
                title: 'Empirical Formula Determination',
                showPercentages: true,
                showMoles: true,
                showRatio: true,
                showFormula: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'molecularFormulaVsEmpirical': {
            name: 'Molecular vs Empirical Formula',
            category: 'Stoichiometry',
            description: 'Relationship between formulas',
            type: 'molecular_empirical',
            empiricalFormula: 'CH2O',
            molecularFormula: 'C6H12O6',
            defaultOptions: {
                title: 'Molecular vs Empirical Formula',
                showEmpirical: true,
                showMolecular: true,
                showMultiple: true,
                showMolarMass: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== STOICHIOMETRY APPARATUS DIAGRAMS =====
        'analyticalBalanceApparatus': {
            name: 'Analytical Balance',
            category: 'Stoichiometry',
            description: 'Precise mass measurement for mole calculations',
            type: 'apparatus_diagram',
            apparatusType: 'analytical_balance',
            substance: 'NaCl',
            mass: 5.850,
            defaultOptions: {
                title: 'Analytical Balance',
                showRealObject: true,
                showBalance: true,
                showSample: true,
                showDigitalDisplay: true,
                showWeighingPaper: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Mass measured',
                    constant: 'Molar mass of substance',
                    law: 'n = m/M (moles = mass/molar mass)'
                },
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'volumetricFlaskApparatus': {
            name: 'Volumetric Flask',
            category: 'Stoichiometry',
            description: 'Preparing solutions of precise concentration',
            type: 'apparatus_diagram',
            apparatusType: 'volumetric_flask',
            volume: 250,
            solute: 'NaOH',
            concentration: 0.1,
            defaultOptions: {
                title: 'Volumetric Flask - Solution Preparation',
                showRealObject: true,
                showFlask: true,
                showCalibrationMark: true,
                showSolution: true,
                showSteps: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Volume, concentration',
                    constant: 'Moles of solute',
                    law: 'c = n/V, M₁V₁ = M₂V₂ (dilution)'
                },
                width: 600,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'measuringCylinderApparatus': {
            name: 'Measuring Cylinder',
            category: 'Stoichiometry',
            description: 'Measuring liquid volumes for reactions',
            type: 'apparatus_diagram',
            apparatusType: 'measuring_cylinder',
            volume: 50,
            liquid: 'water',
            defaultOptions: {
                title: 'Measuring Cylinder',
                showRealObject: true,
                showCylinder: true,
                showGraduations: true,
                showMeniscus: true,
                showLiquid: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Volume measured',
                    constant: 'Density (for mass-volume conversions)',
                    law: 'Read at meniscus, V = m/ρ'
                },
                width: 600,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 5. ENERGETICS & THERMOCHEMISTRY =====
        'enthalpyProfileDiagram': {
            name: 'Enthalpy Profile Diagram',
            category: 'Energetics',
            description: 'Energy changes during reaction',
            type: 'enthalpy_profile',
            reactionType: 'exothermic',
            activationEnergy: 80,
            enthalpyChange: -100,
            defaultOptions: {
                title: 'Enthalpy Profile - Exothermic',
                showReactants: true,
                showProducts: true,
                showActivationEnergy: true,
                showEnthalpyChange: true,
                showTransitionState: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'bornHaberCycleDiagram': {
            name: 'Born-Haber Cycle',
            category: 'Energetics',
            description: 'Energy cycle for ionic compound formation',
            type: 'born_haber',
            compound: 'NaCl',
            defaultOptions: {
                title: 'Born-Haber Cycle - NaCl',
                showElements: true,
                showIons: true,
                showCompound: true,
                showEnergySteps: true,
                showLatticeEnergy: true,
                width: 1000,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'hesssLawDiagram': {
            name: "Hess's Law Diagram",
            category: 'Energetics',
            description: 'Alternative pathways with same enthalpy change',
            type: 'hess_law',
            reaction: 'C + O2 → CO2',
            defaultOptions: {
                title: "Hess's Law",
                showDirectRoute: true,
                showIndirectRoute: true,
                showEnergies: true,
                showCalculation: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'bondEnthalpyDiagram': {
            name: 'Bond Enthalpy Diagram',
            category: 'Energetics',
            description: 'Energy to break/form bonds',
            type: 'bond_enthalpy',
            reaction: 'H2 + Cl2 → 2HCl',
            defaultOptions: {
                title: 'Bond Enthalpy',
                showBondBreaking: true,
                showBondForming: true,
                showEnergyValues: true,
                showNetChange: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'latticeEnthalpyDiagram': {
            name: 'Lattice Enthalpy Diagram',
            category: 'Energetics',
            description: 'Energy of ionic lattice formation',
            type: 'lattice_enthalpy',
            compound: 'MgO',
            defaultOptions: {
                title: 'Lattice Enthalpy',
                showGaseousIons: true,
                showSolidLattice: true,
                showEnergyChange: true,
                showFactorsAffecting: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'enthalpyOfSolutionDiagram': {
            name: 'Enthalpy of Solution Diagram',
            category: 'Energetics',
            description: 'Energy changes when dissolving',
            type: 'enthalpy_solution',
            solute: 'NaCl',
            defaultOptions: {
                title: 'Enthalpy of Solution',
                showLatticeBreaking: true,
                showHydration: true,
                showNetChange: true,
                showWaterMolecules: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'entropyDiagram': {
            name: 'Entropy Diagram',
            category: 'Energetics',
            description: 'Disorder and entropy changes',
            type: 'entropy',
            process: 'ice melting',
            defaultOptions: {
                title: 'Entropy Change',
                showBefore: true,
                showAfter: true,
                showDisorder: true,
                showEntropyValue: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'gibbsFreeEnergyDiagram': {
            name: 'Gibbs Free Energy Diagram',
            category: 'Energetics',
            description: 'Spontaneity prediction',
            type: 'gibbs_energy',
            deltaH: -50,
            deltaS: 100,
            temperature: 298,
            defaultOptions: {
                title: 'Gibbs Free Energy',
                showEquation: true,
                showValues: true,
                showSpontaneity: true,
                showTemperatureEffect: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== ENERGETICS APPARATUS DIAGRAMS =====
        'calorimetryApparatus': {
            name: 'Simple Calorimeter',
            category: 'Energetics',
            description: 'Measuring heat of reaction',
            type: 'apparatus_diagram',
            apparatusType: 'simple_calorimeter',
            reaction: 'neutralization',
            defaultOptions: {
                title: 'Simple Calorimeter',
                showRealObject: true,
                showCup: true,
                showThermometer: true,
                showStirrer: true,
                showInsulation: true,
                showSolutions: true,
                showTemperatureChange: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Temperature (increasing or decreasing)',
                    constant: 'Heat capacity of system',
                    law: 'q = mcΔT, heat released/absorbed'
                },
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'bombCalorimeterApparatus': {
            name: 'Bomb Calorimeter',
            category: 'Energetics',
            description: 'Measuring enthalpy of combustion',
            type: 'apparatus_diagram',
            apparatusType: 'bomb_calorimeter',
            sample: 'organic compound',
            defaultOptions: {
                title: 'Bomb Calorimeter',
                showRealObject: true,
                showBomb: true,
                showWaterBath: true,
                showThermometer: true,
                showIgnitionWire: true,
                showStirrer: true,
                showOxygenAtmosphere: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Water temperature (from combustion)',
                    constant: 'Calorimeter heat capacity',
                    law: 'q_combustion = -C_cal × ΔT'
                },
                width: 800,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'heatOfNeutralizationApparatus': {
            name: 'Heat of Neutralization Setup',
            category: 'Energetics',
            description: 'Measuring enthalpy of acid-base reaction',
            type: 'apparatus_diagram',
            apparatusType: 'neutralization_calorimetry',
            acid: 'HCl',
            base: 'NaOH',
            defaultOptions: {
                title: 'Heat of Neutralization',
                showRealObject: true,
                showCalorimeterCup: true,
                showAcid: true,
                showBase: true,
                showThermometer: true,
                showMixing: true,
                showTemperatureRise: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Temperature (rises during neutralization)',
                    constant: 'Enthalpy of H⁺ + OH⁻ → H₂O',
                    law: 'ΔH_neut ≈ -57 kJ/mol for strong acid/base'
                },
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'flameCalorimeterApparatus': {
            name: 'Flame Calorimeter',
            category: 'Energetics',
            description: 'Measuring heat from burning fuels',
            type: 'apparatus_diagram',
            apparatusType: 'flame_calorimeter',
            fuel: 'ethanol',
            defaultOptions: {
                title: 'Flame Calorimeter',
                showRealObject: true,
                showSpiritBurner: true,
                showBeaker: true,
                showWater: true,
                showThermometer: true,
                showFlame: true,
                showDraftShield: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Water temperature, fuel mass',
                    constant: 'Specific heat capacity of water',
                    law: 'q = mcΔT (water), ΔH = q/n (fuel)'
                },
                width: 700,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 6. CHEMICAL KINETICS =====
        'reactionRateGraphDiagram': {
            name: 'Reaction Rate Graph',
            category: 'Kinetics',
            description: 'Concentration vs time graph',
            type: 'reaction_rate',
            order: 1,
            defaultOptions: {
                title: 'Reaction Rate - Concentration vs Time',
                showConcentrationDecrease: true,
                showTangent: true,
                showRate: true,
                showHalfLife: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rateEquationDiagram': {
            name: 'Rate Equation Diagram',
            category: 'Kinetics',
            description: 'Rate = k[A]^m[B]^n',
            type: 'rate_equation',
            reaction: 'A + B → C',
            rateConstant: 0.05,
            orderA: 2,
            orderB: 1,
            defaultOptions: {
                title: 'Rate Equation',
                showEquation: true,
                showOrders: true,
                showUnits: true,
                showCalculation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'reactionOrderGraphs': {
            name: 'Reaction Order Graphs',
            category: 'Kinetics',
            description: 'Zero, first, second order comparisons',
            type: 'reaction_orders',
            defaultOptions: {
                title: 'Reaction Order Graphs',
                showZeroOrder: true,
                showFirstOrder: true,
                showSecondOrder: true,
                showComparison: true,
                width: 1100,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'arrheniusEquationDiagram': {
            name: 'Arrhenius Equation Plot',
            category: 'Kinetics',
            description: 'ln(k) vs 1/T graph',
            type: 'arrhenius',
            activationEnergy: 75,
            defaultOptions: {
                title: 'Arrhenius Equation',
                showGraph: true,
                showEquation: true,
                showActivationEnergy: true,
                showFrequencyFactor: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'maxwellBoltzmannDistribution': {
            name: 'Maxwell-Boltzmann Distribution',
            category: 'Kinetics',
            description: 'Molecular energy distribution',
            type: 'maxwell_boltzmann',
            temperature: 298,
            activationEnergy: 50,
            defaultOptions: {
                title: 'Maxwell-Boltzmann Distribution',
                showCurve: true,
                showActivationEnergy: true,
                showAreaAboveEa: true,
                showTemperatureEffect: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'catalystEffectDiagram': {
            name: 'Catalyst Effect on Activation Energy',
            category: 'Kinetics',
            description: 'Lowering activation energy',
            type: 'catalyst_effect',
            defaultOptions: {
                title: 'Effect of Catalyst',
                showUncatalyzed: true,
                showCatalyzed: true,
                showActivationEnergyDifference: true,
                showEnthalpyUnchanged: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'reactionMechanismDiagram': {
            name: 'Reaction Mechanism Diagram',
            category: 'Kinetics',
            description: 'Multi-step reaction pathway',
            type: 'reaction_mechanism',
            steps: 2,
            defaultOptions: {
                title: 'Reaction Mechanism',
                showIntermediates: true,
                showTransitionStates: true,
                showRateDeterminingStep: true,
                showEnergyProfile: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'halfLifeDiagram': {
            name: 'Half-Life Diagram',
            category: 'Kinetics',
            description: 'First-order half-life',
            type: 'half_life',
            initialConcentration: 100,
            halfLife: 10,
            defaultOptions: {
                title: 'Half-Life',
                showConcentrationCurve: true,
                showHalfLives: true,
                showConstantHalfLife: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== KINETICS APPARATUS DIAGRAMS =====
        'clockReactionApparatus': {
            name: 'Clock Reaction (Iodine Clock)',
            category: 'Kinetics',
            description: 'Visual timing of reaction completion',
            type: 'apparatus_diagram',
            apparatusType: 'clock_reaction',
            reaction: 'iodine_clock',
            defaultOptions: {
                title: 'Iodine Clock Reaction',
                showRealObject: true,
                showBeakers: true,
                showReactants: true,
                showColorChange: true,
                showStopwatch: true,
                showConcentrationEffect: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Time to color change (with concentration)',
                    constant: 'Amount of limiting reagent',
                    law: 'Rate ∝ [reactant]^n, time ∝ 1/rate'
                },
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'gasSymringeApparatus': {
            name: 'Gas Syringe for Rate Measurement',
            category: 'Kinetics',
            description: 'Measuring gas production rate',
            type: 'apparatus_diagram',
            apparatusType: 'gas_syringe',
            reaction: 'CaCO3 + HCl',
            defaultOptions: {
                title: 'Gas Syringe - Rate Measurement',
                showRealObject: true,
                showConicalFlask: true,
                showReactants: true,
                showGasSyringe: true,
                showVolumeMarkings: true,
                showGasProduction: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Gas volume (with time)',
                    constant: 'Stoichiometry, limiting reagent',
                    law: 'Rate = ΔV/Δt, rate changes with concentration'
                },
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'colorimeterApparatus': {
            name: 'Colorimeter',
            category: 'Kinetics',
            description: 'Measuring concentration changes via absorbance',
            type: 'apparatus_diagram',
            apparatusType: 'colorimeter',
            solution: 'colored reactant',
            defaultOptions: {
                title: 'Colorimeter',
                showRealObject: true,
                showLightSource: true,
                showCuvette: true,
                showDetector: true,
                showAbsorbanceReading: true,
                showBeerLawGraph: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Absorbance (with concentration over time)',
                    constant: 'Path length, wavelength',
                    law: 'A = εcl (Beer-Lambert), concentration ∝ absorbance'
                },
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'continuousMonitoringApparatus': {
            name: 'Continuous Monitoring Setup',
            category: 'Kinetics',
            description: 'Measuring pH or conductivity over time',
            type: 'apparatus_diagram',
            apparatusType: 'continuous_monitoring',
            measurement: 'pH',
            defaultOptions: {
                title: 'Continuous Monitoring - pH',
                showRealObject: true,
                showBeaker: true,
                showProbe: true,
                showDataLogger: true,
                showGraph: true,
                showReaction: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'pH (or conductivity) with time',
                    constant: 'Temperature, volume',
                    law: 'Rate can be found from slope of property vs time'
                },
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 7. CHEMICAL EQUILIBRIUM =====
        'equilibriumDiagram': {
            name: 'Chemical Equilibrium Diagram',
            category: 'Equilibrium',
            description: 'Forward and reverse reaction rates',
            type: 'equilibrium',
            reaction: 'N2 + 3H2 ⇌ 2NH3',
            defaultOptions: {
                title: 'Chemical Equilibrium',
                showForwardRate: true,
                showReverseRate: true,
                showEquilibriumPoint: true,
                showConcentrations: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },
        'equilibriumConstantDiagram': {
            name: 'Equilibrium Constant Expression',
            category: 'Equilibrium',
            description: 'Kc and Kp expressions',
            type: 'equilibrium_constant',
            reaction: 'aA + bB ⇌ cC + dD',
            defaultOptions: {
                title: 'Equilibrium Constant',
                showKcExpression: true,
                showKpExpression: true,
                showExample: true,
                showUnits: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'leChatellierPrincipleDiagram': {
            name: "Le Chatelier's Principle",
            category: 'Equilibrium',
            description: 'Response to stress on equilibrium',
            type: 'le_chatelier',
            stress: 'concentration',
            defaultOptions: {
                title: "Le Chatelier's Principle",
                showOriginalEquilibrium: true,
                showStress: true,
                showShift: true,
                showNewEquilibrium: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'pressureEquilibriumDiagram': {
            name: 'Effect of Pressure on Equilibrium',
            category: 'Equilibrium',
            description: 'Gas equilibrium shift with pressure',
            type: 'pressure_equilibrium',
            reaction: 'N2 + 3H2 ⇌ 2NH3',
            defaultOptions: {
                title: 'Pressure Effect on Equilibrium',
                showLowPressure: true,
                showHighPressure: true,
                showMoleComparison: true,
                showShift: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'temperatureEquilibriumDiagram': {
            name: 'Effect of Temperature on Equilibrium',
            category: 'Equilibrium',
            description: 'Exothermic vs endothermic shifts',
            type: 'temperature_equilibrium',
            reactionType: 'exothermic',
            defaultOptions: {
                title: 'Temperature Effect on Equilibrium',
                showLowTemp: true,
                showHighTemp: true,
                showEnthalpyChange: true,
                showShift: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'equilibriumPositionGraph': {
            name: 'Equilibrium Position Graph',
            category: 'Equilibrium',
            description: 'Concentration changes reaching equilibrium',
            type: 'equilibrium_position',
            reaction: 'A ⇌ B',
            defaultOptions: {
                title: 'Reaching Equilibrium',
                showReactantCurve: true,
                showProductCurve: true,
                showEquilibriumLine: true,
                showRates: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'heterogeneousEquilibriumDiagram': {
            name: 'Heterogeneous Equilibrium',
            category: 'Equilibrium',
            description: 'Equilibrium with multiple phases',
            type: 'heterogeneous_equilibrium',
            reaction: 'CaCO3(s) ⇌ CaO(s) + CO2(g)',
            defaultOptions: {
                title: 'Heterogeneous Equilibrium',
                showSolids: true,
                showGases: true,
                showKpExpression: true,
                showPhaseLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== EQUILIBRIUM APPARATUS DIAGRAMS =====
        'equilibriumTubeApparatus': {
            name: 'Sealed Tube Equilibrium',
            category: 'Equilibrium',
            description: 'Observing equilibrium color changes',
            type: 'apparatus_diagram',
            apparatusType: 'equilibrium_tube',
            reaction: 'NO2 ⇌ N2O4',
            defaultOptions: {
                title: 'Equilibrium in Sealed Tube',
                showRealObject: true,
                showSealedTube: true,
                showColorChange: true,
                showTemperatureBath: true,
                showBefore: true,
                showAfter: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Color intensity (with temperature/pressure)',
                    constant: 'Total moles in closed system',
                    law: 'Le Chatelier: system shifts to oppose stress'
                },
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'haberProcessApparatus': {
            name: 'Haber Process Equilibrium',
            category: 'Equilibrium',
            description: 'Industrial ammonia synthesis',
            type: 'apparatus_diagram',
            apparatusType: 'haber_process',
            defaultOptions: {
                title: 'Haber Process',
                showRealObject: true,
                showReactor: true,
                showCatalyst: true,
                showPressure: true,
                showTemperature: true,
                showRecycling: true,
                showOptimalConditions: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Yield (with pressure, temperature, catalyst)',
                    constant: 'Kc (at given temperature)',
                    law: 'N₂ + 3H₂ ⇌ 2NH₃, compromise conditions for rate vs yield'
                },
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 8. ACIDS & BASES =====
        'phScaleDiagram': {
            name: 'pH Scale Diagram',
            category: 'Acids & Bases',
            description: 'pH 0-14 with common substances',
            type: 'ph_scale',
            defaultOptions: {
                title: 'pH Scale',
                showScale: true,
                showExamples: true,
                showColors: true,
                showHConcentration: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'acidBaseTheoriesDiagram': {
            name: 'Acid-Base Theories Comparison',
            category: 'Acids & Bases',
            description: 'Arrhenius, Bronsted-Lowry, Lewis',
            type: 'acid_base_theories',
            defaultOptions: {
                title: 'Acid-Base Theories',
                showArrhenius: true,
                showBronstedLowry: true,
                showLewis: true,
                showExamples: true,
                width: 1000,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'conjugateAcidBasePairs': {
            name: 'Conjugate Acid-Base Pairs',
            category: 'Acids & Bases',
            description: 'Related by proton transfer',
            type: 'conjugate_pairs',
            acid: 'HCl',
            base: 'NH3',
            defaultOptions: {
                title: 'Conjugate Acid-Base Pairs',
                showProtonTransfer: true,
                showForward: true,
                showReverse: true,
                showPairs: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'strongWeakAcidsDiagram': {
            name: 'Strong vs Weak Acids',
            category: 'Acids & Bases',
            description: 'Degree of dissociation comparison',
            type: 'strong_weak_acids',
            strongAcid: 'HCl',
            weakAcid: 'CH3COOH',
            defaultOptions: {
                title: 'Strong vs Weak Acids',
                showDissociation: true,
                showIons: true,
                showMolecules: true,
                showComparison: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'bufferSolutionDiagram': {
            name: 'Buffer Solution Diagram',
            category: 'Acids & Bases',
            description: 'Resisting pH change',
            type: 'buffer_solution',
            buffer: 'CH3COOH/CH3COONa',
            defaultOptions: {
                title: 'Buffer Solution',
                showComponents: true,
                showAcidAddition: true,
                showBaseAddition: true,
                showpHStability: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'titrationCurveDiagram': {
            name: 'Titration Curve',
            category: 'Acids & Bases',
            description: 'pH vs volume of titrant',
            type: 'titration_curve',
            titration: 'strong_acid_strong_base',
            defaultOptions: {
                title: 'Titration Curve - Strong Acid/Strong Base',
                showCurve: true,
                showEquivalencePoint: true,
                showBufferRegion: false,
                showIndicatorRange: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'indicatorDiagram': {
            name: 'Acid-Base Indicators',
            category: 'Acids & Bases',
            description: 'Color change ranges',
            type: 'indicators',
            defaultOptions: {
                title: 'Acid-Base Indicators',
                showMultipleIndicators: true,
                showColorChanges: true,
                showpHRanges: true,
                showpKaValues: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'kaKbRelationship': {
            name: 'Ka and Kb Relationship',
            category: 'Acids & Bases',
            description: 'Acid-base constant relationship',
            type: 'ka_kb',
            conjugatePair: 'NH4+/NH3',
            defaultOptions: {
                title: 'Ka × Kb = Kw',
                showKaExpression: true,
                showKbExpression: true,
                showRelationship: true,
                showCalculation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'saltHydrolysisDiagram': {
            name: 'Salt Hydrolysis',
            category: 'Acids & Bases',
            description: 'pH of salt solutions',
            type: 'salt_hydrolysis',
            salt: 'NH4Cl',
            defaultOptions: {
                title: 'Salt Hydrolysis',
                showIons: true,
                showWaterReaction: true,
                showpHEffect: true,
                showExplanation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== ACIDS & BASES APPARATUS DIAGRAMS =====
        'titrationApparatus': {
            name: 'Titration Apparatus',
            category: 'Acids & Bases',
            description: 'Acid-base titration setup',
            type: 'apparatus_diagram',
            apparatusType: 'titration',
            acid: 'HCl',
            base: 'NaOH',
            indicator: 'phenolphthalein',
            defaultOptions: {
                title: 'Acid-Base Titration Setup',
                showRealObject: true,
                showBurette: true,
                showConicalFlask: true,
                showWhiteTile: true,
                showIndicator: true,
                showColorChange: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Volume added from burette, pH, color',
                    constant: 'Concentration ratio at equivalence',
                    law: 'n(acid) = n(base) at equivalence, M₁V₁ = M₂V₂'
                },
                width: 700,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'pHMeterApparatus': {
            name: 'pH Meter',
            category: 'Acids & Bases',
            description: 'Electronic pH measurement',
            type: 'apparatus_diagram',
            apparatusType: 'ph_meter',
            solution: 'unknown',
            defaultOptions: {
                title: 'pH Meter',
                showRealObject: true,
                showProbe: true,
                showDigitalDisplay: true,
                showBeaker: true,
                showSolution: true,
                showCalibration: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'pH reading (with solution)',
                    constant: 'Kw = 1×10⁻¹⁴ at 25°C',
                    law: 'pH = -log[H⁺], pH + pOH = 14'
                },
                width: 700,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'universalIndicatorApparatus': {
            name: 'Universal Indicator',
            category: 'Acids & Bases',
            description: 'Color-based pH determination',
            type: 'apparatus_diagram',
            apparatusType: 'universal_indicator',
            defaultOptions: {
                title: 'Universal Indicator',
                showRealObject: true,
                showTestTubes: true,
                showColorChart: true,
                showpHValues: true,
                showSolutions: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Color (with pH)',
                    constant: 'Indicator transition ranges',
                    law: 'Each pH range shows specific color'
                },
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'bufferPreparationApparatus': {
            name: 'Buffer Solution Preparation',
            category: 'Acids & Bases',
            description: 'Preparing buffer with specific pH',
            type: 'apparatus_diagram',
            apparatusType: 'buffer_preparation',
            weakAcid: 'CH3COOH',
            salt: 'CH3COONa',
            targetpH: 4.76,
            defaultOptions: {
                title: 'Buffer Preparation',
                showRealObject: true,
                showVolumetricFlask: true,
                showWeakAcid: true,
                showConjugateBase: true,
                showCalculations: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Ratio of acid to conjugate base',
                    constant: 'pKa of weak acid',
                    law: 'Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA])'
                },
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 9. REDOX & ELECTROCHEMISTRY =====
        'oxidationStatesDiagram': {
            name: 'Oxidation States Assignment',
            category: 'Redox',
            description: 'Rules for assigning oxidation numbers',
            type: 'oxidation_states',
            compound: 'K2Cr2O7',
            defaultOptions: {
                title: 'Oxidation States',
                showCompound: true,
                showRules: true,
                showCalculation: true,
                showVerification: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'halfReactionDiagram': {
            name: 'Half-Reaction Method',
            category: 'Redox',
            description: 'Balancing redox by half-reactions',
            type: 'half_reactions',
            reaction: 'MnO4- + Fe2+ → Mn2+ + Fe3+',
            medium: 'acidic',
            defaultOptions: {
                title: 'Half-Reaction Method',
                showOxidationHalf: true,
                showReductionHalf: true,
                showBalancing: true,
                showOverall: true,
                width: 1000,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'electrochemicalSeriesDiagram': {
            name: 'Electrochemical Series',
            category: 'Redox',
            description: 'Standard electrode potentials',
            type: 'electrochemical_series',
            defaultOptions: {
                title: 'Electrochemical Series',
                showElectrodes: true,
                showPotentials: true,
                showReducingAgents: true,
                showOxidizingAgents: true,
                width: 900,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'galvanicCellDiagram': {
            name: 'Galvanic (Voltaic) Cell',
            category: 'Redox',
            description: 'Spontaneous cell producing electricity',
            type: 'galvanic_cell',
            anode: 'Zn',
            cathode: 'Cu',
            defaultOptions: {
                title: 'Galvanic Cell - Zn/Cu',
                showAnode: true,
                showCathode: true,
                showSaltBridge: true,
                showElectronFlow: true,
                showIonFlow: true,
                showVoltmeter: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'electrolyticCellDiagram': {
            name: 'Electrolytic Cell',
            category: 'Redox',
            description: 'Non-spontaneous cell requiring electricity',
            type: 'electrolytic_cell',
            electrolyte: 'molten NaCl',
            defaultOptions: {
                title: 'Electrolytic Cell',
                showAnode: true,
                showCathode: true,
                showBattery: true,
                showElectronFlow: true,
                showProducts: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'cellPotentialDiagram': {
            name: 'Cell Potential Calculation',
            category: 'Redox',
            description: 'E°cell = E°cathode - E°anode',
            type: 'cell_potential',
            cathode: {half: 'Cu2+ + 2e- → Cu', E: 0.34},
            anode: {half: 'Zn → Zn2+ + 2e-', E: -0.76},
            defaultOptions: {
                title: 'Cell Potential',
                showHalfCells: true,
                showPotentials: true,
                showCalculation: true,
                showSpontaneity: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'nernstEquationDiagram': {
            name: 'Nernst Equation',
            category: 'Redox',
            description: 'Cell potential under non-standard conditions',
            type: 'nernst_equation',
            cell: 'Zn/Cu',
            defaultOptions: {
                title: 'Nernst Equation',
                showEquation: true,
                showStandardPotential: true,
                showConcentrationEffect: true,
                showCalculation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'faradaysLawDiagram': {
            name: "Faraday's Laws of Electrolysis",
            category: 'Redox',
            description: 'Quantitative electrolysis',
            type: 'faradays_laws',
            defaultOptions: {
                title: "Faraday's Laws",
                showFirstLaw: true,
                showSecondLaw: true,
                showCalculations: true,
                showExample: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'corrosionDiagram': {
            name: 'Corrosion Mechanism',
            category: 'Redox',
            description: 'Rusting as electrochemical process',
            type: 'corrosion',
            metal: 'iron',
            defaultOptions: {
                title: 'Corrosion of Iron',
                showAnodeArea: true,
                showCathodeArea: true,
                showRustFormation: true,
                showConditions: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'fuelCellDiagram': {
            name: 'Fuel Cell Diagram',
            category: 'Redox',
            description: 'Hydrogen-oxygen fuel cell',
            type: 'fuel_cell',
            fuelType: 'hydrogen',
            defaultOptions: {
                title: 'Hydrogen Fuel Cell',
                showAnode: true,
                showCathode: true,
                showElectrolyte: true,
                showReactions: true,
                showProducts: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'batteryDiagram': {
            name: 'Battery Diagram',
            category: 'Redox',
            description: 'Rechargeable battery operation',
            type: 'battery',
            batteryType: 'lead-acid',
            defaultOptions: {
                title: 'Lead-Acid Battery',
                showDischarging: true,
                showCharging: true,
                showReactions: true,
                showElectrodes: true,
                width: 1000,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        // ===== REDOX APPARATUS DIAGRAMS =====
        'daniellCellApparatus': {
            name: 'Daniell Cell',
            category: 'Redox',
            description: 'Classic Zn-Cu galvanic cell',
            type: 'apparatus_diagram',
            apparatusType: 'daniell_cell',
            defaultOptions: {
                title: 'Daniell Cell',
                showRealObject: true,
                showZnElectrode: true,
                showCuElectrode: true,
                showZnSO4Solution: true,
                showCuSO4Solution: true,
                showSaltBridge: true,
                showVoltmeter: true,
                showElectronFlow: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Electrode masses, ion concentrations, voltage',
                    constant: 'E°cell (under standard conditions)',
                    law: 'E°cell = E°cathode - E°anode = 1.10V, ΔG = -nFE'
                },
                width: 1000,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'copperElectroplatingApparatus': {
            name: 'Copper Electroplating',
            category: 'Redox',
            description: 'Depositing copper onto object',
            type: 'apparatus_diagram',
            apparatusType: 'electroplating',
            metal: 'copper',
            defaultOptions: {
                title: 'Copper Electroplating',
                showRealObject: true,
                showCopperAnode: true,
                showObjectCathode: true,
                showCuSO4Solution: true,
                showBattery: true,
                showCopperDeposition: true,
                showCurrentFlow: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Mass of copper deposited, anode mass',
                    constant: 'Current, time, copper ion charge',
                    law: 'Q = It, m = (Q × M)/(n × F) (Faraday\'s law)'
                },
                width: 900,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'chlorAlkaliCellApparatus': {
            name: 'Chlor-Alkali Cell',
            category: 'Redox',
            description: 'Industrial electrolysis of brine',
            type: 'apparatus_diagram',
            apparatusType: 'chlor_alkali',
            defaultOptions: {
                title: 'Chlor-Alkali Cell',
                showRealObject: true,
                showBrineSolution: true,
                showAnode: true,
                showCathode: true,
                showMembrane: true,
                showCl2Production: true,
                showH2Production: true,
                showNaOHProduction: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Products formed (Cl₂, H₂, NaOH)',
                    constant: 'Applied voltage, electrode reactions',
                    law: 'Anode: 2Cl⁻ → Cl₂ + 2e⁻, Cathode: 2H₂O + 2e⁻ → H₂ + 2OH⁻'
                },
                width: 1000,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'redoxTitrationApparatus': {
            name: 'Redox Titration Setup',
            category: 'Redox',
            description: 'Manganate(VII) titration',
            type: 'apparatus_diagram',
            apparatusType: 'redox_titration',
            oxidizingAgent: 'KMnO4',
            reducingAgent: 'Fe2+',
            defaultOptions: {
                title: 'Redox Titration - Manganate(VII)',
                showRealObject: true,
                showBurette: true,
                showConicalFlask: true,
                showPurpleColor: true,
                showEndpoint: true,
                showSelfIndicating: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Color (purple to colorless), volume added',
                    constant: 'Mole ratio MnO₄⁻ : Fe²⁺',
                    law: 'MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O, n₁/n₂ = stoichiometric ratio'
                },
                width: 800,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 10. ORGANIC CHEMISTRY =====
        'homologousSeriesDiagram': {
            name: 'Homologous Series',
            category: 'Organic Chemistry',
            description: 'Alkanes, alkenes, alcohols, etc.',
            type: 'homologous_series',
            series: 'alkanes',
            defaultOptions: {
                title: 'Homologous Series - Alkanes',
                showMembers: true,
                showGeneralFormula: true,
                showTrends: true,
                showStructures: true,
                width: 1000,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'structuralIsomersDiagram': {
            name: 'Structural Isomers',
            category: 'Organic Chemistry',
            description: 'Same molecular formula, different structures',
            type: 'structural_isomers',
            molecularFormula: 'C4H10',
            defaultOptions: {
                title: 'Structural Isomers - C₄H₁₀',
                showAllIsomers: true,
                showNaming: true,
                showDifferences: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'stereoisomersDiagram': {
            name: 'Stereoisomers',
            category: 'Organic Chemistry',
            description: 'Geometric and optical isomers',
            type: 'stereoisomers',
            isomerType: 'geometric',
            defaultOptions: {
                title: 'Stereoisomers',
                showCisTransIsomers: true,
                showOpticalIsomers: false,
                show3DStructures: true,
                showDifferences: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'functionalGroupsDiagram': {
            name: 'Functional Groups',
            category: 'Organic Chemistry',
            description: 'Common organic functional groups',
            type: 'functional_groups',
            defaultOptions: {
                title: 'Organic Functional Groups',
                showAlcohol: true,
                showCarboxylicAcid: true,
                showAldehyde: true,
                showKetone: true,
                showEster: true,
                showAmine: true,
                showAmide: true,
                width: 1100,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'reactionMechanismOrganic': {
            name: 'Organic Reaction Mechanism',
            category: 'Organic Chemistry',
            description: 'Curly arrow mechanism',
            type: 'organic_mechanism',
            reactionType: 'nucleophilic_substitution',
            defaultOptions: {
                title: 'Nucleophilic Substitution Mechanism',
                showCurlyArrows: true,
                showIntermediates: true,
                showProducts: true,
                showCharges: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'additionReactionDiagram': {
            name: 'Addition Reaction',
            category: 'Organic Chemistry',
            description: 'Electrophilic addition to alkenes',
            type: 'addition_reaction',
            alkene: 'ethene',
            reagent: 'HBr',
            defaultOptions: {
                title: 'Electrophilic Addition',
                showDoubleBond: true,
                showReagent: true,
                showMechanism: true,
                showProduct: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'substitutionReactionDiagram': {
            name: 'Substitution Reaction',
            category: 'Organic Chemistry',
            description: 'Nucleophilic or electrophilic substitution',
            type: 'substitution_reaction',
            substrate: 'haloalkane',
            nucleophile: 'OH-',
            defaultOptions: {
                title: 'Nucleophilic Substitution',
                showSubstrate: true,
                showNucleophile: true,
                showMechanism: true,
                showProduct: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'eliminationReactionDiagram': {
            name: 'Elimination Reaction',
            category: 'Organic Chemistry',
            description: 'Forming double bonds',
            type: 'elimination_reaction',
            substrate: 'bromoethane',
            base: 'OH-',
            defaultOptions: {
                title: 'Elimination Reaction',
                showSubstrate: true,
                showBase: true,
                showMechanism: true,
                showAlkeneProduct: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },
        'polymerizationDiagram': {
            name: 'Polymerization Diagram',
            category: 'Organic Chemistry',
            description: 'Addition and condensation polymers',
            type: 'polymerization',
            polymerType: 'addition',
            monomer: 'ethene',
            defaultOptions: {
                title: 'Addition Polymerization',
                showMonomer: true,
                showRepeatingUnit: true,
                showPolymer: true,
                showConditions: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'aromaticStructureDiagram': {
            name: 'Aromatic Structure - Benzene',
            category: 'Organic Chemistry',
            description: 'Resonance and delocalization',
            type: 'aromatic_structure',
            compound: 'benzene',
            defaultOptions: {
                title: 'Benzene Structure',
                showResonanceStructures: true,
                showDelocalizedModel: true,
                showBondLengths: true,
                showStability: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'esterificationDiagram': {
            name: 'Esterification Reaction',
            category: 'Organic Chemistry',
            description: 'Forming esters from acids and alcohols',
            type: 'esterification',
            acid: 'ethanoic acid',
            alcohol: 'ethanol',
            defaultOptions: {
                title: 'Esterification',
                showAcid: true,
                showAlcohol: true,
                showEster: true,
                showWater: true,
                showCatalyst: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'chirality Diagram': {
            name: 'Chirality and Optical Isomers',
            category: 'Organic Chemistry',
            description: 'Enantiomers and chiral centers',
            type: 'chirality',
            molecule: 'lactic acid',
            defaultOptions: {
                title: 'Optical Isomers',
                showChiralCenter: true,
                showEnantiomers: true,
                showMirrorPlane: true,
                showRotation: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== ORGANIC CHEMISTRY APPARATUS DIAGRAMS =====
        'distillationApparatus': {
            name: 'Distillation Apparatus',
            category: 'Organic Chemistry',
            description: 'Separating liquids by boiling point',
            type: 'apparatus_diagram',
            apparatusType: 'distillation',
            mixture: 'ethanol-water',
            defaultOptions: {
                title: 'Simple Distillation',
                showRealObject: true,
                showRoundBottomFlask: true,
                showThermometer: true,
                showCondenser: true,
                showReceivingFlask: true,
                showWaterFlow: true,
                showHeating: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Temperature (increases), distillate composition',
                    constant: 'Boiling points of components',
                    law: 'Component with lower BP distills first'
                },
                width: 1000,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'fractionalDistillationApparatus': {
            name: 'Fractional Distillation',
            category: 'Organic Chemistry',
            description: 'Separating close boiling point liquids',
            type: 'apparatus_diagram',
            apparatusType: 'fractional_distillation',
            mixture: 'crude oil',
            defaultOptions: {
                title: 'Fractional Distillation',
                showRealObject: true,
                showColumn: true,
                showFractionatingColumn: true,
                showMultipleFractions: true,
                showTemperatureGradient: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Temperature up column, fraction collected',
                    constant: 'BP differences between fractions',
                    law: 'Repeated vaporization-condensation separates by BP'
                },
                width: 800,
                height: 1000,
                backgroundColor: '#ffffff'
            }
        },

        'refluxApparatus': {
            name: 'Reflux Apparatus',
            category: 'Organic Chemistry',
            description: 'Heating reaction mixture without loss',
            type: 'apparatus_diagram',
            apparatusType: 'reflux',
            reaction: 'esterification',
            defaultOptions: {
                title: 'Reflux Setup',
                showRealObject: true,
                showRoundBottomFlask: true,
                showCondenser: true,
                showAntiCrushGravel: true,
                showHeating: true,
                showVaporCondensation: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Reaction progress (with time)',
                    constant: 'Total amount of reactants (no loss)',
                    law: 'Vapors condense and return - allows prolonged heating'
                },
                width: 700,
                height: 1000,
                backgroundColor: '#ffffff'
            }
        },

        'separatingFunnelApparatus': {
            name: 'Separating Funnel',
            category: 'Organic Chemistry',
            description: 'Separating immiscible liquids',
            type: 'apparatus_diagram',
            apparatusType: 'separating_funnel',
            mixture: 'organic-aqueous',
            defaultOptions: {
                title: 'Separating Funnel',
                showRealObject: true,
                showFunnel: true,
                showLayers: true,
                showTap: true,
                showStopper: true,
                showDensityDifference: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Layer separation (by density)',
                    constant: 'Immiscibility of layers',
                    law: 'Denser layer settles below, tap to drain separately'
                },
                width: 600,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'recrystallizationApparatus': {
            name: 'Recrystallization',
            category: 'Organic Chemistry',
            description: 'Purifying solid organic compounds',
            type: 'apparatus_diagram',
            apparatusType: 'recrystallization',
            compound: 'benzoic acid',
            defaultOptions: {
                title: 'Recrystallization',
                showRealObject: true,
                showHeating: true,
                showFiltration: true,
                showCooling: true,
                showCrystals: true,
                showSuctionFiltration: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Solubility (with temperature)',
                    constant: 'Compound identity',
                    law: 'Hot solvent dissolves, cooling crystallizes pure product'
                },
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'meltingPointApparatus': {
            name: 'Melting Point Apparatus',
            category: 'Organic Chemistry',
            description: 'Determining purity and identity',
            type: 'apparatus_diagram',
            apparatusType: 'melting_point',
            compound: 'unknown',
            defaultOptions: {
                title: 'Melting Point Determination',
                showRealObject: true,
                showCapillaryTube: true,
                showSample: true,
                showOilBath: true,
                showThermometer: true,
                showHeating: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Temperature, sample state (solid to liquid)',
                    constant: 'Pure compound melting point (sharp)',
                    law: 'Pure substance: sharp MP, Impure: range/lower MP'
                },
                width: 700,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'chromatographyApparatus': {
            name: 'Thin Layer Chromatography (TLC)',
            category: 'Organic Chemistry',
            description: 'Separating and identifying compounds',
            type: 'apparatus_diagram',
            apparatusType: 'tlc',
            sample: 'mixture',
            defaultOptions: {
                title: 'Thin Layer Chromatography',
                showRealObject: true,
                showTLCPlate: true,
                showSolventFront: true,
                showSpots: true,
                showDevelopingChamber: true,
                showRfCalculation: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Spot position (with polarity)',
                    constant: 'Rf value (for given compound/solvent)',
                    law: 'Rf = distance moved by compound / distance moved by solvent'
                },
                width: 800,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 11. ANALYTICAL CHEMISTRY =====
        'massSpectrumDiagram': {
            name: 'Mass Spectrum',
            category: 'Analytical Chemistry',
            description: 'Mass-to-charge ratio peaks',
            type: 'mass_spectrum',
            compound: 'ethanol',
            defaultOptions: {
                title: 'Mass Spectrum - Ethanol',
                showPeaks: true,
                showMolecularIon: true,
                showFragmentation: true,
                showInterpretation: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'infraredSpectrumDiagram': {
            name: 'Infrared Spectrum',
            category: 'Analytical Chemistry',
            description: 'IR absorption identifying functional groups',
            type: 'ir_spectrum',
            compound: 'ethanol',
            defaultOptions: {
                title: 'IR Spectrum - Ethanol',
                showSpectrum: true,
                showCharacteristicPeaks: true,
                showFunctionalGroups: true,
                showWavenumbers: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'nmrSpectrumDiagram': {
            name: 'NMR Spectrum',
            category: 'Analytical Chemistry',
            description: 'Nuclear magnetic resonance',
            type: 'nmr_spectrum',
            nucleusType: '1H',
            compound: 'ethanol',
            defaultOptions: {
                title: '¹H NMR Spectrum - Ethanol',
                showSpectrum: true,
                showChemicalShifts: true,
                showSplitting: true,
                showIntegration: true,
                showAssignment: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'uvVisSpectrumDiagram': {
            name: 'UV-Visible Spectrum',
            category: 'Analytical Chemistry',
            description: 'Electronic transitions and conjugation',
            type: 'uv_vis_spectrum',
            compound: 'beta-carotene',
            defaultOptions: {
                title: 'UV-Vis Spectrum',
                showAbsorptionCurve: true,
                showLambdaMax: true,
                showBeerLaw: true,
                showConjugation: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'chromatogramDiagram': {
            name: 'Gas Chromatogram',
            category: 'Analytical Chemistry',
            description: 'GC separation and analysis',
            type: 'chromatogram',
            sample: 'mixture',
            defaultOptions: {
                title: 'Gas Chromatogram',
                showPeaks: true,
                showRetentionTimes: true,
                showBaseline: true,
                showIntegration: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'emissionSpectrumAnalytical': {
            name: 'Atomic Emission Spectrum',
            category: 'Analytical Chemistry',
            description: 'Element identification by emission',
            type: 'emission_spectrum_analytical',
            element: 'sodium',
            defaultOptions: {
                title: 'Atomic Emission - Sodium',
                showSpectralLines: true,
                showWavelengths: true,
                showEnergyLevels: true,
                showApplications: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'absorptionSpectrumDiagram': {
            name: 'Atomic Absorption Spectrum',
            category: 'Analytical Chemistry',
            description: 'Element quantification by absorption',
            type: 'absorption_spectrum',
            element: 'copper',
            defaultOptions: {
                title: 'Atomic Absorption',
                showContinuousSpectrum: true,
                showAbsorptionLines: true,
                showCalibrationCurve: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== ANALYTICAL CHEMISTRY APPARATUS DIAGRAMS =====
        'spectrophotometerApparatus': {
            name: 'Spectrophotometer (UV-Vis)',
            category: 'Analytical Chemistry',
            description: 'Measuring absorbance for concentration',
            type: 'apparatus_diagram',
            apparatusType: 'spectrophotometer',
            sample: 'colored solution',
            defaultOptions: {
                title: 'UV-Vis Spectrophotometer',
                showRealObject: true,
                showLightSource: true,
                showMonochromator: true,
                showSampleCuvette: true,
                showDetector: true,
                showDisplay: true,
                showLightPath: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Absorbance (with concentration)',
                    constant: 'Path length, wavelength, extinction coefficient',
                    law: 'A = εcl (Beer-Lambert Law)'
                },
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'gcmsApparatus': {
            name: 'Gas Chromatography-Mass Spectrometry',
            category: 'Analytical Chemistry',
            description: 'Separating and identifying compounds',
            type: 'apparatus_diagram',
            apparatusType: 'gcms',
            sample: 'complex mixture',
            defaultOptions: {
                title: 'GC-MS',
                showRealObject: true,
                showInjector: true,
                showColumn: true,
                showOven: true,
                showMassSpectrometer: true,
                showDetector: true,
                showChromatogram: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Retention time (compound identity), mass spectrum',
                    constant: 'Column temperature, flow rate',
                    law: 'Each compound: unique RT + mass spectrum = ID'
                },
                width: 1100,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'hplcApparatus': {
            name: 'High Performance Liquid Chromatography',
            category: 'Analytical Chemistry',
            description: 'Liquid phase separation',
            type: 'apparatus_diagram',
            apparatusType: 'hplc',
            sample: 'mixture',
            defaultOptions: {
                title: 'HPLC',
                showRealObject: true,
                showPump: true,
                showInjector: true,
                showColumn: true,
                showDetector: true,
                showChromatogram: true,
                showMobilePhase: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Elution time (with compound polarity)',
                    constant: 'Column packing, mobile phase composition',
                    law: 'Different polarities → different retention times'
                },
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'atomicAbsorptionApparatus': {
            name: 'Atomic Absorption Spectroscopy (AAS)',
            category: 'Analytical Chemistry',
            description: 'Quantifying metal ions',
            type: 'apparatus_diagram',
            apparatusType: 'aas',
            element: 'copper',
            defaultOptions: {
                title: 'Atomic Absorption Spectroscopy',
                showRealObject: true,
                showHollowCathodeLamp: true,
                showFlame: true,
                showMonochromator: true,
                showDetector: true,
                showCalibration: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Absorbance (with metal concentration)',
                    constant: 'Wavelength (element-specific)',
                    law: 'A ∝ concentration, calibration curve for quantification'
                },
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'irSpectrometerApparatus': {
            name: 'IR Spectrometer (FTIR)',
            category: 'Analytical Chemistry',
            description: 'Identifying functional groups',
            type: 'apparatus_diagram',
            apparatusType: 'ftir',
            sample: 'organic compound',
            defaultOptions: {
                title: 'FTIR Spectrometer',
                showRealObject: true,
                showIRSource: true,
                showInterferometer: true,
                showSampleHolder: true,
                showDetector: true,
                showSpectrum: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Absorption peaks (with functional groups)',
                    constant: 'Characteristic wavenumbers for bonds',
                    law: 'Each bond absorbs at characteristic frequency'
                },
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'nmrSpectrometerApparatus': {
            name: 'NMR Spectrometer',
            category: 'Analytical Chemistry',
            description: 'Determining molecular structure',
            type: 'apparatus_diagram',
            apparatusType: 'nmr',
            sample: 'organic compound',
            defaultOptions: {
                title: 'NMR Spectrometer',
                showRealObject: true,
                showMagnet: true,
                showSampleTube: true,
                showRFTransmitter: true,
                showDetector: true,
                showSpectrum: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Chemical shifts, splitting patterns',
                    constant: 'Applied magnetic field, nucleus type',
                    law: 'Chemical environment → shift, neighboring protons → splitting'
                },
                width: 900,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 12. INORGANIC CHEMISTRY =====
        'periodicTrendsDiagram': {
            name: 'Periodic Table Trends',
            category: 'Inorganic Chemistry',
            description: 'Trends across periods and groups',
            type: 'periodic_trends',
            trend: 'electronegativity',
            defaultOptions: {
                title: 'Electronegativity Trends',
                showPeriodicTable: true,
                showArrows: true,
                showValues: true,
                showExplanation: true,
                width: 1100,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'transitionMetalComplexDiagram': {
            name: 'Transition Metal Complex',
            category: 'Inorganic Chemistry',
            description: 'Coordination compound structure',
            type: 'coordination_complex',
            complex: '[Cu(NH3)4(H2O)2]2+',
            defaultOptions: {
                title: 'Coordination Complex',
                showCentralIon: true,
                showLigands: true,
                showGeometry: true,
                showCoordinationNumber: true,
                showOxidationState: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'crystalFieldTheoryDiagram': {
            name: 'Crystal Field Theory',
            category: 'Inorganic Chemistry',
            description: 'd-orbital splitting in complexes',
            type: 'crystal_field_theory',
            geometry: 'octahedral',
            defaultOptions: {
                title: 'Crystal Field Splitting - Octahedral',
                showFreeIon: true,
                showSplitting: true,
                showElectronFilling: true,
                showDeltaO: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'ligandFieldColorDiagram': {
            name: 'Color in Transition Metal Complexes',
            category: 'Inorganic Chemistry',
            description: 'd-d transitions and color',
            type: 'ligand_field_color',
            complex: '[Ti(H2O)6]3+',
            defaultOptions: {
                title: 'Color from d-d Transitions',
                showEnergySplitting: true,
                showTransition: true,
                showAbsorbedColor: true,
                showObservedColor: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'isomerismComplexesDiagram': {
            name: 'Isomerism in Coordination Complexes',
            category: 'Inorganic Chemistry',
            description: 'Geometric and optical isomers',
            type: 'complex_isomerism',
            complex: '[Pt(NH3)2Cl2]',
            defaultOptions: {
                title: 'Isomerism in Complexes',
                showCisIsomer: true,
                showTransIsomer: true,
                showOpticalIsomers: false,
                showDifferences: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'hardSoftAcidBaseDiagram': {
            name: 'Hard-Soft Acid-Base Theory',
            category: 'Inorganic Chemistry',
            description: 'HSAB principle for complexes',
            type: 'hsab_theory',
            defaultOptions: {
                title: 'HSAB Theory',
                showHardAcids: true,
                showSoftAcids: true,
                showHardBases: true,
                showSoftBases: true,
                showPreferences: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'solubilityProductDiagram': {
            name: 'Solubility Product (Ksp)',
            category: 'Inorganic Chemistry',
            description: 'Sparingly soluble salt equilibrium',
            type: 'solubility_product',
            salt: 'AgCl',
            defaultOptions: {
                title: 'Solubility Product',
                showSolid: true,
                showIons: true,
                showEquilibrium: true,
                showKspExpression: true,
                showCalculation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'commonIonEffectDiagram': {
            name: 'Common Ion Effect',
            category: 'Inorganic Chemistry',
            description: 'Reduced solubility with common ion',
            type: 'common_ion_effect',
            salt: 'AgCl',
            commonIonSource: 'NaCl',
            defaultOptions: {
                title: 'Common Ion Effect',
                showOriginalEquilibrium: true,
                showCommonIonAddition: true,
                showShift: true,
                showPrecipitation: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'borneHaberInorganicDiagram': {
            name: 'Born-Haber Cycle (Detailed)',
            category: 'Inorganic Chemistry',
            description: 'All energy steps for ionic compound',
            type: 'born_haber_detailed',
            compound: 'MgO',
            defaultOptions: {
                title: 'Born-Haber Cycle - MgO',
                showAtomization: true,
                showIonization: true,
                showElectronAffinity: true,
                showLatticeEnergy: true,
                showFormation: true,
                width: 1000,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        // ===== INORGANIC CHEMISTRY APPARATUS DIAGRAMS =====
        'qualitativeAnalysisApparatus': {
            name: 'Qualitative Analysis - Cation Tests',
            category: 'Inorganic Chemistry',
            description: 'Systematic identification of metal ions',
            type: 'apparatus_diagram',
            apparatusType: 'qualitative_analysis',
            cations: ['Cu2+', 'Fe3+', 'Al3+'],
            defaultOptions: {
                title: 'Qualitative Analysis Setup',
                showRealObject: true,
                showTestTubes: true,
                showReagents: true,
                showPrecipitates: true,
                showColorChanges: true,
                showFlowchart: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Precipitate color, solution color',
                    constant: 'Ion-reagent reactions (specific)',
                    law: 'Each ion gives characteristic reaction/color'
                },
                width: 1000,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'anionTestsApparatus': {
            name: 'Anion Tests',
            category: 'Inorganic Chemistry',
            description: 'Identifying negative ions',
            type: 'apparatus_diagram',
            apparatusType: 'anion_tests',
            anions: ['Cl-', 'SO4²-', 'CO3²-'],
            defaultOptions: {
                title: 'Anion Identification Tests',
                showRealObject: true,
                showTestTubes: true,
                showReagents: true,
                showResults: true,
                showGasTests: true,
                showPrecipitateTests: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Gas produced, precipitate formed',
                    constant: 'Specific reagent for each anion',
                    law: 'AgNO₃ for halides, BaCl₂ for sulfate, acid for carbonate'
                },
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'contactProcessApparatus': {
            name: 'Contact Process (Sulfuric Acid)',
            category: 'Inorganic Chemistry',
            description: 'Industrial H₂SO₄ production',
            type: 'apparatus_diagram',
            apparatusType: 'contact_process',
            defaultOptions: {
                title: 'Contact Process',
                showRealObject: true,
                showSulfurBurner: true,
                showConverter: true,
                showAbsorptionTower: true,
                showCatalyst: true,
                showOptimumConditions: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'SO₂ → SO₃ conversion (with T, P, catalyst)',
                    constant: 'Equilibrium position (at given conditions)',
                    law: '2SO₂ + O₂ ⇌ 2SO₃, compromise: 450°C, V₂O₅ catalyst'
                },
                width: 1100,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 13. PHYSICAL CHEMISTRY ADDITIONAL =====
        'rateTemperatureDiagram': {
            name: 'Rate vs Temperature',
            category: 'Physical Chemistry',
            description: 'Temperature effect on reaction rate',
            type: 'rate_temperature',
            defaultOptions: {
                title: 'Effect of Temperature on Rate',
                showGraph: true,
                showExponential: true,
                showActivationEnergy: true,
                showQ10Rule: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'partitionCoefficientDiagram': {
            name: 'Partition Coefficient',
            category: 'Physical Chemistry',
            description: 'Solute distribution between solvents',
            type: 'partition_coefficient',
            solute: 'iodine',
            solvents: ['water', 'hexane'],
            defaultOptions: {
                title: 'Partition Coefficient',
                showSeparatingFunnel: true,
                showLayers: true,
                showConcentrations: true,
                showKd: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },
        'colligativePropertiesDiagram': {
            name: 'Colligative Properties',
            category: 'Physical Chemistry',
            description: 'Boiling point elevation, freezing point depression',
            type: 'colligative_properties',
            property: 'boiling_point_elevation',
            defaultOptions: {
                title: 'Colligative Properties',
                showPureSolvent: true,
                showSolution: true,
                showComparison: true,
                showEquations: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'osmosisDiagram': {
            name: 'Osmosis and Osmotic Pressure',
            category: 'Physical Chemistry',
            description: 'Solvent flow through semipermeable membrane',
            type: 'osmosis',
            defaultOptions: {
                title: 'Osmosis',
                showMembrane: true,
                showSolventFlow: true,
                showPressure: true,
                showConcentrations: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'phaseDiagramWater': {
            name: 'Phase Diagram - Water',
            category: 'Physical Chemistry',
            description: 'P-T diagram with triple point',
            type: 'phase_diagram_water',
            defaultOptions: {
                title: 'Phase Diagram - Water',
                showSolidRegion: true,
                showLiquidRegion: true,
                showGasRegion: true,
                showTriplePoint: true,
                showCriticalPoint: true,
                showPhaseTransitions: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'adsorptionIsothermDiagram': {
            name: 'Adsorption Isotherm',
            category: 'Physical Chemistry',
            description: 'Gas adsorption on solid surface',
            type: 'adsorption_isotherm',
            isothermType: 'Langmuir',
            defaultOptions: {
                title: 'Langmuir Adsorption Isotherm',
                showGraph: true,
                showSaturation: true,
                showEquation: true,
                showMechanism: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== PHYSICAL CHEMISTRY APPARATUS DIAGRAMS =====
        'osmometerApparatus': {
            name: 'Osmometer',
            category: 'Physical Chemistry',
            description: 'Measuring osmotic pressure',
            type: 'apparatus_diagram',
            apparatusType: 'osmometer',
            solution: 'sugar solution',
            defaultOptions: {
                title: 'Osmometer',
                showRealObject: true,
                showSemipermeableMembrane: true,
                showPureSolvent: true,
                showSolution: true,
                showPressureHeight: true,
                showEquilibrium: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Height difference (osmotic pressure)',
                    constant: 'Membrane permeability, temperature',
                    law: 'π = MRT (van\'t Hoff equation)'
                },
                width: 700,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'adsorptionColumnApparatus': {
            name: 'Adsorption Column',
            category: 'Physical Chemistry',
            description: 'Chromatography using adsorption',
            type: 'apparatus_diagram',
            apparatusType: 'adsorption_column',
            adsorbent: 'alumina',
            defaultOptions: {
                title: 'Column Chromatography',
                showRealObject: true,
                showColumn: true,
                showAdsorbent: true,
                showSampleBands: true,
                showElution: true,
                showSeparation: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Band position (with polarity)',
                    constant: 'Adsorbent affinity, solvent polarity',
                    law: 'Different affinities → different elution rates'
                },
                width: 600,
                height: 1000,
                backgroundColor: '#ffffff'
            }
        },

        'conductivityCellApparatus': {
            name: 'Conductivity Cell',
            category: 'Physical Chemistry',
            description: 'Measuring solution conductivity',
            type: 'apparatus_diagram',
            apparatusType: 'conductivity_cell',
            solution: 'electrolyte',
            defaultOptions: {
                title: 'Conductivity Measurement',
                showRealObject: true,
                showElectrodes: true,
                showSolution: true,
                showConductivityMeter: true,
                showIons: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Conductivity (with concentration, ion mobility)',
                    constant: 'Cell constant, temperature',
                    law: 'κ = G × cell constant, Λm = κ/c'
                },
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 14. ENVIRONMENTAL CHEMISTRY =====
        'greenhouseEffectDiagram': {
            name: 'Greenhouse Effect',
            category: 'Environmental Chemistry',
            description: 'IR radiation trapping by gases',
            type: 'greenhouse_effect',
            defaultOptions: {
                title: 'Greenhouse Effect',
                showSunlight: true,
                showAtmosphere: true,
                showReflection: true,
                showTrapping: true,
                showGreenhouseGases: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'ozoneDepletionDiagram': {
            name: 'Ozone Layer Depletion',
            category: 'Environmental Chemistry',
            description: 'CFCs destroying ozone',
            type: 'ozone_depletion',
            defaultOptions: {
                title: 'Ozone Depletion',
                showOzoneLayer: true,
                showCFCs: true,
                showChainReaction: true,
                showUVProtection: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'acidRainDiagram': {
            name: 'Acid Rain Formation',
            category: 'Environmental Chemistry',
            description: 'SO₂ and NO₂ forming acids',
            type: 'acid_rain',
            defaultOptions: {
                title: 'Acid Rain',
                showEmissions: true,
                showAtmosphericReactions: true,
                showPrecipitation: true,
                showEffects: true,
                width: 1000,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'carbonCycleDiagram': {
            name: 'Carbon Cycle',
            category: 'Environmental Chemistry',
            description: 'Natural carbon flow',
            type: 'carbon_cycle',
            defaultOptions: {
                title: 'Carbon Cycle',
                showAtmosphere: true,
                showPhotosynthesis: true,
                showRespiration: true,
                showFossilFuels: true,
                showOceans: true,
                width: 1100,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'nitrogenCycleDiagram': {
            name: 'Nitrogen Cycle',
            category: 'Environmental Chemistry',
            description: 'Nitrogen transformations in nature',
            type: 'nitrogen_cycle',
            defaultOptions: {
                title: 'Nitrogen Cycle',
                showNitrogenFixation: true,
                showNitrification: true,
                showDenitrification: true,
                showAssimilation: true,
                width: 1100,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'waterPollutionDiagram': {
            name: 'Water Pollution Types',
            category: 'Environmental Chemistry',
            description: 'Sources and effects of water pollution',
            type: 'water_pollution',
            defaultOptions: {
                title: 'Water Pollution',
                showPointSources: true,
                showNonPointSources: true,
                showPollutantTypes: true,
                showEffects: true,
                width: 1100,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 15. BIOCHEMISTRY =====
        'aminoAcidStructureDiagram': {
            name: 'Amino Acid Structure',
            category: 'Biochemistry',
            description: 'General structure and zwitterion',
            type: 'amino_acid',
            aminoAcid: 'glycine',
            defaultOptions: {
                title: 'Amino Acid Structure',
                showGeneralStructure: true,
                showZwitterion: true,
                showpHEffect: true,
                showRGroups: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'peptideBondDiagram': {
            name: 'Peptide Bond Formation',
            category: 'Biochemistry',
            description: 'Condensation forming peptide bond',
            type: 'peptide_bond',
            defaultOptions: {
                title: 'Peptide Bond Formation',
                showAminoAcids: true,
                showCondensation: true,
                showWaterLoss: true,
                showPeptideBond: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'proteinStructureLevelsDiagram': {
            name: 'Protein Structure Levels',
            category: 'Biochemistry',
            description: 'Primary, secondary, tertiary, quaternary',
            type: 'protein_structure',
            defaultOptions: {
                title: 'Protein Structure Levels',
                showPrimary: true,
                showSecondary: true,
                showTertiary: true,
                showQuaternary: true,
                width: 1100,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'enzymeActionDiagram': {
            name: 'Enzyme-Substrate Complex',
            category: 'Biochemistry',
            description: 'Lock and key / induced fit',
            type: 'enzyme_action',
            model: 'induced_fit',
            defaultOptions: {
                title: 'Enzyme Action',
                showEnzyme: true,
                showSubstrate: true,
                showESComplex: true,
                showProducts: true,
                showActiveSite: true,
                width: 1100,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'dnaStructureDiagram': {
            name: 'DNA Double Helix',
            category: 'Biochemistry',
            description: 'DNA structure and base pairing',
            type: 'dna_structure',
            defaultOptions: {
                title: 'DNA Structure',
                showDoubleHelix: true,
                showBasePairs: true,
                showSugarPhosphateBackbone: true,
                showComplementarity: true,
                width: 900,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'carbohydrateStructureDiagram': {
            name: 'Carbohydrate Structures',
            category: 'Biochemistry',
            description: 'Monosaccharides to polysaccharides',
            type: 'carbohydrate_structure',
            carbohydrate: 'glucose',
            defaultOptions: {
                title: 'Carbohydrate Structures',
                showLinear: true,
                showRing: true,
                showPolysaccharide: true,
                showGlycosidicBond: true,
                width: 1100,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'lipidStructureDiagram': {
            name: 'Lipid Structure',
            category: 'Biochemistry',
            description: 'Triglycerides and phospholipids',
            type: 'lipid_structure',
            lipidType: 'triglyceride',
            defaultOptions: {
                title: 'Lipid Structure',
                showGlycerol: true,
                showFattyAcids: true,
                showEsterBonds: true,
                showPhospholipid: false,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },
        // ===== 16. LABORATORY CHEMISTRY =====
        
        // ===== SOLVE-AS-YOU-DRAW DIAGRAMS =====
        
        'laboratoryGlasswareDiagram': {
            name: 'Laboratory Glassware Identification',
            category: 'Laboratory Chemistry',
            description: 'Common lab equipment and their uses',
            type: 'laboratory_glassware',
            defaultOptions: {
                title: 'Laboratory Glassware',
                showBeakers: true,
                showFlasks: true,
                showPipettes: true,
                showBurettes: true,
                showMeasuringCylinders: true,
                showLabels: true,
                showUses: true,
                width: 1200,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'dilutionCalculationDiagram': {
            name: 'Dilution Calculation Diagram',
            category: 'Laboratory Chemistry',
            description: 'M₁V₁ = M₂V₂ visual representation',
            type: 'dilution_calculation',
            initialConcentration: 1.0,
            initialVolume: 10,
            finalVolume: 100,
            defaultOptions: {
                title: 'Dilution Calculation',
                showInitialSolution: true,
                showFinalSolution: true,
                showWaterAddition: true,
                showCalculation: true,
                showEquation: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'standardSolutionPreparation': {
            name: 'Standard Solution Preparation',
            category: 'Laboratory Chemistry',
            description: 'Steps to prepare solution of known concentration',
            type: 'standard_solution',
            solute: 'NaCl',
            concentration: 0.1,
            volume: 250,
            defaultOptions: {
                title: 'Standard Solution Preparation',
                showWeighing: true,
                showDissolution: true,
                showTransfer: true,
                showDilution: true,
                showCalculations: true,
                width: 1100,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'serialDilutionDiagram': {
            name: 'Serial Dilution Diagram',
            category: 'Laboratory Chemistry',
            description: 'Stepwise dilution for concentration series',
            type: 'serial_dilution',
            dilutionFactor: 10,
            numberOfSteps: 5,
            defaultOptions: {
                title: 'Serial Dilution',
                showAllSteps: true,
                showConcentrations: true,
                showTransfers: true,
                showCalculations: true,
                width: 1200,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'pipetteTechniqueDiagram': {
            name: 'Pipette Technique',
            category: 'Laboratory Chemistry',
            description: 'Correct pipetting procedure',
            type: 'pipette_technique',
            pipetteType: 'volumetric',
            defaultOptions: {
                title: 'Pipette Technique',
                showFilling: true,
                showMeniscusReading: true,
                showDelivery: true,
                showDraining: true,
                showCommonErrors: true,
                width: 1000,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'filtrationMethodsDiagram': {
            name: 'Filtration Methods',
            category: 'Laboratory Chemistry',
            description: 'Gravity, vacuum, and hot filtration',
            type: 'filtration_methods',
            defaultOptions: {
                title: 'Filtration Methods',
                showGravityFiltration: true,
                showVacuumFiltration: true,
                showHotFiltration: true,
                showApplications: true,
                width: 1100,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'dryingMethodsDiagram': {
            name: 'Drying Methods',
            category: 'Laboratory Chemistry',
            description: 'Oven, desiccator, and drying agents',
            type: 'drying_methods',
            defaultOptions: {
                title: 'Drying Methods',
                showOvenDrying: true,
                showDesiccator: true,
                showDryingAgents: true,
                showApplications: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'heatingMethodsDiagram': {
            name: 'Heating Methods',
            category: 'Laboratory Chemistry',
            description: 'Bunsen burner, hot plate, water bath, oil bath',
            type: 'heating_methods',
            defaultOptions: {
                title: 'Heating Methods',
                showBunsenBurner: true,
                showHotPlate: true,
                showWaterBath: true,
                showOilBath: true,
                showSafetyNotes: true,
                width: 1100,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'laboratoryErrorsDiagram': {
            name: 'Types of Laboratory Errors',
            category: 'Laboratory Chemistry',
            description: 'Systematic vs random errors',
            type: 'laboratory_errors',
            defaultOptions: {
                title: 'Laboratory Errors',
                showSystematicErrors: true,
                showRandomErrors: true,
                showExamples: true,
                showMinimization: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'significantFiguresDiagram': {
            name: 'Significant Figures in Measurements',
            category: 'Laboratory Chemistry',
            description: 'Rules and calculations',
            type: 'significant_figures',
            defaultOptions: {
                title: 'Significant Figures',
                showRules: true,
                showExamples: true,
                showCalculations: true,
                showRounding: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'calibrationCurveDiagram': {
            name: 'Calibration Curve',
            category: 'Laboratory Chemistry',
            description: 'Standard curve for unknown determination',
            type: 'calibration_curve',
            defaultOptions: {
                title: 'Calibration Curve',
                showStandards: true,
                showCurve: true,
                showUnknown: true,
                showInterpolation: true,
                showR2Value: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'laboratoryWasteDisposalDiagram': {
            name: 'Laboratory Waste Disposal',
            category: 'Laboratory Chemistry',
            description: 'Proper disposal of chemical waste',
            type: 'waste_disposal',
            defaultOptions: {
                title: 'Waste Disposal',
                showWasteCategories: true,
                showContainers: true,
                showProcedures: true,
                showSafety: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'safetyEquipmentDiagram': {
            name: 'Laboratory Safety Equipment',
            category: 'Laboratory Chemistry',
            description: 'Safety goggles, gloves, fume hood, etc.',
            type: 'safety_equipment',
            defaultOptions: {
                title: 'Laboratory Safety Equipment',
                showPPE: true,
                showEmergencyEquipment: true,
                showFumeHood: true,
                showSafetyShower: true,
                showEyeWash: true,
                width: 1100,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        // ===== LABORATORY APPARATUS DIAGRAMS (Read-as-you-draw) =====

        'buretteApparatus': {
            name: 'Burette Setup and Reading',
            category: 'Laboratory Chemistry',
            description: 'Precise volume delivery for titrations',
            type: 'apparatus_diagram',
            apparatusType: 'burette',
            defaultOptions: {
                title: 'Burette',
                showRealObject: true,
                showBurette: true,
                showGraduations: true,
                showMeniscus: true,
                showTap: true,
                showStand: true,
                showReadingTechnique: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Volume delivered (difference between readings)',
                    constant: 'Graduation precision (typically ±0.05 mL)',
                    law: 'Read at eye level, bottom of meniscus, V_delivered = V_final - V_initial'
                },
                width: 600,
                height: 1000,
                backgroundColor: '#ffffff'
            }
        },

        'pipetteApparatus': {
            name: 'Pipette (Volumetric and Graduated)',
            category: 'Laboratory Chemistry',
            description: 'Accurate volume transfer',
            type: 'apparatus_diagram',
            apparatusType: 'pipette',
            pipetteType: 'volumetric',
            volume: 25,
            defaultOptions: {
                title: 'Volumetric Pipette',
                showRealObject: true,
                showPipette: true,
                showCalibrationMark: true,
                showPipetteFiller: true,
                showFillingTechnique: true,
                showDeliveryTechnique: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Volume transferred (fixed for volumetric)',
                    constant: 'Calibrated volume (e.g., 25.00 mL)',
                    law: 'Fill to mark, deliver completely, accuracy ±0.03 mL'
                },
                width: 600,
                height: 1000,
                backgroundColor: '#ffffff'
            }
        },

        'volumetricFlaskDetailedApparatus': {
            name: 'Volumetric Flask - Detailed Use',
            category: 'Laboratory Chemistry',
            description: 'Preparing exact volume solutions',
            type: 'apparatus_diagram',
            apparatusType: 'volumetric_flask_detailed',
            volume: 250,
            defaultOptions: {
                title: 'Volumetric Flask',
                showRealObject: true,
                showFlask: true,
                showCalibrationLine: true,
                showStopper: true,
                showFillingProcedure: true,
                showMixingTechnique: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Solution concentration (c = n/V)',
                    constant: 'Flask volume (precisely calibrated)',
                    law: 'Fill to mark at eye level, temperature-dependent volume'
                },
                width: 600,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'beakerApparatus': {
            name: 'Beaker - Uses and Limitations',
            category: 'Laboratory Chemistry',
            description: 'General purpose container',
            type: 'apparatus_diagram',
            apparatusType: 'beaker',
            volume: 250,
            defaultOptions: {
                title: 'Beaker',
                showRealObject: true,
                showBeaker: true,
                showGraduations: true,
                showStirringRod: true,
                showPourSpout: true,
                showLimitations: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Approximate volume (not precise)',
                    constant: 'Shape, general purpose use',
                    law: 'NOT for accurate measurement (±5% error), use for mixing/heating'
                },
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'conicalFlaskApparatus': {
            name: 'Conical (Erlenmeyer) Flask',
            category: 'Laboratory Chemistry',
            description: 'Ideal for titrations and swirling',
            type: 'apparatus_diagram',
            apparatusType: 'conical_flask',
            volume: 250,
            defaultOptions: {
                title: 'Conical Flask',
                showRealObject: true,
                showFlask: true,
                showShape: true,
                showSwirlingAction: true,
                showTitrationUse: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Contents being mixed/reacted',
                    constant: 'Conical shape prevents splashing',
                    law: 'Wide base for stability, narrow top reduces evaporation'
                },
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'measuringCylinderDetailedApparatus': {
            name: 'Measuring Cylinder - Detailed',
            category: 'Laboratory Chemistry',
            description: 'Medium precision volume measurement',
            type: 'apparatus_diagram',
            apparatusType: 'measuring_cylinder_detailed',
            volume: 100,
            defaultOptions: {
                title: 'Measuring Cylinder',
                showRealObject: true,
                showCylinder: true,
                showGraduations: true,
                showMeniscus: true,
                showReadingPosition: true,
                showAccuracy: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Volume measured',
                    constant: 'Graduation precision (±1 mL for 100 mL)',
                    law: 'Read at bottom of meniscus, more accurate than beaker, less than pipette'
                },
                width: 600,
                height: 1000,
                backgroundColor: '#ffffff'
            }
        },

        'roundBottomFlaskApparatus': {
            name: 'Round-Bottom Flask',
            category: 'Laboratory Chemistry',
            description: 'Heating and distillation vessel',
            type: 'apparatus_diagram',
            apparatusType: 'round_bottom_flask',
            volume: 250,
            defaultOptions: {
                title: 'Round-Bottom Flask',
                showRealObject: true,
                showFlask: true,
                showNecks: true,
                showClampPosition: true,
                showHeatingSetup: true,
                showApplications: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Temperature, reaction progress',
                    constant: 'Round shape for even heating',
                    law: 'Never heat when empty, use with clamp/heating mantle'
                },
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'watchGlassApparatus': {
            name: 'Watch Glass',
            category: 'Laboratory Chemistry',
            description: 'Evaporation and covering beakers',
            type: 'apparatus_diagram',
            apparatusType: 'watch_glass',
            defaultOptions: {
                title: 'Watch Glass',
                showRealObject: true,
                showWatchGlass: true,
                showEvaporationUse: true,
                showCoveringUse: true,
                showWeighingUse: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Solution evaporation, contents',
                    constant: 'Concave shape, glass material',
                    law: 'Used for evaporation, covering, weighing solids'
                },
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'crucibleApparatus': {
            name: 'Crucible and Lid',
            category: 'Laboratory Chemistry',
            description: 'High temperature heating vessel',
            type: 'apparatus_diagram',
            apparatusType: 'crucible',
            material: 'porcelain',
            defaultOptions: {
                title: 'Crucible',
                showRealObject: true,
                showCrucible: true,
                showLid: true,
                showPipeclayTriangle: true,
                showHeating: true,
                showApplications: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Mass (before/after heating), temperature',
                    constant: 'Heat resistance, crucible mass (when empty)',
                    law: 'Use for high-temp heating, mass determination by difference'
                },
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'evaporatingDishApparatus': {
            name: 'Evaporating Dish',
            category: 'Laboratory Chemistry',
            description: 'Evaporating solutions to dryness',
            type: 'apparatus_diagram',
            apparatusType: 'evaporating_dish',
            defaultOptions: {
                title: 'Evaporating Dish',
                showRealObject: true,
                showDish: true,
                showHeatingSetup: true,
                showEvaporation: true,
                showCrystallization: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Solvent mass (evaporates), solute crystallizes',
                    constant: 'Dish mass, wide surface area',
                    law: 'Large surface area for faster evaporation'
                },
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'funnelapparatus': {
            name: 'Funnel (Powder and Filter)',
            category: 'Laboratory Chemistry',
            description: 'Transferring liquids and filtration',
            type: 'apparatus_diagram',
            apparatusType: 'funnel',
            funnelType: 'filter',
            defaultOptions: {
                title: 'Funnel',
                showRealObject: true,
                showPowderFunnel: true,
                showFilterFunnel: true,
                showFilterPaper: true,
                showFolding: true,
                showFiltration: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Volume transferred, solid-liquid separation',
                    constant: 'Funnel angle, stem diameter',
                    law: 'Powder funnel: wide stem, Filter funnel: holds filter paper'
                },
                width: 800,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },
        'buchnerFunnelApparatus': {
            name: 'Buchner Funnel (Vacuum Filtration)',
            category: 'Laboratory Chemistry',
            description: 'Fast filtration under reduced pressure',
            type: 'apparatus_diagram',
            apparatusType: 'buchner_funnel',
            defaultOptions: {
                title: 'Buchner Funnel',
                showRealObject: true,
                showBuchnerFunnel: true,
                showFilterPaper: true,
                showSideArmFlask: true,
                showVacuumConnection: true,
                showRubberAdapter: true,
                showFiltration: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Filtrate collected, solid on filter',
                    constant: 'Vacuum pressure, filter paper size',
                    law: 'Vacuum speeds filtration, solid remains dry'
                },
                width: 800,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'desiccatorApparatus': {
            name: 'Desiccator',
            category: 'Laboratory Chemistry',
            description: 'Drying and storing hygroscopic substances',
            type: 'apparatus_diagram',
            apparatusType: 'desiccator',
            desiccant: 'silica gel',
            defaultOptions: {
                title: 'Desiccator',
                showRealObject: true,
                showDesiccator: true,
                showDesiccant: true,
                showPerforatedPlate: true,
                showSample: true,
                showGreasedRim: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Sample moisture content (decreases)',
                    constant: 'Desiccant absorption capacity',
                    law: 'Desiccant removes moisture, maintain dry atmosphere'
                },
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'mortar PestleApparatus': {
            name: 'Mortar and Pestle',
            category: 'Laboratory Chemistry',
            description: 'Grinding solids to powder',
            type: 'apparatus_diagram',
            apparatusType: 'mortar_pestle',
            material: 'porcelain',
            defaultOptions: {
                title: 'Mortar and Pestle',
                showRealObject: true,
                showMortar: true,
                showPestle: true,
                showGrindingAction: true,
                showApplications: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Particle size (decreases), surface area (increases)',
                    constant: 'Total mass of solid',
                    law: 'Increases surface area for faster dissolution/reaction'
                },
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'spatulaApparatus': {
            name: 'Spatula',
            category: 'Laboratory Chemistry',
            description: 'Transferring solid chemicals',
            type: 'apparatus_diagram',
            apparatusType: 'spatula',
            defaultOptions: {
                title: 'Spatula',
                showRealObject: true,
                showSpatula: true,
                showTransferTechnique: true,
                showTypes: true,
                showCleaning: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Solid transferred',
                    constant: 'Spatula cleanliness (avoid contamination)',
                    law: 'Clean between uses, never use wet spatula'
                },
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'stirringRodApparatus': {
            name: 'Glass Stirring Rod',
            category: 'Laboratory Chemistry',
            description: 'Mixing and transferring liquids',
            type: 'apparatus_diagram',
            apparatusType: 'stirring_rod',
            defaultOptions: {
                title: 'Stirring Rod',
                showRealObject: true,
                showRod: true,
                showStirringTechnique: true,
                showPouringAid: true,
                showDecantation: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Solution homogeneity (increases with stirring)',
                    constant: 'Rod material (glass), inert nature',
                    law: 'Prevents splashing, aids controlled pouring'
                },
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'thermometerApparatus': {
            name: 'Laboratory Thermometer',
            category: 'Laboratory Chemistry',
            description: 'Temperature measurement',
            type: 'apparatus_diagram',
            apparatusType: 'thermometer',
            range: '-10 to 110°C',
            defaultOptions: {
                title: 'Laboratory Thermometer',
                showRealObject: true,
                showThermometer: true,
                showScale: true,
                showBulb: true,
                showReadingTechnique: true,
                showCalibration: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Temperature reading',
                    constant: 'Calibration, scale divisions',
                    law: 'Read at eye level, allow equilibration, ±0.5°C accuracy'
                },
                width: 600,
                height: 1000,
                backgroundColor: '#ffffff'
            }
        },

        'dropperApparatus': {
            name: 'Dropper (Teat Pipette)',
            category: 'Laboratory Chemistry',
            description: 'Adding small volumes dropwise',
            type: 'apparatus_diagram',
            apparatusType: 'dropper',
            defaultOptions: {
                title: 'Dropper',
                showRealObject: true,
                showDropper: true,
                showBulb: true,
                showTip: true,
                showDropwiseAddition: true,
                showApplications: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Volume added (approximate drops)',
                    constant: 'Drop size (≈0.05 mL), imprecise measurement',
                    law: 'For adding small amounts, NOT for accurate measurement'
                },
                width: 600,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'testTubeApparatus': {
            name: 'Test Tube and Holder',
            category: 'Laboratory Chemistry',
            description: 'Small-scale reactions and tests',
            type: 'apparatus_diagram',
            apparatusType: 'test_tube',
            defaultOptions: {
                title: 'Test Tube',
                showRealObject: true,
                showTestTube: true,
                showHolder: true,
                showRack: true,
                showHeatingTechnique: true,
                showSafetyNotes: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Reaction contents, temperature',
                    constant: 'Small scale (few mL), cylindrical shape',
                    law: 'Heat gently at angle, point away from people'
                },
                width: 700,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'boilingTubeApparatus': {
            name: 'Boiling Tube',
            category: 'Laboratory Chemistry',
            description: 'Larger test tube for heating',
            type: 'apparatus_diagram',
            apparatusType: 'boiling_tube',
            defaultOptions: {
                title: 'Boiling Tube',
                showRealObject: true,
                showBoilingTube: true,
                showComparison: true,
                showHeating: true,
                showApplications: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Contents volume, temperature',
                    constant: 'Larger than test tube, thicker glass',
                    law: 'For reactions requiring heating, more robust'
                },
                width: 700,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'retortStandApparatus': {
            name: 'Retort Stand and Clamps',
            category: 'Laboratory Chemistry',
            description: 'Supporting apparatus safely',
            type: 'apparatus_diagram',
            apparatusType: 'retort_stand',
            defaultOptions: {
                title: 'Retort Stand',
                showRealObject: true,
                showStand: true,
                showBossHead: true,
                showClamp: true,
                showRing: true,
                showSetupExamples: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Height and position of clamps',
                    constant: 'Stability, heavy base',
                    law: 'Essential for safe support of glassware'
                },
                width: 800,
                height: 1000,
                backgroundColor: '#ffffff'
            }
        },

        'tripodApparatus': {
            name: 'Tripod and Wire Gauze',
            category: 'Laboratory Chemistry',
            description: 'Supporting vessels for heating',
            type: 'apparatus_diagram',
            apparatusType: 'tripod',
            defaultOptions: {
                title: 'Tripod and Wire Gauze',
                showRealObject: true,
                showTripod: true,
                showWireGauze: true,
                showBunsenBurner: true,
                showHeatingSetup: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Temperature of vessel above',
                    constant: 'Tripod stability, gauze distribution of heat',
                    law: 'Gauze spreads heat evenly, prevents cracking'
                },
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'bunsenBurnerApparatus': {
            name: 'Bunsen Burner',
            category: 'Laboratory Chemistry',
            description: 'Adjustable flame heating source',
            type: 'apparatus_diagram',
            apparatusType: 'bunsen_burner',
            defaultOptions: {
                title: 'Bunsen Burner',
                showRealObject: true,
                showBurner: true,
                showAirHole: true,
                showGasControl: true,
                showFlameTypes: true,
                showSafetyProcedure: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Flame type (yellow/safety vs blue/roaring)',
                    constant: 'Gas source, burner design',
                    law: 'Open air hole → blue flame (hotter), closed → yellow (safer)'
                },
                width: 700,
                height: 1000,
                backgroundColor: '#ffffff'
            }
        },

        'hotPlateApparatus': {
            name: 'Hot Plate with Stirrer',
            category: 'Laboratory Chemistry',
            description: 'Electric heating and magnetic stirring',
            type: 'apparatus_diagram',
            apparatusType: 'hot_plate',
            defaultOptions: {
                title: 'Hot Plate',
                showRealObject: true,
                showHotPlate: true,
                showTemperatureControl: true,
                showStirBar: true,
                showStirringFunction: true,
                showSafety: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Temperature, stirring speed',
                    constant: 'Electric heating, precise control',
                    law: 'Safer than open flame, allows simultaneous stirring'
                },
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'waterBathApparatus': {
            name: 'Water Bath',
            category: 'Laboratory Chemistry',
            description: 'Gentle controlled heating',
            type: 'apparatus_diagram',
            apparatusType: 'water_bath',
            temperature: 60,
            defaultOptions: {
                title: 'Water Bath',
                showRealObject: true,
                showBath: true,
                showWater: true,
                showThermometer: true,
                showVesselSupport: true,
                showApplications: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Bath temperature, reaction temperature',
                    constant: 'Maximum temp ~100°C, even heating',
                    law:'Gentle uniform heating, max temp limited by water BP'
                },
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'oilBathApparatus': {
            name: 'Oil Bath',
            category: 'Laboratory Chemistry',
            description: 'High temperature controlled heating',
            type: 'apparatus_diagram',
            apparatusType: 'oil_bath',
            temperature: 150,
            defaultOptions: {
                title: 'Oil Bath',
                showRealObject: true,
                showBath: true,
                showOil: true,
                showThermometer: true,
                showHeatingSource: true,
                showSafety: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Bath temperature (up to 200°C+)',
                    constant: 'Oil type (mineral/silicone), even heating',
                    law: 'Higher temps than water bath, fire risk if overheated'
                },
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'heatingMantleApparatus': {
            name: 'Heating Mantle',
            category: 'Laboratory Chemistry',
            description: 'Electric heating for round-bottom flasks',
            type: 'apparatus_diagram',
            apparatusType: 'heating_mantle',
            defaultOptions: {
                title: 'Heating Mantle',
                showRealObject: true,
                showMantle: true,
                showFlask: true,
                showVariac: true,
                showInsulation: true,
                showSafety: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Temperature (with variac control)',
                    constant: 'Shaped to fit flask, electric heating',
                    law: 'No open flame, precise temp control, fits flask snugly'
                },
                width: 700,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'condenserApparatus': {
            name: 'Condenser (Liebig, Graham, Allihn)',
            category: 'Laboratory Chemistry',
            description: 'Cooling vapors back to liquid',
            type: 'apparatus_diagram',
            apparatusType: 'condenser',
            condenserType: 'liebig',
            defaultOptions: {
                title: 'Liebig Condenser',
                showRealObject: true,
                showCondenser: true,
                showWaterJacket: true,
                showWaterFlow: true,
                showVaporPath: true,
                showTypes: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Vapor → liquid condensation',
                    constant: 'Water in (bottom), water out (top)',
                    law: 'Cold water in at bottom (countercurrent flow), vapors condense'
                },
                width: 900,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'separatoryFunnelDetailedApparatus': {
            name: 'Separatory Funnel - Detailed Technique',
            category: 'Laboratory Chemistry',
            description: 'Liquid-liquid extraction technique',
            type: 'apparatus_diagram',
            apparatusType: 'separatory_funnel_detailed',
            defaultOptions: {
                title: 'Separatory Funnel Technique',
                showRealObject: true,
                showFunnel: true,
                showStopcock: true,
                showStopper: true,
                showShakingTechnique: true,
                showVenting: true,
                showLayerSeparation: true,
                showDraining: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Solute distribution (between layers)',
                    constant: 'Partition coefficient, density difference',
                    law: 'Shake with venting, allow layers to separate, drain lower layer first'
                },
                width: 900,
                height: 1000,
                backgroundColor: '#ffffff'
            }
        },

        'aspiratorApparatus': {
            name: 'Aspirator (Water Pump)',
            category: 'Laboratory Chemistry',
            description: 'Creating vacuum using water flow',
            type: 'apparatus_diagram',
            apparatusType: 'aspirator',
            defaultOptions: {
                title: 'Water Aspirator',
                showRealObject: true,
                showAspirator: true,
                showWaterFlow: true,
                showVacuumConnection: true,
                showTrap: true,
                showApplications: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Vacuum pressure (with water flow rate)',
                    constant: 'Venturi effect principle',
                    law: 'Fast water flow creates vacuum (Venturi), use trap to prevent backflow'
                },
                width: 800,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'vaccumPumpApparatus': {
            name: 'Vacuum Pump',
            category: 'Laboratory Chemistry',
            description: 'Mechanical vacuum for filtration/evaporation',
            type: 'apparatus_diagram',
            apparatusType: 'vacuum_pump',
            defaultOptions: {
                title: 'Vacuum Pump',
                showRealObject: true,
                showPump: true,
                showTrap: true,
                showConnections: true,
                showApplications: true,
                showSafety: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'System pressure (decreases)',
                    constant: 'Pump capacity, vacuum level achieved',
                    law: 'Creates lower pressure than aspirator, always use cold trap'
                },
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'rotaryEvaporatorApparatus': {
            name: 'Rotary Evaporator (Rotovap)',
            category: 'Laboratory Chemistry',
            description: 'Removing solvent under reduced pressure',
            type: 'apparatus_diagram',
            apparatusType: 'rotary_evaporator',
            defaultOptions: {
                title: 'Rotary Evaporator',
                showRealObject: true,
                showRotatingFlask: true,
                showWaterBath: true,
                showCondenser: true,
                showReceivingFlask: true,
                showVacuum: true,
                showRotation: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Solvent evaporation (under vacuum), concentration',
                    constant: 'Reduced pressure lowers BP, rotation increases surface area',
                    law: 'Vacuum + rotation + heat = fast gentle evaporation'
                },
                width: 1000,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'soxhletExtractorApparatus': {
            name: 'Soxhlet Extractor',
            category: 'Laboratory Chemistry',
            description: 'Continuous solid-liquid extraction',
            type: 'apparatus_diagram',
            apparatusType: 'soxhlet',
            defaultOptions: {
                title: 'Soxhlet Extractor',
                showRealObject: true,
                showExtractor: true,
                showThimble: true,
                showCondenser: true,
                showSolventFlask: true,
                showSiphon: true,
                showCycle: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Extract concentration (increases with cycles)',
                    constant: 'Solvent recycling, continuous extraction',
                    law: 'Solvent refluxes, extracts solid, siphons back - continuous cycle'
                },
                width: 800,
                height: 1100,
                backgroundColor: '#ffffff'
            }
        },

        'fumeHoodApparatus': {
            name: 'Fume Hood (Fume Cupboard)',
            category: 'Laboratory Chemistry',
            description: 'Ventilated enclosure for hazardous work',
            type: 'apparatus_diagram',
            apparatusType: 'fume_hood',
            defaultOptions: {
                title: 'Fume Hood',
                showRealObject: true,
                showHood: true,
                showSash: true,
                showAirflow: true,
                showWorkArea: true,
                showSafetyFeatures: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Airflow (when sash moves), fume removal',
                    constant: 'Ventilation system, protective barrier',
                    law: 'Work 6 inches inside, sash as low as possible, airflow removes fumes'
                },
                width: 1000,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'laboratoryBalanceApparatus': {
            name: 'Laboratory Balance (Analytical)',
            category: 'Laboratory Chemistry',
            description: 'Precise mass measurement',
            type: 'apparatus_diagram',
            apparatusType: 'analytical_balance',
            precision: '±0.0001 g',
            defaultOptions: {
                title: 'Analytical Balance',
                showRealObject: true,
                showBalance: true,
                showDraftShield: true,
                showWeighingPan: true,
                showCalibration: true,
                showTechnique: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Mass reading (to 0.0001 g)',
                    constant: 'Calibration, sensitivity to air currents',
                    law: 'Tare before use, close draft shield, allow temperature equilibration'
                },
                width: 800,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'pHProbeApparatus': {
            name: 'pH Probe and Electrode',
            category: 'Laboratory Chemistry',
            description: 'Glass electrode for pH measurement',
            type: 'apparatus_diagram',
            apparatusType: 'ph_probe',
            defaultOptions: {
                title: 'pH Probe',
                showRealObject: true,
                showProbe: true,
                showGlassMembrane: true,
                showReferenceElectrode: true,
                showStorageSolution: true,
                showCalibration: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Voltage (with H⁺ concentration)',
                    constant: 'Nernst equation relationship, glass membrane',
                    law: 'Calibrate with buffers (pH 4, 7, 10), rinse between samples'
                },
                width: 700,
                height: 1000,
                backgroundColor: '#ffffff'
            }
        },

        'centrifugeApparatus': {
            name: 'Centrifuge',
            category: 'Laboratory Chemistry',
            description: 'Separating by centrifugal force',
            type: 'apparatus_diagram',
            apparatusType: 'centrifuge',
            defaultOptions: {
                title: 'Centrifuge',
                showRealObject: true,
                showCentrifuge: true,
                showRotor: true,
                showTubes: true,
                showBalancing: true,
                showPellet: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Separation of phases (by density)',
                    constant: 'Centrifugal force = mω²r',
                    law: 'Must balance tubes, speed in RPM, denser material pellets'
                },
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'autoclaveApparatus': {
            name: 'Autoclave',
            category: 'Laboratory Chemistry',
            description: 'High pressure steam sterilization',
            type: 'apparatus_diagram',
            apparatusType: 'autoclave',
            defaultOptions: {
                title: 'Autoclave',
                showRealObject: true,
                showChamber: true,
                showPressureGauge: true,
                showSteam: true,
                showSafety: true,
                showCycle: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Temperature, pressure (121°C, 15 psi)',
                    constant: 'Sterilization time (15-20 min)',
                    law: 'High pressure steam kills microorganisms, autoclave tape indicator'
                },
                width: 800,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'microPipetteApparatus': {
            name: 'Micropipette (Adjustable)',
            category: 'Laboratory Chemistry',
            description: 'Precise small volume transfer (μL)',
            type: 'apparatus_diagram',
            apparatusType: 'micropipette',
            range: '10-100 μL',
            defaultOptions: {
                title: 'Micropipette',
                showRealObject: true,
                showPipette: true,
                showPlunger: true,
                showVolumeAdjuster: true,
                showTip: true,
                showTechnique: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Volume set (adjustable), volume transferred',
                    constant: 'Precision (±1-2%), technique critical',
                    law: 'First stop = set volume, second stop = blow out, use appropriate tip'
                },
                width: 700,
                height: 1000,
                backgroundColor: '#ffffff'
            }
        },

        'vortexMixerApparatus': {
            name: 'Vortex Mixer',
            category: 'Laboratory Chemistry',
            description: 'Rapid mixing of small volumes',
            type: 'apparatus_diagram',
            apparatusType: 'vortex_mixer',
            defaultOptions: {
                title: 'Vortex Mixer',
                showRealObject: true,
                showMixer: true,
                showCup: true,
                showVortexMotion: true,
                showApplications: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Mixing speed, vortex formation',
                    constant: 'Oscillating motion principle',
                    law: 'Rapid mixing in test tubes, touch or continuous mode'
                },
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'magneticStirrerApparatus': {
            name: 'Magnetic Stirrer and Stir Bar',
            category: 'Laboratory Chemistry',
            description: 'Continuous stirring with rotating magnet',
            type: 'apparatus_diagram',
            apparatusType: 'magnetic_stirrer',
            defaultOptions: {
                title: 'Magnetic Stirrer',
                showRealObject: true,
                showStirrer: true,
                showStirBar: true,
                showRotatingField: true,
                showFlask: true,
                showSpeedControl: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Stirring speed, solution homogeneity',
                    constant: 'Magnetic coupling, stir bar size',
                    law: 'Rotating magnet drives stir bar, avoid too fast (decoupling)'
                },
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'glassElectrodeApparatus': {
            name: 'Glass Electrode Storage and Care',
            category: 'Laboratory Chemistry',
            description: 'Proper maintenance of pH electrode',
            type: 'apparatus_diagram',
            apparatusType: 'glass_electrode_care',
            defaultOptions: {
                title: 'Glass Electrode Care',
                showRealObject: true,
                showElectrode: true,
                showStorageSolution: true,
                showHydration: true,
                showCleaning: true,
                showCalibration: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Electrode condition (must stay hydrated)',
                    constant: 'Glass membrane properties',
                    law: 'Store in KCl solution, never let dry, calibrate regularly'
                },
                width: 700,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'labNotebookApparatus': {
            name: 'Laboratory Notebook Practices',
            category: 'Laboratory Chemistry',
            description: 'Recording experimental data properly',
            type: 'apparatus_diagram',
            apparatusType: 'lab_notebook',
            defaultOptions: {
                title: 'Laboratory Notebook',
                showRealObject: true,
                showNotebook: true,
                showDataEntry: true,
                showObservations: true,
                showCalculations: true,
                showBestPractices: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Experimental data recorded',
                    constant: 'Permanent record, ink only, dated',
                    law: 'Write in ink, date all entries, record all observations immediately'
                },
                width: 900,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        // Additional safety and technique apparatus

        'safetyShowerApparatus': {
            name: 'Safety Shower and Eye Wash',
            category: 'Laboratory Chemistry',
            description: 'Emergency washing stations',
            type: 'apparatus_diagram',
            apparatusType: 'safety_shower',
            defaultOptions: {
                title: 'Safety Shower',
                showRealObject: true,
                showShower: true,
                showEyeWash: true,
                showActivation: true,
                showProcedure: true,
                showMaintenance: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Use in emergency (chemical splash)',
                    constant: 'Location (accessible), water flow',
                    law: 'Rinse for 15+ minutes, remove contaminated clothing'
                },
                width: 800,
                height: 1000,
                backgroundColor: '#ffffff'
            }
        },
        'fireExtinguisherApparatus': {
            name: 'Fire Extinguisher (Types)',
            category: 'Laboratory Chemistry',
            description: 'Correct extinguisher for fire type',
            type: 'apparatus_diagram',
            apparatusType: 'fire_extinguisher',
            defaultOptions: {
                title: 'Fire Extinguisher',
                showRealObject: true,
                showExtinguisher: true,
                showFireClasses: true,
                showPASSMethod: true,
                showTypes: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Fire type (A, B, C, D)',
                    constant: 'PASS method: Pull, Aim, Squeeze, Sweep',
                    law: 'CO₂ for electrical, dry chemical for most, never water on oil/electrical'
                },
                width: 900,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'fireBlanketApparatus': {
            name: 'Fire Blanket',
            category: 'Laboratory Chemistry',
            description: 'Smothering clothing fires',
            type: 'apparatus_diagram',
            apparatusType: 'fire_blanket',
            defaultOptions: {
                title: 'Fire Blanket',
                showRealObject: true,
                showBlanket: true,
                showStorage: true,
                showUsage: true,
                showProcedure: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Emergency use (person on fire)',
                    constant: 'Smothers flames (removes oxygen)',
                    law: 'Stop, drop, wrap in blanket, roll to smother flames'
                },
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'spillKitApparatus': {
            name: 'Chemical Spill Kit',
            category: 'Laboratory Chemistry',
            description: 'Containing and cleaning chemical spills',
            type: 'apparatus_diagram',
            apparatusType: 'spill_kit',
            defaultOptions: {
                title: 'Spill Kit',
                showRealObject: true,
                showKit: true,
                showAbsorbent: true,
                showNeutralizingAgents: true,
                showPPE: true,
                showProcedure: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Spill containment and cleanup',
                    constant: 'Kit components, safety protocol',
                    law: 'Alert others, contain, absorb, neutralize (if safe), dispose properly'
                },
                width: 1000,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'ppeKitApparatus': {
            name: 'Personal Protective Equipment (PPE)',
            category: 'Laboratory Chemistry',
            description: 'Complete PPE for laboratory work',
            type: 'apparatus_diagram',
            apparatusType: 'ppe_kit',
            defaultOptions: {
                title: 'Laboratory PPE',
                showRealObject: true,
                showGoggles: true,
                showLabCoat: true,
                showGloves: true,
                showClosedShoes: true,
                showFaceShield: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'PPE type (based on hazard)',
                    constant: 'Minimum: goggles, coat, gloves, closed shoes',
                    law: 'PPE is last line of defense, always wear in lab'
                },
                width: 1000,
                height: 900,
                backgroundColor: '#ffffff'
            }
        }
    };

static getCategoryDescription(category) {
    const descriptions = {
        'Atomic Structure': 'Atoms, electrons, orbitals, isotopes, and periodic trends',
        'Chemical Bonding': 'Ionic, covalent, metallic bonds, molecular shapes, and intermolecular forces',
        'Chemical Reactions': 'Types of reactions, balancing, redox, and stoichiometry',
        'Stoichiometry': 'Mole concept, limiting reagents, empirical formulas, and calculations',
        'Energetics': 'Enthalpy, entropy, Gibbs energy, and thermochemical cycles',
        'Kinetics': 'Reaction rates, mechanisms, activation energy, and catalysis',
        'Equilibrium': 'Chemical equilibrium, Le Chatelier\'s principle, and equilibrium constants',
        'Acids & Bases': 'pH, acid-base theories, titrations, buffers, and indicators',
        'Redox': 'Oxidation-reduction, electrochemistry, cells, and electrolysis',
        'Organic Chemistry': 'Hydrocarbons, functional groups, isomers, reactions, and mechanisms',
        'Analytical Chemistry': 'Spectroscopy, chromatography, and instrumental analysis',
        'Inorganic Chemistry': 'Periodic trends, coordination compounds, and qualitative analysis',
        'Physical Chemistry': 'Colligative properties, phase diagrams, and adsorption',
        'Environmental Chemistry': 'Pollution, cycles, and atmospheric chemistry',
        'Biochemistry': 'Proteins, carbohydrates, lipids, DNA, and enzymes',
        'Laboratory Chemistry': 'Lab techniques, glassware, equipment, measurements, and safety procedures'
    };
    return descriptions[category] || 'Chemistry diagrams';
}

static getAnalogies(diagramKey) {
    const analogies = {
        // Atomic Structure
        'atomicStructureDiagram': ['Solar system with planets orbiting sun', 'Layers of an onion with nucleus at center'],
        'electronConfigurationDiagram': ['Filling seats in a theater row by row', 'Parking cars in a multi-level garage'],
        'isotopeDiagram': ['Identical twins with different weights', 'Same car model with different cargo'],
        
        // Bonding
        'ionicBondingDiagram': ['Transferring ownership of property', 'Giving away belongings to form attraction'],
        'covalentBondingDiagram': ['Sharing a blanket', 'Two people holding hands'],
        'hydrogenBondingDiagram': ['Velcro strips holding together', 'Magnets attracting but not permanently stuck'],
        
        // Reactions
        'balancedEquationDiagram': ['Recipe with exact ingredient ratios', 'Balanced see-saw with equal weights'],
        'combustionReactionDiagram': ['Burning wood in fireplace', 'Car engine burning gasoline'],
        
        // Energetics
        'enthalpyProfileDiagram': ['Hill or valley representing energy barrier', 'Activation energy like pushing boulder over hill'],
        'calorimetryApparatus': ['Insulated coffee cup keeping heat in', 'Thermos measuring temperature change'],
        
        // Kinetics
        'collisionTheoryDiagram': ['Cars colliding at intersection', 'Billiard balls hitting each other'],
        'maxwellBoltzmannDistribution': ['Speed distribution of cars on highway', 'Height distribution of people'],
        'clockReactionApparatus': ['Stopwatch for a race', 'Timer showing when reaction completes'],
        
        // Equilibrium
        'equilibriumDiagram': ['Water level equalizing in connected containers', 'Crowded room with equal entry/exit rates'],
        'leChatellierPrincipleDiagram': ['Pushing a swing changes its motion', 'Squeezing balloon shifts air distribution'],
        
        // Acids & Bases
        'phScaleDiagram': ['Temperature scale from cold to hot', 'Spectrum from very acidic to very basic'],
        'titrationApparatus': ['Measuring exact amount to neutralize', 'Balancing flavors in cooking'],
        'bufferSolutionDiagram': ['Shock absorber in car', 'Cushion resisting compression'],
        
        // Redox
        'galvanicCellDiagram': ['Battery powering a device', 'Waterfall generating electricity'],
        'electrolyticCellDiagram': ['Charging a battery', 'Using electricity to split water'],
        'daniellCellApparatus': ['Two containers connected generating voltage', 'Chemical battery'],
        
        // Organic
        'structuralIsomersDiagram': ['Different arrangements of Lego blocks', 'Same letters spelling different words'],
        'distillationApparatus': ['Separating alcohol from wine', 'Purifying water by boiling'],
        'refluxApparatus': ['Cooking soup with lid on (vapors return)', 'Recycling vapors back to pot'],
        
        // Analytical
        'massSpectrumDiagram': ['Fingerprint identifying person', 'Barcode identifying product'],
        'chromatogramDiagram': ['Race where runners separate by speed', 'Sorting mail by destination'],
        'spectrophotometerApparatus': ['Measuring how much light passes through sunglasses', 'Color intensity meter'],
        
        // Inorganic
        'transitionMetalComplexDiagram': ['Central hub with spokes radiating out', 'Planet with moons orbiting'],
        'qualitativeAnalysisApparatus': ['Detective using clues to identify suspect', 'Color-coded test revealing identity'],
        
        // Physical
        'osmosisDiagram': ['Water flowing through filter', 'Pressure equalizing across membrane'],
        'phaseDiagramWater': ['Map showing regions of states', 'Weather map with pressure zones'],
        
        // Environmental
        'greenhouseEffectDiagram': ['Car heating up with windows closed', 'Blanket trapping body heat'],
        'carbonCycleDiagram': ['Money circulating in economy', 'Water cycle with evaporation and rain'],
        
        // Biochemistry
        'enzymeActionDiagram': ['Key fitting into lock', 'Glove fitting hand perfectly'],
        'dnaStructureDiagram': ['Twisted ladder', 'Spiral staircase with paired steps'],
        'peptideBondDiagram': ['Chain links connecting', 'Beads on a string'],
        
        // Laboratory Chemistry - Glassware
        'buretteApparatus': ['Graduated measuring cup with tap', 'Precise fuel dispenser at gas station'],
        'pipetteApparatus': ['Eye dropper with calibration', 'Precision syringe for exact dosing'],
        'volumetricFlaskDetailedApparatus': ['Bottle with exact fill line', 'Fuel tank with precise capacity mark'],
        'beakerApparatus': ['Coffee mug with rough volume marks', 'Measuring cup (approximate)'],
        'conicalFlaskApparatus': ['Funnel-shaped container', 'Wine decanter preventing spills'],
        'measuringCylinderDetailedApparatus': ['Rain gauge measuring precipitation', 'Graduated medicine cup'],
        'roundBottomFlaskApparatus': ['Light bulb shape for even heating', 'Spherical kettle'],
        'separatoryFunnelDetailedApparatus': ['Oil and vinegar separation', 'Gravy separator'],
        
        // Laboratory Chemistry - Heating
        'bunsenBurnerApparatus': ['Gas stove burner', 'Camping gas burner with adjustable flame'],
        'hotPlateApparatus': ['Electric stove top', 'Coffee maker hot plate'],
        'waterBathApparatus': ['Double boiler for gentle cooking', 'Sous vide water bath'],
        'oilBathApparatus': ['Deep fryer maintaining temperature', 'Fondue pot with oil'],
        'heatingMantleApparatus': ['Electric blanket for flask', 'Heated jacket wrapping around vessel'],
        
        // Laboratory Chemistry - Filtration
        'funnelApparatus': ['Kitchen funnel for liquids', 'Coffee filter cone'],
        'buchnerFunnelApparatus': ['Vacuum coffee maker filter', 'Shop-vac with filter'],
        'filterPaperFolding': ['Coffee filter in cone', 'Origami folding for better fit'],
        
        // Laboratory Chemistry - Separation
        'distillationApparatus': ['Moonshine still', 'Water purification by evaporation'],
        'fractionalDistillationApparatus': ['Oil refinery tower', 'Multi-stage purification column'],
        'condenserApparatus': ['Car radiator cooling fluid', 'Air conditioner condensing vapor'],
        'rotaryEvaporatorApparatus': ['Spin dryer removing water', 'Rotisserie evaporating marinade'],
        'chromatographyApparatus': ['Coffee filter showing dye separation', 'Paper towel absorbing colored water'],
        
        // Laboratory Chemistry - Measurement
        'analyticalBalanceApparatus': ['Jeweler\'s precision scale', 'Pharmacist\'s measuring scale'],
        'pHProbeApparatus': ['Pool pH tester', 'Soil acidity meter'],
        'thermometerApparatus': ['Meat thermometer', 'Fever thermometer'],
        'microPipetteApparatus': ['Precision eye dropper', 'Insulin syringe with exact dosing'],
        
        // Laboratory Chemistry - Mixing
        'magneticStirrerApparatus': ['Electric mixer in bowl', 'Magnetic compass being spun'],
        'vortexMixerApparatus': ['Blender creating vortex', 'Whirlpool in bathtub'],
        'stirringRodApparatus': ['Spoon stirring coffee', 'Chopstick mixing ingredients'],
        
        // Laboratory Chemistry - Techniques
        'recrystallizationApparatus': ['Making rock candy (pure crystals)', 'Freezing ice (pure water crystals)'],
        'meltingPointApparatus': ['Testing when butter melts', 'Determining freezing point of water'],
        'desiccatorApparatus': ['Sealed container with moisture absorber', 'Camera bag with silica gel packets'],
        'crucibleApparatus': ['Ceramic pot for high heat', 'Blacksmith\'s forge crucible'],
        'evaporatingDishApparatus': ['Shallow pan evaporating seawater for salt', 'Drying plate in sun'],
        
        // Laboratory Chemistry - Drying/Grinding
        'mortarPestleApparatus': ['Grinding coffee beans', 'Crushing garlic with mortar and pestle'],
        'spatulaApparatus': ['Kitchen spatula for transferring', 'Palette knife for art supplies'],
        'watchGlassApparatus': ['Small dish covering food', 'Saucer covering teacup'],
        
        // Laboratory Chemistry - Safety
        'fumeHoodApparatus': ['Kitchen exhaust hood', 'Paint spray booth with ventilation'],
        'safetyShowerApparatus': ['Emergency shower at pool', 'Beach shower for rinsing'],
        'fireExtinguisherApparatus': ['Fire extinguisher in kitchen', 'CO2 extinguisher for electronics'],
        'ppeKitApparatus': ['Construction worker safety gear', 'Hazmat suit for protection'],
        'spillKitApparatus': ['Cleaning supplies for mess', 'Car emergency spill kit'],
        
        // Laboratory Chemistry - Processing
        'centrifugeApparatus': ['Salad spinner separating water', 'Spin cycle in washing machine'],
        'autoclaveApparatus': ['Pressure cooker sterilizing', 'Hospital autoclave for instruments'],
        'vacuumPumpApparatus': ['Vacuum sealer removing air', 'Vacuum cleaner creating suction'],
        'aspiratorApparatus': ['Venturi vacuum from water flow', 'Garden hose vacuum attachment'],
        
        // Laboratory Chemistry - Specialized
        'soxhletExtractorApparatus': ['Coffee percolator recycling water', 'Continuous tea brewing system'],
        'glassElectrodeApparatus': ['Sensor that must stay wet', 'Contact lens requiring moisture'],
        'labNotebookApparatus': ['Ship captain\'s log book', 'Medical chart recording vital signs']
    };
    return analogies[diagramKey] || [];
}

static getSafetyConsiderations(diagramKey) {
    const safetyMap = {
        // Existing entries
        'titrationApparatus': ['Wear goggles', 'Use pipette filler', 'Handle acids/bases carefully'],
        'distillationApparatus': ['Check for cracks in glassware', 'Ensure water flow through condenser', 'Use anti-bumping granules'],
        'calorimetryApparatus': ['Use insulated container', 'Stir gently', 'Monitor temperature carefully'],
        'electrolysisCellApparatus': ['Low voltage only', 'Avoid short circuits', 'Ventilate for gas production'],
        'flameTestApparatus': ['Tie back hair', 'Clean wire between tests', 'Use safety goggles'],
        'gasCollectionApparatus': ['Check for leaks', 'Collect toxic gases in fume hood', 'Use gas syringe safely'],
        'refluxApparatus': ['Never seal system', 'Use proper heating', 'Allow cooling before disassembly'],
        
        // Laboratory Glassware
        'buretteApparatus': ['Check for leaks at tap', 'Rinse with solution before use', 'Read at eye level to avoid parallax error'],
        'pipetteApparatus': ['Always use pipette filler - NEVER mouth pipette', 'Check for chips on tip', 'Drain properly for accurate volume'],
        'volumetricFlaskDetailedApparatus': ['Don\'t overheat solutions', 'Mix by inversion with stopper secure', 'Allow hot solutions to cool before filling to mark'],
        'beakerApparatus': ['Use beaker tongs when hot', 'Don\'t heat when empty', 'Pour with stirring rod to prevent splashing'],
        'roundBottomFlaskApparatus': ['Always use clamp support', 'Never heat when sealed', 'Check for cracks before heating'],
        'testTubeApparatus': ['Point away from yourself and others when heating', 'Heat gently and intermittently', 'Use test tube holder'],
        
        // Heating Equipment
        'bunsenBurnerApparatus': ['Tie back long hair', 'Keep flammable materials away', 'Turn off gas when not in use', 'Use safety flame (yellow) when not heating'],
        'hotPlateApparatus': ['Don\'t touch hot surface', 'Turn off when leaving lab', 'Use heat-resistant gloves', 'Allow to cool before moving'],
        'waterBathApparatus': ['Don\'t let water boil dry', 'Use thermometer to monitor', 'Be careful of steam burns'],
        'oilBathApparatus': ['Never overheat oil (fire hazard)', 'Use high-temperature thermometer', 'Have fire extinguisher nearby', 'Don\'t add water to hot oil'],
        'heatingMantleApparatus': ['Check electrical connections', 'Don\'t exceed recommended temperature', 'Allow to cool before handling'],
        
        // Separation Equipment
        'fractionalDistillationApparatus': ['Ensure all joints properly connected', 'Check water flow direction', 'Use anti-bumping granules', 'Never heat sealed system'],
        'separatoryFunnelDetailedApparatus': ['Vent pressure regularly when shaking', 'Point stem away from people', 'Check stopcock doesn\'t leak', 'Support with ring stand'],
        'condenserApparatus': ['Water in at bottom, out at top', 'Secure all rubber tubing', 'Check for proper water flow', 'Don\'t allow to run dry'],
        'buchnerFunnelApparatus': ['Check vacuum connection secure', 'Use safety shield if under high vacuum', 'Release vacuum before disassembly'],
        'rotaryEvaporatorApparatus': ['Secure flask properly', 'Don\'t exceed bath temperature', 'Release vacuum slowly', 'Wear safety glasses'],
        
        // Filtration & Transfer
        'funnelApparatus': ['Support securely', 'Pour slowly to prevent overflow', 'Use appropriate size filter paper'],
        'separatingFunnelApparatus': ['Invert and vent frequently', 'Hold stopper while shaking', 'Allow layers to separate completely'],
        
        // Measurement Devices
        'analyticalBalanceApparatus': ['Never weigh hot objects', 'Close draft shields', 'Clean spills immediately', 'Calibrate regularly'],
        'pHProbeApparatus': ['Don\'t let electrode dry out', 'Rinse between samples', 'Store in storage solution', 'Handle glass bulb carefully'],
        'thermometerApparatus': ['Don\'t use as stirring rod', 'Avoid thermal shock', 'Mercury thermometers - report breaks immediately'],
        'microPipetteApparatus': ['Use proper tip size', 'Never exceed volume range', 'Pipette vertically', 'Don\'t lay down with liquid in tip'],
        
        // Mixing & Processing
        'magneticStirrerApparatus': ['Don\'t overheat', 'Retrieve stir bar carefully', 'Keep away from electronic devices'],
        'vortexMixerApparatus': ['Secure tube before activating', 'Don\'t use with open containers', 'Avoid splashing'],
        'centrifugeApparatus': ['Always balance tubes', 'Close lid before starting', 'Wait for complete stop before opening', 'Check for cracks in tubes'],
        
        // Specialized Equipment
        'autoclaveApparatus': ['Never open when pressurized', 'Use heat-resistant gloves', 'Allow pressure to release completely', 'Check door seal'],
        'fumeHoodApparatus': ['Keep sash at proper height', 'Don\'t block airflow vents', 'Work at least 6 inches inside', 'Check airflow before use'],
        'vacuumPumpApparatus': ['Use cold trap', 'Check for leaks', 'Don\'t pump corrosive vapors', 'Release vacuum before turning off'],
        'soxhletExtractorApparatus': ['Ensure all joints sealed', 'Use proper solvent amount', 'Monitor heating rate', 'Never leave unattended'],
        
        // Safety Equipment Usage
        'safetyShowerApparatus': ['Know location before emergency', 'Remove contaminated clothing', 'Rinse for minimum 15 minutes', 'Seek medical attention'],
        'fireExtinguisherApparatus': ['PASS method: Pull, Aim, Squeeze, Sweep', 'Evacuate if fire too large', 'Know extinguisher type', 'Report all fires'],
        'fireBlanketApparatus': ['Don\'t use on large fires', 'Cover person completely', 'Don\'t remove until cool', 'Seek medical help'],
        'spillKitApparatus': ['Alert others first', 'Contain spill before cleanup', 'Use appropriate neutralizer', 'Dispose in proper waste container'],
        'ppeKitApparatus': ['Goggles must fit properly', 'Lab coat fully buttoned', 'Gloves appropriate for chemical', 'Closed-toe shoes required'],
        
        // General Lab Practices
        'labNotebookApparatus': ['Record all observations immediately', 'Never erase - cross out errors', 'Date all entries', 'Keep in safe location'],
        'spatulaApparatus': ['Clean between uses', 'Never use wet spatula for moisture-sensitive chemicals', 'Don\'t touch chemicals with hands'],
        'stirringRodApparatus': ['Clean before and after use', 'Don\'t use to stir hot concentrated acids', 'Support when not in use'],
        'dropperApparatus': ['Never return excess chemical to stock bottle', 'Label if containing chemical', 'Clean thoroughly between uses'],
        'crucibleApparatus': ['Use crucible tongs when hot', 'Place on heat-resistant surface', 'Allow to cool in desiccator'],
        'evaporatingDishApparatus': ['Don\'t heat too rapidly', 'Use tongs for hot dishes', 'Watch for spattering'],
        'mortarPestleApparatus': ['Grind gently to avoid flying particles', 'Clean immediately after use', 'Don\'t grind explosive materials'],
        'desiccatorApparatus': ['Open carefully (may be under vacuum)', 'Grease rim lightly', 'Don\'t overload', 'Store in cool place'],
        'watchGlassApparatus': ['Handle edges carefully', 'Use tongs when hot', 'Place on heat-resistant surface'],
        'retortStandApparatus': ['Ensure heavy base for stability', 'Tighten clamps securely', 'Position over bench, not edge'],
        'tripodApparatus': ['Check wire gauze for holes', 'Ensure stable placement', 'Keep burner centered']
    };
    return safetyMap[diagramKey] || ['Follow standard laboratory safety procedures'];
}

static getDiagramApplications(diagramKey) {
    const applications = {
        // Existing entries
        'spectrophotometerApparatus': ['Water quality testing', 'Drug analysis', 'Environmental monitoring', 'Clinical diagnostics'],
        'gcmsApparatus': ['Forensics', 'Drug testing', 'Environmental analysis', 'Food safety'],
        'hplcApparatus': ['Pharmaceutical analysis', 'Protein purification', 'Quality control', 'Food testing'],
        'titrationApparatus': ['Water hardness testing', 'Vitamin C content', 'Acid strength determination', 'Standardizing solutions'],
        'electrolyticCellDiagram': ['Electroplating', 'Metal purification', 'Chlorine production', 'Aluminum extraction'],
        'distillationApparatus': ['Alcohol production', 'Water purification', 'Essential oil extraction', 'Petroleum refining'],
        'chromatographyApparatus': ['Drug testing', 'Plant pigment separation', 'Purity checking', 'Environmental monitoring'],
        // Laboratory Glassware
        'buretteApparatus': ['Acid-base titrations', 'Redox titrations', 'Complexometric titrations', 'Precise volume delivery'],
        'pipetteApparatus': ['Aliquot transfer', 'Sample preparation', 'Serial dilutions', 'Standard solution preparation'],
        'volumetricFlaskDetailedApparatus': ['Standard solution preparation', 'Dilutions', 'Sample preparation', 'Calibration solutions'],
        'beakerApparatus': ['Mixing solutions', 'Dissolving solids', 'Heating liquids', 'General purpose container'],
        'conicalFlaskApparatus': ['Titrations', 'Recrystallization', 'Mixing with swirling', 'Reactions with gas evolution'],
        'measuringCylinderDetailedApparatus': ['Approximate volume measurement', 'Density determination', 'Rough dilutions'],
        'roundBottomFlaskApparatus': ['Reflux reactions', 'Distillations', 'Rotary evaporation', 'Organic synthesis'],
        
        // Separation Techniques
        'fractionalDistillationApparatus': ['Crude oil refining', 'Separating liquid mixtures', 'Purifying solvents', 'Alcohol production'],
        'separatoryFunnelDetailedApparatus': ['Liquid-liquid extraction', 'Removing impurities', 'Isolating products', 'Caffeine extraction'],
        'buchnerFunnelApparatus': ['Rapid filtration', 'Product isolation', 'Removing precipitates', 'Recrystallization'],
        'rotaryEvaporatorApparatus': ['Solvent removal', 'Concentrating samples', 'Organic synthesis workup', 'Purification'],
        'recrystallizationApparatus': ['Purifying solids', 'Improving crystal quality', 'Removing impurities', 'Obtaining pure compounds'],
        'chromatographyApparatus': ['Separating mixtures', 'Identifying compounds', 'Purity analysis', 'Isolating natural products'],
        'soxhletExtractorApparatus': ['Natural product extraction', 'Lipid extraction', 'Removing contaminants', 'Continuous extraction'],
        
        // Heating Methods
        'bunsenBurnerApparatus': ['Flame tests', 'Sterilizing loops', 'Bending glass', 'General heating'],
        'hotPlateApparatus': ['Gentle heating', 'Magnetic stirring', 'Maintaining temperature', 'Evaporation'],
        'waterBathApparatus': ['Temperature-sensitive reactions', 'Gentle heating', 'Maintaining constant temperature', 'Enzyme reactions'],
        'oilBathApparatus': ['High-temperature reactions', 'Reflux reactions', 'Precise temperature control', 'Organic synthesis'],
        'heatingMantleApparatus': ['Organic synthesis', 'Distillation', 'Reflux', 'Safe electrical heating'],
        
        // Measurement & Analysis
        'analyticalBalanceApparatus': ['Precise mass determination', 'Gravimetric analysis', 'Standard preparation', 'Quality control'],
        'pHProbeApparatus': ['pH measurement', 'Titration monitoring', 'Water quality testing', 'Soil analysis'],
        'thermometerApparatus': ['Temperature monitoring', 'Melting point determination', 'Boiling point measurement', 'Reaction monitoring'],
        'microPipetteApparatus': ['Molecular biology', 'Clinical testing', 'Precise small volumes', 'Serial dilutions'],
        
        // Mixing & Processing
        'magneticStirrerApparatus': ['Continuous mixing', 'Dissolution', 'Homogeneous reactions', 'Titrations'],
        'vortexMixerApparatus': ['Rapid mixing of small volumes', 'Resuspending precipitates', 'Cell biology', 'Quick homogenization'],
        'centrifugeApparatus': ['Separating cells', 'Pelleting precipitates', 'Blood analysis', 'Protein purification'],
        'autoclaveApparatus': ['Sterilizing equipment', 'Media preparation', 'Waste treatment', 'Microbiology'],
        
        // Specialized Techniques
        'meltingPointApparatus': ['Compound identification', 'Purity determination', 'Quality control', 'Characterization'],
        'desiccatorApparatus': ['Drying hygroscopic samples', 'Storing moisture-sensitive chemicals', 'Cooling hot samples', 'Gravimetric analysis'],
        'vacuumPumpApparatus': ['Vacuum filtration', 'Degassing solvents', 'Freeze drying', 'Rotary evaporation'],
        'aspiratorApparatus': ['Vacuum filtration', 'Reducing pressure', 'Simple vacuum needs', 'Removing air'],
        
        // Qualitative Analysis
        'qualitativeAnalysisApparatus': ['Ion identification', 'Unknown analysis', 'Environmental testing', 'Forensic analysis'],
        'anionTestsApparatus': ['Water analysis', 'Soil testing', 'Industrial quality control', 'Unknown identification'],
        'flameTestApparatus': ['Metal ion identification', 'Qualitative analysis', 'Fireworks chemistry', 'Mineral identification'],
        
        // Safety Applications
        'fumeHoodApparatus': ['Handling volatile chemicals', 'Toxic gas reactions', 'Acid/base handling', 'Protecting laboratory workers'],
        'spillKitApparatus': ['Emergency response', 'Chemical spill cleanup', 'Acid/base neutralization', 'Laboratory safety'],
        'ppeKitApparatus': ['Personal protection', 'Chemical handling', 'Preventing exposure', 'Laboratory safety compliance'],
        
        // Documentation
        'labNotebookApparatus': ['Legal documentation', 'Reproducibility', 'Research records', 'Quality assurance', 'Patent applications'],
        
        // Industrial Chemistry
        'haberProcessApparatus': ['Ammonia production', 'Fertilizer manufacturing', 'Industrial chemistry', 'High-pressure synthesis'],
        'contactProcessApparatus': ['Sulfuric acid production', 'Industrial catalysis', 'Chemical manufacturing'],
        'chlorAlkaliCellApparatus': ['Chlorine production', 'Sodium hydroxide production', 'Industrial electrolysis', 'Chemical industry'],
        
        // Electrochemistry
        'daniellCellApparatus': ['Electrochemistry demonstrations', 'Voltage generation', 'Teaching galvanic cells', 'Battery principles'],
        'copperElectroplatingApparatus': ['Metal coating', 'Corrosion protection', 'Jewelry making', 'Electronics manufacturing'],
        'redoxTitrationApparatus': ['Iron determination', 'Oxidizing agent analysis', 'Water treatment analysis', 'Quality control'],
        
        // Analytical Instruments
        'massSpectrometerChemistry': ['Isotope analysis', 'Molecular weight determination', 'Unknown identification', 'Environmental testing'],
        'irSpectrometerApparatus': ['Functional group identification', 'Structural analysis', 'Quality control', 'Forensics'],
        'nmrSpectrometerApparatus': ['Structure elucidation', 'Purity analysis', 'Research', 'Drug development'],
        'atomicAbsorptionApparatus': ['Trace metal analysis', 'Environmental monitoring', 'Food safety', 'Clinical chemistry'],
        
        // Sample Preparation
        'osmometerApparatus': ['Molecular weight determination', 'Colligative properties', 'Biological solutions', 'Polymer analysis'],
        'conductivityCellApparatus': ['Water purity testing', 'Ion concentration', 'Solution analysis', 'Quality control'],
        'colorimeterApparatus': ['Concentration determination', 'Kinetics studies', 'Beer\'s Law experiments', 'Water quality']
    };
    return applications[diagramKey] || ['General chemistry applications'];
}

// ===== UTILITY METHODS =====
        
        static getDiagram(key) {
            return this.diagrams[key];
        }

        static getAllDiagrams() {
            return Object.keys(this.diagrams);
        }

        static getDiagramsByCategory(category) {
            return Object.entries(this.diagrams)
                .filter(([_, diagram]) => diagram.category === category)
                .reduce((acc, [key, diagram]) => {
                    acc[key] = diagram;
                    return acc;
                }, {});
        }

        static getAllCategories() {
            return [...new Set(Object.values(this.diagrams).map(d => d.category))];
        }

        static searchDiagrams(query) {
            const lowerQuery = query.toLowerCase();
            return Object.entries(this.diagrams)
                .filter(([key, diagram]) =>
                    diagram.name.toLowerCase().includes(lowerQuery) ||
                    diagram.description.toLowerCase().includes(lowerQuery) ||
                    diagram.category.toLowerCase().includes(lowerQuery) ||
                    key.toLowerCase().includes(lowerQuery)
                )
                .reduce((acc, [key, diagram]) => {
                    acc[key] = diagram;
                    return acc;
                }, {});
        }

        static getDiagramsByType(type) {
            return Object.entries(this.diagrams)
                .filter(([_, diagram]) => diagram.type === type)
                .reduce((acc, [key, diagram]) => {
                    acc[key] = diagram;
                    return acc;
                }, {});
        }

        static getApparatusDiagrams() {
            return Object.entries(this.diagrams)
                .filter(([_, diagram]) => diagram.type === 'apparatus_diagram')
                .reduce((acc, [key, diagram]) => {
                    acc[key] = diagram;
                    return acc;
                }, {});
        }

        static getDiagramStats() {
            const stats = {};
            this.getAllCategories().forEach(category => {
                const diagrams = this.getDiagramsByCategory(category);
                const apparatusDiagrams = Object.entries(diagrams)
                    .filter(([_, d]) => d.type === 'apparatus_diagram');
                const solveDiagrams = Object.entries(diagrams)
                    .filter(([_, d]) => d.type !== 'apparatus_diagram');
                
                stats[category] = {
                    total: Object.keys(diagrams).length,
                    apparatus: apparatusDiagrams.length,
                    solve: solveDiagrams.length,
                    diagrams: Object.keys(diagrams)
                };
            });
            return stats;
        }


        static getGoldenQuestions(diagramKey) {
            const diagram = this.diagrams[diagramKey];
            if (diagram && diagram.defaultOptions && diagram.defaultOptions.goldenQuestions) {
                return diagram.defaultOptions.goldenQuestions;
            }
            return null;
        }

        static getDiagramPedagogy(diagramKey) {
            const diagram = this.diagrams[diagramKey];
            if (!diagram) return null;

            const isApparatus = diagram.type === 'apparatus_diagram';
            
            return {
                name: diagram.name,
                category: diagram.category,
                type: isApparatus ? 'Read-as-you-draw (Apparatus)' : 'Solve-as-you-draw',
                approach: isApparatus ? 
                    'Draw real object → Label quantities → Identify relationships → Write equations' :
                    'Abstract representation → Apply laws → Solve numerically',
                goldenQuestions: this.getGoldenQuestions(diagramKey),
                analogies: this.getAnalogies(diagramKey),
                learningValue: isApparatus ?
                    'Visual-first reasoning: the diagram itself reveals the chemistry' :
                    'Problem-solving tool: visualize to solve'
            };
        }

        static getCategorySummary() {
            const categories = this.getAllCategories();
            const summary = {};
            
            categories.forEach(category => {
                const diagrams = this.getDiagramsByCategory(category);
                const apparatusCount = Object.values(diagrams)
                    .filter(d => d.type === 'apparatus_diagram').length;
                const solveCount = Object.keys(diagrams).length - apparatusCount;
                
                summary[category] = {
                    description: this.getCategoryDescription(category),
                    totalDiagrams: Object.keys(diagrams).length,
                    apparatusDiagrams: apparatusCount,
                    solveDiagrams: solveCount,
                    diagramKeys: Object.keys(diagrams)
                };
            });
            
            return summary;
        }

        static getCompleteDiagramList() {
            const categories = this.getAllCategories();
            const list = [];
            
            categories.forEach(category => {
                list.push(`\n=== ${category.toUpperCase()} ===`);
                const diagrams = this.getDiagramsByCategory(category);
                
                Object.entries(diagrams).forEach(([key, diagram]) => {
                    const type = diagram.type === 'apparatus_diagram' ? '[APPARATUS]' : '[SOLVE]';
                    list.push(`${type} ${diagram.name} - ${diagram.description}`);
                });
            });
            
            return list.join('\n');
        }

        static validateDiagram(diagramKey) {
            const diagram = this.diagrams[diagramKey];
            if (!diagram) {
                return { valid: false, error: 'Diagram not found' };
            }

            const required = ['name', 'category', 'description', 'type', 'defaultOptions'];
            const missing = required.filter(field => !diagram[field]);
            
            if (missing.length > 0) {
                return { valid: false, error: `Missing required fields: ${missing.join(', ')}` };
            }

            if (diagram.type === 'apparatus_diagram') {
                if (!diagram.apparatusType) {
                    return { valid: false, error: 'Apparatus diagram missing apparatusType' };
                }
                if (!diagram.defaultOptions.goldenQuestions) {
                    return { valid: false, error: 'Apparatus diagram missing goldenQuestions' };
                }
            }

            return { valid: true };
        }

        static getRandomDiagram(category = null) {
            let diagrams;
            if (category) {
                diagrams = this.getDiagramsByCategory(category);
            } else {
                diagrams = this.diagrams;
            }
            
            const keys = Object.keys(diagrams);
            const randomKey = keys[Math.floor(Math.random() * keys.length)];
            return { key: randomKey, diagram: diagrams[randomKey] };
        }

        static exportToJSON() {
            return JSON.stringify(this.diagrams, null, 2);
        }

        static getTotalCount() {
            return Object.keys(this.diagrams).length;
        }

        static getApparatusCount() {
            return Object.values(this.diagrams)
                .filter(d => d.type === 'apparatus_diagram').length;
        }

        static getSolveCount() {
            return this.getTotalCount() - this.getApparatusCount();
        }

        static getStatistics() {
            return {
                totalDiagrams: this.getTotalCount(),
                apparatusDiagrams: this.getApparatusCount(),
                solveDiagrams: this.getSolveCount(),
                categories: this.getAllCategories().length,
                categorySummary: this.getCategorySummary()
            };
        }

        static getCommonReagents() {
            return {
                acids: ['HCl', 'H₂SO₄', 'HNO₃', 'CH₃COOH'],
                bases: ['NaOH', 'KOH', 'NH₃', 'Ca(OH)₂'],
                oxidizingAgents: ['KMnO₄', 'K₂Cr₂O₇', 'H₂O₂'],
                reducingAgents: ['Fe²⁺', 'I⁻', 'SO₃²⁻', 'Zn'],
                indicators: ['Phenolphthalein', 'Methyl orange', 'Litmus', 'Universal indicator'],
                catalysts: ['V₂O₅', 'Pt', 'Fe', 'MnO₂', 'Ni'],
                solvents: ['Water', 'Ethanol', 'Hexane', 'Acetone', 'Dichloromethane']
            };
        }


}

export { ChemistryDiagramsRegistry };
