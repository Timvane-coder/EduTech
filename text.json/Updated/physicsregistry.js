
class PhysicsDiagramsRegistry {




// ============================================================
        // ===== ELECTRICITY & MAGNETISM — CAPACITORS =================
        // ============================================================

        'capacitorEnergyTriangleAreaUnderQVGraphDiagram': {
            name: 'Capacitor Energy Triangle Area Under Q-V Graph',
            category: 'Electricity & Magnetism',
            subcategory: 'Capacitance',
            description: 'Triangular area under Q-V graph representing energy stored in a capacitor',
            type: 'capacitor_energy_qv_graph',
            defaultOptions: {
                title: 'Capacitor Energy: Area Under Q-V Graph',
                showTriangle: true,
                showAxesLabels: true,
                showEnergyLabel: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'seriesParallelCapacitorCombinationEquivalentDiagram': {
            name: 'Series and Parallel Capacitor Combination Equivalent',
            category: 'Electricity & Magnetism',
            subcategory: 'Capacitance',
            description: 'Circuit diagrams showing series and parallel capacitor combinations with equivalent capacitance',
            type: 'series_parallel_capacitor_combination',
            defaultOptions: {
                title: 'Series & Parallel Capacitor Combinations',
                showSeries: true,
                showParallel: true,
                showEquivalent: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rcCircuitChargingDischargingExponentialCurveTimeConstantDiagram': {
            name: 'RC Circuit Charging and Discharging Exponential Curve with Time Constant',
            category: 'Electricity & Magnetism',
            subcategory: 'Capacitance',
            description: 'Exponential charge/discharge curves for an RC circuit with time constant τ = RC labelled',
            type: 'rc_circuit_charging_discharging',
            defaultOptions: {
                title: 'RC Circuit Charging & Discharging',
                showCharging: true,
                showDischarging: true,
                showTimeConstant: true,
                showAsymptote: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'lnVvsTimeLinearGraphGradientTimeConstantDiagram': {
            name: 'ln V vs Time Linear Graph — Gradient Gives Time Constant',
            category: 'Electricity & Magnetism',
            subcategory: 'Capacitance',
            description: 'Linearised ln V vs t graph for RC discharge with gradient equal to −1/RC',
            type: 'ln_v_vs_time_linear_graph',
            defaultOptions: {
                title: 'ln V vs Time — Gradient = −1/RC',
                showBestFitLine: true,
                showGradientAnnotation: true,
                showAxesLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'capacitorApplicationsFlashSmoothingTimingFilterDiagram': {
            name: 'Capacitor Applications — Flash, Smoothing, Timing, Filter',
            category: 'Electricity & Magnetism',
            subcategory: 'Capacitance',
            description: 'Four-panel diagram illustrating capacitor applications: camera flash, power smoothing, timing circuits, and signal filtering',
            type: 'capacitor_applications_panel',
            defaultOptions: {
                title: 'Capacitor Applications',
                showFlash: true,
                showSmoothing: true,
                showTiming: true,
                showFilter: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== OPTICS — REFLECTION ==================================
        // ============================================================

        'incidentReflectedRayNormalLabelledDiagram': {
            name: 'Incident and Reflected Ray with Normal Labelled',
            category: 'Optics',
            subcategory: 'Reflection',
            description: 'Flat mirror surface with incident ray, reflected ray, normal line, and angle labels',
            type: 'incident_reflected_ray_normal',
            defaultOptions: {
                title: 'Incident & Reflected Ray at a Plane Mirror',
                showNormal: true,
                showAngles: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'angleOfIncidenceEqualsAngleOfReflectionProofDiagram': {
            name: 'Angle of Incidence Equals Angle of Reflection Proof',
            category: 'Optics',
            subcategory: 'Reflection',
            description: 'Diagram demonstrating that angle of incidence equals angle of reflection using wavefront or geometric argument',
            type: 'angle_incidence_equals_reflection_proof',
            defaultOptions: {
                title: 'Law of Reflection: θᵢ = θᵣ',
                showWavefronts: true,
                showAngles: true,
                showProofAnnotation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'planeMirrorVirtualImageLocationRayDiagram': {
            name: 'Plane Mirror Virtual Image Location Ray Diagram',
            category: 'Optics',
            subcategory: 'Reflection',
            description: 'Ray diagram locating the virtual image behind a plane mirror at equal distance to the object',
            type: 'plane_mirror_virtual_image_location',
            objectDistance: 80,
            objectHeight: 40,
            defaultOptions: {
                title: 'Plane Mirror — Virtual Image Location',
                showObject: true,
                showImage: true,
                showRays: true,
                showVirtualRays: true,
                showDistanceAnnotation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'concaveMirrorFocalPointCentreOfCurvatureRayDiagram': {
            name: 'Concave Mirror Focal Point and Centre of Curvature Ray Diagram',
            category: 'Optics',
            subcategory: 'Reflection',
            description: 'Concave mirror showing principal axis, focal point F, and centre of curvature C with convergent rays',
            type: 'concave_mirror_focal_centre',
            focalLength: 100,
            defaultOptions: {
                title: 'Concave Mirror — F and C',
                showFocalPoint: true,
                showCentreOfCurvature: true,
                showRays: true,
                showPrincipalAxis: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'convexMirrorVirtualDiminishedImageFieldOfViewDiagram': {
            name: 'Convex Mirror Virtual Diminished Image and Field of View',
            category: 'Optics',
            subcategory: 'Reflection',
            description: 'Convex mirror ray diagram showing virtual, upright, diminished image and wide field of view',
            type: 'convex_mirror_virtual_image_fov',
            focalLength: -100,
            defaultOptions: {
                title: 'Convex Mirror — Virtual Image & Field of View',
                showImage: true,
                showFieldOfView: true,
                showRays: true,
                showPrincipalAxis: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'criticalAngleTotalInternalReflectionGlassAirDiagram': {
            name: 'Critical Angle and Total Internal Reflection at Glass-Air Boundary',
            category: 'Optics',
            subcategory: 'Reflection',
            description: 'Three-panel diagram showing refraction below critical angle, ray along boundary at critical angle, and total internal reflection above it',
            type: 'critical_angle_tir_glass_air',
            criticalAngle: 42,
            defaultOptions: {
                title: 'Critical Angle & Total Internal Reflection',
                showSubCritical: true,
                showCritical: true,
                showTIR: true,
                showAngles: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'threeStandardRaysMirrorConstructionStepDiagram': {
            name: 'Three Standard Rays for Mirror Construction — Step Diagram',
            category: 'Optics',
            subcategory: 'Reflection',
            description: 'Step-by-step diagram showing the three standard construction rays for curved mirror image location',
            type: 'three_standard_rays_mirror_construction',
            defaultOptions: {
                title: 'Three Standard Rays — Mirror Construction',
                showParallelRay: true,
                showFocalRay: true,
                showCentreRay: true,
                showStepLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'sphericalAberrationParaxialMarginalRayFocusDiagram': {
            name: 'Spherical Aberration — Paraxial and Marginal Ray Focus Comparison',
            category: 'Optics',
            subcategory: 'Reflection',
            description: 'Diagram showing paraxial rays focusing at a different point to marginal rays, illustrating spherical aberration',
            type: 'spherical_aberration_paraxial_marginal',
            defaultOptions: {
                title: 'Spherical Aberration',
                showParaxialRays: true,
                showMarginalRays: true,
                showFocusPoints: true,
                showCaustic: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'newtonianReflectingTelescopeMirrorLayoutDiagram': {
            name: 'Newtonian Reflecting Telescope Mirror Layout',
            category: 'Optics',
            subcategory: 'Reflection',
            description: 'Cross-section of a Newtonian reflector showing primary parabolic mirror, flat secondary mirror, and eyepiece position',
            type: 'newtonian_reflecting_telescope_layout',
            defaultOptions: {
                title: 'Newtonian Reflecting Telescope',
                showPrimaryMirror: true,
                showSecondaryMirror: true,
                showEyepiece: true,
                showRayPath: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'selectiveReflectionObjectColourAbsorptionSpectrumDiagram': {
            name: 'Selective Reflection — Object Colour and Absorption Spectrum',
            category: 'Optics',
            subcategory: 'Reflection',
            description: 'Diagram linking white light incident on a coloured object, absorbed wavelengths, and the reflected colour perceived',
            type: 'selective_reflection_colour_absorption',
            defaultOptions: {
                title: 'Selective Reflection & Object Colour',
                showIncidentSpectrum: true,
                showAbsorptionBands: true,
                showReflectedColour: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== OPTICS — REFRACTION ==================================
        // ============================================================

        'refractionBendingTowardNormalAirGlassBoundaryDiagram': {
            name: 'Refraction — Bending Toward Normal at Air-Glass Boundary',
            category: 'Optics',
            subcategory: 'Refraction',
            description: 'Ray bending toward the normal as it crosses from air into glass, with angles and normal labelled',
            type: 'refraction_air_glass_boundary',
            defaultOptions: {
                title: 'Refraction at Air-Glass Boundary',
                showNormal: true,
                showAngles: true,
                showMediaLabels: true,
                showBending: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'refractiveIndexSpeedOfLightMediumComparisonChart': {
            name: 'Refractive Index and Speed of Light in Different Media — Comparison Chart',
            category: 'Optics',
            subcategory: 'Refraction',
            description: 'Table or bar chart comparing refractive index and corresponding speed of light for common optical media',
            type: 'refractive_index_speed_comparison_chart',
            media: [
                { name: 'Vacuum', n: 1.000, speed: 3.00e8 },
                { name: 'Air', n: 1.003, speed: 2.99e8 },
                { name: 'Water', n: 1.333, speed: 2.25e8 },
                { name: 'Glass', n: 1.500, speed: 2.00e8 },
                { name: 'Diamond', n: 2.417, speed: 1.24e8 }
            ],
            defaultOptions: {
                title: 'Refractive Index vs Speed of Light',
                showTable: true,
                showBarChart: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'snellsLawSinRatioAngleBoundaryProofDiagram': {
            name: "Snell's Law — Sin Ratio Angle at Boundary Proof Diagram",
            category: 'Optics',
            subcategory: 'Refraction',
            description: "Geometric proof of Snell's law showing wavefronts, boundary, and the sine ratio n₁sinθ₁ = n₂sinθ₂",
            type: 'snells_law_sin_ratio_proof',
            defaultOptions: {
                title: "Snell's Law: n₁sinθ₁ = n₂sinθ₂",
                showWavefronts: true,
                showAngles: true,
                showSineAnnotation: true,
                showBoundary: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'opticalFibreCoreCladdingTotalInternalReflectionPathDiagram': {
            name: 'Optical Fibre — Core, Cladding, and Total Internal Reflection Path',
            category: 'Optics',
            subcategory: 'Refraction',
            description: 'Cross-section of an optical fibre showing light zigzagging by total internal reflection between core and cladding',
            type: 'optical_fibre_core_cladding_tir',
            defaultOptions: {
                title: 'Optical Fibre — TIR Ray Path',
                showCore: true,
                showCladding: true,
                showRayPath: true,
                showAngles: true,
                showRefractiveIndices: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'realApparentDepthObserverRayTracingPoolDiagram': {
            name: 'Real and Apparent Depth — Observer Ray Tracing Pool Diagram',
            category: 'Optics',
            subcategory: 'Refraction',
            description: 'Ray tracing diagram showing an observer perceiving a pool object at a shallower apparent depth than its real depth',
            type: 'real_apparent_depth_pool',
            defaultOptions: {
                title: 'Real vs Apparent Depth',
                showRealObject: true,
                showApparentImage: true,
                showRays: true,
                showDepthAnnotation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'prismMinimumDeviationSymmetricRayPathDiagram': {
            name: 'Prism Minimum Deviation — Symmetric Ray Path Diagram',
            category: 'Optics',
            subcategory: 'Refraction',
            description: 'Equilateral prism with a ray traversing symmetrically at minimum deviation, showing deviation angle D',
            type: 'prism_minimum_deviation_symmetric',
            defaultOptions: {
                title: 'Prism — Minimum Deviation',
                showPrism: true,
                showSymmetricRay: true,
                showDeviationAngle: true,
                showAngles: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'atmosphericLayersGradualRayBendingSunrisePositionDiagram': {
            name: 'Atmospheric Layers — Gradual Ray Bending and Sunrise Position Diagram',
            category: 'Optics',
            subcategory: 'Refraction',
            description: 'Diagram showing gradual ray bending through atmospheric density layers causing the apparent sunrise position to differ from the geometric position',
            type: 'atmospheric_refraction_sunrise',
            defaultOptions: {
                title: 'Atmospheric Refraction — Sunrise',
                showAtmosphericLayers: true,
                showRayPath: true,
                showApparentPosition: true,
                showGeometricPosition: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'frequencyWavelengthSpeedChangeBoundaryComparisonDiagram': {
            name: 'Frequency, Wavelength, and Speed Change at Boundary — Comparison Diagram',
            category: 'Optics',
            subcategory: 'Refraction',
            description: 'Side-by-side comparison showing which wave properties change (speed, wavelength) and which remain constant (frequency) at a refractive boundary',
            type: 'frequency_wavelength_speed_boundary',
            defaultOptions: {
                title: 'Wave Properties at a Refractive Boundary',
                showFrequencyConstant: true,
                showWavelengthChange: true,
                showSpeedChange: true,
                showAnnotations: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'myopiaHyperopiaCornetingLensRayDiagramCorrections': {
            name: 'Myopia and Hyperopia — Correcting Lens Ray Diagram',
            category: 'Optics',
            subcategory: 'Refraction',
            description: 'Side-by-side ray diagrams showing uncorrected and corrected focal points for myopia (concave lens) and hyperopia (convex lens)',
            type: 'myopia_hyperopia_lens_correction',
            defaultOptions: {
                title: 'Myopia & Hyperopia — Lens Corrections',
                showMyopia: true,
                showHyperopia: true,
                showCorrectedRays: true,
                showRetina: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'glassBlockExperimentTracingPinsNormalIncidentRefractedRaySetupDiagram': {
            name: 'Glass Block Experiment — Tracing Pins, Normal, Incident and Refracted Ray Setup',
            category: 'Optics',
            subcategory: 'Refraction',
            description: 'Practical setup diagram for the glass block experiment showing pin positions, incident and refracted rays, normal, and block outline',
            type: 'glass_block_experiment_setup',
            defaultOptions: {
                title: 'Glass Block Experiment Setup',
                showBlock: true,
                showPins: true,
                showIncidentRay: true,
                showRefractedRay: true,
                showNormal: true,
                showAngles: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== OPTICS — LENSES ======================================
        // ============================================================

        'convexConcaveLensShapeFocalPointPrincipalAxisLabelledDiagram': {
            name: 'Convex and Concave Lens Shape — Focal Point and Principal Axis Labelled',
            category: 'Optics',
            subcategory: 'Lenses',
            description: 'Side-by-side diagrams of a converging convex lens and diverging concave lens with focal points and principal axis labelled',
            type: 'convex_concave_lens_shape_focal',
            defaultOptions: {
                title: 'Convex & Concave Lens Shapes',
                showConvex: true,
                showConcave: true,
                showFocalPoints: true,
                showPrincipalAxis: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'thinLensFormulaSignConventionObjectImageDistanceDiagram': {
            name: 'Thin Lens Formula — Sign Convention, Object and Image Distance Diagram',
            category: 'Optics',
            subcategory: 'Lenses',
            description: 'Diagram illustrating the thin lens formula 1/f = 1/v − 1/u with sign convention arrows for u, v, and f',
            type: 'thin_lens_formula_sign_convention',
            defaultOptions: {
                title: 'Thin Lens Formula: 1/f = 1/v − 1/u',
                showSignConvention: true,
                showObjectDistance: true,
                showImageDistance: true,
                showFocalLength: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'linearMagnificationImageHeightObjectHeightRatioDiagram': {
            name: 'Linear Magnification — Image Height to Object Height Ratio Diagram',
            category: 'Optics',
            subcategory: 'Lenses',
            description: 'Diagram defining linear magnification m = hᵢ/h₀ = v/u with labelled object and image heights',
            type: 'linear_magnification_height_ratio',
            defaultOptions: {
                title: 'Linear Magnification: m = hᵢ/h₀',
                showObjectHeight: true,
                showImageHeight: true,
                showRatioAnnotation: true,
                showLens: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'threeStandardRaysConvexLensAllObjectPositionsImageTableDiagram': {
            name: 'Three Standard Rays for Convex Lens — All Object Positions Image Table Diagram',
            category: 'Optics',
            subcategory: 'Lenses',
            description: 'Composite diagram showing three standard construction rays for a convex lens across all object positions with an image characteristics summary table',
            type: 'three_standard_rays_convex_lens_table',
            defaultOptions: {
                title: 'Convex Lens — All Object Positions',
                showRays: true,
                showAllPositions: true,
                showImageTable: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'lensesInContactCombinedPowerDioptresAdditionDiagram': {
            name: 'Lenses in Contact — Combined Power in Dioptres Addition Diagram',
            category: 'Optics',
            subcategory: 'Lenses',
            description: 'Diagram showing two thin lenses in contact with combined power P = P₁ + P₂',
            type: 'lenses_in_contact_combined_power',
            defaultOptions: {
                title: 'Lenses in Contact: P = P₁ + P₂',
                showTwoLenses: true,
                showCombinedPower: true,
                showRays: true,
                showAnnotation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'chromaticAberrationAchromaticDoubletCrownFlintGlassDiagram': {
            name: 'Chromatic Aberration and Achromatic Doublet — Crown and Flint Glass',
            category: 'Optics',
            subcategory: 'Lenses',
            description: 'Side-by-side showing chromatic aberration in a single lens and its correction using a crown-flint glass achromatic doublet',
            type: 'chromatic_aberration_achromatic_doublet',
            defaultOptions: {
                title: 'Chromatic Aberration & Achromatic Doublet',
                showAberration: true,
                showDoublet: true,
                showColourRays: true,
                showGlassLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'compoundMicroscopeObjectiveEyepieceMagnificationRayPathDiagram': {
            name: 'Compound Microscope — Objective, Eyepiece, Magnification and Ray Path',
            category: 'Optics',
            subcategory: 'Lenses',
            description: 'Ray path diagram through a compound microscope showing objective lens, intermediate image, and eyepiece with magnification annotations',
            type: 'compound_microscope_ray_path',
            defaultOptions: {
                title: 'Compound Microscope Ray Path',
                showObjectiveLens: true,
                showEyepieceLens: true,
                showIntermediateImage: true,
                showFinalImage: true,
                showMagnificationAnnotation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'twoLensSeparatedSystemIntermediateImageRayTracingDiagram': {
            name: 'Two-Lens Separated System — Intermediate Image Ray Tracing',
            category: 'Optics',
            subcategory: 'Lenses',
            description: 'Ray tracing through two separated thin lenses showing the intermediate image formed by the first lens acting as the object for the second',
            type: 'two_lens_separated_system_ray_tracing',
            defaultOptions: {
                title: 'Two-Lens Separated System',
                showFirstLens: true,
                showSecondLens: true,
                showIntermediateImage: true,
                showRayTracing: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'fresnelLensConcentriRingsEquivalentConvexLensComparisonDiagram': {
            name: 'Fresnel Lens — Concentric Rings and Equivalent Convex Lens Comparison',
            category: 'Optics',
            subcategory: 'Lenses',
            description: 'Comparison diagram showing a conventional thick convex lens alongside its thin Fresnel lens equivalent with concentric stepped rings',
            type: 'fresnel_lens_concentric_rings_comparison',
            defaultOptions: {
                title: 'Fresnel Lens vs Conventional Convex Lens',
                showConvexLens: true,
                showFresnelLens: true,
                showRings: true,
                showRayPaths: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'besselMethodDisplacementTwoPositionsFocalLengthSetupDiagram': {
            name: "Bessel's Method — Two Lens Positions, Displacement, and Focal Length Setup",
            category: 'Optics',
            subcategory: 'Lenses',
            description: "Optical bench diagram showing two lens positions that produce a sharp image, with displacement d and fixed object-image distance D used to calculate focal length",
            type: 'bessel_method_focal_length_setup',
            defaultOptions: {
                title: "Bessel's Method — Focal Length",
                showObjectScreen: true,
                showTwoPositions: true,
                showDisplacement: true,
                showFormula: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== OPTICS — WAVE OPTICS =================================
        // ============================================================

        'huygensWaveletSecondarySourcesNewWavefrontConstructionDiagram': {
            name: "Huygens' Wavelet — Secondary Sources and New Wavefront Construction",
            category: 'Optics',
            subcategory: 'Wave Optics',
            description: "Diagram showing Huygens' construction: each point on a wavefront acts as a secondary source, and the envelope of the wavelets forms the new wavefront",
            type: 'huygens_wavelet_construction',
            defaultOptions: {
                title: "Huygens' Wavelet Construction",
                showPrimaryWavefront: true,
                showSecondarySources: true,
                showWavelets: true,
                showNewWavefront: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'youngDoubleSlitPathDifferenceConstructiveDestructiveFringeDiagram': {
            name: "Young's Double Slit — Path Difference, Constructive and Destructive Fringe Diagram",
            category: 'Optics',
            subcategory: 'Wave Optics',
            description: "Young's double slit setup showing path difference geometry, conditions for bright and dark fringes, and fringe pattern",
            type: 'young_double_slit_path_difference',
            slitSeparation: 0.5,
            slitToScreen: 1000,
            wavelength: 550,
            defaultOptions: {
                title: "Young's Double Slit Experiment",
                showSlits: true,
                showPathDifference: true,
                showFringePattern: true,
                showConditions: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'singleSlitCentralMaximaSecondaryMaximaDarkFringesDiffractionPatternDiagram': {
            name: 'Single Slit Diffraction — Central Maxima, Secondary Maxima, and Dark Fringes Pattern',
            category: 'Optics',
            subcategory: 'Wave Optics',
            description: 'Intensity vs angle plot and aperture diagram for single slit diffraction showing wide central maximum and narrower secondary maxima',
            type: 'single_slit_diffraction_pattern',
            defaultOptions: {
                title: 'Single Slit Diffraction Pattern',
                showAperture: true,
                showIntensityPattern: true,
                showDarkFringes: true,
                showSecondaryMaxima: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'malussLawPolariserAnalyserAngleIntensityCosineDiagram': {
            name: "Malus's Law — Polariser, Analyser, Angle and Intensity Cosine² Diagram",
            category: 'Optics',
            subcategory: 'Wave Optics',
            description: "Diagram illustrating Malus's law with a polariser and analyser, showing intensity I = I₀cos²θ as angle θ between transmission axes varies",
            type: 'malus_law_polariser_analyser',
            defaultOptions: {
                title: "Malus's Law: I = I₀cos²θ",
                showPolariser: true,
                showAnalyser: true,
                showAngle: true,
                showIntensityCurve: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'laserCoherentVsIncoherentSourceWavefrontComparisonDiagram': {
            name: 'Laser Coherent vs Incoherent Source — Wavefront Comparison Diagram',
            category: 'Optics',
            subcategory: 'Wave Optics',
            description: 'Side-by-side comparison of ordered, coherent wavefronts from a laser versus disordered, incoherent wavefronts from a conventional source',
            type: 'laser_coherent_vs_incoherent_wavefront',
            defaultOptions: {
                title: 'Coherent vs Incoherent Light Sources',
                showCoherent: true,
                showIncoherent: true,
                showWavefronts: true,
                showPhaseAnnotation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rayleighCriterionTwoPointSourcesDiffractionPatternOverlapDiagram': {
            name: 'Rayleigh Criterion — Two Point Sources Diffraction Pattern Overlap Diagram',
            category: 'Optics',
            subcategory: 'Wave Optics',
            description: 'Three-panel diagram showing resolved, just-resolved (Rayleigh criterion), and unresolved pairs of point sources via their overlapping diffraction patterns',
            type: 'rayleigh_criterion_resolution',
            defaultOptions: {
                title: 'Rayleigh Criterion for Resolution',
                showResolved: true,
                showJustResolved: true,
                showUnresolved: true,
                showIntensityCurves: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'hologramRecordingReconstructionObjectReferenceBeamInterferenceDiagram': {
            name: 'Hologram — Recording and Reconstruction with Object and Reference Beam Interference',
            category: 'Optics',
            subcategory: 'Wave Optics',
            description: 'Two-panel diagram: recording phase showing object beam and reference beam interfering on photographic plate, and reconstruction phase showing wavefront replay',
            type: 'hologram_recording_reconstruction',
            defaultOptions: {
                title: 'Hologram: Recording & Reconstruction',
                showRecording: true,
                showReconstruction: true,
                showInterferencePattern: true,
                showBeamLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== OPTICS — ELECTROMAGNETIC SPECTRUM ====================
        // ============================================================

        'electromagneticSpectrumWavelengthFrequencyEnergyScaleDiagram': {
            name: 'Electromagnetic Spectrum — Wavelength, Frequency, and Energy Scale',
            category: 'Optics',
            subcategory: 'Electromagnetic Spectrum',
            description: 'Horizontal scale diagram of the electromagnetic spectrum from radio waves to gamma rays with wavelength, frequency, and energy axes',
            type: 'em_spectrum_scale',
            defaultOptions: {
                title: 'Electromagnetic Spectrum',
                showWavelengthScale: true,
                showFrequencyScale: true,
                showEnergyScale: true,
                showRegionLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'xrayDiffractionBraggPlanesCrystalLatticeSpacingDiagram': {
            name: "X-Ray Diffraction — Bragg Planes, Crystal Lattice Spacing Diagram",
            category: 'Optics',
            subcategory: 'Electromagnetic Spectrum',
            description: "Diagram showing X-rays reflecting from parallel crystal planes with Bragg's law path difference 2d sinθ = nλ labelled",
            type: 'xray_diffraction_bragg_planes',
            defaultOptions: {
                title: "X-Ray Diffraction: Bragg's Law",
                showCrystalPlanes: true,
                showIncidentRays: true,
                showReflectedRays: true,
                showPathDifference: true,
                showBraggAngle: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'photoelectricEffectThresholdFrequencyMaxKineticEnergyGraphDiagram': {
            name: 'Photoelectric Effect — Threshold Frequency and Max Kinetic Energy Graph',
            category: 'Optics',
            subcategory: 'Electromagnetic Spectrum',
            description: 'Graph of maximum kinetic energy vs frequency for the photoelectric effect showing threshold frequency f₀ and gradient equal to Planck\'s constant h',
            type: 'photoelectric_effect_ke_frequency_graph',
            defaultOptions: {
                title: 'Photoelectric Effect: KE_max vs Frequency',
                showThresholdFrequency: true,
                showGradient: true,
                showWorkFunctionAnnotation: true,
                showAxesLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'cauchyEquationRefractiveIndexWavelengthNormalDispersionCurveDiagram': {
            name: 'Cauchy Equation — Refractive Index vs Wavelength Normal Dispersion Curve',
            category: 'Optics',
            subcategory: 'Electromagnetic Spectrum',
            description: 'Graph of refractive index n vs wavelength λ showing a decreasing normal dispersion curve described by the Cauchy equation',
            type: 'cauchy_equation_dispersion_curve',
            defaultOptions: {
                title: 'Cauchy Equation: n vs λ (Normal Dispersion)',
                showDispersionCurve: true,
                showCauchyAnnotation: true,
                showVisibleRegion: true,
                showAxesLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'prismWhiteLightDispersionAngularSpreadVioletRedDiagram': {
            name: 'Prism White Light Dispersion — Angular Spread of Violet and Red',
            category: 'Optics',
            subcategory: 'Electromagnetic Spectrum',
            description: 'Prism splitting white light into a spectrum with violet deviated most and red least, showing angular spread',
            type: 'prism_white_light_dispersion',
            defaultOptions: {
                title: 'Prism Dispersion of White Light',
                showPrism: true,
                showWhiteRay: true,
                showSpectrum: true,
                showAngularSpread: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'primaryRainbowRaindropRefractionInternalReflectionAngles42DegreeDiagram': {
            name: 'Primary Rainbow — Raindrop Refraction and Internal Reflection at 42°',
            category: 'Optics',
            subcategory: 'Electromagnetic Spectrum',
            description: 'Single raindrop cross-section showing two refractions and one internal reflection producing the primary rainbow at approximately 42°',
            type: 'primary_rainbow_raindrop_42deg',
            defaultOptions: {
                title: 'Primary Rainbow Formation (~42°)',
                showRaindrop: true,
                showRefractionEntrance: true,
                showInternalReflection: true,
                showRefractionExit: true,
                showDeviationAngle: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'continuousEmissionAbsorptionBlackbodySpectraComparisonDiagram': {
            name: 'Continuous, Emission, Absorption, and Blackbody Spectra Comparison',
            category: 'Optics',
            subcategory: 'Electromagnetic Spectrum',
            description: 'Four-row comparison diagram showing a continuous spectrum, bright-line emission spectrum, dark-line absorption spectrum, and blackbody spectrum',
            type: 'spectra_comparison_four_panel',
            defaultOptions: {
                title: 'Spectra Comparison',
                showContinuous: true,
                showEmission: true,
                showAbsorption: true,
                showBlackbody: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'hydrogenBohrModelEnergyLevelTransitionsBalmerSeriesDiagram': {
            name: 'Hydrogen Bohr Model — Energy Level Transitions and Balmer Series',
            category: 'Optics',
            subcategory: 'Electromagnetic Spectrum',
            description: 'Energy level diagram for hydrogen showing transitions to n=2 (Balmer series) with corresponding wavelengths',
            type: 'hydrogen_bohr_energy_levels_balmer',
            energyLevels: [-13.6, -3.4, -1.51, -0.85, -0.54],
            defaultOptions: {
                title: 'Hydrogen Energy Levels — Balmer Series',
                showEnergyLevels: true,
                showBalmerTransitions: true,
                showLymanTransitions: false,
                showWavelengthLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'obafgkmSpectralClassTemperatureColourAbsorptionLineSummaryDiagram': {
            name: 'OBAFGKM Spectral Classification — Temperature, Colour, and Absorption Line Summary',
            category: 'Optics',
            subcategory: 'Electromagnetic Spectrum',
            description: 'Table or diagram summarising the OBAFGKM stellar spectral classes with temperature range, star colour, and characteristic absorption lines',
            type: 'obafgkm_spectral_class_summary',
            spectralClasses: ['O', 'B', 'A', 'F', 'G', 'K', 'M'],
            defaultOptions: {
                title: 'OBAFGKM Spectral Classification',
                showTemperature: true,
                showColour: true,
                showAbsorptionLines: true,
                showExamples: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'diffractionGratingOrdersSpectrumAngularPositionWavelengthDiagram': {
            name: 'Diffraction Grating — Orders, Spectrum, Angular Position, and Wavelength',
            category: 'Optics',
            subcategory: 'Wave Optics',
            description: 'Diagram showing a diffraction grating producing zeroth and higher-order spectra with angular positions determined by d sinθ = nλ',
            type: 'diffraction_grating_orders_spectrum',
            defaultOptions: {
                title: 'Diffraction Grating — Orders',
                showGrating: true,
                showZerothOrder: true,
                showFirstOrder: true,
                showSecondOrder: true,
                showAngleAnnotation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'additiveSubtractiveColourMixingRGBCMYPrimarysDiagram': {
            name: 'Additive and Subtractive Colour Mixing — RGB and CMY Primaries',
            category: 'Optics',
            subcategory: 'Electromagnetic Spectrum',
            description: 'Two-panel diagram: additive mixing of red, green, blue light producing white at overlap; subtractive mixing of cyan, magenta, yellow producing black at overlap',
            type: 'additive_subtractive_colour_mixing',
            defaultOptions: {
                title: 'Additive & Subtractive Colour Mixing',
                showAdditive: true,
                showSubtractive: true,
                showOverlapColours: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'beerLambertLawAbsorbanceConcentrationPathLengthSetupDiagram': {
            name: 'Beer-Lambert Law — Absorbance, Concentration, and Path Length Setup',
            category: 'Optics',
            subcategory: 'Electromagnetic Spectrum',
            description: 'Diagram showing a light beam passing through a cuvette of path length l with concentration c, illustrating A = εcl',
            type: 'beer_lambert_law_setup',
            defaultOptions: {
                title: 'Beer-Lambert Law: A = εcl',
                showCuvette: true,
                showIncidentBeam: true,
                showTransmittedBeam: true,
                showPathLength: true,
                showFormula: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'redshiftBlueshiftSpectralLineDisplacementRecessingApproachingSourceDiagram': {
            name: 'Redshift and Blueshift — Spectral Line Displacement for Receding and Approaching Source',
            category: 'Optics',
            subcategory: 'Electromagnetic Spectrum',
            description: 'Spectral line comparison diagram showing rest wavelength alongside redshifted lines for a receding source and blueshifted lines for an approaching source',
            type: 'redshift_blueshift_spectral_lines',
            defaultOptions: {
                title: 'Redshift & Blueshift of Spectral Lines',
                showRestLines: true,
                showRedshift: true,
                showBlueshift: true,
                showDisplacementAnnotation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== MECHANICS — KINEMATICS ===============================
        // ============================================================

        'displacementVsDistanceVectorScalarDiagram': {
            name: 'Displacement vs Distance — Vector and Scalar Comparison',
            category: 'Mechanics',
            subcategory: 'Kinematics',
            description: 'Diagram contrasting the scalar distance (total path length) with the vector displacement (straight-line separation) for a curved path',
            type: 'displacement_vs_distance_vector_scalar',
            defaultOptions: {
                title: 'Displacement vs Distance',
                showPath: true,
                showDisplacementVector: true,
                showDistanceLabel: true,
                showAnnotations: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'averageVsInstantaneousVelocityTangentDiagram': {
            name: 'Average vs Instantaneous Velocity — Tangent Diagram',
            category: 'Mechanics',
            subcategory: 'Kinematics',
            description: 'Displacement-time curve showing a secant chord for average velocity and a tangent at a point for instantaneous velocity',
            type: 'average_vs_instantaneous_velocity_tangent',
            defaultOptions: {
                title: 'Average vs Instantaneous Velocity',
                showCurve: true,
                showSecant: true,
                showTangent: true,
                showAnnotations: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'uniformNonUniformAccelerationVelocityTimeGraph': {
            name: 'Uniform and Non-Uniform Acceleration — Velocity-Time Graph',
            category: 'Mechanics',
            subcategory: 'Kinematics',
            description: 'Velocity-time graph comparing a straight line (constant acceleration) with a curve (non-uniform acceleration)',
            type: 'uniform_nonuniform_acceleration_vt_graph',
            defaultOptions: {
                title: 'Uniform vs Non-Uniform Acceleration',
                showUniform: true,
                showNonUniform: true,
                showGradientAnnotation: true,
                showAreaAnnotation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'suvatEquationSelectionFlowchart': {
            name: 'SUVAT Equation Selection Flowchart',
            category: 'Mechanics',
            subcategory: 'Kinematics',
            description: 'Decision flowchart guiding selection of the appropriate SUVAT equation based on the known and unknown variables',
            type: 'suvat_equation_selection_flowchart',
            defaultOptions: {
                title: 'SUVAT Equation Selection',
                showAllEquations: true,
                showDecisionNodes: true,
                showVariableKey: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'freeFallTerminalVelocityVelocityTimeGraph': {
            name: 'Free Fall and Terminal Velocity — Velocity-Time Graph',
            category: 'Mechanics',
            subcategory: 'Kinematics',
            description: 'Velocity-time graph showing initial free fall acceleration at g transitioning to constant terminal velocity as drag equals weight',
            type: 'free_fall_terminal_velocity_vt_graph',
            defaultOptions: {
                title: 'Free Fall to Terminal Velocity',
                showAccelerationPhase: true,
                showTerminalPhase: true,
                showDragForceAnnotation: true,
                showTerminalVelocityLine: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'projectileParabolicTrajectoryComponentsDiagram': {
            name: 'Projectile Parabolic Trajectory — Components Diagram',
            category: 'Mechanics',
            subcategory: 'Kinematics',
            description: 'Parabolic trajectory diagram decomposing horizontal (constant) and vertical (accelerating) velocity components at multiple points',
            type: 'projectile_parabolic_trajectory_components',
            defaultOptions: {
                title: 'Projectile Motion — Component Decomposition',
                showTrajectory: true,
                showHorizontalComponent: true,
                showVerticalComponent: true,
                showVelocityVectors: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'displacementVelocityAccelerationTimeGraphsTrioDiagram': {
            name: 'Displacement, Velocity, and Acceleration vs Time — Trio Graph Diagram',
            category: 'Mechanics',
            subcategory: 'Kinematics',
            description: 'Three vertically aligned graphs (s-t, v-t, a-t) showing the relationships between gradient and area for a uniformly accelerating body',
            type: 'displacement_velocity_acceleration_trio_graphs',
            defaultOptions: {
                title: 's-t, v-t, a-t Graph Relationships',
                showDisplacementGraph: true,
                showVelocityGraph: true,
                showAccelerationGraph: true,
                showLinkAnnotations: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'relativeVelocityVectorSubtractionRiverCrossingDiagram': {
            name: 'Relative Velocity — Vector Subtraction and River Crossing Diagram',
            category: 'Mechanics',
            subcategory: 'Kinematics',
            description: 'River crossing diagram showing boat velocity, river current velocity, and resultant velocity, illustrating relative velocity via vector subtraction',
            type: 'relative_velocity_river_crossing',
            defaultOptions: {
                title: 'Relative Velocity — River Crossing',
                showBoatVelocity: true,
                showCurrentVelocity: true,
                showResultantVelocity: true,
                showVectorTriangle: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'twoDimensionalVectorComponentsResolutionDiagram': {
            name: 'Two-Dimensional Vector Components — Resolution Diagram',
            category: 'Mechanics',
            subcategory: 'Kinematics',
            description: 'Diagram resolving a 2D vector into horizontal and vertical components with trigonometric labels',
            type: 'two_dimensional_vector_components_resolution',
            defaultOptions: {
                title: '2D Vector Resolution',
                showVector: true,
                showHorizontalComponent: true,
                showVerticalComponent: true,
                showAngle: true,
                showTrigLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'differentiationIntegrationKinematicLinksDiagram': {
            name: 'Differentiation and Integration — Kinematic Links Diagram',
            category: 'Mechanics',
            subcategory: 'Kinematics',
            description: 'Diagram showing the calculus links between displacement, velocity, and acceleration via differentiation (downward) and integration (upward)',
            type: 'differentiation_integration_kinematic_links',
            defaultOptions: {
                title: 'Calculus Links: s ↔ v ↔ a',
                showDisplacement: true,
                showVelocity: true,
                showAcceleration: true,
                showDifferentiationArrows: true,
                showIntegrationArrows: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'uniformUniformlyAcceleratedNonUniformGraphComparisonDiagram': {
            name: 'Uniform, Uniformly Accelerated, and Non-Uniform Motion — Graph Comparison',
            category: 'Mechanics',
            subcategory: 'Kinematics',
            description: 'Three-column comparison of s-t, v-t, and a-t graphs for uniform motion, uniformly accelerated motion, and non-uniform motion',
            type: 'motion_graph_three_way_comparison',
            defaultOptions: {
                title: 'Motion Graph Comparison',
                showUniform: true,
                showUniformlyAccelerated: true,
                showNonUniform: true,
                showAllThreeGraphTypes: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== MECHANICS — DYNAMICS =================================
        // ============================================================

        'freeBodyDiagramForceLabellingTemplate': {
            name: 'Free Body Diagram Force Labelling Template',
            category: 'Mechanics',
            subcategory: 'Dynamics',
            description: 'Blank or annotated template free body diagram showing standard force arrow conventions for weight, normal, tension, friction, and applied force',
            type: 'free_body_diagram_labelling_template',
            defaultOptions: {
                title: 'Free Body Diagram — Force Labels',
                showWeight: true,
                showNormal: true,
                showTension: true,
                showFriction: true,
                showApplied: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'newtonThreeLawsActionReactionPairsDiagram': {
            name: "Newton's Three Laws — Action-Reaction Pairs Diagram",
            category: 'Mechanics',
            subcategory: 'Dynamics',
            description: "Three-panel diagram illustrating Newton's first (inertia), second (F=ma), and third (action-reaction pairs) laws with labelled examples",
            type: 'newton_three_laws_action_reaction',
            defaultOptions: {
                title: "Newton's Three Laws",
                showFirstLaw: true,
                showSecondLaw: true,
                showThirdLaw: true,
                showActionReactionPairs: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'contactNonContactForcesClassificationDiagram': {
            name: 'Contact and Non-Contact Forces — Classification Diagram',
            category: 'Mechanics',
            subcategory: 'Dynamics',
            description: 'Classification diagram separating contact forces (normal, friction, tension, air resistance) from non-contact forces (gravity, electrostatic, magnetic)',
            type: 'contact_non_contact_forces_classification',
            defaultOptions: {
                title: 'Contact vs Non-Contact Forces',
                showContactForces: true,
                showNonContactForces: true,
                showExamples: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'atwoodMachineConnectedBodyFreeBodyDiagram': {
            name: "Atwood's Machine — Connected Body Free Body Diagram",
            category: 'Mechanics',
            subcategory: 'Dynamics',
            description: "Free body diagram of an Atwood machine showing two masses over a pulley with tension and weight forces labelled",
            type: 'atwood_machine_connected_body_fbd',
            defaultOptions: {
                title: "Atwood's Machine",
                showPulley: true,
                showMasses: true,
                showTension: true,
                showWeight: true,
                showAcceleration: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'inverseSquearedGravitationalFieldLinesDistanceDiagram': {
            name: 'Inverse Square Gravitational Field — Field Lines and Distance Diagram',
            category: 'Mechanics',
            subcategory: 'Dynamics',
            description: 'Diagram showing radial gravitational field lines around a planet with a graph of field strength g vs distance r following an inverse square law',
            type: 'inverse_square_gravitational_field_lines',
            defaultOptions: {
                title: 'Gravitational Field: g ∝ 1/r²',
                showFieldLines: true,
                showInverseSquareCurve: true,
                showDistanceAxis: true,
                showAnnotations: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'staticEquilibriumForceTriangleConcurrentForcesDiagram': {
            name: 'Static Equilibrium — Force Triangle and Concurrent Forces Diagram',
            category: 'Mechanics',
            subcategory: 'Dynamics',
            description: 'Diagram showing three concurrent forces in equilibrium forming a closed triangle, with components resolved',
            type: 'static_equilibrium_force_triangle',
            defaultOptions: {
                title: 'Static Equilibrium — Force Triangle',
                showConcurrentForces: true,
                showForceTriangle: true,
                showResolution: true,
                showEquilibriumCondition: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'staticKineticFrictionForceAppliedForceComparisonGraph': {
            name: 'Static and Kinetic Friction vs Applied Force — Comparison Graph',
            category: 'Mechanics',
            subcategory: 'Dynamics',
            description: 'Graph of friction force vs applied force showing static friction increasing to a maximum then dropping to the lower constant kinetic friction value',
            type: 'static_kinetic_friction_comparison_graph',
            defaultOptions: {
                title: 'Static & Kinetic Friction vs Applied Force',
                showStaticRegion: true,
                showKineticRegion: true,
                showMaxStaticFriction: true,
                showAnnotations: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'pseudoForceCentrifugalCoriolisRotatingFrameDiagram': {
            name: 'Pseudo-Forces — Centrifugal and Coriolis in a Rotating Frame Diagram',
            category: 'Mechanics',
            subcategory: 'Dynamics',
            description: 'Rotating reference frame diagram showing apparent centrifugal and Coriolis pseudo-forces compared to inertial frame view',
            type: 'pseudo_force_centrifugal_coriolis_rotating_frame',
            defaultOptions: {
                title: 'Pseudo-Forces in Rotating Frame',
                showInertialFrame: true,
                showRotatingFrame: true,
                showCentrifugal: true,
                showCoriolis: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'forceTimeGraphImpulseAreaVariableForceDiagram': {
            name: 'Force-Time Graph — Impulse as Area Under Variable Force Curve',
            category: 'Mechanics',
            subcategory: 'Dynamics',
            description: 'Force-time graph with a variable force curve, shaded area representing impulse J = ∫F dt, with average force line shown',
            type: 'force_time_graph_impulse_area_variable',
            defaultOptions: {
                title: 'Impulse: Area Under F-t Graph',
                showVariableForceCurve: true,
                showShadedArea: true,
                showAverageForce: true,
                showImpulseLabel: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'tensionVariationAlongMassiveStringDiagram': {
            name: 'Tension Variation Along a Massive String Diagram',
            category: 'Mechanics',
            subcategory: 'Dynamics',
            description: 'Diagram showing how tension varies linearly along a heavy string being accelerated, with free body diagram of a string element',
            type: 'tension_variation_massive_string',
            defaultOptions: {
                title: 'Tension Variation Along a Massive String',
                showString: true,
                showTensionProfile: true,
                showElementFBD: true,
                showAnnotations: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== MECHANICS — ENERGY ===================================
        // ============================================================

        'energyFormsTransformationFlowDiagram': {
            name: 'Energy Forms and Transformation Flow Diagram',
            category: 'Mechanics',
            subcategory: 'Energy',
            description: 'Flow diagram showing the main forms of energy (kinetic, potential, thermal, electrical, chemical, nuclear) and possible transformations between them',
            type: 'energy_forms_transformation_flow',
            defaultOptions: {
                title: 'Energy Forms & Transformations',
                showAllForms: true,
                showTransformationArrows: true,
                showExamples: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'workDoneForceDisplacementAngleDiagram': {
            name: 'Work Done — Force, Displacement, and Angle Diagram',
            category: 'Mechanics',
            subcategory: 'Energy',
            description: 'Diagram showing an object displaced at angle θ to an applied force, illustrating W = Fd cosθ',
            type: 'work_done_force_displacement_angle',
            defaultOptions: {
                title: 'Work Done: W = Fd cosθ',
                showForceVector: true,
                showDisplacement: true,
                showAngle: true,
                showComponentAnnotation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'kineticEnergyVelocitySquaredProportionalityGraph': {
            name: 'Kinetic Energy vs Velocity Squared — Proportionality Graph',
            category: 'Mechanics',
            subcategory: 'Energy',
            description: 'Graph of kinetic energy vs v² showing a straight line through the origin with gradient ½m, confirming Ek ∝ v²',
            type: 'kinetic_energy_velocity_squared_graph',
            defaultOptions: {
                title: 'Ek vs v²: Gradient = ½m',
                showDataPoints: true,
                showBestFitLine: true,
                showGradientAnnotation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'netWorkKineticEnergyChangeRelationshipDiagram': {
            name: 'Net Work — Kinetic Energy Change Relationship Diagram',
            category: 'Mechanics',
            subcategory: 'Energy',
            description: 'Diagram illustrating the work-energy theorem: net work done on an object equals the change in its kinetic energy',
            type: 'net_work_kinetic_energy_change',
            defaultOptions: {
                title: 'Work-Energy Theorem: W_net = ΔEk',
                showNetForce: true,
                showDisplacement: true,
                showKEChange: true,
                showAnnotation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'gravitationalElasticPotentialEnergyComparisonDiagram': {
            name: 'Gravitational and Elastic Potential Energy — Comparison Diagram',
            category: 'Mechanics',
            subcategory: 'Energy',
            description: 'Side-by-side comparison of gravitational PE (Ep = mgh, linear in h) and elastic PE (Ee = ½kx², quadratic in x) with corresponding graphs',
            type: 'gravitational_elastic_potential_energy_comparison',
            defaultOptions: {
                title: 'Gravitational vs Elastic PE',
                showGravitational: true,
                showElastic: true,
                showEnergyGraphs: true,
                showFormulas: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'pendulumKineticPotentialEnergyExchangeDiagram': {
            name: 'Pendulum — Kinetic and Potential Energy Exchange Diagram',
            category: 'Mechanics',
            subcategory: 'Energy',
            description: 'Pendulum diagram showing maximum PE at the extremes, maximum KE at the bottom, and energy exchange throughout the swing',
            type: 'pendulum_ke_pe_energy_exchange',
            defaultOptions: {
                title: 'Pendulum: KE ↔ PE Exchange',
                showPendulum: true,
                showEnergyBars: true,
                showMaxKE: true,
                showMaxPE: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'mechanicalEnergyLossFrictionThermalDissipationDiagram': {
            name: 'Mechanical Energy Loss — Friction and Thermal Dissipation Diagram',
            category: 'Mechanics',
            subcategory: 'Energy',
            description: 'Energy flow diagram showing input mechanical energy, energy lost to friction as heat, and reduced output mechanical energy',
            type: 'mechanical_energy_loss_friction_thermal',
            defaultOptions: {
                title: 'Energy Loss to Friction',
                showInputEnergy: true,
                showFrictionLoss: true,
                showOutputEnergy: true,
                showSankeyStyle: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'powerVelocityRelationshipEngineOutputDiagram': {
            name: 'Power-Velocity Relationship — Engine Output Diagram',
            category: 'Mechanics',
            subcategory: 'Energy',
            description: 'Diagram illustrating P = Fv for constant engine output power, showing the inverse relationship between driving force and velocity',
            type: 'power_velocity_engine_output',
            defaultOptions: {
                title: 'Power-Velocity: P = Fv',
                showPowerCurve: true,
                showForceVelocityGraph: true,
                showConstantPowerLine: true,
                showAnnotation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'springMassKineticElasticPotentialEnergyPositionGraph': {
            name: 'Spring-Mass — Kinetic and Elastic Potential Energy vs Position Graph',
            category: 'Mechanics',
            subcategory: 'Energy',
            description: 'Graph showing KE and elastic PE as functions of displacement for a spring-mass system, with total energy constant',
            type: 'spring_mass_ke_epe_position_graph',
            defaultOptions: {
                title: 'Spring-Mass: KE & EPE vs Position',
                showKECurve: true,
                showEPECurve: true,
                showTotalEnergy: true,
                showEquilibriumMark: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'renewableEnergyConversionChainHydroWindSolarDiagram': {
            name: 'Renewable Energy Conversion Chain — Hydro, Wind, and Solar',
            category: 'Mechanics',
            subcategory: 'Energy',
            description: 'Three energy conversion chain diagrams for hydroelectric, wind, and solar energy showing each transformation stage and efficiency losses',
            type: 'renewable_energy_conversion_chain',
            defaultOptions: {
                title: 'Renewable Energy Conversion Chains',
                showHydro: true,
                showWind: true,
                showSolar: true,
                showConversionStages: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== MECHANICS — MOMENTUM =================================
        // ============================================================

        'linearMomentumMassVelocityVectorDiagram': {
            name: 'Linear Momentum — Mass, Velocity, and Vector Diagram',
            category: 'Mechanics',
            subcategory: 'Momentum',
            description: 'Diagram defining linear momentum p = mv as a vector quantity, showing direction aligned with velocity',
            type: 'linear_momentum_mass_velocity_vector',
            defaultOptions: {
                title: 'Linear Momentum: p = mv',
                showObject: true,
                showVelocityVector: true,
                showMomentumVector: true,
                showAnnotation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'forceTimeGraphImpulseAreaAverageForceDiagram': {
            name: 'Force-Time Graph — Impulse Area and Average Force Diagram',
            category: 'Mechanics',
            subcategory: 'Momentum',
            description: 'Force-time graph with shaded impulse area and a horizontal average force line, illustrating J = FΔt = Δp',
            type: 'force_time_graph_impulse_average_force',
            defaultOptions: {
                title: 'Impulse: J = F_avg · Δt = Δp',
                showForceCurve: true,
                showShadedImpulse: true,
                showAverageForceLine: true,
                showAnnotation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'beforeAfterCollisionMomentumVectorsDiagram': {
            name: 'Before and After Collision — Momentum Vectors Diagram',
            category: 'Mechanics',
            subcategory: 'Momentum',
            description: 'Side-by-side before and after snapshots of a collision showing individual momentum vectors and conservation of total momentum',
            type: 'before_after_collision_momentum_vectors',
            defaultOptions: {
                title: 'Collision: Conservation of Momentum',
                showBeforeState: true,
                showAfterState: true,
                showMomentumVectors: true,
                showTotalMomentum: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'elasticInelasticPerfectlyInelasticKineticEnergyComparisonDiagram': {
            name: 'Elastic, Inelastic, and Perfectly Inelastic Collision — Kinetic Energy Comparison',
            category: 'Mechanics',
            subcategory: 'Momentum',
            description: 'Three-panel diagram comparing kinetic energy before and after elastic (KE conserved), inelastic (partial KE loss), and perfectly inelastic (maximum KE loss) collisions',
            type: 'elastic_inelastic_ke_comparison',
            defaultOptions: {
                title: 'Elastic vs Inelastic Collisions',
                showElastic: true,
                showInelastic: true,
                showPerfectlyInelastic: true,
                showKEComparison: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'bouncingBallDropHeightRestitutionCoefficientDiagram': {
            name: 'Bouncing Ball — Drop Height and Coefficient of Restitution Diagram',
            category: 'Mechanics',
            subcategory: 'Momentum',
            description: 'Diagram showing successive bounce heights for a dropped ball with coefficient of restitution e = √(h_bounce/h_drop) labelled',
            type: 'bouncing_ball_restitution_coefficient',
            defaultOptions: {
                title: 'Coefficient of Restitution',
                showDropHeight: true,
                showBounceHeights: true,
                showRestitutionAnnotation: true,
                showDecayPattern: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'explosionRecoilMomentumConservationVectorDiagram': {
            name: 'Explosion and Recoil — Momentum Conservation Vector Diagram',
            category: 'Mechanics',
            subcategory: 'Momentum',
            description: 'Before-and-after diagram of an explosion from rest showing equal and opposite momentum vectors summing to zero total momentum',
            type: 'explosion_recoil_momentum_conservation',
            defaultOptions: {
                title: 'Explosion & Recoil: Σp = 0',
                showBeforeExplosion: true,
                showAfterExplosion: true,
                showMomentumVectors: true,
                showZeroTotalAnnotation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'centreOfMassDiscreteAndContinuousSystemsDiagram': {
            name: 'Centre of Mass — Discrete and Continuous Systems Diagram',
            category: 'Mechanics',
            subcategory: 'Momentum',
            description: 'Two-panel diagram: discrete point masses with centre of mass calculation and a continuous uniform rod/shape with geometric centre of mass',
            type: 'centre_of_mass_discrete_continuous',
            defaultOptions: {
                title: 'Centre of Mass',
                showDiscrete: true,
                showContinuous: true,
                showCOMMarker: true,
                showCalculation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'twoDimensionalGlancingCollisionComponentVectorsDiagram': {
            name: 'Two-Dimensional Glancing Collision — Component Vectors Diagram',
            category: 'Mechanics',
            subcategory: 'Momentum',
            description: '2D collision diagram showing incident and scattered particles with momentum component vectors in both x and y directions',
            type: 'two_dimensional_glancing_collision',
            defaultOptions: {
                title: '2D Glancing Collision — Momentum Components',
                showIncidentParticle: true,
                showScatteredParticles: true,
                showXComponents: true,
                showYComponents: true,
                showConservationAnnotation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'angularMomentumConservationSpinnerArmExtensionDiagram': {
            name: 'Angular Momentum Conservation — Spinner Arm Extension Diagram',
            category: 'Mechanics',
            subcategory: 'Momentum',
            description: 'Diagram of a spinning figure pulling arms in vs extending them, showing increased and decreased angular velocity with constant angular momentum',
            type: 'angular_momentum_conservation_spinner',
            defaultOptions: {
                title: 'Angular Momentum: L = Iω = const.',
                showArmsIn: true,
                showArmsOut: true,
                showAngularVelocityComparison: true,
                showAnnotation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'ballisticPendulumMomentumEnergyTwoStageDiagram': {
            name: 'Ballistic Pendulum — Momentum and Energy Two-Stage Diagram',
            category: 'Mechanics',
            subcategory: 'Momentum',
            description: 'Two-stage ballistic pendulum diagram: stage 1 uses momentum conservation (bullet embeds in block), stage 2 uses energy conservation (block swings up)',
            type: 'ballistic_pendulum_two_stage',
            defaultOptions: {
                title: 'Ballistic Pendulum',
                showStageOne: true,
                showStageTwo: true,
                showMomentumConservation: true,
                showEnergyConservation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== MECHANICS — CIRCULAR MOTION ==========================
        // ============================================================

        'angularDisplacementRadiansDegreesRevolutionsDiagram': {
            name: 'Angular Displacement — Radians, Degrees, and Revolutions Diagram',
            category: 'Mechanics',
            subcategory: 'Circular Motion',
            description: 'Circle diagram showing angular displacement with radian arc-length definition and conversion table for radians, degrees, and revolutions',
            type: 'angular_displacement_radians_degrees_revolutions',
            defaultOptions: {
                title: 'Angular Displacement: rad, °, rev',
                showCircle: true,
                showArcLength: true,
                showConversionTable: true,
                showRadianDefinition: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'angularLinearVelocityRelationshipRotatingDiscDiagram': {
            name: 'Angular and Linear Velocity Relationship — Rotating Disc Diagram',
            category: 'Mechanics',
            subcategory: 'Circular Motion',
            description: 'Rotating disc showing points at different radii with tangential velocity v = rω increasing with radius',
            type: 'angular_linear_velocity_rotating_disc',
            defaultOptions: {
                title: 'v = rω: Angular & Linear Velocity',
                showDisc: true,
                showTangentialVectors: true,
                showRadiusLabels: true,
                showOmegaAnnotation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'centripetalAccelerationInwardVelocityTangentDiagram': {
            name: 'Centripetal Acceleration — Inward Acceleration and Tangential Velocity Diagram',
            category: 'Mechanics',
            subcategory: 'Circular Motion',
            description: 'Circular motion diagram showing centripetal acceleration directed toward the centre and velocity tangent to the circle at each point',
            type: 'centripetal_acceleration_inward_velocity_tangent',
            defaultOptions: {
                title: 'Centripetal Acceleration: a = v²/r',
                showCircle: true,
                showCentripetalAcceleration: true,
                showTangentialVelocity: true,
                showCentreLabel: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'conicalPendulumBankedRoadSatelliteOrbitForcesDiagram': {
            name: 'Conical Pendulum, Banked Road, and Satellite Orbit — Forces Diagram',
            category: 'Mechanics',
            subcategory: 'Circular Motion',
            description: 'Three-panel diagram showing the forces providing centripetal force in a conical pendulum (tension component), banked road (normal force component), and satellite orbit (gravity)',
            type: 'conical_pendulum_banked_road_satellite_forces',
            defaultOptions: {
                title: 'Centripetal Force Sources',
                showConicalPendulum: true,
                showBankedRoad: true,
                showSatelliteOrbit: true,
                showForceComponents: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'verticalCircleTopBottomTensionWeightForcesDiagram': {
            name: 'Vertical Circle — Top and Bottom Tension and Weight Forces Diagram',
            category: 'Mechanics',
            subcategory: 'Circular Motion',
            description: 'Vertical circle diagram comparing forces on an object at the top (T + W provide centripetal) and bottom (T − W provides centripetal) of the loop',
            type: 'vertical_circle_top_bottom_tension_weight',
            defaultOptions: {
                title: 'Vertical Circle — Forces at Top & Bottom',
                showTopPosition: true,
                showBottomPosition: true,
                showTensionArrow: true,
                showWeightArrow: true,
                showCentripetalAnnotation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'torqueLeverArmPerpendicularForceDistanceDiagram': {
            name: 'Torque — Lever Arm and Perpendicular Force-Distance Diagram',
            category: 'Mechanics',
            subcategory: 'Circular Motion',
            description: 'Diagram defining torque τ = F × d⊥ showing the perpendicular lever arm from the pivot to the line of action of the force',
            type: 'torque_lever_arm_perpendicular',
            defaultOptions: {
                title: 'Torque: τ = F × d⊥',
                showPivot: true,
                showForce: true,
                showLeverArm: true,
                showPerpendicularAnnotation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'momentOfInertiaMassDistributionAxisComparisonDiagram': {
            name: 'Moment of Inertia — Mass Distribution and Axis Comparison Diagram',
            category: 'Mechanics',
            subcategory: 'Circular Motion',
            description: 'Diagram comparing moments of inertia for different mass distributions (ring, solid disc, sphere) and rotation axis positions',
            type: 'moment_of_inertia_mass_distribution_comparison',
            defaultOptions: {
                title: 'Moment of Inertia Comparison',
                showRing: true,
                showSolidDisc: true,
                showSphere: true,
                showAxisVariation: true,
                showFormulas: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rollingObjectTranslationalRotationalKineticEnergySplitDiagram': {
            name: 'Rolling Object — Translational and Rotational Kinetic Energy Split Diagram',
            category: 'Mechanics',
            subcategory: 'Circular Motion',
            description: 'Diagram showing a rolling object with total KE split into translational (½mv²) and rotational (½Iω²) components',
            type: 'rolling_object_ke_split',
            defaultOptions: {
                title: 'Rolling KE: ½mv² + ½Iω²',
                showObject: true,
                showTranslationalKE: true,
                showRotationalKE: true,
                showEnergySplit: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'angularMomentumConservationMomentOfInertiaOmegaProductDiagram': {
            name: 'Angular Momentum Conservation — Moment of Inertia and Omega Product Diagram',
            category: 'Mechanics',
            subcategory: 'Circular Motion',
            description: 'Diagram illustrating L = Iω = constant for an isolated rotating system, showing how changing I causes inverse change in ω',
            type: 'angular_momentum_conservation_I_omega',
            defaultOptions: {
                title: 'Angular Momentum: L = Iω',
                showInitialState: true,
                showFinalState: true,
                showIomegaProduct: true,
                showConservationAnnotation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'gyroscopePrecessionTorqueAngularMomentumVectorDiagram': {
            name: 'Gyroscope Precession — Torque and Angular Momentum Vector Diagram',
            category: 'Mechanics',
            subcategory: 'Circular Motion',
            description: 'Vector diagram showing a spinning gyroscope with torque τ = dL/dt causing precession of the angular momentum vector L',
            type: 'gyroscope_precession_torque_angular_momentum',
            defaultOptions: {
                title: 'Gyroscope Precession',
                showGyroscope: true,
                showAngularMomentumVector: true,
                showTorqueVector: true,
                showPrecessionCircle: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== MECHANICS — OSCILLATIONS & WAVES =====================
        // ============================================================

        'oscillationAmplitudePeriodFrequencyPhaseLabelledDiagram': {
            name: 'Oscillation — Amplitude, Period, Frequency, and Phase Labelled Diagram',
            category: 'Mechanics',
            subcategory: 'Oscillations & Waves',
            description: 'Displacement-time graph of an oscillation with amplitude A, period T, frequency f, and phase angle φ clearly labelled',
            type: 'oscillation_amplitude_period_frequency_phase',
            defaultOptions: {
                title: 'Oscillation Parameters',
                showAmplitude: true,
                showPeriod: true,
                showFrequency: true,
                showPhase: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'shmDisplacementVelocityAccelerationPhaseRelationshipGraph': {
            name: 'SHM — Displacement, Velocity, and Acceleration Phase Relationship Graph',
            category: 'Mechanics',
            subcategory: 'Oscillations & Waves',
            description: 'Three overlaid sinusoidal graphs for displacement, velocity, and acceleration in SHM showing the 90° and 180° phase differences',
            type: 'shm_displacement_velocity_acceleration_phase',
            defaultOptions: {
                title: 'SHM Phase Relationships: x, v, a',
                showDisplacement: true,
                showVelocity: true,
                showAcceleration: true,
                showPhaseAnnotation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'shmKineticPotentialTotalEnergyVsDisplacementGraph': {
            name: 'SHM — Kinetic, Potential, and Total Energy vs Displacement Graph',
            category: 'Mechanics',
            subcategory: 'Oscillations & Waves',
            description: 'Graph of KE (parabolic), PE (parabolic), and constant total mechanical energy vs displacement for simple harmonic motion',
            type: 'shm_ke_pe_total_energy_displacement',
            defaultOptions: {
                title: 'SHM Energy vs Displacement',
                showKECurve: true,
                showPECurve: true,
                showTotalEnergy: true,
                showDisplacementAxis: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'springMassHorizontalVerticalEquilibriumOscillationDiagram': {
            name: 'Spring-Mass — Horizontal and Vertical Equilibrium Oscillation Diagram',
            category: 'Mechanics',
            subcategory: 'Oscillations & Waves',
            description: 'Side-by-side diagrams of horizontal and vertical spring-mass systems showing equilibrium position and oscillation about it',
            type: 'spring_mass_horizontal_vertical_equilibrium',
            defaultOptions: {
                title: 'Spring-Mass Oscillation',
                showHorizontal: true,
                showVertical: true,
                showEquilibriumPosition: true,
                showOscillationArrow: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'simplePendulumLengthAngleRestoringForceDiagram': {
            name: 'Simple Pendulum — Length, Angle, and Restoring Force Diagram',
            category: 'Mechanics',
            subcategory: 'Oscillations & Waves',
            description: 'Pendulum diagram showing length L, angular displacement θ, restoring force component mg sinθ, and the small-angle approximation',
            type: 'simple_pendulum_length_angle_restoring_force',
            defaultOptions: {
                title: 'Simple Pendulum — Restoring Force',
                showPendulum: true,
                showLength: true,
                showAngle: true,
                showRestoringForce: true,
                showSmallAngleApproximation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'compoundTorsionalPendulumLCCircuitSHMAnalogiesDiagram': {
            name: 'Compound and Torsional Pendulum, LC Circuit — SHM Analogies Diagram',
            category: 'Mechanics',
            subcategory: 'Oscillations & Waves',
            description: 'Three-panel analogy diagram showing compound pendulum, torsional pendulum, and LC circuit as mechanical and electrical SHM systems with equivalent quantities',
            type: 'shm_analogies_compound_torsional_lc',
            defaultOptions: {
                title: 'SHM Analogies: Mechanical & Electrical',
                showCompoundPendulum: true,
                showTorsionalPendulum: true,
                showLCCircuit: true,
                showAnalogTable: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'underdampedCriticallyDampedOverdampedDisplacementTimeComparison': {
            name: 'Underdamped, Critically Damped, and Overdamped — Displacement-Time Comparison',
            category: 'Mechanics',
            subcategory: 'Oscillations & Waves',
            description: 'Three displacement-time curves on one graph comparing underdamped oscillation, critically damped fast return, and overdamped slow return to equilibrium',
            type: 'damping_comparison_displacement_time',
            defaultOptions: {
                title: 'Damping: Under, Critical & Over',
                showUnderdamped: true,
                showCriticallyDamped: true,
                showOverdamped: true,
                showEquilibriumLine: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'resonanceFrequencyResponseAmplitudeCurveQFactorDiagram': {
            name: 'Resonance — Frequency Response, Amplitude Curve, and Q Factor Diagram',
            category: 'Mechanics',
            subcategory: 'Oscillations & Waves',
            description: 'Amplitude vs driving frequency graph showing resonance peak at natural frequency, with multiple curves for different damping levels and Q factor indicated',
            type: 'resonance_frequency_response_amplitude_q_factor',
            defaultOptions: {
                title: 'Resonance Amplitude Response',
                showMultipleDampingCurves: true,
                showResonancePeak: true,
                showNaturalFrequencyMark: true,
                showQFactor: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'coupledPendulumNormalModesSymmetricAntisymmetricDiagram': {
            name: 'Coupled Pendulum — Normal Modes, Symmetric and Antisymmetric Diagram',
            category: 'Mechanics',
            subcategory: 'Oscillations & Waves',
            description: 'Diagram showing two coupled pendulums in their two normal modes: symmetric (both swinging together) and antisymmetric (swinging in opposition)',
            type: 'coupled_pendulum_normal_modes',
            defaultOptions: {
                title: 'Coupled Pendulum Normal Modes',
                showSymmetricMode: true,
                showAntisymmetricMode: true,
                showCouplingSpring: true,
                showFrequencyAnnotation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'standingWaveNodesAntinodesParticlesSHMDiagram': {
            name: 'Standing Wave — Nodes, Antinodes, and Particles in SHM Diagram',
            category: 'Mechanics',
            subcategory: 'Oscillations & Waves',
            description: 'Standing wave diagram labelling nodes (zero amplitude) and antinodes (maximum amplitude) with particles at each position shown executing SHM',
            type: 'standing_wave_nodes_antinodes_shm',
            defaultOptions: {
                title: 'Standing Wave — Nodes & Antinodes',
                showStandingWave: true,
                showNodes: true,
                showAntinodes: true,
                showParticleSHM: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

// ============================================================
// ===== THERMAL PHYSICS & HEAT TRANSFER ======================
// ============================================================

'thermalEnergyVsTemperatureVsHeatConceptMap': {
    name: 'Thermal Energy vs Temperature vs Heat Concept Map',
    category: 'Thermal Physics',
    subcategory: 'Heat & Temperature',
    description: 'Concept map distinguishing thermal energy, temperature, and heat',
    type: 'thermal_energy_vs_temperature_vs_heat_concept_map',
    defaultOptions: {
        title: 'Thermal Energy vs Temperature vs Heat',
        showLabels: true,
        showConnections: true,
        showDefinitions: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'celsiusFahrenheitKelvinTripleScaleComparisonDiagram': {
    name: 'Celsius Fahrenheit Kelvin Triple Scale Comparison',
    category: 'Thermal Physics',
    subcategory: 'Heat & Temperature',
    description: 'Side-by-side comparison of Celsius, Fahrenheit, and Kelvin temperature scales',
    type: 'celsius_fahrenheit_kelvin_triple_scale_comparison',
    referencePoints: [
        { label: 'Absolute Zero', celsius: -273.15, fahrenheit: -459.67, kelvin: 0 },
        { label: 'Water Freezing', celsius: 0, fahrenheit: 32, kelvin: 273.15 },
        { label: 'Body Temperature', celsius: 37, fahrenheit: 98.6, kelvin: 310.15 },
        { label: 'Water Boiling', celsius: 100, fahrenheit: 212, kelvin: 373.15 }
    ],
    defaultOptions: {
        title: 'Temperature Scale Comparison',
        showReferencePoints: true,
        showConversionFormulas: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'specificHeatCapacityMaterialsComparisonBarChart': {
    name: 'Specific Heat Capacity Materials Comparison Bar Chart',
    category: 'Thermal Physics',
    subcategory: 'Heat & Temperature',
    description: 'Bar chart comparing specific heat capacities of common materials',
    type: 'specific_heat_capacity_materials_comparison_bar_chart',
    materials: [
        { name: 'Water', value: 4186, unit: 'J/kg·K', color: '#3498DB' },
        { name: 'Aluminium', value: 897, unit: 'J/kg·K', color: '#95A5A6' },
        { name: 'Iron', value: 449, unit: 'J/kg·K', color: '#7F8C8D' },
        { name: 'Copper', value: 385, unit: 'J/kg·K', color: '#E67E22' },
        { name: 'Lead', value: 128, unit: 'J/kg·K', color: '#BDC3C7' }
    ],
    defaultOptions: {
        title: 'Specific Heat Capacity Comparison',
        showValues: true,
        showUnits: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'heatingCoolingCurveWaterAllPhasesAnnotatedDiagram': {
    name: 'Heating Cooling Curve Water All Phases Annotated',
    category: 'Thermal Physics',
    subcategory: 'Heat & Temperature',
    description: 'Full heating and cooling curve for water showing all phase transitions annotated',
    type: 'heating_cooling_curve_water_all_phases_annotated',
    phases: [
        { name: 'Ice', tempStart: -20, tempEnd: 0, slope: 'rising' },
        { name: 'Melting', tempStart: 0, tempEnd: 0, slope: 'flat' },
        { name: 'Water', tempStart: 0, tempEnd: 100, slope: 'rising' },
        { name: 'Boiling', tempStart: 100, tempEnd: 100, slope: 'flat' },
        { name: 'Steam', tempStart: 100, tempEnd: 140, slope: 'rising' }
    ],
    defaultOptions: {
        title: 'Heating Curve of Water',
        showPhaseLabels: true,
        showLatentHeat: true,
        showTemperatureAxis: true,
        showHeatAxis: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'coffeeCupCalorimeterSetupCrossSectionDiagram': {
    name: 'Coffee Cup Calorimeter Setup Cross Section',
    category: 'Thermal Physics',
    subcategory: 'Calorimetry',
    description: 'Cross-section diagram of a coffee cup calorimeter experimental setup',
    type: 'coffee_cup_calorimeter_setup_cross_section',
    components: ['styrofoam_cup', 'thermometer', 'stirrer', 'lid', 'solution', 'reactants'],
    defaultOptions: {
        title: 'Coffee Cup Calorimeter',
        showLabels: true,
        showHeatFlow: true,
        showThermometer: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'linearAreaVolumeExpansionCoefficientsAnnotatedDiagram': {
    name: 'Linear Area Volume Expansion Coefficients Annotated',
    category: 'Thermal Physics',
    subcategory: 'Thermal Expansion',
    description: 'Annotated diagram showing linear, area, and volume thermal expansion with coefficients',
    type: 'linear_area_volume_expansion_coefficients_annotated',
    expansionTypes: [
        { type: 'Linear', symbol: 'α', formula: 'ΔL = αL₀ΔT', dimension: '1D' },
        { type: 'Area', symbol: 'β', formula: 'ΔA = βA₀ΔT', relation: 'β = 2α', dimension: '2D' },
        { type: 'Volume', symbol: 'γ', formula: 'ΔV = γV₀ΔT', relation: 'γ = 3α', dimension: '3D' }
    ],
    defaultOptions: {
        title: 'Thermal Expansion Types',
        showFormulas: true,
        showRelationships: true,
        showAnnotations: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'threeModesHeatTransferConductionConvectionRadiationSideBySideDiagram': {
    name: 'Three Modes Heat Transfer Conduction Convection Radiation Side By Side',
    category: 'Thermal Physics',
    subcategory: 'Heat Transfer',
    description: 'Side-by-side diagram comparing conduction, convection, and radiation heat transfer modes',
    type: 'three_modes_heat_transfer_side_by_side',
    modes: [
        { name: 'Conduction', medium: 'solid', mechanism: 'particle_vibration', example: 'metal rod' },
        { name: 'Convection', medium: 'fluid', mechanism: 'bulk_flow', example: 'boiling water' },
        { name: 'Radiation', medium: 'vacuum', mechanism: 'em_waves', example: 'sunlight' }
    ],
    defaultOptions: {
        title: 'Modes of Heat Transfer',
        showMechanism: true,
        showExamples: true,
        showArrows: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'thermalEnergyApplicationsCookingClimateEngineeringInfographic': {
    name: 'Thermal Energy Applications Cooking Climate Engineering Infographic',
    category: 'Thermal Physics',
    subcategory: 'Applications',
    description: 'Infographic of thermal energy applications in cooking, climate, and engineering',
    type: 'thermal_energy_applications_infographic',
    applications: [
        { domain: 'Cooking', examples: ['induction hob', 'microwave', 'oven'] },
        { domain: 'Climate', examples: ['greenhouse effect', 'ocean heat capacity', 'thermohaline circulation'] },
        { domain: 'Engineering', examples: ['heat exchangers', 'thermal insulation', 'engine cooling'] }
    ],
    defaultOptions: {
        title: 'Thermal Energy Applications',
        showIcons: true,
        showDescriptions: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

// ============================================================
// ===== GAS LAWS =============================================
// ============================================================

'gasStateVariablesPVnTRelationshipConceptDiagram': {
    name: 'Gas State Variables PVnT Relationship Concept Diagram',
    category: 'Gas Laws',
    subcategory: 'Ideal Gases',
    description: 'Concept diagram showing relationships between gas state variables P, V, n, and T',
    type: 'gas_state_variables_pvnt_relationship_concept',
    variables: [
        { symbol: 'P', name: 'Pressure', unit: 'Pa' },
        { symbol: 'V', name: 'Volume', unit: 'm³' },
        { symbol: 'n', name: 'Moles', unit: 'mol' },
        { symbol: 'T', name: 'Temperature', unit: 'K' }
    ],
    defaultOptions: {
        title: 'Gas State Variables',
        showRelationships: true,
        showUnits: true,
        showIdealGasLaw: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'boylesLawPVHyperbolaAndLinearisedGraphs': {
    name: 'Boyles Law PV Hyperbola And Linearised Graphs',
    category: 'Gas Laws',
    subcategory: 'Ideal Gases',
    description: 'P vs V hyperbola and linearised P vs 1/V graph illustrating Boyle\'s Law',
    type: 'boyles_law_pv_hyperbola_linearised',
    isotherms: [
        { temperature: 200, color: '#3498DB' },
        { temperature: 300, color: '#E74C3C' },
        { temperature: 400, color: '#2ECC71' }
    ],
    defaultOptions: {
        title: 'Boyle\'s Law',
        showHyperbola: true,
        showLinearised: true,
        showIsotherms: true,
        showFormula: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'charlesLawVolumeTemperatureLinearGraphAbsoluteZeroExtrapolationDiagram': {
    name: 'Charles Law Volume Temperature Linear Graph Absolute Zero Extrapolation',
    category: 'Gas Laws',
    subcategory: 'Ideal Gases',
    description: 'V vs T linear graph with extrapolation to absolute zero illustrating Charles\'s Law',
    type: 'charles_law_volume_temperature_linear_absolute_zero',
    isobars: [
        { pressure: 100, color: '#3498DB' },
        { pressure: 200, color: '#E74C3C' },
        { pressure: 300, color: '#2ECC71' }
    ],
    defaultOptions: {
        title: 'Charles\'s Law',
        showLinearGraph: true,
        showExtrapolation: true,
        showAbsoluteZero: true,
        showFormula: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'gayLussacsLawPressureTemperatureLinearGraphConstantVolumeDiagram': {
    name: 'Gay-Lussacs Law Pressure Temperature Linear Graph Constant Volume',
    category: 'Gas Laws',
    subcategory: 'Ideal Gases',
    description: 'P vs T linear graph at constant volume illustrating Gay-Lussac\'s Law',
    type: 'gay_lussacs_law_pressure_temperature_linear',
    isochores: [
        { volume: 1.0, color: '#3498DB' },
        { volume: 2.0, color: '#E74C3C' },
        { volume: 3.0, color: '#2ECC71' }
    ],
    defaultOptions: {
        title: 'Gay-Lussac\'s Law',
        showLinearGraph: true,
        showConstantVolume: true,
        showFormula: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'avogadrosLawVolumeVsMolesEqualVolumesEqualMoleculesDiagram': {
    name: 'Avogadros Law Volume vs Moles Equal Volumes Equal Molecules',
    category: 'Gas Laws',
    subcategory: 'Ideal Gases',
    description: 'V vs n graph and equal volumes equal molecules illustration for Avogadro\'s Law',
    type: 'avogadros_law_volume_vs_moles_equal_volumes',
    defaultOptions: {
        title: 'Avogadro\'s Law',
        showVnGraph: true,
        showMoleculeComparison: true,
        showFormula: true,
        showMolarVolume: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'combinedGasLawThreeVariableVennDiagramSpecialCases': {
    name: 'Combined Gas Law Three Variable Venn Diagram Special Cases',
    category: 'Gas Laws',
    subcategory: 'Ideal Gases',
    description: 'Venn diagram showing combined gas law and its special case sub-laws',
    type: 'combined_gas_law_venn_diagram_special_cases',
    specialCases: [
        { name: 'Boyle\'s Law', constant: 'T', relation: 'PV = const' },
        { name: 'Charles\'s Law', constant: 'P', relation: 'V/T = const' },
        { name: 'Gay-Lussac\'s Law', constant: 'V', relation: 'P/T = const' }
    ],
    defaultOptions: {
        title: 'Combined Gas Law',
        showVennDiagram: true,
        showSpecialCases: true,
        showFormulas: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'idealGasLawPVnRTVariableRelationshipAnnotatedDiagram': {
    name: 'Ideal Gas Law PVnRT Variable Relationship Annotated Diagram',
    category: 'Gas Laws',
    subcategory: 'Ideal Gases',
    description: 'Annotated diagram showing all variable relationships in the ideal gas law PV=nRT',
    type: 'ideal_gas_law_pvnrt_variable_relationship_annotated',
    defaultOptions: {
        title: 'Ideal Gas Law PV = nRT',
        showVariableRelationships: true,
        showUnits: true,
        showAnnotations: true,
        showRValue: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'daltonsLawPartialPressureMoleFractionMixtureStackedBarDiagram': {
    name: 'Daltons Law Partial Pressure Mole Fraction Mixture Stacked Bar',
    category: 'Gas Laws',
    subcategory: 'Ideal Gases',
    description: 'Stacked bar diagram showing partial pressures and mole fractions in a gas mixture',
    type: 'daltons_law_partial_pressure_mole_fraction_stacked_bar',
    gasMixture: [
        { name: 'N₂', moleFraction: 0.78, color: '#3498DB' },
        { name: 'O₂', moleFraction: 0.21, color: '#E74C3C' },
        { name: 'Ar', moleFraction: 0.01, color: '#2ECC71' }
    ],
    defaultOptions: {
        title: 'Dalton\'s Law of Partial Pressures',
        showStackedBar: true,
        showMoleFractions: true,
        showPartialPressures: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'compressibilityFactorZVsPressureRealVsIdealGasDeviationGraph': {
    name: 'Compressibility Factor Z vs Pressure Real vs Ideal Gas Deviation Graph',
    category: 'Gas Laws',
    subcategory: 'Real Gases',
    description: 'Z vs P graph comparing real gas deviation from ideal gas behaviour',
    type: 'compressibility_factor_z_vs_pressure_real_vs_ideal',
    gases: [
        { name: 'Ideal Gas', color: '#95A5A6', z: 1 },
        { name: 'H₂', color: '#3498DB' },
        { name: 'N₂', color: '#E74C3C' },
        { name: 'CO₂', color: '#2ECC71' }
    ],
    defaultOptions: {
        title: 'Compressibility Factor Z vs Pressure',
        showIdealLine: true,
        showRealGases: true,
        showDeviations: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'gasLawsApplicationsBreathingTyreHotAirBalloonIndustrialInfographic': {
    name: 'Gas Laws Applications Breathing Tyre Hot Air Balloon Industrial Infographic',
    category: 'Gas Laws',
    subcategory: 'Applications',
    description: 'Infographic of real-world gas law applications including breathing, tyres, and hot air balloons',
    type: 'gas_laws_applications_infographic',
    applications: [
        { name: 'Breathing', law: 'Boyle\'s Law', description: 'lung volume and pressure changes' },
        { name: 'Tyre Pressure', law: 'Gay-Lussac\'s Law', description: 'pressure increase with temperature' },
        { name: 'Hot Air Balloon', law: 'Charles\'s Law', description: 'volume increase with temperature' },
        { name: 'Industrial Gas Storage', law: 'Ideal Gas Law', description: 'high pressure cylinders' }
    ],
    defaultOptions: {
        title: 'Gas Laws Applications',
        showIcons: true,
        showLawLinks: true,
        showDescriptions: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

// ============================================================
// ===== KINETIC THEORY =======================================
// ============================================================

'kineticTheoryPostulatesGasMoleculeRandomMotionAnnotatedDiagram': {
    name: 'Kinetic Theory Postulates Gas Molecule Random Motion Annotated',
    category: 'Kinetic Theory',
    subcategory: 'Kinetic Model',
    description: 'Annotated diagram of gas molecules in random motion illustrating kinetic theory postulates',
    type: 'kinetic_theory_postulates_random_motion_annotated',
    postulates: [
        'Large number of identical molecules',
        'Molecules in continuous random motion',
        'Negligible intermolecular forces except during collision',
        'Elastic collisions',
        'Negligible molecular volume compared to container'
    ],
    defaultOptions: {
        title: 'Kinetic Theory Postulates',
        showMolecules: true,
        showMotionArrows: true,
        showPostulates: true,
        showAnnotations: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'moleculeCollisionCubicBoxMomentumTransferPressureDerivationDiagram': {
    name: 'Molecule Collision Cubic Box Momentum Transfer Pressure Derivation',
    category: 'Kinetic Theory',
    subcategory: 'Kinetic Model',
    description: 'Diagram of a molecule colliding with a wall in a cubic box for pressure derivation',
    type: 'molecule_collision_cubic_box_pressure_derivation',
    defaultOptions: {
        title: 'Pressure Derivation from Kinetic Theory',
        showCubicBox: true,
        showMolecule: true,
        showMomentumChange: true,
        showDerivationSteps: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'averageKineticEnergyTemperatureProportionalityGraphWithBoltzmannAnnotation': {
    name: 'Average Kinetic Energy Temperature Proportionality Graph With Boltzmann Annotation',
    category: 'Kinetic Theory',
    subcategory: 'Kinetic Model',
    description: 'Graph showing proportionality between average kinetic energy and temperature with Boltzmann constant annotation',
    type: 'average_kinetic_energy_temperature_proportionality_boltzmann',
    defaultOptions: {
        title: 'Average KE vs Temperature',
        showProportionalityGraph: true,
        showBoltzmannAnnotation: true,
        showFormula: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'maxwellBoltzmannDistributionVmpVmeanVrmsAnnotatedCurveTemperatureEffect': {
    name: 'Maxwell Boltzmann Distribution Vmp Vmean Vrms Annotated Curve Temperature Effect',
    category: 'Kinetic Theory',
    subcategory: 'Speed Distribution',
    description: 'Maxwell-Boltzmann speed distribution curve annotated with vmp, vmean, vrms and temperature effect',
    type: 'maxwell_boltzmann_distribution_annotated',
    temperatures: [
        { value: 300, color: '#3498DB', label: '300 K' },
        { value: 600, color: '#E74C3C', label: '600 K' },
        { value: 1200, color: '#E67E22', label: '1200 K' }
    ],
    defaultOptions: {
        title: 'Maxwell-Boltzmann Distribution',
        showVmp: true,
        showVmean: true,
        showVrms: true,
        showTemperatureEffect: true,
        showAnnotations: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'degreesOfFreedomMonatomicDiatomicNonlinearMoleculeRotationalTranslationalVibrationalDiagram': {
    name: 'Degrees Of Freedom Monatomic Diatomic Nonlinear Molecule Rotational Translational Vibrational',
    category: 'Kinetic Theory',
    subcategory: 'Equipartition',
    description: 'Diagram comparing translational, rotational, and vibrational degrees of freedom for different molecule types',
    type: 'degrees_of_freedom_molecule_types',
    moleculeTypes: [
        { type: 'Monatomic', translational: 3, rotational: 0, vibrational: 0, example: 'He, Ar' },
        { type: 'Diatomic', translational: 3, rotational: 2, vibrational: 1, example: 'N₂, O₂' },
        { type: 'Nonlinear', translational: 3, rotational: 3, vibrational: 'multiple', example: 'H₂O' }
    ],
    defaultOptions: {
        title: 'Degrees of Freedom',
        showMoleculeModels: true,
        showDOFBreakdown: true,
        showEquipartitionFormula: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'internalEnergyTemperatureOnlyDependenceIdealGasJouleExpansionDiagram': {
    name: 'Internal Energy Temperature Only Dependence Ideal Gas Joule Expansion',
    category: 'Kinetic Theory',
    subcategory: 'Internal Energy',
    description: 'Diagram illustrating that ideal gas internal energy depends only on temperature via Joule expansion experiment',
    type: 'internal_energy_temperature_dependence_joule_expansion',
    defaultOptions: {
        title: 'Internal Energy of an Ideal Gas',
        showJouleExpansion: true,
        showTemperatureDependence: true,
        showAnnotations: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'meanFreePathCollisionCrossSectionMolecularDiameterZigzagPathDiagram': {
    name: 'Mean Free Path Collision Cross Section Molecular Diameter Zigzag Path',
    category: 'Kinetic Theory',
    subcategory: 'Transport Properties',
    description: 'Zigzag path diagram illustrating mean free path, collision cross section, and molecular diameter',
    type: 'mean_free_path_collision_cross_section_zigzag',
    defaultOptions: {
        title: 'Mean Free Path',
        showZigzagPath: true,
        showCollisionCrossSection: true,
        showFormula: true,
        showAnnotations: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'diffusionViscosityThermalConductivityMolecularTransportComparisonDiagram': {
    name: 'Diffusion Viscosity Thermal Conductivity Molecular Transport Comparison',
    category: 'Kinetic Theory',
    subcategory: 'Transport Properties',
    description: 'Comparison diagram of molecular transport phenomena: diffusion, viscosity, and thermal conductivity',
    type: 'molecular_transport_diffusion_viscosity_conductivity_comparison',
    transportProperties: [
        { name: 'Diffusion', quantity: 'mass', gradient: 'concentration', law: 'Fick\'s Law' },
        { name: 'Viscosity', quantity: 'momentum', gradient: 'velocity', law: 'Newton\'s Law' },
        { name: 'Thermal Conductivity', quantity: 'energy', gradient: 'temperature', law: 'Fourier\'s Law' }
    ],
    defaultOptions: {
        title: 'Molecular Transport Properties',
        showComparison: true,
        showLaws: true,
        showGradients: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'kineticTheoryDerivationGasLawsFamilyTreeFlowchartDiagram': {
    name: 'Kinetic Theory Derivation Gas Laws Family Tree Flowchart',
    category: 'Kinetic Theory',
    subcategory: 'Kinetic Model',
    description: 'Flowchart family tree showing how kinetic theory derives the gas laws',
    type: 'kinetic_theory_gas_laws_family_tree_flowchart',
    defaultOptions: {
        title: 'Gas Laws from Kinetic Theory',
        showFlowchart: true,
        showDerivationSteps: true,
        showGasLaws: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'grahamsLawEffusionAtmosphericEscapeSpeedOfSoundKineticTheoryApplicationsInfographic': {
    name: 'Grahams Law Effusion Atmospheric Escape Speed Of Sound Kinetic Theory Applications Infographic',
    category: 'Kinetic Theory',
    subcategory: 'Applications',
    description: 'Infographic of kinetic theory applications including Graham\'s law, effusion, atmospheric escape, and speed of sound',
    type: 'kinetic_theory_applications_infographic',
    applications: [
        { name: 'Graham\'s Law', description: 'rate of effusion inversely proportional to √M' },
        { name: 'Atmospheric Escape', description: 'escape velocity vs molecular speeds' },
        { name: 'Speed of Sound', description: 'depends on rms speed of molecules' }
    ],
    defaultOptions: {
        title: 'Kinetic Theory Applications',
        showIcons: true,
        showFormulas: true,
        showDescriptions: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

// ============================================================
// ===== THERMODYNAMICS =======================================
// ============================================================

'openClosedIsolatedSystemBoundaryHeatWorkMassFlowDiagram': {
    name: 'Open Closed Isolated System Boundary Heat Work Mass Flow',
    category: 'Thermodynamics',
    subcategory: 'Thermodynamic Systems',
    description: 'Diagram comparing open, closed, and isolated thermodynamic systems with boundary interactions',
    type: 'open_closed_isolated_system_boundary',
    systemTypes: [
        { type: 'Open', heatTransfer: true, workTransfer: true, massTransfer: true, example: 'boiling pot' },
        { type: 'Closed', heatTransfer: true, workTransfer: true, massTransfer: false, example: 'piston-cylinder' },
        { type: 'Isolated', heatTransfer: false, workTransfer: false, massTransfer: false, example: 'thermos flask' }
    ],
    defaultOptions: {
        title: 'Types of Thermodynamic Systems',
        showBoundaries: true,
        showInteractions: true,
        showExamples: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'zerothLawThermalEquilibriumTransitivityABCThermometerDiagram': {
    name: 'Zeroth Law Thermal Equilibrium Transitivity ABC Thermometer',
    category: 'Thermodynamics',
    subcategory: 'Laws of Thermodynamics',
    description: 'Diagram illustrating the zeroth law via thermal equilibrium transitivity with three bodies A, B, C',
    type: 'zeroth_law_thermal_equilibrium_transitivity_abc',
    defaultOptions: {
        title: 'Zeroth Law of Thermodynamics',
        showThreeBodies: true,
        showThermometer: true,
        showTransitivity: true,
        showAnnotations: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'firstLawDeltaUQMinusWEnergyFlowSystemSurroundingsDiagram': {
    name: 'First Law Delta U Q Minus W Energy Flow System Surroundings',
    category: 'Thermodynamics',
    subcategory: 'Laws of Thermodynamics',
    description: 'Energy flow diagram for the first law of thermodynamics ΔU = Q - W',
    type: 'first_law_delta_u_q_minus_w_energy_flow',
    defaultOptions: {
        title: 'First Law of Thermodynamics',
        showEnergyFlow: true,
        showSystemBoundary: true,
        showFormula: true,
        showSignConventions: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'entropyUniverseIncreaseIrreversibleProcessesArrowOfTimeDiagram': {
    name: 'Entropy Universe Increase Irreversible Processes Arrow Of Time',
    category: 'Thermodynamics',
    subcategory: 'Laws of Thermodynamics',
    description: 'Diagram illustrating entropy increase in irreversible processes and the arrow of time',
    type: 'entropy_universe_increase_irreversible_arrow_of_time',
    defaultOptions: {
        title: 'Entropy and the Second Law',
        showEntropyIncrease: true,
        showIrreversibleProcesses: true,
        showArrowOfTime: true,
        showAnnotations: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'carnotCycleFourProcessPVDiagramWithEfficiencyAnnotation': {
    name: 'Carnot Cycle Four Process PV Diagram With Efficiency Annotation',
    category: 'Thermodynamics',
    subcategory: 'Thermodynamic Cycles',
    description: 'P-V diagram of the Carnot cycle with all four processes and efficiency annotation',
    type: 'carnot_cycle_four_process_pv_diagram',
    processes: [
        { name: 'Isothermal Expansion', type: 'isothermal', color: '#E74C3C' },
        { name: 'Adiabatic Expansion', type: 'adiabatic', color: '#3498DB' },
        { name: 'Isothermal Compression', type: 'isothermal', color: '#2ECC71' },
        { name: 'Adiabatic Compression', type: 'adiabatic', color: '#9B59B6' }
    ],
    defaultOptions: {
        title: 'Carnot Cycle',
        showPVDiagram: true,
        showEfficiency: true,
        showTemperatures: true,
        showAnnotations: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'refrigeratorHeatPumpEnergyFlowQcQhWorkCOPComparisonDiagram': {
    name: 'Refrigerator Heat Pump Energy Flow Qc Qh Work COP Comparison',
    category: 'Thermodynamics',
    subcategory: 'Thermodynamic Cycles',
    description: 'Energy flow comparison diagram for refrigerator and heat pump with COP annotations',
    type: 'refrigerator_heat_pump_energy_flow_cop',
    defaultOptions: {
        title: 'Refrigerator vs Heat Pump',
        showEnergyFlow: true,
        showQcQhW: true,
        showCOP: true,
        showComparison: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'thirdLawEntropyApproachingZeroAbsoluteZeroTemperatureCurveDiagram': {
    name: 'Third Law Entropy Approaching Zero Absolute Zero Temperature Curve',
    category: 'Thermodynamics',
    subcategory: 'Laws of Thermodynamics',
    description: 'Entropy vs temperature curve showing entropy approaching zero as temperature approaches absolute zero',
    type: 'third_law_entropy_approaching_zero_absolute_zero',
    defaultOptions: {
        title: 'Third Law of Thermodynamics',
        showEntropyTemperatureCurve: true,
        showAbsoluteZero: true,
        showAnnotations: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'thermodynamicPotentialsUFGHNaturalVariablesLegendreTransformationDiagram': {
    name: 'Thermodynamic Potentials UFGH Natural Variables Legendre Transformation',
    category: 'Thermodynamics',
    subcategory: 'Thermodynamic Potentials',
    description: 'Diagram of thermodynamic potentials U, F, G, H with natural variables and Legendre transformations',
    type: 'thermodynamic_potentials_ufgh_legendre',
    potentials: [
        { symbol: 'U', name: 'Internal Energy', variables: 'S, V' },
        { symbol: 'F', name: 'Helmholtz Free Energy', variables: 'T, V' },
        { symbol: 'G', name: 'Gibbs Free Energy', variables: 'T, P' },
        { symbol: 'H', name: 'Enthalpy', variables: 'S, P' }
    ],
    defaultOptions: {
        title: 'Thermodynamic Potentials',
        showNaturalVariables: true,
        showLegendreTransforms: true,
        showRelationships: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'pvDiagramIsothermalIsobaricIsochoricAdiabaticProcessPathsAnnotatedDiagram': {
    name: 'PV Diagram Isothermal Isobaric Isochoric Adiabatic Process Paths Annotated',
    category: 'Thermodynamics',
    subcategory: 'Thermodynamic Processes',
    description: 'Annotated P-V diagram showing isothermal, isobaric, isochoric, and adiabatic process paths',
    type: 'pv_diagram_four_process_paths_annotated',
    processes: [
        { name: 'Isothermal', constant: 'T', color: '#E74C3C', formula: 'PV = const' },
        { name: 'Isobaric', constant: 'P', color: '#3498DB', formula: 'V/T = const' },
        { name: 'Isochoric', constant: 'V', color: '#2ECC71', formula: 'P/T = const' },
        { name: 'Adiabatic', constant: 'Q', color: '#9B59B6', formula: 'PVγ = const' }
    ],
    defaultOptions: {
        title: 'Thermodynamic Process Paths',
        showPVDiagram: true,
        showAllProcesses: true,
        showFormulas: true,
        showAnnotations: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'thermodynamicsApplicationsPowerPlantRefrigerationBiologyInformationInfographic': {
    name: 'Thermodynamics Applications Power Plant Refrigeration Biology Information Infographic',
    category: 'Thermodynamics',
    subcategory: 'Applications',
    description: 'Infographic of thermodynamics applications in power plants, refrigeration, biology, and information theory',
    type: 'thermodynamics_applications_infographic',
    applications: [
        { domain: 'Power Plants', law: 'Second Law', example: 'steam turbine efficiency' },
        { domain: 'Refrigeration', law: 'First Law', example: 'heat pump cycle' },
        { domain: 'Biology', law: 'Second Law', example: 'metabolic entropy' },
        { domain: 'Information Theory', law: 'Second Law', example: 'Maxwell\'s demon' }
    ],
    defaultOptions: {
        title: 'Thermodynamics Applications',
        showIcons: true,
        showLawLinks: true,
        showDescriptions: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

// ============================================================
// ===== HEAT TRANSFER (ADVANCED) =============================
// ============================================================

'heatFluxThermalResistanceElectricalAnalogyDeltaTCurrentVoltageDiagram': {
    name: 'Heat Flux Thermal Resistance Electrical Analogy Delta T Current Voltage',
    category: 'Heat Transfer',
    subcategory: 'Conduction',
    description: 'Diagram showing thermal resistance electrical analogy with ΔT as voltage and heat flux as current',
    type: 'heat_flux_thermal_resistance_electrical_analogy',
    analogies: [
        { thermal: 'Heat Flux (Q̇)', electrical: 'Current (I)' },
        { thermal: 'Temperature Difference (ΔT)', electrical: 'Voltage (V)' },
        { thermal: 'Thermal Resistance (R)', electrical: 'Electrical Resistance (R)' }
    ],
    defaultOptions: {
        title: 'Thermal-Electrical Analogy',
        showAnalogy: true,
        showCircuitDiagram: true,
        showFormulas: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'fouriersLawTemperatureGradientSlabCrossSectionHeatFlowAnnotatedDiagram': {
    name: 'Fouriers Law Temperature Gradient Slab Cross Section Heat Flow Annotated',
    category: 'Heat Transfer',
    subcategory: 'Conduction',
    description: 'Cross-section slab diagram annotated with temperature gradient and heat flow for Fourier\'s Law',
    type: 'fouriers_law_temperature_gradient_slab_cross_section',
    defaultOptions: {
        title: 'Fourier\'s Law of Conduction',
        showSlabCrossSection: true,
        showTemperatureGradient: true,
        showHeatFlowArrow: true,
        showFormula: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'naturalForcedConvectionBoundaryLayerVelocityTemperatureProfileDiagram': {
    name: 'Natural Forced Convection Boundary Layer Velocity Temperature Profile',
    category: 'Heat Transfer',
    subcategory: 'Convection',
    description: 'Boundary layer velocity and temperature profile diagram for natural and forced convection',
    type: 'natural_forced_convection_boundary_layer_profiles',
    convectionTypes: [
        { type: 'Natural', driver: 'buoyancy', profile: 'curved' },
        { type: 'Forced', driver: 'external flow', profile: 'boundary layer' }
    ],
    defaultOptions: {
        title: 'Convection Boundary Layers',
        showVelocityProfile: true,
        showTemperatureProfile: true,
        showBothTypes: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'blackbodySpectralEmissivePowerPlancksLawWiensDisplacementAnnotatedCurveDiagram': {
    name: 'Blackbody Spectral Emissive Power Plancks Law Wiens Displacement Annotated Curve',
    category: 'Heat Transfer',
    subcategory: 'Radiation',
    description: 'Annotated blackbody spectral emissive power curves with Planck\'s Law and Wien\'s displacement law',
    type: 'blackbody_spectral_emissive_power_plancks_wiens',
    temperatures: [
        { value: 3000, color: '#E74C3C', label: '3000 K' },
        { value: 4000, color: '#E67E22', label: '4000 K' },
        { value: 5000, color: '#F1C40F', label: '5000 K' },
        { value: 6000, color: '#FFFFFF', label: '6000 K (Sun)' }
    ],
    defaultOptions: {
        title: 'Blackbody Radiation Spectrum',
        showPlancksLaw: true,
        showWiensDisplacement: true,
        showStefanBoltzmann: true,
        showAnnotations: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'thermalResistanceNetworkSeriesParallelConvectionConductionRadiationWallDiagram': {
    name: 'Thermal Resistance Network Series Parallel Convection Conduction Radiation Wall',
    category: 'Heat Transfer',
    subcategory: 'Conduction',
    description: 'Thermal resistance network diagram for a wall with series and parallel convection, conduction, and radiation',
    type: 'thermal_resistance_network_series_parallel_wall',
    defaultOptions: {
        title: 'Thermal Resistance Network',
        showSeriesNetwork: true,
        showParallelNetwork: true,
        showAllModes: true,
        showWallCrossSection: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'lumpedCapacitanceExponentialCoolingCurveTimeConstantBiotNumberDiagram': {
    name: 'Lumped Capacitance Exponential Cooling Curve Time Constant Biot Number',
    category: 'Heat Transfer',
    subcategory: 'Transient Heat Transfer',
    description: 'Exponential cooling curve diagram for lumped capacitance method with time constant and Biot number',
    type: 'lumped_capacitance_exponential_cooling_biot_number',
    defaultOptions: {
        title: 'Lumped Capacitance Model',
        showCoolingCurve: true,
        showTimeConstant: true,
        showBiotNumber: true,
        showFormula: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'heatPipeEvaporatorCondensorWickCapillaryActionOperationCrossSectionDiagram': {
    name: 'Heat Pipe Evaporator Condensor Wick Capillary Action Operation Cross Section',
    category: 'Heat Transfer',
    subcategory: 'Advanced Heat Transfer',
    description: 'Cross-section diagram of a heat pipe showing evaporator, condenser, wick, and capillary action',
    type: 'heat_pipe_cross_section_operation',
    components: ['evaporator_section', 'adiabatic_section', 'condenser_section', 'wick', 'vapour_core'],
    defaultOptions: {
        title: 'Heat Pipe Operation',
        showCrossSection: true,
        showFluidFlow: true,
        showCapillaryAction: true,
        showLabels: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'heatTransferApplicationsBuildingElectronicsAerospaceClimateInfographic': {
    name: 'Heat Transfer Applications Building Electronics Aerospace Climate Infographic',
    category: 'Heat Transfer',
    subcategory: 'Applications',
    description: 'Infographic of heat transfer applications in building, electronics, aerospace, and climate',
    type: 'heat_transfer_applications_infographic',
    applications: [
        { domain: 'Building', examples: ['wall insulation', 'double glazing', 'underfloor heating'] },
        { domain: 'Electronics', examples: ['CPU heat sinks', 'thermal paste', 'cooling fans'] },
        { domain: 'Aerospace', examples: ['re-entry heat shields', 'engine cooling', 'thermal blankets'] },
        { domain: 'Climate', examples: ['ocean heat uptake', 'albedo effect', 'greenhouse gases'] }
    ],
    defaultOptions: {
        title: 'Heat Transfer Applications',
        showIcons: true,
        showDescriptions: true,
        showModes: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

// ============================================================
// ===== WAVES — GENERAL ======================================
// ============================================================

'progressiveWaveEnergyTransferNotMatterDiagram': {
    name: 'Progressive Wave Energy Transfer Not Matter Diagram',
    category: 'Waves',
    subcategory: 'Wave Properties',
    description: 'Diagram showing a progressive wave transferring energy without net matter transfer',
    type: 'progressive_wave_energy_transfer_not_matter',
    defaultOptions: {
        title: 'Progressive Wave Energy Transfer',
        showWaveProfile: true,
        showEnergyFlow: true,
        showParticleMotion: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'waveAnatomyAmplitudeWavelengthPeriodLabelledDiagram': {
    name: 'Wave Anatomy Amplitude Wavelength Period Labelled Diagram',
    category: 'Waves',
    subcategory: 'Wave Properties',
    description: 'Labelled diagram of a wave showing amplitude, wavelength, period, crest, and trough',
    type: 'wave_anatomy_labelled',
    labels: ['amplitude', 'wavelength', 'period', 'crest', 'trough', 'equilibrium'],
    defaultOptions: {
        title: 'Wave Anatomy',
        showLabels: true,
        showMeasurements: true,
        showEquilibrium: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'transverseVsLongitudinalParticleMotionDiagram': {
    name: 'Transverse vs Longitudinal Particle Motion Diagram',
    category: 'Waves',
    subcategory: 'Wave Types',
    description: 'Side-by-side comparison of transverse and longitudinal wave particle motion',
    type: 'transverse_vs_longitudinal_particle_motion',
    defaultOptions: {
        title: 'Transverse vs Longitudinal Waves',
        showTransverse: true,
        showLongitudinal: true,
        showParticleMotion: true,
        showWaveDirection: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'displacementTimeAndDisplacementPositionGraphComparison': {
    name: 'Displacement Time And Displacement Position Graph Comparison',
    category: 'Waves',
    subcategory: 'Wave Properties',
    description: 'Side-by-side comparison of displacement-time and displacement-position graphs for a wave',
    type: 'displacement_time_and_position_graph_comparison',
    defaultOptions: {
        title: 'Wave Graphs Comparison',
        showDisplacementTime: true,
        showDisplacementPosition: true,
        showPeriodAndWavelength: true,
        showAnnotations: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'waveSpeedTensionDensityStringDiagram': {
    name: 'Wave Speed Tension Density String Diagram',
    category: 'Waves',
    subcategory: 'Wave Properties',
    description: 'Diagram showing wave speed dependence on tension and linear density for a string',
    type: 'wave_speed_tension_density_string',
    defaultOptions: {
        title: 'Wave Speed on a String',
        showStringDiagram: true,
        showFormula: true,
        showTensionArrows: true,
        showAnnotations: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'inverseSquareLawPointSourceIntensityDiagram': {
    name: 'Inverse Square Law Point Source Intensity Diagram',
    category: 'Waves',
    subcategory: 'Wave Intensity',
    description: 'Diagram illustrating the inverse square law for intensity from a point source',
    type: 'inverse_square_law_point_source_intensity',
    defaultOptions: {
        title: 'Inverse Square Law',
        showPointSource: true,
        showSphericalWavefronts: true,
        showIntensityAnnotations: true,
        showFormula: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'malussLawPolaroidAnalyserOrientationDiagram': {
    name: 'Malus\'s Law Polaroid Analyser Orientation Diagram',
    category: 'Waves',
    subcategory: 'Polarisation',
    description: 'Diagram illustrating Malus\'s Law with polariser and analyser at varying orientations',
    type: 'maluss_law_polaroid_analyser_orientation',
    defaultOptions: {
        title: 'Malus\'s Law',
        showPolariser: true,
        showAnalyser: true,
        showIntensityVariation: true,
        showFormula: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'reflectionRefractionDiffractionBoundaryComparisonDiagram': {
    name: 'Reflection Refraction Diffraction Boundary Comparison Diagram',
    category: 'Waves',
    subcategory: 'Wave Behaviour',
    description: 'Side-by-side comparison of reflection, refraction, and diffraction at boundaries',
    type: 'reflection_refraction_diffraction_boundary_comparison',
    defaultOptions: {
        title: 'Wave Behaviour at Boundaries',
        showReflection: true,
        showRefraction: true,
        showDiffraction: true,
        showAngles: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'dopplerWavefrontCompressionRecessionDiagram': {
    name: 'Doppler Wavefront Compression Recession Diagram',
    category: 'Waves',
    subcategory: 'Doppler Effect',
    description: 'Wavefront diagram showing compression and recession for the Doppler effect',
    type: 'doppler_wavefront_compression_recession',
    defaultOptions: {
        title: 'Doppler Effect',
        showMovingSource: true,
        showCompressedWavefronts: true,
        showRecedingWavefronts: true,
        showFrequencyChange: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'phaseDifferencePathDifferenceWavelengthFractionDiagram': {
    name: 'Phase Difference Path Difference Wavelength Fraction Diagram',
    category: 'Waves',
    subcategory: 'Wave Properties',
    description: 'Diagram showing relationship between phase difference, path difference, and wavelength fraction',
    type: 'phase_difference_path_difference_wavelength_fraction',
    defaultOptions: {
        title: 'Phase and Path Difference',
        showPhaseRelationship: true,
        showPathDifference: true,
        showWavelengthFraction: true,
        showFormula: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'diffractionGratingSetupAngleMeasurementDiagram': {
    name: 'Diffraction Grating Setup Angle Measurement Diagram',
    category: 'Waves',
    subcategory: 'Diffraction',
    description: 'Experimental setup diagram for diffraction grating with angle measurement',
    type: 'diffraction_grating_setup_angle_measurement',
    defaultOptions: {
        title: 'Diffraction Grating Setup',
        showGrating: true,
        showIncidentBeam: true,
        showDiffractedOrders: true,
        showAngleMeasurement: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'ultrasoundEchoSonarDistanceCalculationDiagram': {
    name: 'Ultrasound Echo Sonar Distance Calculation Diagram',
    category: 'Waves',
    subcategory: 'Sound & Ultrasound',
    description: 'Diagram of ultrasound echo/sonar technique for distance calculation',
    type: 'ultrasound_echo_sonar_distance_calculation',
    defaultOptions: {
        title: 'Ultrasound Echo Sonar',
        showTransmitter: true,
        showEchoPulse: true,
        showTimeDelay: true,
        showDistanceFormula: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

// ============================================================
// ===== STATIONARY WAVES =====================================
// ============================================================

'twoOppositeProgressiveWavesSuperposingToFormStationaryDiagram': {
    name: 'Two Opposite Progressive Waves Superposing To Form Stationary',
    category: 'Waves',
    subcategory: 'Stationary Waves',
    description: 'Diagram showing two progressive waves travelling in opposite directions superposing to form a stationary wave',
    type: 'two_progressive_waves_superposing_stationary',
    defaultOptions: {
        title: 'Formation of Stationary Waves',
        showProgressiveWaves: true,
        showSuperposition: true,
        showStationaryWave: true,
        showAnimationSteps: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'nodeAntinodeLambdaHalfSpacingLabelledDiagram': {
    name: 'Node Antinode Lambda Half Spacing Labelled Diagram',
    category: 'Waves',
    subcategory: 'Stationary Waves',
    description: 'Labelled stationary wave diagram showing nodes, antinodes, and λ/2 spacing',
    type: 'node_antinode_lambda_half_spacing_labelled',
    defaultOptions: {
        title: 'Nodes and Antinodes',
        showNodes: true,
        showAntinodes: true,
        showLambdaHalfSpacing: true,
        showLabels: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'firstSecondThirdHarmonicStringPatternDiagram': {
    name: 'First Second Third Harmonic String Pattern Diagram',
    category: 'Waves',
    subcategory: 'Stationary Waves',
    description: 'Diagram showing first, second, and third harmonic standing wave patterns on a string',
    type: 'first_second_third_harmonic_string_pattern',
    harmonics: [
        { order: 1, nodes: 2, antinodes: 1, wavelengthRelation: 'λ = 2L' },
        { order: 2, nodes: 3, antinodes: 2, wavelengthRelation: 'λ = L' },
        { order: 3, nodes: 4, antinodes: 3, wavelengthRelation: 'λ = 2L/3' }
    ],
    defaultOptions: {
        title: 'Harmonics on a String',
        showPatterns: true,
        showWavelengthRelations: true,
        showFrequencyRelations: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'mersennesLawsTensionLengthFrequencyRelationshipDiagram': {
    name: 'Mersennes Laws Tension Length Frequency Relationship Diagram',
    category: 'Waves',
    subcategory: 'Stationary Waves',
    description: 'Diagram illustrating Mersenne\'s laws relating tension, length, and frequency of string vibration',
    type: 'mersennes_laws_tension_length_frequency',
    laws: [
        { name: 'Length Law', relation: 'f ∝ 1/L', constant: 'T, μ' },
        { name: 'Tension Law', relation: 'f ∝ √T', constant: 'L, μ' },
        { name: 'Density Law', relation: 'f ∝ 1/√μ', constant: 'L, T' }
    ],
    defaultOptions: {
        title: 'Mersenne\'s Laws',
        showStringDiagram: true,
        showLaws: true,
        showFormulas: true,
        showGraphs: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'openClosedPipeHarmonicDisplacementPressureNodeDiagram': {
    name: 'Open Closed Pipe Harmonic Displacement Pressure Node Diagram',
    category: 'Waves',
    subcategory: 'Stationary Waves',
    description: 'Diagram comparing harmonics in open and closed pipes with displacement and pressure node positions',
    type: 'open_closed_pipe_harmonic_displacement_pressure_node',
    pipeTypes: [
        { type: 'Open Pipe', harmonics: [1, 2, 3], endCondition: 'antinode at both ends' },
        { type: 'Closed Pipe', harmonics: [1, 3, 5], endCondition: 'node at closed, antinode at open' }
    ],
    defaultOptions: {
        title: 'Harmonics in Open and Closed Pipes',
        showDisplacementNodes: true,
        showPressureNodes: true,
        showBothPipeTypes: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'resonanceCurveDrivingFrequencyAmplitudeQFactorDiagram': {
    name: 'Resonance Curve Driving Frequency Amplitude Q Factor Diagram',
    category: 'Waves',
    subcategory: 'Resonance',
    description: 'Resonance curve showing amplitude vs driving frequency with Q factor annotation',
    type: 'resonance_curve_driving_frequency_amplitude_q_factor',
    dampingLevels: [
        { label: 'Low damping', qFactor: 'high', color: '#E74C3C' },
        { label: 'Medium damping', qFactor: 'medium', color: '#3498DB' },
        { label: 'High damping', qFactor: 'low', color: '#2ECC71' }
    ],
    defaultOptions: {
        title: 'Resonance Curves',
        showResonancePeak: true,
        showQFactor: true,
        showDampingVariation: true,
        showAnnotations: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'stationaryWaveKineticPotentialEnergyDistributionDiagram': {
    name: 'Stationary Wave Kinetic Potential Energy Distribution Diagram',
    category: 'Waves',
    subcategory: 'Stationary Waves',
    description: 'Diagram showing kinetic and potential energy distribution along a stationary wave',
    type: 'stationary_wave_kinetic_potential_energy_distribution',
    defaultOptions: {
        title: 'Energy in Stationary Waves',
        showWaveProfile: true,
        showKineticEnergy: true,
        showPotentialEnergy: true,
        showNodeAntinode: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'stationaryWaveEquationSpatialTemporalFactorDiagram': {
    name: 'Stationary Wave Equation Spatial Temporal Factor Diagram',
    category: 'Waves',
    subcategory: 'Stationary Waves',
    description: 'Diagram illustrating the spatial and temporal factors of the stationary wave equation',
    type: 'stationary_wave_equation_spatial_temporal_factors',
    defaultOptions: {
        title: 'Stationary Wave Equation',
        showEquation: true,
        showSpatialFactor: true,
        showTemporalFactor: true,
        showAnnotations: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'chladniPatternSandNodal2DPlatesDiagram': {
    name: 'Chladni Pattern Sand Nodal 2D Plates Diagram',
    category: 'Waves',
    subcategory: 'Stationary Waves',
    description: 'Diagram of Chladni patterns showing sand accumulating at nodal lines on 2D vibrating plates',
    type: 'chladni_pattern_sand_nodal_2d_plates',
    modes: [
        { m: 1, n: 1, pattern: 'cross' },
        { m: 2, n: 1, pattern: 'triple_lines' },
        { m: 2, n: 2, pattern: 'grid' }
    ],
    defaultOptions: {
        title: 'Chladni Patterns',
        showPlate: true,
        showSandPatterns: true,
        showNodalLines: true,
        showMultipleModes: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'harmonicSpectrumTimbreComparisonFluteViolinDiagram': {
    name: 'Harmonic Spectrum Timbre Comparison Flute Violin Diagram',
    category: 'Waves',
    subcategory: 'Sound',
    description: 'Harmonic spectrum comparison diagram showing how timbre differs between flute and violin',
    type: 'harmonic_spectrum_timbre_comparison_flute_violin',
    instruments: [
        { name: 'Flute', harmonicStrengths: [1.0, 0.3, 0.1, 0.05], color: '#3498DB' },
        { name: 'Violin', harmonicStrengths: [1.0, 0.8, 0.6, 0.4], color: '#E74C3C' }
    ],
    defaultOptions: {
        title: 'Harmonic Spectra and Timbre',
        showHarmonicSpectrum: true,
        showTimbreComparison: true,
        showWaveforms: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'rectangularMembrane2DModePatternDiagram': {
    name: 'Rectangular Membrane 2D Mode Pattern Diagram',
    category: 'Waves',
    subcategory: 'Stationary Waves',
    description: 'Diagram of normal mode patterns for a 2D rectangular membrane',
    type: 'rectangular_membrane_2d_mode_pattern',
    modes: [
        { m: 1, n: 1 }, { m: 1, n: 2 }, { m: 2, n: 1 }, { m: 2, n: 2 }
    ],
    defaultOptions: {
        title: '2D Membrane Mode Patterns',
        showMembraneOutline: true,
        showNodalLines: true,
        showMultipleModes: true,
        showFrequencyRatios: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'laserCavityStandingEMWaveMirrorResonatorDiagram': {
    name: 'Laser Cavity Standing EM Wave Mirror Resonator Diagram',
    category: 'Waves',
    subcategory: 'Stationary Waves',
    description: 'Diagram of a laser cavity showing standing EM waves between mirror resonators',
    type: 'laser_cavity_standing_em_wave_mirror_resonator',
    components: ['fully_reflective_mirror', 'gain_medium', 'partially_transmissive_mirror', 'standing_em_waves'],
    defaultOptions: {
        title: 'Laser Cavity Resonator',
        showMirrors: true,
        showStandingWaves: true,
        showGainMedium: true,
        showOutputBeam: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

// ============================================================
// ===== SUPERPOSITION & INTERFERENCE =========================
// ============================================================

'constructiveDestructiveInterferencePathDifferenceConditionDiagram': {
    name: 'Constructive Destructive Interference Path Difference Condition Diagram',
    category: 'Waves',
    subcategory: 'Superposition',
    description: 'Diagram showing conditions for constructive and destructive interference in terms of path difference',
    type: 'constructive_destructive_interference_path_difference',
    defaultOptions: {
        title: 'Interference Conditions',
        showConstructive: true,
        showDestructive: true,
        showPathDifferenceConditions: true,
        showFormulas: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'youngDoubleSlitFringePatternGeometricDerivationDiagram': {
    name: 'Young Double Slit Fringe Pattern Geometric Derivation Diagram',
    category: 'Waves',
    subcategory: 'Superposition',
    description: 'Geometric derivation diagram of Young\'s double slit fringe pattern',
    type: 'young_double_slit_fringe_pattern_geometric_derivation',
    defaultOptions: {
        title: 'Young\'s Double Slit Experiment',
        showSlits: true,
        showFringePattern: true,
        showGeometricDerivation: true,
        showFormula: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'singleSlitDiffractionIntensityProfileCentralMaximumDiagram': {
    name: 'Single Slit Diffraction Intensity Profile Central Maximum Diagram',
    category: 'Waves',
    subcategory: 'Diffraction',
    description: 'Intensity profile diagram for single slit diffraction showing central maximum',
    type: 'single_slit_diffraction_intensity_profile_central_maximum',
    defaultOptions: {
        title: 'Single Slit Diffraction',
        showIntensityProfile: true,
        showCentralMaximum: true,
        showMinima: true,
        showAnnotations: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'diffractionGratingPrincipalMaximaOrderAngleDiagram': {
    name: 'Diffraction Grating Principal Maxima Order Angle Diagram',
    category: 'Waves',
    subcategory: 'Diffraction',
    description: 'Diagram showing principal maxima orders and angles for a diffraction grating',
    type: 'diffraction_grating_principal_maxima_order_angle',
    orders: [-2, -1, 0, 1, 2],
    defaultOptions: {
        title: 'Diffraction Grating Orders',
        showGrating: true,
        showPrincipalMaxima: true,
        showOrders: true,
        showAngles: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'thinFilmPhaseChangeReflectionOpticalPathDifferenceDiagram': {
    name: 'Thin Film Phase Change Reflection Optical Path Difference Diagram',
    category: 'Waves',
    subcategory: 'Superposition',
    description: 'Diagram showing thin film interference with phase changes on reflection and optical path difference',
    type: 'thin_film_phase_change_reflection_optical_path_difference',
    defaultOptions: {
        title: 'Thin Film Interference',
        showFilmCrossSection: true,
        showPhaseChanges: true,
        showOpticalPathDifference: true,
        showConditions: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'twoSpeakerSoundInterferenceConstructiveDestructiveRegionDiagram': {
    name: 'Two Speaker Sound Interference Constructive Destructive Region Diagram',
    category: 'Waves',
    subcategory: 'Superposition',
    description: 'Diagram showing constructive and destructive interference regions from two speaker sources',
    type: 'two_speaker_sound_interference_regions',
    defaultOptions: {
        title: 'Two-Source Sound Interference',
        showSpeakers: true,
        showConstructiveLines: true,
        showDestructiveLines: true,
        showPathDifferences: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'phasorPolygonNSlitsResultantAmplitudeDiagram': {
    name: 'Phasor Polygon N Slits Resultant Amplitude Diagram',
    category: 'Waves',
    subcategory: 'Superposition',
    description: 'Phasor polygon diagram for N slits showing resultant amplitude',
    type: 'phasor_polygon_n_slits_resultant_amplitude',
    defaultOptions: {
        title: 'Phasor Polygon for N Slits',
        showPhasorDiagram: true,
        showResultantAmplitude: true,
        showPhaseAngles: true,
        showNSlits: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'beatPatternAmplitudeModulationTwoFrequencyDiagram': {
    name: 'Beat Pattern Amplitude Modulation Two Frequency Diagram',
    category: 'Waves',
    subcategory: 'Superposition',
    description: 'Diagram showing beat pattern from superposition of two close frequencies with amplitude modulation',
    type: 'beat_pattern_amplitude_modulation_two_frequency',
    defaultOptions: {
        title: 'Beat Pattern',
        showTwoFrequencies: true,
        showResultantBeat: true,
        showAmplitudeModulation: true,
        showBeatFrequency: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'michelsonInterferometerBeamSplitterMirrorPathDiagram': {
    name: 'Michelson Interferometer Beam Splitter Mirror Path Diagram',
    category: 'Waves',
    subcategory: 'Superposition',
    description: 'Optical path diagram of a Michelson interferometer with beam splitter and mirrors',
    type: 'michelson_interferometer_beam_splitter_mirror_path',
    components: ['laser_source', 'beam_splitter', 'fixed_mirror', 'movable_mirror', 'detector'],
    defaultOptions: {
        title: 'Michelson Interferometer',
        showOpticalPath: true,
        showBeamSplitter: true,
        showInterferencePattern: true,
        showLabels: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'braggLawCrystalPlaneXRayReflectionPathDifferenceDiagram': {
    name: 'Bragg Law Crystal Plane X-Ray Reflection Path Difference Diagram',
    category: 'Waves',
    subcategory: 'Diffraction',
    description: 'Diagram showing Bragg\'s Law with crystal planes, X-ray reflection, and path difference',
    type: 'bragg_law_crystal_plane_xray_reflection_path_difference',
    defaultOptions: {
        title: 'Bragg\'s Law',
        showCrystalPlanes: true,
        showXRayReflection: true,
        showPathDifference: true,
        showFormula: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'noiseCancellingHeadphoneAntiphaseDestructiveInterferenceDiagram': {
    name: 'Noise Cancelling Headphone Antiphase Destructive Interference Diagram',
    category: 'Waves',
    subcategory: 'Superposition',
    description: 'Diagram illustrating noise cancelling headphone operation via antiphase destructive interference',
    type: 'noise_cancelling_headphone_antiphase_destructive',
    defaultOptions: {
        title: 'Noise Cancelling Headphones',
        showOriginalNoise: true,
        showInvertedSignal: true,
        showDestructiveInterference: true,
        showHeadphoneDiagram: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'youngExperimentMeasurementFringeWidthSlitSeparationSetupDiagram': {
    name: 'Young Experiment Measurement Fringe Width Slit Separation Setup Diagram',
    category: 'Waves',
    subcategory: 'Superposition',
    description: 'Experimental setup diagram for Young\'s experiment showing fringe width and slit separation measurement',
    type: 'young_experiment_measurement_setup',
    defaultOptions: {
        title: 'Young\'s Experiment Setup',
        showFullSetup: true,
        showFringeWidthMeasurement: true,
        showSlitSeparation: true,
        showFormula: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

// ============================================================
// ===== SOUND =================================================
// ============================================================

'soundWaveCompressionRarefactionPressureDisplacementDiagram': {
    name: 'Sound Wave Compression Rarefaction Pressure Displacement Diagram',
    category: 'Sound',
    subcategory: 'Wave Properties',
    description: 'Diagram showing compressions, rarefactions, and the relationship between pressure and displacement in sound waves',
    type: 'sound_wave_compression_rarefaction_pressure_displacement',
    defaultOptions: {
        title: 'Sound Wave Structure',
        showCompressions: true,
        showRarefactions: true,
        showPressureGraph: true,
        showDisplacementGraph: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'soundFrequencyAmplitudePitchLoudnessRelationshipDiagram': {
    name: 'Sound Frequency Amplitude Pitch Loudness Relationship Diagram',
    category: 'Sound',
    subcategory: 'Wave Properties',
    description: 'Diagram showing relationships between frequency, amplitude, pitch, and loudness in sound',
    type: 'sound_frequency_amplitude_pitch_loudness_relationship',
    defaultOptions: {
        title: 'Sound Properties',
        showFrequencyPitchLink: true,
        showAmplitudeLoudnessLink: true,
        showWaveformComparisons: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'speedOfSoundTemperatureDependenceAdiabaticCorrectionDiagram': {
    name: 'Speed Of Sound Temperature Dependence Adiabatic Correction Diagram',
    category: 'Sound',
    subcategory: 'Wave Properties',
    description: 'Diagram showing temperature dependence of the speed of sound with adiabatic correction',
    type: 'speed_of_sound_temperature_dependence_adiabatic',
    defaultOptions: {
        title: 'Speed of Sound vs Temperature',
        showTemperatureGraph: true,
        showAdiabaticFormula: true,
        showLinearApproximation: true,
        showAnnotations: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'decibelScaleIntensityLevelCommonSourcesTableDiagram': {
    name: 'Decibel Scale Intensity Level Common Sources Table Diagram',
    category: 'Sound',
    subcategory: 'Sound Intensity',
    description: 'Decibel scale diagram with intensity levels and common sound sources table',
    type: 'decibel_scale_intensity_level_common_sources',
    sources: [
        { name: 'Threshold of Hearing', dB: 0, intensity: '10⁻¹²' },
        { name: 'Whisper', dB: 30, intensity: '10⁻⁹' },
        { name: 'Conversation', dB: 60, intensity: '10⁻⁶' },
        { name: 'Traffic', dB: 80, intensity: '10⁻⁴' },
        { name: 'Concert', dB: 110, intensity: '10⁻¹' },
        { name: 'Threshold of Pain', dB: 130, intensity: '10' }
    ],
    defaultOptions: {
        title: 'Decibel Scale',
        showScale: true,
        showSources: true,
        showFormula: true,
        showLogRelation: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'humanEarAnatomyCochleaOssiclesLabelledCrossSectionDiagram': {
    name: 'Human Ear Anatomy Cochlea Ossicles Labelled Cross Section Diagram',
    category: 'Sound',
    subcategory: 'Hearing',
    description: 'Labelled cross-section diagram of the human ear showing cochlea, ossicles, and other structures',
    type: 'human_ear_anatomy_cross_section_labelled',
    structures: ['pinna', 'ear_canal', 'eardrum', 'malleus', 'incus', 'stapes', 'oval_window', 'cochlea', 'auditory_nerve'],
    defaultOptions: {
        title: 'Human Ear Anatomy',
        showCrossSection: true,
        showLabels: true,
        showSoundPath: true,
        showAmplification: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'openClosedPipeFundamentalHarmonicNodeAntiNodeComparisonDiagram': {
    name: 'Open Closed Pipe Fundamental Harmonic Node AntiNode Comparison Diagram',
    category: 'Sound',
    subcategory: 'Resonance',
    description: 'Comparison of fundamental harmonics in open and closed pipes with node and antinode positions',
    type: 'open_closed_pipe_fundamental_node_antinode_comparison',
    defaultOptions: {
        title: 'Open vs Closed Pipe Harmonics',
        showOpenPipe: true,
        showClosedPipe: true,
        showNodeAntinode: true,
        showFrequencyComparison: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'dopplerSoundWavefrontCompressionApproachingRecedingDiagram': {
    name: 'Doppler Sound Wavefront Compression Approaching Receding Diagram',
    category: 'Sound',
    subcategory: 'Doppler Effect',
    description: 'Sound wavefront diagram showing Doppler compression and recession for approaching and receding source',
    type: 'doppler_sound_wavefront_compression_approaching_receding',
    defaultOptions: {
        title: 'Doppler Effect in Sound',
        showMovingSource: true,
        showCompressedWavefronts: true,
        showRecedingWavefronts: true,
        showFrequencyFormula: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'ultrasoundAScanBScanAcousticImpedancePiezoelectricDiagram': {
    name: 'Ultrasound A-Scan B-Scan Acoustic Impedance Piezoelectric Diagram',
    category: 'Sound',
    subcategory: 'Ultrasound',
    description: 'Diagram of ultrasound A-scan and B-scan techniques with acoustic impedance and piezoelectric transducer',
    type: 'ultrasound_a_scan_b_scan_acoustic_impedance_piezoelectric',
    defaultOptions: {
        title: 'Ultrasound Imaging Techniques',
        showAScan: true,
        showBScan: true,
        showPiezoelectric: true,
        showAcousticImpedance: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'infrasoundFrequencyRangeLongWavelengthLowAttenuationDiagram': {
    name: 'Infrasound Frequency Range Long Wavelength Low Attenuation Diagram',
    category: 'Sound',
    subcategory: 'Sound Spectrum',
    description: 'Diagram showing infrasound frequency range with long wavelength and low attenuation properties',
    type: 'infrasound_frequency_range_long_wavelength_low_attenuation',
    defaultOptions: {
        title: 'Infrasound Properties',
        showFrequencySpectrum: true,
        showWavelength: true,
        showAttenuationComparison: true,
        showNaturalSources: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'reverberationTimeSabineFormulaRoomVolumeAbsorptionDiagram': {
    name: 'Reverberation Time Sabine Formula Room Volume Absorption Diagram',
    category: 'Sound',
    subcategory: 'Acoustics',
    description: 'Diagram illustrating reverberation time using Sabine\'s formula with room volume and absorption',
    type: 'reverberation_time_sabine_formula_room',
    defaultOptions: {
        title: 'Reverberation and Sabine\'s Formula',
        showRoomDiagram: true,
        showSabineFormula: true,
        showDecayCurve: true,
        showAbsorptionMaterials: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'fourierHarmonicSeriesTimbreWaveformComparisonDiagram': {
    name: 'Fourier Harmonic Series Timbre Waveform Comparison Diagram',
    category: 'Sound',
    subcategory: 'Sound Analysis',
    description: 'Diagram showing Fourier harmonic series and how timbre determines waveform shape',
    type: 'fourier_harmonic_series_timbre_waveform_comparison',
    waveforms: [
        { name: 'Sine Wave', harmonics: [1] },
        { name: 'Square Wave', harmonics: [1, 3, 5, 7] },
        { name: 'Sawtooth Wave', harmonics: [1, 2, 3, 4, 5] }
    ],
    defaultOptions: {
        title: 'Fourier Series and Timbre',
        showHarmonicSpectrum: true,
        showWaveforms: true,
        showComposition: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'resonanceTubeExperimentSetupEndCorrectionMeasurementDiagram': {
    name: 'Resonance Tube Experiment Setup End Correction Measurement Diagram',
    category: 'Sound',
    subcategory: 'Resonance',
    description: 'Experimental setup diagram for the resonance tube with end correction measurement',
    type: 'resonance_tube_experiment_setup_end_correction',
    defaultOptions: {
        title: 'Resonance Tube Experiment',
        showTubeSetup: true,
        showWaterLevel: true,
        showEndCorrection: true,
        showMeasurements: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

// ============================================================
// ===== ELECTROMAGNETIC WAVES & OPTICS =======================
// ============================================================

'emWaveMutuallyPerpendicularEBFieldPropagationDiagram': {
    name: 'EM Wave Mutually Perpendicular E B Field Propagation Diagram',
    category: 'Optics',
    subcategory: 'Electromagnetic Waves',
    description: 'Diagram of an EM wave showing mutually perpendicular E and B fields propagating in space',
    type: 'em_wave_mutually_perpendicular_e_b_field_propagation',
    defaultOptions: {
        title: 'Electromagnetic Wave',
        showEField: true,
        showBField: true,
        showPropagationDirection: true,
        show3DPerspective: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'emSpectrumFrequencyWavelengthPhotonEnergyBandsDiagram': {
    name: 'EM Spectrum Frequency Wavelength Photon Energy Bands Diagram',
    category: 'Optics',
    subcategory: 'Electromagnetic Waves',
    description: 'Complete EM spectrum diagram with frequency, wavelength, and photon energy bands',
    type: 'em_spectrum_frequency_wavelength_photon_energy_bands',
    bands: [
        { name: 'Radio', wavelengthRange: '>1mm', color: '#E74C3C' },
        { name: 'Microwave', wavelengthRange: '1mm–1m', color: '#E67E22' },
        { name: 'Infrared', wavelengthRange: '700nm–1mm', color: '#F39C12' },
        { name: 'Visible', wavelengthRange: '400–700nm', color: '#F1C40F' },
        { name: 'Ultraviolet', wavelengthRange: '10–400nm', color: '#9B59B6' },
        { name: 'X-ray', wavelengthRange: '0.01–10nm', color: '#3498DB' },
        { name: 'Gamma', wavelengthRange: '<0.01nm', color: '#2ECC71' }
    ],
    defaultOptions: {
        title: 'Electromagnetic Spectrum',
        showFrequency: true,
        showWavelength: true,
        showPhotonEnergy: true,
        showBands: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'concaveMirrorRayDiagramFocalPointImageFormationDiagram': {
    name: 'Concave Mirror Ray Diagram Focal Point Image Formation Diagram',
    category: 'Optics',
    subcategory: 'Reflection',
    description: 'Ray diagram for a concave mirror showing focal point and image formation',
    type: 'concave_mirror_ray_diagram_focal_point_image',
    objectPositions: [
        { position: 'beyond C', imageType: 'real, inverted, diminished' },
        { position: 'at C', imageType: 'real, inverted, same size' },
        { position: 'between C and F', imageType: 'real, inverted, magnified' },
        { position: 'at F', imageType: 'at infinity' },
        { position: 'inside F', imageType: 'virtual, upright, magnified' }
    ],
    defaultOptions: {
        title: 'Concave Mirror Ray Diagram',
        showMirror: true,
        showRays: true,
        showFocalPoint: true,
        showImageFormation: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'snellsLawAngleIncidenceRefractionRefractiveIndexDiagram': {
    name: 'Snell\'s Law Angle Incidence Refraction Refractive Index Diagram',
    category: 'Optics',
    subcategory: 'Refraction',
    description: 'Diagram illustrating Snell\'s Law with angles of incidence and refraction and refractive indices',
    type: 'snells_law_angle_incidence_refraction',
    defaultOptions: {
        title: 'Snell\'s Law',
        showInterface: true,
        showIncidentRay: true,
        showRefractedRay: true,
        showNormal: true,
        showAngles: true,
        showFormula: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'prismWhiteLightDispersionVioletRedDeviationAngleDiagram': {
    name: 'Prism White Light Dispersion Violet Red Deviation Angle Diagram',
    category: 'Optics',
    subcategory: 'Refraction',
    description: 'Diagram of white light dispersion through a prism showing violet and red deviation angles',
    type: 'prism_white_light_dispersion_violet_red',
    defaultOptions: {
        title: 'Prism Dispersion',
        showPrism: true,
        showWhiteLight: true,
        showSpectrum: true,
        showDeviationAngles: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'thinLensRayDiagramConvergingDivergingImageTypesDiagram': {
    name: 'Thin Lens Ray Diagram Converging Diverging Image Types Diagram',
    category: 'Optics',
    subcategory: 'Lenses',
    description: 'Ray diagrams for converging and diverging thin lenses showing image types',
    type: 'thin_lens_ray_diagram_converging_diverging',
    lensTypes: [
        { type: 'Converging', focalLength: 'positive', imageTypes: ['real/virtual depending on object position'] },
        { type: 'Diverging', focalLength: 'negative', imageTypes: ['always virtual, upright, diminished'] }
    ],
    defaultOptions: {
        title: 'Thin Lens Ray Diagrams',
        showConverging: true,
        showDiverging: true,
        showImageTypes: true,
        showPrincipalRays: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'compoundMicroscopeObjectiveEyepieceIntermediateImageDiagram': {
    name: 'Compound Microscope Objective Eyepiece Intermediate Image Diagram',
    category: 'Optics',
    subcategory: 'Optical Instruments',
    description: 'Ray diagram of a compound microscope showing objective, eyepiece, and intermediate image',
    type: 'compound_microscope_objective_eyepiece_intermediate_image',
    components: ['objective_lens', 'intermediate_image', 'eyepiece_lens', 'final_image'],
    defaultOptions: {
        title: 'Compound Microscope',
        showObjectiveLens: true,
        showEyepieceLens: true,
        showIntermediateImage: true,
        showRayPaths: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'rayleighCriterionAiryDiskCircularApertureResolutionDiagram': {
    name: 'Rayleigh Criterion Airy Disk Circular Aperture Resolution Diagram',
    category: 'Optics',
    subcategory: 'Diffraction',
    description: 'Diagram of the Rayleigh criterion for resolution with Airy disk pattern from a circular aperture',
    type: 'rayleigh_criterion_airy_disk_circular_aperture',
    defaultOptions: {
        title: 'Rayleigh Criterion',
        showAiryDisk: true,
        showResolutionLimit: true,
        showCircularAperture: true,
        showFormula: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'brewstersAngleReflectedPolarisedLightOrientationDiagram': {
    name: 'Brewster\'s Angle Reflected Polarised Light Orientation Diagram',
    category: 'Optics',
    subcategory: 'Polarisation',
    description: 'Diagram showing Brewster\'s angle with polarisation orientation of reflected and refracted light',
    type: 'brewsters_angle_reflected_polarised_orientation',
    defaultOptions: {
        title: 'Brewster\'s Angle',
        showIncidentRay: true,
        showReflectedRay: true,
        showRefractedRay: true,
        showPolarisationOrientation: true,
        showFormula: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'laserStimulatedEmissionPopulationInversionCavityDiagram': {
    name: 'Laser Stimulated Emission Population Inversion Cavity Diagram',
    category: 'Optics',
    subcategory: 'Lasers',
    description: 'Diagram of laser operation showing stimulated emission, population inversion, and cavity',
    type: 'laser_stimulated_emission_population_inversion_cavity',
    processes: ['absorption', 'spontaneous_emission', 'stimulated_emission', 'population_inversion'],
    defaultOptions: {
        title: 'Laser Operation',
        showEnergyLevels: true,
        showPopulationInversion: true,
        showCavity: true,
        showStimulatedEmission: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'opticalFibreCoreCladdingTotalInternalReflectionCriticalAngleDiagram': {
    name: 'Optical Fibre Core Cladding Total Internal Reflection Critical Angle Diagram',
    category: 'Optics',
    subcategory: 'Refraction',
    description: 'Cross-section diagram of an optical fibre showing core, cladding, total internal reflection, and critical angle',
    type: 'optical_fibre_core_cladding_tir_critical_angle',
    defaultOptions: {
        title: 'Optical Fibre',
        showCoreCladding: true,
        showTotalInternalReflection: true,
        showCriticalAngle: true,
        showRayPath: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'luminousFluxIlluminanceLuxInverseSquareLawDiagram': {
    name: 'Luminous Flux Illuminance Lux Inverse Square Law Diagram',
    category: 'Optics',
    subcategory: 'Photometry',
    description: 'Diagram illustrating luminous flux, illuminance, lux units, and the inverse square law',
    type: 'luminous_flux_illuminance_lux_inverse_square_law',
    defaultOptions: {
        title: 'Photometry',
        showLuminousFlux: true,
        showIlluminance: true,
        showInverseSquareLaw: true,
        showFormulas: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

// ============================================================
// ===== NUCLEAR PHYSICS ======================================
// ============================================================

'atomicModelHistoricalProgressionDiagram': {
    name: 'Atomic Model Historical Progression Diagram',
    category: 'Nuclear Physics',
    subcategory: 'Atomic Structure',
    description: 'Historical progression diagram of atomic models from Thomson to quantum mechanical model',
    type: 'atomic_model_historical_progression',
    models: [
        { name: 'Thomson', year: 1897, description: 'plum pudding model' },
        { name: 'Rutherford', year: 1911, description: 'nuclear model' },
        { name: 'Bohr', year: 1913, description: 'planetary model with quantised orbits' },
        { name: 'Quantum Mechanical', year: 1926, description: 'electron cloud probability model' }
    ],
    defaultOptions: {
        title: 'Atomic Model History',
        showTimeline: true,
        showModels: true,
        showKeyEvidence: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'isotopesIsobarsIsotonesNuclideComparisonChart': {
    name: 'Isotopes Isobars Isotones Nuclide Comparison Chart',
    category: 'Nuclear Physics',
    subcategory: 'Nuclear Structure',
    description: 'Chart comparing isotopes, isobars, and isotones on a nuclide grid',
    type: 'isotopes_isobars_isotones_nuclide_comparison',
    definitions: [
        { name: 'Isotopes', constant: 'Z', variable: 'N', example: 'C-12, C-13, C-14' },
        { name: 'Isobars', constant: 'A', variable: 'Z and N', example: 'Ar-40, K-40, Ca-40' },
        { name: 'Isotones', constant: 'N', variable: 'Z', example: 'C-13, N-14' }
    ],
    defaultOptions: {
        title: 'Isotopes, Isobars, and Isotones',
        showNuclideGrid: true,
        showDefinitions: true,
        showExamples: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'nuclearRadiusMassNumberCubicRootScalingGraph': {
    name: 'Nuclear Radius Mass Number Cubic Root Scaling Graph',
    category: 'Nuclear Physics',
    subcategory: 'Nuclear Structure',
    description: 'Graph showing nuclear radius scaling with A^(1/3) and cubic root relationship',
    type: 'nuclear_radius_mass_number_cubic_root_scaling',
    defaultOptions: {
        title: 'Nuclear Radius vs Mass Number',
        showGraph: true,
        showCubicRootRelation: true,
        showFormula: true,
        showAnnotations: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'strongWeakElectromagneticGravityForceRangeStrengthComparisonChart': {
    name: 'Strong Weak Electromagnetic Gravity Force Range Strength Comparison Chart',
    category: 'Nuclear Physics',
    subcategory: 'Nuclear Forces',
    description: 'Comparison chart of the four fundamental forces with range and relative strength',
    type: 'four_forces_range_strength_comparison_chart',
    forces: [
        { name: 'Strong Nuclear', range: '~1 fm', relativeStrength: 1, mediator: 'gluons' },
        { name: 'Electromagnetic', range: 'infinite', relativeStrength: '10⁻²', mediator: 'photon' },
        { name: 'Weak Nuclear', range: '~0.001 fm', relativeStrength: '10⁻¹³', mediator: 'W±, Z bosons' },
        { name: 'Gravity', range: 'infinite', relativeStrength: '10⁻³⁸', mediator: 'graviton (theoretical)' }
    ],
    defaultOptions: {
        title: 'Fundamental Forces',
        showComparisonChart: true,
        showRange: true,
        showStrength: true,
        showMediators: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'bindingEnergyPerNucleonVsMassNumberCurve': {
    name: 'Binding Energy Per Nucleon vs Mass Number Curve',
    category: 'Nuclear Physics',
    subcategory: 'Nuclear Stability',
    description: 'Binding energy per nucleon curve as a function of mass number with key nuclides annotated',
    type: 'binding_energy_per_nucleon_vs_mass_number',
    keyNuclides: [
        { symbol: 'Fe-56', A: 56, BE: 8.79, label: 'most stable' },
        { symbol: 'He-4', A: 4, BE: 7.07, label: 'alpha stability' },
        { symbol: 'U-235', A: 235, BE: 7.59, label: 'fission fuel' },
        { symbol: 'H-2', A: 2, BE: 1.11, label: 'deuterium' }
    ],
    defaultOptions: {
        title: 'Binding Energy per Nucleon',
        showCurve: true,
        showKeyNuclides: true,
        showFissionFusionRegions: true,
        showAnnotations: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'chartOfNuclidesNeutronProtonStabilityValleyDiagram': {
    name: 'Chart Of Nuclides Neutron Proton Stability Valley Diagram',
    category: 'Nuclear Physics',
    subcategory: 'Nuclear Stability',
    description: 'Nuclide chart showing neutron-proton numbers with valley of stability',
    type: 'chart_of_nuclides_stability_valley',
    defaultOptions: {
        title: 'Chart of Nuclides',
        showStabilityValley: true,
        showDecayModes: true,
        showNeutronProtonAxes: true,
        showMagicNumbers: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'liquidDropModelVsShellModelComparisonDiagram': {
    name: 'Liquid Drop Model vs Shell Model Comparison Diagram',
    category: 'Nuclear Physics',
    subcategory: 'Nuclear Models',
    description: 'Comparison diagram of the liquid drop model and shell model of the nucleus',
    type: 'liquid_drop_model_vs_shell_model_comparison',
    models: [
        { name: 'Liquid Drop', strengths: ['binding energy', 'fission'], weaknesses: ['magic numbers'] },
        { name: 'Shell Model', strengths: ['magic numbers', 'spin-parity'], weaknesses: ['large deformations'] }
    ],
    defaultOptions: {
        title: 'Nuclear Model Comparison',
        showBothModels: true,
        showStrengths: true,
        showWeaknesses: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'nuclearGroundStateExcitedStateGammaTransitionLevelDiagram': {
    name: 'Nuclear Ground State Excited State Gamma Transition Level Diagram',
    category: 'Nuclear Physics',
    subcategory: 'Nuclear Structure',
    description: 'Nuclear energy level diagram showing ground state, excited states, and gamma transitions',
    type: 'nuclear_ground_excited_state_gamma_transition_levels',
    defaultOptions: {
        title: 'Nuclear Energy Levels',
        showGroundState: true,
        showExcitedStates: true,
        showGammaTransitions: true,
        showEnergies: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'protonNeutronUudUddQuarkCompositionDiagram': {
    name: 'Proton Neutron Uud Udd Quark Composition Diagram',
    category: 'Nuclear Physics',
    subcategory: 'Particle Physics',
    description: 'Diagram showing quark composition (uud, udd) of proton and neutron',
    type: 'proton_neutron_quark_composition_uud_udd',
    nucleons: [
        { name: 'Proton', quarks: ['u', 'u', 'd'], charge: '+1', baryon: '+1' },
        { name: 'Neutron', quarks: ['u', 'd', 'd'], charge: '0', baryon: '+1' }
    ],
    defaultOptions: {
        title: 'Quark Composition',
        showQuarks: true,
        showCharges: true,
        showGluons: true,
        showLabels: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'energyUnitConversionJoulesToMeVToAtomicMassUnitChart': {
    name: 'Energy Unit Conversion Joules To MeV To Atomic Mass Unit Chart',
    category: 'Nuclear Physics',
    subcategory: 'Nuclear Quantities',
    description: 'Conversion chart between Joules, MeV, and atomic mass units for nuclear energy calculations',
    type: 'energy_unit_conversion_joules_mev_amu',
    conversions: [
        { from: '1 u', to_joules: '1.661 × 10⁻²⁷ kg', to_MeV: '931.5 MeV/c²' },
        { from: '1 MeV', to_joules: '1.602 × 10⁻¹³ J' },
        { from: '1 J', to_MeV: '6.242 × 10¹² MeV' }
    ],
    defaultOptions: {
        title: 'Nuclear Energy Unit Conversions',
        showConversionChart: true,
        showFormulas: true,
        showExamples: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'becquerelDiscoveryBackgroundRadiationSourcesInfographic': {
    name: 'Becquerel Discovery Background Radiation Sources Infographic',
    category: 'Nuclear Physics',
    subcategory: 'Radioactivity',
    description: 'Infographic of Becquerel\'s discovery of radioactivity and natural background radiation sources',
    type: 'becquerel_discovery_background_radiation_infographic',
    sources: [
        { name: 'Radon Gas', percentage: 50, color: '#E74C3C' },
        { name: 'Medical', percentage: 14, color: '#3498DB' },
        { name: 'Cosmic Rays', percentage: 13, color: '#9B59B6' },
        { name: 'Food/Drink', percentage: 12, color: '#2ECC71' },
        { name: 'Ground', percentage: 8, color: '#E67E22' },
        { name: 'Other', percentage: 3, color: '#95A5A6' }
    ],
    defaultOptions: {
        title: 'Background Radiation Sources',
        showPieChart: true,
        showBecquerelDiscovery: true,
        showSources: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'alphaBetaGammaPenetrationAbsorbersComparisonDiagram': {
    name: 'Alpha Beta Gamma Penetration Absorbers Comparison Diagram',
    category: 'Nuclear Physics',
    subcategory: 'Radioactivity',
    description: 'Comparison diagram of alpha, beta, and gamma radiation penetration through various absorbers',
    type: 'alpha_beta_gamma_penetration_absorbers_comparison',
    radiationTypes: [
        { type: 'Alpha (α)', stoppedBy: 'paper / few cm air', ionisation: 'high', range: 'short' },
        { type: 'Beta (β)', stoppedBy: '3–5 mm aluminium', ionisation: 'medium', range: 'medium' },
        { type: 'Gamma (γ)', stoppedBy: 'several cm lead', ionisation: 'low', range: 'long' }
    ],
    defaultOptions: {
        title: 'Radiation Penetration',
        showPenetrationDiagram: true,
        showAbsorbers: true,
        showIonisationComparison: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'exponentialDecayCurveNVsTimeWithHalfLifeMarkings': {
    name: 'Exponential Decay Curve N vs Time With Half Life Markings',
    category: 'Nuclear Physics',
    subcategory: 'Radioactive Decay',
    description: 'Exponential decay curve of N vs time with half-life markings',
    type: 'exponential_decay_curve_n_vs_time_half_life',
    defaultOptions: {
        title: 'Radioactive Decay',
        showDecayCurve: true,
        showHalfLifeMarkings: true,
        showFormula: true,
        showActivityCurve: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'uranium238DecaySeriesNZChartPathDiagram': {
    name: 'Uranium 238 Decay Series N-Z Chart Path Diagram',
    category: 'Nuclear Physics',
    subcategory: 'Radioactive Decay',
    description: 'N-Z chart showing the uranium-238 decay series path to lead-206',
    type: 'uranium_238_decay_series_nz_chart_path',
    decayChain: [
        { symbol: 'U-238', Z: 92, N: 146, decayType: 'α' },
        { symbol: 'Th-234', Z: 90, N: 144, decayType: 'β⁻' },
        { symbol: 'Pa-234', Z: 91, N: 143, decayType: 'β⁻' },
        { symbol: 'U-234', Z: 92, N: 142, decayType: 'α' },
        { symbol: 'Pb-206', Z: 82, N: 124, decayType: 'stable' }
    ],
    defaultOptions: {
        title: 'Uranium-238 Decay Series',
        showNZChart: true,
        showDecayPath: true,
        showDecayTypes: true,
        showAnnotations: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'geigerMullerTubeInternalStructureCrossSectionDiagram': {
    name: 'Geiger Muller Tube Internal Structure Cross Section Diagram',
    category: 'Nuclear Physics',
    subcategory: 'Radiation Detection',
    description: 'Cross-section diagram of a Geiger-Muller tube showing internal structure and operation',
    type: 'geiger_muller_tube_internal_cross_section',
    components: ['cathode_cylinder', 'anode_wire', 'fill_gas', 'mica_window', 'high_voltage_connection'],
    defaultOptions: {
        title: 'Geiger-Müller Tube',
        showCrossSection: true,
        showComponents: true,
        showIonisationProcess: true,
        showLabels: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'deterministicVsStochasticRadiationDoseEffectCurvesDiagram': {
    name: 'Deterministic vs Stochastic Radiation Dose Effect Curves Diagram',
    category: 'Nuclear Physics',
    subcategory: 'Radiation Biology',
    description: 'Dose-effect curves comparing deterministic and stochastic radiation effects',
    type: 'deterministic_vs_stochastic_radiation_dose_effect',
    effectTypes: [
        { type: 'Deterministic', threshold: true, examples: 'hair loss, acute radiation syndrome' },
        { type: 'Stochastic', threshold: false, examples: 'cancer, hereditary effects' }
    ],
    defaultOptions: {
        title: 'Radiation Dose-Effect Relationships',
        showDeterministicCurve: true,
        showStochasticCurve: true,
        showThreshold: true,
        showAnnotations: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'carbon14AtmosphericProductionDecayEquilibriumCycleDiagram': {
    name: 'Carbon 14 Atmospheric Production Decay Equilibrium Cycle Diagram',
    category: 'Nuclear Physics',
    subcategory: 'Applications',
    description: 'Cycle diagram showing carbon-14 atmospheric production, decay, and equilibrium for radiocarbon dating',
    type: 'carbon_14_atmospheric_production_decay_cycle',
    defaultOptions: {
        title: 'Carbon-14 Cycle',
        showProduction: true,
        showDecay: true,
        showEquilibrium: true,
        showDatingApplication: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'petScanTechnetiumSpectGammaCameraImagingDiagram': {
    name: 'PET Scan Technetium SPECT Gamma Camera Imaging Diagram',
    category: 'Nuclear Physics',
    subcategory: 'Medical Applications',
    description: 'Diagram of PET scan and SPECT gamma camera imaging techniques using technetium',
    type: 'pet_scan_technetium_spect_gamma_camera_imaging',
    techniques: [
        { name: 'PET', tracer: 'FDG (F-18)', emission: 'positron annihilation γ pairs' },
        { name: 'SPECT', tracer: 'Tc-99m', emission: 'single γ' }
    ],
    defaultOptions: {
        title: 'Nuclear Medicine Imaging',
        showPETSetup: true,
        showSPECTSetup: true,
        showGammaCamera: true,
        showComparison: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'betaThicknessGaugingSourceDetectorProductionLineDiagram': {
    name: 'Beta Thickness Gauging Source Detector Production Line Diagram',
    category: 'Nuclear Physics',
    subcategory: 'Industrial Applications',
    description: 'Diagram of beta thickness gauging on a production line with source and detector',
    type: 'beta_thickness_gauging_source_detector_production_line',
    defaultOptions: {
        title: 'Beta Thickness Gauging',
        showProductionLine: true,
        showSource: true,
        showDetector: true,
        showFeedbackControl: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'lowIntermediateHighLevelWasteClassificationMultiBarrierDisposalDiagram': {
    name: 'Low Intermediate High Level Waste Classification Multi Barrier Disposal Diagram',
    category: 'Nuclear Physics',
    subcategory: 'Nuclear Waste',
    description: 'Diagram classifying low, intermediate, and high-level nuclear waste with multi-barrier disposal strategy',
    type: 'nuclear_waste_classification_multi_barrier_disposal',
    wasteClasses: [
        { level: 'Low', example: 'protective clothing', disposal: 'near-surface burial' },
        { level: 'Intermediate', example: 'reactor components', disposal: 'deep disposal' },
        { level: 'High', example: 'spent fuel', disposal: 'deep geological repository' }
    ],
    defaultOptions: {
        title: 'Nuclear Waste Classification',
        showClassification: true,
        showMultiBarrier: true,
        showDisposalMethods: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'nuclearReactionGeneralFormXAYBQValueConservationDiagram': {
    name: 'Nuclear Reaction General Form X A Y B Q Value Conservation Diagram',
    category: 'Nuclear Physics',
    subcategory: 'Nuclear Reactions',
    description: 'Diagram showing general form of nuclear reaction X(a,b)Y with Q value and conservation laws',
    type: 'nuclear_reaction_general_form_q_value_conservation',
    conservationLaws: ['mass-energy', 'momentum', 'charge', 'baryon number', 'lepton number'],
    defaultOptions: {
        title: 'Nuclear Reaction Notation',
        showGeneralForm: true,
        showQValue: true,
        showConservationLaws: true,
        showAnnotations: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'elasticInelasticCaptureSpallationReactionTypeClassificationChart': {
    name: 'Elastic Inelastic Capture Spallation Reaction Type Classification Chart',
    category: 'Nuclear Physics',
    subcategory: 'Nuclear Reactions',
    description: 'Classification chart of nuclear reaction types: elastic, inelastic, capture, and spallation',
    type: 'nuclear_reaction_type_classification_chart',
    reactionTypes: [
        { name: 'Elastic Scattering', energyTransfer: 'kinetic only', nucleusChange: 'none' },
        { name: 'Inelastic Scattering', energyTransfer: 'some to excitation', nucleusChange: 'excited state' },
        { name: 'Capture', energyTransfer: 'absorbed', nucleusChange: 'compound nucleus formed' },
        { name: 'Spallation', energyTransfer: 'large', nucleusChange: 'fragmentation' }
    ],
    defaultOptions: {
        title: 'Nuclear Reaction Types',
        showClassificationChart: true,
        showExamples: true,
        showEnergyTransfer: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'reactionCrossSectionEnergyDependenceResonancePeaksDiagram': {
    name: 'Reaction Cross Section Energy Dependence Resonance Peaks Diagram',
    category: 'Nuclear Physics',
    subcategory: 'Nuclear Reactions',
    description: 'Graph of reaction cross section vs energy showing resonance peaks',
    type: 'reaction_cross_section_energy_resonance_peaks',
    defaultOptions: {
        title: 'Reaction Cross Section',
        showCrossSectionGraph: true,
        showResonancePeaks: true,
        showAnnotations: true,
        showEnergyScale: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'bohrCompoundNucleusTwoStageFormationDecayDiagram': {
    name: 'Bohr Compound Nucleus Two Stage Formation Decay Diagram',
    category: 'Nuclear Physics',
    subcategory: 'Nuclear Reactions',
    description: 'Diagram of the Bohr compound nucleus model showing two-stage formation and decay',
    type: 'bohr_compound_nucleus_two_stage_formation_decay',
    stages: [
        { stage: 1, name: 'Formation', process: 'projectile absorbed → compound nucleus' },
        { stage: 2, name: 'Decay', process: 'compound nucleus → products (independent of formation)' }
    ],
    defaultOptions: {
        title: 'Compound Nucleus Model',
        showFormationStage: true,
        showDecayStage: true,
        showIndependenceHypothesis: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'strippingPickupReactionDeuteronProtonTransferAngularDistributionDiagram': {
    name: 'Stripping Pickup Reaction Deuteron Proton Transfer Angular Distribution Diagram',
    category: 'Nuclear Physics',
    subcategory: 'Nuclear Reactions',
    description: 'Diagram of stripping and pickup reactions with deuteron/proton transfer and angular distribution',
    type: 'stripping_pickup_reaction_angular_distribution',
    reactionTypes: [
        { name: 'Stripping', example: 'd + A → p + B', transfer: 'neutron from deuteron to target' },
        { name: 'Pickup', example: 'p + A → d + B', transfer: 'neutron from target to projectile' }
    ],
    defaultOptions: {
        title: 'Direct Nuclear Reactions',
        showReactionDiagram: true,
        showAngularDistribution: true,
        showTransferMechanism: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'neutronEnergyClassificationThermalEpithermalFastSpectrumDiagram': {
    name: 'Neutron Energy Classification Thermal Epithermal Fast Spectrum Diagram',
    category: 'Nuclear Physics',
    subcategory: 'Neutron Physics',
    description: 'Spectrum diagram classifying neutrons by energy: thermal, epithermal, and fast',
    type: 'neutron_energy_classification_spectrum',
    energyClasses: [
        { name: 'Thermal', energyRange: '<0.025 eV', temperature: '~room temperature' },
        { name: 'Epithermal', energyRange: '0.025 eV – 1 keV', temperature: 'intermediate' },
        { name: 'Fast', energyRange: '>1 keV', temperature: 'high' }
    ],
    defaultOptions: {
        title: 'Neutron Energy Classification',
        showEnergySpectrum: true,
        showClassifications: true,
        showCrossSectionVariation: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'rutherfordFirstTransmutationNitrogenAlphaOxygenProtonReactionDiagram': {
    name: 'Rutherford First Transmutation Nitrogen Alpha Oxygen Proton Reaction Diagram',
    category: 'Nuclear Physics',
    subcategory: 'Nuclear Reactions',
    description: 'Diagram of Rutherford\'s first artificial transmutation: N-14 + α → O-17 + p',
    type: 'rutherford_first_transmutation_nitrogen_alpha',
    reaction: { reactants: ['N-14', 'α (He-4)'], products: ['O-17', 'p'], notation: '¹⁴N(α,p)¹⁷O' },
    defaultOptions: {
        title: 'First Artificial Transmutation',
        showReactionDiagram: true,
        showConservationCheck: true,
        showHistoricalContext: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'stellarNucleosynthesisProtonProtonChainCNOCycleTripleAlphaPathwayDiagram': {
    name: 'Stellar Nucleosynthesis Proton Proton Chain CNO Cycle Triple Alpha Pathway Diagram',
    category: 'Nuclear Physics',
    subcategory: 'Astrophysical Nuclear Physics',
    description: 'Diagram of stellar nucleosynthesis pathways: pp chain, CNO cycle, and triple-alpha process',
    type: 'stellar_nucleosynthesis_pp_chain_cno_triple_alpha',
    pathways: [
        { name: 'pp Chain', conditions: 'low-mass stars, T < 1.5×10⁷ K', product: 'He-4 from H' },
        { name: 'CNO Cycle', conditions: 'massive stars, T > 1.5×10⁷ K', product: 'He-4 with C,N,O catalysts' },
        { name: 'Triple-Alpha', conditions: 'red giants, T > 10⁸ K', product: 'C-12 from He-4' }
    ],
    defaultOptions: {
        title: 'Stellar Nucleosynthesis Pathways',
        showPPChain: true,
        showCNOCycle: true,
        showTripleAlpha: true,
        showConditions: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'cyclotronSynchrotronLinacAcceleratorTypesComparisonDiagram': {
    name: 'Cyclotron Synchrotron Linac Accelerator Types Comparison Diagram',
    category: 'Nuclear Physics',
    subcategory: 'Particle Accelerators',
    description: 'Comparison diagram of cyclotron, synchrotron, and linear accelerator (linac) types',
    type: 'cyclotron_synchrotron_linac_comparison',
    acceleratorTypes: [
        { name: 'Cyclotron', path: 'spiral', field: 'constant B', energyLimit: 'classical limit ~20 MeV' },
        { name: 'Synchrotron', path: 'fixed orbit', field: 'varying B', energyLimit: 'GeV–TeV range' },
        { name: 'Linac', path: 'linear', field: 'RF fields', energyLimit: 'depends on length' }
    ],
    defaultOptions: {
        title: 'Particle Accelerator Types',
        showSchematicDiagrams: true,
        showComparison: true,
        showEnergyRanges: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'labFrameVersusCentreOfMassFrameKinematicReactionDiagram': {
    name: 'Lab Frame vs Centre Of Mass Frame Kinematic Reaction Diagram',
    category: 'Nuclear Physics',
    subcategory: 'Nuclear Reactions',
    description: 'Kinematic diagram comparing lab frame and centre-of-mass frame for a nuclear reaction',
    type: 'lab_frame_vs_centre_of_mass_frame_kinematic',
    defaultOptions: {
        title: 'Lab Frame vs CoM Frame',
        showLabFrame: true,
        showCoMFrame: true,
        showVelocityTransformation: true,
        showThresholdEnergy: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'bindingEnergyPerNucleonFissionFusionEnergyReleaseAnnotatedCurve': {
    name: 'Binding Energy Per Nucleon Fission Fusion Energy Release Annotated Curve',
    category: 'Nuclear Physics',
    subcategory: 'Fission & Fusion',
    description: 'Annotated binding energy per nucleon curve showing fission and fusion energy release regions',
    type: 'binding_energy_fission_fusion_annotated_curve',
    defaultOptions: {
        title: 'Fission and Fusion on BE Curve',
        showBECurve: true,
        showFissionRegion: true,
        showFusionRegion: true,
        showEnergyReleaseAnnotations: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'liquidDropFissionMechanismSaddlePointDeformationSequenceDiagram': {
    name: 'Liquid Drop Fission Mechanism Saddle Point Deformation Sequence Diagram',
    category: 'Nuclear Physics',
    subcategory: 'Fission',
    description: 'Sequence diagram of liquid drop fission mechanism showing saddle point and deformation stages',
    type: 'liquid_drop_fission_saddle_point_deformation',
    stages: [
        { stage: 1, shape: 'sphere', description: 'ground state nucleus' },
        { stage: 2, shape: 'elongated', description: 'deformation begins' },
        { stage: 3, shape: 'saddle point', description: 'critical deformation' },
        { stage: 4, shape: 'scission', description: 'nucleus splits' },
        { stage: 5, shape: 'fragments', description: 'fission products' }
    ],
    defaultOptions: {
        title: 'Liquid Drop Fission Mechanism',
        showDeformationSequence: true,
        showPotentialEnergyCurve: true,
        showSaddlePoint: true,
        showActivationEnergy: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'subcriticalCriticalSupercriticalChainReactionNeutronMultiplicationDiagram': {
    name: 'Subcritical Critical Supercritical Chain Reaction Neutron Multiplication Diagram',
    category: 'Nuclear Physics',
    subcategory: 'Fission',
    description: 'Diagram comparing subcritical, critical, and supercritical neutron chain reactions',
    type: 'subcritical_critical_supercritical_chain_reaction',
    conditions: [
        { name: 'Subcritical', k: '<1', behaviour: 'reaction dies out' },
        { name: 'Critical', k: '=1', behaviour: 'steady reaction' },
        { name: 'Supercritical', k: '>1', behaviour: 'exponential growth' }
    ],
    defaultOptions: {
        title: 'Chain Reaction Criticality',
        showNeutronTrees: true,
        showMultiplicationFactor: true,
        showAllConditions: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'pressurizedWaterReactorCoreCoolantSteamGeneratorSchematicDiagram': {
    name: 'Pressurized Water Reactor Core Coolant Steam Generator Schematic Diagram',
    category: 'Nuclear Physics',
    subcategory: 'Nuclear Reactors',
    description: 'Schematic diagram of a pressurized water reactor (PWR) with core, coolant loops, and steam generator',
    type: 'pressurized_water_reactor_schematic',
    components: ['reactor_core', 'primary_coolant_loop', 'pressurizer', 'steam_generator', 'secondary_loop', 'turbine', 'condenser'],
    defaultOptions: {
        title: 'Pressurized Water Reactor (PWR)',
        showReactorCore: true,
        showCoolantLoops: true,
        showSteamGenerator: true,
        showTurbineGenerator: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'gunTypeVsImplosionFissionWeaponDesignSchematicDiagram': {
    name: 'Gun Type vs Implosion Fission Weapon Design Schematic Diagram',
    category: 'Nuclear Physics',
    subcategory: 'Weapons Physics',
    description: 'Schematic comparison of gun-type and implosion fission weapon designs for educational purposes',
    type: 'gun_type_vs_implosion_fission_weapon_schematic',
    designTypes: [
        { name: 'Gun-Type', material: 'U-235', mechanism: 'subcritical masses driven together', efficiency: 'low' },
        { name: 'Implosion', material: 'Pu-239', mechanism: 'simultaneous inward compression', efficiency: 'high' }
    ],
    defaultOptions: {
        title: 'Fission Weapon Design Types',
        showGunType: true,
        showImplosion: true,
        showCriticalMassConcept: true,
        educationalContext: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'coulombBarrierQuantumTunnellingGamowPeakFusionCrossSectionDiagram': {
    name: 'Coulomb Barrier Quantum Tunnelling Gamow Peak Fusion Cross Section Diagram',
    category: 'Nuclear Physics',
    subcategory: 'Fusion',
    description: 'Diagram showing Coulomb barrier, quantum tunnelling, and the Gamow peak for fusion cross section',
    type: 'coulomb_barrier_quantum_tunnelling_gamow_peak',
    defaultOptions: {
        title: 'Coulomb Barrier and Gamow Peak',
        showCoulombBarrier: true,
        showTunnelling: true,
        showGamowPeak: true,
        showFusionCrossSection: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'tokamakToroidalPoloidalMagneticFieldPlasmaConfinementCrossSectionDiagram': {
    name: 'Tokamak Toroidal Poloidal Magnetic Field Plasma Confinement Cross Section Diagram',
    category: 'Nuclear Physics',
    subcategory: 'Fusion',
    description: 'Cross-section diagram of a tokamak showing toroidal and poloidal magnetic fields and plasma confinement',
    type: 'tokamak_toroidal_poloidal_field_plasma_confinement',
    components: ['toroidal_field_coils', 'poloidal_field_coils', 'plasma_torus', 'divertor', 'blanket'],
    defaultOptions: {
        title: 'Tokamak Confinement',
        showToroidalField: true,
        showPoloidalField: true,
        showPlasma: true,
        showCrossSection: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'tellerUlamFissionPrimaryFusionSecondaryTwoStageThermonuclearDiagram': {
    name: 'Teller Ulam Fission Primary Fusion Secondary Two Stage Thermonuclear Diagram',
    category: 'Nuclear Physics',
    subcategory: 'Weapons Physics',
    description: 'Two-stage Teller-Ulam thermonuclear device schematic with fission primary and fusion secondary',
    type: 'teller_ulam_two_stage_thermonuclear_schematic',
    stages: [
        { stage: 'Primary', type: 'Fission', role: 'X-ray compression of secondary' },
        { stage: 'Secondary', type: 'Fusion', role: 'thermonuclear burn' }
    ],
    defaultOptions: {
        title: 'Teller-Ulam Design',
        showPrimaryStage: true,
        showSecondaryStage: true,
        showRadiationImplosion: true,
        educationalContext: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'fissionVsFusionFuelWasteProliferationRiskSafetyComparisonTable': {
    name: 'Fission vs Fusion Fuel Waste Proliferation Risk Safety Comparison Table',
    category: 'Nuclear Physics',
    subcategory: 'Fission & Fusion',
    description: 'Comparison table of fission vs fusion across fuel, waste, proliferation risk, and safety',
    type: 'fission_vs_fusion_comparison_table',
    criteria: ['Fuel', 'Radioactive Waste', 'Proliferation Risk', 'Safety', 'Technology Readiness', 'Energy per Reaction'],
    defaultOptions: {
        title: 'Fission vs Fusion Comparison',
        showComparisonTable: true,
        showAdvantages: true,
        showDisadvantages: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'nuclearElectricityCarbonFootprintLifecycleComparisonCoalGasWindDiagram': {
    name: 'Nuclear Electricity Carbon Footprint Lifecycle Comparison Coal Gas Wind Diagram',
    category: 'Nuclear Physics',
    subcategory: 'Applications',
    description: 'Lifecycle carbon footprint comparison of nuclear electricity vs coal, gas, and wind',
    type: 'nuclear_electricity_carbon_footprint_lifecycle_comparison',
    sources: [
        { name: 'Coal', gCO2perKWh: 820, color: '#2C3E50' },
        { name: 'Natural Gas', gCO2perKWh: 490, color: '#7F8C8D' },
        { name: 'Nuclear', gCO2perKWh: 12, color: '#E74C3C' },
        { name: 'Wind', gCO2perKWh: 11, color: '#2ECC71' }
    ],
    defaultOptions: {
        title: 'Lifecycle Carbon Emissions',
        showBarChart: true,
        showLifecycleStages: true,
        showAnnotations: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

// ============================================================
// ===== PARTICLE PHYSICS =====================================
// ============================================================

'particlePhysicsHistoricalTimelineDiscoveryMilestoneDiagram': {
    name: 'Particle Physics Historical Timeline Discovery Milestone Diagram',
    category: 'Particle Physics',
    subcategory: 'History',
    description: 'Historical timeline of key particle physics discoveries and milestones',
    type: 'particle_physics_historical_timeline',
    milestones: [
        { year: 1897, event: 'Electron discovered (Thomson)' },
        { year: 1932, event: 'Positron discovered (Anderson)' },
        { year: 1964, event: 'Quark model proposed (Gell-Mann)' },
        { year: 1995, event: 'Top quark discovered (Fermilab)' },
        { year: 2012, event: 'Higgs boson discovered (CERN)' }
    ],
    defaultOptions: {
        title: 'Particle Physics Timeline',
        showTimeline: true,
        showMilestones: true,
        showImages: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'standardModelThreeGenerationsFermionBosonPeriodicTableDiagram': {
    name: 'Standard Model Three Generations Fermion Boson Periodic Table Diagram',
    category: 'Particle Physics',
    subcategory: 'Standard Model',
    description: 'Periodic table style diagram of the Standard Model with three generations of fermions and bosons',
    type: 'standard_model_three_generations_fermion_boson',
    particles: {
        quarks: [
            ['u', 'c', 't'], ['d', 's', 'b']
        ],
        leptons: [
            ['e', 'μ', 'τ'], ['νe', 'νμ', 'ντ']
        ],
        bosons: ['γ', 'g', 'W±', 'Z', 'H']
    },
    defaultOptions: {
        title: 'The Standard Model',
        showFermions: true,
        showBosons: true,
        showGenerations: true,
        showProperties: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'quarkColourChargeConfinementFluxTubeBaryonMesonFormationDiagram': {
    name: 'Quark Colour Charge Confinement Flux Tube Baryon Meson Formation Diagram',
    category: 'Particle Physics',
    subcategory: 'QCD',
    description: 'Diagram showing quark colour charge, confinement via flux tubes, and baryon/meson formation',
    type: 'quark_colour_confinement_flux_tube_baryon_meson',
    hadrons: [
        { type: 'Baryon', quarks: 3, colourCombination: 'RGB = white' },
        { type: 'Meson', quarks: 2, colourCombination: 'colour-anticolour = white' }
    ],
    defaultOptions: {
        title: 'Colour Charge and Confinement',
        showColourCharge: true,
        showFluxTubes: true,
        showBaryons: true,
        showMesons: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'leptonFamilyChargedLeptonNeutrinoMassChargeGenerationDiagram': {
    name: 'Lepton Family Charged Lepton Neutrino Mass Charge Generation Diagram',
    category: 'Particle Physics',
    subcategory: 'Standard Model',
    description: 'Diagram of the lepton family showing charged leptons, neutrinos, mass, charge, and generation',
    type: 'lepton_family_charged_neutrino_mass_charge_generation',
    generations: [
        { generation: 1, chargedLepton: 'e⁻', neutrino: 'νe', mass: '0.511 MeV/c²' },
        { generation: 2, chargedLepton: 'μ⁻', neutrino: 'νμ', mass: '105.7 MeV/c²' },
        { generation: 3, chargedLepton: 'τ⁻', neutrino: 'ντ', mass: '1777 MeV/c²' }
    ],
    defaultOptions: {
        title: 'Lepton Family',
        showGenerations: true,
        showMasses: true,
        showCharges: true,
        showNeutrinos: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'photonWZGluonHiggsGaugeBosonForceRangeMassSpinComparisonChart': {
    name: 'Photon W Z Gluon Higgs Gauge Boson Force Range Mass Spin Comparison Chart',
    category: 'Particle Physics',
    subcategory: 'Standard Model',
    description: 'Comparison chart of gauge bosons (photon, W, Z, gluon, Higgs) with force, range, mass, and spin',
    type: 'gauge_boson_force_range_mass_spin_comparison',
    bosons: [
        { name: 'Photon (γ)', force: 'EM', mass: 0, spin: 1, range: 'infinite' },
        { name: 'W± Boson', force: 'Weak', mass: '80.4 GeV/c²', spin: 1, range: '~10⁻¹⁸ m' },
        { name: 'Z Boson', force: 'Weak', mass: '91.2 GeV/c²', spin: 1, range: '~10⁻¹⁸ m' },
        { name: 'Gluon (g)', force: 'Strong', mass: 0, spin: 1, range: '~10⁻¹⁵ m' },
        { name: 'Higgs (H)', force: 'mass mechanism', mass: '125 GeV/c²', spin: 0, range: 'short' }
    ],
    defaultOptions: {
        title: 'Gauge Bosons',
        showComparisonChart: true,
        showForce: true,
        showRange: true,
        showMass: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'fourFundamentalForcesStrengthRangeMediatorUnificationEnergyScaleDiagram': {
    name: 'Four Fundamental Forces Strength Range Mediator Unification Energy Scale Diagram',
    category: 'Particle Physics',
    subcategory: 'Fundamental Forces',
    description: 'Diagram of the four fundamental forces showing strength, range, mediator, and unification energy scale',
    type: 'four_fundamental_forces_unification_energy_scale',
    forces: [
        { name: 'Strong', strength: 1, range: '10⁻¹⁵ m', mediator: 'gluon' },
        { name: 'Electromagnetic', strength: '10⁻²', range: '∞', mediator: 'photon' },
        { name: 'Weak', strength: '10⁻⁶', range: '10⁻¹⁸ m', mediator: 'W±, Z' },
        { name: 'Gravity', strength: '10⁻³⁸', range: '∞', mediator: 'graviton' }
    ],
    defaultOptions: {
        title: 'Four Fundamental Forces',
        showForceTable: true,
        showUnificationScale: true,
        showMediators: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'absoluteVsPartialConservationLawForceApplicabilityComparisonTable': {
    name: 'Absolute vs Partial Conservation Law Force Applicability Comparison Table',
    category: 'Particle Physics',
    subcategory: 'Conservation Laws',
    description: 'Comparison table of conservation laws showing which are absolute vs partial across the fundamental forces',
    type: 'conservation_law_force_applicability_table',
    laws: [
        { law: 'Energy-Momentum', strong: '✓', em: '✓', weak: '✓', gravity: '✓' },
        { law: 'Charge', strong: '✓', em: '✓', weak: '✓', gravity: '✓' },
        { law: 'Baryon Number', strong: '✓', em: '✓', weak: '✓', gravity: '✓' },
        { law: 'Lepton Number', strong: '✓', em: '✓', weak: '✓', gravity: '✓' },
        { law: 'Parity (P)', strong: '✓', em: '✓', weak: '✗', gravity: '✓' },
        { law: 'Strangeness', strong: '✓', em: '✓', weak: '✗', gravity: '-' }
    ],
    defaultOptions: {
        title: 'Conservation Law Applicability',
        showTable: true,
        showAbsolute: true,
        showPartial: true,
        showViolations: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'feynmanDiagramBetaDecayElectronScatteringPairAnnihilationVertexDiagram': {
    name: 'Feynman Diagram Beta Decay Electron Scattering Pair Annihilation Vertex Diagram',
    category: 'Particle Physics',
    subcategory: 'Feynman Diagrams',
    description: 'Feynman diagrams for beta decay, electron scattering, and pair annihilation with vertex notation',
    type: 'feynman_diagram_beta_decay_scattering_annihilation',
    processes: [
        { name: 'Beta Minus Decay', mediator: 'W⁻', vertices: 2 },
        { name: 'Electron-Positron Scattering', mediator: 'γ', vertices: 2 },
        { name: 'Pair Annihilation', mediator: 'γγ', vertices: 2 }
    ],
    defaultOptions: {
        title: 'Feynman Diagrams',
        showBetaDecay: true,
        showScattering: true,
        showPairAnnihilation: true,
        showVertexLabels: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'particleAntimatterPairProductionAnnihilationTwoPhotonDiagram': {
    name: 'Particle Antimatter Pair Production Annihilation Two Photon Diagram',
    category: 'Particle Physics',
    subcategory: 'Antimatter',
    description: 'Diagram of particle-antiparticle pair production and annihilation to two photons',
    type: 'pair_production_annihilation_two_photon',
    processes: [
        { name: 'Pair Production', input: 'γ → e⁺ + e⁻', energyCondition: 'hf ≥ 2mec²' },
        { name: 'Pair Annihilation', input: 'e⁺ + e⁻ → 2γ', energyOutput: '2 × 0.511 MeV γ rays' }
    ],
    defaultOptions: {
        title: 'Pair Production and Annihilation',
        showPairProduction: true,
        showAnnihilation: true,
        showEnergyConditions: true,
        showConservationCheck: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'supersymmetryDarkMatterCandidateGUTCouplingUnificationEnergyScaleDiagram': {
    name: 'Supersymmetry Dark Matter Candidate GUT Coupling Unification Energy Scale Diagram',
    category: 'Particle Physics',
    subcategory: 'Beyond Standard Model',
    description: 'Diagram showing SUSY dark matter candidates, GUT coupling constant unification at high energy scales',
    type: 'susy_dark_matter_gut_coupling_unification',
    defaultOptions: {
        title: 'Supersymmetry and GUT Unification',
        showCouplingRunning: true,
        showUnificationScale: true,
        showSUSYParticles: true,
        showDarkMatterCandidate: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

// ============================================================
// ===== ELECTRICITY — CURRENT & CHARGE =======================
// ============================================================

'atomicStructureChargeOriginDiagram': {
    name: 'Atomic Structure Charge Origin Diagram',
    category: 'Electricity & Magnetism',
    subcategory: 'Electric Charge',
    description: 'Diagram showing atomic structure as the origin of electric charge with protons and electrons',
    type: 'atomic_structure_charge_origin',
    defaultOptions: {
        title: 'Atomic Structure and Charge',
        showAtom: true,
        showProtons: true,
        showElectrons: true,
        showChargeLabels: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'conventionalCurrentVsElectronFlowDiagram': {
    name: 'Conventional Current vs Electron Flow Diagram',
    category: 'Electricity & Magnetism',
    subcategory: 'Current',
    description: 'Diagram comparing conventional current direction and actual electron flow direction',
    type: 'conventional_current_vs_electron_flow',
    defaultOptions: {
        title: 'Conventional Current vs Electron Flow',
        showConventionalCurrent: true,
        showElectronFlow: true,
        showWire: true,
        showAnnotations: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'driftVelocityCarrierSweptVolumeDiagram': {
    name: 'Drift Velocity Carrier Swept Volume Diagram',
    category: 'Electricity & Magnetism',
    subcategory: 'Current',
    description: 'Diagram illustrating drift velocity and the swept volume concept for current carriers',
    type: 'drift_velocity_carrier_swept_volume',
    defaultOptions: {
        title: 'Drift Velocity',
        showConductor: true,
        showDriftVelocity: true,
        showSweptVolume: true,
        showFormula: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'ammeterSeriesConnectionCircuitDiagram': {
    name: 'Ammeter Series Connection Circuit Diagram',
    category: 'Electricity & Magnetism',
    subcategory: 'Current',
    description: 'Circuit diagram showing correct series connection of an ammeter',
    type: 'ammeter_series_connection_circuit',
    defaultOptions: {
        title: 'Ammeter Series Connection',
        showCircuit: true,
        showAmmeter: true,
        showSeriesConnection: true,
        showCurrentArrows: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'chargeCurrentTimeTriangleFormulaDiagram': {
    name: 'Charge Current Time Triangle Formula Diagram',
    category: 'Electricity & Magnetism',
    subcategory: 'Current',
    description: 'Formula triangle diagram relating charge, current, and time (Q = It)',
    type: 'charge_current_time_triangle_formula',
    defaultOptions: {
        title: 'Q = It Formula Triangle',
        showTriangle: true,
        showFormula: true,
        showUnits: true,
        showRearrangements: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'kclJunctionCurrentArrowsDiagram': {
    name: 'KCL Junction Current Arrows Diagram',
    category: 'Electricity & Magnetism',
    subcategory: 'Circuit Laws',
    description: 'Junction diagram illustrating Kirchhoff\'s Current Law with current arrows',
    type: 'kcl_junction_current_arrows',
    defaultOptions: {
        title: 'Kirchhoff\'s Current Law',
        showJunction: true,
        showCurrentArrows: true,
        showSummation: true,
        showFormula: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'currentTimeGraphAreaAsChargeDiagram': {
    name: 'Current Time Graph Area As Charge Diagram',
    category: 'Electricity & Magnetism',
    subcategory: 'Current',
    description: 'Current vs time graph showing that the area under the curve represents charge',
    type: 'current_time_graph_area_as_charge',
    defaultOptions: {
        title: 'Current-Time Graph',
        showITGraph: true,
        showAreaShading: true,
        showChargeAnnotation: true,
        showFormula: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'currentDensityVectorFieldCrossSectionDiagram': {
    name: 'Current Density Vector Field Cross Section Diagram',
    category: 'Electricity & Magnetism',
    subcategory: 'Current',
    description: 'Cross-section diagram of a conductor showing current density as a vector field',
    type: 'current_density_vector_field_cross_section',
    defaultOptions: {
        title: 'Current Density',
        showConductorCrossSection: true,
        showVectorField: true,
        showFormula: true,
        showUniformDistribution: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'electroplatingElectrolysisCurrentMassDiagram': {
    name: 'Electroplating Electrolysis Current Mass Diagram',
    category: 'Electricity & Magnetism',
    subcategory: 'Current Applications',
    description: 'Diagram of electroplating and electrolysis showing current-mass relationship (Faraday\'s laws)',
    type: 'electroplating_electrolysis_current_mass',
    defaultOptions: {
        title: 'Electroplating and Electrolysis',
        showElectrolysisSetup: true,
        showIonMovement: true,
        showFaradaysLaw: true,
        showMassCurrentRelation: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

// ============================================================
// ===== ELECTRICITY — POTENTIAL & EMF ========================
// ============================================================

'electricPotentialEnergyGravitationalAnalogyDiagram': {
    name: 'Electric Potential Energy Gravitational Analogy Diagram',
    category: 'Electricity & Magnetism',
    subcategory: 'Electric Potential',
    description: 'Diagram comparing electric potential energy to gravitational potential energy as an analogy',
    type: 'electric_potential_energy_gravitational_analogy',
    defaultOptions: {
        title: 'Electric vs Gravitational Potential',
        showGravitationalAnalogy: true,
        showElectricVersion: true,
        showEnergyLevels: true,
        showAnnotations: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'voltmeterParallelConnectionPotentialDividerDiagram': {
    name: 'Voltmeter Parallel Connection Potential Divider Diagram',
    category: 'Electricity & Magnetism',
    subcategory: 'Electric Potential',
    description: 'Circuit diagram showing voltmeter in parallel connection and potential divider arrangement',
    type: 'voltmeter_parallel_connection_potential_divider',
    defaultOptions: {
        title: 'Voltmeter and Potential Divider',
        showVoltmeter: true,
        showParallelConnection: true,
        showPotentialDivider: true,
        showVoltageAnnotations: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'emfVsTerminalVoltageBatteryCircuitDiagram': {
    name: 'EMF vs Terminal Voltage Battery Circuit Diagram',
    category: 'Electricity & Magnetism',
    subcategory: 'EMF & Internal Resistance',
    description: 'Battery circuit diagram comparing EMF and terminal voltage with internal resistance',
    type: 'emf_vs_terminal_voltage_battery_circuit',
    defaultOptions: {
        title: 'EMF and Terminal Voltage',
        showBatteryCircuit: true,
        showInternalResistance: true,
        showEMF: true,
        showTerminalVoltage: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'terminalVoltageVsCurrentVIGraphInternalResistanceDiagram': {
    name: 'Terminal Voltage vs Current V-I Graph Internal Resistance Diagram',
    category: 'Electricity & Magnetism',
    subcategory: 'EMF & Internal Resistance',
    description: 'V-I graph showing terminal voltage vs current with gradient as internal resistance',
    type: 'terminal_voltage_vs_current_vi_internal_resistance',
    defaultOptions: {
        title: 'Terminal Voltage vs Current',
        showVIGraph: true,
        showGradient: true,
        showInternalResistance: true,
        showShortCircuitPoint: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'powerEnergyFormulaeSourceEfficiencyDiagram': {
    name: 'Power Energy Formulae Source Efficiency Diagram',
    category: 'Electricity & Magnetism',
    subcategory: 'Power & Energy',
    description: 'Diagram showing power and energy formulae for electrical sources with efficiency calculation',
    type: 'power_energy_formulae_source_efficiency',
    defaultOptions: {
        title: 'Power, Energy and Efficiency',
        showFormulaeSet: true,
        showEfficiencyFormula: true,
        showSankeyDiagram: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'kvlClosedLoopPotentialRisesDropsDiagram': {
    name: 'KVL Closed Loop Potential Rises Drops Diagram',
    category: 'Electricity & Magnetism',
    subcategory: 'Circuit Laws',
    description: 'Closed loop circuit diagram illustrating Kirchhoff\'s Voltage Law with potential rises and drops',
    type: 'kvl_closed_loop_potential_rises_drops',
    defaultOptions: {
        title: 'Kirchhoff\'s Voltage Law',
        showClosedLoop: true,
        showPotentialRises: true,
        showPotentialDrops: true,
        showSummation: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'chargedParticleAccelerationThroughPotentialDifferenceDiagram': {
    name: 'Charged Particle Acceleration Through Potential Difference Diagram',
    category: 'Electricity & Magnetism',
    subcategory: 'Electric Potential',
    description: 'Diagram of a charged particle accelerated through a potential difference',
    type: 'charged_particle_acceleration_potential_difference',
    defaultOptions: {
        title: 'Particle Acceleration',
        showParticle: true,
        showElectricField: true,
        showPotentialDifference: true,
        showEnergyFormula: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

// ============================================================
// ===== ELECTRICITY — RESISTANCE =============================
// ============================================================

'ohmsLawVIProportionalityGraphDiagram': {
    name: 'Ohm\'s Law V-I Proportionality Graph Diagram',
    category: 'Electricity & Magnetism',
    subcategory: 'Resistance',
    description: 'V-I proportionality graph illustrating Ohm\'s Law for a resistor',
    type: 'ohms_law_vi_proportionality_graph',
    defaultOptions: {
        title: 'Ohm\'s Law V-I Graph',
        showVIGraph: true,
        showProportionality: true,
        showGradientAsResistance: true,
        showFormula: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'ivCharacteristicsCurvesResistorLampDiodeDiagram': {
    name: 'I-V Characteristics Curves Resistor Lamp Diode Diagram',
    category: 'Electricity & Magnetism',
    subcategory: 'Resistance',
    description: 'I-V characteristic curves for a resistor, lamp, and diode on the same axes',
    type: 'iv_characteristics_resistor_lamp_diode',
    components: [
        { name: 'Ohmic Resistor', shape: 'straight line through origin', color: '#3498DB' },
        { name: 'Filament Lamp', shape: 'decreasing gradient curve', color: '#E74C3C' },
        { name: 'Diode', shape: 'exponential forward, zero reverse', color: '#2ECC71' }
    ],
    defaultOptions: {
        title: 'I-V Characteristics',
        showResistor: true,
        showLamp: true,
        showDiode: true,
        showComparison: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'resistanceLengthAreaTemperatureMaterialFactorsDiagram': {
    name: 'Resistance Length Area Temperature Material Factors Diagram',
    category: 'Electricity & Magnetism',
    subcategory: 'Resistance',
    description: 'Diagram showing how length, cross-sectional area, temperature, and material affect resistance',
    type: 'resistance_factors_length_area_temperature_material',
    factors: [
        { factor: 'Length', relation: 'R ∝ L', direction: 'proportional' },
        { factor: 'Cross-sectional Area', relation: 'R ∝ 1/A', direction: 'inversely proportional' },
        { factor: 'Temperature', relation: 'R increases with T (metals)', direction: 'positive for metals' },
        { factor: 'Material (ρ)', relation: 'R = ρL/A', direction: 'material dependent' }
    ],
    defaultOptions: {
        title: 'Factors Affecting Resistance',
        showFactorDiagrams: true,
        showRelationships: true,
        showFormula: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'resistivityGeometryDerivationCubeDiagram': {
    name: 'Resistivity Geometry Derivation Cube Diagram',
    category: 'Electricity & Magnetism',
    subcategory: 'Resistance',
    description: 'Cube geometry diagram for deriving the relationship between resistance and resistivity',
    type: 'resistivity_geometry_derivation_cube',
    defaultOptions: {
        title: 'Resistivity Derivation',
        showCubeGeometry: true,
        showLengthArea: true,
        showFormula: true,
        showAnnotations: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'resistanceTemperatureGraphMetalSemiconductorSuperconductorDiagram': {
    name: 'Resistance Temperature Graph Metal Semiconductor Superconductor Diagram',
    category: 'Electricity & Magnetism',
    subcategory: 'Resistance',
    description: 'R-T graph comparing resistance vs temperature behaviour for metal, semiconductor, and superconductor',
    type: 'resistance_temperature_graph_metal_semiconductor_superconductor',
    materials: [
        { type: 'Metal', behaviour: 'linear increase with T', color: '#3498DB' },
        { type: 'Semiconductor', behaviour: 'exponential decrease with T', color: '#E74C3C' },
        { type: 'Superconductor', behaviour: 'drops to zero at Tc', color: '#2ECC71' }
    ],
    defaultOptions: {
        title: 'R-T Behaviour of Materials',
        showMetalCurve: true,
        showSemiconductorCurve: true,
        showSuperconductorCurve: true,
        showAnnotations: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'seriesParallelResistorNetworkEquivalentDiagram': {
    name: 'Series Parallel Resistor Network Equivalent Diagram',
    category: 'Electricity & Magnetism',
    subcategory: 'Circuit Analysis',
    description: 'Diagram of series and parallel resistor networks with equivalent resistance calculation',
    type: 'series_parallel_resistor_network_equivalent',
    defaultOptions: {
        title: 'Series and Parallel Resistors',
        showSeriesNetwork: true,
        showParallelNetwork: true,
        showEquivalentCircuits: true,
        showFormulas: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'conductivityResistivityReciprocalRelationshipDiagram': {
    name: 'Conductivity Resistivity Reciprocal Relationship Diagram',
    category: 'Electricity & Magnetism',
    subcategory: 'Resistance',
    description: 'Diagram showing the reciprocal relationship between electrical conductivity and resistivity',
    type: 'conductivity_resistivity_reciprocal_relationship',
    defaultOptions: {
        title: 'Conductivity and Resistivity',
        showReciprocal: true,
        showFormula: true,
        showMaterialComparison: true,
        showUnits: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'wheatstoneBalanceBridgeCircuitDiagram': {
    name: 'Wheatstone Balance Bridge Circuit Diagram',
    category: 'Electricity & Magnetism',
    subcategory: 'Circuit Analysis',
    description: 'Wheatstone bridge circuit diagram at balance condition',
    type: 'wheatstone_balance_bridge_circuit',
    defaultOptions: {
        title: 'Wheatstone Bridge',
        showDiamondLayout: true,
        showBalanceCondition: true,
        showGalvanometer: true,
        showFormula: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'circuitTopologyNodesBranchesLoopsDiagram': {
    name: 'Circuit Topology Nodes Branches Loops Diagram',
    category: 'Electricity & Magnetism',
    subcategory: 'Circuit Analysis',
    description: 'Diagram illustrating circuit topology terminology: nodes, branches, and loops',
    type: 'circuit_topology_nodes_branches_loops',
    defaultOptions: {
        title: 'Circuit Topology',
        showNodes: true,
        showBranches: true,
        showLoops: true,
        showLabelledCircuit: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'seriesCircuitCurrentVoltageSharingDiagram': {
    name: 'Series Circuit Current Voltage Sharing Diagram',
    category: 'Electricity & Magnetism',
    subcategory: 'Circuit Analysis',
    description: 'Diagram showing current and voltage sharing in a series circuit',
    type: 'series_circuit_current_voltage_sharing',
    defaultOptions: {
        title: 'Series Circuit',
        showSeriesCircuit: true,
        showCurrentSharing: true,
        showVoltageSharing: true,
        showAnnotations: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'parallelCircuitCurrentDivisionBranchesDiagram': {
    name: 'Parallel Circuit Current Division Branches Diagram',
    category: 'Electricity & Magnetism',
    subcategory: 'Circuit Analysis',
    description: 'Diagram showing current division across branches in a parallel circuit',
    type: 'parallel_circuit_current_division_branches',
    defaultOptions: {
        title: 'Parallel Circuit',
        showParallelCircuit: true,
        showCurrentDivision: true,
        showVoltageSame: true,
        showAnnotations: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'kirchhoffKclKvlTwoLoopLabelledCircuitDiagram': {
    name: 'Kirchhoff KCL KVL Two Loop Labelled Circuit Diagram',
    category: 'Electricity & Magnetism',
    subcategory: 'Circuit Laws',
    description: 'Labelled two-loop circuit diagram demonstrating both KCL and KVL',
    type: 'kirchhoff_kcl_kvl_two_loop_labelled_circuit',
    defaultOptions: {
        title: 'Kirchhoff\'s Laws Applied',
        showTwoLoopCircuit: true,
        showKCLJunction: true,
        showKVLLoops: true,
        showLabelledCurrents: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'potentialDividerLoadedUnloadedOutputVoltageDiagram': {
    name: 'Potential Divider Loaded Unloaded Output Voltage Diagram',
    category: 'Electricity & Magnetism',
    subcategory: 'Circuit Analysis',
    description: 'Potential divider circuit diagram comparing loaded and unloaded output voltages',
    type: 'potential_divider_loaded_unloaded_output',
    defaultOptions: {
        title: 'Potential Divider',
        showUnloadedDivider: true,
        showLoadedDivider: true,
        showOutputVoltageComparison: true,
        showFormulas: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'wheatstoneBridgeDiamondLayoutBalanceConditionDiagram': {
    name: 'Wheatstone Bridge Diamond Layout Balance Condition Diagram',
    category: 'Electricity & Magnetism',
    subcategory: 'Circuit Analysis',
    description: 'Wheatstone bridge in diamond layout with balance condition annotation',
    type: 'wheatstone_bridge_diamond_layout_balance',
    defaultOptions: {
        title: 'Wheatstone Bridge Balance',
        showDiamondLayout: true,
        showBalanceCondition: true,
        showRatioFormula: true,
        showUnknownResistance: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'ammeterVoltmeterLoadingEffectCircuitDiagram': {
    name: 'Ammeter Voltmeter Loading Effect Circuit Diagram',
    category: 'Electricity & Magnetism',
    subcategory: 'Circuit Analysis',
    description: 'Circuit diagram illustrating the loading effect of ammeter and voltmeter in a circuit',
    type: 'ammeter_voltmeter_loading_effect_circuit',
    defaultOptions: {
        title: 'Meter Loading Effects',
        showAmmeterLoading: true,
        showVoltmeterLoading: true,
        showIdealVsReal: true,
        showImpedanceEffect: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'maximumPowerTransferPvsRCurveDiagram': {
    name: 'Maximum Power Transfer P vs R Curve Diagram',
    category: 'Electricity & Magnetism',
    subcategory: 'Power & Energy',
    description: 'P vs R curve showing maximum power transfer theorem with peak at R_load = r',
    type: 'maximum_power_transfer_p_vs_r_curve',
    defaultOptions: {
        title: 'Maximum Power Transfer',
        showPVsRCurve: true,
        showMaximumPoint: true,
        showMatchedCondition: true,
        showFormula: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'theveninNortonEquivalentCircuitTransformationDiagram': {
    name: 'Thevenin Norton Equivalent Circuit Transformation Diagram',
    category: 'Electricity & Magnetism',
    subcategory: 'Circuit Analysis',
    description: 'Diagram showing Thevenin and Norton equivalent circuit transformation',
    type: 'thevenin_norton_equivalent_circuit_transformation',
    defaultOptions: {
        title: 'Thevenin-Norton Equivalents',
        showTheveninCircuit: true,
        showNortonCircuit: true,
        showTransformation: true,
        showFormulas: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

// ============================================================
// ===== ELECTRICITY — POWER & ENERGY =========================
// ============================================================

'workDoneByChargePotentialDifferenceEnergyDiagram': {
    name: 'Work Done By Charge Potential Difference Energy Diagram',
    category: 'Electricity & Magnetism',
    subcategory: 'Power & Energy',
    description: 'Diagram illustrating work done by charge moving through a potential difference',
    type: 'work_done_charge_potential_difference_energy',
    defaultOptions: {
        title: 'Work Done by Charge',
        showChargeMovement: true,
        showPotentialDifference: true,
        showWorkFormula: true,
        showEnergyAnnotation: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'powerFormulaTriangleIVRI2RV2RDiagram': {
    name: 'Power Formula Triangle I V R I2R V2R Diagram',
    category: 'Electricity & Magnetism',
    subcategory: 'Power & Energy',
    description: 'Formula triangle and derivations for electrical power: P=IV, P=I²R, P=V²/R',
    type: 'power_formula_triangle_iv_r_i2r_v2r',
    defaultOptions: {
        title: 'Power Formulae',
        showFormulaeTriangle: true,
        showAllThreeForms: true,
        showDerivations: true,
        showUnits: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'jouleHeatingElectronLatticeCollisionMechanismDiagram': {
    name: 'Joule Heating Electron Lattice Collision Mechanism Diagram',
    category: 'Electricity & Magnetism',
    subcategory: 'Power & Energy',
    description: 'Microscopic mechanism diagram of Joule heating via electron-lattice collisions',
    type: 'joule_heating_electron_lattice_collision',
    defaultOptions: {
        title: 'Joule Heating Mechanism',
        showElectrons: true,
        showLattice: true,
        showCollisions: true,
        showHeatGeneration: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'sankeyDiagramUsefulWastedEnergyFlowDiagram': {
    name: 'Sankey Diagram Useful Wasted Energy Flow Diagram',
    category: 'Electricity & Magnetism',
    subcategory: 'Power & Energy',
    description: 'Sankey diagram showing useful and wasted energy flows for an electrical device',
    type: 'sankey_diagram_useful_wasted_energy',
    defaultOptions: {
        title: 'Energy Flow Sankey Diagram',
        showInputEnergy: true,
        showUsefulOutput: true,
        showWastedHeat: true,
        showEfficiency: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'kilowattHourElectricityMeterReadingCostDiagram': {
    name: 'Kilowatt Hour Electricity Meter Reading Cost Diagram',
    category: 'Electricity & Magnetism',
    subcategory: 'Power & Energy',
    description: 'Diagram explaining kilowatt-hour units, electricity meter reading, and cost calculation',
    type: 'kilowatt_hour_meter_reading_cost',
    defaultOptions: {
        title: 'Kilowatt-Hour and Electricity Cost',
        showKWhDefinition: true,
        showMeterReading: true,
        showCostCalculation: true,
        showFormula: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'nationalGridStepUpStepDownTransformerVoltageDiagram': {
    name: 'National Grid Step Up Step Down Transformer Voltage Diagram',
    category: 'Electricity & Magnetism',
    subcategory: 'AC & Transformers',
    description: 'Diagram of the national grid showing step-up and step-down transformers and voltage levels',
    type: 'national_grid_step_up_step_down_transformer',
    stages: [
        { stage: 'Power Station', voltage: '25 kV' },
        { stage: 'Step-Up Transformer', voltage: '400 kV' },
        { stage: 'Transmission Lines', voltage: '400 kV', reason: 'low current, low power loss' },
        { stage: 'Step-Down Transformer', voltage: '33 kV → 230 V' },
        { stage: 'Consumer', voltage: '230 V' }
    ],
    defaultOptions: {
        title: 'National Grid',
        showFullGrid: true,
        showTransformers: true,
        showVoltages: true,
        showPowerLossAnnotation: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'acPeakRmsVoltageSinusoidalWaveformDiagram': {
    name: 'AC Peak Rms Voltage Sinusoidal Waveform Diagram',
    category: 'Electricity & Magnetism',
    subcategory: 'AC & Transformers',
    description: 'Sinusoidal AC waveform diagram annotated with peak and RMS voltage values',
    type: 'ac_peak_rms_voltage_sinusoidal_waveform',
    defaultOptions: {
        title: 'AC Voltage Waveform',
        showSinusoidalWaveform: true,
        showPeakVoltage: true,
        showRMSVoltage: true,
        showFormula: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'renewableVsFossilFuelEfficiencyComparisonSankeyDiagram': {
    name: 'Renewable vs Fossil Fuel Efficiency Comparison Sankey Diagram',
    category: 'Electricity & Magnetism',
    subcategory: 'Power & Energy',
    description: 'Sankey diagram comparing energy efficiency of renewable and fossil fuel electricity generation',
    type: 'renewable_vs_fossil_fuel_efficiency_sankey',
    sources: [
        { name: 'Coal Power Plant', efficiency: 0.35, waste: 0.65 },
        { name: 'Natural Gas CCGT', efficiency: 0.55, waste: 0.45 },
        { name: 'Solar PV', efficiency: 0.20, waste: 0.80 },
        { name: 'Wind Turbine', efficiency: 0.40, waste: 0.60 }
    ],
    defaultOptions: {
        title: 'Energy Source Efficiency',
        showSankeyDiagram: true,
        showEfficiencyComparison: true,
        showWasteHeat: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

// ============================================================
// ===== CAPACITANCE ==========================================
// ============================================================

'capacitorPlatesDielectricElectricFieldChargeSeparationDiagram': {
    name: 'Capacitor Plates Dielectric Electric Field Charge Separation Diagram',
    category: 'Electricity & Magnetism',
    subcategory: 'Capacitance',
    description: 'Cross-section diagram of a capacitor with plates, dielectric, electric field, and charge separation',
    type: 'capacitor_plates_dielectric_electric_field',
    defaultOptions: {
        title: 'Capacitor Structure',
        showPlates: true,
        showDielectric: true,
        showElectricField: true,
        showCharges: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'chargeVoltageQVGraphGradientAsCapacitanceDiagram': {
    name: 'Charge Voltage Q-V Graph Gradient As Capacitance Diagram',
    category: 'Electricity & Magnetism',
    subcategory: 'Capacitance',
    description: 'Q-V graph with gradient equal to capacitance for a capacitor',
    type: 'charge_voltage_qv_graph_gradient_capacitance',
    defaultOptions: {
        title: 'Q-V Graph for Capacitance',
        showQVGraph: true,
        showGradient: true,
        showCapacitanceFormula: true,
        showAreaAsEnergy: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'parallelPlateCapacitorPermittivityAreaSeparationDiagram': {
    name: 'Parallel Plate Capacitor Permittivity Area Separation Diagram',
    category: 'Electricity & Magnetism',
    subcategory: 'Capacitance',
    description: 'Diagram of a parallel plate capacitor showing permittivity, plate area, and separation factors',
    type: 'parallel_plate_capacitor_permittivity_area_separation',
    defaultOptions: {
        title: 'Parallel Plate Capacitor',
        showPlates: true,
        showPermittivity: true,
        showAreaSeparation: true,
        showFormula: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},



        // ============================================================
        // ===== MECHANICS — EXISTING ENTRIES (unchanged) =============
        // ============================================================

        'freeBodyDiagram': {
            name: 'Free Body Diagram',
            category: 'Mechanics',
            subcategory: 'Dynamics',
            description: 'Force vectors acting on an object',
            type: 'free_body_diagram',
            forces: [
                { name: 'Weight', magnitude: 50, angle: 270, color: '#E74C3C' },
                { name: 'Normal', magnitude: 50, angle: 90, color: '#3498DB' },
                { name: 'Applied', magnitude: 30, angle: 0, color: '#2ECC71' }
            ],
            defaultOptions: {
                title: 'Free Body Diagram',
                showLabels: true,
                showMagnitudes: true,
                showAngles: false,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'vectorDiagram': {
            name: 'Vector Addition Diagram',
            category: 'Mechanics',
            subcategory: 'Dynamics',
            description: 'Vector addition using tip-to-tail method',
            type: 'vector_diagram',
            vectors: [
                { x: 40, y: 30, label: 'A', color: '#E74C3C' },
                { x: 30, y: -20, label: 'B', color: '#3498DB' }
            ],
            showResultant: true,
            defaultOptions: {
                title: 'Vector Addition',
                showComponents: true,
                showResultant: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'motionGraphs': {
            name: 'Motion Graphs (s-t, v-t, a-t)',
            category: 'Mechanics',
            subcategory: 'Dynamics',
            description: 'Kinematic graphs showing motion relationships',
            type: 'motion_graphs',
            graphType: 'velocity-time',
            segments: [
                { time: 0, value: 0, label: 'Rest' },
                { time: 2, value: 10, label: 'Accelerating' },
                { time: 5, value: 10, label: 'Constant velocity' },
                { time: 7, value: 0, label: 'Decelerating' }
            ],
            defaultOptions: {
                title: 'Velocity-Time Graph',
                showArea: true,
                showSlope: true,
                showGrid: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'projectileMotion': {
            name: 'Projectile Motion Trajectory',
            category: 'Mechanics',
            subcategory: 'Kinematics',
            description: 'Parabolic path of projectile motion',
            type: 'projectile_motion',
            initialVelocity: 20,
            launchAngle: 45,
            defaultOptions: {
                title: 'Projectile Motion',
                showVelocityVectors: true,
                showComponents: true,
                showTrajectory: true,
                showRange: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'inclinedPlane': {
            name: 'Inclined Plane Diagram',
            category: 'Mechanics',
            subcategory: 'Dynamics',
            description: 'Forces on an object on an incline',
            type: 'inclined_plane',
            angle: 30,
            mass: 10,
            friction: true,
            defaultOptions: {
                title: 'Inclined Plane',
                showForceComponents: true,
                showAngles: true,
                showFriction: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'momentumCollision': {
            name: 'Momentum Collision Diagram',
            category: 'Mechanics',
            subcategory: 'Momentum & Collisions',
            description: 'Before and after elastic collision comparison',
            type: 'momentum_collision',
            collisionType: 'elastic',
            objects: [
                { mass: 2, velocity: 5, color: '#E74C3C' },
                { mass: 3, velocity: -3, color: '#3498DB' }
            ],
            defaultOptions: {
                title: 'Elastic Collision',
                showBefore: true,
                showAfter: true,
                showMomentum: true,
                showEnergy: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'circularMotion': {
            name: 'Circular Motion Diagram',
            category: 'Mechanics',
            subcategory: 'Circular Motion',
            description: 'Centripetal force and circular motion',
            type: 'circular_motion',
            radius: 100,
            velocity: 15,
            defaultOptions: {
                title: 'Circular Motion',
                showCentripetalForce: true,
                showVelocity: true,
                showAcceleration: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'workEnergyBarChart': {
            name: 'Work-Energy Bar Chart',
            category: 'Mechanics',
            subcategory: 'Energy, Work & Power',
            description: 'Energy transformation bar chart',
            type: 'work_energy_chart',
            initialKE: 100,
            initialPE: 0,
            finalKE: 50,
            finalPE: 40,
            workDone: -10,
            defaultOptions: {
                title: 'Work-Energy Transformation',
                showValues: true,
                showTotal: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'springHarmonicMotion': {
            name: 'Spring Harmonic Oscillator',
            category: 'Mechanics',
            subcategory: 'Oscillations',
            description: 'Simple harmonic motion of a spring-mass system',
            type: 'spring_harmonic',
            amplitude: 50,
            springConstant: 10,
            mass: 2,
            defaultOptions: {
                title: 'Simple Harmonic Motion - Spring',
                showDisplacement: true,
                showForce: true,
                showEnergy: true,
                animate: false,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'torqueLeverDiagram': {
            name: 'Torque and Lever Diagram',
            category: 'Mechanics',
            subcategory: 'Dynamics',
            description: 'Lever showing torque and moment arm',
            type: 'torque_lever',
            leverLength: 200,
            fulcrumPosition: 0.3,
            force1: 50,
            force2: 30,
            defaultOptions: {
                title: 'Torque on a Lever',
                showMomentArms: true,
                showForces: true,
                showRotation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== ELECTRICITY & MAGNETISM ==============================
        // ============================================================

        'electricFieldLines': {
            name: 'Electric Field Lines',
            category: 'Electricity & Magnetism',
            subcategory: 'Electrostatics',
            description: 'Electric field lines between point charges',
            type: 'electric_field_lines',
            charges: [
                { x: -60, y: 0, value: 1, label: '+q' },
                { x: 60, y: 0, value: -1, label: '-q' }
            ],
            defaultOptions: {
                title: 'Electric Field Lines',
                showFieldLines: true,
                showCharges: true,
                showArrows: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'potentialDistanceGraph': {
            name: 'Electric Potential vs Distance Graph',
            category: 'Electricity & Magnetism',
            subcategory: 'Electrostatics',
            description: 'Graph of electric potential as a function of distance from a point charge',
            type: 'potential_distance_graph',
            charge: 1,
            defaultOptions: {
                title: 'Electric Potential vs Distance',
                showPositive: true,
                showNegative: true,
                showGrid: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'equipotentialLinesDiagram': {
            name: 'Equipotential Lines Diagram',
            category: 'Electricity & Magnetism',
            subcategory: 'Electrostatics',
            description: 'Equipotential lines and electric field lines around charges',
            type: 'equipotential_lines',
            charges: [
                { x: -60, y: 0, value: 1, label: '+q' },
                { x: 60, y: 0, value: -1, label: '-q' }
            ],
            defaultOptions: {
                title: 'Equipotential Lines',
                showEquipotentials: true,
                showFieldLines: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'capacitorChargeCurve': {
            name: 'Capacitor Charge/Discharge Curve',
            category: 'Electricity & Magnetism',
            subcategory: 'Capacitance',
            description: 'Exponential charge and discharge curves for a capacitor',
            type: 'capacitor_charge_curve',
            capacitance: 100,
            resistance: 10,
            voltage: 12,
            defaultOptions: {
                title: 'Capacitor Charge & Discharge',
                showCharge: true,
                showDischarge: true,
                showTimeConstant: true,
                showGrid: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'circuitDiagram': {
            name: 'Circuit Diagram',
            category: 'Electricity & Magnetism',
            subcategory: 'DC Circuits',
            description: 'Basic DC circuit with resistors, battery and switch',
            type: 'circuit_diagram',
            components: [
                { type: 'battery', voltage: 12, label: 'EMF' },
                { type: 'resistor', resistance: 4, label: 'R₁' },
                { type: 'resistor', resistance: 8, label: 'R₂' }
            ],
            topology: 'series',
            defaultOptions: {
                title: 'DC Circuit Diagram',
                showValues: true,
                showCurrentFlow: true,
                showVoltageDrops: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'seriesParallelCircuits': {
            name: 'Series and Parallel Circuits',
            category: 'Electricity & Magnetism',
            subcategory: 'DC Circuits',
            description: 'Comparison of series and parallel resistor configurations',
            type: 'series_parallel_circuits',
            resistors: [
                { resistance: 4, label: 'R₁' },
                { resistance: 6, label: 'R₂' },
                { resistance: 12, label: 'R₃' }
            ],
            voltage: 12,
            defaultOptions: {
                title: 'Series vs Parallel Circuits',
                showSeries: true,
                showParallel: true,
                showEquivalentResistance: true,
                showCurrentValues: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'acVoltageWaveform': {
            name: 'AC Voltage Waveform',
            category: 'Electricity & Magnetism',
            subcategory: 'AC Circuits',
            description: 'Sinusoidal AC voltage waveform with peak and RMS values',
            type: 'ac_voltage_waveform',
            peakVoltage: 325,
            frequency: 50,
            defaultOptions: {
                title: 'AC Voltage Waveform',
                showPeak: true,
                showRMS: true,
                showPeriod: true,
                showGrid: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rlcCircuitDiagram': {
            name: 'RLC Circuit Diagram',
            category: 'Electricity & Magnetism',
            subcategory: 'AC Circuits',
            description: 'Series RLC circuit with phasor diagram',
            type: 'rlc_circuit_diagram',
            resistance: 50,
            inductance: 0.1,
            capacitance: 100,
            frequency: 50,
            defaultOptions: {
                title: 'Series RLC Circuit',
                showPhasor: true,
                showImpedance: true,
                showPhaseAngle: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'acResonanceCurve': {
            name: 'AC Resonance Curve',
            category: 'Electricity & Magnetism',
            subcategory: 'AC Circuits',
            description: 'Frequency response curve showing resonance in an RLC circuit',
            type: 'ac_resonance_curve',
            resonantFrequency: 50,
            qualityFactor: 5,
            defaultOptions: {
                title: 'AC Resonance Curve',
                showResonantFrequency: true,
                showBandwidth: true,
                showQFactor: true,
                showGrid: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'magneticFieldLines': {
            name: 'Magnetic Field Lines',
            category: 'Electricity & Magnetism',
            subcategory: 'Magnetism',
            description: 'Magnetic field lines around a bar magnet or current-carrying wire',
            type: 'magnetic_field_lines',
            sourceType: 'bar_magnet',
            defaultOptions: {
                title: 'Magnetic Field Lines',
                showFieldLines: true,
                showPoles: true,
                showArrows: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'lorentzForce': {
            name: 'Lorentz Force Diagram',
            category: 'Electricity & Magnetism',
            subcategory: 'Magnetism',
            description: 'Force on a charged particle moving in a magnetic field',
            type: 'lorentz_force',
            charge: 1,
            velocity: { x: 1, y: 0, z: 0 },
            magneticField: { x: 0, y: 0, z: 1 },
            defaultOptions: {
                title: 'Lorentz Force on Charged Particle',
                showVelocity: true,
                showField: true,
                showForce: true,
                showCrossProduct: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'electromagneticInduction': {
            name: 'Electromagnetic Induction Diagram',
            category: 'Electricity & Magnetism',
            subcategory: 'Electromagnetic Induction',
            description: 'Faraday\'s law — changing flux inducing EMF in a coil',
            type: 'electromagnetic_induction',
            coilTurns: 100,
            magnetVelocity: 5,
            defaultOptions: {
                title: 'Electromagnetic Induction',
                showMagnet: true,
                showCoil: true,
                showFlux: true,
                showInducedEMF: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'transformer': {
            name: 'Transformer Diagram',
            category: 'Electricity & Magnetism',
            subcategory: 'Electromagnetic Induction',
            description: 'Step-up or step-down transformer with primary and secondary coils',
            type: 'transformer',
            primaryTurns: 100,
            secondaryTurns: 200,
            primaryVoltage: 120,
            defaultOptions: {
                title: 'Transformer',
                showTurnsRatio: true,
                showVoltages: true,
                showCurrents: true,
                showCore: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== WAVES & SOUND ========================================
        // ============================================================

        'transverseLongitudinalWaves': {
            name: 'Transverse and Longitudinal Waves',
            category: 'Waves & Sound',
            subcategory: 'Wave Properties',
            description: 'Side-by-side comparison of transverse and longitudinal wave types',
            type: 'transverse_longitudinal_waves',
            wavelength: 80,
            amplitude: 30,
            defaultOptions: {
                title: 'Transverse vs Longitudinal Waves',
                showTransverse: true,
                showLongitudinal: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'waveInterference': {
            name: 'Wave Interference Diagram',
            category: 'Waves & Sound',
            subcategory: 'Superposition & Interference',
            description: 'Constructive and destructive interference of two waves',
            type: 'wave_interference',
            wave1: { amplitude: 30, wavelength: 80, phase: 0 },
            wave2: { amplitude: 30, wavelength: 80, phase: Math.PI },
            defaultOptions: {
                title: 'Wave Interference',
                showConstructive: true,
                showDestructive: true,
                showResultant: true,
                showGrid: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'soundWavePressure': {
            name: 'Sound Wave Pressure Diagram',
            category: 'Waves & Sound',
            subcategory: 'Sound',
            description: 'Pressure variation in a longitudinal sound wave',
            type: 'sound_wave_pressure',
            frequency: 440,
            amplitude: 40,
            defaultOptions: {
                title: 'Sound Wave — Pressure Variation',
                showCompression: true,
                showRarefaction: true,
                showPressureCurve: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'dopplerEffect': {
            name: 'Doppler Effect Diagram',
            category: 'Waves & Sound',
            subcategory: 'Sound',
            description: 'Wavefront compression and expansion due to moving source',
            type: 'doppler_effect',
            sourceVelocity: 30,
            soundSpeed: 340,
            defaultOptions: {
                title: 'Doppler Effect',
                showWavefronts: true,
                showSource: true,
                showObservers: true,
                showFrequencyShift: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'standingWaves': {
            name: 'Standing Waves Diagram',
            category: 'Waves & Sound',
            subcategory: 'Superposition & Interference',
            description: 'Standing wave harmonics in a string or pipe',
            type: 'standing_waves',
            harmonics: [1, 2, 3],
            medium: 'string',
            length: 200,
            defaultOptions: {
                title: 'Standing Waves — Harmonics',
                showNodes: true,
                showAntinodes: true,
                showHarmonics: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'wavefrontDiagram': {
            name: 'Wavefront Diagram',
            category: 'Waves & Sound',
            subcategory: 'Wave Properties',
            description: 'Plane and circular wavefronts propagating from a source',
            type: 'wavefront_diagram',
            sourceType: 'point',
            defaultOptions: {
                title: 'Wavefront Propagation',
                showPlane: true,
                showCircular: true,
                showRays: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== OPTICS ===============================================
        // ============================================================

        'planeMirrorRayDiagram': {
            name: 'Plane Mirror Ray Diagram',
            category: 'Optics',
            subcategory: 'Reflection',
            description: 'Ray diagram showing image formation in a plane mirror',
            type: 'plane_mirror_ray_diagram',
            objectDistance: 80,
            objectHeight: 40,
            defaultOptions: {
                title: 'Plane Mirror Ray Diagram',
                showObject: true,
                showImage: true,
                showRays: true,
                showNormal: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'snellsLawRefraction': {
            name: "Snell's Law Refraction Diagram",
            category: 'Optics',
            subcategory: 'Refraction',
            description: "Ray bending at an interface illustrating Snell's law",
            type: 'snells_law_refraction',
            n1: 1.0,
            n2: 1.5,
            incidentAngle: 30,
            defaultOptions: {
                title: "Snell's Law — Refraction",
                showAngles: true,
                showNormal: true,
                showIndices: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'totalInternalReflection': {
            name: 'Total Internal Reflection Diagram',
            category: 'Optics',
            subcategory: 'Refraction',
            description: 'Ray diagram showing critical angle and total internal reflection',
            type: 'total_internal_reflection',
            n1: 1.5,
            n2: 1.0,
            defaultOptions: {
                title: 'Total Internal Reflection',
                showCriticalAngle: true,
                showReflectedRay: true,
                showRefractedRay: true,
                showNormal: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'convexLensRayDiagram': {
            name: 'Convex Lens Ray Diagram',
            category: 'Optics',
            subcategory: 'Lenses',
            description: 'Ray diagram for image formation through a converging lens',
            type: 'convex_lens_ray_diagram',
            focalLength: 80,
            objectDistance: 160,
            objectHeight: 40,
            defaultOptions: {
                title: 'Convex Lens Ray Diagram',
                showPrincipalRays: true,
                showImage: true,
                showFocalPoints: true,
                showPrincipalAxis: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'concaveLensRayDiagram': {
            name: 'Concave Lens Ray Diagram',
            category: 'Optics',
            subcategory: 'Lenses',
            description: 'Ray diagram for image formation through a diverging lens',
            type: 'concave_lens_ray_diagram',
            focalLength: -80,
            objectDistance: 120,
            objectHeight: 40,
            defaultOptions: {
                title: 'Concave Lens Ray Diagram',
                showPrincipalRays: true,
                showImage: true,
                showFocalPoints: true,
                showPrincipalAxis: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'concaveMirrorRayDiagram': {
            name: 'Concave Mirror Ray Diagram',
            category: 'Optics',
            subcategory: 'Reflection',
            description: 'Ray diagram showing image formation in a concave mirror',
            type: 'concave_mirror_ray_diagram',
            focalLength: 80,
            objectDistance: 160,
            objectHeight: 40,
            defaultOptions: {
                title: 'Concave Mirror Ray Diagram',
                showPrincipalRays: true,
                showImage: true,
                showFocalPoint: true,
                showCentreOfCurvature: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'convexMirrorRayDiagram': {
            name: 'Convex Mirror Ray Diagram',
            category: 'Optics',
            subcategory: 'Reflection',
            description: 'Ray diagram showing image formation in a convex mirror',
            type: 'convex_mirror_ray_diagram',
            focalLength: -80,
            objectDistance: 120,
            objectHeight: 40,
            defaultOptions: {
                title: 'Convex Mirror Ray Diagram',
                showPrincipalRays: true,
                showImage: true,
                showFocalPoint: true,
                showPrincipalAxis: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'prismDispersion': {
            name: 'Prism Dispersion Diagram',
            category: 'Optics',
            subcategory: 'Dispersion',
            description: 'White light dispersed into a spectrum by a glass prism',
            type: 'prism_dispersion',
            prismAngle: 60,
            incidentAngle: 30,
            defaultOptions: {
                title: 'Prism Dispersion',
                showSpectrum: true,
                showAngles: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'opticalFiber': {
            name: 'Optical Fibre Diagram',
            category: 'Optics',
            subcategory: 'Refraction',
            description: 'Total internal reflection guiding light through an optical fibre',
            type: 'optical_fiber',
            coreIndex: 1.5,
            claddingIndex: 1.45,
            defaultOptions: {
                title: 'Optical Fibre — Total Internal Reflection',
                showCore: true,
                showCladding: true,
                showRays: true,
                showAngles: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'polarizationDiagram': {
            name: 'Polarization Diagram',
            category: 'Optics',
            subcategory: 'Wave Optics',
            description: 'Polarization of light through a polaroid filter',
            type: 'polarization_diagram',
            analyzerAngle: 45,
            defaultOptions: {
                title: 'Polarization of Light',
                showUnpolarized: true,
                showPolarizer: true,
                showPolarized: true,
                showAnalyzer: true,
                showIntensity: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'diffractionPattern': {
            name: 'Diffraction Pattern Diagram',
            category: 'Optics',
            subcategory: 'Wave Optics',
            description: 'Single or double slit diffraction and interference pattern',
            type: 'diffraction_pattern',
            slitType: 'double',
            slitWidth: 0.1,
            slitSeparation: 0.5,
            wavelength: 550,
            defaultOptions: {
                title: 'Double Slit Diffraction Pattern',
                showPattern: true,
                showIntensity: true,
                showLabels: true,
                showCentralMaximum: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== THERMAL PHYSICS ======================================
        // ============================================================

        'heatingCurvePhysics': {
            name: 'Heating Curve',
            category: 'Thermal Physics',
            subcategory: 'Change of State',
            description: 'Temperature vs heat added showing phase transitions',
            type: 'heating_curve_physics',
            substance: 'water',
            meltingPoint: 0,
            boilingPoint: 100,
            defaultOptions: {
                title: 'Heating Curve of Water',
                showPhases: true,
                showLatentHeat: true,
                showTemperatureLabels: true,
                showGrid: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'heatTransferModes': {
            name: 'Heat Transfer Modes Diagram',
            category: 'Thermal Physics',
            subcategory: 'Heat Transfer',
            description: 'Conduction, convection and radiation illustrated side by side',
            type: 'heat_transfer_modes',
            defaultOptions: {
                title: 'Modes of Heat Transfer',
                showConduction: true,
                showConvection: true,
                showRadiation: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'phaseDiagramPhysics': {
            name: 'Phase Diagram',
            category: 'Thermal Physics',
            subcategory: 'Change of State',
            description: 'Pressure-temperature phase diagram showing solid, liquid and gas regions',
            type: 'phase_diagram_physics',
            substance: 'water',
            defaultOptions: {
                title: 'Phase Diagram',
                showTriplePoint: true,
                showCriticalPoint: true,
                showRegionLabels: true,
                showGrid: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'kineticTheoryParticles': {
            name: 'Kinetic Theory Particle Diagram',
            category: 'Thermal Physics',
            subcategory: 'Kinetic Theory',
            description: 'Particle motion in solids, liquids and gases',
            type: 'kinetic_theory_particles',
            defaultOptions: {
                title: 'Kinetic Theory — Particle Model',
                showSolid: true,
                showLiquid: true,
                showGas: true,
                showLabels: true,
                animate: false,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'pvDiagram': {
            name: 'Pressure-Volume (pV) Diagram',
            category: 'Thermal Physics',
            subcategory: 'Thermodynamics',
            description: 'pV diagram showing isothermal, adiabatic and isobaric processes',
            type: 'pv_diagram',
            processes: ['isothermal', 'adiabatic', 'isobaric', 'isochoric'],
            defaultOptions: {
                title: 'pV Diagram',
                showIsothermal: true,
                showAdiabatic: true,
                showIsobaric: true,
                showIsochoric: true,
                showGrid: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'carnotCycle': {
            name: 'Carnot Cycle Diagram',
            category: 'Thermal Physics',
            subcategory: 'Thermodynamics',
            description: 'pV diagram of the ideal Carnot thermodynamic cycle',
            type: 'carnot_cycle',
            hotReservoir: 600,
            coldReservoir: 300,
            defaultOptions: {
                title: 'Carnot Cycle',
                showIsothermals: true,
                showAdiabatics: true,
                showWork: true,
                showEfficiency: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'heatEngineDiagram': {
            name: 'Heat Engine Diagram',
            category: 'Thermal Physics',
            subcategory: 'Thermodynamics',
            description: 'Sankey-style energy flow diagram for a heat engine',
            type: 'heat_engine_diagram',
            hotReservoir: 600,
            coldReservoir: 300,
            workOutput: 200,
            defaultOptions: {
                title: 'Heat Engine Energy Flow',
                showHotReservoir: true,
                showColdReservoir: true,
                showWork: true,
                showEfficiency: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'refrigeratorDiagram': {
            name: 'Refrigerator / Heat Pump Diagram',
            category: 'Thermal Physics',
            subcategory: 'Thermodynamics',
            description: 'Energy flow diagram for a refrigerator or heat pump',
            type: 'refrigerator_diagram',
            workInput: 100,
            coldReservoir: 250,
            hotReservoir: 300,
            defaultOptions: {
                title: 'Refrigerator Energy Flow',
                showColdReservoir: true,
                showHotReservoir: true,
                showWork: true,
                showCOP: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== SPECIAL RELATIVITY ===================================
        // ============================================================

        'timeDilation': {
            name: 'Time Dilation Diagram',
            category: 'Special Relativity',
            subcategory: 'Relativistic Effects',
            description: 'Illustration of time dilation for a moving clock relative to a stationary observer',
            type: 'time_dilation',
            velocity: 0.8,
            defaultOptions: {
                title: 'Time Dilation',
                showLorentzFactor: true,
                showClocks: true,
                showFormula: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'lengthContraction': {
            name: 'Length Contraction Diagram',
            category: 'Special Relativity',
            subcategory: 'Relativistic Effects',
            description: 'Comparison of proper length and contracted length for a moving object',
            type: 'length_contraction',
            velocity: 0.8,
            properLength: 100,
            defaultOptions: {
                title: 'Length Contraction',
                showLorentzFactor: true,
                showComparison: true,
                showFormula: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'spacetimeDiagram': {
            name: 'Spacetime Diagram',
            category: 'Special Relativity',
            subcategory: 'Spacetime',
            description: 'Minkowski spacetime diagram with worldlines and light cones',
            type: 'spacetime_diagram',
            velocity: 0.6,
            defaultOptions: {
                title: 'Spacetime (Minkowski) Diagram',
                showLightCone: true,
                showWorldlines: true,
                showAxes: true,
                showGrid: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'massEnergyEquivalence': {
            name: 'Mass-Energy Equivalence Diagram',
            category: 'Special Relativity',
            subcategory: 'Relativistic Energy',
            description: "Visual representation of Einstein's E = mc² mass-energy equivalence",
            type: 'mass_energy_equivalence',
            mass: 1,
            defaultOptions: {
                title: 'Mass-Energy Equivalence E = mc²',
                showRestEnergy: true,
                showKineticEnergy: true,
                showTotalEnergy: true,
                showFormula: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'lorentzTransformationDiagram': {
            name: 'Lorentz Transformation Diagram',
            category: 'Special Relativity',
            subcategory: 'Spacetime',
            description: 'Coordinate grid showing Lorentz transformation between two inertial frames',
            type: 'lorentz_transformation_diagram',
            velocity: 0.6,
            defaultOptions: {
                title: 'Lorentz Transformation',
                showBothFrames: true,
                showEvents: true,
                showGrid: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'velocityAddition': {
            name: 'Relativistic Velocity Addition Diagram',
            category: 'Special Relativity',
            subcategory: 'Relativistic Effects',
            description: 'Comparison of classical and relativistic velocity addition',
            type: 'velocity_addition',
            frameVelocity: 0.6,
            objectVelocity: 0.7,
            defaultOptions: {
                title: 'Relativistic Velocity Addition',
                showClassical: true,
                showRelativistic: true,
                showSpeedOfLight: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== NUCLEAR PHYSICS ======================================
        // ============================================================

        'alphaDecayDiagram': {
            name: 'Alpha Decay Diagram',
            category: 'Nuclear Physics',
            subcategory: 'Radioactive Decay',
            description: 'Nuclear equation and particle emission for alpha decay',
            type: 'alpha_decay_diagram',
            parentElement: 'Ra-226',
            defaultOptions: {
                title: 'Alpha Decay',
                showParentNucleus: true,
                showAlphaParticle: true,
                showDaughterNucleus: true,
                showEquation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'betaDecayDiagram': {
            name: 'Beta Decay Diagram',
            category: 'Nuclear Physics',
            subcategory: 'Radioactive Decay',
            description: 'Nuclear equation and particle emission for beta-minus and beta-plus decay',
            type: 'beta_decay_diagram',
            decayType: 'beta_minus',
            parentElement: 'C-14',
            defaultOptions: {
                title: 'Beta Decay',
                showParentNucleus: true,
                showBetaParticle: true,
                showNeutrino: true,
                showDaughterNucleus: true,
                showEquation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'halfLifeGraph': {
            name: 'Half-Life Decay Graph',
            category: 'Nuclear Physics',
            subcategory: 'Radioactive Decay',
            description: 'Exponential decay curve showing radioactive half-life',
            type: 'half_life_graph',
            halfLife: 5730,
            initialActivity: 1000,
            defaultOptions: {
                title: 'Radioactive Decay — Half-Life',
                showHalfLives: true,
                showExponentialCurve: true,
                showGrid: true,
                showTimeConstant: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'nuclearStructurePhysics': {
            name: 'Nuclear Structure Diagram',
            category: 'Nuclear Physics',
            subcategory: 'Nuclear Structure',
            description: 'Diagram of protons and neutrons inside an atomic nucleus',
            type: 'nuclear_structure_physics',
            protons: 6,
            neutrons: 6,
            defaultOptions: {
                title: 'Nuclear Structure',
                showProtons: true,
                showNeutrons: true,
                showLabels: true,
                showNucleonCount: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'bindingEnergyCurve': {
            name: 'Binding Energy per Nucleon Curve',
            category: 'Nuclear Physics',
            subcategory: 'Nuclear Structure',
            description: 'Graph of binding energy per nucleon vs mass number',
            type: 'binding_energy_curve',
            defaultOptions: {
                title: 'Binding Energy per Nucleon',
                showFissionRegion: true,
                showFusionRegion: true,
                showIronPeak: true,
                showGrid: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'nuclearFissionDiagram': {
            name: 'Nuclear Fission Diagram',
            category: 'Nuclear Physics',
            subcategory: 'Fission & Fusion',
            description: 'Diagram of a uranium nucleus undergoing fission releasing energy and neutrons',
            type: 'nuclear_fission_diagram',
            fissileNucleus: 'U-235',
            defaultOptions: {
                title: 'Nuclear Fission',
                showNeutron: true,
                showCompoundNucleus: true,
                showProducts: true,
                showEnergyRelease: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'nuclearFusionDiagram': {
            name: 'Nuclear Fusion Diagram',
            category: 'Nuclear Physics',
            subcategory: 'Fission & Fusion',
            description: 'Diagram of hydrogen isotopes fusing to form helium releasing energy',
            type: 'nuclear_fusion_diagram',
            reactants: ['H-2', 'H-3'],
            defaultOptions: {
                title: 'Nuclear Fusion',
                showReactants: true,
                showProducts: true,
                showEnergyRelease: true,
                showConditions: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'chainReactionDiagram': {
            name: 'Chain Reaction Diagram',
            category: 'Nuclear Physics',
            subcategory: 'Fission & Fusion',
            description: 'Branching chain reaction diagram showing neutron multiplication',
            type: 'chain_reaction_diagram',
            generations: 3,
            defaultOptions: {
                title: 'Nuclear Chain Reaction',
                showNeutrons: true,
                showFissions: true,
                showBranching: true,
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'radiationPenetration': {
            name: 'Radiation Penetration Diagram',
            category: 'Nuclear Physics',
            subcategory: 'Radioactive Decay',
            description: 'Comparison of alpha, beta and gamma radiation penetration through materials',
            type: 'radiation_penetration',
            defaultOptions: {
                title: 'Radiation Penetration',
                showAlpha: true,
                showBeta: true,
                showGamma: true,
                showMaterials: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== GRAVITATIONAL FIELDS =================================
        // ============================================================

        'gravitationalForceDiagram': {
            name: 'Gravitational Force Diagram',
            category: 'Gravitational Fields',
            subcategory: 'Gravitational Force',
            description: "Newton's law of gravitation — attractive force between two masses",
            type: 'gravitational_force_diagram',
            mass1: 5.97e24,
            mass2: 7.34e22,
            separation: 3.84e8,
            defaultOptions: {
                title: 'Gravitational Force',
                showForceArrows: true,
                showMasses: true,
                showFormula: true,
                showValues: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'gravitationalFieldDiagram': {
            name: 'Gravitational Field Diagram',
            category: 'Gravitational Fields',
            subcategory: 'Gravitational Fields',
            description: 'Gravitational field lines around a spherical mass',
            type: 'gravitational_field_diagram',
            centralMass: 5.97e24,
            defaultOptions: {
                title: 'Gravitational Field Lines',
                showFieldLines: true,
                showArrows: true,
                showSurface: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'orbitalMotionDiagram': {
            name: 'Orbital Motion Diagram',
            category: 'Gravitational Fields',
            subcategory: 'Orbits',
            description: 'Circular and elliptical orbital motion around a central body',
            type: 'orbital_motion_diagram',
            centralMass: 1.99e30,
            orbitalRadius: 1.5e11,
            defaultOptions: {
                title: 'Orbital Motion',
                showVelocity: true,
                showGravitationalForce: true,
                showOrbitPath: true,
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'keplerThirdLawDiagram': {
            name: "Kepler's Third Law Diagram",
            category: 'Gravitational Fields',
            subcategory: 'Orbits',
            description: "Graph of T² vs r³ demonstrating Kepler's third law for planetary orbits",
            type: 'kepler_third_law_diagram',
            planets: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter'],
            defaultOptions: {
                title: "Kepler's Third Law: T² vs r³",
                showPlanets: true,
                showBestFitLine: true,
                showGrid: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'gravitationalPotentialDiagram': {
            name: 'Gravitational Potential Diagram',
            category: 'Gravitational Fields',
            subcategory: 'Gravitational Fields',
            description: 'Graph of gravitational potential V vs distance r from a planet',
            type: 'gravitational_potential_diagram',
            centralMass: 5.97e24,
            defaultOptions: {
                title: 'Gravitational Potential vs Distance',
                showPotentialCurve: true,
                showSurface: true,
                showGrid: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'escapeVelocityDiagram': {
            name: 'Escape Velocity Diagram',
            category: 'Gravitational Fields',
            subcategory: 'Orbits',
            description: 'Energy diagram illustrating the concept of escape velocity',
            type: 'escape_velocity_diagram',
            planetMass: 5.97e24,
            planetRadius: 6.37e6,
            defaultOptions: {
                title: 'Escape Velocity',
                showEscapeVelocity: true,
                showOrbitalVelocity: true,
                showEnergyLevels: true,
                showFormula: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'geostationaryOrbitDiagram': {
            name: 'Geostationary Orbit Diagram',
            category: 'Gravitational Fields',
            subcategory: 'Orbits',
            description: 'Diagram showing geostationary orbit altitude and angular velocity matching Earth',
            type: 'geostationary_orbit_diagram',
            orbitRadius: 4.22e7,
            defaultOptions: {
                title: 'Geostationary Orbit',
                showEarth: true,
                showOrbitPath: true,
                showSatellite: true,
                showAltitude: true,
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'weightlessnessOrbitDiagram': {
            name: 'Weightlessness in Orbit Diagram',
            category: 'Gravitational Fields',
            subcategory: 'Orbits',
            description: 'Diagram showing why astronauts experience weightlessness in orbit',
            type: 'weightlessness_orbit_diagram',
            defaultOptions: {
                title: 'Weightlessness in Orbit',
                showGravitationalForce: true,
                showCentripetalAcceleration: true,
                showAstronaut: true,
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== QUANTUM PHYSICS ======================================
        // ============================================================

        'photoelectricEffect': {
            name: 'Photoelectric Effect Diagram',
            category: 'Quantum Physics',
            subcategory: 'Quantum Phenomena',
            description: 'Photon striking a metal surface and ejecting an electron',
            type: 'photoelectric_effect',
            workFunction: 2.3,
            photonFrequency: 8e14,
            defaultOptions: {
                title: 'Photoelectric Effect',
                showPhoton: true,
                showMetal: true,
                showElectron: true,
                showEnergyLevels: true,
                showEquation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'lineEmissionSpectra': {
            name: 'Line Emission Spectra Diagram',
            category: 'Quantum Physics',
            subcategory: 'Atomic Spectra',
            description: 'Discrete emission spectrum lines for hydrogen and other elements',
            type: 'line_emission_spectra',
            element: 'hydrogen',
            series: 'visible',
            defaultOptions: {
                title: 'Hydrogen Emission Spectrum',
                showSpectrum: true,
                showWavelengths: true,
                showColors: true,
                showLabels: true,
                width: 900,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'bohrEnergyLevelDiagram': {
            name: 'Bohr Energy Level Diagram',
            category: 'Quantum Physics',
            subcategory: 'Atomic Spectra',
            description: 'Energy level diagram for the hydrogen atom showing quantised levels',
            type: 'bohr_energy_level_diagram',
            element: 'hydrogen',
            levels: [1, 2, 3, 4, 5, 6],
            defaultOptions: {
                title: 'Bohr Energy Levels — Hydrogen',
                showLevels: true,
                showEnergyValues: true,
                showGroundState: true,
                showIonisationLevel: true,
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'bohrTransitionDiagram': {
            name: 'Bohr Transition Diagram',
            category: 'Quantum Physics',
            subcategory: 'Atomic Spectra',
            description: 'Electron transitions between energy levels with emitted photon wavelengths',
            type: 'bohr_transition_diagram',
            element: 'hydrogen',
            transitions: [
                { from: 3, to: 2, series: 'Balmer' },
                { from: 2, to: 1, series: 'Lyman' },
                { from: 4, to: 2, series: 'Balmer' }
            ],
            defaultOptions: {
                title: 'Electron Transitions — Hydrogen',
                showArrows: true,
                showWavelengths: true,
                showSeriesLabels: true,
                showEnergyLevels: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'comptonScatteringDiagram': {
            name: 'Compton Scattering Diagram',
            category: 'Quantum Physics',
            subcategory: 'Quantum Phenomena',
            description: 'Incident photon scattering off an electron showing change in wavelength',
            type: 'compton_scattering_diagram',
            incidentWavelength: 0.01,
            scatteringAngle: 90,
            defaultOptions: {
                title: 'Compton Scattering',
                showIncidentPhoton: true,
                showScatteredPhoton: true,
                showRecoilElectron: true,
                showAngles: true,
                showWavelengthShift: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'comptonEnergyDiagram': {
            name: 'Compton Energy Diagram',
            category: 'Quantum Physics',
            subcategory: 'Quantum Phenomena',
            description: 'Graph of scattered photon wavelength vs scattering angle for Compton effect',
            type: 'compton_energy_diagram',
            incidentWavelength: 0.01,
            defaultOptions: {
                title: 'Compton Scattering — Wavelength Shift',
                showWavelengthShiftCurve: true,
                showComptonWavelength: true,
                showGrid: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'quantumTunneling': {
            name: 'Quantum Tunnelling Diagram',
            category: 'Quantum Physics',
            subcategory: 'Quantum Phenomena',
            description: 'Wave function penetrating a potential barrier illustrating quantum tunnelling',
            type: 'quantum_tunneling',
            barrierHeight: 5,
            barrierWidth: 20,
            particleEnergy: 3,
            defaultOptions: {
                title: 'Quantum Tunnelling',
                showWaveFunction: true,
                showPotentialBarrier: true,
                showTransmission: true,
                showReflection: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'deBroglieWavelength': {
            name: 'de Broglie Wavelength Diagram',
            category: 'Quantum Physics',
            subcategory: 'Wave-Particle Duality',
            description: 'Illustration of matter wave associated with a moving particle',
            type: 'de_broglie_wavelength',
            particleMass: 9.11e-31,
            particleVelocity: 1e6,
            defaultOptions: {
                title: 'de Broglie Matter Wave',
                showParticle: true,
                showWave: true,
                showWavelength: true,
                showFormula: true,
                showMomentum: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== MECHANICS — EXISTING ENTRIES (unchanged) =============
        // ============================================================

        'freeBodyDiagram': {
            name: 'Free Body Diagram',
            category: 'Mechanics',
            subcategory: 'Dynamics',
            description: 'Force vectors acting on an object',
            type: 'free_body_diagram',
            forces: [
                { name: 'Weight', magnitude: 50, angle: 270, color: '#E74C3C' },
                { name: 'Normal', magnitude: 50, angle: 90, color: '#3498DB' },
                { name: 'Applied', magnitude: 30, angle: 0, color: '#2ECC71' }
            ],
            defaultOptions: {
                title: 'Free Body Diagram',
                showLabels: true,
                showMagnitudes: true,
                showAngles: false,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'vectorDiagram': {
            name: 'Vector Addition Diagram',
            category: 'Mechanics',
            subcategory: 'Dynamics',
            description: 'Vector addition using tip-to-tail method',
            type: 'vector_diagram',
            vectors: [
                { x: 40, y: 30, label: 'A', color: '#E74C3C' },
                { x: 30, y: -20, label: 'B', color: '#3498DB' }
            ],
            showResultant: true,
            defaultOptions: {
                title: 'Vector Addition',
                showComponents: true,
                showResultant: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'motionGraphs': {
            name: 'Motion Graphs (s-t, v-t, a-t)',
            category: 'Mechanics',
            subcategory: 'Dynamics',
            description: 'Kinematic graphs showing motion relationships',
            type: 'motion_graphs',
            graphType: 'velocity-time',
            segments: [
                { time: 0, value: 0, label: 'Rest' },
                { time: 2, value: 10, label: 'Accelerating' },
                { time: 5, value: 10, label: 'Constant velocity' },
                { time: 7, value: 0, label: 'Decelerating' }
            ],
            defaultOptions: {
                title: 'Velocity-Time Graph',
                showArea: true,
                showSlope: true,
                showGrid: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'projectileMotion': {
            name: 'Projectile Motion Trajectory',
            category: 'Mechanics',
            subcategory: 'Kinematics',
            description: 'Parabolic path of projectile motion',
            type: 'projectile_motion',
            initialVelocity: 20,
            launchAngle: 45,
            defaultOptions: {
                title: 'Projectile Motion',
                showVelocityVectors: true,
                showComponents: true,
                showTrajectory: true,
                showRange: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'inclinedPlane': {
            name: 'Inclined Plane Diagram',
            category: 'Mechanics',
            subcategory: 'Dynamics',
            description: 'Forces on an object on an incline',
            type: 'inclined_plane',
            angle: 30,
            mass: 10,
            friction: true,
            defaultOptions: {
                title: 'Inclined Plane',
                showForceComponents: true,
                showAngles: true,
                showFriction: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'momentumCollision': {
            name: 'Momentum Collision Diagram',
            category: 'Mechanics',
            subcategory: 'Momentum & Collisions',
            description: 'Before and after elastic collision comparison',
            type: 'momentum_collision',
            collisionType: 'elastic',
            objects: [
                { mass: 2, velocity: 5, color: '#E74C3C' },
                { mass: 3, velocity: -3, color: '#3498DB' }
            ],
            defaultOptions: {
                title: 'Elastic Collision',
                showBefore: true,
                showAfter: true,
                showMomentum: true,
                showEnergy: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'circularMotion': {
            name: 'Circular Motion Diagram',
            category: 'Mechanics',
            subcategory: 'Circular Motion',
            description: 'Centripetal force and circular motion',
            type: 'circular_motion',
            radius: 100,
            velocity: 15,
            defaultOptions: {
                title: 'Circular Motion',
                showCentripetalForce: true,
                showVelocity: true,
                showAcceleration: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'workEnergyBarChart': {
            name: 'Work-Energy Bar Chart',
            category: 'Mechanics',
            subcategory: 'Energy, Work & Power',
            description: 'Energy transformation bar chart',
            type: 'work_energy_chart',
            initialKE: 100,
            initialPE: 0,
            finalKE: 50,
            finalPE: 40,
            workDone: -10,
            defaultOptions: {
                title: 'Work-Energy Transformation',
                showValues: true,
                showTotal: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'springHarmonicMotion': {
            name: 'Spring Harmonic Oscillator',
            category: 'Mechanics',
            subcategory: 'Oscillations',
            description: 'Simple harmonic motion of a spring-mass system',
            type: 'spring_harmonic',
            amplitude: 50,
            springConstant: 10,
            mass: 2,
            defaultOptions: {
                title: 'Simple Harmonic Motion - Spring',
                showDisplacement: true,
                showForce: true,
                showEnergy: true,
                animate: false,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'torqueLeverDiagram': {
            name: 'Torque and Lever Diagram',
            category: 'Mechanics',
            subcategory: 'Dynamics',
            description: 'Lever showing torque and moment arm',
            type: 'torque_lever',
            leverLength: 200,
            fulcrumPosition: 0.3,
            force1: 50,
            force2: 30,
            defaultOptions: {
                title: 'Torque on a Lever',
                showMomentArms: true,
                showForces: true,
                showRotation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== MECHANICS — KINEMATICS ================================
        // ============================================================

        'displacementTimeGraph': {
            name: 'Displacement-Time Graph',
            category: 'Mechanics',
            subcategory: 'Kinematics',
            description: 'Displacement vs time showing different motion phases',
            type: 'displacement_time_graph',
            segments: [
                { time: 0, value: 0, label: 'Start' },
                { time: 3, value: 30, label: 'Moving forward' },
                { time: 5, value: 30, label: 'Stationary' },
                { time: 8, value: 0, label: 'Returning' }
            ],
            defaultOptions: {
                title: 'Displacement-Time Graph',
                showSlope: true,
                showGrid: true,
                showAnnotations: true,
                xLabel: 't (s)',
                yLabel: 's (m)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'velocityTimeGraph': {
            name: 'Velocity-Time Graph',
            category: 'Mechanics',
            subcategory: 'Kinematics',
            description: 'Velocity vs time with area shading for displacement',
            type: 'velocity_time_graph',
            segments: [
                { time: 0, value: 0, label: 'Rest' },
                { time: 3, value: 12, label: 'Accelerating' },
                { time: 6, value: 12, label: 'Constant v' },
                { time: 9, value: 0, label: 'Decelerating' }
            ],
            defaultOptions: {
                title: 'Velocity-Time Graph',
                showArea: true,
                showSlope: true,
                showGrid: true,
                xLabel: 't (s)',
                yLabel: 'v (m/s)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'accelerationTimeGraph': {
            name: 'Acceleration-Time Graph',
            category: 'Mechanics',
            subcategory: 'Kinematics',
            description: 'Acceleration vs time showing constant and zero acceleration phases',
            type: 'acceleration_time_graph',
            segments: [
                { time: 0, value: 4, label: 'Constant a' },
                { time: 3, value: 4, label: 'Constant a' },
                { time: 3, value: 0, label: 'a=0' },
                { time: 6, value: 0, label: 'a=0' },
                { time: 6, value: -4, label: 'Deceleration' },
                { time: 9, value: -4, label: 'Deceleration' }
            ],
            defaultOptions: {
                title: 'Acceleration-Time Graph',
                showArea: true,
                showGrid: true,
                showAnnotations: true,
                xLabel: 't (s)',
                yLabel: 'a (m/s²)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'vectorComponents': {
            name: 'Vector Components Diagram',
            category: 'Mechanics',
            subcategory: 'Kinematics',
            description: 'Resolution of a vector into horizontal and vertical components',
            type: 'vector_components',
            magnitude: 50,
            angle: 37,
            defaultOptions: {
                title: 'Vector Components',
                showComponents: true,
                showAngles: true,
                showMagnitudes: true,
                showGrid: false,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'trajectoryParabola': {
            name: 'Trajectory Parabola Comparison',
            category: 'Mechanics',
            subcategory: 'Kinematics',
            description: 'Multiple projectile trajectories at different launch angles',
            type: 'trajectory_parabola',
            initialVelocity: 20,
            angles: [30, 45, 60],
            defaultOptions: {
                title: 'Projectile Trajectories at Different Angles',
                showAngles: true,
                showPeaks: true,
                showRanges: true,
                showGrid: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== MECHANICS — ENERGY, WORK & POWER =====================
        // ============================================================

        'workDoneDiagram': {
            name: 'Work Done Diagram',
            category: 'Mechanics',
            subcategory: 'Energy, Work & Power',
            description: 'Work done by a force acting at an angle to displacement',
            type: 'work_done',
            force: 60,
            angle: 30,
            displacement: 8,
            defaultOptions: {
                title: 'Work Done by a Force',
                showComponents: true,
                showAngle: true,
                showFormula: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'energyBarChart': {
            name: 'Energy Bar Chart',
            category: 'Mechanics',
            subcategory: 'Energy, Work & Power',
            description: 'Kinetic and potential energy at different positions',
            type: 'energy_bar_chart',
            positions: [
                { label: 'Top', KE: 0, PE: 100, height: 10 },
                { label: 'Mid', KE: 50, PE: 50, height: 5 },
                { label: 'Bottom', KE: 100, PE: 0, height: 0 }
            ],
            defaultOptions: {
                title: 'Energy Bar Chart — Conservation of Energy',
                showKE: true,
                showPE: true,
                showTotal: true,
                showValues: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'springCompression': {
            name: 'Spring Compression Diagram',
            category: 'Mechanics',
            subcategory: 'Energy, Work & Power',
            description: 'Spring showing compression, extension, and elastic potential energy',
            type: 'spring_compression',
            naturalLength: 120,
            compression: 40,
            extension: 40,
            springConstant: 800,
            defaultOptions: {
                title: 'Spring Compression and Extension',
                showNaturalLength: true,
                showForceArrows: true,
                showEPE: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rollerCoasterEnergy': {
            name: 'Roller Coaster Energy Diagram',
            category: 'Mechanics',
            subcategory: 'Energy, Work & Power',
            description: 'Energy transformation along a roller coaster track',
            type: 'roller_coaster_energy',
            mass: 500,
            points: [
                { x: 0,   height: 40, label: 'Start' },
                { x: 100, height: 0,  label: 'Bottom' },
                { x: 200, height: 25, label: 'Hill 2' },
                { x: 300, height: 0,  label: 'Valley' },
                { x: 400, height: 10, label: 'End' }
            ],
            defaultOptions: {
                title: 'Roller Coaster — Energy Transformation',
                showKE: true,
                showPE: true,
                showVelocity: true,
                showHeights: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'forceDisplacementGraph': {
            name: 'Force-Displacement Graph',
            category: 'Mechanics',
            subcategory: 'Energy, Work & Power',
            description: 'Force vs displacement graph showing work as area under curve',
            type: 'force_displacement_graph',
            points: [
                { x: 0, F: 0 },
                { x: 2, F: 20 },
                { x: 4, F: 20 },
                { x: 6, F: 10 },
                { x: 8, F: 0 }
            ],
            defaultOptions: {
                title: 'Force-Displacement Graph',
                showArea: true,
                showGrid: true,
                showWorkValue: true,
                xLabel: 'x (m)',
                yLabel: 'F (N)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'potentialEnergyCurve': {
            name: 'Potential Energy Curve',
            category: 'Mechanics',
            subcategory: 'Energy, Work & Power',
            description: 'Potential energy as a function of position showing equilibrium points',
            type: 'potential_energy_curve',
            equilibriumX: 3,
            wellDepth: 80,
            defaultOptions: {
                title: 'Potential Energy vs Position',
                showEquilibrium: true,
                showForceDirection: true,
                showStableUnstable: true,
                showGrid: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== MECHANICS — MOMENTUM & COLLISIONS ====================
        // ============================================================

        'collisionDiagram': {
            name: 'Collision Diagram',
            category: 'Mechanics',
            subcategory: 'Momentum & Collisions',
            description: 'General collision showing before and after with momentum vectors',
            type: 'collision_diagram',
            objects: [
                { mass: 4, velocity: 6, color: '#333333' },
                { mass: 2, velocity: -2, color: '#777777' }
            ],
            defaultOptions: {
                title: 'Collision — Momentum Conservation',
                showBefore: true,
                showAfter: true,
                showMomentumVectors: true,
                showLabels: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'momentumVectors': {
            name: 'Momentum Vectors Diagram',
            category: 'Mechanics',
            subcategory: 'Momentum & Collisions',
            description: 'Vector representation of momentum before and after collision',
            type: 'momentum_vectors',
            objects: [
                { mass: 3, velocity: 4, label: 'p₁', color: '#333333' },
                { mass: 2, velocity: -3, label: 'p₂', color: '#555555' }
            ],
            defaultOptions: {
                title: 'Momentum Vector Diagram',
                showScale: true,
                showResultant: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'elasticCollision': {
            name: 'Elastic Collision Diagram',
            category: 'Mechanics',
            subcategory: 'Momentum & Collisions',
            description: 'Elastic collision with both momentum and kinetic energy conserved',
            type: 'elastic_collision',
            objects: [
                { mass: 3, velocity: 6, color: '#333333' },
                { mass: 3, velocity: 0, color: '#777777' }
            ],
            defaultOptions: {
                title: 'Elastic Collision (equal masses)',
                showBefore: true,
                showAfter: true,
                showMomentum: true,
                showKineticEnergy: true,
                width: 900,
                height: 580,
                backgroundColor: '#ffffff'
            }
        },

        'inelasticCollision': {
            name: 'Inelastic Collision Diagram',
            category: 'Mechanics',
            subcategory: 'Momentum & Collisions',
            description: 'Perfectly inelastic collision where objects stick together',
            type: 'inelastic_collision',
            objects: [
                { mass: 4, velocity: 5, color: '#333333' },
                { mass: 2, velocity: 0, color: '#777777' }
            ],
            defaultOptions: {
                title: 'Perfectly Inelastic Collision',
                showBefore: true,
                showAfter: true,
                showMomentum: true,
                showKELost: true,
                width: 900,
                height: 580,
                backgroundColor: '#ffffff'
            }
        },

        'impulseForceTimeGraph': {
            name: 'Impulse Force-Time Graph',
            category: 'Mechanics',
            subcategory: 'Momentum & Collisions',
            description: 'Force vs time graph showing impulse as area under curve',
            type: 'impulse_force_time',
            peakForce: 800,
            contactTime: 0.05,
            initialMomentum: 0,
            defaultOptions: {
                title: 'Impulse — Force-Time Graph',
                showArea: true,
                showImpulseValue: true,
                showGrid: true,
                showMomentumChange: true,
                xLabel: 't (s)',
                yLabel: 'F (N)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'explosionDiagram': {
            name: 'Explosion Diagram',
            category: 'Mechanics',
            subcategory: 'Momentum & Collisions',
            description: 'Explosion showing conservation of momentum from rest',
            type: 'explosion_diagram',
            fragments: [
                { mass: 2, velocity: 15, label: 'A', color: '#333333' },
                { mass: 3, velocity: -10, label: 'B', color: '#777777' }
            ],
            defaultOptions: {
                title: 'Explosion — Conservation of Momentum',
                showBefore: true,
                showAfter: true,
                showMomentum: true,
                showVelocities: true,
                width: 900,
                height: 550,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== MECHANICS — CIRCULAR MOTION ==========================
        // ============================================================

        'centripetalForce': {
            name: 'Centripetal Force Diagram',
            category: 'Mechanics',
            subcategory: 'Circular Motion',
            description: 'Forces on an object in circular motion with centripetal analysis',
            type: 'centripetal_force',
            mass: 0.5,
            radius: 1.2,
            speed: 3,
            defaultOptions: {
                title: 'Centripetal Force in Circular Motion',
                showForceVectors: true,
                showVelocity: true,
                showAcceleration: true,
                showFormulas: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'verticalCircle': {
            name: 'Vertical Circle Motion',
            category: 'Mechanics',
            subcategory: 'Circular Motion',
            description: 'Object moving in a vertical circle showing forces at key positions',
            type: 'vertical_circle',
            mass: 0.3,
            radius: 0.8,
            speed: 4,
            defaultOptions: {
                title: 'Motion in a Vertical Circle',
                showTopForces: true,
                showBottomForces: true,
                showSideForces: true,
                showMinSpeed: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'conicalPendulum': {
            name: 'Conical Pendulum Diagram',
            category: 'Mechanics',
            subcategory: 'Circular Motion',
            description: 'Conical pendulum showing tension components and circular path',
            type: 'conical_pendulum',
            stringLength: 0.5,
            halfAngle: 30,
            mass: 0.2,
            defaultOptions: {
                title: 'Conical Pendulum',
                showTension: true,
                showAngle: true,
                showCircularPath: true,
                showForceComponents: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'bankedCurve': {
            name: 'Banked Curve Diagram',
            category: 'Mechanics',
            subcategory: 'Circular Motion',
            description: 'Vehicle on a banked road showing forces for circular motion',
            type: 'banked_curve',
            bankAngle: 25,
            mass: 1000,
            radius: 50,
            defaultOptions: {
                title: 'Banked Curve',
                showNormal: true,
                showWeight: true,
                showComponents: true,
                showAngle: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'satelliteOrbit': {
            name: 'Satellite Orbit Diagram',
            category: 'Mechanics',
            subcategory: 'Circular Motion',
            description: 'Satellite in circular orbit showing gravitational force and velocity',
            type: 'satellite_orbit',
            orbitRadius: 200,
            planetRadius: 60,
            defaultOptions: {
                title: 'Satellite in Circular Orbit',
                showGravity: true,
                showVelocity: true,
                showOrbitPath: true,
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== MECHANICS — OSCILLATIONS =============================
        // ============================================================

        'shmDisplacementGraph': {
            name: 'SHM Displacement-Time Graph',
            category: 'Mechanics',
            subcategory: 'Oscillations',
            description: 'Displacement vs time for simple harmonic motion x = A cos(ωt)',
            type: 'shm_displacement_graph',
            amplitude: 0.1,
            period: 2.0,
            numCycles: 2,
            defaultOptions: {
                title: 'SHM — Displacement vs Time',
                showAmplitude: true,
                showPeriod: true,
                showGrid: true,
                showEquation: true,
                xLabel: 't (s)',
                yLabel: 'x (m)',
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'shmVelocityGraph': {
            name: 'SHM Velocity-Time Graph',
            category: 'Mechanics',
            subcategory: 'Oscillations',
            description: 'Velocity vs time for SHM: v = -Aω sin(ωt)',
            type: 'shm_velocity_graph',
            amplitude: 0.1,
            period: 2.0,
            numCycles: 2,
            defaultOptions: {
                title: 'SHM — Velocity vs Time',
                showMaxVelocity: true,
                showPeriod: true,
                showGrid: true,
                showEquation: true,
                xLabel: 't (s)',
                yLabel: 'v (m/s)',
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'shmAccelerationGraph': {
            name: 'SHM Acceleration-Time Graph',
            category: 'Mechanics',
            subcategory: 'Oscillations',
            description: 'Acceleration vs time for SHM: a = -Aω² cos(ωt)',
            type: 'shm_acceleration_graph',
            amplitude: 0.1,
            period: 2.0,
            numCycles: 2,
            defaultOptions: {
                title: 'SHM — Acceleration vs Time',
                showMaxAcceleration: true,
                showPeriod: true,
                showGrid: true,
                showEquation: true,
                xLabel: 't (s)',
                yLabel: 'a (m/s²)',
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'simplePendulum': {
            name: 'Simple Pendulum Diagram',
            category: 'Mechanics',
            subcategory: 'Oscillations',
            description: 'Simple pendulum showing forces, angle, and restoring force',
            type: 'simple_pendulum',
            length: 1.0,
            mass: 0.2,
            angle: 20,
            defaultOptions: {
                title: 'Simple Pendulum',
                showForces: true,
                showAngle: true,
                showRestoring: true,
                showPeriodFormula: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'energyInShm': {
            name: 'Energy in SHM Graph',
            category: 'Mechanics',
            subcategory: 'Oscillations',
            description: 'KE, PE, and total energy as functions of displacement in SHM',
            type: 'energy_in_shm',
            amplitude: 0.1,
            springConstant: 50,
            defaultOptions: {
                title: 'Energy in SHM vs Displacement',
                showKE: true,
                showPE: true,
                showTotal: true,
                showGrid: true,
                showValues: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'resonanceCurve': {
            name: 'Resonance Curve',
            category: 'Mechanics',
            subcategory: 'Oscillations',
            description: 'Amplitude vs driving frequency showing resonance peak',
            type: 'resonance_curve',
            naturalFrequency: 5,
            dampingLevels: [0.1, 0.3, 0.6],
            defaultOptions: {
                title: 'Resonance Curves for Different Damping',
                showResonanceFreq: true,
                showDampingLabels: true,
                showGrid: true,
                xLabel: 'f (Hz)',
                yLabel: 'Amplitude',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'dampingCurves': {
            name: 'Damping Curves',
            category: 'Mechanics',
            subcategory: 'Oscillations',
            description: 'Displacement vs time for underdamped, critically damped, and overdamped oscillations',
            type: 'damping_curves',
            amplitude: 1.0,
            period: 2.0,
            dampingTypes: ['underdamped', 'critical', 'overdamped'],
            defaultOptions: {
                title: 'Damped Oscillations',
                showEnvelope: true,
                showLabels: true,
                showGrid: true,
                xLabel: 't (s)',
                yLabel: 'x (m)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== WAVES & SOUND — EXISTING ENTRIES (unchanged) =========
        // ============================================================

        'transverseLongitudinalWaves': {
            name: 'Transverse vs Longitudinal Waves',
            category: 'Waves & Sound',
            description: 'Comparison of wave types',
            type: 'wave_types',
            wavelength: 100,
            amplitude: 30,
            defaultOptions: {
                title: 'Transverse vs Longitudinal Waves',
                showParticles: true,
                showLabels: true,
                animate: false,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'wavefrontDiagram': {
            name: 'Wavefront Diagram',
            category: 'Waves & Sound',
            description: 'Circular wavefronts from point source',
            type: 'wavefront',
            wavelength: 40,
            numWavefronts: 5,
            defaultOptions: {
                title: 'Wavefronts',
                showSource: true,
                showRays: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'reflectionRefraction': {
            name: 'Reflection and Refraction',
            category: 'Waves & Sound',
            description: 'Wave behavior at boundaries',
            type: 'reflection_refraction',
            incidentAngle: 30,
            n1: 1.0,
            n2: 1.5,
            defaultOptions: {
                title: 'Reflection and Refraction',
                showNormals: true,
                showAngles: true,
                showSnellsLaw: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'waveInterference': {
            name: 'Wave Interference Pattern',
            category: 'Waves & Sound',
            description: 'Constructive and destructive interference',
            type: 'wave_interference',
            separation: 100,
            wavelength: 30,
            defaultOptions: {
                title: 'Wave Interference',
                showSources: true,
                showNodes: true,
                showAntinodes: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'standingWaves': {
            name: 'Standing Waves on String',
            category: 'Waves & Sound',
            description: 'Harmonics and nodes on vibrating string',
            type: 'standing_waves',
            harmonic: 3,
            length: 300,
            amplitude: 40,
            defaultOptions: {
                title: 'Standing Waves - 3rd Harmonic',
                showNodes: true,
                showAntinodes: true,
                animate: false,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'dopplerEffect': {
            name: 'Doppler Effect Diagram',
            category: 'Waves & Sound',
            description: 'Wavefront compression/expansion',
            type: 'doppler_effect',
            sourceVelocity: 0.5,
            direction: 'right',
            defaultOptions: {
                title: 'Doppler Effect',
                showWavefronts: true,
                showVelocity: true,
                showFrequencyChange: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'soundWavePressure': {
            name: 'Sound Wave Pressure Graph',
            category: 'Waves & Sound',
            description: 'Pressure variation in sound wave',
            type: 'sound_pressure',
            frequency: 440,
            amplitude: 50,
            defaultOptions: {
                title: 'Sound Wave - Pressure vs Position',
                showCompressions: true,
                showRarefactions: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'diffractionPattern': {
            name: 'Diffraction Pattern',
            category: 'Waves & Sound',
            description: 'Single and double slit diffraction',
            type: 'diffraction',
            slitType: 'double',
            slitWidth: 20,
            slitSeparation: 80,
            wavelength: 10,
            defaultOptions: {
                title: 'Double Slit Diffraction',
                showIntensity: true,
                showPattern: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== WAVES & SOUND — PROGRESSIVE WAVES (NEW) ==============
        // ============================================================

        'displacementPositionGraph': {
            name: 'Displacement-Position Graph',
            category: 'Waves & Sound',
            subcategory: 'Progressive Waves',
            description: 'Displacement of particles vs position along a progressive wave at a snapshot in time',
            type: 'displacement_position_graph',
            wavelength: 0.4,
            amplitude: 0.05,
            frequency: 5,
            defaultOptions: {
                title: 'Displacement-Position Graph',
                showWavelength: true,
                showAmplitude: true,
                showGrid: true,
                showDirection: true,
                xLabel: 'x (m)',
                yLabel: 'y (m)',
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'transverseWaveDiagram': {
            name: 'Transverse Wave Diagram',
            category: 'Waves & Sound',
            subcategory: 'Progressive Waves',
            description: 'Transverse wave showing particle displacement perpendicular to wave travel',
            type: 'transverse_wave_diagram',
            wavelength: 80,
            amplitude: 30,
            numCycles: 2,
            defaultOptions: {
                title: 'Transverse Wave',
                showParticleMotion: true,
                showWaveDirection: true,
                showCrestsTroughs: true,
                showLabels: true,
                animate: false,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'longitudinalWaveDiagram': {
            name: 'Longitudinal Wave Diagram',
            category: 'Waves & Sound',
            subcategory: 'Progressive Waves',
            description: 'Longitudinal wave showing compressions and rarefactions with particle displacement',
            type: 'longitudinal_wave_diagram',
            wavelength: 80,
            amplitude: 20,
            numCycles: 2,
            defaultOptions: {
                title: 'Longitudinal Wave',
                showCompressions: true,
                showRarefactions: true,
                showParticleMotion: true,
                showWaveDirection: true,
                animate: false,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'wavePhaseDifference': {
            name: 'Wave Phase Difference Diagram',
            category: 'Waves & Sound',
            subcategory: 'Progressive Waves',
            description: 'Two waves showing phase difference in fractions of a cycle and radians',
            type: 'wave_phase_difference',
            wavelength: 100,
            amplitude: 30,
            phaseDifference: 90,
            defaultOptions: {
                title: 'Phase Difference Between Two Waves',
                showPhaseDiff: true,
                showBothWaves: true,
                showAnnotations: true,
                showGrid: true,
                xLabel: 'x (m)',
                yLabel: 'displacement',
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'electroMagneticWave': {
            name: 'Electromagnetic Wave Diagram',
            category: 'Waves & Sound',
            subcategory: 'Progressive Waves',
            description: 'EM wave showing perpendicular E and B field oscillations propagating in 3D',
            type: 'electromagnetic_wave',
            wavelength: 120,
            amplitude: 40,
            defaultOptions: {
                title: 'Electromagnetic Wave',
                showEField: true,
                showBField: true,
                showPropagationDirection: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'intensityDistanceGraph': {
            name: 'Intensity-Distance Graph',
            category: 'Waves & Sound',
            subcategory: 'Progressive Waves',
            description: 'Intensity vs distance showing inverse square law for a point source',
            type: 'intensity_distance_graph',
            sourceIntensity: 1000,
            referenceDistance: 1,
            defaultOptions: {
                title: 'Intensity vs Distance (Inverse Square Law)',
                showInverseSquareCurve: true,
                showGrid: true,
                showFormula: true,
                showAnnotations: true,
                xLabel: 'r (m)',
                yLabel: 'I (W/m²)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== WAVES & SOUND — STATIONARY WAVES (NEW) ===============
        // ============================================================

        'stationaryWaveFormation': {
            name: 'Stationary Wave Formation',
            category: 'Waves & Sound',
            subcategory: 'Stationary Waves',
            description: 'Formation of a stationary wave by superposition of two identical waves travelling in opposite directions',
            type: 'stationary_wave_formation',
            wavelength: 100,
            amplitude: 35,
            defaultOptions: {
                title: 'Stationary Wave Formation by Superposition',
                showIncidentWave: true,
                showReflectedWave: true,
                showResultant: true,
                showNodes: true,
                showAntinodes: true,
                animate: false,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'nodesAntinodesDiagram': {
            name: 'Nodes and Antinodes Diagram',
            category: 'Waves & Sound',
            subcategory: 'Stationary Waves',
            description: 'Stationary wave clearly labelled with nodes, antinodes, and amplitude',
            type: 'nodes_antinodes_diagram',
            harmonic: 2,
            length: 300,
            amplitude: 40,
            defaultOptions: {
                title: 'Nodes and Antinodes in a Stationary Wave',
                showNodes: true,
                showAntinodes: true,
                showAmplitude: true,
                showLabels: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'stringHarmonics1st': {
            name: 'String — 1st Harmonic (Fundamental)',
            category: 'Waves & Sound',
            subcategory: 'Stationary Waves',
            description: 'Fundamental mode of vibration on a fixed string: one antinode, two nodes',
            type: 'string_harmonics',
            harmonic: 1,
            length: 300,
            amplitude: 40,
            defaultOptions: {
                title: '1st Harmonic — Fundamental Mode',
                showNodes: true,
                showAntinodes: true,
                showWavelength: true,
                showFrequencyFormula: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'stringHarmonics2nd': {
            name: 'String — 2nd Harmonic (1st Overtone)',
            category: 'Waves & Sound',
            subcategory: 'Stationary Waves',
            description: '2nd harmonic on a fixed string: two antinodes, three nodes',
            type: 'string_harmonics',
            harmonic: 2,
            length: 300,
            amplitude: 40,
            defaultOptions: {
                title: '2nd Harmonic — 1st Overtone',
                showNodes: true,
                showAntinodes: true,
                showWavelength: true,
                showFrequencyFormula: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'stringHarmonics3rd': {
            name: 'String — 3rd Harmonic (2nd Overtone)',
            category: 'Waves & Sound',
            subcategory: 'Stationary Waves',
            description: '3rd harmonic on a fixed string: three antinodes, four nodes',
            type: 'string_harmonics',
            harmonic: 3,
            length: 300,
            amplitude: 40,
            defaultOptions: {
                title: '3rd Harmonic — 2nd Overtone',
                showNodes: true,
                showAntinodes: true,
                showWavelength: true,
                showFrequencyFormula: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'openPipeHarmonics': {
            name: 'Open Pipe Harmonics',
            category: 'Waves & Sound',
            subcategory: 'Stationary Waves',
            description: 'Harmonics in an open pipe showing antinodes at both open ends',
            type: 'open_pipe_harmonics',
            pipeLength: 300,
            harmonics: [1, 2, 3],
            defaultOptions: {
                title: 'Open Pipe — Harmonics',
                showNodes: true,
                showAntinodes: true,
                showWavelengths: true,
                showFrequencies: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'closedPipeHarmonics': {
            name: 'Closed Pipe Harmonics',
            category: 'Waves & Sound',
            subcategory: 'Stationary Waves',
            description: 'Harmonics in a closed pipe showing a node at closed end and antinode at open end',
            type: 'closed_pipe_harmonics',
            pipeLength: 300,
            harmonics: [1, 3, 5],
            defaultOptions: {
                title: 'Closed Pipe — Odd Harmonics Only',
                showNodes: true,
                showAntinodes: true,
                showWavelengths: true,
                showFrequencies: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'progressiveVsStationaryComparison': {
            name: 'Progressive vs Stationary Wave Comparison',
            category: 'Waves & Sound',
            subcategory: 'Stationary Waves',
            description: 'Side-by-side comparison of progressive and stationary wave properties',
            type: 'progressive_vs_stationary',
            wavelength: 100,
            amplitude: 30,
            defaultOptions: {
                title: 'Progressive vs Stationary Waves',
                showEnergyTransfer: true,
                showPhase: true,
                showAmplitude: true,
                showNodesAntinodes: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== WAVES & SOUND — SUPERPOSITION & INTERFERENCE (NEW) ===
        // ============================================================

        'superpositionPrinciple': {
            name: 'Superposition Principle Diagram',
            category: 'Waves & Sound',
            subcategory: 'Superposition & Interference',
            description: 'Two waves superimposing to form a resultant wave showing the principle of superposition',
            type: 'superposition_principle',
            wave1Amplitude: 30,
            wave2Amplitude: 20,
            wave1Wavelength: 100,
            wave2Wavelength: 100,
            phaseDifference: 0,
            defaultOptions: {
                title: 'Principle of Superposition',
                showWave1: true,
                showWave2: true,
                showResultant: true,
                showGrid: true,
                showAnnotations: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'constructiveInterference': {
            name: 'Constructive Interference',
            category: 'Waves & Sound',
            subcategory: 'Superposition & Interference',
            description: 'Two waves in phase combining to produce a resultant of maximum amplitude',
            type: 'constructive_interference',
            amplitude: 30,
            wavelength: 100,
            defaultOptions: {
                title: 'Constructive Interference — Waves in Phase',
                showWave1: true,
                showWave2: true,
                showResultant: true,
                showPathDifference: true,
                showAnnotations: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'destructiveInterference': {
            name: 'Destructive Interference',
            category: 'Waves & Sound',
            subcategory: 'Superposition & Interference',
            description: 'Two waves in antiphase combining to produce zero resultant amplitude',
            type: 'destructive_interference',
            amplitude: 30,
            wavelength: 100,
            defaultOptions: {
                title: 'Destructive Interference — Waves in Antiphase',
                showWave1: true,
                showWave2: true,
                showResultant: true,
                showPathDifference: true,
                showAnnotations: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'youngDoubleSlitSetup': {
            name: "Young's Double Slit Setup",
            category: 'Waves & Sound',
            subcategory: 'Superposition & Interference',
            description: "Young's double slit experiment showing light source, slits, and fringe pattern on screen",
            type: 'young_double_slit_setup',
            slitSeparation: 0.5,
            slitToScreen: 1.0,
            wavelength: 600,
            defaultOptions: {
                title: "Young's Double Slit Experiment",
                showSlits: true,
                showFringes: true,
                showPathDifference: true,
                showFringeSpacing: true,
                showGeometry: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'interferencePattern': {
            name: 'Interference Pattern',
            category: 'Waves & Sound',
            subcategory: 'Superposition & Interference',
            description: 'Two-source interference pattern showing bright and dark fringes',
            type: 'interference_pattern',
            separation: 100,
            wavelength: 30,
            defaultOptions: {
                title: 'Two-Source Interference Pattern',
                showBrightFringes: true,
                showDarkFringes: true,
                showPathLines: true,
                showIntensityProfile: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'diffractionGratingDiagram': {
            name: 'Diffraction Grating Diagram',
            category: 'Waves & Sound',
            subcategory: 'Superposition & Interference',
            description: 'Diffraction grating producing sharp maxima at multiple orders',
            type: 'diffraction_grating',
            gratingSpacing: 1.67e-6,
            wavelength: 500e-9,
            numSlits: 5,
            defaultOptions: {
                title: 'Diffraction Grating',
                showOrders: true,
                showAngles: true,
                showFormula: true,
                showGrating: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'singleSlitDiffraction': {
            name: 'Single Slit Diffraction',
            category: 'Waves & Sound',
            subcategory: 'Superposition & Interference',
            description: 'Single slit diffraction showing intensity pattern with central maximum',
            type: 'single_slit_diffraction',
            slitWidth: 0.1e-3,
            wavelength: 600e-9,
            screenDistance: 1.0,
            defaultOptions: {
                title: 'Single Slit Diffraction Pattern',
                showIntensityPattern: true,
                showCentralMaximum: true,
                showMinima: true,
                showAngles: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'pathDifferenceDiagram': {
            name: 'Path Difference Diagram',
            category: 'Waves & Sound',
            subcategory: 'Superposition & Interference',
            description: 'Geometric path difference between two sources to a point on a screen',
            type: 'path_difference_diagram',
            slitSeparation: 80,
            screenDistance: 400,
            wavelength: 30,
            defaultOptions: {
                title: 'Path Difference Geometry',
                showPathDifference: true,
                showConstructive: true,
                showDestructive: true,
                showGeometry: true,
                showFormula: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'polarisationDiagram': {
            name: 'Polarisation Diagram',
            category: 'Waves & Sound',
            subcategory: 'Superposition & Interference',
            description: 'Polarisation of transverse waves using a polarising filter',
            type: 'polarisation_diagram',
            initialAngle: 0,
            analyserAngle: 45,
            defaultOptions: {
                title: 'Polarisation of Light',
                showUnpolarised: true,
                showPolariser: true,
                showPolarised: true,
                showAnalyser: true,
                showIntensity: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'malusLawGraph': {
            name: "Malus's Law Graph",
            category: 'Waves & Sound',
            subcategory: 'Superposition & Interference',
            description: "Intensity vs angle graph following Malus's Law I = I₀ cos²θ",
            type: 'malus_law_graph',
            initialIntensity: 100,
            defaultOptions: {
                title: "Malus's Law — I = I₀ cos²θ",
                showCosSquaredCurve: true,
                showGrid: true,
                showFormula: true,
                showAnnotations: true,
                xLabel: 'θ (degrees)',
                yLabel: 'I (W/m²)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== WAVES & SOUND — SOUND WAVES (NEW) ====================
        // ============================================================

        'longitudinalSoundWave': {
            name: 'Longitudinal Sound Wave',
            category: 'Waves & Sound',
            subcategory: 'Sound Waves',
            description: 'Longitudinal sound wave showing particle displacement, pressure, and wave propagation',
            type: 'longitudinal_sound_wave',
            frequency: 440,
            wavelength: 0.78,
            amplitude: 25,
            defaultOptions: {
                title: 'Longitudinal Sound Wave',
                showParticles: true,
                showDisplacementGraph: true,
                showPressureGraph: true,
                showWaveDirection: true,
                animate: false,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'compressionRarefaction': {
            name: 'Compression and Rarefaction Diagram',
            category: 'Waves & Sound',
            subcategory: 'Sound Waves',
            description: 'Sound wave showing regions of compression (high pressure) and rarefaction (low pressure)',
            type: 'compression_rarefaction',
            wavelength: 120,
            numCycles: 2,
            defaultOptions: {
                title: 'Compressions and Rarefactions in Sound',
                showCompressions: true,
                showRarefactions: true,
                showPressureVariation: true,
                showParticleSpacing: true,
                showLabels: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'dopplerEffectApproaching': {
            name: 'Doppler Effect — Source Approaching',
            category: 'Waves & Sound',
            subcategory: 'Sound Waves',
            description: 'Moving source approaching observer showing compressed wavefronts and increased frequency',
            type: 'doppler_effect_approaching',
            sourceVelocity: 0.5,
            soundSpeed: 340,
            sourceFrequency: 500,
            defaultOptions: {
                title: 'Doppler Effect — Approaching Source',
                showWavefronts: true,
                showObserver: true,
                showFrequencyShift: true,
                showFormula: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'dopplerEffectReceding': {
            name: 'Doppler Effect — Source Receding',
            category: 'Waves & Sound',
            subcategory: 'Sound Waves',
            description: 'Moving source receding from observer showing stretched wavefronts and decreased frequency',
            type: 'doppler_effect_receding',
            sourceVelocity: 0.5,
            soundSpeed: 340,
            sourceFrequency: 500,
            defaultOptions: {
                title: 'Doppler Effect — Receding Source',
                showWavefronts: true,
                showObserver: true,
                showFrequencyShift: true,
                showFormula: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'wavefrontCompression': {
            name: 'Wavefront Compression Diagram',
            category: 'Waves & Sound',
            subcategory: 'Sound Waves',
            description: 'Circular wavefronts from a moving source showing compression ahead and expansion behind',
            type: 'wavefront_compression',
            sourceVelocity: 0.6,
            numWavefronts: 6,
            defaultOptions: {
                title: 'Wavefront Compression from Moving Source',
                showSourcePosition: true,
                showWavefronts: true,
                showVelocityVector: true,
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'intensityInverseSquare': {
            name: 'Intensity Inverse Square Law',
            category: 'Waves & Sound',
            subcategory: 'Sound Waves',
            description: 'Sound intensity decreasing with distance following the inverse square law',
            type: 'intensity_inverse_square',
            sourceIntensity: 1.0,
            referenceDistance: 1,
            defaultOptions: {
                title: 'Sound Intensity — Inverse Square Law',
                showInverseSquareCurve: true,
                showWavefronts: true,
                showGrid: true,
                showFormula: true,
                showAnnotations: true,
                xLabel: 'r (m)',
                yLabel: 'I (W/m²)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'decibelScaleChart': {
            name: 'Decibel Scale Chart',
            category: 'Waves & Sound',
            subcategory: 'Sound Waves',
            description: 'Decibel scale showing common sound intensities from threshold of hearing to jet engine',
            type: 'decibel_scale_chart',
            levels: [
                { dB: 0,   label: 'Threshold of hearing' },
                { dB: 20,  label: 'Whisper' },
                { dB: 60,  label: 'Normal conversation' },
                { dB: 80,  label: 'Traffic' },
                { dB: 110, label: 'Rock concert' },
                { dB: 130, label: 'Threshold of pain' },
                { dB: 160, label: 'Jet engine' }
            ],
            defaultOptions: {
                title: 'Decibel Scale',
                showIntensityValues: true,
                showLogScale: true,
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'ultrasoundPulseEcho': {
            name: 'Ultrasound Pulse-Echo Diagram',
            category: 'Waves & Sound',
            subcategory: 'Sound Waves',
            description: 'Ultrasound pulse-echo technique showing transmitted and reflected pulses for distance measurement',
            type: 'ultrasound_pulse_echo',
            medium1Speed: 1500,
            medium2Speed: 3500,
            defaultOptions: {
                title: 'Ultrasound Pulse-Echo Technique',
                showTransmitted: true,
                showReflected: true,
                showTimeline: true,
                showDistanceCalc: true,
                showBoundary: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'acousticImpedance': {
            name: 'Acoustic Impedance Diagram',
            category: 'Waves & Sound',
            subcategory: 'Sound Waves',
            description: 'Acoustic impedance mismatch at a boundary showing reflection and transmission coefficients',
            type: 'acoustic_impedance',
            Z1: 1.5e6,
            Z2: 7.0e6,
            defaultOptions: {
                title: 'Acoustic Impedance at a Boundary',
                showIncident: true,
                showReflected: true,
                showTransmitted: true,
                showCoefficients: true,
                showFormula: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== WAVES & SOUND — EM SPECTRUM & OPTICS (NEW) ===========
        // ============================================================

        'electromagneticSpectrum': {
            name: 'Electromagnetic Spectrum',
            category: 'Waves & Sound',
            subcategory: 'EM Spectrum & Optics',
            description: 'Full electromagnetic spectrum from radio waves to gamma rays with wavelength and frequency scales',
            type: 'electromagnetic_spectrum',
            defaultOptions: {
                title: 'The Electromagnetic Spectrum',
                showWavelengthScale: true,
                showFrequencyScale: true,
                showRegionLabels: true,
                showApplications: true,
                showVisibleExpanded: true,
                width: 1000,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'refractionDiagram': {
            name: 'Refraction Diagram',
            category: 'Waves & Sound',
            subcategory: 'EM Spectrum & Optics',
            description: 'Ray of light refracting at a boundary between two optical media',
            type: 'refraction_diagram',
            incidentAngle: 40,
            n1: 1.0,
            n2: 1.5,
            defaultOptions: {
                title: 'Refraction at an Optical Boundary',
                showNormal: true,
                showAngles: true,
                showSnellsLaw: true,
                showMedia: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'snelLawDiagram': {
            name: "Snell's Law Diagram",
            category: 'Waves & Sound',
            subcategory: 'EM Spectrum & Optics',
            description: "Snell's law diagram with labelled angles of incidence and refraction and refractive indices",
            type: 'snell_law_diagram',
            incidentAngle: 35,
            n1: 1.0,
            n2: 1.6,
            defaultOptions: {
                title: "Snell's Law: n₁sinθ₁ = n₂sinθ₂",
                showFormula: true,
                showAngles: true,
                showNormal: true,
                showRefractiveIndices: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'totalInternalReflection': {
            name: 'Total Internal Reflection',
            category: 'Waves & Sound',
            subcategory: 'EM Spectrum & Optics',
            description: 'Total internal reflection occurring when angle of incidence exceeds the critical angle',
            type: 'total_internal_reflection',
            criticalAngle: 42,
            n1: 1.5,
            n2: 1.0,
            defaultOptions: {
                title: 'Total Internal Reflection',
                showCriticalAngle: true,
                showReflectedRay: true,
                showAngles: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'criticalAngleDiagram': {
            name: 'Critical Angle Diagram',
            category: 'Waves & Sound',
            subcategory: 'EM Spectrum & Optics',
            description: 'Three rays showing below critical angle (refraction), at critical angle, and above (TIR)',
            type: 'critical_angle_diagram',
            criticalAngle: 42,
            n1: 1.5,
            n2: 1.0,
            defaultOptions: {
                title: 'Critical Angle and Total Internal Reflection',
                showThreeRays: true,
                showAngles: true,
                showCriticalAngleLabel: true,
                showFormula: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'opticalFibreStructure': {
            name: 'Optical Fibre Structure',
            category: 'Waves & Sound',
            subcategory: 'EM Spectrum & Optics',
            description: 'Cross-section of an optical fibre showing core, cladding, and total internal reflection path',
            type: 'optical_fibre_structure',
            coreRadius: 50,
            claddingThickness: 20,
            coreN: 1.5,
            claddingN: 1.45,
            defaultOptions: {
                title: 'Optical Fibre — Total Internal Reflection',
                showCore: true,
                showCladding: true,
                showRayPath: true,
                showAngles: true,
                showLabels: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'dispersionPrism': {
            name: 'Dispersion by a Prism',
            category: 'Waves & Sound',
            subcategory: 'EM Spectrum & Optics',
            description: 'White light dispersed by a prism into component colours of the visible spectrum',
            type: 'dispersion_prism',
            prismAngle: 60,
            incidentAngle: 45,
            defaultOptions: {
                title: 'Dispersion of White Light by a Prism',
                showVisibleSpectrum: true,
                showRefractedRays: true,
                showWavelengthLabels: true,
                showPrism: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rayDiagramLens': {
            name: 'Ray Diagram — Converging Lens',
            category: 'Waves & Sound',
            subcategory: 'EM Spectrum & Optics',
            description: 'Ray diagram for a converging lens showing three principal rays and image formation',
            type: 'ray_diagram_lens',
            focalLength: 80,
            objectDistance: 150,
            objectHeight: 40,
            defaultOptions: {
                title: 'Ray Diagram — Converging Lens',
                showPrincipalRays: true,
                showImage: true,
                showFocalPoints: true,
                showMeasurements: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'wavelengthFrequencySpectrum': {
            name: 'Wavelength-Frequency Spectrum',
            category: 'Waves & Sound',
            subcategory: 'EM Spectrum & Optics',
            description: 'Graph showing the relationship between wavelength and frequency across the EM spectrum',
            type: 'wavelength_frequency_spectrum',
            defaultOptions: {
                title: 'Wavelength vs Frequency in the EM Spectrum',
                showInverseRelationship: true,
                showRegionColours: true,
                showGrid: true,
                showFormula: true,
                xLabel: 'Wavelength (m)',
                yLabel: 'Frequency (Hz)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== ELECTRICITY — CHARGE & CURRENT (NEW) =================
        // ============================================================

        'currentFlowDiagram': {
            name: 'Current Flow Diagram',
            category: 'Electricity',
            subcategory: 'Charge & Current',
            description: 'Simple circuit showing conventional current direction and electron flow direction',
            type: 'current_flow_diagram',
            voltage: 12,
            resistance: 4,
            defaultOptions: {
                title: 'Current Flow in a Circuit',
                showConventionalCurrent: true,
                showElectronFlow: true,
                showCircuit: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'driftVelocityModel': {
            name: 'Drift Velocity Model',
            category: 'Electricity',
            subcategory: 'Charge & Current',
            description: 'Microscopic model of current flow showing electron drift velocity in a conductor',
            type: 'drift_velocity_model',
            crossSectionArea: 1e-6,
            numberDensity: 8.5e28,
            driftVelocity: 1e-4,
            defaultOptions: {
                title: 'Drift Velocity Model: I = nAqv',
                showElectrons: true,
                showDriftDirection: true,
                showCrossSectionArea: true,
                showFormula: true,
                showLabels: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'chargeCarrierMovement': {
            name: 'Charge Carrier Movement',
            category: 'Electricity',
            subcategory: 'Charge & Current',
            description: 'Positive and negative charge carriers in different conductor types showing current direction',
            type: 'charge_carrier_movement',
            defaultOptions: {
                title: 'Charge Carrier Movement',
                showPositiveCarriers: true,
                showNegativeCarriers: true,
                showCurrentDirection: true,
                showLabels: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'currentTimeGraph': {
            name: 'Current-Time Graph',
            category: 'Electricity',
            subcategory: 'Charge & Current',
            description: 'Current vs time graph with area under curve representing charge flow',
            type: 'current_time_graph',
            segments: [
                { time: 0, current: 0 },
                { time: 1, current: 3 },
                { time: 4, current: 3 },
                { time: 5, current: 0 }
            ],
            defaultOptions: {
                title: 'Current-Time Graph (Area = Charge)',
                showArea: true,
                showChargeValue: true,
                showGrid: true,
                showAnnotations: true,
                xLabel: 't (s)',
                yLabel: 'I (A)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'chargeTimeGraph': {
            name: 'Charge-Time Graph',
            category: 'Electricity',
            subcategory: 'Charge & Current',
            description: 'Charge vs time graph with slope representing current',
            type: 'charge_time_graph',
            chargeRate: 3,
            totalTime: 5,
            defaultOptions: {
                title: 'Charge-Time Graph (Slope = Current)',
                showSlope: true,
                showGrid: true,
                showAnnotations: true,
                showFormula: true,
                xLabel: 't (s)',
                yLabel: 'Q (C)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'electronFlowVsConventional': {
            name: 'Electron Flow vs Conventional Current',
            category: 'Electricity',
            subcategory: 'Charge & Current',
            description: 'Comparison diagram of electron flow (negative to positive) vs conventional current (positive to negative)',
            type: 'electron_flow_vs_conventional',
            defaultOptions: {
                title: 'Electron Flow vs Conventional Current',
                showBothDirections: true,
                showBattery: true,
                showLabels: true,
                showAnnotations: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== ELECTRICITY — POTENTIAL DIFFERENCE & EMF (NEW) =======
        // ============================================================

        'emfInternalResistanceCircuit': {
            name: 'EMF and Internal Resistance Circuit',
            category: 'Electricity',
            subcategory: 'Potential Difference & EMF',
            description: 'Circuit showing EMF source with internal resistance and external load',
            type: 'emf_internal_resistance_circuit',
            emf: 12,
            internalResistance: 1,
            externalResistance: 5,
            defaultOptions: {
                title: 'EMF and Internal Resistance',
                showEMF: true,
                showInternalR: true,
                showTerminalVoltage: true,
                showLostVolts: true,
                showFormulas: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'terminalVoltageGraph': {
            name: 'Terminal Voltage Graph',
            category: 'Electricity',
            subcategory: 'Potential Difference & EMF',
            description: 'Terminal voltage vs current graph showing EMF intercept and internal resistance from slope',
            type: 'terminal_voltage_graph',
            emf: 12,
            internalResistance: 1.5,
            defaultOptions: {
                title: 'Terminal Voltage vs Current',
                showEMFIntercept: true,
                showSlope: true,
                showGrid: true,
                showFormula: true,
                xLabel: 'I (A)',
                yLabel: 'V (V)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'vVsIGraph': {
            name: 'V-I Characteristic Graph',
            category: 'Electricity',
            subcategory: 'Potential Difference & EMF',
            description: 'V vs I graph for a source showing how terminal voltage varies with load current',
            type: 'v_vs_i_graph',
            emf: 9,
            internalResistance: 2,
            defaultOptions: {
                title: 'V-I Graph for an EMF Source',
                showEMF: true,
                showShortCircuitCurrent: true,
                showGrid: true,
                showWorkingPoint: true,
                xLabel: 'I (A)',
                yLabel: 'V (V)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'cellEnergyDiagram': {
            name: 'Cell Energy Diagram',
            category: 'Electricity',
            subcategory: 'Potential Difference & EMF',
            description: 'Energy transfer diagram showing chemical energy converted to electrical energy per unit charge in a cell',
            type: 'cell_energy_diagram',
            emf: 6,
            internalResistance: 0.5,
            externalResistance: 3,
            defaultOptions: {
                title: 'Energy Transfer in a Cell',
                showChemicalEnergy: true,
                showElectricalEnergy: true,
                showHeatDissipation: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'lostVoltsDiagram': {
            name: 'Lost Volts Diagram',
            category: 'Electricity',
            subcategory: 'Potential Difference & EMF',
            description: 'Circuit diagram illustrating lost volts across internal resistance and terminal voltage across external circuit',
            type: 'lost_volts_diagram',
            emf: 10,
            internalResistance: 2,
            externalResistance: 8,
            defaultOptions: {
                title: 'Lost Volts and Terminal Voltage',
                showVoltageDrops: true,
                showLabels: true,
                showFormula: true,
                showAnnotations: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'openVsClosedCircuit': {
            name: 'Open vs Closed Circuit',
            category: 'Electricity',
            subcategory: 'Potential Difference & EMF',
            description: 'Comparison of open circuit (voltmeter reads EMF) and closed circuit (terminal voltage is less)',
            type: 'open_vs_closed_circuit',
            emf: 9,
            internalResistance: 1,
            externalResistance: 4,
            defaultOptions: {
                title: 'Open Circuit vs Closed Circuit Voltage',
                showOpenCircuit: true,
                showClosedCircuit: true,
                showVoltmeterReadings: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== ELECTRICITY — RESISTANCE & RESISTIVITY (NEW) =========
        // ============================================================

        'ivCharacteristicOhmic': {
            name: 'I-V Characteristic — Ohmic Resistor',
            category: 'Electricity',
            subcategory: 'Resistance & Resistivity',
            description: 'I-V characteristic showing straight line through origin for an ohmic conductor',
            type: 'iv_characteristic_ohmic',
            resistance: 10,
            defaultOptions: {
                title: 'I-V Characteristic — Ohmic Resistor',
                showLinear: true,
                showGrid: true,
                showSlope: true,
                showAnnotations: true,
                xLabel: 'V (V)',
                yLabel: 'I (A)',
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'ivCharacteristicLamp': {
            name: 'I-V Characteristic — Filament Lamp',
            category: 'Electricity',
            subcategory: 'Resistance & Resistivity',
            description: 'I-V characteristic showing non-linear curve for a filament lamp due to increasing temperature',
            type: 'iv_characteristic_lamp',
            defaultOptions: {
                title: 'I-V Characteristic — Filament Lamp',
                showNonLinear: true,
                showGrid: true,
                showAnnotations: true,
                showResistanceChange: true,
                xLabel: 'V (V)',
                yLabel: 'I (A)',
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'ivCharacteristicDiode': {
            name: 'I-V Characteristic — Diode',
            category: 'Electricity',
            subcategory: 'Resistance & Resistivity',
            description: 'I-V characteristic of a semiconductor diode showing forward bias conduction and reverse bias blocking',
            type: 'iv_characteristic_diode',
            forwardVoltage: 0.7,
            defaultOptions: {
                title: 'I-V Characteristic — Diode',
                showForwardBias: true,
                showReverseBias: true,
                showThresholdVoltage: true,
                showGrid: true,
                showAnnotations: true,
                xLabel: 'V (V)',
                yLabel: 'I (A)',
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'ivCharacteristicThermistor': {
            name: 'I-V Characteristic — Thermistor',
            category: 'Electricity',
            subcategory: 'Resistance & Resistivity',
            description: 'I-V characteristic of an NTC thermistor showing resistance decrease with increasing temperature',
            type: 'iv_characteristic_thermistor',
            defaultOptions: {
                title: 'I-V Characteristic — NTC Thermistor',
                showIVCurve: true,
                showTemperatureEffect: true,
                showGrid: true,
                showAnnotations: true,
                xLabel: 'V (V)',
                yLabel: 'I (A)',
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'resistivityFormulaDiagram': {
            name: 'Resistivity Formula Diagram',
            category: 'Electricity',
            subcategory: 'Resistance & Resistivity',
            description: 'Conductor diagram illustrating resistivity formula R = ρL/A with labelled dimensions',
            type: 'resistivity_formula_diagram',
            length: 2.0,
            crossSectionArea: 1e-6,
            resistivity: 1.7e-8,
            defaultOptions: {
                title: 'Resistivity: R = ρL/A',
                showConductor: true,
                showLength: true,
                showArea: true,
                showFormula: true,
                showLabels: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'temperatureResistanceGraphs': {
            name: 'Temperature-Resistance Graphs',
            category: 'Electricity',
            subcategory: 'Resistance & Resistivity',
            description: 'Resistance vs temperature graphs for a metal conductor and an NTC thermistor',
            type: 'temperature_resistance_graphs',
            defaultOptions: {
                title: 'Resistance vs Temperature',
                showMetalConductor: true,
                showNTCThermistor: true,
                showAnnotations: true,
                showGrid: true,
                xLabel: 'T (°C)',
                yLabel: 'R (Ω)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'conductorStructure': {
            name: 'Conductor Structure Diagram',
            category: 'Electricity',
            subcategory: 'Resistance & Resistivity',
            description: 'Microscopic structure of a conductor showing lattice ions and free electrons',
            type: 'conductor_structure',
            defaultOptions: {
                title: 'Metallic Conductor Structure',
                showLatticeIons: true,
                showFreeElectrons: true,
                showElectronMotion: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== ELECTRICITY — DC CIRCUITS (NEW) ======================
        // ============================================================

        'seriesCircuitDiagram': {
            name: 'Series Circuit Diagram',
            category: 'Electricity',
            subcategory: 'DC Circuits',
            description: 'Series circuit with multiple resistors showing current and voltage distribution',
            type: 'series_circuit_diagram',
            emf: 12,
            resistors: [4, 3, 5],
            defaultOptions: {
                title: 'Series Circuit',
                showCurrentValues: true,
                showVoltageDrops: true,
                showTotalResistance: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'parallelCircuitDiagram': {
            name: 'Parallel Circuit Diagram',
            category: 'Electricity',
            subcategory: 'DC Circuits',
            description: 'Parallel circuit with multiple branches showing current splitting and equal voltage',
            type: 'parallel_circuit_diagram',
            emf: 12,
            resistors: [6, 4, 12],
            defaultOptions: {
                title: 'Parallel Circuit',
                showBranchCurrents: true,
                showVoltages: true,
                showTotalResistance: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'mixedCircuitDiagram': {
            name: 'Mixed (Series-Parallel) Circuit',
            category: 'Electricity',
            subcategory: 'DC Circuits',
            description: 'Circuit combining series and parallel sections for stepwise resistance calculation',
            type: 'mixed_circuit_diagram',
            emf: 15,
            seriesResistor: 3,
            parallelResistors: [6, 6],
            defaultOptions: {
                title: 'Mixed Series-Parallel Circuit',
                showCurrentPaths: true,
                showVoltageDrops: true,
                showSimplificationSteps: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'potentialDividerCircuit': {
            name: 'Potential Divider Circuit',
            category: 'Electricity',
            subcategory: 'DC Circuits',
            description: 'Potential divider with two resistors showing output voltage calculation',
            type: 'potential_divider_circuit',
            inputVoltage: 12,
            R1: 4,
            R2: 8,
            defaultOptions: {
                title: 'Potential Divider',
                showOutputVoltage: true,
                showFormula: true,
                showVoltageDrops: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'kirchhoffCurrentLaw': {
            name: "Kirchhoff's Current Law",
            category: 'Electricity',
            subcategory: 'DC Circuits',
            description: 'Junction diagram illustrating KCL: sum of currents into a node equals sum of currents out',
            type: 'kirchhoff_current_law',
            currentsIn: [3, 2],
            currentsOut: [4, 1],
            defaultOptions: {
                title: "Kirchhoff's Current Law (KCL)",
                showJunction: true,
                showCurrentArrows: true,
                showEquation: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'kirchhoffVoltageLaw': {
            name: "Kirchhoff's Voltage Law",
            category: 'Electricity',
            subcategory: 'DC Circuits',
            description: 'Loop diagram illustrating KVL: sum of EMFs equals sum of potential drops around a loop',
            type: 'kirchhoff_voltage_law',
            emf: 12,
            resistors: [3, 5, 4],
            defaultOptions: {
                title: "Kirchhoff's Voltage Law (KVL)",
                showLoop: true,
                showVoltageDrops: true,
                showEquation: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'wheatstoneBridge': {
            name: 'Wheatstone Bridge',
            category: 'Electricity',
            subcategory: 'DC Circuits',
            description: 'Wheatstone bridge circuit used for precise resistance measurement with balance condition',
            type: 'wheatstone_bridge',
            R1: 10,
            R2: 20,
            R3: 15,
            R4: 30,
            defaultOptions: {
                title: 'Wheatstone Bridge',
                showBalanceCondition: true,
                showGalvanometer: true,
                showLabels: true,
                showFormula: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'ldrSensorCircuit': {
            name: 'LDR Sensor Circuit',
            category: 'Electricity',
            subcategory: 'DC Circuits',
            description: 'Potential divider circuit with LDR showing output voltage variation with light intensity',
            type: 'ldr_sensor_circuit',
            supplyVoltage: 9,
            fixedResistance: 10000,
            defaultOptions: {
                title: 'LDR Potential Divider Circuit',
                showLDR: true,
                showOutputVoltage: true,
                showLightEffect: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'thermistorSensorCircuit': {
            name: 'Thermistor Sensor Circuit',
            category: 'Electricity',
            subcategory: 'DC Circuits',
            description: 'Potential divider circuit with NTC thermistor showing output voltage variation with temperature',
            type: 'thermistor_sensor_circuit',
            supplyVoltage: 9,
            fixedResistance: 10000,
            defaultOptions: {
                title: 'Thermistor Potential Divider Circuit',
                showThermistor: true,
                showOutputVoltage: true,
                showTemperatureEffect: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== ELECTRICITY — ELECTRICAL POWER & ENERGY (NEW) ========
        // ============================================================

        'powerEquationsTriangle': {
            name: 'Power Equations Triangle',
            category: 'Electricity',
            subcategory: 'Electrical Power & Energy',
            description: 'Triangle diagram showing P = IV, P = I²R, and P = V²/R relationships',
            type: 'power_equations_triangle',
            defaultOptions: {
                title: 'Electrical Power Equations',
                showAllFormulas: true,
                showTriangle: true,
                showDerivations: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'energyTransferDiagram': {
            name: 'Energy Transfer Diagram',
            category: 'Electricity',
            subcategory: 'Electrical Power & Energy',
            description: 'Sankey-style energy transfer diagram for an electrical device showing useful and wasted energy',
            type: 'energy_transfer_diagram',
            inputPower: 100,
            usefulPower: 75,
            wastedPower: 25,
            defaultOptions: {
                title: 'Electrical Energy Transfer',
                showUsefulOutput: true,
                showWastedHeat: true,
                showEfficiency: true,
                showLabels: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'sankeyDiagramElectrical': {
            name: 'Sankey Diagram — Electrical',
            category: 'Electricity',
            subcategory: 'Electrical Power & Energy',
            description: 'Sankey diagram for an electrical appliance showing input, useful output, and wasted energy flows',
            type: 'sankey_diagram_electrical',
            inputEnergy: 200,
            usefulEnergy: 150,
            wastedHeat: 35,
            wastedSound: 15,
            defaultOptions: {
                title: 'Sankey Diagram — Electrical Appliance',
                showArrowWidths: true,
                showEnergyValues: true,
                showEfficiency: true,
                showLabels: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'transmissionLineDiagram': {
            name: 'Transmission Line Diagram',
            category: 'Electricity',
            subcategory: 'Electrical Power & Energy',
            description: 'Power transmission system with step-up and step-down transformers showing voltage, current and power loss',
            type: 'transmission_line_diagram',
            generatorVoltage: 25000,
            transmissionVoltage: 400000,
            lineResistance: 10,
            defaultOptions: {
                title: 'Electrical Power Transmission',
                showStepUpTransformer: true,
                showStepDownTransformer: true,
                showPowerLoss: true,
                showVoltageCurrentValues: true,
                showLabels: true,
                width: 1000,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'fuseCircuitDiagram': {
            name: 'Fuse Circuit Diagram',
            category: 'Electricity',
            subcategory: 'Electrical Power & Energy',
            description: 'Circuit showing fuse placement and operation in a domestic appliance circuit',
            type: 'fuse_circuit_diagram',
            fuseRating: 13,
            appliancePower: 2300,
            supplyVoltage: 230,
            defaultOptions: {
                title: 'Fuse in a Circuit',
                showFusePlacement: true,
                showCurrentPath: true,
                showEarth: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'stepUpTransformer': {
            name: 'Step-Up Transformer Diagram',
            category: 'Electricity',
            subcategory: 'Electrical Power & Energy',
            description: 'Step-up transformer showing primary and secondary coils, core, and voltage/turns ratio',
            type: 'step_up_transformer',
            primaryTurns: 100,
            secondaryTurns: 1000,
            primaryVoltage: 230,
            defaultOptions: {
                title: 'Step-Up Transformer',
                showCoils: true,
                showCore: true,
                showTurnsRatio: true,
                showVoltages: true,
                showFormula: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'powerLossGraph': {
            name: 'Power Loss Graph',
            category: 'Electricity',
            subcategory: 'Electrical Power & Energy',
            description: 'Graph showing how transmission power loss varies with transmission voltage for a fixed power output',
            type: 'power_loss_graph',
            transmittedPower: 1e6,
            lineResistance: 10,
            defaultOptions: {
                title: 'Power Loss vs Transmission Voltage',
                showInverseSquareCurve: true,
                showGrid: true,
                showAnnotations: true,
                showFormula: true,
                xLabel: 'V (V)',
                yLabel: 'P_loss (W)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== ELECTRICITY — CAPACITANCE (NEW) ======================
        // ============================================================

        'capacitorStructure': {
            name: 'Capacitor Structure Diagram',
            category: 'Electricity',
            subcategory: 'Capacitance',
            description: 'Parallel plate capacitor structure showing plates, charge distribution, and electric field',
            type: 'capacitor_structure',
            plateArea: 0.01,
            plateSeparation: 0.001,
            charge: 1e-5,
            defaultOptions: {
                title: 'Capacitor — Structure and Electric Field',
                showPlates: true,
                showCharges: true,
                showElectricField: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'parallelPlateCapacitor': {
            name: 'Parallel Plate Capacitor',
            category: 'Electricity',
            subcategory: 'Capacitance',
            description: 'Parallel plate capacitor showing C = ε₀εᵣA/d with labelled dimensions',
            type: 'parallel_plate_capacitor',
            plateArea: 0.01,
            plateSeparation: 0.002,
            relativePermittivity: 1,
            defaultOptions: {
                title: 'Parallel Plate Capacitor: C = ε₀εᵣA/d',
                showDimensions: true,
                showFormula: true,
                showElectricField: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'capacitorSymbols': {
            name: 'Capacitor Circuit Symbols',
            category: 'Electricity',
            subcategory: 'Capacitance',
            description: 'Circuit symbols for unpolarised and polarised (electrolytic) capacitors',
            type: 'capacitor_symbols',
            defaultOptions: {
                title: 'Capacitor Circuit Symbols',
                showUnpolarised: true,
                showPolarised: true,
                showLabels: true,
                width: 700,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'rcChargingCircuit': {
            name: 'RC Charging Circuit',
            category: 'Electricity',
            subcategory: 'Capacitance',
            description: 'RC circuit diagram for capacitor charging showing switch, resistor, capacitor, and voltage source',
            type: 'rc_charging_circuit',
            emf: 12,
            resistance: 10000,
            capacitance: 470e-6,
            defaultOptions: {
                title: 'RC Charging Circuit',
                showSwitch: true,
                showComponents: true,
                showCurrentDirection: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rcDischargingCircuit': {
            name: 'RC Discharging Circuit',
            category: 'Electricity',
            subcategory: 'Capacitance',
            description: 'RC circuit diagram for capacitor discharging through a resistor',
            type: 'rc_discharging_circuit',
            resistance: 10000,
            capacitance: 470e-6,
            initialVoltage: 12,
            defaultOptions: {
                title: 'RC Discharging Circuit',
                showSwitch: true,
                showComponents: true,
                showCurrentDirection: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'chargingGraphs': {
            name: 'Capacitor Charging Graphs',
            category: 'Electricity',
            subcategory: 'Capacitance',
            description: 'Voltage and current vs time graphs during capacitor charging showing exponential approach',
            type: 'charging_graphs',
            emf: 12,
            resistance: 10000,
            capacitance: 470e-6,
            defaultOptions: {
                title: 'Capacitor Charging: V and I vs Time',
                showVoltageGraph: true,
                showCurrentGraph: true,
                showTimeConstant: true,
                showEquations: true,
                showGrid: true,
                xLabel: 't (s)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'dischargingGraphs': {
            name: 'Capacitor Discharging Graphs',
            category: 'Electricity',
            subcategory: 'Capacitance',
            description: 'Voltage, current, and charge vs time graphs during capacitor discharge showing exponential decay',
            type: 'discharging_graphs',
            initialVoltage: 12,
            resistance: 10000,
            capacitance: 470e-6,
            defaultOptions: {
                title: 'Capacitor Discharging: V, I and Q vs Time',
                showVoltageGraph: true,
                showCurrentGraph: true,
                showChargeGraph: true,
                showTimeConstant: true,
                showEquations: true,
                showGrid: true,
                xLabel: 't (s)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'lnVVsTGraph': {
            name: 'ln(V) vs t Graph',
            category: 'Electricity',
            subcategory: 'Capacitance',
            description: 'Linearised discharge graph of ln(V) vs t giving a straight line with gradient -1/RC',
            type: 'ln_v_vs_t_graph',
            initialVoltage: 12,
            resistance: 10000,
            capacitance: 470e-6,
            defaultOptions: {
                title: 'ln(V) vs t — Linearising Exponential Decay',
                showLinearGraph: true,
                showGradient: true,
                showTimeConstant: true,
                showGrid: true,
                xLabel: 't (s)',
                yLabel: 'ln(V)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'capacitorsInSeries': {
            name: 'Capacitors in Series',
            category: 'Electricity',
            subcategory: 'Capacitance',
            description: 'Circuit with capacitors in series showing charge equality and voltage sharing',
            type: 'capacitors_in_series',
            capacitors: [100e-6, 220e-6, 470e-6],
            defaultOptions: {
                title: 'Capacitors in Series',
                showChargeEquality: true,
                showVoltageSharing: true,
                showFormula: true,
                showEquivalentC: true,
                showLabels: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'capacitorsInParallel': {
            name: 'Capacitors in Parallel',
            category: 'Electricity',
            subcategory: 'Capacitance',
            description: 'Circuit with capacitors in parallel showing voltage equality and charge sharing',
            type: 'capacitors_in_parallel',
            capacitors: [100e-6, 220e-6, 470e-6],
            defaultOptions: {
                title: 'Capacitors in Parallel',
                showVoltageEquality: true,
                showChargeSharing: true,
                showFormula: true,
                showEquivalentC: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'energyStorageDiagram': {
            name: 'Capacitor Energy Storage Diagram',
            category: 'Electricity',
            subcategory: 'Capacitance',
            description: 'Q-V graph for a capacitor showing energy stored as area under the line (E = ½QV = ½CV²)',
            type: 'energy_storage_diagram',
            capacitance: 470e-6,
            voltage: 12,
            defaultOptions: {
                title: 'Energy Stored in a Capacitor: E = ½CV²',
                showQVGraph: true,
                showAreaShading: true,
                showFormulas: true,
                showGrid: true,
                xLabel: 'V (V)',
                yLabel: 'Q (C)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== OPTICS — REFLECTION (NEW) ============================
        // ============================================================

        'lawOfReflectionDiagram': {
            name: 'Law of Reflection Diagram',
            category: 'Optics',
            subcategory: 'Reflection',
            description: 'Ray diagram showing angle of incidence equals angle of reflection at a plane mirror',
            type: 'law_of_reflection',
            incidentAngle: 40,
            defaultOptions: {
                title: 'Law of Reflection: θᵢ = θᵣ',
                showNormal: true,
                showAngles: true,
                showMirror: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'planeMirrorImage': {
            name: 'Plane Mirror Image Formation',
            category: 'Optics',
            subcategory: 'Reflection',
            description: 'Plane mirror showing virtual image formation with equal object and image distances',
            type: 'plane_mirror_image',
            objectDistance: 5,
            objectHeight: 2,
            defaultOptions: {
                title: 'Image Formation in a Plane Mirror',
                showObject: true,
                showImage: true,
                showRays: true,
                showDistances: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'concaveMirrorRays': {
            name: 'Concave Mirror Ray Diagram',
            category: 'Optics',
            subcategory: 'Reflection',
            description: 'Concave mirror showing three principal rays and image formation for object beyond focal point',
            type: 'concave_mirror_rays',
            focalLength: 80,
            objectDistance: 160,
            objectHeight: 30,
            defaultOptions: {
                title: 'Concave Mirror — Ray Diagram',
                showPrincipalRays: true,
                showFocalPoint: true,
                showCentreOfCurvature: true,
                showImage: true,
                showMeasurements: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'convexMirrorRays': {
            name: 'Convex Mirror Ray Diagram',
            category: 'Optics',
            subcategory: 'Reflection',
            description: 'Convex mirror showing principal rays and virtual image formation',
            type: 'convex_mirror_rays',
            focalLength: 80,
            objectDistance: 150,
            objectHeight: 30,
            defaultOptions: {
                title: 'Convex Mirror — Ray Diagram',
                showPrincipalRays: true,
                showVirtualFocus: true,
                showImage: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'mirrorEquationDiagram': {
            name: 'Mirror Equation Diagram',
            category: 'Optics',
            subcategory: 'Reflection',
            description: 'Labelled mirror diagram illustrating the mirror equation 1/f = 1/u + 1/v',
            type: 'mirror_equation_diagram',
            focalLength: 80,
            objectDistance: 200,
            objectHeight: 40,
            defaultOptions: {
                title: 'Mirror Equation: 1/f = 1/u + 1/v',
                showDistanceLabels: true,
                showFormula: true,
                showImage: true,
                showMagnification: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rayDiagramConcaveObjectPositions': {
            name: 'Concave Mirror — Object at Different Positions',
            category: 'Optics',
            subcategory: 'Reflection',
            description: 'Multiple ray diagrams for concave mirror showing image changes as object moves from beyond 2f to within f',
            type: 'ray_diagram_concave_positions',
            focalLength: 80,
            objectPositions: ['beyond_2f', 'at_2f', 'between_f_2f', 'at_f', 'within_f'],
            defaultOptions: {
                title: 'Concave Mirror — Image at Different Object Positions',
                showAllPositions: true,
                showImageProperties: true,
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'focalPointIllustration': {
            name: 'Focal Point Illustration',
            category: 'Optics',
            subcategory: 'Reflection',
            description: 'Concave mirror showing parallel rays converging at the focal point',
            type: 'focal_point_illustration',
            focalLength: 80,
            numRays: 5,
            defaultOptions: {
                title: 'Focal Point of a Concave Mirror',
                showParallelRays: true,
                showFocalPoint: true,
                showFocalLength: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== OPTICS — REFRACTION (NEW) ============================
        // ============================================================

        'snellsLawDiagram': {
            name: "Snell's Law Diagram",
            category: 'Optics',
            subcategory: 'Refraction',
            description: "Detailed Snell's law diagram with labelled media, angles, normal, and formula",
            type: 'snells_law_diagram',
            incidentAngle: 40,
            n1: 1.0,
            n2: 1.5,
            defaultOptions: {
                title: "Snell's Law: n₁sinθ₁ = n₂sinθ₂",
                showNormal: true,
                showAngles: true,
                showRefractiveIndices: true,
                showFormula: true,
                showMediaLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'refractionAtBoundary': {
            name: 'Refraction at a Boundary',
            category: 'Optics',
            subcategory: 'Refraction',
            description: 'Ray bending at an optical boundary showing both denser and less dense medium cases',
            type: 'refraction_at_boundary',
            incidentAngle: 35,
            n1: 1.0,
            n2: 1.6,
            defaultOptions: {
                title: 'Refraction at an Optical Boundary',
                showBending: true,
                showNormal: true,
                showAngles: true,
                showSpeedChange: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'opticalFibreCrossSection': {
            name: 'Optical Fibre Cross Section',
            category: 'Optics',
            subcategory: 'Refraction',
            description: 'Cross-section of optical fibre with labelled core, cladding, and protective jacket',
            type: 'optical_fibre_cross_section',
            coreRadius: 25,
            claddingRadius: 62.5,
            jacketRadius: 125,
            coreN: 1.48,
            claddingN: 1.46,
            defaultOptions: {
                title: 'Optical Fibre Cross Section',
                showCore: true,
                showCladding: true,
                showJacket: true,
                showRefractiveIndices: true,
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'prismRefraction': {
            name: 'Prism Refraction Diagram',
            category: 'Optics',
            subcategory: 'Refraction',
            description: 'Ray of light refracting through a glass prism showing deviation',
            type: 'prism_refraction',
            prismAngle: 60,
            incidentAngle: 40,
            refractiveIndex: 1.5,
            defaultOptions: {
                title: 'Refraction Through a Prism',
                showAngles: true,
                showNormals: true,
                showDeviation: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'glassBlockRayPath': {
            name: 'Glass Block Ray Path',
            category: 'Optics',
            subcategory: 'Refraction',
            description: 'Ray of light entering and exiting a rectangular glass block showing lateral displacement',
            type: 'glass_block_ray_path',
            incidentAngle: 45,
            refractiveIndex: 1.5,
            blockWidth: 100,
            defaultOptions: {
                title: 'Ray Through a Rectangular Glass Block',
                showEntryRefraction: true,
                showExitRefraction: true,
                showLateralDisplacement: true,
                showAngles: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== OPTICS — LENSES (NEW) ================================
        // ============================================================

        'convergingLensRays': {
            name: 'Converging Lens Ray Diagram',
            category: 'Optics',
            subcategory: 'Lenses',
            description: 'Converging (convex) lens showing three principal rays and real image formation',
            type: 'converging_lens_rays',
            focalLength: 80,
            objectDistance: 200,
            objectHeight: 40,
            defaultOptions: {
                title: 'Converging Lens — Ray Diagram',
                showPrincipalRays: true,
                showFocalPoints: true,
                showImage: true,
                showMeasurements: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'divergingLensRays': {
            name: 'Diverging Lens Ray Diagram',
            category: 'Optics',
            subcategory: 'Lenses',
            description: 'Diverging (concave) lens showing three principal rays and virtual image formation',
            type: 'diverging_lens_rays',
            focalLength: 80,
            objectDistance: 150,
            objectHeight: 40,
            defaultOptions: {
                title: 'Diverging Lens — Ray Diagram',
                showPrincipalRays: true,
                showVirtualFocus: true,
                showImage: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'thinLensDiagram': {
            name: 'Thin Lens Equation Diagram',
            category: 'Optics',
            subcategory: 'Lenses',
            description: 'Labelled lens diagram illustrating the thin lens equation 1/f = 1/u + 1/v',
            type: 'thin_lens_diagram',
            focalLength: 80,
            objectDistance: 200,
            objectHeight: 40,
            defaultOptions: {
                title: 'Thin Lens Equation: 1/f = 1/u + 1/v',
                showDistanceLabels: true,
                showFormula: true,
                showImage: true,
                showMagnification: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'lensImageFormation': {
            name: 'Lens Image Formation — Multiple Positions',
            category: 'Optics',
            subcategory: 'Lenses',
            description: 'Series of ray diagrams showing image properties as object moves from beyond 2f to within f',
            type: 'lens_image_formation',
            focalLength: 80,
            objectPositions: ['beyond_2f', 'at_2f', 'between_f_2f', 'at_f', 'within_f'],
            defaultOptions: {
                title: 'Image Formation for Different Object Positions',
                showAllPositions: true,
                showImageProperties: true,
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'compoundMicroscopeDiagram': {
            name: 'Compound Microscope Diagram',
            category: 'Optics',
            subcategory: 'Lenses',
            description: 'Ray diagram of a compound microscope showing objective and eyepiece lenses and final image',
            type: 'compound_microscope_diagram',
            objectiveFocalLength: 10,
            eyepieceFocalLength: 25,
            tubeLength: 160,
            defaultOptions: {
                title: 'Compound Microscope',
                showObjectiveLens: true,
                showEyepieceLens: true,
                showIntermediate: true,
                showFinalImage: true,
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'telescopeDiagram': {
            name: 'Refracting Telescope Diagram',
            category: 'Optics',
            subcategory: 'Lenses',
            description: 'Ray diagram of a refracting telescope showing objective and eyepiece lenses',
            type: 'telescope_diagram',
            objectiveFocalLength: 200,
            eyepieceFocalLength: 25,
            defaultOptions: {
                title: 'Refracting Telescope',
                showObjectiveLens: true,
                showEyepieceLens: true,
                showFocalPoints: true,
                showAngularMagnification: true,
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'eyeDiagramDefects': {
            name: 'Eye Diagram — Vision Defects',
            category: 'Optics',
            subcategory: 'Lenses',
            description: 'Diagrams of normal eye, short-sightedness, long-sightedness, and corrective lenses',
            type: 'eye_diagram_defects',
            defaultOptions: {
                title: 'Vision Defects and Correction',
                showNormalVision: true,
                showMyopia: true,
                showHyperopia: true,
                showCorrection: true,
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'rayDiagramLensPositions': {
            name: 'Lens Ray Diagram — All Object Positions',
            category: 'Optics',
            subcategory: 'Lenses',
            description: 'Combined summary diagram showing how image type, size and position change with object distance for a converging lens',
            type: 'ray_diagram_lens_positions',
            focalLength: 80,
            defaultOptions: {
                title: 'Converging Lens — Image Summary for All Positions',
                showSummaryTable: true,
                showAllRayDiagrams: true,
                showLabels: true,
                width: 1000,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== OPTICS — WAVE OPTICS (NEW) ===========================
        // ============================================================

        'youngsDoubleSlitSetup': {
            name: "Young's Double Slit Setup",
            category: 'Optics',
            subcategory: 'Wave Optics',
            description: "Young's double slit experiment showing monochromatic source, double slit, and fringe pattern",
            type: 'youngs_double_slit_setup',
            slitSeparation: 0.5e-3,
            slitToScreen: 1.5,
            wavelength: 589e-9,
            defaultOptions: {
                title: "Young's Double Slit Experiment",
                showSlits: true,
                showFringes: true,
                showGeometry: true,
                showFringeSpacingFormula: true,
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'diffractionGratingSetup': {
            name: 'Diffraction Grating Setup',
            category: 'Optics',
            subcategory: 'Wave Optics',
            description: 'Diffraction grating producing sharp intensity maxima at multiple orders with labelled angles',
            type: 'diffraction_grating_setup',
            gratingSpacing: 1.67e-6,
            wavelength: 589e-9,
            defaultOptions: {
                title: 'Diffraction Grating: d sinθ = nλ',
                showOrders: true,
                showAngles: true,
                showFormula: true,
                showIntensityPattern: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'fringeSpacingGeometry': {
            name: 'Fringe Spacing Geometry',
            category: 'Optics',
            subcategory: 'Wave Optics',
            description: 'Geometric diagram deriving fringe spacing formula w = λD/s for double slit experiment',
            type: 'fringe_spacing_geometry',
            slitSeparation: 0.5e-3,
            screenDistance: 1.5,
            wavelength: 589e-9,
            defaultOptions: {
                title: 'Fringe Spacing: w = λD/s',
                showGeometry: true,
                showFormula: true,
                showLabels: true,
                showAnnotations: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'coherentSourcesDiagram': {
            name: 'Coherent Sources Diagram',
            category: 'Optics',
            subcategory: 'Wave Optics',
            description: 'Two coherent sources emitting waves with constant phase difference',
            type: 'coherent_sources_diagram',
            separation: 100,
            wavelength: 40,
            defaultOptions: {
                title: 'Coherent Sources',
                showWavefronts: true,
                showPhaseRelationship: true,
                showConstantPhaseDiff: true,
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'thinFilmInterference': {
            name: 'Thin Film Interference',
            category: 'Optics',
            subcategory: 'Wave Optics',
            description: 'Thin film showing partial reflection and transmission at each surface causing interference',
            type: 'thin_film_interference',
            filmThickness: 500e-9,
            filmN: 1.4,
            wavelength: 550e-9,
            defaultOptions: {
                title: 'Thin Film Interference',
                showIncidentRay: true,
                showReflectedRays: true,
                showPhaseChange: true,
                showPathDifference: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== OPTICS — DISPERSION & SPECTRA (NEW) ==================
        // ============================================================

        'prismDispersionDiagram': {
            name: 'Prism Dispersion Diagram',
            category: 'Optics',
            subcategory: 'Dispersion & Spectra',
            description: 'White light entering a prism and dispersed into the visible spectrum colours',
            type: 'prism_dispersion_diagram',
            prismAngle: 60,
            incidentAngle: 45,
            defaultOptions: {
                title: 'Dispersion of White Light by a Prism',
                showVisibleColours: true,
                showAngleOfDeviation: true,
                showWavelengthLabels: true,
                showWhiteLight: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'electromagneticSpectrumChart': {
            name: 'Electromagnetic Spectrum Chart',
            category: 'Optics',
            subcategory: 'Dispersion & Spectra',
            description: 'Full EM spectrum chart with wavelength, frequency, and photon energy scales',
            type: 'electromagnetic_spectrum_chart',
            defaultOptions: {
                title: 'Electromagnetic Spectrum',
                showWavelength: true,
                showFrequency: true,
                showPhotonEnergy: true,
                showRegionColours: true,
                showApplications: true,
                width: 1000,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'emissionSpectrumLines': {
            name: 'Emission Spectrum Lines',
            category: 'Optics',
            subcategory: 'Dispersion & Spectra',
            description: 'Emission line spectrum of hydrogen showing discrete bright lines on a dark background',
            type: 'emission_spectrum_lines',
            element: 'hydrogen',
            series: 'visible',
            defaultOptions: {
                title: 'Hydrogen Emission Spectrum (Visible)',
                showSpectralLines: true,
                showWavelengths: true,
                showDarkBackground: true,
                showLabels: true,
                width: 900,
                height: 300,
                backgroundColor: '#000000'
            }
        },

        'absorptionSpectrumLines': {
            name: 'Absorption Spectrum Lines',
            category: 'Optics',
            subcategory: 'Dispersion & Spectra',
            description: 'Absorption spectrum showing dark lines on a continuous background spectrum',
            type: 'absorption_spectrum_lines',
            element: 'hydrogen',
            defaultOptions: {
                title: 'Hydrogen Absorption Spectrum',
                showSpectralLines: true,
                showWavelengths: true,
                showContinuousBackground: true,
                showLabels: true,
                width: 900,
                height: 300,
                backgroundColor: '#ffffff'
            }
        },

        'hydrogenEnergyLevels': {
            name: 'Hydrogen Energy Levels',
            category: 'Optics',
            subcategory: 'Dispersion & Spectra',
            description: 'Energy level diagram for hydrogen atom showing electron transitions producing spectral lines',
            type: 'hydrogen_energy_levels',
            numLevels: 6,
            defaultOptions: {
                title: 'Hydrogen Atom Energy Levels',
                showEnergyValues: true,
                showTransitions: true,
                showSeries: true,
                showPhotonEnergy: true,
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'rainbowFormationDiagram': {
            name: 'Rainbow Formation Diagram',
            category: 'Optics',
            subcategory: 'Dispersion & Spectra',
            description: 'Ray diagram showing sunlight entering a water droplet, undergoing total internal reflection and dispersion to form a rainbow',
            type: 'rainbow_formation_diagram',
            defaultOptions: {
                title: 'Rainbow Formation in a Water Droplet',
                showEntryRefraction: true,
                showInternalReflection: true,
                showExitDispersion: true,
                showColourSeparation: true,
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'continuousVsLineSpectrum': {
            name: 'Continuous vs Line Spectrum',
            category: 'Optics',
            subcategory: 'Dispersion & Spectra',
            description: 'Side-by-side comparison of a continuous spectrum and a discrete line emission spectrum',
            type: 'continuous_vs_line_spectrum',
            defaultOptions: {
                title: 'Continuous Spectrum vs Line Spectrum',
                showContinuous: true,
                showLineSpectrum: true,
                showAnnotations: true,
                showLabels: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'fraunhoferLines': {
            name: 'Fraunhofer Lines',
            category: 'Optics',
            subcategory: 'Dispersion & Spectra',
            description: 'Solar absorption spectrum showing dark Fraunhofer lines corresponding to elements in the solar atmosphere',
            type: 'fraunhofer_lines',
            defaultOptions: {
                title: 'Fraunhofer Absorption Lines in Solar Spectrum',
                showSpectrum: true,
                showAbsorptionLines: true,
                showElementLabels: true,
                showWavelengths: true,
                width: 1000,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== THERMAL PHYSICS — TEMPERATURE & HEAT (NEW) ===========
        // ============================================================

        'temperatureTimeGraph': {
            name: 'Temperature-Time Graph',
            category: 'Thermal Physics',
            subcategory: 'Temperature & Heat',
            description: 'Temperature vs time graph showing heating of a substance with phase change plateaus',
            type: 'temperature_time_graph',
            substance: 'water',
            mass: 1.0,
            heatRate: 500,
            defaultOptions: {
                title: 'Heating Curve — Temperature vs Time',
                showPhaseChanges: true,
                showPlateaus: true,
                showAnnotations: true,
                showGrid: true,
                xLabel: 't (min)',
                yLabel: 'T (°C)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'phaseChangeDiagram': {
            name: 'Phase Change Diagram',
            category: 'Thermal Physics',
            subcategory: 'Temperature & Heat',
            description: 'Diagram showing phase transitions between solid, liquid, and gas with energy changes',
            type: 'phase_change_diagram',
            defaultOptions: {
                title: 'Phase Changes and Energy',
                showSolidLiquidGas: true,
                showFusionVaporisation: true,
                showEnergyArrows: true,
                showLatentHeat: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'heatingCurveIceToSteam': {
            name: 'Heating Curve: Ice to Steam',
            category: 'Thermal Physics',
            subcategory: 'Temperature & Heat',
            description: 'Complete heating curve for water from ice at -20°C to steam above 100°C',
            type: 'heating_curve_ice_to_steam',
            mass: 1.0,
            defaultOptions: {
                title: 'Heating Curve: Ice → Water → Steam',
                showAllPhases: true,
                showPhasePlateaus: true,
                showLatentHeat: true,
                showSpecificHeat: true,
                showAnnotations: true,
                xLabel: 'Heat added (kJ)',
                yLabel: 'T (°C)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'calorimetrySetup': {
            name: 'Calorimetry Setup Diagram',
            category: 'Thermal Physics',
            subcategory: 'Temperature & Heat',
            description: 'Calorimetry experiment setup showing insulated container, thermometer, heater, and sample',
            type: 'calorimetry_setup',
            defaultOptions: {
                title: 'Calorimetry Experiment Setup',
                showContainer: true,
                showHeater: true,
                showThermometer: true,
                showInsulation: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'thermalEquilibrium': {
            name: 'Thermal Equilibrium Diagram',
            category: 'Thermal Physics',
            subcategory: 'Temperature & Heat',
            description: 'Two objects at different temperatures reaching thermal equilibrium over time',
            type: 'thermal_equilibrium',
            temp1Initial: 80,
            temp2Initial: 20,
            equilibriumTemp: 45,
            defaultOptions: {
                title: 'Thermal Equilibrium',
                showTemperatureVsTime: true,
                showHeatTransfer: true,
                showEquilibriumPoint: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'specificHeatComparison': {
            name: 'Specific Heat Capacity Comparison',
            category: 'Thermal Physics',
            subcategory: 'Temperature & Heat',
            description: 'Bar chart comparing specific heat capacities of common substances',
            type: 'specific_heat_comparison',
            substances: [
                { name: 'Water',     c: 4200 },
                { name: 'Aluminium', c: 900  },
                { name: 'Copper',    c: 385  },
                { name: 'Iron',      c: 450  },
                { name: 'Glass',     c: 840  }
            ],
            defaultOptions: {
                title: 'Specific Heat Capacities of Common Substances',
                showValues: true,
                showUnits: true,
                showAnnotations: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== THERMAL PHYSICS — GAS LAWS (NEW) =====================
        // ============================================================

        'pvDiagramBoyle': {
            name: "Boyle's Law P-V Diagram",
            category: 'Thermal Physics',
            subcategory: 'Gas Laws',
            description: "P-V diagram showing Boyle's Law: pressure inversely proportional to volume at constant temperature",
            type: 'pv_diagram_boyle',
            temperature: 300,
            moles: 0.01,
            defaultOptions: {
                title: "Boyle's Law: pV = constant (T constant)",
                showHyperbola: true,
                showGrid: true,
                showAnnotations: true,
                showFormula: true,
                xLabel: 'V (m³)',
                yLabel: 'p (Pa)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'vtDiagramCharles': {
            name: "Charles's Law V-T Diagram",
            category: 'Thermal Physics',
            subcategory: 'Gas Laws',
            description: "V-T diagram showing Charles's Law: volume proportional to absolute temperature at constant pressure",
            type: 'vt_diagram_charles',
            pressure: 101325,
            moles: 0.01,
            defaultOptions: {
                title: "Charles's Law: V/T = constant (p constant)",
                showLinearGraph: true,
                showAbsoluteZero: true,
                showGrid: true,
                showFormula: true,
                xLabel: 'T (K)',
                yLabel: 'V (m³)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'ptDiagramGayLussac': {
            name: "Gay-Lussac's Law P-T Diagram",
            category: 'Thermal Physics',
            subcategory: 'Gas Laws',
            description: "P-T diagram showing Gay-Lussac's Law: pressure proportional to absolute temperature at constant volume",
            type: 'pt_diagram_gay_lussac',
            volume: 0.001,
            moles: 0.01,
            defaultOptions: {
                title: "Gay-Lussac's Law: p/T = constant (V constant)",
                showLinearGraph: true,
                showAbsoluteZero: true,
                showGrid: true,
                showFormula: true,
                xLabel: 'T (K)',
                yLabel: 'p (Pa)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'isothermalProcess': {
            name: 'Isothermal Process Diagram',
            category: 'Thermal Physics',
            subcategory: 'Gas Laws',
            description: 'P-V diagram showing isothermal processes at different temperatures as a family of hyperbolas',
            type: 'isothermal_process',
            temperatures: [200, 300, 400],
            moles: 0.01,
            defaultOptions: {
                title: 'Isothermal Processes — Family of Curves',
                showMultipleCurves: true,
                showTemperatureLabels: true,
                showGrid: true,
                xLabel: 'V (m³)',
                yLabel: 'p (Pa)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'combinedGasLaw': {
            name: 'Combined Gas Law Diagram',
            category: 'Thermal Physics',
            subcategory: 'Gas Laws',
            description: 'Diagram illustrating the combined gas law pV/T = constant connecting initial and final states',
            type: 'combined_gas_law',
            state1: { p: 100000, V: 0.002, T: 300 },
            state2: { p: 200000, V: 0.001, T: 300 },
            defaultOptions: {
                title: 'Combined Gas Law: p₁V₁/T₁ = p₂V₂/T₂',
                showInitialState: true,
                showFinalState: true,
                showFormula: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'idealGasCubeModel': {
            name: 'Ideal Gas Cube Model',
            category: 'Thermal Physics',
            subcategory: 'Gas Laws',
            description: 'Cubic container model of ideal gas showing molecules, pressure from collisions, and kinetic theory',
            type: 'ideal_gas_cube_model',
            numMolecules: 20,
            temperature: 300,
            defaultOptions: {
                title: 'Ideal Gas — Molecular Model',
                showMolecules: true,
                showCollisions: true,
                showPressureArrows: true,
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'pressureVolumeHyperbola': {
            name: 'Pressure-Volume Hyperbola',
            category: 'Thermal Physics',
            subcategory: 'Gas Laws',
            description: 'p vs V hyperbola and p vs 1/V straight line demonstrating inverse proportionality',
            type: 'pressure_volume_hyperbola',
            temperature: 300,
            moles: 0.01,
            defaultOptions: {
                title: 'p-V and p-1/V Graphs',
                showHyperbola: true,
                showLinearGraph: true,
                showGrid: true,
                showAnnotations: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== THERMAL PHYSICS — KINETIC THEORY (NEW) ===============
        // ============================================================

        'maxwellBoltzmannDistribution': {
            name: 'Maxwell-Boltzmann Distribution',
            category: 'Thermal Physics',
            subcategory: 'Kinetic Theory',
            description: 'Maxwell-Boltzmann speed distribution curves showing molecular speed distribution at different temperatures',
            type: 'maxwell_boltzmann_distribution',
            temperatures: [300, 600, 1200],
            molarMass: 0.002,
            defaultOptions: {
                title: 'Maxwell-Boltzmann Speed Distribution',
                showMultipleTemperatures: true,
                showMostProbableSpeed: true,
                showRMSSpeed: true,
                showGrid: true,
                showLabels: true,
                xLabel: 'Speed (m/s)',
                yLabel: 'Number of molecules',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'molecularSpeedDistribution': {
            name: 'Molecular Speed Distribution',
            category: 'Thermal Physics',
            subcategory: 'Kinetic Theory',
            description: 'Speed distribution of gas molecules showing mean, most probable, and RMS speeds',
            type: 'molecular_speed_distribution',
            temperature: 300,
            molarMass: 0.028,
            defaultOptions: {
                title: 'Molecular Speed Distribution',
                showDistributionCurve: true,
                showMeanSpeed: true,
                showRMSSpeed: true,
                showMostProbable: true,
                showGrid: true,
                xLabel: 'v (m/s)',
                yLabel: 'f(v)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'gasMoleculeCollisions': {
            name: 'Gas Molecule Collisions',
            category: 'Thermal Physics',
            subcategory: 'Kinetic Theory',
            description: 'Diagram showing random gas molecule motion, elastic collisions with walls, and pressure generation',
            type: 'gas_molecule_collisions',
            numMolecules: 15,
            containerSize: 300,
            defaultOptions: {
                title: 'Kinetic Theory — Gas Molecule Collisions',
                showRandomMotion: true,
                showWallCollisions: true,
                showVelocityVectors: true,
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'pressureDerivationDiagram': {
            name: 'Pressure Derivation Diagram',
            category: 'Thermal Physics',
            subcategory: 'Kinetic Theory',
            description: 'Diagram illustrating the derivation of pV = ⅓Nm<c²> showing momentum change at a wall',
            type: 'pressure_derivation_diagram',
            defaultOptions: {
                title: 'Kinetic Theory Pressure Derivation',
                showMolecule: true,
                showMomentumChange: true,
                showForceOnWall: true,
                showFormula: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'temperatureEnergyRelationship': {
            name: 'Temperature-Energy Relationship',
            category: 'Thermal Physics',
            subcategory: 'Kinetic Theory',
            description: 'Graph showing mean kinetic energy of gas molecules proportional to absolute temperature',
            type: 'temperature_energy_relationship',
            defaultOptions: {
                title: 'Mean KE vs Absolute Temperature: ½m<c²> = 3/2 kT',
                showLinearGraph: true,
                showFormula: true,
                showAbsoluteZero: true,
                showGrid: true,
                xLabel: 'T (K)',
                yLabel: '½m<c²> (J)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rmsSpeedComparison': {
            name: 'RMS Speed Comparison',
            category: 'Thermal Physics',
            subcategory: 'Kinetic Theory',
            description: 'Bar chart comparing RMS speeds of different gas molecules at the same temperature',
            type: 'rms_speed_comparison',
            gases: [
                { name: 'H₂',  molarMass: 0.002, temperature: 300 },
                { name: 'He',  molarMass: 0.004, temperature: 300 },
                { name: 'N₂',  molarMass: 0.028, temperature: 300 },
                { name: 'O₂',  molarMass: 0.032, temperature: 300 },
                { name: 'CO₂', molarMass: 0.044, temperature: 300 }
            ],
            defaultOptions: {
                title: 'RMS Speed Comparison at 300 K',
                showValues: true,
                showFormula: true,
                showAnnotations: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== THERMAL PHYSICS — LAWS OF THERMODYNAMICS (NEW) =======
        // ============================================================

        'pvDiagramCycles': {
            name: 'P-V Diagram — Thermodynamic Cycles',
            category: 'Thermal Physics',
            subcategory: 'Laws of Thermodynamics',
            description: 'P-V diagram showing a complete thermodynamic cycle with labelled processes',
            type: 'pv_diagram_cycles',
            cycleType: 'rectangular',
            defaultOptions: {
                title: 'P-V Diagram — Thermodynamic Cycle',
                showCycleArea: true,
                showProcessLabels: true,
                showWorkDone: true,
                showGrid: true,
                xLabel: 'V (m³)',
                yLabel: 'p (Pa)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'carnotCycleDiagram': {
            name: 'Carnot Cycle Diagram',
            category: 'Thermal Physics',
            subcategory: 'Laws of Thermodynamics',
            description: 'P-V diagram of the Carnot cycle showing two isothermals and two adiabatics',
            type: 'carnot_cycle_diagram',
            hotTemperature: 600,
            coldTemperature: 300,
            defaultOptions: {
                title: 'Carnot Cycle on P-V Diagram',
                showIsothermals: true,
                showAdiabatics: true,
                showEfficiency: true,
                showGrid: true,
                showLabels: true,
                xLabel: 'V (m³)',
                yLabel: 'p (Pa)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'heatEngineSchematic': {
            name: 'Heat Engine Schematic',
            category: 'Thermal Physics',
            subcategory: 'Laws of Thermodynamics',
            description: 'Schematic of a heat engine showing heat input from hot reservoir, work output, and heat rejected to cold reservoir',
            type: 'heat_engine_schematic',
            hotTemp: 600,
            coldTemp: 300,
            heatIn: 1000,
            workOut: 500,
            defaultOptions: {
                title: 'Heat Engine Schematic',
                showHotReservoir: true,
                showColdReservoir: true,
                showWorkOutput: true,
                showEfficiency: true,
                showEnergyFlow: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'refrigeratorSchematic': {
            name: 'Refrigerator Schematic',
            category: 'Thermal Physics',
            subcategory: 'Laws of Thermodynamics',
            description: 'Schematic of a refrigerator showing work input, heat extracted from cold reservoir, and heat rejected to hot reservoir',
            type: 'refrigerator_schematic',
            hotTemp: 300,
            coldTemp: 250,
            heatExtracted: 600,
            workIn: 200,
            defaultOptions: {
                title: 'Refrigerator Schematic',
                showHotReservoir: true,
                showColdReservoir: true,
                showWorkInput: true,
                showCOP: true,
                showEnergyFlow: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'isothermalVsAdiabatic': {
            name: 'Isothermal vs Adiabatic Process',
            category: 'Thermal Physics',
            subcategory: 'Laws of Thermodynamics',
            description: 'P-V diagram comparing isothermal and adiabatic expansion curves from the same starting point',
            type: 'isothermal_vs_adiabatic',
            temperature: 400,
            moles: 0.1,
            gamma: 1.4,
            defaultOptions: {
                title: 'Isothermal vs Adiabatic Expansion',
                showIsothermal: true,
                showAdiabatic: true,
                showAnnotations: true,
                showGrid: true,
                xLabel: 'V (m³)',
                yLabel: 'p (Pa)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'entropyIncreaseDiagram': {
            name: 'Entropy Increase Diagram',
            category: 'Thermal Physics',
            subcategory: 'Laws of Thermodynamics',
            description: 'Diagram illustrating the second law of thermodynamics through entropy increase in isolated systems',
            type: 'entropy_increase_diagram',
            defaultOptions: {
                title: 'Second Law — Entropy Increase',
                showOrderedDisordered: true,
                showEntropyArrow: true,
                showExamples: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'thermodynamicProcessesComparison': {
            name: 'Thermodynamic Processes Comparison',
            category: 'Thermal Physics',
            subcategory: 'Laws of Thermodynamics',
            description: 'P-V diagram showing isothermal, isobaric, isochoric, and adiabatic processes from the same starting state',
            type: 'thermodynamic_processes_comparison',
            initialP: 200000,
            initialV: 0.001,
            initialT: 300,
            defaultOptions: {
                title: 'Comparison of Thermodynamic Processes',
                showIsothermal: true,
                showIsobaric: true,
                showIsochoric: true,
                showAdiabatic: true,
                showLegend: true,
                showGrid: true,
                xLabel: 'V (m³)',
                yLabel: 'p (Pa)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== THERMAL PHYSICS — HEAT TRANSFER (NEW) ================
        // ============================================================

        'conductionDiagram': {
            name: 'Conduction Diagram',
            category: 'Thermal Physics',
            subcategory: 'Heat Transfer',
            description: 'Heat conduction through a solid bar showing temperature gradient and energy transfer',
            type: 'conduction_diagram',
            hotTemp: 100,
            coldTemp: 20,
            barLength: 0.5,
            thermalConductivity: 200,
            crossSectionArea: 0.001,
            defaultOptions: {
                title: 'Thermal Conduction Through a Solid',
                showTemperatureGradient: true,
                showHeatFlow: true,
                showFormula: true,
                showLabels: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'convectionCurrents': {
            name: 'Convection Currents Diagram',
            category: 'Thermal Physics',
            subcategory: 'Heat Transfer',
            description: 'Diagram showing convection current circulation in a fluid heated from below',
            type: 'convection_currents',
            defaultOptions: {
                title: 'Convection Currents in a Fluid',
                showCirculation: true,
                showHeatSource: true,
                showTemperatureGradient: true,
                showArrows: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'radiationEmission': {
            name: 'Radiation Emission Diagram',
            category: 'Thermal Physics',
            subcategory: 'Heat Transfer',
            description: 'Object emitting thermal radiation as electromagnetic waves showing Stefan-Boltzmann law',
            type: 'radiation_emission',
            temperature: 500,
            emissivity: 0.9,
            defaultOptions: {
                title: 'Thermal Radiation Emission',
                showRadiationWaves: true,
                showTemperature: true,
                showFormula: true,
                showBlackbodyCurve: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'thermalResistanceLayers': {
            name: 'Thermal Resistance Layers',
            category: 'Thermal Physics',
            subcategory: 'Heat Transfer',
            description: 'Multi-layer wall showing thermal resistance in series and total heat flow',
            type: 'thermal_resistance_layers',
            layers: [
                { material: 'Brick',       thickness: 0.1,   conductivity: 0.7  },
                { material: 'Insulation',  thickness: 0.05,  conductivity: 0.04 },
                { material: 'Plasterboard',thickness: 0.015, conductivity: 0.25 }
            ],
            defaultOptions: {
                title: 'Thermal Resistance of a Composite Wall',
                showLayers: true,
                showTemperatureProfile: true,
                showResistances: true,
                showFormula: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'lesliesCube': {
            name: "Leslie's Cube Diagram",
            category: 'Thermal Physics',
            subcategory: 'Heat Transfer',
            description: "Leslie's cube showing different surface emissivities and radiation detection",
            type: 'leslies_cube',
            defaultOptions: {
                title: "Leslie's Cube — Surface Emissivity",
                showCubeSurfaces: true,
                showDetector: true,
                showEmissivityComparison: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'thermosFlaskCrossSection': {
            name: 'Thermos Flask Cross Section',
            category: 'Thermal Physics',
            subcategory: 'Heat Transfer',
            description: 'Cross section of a vacuum flask showing features that reduce conduction, convection, and radiation',
            type: 'thermos_flask_cross_section',
            defaultOptions: {
                title: 'Vacuum Flask — Minimising Heat Transfer',
                showVacuumLayer: true,
                showSilveredWalls: true,
                showStopper: true,
                showAnnotations: true,
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'newtonCoolingCurve': {
            name: "Newton's Law of Cooling Curve",
            category: 'Thermal Physics',
            subcategory: 'Heat Transfer',
            description: "Temperature vs time curve showing Newton's Law of Cooling with exponential decay",
            type: 'newton_cooling_curve',
            initialTemp: 80,
            ambientTemp: 20,
            coolingConstant: 0.05,
            defaultOptions: {
                title: "Newton's Law of Cooling",
                showExponentialDecay: true,
                showAmbientTemperature: true,
                showGrid: true,
                showFormula: true,
                showAnnotations: true,
                xLabel: 't (min)',
                yLabel: 'T (°C)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'stefanBoltzmannGraph': {
            name: 'Stefan-Boltzmann Graph',
            category: 'Thermal Physics',
            subcategory: 'Heat Transfer',
            description: 'Power radiated vs temperature graph showing P ∝ T⁴ relationship for a black body',
            type: 'stefan_boltzmann_graph',
            emissivity: 1.0,
            surfaceArea: 1.0,
            defaultOptions: {
                title: 'Stefan-Boltzmann Law: P = σAT⁴',
                showT4Curve: true,
                showGrid: true,
                showFormula: true,
                showAnnotations: true,
                xLabel: 'T (K)',
                yLabel: 'P (W)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== NUCLEAR PHYSICS — NUCLEAR STRUCTURE (NEW) ============
        // ============================================================

        'nuclearNotationDiagram': {
            name: 'Nuclear Notation Diagram',
            category: 'Nuclear Physics',
            subcategory: 'Nuclear Structure',
            description: 'Standard nuclear notation diagram showing mass number, proton number, and element symbol',
            type: 'nuclear_notation_diagram',
            element: 'Carbon',
            symbol: 'C',
            massNumber: 12,
            protonNumber: 6,
            defaultOptions: {
                title: 'Nuclear Notation: ᴬ_Z X',
                showMassNumber: true,
                showProtonNumber: true,
                showNeutronNumber: true,
                showLabels: true,
                width: 700,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'isotopeComparison': {
            name: 'Isotope Comparison Diagram',
            category: 'Nuclear Physics',
            subcategory: 'Nuclear Structure',
            description: 'Side-by-side comparison of isotopes showing same proton number but different neutron numbers',
            type: 'isotope_comparison',
            element: 'Carbon',
            isotopes: [
                { massNumber: 12, neutrons: 6 },
                { massNumber: 13, neutrons: 7 },
                { massNumber: 14, neutrons: 8 }
            ],
            defaultOptions: {
                title: 'Carbon Isotopes Comparison',
                showNuclei: true,
                showProtons: true,
                showNeutrons: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'bandOfStability': {
            name: 'Band of Stability',
            category: 'Nuclear Physics',
            subcategory: 'Nuclear Structure',
            description: 'N vs Z plot showing the band of stable nuclei and regions of radioactive decay modes',
            type: 'band_of_stability',
            defaultOptions: {
                title: 'Band of Stability — N vs Z',
                showStableBand: true,
                showAlphaRegion: true,
                showBetaMinusRegion: true,
                showBetaPlusRegion: true,
                showN_equals_Z: true,
                showGrid: true,
                xLabel: 'Z (proton number)',
                yLabel: 'N (neutron number)',
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'nuclearForcesGraph': {
            name: 'Nuclear Forces Graph',
            category: 'Nuclear Physics',
            subcategory: 'Nuclear Structure',
            description: 'Potential energy vs separation graph showing nuclear strong force and electrostatic repulsion',
            type: 'nuclear_forces_graph',
            defaultOptions: {
                title: 'Nuclear Force vs Nucleon Separation',
                showStrongForce: true,
                showElectrostaticRepulsion: true,
                showResultant: true,
                showEquilibriumSeparation: true,
                showGrid: true,
                xLabel: 'r (fm)',
                yLabel: 'PE (MeV)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'nuclearRadiusVsMass': {
            name: 'Nuclear Radius vs Mass Number',
            category: 'Nuclear Physics',
            subcategory: 'Nuclear Structure',
            description: 'Graph of nuclear radius vs mass number showing R = R₀A^(1/3) relationship',
            type: 'nuclear_radius_vs_mass',
            R0: 1.2e-15,
            defaultOptions: {
                title: 'Nuclear Radius: R = R₀A^(1/3)',
                showCubeRootRelation: true,
                showGrid: true,
                showFormula: true,
                showAnnotations: true,
                xLabel: 'A (mass number)',
                yLabel: 'R (fm)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'nuclearDensityDiagram': {
            name: 'Nuclear Density Diagram',
            category: 'Nuclear Physics',
            subcategory: 'Nuclear Structure',
            description: 'Diagram illustrating approximately constant nuclear density across all nuclides',
            type: 'nuclear_density_diagram',
            defaultOptions: {
                title: 'Nuclear Density — Approximately Constant',
                showDensityVsA: true,
                showConstantLine: true,
                showNucleonPacking: true,
                showFormula: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rutherfordScatteringSetup': {
            name: 'Rutherford Scattering Setup',
            category: 'Nuclear Physics',
            subcategory: 'Nuclear Structure',
            description: 'Rutherford alpha particle scattering experiment showing source, gold foil, and detector positions',
            type: 'rutherford_scattering_setup',
            defaultOptions: {
                title: 'Rutherford Scattering Experiment',
                showSource: true,
                showGoldFoil: true,
                showDetector: true,
                showScatteringAngles: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'alphaParticleTracks': {
            name: 'Alpha Particle Scattering Tracks',
            category: 'Nuclear Physics',
            subcategory: 'Nuclear Structure',
            description: 'Alpha particle trajectories near a gold nucleus showing deflection at different impact parameters',
            type: 'alpha_particle_tracks',
            numTracks: 6,
            defaultOptions: {
                title: 'Alpha Particle Scattering Tracks',
                showNucleus: true,
                showTracks: true,
                showDeflectionAngles: true,
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== NUCLEAR PHYSICS — RADIOACTIVITY (NEW) ================
        // ============================================================

        'alphaDecayDiagram': {
            name: 'Alpha Decay Diagram',
            category: 'Nuclear Physics',
            subcategory: 'Radioactivity',
            description: 'Alpha decay diagram showing parent nucleus emitting alpha particle to form daughter nucleus',
            type: 'alpha_decay_diagram',
            parentSymbol: 'Ra',
            parentZ: 88,
            parentA: 226,
            defaultOptions: {
                title: 'Alpha Decay: ᴬ_Z X → ᴬ⁻⁴_Z₋₂ Y + ⁴_₂He',
                showParentNucleus: true,
                showDaughterNucleus: true,
                showAlphaParticle: true,
                showEquation: true,
                showEnergyRelease: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'betaMinusDecay': {
            name: 'Beta-Minus Decay Diagram',
            category: 'Nuclear Physics',
            subcategory: 'Radioactivity',
            description: 'Beta-minus decay showing neutron converting to proton with emission of electron and antineutrino',
            type: 'beta_minus_decay',
            parentSymbol: 'C',
            parentZ: 6,
            parentA: 14,
            defaultOptions: {
                title: 'β⁻ Decay: n → p + e⁻ + ν̄ₑ',
                showParentNucleus: true,
                showDaughterNucleus: true,
                showElectron: true,
                showAntineutrino: true,
                showQuarkLevel: true,
                showEquation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'betaPlusDecay': {
            name: 'Beta-Plus Decay Diagram',
            category: 'Nuclear Physics',
            subcategory: 'Radioactivity',
            description: 'Beta-plus decay showing proton converting to neutron with emission of positron and neutrino',
            type: 'beta_plus_decay',
            parentSymbol: 'Na',
            parentZ: 11,
            parentA: 22,
            defaultOptions: {
                title: 'β⁺ Decay: p → n + e⁺ + νₑ',
                showParentNucleus: true,
                showDaughterNucleus: true,
                showPositron: true,
                showNeutrino: true,
                showEquation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'gammaEmission': {
            name: 'Gamma Emission Diagram',
            category: 'Nuclear Physics',
            subcategory: 'Radioactivity',
            description: 'Gamma emission from excited nucleus showing energy level transition and photon release',
            type: 'gamma_emission',
            defaultOptions: {
                title: 'Gamma Emission — Nuclear De-excitation',
                showExcitedState: true,
                showGroundState: true,
                showGammaPhoton: true,
                showEnergyLevelDrop: true,
                showEquation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'decayCurveExponential': {
            name: 'Radioactive Decay Curve',
            category: 'Nuclear Physics',
            subcategory: 'Radioactivity',
            description: 'Exponential decay curve of number of undecayed nuclei vs time',
            type: 'decay_curve_exponential',
            halfLife: 5.27,
            initialN: 1000,
            defaultOptions: {
                title: 'Radioactive Decay: N = N₀e^(−λt)',
                showExponentialCurve: true,
                showHalfLives: true,
                showGrid: true,
                showFormula: true,
                xLabel: 't (years)',
                yLabel: 'N (undecayed nuclei)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'halfLifeGraph': {
            name: 'Half-Life Graph',
            category: 'Nuclear Physics',
            subcategory: 'Radioactivity',
            description: 'Decay curve with half-life intervals clearly marked showing successive halving',
            type: 'half_life_graph',
            halfLife: 3.8,
            initialN: 800,
            defaultOptions: {
                title: 'Half-Life — Successive Halving',
                showHalfLifeMarkers: true,
                showHalfingLines: true,
                showGrid: true,
                showAnnotations: true,
                xLabel: 't (days)',
                yLabel: 'N',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'activityVsTime': {
            name: 'Activity vs Time Graph',
            category: 'Nuclear Physics',
            subcategory: 'Radioactivity',
            description: 'Radioactive activity vs time showing exponential decrease A = A₀e^(−λt)',
            type: 'activity_vs_time',
            halfLife: 5.0,
            initialActivity: 1000,
            defaultOptions: {
                title: 'Activity vs Time: A = A₀e^(−λt)',
                showExponentialCurve: true,
                showHalfLives: true,
                showGrid: true,
                showFormula: true,
                xLabel: 't (years)',
                yLabel: 'A (Bq)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'penetrationComparison': {
            name: 'Radiation Penetration Comparison',
            category: 'Nuclear Physics',
            subcategory: 'Radioactivity',
            description: 'Diagram comparing penetrating power of alpha, beta, and gamma radiation through different materials',
            type: 'penetration_comparison',
            defaultOptions: {
                title: 'Penetrating Power of α, β, and γ Radiation',
                showAlpha: true,
                showBeta: true,
                showGamma: true,
                showMaterials: true,
                showLabels: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'ionisationTracks': {
            name: 'Ionisation Tracks',
            category: 'Nuclear Physics',
            subcategory: 'Radioactivity',
            description: 'Cloud chamber tracks showing characteristic paths of alpha, beta, and gamma radiation',
            type: 'ionisation_tracks',
            defaultOptions: {
                title: 'Cloud Chamber Tracks',
                showAlphaTrack: true,
                showBetaTrack: true,
                showGammaTrack: true,
                showAnnotations: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#1a1a2e'
            }
        },

        'backgroundRadiationSources': {
            name: 'Background Radiation Sources',
            category: 'Nuclear Physics',
            subcategory: 'Radioactivity',
            description: 'Pie chart showing sources of background radiation in the UK',
            type: 'background_radiation_sources',
            sources: [
                { label: 'Radon gas',         percentage: 50 },
                { label: 'Medical',           percentage: 15 },
                { label: 'Ground & buildings',percentage: 14 },
                { label: 'Food & drink',      percentage: 12 },
                { label: 'Cosmic rays',       percentage: 10 },
                { label: 'Nuclear industry',  percentage:  1 },
                { label: 'Other',             percentage:  1 }
            ],
            defaultOptions: {
                title: 'Sources of Background Radiation',
                showPieChart: true,
                showPercentages: true,
                showLegend: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== NUCLEAR PHYSICS — NUCLEAR REACTIONS (NEW) ============
        // ============================================================

        'massDefectDiagram': {
            name: 'Mass Defect Diagram',
            category: 'Nuclear Physics',
            subcategory: 'Nuclear Reactions',
            description: 'Diagram showing mass defect as difference between sum of nucleon masses and actual nuclear mass',
            type: 'mass_defect_diagram',
            element: 'Helium-4',
            protons: 2,
            neutrons: 2,
            actualMass: 4.002602,
            defaultOptions: {
                title: 'Mass Defect: Δm = Zm_p + Nm_n − M',
                showNucleonMasses: true,
                showNuclearMass: true,
                showMassDefect: true,
                showFormula: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'bindingEnergyCurve': {
            name: 'Binding Energy Curve',
            category: 'Nuclear Physics',
            subcategory: 'Nuclear Reactions',
            description: 'Total binding energy vs mass number showing iron peak',
            type: 'binding_energy_curve',
            defaultOptions: {
                title: 'Nuclear Binding Energy vs Mass Number',
                showCurve: true,
                showIronPeak: true,
                showGrid: true,
                xLabel: 'A (mass number)',
                yLabel: 'Binding Energy (MeV)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'bindingEnergyPerNucleon': {
            name: 'Binding Energy per Nucleon Curve',
            category: 'Nuclear Physics',
            subcategory: 'Nuclear Reactions',
            description: 'Binding energy per nucleon vs mass number showing iron-56 as most stable nucleus',
            type: 'binding_energy_per_nucleon',
            defaultOptions: {
                title: 'Binding Energy per Nucleon vs Mass Number',
                showCurve: true,
                showFe56Peak: true,
                showFissionRegion: true,
                showFusionRegion: true,
                showGrid: true,
                showAnnotations: true,
                xLabel: 'A (mass number)',
                yLabel: 'BE/A (MeV)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'einsteinMassEnergy': {
            name: 'Einstein Mass-Energy Equivalence',
            category: 'Nuclear Physics',
            subcategory: 'Nuclear Reactions',
            description: 'Diagram illustrating E = mc² and its application to mass defect and binding energy',
            type: 'einstein_mass_energy',
            defaultOptions: {
                title: 'Mass-Energy Equivalence: E = mc²',
                showFormula: true,
                showMassDefectLink: true,
                showEnergyScale: true,
                showConversionFactor: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'nuclearEquationBalancing': {
            name: 'Nuclear Equation Balancing',
            category: 'Nuclear Physics',
            subcategory: 'Nuclear Reactions',
            description: 'Nuclear equation with conservation of mass number and proton number illustrated',
            type: 'nuclear_equation_balancing',
            reactionType: 'alpha_decay',
            parentA: 238,
            parentZ: 92,
            parentSymbol: 'U',
            defaultOptions: {
                title: 'Balancing Nuclear Equations',
                showConservationRules: true,
                showMassNumbers: true,
                showProtonNumbers: true,
                showEquation: true,
                showLabels: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'qValueDiagram': {
            name: 'Q-Value Diagram',
            category: 'Nuclear Physics',
            subcategory: 'Nuclear Reactions',
            description: 'Energy level diagram showing Q-value as energy released or absorbed in a nuclear reaction',
            type: 'q_value_diagram',
            qValue: 4.8,
            defaultOptions: {
                title: 'Q-Value of a Nuclear Reaction',
                showReactantEnergy: true,
                showProductEnergy: true,
                showQValue: true,
                showFormula: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'energyLevelTransitions': {
            name: 'Nuclear Energy Level Transitions',
            category: 'Nuclear Physics',
            subcategory: 'Nuclear Reactions',
            description: 'Nuclear energy level diagram showing transitions with gamma ray emission',
            type: 'energy_level_transitions',
            levels: [
                { energy: 0,    label: 'Ground state' },
                { energy: 1.17, label: 'First excited' },
                { energy: 2.51, label: 'Second excited' }
            ],
            defaultOptions: {
                title: 'Nuclear Energy Level Transitions',
                showEnergyLevels: true,
                showTransitionArrows: true,
                showGammaEnergies: true,
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== NUCLEAR PHYSICS — FISSION & FUSION (NEW) =============
        // ============================================================

        'fissionProcessDiagram': {
            name: 'Nuclear Fission Process',
            category: 'Nuclear Physics',
            subcategory: 'Fission & Fusion',
            description: 'Diagram showing neutron-induced fission of uranium-235 producing daughter nuclei, neutrons, and energy',
            type: 'fission_process_diagram',
            parentA: 235,
            parentZ: 92,
            parentSymbol: 'U',
            defaultOptions: {
                title: 'Neutron-Induced Fission of U-235',
                showIncidentNeutron: true,
                showCompoundNucleus: true,
                showFissionFragments: true,
                showNeutronRelease: true,
                showEnergyRelease: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'chainReactionBranching': {
            name: 'Chain Reaction Branching Diagram',
            category: 'Nuclear Physics',
            subcategory: 'Fission & Fusion',
            description: 'Branching diagram of nuclear chain reaction showing neutron multiplication',
            type: 'chain_reaction_branching',
            generations: 4,
            defaultOptions: {
                title: 'Nuclear Chain Reaction',
                showBranchingTree: true,
                showNeutronMultiplication: true,
                showCriticalMass: true,
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'nuclearReactorSchematic': {
            name: 'Nuclear Reactor Schematic',
            category: 'Nuclear Physics',
            subcategory: 'Fission & Fusion',
            description: 'Schematic diagram of a nuclear reactor showing core components and energy conversion',
            type: 'nuclear_reactor_schematic',
            defaultOptions: {
                title: 'Nuclear Fission Reactor — Schematic',
                showFuelRods: true,
                showControlRods: true,
                showModerator: true,
                showCoolant: true,
                showHeatExchanger: true,
                showTurbine: true,
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'pwrReactorDiagram': {
            name: 'PWR Reactor Diagram',
            category: 'Nuclear Physics',
            subcategory: 'Fission & Fusion',
            description: 'Pressurised Water Reactor diagram showing primary and secondary cooling circuits',
            type: 'pwr_reactor_diagram',
            defaultOptions: {
                title: 'Pressurised Water Reactor (PWR)',
                showPrimaryCircuit: true,
                showSecondaryCircuit: true,
                showSteamGenerator: true,
                showTurbineGenerator: true,
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'controlRodMechanism': {
            name: 'Control Rod Mechanism',
            category: 'Nuclear Physics',
            subcategory: 'Fission & Fusion',
            description: 'Reactor core diagram showing control rod insertion and withdrawal to regulate neutron flux',
            type: 'control_rod_mechanism',
            defaultOptions: {
                title: 'Control Rod Mechanism in a Reactor',
                showFuelRods: true,
                showControlRods: true,
                showInsertedPosition: true,
                showWithdrawnPosition: true,
                showNeutronFlux: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'fusionCoulombBarrier': {
            name: 'Fusion Coulomb Barrier',
            category: 'Nuclear Physics',
            subcategory: 'Fission & Fusion',
            description: 'Potential energy vs separation for two nuclei showing Coulomb barrier that must be overcome for fusion',
            type: 'fusion_coulomb_barrier',
            Z1: 1,
            Z2: 1,
            defaultOptions: {
                title: 'Coulomb Barrier for Nuclear Fusion',
                showCoulombRepulsion: true,
                showStrongAttraction: true,
                showBarrierPeak: true,
                showTunnelingArrow: true,
                showGrid: true,
                xLabel: 'r (fm)',
                yLabel: 'PE (MeV)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'dtFusionReaction': {
            name: 'D-T Fusion Reaction Diagram',
            category: 'Nuclear Physics',
            subcategory: 'Fission & Fusion',
            description: 'Deuterium-tritium fusion reaction showing reactants, products, and energy release',
            type: 'dt_fusion_reaction',
            defaultOptions: {
                title: 'D-T Fusion: ²H + ³H → ⁴He + n + 17.6 MeV',
                showDeuterium: true,
                showTritium: true,
                showHelium4: true,
                showNeutron: true,
                showEnergyRelease: true,
                showEquation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'tokamakDiagram': {
            name: 'Tokamak Diagram',
            category: 'Nuclear Physics',
            subcategory: 'Fission & Fusion',
            description: 'Cross-section of a tokamak fusion reactor showing plasma confinement by magnetic fields',
            type: 'tokamak_diagram',
            defaultOptions: {
                title: 'Tokamak — Magnetic Confinement Fusion',
                showToroidalShape: true,
                showMagneticCoils: true,
                showPlasma: true,
                showFieldLines: true,
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'stellarFusionCycle': {
            name: 'Stellar Fusion Cycle',
            category: 'Nuclear Physics',
            subcategory: 'Fission & Fusion',
            description: 'Proton-proton chain reaction in stars showing hydrogen fusion to helium with energy release',
            type: 'stellar_fusion_cycle',
            defaultOptions: {
                title: 'Proton-Proton Chain in Stars',
                showReactionSteps: true,
                showParticlesEmitted: true,
                showEnergyRelease: true,
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'bindingEnergyFissionFusion': {
            name: 'Binding Energy — Fission and Fusion',
            category: 'Nuclear Physics',
            subcategory: 'Fission & Fusion',
            description: 'Binding energy per nucleon curve annotated to show energy release regions for fission and fusion',
            type: 'binding_energy_fission_fusion',
            defaultOptions: {
                title: 'BE/A Curve — Fission and Fusion Energy Release',
                showCurve: true,
                showFissionArrow: true,
                showFusionArrow: true,
                showFe56Peak: true,
                showEnergyReleaseShading: true,
                showGrid: true,
                showAnnotations: true,
                xLabel: 'A (mass number)',
                yLabel: 'BE/A (MeV)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== NUCLEAR PHYSICS — PARTICLE PHYSICS (NEW) =============
        // ============================================================

        'standardModelTable': {
            name: 'Standard Model Table',
            category: 'Nuclear Physics',
            subcategory: 'Particle Physics',
            description: 'Table of fundamental particles in the Standard Model showing quarks, leptons, and bosons',
            type: 'standard_model_table',
            defaultOptions: {
                title: 'The Standard Model of Particle Physics',
                showQuarks: true,
                showLeptons: true,
                showGaugeBosons: true,
                showHiggs: true,
                showCharges: true,
                showMasses: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'quarkComposition': {
            name: 'Quark Composition Diagram',
            category: 'Nuclear Physics',
            subcategory: 'Particle Physics',
            description: 'Diagrams showing quark composition of proton (uud) and neutron (udd)',
            type: 'quark_composition',
            particles: [
                { name: 'Proton',  quarks: ['u', 'u', 'd'], charge: +1 },
                { name: 'Neutron', quarks: ['u', 'd', 'd'], charge:  0 }
            ],
            defaultOptions: {
                title: 'Quark Composition of Proton and Neutron',
                showQuarks: true,
                showCharges: true,
                showColourCharge: false,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'hadronClassification': {
            name: 'Hadron Classification Diagram',
            category: 'Nuclear Physics',
            subcategory: 'Particle Physics',
            description: 'Classification tree showing hadrons divided into baryons and mesons with examples',
            type: 'hadron_classification',
            defaultOptions: {
                title: 'Hadron Classification',
                showBaryons: true,
                showMesons: true,
                showQuarkContent: true,
                showExamples: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'feynmanDiagramBetaDecay': {
            name: 'Feynman Diagram — Beta Decay',
            category: 'Nuclear Physics',
            subcategory: 'Particle Physics',
            description: 'Feynman diagram for beta-minus decay showing d quark → u quark via W⁻ boson',
            type: 'feynman_diagram_beta_decay',
            decayType: 'beta_minus',
            defaultOptions: {
                title: 'Feynman Diagram — β⁻ Decay',
                showQuarkLines: true,
                showWBoson: true,
                showLeptons: true,
                showVertices: true,
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'pairProductionDiagram': {
            name: 'Pair Production Diagram',
            category: 'Nuclear Physics',
            subcategory: 'Particle Physics',
            description: 'Diagram showing gamma photon converting to electron-positron pair near a nucleus',
            type: 'pair_production_diagram',
            photonEnergy: 1.022,
            defaultOptions: {
                title: 'Pair Production: γ → e⁻ + e⁺',
                showGammaPhoton: true,
                showElectron: true,
                showPositron: true,
                showNucleus: true,
                showEnergyCondition: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'annihilationDiagram': {
            name: 'Annihilation Diagram',
            category: 'Nuclear Physics',
            subcategory: 'Particle Physics',
            description: 'Diagram showing electron-positron annihilation producing two gamma photons',
            type: 'annihilation_diagram',
            defaultOptions: {
                title: 'Annihilation: e⁻ + e⁺ → 2γ',
                showElectron: true,
                showPositron: true,
                showGammaPhotons: true,
                showEnergyConservation: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'exchangeParticleDiagram': {
            name: 'Exchange Particle Diagram',
            category: 'Nuclear Physics',
            subcategory: 'Particle Physics',
            description: 'Feynman-style diagram showing force mediated by exchange of a virtual boson between two particles',
            type: 'exchange_particle_diagram',
            forceType: 'weak',
            defaultOptions: {
                title: 'Force via Exchange Particle',
                showIncomingParticles: true,
                showExchangeParticle: true,
                showOutgoingParticles: true,
                showForceType: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'particleTracksCloudChamber': {
            name: 'Particle Tracks — Cloud Chamber',
            category: 'Nuclear Physics',
            subcategory: 'Particle Physics',
            description: 'Cloud chamber image showing characteristic curved tracks of different particles in a magnetic field',
            type: 'particle_tracks_cloud_chamber',
            magneticField: 0.5,
            defaultOptions: {
                title: 'Particle Tracks in a Cloud Chamber',
                showAlphaTrack: true,
                showBetaTrack: true,
                showProtonTrack: true,
                showMagneticField: true,
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#1a1a2e'
            }
        },

        'baryonMesonDistinction': {
            name: 'Baryon vs Meson Distinction',
            category: 'Nuclear Physics',
            subcategory: 'Particle Physics',
            description: 'Comparison diagram showing baryons (3 quarks) and mesons (quark-antiquark pair)',
            type: 'baryon_meson_distinction',
            defaultOptions: {
                title: 'Baryons vs Mesons',
                showBaryonStructure: true,
                showMesonStructure: true,
                showQuarkContent: true,
                showExamples: true,
                showCharges: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        }

    };

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

    static getDiagramsBySubcategory(subcategory) {
        return Object.entries(this.diagrams)
            .filter(([_, diagram]) => diagram.subcategory === subcategory)
            .reduce((acc, [key, diagram]) => {
                acc[key] = diagram;
                return acc;
            }, {});
    }

    static getAllCategories() {
        return [...new Set(Object.values(this.diagrams).map(d => d.category))];
    }

    static getAllSubcategories() {
        return [...new Set(Object.values(this.diagrams)
            .filter(d => d.subcategory)
            .map(d => d.subcategory))];
    }

    static searchDiagrams(query) {
        const lowerQuery = query.toLowerCase();
        return Object.entries(this.diagrams)
            .filter(([key, diagram]) =>
                diagram.name.toLowerCase().includes(lowerQuery) ||
                diagram.description.toLowerCase().includes(lowerQuery) ||
                diagram.category.toLowerCase().includes(lowerQuery) ||
                (diagram.subcategory || '').toLowerCase().includes(lowerQuery) ||
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
}

export { PhysicsDiagramsRegistry };
