
geometricMeasurements: {
    title: "Geometric Measurements: Perimeter, Area, Surface Area, and Volume",

    databaseLinks: {
        misconceptions: [
            'perimeterAndArea',
            'circlesMeasurements',
            'surfaceArea',
            'volume',
            'unitsAndConversion'
        ],
        contextualScenarios: [
            'perimeterAndArea',
            'circlesMeasurements',
            'surfaceArea',
            'volume'
        ],
        studyTips: [
            'diagrams',
            'comparisonTables',
            'graphingPractice',
            'flashcards',
            'mnemonics',
            'practiceRoutines',
            'workedExampleAnalysis'
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
            'perimeterAndArea',
            'circlesMeasurements',
            'surfaceArea',
            'volume'
        ]
    },

    conceptLinks: {
        "Perimeter is the total distance around the boundary of a two-dimensional shape": {
            misconceptions:      ['perimeterAndArea'],
            scenarios:           ['perimeterAndArea'],
            studyTips:           ['diagrams', 'flashcards'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['perimeterAndArea']
        },
        "Area measures the amount of two-dimensional space enclosed within a boundary": {
            misconceptions:      ['perimeterAndArea'],
            scenarios:           ['perimeterAndArea'],
            studyTips:           ['diagrams', 'comparisonTables'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['perimeterAndArea']
        },
        "Circles have unique measurement properties governed by the constant π": {
            misconceptions:      ['circlesMeasurements'],
            scenarios:           ['circlesMeasurements'],
            studyTips:           ['flashcards', 'mnemonics'],
            assessmentRubrics:   ['understand', 'apply'],
            assessmentQuestions: ['circlesMeasurements']
        },
        "Surface area is the total area of all faces enclosing a three-dimensional solid": {
            misconceptions:      ['surfaceArea'],
            scenarios:           ['surfaceArea'],
            studyTips:           ['diagrams', 'comparisonTables', 'workedExampleAnalysis'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate'],
            assessmentQuestions: ['surfaceArea']
        },
        "Volume measures the amount of three-dimensional space a solid occupies": {
            misconceptions:      ['volume'],
            scenarios:           ['volume'],
            studyTips:           ['diagrams', 'comparisonTables', 'practiceRoutines'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions: ['volume']
        },
        "Units must be consistent within a calculation and correctly converted between systems": {
            misconceptions:      ['unitsAndConversion'],
            scenarios:           ['perimeterAndArea', 'volume'],
            studyTips:           ['comparisonTables', 'mnemonics', 'flashcards'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate'],
            assessmentQuestions: ['perimeterAndArea', 'volume']
        }
    },

    topicIntroduction: {
        overview: "Geometric measurement is the branch of mathematics that assigns numerical values to the size of shapes and solids. Perimeter quantifies boundary length, area quantifies enclosed flat space, surface area quantifies the outer skin of a solid, and volume quantifies the space a solid occupies. Together, these four measurements form the quantitative language of shape — used everywhere from architecture and engineering to medicine and manufacturing.",
        whyItMatters: "Every physical object has dimensions that must be measured and calculated. A builder needs area to order flooring and perimeter to install skirting boards. An engineer needs surface area to calculate heat loss and volume to determine material weight. A pharmacist uses volume to measure doses. A packaging designer minimises surface area for a given volume to reduce material cost. Mastery of geometric measurement is indispensable in every technical and practical field.",
        bigPicture: "Two-dimensional measurement operates on flat shapes: perimeter adds up boundary lengths; area multiplies dimensions in a shape-specific way. Three-dimensional measurement extends these ideas into depth: surface area adds up the areas of all bounding faces; volume multiplies three dimensions together. The unifying thread is that each formula is derived from a geometric definition — understanding the derivation means the formula never needs to be blindly memorised.",
        priorKnowledge: [
            "Basic arithmetic: multiplication, division, addition and subtraction of decimals and fractions",
            "Powers and roots: squaring a number, cubing a number, taking square roots",
            "Algebraic substitution: replacing a variable with a numerical value in a formula",
            "Properties of common 2D shapes: rectangles, triangles, circles, parallelograms, trapezoids",
            "Properties of common 3D solids: cubes, cuboids, cylinders, cones, pyramids, spheres",
            "The constant π ≈ 3.14159 and its relationship to circles",
            "Unit awareness: mm, cm, m, km for length; cm², m² for area; cm³, m³ for volume"
        ],
        topicRoadmap: [
            "Perimeter of polygons: rectangles, triangles, and composite shapes",
            "Area of rectangles, triangles, parallelograms, trapezoids, and composite shapes",
            "Circumference and area of circles; arc length and sector area",
            "Surface area of cuboids, prisms, cylinders, pyramids, cones, and spheres",
            "Volume of cuboids, prisms, cylinders, pyramids, cones, and spheres",
            "Units of measurement and conversion between metric units",
            "Real-world modelling: optimisation, capacity, and material cost problems"
        ]
    },

    concepts: [
        "Perimeter is the total distance around the boundary of a two-dimensional shape",
        "Area measures the amount of two-dimensional space enclosed within a boundary",
        "Circles have unique measurement properties governed by the constant π",
        "Surface area is the total area of all faces enclosing a three-dimensional solid",
        "Volume measures the amount of three-dimensional space a solid occupies",
        "Units must be consistent within a calculation and correctly converted between systems"
    ],

    theory: "Geometric measurement assigns scalar quantities to spatial properties of shapes and solids. Each formula is derived from a fundamental definition: area formulas decompose shapes into unit squares; volume formulas stack area layers through depth; surface area formulas unfold a solid into a flat net. The constant π arises wherever curvature is involved, as the ratio of any circle's circumference to its diameter — a ratio that is the same for every circle in Euclidean geometry.",

    keyDefinitions: {
        "Perimeter": "The total length of the boundary of a two-dimensional shape; measured in linear units (cm, m)",
        "Area": "The amount of two-dimensional space enclosed by a boundary; measured in square units (cm², m²)",
        "Circumference": "The perimeter of a circle; the total distance around the circle's boundary",
        "Radius (r)": "The distance from the centre of a circle to any point on its circumference",
        "Diameter (d)": "The distance across a circle through its centre; d = 2r",
        "π (pi)": "The ratio of a circle's circumference to its diameter; an irrational constant ≈ 3.14159",
        "Surface Area": "The total area of all outer faces of a three-dimensional solid; measured in square units",
        "Volume": "The amount of three-dimensional space occupied by a solid; measured in cubic units (cm³, m³)",
        "Net": "A flat unfolding of a 3D solid showing all faces — used to visualise and calculate surface area",
        "Cross-Section": "The shape produced when a solid is cut by a plane parallel to its base",
        "Prism": "A solid with two identical parallel polygonal bases connected by rectangular faces",
        "Pyramid": "A solid with a polygonal base and triangular faces meeting at a single apex",
        "Composite Shape": "A shape formed by combining two or more standard shapes"
    },

    perimeterFormulas: {
        rectangle: {
            formula: "P = 2(l + w)",
            variables: { l: "length", w: "width" },
            derivation: "A rectangle has two pairs of equal sides; adding all four sides gives 2l + 2w = 2(l + w)",
            workedExample: {
                problem: "Find the perimeter of a rectangle with length 8.5 cm and width 3.2 cm.",
                solution: [
                    "Step 1 — Identify values: l = 8.5 cm, w = 3.2 cm",
                    "Step 2 — Apply formula: P = 2(l + w)",
                    "Step 3 — Substitute: P = 2(8.5 + 3.2)",
                    "Step 4 — Simplify bracket: P = 2(11.7)",
                    "Step 5 — Multiply: P = 23.4 cm"
                ]
            }
        },
        triangle: {
            formula: "P = a + b + c",
            variables: { a: "side 1", b: "side 2", c: "side 3" },
            specialCases: {
                equilateral: "P = 3a (all three sides equal)",
                isosceles: "P = 2a + b (two equal sides of length a, base b)"
            },
            workedExample: {
                problem: "An isosceles triangle has two equal sides of 6.4 cm and a base of 5.1 cm. Find the perimeter.",
                solution: [
                    "Step 1 — Identify: two equal sides a = 6.4 cm, base b = 5.1 cm",
                    "Step 2 — Apply formula: P = 2a + b",
                    "Step 3 — Substitute: P = 2(6.4) + 5.1",
                    "Step 4 — Calculate: P = 12.8 + 5.1 = 17.9 cm"
                ]
            }
        },
        compositeShapes: {
            method: "Identify all external boundary segments. Add only the outer edges — do not include any internal lines where shapes have been joined.",
            workedExample: {
                problem: "An L-shaped room is formed by a 10 m × 6 m rectangle with a 4 m × 3 m rectangle removed from one corner. Find the perimeter.",
                solution: [
                    "Step 1 — Sketch the L-shape and label all six sides",
                    "Step 2 — Identify the six external boundary lengths: 10, 6, 4, 3, (10−4)=6, (6−3)=3",
                    "Step 3 — List all sides: 10, 6, 6, 3, 4, 3",
                    "Step 4 — Add: P = 10 + 6 + 6 + 3 + 4 + 3 = 32 m",
                    "Note: the two 'missing' sides of the removed rectangle become new boundary sides of the L-shape"
                ]
            }
        }
    },

    areaFormulas: {
        rectangle: {
            formula: "A = l × w",
            derivation: "Divide the rectangle into unit squares: l columns × w rows = l × w unit squares",
            workedExample: {
                problem: "Find the area of a rectangle with length 12 cm and width 7.5 cm.",
                solution: [
                    "Step 1 — Identify: l = 12 cm, w = 7.5 cm",
                    "Step 2 — Apply formula: A = l × w",
                    "Step 3 — Substitute: A = 12 × 7.5 = 90 cm²"
                ]
            }
        },
        triangle: {
            formula: "A = (1/2) × b × h",
            variables: { b: "base (any side)", h: "perpendicular height (measured at right angles to the base)" },
            derivation: "A triangle is exactly half of a rectangle with the same base and height — the factor of 1/2 reflects this halving",
            criticalNote: "h must be the perpendicular height — the vertical distance from the base to the opposite vertex — NOT the slant side",
            workedExample: {
                problem: "A triangle has base 9 cm and perpendicular height 5 cm. Find the area.",
                solution: [
                    "Step 1 — Identify: b = 9 cm, h = 5 cm (perpendicular)",
                    "Step 2 — Apply formula: A = (1/2) × b × h",
                    "Step 3 — Substitute: A = (1/2) × 9 × 5",
                    "Step 4 — Calculate: A = (1/2) × 45 = 22.5 cm²"
                ]
            }
        },
        parallelogram: {
            formula: "A = b × h",
            variables: { b: "base", h: "perpendicular height (NOT the slant side)" },
            derivation: "A parallelogram can be rearranged into a rectangle with the same base and height by moving the triangular end",
            workedExample: {
                problem: "A parallelogram has base 11 cm and perpendicular height 4.5 cm. Find the area.",
                solution: [
                    "Step 1 — Identify: b = 11 cm, h = 4.5 cm",
                    "Step 2 — Apply formula: A = b × h",
                    "Step 3 — Substitute: A = 11 × 4.5 = 49.5 cm²",
                    "Note: the slant side (if given) is NOT used in the area formula"
                ]
            }
        },
        trapezoid: {
            formula: "A = (1/2)(a + b) × h",
            variables: { a: "one parallel side", b: "other parallel side", h: "perpendicular height between the parallel sides" },
            derivation: "Average of the two parallel sides (their mean length) multiplied by the perpendicular distance between them",
            workedExample: {
                problem: "A trapezoid has parallel sides of 8 cm and 14 cm, and a perpendicular height of 6 cm. Find the area.",
                solution: [
                    "Step 1 — Identify: a = 8 cm, b = 14 cm, h = 6 cm",
                    "Step 2 — Apply formula: A = (1/2)(a + b) × h",
                    "Step 3 — Substitute: A = (1/2)(8 + 14) × 6",
                    "Step 4 — Simplify bracket: A = (1/2)(22) × 6",
                    "Step 5 — Calculate: A = 11 × 6 = 66 cm²"
                ]
            }
        },
        compositeShapes: {
            method: "Decompose the composite shape into standard shapes. Calculate the area of each part separately. Add areas for shapes joined together; subtract areas for holes or removed sections.",
            workedExample: {
                problem: "A cross-shaped figure is formed by a 6 m × 2 m horizontal rectangle overlaid centrally on a 2 m × 6 m vertical rectangle. Find the total area.",
                solution: [
                    "Step 1 — Identify the decomposition: two rectangles overlap in a central 2 m × 2 m square",
                    "Step 2 — Area of horizontal rectangle: 6 × 2 = 12 m²",
                    "Step 3 — Area of vertical rectangle: 2 × 6 = 12 m²",
                    "Step 4 — Area of overlapping central square (counted twice): 2 × 2 = 4 m²",
                    "Step 5 — Total area: 12 + 12 − 4 = 20 m²",
                    "Alternative: decompose into 5 non-overlapping 2 × 2 squares → 5 × 4 = 20 m² ✓"
                ]
            }
        }
    },

    circlesMeasurements: {
        fundamentals: {
            circumference: "C = 2πr = πd",
            area: "A = πr²",
            relationship: "The radius r is the fundamental measurement; diameter d = 2r. Always confirm whether radius or diameter is given before substituting.",
            piApproximations: "Use π = 3.14 for 3 significant figures; π = 3.142 for 4 significant figures; use the π button on a calculator for full precision"
        },
        workedExamples: [
            {
                type: "Circumference from radius",
                problem: "Find the circumference of a circle with radius 5.5 cm. Give your answer to 3 significant figures.",
                solution: [
                    "Step 1 — Identify: r = 5.5 cm",
                    "Step 2 — Formula: C = 2πr",
                    "Step 3 — Substitute: C = 2 × π × 5.5",
                    "Step 4 — Calculate: C = 2 × 3.14159 × 5.5 = 34.558...",
                    "Step 5 — Round to 3 s.f.: C ≈ 34.6 cm"
                ]
            },
            {
                type: "Area from diameter",
                problem: "A circle has diameter 14 cm. Find its area to 1 decimal place.",
                solution: [
                    "Step 1 — Identify: d = 14 cm, so r = 14 ÷ 2 = 7 cm",
                    "Step 2 — Formula: A = πr²",
                    "Step 3 — Substitute: A = π × 7²",
                    "Step 4 — Calculate: A = π × 49 = 153.938...",
                    "Step 5 — Round: A ≈ 153.9 cm²"
                ]
            },
            {
                type: "Radius from area (reverse calculation)",
                problem: "A circle has area 78.5 cm². Find the radius to 1 decimal place.",
                solution: [
                    "Step 1 — Write the area formula: A = πr²",
                    "Step 2 — Substitute known area: 78.5 = πr²",
                    "Step 3 — Divide both sides by π: r² = 78.5 ÷ π = 24.987...",
                    "Step 4 — Square root both sides: r = √24.987 = 4.998...",
                    "Step 5 — Round: r ≈ 5.0 cm"
                ]
            }
        ],
        arcAndSector: {
            arcLength: {
                formula: "Arc length = (θ/360) × 2πr",
                where: "θ is the central angle in degrees",
                workedExample: {
                    problem: "Find the arc length of a sector with radius 8 cm and central angle 135°.",
                    solution: [
                        "Step 1 — Identify: r = 8 cm, θ = 135°",
                        "Step 2 — Formula: arc length = (θ/360) × 2πr",
                        "Step 3 — Substitute: arc length = (135/360) × 2π × 8",
                        "Step 4 — Simplify fraction: 135/360 = 3/8",
                        "Step 5 — Calculate: arc length = (3/8) × 2π × 8 = (3/8) × 50.265 = 18.85 cm (3 s.f.)"
                    ]
                }
            },
            sectorArea: {
                formula: "Sector area = (θ/360) × πr²",
                where: "θ is the central angle in degrees",
                workedExample: {
                    problem: "Find the area of a sector with radius 6 cm and central angle 240°.",
                    solution: [
                        "Step 1 — Identify: r = 6 cm, θ = 240°",
                        "Step 2 — Formula: sector area = (θ/360) × πr²",
                        "Step 3 — Substitute: sector area = (240/360) × π × 6²",
                        "Step 4 — Simplify: (240/360) = 2/3",
                        "Step 5 — Calculate: sector area = (2/3) × π × 36 = (2/3) × 113.097 = 75.40 cm² (4 s.f.)"
                    ]
                }
            }
        }
    },

    surfaceAreaFormulas: {
        concept: "Surface area is found by imagining the solid unfolded into a flat net. Each face of the net is a 2D shape whose area is calculated separately. All face areas are then summed.",
        cuboid: {
            formula: "SA = 2(lw + lh + wh)",
            variables: { l: "length", w: "width", h: "height" },
            derivation: "Three pairs of opposite rectangular faces: top+bottom = 2lw; front+back = 2lh; left+right = 2wh",
            workedExample: {
                problem: "Find the surface area of a cuboid with length 8 cm, width 5 cm, and height 3 cm.",
                solution: [
                    "Step 1 — Identify: l = 8 cm, w = 5 cm, h = 3 cm",
                    "Step 2 — Calculate each pair of faces:",
                    "  Top + bottom: 2 × l × w = 2 × 8 × 5 = 80 cm²",
                    "  Front + back: 2 × l × h = 2 × 8 × 3 = 48 cm²",
                    "  Left + right: 2 × w × h = 2 × 5 × 3 = 30 cm²",
                    "Step 3 — Sum all faces: SA = 80 + 48 + 30 = 158 cm²"
                ]
            }
        },
        triangularPrism: {
            formula: "SA = 2 × (triangle area) + (perimeter of triangle) × length",
            derivation: "Two triangular ends plus three rectangular side faces; each rectangular face has width = one side of the triangle and length = prism length",
            workedExample: {
                problem: "A triangular prism has an equilateral triangular cross-section with side 4 cm, and length 10 cm. Find the surface area (height of equilateral triangle = 3.46 cm).",
                solution: [
                    "Step 1 — Area of one triangular end: (1/2) × 4 × 3.46 = 6.92 cm²",
                    "Step 2 — Two triangular ends: 2 × 6.92 = 13.84 cm²",
                    "Step 3 — Perimeter of triangular cross-section: 3 × 4 = 12 cm",
                    "Step 4 — Total rectangular side area: 12 × 10 = 120 cm²",
                    "Step 5 — Total SA = 13.84 + 120 = 133.84 cm² ≈ 134 cm² (3 s.f.)"
                ]
            }
        },
        cylinder: {
            formula: "SA = 2πr² + 2πrh",
            components: {
                twoCircularEnds: "2πr²",
                curvedLateralSurface: "2πrh (a rectangle when unrolled: width = circumference = 2πr, height = h)"
            },
            workedExample: {
                problem: "Find the total surface area of a closed cylinder with radius 4 cm and height 9 cm.",
                solution: [
                    "Step 1 — Identify: r = 4 cm, h = 9 cm",
                    "Step 2 — Two circular ends: 2 × π × 4² = 2 × π × 16 = 100.53 cm²",
                    "Step 3 — Curved surface: 2 × π × 4 × 9 = 226.19 cm²",
                    "Step 4 — Total SA = 100.53 + 226.19 = 326.73 ≈ 327 cm² (3 s.f.)"
                ]
            }
        },
        cone: {
            formula: "SA = πr² + πrl",
            variables: { r: "base radius", l: "slant height (NOT vertical height)" },
            findingSlantHeight: "If vertical height h is given: l = √(r² + h²) using Pythagoras' theorem",
            components: {
                circularBase: "πr²",
                curvedLateralSurface: "πrl"
            },
            workedExample: {
                problem: "Find the total surface area of a cone with base radius 5 cm and vertical height 12 cm.",
                solution: [
                    "Step 1 — Identify: r = 5 cm, h = 12 cm (vertical height — not slant height)",
                    "Step 2 — Find slant height using Pythagoras: l = √(r² + h²) = √(25 + 144) = √169 = 13 cm",
                    "Step 3 — Circular base: π × r² = π × 25 = 78.54 cm²",
                    "Step 4 — Curved surface: π × r × l = π × 5 × 13 = 204.20 cm²",
                    "Step 5 — Total SA = 78.54 + 204.20 = 282.74 ≈ 283 cm² (3 s.f.)"
                ]
            }
        },
        sphere: {
            formula: "SA = 4πr²",
            note: "A sphere has no flat faces or edges — its entire surface is curved. The formula 4πr² equals exactly four times the area of a great circle (a circle with the same radius as the sphere).",
            workedExample: {
                problem: "Find the surface area of a sphere with diameter 10 cm.",
                solution: [
                    "Step 1 — Identify: d = 10 cm, so r = 5 cm",
                    "Step 2 — Formula: SA = 4πr²",
                    "Step 3 — Substitute: SA = 4 × π × 5²",
                    "Step 4 — Calculate: SA = 4 × π × 25 = 314.16 ≈ 314 cm² (3 s.f.)"
                ]
            }
        },
        squarePyramid: {
            formula: "SA = b² + 2bl",
            variables: { b: "base side length", l: "slant height of a triangular face" },
            components: {
                squareBase: "b²",
                fourTriangularFaces: "4 × (1/2 × b × l) = 2bl"
            },
            workedExample: {
                problem: "A square pyramid has base side 6 cm and triangular face slant height 8 cm. Find the surface area.",
                solution: [
                    "Step 1 — Identify: b = 6 cm, l = 8 cm",
                    "Step 2 — Square base: b² = 6² = 36 cm²",
                    "Step 3 — Four triangular faces: 4 × (1/2 × 6 × 8) = 4 × 24 = 96 cm²",
                    "Step 4 — Total SA = 36 + 96 = 132 cm²"
                ]
            }
        }
    },

    volumeFormulas: {
        concept: "Volume = area of cross-section × length (for prisms and cylinders). For pyramids, cones, and spheres, the formula includes a fractional multiplier that reflects the tapering of the solid compared to the equivalent prism or cylinder.",
        cuboid: {
            formula: "V = l × w × h",
            derivation: "Stack l × w unit-square layers in height h — the base area l × w is multiplied by the number of layers h",
            workedExample: {
                problem: "Find the volume of a cuboid with length 7 cm, width 4 cm, and height 5 cm.",
                solution: [
                    "Step 1 — Identify: l = 7 cm, w = 4 cm, h = 5 cm",
                    "Step 2 — Apply formula: V = l × w × h",
                    "Step 3 — Substitute: V = 7 × 4 × 5 = 140 cm³"
                ]
            }
        },
        prism: {
            formula: "V = A × l",
            variables: { A: "area of the cross-sectional face", l: "length (depth) of the prism" },
            derivation: "A prism is a 2D cross-section extruded through length l; volume = area of that cross-section × length",
            workedExample: {
                problem: "A triangular prism has a right-angled triangular cross-section with legs 6 cm and 8 cm, and a prism length of 12 cm. Find the volume.",
                solution: [
                    "Step 1 — Calculate cross-section area: A = (1/2) × 6 × 8 = 24 cm²",
                    "Step 2 — Apply prism formula: V = A × l",
                    "Step 3 — Substitute: V = 24 × 12 = 288 cm³"
                ]
            }
        },
        cylinder: {
            formula: "V = πr²h",
            derivation: "A cylinder is a circular cross-section (area = πr²) extruded through height h; V = πr² × h",
            workedExample: {
                problem: "A cylinder has radius 6 cm and height 10 cm. Find its volume to 3 significant figures.",
                solution: [
                    "Step 1 — Identify: r = 6 cm, h = 10 cm",
                    "Step 2 — Formula: V = πr²h",
                    "Step 3 — Substitute: V = π × 6² × 10 = π × 36 × 10 = 360π",
                    "Step 4 — Calculate: V = 1130.97... ≈ 1130 cm³ (3 s.f.)"
                ]
            }
        },
        pyramid: {
            formula: "V = (1/3) × b² × h",
            variables: { b: "base side length (for square pyramid)", h: "perpendicular height from base to apex" },
            generalForm: "V = (1/3) × base area × height — applies to any pyramid regardless of base shape",
            derivation: "A pyramid occupies exactly one-third the volume of the prism with the same base and height — a result proved by dissecting a prism into three equal pyramids",
            workedExample: {
                problem: "A square pyramid has base side 9 cm and perpendicular height 8 cm. Find the volume.",
                solution: [
                    "Step 1 — Identify: b = 9 cm, h = 8 cm",
                    "Step 2 — Base area: b² = 81 cm²",
                    "Step 3 — Apply formula: V = (1/3) × 81 × 8",
                    "Step 4 — Calculate: V = (1/3) × 648 = 216 cm³"
                ]
            }
        },
        cone: {
            formula: "V = (1/3)πr²h",
            variables: { r: "base radius", h: "perpendicular height from base to apex" },
            derivation: "A cone occupies exactly one-third the volume of the cylinder with the same base radius and height",
            workedExample: {
                problem: "A cone has base radius 4 cm and perpendicular height 9 cm. Find the volume to 3 s.f.",
                solution: [
                    "Step 1 — Identify: r = 4 cm, h = 9 cm",
                    "Step 2 — Formula: V = (1/3)πr²h",
                    "Step 3 — Substitute: V = (1/3) × π × 16 × 9",
                    "Step 4 — Calculate: V = (1/3) × π × 144 = 48π = 150.796... ≈ 151 cm³ (3 s.f.)"
                ]
            }
        },
        sphere: {
            formula: "V = (4/3)πr³",
            workedExample: {
                problem: "Find the volume of a sphere with radius 7 cm. Give your answer to 3 significant figures.",
                solution: [
                    "Step 1 — Identify: r = 7 cm",
                    "Step 2 — Formula: V = (4/3)πr³",
                    "Step 3 — Substitute: V = (4/3) × π × 7³",
                    "Step 4 — Calculate 7³: 7 × 7 × 7 = 343",
                    "Step 5 — Calculate: V = (4/3) × π × 343 = (4/3) × 1077.57 = 1436.76 ≈ 1440 cm³ (3 s.f.)"
                ]
            }
        }
    },

    unitsAndConversion: {
        linearUnits: {
            conversions: "1 cm = 10 mm; 1 m = 100 cm; 1 km = 1000 m",
            rule: "Multiply to convert to a smaller unit; divide to convert to a larger unit"
        },
        areaUnits: {
            conversions: "1 cm² = 100 mm²; 1 m² = 10 000 cm²; 1 km² = 1 000 000 m²",
            rule: "Area conversion factors are the square of the corresponding linear conversion factors: if 1 m = 100 cm, then 1 m² = 100² cm² = 10 000 cm²",
            criticalPoint: "Students frequently apply linear conversion factors to area, dividing by 100 instead of 10 000 when converting m² to cm²"
        },
        volumeUnits: {
            conversions: "1 cm³ = 1000 mm³; 1 m³ = 1 000 000 cm³; 1 litre = 1000 cm³; 1 m³ = 1000 litres",
            rule: "Volume conversion factors are the cube of the corresponding linear conversion factors: if 1 m = 100 cm, then 1 m³ = 100³ cm³ = 1 000 000 cm³",
            workedExample: {
                problem: "A tank holds 2.4 m³. Express this volume in (a) cm³ and (b) litres.",
                solution: [
                    "(a) 1 m³ = 1 000 000 cm³ → 2.4 m³ = 2.4 × 1 000 000 = 2 400 000 cm³",
                    "(b) 1 m³ = 1000 litres → 2.4 m³ = 2.4 × 1000 = 2400 litres"
                ]
            }
        }
    },

    topicSummary: {
        coreInsights: [
            "Perimeter is one-dimensional (length around a boundary) — always expressed in linear units. Conflating perimeter with area is the most fundamental misconception in this topic.",
            "Area is two-dimensional (space inside a boundary) — always expressed in square units. Every area formula can be derived by decomposing the shape into rectangles or triangles.",
            "The factor of 1/2 in the triangle formula and the factor of 1/3 in pyramid/cone formulas are not arbitrary — they arise from geometric relationships: triangles are half rectangles; pyramids are one-third prisms.",
            "π is the universal constant of circles — it appears in every circle formula (circumference, area, arc length, sector area, cylinder surface area, cylinder volume, cone, sphere). Knowing π ≈ 3.14159 and when to use the π button is essential.",
            "Surface area requires identifying all faces of the solid. The most reliable method is to draw and label the net before applying any formula — this prevents missing faces.",
            "Volume of prisms and cylinders = cross-section area × length. Volume of pyramids and cones = (1/3) × base area × height. Volume of a sphere = (4/3)πr³. These three patterns cover all standard solids.",
            "Unit conversion errors are systematic: area conversions use the square of the linear conversion factor; volume conversions use the cube. Applying the linear factor to area or volume is one of the most common errors in examination work.",
            "Every geometric measurement problem in the real world combines multiple formulas — optimisation problems require both area and perimeter; packaging problems require both surface area and volume. Fluency with individual formulas is the foundation; synthesis is the goal."
        ],
        keyFormulas: {
            perimeterRectangle:     "P = 2(l + w)",
            areaRectangle:          "A = l × w",
            areaTriangle:           "A = (1/2)bh",
            areaParallelogram:      "A = bh",
            areaTrapezoid:          "A = (1/2)(a + b)h",
            circumference:          "C = 2πr = πd",
            areaCircle:             "A = πr²",
            arcLength:              "Arc = (θ/360) × 2πr",
            sectorArea:             "Sector = (θ/360) × πr²",
            surfaceAreaCuboid:      "SA = 2(lw + lh + wh)",
            surfaceAreaCylinder:    "SA = 2πr² + 2πrh",
            surfaceAreaCone:        "SA = πr² + πrl",
            surfaceAreaSphere:      "SA = 4πr²",
            volumeCuboid:           "V = lwh",
            volumePrism:            "V = A × l",
            volumeCylinder:         "V = πr²h",
            volumePyramid:          "V = (1/3) × base area × h",
            volumeCone:             "V = (1/3)πr²h",
            volumeSphere:           "V = (4/3)πr³",
            slantHeight:            "l = √(r² + h²)"
        },
        commonMistakesToAvoid: [
            "Using the slant side instead of the perpendicular height in triangle and parallelogram area formulas",
            "Using diameter instead of radius (or vice versa) in circle formulas — always halve the diameter before substituting",
            "Forgetting the factor of 1/3 in pyramid and cone volume formulas",
            "Applying linear unit conversion factors to area or volume (dividing by 100 instead of 10 000 for m² to cm²)",
            "Omitting one or more faces when calculating surface area — always draw the net first",
            "Using the slant height instead of the vertical perpendicular height in cone and pyramid volume formulas",
            "Confusing surface area (square units) with volume (cubic units) in the final answer"
        ],
        connections: [
            "Pythagoras' theorem: used to find slant height of cones and pyramids from vertical height and radius/base",
            "Algebra: rearranging area or volume formulas to find an unknown dimension (e.g. finding radius given volume)",
            "Ratio and proportion: scale factors — if linear dimensions scale by factor k, area scales by k² and volume scales by k³",
            "Optimisation: maximum volume for a given surface area (and vice versa) — the basis of efficient packaging design",
            "Integration (calculus): area under a curve generalises the area formula; volume of revolution generalises cylinder/cone volumes"
        ],
        examReadinessChecklist: [
            "Can you calculate the perimeter and area of all standard polygons and composite shapes?",
            "Can you correctly identify radius vs diameter and apply the π formulas for circumference, area, arc length, and sector area?",
            "Can you find the slant height of a cone using Pythagoras before applying the surface area formula?",
            "Can you calculate surface area by systematically listing all faces of a solid?",
            "Can you apply the 1/3 factor correctly to pyramids and cones in volume calculations?",
            "Can you convert between mm², cm², and m² (and the corresponding cubic units) without applying the linear factor?",
            "Can you set up and solve an equation to find an unknown dimension from a given area or volume?"
        ]
    }
},



linearEquations: {
    title: "Linear Equations: Solving, Graphing, and Applications",

    databaseLinks: {
        misconceptions: [
            'linearEquationBasics',
            'solvingTechniques',
            'graphingLines',
            'systemsOfEquations',
            'inequalities'
        ],
        contextualScenarios: [
            'linearEquationBasics',
            'solvingTechniques',
            'graphingLines',
            'systemsOfEquations'
        ],
        studyTips: [
            'diagrams',
            'comparisonTables',
            'graphingPractice',
            'flashcards',
            'mnemonics',
            'practiceRoutines',
            'workedExampleAnalysis'
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
            'linearEquationBasics',
            'solvingTechniques',
            'graphingLines',
            'systemsOfEquations'
        ]
    },

    conceptLinks: {
        "A linear equation represents a straight-line relationship between two variables": {
            misconceptions:       ['linearEquationBasics'],
            scenarios:            ['linearEquationBasics'],
            studyTips:            ['diagrams', 'graphingPractice'],
            assessmentRubrics:    ['remember', 'understand'],
            assessmentQuestions:  ['linearEquationBasics']
        },
        "Slope describes the rate of change between variables": {
            misconceptions:       ['graphingLines'],
            scenarios:            ['graphingLines'],
            studyTips:            ['diagrams', 'comparisonTables'],
            assessmentRubrics:    ['remember', 'understand', 'apply'],
            assessmentQuestions:  ['graphingLines']
        },
        "Solving a linear equation means isolating the unknown variable": {
            misconceptions:       ['solvingTechniques'],
            scenarios:            ['solvingTechniques'],
            studyTips:            ['flashcards', 'practiceRoutines'],
            assessmentRubrics:    ['understand', 'apply'],
            assessmentQuestions:  ['solvingTechniques']
        },
        "A system of linear equations has a solution where lines intersect": {
            misconceptions:       ['systemsOfEquations'],
            scenarios:            ['systemsOfEquations'],
            studyTips:            ['diagrams', 'comparisonTables', 'graphingPractice'],
            assessmentRubrics:    ['apply', 'analyze', 'evaluate'],
            assessmentQuestions:  ['systemsOfEquations']
        },
        "Linear inequalities define a region of solutions rather than a single point": {
            misconceptions:       ['inequalities'],
            scenarios:            ['linearEquationBasics'],
            studyTips:            ['comparisonTables', 'graphingPractice', 'mnemonics'],
            assessmentRubrics:    ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions:  ['linearEquationBasics']
        }
    },

    topicIntroduction: {
        overview: "A linear equation is the mathematical language of constant change. Wherever one quantity increases or decreases at a steady rate relative to another — distance and time, cost and quantity, temperature and altitude — a linear equation describes the relationship exactly. In this lesson, we develop fluency in writing, solving, graphing, and interpreting linear equations and systems, and connect these skills to real-world modelling.",
        whyItMatters: "Linear equations underpin virtually every quantitative field. Engineers model load and stress, economists model supply and demand, scientists model experimental calibration curves, and data scientists model trends — all using linear relationships. Mastery of linear equations is the gateway to all further algebra, calculus, and mathematical modelling.",
        bigPicture: "A linear equation in two variables defines an infinite set of (x, y) pairs that all lie on a straight line. Solving a single equation means finding x when y is fixed (or vice versa). Solving a system means finding the unique point satisfying both equations simultaneously. Every technique in this lesson — substitution, elimination, graphing — is a different method for finding the same geometric truth: the intersection of lines.",
        priorKnowledge: [
            "Arithmetic: addition, subtraction, multiplication, division of integers and fractions",
            "Order of operations (BIDMAS/PEMDAS)",
            "Basic algebraic notation: variables, coefficients, constants",
            "Coordinate geometry: the x-y plane, plotting points",
            "Concept of equality: what it means for both sides of an equation to be equal"
        ],
        topicRoadmap: [
            "What a linear equation is and the forms it takes (slope-intercept, standard, point-slope)",
            "Finding and interpreting slope and y-intercept",
            "Solving one-variable linear equations using inverse operations",
            "Solving two-variable linear equations: graphical, substitution, and elimination methods",
            "Systems of linear equations: one solution, no solution, infinitely many solutions",
            "Linear inequalities and their graphical representation",
            "Real-world modelling with linear equations"
        ]
    },

    concepts: [
        "A linear equation represents a straight-line relationship between two variables",
        "Slope describes the rate of change between variables",
        "The y-intercept is the value of y when x equals zero",
        "Solving a linear equation means isolating the unknown variable",
        "A system of linear equations has a solution where lines intersect",
        "Linear inequalities define a region of solutions rather than a single point"
    ],

    theory: "A linear equation is any equation that, when graphed, produces a straight line. It expresses a relationship of constant rate of change between two quantities and is the foundational model of proportional and affine relationships in mathematics.",

    keyDefinitions: {
        "Linear Equation": "An equation where the highest power of the variable is 1, producing a straight-line graph",
        "Variable": "A letter representing an unknown or changing quantity (commonly x or y)",
        "Coefficient": "The numerical factor multiplying a variable (the 3 in 3x)",
        "Constant": "A fixed numerical term with no variable (the 5 in 3x + 5)",
        "Slope (m)": "The rate of change; rise divided by run; (y₂ − y₁)/(x₂ − x₁)",
        "y-intercept (b)": "The value of y when x = 0; where the line crosses the y-axis",
        "x-intercept": "The value of x when y = 0; where the line crosses the x-axis",
        "Solution": "A value (or set of values) that makes the equation true",
        "System of Equations": "Two or more equations considered simultaneously",
        "Inverse Operations": "Operations that undo each other (addition/subtraction, multiplication/division)"
    },

    formsOfLinearEquations: {
        slopeIntercept: {
            form: "y = mx + b",
            m: "slope (rate of change)",
            b: "y-intercept (starting value)",
            bestUsedFor: "Graphing quickly; reading slope and intercept directly",
            example: "y = 3x + 2 — slope is 3, y-intercept is 2"
        },
        standardForm: {
            form: "Ax + By = C",
            conditions: "A, B, C are integers; A ≥ 0; A and B not both zero",
            bestUsedFor: "Systems of equations solved by elimination; finding both intercepts",
            example: "2x + 3y = 12 — x-intercept: set y=0 → x=6; y-intercept: set x=0 → y=4"
        },
        pointSlope: {
            form: "y − y₁ = m(x − x₁)",
            m: "slope",
            x1y1: "a known point on the line",
            bestUsedFor: "Writing the equation of a line given a point and slope",
            example: "Through (2, 5) with slope 3: y − 5 = 3(x − 2)"
        }
    },

    slope: {
        definition: "Slope m = (y₂ − y₁)/(x₂ − x₁) — the change in y per unit change in x",
        positive: "Line rises left to right; as x increases, y increases",
        negative: "Line falls left to right; as x increases, y decreases",
        zero: "Horizontal line; y is constant regardless of x (y = b)",
        unknown: "Vertical line; x is constant regardless of y (x = a); slope cannot be computed",
        interpretation: "A slope of 3 means: for every 1 unit increase in x, y increases by 3 units",
        workedExample: {
            problem: "Find the slope of the line through points (1, 2) and (4, 11).",
            solution: [
                "Step 1 — Identify the coordinates: (x₁, y₁) = (1, 2) and (x₂, y₂) = (4, 11)",
                "Step 2 — Apply the slope formula: m = (y₂ − y₁)/(x₂ − x₁)",
                "Step 3 — Substitute: m = (11 − 2)/(4 − 1)",
                "Step 4 — Simplify: m = 9/3 = 3",
                "Interpretation: for every 1 unit increase in x, y increases by 3 units"
            ]
        }
    },

    solvingOneVariable: {
        principle: "Whatever operation you perform on one side of the equation, you must perform on the other side to maintain equality",
        steps: [
            "Simplify each side (expand brackets, collect like terms)",
            "Move variable terms to one side using inverse operations",
            "Move constant terms to the other side using inverse operations",
            "Divide both sides by the coefficient of the variable",
            "Check: substitute the answer back into the original equation"
        ],
        workedExamples: [
            {
                type: "Simple one-step",
                problem: "Solve: x + 7 = 12",
                solution: [
                    "Step 1 — Subtract 7 from both sides: x + 7 − 7 = 12 − 7",
                    "Step 2 — Simplify: x = 5",
                    "Check: 5 + 7 = 12 ✓"
                ]
            },
            {
                type: "Two-step equation",
                problem: "Solve: 3x − 4 = 11",
                solution: [
                    "Step 1 — Add 4 to both sides: 3x − 4 + 4 = 11 + 4",
                    "Step 2 — Simplify: 3x = 15",
                    "Step 3 — Divide both sides by 3: x = 5",
                    "Check: 3(5) − 4 = 15 − 4 = 11 ✓"
                ]
            },
            {
                type: "Variables on both sides",
                problem: "Solve: 5x + 3 = 2x + 12",
                solution: [
                    "Step 1 — Subtract 2x from both sides: 5x − 2x + 3 = 12",
                    "Step 2 — Simplify: 3x + 3 = 12",
                    "Step 3 — Subtract 3 from both sides: 3x = 9",
                    "Step 4 — Divide both sides by 3: x = 3",
                    "Check: 5(3) + 3 = 18; 2(3) + 12 = 18 ✓"
                ]
            },
            {
                type: "Equation with brackets",
                problem: "Solve: 2(3x − 1) = 4x + 6",
                solution: [
                    "Step 1 — Expand brackets: 6x − 2 = 4x + 6",
                    "Step 2 — Subtract 4x from both sides: 2x − 2 = 6",
                    "Step 3 — Add 2 to both sides: 2x = 8",
                    "Step 4 — Divide both sides by 2: x = 4",
                    "Check: 2(3×4 − 1) = 2(11) = 22; 4(4) + 6 = 22 ✓"
                ]
            },
            {
                type: "Equation with fractions",
                problem: "Solve: x/3 + 2 = 5",
                solution: [
                    "Step 1 — Subtract 2 from both sides: x/3 = 3",
                    "Step 2 — Multiply both sides by 3: x = 9",
                    "Check: 9/3 + 2 = 3 + 2 = 5 ✓"
                ]
            }
        ]
    },

    graphingLines: {
        fromSlopeIntercept: {
            method: "Plot the y-intercept (0, b) first. Then use slope m = rise/run to find a second point. Draw the line through both points.",
            workedExample: {
                problem: "Graph y = 2x − 3",
                solution: [
                    "Step 1 — Identify: slope m = 2, y-intercept b = −3",
                    "Step 2 — Plot the y-intercept: place a point at (0, −3)",
                    "Step 3 — Apply slope: rise = 2, run = 1 → from (0, −3), move 1 right and 2 up → plot (1, −1)",
                    "Step 4 — Draw a straight line through (0, −3) and (1, −1), extending in both directions",
                    "Verification: check that (2, 1) also lies on the line — y = 2(2) − 3 = 1 ✓"
                ]
            }
        },
        fromStandardForm: {
            method: "Find both intercepts. Set y = 0 to find the x-intercept; set x = 0 to find the y-intercept. Plot both and draw the line.",
            workedExample: {
                problem: "Graph 3x + 2y = 12",
                solution: [
                    "Step 1 — Find x-intercept: set y = 0 → 3x = 12 → x = 4 → point (4, 0)",
                    "Step 2 — Find y-intercept: set x = 0 → 2y = 12 → y = 6 → point (0, 6)",
                    "Step 3 — Plot (4, 0) and (0, 6) on the coordinate plane",
                    "Step 4 — Draw a straight line through both points",
                    "Verification: check (2, 3) — 3(2) + 2(3) = 6 + 6 = 12 ✓"
                ]
            }
        },
        parallelAndPerpendicular: {
            parallel: "Same slope (m), different y-intercepts. Lines never intersect.",
            perpendicular: "Slopes are negative reciprocals: m₁ × m₂ = −1",
            workedExample: {
                problem: "Line A has equation y = 3x + 1. Write the equation of (a) a parallel line through (0, −4) and (b) a perpendicular line through (0, 2).",
                solution: [
                    "Line A: slope m = 3",
                    "(a) Parallel: same slope m = 3, y-intercept = −4 → y = 3x − 4",
                    "(b) Perpendicular: slope = −1/3 (negative reciprocal of 3), y-intercept = 2 → y = −(1/3)x + 2"
                ]
            }
        }
    },

    systemsOfEquations: {
        graphicalMethod: {
            procedure: "Graph both equations on the same axes. The solution is the intersection point.",
            advantage: "Visual — shows the geometric meaning of the solution",
            limitation: "Imprecise for non-integer solutions; impractical for large values",
            outcomeTypes: {
                oneSolution: "Lines intersect at exactly one point — consistent and independent system",
                noSolution: "Lines are parallel (same slope, different intercepts) — inconsistent system",
                infiniteSolutions: "Lines are identical (same slope, same intercept) — consistent and dependent system"
            }
        },
        substitutionMethod: {
            procedure: [
                "Rearrange one equation to express one variable in terms of the other",
                "Substitute the expression into the second equation",
                "Solve the resulting one-variable equation",
                "Back-substitute to find the second variable",
                "Check the solution in both original equations"
            ],
            workedExample: {
                problem: "Solve the system: y = 2x + 1 and 3x + y = 16",
                solution: [
                    "Step 1 — Equation 1 already gives y in terms of x: y = 2x + 1",
                    "Step 2 — Substitute into Equation 2: 3x + (2x + 1) = 16",
                    "Step 3 — Simplify: 5x + 1 = 16",
                    "Step 4 — Subtract 1: 5x = 15",
                    "Step 5 — Divide by 5: x = 3",
                    "Step 6 — Back-substitute: y = 2(3) + 1 = 7",
                    "Solution: (3, 7)",
                    "Check Eq 1: 7 = 2(3) + 1 = 7 ✓",
                    "Check Eq 2: 3(3) + 7 = 9 + 7 = 16 ✓"
                ]
            }
        },
        eliminationMethod: {
            procedure: [
                "Multiply one or both equations so that the coefficients of one variable are equal (or opposite)",
                "Add or subtract the equations to eliminate that variable",
                "Solve the resulting one-variable equation",
                "Back-substitute to find the second variable",
                "Check the solution in both original equations"
            ],
            workedExample: {
                problem: "Solve the system: 2x + 3y = 12 and 4x − y = 10",
                solution: [
                    "Step 1 — Multiply Equation 2 by 3 to match the y-coefficient: 12x − 3y = 30",
                    "Step 2 — Add to Equation 1: (2x + 3y) + (12x − 3y) = 12 + 30",
                    "Step 3 — Simplify: 14x = 42",
                    "Step 4 — Divide by 14: x = 3",
                    "Step 5 — Back-substitute into Equation 1: 2(3) + 3y = 12 → 6 + 3y = 12 → 3y = 6 → y = 2",
                    "Solution: (3, 2)",
                    "Check Eq 1: 2(3) + 3(2) = 6 + 6 = 12 ✓",
                    "Check Eq 2: 4(3) − 2 = 12 − 2 = 10 ✓"
                ]
            }
        }
    },
    linearInequalities: {
        notation: {
            lessThan: "x < a — x is strictly less than a (open circle on number line; dashed boundary on graph)",
            lessThanOrEqual: "x ≤ a — x is less than or equal to a (closed circle; solid boundary)",
            greaterThan: "x > a — x is strictly greater than a",
            greaterThanOrEqual: "x ≥ a — x is greater than or equal to a"
        },
        keyRule: "When multiplying or dividing both sides of an inequality by a NEGATIVE number, the inequality sign REVERSES direction",
        workedExample: {
            problem: "Solve and graph: −2x + 5 > 11",
            solution: [
                "Step 1 — Subtract 5 from both sides: −2x > 6",
                "Step 2 — Divide by −2 and REVERSE the inequality sign: x < −3",
                "Graph: open circle at −3, shaded region to the left",
                "Check with x = −4: −2(−4) + 5 = 8 + 5 = 13 > 11 ✓",
                "Check with x = −2 (should not satisfy): −2(−2) + 5 = 4 + 5 = 9; 9 > 11 is FALSE ✓"
            ]
        },
        graphingInequalities: {
            procedure: [
                "Replace the inequality sign with = and graph the boundary line",
                "Use a dashed line for strict inequalities (< or >); solid line for ≤ or ≥",
                "Test a point not on the line (usually (0,0)) in the original inequality",
                "If the test point satisfies the inequality, shade the region containing it; if not, shade the opposite region"
            ]
        }
    },

    writingEquationsFromContexts: {
        procedure: [
            "Identify the two quantities that vary (assign variable names)",
            "Identify the rate of change (this is the slope m)",
            "Identify the starting value or fixed value (this is the y-intercept b)",
            "Write the equation in the form y = mx + b",
            "Use the equation to answer questions about the context"
        ],
        workedExample: {
            problem: "A taxi charges a £3 base fare plus £1.50 per kilometre. Write an equation for the total cost C in terms of distance d. Find the cost for a 10 km journey.",
            solution: [
                "Step 1 — Identify variables: C = total cost (£), d = distance (km)",
                "Step 2 — Rate of change (slope): £1.50 per km → m = 1.5",
                "Step 3 — Starting value (y-intercept): £3 base fare → b = 3",
                "Step 4 — Write equation: C = 1.5d + 3",
                "Step 5 — Substitute d = 10: C = 1.5(10) + 3 = 15 + 3 = £18"
            ]
        }
    },

    topicSummary: {
        coreInsights: [
            "A linear equation in two variables describes a constant rate of change and graphs as a straight line — the most fundamental model in quantitative reasoning.",
            "Slope m = rise/run = (y₂ − y₁)/(x₂ − x₁) is the single most important parameter of a line, describing how steeply and in which direction it changes.",
            "The three forms (slope-intercept, standard, point-slope) are equivalent — fluency means choosing the most convenient form for the task at hand.",
            "Solving any linear equation rests on one principle: maintain equality by performing the same operation on both sides until the variable is isolated.",
            "A system of two linear equations has three possible outcomes geometrically: one intersection (one solution), parallel lines (no solution), or identical lines (infinite solutions).",
            "Substitution and elimination are algebraic methods for the same geometric question — where do these two lines meet?",
            "When multiplying or dividing an inequality by a negative number, the inequality sign reverses — this is the most commonly forgotten rule in all of linear algebra.",
            "Every linear model in the real world has a slope (rate) and an intercept (starting value) — reading these from context is as important as computing them algebraically."
        ],
        keyFormulas: {
            slopeFormula:     "m = (y₂ − y₁)/(x₂ − x₁)",
            slopeIntercept:   "y = mx + b",
            standardForm:     "Ax + By = C",
            pointSlope:       "y − y₁ = m(x − x₁)",
            parallelSlopes:   "m₁ = m₂",
            perpendicularSlopes: "m₁ × m₂ = −1"
        },
        systemsOutcomeSummary: {
            oneSolution:       { geometry: "Lines intersect",  algebraSign: "Unique x and y values", classification: "Consistent and independent" },
            noSolution:        { geometry: "Lines parallel",   algebraSign: "Contradiction (e.g. 0 = 5)", classification: "Inconsistent" },
            infiniteSolutions: { geometry: "Lines identical",  algebraSign: "Identity (e.g. 0 = 0)", classification: "Consistent and dependent" }
        },
        commonMistakesToAvoid: [
            "Forgetting to reverse the inequality sign when multiplying or dividing by a negative number",
            "Confusing slope with y-intercept when reading y = mx + b — m is always the coefficient of x",
            "Treating a vertical line (x = a) as having slope zero — vertical lines have undefined slope",
            "Stopping after finding x in a system — always back-substitute to find y and always check both equations",
            "Using rise/run as run/rise (inverting the slope fraction)",
            "Treating parallel lines as having a solution — they never intersect"
        ],
        connections: [
            "Functions: every linear equation in two variables defines a linear function f(x) = mx + b",
            "Statistics: line of best fit (regression line) is a linear equation fitted to data",
            "Physics: distance-time graphs, velocity-time graphs, Ohm's Law (V = IR) are all linear relationships",
            "Economics: supply and demand curves, cost and revenue models, break-even analysis",
            "Calculus: the derivative of a linear function is its slope — linear equations are the foundation of differential calculus"
        ],
        examReadinessChecklist: [
            "Can you find the slope between any two points without inverting the fraction?",
            "Can you write the equation of a line given (a) slope and y-intercept, (b) slope and a point, (c) two points?",
            "Can you solve a two-step equation, a variables-on-both-sides equation, and a bracketed equation?",
            "Can you identify the method (substitution or elimination) best suited to a given system and execute it completely?",
            "Can you determine from a system's algebra whether it has one solution, none, or infinitely many?",
            "Can you solve a linear inequality, remembering to reverse the sign when dividing by a negative?"
        ]
    }
},

};

}

const EndSection4 = "close"