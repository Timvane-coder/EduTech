Here's the geometry-related problem generator with all the set theory diagram problems:
// ==================== GEOMETRY (SET THEORY) WITH DIAGRAMS ====================

generateRelatedSetTheoryDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    // ─── 1. SET NOTATION ───────────────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Set Notation',
        problem: 'Write the set of even numbers between 1 and 11 in roster form and set-builder notation.',
        parameters: { set: [2, 4, 6, 8, 10] },
        type: 'set_notation',
        subparts: [
            'Roster form: list all elements — {2, 4, 6, 8, 10}',
            'Set-builder: { x | x is even, 1 < x < 11 }',
            'Description: the set of all even integers from 2 to 10'
        ],
        helper: 'Roster form lists elements; set-builder uses a rule or condition',
        answer: 'Roster: {2, 4, 6, 8, 10} | Set-builder: { x ∈ ℤ | x is even, 2 ≤ x ≤ 10 }',
        realWorldContext: 'Database queries, filtering even-numbered items',
        diagramInfo: {
            type: 'set_notation',
            registryKey: 'setNotation',
            renderOptions: {
                title: 'Set Notation',
                showRoster: true,
                showSetBuilder: true,
                showDescription: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 900, height: 500 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `math_set_notation_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ─── 2. VENN DIAGRAM – 2 SETS ──────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Venn Diagram (2 Sets)',
        problem: 'Let A = {1, 2, 3, 4, 5} and B = {4, 5, 6, 7, 8} with universal set U = {1–10}. Find A ∩ B, A ∪ B, and the elements only in A.',
        parameters: {
            setA: [1, 2, 3, 4, 5],
            setB: [4, 5, 6, 7, 8],
            universal: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        type: 'venn_diagram',
        subparts: [
            'A ∩ B (intersection): elements in both A and B = {4, 5}',
            'A ∪ B (union): all elements in A or B = {1, 2, 3, 4, 5, 6, 7, 8}',
            'Only in A (A − B): {1, 2, 3}',
            'Only in B (B − A): {6, 7, 8}',
            'Neither: {9, 10}'
        ],
        helper: 'Overlap region = intersection; entire shaded area = union',
        answer: 'A ∩ B = {4, 5} | A ∪ B = {1, 2, 3, 4, 5, 6, 7, 8} | Only in A = {1, 2, 3}',
        realWorldContext: 'Survey analysis, grouping students by shared subjects',
        diagramInfo: {
            type: 'venn_diagram',
            registryKey: 'vennDiagram2Sets',
            renderOptions: {
                title: 'Venn Diagram',
                showSets: true,
                showIntersection: true,
                showUnion: true,
                showElements: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `math_venn_2sets_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ─── 3. VENN DIAGRAM – 3 SETS ──────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Venn Diagram (3 Sets)',
        problem: 'Let A = {1–7}, B = {4, 5, 6, 8, 9, 10}, C = {6, 7, 10, 11, 12}, U = {1–13}. Find A ∩ B ∩ C and elements exclusive to each set.',
        parameters: {
            setA: [1, 2, 3, 4, 5, 6, 7],
            setB: [4, 5, 6, 8, 9, 10],
            setC: [6, 7, 10, 11, 12],
            universal: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        },
        type: 'venn_diagram_3',
        subparts: [
            'A ∩ B = {4, 5, 6}',
            'A ∩ C = {6, 7}',
            'B ∩ C = {6, 10}',
            'A ∩ B ∩ C = {6} (centre region)',
            'Only in A: {1, 2, 3}',
            'Only in B: {8, 9}',
            'Only in C: {11, 12}',
            'Outside all: {13}'
        ],
        helper: 'Work inward: find all pairwise intersections first, then the triple intersection',
        answer: 'A ∩ B ∩ C = {6} | Exclusive — A: {1,2,3}, B: {8,9}, C: {11,12}',
        realWorldContext: 'Students enrolled in three different clubs or courses',
        diagramInfo: {
            type: 'venn_diagram_3',
            registryKey: 'vennDiagram3Sets',
            renderOptions: {
                title: 'Venn Diagram (3 Sets)',
                showSets: true,
                showIntersections: true,
                showElements: true,
                showRegions: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 900, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `math_venn_3sets_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ─── 4. SET UNION ──────────────────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Set Union (A ∪ B)',
        problem: 'Given A = {1, 2, 3, 4} and B = {3, 4, 5, 6}, find A ∪ B and state the cardinality |A ∪ B|.',
        parameters: {
            setA: [1, 2, 3, 4],
            setB: [3, 4, 5, 6],
            operation: 'union'
        },
        type: 'set_operation',
        subparts: [
            'Union: all elements appearing in A or B (no duplicates)',
            'A ∪ B = {1, 2, 3, 4, 5, 6}',
            'Cardinality: |A ∪ B| = 6',
            'Inclusion-exclusion: |A ∪ B| = |A| + |B| − |A ∩ B| = 4 + 4 − 2 = 6'
        ],
        helper: 'A ∪ B combines all elements; use inclusion-exclusion to count',
        answer: 'A ∪ B = {1, 2, 3, 4, 5, 6} | |A ∪ B| = 6',
        realWorldContext: 'Merging two mailing lists without duplicates',
        diagramInfo: {
            type: 'set_operation',
            registryKey: 'setOperationsUnion',
            renderOptions: {
                title: 'Set Union',
                showSets: true,
                showOperation: true,
                showResult: true,
                showVenn: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `math_set_union_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ─── 5. SET INTERSECTION ───────────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Set Intersection (A ∩ B)',
        problem: 'Given A = {1, 2, 3, 4, 5} and B = {3, 4, 5, 6, 7}, find A ∩ B and verify using a Venn diagram.',
        parameters: {
            setA: [1, 2, 3, 4, 5],
            setB: [3, 4, 5, 6, 7],
            operation: 'intersection'
        },
        type: 'set_operation',
        subparts: [
            'Intersection: elements common to both A and B',
            'A ∩ B = {3, 4, 5}',
            '|A ∩ B| = 3',
            'Venn: the overlapping region contains {3, 4, 5}'
        ],
        helper: 'A ∩ B is the overlap region; only include elements present in both sets',
        answer: 'A ∩ B = {3, 4, 5} | |A ∩ B| = 3',
        realWorldContext: 'Finding customers who purchased from two different product lines',
        diagramInfo: {
            type: 'set_operation',
            registryKey: 'setOperationsIntersection',
            renderOptions: {
                title: 'Set Intersection',
                showSets: true,
                showOperation: true,
                showResult: true,
                showVenn: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `math_set_intersection_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ─── 6. SET COMPLEMENT ─────────────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'similar',
        scenario: "Set Complement (A')",
        problem: "Let U = {1, 2, ..., 10} and A = {2, 4, 6, 8}. Find A' (the complement of A) and state |A'|.",
        parameters: {
            setA: [2, 4, 6, 8],
            universal: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            operation: 'complement'
        },
        type: 'set_operation',
        subparts: [
            "Complement A' = U − A: all elements in U not in A",
            "A' = {1, 3, 5, 7, 9, 10}",
            "|A'| = 6",
            "|A| + |A'| = |U| → 4 + 6 = 10 ✓"
        ],
        helper: "A' contains everything in U that is NOT in A",
        answer: "A' = {1, 3, 5, 7, 9, 10} | |A'| = 6",
        realWorldContext: 'Identifying items not selected in a filter or query',
        diagramInfo: {
            type: 'set_operation',
            registryKey: 'setOperationsComplement',
            renderOptions: {
                title: 'Set Complement',
                showSet: true,
                showUniversal: true,
                showComplement: true,
                showVenn: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `math_set_complement_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ─── 7. SET DIFFERENCE ─────────────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Set Difference (A − B)',
        problem: 'Given A = {1, 2, 3, 4, 5} and B = {3, 4, 5, 6, 7}, find A − B and B − A. Are they equal?',
        parameters: {
            setA: [1, 2, 3, 4, 5],
            setB: [3, 4, 5, 6, 7],
            operation: 'difference'
        },
        type: 'set_operation',
        subparts: [
            'A − B: elements in A but NOT in B = {1, 2}',
            'B − A: elements in B but NOT in A = {6, 7}',
            'A − B ≠ B − A (set difference is not commutative)',
            'A − B = A ∩ B\' (difference equals intersection with complement)'
        ],
        helper: 'A − B removes from A anything that also belongs to B',
        answer: 'A − B = {1, 2} | B − A = {6, 7} | They are not equal',
        realWorldContext: 'Finding items in one inventory but not another',
        diagramInfo: {
            type: 'set_operation',
            registryKey: 'setOperationsDifference',
            renderOptions: {
                title: 'Set Difference',
                showSets: true,
                showOperation: true,
                showResult: true,
                showVenn: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `math_set_difference_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ─── 8. SUBSET DIAGRAM ─────────────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Subset Relationship',
        problem: 'Let A = {2, 4, 6} and B = {1, 2, 3, 4, 5, 6, 7, 8}. Show that A ⊆ B and list all subsets of A.',
        parameters: {
            setA: [2, 4, 6],
            setB: [1, 2, 3, 4, 5, 6, 7, 8]
        },
        type: 'subset_diagram',
        subparts: [
            'A ⊆ B: every element of A is also in B — check: 2∈B ✓, 4∈B ✓, 6∈B ✓',
            'Number of subsets of A = 2^|A| = 2³ = 8',
            'Subsets: ∅, {2}, {4}, {6}, {2,4}, {2,6}, {4,6}, {2,4,6}',
            'Proper subsets (A ⊊ B): all subsets except A itself — 7 proper subsets'
        ],
        helper: 'A ⊆ B if every element of A is in B; total subsets = 2^n',
        answer: 'A ⊆ B ✓ | 8 subsets total | 7 proper subsets',
        realWorldContext: 'Classifying species within a broader taxonomic group',
        diagramInfo: {
            type: 'subset_diagram',
            registryKey: 'subsetDiagram',
            renderOptions: {
                title: 'Subset Relationship',
                showSets: true,
                showContainment: true,
                showVenn: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `math_subset_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ─── 9. DISJOINT SETS ──────────────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Disjoint Sets',
        problem: 'Let A = {1, 2, 3} and B = {4, 5, 6}. Show that A and B are disjoint and find A ∪ B.',
        parameters: {
            setA: [1, 2, 3],
            setB: [4, 5, 6]
        },
        type: 'disjoint_sets',
        subparts: [
            'Disjoint sets share no common elements: A ∩ B = ∅',
            'Check: no element of A appears in B ✓',
            'A ∪ B = {1, 2, 3, 4, 5, 6}',
            '|A ∪ B| = |A| + |B| = 3 + 3 = 6 (no overlap, so no subtraction needed)',
            'Venn: the two circles do not overlap'
        ],
        helper: 'Disjoint: A ∩ B = ∅; for disjoint sets |A ∪ B| = |A| + |B|',
        answer: 'A ∩ B = ∅ (disjoint) ✓ | A ∪ B = {1, 2, 3, 4, 5, 6} | |A ∪ B| = 6',
        realWorldContext: 'Scheduling non-overlapping time slots or events',
        diagramInfo: {
            type: 'disjoint_sets',
            registryKey: 'disjointSets',
            renderOptions: {
                title: 'Disjoint Sets',
                showSets: true,
                showSeparation: true,
                showVenn: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `math_disjoint_sets_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ─── 10. CARDINALITY ───────────────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Cardinality of Sets',
        problem: 'A = {1, 2, 3, 4, 5}, B = {3, 4, 5, 6, 7, 8}. Use the inclusion-exclusion principle to find |A ∪ B|.',
        parameters: {
            setA: [1, 2, 3, 4, 5],
            setB: [3, 4, 5, 6, 7, 8]
        },
        type: 'cardinality',
        subparts: [
            '|A| = 5, |B| = 6',
            'A ∩ B = {3, 4, 5} → |A ∩ B| = 3',
            'Inclusion-exclusion: |A ∪ B| = |A| + |B| − |A ∩ B|',
            '|A ∪ B| = 5 + 6 − 3 = 8',
            'Verify: A ∪ B = {1, 2, 3, 4, 5, 6, 7, 8} → 8 elements ✓'
        ],
        helper: 'Inclusion-exclusion: |A ∪ B| = |A| + |B| − |A ∩ B|',
        answer: '|A ∪ B| = 8 | A ∪ B = {1, 2, 3, 4, 5, 6, 7, 8}',
        realWorldContext: 'Counting unique attendees across two overlapping events',
        diagramInfo: {
            type: 'cardinality',
            registryKey: 'cardinality',
            renderOptions: {
                title: 'Cardinality',
                showSets: true,
                showCounts: true,
                showFormula: true,
                showVenn: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `math_cardinality_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ─── 11. DE MORGAN'S LAWS ──────────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'hard',
        scenario: "De Morgan's Laws",
        problem: "Let U = {1–8}, A = {1, 2, 3, 4}, B = {3, 4, 5, 6}. Verify both De Morgan's laws: (A ∪ B)' = A' ∩ B' and (A ∩ B)' = A' ∪ B'.",
        parameters: {
            setA: [1, 2, 3, 4],
            setB: [3, 4, 5, 6],
            universal: [1, 2, 3, 4, 5, 6, 7, 8]
        },
        type: 'de_morgans_laws',
        subparts: [
            "A' = {5, 6, 7, 8} | B' = {1, 2, 7, 8}",
            'Law 1: (A ∪ B)\' = A\' ∩ B\'',
            '  A ∪ B = {1,2,3,4,5,6} → (A ∪ B)\' = {7, 8}',
            '  A\' ∩ B\' = {5,6,7,8} ∩ {1,2,7,8} = {7, 8} ✓',
            'Law 2: (A ∩ B)\' = A\' ∪ B\'',
            '  A ∩ B = {3, 4} → (A ∩ B)\' = {1,2,5,6,7,8}',
            '  A\' ∪ B\' = {5,6,7,8} ∪ {1,2,7,8} = {1,2,5,6,7,8} ✓'
        ],
        helper: "De Morgan's: complement of union = intersection of complements, and vice versa",
        answer: "Law 1: (A ∪ B)' = A' ∩ B' = {7, 8} ✓ | Law 2: (A ∩ B)' = A' ∪ B' = {1,2,5,6,7,8} ✓",
        realWorldContext: 'Boolean logic in programming (NOT (A OR B) === NOT A AND NOT B)',
        diagramInfo: {
            type: 'de_morgans_laws',
            registryKey: 'deMorgansLaws',
            renderOptions: {
                title: "De Morgan's Laws",
                showLaw1: true,
                showLaw2: true,
                showProof: true,
                showVenn: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 1000, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `math_de_morgans_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    return relatedProblems;
}

