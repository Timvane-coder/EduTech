// ============================================================================
// biochemicalRenderer.js
// Step-by-step rendering methods for the four biochemical food tests.
// Follows the exact same pattern as AnatomicalDiagramRenderer in render.js.
//
// Imports:
//   BiochemicalTestsRegistry  – from biochemicalTestsRegister.js
//   BiochemicalShapes         – from biochemicalShapes.js
// ============================================================================

import { createCanvas }             from '@napi-rs/canvas';
import { BiochemicalTestsRegistry } from './biochemicalTestsRegister.js';
import { BiochemicalShapes }        from './biochemicalShapes.js';

class BiochemicalDiagramRenderer {
    constructor(canvas = null) {
        this.defaultFont     = 'Arial, sans-serif';
        this.defaultFontSize = 12;
        this.canvas = canvas;
        this.ctx    = canvas ? canvas.getContext('2d') : null;
        this.currentFrame = 0;
    }

    // ── Core entry point ──────────────────────────────────────────────────
    renderDiagram(diagramKey, x, y, width, height, options = {}) {
        const diagram = BiochemicalTestsRegistry.getDiagram(diagramKey);
        if (!diagram) throw new Error(`Biochemical diagram '${diagramKey}' not found`);

        const mergedOptions = { ...diagram.defaultOptions, ...options };

        this.ctx.save();
        this.ctx.translate(x, y);

        this.ctx.fillStyle = mergedOptions.backgroundColor || '#ffffff';
        this.ctx.fillRect(0, 0, width, height);

        this.drawTitle(mergedOptions.title, width / 2, 30);

        const centerX = width  / 2;
        const centerY = height / 2 + 30;

        try {
            switch (diagramKey) {
                case 'benedictsTest':
                    this.renderBenedictsTestDiagram(0, 0, width, height, mergedOptions);
                    break;
                case 'iodineTest':
                    this.renderIodineTestDiagram(0, 0, width, height, mergedOptions);
                    break;
                case 'biuretTest':
                    this.renderBiuretTestDiagram(0, 0, width, height, mergedOptions);
                    break;
                case 'sudanTest':
                    this.renderSudanTestDiagram(0, 0, width, height, mergedOptions);
                    break;
                default:
                    this.renderPlaceholder(diagram, centerX, centerY, width * 0.7, height * 0.5);
            }
            this.drawDiagramInfo(diagram, 20, height - 60, mergedOptions);
        } catch (error) {
            console.error(`Error rendering ${diagramKey}:`, error);
            this.renderError(diagram, centerX, centerY, width * 0.7, height * 0.5, error.message);
        }

        this.ctx.restore();
    }

    // ════════════════════════════════════════════════════════════════════════
    // BENEDICT'S TEST — STEP-BY-STEP RENDERER
    // Steps:
    //   1 — Benedict's reagent (blue Cu²⁺ solution) in test tube
    //   2 — Adding food sample to test tube
    //   3 — Heating in boiling water bath (5 min)
    //   4 — Colour change observation (range of results)
    //   5 — Results table & interpretation
    // ════════════════════════════════════════════════════════════════════════
    renderBenedictsTestDiagram(x, y, width, height, options = {}) {
        const {
            component          = 'complete',
            sugarConcentration = 'high',
            drawingStep        = 5,
            showLabels         = true,
            showInset          = false,
            insetType          = 'colour-gradient'
        } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        const step = Math.max(1, Math.min(5, drawingStep));

        const stepLabels = [
            "Step 1 — Benedict's Reagent",
            'Step 2 — Adding Food Sample',
            'Step 3 — Heating in Water Bath',
            'Step 4 — Colour Change Observation',
            'Step 5 — Results Table & Interpretation'
        ];
        this.ctx.font = 'bold 13px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.07);

        // ── Layout constants ───────────────────────────────────────────────
        const tubeW  = width * 0.08;
        const tubeH  = height * 0.35;
        const tubeY  = height * 0.14;
        const mainCX = width * 0.20;   // primary tube centre X

        // Colour lookup by concentration
        const concentrationColors = {
            negative: '#1A6BB5',
            trace:    '#27AE60',
            low:      '#F1C40F',
            medium:   '#E67E22',
            high:     '#C0392B'
        };
        const liquidColor = concentrationColors[sugarConcentration] || '#C0392B';

        // ── STEP 1 — Reagent tube ──────────────────────────────────────────
        if (step >= 1) {
            BiochemicalShapes.drawTestTube(this.ctx, mainCX, tubeY, tubeW, tubeH, '#1A6BB5', 0.75);

            if (showLabels) {
                this.addLabel("Benedict's Reagent\n(Copper sulphate +\nNa citrate + Na carbonate)",
                    mainCX, tubeY - 8, '#1A6BB5');
                this.addLabel('Blue Cu²⁺\nsolution', mainCX + tubeW * 0.8, tubeY + tubeH * 0.4, '#1A6BB5', 'left');
            }
        }

        // ── STEP 2 — Add sample ────────────────────────────────────────────
        if (step >= 2) {
            // Sample dropper above tube
            BiochemicalShapes.drawDropperApplication(this.ctx, mainCX, tubeY - 2, 'rgba(200,240,200,0.80)');

            // Food sample tube (beside main tube)
            BiochemicalShapes.drawTestTube(this.ctx,
                mainCX + tubeW * 2.4, tubeY + tubeH * 0.10, tubeW * 0.80, tubeH * 0.55,
                'rgba(200,240,200,0.85)', 0.70);

            if (showLabels) {
                this.addLabel('Food sample\n(1 cm³)', mainCX + tubeW * 2.4, tubeY + tubeH * 0.08, '#27AE60');
                this.addLabel('Add ~2 cm³\nBenedict\'s\nReagent', mainCX, tubeY + tubeH + 16, '#1A6BB5');
            }
        }

        // ── STEP 3 — Water bath ────────────────────────────────────────────
        if (step >= 3) {
            const bathW  = width * 0.26;
            const bathH  = height * 0.20;
            const bathY  = tubeY + tubeH + 8;
            const bathCX = mainCX;

            BiochemicalShapes.drawHeatSource(this.ctx, bathCX, bathY + bathH, bathW, bathH, 'waterbath');

            // Tube inside bath
            BiochemicalShapes.drawTestTube(this.ctx, bathCX, bathY - tubeH * 0.85, tubeW, tubeH * 0.80,
                '#1A6BB5', 0.72);

            // Steam wisps
            this.ctx.strokeStyle = 'rgba(150,200,255,0.55)';
            this.ctx.lineWidth = 1.5;
            [bathCX - 12, bathCX, bathCX + 12].forEach((sx, i) => {
                this.ctx.beginPath();
                this.ctx.moveTo(sx, bathY - 4);
                this.ctx.bezierCurveTo(sx - 4, bathY - 14, sx + 4, bathY - 22, sx, bathY - 32);
                this.ctx.stroke();
            });

            if (showLabels) {
                this.addLabel('Heat 5 minutes\n(do NOT stopper tube)',
                    bathCX + width * 0.15, bathY + bathH * 0.50, '#E74C3C', 'left');
            }
        }

        // ── STEP 4 — Colour change range ───────────────────────────────────
        if (step >= 4) {
            const concentrations = ['negative', 'trace', 'low', 'medium', 'high'];
            const labels         = ['Negative', 'Trace', 'Low', 'Medium', 'High'];
            const spacing        = width * 0.14;
            const rowStartX      = width * 0.12;
            const rowY           = height * 0.52;
            const smTubeW        = tubeW * 0.80;
            const smTubeH        = tubeH * 0.58;

            concentrations.forEach((conc, i) => {
                const tx = rowStartX + i * spacing;
                const col = concentrationColors[conc];
                BiochemicalShapes.drawTestTube(this.ctx, tx, rowY, smTubeW, smTubeH, col, 0.78);

                // Precipitate for positive results
                if (['low', 'medium', 'high'].includes(conc)) {
                    BiochemicalShapes.drawPrecipitate(this.ctx, tx,
                        rowY + smTubeH - smTubeW / 2, smTubeW * 0.70, col, 16);
                }

                if (showLabels) {
                    this.addLabel(labels[i], tx, rowY - 6, '#555');
                    this.addLabel(conc === 'negative' ? 'Blue\n(no change)' :
                        conc === 'trace'    ? 'Green\nppt'   :
                        conc === 'low'      ? 'Yellow\nppt'  :
                        conc === 'medium'   ? 'Orange\nppt'  : 'Brick Red\nppt',
                        tx, rowY + smTubeH + 8, col);
                }
            });

            if (showLabels) {
                this.addLabel('← Increasing reducing sugar concentration →',
                    width * 0.52, height * 0.51, '#888');
            }
        }

        // ── STEP 5 — Results table ─────────────────────────────────────────
        if (step >= 5) {
            const tableX = width  * 0.03;
            const tableY = height * 0.77;
            const tableW = width  * 0.94;
            const tableH = height * 0.18;

            const headers = ['Result', 'Colour', 'Precipitate', 'Reducing Sugar', 'Approximate Amount'];
            const rows = [
                ['Negative', { swatch: '#1A6BB5', label: 'Blue'       }, 'None',   'Absent',  'None'       ],
                ['Trace',    { swatch: '#27AE60', label: 'Green'      }, 'Slight', 'Present', 'Very low'   ],
                ['Low',      { swatch: '#F1C40F', label: 'Yellow'     }, 'Yes',    'Present', 'Low'        ],
                ['Medium',   { swatch: '#E67E22', label: 'Orange'     }, 'Yes',    'Present', 'Moderate'   ],
                ['High',     { swatch: '#C0392B', label: 'Brick Red'  }, 'Heavy',  'Present', 'High'       ],
            ];
            const positiveRows = [1, 2, 3, 4];

            BiochemicalShapes.drawResultsTable(this.ctx, tableX, tableY, tableW, tableH,
                headers, rows, positiveRows);

            if (showLabels) {
                this.ctx.font = 'italic 10px Arial';
                this.ctx.fillStyle = '#7F8C8D';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(
                    'Benedict\'s is a SEMI-QUANTITATIVE test — colour indicates approximate sugar concentration',
                    width / 2, tableY - 5
                );
            }
        }

        // Step indicator
        this.ctx.font = 'italic 10px Arial';
        this.ctx.fillStyle = '#BDC3C7';
        this.ctx.textAlign = 'right';
        this.ctx.fillText(`Step ${step} of 5`, width - 8, height - 4);

        if (showInset) {
            this.drawBiochemicalInset(width * 0.60, height * 0.08, width * 0.38, height * 0.28, insetType);
        }

        this.ctx.restore();
    }

    // ════════════════════════════════════════════════════════════════════════
    // IODINE TEST — STEP-BY-STEP RENDERER
    // Steps:
    //   1 — Iodine/KI reagent (yellow-brown)
    //   2 — Spotting tile preparation
    //   3 — Dropping reagent onto food samples
    //   4 — Blue-black colour change (if starch +ve)
    //   5 — Results table & interpretation
    // ════════════════════════════════════════════════════════════════════════
    renderIodineTestDiagram(x, y, width, height, options = {}) {
        const {
            component     = 'complete',
            starchPresent = 'present',
            drawingStep   = 5,
            showLabels    = true,
            showInset     = false,
            insetType     = 'amylose-helix'
        } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        const step = Math.max(1, Math.min(5, drawingStep));

        const stepLabels = [
            'Step 1 — Iodine/KI Reagent (yellow-brown)',
            'Step 2 — Spotting Tile Preparation',
            'Step 3 — Dropping Reagent onto Samples',
            'Step 4 — Colour Change Observation',
            'Step 5 — Results Table & Interpretation'
        ];
        this.ctx.font = 'bold 13px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.07);

        // ── Layout constants ───────────────────────────────────────────────
        const tubeW  = width  * 0.07;
        const tubeH  = height * 0.32;
        const tubeY  = height * 0.13;
        const mainCX = width  * 0.16;

        // ── STEP 1 — Iodine reagent bottle / tube ─────────────────────────
        if (step >= 1) {
            // Reagent bottle
            this.ctx.fillStyle = '#8B6914';
            this.ctx.strokeStyle = '#5A3E0A';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.roundRect(mainCX - tubeW * 1.2, tubeY, tubeW * 2.4, tubeH * 0.90, 6);
            this.ctx.fill(); this.ctx.stroke();

            // Label on bottle
            this.ctx.fillStyle = '#FFF';
            this.ctx.font = 'bold 10px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Iodine', mainCX, tubeY + tubeH * 0.28);
            this.ctx.font = '9px Arial';
            this.ctx.fillText('solution', mainCX, tubeY + tubeH * 0.40);
            this.ctx.fillText('(I₂/KI)', mainCX, tubeY + tubeH * 0.52);

            // Bottle neck
            this.ctx.fillStyle = '#5A3E0A';
            this.ctx.beginPath();
            this.ctx.roundRect(mainCX - tubeW * 0.4, tubeY - 12, tubeW * 0.8, 14, 3);
            this.ctx.fill();

            if (showLabels) {
                this.addLabel('Iodine/KI solution\n(yellow-brown colour)',
                    mainCX + tubeW * 2.0, tubeY + tubeH * 0.24, '#8B6914', 'left');
                this.addLabel('Contains: I₂ + KI in water', mainCX, tubeY + tubeH + 10, '#666');
            }
        }

        // ── STEP 2 — Spotting tile ─────────────────────────────────────────
        if (step >= 2) {
            const tileX = width  * 0.30;
            const tileY = height * 0.14;
            const tileW = width  * 0.60;
            const tileH = height * 0.18;

            // Sample labels above wells
            const sampleNames = ['Glucose\nsolution', 'Starch\nsolution', 'Bread\ncrumb', 'Potato\nslice', 'Onion\njuice', 'Distilled\nwater'];
            const wellColors  = [
                '#F9E4B7',  // glucose – no starch
                starchPresent === 'present' ? '#1A237E' : '#8B6914',  // starch solution
                '#1A237E',  // bread – starch +ve
                '#1A237E',  // potato – starch +ve
                '#8B6914',  // onion – no starch
                '#8B6914'   // water – control
            ];

            const wells = sampleNames.map((_, i) => ({
                col: i, row: 0, color: step >= 4 ? wellColors[i] : '#8B6914'
            }));

            BiochemicalShapes.drawSpottingTile(this.ctx, tileX, tileY, tileW, tileH, wells, 6, 1);

            if (showLabels) {
                const cellW = tileW / 6;
                sampleNames.forEach((name, i) => {
                    name.split('\n').forEach((line, li) => {
                        this.ctx.font = '8px Arial';
                        this.ctx.fillStyle = '#555';
                        this.ctx.textAlign = 'center';
                        this.ctx.fillText(line, tileX + cellW * i + cellW / 2, tileY - 14 + li * 10);
                    });
                });
                this.addLabel('White spotting tile with 6 food samples', width * 0.60, tileY + tileH + 12, '#888');
            }
        }

        // ── STEP 3 — Dropper application ───────────────────────────────────
        if (step >= 3) {
            const tileX  = width  * 0.30;
            const tileY  = height * 0.14;
            const tileW  = width  * 0.60;
            const cellW  = tileW  / 6;

            // Show dropper over well 1 (starch solution)
            BiochemicalShapes.drawDropperApplication(this.ctx,
                tileX + cellW * 1.5, tileY + 2, '#8B6914');

            if (showLabels) {
                this.addLabel('Add 2 drops iodine solution\nto each sample', width * 0.60, height * 0.40, '#8B6914');
            }
        }

        // ── STEP 4 — Colour change panels ──────────────────────────────────
        if (step >= 4) {
            const panelY = height * 0.42;
            const panelH = height * 0.28;

            // Negative result panel
            this.drawResultPanel(this.ctx,
                width * 0.06, panelY, width * 0.38, panelH,
                '#8B6914', 'NEGATIVE',
                'Yellow-brown colour\nNO change',
                'Starch ABSENT', '#8B6914', '#5A3E0A');

            // Positive result panel
            this.drawResultPanel(this.ctx,
                width * 0.56, panelY, width * 0.38, panelH,
                '#1A237E', 'POSITIVE',
                'Blue-black colour\n(dramatic change)',
                'Starch PRESENT', '#1A237E', '#0D1352');

            if (showLabels) {
                this.ctx.font = 'italic 10px Arial';
                this.ctx.fillStyle = '#888';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('The blue-black colour is caused by I₂ molecules trapped in amylose helix coils',
                    width / 2, panelY + panelH + 12);
            }
        }

        // ── STEP 5 — Results table ─────────────────────────────────────────
        if (step >= 5) {
            const tableX = width  * 0.03;
            const tableY = height * 0.76;
            const tableW = width  * 0.94;
            const tableH = height * 0.19;

            const headers = ['Food Sample', 'Colour Before', 'Colour After', 'Starch Present?', 'Notes'];
            const rows = [
                ['Glucose solution', 'Yellow-brown', 'Yellow-brown', 'No',  'Reducing sugar, not starch'       ],
                ['Starch solution',  'Yellow-brown', 'Blue-black',   'Yes', 'Standard positive control'        ],
                ['Bread crumb',      'Yellow-brown', 'Blue-black',   'Yes', 'Amylose in wheat flour'           ],
                ['Potato slice',     'Yellow-brown', 'Blue-black',   'Yes', 'Amylopectin + amylose in potato'  ],
                ['Onion juice',      'Yellow-brown', 'Yellow-brown', 'No',  'Onion stores sugar, not starch'   ],
                ['Distilled water',  'Yellow-brown', 'Yellow-brown', 'No',  'Negative control'                 ],
            ];
            const positiveRows = [1, 2, 3];

            BiochemicalShapes.drawResultsTable(this.ctx, tableX, tableY, tableW, tableH,
                headers, rows, positiveRows);

            if (showLabels) {
                this.ctx.font = 'italic 10px Arial';
                this.ctx.fillStyle = '#7F8C8D';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(
                    'Iodine test is QUALITATIVE (positive/negative only) — cannot indicate starch concentration',
                    width / 2, tableY - 5
                );
            }
        }

        // Step indicator
        this.ctx.font = 'italic 10px Arial';
        this.ctx.fillStyle = '#BDC3C7';
        this.ctx.textAlign = 'right';
        this.ctx.fillText(`Step ${step} of 5`, width - 8, height - 4);

        if (showInset) {
            this.drawBiochemicalInset(width * 0.62, height * 0.08, width * 0.36, height * 0.26, insetType);
        }

        this.ctx.restore();
    }

    // ════════════════════════════════════════════════════════════════════════
    // BIURET TEST — STEP-BY-STEP RENDERER
    // Steps:
    //   1 — Adding NaOH solution
    //   2 — Adding dilute CuSO₄
    //   3 — Mixing – Biuret reagent formed in situ
    //   4 — Purple/lilac colour (protein +ve)
    //   5 — Results table & interpretation
    // ════════════════════════════════════════════════════════════════════════
    renderBiuretTestDiagram(x, y, width, height, options = {}) {
        const {
            component      = 'complete',
            proteinPresent = 'present',
            drawingStep    = 5,
            showLabels     = true,
            showInset      = false,
            insetType      = 'peptide-bond-detail'
        } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        const step = Math.max(1, Math.min(5, drawingStep));

        const stepLabels = [
            'Step 1 — Adding NaOH Solution',
            'Step 2 — Adding Dilute CuSO₄',
            'Step 3 — Mixing (Biuret Reagent in situ)',
            'Step 4 — Colour Observation',
            'Step 5 — Results Table & Interpretation'
        ];
        this.ctx.font = 'bold 13px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.07);

        // ── Layout constants ───────────────────────────────────────────────
        const tubeW  = width  * 0.08;
        const tubeH  = height * 0.36;
        const tubeY  = height * 0.13;
        const tube1X = width  * 0.20;
        const tube2X = width  * 0.45;
        const tube3X = width  * 0.70;

        // ── STEP 1 — Sample tube + NaOH ───────────────────────────────────
        if (step >= 1) {
            // Sample (food protein)
            BiochemicalShapes.drawTestTube(this.ctx, tube1X, tubeY, tubeW, tubeH,
                'rgba(240,230,200,0.90)', 0.65);

            // NaOH addition dropper
            BiochemicalShapes.drawDropperApplication(this.ctx, tube1X, tubeY - 2, 'rgba(200,240,220,0.85)');

            if (showLabels) {
                this.addLabel('Food sample\n(protein solution)', tube1X, tubeY + tubeH + 8, '#555');
                this.addLabel('Add NaOH\n(creates\nalkaline\nconditions)', tube1X + tubeW, tubeY + tubeH * 0.20, '#27AE60', 'left');
            }
        }

        // ── STEP 2 — Add CuSO₄ ────────────────────────────────────────────
        if (step >= 2) {
            // Tube after NaOH
            BiochemicalShapes.drawTestTube(this.ctx, tube2X, tubeY, tubeW, tubeH,
                'rgba(173,216,230,0.80)', 0.68);

            // CuSO₄ dropper (blue)
            BiochemicalShapes.drawDropperApplication(this.ctx, tube2X, tubeY - 2, 'rgba(100,160,220,0.90)');

            if (showLabels) {
                this.addLabel('After NaOH\n(clear/alkaline)', tube2X, tubeY + tubeH + 8, '#555');
                this.addLabel('Add dilute\nCuSO₄\n(very dilute\n– 1 drop)', tube2X + tubeW, tubeY + tubeH * 0.20, '#1A6BB5', 'left');
            }
        }

        // ── STEP 3 — Mixed tube (blue Cu²⁺) ──────────────────────────────
        if (step >= 3) {
            BiochemicalShapes.drawTestTube(this.ctx, tube3X, tubeY, tubeW, tubeH,
                '#1A6BB5', 0.70);

            // Mix arrow
            this.ctx.strokeStyle = '#888';
            this.ctx.lineWidth = 1.5;
            this.ctx.setLineDash([4, 3]);
            this.ctx.beginPath();
            this.ctx.moveTo(tube2X + tubeW * 0.7, tubeY + tubeH * 0.40);
            this.ctx.lineTo(tube3X - tubeW * 0.7, tubeY + tubeH * 0.40);
            this.ctx.stroke();
            this.ctx.setLineDash([]);
            this.drawArrow(tube2X + tubeW * 0.6, tubeY + tubeH * 0.40,
                           tube3X - tubeW * 0.55, tubeY + tubeH * 0.40, '#888', 'mix', 7);

            if (showLabels) {
                this.addLabel('Biuret reagent\n(blue – Cu²⁺ in\nalkaline solution)', tube3X, tubeY + tubeH + 8, '#1A6BB5');
            }
        }

        // ── STEP 4 — Colour change ─────────────────────────────────────────
        if (step >= 4) {
            const panelY  = height * 0.60;
            const panelH  = height * 0.12;
            const negColor = '#1A6BB5';
            const posColor = proteinPresent === 'present' ? '#9B59B6' : '#1A6BB5';

            // Two result tubes side by side
            const neg_cx = width * 0.20;
            const pos_cx = width * 0.70;
            const rTubeW = tubeW * 0.85;
            const rTubeH = tubeH * 0.55;

            BiochemicalShapes.drawTestTube(this.ctx, neg_cx, panelY, rTubeW, rTubeH, negColor, 0.75);
            BiochemicalShapes.drawTestTube(this.ctx, pos_cx, panelY, rTubeW, rTubeH, posColor, 0.75);

            if (showLabels) {
                this.addLabel('NEGATIVE', neg_cx, panelY - 6, '#1A6BB5');
                this.addLabel('Blue colour\n(no change)', neg_cx, panelY + rTubeH + 8, negColor);
                this.addLabel('Protein ABSENT', neg_cx, panelY + rTubeH + 38, '#888');

                this.addLabel('POSITIVE', pos_cx, panelY - 6, '#9B59B6');
                this.addLabel('Purple/lilac colour\n(Cu²⁺–peptide\ncomplex)', pos_cx, panelY + rTubeH + 8, posColor);
                this.addLabel('Protein PRESENT', pos_cx, panelY + rTubeH + 48, '#6C3483');

                // Note about amino acids
                this.ctx.font = 'italic 10px Arial';
                this.ctx.fillStyle = '#888';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('Note: Amino acids & dipeptides give PINK colour; polypeptides/proteins give PURPLE',
                    width / 2, panelY + rTubeH + 62);
            }
        }

        // ── STEP 5 — Results table ─────────────────────────────────────────
        if (step >= 5) {
            const tableX = width  * 0.03;
            const tableY = height * 0.78;
            const tableW = width  * 0.94;
            const tableH = height * 0.18;

            const headers = ['Food Sample', 'Colour Result', 'Protein?', 'Peptide Length', 'Notes'];
            const rows = [
                ['Egg white (dilute)', { swatch: '#9B59B6', label: 'Purple'  }, 'Yes', 'Polypeptide', 'Classic positive result'       ],
                ['Milk',               { swatch: '#9B59B6', label: 'Purple'  }, 'Yes', 'Polypeptide', 'Casein & whey proteins'         ],
                ['Glucose solution',   { swatch: '#1A6BB5', label: 'Blue'    }, 'No',  'N/A',         'No peptide bonds – negative'    ],
                ['Amino acid soln.',   { swatch: '#E8B4D0', label: 'Pink'    }, '~',   'Monomer',     'Pink – no peptide bond'         ],
                ['Starch solution',    { swatch: '#1A6BB5', label: 'Blue'    }, 'No',  'N/A',         'Carbohydrate – negative'        ],
                ['Distilled water',    { swatch: '#1A6BB5', label: 'Blue'    }, 'No',  'N/A',         'Negative control'               ],
            ];
            const positiveRows = [0, 1];

            BiochemicalShapes.drawResultsTable(this.ctx, tableX, tableY, tableW, tableH,
                headers, rows, positiveRows);

            if (showLabels) {
                this.ctx.font = 'italic 10px Arial';
                this.ctx.fillStyle = '#7F8C8D';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(
                    'Biuret test detects PEPTIDE BONDS — qualitative test (positive/negative only)',
                    width / 2, tableY - 5
                );
            }
        }

        // Step indicator
        this.ctx.font = 'italic 10px Arial';
        this.ctx.fillStyle = '#BDC3C7';
        this.ctx.textAlign = 'right';
        this.ctx.fillText(`Step ${step} of 5`, width - 8, height - 4);

        if (showInset) {
            this.drawBiochemicalInset(width * 0.62, height * 0.08, width * 0.36, height * 0.28, insetType);
        }

        this.ctx.restore();
    }

    // ════════════════════════════════════════════════════════════════════════
    // SUDAN TEST — STEP-BY-STEP RENDERER
    // Steps:
    //   1 — Sudan III/IV dye solution (red/orange)
    //   2 — Adding food sample to test tube
    //   3 — Shaking/mixing to emulsify
    //   4 — Layer separation & red staining of fat
    //   5 — Results table & interpretation
    // ════════════════════════════════════════════════════════════════════════
    renderSudanTestDiagram(x, y, width, height, options = {}) {
        const {
            component    = 'complete',
            lipidPresent = 'present',
            drawingStep  = 5,
            showLabels   = true,
            showInset    = false,
            insetType    = 'lipid-bilayer'
        } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        const step = Math.max(1, Math.min(5, drawingStep));

        const stepLabels = [
            'Step 1 — Sudan III/IV Dye Solution (Red/Orange)',
            'Step 2 — Adding Food Sample to Test Tube',
            'Step 3 — Shaking and Mixing to Emulsify',
            'Step 4 — Layer Separation & Red Fat Staining',
            'Step 5 — Results Table & Interpretation'
        ];
        this.ctx.font = 'bold 13px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.07);

        // ── Layout constants ───────────────────────────────────────────────
        const tubeW  = width  * 0.09;
        const tubeH  = height * 0.40;
        const tubeY  = height * 0.13;
        const mainCX = width  * 0.18;

        // ── STEP 1 — Sudan dye tube ────────────────────────────────────────
        if (step >= 1) {
            BiochemicalShapes.drawTestTube(this.ctx, mainCX, tubeY, tubeW, tubeH, '#E74C3C', 0.70);

            if (showLabels) {
                this.addLabel('Sudan III/IV\ndye solution\n(lipid-soluble\nred dye)', mainCX, tubeY - 10, '#C0392B');
                this.addLabel('Dissolves in\nlipids (non-polar)', mainCX + tubeW * 1.0, tubeY + tubeH * 0.35, '#C0392B', 'left');
            }
        }

        // ── STEP 2 — Add sample ────────────────────────────────────────────
        if (step >= 2) {
            const sampleCX = mainCX + tubeW * 2.8;
            BiochemicalShapes.drawTestTube(this.ctx, sampleCX, tubeY + tubeH * 0.08,
                tubeW * 0.85, tubeH * 0.60, 'rgba(255,240,200,0.85)', 0.70);

            BiochemicalShapes.drawDropperApplication(this.ctx, mainCX, tubeY - 2, '#E74C3C');

            if (showLabels) {
                this.addLabel('Food sample\n(e.g. milk / oil)', sampleCX, tubeY + tubeH * 0.06, '#E67E22');
                this.addLabel('Add Sudan\ndye to sample\ntest tube', mainCX, tubeY + tubeH + 12, '#C0392B');
            }
        }

        // ── STEP 3 — Mixing (shaking) ──────────────────────────────────────
        if (step >= 3) {
            // Show tube at an angle to indicate shaking
            this.ctx.save();
            this.ctx.translate(width * 0.55, tubeY + tubeH * 0.50);
            this.ctx.rotate(-0.25);

            // Tube tilted while shaking
            BiochemicalShapes.drawTestTube(this.ctx, 0, -tubeH * 0.50, tubeW, tubeH,
                'rgba(231,76,60,0.65)', 0.75);

            this.ctx.restore();

            // Shaking arrow indicators
            ['↕', '↕', '↕'].forEach((arrow, i) => {
                this.ctx.font = 'bold 18px Arial';
                this.ctx.fillStyle = '#E67E22';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(arrow, width * (0.49 + i * 0.04), tubeY + tubeH * 0.40);
            });

            if (showLabels) {
                this.addLabel('Shake vigorously\nfor 30 seconds', width * 0.54, tubeY + tubeH + 8, '#E67E22');
            }
        }

        // ── STEP 4 — Layer separation ──────────────────────────────────────
        if (step >= 4) {
            const negCX  = width * 0.20;
            const posCX  = width * 0.68;
            const resTubeW = tubeW * 0.90;
            const resTubeH = tubeH * 0.55;
            const resY   = height * 0.54;

            // Negative result – no lipid layer
            BiochemicalShapes.drawTestTube(this.ctx, negCX, resY, resTubeW, resTubeH,
                'rgba(231,76,60,0.25)', 0.80);

            // Positive result – fat layer stained red on top of water
            BiochemicalShapes.drawLayeredTestTube(this.ctx, posCX, resY, resTubeW, resTubeH, [
                { color: '#E74C3C',       fraction: 0.28 },  // red stained fat layer
                { color: '#D6EAF8',       fraction: 0.52 }   // aqueous layer
            ]);

            if (showLabels) {
                this.addLabel('NEGATIVE', negCX, resY - 8, '#C0392B');
                this.addLabel('Pale pink/\nuniform colour\n(no layer)', negCX, resY + resTubeH + 8, '#C0392B');
                this.addLabel('Lipid ABSENT', negCX, resY + resTubeH + 44, '#888');

                this.addLabel('POSITIVE', posCX, resY - 8, '#C0392B');
                this.addLabel('Red upper layer\n(lipid stained)\n+ pale lower\nlayer (water)', posCX, resY + resTubeH + 8, '#C0392B');
                this.addLabel('Lipid PRESENT', posCX, resY + resTubeH + 60, '#6C0E0E');

                // Labels on layers inside positive tube
                this.addLabel('← Red lipid layer', posCX + resTubeW * 0.75, resY + resTubeH * 0.14, '#C0392B', 'left');
                this.addLabel('← Aqueous layer', posCX + resTubeW * 0.75, resY + resTubeH * 0.55, '#1A6BB5', 'left');
            }
        }

        // ── STEP 5 — Results table ─────────────────────────────────────────
        if (step >= 5) {
            const tableX = width  * 0.03;
            const tableY = height * 0.78;
            const tableW = width  * 0.94;
            const tableH = height * 0.18;

            const headers = ['Food Sample', 'Observation', 'Lipid?', 'Layer Formation?', 'Notes'];
            const rows = [
                ['Cooking oil',    'Red upper layer forms', 'Yes', 'Yes (distinct)', 'Oil is pure lipid – positive'     ],
                ['Full-fat milk',  'Red layer / globules',  'Yes', 'Yes (partial)',  'Fat globules in emulsion'         ],
                ['Skimmed milk',   'Very pale pink',        'Trace','Minimal',       'Very low fat content'             ],
                ['Glucose soln.',  'Uniform pale orange',   'No',  'None',          'No lipid – negative'              ],
                ['Starch soln.',   'Uniform pale orange',   'No',  'None',          'No lipid – negative'              ],
                ['Distilled water','Uniform pale orange',   'No',  'None',          'Negative control'                 ],
            ];
            const positiveRows = [0, 1];

            BiochemicalShapes.drawResultsTable(this.ctx, tableX, tableY, tableW, tableH,
                headers, rows, positiveRows);

            if (showLabels) {
                this.ctx.font = 'italic 10px Arial';
                this.ctx.fillStyle = '#7F8C8D';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(
                    'Sudan III/IV is a QUALITATIVE test — presence of a red upper layer indicates lipid',
                    width / 2, tableY - 5
                );
            }
        }

        // Step indicator
        this.ctx.font = 'italic 10px Arial';
        this.ctx.fillStyle = '#BDC3C7';
        this.ctx.textAlign = 'right';
        this.ctx.fillText(`Step ${step} of 5`, width - 8, height - 4);

        if (showInset) {
            this.drawBiochemicalInset(width * 0.62, height * 0.08, width * 0.36, height * 0.26, insetType);
        }

        this.ctx.restore();
    }

    // ════════════════════════════════════════════════════════════════════════
    // INSET DISPATCHER (biochemical tests)
    // ════════════════════════════════════════════════════════════════════════
    drawBiochemicalInset(x, y, width, height, insetType, options = {}) {
        this.ctx.save();
        this.ctx.translate(x, y);

        // Border + background
        this.ctx.strokeStyle = '#34495E';
        this.ctx.lineWidth = 3;
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.shadowColor = 'rgba(0,0,0,0.20)';
        this.ctx.shadowBlur = 10;
        this.ctx.shadowOffsetX = 3;
        this.ctx.shadowOffsetY = 3;
        this.ctx.beginPath();
        this.ctx.roundRect(0, 0, width, height, 8);
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.shadowBlur = 0;
        this.ctx.shadowOffsetX = 0;
        this.ctx.shadowOffsetY = 0;

        switch (insetType) {
            // ── Benedict's ───────────────────────────────────────────────
            case 'colour-gradient':
                this.drawColourGradientInset(width, height);
                break;
            case 'redox-reaction':
                this.drawRedoxReactionInset(width, height);
                break;
            case 'copper-reduction':
                BiochemicalShapes.drawCopperReductionDiagram(this.ctx, width * 0.04, height * 0.04, width * 0.92, height * 0.92);
                break;
            case 'sugar-structures':
                this.drawSugarStructuresInset(width, height);
                break;

            // ── Iodine ───────────────────────────────────────────────────
            case 'amylose-helix':
                BiochemicalShapes.drawAmyloseHelix(this.ctx, width * 0.04, height * 0.04, width * 0.92, height * 0.92);
                break;
            case 'iodine-complex':
                this.drawIodineComplexInset(width, height);
                break;
            case 'colour-comparison':
                this.drawColourComparisonInset(width, height);
                break;
            case 'starch-structure':
                this.drawStarchStructureInset(width, height);
                break;

            // ── Biuret ───────────────────────────────────────────────────
            case 'peptide-bond-detail':
                BiochemicalShapes.drawPeptideBond(this.ctx, width * 0.04, height * 0.04, width * 0.92, height * 0.92);
                break;
            case 'copper-coordination':
                BiochemicalShapes.drawCopperCoordination(this.ctx, width * 0.04, height * 0.04, width * 0.92, height * 0.92);
                break;
            case 'protein-structure':
                this.drawProteinStructureInset(width, height);
                break;

            // ── Sudan ────────────────────────────────────────────────────
            case 'lipid-bilayer':
                this.drawLipidBilayerInset(width, height);
                break;
            case 'dye-solubility':
                BiochemicalShapes.drawDyeSolubility(this.ctx, width * 0.04, height * 0.04, width * 0.92, height * 0.92);
                break;
            case 'emulsion-detail':
                BiochemicalShapes.drawEmulsionDroplets(this.ctx, width * 0.04, height * 0.04, width * 0.92, height * 0.92);
                break;
            case 'triglyceride-structure':
                BiochemicalShapes.drawTriglyceride(this.ctx, width * 0.04, height * 0.04, width * 0.92, height * 0.92);
                break;

            default:
                this.drawBiochemInsetPlaceholder(width, height, insetType);
        }

        this.ctx.restore();
    }

    // ── Colour gradient inset (Benedict's) ──────────────────────────────────
    drawColourGradientInset(width, height) {
        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText("Benedict's Colour Range", width / 2, 16);
        BiochemicalShapes.drawBenedictsColourGradient(this.ctx,
            width * 0.06, height * 0.26, width * 0.88, height * 0.22);
    }

    // ── Redox reaction inset (Benedict's) ───────────────────────────────────
    drawRedoxReactionInset(width, height) {
        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Oxidation–Reduction', width / 2, 16);

        const lines = [
            'Reducing sugar acts as a REDUCING agent',
            '',
            'Sugar → oxidised → sugar acid',
            'Cu²⁺  → reduced → Cu⁺ (Cu₂O)',
            '',
            'Aldehyde / ketone group',
            'is the reactive site on glucose'
        ];
        ctx.font = '9px Arial';
        this.ctx.fillStyle = '#34495E';
        this.ctx.textAlign = 'left';
        lines.forEach((line, i) => {
            this.ctx.fillStyle = i === 2 ? '#E74C3C' : i === 3 ? '#1A6BB5' : '#34495E';
            this.ctx.fillText(line, 8, 32 + i * 13);
        });
    }

    // ── Sugar structures inset (Benedict's) ─────────────────────────────────
    drawSugarStructuresInset(width, height) {
        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Reducing vs Non-Reducing', width / 2, 16);

        // Reducing sugars
        this.ctx.fillStyle = '#27AE60';
        this.ctx.font = 'bold 10px Arial';
        this.ctx.fillText('Reducing Sugars (positive)', width * 0.28, 34);
        ['Glucose', 'Fructose', 'Galactose', 'Maltose', 'Lactose'].forEach((s, i) => {
            this.ctx.fillStyle = '#2ECC71';
            this.ctx.font = '9px Arial';
            this.ctx.fillText('✓ ' + s, width * 0.06, 50 + i * 13);
        });

        // Non-reducing
        this.ctx.fillStyle = '#C0392B';
        this.ctx.font = 'bold 10px Arial';
        this.ctx.fillText('Non-Reducing (negative)', width * 0.72, 34);
        ['Sucrose', '(table sugar)'].forEach((s, i) => {
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.font = '9px Arial';
            this.ctx.fillText('✗ ' + s, width * 0.56, 50 + i * 13);
        });

        this.ctx.fillStyle = '#888';
        this.ctx.font = 'italic 8px Arial';
        this.ctx.fillText('Sucrose must be hydrolysed before it tests +ve', width / 2, height * 0.90);
    }

    // ── Iodine complex inset ─────────────────────────────────────────────────
    drawIodineComplexInset(width, height) {
        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('I₂–Amylose Complex', width / 2, 16);

        const lines = [
            'I₂ molecules slot into the',
            'hollow centre of amylose helices',
            '',
            'Helix coils ~6 glucose units/turn',
            'I₂ polymerizes inside → I₅⁻, I₇⁻, …',
            '',
            'These charge-transfer complexes',
            'absorb ~620 nm light → appear',
            'blue-black to the eye'
        ];
        this.ctx.font = '9px Arial';
        this.ctx.textAlign = 'left';
        lines.forEach((line, i) => {
            this.ctx.fillStyle = line.includes('blue-black') ? '#1A237E' : '#34495E';
            this.ctx.fillText(line, 6, 32 + i * 12);
        });
    }

    // ── Colour comparison inset ──────────────────────────────────────────────
    drawColourComparisonInset(width, height) {
        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Colour Comparison', width / 2, 16);

        const swatches = [
            { color: '#8B6914', label: 'Yellow-brown\n(Negative)'  },
            { color: '#1A237E', label: 'Blue-black\n(Positive)'    }
        ];
        swatches.forEach((sw, i) => {
            const sx = width * (0.20 + i * 0.50);
            const sy = height * 0.32;
            this.ctx.fillStyle = sw.color;
            this.ctx.beginPath();
            this.ctx.roundRect(sx - 22, sy, 44, 28, 5);
            this.ctx.fill();
            this.ctx.strokeStyle = '#888';
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
            this.ctx.fillStyle = '#333';
            this.ctx.font = '8px Arial';
            this.ctx.textAlign = 'center';
            sw.label.split('\n').forEach((line, li) => {
                this.ctx.fillText(line, sx, sy + 42 + li * 11);
            });
        });
    }

    // ── Starch structure inset ───────────────────────────────────────────────
    drawStarchStructureInset(width, height) {
        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Starch Components', width / 2, 16);

        const rows = [
            ['Component', 'Structure', 'Iodine'],
            ['Amylose', 'Linear (α1–4)', 'Blue-black'],
            ['Amylopectin', 'Branched (α1–6)', 'Red-brown']
        ];
        const cW = [width * 0.36, width * 0.36, width * 0.28];
        rows.forEach((row, ri) => {
            row.forEach((cell, ci) => {
                const rx = ci === 0 ? width * 0.04 : ci === 1 ? width * 0.40 : width * 0.76;
                const ry = 32 + ri * 20;
                this.ctx.fillStyle = ri === 0 ? '#2C3E50' : '#555';
                this.ctx.font = ri === 0 ? 'bold 9px Arial' : '8px Arial';
                this.ctx.textAlign = 'left';
                this.ctx.fillText(cell, rx, ry);
            });
        });

        this.ctx.fillStyle = '#888';
        this.ctx.font = 'italic 8px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Starch ≈ 20–30% amylose, 70–80% amylopectin', width / 2, height * 0.90);
    }

    // ── Protein structure inset (Biuret) ─────────────────────────────────────
    drawProteinStructureInset(width, height) {
        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Protein Structure Levels', width / 2, 16);

        const levels = [
            { label: 'Primary',    desc: 'Sequence of amino acids',   color: '#AED6F1' },
            { label: 'Secondary',  desc: 'α-helix / β-sheet',         color: '#A9DFBF' },
            { label: 'Tertiary',   desc: '3D folded shape',           color: '#F9E79F' },
            { label: 'Quaternary', desc: 'Multiple polypeptide chains',color: '#F1948A' },
        ];
        levels.forEach((lv, i) => {
            const ly = 32 + i * 22;
            this.ctx.fillStyle = lv.color;
            this.ctx.beginPath();
            this.ctx.roundRect(6, ly - 12, 60, 18, 3);
            this.ctx.fill();
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 8px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(lv.label, 36, ly);
            this.ctx.fillStyle = '#555';
            this.ctx.font = '8px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText(lv.desc, 72, ly);
        });

        this.ctx.fillStyle = '#9B59B6';
        this.ctx.font = 'italic 8px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Biuret detects 2+ peptide bonds (≥ tripeptide)', width / 2, height * 0.90);
    }

    // ── Lipid bilayer inset (Sudan) ──────────────────────────────────────────
    drawLipidBilayerInset(width, height) {
        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Lipid Bilayer (membrane)', width / 2, 16);

        const cy   = height * 0.52;
        const headR = 7;

        // Two rows of phospholipids
        for (let layer = 0; layer < 2; layer++) {
            const yHead = layer === 0 ? cy - headR - 18 : cy + headR + 18;
            const yTail = layer === 0 ? yHead + headR  : yHead - headR;

            for (let i = 0; i < 8; i++) {
                const hx = width * 0.08 + i * (width * 0.84 / 7);

                // Hydrophilic head
                this.ctx.fillStyle = '#2E86C1';
                this.ctx.beginPath();
                this.ctx.arc(hx, yHead, headR, 0, Math.PI * 2);
                this.ctx.fill();

                // Hydrophobic tails
                const tailDir = layer === 0 ? 1 : -1;
                this.ctx.strokeStyle = '#E67E22';
                this.ctx.lineWidth = 1.5;
                [-2, 2].forEach(offset => {
                    this.ctx.beginPath();
                    this.ctx.moveTo(hx + offset, yHead + headR * tailDir);
                    this.ctx.lineTo(hx + offset, yHead + (headR + 20) * tailDir);
                    this.ctx.stroke();
                });
            }
        }

        this.ctx.font = '8px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillStyle = '#2E86C1';
        this.ctx.fillText('Hydrophilic head (polar)', width / 2, cy - headR - 30);
        this.ctx.fillStyle = '#E67E22';
        this.ctx.fillText('Hydrophobic tails (non-polar)', width / 2, cy);
        this.ctx.fillStyle = '#C0392B';
        this.ctx.fillText('Sudan dye dissolves in non-polar tails', width / 2, height * 0.92);
    }

    // ── Placeholder inset ────────────────────────────────────────────────────
    drawBiochemInsetPlaceholder(width, height, insetType) {
        this.ctx.fillStyle = '#ECF0F1';
        this.ctx.fillRect(width * 0.08, height * 0.18, width * 0.84, height * 0.64);
        this.ctx.strokeStyle = '#BDC3C7';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(width * 0.08, height * 0.18, width * 0.84, height * 0.64);
        this.ctx.font = 'bold 12px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(`Inset: ${insetType}`, width / 2, height / 2 - 8);
        this.ctx.font = '10px Arial';
        this.ctx.fillText('(Implementation pending)', width / 2, height / 2 + 10);
    }

    // ════════════════════════════════════════════════════════════════════════
    // SHARED HELPER — result panel (used by iodine + sudan positive/negative)
    // ════════════════════════════════════════════════════════════════════════
    drawResultPanel(ctx, x, y, w, h, fillColor, title, colourDesc, conclusion, titleColor, borderColor) {
        ctx.save();
        ctx.fillStyle = fillColor + '22';  // very transparent fill
        ctx.strokeStyle = borderColor;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(x, y, w, h, 8);
        ctx.fill(); ctx.stroke();

        ctx.font = 'bold 12px Arial';
        ctx.fillStyle = titleColor;
        ctx.textAlign = 'center';
        ctx.fillText(title, x + w / 2, y + 18);

        // Colour swatch
        ctx.fillStyle = fillColor;
        ctx.beginPath();
        ctx.roundRect(x + w * 0.35, y + 26, w * 0.30, 18, 4);
        ctx.fill();

        ctx.font = '10px Arial';
        ctx.fillStyle = titleColor;
        colourDesc.split('\n').forEach((line, i) => {
            ctx.fillText(line, x + w / 2, y + 60 + i * 14);
        });

        ctx.font = 'bold 10px Arial';
        ctx.fillStyle = titleColor;
        ctx.fillText(conclusion, x + w / 2, y + h - 10);

        ctx.restore();
    }

    // ════════════════════════════════════════════════════════════════════════
    // STANDARD HELPERS (mirrors AnatomicalDiagramRenderer)
    // ════════════════════════════════════════════════════════════════════════
    drawTitle(title, x, y) {
        this.ctx.font = 'bold 22px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(title, x, y);
    }

    drawDiagramInfo(diagram, x, y, options) {
        this.ctx.font = '11px Arial';
        this.ctx.fillStyle = '#BDC3C7';
        this.ctx.textAlign = 'left';
        this.ctx.fillText(`Category: ${diagram.category}`, x, y);
        this.ctx.fillText(diagram.description, x, y + 14);
    }

    addLabel(text, x, y, color = '#2C3E50', align = 'center') {
        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillStyle = color;
        this.ctx.textAlign = align;
        const lines = text.split('\n');
        lines.forEach((line, i) => this.ctx.fillText(line, x, y + i * 13));
    }

    drawArrow(x1, y1, x2, y2, color, label = '', arrowSize = 8) {
        this.ctx.save();
        this.ctx.strokeStyle = color;
        this.ctx.fillStyle = color;
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();

        const angle = Math.atan2(y2 - y1, x2 - x1);
        this.ctx.beginPath();
        this.ctx.moveTo(x2, y2);
        this.ctx.lineTo(x2 - arrowSize * Math.cos(angle - Math.PI / 6),
                        y2 - arrowSize * Math.sin(angle - Math.PI / 6));
        this.ctx.lineTo(x2 - arrowSize * Math.cos(angle + Math.PI / 6),
                        y2 - arrowSize * Math.sin(angle + Math.PI / 6));
        this.ctx.closePath();
        this.ctx.fill();

        if (label) {
            const midX = (x1 + x2) / 2;
            const midY = (y1 + y2) / 2;
            this.ctx.font = '10px Arial';
            this.ctx.fillStyle = color;
            this.ctx.textAlign = 'center';
            this.ctx.fillText(label, midX, midY - 5);
        }
        this.ctx.restore();
    }

    drawLegend(x, y, items) {
        this.ctx.save();
        this.ctx.translate(x, y);
        const boxSize = 12, spacing = 20;
        items.forEach((item, i) => {
            const yp = i * spacing;
            this.ctx.fillStyle = item.color;
            this.ctx.fillRect(0, yp, boxSize, boxSize);
            this.ctx.strokeStyle = '#2C3E50';
            this.ctx.lineWidth = 1;
            this.ctx.strokeRect(0, yp, boxSize, boxSize);
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'left';
            this.ctx.fillText(item.label, boxSize + 5, yp + boxSize - 2);
        });
        this.ctx.restore();
    }

    renderPlaceholder(diagram, x, y, width, height) {
        this.ctx.fillStyle = '#ECF0F1';
        this.ctx.fillRect(x - width / 2, y - height / 2, width, height);
        this.ctx.strokeStyle = '#BDC3C7';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(x - width / 2, y - height / 2, width, height);
        this.ctx.font = 'bold 16px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(diagram.name, x, y - 10);
        this.ctx.font = '13px Arial';
        this.ctx.fillText('(Renderer not yet implemented)', x, y + 15);
    }

    renderError(diagram, x, y, width, height, errorMessage) {
        this.ctx.fillStyle = '#FADBD8';
        this.ctx.fillRect(x - width / 2, y - height / 2, width, height);
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(x - width / 2, y - height / 2, width, height);
        this.ctx.font = 'bold 16px Arial';
        this.ctx.fillStyle = '#C0392B';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Error Rendering Diagram', x, y - 10);
        this.ctx.font = '12px Arial';
        this.ctx.fillText(errorMessage, x, y + 15);
    }
}

export { BiochemicalDiagramRenderer };
