Here is the complete MathematicsDiagramsRegistry class:
class MathematicsDiagramsRegistry {
    static diagrams = {

        // ============================================================
        // ===== GEOMETRIC MEASUREMENT — PERIMETER ====================
        // ============================================================

        'rectanglePerimeter': {
            name: 'Rectangle Perimeter',
            category: 'Geometric Measurement',
            subcategory: 'Perimeter',
            description: 'Perimeter of a rectangle with labelled sides',
            type: 'rectangle_perimeter',
            width: 8,
            height: 5,
            defaultOptions: {
                title: 'Rectangle Perimeter',
                showLabels: true,
                showFormula: true,
                showDimensions: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'circleCircumference': {
            name: 'Circle Circumference',
            category: 'Geometric Measurement',
            subcategory: 'Perimeter',
            description: 'Circumference of a circle with radius and diameter labelled',
            type: 'circle_circumference',
            radius: 80,
            defaultOptions: {
                title: 'Circle Circumference',
                showRadius: true,
                showDiameter: true,
                showFormula: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'trianglePerimeter': {
            name: 'Triangle Perimeter',
            category: 'Geometric Measurement',
            subcategory: 'Perimeter',
            description: 'Perimeter of a triangle with all three sides labelled',
            type: 'triangle_perimeter',
            sideA: 5,
            sideB: 7,
            sideC: 6,
            defaultOptions: {
                title: 'Triangle Perimeter',
                showLabels: true,
                showFormula: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'compositeShapePerimeter': {
            name: 'Composite Shape Perimeter',
            category: 'Geometric Measurement',
            subcategory: 'Perimeter',
            description: 'Perimeter of a composite shape with all boundary sides labelled',
            type: 'composite_shape_perimeter',
            defaultOptions: {
                title: 'Composite Shape Perimeter',
                showLabels: true,
                showFormula: true,
                showOutline: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'semicirclePerimeter': {
            name: 'Semicircle Perimeter',
            category: 'Geometric Measurement',
            subcategory: 'Perimeter',
            description: 'Perimeter of a semicircle including diameter and arc',
            type: 'semicircle_perimeter',
            radius: 80,
            defaultOptions: {
                title: 'Semicircle Perimeter',
                showRadius: true,
                showArc: true,
                showFormula: true,
                width: 700,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'regularPolygonPerimeter': {
            name: 'Regular Polygon Perimeter',
            category: 'Geometric Measurement',
            subcategory: 'Perimeter',
            description: 'Perimeter of a regular polygon with equal sides labelled',
            type: 'regular_polygon_perimeter',
            sides: 6,
            sideLength: 50,
            defaultOptions: {
                title: 'Regular Polygon Perimeter',
                showLabels: true,
                showFormula: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== GEOMETRIC MEASUREMENT — AREA =========================
        // ============================================================

        'rectangleArea': {
            name: 'Rectangle Area',
            category: 'Geometric Measurement',
            subcategory: 'Area',
            description: 'Area of a rectangle with base and height labelled',
            type: 'rectangle_area',
            width: 8,
            height: 5,
            defaultOptions: {
                title: 'Rectangle Area',
                showLabels: true,
                showFormula: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'triangleAreaPerpendicularHeight': {
            name: 'Triangle Area — Perpendicular Height',
            category: 'Geometric Measurement',
            subcategory: 'Area',
            description: 'Area of a triangle using base and perpendicular height',
            type: 'triangle_area_perpendicular_height',
            base: 10,
            height: 6,
            defaultOptions: {
                title: 'Triangle Area',
                showBase: true,
                showHeight: true,
                showFormula: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'parallelogramArea': {
            name: 'Parallelogram Area',
            category: 'Geometric Measurement',
            subcategory: 'Area',
            description: 'Area of a parallelogram with base and perpendicular height',
            type: 'parallelogram_area',
            base: 10,
            height: 6,
            defaultOptions: {
                title: 'Parallelogram Area',
                showBase: true,
                showHeight: true,
                showFormula: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'trapeziumArea': {
            name: 'Trapezium Area',
            category: 'Geometric Measurement',
            subcategory: 'Area',
            description: 'Area of a trapezium with parallel sides and height labelled',
            type: 'trapezium_area',
            parallelSide1: 8,
            parallelSide2: 5,
            height: 6,
            defaultOptions: {
                title: 'Trapezium Area',
                showParallelSides: true,
                showHeight: true,
                showFormula: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'circleArea': {
            name: 'Circle Area',
            category: 'Geometric Measurement',
            subcategory: 'Area',
            description: 'Area of a circle with radius labelled',
            type: 'circle_area',
            radius: 80,
            defaultOptions: {
                title: 'Circle Area',
                showRadius: true,
                showFormula: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'compositeAreaDiagram': {
            name: 'Composite Area Diagram',
            category: 'Geometric Measurement',
            subcategory: 'Area',
            description: 'Area of a composite shape split into simpler regions',
            type: 'composite_area_diagram',
            defaultOptions: {
                title: 'Composite Area',
                showRegions: true,
                showLabels: true,
                showFormula: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'areaDissectionRectangle': {
            name: 'Area Dissection Rectangle',
            category: 'Geometric Measurement',
            subcategory: 'Area',
            description: 'Area dissection proof using rectangle decomposition',
            type: 'area_dissection_rectangle',
            defaultOptions: {
                title: 'Area Dissection',
                showParts: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== GEOMETRIC MEASUREMENT — SURFACE AREA =================
        // ============================================================

        'cubeNet': {
            name: 'Cube Net',
            category: 'Geometric Measurement',
            subcategory: 'Surface Area',
            description: 'Net of a cube showing all six square faces',
            type: 'cube_net',
            sideLength: 60,
            defaultOptions: {
                title: 'Cube Net',
                showLabels: true,
                showFaces: true,
                showFormula: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'cuboidNet': {
            name: 'Cuboid Net',
            category: 'Geometric Measurement',
            subcategory: 'Surface Area',
            description: 'Net of a cuboid showing all six rectangular faces',
            type: 'cuboid_net',
            length: 8,
            width: 5,
            height: 3,
            defaultOptions: {
                title: 'Cuboid Net',
                showLabels: true,
                showFaces: true,
                showFormula: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'cylinderNet': {
            name: 'Cylinder Net',
            category: 'Geometric Measurement',
            subcategory: 'Surface Area',
            description: 'Net of a cylinder showing two circles and rectangular curved surface',
            type: 'cylinder_net',
            radius: 40,
            height: 100,
            defaultOptions: {
                title: 'Cylinder Net',
                showCircles: true,
                showRectangle: true,
                showFormula: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'coneNet': {
            name: 'Cone Net',
            category: 'Geometric Measurement',
            subcategory: 'Surface Area',
            description: 'Net of a cone showing circular base and sector curved surface',
            type: 'cone_net',
            radius: 50,
            slantHeight: 120,
            defaultOptions: {
                title: 'Cone Net',
                showBase: true,
                showSector: true,
                showFormula: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'sphereSurfaceArea': {
            name: 'Sphere Surface Area',
            category: 'Geometric Measurement',
            subcategory: 'Surface Area',
            description: 'Surface area of a sphere with radius labelled',
            type: 'sphere_surface_area',
            radius: 80,
            defaultOptions: {
                title: 'Sphere Surface Area',
                showRadius: true,
                showFormula: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'triangularPrismNet': {
            name: 'Triangular Prism Net',
            category: 'Geometric Measurement',
            subcategory: 'Surface Area',
            description: 'Net of a triangular prism showing all five faces',
            type: 'triangular_prism_net',
            base: 6,
            height: 5,
            length: 10,
            defaultOptions: {
                title: 'Triangular Prism Net',
                showFaces: true,
                showLabels: true,
                showFormula: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'squarePyramidNet': {
            name: 'Square Pyramid Net',
            category: 'Geometric Measurement',
            subcategory: 'Surface Area',
            description: 'Net of a square pyramid showing base and four triangular faces',
            type: 'square_pyramid_net',
            base: 8,
            slantHeight: 10,
            defaultOptions: {
                title: 'Square Pyramid Net',
                showBase: true,
                showTriangles: true,
                showFormula: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== GEOMETRIC MEASUREMENT — VOLUME =======================
        // ============================================================

        'cuboidVolume': {
            name: 'Cuboid Volume',
            category: 'Geometric Measurement',
            subcategory: 'Volume',
            description: 'Volume of a cuboid with length, width, and height labelled',
            type: 'cuboid_volume',
            length: 8,
            width: 5,
            height: 3,
            defaultOptions: {
                title: 'Cuboid Volume',
                showLabels: true,
                showFormula: true,
                show3D: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'cylinderVolume': {
            name: 'Cylinder Volume',
            category: 'Geometric Measurement',
            subcategory: 'Volume',
            description: 'Volume of a cylinder with radius and height labelled',
            type: 'cylinder_volume',
            radius: 40,
            height: 100,
            defaultOptions: {
                title: 'Cylinder Volume',
                showRadius: true,
                showHeight: true,
                showFormula: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'coneVolume': {
            name: 'Cone Volume',
            category: 'Geometric Measurement',
            subcategory: 'Volume',
            description: 'Volume of a cone with radius and height labelled',
            type: 'cone_volume',
            radius: 50,
            height: 120,
            defaultOptions: {
                title: 'Cone Volume',
                showRadius: true,
                showHeight: true,
                showFormula: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'sphereVolume': {
            name: 'Sphere Volume',
            category: 'Geometric Measurement',
            subcategory: 'Volume',
            description: 'Volume of a sphere with radius labelled',
            type: 'sphere_volume',
            radius: 80,
            defaultOptions: {
                title: 'Sphere Volume',
                showRadius: true,
                showFormula: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'prismCrossSection': {
            name: 'Prism Cross Section',
            category: 'Geometric Measurement',
            subcategory: 'Volume',
            description: 'Prism volume using cross-sectional area and length',
            type: 'prism_cross_section',
            defaultOptions: {
                title: 'Prism Volume — Cross Section',
                showCrossSection: true,
                showLength: true,
                showFormula: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'pyramidVolume': {
            name: 'Pyramid Volume',
            category: 'Geometric Measurement',
            subcategory: 'Volume',
            description: 'Volume of a pyramid with base area and height labelled',
            type: 'pyramid_volume',
            baseLength: 8,
            height: 10,
            defaultOptions: {
                title: 'Pyramid Volume',
                showBase: true,
                showHeight: true,
                showFormula: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'compositeSolidVolume': {
            name: 'Composite Solid Volume',
            category: 'Geometric Measurement',
            subcategory: 'Volume',
            description: 'Volume of a composite solid split into simpler 3D shapes',
            type: 'composite_solid_volume',
            defaultOptions: {
                title: 'Composite Solid Volume',
                showParts: true,
                showLabels: true,
                showFormula: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== GEOMETRIC MEASUREMENT — ARC LENGTH ===================
        // ============================================================

        'arcLengthDiagram': {
            name: 'Arc Length Diagram',
            category: 'Geometric Measurement',
            subcategory: 'Arc Length',
            description: 'Arc length with radius and central angle labelled',
            type: 'arc_length_diagram',
            radius: 100,
            angle: 60,
            defaultOptions: {
                title: 'Arc Length',
                showRadius: true,
                showAngle: true,
                showFormula: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'sectorArcLabelled': {
            name: 'Sector Arc Labelled',
            category: 'Geometric Measurement',
            subcategory: 'Arc Length',
            description: 'Sector with arc length and central angle clearly labelled',
            type: 'sector_arc_labelled',
            radius: 100,
            angle: 90,
            defaultOptions: {
                title: 'Sector Arc Length',
                showLabels: true,
                showFormula: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'minorMajorArc': {
            name: 'Minor and Major Arc',
            category: 'Geometric Measurement',
            subcategory: 'Arc Length',
            description: 'Circle showing minor and major arc with labels',
            type: 'minor_major_arc',
            radius: 100,
            angle: 80,
            defaultOptions: {
                title: 'Minor and Major Arc',
                showMinor: true,
                showMajor: true,
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'radianDefinitionDiagram': {
            name: 'Radian Definition Diagram',
            category: 'Geometric Measurement',
            subcategory: 'Arc Length',
            description: 'Definition of one radian as arc length equal to radius',
            type: 'radian_definition_diagram',
            radius: 100,
            defaultOptions: {
                title: 'Radian Definition',
                showArcEqualRadius: true,
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'arcLengthFormulaVisual': {
            name: 'Arc Length Formula Visual',
            category: 'Geometric Measurement',
            subcategory: 'Arc Length',
            description: 'Visual derivation of the arc length formula l = rθ',
            type: 'arc_length_formula_visual',
            radius: 100,
            angle: 1,
            defaultOptions: {
                title: 'Arc Length Formula l = rθ',
                showDerivation: true,
                showFormula: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'degreesRadiansComparison': {
            name: 'Degrees Radians Comparison',
            category: 'Geometric Measurement',
            subcategory: 'Arc Length',
            description: 'Side-by-side comparison of degree and radian measures',
            type: 'degrees_radians_comparison',
            defaultOptions: {
                title: 'Degrees vs Radians',
                showConversionFormula: true,
                showSpecialAngles: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== GEOMETRIC MEASUREMENT — SECTOR AREA ==================
        // ============================================================

        'sectorAreaDiagram': {
            name: 'Sector Area Diagram',
            category: 'Geometric Measurement',
            subcategory: 'Sector Area',
            description: 'Area of a sector with radius and central angle labelled',
            type: 'sector_area_diagram',
            radius: 100,
            angle: 60,
            defaultOptions: {
                title: 'Sector Area',
                showRadius: true,
                showAngle: true,
                showFormula: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'sectorVsSegment': {
            name: 'Sector vs Segment',
            category: 'Geometric Measurement',
            subcategory: 'Sector Area',
            description: 'Comparison of sector and segment areas on the same circle',
            type: 'sector_vs_segment',
            radius: 100,
            angle: 60,
            defaultOptions: {
                title: 'Sector vs Segment',
                showSector: true,
                showSegment: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'segmentAreaDiagram': {
            name: 'Segment Area Diagram',
            category: 'Geometric Measurement',
            subcategory: 'Sector Area',
            description: 'Area of a circular segment as sector minus triangle',
            type: 'segment_area_diagram',
            radius: 100,
            angle: 60,
            defaultOptions: {
                title: 'Segment Area',
                showSector: true,
                showTriangle: true,
                showFormula: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'sectorFractionOfCircle': {
            name: 'Sector Fraction of Circle',
            category: 'Geometric Measurement',
            subcategory: 'Sector Area',
            description: 'Sector area as a fraction of the full circle area',
            type: 'sector_fraction_of_circle',
            radius: 100,
            angle: 90,
            defaultOptions: {
                title: 'Sector as Fraction of Circle',
                showFraction: true,
                showFormula: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'sectorAreaFormulaVisual': {
            name: 'Sector Area Formula Visual',
            category: 'Geometric Measurement',
            subcategory: 'Sector Area',
            description: 'Visual derivation of the sector area formula A = ½r²θ',
            type: 'sector_area_formula_visual',
            radius: 100,
            defaultOptions: {
                title: 'Sector Area Formula A = ½r²θ',
                showDerivation: true,
                showFormula: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'compositeSectorDiagram': {
            name: 'Composite Sector Diagram',
            category: 'Geometric Measurement',
            subcategory: 'Sector Area',
            description: 'Composite shape involving sectors and other regions',
            type: 'composite_sector_diagram',
            defaultOptions: {
                title: 'Composite Sector Area',
                showParts: true,
                showLabels: true,
                showFormula: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== GEOMETRIC MEASUREMENT — TRIGONOMETRY RATIOS ==========
        // ============================================================

        'rightTriangleLabelled': {
            name: 'Right Triangle Labelled',
            category: 'Geometric Measurement',
            subcategory: 'Trigonometry Ratios',
            description: 'Right triangle with hypotenuse, opposite, and adjacent labelled',
            type: 'right_triangle_labelled',
            angle: 35,
            defaultOptions: {
                title: 'Right Triangle — Sides Labelled',
                showAngle: true,
                showSideNames: true,
                showRightAngle: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'sohCahToaDiagram': {
            name: 'SOH CAH TOA Diagram',
            category: 'Geometric Measurement',
            subcategory: 'Trigonometry Ratios',
            description: 'SOH CAH TOA mnemonic with labelled right triangle',
            type: 'soh_cah_toa_diagram',
            angle: 35,
            defaultOptions: {
                title: 'SOH CAH TOA',
                showMnemonic: true,
                showRatios: true,
                showTriangle: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'angleOfElevation': {
            name: 'Angle of Elevation',
            category: 'Geometric Measurement',
            subcategory: 'Trigonometry Ratios',
            description: 'Angle of elevation from observer to object above horizon',
            type: 'angle_of_elevation',
            angle: 30,
            defaultOptions: {
                title: 'Angle of Elevation',
                showAngle: true,
                showHorizontal: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'angleOfDepression': {
            name: 'Angle of Depression',
            category: 'Geometric Measurement',
            subcategory: 'Trigonometry Ratios',
            description: 'Angle of depression from observer to object below horizon',
            type: 'angle_of_depression',
            angle: 25,
            defaultOptions: {
                title: 'Angle of Depression',
                showAngle: true,
                showHorizontal: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'specialAnglesTriangle3060': {
            name: 'Special Angles Triangle 30-60',
            category: 'Geometric Measurement',
            subcategory: 'Trigonometry Ratios',
            description: '30-60-90 triangle with exact side ratios labelled',
            type: 'special_angles_triangle_30_60',
            defaultOptions: {
                title: '30-60-90 Special Triangle',
                showAngles: true,
                showExactRatios: true,
                showTrigValues: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'specialAnglesTriangle4545': {
            name: 'Special Angles Triangle 45-45',
            category: 'Geometric Measurement',
            subcategory: 'Trigonometry Ratios',
            description: '45-45-90 triangle with exact side ratios labelled',
            type: 'special_angles_triangle_45_45',
            defaultOptions: {
                title: '45-45-90 Special Triangle',
                showAngles: true,
                showExactRatios: true,
                showTrigValues: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'unitCircleBasic': {
            name: 'Unit Circle Basic',
            category: 'Geometric Measurement',
            subcategory: 'Trigonometry Ratios',
            description: 'Unit circle with radius 1 and basic angle positions',
            type: 'unit_circle_basic',
            defaultOptions: {
                title: 'Unit Circle',
                showRadius: true,
                showAngles: true,
                showCoordinates: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'trigRatioSimilarityProof': {
            name: 'Trig Ratio Similarity Proof',
            category: 'Geometric Measurement',
            subcategory: 'Trigonometry Ratios',
            description: 'Proof that trig ratios are constant via similar triangles',
            type: 'trig_ratio_similarity_proof',
            defaultOptions: {
                title: 'Trig Ratios — Similarity Proof',
                showSimilarTriangles: true,
                showRatioEquality: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== GEOMETRIC MEASUREMENT — PYTHAGOREAN THEOREM ==========
        // ============================================================

        'pythagorasSquareProof': {
            name: 'Pythagoras Square Proof',
            category: 'Geometric Measurement',
            subcategory: 'Pythagorean Theorem',
            description: 'Classic geometric proof with squares on each side of a right triangle',
            type: 'pythagoras_square_proof',
            a: 3,
            b: 4,
            c: 5,
            defaultOptions: {
                title: 'Pythagoras — Square Proof',
                showSquares: true,
                showLabels: true,
                showFormula: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'pythagoreanTriple345': {
            name: 'Pythagorean Triple 3-4-5',
            category: 'Geometric Measurement',
            subcategory: 'Pythagorean Theorem',
            description: 'Right triangle with the 3-4-5 Pythagorean triple labelled',
            type: 'pythagorean_triple_3_4_5',
            defaultOptions: {
                title: 'Pythagorean Triple 3-4-5',
                showSides: true,
                showVerification: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'garfieldTrapezoidProof': {
            name: 'Garfield Trapezoid Proof',
            category: 'Geometric Measurement',
            subcategory: 'Pythagorean Theorem',
            description: "Garfield's trapezoid proof of the Pythagorean theorem",
            type: 'garfield_trapezoid_proof',
            a: 3,
            b: 4,
            defaultOptions: {
                title: "Garfield's Trapezoid Proof",
                showTrapezoid: true,
                showTriangles: true,
                showAnnotations: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'pythagoreanRearrangementProof': {
            name: 'Pythagorean Rearrangement Proof',
            category: 'Geometric Measurement',
            subcategory: 'Pythagorean Theorem',
            description: 'Rearrangement proof using four congruent right triangles',
            type: 'pythagorean_rearrangement_proof',
            a: 3,
            b: 4,
            defaultOptions: {
                title: 'Rearrangement Proof',
                showSteps: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'pythagoras3DCuboidDiagonal': {
            name: 'Pythagoras 3D Cuboid Diagonal',
            category: 'Geometric Measurement',
            subcategory: 'Pythagorean Theorem',
            description: 'Pythagoras applied in 3D to find the space diagonal of a cuboid',
            type: 'pythagoras_3d_cuboid_diagonal',
            length: 6,
            width: 4,
            height: 3,
            defaultOptions: {
                title: 'Pythagoras in 3D — Cuboid Diagonal',
                show3D: true,
                showSteps: true,
                showFormula: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'conversePythagorasDiagram': {
            name: 'Converse Pythagoras Diagram',
            category: 'Geometric Measurement',
            subcategory: 'Pythagorean Theorem',
            description: 'Converse of Pythagoras used to test if a triangle is right-angled',
            type: 'converse_pythagoras_diagram',
            a: 5,
            b: 12,
            c: 13,
            defaultOptions: {
                title: 'Converse of Pythagoras',
                showTest: true,
                showConclusion: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'pythagoreanTriplesTable': {
            name: 'Pythagorean Triples Table',
            category: 'Geometric Measurement',
            subcategory: 'Pythagorean Theorem',
            description: 'Table of common Pythagorean triples with verification',
            type: 'pythagorean_triples_table',
            defaultOptions: {
                title: 'Pythagorean Triples',
                showTable: true,
                showVerification: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== GEOMETRIC MEASUREMENT — BEARINGS =====================
        // ============================================================

        'compassRoseBearings': {
            name: 'Compass Rose Bearings',
            category: 'Geometric Measurement',
            subcategory: 'Bearings',
            description: 'Compass rose showing eight cardinal and intercardinal directions with bearings',
            type: 'compass_rose_bearings',
            defaultOptions: {
                title: 'Compass Rose — Bearings',
                showCardinal: true,
                showIntercardinal: true,
                showDegrees: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'northArrowDiagram': {
            name: 'North Arrow Diagram',
            category: 'Geometric Measurement',
            subcategory: 'Bearings',
            description: 'North arrow with clockwise bearing angle labelled',
            type: 'north_arrow_diagram',
            bearing: 045,
            defaultOptions: {
                title: 'North Arrow and Bearing',
                showNorth: true,
                showAngle: true,
                showThreeFigure: true,
                width: 600,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'twoLegJourneyBearing': {
            name: 'Two-Leg Journey Bearing',
            category: 'Geometric Measurement',
            subcategory: 'Bearings',
            description: 'Two-leg journey diagram with bearings on each leg',
            type: 'two_leg_journey_bearing',
            bearing1: 050,
            distance1: 10,
            bearing2: 130,
            distance2: 8,
            defaultOptions: {
                title: 'Two-Leg Bearing Journey',
                showNorth: true,
                showBearings: true,
                showDistances: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'backBearingDiagram': {
            name: 'Back Bearing Diagram',
            category: 'Geometric Measurement',
            subcategory: 'Bearings',
            description: 'Forward bearing and back bearing shown on same diagram',
            type: 'back_bearing_diagram',
            bearing: 070,
            defaultOptions: {
                title: 'Back Bearing',
                showForward: true,
                showBack: true,
                showCalculation: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'bearingTriangleTrig': {
            name: 'Bearing Triangle Trig',
            category: 'Geometric Measurement',
            subcategory: 'Bearings',
            description: 'Bearing problem solved using a triangle with trigonometry',
            type: 'bearing_triangle_trig',
            defaultOptions: {
                title: 'Bearing Problem — Trig Triangle',
                showNorth: true,
                showTriangle: true,
                showWorkings: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'northingEastingComponents': {
            name: 'Northing Easting Components',
            category: 'Geometric Measurement',
            subcategory: 'Bearings',
            description: 'Vector resolved into northing and easting components from bearing',
            type: 'northing_easting_components',
            bearing: 060,
            distance: 12,
            defaultOptions: {
                title: 'Northing and Easting Components',
                showComponents: true,
                showAngles: true,
                showFormula: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'threeFigureBearingExamples': {
            name: 'Three Figure Bearing Examples',
            category: 'Geometric Measurement',
            subcategory: 'Bearings',
            description: 'Multiple examples of three-figure bearing notation',
            type: 'three_figure_bearing_examples',
            defaultOptions: {
                title: 'Three-Figure Bearings',
                showExamples: true,
                showNorth: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== ALGEBRAIC EQUATIONS — LINEAR =========================
        // ============================================================

        'balanceScaleEquationModel': {
            name: 'Balance Scale Equation Model',
            category: 'Algebraic Equations',
            subcategory: 'Linear Equations',
            description: 'Two-pan balance scale modelling an algebraic equation',
            type: 'balance_scale_equation_model',
            equation: '2x + 3 = 7',
            defaultOptions: {
                title: 'Balance Scale Equation Model',
                showBalance: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'linearEquationNumberLineSolution': {
            name: 'Linear Equation Number Line Solution',
            category: 'Algebraic Equations',
            subcategory: 'Linear Equations',
            description: 'Number line showing the solution to a linear equation',
            type: 'linear_equation_number_line_solution',
            solution: 3,
            defaultOptions: {
                title: 'Linear Equation — Number Line Solution',
                showNumberLine: true,
                showSolution: true,
                width: 800,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'linearGraphXInterceptSolution': {
            name: 'Linear Graph X-Intercept Solution',
            category: 'Algebraic Equations',
            subcategory: 'Linear Equations',
            description: 'Linear graph showing solution as x-intercept',
            type: 'linear_graph_x_intercept_solution',
            gradient: 2,
            yIntercept: -4,
            defaultOptions: {
                title: 'Linear Equation — Graphical Solution',
                showGraph: true,
                showIntercept: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'twoLinearGraphsIntersection': {
            name: 'Two Linear Graphs Intersection',
            category: 'Algebraic Equations',
            subcategory: 'Linear Equations',
            description: 'Two linear graphs intersecting at the simultaneous solution',
            type: 'two_linear_graphs_intersection',
            line1: { gradient: 2, yIntercept: -1 },
            line2: { gradient: -1, yIntercept: 5 },
            defaultOptions: {
                title: 'Simultaneous Equations — Graphical',
                showIntersection: true,
                showLabels: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'solvingStepsFlowchartLinear': {
            name: 'Solving Steps Flowchart Linear',
            category: 'Algebraic Equations',
            subcategory: 'Linear Equations',
            description: 'Flowchart showing step-by-step method for solving linear equations',
            type: 'solving_steps_flowchart_linear',
            defaultOptions: {
                title: 'Solving Linear Equations — Flowchart',
                showSteps: true,
                showExamples: true,
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'linearEquationSpecialCasesComparison': {
            name: 'Linear Equation Special Cases Comparison',
            category: 'Algebraic Equations',
            subcategory: 'Linear Equations',
            description: 'Side-by-side comparison of no solution vs infinite solutions',
            type: 'linear_equation_special_cases_comparison',
            defaultOptions: {
                title: 'Special Cases — Linear Equations',
                showNoSolution: true,
                showInfiniteSolutions: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'inverseOperationsArrowDiagram': {
            name: 'Inverse Operations Arrow Diagram',
            category: 'Algebraic Equations',
            subcategory: 'Linear Equations',
            description: 'Arrow diagram showing inverse operations used to solve equations',
            type: 'inverse_operations_arrow_diagram',
            defaultOptions: {
                title: 'Inverse Operations',
                showPairs: true,
                showExamples: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'linearEquationBalanceStepsAnnotated': {
            name: 'Linear Equation Balance Steps Annotated',
            category: 'Algebraic Equations',
            subcategory: 'Linear Equations',
            description: 'Annotated step-by-step balance method for solving a linear equation',
            type: 'linear_equation_balance_steps_annotated',
            equation: '3x - 5 = 10',
            defaultOptions: {
                title: 'Solving Linear Equations — Balance Steps',
                showEachStep: true,
                showAnnotations: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== ALGEBRAIC EQUATIONS — QUADRATIC ======================
        // ============================================================

        'parabolaPositiveNegativeLeading': {
            name: 'Parabola Positive Negative Leading',
            category: 'Algebraic Equations',
            subcategory: 'Quadratic Equations',
            description: 'Parabolas with positive and negative leading coefficients compared',
            type: 'parabola_positive_negative_leading',
            defaultOptions: {
                title: 'Parabola — Effect of Leading Coefficient',
                showBoth: true,
                showLabels: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'parabolaThreeDiscriminantCases': {
            name: 'Parabola Three Discriminant Cases',
            category: 'Algebraic Equations',
            subcategory: 'Quadratic Equations',
            description: 'Three parabolas showing two roots, one root, and no real roots',
            type: 'parabola_three_discriminant_cases',
            defaultOptions: {
                title: 'Discriminant — Three Cases',
                showAllThree: true,
                showDiscriminant: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'discriminantVisualSummary': {
            name: 'Discriminant Visual Summary',
            category: 'Algebraic Equations',
            subcategory: 'Quadratic Equations',
            description: 'Visual summary of discriminant values and solution types',
            type: 'discriminant_visual_summary',
            defaultOptions: {
                title: 'Discriminant Summary',
                showFormula: true,
                showCases: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'quadraticGraphRootsVertexAxis': {
            name: 'Quadratic Graph Roots Vertex Axis',
            category: 'Algebraic Equations',
            subcategory: 'Quadratic Equations',
            description: 'Parabola with roots, vertex, and axis of symmetry all labelled',
            type: 'quadratic_graph_roots_vertex_axis',
            a: 1,
            b: -3,
            c: -4,
            defaultOptions: {
                title: 'Quadratic Graph — Key Features',
                showRoots: true,
                showVertex: true,
                showAxis: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'completingTheSquareGeometricTiles': {
            name: 'Completing the Square Geometric Tiles',
            category: 'Algebraic Equations',
            subcategory: 'Quadratic Equations',
            description: 'Geometric tile model for completing the square',
            type: 'completing_the_square_geometric_tiles',
            a: 1,
            b: 6,
            defaultOptions: {
                title: 'Completing the Square — Tiles',
                showTiles: true,
                showSteps: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'quadraticFormulaDerivationSteps': {
            name: 'Quadratic Formula Derivation Steps',
            category: 'Algebraic Equations',
            subcategory: 'Quadratic Equations',
            description: 'Step-by-step derivation of the quadratic formula by completing the square',
            type: 'quadratic_formula_derivation_steps',
            defaultOptions: {
                title: 'Quadratic Formula Derivation',
                showEachStep: true,
                showAnnotations: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'factoredFormRootsAnnotatedParabola': {
            name: 'Factored Form Roots Annotated Parabola',
            category: 'Algebraic Equations',
            subcategory: 'Quadratic Equations',
            description: 'Parabola in factored form with roots annotated from factors',
            type: 'factored_form_roots_annotated_parabola',
            root1: -2,
            root2: 3,
            defaultOptions: {
                title: 'Factored Form and Roots',
                showFactors: true,
                showRoots: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'vertexFormTransformationDiagram': {
            name: 'Vertex Form Transformation Diagram',
            category: 'Algebraic Equations',
            subcategory: 'Quadratic Equations',
            description: 'Parabola in vertex form showing transformations from parent function',
            type: 'vertex_form_transformation_diagram',
            a: 1,
            h: 2,
            k: -3,
            defaultOptions: {
                title: 'Vertex Form — Transformations',
                showParent: true,
                showTransformed: true,
                showVertex: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'vietasFormulasRootsDiagram': {
            name: "Vieta's Formulas Roots Diagram",
            category: 'Algebraic Equations',
            subcategory: 'Quadratic Equations',
            description: "Vieta's formulas relating sum and product of roots to coefficients",
            type: 'vietas_formulas_roots_diagram',
            defaultOptions: {
                title: "Vieta's Formulas",
                showSumFormula: true,
                showProductFormula: true,
                showExample: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'quadraticMethodSelectionFlowchart': {
            name: 'Quadratic Method Selection Flowchart',
            category: 'Algebraic Equations',
            subcategory: 'Quadratic Equations',
            description: 'Flowchart for selecting the best method to solve a quadratic equation',
            type: 'quadratic_method_selection_flowchart',
            defaultOptions: {
                title: 'Quadratic Solving — Method Flowchart',
                showDecisionPoints: true,
                showMethods: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'parabolaRealWorldProjectileOverlay': {
            name: 'Parabola Real World Projectile Overlay',
            category: 'Algebraic Equations',
            subcategory: 'Quadratic Equations',
            description: 'Parabolic projectile path overlaid on a real-world context diagram',
            type: 'parabola_real_world_projectile_overlay',
            initialVelocity: 20,
            angle: 45,
            defaultOptions: {
                title: 'Parabola — Projectile Application',
                showPath: true,
                showEquation: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'sumProductRootsNumberLine': {
            name: 'Sum Product Roots Number Line',
            category: 'Algebraic Equations',
            subcategory: 'Quadratic Equations',
            description: 'Number line showing roots with their sum and product annotated',
            type: 'sum_product_roots_number_line',
            root1: -2,
            root2: 5,
            defaultOptions: {
                title: 'Sum and Product of Roots',
                showNumberLine: true,
                showSum: true,
                showProduct: true,
                width: 800,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== ALGEBRAIC EQUATIONS — POLYNOMIAL =====================
        // ============================================================

        'polynomialDegreeShapesOverview': {
            name: 'Polynomial Degree Shapes Overview',
            category: 'Algebraic Equations',
            subcategory: 'Polynomial Equations',
            description: 'Overview of polynomial graph shapes by degree',
            type: 'polynomial_degree_shapes_overview',
            defaultOptions: {
                title: 'Polynomial Shapes by Degree',
                showDegrees: [1, 2, 3, 4],
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'cubicGraphOneThreeRoots': {
            name: 'Cubic Graph One Three Roots',
            category: 'Algebraic Equations',
            subcategory: 'Polynomial Equations',
            description: 'Cubic graphs showing cases of one real root and three real roots',
            type: 'cubic_graph_one_three_roots',
            defaultOptions: {
                title: 'Cubic Graph — Root Cases',
                showBothCases: true,
                showGrid: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'quarticGraphRootMultiplicityCases': {
            name: 'Quartic Graph Root Multiplicity Cases',
            category: 'Algebraic Equations',
            subcategory: 'Polynomial Equations',
            description: 'Quartic graph showing different root multiplicity cases',
            type: 'quartic_graph_root_multiplicity_cases',
            defaultOptions: {
                title: 'Quartic — Root Multiplicity Cases',
                showCases: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'multiplicityCrossingVsTouchingDiagram': {
            name: 'Multiplicity Crossing vs Touching Diagram',
            category: 'Algebraic Equations',
            subcategory: 'Polynomial Equations',
            description: 'Diagram showing crossing (odd multiplicity) vs touching (even multiplicity) at roots',
            type: 'multiplicity_crossing_vs_touching_diagram',
            defaultOptions: {
                title: 'Root Multiplicity — Crossing vs Touching',
                showOddMultiplicity: true,
                showEvenMultiplicity: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rationalRootTheoremFactorTree': {
            name: 'Rational Root Theorem Factor Tree',
            category: 'Algebraic Equations',
            subcategory: 'Polynomial Equations',
            description: 'Factor tree illustrating the rational root theorem candidates',
            type: 'rational_root_theorem_factor_tree',
            defaultOptions: {
                title: 'Rational Root Theorem',
                showFactors: true,
                showCandidates: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'syntheticDivisionTemplateAnnotated': {
            name: 'Synthetic Division Template Annotated',
            category: 'Algebraic Equations',
            subcategory: 'Polynomial Equations',
            description: 'Annotated synthetic division template with worked example',
            type: 'synthetic_division_template_annotated',
            defaultOptions: {
                title: 'Synthetic Division',
                showTemplate: true,
                showWorkedExample: true,
                showAnnotations: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'factorTheoremRemainderVisual': {
            name: 'Factor Theorem Remainder Visual',
            category: 'Algebraic Equations',
            subcategory: 'Polynomial Equations',
            description: 'Visual connecting the factor theorem and remainder theorem',
            type: 'factor_theorem_remainder_visual',
            defaultOptions: {
                title: 'Factor and Remainder Theorem',
                showConnection: true,
                showExample: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'polynomialEndBehaviourDegreeSign': {
            name: 'Polynomial End Behaviour Degree Sign',
            category: 'Algebraic Equations',
            subcategory: 'Polynomial Equations',
            description: 'End behaviour of polynomials based on degree and leading coefficient sign',
            type: 'polynomial_end_behaviour_degree_sign',
            defaultOptions: {
                title: 'Polynomial End Behaviour',
                showAllFourCases: true,
                showArrows: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'depressedPolynomialReductionSteps': {
            name: 'Depressed Polynomial Reduction Steps',
            category: 'Algebraic Equations',
            subcategory: 'Polynomial Equations',
            description: 'Step diagram showing polynomial reduction to depressed polynomial',
            type: 'depressed_polynomial_reduction_steps',
            defaultOptions: {
                title: 'Depressed Polynomial Reduction',
                showSteps: true,
                showAnnotations: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'descartesRuleSignsTable': {
            name: 'Descartes Rule Signs Table',
            category: 'Algebraic Equations',
            subcategory: 'Polynomial Equations',
            description: "Descartes' rule of signs applied to a polynomial with sign change table",
            type: 'descartes_rule_signs_table',
            defaultOptions: {
                title: "Descartes' Rule of Signs",
                showTable: true,
                showExample: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'polynomialRootsComplexPlane': {
            name: 'Polynomial Roots Complex Plane',
            category: 'Algebraic Equations',
            subcategory: 'Polynomial Equations',
            description: 'Complex plane showing real and complex roots of a polynomial',
            type: 'polynomial_roots_complex_plane',
            defaultOptions: {
                title: 'Polynomial Roots — Complex Plane',
                showRealAxis: true,
                showImaginaryAxis: true,
                showConjugatePairs: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'polynomialEquationSolvingFlowchart': {
            name: 'Polynomial Equation Solving Flowchart',
            category: 'Algebraic Equations',
            subcategory: 'Polynomial Equations',
            description: 'Flowchart for solving polynomial equations step by step',
            type: 'polynomial_equation_solving_flowchart',
            defaultOptions: {
                title: 'Polynomial Solving Flowchart',
                showDecisionPoints: true,
                showMethods: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== ALGEBRAIC EQUATIONS — RATIONAL =======================
        // ============================================================

        'rationalExpressionDomainNumberLine': {
            name: 'Rational Expression Domain Number Line',
            category: 'Algebraic Equations',
            subcategory: 'Rational Equations',
            description: 'Number line showing domain of a rational expression with excluded values',
            type: 'rational_expression_domain_number_line',
            excludedValue: 2,
            defaultOptions: {
                title: 'Rational Expression Domain',
                showNumberLine: true,
                showExcluded: true,
                showNotation: true,
                width: 800,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'excludedValuesDenominatorDiagram': {
            name: 'Excluded Values Denominator Diagram',
            category: 'Algebraic Equations',
            subcategory: 'Rational Equations',
            description: 'Diagram showing how denominator zeros create excluded domain values',
            type: 'excluded_values_denominator_diagram',
            defaultOptions: {
                title: 'Excluded Values — Denominator = 0',
                showDenominator: true,
                showExcluded: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'lcdVennDiagramDenominators': {
            name: 'LCD Venn Diagram Denominators',
            category: 'Algebraic Equations',
            subcategory: 'Rational Equations',
            description: 'Venn diagram showing shared and unique factors to find LCD',
            type: 'lcd_venn_diagram_denominators',
            defaultOptions: {
                title: 'LCD — Venn Diagram',
                showVenn: true,
                showLCD: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rationalEquationSolvingStepsFlowchart': {
            name: 'Rational Equation Solving Steps Flowchart',
            category: 'Algebraic Equations',
            subcategory: 'Rational Equations',
            description: 'Flowchart for solving rational equations including extraneous solution check',
            type: 'rational_equation_solving_steps_flowchart',
            defaultOptions: {
                title: 'Solving Rational Equations — Flowchart',
                showSteps: true,
                showCheck: true,
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'extraneousSolutionCheckDiagram': {
            name: 'Extraneous Solution Check Diagram',
            category: 'Algebraic Equations',
            subcategory: 'Rational Equations',
            description: 'Diagram showing check step for extraneous solutions in rational equations',
            type: 'extraneous_solution_check_diagram',
            defaultOptions: {
                title: 'Extraneous Solution Check',
                showCheckStep: true,
                showExample: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rationalGraphVerticalAsymptote': {
            name: 'Rational Graph Vertical Asymptote',
            category: 'Algebraic Equations',
            subcategory: 'Rational Equations',
            description: 'Rational function graph with vertical asymptote labelled',
            type: 'rational_graph_vertical_asymptote',
            numerator: [1],
            denominator: [1, -2],
            defaultOptions: {
                title: 'Rational Graph — Vertical Asymptote',
                showAsymptote: true,
                showGraph: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rationalGraphHoleVsAsymptote': {
            name: 'Rational Graph Hole vs Asymptote',
            category: 'Algebraic Equations',
            subcategory: 'Rational Equations',
            description: 'Side-by-side comparison of a removable hole and a vertical asymptote',
            type: 'rational_graph_hole_vs_asymptote',
            defaultOptions: {
                title: 'Hole vs Vertical Asymptote',
                showHole: true,
                showAsymptote: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'combinedRatePipeDiagram': {
            name: 'Combined Rate Pipe Diagram',
            category: 'Algebraic Equations',
            subcategory: 'Rational Equations',
            description: 'Pipe filling diagram for combined rate rational equation problems',
            type: 'combined_rate_pipe_diagram',
            rate1: 3,
            rate2: 5,
            defaultOptions: {
                title: 'Combined Rate — Pipe Problem',
                showPipes: true,
                showRates: true,
                showEquation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'workRateBarModelVisual': {
            name: 'Work Rate Bar Model Visual',
            category: 'Algebraic Equations',
            subcategory: 'Rational Equations',
            description: 'Bar model visual for work-rate rational equation problems',
            type: 'work_rate_bar_model_visual',
            defaultOptions: {
                title: 'Work Rate — Bar Model',
                showBars: true,
                showEquation: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'rationalEquationProportionCrossMultiply': {
            name: 'Rational Equation Proportion Cross Multiply',
            category: 'Algebraic Equations',
            subcategory: 'Rational Equations',
            description: 'Cross multiplication method for proportion-form rational equations',
            type: 'rational_equation_proportion_cross_multiply',
            defaultOptions: {
                title: 'Proportion — Cross Multiplication',
                showCrossArrows: true,
                showSteps: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'lcdMultiplicationEachTermAnnotated': {
            name: 'LCD Multiplication Each Term Annotated',
            category: 'Algebraic Equations',
            subcategory: 'Rational Equations',
            description: 'Annotated diagram showing LCD multiplied through each term of a rational equation',
            type: 'lcd_multiplication_each_term_annotated',
            defaultOptions: {
                title: 'LCD Multiplication — Each Term',
                showAnnotations: true,
                showSteps: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'domainRestrictionSolutionSetComparison': {
            name: 'Domain Restriction Solution Set Comparison',
            category: 'Algebraic Equations',
            subcategory: 'Rational Equations',
            description: 'Comparison of domain restrictions and valid solution set',
            type: 'domain_restriction_solution_set_comparison',
            defaultOptions: {
                title: 'Domain vs Solution Set',
                showDomain: true,
                showSolution: true,
                showComparison: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== ALGEBRAIC EQUATIONS — RADICAL ========================
        // ============================================================

        'radicalEquationIsolationStepsDiagram': {
            name: 'Radical Equation Isolation Steps Diagram',
            category: 'Algebraic Equations',
            subcategory: 'Radical Equations',
            description: 'Step-by-step diagram for isolating the radical before squaring',
            type: 'radical_equation_isolation_steps_diagram',
            defaultOptions: {
                title: 'Radical Equation — Isolation Steps',
                showSteps: true,
                showAnnotations: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'squareRootFunctionGraphDomain': {
            name: 'Square Root Function Graph Domain',
            category: 'Algebraic Equations',
            subcategory: 'Radical Equations',
            description: 'Square root function graph with domain restriction annotated',
            type: 'square_root_function_graph_domain',
            defaultOptions: {
                title: 'Square Root Function — Domain',
                showGraph: true,
                showDomain: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'radicalEquationSquaringExtraneousVisual': {
            name: 'Radical Equation Squaring Extraneous Visual',
            category: 'Algebraic Equations',
            subcategory: 'Radical Equations',
            description: 'Visual showing how squaring both sides can introduce extraneous solutions',
            type: 'radical_equation_squaring_extraneous_visual',
            defaultOptions: {
                title: 'Squaring and Extraneous Solutions',
                showProcess: true,
                showCheck: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'evenOddIndexRadicalComparison': {
            name: 'Even Odd Index Radical Comparison',
            category: 'Algebraic Equations',
            subcategory: 'Radical Equations',
            description: 'Comparison of even-index and odd-index radicals and their domains',
            type: 'even_odd_index_radical_comparison',
            defaultOptions: {
                title: 'Even vs Odd Index Radicals',
                showBoth: true,
                showDomains: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'twoRadicalEquationDoubleSquaringSteps': {
            name: 'Two Radical Equation Double Squaring Steps',
            category: 'Algebraic Equations',
            subcategory: 'Radical Equations',
            description: 'Step diagram for equations with two radicals requiring double squaring',
            type: 'two_radical_equation_double_squaring_steps',
            defaultOptions: {
                title: 'Two Radicals — Double Squaring',
                showSteps: true,
                showAnnotations: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'extraneousSolutionNumberLineCheck': {
            name: 'Extraneous Solution Number Line Check',
            category: 'Algebraic Equations',
            subcategory: 'Radical Equations',
            description: 'Number line showing valid and extraneous solutions after checking',
            type: 'extraneous_solution_number_line_check',
            defaultOptions: {
                title: 'Extraneous Solution — Number Line Check',
                showNumberLine: true,
                showValid: true,
                showExtraneous: true,
                width: 800,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'radicalEquationSolvingFlowchart': {
            name: 'Radical Equation Solving Flowchart',
            category: 'Algebraic Equations',
            subcategory: 'Radical Equations',
            description: 'Flowchart for the complete method of solving radical equations',
            type: 'radical_equation_solving_flowchart',
            defaultOptions: {
                title: 'Solving Radical Equations — Flowchart',
                showSteps: true,
                showCheckStep: true,
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'radicandDomainRestrictionDiagram': {
            name: 'Radicand Domain Restriction Diagram',
            category: 'Algebraic Equations',
            subcategory: 'Radical Equations',
            description: 'Number line showing domain restriction from radicand ≥ 0 condition',
            type: 'radicand_domain_restriction_diagram',
            defaultOptions: {
                title: 'Radicand Domain Restriction',
                showNumberLine: true,
                showInequality: true,
                width: 800,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'cubeRootFunctionGraphAllReals': {
            name: 'Cube Root Function Graph All Reals',
            category: 'Algebraic Equations',
            subcategory: 'Radical Equations',
            description: 'Cube root function graph showing domain of all real numbers',
            type: 'cube_root_function_graph_all_reals',
            defaultOptions: {
                title: 'Cube Root Function — Domain: All Reals',
                showGraph: true,
                showDomain: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'radicalGraphIntersectionSolutionVisual': {
            name: 'Radical Graph Intersection Solution Visual',
            category: 'Algebraic Equations',
            subcategory: 'Radical Equations',
            description: 'Graphical solution of a radical equation via curve intersection',
            type: 'radical_graph_intersection_solution_visual',
            defaultOptions: {
                title: 'Radical Equation — Graphical Solution',
                showIntersection: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'principalSquareRootSignDiagram': {
            name: 'Principal Square Root Sign Diagram',
            category: 'Algebraic Equations',
            subcategory: 'Radical Equations',
            description: 'Diagram clarifying the principal (positive) square root convention',
            type: 'principal_square_root_sign_diagram',
            defaultOptions: {
                title: 'Principal Square Root',
                showPositive: true,
                showNegative: true,
                showConvention: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'radicalEquationRealWorldPendulumOverlay': {
            name: 'Radical Equation Real World Pendulum Overlay',
            category: 'Algebraic Equations',
            subcategory: 'Radical Equations',
            description: 'Pendulum period formula as a real-world radical equation application',
            type: 'radical_equation_real_world_pendulum_overlay',
            length: 1,
            defaultOptions: {
                title: 'Radical Equation — Pendulum Application',
                showPendulum: true,
                showFormula: true,
                showSolution: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== ALGEBRAIC EQUATIONS — SHARED/CROSS-TOPIC =============
        // ============================================================

        'equationTypeIdentificationFlowchart': {
            name: 'Equation Type Identification Flowchart',
            category: 'Algebraic Equations',
            subcategory: 'Equation Solving General',
            description: 'Flowchart for identifying the type of algebraic equation',
            type: 'equation_type_identification_flowchart',
            defaultOptions: {
                title: 'Equation Type — Identification Flowchart',
                showTypes: true,
                showExamples: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'solutionSetNotationComparison': {
            name: 'Solution Set Notation Comparison',
            category: 'Algebraic Equations',
            subcategory: 'Equation Solving General',
            description: 'Comparison of different solution set notations for various equation types',
            type: 'solution_set_notation_comparison',
            defaultOptions: {
                title: 'Solution Set Notation Comparison',
                showNotations: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'numberSystemsNestedDiagram': {
            name: 'Number Systems Nested Diagram',
            category: 'Algebraic Equations',
            subcategory: 'Equation Solving General',
            description: 'Nested diagram showing ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ with examples',
            type: 'number_systems_nested_diagram',
            defaultOptions: {
                title: 'Number Systems',
                showNested: true,
                showExamples: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'realComplexRootsSummaryTable': {
            name: 'Real Complex Roots Summary Table',
            category: 'Algebraic Equations',
            subcategory: 'Equation Solving General',
            description: 'Summary table of real vs complex roots for various equation types',
            type: 'real_complex_roots_summary_table',
            defaultOptions: {
                title: 'Real and Complex Roots Summary',
                showTable: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'algebraicEquationFamilyTree': {
            name: 'Algebraic Equation Family Tree',
            category: 'Algebraic Equations',
            subcategory: 'Equation Solving General',
            description: 'Family tree diagram showing relationships between equation types',
            type: 'algebraic_equation_family_tree',
            defaultOptions: {
                title: 'Algebraic Equation Family Tree',
                showTree: true,
                showRelationships: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'solvingStrategyDecisionTree': {
            name: 'Solving Strategy Decision Tree',
            category: 'Algebraic Equations',
            subcategory: 'Equation Solving General',
            description: 'Decision tree for selecting the appropriate solving strategy',
            type: 'solving_strategy_decision_tree',
            defaultOptions: {
                title: 'Solving Strategy Decision Tree',
                showDecisionPoints: true,
                showStrategies: true,
                width: 900,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'verificationSubstitutionStepsDiagram': {
            name: 'Verification Substitution Steps Diagram',
            category: 'Algebraic Equations',
            subcategory: 'Equation Solving General',
            description: 'Step diagram for verifying solutions by substitution',
            type: 'verification_substitution_steps_diagram',
            defaultOptions: {
                title: 'Verification by Substitution',
                showSteps: true,
                showExample: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'equationVsExpressionComparison': {
            name: 'Equation vs Expression Comparison',
            category: 'Algebraic Equations',
            subcategory: 'Equation Solving General',
            description: 'Side-by-side comparison of equations and expressions',
            type: 'equation_vs_expression_comparison',
            defaultOptions: {
                title: 'Equation vs Expression',
                showComparison: true,
                showExamples: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== ALGEBRAIC EQUATIONS — DISCRIMINANT ===================
        // ============================================================

        'discriminantThreeCasesParabola': {
            name: 'Discriminant Three Cases Parabola',
            category: 'Algebraic Equations',
            subcategory: 'Discriminant',
            description: 'Three parabolas illustrating the three discriminant cases',
            type: 'discriminant_three_cases_parabola',
            defaultOptions: {
                title: 'Discriminant — Three Cases',
                showAllThree: true,
                showDiscriminantValues: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'discriminantFormulaAnnotated': {
            name: 'Discriminant Formula Annotated',
            category: 'Algebraic Equations',
            subcategory: 'Discriminant',
            description: 'Annotated discriminant formula Δ = b² - 4ac with each part labelled',
            type: 'discriminant_formula_annotated',
            defaultOptions: {
                title: 'Discriminant Formula Δ = b² - 4ac',
                showFormula: true,
                showAnnotations: true,
                showExample: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'discriminantSignSolutionTable': {
            name: 'Discriminant Sign Solution Table',
            category: 'Algebraic Equations',
            subcategory: 'Discriminant',
            description: 'Table linking discriminant sign to number and type of solutions',
            type: 'discriminant_sign_solution_table',
            defaultOptions: {
                title: 'Discriminant Sign → Solution Type',
                showTable: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'discriminantGeometricIntersectionDiagram': {
            name: 'Discriminant Geometric Intersection Diagram',
            category: 'Algebraic Equations',
            subcategory: 'Discriminant',
            description: 'Geometric interpretation of discriminant as number of x-axis intersections',
            type: 'discriminant_geometric_intersection_diagram',
            defaultOptions: {
                title: 'Discriminant — Geometric Interpretation',
                showIntersections: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'complexRootsConjugatePairDiagram': {
            name: 'Complex Roots Conjugate Pair Diagram',
            category: 'Algebraic Equations',
            subcategory: 'Discriminant',
            description: 'Argand diagram showing complex conjugate pair roots when Δ < 0',
            type: 'complex_roots_conjugate_pair_diagram',
            defaultOptions: {
                title: 'Complex Roots — Conjugate Pair',
                showArgandDiagram: true,
                showConjugatePair: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'discriminantInQuadraticFormulaHighlighted': {
            name: 'Discriminant in Quadratic Formula Highlighted',
            category: 'Algebraic Equations',
            subcategory: 'Discriminant',
            description: 'Quadratic formula with discriminant part highlighted in colour',
            type: 'discriminant_in_quadratic_formula_highlighted',
            defaultOptions: {
                title: 'Discriminant in the Quadratic Formula',
                showFormula: true,
                showHighlight: true,
                width: 800,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== ALGEBRAIC EQUATIONS — EXTRANEOUS SOLUTIONS ===========
        // ============================================================

        'extraneousSolutionOriginSquaringDiagram': {
            name: 'Extraneous Solution Origin Squaring Diagram',
            category: 'Algebraic Equations',
            subcategory: 'Extraneous Solutions',
            description: 'Diagram showing how squaring introduces extraneous solutions',
            type: 'extraneous_solution_origin_squaring_diagram',
            defaultOptions: {
                title: 'Origin of Extraneous Solutions — Squaring',
                showProcess: true,
                showOrigin: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'extraneousVsValidSolutionComparison': {
            name: 'Extraneous vs Valid Solution Comparison',
            category: 'Algebraic Equations',
            subcategory: 'Extraneous Solutions',
            description: 'Side-by-side comparison of valid and extraneous solutions with checks',
            type: 'extraneous_vs_valid_solution_comparison',
            defaultOptions: {
                title: 'Valid vs Extraneous Solutions',
                showBoth: true,
                showChecks: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'checkInOriginalEquationFlowchart': {
            name: 'Check in Original Equation Flowchart',
            category: 'Algebraic Equations',
            subcategory: 'Extraneous Solutions',
            description: 'Flowchart showing the check step in the original equation',
            type: 'check_in_original_equation_flowchart',
            defaultOptions: {
                title: 'Check in Original Equation',
                showFlowchart: true,
                showExample: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'domainExclusionVsExtraneousDistinction': {
            name: 'Domain Exclusion vs Extraneous Distinction',
            category: 'Algebraic Equations',
            subcategory: 'Extraneous Solutions',
            description: 'Diagram distinguishing domain exclusions from extraneous solutions',
            type: 'domain_exclusion_vs_extraneous_distinction',
            defaultOptions: {
                title: 'Domain Exclusion vs Extraneous',
                showDistinction: true,
                showExamples: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rationalRadicalExtraneousSideBySide': {
            name: 'Rational Radical Extraneous Side by Side',
            category: 'Algebraic Equations',
            subcategory: 'Extraneous Solutions',
            description: 'Side-by-side comparison of extraneous solutions in rational and radical equations',
            type: 'rational_radical_extraneous_side_by_side',
            defaultOptions: {
                title: 'Extraneous Solutions — Rational vs Radical',
                showBoth: true,
                showChecks: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'extraneousSolutionGraphicalInterpretation': {
            name: 'Extraneous Solution Graphical Interpretation',
            category: 'Algebraic Equations',
            subcategory: 'Extraneous Solutions',
            description: 'Graphical interpretation showing extraneous solution as a non-intersection',
            type: 'extraneous_solution_graphical_interpretation',
            defaultOptions: {
                title: 'Extraneous Solution — Graphical',
                showGraph: true,
                showNonIntersection: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== ALGEBRAIC EQUATIONS — GRAPHICAL SOLUTIONS ============
        // ============================================================

        'graphIntersectionTwoFunctionsSolution': {
            name: 'Graph Intersection Two Functions Solution',
            category: 'Algebraic Equations',
            subcategory: 'Graphical Solutions',
            description: 'Graphical solution via intersection of two function graphs',
            type: 'graph_intersection_two_functions_solution',
            defaultOptions: {
                title: 'Graphical Solution — Intersection',
                showIntersection: true,
                showLabels: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'xInterceptAsEquationSolution': {
            name: 'X-Intercept as Equation Solution',
            category: 'Algebraic Equations',
            subcategory: 'Graphical Solutions',
            description: 'Graph showing x-intercept as the solution to f(x) = 0',
            type: 'x_intercept_as_equation_solution',
            defaultOptions: {
                title: 'X-Intercept = Equation Solution',
                showIntercept: true,
                showAnnotation: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'linearQuadraticSystemGraphs': {
            name: 'Linear Quadratic System Graphs',
            category: 'Algebraic Equations',
            subcategory: 'Graphical Solutions',
            description: 'Line and parabola plotted together showing system solutions graphically',
            type: 'linear_quadratic_system_graphs',
            defaultOptions: {
                title: 'Linear-Quadratic System — Graphical',
                showLine: true,
                showParabola: true,
                showIntersections: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'quadraticPolynomialGraphRootsOverview': {
            name: 'Quadratic Polynomial Graph Roots Overview',
            category: 'Algebraic Equations',
            subcategory: 'Graphical Solutions',
            description: 'Overview of roots on polynomial graphs of different degrees',
            type: 'quadratic_polynomial_graph_roots_overview',
            defaultOptions: {
                title: 'Polynomial Graph Roots Overview',
                showDegrees: [2, 3, 4],
                showRoots: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'graphicalVsAlgebraicSolutionComparison': {
            name: 'Graphical vs Algebraic Solution Comparison',
            category: 'Algebraic Equations',
            subcategory: 'Graphical Solutions',
            description: 'Side-by-side comparison of graphical and algebraic solution methods',
            type: 'graphical_vs_algebraic_solution_comparison',
            defaultOptions: {
                title: 'Graphical vs Algebraic Solutions',
                showBothMethods: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'approximateRootBisectionDiagram': {
            name: 'Approximate Root Bisection Diagram',
            category: 'Algebraic Equations',
            subcategory: 'Graphical Solutions',
            description: 'Bisection method diagram for approximating irrational roots',
            type: 'approximate_root_bisection_diagram',
            defaultOptions: {
                title: 'Root Approximation — Bisection Method',
                showSteps: true,
                showInterval: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'signChangeRootBracketingDiagram': {
            name: 'Sign Change Root Bracketing Diagram',
            category: 'Algebraic Equations',
            subcategory: 'Graphical Solutions',
            description: 'Diagram showing sign change between two x-values bracketing a root',
            type: 'sign_change_root_bracketing_diagram',
            defaultOptions: {
                title: 'Sign Change — Root Bracketing',
                showSignChange: true,
                showRoot: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'functionGraphSolutionAnnotationTemplate': {
            name: 'Function Graph Solution Annotation Template',
            category: 'Algebraic Equations',
            subcategory: 'Graphical Solutions',
            description: 'Template for annotating function graphs with solution information',
            type: 'function_graph_solution_annotation_template',
            defaultOptions: {
                title: 'Solution Annotation Template',
                showTemplate: true,
                showAnnotationGuide: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== ALGEBRAIC EQUATIONS — NUMBER LINE SOLUTIONS ==========
        // ============================================================

        'singleSolutionNumberLine': {
            name: 'Single Solution Number Line',
            category: 'Algebraic Equations',
            subcategory: 'Number Line Solutions',
            description: 'Number line showing a single solution point',
            type: 'single_solution_number_line',
            solution: 3,
            defaultOptions: {
                title: 'Single Solution — Number Line',
                showPoint: true,
                showLabel: true,
                width: 800,
                height: 300,
                backgroundColor: '#ffffff'
            }
        },

        'noSolutionEmptySetDiagram': {
            name: 'No Solution Empty Set Diagram',
            category: 'Algebraic Equations',
            subcategory: 'Number Line Solutions',
            description: 'Number line and empty set notation for equations with no solution',
            type: 'no_solution_empty_set_diagram',
            defaultOptions: {
                title: 'No Solution — Empty Set',
                showNumberLine: true,
                showEmptySet: true,
                width: 800,
                height: 300,
                backgroundColor: '#ffffff'
            }
        },

        'infiniteSolutionsRealLineDiagram': {
            name: 'Infinite Solutions Real Line Diagram',
            category: 'Algebraic Equations',
            subcategory: 'Number Line Solutions',
            description: 'Full real number line indicating infinitely many solutions',
            type: 'infinite_solutions_real_line_diagram',
            defaultOptions: {
                title: 'Infinite Solutions — All Reals',
                showFullLine: true,
                showNotation: true,
                width: 800,
                height: 300,
                backgroundColor: '#ffffff'
            }
        },

        'solutionIntervalNotationDiagram': {
            name: 'Solution Interval Notation Diagram',
            category: 'Algebraic Equations',
            subcategory: 'Number Line Solutions',
            description: 'Number line with interval notation showing solution set',
            type: 'solution_interval_notation_diagram',
            defaultOptions: {
                title: 'Solution — Interval Notation',
                showNumberLine: true,
                showIntervalNotation: true,
                width: 800,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'rootsOrderedOnNumberLine': {
            name: 'Roots Ordered on Number Line',
            category: 'Algebraic Equations',
            subcategory: 'Number Line Solutions',
            description: 'Multiple roots ordered and marked on a number line',
            type: 'roots_ordered_on_number_line',
            roots: [-3, 1, 4],
            defaultOptions: {
                title: 'Roots on Number Line',
                showRoots: true,
                showLabels: true,
                width: 800,
                height: 300,
                backgroundColor: '#ffffff'
            }
        },

        'complexNumberArgandDiagramBasic': {
            name: 'Complex Number Argand Diagram Basic',
            category: 'Algebraic Equations',
            subcategory: 'Number Line Solutions',
            description: 'Basic Argand diagram showing complex number a + bi plotted',
            type: 'complex_number_argand_diagram_basic',
            defaultOptions: {
                title: 'Argand Diagram',
                showRealAxis: true,
                showImaginaryAxis: true,
                showPoint: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== ALGEBRAIC INEQUALITIES — LINEAR ======================
        // ============================================================

        'linearInequalityNumberLineOpenClosedCircle': {
            name: 'Linear Inequality Number Line Open Closed Circle',
            category: 'Algebraic Inequalities',
            subcategory: 'Linear Inequalities',
            description: 'Number line showing linear inequality with open and closed circle conventions',
            type: 'linear_inequality_number_line_open_closed_circle',
            defaultOptions: {
                title: 'Linear Inequality — Number Line',
                showOpenClosed: true,
                showShading: true,
                width: 800,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'linearInequalityFourSymbolsComparison': {
            name: 'Linear Inequality Four Symbols Comparison',
            category: 'Algebraic Inequalities',
            subcategory: 'Linear Inequalities',
            description: 'Comparison of all four inequality symbols with number line examples',
            type: 'linear_inequality_four_symbols_comparison',
            defaultOptions: {
                title: 'Four Inequality Symbols',
                showAllFour: true,
                showExamples: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'reversalRuleMultiplyNegativeDiagram': {
            name: 'Reversal Rule Multiply Negative Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Linear Inequalities',
            description: 'Diagram illustrating the inequality reversal rule when multiplying by a negative',
            type: 'reversal_rule_multiply_negative_diagram',
            defaultOptions: {
                title: 'Reversal Rule — Multiply by Negative',
                showBefore: true,
                showAfter: true,
                showReversal: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'reversalRuleNumberLineReflection': {
            name: 'Reversal Rule Number Line Reflection',
            category: 'Algebraic Inequalities',
            subcategory: 'Linear Inequalities',
            description: 'Number line showing reflection effect of multiplying inequality by −1',
            type: 'reversal_rule_number_line_reflection',
            defaultOptions: {
                title: 'Reversal Rule — Number Line Reflection',
                showReflection: true,
                showArrows: true,
                width: 800,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'linearInequalitySolvingStepsFlowchart': {
            name: 'Linear Inequality Solving Steps Flowchart',
            category: 'Algebraic Inequalities',
            subcategory: 'Linear Inequalities',
            description: 'Flowchart for solving linear inequalities step by step',
            type: 'linear_inequality_solving_steps_flowchart',
            defaultOptions: {
                title: 'Solving Linear Inequalities — Flowchart',
                showSteps: true,
                showReversalCheck: true,
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'inequalityVsEquationSolutionComparison': {
            name: 'Inequality vs Equation Solution Comparison',
            category: 'Algebraic Inequalities',
            subcategory: 'Linear Inequalities',
            description: 'Side-by-side comparison of equation and inequality solution sets',
            type: 'inequality_vs_equation_solution_comparison',
            defaultOptions: {
                title: 'Inequality vs Equation Solutions',
                showComparison: true,
                showNumberLines: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'intervalNotationSymbolGuide': {
            name: 'Interval Notation Symbol Guide',
            category: 'Algebraic Inequalities',
            subcategory: 'Linear Inequalities',
            description: 'Guide to interval notation symbols with visual examples',
            type: 'interval_notation_symbol_guide',
            defaultOptions: {
                title: 'Interval Notation Guide',
                showAllTypes: true,
                showExamples: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'openClosedBracketCircleCorrespondence': {
            name: 'Open Closed Bracket Circle Correspondence',
            category: 'Algebraic Inequalities',
            subcategory: 'Linear Inequalities',
            description: 'Correspondence between open/closed brackets in interval notation and circles on number lines',
            type: 'open_closed_bracket_circle_correspondence',
            defaultOptions: {
                title: 'Brackets and Circles — Correspondence',
                showCorrespondence: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'linearInequalityBalanceScaleAnalogy': {
            name: 'Linear Inequality Balance Scale Analogy',
            category: 'Algebraic Inequalities',
            subcategory: 'Linear Inequalities',
            description: 'Balance scale analogy for linear inequalities',
            type: 'linear_inequality_balance_scale_analogy',
            defaultOptions: {
                title: 'Linear Inequality — Balance Scale',
                showBalance: true,
                showTilt: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'testPointVerificationNumberLine': {
            name: 'Test Point Verification Number Line',
            category: 'Algebraic Inequalities',
            subcategory: 'Linear Inequalities',
            description: 'Number line showing test point method for verifying inequality solution',
            type: 'test_point_verification_number_line',
            defaultOptions: {
                title: 'Test Point Verification',
                showTestPoint: true,
                showCheck: true,
                width: 800,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'linearInequalityGraphShadedRay': {
            name: 'Linear Inequality Graph Shaded Ray',
            category: 'Algebraic Inequalities',
            subcategory: 'Linear Inequalities',
            description: 'Number line with shaded ray showing linear inequality solution region',
            type: 'linear_inequality_graph_shaded_ray',
            defaultOptions: {
                title: 'Linear Inequality — Shaded Ray',
                showShading: true,
                showEndpoint: true,
                width: 800,
                height: 300,
                backgroundColor: '#ffffff'
            }
        },

        'noSolutionVsAllRealsLinearInequality': {
            name: 'No Solution vs All Reals Linear Inequality',
            category: 'Algebraic Inequalities',
            subcategory: 'Linear Inequalities',
            description: 'Comparison of no-solution and all-reals cases for linear inequalities',
            type: 'no_solution_vs_all_reals_linear_inequality',
            defaultOptions: {
                title: 'Special Cases — Linear Inequalities',
                showBoth: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'inequalitySolutionSetArrowDiagram': {
            name: 'Inequality Solution Set Arrow Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Linear Inequalities',
            description: 'Arrow diagram showing solution set of a linear inequality',
            type: 'inequality_solution_set_arrow_diagram',
            defaultOptions: {
                title: 'Inequality Solution Set — Arrow Diagram',
                showArrow: true,
                showDirection: true,
                width: 800,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'contextualInequalityBudgetNumberLine': {
            name: 'Contextual Inequality Budget Number Line',
            category: 'Algebraic Inequalities',
            subcategory: 'Linear Inequalities',
            description: 'Real-world budget inequality shown on a number line',
            type: 'contextual_inequality_budget_number_line',
            budget: 50,
            defaultOptions: {
                title: 'Budget Inequality — Number Line',
                showContext: true,
                showNumberLine: true,
                width: 800,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== ALGEBRAIC INEQUALITIES — COMPOUND ===================
        // ============================================================

        'andInequalityIntersectionNumberLine': {
            name: 'AND Inequality Intersection Number Line',
            category: 'Algebraic Inequalities',
            subcategory: 'Compound Inequalities',
            description: 'Number line showing AND compound inequality as intersection of two sets',
            type: 'and_inequality_intersection_number_line',
            lowerBound: 1,
            upperBound: 5,
            defaultOptions: {
                title: 'AND Inequality — Intersection',
                showIntersection: true,
                showBothRays: true,
                width: 800,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'orInequalityUnionNumberLine': {
            name: 'OR Inequality Union Number Line',
            category: 'Algebraic Inequalities',
            subcategory: 'Compound Inequalities',
            description: 'Number line showing OR compound inequality as union of two sets',
            type: 'or_inequality_union_number_line',
            defaultOptions: {
                title: 'OR Inequality — Union',
                showUnion: true,
                showBothRays: true,
                width: 800,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'andVsOrVennDiagramNumberLine': {
            name: 'AND vs OR Venn Diagram Number Line',
            category: 'Algebraic Inequalities',
            subcategory: 'Compound Inequalities',
            description: 'Venn diagram and number line comparing AND (intersection) vs OR (union)',
            type: 'and_vs_or_venn_diagram_number_line',
            defaultOptions: {
                title: 'AND vs OR — Venn and Number Line',
                showVenn: true,
                showNumberLine: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'threePartInequalityNumberLineAnnotated': {
            name: 'Three Part Inequality Number Line Annotated',
            category: 'Algebraic Inequalities',
            subcategory: 'Compound Inequalities',
            description: 'Three-part (chained) inequality a < x < b shown on an annotated number line',
            type: 'three_part_inequality_number_line_annotated',
            lower: 1,
            upper: 7,
            defaultOptions: {
                title: 'Three-Part Inequality — Number Line',
                showBounds: true,
                showInterval: true,
                width: 800,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'compoundInequalityNoSolutionEmptyOverlap': {
            name: 'Compound Inequality No Solution Empty Overlap',
            category: 'Algebraic Inequalities',
            subcategory: 'Compound Inequalities',
            description: 'AND compound inequality with no overlap, resulting in no solution',
            type: 'compound_inequality_no_solution_empty_overlap',
            defaultOptions: {
                title: 'Compound Inequality — No Solution',
                showNoOverlap: true,
                showEmptySet: true,
                width: 800,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'compoundInequalityAllRealsFullCoverage': {
            name: 'Compound Inequality All Reals Full Coverage',
            category: 'Algebraic Inequalities',
            subcategory: 'Compound Inequalities',
            description: 'OR compound inequality with full coverage, resulting in all real numbers',
            type: 'compound_inequality_all_reals_full_coverage',
            defaultOptions: {
                title: 'Compound Inequality — All Reals',
                showFullCoverage: true,
                showAllReals: true,
                width: 800,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'andSolutionSubsetIndividualSolutions': {
            name: 'AND Solution Subset Individual Solutions',
            category: 'Algebraic Inequalities',
            subcategory: 'Compound Inequalities',
            description: 'Diagram showing AND solution as a subset of each individual inequality solution',
            type: 'and_solution_subset_individual_solutions',
            defaultOptions: {
                title: 'AND Solution — Subset Diagram',
                showSubset: true,
                showIndividual: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'orSolutionSupersetIndividualSolutions': {
            name: 'OR Solution Superset Individual Solutions',
            category: 'Algebraic Inequalities',
            subcategory: 'Compound Inequalities',
            description: 'Diagram showing OR solution as a superset containing both individual solutions',
            type: 'or_solution_superset_individual_solutions',
            defaultOptions: {
                title: 'OR Solution — Superset Diagram',
                showSuperset: true,
                showIndividual: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'threePartInequalitySolvingStepsAnnotated': {
            name: 'Three Part Inequality Solving Steps Annotated',
            category: 'Algebraic Inequalities',
            subcategory: 'Compound Inequalities',
            description: 'Annotated solving steps for a three-part inequality',
            type: 'three_part_inequality_solving_steps_annotated',
            defaultOptions: {
                title: 'Three-Part Inequality — Solving Steps',
                showEachStep: true,
                showAnnotations: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'threePartReversalAllThreePartsDiagram': {
            name: 'Three Part Reversal All Three Parts Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Compound Inequalities',
            description: 'Diagram showing reversal applied to all three parts simultaneously',
            type: 'three_part_reversal_all_three_parts_diagram',
            defaultOptions: {
                title: 'Three-Part Inequality — Reversal',
                showAllThreeParts: true,
                showReversal: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'compoundInequalityTwoColourNumberLine': {
            name: 'Compound Inequality Two Colour Number Line',
            category: 'Algebraic Inequalities',
            subcategory: 'Compound Inequalities',
            description: 'Two-colour number line showing both individual inequalities and their combination',
            type: 'compound_inequality_two_colour_number_line',
            defaultOptions: {
                title: 'Compound Inequality — Two Colours',
                showTwoColours: true,
                showCombination: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'setIntersectionUnionIntervalNotationComparison': {
            name: 'Set Intersection Union Interval Notation Comparison',
            category: 'Algebraic Inequalities',
            subcategory: 'Compound Inequalities',
            description: 'Comparison of set intersection and union in interval notation',
            type: 'set_intersection_union_interval_notation_comparison',
            defaultOptions: {
                title: 'Intersection and Union — Interval Notation',
                showComparison: true,
                showNotation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'andOrTruthTableInequalityContext': {
            name: 'AND OR Truth Table Inequality Context',
            category: 'Algebraic Inequalities',
            subcategory: 'Compound Inequalities',
            description: 'Truth table for AND and OR in the context of compound inequalities',
            type: 'and_or_truth_table_inequality_context',
            defaultOptions: {
                title: 'AND / OR Truth Table',
                showTable: true,
                showInequalityContext: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'compoundInequalityRealWorldTemperatureRange': {
            name: 'Compound Inequality Real World Temperature Range',
            category: 'Algebraic Inequalities',
            subcategory: 'Compound Inequalities',
            description: 'Real-world temperature range as a compound inequality example',
            type: 'compound_inequality_real_world_temperature_range',
            lowerTemp: 15,
            upperTemp: 25,
            defaultOptions: {
                title: 'Temperature Range — Compound Inequality',
                showContext: true,
                showNumberLine: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== ALGEBRAIC INEQUALITIES — ABSOLUTE VALUE ==============
        // ============================================================

        'absoluteValueDistanceNumberLineCentred': {
            name: 'Absolute Value Distance Number Line Centred',
            category: 'Algebraic Inequalities',
            subcategory: 'Absolute Value Inequalities',
            description: 'Number line showing absolute value as distance from centre',
            type: 'absolute_value_distance_number_line_centred',
            centre: 0,
            radius: 3,
            defaultOptions: {
                title: 'Absolute Value — Distance from Centre',
                showCentre: true,
                showRadius: true,
                showDistances: true,
                width: 800,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'absoluteValueLessThanBoundedIntervalDiagram': {
            name: 'Absolute Value Less Than Bounded Interval Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Absolute Value Inequalities',
            description: '|x| < a shown as a bounded interval on the number line',
            type: 'absolute_value_less_than_bounded_interval_diagram',
            bound: 3,
            defaultOptions: {
                title: '|x| < a — Bounded Interval',
                showInterval: true,
                showEndpoints: true,
                width: 800,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'absoluteValueGreaterThanTwoRaysDiagram': {
            name: 'Absolute Value Greater Than Two Rays Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Absolute Value Inequalities',
            description: '|x| > a shown as two rays on the number line',
            type: 'absolute_value_greater_than_two_rays_diagram',
            bound: 3,
            defaultOptions: {
                title: '|x| > a — Two Rays',
                showTwoRays: true,
                showEndpoints: true,
                width: 800,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'lessThanANDGreaterThanORComparison': {
            name: 'Less Than AND Greater Than OR Comparison',
            category: 'Algebraic Inequalities',
            subcategory: 'Absolute Value Inequalities',
            description: 'Comparison: |x| < a gives AND; |x| > a gives OR',
            type: 'less_than_and_greater_than_or_comparison',
            defaultOptions: {
                title: '< gives AND, > gives OR',
                showBothCases: true,
                showNumberLines: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'absoluteValueSpecialCasesSummaryDiagram': {
            name: 'Absolute Value Special Cases Summary Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Absolute Value Inequalities',
            description: 'Summary of special cases: |x| < 0, |x| ≥ 0, etc.',
            type: 'absolute_value_special_cases_summary_diagram',
            defaultOptions: {
                title: 'Absolute Value — Special Cases',
                showCases: true,
                showSolutions: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'absoluteValueIsolationBeforeSplitSteps': {
            name: 'Absolute Value Isolation Before Split Steps',
            category: 'Algebraic Inequalities',
            subcategory: 'Absolute Value Inequalities',
            description: 'Step diagram showing isolation of absolute value before splitting into cases',
            type: 'absolute_value_isolation_before_split_steps',
            defaultOptions: {
                title: 'Isolate |·| Before Splitting',
                showIsolationStep: true,
                showSplitStep: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'neighbourhoodRadiusCentreNumberLine': {
            name: 'Neighbourhood Radius Centre Number Line',
            category: 'Algebraic Inequalities',
            subcategory: 'Absolute Value Inequalities',
            description: 'Number line showing neighbourhood of radius r around centre c',
            type: 'neighbourhood_radius_centre_number_line',
            centre: 2,
            radius: 3,
            defaultOptions: {
                title: 'Neighbourhood — Centre and Radius',
                showCentre: true,
                showRadius: true,
                width: 800,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'absoluteValueInequalitySolvingFlowchart': {
            name: 'Absolute Value Inequality Solving Flowchart',
            category: 'Algebraic Inequalities',
            subcategory: 'Absolute Value Inequalities',
            description: 'Flowchart for solving absolute value inequalities',
            type: 'absolute_value_inequality_solving_flowchart',
            defaultOptions: {
                title: 'Absolute Value Inequality — Flowchart',
                showSteps: true,
                showCaseSplit: true,
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'toleranceIntervalEngineeringDiagram': {
            name: 'Tolerance Interval Engineering Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Absolute Value Inequalities',
            description: 'Engineering tolerance interval as a real-world absolute value inequality',
            type: 'tolerance_interval_engineering_diagram',
            nominal: 10,
            tolerance: 0.5,
            defaultOptions: {
                title: 'Tolerance Interval — Engineering Context',
                showNominal: true,
                showTolerance: true,
                showInterval: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'twoAbsoluteValuesSquaringMethodDiagram': {
            name: 'Two Absolute Values Squaring Method Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Absolute Value Inequalities',
            description: 'Squaring method for inequalities involving two absolute value expressions',
            type: 'two_absolute_values_squaring_method_diagram',
            defaultOptions: {
                title: 'Two Absolute Values — Squaring Method',
                showSteps: true,
                showAnnotations: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'absoluteValueOpenClosedEndpointCases': {
            name: 'Absolute Value Open Closed Endpoint Cases',
            category: 'Algebraic Inequalities',
            subcategory: 'Absolute Value Inequalities',
            description: 'Comparison of strict and non-strict absolute value inequalities at endpoints',
            type: 'absolute_value_open_closed_endpoint_cases',
            defaultOptions: {
                title: 'Absolute Value — Endpoint Cases',
                showStrict: true,
                showNonStrict: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'negativeRhsNoSolutionAllRealsCases': {
            name: 'Negative RHS No Solution All Reals Cases',
            category: 'Algebraic Inequalities',
            subcategory: 'Absolute Value Inequalities',
            description: 'Cases where RHS is negative giving no solution or all reals',
            type: 'negative_rhs_no_solution_all_reals_cases',
            defaultOptions: {
                title: 'Negative RHS — Special Cases',
                showCases: true,
                showConclusions: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'absoluteValueEquationBoundaryThenInequality': {
            name: 'Absolute Value Equation Boundary Then Inequality',
            category: 'Algebraic Inequalities',
            subcategory: 'Absolute Value Inequalities',
            description: 'Solving boundary equation first then determining inequality region',
            type: 'absolute_value_equation_boundary_then_inequality',
            defaultOptions: {
                title: 'Boundary Equation → Inequality Region',
                showBoundary: true,
                showRegion: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'absoluteValueDistanceRealWorldOverlay': {
            name: 'Absolute Value Distance Real World Overlay',
            category: 'Algebraic Inequalities',
            subcategory: 'Absolute Value Inequalities',
            description: 'Real-world distance problem overlaid with absolute value inequality',
            type: 'absolute_value_distance_real_world_overlay',
            defaultOptions: {
                title: 'Absolute Value — Distance Application',
                showContext: true,
                showNumberLine: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== ALGEBRAIC INEQUALITIES — QUADRATIC ==================
        // ============================================================

        'parabolaAboveBelowXAxisSolutionRegions': {
            name: 'Parabola Above Below X-Axis Solution Regions',
            category: 'Algebraic Inequalities',
            subcategory: 'Quadratic Inequalities',
            description: 'Parabola with shaded regions above and below the x-axis as solution sets',
            type: 'parabola_above_below_x_axis_solution_regions',
            a: 1,
            roots: [-2, 3],
            defaultOptions: {
                title: 'Parabola — Above/Below X-Axis Regions',
                showShadedAbove: true,
                showShadedBelow: true,
                showRoots: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'quadraticInequalitySignChartTemplate': {
            name: 'Quadratic Inequality Sign Chart Template',
            category: 'Algebraic Inequalities',
            subcategory: 'Quadratic Inequalities',
            description: 'Blank sign chart template for solving quadratic inequalities',
            type: 'quadratic_inequality_sign_chart_template',
            defaultOptions: {
                title: 'Quadratic Inequality — Sign Chart',
                showTemplate: true,
                showRegions: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'parabolaOpeningUpSolutionRegionsAnnotated': {
            name: 'Parabola Opening Up Solution Regions Annotated',
            category: 'Algebraic Inequalities',
            subcategory: 'Quadratic Inequalities',
            description: 'Upward-opening parabola with solution regions annotated for > 0 and < 0',
            type: 'parabola_opening_up_solution_regions_annotated',
            defaultOptions: {
                title: 'Upward Parabola — Solution Regions',
                showAnnotations: true,
                showSolutionSets: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'parabolaOpeningDownSolutionRegionsAnnotated': {
            name: 'Parabola Opening Down Solution Regions Annotated',
            category: 'Algebraic Inequalities',
            subcategory: 'Quadratic Inequalities',
            description: 'Downward-opening parabola with solution regions annotated for > 0 and < 0',
            type: 'parabola_opening_down_solution_regions_annotated',
            defaultOptions: {
                title: 'Downward Parabola — Solution Regions',
                showAnnotations: true,
                showSolutionSets: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'threeDiscriminantCasesInequalitySolutions': {
            name: 'Three Discriminant Cases Inequality Solutions',
            category: 'Algebraic Inequalities',
            subcategory: 'Quadratic Inequalities',
            description: 'Three discriminant cases and their impact on quadratic inequality solutions',
            type: 'three_discriminant_cases_inequality_solutions',
            defaultOptions: {
                title: 'Discriminant Cases — Inequality Solutions',
                showAllThree: true,
                showSolutions: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'repeatedRootTouchingXAxisSolution': {
            name: 'Repeated Root Touching X-Axis Solution',
            category: 'Algebraic Inequalities',
            subcategory: 'Quadratic Inequalities',
            description: 'Parabola touching x-axis at a double root and its inequality solution',
            type: 'repeated_root_touching_x_axis_solution',
            repeatedRoot: 2,
            defaultOptions: {
                title: 'Repeated Root — Touching X-Axis',
                showTangent: true,
                showSolution: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'noRealRootsAlwaysPositiveNegativeDiagram': {
            name: 'No Real Roots Always Positive Negative Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Quadratic Inequalities',
            description: 'Parabola with no real roots: always positive or always negative',
            type: 'no_real_roots_always_positive_negative_diagram',
            defaultOptions: {
                title: 'No Real Roots — Always Positive/Negative',
                showBothCases: true,
                showConclusion: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'quadraticInequalitySolvingStepsFlowchart': {
            name: 'Quadratic Inequality Solving Steps Flowchart',
            category: 'Algebraic Inequalities',
            subcategory: 'Quadratic Inequalities',
            description: 'Flowchart for solving quadratic inequalities step by step',
            type: 'quadratic_inequality_solving_steps_flowchart',
            defaultOptions: {
                title: 'Quadratic Inequality — Solving Flowchart',
                showSteps: true,
                showDecisionPoints: true,
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'factorSignChartTwoRootsAnnotated': {
            name: 'Factor Sign Chart Two Roots Annotated',
            category: 'Algebraic Inequalities',
            subcategory: 'Quadratic Inequalities',
            description: 'Sign chart with two factors and their signs in each region annotated',
            type: 'factor_sign_chart_two_roots_annotated',
            root1: -1,
            root2: 4,
            defaultOptions: {
                title: 'Sign Chart — Two Roots',
                showFactorRows: true,
                showProductRow: true,
                showAnnotations: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'testPointRegionsQuadraticNumberLine': {
            name: 'Test Point Regions Quadratic Number Line',
            category: 'Algebraic Inequalities',
            subcategory: 'Quadratic Inequalities',
            description: 'Number line with test points in each region of a quadratic inequality',
            type: 'test_point_regions_quadratic_number_line',
            roots: [-2, 3],
            defaultOptions: {
                title: 'Test Points — Quadratic Regions',
                showRegions: true,
                showTestPoints: true,
                showResults: true,
                width: 800,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'quadraticInequalityRearrangementSteps': {
            name: 'Quadratic Inequality Rearrangement Steps',
            category: 'Algebraic Inequalities',
            subcategory: 'Quadratic Inequalities',
            description: 'Step diagram for rearranging a quadratic inequality to standard form',
            type: 'quadratic_inequality_rearrangement_steps',
            defaultOptions: {
                title: 'Quadratic Inequality — Rearrangement',
                showSteps: true,
                showAnnotations: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'parabolaGraphShadedSolutionOverlay': {
            name: 'Parabola Graph Shaded Solution Overlay',
            category: 'Algebraic Inequalities',
            subcategory: 'Quadratic Inequalities',
            description: 'Parabola graph with solution region shaded in colour',
            type: 'parabola_graph_shaded_solution_overlay',
            defaultOptions: {
                title: 'Parabola — Shaded Solution Region',
                showShading: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'quadraticInequalityEndpointInclusionRule': {
            name: 'Quadratic Inequality Endpoint Inclusion Rule',
            category: 'Algebraic Inequalities',
            subcategory: 'Quadratic Inequalities',
            description: 'Diagram showing when endpoints are included or excluded in quadratic inequality solutions',
            type: 'quadratic_inequality_endpoint_inclusion_rule',
            defaultOptions: {
                title: 'Endpoint Inclusion/Exclusion Rule',
                showStrictVsNonStrict: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'parabolaSignRuleTableAPositiveNegative': {
            name: 'Parabola Sign Rule Table A Positive Negative',
            category: 'Algebraic Inequalities',
            subcategory: 'Quadratic Inequalities',
            description: 'Table showing solution regions for a > 0 and a < 0 parabolas',
            type: 'parabola_sign_rule_table_a_positive_negative',
            defaultOptions: {
                title: 'Parabola Sign Rule Table',
                showTable: true,
                showBothCases: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'quadraticInequalityRealWorldProfitParabola': {
            name: 'Quadratic Inequality Real World Profit Parabola',
            category: 'Algebraic Inequalities',
            subcategory: 'Quadratic Inequalities',
            description: 'Real-world profit function as a quadratic inequality application',
            type: 'quadratic_inequality_real_world_profit_parabola',
            defaultOptions: {
                title: 'Profit Parabola — Quadratic Inequality',
                showContext: true,
                showGraph: true,
                showSolution: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== ALGEBRAIC INEQUALITIES — POLYNOMIAL ==================
        // ============================================================

        'polynomialSignChartFullTemplate': {
            name: 'Polynomial Sign Chart Full Template',
            category: 'Algebraic Inequalities',
            subcategory: 'Polynomial Inequalities',
            description: 'Full sign chart template for polynomial inequalities',
            type: 'polynomial_sign_chart_full_template',
            defaultOptions: {
                title: 'Polynomial Sign Chart — Template',
                showTemplate: true,
                showRegions: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'multiplicityOddCrossingSignChangeDiagram': {
            name: 'Multiplicity Odd Crossing Sign Change Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Polynomial Inequalities',
            description: 'Diagram showing sign change at roots with odd multiplicity',
            type: 'multiplicity_odd_crossing_sign_change_diagram',
            defaultOptions: {
                title: 'Odd Multiplicity — Sign Change (Crossing)',
                showCrossing: true,
                showSignChange: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'multiplicityEvenTouchingNoSignChangeDiagram': {
            name: 'Multiplicity Even Touching No Sign Change Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Polynomial Inequalities',
            description: 'Diagram showing no sign change at roots with even multiplicity',
            type: 'multiplicity_even_touching_no_sign_change_diagram',
            defaultOptions: {
                title: 'Even Multiplicity — Touching (No Sign Change)',
                showTouching: true,
                showNoSignChange: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'multiplicityComparisonSameRootOddEven': {
            name: 'Multiplicity Comparison Same Root Odd Even',
            category: 'Algebraic Inequalities',
            subcategory: 'Polynomial Inequalities',
            description: 'Side-by-side comparison of odd and even multiplicity at the same root',
            type: 'multiplicity_comparison_same_root_odd_even',
            defaultOptions: {
                title: 'Multiplicity Comparison — Odd vs Even',
                showSideBySide: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'leadingTermRightmostRegionSignDiagram': {
            name: 'Leading Term Rightmost Region Sign Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Polynomial Inequalities',
            description: 'Diagram showing how the leading term determines sign in the rightmost region',
            type: 'leading_term_rightmost_region_sign_diagram',
            defaultOptions: {
                title: 'Leading Term — Rightmost Region Sign',
                showLeadingTerm: true,
                showRightmostRegion: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'polynomialSignPropagationLeftDiagram': {
            name: 'Polynomial Sign Propagation Left Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Polynomial Inequalities',
            description: 'Diagram showing sign propagation leftward through regions using multiplicity',
            type: 'polynomial_sign_propagation_left_diagram',
            defaultOptions: {
                title: 'Sign Propagation — Leftward',
                showPropagation: true,
                showMultiplicity: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'irreducibleQuadraticFactorAlwaysPositive': {
            name: 'Irreducible Quadratic Factor Always Positive',
            category: 'Algebraic Inequalities',
            subcategory: 'Polynomial Inequalities',
            description: 'Diagram showing irreducible quadratic factor contributes constant positive sign',
            type: 'irreducible_quadratic_factor_always_positive',
            defaultOptions: {
                title: 'Irreducible Quadratic — Always Positive',
                showDiscriminant: true,
                showConstantSign: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'polynomialInequalitySolvingFlowchart': {
            name: 'Polynomial Inequality Solving Flowchart',
            category: 'Algebraic Inequalities',
            subcategory: 'Polynomial Inequalities',
            description: 'Flowchart for solving polynomial inequalities using sign charts',
            type: 'polynomial_inequality_solving_flowchart',
            defaultOptions: {
                title: 'Polynomial Inequality — Flowchart',
                showSteps: true,
                showDecisionPoints: true,
                width: 700,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'cubicSignChartThreeDistinctRoots': {
            name: 'Cubic Sign Chart Three Distinct Roots',
            category: 'Algebraic Inequalities',
            subcategory: 'Polynomial Inequalities',
            description: 'Completed sign chart for a cubic with three distinct roots',
            type: 'cubic_sign_chart_three_distinct_roots',
            roots: [-3, 1, 4],
            defaultOptions: {
                title: 'Cubic Sign Chart — Three Distinct Roots',
                showFactorRows: true,
                showProductRow: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'quarticSignChartMixedMultiplicities': {
            name: 'Quartic Sign Chart Mixed Multiplicities',
            category: 'Algebraic Inequalities',
            subcategory: 'Polynomial Inequalities',
            description: 'Sign chart for a quartic polynomial with mixed root multiplicities',
            type: 'quartic_sign_chart_mixed_multiplicities',
            defaultOptions: {
                title: 'Quartic Sign Chart — Mixed Multiplicities',
                showFactorRows: true,
                showProductRow: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'polynomialGraphShadedSolutionRegions': {
            name: 'Polynomial Graph Shaded Solution Regions',
            category: 'Algebraic Inequalities',
            subcategory: 'Polynomial Inequalities',
            description: 'Polynomial graph with solution regions shaded',
            type: 'polynomial_graph_shaded_solution_regions',
            defaultOptions: {
                title: 'Polynomial — Shaded Solution Regions',
                showShading: true,
                showGrid: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'nRootsNPlusOneRegionsDiagram': {
            name: 'N Roots N Plus One Regions Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Polynomial Inequalities',
            description: 'Diagram illustrating that n roots create n+1 sign regions',
            type: 'n_roots_n_plus_one_regions_diagram',
            n: 3,
            defaultOptions: {
                title: 'n Roots → n+1 Regions',
                showRoots: true,
                showRegions: true,
                width: 800,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'polynomialEndBehaviourSignChartEntry': {
            name: 'Polynomial End Behaviour Sign Chart Entry',
            category: 'Algebraic Inequalities',
            subcategory: 'Polynomial Inequalities',
            description: 'Diagram showing how end behaviour determines the first sign chart entry',
            type: 'polynomial_end_behaviour_sign_chart_entry',
            defaultOptions: {
                title: 'End Behaviour — Sign Chart Entry',
                showEndBehaviour: true,
                showFirstRegion: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'polynomialInequalityEndpointInclusionRule': {
            name: 'Polynomial Inequality Endpoint Inclusion Rule',
            category: 'Algebraic Inequalities',
            subcategory: 'Polynomial Inequalities',
            description: 'Rule for including or excluding endpoints in polynomial inequality solutions',
            type: 'polynomial_inequality_endpoint_inclusion_rule',
            defaultOptions: {
                title: 'Polynomial — Endpoint Inclusion Rule',
                showStrictVsNonStrict: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'polynomialInequalityFactorizationPrerequisiteDiagram': {
            name: 'Polynomial Inequality Factorization Prerequisite Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Polynomial Inequalities',
            description: 'Diagram showing that full factorization is required before sign chart analysis',
            type: 'polynomial_inequality_factorization_prerequisite_diagram',
            defaultOptions: {
                title: 'Factorization — Prerequisite for Sign Chart',
                showPrerequisite: true,
                showExample: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== ALGEBRAIC INEQUALITIES — RADICAL =====================
        // ============================================================

        'radicalInequalityDomainFirstDiagram': {
            name: 'Radical Inequality Domain First Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Radical Inequalities',
            description: 'Diagram emphasising finding the domain restriction before solving',
            type: 'radical_inequality_domain_first_diagram',
            defaultOptions: {
                title: 'Radical Inequality — Domain First',
                showDomainStep: true,
                showAlgebraicStep: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'radicandNonNegativeNumberLineDomain': {
            name: 'Radicand Non-Negative Number Line Domain',
            category: 'Algebraic Inequalities',
            subcategory: 'Radical Inequalities',
            description: 'Number line showing domain derived from radicand ≥ 0 condition',
            type: 'radicand_non_negative_number_line_domain',
            defaultOptions: {
                title: 'Radicand ≥ 0 — Domain Number Line',
                showNumberLine: true,
                showDomain: true,
                width: 800,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'evenIndexDomainRestrictionVsOddComparison': {
            name: 'Even Index Domain Restriction vs Odd Comparison',
            category: 'Algebraic Inequalities',
            subcategory: 'Radical Inequalities',
            description: 'Comparison of domain restrictions for even-index vs odd-index radicals',
            type: 'even_index_domain_restriction_vs_odd_comparison',
            defaultOptions: {
                title: 'Even vs Odd Index — Domain Comparison',
                showEven: true,
                showOdd: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'radicalInequalityRhsSignCaseDiagram': {
            name: 'Radical Inequality RHS Sign Case Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Radical Inequalities',
            description: 'Case analysis based on whether the RHS of a radical inequality is positive or negative',
            type: 'radical_inequality_rhs_sign_case_diagram',
            defaultOptions: {
                title: 'Radical Inequality — RHS Sign Cases',
                showPositiveCase: true,
                showNegativeCase: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rhsNegativeNoSolutionAlwaysTrueCases': {
            name: 'RHS Negative No Solution Always True Cases',
            category: 'Algebraic Inequalities',
            subcategory: 'Radical Inequalities',
            description: 'Cases where negative RHS gives no solution or always true based on inequality direction',
            type: 'rhs_negative_no_solution_always_true_cases',
            defaultOptions: {
                title: 'Negative RHS — No Solution / Always True',
                showCases: true,
                showConclusions: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'squaringBothSidesConditionAnnotated': {
            name: 'Squaring Both Sides Condition Annotated',
            category: 'Algebraic Inequalities',
            subcategory: 'Radical Inequalities',
            description: 'Annotated condition required before squaring both sides of a radical inequality',
            type: 'squaring_both_sides_condition_annotated',
            defaultOptions: {
                title: 'Squaring Both Sides — Condition',
                showCondition: true,
                showAnnotations: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'radicalInequalityDomainAlgebraicIntersection': {
            name: 'Radical Inequality Domain Algebraic Intersection',
            category: 'Algebraic Inequalities',
            subcategory: 'Radical Inequalities',
            description: 'Number line showing intersection of domain D and algebraic solution A',
            type: 'radical_inequality_domain_algebraic_intersection',
            defaultOptions: {
                title: 'Domain ∩ Algebraic Solution',
                showDomain: true,
                showAlgebraic: true,
                showIntersection: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'caseAnalysisRhsContainsVariableDiagram': {
            name: 'Case Analysis RHS Contains Variable Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Radical Inequalities',
            description: 'Case analysis diagram when the RHS of a radical inequality contains a variable',
            type: 'case_analysis_rhs_contains_variable_diagram',
            defaultOptions: {
                title: 'Case Analysis — Variable RHS',
                showCases: true,
                showAnnotations: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'extraneousSolutionRadicalInequalityCheck': {
            name: 'Extraneous Solution Radical Inequality Check',
            category: 'Algebraic Inequalities',
            subcategory: 'Radical Inequalities',
            description: 'Check procedure for identifying and rejecting extraneous solutions in radical inequalities',
            type: 'extraneous_solution_radical_inequality_check',
            defaultOptions: {
                title: 'Extraneous Solutions — Radical Inequality',
                showCheckProcedure: true,
                showExample: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'squareRootFunctionGraphInequalityShaded': {
            name: 'Square Root Function Graph Inequality Shaded',
            category: 'Algebraic Inequalities',
            subcategory: 'Radical Inequalities',
            description: 'Square root function graph with inequality solution region shaded',
            type: 'square_root_function_graph_inequality_shaded',
            defaultOptions: {
                title: 'Square Root — Inequality Region Shaded',
                showGraph: true,
                showShading: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'cubeRootFunctionGraphInequalityShaded': {
            name: 'Cube Root Function Graph Inequality Shaded',
            category: 'Algebraic Inequalities',
            subcategory: 'Radical Inequalities',
            description: 'Cube root function graph with inequality solution region shaded',
            type: 'cube_root_function_graph_inequality_shaded',
            defaultOptions: {
                title: 'Cube Root — Inequality Region Shaded',
                showGraph: true,
                showShading: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'radicalInequalitySolvingFlowchart': {
            name: 'Radical Inequality Solving Flowchart',
            category: 'Algebraic Inequalities',
            subcategory: 'Radical Inequalities',
            description: 'Complete flowchart for solving radical inequalities',
            type: 'radical_inequality_solving_flowchart',
            defaultOptions: {
                title: 'Radical Inequality — Solving Flowchart',
                showSteps: true,
                showDomainStep: true,
                width: 700,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'domainDAlgebraicAIntersectionNumberLine': {
            name: 'Domain D Algebraic A Intersection Number Line',
            category: 'Algebraic Inequalities',
            subcategory: 'Radical Inequalities',
            description: 'Number line showing D ∩ A as the final solution set',
            type: 'domain_d_algebraic_a_intersection_number_line',
            defaultOptions: {
                title: 'D ∩ A = Final Solution',
                showD: true,
                showA: true,
                showIntersection: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'doubleSquaringTwoRadicalsStepsDiagram': {
            name: 'Double Squaring Two Radicals Steps Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Radical Inequalities',
            description: 'Step diagram for inequalities with two radicals requiring double squaring',
            type: 'double_squaring_two_radicals_steps_diagram',
            defaultOptions: {
                title: 'Two Radicals — Double Squaring Steps',
                showSteps: true,
                showAnnotations: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'radicalInequalityRealWorldStoppingDistance': {
            name: 'Radical Inequality Real World Stopping Distance',
            category: 'Algebraic Inequalities',
            subcategory: 'Radical Inequalities',
            description: 'Stopping distance formula as a real-world radical inequality application',
            type: 'radical_inequality_real_world_stopping_distance',
            defaultOptions: {
                title: 'Stopping Distance — Radical Inequality',
                showContext: true,
                showFormula: true,
                showSolution: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== ALGEBRAIC INEQUALITIES — RATIONAL ====================
        // ============================================================

        'rationalInequalityWhyNotMultiplyDiagram': {
            name: 'Rational Inequality Why Not Multiply Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Rational Inequalities',
            description: 'Diagram explaining why we cannot multiply by the denominator directly',
            type: 'rational_inequality_why_not_multiply_diagram',
            defaultOptions: {
                title: 'Rational Inequality — Why Not Multiply?',
                showCounterExample: true,
                showReason: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'rationalInequalityRearrangeToZeroSteps': {
            name: 'Rational Inequality Rearrange to Zero Steps',
            category: 'Algebraic Inequalities',
            subcategory: 'Rational Inequalities',
            description: 'Steps for rearranging a rational inequality to compare with zero',
            type: 'rational_inequality_rearrange_to_zero_steps',
            defaultOptions: {
                title: 'Rational Inequality — Rearrange to Zero',
                showSteps: true,
                showAnnotations: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'combineSingleFractionStepsAnnotated': {
            name: 'Combine Single Fraction Steps Annotated',
            category: 'Algebraic Inequalities',
            subcategory: 'Rational Inequalities',
            description: 'Annotated steps for combining terms into a single fraction',
            type: 'combine_single_fraction_steps_annotated',
            defaultOptions: {
                title: 'Combine into Single Fraction',
                showSteps: true,
                showAnnotations: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'zerosVsUndefinedPointsComparisonDiagram': {
            name: 'Zeros vs Undefined Points Comparison Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Rational Inequalities',
            description: 'Comparison of zeros (numerator = 0) and undefined points (denominator = 0)',
            type: 'zeros_vs_undefined_points_comparison_diagram',
            defaultOptions: {
                title: 'Zeros vs Undefined Points',
                showComparison: true,
                showNumberLine: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'rationalSignChartNumeratorDenominatorRows': {
            name: 'Rational Sign Chart Numerator Denominator Rows',
            category: 'Algebraic Inequalities',
            subcategory: 'Rational Inequalities',
            description: 'Sign chart with separate rows for numerator and denominator factors',
            type: 'rational_sign_chart_numerator_denominator_rows',
            defaultOptions: {
                title: 'Rational Sign Chart — Num/Den Rows',
                showNumeratorRow: true,
                showDenominatorRow: true,
                showQuotientRow: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'undefinedPointAlwaysExcludedAnnotated': {
            name: 'Undefined Point Always Excluded Annotated',
            category: 'Algebraic Inequalities',
            subcategory: 'Rational Inequalities',
            description: 'Annotated diagram showing undefined points are always excluded regardless of inequality',
            type: 'undefined_point_always_excluded_annotated',
            defaultOptions: {
                title: 'Undefined Point — Always Excluded',
                showAnnotation: true,
                showExample: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'zeroIncludedExcludedInequalityTypeTable': {
            name: 'Zero Included Excluded Inequality Type Table',
            category: 'Algebraic Inequalities',
            subcategory: 'Rational Inequalities',
            description: 'Table showing when zeros are included or excluded based on inequality type',
            type: 'zero_included_excluded_inequality_type_table',
            defaultOptions: {
                title: 'Zeros — Included or Excluded?',
                showTable: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'rationalInequalitySolvingFlowchart': {
            name: 'Rational Inequality Solving Flowchart',
            category: 'Algebraic Inequalities',
            subcategory: 'Rational Inequalities',
            description: 'Complete flowchart for solving rational inequalities',
            type: 'rational_inequality_solving_flowchart',
            defaultOptions: {
                title: 'Rational Inequality — Solving Flowchart',
                showSteps: true,
                showSignChart: true,
                width: 700,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'rationalGraphAsymptoteSignChangeDiagram': {
            name: 'Rational Graph Asymptote Sign Change Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Rational Inequalities',
            description: 'Rational function graph showing sign change at vertical asymptotes',
            type: 'rational_graph_asymptote_sign_change_diagram',
            defaultOptions: {
                title: 'Rational Graph — Asymptote Sign Change',
                showAsymptote: true,
                showSignChange: true,
                showGraph: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'cancellationRetainedExcludedPointDiagram': {
            name: 'Cancellation Retained Excluded Point Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Rational Inequalities',
            description: 'Diagram showing that cancelled factors still create excluded points',
            type: 'cancellation_retained_excluded_point_diagram',
            defaultOptions: {
                title: 'Cancelled Factor — Excluded Point Retained',
                showCancellation: true,
                showExcludedPoint: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'rationalSignChartFourRegionsExample': {
            name: 'Rational Sign Chart Four Regions Example',
            category: 'Algebraic Inequalities',
            subcategory: 'Rational Inequalities',
            description: 'Complete sign chart example with four regions for a rational inequality',
            type: 'rational_sign_chart_four_regions_example',
            defaultOptions: {
                title: 'Rational Sign Chart — Four Regions',
                showWorkedExample: true,
                showAllRows: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'numeratorDenominatorZeroEndpointRuleTable': {
            name: 'Numerator Denominator Zero Endpoint Rule Table',
            category: 'Algebraic Inequalities',
            subcategory: 'Rational Inequalities',
            description: 'Table summarising endpoint inclusion rules for numerator and denominator zeros',
            type: 'numerator_denominator_zero_endpoint_rule_table',
            defaultOptions: {
                title: 'Endpoint Rules — Num/Den Zeros',
                showTable: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'rationalInequalityNoSolutionAlwaysPositive': {
            name: 'Rational Inequality No Solution Always Positive',
            category: 'Algebraic Inequalities',
            subcategory: 'Rational Inequalities',
            description: 'Special case where rational expression is always positive: no solution for < 0',
            type: 'rational_inequality_no_solution_always_positive',
            defaultOptions: {
                title: 'Always Positive — No Solution for < 0',
                showGraph: true,
                showConclusion: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rationalFunctionGraphShadedSolutionOverlay': {
            name: 'Rational Function Graph Shaded Solution Overlay',
            category: 'Algebraic Inequalities',
            subcategory: 'Rational Inequalities',
            description: 'Rational function graph with solution regions shaded',
            type: 'rational_function_graph_shaded_solution_overlay',
            defaultOptions: {
                title: 'Rational Function — Shaded Solution',
                showGraph: true,
                showShading: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rationalInequalityRealWorldAverageCostDiagram': {
            name: 'Rational Inequality Real World Average Cost Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Rational Inequalities',
            description: 'Average cost function as a real-world rational inequality application',
            type: 'rational_inequality_real_world_average_cost_diagram',
            defaultOptions: {
                title: 'Average Cost — Rational Inequality',
                showContext: true,
                showGraph: true,
                showSolution: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== ALGEBRAIC INEQUALITIES — EXPONENTIAL =================
        // ============================================================

        'exponentialFunctionIncreasingDecreasingComparison': {
            name: 'Exponential Function Increasing Decreasing Comparison',
            category: 'Algebraic Inequalities',
            subcategory: 'Exponential Inequalities',
            description: 'Side-by-side comparison of increasing (b > 1) and decreasing (0 < b < 1) exponentials',
            type: 'exponential_function_increasing_decreasing_comparison',
            defaultOptions: {
                title: 'Exponential — Increasing vs Decreasing',
                showBothBases: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'baseGreaterOneSameDirectionRuleDiagram': {
            name: 'Base Greater One Same Direction Rule Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Exponential Inequalities',
            description: 'Diagram showing inequality direction is preserved when base > 1',
            type: 'base_greater_one_same_direction_rule_diagram',
            defaultOptions: {
                title: 'Base > 1 — Same Direction',
                showRule: true,
                showExample: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'baseLessOneReversedDirectionRuleDiagram': {
            name: 'Base Less One Reversed Direction Rule Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Exponential Inequalities',
            description: 'Diagram showing inequality direction is reversed when 0 < base < 1',
            type: 'base_less_one_reversed_direction_rule_diagram',
            defaultOptions: {
                title: '0 < Base < 1 — Reversed Direction',
                showRule: true,
                showExample: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'growKeepShrinkFlipMnemonicVisual': {
            name: 'Grow Keep Shrink Flip Mnemonic Visual',
            category: 'Algebraic Inequalities',
            subcategory: 'Exponential Inequalities',
            description: 'Grow/Keep Shrink/Flip mnemonic visual for exponential inequality direction',
            type: 'grow_keep_shrink_flip_mnemonic_visual',
            defaultOptions: {
                title: 'Grow→Keep, Shrink→Flip Mnemonic',
                showMnemonic: true,
                showExamples: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'sameBaseComparisonExponentsAnnotated': {
            name: 'Same Base Comparison Exponents Annotated',
            category: 'Algebraic Inequalities',
            subcategory: 'Exponential Inequalities',
            description: 'Annotated comparison of same-base exponentials through exponent comparison',
            type: 'same_base_comparison_exponents_annotated',
            defaultOptions: {
                title: 'Same Base — Compare Exponents',
                showAnnotations: true,
                showDirectionRule: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'convertCommonBaseStepsDiagram': {
            name: 'Convert Common Base Steps Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Exponential Inequalities',
            description: 'Steps for converting to a common base before comparing exponents',
            type: 'convert_common_base_steps_diagram',
            defaultOptions: {
                title: 'Convert to Common Base — Steps',
                showSteps: true,
                showAnnotations: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'applyLnBothSidesStepsAnnotated': {
            name: 'Apply ln Both Sides Steps Annotated',
            category: 'Algebraic Inequalities',
            subcategory: 'Exponential Inequalities',
            description: 'Annotated steps for applying natural logarithm to both sides',
            type: 'apply_ln_both_sides_steps_annotated',
            defaultOptions: {
                title: 'Apply ln to Both Sides',
                showSteps: true,
                showAnnotations: true,
                showDirectionNote: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'lnIncreasingDirectionPreservedDiagram': {
            name: 'ln Increasing Direction Preserved Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Exponential Inequalities',
            description: 'Diagram showing that ln is increasing so inequality direction is preserved',
            type: 'ln_increasing_direction_preserved_diagram',
            defaultOptions: {
                title: 'ln is Increasing — Direction Preserved',
                showGraph: true,
                showProperty: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'substitutionMethodTEqualsAXSteps': {
            name: 'Substitution Method T Equals A X Steps',
            category: 'Algebraic Inequalities',
            subcategory: 'Exponential Inequalities',
            description: 'Substitution method steps: let t = aˣ to reduce to a polynomial inequality',
            type: 'substitution_method_t_equals_a_x_steps',
            defaultOptions: {
                title: 'Substitution Method — t = aˣ',
                showSubstitution: true,
                showSteps: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'exponentialInequalitySolvingFlowchart': {
            name: 'Exponential Inequality Solving Flowchart',
            category: 'Algebraic Inequalities',
            subcategory: 'Exponential Inequalities',
            description: 'Complete flowchart for solving exponential inequalities',
            type: 'exponential_inequality_solving_flowchart',
            defaultOptions: {
                title: 'Exponential Inequality — Flowchart',
                showDecisionPoints: true,
                showMethods: true,
                width: 700,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'exponentialGraphShadedSolutionOverlay': {
            name: 'Exponential Graph Shaded Solution Overlay',
            category: 'Algebraic Inequalities',
            subcategory: 'Exponential Inequalities',
            description: 'Exponential graph with inequality solution region shaded',
            type: 'exponential_graph_shaded_solution_overlay',
            defaultOptions: {
                title: 'Exponential — Shaded Solution Region',
                showGraph: true,
                showShading: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'exponentialGraphTwoCurvesIntersectionRegion': {
            name: 'Exponential Graph Two Curves Intersection Region',
            category: 'Algebraic Inequalities',
            subcategory: 'Exponential Inequalities',
            description: 'Two exponential curves with inequality region between them shaded',
            type: 'exponential_graph_two_curves_intersection_region',
            defaultOptions: {
                title: 'Exponential — Two Curves Inequality Region',
                showBothCurves: true,
                showRegion: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'differentBasesLogMethodComparison': {
            name: 'Different Bases Log Method Comparison',
            category: 'Algebraic Inequalities',
            subcategory: 'Exponential Inequalities',
            description: 'Comparison of log methods for exponential inequalities with different bases',
            type: 'different_bases_log_method_comparison',
            defaultOptions: {
                title: 'Different Bases — Log Method',
                showMethods: true,
                showComparison: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'exponentialInequalityBaseDirectionSummaryTable': {
            name: 'Exponential Inequality Base Direction Summary Table',
            category: 'Algebraic Inequalities',
            subcategory: 'Exponential Inequalities',
            description: 'Summary table of base value versus inequality direction for exponential inequalities',
            type: 'exponential_inequality_base_direction_summary_table',
            defaultOptions: {
                title: 'Base vs Direction — Summary Table',
                showTable: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'exponentialInequalityRealWorldCompoundInterest': {
            name: 'Exponential Inequality Real World Compound Interest',
            category: 'Algebraic Inequalities',
            subcategory: 'Exponential Inequalities',
            description: 'Compound interest problem as a real-world exponential inequality',
            type: 'exponential_inequality_real_world_compound_interest',
            defaultOptions: {
                title: 'Compound Interest — Exponential Inequality',
                showContext: true,
                showFormula: true,
                showSolution: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== ALGEBRAIC INEQUALITIES — LOGARITHMIC =================
        // ============================================================

        'logInequalityDomainArgumentPositiveDiagram': {
            name: 'Log Inequality Domain Argument Positive Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Logarithmic Inequalities',
            description: 'Diagram showing domain restriction: argument of log must be positive',
            type: 'log_inequality_domain_argument_positive_diagram',
            defaultOptions: {
                title: 'Log Inequality — Argument > 0',
                showDomainRestriction: true,
                showNumberLine: true,
                width: 800,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'logFunctionIncreasingDecreasingComparison': {
            name: 'Log Function Increasing Decreasing Comparison',
            category: 'Algebraic Inequalities',
            subcategory: 'Logarithmic Inequalities',
            description: 'Comparison of increasing log (base > 1) and decreasing log (0 < base < 1)',
            type: 'log_function_increasing_decreasing_comparison',
            defaultOptions: {
                title: 'Log — Increasing vs Decreasing',
                showBothBases: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'baseGreaterOneLogSameDirectionDiagram': {
            name: 'Base Greater One Log Same Direction Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Logarithmic Inequalities',
            description: 'Diagram showing inequality direction preserved when log base > 1',
            type: 'base_greater_one_log_same_direction_diagram',
            defaultOptions: {
                title: 'Log Base > 1 — Same Direction',
                showRule: true,
                showExample: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'baseLessOneLogReversedDirectionDiagram': {
            name: 'Base Less One Log Reversed Direction Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Logarithmic Inequalities',
            description: 'Diagram showing inequality direction reversed when log base is 0 < base < 1',
            type: 'base_less_one_log_reversed_direction_diagram',
            defaultOptions: {
                title: 'Log 0 < Base < 1 — Reversed Direction',
                showRule: true,
                showExample: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'logBaseDirectionSummaryTableVisual': {
            name: 'Log Base Direction Summary Table Visual',
            category: 'Algebraic Inequalities',
            subcategory: 'Logarithmic Inequalities',
            description: 'Visual summary table of log base versus inequality direction rule',
            type: 'log_base_direction_summary_table_visual',
            defaultOptions: {
                title: 'Log Base vs Direction — Summary Table',
                showTable: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'logInequalitySolvingFlowchart': {
            name: 'Log Inequality Solving Flowchart',
            category: 'Algebraic Inequalities',
            subcategory: 'Logarithmic Inequalities',
            description: 'Complete flowchart for solving logarithmic inequalities',
            type: 'log_inequality_solving_flowchart',
            defaultOptions: {
                title: 'Log Inequality — Solving Flowchart',
                showDomainStep: true,
                showDirectionRule: true,
                width: 700,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'domainDAlgebraicIntersectionLogNumberLine': {
            name: 'Domain D Algebraic Intersection Log Number Line',
            category: 'Algebraic Inequalities',
            subcategory: 'Logarithmic Inequalities',
            description: 'Number line showing D ∩ algebraic solution for a log inequality',
            type: 'domain_d_algebraic_intersection_log_number_line',
            defaultOptions: {
                title: 'Log — D ∩ Algebraic Solution',
                showD: true,
                showAlgebraic: true,
                showIntersection: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'logProductRuleDomainNarrowingDiagram': {
            name: 'Log Product Rule Domain Narrowing Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Logarithmic Inequalities',
            description: 'Diagram showing how log product rule can narrow the domain',
            type: 'log_product_rule_domain_narrowing_diagram',
            defaultOptions: {
                title: 'Log Product Rule — Domain Narrowing',
                showProductRule: true,
                showDomainEffect: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'combinedLogStricterDomainExample': {
            name: 'Combined Log Stricter Domain Example',
            category: 'Algebraic Inequalities',
            subcategory: 'Logarithmic Inequalities',
            description: 'Example showing combined logarithms imposing stricter domain restrictions',
            type: 'combined_log_stricter_domain_example',
            defaultOptions: {
                title: 'Combined Logs — Stricter Domain',
                showExample: true,
                showDomain: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'extraneousSolutionLogCheckDiagram': {
            name: 'Extraneous Solution Log Check Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Logarithmic Inequalities',
            description: 'Diagram showing check procedure for extraneous solutions in log inequalities',
            type: 'extraneous_solution_log_check_diagram',
            defaultOptions: {
                title: 'Log Inequality — Extraneous Solution Check',
                showCheckProcedure: true,
                showExample: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'changeOfBaseConversionStepsAnnotated': {
            name: 'Change of Base Conversion Steps Annotated',
            category: 'Algebraic Inequalities',
            subcategory: 'Logarithmic Inequalities',
            description: 'Annotated steps for change of base formula in log inequalities',
            type: 'change_of_base_conversion_steps_annotated',
            defaultOptions: {
                title: 'Change of Base — Annotated Steps',
                showFormula: true,
                showSteps: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'logGraphShadedSolutionOverlay': {
            name: 'Log Graph Shaded Solution Overlay',
            category: 'Algebraic Inequalities',
            subcategory: 'Logarithmic Inequalities',
            description: 'Logarithm graph with inequality solution region shaded',
            type: 'log_graph_shaded_solution_overlay',
            defaultOptions: {
                title: 'Log — Shaded Solution Region',
                showGraph: true,
                showShading: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'logGraphTwoCurvesIntersectionRegion': {
            name: 'Log Graph Two Curves Intersection Region',
            category: 'Algebraic Inequalities',
            subcategory: 'Logarithmic Inequalities',
            description: 'Two log curves with inequality region between them shaded',
            type: 'log_graph_two_curves_intersection_region',
            defaultOptions: {
                title: 'Log — Two Curves Inequality Region',
                showBothCurves: true,
                showRegion: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'logInequalityNoSolutionAlwaysTrueCases': {
            name: 'Log Inequality No Solution Always True Cases',
            category: 'Algebraic Inequalities',
            subcategory: 'Logarithmic Inequalities',
            description: 'Special cases where log inequality has no solution or is always true',
            type: 'log_inequality_no_solution_always_true_cases',
            defaultOptions: {
                title: 'Log Inequality — Special Cases',
                showCases: true,
                showConclusions: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'logInequalityRealWorldDecibelsDiagram': {
            name: 'Log Inequality Real World Decibels Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Logarithmic Inequalities',
            description: 'Decibel level problem as a real-world logarithmic inequality application',
            type: 'log_inequality_real_world_decibels_diagram',
            defaultOptions: {
                title: 'Decibels — Log Inequality Application',
                showContext: true,
                showFormula: true,
                showSolution: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== ALGEBRAIC INEQUALITIES — SHARED/CROSS-TOPIC ==========
        // ============================================================

        'inequalityTypeIdentificationFlowchart': {
            name: 'Inequality Type Identification Flowchart',
            category: 'Algebraic Inequalities',
            subcategory: 'Inequality Solving General',
            description: 'Flowchart for identifying the type of algebraic inequality',
            type: 'inequality_type_identification_flowchart',
            defaultOptions: {
                title: 'Inequality Type — Identification Flowchart',
                showTypes: true,
                showExamples: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'inequalityVsEquationKeyDifferencesTable': {
            name: 'Inequality vs Equation Key Differences Table',
            category: 'Algebraic Inequalities',
            subcategory: 'Inequality Solving General',
            description: 'Table of key differences between inequalities and equations',
            type: 'inequality_vs_equation_key_differences_table',
            defaultOptions: {
                title: 'Inequality vs Equation — Key Differences',
                showTable: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'solutionSetAsIntervalVsSingleValue': {
            name: 'Solution Set as Interval vs Single Value',
            category: 'Algebraic Inequalities',
            subcategory: 'Inequality Solving General',
            description: 'Comparison of interval solution set (inequality) vs single value (equation)',
            type: 'solution_set_as_interval_vs_single_value',
            defaultOptions: {
                title: 'Solution Set — Interval vs Single Value',
                showComparison: true,
                showNumberLines: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'inequalitySymbolFourTypesAnnotated': {
            name: 'Inequality Symbol Four Types Annotated',
            category: 'Algebraic Inequalities',
            subcategory: 'Inequality Solving General',
            description: 'All four inequality symbols annotated with meanings and examples',
            type: 'inequality_symbol_four_types_annotated',
            defaultOptions: {
                title: 'Four Inequality Symbols — Annotated',
                showAnnotations: true,
                showExamples: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'strictNonstrictOpenClosedEndpointGuide': {
            name: 'Strict Nonstrict Open Closed Endpoint Guide',
            category: 'Algebraic Inequalities',
            subcategory: 'Inequality Solving General',
            description: 'Guide linking strict/non-strict inequalities to open/closed endpoint notation',
            type: 'strict_nonstrict_open_closed_endpoint_guide',
            defaultOptions: {
                title: 'Strict vs Non-Strict — Endpoint Guide',
                showGuide: true,
                showExamples: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'intervalNotationCompleteReferenceDiagram': {
            name: 'Interval Notation Complete Reference Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Inequality Solving General',
            description: 'Complete reference diagram for all types of interval notation',
            type: 'interval_notation_complete_reference_diagram',
            defaultOptions: {
                title: 'Interval Notation — Complete Reference',
                showAllTypes: true,
                showExamples: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'inequalityFamilyTreeOverview': {
            name: 'Inequality Family Tree Overview',
            category: 'Algebraic Inequalities',
            subcategory: 'Inequality Solving General',
            description: 'Family tree diagram showing all inequality types and their relationships',
            type: 'inequality_family_tree_overview',
            defaultOptions: {
                title: 'Inequality Family Tree',
                showTree: true,
                showRelationships: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'solveVerifyTestPointUniversalFlowchart': {
            name: 'Solve Verify Test Point Universal Flowchart',
            category: 'Algebraic Inequalities',
            subcategory: 'Inequality Solving General',
            description: 'Universal flowchart: solve then verify using test point method',
            type: 'solve_verify_test_point_universal_flowchart',
            defaultOptions: {
                title: 'Solve → Verify (Test Point) Flowchart',
                showSolveStep: true,
                showVerifyStep: true,
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'contextualRestrictionIntersectDiagram': {
            name: 'Contextual Restriction Intersect Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Inequality Solving General',
            description: 'Diagram showing contextual restrictions intersected with algebraic solution',
            type: 'contextual_restriction_intersect_diagram',
            defaultOptions: {
                title: 'Contextual Restriction ∩ Algebraic Solution',
                showContextual: true,
                showAlgebraic: true,
                showIntersection: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'inequalitySolvingStrategyDecisionTree': {
            name: 'Inequality Solving Strategy Decision Tree',
            category: 'Algebraic Inequalities',
            subcategory: 'Inequality Solving General',
            description: 'Decision tree for selecting the appropriate inequality solving strategy',
            type: 'inequality_solving_strategy_decision_tree',
            defaultOptions: {
                title: 'Inequality Strategy — Decision Tree',
                showDecisionPoints: true,
                showStrategies: true,
                width: 900,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'numberLineShadingConventionsGuide': {
            name: 'Number Line Shading Conventions Guide',
            category: 'Algebraic Inequalities',
            subcategory: 'Inequality Solving General',
            description: 'Reference guide for number line shading conventions',
            type: 'number_line_shading_conventions_guide',
            defaultOptions: {
                title: 'Number Line Shading Conventions',
                showConventions: true,
                showExamples: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'solutionSetBoundedVsUnboundedComparison': {
            name: 'Solution Set Bounded vs Unbounded Comparison',
            category: 'Algebraic Inequalities',
            subcategory: 'Inequality Solving General',
            description: 'Comparison of bounded and unbounded solution sets on number lines',
            type: 'solution_set_bounded_vs_unbounded_comparison',
            defaultOptions: {
                title: 'Bounded vs Unbounded Solution Sets',
                showComparison: true,
                showNumberLines: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== ALGEBRAIC INEQUALITIES — SIGN CHARTS =================
        // ============================================================

        'signChartBlankTemplateAnnotated': {
            name: 'Sign Chart Blank Template Annotated',
            category: 'Algebraic Inequalities',
            subcategory: 'Sign Charts',
            description: 'Annotated blank sign chart template for student use',
            type: 'sign_chart_blank_template_annotated',
            defaultOptions: {
                title: 'Sign Chart — Blank Template',
                showTemplate: true,
                showAnnotationGuide: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'signChartFactorRowConstructionSteps': {
            name: 'Sign Chart Factor Row Construction Steps',
            category: 'Algebraic Inequalities',
            subcategory: 'Sign Charts',
            description: 'Step-by-step process for constructing each factor row in a sign chart',
            type: 'sign_chart_factor_row_construction_steps',
            defaultOptions: {
                title: 'Sign Chart — Factor Row Construction',
                showSteps: true,
                showAnnotations: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'signChartProductSignMultiplicationTable': {
            name: 'Sign Chart Product Sign Multiplication Table',
            category: 'Algebraic Inequalities',
            subcategory: 'Sign Charts',
            description: 'Multiplication table for combining signs in the product row',
            type: 'sign_chart_product_sign_multiplication_table',
            defaultOptions: {
                title: 'Sign Multiplication Table',
                showTable: true,
                showExamples: true,
                width: 700,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'signChartRationalNumeratorDenominatorRows': {
            name: 'Sign Chart Rational Numerator Denominator Rows',
            category: 'Algebraic Inequalities',
            subcategory: 'Sign Charts',
            description: 'Sign chart layout for rational inequalities with separate numerator and denominator rows',
            type: 'sign_chart_rational_numerator_denominator_rows',
            defaultOptions: {
                title: 'Rational Sign Chart — Num/Den Rows',
                showNumerator: true,
                showDenominator: true,
                showQuotient: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'signChartMultiplicityOddEvenRows': {
            name: 'Sign Chart Multiplicity Odd Even Rows',
            category: 'Algebraic Inequalities',
            subcategory: 'Sign Charts',
            description: 'Sign chart rows showing different behaviour for odd and even multiplicity roots',
            type: 'sign_chart_multiplicity_odd_even_rows',
            defaultOptions: {
                title: 'Sign Chart — Multiplicity Rows',
                showOddRows: true,
                showEvenRows: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'signChartRegionTestPointVerification': {
            name: 'Sign Chart Region Test Point Verification',
            category: 'Algebraic Inequalities',
            subcategory: 'Sign Charts',
            description: 'Verification of sign chart regions using test points',
            type: 'sign_chart_region_test_point_verification',
            defaultOptions: {
                title: 'Sign Chart — Test Point Verification',
                showTestPoints: true,
                showVerification: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'signChartRightmostRegionLeadingTerm': {
            name: 'Sign Chart Rightmost Region Leading Term',
            category: 'Algebraic Inequalities',
            subcategory: 'Sign Charts',
            description: 'How the leading term determines the sign in the rightmost region',
            type: 'sign_chart_rightmost_region_leading_term',
            defaultOptions: {
                title: 'Sign Chart — Rightmost Region',
                showLeadingTerm: true,
                showRightmostSign: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'signChartLeftwardPropagationSteps': {
            name: 'Sign Chart Leftward Propagation Steps',
            category: 'Algebraic Inequalities',
            subcategory: 'Sign Charts',
            description: 'Steps for propagating signs leftward through sign chart regions',
            type: 'sign_chart_leftward_propagation_steps',
            defaultOptions: {
                title: 'Sign Chart — Leftward Propagation',
                showSteps: true,
                showMultiplicityRule: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'signChartEndpointInclusionRuleAnnotated': {
            name: 'Sign Chart Endpoint Inclusion Rule Annotated',
            category: 'Algebraic Inequalities',
            subcategory: 'Sign Charts',
            description: 'Annotated rule for including or excluding endpoints in the final sign chart solution',
            type: 'sign_chart_endpoint_inclusion_rule_annotated',
            defaultOptions: {
                title: 'Sign Chart — Endpoint Inclusion Rule',
                showStrictVsNonStrict: true,
                showAnnotations: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'signChartCompleteWorkedExampleCubic': {
            name: 'Sign Chart Complete Worked Example Cubic',
            category: 'Algebraic Inequalities',
            subcategory: 'Sign Charts',
            description: 'Complete worked sign chart example for a cubic polynomial inequality',
            type: 'sign_chart_complete_worked_example_cubic',
            defaultOptions: {
                title: 'Sign Chart — Cubic Worked Example',
                showWorkedExample: true,
                showAllRows: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'signChartCompleteWorkedExampleRational': {
            name: 'Sign Chart Complete Worked Example Rational',
            category: 'Algebraic Inequalities',
            subcategory: 'Sign Charts',
            description: 'Complete worked sign chart example for a rational inequality',
            type: 'sign_chart_complete_worked_example_rational',
            defaultOptions: {
                title: 'Sign Chart — Rational Worked Example',
                showWorkedExample: true,
                showAllRows: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'signChartIrreducibleFactorIgnoredRow': {
            name: 'Sign Chart Irreducible Factor Ignored Row',
            category: 'Algebraic Inequalities',
            subcategory: 'Sign Charts',
            description: 'Sign chart showing how irreducible quadratic factors can be ignored in separate rows',
            type: 'sign_chart_irreducible_factor_ignored_row',
            defaultOptions: {
                title: 'Sign Chart — Irreducible Factor Row',
                showIrreducible: true,
                showIgnoredRow: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== ALGEBRAIC INEQUALITIES — INTERVAL NOTATION ===========
        // ============================================================

        'intervalNotationAllTypesReferenceCard': {
            name: 'Interval Notation All Types Reference Card',
            category: 'Algebraic Inequalities',
            subcategory: 'Interval Notation',
            description: 'Complete reference card showing all types of interval notation',
            type: 'interval_notation_all_types_reference_card',
            defaultOptions: {
                title: 'Interval Notation — All Types',
                showAllTypes: true,
                showNumberLines: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'openIntervalParenthesisNumberLine': {
            name: 'Open Interval Parenthesis Number Line',
            category: 'Algebraic Inequalities',
            subcategory: 'Interval Notation',
            description: 'Open interval (a, b) shown with parentheses and open circles on number line',
            type: 'open_interval_parenthesis_number_line',
            a: 1,
            b: 5,
            defaultOptions: {
                title: 'Open Interval (a, b)',
                showParentheses: true,
                showOpenCircles: true,
                width: 800,
                height: 300,
                backgroundColor: '#ffffff'
            }
        },

        'closedIntervalBracketNumberLine': {
            name: 'Closed Interval Bracket Number Line',
            category: 'Algebraic Inequalities',
            subcategory: 'Interval Notation',
            description: 'Closed interval [a, b] shown with brackets and closed circles on number line',
            type: 'closed_interval_bracket_number_line',
            a: 1,
            b: 5,
            defaultOptions: {
                title: 'Closed Interval [a, b]',
                showBrackets: true,
                showClosedCircles: true,
                width: 800,
                height: 300,
                backgroundColor: '#ffffff'
            }
        },

        'halfOpenIntervalTwoVariantsDiagram': {
            name: 'Half Open Interval Two Variants Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Interval Notation',
            description: 'Both variants of half-open intervals: [a, b) and (a, b]',
            type: 'half_open_interval_two_variants_diagram',
            a: 1,
            b: 5,
            defaultOptions: {
                title: 'Half-Open Intervals — Both Variants',
                showBothVariants: true,
                showCircles: true,
                width: 800,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'unboundedIntervalInfinityNotation': {
            name: 'Unbounded Interval Infinity Notation',
            category: 'Algebraic Inequalities',
            subcategory: 'Interval Notation',
            description: 'Unbounded intervals using infinity notation: (a, ∞) and (−∞, b)',
            type: 'unbounded_interval_infinity_notation',
            defaultOptions: {
                title: 'Unbounded Intervals — ∞ Notation',
                showBothDirections: true,
                showArrows: true,
                width: 800,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'unionTwoIntervalsNotationDiagram': {
            name: 'Union Two Intervals Notation Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Interval Notation',
            description: 'Union of two intervals shown in notation with number line',
            type: 'union_two_intervals_notation_diagram',
            defaultOptions: {
                title: 'Union of Two Intervals — Notation',
                showUnionSymbol: true,
                showNumberLine: true,
                width: 800,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'emptySetNotationDiagram': {
            name: 'Empty Set Notation Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Interval Notation',
            description: 'Empty set notation ∅ with number line showing no solution',
            type: 'empty_set_notation_diagram',
            defaultOptions: {
                title: 'Empty Set ∅ — No Solution',
                showNotation: true,
                showNumberLine: true,
                width: 800,
                height: 300,
                backgroundColor: '#ffffff'
            }
        },

        'allRealsIntervalNotationDiagram': {
            name: 'All Reals Interval Notation Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Interval Notation',
            description: 'All real numbers shown as (−∞, ∞) in interval notation',
            type: 'all_reals_interval_notation_diagram',
            defaultOptions: {
                title: 'All Reals — (−∞, ∞)',
                showNotation: true,
                showNumberLine: true,
                width: 800,
                height: 300,
                backgroundColor: '#ffffff'
            }
        },

        'intervalToInequalityConversionTable': {
            name: 'Interval to Inequality Conversion Table',
            category: 'Algebraic Inequalities',
            subcategory: 'Interval Notation',
            description: 'Conversion table from interval notation to inequality notation',
            type: 'interval_to_inequality_conversion_table',
            defaultOptions: {
                title: 'Interval → Inequality Conversion',
                showTable: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'inequalityToIntervalConversionTable': {
            name: 'Inequality to Interval Conversion Table',
            category: 'Algebraic Inequalities',
            subcategory: 'Interval Notation',
            description: 'Conversion table from inequality notation to interval notation',
            type: 'inequality_to_interval_conversion_table',
            defaultOptions: {
                title: 'Inequality → Interval Conversion',
                showTable: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'nestedIntervalComparisonDiagram': {
            name: 'Nested Interval Comparison Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Interval Notation',
            description: 'Comparison of nested intervals on the same number line',
            type: 'nested_interval_comparison_diagram',
            defaultOptions: {
                title: 'Nested Intervals — Comparison',
                showNestedIntervals: true,
                showNumberLine: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'intervalNotationSetBuilderEquivalence': {
            name: 'Interval Notation Set Builder Equivalence',
            category: 'Algebraic Inequalities',
            subcategory: 'Interval Notation',
            description: 'Equivalence between interval notation and set-builder notation',
            type: 'interval_notation_set_builder_equivalence',
            defaultOptions: {
                title: 'Interval ↔ Set-Builder Equivalence',
                showEquivalence: true,
                showExamples: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== ALGEBRAIC INEQUALITIES — NUMBER LINE =================
        // ============================================================

        'numberLineOpenCircleStrictInequality': {
            name: 'Number Line Open Circle Strict Inequality',
            category: 'Algebraic Inequalities',
            subcategory: 'Number Line Inequalities',
            description: 'Number line with open circle showing a strict inequality endpoint',
            type: 'number_line_open_circle_strict_inequality',
            point: 3,
            defaultOptions: {
                title: 'Open Circle — Strict Inequality',
                showOpenCircle: true,
                showLabel: true,
                width: 800,
                height: 300,
                backgroundColor: '#ffffff'
            }
        },

        'numberLineClosedCircleNonstrictInequality': {
            name: 'Number Line Closed Circle Nonstrict Inequality',
            category: 'Algebraic Inequalities',
            subcategory: 'Number Line Inequalities',
            description: 'Number line with closed circle showing a non-strict inequality endpoint',
            type: 'number_line_closed_circle_nonstrict_inequality',
            point: 3,
            defaultOptions: {
                title: 'Closed Circle — Non-Strict Inequality',
                showClosedCircle: true,
                showLabel: true,
                width: 800,
                height: 300,
                backgroundColor: '#ffffff'
            }
        },

        'numberLineSingleRayRight': {
            name: 'Number Line Single Ray Right',
            category: 'Algebraic Inequalities',
            subcategory: 'Number Line Inequalities',
            description: 'Number line with single ray extending rightward from an endpoint',
            type: 'number_line_single_ray_right',
            point: 2,
            defaultOptions: {
                title: 'Single Ray — Rightward',
                showRay: true,
                showArrow: true,
                width: 800,
                height: 300,
                backgroundColor: '#ffffff'
            }
        },

        'numberLineSingleRayLeft': {
            name: 'Number Line Single Ray Left',
            category: 'Algebraic Inequalities',
            subcategory: 'Number Line Inequalities',
            description: 'Number line with single ray extending leftward from an endpoint',
            type: 'number_line_single_ray_left',
            point: 4,
            defaultOptions: {
                title: 'Single Ray — Leftward',
                showRay: true,
                showArrow: true,
                width: 800,
                height: 300,
                backgroundColor: '#ffffff'
            }
        },

        'numberLineBoundedIntervalAnnotated': {
            name: 'Number Line Bounded Interval Annotated',
            category: 'Algebraic Inequalities',
            subcategory: 'Number Line Inequalities',
            description: 'Annotated bounded interval on a number line',
            type: 'number_line_bounded_interval_annotated',
            lower: 1,
            upper: 6,
            defaultOptions: {
                title: 'Bounded Interval — Annotated',
                showAnnotations: true,
                showEndpoints: true,
                width: 800,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'numberLineTwoSeparateRaysUnion': {
            name: 'Number Line Two Separate Rays Union',
            category: 'Algebraic Inequalities',
            subcategory: 'Number Line Inequalities',
            description: 'Number line showing two separate rays as a union',
            type: 'number_line_two_separate_rays_union',
            point1: 1,
            point2: 5,
            defaultOptions: {
                title: 'Two Rays — Union',
                showBothRays: true,
                showUnionNotation: true,
                width: 800,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'numberLineAndIntersectionTwoColours': {
            name: 'Number Line AND Intersection Two Colours',
            category: 'Algebraic Inequalities',
            subcategory: 'Number Line Inequalities',
            description: 'Two-colour number line showing AND intersection of two inequalities',
            type: 'number_line_and_intersection_two_colours',
            defaultOptions: {
                title: 'AND Intersection — Two Colours',
                showTwoColours: true,
                showIntersection: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'numberLineOrUnionTwoColours': {
            name: 'Number Line OR Union Two Colours',
            category: 'Algebraic Inequalities',
            subcategory: 'Number Line Inequalities',
            description: 'Two-colour number line showing OR union of two inequalities',
            type: 'number_line_or_union_two_colours',
            defaultOptions: {
                title: 'OR Union — Two Colours',
                showTwoColours: true,
                showUnion: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'numberLineEmptySolutionSetDiagram': {
            name: 'Number Line Empty Solution Set Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Number Line Inequalities',
            description: 'Number line showing empty solution set',
            type: 'number_line_empty_solution_set_diagram',
            defaultOptions: {
                title: 'Empty Solution Set',
                showEmptySet: true,
                showNotation: true,
                width: 800,
                height: 300,
                backgroundColor: '#ffffff'
            }
        },

        'numberLineAllRealsSolutionDiagram': {
            name: 'Number Line All Reals Solution Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Number Line Inequalities',
            description: 'Number line showing all real numbers as the solution set',
            type: 'number_line_all_reals_solution_diagram',
            defaultOptions: {
                title: 'All Reals — Solution Set',
                showFullLine: true,
                showNotation: true,
                width: 800,
                height: 300,
                backgroundColor: '#ffffff'
            }
        },

        'numberLineSinglePointSolution': {
            name: 'Number Line Single Point Solution',
            category: 'Algebraic Inequalities',
            subcategory: 'Number Line Inequalities',
            description: 'Number line with a single solution point marked',
            type: 'number_line_single_point_solution',
            point: 3,
            defaultOptions: {
                title: 'Single Point Solution',
                showPoint: true,
                showLabel: true,
                width: 800,
                height: 300,
                backgroundColor: '#ffffff'
            }
        },

        'numberLineSolutionLabelledWithIntervalNotation': {
            name: 'Number Line Solution Labelled with Interval Notation',
            category: 'Algebraic Inequalities',
            subcategory: 'Number Line Inequalities',
            description: 'Number line solution with interval notation label',
            type: 'number_line_solution_labelled_with_interval_notation',
            defaultOptions: {
                title: 'Solution — Number Line with Interval Notation',
                showNumberLine: true,
                showIntervalNotation: true,
                width: 800,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== ALGEBRAIC INEQUALITIES — INEQUALITY GRAPHS ===========
        // ============================================================

        'linearInequalityGraphShadedHalfPlane': {
            name: 'Linear Inequality Graph Shaded Half Plane',
            category: 'Algebraic Inequalities',
            subcategory: 'Inequality Graphs',
            description: 'Linear inequality graph with shaded half-plane solution region',
            type: 'linear_inequality_graph_shaded_half_plane',
            gradient: 1,
            yIntercept: -2,
            defaultOptions: {
                title: 'Linear Inequality — Shaded Half Plane',
                showLine: true,
                showShading: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'parabolaGraphAboveBelowXAxisShaded': {
            name: 'Parabola Graph Above Below X-Axis Shaded',
            category: 'Algebraic Inequalities',
            subcategory: 'Inequality Graphs',
            description: 'Parabola graph with region above or below x-axis shaded',
            type: 'parabola_graph_above_below_x_axis_shaded',
            defaultOptions: {
                title: 'Parabola — Above/Below X-Axis Shaded',
                showParabola: true,
                showShading: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rationalFunctionGraphSolutionRegionsShaded': {
            name: 'Rational Function Graph Solution Regions Shaded',
            category: 'Algebraic Inequalities',
            subcategory: 'Inequality Graphs',
            description: 'Rational function graph with inequality solution regions shaded',
            type: 'rational_function_graph_solution_regions_shaded',
            defaultOptions: {
                title: 'Rational Function — Solution Regions Shaded',
                showGraph: true,
                showShading: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'exponentialGraphSolutionRegionShaded': {
            name: 'Exponential Graph Solution Region Shaded',
            category: 'Algebraic Inequalities',
            subcategory: 'Inequality Graphs',
            description: 'Exponential graph with solution region shaded',
            type: 'exponential_graph_solution_region_shaded',
            defaultOptions: {
                title: 'Exponential — Solution Region Shaded',
                showGraph: true,
                showShading: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'logGraphSolutionRegionShaded': {
            name: 'Log Graph Solution Region Shaded',
            category: 'Algebraic Inequalities',
            subcategory: 'Inequality Graphs',
            description: 'Logarithm graph with solution region shaded',
            type: 'log_graph_solution_region_shaded',
            defaultOptions: {
                title: 'Log — Solution Region Shaded',
                showGraph: true,
                showShading: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'radicalFunctionGraphSolutionRegionShaded': {
            name: 'Radical Function Graph Solution Region Shaded',
            category: 'Algebraic Inequalities',
            subcategory: 'Inequality Graphs',
            description: 'Radical function graph with solution region shaded',
            type: 'radical_function_graph_solution_region_shaded',
            defaultOptions: {
                title: 'Radical — Solution Region Shaded',
                showGraph: true,
                showShading: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'absoluteValueGraphSolutionRegionShaded': {
            name: 'Absolute Value Graph Solution Region Shaded',
            category: 'Algebraic Inequalities',
            subcategory: 'Inequality Graphs',
            description: 'Absolute value graph with solution region shaded',
            type: 'absolute_value_graph_solution_region_shaded',
            defaultOptions: {
                title: 'Absolute Value — Solution Region Shaded',
                showGraph: true,
                showShading: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'twoFunctionGraphsInequalityRegionBetween': {
            name: 'Two Function Graphs Inequality Region Between',
            category: 'Algebraic Inequalities',
            subcategory: 'Inequality Graphs',
            description: 'Two function graphs with inequality region between them shaded',
            type: 'two_function_graphs_inequality_region_between',
            defaultOptions: {
                title: 'Two Functions — Region Between Shaded',
                showBothGraphs: true,
                showRegion: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'graphSolutionRegionTransferToNumberLine': {
            name: 'Graph Solution Region Transfer to Number Line',
            category: 'Algebraic Inequalities',
            subcategory: 'Inequality Graphs',
            description: 'Transfer of graphical solution region to a number line',
            type: 'graph_solution_region_transfer_to_number_line',
            defaultOptions: {
                title: 'Graph Region → Number Line',
                showGraph: true,
                showTransfer: true,
                showNumberLine: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'graphAboveBelowXAxisInequalityEquivalence': {
            name: 'Graph Above Below X-Axis Inequality Equivalence',
            category: 'Algebraic Inequalities',
            subcategory: 'Inequality Graphs',
            description: 'Equivalence between graph being above/below x-axis and the inequality f(x) > 0 or f(x) < 0',
            type: 'graph_above_below_x_axis_inequality_equivalence',
            defaultOptions: {
                title: 'Graph Above/Below ↔ Inequality',
                showEquivalence: true,
                showGraph: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'systemTwoInequalitiesIntersectionRegion': {
            name: 'System Two Inequalities Intersection Region',
            category: 'Algebraic Inequalities',
            subcategory: 'Inequality Graphs',
            description: 'System of two inequalities with intersection (feasible) region shown',
            type: 'system_two_inequalities_intersection_region',
            defaultOptions: {
                title: 'System of Two Inequalities — Intersection',
                showBothRegions: true,
                showIntersection: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'feasibleRegionTwoLinearInequalitiesPreview': {
            name: 'Feasible Region Two Linear Inequalities Preview',
            category: 'Algebraic Inequalities',
            subcategory: 'Inequality Graphs',
            description: 'Preview of feasible region formed by two linear inequalities',
            type: 'feasible_region_two_linear_inequalities_preview',
            defaultOptions: {
                title: 'Feasible Region — Two Linear Inequalities',
                showFeasibleRegion: true,
                showVertices: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== ALGEBRAIC INEQUALITIES — DOMAIN RESTRICTIONS =========
        // ============================================================

        'domainRestrictionEvenRootRadicandDiagram': {
            name: 'Domain Restriction Even Root Radicand Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Domain Restrictions Inequalities',
            description: 'Domain restriction for even-index radicals: radicand ≥ 0',
            type: 'domain_restriction_even_root_radicand_diagram',
            defaultOptions: {
                title: 'Even Root — Radicand ≥ 0',
                showRestriction: true,
                showNumberLine: true,
                width: 800,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'domainRestrictionLogArgumentDiagram': {
            name: 'Domain Restriction Log Argument Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Domain Restrictions Inequalities',
            description: 'Domain restriction for logarithms: argument > 0',
            type: 'domain_restriction_log_argument_diagram',
            defaultOptions: {
                title: 'Log — Argument > 0',
                showRestriction: true,
                showNumberLine: true,
                width: 800,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'domainRestrictionRationalDenominatorDiagram': {
            name: 'Domain Restriction Rational Denominator Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Domain Restrictions Inequalities',
            description: 'Domain restriction for rational expressions: denominator ≠ 0',
            type: 'domain_restriction_rational_denominator_diagram',
            defaultOptions: {
                title: 'Rational — Denominator ≠ 0',
                showRestriction: true,
                showNumberLine: true,
                width: 800,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'domainRestrictionIntersectionSolutionDiagram': {
            name: 'Domain Restriction Intersection Solution Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Domain Restrictions Inequalities',
            description: 'Final solution as intersection of domain restriction and algebraic solution',
            type: 'domain_restriction_intersection_solution_diagram',
            defaultOptions: {
                title: 'Domain ∩ Algebraic = Final Solution',
                showDomain: true,
                showAlgebraic: true,
                showIntersection: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'domainTypesComparisonThreeFunctionTypes': {
            name: 'Domain Types Comparison Three Function Types',
            category: 'Algebraic Inequalities',
            subcategory: 'Domain Restrictions Inequalities',
            description: 'Comparison of domain restrictions for radical, log, and rational functions',
            type: 'domain_types_comparison_three_function_types',
            defaultOptions: {
                title: 'Domain Types — Three Functions',
                showThreeTypes: true,
                showComparison: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'domainRestrictionNumberLineAnnotated': {
            name: 'Domain Restriction Number Line Annotated',
            category: 'Algebraic Inequalities',
            subcategory: 'Domain Restrictions Inequalities',
            description: 'Annotated number line showing domain restriction for a specific function',
            type: 'domain_restriction_number_line_annotated',
            defaultOptions: {
                title: 'Domain Restriction — Number Line',
                showAnnotations: true,
                showRestriction: true,
                width: 800,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'domainAlgebraicSolutionIntersectionSteps': {
            name: 'Domain Algebraic Solution Intersection Steps',
            category: 'Algebraic Inequalities',
            subcategory: 'Domain Restrictions Inequalities',
            description: 'Step diagram for intersecting domain and algebraic solution on a number line',
            type: 'domain_algebraic_solution_intersection_steps',
            defaultOptions: {
                title: 'Domain ∩ Algebraic — Intersection Steps',
                showSteps: true,
                showNumberLines: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'domainRestrictionNoImpactVsRestrictsComparison': {
            name: 'Domain Restriction No Impact vs Restricts Comparison',
            category: 'Algebraic Inequalities',
            subcategory: 'Domain Restrictions Inequalities',
            description: 'Comparison of cases where domain restriction has no impact vs changes the solution',
            type: 'domain_restriction_no_impact_vs_restricts_comparison',
            defaultOptions: {
                title: 'Domain Restriction — Impact Comparison',
                showBothCases: true,
                showComparison: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'domainVsExtraneousSolutionDistinction': {
            name: 'Domain vs Extraneous Solution Distinction',
            category: 'Algebraic Inequalities',
            subcategory: 'Domain Restrictions Inequalities',
            description: 'Clear distinction between domain exclusions and extraneous solutions',
            type: 'domain_vs_extraneous_solution_distinction',
            defaultOptions: {
                title: 'Domain Exclusion vs Extraneous Solution',
                showDistinction: true,
                showExamples: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'combinedDomainMultipleRadicalsDiagram': {
            name: 'Combined Domain Multiple Radicals Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Domain Restrictions Inequalities',
            description: 'Combined domain restriction from multiple radical expressions',
            type: 'combined_domain_multiple_radicals_diagram',
            defaultOptions: {
                title: 'Combined Domain — Multiple Radicals',
                showEachRestriction: true,
                showCombined: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'combinedDomainMultipleLogsDiagram': {
            name: 'Combined Domain Multiple Logs Diagram',
            category: 'Algebraic Inequalities',
            subcategory: 'Domain Restrictions Inequalities',
            description: 'Combined domain restriction from multiple logarithmic expressions',
            type: 'combined_domain_multiple_logs_diagram',
            defaultOptions: {
                title: 'Combined Domain — Multiple Logs',
                showEachRestriction: true,
                showCombined: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'domainCheckFinalStepFlowchart': {
            name: 'Domain Check Final Step Flowchart',
            category: 'Algebraic Inequalities',
            subcategory: 'Domain Restrictions Inequalities',
            description: 'Flowchart showing domain check as the final step in solving inequalities',
            type: 'domain_check_final_step_flowchart',
            defaultOptions: {
                title: 'Domain Check — Final Step Flowchart',
                showFlowchart: true,
                showFinalStep: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== FACTORIZATION — COMMON FACTOR ========================
        // ============================================================

        'gcfFactorTreeNumbers': {
            name: 'GCF Factor Tree Numbers',
            category: 'Factorization',
            subcategory: 'Common Factor',
            description: 'Prime factor tree for two numbers with shared branches highlighted',
            type: 'gcf_factor_tree_numbers',
            num1: 12,
            num2: 18,
            defaultOptions: {
                title: 'GCF — Factor Tree',
                showSharedBranches: true,
                showGCF: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'gcfVennDiagramPrimes': {
            name: 'GCF Venn Diagram Primes',
            category: 'Factorization',
            subcategory: 'Common Factor',
            description: 'Venn diagram with shared prime factors in overlap; product of overlap = GCF',
            type: 'gcf_venn_diagram_primes',
            num1: 12,
            num2: 18,
            defaultOptions: {
                title: 'GCF — Venn Diagram (Primes)',
                showVenn: true,
                showGCF: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'gcfAreaModelExtraction': {
            name: 'GCF Area Model Extraction',
            category: 'Factorization',
            subcategory: 'Common Factor',
            description: 'Rectangle showing GCF as width; bracket contents as length',
            type: 'gcf_area_model_extraction',
            defaultOptions: {
                title: 'GCF — Area Model',
                showRectangle: true,
                showLabels: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'gcfVariableExponentGrid': {
            name: 'GCF Variable Exponent Grid',
            category: 'Factorization',
            subcategory: 'Common Factor',
            description: 'Grid showing each term\'s variable powers; lowest power in each column = GCF',
            type: 'gcf_variable_exponent_grid',
            defaultOptions: {
                title: 'GCF — Variable Exponent Grid',
                showGrid: true,
                showLowest: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'gcfReverseDistributiveArrow': {
            name: 'GCF Reverse Distributive Arrow',
            category: 'Factorization',
            subcategory: 'Common Factor',
            description: 'Arrow diagram: ab + ac → a(b + c) with each step labelled',
            type: 'gcf_reverse_distributive_arrow',
            defaultOptions: {
                title: 'GCF — Reverse Distributive Law',
                showArrows: true,
                showSteps: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'gcfPolynomialDivisionCheck': {
            name: 'GCF Polynomial Division Check',
            category: 'Factorization',
            subcategory: 'Common Factor',
            description: 'Side-by-side: original terms divided by GCF to show bracket contents',
            type: 'gcf_polynomial_division_check',
            defaultOptions: {
                title: 'GCF — Division Check',
                showSideBySide: true,
                showAnnotations: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'gcfNegativeExtractionDiagram': {
            name: 'GCF Negative Extraction Diagram',
            category: 'Factorization',
            subcategory: 'Common Factor',
            description: 'Sign-change illustration when factoring out a negative GCF',
            type: 'gcf_negative_extraction_diagram',
            defaultOptions: {
                title: 'GCF — Negative Extraction',
                showSignChange: true,
                showExample: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'gcfCommonBinomialBox': {
            name: 'GCF Common Binomial Box',
            category: 'Factorization',
            subcategory: 'Common Factor',
            description: 'Box diagram showing a shared binomial factor across two grouped terms',
            type: 'gcf_common_binomial_box',
            defaultOptions: {
                title: 'GCF — Common Binomial Factor',
                showBox: true,
                showSharedFactor: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== FACTORIZATION — GROUPING =============================
        // ============================================================

        'groupingFourTermBracketPairs': {
            name: 'Grouping Four Term Bracket Pairs',
            category: 'Factorization',
            subcategory: 'Grouping',
            description: 'Four-term polynomial split into two coloured pairs with GCF arrows above each',
            type: 'grouping_four_term_bracket_pairs',
            defaultOptions: {
                title: 'Factoring by Grouping — Four Terms',
                showPairs: true,
                showGCFArrows: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'groupingCommonBinomialReveal': {
            name: 'Grouping Common Binomial Reveal',
            category: 'Factorization',
            subcategory: 'Grouping',
            description: 'Step-by-step: pair → extract GCF → common binomial highlighted',
            type: 'grouping_common_binomial_reveal',
            defaultOptions: {
                title: 'Grouping — Common Binomial Reveal',
                showSteps: true,
                showHighlight: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'grouping2X2BoxMethod': {
            name: 'Grouping 2×2 Box Method',
            category: 'Factorization',
            subcategory: 'Grouping',
            description: '2×2 grid with four terms placed in cells; rows and columns labelled with factors',
            type: 'grouping_2x2_box_method',
            defaultOptions: {
                title: 'Grouping — 2×2 Box Method',
                showGrid: true,
                showFactors: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'groupingRearrangementExample': {
            name: 'Grouping Rearrangement Example',
            category: 'Factorization',
            subcategory: 'Grouping',
            description: 'Two attempts at grouping side by side: failed pairing vs successful rearrangement',
            type: 'grouping_rearrangement_example',
            defaultOptions: {
                title: 'Grouping — Rearrangement',
                showBothAttempts: true,
                showSuccess: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'groupingSignHandlingNegative': {
            name: 'Grouping Sign Handling Negative',
            category: 'Factorization',
            subcategory: 'Grouping',
            description: 'Diagram showing how factoring −1 from a group creates matching binomials',
            type: 'grouping_sign_handling_negative',
            defaultOptions: {
                title: 'Grouping — Sign Handling (Negative)',
                showNegativeExtraction: true,
                showMatchingBinomial: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'groupingAcMethodBridge': {
            name: 'Grouping AC Method Bridge',
            category: 'Factorization',
            subcategory: 'Grouping',
            description: 'Flow diagram connecting AC product → split middle term → four terms → grouping',
            type: 'grouping_ac_method_bridge',
            defaultOptions: {
                title: 'Grouping — AC Method Bridge',
                showFlow: true,
                showSteps: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'groupingCubicTreeStructure': {
            name: 'Grouping Cubic Tree Structure',
            category: 'Factorization',
            subcategory: 'Grouping',
            description: 'Factor tree for a cubic polynomial factored via grouping',
            type: 'grouping_cubic_tree_structure',
            defaultOptions: {
                title: 'Cubic — Factor Tree via Grouping',
                showTree: true,
                showSteps: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'groupingVerificationExpand': {
            name: 'Grouping Verification Expand',
            category: 'Factorization',
            subcategory: 'Grouping',
            description: 'Expansion arrows confirming factored form equals original four-term polynomial',
            type: 'grouping_verification_expand',
            defaultOptions: {
                title: 'Grouping — Verification by Expansion',
                showExpansion: true,
                showArrows: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== FACTORIZATION — DIFFERENCE OF SQUARES ================
        // ============================================================

        'dosGeometricProofLShape': {
            name: 'DOS Geometric Proof L-Shape',
            category: 'Factorization',
            subcategory: 'Difference of Squares',
            description: 'Large a×a square with b×b corner removed; L-shape rearranged into (a+b)×(a−b) rectangle',
            type: 'dos_geometric_proof_lshape',
            a: 5,
            b: 2,
            defaultOptions: {
                title: 'Difference of Squares — Geometric Proof',
                showLShape: true,
                showRearrangement: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'dosConjugatePairCancellation': {
            name: 'DOS Conjugate Pair Cancellation',
            category: 'Factorization',
            subcategory: 'Difference of Squares',
            description: 'FOIL diagram showing +ab and −ab cancelling to leave a²−b²',
            type: 'dos_conjugate_pair_cancellation',
            defaultOptions: {
                title: 'Conjugate Pair — Cancellation',
                showFOIL: true,
                showCancellation: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'dosNumberLineSymmetry': {
            name: 'DOS Number Line Symmetry',
            category: 'Factorization',
            subcategory: 'Difference of Squares',
            description: 'Number line showing a+b and a−b equidistant around midpoint a',
            type: 'dos_number_line_symmetry',
            a: 5,
            b: 2,
            defaultOptions: {
                title: 'Difference of Squares — Number Line Symmetry',
                showSymmetry: true,
                showMidpoint: true,
                width: 800,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'dosPerfectSquareChecker': {
            name: 'DOS Perfect Square Checker',
            category: 'Factorization',
            subcategory: 'Difference of Squares',
            description: 'Checklist visual: two terms? subtraction? each a perfect square? → factor',
            type: 'dos_perfect_square_checker',
            defaultOptions: {
                title: 'Difference of Squares — Checklist',
                showChecklist: true,
                width: 700,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'dosRepeatedApplicationTree': {
            name: 'DOS Repeated Application Tree',
            category: 'Factorization',
            subcategory: 'Difference of Squares',
            description: 'Factor tree: x⁴−16 → (x²+4)(x²−4) → (x²+4)(x+2)(x−2)',
            type: 'dos_repeated_application_tree',
            defaultOptions: {
                title: 'Repeated Difference of Squares — Tree',
                showTree: true,
                showSteps: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'dosSumOfSquaresIrreducible': {
            name: 'DOS Sum of Squares Irreducible',
            category: 'Factorization',
            subcategory: 'Difference of Squares',
            description: 'Side-by-side: a²−b² (factorable, green) vs a²+b² (irreducible, red cross)',
            type: 'dos_sum_of_squares_irreducible',
            defaultOptions: {
                title: 'Difference vs Sum of Squares',
                showSideBySide: true,
                showIrreducible: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'dosCompoundBaseExample': {
            name: 'DOS Compound Base Example',
            category: 'Factorization',
            subcategory: 'Difference of Squares',
            description: 'Diagram: (x+1)²−4 shown as difference with compound a=(x+1) labelled',
            type: 'dos_compound_base_example',
            defaultOptions: {
                title: 'Compound Base — Difference of Squares',
                showCompoundBase: true,
                showFactors: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'dosGcfThenSquaresFlow': {
            name: 'DOS GCF Then Squares Flow',
            category: 'Factorization',
            subcategory: 'Difference of Squares',
            description: 'Flowchart: extract GCF → check remaining binomial → apply difference of squares',
            type: 'dos_gcf_then_squares_flow',
            defaultOptions: {
                title: 'GCF → Difference of Squares Flow',
                showFlow: true,
                showSteps: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'dosAlgebraTileArrangement': {
            name: 'DOS Algebra Tile Arrangement',
            category: 'Factorization',
            subcategory: 'Difference of Squares',
            description: 'Algebra tile L-shape for x²−9 rearranged into (x+3)(x−3) rectangle',
            type: 'dos_algebra_tile_arrangement',
            defaultOptions: {
                title: 'Difference of Squares — Algebra Tiles',
                showLShape: true,
                showRectangle: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'dosRationalisingConjugate': {
            name: 'DOS Rationalising Conjugate',
            category: 'Factorization',
            subcategory: 'Difference of Squares',
            description: 'Fraction diagram: 1/(a+√b) × (a−√b)/(a−√b) → rational denominator',
            type: 'dos_rationalising_conjugate',
            defaultOptions: {
                title: 'Rationalising Denominator — Conjugate',
                showFractionDiagram: true,
                showResult: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== FACTORIZATION — PERFECT SQUARE TRINOMIAL =============
        // ============================================================

        'pstSquareAreaDiagram': {
            name: 'PST Square Area Diagram',
            category: 'Factorization',
            subcategory: 'Perfect Square Trinomial',
            description: '(a+b)×(a+b) square partitioned into a², ab, ab, b² with labels',
            type: 'pst_square_area_diagram',
            a: 3,
            b: 2,
            defaultOptions: {
                title: 'Perfect Square — Area Diagram',
                showPartitions: true,
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'pstMiddleTermTestVisual': {
            name: 'PST Middle Term Test Visual',
            category: 'Factorization',
            subcategory: 'Perfect Square Trinomial',
            description: 'Step-by-step checklist: √first → √last → 2×product → compare to middle',
            type: 'pst_middle_term_test_visual',
            defaultOptions: {
                title: 'Perfect Square Test — Middle Term',
                showChecklist: true,
                showSteps: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'pstPositiveVsNegativeForm': {
            name: 'PST Positive vs Negative Form',
            category: 'Factorization',
            subcategory: 'Perfect Square Trinomial',
            description: 'Side-by-side: (a+b)² vs (a−b)² with sign differences highlighted in colour',
            type: 'pst_positive_vs_negative_form',
            defaultOptions: {
                title: '(a+b)² vs (a−b)²',
                showSideBySide: true,
                showSignDifferences: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'pstFreshmanDreamError': {
            name: 'PST Freshman Dream Error',
            category: 'Factorization',
            subcategory: 'Perfect Square Trinomial',
            description: 'Common error diagram: (a+b)² ≠ a²+b² with correct expansion shown alongside',
            type: 'pst_freshman_dream_error',
            defaultOptions: {
                title: '(a+b)² ≠ a²+b² — Common Error',
                showError: true,
                showCorrection: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'pstCompletingSquareGeometry': {
            name: 'PST Completing Square Geometry',
            category: 'Factorization',
            subcategory: 'Perfect Square Trinomial',
            description: 'Geometric completing the square: x²+bx as L-shape; (b/2)² corner added to form full square',
            type: 'pst_completing_square_geometry',
            b: 6,
            defaultOptions: {
                title: 'Completing the Square — Geometry',
                showLShape: true,
                showAddedCorner: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

