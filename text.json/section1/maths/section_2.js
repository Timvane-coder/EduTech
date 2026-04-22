

vectors: {
    title: "Vectors: Representation, Operations, and Applications",

    databaseLinks: {
        misconceptions: [
            'vectorBasics',
            'vectorOperations',
            'dotProduct',
            'vectorMagnitudeDirection',
            'vectorApplications'
        ],
        contextualScenarios: [
            'vectorBasics',
            'vectorOperations',
            'dotProduct',
            'vectorApplications'
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
            'vectorBasics',
            'vectorOperations',
            'dotProduct',
            'vectorApplications'
        ]
    },

    conceptLinks: {
        "A vector has both magnitude and direction, distinguishing it from a scalar": {
            misconceptions:      ['vectorBasics'],
            scenarios:           ['vectorBasics'],
            studyTips:           ['diagrams', 'comparisonTables'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['vectorBasics']
        },
        "Vectors can be added, subtracted, and scaled using algebraic and geometric methods": {
            misconceptions:      ['vectorOperations'],
            scenarios:           ['vectorOperations'],
            studyTips:           ['diagrams', 'graphingPractice', 'practiceRoutines'],
            assessmentRubrics:   ['understand', 'apply'],
            assessmentQuestions: ['vectorOperations']
        },
        "The dot product measures the degree to which two vectors point in the same direction": {
            misconceptions:      ['dotProduct'],
            scenarios:           ['dotProduct'],
            studyTips:           ['flashcards', 'comparisonTables', 'workedExampleAnalysis'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate'],
            assessmentQuestions: ['dotProduct']
        },
        "The magnitude of a vector is its length, calculated using the Pythagorean theorem": {
            misconceptions:      ['vectorMagnitudeDirection'],
            scenarios:           ['vectorBasics'],
            studyTips:           ['flashcards', 'practiceRoutines'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['vectorBasics']
        },
        "Vectors model real-world quantities that require both size and direction": {
            misconceptions:      ['vectorApplications'],
            scenarios:           ['vectorApplications'],
            studyTips:           ['diagrams', 'mnemonics', 'workedExampleAnalysis'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions: ['vectorApplications']
        }
    },

    topicIntroduction: {
        overview: "A vector is a mathematical object that carries two pieces of information simultaneously: how much and in which direction. Temperature is a scalar — it has magnitude only. Wind velocity is a vector — it has both speed and direction. In this lesson we develop fluency in representing, operating on, and applying vectors in two and three dimensions, connecting geometric intuition to algebraic precision.",
        whyItMatters: "Vectors are the language of physics, engineering, computer graphics, robotics, navigation, and machine learning. Every force, velocity, electric field, and gradient is a vector. Understanding vectors is the gateway to mechanics, electromagnetism, multivariable calculus, and linear algebra. Without vectors, modern physics and engineering are inaccessible.",
        bigPicture: "A vector can be thought of in three equivalent ways: as an arrow in space (geometric), as an ordered tuple of components (algebraic), and as a transformation (abstract). All three perspectives are used in this lesson. The power of vectors comes from the fact that geometric relationships — direction, perpendicularity, projection — can be computed algebraically without drawing a single diagram.",
        priorKnowledge: [
            "Coordinate geometry: the x-y plane, plotting points, distance between points",
            "Trigonometry: sin, cos, tan and their application to right-angled triangles",
            "Pythagoras' theorem: a² + b² = c²",
            "Basic algebra: substitution, rearrangement, solving linear equations",
            "Scalar arithmetic: operations on real numbers including negatives and fractions"
        ],
        topicRoadmap: [
            "What a vector is: magnitude, direction, and the distinction from scalars",
            "Representing vectors: column vectors, unit vectors i and j (and k in 3D), position vectors",
            "Vector addition, subtraction, and scalar multiplication — geometrically and algebraically",
            "Magnitude of a vector and unit vectors",
            "The dot (scalar) product: definition, calculation, and the angle between vectors",
            "Parallel and perpendicular vectors",
            "Position vectors, displacement vectors, and the section formula",
            "Applications: resultant forces, velocity and relative motion, work done by a force"
        ]
    },

    concepts: [
        "A vector has both magnitude and direction, distinguishing it from a scalar",
        "Vectors can be added, subtracted, and scaled using algebraic and geometric methods",
        "The magnitude of a vector is its length, calculated using the Pythagorean theorem",
        "A unit vector has magnitude 1 and indicates direction only",
        "The dot product measures the degree to which two vectors point in the same direction",
        "Two vectors are perpendicular if and only if their dot product is zero",
        "Vectors model real-world quantities that require both size and direction"
    ],

    theory: "A vector is a directed quantity characterised by both magnitude (size) and direction. Geometrically it is represented as a directed line segment (arrow); algebraically it is represented as an ordered tuple of components. Vector algebra extends ordinary arithmetic to directional quantities, enabling the mathematical description of forces, velocities, displacements, and fields in physics and engineering.",

    keyDefinitions: {
        "Vector": "A quantity with both magnitude and direction, represented as an arrow or as a column of components",
        "Scalar": "A quantity with magnitude only and no associated direction (e.g. speed, temperature, mass)",
        "Magnitude (|a|)": "The length of a vector; computed as √(x² + y²) in 2D or √(x² + y² + z²) in 3D",
        "Unit Vector": "A vector with magnitude exactly 1; found by dividing a vector by its own magnitude: â = a / |a|",
        "Position Vector": "The vector from the origin O to a point P, written as OP⃗ or p",
        "Displacement Vector": "The vector from point A to point B, equal to b − a (position vector of B minus position vector of A)",
        "i, j, k": "Standard unit vectors along the x, y, and z axes respectively: i = (1,0,0), j = (0,1,0), k = (0,0,1)",
        "Resultant Vector": "The single vector equivalent to the combined effect of two or more vectors; found by vector addition",
        "Dot Product (a · b)": "A scalar computed as a₁b₁ + a₂b₂ (+ a₃b₃ in 3D); equals |a||b|cosθ where θ is the angle between the vectors",
        "Parallel Vectors": "Vectors with the same or opposite direction; one is a scalar multiple of the other",
        "Perpendicular Vectors": "Vectors whose dot product is zero; they meet at 90°",
        "Free Vector": "A vector defined only by magnitude and direction, not by position; can be translated anywhere in space",
        "Zero Vector": "The vector with magnitude 0 and no defined direction, written as 0"
    },

    vectorNotation: {
        columnVector: {
            form2D: "(x, y) or written vertically as a column: [x; y]",
            form3D: "(x, y, z) or as a column: [x; y; z]",
            meaning: "x is the horizontal component (displacement in i direction), y is the vertical component (displacement in j direction)",
            example: "The vector from A(1, 2) to B(4, 6) is AB⃗ = (4−1, 6−2) = (3, 4)"
        },
        unitVectorNotation: {
            form: "a = xi + yj (in 2D) or a = xi + yj + zk (in 3D)",
            example: "The vector (3, 4) written in unit vector notation is 3i + 4j",
            advantage: "Makes the contribution of each axis component explicit"
        },
        boldAndArrow: {
            bold: "Vectors written in bold: a, b, v (used in typeset mathematics)",
            arrowNotation: "Vectors between named points: AB⃗ (arrow over two capital letters)",
            handwritten: "In handwriting, underline the letter: a with underline"
        }
    },

    vectorAdditionAndSubtraction: {
        geometricAddition: {
            triangleLaw: "Place the tail of b at the tip of a. The resultant a + b is the vector from the tail of a to the tip of b.",
            parallelogramLaw: "Place a and b tail-to-tail. The resultant a + b is the diagonal of the parallelogram formed by the two vectors.",
            commutativity: "a + b = b + a — vector addition is commutative",
            associativity: "(a + b) + c = a + (b + c) — vector addition is associative"
        },
        algebraicAddition: {
            rule: "Add corresponding components: if a = (a₁, a₂) and b = (b₁, b₂), then a + b = (a₁ + b₁, a₂ + b₂)",
            subtraction: "a − b = (a₁ − b₁, a₂ − b₂) — subtract corresponding components",
            workedExample: {
                problem: "Given a = (3, −1) and b = (−2, 4), find a + b, a − b, and 2a + 3b.",
                solution: [
                    "a + b = (3 + (−2), −1 + 4) = (1, 3)",
                    "a − b = (3 − (−2), −1 − 4) = (5, −5)",
                    "2a = (6, −2);  3b = (−6, 12)",
                    "2a + 3b = (6 + (−6), −2 + 12) = (0, 10)",
                    "Interpretation: 2a + 3b = (0, 10) points vertically upward with magnitude 10"
                ]
            }
        }
    },

    scalarMultiplication: {
        definition: "Multiplying a vector a by a scalar k produces a vector ka with magnitude |k||a| and the same direction as a if k > 0, or the opposite direction if k < 0",
        properties: [
            "k(a + b) = ka + kb — distributive over vector addition",
            "(k + m)a = ka + ma — distributive over scalar addition",
            "k(ma) = (km)a — associative with scalar multiplication",
            "1·a = a — multiplicative identity",
            "0·a = 0 — zero scalar gives zero vector",
            "−1·a = −a — gives the vector in the opposite direction with the same magnitude"
        ],
        workedExample: {
            problem: "Vector v = (−3, 6). Find: (a) 2v, (b) −(1/3)v, (c) the unit vector v̂.",
            solution: [
                "(a) 2v = 2(−3, 6) = (−6, 12) — same direction, double the magnitude",
                "(b) −(1/3)v = −(1/3)(−3, 6) = (1, −2) — opposite direction, one-third the magnitude",
                "(c) |v| = √((−3)² + 6²) = √(9 + 36) = √45 = 3√5",
                "    v̂ = v / |v| = (−3, 6) / (3√5) = (−1/√5, 2/√5)",
                "Verification: |v̂| = √(1/5 + 4/5) = √(5/5) = √1 = 1 ✓"
            ]
        }
    },

    magnitude: {
        formula2D: "|a| = √(a₁² + a₂²) — Pythagorean theorem applied to the component right triangle",
        formula3D: "|a| = √(a₁² + a₂² + a₃²) — three-dimensional extension of Pythagoras",
        unitVector: "â = a / |a| — divide every component by the magnitude to obtain a vector of length 1",
        workedExamples: [
            {
                problem: "Find the magnitude of a = (5, −12).",
                solution: [
                    "|a| = √(5² + (−12)²) = √(25 + 144) = √169 = 13",
                    "Note: this is a 5-12-13 Pythagorean triple — recognising such triples speeds up calculations"
                ]
            },
            {
                problem: "Find the unit vector in the direction of b = (2, −1, 2).",
                solution: [
                    "|b| = √(2² + (−1)² + 2²) = √(4 + 1 + 4) = √9 = 3",
                    "b̂ = (2/3, −1/3, 2/3)",
                    "Verification: |(2/3, −1/3, 2/3)| = √(4/9 + 1/9 + 4/9) = √(9/9) = 1 ✓"
                ]
            }
        ]
    },

    dotProduct: {
        algebraicDefinition: "a · b = a₁b₁ + a₂b₂ (in 2D) or a₁b₁ + a₂b₂ + a₃b₃ (in 3D) — multiply corresponding components and sum",
        geometricDefinition: "a · b = |a||b|cosθ where θ is the angle between the vectors when placed tail-to-tail (0° ≤ θ ≤ 180°)",
        result: "The dot product is always a SCALAR — it is not a vector",
        keyResults: {
            perpendicular: "If a · b = 0 and neither a nor b is the zero vector, then a ⊥ b (angle = 90°)",
            parallel: "If a · b = |a||b| (positive, maximum value), the vectors point in the same direction (θ = 0°)",
            antiParallel: "If a · b = −|a||b| (negative, minimum value), the vectors point in opposite directions (θ = 180°)"
        },
        angleBetweenVectors: {
            formula: "cosθ = (a · b) / (|a||b|), therefore θ = arccos(a · b / (|a||b|))",
            range: "θ is always taken as the angle between 0° and 180°"
        },
        workedExamples: [
            {
                problem: "Find a · b and the angle between a = (3, 4) and b = (−4, 3).",
                solution: [
                    "Step 1 — Dot product: a · b = (3)(−4) + (4)(3) = −12 + 12 = 0",
                    "Step 2 — Since a · b = 0 and both vectors are non-zero, a ⊥ b",
                    "Step 3 — The angle between them is exactly 90°",
                    "Geometric check: a = (3, 4) has slope 4/3; b = (−4, 3) has slope 3/(−4) = −3/4.",
                    "Product of slopes = (4/3)(−3/4) = −1 ✓ — confirms perpendicularity"
                ]
            },
            {
                problem: "Find the angle between p = (1, 2, 2) and q = (2, 1, −2).",
                solution: [
                    "Step 1 — Dot product: p · q = (1)(2) + (2)(1) + (2)(−2) = 2 + 2 − 4 = 0",
                    "Step 2 — |p| = √(1 + 4 + 4) = √9 = 3; |q| = √(4 + 1 + 4) = √9 = 3",
                    "Step 3 — cosθ = 0 / (3 × 3) = 0",
                    "Step 4 — θ = arccos(0) = 90°",
                    "These two 3D vectors are perpendicular despite neither lying in a coordinate plane"
                ]
            },
            {
                problem: "Find the angle between u = (1, 0) and v = (1, 1).",
                solution: [
                    "Step 1 — u · v = (1)(1) + (0)(1) = 1",
                    "Step 2 — |u| = 1; |v| = √(1 + 1) = √2",
                    "Step 3 — cosθ = 1 / (1 × √2) = 1/√2",
                    "Step 4 — θ = arccos(1/√2) = 45°",
                    "Interpretation: v = (1, 1) makes a 45° angle with the positive x-axis — consistent with its equal components"
                ]
            }
        ],
        properties: [
            "Commutative: a · b = b · a",
            "Distributive: a · (b + c) = a · b + a · c",
            "Scalar associativity: (ka) · b = k(a · b)",
            "Self dot product: a · a = |a|²",
            "NOT associative: (a · b) · c is not defined because a · b is a scalar, not a vector"
        ]
    },

    positionAndDisplacementVectors: {
        positionVector: {
            definition: "The position vector of point P is the vector OP⃗ from the origin O to P, denoted p",
            example: "If P = (3, −2), then p = (3, −2) = 3i − 2j"
        },
        displacementVector: {
            definition: "The vector from point A (with position vector a) to point B (with position vector b) is AB⃗ = b − a",
            workedExample: {
                problem: "A has position vector a = (1, 3) and B has position vector b = (5, −1). Find AB⃗ and |AB⃗|.",
                solution: [
                    "AB⃗ = b − a = (5 − 1, −1 − 3) = (4, −4)",
                    "|AB⃗| = √(4² + (−4)²) = √(16 + 16) = √32 = 4√2",
                    "Interpretation: to travel from A to B, move 4 units right and 4 units down — a displacement of 4√2 units"
                ]
            }
        },
        sectionFormula: {
            definition: "The point P that divides AB in the ratio m : n has position vector p = (na + mb) / (m + n)",
            midpoint: "When m = n = 1, the midpoint M has position vector m = (a + b) / 2",
            workedExample: {
                problem: "A has position vector (2, 1) and B has position vector (8, 7). Find: (a) the midpoint M, (b) the point P dividing AB in ratio 1:2.",
                solution: [
                    "(a) Midpoint: m = ((2 + 8)/2, (1 + 7)/2) = (5, 4)",
                    "(b) P divides AB in ratio 1:2, so m = 1, n = 2",
                    "    p = (2a + 1b) / (1 + 2) = (2(2,1) + 1(8,7)) / 3 = ((4,2) + (8,7)) / 3 = (12, 9) / 3 = (4, 3)",
                    "Check: AP⃗ = (4,3) − (2,1) = (2,2); PB⃗ = (8,7) − (4,3) = (4,4) = 2(2,2)",
                    "AP⃗ : PB⃗ = 1 : 2 ✓"
                ]
            }
        }
    },

    parallelAndPerpendicularVectors: {
        parallelVectors: {
            condition: "a is parallel to b if and only if a = kb for some scalar k ≠ 0",
            geometricMeaning: "Parallel vectors point in the same or exactly opposite directions; their direction angles differ by 0° or 180°",
            workedExample: {
                problem: "Determine whether a = (6, −4) and b = (−9, 6) are parallel.",
                solution: [
                    "Test: is a = kb? Try k = 6/(−9) = −2/3",
                    "k × b = (−2/3)(−9, 6) = (6, −4) = a ✓",
                    "The vectors are parallel (antiparallel — opposite directions since k < 0)"
                ]
            }
        },
        perpendicularVectors: {
            condition: "a ⊥ b if and only if a · b = 0",
            workedExample: {
                problem: "Find the value of t such that a = (t, 3) and b = (2, −4) are perpendicular.",
                solution: [
                    "For perpendicularity: a · b = 0",
                    "a · b = (t)(2) + (3)(−4) = 2t − 12 = 0",
                    "2t = 12 → t = 6",
                    "Verification: a = (6, 3), b = (2, −4): (6)(2) + (3)(−4) = 12 − 12 = 0 ✓"
                ]
            }
        }
    },

    vectorProjection: {
        definition: "The projection of a onto b is the component of a in the direction of b: proj_b(a) = (a · b / |b|²) b",
        scalarProjection: "The scalar projection of a onto b is the signed length: comp_b(a) = a · b / |b|",
        workedExample: {
            problem: "Find the projection of a = (3, 4) onto b = (1, 0).",
            solution: [
                "Step 1 — Dot product: a · b = (3)(1) + (4)(0) = 3",
                "Step 2 — |b|² = 1² + 0² = 1",
                "Step 3 — proj_b(a) = (3/1)(1, 0) = (3, 0)",
                "Interpretation: projecting a = (3, 4) onto the x-axis gives (3, 0) — the horizontal component of a, as expected"
            ]
        },
        geometricMeaning: "The projection of a onto b is the 'shadow' of a cast onto the line of b when light shines perpendicular to b. It extracts the portion of a that acts in the direction of b."
    },

    applicationsTopic: {
        resultantForces: {
            explanation: "When multiple forces act on an object, the resultant (net) force is found by vector addition of all individual force vectors. The object accelerates in the direction of the resultant.",
            workedExample: {
                problem: "Three forces act on an object: F₁ = (4, 3) N, F₂ = (−1, 5) N, F₃ = (2, −6) N. Find the resultant force and its magnitude.",
                solution: [
                    "Resultant R = F₁ + F₂ + F₃ = (4−1+2, 3+5−6) = (5, 2) N",
                    "|R| = √(5² + 2²) = √(25 + 4) = √29 ≈ 5.39 N",
                    "Direction: θ = arctan(2/5) ≈ 21.8° above the positive x-axis",
                    "The object accelerates at √29/m m/s² in the direction (5, 2)"
                ]
            }
        },
        velocityAndRelativeMotion: {
            explanation: "Velocity is a vector. When a body moves in a medium that is itself moving (e.g. a boat in a current, a plane in wind), the actual velocity is the vector sum of the body's velocity relative to the medium and the medium's velocity.",
            workedExample: {
                problem: "A swimmer can swim at 3 m/s due east relative to still water. A river current flows at 1.5 m/s due south. Find the swimmer's actual velocity and the angle their path makes with east.",
                solution: [
                    "Swimmer's velocity relative to water: v_s = (3, 0) m/s (east is positive x)",
                    "Current velocity: v_c = (0, −1.5) m/s (south is negative y)",
                    "Actual velocity: v = v_s + v_c = (3, −1.5) m/s",
                    "|v| = √(3² + 1.5²) = √(9 + 2.25) = √11.25 = 1.5√5 ≈ 3.35 m/s",
                    "Angle below east: θ = arctan(1.5/3) = arctan(0.5) ≈ 26.6°",
                    "The swimmer actually travels at ≈ 3.35 m/s in a direction 26.6° south of east"
                ]
            }
        },
        workDoneByForce: {
            explanation: "Work done by a constant force F acting over a displacement d is the dot product W = F · d. This captures the fact that only the component of force in the direction of motion does work.",
            workedExample: {
                problem: "A force F = (5, 3) N acts on an object that undergoes displacement d = (4, −1) m. Find the work done.",
                solution: [
                    "W = F · d = (5)(4) + (3)(−1) = 20 − 3 = 17 J",
                    "Note: the negative y-displacement and positive y-force partially cancel — the force has a component opposing the downward motion",
                    "If the force were perpendicular to displacement, W = 0 — no work done regardless of force magnitude"
                ]
            }
        }
    },

    topicSummary: {
        coreInsights: [
            "A vector encodes direction as well as magnitude — this single extension beyond scalars unlocks all of mechanics, electromagnetism, and multivariable calculus.",
            "Vector addition is both geometrically intuitive (triangle law, parallelogram law) and algebraically simple (add corresponding components) — both representations must be fluent.",
            "The magnitude formula is nothing more than Pythagoras' theorem applied to the component right triangle — it connects vectors directly to the geometry learned earlier.",
            "The dot product is the key tool for angle and perpendicularity — its output is a scalar, not a vector, and a · b = 0 is the algebraic test for 90°.",
            "Parallel vectors are scalar multiples of each other; perpendicular vectors have zero dot product — these two tests underpin almost all geometric vector problems.",
            "The displacement vector AB⃗ = b − a is one of the most used constructions in vector geometry — it represents the journey from A to B in terms of position vectors.",
            "Every real-world vector problem (force, velocity, work, navigation) reduces to vector addition, scalar multiplication, magnitude, or dot product — there are no other operations at this level.",
            "The projection of one vector onto another extracts 'how much of a acts in the direction of b' — this is the geometric heart of the dot product formula F · d = |F||d|cosθ."
        ],
        keyFormulas: {
            magnitude2D:        "|a| = √(a₁² + a₂²)",
            magnitude3D:        "|a| = √(a₁² + a₂² + a₃²)",
            unitVector:         "â = a / |a|",
            dotProductAlgebra:  "a · b = a₁b₁ + a₂b₂ (+ a₃b₃)",
            dotProductGeometry: "a · b = |a||b|cosθ",
            angleBetween:       "θ = arccos(a · b / (|a||b|))",
            displacement:       "AB⃗ = b − a",
            midpoint:           "m = (a + b) / 2",
            sectionFormula:     "p = (na + mb) / (m + n) for ratio m:n",
            projection:         "proj_b(a) = (a · b / |b|²) b",
            workDone:           "W = F · d"
        },
        commonMistakesToAvoid: [
            "Confusing speed (scalar) with velocity (vector) — speed is |v|, velocity is v",
            "Computing the dot product and expecting a vector result — the dot product is always a scalar",
            "Forgetting that AB⃗ = b − a, not a − b — direction matters; reversing gives the opposite vector",
            "Testing for parallel vectors using the dot product — the dot product being non-zero does not mean parallel; use a = kb",
            "Confusing unit vector calculation: dividing by |a|² instead of |a|",
            "Using the angle formula θ = arccos(...) and obtaining an obtuse angle — this is valid; the dot product can be negative giving θ > 90°, and this is geometrically correct"
        ],
        connections: [
            "Mechanics: every force, velocity, acceleration, and momentum is a vector; Newton's second law F = ma is a vector equation",
            "Geometry: dot product provides perpendicularity test; projection provides distance from a point to a line",
            "Linear Algebra: vectors are the objects of study; matrices transform vectors; eigenvectors are special vectors unchanged in direction by a transformation",
            "Calculus: the gradient ∇f is a vector; the directional derivative is a dot product; line integrals integrate a vector field along a path",
            "Machine Learning: data points are vectors in high-dimensional space; similarity between documents or embeddings is measured by the cosine of the angle between vectors (cosine similarity = a · b / (|a||b|))"
        ],
        examReadinessChecklist: [
            "Can you add, subtract, and scalar-multiply vectors both algebraically (component by component) and geometrically (triangle/parallelogram law)?",
            "Can you compute the magnitude of a 2D and a 3D vector from components?",
            "Can you find the unit vector in any given direction?",
            "Can you compute the dot product algebraically and use the formula to find the angle between two vectors?",
            "Can you test two vectors for parallelism (scalar multiple test) and perpendicularity (dot product = 0)?",
            "Can you find the displacement vector AB⃗ and the position vector of a point dividing a segment in a given ratio?",
            "Can you apply vectors to resolve a resultant force, find actual velocity in a current/wind problem, or calculate work done?"
        ]
    }
},


algebraicInequalities: {
    title: "Algebraic Inequalities: Linear, Compound, and Absolute Value",

    databaseLinks: {
        misconceptions: [
            'inequalityFundamentals',
            'linearInequalities',
            'compoundInequalities',
            'absoluteValueInequalities',
            'inequalitiesInContext'
        ],
        contextualScenarios: [
            'inequalityFundamentals',
            'linearInequalities',
            'compoundInequalities',
            'inequalitiesInContext'
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
            'inequalityFundamentals',
            'linearInequalities',
            'compoundInequalities',
            'absoluteValueInequalities'
        ]
    },

    conceptLinks: {
        "An inequality expresses a relationship where two expressions are not necessarily equal": {
            misconceptions:       ['inequalityFundamentals'],
            scenarios:            ['inequalityFundamentals'],
            studyTips:            ['diagrams', 'comparisonTables'],
            assessmentRubrics:    ['remember', 'understand'],
            assessmentQuestions:  ['inequalityFundamentals']
        },
        "The solution set of a linear inequality is an infinite range of values, not a single point": {
            misconceptions:       ['linearInequalities'],
            scenarios:            ['linearInequalities'],
            studyTips:            ['diagrams', 'flashcards'],
            assessmentRubrics:    ['remember', 'understand', 'apply'],
            assessmentQuestions:  ['linearInequalities']
        },
        "Multiplying or dividing both sides of an inequality by a negative number reverses the inequality sign": {
            misconceptions:       ['linearInequalities', 'inequalityFundamentals'],
            scenarios:            ['linearInequalities'],
            studyTips:            ['mnemonics', 'flashcards', 'practiceRoutines'],
            assessmentRubrics:    ['understand', 'apply', 'evaluate'],
            assessmentQuestions:  ['linearInequalities']
        },
        "A compound inequality joins two inequalities with 'and' (intersection) or 'or' (union)": {
            misconceptions:       ['compoundInequalities'],
            scenarios:            ['compoundInequalities'],
            studyTips:            ['diagrams', 'comparisonTables', 'graphingPractice'],
            assessmentRubrics:    ['apply', 'analyze', 'evaluate'],
            assessmentQuestions:  ['compoundInequalities']
        },
        "An absolute value inequality splits into two separate cases depending on the direction of the inequality": {
            misconceptions:       ['absoluteValueInequalities'],
            scenarios:            ['inequalitiesInContext'],
            studyTips:            ['comparisonTables', 'mnemonics', 'workedExampleAnalysis'],
            assessmentRubrics:    ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions:  ['absoluteValueInequalities']
        }
    },

    topicIntroduction: {
        overview: "An inequality is a mathematical statement that compares two expressions using the symbols <, ≤, >, or ≥. Where an equation asks 'when are these two expressions equal?', an inequality asks 'when is one expression greater than or less than the other?' The answer is never a single point but always a range — sometimes a simple ray on a number line, sometimes a bounded interval, sometimes the union of two disjoint regions. This lesson develops fluency in solving, graphing, and interpreting linear inequalities, compound inequalities, and absolute value inequalities, and connects these skills to real-world constraint modelling.",
        whyItMatters: "Inequalities are the mathematical language of constraints and feasibility. Every budget ('spend no more than £500'), every safety standard ('temperature must not exceed 80°C'), every eligibility criterion ('score at least 70%'), and every optimisation problem ('maximise profit subject to limited resources') is expressed as an inequality. Linear programming — the mathematical foundation of supply chain management, airline scheduling, and financial portfolio optimisation — is built entirely on systems of linear inequalities. Mastery of inequalities is essential for statistics, calculus, economics, and engineering.",
        bigPicture: "Solving an inequality is structurally identical to solving an equation, with one critical additional rule: the direction of the inequality reverses whenever both sides are multiplied or divided by a negative number. This single rule — so easy to state, so frequently forgotten — is the defining feature that distinguishes inequalities from equations. Graphically, the solution to a one-variable inequality is a ray or interval on a number line. In two variables, it is a half-plane bounded by the corresponding linear equation. Compound inequalities combine two constraints, producing either an intersection ('and') or a union ('or') of solution sets. Absolute value inequalities introduce the concept of distance from a fixed point on the number line, splitting into two cases that require separate treatment.",
        priorKnowledge: [
            "Solving linear equations: inverse operations, maintaining equality",
            "Order of operations (BIDMAS/PEMDAS)",
            "The number line: direction, magnitude, positive and negative numbers",
            "Coordinate geometry: the x-y plane for two-variable inequalities",
            "Absolute value as distance from zero: |a| = a if a ≥ 0; |a| = −a if a < 0",
            "Set notation: union (∪) and intersection (∩) concepts"
        ],
        topicRoadmap: [
            "Inequality notation and the meaning of each symbol",
            "Representing inequalities on a number line (open and closed circles)",
            "Solving one-step and multi-step linear inequalities",
            "The sign-reversal rule: when and why the inequality flips",
            "Compound inequalities: 'and' (conjunction) and 'or' (disjunction)",
            "Absolute value inequalities: the 'less than' case and the 'greater than' case",
            "Graphing linear inequalities in two variables: boundary line and shading",
            "Real-world constraint modelling with inequalities"
        ]
    },

    concepts: [
        "An inequality expresses a relationship where two expressions are not necessarily equal",
        "The solution set of a linear inequality is an infinite range of values, not a single point",
        "Multiplying or dividing both sides of an inequality by a negative number reverses the inequality sign",
        "A compound inequality joins two inequalities with 'and' (intersection) or 'or' (union)",
        "An absolute value inequality splits into two separate cases depending on the direction of the inequality",
        "A linear inequality in two variables defines a half-plane on the coordinate plane"
    ],

    theory: "An inequality is any mathematical statement of the form f(x) < g(x), f(x) ≤ g(x), f(x) > g(x), or f(x) ≥ g(x). The solution set is the set of all real numbers x that make the inequality true. For linear inequalities, this set is always a connected interval or ray. The fundamental theorem governing inequality manipulation is the Order-Reversing Property of Multiplication: for real numbers a, b, c with c < 0, if a < b then ac > bc. This is the formal basis for the sign-reversal rule and distinguishes inequality algebra from equation algebra.",

    keyDefinitions: {
        "Inequality": "A mathematical statement that two expressions are related by <, ≤, >, or ≥ rather than =",
        "Solution Set": "The complete set of all values that make an inequality true; for linear inequalities, always an interval or ray",
        "Strict Inequality": "An inequality using < or > that excludes the boundary value; represented by an open circle on the number line",
        "Non-strict Inequality": "An inequality using ≤ or ≥ that includes the boundary value; represented by a closed circle on the number line",
        "Compound Inequality": "Two inequalities joined by 'and' (∩, intersection — both must be satisfied) or 'or' (∪, union — at least one must be satisfied)",
        "Conjunction ('and')": "A compound inequality requiring both conditions to be true simultaneously; the solution is the intersection of both individual solution sets",
        "Disjunction ('or')": "A compound inequality requiring at least one condition to be true; the solution is the union of both individual solution sets",
        "Absolute Value": "The distance of a number from zero on the number line; |x| = x if x ≥ 0, |x| = −x if x < 0; always non-negative",
        "Boundary Value": "The value at which the inequality changes from true to false; corresponds to the equals-sign version of the inequality",
        "Half-Plane": "The region on one side of a line in the coordinate plane; the solution set of a linear inequality in two variables",
        "Interval Notation": "A compact way to express a solution set: (a, b) for a < x < b; [a, b] for a ≤ x ≤ b; parentheses exclude endpoints, brackets include them",
        "Sign-Reversal Rule": "The rule that the inequality symbol reverses direction when both sides are multiplied or divided by a negative number"
    },

    inequalityNotation: {
        symbols: {
            lessThan:              { symbol: "<",  meaning: "strictly less than",         numberLine: "open circle, shade left",   example: "x < 3: all values to the left of 3, not including 3" },
            lessThanOrEqualTo:     { symbol: "≤",  meaning: "less than or equal to",      numberLine: "closed circle, shade left",  example: "x ≤ 3: all values to the left of 3, including 3" },
            greaterThan:           { symbol: ">",  meaning: "strictly greater than",       numberLine: "open circle, shade right",  example: "x > −1: all values to the right of −1, not including −1" },
            greaterThanOrEqualTo:  { symbol: "≥",  meaning: "greater than or equal to",   numberLine: "closed circle, shade right", example: "x ≥ −1: all values to the right of −1, including −1" }
        },
        intervalNotation: {
            openInterval:    { notation: "(a, b)",   meaning: "a < x < b — both endpoints excluded" },
            closedInterval:  { notation: "[a, b]",   meaning: "a ≤ x ≤ b — both endpoints included" },
            halfOpenLeft:    { notation: "[a, b)",   meaning: "a ≤ x < b — left included, right excluded" },
            halfOpenRight:   { notation: "(a, b]",   meaning: "a < x ≤ b — left excluded, right included" },
            rayRight:        { notation: "(a, ∞)",   meaning: "x > a — all values greater than a" },
            rayRightClosed:  { notation: "[a, ∞)",   meaning: "x ≥ a — all values greater than or equal to a" },
            rayLeft:         { notation: "(−∞, a)",  meaning: "x < a — all values less than a" },
            rayLeftClosed:   { notation: "(−∞, a]",  meaning: "x ≤ a — all values less than or equal to a" }
        },
        note: "∞ always takes a parenthesis, never a bracket — infinity is not a value that can be reached or included"
    },

    solvingLinearInequalities: {
        principle: "Solve a linear inequality using exactly the same steps as solving a linear equation, with one additional rule: whenever you multiply or divide BOTH sides by a NEGATIVE number, the inequality sign must be reversed.",
        signReversalRule: {
            statement: "If a < b and c < 0, then ac > bc. Dividing or multiplying by a negative number reverses the order relationship.",
            whyItHappens: "Multiplying by −1 reflects all numbers across zero on the number line, swapping their order. The number that was further left (more negative, therefore smaller) is now further right (less negative, therefore larger). The order of the entire number line flips.",
            workedDemonstration: {
                problem: "Demonstrate the reversal rule starting from the true statement 2 < 5.",
                solution: [
                    "True statement: 2 < 5",
                    "Multiply both sides by −1: −2 and −5",
                    "On the number line: −5 is to the left of −2, so −5 < −2",
                    "Therefore: −2 > −5 — the direction has reversed",
                    "The inequality 2 < 5 becomes −2 > −5 after multiplying by −1 ✓"
                ]
            }
        },
        steps: [
            "Simplify each side separately (expand brackets, collect like terms)",
            "Move variable terms to one side using inverse operations",
            "Move constant terms to the other side using inverse operations",
            "If the coefficient of the variable is negative, divide by it and REVERSE the inequality sign",
            "If the coefficient is positive, divide normally — sign stays the same",
            "Express the solution in inequality notation and/or interval notation",
            "Graph on a number line",
            "Verify by testing a value inside the solution set and a value outside it"
        ],
        workedExamples: [
            {
                type: "One-step inequality",
                problem: "Solve: x + 5 > 9",
                solution: [
                    "Step 1 — Subtract 5 from both sides: x + 5 − 5 > 9 − 5",
                    "Step 2 — Simplify: x > 4",
                    "Interval notation: (4, ∞)",
                    "Number line: open circle at 4, shade to the right",
                    "Verify: test x = 6 (inside): 6 + 5 = 11 > 9 ✓  |  test x = 2 (outside): 2 + 5 = 7 > 9 is FALSE ✓"
                ]
            },
            {
                type: "Two-step inequality (positive coefficient)",
                problem: "Solve: 3x − 7 ≤ 8",
                solution: [
                    "Step 1 — Add 7 to both sides: 3x ≤ 15",
                    "Step 2 — Divide both sides by 3 (positive — sign unchanged): x ≤ 5",
                    "Interval notation: (−∞, 5]",
                    "Number line: closed circle at 5, shade to the left",
                    "Verify: test x = 4 (inside): 3(4) − 7 = 5 ≤ 8 ✓  |  test x = 7 (outside): 3(7) − 7 = 14 ≤ 8 is FALSE ✓"
                ]
            },
            {
                type: "Two-step inequality (negative coefficient — sign reversal required)",
                problem: "Solve: −4x + 3 > 11",
                solution: [
                    "Step 1 — Subtract 3 from both sides: −4x > 8",
                    "Step 2 — Divide both sides by −4 (NEGATIVE — REVERSE the inequality sign): x < −2",
                    "Interval notation: (−∞, −2)",
                    "Number line: open circle at −2, shade to the left",
                    "Verify: test x = −5 (inside): −4(−5) + 3 = 20 + 3 = 23 > 11 ✓  |  test x = 0 (outside): −4(0) + 3 = 3 > 11 is FALSE ✓"
                ]
            },
            {
                type: "Inequality with variables on both sides",
                problem: "Solve: 5x − 3 ≥ 2x + 9",
                solution: [
                    "Step 1 — Subtract 2x from both sides: 3x − 3 ≥ 9",
                    "Step 2 — Add 3 to both sides: 3x ≥ 12",
                    "Step 3 — Divide both sides by 3 (positive — sign unchanged): x ≥ 4",
                    "Interval notation: [4, ∞)",
                    "Number line: closed circle at 4, shade to the right",
                    "Verify: test x = 6 (inside): 5(6)−3 = 27 ≥ 2(6)+9 = 21 ✓  |  test x = 1 (outside): 5(1)−3 = 2 ≥ 2(1)+9 = 11 is FALSE ✓"
                ]
            },
            {
                type: "Inequality with brackets",
                problem: "Solve: 2(3 − x) < 4(x + 1)",
                solution: [
                    "Step 1 — Expand brackets: 6 − 2x < 4x + 4",
                    "Step 2 — Add 2x to both sides: 6 < 6x + 4",
                    "Step 3 — Subtract 4 from both sides: 2 < 6x",
                    "Step 4 — Divide both sides by 6 (positive — sign unchanged): 1/3 < x, equivalently x > 1/3",
                    "Interval notation: (1/3, ∞)",
                    "Number line: open circle at 1/3, shade to the right",
                    "Verify: test x = 1 (inside): 2(3−1) = 4 < 4(1+1) = 8 ✓  |  test x = 0 (outside): 2(3) = 6 < 4(1) = 4 is FALSE ✓"
                ]
            },
            {
                type: "Inequality with fractions",
                problem: "Solve: x/2 − 3 ≥ x/4 + 1",
                solution: [
                    "Step 1 — Multiply all terms by 4 (LCM of denominators) to clear fractions: 2x − 12 ≥ x + 4",
                    "Step 2 — Subtract x from both sides: x − 12 ≥ 4",
                    "Step 3 — Add 12 to both sides: x ≥ 16",
                    "Interval notation: [16, ∞)",
                    "Number line: closed circle at 16, shade to the right",
                    "Verify: test x = 20 (inside): 10 − 3 = 7 ≥ 5 + 1 = 6 ✓  |  test x = 10 (outside): 5 − 3 = 2 ≥ 2.5 + 1 = 3.5 is FALSE ✓"
                ]
            }
        ]
    },

    compoundInequalities: {
        overview: "A compound inequality combines two inequality statements using the connectives 'and' or 'or'. The two types have fundamentally different solution sets: 'and' requires both conditions simultaneously (intersection), 'or' requires at least one condition (union).",
        andInequalities: {
            definition: "Both inequalities must be satisfied simultaneously. The solution set is the intersection of the two individual solution sets — only values that satisfy BOTH conditions.",
            doubleInequality: "A compact form a < x < b (or with ≤) means 'x is greater than a AND less than b'. All three parts of the inequality must be kept balanced: operations are applied to all three sections simultaneously.",
            workedExample: {
                problem: "Solve: −3 < 2x + 1 ≤ 9",
                solution: [
                    "Step 1 — Subtract 1 from all three sections: −3 − 1 < 2x ≤ 9 − 1",
                    "Step 2 — Simplify: −4 < 2x ≤ 8",
                    "Step 3 — Divide all three sections by 2 (positive — signs unchanged): −2 < x ≤ 4",
                    "Interval notation: (−2, 4]",
                    "Number line: open circle at −2, closed circle at 4, shade between them",
                    "Verify: test x = 0 (inside): −3 < 2(0)+1 = 1 ≤ 9 ✓  |  test x = 5 (outside): −3 < 11 but 11 ≤ 9 is FALSE ✓  |  test x = −3 (outside): −3 < −5 is FALSE ✓"
                ]
            },
            separateAndExample: {
                problem: "Solve: 2x + 3 > 7  AND  3x − 1 ≤ 14",
                solution: [
                    "Inequality 1: 2x + 3 > 7 → 2x > 4 → x > 2",
                    "Inequality 2: 3x − 1 ≤ 14 → 3x ≤ 15 → x ≤ 5",
                    "Intersection (AND): x > 2 AND x ≤ 5 → 2 < x ≤ 5",
                    "Interval notation: (2, 5]",
                    "Number line: open circle at 2, closed circle at 5, shade between them",
                    "Verify: test x = 3 (inside both): 2(3)+3=9>7 ✓ and 3(3)−1=8≤14 ✓  |  test x = 1 (fails first): 2+3=5>7 is FALSE"
                ]
            }
        },
        orInequalities: {
            definition: "At least one inequality must be satisfied. The solution set is the union of the two individual solution sets — all values that satisfy EITHER condition (or both).",
            workedExample: {
                problem: "Solve: 2x − 1 < 3  OR  x + 4 ≥ 9",
                solution: [
                    "Inequality 1: 2x − 1 < 3 → 2x < 4 → x < 2",
                    "Inequality 2: x + 4 ≥ 9 → x ≥ 5",
                    "Union (OR): x < 2 OR x ≥ 5",
                    "Interval notation: (−∞, 2) ∪ [5, ∞)",
                    "Number line: open circle at 2 shading left, closed circle at 5 shading right — two separate shaded rays with a gap between 2 and 5",
                    "Verify: test x = 0 (satisfies first): 2(0)−1=−1<3 ✓  |  test x = 6 (satisfies second): 6+4=10≥9 ✓  |  test x = 3 (satisfies neither): 2(3)−1=5<3 is FALSE and 3+4=7≥9 is FALSE ✓"
                ]
            },
            specialCase: "When the union of an 'or' compound inequality covers the entire number line (e.g. x < 5 OR x ≥ −2), every real number satisfies at least one condition and the solution set is all real numbers (−∞, ∞)."
        },
        andVsOrComparison: {
            and: { connective: "AND / ∩", description: "Both conditions true", graphAppearance: "Bounded segment between two values (if solution exists)", intervalForm: "(a, b) or [a, b] or mixed", noSolutionPossible: "Yes — if the two conditions are contradictory (e.g. x > 5 AND x < 2)" },
            or:  { connective: "OR / ∪",  description: "At least one condition true", graphAppearance: "Two separate rays pointing outward (typically)", intervalForm: "(−∞, a) ∪ (b, ∞)", noSolutionPossible: "Extremely rare — solution is all reals if regions overlap or are adjacent" }
        }
    },

    absoluteValueInequalities: {
        overview: "Absolute value measures distance from zero on the number line. |x| = k means x is exactly k units from zero. |x| < k means x is within k units of zero. |x| > k means x is more than k units from zero. This distance interpretation is the key to splitting absolute value inequalities into two algebraic cases.",
        distanceInterpretation: {
            lessThan:    "|x| < k means the distance from x to 0 is less than k — so x is between −k and k: −k < x < k (an 'and' / intersection)",
            greaterThan: "|x| > k means the distance from x to 0 is greater than k — so x is either below −k or above k: x < −k OR x > k (an 'or' / union)"
        },
        lessThanCase: {
            rule: "|f(x)| < k  ↔  −k < f(x) < k  (for k > 0)",
            ruleNonStrict: "|f(x)| ≤ k  ↔  −k ≤ f(x) ≤ k",
            memoryAid: "'Less than' absolute value → 'and' compound inequality → bounded interval → one connected region on the number line",
            workedExample: {
                problem: "Solve: |2x − 3| < 7",
                solution: [
                    "Step 1 — Apply the less-than rule: −7 < 2x − 3 < 7",
                    "Step 2 — Add 3 to all three sections: −4 < 2x < 10",
                    "Step 3 — Divide all sections by 2: −2 < x < 5",
                    "Interval notation: (−2, 5)",
                    "Number line: open circles at −2 and 5, shade between them",
                    "Verify: test x = 0 (inside): |2(0)−3| = |−3| = 3 < 7 ✓  |  test x = 6 (outside): |2(6)−3| = |9| = 9 < 7 is FALSE ✓"
                ]
            }
        },
        greaterThanCase: {
            rule: "|f(x)| > k  ↔  f(x) < −k  OR  f(x) > k  (for k > 0)",
            ruleNonStrict: "|f(x)| ≥ k  ↔  f(x) ≤ −k  OR  f(x) ≥ k",
            memoryAid: "'Greater than' absolute value → 'or' compound inequality → two outward rays → two separate regions on the number line",
            workedExample: {
                problem: "Solve: |3x + 1| ≥ 8",
                solution: [
                    "Step 1 — Apply the greater-than rule: 3x + 1 ≤ −8  OR  3x + 1 ≥ 8",
                    "Case 1: 3x + 1 ≤ −8 → 3x ≤ −9 → x ≤ −3",
                    "Case 2: 3x + 1 ≥ 8 → 3x ≥ 7 → x ≥ 7/3",
                    "Solution: x ≤ −3 OR x ≥ 7/3",
                    "Interval notation: (−∞, −3] ∪ [7/3, ∞)",
                    "Number line: closed circle at −3 shading left, closed circle at 7/3 shading right",
                    "Verify: test x = −4 (inside left): |3(−4)+1| = |−11| = 11 ≥ 8 ✓  |  test x = 3 (inside right): |3(3)+1| = 10 ≥ 8 ✓  |  test x = 0 (gap): |1| = 1 ≥ 8 is FALSE ✓"
                ]
            }
        },
        specialCases: {
            negativeRightHandSide: {
                description: "If k < 0 (the right-hand side of the absolute value inequality is negative), use these rules without solving:",
                lessThan:    "|f(x)| < k has NO SOLUTION when k < 0 — absolute value is always ≥ 0 and can never be less than a negative number",
                greaterThan: "|f(x)| > k is ALL REAL NUMBERS when k < 0 — absolute value is always ≥ 0 and always exceeds any negative number",
                workedExample: {
                    problem: "Solve: (a) |5x − 2| < −3  and  (b) |5x − 2| > −3",
                    solution: [
                        "(a) |5x − 2| < −3: The absolute value is always ≥ 0, so it can never be less than −3. No solution. Solution set: ∅",
                        "(b) |5x − 2| > −3: The absolute value is always ≥ 0, which is always greater than −3. True for all real x. Solution set: (−∞, ∞)"
                    ]
                }
            },
            zeroRightHandSide: {
                lessThan:    "|f(x)| < 0 has NO SOLUTION — absolute value equals zero only at one point, never strictly less than zero",
                equalTo:     "|f(x)| = 0 has exactly one solution: f(x) = 0",
                greaterThan: "|f(x)| > 0 is satisfied by all x except where f(x) = 0"
            }
        }
    },

    graphingInequalitiesTwoVariables: {
        overview: "A linear inequality in two variables, such as y > 2x − 3, has a solution set that is an entire half-plane — all the points on one side of the boundary line. The boundary line is the graph of the corresponding linear equation.",
        procedure: [
            "Replace the inequality sign with = and graph the boundary line using standard techniques (slope-intercept or intercept method)",
            "Draw the boundary line as DASHED for strict inequalities (< or >) — points on the line are not solutions",
            "Draw the boundary line as SOLID for non-strict inequalities (≤ or ≥) — points on the line are solutions",
            "Select a test point not on the line — the origin (0, 0) is almost always the easiest choice, unless the line passes through the origin",
            "Substitute the test point into the original inequality",
            "If the test point satisfies the inequality, shade the region containing it; if not, shade the opposite region"
        ],
        workedExample: {
            problem: "Graph the inequality 3x − 2y ≤ 6",
            solution: [
                "Step 1 — Boundary line: graph 3x − 2y = 6",
                "  x-intercept (y=0): 3x = 6 → x = 2 → point (2, 0)",
                "  y-intercept (x=0): −2y = 6 → y = −3 → point (0, −3)",
                "Step 2 — Line type: inequality is ≤ (non-strict) → draw a SOLID line through (2, 0) and (0, −3)",
                "Step 3 — Test point (0, 0): substitute into 3x − 2y ≤ 6 → 3(0) − 2(0) = 0 ≤ 6 → TRUE",
                "Step 4 — Shade the region containing (0, 0) — the region above and to the left of the boundary line",
                "Verify with a second point in the shaded region, e.g. (0, 2): 3(0) − 2(2) = −4 ≤ 6 ✓",
                "Verify with a point in the unshaded region, e.g. (4, 0): 3(4) − 2(0) = 12 ≤ 6 is FALSE ✓"
            ]
        },
        systemOfTwoInequalities: {
            description: "The solution of a system of two linear inequalities in two variables is the region where both shaded half-planes overlap — the intersection of the two solution sets.",
            workedExample: {
                problem: "Graph the system: y < x + 2  and  y ≥ −2x + 1",
                solution: [
                    "Inequality 1: boundary y = x + 2 (DASHED, strict <); test (0,0): 0 < 0+2 = 2 TRUE → shade below this line",
                    "Inequality 2: boundary y = −2x + 1 (SOLID, non-strict ≥); test (0,0): 0 ≥ −2(0)+1 = 1 FALSE → shade above this line",
                    "Solution region: the overlap of 'below y = x+2' and 'above y = −2x+1'",
                    "Find the intersection of the boundaries: x+2 = −2x+1 → 3x = −1 → x = −1/3, y = −1/3+2 = 5/3 → vertex at (−1/3, 5/3)",
                    "Verify a point in the overlap region, e.g. (0, 1.5): 1.5 < 0+2=2 TRUE ✓ and 1.5 ≥ −2(0)+1=1 TRUE ✓"
                ]
            }
        }
    },

    writingInequalitiesFromContexts: {
        procedure: [
            "Identify the quantity to be constrained (assign a variable)",
            "Identify the constraint type: maximum ('no more than', 'at most' → ≤), minimum ('at least', 'no fewer than' → ≥), strict limit ('less than', 'more than' → <, >)",
            "Translate the constraint into an inequality",
            "Solve the inequality if required",
            "Interpret the solution in context — include units and state whether the boundary value is included"
        ],
        keyPhrases: {
            "at least":       "≥",
            "no less than":   "≥",
            "a minimum of":   "≥",
            "at most":        "≤",
            "no more than":   "≤",
            "a maximum of":   "≤",
            "fewer than":     "<",
            "more than":      ">",
            "does not exceed": "≤",
            "exceeds":        ">"
        },
        workedExample: {
            problem: "A lift (elevator) has a maximum capacity of 800 kg. A family of four adults board, each weighing approximately a kg. An additional piece of luggage weighs 60 kg. Write and solve an inequality for the maximum weight per adult.",
            solution: [
                "Step 1 — Define the variable: a = average adult weight (kg)",
                "Step 2 — Identify the constraint: total weight must not exceed 800 kg → ≤ 800",
                "Step 3 — Write the inequality: 4a + 60 ≤ 800",
                "Step 4 — Subtract 60: 4a ≤ 740",
                "Step 5 — Divide by 4: a ≤ 185",
                "Interpretation: each adult must weigh at most 185 kg for the lift to operate safely. The boundary value 185 kg is included (≤) — exactly 185 kg per person is permissible."
            ]
        }
    },

    topicSummary: {
        coreInsights: [
            "An inequality's solution is a set — a range of values — not a single number. This is the most fundamental difference from equations and must shape every interpretation.",
            "The sign-reversal rule (flip the inequality when multiplying or dividing by a negative number) is the single most important and most forgotten rule in all of inequality algebra. Write it down before every problem until it is automatic.",
            "An 'and' compound inequality produces an intersection — values must satisfy both conditions simultaneously. Graphically, this is a bounded segment (if solutions exist at all).",
            "An 'or' compound inequality produces a union — values need satisfy only one condition. Graphically, this is typically two outward-pointing rays with a gap between them.",
            "Absolute value inequalities reduce to compound inequalities: |f(x)| < k gives a bounded 'and' interval; |f(x)| > k gives an 'or' with two outward rays. The direction of the original inequality determines the type of compound inequality.",
            "For two-variable inequalities, the boundary line is dashed for strict inequalities and solid for non-strict; the solution half-plane is identified by testing a single point.",
            "When the right-hand side of an absolute value inequality is negative, no algebra is needed: |expression| < negative has no solution; |expression| > negative is all real numbers.",
            "Every real-world constraint — budget, capacity, eligibility, safety — is an inequality. Reading the correct symbol from context words like 'at most', 'at least', 'no more than', 'exceeds' is an essential modelling skill."
        ],
        keyRules: {
            signReversal:         "Multiply or divide by negative → reverse the inequality sign",
            absoluteValueLess:    "|f(x)| < k  ↔  −k < f(x) < k  (and-inequality, bounded interval)",
            absoluteValueGreater: "|f(x)| > k  ↔  f(x) < −k OR f(x) > k  (or-inequality, two rays)",
            andSolution:          "x > a AND x < b  →  a < x < b  (intersection)",
            orSolution:           "x < a OR x > b  →  (−∞, a) ∪ (b, ∞)  (union)",
            boundaryLine:         "Dashed for strict (<, >); solid for non-strict (≤, ≥)"
        },
        commonMistakesToAvoid: [
            "Forgetting to reverse the inequality sign when dividing by a negative coefficient",
            "Confusing 'and' (intersection, bounded) with 'or' (union, two rays) in compound inequalities",
            "Using a bracket instead of a parenthesis at infinity in interval notation",
            "Attempting to apply the absolute value split without first isolating the absolute value expression",
            "Writing |f(x)| > k as a single double-inequality (−k < f(x) < k) instead of an 'or' — this is the error pattern for less-than, not greater-than",
            "Choosing a test point that lies on the boundary line — the test point must be strictly off the line",
            "Stopping after finding the solution without graphing or verifying — always test a point inside and a point outside the solution set"
        ],
        connections: [
            "Linear equations: inequality solving mirrors equation solving except for the sign-reversal rule — fluency in equations is a prerequisite",
            "Number line and real number system: solution sets are subsets of ℝ; interval notation is the standard compact representation",
            "Linear programming (Operations Research): systems of linear inequalities in two or more variables define feasible regions; optimising an objective function over a feasible region is the core of linear programming",
            "Statistics: confidence intervals are compound inequalities (μ − E ≤ x ≤ μ + E); tolerance intervals in engineering are absolute value inequalities",
            "Calculus: inequalities define domains and ranges; the epsilon-delta definition of a limit is built entirely from absolute value inequalities",
            "Computer science: conditional logic (if/else) is the computational implementation of inequality constraints"
        ],
        examReadinessChecklist: [
            "Can you solve a multi-step linear inequality with a negative coefficient, correctly reversing the sign, without being prompted?",
            "Can you express a solution in all three forms: inequality notation (x > 3), interval notation ([3, ∞)), and number line graph?",
            "Can you solve a double-inequality (compound 'and') by operating on all three sections simultaneously?",
            "Can you solve a compound 'or' inequality, graph both rays, and express the solution as a union in interval notation?",
            "Can you identify whether an absolute value inequality produces a bounded interval or two outward rays before beginning to solve?",
            "Can you handle the special cases where the right-hand side of an absolute value inequality is zero or negative?",
            "Can you graph a two-variable inequality with the correct boundary line style (dashed or solid) and correct shading?",
            "Can you translate real-world constraint language ('at most', 'at least', 'no more than') into the correct inequality symbol?"
        ]
    }
},

simplification: {
    title: "Simplification: Algebraic Expressions, Like Terms, and Index Laws",

    databaseLinks: {
        misconceptions: [
            'likeTerm',
            'expandingBrackets',
            'indexLaws',
            'fractionSimplification',
            'algebraicFractions'
        ],
        contextualScenarios: [
            'likeTerm',
            'expandingBrackets',
            'indexLaws',
            'fractionSimplification'
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
            'likeTerm',
            'expandingBrackets',
            'indexLaws',
            'fractionSimplification'
        ]
    },

    conceptLinks: {
        "Like terms share identical variable parts and can be combined by adding or subtracting their coefficients": {
            misconceptions:      ['likeTerm'],
            scenarios:           ['likeTerm'],
            studyTips:           ['diagrams', 'flashcards'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['likeTerm']
        },
        "Expanding brackets applies the distributive law to every term inside the bracket": {
            misconceptions:      ['expandingBrackets'],
            scenarios:           ['expandingBrackets'],
            studyTips:           ['diagrams', 'comparisonTables'],
            assessmentRubrics:   ['understand', 'apply'],
            assessmentQuestions: ['expandingBrackets']
        },
        "Index laws govern how powers of the same base combine under multiplication, division, and further exponentiation": {
            misconceptions:      ['indexLaws'],
            scenarios:           ['indexLaws'],
            studyTips:           ['comparisonTables', 'flashcards', 'mnemonics'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['indexLaws']
        },
        "A numerical fraction is fully simplified when the numerator and denominator share no common factor other than 1": {
            misconceptions:      ['fractionSimplification'],
            scenarios:           ['fractionSimplification'],
            studyTips:           ['flashcards', 'practiceRoutines'],
            assessmentRubrics:   ['understand', 'apply'],
            assessmentQuestions: ['fractionSimplification']
        },
        "An algebraic fraction is simplified by cancelling common factors from the numerator and denominator, never common terms": {
            misconceptions:      ['algebraicFractions'],
            scenarios:           ['fractionSimplification'],
            studyTips:           ['workedExampleAnalysis', 'comparisonTables'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions: ['fractionSimplification']
        }
    },

    topicIntroduction: {
        overview: "Simplification is the craft of rewriting an algebraic expression in its most compact and transparent form without changing its value. It encompasses collecting like terms, applying the distributive law to expand and factor brackets, manipulating indices, and reducing numerical and algebraic fractions. Every subsequent topic in algebra — solving equations, graphing, calculus — depends on the ability to simplify fluently and accurately.",
        whyItMatters: "An unsimplified expression obscures structure and makes further work error-prone and slow. A simplified expression reveals relationships, allows comparison, and is required before most algebraic procedures can proceed. Simplification is not a preliminary chore — it is the mechanism by which algebra becomes legible. Scientists, engineers, and programmers simplify expressions every time they reduce a formula, optimise a computation, or refactor code.",
        bigPicture: "All simplification rests on two foundational laws: the distributive law (a(b + c) = ab + ac) and the laws of indices (aᵐ × aⁿ = aᵐ⁺ⁿ, etc.). Everything else — collecting like terms, expanding brackets, simplifying fractions — is an application of these two laws in various combinations. The goal is always the same: an equivalent expression that is shorter, cleaner, or more useful for the next step.",
        priorKnowledge: [
            "Arithmetic: multiplication, division, addition, and subtraction of integers and fractions",
            "Order of operations (BIDMAS/PEMDAS)",
            "Basic algebraic notation: variables, coefficients, constants, and the meaning of expressions like 3x²",
            "Concept of equivalence: two expressions are equivalent if they produce the same value for every substitution of variables",
            "Factors and multiples: highest common factor (HCF) and lowest common multiple (LCM)"
        ],
        topicRoadmap: [
            "Identifying and collecting like terms",
            "The distributive law: expanding single brackets",
            "Expanding double brackets (FOIL and the grid method)",
            "Factorising: the reverse of expanding",
            "Index notation and the six index laws",
            "Simplifying numerical fractions using HCF",
            "Simplifying algebraic fractions by cancelling common factors",
            "Adding and subtracting algebraic fractions"
        ]
    },

    concepts: [
        "Like terms share identical variable parts and can be combined by adding or subtracting their coefficients",
        "Expanding brackets applies the distributive law to every term inside the bracket",
        "Index laws govern how powers of the same base combine under multiplication, division, and further exponentiation",
        "A numerical fraction is fully simplified when the numerator and denominator share no common factor other than 1",
        "An algebraic fraction is simplified by cancelling common factors from the numerator and denominator, never common terms",
        "Factorising reverses the distributive law: it writes an expression as a product of its factors"
    ],

    theory: "Algebraic simplification is the systematic application of arithmetic identities — chiefly the distributive law and the laws of indices — to rewrite expressions in equivalent but more compact or useful forms. The fundamental principle is that an expression may be rewritten in any equivalent form, but its value for any given variable substitution must remain unchanged.",

    keyDefinitions: {
        "Expression": "A combination of terms connected by addition or subtraction; unlike an equation, it has no equals sign (e.g. 3x² + 2x − 5)",
        "Term": "A single number, variable, or product of numbers and variables separated from others by + or − (e.g. 3x², −2x, 7)",
        "Like Terms": "Terms whose variable parts are identical in both letter and power (e.g. 3x² and −7x² are like terms; 3x² and 3x are not)",
        "Coefficient": "The numerical factor multiplying the variable part of a term (in −7x², the coefficient is −7)",
        "Collecting Like Terms": "Adding or subtracting the coefficients of like terms to produce a single combined term",
        "Distributive Law": "a(b + c) = ab + ac — every term inside the bracket is multiplied by the factor outside",
        "Expanding": "Applying the distributive law to remove brackets",
        "Factorising": "Writing an expression as a product; the reverse of expanding",
        "Index (Exponent)": "The power to which a base is raised; in x³, the index is 3",
        "Base": "The number or variable being raised to a power; in x³, the base is x",
        "Highest Common Factor (HCF)": "The largest factor that divides exactly into two or more numbers or expressions",
        "Algebraic Fraction": "A fraction in which the numerator, denominator, or both contain algebraic expressions (e.g. (2x + 4)/(x + 2))"
    },

    likeTerms: {
        definition: "Two terms are like terms if and only if their variable parts are identical — same letters, same powers on each letter. Only the coefficients may differ.",
        rule: "To collect like terms: add or subtract the coefficients, keeping the variable part unchanged.",
        importantNote: "The variable part includes every letter and its power. 3xy² and 5xy² are like terms. 3xy² and 3x²y are NOT like terms — the powers on x and y are different.",
        workedExamples: [
            {
                type: "Simple collection",
                problem: "Simplify: 5x + 3y − 2x + 7y",
                solution: [
                    "Step 1 — Identify like terms: (5x and −2x) are like; (3y and 7y) are like",
                    "Step 2 — Collect x terms: 5x − 2x = 3x",
                    "Step 3 — Collect y terms: 3y + 7y = 10y",
                    "Step 4 — Write final answer: 3x + 10y",
                    "Note: 3x and 10y are NOT like terms — they cannot be combined further"
                ]
            },
            {
                type: "Mixed powers",
                problem: "Simplify: 4x² + 3x − x² + 2 − 5x + 1",
                solution: [
                    "Step 1 — Group like terms: (4x² − x²) + (3x − 5x) + (2 + 1)",
                    "Step 2 — Collect x² terms: 4x² − x² = 3x²",
                    "Step 3 — Collect x terms: 3x − 5x = −2x",
                    "Step 4 — Collect constants: 2 + 1 = 3",
                    "Step 5 — Write final answer: 3x² − 2x + 3",
                    "Verification: substitute x = 2 into both original and simplified — original: 4(4) + 6 − 4 + 2 − 10 + 1 = 11; simplified: 3(4) − 4 + 3 = 11 ✓"
                ]
            },
            {
                type: "Multiple variables",
                problem: "Simplify: 6ab − 3a²b + 2ab − a²b + 4",
                solution: [
                    "Step 1 — Identify like terms: (6ab and 2ab) share the variable part ab; (−3a²b and −a²b) share a²b; 4 is a constant",
                    "Step 2 — Collect ab terms: 6ab + 2ab = 8ab",
                    "Step 3 — Collect a²b terms: −3a²b − a²b = −4a²b",
                    "Step 4 — Write final answer: 8ab − 4a²b + 4",
                    "Note: 8ab and −4a²b are NOT like terms (ab ≠ a²b) — do not combine them"
                ]
            }
        ]
    },

    expandingBrackets: {
        singleBracket: {
            rule: "Multiply every term inside the bracket by the factor outside. Pay attention to signs — a negative factor outside reverses the sign of every term inside.",
            workedExamples: [
                {
                    type: "Positive factor",
                    problem: "Expand: 3(2x + 5)",
                    solution: [
                        "Step 1 — Multiply 3 by 2x: 3 × 2x = 6x",
                        "Step 2 — Multiply 3 by 5: 3 × 5 = 15",
                        "Step 3 — Write result: 6x + 15"
                    ]
                },
                {
                    type: "Negative factor",
                    problem: "Expand: −4(3x − 2)",
                    solution: [
                        "Step 1 — Multiply −4 by 3x: −4 × 3x = −12x",
                        "Step 2 — Multiply −4 by −2: −4 × −2 = +8",
                        "Step 3 — Write result: −12x + 8",
                        "Common error: −4 × −2 = −8 is wrong; negative × negative = positive"
                    ]
                },
                {
                    type: "Variable factor",
                    problem: "Expand: 2x(3x² − 4x + 1)",
                    solution: [
                        "Step 1 — Multiply 2x by 3x²: 2x × 3x² = 6x³",
                        "Step 2 — Multiply 2x by −4x: 2x × −4x = −8x²",
                        "Step 3 — Multiply 2x by 1: 2x × 1 = 2x",
                        "Step 4 — Write result: 6x³ − 8x² + 2x"
                    ]
                },
                {
                    type: "Expand and collect",
                    problem: "Expand and simplify: 3(2x + 4) − 2(x − 5)",
                    solution: [
                        "Step 1 — Expand first bracket: 3(2x + 4) = 6x + 12",
                        "Step 2 — Expand second bracket: −2(x − 5) = −2x + 10",
                        "Step 3 — Write expanded form: 6x + 12 − 2x + 10",
                        "Step 4 — Collect like terms: (6x − 2x) + (12 + 10) = 4x + 22",
                        "Critical check: the −2 multiplies ALL terms inside the second bracket, making −5 become +10"
                    ]
                }
            ]
        },
        doubleBracket: {
            rule: "Every term in the first bracket multiplies every term in the second bracket. The FOIL mnemonic (First, Outer, Inner, Last) ensures all four products are captured for two-term brackets.",
            foil: {
                F: "First terms in each bracket",
                O: "Outer terms (first term of first bracket × second term of second bracket)",
                I: "Inner terms (second term of first bracket × first term of second bracket)",
                L: "Last terms in each bracket"
            },
            workedExamples: [
                {
                    type: "Standard double bracket",
                    problem: "Expand: (x + 3)(x + 5)",
                    solution: [
                        "F — First: x × x = x²",
                        "O — Outer: x × 5 = 5x",
                        "I — Inner: 3 × x = 3x",
                        "L — Last: 3 × 5 = 15",
                        "Collect like terms: x² + 5x + 3x + 15 = x² + 8x + 15"
                    ]
                },
                {
                    type: "With negatives",
                    problem: "Expand: (2x − 3)(x + 4)",
                    solution: [
                        "F — First: 2x × x = 2x²",
                        "O — Outer: 2x × 4 = 8x",
                        "I — Inner: −3 × x = −3x",
                        "L — Last: −3 × 4 = −12",
                        "Collect like terms: 2x² + 8x − 3x − 12 = 2x² + 5x − 12"
                    ]
                },
                {
                    type: "Difference of two squares",
                    problem: "Expand: (x + 4)(x − 4)",
                    solution: [
                        "F — First: x × x = x²",
                        "O — Outer: x × −4 = −4x",
                        "I — Inner: 4 × x = 4x",
                        "L — Last: 4 × −4 = −16",
                        "Collect: x² − 4x + 4x − 16 = x²− 16",
                        "Pattern identified: (a + b)(a − b) = a² − b² — the middle terms always cancel"
                    ]
                },
                {
                    type: "Perfect square",
                    problem: "Expand: (3x − 2)²",
                    solution: [
                        "Rewrite as (3x − 2)(3x − 2)",
                        "F — First: 3x × 3x = 9x²",
                        "O — Outer: 3x × −2 = −6x",
                        "I — Inner: −2 × 3x = −6x",
                        "L — Last: −2 × −2 = 4",
                        "Collect: 9x² − 6x − 6x + 4 = 9x² − 12x + 4",
                        "Pattern: (a − b)² = a² − 2ab + b²; here a = 3x, b = 2"
                    ]
                }
            ]
        },
        factorisingSingleBracket: {
            rule: "Find the HCF of all terms. Write the HCF outside the bracket and divide each term by the HCF to find what goes inside. Verify by expanding — the result must match the original expression.",
            workedExamples: [
                {
                    type: "Numerical HCF",
                    problem: "Factorise: 12x + 8",
                    solution: [
                        "Step 1 — Find HCF of 12 and 8: HCF = 4",
                        "Step 2 — Divide each term by 4: 12x ÷ 4 = 3x; 8 ÷ 4 = 2",
                        "Step 3 — Write factorised form: 4(3x + 2)",
                        "Verification — expand: 4 × 3x + 4 × 2 = 12x + 8 ✓"
                    ]
                },
                {
                    type: "Variable HCF",
                    problem: "Factorise: 6x³ − 9x²",
                    solution: [
                        "Step 1 — HCF of coefficients 6 and 9: HCF = 3",
                        "Step 2 — HCF of x³ and x²: lowest power = x²",
                        "Step 3 — Overall HCF: 3x²",
                        "Step 4 — Divide each term: 6x³ ÷ 3x² = 2x; −9x² ÷ 3x² = −3",
                        "Step 5 — Write factorised form: 3x²(2x − 3)",
                        "Verification — expand: 3x² × 2x − 3x² × 3 = 6x³ − 9x² ✓"
                    ]
                }
            ]
        }
    },

    indexLaws: {
        laws: {
            multiplication: {
                rule: "aᵐ × aⁿ = aᵐ⁺ⁿ — when multiplying powers of the same base, add the indices",
                condition: "Bases must be identical",
                example: "x³ × x⁵ = x⁸; 2³ × 2⁴ = 2⁷ = 128"
            },
            division: {
                rule: "aᵐ ÷ aⁿ = aᵐ⁻ⁿ — when dividing powers of the same base, subtract the indices",
                condition: "Bases must be identical; a ≠ 0",
                example: "x⁷ ÷ x³ = x⁴; 3⁵ ÷ 3² = 3³ = 27"
            },
            power: {
                rule: "(aᵐ)ⁿ = aᵐⁿ — when raising a power to another power, multiply the indices",
                example: "(x²)⁵ = x¹⁰; (2³)² = 2⁶ = 64"
            },
            powerOfProduct: {
                rule: "(ab)ⁿ = aⁿbⁿ — a power outside a bracket applies to every factor inside",
                example: "(2x)³ = 2³x³ = 8x³; (3xy²)² = 9x²y⁴"
            },
            zeroIndex: {
                rule: "a⁰ = 1 — any non-zero base raised to the power zero equals 1",
                condition: "a ≠ 0 (0⁰ is undefined)",
                example: "7⁰ = 1; (3x²)⁰ = 1; x⁰ = 1"
            },
            negativeIndex: {
                rule: "a⁻ⁿ = 1/aⁿ — a negative index means the reciprocal of the positive index",
                example: "x⁻³ = 1/x³; 2⁻⁴ = 1/16; 3x⁻² = 3/x²"
            },
            fractionalIndex: {
                rule: "a^(1/n) = ⁿ√a — a fractional index with numerator 1 means the nth root",
                extension: "a^(m/n) = (ⁿ√a)ᵐ = ⁿ√(aᵐ) — numerator is the power, denominator is the root",
                example: "8^(1/3) = ∛8 = 2; 16^(3/4) = (⁴√16)³ = 2³ = 8"
            }
        },
        workedExamples: [
            {
                type: "Multiplication law",
                problem: "Simplify: 3x⁴ × 4x³",
                solution: [
                    "Step 1 — Multiply coefficients: 3 × 4 = 12",
                    "Step 2 — Apply multiplication law: x⁴ × x³ = x⁴⁺³ = x⁷",
                    "Step 3 — Write result: 12x⁷"
                ]
            },
            {
                type: "Division law",
                problem: "Simplify: 15x⁶ ÷ 3x²",
                solution: [
                    "Step 1 — Divide coefficients: 15 ÷ 3 = 5",
                    "Step 2 — Apply division law: x⁶ ÷ x² = x⁶⁻² = x⁴",
                    "Step 3 — Write result: 5x⁴"
                ]
            },
            {
                type: "Power law",
                problem: "Simplify: (2x³y²)⁴",
                solution: [
                    "Step 1 — Apply power to coefficient: 2⁴ = 16",
                    "Step 2 — Apply power to x³: (x³)⁴ = x¹²",
                    "Step 3 — Apply power to y²: (y²)⁴ = y⁸",
                    "Step 4 — Write result: 16x¹²y⁸"
                ]
            },
            {
                type: "Combined laws",
                problem: "Simplify: (6x⁵y³) ÷ (2x²y) × (xy)²",
                solution: [
                    "Step 1 — Simplify the division first: (6x⁵y³) ÷ (2x²y) = 3x³y²",
                    "Step 2 — Expand the power: (xy)² = x²y²",
                    "Step 3 — Multiply: 3x³y² × x²y² = 3x⁵y⁴",
                    "Step 4 — Write result: 3x⁵y⁴"
                ]
            },
            {
                type: "Negative and zero index",
                problem: "Simplify: x³ × x⁻⁵ and evaluate 4⁰ + 2⁻³",
                solution: [
                    "Part 1 — x³ × x⁻⁵ = x³⁺⁽⁻⁵⁾ = x⁻² = 1/x²",
                    "Part 2 — 4⁰ = 1; 2⁻³ = 1/2³ = 1/8",
                    "4⁰ + 2⁻³ = 1 + 1/8 = 9/8"
                ]
            },
            {
                type: "Fractional index",
                problem: "Evaluate: 27^(2/3)",
                solution: [
                    "Step 1 — Identify root and power: denominator 3 means cube root; numerator 2 means square",
                    "Step 2 — Find the cube root first: ∛27 = 3",
                    "Step 3 — Apply the power: 3² = 9",
                    "Step 4 — Result: 27^(2/3) = 9",
                    "Note: always take the root before the power to keep numbers manageable"
                ]
            }
        ]
    },

    simplifyingFractions: {
        numericalFractions: {
            rule: "Divide numerator and denominator by their HCF. A fraction is fully simplified (in lowest terms) when HCF(numerator, denominator) = 1.",
            workedExample: {
                problem: "Simplify: 36/48",
                solution: [
                    "Step 1 — Find HCF(36, 48): factors of 36 = {1,2,3,4,6,9,12,18,36}; factors of 48 = {1,2,3,4,6,8,12,16,24,48}; HCF = 12",
                    "Step 2 — Divide numerator by 12: 36 ÷ 12 = 3",
                    "Step 3 — Divide denominator by 12: 48 ÷ 12 = 4",
                    "Step 4 — Write simplified fraction: 3/4",
                    "Verification: HCF(3, 4) = 1 — fully simplified ✓"
                ]
            }
        },
        algebraicFractions: {
            rule: "Factorise numerator and denominator fully. Cancel any factor that appears in both — never cancel individual terms that are connected by addition or subtraction.",
            criticalDistinction: "In (x² + 2x)/(x + 2): factorise numerator as x(x + 2), then cancel the factor (x + 2). In (x + 2)/(x + 5): there is no common factor — this cannot be simplified, despite both terms containing x.",
            workedExamples: [
                {
                    type: "Monomial cancellation",
                    problem: "Simplify: 6x³y / 9xy²",
                    solution: [
                        "Step 1 — Coefficients: HCF(6, 9) = 3; divide both by 3 → 2/3",
                        "Step 2 — x terms: x³/x = x² (subtract indices)",
                        "Step 3 — y terms: y/y² = 1/y (subtract indices)",
                        "Step 4 — Combine: 2x²/3y",
                        "Verification: (6x³y)/(9xy²) = (6/9) × (x³/x) × (y/y²) = (2/3) × x² × (1/y) = 2x²/3y ✓"
                    ]
                },
                {
                    type: "Factorising then cancelling",
                    problem: "Simplify: (2x² + 4x) / (x² − x − 6) ... wait — simpler first: (3x + 9) / (x + 3)",
                    solution: [
                        "Step 1 — Factorise numerator: 3x + 9 = 3(x + 3)",
                        "Step 2 — Denominator is already factorised: (x + 3)",
                        "Step 3 — Cancel the common factor (x + 3): 3(x + 3)/(x + 3) = 3",
                        "Condition: x ≠ −3 (the cancelled factor cannot be zero)",
                        "Critical note: the 3 survives — you cancel the bracket (x+3), not the 3"
                    ]
                },
                {
                    type: "Both require factorising",
                    problem: "Simplify: (x² + 5x + 6) / (x² + 3x + 2)",
                    solution: [
                        "Step 1 — Factorise numerator: x² + 5x + 6 = (x + 2)(x + 3)",
                        "Step 2 — Factorise denominator: x² + 3x + 2 = (x + 1)(x + 2)",
                        "Step 3 — Identify common factor: (x + 2) appears in both",
                        "Step 4 — Cancel: (x + 2)(x + 3) / [(x + 1)(x + 2)] = (x + 3)/(x + 1)",
                        "Condition: x ≠ −2 and x ≠ −1"
                    ]
                }
            ]
        },
        addingAlgebraicFractions: {
            rule: "Find the LCM of the denominators, express each fraction over the common denominator, combine numerators, and simplify the result.",
            workedExample: {
                problem: "Simplify: 3/(2x) + 5/(3x)",
                solution: [
                    "Step 1 — LCM of 2x and 3x: LCM = 6x",
                    "Step 2 — Convert first fraction: 3/(2x) = 9/(6x) (multiply top and bottom by 3)",
                    "Step 3 — Convert second fraction: 5/(3x) = 10/(6x) (multiply top and bottom by 2)",
                    "Step 4 — Add: (9 + 10)/(6x) = 19/(6x)",
                    "Step 5 — Check if 19/(6x) simplifies further: HCF(19, 6) = 1 → fully simplified"
                ]
            }
        }
    },

    specialProducts: {
        differenceOfSquares: {
            identity: "(a + b)(a − b) = a² − b²",
            derivation: "Expand using FOIL: a² − ab + ab − b² = a² − b². The middle terms always cancel because they are equal and opposite.",
            applications: [
                "Factorising: x² − 25 = (x + 5)(x − 5)",
                "Mental arithmetic: 99 × 101 = (100 − 1)(100 + 1) = 10000 − 1 = 9999",
                "Simplifying fractions: (x² − 9)/(x + 3) = (x+3)(x−3)/(x+3) = x − 3"
            ]
        },
        perfectSquare: {
            identities: [
                "(a + b)² = a² + 2ab + b²",
                "(a − b)² = a² − 2ab + b²"
            ],
            derivation: "From FOIL on (a + b)(a + b): a² + ab + ab + b² = a² + 2ab + b². The middle term 2ab is twice the product of the two terms — this is what students most commonly omit.",
            commonError: "Students write (a + b)² = a² + b² — this omits the 2ab term. Verify: (2 + 3)² = 25, but 2² + 3² = 13 ≠ 25."
        }
    },

    topicSummary: {
        coreInsights: [
            "Like terms have identical variable parts — only like terms can be combined; combining unlike terms (e.g. 3x + 2x²) is the most common algebraic error in simplification.",
            "The distributive law a(b + c) = ab + ac is the engine of all bracket expansion; a negative factor outside the bracket changes every sign inside.",
            "Index laws are not arbitrary rules — they follow directly from counting repeated multiplications; understanding why each law works prevents misapplication.",
            "a⁰ = 1 and a⁻ⁿ = 1/aⁿ are logical consequences of the division law, not definitions to memorise in isolation: aᵐ ÷ aᵐ = aᵐ⁻ᵐ = a⁰, and it must equal 1 because any number divided by itself is 1.",
            "Simplifying a fraction requires cancelling common factors, not common terms — the fraction (x + 2)/(x + 5) cannot be simplified at all.",
            "(a + b)² ≠ a² + b²: the missing 2ab term is the most frequently lost term in all of algebra.",
            "Factorising and expanding are inverse operations — if an expansion is correct, refactorising it must return exactly the original expression."
        ],
        keyIdentities: {
            differenceOfSquares: "(a + b)(a − b) = a² − b²",
            perfectSquarePlus:   "(a + b)² = a² + 2ab + b²",
            perfectSquareMinus:  "(a − b)² = a² − 2ab + b²",
            indexMultiplication: "aᵐ × aⁿ = aᵐ⁺ⁿ",
            indexDivision:       "aᵐ ÷ aⁿ = aᵐ⁻ⁿ",
            indexPower:          "(aᵐ)ⁿ = aᵐⁿ",
            zeroIndex:           "a⁰ = 1",
            negativeIndex:       "a⁻ⁿ = 1/aⁿ",
            fractionalIndex:     "a^(m/n) = (ⁿ√a)ᵐ"
        },
        commonMistakesToAvoid: [
            "Combining unlike terms: 3x + 2x² ≠ 5x³",
            "Partial expansion: −3(x − 4) ≠ −3x − 4 (must be −3x + 12)",
            "Missing 2ab in perfect squares: (x + 5)² ≠ x² + 25",
            "Adding indices when bases differ: 2³ × 3² ≠ 6⁵",
            "Multiplying indices instead of adding: x² × x³ ≠ x⁶",
            "Cancelling terms instead of factors: (x + 4)/(x + 7) ≠ 4/7",
            "Forgetting the condition when cancelling: state x ≠ value that makes the cancelled factor zero"
        ],
        connections: [
            "Solving equations: every equation requires simplification before the variable can be isolated",
            "Quadratics: factorising quadratic expressions is a direct extension of the single-bracket factorising skill",
            "Coordinate geometry: simplifying expressions for gradient and midpoint calculations",
            "Calculus: differentiating expressions requires rewriting in simplified index form (e.g. √x = x^(1/2)) before applying rules",
            "Physics: simplifying formulae — rearranging E = mc², F = ma, v² = u² + 2as — all involve algebraic simplification"
        ],
        examReadinessChecklist: [
            "Can you identify like terms in an expression containing mixed variable parts and powers?",
            "Can you expand a single bracket where the outside factor is negative, without sign errors?",
            "Can you expand double brackets using FOIL and collect the middle terms correctly?",
            "Can you state all six index laws and apply them to mixed-variable expressions?",
            "Can you evaluate expressions with zero, negative, and fractional indices?",
            "Can you factorise a single bracket by extracting the full HCF (numerical and variable)?",
            "Can you simplify an algebraic fraction by factorising and then cancelling common factors (not terms)?"
        ]
    }
},

factorization: {
    title: "Factorization: Techniques, Identities, and Applications",

    databaseLinks: {
        misconceptions: [
            'factorFactorization',
            'commonFactorTechniques',
            'quadraticFactorization',
            'differenceOfSquares',
            'factorizationApplications'
        ],
        contextualScenarios: [
            'factorFactorization',
            'commonFactorTechniques',
            'quadraticFactorization',
            'differenceOfSquares'
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
            'factorFactorization',
            'commonFactorTechniques',
            'quadraticFactorization',
            'differenceOfSquares'
        ]
    },

    conceptLinks: {
        "Factorization reverses expansion by rewriting an expression as a product of its factors": {
            misconceptions:      ['factorFactorization'],
            scenarios:           ['factorFactorization'],
            studyTips:           ['diagrams', 'workedExampleAnalysis'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['factorFactorization']
        },
        "The highest common factor (HCF) of all terms is always extracted first": {
            misconceptions:      ['commonFactorTechniques'],
            scenarios:           ['commonFactorTechniques'],
            studyTips:           ['flashcards', 'practiceRoutines'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['commonFactorTechniques']
        },
        "A quadratic trinomial ax² + bx + c factors into two linear brackets": {
            misconceptions:      ['quadraticFactorization'],
            scenarios:           ['quadraticFactorization'],
            studyTips:           ['comparisonTables', 'mnemonics', 'practiceRoutines'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate'],
            assessmentQuestions: ['quadraticFactorization']
        },
        "The difference of two squares identity a² − b² = (a + b)(a − b) applies whenever two perfect squares are subtracted": {
            misconceptions:      ['differenceOfSquares'],
            scenarios:           ['differenceOfSquares'],
            studyTips:           ['flashcards', 'diagrams', 'mnemonics'],
            assessmentRubrics:   ['apply', 'analyze'],
            assessmentQuestions: ['differenceOfSquares']
        },
        "Factorization is used to solve equations, simplify expressions, and find roots": {
            misconceptions:      ['factorizationApplications'],
            scenarios:           ['factorFactorization'],
            studyTips:           ['workedExampleAnalysis', 'practiceRoutines'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions: ['factorFactorization']
        }
    },

    topicIntroduction: {
        overview: "Factorization is the process of rewriting an algebraic expression as a product of simpler expressions called factors. Just as the number 12 can be written as 3 × 4 or 2 × 6, an algebraic expression such as x² + 5x + 6 can be rewritten as (x + 2)(x + 3). Factorization is expansion in reverse — and mastering it unlocks the ability to solve quadratic equations, simplify algebraic fractions, and analyse polynomial functions.",
        whyItMatters: "Factorization is one of the most frequently applied algebraic skills across all of mathematics. Solving quadratic equations, finding the roots of polynomials, simplifying rational expressions, and proving algebraic identities all depend on fluent factorization. In physics, engineering, and economics, factored forms of expressions reveal structure — zeros, symmetry, and critical values — that expanded forms obscure.",
        bigPicture: "Every factorization technique is an application of one principle: an expression is rewritten as a product rather than a sum. The highest common factor technique removes shared structure. Grouping reveals hidden common factors in four-term expressions. The quadratic factorization techniques — inspection, the AC method, and completing the square — find the two linear factors whose product reproduces the trinomial. The special identities (difference of squares, perfect square trinomials) are patterns so common they are recognised on sight. All of these techniques lead to the same goal: a factored form that can be set equal to zero to find solutions, or cancelled in a fraction to simplify.",
        priorKnowledge: [
            "Arithmetic: factors and multiples of integers; highest common factor (HCF)",
            "Algebraic notation: terms, coefficients, variables, powers",
            "Index laws: xᵃ × xᵇ = xᵃ⁺ᵇ; (xᵃ)ᵇ = xᵃᵇ",
            "Expanding brackets: a(b + c) = ab + ac and (x + p)(x + q) = x² + (p+q)x + pq",
            "Solving linear equations: isolating a variable using inverse operations",
            "Recognising perfect squares: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100"
        ],
        topicRoadmap: [
            "What factorization means and its relationship to expansion",
            "Extracting the highest common factor (HCF) from an expression",
            "Factorizing by grouping (four-term expressions)",
            "Factorizing quadratic trinomials where a = 1: x² + bx + c",
            "Factorizing quadratic trinomials where a ≠ 1: ax² + bx + c",
            "Difference of two squares: a² − b² = (a + b)(a − b)",
            "Perfect square trinomials: a² + 2ab + b² = (a + b)²",
            "Mixed and multi-step factorization: always extract HCF first",
            "Applying factorization to solve quadratic equations using the zero-product property"
        ]
    },

    concepts: [
        "Factorization reverses expansion by rewriting an expression as a product of its factors",
        "The highest common factor (HCF) of all terms is always extracted first",
        "A quadratic trinomial ax² + bx + c factors into two linear brackets",
        "The difference of two squares identity a² − b² = (a + b)(a − b) applies whenever two perfect squares are subtracted",
        "Perfect square trinomials produce a repeated linear factor: (a ± b)²",
        "Factorization is used to solve equations, simplify expressions, and find roots"
    ],

    theory: "Factorization is the decomposition of an algebraic expression into a product of factors, each of which divides the original expression exactly. It is the inverse operation of expansion. The Fundamental Theorem of Algebra guarantees that any polynomial of degree n with complex coefficients can be factorized into exactly n linear factors over the complex numbers. Over the real numbers and rationals, some polynomials are irreducible (cannot be factorized further), and recognising when an expression is fully factorized is as important as knowing the factorization techniques themselves.",

    keyDefinitions: {
        "Factor": "An expression that divides another expression exactly, leaving no remainder",
        "Factorization": "The process of rewriting an expression as a product of two or more factors",
        "Highest Common Factor (HCF)": "The largest factor common to all terms in an expression — numerical and algebraic",
        "Prime Polynomial": "A polynomial that cannot be factorized further over the integers (e.g. x² + 1)",
        "Quadratic Expression": "An expression of the form ax² + bx + c where a ≠ 0",
        "Trinomial": "An algebraic expression with exactly three terms",
        "Binomial": "An algebraic expression with exactly two terms",
        "Difference of Two Squares": "An expression of the form a² − b², which factors as (a + b)(a − b)",
        "Perfect Square Trinomial": "A trinomial of the form a² + 2ab + b² = (a + b)² or a² − 2ab + b² = (a − b)²",
        "Zero-Product Property": "If a × b = 0, then a = 0 or b = 0 (or both) — the property that allows factored equations to be solved"
    },

    highestCommonFactor: {
        principle: "Before applying any other factorization technique, always check for and extract the HCF of all terms. The HCF includes the largest integer factor common to all coefficients and the lowest power of each variable common to all terms.",
        steps: [
            "Find the HCF of all numerical coefficients",
            "For each variable present, identify the lowest power that appears in all terms",
            "Multiply the numerical HCF by each variable HCF — this is the overall HCF",
            "Divide every term of the expression by the HCF",
            "Write the result as: HCF × (remaining expression in brackets)",
            "Verify by expanding — the expansion must reproduce the original expression"
        ],
        workedExamples: [
            {
                type: "Numerical HCF only",
                problem: "Factorize: 12x + 8",
                solution: [
                    "Step 1 — Find HCF of coefficients: HCF(12, 8) = 4",
                    "Step 2 — No variable is common to both terms (8 has no x)",
                    "Step 3 — Extract 4: 12x + 8 = 4(3x + 2)",
                    "Verify: 4(3x + 2) = 12x + 8 ✓"
                ]
            },
            {
                type: "Numerical and variable HCF",
                problem: "Factorize: 6x³ + 9x² − 3x",
                solution: [
                    "Step 1 — HCF of coefficients: HCF(6, 9, 3) = 3",
                    "Step 2 — Lowest power of x across all terms: x¹",
                    "Step 3 — Overall HCF: 3x",
                    "Step 4 — Divide each term: 6x³ ÷ 3x = 2x²; 9x² ÷ 3x = 3x; −3x ÷ 3x = −1",
                    "Step 5 — Write: 6x³ + 9x² − 3x = 3x(2x² + 3x − 1)",
                    "Verify: 3x(2x² + 3x − 1) = 6x³ + 9x² − 3x ✓"
                ]
            },
            {
                type: "Two-variable HCF",
                problem: "Factorize: 8a²b³ + 12a³b²",
                solution: [
                    "Step 1 — HCF of coefficients: HCF(8, 12) = 4",
                    "Step 2 — Lowest power of a: a² (powers are 2 and 3)",
                    "Step 3 — Lowest power of b: b² (powers are 3 and 2)",
                    "Step 4 — Overall HCF: 4a²b²",
                    "Step 5 — Divide: 8a²b³ ÷ 4a²b² = 2b; 12a³b² ÷ 4a²b² = 3a",
                    "Step 6 — Write: 8a²b³ + 12a³b² = 4a²b²(2b + 3a)",
                    "Verify: 4a²b²(2b + 3a) = 8a²b³ + 12a³b² ✓"
                ]
            }
        ]
    },

    factorizationByGrouping: {
        principle: "When an expression has four terms and no single HCF covers all four, group the terms into two pairs. Extract the HCF from each pair. If the resulting bracket is the same in both pairs, it becomes a common factor that can be extracted again.",
        steps: [
            "Arrange terms in two groups of two (sometimes reordering is needed)",
            "Extract the HCF from each pair",
            "Identify the common bracket factor",
            "Factorize as: (common bracket)(remaining terms)",
            "Verify by expanding"
        ],
        workedExamples: [
            {
                type: "Standard grouping",
                problem: "Factorize: ax + ay + bx + by",
                solution: [
                    "Step 1 — Group: (ax + ay) + (bx + by)",
                    "Step 2 — Extract HCF from each group: a(x + y) + b(x + y)",
                    "Step 3 — Common bracket: (x + y)",
                    "Step 4 — Factorize: (x + y)(a + b)",
                    "Verify: (x + y)(a + b) = ax + bx + ay + by ✓"
                ]
            },
            {
                type: "Grouping with sign adjustment",
                problem: "Factorize: 3xy − 6y − 5x + 10",
                solution: [
                    "Step 1 — Group: (3xy − 6y) + (−5x + 10)",
                    "Step 2 — Extract HCF from each group: 3y(x − 2) − 5(x − 2)",
                    "Note: factor out −5 from (−5x + 10) to obtain −5(x − 2) — the bracket must match",
                    "Step 3 — Common bracket: (x − 2)",
                    "Step 4 — Factorize: (x − 2)(3y − 5)",
                    "Verify: (x − 2)(3y − 5) = 3xy − 5x − 6y + 10 ✓"
                ]
            }
        ]
    },

    quadraticFactorizationMonic: {
        description: "Factorizing x² + bx + c (where the coefficient of x² is 1). Find two numbers p and q such that p + q = b and p × q = c. Then write (x + p)(x + q).",
        steps: [
            "Identify b (coefficient of x) and c (constant term)",
            "Find two numbers p and q where p + q = b AND p × q = c",
            "Write the factorization as (x + p)(x + q)",
            "Verify by expanding: (x + p)(x + q) = x² + (p + q)x + pq = x² + bx + c"
        ],
        workedExamples: [
            {
                type: "Both factors positive",
                problem: "Factorize: x² + 7x + 12",
                solution: [
                    "Step 1 — Identify: b = 7, c = 12",
                    "Step 2 — Find p and q: need p + q = 7 and p × q = 12",
                    "Consider factor pairs of 12: (1, 12), (2, 6), (3, 4)",
                    "3 + 4 = 7 ✓ and 3 × 4 = 12 ✓ → p = 3, q = 4",
                    "Step 3 — Factorize: (x + 3)(x + 4)",
                    "Verify: (x + 3)(x + 4) = x² + 4x + 3x + 12 = x² + 7x + 12 ✓"
                ]
            },
            {
                type: "One negative factor",
                problem: "Factorize: x² + 2x − 15",
                solution: [
                    "Step 1 — Identify: b = 2, c = −15",
                    "Step 2 — Find p and q: need p + q = 2 and p × q = −15",
                    "Since c is negative, p and q have opposite signs",
                    "Factor pairs of −15: (1, −15), (−1, 15), (3, −5), (−3, 5)",
                    "5 + (−3) = 2 ✓ and 5 × (−3) = −15 ✓ → p = 5, q = −3",
                    "Step 3 — Factorize: (x + 5)(x − 3)",
                    "Verify: (x + 5)(x − 3) = x² − 3x + 5x − 15 = x² + 2x − 15 ✓"
                ]
            },
            {
                type: "Both factors negative",
                problem: "Factorize: x² − 9x + 20",
                solution: [
                    "Step 1 — Identify: b = −9, c = 20",
                    "Step 2 — Find p and q: need p + q = −9 and p × q = 20",
                    "Since c is positive and b is negative, both p and q are negative",
                    "Factor pairs: (−4, −5) → sum = −9 ✓, product = 20 ✓",
                    "Step 3 — Factorize: (x − 4)(x − 5)",
                    "Verify: (x − 4)(x − 5) = x² − 5x − 4x + 20 = x² − 9x + 20 ✓"
                ]
            }
        ]
    },

    quadraticFactorizationNonMonic: {
        description: "Factorizing ax² + bx + c where a ≠ 1. Use the AC method: find two numbers that multiply to a × c and add to b, then use these to split the middle term and factorize by grouping.",
        acMethod: {
            steps: [
                "Calculate the product a × c",
                "Find two numbers m and n where m + n = b and m × n = a × c",
                "Rewrite bx as mx + nx (splitting the middle term)",
                "Factorize the resulting four-term expression by grouping",
                "Verify by expanding"
            ],
            workedExamples: [
                {
                    type: "AC method — positive leading coefficient",
                    problem: "Factorize: 2x² + 7x + 3",
                    solution: [
                        "Step 1 — a = 2, b = 7, c = 3; calculate a × c = 2 × 3 = 6",
                        "Step 2 — Find m and n: m + n = 7 and m × n = 6",
                        "Factor pairs of 6: (1, 6) → sum = 7 ✓; m = 1, n = 6",
                        "Step 3 — Split middle term: 2x² + x + 6x + 3",
                        "Step 4 — Group: (2x² + x) + (6x + 3)",
                        "Step 5 — Extract HCF from each group: x(2x + 1) + 3(2x + 1)",
                        "Step 6 — Common bracket: (2x + 1)(x + 3)",
                        "Verify: (2x + 1)(x + 3) = 2x² + 6x + x + 3 = 2x² + 7x + 3 ✓"
                    ]
                },
                {
                    type: "AC method — negative constant",
                    problem: "Factorize: 3x² − x − 10",
                    solution: [
                        "Step 1 — a = 3, b = −1, c = −10; calculate a × c = 3 × (−10) = −30",
                        "Step 2 — Find m and n: m + n = −1 and m × n = −30",
                        "Since product is negative, m and n have opposite signs",
                        "Factor pairs: (5, −6) → sum = −1 ✓, product = −30 ✓; m = 5, n = −6",
                        "Step 3 — Split: 3x² + 5x − 6x − 10",
                        "Step 4 — Group: (3x² + 5x) + (−6x − 10)",
                        "Step 5 — Extract HCF: x(3x + 5) − 2(3x + 5)",
                        "Step 6 — Common bracket: (3x + 5)(x − 2)",
                        "Verify: (3x + 5)(x − 2) = 3x² − 6x + 5x − 10 = 3x² − x − 10 ✓"
                    ]
                },
                {
                    type: "AC method — negative leading coefficient",
                    problem: "Factorize: −2x² + x + 6",
                    solution: [
                        "Step 1 — Extract −1 to make leading coefficient positive: −(2x² − x − 6)",
                        "Step 2 — Work on 2x² − x − 6: a = 2, b = −1, c = −6; a × c = −12",
                        "Step 3 — Find m and n: m + n = −1 and m × n = −12",
                        "Factor pairs: (3, −4) → sum = −1 ✓, product = −12 ✓",
                        "Step 4 — Split: 2x² + 3x − 4x − 6",
                        "Step 5 — Group: x(2x + 3) − 2(2x + 3)",
                        "Step 6 — Factorize inner: (2x + 3)(x − 2)",
                        "Step 7 — Restore the −1: −(2x + 3)(x − 2) or equivalently (2x + 3)(2 − x)",
                        "Verify: −(2x + 3)(x − 2) = −(2x² − 4x + 3x − 6) = −(2x² − x − 6) = −2x² + x + 6 ✓"
                    ]
                }
            ]
        }
    },

    specialIdentities: {
        differenceOfSquares: {
            identity: "a² − b² = (a + b)(a − b)",
            condition: "Exactly two terms, both perfect squares, connected by subtraction",
            keyInsight: "The sum of two squares a² + b² does NOT factorize over the reals — only the DIFFERENCE factorizes",
            steps: [
                "Confirm both terms are perfect squares",
                "Confirm the operation is subtraction",
                "Identify a = √(first term) and b = √(second term)",
                "Write: (a + b)(a − b)",
                "Verify by expanding: (a + b)(a − b) = a² − ab + ab − b² = a² − b²"
            ],
            workedExamples: [
                {
                    type: "Simple numerical squares",
                    problem: "Factorize: x² − 25",
                    solution: [
                        "Step 1 — Both terms are perfect squares: x² = (x)² and 25 = (5)²",
                        "Step 2 — Operation is subtraction ✓",
                        "Step 3 — a = x, b = 5",
                        "Step 4 — Factorize: (x + 5)(x − 5)",
                        "Verify: (x + 5)(x − 5) = x² − 5x + 5x − 25 = x² − 25 ✓"
                    ]
                },
                {
                    type: "Coefficient in first term",
                    problem: "Factorize: 4x² − 9",
                    solution: [
                        "Step 1 — 4x² = (2x)² and 9 = (3)²",
                        "Step 2 — a = 2x, b = 3",
                        "Step 3 — Factorize: (2x + 3)(2x − 3)",
                        "Verify: (2x + 3)(2x − 3) = 4x² − 6x + 6x − 9 = 4x² − 9 ✓"
                    ]
                },
                {
                    type: "HCF extraction first",
                    problem: "Factorize: 3x² − 75",
                    solution: [
                        "Step 1 — Extract HCF: 3(x² − 25)",
                        "Step 2 — Factorize x² − 25: (x + 5)(x − 5)",
                        "Step 3 — Full factorization: 3(x + 5)(x − 5)",
                        "Verify: 3(x + 5)(x − 5) = 3(x² − 25) = 3x² − 75 ✓"
                    ]
                },
                {
                    type: "Higher powers",
                    problem: "Factorize: x⁴ − 16",
                    solution: [
                        "Step 1 — x⁴ = (x²)² and 16 = (4)²; apply difference of squares",
                        "Step 2 — First factorization: (x² + 4)(x² − 4)",
                        "Step 3 — x² − 4 is itself a difference of squares: (x + 2)(x − 2)",
                        "Step 4 — Note: x² + 4 does NOT factorize over the reals",
                        "Step 5 — Full factorization: (x² + 4)(x + 2)(x − 2)",
                        "Verify: (x + 2)(x − 2) = x² − 4; (x² + 4)(x² − 4) = x⁴ − 16 ✓"
                    ]
                }
            ]
        },
        perfectSquareTrinomials: {
            identities: {
                sumSquared:        "a² + 2ab + b² = (a + b)²",
                differenceSquared: "a² − 2ab + b² = (a − b)²"
            },
            recognitionPattern: "First term is a perfect square; last term is a perfect square; middle term is exactly twice the product of the square roots of the first and last terms",
            steps: [
                "Check that the first and last terms are perfect squares",
                "Compute √(first term) = a and √(last term) = b",
                "Check that the middle term equals ±2ab",
                "If middle term is +2ab, write (a + b)²; if −2ab, write (a − b)²",
                "Verify by expanding"
            ],
            workedExamples: [
                {
                    type: "Sum squared",
                    problem: "Factorize: x² + 6x + 9",
                    solution: [
                        "Step 1 — First term x² = (x)²; last term 9 = (3)²",
                        "Step 2 — a = x, b = 3",
                        "Step 3 — Check middle term: 2ab = 2(x)(3) = 6x ✓",
                        "Step 4 — Middle term is positive → (a + b)²",
                        "Step 5 — Factorize: (x + 3)²",
                        "Verify: (x + 3)² = x² + 6x + 9 ✓"
                    ]
                },
                {
                    type: "Difference squared",
                    problem: "Factorize: 4x² − 20x + 25",
                    solution: [
                        "Step 1 — 4x² = (2x)² and 25 = (5)²",
                        "Step 2 — a = 2x, b = 5",
                        "Step 3 — Check middle term: 2ab = 2(2x)(5) = 20x; middle term is −20x ✓",
                        "Step 4 — Middle term is negative → (a − b)²",
                        "Step 5 — Factorize: (2x − 5)²",
                        "Verify: (2x − 5)² = 4x² − 20x + 25 ✓"
                    ]
                }
            ]
        }
    },

    multiStepFactorization: {
        goldenRule: "ALWAYS extract the HCF first, before attempting any other technique. Failure to do so is the single most common cause of incomplete factorization.",
        procedureOrder: [
            "Step 1 — Extract any HCF (numerical and/or variable)",
            "Step 2 — Count the terms remaining in the bracket:",
            "  → 2 terms: check for difference of squares",
            "  → 3 terms: check for perfect square trinomial, then factorize as quadratic",
            "  → 4 terms: factorize by grouping",
            "Step 3 — Check whether any resulting factor can be factorized further",
            "Step 4 — Verify by expanding completely"
        ],
        workedExamples: [
            {
                type: "HCF then difference of squares",
                problem: "Factorize: 5x² − 45",
                solution: [
                    "Step 1 — Extract HCF: 5(x² − 9)",
                    "Step 2 — x² − 9 is a difference of squares: (x + 3)(x − 3)",
                    "Step 3 — Full factorization: 5(x + 3)(x − 3)",
                    "Verify: 5(x + 3)(x − 3) = 5(x² − 9) = 5x² − 45 ✓"
                ]
            },
            {
                type: "HCF then quadratic trinomial",
                problem: "Factorize: 2x³ − 10x² + 12x",
                solution: [
                    "Step 1 — Extract HCF: 2x(x² − 5x + 6)",
                    "Step 2 — Factorize x² − 5x + 6: find p + q = −5, pq = 6 → p = −2, q = −3",
                    "Step 3 — Inner factorization: (x − 2)(x − 3)",
                    "Step 4 — Full factorization: 2x(x − 2)(x − 3)",
                    "Verify: 2x(x − 2)(x − 3) = 2x(x² − 5x + 6) = 2x³ − 10x² + 12x ✓"
                ]
            }
        ]
    },

    solvingByFactorization: {
        zeroproductProperty: "If AB = 0, then A = 0 or B = 0. This is the principle that converts a factorized equation into two linear equations.",
        steps: [
            "Rearrange the equation so that one side equals zero",
            "Factorize the non-zero side completely",
            "Apply the zero-product property: set each factor equal to zero",
            "Solve each resulting linear equation",
            "Check all solutions by substituting back into the original equation"
        ],
        workedExamples: [
            {
                type: "Monic quadratic",
                problem: "Solve: x² + 3x − 10 = 0",
                solution: [
                    "Step 1 — Already equal to zero ✓",
                    "Step 2 — Factorize: find p + q = 3 and pq = −10 → p = 5, q = −2",
                    "Step 3 — Factorized form: (x + 5)(x − 2) = 0",
                    "Step 4 — Apply zero-product property: x + 5 = 0 or x − 2 = 0",
                    "Step 5 — Solve: x = −5 or x = 2",
                    "Check x = −5: (−5)² + 3(−5) − 10 = 25 − 15 − 10 = 0 ✓",
                    "Check x = 2: 4 + 6 − 10 = 0 ✓"
                ]
            },
            {
                type: "Equation requiring rearrangement",
                problem: "Solve: 2x² = 5x + 3",
                solution: [
                    "Step 1 — Rearrange: 2x² − 5x − 3 = 0",
                    "Step 2 — AC method: a × c = 2 × (−3) = −6; find m + n = −5 and mn = −6",
                    "Factor pair: (1, −6) → sum = −5 ✓",
                    "Step 3 — Split: 2x² + x − 6x − 3",
                    "Step 4 — Group: x(2x + 1) − 3(2x + 1) = (2x + 1)(x − 3) = 0",
                    "Step 5 — Solve: 2x + 1 = 0 → x = −1/2; x − 3 = 0 → x = 3",
                    "Check x = −1/2: 2(1/4) = 1/2; 5(−1/2) + 3 = −5/2 + 3 = 1/2 ✓",
                    "Check x = 3: 2(9) = 18; 5(3) + 3 = 18 ✓"
                ]
            },
            {
                type: "Difference of squares equation",
                problem: "Solve: 9x² − 16 = 0",
                solution: [
                    "Step 1 — Recognize difference of squares: (3x)² − (4)²",
                    "Step 2 — Factorize: (3x + 4)(3x − 4) = 0",
                    "Step 3 — Solve: 3x + 4 = 0 → x = −4/3; 3x − 4 = 0 → x = 4/3",
                    "Check x = 4/3: 9(16/9) − 16 = 16 − 16 = 0 ✓"
                ]
            }
        ]
    },

    topicSummary: {
        coreInsights: [
            "Factorization is expansion in reverse — always verify any factorization by expanding the result back to the original expression.",
            "Extract the HCF before any other technique — this simplifies all subsequent steps and is the most commonly skipped step in multi-stage factorization.",
            "For quadratic trinomials, the central task is always finding two numbers with a specified sum and product — this is the pattern behind both monic (a = 1) and non-monic (a ≠ 1) factorization.",
            "The difference of two squares identity a² − b² = (a + b)(a − b) is one of the most powerful and frequently examined identities in algebra — recognizing it on sight saves significant time.",
            "The sum of two squares a² + b² does NOT factorize over the real numbers — attempting to factorize it is one of the most common algebraic errors.",
            "Perfect square trinomials are recognized by checking three conditions: perfect square first term, perfect square last term, middle term = 2ab.",
            "The zero-product property is the bridge between factorization and equation solving — it only applies when one side is exactly zero.",
            "Multi-step factorization always follows the same order: HCF first, then inspect the remaining terms for the appropriate technique."
        ],
        keyFormulas: {
            differenceOfSquares:          "a² − b² = (a + b)(a − b)",
            perfectSquareSum:             "a² + 2ab + b² = (a + b)²",
            perfectSquareDifference:      "a² − 2ab + b² = (a − b)²",
            zeroproductProperty:          "If AB = 0 then A = 0 or B = 0",
            acMethodCondition:            "For ax² + bx + c: find m, n where m + n = b and m × n = ac"
        },
        techniqueSelectionGuide: {
            twoTerms:       "Difference of squares if a² − b²; otherwise check for HCF only",
            threeTerms:     "Check perfect square trinomial first; then factorize as quadratic (a = 1: inspection; a ≠ 1: AC method)",
            fourTerms:      "Factorize by grouping (two pairs of two terms)",
            anyExpression:  "Extract HCF first, always, before applying any other technique"
        },
        commonMistakesToAvoid: [
            "Forgetting to extract the HCF before attempting other techniques — leads to unnecessarily complex intermediate expressions",
            "Attempting to factorize a sum of squares a² + b² — this does not factorize over the real numbers",
            "Writing (a + b)² = a² + b² — the correct expansion is a² + 2ab + b², the middle term 2ab is never zero unless a = 0 or b = 0",
            "Forgetting the HCF as part of the final answer — writing (x + 3)(x − 3) when the full answer is 5(x + 3)(x − 3)",
            "Applying the zero-product property before rearranging to equal zero — the property requires zero on one side",
            "Sign errors when factorizing by grouping — extracting a negative HCF from the second group changes the sign of both terms inside the bracket",
            "Stopping after one application of difference of squares when the result is further factorisable (e.g. x⁴ − 16)"
        ],
        connections: [
            "Expanding brackets: factorization is exactly the inverse process — fluency in expansion directly supports fluency in factorization",
            "Quadratic equations: every quadratic equation solvable by factorization depends on extracting two linear factors and applying the zero-product property",
            "Algebraic fractions: factorizing the numerator and denominator reveals common factors that can be cancelled — the algebraic equivalent of simplifying 6/9 to 2/3",
            "Coordinate geometry: the factorized form of a quadratic reveals its x-intercepts (roots) immediately — connecting algebra to the graph of a parabola",
            "Further algebra: factorization of cubics and higher-degree polynomials, polynomial long division, and partial fractions all build directly on quadratic factorization techniques"
        ],
        examReadinessChecklist: [
            "Can you extract the HCF from any expression before applying any other technique?",
            "Can you factorize x² + bx + c by finding two numbers that sum to b and multiply to c?",
            "Can you apply the AC method to factorize ax² + bx + c when a ≠ 1?",
            "Can you recognize and apply the difference of two squares identity without prompting?",
            "Can you recognize a perfect square trinomial and write its factorized form?",
            "Can you solve a quadratic equation by factorization, remembering to rearrange to zero first?"
        ]
    }
},


transformations: {
    title: "Transformations: Translations, Reflections, Rotations, and Enlargements",

    databaseLinks: {
        misconceptions: [
            'translationBasics',
            'reflectionBasics',
            'rotationBasics',
            'enlargementBasics',
            'combinedTransformations'
        ],
        contextualScenarios: [
            'translationBasics',
            'reflectionBasics',
            'rotationBasics',
            'enlargementBasics'
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
            'translationBasics',
            'reflectionBasics',
            'rotationBasics',
            'enlargementBasics'
        ]
    },

    conceptLinks: {
        "A transformation moves or changes a shape according to a precise mathematical rule": {
            misconceptions:      ['translationBasics'],
            scenarios:           ['translationBasics'],
            studyTips:           ['diagrams', 'flashcards'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['translationBasics']
        },
        "A translation slides every point of a shape by the same vector": {
            misconceptions:      ['translationBasics'],
            scenarios:           ['translationBasics'],
            studyTips:           ['diagrams', 'graphingPractice'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['translationBasics']
        },
        "A reflection maps every point to its mirror image across a line of symmetry": {
            misconceptions:      ['reflectionBasics'],
            scenarios:           ['reflectionBasics'],
            studyTips:           ['diagrams', 'comparisonTables', 'graphingPractice'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['reflectionBasics']
        },
        "A rotation turns every point through a given angle about a fixed centre": {
            misconceptions:      ['rotationBasics'],
            scenarios:           ['rotationBasics'],
            studyTips:           ['diagrams', 'flashcards', 'practiceRoutines'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate'],
            assessmentQuestions: ['rotationBasics']
        },
        "An enlargement scales a shape by a scale factor from a fixed centre": {
            misconceptions:      ['enlargementBasics'],
            scenarios:           ['enlargementBasics'],
            studyTips:           ['diagrams', 'comparisonTables', 'mnemonics'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions: ['enlargementBasics']
        },
        "Combined transformations apply two or more transformations in sequence": {
            misconceptions:      ['combinedTransformations'],
            scenarios:           ['translationBasics', 'reflectionBasics'],
            studyTips:           ['workedExampleAnalysis', 'practiceRoutines'],
            assessmentRubrics:   ['analyze', 'evaluate', 'create'],
            assessmentQuestions: ['translationBasics']
        }
    },

    topicIntroduction: {
        overview: "A transformation is a precise mathematical rule that maps every point of a shape to a new position, producing an image of the original object. The four fundamental transformations — translation, reflection, rotation, and enlargement — underpin all of geometry, computer graphics, physics, and design. In this lesson we develop the ability to perform, describe, and combine each transformation on the coordinate plane, using both geometric reasoning and algebraic coordinate rules.",
        whyItMatters: "Transformations are the language of symmetry, and symmetry is the language of nature and design. Every snowflake, tessellation, architectural plan, and computer animation is built from transformations. In mathematics, understanding how shapes move and scale without losing their essential properties is foundational to vector geometry, matrix algebra, complex numbers, and calculus of curves. In technology, transformation matrices drive every computer graphics engine, every GPS coordinate conversion, and every medical imaging system.",
        bigPicture: "Every transformation can be classified by what properties it preserves. Isometries — translations, reflections, and rotations — preserve side lengths and angles, so the image is congruent to the object. Enlargements preserve angles but change lengths, producing similar (not congruent) images. Understanding which properties are preserved and which are changed is the organising principle of the entire topic.",
        priorKnowledge: [
            "Coordinate geometry: plotting and reading points on the x-y plane, all four quadrants",
            "Basic geometry: properties of triangles, quadrilaterals, and polygons (side lengths, angles)",
            "Symmetry: recognising lines of symmetry in simple shapes",
            "Fractions and negative numbers: essential for scale factors and vector components",
            "Angle measurement: degrees, right angles, clockwise and anticlockwise directions",
            "Vectors: basic column vector notation (optional but helpful for translation)"
        ],
        topicRoadmap: [
            "What transformations are and how they are classified (isometry vs non-isometry)",
            "Translation: column vectors, mapping notation, properties preserved",
            "Reflection: mirror lines on and off the axes, coordinate rules for standard lines",
            "Rotation: centre, angle, direction; rotating about the origin and other centres",
            "Enlargement: scale factor, centre of enlargement, fractional and negative scale factors",
            "Describing transformations fully: the minimum information needed for each type",
            "Combined transformations: applying two in sequence and finding single equivalent transformations"
        ]
    },

    concepts: [
        "A transformation moves or changes a shape according to a precise mathematical rule",
        "A translation slides every point of a shape by the same vector",
        "A reflection maps every point to its mirror image across a line of symmetry",
        "A rotation turns every point through a given angle about a fixed centre",
        "An enlargement scales a shape by a scale factor from a fixed centre",
        "Isometric transformations preserve length and angle; enlargements preserve angle only",
        "Combined transformations apply two or more transformations in sequence"
    ],

    theory: "A transformation is a function that maps every point of the plane to exactly one image point. When the transformation is applied to all points of a shape (the object), the result is the image. Transformations that preserve all distances are called isometries; those that preserve shape but change size are called similarities. Coordinates provide the algebraic framework for applying and describing all transformations precisely.",

    keyDefinitions: {
        "Transformation":         "A rule that maps every point of a shape to a new position, producing an image",
        "Object":                 "The original shape before a transformation is applied",
        "Image":                  "The resulting shape after a transformation has been applied",
        "Isometry":               "A transformation that preserves all distances and angles (translation, reflection, rotation)",
        "Congruent":              "Two shapes are congruent if one can be mapped exactly onto the other by an isometry",
        "Similar":                "Two shapes are similar if one is an enlargement of the other — same angles, proportional sides",
        "Translation":            "A transformation that slides every point of a shape by the same displacement vector",
        "Column Vector":          "A vector written as (a over b) — a gives horizontal displacement (right positive), b gives vertical displacement (up positive)",
        "Reflection":             "A transformation that maps every point to its mirror image across a fixed line (the mirror line)",
        "Mirror Line":            "The fixed line of symmetry across which a reflection is performed; each point and its image are equidistant from this line",
        "Rotation":               "A transformation that turns every point of a shape through a specified angle about a fixed point (the centre of rotation)",
        "Centre of Rotation":     "The fixed point about which a rotation is performed; it is the only point that does not move",
        "Enlargement":            "A transformation that scales every distance from a fixed point (the centre of enlargement) by a scale factor k",
        "Scale Factor":           "The ratio of a length on the image to the corresponding length on the object; k > 1 enlarges, 0 < k < 1 reduces, k negative produces an image on the opposite side",
        "Centre of Enlargement":  "The fixed point from which all distances are scaled; rays from this point through object vertices pass through the corresponding image vertices",
        "Invariant Point":        "A point that maps to itself under a transformation; all points on the mirror line are invariant under reflection"
    },

    classificationOfTransformations: {
        isometries: {
            definition: "Transformations that preserve all distances and all angles. The image is always congruent to the object.",
            members: ["Translation", "Reflection", "Rotation"],
            propertiesPreserved: ["Side lengths", "Angles", "Area", "Perimeter"],
            propertiesChanged: ["Position", "Orientation (reflection reverses; rotation and translation preserve)"]
        },
        similarities: {
            definition: "Transformations that preserve all angles but scale all distances by a constant factor. The image is similar to (but not congruent with) the object, unless the scale factor is ±1.",
            members: ["Enlargement"],
            propertiesPreserved: ["All angles", "Ratios of corresponding sides", "Shape"],
            propertiesChanged: ["Side lengths (multiplied by |k|)", "Area (multiplied by k²)", "Perimeter (multiplied by |k|)"]
        },
        orientationNote: "Translation and rotation preserve orientation (the order of vertices reads the same way round). Reflection reverses orientation (the image is a mirror image — left and right are swapped). A negative scale factor enlargement also reverses orientation."
    },

    translation: {
        definition: "A translation moves every point of a shape the same horizontal and vertical distance. It is described by a column vector (a over b) where a is the horizontal component (positive = right, negative = left) and b is the vertical component (positive = up, negative = down).",
        properties: [
            "Every point moves by exactly the same vector — the shape does not rotate or resize",
            "The image is congruent to the object",
            "Orientation is preserved — the image is not flipped",
            "No point is invariant (every point moves), unless the vector is (0 over 0)",
            "Parallel lines remain parallel; angles are unchanged"
        ],
        coordinateRule: "If a shape is translated by vector (a over b), every point (x, y) maps to (x + a, y + b).",
        workedExample: {
            problem: "Triangle ABC has vertices A(1, 2), B(4, 2), C(4, 5). Translate the triangle by the vector (−3 over 2). Find the coordinates of the image vertices A′, B′, C′.",
            solution: [
                "Step 1 — Identify the translation vector: a = −3 (move 3 left), b = 2 (move 2 up)",
                "Step 2 — Apply the rule (x, y) → (x + a, y + b) = (x − 3, y + 2) to each vertex:",
                "A(1, 2) → A′(1 − 3, 2 + 2) = A′(−2, 4)",
                "B(4, 2) → B′(4 − 3, 2 + 2) = B′(1, 4)",
                "C(4, 5) → C′(4 − 3, 5 + 2) = C′(1, 7)",
                "Step 3 — Verify: all points moved 3 left and 2 up — check that AB = A′B′ = 3 units ✓",
                "Step 4 — The image triangle A′B′C′ has vertices (−2, 4), (1, 4), (1, 7)"
            ]
        },
        describingATranslation: {
            minimumInformation: "The column vector (a over b). Simply saying 'moved left 3 and up 2' is insufficient in formal mathematics — the column vector is required.",
            findingTheVector: "To find the translation vector from an object point P to its image P′, calculate: vector = (x′ − x over y′ − y). This works for any corresponding pair of points — all pairs give the same vector."
        }
    },

    reflection: {
        definition: "A reflection maps every point of a shape to its mirror image across a fixed line called the mirror line (or line of reflection). Every point and its image are equidistant from the mirror line, and the line joining a point to its image is perpendicular to the mirror line.",
        properties: [
            "The image is congruent to the object",
            "Orientation is reversed — the image is a mirror image (left-right or up-down swapped)",
            "Every point on the mirror line is invariant (maps to itself)",
            "The mirror line is the perpendicular bisector of the segment joining any point to its image"
        ],
        standardMirrorLines: {
            xAxis: {
                equation: "y = 0",
                rule: "(x, y) → (x, −y) — the x-coordinate stays the same; the y-coordinate changes sign"
            },
            yAxis: {
                equation: "x = 0",
                rule: "(x, y) → (−x, y) — the y-coordinate stays the same; the x-coordinate changes sign"
            },
            yEqualsX: {
                equation: "y = x",
                rule: "(x, y) → (y, x) — the x and y coordinates swap"
            },
            yEqualsNegX: {
                equation: "y = −x",
                rule: "(x, y) → (−y, −x) — coordinates swap and both change sign"
            },
            horizontalLine: {
                equation: "y = k",
                rule: "(x, y) → (x, 2k − y) — reflect the y-coordinate across y = k"
            },
            verticalLine: {
                equation: "x = k",
                rule: "(x, y) → (2k − x, y) — reflect the x-coordinate across x = k"
            }
        },
        workedExample: {
            problem: "Reflect triangle PQR with vertices P(2, 1), Q(5, 1), R(5, 4) in the line y = x. Find the image vertices P′, Q′, R′.",
            solution: [
                "Step 1 — Identify the mirror line: y = x. The rule is (x, y) → (y, x) — swap the coordinates.",
                "Step 2 — Apply the rule to each vertex:",
                "P(2, 1) → P′(1, 2)",
                "Q(5, 1) → Q′(1, 5)",
                "R(5, 4) → R′(4, 5)",
                "Step 3 — Verify: check that each original point and its image are equidistant from y = x.",
                "For P(2, 1) and P′(1, 2): midpoint = (1.5, 1.5) — lies on y = x ✓. The segment PP′ has slope (2−1)/(1−2) = −1, perpendicular to y = x (slope 1) ✓.",
                "Step 4 — The image triangle P′Q′R′ has vertices (1, 2), (1, 5), (4, 5)"
            ]
        },
        workedExampleOffAxis: {
            problem: "Reflect point A(3, 5) in the line x = 1. Find the image A′.",
            solution: [
                "Step 1 — Mirror line: x = 1 (a vertical line, k = 1). Rule: (x, y) → (2k − x, y) = (2 − x, y).",
                "Step 2 — Apply: A(3, 5) → A′(2(1) − 3, 5) = A′(−1, 5).",
                "Step 3 — Verify: distance from A to mirror line: 3 − 1 = 2 units to the right. Distance from A′ to mirror line: 1 − (−1) = 2 units to the left. Equal distances, correct side ✓."
            ]
        },
        describingAReflection: {
            minimumInformation: "The equation of the mirror line. 'Reflected in the y-axis' is acceptable shorthand but 'reflected in x = 0' is the formal description."
        }
    },

    rotation: {
        definition: "A rotation turns every point of a shape through a specified angle about a fixed point called the centre of rotation. The direction of rotation is stated as clockwise or anticlockwise (counterclockwise). The centre of rotation is the only invariant point.",
        properties: [
            "The image is congruent to the object",
            "Orientation is preserved (anticlockwise rotation) or effectively preserved (clockwise) — unlike reflection, rotation does not produce a mirror image",
            "All distances from the centre of rotation are preserved",
            "The centre of rotation is the only point that does not move"
        ],
        standardRotationsAboutOrigin: {
            "90° anticlockwise": {
                rule: "(x, y) → (−y, x)",
                equivalentTo: "270° clockwise"
            },
            "90° clockwise": {
                rule: "(x, y) → (y, −x)",
                equivalentTo: "270° anticlockwise"
            },
            "180°": {
                rule: "(x, y) → (−x, −y)",
                note: "Direction (clockwise or anticlockwise) is not needed — 180° is the same in both directions"
            },
            "270° anticlockwise": {
                rule: "(x, y) → (y, −x)",
                equivalentTo: "90° clockwise"
            }
        },
        workedExampleOrigin: {
            problem: "Rotate triangle ABC with vertices A(1, 0), B(3, 0), C(3, 2) by 90° anticlockwise about the origin. Find the image vertices.",
            solution: [
                "Step 1 — Identify transformation: 90° anticlockwise about origin. Rule: (x, y) → (−y, x).",
                "Step 2 — Apply to each vertex:",
                "A(1, 0) → A′(−0, 1) = A′(0, 1)",
                "B(3, 0) → B′(−0, 3) = B′(0, 3)",
                "C(3, 2) → C′(−2, 3)",
                "Step 3 — Verify: check that OA = OA′. OA = √(1² + 0²) = 1. OA′ = √(0² + 1²) = 1 ✓.",
                "Check angle: A is at angle 0° from origin; A′ is at angle 90° — correctly rotated anticlockwise ✓.",
                "Step 4 — Image triangle A′B′C′ has vertices (0, 1), (0, 3), (−2, 3)"
            ]
        },
        rotationAboutOtherCentres: {
            method: [
                "Step 1 — Translate the entire shape so the centre of rotation moves to the origin: subtract the centre coordinates from every point",
                "Step 2 — Apply the standard rotation rule about the origin",
                "Step 3 — Translate back by adding the centre coordinates to every image point"
            ],
            workedExample: {
                problem: "Rotate point P(5, 3) by 90° clockwise about the centre C(2, 1). Find P′.",
                solution: [
                    "Step 1 — Translate so C moves to origin: subtract (2, 1) from P: P_translated = (5 − 2, 3 − 1) = (3, 2).",
                    "Step 2 — Apply 90° clockwise rule (x, y) → (y, −x): (3, 2) → (2, −3).",
                    "Step 3 — Translate back: add (2, 1): P′ = (2 + 2, −3 + 1) = P′(4, −2).",
                    "Verify: CP = √((5−2)² + (3−1)²) = √(9 + 4) = √13. CP′ = √((4−2)² + (−2−1)²) = √(4 + 9) = √13 ✓."
                ]
            }
        },
        findingCentreOfRotation: {
            method: "Draw the perpendicular bisectors of the segments connecting each object vertex to its image vertex. These perpendicular bisectors all intersect at the centre of rotation.",
            tip: "It is sufficient to find the intersection of any two such perpendicular bisectors — the third will confirm."
        },
        describingARotation: {
            minimumInformation: "Three pieces of information: (1) the coordinates of the centre of rotation, (2) the angle of rotation, (3) the direction (clockwise or anticlockwise). For 180°, direction may be omitted."
        }
    },

    enlargement: {
        definition: "An enlargement maps every point of a shape to a new position such that the distance from the centre of enlargement is multiplied by the scale factor k. If k > 1 the image is larger; if 0 < k < 1 the image is smaller; if k is negative the image appears on the opposite side of the centre and is rotated 180°.",
        properties: [
            "All angles are preserved — the image is similar to (the same shape as) the object",
            "All lengths are multiplied by |k| — the image is not congruent to the object unless k = ±1",
            "Area is multiplied by k² — a scale factor of 3 produces an image with 9 times the area",
            "Perimeter is multiplied by |k|",
            "A negative scale factor also reverses orientation (equivalent to enlargement followed by 180° rotation about the centre)"
        ],
        coordinateRule: "For centre of enlargement (cx, cy) and scale factor k: every point (x, y) maps to (cx + k(x − cx), cy + k(y − cy)).",
        workedExamplePositive: {
            problem: "Enlarge triangle with vertices A(1, 1), B(3, 1), C(3, 4) by scale factor 2 from centre of enlargement O(0, 0).",
            solution: [
                "Step 1 — Centre is the origin, so the rule simplifies to (x, y) → (kx, ky) = (2x, 2y).",
                "Step 2 — Apply to each vertex:",
                "A(1, 1) → A′(2, 2)",
                "B(3, 1) → B′(6, 2)",
                "C(3, 4) → C′(6, 8)",
                "Step 3 — Verify: AB = 2 (horizontal segment from x=1 to x=3). A′B′ = 4 (from x=2 to x=6). Ratio = 4/2 = 2 = k ✓.",
                "Step 4 — Check that O, A, A′ are collinear: O(0,0), A(1,1), A′(2,2) — all lie on y = x ✓.",
                "Step 5 — Area of object: base × height / 2 = 2 × 3 / 2 = 3 sq units. Area of image: 4 × 6 / 2 = 12 sq units. Ratio = 12/3 = 4 = k² ✓."
            ]
        },
        workedExampleNonOriginCentre: {
            problem: "Enlarge triangle PQR with P(3, 2), Q(5, 2), R(5, 5) by scale factor 3 from centre C(1, 1).",
            solution: [
                "Step 1 — Rule: (x, y) → (cx + k(x − cx), cy + k(y − cy)) = (1 + 3(x − 1), 1 + 3(y − 1)).",
                "Step 2 — Apply to each vertex:",
                "P(3, 2) → P′(1 + 3(2), 1 + 3(1)) = (1 + 6, 1 + 3) = P′(7, 4)",
                "Q(5, 2) → Q′(1 + 3(4), 1 + 3(1)) = (1 + 12, 1 + 3) = Q′(13, 4)",
                "R(5, 5) → R′(1 + 3(4), 1 + 3(4)) = (1 + 12, 1 + 12) = R′(13, 13)",
                "Step 3 — Verify: PQ = 2 (horizontal). P′Q′ = 6. Scale factor = 6/2 = 3 ✓.",
                "Step 4 — Check collinearity: C(1,1), P(3,2), P′(7,4). Vector CP = (2,1). Vector CP′ = (6,3) = 3×(2,1) ✓."
            ]
        },
        workedExampleNegativeScaleFactor: {
            problem: "Enlarge point A(4, 3) by scale factor −2 from centre C(1, 1). Find A′.",
            solution: [
                "Step 1 — Apply rule: (cx + k(x − cx), cy + k(y − cy)) = (1 + (−2)(4 − 1), 1 + (−2)(3 − 1))",
                "Step 2 — Calculate: (1 + (−2)(3), 1 + (−2)(2)) = (1 − 6, 1 − 4) = A′(−5, −3).",
                "Step 3 — Interpret: A′ is on the opposite side of C from A. Distance CA = √(9 + 4) = √13. Distance CA′ = √(36 + 16) = √52 = 2√13 = |k| × CA ✓.",
                "Step 4 — A, C, A′ are collinear but A′ is on the opposite side of C to A — characteristic of a negative scale factor."
            ]
        },
        fractionalScaleFactor: {
            explanation: "A scale factor between 0 and 1 produces an image smaller than the object. The image is on the same side of the centre as the object. A scale factor between −1 and 0 produces a smaller image on the opposite side.",
            workedExample: {
                problem: "Enlarge segment from A(2, 6) to B(6, 6) by scale factor 1/2 from centre C(0, 0).",
                solution: [
                    "Rule: (x, y) → (x/2, y/2).",
                    "A(2, 6) → A′(1, 3). B(6, 6) → B′(3, 3).",
                    "AB = 4. A′B′ = 2. Scale factor = 2/4 = 1/2 ✓. Image is half the size, closer to the centre."
                ]
            }
        },
        findingCentreOfEnlargement: {
            method: "Draw rays from each object vertex through the corresponding image vertex (or vice versa). All rays intersect at the centre of enlargement.",
            algebraicMethod: "For a single pair — object point P and image point P′ — the centre C lies on the line through P and P′. Use the scale factor to find C: C = (P − k·P′)/(1 − k) for each coordinate."
        },
        describingAnEnlargement: {
            minimumInformation: "Two pieces of information: (1) the scale factor k (with sign if negative), (2) the coordinates of the centre of enlargement."
        }
    },

    combinedTransformations: {
        definition: "A combined transformation applies two or more transformations in sequence. The image after the first transformation becomes the object for the second. The order matters — applying A then B generally gives a different result from applying B then A.",
        orderMatters: {
            explanation: "Transformations do not generally commute. Reflecting in the x-axis and then rotating 90° anticlockwise gives a different final image from rotating 90° anticlockwise and then reflecting in the x-axis.",
            workedExample: {
                problem: "Apply to point P(3, 1): (a) reflect in the x-axis, then rotate 90° anticlockwise about the origin; (b) rotate 90° anticlockwise about the origin, then reflect in the x-axis.",
                solution: [
                    "(a) Step 1 — Reflect P(3, 1) in x-axis: (x, y) → (x, −y) → P′(3, −1).",
                    "    Step 2 — Rotate P′(3, −1) by 90° anticlockwise: (x, y) → (−y, x) → P′′(1, 3). Final image: (1, 3).",
                    "(b) Step 1 — Rotate P(3, 1) by 90° anticlockwise: (x, y) → (−y, x) → P′(−1, 3).",
                    "    Step 2 — Reflect P′(−1, 3) in x-axis: (x, y) → (x, −y) → P′′(−1, −3). Final image: (−1, −3).",
                    "Conclusion: (1, 3) ≠ (−1, −3) — order matters."
                ]
            }
        },
        findingEquivalentSingle: {
            explanation: "Any combination of isometries can be described as a single transformation. Two reflections in parallel lines produce a translation; two reflections in intersecting lines produce a rotation. Identifying these equivalences is a key skill at higher levels.",
            keyResults: [
                "Two reflections in parallel lines → translation (vector perpendicular to lines, magnitude = twice the distance between lines)",
                "Two reflections in intersecting lines → rotation (centre at the intersection, angle = twice the angle between lines)",
                "Translation followed by translation → single translation (add the vectors)",
                "Rotation of 180° about a point followed by rotation of 180° about another point → translation"
            ]
        }
    },

    describingTransformationsSummary: {
        overview: "Every transformation must be described fully using the minimum required information. An incomplete description loses marks in formal assessment.",
        table: {
            translation:   { required: ["The word 'translation'", "The column vector (a over b)"] },
            reflection:    { required: ["The word 'reflection'", "The equation of the mirror line"] },
            rotation:      { required: ["The word 'rotation'", "The coordinates of the centre of rotation", "The angle of rotation", "The direction (clockwise or anticlockwise) — omit for 180°"] },
            enlargement:   { required: ["The word 'enlargement'", "The scale factor (including sign if negative)", "The coordinates of the centre of enlargement"] }
        }
    },

    topicSummary: {
        coreInsights: [
            "Every transformation maps each point of a shape to a unique image point — the transformation is a function on the plane.",
            "Translations, reflections, and rotations are isometries — they preserve all distances and angles, so the image is always congruent to the object.",
            "Enlargements preserve angles and shape but scale all lengths by |k| and all areas by k², so the image is similar to (but not congruent with) the object unless k = ±1.",
            "Reflection is the only standard transformation that reverses orientation. A negative scale factor enlargement also reverses orientation.",
            "The centre of rotation and the centre of enlargement are both fixed points — the most important single pieces of information when describing these transformations.",
            "A full description of a transformation requires the type plus the minimum specific information: vector for translation; mirror line equation for reflection; centre, angle, and direction for rotation; scale factor and centre for enlargement.",
            "The order in which combined transformations are applied matters — AB ≠ BA in general.",
            "Two reflections in intersecting lines produce a rotation; two reflections in parallel lines produce a translation — these results reveal the deep algebraic structure of transformations."
        ],
        keyCoordinateRules: {
            "Translation by (a over b)":              "(x, y) → (x + a, y + b)",
            "Reflection in x-axis (y = 0)":           "(x, y) → (x, −y)",
            "Reflection in y-axis (x = 0)":           "(x, y) → (−x, y)",
            "Reflection in y = x":                    "(x, y) → (y, x)",
            "Reflection in y = −x":                   "(x, y) → (−y, −x)",
            "Rotation 90° anticlockwise (origin)":    "(x, y) → (−y, x)",
            "Rotation 90° clockwise (origin)":        "(x, y) → (y, −x)",
            "Rotation 180° (origin)":                 "(x, y) → (−x, −y)",
            "Enlargement scale factor k (origin)":    "(x, y) → (kx, ky)",
            "Enlargement scale factor k centre (cx,cy)": "(x, y) → (cx + k(x−cx), cy + k(y−cy))"
        },
        propertiesPreservedTable: {
            translation:  { lengths: true,  angles: true,  area: true,  orientation: "preserved",  congruent: true,  similar: true  },
            reflection:   { lengths: true,  angles: true,  area: true,  orientation: "reversed",   congruent: true,  similar: true  },
            rotation:     { lengths: true,  angles: true,  area: true,  orientation: "preserved",  congruent: true,  similar: true  },
            enlargement:  { lengths: false, angles: true,  area: false, orientation: "preserved (positive k) / reversed (negative k)", congruent: false, similar: true }
        },
        commonMistakesToAvoid: [
            "Confusing clockwise and anticlockwise directions when rotating — always use a test point to verify direction",
            "Applying the enlargement rule (kx, ky) when the centre is not the origin — always adjust for a non-origin centre using (cx + k(x − cx), cy + k(y − cy))",
            "Forgetting to state the direction when describing a rotation (except for 180°)",
            "Reflecting in y = x by negating both coordinates — the rule is to swap them, not negate them",
            "Treating a scale factor of 1/2 as 'the image is halfway between the object and the centre' — the image distances from the centre are halved, not halfway from object to centre",
            "Assuming transformations commute — always apply in the stated order for combined transformations",
            "Omitting the centre of enlargement or centre of rotation from a description — these are required"
        ],
        connections: [
            "Vectors: translation vectors connect to vector addition; transformations connect to vector geometry in 3D",
            "Matrices: every transformation in this topic can be represented by a 2×2 matrix; combining transformations corresponds to matrix multiplication",
            "Complex numbers: rotations and enlargements in the plane correspond to multiplication by a complex number (r·e^{iθ})",
            "Symmetry groups: the set of all isometries of a shape forms a mathematical group — connecting to abstract algebra",
            "Computer graphics: all rendering engines use transformation matrices to position, rotate, and scale objects in 2D and 3D",
            "Calculus: the Jacobian of a transformation generalises scale factor to multivariable settings"
        ],
        examReadinessChecklist: [
            "Can you apply all four transformation types to any polygon on the coordinate plane using coordinate rules?",
            "Can you describe each transformation fully, giving the minimum correct information for each type?",
            "Do you know the coordinate rules for the four standard reflections (x-axis, y-axis, y = x, y = −x) from memory?",
            "Can you rotate a shape about a centre other than the origin using the translate–rotate–untranslate method?",
            "Can you calculate the image under a negative or fractional scale factor enlargement?",
            "Can you find the centre of rotation (perpendicular bisector method) and the centre of enlargement (ray method)?",
            "Can you apply two transformations in sequence and find the coordinates of the final image?"
        ]
    }
},

const EndSection2 = "close"