class MathematicsDiagramsRegistry {
    


static diagrams = {

// ===== VECTORS (continued) =====
'triangleAndParallelogramRuleDiagram': {
    name: 'Triangle and Parallelogram Rule',
    category: 'Vectors',
    description: 'Vector addition using triangle and parallelogram rules',
    type: 'triangle_parallelogram_rule',
    defaultOptions: {
        title: 'Triangle and Parallelogram Rule',
        showTriangleRule: true,
        showParallelogramRule: true,
        showResultant: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'commutativityParallelogramDiagram': {
    name: 'Commutativity via Parallelogram',
    category: 'Vectors',
    description: 'Demonstrates a+b = b+a using parallelogram',
    type: 'commutativity_parallelogram',
    defaultOptions: {
        title: 'Commutativity of Vector Addition',
        showBothOrders: true,
        showParallelogram: true,
        showLabels: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'componentWiseSubtractionDiagram': {
    name: 'Component-Wise Vector Subtraction',
    category: 'Vectors',
    description: 'Subtracting vectors component by component',
    type: 'component_wise_subtraction',
    defaultOptions: {
        title: 'Component-Wise Subtraction',
        showComponents: true,
        showGrid: true,
        showResult: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'tailToTailSubtractionDiagram': {
    name: 'Tail-to-Tail Vector Subtraction',
    category: 'Vectors',
    description: 'Geometric subtraction with tails at same point',
    type: 'tail_to_tail_subtraction',
    defaultOptions: {
        title: 'Tail-to-Tail Subtraction',
        showTails: true,
        showDifference: true,
        showLabels: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'nonCommutativitySubtractionDiagram': {
    name: 'Non-Commutativity of Subtraction',
    category: 'Vectors',
    description: 'Shows a-b ≠ b-a geometrically',
    type: 'non_commutativity_subtraction',
    defaultOptions: {
        title: 'Non-Commutativity of Vector Subtraction',
        showBothOrders: true,
        showComparison: true,
        showLabels: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'resultantForceDiagram': {
    name: 'Resultant Force',
    category: 'Vectors',
    description: 'Finding resultant of multiple force vectors',
    type: 'resultant_force',
    defaultOptions: {
        title: 'Resultant Force',
        showForces: true,
        showResultant: true,
        showComponents: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'vectorPathGeometricFigureDiagram': {
    name: 'Vector Path in Geometric Figure',
    category: 'Vectors',
    description: 'Tracing vector paths around geometric figures',
    type: 'vector_path_geometric',
    defaultOptions: {
        title: 'Vector Path in Geometric Figure',
        showPath: true,
        showFigure: true,
        showLabels: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'linearCombinationDiagram': {
    name: 'Linear Combination of Vectors',
    category: 'Vectors',
    description: 'Expressing vectors as linear combinations',
    type: 'linear_combination',
    defaultOptions: {
        title: 'Linear Combination of Vectors',
        showBasisVectors: true,
        showCombination: true,
        showGrid: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'navigationDisplacementDiagram': {
    name: 'Navigation Displacement',
    category: 'Vectors',
    description: 'Vector displacement in navigation context',
    type: 'navigation_displacement',
    defaultOptions: {
        title: 'Navigation Displacement',
        showPath: true,
        showDisplacement: true,
        showCompass: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'scalarStretchDiagram': {
    name: 'Scalar Stretch of a Vector',
    category: 'Vectors',
    description: 'Effect of scalar multiplication on vector length',
    type: 'scalar_stretch',
    defaultOptions: {
        title: 'Scalar Stretch',
        showOriginal: true,
        showScaled: true,
        showScaleFactor: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'scalarMultipleColumnVectorDiagram': {
    name: 'Scalar Multiple Column Vector',
    category: 'Vectors',
    description: 'Column vector notation under scalar multiplication',
    type: 'scalar_multiple_column_vector',
    defaultOptions: {
        title: 'Scalar Multiple Column Vector',
        showColumnNotation: true,
        showGeometric: true,
        showComponents: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'scaledMagnitudeComparisonDiagram': {
    name: 'Scaled Magnitude Comparison',
    category: 'Vectors',
    description: 'Comparing magnitudes of original and scaled vectors',
    type: 'scaled_magnitude_comparison',
    defaultOptions: {
        title: 'Scaled Magnitude Comparison',
        showMagnitudes: true,
        showScaleFactor: true,
        showArrows: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'distributiveScalarDiagram': {
    name: 'Distributive Law for Scalar Multiplication',
    category: 'Vectors',
    description: 'k(a+b) = ka + kb visualised geometrically',
    type: 'distributive_scalar',
    defaultOptions: {
        title: 'Distributive Scalar Multiplication',
        showDistribution: true,
        showGeometric: true,
        showLabels: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'parallelVectorsScalarDiagram': {
    name: 'Parallel Vectors via Scalar Multiplication',
    category: 'Vectors',
    description: 'Scalar multiples produce parallel vectors',
    type: 'parallel_vectors_scalar',
    defaultOptions: {
        title: 'Parallel Vectors via Scalar Multiplication',
        showParallel: true,
        showScalars: true,
        showLabels: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'normalisationUnitCircleDiagram': {
    name: 'Normalisation and Unit Circle',
    category: 'Vectors',
    description: 'Normalising a vector to produce a unit vector',
    type: 'normalisation_unit_circle',
    defaultOptions: {
        title: 'Normalisation and Unit Circle',
        showUnitCircle: true,
        showOriginal: true,
        showNormalised: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'scalarDivisionSegmentDiagram': {
    name: 'Scalar Division Segment',
    category: 'Vectors',
    description: 'Dividing a vector by a scalar and segment interpretation',
    type: 'scalar_division_segment',
    defaultOptions: {
        title: 'Scalar Division Segment',
        showDivision: true,
        showSegment: true,
        showLabels: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'scalarProofGeometricFigureDiagram': {
    name: 'Scalar Proof in Geometric Figure',
    category: 'Vectors',
    description: 'Using scalar multiplication in geometric proofs',
    type: 'scalar_proof_geometric',
    defaultOptions: {
        title: 'Scalar Proof in Geometric Figure',
        showFigure: true,
        showProofSteps: true,
        showLabels: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'forceScalingDiagram': {
    name: 'Force Scaling',
    category: 'Vectors',
    description: 'Scaling force vectors by scalar multipliers',
    type: 'force_scaling',
    defaultOptions: {
        title: 'Force Scaling',
        showOriginalForce: true,
        showScaledForce: true,
        showMagnitude: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'sameOppositeDirectionDiagram': {
    name: 'Same and Opposite Direction Vectors',
    category: 'Vectors',
    description: 'Positive and negative scalar multiples showing direction',
    type: 'same_opposite_direction',
    defaultOptions: {
        title: 'Same and Opposite Direction',
        showPositive: true,
        showNegative: true,
        showLabels: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'fourQuadrantDirectionAngleDiagram': {
    name: 'Four-Quadrant Direction Angle',
    category: 'Vectors',
    description: 'Direction angles across all four quadrants',
    type: 'four_quadrant_direction_angle',
    defaultOptions: {
        title: 'Four-Quadrant Direction Angle',
        showQuadrants: true,
        showAngles: true,
        showVectors: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'compassBearingsDiagram': {
    name: 'Compass Bearings',
    category: 'Vectors',
    description: 'Compass bearings and vector direction',
    type: 'compass_bearings',
    defaultOptions: {
        title: 'Compass Bearings',
        showCompass: true,
        showBearings: true,
        showVectors: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'unitVectorDirectionDiagram': {
    name: 'Unit Vector Direction',
    category: 'Vectors',
    description: 'Unit vectors as direction indicators',
    type: 'unit_vector_direction',
    defaultOptions: {
        title: 'Unit Vector Direction',
        showUnitVectors: true,
        showAngles: true,
        showLabels: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'directionRatioSimplificationDiagram': {
    name: 'Direction Ratio Simplification',
    category: 'Vectors',
    description: 'Simplifying direction ratios to find direction',
    type: 'direction_ratio_simplification',
    defaultOptions: {
        title: 'Direction Ratio Simplification',
        showRatios: true,
        showSimplified: true,
        showGeometric: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'dotProductAngleDiagram': {
    name: 'Dot Product and Angle Between Vectors',
    category: 'Vectors',
    description: 'Geometric interpretation of the dot product',
    type: 'dot_product_angle',
    defaultOptions: {
        title: 'Dot Product and Angle',
        showVectors: true,
        showAngle: true,
        showFormula: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'directionCosines3DDiagram': {
    name: '3D Direction Cosines',
    category: 'Vectors',
    description: 'Direction cosines of a vector in 3D space',
    type: 'direction_cosines_3d',
    defaultOptions: {
        title: '3D Direction Cosines',
        show3DAxes: true,
        showCosines: true,
        showAngles: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'gradientVectorConnectionDiagram': {
    name: 'Gradient-Vector Connection',
    category: 'Vectors',
    description: 'Link between gradient of a line and direction vector',
    type: 'gradient_vector_connection',
    defaultOptions: {
        title: 'Gradient-Vector Connection',
        showGradient: true,
        showVector: true,
        showLine: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'velocityBearingApplicationDiagram': {
    name: 'Velocity Bearing Application',
    category: 'Vectors',
    description: 'Velocity vectors with bearing in applied contexts',
    type: 'velocity_bearing_application',
    defaultOptions: {
        title: 'Velocity Bearing Application',
        showVelocity: true,
        showBearing: true,
        showComponents: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'vectorLengthArrowDiagram': {
    name: 'Vector Length and Arrow',
    category: 'Vectors',
    description: 'Representing vector magnitude with arrow length',
    type: 'vector_length_arrow',
    defaultOptions: {
        title: 'Vector Length and Arrow',
        showArrow: true,
        showMagnitude: true,
        showScale: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'pythagoreanMagnitudeDiagram': {
    name: 'Pythagorean Magnitude (2D)',
    category: 'Vectors',
    description: 'Using Pythagoras to find 2D vector magnitude',
    type: 'pythagorean_magnitude',
    defaultOptions: {
        title: 'Pythagorean Magnitude (2D)',
        showComponents: true,
        showHypotenuse: true,
        showFormula: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'pythagorean3DMagnitudeDiagram': {
    name: 'Pythagorean Magnitude (3D)',
    category: 'Vectors',
    description: 'Extending Pythagoras to find 3D vector magnitude',
    type: 'pythagorean_3d_magnitude',
    defaultOptions: {
        title: 'Pythagorean Magnitude (3D)',
        show3DAxes: true,
        showComponents: true,
        showFormula: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'triangleInequalityDiagram': {
    name: 'Triangle Inequality',
    category: 'Vectors',
    description: '|a+b| ≤ |a| + |b| geometric proof',
    type: 'triangle_inequality',
    defaultOptions: {
        title: 'Triangle Inequality',
        showVectors: true,
        showInequality: true,
        showLabels: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'distanceFormulaCoordinateDiagram': {
    name: 'Distance Formula on Coordinate Plane',
    category: 'Vectors',
    description: 'Deriving distance formula using vector magnitude',
    type: 'distance_formula_coordinate',
    defaultOptions: {
        title: 'Distance Formula',
        showCoordinates: true,
        showFormula: true,
        showTriangle: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'unitVectorNormalisationDiagram': {
    name: 'Unit Vector Normalisation',
    category: 'Vectors',
    description: 'Step-by-step normalisation of a vector',
    type: 'unit_vector_normalisation',
    defaultOptions: {
        title: 'Unit Vector Normalisation',
        showOriginal: true,
        showSteps: true,
        showResult: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'missingComponentMagnitudeDiagram': {
    name: 'Missing Component from Magnitude',
    category: 'Vectors',
    description: 'Finding an unknown component given the magnitude',
    type: 'missing_component_magnitude',
    defaultOptions: {
        title: 'Missing Component from Magnitude',
        showKnownComponents: true,
        showMagnitude: true,
        showSolution: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'speedForceMagnitudeDiagram': {
    name: 'Speed and Force Magnitude',
    category: 'Vectors',
    description: 'Applied magnitude problems with speed and force',
    type: 'speed_force_magnitude',
    defaultOptions: {
        title: 'Speed and Force Magnitude',
        showForceVector: true,
        showVelocityVector: true,
        showMagnitudes: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'parallelVectorsDefinitionDiagram': {
    name: 'Parallel Vectors Definition',
    category: 'Vectors',
    description: 'Definition and conditions for parallel vectors',
    type: 'parallel_vectors_definition',
    defaultOptions: {
        title: 'Parallel Vectors Definition',
        showParallelPairs: true,
        showCondition: true,
        showLabels: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'ratioTestParallelDiagram': {
    name: 'Ratio Test for Parallel Vectors',
    category: 'Vectors',
    description: 'Testing parallelism using component ratios',
    type: 'ratio_test_parallel',
    defaultOptions: {
        title: 'Ratio Test for Parallel Vectors',
        showRatios: true,
        showVectors: true,
        showTest: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'parallelArrowsOnGridDiagram': {
    name: 'Parallel Arrows on Grid',
    category: 'Vectors',
    description: 'Parallel vectors displayed on a coordinate grid',
    type: 'parallel_arrows_grid',
    defaultOptions: {
        title: 'Parallel Arrows on Grid',
        showGrid: true,
        showArrows: true,
        showLabels: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'collinearPointsVectorDiagram': {
    name: 'Collinear Points via Vectors',
    category: 'Vectors',
    description: 'Proving collinearity using parallel vectors',
    type: 'collinear_points_vector',
    defaultOptions: {
        title: 'Collinear Points via Vectors',
        showPoints: true,
        showVectors: true,
        showProof: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'parallelogramSidesVectorDiagram': {
    name: 'Parallelogram Sides as Vectors',
    category: 'Vectors',
    description: 'Identifying parallel sides of a parallelogram using vectors',
    type: 'parallelogram_sides_vector',
    defaultOptions: {
        title: 'Parallelogram Sides as Vectors',
        showParallelogram: true,
        showVectors: true,
        showLabels: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'unknownComponentParallelDiagram': {
    name: 'Unknown Component from Parallel Condition',
    category: 'Vectors',
    description: 'Solving for unknown component using parallel condition',
    type: 'unknown_component_parallel',
    defaultOptions: {
        title: 'Unknown Component from Parallel Condition',
        showVectors: true,
        showCondition: true,
        showSolution: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'midpointTheoremProofDiagram': {
    name: 'Midpoint Theorem Proof',
    category: 'Vectors',
    description: 'Vector proof of the midpoint theorem',
    type: 'midpoint_theorem_proof',
    defaultOptions: {
        title: 'Midpoint Theorem Proof',
        showTriangle: true,
        showMidpoints: true,
        showVectors: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'dotProductParallelTestDiagram': {
    name: 'Dot Product Parallel Test',
    category: 'Vectors',
    description: 'Using dot product to test for parallelism',
    type: 'dot_product_parallel_test',
    defaultOptions: {
        title: 'Dot Product Parallel Test',
        showDotProduct: true,
        showVectors: true,
        showTest: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'forceAccelerationParallelDiagram': {
    name: 'Force and Acceleration Parallel',
    category: 'Vectors',
    description: 'Parallel relationship between force and acceleration vectors',
    type: 'force_acceleration_parallel',
    defaultOptions: {
        title: 'Force and Acceleration Parallel',
        showForce: true,
        showAcceleration: true,
        showParallel: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'parallelErrorCounterExampleDiagram': {
    name: 'Parallel Error Counter-Example',
    category: 'Vectors',
    description: 'Common errors in identifying parallel vectors',
    type: 'parallel_error_counter_example',
    defaultOptions: {
        title: 'Parallel Error Counter-Example',
        showError: true,
        showCorrection: true,
        showCounterExample: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

// ===== TRIGONOMETRY (continued) =====
'rightTriangleLabelledSides': {
    name: 'Right Triangle Labelled Sides',
    category: 'Trigonometry',
    description: 'Hypotenuse, opposite and adjacent sides labelled',
    type: 'right_triangle_labelled_sides',
    defaultOptions: {
        title: 'Right Triangle Labelled Sides',
        showHypotenuse: true,
        showOpposite: true,
        showAdjacent: true,
        showAngle: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'specialAnglesTriangle_30_60_90_and_45_45_90': {
    name: 'Special Angles: 30-60-90 and 45-45-90 Triangles',
    category: 'Trigonometry',
    description: 'Side ratios of special right triangles',
    type: 'special_angles_triangle',
    defaultOptions: {
        title: 'Special Angle Triangles',
        show306090: true,
        show454590: true,
        showRatios: true,
        showExactValues: true,
        width: 1000,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'unitCircleCASTDiagram': {
    name: 'Unit Circle CAST Diagram',
    category: 'Trigonometry',
    description: 'CAST rule showing sign of trig functions by quadrant',
    type: 'unit_circle_cast',
    defaultOptions: {
        title: 'CAST Diagram',
        showCASTLabels: true,
        showQuadrants: true,
        showSigns: true,
        showUnitCircle: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'sineCosineAndTangentGraphs': {
    name: 'Sine, Cosine and Tangent Graphs',
    category: 'Trigonometry',
    description: 'Graphs of sin, cos and tan over one or more periods',
    type: 'trig_graphs',
    defaultOptions: {
        title: 'Trigonometric Graphs',
        showSine: true,
        showCosine: true,
        showTangent: true,
        showGrid: true,
        width: 1000,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'pythagoreanIdentityUnitCircleProof': {
    name: 'Pythagorean Identity Unit Circle Proof',
    category: 'Trigonometry',
    description: 'sin²θ + cos²θ = 1 derived from unit circle',
    type: 'pythagorean_identity_proof',
    defaultOptions: {
        title: 'Pythagorean Identity Proof',
        showUnitCircle: true,
        showTriangle: true,
        showIdentity: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'unitCircleWithSolutionAngles': {
    name: 'Unit Circle with Solution Angles',
    category: 'Trigonometry',
    description: 'Unit circle showing angles that satisfy a trig equation',
    type: 'unit_circle_solution_angles',
    defaultOptions: {
        title: 'Unit Circle Solution Angles',
        showUnitCircle: true,
        showSolutionAngles: true,
        showSymmetry: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'sineRuleAndCosineRuleTriangleDiagram': {
    name: 'Sine Rule and Cosine Rule Triangle',
    category: 'Trigonometry',
    description: 'General triangle labelled for sine and cosine rules',
    type: 'sine_cosine_rule_triangle',
    defaultOptions: {
        title: 'Sine Rule and Cosine Rule',
        showSineRule: true,
        showCosineRule: true,
        showLabels: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'elevationDepressionAngleDiagram': {
    name: 'Angle of Elevation and Depression',
    category: 'Trigonometry',
    description: 'Angles of elevation and depression in applied problems',
    type: 'elevation_depression_angle',
    defaultOptions: {
        title: 'Elevation and Depression Angles',
        showElevation: true,
        showDepression: true,
        showHorizontal: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'radianDefinitionArcLengthDiagram': {
    name: 'Radian Definition and Arc Length',
    category: 'Trigonometry',
    description: 'Radian defined as arc length equal to radius',
    type: 'radian_definition_arc_length',
    defaultOptions: {
        title: 'Radian Definition and Arc Length',
        showArc: true,
        showRadius: true,
        showAngle: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'rectangularPrismSpaceDiagonalDiagram': {
    name: 'Rectangular Prism Space Diagonal',
    category: 'Trigonometry',
    description: '3D trig applied to space diagonal of a rectangular prism',
    type: 'rectangular_prism_space_diagonal',
    defaultOptions: {
        title: 'Space Diagonal of Rectangular Prism',
        show3DPrism: true,
        showDiagonal: true,
        showAngles: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

// ===== COORDINATE GEOMETRY =====
'cartesianPlaneWithQuadrants': {
    name: 'Cartesian Plane with Quadrants',
    category: 'Coordinate Geometry',
    description: 'Labelled Cartesian plane showing all four quadrants',
    type: 'cartesian_plane_quadrants',
    defaultOptions: {
        title: 'Cartesian Plane with Quadrants',
        showQuadrants: true,
        showAxes: true,
        showLabels: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'lineInclinationAngleDiagram': {
    name: 'Line Inclination Angle',
    category: 'Coordinate Geometry',
    description: 'Angle of inclination of a line with the x-axis',
    type: 'line_inclination_angle',
    defaultOptions: {
        title: 'Line Inclination Angle',
        showLine: true,
        showAngle: true,
        showGradient: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'angleBetweenTwoLinesGradientDiagram': {
    name: 'Angle Between Two Lines (Gradient)',
    category: 'Coordinate Geometry',
    description: 'Finding the angle between two lines using gradients',
    type: 'angle_between_two_lines',
    defaultOptions: {
        title: 'Angle Between Two Lines',
        showTwoLines: true,
        showAngle: true,
        showGradients: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'parallelAndPerpendicularLinesGradientDiagram': {
    name: 'Parallel and Perpendicular Lines (Gradient)',
    category: 'Coordinate Geometry',
    description: 'Gradient conditions for parallel and perpendicular lines',
    type: 'parallel_perpendicular_gradient',
    defaultOptions: {
        title: 'Parallel and Perpendicular Lines',
        showParallel: true,
        showPerpendicular: true,
        showGradients: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'coordinateProofShapeVerificationDiagram': {
    name: 'Coordinate Proof Shape Verification',
    category: 'Coordinate Geometry',
    description: 'Using coordinates to verify geometric shape properties',
    type: 'coordinate_proof_shape',
    defaultOptions: {
        title: 'Coordinate Proof Shape Verification',
        showShape: true,
        showCoordinates: true,
        showProofSteps: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'unitCircleCoordinateRepresentation': {
    name: 'Unit Circle Coordinate Representation',
    category: 'Coordinate Geometry',
    description: 'Unit circle with (cosθ, sinθ) coordinates marked',
    type: 'unit_circle_coordinates',
    defaultOptions: {
        title: 'Unit Circle Coordinates',
        showUnitCircle: true,
        showCoordinates: true,
        showAngles: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'polygonVerticesCoordinatePlaneDiagram': {
    name: 'Polygon Vertices on Coordinate Plane',
    category: 'Coordinate Geometry',
    description: 'Plotting and analysing polygon vertices on a coordinate plane',
    type: 'polygon_vertices_coordinate',
    defaultOptions: {
        title: 'Polygon Vertices on Coordinate Plane',
        showPolygon: true,
        showVertices: true,
        showGrid: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},

// ===== GEOMETRY (continued) =====
'triangleClassificationByAnglesAndSides': {
    name: 'Triangle Classification by Angles and Sides',
    category: 'Geometry',
    description: 'All triangle types classified by angles and side lengths',
    type: 'triangle_classification',
    defaultOptions: {
        title: 'Triangle Classification',
        showByAngles: true,
        showBySides: true,
        showLabels: true,
        width: 1000,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'triangleAngleSumParallelLineProof': {
    name: 'Triangle Angle Sum Parallel Line Proof',
    category: 'Geometry',
    description: 'Proof that angles in a triangle sum to 180° using parallel lines',
    type: 'triangle_angle_sum_proof',
    defaultOptions: {
        title: 'Triangle Angle Sum Proof',
        showParallelLine: true,
        showAngles: true,
        showProof: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'triangleExteriorAngleDiagram': {
    name: 'Triangle Exterior Angle',
    category: 'Geometry',
    description: 'Exterior angle equals sum of non-adjacent interior angles',
    type: 'triangle_exterior_angle',
    defaultOptions: {
        title: 'Triangle Exterior Angle',
        showInterior: true,
        showExterior: true,
        showRelationship: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'isoscelesTriangleBaseAnglesAndAxisDiagram': {
    name: 'Isosceles Triangle Base Angles and Axis',
    category: 'Geometry',
    description: 'Base angles equal and axis of symmetry in isosceles triangle',
    type: 'isosceles_base_angles_axis',
    defaultOptions: {
        title: 'Isosceles Triangle',
        showBaseAngles: true,
        showAxisOfSymmetry: true,
        showEqualSides: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'equilateralTriangleSymmetryDiagram': {
    name: 'Equilateral Triangle Symmetry',
    category: 'Geometry',
    description: 'Three lines of symmetry and 60° angles in equilateral triangle',
    type: 'equilateral_triangle_symmetry',
    defaultOptions: {
        title: 'Equilateral Triangle Symmetry',
        showSymmetryLines: true,
        showAngles: true,
        showEqualSides: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'rightTriangleSpecialCases_30_60_90_45_45_90': {
    name: 'Right Triangle Special Cases',
    category: 'Geometry',
    description: '30-60-90 and 45-45-90 triangles with exact side ratios',
    type: 'right_triangle_special_cases',
    defaultOptions: {
        title: 'Special Right Triangle Cases',
        show306090: true,
        show454590: true,
        showSideRatios: true,
        width: 1000,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'congruenceConditionsSSS_SAS_ASA_AAS_RHS': {
    name: 'Congruence Conditions (SSS, SAS, ASA, AAS, RHS)',
    category: 'Geometry',
    description: 'All five triangle congruence conditions illustrated',
    type: 'congruence_conditions',
    defaultOptions: {
        title: 'Triangle Congruence Conditions',
        showSSS: true,
        showSAS: true,
        showASA: true,
        showAAS: true,
        showRHS: true,
        width: 1200,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'similarTrianglesAA_scaleFactor': {
    name: 'Similar Triangles (AA and Scale Factor)',
    category: 'Geometry',
    description: 'AA similarity and scale factor between similar triangles',
    type: 'similar_triangles_aa',
    defaultOptions: {
        title: 'Similar Triangles',
        showAA: true,
        showScaleFactor: true,
        showCorrespondingSides: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'triangleCentresOrthocentre_Incentre_Centroid_Circumcentre': {
    name: 'Triangle Centres',
    category: 'Geometry',
    description: 'Orthocentre, incentre, centroid and circumcentre',
    type: 'triangle_centres',
    defaultOptions: {
        title: 'Triangle Centres',
        showOrthocentre: true,
        showIncentre: true,
        showCentroid: true,
        showCircumcentre: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'triangleAngleSideInequalityDiagram': {
    name: 'Triangle Angle-Side Inequality',
    category: 'Geometry',
    description: 'Larger angle opposite longer side relationship',
    type: 'triangle_angle_side_inequality',
    defaultOptions: {
        title: 'Triangle Angle-Side Inequality',
        showAngles: true,
        showSides: true,
        showRelationship: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'circlePartsLabelledDiagram': {
    name: 'Circle Parts Labelled',
    category: 'Geometry',
    description: 'Centre, radius, diameter, chord, arc, sector, segment',
    type: 'circle_parts_labelled',
    defaultOptions: {
        title: 'Parts of a Circle',
        showCentre: true,
        showRadius: true,
        showDiameter: true,
        showChord: true,
        showArc: true,
        showSector: true,
        showSegment: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'centralAngleArcRelationshipDiagram': {
    name: 'Central Angle and Arc Relationship',
    category: 'Geometry',
    description: 'Central angle is twice the inscribed angle on same arc',
    type: 'central_angle_arc',
    defaultOptions: {
        title: 'Central Angle and Arc',
        showCentralAngle: true,
        showArc: true,
        showRelationship: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'inscribedAngleTheoremDiagram': {
    name: 'Inscribed Angle Theorem',
    category: 'Geometry',
    description: 'Inscribed angle is half the central angle on same arc',
    type: 'inscribed_angle_theorem',
    defaultOptions: {
        title: 'Inscribed Angle Theorem',
        showInscribedAngle: true,
        showCentralAngle: true,
        showArc: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'tangentRadiusAndAlternateSegmentDiagram': {
    name: 'Tangent-Radius and Alternate Segment',
    category: 'Geometry',
    description: 'Tangent perpendicular to radius; alternate segment theorem',
    type: 'tangent_radius_alternate_segment',
    defaultOptions: {
        title: 'Tangent-Radius and Alternate Segment',
        showTangent: true,
        showRadius: true,
        showAlternateSegment: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'cyclicQuadrilateralOppositeAnglesDiagram': {
    name: 'Cyclic Quadrilateral Opposite Angles',
    category: 'Geometry',
    description: 'Opposite angles of a cyclic quadrilateral sum to 180°',
    type: 'cyclic_quadrilateral_angles',
    defaultOptions: {
        title: 'Cyclic Quadrilateral',
        showQuadrilateral: true,
        showOppositeAngles: true,
        showSum: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'intersectingChordsAndPerpendicularBisectorDiagram': {
    name: 'Intersecting Chords and Perpendicular Bisector',
    category: 'Geometry',
    description: 'Intersecting chords theorem and perpendicular bisector of chord',
    type: 'intersecting_chords_bisector',
    defaultOptions: {
        title: 'Intersecting Chords and Bisector',
        showChords: true,
        showIntersection: true,
        showPerpendicularBisector: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'thalesTheoremAndPowerOfAPointDiagram': {
    name: "Thales' Theorem and Power of a Point",
    category: 'Geometry',
    description: "Thales' theorem and power of a point relationship",
    type: 'thales_power_of_point',
    defaultOptions: {
        title: "Thales' Theorem and Power of a Point",
        showThales: true,
        showPowerOfPoint: true,
        showLabels: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'circleTheoremProofStructureDiagram': {
    name: 'Circle Theorem Proof Structure',
    category: 'Geometry',
    description: 'Structured diagram for writing circle theorem proofs',
    type: 'circle_theorem_proof_structure',
    defaultOptions: {
        title: 'Circle Theorem Proof Structure',
        showTheorem: true,
        showProofSteps: true,
        showDiagram: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'polygonClassificationConvexConcaveRegular': {
    name: 'Polygon Classification',
    category: 'Geometry',
    description: 'Convex, concave and regular polygon classification',
    type: 'polygon_classification',
    defaultOptions: {
        title: 'Polygon Classification',
        showConvex: true,
        showConcave: true,
        showRegular: true,
        width: 1000,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'polygonTriangulationInteriorAngleSumDiagram': {
    name: 'Polygon Triangulation Interior Angle Sum',
    category: 'Geometry',
    description: 'Deriving interior angle sum via triangulation',
    type: 'polygon_triangulation',
    defaultOptions: {
        title: 'Polygon Triangulation',
        showTriangulation: true,
        showFormula: true,
        showAngleSum: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'polygonExteriorAngleWalkingArgumentDiagram': {
    name: 'Polygon Exterior Angle Walking Argument',
    category: 'Geometry',
    description: 'Exterior angles sum to 360° via walking argument',
    type: 'polygon_exterior_angle_walking',
    defaultOptions: {
        title: 'Polygon Exterior Angle Sum',
        showWalkingPath: true,
        showExteriorAngles: true,
        showSum: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'quadrilateralFamilyAnglesDiagram': {
    name: 'Quadrilateral Family Angles',
    category: 'Geometry',
    description: 'Angle properties of quadrilateral family members',
    type: 'quadrilateral_family_angles',
    defaultOptions: {
        title: 'Quadrilateral Family Angles',
        showSquare: true,
        showRectangle: true,
        showRhombus: true,
        showParallelogram: true,
        showTrapezium: true,
        width: 1200,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'regularPolygonSymmetryAndCentralAngleDiagram': {
    name: 'Regular Polygon Symmetry and Central Angle',
    category: 'Geometry',
    description: 'Lines of symmetry and central angle of regular polygons',
    type: 'regular_polygon_symmetry',
    defaultOptions: {
        title: 'Regular Polygon Symmetry',
        showSymmetryLines: true,
        showCentralAngle: true,
        showLabels: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'polygonInteriorSumProofDiagram': {
    name: 'Polygon Interior Sum Proof',
    category: 'Geometry',
    description: 'Formal proof of interior angle sum formula',
    type: 'polygon_interior_sum_proof',
    defaultOptions: {
        title: 'Polygon Interior Sum Proof',
        showProof: true,
        showFormula: true,
        showExamples: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'regularAndSemiRegularTessellationPatterns': {
    name: 'Regular and Semi-Regular Tessellation Patterns',
    category: 'Geometry',
    description: 'Tessellation patterns using regular and semi-regular polygons',
    type: 'tessellation_patterns',
    defaultOptions: {
        title: 'Tessellation Patterns',
        showRegular: true,
        showSemiRegular: true,
        showAngles: true,
        width: 1000,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'parallelLinesTransversalLabelledDiagram': {
    name: 'Parallel Lines and Transversal Labelled',
    category: 'Geometry',
    description: 'Two parallel lines cut by a transversal with all angles labelled',
    type: 'parallel_lines_transversal',
    defaultOptions: {
        title: 'Parallel Lines and Transversal',
        showParallelLines: true,
        showTransversal: true,
        showAngles: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'correspondingAlternateCoInteriorAnglesDiagram': {
    name: 'Corresponding, Alternate and Co-Interior Angles',
    category: 'Geometry',
    description: 'Three angle pair types for parallel lines and transversal',
    type: 'corresponding_alternate_cointerior',
    defaultOptions: {
        title: 'Corresponding, Alternate, Co-Interior Angles',
        showCorresponding: true,
        showAlternate: true,
        showCoInterior: true,
        width: 1000,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'parallelLineTheoremConversesDiagram': {
    name: 'Parallel Line Theorem Converses',
    category: 'Geometry',
    description: 'Converse theorems for proving lines are parallel',
    type: 'parallel_line_converses',
    defaultOptions: {
        title: 'Parallel Line Theorem Converses',
        showConverses: true,
        showExamples: true,
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'algebraicAnglesParallelLinesDiagram': {
    name: 'Algebraic Angles in Parallel Lines',
    category: 'Geometry',
    description: 'Solving for unknown angles using algebraic expressions',
    type: 'algebraic_angles_parallel',
    defaultOptions: {
        title: 'Algebraic Angles in Parallel Lines',
        showExpressions: true,
        showSolution: true,
        showDiagram: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'twoColumnProofParallelLinesDiagram': {
    name: 'Two-Column Proof for Parallel Lines',
    category: 'Geometry',
    description: 'Formal two-column proof using parallel line theorems',
    type: 'two_column_proof_parallel',
    defaultOptions: {
        title: 'Two-Column Proof: Parallel Lines',
        showStatements: true,
        showReasons: true,
        showDiagram: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'interceptTheoremThreeParallelLinesDiagram': {
    name: 'Intercept Theorem (Three Parallel Lines)',
    category: 'Geometry',
    description: 'Intercept theorem applied to three parallel lines',
    type: 'intercept_theorem_parallel',
    defaultOptions: {
        title: 'Intercept Theorem',
        showThreeLines: true,
        showInterceptions: true,
        showRatios: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'architectureAndNavigationParallelLinesDiagram': {
    name: 'Architecture and Navigation Parallel Lines',
    category: 'Geometry',
    description: 'Real-world applications of parallel lines in architecture and navigation',
    type: 'architecture_navigation_parallel',
    defaultOptions: {
        title: 'Parallel Lines: Architecture and Navigation',
        showArchitecture: true,
        showNavigation: true,
        showAnnotations: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

// ===== ALGEBRA =====
'simplificationDecisionFlowchart': {
    name: 'Simplification Decision Flowchart',
    category: 'Algebra',
    description: 'Flowchart guiding the simplification of algebraic expressions',
    type: 'simplification_flowchart',
    defaultOptions: {
        title: 'Simplification Decision Flowchart',
        showDecisionNodes: true,
        showSteps: true,
        showExamples: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'likeTermsGroupingDiagram': {
    name: 'Like Terms Grouping',
    category: 'Algebra',
    description: 'Identifying and grouping like terms visually',
    type: 'like_terms_grouping',
    defaultOptions: {
        title: 'Like Terms Grouping',
        showGrouping: true,
        showColourCoding: true,
        showResult: true,
        width: 800,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'foilExpansionDiagram': {
    name: 'FOIL Expansion',
    category: 'Algebra',
    description: 'FOIL method for expanding two binomials',
    type: 'foil_expansion',
    defaultOptions: {
        title: 'FOIL Expansion',
        showFOILArrows: true,
        showTerms: true,
        showResult: true,
        width: 800,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'factorisationTypesDiagram': {
    name: 'Factorisation Types',
    category: 'Algebra',
    description: 'Overview of all major factorisation methods',
    type: 'factorisation_types',
    defaultOptions: {
        title: 'Factorisation Types',
        showCommonFactor: true,
        showDifferenceOfSquares: true,
        showQuadratic: true,
        showGrouping: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'indexLawsSummaryDiagram': {
    name: 'Index Laws Summary',
    category: 'Algebra',
    description: 'All index laws displayed with examples',
    type: 'index_laws_summary',
    defaultOptions: {
        title: 'Index Laws Summary',
        showAllLaws: true,
        showExamples: true,
        showFormulae: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'algebraicFractionCancellationDiagram': {
    name: 'Algebraic Fraction Cancellation',
    category: 'Algebra',
    description: 'Cancelling common factors in algebraic fractions',
    type: 'algebraic_fraction_cancellation',
    defaultOptions: {
        title: 'Algebraic Fraction Cancellation',
        showNumerator: true,
        showDenominator: true,
        showCancellation: true,
        width: 800,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'surdSimplificationFlowchart': {
    name: 'Surd Simplification Flowchart',
    category: 'Algebra',
    description: 'Decision flowchart for simplifying surds',
    type: 'surd_simplification_flowchart',
    defaultOptions: {
        title: 'Surd Simplification Flowchart',
        showDecisionNodes: true,
        showSteps: true,
        showExamples: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'multiStepSimplificationFlowchart': {
    name: 'Multi-Step Simplification Flowchart',
    category: 'Algebra',
    description: 'Flowchart for multi-step algebraic simplification',
    type: 'multi_step_simplification_flowchart',
    defaultOptions: {
        title: 'Multi-Step Simplification Flowchart',
        showSteps: true,
        showDecisionPoints: true,
        showExamples: true,
        width: 900,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'expressionTypeDecisionTree': {
    name: 'Expression Type Decision Tree',
    category: 'Algebra',
    description: 'Decision tree for classifying algebraic expression types',
    type: 'expression_type_decision_tree',
    defaultOptions: {
        title: 'Expression Type Decision Tree',
        showBranches: true,
        showLabels: true,
        showExamples: true,
        width: 1000,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'commonAlgebraErrorsDiagram': {
    name: 'Common Algebra Errors',
    category: 'Algebra',
    description: 'Illustrates frequent algebraic mistakes and corrections',
    type: 'common_algebra_errors',
    defaultOptions: {
        title: 'Common Algebra Errors',
        showError: true,
        showCorrection: true,
        showExplanation: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'differenceQuotientDiagram': {
    name: 'Difference Quotient',
    category: 'Algebra',
    description: 'Geometric and algebraic representation of the difference quotient',
    type: 'difference_quotient',
    defaultOptions: {
        title: 'Difference Quotient',
        showCurve: true,
        showSecantLine: true,
        showFormula: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'rationalVsIrrationalNumberLineDiagram': {
    name: 'Rational vs Irrational Number Line',
    category: 'Algebra',
    description: 'Number line distinguishing rational and irrational numbers',
    type: 'rational_irrational_number_line',
    defaultOptions: {
        title: 'Rational vs Irrational Number Line',
        showRationals: true,
        showIrrationals: true,
        showNumberLine: true,
        width: 900,
        height: 400,
        backgroundColor: '#ffffff'
    }
},
'perfectSquareFactorTreeDiagram': {
    name: 'Perfect Square Factor Tree',
    category: 'Algebra',
    description: 'Factor tree identifying perfect square factors of a surd',
    type: 'perfect_square_factor_tree',
    defaultOptions: {
        title: 'Perfect Square Factor Tree',
        showFactorTree: true,
        showPerfectSquares: true,
        showSimplification: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'surdMultiplicationGridDiagram': {
    name: 'Surd Multiplication Grid',
    category: 'Algebra',
    description: 'Grid method for multiplying surd expressions',
    type: 'surd_multiplication_grid',
    defaultOptions: {
        title: 'Surd Multiplication Grid',
        showGrid: true,
        showTerms: true,
        showResult: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'conjugatePairsDiagram': {
    name: 'Conjugate Pairs',
    category: 'Algebra',
    description: 'Conjugate pairs used to rationalise denominators',
    type: 'conjugate_pairs',
    defaultOptions: {
        title: 'Conjugate Pairs',
        showPair: true,
        showProduct: true,
        showRationalisation: true,
        width: 800,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'squaringBothSidesFlowchart': {
    name: 'Squaring Both Sides Flowchart',
    category: 'Algebra',
    description: 'When and how to square both sides to solve surd equations',
    type: 'squaring_both_sides_flowchart',
    defaultOptions: {
        title: 'Squaring Both Sides',
        showConditions: true,
        showSteps: true,
        showExtraneousRootWarning: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'nestedRadicalsDiagram': {
    name: 'Nested Radicals',
    category: 'Algebra',
    description: 'Simplifying expressions with nested square roots',
    type: 'nested_radicals',
    defaultOptions: {
        title: 'Nested Radicals',
        showNested: true,
        showSimplification: true,
        showSteps: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'pythagoreanSurdTriangleDiagram': {
    name: 'Pythagorean Surd Triangle',
    category: 'Algebra',
    description: 'Right triangle with surd side lengths using Pythagoras',
    type: 'pythagorean_surd_triangle',
    defaultOptions: {
        title: 'Pythagorean Surd Triangle',
        showTriangle: true,
        showSurdSides: true,
        showCalculation: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'algebraicFractionAnatomyDiagram': {
    name: 'Algebraic Fraction Anatomy',
    category: 'Algebra',
    description: 'Parts of an algebraic fraction labelled',
    type: 'algebraic_fraction_anatomy',
    defaultOptions: {
        title: 'Algebraic Fraction Anatomy',
        showNumerator: true,
        showDenominator: true,
        showFractionBar: true,
        width: 800,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'cancellingCommonFactorsDiagram': {
    name: 'Cancelling Common Factors',
    category: 'Algebra',
    description: 'Step-by-step cancellation of common factors',
    type: 'cancelling_common_factors',
    defaultOptions: {
        title: 'Cancelling Common Factors',
        showFactors: true,
        showCancellation: true,
        showResult: true,
        width: 800,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'algebraicFractionMultiplicationDiagram': {
    name: 'Algebraic Fraction Multiplication',
    category: 'Algebra',
    description: 'Multiplying algebraic fractions with cancellation',
    type: 'algebraic_fraction_multiplication',
    defaultOptions: {
        title: 'Algebraic Fraction Multiplication',
        showFractions: true,
        showCancellation: true,
        showResult: true,
        width: 900,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'lowestCommonDenominatorDiagram': {
    name: 'Lowest Common Denominator',
    category: 'Algebra',
    description: 'Finding LCD for adding/subtracting algebraic fractions',
    type: 'lowest_common_denominator',
    defaultOptions: {
        title: 'Lowest Common Denominator',
        showFractions: true,
        showLCD: true,
        showEquivalentFractions: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'compoundFractionStructureDiagram': {
    name: 'Compound Fraction Structure',
    category: 'Algebra',
    description: 'Structure and simplification of compound fractions',
    type: 'compound_fraction_structure',
    defaultOptions: {
        title: 'Compound Fraction Structure',
        showStructure: true,
        showSimplification: true,
        showSteps: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'workRateProblemDiagram': {
    name: 'Work Rate Problem',
    category: 'Algebra',
    description: 'Algebraic fractions applied to work rate problems',
    type: 'work_rate_problem',
    defaultOptions: {
        title: 'Work Rate Problem',
        showRates: true,
        showCombined: true,
        showSolution: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'baseExponentNotationDiagram': {
    name: 'Base and Exponent Notation',
    category: 'Algebra',
    description: 'Base, exponent and power labelled in exponential notation',
    type: 'base_exponent_notation',
    defaultOptions: {
        title: 'Base and Exponent Notation',
        showBase: true,
        showExponent: true,
        showPower: true,
        width: 800,
        height: 400,
        backgroundColor: '#ffffff'
    }
},
'positiveNegativeZeroExponentChart': {
    name: 'Positive, Negative and Zero Exponent Chart',
    category: 'Algebra',
    description: 'Comparison chart of positive, negative and zero exponents',
    type: 'exponent_chart',
    defaultOptions: {
        title: 'Positive, Negative and Zero Exponents',
        showPositive: true,
        showNegative: true,
        showZero: true,
        showExamples: true,
        width: 1000,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'indexLawsSummaryTable': {
    name: 'Index Laws Summary Table',
    category: 'Algebra',
    description: 'Tabular summary of all index laws with examples',
    type: 'index_laws_table',
    defaultOptions: {
        title: 'Index Laws Summary Table',
        showAllLaws: true,
        showExamples: true,
        showFormulae: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'fractionalExponentRootDiagram': {
    name: 'Fractional Exponent and Root',
    category: 'Algebra',
    description: 'Relationship between fractional exponents and roots',
    type: 'fractional_exponent_root',
    defaultOptions: {
        title: 'Fractional Exponent and Root',
        showFractionalForm: true,
        showRadicalForm: true,
        showExamples: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'algebraicSimplificationFlowchart': {
    name: 'Algebraic Simplification Flowchart',
    category: 'Algebra',
    description: 'Step-by-step flowchart for simplifying index expressions',
    type: 'algebraic_simplification_flowchart',
    defaultOptions: {
        title: 'Algebraic Simplification Flowchart',
        showDecisionNodes: true,
        showSteps: true,
        showExamples: true,
        width: 900,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'powersOfTenNumberLine': {
    name: 'Powers of Ten Number Line',
    category: 'Algebra',
    description: 'Number line showing powers of ten on a logarithmic scale',
    type: 'powers_of_ten_number_line',
    defaultOptions: {
        title: 'Powers of Ten Number Line',
        showPowers: true,
        showLabels: true,
        showScale: true,
        width: 1000,
        height: 400,
        backgroundColor: '#ffffff'
    }
},
'sameBaseSolvingDiagram': {
    name: 'Same Base Solving',
    category: 'Algebra',
    description: 'Solving exponential equations by equating exponents',
    type: 'same_base_solving',
    defaultOptions: {
        title: 'Same Base Solving',
        showSteps: true,
        showEquation: true,
        showSolution: true,
        width: 800,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'scientificNotationPlaceValueChart': {
    name: 'Scientific Notation Place Value Chart',
    category: 'Algebra',
    description: 'Place value chart for converting to/from scientific notation',
    type: 'scientific_notation_place_value',
    defaultOptions: {
        title: 'Scientific Notation Place Value Chart',
        showPlaceValues: true,
        showExamples: true,
        showConversion: true,
        width: 1000,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'exponentialGrowthDecayCurves': {
    name: 'Exponential Growth and Decay Curves',
    category: 'Algebra',
    description: 'Graphs of exponential growth and decay functions',
    type: 'exponential_growth_decay',
    defaultOptions: {
        title: 'Exponential Growth and Decay',
        showGrowth: true,
        showDecay: true,
        showGrid: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'compoundInterestGrowthGraph': {
    name: 'Compound Interest Growth Graph',
    category: 'Algebra',
    description: 'Graph showing compound interest as exponential growth',
    type: 'compound_interest_graph',
    defaultOptions: {
        title: 'Compound Interest Growth',
        showGraph: true,
        showFormula: true,
        showAnnotations: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'termCoefficientVariablePartDiagram': {
    name: 'Term, Coefficient and Variable Part',
    category: 'Algebra',
    description: 'Anatomy of an algebraic term labelled',
    type: 'term_anatomy',
    defaultOptions: {
        title: 'Term, Coefficient and Variable Part',
        showCoefficient: true,
        showVariable: true,
        showExponent: true,
        width: 800,
        height: 400,
        backgroundColor: '#ffffff'
    }
},
'likeVsUnlikeTermsSortingChart': {
    name: 'Like vs Unlike Terms Sorting Chart',
    category: 'Algebra',
    description: 'Chart sorting like and unlike algebraic terms',
    type: 'like_unlike_terms_chart',
    defaultOptions: {
        title: 'Like vs Unlike Terms',
        showLikeTerms: true,
        showUnlikeTerms: true,
        showColourCoding: true,
        width: 900,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'singleVariableCollectionNumberLine': {
    name: 'Single Variable Collection on Number Line',
    category: 'Algebra',
    description: 'Collecting like terms for a single variable on a number line',
    type: 'single_variable_number_line',
    defaultOptions: {
        title: 'Single Variable Collection',
        showNumberLine: true,
        showTerms: true,
        showResult: true,
        width: 900,
        height: 400,
        backgroundColor: '#ffffff'
    }
},
'multiVariableGroupingDiagram': {
    name: 'Multi-Variable Grouping',
    category: 'Algebra',
    description: 'Grouping and collecting like terms with multiple variables',
    type: 'multi_variable_grouping',
    defaultOptions: {
        title: 'Multi-Variable Grouping',
        showGrouping: true,
        showColourCoding: true,
        showResult: true,
        width: 900,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'polynomialDescendingOrderDiagram': {
    name: 'Polynomial in Descending Order',
    category: 'Algebra',
    description: 'Writing a polynomial with terms in descending degree order',
    type: 'polynomial_descending_order',
    defaultOptions: {
        title: 'Polynomial in Descending Order',
        showTerms: true,
        showOrdering: true,
        showDegrees: true,
        width: 900,
        height: 400,
        backgroundColor: '#ffffff'
    }
},
'fractionalCoefficientNumberLine': {
    name: 'Fractional Coefficient Number Line',
    category: 'Algebra',
    description: 'Number line for collecting terms with fractional coefficients',
    type: 'fractional_coefficient_number_line',
    defaultOptions: {
        title: 'Fractional Coefficient Number Line',
        showNumberLine: true,
        showFractions: true,
        showResult: true,
        width: 900,
        height: 400,
        backgroundColor: '#ffffff'
    }
},
'bracketSignExpansionDiagram': {
    name: 'Bracket Sign Expansion',
    category: 'Algebra',
    description: 'Effect of positive and negative sign outside a bracket',
    type: 'bracket_sign_expansion',
    defaultOptions: {
        title: 'Bracket Sign Expansion',
        showPositiveBracket: true,
        showNegativeBracket: true,
        showResult: true,
        width: 900,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'polynomialAdditionSubtractionLayout': {
    name: 'Polynomial Addition and Subtraction Layout',
    category: 'Algebra',
    description: 'Vertical layout for adding and subtracting polynomials',
    type: 'polynomial_add_subtract_layout',
    defaultOptions: {
        title: 'Polynomial Addition and Subtraction',
        showVerticalLayout: true,
        showLikeTerms: true,
        showResult: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'zeroResultCancellationDiagram': {
    name: 'Zero Result Cancellation',
    category: 'Algebra',
    description: 'Opposite terms cancelling to give zero',
    type: 'zero_result_cancellation',
    defaultOptions: {
        title: 'Zero Result Cancellation',
        showOppositePairs: true,
        showCancellation: true,
        showResult: true,
        width: 800,
        height: 400,
        backgroundColor: '#ffffff'
    }
},
'perimeterAlgebraicExpressionDiagram': {
    name: 'Perimeter as Algebraic Expression',
    category: 'Algebra',
    description: 'Writing perimeter of a shape as an algebraic expression',
    type: 'perimeter_algebraic',
    defaultOptions: {
        title: 'Perimeter as Algebraic Expression',
        showShape: true,
        showSides: true,
        showExpression: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'distributiveLawAreaModel': {
    name: 'Distributive Law Area Model',
    category: 'Algebra',
    description: 'Area model demonstrating the distributive law',
    type: 'distributive_law_area_model',
    defaultOptions: {
        title: 'Distributive Law Area Model',
        showRectangle: true,
        showPartitions: true,
        showExpression: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'numericDistributionArrowDiagram': {
    name: 'Numeric Distribution Arrow',
    category: 'Algebra',
    description: 'Arrow diagram showing numeric distribution',
    type: 'numeric_distribution_arrow',
    defaultOptions: {
        title: 'Numeric Distribution',
        showArrows: true,
        showTerms: true,
        showResult: true,
        width: 800,
        height: 400,
        backgroundColor: '#ffffff'
    }
},
'variableMultiplierIndexLawLink': {
    name: 'Variable Multiplier and Index Law Link',
    category: 'Algebra',
    description: 'Connecting variable multiplication to index laws',
    type: 'variable_multiplier_index_law',
    defaultOptions: {
        title: 'Variable Multiplier and Index Law',
        showMultiplication: true,
        showIndexLaw: true,
        showConnection: true,
        width: 900,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'FOILGridMethodDiagram': {
    name: 'FOIL Grid Method',
    category: 'Algebra',
    description: 'Grid/table method for expanding two binomials',
    type: 'foil_grid_method',
    defaultOptions: {
        title: 'FOIL Grid Method',
        showGrid: true,
        showTerms: true,
        showResult: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'perfectSquareDifferenceOfSquaresDiagram': {
    name: 'Perfect Square and Difference of Squares',
    category: 'Algebra',
    description: 'Special expansions: perfect square and difference of squares',
    type: 'perfect_square_difference_squares',
    defaultOptions: {
        title: 'Perfect Square and Difference of Squares',
        showPerfectSquare: true,
        showDifferenceOfSquares: true,
        showGeometric: true,
        width: 1000,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'pascalsTriangleBinomialExpansion': {
    name: "Pascal's Triangle Binomial Expansion",
    category: 'Algebra',
    description: "Pascal's triangle used for binomial expansion coefficients",
    type: 'pascals_triangle_binomial',
    defaultOptions: {
        title: "Pascal's Triangle",
        showTriangle: true,
        showExpansion: true,
        showCoefficients: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'negativeMultiplierSignFlipDiagram': {
    name: 'Negative Multiplier Sign Flip',
    category: 'Algebra',
    description: 'Sign change when multiplying by a negative number',
    type: 'negative_multiplier_sign_flip',
    defaultOptions: {
        title: 'Negative Multiplier Sign Flip',
        showSignChange: true,
        showExamples: true,
        showArrows: true,
        width: 800,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'expandCollectSimplifyFlowchart': {
    name: 'Expand, Collect and Simplify Flowchart',
    category: 'Algebra',
    description: 'Process flowchart for expand → collect → simplify',
    type: 'expand_collect_simplify_flowchart',
    defaultOptions: {
        title: 'Expand, Collect and Simplify',
        showSteps: true,
        showExamples: true,
        showDecisionPoints: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'bracketEquationSolvingStepsDiagram': {
    name: 'Bracket Equation Solving Steps',
    category: 'Algebra',
    description: 'Step-by-step solving of equations with brackets',
    type: 'bracket_equation_steps',
    defaultOptions: {
        title: 'Bracket Equation Solving',
        showSteps: true,
        showExpansion: true,
        showSolution: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'algebraicAreaVolumeModel': {
    name: 'Algebraic Area and Volume Model',
    category: 'Algebra',
    description: 'Area and volume expressed using algebraic expansion',
    type: 'algebraic_area_volume_model',
    defaultOptions: {
        title: 'Algebraic Area and Volume Model',
        showArea: true,
        showVolume: true,
        showExpression: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'variableReplacementDiagram': {
    name: 'Variable Replacement',
    category: 'Algebra',
    description: 'Substituting a value for a variable in an expression',
    type: 'variable_replacement',
    defaultOptions: {
        title: 'Variable Replacement',
        showVariable: true,
        showValue: true,
        showResult: true,
        width: 800,
        height: 400,
        backgroundColor: '#ffffff'
    }
},
'linearExpressionSubstitutionTable': {
    name: 'Linear Expression Substitution Table',
    category: 'Algebra',
    description: 'Table of values from substituting into a linear expression',
    type: 'linear_substitution_table',
    defaultOptions: {
        title: 'Linear Expression Substitution Table',
        showExpression: true,
        showTable: true,
        showValues: true,
        width: 900,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'negativeBaseEvenOddPowerDiagram': {
    name: 'Negative Base with Even and Odd Powers',
    category: 'Algebra',
    description: 'Sign rules for negative base raised to even or odd powers',
    type: 'negative_base_powers',
    defaultOptions: {
        title: 'Negative Base: Even and Odd Powers',
        showEvenPower: true,
        showOddPower: true,
        showSignRule: true,
        width: 900,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'twoVariableSubstitutionGrid': {
    name: 'Two-Variable Substitution Grid',
    category: 'Algebra',
    description: 'Grid for substituting two variables into an expression',
    type: 'two_variable_substitution_grid',
    defaultOptions: {
        title: 'Two-Variable Substitution Grid',
        showGrid: true,
        showExpression: true,
        showValues: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'formulaSubstitutionReferenceSheet': {
    name: 'Formula Substitution Reference Sheet',
    category: 'Algebra',
    description: 'Reference sheet for substituting into standard formulae',
    type: 'formula_substitution_reference',
    defaultOptions: {
        title: 'Formula Substitution Reference',
        showFormulae: true,
        showSubstitution: true,
        showExamples: true,
        width: 1000,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'quadraticRootCheckDiagram': {
    name: 'Quadratic Root Check',
    category: 'Algebra',
    description: 'Verifying quadratic roots by substitution',
    type: 'quadratic_root_check',
    defaultOptions: {
        title: 'Quadratic Root Check',
        showRoots: true,
        showSubstitution: true,
        showVerification: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'lhsRhsVerificationDiagram': {
    name: 'LHS = RHS Verification',
    category: 'Algebra',
    description: 'Verifying an equation by checking LHS equals RHS',
    type: 'lhs_rhs_verification',
    defaultOptions: {
        title: 'LHS = RHS Verification',
        showLHS: true,
        showRHS: true,
        showEquality: true,
        width: 900,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'functionMachineInputOutputDiagram': {
    name: 'Function Machine Input-Output',
    category: 'Algebra',
    description: 'Function machine showing input, rule and output',
    type: 'function_machine',
    defaultOptions: {
        title: 'Function Machine',
        showInput: true,
        showRule: true,
        showOutput: true,
        width: 800,
        height: 400,
        backgroundColor: '#ffffff'
    }
},
'bidmasMultiStepExpressionDiagram': {
    name: 'BIDMAS Multi-Step Expression',
    category: 'Algebra',
    description: 'Order of operations applied to a multi-step expression',
    type: 'bidmas_multi_step',
    defaultOptions: {
        title: 'BIDMAS Multi-Step Expression',
        showOrderOfOperations: true,
        showSteps: true,
        showResult: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'scienceFormulaSubstitutionExamples': {
    name: 'Science Formula Substitution Examples',
    category: 'Algebra',
    description: 'Substitution into physics and chemistry formulae',
    type: 'science_formula_substitution',
    defaultOptions: {
        title: 'Science Formula Substitution',
        showFormulae: true,
        showSubstitution: true,
        showUnits: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

// ===== MEASUREMENT =====
'degreesVsRadiansCircle': {
    name: 'Degrees vs Radians Circle',
    category: 'Measurement',
    description: 'Circle showing degree and radian equivalents',
    type: 'degrees_vs_radians',
    defaultOptions: {
        title: 'Degrees vs Radians',
        showDegrees: true,
        showRadians: true,
        showKeyAngles: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'arcLengthSectorDiagram': {
    name: 'Arc Length Sector',
    category: 'Measurement',
    description: 'Sector with arc length formula labelled',
    type: 'arc_length_sector',
    defaultOptions: {
        title: 'Arc Length of a Sector',
        showSector: true,
        showArcLength: true,
        showFormula: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'sectorWithLabelledArcAndRadii': {
    name: 'Sector with Labelled Arc and Radii',
    category: 'Measurement',
    description: 'Sector diagram with arc, radii and angle labelled',
    type: 'sector_labelled',
    defaultOptions: {
        title: 'Sector: Arc and Radii',
        showArc: true,
        showRadii: true,
        showAngle: true,
        showLabels: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'unitCircleRadianDefinition': {
    name: 'Unit Circle Radian Definition',
    category: 'Measurement',
    description: 'Radian defined on the unit circle',
    type: 'unit_circle_radian',
    defaultOptions: {
        title: 'Unit Circle Radian Definition',
        showUnitCircle: true,
        showArc: true,
        showAngle: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'sectorAndSegmentAreaDiagram': {
    name: 'Sector and Segment Area',
    category: 'Measurement',
    description: 'Area formulas for sector and circular segment',
    type: 'sector_segment_area',
    defaultOptions: {
        title: 'Sector and Segment Area',
        showSector: true,
        showSegment: true,
        showFormulae: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'circleOnCoordinatePlane': {
    name: 'Circle on Coordinate Plane',
    category: 'Measurement',
    description: 'Circle plotted on coordinate plane with equation',
    type: 'circle_coordinate_plane',
    defaultOptions: {
        title: 'Circle on Coordinate Plane',
        showCircle: true,
        showCentre: true,
        showRadius: true,
        showEquation: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'integralArcLengthInfinitesimalDs': {
    name: 'Integral Arc Length (Infinitesimal ds)',
    category: 'Measurement',
    description: 'Infinitesimal arc element ds for integral arc length',
    type: 'integral_arc_length',
    defaultOptions: {
        title: 'Integral Arc Length',
        showCurve: true,
        showDs: true,
        showIntegral: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'concentricCirclesArcComparison': {
    name: 'Concentric Circles Arc Comparison',
    category: 'Measurement',
    description: 'Same angle subtends different arc lengths on concentric circles',
    type: 'concentric_circles_arc',
    defaultOptions: {
        title: 'Concentric Circles Arc Comparison',
        showConcentricCircles: true,
        showSameAngle: true,
        showArcComparison: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'roadCurveArcLengthDiagram': {
    name: 'Road Curve Arc Length',
    category: 'Measurement',
    description: 'Applied arc length problem using a road curve',
    type: 'road_curve_arc_length',
    defaultOptions: {
        title: 'Road Curve Arc Length',
        showCurve: true,
        showRadius: true,
        showArcLength: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'rightTriangleLegsHypotenuse': {
    name: 'Right Triangle Legs and Hypotenuse',
    category: 'Measurement',
    description: 'Right triangle with legs and hypotenuse labelled',
    type: 'right_triangle_legs_hypotenuse',
    defaultOptions: {
        title: 'Right Triangle: Legs and Hypotenuse',
        showLegs: true,
        showHypotenuse: true,
        showRightAngle: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'pythagoreanTheoremSquaresOnSides': {
    name: 'Pythagorean Theorem Squares on Sides',
    category: 'Measurement',
    description: 'Squares drawn on each side of a right triangle',
    type: 'pythagorean_squares_on_sides',
    defaultOptions: {
        title: "Pythagorean Theorem: Squares on Sides",
        showSquares: true,
        showAreas: true,
        showRelationship: true,
        width: 900,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'rearrangementProofFourTriangles': {
    name: 'Rearrangement Proof (Four Triangles)',
    category: 'Measurement',
    description: 'Visual proof of Pythagoras by rearranging four triangles',
    type: 'rearrangement_proof',
    defaultOptions: {
        title: 'Rearrangement Proof',
        showFourTriangles: true,
        showRearrangement: true,
        showProof: true,
        width: 900,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'pythagoreanTriplesFamilyTree': {
    name: 'Pythagorean Triples Family Tree',
    category: 'Measurement',
    description: 'Family tree of primitive and derived Pythagorean triples',
    type: 'pythagorean_triples_tree',
    defaultOptions: {
        title: 'Pythagorean Triples',
        showPrimitive: true,
        showDerived: true,
        showTree: true,
        width: 1000,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'triangleClassificationByConverse': {
    name: 'Triangle Classification by Pythagorean Converse',
    category: 'Measurement',
    description: 'Classifying triangles as acute, right or obtuse using converse',
    type: 'triangle_classification_converse',
    defaultOptions: {
        title: 'Triangle Classification by Converse',
        showAcute: true,
        showRight: true,
        showObtuse: true,
        width: 1000,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'rectangleDiagonalPythagorean': {
    name: 'Rectangle Diagonal (Pythagorean)',
    category: 'Measurement',
    description: 'Finding the diagonal of a rectangle using Pythagoras',
    type: 'rectangle_diagonal',
    defaultOptions: {
        title: 'Rectangle Diagonal',
        showRectangle: true,
        showDiagonal: true,
        showCalculation: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'rectangularBoxSpaceDiagonal': {
    name: 'Rectangular Box Space Diagonal',
    category: 'Measurement',
    description: 'Space diagonal of a rectangular box using 3D Pythagoras',
    type: 'rectangular_box_diagonal',
    defaultOptions: {
        title: 'Rectangular Box Space Diagonal',
        show3DBox: true,
        showDiagonal: true,
        showCalculation: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'distanceFormulaCoordinatePlane': {
    name: 'Distance Formula on Coordinate Plane',
    category: 'Measurement',
    description: 'Deriving and applying the distance formula',
    type: 'distance_formula_plane',
    defaultOptions: {
        title: 'Distance Formula',
        showPoints: true,
        showFormula: true,
        showDiagram: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'pythagoreanIdentityUnitCircle': {
    name: 'Pythagorean Identity on Unit Circle',
    category: 'Measurement',
    description: 'sin²θ + cos²θ = 1 shown on unit circle',
    type: 'pythagorean_identity_circle',
    defaultOptions: {
        title: 'Pythagorean Identity on Unit Circle',
        showUnitCircle: true,
        showIdentity: true,
        showTriangle: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'nDimensionalDistanceDiagram': {
    name: 'N-Dimensional Distance',
    category: 'Measurement',
    description: 'Extension of distance formula to n dimensions',
    type: 'n_dimensional_distance',
    defaultOptions: {
        title: 'N-Dimensional Distance',
        show2D: true,
        show3D: true,
        showNd: true,
        width: 1000,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'constructionSquaringCornersDiagram': {
    name: 'Construction Squaring Corners',
    category: 'Measurement',
    description: 'Using 3-4-5 triangle to square a corner in construction',
    type: 'construction_squaring_corners',
    defaultOptions: {
        title: 'Construction Squaring Corners',
        showTriangle: true,
        showApplication: true,
        showMeasurements: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'northReferenceDirectionArrow': {
    name: 'North Reference Direction Arrow',
    category: 'Measurement',
    description: 'North reference arrow for bearing problems',
    type: 'north_reference_arrow',
    defaultOptions: {
        title: 'North Reference Direction',
        showNorthArrow: true,
        showLabels: true,
        showGrid: true,
        width: 600,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'eightPointCompassRose': {
    name: 'Eight-Point Compass Rose',
    category: 'Measurement',
    description: 'Eight-point compass rose with cardinal and intercardinal directions',
    type: 'eight_point_compass',
    defaultOptions: {
        title: 'Eight-Point Compass Rose',
        showCardinal: true,
        showIntercardinal: true,
        showDegrees: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'threeFigureBearingProtractorDiagram': {
    name: 'Three-Figure Bearing Protractor',
    category: 'Measurement',
    description: 'Reading three-figure bearings using a protractor',
    type: 'three_figure_bearing',
    defaultOptions: {
        title: 'Three-Figure Bearing',
        showProtractor: true,
        showNorth: true,
        showBearing: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'backBearingParallelNorthLines': {
    name: 'Back Bearing with Parallel North Lines',
    category: 'Measurement',
    description: 'Calculating back bearing using parallel north lines',
    type: 'back_bearing_parallel',
    defaultOptions: {
        title: 'Back Bearing',
        showNorthLines: true,
        showBearing: true,
        showBackBearing: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'protractorBearingConstructionDiagram': {
    name: 'Protractor Bearing Construction',
    category: 'Measurement',
    description: 'Constructing a bearing using a protractor step by step',
    type: 'protractor_bearing_construction',
    defaultOptions: {
        title: 'Protractor Bearing Construction',
        showSteps: true,
        showProtractor: true,
        showNorth: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'northingEastingComponentsDiagram': {
    name: 'Northing and Easting Components',
    category: 'Measurement',
    description: 'Resolving a bearing into northing and easting components',
    type: 'northing_easting_components',
    defaultOptions: {
        title: 'Northing and Easting Components',
        showComponents: true,
        showBearing: true,
        showLabels: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'twoLegJourneyResultantVector': {
    name: 'Two-Leg Journey Resultant Vector',
    category: 'Measurement',
    description: 'Finding the resultant displacement of a two-leg journey',
    type: 'two_leg_journey_resultant',
    defaultOptions: {
        title: 'Two-Leg Journey Resultant',
        showLegs: true,
        showResultant: true,
        showBearings: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'interiorAngleFromBearingsDiagram': {
    name: 'Interior Angle from Bearings',
    category: 'Measurement',
    description: 'Calculating interior angle between two bearings',
    type: 'interior_angle_bearings',
    defaultOptions: {
        title: 'Interior Angle from Bearings',
        showBearings: true,
        showInteriorAngle: true,
        showCalculation: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'bearingLociAndIntersectionDiagram': {
    name: 'Bearing Loci and Intersection',
    category: 'Measurement',
    description: 'Finding a position using intersecting bearing loci',
    type: 'bearing_loci_intersection',
    defaultOptions: {
        title: 'Bearing Loci and Intersection',
        showLoci: true,
        showIntersection: true,
        showBearings: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'maritimeNavigationBearingFix': {
    name: 'Maritime Navigation Bearing Fix',
    category: 'Measurement',
    description: 'Fixing position at sea using two or more bearings',
    type: 'maritime_bearing_fix',
    defaultOptions: {
        title: 'Maritime Bearing Fix',
        showBearings: true,
        showFix: true,
        showMap: true,
        width: 900,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'bearingDiagramAnnotatedStepByStep': {
    name: 'Bearing Diagram Annotated Step-by-Step',
    category: 'Measurement',
    description: 'Fully annotated step-by-step bearing diagram',
    type: 'bearing_annotated_steps',
    defaultOptions: {
        title: 'Bearing Diagram Step-by-Step',
        showSteps: true,
        showAnnotations: true,
        showNorth: true,
        width: 900,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'perimeterBoundaryDiagram': {
    name: 'Perimeter Boundary',
    category: 'Measurement',
    description: 'Perimeter as the boundary/total distance around a shape',
    type: 'perimeter_boundary',
    defaultOptions: {
        title: 'Perimeter Boundary',
        showBoundary: true,
        showMeasurements: true,
        showTotal: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'triangleTypesPerimeterDiagram': {
    name: 'Triangle Types Perimeter',
    category: 'Measurement',
    description: 'Perimeter of different triangle types',
    type: 'triangle_perimeter',
    defaultOptions: {
        title: 'Triangle Types Perimeter',
        showScalene: true,
        showIsosceles: true,
        showEquilateral: true,
        width: 1000,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'quadrilateralFamilyDiagram': {
    name: 'Quadrilateral Family',
    category: 'Measurement',
    description: 'Family of quadrilaterals with perimeter formulas',
    type: 'quadrilateral_family',
    defaultOptions: {
        title: 'Quadrilateral Family',
        showSquare: true,
        showRectangle: true,
        showRhombus: true,
        showParallelogram: true,
        showTrapezium: true,
        width: 1200,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'regularPolygonsDiagram': {
    name: 'Regular Polygons',
    category: 'Measurement',
    description: 'Regular polygons with side lengths and perimeter formulas',
    type: 'regular_polygons',
    defaultOptions: {
        title: 'Regular Polygons',
        showPolygons: true,
        showSideLength: true,
        showFormula: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'circleRadiusDiameterDiagram': {
    name: 'Circle Radius and Diameter',
    category: 'Measurement',
    description: 'Circle with radius, diameter and circumference labelled',
    type: 'circle_radius_diameter',
    defaultOptions: {
        title: 'Circle: Radius and Diameter',
        showRadius: true,
        showDiameter: true,
        showCircumference: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'compositeShapeBoundaryDiagram': {
    name: 'Composite Shape Boundary',
    category: 'Measurement',
    description: 'Perimeter of composite shapes identifying outer boundary',
    type: 'composite_shape_boundary',
    defaultOptions: {
        title: 'Composite Shape Boundary',
        showShape: true,
        showBoundary: true,
        showMeasurements: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'coordinateGridDistanceDiagram': {
    name: 'Coordinate Grid Distance',
    category: 'Measurement',
    description: 'Perimeter problems on a coordinate grid',
    type: 'coordinate_grid_distance',
    defaultOptions: {
        title: 'Coordinate Grid Distance',
        showGrid: true,
        showShape: true,
        showDistances: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'arcAndSectorDiagram': {
    name: 'Arc and Sector',
    category: 'Measurement',
    description: 'Arc length and sector perimeter labelled',
    type: 'arc_and_sector',
    defaultOptions: {
        title: 'Arc and Sector',
        showArc: true,
        showSector: true,
        showLabels: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'algebraicSidesDiagram': {
    name: 'Algebraic Sides',
    category: 'Measurement',
    description: 'Shapes with algebraic expressions as side lengths',
    type: 'algebraic_sides',
    defaultOptions: {
        title: 'Algebraic Sides',
        showShape: true,
        showExpressions: true,
        showPerimeter: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'fencingAndFramingDiagram': {
    name: 'Fencing and Framing',
    category: 'Measurement',
    description: 'Applied perimeter problems: fencing and framing',
    type: 'fencing_framing',
    defaultOptions: {
        title: 'Fencing and Framing',
        showFencing: true,
        showFraming: true,
        showCalculation: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'squareUnitGridDiagram': {
    name: 'Square Unit Grid',
    category: 'Measurement',
    description: 'Area measured by counting unit squares on a grid',
    type: 'square_unit_grid',
    defaultOptions: {
        title: 'Square Unit Grid',
        showGrid: true,
        showShading: true,
        showCount: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'triangleBaseHeightDiagram': {
    name: 'Triangle Base and Height',
    category: 'Measurement',
    description: 'Triangle with base and perpendicular height labelled',
    type: 'triangle_base_height',
    defaultOptions: {
        title: 'Triangle Base and Height',
        showBase: true,
        showHeight: true,
        showFormula: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'quadrilateralAreaDecompositionDiagram': {
    name: 'Quadrilateral Area Decomposition',
    category: 'Measurement',
    description: 'Decomposing quadrilaterals into triangles for area',
    type: 'quadrilateral_decomposition',
    defaultOptions: {
        title: 'Quadrilateral Area Decomposition',
        showDecomposition: true,
        showTriangles: true,
        showFormula: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'circleAreaSectorsDiagram': {
    name: 'Circle Area via Sectors',
    category: 'Measurement',
    description: 'Deriving circle area by rearranging sectors into a rectangle',
    type: 'circle_area_sectors',
    defaultOptions: {
        title: 'Circle Area via Sectors',
        showSectors: true,
        showRearrangement: true,
        showFormula: true,
        width: 1000,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'regularPolygonApothemDiagram': {
    name: 'Regular Polygon Apothem',
    category: 'Measurement',
    description: 'Apothem of a regular polygon for area calculation',
    type: 'regular_polygon_apothem',
    defaultOptions: {
        title: 'Regular Polygon Apothem',
        showPolygon: true,
        showApothem: true,
        showFormula: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'compositeAreaAddSubtractDiagram': {
    name: 'Composite Area: Add and Subtract',
    category: 'Measurement',
    description: 'Finding composite areas by adding or subtracting simple shapes',
    type: 'composite_area_add_subtract',
    defaultOptions: {
        title: 'Composite Area: Add and Subtract',
        showAddition: true,
        showSubtraction: true,
        showResult: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'coordinateTriangleAreaDiagram': {
    name: 'Coordinate Triangle Area',
    category: 'Measurement',
    description: 'Area of a triangle from coordinate vertices using the shoelace formula',
    type: 'coordinate_triangle_area',
    defaultOptions: {
        title: 'Coordinate Triangle Area',
        showCoordinates: true,
        showFormula: true,
        showDiagram: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'algebraicExpansionGeometricDiagram': {
    name: 'Algebraic Expansion Geometric',
    category: 'Measurement',
    description: 'Geometric interpretation of algebraic expansion for area',
    type: 'algebraic_expansion_geometric',
    defaultOptions: {
        title: 'Algebraic Expansion: Geometric',
        showRectangle: true,
        showExpansion: true,
        showArea: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'similarShapesScaleFactorDiagram': {
    name: 'Similar Shapes Scale Factor',
    category: 'Measurement',
    description: 'Area scale factor for similar shapes',
    type: 'similar_shapes_scale_factor',
    defaultOptions: {
        title: 'Similar Shapes Scale Factor',
        showSimilarShapes: true,
        showScaleFactor: true,
        showAreaRatio: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'flooringAndPaintingDiagram': {
    name: 'Flooring and Painting',
    category: 'Measurement',
    description: 'Applied area problems: flooring and painting',
    type: 'flooring_painting',
    defaultOptions: {
        title: 'Flooring and Painting',
        showFloor: true,
        showWall: true,
        showCalculation: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'sectorAngleFractionDiagram': {
    name: 'Sector Angle Fraction',
    category: 'Measurement',
    description: 'Sector as a fraction of the full circle',
    type: 'sector_angle_fraction',
    defaultOptions: {
        title: 'Sector Angle Fraction',
        showSector: true,
        showFraction: true,
        showFormula: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'radianMeasureDiagram': {
    name: 'Radian Measure',
    category: 'Measurement',
    description: 'Radian measure of an angle on a circle',
    type: 'radian_measure',
    defaultOptions: {
        title: 'Radian Measure',
        showAngle: true,
        showArc: true,
        showRadius: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'arcLengthCentralAngleDiagram': {
    name: 'Arc Length and Central Angle',
    category: 'Measurement',
    description: 'Relationship between arc length and central angle',
    type: 'arc_length_central_angle',
    defaultOptions: {
        title: 'Arc Length and Central Angle',
        showArc: true,
        showCentralAngle: true,
        showFormula: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'sectorPerimeterDiagram': {
    name: 'Sector Perimeter',
    category: 'Measurement',
    description: 'Perimeter of a sector: two radii plus arc length',
    type: 'sector_perimeter',
    defaultOptions: {
        title: 'Sector Perimeter',
        showSector: true,
        showRadii: true,
        showArc: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'circularSegmentDiagram': {
    name: 'Circular Segment',
    category: 'Measurement',
    description: 'Area of a circular segment (sector minus triangle)',
    type: 'circular_segment',
    defaultOptions: {
        title: 'Circular Segment',
        showSector: true,
        showTriangle: true,
        showSegment: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'compositeSectorShapesDiagram': {
    name: 'Composite Sector Shapes',
    category: 'Measurement',
    description: 'Area of shapes composed of sectors and polygons',
    type: 'composite_sector_shapes',
    defaultOptions: {
        title: 'Composite Sector Shapes',
        showSectors: true,
        showPolygons: true,
        showTotal: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'algebraicSectorDiagram': {
    name: 'Algebraic Sector',
    category: 'Measurement',
    description: 'Sector with algebraic radius or angle',
    type: 'algebraic_sector',
    defaultOptions: {
        title: 'Algebraic Sector',
        showSector: true,
        showExpressions: true,
        showFormula: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'radianDefinitionUnitCircleDiagram': {
    name: 'Radian Definition on Unit Circle',
    category: 'Measurement',
    description: 'One radian defined on the unit circle',
    type: 'radian_unit_circle',
    defaultOptions: {
        title: 'Radian Definition: Unit Circle',
        showUnitCircle: true,
        showOneRadian: true,
        showArc: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'pieChartAndSprinklerDiagram': {
    name: 'Pie Chart and Sprinkler',
    category: 'Measurement',
    description: 'Applied sector problems: pie charts and sprinklers',
    type: 'pie_chart_sprinkler',
    defaultOptions: {
        title: 'Pie Chart and Sprinkler',
        showPieChart: true,
        showSprinkler: true,
        showCalculation: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'cuboidNetDiagram': {
    name: 'Cuboid Net',
    category: 'Measurement',
    description: 'Net of a cuboid showing all six faces',
    type: 'cuboid_net',
    defaultOptions: {
        title: 'Cuboid Net',
        showNet: true,
        showFaces: true,
        showDimensions: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'prismNetFacesDiagram': {
    name: 'Prism Net and Faces',
    category: 'Measurement',
    description: 'Net of a prism showing rectangular and triangular faces',
    type: 'prism_net_faces',
    defaultOptions: {
        title: 'Prism Net and Faces',
        showNet: true,
        showFaces: true,
        showDimensions: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'pyramidSlantHeightDiagram': {
    name: 'Pyramid Slant Height',
    category: 'Measurement',
    description: 'Pyramid with slant height labelled for surface area',
    type: 'pyramid_slant_height',
    defaultOptions: {
        title: 'Pyramid Slant Height',
        showPyramid: true,
        showSlantHeight: true,
        showFormula: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'cylinderNetDiagram': {
    name: 'Cylinder Net',
    category: 'Measurement',
    description: 'Net of a cylinder: two circles and a rectangle',
    type: 'cylinder_net',
    defaultOptions: {
        title: 'Cylinder Net',
        showNet: true,
        showCircles: true,
        showRectangle: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'coneSlantHeightNetDiagram': {
    name: 'Cone Slant Height and Net',
    category: 'Measurement',
    description: 'Cone net and slant height for surface area calculation',
    type: 'cone_slant_net',
    defaultOptions: {
        title: 'Cone Slant Height and Net',
        showNet: true,
        showSlantHeight: true,
        showFormula: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'sphereGreatCircleDiagram': {
    name: 'Sphere and Great Circle',
    category: 'Measurement',
    description: 'Sphere with great circle and surface area formula',
    type: 'sphere_great_circle',
    defaultOptions: {
        title: 'Sphere and Great Circle',
        showSphere: true,
        showGreatCircle: true,
        showFormula: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'compositeSolidHiddenFacesDiagram': {
    name: 'Composite Solid Hidden Faces',
    category: 'Measurement',
    description: 'Identifying and subtracting hidden faces in composite solids',
    type: 'composite_solid_hidden_faces',
    defaultOptions: {
        title: 'Composite Solid Hidden Faces',
        showSolids: true,
        showHiddenFaces: true,
        showCalculation: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'algebraicSolidDimensionsDiagram': {
    name: 'Algebraic Solid Dimensions',
    category: 'Measurement',
    description: 'Solid shapes with algebraic expressions as dimensions',
    type: 'algebraic_solid_dimensions',
    defaultOptions: {
        title: 'Algebraic Solid Dimensions',
        showSolid: true,
        showExpressions: true,
        showSurfaceArea: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'optimisationSurfaceAreaDiagram': {
    name: 'Optimisation Surface Area',
    category: 'Measurement',
    description: 'Optimising surface area for a given volume',
    type: 'optimisation_surface_area',
    defaultOptions: {
        title: 'Optimisation: Surface Area',
        showGraph: true,
        showMinimum: true,
        showDimensions: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'packagingAndPaintingDiagram': {
    name: 'Packaging and Painting',
    category: 'Measurement',
    description: 'Applied surface area problems: packaging and painting',
    type: 'packaging_painting',
    defaultOptions: {
        title: 'Packaging and Painting',
        showPackaging: true,
        showPainting: true,
        showCalculation: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'cubicUnitStackingDiagram': {
    name: 'Cubic Unit Stacking',
    category: 'Measurement',
    description: 'Volume measured by stacking cubic units',
    type: 'cubic_unit_stacking',
    defaultOptions: {
        title: 'Cubic Unit Stacking',
        showCubes: true,
        showCount: true,
        showFormula: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'prismCrossSectionLayerDiagram': {
    name: 'Prism Cross-Section Layer',
    category: 'Measurement',
    description: 'Volume of a prism as cross-section area times length',
    type: 'prism_cross_section',
    defaultOptions: {
        title: 'Prism Cross-Section Layer',
        showCrossSection: true,
        showLength: true,
        showFormula: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'pyramidVsPrismOneThirdDiagram': {
    name: 'Pyramid vs Prism One-Third',
    category: 'Measurement',
    description: 'Volume of pyramid is one-third that of the corresponding prism',
    type: 'pyramid_prism_one_third',
    defaultOptions: {
        title: 'Pyramid vs Prism: One-Third',
        showPyramid: true,
        showPrism: true,
        showRelationship: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'cylinderCapacityDiagram': {
    name: 'Cylinder Capacity',
    category: 'Measurement',
    description: 'Volume and capacity of a cylinder',
    type: 'cylinder_capacity',
    defaultOptions: {
        title: 'Cylinder Capacity',
        showCylinder: true,
        showFormula: true,
        showCapacity: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'coneVsCylinderOneThirdDiagram': {
    name: 'Cone vs Cylinder One-Third',
    category: 'Measurement',
    description: 'Volume of cone is one-third that of the corresponding cylinder',
    type: 'cone_cylinder_one_third',
    defaultOptions: {
        title: 'Cone vs Cylinder: One-Third',
        showCone: true,
        showCylinder: true,
        showRelationship: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'archimedesSphereInCylinderDiagram': {
    name: "Archimedes' Sphere in Cylinder",
    category: 'Measurement',
    description: "Archimedes' relationship between sphere and cylinder volumes",
    type: 'archimedes_sphere_cylinder',
    defaultOptions: {
        title: "Archimedes' Sphere in Cylinder",
        showSphere: true,
        showCylinder: true,
        showRatio: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'compositeSolidDecompositionDiagram': {
    name: 'Composite Solid Decomposition',
    category: 'Measurement',
    description: 'Decomposing composite solids for volume calculation',
    type: 'composite_solid_decomposition',
    defaultOptions: {
        title: 'Composite Solid Decomposition',
        showSolids: true,
        showDecomposition: true,
        showCalculation: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'algebraicVolumeSolidDiagram': {
    name: 'Algebraic Volume Solid',
    category: 'Measurement',
    description: 'Solid with algebraic expressions for volume calculation',
    type: 'algebraic_volume_solid',
    defaultOptions: {
        title: 'Algebraic Volume Solid',
        showSolid: true,
        showExpressions: true,
        showVolume: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'cavalieriStackedSlicesDiagram': {
    name: "Cavalieri's Stacked Slices",
    category: 'Measurement',
    description: "Cavalieri's principle illustrated with stacked slices",
    type: 'cavalieri_stacked_slices',
    defaultOptions: {
        title: "Cavalieri's Principle",
        showSlices: true,
        showStacking: true,
        showPrinciple: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'tankAndContainerVolumeDiagram': {
    name: 'Tank and Container Volume',
    category: 'Measurement',
    description: 'Applied volume problems: tanks and containers',
    type: 'tank_container_volume',
    defaultOptions: {
        title: 'Tank and Container Volume',
        showTank: true,
        showContainer: true,
        showCalculation: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

// ===== TRIGONOMETRY (additional) =====
'rightTriangleTrigRatios': {
    name: 'Right Triangle Trig Ratios',
    category: 'Trigonometry',
    description: 'SOH CAH TOA visualisation with labelled triangle',
    type: 'trig_ratios_right_triangle',
    defaultOptions: {
        title: 'Right Triangle Trig Ratios',
        showSOHCAHTOA: true,
        showSides: true,
        showRatios: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'unitCircle': {
    name: 'Unit Circle',
    category: 'Trigonometry',
    description: 'Full unit circle with key angles and coordinates',
    type: 'unit_circle_full',
    defaultOptions: {
        title: 'Unit Circle',
        showAngles: true,
        showCoordinates: true,
        showDegrees: true,
        showRadians: true,
        width: 900,
        height: 900,
        backgroundColor: '#ffffff'
    }
},
'trigIdentitiesVisual': {
    name: 'Trig Identities Visual',
    category: 'Trigonometry',
    description: 'Visual summary of key trigonometric identities',
    type: 'trig_identities_visual',
    defaultOptions: {
        title: 'Trigonometric Identities',
        showPythagorean: true,
        showReciprocal: true,
        showQuotient: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'specialAnglesTriangle': {
    name: 'Special Angles Triangle',
    category: 'Trigonometry',
    description: 'Special angle triangles with exact trig values',
    type: 'special_angles_triangle_trig',
    defaultOptions: {
        title: 'Special Angles Triangle',
        showExactValues: true,
        showBothTriangles: true,
        showTable: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'radianMeasure': {
    name: 'Radian Measure',
    category: 'Trigonometry',
    description: 'Radian measure and conversion with degrees',
    type: 'radian_measure_trig',
    defaultOptions: {
        title: 'Radian Measure',
        showConversion: true,
        showCircle: true,
        showKeyAngles: true,
        width: 900,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'sineRuleDiagram': {
    name: 'Sine Rule',
    category: 'Trigonometry',
    description: 'Sine rule with general triangle and formula',
    type: 'sine_rule',
    defaultOptions: {
        title: 'Sine Rule',
        showTriangle: true,
        showFormula: true,
        showLabels: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'cosineRuleDiagram': {
    name: 'Cosine Rule',
    category: 'Trigonometry',
    description: 'Cosine rule with general triangle and formula',
    type: 'cosine_rule',
    defaultOptions: {
        title: 'Cosine Rule',
        showTriangle: true,
        showFormula: true,
        showLabels: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'triangleAreaFormula': {
    name: 'Triangle Area Formula',
    category: 'Trigonometry',
    description: 'Area = ½ab sin C with labelled triangle',
    type: 'triangle_area_trig',
    defaultOptions: {
        title: 'Triangle Area Formula',
        showTriangle: true,
        showFormula: true,
        showSides: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},


// ===== ALGEBRA / EQUATIONS =====
'balanceScalesEquation': {
    name: 'Balance Scales Equation',
    category: 'Algebra',
    description: 'Visual balance scale showing equation equilibrium',
    type: 'balance_scales',
    defaultOptions: {
        title: 'Balance Scales Equation',
        showScale: true,
        showExpressions: true,
        showBalance: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'addSubtractInverseNumberLine': {
    name: 'Add/Subtract Inverse Number Line',
    category: 'Algebra',
    description: 'Number line showing additive inverse operations',
    type: 'inverse_number_line',
    operation: 'add_subtract',
    defaultOptions: {
        title: 'Additive Inverse on Number Line',
        showNumberLine: true,
        showArrows: true,
        showInverse: true,
        width: 800,
        height: 400,
        backgroundColor: '#ffffff'
    }
},
'multiplyDivideInverseDiagram': {
    name: 'Multiply/Divide Inverse Diagram',
    category: 'Algebra',
    description: 'Visual showing multiplicative inverse relationship',
    type: 'multiply_divide_inverse',
    defaultOptions: {
        title: 'Multiplicative Inverse Operations',
        showOperations: true,
        showInverse: true,
        showExamples: true,
        width: 800,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'slopeInterceptFormDiagram': {
    name: 'Slope-Intercept Form Diagram',
    category: 'Algebra',
    description: 'Visual breakdown of y = mx + b components',
    type: 'slope_intercept_form',
    defaultOptions: {
        title: 'Slope-Intercept Form',
        showGraph: true,
        showSlope: true,
        showIntercept: true,
        showFormula: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'multiStepInverseOperationsChain': {
    name: 'Multi-Step Inverse Operations Chain',
    category: 'Algebra',
    description: 'Chain diagram showing sequence of inverse operations',
    type: 'inverse_operations_chain',
    defaultOptions: {
        title: 'Multi-Step Inverse Operations Chain',
        showChain: true,
        showSteps: true,
        showInverse: true,
        width: 900,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'distributiveLawBracketDiagram': {
    name: 'Distributive Law Bracket Diagram',
    category: 'Algebra',
    description: 'Visual expansion of brackets using distributive law',
    type: 'distributive_law',
    defaultOptions: {
        title: 'Distributive Law',
        showBrackets: true,
        showExpansion: true,
        showArrows: true,
        width: 800,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'negativeVariableNumberLine': {
    name: 'Negative Variable Number Line',
    category: 'Algebra',
    description: 'Number line illustrating negative variable manipulation',
    type: 'negative_variable_line',
    defaultOptions: {
        title: 'Negative Variable on Number Line',
        showNumberLine: true,
        showNegation: true,
        showFlip: true,
        width: 800,
        height: 400,
        backgroundColor: '#ffffff'
    }
},
'scienceFormulasReferenceChart': {
    name: 'Science Formulas Reference Chart',
    category: 'Algebra',
    description: 'Reference chart of common science formulas for rearrangement',
    type: 'formula_reference_chart',
    defaultOptions: {
        title: 'Science Formulas Reference Chart',
        showFormulas: true,
        showVariables: true,
        showCategories: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'fractionNumeratorDenominatorDiagram': {
    name: 'Fraction Numerator/Denominator Diagram',
    category: 'Algebra',
    description: 'Labelled diagram of fraction anatomy',
    type: 'fraction_anatomy',
    defaultOptions: {
        title: 'Fraction Anatomy',
        showNumerator: true,
        showDenominator: true,
        showVinculumLine: true,
        showLabels: true,
        width: 600,
        height: 400,
        backgroundColor: '#ffffff'
    }
},
'numeratorIsolationDiagram': {
    name: 'Numerator Isolation Diagram',
    category: 'Algebra',
    description: 'Step-by-step diagram isolating the numerator in an equation',
    type: 'numerator_isolation',
    defaultOptions: {
        title: 'Numerator Isolation',
        showSteps: true,
        showMultiplication: true,
        showResult: true,
        width: 800,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'denominatorCrossMultiplyDiagram': {
    name: 'Denominator Cross-Multiply Diagram',
    category: 'Algebra',
    description: 'Visual cross-multiplication to clear denominators',
    type: 'denominator_cross_multiply',
    defaultOptions: {
        title: 'Denominator Cross-Multiplication',
        showFractions: true,
        showCrossArrows: true,
        showResult: true,
        width: 800,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'crossMultiplicationRatioDiagram': {
    name: 'Cross Multiplication Ratio Diagram',
    category: 'Algebra',
    description: 'Cross-multiplication technique for solving ratio equations',
    type: 'cross_multiplication_ratio',
    defaultOptions: {
        title: 'Cross Multiplication Ratios',
        showRatio: true,
        showCrossLines: true,
        showProduct: true,
        width: 800,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'parallelResistorCircuitDiagram': {
    name: 'Parallel Resistor Circuit Diagram',
    category: 'Algebra',
    description: 'Circuit diagram for parallel resistor formula rearrangement',
    type: 'parallel_resistor',
    defaultOptions: {
        title: 'Parallel Resistor Circuit',
        showCircuit: true,
        showFormula: true,
        showValues: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'compoundFractionSimplificationDiagram': {
    name: 'Compound Fraction Simplification Diagram',
    category: 'Algebra',
    description: 'Step-by-step simplification of compound/complex fractions',
    type: 'compound_fraction',
    defaultOptions: {
        title: 'Compound Fraction Simplification',
        showSteps: true,
        showFractions: true,
        showSimplification: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'directInverseProportionGraph': {
    name: 'Direct/Inverse Proportion Graph',
    category: 'Algebra',
    description: 'Side-by-side graphs of direct and inverse proportion',
    type: 'proportion_graphs',
    defaultOptions: {
        title: 'Direct and Inverse Proportion',
        showDirectGraph: true,
        showInverseGraph: true,
        showEquations: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'lensFormulaOpticsDiagram': {
    name: 'Lens Formula Optics Diagram',
    category: 'Algebra',
    description: 'Optics diagram illustrating the lens formula 1/f = 1/v + 1/u',
    type: 'lens_formula',
    defaultOptions: {
        title: 'Lens Formula',
        showLens: true,
        showRays: true,
        showFormula: true,
        showDistances: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'inverseOperationPowerRootPairs': {
    name: 'Inverse Operation Power/Root Pairs',
    category: 'Algebra',
    description: 'Visual pairing of powers and roots as inverse operations',
    type: 'power_root_pairs',
    defaultOptions: {
        title: 'Power and Root Inverse Pairs',
        showPowers: true,
        showRoots: true,
        showPairing: true,
        width: 800,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'circleAreaRadiusDiagram': {
    name: 'Circle Area Radius Diagram',
    category: 'Algebra',
    description: 'Diagram showing circle area formula rearranged for radius',
    type: 'circle_area_radius',
    defaultOptions: {
        title: 'Circle Area and Radius',
        showCircle: true,
        showFormula: true,
        showRearrangement: true,
        width: 700,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'pendulumLengthDiagram': {
    name: 'Pendulum Length Diagram',
    category: 'Algebra',
    description: 'Pendulum diagram for formula rearrangement involving period and length',
    type: 'pendulum_length',
    defaultOptions: {
        title: 'Pendulum Period and Length',
        showPendulum: true,
        showFormula: true,
        showRearrangement: true,
        width: 700,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'sphereVolumeFormulaDiagram': {
    name: 'Sphere Volume Formula Diagram',
    category: 'Algebra',
    description: 'Sphere diagram with volume formula rearranged for radius',
    type: 'sphere_volume',
    defaultOptions: {
        title: 'Sphere Volume Formula',
        showSphere: true,
        showFormula: true,
        showRearrangement: true,
        width: 700,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'nthRootFractionalExponentDiagram': {
    name: 'Nth Root Fractional Exponent Diagram',
    category: 'Algebra',
    description: 'Visual equivalence between nth roots and fractional exponents',
    type: 'nth_root_fractional_exponent',
    defaultOptions: {
        title: 'Nth Root and Fractional Exponents',
        showRoot: true,
        showExponent: true,
        showEquivalence: true,
        width: 800,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'kinematicEquationsDiagram': {
    name: 'Kinematic Equations Diagram',
    category: 'Algebra',
    description: 'Reference diagram of SUVAT kinematic equations and rearrangements',
    type: 'kinematic_equations',
    defaultOptions: {
        title: 'Kinematic Equations (SUVAT)',
        showEquations: true,
        showVariables: true,
        showRearrangements: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'circleEquationCoordinateDiagram': {
    name: 'Circle Equation Coordinate Diagram',
    category: 'Algebra',
    description: 'Coordinate diagram showing circle equation and centre/radius',
    type: 'circle_equation_coordinate',
    defaultOptions: {
        title: 'Circle Equation on Coordinate Plane',
        showAxes: true,
        showCircle: true,
        showCentre: true,
        showRadius: true,
        showEquation: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'pythagoreanTheoremDiagram': {
    name: 'Pythagorean Theorem Diagram',
    category: 'Algebra',
    description: 'Geometric proof and formula of the Pythagorean theorem',
    type: 'pythagorean_theorem',
    defaultOptions: {
        title: 'Pythagorean Theorem',
        showTriangle: true,
        showSquares: true,
        showFormula: true,
        showLabels: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'collectFactoriseDivideFlowchart': {
    name: 'Collect, Factorise, Divide Flowchart',
    category: 'Algebra',
    description: 'Flowchart for solving equations by collecting, factorising, then dividing',
    type: 'collect_factorise_divide',
    defaultOptions: {
        title: 'Collect, Factorise, Divide Flowchart',
        showFlowchart: true,
        showSteps: true,
        showExamples: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'collectingLikeTermsDiagram': {
    name: 'Collecting Like Terms Diagram',
    category: 'Algebra',
    description: 'Visual grouping of like terms in algebraic expressions',
    type: 'collecting_like_terms',
    defaultOptions: {
        title: 'Collecting Like Terms',
        showTerms: true,
        showGrouping: true,
        showResult: true,
        width: 900,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'fractionSubjectTwiceDiagram': {
    name: 'Fraction Subject Twice Diagram',
    category: 'Algebra',
    description: 'Diagram for making a variable the subject when it appears in two fraction terms',
    type: 'fraction_subject_twice',
    defaultOptions: {
        title: 'Subject Appearing Twice in Fractions',
        showSteps: true,
        showFactorisation: true,
        showResult: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'expandCollectBracketsFlowchart': {
    name: 'Expand and Collect Brackets Flowchart',
    category: 'Algebra',
    description: 'Flowchart for expanding brackets and collecting like terms',
    type: 'expand_collect_brackets',
    defaultOptions: {
        title: 'Expand and Collect Brackets',
        showFlowchart: true,
        showExpansion: true,
        showCollection: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'lcmClearingMultipleFractionsDiagram': {
    name: 'LCM Clearing Multiple Fractions Diagram',
    category: 'Algebra',
    description: 'Step-by-step LCM method to clear multiple fractions in an equation',
    type: 'lcm_clearing_fractions',
    defaultOptions: {
        title: 'LCM Clearing Multiple Fractions',
        showFractions: true,
        showLCM: true,
        showClearing: true,
        showResult: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'sellingPriceMarkupDiagram': {
    name: 'Selling Price Markup Diagram',
    category: 'Algebra',
    description: 'Diagram showing selling price, cost, and markup relationships',
    type: 'selling_price_markup',
    defaultOptions: {
        title: 'Selling Price and Markup',
        showFormula: true,
        showMarkup: true,
        showRearrangement: true,
        width: 800,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'nonLinearOccurrenceDiagram': {
    name: 'Non-Linear Occurrence Diagram',
    category: 'Algebra',
    description: 'Diagram identifying the subject appearing in non-linear forms',
    type: 'non_linear_occurrence',
    defaultOptions: {
        title: 'Non-Linear Subject Occurrence',
        showEquation: true,
        showOccurrences: true,
        showClassification: true,
        width: 800,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'subjectTwiceClassificationFlowchart': {
    name: 'Subject Twice Classification Flowchart',
    category: 'Algebra',
    description: 'Flowchart classifying techniques when subject appears twice',
    type: 'subject_twice_classification',
    defaultOptions: {
        title: 'Subject Appears Twice: Classification',
        showFlowchart: true,
        showCases: true,
        showTechniques: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'inverseOperationSequenceChainDiagram': {
    name: 'Inverse Operation Sequence Chain Diagram',
    category: 'Algebra',
    description: 'Chain showing forward operations and their inverse sequence',
    type: 'inverse_sequence_chain',
    defaultOptions: {
        title: 'Inverse Operation Sequence Chain',
        showForwardChain: true,
        showInverseChain: true,
        showArrows: true,
        width: 1000,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'resonantFrequencyLCCircuitDiagram': {
    name: 'Resonant Frequency LC Circuit Diagram',
    category: 'Algebra',
    description: 'LC circuit diagram with resonant frequency formula rearrangement',
    type: 'resonant_frequency_lc',
    defaultOptions: {
        title: 'Resonant Frequency LC Circuit',
        showCircuit: true,
        showFormula: true,
        showRearrangement: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'gravitationalForceDiagram': {
    name: 'Gravitational Force Diagram',
    category: 'Algebra',
    description: 'Diagram illustrating Newton\'s gravitational force formula and rearrangements',
    type: 'gravitational_force',
    defaultOptions: {
        title: 'Gravitational Force Formula',
        showBodies: true,
        showFormula: true,
        showRearrangement: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'multiStepFormulaChainDiagram': {
    name: 'Multi-Step Formula Chain Diagram',
    category: 'Algebra',
    description: 'Chained multi-step formula rearrangement with annotated steps',
    type: 'multi_step_formula_chain',
    defaultOptions: {
        title: 'Multi-Step Formula Chain',
        showChain: true,
        showAnnotations: true,
        showSteps: true,
        width: 1000,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'completingTheSquareVertexFormDiagram': {
    name: 'Completing the Square Vertex Form Diagram',
    category: 'Algebra',
    description: 'Step-by-step completing the square leading to vertex form',
    type: 'completing_square_vertex',
    defaultOptions: {
        title: 'Completing the Square: Vertex Form',
        showSteps: true,
        showVertex: true,
        showParabola: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'substitutionMethodSimultaneousDiagram': {
    name: 'Substitution Method Simultaneous Diagram',
    category: 'Algebra',
    description: 'Step-by-step substitution method for simultaneous equations',
    type: 'substitution_simultaneous',
    defaultOptions: {
        title: 'Substitution Method: Simultaneous Equations',
        showSteps: true,
        showSubstitution: true,
        showSolution: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'inverseFunctionReflectionDiagram': {
    name: 'Inverse Function Reflection Diagram',
    category: 'Algebra',
    description: 'Graph showing a function and its inverse reflected over y = x',
    type: 'inverse_function_reflection',
    defaultOptions: {
        title: 'Inverse Function Reflection',
        showFunction: true,
        showInverse: true,
        showMirrorLine: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'exponentialLogInversePairGraph': {
    name: 'Exponential/Log Inverse Pair Graph',
    category: 'Algebra',
    description: 'Graph showing exponential and logarithmic functions as inverse pairs',
    type: 'exp_log_inverse_pair',
    defaultOptions: {
        title: 'Exponential and Logarithm Inverse Pair',
        showExponential: true,
        showLogarithm: true,
        showMirrorLine: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'naturalLogExponentialGraphDiagram': {
    name: 'Natural Log Exponential Graph Diagram',
    category: 'Algebra',
    description: 'Graphs of ln(x) and e^x showing inverse relationship',
    type: 'natural_log_exponential',
    defaultOptions: {
        title: 'Natural Log and Exponential Graphs',
        showLnGraph: true,
        showExpGraph: true,
        showMirrorLine: true,
        showKeyPoints: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'arcsinArccosTanPrincipalValueDiagram': {
    name: 'Arcsin/Arccos/Arctan Principal Value Diagram',
    category: 'Algebra',
    description: 'Diagram of principal value ranges for inverse trig functions',
    type: 'inverse_trig_principal_values',
    defaultOptions: {
        title: 'Inverse Trig Principal Values',
        showArcsin: true,
        showArccos: true,
        showArctan: true,
        showRanges: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'piecewiseFunctionInverseDiagram': {
    name: 'Piecewise Function Inverse Diagram',
    category: 'Algebra',
    description: 'Diagram showing how to find the inverse of a piecewise function',
    type: 'piecewise_inverse',
    defaultOptions: {
        title: 'Piecewise Function Inverse',
        showPiecewise: true,
        showInverse: true,
        showDomainRanges: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'derivativeInverseTrigFunctionsDiagram': {
    name: 'Derivative of Inverse Trig Functions Diagram',
    category: 'Algebra',
    description: 'Reference diagram for derivatives of arcsin, arccos, arctan',
    type: 'derivative_inverse_trig',
    defaultOptions: {
        title: 'Derivatives of Inverse Trig Functions',
        showFormulas: true,
        showDerivations: true,
        showGraphs: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

// ===== ALGEBRA / META & REFERENCE =====
'masterRearrangingDecisionFlowchart': {
    name: 'Master Rearranging Decision Flowchart',
    category: 'Algebra',
    description: 'Master decision flowchart for choosing rearranging technique',
    type: 'master_rearranging_flowchart',
    defaultOptions: {
        title: 'Master Rearranging Decision Flowchart',
        showFlowchart: true,
        showDecisionNodes: true,
        showTechniques: true,
        width: 1000,
        height: 900,
        backgroundColor: '#ffffff'
    }
},
'formulaTaxonomyTierDiagram': {
    name: 'Formula Taxonomy Tier Diagram',
    category: 'Algebra',
    description: 'Tiered taxonomy classifying formula types by complexity',
    type: 'formula_taxonomy',
    defaultOptions: {
        title: 'Formula Taxonomy by Tier',
        showTiers: true,
        showExamples: true,
        showLabels: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'progressiveDifficultyLadderDiagram': {
    name: 'Progressive Difficulty Ladder Diagram',
    category: 'Algebra',
    description: 'Ladder diagram showing progressive difficulty levels of rearranging',
    type: 'difficulty_ladder',
    defaultOptions: {
        title: 'Progressive Difficulty Ladder',
        showLadder: true,
        showLevels: true,
        showExamples: true,
        width: 700,
        height: 900,
        backgroundColor: '#ffffff'
    }
},
'techniqueReferenceTableDiagram': {
    name: 'Technique Reference Table Diagram',
    category: 'Algebra',
    description: 'Reference table mapping equation types to rearranging techniques',
    type: 'technique_reference_table',
    defaultOptions: {
        title: 'Technique Reference Table',
        showTable: true,
        showTechniques: true,
        showExamples: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'commonRearrangingErrorsDiagram': {
    name: 'Common Rearranging Errors Diagram',
    category: 'Algebra',
    description: 'Annotated diagram of frequent mistakes when rearranging formulas',
    type: 'common_errors',
    defaultOptions: {
        title: 'Common Rearranging Errors',
        showErrors: true,
        showCorrections: true,
        showAnnotations: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'mathTopicConnectionWebDiagram': {
    name: 'Math Topic Connection Web Diagram',
    category: 'Algebra',
    description: 'Web diagram showing connections between mathematical topics',
    type: 'topic_connection_web',
    defaultOptions: {
        title: 'Math Topic Connection Web',
        showNodes: true,
        showConnections: true,
        showLabels: true,
        width: 1000,
        height: 900,
        backgroundColor: '#ffffff'
    }
},
'curriculumProgressionSequenceDiagram': {
    name: 'Curriculum Progression Sequence Diagram',
    category: 'Algebra',
    description: 'Sequence diagram of curriculum topic progression',
    type: 'curriculum_progression',
    defaultOptions: {
        title: 'Curriculum Progression Sequence',
        showSequence: true,
        showTopics: true,
        showArrows: true,
        width: 1000,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'sixTierWorkedExamplesDiagram': {
    name: 'Six-Tier Worked Examples Diagram',
    category: 'Algebra',
    description: 'Six-tier worked examples showing increasing rearranging complexity',
    type: 'six_tier_examples',
    defaultOptions: {
        title: 'Six-Tier Worked Examples',
        showTiers: true,
        showExamples: true,
        showSteps: true,
        width: 1000,
        height: 900,
        backgroundColor: '#ffffff'
    }
},

// ===== FACTORISATION =====
'factorTreeDiagram': {
    name: 'Factor Tree Diagram',
    category: 'Factorisation',
    description: 'Tree diagram breaking a number into prime factors',
    type: 'factor_tree',
    defaultOptions: {
        title: 'Factor Tree',
        showTree: true,
        showPrimes: true,
        showLabels: true,
        width: 700,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'hcfVennDiagram': {
    name: 'HCF Venn Diagram',
    category: 'Factorisation',
    description: 'Venn diagram finding the highest common factor of two numbers',
    type: 'hcf_venn',
    defaultOptions: {
        title: 'HCF Venn Diagram',
        showVenn: true,
        showFactors: true,
        showHCF: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'distributiveLawReversal': {
    name: 'Distributive Law Reversal',
    category: 'Factorisation',
    description: 'Visual showing factorisation as reversal of the distributive law',
    type: 'distributive_reversal',
    defaultOptions: {
        title: 'Distributive Law Reversal',
        showExpansion: true,
        showFactorisation: true,
        showArrows: true,
        width: 800,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'binomialTrinomialStructure': {
    name: 'Binomial/Trinomial Structure',
    category: 'Factorisation',
    description: 'Structural comparison of binomial and trinomial expressions',
    type: 'binomial_trinomial_structure',
    defaultOptions: {
        title: 'Binomial and Trinomial Structure',
        showBinomial: true,
        showTrinomial: true,
        showLabels: true,
        width: 800,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'expansionVerificationModel': {
    name: 'Expansion Verification Model',
    category: 'Factorisation',
    description: 'Model for verifying factorisation by re-expanding',
    type: 'expansion_verification',
    defaultOptions: {
        title: 'Expansion Verification Model',
        showFactorised: true,
        showExpanded: true,
        showVerification: true,
        width: 800,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'negativeHCFSignFlowDiagram': {
    name: 'Negative HCF Sign Flow Diagram',
    category: 'Factorisation',
    description: 'Diagram showing sign handling when HCF is negative',
    type: 'negative_hcf_sign',
    defaultOptions: {
        title: 'Negative HCF Sign Flow',
        showSigns: true,
        showFlow: true,
        showExamples: true,
        width: 800,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'hcfErrorAnnotationDiagram': {
    name: 'HCF Error Annotation Diagram',
    category: 'Factorisation',
    description: 'Annotated diagram showing common HCF factorisation errors',
    type: 'hcf_error_annotation',
    defaultOptions: {
        title: 'HCF Factorisation Error Annotation',
        showErrors: true,
        showCorrections: true,
        showAnnotations: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'zeroProductPropertyDiagram': {
    name: 'Zero Product Property Diagram',
    category: 'Factorisation',
    description: 'Diagram illustrating the zero product property',
    type: 'zero_product_property',
    defaultOptions: {
        title: 'Zero Product Property',
        showProperty: true,
        showExamples: true,
        showRoots: true,
        width: 800,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'fourTermGroupingModel': {
    name: 'Four-Term Grouping Model',
    category: 'Factorisation',
    description: 'Model showing factorisation by grouping four terms',
    type: 'four_term_grouping',
    defaultOptions: {
        title: 'Four-Term Grouping Model',
        showGrouping: true,
        showFactorisation: true,
        showSteps: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'fourTermPairingDiagram': {
    name: 'Four-Term Pairing Diagram',
    category: 'Factorisation',
    description: 'Diagram showing how to pair four terms for grouping factorisation',
    type: 'four_term_pairing',
    defaultOptions: {
        title: 'Four-Term Pairing',
        showPairing: true,
        showBrackets: true,
        showResult: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'termReorderingFlowchart': {
    name: 'Term Reordering Flowchart',
    category: 'Factorisation',
    description: 'Flowchart for reordering terms to enable grouping factorisation',
    type: 'term_reordering',
    defaultOptions: {
        title: 'Term Reordering Flowchart',
        showFlowchart: true,
        showReordering: true,
        showResult: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'sixTermGroupingDiagram': {
    name: 'Six-Term Grouping Diagram',
    category: 'Factorisation',
    description: 'Diagram for factorising by grouping six terms',
    type: 'six_term_grouping',
    defaultOptions: {
        title: 'Six-Term Grouping',
        showGrouping: true,
        showFactorisation: true,
        showSteps: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'groupingSignPatternTable': {
    name: 'Grouping Sign Pattern Table',
    category: 'Factorisation',
    description: 'Table of sign patterns for grouping factorisation cases',
    type: 'grouping_sign_pattern',
    defaultOptions: {
        title: 'Grouping Sign Pattern Table',
        showTable: true,
        showPatterns: true,
        showExamples: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'groupingExpansionCheckDiagram': {
    name: 'Grouping Expansion Check Diagram',
    category: 'Factorisation',
    description: 'Diagram for verifying grouping factorisation by expansion',
    type: 'grouping_expansion_check',
    defaultOptions: {
        title: 'Grouping Expansion Check',
        showGrouping: true,
        showExpansion: true,
        showCheck: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'mismatchedBinomialDiagram': {
    name: 'Mismatched Binomial Diagram',
    category: 'Factorisation',
    description: 'Diagram identifying and correcting mismatched binomial groupings',
    type: 'mismatched_binomial',
    defaultOptions: {
        title: 'Mismatched Binomial Diagnosis',
        showMismatch: true,
        showCorrection: true,
        showAnnotations: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'groupingToTrinomialBridgeDiagram': {
    name: 'Grouping to Trinomial Bridge Diagram',
    category: 'Factorisation',
    description: 'Bridge diagram connecting grouping method to trinomial factorisation',
    type: 'grouping_trinomial_bridge',
    defaultOptions: {
        title: 'Grouping to Trinomial Bridge',
        showGrouping: true,
        showTrinomial: true,
        showBridge: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'differenceOfSquaresGeometricProof': {
    name: 'Difference of Squares Geometric Proof',
    category: 'Factorisation',
    description: 'Geometric area proof of the difference of squares identity',
    type: 'dos_geometric_proof',
    defaultOptions: {
        title: 'Difference of Squares: Geometric Proof',
        showGeometry: true,
        showProof: true,
        showIdentity: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'perfectSquareChecklist': {
    name: 'Perfect Square Checklist',
    category: 'Factorisation',
    description: 'Checklist for identifying perfect square expressions',
    type: 'perfect_square_checklist',
    defaultOptions: {
        title: 'Perfect Square Checklist',
        showChecklist: true,
        showExamples: true,
        showNonExamples: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'dosFactorizationStepDiagram': {
    name: 'Difference of Squares Factorisation Step Diagram',
    category: 'Factorisation',
    description: 'Step-by-step diagram applying the difference of squares factorisation',
    type: 'dos_factorisation_steps',
    defaultOptions: {
        title: 'Difference of Squares Factorisation Steps',
        showSteps: true,
        showIdentity: true,
        showExample: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'repeatedDosTree': {
    name: 'Repeated Difference of Squares Tree',
    category: 'Factorisation',
    description: 'Tree diagram for repeated application of difference of squares',
    type: 'repeated_dos_tree',
    defaultOptions: {
        title: 'Repeated Difference of Squares Tree',
        showTree: true,
        showSteps: true,
        showFinalForm: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'conjugateProductNumberLine': {
    name: 'Conjugate Product Number Line',
    category: 'Factorisation',
    description: 'Number line visualisation of conjugate pair products',
    type: 'conjugate_product',
    defaultOptions: {
        title: 'Conjugate Product Number Line',
        showConjugates: true,
        showProduct: true,
        showNumberLine: true,
        width: 800,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'dosParabolaRootsDiagram': {
    name: 'Difference of Squares Parabola Roots Diagram',
    category: 'Factorisation',
    description: 'Parabola graph showing roots derived from difference of squares',
    type: 'dos_parabola_roots',
    defaultOptions: {
        title: 'DOS Parabola Roots',
        showParabola: true,
        showRoots: true,
        showFactorisation: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'sumVsDifferenceSquaresAnnotated': {
    name: 'Sum vs Difference of Squares Annotated',
    category: 'Factorisation',
    description: 'Annotated comparison of sum of squares vs difference of squares',
    type: 'sum_vs_difference_squares',
    defaultOptions: {
        title: 'Sum vs Difference of Squares',
        showSum: true,
        showDifference: true,
        showAnnotations: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'algebraicFractionSimplificationDiagram': {
    name: 'Algebraic Fraction Simplification Diagram',
    category: 'Factorisation',
    description: 'Step-by-step simplification of algebraic fractions by factorising',
    type: 'algebraic_fraction_simplification',
    defaultOptions: {
        title: 'Algebraic Fraction Simplification',
        showFactorisation: true,
        showCancellation: true,
        showResult: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'squaredBinomialGeometricArea': {
    name: 'Squared Binomial Geometric Area',
    category: 'Factorisation',
    description: 'Geometric area model for expanding and factorising a squared binomial',
    type: 'squared_binomial_area',
    defaultOptions: {
        title: 'Squared Binomial Geometric Area',
        showAreaModel: true,
        showExpansion: true,
        showLabels: true,
        width: 700,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'pstThreeConditionChecklist': {
    name: 'PST Three-Condition Checklist',
    category: 'Factorisation',
    description: 'Checklist verifying the three conditions for a perfect square trinomial',
    type: 'pst_checklist',
    defaultOptions: {
        title: 'Perfect Square Trinomial: Three Conditions',
        showConditions: true,
        showChecklist: true,
        showExamples: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'pstFactoredFormDiagram': {
    name: 'PST Factored Form Diagram',
    category: 'Factorisation',
    description: 'Diagram showing perfect square trinomial in factored form',
    type: 'pst_factored_form',
    defaultOptions: {
        title: 'PST Factored Form',
        showTrinomial: true,
        showFactoredForm: true,
        showSteps: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'pstVsGeneralTrinomialComparisonTable': {
    name: 'PST vs General Trinomial Comparison Table',
    category: 'Factorisation',
    description: 'Comparison table of perfect square trinomials vs general trinomials',
    type: 'pst_vs_general_comparison',
    defaultOptions: {
        title: 'PST vs General Trinomial',
        showTable: true,
        showComparison: true,
        showExamples: true,
        width: 1000,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'completingTheSquareGeometricModel': {
    name: 'Completing the Square Geometric Model',
    category: 'Factorisation',
    description: 'Geometric area model for completing the square',
    type: 'completing_square_geometric',
    defaultOptions: {
        title: 'Completing the Square: Geometric Model',
        showAreaModel: true,
        showSteps: true,
        showResult: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'doubleRootParabolaDiagram': {
    name: 'Double Root Parabola Diagram',
    category: 'Factorisation',
    description: 'Parabola diagram showing a double (repeated) root',
    type: 'double_root_parabola',
    defaultOptions: {
        title: 'Double Root Parabola',
        showParabola: true,
        showRoot: true,
        showTangent: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'pstSignErrorAnnotation': {
    name: 'PST Sign Error Annotation',
    category: 'Factorisation',
    description: 'Annotated diagram highlighting sign errors in perfect square trinomials',
    type: 'pst_sign_error',
    defaultOptions: {
        title: 'PST Sign Error Annotation',
        showError: true,
        showCorrection: true,
        showAnnotation: true,
        width: 800,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'vertexFormParabolaDiagram': {
    name: 'Vertex Form Parabola Diagram',
    category: 'Factorisation',
    description: 'Parabola in vertex form with labelled vertex, axis, and direction',
    type: 'vertex_form_parabola',
    defaultOptions: {
        title: 'Vertex Form Parabola',
        showParabola: true,
        showVertex: true,
        showAxis: true,
        showFormula: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'trinomialStructureDiagram': {
    name: 'Trinomial Structure Diagram',
    category: 'Factorisation',
    description: 'Labelled diagram of trinomial term structure',
    type: 'trinomial_structure',
    defaultOptions: {
        title: 'Trinomial Structure',
        showTerms: true,
        showCoefficients: true,
        showLabels: true,
        width: 800,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'monicTrinomialFactorPairTable': {
    name: 'Monic Trinomial Factor Pair Table',
    category: 'Factorisation',
    description: 'Table of factor pairs for monic trinomial factorisation',
    type: 'monic_factor_pair_table',
    defaultOptions: {
        title: 'Monic Trinomial Factor Pair Table',
        showTable: true,
        showPairs: true,
        showSumProduct: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'acMethodStepByStepDiagram': {
    name: 'AC Method Step-by-Step Diagram',
    category: 'Factorisation',
    description: 'Step-by-step diagram for the AC method of trinomial factorisation',
    type: 'ac_method_steps',
    defaultOptions: {
        title: 'AC Method Step-by-Step',
        showSteps: true,
        showProduct: true,
        showSplit: true,
        showGrouping: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'signAnalysisACFlowchart': {
    name: 'Sign Analysis AC Flowchart',
    category: 'Factorisation',
    description: 'Flowchart for determining signs in AC method factorisation',
    type: 'sign_analysis_ac',
    defaultOptions: {
        title: 'Sign Analysis for AC Method',
        showFlowchart: true,
        showCases: true,
        showExamples: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'substitutionTrinomialDiagram': {
    name: 'Substitution Trinomial Diagram',
    category: 'Factorisation',
    description: 'Diagram showing substitution method for complex trinomial factorisation',
    type: 'substitution_trinomial',
    defaultOptions: {
        title: 'Substitution Method: Trinomial',
        showSubstitution: true,
        showFactorisation: true,
        showBackSubstitution: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'trialAndErrorBracketDiagram': {
    name: 'Trial and Error Bracket Diagram',
    category: 'Factorisation',
    description: 'Diagram illustrating the trial-and-error method for bracket factorisation',
    type: 'trial_error_bracket',
    defaultOptions: {
        title: 'Trial and Error Bracket Method',
        showTrials: true,
        showChecks: true,
        showResult: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'quadraticRootsParabolaDiagram': {
    name: 'Quadratic Roots Parabola Diagram',
    category: 'Factorisation',
    description: 'Parabola diagram showing relationship between roots and factors',
    type: 'quadratic_roots_parabola',
    defaultOptions: {
        title: 'Quadratic Roots and Parabola',
        showParabola: true,
        showRoots: true,
        showFactors: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'acProductSumErrorAnnotation': {
    name: 'AC Product-Sum Error Annotation',
    category: 'Factorisation',
    description: 'Annotated diagram of common errors in AC product-sum step',
    type: 'ac_product_sum_error',
    defaultOptions: {
        title: 'AC Method Product-Sum Errors',
        showErrors: true,
        showCorrections: true,
        showAnnotations: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'cubeIdentityVerificationDiagram': {
    name: 'Cube Identity Verification Diagram',
    category: 'Factorisation',
    description: 'Diagram verifying sum/difference of cubes identity by expansion',
    type: 'cube_identity_verification',
    defaultOptions: {
        title: 'Cube Identity Verification',
        showIdentity: true,
        showExpansion: true,
        showVerification: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'perfectCubeReferenceTable': {
    name: 'Perfect Cube Reference Table',
    category: 'Factorisation',
    description: 'Reference table of perfect cube values and their roots',
    type: 'perfect_cube_table',
    defaultOptions: {
        title: 'Perfect Cube Reference Table',
        showTable: true,
        showValues: true,
        showRoots: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'cubeIdentityStepDiagram': {
    name: 'Cube Identity Step Diagram',
    category: 'Factorisation',
    description: 'Step-by-step application of the cube identity factorisation',
    type: 'cube_identity_steps',
    defaultOptions: {
        title: 'Cube Identity Step-by-Step',
        showSteps: true,
        showIdentity: true,
        showExample: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'discriminantTestCubesTrinomial': {
    name: 'Discriminant Test for Cubes Trinomial',
    category: 'Factorisation',
    description: 'Discriminant test confirming irreducibility of the cubes trinomial factor',
    type: 'discriminant_cubes_test',
    defaultOptions: {
        title: 'Discriminant Test: Cubes Trinomial',
        showTrinomial: true,
        showDiscriminant: true,
        showResult: true,
        width: 800,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'sixthPowerFactorizationTree': {
    name: 'Sixth Power Factorisation Tree',
    category: 'Factorisation',
    description: 'Tree diagram for factorising sixth-power expressions',
    type: 'sixth_power_tree',
    defaultOptions: {
        title: 'Sixth Power Factorisation Tree',
        showTree: true,
        showSteps: true,
        showFinalForm: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'soapSignErrorAnnotation': {
    name: 'SOAP Sign Error Annotation',
    category: 'Factorisation',
    description: 'Annotated diagram for SOAP sign rule errors in cube factorisation',
    type: 'soap_sign_error',
    defaultOptions: {
        title: 'SOAP Sign Error Annotation',
        showSOAP: true,
        showErrors: true,
        showCorrections: true,
        width: 800,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'cubicEquationRootsDiagram': {
    name: 'Cubic Equation Roots Diagram',
    category: 'Factorisation',
    description: 'Graph showing roots of a cubic equation',
    type: 'cubic_roots',
    defaultOptions: {
        title: 'Cubic Equation Roots',
        showGraph: true,
        showRoots: true,
        showFactors: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'irreducibleFactorDefinitionDiagram': {
    name: 'Irreducible Factor Definition Diagram',
    category: 'Factorisation',
    description: 'Diagram defining and illustrating irreducible factors',
    type: 'irreducible_factor_definition',
    defaultOptions: {
        title: 'Irreducible Factor Definition',
        showDefinition: true,
        showExamples: true,
        showNonExamples: true,
        width: 800,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'factorizationDecisionFlowchart': {
    name: 'Factorisation Decision Flowchart',
    category: 'Factorisation',
    description: 'Decision flowchart selecting the correct factorisation technique',
    type: 'factorisation_decision',
    defaultOptions: {
        title: 'Factorisation Decision Flowchart',
        showFlowchart: true,
        showDecisions: true,
        showTechniques: true,
        width: 1000,
        height: 900,
        backgroundColor: '#ffffff'
    }
},
'factorizationPriorityLadder': {
    name: 'Factorisation Priority Ladder',
    category: 'Factorisation',
    description: 'Ladder showing priority order of factorisation techniques',
    type: 'factorisation_priority',
    defaultOptions: {
        title: 'Factorisation Priority Ladder',
        showLadder: true,
        showPriority: true,
        showExamples: true,
        width: 700,
        height: 900,
        backgroundColor: '#ffffff'
    }
},
'multiStepFactorizationTree': {
    name: 'Multi-Step Factorisation Tree',
    category: 'Factorisation',
    description: 'Tree diagram for multi-step complete factorisation',
    type: 'multi_step_factorisation',
    defaultOptions: {
        title: 'Multi-Step Factorisation Tree',
        showTree: true,
        showSteps: true,
        showFinalForm: true,
        width: 900,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'rationalRootTheoremDiagram': {
    name: 'Rational Root Theorem Diagram',
    category: 'Factorisation',
    description: 'Diagram illustrating the rational root theorem and candidate roots',
    type: 'rational_root_theorem',
    defaultOptions: {
        title: 'Rational Root Theorem',
        showTheorem: true,
        showCandidates: true,
        showTesting: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'numberSetsFactorizationComparisonTable': {
    name: 'Number Sets Factorisation Comparison Table',
    category: 'Factorisation',
    description: 'Table comparing factorisability across different number sets',
    type: 'number_sets_factorisation',
    defaultOptions: {
        title: 'Factorisation Across Number Sets',
        showTable: true,
        showSets: true,
        showExamples: true,
        width: 1000,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'degreeAndCoefficientCheckDiagram': {
    name: 'Degree and Coefficient Check Diagram',
    category: 'Factorisation',
    description: 'Diagram for checking degree and leading coefficient before factorising',
    type: 'degree_coefficient_check',
    defaultOptions: {
        title: 'Degree and Coefficient Check',
        showDegree: true,
        showCoefficient: true,
        showChecklist: true,
        width: 800,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'prematureStopErrorDiagram': {
    name: 'Premature Stop Error Diagram',
    category: 'Factorisation',
    description: 'Diagram showing the error of stopping factorisation too early',
    type: 'premature_stop_error',
    defaultOptions: {
        title: 'Premature Stop Error',
        showIncomplete: true,
        showComplete: true,
        showAnnotation: true,
        width: 800,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'polynomialGraphZerosDiagram': {
    name: 'Polynomial Graph Zeros Diagram',
    category: 'Factorisation',
    description: 'Polynomial graph with zeros and their factors labelled',
    type: 'polynomial_graph_zeros',
    defaultOptions: {
        title: 'Polynomial Graph Zeros',
        showGraph: true,
        showZeros: true,
        showFactors: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

// ===== EQUATIONS (GENERAL) =====
'algebraicVocabularyDiagram': {
    name: 'Algebraic Vocabulary Diagram',
    category: 'Equations',
    description: 'Labelled diagram of key algebraic vocabulary',
    type: 'algebraic_vocabulary',
    defaultOptions: {
        title: 'Algebraic Vocabulary',
        showTerms: true,
        showLabels: true,
        showExamples: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'inverseOperationsDiagram': {
    name: 'Inverse Operations Diagram',
    category: 'Equations',
    description: 'Visual pairing of all fundamental inverse operations',
    type: 'inverse_operations',
    defaultOptions: {
        title: 'Inverse Operations',
        showPairs: true,
        showExamples: true,
        showArrows: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'twoStepSolvingFlowchart': {
    name: 'Two-Step Solving Flowchart',
    category: 'Equations',
    description: 'Flowchart for solving two-step linear equations',
    type: 'two_step_solving',
    defaultOptions: {
        title: 'Two-Step Equation Solving',
        showFlowchart: true,
        showSteps: true,
        showExample: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'distributivePropertyDiagram': {
    name: 'Distributive Property Diagram',
    category: 'Equations',
    description: 'Visual representation of the distributive property',
    type: 'distributive_property',
    defaultOptions: {
        title: 'Distributive Property',
        showExpression: true,
        showDistribution: true,
        showResult: true,
        width: 800,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'lcdFractionsDiagram': {
    name: 'LCD Fractions Diagram',
    category: 'Equations',
    description: 'Diagram showing LCD method for solving equations with fractions',
    type: 'lcd_fractions',
    defaultOptions: {
        title: 'LCD for Fraction Equations',
        showFractions: true,
        showLCD: true,
        showSolution: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'decimalPlaceValueDiagram': {
    name: 'Decimal Place Value Diagram',
    category: 'Equations',
    description: 'Place value diagram for decimal equations',
    type: 'decimal_place_value',
    defaultOptions: {
        title: 'Decimal Place Value',
        showPlaces: true,
        showValues: true,
        showLabels: true,
        width: 900,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'formulaRearrangementDiagram': {
    name: 'Formula Rearrangement Diagram',
    category: 'Equations',
    description: 'Diagram showing steps to rearrange a formula for a given variable',
    type: 'formula_rearrangement',
    defaultOptions: {
        title: 'Formula Rearrangement',
        showOriginal: true,
        showSteps: true,
        showResult: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'numberLineInequalityDiagram': {
    name: 'Number Line Inequality Diagram',
    category: 'Equations',
    description: 'Number line with inequality solution sets plotted',
    type: 'number_line_inequality',
    defaultOptions: {
        title: 'Number Line Inequality',
        showNumberLine: true,
        showInequality: true,
        showSolution: true,
        width: 900,
        height: 400,
        backgroundColor: '#ffffff'
    }
},
'absoluteValueNumberLineDiagram': {
    name: 'Absolute Value Number Line Diagram',
    category: 'Equations',
    description: 'Number line illustrating absolute value and distance',
    type: 'absolute_value_line',
    defaultOptions: {
        title: 'Absolute Value on Number Line',
        showNumberLine: true,
        showAbsValue: true,
        showDistance: true,
        width: 900,
        height: 400,
        backgroundColor: '#ffffff'
    }
},
'systemsIntersectionGraph': {
    name: 'Systems Intersection Graph',
    category: 'Equations',
    description: 'Graph showing solution as intersection of two linear equations',
    type: 'systems_intersection',
    defaultOptions: {
        title: 'Systems of Equations: Intersection',
        showLines: true,
        showIntersection: true,
        showSolution: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'slopeInterceptGraph': {
    name: 'Slope-Intercept Graph',
    category: 'Equations',
    description: 'Graph of a line in slope-intercept form with labelled components',
    type: 'slope_intercept_graph',
    defaultOptions: {
        title: 'Slope-Intercept Graph',
        showLine: true,
        showSlope: true,
        showIntercept: true,
        showEquation: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'rateDistanceTimeDiagram': {
    name: 'Rate-Distance-Time Diagram',
    category: 'Equations',
    description: 'Triangle diagram for the rate-distance-time formula',
    type: 'rate_distance_time',
    defaultOptions: {
        title: 'Rate, Distance, and Time',
        showTriangle: true,
        showFormulas: true,
        showExample: true,
        width: 700,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

// ===== QUADRATICS =====
'parabolaAnatomyDiagram': {
    name: 'Parabola Anatomy Diagram',
    category: 'Quadratics',
    description: 'Labelled anatomy of a parabola including vertex, axis, roots',
    type: 'parabola_anatomy',
    defaultOptions: {
        title: 'Parabola Anatomy',
        showParabola: true,
        showVertex: true,
        showAxis: true,
        showRoots: true,
        showYIntercept: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'completingSquareAreaModel': {
    name: 'Completing Square Area Model',
    category: 'Quadratics',
    description: 'Area model demonstrating the completing the square technique',
    type: 'completing_square_area',
    defaultOptions: {
        title: 'Completing the Square: Area Model',
        showAreaModel: true,
        showSteps: true,
        showResult: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'quadraticFormulaDerivationDiagram': {
    name: 'Quadratic Formula Derivation Diagram',
    category: 'Quadratics',
    description: 'Step-by-step derivation of the quadratic formula',
    type: 'quadratic_formula_derivation',
    defaultOptions: {
        title: 'Quadratic Formula Derivation',
        showSteps: true,
        showFormula: true,
        showAnnotations: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'discriminantNatureOfRootsDiagram': {
    name: 'Discriminant Nature of Roots Diagram',
    category: 'Quadratics',
    description: 'Three parabola cases showing discriminant and nature of roots',
    type: 'discriminant_roots',
    defaultOptions: {
        title: 'Discriminant and Nature of Roots',
        showCases: true,
        showDiscriminant: true,
        showParabolas: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'complexPlaneDiagram': {
    name: 'Complex Plane Diagram',
    category: 'Quadratics',
    description: 'Argand diagram showing complex roots on the complex plane',
    type: 'complex_plane',
    defaultOptions: {
        title: 'Complex Plane (Argand Diagram)',
        showAxes: true,
        showRoots: true,
        showConjugate: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'sumProductRootsDiagram': {
    name: 'Sum and Product of Roots Diagram',
    category: 'Quadratics',
    description: 'Diagram linking root relationships to Vieta\'s formulas',
    type: 'sum_product_roots',
    defaultOptions: {
        title: 'Sum and Product of Roots',
        showRoots: true,
        showFormulas: true,
        showRelationship: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'parabolaTransformationsDiagram': {
    name: 'Parabola Transformations Diagram',
    category: 'Quadratics',
    description: 'Diagram showing translations, reflections, and dilations of parabolas',
    type: 'parabola_transformations',
    defaultOptions: {
        title: 'Parabola Transformations',
        showBase: true,
        showTranslations: true,
        showReflections: true,
        showDilations: true,
        width: 900,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'parabolaSignChartDiagram': {
    name: 'Parabola Sign Chart Diagram',
    category: 'Quadratics',
    description: 'Sign chart showing positive/negative regions of a quadratic',
    type: 'parabola_sign_chart',
    defaultOptions: {
        title: 'Parabola Sign Chart',
        showParabola: true,
        showSignChart: true,
        showRoots: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'uSubstitutionDiagram': {
    name: 'U-Substitution Diagram',
    category: 'Quadratics',
    description: 'Diagram showing u-substitution to reduce a higher-degree equation',
    type: 'u_substitution',
    defaultOptions: {
        title: 'U-Substitution Method',
        showSubstitution: true,
        showSolving: true,
        showBackSubstitution: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'lineParabolaIntersectionDiagram': {
    name: 'Line-Parabola Intersection Diagram',
    category: 'Quadratics',
    description: 'Graph showing intersection cases between a line and parabola',
    type: 'line_parabola_intersection',
    defaultOptions: {
        title: 'Line-Parabola Intersection',
        showParabola: true,
        showLine: true,
        showIntersections: true,
        showCases: true,
        width: 900,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'projectileMotionDiagram': {
    name: 'Projectile Motion Diagram',
    category: 'Quadratics',
    description: 'Parabolic projectile motion diagram with key points labelled',
    type: 'projectile_motion',
    defaultOptions: {
        title: 'Projectile Motion',
        showPath: true,
        showVertex: true,
        showRange: true,
        showEquation: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

// ===== POLYNOMIALS =====
'polynomialAnatomyDiagram': {
    name: 'Polynomial Anatomy Diagram',
    category: 'Polynomials',
    description: 'Labelled anatomy of a polynomial expression',
    type: 'polynomial_anatomy',
    defaultOptions: {
        title: 'Polynomial Anatomy',
        showTerms: true,
        showDegree: true,
        showCoefficients: true,
        showLabels: true,
        width: 900,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'longDivisionAlgorithmDiagram': {
    name: 'Long Division Algorithm Diagram',
    category: 'Polynomials',
    description: 'Step-by-step polynomial long division algorithm',
    type: 'long_division_algorithm',
    defaultOptions: {
        title: 'Polynomial Long Division',
        showDividend: true,
        showDivisor: true,
        showSteps: true,
        showRemainder: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'remainderTheoremDiagram': {
    name: 'Remainder Theorem Diagram',
    category: 'Polynomials',
    description: 'Diagram illustrating the polynomial remainder theorem',
    type: 'remainder_theorem',
    defaultOptions: {
        title: 'Remainder Theorem',
        showTheorem: true,
        showEvaluation: true,
        showConnection: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'rationalRootCandidatesDiagram': {
    name: 'Rational Root Candidates Diagram',
    category: 'Polynomials',
    description: 'Diagram listing and testing rational root candidates',
    type: 'rational_root_candidates',
    defaultOptions: {
        title: 'Rational Root Candidates',
        showCandidates: true,
        showTesting: true,
        showResult: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'sumDifferenceOfCubesDiagram': {
    name: 'Sum/Difference of Cubes Diagram',
    category: 'Polynomials',
    description: 'Diagram of sum and difference of cubes identities',
    type: 'sum_difference_cubes',
    defaultOptions: {
        title: 'Sum and Difference of Cubes',
        showSum: true,
        showDifference: true,
        showIdentities: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'polynomialEndBehaviourDiagram': {
    name: 'Polynomial End Behaviour Diagram',
    category: 'Polynomials',
    description: 'Diagram showing end behaviour of polynomials by degree and leading term',
    type: 'polynomial_end_behaviour',
    defaultOptions: {
        title: 'Polynomial End Behaviour',
        showCases: true,
        showDegree: true,
        showLeadingCoefficient: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'cubicQuarticSolutionFlowchart': {
    name: 'Cubic/Quartic Solution Flowchart',
    category: 'Polynomials',
    description: 'Flowchart for solving cubic and quartic polynomial equations',
    type: 'cubic_quartic_flowchart',
    defaultOptions: {
        title: 'Cubic and Quartic Solution Flowchart',
        showFlowchart: true,
        showMethods: true,
        showDecisions: true,
        width: 1000,
        height: 900,
        backgroundColor: '#ffffff'
    }
},
'binomialTheoremPascalTriangle': {
    name: 'Binomial Theorem Pascal Triangle',
    category: 'Polynomials',
    description: 'Pascal\'s triangle linked to binomial theorem expansion',
    type: 'pascal_binomial',
    defaultOptions: {
        title: 'Binomial Theorem and Pascal\'s Triangle',
        showTriangle: true,
        showExpansion: true,
        showCoefficients: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'evenOddFunctionSymmetryDiagram': {
    name: 'Even/Odd Function Symmetry Diagram',
    category: 'Polynomials',
    description: 'Diagram comparing symmetry of even and odd functions',
    type: 'even_odd_symmetry',
    defaultOptions: {
        title: 'Even and Odd Function Symmetry',
        showEven: true,
        showOdd: true,
        showAxes: true,
        showSymmetry: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'polynomialIntersectionDiagram': {
    name: 'Polynomial Intersection Diagram',
    category: 'Polynomials',
    description: 'Graph showing intersection of two polynomial curves',
    type: 'polynomial_intersection',
    defaultOptions: {
        title: 'Polynomial Intersection',
        showPolynomials: true,
        showIntersections: true,
        showSolutions: true,
        width: 900,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'openBoxVolumeDiagram': {
    name: 'Open Box Volume Diagram',
    category: 'Polynomials',
    description: 'Diagram for the open box volume optimisation problem',
    type: 'open_box_volume',
    defaultOptions: {
        title: 'Open Box Volume Problem',
        showBox: true,
        showDimensions: true,
        showFormula: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

// ===== RATIONAL EXPRESSIONS =====
'rationalExpressionAnatomyDiagram': {
    name: 'Rational Expression Anatomy Diagram',
    category: 'Rational Expressions',
    description: 'Labelled anatomy of a rational algebraic expression',
    type: 'rational_expression_anatomy',
    defaultOptions: {
        title: 'Rational Expression Anatomy',
        showNumerator: true,
        showDenominator: true,
        showDomain: true,
        showLabels: true,
        width: 800,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'factorCancelDiagram': {
    name: 'Factor Cancel Diagram',
    category: 'Rational Expressions',
    description: 'Diagram showing factor cancellation in rational expressions',
    type: 'factor_cancel',
    defaultOptions: {
        title: 'Factor Cancellation',
        showFactors: true,
        showCancellation: true,
        showResult: true,
        width: 800,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'clearingDenominatorsFlowchart': {
    name: 'Clearing Denominators Flowchart',
    category: 'Rational Expressions',
    description: 'Flowchart for clearing denominators to solve rational equations',
    type: 'clearing_denominators',
    defaultOptions: {
        title: 'Clearing Denominators Flowchart',
        showFlowchart: true,
        showSteps: true,
        showExample: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'directInverseVariationGraph': {
    name: 'Direct/Inverse Variation Graph',
    category: 'Rational Expressions',
    description: 'Graphs comparing direct and inverse variation functions',
    type: 'variation_graphs',
    defaultOptions: {
        title: 'Direct and Inverse Variation',
        showDirect: true,
        showInverse: true,
        showEquations: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'asymptolesAndHolesDiagram': {
    name: 'Asymptotes and Holes Diagram',
    category: 'Rational Expressions',
    description: 'Graph of a rational function with asymptotes and holes labelled',
    type: 'asymptotes_holes',
    defaultOptions: {
        title: 'Asymptotes and Holes',
        showGraph: true,
        showAsymptotes: true,
        showHoles: true,
        showLabels: true,
        width: 900,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'partialFractionDecompositionDiagram': {
    name: 'Partial Fraction Decomposition Diagram',
    category: 'Rational Expressions',
    description: 'Step-by-step partial fraction decomposition diagram',
    type: 'partial_fraction_decomposition',
    defaultOptions: {
        title: 'Partial Fraction Decomposition',
        showSetup: true,
        showSolving: true,
        showResult: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'rationalInequalitySignChart': {
    name: 'Rational Inequality Sign Chart',
    category: 'Rational Expressions',
    description: 'Sign chart for solving rational inequalities',
    type: 'rational_inequality_sign',
    defaultOptions: {
        title: 'Rational Inequality Sign Chart',
        showCriticalPoints: true,
        showSignChart: true,
        showSolution: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'complexFractionSimplificationDiagram': {
    name: 'Complex Fraction Simplification Diagram',
    category: 'Rational Expressions',
    description: 'Step-by-step simplification of complex (nested) fractions',
    type: 'complex_fraction_simplification',
    defaultOptions: {
        title: 'Complex Fraction Simplification',
        showFraction: true,
        showSteps: true,
        showResult: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'workRatePipesDiagram': {
    name: 'Work Rate Pipes Diagram',
    category: 'Rational Expressions',
    description: 'Diagram for work-rate problems involving pipes or workers',
    type: 'work_rate_pipes',
    defaultOptions: {
        title: 'Work Rate: Pipes Problem',
        showPipes: true,
        showRates: true,
        showFormula: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

// ===== RADICALS =====
'radicalNotationAnatomyDiagram': {
    name: 'Radical Notation Anatomy Diagram',
    category: 'Radicals',
    description: 'Labelled anatomy of radical notation',
    type: 'radical_anatomy',
    defaultOptions: {
        title: 'Radical Notation Anatomy',
        showRadicand: true,
        showIndex: true,
        showRadicalSign: true,
        showLabels: true,
        width: 700,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'productQuotientPropertyDiagram': {
    name: 'Product/Quotient Property Diagram',
    category: 'Radicals',
    description: 'Diagram of product and quotient properties of radicals',
    type: 'product_quotient_radical',
    defaultOptions: {
        title: 'Product and Quotient Properties of Radicals',
        showProduct: true,
        showQuotient: true,
        showExamples: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'likeRadicalsCombiningDiagram': {
    name: 'Like Radicals Combining Diagram',
    category: 'Radicals',
    description: 'Diagram showing how to combine like radical terms',
    type: 'like_radicals',
    defaultOptions: {
        title: 'Combining Like Radicals',
        showLikeTerms: true,
        showCombining: true,
        showResult: true,
        width: 800,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'isolateAndSquareDiagram': {
    name: 'Isolate and Square Diagram',
    category: 'Radicals',
    description: 'Step-by-step diagram for isolating a radical and squaring both sides',
    type: 'isolate_and_square',
    defaultOptions: {
        title: 'Isolate and Square Method',
        showIsolation: true,
        showSquaring: true,
        showCheck: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'cubeRootEquationDiagram': {
    name: 'Cube Root Equation Diagram',
    category: 'Radicals',
    description: 'Diagram for solving cube root equations',
    type: 'cube_root_equation',
    defaultOptions: {
        title: 'Cube Root Equation',
        showEquation: true,
        showCubing: true,
        showSolution: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'doubleRadicalIsolationDiagram': {
    name: 'Double Radical Isolation Diagram',
    category: 'Radicals',
    description: 'Two-stage diagram for isolating and eliminating double radicals',
    type: 'double_radical_isolation',
    defaultOptions: {
        title: 'Double Radical Isolation',
        showStage1: true,
        showStage2: true,
        showSolution: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'radicalInequalityDomainDiagram': {
    name: 'Radical Inequality Domain Diagram',
    category: 'Radicals',
    description: 'Diagram showing domain restrictions for radical inequalities',
    type: 'radical_inequality_domain',
    defaultOptions: {
        title: 'Radical Inequality Domain',
        showDomain: true,
        showInequality: true,
        showSolution: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'squareRootTransformationsDiagram': {
    name: 'Square Root Transformations Diagram',
    category: 'Radicals',
    description: 'Graph showing transformations of the square root function',
    type: 'sqrt_transformations',
    defaultOptions: {
        title: 'Square Root Function Transformations',
        showBase: true,
        showTranslations: true,
        showReflections: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'uSubstitutionRadicalDiagram': {
    name: 'U-Substitution Radical Diagram',
    category: 'Radicals',
    description: 'Diagram for applying u-substitution to radical equations',
    type: 'u_substitution_radical',
    defaultOptions: {
        title: 'U-Substitution for Radical Equations',
        showSubstitution: true,
        showSolving: true,
        showBackSubstitution: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'extraneousSolutionGraphDiagram': {
    name: 'Extraneous Solution Graph Diagram',
    category: 'Radicals',
    description: 'Graph identifying extraneous solutions in radical equations',
    type: 'extraneous_solution_graph',
    defaultOptions: {
        title: 'Extraneous Solutions Graph',
        showGraph: true,
        showSolutions: true,
        showExtraneous: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'pythagoreanDistanceDiagram': {
    name: 'Pythagorean Distance Diagram',
    category: 'Radicals',
    description: 'Coordinate diagram applying Pythagoras to find distance between points',
    type: 'pythagorean_distance',
    defaultOptions: {
        title: 'Pythagorean Distance Formula',
        showPoints: true,
        showTriangle: true,
        showFormula: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},

// ===== TRANSFORMATIONS =====
'translationVectorDiagram': {
    name: 'Translation Vector Diagram',
    category: 'Transformations',
    description: 'Diagram showing a translation defined by a vector',
    type: 'translation_vector',
    defaultOptions: {
        title: 'Translation Vector',
        showVector: true,
        showObject: true,
        showImage: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'translationCoordinateGrid': {
    name: 'Translation Coordinate Grid',
    category: 'Transformations',
    description: 'Coordinate grid showing translation of a shape',
    type: 'translation_grid',
    defaultOptions: {
        title: 'Translation on Coordinate Grid',
        showGrid: true,
        showShape: true,
        showTranslation: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'translatedPolygonDiagram': {
    name: 'Translated Polygon Diagram',
    category: 'Transformations',
    description: 'Diagram of a polygon and its translated image',
    type: 'translated_polygon',
    defaultOptions: {
        title: 'Translated Polygon',
        showOriginal: true,
        showImage: true,
        showVector: true,
        showCoordinates: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'translationCongruenceDiagram': {
    name: 'Translation Congruence Diagram',
    category: 'Transformations',
    description: 'Diagram showing that translation preserves congruence',
    type: 'translation_congruence',
    defaultOptions: {
        title: 'Translation Preserves Congruence',
        showOriginal: true,
        showImage: true,
        showMeasurements: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'columnVectorRepresentation': {
    name: 'Column Vector Representation',
    category: 'Transformations',
    description: 'Visual representation of a translation as a column vector',
    type: 'column_vector',
    defaultOptions: {
        title: 'Column Vector Representation',
        showVector: true,
        showComponents: true,
        showLabels: true,
        width: 600,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'translationGridPlot': {
    name: 'Translation Grid Plot',
    category: 'Transformations',
    description: 'Coordinate grid plot for practising translations',
    type: 'translation_grid_plot',
    defaultOptions: {
        title: 'Translation Grid Plot',
        showGrid: true,
        showOriginal: true,
        showTranslated: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'functionHorizontalVerticalShiftDiagram': {
    name: 'Function Horizontal/Vertical Shift Diagram',
    category: 'Transformations',
    description: 'Graphs showing horizontal and vertical shifts of a function',
    type: 'function_shifts',
    defaultOptions: {
        title: 'Function Horizontal and Vertical Shifts',
        showBase: true,
        showHorizontal: true,
        showVertical: true,
        showLabels: true,
        width: 900,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'composedTranslationVectorDiagram': {
    name: 'Composed Translation Vector Diagram',
    category: 'Transformations',
    description: 'Diagram showing composition of two translation vectors',
    type: 'composed_translation',
    defaultOptions: {
        title: 'Composed Translation Vectors',
        showVectors: true,
        showComposition: true,
        showResultant: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'tessellationTranslationPattern': {
    name: 'Tessellation Translation Pattern',
    category: 'Transformations',
    description: 'Tessellation pattern created by repeated translation',
    type: 'tessellation_translation',
    defaultOptions: {
        title: 'Tessellation by Translation',
        showPattern: true,
        showVectors: true,
        showUnit: true,
        width: 900,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'translationalSymmetryPattern': {
    name: 'Translational Symmetry Pattern',
    category: 'Transformations',
    description: 'Pattern demonstrating translational symmetry',
    type: 'translational_symmetry',
    defaultOptions: {
        title: 'Translational Symmetry',
        showPattern: true,
        showSymmetry: true,
        showVectors: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'mirrorLineDiagram': {
    name: 'Mirror Line Diagram',
    category: 'Transformations',
    description: 'Diagram showing reflection across a mirror line',
    type: 'mirror_line',
    defaultOptions: {
        title: 'Mirror Line Reflection',
        showMirrorLine: true,
        showObject: true,
        showImage: true,
        showPerpendicularBisectors: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'standardMirrorLinesDiagram': {
    name: 'Standard Mirror Lines Diagram',
    category: 'Transformations',
    description: 'Diagram of standard mirror lines: x-axis, y-axis, y=x, y=-x',
    type: 'standard_mirror_lines',
    defaultOptions: {
        title: 'Standard Mirror Lines',
        showXAxis: true,
        showYAxis: true,
        showYEqualsX: true,
        showYEqualsNegX: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'reflectedPolygonDiagram': {
    name: 'Reflected Polygon Diagram',
    category: 'Transformations',
    description: 'Polygon and its reflected image with construction lines shown',
    type: 'reflected_polygon',
    defaultOptions: {
        title: 'Reflected Polygon',
        showOriginal: true,
        showImage: true,
        showConstruction: true,
        showMirrorLine: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'orientationReversalDiagram': {
    name: 'Orientation Reversal Diagram',
    category: 'Transformations',
    description: 'Diagram showing reversal of orientation under reflection',
    type: 'orientation_reversal',
    defaultOptions: {
        title: 'Orientation Reversal Under Reflection',
        showOriginal: true,
        showImage: true,
        showOrientation: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'linesOfSymmetryByShapeDiagram': {
    name: 'Lines of Symmetry by Shape Diagram',
    category: 'Transformations',
    description: 'Diagram showing lines of symmetry for common shapes',
    type: 'lines_of_symmetry',
    defaultOptions: {
        title: 'Lines of Symmetry by Shape',
        showShapes: true,
        showLines: true,
        showCount: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'obliqueReflectionConstruction': {
    name: 'Oblique Reflection Construction',
    category: 'Transformations',
    description: 'Construction diagram for reflection across an oblique mirror line',
    type: 'oblique_reflection',
    defaultOptions: {
        title: 'Oblique Reflection Construction',
        showMirrorLine: true,
        showConstruction: true,
        showImage: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'doubleReflectionTranslationDiagram': {
    name: 'Double Reflection Translation Diagram',
    category: 'Transformations',
    description: 'Diagram showing that two reflections compose to a translation',
    type: 'double_reflection_translation',
    defaultOptions: {
        title: 'Double Reflection = Translation',
        showReflections: true,
        showTranslation: true,
        showParallelLines: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'midpointMirrorLineDiagram': {
    name: 'Midpoint Mirror Line Diagram',
    category: 'Transformations',
    description: 'Diagram showing mirror line as locus of midpoints between object and image',
    type: 'midpoint_mirror_line',
    defaultOptions: {
        title: 'Midpoint and Mirror Line',
        showMidpoints: true,
        showMirrorLine: true,
        showConstruction: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'reflectionMatrixDiagram': {
    name: 'Reflection Matrix Diagram',
    category: 'Transformations',
    description: 'Diagram linking reflection transformations to their matrices',
    type: 'reflection_matrix',
    defaultOptions: {
        title: 'Reflection Matrix',
        showMatrix: true,
        showTransformation: true,
        showExamples: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'rotationCenterAngleDiagram': {
    name: 'Rotation Center and Angle Diagram',
    category: 'Transformations',
    description: 'Diagram defining center of rotation and angle of rotation',
    type: 'rotation_center_angle',
    defaultOptions: {
        title: 'Rotation: Centre and Angle',
        showCenter: true,
        showAngle: true,
        showObject: true,
        showImage: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'standardRotationRulesDiagram': {
    name: 'Standard Rotation Rules Diagram',
    category: 'Transformations',
    description: 'Reference diagram for 90°, 180°, 270° rotation coordinate rules',
    type: 'standard_rotation_rules',
    defaultOptions: {
        title: 'Standard Rotation Rules',
        showRules: true,
        showExamples: true,
        showTable: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'nonOriginRotationDiagram': {
    name: 'Non-Origin Rotation Diagram',
    category: 'Transformations',
    description: 'Diagram for rotation about a centre other than the origin',
    type: 'non_origin_rotation',
    defaultOptions: {
        title: 'Rotation About Non-Origin Centre',
        showCenter: true,
        showObject: true,
        showImage: true,
        showSteps: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'rotatedPolygonDiagram': {
    name: 'Rotated Polygon Diagram',
    category: 'Transformations',
    description: 'Polygon and its rotated image with arc annotations',
    type: 'rotated_polygon',
    defaultOptions: {
        title: 'Rotated Polygon',
        showOriginal: true,
        showImage: true,
        showArcs: true,
        showCenter: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'rotationalSymmetryOrderDiagram': {
    name: 'Rotational Symmetry Order Diagram',
    category: 'Transformations',
    description: 'Diagram showing rotational symmetry order for common shapes',
    type: 'rotational_symmetry_order',
    defaultOptions: {
        title: 'Rotational Symmetry Order',
        showShapes: true,
        showOrders: true,
        showAngles: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'rotationIsometryDiagram': {
    name: 'Rotation Isometry Diagram',
    category: 'Transformations',
    description: 'Diagram confirming rotation preserves distance and orientation',
    type: 'rotation_isometry',
    defaultOptions: {
        title: 'Rotation as Isometry',
        showOriginal: true,
        showImage: true,
        showMeasurements: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'composedRotationDiagram': {
    name: 'Composed Rotation Diagram',
    category: 'Transformations',
    description: 'Diagram showing composition of two rotations',
    type: 'composed_rotation',
    defaultOptions: {
        title: 'Composed Rotations',
        showRotation1: true,
        showRotation2: true,
        showComposed: true,
        width: 900,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'complexPlaneRotationDiagram': {
    name: 'Complex Plane Rotation Diagram',
    category: 'Transformations',
    description: 'Complex plane diagram showing rotation via multiplication',
    type: 'complex_plane_rotation',
    defaultOptions: {
        title: 'Complex Plane Rotation',
        showPlane: true,
        showMultiplication: true,
        showRotation: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'rotationMatrixDiagram': {
    name: 'Rotation Matrix Diagram',
    category: 'Transformations',
    description: 'Diagram linking rotation transformations to their matrices',
    type: 'rotation_matrix',
    defaultOptions: {
        title: 'Rotation Matrix',
        showMatrix: true,
        showTransformation: true,
        showAngles: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'clockBearingRotationDiagram': {
    name: 'Clock/Bearing Rotation Diagram',
    category: 'Transformations',
    description: 'Diagram connecting clockwise bearings to mathematical angles',
    type: 'clock_bearing_rotation',
    defaultOptions: {
        title: 'Clock Bearing vs Mathematical Angle',
        showClock: true,
        showBearing: true,
        showMathAngle: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'dilationCenterScaleFactorDiagram': {
    name: 'Dilation Center and Scale Factor Diagram',
    category: 'Transformations',
    description: 'Diagram defining center of dilation and scale factor',
    type: 'dilation_center_scale',
    defaultOptions: {
        title: 'Dilation: Centre and Scale Factor',
        showCenter: true,
        showScaleFactor: true,
        showObject: true,
        showImage: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'dilationCoordinateRuleDiagram': {
    name: 'Dilation Coordinate Rule Diagram',
    category: 'Transformations',
    description: 'Diagram showing the coordinate rule for dilation from the origin',
    type: 'dilation_coordinate_rule',
    defaultOptions: {
        title: 'Dilation Coordinate Rule',
        showRule: true,
        showExample: true,
        showGrid: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'dilatedPolygonDiagram': {
    name: 'Dilated Polygon Diagram',
    category: 'Transformations',
    description: 'Polygon and its dilated image with centre of dilation shown',
    type: 'dilated_polygon',
    defaultOptions: {
        title: 'Dilated Polygon',
        showOriginal: true,
        showImage: true,
        showCenter: true,
        showRays: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'dilationNonIsometryDiagram': {
    name: 'Dilation Non-Isometry Diagram',
    category: 'Transformations',
    description: 'Diagram showing that dilation is not an isometry (changes size)',
    type: 'dilation_non_isometry',
    defaultOptions: {
        title: 'Dilation Is Not an Isometry',
        showOriginal: true,
        showImage: true,
        showMeasurements: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'similarFiguresScaleFactorDiagram': {
    name: 'Similar Figures Scale Factor Diagram',
    category: 'Transformations',
    description: 'Diagram of similar figures with scale factor ratios labelled',
    type: 'similar_figures_scale',
    defaultOptions: {
        title: 'Similar Figures and Scale Factor',
        showFigures: true,
        showRatios: true,
        showScaleFactor: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'verticalHorizontalDilationFunctionGraph': {
    name: 'Vertical/Horizontal Dilation Function Graph',
    category: 'Transformations',
    description: 'Graph showing vertical and horizontal dilations of a function',
    type: 'function_dilation',
    defaultOptions: {
        title: 'Vertical and Horizontal Dilation of Functions',
        showBase: true,
        showVertical: true,
        showHorizontal: true,
        showLabels: true,
        width: 900,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'triangleSimilarityCriteriaDiagram': {
    name: 'Triangle Similarity Criteria Diagram',
    category: 'Transformations',
    description: 'Diagram of AA, SAS, and SSS triangle similarity criteria',
    type: 'triangle_similarity',
    defaultOptions: {
        title: 'Triangle Similarity Criteria',
        showAA: true,
        showSAS: true,
        showSSS: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'spiralSimilarityDiagram': {
    name: 'Spiral Similarity Diagram',
    category: 'Transformations',
    description: 'Diagram illustrating spiral similarity as rotation combined with dilation',
    type: 'spiral_similarity',
    defaultOptions: {
        title: 'Spiral Similarity',
        showSpiral: true,
        showRotation: true,
        showDilation: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'centerOfDilationConstructionDiagram': {
    name: 'Center of Dilation Construction Diagram',
    category: 'Transformations',
    description: 'Construction diagram for finding the centre of dilation',
    type: 'center_of_dilation',
    defaultOptions: {
        title: 'Centre of Dilation Construction',
        showFigures: true,
        showConstruction: true,
        showCenter: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'mapScaleAndBlueprintDiagram': {
    name: 'Map Scale and Blueprint Diagram',
    category: 'Transformations',
    description: 'Real-world diagram applying dilation to map scale and blueprints',
    type: 'map_scale_blueprint',
    defaultOptions: {
        title: 'Map Scale and Blueprint',
        showMap: true,
        showScale: true,
        showBlueprint: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'compositionNotationDiagram': {
    name: 'Composition Notation Diagram',
    category: 'Transformations',
    description: 'Diagram explaining composition of transformations notation',
    type: 'composition_notation',
    defaultOptions: {
        title: 'Composition Notation',
        showNotation: true,
        showOrder: true,
        showExample: true,
        width: 800,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'compositionPairsResultsDiagram': {
    name: 'Composition Pairs Results Diagram',
    category: 'Transformations',
    description: 'Table/diagram of transformation composition pairs and their results',
    type: 'composition_pairs_results',
    defaultOptions: {
        title: 'Composition Pairs and Results',
        showTable: true,
        showPairs: true,
        showResults: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'glideReflectionFootprintDiagram': {
    name: 'Glide Reflection Footprint Diagram',
    category: 'Transformations',
    description: 'Footprint diagram illustrating glide reflection',
    type: 'glide_reflection',
    defaultOptions: {
        title: 'Glide Reflection',
        showTranslation: true,
        showReflection: true,
        showFootprints: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'fourIsometriesClassificationDiagram': {
    name: 'Four Isometries Classification Diagram',
    category: 'Transformations',
    description: 'Classification diagram of the four isometries',
    type: 'four_isometries',
    defaultOptions: {
        title: 'Four Isometries Classification',
        showTranslation: true,
        showReflection: true,
        showRotation: true,
        showGlideReflection: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'stepByStepCompositionCoordinateDiagram': {
    name: 'Step-by-Step Composition Coordinate Diagram',
    category: 'Transformations',
    description: 'Coordinate diagram stepping through a composition of transformations',
    type: 'composition_coordinate_steps',
    defaultOptions: {
        title: 'Composition: Step-by-Step Coordinates',
        showStep1: true,
        showStep2: true,
        showResult: true,
        width: 900,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'inverseTransformationUndoDiagram': {
    name: 'Inverse Transformation Undo Diagram',
    category: 'Transformations',
    description: 'Diagram showing how inverse transformations undo each other',
    type: 'inverse_transformation_undo',
    defaultOptions: {
        title: 'Inverse Transformation Undo',
        showTransformation: true,
        showInverse: true,
        showIdentity: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'dihedralCyclicGroupDiagram': {
    name: 'Dihedral/Cyclic Group Diagram',
    category: 'Transformations',
    description: 'Diagram showing dihedral and cyclic symmetry groups',
    type: 'dihedral_cyclic_group',
    defaultOptions: {
        title: 'Dihedral and Cyclic Groups',
        showDihedral: true,
        showCyclic: true,
        showExamples: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'homogeneousCoordinateMatrixDiagram': {
    name: 'Homogeneous Coordinate Matrix Diagram',
    category: 'Transformations',
    description: 'Diagram of homogeneous coordinates and transformation matrices',
    type: 'homogeneous_coordinate_matrix',
    defaultOptions: {
        title: 'Homogeneous Coordinate Matrix',
        showCoordinates: true,
        showMatrix: true,
        showExample: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'equivalentSingleTransformationDiagram': {
    name: 'Equivalent Single Transformation Diagram',
    category: 'Transformations',
    description: 'Diagram finding the single equivalent transformation for a composition',
    type: 'equivalent_single_transformation',
    defaultOptions: {
        title: 'Equivalent Single Transformation',
        showComposition: true,
        showEquivalent: true,
        showVerification: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'computerGraphicsTransformationPipelineDiagram': {
    name: 'Computer Graphics Transformation Pipeline Diagram',
    category: 'Transformations',
    description: 'Pipeline diagram of transformations in computer graphics',
    type: 'cg_transformation_pipeline',
    defaultOptions: {
        title: 'Computer Graphics Transformation Pipeline',
        showPipeline: true,
        showStages: true,
        showMatrices: true,
        width: 1000,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

// ===== VECTORS =====
'columnVectorComponentDiagram': {
    name: 'Column Vector Component Diagram',
    category: 'Vectors',
    description: 'Diagram showing components of a column vector',
    type: 'column_vector_component',
    defaultOptions: {
        title: 'Column Vector Components',
        showVector: true,
        showComponents: true,
        showLabels: true,
        width: 700,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'gridArrowToColumnVector': {
    name: 'Grid Arrow to Column Vector',
    category: 'Vectors',
    description: 'Diagram converting a grid arrow to column vector notation',
    type: 'grid_arrow_column_vector',
    defaultOptions: {
        title: 'Grid Arrow to Column Vector',
        showArrow: true,
        showGrid: true,
        showColumnVector: true,
        width: 700,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'translationShapeDiagram': {
    name: 'Translation Shape Diagram',
    category: 'Vectors',
    description: 'Diagram applying a column vector translation to a shape',
    type: 'translation_shape',
    defaultOptions: {
        title: 'Translation of a Shape',
        showShape: true,
        showVector: true,
        showImage: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'equalVectorsParallelArrows': {
    name: 'Equal Vectors Parallel Arrows',
    category: 'Vectors',
    description: 'Diagram showing equal vectors as parallel arrows of equal length',
    type: 'equal_vectors_parallel',
    defaultOptions: {
        title: 'Equal Vectors: Parallel Arrows',
        showVectors: true,
        showParallel: true,
        showEquality: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'negativeVectorReversalDiagram': {
    name: 'Negative Vector Reversal Diagram',
    category: 'Vectors',
    description: 'Diagram showing that a negative vector reverses direction',
    type: 'negative_vector_reversal',
    defaultOptions: {
        title: 'Negative Vector Reversal',
        showVector: true,
        showNegative: true,
        showReversal: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'threeDCoordinateAxesDiagram': {
    name: '3D Coordinate Axes Diagram',
    category: 'Vectors',
    description: '3D coordinate axes with x, y, z labelled',
    type: 'three_d_axes',
    defaultOptions: {
        title: '3D Coordinate Axes',
        showAxes: true,
        showLabels: true,
        showGrid: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'ijBasisVectorsDiagram': {
    name: 'i,j Basis Vectors Diagram',
    category: 'Vectors',
    description: 'Diagram showing the standard i and j basis vectors',
    type: 'ij_basis_vectors',
    defaultOptions: {
        title: 'i and j Basis Vectors',
        showI: true,
        showJ: true,
        showAxes: true,
        showLabels: true,
        width: 700,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'vectorPathTracingDiagram': {
    name: 'Vector Path Tracing Diagram',
    category: 'Vectors',
    description: 'Diagram tracing a path using consecutive vector additions',
    type: 'vector_path_tracing',
    defaultOptions: {
        title: 'Vector Path Tracing',
        showPath: true,
        showVectors: true,
        showLabels: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'originToPointArrowDiagram': {
    name: 'Origin to Point Arrow Diagram',
    category: 'Vectors',
    description: 'Diagram showing position vector as arrow from origin to point',
    type: 'origin_to_point_arrow',
    defaultOptions: {
        title: 'Origin to Point: Position Vector',
        showOrigin: true,
        showPoint: true,
        showArrow: true,
        showLabel: true,
        width: 700,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'positionVectorNotationChart': {
    name: 'Position Vector Notation Chart',
    category: 'Vectors',
    description: 'Reference chart of position vector notation and conventions',
    type: 'position_vector_notation',
    defaultOptions: {
        title: 'Position Vector Notation',
        showNotation: true,
        showExamples: true,
        showConventions: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'abVectorFromPositionVectorsDiagram': {
    name: 'AB Vector from Position Vectors Diagram',
    category: 'Vectors',
    description: 'Diagram deriving vector AB from position vectors of A and B',
    type: 'ab_vector_from_positions',
    defaultOptions: {
        title: 'Vector AB from Position Vectors',
        showA: true,
        showB: true,
        showPositionVectors: true,
        showAB: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'midpointPositionVectorDiagram': {
    name: 'Midpoint Position Vector Diagram',
    category: 'Vectors',
    description: 'Diagram showing position vector of the midpoint of a line segment',
    type: 'midpoint_position_vector',
    defaultOptions: {
        title: 'Midpoint Position Vector',
        showPoints: true,
        showMidpoint: true,
        showVectors: true,
        showFormula: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'sectionFormulaDivisionDiagram': {
    name: 'Section Formula Division Diagram',
    category: 'Vectors',
    description: 'Diagram showing section formula dividing a line segment in a ratio',
    type: 'section_formula_division',
    defaultOptions: {
        title: 'Section Formula',
        showPoints: true,
        showRatio: true,
        showFormula: true,
        showDivision: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'triangleCentroidMediansDiagram': {
    name: 'Triangle Centroid Medians Diagram',
    category: 'Vectors',
    description: 'Triangle diagram showing medians intersecting at the centroid',
    type: 'triangle_centroid_medians',
    defaultOptions: {
        title: 'Triangle Centroid and Medians',
        showTriangle: true,
        showMedians: true,
        showCentroid: true,
        showVectors: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'parallelogramVectorProofDiagram': {
    name: 'Parallelogram Vector Proof Diagram',
    category: 'Vectors',
    description: 'Diagram for vector proofs involving parallelogram properties',
    type: 'parallelogram_vector_proof',
    defaultOptions: {
        title: 'Parallelogram Vector Proof',
        showParallelogram: true,
        showVectors: true,
        showProof: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'threeDPositionVectorDiagram': {
    name: '3D Position Vector Diagram',
    category: 'Vectors',
    description: '3D diagram showing a position vector and its components',
    type: 'three_d_position_vector',
    defaultOptions: {
        title: '3D Position Vector',
        showAxes: true,
        showVector: true,
        showComponents: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'navigationPositionVectorDiagram': {
    name: 'Navigation Position Vector Diagram',
    category: 'Vectors',
    description: 'Real-world navigation diagram using position vectors and bearings',
    type: 'navigation_position_vector',
    defaultOptions: {
        title: 'Navigation Position Vectors',
        showMap: true,
        showVectors: true,
        showBearings: true,
        width: 900,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'componentWiseAdditionDiagram': {
    name: 'Component-Wise Addition Diagram',
    category: 'Vectors',
    description: 'Diagram showing vector addition by adding components',
    type: 'component_wise_addition',
    defaultOptions: {
        title: 'Component-Wise Vector Addition',
        showVectors: true,
        showComponents: true,
        showSum: true,
        showGrid: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},




        // ===== 1. NUMBER THEORY =====
        'numberLine': {
            name: 'Number Line',
            category: 'Number Theory',
            description: 'Visual representation of numbers on a line',
            type: 'number_line',
            range: { min: -10, max: 10 },
            markedPoints: [-5, -2, 0, 3, 7],
            defaultOptions: {
                title: 'Number Line',
                showIntegers: true,
                showZero: true,
                showNegatives: true,
                showArrows: true,
                width: 900,
                height: 200,
                backgroundColor: '#ffffff'
            }
        },

        'primeFactorTree': {
            name: 'Prime Factor Tree',
            category: 'Number Theory',
            description: 'Tree diagram showing prime factorization',
            type: 'prime_factor_tree',
            number: 60,
            defaultOptions: {
                title: 'Prime Factorization Tree - 60',
                showBranches: true,
                showPrimes: true,
                highlightPrimes: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'vennDiagramFactors': {
            name: 'Venn Diagram - HCF/LCM',
            category: 'Number Theory',
            description: 'Finding HCF and LCM using Venn diagrams',
            type: 'venn_diagram_factors',
            numbers: [12, 18],
            defaultOptions: {
                title: 'HCF and LCM using Venn Diagram',
                showFactors: true,
                showHCF: true,
                showLCM: true,
                showCalculations: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'divisibilityChart': {
            name: 'Divisibility Rules Chart',
            category: 'Number Theory',
            description: 'Visual chart of divisibility rules',
            type: 'divisibility_chart',
            divisors: [2, 3, 4, 5, 6, 8, 9, 10],
            defaultOptions: {
                title: 'Divisibility Rules',
                showRules: true,
                showExamples: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'realNumberHierarchy': {
            name: 'Real Number System Hierarchy',
            category: 'Number Theory',
            description: 'Tree showing classification of real numbers',
            type: 'number_hierarchy',
            defaultOptions: {
                title: 'Real Number System',
                showNatural: true,
                showWhole: true,
                showIntegers: true,
                showRational: true,
                showIrrational: true,
                showExamples: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'modularArithmeticClock': {
            name: 'Modular Arithmetic Clock',
            category: 'Number Theory',
            description: 'Clock diagram for modular arithmetic',
            type: 'modular_clock',
            modulus: 12,
            defaultOptions: {
                title: 'Modular Arithmetic (mod 12)',
                showNumbers: true,
                showArithmetic: true,
                highlightResidue: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== NUMBER THEORY APPARATUS/PROCESS DIAGRAMS =====
        'sieveOfEratosthenes': {
            name: 'Sieve of Eratosthenes Process',
            category: 'Number Theory',
            description: 'Step-by-step process of finding primes',
            type: 'apparatus_diagram',
            apparatusType: 'sieve_eratosthenes',
            maxNumber: 100,
            defaultOptions: {
                title: 'Sieve of Eratosthenes',
                showProcess: true,
                showGrid: true,
                showSteps: true,
                highlightMultiples: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Numbers being crossed out (multiples)',
                    constant: 'Starting number range (1-100)',
                    rule: 'Cross out all multiples of each prime, starting with 2'
                },
                width: 900,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'euclideanAlgorithm': {
            name: 'Euclidean Algorithm Process',
            category: 'Number Theory',
            description: 'Visual process of finding HCF using division',
            type: 'apparatus_diagram',
            apparatusType: 'euclidean_algorithm',
            number1: 48,
            number2: 18,
            defaultOptions: {
                title: 'Euclidean Algorithm',
                showProcess: true,
                showDivisionSteps: true,
                showRemainders: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Remainder (decreasing each step)',
                    constant: 'Original two numbers',
                    rule: 'HCF is the last non-zero remainder'
                },
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'longDivisionProcess': {
            name: 'Long Division Process',
            category: 'Number Theory',
            description: 'Step-by-step long division layout',
            type: 'apparatus_diagram',
            apparatusType: 'long_division',
            dividend: 1547,
            divisor: 23,
            defaultOptions: {
                title: 'Long Division',
                showProcess: true,
                showSteps: true,
                showRemainder: true,
                showQuotient: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Partial quotient, remainder',
                    constant: 'Dividend, divisor',
                    rule: 'Divide, multiply, subtract, bring down'
                },
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 2. ALGEBRA =====
        'algebraicBalanceModel': {
            name: 'Algebraic Balance Model',
            category: 'Algebra',
            description: 'Balance showing equation solving',
            type: 'balance_model',
            equation: '2x + 3 = 11',
            defaultOptions: {
                title: 'Solving Equations - Balance Method',
                showBalance: true,
                showSteps: true,
                showInverse: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'linearGraphPlot': {
            name: 'Linear Graph',
            category: 'Algebra',
            description: 'Graph of linear equation y = mx + c',
            type: 'linear_graph',
            slope: 2,
            intercept: 3,
            defaultOptions: {
                title: 'Linear Graph: y = 2x + 3',
                showGrid: true,
                showAxes: true,
                showSlope: true,
                showIntercept: true,
                showEquation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'quadraticParabola': {
            name: 'Quadratic Parabola',
            category: 'Algebra',
            description: 'Graph of quadratic function',
            type: 'quadratic_graph',
            a: 1,
            b: -4,
            c: 3,
            defaultOptions: {
                title: 'Quadratic Graph: y = x² - 4x + 3',
                showGrid: true,
                showVertex: true,
                showRoots: true,
                showAxisOfSymmetry: true,
                showYIntercept: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'quadraticFormulaVisual': {
            name: 'Quadratic Formula Diagram',
            category: 'Algebra',
            description: 'Visual breakdown of quadratic formula',
            type: 'quadratic_formula',
            a: 1,
            b: -5,
            c: 6,
            defaultOptions: {
                title: 'Quadratic Formula',
                showFormula: true,
                showDiscriminant: true,
                showRoots: true,
                showNatureOfRoots: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'completingSquareVisual': {
            name: 'Completing the Square Visual',
            category: 'Algebra',
            description: 'Geometric model of completing the square',
            type: 'completing_square',
            a: 1,
            b: 6,
            c: 5,
            defaultOptions: {
                title: 'Completing the Square',
                showSquare: true,
                showSteps: true,
                showGeometric: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'simultaneousEquationsGraph': {
            name: 'Simultaneous Equations Graph',
            category: 'Algebra',
            description: 'Graphical solution of two equations',
            type: 'simultaneous_graph',
            equation1: { m: 2, c: 1 },
            equation2: { m: -1, c: 7 },
            defaultOptions: {
                title: 'Simultaneous Equations - Graphical Solution',
                showBothLines: true,
                showIntersection: true,
                showSolution: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'polynomialDivisionLayout': {
            name: 'Polynomial Long Division',
            category: 'Algebra',
            description: 'Layout for polynomial division',
            type: 'polynomial_division',
            dividend: 'x³ + 2x² - 5x + 6',
            divisor: 'x - 2',
            defaultOptions: {
                title: 'Polynomial Division',
                showProcess: true,
                showRemainder: true,
                showQuotient: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'exponentialGraph': {
            name: 'Exponential Graph',
            category: 'Algebra',
            description: 'Graph of exponential function',
            type: 'exponential_graph',
            base: 2,
            coefficient: 1,
            defaultOptions: {
                title: 'Exponential Graph: y = 2ˣ',
                showGrid: true,
                showAsymptote: true,
                showGrowth: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'logarithmicGraph': {
            name: 'Logarithmic Graph',
            category: 'Algebra',
            description: 'Graph of logarithmic function',
            type: 'logarithmic_graph',
            base: 10,
            defaultOptions: {
                title: 'Logarithmic Graph: y = log₁₀(x)',
                showGrid: true,
                showAsymptote: true,
                showDomain: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'inequalityNumberLine': {
            name: 'Inequality on Number Line',
            category: 'Algebra',
            description: 'Visual representation of inequality solution',
            type: 'inequality_line',
            inequality: 'x > 3',
            defaultOptions: {
                title: 'Inequality Solution',
                showLine: true,
                showShading: true,
                showBoundary: true,
                showNotation: true,
                width: 900,
                height: 200,
                backgroundColor: '#ffffff'
            }
        },

        // ===== ALGEBRA APPARATUS/PROCESS DIAGRAMS =====
        'algebraTilesModel': {
            name: 'Algebra Tiles Model',
            category: 'Algebra',
            description: 'Manipulative tiles for algebraic expressions',
            type: 'apparatus_diagram',
            apparatusType: 'algebra_tiles',
            expression: '2x + 3',
            defaultOptions: {
                title: 'Algebra Tiles',
                showProcess: true,
                showXTiles: true,
                showUnitTiles: true,
                showFactoring: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Number and arrangement of tiles',
                    constant: 'Tile values (x², x, 1)',
                    rule: 'Area model: arrange tiles to form rectangle for factoring'
                },
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'factorBoxMethod': {
            name: 'Factor Box Method',
            category: 'Algebra',
            description: 'Grid method for factoring quadratics',
            type: 'apparatus_diagram',
            apparatusType: 'factor_box',
            quadratic: 'x² + 5x + 6',
            defaultOptions: {
                title: 'Factor Box Method',
                showProcess: true,
                showGrid: true,
                showTerms: true,
                showFactors: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Grid entries (products)',
                    constant: 'Original quadratic coefficients',
                    rule: 'Find two numbers that multiply to ac and add to b'
                },
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'substituitionMethod': {
            name: 'Substitution Method Process',
            category: 'Algebra',
            description: 'Step-by-step substitution for simultaneous equations',
            type: 'apparatus_diagram',
            apparatusType: 'substitution_method',
            equation1: '2x + y = 10',
            equation2: 'x - y = 2',
            defaultOptions: {
                title: 'Substitution Method',
                showProcess: true,
                showSteps: true,
                showSubstitution: true,
                showSolution: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Variable values through steps',
                    constant: 'Original equations',
                    rule: 'Solve one equation for a variable, substitute into other'
                },
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'eliminationMethod': {
            name: 'Elimination Method Process',
            category: 'Algebra',
            description: 'Step-by-step elimination for simultaneous equations',
            type: 'apparatus_diagram',
            apparatusType: 'elimination_method',
            equation1: '3x + 2y = 12',
            equation2: '2x - y = 1',
            defaultOptions: {
                title: 'Elimination Method',
                showProcess: true,
                showMultipliers: true,
                showAddition: true,
                showSolution: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Coefficients (when multiplying), equations (when adding/subtracting)',
                    constant: 'Solution point',
                    rule: 'Make coefficients equal, then add/subtract to eliminate variable'
                },
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 3. FUNCTIONS =====
        'functionMachine': {
            name: 'Function Machine Diagram',
            category: 'Functions',
            description: 'Input-output machine representation',
            type: 'function_machine',
            function: 'f(x) = 2x + 3',
            inputs: [1, 2, 3, 4],
            defaultOptions: {
                title: 'Function Machine',
                showMachine: true,
                showInputs: true,
                showOutputs: true,
                showRule: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'mappingDiagram': {
            name: 'Mapping Diagram',
            category: 'Functions',
            description: 'Arrow diagram showing domain to range mapping',
            type: 'mapping_diagram',
            domain: [1, 2, 3, 4],
            range: [2, 4, 6, 8],
            function: 'x → 2x',
            defaultOptions: {
                title: 'Mapping Diagram',
                showDomain: true,
                showRange: true,
                showArrows: true,
                showOneToOne: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'domainRangeGraph': {
            name: 'Domain and Range Visualization',
            category: 'Functions',
            description: 'Graph showing domain and range',
            type: 'domain_range_graph',
            function: 'f(x) = √x',
            defaultOptions: {
                title: 'Domain and Range',
                showGraph: true,
                highlightDomain: true,
                highlightRange: true,
                showRestrictions: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'functionTypes': {
            name: 'Function Types Comparison',
            category: 'Functions',
            description: 'Comparison of different function types',
            type: 'function_types',
            functions: ['linear', 'quadratic', 'cubic', 'reciprocal'],
            defaultOptions: {
                title: 'Types of Functions',
                showGraphs: true,
                showEquations: true,
                showCharacteristics: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'functionTransformations': {
            name: 'Function Transformations',
            category: 'Functions',
            description: 'Visual effect of transformations on graphs',
            type: 'function_transformations',
            baseFunction: 'f(x) = x²',
            transformations: ['translate', 'reflect', 'stretch'],
            defaultOptions: {
                title: 'Function Transformations',
                showOriginal: true,
                showTransformed: true,
                showVectors: true,
                showEquations: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },
        'inverseFunctionGraph': {
            name: 'Inverse Function Graph',
            category: 'Functions',
            description: 'Function and its inverse with y=x line',
            type: 'inverse_function',
            function: 'f(x) = 2x + 1',
            defaultOptions: {
                title: 'Function and Inverse',
                showFunction: true,
                showInverse: true,
                showYEqualsX: true,
                showReflection: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'piecewiseFunctionGraph': {
            name: 'Piecewise Function Graph',
            category: 'Functions',
            description: 'Graph of piecewise-defined function',
            type: 'piecewise_function',
            pieces: [
                { domain: 'x < 0', function: '-x' },
                { domain: 'x ≥ 0', function: 'x²' }
            ],
            defaultOptions: {
                title: 'Piecewise Function',
                showPieces: true,
                showBreaks: true,
                showDomains: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'compositeFunction': {
            name: 'Composite Function Diagram',
            category: 'Functions',
            description: 'Visual representation of function composition',
            type: 'composite_function',
            f: 'f(x) = 2x',
            g: 'g(x) = x + 3',
            defaultOptions: {
                title: 'Composite Functions',
                showFunctionMachines: true,
                showComposition: true,
                showSteps: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        // ===== FUNCTIONS APPARATUS/PROCESS DIAGRAMS =====
        'verticalLineTest': {
            name: 'Vertical Line Test Process',
            category: 'Functions',
            description: 'Testing if a graph represents a function',
            type: 'apparatus_diagram',
            apparatusType: 'vertical_line_test',
            curve: 'circle',
            defaultOptions: {
                title: 'Vertical Line Test',
                showProcess: true,
                showGraph: true,
                showVerticalLines: true,
                showIntersections: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Position of vertical line',
                    constant: 'Graph shape',
                    rule: 'If any vertical line crosses more than once, not a function'
                },
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'horizontalLineTest': {
            name: 'Horizontal Line Test Process',
            category: 'Functions',
            description: 'Testing if a function is one-to-one',
            type: 'apparatus_diagram',
            apparatusType: 'horizontal_line_test',
            function: 'quadratic',
            defaultOptions: {
                title: 'Horizontal Line Test',
                showProcess: true,
                showGraph: true,
                showHorizontalLines: true,
                showIntersections: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Position of horizontal line',
                    constant: 'Function graph',
                    rule: 'If any horizontal line crosses more than once, not one-to-one'
                },
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 4. GEOMETRY =====
        'angleTypes': {
            name: 'Types of Angles',
            category: 'Geometry',
            description: 'Visual comparison of angle types',
            type: 'angle_types',
            angles: ['acute', 'right', 'obtuse', 'straight', 'reflex'],
            defaultOptions: {
                title: 'Types of Angles',
                showAngles: true,
                showMeasures: true,
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'angleRelationships': {
            name: 'Angle Relationships',
            category: 'Geometry',
            description: 'Complementary, supplementary, vertically opposite angles',
            type: 'angle_relationships',
            defaultOptions: {
                title: 'Angle Relationships',
                showComplementary: true,
                showSupplementary: true,
                showVerticallyOpposite: true,
                showMeasures: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'parallelLinesAngles': {
            name: 'Parallel Lines and Transversals',
            category: 'Geometry',
            description: 'Angles formed by parallel lines cut by transversal',
            type: 'parallel_lines',
            defaultOptions: {
                title: 'Parallel Lines and Transversals',
                showParallelLines: true,
                showTransversal: true,
                showCorresponding: true,
                showAlternate: true,
                showCoInterior: true,
                showMeasures: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'triangleTypes': {
            name: 'Types of Triangles',
            category: 'Geometry',
            description: 'Classification by sides and angles',
            type: 'triangle_types',
            defaultOptions: {
                title: 'Types of Triangles',
                showEquilateral: true,
                showIsosceles: true,
                showScalene: true,
                showRight: true,
                showAcute: true,
                showObtuse: true,
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'triangleProperties': {
            name: 'Triangle Properties Diagram',
            category: 'Geometry',
            description: 'Angle sum, exterior angles, inequality theorem',
            type: 'triangle_properties',
            defaultOptions: {
                title: 'Triangle Properties',
                showAngleSum: true,
                showExteriorAngle: true,
                showInequality: true,
                showProofs: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'pythagoreanTheorem': {
            name: 'Pythagorean Theorem Visual',
            category: 'Geometry',
            description: 'Right triangle with squares on sides',
            type: 'pythagorean',
            a: 3,
            b: 4,
            c: 5,
            defaultOptions: {
                title: 'Pythagorean Theorem',
                showTriangle: true,
                showSquares: true,
                showAreas: true,
                showEquation: true,
                showProof: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'congruentTriangles': {
            name: 'Congruent Triangles',
            category: 'Geometry',
            description: 'SSS, SAS, ASA, RHS congruence',
            type: 'congruent_triangles',
            condition: 'SAS',
            defaultOptions: {
                title: 'Congruent Triangles - SAS',
                showTriangles: true,
                showMarking: true,
                showCondition: true,
                showProof: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'similarTriangles': {
            name: 'Similar Triangles',
            category: 'Geometry',
            description: 'AA, SSS, SAS similarity',
            type: 'similar_triangles',
            condition: 'AA',
            ratio: 2,
            defaultOptions: {
                title: 'Similar Triangles - AA',
                showTriangles: true,
                showAngles: true,
                showRatio: true,
                showProof: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'quadrilateralTypes': {
            name: 'Types of Quadrilaterals',
            category: 'Geometry',
            description: 'Classification and properties of quadrilaterals',
            type: 'quadrilateral_types',
            defaultOptions: {
                title: 'Types of Quadrilaterals',
                showSquare: true,
                showRectangle: true,
                showRhombus: true,
                showParallelogram: true,
                showTrapezium: true,
                showKite: true,
                showProperties: true,
                width: 1000,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'quadrilateralHierarchy': {
            name: 'Quadrilateral Family Tree',
            category: 'Geometry',
            description: 'Hierarchical relationships between quadrilaterals',
            type: 'quadrilateral_hierarchy',
            defaultOptions: {
                title: 'Quadrilateral Hierarchy',
                showTree: true,
                showRelationships: true,
                showProperties: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'circleTheorem1': {
            name: 'Circle Theorem - Angle at Center',
            category: 'Geometry',
            description: 'Angle at center is twice angle at circumference',
            type: 'circle_theorem',
            theorem: 'angle_at_center',
            defaultOptions: {
                title: 'Circle Theorem: Angle at Center',
                showCircle: true,
                showAngles: true,
                showProof: true,
                showMeasures: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'circleTheorem2': {
            name: 'Circle Theorem - Angles in Semicircle',
            category: 'Geometry',
            description: 'Angle in semicircle is 90°',
            type: 'circle_theorem',
            theorem: 'angle_in_semicircle',
            defaultOptions: {
                title: 'Circle Theorem: Angle in Semicircle',
                showCircle: true,
                showRightAngle: true,
                showDiameter: true,
                showProof: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'circleTheorem3': {
            name: 'Circle Theorem - Cyclic Quadrilateral',
            category: 'Geometry',
            description: 'Opposite angles sum to 180°',
            type: 'circle_theorem',
            theorem: 'cyclic_quadrilateral',
            defaultOptions: {
                title: 'Circle Theorem: Cyclic Quadrilateral',
                showCircle: true,
                showQuadrilateral: true,
                showAngles: true,
                showProof: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'circleTheorem4': {
            name: 'Circle Theorem - Tangent Radius',
            category: 'Geometry',
            description: 'Tangent perpendicular to radius',
            type: 'circle_theorem',
            theorem: 'tangent_radius',
            defaultOptions: {
                title: 'Circle Theorem: Tangent and Radius',
                showCircle: true,
                showTangent: true,
                showRadius: true,
                showRightAngle: true,
                showProof: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'coordinateGeometryGrid': {
            name: 'Coordinate Geometry Grid',
            category: 'Geometry',
            description: 'Cartesian plane with points and shapes',
            type: 'coordinate_grid',
            points: [[2, 3], [5, 7], [-1, 4]],
            defaultOptions: {
                title: 'Coordinate Geometry',
                showGrid: true,
                showAxes: true,
                showPoints: true,
                showLabels: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'distanceFormula': {
            name: 'Distance Formula Diagram',
            category: 'Geometry',
            description: 'Distance between two points on coordinate plane',
            type: 'distance_formula',
            point1: [1, 2],
            point2: [4, 6],
            defaultOptions: {
                title: 'Distance Formula',
                showPoints: true,
                showRightTriangle: true,
                showCalculation: true,
                showFormula: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'midpointFormula': {
            name: 'Midpoint Formula Diagram',
            category: 'Geometry',
            description: 'Midpoint of line segment on coordinate plane',
            type: 'midpoint_formula',
            point1: [2, 3],
            point2: [8, 9],
            defaultOptions: {
                title: 'Midpoint Formula',
                showPoints: true,
                showSegment: true,
                showMidpoint: true,
                showFormula: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'slopeOfLine': {
            name: 'Slope of Line Diagram',
            category: 'Geometry',
            description: 'Rise over run visualization',
            type: 'slope_diagram',
            point1: [1, 2],
            point2: [5, 8],
            defaultOptions: {
                title: 'Slope of a Line',
                showLine: true,
                showRise: true,
                showRun: true,
                showSlope: true,
                showFormula: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'equationOfLine': {
            name: 'Equation of Line',
            category: 'Geometry',
            description: 'Different forms of line equations',
            type: 'line_equation',
            defaultOptions: {
                title: 'Equation of a Line',
                showSlopeIntercept: true,
                showPointSlope: true,
                showGeneral: true,
                showGraph: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'solid3DShapes': {
            name: '3D Solid Shapes',
            category: 'Geometry',
            description: 'Common 3D geometric solids',
            type: 'solid_shapes',
            shapes: ['cube', 'cuboid', 'sphere', 'cylinder', 'cone', 'pyramid'],
            defaultOptions: {
                title: '3D Shapes',
                showShapes: true,
                showNets: false,
                showDimensions: true,
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'nets3DShapes': {
            name: 'Nets of 3D Shapes',
            category: 'Geometry',
            description: 'Unfolded 2D nets of 3D shapes',
            type: 'shape_nets',
            shape: 'cube',
            defaultOptions: {
                title: 'Nets of 3D Shapes',
                showNet: true,
                show3DShape: true,
                showFolding: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'surfaceAreaDiagram': {
            name: 'Surface Area Diagram',
            category: 'Geometry',
            description: 'Breaking down surface area calculation',
            type: 'surface_area',
            shape: 'cuboid',
            dimensions: { length: 5, width: 3, height: 4 },
            defaultOptions: {
                title: 'Surface Area',
                showShape: true,
                showFaces: true,
                showCalculation: true,
                showFormula: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'volumeDiagram': {
            name: 'Volume Diagram',
            category: 'Geometry',
            description: 'Volume calculation with visual breakdown',
            type: 'volume_diagram',
            shape: 'cylinder',
            dimensions: { radius: 3, height: 5 },
            defaultOptions: {
                title: 'Volume',
                showShape: true,
                showDimensions: true,
                showCalculation: true,
                showFormula: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== GEOMETRY APPARATUS/PROCESS DIAGRAMS =====
        'compassStraightedgeConstruction': {
            name: 'Compass and Straightedge Construction',
            category: 'Geometry',
            description: 'Process of geometric constructions',
            type: 'apparatus_diagram',
            apparatusType: 'compass_construction',
            construction: 'perpendicular_bisector',
            defaultOptions: {
                title: 'Compass and Straightedge Construction',
                showProcess: true,
                showSteps: true,
                showArcs: true,
                showConstruction: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Arc positions, intersection points',
                    constant: 'Compass radius, line segment',
                    rule: 'Equal arcs from endpoints create perpendicular bisector'
                },
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'angleBisectorConstruction': {
            name: 'Angle Bisector Construction',
            category: 'Geometry',
            description: 'Process of bisecting an angle with compass',
            type: 'apparatus_diagram',
            apparatusType: 'angle_bisector',
            angle: 60,
            defaultOptions: {
                title: 'Angle Bisector Construction',
                showProcess: true,
                showSteps: true,
                showArcs: true,
                showBisector: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Arc intersections, bisector position',
                    constant: 'Original angle measure',
                    rule: 'Equal arcs from angle sides create bisector'
                },
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'locusConstruction': {
            name: 'Locus Construction',
            category: 'Geometry',
            description: 'Path of points satisfying a condition',
            type: 'apparatus_diagram',
            apparatusType: 'locus',
            condition: 'equidistant_from_point',
            defaultOptions: {
                title: 'Locus Construction',
                showProcess: true,
                showPoints: true,
                showPath: true,
                showCondition: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Position of points on locus',
                    constant: 'Distance/condition requirement',
                    rule: 'All points equidistant from a point form a circle'
                },
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'transformationProcess': {
            name: 'Geometric Transformation Process',
            category: 'Geometry',
            description: 'Step-by-step transformation of shapes',
            type: 'apparatus_diagram',
            apparatusType: 'transformation',
            transformationType: 'reflection',
            defaultOptions: {
                title: 'Geometric Transformation',
                showProcess: true,
                showOriginal: true,
                showImage: true,
                showMirrorLine: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Position of image',
                    constant: 'Shape size, distances from mirror line',
                    rule: 'Each point reflects perpendicular to mirror line at equal distance'
                },
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 5. TRIGONOMETRY =====
        'rightTriangleTrigRatios': {
            name: 'Right Triangle Trig Ratios',
            category: 'Trigonometry',
            description: 'SOH CAH TOA visualization',
            type: 'trig_ratios',
            angle: 30,
            defaultOptions: {
                title: 'Trigonometric Ratios',
                showTriangle: true,
                showSides: true,
                showRatios: true,
                showSOHCAHTOA: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'unitCircle': {
            name: 'Unit Circle',
            category: 'Trigonometry',
            description: 'Unit circle with special angles',
            type: 'unit_circle',
            defaultOptions: {
                title: 'Unit Circle',
                showCircle: true,
                showAngles: true,
                showCoordinates: true,
                showQuadrants: true,
                showSpecialAngles: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'specialAnglesTriangle': {
            name: 'Special Angles Triangles',
            category: 'Trigonometry',
            description: '30-60-90 and 45-45-90 triangles',
            type: 'special_angles',
            defaultOptions: {
                title: 'Special Angle Triangles',
                show306090: true,
                show454590: true,
                showRatios: true,
                showValues: true,
                width: 1000,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'trigIdentitiesVisual': {
            name: 'Trigonometric Identities',
            category: 'Trigonometry',
            description: 'Visual proof of trig identities',
            type: 'trig_identities',
            identity: 'pythagorean',
            defaultOptions: {
                title: 'Trigonometric Identities',
                showIdentity: true,
                showProof: true,
                showUnitCircle: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'sineRuleDiagram': {
            name: 'Sine Rule Diagram',
            category: 'Trigonometry',
            description: 'Sine rule in non-right triangle',
            type: 'sine_rule',
            triangle: { a: 5, b: 7, A: 40, B: 60 },
            defaultOptions: {
                title: 'Sine Rule',
                showTriangle: true,
                showRule: true,
                showCalculation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'cosineRuleDiagram': {
            name: 'Cosine Rule Diagram',
            category: 'Trigonometry',
            description: 'Cosine rule in non-right triangle',
            type: 'cosine_rule',
            triangle: { a: 5, b: 7, C: 60 },
            defaultOptions: {
                title: 'Cosine Rule',
                showTriangle: true,
                showRule: true,
                showCalculation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'triangleAreaFormula': {
            name: 'Triangle Area Formula (Trig)',
            category: 'Trigonometry',
            description: 'Area = ½ab sin C visualization',
            type: 'triangle_area_trig',
            triangle: { a: 6, b: 8, C: 30 },
            defaultOptions: {
                title: 'Triangle Area (Trigonometry)',
                showTriangle: true,
                showHeight: true,
                showFormula: true,
                showCalculation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'radianMeasure': {
            name: 'Radian Measure',
            category: 'Trigonometry',
            description: 'Radians vs degrees on circle',
            type: 'radian_measure',
            defaultOptions: {
                title: 'Radian Measure',
                showCircle: true,
                showRadians: true,
                showDegrees: true,
                showConversion: true,
                showArcLength: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'sineGraph': {
            name: 'Sine Graph',
            category: 'Trigonometry',
            description: 'Graph of y = sin(x)',
            type: 'trig_graph',
            function: 'sine',
            defaultOptions: {
                title: 'Sine Graph',
                showGraph: true,
                showAmplitude: true,
                showPeriod: true,
                showKeyPoints: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'cosineGraph': {
            name: 'Cosine Graph',
            category: 'Trigonometry',
            description: 'Graph of y = cos(x)',
            type: 'trig_graph',
            function: 'cosine',
            defaultOptions: {
                title: 'Cosine Graph',
                showGraph: true,
                showAmplitude: true,
                showPeriod: true,
                showKeyPoints: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'tangentGraph': {
            name: 'Tangent Graph',
            category: 'Trigonometry',
            description: 'Graph of y = tan(x)',
            type: 'trig_graph',
            function: 'tangent',
            defaultOptions: {
                title: 'Tangent Graph',
                showGraph: true,
                showAsymptotes: true,
                showPeriod: true,
                showKeyPoints: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'trigGraphTransformations': {
            name: 'Trig Graph Transformations',
            category: 'Trigonometry',
            description: 'Effect of a, b, c, d on y = a sin(bx + c) + d',
            type: 'trig_transformations',
            defaultOptions: {
                title: 'Trigonometric Graph Transformations',
                showOriginal: true,
                showTransformed: true,
                showParameters: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== TRIGONOMETRY APPARATUS/PROCESS DIAGRAMS =====
        'bearingsDiagram': {
            name: 'Bearings Diagram',
            category: 'Trigonometry',
            description: 'Three-figure bearings and navigation',
            type: 'apparatus_diagram',
            apparatusType: 'bearings',
            bearing: 135,
            defaultOptions: {
                title: 'Bearings',
                showProcess: true,
                showNorth: true,
                showAngle: true,
                showMeasurement: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Direction/bearing angle',
                    constant: 'North reference line',
                    rule: 'Bearing measured clockwise from North (000° to 360°)'
                },
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'angleOfElevationDepression': {
            name: 'Angle of Elevation/Depression',
            category: 'Trigonometry',
            description: 'Real-world angle measurement scenarios',
            type: 'apparatus_diagram',
            apparatusType: 'elevation_depression',
            scenario: 'elevation',
            angle: 35,
            defaultOptions: {
                title: 'Angle of Elevation and Depression',
                showProcess: true,
                showHorizontal: true,
                showAngle: true,
                showScenario: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Height/distance to object',
                    constant: 'Horizontal reference line',
                    rule: 'Elevation: angle above horizontal; Depression: angle below horizontal'
                },
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 6. VECTORS =====
        'vectorRepresentation': {
            name: 'Vector Representation',
            category: 'Vectors',
            description: 'Directed line segments with magnitude and direction',
            type: 'vector_diagram',
            vector: { x: 3, y: 4 },
            defaultOptions: {
                title: 'Vector Representation',
                showArrow: true,
                showComponents: true,
                showMagnitude: true,
                showDirection: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'vectorAddition': {
            name: 'Vector Addition',
            category: 'Vectors',
            description: 'Triangle and parallelogram methods',
            type: 'vector_addition',
            vector1: { x: 3, y: 2 },
            vector2: { x: 1, y: 4 },
            defaultOptions: {
                title: 'Vector Addition',
                showVectors: true,
                showTriangleMethod: true,
                showParallelogramMethod: true,
                showResultant: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'vectorSubtraction': {
            name: 'Vector Subtraction',
            category: 'Vectors',
            description: 'Geometric vector subtraction',
            type: 'vector_subtraction',
            vector1: { x: 5, y: 3 },
            vector2: { x: 2, y: 1 },
            defaultOptions: {
                title: 'Vector Subtraction',
                showVectors: true,
                showNegative: true,
                showResultant: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },
        'scalarMultiplication': {
            name: 'Scalar Multiplication of Vectors',
            category: 'Vectors',
            description: 'Effect of multiplying vector by scalar',
            type: 'scalar_multiplication',
            vector: { x: 2, y: 3 },
            scalar: 2,
            defaultOptions: {
                title: 'Scalar Multiplication',
                showOriginal: true,
                showScaled: true,
                showMagnitudeChange: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'vectorComponents': {
            name: 'Vector Components',
            category: 'Vectors',
            description: 'Resolving vectors into i and j components',
            type: 'vector_components',
            vector: { magnitude: 5, angle: 37 },
            defaultOptions: {
                title: 'Vector Components',
                showVector: true,
                showXComponent: true,
                showYComponent: true,
                showCalculations: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'dotProduct': {
            name: 'Dot Product (Scalar Product)',
            category: 'Vectors',
            description: 'Geometric interpretation of dot product',
            type: 'dot_product',
            vector1: { x: 3, y: 4 },
            vector2: { x: 2, y: 1 },
            defaultOptions: {
                title: 'Dot Product',
                showVectors: true,
                showAngle: true,
                showProjection: true,
                showFormula: true,
                showCalculation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'crossProduct': {
            name: 'Cross Product (Vector Product)',
            category: 'Vectors',
            description: 'Cross product in 3D space',
            type: 'cross_product',
            vector1: { x: 1, y: 0, z: 0 },
            vector2: { x: 0, y: 1, z: 0 },
            defaultOptions: {
                title: 'Cross Product',
                showVectors: true,
                showResultant: true,
                showRightHandRule: true,
                showFormula: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'vectorEquationLine': {
            name: 'Vector Equation of Line',
            category: 'Vectors',
            description: 'r = a + λb representation',
            type: 'vector_line_equation',
            point: { x: 1, y: 2 },
            direction: { x: 3, y: 4 },
            defaultOptions: {
                title: 'Vector Equation of Line',
                showLine: true,
                showPoint: true,
                showDirection: true,
                showEquation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'positionVectors': {
            name: 'Position Vectors',
            category: 'Vectors',
            description: 'Vectors from origin to points',
            type: 'position_vectors',
            points: [[2, 3], [5, 7], [-1, 4]],
            defaultOptions: {
                title: 'Position Vectors',
                showOrigin: true,
                showPoints: true,
                showVectors: true,
                showNotation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== VECTORS APPARATUS/PROCESS DIAGRAMS =====
        'vectorNavigationProblem': {
            name: 'Vector Navigation Problem',
            category: 'Vectors',
            description: 'Journey with multiple displacement vectors',
            type: 'apparatus_diagram',
            apparatusType: 'vector_navigation',
            journey: [
                { displacement: { x: 3, y: 4 }, label: 'A to B' },
                { displacement: { x: 2, y: -1 }, label: 'B to C' }
            ],
            defaultOptions: {
                title: 'Vector Navigation',
                showProcess: true,
                showPath: true,
                showVectors: true,
                showResultant: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Position after each displacement',
                    constant: 'Individual displacement vectors',
                    rule: 'Total displacement = sum of all displacement vectors'
                },
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 7. MATRICES =====
        'matrixStructure': {
            name: 'Matrix Structure',
            category: 'Matrices',
            description: 'Rows, columns, and elements',
            type: 'matrix_structure',
            matrix: [[1, 2, 3], [4, 5, 6]],
            defaultOptions: {
                title: 'Matrix Structure',
                showMatrix: true,
                showRows: true,
                showColumns: true,
                showElements: true,
                showOrder: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'matrixAddition': {
            name: 'Matrix Addition',
            category: 'Matrices',
            description: 'Element-by-element addition',
            type: 'matrix_addition',
            matrix1: [[1, 2], [3, 4]],
            matrix2: [[5, 6], [7, 8]],
            defaultOptions: {
                title: 'Matrix Addition',
                showMatrices: true,
                showProcess: true,
                showResult: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'matrixScalarMultiplication': {
            name: 'Scalar Multiplication of Matrix',
            category: 'Matrices',
            description: 'Multiplying matrix by scalar',
            type: 'matrix_scalar',
            matrix: [[2, 3], [4, 5]],
            scalar: 3,
            defaultOptions: {
                title: 'Scalar Multiplication',
                showMatrix: true,
                showProcess: true,
                showResult: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'matrixMultiplication': {
            name: 'Matrix Multiplication',
            category: 'Matrices',
            description: 'Row by column multiplication',
            type: 'matrix_multiplication',
            matrix1: [[1, 2], [3, 4]],
            matrix2: [[5, 6], [7, 8]],
            defaultOptions: {
                title: 'Matrix Multiplication',
                showMatrices: true,
                showProcess: true,
                showRowColumn: true,
                showResult: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'determinant2x2': {
            name: '2×2 Determinant',
            category: 'Matrices',
            description: 'Calculation of 2×2 determinant',
            type: 'determinant',
            matrix: [[3, 8], [4, 6]],
            size: 2,
            defaultOptions: {
                title: '2×2 Determinant',
                showMatrix: true,
                showFormula: true,
                showCalculation: true,
                showDiagonals: true,
                width: 700,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'determinant3x3': {
            name: '3×3 Determinant',
            category: 'Matrices',
            description: 'Calculation using cofactor expansion',
            type: 'determinant',
            matrix: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
            size: 3,
            defaultOptions: {
                title: '3×3 Determinant',
                showMatrix: true,
                showExpansion: true,
                showMinors: true,
                showCalculation: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'inverseMatrix': {
            name: 'Inverse Matrix',
            category: 'Matrices',
            description: '2×2 matrix inverse calculation',
            type: 'matrix_inverse',
            matrix: [[4, 7], [2, 6]],
            defaultOptions: {
                title: 'Inverse Matrix',
                showMatrix: true,
                showDeterminant: true,
                showAdjugate: true,
                showResult: true,
                showFormula: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'matrixTransformation': {
            name: 'Matrix Transformation',
            category: 'Matrices',
            description: 'Geometric transformation using matrices',
            type: 'matrix_transformation',
            transformationType: 'rotation',
            angle: 90,
            defaultOptions: {
                title: 'Matrix Transformation',
                showOriginal: true,
                showTransformed: true,
                showMatrix: true,
                showCalculation: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== MATRICES APPARATUS/PROCESS DIAGRAMS =====
        'matrixMultiplicationProcess': {
            name: 'Matrix Multiplication Process',
            category: 'Matrices',
            description: 'Step-by-step row-column multiplication',
            type: 'apparatus_diagram',
            apparatusType: 'matrix_multiplication_process',
            matrix1: [[1, 2, 3], [4, 5, 6]],
            matrix2: [[7, 8], [9, 10], [11, 12]],
            defaultOptions: {
                title: 'Matrix Multiplication Process',
                showProcess: true,
                showSteps: true,
                showHighlighting: true,
                showResult: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Current row and column being multiplied',
                    constant: 'Original matrices',
                    rule: 'Element (i,j) = sum of (row i of A) × (column j of B)'
                },
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'systemOfEquationsMatrixForm': {
            name: 'System of Equations - Matrix Form',
            category: 'Matrices',
            description: 'Converting system to matrix equation',
            type: 'apparatus_diagram',
            apparatusType: 'system_matrix',
            equations: ['2x + 3y = 8', 'x - y = 1'],
            defaultOptions: {
                title: 'System of Equations (Matrix Form)',
                showProcess: true,
                showEquations: true,
                showMatrixForm: true,
                showSolution: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Matrix operations to isolate variables',
                    constant: 'System coefficients',
                    rule: 'AX = B, so X = A⁻¹B'
                },
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 8. SEQUENCES AND SERIES =====
        'arithmeticSequence': {
            name: 'Arithmetic Sequence',
            category: 'Sequences & Series',
            description: 'Linear sequence with common difference',
            type: 'arithmetic_sequence',
            firstTerm: 3,
            commonDifference: 4,
            numTerms: 10,
            defaultOptions: {
                title: 'Arithmetic Sequence',
                showSequence: true,
                showFormula: true,
                showNthTerm: true,
                showGraph: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'geometricSequence': {
            name: 'Geometric Sequence',
            category: 'Sequences & Series',
            description: 'Exponential sequence with common ratio',
            type: 'geometric_sequence',
            firstTerm: 2,
            commonRatio: 3,
            numTerms: 8,
            defaultOptions: {
                title: 'Geometric Sequence',
                showSequence: true,
                showFormula: true,
                showNthTerm: true,
                showGraph: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
            },

        'arithmeticSeries': {
            name: 'Arithmetic Series Sum',
            category: 'Sequences & Series',
            description: 'Sum of arithmetic sequence',
            type: 'arithmetic_series',
            firstTerm: 2,
            lastTerm: 50,
            numTerms: 25,
            defaultOptions: {
                title: 'Arithmetic Series',
                showSequence: true,
                showPairing: true,
                showFormula: true,
                showCalculation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'geometricSeries': {
            name: 'Geometric Series Sum',
            category: 'Sequences & Series',
            description: 'Sum of geometric sequence',
            type: 'geometric_series',
            firstTerm: 3,
            commonRatio: 2,
            numTerms: 6,
            defaultOptions: {
                title: 'Geometric Series',
                showSequence: true,
                showFormula: true,
                showCalculation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'infiniteGeometricSeries': {
            name: 'Infinite Geometric Series',
            category: 'Sequences & Series',
            description: 'Convergent infinite series when |r| < 1',
            type: 'infinite_geometric_series',
            firstTerm: 4,
            commonRatio: 0.5,
            defaultOptions: {
                title: 'Infinite Geometric Series',
                showSequence: true,
                showConvergence: true,
                showFormula: true,
                showSum: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'sequenceRecursive': {
            name: 'Recursive Sequence',
            category: 'Sequences & Series',
            description: 'Sequence defined by recurrence relation',
            type: 'recursive_sequence',
            recurrence: 'uₙ = 2uₙ₋₁ + 1',
            firstTerm: 1,
            numTerms: 8,
            defaultOptions: {
                title: 'Recursive Sequence',
                showSequence: true,
                showRecurrence: true,
                showCalculation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'binomialExpansion': {
            name: 'Binomial Expansion',
            category: 'Sequences & Series',
            description: '(a + b)ⁿ expansion',
            type: 'binomial_expansion',
            a: 'x',
            b: '2',
            n: 4,
            defaultOptions: {
                title: 'Binomial Expansion',
                showExpansion: true,
                showCoefficients: true,
                showPascalTriangle: false,
                showFormula: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'pascalTriangle': {
            name: "Pascal's Triangle",
            category: 'Sequences & Series',
            description: 'Triangle of binomial coefficients',
            type: 'pascal_triangle',
            rows: 8,
            defaultOptions: {
                title: "Pascal's Triangle",
                showTriangle: true,
                highlightRow: 5,
                showPatterns: true,
                showBinomialConnection: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'fibonacciSequence': {
            name: 'Fibonacci Sequence',
            category: 'Sequences & Series',
            description: 'Each term is sum of previous two',
            type: 'fibonacci_sequence',
            numTerms: 12,
            defaultOptions: {
                title: 'Fibonacci Sequence',
                showSequence: true,
                showRecurrence: true,
                showGoldenRatio: true,
                showSpiral: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== SEQUENCES APPARATUS/PROCESS DIAGRAMS =====
        'arithmeticSeriesVisualProof': {
            name: 'Arithmetic Series Visual Proof',
            category: 'Sequences & Series',
            description: 'Gauss method of pairing terms',
            type: 'apparatus_diagram',
            apparatusType: 'arithmetic_series_proof',
            firstTerm: 1,
            lastTerm: 100,
            numTerms: 100,
            defaultOptions: {
                title: 'Arithmetic Series Visual Proof',
                showProcess: true,
                showPairing: true,
                showSum: true,
                showDerivation: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Paired sums',
                    constant: 'Sum of each pair',
                    rule: 'Sum = n(first + last)/2'
                },
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'geometricSeriesDerivation': {
            name: 'Geometric Series Formula Derivation',
            category: 'Sequences & Series',
            description: 'Algebraic derivation of geometric series formula',
            type: 'apparatus_diagram',
            apparatusType: 'geometric_series_derivation',
            firstTerm: 'a',
            commonRatio: 'r',
            defaultOptions: {
                title: 'Geometric Series Derivation',
                showProcess: true,
                showSteps: true,
                showAlgebra: true,
                showFormula: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Algebraic manipulations',
                    constant: 'First term a, common ratio r',
                    rule: 'Sₙ = a(1-rⁿ)/(1-r) or a(rⁿ-1)/(r-1)'
                },
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 9. SET THEORY =====
        'setNotation': {
            name: 'Set Notation',
            category: 'Set Theory',
            description: 'Different ways to represent sets',
            type: 'set_notation',
            set: [2, 4, 6, 8, 10],
            defaultOptions: {
                title: 'Set Notation',
                showRoster: true,
                showSetBuilder: true,
                showDescription: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'vennDiagram2Sets': {
            name: 'Venn Diagram (2 Sets)',
            category: 'Set Theory',
            description: 'Visual representation of two sets',
            type: 'venn_diagram',
            setA: [1, 2, 3, 4, 5],
            setB: [4, 5, 6, 7, 8],
            universal: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            defaultOptions: {
                title: 'Venn Diagram',
                showSets: true,
                showIntersection: true,
                showUnion: true,
                showElements: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'vennDiagram3Sets': {
            name: 'Venn Diagram (3 Sets)',
            category: 'Set Theory',
            description: 'Visual representation of three sets',
            type: 'venn_diagram_3',
            setA: [1, 2, 3, 4, 5, 6, 7],
            setB: [4, 5, 6, 8, 9, 10],
            setC: [6, 7, 10, 11, 12],
            universal: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
            defaultOptions: {
                title: 'Venn Diagram (3 Sets)',
                showSets: true,
                showIntersections: true,
                showElements: true,
                showRegions: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'setOperationsUnion': {
            name: 'Set Union (A ∪ B)',
            category: 'Set Theory',
            description: 'Elements in A or B or both',
            type: 'set_operation',
            operation: 'union',
            setA: [1, 2, 3, 4],
            setB: [3, 4, 5, 6],
            defaultOptions: {
                title: 'Set Union',
                showSets: true,
                showOperation: true,
                showResult: true,
                showVenn: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'setOperationsIntersection': {
            name: 'Set Intersection (A ∩ B)',
            category: 'Set Theory',
            description: 'Elements in both A and B',
            type: 'set_operation',
            operation: 'intersection',
            setA: [1, 2, 3, 4, 5],
            setB: [3, 4, 5, 6, 7],
            defaultOptions: {
                title: 'Set Intersection',
                showSets: true,
                showOperation: true,
                showResult: true,
                showVenn: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'setOperationsComplement': {
            name: "Set Complement (A')",
            category: 'Set Theory',
            description: 'Elements not in A',
            type: 'set_operation',
            operation: 'complement',
            setA: [2, 4, 6, 8],
            universal: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            defaultOptions: {
                title: 'Set Complement',
                showSet: true,
                showUniversal: true,
                showComplement: true,
                showVenn: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'setOperationsDifference': {
            name: 'Set Difference (A - B)',
            category: 'Set Theory',
            description: 'Elements in A but not in B',
            type: 'set_operation',
            operation: 'difference',
            setA: [1, 2, 3, 4, 5],
            setB: [3, 4, 5, 6, 7],
            defaultOptions: {
                title: 'Set Difference',
                showSets: true,
                showOperation: true,
                showResult: true,
                showVenn: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'subsetDiagram': {
            name: 'Subset Relationship',
            category: 'Set Theory',
            description: 'Visual representation of A ⊆ B',
            type: 'subset_diagram',
            setA: [2, 4, 6],
            setB: [1, 2, 3, 4, 5, 6, 7, 8],
            defaultOptions: {
                title: 'Subset Relationship',
                showSets: true,
                showContainment: true,
                showVenn: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'disjointSets': {
            name: 'Disjoint Sets',
            category: 'Set Theory',
            description: 'Sets with no common elements',
            type: 'disjoint_sets',
            setA: [1, 2, 3],
            setB: [4, 5, 6],
            defaultOptions: {
                title: 'Disjoint Sets',
                showSets: true,
                showSeparation: true,
                showVenn: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'cardinality': {
            name: 'Cardinality of Sets',
            category: 'Set Theory',
            description: 'Number of elements in sets',
            type: 'cardinality',
            setA: [1, 2, 3, 4, 5],
            setB: [3, 4, 5, 6, 7, 8],
            defaultOptions: {
                title: 'Cardinality',
                showSets: true,
                showCounts: true,
                showFormula: true,
                showVenn: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'deMorgansLaws': {
            name: "De Morgan's Laws",
            category: 'Set Theory',
            description: 'Complement of union and intersection',
            type: 'de_morgans_laws',
            setA: [1, 2, 3, 4],
            setB: [3, 4, 5, 6],
            universal: [1, 2, 3, 4, 5, 6, 7, 8],
            defaultOptions: {
                title: "De Morgan's Laws",
                showLaw1: true,
                showLaw2: true,
                showProof: true,
                showVenn: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== SET THEORY APPARATUS/PROCESS DIAGRAMS =====
        'vennDiagramProblemSolving': {
            name: 'Venn Diagram Problem Solving',
            category: 'Set Theory',
            description: 'Step-by-step solution using Venn diagrams',
            type: 'apparatus_diagram',
            apparatusType: 'venn_problem_solving',
            problem: {
                total: 100,
                A: 60,
                B: 50,
                both: 30
            },
            defaultOptions: {
                title: 'Venn Diagram Problem Solving',
                showProcess: true,
                showSteps: true,
                showRegions: true,
                showCalculations: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Region values (A only, B only, both, neither)',
                    constant: 'Total number of elements',
                    rule: 'Start with intersection, work outwards, use totals to find unknowns'
                },
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'setBuilderNotationProcess': {
            name: 'Set Builder Notation Process',
            category: 'Set Theory',
            description: 'Converting between roster and set-builder notation',
            type: 'apparatus_diagram',
            apparatusType: 'set_builder_process',
            set: [2, 4, 6, 8, 10, 12],
            defaultOptions: {
                title: 'Set Builder Notation',
                showProcess: true,
                showPattern: true,
                showCondition: true,
                showConversion: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Form of representation (roster vs set-builder)',
                    constant: 'Elements in the set',
                    rule: 'Identify pattern/property that all elements share'
                },
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 10. STATISTICS & PROBABILITY =====
        'barChart': {
            name: 'Bar Chart',
            category: 'Statistics',
            description: 'Discrete data visualization',
            type: 'bar_chart',
            data: { labels: ['A', 'B', 'C', 'D', 'E'], values: [12, 19, 15, 8, 22] },
            defaultOptions: {
                title: 'Bar Chart',
                showBars: true,
                showAxes: true,
                showValues: true,
                showGrid: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'histogram': {
            name: 'Histogram',
            category: 'Statistics',
            description: 'Continuous data frequency distribution',
            type: 'histogram',
            data: {
                intervals: [[0, 10], [10, 20], [20, 30], [30, 40]],
                frequencies: [5, 12, 18, 9]
            },
            defaultOptions: {
                title: 'Histogram',
                showBars: true,
                showAxes: true,
                showFrequency: true,
                showIntervals: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'pieChart': {
            name: 'Pie Chart',
            category: 'Statistics',
            description: 'Proportional data visualization',
            type: 'pie_chart',
            data: { labels: ['A', 'B', 'C', 'D'], values: [30, 45, 60, 25] },
            defaultOptions: {
                title: 'Pie Chart',
                showSlices: true,
                showLabels: true,
                showPercentages: true,
                showAngles: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'lineGraph': {
            name: 'Line Graph',
            category: 'Statistics',
            description: 'Time series or continuous data',
            type: 'line_graph',
            data: {
                xValues: [0, 1, 2, 3, 4, 5],
                yValues: [2, 5, 4, 8, 7, 10]
            },
            defaultOptions: {
                title: 'Line Graph',
                showLine: true,
                showPoints: true,
                showAxes: true,
                showGrid: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'scatterPlot': {
            name: 'Scatter Plot',
            category: 'Statistics',
            description: 'Bivariate data and correlation',
            type: 'scatter_plot',
            data: [
                [1, 2], [2, 4], [3, 5], [4, 4], [5, 7], [6, 8]
            ],
            defaultOptions: {
                title: 'Scatter Plot',
                showPoints: true,
                showLineOfBestFit: true,
                showCorrelation: true,
                showAxes: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'stemAndLeafPlot': {
            name: 'Stem-and-Leaf Plot',
            category: 'Statistics',
            description: 'Ordered data display showing distribution',
            type: 'stem_leaf',
            data: [23, 25, 27, 31, 33, 34, 38, 42, 45, 47, 51, 53],
            defaultOptions: {
                title: 'Stem-and-Leaf Plot',
                showStem: true,
                showLeaves: true,
                showKey: true,
                showOrdered: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'boxPlot': {
            name: 'Box-and-Whisker Plot',
            category: 'Statistics',
            description: 'Five-number summary visualization',
            type: 'box_plot',
            data: { min: 10, Q1: 25, median: 35, Q3: 50, max: 70 },
            defaultOptions: {
                title: 'Box Plot',
                showBox: true,
                showWhiskers: true,
                showMedian: true,
                showQuartiles: true,
                showOutliers: true,
                width: 900,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },
        'frequencyPolygon': {
            name: 'Frequency Polygon',
            category: 'Statistics',
            description: 'Line graph of frequency distribution',
            type: 'frequency_polygon',
            data: {
                midpoints: [5, 15, 25, 35, 45],
                frequencies: [3, 8, 12, 7, 4]
            },
            defaultOptions: {
                title: 'Frequency Polygon',
                showPolygon: true,
                showPoints: true,
                showAxes: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'cumulativeFrequencyCurve': {
            name: 'Cumulative Frequency Curve',
            category: 'Statistics',
            description: 'Ogive showing cumulative frequencies',
            type: 'cumulative_frequency',
            data: {
                upperBounds: [10, 20, 30, 40, 50],
                cumulativeFrequencies: [5, 13, 28, 40, 50]
            },
            defaultOptions: {
                title: 'Cumulative Frequency Curve',
                showCurve: true,
                showPoints: true,
                showMedian: true,
                showQuartiles: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'meanMedianMode': {
            name: 'Mean, Median, Mode',
            category: 'Statistics',
            description: 'Measures of central tendency visualization',
            type: 'central_tendency',
            data: [2, 3, 4, 4, 5, 5, 5, 6, 7, 8],
            defaultOptions: {
                title: 'Measures of Central Tendency',
                showData: true,
                showMean: true,
                showMedian: true,
                showMode: true,
                showCalculations: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rangeAndIQR': {
            name: 'Range and Interquartile Range',
            category: 'Statistics',
            description: 'Measures of spread',
            type: 'spread_measures',
            data: [12, 15, 18, 22, 25, 28, 32, 35, 40, 45],
            defaultOptions: {
                title: 'Range and IQR',
                showData: true,
                showRange: true,
                showQuartiles: true,
                showIQR: true,
                showBoxPlot: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'probabilityTreeDiagram': {
            name: 'Probability Tree Diagram',
            category: 'Probability',
            description: 'Sequential probability events',
            type: 'probability_tree',
            events: [
                {
                    name: 'First flip',
                    outcomes: [
                        { label: 'H', probability: 0.5 },
                        { label: 'T', probability: 0.5 }
                    ]
                },
                {
                    name: 'Second flip',
                    outcomes: [
                        { label: 'H', probability: 0.5 },
                        { label: 'T', probability: 0.5 }
                    ]
                }
            ],
            defaultOptions: {
                title: 'Probability Tree Diagram',
                showTree: true,
                showProbabilities: true,
                showOutcomes: true,
                showCalculations: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'probabilityVennDiagram': {
            name: 'Probability Venn Diagram',
            category: 'Probability',
            description: 'Visual probability with sets',
            type: 'probability_venn',
            P_A: 0.6,
            P_B: 0.5,
            P_A_and_B: 0.3,
            defaultOptions: {
                title: 'Probability Venn Diagram',
                showVenn: true,
                showProbabilities: true,
                showRegions: true,
                showCalculations: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== STATISTICS APPARATUS/PROCESS DIAGRAMS =====
        'meanCalculationProcess': {
            name: 'Mean Calculation Process',
            category: 'Statistics',
            description: 'Step-by-step mean calculation from frequency table',
            type: 'apparatus_diagram',
            apparatusType: 'mean_calculation',
            data: {
                values: [2, 3, 4, 5, 6],
                frequencies: [3, 5, 8, 4, 2]
            },
            defaultOptions: {
                title: 'Mean Calculation Process',
                showProcess: true,
                showTable: true,
                showProducts: true,
                showSum: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Products (x × f), running totals',
                    constant: 'Original data values and frequencies',
                    rule: 'Mean = Σ(x×f) / Σf'
                },
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'standardDeviationProcess': {
            name: 'Standard Deviation Process',
            category: 'Statistics',
            description: 'Step-by-step standard deviation calculation',
            type: 'apparatus_diagram',
            apparatusType: 'standard_deviation',
            data: [4, 7, 9, 11, 14],
            defaultOptions: {
                title: 'Standard Deviation Process',
                showProcess: true,
                showMean: true,
                showDeviations: true,
                showSquares: true,
                showVariance: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Deviations from mean, squared deviations',
                    constant: 'Original data, mean',
                    rule: 'σ = √[Σ(x-μ)²/n]'
                },
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'quartileCalculationProcess': {
            name: 'Quartile Calculation from Data',
            category: 'Statistics',
            description: 'Finding Q1, Q2, Q3 from ordered data',
            type: 'apparatus_diagram',
            apparatusType: 'quartile_calculation',
            data: [12, 15, 18, 22, 25, 28, 32, 35, 40, 45, 50],
            defaultOptions: {
                title: 'Quartile Calculation',
                showProcess: true,
                showOrdering: true,
                showPositions: true,
                showQuartiles: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Quartile positions and values',
                    constant: 'Ordered data set',
                    rule: 'Q2 = median, Q1 = median of lower half, Q3 = median of upper half'
                },
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 11. CALCULUS (if needed for advanced topics) =====
        'gradientOfCurve': {
            name: 'Gradient of Curve',
            category: 'Calculus',
            description: 'Tangent line and gradient at a point',
            type: 'gradient_curve',
            function: 'x²',
            point: 2,
            defaultOptions: {
                title: 'Gradient of Curve',
                showCurve: true,
                showTangent: true,
                showGradient: true,
                showPoint: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'areaUnderCurve': {
            name: 'Area Under Curve',
            category: 'Calculus',
            description: 'Approximating area with rectangles',
            type: 'area_under_curve',
            function: 'x²',
            lowerBound: 0,
            upperBound: 3,
            numRectangles: 6,
            defaultOptions: {
                title: 'Area Under Curve',
                showCurve: true,
                showRectangles: true,
                showArea: true,
                showApproximation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 12. LOGIC & REASONING =====
        'truthTable': {
            name: 'Truth Table',
            category: 'Logic',
            description: 'Logical operations truth table',
            type: 'truth_table',
            operation: 'AND',
            defaultOptions: {
                title: 'Truth Table - AND',
                showTable: true,
                showInputs: true,
                showOutput: true,
                width: 700,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'logicGates': {
            name: 'Logic Gates Diagram',
            category: 'Logic',
            description: 'AND, OR, NOT gate symbols',
            type: 'logic_gates',
            gates: ['AND', 'OR', 'NOT', 'NAND', 'NOR'],
            defaultOptions: {
                title: 'Logic Gates',
                showGates: true,
                showSymbols: true,
                showTruthTables: true,
                width: 1000,
                height: 700,
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

    static getSolveAsYouDrawDiagrams() {
        return Object.entries(this.diagrams)
            .filter(([_, diagram]) => diagram.type !== 'apparatus_diagram')
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

    static getCategoryDescription(category) {
        const descriptions = {
            'Number Theory': 'Properties of numbers, primes, factors, and number systems',
            'Algebra': 'Equations, expressions, graphs, and algebraic manipulation',
            'Functions': 'Function notation, types, transformations, and composition',
            'Geometry': 'Shapes, angles, theorems, constructions, and coordinate geometry',
            'Trigonometry': 'Right triangles, unit circle, graphs, and trigonometric identities',
            'Vectors': 'Vector operations, magnitude, direction, and applications',
            'Matrices': 'Matrix operations, determinants, inverses, and transformations',
            'Sequences & Series': 'Arithmetic and geometric sequences, series, and binomial expansion',
            'Set Theory': 'Sets, operations, Venn diagrams, and set relationships',
            'Statistics': 'Data representation, measures of central tendency and spread',
            'Probability': 'Probability calculations, tree diagrams, and probability distributions',
            'Calculus': 'Gradients, rates of change, and area under curves',
            'Logic': 'Truth tables, logical operations, and reasoning'
        };
        return descriptions[category] || 'Mathematics diagrams';
    }

    static getAnalogies(diagramKey) {
        const analogies = {
            // Number Theory
            'numberLine': ['Like a ruler measuring distances', 'Temperature scale showing hot and cold'],
            'primeFactorTree': ['Family tree showing ancestors', 'Organizational chart breaking down a company'],
            'sieveOfEratosthenes': ['Sifting flour through a sieve', 'Filtering water through mesh'],
            
            // Algebra
            'algebraicBalanceModel': ['Weighing scale that must stay balanced', 'Seesaw with equal weights'],
            'linearGraphPlot': ['Steady climb up a hill', 'Car driving at constant speed'],
            'quadraticParabola': ['Path of a thrown ball', 'Shape of a satellite dish'],
            'algebraTilesModel': ['Building with LEGO blocks', 'Arranging furniture in a room'],
            
            // Functions
            'functionMachine': ['Vending machine: input money, output snack', 'Factory assembly line'],
            'mappingDiagram': ['Phone book connecting names to numbers', 'Students matched to desks'],
            'compositeFunction': ['Two machines in sequence', 'Putting on socks then shoes'],
            
            // Geometry
            'pythagoreanTheorem': ['Right triangle as corner of a square', 'Walking around a city block'],
            'circleTheorem1': ['Pizza slice angle from center vs edge', 'Clock hands forming angles'],
            'compassStraightedgeConstruction': ['Drawing with only ruler and compass', 'Ancient Greek geometry'],
            'transformationProcess': ['Looking in a mirror', 'Sliding a book across table'],
            
            // Trigonometry
            'rightTriangleTrigRatios': ['Ladder against wall problem', 'Ramp slope calculation'],
            'unitCircle': ['Clock face with special times', 'Ferris wheel rotation'],
            'bearingsDiagram': ['Ship navigation compass', 'Airplane flight direction'],
            'angleOfElevationDepression': ['Looking up at tall building', 'Viewing from airplane window'],
            
            // Vectors
            'vectorAddition': ['Walking two different paths', 'Wind affecting airplane flight'],
            'vectorNavigationProblem': ['Treasure hunt with multiple clues', 'Delivery route with stops'],
            
            // Matrices
            'matrixTransformation': ['Image rotation on computer', 'Stretching/squashing a picture'],
            'matrixMultiplication': ['Combining transformations', 'Recipe scaling and conversion'],
            
            // Sequences
            'arithmeticSequence': ['Saving money regularly', 'Counting by 5s'],
            'geometricSequence': ['Population doubling', 'Chain letter spreading'],
            'fibonacciSequence': ['Rabbit population growth', 'Spiral in sunflower seeds'],
            'pascalTriangle': ['Building a pyramid of numbers', 'Binomial expansion coefficients'],
            
            // Sets
            'vennDiagram2Sets': ['Overlapping circles of friends', 'Students in multiple clubs'],
            'vennDiagramProblemSolving': ['Sorting items by categories', 'Finding common interests'],
            
            // Statistics
            'barChart': ['Comparing heights of buildings', 'Survey results visualization'],
            'histogram': ['Distribution of test scores', 'Age groups in population'],
            'boxPlot': ['Five-number summary on number line', 'Data spread visualization'],
            'scatterPlot': ['Height vs weight relationship', 'Study time vs test scores'],
            
            // Probability
            'probabilityTreeDiagram': ['Decision tree with chances', 'Tournament bracket outcomes'],
            'probabilityVennDiagram': ['Overlapping events', 'Conditional probability situations']
        };
        return analogies[diagramKey] || [];
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
            type: isApparatus ? 'Read-as-you-draw (Process/Situation)' : 'Solve-as-you-draw',
            approach: isApparatus ? 
                'Draw situation → Label quantities → Identify relationships → Apply rules' :
                'Abstract representation → Apply methods → Solve problems',
            goldenQuestions: this.getGoldenQuestions(diagramKey),
            analogies: this.getAnalogies(diagramKey),
            learningValue: isApparatus ?
                'Visual-first reasoning: the diagram reveals the mathematics' :
                'Problem-solving tool: visualize to understand and solve'
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
                const type = diagram.type === 'apparatus_diagram' ? '[PROCESS]' : '[SOLVE]';
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

    static getDiagramsByDifficulty(difficulty) {
        // Helper method to categorize diagrams by difficulty
        const basicDiagrams = [
            'numberLine', 'angleTypes', 'triangleTypes', 'barChart', 'pieChart',
            'vectorRepresentation', 'setNotation', 'vennDiagram2Sets'
        ];
        
        const intermediateDiagrams = [
            'quadraticParabola', 'pythagoreanTheorem', 'sineRuleDiagram',
            'matrixMultiplication', 'arithmeticSeries', 'histogram'
        ];
        
        const advancedDiagrams = [
            'determinant3x3', 'binomialExpansion', 'trigGraphTransformations',
            'crossProduct', 'infiniteGeometricSeries'
        ];

        let targetKeys;
        if (difficulty === 'basic') targetKeys = basicDiagrams;
        else if (difficulty === 'intermediate') targetKeys = intermediateDiagrams;
        else if (difficulty === 'advanced') targetKeys = advancedDiagrams;
        else return {};

        return Object.entries(this.diagrams)
            .filter(([key, _]) => targetKeys.includes(key))
            .reduce((acc, [key, diagram]) => {
                acc[key] = diagram;
                return acc;
            }, {});
    }

    static getSuggestedSequence(category) {
        // Suggested learning sequence for each category
        const sequences = {
            'Number Theory': [
                'numberLine', 'primeFactorTree', 'vennDiagramFactors',
                'realNumberHierarchy', 'sieveOfEratosthenes', 'euclideanAlgorithm'
            ],
            'Algebra': [
                'algebraicBalanceModel', 'linearGraphPlot', 'quadraticParabola',
                'simultaneousEquationsGraph', 'algebraTilesModel', 'factorBoxMethod'
            ],
            'Geometry': [
                'angleTypes', 'triangleTypes', 'pythagoreanTheorem',
                'circleTheorem1', 'compassStraightedgeConstruction', 'transformationProcess'
            ],
            'Trigonometry': [
                'rightTriangleTrigRatios', 'specialAnglesTriangle', 'unitCircle',
                'sineRuleDiagram', 'sineGraph', 'bearingsDiagram'
            ]
        };
        return sequences[category] || [];
    }

    static getPrerequisites(diagramKey) {
        // Define prerequisite diagrams for advanced concepts
        const prerequisites = {
            'quadraticParabola': ['linearGraphPlot'],
            'quadraticFormulaVisual': ['quadraticParabola'],
            'simultaneousEquationsGraph': ['linearGraphPlot'],
            'matrixMultiplication': ['matrixAddition', 'matrixStructure'],
            'inverseMatrix': ['determinant2x2', 'matrixMultiplication'],
            'geometricSeries': ['geometricSequence'],
            'binomialExpansion': ['pascalTriangle', 'arithmeticSequence'],
            'trigGraphTransformations': ['sineGraph', 'cosineGraph'],
            'compositeFunction': ['functionMachine', 'mappingDiagram'],
            'crossProduct': ['dotProduct', 'vectorRepresentation']
        };
        return prerequisites[diagramKey] || [];
    }

    static getRelatedDiagrams(diagramKey) {
        // Find diagrams related by concept
        const diagram = this.diagrams[diagramKey];
        if (!diagram) return [];

        // Get all diagrams in same category
        const sameCategoryDiagrams = Object.keys(
            this.getDiagramsByCategory(diagram.category)
        ).filter(key => key !== diagramKey);

        // Get diagrams with similar type
        const sameTypeDiagrams = Object.keys(
            this.getDiagramsByType(diagram.type)
        ).filter(key => key !== diagramKey && !sameCategoryDiagrams.includes(key));

        return {
            sameCategory: sameCategoryDiagrams.slice(0, 5),
            sameType: sameTypeDiagrams.slice(0, 3)
        };
    }
    static printSummary() {
        console.log('='.repeat(60));
        console.log('MATHEMATICS DIAGRAMS REGISTRY SUMMARY');
        console.log('='.repeat(60));
        
        const stats = this.getStatistics();
        console.log(`\nTotal Diagrams: ${stats.totalDiagrams}`);
        console.log(`  - Solve-as-you-draw: ${stats.solveDiagrams}`);
        console.log(`  - Process/Situation (Read-as-you-draw): ${stats.apparatusDiagrams}`);
        console.log(`Total Categories: ${stats.categories}\n`);
        
        Object.entries(stats.categorySummary).forEach(([category, data]) => {
            console.log(`${category}:`);
            console.log(`  ${data.description}`);
            console.log(`  Total: ${data.totalDiagrams} (${data.solveDiagrams} solve, ${data.apparatusDiagrams} process)`);
        });
        
        console.log('\n' + '='.repeat(60));
    }

    static getQuickReference() {
        return {
            totalDiagrams: this.getTotalCount(),
            categories: this.getAllCategories(),
            commonDiagrams: {
                'Number Theory': ['numberLine', 'primeFactorTree', 'vennDiagramFactors'],
                'Algebra': ['linearGraphPlot', 'quadraticParabola', 'algebraicBalanceModel'],
                'Geometry': ['pythagoreanTheorem', 'circleTheorem1', 'triangleTypes'],
                'Trigonometry': ['rightTriangleTrigRatios', 'unitCircle', 'sineGraph'],
                'Statistics': ['barChart', 'histogram', 'boxPlot'],
                'Sets': ['vennDiagram2Sets', 'vennDiagram3Sets']
            },
            processDiagrams: Object.keys(this.getApparatusDiagrams()),
            quickSearch: (term) => Object.keys(this.searchDiagrams(term))
        };
    }
}

export { MathematicsDiagramsRegistry };
