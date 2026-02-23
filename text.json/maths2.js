
        'pstCompletingSquareSteps': {
            name: 'PST Completing Square Steps',
            category: 'Factorization',
            subcategory: 'Perfect Square Trinomial',
            description: 'Algebraic step diagram: x²+bx → x²+bx+(b/2)² − (b/2)² → (x+b/2)²−(b/2)²',
            type: 'pst_completing_square_steps',
            b: 6,
            defaultOptions: {
                title: 'Completing the Square — Algebraic Steps',
                showEachStep: true,
                showAnnotations: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'pstVertexFormParabola': {
            name: 'PST Vertex Form Parabola',
            category: 'Factorization',
            subcategory: 'Perfect Square Trinomial',
            description: 'Parabola graph showing vertex (h,k) with completed square form a(x−h)²+k labelled',
            type: 'pst_vertex_form_parabola',
            a: 1,
            h: 2,
            k: -3,
            defaultOptions: {
                title: 'Vertex Form — Parabola',
                showVertex: true,
                showForm: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'pstDoubleRootTangentGraph': {
            name: 'PST Double Root Tangent Graph',
            category: 'Factorization',
            subcategory: 'Perfect Square Trinomial',
            description: 'Graph of (x−r)²=0 showing parabola tangent to x-axis at double root x=r',
            type: 'pst_double_root_tangent_graph',
            r: 2,
            defaultOptions: {
                title: 'Double Root — Tangent to X-Axis',
                showTangent: true,
                showRoot: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'pstAlgebraTilesSquareShape': {
            name: 'PST Algebra Tiles Square Shape',
            category: 'Factorization',
            subcategory: 'Perfect Square Trinomial',
            description: 'Algebra tile arrangement forming a perfect square for x²+6x+9=(x+3)²',
            type: 'pst_algebra_tiles_square_shape',
            defaultOptions: {
                title: 'Perfect Square — Algebra Tiles',
                showTiles: true,
                showSquareShape: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'pstCoefficientRecognitionGrid': {
            name: 'PST Coefficient Recognition Grid',
            category: 'Factorization',
            subcategory: 'Perfect Square Trinomial',
            description: 'Grid: first term, last term, √first, √last, 2×product, compare — for quick recognition',
            type: 'pst_coefficient_recognition_grid',
            defaultOptions: {
                title: 'Perfect Square Recognition Grid',
                showGrid: true,
                showSteps: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== FACTORIZATION — TRINOMIAL AC METHOD ==================
        // ============================================================

        'acmFactorPairTable': {
            name: 'ACM Factor Pair Table',
            category: 'Factorization',
            subcategory: 'Trinomial AC Method',
            description: 'Organized table of factor pairs of ac with sum column; correct pair highlighted',
            type: 'acm_factor_pair_table',
            a: 2,
            b: 7,
            c: 3,
            defaultOptions: {
                title: 'AC Method — Factor Pair Table',
                showTable: true,
                showHighlight: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'acmSplitMiddleTermArrows': {
            name: 'ACM Split Middle Term Arrows',
            category: 'Factorization',
            subcategory: 'Trinomial AC Method',
            description: 'Arrow diagram: bx split into px + qx with p and q labelled above',
            type: 'acm_split_middle_term_arrows',
            defaultOptions: {
                title: 'AC Method — Split Middle Term',
                showArrows: true,
                showLabels: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'acmGroupingCompletionFlow': {
            name: 'ACM Grouping Completion Flow',
            category: 'Factorization',
            subcategory: 'Trinomial AC Method',
            description: 'Flow: split → group two pairs → extract GCF from each → common binomial → result',
            type: 'acm_grouping_completion_flow',
            defaultOptions: {
                title: 'AC Method — Grouping Flow',
                showFlow: true,
                showSteps: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'acmBoxMethod2X2Grid': {
            name: 'ACM Box Method 2×2 Grid',
            category: 'Factorization',
            subcategory: 'Trinomial AC Method',
            description: '2×2 grid: ax² top-left, c bottom-right, px and qx in off-diagonal cells',
            type: 'acm_box_method_2x2_grid',
            defaultOptions: {
                title: 'AC Method — 2×2 Box Method',
                showGrid: true,
                showFactors: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'acmSignRuleQuadrantChart': {
            name: 'ACM Sign Rule Quadrant Chart',
            category: 'Factorization',
            subcategory: 'Trinomial AC Method',
            description: 'Four-quadrant chart: sign of c and b → sign of both factors (all four cases)',
            type: 'acm_sign_rule_quadrant_chart',
            defaultOptions: {
                title: 'AC Method — Sign Rule Quadrant Chart',
                showFourCases: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'acmDiscriminantFactorability': {
            name: 'ACM Discriminant Factorability',
            category: 'Factorization',
            subcategory: 'Trinomial AC Method',
            description: 'Visual: b²−4ac computed; perfect square → factors exist; not → quadratic formula needed',
            type: 'acm_discriminant_factorability',
            defaultOptions: {
                title: 'Discriminant — Factorability Check',
                showTest: true,
                showCases: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'acmAEquals1Shortcut': {
            name: 'ACM a Equals 1 Shortcut',
            category: 'Factorization',
            subcategory: 'Trinomial AC Method',
            description: 'Simplified diagram for x²+bx+c: two numbers multiply to c and add to b',
            type: 'acm_a_equals_1_shortcut',
            defaultOptions: {
                title: 'a=1 Shortcut — Find Two Numbers',
                showShortcut: true,
                showExample: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'acmVerificationExpandFoil': {
            name: 'ACM Verification Expand FOIL',
            category: 'Factorization',
            subcategory: 'Trinomial AC Method',
            description: 'FOIL expansion arrows verifying factored form equals original trinomial',
            type: 'acm_verification_expand_foil',
            defaultOptions: {
                title: 'AC Method — Verification by FOIL',
                showFOIL: true,
                showVerification: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'acmRootsAndXIntercepts': {
            name: 'ACM Roots and X-Intercepts',
            category: 'Factorization',
            subcategory: 'Trinomial AC Method',
            description: 'Parabola graph with roots marked; factors (x−r₁)(x−r₂) labelled at intercepts',
            type: 'acm_roots_and_xintercepts',
            root1: -3,
            root2: 1,
            defaultOptions: {
                title: 'Roots and X-Intercepts',
                showParabola: true,
                showFactors: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'acmGcfFirstThenAcFlow': {
            name: 'ACM GCF First Then AC Flow',
            category: 'Factorization',
            subcategory: 'Trinomial AC Method',
            description: 'Two-stage flowchart: extract GCF → apply AC method to simplified trinomial',
            type: 'acm_gcf_first_then_ac_flow',
            defaultOptions: {
                title: 'GCF First → AC Method Flow',
                showTwoStages: true,
                showFlow: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== FACTORIZATION — SUM AND DIFFERENCE OF CUBES ==========
        // ============================================================

        'cubesPerfectCubeTable': {
            name: 'Cubes Perfect Cube Table',
            category: 'Factorization',
            subcategory: 'Sum and Difference of Cubes',
            description: 'Reference table: 1³ through 10³ with cube roots labelled',
            type: 'cubes_perfect_cube_table',
            defaultOptions: {
                title: 'Perfect Cubes Reference Table',
                showTable: true,
                showCubeRoots: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'cubesSoapSignDiagram': {
            name: 'Cubes SOAP Sign Diagram',
            category: 'Factorization',
            subcategory: 'Sum and Difference of Cubes',
            description: 'SOAP mnemonic visual: Same / Opposite / Always Positive with colour-coded signs',
            type: 'cubes_soap_sign_diagram',
            defaultOptions: {
                title: 'SOAP Mnemonic — Cubes Signs',
                showMnemonic: true,
                showColourCoded: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'cubesSumFormulaLabelled': {
            name: 'Cubes Sum Formula Labelled',
            category: 'Factorization',
            subcategory: 'Sum and Difference of Cubes',
            description: 'a³+b³ = (a+b)(a²−ab+b²) with each term colour-coded and origin explained',
            type: 'cubes_sum_formula_labelled',
            defaultOptions: {
                title: 'Sum of Cubes Formula — Labelled',
                showFormula: true,
                showColourCode: true,
                showOrigin: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'cubesDifferenceFormulaLabelled': {
            name: 'Cubes Difference Formula Labelled',
            category: 'Factorization',
            subcategory: 'Sum and Difference of Cubes',
            description: 'a³−b³ = (a−b)(a²+ab+b²) with each term colour-coded and origin explained',
            type: 'cubes_difference_formula_labelled',
            defaultOptions: {
                title: 'Difference of Cubes Formula — Labelled',
                showFormula: true,
                showColourCode: true,
                showOrigin: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'cubesExpansionVerification': {
            name: 'Cubes Expansion Verification',
            category: 'Factorization',
            subcategory: 'Sum and Difference of Cubes',
            description: 'FOIL/distribution arrows expanding (a+b)(a²−ab+b²) back to a³+b³ step by step',
            type: 'cubes_expansion_verification',
            defaultOptions: {
                title: 'Sum of Cubes — Expansion Verification',
                showDistribution: true,
                showCancellation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'cubesIrreducibilityProof': {
            name: 'Cubes Irreducibility Proof',
            category: 'Factorization',
            subcategory: 'Sum and Difference of Cubes',
            description: 'Discriminant calculation for a²−ab+b²: Δ=b²−4a² → always negative → irreducible',
            type: 'cubes_irreducibility_proof',
            defaultOptions: {
                title: 'Quadratic Factor — Irreducibility Proof',
                showDiscriminant: true,
                showConclusion: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'cubes3DVolumeGeometry': {
            name: 'Cubes 3D Volume Geometry',
            category: 'Factorization',
            subcategory: 'Sum and Difference of Cubes',
            description: '3D diagram: large cube a³ minus small cube b³ shown as geometric volume difference',
            type: 'cubes_3d_volume_geometry',
            a: 4,
            b: 2,
            defaultOptions: {
                title: 'Difference of Cubes — 3D Volume',
                show3D: true,
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'cubesGcfThenCubeFlow': {
            name: 'Cubes GCF Then Cube Flow',
            category: 'Factorization',
            subcategory: 'Sum and Difference of Cubes',
            description: 'Flowchart: extract GCF → identify cube pattern → apply SOAP formula',
            type: 'cubes_gcf_then_cube_flow',
            defaultOptions: {
                title: 'GCF → Cube Formula Flow',
                showFlow: true,
                showSteps: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'cubesMixedPatternTree': {
            name: 'Cubes Mixed Pattern Tree',
            category: 'Factorization',
            subcategory: 'Sum and Difference of Cubes',
            description: 'Factor tree for x⁶−1: difference of squares splits → each factor uses cube formula',
            type: 'cubes_mixed_pattern_tree',
            defaultOptions: {
                title: 'Mixed Pattern — Factor Tree',
                showTree: true,
                showBothPatterns: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'cubesCubeRootExtraction': {
            name: 'Cubes Cube Root Extraction',
            category: 'Factorization',
            subcategory: 'Sum and Difference of Cubes',
            description: 'Step diagram: identifying a and b from expressions like 27x³ = (3x)³',
            type: 'cubes_cube_root_extraction',
            defaultOptions: {
                title: 'Cube Root Extraction — Identifying a and b',
                showSteps: true,
                showExamples: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== FACTORIZATION — COMPLETE FACTORIZATION STRATEGY ======
        // ============================================================

        'cfDecisionFlowchart': {
            name: 'CF Decision Flowchart',
            category: 'Factorization',
            subcategory: 'Complete Factorization',
            description: 'Full decision tree: GCF? → count terms → identify pattern → apply → check factors → verify',
            type: 'cf_decision_flowchart',
            defaultOptions: {
                title: 'Complete Factorization — Decision Flowchart',
                showFullTree: true,
                showExamples: true,
                width: 900,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'cfTermCountGuide': {
            name: 'CF Term Count Guide',
            category: 'Factorization',
            subcategory: 'Complete Factorization',
            description: 'Visual: 2 terms (squares/cubes), 3 terms (PST/AC), 4 terms (grouping) with examples',
            type: 'cf_term_count_guide',
            defaultOptions: {
                title: 'Term Count → Technique Guide',
                showGuide: true,
                showExamples: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'cfFactorTreePolynomial': {
            name: 'CF Factor Tree Polynomial',
            category: 'Factorization',
            subcategory: 'Complete Factorization',
            description: 'Polynomial factor tree showing step-by-step decomposition to irreducible factors',
            type: 'cf_factor_tree_polynomial',
            defaultOptions: {
                title: 'Polynomial Factor Tree',
                showTree: true,
                showIrreducible: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'cfCheckEachFactorLoop': {
            name: 'CF Check Each Factor Loop',
            category: 'Factorization',
            subcategory: 'Complete Factorization',
            description: 'Circular diagram: after each factoring step, return to check every resulting factor',
            type: 'cf_check_each_factor_loop',
            defaultOptions: {
                title: 'Check Each Factor — Loop Diagram',
                showLoop: true,
                showCheckStep: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'cfGcfAlwaysFirstBanner': {
            name: 'CF GCF Always First Banner',
            category: 'Factorization',
            subcategory: 'Complete Factorization',
            description: 'Bold visual reinforcing GCF extraction as mandatory Step 1 with skipping error example',
            type: 'cf_gcf_always_first_banner',
            defaultOptions: {
                title: 'GCF Always First — Rule Banner',
                showBold: true,
                showErrorExample: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'cfVerificationExpandChain': {
            name: 'CF Verification Expand Chain',
            category: 'Factorization',
            subcategory: 'Complete Factorization',
            description: 'Chain of expansion arrows from fully factored form back to original polynomial',
            type: 'cf_verification_expand_chain',
            defaultOptions: {
                title: 'Verification — Expansion Chain',
                showChain: true,
                showArrows: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'cfTwoTermDecisionBranch': {
            name: 'CF Two Term Decision Branch',
            category: 'Factorization',
            subcategory: 'Complete Factorization',
            description: 'Decision branches for two-term expressions: a²−b²? a³+b³? a³−b³? a²+b²?',
            type: 'cf_two_term_decision_branch',
            defaultOptions: {
                title: 'Two Terms — Decision Branches',
                showBranches: true,
                showExamples: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'cfThreeTermDecisionBranch': {
            name: 'CF Three Term Decision Branch',
            category: 'Factorization',
            subcategory: 'Complete Factorization',
            description: 'Decision branches for three-term expressions: PST test → if fail → AC method',
            type: 'cf_three_term_decision_branch',
            defaultOptions: {
                title: 'Three Terms — Decision Branches',
                showBranches: true,
                showPSTTest: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'cfFourTermGroupingBranch': {
            name: 'CF Four Term Grouping Branch',
            category: 'Factorization',
            subcategory: 'Complete Factorization',
            description: 'Decision branches for four-term expressions: standard grouping → rearrange if fail',
            type: 'cf_four_term_grouping_branch',
            defaultOptions: {
                title: 'Four Terms — Grouping Branches',
                showBranches: true,
                showRearrangement: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'cfIrreducibleQuadraticCheck': {
            name: 'CF Irreducible Quadratic Check',
            category: 'Factorization',
            subcategory: 'Complete Factorization',
            description: 'Discriminant check diagram confirming a quadratic factor cannot be factored further',
            type: 'cf_irreducible_quadratic_check',
            defaultOptions: {
                title: 'Irreducible Quadratic — Discriminant Check',
                showDiscriminant: true,
                showConclusion: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'cfMultiStepWorkedExample': {
            name: 'CF Multi-Step Worked Example',
            category: 'Factorization',
            subcategory: 'Complete Factorization',
            description: 'Annotated full worked example: 3x⁴−48 showing all four steps with technique labels',
            type: 'cf_multi_step_worked_example',
            defaultOptions: {
                title: 'Complete Factorization — Worked Example',
                showAllSteps: true,
                showTechniqueLabels: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'cfCompletenessChecklistVisual': {
            name: 'CF Completeness Checklist Visual',
            category: 'Factorization',
            subcategory: 'Complete Factorization',
            description: 'Checkboxes: GCF extracted? Each factor checked? Verified by expansion? All irreducible?',
            type: 'cf_completeness_checklist_visual',
            defaultOptions: {
                title: 'Complete Factorization — Checklist',
                showCheckboxes: true,
                width: 700,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== FACTORIZATION — OVERVIEW =============================
        // ============================================================

        'factAllTechniquesSummaryTable': {
            name: 'Fact All Techniques Summary Table',
            category: 'Factorization',
            subcategory: 'Factorization Overview',
            description: 'One-page reference: technique name, form, factored form, recognition features',
            type: 'fact_all_techniques_summary_table',
            defaultOptions: {
                title: 'All Factorization Techniques — Summary',
                showTable: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'factPatternRecognitionGuide': {
            name: 'Fact Pattern Recognition Guide',
            category: 'Factorization',
            subcategory: 'Factorization Overview',
            description: 'Visual guide: look at term count and signs → identify most likely pattern',
            type: 'fact_pattern_recognition_guide',
            defaultOptions: {
                title: 'Factorization Pattern Recognition Guide',
                showGuide: true,
                showExamples: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'factAlgebraTilesLegend': {
            name: 'Fact Algebra Tiles Legend',
            category: 'Factorization',
            subcategory: 'Factorization Overview',
            description: 'Reference card: x²-tile, x-tile, unit-tile with dimensions and colours labelled',
            type: 'fact_algebra_tiles_legend',
            defaultOptions: {
                title: 'Algebra Tiles — Legend',
                showTiles: true,
                showDimensions: true,
                showColours: true,
                width: 700,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'factAreaModelConnection': {
            name: 'Fact Area Model Connection',
            category: 'Factorization',
            subcategory: 'Factorization Overview',
            description: 'Diagram connecting area model (tiles) to symbolic factored form for all patterns',
            type: 'fact_area_model_connection',
            defaultOptions: {
                title: 'Area Model ↔ Symbolic Factored Form',
                showConnection: true,
                showAllPatterns: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'factExpansionFactoringInverse': {
            name: 'Fact Expansion Factoring Inverse',
            category: 'Factorization',
            subcategory: 'Factorization Overview',
            description: 'Two-way arrow diagram: expansion ↔ factorization as inverse operations',
            type: 'fact_expansion_factoring_inverse',
            defaultOptions: {
                title: 'Expansion ↔ Factorization',
                showBidirectionalArrow: true,
                showExamples: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'factZeroProductProperty': {
            name: 'Fact Zero Product Property',
            category: 'Factorization',
            subcategory: 'Factorization Overview',
            description: 'Diagram: if A×B=0 then A=0 or B=0; connecting factored form to equation solving',
            type: 'fact_zero_product_property',
            defaultOptions: {
                title: 'Zero Product Property',
                showProperty: true,
                showConnection: true,
                showExample: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'factNumberVsAlgebraParallel': {
            name: 'Fact Number vs Algebra Parallel',
            category: 'Factorization',
            subcategory: 'Factorization Overview',
            description: 'Side-by-side: prime factorization of 12 vs GCF extraction from 12x²+8x',
            type: 'fact_number_vs_algebra_parallel',
            defaultOptions: {
                title: 'Number Factoring vs Algebra Parallel',
                showSideBySide: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'factRootsAndFactorsConnection': {
            name: 'Fact Roots and Factors Connection',
            category: 'Factorization',
            subcategory: 'Factorization Overview',
            description: 'Graph: each linear factor (x−r) corresponds to x-intercept r on the parabola',
            type: 'fact_roots_and_factors_connection',
            defaultOptions: {
                title: 'Roots and Factors — Connection',
                showGraph: true,
                showFactors: true,
                showConnection: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== TRANSFORMATIONS — TRANSLATION ========================
        // ============================================================

        'translationVectorDiagram': {
            name: 'Translation Vector Diagram',
            category: 'Transformations',
            subcategory: 'Translation',
            description: 'Translation vector shown as a directed arrow with horizontal and vertical components',
            type: 'translation_vector_diagram',
            vector: { x: 3, y: 2 },
            defaultOptions: {
                title: 'Translation Vector',
                showVector: true,
                showComponents: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'translationCoordinateGrid': {
            name: 'Translation Coordinate Grid',
            category: 'Transformations',
            subcategory: 'Translation',
            description: 'Coordinate grid showing pre-image and image after a translation',
            type: 'translation_coordinate_grid',
            vector: { x: 4, y: -2 },
            defaultOptions: {
                title: 'Translation — Coordinate Grid',
                showPreimage: true,
                showImage: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'translationTriangleExample': {
            name: 'Translation Triangle Example',
            category: 'Transformations',
            subcategory: 'Translation',
            description: 'Triangle translated by a given vector with pre-image and image labelled',
            type: 'translation_triangle_example',
            vector: { x: 5, y: 3 },
            defaultOptions: {
                title: 'Triangle Translation Example',
                showBothTriangles: true,
                showVector: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'translationVectorNotation': {
            name: 'Translation Vector Notation',
            category: 'Transformations',
            subcategory: 'Translation',
            description: 'Translation described using column vector notation',
            type: 'translation_vector_notation',
            vector: { x: 3, y: -1 },
            defaultOptions: {
                title: 'Translation — Column Vector Notation',
                showNotation: true,
                showExample: true,
                width: 700,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'translationColumnVectorForm': {
            name: 'Translation Column Vector Form',
            category: 'Transformations',
            subcategory: 'Translation',
            description: 'Translation written in column vector form with x and y displacement labelled',
            type: 'translation_column_vector_form',
            defaultOptions: {
                title: 'Translation — Column Vector Form',
                showForm: true,
                showComponents: true,
                width: 600,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'translationPolygonLabelled': {
            name: 'Translation Polygon Labelled',
            category: 'Transformations',
            subcategory: 'Translation',
            description: 'Polygon with all vertices labelled before and after translation',
            type: 'translation_polygon_labelled',
            vector: { x: 3, y: 2 },
            defaultOptions: {
                title: 'Translation — Polygon (Labelled Vertices)',
                showVertexLabels: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'translationPreimageImageArrows': {
            name: 'Translation Pre-image Image Arrows',
            category: 'Transformations',
            subcategory: 'Translation',
            description: 'Arrows from each pre-image vertex to corresponding image vertex showing equal translation',
            type: 'translation_preimage_image_arrows',
            vector: { x: 4, y: 1 },
            defaultOptions: {
                title: 'Translation — Vertex Arrows',
                showArrows: true,
                showEqualLength: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'translationNoFixedPoints': {
            name: 'Translation No Fixed Points',
            category: 'Transformations',
            subcategory: 'Translation',
            description: 'Diagram illustrating that translations have no fixed points',
            type: 'translation_no_fixed_points',
            defaultOptions: {
                title: 'Translation — No Fixed Points',
                showProperty: true,
                showExample: true,
                width: 700,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'translationCompositionTwoVectors': {
            name: 'Translation Composition Two Vectors',
            category: 'Transformations',
            subcategory: 'Translation',
            description: 'Composition of two translations shown as combined single vector',
            type: 'translation_composition_two_vectors',
            vector1: { x: 3, y: 1 },
            vector2: { x: 2, y: -2 },
            defaultOptions: {
                title: 'Translation Composition',
                showBothVectors: true,
                showResultant: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'translationInverseDiagram': {
            name: 'Translation Inverse Diagram',
            category: 'Transformations',
            subcategory: 'Translation',
            description: 'Inverse translation shown as opposite vector returning to original position',
            type: 'translation_inverse_diagram',
            vector: { x: 4, y: 2 },
            defaultOptions: {
                title: 'Translation — Inverse',
                showInverse: true,
                showReturn: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'translationTessellationPattern': {
            name: 'Translation Tessellation Pattern',
            category: 'Transformations',
            subcategory: 'Translation',
            description: 'Tessellation pattern created by repeated translations',
            type: 'translation_tessellation_pattern',
            defaultOptions: {
                title: 'Translation — Tessellation',
                showPattern: true,
                showVectors: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'translationIsometryDistanceCheck': {
            name: 'Translation Isometry Distance Check',
            category: 'Transformations',
            subcategory: 'Translation',
            description: 'Diagram verifying translation is an isometry by checking preserved distances',
            type: 'translation_isometry_distance_check',
            defaultOptions: {
                title: 'Translation — Isometry Check',
                showDistances: true,
                showPreservation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== TRANSFORMATIONS — REFLECTION =========================
        // ============================================================

        'reflectionOverXAxis': {
            name: 'Reflection Over X-Axis',
            category: 'Transformations',
            subcategory: 'Reflection',
            description: 'Shape reflected over the x-axis with pre-image and image labelled',
            type: 'reflection_over_x_axis',
            defaultOptions: {
                title: 'Reflection Over X-Axis',
                showMirrorLine: true,
                showBothShapes: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'reflectionOverYAxis': {
            name: 'Reflection Over Y-Axis',
            category: 'Transformations',
            subcategory: 'Reflection',
            description: 'Shape reflected over the y-axis with pre-image and image labelled',
            type: 'reflection_over_y_axis',
            defaultOptions: {
                title: 'Reflection Over Y-Axis',
                showMirrorLine: true,
                showBothShapes: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'reflectionOverYEqualsX': {
            name: 'Reflection Over y = x',
            category: 'Transformations',
            subcategory: 'Reflection',
            description: 'Shape reflected over the line y = x',
            type: 'reflection_over_y_equals_x',
            defaultOptions: {
                title: 'Reflection Over y = x',
                showMirrorLine: true,
                showBothShapes: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'reflectionOverYEqualsNegX': {
            name: 'Reflection Over y = -x',
            category: 'Transformations',
            subcategory: 'Reflection',
            description: 'Shape reflected over the line y = −x',
            type: 'reflection_over_y_equals_neg_x',
            defaultOptions: {
                title: 'Reflection Over y = −x',
                showMirrorLine: true,
                showBothShapes: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'reflectionOverHorizontalLine': {
            name: 'Reflection Over Horizontal Line',
            category: 'Transformations',
            subcategory: 'Reflection',
            description: 'Shape reflected over a general horizontal line y = k',
            type: 'reflection_over_horizontal_line',
            k: 2,
            defaultOptions: {
                title: 'Reflection Over y = k',
                showMirrorLine: true,
                showBothShapes: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'reflectionOverVerticalLine': {
            name: 'Reflection Over Vertical Line',
            category: 'Transformations',
            subcategory: 'Reflection',
            description: 'Shape reflected over a general vertical line x = h',
            type: 'reflection_over_vertical_line',
            h: 3,
            defaultOptions: {
                title: 'Reflection Over x = h',
                showMirrorLine: true,
                showBothShapes: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'reflectionPerpendicularBisectorProperty': {
            name: 'Reflection Perpendicular Bisector Property',
            category: 'Transformations',
            subcategory: 'Reflection',
            description: 'Mirror line as perpendicular bisector of segment joining pre-image to image vertex',
            type: 'reflection_perpendicular_bisector_property',
            defaultOptions: {
                title: 'Reflection — Perpendicular Bisector',
                showBisector: true,
                showRightAngle: true,
                showEqualDistances: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'reflectionOrientationReversal': {
            name: 'Reflection Orientation Reversal',
            category: 'Transformations',
            subcategory: 'Reflection',
            description: 'Diagram showing that reflection reverses orientation of a shape',
            type: 'reflection_orientation_reversal',
            defaultOptions: {
                title: 'Reflection — Orientation Reversal',
                showOrientation: true,
                showReversal: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'reflectionFixedPointsOnMirror': {
            name: 'Reflection Fixed Points on Mirror',
            category: 'Transformations',
            subcategory: 'Reflection',
            description: 'Diagram showing points on the mirror line are fixed by the reflection',
            type: 'reflection_fixed_points_on_mirror',
            defaultOptions: {
                title: 'Reflection — Fixed Points',
                showFixedPoints: true,
                showMirrorLine: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'reflectionTriangleLabelled': {
            name: 'Reflection Triangle Labelled',
            category: 'Transformations',
            subcategory: 'Reflection',
            description: 'Triangle with all vertices labelled before and after reflection',
            type: 'reflection_triangle_labelled',
            defaultOptions: {
                title: 'Triangle Reflection — Labelled',
                showVertexLabels: true,
                showMirrorLine: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'reflectionMiraConstruction': {
            name: 'Reflection Mira Construction',
            category: 'Transformations',
            subcategory: 'Reflection',
            description: 'Construction method using a Mira (or tracing paper) to find reflections',
            type: 'reflection_mira_construction',
            defaultOptions: {
                title: 'Reflection — Mira Construction',
                showConstruction: true,
                showSteps: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'reflectionBilateralSymmetryShapes': {
            name: 'Reflection Bilateral Symmetry Shapes',
            category: 'Transformations',
            subcategory: 'Reflection',
            description: 'Shapes with bilateral (line) symmetry showing lines of symmetry',
            type: 'reflection_bilateral_symmetry_shapes',
            defaultOptions: {
                title: 'Bilateral Symmetry Shapes',
                showShapes: true,
                showSymmetryLines: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'reflectionLineSymmetryRegularPolygons': {
            name: 'Reflection Line Symmetry Regular Polygons',
            category: 'Transformations',
            subcategory: 'Reflection',
            description: 'Regular polygons with all their lines of symmetry shown',
            type: 'reflection_line_symmetry_regular_polygons',
            defaultOptions: {
                title: 'Regular Polygons — Lines of Symmetry',
                showPolygons: true,
                showSymmetryLines: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'reflectionParallelLinesComposition': {
            name: 'Reflection Parallel Lines Composition',
            category: 'Transformations',
            subcategory: 'Reflection',
            description: 'Composition of two reflections over parallel lines equals a translation',
            type: 'reflection_parallel_lines_composition',
            defaultOptions: {
                title: 'Two Reflections (Parallel) = Translation',
                showBothReflections: true,
                showEquivalentTranslation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'reflectionIntersectingLinesComposition': {
            name: 'Reflection Intersecting Lines Composition',
            category: 'Transformations',
            subcategory: 'Reflection',
            description: 'Composition of two reflections over intersecting lines equals a rotation',
            type: 'reflection_intersecting_lines_composition',
            defaultOptions: {
                title: 'Two Reflections (Intersecting) = Rotation',
                showBothReflections: true,
                showEquivalentRotation: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'reflectionMatrixRepresentation': {
            name: 'Reflection Matrix Representation',
            category: 'Transformations',
            subcategory: 'Reflection',
            description: 'Matrix representation of common reflections',
            type: 'reflection_matrix_representation',
            defaultOptions: {
                title: 'Reflection — Matrix Representation',
                showMatrices: true,
                showExamples: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== TRANSFORMATIONS — ROTATION ===========================
        // ============================================================

        'rotation90CcwOrigin': {
            name: 'Rotation 90° CCW Origin',
            category: 'Transformations',
            subcategory: 'Rotation',
            description: 'Shape rotated 90° counterclockwise about the origin',
            type: 'rotation_90_ccw_origin',
            defaultOptions: {
                title: 'Rotation 90° CCW — Origin',
                showBothShapes: true,
                showAngle: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rotation90CwOrigin': {
            name: 'Rotation 90° CW Origin',
            category: 'Transformations',
            subcategory: 'Rotation',
            description: 'Shape rotated 90° clockwise about the origin',
            type: 'rotation_90_cw_origin',
            defaultOptions: {
                title: 'Rotation 90° CW — Origin',
                showBothShapes: true,
                showAngle: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rotation180Origin': {
            name: 'Rotation 180° Origin',
            category: 'Transformations',
            subcategory: 'Rotation',
            description: 'Shape rotated 180° about the origin',
            type: 'rotation_180_origin',
            defaultOptions: {
                title: 'Rotation 180° — Origin',
                showBothShapes: true,
                showAngle: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rotation270CcwOrigin': {
            name: 'Rotation 270° CCW Origin',
            category: 'Transformations',
            subcategory: 'Rotation',
            description: 'Shape rotated 270° counterclockwise (= 90° clockwise) about the origin',
            type: 'rotation_270_ccw_origin',
            defaultOptions: {
                title: 'Rotation 270° CCW — Origin',
                showBothShapes: true,
                showAngle: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rotationCenterNotOrigin': {
            name: 'Rotation Center Not Origin',
            category: 'Transformations',
            subcategory: 'Rotation',
            description: 'Shape rotated about a centre point other than the origin',
            type: 'rotation_center_not_origin',
            centre: { x: 2, y: 1 },
            angle: 90,
            defaultOptions: {
                title: 'Rotation — Non-Origin Centre',
                showCentre: true,
                showBothShapes: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rotationArcRadiusEqual': {
            name: 'Rotation Arc Radius Equal',
            category: 'Transformations',
            subcategory: 'Rotation',
            description: 'Diagram showing all image points at equal distance from centre as arc',
            type: 'rotation_arc_radius_equal',
            defaultOptions: {
                title: 'Rotation — Equal Radius Arcs',
                showArcs: true,
                showEqualRadius: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rotationAngleMeasurementDiagram': {
            name: 'Rotation Angle Measurement Diagram',
            category: 'Transformations',
            subcategory: 'Rotation',
            description: 'Diagram showing how the rotation angle is measured from pre-image to image',
            type: 'rotation_angle_measurement_diagram',
            defaultOptions: {
                title: 'Rotation — Angle Measurement',
                showAngleMeasurement: true,
                showDirection: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'rotationClockwiseCounterclockwise': {
            name: 'Rotation Clockwise Counterclockwise',
            category: 'Transformations',
            subcategory: 'Rotation',
            description: 'Side-by-side comparison of clockwise vs counterclockwise rotation',
            type: 'rotation_clockwise_counterclockwise',
            angle: 90,
            defaultOptions: {
                title: 'Rotation — CW vs CCW',
                showBothDirections: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rotationTracingPaperMethod': {
            name: 'Rotation Tracing Paper Method',
            category: 'Transformations',
            subcategory: 'Rotation',
            description: 'Illustration of the tracing paper method for finding rotations',
            type: 'rotation_tracing_paper_method',
            defaultOptions: {
                title: 'Rotation — Tracing Paper Method',
                showSteps: true,
                showMethod: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rotationThreeParametersDiagram': {
            name: 'Rotation Three Parameters Diagram',
            category: 'Transformations',
            subcategory: 'Rotation',
            description: 'Diagram labelling the three parameters of a rotation: centre, angle, direction',
            type: 'rotation_three_parameters_diagram',
            defaultOptions: {
                title: 'Rotation — Three Parameters',
                showCentre: true,
                showAngle: true,
                showDirection: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rotationFixedCenterPoint': {
            name: 'Rotation Fixed Center Point',
            category: 'Transformations',
            subcategory: 'Rotation',
            description: 'Diagram showing the centre of rotation as the only fixed point',
            type: 'rotation_fixed_center_point',
            defaultOptions: {
                title: 'Rotation — Fixed Centre Point',
                showFixedPoint: true,
                showMovingPoints: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rotationMatrixGeneralAngle': {
            name: 'Rotation Matrix General Angle',
            category: 'Transformations',
            subcategory: 'Rotation',
            description: 'General rotation matrix for angle θ about the origin',
            type: 'rotation_matrix_general_angle',
            defaultOptions: {
                title: 'Rotation Matrix — General Angle θ',
                showMatrix: true,
                showExample: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'rotationTranslateRotateUntranslate': {
            name: 'Rotation Translate Rotate Untranslate',
            category: 'Transformations',
            subcategory: 'Rotation',
            description: 'Three-step method for rotation about a non-origin centre: translate, rotate, untranslate',
            type: 'rotation_translate_rotate_untranslate',
            defaultOptions: {
                title: 'Rotation — Translate-Rotate-Untranslate',
                showThreeSteps: true,
                showAnnotations: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rotationalSymmetrySquare': {
            name: 'Rotational Symmetry Square',
            category: 'Transformations',
            subcategory: 'Rotation',
            description: 'Square showing all four rotational symmetry positions',
            type: 'rotational_symmetry_square',
            defaultOptions: {
                title: 'Rotational Symmetry — Square (Order 4)',
                showAllPositions: true,
                showAngles: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rotationalSymmetryEquilateralTriangle': {
            name: 'Rotational Symmetry Equilateral Triangle',
            category: 'Transformations',
            subcategory: 'Rotation',
            description: 'Equilateral triangle showing all three rotational symmetry positions',
            type: 'rotational_symmetry_equilateral_triangle',
            defaultOptions: {
                title: 'Rotational Symmetry — Triangle (Order 3)',
                showAllPositions: true,
                showAngles: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rotationalSymmetryRegularHexagon': {
            name: 'Rotational Symmetry Regular Hexagon',
            category: 'Transformations',
            subcategory: 'Rotation',
            description: 'Regular hexagon showing all six rotational symmetry positions',
            type: 'rotational_symmetry_regular_hexagon',
            defaultOptions: {
                title: 'Rotational Symmetry — Hexagon (Order 6)',
                showAllPositions: true,
                showAngles: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'rotationalSymmetryOrderDiagram': {
            name: 'Rotational Symmetry Order Diagram',
            category: 'Transformations',
            subcategory: 'Rotation',
            description: 'Diagram explaining the order of rotational symmetry concept',
            type: 'rotational_symmetry_order_diagram',
            defaultOptions: {
                title: 'Rotational Symmetry — Order',
                showDefinition: true,
                showExamples: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rotationCompositionAngleAddition': {
            name: 'Rotation Composition Angle Addition',
            category: 'Transformations',
            subcategory: 'Rotation',
            description: 'Composition of two rotations about the same centre shown as angle addition',
            type: 'rotation_composition_angle_addition',
            angle1: 90,
            angle2: 45,
            defaultOptions: {
                title: 'Rotation Composition — Angle Addition',
                showComposition: true,
                showAngleAddition: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== TRANSFORMATIONS — DILATION ===========================
        // ============================================================

        'dilationFromOriginKGreater1': {
            name: 'Dilation From Origin k > 1',
            category: 'Transformations',
            subcategory: 'Dilation',
            description: 'Enlargement from the origin with scale factor k > 1',
            type: 'dilation_from_origin_k_greater_1',
            k: 2,
            defaultOptions: {
                title: 'Dilation — Enlargement (k > 1)',
                showBothShapes: true,
                showRays: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'dilationFromOriginKLess1': {
            name: 'Dilation From Origin k < 1',
            category: 'Transformations',
            subcategory: 'Dilation',
            description: 'Reduction from the origin with 0 < k < 1',
            type: 'dilation_from_origin_k_less_1',
            k: 0.5,
            defaultOptions: {
                title: 'Dilation — Reduction (0 < k < 1)',
                showBothShapes: true,
                showRays: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'dilationFromOriginKNegative': {
            name: 'Dilation From Origin k Negative',
            category: 'Transformations',
            subcategory: 'Dilation',
            description: 'Dilation with negative scale factor: enlargement with point reflection',
            type: 'dilation_from_origin_k_negative',
            k: -2,
            defaultOptions: {
                title: 'Dilation — Negative Scale Factor',
                showBothShapes: true,
                showRays: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'dilationCenterNotOrigin': {
            name: 'Dilation Center Not Origin',
            category: 'Transformations',
            subcategory: 'Dilation',
            description: 'Dilation with centre of enlargement not at the origin',
            type: 'dilation_center_not_origin',
            centre: { x: 1, y: 2 },
            k: 3,
            defaultOptions: {
                title: 'Dilation — Non-Origin Centre',
                showCentre: true,
                showBothShapes: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'dilationRaysThroughVertices': {
            name: 'Dilation Rays Through Vertices',
            category: 'Transformations',
            subcategory: 'Dilation',
            description: 'Rays from centre through each vertex showing dilation construction',
            type: 'dilation_rays_through_vertices',
            defaultOptions: {
                title: 'Dilation — Rays Through Vertices',
                showRays: true,
                showCentre: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'dilationScaleFactorLabelled': {
            name: 'Dilation Scale Factor Labelled',
            category: 'Transformations',
            subcategory: 'Dilation',
            description: 'Dilation diagram with scale factor clearly labelled on rays',
            type: 'dilation_scale_factor_labelled',
            k: 2,
            defaultOptions: {
                title: 'Dilation — Scale Factor Labelled',
                showScaleFactor: true,
                showRatios: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'dilationLengthRatioComparison': {
            name: 'Dilation Length Ratio Comparison',
            category: 'Transformations',
            subcategory: 'Dilation',
            description: 'Comparison of corresponding side lengths showing ratio equals scale factor',
            type: 'dilation_length_ratio_comparison',
            k: 3,
            defaultOptions: {
                title: 'Dilation — Length Ratio',
                showLengths: true,
                showRatio: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'dilationAreaRatioComparison': {
            name: 'Dilation Area Ratio Comparison',
            category: 'Transformations',
            subcategory: 'Dilation',
            description: 'Comparison of areas showing area ratio equals k²',
            type: 'dilation_area_ratio_comparison',
            k: 2,
            defaultOptions: {
                title: 'Dilation — Area Ratio = k²',
                showAreas: true,
                showRatio: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'dilationFindingCenterIntersection': {
            name: 'Dilation Finding Center Intersection',
            category: 'Transformations',
            subcategory: 'Dilation',
            description: 'Finding centre of dilation by extending lines through corresponding vertices',
            type: 'dilation_finding_center_intersection',
            defaultOptions: {
                title: 'Finding Centre of Dilation',
                showExtendedLines: true,
                showIntersection: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'dilationPreimageImageSimilarTriangles': {
            name: 'Dilation Pre-image Image Similar Triangles',
            category: 'Transformations',
            subcategory: 'Dilation',
            description: 'Pre-image and image triangles shown as similar with equal angles labelled',
            type: 'dilation_preimage_image_similar_triangles',
            defaultOptions: {
                title: 'Dilation — Similar Triangles',
                showAngles: true,
                showSides: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'dilationCollinearCenterPoints': {
            name: 'Dilation Collinear Center Points',
            category: 'Transformations',
            subcategory: 'Dilation',
            description: 'Diagram showing centre, pre-image point, and image point are collinear',
            type: 'dilation_collinear_center_points',
            defaultOptions: {
                title: 'Dilation — Collinear Points',
                showCollinearity: true,
                showExample: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'dilationEnlargementExample': {
            name: 'Dilation Enlargement Example',
            category: 'Transformations',
            subcategory: 'Dilation',
            description: 'Worked enlargement example with all dimensions labelled',
            type: 'dilation_enlargement_example',
            k: 3,
            defaultOptions: {
                title: 'Dilation — Enlargement Example',
                showWorkedExample: true,
                showDimensions: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'dilationReductionExample': {
            name: 'Dilation Reduction Example',
            category: 'Transformations',
            subcategory: 'Dilation',
            description: 'Worked reduction example with all dimensions labelled',
            type: 'dilation_reduction_example',
            k: 0.5,
            defaultOptions: {
                title: 'Dilation — Reduction Example',
                showWorkedExample: true,
                showDimensions: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'dilationKEquals2Grid': {
            name: 'Dilation k = 2 Grid',
            category: 'Transformations',
            subcategory: 'Dilation',
            description: 'Grid-based dilation example with scale factor k = 2',
            type: 'dilation_k_equals_2_grid',
            k: 2,
            defaultOptions: {
                title: 'Dilation k = 2 — Grid Method',
                showGrid: true,
                showBothShapes: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'dilationKEqualsHalfGrid': {
            name: 'Dilation k = ½ Grid',
            category: 'Transformations',
            subcategory: 'Dilation',
            description: 'Grid-based dilation example with scale factor k = ½',
            type: 'dilation_k_equals_half_grid',
            k: 0.5,
            defaultOptions: {
                title: 'Dilation k = ½ — Grid Method',
                showGrid: true,
                showBothShapes: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'dilationPerimeterAreaTable': {
            name: 'Dilation Perimeter Area Table',
            category: 'Transformations',
            subcategory: 'Dilation',
            description: 'Table showing perimeter (×k) and area (×k²) changes with dilation',
            type: 'dilation_perimeter_area_table',
            defaultOptions: {
                title: 'Dilation — Perimeter and Area Table',
                showTable: true,
                showFormulas: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'dilationNegativeKPointReflection': {
            name: 'Dilation Negative k Point Reflection',
            category: 'Transformations',
            subcategory: 'Dilation',
            description: 'Dilation with k = −1 equivalent to point reflection (rotation 180°)',
            type: 'dilation_negative_k_point_reflection',
            defaultOptions: {
                title: 'Dilation k = −1 = Point Reflection',
                showEquivalence: true,
                showExample: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'dilationPhotographyRealWorld': {
            name: 'Dilation Photography Real World',
            category: 'Transformations',
            subcategory: 'Dilation',
            description: 'Real-world context: photographic enlargement as dilation',
            type: 'dilation_photography_real_world',
            defaultOptions: {
                title: 'Dilation — Photography Application',
                showContext: true,
                showScaleFactor: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'dilationMapScaleExample': {
            name: 'Dilation Map Scale Example',
            category: 'Transformations',
            subcategory: 'Dilation',
            description: 'Map scale as a real-world example of dilation',
            type: 'dilation_map_scale_example',
            defaultOptions: {
                title: 'Dilation — Map Scale',
                showMap: true,
                showScale: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== TRANSFORMATIONS — COMPOSITION ========================
        // ============================================================

        'compositionNotationDiagram': {
            name: 'Composition Notation Diagram',
            category: 'Transformations',
            subcategory: 'Composition',
            description: 'Diagram explaining composition notation T₂ ∘ T₁ (T₁ applied first)',
            type: 'composition_notation_diagram',
            defaultOptions: {
                title: 'Composition Notation',
                showNotation: true,
                showOrder: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'compositionOrderMattersExample': {
            name: 'Composition Order Matters Example',
            category: 'Transformations',
            subcategory: 'Composition',
            description: 'Example showing T₂∘T₁ ≠ T₁∘T₂ for two transformations',
            type: 'composition_order_matters_example',
            defaultOptions: {
                title: 'Composition — Order Matters',
                showBothOrders: true,
                showDifference: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'compositionTranslationThenReflection': {
            name: 'Composition Translation Then Reflection',
            category: 'Transformations',
            subcategory: 'Composition',
            description: 'Composition: translation followed by reflection',
            type: 'composition_translation_then_reflection',
            defaultOptions: {
                title: 'Translation → Reflection Composition',
                showBothSteps: true,
                showResult: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'compositionReflectionThenRotation': {
            name: 'Composition Reflection Then Rotation',
            category: 'Transformations',
            subcategory: 'Composition',
            description: 'Composition: reflection followed by rotation',
            type: 'composition_reflection_then_rotation',
            defaultOptions: {
                title: 'Reflection → Rotation Composition',
                showBothSteps: true,
                showResult: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'compositionTwoParallelReflectionsTranslation': {
            name: 'Composition Two Parallel Reflections Translation',
            category: 'Transformations',
            subcategory: 'Composition',
            description: 'Two reflections over parallel lines equals a translation',
            type: 'composition_two_parallel_reflections_translation',
            defaultOptions: {
                title: 'Two Parallel Reflections = Translation',
                showEquivalence: true,
                showSteps: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'compositionTwoIntersectingReflectionsRotation': {
            name: 'Composition Two Intersecting Reflections Rotation',
            category: 'Transformations',
            subcategory: 'Composition',
            description: 'Two reflections over intersecting lines equals a rotation',
            type: 'composition_two_intersecting_reflections_rotation',
            defaultOptions: {
                title: 'Two Intersecting Reflections = Rotation',
                showEquivalence: true,
                showSteps: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'compositionGlideReflectionDiagram': {
            name: 'Composition Glide Reflection Diagram',
            category: 'Transformations',
            subcategory: 'Composition',
            description: 'Glide reflection: translation followed by reflection over parallel line',
            type: 'composition_glide_reflection_diagram',
            defaultOptions: {
                title: 'Glide Reflection',
                showTranslation: true,
                showReflection: true,
                showResult: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'compositionGlideReflectionFootprints': {
            name: 'Composition Glide Reflection Footprints',
            category: 'Transformations',
            subcategory: 'Composition',
            description: 'Footprint pattern as a real-world example of glide reflection',
            type: 'composition_glide_reflection_footprints',
            defaultOptions: {
                title: 'Glide Reflection — Footprints',
                showPattern: true,
                showTransformation: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'compositionFourIsometriesSummary': {
            name: 'Composition Four Isometries Summary',
            category: 'Transformations',
            subcategory: 'Composition',
            description: 'Summary showing any composition of isometries equals one of the four isometry types',
            type: 'composition_four_isometries_summary',
            defaultOptions: {
                title: 'Composition of Isometries — Summary',
                showFourTypes: true,
                showEquivalences: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'compositionMatrixMultiplicationVisual': {
            name: 'Composition Matrix Multiplication Visual',
            category: 'Transformations',
            subcategory: 'Composition',
            description: 'Visual showing composition of transformations as matrix multiplication',
            type: 'composition_matrix_multiplication_visual',
            defaultOptions: {
                title: 'Composition = Matrix Multiplication',
                showMatrices: true,
                showProduct: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'compositionRotationRotationSameCenter': {
            name: 'Composition Rotation Rotation Same Center',
            category: 'Transformations',
            subcategory: 'Composition',
            description: 'Composition of two rotations about the same centre',
            type: 'composition_rotation_rotation_same_center',
            angle1: 90,
            angle2: 45,
            defaultOptions: {
                title: 'Two Rotations — Same Centre',
                showComposition: true,
                showAngleAddition: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'compositionNonCommutativityExample': {
            name: 'Composition Non-Commutativity Example',
            category: 'Transformations',
            subcategory: 'Composition',
            description: 'Concrete example proving composition of transformations is non-commutative',
            type: 'composition_non_commutativity_example',
            defaultOptions: {
                title: 'Composition — Non-Commutativity',
                showBothOrders: true,
                showConclusion: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'compositionTranslationsCommute': {
            name: 'Composition Translations Commute',
            category: 'Transformations',
            subcategory: 'Composition',
            description: 'Special case: translations do commute (vector addition is commutative)',
            type: 'composition_translations_commute',
            defaultOptions: {
                title: 'Translations — Commutative Exception',
                showCommutativity: true,
                showVectorAddition: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'compositionIsometryClosureDiagram': {
            name: 'Composition Isometry Closure Diagram',
            category: 'Transformations',
            subcategory: 'Composition',
            description: 'Diagram showing closure: composition of isometries is always an isometry',
            type: 'composition_isometry_closure_diagram',
            defaultOptions: {
                title: 'Isometry Closure — Composition',
                showClosure: true,
                showExample: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'compositionFlowchartIdentifyResult': {
            name: 'Composition Flowchart Identify Result',
            category: 'Transformations',
            subcategory: 'Composition',
            description: 'Flowchart for identifying which single transformation equals a given composition',
            type: 'composition_flowchart_identify_result',
            defaultOptions: {
                title: 'Identify Composition Result — Flowchart',
                showFlowchart: true,
                showDecisionPoints: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'compositionDilationThenRotation': {
            name: 'Composition Dilation Then Rotation',
            category: 'Transformations',
            subcategory: 'Composition',
            description: 'Composition of dilation followed by rotation',
            type: 'composition_dilation_then_rotation',
            defaultOptions: {
                title: 'Dilation → Rotation Composition',
                showBothSteps: true,
                showResult: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'compositionSymmetryGroupCyclic': {
            name: 'Composition Symmetry Group Cyclic',
            category: 'Transformations',
            subcategory: 'Composition',
            description: 'Cyclic symmetry group table showing composition of rotations',
            type: 'composition_symmetry_group_cyclic',
            order: 4,
            defaultOptions: {
                title: 'Cyclic Symmetry Group — Composition',
                showGroupTable: true,
                showRotations: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'compositionSymmetryGroupDihedral': {
            name: 'Composition Symmetry Group Dihedral',
            category: 'Transformations',
            subcategory: 'Composition',
            description: 'Dihedral symmetry group showing composition of rotations and reflections',
            type: 'composition_symmetry_group_dihedral',
            n: 3,
            defaultOptions: {
                title: 'Dihedral Symmetry Group — Composition',
                showGroupTable: true,
                showElements: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== TRANSFORMATIONS — OVERVIEW ===========================
        // ============================================================

        'transformationFourTypesSummaryTable': {
            name: 'Transformation Four Types Summary Table',
            category: 'Transformations',
            subcategory: 'Transformation Overview',
            description: 'Summary table of all four transformation types with key properties',
            type: 'transformation_four_types_summary_table',
            defaultOptions: {
                title: 'Four Transformation Types — Summary',
                showTable: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'transformationIsometryVsSimilarity': {
            name: 'Transformation Isometry vs Similarity',
            category: 'Transformations',
            subcategory: 'Transformation Overview',
            description: 'Comparison of isometric and similarity transformations',
            type: 'transformation_isometry_vs_similarity',
            defaultOptions: {
                title: 'Isometry vs Similarity Transformation',
                showComparison: true,
                showExamples: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'transformationDirectVsOppositeIsometry': {
            name: 'Transformation Direct vs Opposite Isometry',
            category: 'Transformations',
            subcategory: 'Transformation Overview',
            description: 'Comparison of direct (orientation-preserving) vs opposite (orientation-reversing) isometries',
            type: 'transformation_direct_vs_opposite_isometry',
            defaultOptions: {
                title: 'Direct vs Opposite Isometry',
                showComparison: true,
                showOrientation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'transformationPreservedPropertiesComparison': {
            name: 'Transformation Preserved Properties Comparison',
            category: 'Transformations',
            subcategory: 'Transformation Overview',
            description: 'Table comparing which properties are preserved by each transformation type',
            type: 'transformation_preserved_properties_comparison',
            defaultOptions: {
                title: 'Preserved Properties — Comparison Table',
                showTable: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'transformationCoordinateRulesSummaryCard': {
            name: 'Transformation Coordinate Rules Summary Card',
            category: 'Transformations',
            subcategory: 'Transformation Overview',
            description: 'Reference card of coordinate transformation rules for all standard transformations',
            type: 'transformation_coordinate_rules_summary_card',
            defaultOptions: {
                title: 'Transformation Coordinate Rules',
                showAllRules: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'transformationDecisionFlowchart': {
            name: 'Transformation Decision Flowchart',
            category: 'Transformations',
            subcategory: 'Transformation Overview',
            description: 'Flowchart for identifying which transformation maps one shape to another',
            type: 'transformation_decision_flowchart',
            defaultOptions: {
                title: 'Identifying Transformations — Flowchart',
                showDecisionPoints: true,
                showTransformationTypes: true,
                width: 800,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'transformationPreimageImageNotation': {
            name: 'Transformation Pre-image Image Notation',
            category: 'Transformations',
            subcategory: 'Transformation Overview',
            description: 'Reference for pre-image and image notation: A → A\' (A prime)',
            type: 'transformation_preimage_image_notation',
            defaultOptions: {
                title: 'Pre-image and Image Notation',
                showNotation: true,
                showExample: true,
                width: 700,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'transformationFixedPointsComparison': {
            name: 'Transformation Fixed Points Comparison',
            category: 'Transformations',
            subcategory: 'Transformation Overview',
            description: 'Comparison of fixed points for each transformation type',
            type: 'transformation_fixed_points_comparison',
            defaultOptions: {
                title: 'Fixed Points — Transformation Comparison',
                showComparison: true,
                showExamples: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'transformationOrientationComparisonAllFour': {
            name: 'Transformation Orientation Comparison All Four',
            category: 'Transformations',
            subcategory: 'Transformation Overview',
            description: 'Orientation preservation comparison across all four transformation types',
            type: 'transformation_orientation_comparison_all_four',
            defaultOptions: {
                title: 'Orientation — All Four Transformations',
                showAllFour: true,
                showOrientation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'transformationCongruenceVsSimilarityDiagram': {
            name: 'Transformation Congruence vs Similarity Diagram',
            category: 'Transformations',
            subcategory: 'Transformation Overview',
            description: 'Diagram distinguishing congruence (isometry) from similarity (dilation + isometry)',
            type: 'transformation_congruence_vs_similarity_diagram',
            defaultOptions: {
                title: 'Congruence vs Similarity',
                showDistinction: true,
                showExamples: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== TRANSFORMATIONS — VECTORS ============================
        // ============================================================

        'vectorComponentFormDiagram': {
            name: 'Vector Component Form Diagram',
            category: 'Transformations',
            subcategory: 'Transformation Vectors',
            description: 'Vector shown in component form (a, b) with horizontal and vertical parts labelled',
            type: 'vector_component_form_diagram',
            vector: { x: 3, y: 4 },
            defaultOptions: {
                title: 'Vector Component Form',
                showComponents: true,
                showLabels: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'vectorColumnNotation': {
            name: 'Vector Column Notation',
            category: 'Transformations',
            subcategory: 'Transformation Vectors',
            description: 'Vector written in column notation with vertical bracket form',
            type: 'vector_column_notation',
            vector: { x: 3, y: -2 },
            defaultOptions: {
                title: 'Vector Column Notation',
                showNotation: true,
                showExample: true,
                width: 600,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'vectorAdditionParallelogram': {
            name: 'Vector Addition Parallelogram',
            category: 'Transformations',
            subcategory: 'Transformation Vectors',
            description: 'Vector addition using the parallelogram law',
            type: 'vector_addition_parallelogram',
            vectorA: { x: 3, y: 1 },
            vectorB: { x: 1, y: 3 },
            defaultOptions: {
                title: 'Vector Addition — Parallelogram Law',
                showParallelogram: true,
                showResultant: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'vectorScalarMultiplication': {
            name: 'Vector Scalar Multiplication',
            category: 'Transformations',
            subcategory: 'Transformation Vectors',
            description: 'Vector scaled by a scalar showing length change',
            type: 'vector_scalar_multiplication',
            vector: { x: 2, y: 1 },
            scalars: [2, 1, 0.5, -1],
            defaultOptions: {
                title: 'Vector Scalar Multiplication',
                showScaledVectors: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'vectorMagnitudeDirection': {
            name: 'Vector Magnitude Direction',
            category: 'Transformations',
            subcategory: 'Transformation Vectors',
            description: 'Vector with magnitude (length) and direction angle labelled',
            type: 'vector_magnitude_direction',
            vector: { x: 4, y: 3 },
            defaultOptions: {
                title: 'Vector — Magnitude and Direction',
                showMagnitude: true,
                showAngle: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'vectorPositionDisplacementDifference': {
            name: 'Vector Position Displacement Difference',
            category: 'Transformations',
            subcategory: 'Transformation Vectors',
            description: 'Diagram distinguishing position vectors and displacement vectors',
            type: 'vector_position_displacement_difference',
            defaultOptions: {
                title: 'Position vs Displacement Vector',
                showBothTypes: true,
                showDistinction: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'vectorTranslationVsPositionVector': {
            name: 'Vector Translation vs Position Vector',
            category: 'Transformations',
            subcategory: 'Transformation Vectors',
            description: 'Comparison of translation vector and position vector in the same diagram',
            type: 'vector_translation_vs_position_vector',
            defaultOptions: {
                title: 'Translation vs Position Vector',
                showComparison: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'vectorNotationVariationsTable': {
            name: 'Vector Notation Variations Table',
            category: 'Transformations',
            subcategory: 'Transformation Vectors',
            description: 'Reference table showing different vector notation forms (bold, arrow, column, component)',
            type: 'vector_notation_variations_table',
            defaultOptions: {
                title: 'Vector Notation Variations',
                showTable: true,
                showExamples: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== TRANSFORMATIONS — MATRICES ===========================
        // ============================================================

        'matrix2X2TransformationLayout': {
            name: 'Matrix 2×2 Transformation Layout',
            category: 'Transformations',
            subcategory: 'Transformation Matrices',
            description: 'Annotated 2×2 transformation matrix with column interpretation labelled',
            type: 'matrix_2x2_transformation_layout',
            defaultOptions: {
                title: '2×2 Transformation Matrix Layout',
                showAnnotations: true,
                showColumnMeaning: true,
                width: 700,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'matrixIdentityTransformation': {
            name: 'Matrix Identity Transformation',
            category: 'Transformations',
            subcategory: 'Transformation Matrices',
            description: 'Identity matrix I and its effect: no transformation',
            type: 'matrix_identity_transformation',
            defaultOptions: {
                title: 'Identity Matrix — No Transformation',
                showMatrix: true,
                showEffect: true,
                width: 700,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'matrixReflectionXAxis': {
            name: 'Matrix Reflection X-Axis',
            category: 'Transformations',
            subcategory: 'Transformation Matrices',
            description: 'Transformation matrix for reflection over the x-axis',
            type: 'matrix_reflection_x_axis',
            defaultOptions: {
                title: 'Reflection X-Axis — Matrix',
                showMatrix: true,
                showExample: true,
                width: 700,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'matrixReflectionYAxis': {
            name: 'Matrix Reflection Y-Axis',
            category: 'Transformations',
            subcategory: 'Transformation Matrices',
            description: 'Transformation matrix for reflection over the y-axis',
            type: 'matrix_reflection_y_axis',
            defaultOptions: {
                title: 'Reflection Y-Axis — Matrix',
                showMatrix: true,
                showExample: true,
                width: 700,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'matrixReflectionYEqualsX': {
            name: 'Matrix Reflection y = x',
            category: 'Transformations',
            subcategory: 'Transformation Matrices',
            description: 'Transformation matrix for reflection over y = x',
            type: 'matrix_reflection_y_equals_x',
            defaultOptions: {
                title: 'Reflection y = x — Matrix',
                showMatrix: true,
                showExample: true,
                width: 700,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'matrixRotation90Ccw': {
            name: 'Matrix Rotation 90° CCW',
            category: 'Transformations',
            subcategory: 'Transformation Matrices',
            description: 'Transformation matrix for 90° counterclockwise rotation about origin',
            type: 'matrix_rotation_90_ccw',
            defaultOptions: {
                title: 'Rotation 90° CCW — Matrix',
                showMatrix: true,
                showExample: true,
                width: 700,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'matrixRotationGeneralAngle': {
            name: 'Matrix Rotation General Angle',
            category: 'Transformations',
            subcategory: 'Transformation Matrices',
            description: 'General rotation matrix for angle θ',
            type: 'matrix_rotation_general_angle',
            defaultOptions: {
                title: 'Rotation Matrix — General Angle θ',
                showMatrix: true,
                showFormula: true,
                width: 700,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'matrixDilationScaleK': {
            name: 'Matrix Dilation Scale k',
            category: 'Transformations',
            subcategory: 'Transformation Matrices',
            description: 'Dilation matrix for scale factor k',
            type: 'matrix_dilation_scale_k',
            k: 2,
            defaultOptions: {
                title: 'Dilation Matrix — Scale k',
                showMatrix: true,
                showExample: true,
                width: 700,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'matrixCompositionMultiplicationOrder': {
            name: 'Matrix Composition Multiplication Order',
            category: 'Transformations',
            subcategory: 'Transformation Matrices',
            description: 'Diagram showing the correct order of matrix multiplication for compositions',
            type: 'matrix_composition_multiplication_order',
            defaultOptions: {
                title: 'Matrix Composition — Multiplication Order',
                showOrder: true,
                showExample: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'matrixDeterminantOrientationSign': {
            name: 'Matrix Determinant Orientation Sign',
            category: 'Transformations',
            subcategory: 'Transformation Matrices',
            description: 'Determinant sign indicates orientation: positive = direct, negative = opposite isometry',
            type: 'matrix_determinant_orientation_sign',
            defaultOptions: {
                title: 'Determinant Sign → Orientation',
                showDeterminant: true,
                showOrientationEffect: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'matrixAllStandardTransformationsTable': {
            name: 'Matrix All Standard Transformations Table',
            category: 'Transformations',
            subcategory: 'Transformation Matrices',
            description: 'Complete reference table of matrices for all standard transformations',
            type: 'matrix_all_standard_transformations_table',
            defaultOptions: {
                title: 'All Transformation Matrices — Table',
                showTable: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'matrixHomogeneousCoordinatesTranslation': {
            name: 'Matrix Homogeneous Coordinates Translation',
            category: 'Transformations',
            subcategory: 'Transformation Matrices',
            description: '3×3 homogeneous coordinate matrix for translation',
            type: 'matrix_homogeneous_coordinates_translation',
            defaultOptions: {
                title: 'Homogeneous Coordinates — Translation Matrix',
                showMatrix: true,
                showExample: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== TRANSFORMATIONS — SYMMETRY ===========================
        // ============================================================

        'symmetryLineBilateralExamples': {
            name: 'Symmetry Line Bilateral Examples',
            category: 'Transformations',
            subcategory: 'Transformation Symmetry',
            description: 'Examples of shapes with bilateral (line) symmetry',
            type: 'symmetry_line_bilateral_examples',
            defaultOptions: {
                title: 'Line Symmetry — Examples',
                showShapes: true,
                showSymmetryLines: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'symmetryRotationalOrderExamples': {
            name: 'Symmetry Rotational Order Examples',
            category: 'Transformations',
            subcategory: 'Transformation Symmetry',
            description: 'Examples of shapes with rotational symmetry of various orders',
            type: 'symmetry_rotational_order_examples',
            defaultOptions: {
                title: 'Rotational Symmetry — Order Examples',
                showShapes: true,
                showOrders: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'symmetryCombinedLineAndRotational': {
            name: 'Symmetry Combined Line and Rotational',
            category: 'Transformations',
            subcategory: 'Transformation Symmetry',
            description: 'Shape with both line and rotational symmetry shown together',
            type: 'symmetry_combined_line_and_rotational',
            defaultOptions: {
                title: 'Combined Line and Rotational Symmetry',
                showBothTypes: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'symmetryRegularPolygonAllSymmetries': {
            name: 'Symmetry Regular Polygon All Symmetries',
            category: 'Transformations',
            subcategory: 'Transformation Symmetry',
            description: 'Regular polygon with all lines of symmetry and rotational symmetry shown',
            type: 'symmetry_regular_polygon_all_symmetries',
            sides: 6,
            defaultOptions: {
                title: 'Regular Polygon — All Symmetries',
                showLines: true,
                showRotations: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'symmetryDihedralGroupSquare': {
            name: 'Symmetry Dihedral Group Square',
            category: 'Transformations',
            subcategory: 'Transformation Symmetry',
            description: 'Dihedral group D4 of symmetries of a square with all 8 elements shown',
            type: 'symmetry_dihedral_group_square',
            defaultOptions: {
                title: 'Dihedral Group D4 — Square Symmetries',
                showAllElements: true,
                showGroupTable: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'symmetryDihedralGroupEquilateralTriangle': {
            name: 'Symmetry Dihedral Group Equilateral Triangle',
            category: 'Transformations',
            subcategory: 'Transformation Symmetry',
            description: 'Dihedral group D3 of symmetries of an equilateral triangle with all 6 elements',
            type: 'symmetry_dihedral_group_equilateral_triangle',
            defaultOptions: {
                title: 'Dihedral Group D3 — Triangle Symmetries',
                showAllElements: true,
                showGroupTable: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'symmetryCyclicGroupPinwheel': {
            name: 'Symmetry Cyclic Group Pinwheel',
            category: 'Transformations',
            subcategory: 'Transformation Symmetry',
            description: 'Cyclic symmetry group Cn shown with a pinwheel shape',
            type: 'symmetry_cyclic_group_pinwheel',
            n: 5,
            defaultOptions: {
                title: 'Cyclic Group Cn — Pinwheel',
                showRotations: true,
                showNoReflection: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'symmetryNoneScaleneTriangle': {
            name: 'Symmetry None Scalene Triangle',
            category: 'Transformations',
            subcategory: 'Transformation Symmetry',
            description: 'Scalene triangle with no symmetry as a contrast example',
            type: 'symmetry_none_scalene_triangle',
            defaultOptions: {
                title: 'No Symmetry — Scalene Triangle',
                showNoLines: true,
                showNoRotation: true,
                width: 600,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'symmetryFriezePatternsSevenTypes': {
            name: 'Symmetry Frieze Patterns Seven Types',
            category: 'Transformations',
            subcategory: 'Transformation Symmetry',
            description: 'All seven types of frieze (border) patterns with symmetries labelled',
            type: 'symmetry_frieze_patterns_seven_types',
            defaultOptions: {
                title: 'Seven Frieze Pattern Types',
                showAllSeven: true,
                showSymmetryLabels: true,
                width: 900,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'symmetryWallpaperGroupExamples': {
            name: 'Symmetry Wallpaper Group Examples',
            category: 'Transformations',
            subcategory: 'Transformation Symmetry',
            description: 'Selected wallpaper group patterns with symmetry elements highlighted',
            type: 'symmetry_wallpaper_group_examples',
            defaultOptions: {
                title: 'Wallpaper Group Examples',
                showExamples: true,
                showSymmetries: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'symmetryCrystalSymmetryConnection': {
            name: 'Symmetry Crystal Symmetry Connection',
            category: 'Transformations',
            subcategory: 'Transformation Symmetry',
            description: 'Connection between mathematical symmetry groups and crystal structures',
            type: 'symmetry_crystal_symmetry_connection',
            defaultOptions: {
                title: 'Crystal Symmetry — Mathematical Connection',
                showCrystal: true,
                showSymmetry: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'symmetryNatureExamplesBilateralRadial': {
            name: 'Symmetry Nature Examples Bilateral Radial',
            category: 'Transformations',
            subcategory: 'Transformation Symmetry',
            description: 'Nature examples showing bilateral and radial symmetry',
            type: 'symmetry_nature_examples_bilateral_radial',
            defaultOptions: {
                title: 'Symmetry in Nature — Bilateral and Radial',
                showBilateral: true,
                showRadial: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== TRANSFORMATIONS — CONGRUENCE =========================
        // ============================================================

        'congruenceViaTranslationDiagram': {
            name: 'Congruence via Translation Diagram',
            category: 'Transformations',
            subcategory: 'Transformation Congruence',
            description: 'Two congruent shapes connected by a translation',
            type: 'congruence_via_translation_diagram',
            defaultOptions: {
                title: 'Congruence via Translation',
                showTranslation: true,
                showCongruence: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'congruenceViaReflectionDiagram': {
            name: 'Congruence via Reflection Diagram',
            category: 'Transformations',
            subcategory: 'Transformation Congruence',
            description: 'Two congruent shapes connected by a reflection',
            type: 'congruence_via_reflection_diagram',
            defaultOptions: {
                title: 'Congruence via Reflection',
                showReflection: true,
                showCongruence: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'congruenceViaRotationDiagram': {
            name: 'Congruence via Rotation Diagram',
            category: 'Transformations',
            subcategory: 'Transformation Congruence',
            description: 'Two congruent shapes connected by a rotation',
            type: 'congruence_via_rotation_diagram',
            defaultOptions: {
                title: 'Congruence via Rotation',
                showRotation: true,
                showCongruence: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'congruenceSssTransformationProof': {
            name: 'Congruence SSS Transformation Proof',
            category: 'Transformations',
            subcategory: 'Transformation Congruence',
            description: 'Transformation proof of SSS congruence',
            type: 'congruence_sss_transformation_proof',
            defaultOptions: {
                title: 'SSS Congruence — Transformation Proof',
                showProof: true,
                showSteps: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'congruencePreimageImageEqualSidesAngles': {
            name: 'Congruence Pre-image Image Equal Sides Angles',
            category: 'Transformations',
            subcategory: 'Transformation Congruence',
            description: 'Pre-image and image with equal sides and angles marked to show congruence',
            type: 'congruence_preimage_image_equal_sides_angles',
            defaultOptions: {
                title: 'Congruent Shapes — Equal Sides and Angles',
                showTickMarks: true,
                showAngleMarks: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'congruenceVsSimilaritySideBySide': {
            name: 'Congruence vs Similarity Side by Side',
            category: 'Transformations',
            subcategory: 'Transformation Congruence',
            description: 'Side-by-side comparison of congruent and similar shapes',
            type: 'congruence_vs_similarity_side_by_side',
            defaultOptions: {
                title: 'Congruence vs Similarity',
                showSideBySide: true,
                showComparison: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'congruenceIdentifyingTransformationType': {
            name: 'Congruence Identifying Transformation Type',
            category: 'Transformations',
            subcategory: 'Transformation Congruence',
            description: 'Diagram for identifying which isometry maps one congruent shape to another',
            type: 'congruence_identifying_transformation_type',
            defaultOptions: {
                title: 'Identifying Congruence Transformation',
                showMethod: true,
                showExample: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'congruenceTransformationProofMethod': {
            name: 'Congruence Transformation Proof Method',
            category: 'Transformations',
            subcategory: 'Transformation Congruence',
            description: 'Method template for proving congruence using transformations',
            type: 'congruence_transformation_proof_method',
            defaultOptions: {
                title: 'Congruence — Transformation Proof Method',
                showTemplate: true,
                showExample: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== TRANSFORMATIONS — SIMILARITY =========================
        // ============================================================

        'similarityDilationCorrespondingSides': {
            name: 'Similarity Dilation Corresponding Sides',
            category: 'Transformations',
            subcategory: 'Transformation Similarity',
            description: 'Similar shapes from dilation with corresponding sides labelled',
            type: 'similarity_dilation_corresponding_sides',
            k: 2,
            defaultOptions: {
                title: 'Similarity — Corresponding Sides',
                showSides: true,
                showRatios: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'similarityRatioLabelledDiagram': {
            name: 'Similarity Ratio Labelled Diagram',
            category: 'Transformations',
            subcategory: 'Transformation Similarity',
            description: 'Similar shapes with scale ratio clearly labelled',
            type: 'similarity_ratio_labelled_diagram',
            defaultOptions: {
                title: 'Similarity — Scale Ratio Labelled',
                showRatio: true,
                showShapes: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'similarityAnglePreservation': {
            name: 'Similarity Angle Preservation',
            category: 'Transformations',
            subcategory: 'Transformation Similarity',
            description: 'Diagram showing that corresponding angles are equal in similar shapes',
            type: 'similarity_angle_preservation',
            defaultOptions: {
                title: 'Similarity — Angle Preservation',
                showAngles: true,
                showEqual: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'similarityFindingMissingLengths': {
            name: 'Similarity Finding Missing Lengths',
            category: 'Transformations',
            subcategory: 'Transformation Similarity',
            description: 'Two similar shapes with one missing side length to find using ratio',
            type: 'similarity_finding_missing_lengths',
            defaultOptions: {
                title: 'Similarity — Finding Missing Lengths',
                showKnownSides: true,
                showUnknown: true,
                showRatio: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'similarityNestedTriangles': {
            name: 'Similarity Nested Triangles',
            category: 'Transformations',
            subcategory: 'Transformation Similarity',
            description: 'Nested similar triangles with parallel sides and common vertex',
            type: 'similarity_nested_triangles',
            defaultOptions: {
                title: 'Nested Similar Triangles',
                showNesting: true,
                showParallelSides: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'similarityAaCriterionDiagram': {
            name: 'Similarity AA Criterion Diagram',
            category: 'Transformations',
            subcategory: 'Transformation Similarity',
            description: 'AA similarity criterion: two equal angles implies similarity',
            type: 'similarity_aa_criterion_diagram',
            defaultOptions: {
                title: 'AA Similarity Criterion',
                showTwoAngles: true,
                showSimilarity: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'similaritySssCriterionDiagram': {
            name: 'Similarity SSS Criterion Diagram',
            category: 'Transformations',
            subcategory: 'Transformation Similarity',
            description: 'SSS similarity criterion: three proportional sides implies similarity',
            type: 'similarity_sss_criterion_diagram',
            defaultOptions: {
                title: 'SSS Similarity Criterion',
                showThreeSides: true,
                showRatios: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'similarityRealWorldMapScale': {
            name: 'Similarity Real World Map Scale',
            category: 'Transformations',
            subcategory: 'Transformation Similarity',
            description: 'Map scale as a real-world application of similarity',
            type: 'similarity_real_world_map_scale',
            scale: '1:50000',
            defaultOptions: {
                title: 'Similarity — Map Scale Application',
                showMap: true,
                showScale: true,
                showCalculation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'similarityShadowHeightProblem': {
            name: 'Similarity Shadow Height Problem',
            category: 'Transformations',
            subcategory: 'Transformation Similarity',
            description: 'Similar triangles applied to shadow and height problem',
            type: 'similarity_shadow_height_problem',
            defaultOptions: {
                title: 'Similarity — Shadow Height Problem',
                showTriangles: true,
                showShadows: true,
                showCalculation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'similarityDilationCompositionIsometry': {
            name: 'Similarity Dilation Composition Isometry',
            category: 'Transformations',
            subcategory: 'Transformation Similarity',
            description: 'Similarity transformation as composition of dilation and isometry',
            type: 'similarity_dilation_composition_isometry',
            defaultOptions: {
                title: 'Similarity = Dilation + Isometry',
                showComposition: true,
                showSteps: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== VECTORS — COLUMN VECTORS =============================
        // ============================================================

        'columnVectorNotation': {
            name: 'Column Vector Notation',
            category: 'Vectors',
            subcategory: 'Column Vectors',
            description: 'Vertical bracket notation (x; y) with labels explained',
            type: 'column_vector_notation',
            vector: { x: 3, y: 4 },
            defaultOptions: {
                title: 'Column Vector Notation',
                showNotation: true,
                showLabels: true,
                width: 600,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'vectorArrowOnGrid': {
            name: 'Vector Arrow on Grid',
            category: 'Vectors',
            subcategory: 'Column Vectors',
            description: 'Arrow drawn on squared grid with horizontal and vertical components labelled',
            type: 'vector_arrow_on_grid',
            vector: { x: 4, y: 3 },
            defaultOptions: {
                title: 'Vector Arrow on Grid',
                showGrid: true,
                showComponents: true,
                showArrow: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'positiveNegativeComponents': {
            name: 'Positive Negative Components',
            category: 'Vectors',
            subcategory: 'Column Vectors',
            description: 'Four quadrant diagram showing sign convention for each direction',
            type: 'positive_negative_components',
            defaultOptions: {
                title: 'Vector Component Sign Convention',
                showFourQuadrants: true,
                showSignConvention: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'vectorVsPointComparison': {
            name: 'Vector vs Point Comparison',
            category: 'Vectors',
            subcategory: 'Column Vectors',
            description: 'Side-by-side: point P(3,4) vs displacement vector (3;4)',
            type: 'vector_vs_point_comparison',
            defaultOptions: {
                title: 'Point vs Vector — Comparison',
                showSideBySide: true,
                showDistinction: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'equalVectorsDifferentPositions': {
            name: 'Equal Vectors Different Positions',
            category: 'Vectors',
            subcategory: 'Column Vectors',
            description: 'Multiple equal vectors in different positions on a grid',
            type: 'equal_vectors_different_positions',
            vector: { x: 3, y: 2 },
            defaultOptions: {
                title: 'Equal Vectors — Different Positions',
                showMultipleVectors: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'zeroVectorDiagram': {
            name: 'Zero Vector Diagram',
            category: 'Vectors',
            subcategory: 'Column Vectors',
            description: 'Zero vector shown as a dot (no displacement)',
            type: 'zero_vector_diagram',
            defaultOptions: {
                title: 'Zero Vector',
                showPoint: true,
                showLabel: true,
                width: 500,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'freeVectorConcept': {
            name: 'Free Vector Concept',
            category: 'Vectors',
            subcategory: 'Column Vectors',
            description: 'Same vector drawn at three different positions to show freedom of placement',
            type: 'free_vector_concept',
            vector: { x: 3, y: 2 },
            defaultOptions: {
                title: 'Free Vector — Position Independence',
                showMultiplePositions: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'columnVectorComponentsLabelled': {
            name: 'Column Vector Components Labelled',
            category: 'Vectors',
            subcategory: 'Column Vectors',
            description: 'Single arrow with horizontal leg (aₓ) and vertical leg (aᵧ) labelled',
            type: 'column_vector_components_labelled',
            vector: { x: 5, y: 3 },
            defaultOptions: {
                title: 'Vector Components — Labelled',
                showHorizontalLeg: true,
                showVerticalLeg: true,
                showLabels: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'negativeVectorDiagram': {
            name: 'Negative Vector Diagram',
            category: 'Vectors',
            subcategory: 'Column Vectors',
            description: 'Vector a and its negative −a shown as reversed arrows',
            type: 'negative_vector_diagram',
            vector: { x: 4, y: 2 },
            defaultOptions: {
                title: 'Negative Vector −a',
                showBothVectors: true,
                showReversal: true,
                width: 700,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'vectorFromCoordinates': {
            name: 'Vector From Coordinates',
            category: 'Vectors',
            subcategory: 'Column Vectors',
            description: 'Diagram showing AB = B − A from two coordinate points',
            type: 'vector_from_coordinates',
            A: { x: 1, y: 2 },
            B: { x: 4, y: 5 },
            defaultOptions: {
                title: 'Vector from Coordinates: AB = B − A',
                showPoints: true,
                showSubtraction: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== VECTORS — POSITION VECTORS ===========================
        // ============================================================

        'positionVectorFromOrigin': {
            name: 'Position Vector From Origin',
            category: 'Vectors',
            subcategory: 'Position Vectors',
            description: 'Origin O with arrows to points A, B, C labelled with position vectors a, b, c',
            type: 'position_vector_from_origin',
            points: [
                { x: 3, y: 4, label: 'A' },
                { x: -2, y: 3, label: 'B' },
                { x: 5, y: -1, label: 'C' }
            ],
            defaultOptions: {
                title: 'Position Vectors from Origin',
                showOrigin: true,
                showLabels: true,
                showGrid: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'positionVectorNotation': {
            name: 'Position Vector Notation',
            category: 'Vectors',
            subcategory: 'Position Vectors',
            description: 'Diagram showing OA = a with O clearly marked as origin',
            type: 'position_vector_notation',
            defaultOptions: {
                title: 'Position Vector Notation OA = a',
                showOrigin: true,
                showNotation: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'abEqualsBAMinusA': {
            name: 'AB Equals B Minus A',
            category: 'Vectors',
            subcategory: 'Position Vectors',
            description: 'Triangle OAB showing AB = b − a via triangle law route A→O→B',
            type: 'ab_equals_b_minus_a',
            defaultOptions: {
                title: 'AB = b − a (Triangle Law)',
                showTriangle: true,
                showRoute: true,
                showFormula: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'positionVectorTriangleLaw': {
            name: 'Position Vector Triangle Law',
            category: 'Vectors',
            subcategory: 'Position Vectors',
            description: 'OA + AB = OB shown on a coordinate diagram',
            type: 'position_vector_triangle_law',
            defaultOptions: {
                title: 'OA + AB = OB — Triangle Law',
                showTriangle: true,
                showEquation: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'midpointPositionVector': {
            name: 'Midpoint Position Vector',
            category: 'Vectors',
            subcategory: 'Position Vectors',
            description: 'Midpoint M of AB with m = ½(a + b) labelled',
            type: 'midpoint_position_vector',
            A: { x: 1, y: 2 },
            B: { x: 5, y: 4 },
            defaultOptions: {
                title: 'Midpoint Position Vector m = ½(a + b)',
                showMidpoint: true,
                showFormula: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'multiplePositionVectorsGrid': {
            name: 'Multiple Position Vectors Grid',
            category: 'Vectors',
            subcategory: 'Position Vectors',
            description: 'Several points with their position vectors drawn from origin',
            type: 'multiple_position_vectors_grid',
            defaultOptions: {
                title: 'Multiple Position Vectors',
                showAllVectors: true,
                showGrid: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'sectionFormulaDiagram': {
            name: 'Section Formula Diagram',
            category: 'Vectors',
            subcategory: 'Position Vectors',
            description: 'Point P dividing AB in ratio m:n with position vector labelled',
            type: 'section_formula_diagram',
            m: 2,
            n: 3,
            defaultOptions: {
                title: 'Section Formula — Dividing in Ratio m:n',
                showRatio: true,
                showFormula: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'positionVsFreeVector': {
            name: 'Position vs Free Vector',
            category: 'Vectors',
            subcategory: 'Position Vectors',
            description: 'Contrast: position vector fixed at O vs free vector anywhere',
            type: 'position_vs_free_vector',
            defaultOptions: {
                title: 'Position vs Free Vector',
                showContrast: true,
                showLabels: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'baVsAbDiagram': {
            name: 'BA vs AB Diagram',
            category: 'Vectors',
            subcategory: 'Position Vectors',
            description: 'Both AB and BA shown as opposite arrows between two points',
            type: 'ba_vs_ab_diagram',
            defaultOptions: {
                title: 'AB and BA — Opposite Vectors',
                showBothArrows: true,
                showOpposite: true,
                width: 700,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'positionVectorCoordinates': {
            name: 'Position Vector Coordinates',
            category: 'Vectors',
            subcategory: 'Position Vectors',
            description: 'Point P(x,y) with position vector (x;y) and coordinates shown together',
            type: 'position_vector_coordinates',
            defaultOptions: {
                title: 'Position Vector and Coordinates',
                showPoint: true,
                showVector: true,
                showCoordinates: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== VECTORS — VECTOR ADDITION ============================
        // ============================================================

        'tipToTailAddition': {
            name: 'Tip-to-Tail Addition',
            category: 'Vectors',
            subcategory: 'Vector Addition',
            description: 'Two vectors a and b drawn tip-to-tail with resultant a+b as closing arrow',
            type: 'tip_to_tail_addition',
            vectorA: { x: 3, y: 1 },
            vectorB: { x: 2, y: 3 },
            defaultOptions: {
                title: 'Vector Addition — Tip-to-Tail',
                showBothVectors: true,
                showResultant: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'parallelogramLawAddition': {
            name: 'Parallelogram Law Addition',
            category: 'Vectors',
            subcategory: 'Vector Addition',
            description: 'Both vectors from same point with parallelogram completed; diagonal = a+b',
            type: 'parallelogram_law_addition',
            vectorA: { x: 4, y: 1 },
            vectorB: { x: 1, y: 3 },
            defaultOptions: {
                title: 'Parallelogram Law — Vector Addition',
                showParallelogram: true,
                showDiagonal: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'resultantVectorDiagram': {
            name: 'Resultant Vector Diagram',
            category: 'Vectors',
            subcategory: 'Vector Addition',
            description: 'Clear labelling of a, b, and resultant R = a + b',
            type: 'resultant_vector_diagram',
            vectorA: { x: 3, y: 2 },
            vectorB: { x: 2, y: -1 },
            defaultOptions: {
                title: 'Resultant Vector R = a + b',
                showLabels: true,
                showResultant: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'commutativeAdditionDiagram': {
            name: 'Commutative Addition Diagram',
            category: 'Vectors',
            subcategory: 'Vector Addition',
            description: 'a+b and b+a shown as different paths reaching the same endpoint',
            type: 'commutative_addition_diagram',
            vectorA: { x: 3, y: 1 },
            vectorB: { x: 1, y: 3 },
            defaultOptions: {
                title: 'Vector Addition is Commutative',
                showBothPaths: true,
                showSameEndpoint: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'threeVectorAddition': {
            name: 'Three Vector Addition',
            category: 'Vectors',
            subcategory: 'Vector Addition',
            description: 'Three vectors added in chain: a+b+c with resultant',
            type: 'three_vector_addition',
            vectors: [
                { x: 3, y: 1 },
                { x: 2, y: 2 },
                { x: -1, y: 3 }
            ],
            defaultOptions: {
                title: 'Three Vector Addition: a + b + c',
                showChain: true,
                showResultant: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'componentAdditionTable': {
            name: 'Component Addition Table',
            category: 'Vectors',
            subcategory: 'Vector Addition',
            description: 'Visual table showing x-components added, y-components added separately',
            type: 'component_addition_table',
            defaultOptions: {
                title: 'Component Addition Table',
                showXColumn: true,
                showYColumn: true,
                width: 700,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'zeroResultantDiagram': {
            name: 'Zero Resultant Diagram',
            category: 'Vectors',
            subcategory: 'Vector Addition',
            description: 'Vectors that sum to zero forming a closed polygon',
            type: 'zero_resultant_diagram',
            defaultOptions: {
                title: 'Zero Resultant — Closed Polygon',
                showClosedPolygon: true,
                showZeroResult: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'vectorAdditionNumberLineX': {
            name: 'Vector Addition Number Line X',
            category: 'Vectors',
            subcategory: 'Vector Addition',
            description: 'x-components adding along a horizontal number line',
            type: 'vector_addition_number_line_x',
            defaultOptions: {
                title: 'x-Components Adding — Number Line',
                showNumberLine: true,
                showComponents: true,
                width: 800,
                height: 300,
                backgroundColor: '#ffffff'
            }
        },

        'vectorAdditionNumberLineY': {
            name: 'Vector Addition Number Line Y',
            category: 'Vectors',
            subcategory: 'Vector Addition',
            description: 'y-components adding along a vertical number line',
            type: 'vector_addition_number_line_y',
            defaultOptions: {
                title: 'y-Components Adding — Number Line',
                showNumberLine: true,
                showComponents: true,
                width: 300,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'triangleLawLabelled': {
            name: 'Triangle Law Labelled',
            category: 'Vectors',
            subcategory: 'Vector Addition',
            description: 'Triangle law with all sides clearly labelled: a, b, a+b',
            type: 'triangle_law_labelled',
            vectorA: { x: 4, y: 0 },
            vectorB: { x: 0, y: 3 },
            defaultOptions: {
                title: 'Triangle Law — Labelled',
                showLabels: true,
                showFormula: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'parallelogramDiagonalProof': {
            name: 'Parallelogram Diagonal Proof',
            category: 'Vectors',
            subcategory: 'Vector Addition',
            description: 'Parallelogram with both diagonals drawn; one = a+b, other = a−b',
            type: 'parallelogram_diagonal_proof',
            vectorA: { x: 4, y: 1 },
            vectorB: { x: 1, y: 3 },
            defaultOptions: {
                title: 'Parallelogram — Both Diagonals',
                showBothDiagonals: true,
                showLabels: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'vectorPolygonAddition': {
            name: 'Vector Polygon Addition',
            category: 'Vectors',
            subcategory: 'Vector Addition',
            description: 'Multiple vectors forming a polygon — sum of all sides = zero',
            type: 'vector_polygon_addition',
            defaultOptions: {
                title: 'Vector Polygon — Sum = Zero',
                showPolygon: true,
                showZeroSum: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== VECTORS — VECTOR SUBTRACTION =========================
        // ============================================================

        'vectorSubtractionTipToTip': {
            name: 'Vector Subtraction Tip-to-Tip',
            category: 'Vectors',
            subcategory: 'Vector Subtraction',
            description: 'a and b from same origin; a−b drawn from tip of b to tip of a',
            type: 'vector_subtraction_tip_to_tip',
            vectorA: { x: 4, y: 3 },
            vectorB: { x: 2, y: 1 },
            defaultOptions: {
                title: 'Vector Subtraction — Tip-to-Tip',
                showTipToTip: true,
                showResultant: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'addingNegativeDiagram': {
            name: 'Adding Negative Diagram',
            category: 'Vectors',
            subcategory: 'Vector Subtraction',
            description: 'Shows a − b rewritten as a + (−b) with −b arrow reversed',
            type: 'adding_negative_diagram',
            vectorA: { x: 4, y: 2 },
            vectorB: { x: 2, y: 3 },
            defaultOptions: {
                title: 'a − b = a + (−b)',
                showNegation: true,
                showAddition: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'negativeVectorReversal': {
            name: 'Negative Vector Reversal',
            category: 'Vectors',
            subcategory: 'Vector Subtraction',
            description: 'Vector b and −b shown as same length, opposite direction',
            type: 'negative_vector_reversal',
            vector: { x: 3, y: 2 },
            defaultOptions: {
                title: 'Negative Vector — Reversal',
                showBothVectors: true,
                showOpposite: true,
                width: 700,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'abFormuladiagram': {
            name: 'AB Formula Diagram',
            category: 'Vectors',
            subcategory: 'Vector Subtraction',
            description: 'Triangle OAB: position vectors a and b labelled; AB = b−a highlighted',
            type: 'ab_formula_diagram',
            defaultOptions: {
                title: 'AB = b − a Formula Diagram',
                showTriangle: true,
                showHighlight: true,
                showFormula: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'baNegativeAb': {
            name: 'BA = −AB',
            category: 'Vectors',
            subcategory: 'Vector Subtraction',
            description: 'BA = −AB shown on same diagram with both arrows',
            type: 'ba_negative_ab',
            defaultOptions: {
                title: 'BA = −AB',
                showBothArrows: true,
                showNegation: true,
                width: 700,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'subtractionComponentsDiagram': {
            name: 'Subtraction Components Diagram',
            category: 'Vectors',
            subcategory: 'Vector Subtraction',
            description: 'Component-by-component subtraction: aₓ−bₓ and aᵧ−bᵧ shown separately',
            type: 'subtraction_components_diagram',
            defaultOptions: {
                title: 'Subtraction — Component by Component',
                showXComponent: true,
                showYComponent: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'relativeDisplacementDiagram': {
            name: 'Relative Displacement Diagram',
            category: 'Vectors',
            subcategory: 'Vector Subtraction',
            description: 'Two points A and B; displacement vector AB = b − a as direct arrow',
            type: 'relative_displacement_diagram',
            A: { x: 1, y: 2 },
            B: { x: 5, y: 4 },
            defaultOptions: {
                title: 'Relative Displacement AB = b − a',
                showDisplacement: true,
                showFormula: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'subtractionVsAddition': {
            name: 'Subtraction vs Addition',
            category: 'Vectors',
            subcategory: 'Vector Subtraction',
            description: 'Side-by-side comparison of a+b and a−b from the same a and b',
            type: 'subtraction_vs_addition',
            vectorA: { x: 4, y: 1 },
            vectorB: { x: 1, y: 3 },
            defaultOptions: {
                title: 'a+b vs a−b Comparison',
                showSideBySide: true,
                showBothResults: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'roundTripZeroDiagram': {
            name: 'Round Trip Zero Diagram',
            category: 'Vectors',
            subcategory: 'Vector Subtraction',
            description: 'AB + BA = 0 shown geometrically as forward and back arrows',
            type: 'round_trip_zero_diagram',
            defaultOptions: {
                title: 'AB + BA = 0 — Round Trip',
                showForwardBack: true,
                showZeroResult: true,
                width: 700,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'vectorSubtractionGridExample': {
            name: 'Vector Subtraction Grid Example',
            category: 'Vectors',
            subcategory: 'Vector Subtraction',
            description: 'Concrete grid example: (5;3) − (2;7) = (3;−4) with arrows drawn',
            type: 'vector_subtraction_grid_example',
            vectorA: { x: 5, y: 3 },
            vectorB: { x: 2, y: 7 },
            defaultOptions: {
                title: 'Vector Subtraction — Grid Example',
                showGrid: true,
                showSubtraction: true,
                showResult: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== VECTORS — SCALAR MULTIPLICATION ======================
        // ============================================================

        'scalarStretchDiagram': {
            name: 'Scalar Stretch Diagram',
            category: 'Vectors',
            subcategory: 'Scalar Multiplication',
            description: 'Vector a and 2a and 3a drawn from same point showing lengthening',
            type: 'scalar_stretch_diagram',
            vector: { x: 2, y: 1 },
            scalars: [1, 2, 3],
            defaultOptions: {
                title: 'Scalar Multiplication — Stretching',
                showMultiples: true,
                showLabels: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'scalarShrinkDiagram': {
            name: 'Scalar Shrink Diagram',
            category: 'Vectors',
            subcategory: 'Scalar Multiplication',
            description: 'Vector a and ½a drawn showing shortening',
            type: 'scalar_shrink_diagram',
            vector: { x: 4, y: 2 },
            defaultOptions: {
                title: 'Scalar Multiplication — Shrinking',
                showHalf: true,
                showOriginal: true,
                width: 700,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'negativeScalarReversal': {
            name: 'Negative Scalar Reversal',
            category: 'Vectors',
            subcategory: 'Scalar Multiplication',
            description: 'Vector a and −a and −2a showing direction reversal with scaling',
            type: 'negative_scalar_reversal',
            vector: { x: 3, y: 1 },
            defaultOptions: {
                title: 'Negative Scalar — Direction Reversal',
                showNegatives: true,
                showReversal: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'scalarZeroProduct': {
            name: 'Scalar Zero Product',
            category: 'Vectors',
            subcategory: 'Scalar Multiplication',
            description: '0 × a = zero vector (point)',
            type: 'scalar_zero_product',
            defaultOptions: {
                title: '0 × a = Zero Vector',
                showZeroResult: true,
                showPoint: true,
                width: 600,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'scalarMultipleParallel': {
            name: 'Scalar Multiple Parallel',
            category: 'Vectors',
            subcategory: 'Scalar Multiplication',
            description: 'ka drawn for k = 3, 1, ½, −1, −2: all parallel, different magnitudes',
            type: 'scalar_multiple_parallel',
            vector: { x: 2, y: 1 },
            scalars: [3, 1, 0.5, -1, -2],
            defaultOptions: {
                title: 'Scalar Multiples — All Parallel',
                showAllMultiples: true,
                showParallel: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'componentsScaledDiagram': {
            name: 'Components Scaled Diagram',
            category: 'Vectors',
            subcategory: 'Scalar Multiplication',
            description: 'Shows (ka₁; ka₂) with both components scaled by k',
            type: 'components_scaled_diagram',
            vector: { x: 3, y: 2 },
            k: 2,
            defaultOptions: {
                title: 'Components Scaled by k',
                showBothComponents: true,
                showScaling: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'unitScalarIdentity': {
            name: 'Unit Scalar Identity',
            category: 'Vectors',
            subcategory: 'Scalar Multiplication',
            description: '1 × a = a shown as identical arrows',
            type: 'unit_scalar_identity',
            vector: { x: 3, y: 2 },
            defaultOptions: {
                title: '1 × a = a (Identity)',
                showIdentical: true,
                showLabel: true,
                width: 600,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'distributiveScalarDiagram': {
            name: 'Distributive Scalar Diagram',
            category: 'Vectors',
            subcategory: 'Scalar Multiplication',
            description: 'k(a + b) and ka + kb shown to be equal geometrically',
            type: 'distributive_scalar_diagram',
            vectorA: { x: 3, y: 1 },
            vectorB: { x: 1, y: 2 },
            k: 2,
            defaultOptions: {
                title: 'k(a + b) = ka + kb — Distributive',
                showEquality: true,
                showBothMethods: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'similarShapesScalarMult': {
            name: 'Similar Shapes Scalar Multiplication',
            category: 'Vectors',
            subcategory: 'Scalar Multiplication',
            description: 'Triangle scaled by factor k using scalar multiplication of all vertices',
            type: 'similar_shapes_scalar_mult',
            k: 2,
            defaultOptions: {
                title: 'Similar Shapes via Scalar Multiplication',
                showOriginal: true,
                showScaled: true,
                showFactor: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'scaleFactorMagnitudeTable': {
            name: 'Scale Factor Magnitude Table',
            category: 'Vectors',
            subcategory: 'Scalar Multiplication',
            description: 'Visual table: k value | direction effect | magnitude effect',
            type: 'scale_factor_magnitude_table',
            defaultOptions: {
                title: 'Scalar k — Direction and Magnitude Effects',
                showTable: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'antiParallelNegativeK': {
            name: 'Anti-Parallel Negative k',
            category: 'Vectors',
            subcategory: 'Scalar Multiplication',
            description: 'k > 0 (same direction) vs k < 0 (opposite direction) shown side by side',
            type: 'anti_parallel_negative_k',
            vector: { x: 3, y: 1 },
            defaultOptions: {
                title: 'k > 0 vs k < 0 — Direction Effect',
                showSideBySide: true,
                showDirections: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'scalarMultipleCollinearVisual': {
            name: 'Scalar Multiple Collinear Visual',
            category: 'Vectors',
            subcategory: 'Scalar Multiplication',
            description: 'All scalar multiples of a vector lying on the same straight line through O',
            type: 'scalar_multiple_collinear_visual',
            vector: { x: 2, y: 1 },
            defaultOptions: {
                title: 'Scalar Multiples — Collinear through O',
                showLine: true,
                showMultiples: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== VECTORS — MAGNITUDE ==================================
        // ============================================================

        'magnitudeRightTriangle': {
            name: 'Magnitude Right Triangle',
            category: 'Vectors',
            subcategory: 'Magnitude',
            description: 'Vector a = (aₓ; aᵧ) with right triangle: legs aₓ and aᵧ, hypotenuse |a|',
            type: 'magnitude_right_triangle',
            vector: { x: 3, y: 4 },
            defaultOptions: {
                title: 'Magnitude — Right Triangle',
                showRightTriangle: true,
                showComponents: true,
                showMagnitude: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'magnitudeFormulaVisual': {
            name: 'Magnitude Formula Visual',
            category: 'Vectors',
            subcategory: 'Magnitude',
            description: 'Formula |a| = √(aₓ² + aᵧ²) with labelled diagram',
            type: 'magnitude_formula_visual',
            vector: { x: 3, y: 4 },
            defaultOptions: {
                title: 'Magnitude Formula |a| = √(aₓ² + aᵧ²)',
                showFormula: true,
                showDiagram: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'pythagorasVectorComponents': {
            name: 'Pythagoras Vector Components',
            category: 'Vectors',
            subcategory: 'Magnitude',
            description: 'Pythagoras applied: aₓ² + aᵧ² = |a|² with squares drawn on each side',
            type: 'pythagoras_vector_components',
            vector: { x: 3, y: 4 },
            defaultOptions: {
                title: 'Pythagoras — Vector Components',
                showSquares: true,
                showEquation: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'pythagoreanTripleVectors': {
            name: 'Pythagorean Triple Vectors',
            category: 'Vectors',
            subcategory: 'Magnitude',
            description: '(3;4)→5, (5;12)→13, (8;15)→17 shown as right triangles',
            type: 'pythagorean_triple_vectors',
            defaultOptions: {
                title: 'Pythagorean Triple Vectors',
                showTriples: true,
                showMagnitudes: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'unitVectorCircle': {
            name: 'Unit Vector Circle',
            category: 'Vectors',
            subcategory: 'Magnitude',
            description: 'Unit circle with radius 1; unit vectors as arrows from origin to circle',
            type: 'unit_vector_circle',
            defaultOptions: {
                title: 'Unit Vector — Unit Circle',
                showCircle: true,
                showUnitVectors: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'magnitudeScaleDiagram': {
            name: 'Magnitude Scale Diagram',
            category: 'Vectors',
            subcategory: 'Magnitude',
            description: '|a|, |2a|, |3a| shown with lengths labelled: |ka| = |k||a|',
            type: 'magnitude_scale_diagram',
            vector: { x: 3, y: 1 },
            scalars: [1, 2, 3],
            defaultOptions: {
                title: 'Magnitude Scaling: |ka| = |k||a|',
                showLengths: true,
                showFormula: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'triangleInequalityVisual': {
            name: 'Triangle Inequality Visual',
            category: 'Vectors',
            subcategory: 'Magnitude',
            description: '|a+b| ≤ |a|+|b| illustrated with triangle where direct path < sum of sides',
            type: 'triangle_inequality_visual',
            vectorA: { x: 3, y: 2 },
            vectorB: { x: 2, y: 3 },
            defaultOptions: {
                title: 'Triangle Inequality: |a+b| ≤ |a|+|b|',
                showTriangle: true,
                showInequality: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'magnitudeComparisonVectors': {
            name: 'Magnitude Comparison Vectors',
            category: 'Vectors',
            subcategory: 'Magnitude',
            description: 'Several vectors of different magnitudes arranged for comparison',
            type: 'magnitude_comparison_vectors',
            defaultOptions: {
                title: 'Magnitude Comparison',
                showMultipleVectors: true,
                showMagnitudes: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'unitVectorDerivation': {
            name: 'Unit Vector Derivation',
            category: 'Vectors',
            subcategory: 'Magnitude',
            description: 'â = a/|a| shown: divide each component by the magnitude',
            type: 'unit_vector_derivation',
            vector: { x: 3, y: 4 },
            defaultOptions: {
                title: 'Unit Vector â = a / |a|',
                showDivision: true,
                showResult: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'negativeComponentMagnitude': {
            name: 'Negative Component Magnitude',
            category: 'Vectors',
            subcategory: 'Magnitude',
            description: '(−3;4): right triangle still gives positive magnitude √(9+16)=5',
            type: 'negative_component_magnitude',
            vector: { x: -3, y: 4 },
            defaultOptions: {
                title: 'Negative Component — Magnitude Still Positive',
                showRightTriangle: true,
                showPositiveHypotenuse: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'magnitudeZeroVector': {
            name: 'Magnitude Zero Vector',
            category: 'Vectors',
            subcategory: 'Magnitude',
            description: '|0| = 0 shown as a point with no length',
            type: 'magnitude_zero_vector',
            defaultOptions: {
                title: 'Zero Vector — |0| = 0',
                showPoint: true,
                showLabel: true,
                width: 500,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        '3dMagnitudeExtension': {
            name: '3D Magnitude Extension',
            category: 'Vectors',
            subcategory: 'Magnitude',
            description: '√(x²+y²+z²) shown on a 3D cuboid for extension',
            type: '3d_magnitude_extension',
            vector: { x: 2, y: 3, z: 6 },
            defaultOptions: {
                title: '3D Magnitude: √(x²+y²+z²)',
                show3D: true,
                showFormula: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== VECTORS — DIRECTION ==================================
        // ============================================================

        'directionAngleLabelled': {
            name: 'Direction Angle Labelled',
            category: 'Vectors',
            subcategory: 'Direction',
            description: 'Vector in Q1 with angle θ measured anticlockwise from positive x-axis',
            type: 'direction_angle_labelled',
            vector: { x: 4, y: 3 },
            defaultOptions: {
                title: 'Direction Angle θ — Labelled',
                showAngle: true,
                showXAxis: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'arctanRightTriangle': {
            name: 'Arctan Right Triangle',
            category: 'Vectors',
            subcategory: 'Direction',
            description: 'tan(θ) = aᵧ/aₓ shown on the component right triangle',
            type: 'arctan_right_triangle',
            vector: { x: 4, y: 3 },
            defaultOptions: {
                title: 'tan(θ) = aᵧ/aₓ — Right Triangle',
                showFormula: true,
                showTriangle: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'fourQuadrantDirection': {
            name: 'Four Quadrant Direction',
            category: 'Vectors',
            subcategory: 'Direction',
            description: 'One vector in each quadrant with correct direction angle calculated',
            type: 'four_quadrant_direction',
            defaultOptions: {
                title: 'Direction Angles — Four Quadrants',
                showAllQuadrants: true,
                showAngles: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'quadrantAdjustmentTable': {
            name: 'Quadrant Adjustment Table',
            category: 'Vectors',
            subcategory: 'Direction',
            description: 'Visual table: Q1 use direct; Q2/Q3 add 180°; Q4 add 360°',
            type: 'quadrant_adjustment_table',
            defaultOptions: {
                title: 'Quadrant Adjustment — Direction Angle',
                showTable: true,
                showRules: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'bearingVsDirectionAngle': {
            name: 'Bearing vs Direction Angle',
            category: 'Vectors',
            subcategory: 'Direction',
            description: 'Side-by-side: mathematical angle (anticlockwise from east) vs bearing (clockwise from north)',
            type: 'bearing_vs_direction_angle',
            defaultOptions: {
                title: 'Mathematical Angle vs Bearing',
                showSideBySide: true,
                showConvention: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'compassBearingVector': {
            name: 'Compass Bearing Vector',
            category: 'Vectors',
            subcategory: 'Direction',
            description: 'North arrow with bearing angle and displacement vector drawn',
            type: 'compass_bearing_vector',
            bearing: 060,
            distance: 10,
            defaultOptions: {
                title: 'Compass Bearing — Vector',
                showNorth: true,
                showBearing: true,
                showVector: true,
                width: 600,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'unitCircleDirection': {
            name: 'Unit Circle Direction',
            category: 'Vectors',
            subcategory: 'Direction',
            description: 'Unit circle showing direction vectors at key angles: 0°, 30°, 45°, 60°, 90°, etc.',
            type: 'unit_circle_direction',
            defaultOptions: {
                title: 'Unit Circle — Direction Vectors',
                showKeyAngles: true,
                showVectors: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'unitVectorConstruction': {
            name: 'Unit Vector Construction',
            category: 'Vectors',
            subcategory: 'Direction',
            description: 'â = a/|a|: original vector scaled down to length 1',
            type: 'unit_vector_construction',
            vector: { x: 3, y: 4 },
            defaultOptions: {
                title: 'Unit Vector Construction â = a/|a|',
                showOriginal: true,
                showUnitVector: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'direction360Reference': {
            name: 'Direction 360° Reference',
            category: 'Vectors',
            subcategory: 'Direction',
            description: 'Full 360° diagram showing direction angles and equivalent bearings',
            type: 'direction_360_reference',
            defaultOptions: {
                title: 'Direction Angles 0° to 360°',
                showFullCircle: true,
                showAngles: true,
                showBearings: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'magnitudeDirectionDecomposition': {
            name: 'Magnitude Direction Decomposition',
            category: 'Vectors',
            subcategory: 'Direction',
            description: 'Vector = magnitude × unit vector: |a| × â labelled',
            type: 'magnitude_direction_decomposition',
            vector: { x: 3, y: 4 },
            defaultOptions: {
                title: 'Vector = |a| × â Decomposition',
                showDecomposition: true,
                showLabels: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'arctanAmbiguityDiagram': {
            name: 'Arctan Ambiguity Diagram',
            category: 'Vectors',
            subcategory: 'Direction',
            description: 'Why arctan alone fails: two different vectors with same arctan value',
            type: 'arctan_ambiguity_diagram',
            defaultOptions: {
                title: 'Arctan Ambiguity — Same Value, Different Vectors',
                showAmbiguity: true,
                showBothVectors: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'northEastSouthWestVectors': {
            name: 'North East South West Vectors',
            category: 'Vectors',
            subcategory: 'Direction',
            description: 'Cardinal direction unit vectors labelled: (0;1), (1;0), (0;−1), (−1;0)',
            type: 'north_east_south_west_vectors',
            defaultOptions: {
                title: 'Cardinal Direction Unit Vectors',
                showAllFour: true,
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'bearingCalculationWorked': {
            name: 'Bearing Calculation Worked',
            category: 'Vectors',
            subcategory: 'Direction',
            description: 'Step-by-step bearing diagram: vector → direction angle → bearing',
            type: 'bearing_calculation_worked',
            vector: { x: 3, y: -4 },
            defaultOptions: {
                title: 'Bearing Calculation — Worked Steps',
                showSteps: true,
                showAnnotations: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'directionGridCompassOverlay': {
            name: 'Direction Grid Compass Overlay',
            category: 'Vectors',
            subcategory: 'Direction',
            description: 'Grid with compass rose overlay showing how bearings relate to vector components',
            type: 'direction_grid_compass_overlay',
            defaultOptions: {
                title: 'Direction — Grid with Compass Overlay',
                showGrid: true,
                showCompass: true,
                showRelationship: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== VECTORS — PARALLEL VECTORS ===========================
        // ============================================================

        'parallelVectorsSameDirection': {
            name: 'Parallel Vectors Same Direction',
            category: 'Vectors',
            subcategory: 'Parallel Vectors',
            description: 'Two parallel vectors pointing the same way, different lengths',
            type: 'parallel_vectors_same_direction',
            defaultOptions: {
                title: 'Parallel Vectors — Same Direction',
                showBothVectors: true,
                showParallel: true,
                width: 700,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'antiParallelVectors': {
            name: 'Anti-Parallel Vectors',
            category: 'Vectors',
            subcategory: 'Parallel Vectors',
            description: 'Two anti-parallel vectors (k < 0): same line, opposite directions',
            type: 'anti_parallel_vectors',
            defaultOptions: {
                title: 'Anti-Parallel Vectors',
                showOppositeDirections: true,
                showSameLine: true,
                width: 700,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'parallelScalarMultipleDiagram': {
            name: 'Parallel Scalar Multiple Diagram',
            category: 'Vectors',
            subcategory: 'Parallel Vectors',
            description: 'a and ka drawn from same origin for k = 2, ½, −1, −3',
            type: 'parallel_scalar_multiple_diagram',
            vector: { x: 3, y: 1 },
            scalars: [2, 0.5, -1, -3],
            defaultOptions: {
                title: 'Parallel — Scalar Multiples',
                showAllMultiples: true,
                showParallel: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'parallelTestComponents': {
            name: 'Parallel Test Components',
            category: 'Vectors',
            subcategory: 'Parallel Vectors',
            description: 'a₁/b₁ = a₂/b₂ = k shown with a table of ratios',
            type: 'parallel_test_components',
            defaultOptions: {
                title: 'Parallel Test — Component Ratios',
                showRatioTable: true,
                showTest: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'parallelVsNotParallel': {
            name: 'Parallel vs Not Parallel',
            category: 'Vectors',
            subcategory: 'Parallel Vectors',
            description: 'Side-by-side: (4;6) ∥ (2;3) vs (3;2) ∦ (6;5)',
            type: 'parallel_vs_not_parallel',
            defaultOptions: {
                title: 'Parallel vs Non-Parallel Vectors',
                showSideBySide: true,
                showRatios: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'crossProductZeroVisual': {
            name: 'Cross Product Zero Visual',
            category: 'Vectors',
            subcategory: 'Parallel Vectors',
            description: 'a₁b₂ − a₂b₁ = 0 condition shown geometrically',
            type: 'cross_product_zero_visual',
            defaultOptions: {
                title: 'Parallel Condition: a₁b₂ − a₂b₁ = 0',
                showCondition: true,
                showGeometry: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'directionRatioDiagram': {
            name: 'Direction Ratio Diagram',
            category: 'Vectors',
            subcategory: 'Parallel Vectors',
            description: 'Direction ratio a:b for parallel vectors shown as consistent angles',
            type: 'direction_ratio_diagram',
            defaultOptions: {
                title: 'Direction Ratio — Parallel Vectors',
                showRatio: true,
                showAngles: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'parallelLinesSameDirection': {
            name: 'Parallel Lines Same Direction',
            category: 'Vectors',
            subcategory: 'Parallel Vectors',
            description: 'Multiple parallel lines with direction vectors labelled',
            type: 'parallel_lines_same_direction',
            defaultOptions: {
                title: 'Parallel Lines — Direction Vectors',
                showMultipleLines: true,
                showDirectionVectors: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'scalarMultipleGridDiagram': {
            name: 'Scalar Multiple Grid Diagram',
            category: 'Vectors',
            subcategory: 'Parallel Vectors',
            description: 'Grid showing a, 2a, 3a, −a all lying along same line through O',
            type: 'scalar_multiple_grid_diagram',
            vector: { x: 2, y: 1 },
            defaultOptions: {
                title: 'Scalar Multiples — Same Line Through O',
                showGrid: true,
                showLine: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'parallelTrapeziumVectors': {
            name: 'Parallel Trapezium Vectors',
            category: 'Vectors',
            subcategory: 'Parallel Vectors',
            description: 'Trapezium ABCD with parallel sides shown as scalar multiples',
            type: 'parallel_trapezium_vectors',
            defaultOptions: {
                title: 'Trapezium — Parallel Sides as Vectors',
                showScalarMultiple: true,
                showParallelSides: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'findingKParallelDiagram': {
            name: 'Finding k Parallel Diagram',
            category: 'Vectors',
            subcategory: 'Parallel Vectors',
            description: 'Given a and ka: diagram showing how to read off k from component ratios',
            type: 'finding_k_parallel_diagram',
            defaultOptions: {
                title: 'Finding k — Component Ratio Method',
                showRatios: true,
                showSteps: true,
                width: 700,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'antiParallelCollinearLine': {
            name: 'Anti-Parallel Collinear Line',
            category: 'Vectors',
            subcategory: 'Parallel Vectors',
            description: 'Anti-parallel vectors both lying on the same straight line',
            type: 'anti_parallel_collinear_line',
            defaultOptions: {
                title: 'Anti-Parallel Vectors — Same Line',
                showSameLine: true,
                showOppositeArrows: true,
                width: 800,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== VECTORS — COLLINEARITY ================================
        // ============================================================

        'collinearThreePoints': {
            name: 'Collinear Three Points',
            category: 'Vectors',
            subcategory: 'Collinearity',
            description: 'Three points A, B, C clearly on one straight line with vectors AB and AC drawn',
            type: 'collinear_three_points',
            A: { x: 1, y: 1 },
            B: { x: 3, y: 3 },
            C: { x: 5, y: 5 },
            defaultOptions: {
                title: 'Collinear Three Points',
                showVectors: true,
                showLine: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'nonCollinearThreePoints': {
            name: 'Non-Collinear Three Points',
            category: 'Vectors',
            subcategory: 'Collinearity',
            description: 'Three points NOT on a line with vectors AB and AC drawn to show non-parallel',
            type: 'non_collinear_three_points',
            A: { x: 1, y: 1 },
            B: { x: 4, y: 2 },
            C: { x: 2, y: 5 },
            defaultOptions: {
                title: 'Non-Collinear Three Points',
                showVectors: true,
                showNonParallel: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'abParallelAcCommonPoint': {
            name: 'AB Parallel AC Common Point',
            category: 'Vectors',
            subcategory: 'Collinearity',
            description: 'AB and AC from common point A: parallel vectors sharing A → collinear',
            type: 'ab_parallel_ac_common_point',
            defaultOptions: {
                title: 'AB ∥ AC with Common Point A → Collinear',
                showCommonPoint: true,
                showParallel: true,
                showConclusion: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'collinearityProofDiagram': {
            name: 'Collinearity Proof Diagram',
            category: 'Vectors',
            subcategory: 'Collinearity',
            description: 'Full annotated proof diagram: AB = k×AC labelled with k value shown',
            type: 'collinearity_proof_diagram',
            k: 2,
            defaultOptions: {
                title: 'Collinearity Proof Diagram',
                showProof: true,
                showAnnotations: true,
                showK: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'parallelNoCommonPoint': {
            name: 'Parallel No Common Point',
            category: 'Vectors',
            subcategory: 'Collinearity',
            description: 'Parallel vectors on DIFFERENT lines to show this alone is insufficient for collinearity',
            type: 'parallel_no_common_point',
            defaultOptions: {
                title: 'Parallel Without Common Point — Not Collinear',
                showDifferentLines: true,
                showConclusion: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'collinearRatioDivision': {
            name: 'Collinear Ratio Division',
            category: 'Vectors',
            subcategory: 'Collinearity',
            description: 'Collinear A, B, C with B dividing AC in ratio k:(1−k) labelled',
            type: 'collinear_ratio_division',
            k: 0.4,
            defaultOptions: {
                title: 'Collinear — Ratio Division',
                showRatio: true,
                showLabels: true,
                width: 800,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'collinearityGradientConnection': {
            name: 'Collinearity Gradient Connection',
            category: 'Vectors',
            subcategory: 'Collinearity',
            description: 'Collinear points diagram with gradient rise/run matching direction vector ratio',
            type: 'collinearity_gradient_connection',
            defaultOptions: {
                title: 'Collinearity ↔ Equal Gradient',
                showGradient: true,
                showVectorRatio: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'threePointsTestGrid': {
            name: 'Three Points Test Grid',
            category: 'Vectors',
            subcategory: 'Collinearity',
            description: 'Grid with three points: student tests algebraically whether collinear',
            type: 'three_points_test_grid',
            defaultOptions: {
                title: 'Three Points — Collinearity Test',
                showGrid: true,
                showTestMethod: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'collinearExtensionFourthPoint': {
            name: 'Collinear Extension Fourth Point',
            category: 'Vectors',
            subcategory: 'Collinearity',
            description: 'Three collinear points with a fourth test point: is it on the line?',
            type: 'collinear_extension_fourth_point',
            defaultOptions: {
                title: 'Collinear Extension — Fourth Point Test',
                showFourthPoint: true,
                showTest: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'vectorCollinearityFlowchart': {
            name: 'Vector Collinearity Flowchart',
            category: 'Vectors',
            subcategory: 'Collinearity',
            description: 'Decision diagram: find AB and AC → test parallel → check common point → conclude',
            type: 'vector_collinearity_flowchart',
            defaultOptions: {
                title: 'Collinearity — Vector Flowchart',
                showSteps: true,
                showDecisionPoints: true,
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'midpointCollinearSpecialCase': {
            name: 'Midpoint Collinear Special Case',
            category: 'Vectors',
            subcategory: 'Collinearity',
            description: 'Midpoint M of AC: AM = ½AC — special case of collinearity with k = ½',
            type: 'midpoint_collinear_special_case',
            defaultOptions: {
                title: 'Midpoint — Collinear Special Case (k=½)',
                showMidpoint: true,
                showHalfAC: true,
                width: 700,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'collinearityVsCoplanar': {
            name: 'Collinearity vs Coplanar',
            category: 'Vectors',
            subcategory: 'Collinearity',
            description: 'Diagram distinguishing collinear (1D, same line) from coplanar (2D, same plane)',
            type: 'collinearity_vs_coplanar',
            defaultOptions: {
                title: 'Collinear vs Coplanar',
                showDistinction: true,
                showExamples: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'collinearSurveyingDiagram': {
            name: 'Collinear Surveying Diagram',
            category: 'Vectors',
            subcategory: 'Collinearity',
            description: 'Real-world: three survey posts on a boundary line with position vectors',
            type: 'collinear_surveying_diagram',
            defaultOptions: {
                title: 'Collinearity — Surveying Application',
                showPosts: true,
                showPositionVectors: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'sectionPointCollinearity': {
            name: 'Section Point Collinearity',
            category: 'Vectors',
            subcategory: 'Collinearity',
            description: 'Point dividing segment in given ratio confirmed as collinear by vector proof',
            type: 'section_point_collinearity',
            m: 2,
            n: 3,
            defaultOptions: {
                title: 'Section Point — Collinearity Proof',
                showRatioDivision: true,
                showProof: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== VECTORS — GEOMETRY PROOFS ============================
        // ============================================================

        'midpointTheoremVectorProof': {
            name: 'Midpoint Theorem Vector Proof',
            category: 'Vectors',
            subcategory: 'Vector Geometry Proofs',
            description: 'Triangle OAB: midpoints M of OA and N of OB; MN = ½AB proved',
            type: 'midpoint_theorem_vector_proof',
            defaultOptions: {
                title: 'Midpoint Theorem — Vector Proof',
                showProof: true,
                showMidpoints: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'parallelogramDiagonalsProof': {
            name: 'Parallelogram Diagonals Proof',
            category: 'Vectors',
            subcategory: 'Vector Geometry Proofs',
            description: 'OABC: diagonals OB and AC shown bisecting each other at ½(a+c)',
            type: 'parallelogram_diagonals_proof',
            defaultOptions: {
                title: 'Parallelogram Diagonals — Vector Proof',
                showProof: true,
                showMidpoint: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'centroidTriangleProof': {
            name: 'Centroid Triangle Proof',
            category: 'Vectors',
            subcategory: 'Vector Geometry Proofs',
            description: 'Triangle with all three medians meeting at G = ⅓(a+b+c)',
            type: 'centroid_triangle_proof',
            defaultOptions: {
                title: 'Triangle Centroid — Vector Proof',
                showMedians: true,
                showCentroid: true,
                showFormula: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'varignonTheoremDiagram': {
            name: 'Varignon Theorem Diagram',
            category: 'Vectors',
            subcategory: 'Vector Geometry Proofs',
            description: 'Quadrilateral ABCD with midpoints of sides forming a parallelogram',
            type: 'varignon_theorem_diagram',
            defaultOptions: {
                title: "Varignon's Theorem — Midpoint Parallelogram",
                showMidpoints: true,
                showParallelogram: true,
                showProof: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'vectorProofAnnotationGuide': {
            name: 'Vector Proof Annotation Guide',
            category: 'Vectors',
            subcategory: 'Vector Geometry Proofs',
            description: 'Annotated template showing how to set up a vector geometry proof',
            type: 'vector_proof_annotation_guide',
            defaultOptions: {
                title: 'Vector Proof — Annotation Guide',
                showTemplate: true,
                showAnnotations: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'triangleLawProofTemplate': {
            name: 'Triangle Law Proof Template',
            category: 'Vectors',
            subcategory: 'Vector Geometry Proofs',
            description: 'General triangle OAB used as template for vector proofs',
            type: 'triangle_law_proof_template',
            defaultOptions: {
                title: 'Triangle OAB — Proof Template',
                showTemplate: true,
                showLabels: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== VECTORS — OPERATIONS SUMMARY ========================
        // ============================================================

        'vectorOperationsOverview': {
            name: 'Vector Operations Overview',
            category: 'Vectors',
            subcategory: 'Vector Operations Summary',
            description: 'One-page summary diagram: all 8 operations shown in small panels',
            type: 'vector_operations_overview',
            defaultOptions: {
                title: 'Vector Operations — Overview',
                showAllOperations: true,
                width: 900,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'additionSubtractionComparison': {
            name: 'Addition Subtraction Comparison',
            category: 'Vectors',
            subcategory: 'Vector Operations Summary',
            description: 'a+b and a−b from same vectors side by side',
            type: 'addition_subtraction_comparison',
            vectorA: { x: 4, y: 1 },
            vectorB: { x: 1, y: 3 },
            defaultOptions: {
                title: 'a+b vs a−b Side by Side',
                showSideBySide: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'scalarMultiplicationSummary': {
            name: 'Scalar Multiplication Summary',
            category: 'Vectors',
            subcategory: 'Vector Operations Summary',
            description: 'k values: 2, 1, ½, 0, −½, −1, −2 applied to same vector',
            type: 'scalar_multiplication_summary',
            vector: { x: 3, y: 1 },
            defaultOptions: {
                title: 'Scalar Multiplication — All k Values',
                showAllValues: true,
                showEffects: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'magnitudeDirectionSummary': {
            name: 'Magnitude Direction Summary',
            category: 'Vectors',
            subcategory: 'Vector Operations Summary',
            description: 'Vector decomposed: magnitude labelled, direction angle labelled, unit vector shown',
            type: 'magnitude_direction_summary',
            vector: { x: 3, y: 4 },
            defaultOptions: {
                title: 'Magnitude, Direction, Unit Vector — Summary',
                showAllLabels: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'parallelCollinearConnection': {
            name: 'Parallel Collinear Connection',
            category: 'Vectors',
            subcategory: 'Vector Operations Summary',
            description: 'Parallel vectors (scalar multiples) → add common point → collinearity',
            type: 'parallel_collinear_connection',
            defaultOptions: {
                title: 'Parallel → Common Point → Collinear',
                showConnection: true,
                showArrows: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'positionDisplacementContrast': {
            name: 'Position Displacement Contrast',
            category: 'Vectors',
            subcategory: 'Vector Operations Summary',
            description: 'Position vector (from O) vs displacement vector (free) side by side',
            type: 'position_displacement_contrast',
            defaultOptions: {
                title: 'Position vs Displacement — Contrast',
                showSideBySide: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'vectorComponentsFullDiagram': {
            name: 'Vector Components Full Diagram',
            category: 'Vectors',
            subcategory: 'Vector Operations Summary',
            description: 'Complete labelled diagram: vector with components, magnitude, direction angle, unit vector all shown',
            type: 'vector_components_full_diagram',
            vector: { x: 4, y: 3 },
            defaultOptions: {
                title: 'Vector — Complete Labelled Diagram',
                showComponents: true,
                showMagnitude: true,
                showAngle: true,
                showUnitVector: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== VECTORS — REAL WORLD =================================
        // ============================================================

        'displacementVelocityForce': {
            name: 'Displacement Velocity Force',
            category: 'Vectors',
            subcategory: 'Vector Real World',
            description: 'Physics: displacement, velocity, force each shown as vectors with arrows',
            type: 'displacement_velocity_force',
            defaultOptions: {
                title: 'Displacement, Velocity, Force — Vectors',
                showAllThree: true,
                showContext: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'navigationDisplacementVectors': {
            name: 'Navigation Displacement Vectors',
            category: 'Vectors',
            subcategory: 'Vector Real World',
            description: 'Map with vector route: several legs added tip-to-tail to resultant',
            type: 'navigation_displacement_vectors',
            defaultOptions: {
                title: 'Navigation — Displacement Vectors',
                showRoute: true,
                showResultant: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'relativeVelocityDiagram': {
            name: 'Relative Velocity Diagram',
            category: 'Vectors',
            subcategory: 'Vector Real World',
            description: 'Two moving objects with velocity vectors; relative velocity shown',
            type: 'relative_velocity_diagram',
            defaultOptions: {
                title: 'Relative Velocity — Vector Diagram',
                showBothVelocities: true,
                showRelativeVelocity: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'forceParallelogramPhysics': {
            name: 'Force Parallelogram Physics',
            category: 'Vectors',
            subcategory: 'Vector Real World',
            description: 'Two forces on a particle combined by parallelogram law',
            type: 'force_parallelogram_physics',
            force1: { x: 3, y: 0 },
            force2: { x: 0, y: 4 },
            defaultOptions: {
                title: 'Force Parallelogram Law',
                showForces: true,
                showResultant: true,
                showParallelogram: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'gpsPositionVectorMap': {
            name: 'GPS Position Vector Map',
            category: 'Vectors',
            subcategory: 'Vector Real World',
            description: 'Map with origin and position vectors to several landmarks',
            type: 'gps_position_vector_map',
            defaultOptions: {
                title: 'GPS — Position Vectors on Map',
                showMap: true,
                showPositionVectors: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'riverCrossingVector': {
            name: 'River Crossing Vector',
            category: 'Vectors',
            subcategory: 'Vector Real World',
            description: 'River current vector + swimmer velocity vector = actual displacement vector',
            type: 'river_crossing_vector',
            currentVelocity: { x: 2, y: 0 },
            swimVelocity: { x: 0, y: 3 },
            defaultOptions: {
                title: 'River Crossing — Vector Addition',
                showRiver: true,
                showVectors: true,
                showResultant: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'projectileComponentsDiagram': {
            name: 'Projectile Components Diagram',
            category: 'Vectors',
            subcategory: 'Vector Real World',
            description: 'Projectile with horizontal and vertical velocity components labelled',
            type: 'projectile_components_diagram',
            launchVelocity: 20,
            angle: 45,
            defaultOptions: {
                title: 'Projectile — Velocity Components',
                showComponents: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'windVelocityResultant': {
            name: 'Wind Velocity Resultant',
            category: 'Vectors',
            subcategory: 'Vector Real World',
            description: 'Aircraft velocity + wind velocity = resultant ground velocity',
            type: 'wind_velocity_resultant',
            aircraftVelocity: { x: 200, y: 0 },
            windVelocity: { x: 30, y: 40 },
            defaultOptions: {
                title: 'Aircraft — Wind Velocity Resultant',
                showAircraft: true,
                showWind: true,
                showResultant: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== GRAPHING FUNCTIONS — FUNCTION NOTATION ===============
        // ============================================================

        'functionMachineSingle': {
            name: 'Function Machine Single',
            category: 'Graphing Functions',
            subcategory: 'Function Notation',
            description: 'Box diagram: input → [rule] → output',
            type: 'function_machine_single',
            defaultOptions: {
                title: 'Function Machine',
                showInput: true,
                showRule: true,
                showOutput: true,
                width: 700,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'functionMachineLabelled': {
            name: 'Function Machine Labelled',
            category: 'Graphing Functions',
            subcategory: 'Function Notation',
            description: 'Function machine with f, x, f(x) labels annotated',
            type: 'function_machine_labelled',
            defaultOptions: {
                title: 'Function Machine — f, x, f(x) Labelled',
                showLabels: true,
                showAnnotations: true,
                width: 700,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'mappingDiagramFunction': {
            name: 'Mapping Diagram Function',
            category: 'Graphing Functions',
            subcategory: 'Function Notation',
            description: 'Arrow diagram: domain elements → range elements (valid function)',
            type: 'mapping_diagram_function',
            defaultOptions: {
                title: 'Mapping Diagram — Valid Function',
                showDomain: true,
                showRange: true,
                showArrows: true,
                width: 700,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'mappingDiagramNotFunction': {
            name: 'Mapping Diagram Not Function',
            category: 'Graphing Functions',
            subcategory: 'Function Notation',
            description: 'Arrow diagram: one input → two outputs (relation, not function)',
            type: 'mapping_diagram_not_function',
            defaultOptions: {
                title: 'Mapping Diagram — Not a Function',
                showOneTwoMapping: true,
                showCross: true,
                width: 700,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'verticalLineTestPass': {
            name: 'Vertical Line Test Pass',
            category: 'Graphing Functions',
            subcategory: 'Function Notation',
            description: 'Graph with vertical line crossing curve once — passes VLT',
            type: 'vertical_line_test_pass',
            defaultOptions: {
                title: 'Vertical Line Test — Pass (Function)',
                showCurve: true,
                showLine: true,
                showOneIntersection: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'verticalLineTestFail': {
            name: 'Vertical Line Test Fail',
            category: 'Graphing Functions',
            subcategory: 'Function Notation',
            description: 'Graph with vertical line crossing curve twice — fails VLT',
            type: 'vertical_line_test_fail',
            defaultOptions: {
                title: 'Vertical Line Test — Fail (Not Function)',
                showCurve: true,
                showLine: true,
                showTwoIntersections: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'functionRepresentationsFour': {
            name: 'Function Representations Four',
            category: 'Graphing Functions',
            subcategory: 'Function Notation',
            description: 'Four-panel: equation / table / graph / mapping side by side',
            type: 'function_representations_four',
            defaultOptions: {
                title: 'Four Representations of a Function',
                showAllFour: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'orderedPairsCoordinatePlot': {
            name: 'Ordered Pairs Coordinate Plot',
            category: 'Graphing Functions',
            subcategory: 'Function Notation',
            description: 'Set of (x,y) pairs plotted on axes',
            type: 'ordered_pairs_coordinate_plot',
            defaultOptions: {
                title: 'Ordered Pairs — Coordinate Plot',
                showPoints: true,
                showGrid: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'functionEvaluationSubstitution': {
            name: 'Function Evaluation Substitution',
            category: 'Graphing Functions',
            subcategory: 'Function Notation',
            description: 'Annotated algebraic substitution: f(3) = 2(3)+1 = 7',
            type: 'function_evaluation_substitution',
            defaultOptions: {
                title: 'Function Evaluation — Substitution',
                showAnnotations: true,
                showSteps: true,
                width: 700,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'inputOutputTable': {
            name: 'Input Output Table',
            category: 'Graphing Functions',
            subcategory: 'Function Notation',
            description: 'Two-column table with x and f(x) values',
            type: 'input_output_table',
            defaultOptions: {
                title: 'Input-Output Table',
                showXColumn: true,
                showFxColumn: true,
                width: 600,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'compositeMachineChain': {
            name: 'Composite Machine Chain',
            category: 'Graphing Functions',
            subcategory: 'Function Notation',
            description: 'Two function machines connected: x→[g]→g(x)→[f]→f(g(x))',
            type: 'composite_machine_chain',
            defaultOptions: {
                title: 'Composite Function Machine Chain',
                showTwoMachines: true,
                showLabels: true,
                width: 900,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== GRAPHING FUNCTIONS — DOMAIN AND RANGE ================
        // ============================================================

        'domainRangeAxesProjection': {
            name: 'Domain Range Axes Projection',
            category: 'Graphing Functions',
            subcategory: 'Domain and Range',
            description: 'Graph with horizontal projection to y-axis (range) and vertical to x-axis (domain)',
            type: 'domain_range_axes_projection',
            defaultOptions: {
                title: 'Domain and Range — Axes Projection',
                showXProjection: true,
                showYProjection: true,
                showGraph: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'domainRangeNumberLineInterval': {
            name: 'Domain Range Number Line Interval',
            category: 'Graphing Functions',
            subcategory: 'Domain and Range',
            description: 'Number line showing domain interval with open/closed endpoints',
            type: 'domain_range_number_line_interval',
            defaultOptions: {
                title: 'Domain — Number Line Interval',
                showNumberLine: true,
                showEndpoints: true,
                width: 800,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'domainRestrictionSquareRoot': {
            name: 'Domain Restriction Square Root',
            category: 'Graphing Functions',
            subcategory: 'Domain and Range',
            description: '√(x−a): shaded valid region on x-axis with radicand ≥ 0',
            type: 'domain_restriction_square_root',
            a: 2,
            defaultOptions: {
                title: 'Domain — Square Root Restriction',
                showDomainRegion: true,
                showNumberLine: true,
                width: 800,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'domainRestrictionDenominator': {
            name: 'Domain Restriction Denominator',
            category: 'Graphing Functions',
            subcategory: 'Domain and Range',
            description: '1/(x−a): x-axis with hole/gap at excluded value',
            type: 'domain_restriction_denominator',
            a: 3,
            defaultOptions: {
                title: 'Domain — Denominator Restriction',
                showExcludedValue: true,
                showNumberLine: true,
                width: 800,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'domainRestrictionLogarithm': {
            name: 'Domain Restriction Logarithm',
            category: 'Graphing Functions',
            subcategory: 'Domain and Range',
            description: 'log(x−a): x-axis with x > a region shaded',
            type: 'domain_restriction_logarithm',
            a: 1,
            defaultOptions: {
                title: 'Domain — Logarithm Restriction',
                showShadedRegion: true,
                showNumberLine: true,
                width: 800,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'domainCombinedRestrictions': {
            name: 'Domain Combined Restrictions',
            category: 'Graphing Functions',
            subcategory: 'Domain and Range',
            description: 'Number line showing intersection of multiple restrictions',
            type: 'domain_combined_restrictions',
            defaultOptions: {
                title: 'Domain — Combined Restrictions',
                showEachRestriction: true,
                showIntersection: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'intervalNotationVisualGuide': {
            name: 'Interval Notation Visual Guide',
            category: 'Graphing Functions',
            subcategory: 'Domain and Range',
            description: 'Reference diagram: [a,b], (a,b), [a,∞), (−∞,b] with visual examples',
            type: 'interval_notation_visual_guide',
            defaultOptions: {
                title: 'Interval Notation — Visual Guide',
                showAllTypes: true,
                showExamples: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rangeQuadraticVertex': {
            name: 'Range Quadratic Vertex',
            category: 'Graphing Functions',
            subcategory: 'Domain and Range',
            description: 'Parabola with vertex labelled; range annotated on y-axis',
            type: 'range_quadratic_vertex',
            a: 1,
            h: 0,
            k: -4,
            defaultOptions: {
                title: 'Range — Quadratic (Vertex Form)',
                showVertex: true,
                showRange: true,
                showGraph: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rangeRationalHorizontalAsymptote': {
            name: 'Range Rational Horizontal Asymptote',
            category: 'Graphing Functions',
            subcategory: 'Domain and Range',
            description: 'Rational function with HA; excluded range value marked on y-axis',
            type: 'range_rational_horizontal_asymptote',
            defaultOptions: {
                title: 'Range — Rational Function (HA)',
                showHA: true,
                showExcludedValue: true,
                showGraph: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rangeSquareRootFunction': {
            name: 'Range Square Root Function',
            category: 'Graphing Functions',
            subcategory: 'Domain and Range',
            description: '√x graph with range [0,∞) projected onto y-axis',
            type: 'range_square_root_function',
            defaultOptions: {
                title: 'Range — Square Root Function [0,∞)',
                showGraph: true,
                showRange: true,
                showProjection: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'domainRangeCommonFunctionsTable': {
            name: 'Domain Range Common Functions Table',
            category: 'Graphing Functions',
            subcategory: 'Domain and Range',
            description: 'Reference table: 8 parent functions with domain and range listed',
            type: 'domain_range_common_functions_table',
            defaultOptions: {
                title: 'Domain and Range — Common Functions',
                showTable: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'vennDomainCodomainRange': {
            name: 'Venn Domain Codomain Range',
            category: 'Graphing Functions',
            subcategory: 'Domain and Range',
            description: 'Venn-style: domain set → function arrow → codomain with range highlighted',
            type: 'venn_domain_codomain_range',
            defaultOptions: {
                title: 'Domain, Codomain, Range — Venn Diagram',
                showVenn: true,
                showArrow: true,
                showRange: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== GRAPHING FUNCTIONS — INTERCEPTS ======================
        // ============================================================

        'xInterceptYInterceptLabelled': {
            name: 'X-Intercept Y-Intercept Labelled',
            category: 'Graphing Functions',
            subcategory: 'Intercepts',
            description: 'Curve crossing both axes with intercepts clearly labelled',
            type: 'x_intercept_y_intercept_labelled',
            defaultOptions: {
                title: 'X-Intercept and Y-Intercept Labelled',
                showBothIntercepts: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'yInterceptSubstitutionX0': {
            name: 'Y-Intercept Substitution x = 0',
            category: 'Graphing Functions',
            subcategory: 'Intercepts',
            description: 'Annotated: x=0 substituted, f(0) evaluated, point (0,f(0)) marked',
            type: 'y_intercept_substitution_x0',
            defaultOptions: {
                title: 'Y-Intercept: Substitute x = 0',
                showSubstitution: true,
                showPoint: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'xInterceptSolvingFx0': {
            name: 'X-Intercept Solving f(x) = 0',
            category: 'Graphing Functions',
            subcategory: 'Intercepts',
            description: 'Annotated: f(x)=0 set up, solved, roots marked on x-axis',
            type: 'x_intercept_solving_fx0',
            defaultOptions: {
                title: 'X-Intercept: Solve f(x) = 0',
                showEquation: true,
                showRoots: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'multiplicityOddCrossing': {
            name: 'Multiplicity Odd Crossing',
            category: 'Graphing Functions',
            subcategory: 'Intercepts',
            description: 'Graph crossing x-axis at simple root (multiplicity 1 and 3)',
            type: 'multiplicity_odd_crossing',
            defaultOptions: {
                title: 'Odd Multiplicity — Crossing',
                showCrossing: true,
                showMultiplicity: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'multiplicityEvenTouching': {
            name: 'Multiplicity Even Touching',
            category: 'Graphing Functions',
            subcategory: 'Intercepts',
            description: 'Graph touching/bouncing at x-axis (multiplicity 2 and 4)',
            type: 'multiplicity_even_touching',
            defaultOptions: {
                title: 'Even Multiplicity — Touching/Bouncing',
                showTouching: true,
                showMultiplicity: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'multiplicityComparisonPanel': {
            name: 'Multiplicity Comparison Panel',
            category: 'Graphing Functions',
            subcategory: 'Intercepts',
            description: 'Side-by-side: mult 1 (cross), mult 2 (touch), mult 3 (cross with flatten)',
            type: 'multiplicity_comparison_panel',
            defaultOptions: {
                title: 'Multiplicity 1, 2, 3 — Comparison',
                showThreePanels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'polynomialInterceptsFullSketch': {
            name: 'Polynomial Intercepts Full Sketch',
            category: 'Graphing Functions',
            subcategory: 'Intercepts',
            description: 'Complete polynomial with all intercepts, roots, and y-intercept marked',
            type: 'polynomial_intercepts_full_sketch',
            defaultOptions: {
                title: 'Polynomial — Full Intercepts Sketch',
                showAllIntercepts: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'quadraticInterceptsCases': {
            name: 'Quadratic Intercepts Cases',
            category: 'Graphing Functions',
            subcategory: 'Intercepts',
            description: 'Three cases: two x-intercepts / one (double root) / no real intercepts',
            type: 'quadratic_intercepts_cases',
            defaultOptions: {
                title: 'Quadratic — Three Intercept Cases',
                showAllThree: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'fundamentalTheoremRootsDegree': {
            name: 'Fundamental Theorem Roots Degree',
            category: 'Graphing Functions',
            subcategory: 'Intercepts',
            description: 'Degree-n polynomial: n roots shown (including complex pairs annotation)',
            type: 'fundamental_theorem_roots_degree',
            defaultOptions: {
                title: 'Fundamental Theorem — Roots = Degree',
                showRootCount: true,
                showComplexAnnotation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'interceptSignChangeTable': {
            name: 'Intercept Sign Change Table',
            category: 'Graphing Functions',
            subcategory: 'Intercepts',
            description: 'Table showing f(x) sign changes around each root',
            type: 'intercept_sign_change_table',
            defaultOptions: {
                title: 'Sign Change Table — Around Roots',
                showTable: true,
                showSignChanges: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== GRAPHING FUNCTIONS — ASYMPTOTES ======================
        // ============================================================

        'verticalAsymptoteLabelled': {
            name: 'Vertical Asymptote Labelled',
            category: 'Graphing Functions',
            subcategory: 'Asymptotes',
            description: 'Curve approaching VA from both sides; x=a dashed line labelled',
            type: 'vertical_asymptote_labelled',
            a: 2,
            defaultOptions: {
                title: 'Vertical Asymptote x = a',
                showDashedLine: true,
                showApproach: true,
                showLabel: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'horizontalAsymptoteLabelled': {
            name: 'Horizontal Asymptote Labelled',
            category: 'Graphing Functions',
            subcategory: 'Asymptotes',
            description: 'Curve approaching HA at both ends; y=b dashed line labelled',
            type: 'horizontal_asymptote_labelled',
            b: 3,
            defaultOptions: {
                title: 'Horizontal Asymptote y = b',
                showDashedLine: true,
                showEndBehaviour: true,
                showLabel: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'obliqueAsymptoteLabelled': {
            name: 'Oblique Asymptote Labelled',
            category: 'Graphing Functions',
            subcategory: 'Asymptotes',
            description: 'Curve approaching slanted OA; y=mx+b dashed line labelled',
            type: 'oblique_asymptote_labelled',
            gradient: 1,
            yIntercept: 2,
            defaultOptions: {
                title: 'Oblique Asymptote y = mx + b',
                showDashedLine: true,
                showApproach: true,
                showLabel: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'allThreeAsymptotesCombined': {
            name: 'All Three Asymptotes Combined',
            category: 'Graphing Functions',
            subcategory: 'Asymptotes',
            description: 'Single diagram showing VA, HA, and OA on one rational function',
            type: 'all_three_asymptotes_combined',
            defaultOptions: {
                title: 'VA, HA, and OA — Combined Diagram',
                showAllThree: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'asymptoteVsHoleComparison': {
            name: 'Asymptote vs Hole Comparison',
            category: 'Graphing Functions',
            subcategory: 'Asymptotes',
            description: 'Side-by-side: VA (blow-up) vs removable discontinuity (hole with circle)',
            type: 'asymptote_vs_hole_comparison',
            defaultOptions: {
                title: 'Vertical Asymptote vs Hole',
                showSideBySide: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rationalFunctionBranchRegions': {
            name: 'Rational Function Branch Regions',
            category: 'Graphing Functions',
            subcategory: 'Asymptotes',
            description: 'VA divides plane into vertical strips; branches in each region drawn',
            type: 'rational_function_branch_regions',
            defaultOptions: {
                title: 'Rational Function — Branch Regions',
                showRegions: true,
                showBranches: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'horizontalAsymptoteDegreeCases': {
            name: 'Horizontal Asymptote Degree Cases',
            category: 'Graphing Functions',
            subcategory: 'Asymptotes',
            description: 'Three-panel: deg(n)<deg(d), deg(n)=deg(d), deg(n)>deg(d)',
            type: 'horizontal_asymptote_degree_cases',
            defaultOptions: {
                title: 'HA — Three Degree Cases',
                showThreePanels: true,
                showCases: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'endBehaviourArrowsDiagram': {
            name: 'End Behaviour Arrows Diagram',
            category: 'Graphing Functions',
            subcategory: 'Asymptotes',
            description: 'Graph with directional arrows showing behaviour as x→±∞',
            type: 'end_behaviour_arrows_diagram',
            defaultOptions: {
                title: 'End Behaviour — Directional Arrows',
                showArrows: true,
                showGraph: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'obliqueAsymptoteLongDivision': {
            name: 'Oblique Asymptote Long Division',
            category: 'Graphing Functions',
            subcategory: 'Asymptotes',
            description: 'Annotated polynomial long division with OA identified from quotient',
            type: 'oblique_asymptote_long_division',
            defaultOptions: {
                title: 'OA — Long Division Method',
                showDivision: true,
                showQuotient: true,
                showAnnotations: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'curveCrossingHorizontalAsymptote': {
            name: 'Curve Crossing Horizontal Asymptote',
            category: 'Graphing Functions',
            subcategory: 'Asymptotes',
            description: 'Rational function crossing its own HA in the middle of its domain',
            type: 'curve_crossing_horizontal_asymptote',
            defaultOptions: {
                title: 'Curve Crossing Horizontal Asymptote',
                showCrossing: true,
                showAsymptote: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'exponentialHorizontalAsymptote': {
            name: 'Exponential Horizontal Asymptote',
            category: 'Graphing Functions',
            subcategory: 'Asymptotes',
            description: 'eˣ graph with y=0 HA; e⁻ˣ graph with y=0 HA',
            type: 'exponential_horizontal_asymptote',
            defaultOptions: {
                title: 'Exponential — Horizontal Asymptote y = 0',
                showBothGraphs: true,
                showHA: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'logarithmVerticalAsymptote': {
            name: 'Logarithm Vertical Asymptote',
            category: 'Graphing Functions',
            subcategory: 'Asymptotes',
            description: 'ln(x) graph with x=0 VA clearly labelled',
            type: 'logarithm_vertical_asymptote',
            defaultOptions: {
                title: 'Logarithm — Vertical Asymptote x = 0',
                showGraph: true,
                showVA: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== GRAPHING FUNCTIONS — PIECEWISE FUNCTIONS =============
        // ============================================================

        'piecewiseGraphTwoPieces': {
            name: 'Piecewise Graph Two Pieces',
            category: 'Graphing Functions',
            subcategory: 'Piecewise Functions',
            description: 'Two-piece graph with open/closed circles at breakpoint',
            type: 'piecewise_graph_two_pieces',
            defaultOptions: {
                title: 'Piecewise Function — Two Pieces',
                showBreakpoint: true,
                showOpenClosed: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'piecewiseGraphThreePieces': {
            name: 'Piecewise Graph Three Pieces',
            category: 'Graphing Functions',
            subcategory: 'Piecewise Functions',
            description: 'Three-piece graph with two breakpoints annotated',
            type: 'piecewise_graph_three_pieces',
            defaultOptions: {
                title: 'Piecewise Function — Three Pieces',
                showTwoBreakpoints: true,
                showAnnotations: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'openClosedCircleLegend': {
            name: 'Open Closed Circle Legend',
            category: 'Graphing Functions',
            subcategory: 'Piecewise Functions',
            description: 'Reference: open circle = excluded endpoint; closed = included',
            type: 'open_closed_circle_legend',
            defaultOptions: {
                title: 'Open/Closed Circle Legend',
                showLegend: true,
                showExamples: true,
                width: 700,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'piecewiseContinuousExample': {
            name: 'Piecewise Continuous Example',
            category: 'Graphing Functions',
            subcategory: 'Piecewise Functions',
            description: 'Graph where pieces connect smoothly (continuous at breakpoint)',
            type: 'piecewise_continuous_example',
            defaultOptions: {
                title: 'Piecewise — Continuous at Breakpoint',
                showContinuity: true,
                showConnection: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'piecewiseJumpDiscontinuity': {
            name: 'Piecewise Jump Discontinuity',
            category: 'Graphing Functions',
            subcategory: 'Piecewise Functions',
            description: 'Graph with visible jump at breakpoint; both one-sided limits shown',
            type: 'piecewise_jump_discontinuity',
            defaultOptions: {
                title: 'Piecewise — Jump Discontinuity',
                showJump: true,
                showOneSidedLimits: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'piecewiseRemovableDiscontinuity': {
            name: 'Piecewise Removable Discontinuity',
            category: 'Graphing Functions',
            subcategory: 'Piecewise Functions',
            description: 'Graph with hole at breakpoint (removable)',
            type: 'piecewise_removable_discontinuity',
            defaultOptions: {
                title: 'Piecewise — Removable Discontinuity',
                showHole: true,
                showOpenCircle: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'absoluteValueVShape': {
            name: 'Absolute Value V-Shape',
            category: 'Graphing Functions',
            subcategory: 'Piecewise Functions',
            description: '|x| V-shape with vertex at origin; slopes ±1 labelled',
            type: 'absolute_value_v_shape',
            defaultOptions: {
                title: '|x| — V-Shape Graph',
                showVertex: true,
                showSlopes: true,
                showGrid: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'absoluteValueTransformed': {
            name: 'Absolute Value Transformed',
            category: 'Graphing Functions',
            subcategory: 'Piecewise Functions',
            description: 'a|x−h|+k with vertex (h,k), opening direction, and arm slopes',
            type: 'absolute_value_transformed',
            a: 2,
            h: 1,
            k: -3,
            defaultOptions: {
                title: 'Absolute Value Transformed a|x−h|+k',
                showVertex: true,
                showTransformation: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'absoluteValuePiecewiseSplit': {
            name: 'Absolute Value Piecewise Split',
            category: 'Graphing Functions',
            subcategory: 'Piecewise Functions',
            description: '|2x−4| written as piecewise with two regions shaded and labelled',
            type: 'absolute_value_piecewise_split',
            defaultOptions: {
                title: 'Absolute Value — Piecewise Split',
                showTwoRegions: true,
                showPiecewiseForm: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'floorFunctionStepGraph': {
            name: 'Floor Function Step Graph',
            category: 'Graphing Functions',
            subcategory: 'Piecewise Functions',
            description: '⌊x⌋ step function graph with open/closed endpoints at each step',
            type: 'floor_function_step_graph',
            defaultOptions: {
                title: 'Floor Function ⌊x⌋ — Step Graph',
                showSteps: true,
                showOpenClosed: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'ceilingFunctionStepGraph': {
            name: 'Ceiling Function Step Graph',
            category: 'Graphing Functions',
            subcategory: 'Piecewise Functions',
            description: '⌈x⌉ step function graph',
            type: 'ceiling_function_step_graph',
            defaultOptions: {
                title: 'Ceiling Function ⌈x⌉ — Step Graph',
                showSteps: true,
                showOpenClosed: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'piecewiseContinuityTestDiagram': {
            name: 'Piecewise Continuity Test Diagram',
            category: 'Graphing Functions',
            subcategory: 'Piecewise Functions',
            description: 'Left-limit / right-limit / function-value comparison at breakpoint',
            type: 'piecewise_continuity_test_diagram',
            defaultOptions: {
                title: 'Piecewise Continuity Test',
                showLimits: true,
                showComparison: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'realWorldPiecewiseTaxGraph': {
            name: 'Real World Piecewise Tax Graph',
            category: 'Graphing Functions',
            subcategory: 'Piecewise Functions',
            description: 'Tax bracket piecewise function plotted with breakpoints annotated',
            type: 'real_world_piecewise_tax_graph',
            defaultOptions: {
                title: 'Tax Bracket — Piecewise Function',
                showBrackets: true,
                showBreakpoints: true,
                showGraph: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== GRAPHING FUNCTIONS — COMPOSITE FUNCTIONS =============
        // ============================================================

        'compositeMachineTwoStep': {
            name: 'Composite Machine Two Step',
            category: 'Graphing Functions',
            subcategory: 'Composite Functions',
            description: 'x → [g] → g(x) → [f] → f(g(x)): full labelled machine chain',
            type: 'composite_machine_two_step',
            defaultOptions: {
                title: 'Composite Functions — Two-Step Machine',
                showTwoMachines: true,
                showLabels: true,
                width: 900,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'compositionArrowDiagram': {
            name: 'Composition Arrow Diagram',
            category: 'Graphing Functions',
            subcategory: 'Composite Functions',
            description: 'Three sets A→B→C: x maps to g(x) maps to f(g(x))',
            type: 'composition_arrow_diagram',
            defaultOptions: {
                title: 'Composition — Three Set Arrow Diagram',
                showThreeSets: true,
                showMappings: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'fogVsGofComparison': {
            name: 'f∘g vs g∘f Comparison',
            category: 'Graphing Functions',
            subcategory: 'Composite Functions',
            description: 'Side-by-side: (f∘g)(x) and (g∘f)(x) showing different results',
            type: 'fog_vs_gof_comparison',
            defaultOptions: {
                title: '(f∘g)(x) vs (g∘f)(x) — Comparison',
                showSideBySide: true,
                showDifference: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'compositionNonCommutativeNumeric': {
            name: 'Composition Non-Commutative Numeric',
            category: 'Graphing Functions',
            subcategory: 'Composite Functions',
            description: 'Numerical example: (f∘g)(3) ≠ (g∘f)(3) with values annotated',
            type: 'composition_non_commutative_numeric',
            defaultOptions: {
                title: 'Composition Non-Commutative — Numeric',
                showValues: true,
                showAnnotations: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'domainOfCompositeDiagram': {
            name: 'Domain of Composite Diagram',
            category: 'Graphing Functions',
            subcategory: 'Composite Functions',
            description: 'Venn diagram showing Dom(g), image g(x), Dom(f); valid composite region',
            type: 'domain_of_composite_diagram',
            defaultOptions: {
                title: 'Domain of Composite Function',
                showVenn: true,
                showValidRegion: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'decompositionInnerOuterLabels': {
            name: 'Decomposition Inner Outer Labels',
            category: 'Graphing Functions',
            subcategory: 'Composite Functions',
            description: 'Complex function h(x) = f(g(x)) with inner/outer clearly colour-coded',
            type: 'decomposition_inner_outer_labels',
            defaultOptions: {
                title: 'Decomposition — Inner/Outer Functions',
                showColourCode: true,
                showLabels: true,
                width: 700,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'compositionEvaluationSteps': {
            name: 'Composition Evaluation Steps',
            category: 'Graphing Functions',
            subcategory: 'Composite Functions',
            description: 'Step-by-step annotated evaluation: find g(x) first, then apply f',
            type: 'composition_evaluation_steps',
            defaultOptions: {
                title: 'Composition Evaluation — Steps',
                showSteps: true,
                showAnnotations: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'tripleCompositionChain': {
            name: 'Triple Composition Chain',
            category: 'Graphing Functions',
            subcategory: 'Composite Functions',
            description: 'Three-machine chain: x→[h]→h(x)→[g]→g(h(x))→[f]→f(g(h(x)))',
            type: 'triple_composition_chain',
            defaultOptions: {
                title: 'Triple Composition — Machine Chain',
                showThreeMachines: true,
                showLabels: true,
                width: 900,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'compos
