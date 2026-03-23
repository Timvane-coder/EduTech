// ============================================================================
// biochemicalTestsRegister.js
// Registry for four standard biochemical food tests:
//   – Benedict's Test for Reducing Sugars
//   – Iodine Test for Starch
//   – Biuret Test for Proteins
//   – Sudan III/IV Test for Lipids
//
// Follows the same structure as AnatomicalDiagramsRegistry in register.js
// ============================================================================

class BiochemicalTestsRegistry {
    static diagrams = {

        // ── Benedict's Test for Reducing Sugars ──────────────────────────────
        benedictsTest: {
            name: "Benedict's Test for Reducing Sugars",
            category: 'Biochemical Food Tests',
            description: 'Colorimetric test detecting reducing sugars via Cu²⁺ reduction in alkaline solution',
            dataRequired: ['component', 'sugarConcentration'],
            usage: 'Best for showing redox chemistry, colour change progression, and practical food analysis',
            examples: ['Glucose detection', 'Reducing sugar quantification', 'Urine sugar screening'],
            componentOptions: [
                'complete', 'reagent', 'testTube', 'colorChange',
                'waterbath', 'precipitate', 'resultsTable'
            ],
            sugarConcentrationOptions: ['negative', 'trace', 'low', 'medium', 'high'],
            processOptions: ['structure', 'heating', 'colour-change', 'quantification'],
            insets: ['colour-gradient', 'redox-reaction', 'copper-reduction', 'sugar-structures'],
            drawingSteps: [
                { step: 1, id: 'reagent',      label: "Step 1 – Benedict's Reagent (blue Cu²⁺ solution)" },
                { step: 2, id: 'sample',        label: 'Step 2 – Adding food sample to test tube'          },
                { step: 3, id: 'waterbath',     label: 'Step 3 – Heating in boiling water bath (5 min)'    },
                { step: 4, id: 'colorChange',   label: 'Step 4 – Colour change observation'                },
                { step: 5, id: 'resultsTable',  label: 'Step 5 – Results table & interpretation'           },
            ],
            defaultOptions: {
                title: "Benedict's Test for Reducing Sugars",
                component: 'complete',
                sugarConcentration: 'high',
                drawingStep: 5,
                showLabels: true,
                showInset: false,
                insetType: 'colour-gradient',
                width: 720,
                height: 560,
                backgroundColor: '#ffffff'
            }
        },

        // ── Iodine Test for Starch ────────────────────────────────────────────
        iodineTest: {
            name: 'Iodine Test for Starch',
            category: 'Biochemical Food Tests',
            description: 'Detection of starch using iodine/potassium iodide solution forming a blue-black complex',
            dataRequired: ['component', 'starchPresent'],
            usage: 'Best for showing starch detection, iodine-amylose complex, and practical spotting technique',
            examples: ['Starch identification in foods', 'Leaf starch after photosynthesis', 'Bread and potato testing'],
            componentOptions: [
                'complete', 'reagent', 'spottingTile', 'dropApplication',
                'colorChange', 'positiveResult', 'resultsTable'
            ],
            starchPresentOptions: ['absent', 'present'],
            processOptions: ['structure', 'spotting', 'colour-change', 'amylose-complex'],
            insets: ['amylose-helix', 'iodine-complex', 'colour-comparison', 'starch-structure'],
            drawingSteps: [
                { step: 1, id: 'reagent',       label: 'Step 1 – Iodine/KI Reagent (yellow-brown)'       },
                { step: 2, id: 'spottingTile',  label: 'Step 2 – Spotting tile preparation'               },
                { step: 3, id: 'application',   label: 'Step 3 – Dropping reagent onto food samples'      },
                { step: 4, id: 'colorChange',   label: 'Step 4 – Blue-black colour change (if starch +ve)'},
                { step: 5, id: 'resultsTable',  label: 'Step 5 – Results table & interpretation'          },
            ],
            defaultOptions: {
                title: 'Iodine Test for Starch',
                component: 'complete',
                starchPresent: 'present',
                drawingStep: 5,
                showLabels: true,
                showInset: false,
                insetType: 'amylose-helix',
                width: 680,
                height: 520,
                backgroundColor: '#ffffff'
            }
        },

        // ── Biuret Test for Proteins ──────────────────────────────────────────
        biuretTest: {
            name: 'Biuret Test for Proteins',
            category: 'Biochemical Food Tests',
            description: 'Detection of peptide bonds using alkaline copper sulphate producing a purple/lilac colour',
            dataRequired: ['component', 'proteinPresent'],
            usage: 'Best for showing peptide bond detection, Cu²⁺ coordination chemistry, and qualitative protein analysis',
            examples: ['Protein identification in foods', 'Egg white testing', 'Milk and meat analysis'],
            componentOptions: [
                'complete', 'naohReagent', 'cuso4Reagent', 'testTube',
                'colorChange', 'peptideBond', 'resultsTable'
            ],
            proteinPresentOptions: ['absent', 'present'],
            processOptions: ['structure', 'reagent-addition', 'colour-change', 'peptide-coordination'],
            insets: ['peptide-bond-detail', 'copper-coordination', 'colour-comparison', 'protein-structure'],
            drawingSteps: [
                { step: 1, id: 'naoh',          label: 'Step 1 – Adding NaOH (sodium hydroxide) solution' },
                { step: 2, id: 'cuso4',         label: 'Step 2 – Adding dilute CuSO₄ (copper sulphate)'  },
                { step: 3, id: 'mixing',        label: 'Step 3 – Mixing – Biuret reagent formed in situ'  },
                { step: 4, id: 'colorChange',   label: 'Step 4 – Purple/lilac colour (protein +ve)'       },
                { step: 5, id: 'resultsTable',  label: 'Step 5 – Results table & interpretation'          },
            ],
            defaultOptions: {
                title: 'Biuret Test for Proteins',
                component: 'complete',
                proteinPresent: 'present',
                drawingStep: 5,
                showLabels: true,
                showInset: false,
                insetType: 'peptide-bond-detail',
                width: 700,
                height: 540,
                backgroundColor: '#ffffff'
            }
        },

        // ── Sudan III/IV Test for Lipids ──────────────────────────────────────
        sudanTest: {
            name: 'Sudan III/IV Test for Lipids',
            category: 'Biochemical Food Tests',
            description: 'Detection of lipids using Sudan III or Sudan IV dye that dissolves in fat (red staining)',
            dataRequired: ['component', 'lipidPresent'],
            usage: 'Best for showing lipid detection, dye solubility, emulsion layer separation and fat identification',
            examples: ['Cooking oil testing', 'Milk fat detection', 'Seed lipid content'],
            componentOptions: [
                'complete', 'reagent', 'testTube', 'emulsionLayer',
                'redLayer', 'waterLayer', 'resultsTable'
            ],
            lipidPresentOptions: ['absent', 'present'],
            processOptions: ['structure', 'mixing', 'layer-separation', 'red-staining'],
            insets: ['lipid-bilayer', 'dye-solubility', 'emulsion-detail', 'triglyceride-structure'],
            drawingSteps: [
                { step: 1, id: 'reagent',       label: 'Step 1 – Sudan III/IV dye solution (red/orange)'  },
                { step: 2, id: 'sample',        label: 'Step 2 – Adding food sample to test tube'          },
                { step: 3, id: 'mixing',        label: 'Step 3 – Shaking/mixing to emulsify'               },
                { step: 4, id: 'separation',    label: 'Step 4 – Layer separation & red staining of fat'   },
                { step: 5, id: 'resultsTable',  label: 'Step 5 – Results table & interpretation'           },
            ],
            defaultOptions: {
                title: 'Sudan III/IV Test for Lipids',
                component: 'complete',
                lipidPresent: 'present',
                drawingStep: 5,
                showLabels: true,
                showInset: false,
                insetType: 'lipid-bilayer',
                width: 700,
                height: 560,
                backgroundColor: '#ffffff'
            }
        }
    };

    // ── Static accessor helpers (mirrors AnatomicalDiagramsRegistry) ─────────
    static getDiagram(key)            { return this.diagrams[key]; }
    static getAllDiagrams()           { return Object.keys(this.diagrams); }

    static getDiagramsByCategory(category) {
        return Object.entries(this.diagrams)
            .filter(([_, d]) => d.category === category)
            .reduce((acc, [k, d]) => { acc[k] = d; return acc; }, {});
    }

    static getAllCategories() {
        return [...new Set(Object.values(this.diagrams).map(d => d.category))];
    }

    static searchDiagrams(query) {
        const q = query.toLowerCase();
        return Object.entries(this.diagrams)
            .filter(([key, d]) =>
                d.name.toLowerCase().includes(q)        ||
                d.description.toLowerCase().includes(q) ||
                d.category.toLowerCase().includes(q)    ||
                key.toLowerCase().includes(q)           ||
                d.examples.some(ex => ex.toLowerCase().includes(q))
            )
            .reduce((acc, [k, d]) => { acc[k] = d; return acc; }, {});
    }

    static getDiagramStats() {
        const stats = {};
        this.getAllCategories().forEach(cat => {
            const diagrams = this.getDiagramsByCategory(cat);
            stats[cat] = { count: Object.keys(diagrams).length, diagrams: Object.keys(diagrams) };
        });
        return stats;
    }

    static getTotalDiagramCount() { return Object.keys(this.diagrams).length; }

    static getInsetTypes() {
        const insets = new Set();
        Object.values(this.diagrams).forEach(d => {
            if (d.insets) d.insets.forEach(i => insets.add(i));
        });
        return Array.from(insets);
    }

    static getDiagramsByInset(insetType) {
        return Object.entries(this.diagrams)
            .filter(([_, d]) => d.insets && d.insets.includes(insetType))
            .map(([k]) => k);
    }

    static printSummary() {
        console.log('=== BIOCHEMICAL TESTS REGISTRY SUMMARY ===');
        console.log(`Total Tests:       ${this.getTotalDiagramCount()}`);
        console.log(`Total Inset Types: ${this.getInsetTypes().length}`);
        console.log('\nBy Category:');
        Object.entries(this.getDiagramStats()).forEach(([cat, data]) => {
            console.log(`  ${cat}: ${data.count} diagrams`);
            data.diagrams.forEach(k => console.log(`    – ${k}`));
        });
    }
}

export { BiochemicalTestsRegistry };
