import { createCanvas } from '@napi-rs/canvas';
import fs from 'fs';
import { BiochemicalDiagramsRegistry} from './BiochemicalRegistry.js';
import { AnatomicalShapes} from './BiochemicalShapes.js';

class BiochemicalDiagramRenderer {
    constructor(canvas = null) {
        this.defaultFont = 'Arial, sans-serif';
        this.defaultFontSize = 12;
        this.canvas = canvas;
        this.ctx = canvas ? canvas.getContext('2d') : null;
        this.currentFrame = 0;
    }

    // ─── Core entry point ────────────────────────────────────────────────────
    renderDiagram(diagramKey, x, y, width, height, options = {}) {
        const diagram = BiochemicalDiagramsRegistry.getDiagram(diagramKey);
        if (!diagram) throw new Error(`Anatomical diagram '${diagramKey}' not found`);

        const mergedOptions = { ...diagram.defaultOptions, ...options };

        this.ctx.save();
        this.ctx.translate(x, y);

        // Background
        this.ctx.fillStyle = mergedOptions.backgroundColor || '#ffffff';
        this.ctx.fillRect(0, 0, width, height);

        // Title
        this.drawTitle(mergedOptions.title, width / 2, 30);

        const centerX = width / 2;
        const centerY = height / 2 + 30;

        try {
            switch (diagramKey) {
                case 'heartAnatomy':
                    this.renderHeartAnatomyDiagram(0, 0, width, height, mergedOptions);
                    break;
                case 'circulatorySystem':
                    this.renderCirculatorySystemDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'respiratorySystem':
                    this.renderRespiratorySystemDiagram(0, 0, width, height, mergedOptions);
                    break;
                case 'digestiveSystem':
                    this.renderDigestiveSystemDiagram(0, 0, width, height, mergedOptions);
                    break;
                case 'nervousSystem':
                    this.renderNervousSystemDiagram(0, 0, width, height, mergedOptions);
                    break;
                case 'neuronStructure':
                    this.renderNeuronStructureDiagram(0, 0, width, height, mergedOptions);
                    break;
                case 'skeletalSystem':
                    this.renderSkeletalSystemDiagram(0, 0, width, height, mergedOptions);
                    break;
                case 'urinarySystem':
                    this.renderUrinarySystemDiagram(0, 0, width, height, mergedOptions);
                    break;
                case 'eyeAnatomy':
                    this.renderEyeAnatomyDiagram(0, 0, width, height, mergedOptions);
                     break;
                case 'animalCell':
                    this.renderAnimalCellDiagram(0, 0, width, height, mergedOptions);
                    break;
                case 'plantCell':
                    this.renderPlantCellDiagram(0, 0, width, height, mergedOptions);
                    break;
                case 'cellMembrane':
                    this.renderCellMembraneDiagram(0, 0, width, height, mergedOptions);
                    break;
                case 'cellDivision':
                    this.renderCellDivisionDiagram(0, 0, width, height, mergedOptions);
                    break;
                case 'cellularRespiration':
                    this.renderCellularRespirationDiagram(0, 0, width, height, mergedOptions);
                    break;
                case 'foodWeb':
    this.renderFoodWebDiagram(0, 0, width, height, mergedOptions);
    break;
case 'carbonCycle':
    this.renderCarbonCycleDiagram(0, 0, width, height, mergedOptions);
    break;
case 'foodChain':
    this.renderFoodChainDiagram(0, 0, width, height, mergedOptions);
    break;
case 'energyPyramid':
    this.renderEnergyPyramidDiagram(0, 0, width, height, mergedOptions);
    break;
case 'nitrogenCycle':
    this.renderNitrogenCycleDiagram(0, 0, width, height, mergedOptions);
    break;
case 'waterCycle':
    this.renderWaterCycleDiagram(0, 0, width, height, mergedOptions);
    break;
case 'populationGrowth':
    this.renderPopulationGrowthDiagram(0, 0, width, height, mergedOptions);
    break;
case 'ecosystem':
    this.renderEcosystemDiagram(0, 0, width, height, mergedOptions);
    break;
case 'biomes':
    this.renderBiomesDiagram(0, 0, width, height, mergedOptions);
    break;
case 'predatorPrey':
    this.renderPredatorPreyDiagram(0, 0, width, height, mergedOptions);
    break;


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


case 'bacteriaStructure':
    this.renderBacteriaStructureDiagram(0, 0, width, height, mergedOptions);
    break;
case 'virusStructure':
    this.renderVirusStructureDiagram(0, 0, width, height, mergedOptions);
    break;
case 'fungalCell':
    this.renderFungalCellDiagram(0, 0, width, height, mergedOptions);
    break;
case 'protists':
    this.renderProtistsDiagram(0, 0, width, height, mergedOptions);
    break;

case 'cellularRespiration':
    this.renderCellularRespirationDiagram(0, 0, width, height, mergedOptions);
    break;
case 'electronTransportChain':
    this.renderElectronTransportChainDiagram(0, 0, width, height, mergedOptions);
    break;
case 'photosynthesisDetailed':
    this.renderPhotosynthesisDiagram(0, 0, width, height, mergedOptions);
    break;
case 'atpStructure':
    this.renderATPStructureDiagram(0, 0, width, height, mergedOptions);
    break;
case 'mitochondrion':
    this.renderMitochondrionDiagram(0, 0, width, height, mergedOptions);
    break;
case 'chloroplastStructure':
    this.renderChloroplastStructureDiagram(0, 0, width, height, mergedOptions);
    break;

case 'dnaStructure':
        this.renderDNAStructureDiagram(0, 0, width, height, mergedOptions);
        break;
    case 'dnaReplication':
        this.renderDNAReplicationDiagram(0, 0, width, height, mergedOptions);
        break;
    case 'transcription':
        this.renderTranscriptionDiagram(0, 0, width, height, mergedOptions);
        break;
    case 'translation':
        this.renderTranslationDiagram(0, 0, width, height, mergedOptions);
        break;
    case 'rnaStructure':
        this.renderRNAStructureDiagram(0, 0, width, height, mergedOptions);
        break;
    case 'codonChart':
        this.renderCodonChartDiagram(0, 0, width, height, mergedOptions);
        break;

    case 'immuneResponse':
        this.renderImmuneResponseDiagram(0, 0, width, height, mergedOptions);
        break;
    case 'vaccination':
        this.renderVaccinationDiagram(0, 0, width, height, mergedOptions);
        break;
    case 'bloodCells':
        this.renderBloodCellsDiagram(0, 0, width, height, mergedOptions);
        break;
    case 'antibodyStructure':
        this.renderAntibodyStructureDiagram(0, 0, width, height, mergedOptions);
        break;
    case 'pathogenTypes':
        this.renderPathogenTypesDiagram(0, 0, width, height, mergedOptions);
        break;
    case 'inflammation':
        this.renderInflammationDiagram(0, 0, width, height, mergedOptions);
        break;
    case 'diseaseTransmission':
        this.renderDiseaseTransmissionDiagram(0, 0, width, height, mergedOptions);
        break;


                 // ── Plant Biology ──────────────────────────────────────────────────────
    case 'leafCrossSection':
        this.renderLeafCrossSectionDiagram(0, 0, width, height, mergedOptions);
        break;
    case 'stomataStructure':
        this.renderStomataDiagram(0, 0, width, height, mergedOptions);
        break;
    case 'xylemPhloem':
        this.renderXylemPhloemDiagram(0, 0, width, height, mergedOptions);
        break;
    case 'tropisms':
        this.renderTropismsDiagram(0, 0, width, height, mergedOptions);
        break;
    case 'rootSystem':
        this.renderRootSystemDiagram(0, 0, width, height, mergedOptions);
        break;
    case 'stemSystem':
        this.renderStemSystemDiagram(0, 0, width, height, mergedOptions);
        break;
    case 'leafArrangement':
        this.renderLeafArrangementDiagram(0, 0, width, height, mergedOptions);
        break;
    case 'plantHormones':
        this.renderPlantHormonesDiagram(0, 0, width, height, mergedOptions);
        break;
    case 'auxin':
        this.renderAuxinDiagram(0, 0, width, height, mergedOptions);
        break;
    case 'photosynthesis':
        this.renderPhotosynthesisDiagram(0, 0, width, height, mergedOptions);
        break;
    case 'respirationComplete':
        this.renderRespirationCompleteDiagram(0, 0, width, height, mergedOptions);
        break;
    case 'transpirationStream':
        this.renderTranspirationStreamDiagram(0, 0, width, height, mergedOptions);
        break;
    case 'nutrientUptake':
        this.renderNutrientUptakeDiagram(0, 0, width, height, mergedOptions);
        break;
    case 'pressureFlowComplete':
        this.renderPressureFlowDiagram(0, 0, width, height, mergedOptions);
        break;
    case 'flowerToFruitSequence':
        this.renderFlowerToFruitDiagram(0, 0, width, height, mergedOptions);
        break;
    case 'fruitTypes':
        this.renderFruitTypesDiagram(0, 0, width, height, mergedOptions);
        break;
    case 'seedDispersal':
        this.renderSeedDispersalDiagram(0, 0, width, height, mergedOptions);
        break;
    case 'asexualReproduction':
        this.renderAsexualReproductionDiagram(0, 0, width, height, mergedOptions);
        break;
    case 'flowerStructure':
        this.renderFlowerStructureDiagram(0, 0, width, height, mergedOptions);
        break;
    case 'seedGermination':
        this.renderSeedGerminationDiagram(0, 0, width, height, mergedOptions);
        break;
    case 'photoperiodism':
        this.renderPhotoperiodismDiagram(0, 0, width, height, mergedOptions);
        break;
    case 'gibberellin':
        this.renderGibberellinDiagram(0, 0, width, height, mergedOptions);
        break;
    case 'c4Photosynthesis':
        this.renderC4PhotosynthesisDiagram(0, 0, width, height, mergedOptions);
        break;
    case 'camPhotosynthesis':
        this.renderCAMPhotosynthesisDiagram(0, 0, width, height, mergedOptions);
        break;
    case 'nitrogenCycle':
        this.renderNitrogenCycleDiagram(0, 0, width, height, mergedOptions);
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
            AnatomicalShapes.drawTestTube(this.ctx, mainCX, tubeY, tubeW, tubeH, '#1A6BB5', 0.75);

            if (showLabels) {
                this.addLabel("Benedict's Reagent\n(Copper sulphate +\nNa citrate + Na carbonate)",
                    mainCX, tubeY - 8, '#1A6BB5');
                this.addLabel('Blue Cu²⁺\nsolution', mainCX + tubeW * 0.8, tubeY + tubeH * 0.4, '#1A6BB5', 'left');
            }
        }

        // ── STEP 2 — Add sample ────────────────────────────────────────────
        if (step >= 2) {
            // Sample dropper above tube
            AnatomicalShapes.drawDropperApplication(this.ctx, mainCX, tubeY - 2, 'rgba(200,240,200,0.80)');

            // Food sample tube (beside main tube)
            AnatomicalShapes.drawTestTube(this.ctx,
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

            AnatomicalShapes.drawHeatSource(this.ctx, bathCX, bathY + bathH, bathW, bathH, 'waterbath');

            // Tube inside bath
            AnatomicalShapes.drawTestTube(this.ctx, bathCX, bathY - tubeH * 0.85, tubeW, tubeH * 0.80,
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
                AnatomicalShapes.drawTestTube(this.ctx, tx, rowY, smTubeW, smTubeH, col, 0.78);

                // Precipitate for positive results
                if (['low', 'medium', 'high'].includes(conc)) {
                    AnatomicalShapes.drawPrecipitate(this.ctx, tx,
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

            AnatomicalShapes.drawResultsTable(this.ctx, tableX, tableY, tableW, tableH,
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

            AnatomicalShapes.drawSpottingTile(this.ctx, tileX, tileY, tileW, tileH, wells, 6, 1);

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
            AnatomicalShapes.drawDropperApplication(this.ctx,
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

            AnatomicalShapes.drawResultsTable(this.ctx, tableX, tableY, tableW, tableH,
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
            AnatomicalShapes.drawTestTube(this.ctx, tube1X, tubeY, tubeW, tubeH,
                'rgba(240,230,200,0.90)', 0.65);

            // NaOH addition dropper
            AnatomicalShapes.drawDropperApplication(this.ctx, tube1X, tubeY - 2, 'rgba(200,240,220,0.85)');

            if (showLabels) {
                this.addLabel('Food sample\n(protein solution)', tube1X, tubeY + tubeH + 8, '#555');
                this.addLabel('Add NaOH\n(creates\nalkaline\nconditions)', tube1X + tubeW, tubeY + tubeH * 0.20, '#27AE60', 'left');
            }
        }

        // ── STEP 2 — Add CuSO₄ ────────────────────────────────────────────
        if (step >= 2) {
            // Tube after NaOH
            AnatomicalShapes.drawTestTube(this.ctx, tube2X, tubeY, tubeW, tubeH,
                'rgba(173,216,230,0.80)', 0.68);

            // CuSO₄ dropper (blue)
            AnatomicalShapes.drawDropperApplication(this.ctx, tube2X, tubeY - 2, 'rgba(100,160,220,0.90)');

            if (showLabels) {
                this.addLabel('After NaOH\n(clear/alkaline)', tube2X, tubeY + tubeH + 8, '#555');
                this.addLabel('Add dilute\nCuSO₄\n(very dilute\n– 1 drop)', tube2X + tubeW, tubeY + tubeH * 0.20, '#1A6BB5', 'left');
            }
        }

        // ── STEP 3 — Mixed tube (blue Cu²⁺) ──────────────────────────────
        if (step >= 3) {
            AnatomicalShapes.drawTestTube(this.ctx, tube3X, tubeY, tubeW, tubeH,
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

            AnatomicalShapes.drawTestTube(this.ctx, neg_cx, panelY, rTubeW, rTubeH, negColor, 0.75);
            AnatomicalShapes.drawTestTube(this.ctx, pos_cx, panelY, rTubeW, rTubeH, posColor, 0.75);

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

            AnatomicalShapes.drawResultsTable(this.ctx, tableX, tableY, tableW, tableH,
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
            AnatomicalShapes.drawTestTube(this.ctx, mainCX, tubeY, tubeW, tubeH, '#E74C3C', 0.70);

            if (showLabels) {
                this.addLabel('Sudan III/IV\ndye solution\n(lipid-soluble\nred dye)', mainCX, tubeY - 10, '#C0392B');
                this.addLabel('Dissolves in\nlipids (non-polar)', mainCX + tubeW * 1.0, tubeY + tubeH * 0.35, '#C0392B', 'left');
            }
        }

        // ── STEP 2 — Add sample ────────────────────────────────────────────
        if (step >= 2) {
            const sampleCX = mainCX + tubeW * 2.8;
            AnatomicalShapes.drawTestTube(this.ctx, sampleCX, tubeY + tubeH * 0.08,
                tubeW * 0.85, tubeH * 0.60, 'rgba(255,240,200,0.85)', 0.70);

            AnatomicalShapes.drawDropperApplication(this.ctx, mainCX, tubeY - 2, '#E74C3C');

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
            AnatomicalShapes.drawTestTube(this.ctx, 0, -tubeH * 0.50, tubeW, tubeH,
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
            AnatomicalShapes.drawTestTube(this.ctx, negCX, resY, resTubeW, resTubeH,
                'rgba(231,76,60,0.25)', 0.80);

            // Positive result – fat layer stained red on top of water
            AnatomicalShapes.drawLayeredTestTube(this.ctx, posCX, resY, resTubeW, resTubeH, [
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

            AnatomicalShapes.drawResultsTable(this.ctx, tableX, tableY, tableW, tableH,
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




// ═══════════════════════════════════════════════════════════════════════════
// DNA STRUCTURE RENDERER
// ═══════════════════════════════════════════════════════════════════════════
renderDNAStructureDiagram(x, y, width, height, options = {}) {
    const {
        view           = 'doubleHelix',
        componentFocus = 'complete',
        drawingStep    = 5,
        showLabels     = true,
        showInset      = false,
        insetType      = 'base-pair-detail'
    } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    const stepLabels = [
        'Step 1 — Sugar-Phosphate Backbone',
        'Step 2 — Nitrogenous Bases',
        'Step 3 — Hydrogen Bonds',
        'Step 4 — Antiparallel Orientation',
        'Step 5 — Complete Double Helix'
    ];
    const step = Math.max(1, Math.min(5, drawingStep));

    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.05);

    // Map drawing steps to view/componentFocus combos
    const stepMap = [
        { view: 'sugarPhosphate', componentFocus: 'backbone'        },
        { view: 'basePairs',      componentFocus: 'bases'           },
        { view: 'doubleHelix',    componentFocus: 'hydrogen-bonds'  },
        { view: 'doubleHelix',    componentFocus: 'antiparallel'    },
        { view: 'doubleHelix',    componentFocus: 'complete'        },
    ];

    const stepView          = stepMap[step - 1].view;
    const stepFocus         = stepMap[step - 1].componentFocus;
    const resolvedView      = drawingStep < 5 ? stepView  : view;
    const resolvedFocus     = drawingStep < 5 ? stepFocus : componentFocus;

    const diagramY = height * 0.08;
    const diagramH = showInset ? height * 0.86 : height * 0.88;

    AnatomicalShapes.drawDNAStructure(
        this.ctx, 0, diagramY, width, diagramH,
        resolvedView, resolvedFocus
    );

    if (showLabels) {
        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';

        if (resolvedView === 'doubleHelix' || resolvedView === 'complete') {
            this.addLabel("5' → 3'",      width * 0.18, height * 0.93, '#4A90E2');
            this.addLabel("3' → 5'",      width * 0.82, height * 0.93, '#4A90E2');
            this.addLabel('Adenine (A)',   width * 0.85, height * 0.30, '#FF6B6B');
            this.addLabel('Thymine (T)',   width * 0.85, height * 0.40, '#4ECDC4');
            this.addLabel('Guanine (G)',   width * 0.85, height * 0.50, '#FFD93D');
            this.addLabel('Cytosine (C)',  width * 0.85, height * 0.60, '#95E1D3');
        } else if (resolvedView === 'basePairs') {
            this.addLabel('A–T: 2 hydrogen bonds', width * 0.5, height * 0.90, '#333');
            this.addLabel('G–C: 3 hydrogen bonds', width * 0.5, height * 0.94, '#333');
        } else if (resolvedView === 'nucleotide') {
            this.addLabel('Nucleotide = Phosphate + Sugar + Base',
                width * 0.5, height * 0.93, '#333');
        }
    }

    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${step} of 5`, width - 8, height - 4);

    if (showInset) {
        this.drawInset(width * 0.62, height * 0.06, width * 0.36, height * 0.26, insetType);
    }

    this.ctx.restore();
}

// ═══════════════════════════════════════════════════════════════════════════
// DNA REPLICATION RENDERER
// ═══════════════════════════════════════════════════════════════════════════
renderDNAReplicationDiagram(x, y, width, height, options = {}) {
    const {
        stage           = 'elongation',
        enzymeHighlight = 'all',
        drawingStep     = 5,
        showLabels      = true,
        showInset       = false,
        insetType       = 'replication-fork-detail'
    } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    const stepLabels = [
        'Step 1 — Initiation & Origin of Replication',
        'Step 2 — Leading Strand Synthesis',
        'Step 3 — Lagging Strand & Okazaki Fragments',
        'Step 4 — Full Elongation at Fork',
        'Step 5 — Termination & Daughter Molecules'
    ];
    const stepStages = ['initiation', 'leading-strand', 'lagging-strand', 'elongation', 'termination'];
    const step = Math.max(1, Math.min(5, drawingStep));

    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.05);

    const resolvedStage   = step < 5 ? stepStages[step - 1] : stage;
    // Progressively reveal enzymes by step
    const enzymeByStep = ['helicase', 'dna-polymerase', 'primase', 'ligase', 'all'];
    const resolvedEnzyme  = step < 5 ? enzymeByStep[step - 1] : enzymeHighlight;

    const diagramY = height * 0.08;
    const diagramH = height * 0.84;

    AnatomicalShapes.drawDNAReplication(
        this.ctx, 0, diagramY, width, diagramH,
        resolvedStage, resolvedEnzyme
    );

    if (showLabels) {
        // Step-specific annotations
        if (resolvedStage === 'initiation') {
            this.addLabel('Origin of Replication (oriC)', width * 0.5, height * 0.93, '#E74C3C');
        } else if (resolvedStage === 'elongation' || resolvedStage === 'leading-strand') {
            this.addLabel("Leading strand: continuous 5'→3' synthesis",
                width * 0.5, height * 0.91, '#2ECC71');
            this.addLabel("Lagging strand: discontinuous Okazaki fragments",
                width * 0.5, height * 0.95, '#E74C3C');
        } else if (resolvedStage === 'termination') {
            this.addLabel('Two identical daughter DNA molecules produced',
                width * 0.5, height * 0.93, '#2ECC71');
        }
    }

    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${step} of 5`, width - 8, height - 4);

    if (showInset) {
        this.drawInset(width * 0.62, height * 0.06, width * 0.36, height * 0.26, insetType);
    }

    this.ctx.restore();
}

// ═══════════════════════════════════════════════════════════════════════════
// TRANSCRIPTION RENDERER
// ═══════════════════════════════════════════════════════════════════════════
renderTranscriptionDiagram(x, y, width, height, options = {}) {
    const {
        stage       = 'elongation',
        detail      = 'overview',
        drawingStep = 5,
        showLabels  = true,
        showInset   = false,
        insetType   = 'rna-polymerase-detail'
    } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    const stepLabels = [
        'Step 1 — Promoter Recognition & Initiation',
        'Step 2 — Elongation & Transcription Bubble',
        'Step 3 — Termination & Release',
        'Step 4 — RNA Processing & Splicing',
        'Step 5 — Complete Transcription Overview'
    ];
    const stepStages  = ['initiation', 'elongation', 'termination', 'rna-processing', 'elongation'];
    const stepDetails = ['promoter', 'transcription-bubble', 'rna-polymerase', 'rna-splicing', 'overview'];
    const step = Math.max(1, Math.min(5, drawingStep));

    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.05);

    const resolvedStage  = step < 5 ? stepStages[step - 1]  : stage;
    const resolvedDetail = step < 5 ? stepDetails[step - 1] : detail;

    const diagramY = height * 0.08;
    const diagramH = height * 0.84;

    AnatomicalShapes.drawTranscription(
        this.ctx, 0, diagramY, width, diagramH,
        resolvedStage, resolvedDetail
    );

    if (showLabels) {
        if (resolvedStage === 'initiation') {
            this.addLabel("DNA template read 3'→5', RNA synthesised 5'→3'",
                width * 0.5, height * 0.93, '#E74C3C');
        } else if (resolvedStage === 'rna-processing') {
            this.addLabel('Pre-mRNA → Splicing → Capping → Poly-A → Mature mRNA',
                width * 0.5, height * 0.93, '#9B59B6');
        } else if (resolvedStage === 'elongation') {
            this.addLabel('RNA Polymerase II synthesises mRNA from DNA template',
                width * 0.5, height * 0.93, '#E74C3C');
        }
    }

    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${step} of 5`, width - 8, height - 4);

    if (showInset) {
        this.drawInset(width * 0.62, height * 0.06, width * 0.36, height * 0.26, insetType);
    }

    this.ctx.restore();
}

// ═══════════════════════════════════════════════════════════════════════════
// TRANSLATION RENDERER
// ═══════════════════════════════════════════════════════════════════════════
renderTranslationDiagram(x, y, width, height, options = {}) {
    const {
        stage          = 'elongation',
        componentFocus = 'complete',
        drawingStep    = 5,
        showLabels     = true,
        showInset      = false,
        insetType      = 'ribosome-sites'
    } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    const stepLabels = [
        'Step 1 — Ribosome Assembly & Binding Sites',
        'Step 2 — Initiation Complex Formation',
        'Step 3 — Elongation & Peptide Bond Formation',
        'Step 4 — Termination & Polypeptide Release',
        'Step 5 — Complete Translation Overview'
    ];
    const stepStages    = ['ribosome-binding', 'initiation', 'elongation', 'termination', 'elongation'];
    const stepFoci      = ['ribosome', 'ribosome', 'peptide-bond', 'amino-acids', 'complete'];
    const step = Math.max(1, Math.min(5, drawingStep));

    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.05);

    const resolvedStage = step < 5 ? stepStages[step - 1] : stage;
    const resolvedFocus = step < 5 ? stepFoci[step - 1]   : componentFocus;

    const diagramY = height * 0.08;
    const diagramH = height * 0.84;

    AnatomicalShapes.drawTranslation(
        this.ctx, 0, diagramY, width, diagramH,
        resolvedStage, resolvedFocus
    );

    if (showLabels) {
        if (resolvedStage === 'ribosome-binding') {
            this.addLabel('E site: exit  |  P site: peptidyl-tRNA  |  A site: aminoacyl-tRNA',
                width * 0.5, height * 0.93, '#333');
        } else if (resolvedStage === 'elongation') {
            this.addLabel('Peptide bond forms between P-site and A-site amino acids',
                width * 0.5, height * 0.93, '#E74C3C');
        } else if (resolvedStage === 'termination') {
            this.addLabel('Stop codon (UAA/UAG/UGA) triggers release factor binding',
                width * 0.5, height * 0.93, '#E74C3C');
        }
    }

    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${step} of 5`, width - 8, height - 4);

    if (showInset) {
        this.drawInset(width * 0.62, height * 0.06, width * 0.36, height * 0.26, insetType);
    }

    this.ctx.restore();
}

// ═══════════════════════════════════════════════════════════════════════════
// RNA STRUCTURE RENDERER
// ═══════════════════════════════════════════════════════════════════════════
renderRNAStructureDiagram(x, y, width, height, options = {}) {
    const {
        rnaType     = 'comparison',
        feature     = 'structure',
        drawingStep = 4,
        showLabels  = true,
        showInset   = false,
        insetType   = 'trna-3d-structure'
    } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    const stepLabels = [
        'Step 1 — mRNA Structure',
        'Step 2 — tRNA Cloverleaf',
        'Step 3 — rRNA & Ribosomal Role',
        'Step 4 — RNA Type Comparison'
    ];
    const stepTypes = ['mRNA', 'tRNA', 'rRNA', 'comparison'];
    const step = Math.max(1, Math.min(4, drawingStep));

    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.05);

    const resolvedType = step < 4 ? stepTypes[step - 1] : rnaType;

    const diagramY = height * 0.08;
    const diagramH = height * 0.84;

    AnatomicalShapes.drawRNAStructure(
        this.ctx, 0, diagramY, width, diagramH,
        resolvedType, feature
    );

    if (showLabels) {
        if (resolvedType === 'tRNA') {
            this.addLabel('tRNA carries amino acids to ribosome via anticodon–codon recognition',
                width * 0.5, height * 0.93, '#F39C12');
        } else if (resolvedType === 'mRNA') {
            this.addLabel("mRNA: 5' cap → 5' UTR → CDS → 3' UTR → Poly-A tail",
                width * 0.5, height * 0.93, '#9B59B6');
        } else if (resolvedType === 'rRNA') {
            this.addLabel('rRNA forms catalytic core of ribosome (peptidyl transferase activity)',
                width * 0.5, height * 0.93, '#2ECC71');
        }
    }

    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${step} of 4`, width - 8, height - 4);

    if (showInset) {
        this.drawInset(width * 0.62, height * 0.06, width * 0.36, height * 0.26, insetType);
    }

    this.ctx.restore();
}

// ═══════════════════════════════════════════════════════════════════════════
// CODON CHART RENDERER
// ═══════════════════════════════════════════════════════════════════════════
renderCodonChartDiagram(x, y, width, height, options = {}) {
    const {
        display   = 'table',
        feature   = 'standard',
        showInset = false,
        insetType = 'wobble-base-pairing'
    } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    const diagramY = height * 0.08;
    const diagramH = height * 0.84;

    AnatomicalShapes.drawCodonChart(
        this.ctx, 0, diagramY, width, diagramH,
        display, feature
    );

    // Bottom note
    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('64 codons → 20 amino acids + 3 stop codons (AUG = start/Met)',
        width / 2, height * 0.97);

    if (showInset) {
        this.drawInset(width * 0.62, height * 0.06, width * 0.36, height * 0.26, insetType);
    }

    this.ctx.restore();
}


// ═══════════════════════════════════════════════════════════════════════════
// CELLULAR RESPIRATION RENDERER
// ═══════════════════════════════════════════════════════════════════════════
renderCellularRespirationDiagram(x, y, width, height, options = {}) {
    const {
        stage       = 'complete',
        location    = 'mitochondria',
        drawingStep = 5,
        showLabels  = true,
        showInset   = false,
        insetType   = 'atp-yield-summary'
    } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    const stepLabels = [
        'Step 1 — Glycolysis (Cytoplasm)',
        'Step 2 — Pyruvate → Acetyl-CoA',
        'Step 3 — Krebs Cycle (Matrix)',
        'Step 4 — Electron Transport Chain',
        'Step 5 — Complete with ATP Totals'
    ];

    const step = Math.max(1, Math.min(5, drawingStep));

    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.05);

    // Map drawingStep to an appropriate stage string for AnatomicalShapes
    const stageMap = {
        1: 'glycolysis',
        2: 'glycolysis',         // pyruvate decarboxylation not a separate draw method; use glycolysis + annotation
        3: 'krebs-cycle',
        4: 'electron-transport',
        5: 'complete'
    };
    const resolvedStage = stage !== 'complete' ? stage : stageMap[step];

    // Content area below the step label
    const contentY = height * 0.07;
    const contentH = height * 0.86;

    AnatomicalShapes.drawCellularRespiration(
        this.ctx,
        0, contentY,
        width, contentH,
        resolvedStage,
        location
    );

    // Step 2 extra annotation: pyruvate decarboxylation bridge note
    if (step === 2 && showLabels) {
        this.ctx.save();
        this.ctx.fillStyle = 'rgba(231,76,60,0.10)';
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([6, 4]);
        this.ctx.beginPath();
        this.ctx.roundRect(width * 0.05, contentY + contentH * 0.35, width * 0.45, contentH * 0.18, 8);
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.setLineDash([]);
        this.ctx.font = 'bold 13px Arial';
        this.ctx.fillStyle = '#E74C3C';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Bridge Reaction: Pyruvate Decarboxylation',
            width * 0.275, contentY + contentH * 0.43);
        this.ctx.font = '11px Arial';
        this.ctx.fillStyle = '#34495E';
        this.ctx.fillText('Pyruvate + CoA + NAD⁺  →  Acetyl-CoA + CO₂ + NADH',
            width * 0.275, contentY + contentH * 0.48);
        this.ctx.fillText('Occurs in mitochondrial matrix | ×2 per glucose',
            width * 0.275, contentY + contentH * 0.52);
        this.ctx.restore();
    }

    // Step indicator
    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${step} of 5`, width - 8, height - 4);

    if (showInset) {
        this.drawInset(width * 0.68, height * 0.05, width * 0.30, height * 0.26, insetType);
    }

    this.ctx.restore();
}

// ═══════════════════════════════════════════════════════════════════════════
// ELECTRON TRANSPORT CHAIN RENDERER
// ═══════════════════════════════════════════════════════════════════════════
renderElectronTransportChainDiagram(x, y, width, height, options = {}) {
    const {
        complex   = 'complete',
        process   = 'overview',
        showLabels = true,
        showInset  = false,
        insetType  = 'q-cycle-detail'
    } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    const contentY = height * 0.06;
    const contentH = height * 0.88;

    AnatomicalShapes.drawElectronTransportChain(
        this.ctx,
        0, contentY,
        width, contentH,
        complex,
        process
    );

    if (showInset) {
        this.drawInset(width * 0.68, height * 0.04, width * 0.30, height * 0.28, insetType);
    }

    this.ctx.restore();
}

// ═══════════════════════════════════════════════════════════════════════════
// PHOTOSYNTHESIS RENDERER
// ═══════════════════════════════════════════════════════════════════════════
renderPhotosynthesisDiagram(x, y, width, height, options = {}) {
    const {
        reaction    = 'both',
        detail      = 'overview',
        drawingStep = 3,
        showLabels  = true,
        showInset   = false,
        insetType   = 'z-scheme'
    } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    const stepLabels = [
        'Step 1 — Light-Dependent Reactions',
        'Step 2 — Calvin Cycle (Carbon Fixation)',
        'Step 3 — Both Reactions Combined'
    ];

    const step = Math.max(1, Math.min(3, drawingStep));

    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.04);

    const reactionMap = {
        1: 'light-dependent',
        2: 'carbon-fixation',
        3: reaction !== 'both' ? reaction : 'both'
    };
    const resolvedReaction = reaction !== 'both' ? reaction : reactionMap[step];

    const contentY = height * 0.06;
    const contentH = height * 0.88;

    AnatomicalShapes.drawPhotosynthesisDetailed(
        this.ctx,
        0, contentY,
        width, contentH,
        resolvedReaction,
        detail
    );

    // Step indicator
    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${step} of 3`, width - 8, height - 4);

    if (showInset) {
        this.drawInset(width * 0.68, height * 0.04, width * 0.30, height * 0.26, insetType);
    }

    this.ctx.restore();
}

// ═══════════════════════════════════════════════════════════════════════════
// ATP STRUCTURE RENDERER
// ═══════════════════════════════════════════════════════════════════════════
renderATPStructureDiagram(x, y, width, height, options = {}) {
    const {
        view       = 'structure',
        process    = 'overview',
        showLabels = true,
        showInset  = false,
        insetType  = 'high-energy-bonds'
    } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    const contentY = height * 0.06;
    const contentH = height * 0.88;

    AnatomicalShapes.drawATPStructure(
        this.ctx,
        0, contentY,
        width, contentH,
        view,
        process
    );

    if (showInset) {
        this.drawInset(width * 0.68, height * 0.04, width * 0.30, height * 0.26, insetType);
    }

    this.ctx.restore();
}

// ═══════════════════════════════════════════════════════════════════════════
// MITOCHONDRION RENDERER
// ═══════════════════════════════════════════════════════════════════════════
renderMitochondrionDiagram(x, y, width, height, options = {}) {
    const {
        view       = 'complete',
        component  = 'overview',
        showLabels = true,
        showInset  = false,
        insetType  = 'cristae-surface-area'
    } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    const contentY = height * 0.06;
    const contentH = height * 0.88;

    AnatomicalShapes.drawMitochondrion(
        this.ctx,
        0, contentY,
        width, contentH,
        view,
        component
    );

    if (showInset) {
        this.drawInset(width * 0.68, height * 0.04, width * 0.30, height * 0.28, insetType);
    }

    this.ctx.restore();
}

// ═══════════════════════════════════════════════════════════════════════════
// CHLOROPLAST STRUCTURE RENDERER
// ═══════════════════════════════════════════════════════════════════════════
renderChloroplastStructureDiagram(x, y, width, height, options = {}) {
    const {
        view       = 'complete',
        component  = 'overview',
        showLabels = true,
        showInset  = false,
        insetType  = 'thylakoid-membrane-proteins'
    } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    const contentY = height * 0.06;
    const contentH = height * 0.88;

    AnatomicalShapes.drawChloroplastStructure(
        this.ctx,
        0, contentY,
        width, contentH,
        view,
        component
    );

    if (showInset) {
        this.drawInset(width * 0.68, height * 0.04, width * 0.30, height * 0.28, insetType);
    }

    this.ctx.restore();
}

// ═══════════════════════════════════════════════════════════════════════════
// IMMUNE RESPONSE — STEP-BY-STEP RENDERER
// Steps:
//   1 — Pathogen recognition
//   2 — Immune cell activation
//   3 — Effector response
//   4 — Memory cell formation
//   5 — Complete response overview
// ═══════════════════════════════════════════════════════════════════════════
renderImmuneResponseDiagram(x, y, width, height, options = {}) {
    const {
        responseType = 'both',
        drawingStep  = 5,
        showLabels   = true,
        showInset    = false,
        insetType    = 'mhc-presentation'
    } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    const step = Math.max(1, Math.min(5, drawingStep));

    const stepLabels = [
        'Step 1 — Pathogen Recognition',
        'Step 2 — Immune Cell Activation',
        'Step 3 — Effector Response',
        'Step 4 — Memory Cell Formation',
        'Step 5 — Complete Response Overview'
    ];
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.05);

    // Map drawingStep to stage string
    const stageMap = {
        1: 'recognition',
        2: 'activation',
        3: 'effector',
        4: 'memory',
        5: 'complete'
    };
    const stage = stageMap[step];

    // Delegate to AnatomicalShapes
    AnatomicalShapes.drawImmuneResponse(
        this.ctx,
        width * 0.02,
        height * 0.07,
        width * 0.96,
        height * 0.86,
        responseType,
        stage
    );

    if (showLabels && step === 5) {
        this.addLabel('Innate (fast, non-specific)',    width * 0.25, height * 0.96, '#FF8C00');
        this.addLabel('Adaptive (slow, specific)',      width * 0.72, height * 0.96, '#4169E1');
    }

    // Step indicator
    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${step} of 5`, width - 8, height - 4);

    if (showInset) {
        this.drawInset(width * 0.62, height * 0.05, width * 0.36, height * 0.28, insetType);
    }

    this.ctx.restore();
}

// ═══════════════════════════════════════════════════════════════════════════
// VACCINATION — STEP-BY-STEP RENDERER
// Steps:
//   1 — Administration
//   2 — Antigen recognition
//   3 — Primary immune response
//   4 — Memory formation
//   5 — Secondary response
// ═══════════════════════════════════════════════════════════════════════════
renderVaccinationDiagram(x, y, width, height, options = {}) {
    const {
        vaccineType = 'mrna',
        drawingStep = 5,
        showLabels  = true,
        showInset   = false,
        insetType   = 'antibody-titer'
    } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    const step = Math.max(1, Math.min(5, drawingStep));

    const stepLabels = [
        'Step 1 — Vaccine Administration',
        'Step 2 — Antigen Recognition',
        'Step 3 — Primary Immune Response',
        'Step 4 — Memory Cell Formation',
        'Step 5 — Secondary Response (Rapid & Stronger)'
    ];
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.05);

    const stageMap = {
        1: 'administration',
        2: 'recognition',
        3: 'primary-response',
        4: 'memory-formation',
        5: 'secondary-response'
    };
    const stage = stageMap[step];

    AnatomicalShapes.drawVaccination(
        this.ctx,
        width * 0.02,
        height * 0.07,
        width * 0.96,
        height * 0.86,
        vaccineType,
        stage
    );

    if (showLabels) {
        const typeLabel = {
            'live-attenuated': 'Live-Attenuated Vaccine',
            'inactivated':     'Inactivated Vaccine',
            'mrna':            'mRNA Vaccine'
        }[vaccineType] || vaccineType;
        this.addLabel(typeLabel, width * 0.5, height * 0.96, '#9370DB');
    }

    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${step} of 5`, width - 8, height - 4);

    if (showInset) {
        this.drawInset(width * 0.62, height * 0.05, width * 0.36, height * 0.28, insetType);
    }

    this.ctx.restore();
}

// ═══════════════════════════════════════════════════════════════════════════
// BLOOD CELLS — STEP-BY-STEP RENDERER
// Steps:
//   1 — Erythrocytes
//   2 — Platelets
//   3 — Leukocytes (overview)
//   4 — Neutrophil detail
//   5 — All cell types
// ═══════════════════════════════════════════════════════════════════════════
renderBloodCellsDiagram(x, y, width, height, options = {}) {
    const {
        cellType    = 'all',
        func        = 'structure',
        drawingStep = 5,
        showLabels  = true,
        showInset   = false,
        insetType   = 'wbc-differential'
    } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    const step = Math.max(1, Math.min(5, drawingStep));

    const stepLabels = [
        'Step 1 — Red Blood Cells (Erythrocytes)',
        'Step 2 — Platelets (Thrombocytes)',
        'Step 3 — White Blood Cells (Leukocytes)',
        'Step 4 — Neutrophil Detail',
        'Step 5 — All Blood Cell Types'
    ];
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.05);

    // Determine which cellType to render based on step when using step mode
    const stepCellMap = {
        1: 'erythrocytes',
        2: 'platelets',
        3: 'leukocytes',
        4: 'neutrophils',
        5: 'all'
    };
    // If caller explicitly set a cellType other than 'all', honour it; otherwise use step
    const resolvedCellType = (cellType !== 'all' || step === 5) ? cellType : stepCellMap[step];
    const resolvedCellType2 = (cellType === 'all' && step < 5) ? stepCellMap[step] : cellType;

    AnatomicalShapes.drawBloodCells(
        this.ctx,
        width * 0.02,
        height * 0.07,
        width * 0.96,
        height * 0.86,
        resolvedCellType2,
        func
    );

    if (showLabels) {
        const cellLabels = {
            all:         'All Blood Cell Types',
            erythrocytes:'Erythrocytes (RBCs) — O₂ transport, ~120-day lifespan',
            leukocytes:  'Leukocytes (WBCs) — Immune defence',
            platelets:   'Thrombocytes (Platelets) — Haemostasis & clotting',
            neutrophils: 'Neutrophils — Most abundant WBC, phagocytosis',
            lymphocytes: 'Lymphocytes — B & T cells, adaptive immunity',
            monocytes:   'Monocytes — Differentiate to macrophages/dendritic cells',
            eosinophils: 'Eosinophils — Parasites & allergy',
            basophils:   'Basophils — Histamine release, allergy'
        };
        this.addLabel(cellLabels[resolvedCellType2] || resolvedCellType2,
            width * 0.5, height * 0.96, '#DC143C');
    }

    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${step} of 5`, width - 8, height - 4);

    if (showInset) {
        this.drawInset(width * 0.62, height * 0.05, width * 0.36, height * 0.28, insetType);
    }

    this.ctx.restore();
}

// ═══════════════════════════════════════════════════════════════════════════
// ANTIBODY STRUCTURE — STEP-BY-STEP RENDERER
// Steps:
//   1 — Heavy chains & Fc stem
//   2 — Light chains added
//   3 — Variable regions highlighted
//   4 — Fab fragments
//   5 — Complete with antigen binding
// ═══════════════════════════════════════════════════════════════════════════
renderAntibodyStructureDiagram(x, y, width, height, options = {}) {
    const {
        region      = 'complete',
        type        = 'IgG',
        drawingStep = 5,
        showLabels  = true,
        showInset   = false,
        insetType   = 'isotype-comparison'
    } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    const step = Math.max(1, Math.min(5, drawingStep));

    const stepLabels = [
        'Step 1 — Heavy Chains & Fc Stem',
        'Step 2 — Light Chains',
        'Step 3 — Variable Regions (CDRs)',
        'Step 4 — Fab Fragments',
        'Step 5 — Complete Antibody with Antigen Binding'
    ];
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.05);

    // Map step to region highlight
    const stepRegionMap = {
        1: 'constant-region',
        2: 'constant-region',
        3: 'variable-region',
        4: 'fab',
        5: 'antigen-binding'
    };
    const resolvedRegion = (region !== 'complete') ? region : stepRegionMap[step];

    AnatomicalShapes.drawAntibodyStructure(
        this.ctx,
        width * 0.02,
        height * 0.07,
        width * 0.96,
        height * 0.86,
        resolvedRegion,
        type
    );

    if (showLabels) {
        // Region legend
        const regionDescriptions = {
            'constant-region':  'Constant Region (Fc) — same within isotype class',
            'variable-region':  'Variable Region (Fv) — unique antigen specificity',
            'fab':              'Fab — antigen-binding fragment',
            'antigen-binding':  'Antigen-Binding Site — lock-and-key specificity',
            'complete':         `${type} Immunoglobulin — complete structure`
        };
        this.addLabel(regionDescriptions[resolvedRegion] || `${type} Antibody`,
            width * 0.5, height * 0.96, '#4169E1');
    }

    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${step} of 5`, width - 8, height - 4);

    if (showInset) {
        this.drawInset(width * 0.62, height * 0.05, width * 0.36, height * 0.28, insetType);
    }

    this.ctx.restore();
}

// ═══════════════════════════════════════════════════════════════════════════
// PATHOGEN TYPES — STEP-BY-STEP RENDERER
// Steps:
//   1 — Bacteria
//   2 — Viruses
//   3 — Fungi
//   4 — Protozoa
//   5 — All pathogens
// ═══════════════════════════════════════════════════════════════════════════
renderPathogenTypesDiagram(x, y, width, height, options = {}) {
    const {
        pathogen        = 'all',
        characteristic  = 'structure',
        drawingStep     = 5,
        showLabels      = true,
        showInset       = false,
        insetType       = 'size-comparison'
    } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    const step = Math.max(1, Math.min(5, drawingStep));

    const stepLabels = [
        'Step 1 — Bacteria',
        'Step 2 — Viruses',
        'Step 3 — Fungi',
        'Step 4 — Protozoa',
        'Step 5 — All Pathogen Types'
    ];
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.05);

    const stepPathogenMap = {
        1: 'bacteria',
        2: 'viruses',
        3: 'fungi',
        4: 'protozoa',
        5: 'all'
    };
    const resolvedPathogen = (pathogen !== 'all' || step === 5) ? pathogen : stepPathogenMap[step];
    const resolvedPathogen2 = (pathogen === 'all' && step < 5) ? stepPathogenMap[step] : pathogen;

    AnatomicalShapes.drawPathogenTypes(
        this.ctx,
        width * 0.02,
        height * 0.07,
        width * 0.96,
        height * 0.86,
        resolvedPathogen2,
        characteristic
    );

    if (showLabels) {
        const charLabel = {
            structure:    `${resolvedPathogen2} — Structure`,
            reproduction: `${resolvedPathogen2} — Reproduction`,
            size:         `${resolvedPathogen2} — Size Comparison`
        }[characteristic] || characteristic;
        this.addLabel(charLabel, width * 0.5, height * 0.96, '#228B22');
    }

    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${step} of 5`, width - 8, height - 4);

    if (showInset) {
        this.drawInset(width * 0.62, height * 0.05, width * 0.36, height * 0.28, insetType);
    }

    this.ctx.restore();
}

// ═══════════════════════════════════════════════════════════════════════════
// INFLAMMATION — STEP-BY-STEP RENDERER
// Steps:
//   1 — Tissue damage & DAMPs
//   2 — Chemical mediator release
//   3 — Vasodilation & permeability
//   4 — Phagocyte recruitment
//   5 — Complete inflammation overview
// ═══════════════════════════════════════════════════════════════════════════
renderInflammationDiagram(x, y, width, height, options = {}) {
    const {
        stage       = 'complete',
        type        = 'acute',
        drawingStep = 5,
        showLabels  = true,
        showInset   = false,
        insetType   = 'cardinal-signs'
    } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    const step = Math.max(1, Math.min(5, drawingStep));

    const stepLabels = [
        'Step 1 — Tissue Damage & DAMPs',
        'Step 2 — Chemical Mediator Release',
        'Step 3 — Vasodilation & Increased Permeability',
        'Step 4 — Phagocyte Recruitment (Extravasation)',
        'Step 5 — Complete Inflammation Response'
    ];
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.05);

    const stepStageMap = {
        1: 'tissue-damage',
        2: 'chemical-signals',
        3: 'vasodilation',
        4: 'phagocyte-recruitment',
        5: 'complete'
    };
    const resolvedStage = (stage !== 'complete') ? stage : stepStageMap[step];

    AnatomicalShapes.drawInflammation(
        this.ctx,
        width * 0.02,
        height * 0.07,
        width * 0.96,
        height * 0.86,
        resolvedStage,
        type
    );

    if (showLabels) {
        const typeLabel = type === 'chronic'
            ? 'Chronic Inflammation — prolonged, risk of fibrosis'
            : 'Acute Inflammation — rapid onset, usually resolves';
        this.addLabel(typeLabel, width * 0.5, height * 0.96, '#FF6347');
    }

    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${step} of 5`, width - 8, height - 4);

    if (showInset) {
        this.drawInset(width * 0.62, height * 0.05, width * 0.36, height * 0.28, insetType);
    }

    this.ctx.restore();
}

// ═══════════════════════════════════════════════════════════════════════════
// DISEASE TRANSMISSION — STEP-BY-STEP RENDERER
// Steps:
//   1 — Initial infection
//   2 — Incubation period
//   3 — Vector acquisition & spread
//   4 — Pathogen development in vector
//   5 — Complete transmission cycle
// ═══════════════════════════════════════════════════════════════════════════
renderDiseaseTransmissionDiagram(x, y, width, height, options = {}) {
    const {
        diseaseType = 'malaria',
        stage       = 'complete',
        drawingStep = 5,
        showLabels  = true,
        showInset   = false,
        insetType   = 'r-naught'
    } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    const step = Math.max(1, Math.min(5, drawingStep));

    const stepLabels = [
        'Step 1 — Initial Infection',
        'Step 2 — Incubation Period',
        'Step 3 — Vector Acquisition & Spread',
        'Step 4 — Pathogen Development in Vector',
        'Step 5 — Complete Transmission Cycle'
    ];
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.05);

    const stepStageMap = {
        1: 'infection',
        2: 'incubation',
        3: 'transmission',
        4: 'vector-acquisition',
        5: 'complete'
    };
    const resolvedStage = (stage !== 'complete') ? stage : stepStageMap[step];

    AnatomicalShapes.drawDiseaseTransmission(
        this.ctx,
        width * 0.02,
        height * 0.07,
        width * 0.96,
        height * 0.86,
        diseaseType,
        resolvedStage
    );

    if (showLabels) {
        const diseaseLabel = {
            malaria: 'Malaria — Plasmodium spp. via Anopheles mosquito',
            dengue:  'Dengue Fever — DENV via Aedes mosquito',
            lyme:    'Lyme Disease — Borrelia burgdorferi via Ixodes tick',
            zika:    'Zika Virus — ZIKV via Aedes mosquito',
            plague:  'Plague — Yersinia pestis via flea',
            typhus:  'Typhus — Rickettsia via louse/flea'
        }[diseaseType] || diseaseType;
        this.addLabel(diseaseLabel, width * 0.5, height * 0.96, '#8B0000');
    }

    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${step} of 5`, width - 8, height - 4);

    if (showInset) {
        this.drawInset(width * 0.62, height * 0.05, width * 0.36, height * 0.28, insetType);
    }

    this.ctx.restore();
}


// ═══════════════════════════════════════════════════════════════════════════
// BACTERIA STRUCTURE — STEP-BY-STEP RENDERER
// Steps:
//   1 — Cell membrane only
//   2 — + Cell wall layer(s)
//   3 — + Nucleoid region & plasmids
//   4 — + Flagella & pili
//   5 — + Complete with all labels
// ═══════════════════════════════════════════════════════════════════════════
renderBacteriaStructureDiagram(x, y, width, height, options = {}) {
    const {
        type        = 'gram-negative',
        structure   = 'complete',
        drawingStep = 5,
        showLabels  = true,
        showInset   = false,
        insetType   = 'gram-stain-comparison'
    } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    const step = Math.max(1, Math.min(5, drawingStep));

    const stepLabels = [
        'Step 1 — Cell Membrane',
        'Step 2 — Cell Wall',
        'Step 3 — Nucleoid & Plasmids',
        'Step 4 — Flagella & Pili',
        'Step 5 — Complete Bacteria'
    ];
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.05);

    // If a specific isolated structure is requested, render just that panel
    if (structure !== 'complete') {
        AnatomicalShapes.drawBacteriaStructure(
            this.ctx, 0, height * 0.08, width, height * 0.86,
            type, structure
        );
        if (showLabels) {
            const names = {
                'cell-wall': 'Cell Wall Detail',
                'membrane':  'Cell Membrane (Phospholipid Bilayer)',
                'nucleoid':  'Nucleoid Region',
                'plasmids':  'Plasmids',
                'flagella':  'Flagellum Structure',
                'pili':      'Pili & Fimbriae'
            };
            this.addLabel(names[structure] || structure, width / 2, height * 0.97, '#7D3C98');
        }
        if (showInset) {
            this.drawInset(width * 0.62, height * 0.06, width * 0.36, height * 0.28, insetType);
        }
        this.ctx.restore();
        return;
    }

    // ── Layout constants ───────────────────────────────────────────────────
    const cellX = width  * 0.12;
    const cellY = height * 0.25;
    const cellW = width  * 0.76;
    const cellH = height * 0.48;

    const colors = {
        'gram-positive': { wall: '#9B59B6', membrane: '#E74C3C', cytoplasm: '#F9E79F' },
        'gram-negative': { wall: '#E91E63', membrane: '#E74C3C', cytoplasm: '#F9E79F', outer: '#C2185B' },
        'archaea':       { wall: '#3498DB', membrane: '#2980B9', cytoplasm: '#AED6F1' }
    };
    const color = colors[type] || colors['gram-negative'];

    // ── STEP 1 — Cell membrane (cytoplasm body + inner membrane) ─────────
    if (step >= 1) {
        // Cytoplasm fill
        const gradient = this.ctx.createRadialGradient(
            cellX + cellW * 0.5, cellY + cellH * 0.5, 0,
            cellX + cellW * 0.5, cellY + cellH * 0.5, cellW * 0.4
        );
        gradient.addColorStop(0, color.cytoplasm);
        gradient.addColorStop(1, AnatomicalShapes.darken(color.cytoplasm, 0.8));
        this.ctx.fillStyle = gradient;
        this.ctx.beginPath();
        this.ctx.ellipse(
            cellX + cellW * 0.5, cellY + cellH * 0.5,
            cellW * 0.45, cellH * 0.45, 0, 0, Math.PI * 2
        );
        this.ctx.fill();

        // Inner membrane (dashed)
        this.ctx.strokeStyle = color.membrane;
        this.ctx.lineWidth = 2.5;
        this.ctx.setLineDash([6, 3]);
        this.ctx.beginPath();
        this.ctx.ellipse(
            cellX + cellW * 0.5, cellY + cellH * 0.5,
            cellW * 0.44, cellH * 0.44, 0, 0, Math.PI * 2
        );
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        if (showLabels) {
            this.addLabel('Cell Membrane', cellX + cellW * 0.5, cellY + cellH + 18, color.membrane);
        }
    }

    // ── STEP 2 — Cell wall ────────────────────────────────────────────────
    if (step >= 2) {
        // Peptidoglycan wall
        this.ctx.strokeStyle = color.wall;
        this.ctx.lineWidth = type === 'gram-positive' ? 9 : 3.5;
        this.ctx.beginPath();
        this.ctx.ellipse(
            cellX + cellW * 0.5, cellY + cellH * 0.5,
            cellW * 0.46, cellH * 0.46, 0, 0, Math.PI * 2
        );
        this.ctx.stroke();

        // Outer membrane for gram-negative
        if (type === 'gram-negative' && color.outer) {
            this.ctx.strokeStyle = color.outer;
            this.ctx.lineWidth = 5;
            this.ctx.beginPath();
            this.ctx.ellipse(
                cellX + cellW * 0.5, cellY + cellH * 0.5,
                cellW * 0.48, cellH * 0.48, 0, 0, Math.PI * 2
            );
            this.ctx.stroke();
        }

        if (showLabels) {
            const wallLabel = type === 'gram-positive'
                ? 'Thick Peptidoglycan Wall'
                : type === 'gram-negative'
                    ? 'Thin Peptidoglycan + Outer Membrane'
                    : 'S-Layer / Pseudomurein';
            this.addLabel(wallLabel, cellX + cellW + 12, cellY + cellH * 0.3, color.wall, 'left');
        }
    }

    // ── STEP 3 — Nucleoid + plasmids ──────────────────────────────────────
    if (step >= 3) {
        const cx = cellX + cellW * 0.5;
        const cy = cellY + cellH * 0.5;

        // Nucleoid region
        this.ctx.fillStyle = '#5DADE2';
        this.ctx.globalAlpha = 0.55;
        this.ctx.beginPath();
        this.ctx.ellipse(cx, cy, cellW * 0.18, cellH * 0.18, 0, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.globalAlpha = 1;

        // Chromosome loops inside nucleoid
        this.ctx.strokeStyle = '#2471A3';
        this.ctx.lineWidth = 2;
        for (let loop = 0; loop < 2; loop++) {
            this.ctx.beginPath();
            for (let i = 0; i <= 60; i++) {
                const a = (i / 60) * Math.PI * 2;
                const r = cellW * (0.09 + loop * 0.05);
                const lx = cx + Math.cos(a) * r + Math.sin(i * 0.6) * cellW * 0.015;
                const ly = cy + Math.sin(a) * r * 0.6 + Math.cos(i * 0.6) * cellH * 0.015;
                i === 0 ? this.ctx.moveTo(lx, ly) : this.ctx.lineTo(lx, ly);
            }
            this.ctx.closePath();
            this.ctx.stroke();
        }

        // Plasmids
        this.ctx.strokeStyle = '#27AE60';
        this.ctx.lineWidth = 2.5;
        for (let i = 0; i < 3; i++) {
            const a = (i * Math.PI * 2) / 3;
            const px = cx + Math.cos(a) * cellW * 0.28;
            const py = cy + Math.sin(a) * cellH * 0.22;
            this.ctx.beginPath();
            this.ctx.arc(px, py, cellW * 0.035, 0, Math.PI * 2);
            this.ctx.stroke();
        }

        // Ribosomes
        this.ctx.fillStyle = '#34495E';
        for (let i = 0; i < 22; i++) {
            const a = Math.random() * Math.PI * 2;
            const r = Math.random() * cellW * 0.30;
            const rx = cx + Math.cos(a) * r;
            const ry = cy + Math.sin(a) * r * 0.8;
            this.ctx.beginPath();
            this.ctx.arc(rx, ry, 1.5, 0, Math.PI * 2);
            this.ctx.fill();
        }

        if (showLabels) {
            this.addLabel('Nucleoid',  cx - cellW * 0.22, cy - cellH * 0.22, '#2471A3', 'right');
            this.addLabel('Plasmids',  cx + cellW * 0.35, cy - cellH * 0.26, '#27AE60', 'left');
            this.addLabel('Ribosomes', cx - cellW * 0.42, cy + cellH * 0.10, '#34495E', 'right');
        }
    }

    // ── STEP 4 — Flagella + pili ──────────────────────────────────────────
    if (step >= 4) {
        // Left flagellum
        AnatomicalShapes.drawFlagellaOnCell(
            this.ctx, width, height,
            cellX, cellY + cellH * 0.5, 'left'
        );
        // Right flagellum
        AnatomicalShapes.drawFlagellaOnCell(
            this.ctx, width, height,
            cellX + cellW, cellY + cellH * 0.5, 'right'
        );

        // Pili around cell surface
        const cx = cellX + cellW * 0.5;
        const cy = cellY + cellH * 0.5;
        this.ctx.strokeStyle = '#95A5A6';
        this.ctx.lineWidth = 1.5;
        for (let i = 0; i < 10; i++) {
            const a = (i / 10) * Math.PI * 2;
            const sx = cx + Math.cos(a) * cellW * 0.46;
            const sy = cy + Math.sin(a) * cellH * 0.46;
            const ex = cx + Math.cos(a) * (cellW * 0.46 + width * 0.07);
            const ey = cy + Math.sin(a) * (cellH * 0.46 + height * 0.06);
            this.ctx.beginPath();
            this.ctx.moveTo(sx, sy);
            this.ctx.lineTo(ex, ey);
            this.ctx.stroke();
        }

        if (showLabels) {
            this.addLabel('Flagella',  cellX - 8, cellY + cellH * 0.18, '#95A5A6', 'right');
            this.addLabel('Pili',      cx, cellY - 16, '#95A5A6', 'center');
        }
    }

    // ── STEP 5 — Full labels + type annotation ────────────────────────────
    if (step >= 5) {
        const typeNames = {
            'gram-positive': 'Gram-Positive Bacterium',
            'gram-negative': 'Gram-Negative Bacterium',
            'archaea':       'Archaeon'
        };
        this.ctx.font = 'bold 13px Arial';
        this.ctx.fillStyle = color.wall;
        this.ctx.textAlign = 'center';
        this.ctx.fillText(typeNames[type] || type, width / 2, height * 0.91);

        // Gram-stain colour key
        const keyY = height * 0.95;
        this.ctx.font = '10px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        const desc = type === 'gram-positive'
            ? 'Thick peptidoglycan → retains crystal violet (purple)'
            : type === 'gram-negative'
                ? 'Thin peptidoglycan + outer membrane → counterstain (pink/red)'
                : 'Unique membrane lipids; no peptidoglycan';
        this.ctx.fillText(desc, width / 2, keyY);
    }

    // Step indicator
    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${step} of 5`, width - 8, height - 4);

    if (showInset) {
        this.drawInset(width * 0.62, height * 0.06, width * 0.36, height * 0.28, insetType);
    }

    this.ctx.restore();
}

// ═══════════════════════════════════════════════════════════════════════════
// VIRUS STRUCTURE — STEP-BY-STEP RENDERER
// Steps:
//   1 — Nucleic acid genome
//   2 — + Capsid / protein coat
//   3 — + Envelope (lipid bilayer, if present)
//   4 — + Spike / surface proteins
//   5 — + Complete with all labels
// ═══════════════════════════════════════════════════════════════════════════
renderVirusStructureDiagram(x, y, width, height, options = {}) {
    const {
        type        = 'bacteriophage',
        component   = 'complete',
        drawingStep = 5,
        showLabels  = true,
        showInset   = false,
        insetType   = 'lytic-vs-lysogenic'
    } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    const step = Math.max(1, Math.min(5, drawingStep));

    const stepLabels = [
        'Step 1 — Nucleic Acid (Genome)',
        'Step 2 — Capsid / Protein Coat',
        'Step 3 — Viral Envelope',
        'Step 4 — Spike / Surface Proteins',
        'Step 5 — Complete Virus'
    ];
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.05);

    // If a specific isolated component is requested
    if (component !== 'complete') {
        AnatomicalShapes.drawVirusStructure(
            this.ctx, 0, height * 0.08, width, height * 0.86,
            type, component
        );
        if (showLabels) {
            const names = {
                'capsid':         'Viral Capsid (Protein Coat)',
                'envelope':       'Viral Envelope (Lipid Bilayer)',
                'spike-proteins': 'Spike Glycoproteins',
                'nucleic-acid':   'Viral Genome (DNA / RNA)',
                'enzymes':        'Viral Enzymes'
            };
            this.addLabel(names[component] || component, width / 2, height * 0.97, '#2980B9');
        }
        if (showInset) {
            this.drawInset(width * 0.62, height * 0.06, width * 0.36, height * 0.28, insetType);
        }
        this.ctx.restore();
        return;
    }

    // ── Layout constants ───────────────────────────────────────────────────
    const colors = {
        bacteriophage:   { capsid: '#3498DB', tail: '#2980B9', fiber: '#1F618D' },
        enveloped:       { capsid: '#E74C3C', envelope: '#C0392B', spike: '#A93226' },
        'non-enveloped': { capsid: '#27AE60', protein: '#229954' },
        retrovirus:      { capsid: '#9B59B6', envelope: '#8E44AD', spike: '#7D3C98', rna: '#E74C3C' }
    };
    const color = colors[type] || colors.bacteriophage;
    const isBacteriophage = type === 'bacteriophage';
    const isEnveloped     = type === 'enveloped' || type === 'retrovirus';

    // Bacteriophage geometry
    const headCX   = width  * 0.50;
    const headCY   = height * 0.22;
    const headR    = width  * 0.13;
    const tailTop  = headCY + headR + height * 0.04;
    const tailH    = height * 0.32;
    const tailBotY = tailTop + tailH;

    // Spherical-virus geometry
    const sphereCX = width  * 0.50;
    const sphereCY = height * 0.48;
    const sphereR  = width  * 0.22;

    // ── STEP 1 — Nucleic acid ─────────────────────────────────────────────
    if (step >= 1) {
        if (isBacteriophage) {
            // Coiled DNA inside head silhouette (grey placeholder head)
            this.ctx.fillStyle = 'rgba(220,230,240,0.5)';
            this.ctx.beginPath();
            this.ctx.arc(headCX, headCY, headR, 0, Math.PI * 2);
            this.ctx.fill();

            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.lineWidth = 2;
            for (let r = 1; r <= 3; r++) {
                this.ctx.beginPath();
                this.ctx.arc(headCX, headCY, headR * (r / 3.5), 0, Math.PI * 2);
                this.ctx.stroke();
            }
            if (showLabels) this.addLabel('dsDNA Genome', headCX, headCY + headR + 14, '#E74C3C');
        } else {
            // RNA/DNA spiral inside ghosted sphere
            this.ctx.fillStyle = 'rgba(220,230,240,0.3)';
            this.ctx.beginPath();
            this.ctx.arc(sphereCX, sphereCY, sphereR, 0, Math.PI * 2);
            this.ctx.fill();

            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.lineWidth = 2.5;
            const strandCount = type === 'retrovirus' ? 2 : 1;
            for (let s = 0; s < strandCount; s++) {
                this.ctx.beginPath();
                for (let i = 0; i <= 50; i++) {
                    const a = (i / 50) * Math.PI * 2;
                    const r = sphereR * 0.38 + s * sphereR * 0.08;
                    const lx = sphereCX + Math.cos(a) * r + Math.sin(i * 0.5) * sphereR * 0.06;
                    const ly = sphereCY + Math.sin(a) * r + Math.cos(i * 0.5) * sphereR * 0.06;
                    i === 0 ? this.ctx.moveTo(lx, ly) : this.ctx.lineTo(lx, ly);
                }
                this.ctx.stroke();
            }
            const genomeLabel = type === 'retrovirus' ? 'ssRNA Genome (×2)' : 'Viral Genome';
            if (showLabels) this.addLabel(genomeLabel, sphereCX, sphereCY + sphereR + 14, '#E74C3C');
        }
    }

    // ── STEP 2 — Capsid ───────────────────────────────────────────────────
    if (step >= 2) {
        if (isBacteriophage) {
            // Icosahedral head
            this.ctx.fillStyle = color.capsid;
            AnatomicalShapes.drawIcosahedron(this.ctx, headCX, headCY, headR);

            // Collar
            this.ctx.fillStyle = color.tail;
            this.ctx.fillRect(headCX - width * 0.04, headCY + headR, width * 0.08, height * 0.04);

            // Tail sheath
            const tailGrad = this.ctx.createLinearGradient(0, tailTop, 0, tailBotY);
            tailGrad.addColorStop(0, color.tail);
            tailGrad.addColorStop(1, AnatomicalShapes.darken(color.tail, 0.7));
            this.ctx.fillStyle = tailGrad;
            this.ctx.fillRect(headCX - width * 0.03, tailTop, width * 0.06, tailH);

            // Striations
            this.ctx.strokeStyle = AnatomicalShapes.darken(color.tail, 0.6);
            this.ctx.lineWidth = 1.5;
            for (let i = 0; i < 8; i++) {
                const ry = tailTop + (i / 7) * tailH;
                this.ctx.beginPath();
                this.ctx.moveTo(headCX - width * 0.035, ry);
                this.ctx.lineTo(headCX + width * 0.035, ry);
                this.ctx.stroke();
            }

            // Baseplate
            this.ctx.fillStyle = color.fiber;
            this.ctx.beginPath();
            this.ctx.moveTo(headCX, tailBotY);
            this.ctx.lineTo(headCX - width * 0.07, tailBotY + height * 0.03);
            this.ctx.lineTo(headCX + width * 0.07, tailBotY + height * 0.03);
            this.ctx.closePath();
            this.ctx.fill();

            if (showLabels) {
                this.addLabel('Icosahedral Head\n(Capsid)', headCX + headR + 10, headCY, color.capsid, 'left');
                this.addLabel('Tail Sheath',                headCX + width * 0.05, tailTop + tailH * 0.4, color.tail, 'left');
                this.addLabel('Baseplate',                  headCX + width * 0.08, tailBotY + height * 0.015, color.fiber, 'left');
            }
        } else {
            // Protein capsid (inner sphere)
            this.ctx.fillStyle = color.capsid;
            this.ctx.globalAlpha = 0.75;
            this.ctx.beginPath();
            this.ctx.arc(sphereCX, sphereCY, sphereR * 0.68, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.globalAlpha = 1;

            this.ctx.strokeStyle = AnatomicalShapes.darken(color.capsid, 0.75);
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.arc(sphereCX, sphereCY, sphereR * 0.68, 0, Math.PI * 2);
            this.ctx.stroke();

            if (showLabels) this.addLabel('Capsid', sphereCX - sphereR * 0.68 - 10, sphereCY, color.capsid, 'right');
        }
    }

    // ── STEP 3 — Envelope ─────────────────────────────────────────────────
    if (step >= 3) {
        if (!isBacteriophage && isEnveloped) {
            const envGrad = this.ctx.createRadialGradient(
                sphereCX, sphereCY, sphereR * 0.68,
                sphereCX, sphereCY, sphereR
            );
            envGrad.addColorStop(0, `${color.envelope}99`);
            envGrad.addColorStop(1, color.envelope);
            this.ctx.fillStyle = envGrad;
            this.ctx.beginPath();
            this.ctx.arc(sphereCX, sphereCY, sphereR, 0, Math.PI * 2);
            this.ctx.fill();

            // Host-derived lipid annotation
            this.ctx.strokeStyle = AnatomicalShapes.darken(color.envelope, 0.75);
            this.ctx.lineWidth = 2.5;
            this.ctx.beginPath();
            this.ctx.arc(sphereCX, sphereCY, sphereR, 0, Math.PI * 2);
            this.ctx.stroke();

            if (showLabels) this.addLabel('Lipid Envelope\n(host-derived)', sphereCX, sphereCY - sphereR - 12, color.envelope);
        } else if (!isBacteriophage) {
            // Non-enveloped — note no envelope
            if (showLabels) this.addLabel('No Envelope\n(naked capsid)', sphereCX, sphereCY - sphereR * 0.68 - 12, '#7F8C8D');
        }
    }

    // ── STEP 4 — Spike / surface proteins ────────────────────────────────
    if (step >= 4) {
        if (isBacteriophage) {
            // Tail fibers
            this.ctx.strokeStyle = color.fiber;
            this.ctx.lineWidth = 3;
            for (let i = 0; i < 6; i++) {
                const a = (i / 6) * Math.PI * 2;
                const bx = headCX + Math.cos(a) * width  * 0.06;
                const by = tailBotY + height * 0.03;
                const ex = headCX + Math.cos(a) * width  * 0.18;
                const ey = by + height * 0.09;
                this.ctx.beginPath();
                this.ctx.moveTo(bx, by);
                this.ctx.lineTo(ex, ey);
                this.ctx.stroke();
                // Tip
                this.ctx.fillStyle = '#E74C3C';
                this.ctx.beginPath();
                this.ctx.arc(ex, ey, width * 0.013, 0, Math.PI * 2);
                this.ctx.fill();
            }
            // Central tail tube
            this.ctx.strokeStyle = '#BDC3C7';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.moveTo(headCX, tailTop);
            this.ctx.lineTo(headCX, tailBotY);
            this.ctx.stroke();

            if (showLabels) this.addLabel('Tail Fibers\n(host recognition)', headCX - width * 0.2, tailBotY + height * 0.07, color.fiber, 'right');
        } else {
            // Spike glycoproteins
            const spikeColor = color.spike || color.capsid;
            for (let i = 0; i < 22; i++) {
                const a = (i / 22) * Math.PI * 2;
                const sx = sphereCX + Math.cos(a) * sphereR;
                const sy = sphereCY + Math.sin(a) * sphereR;
                const ex = sphereCX + Math.cos(a) * (sphereR + width * 0.05);
                const ey = sphereCY + Math.sin(a) * (sphereR + width * 0.05);
                this.ctx.strokeStyle = spikeColor;
                this.ctx.lineWidth = 3;
                this.ctx.beginPath();
                this.ctx.moveTo(sx, sy);
                this.ctx.lineTo(ex, ey);
                this.ctx.stroke();
                this.ctx.fillStyle = spikeColor;
                this.ctx.beginPath();
                this.ctx.arc(ex, ey, width * 0.012, 0, Math.PI * 2);
                this.ctx.fill();
            }
            if (showLabels) this.addLabel('Spike Glycoproteins', sphereCX + sphereR + width * 0.06 + 6, sphereCY, spikeColor, 'left');
        }
    }

    // ── STEP 5 — Full labels ──────────────────────────────────────────────
    if (step >= 5) {
        const typeNames = {
            bacteriophage:   'Bacteriophage (T4-type)',
            enveloped:       'Enveloped Virus',
            'non-enveloped': 'Non-Enveloped (Naked) Virus',
            retrovirus:      'Retrovirus (e.g. HIV)'
        };
        this.ctx.font = 'bold 13px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(typeNames[type] || type, width / 2, height * 0.92);

        this.ctx.font = '10px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        const desc = {
            bacteriophage:   'Infects bacteria; dsDNA; complex symmetry',
            enveloped:       'Lipid envelope from host; glycoprotein spikes',
            'non-enveloped': 'Icosahedral capsid only; stable in environment',
            retrovirus:      'ssRNA → dsDNA via reverse transcriptase; integrates into host genome'
        }[type] || '';
        this.ctx.fillText(desc, width / 2, height * 0.96);
    }

    // Step indicator
    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${step} of 5`, width - 8, height - 4);

    if (showInset) {
        this.drawInset(width * 0.62, height * 0.06, width * 0.36, height * 0.28, insetType);
    }

    this.ctx.restore();
}


// ═══════════════════════════════════════════════════════════════════════════
// FUNGAL CELL — STEP-BY-STEP RENDERER
// Steps:
//   1 — Chitin cell wall & membrane
//   2 — + Nucleus & organelles
//   3 — + Hyphal filaments
//   4 — + Mycelium network
//   5 — + Fruiting body (complete)
// ═══════════════════════════════════════════════════════════════════════════
renderFungalCellDiagram(x, y, width, height, options = {}) {
    const {
        structure   = 'cell',
        form        = 'yeast',
        drawingStep = 5,
        showLabels  = true,
        showInset   = false,
        insetType   = 'chitin-wall-detail'
    } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    const step = Math.max(1, Math.min(5, drawingStep));

    const stepLabels = [
        'Step 1 — Chitin Cell Wall & Membrane',
        'Step 2 — Nucleus & Organelles',
        'Step 3 — Hyphal Filaments',
        'Step 4 — Mycelium Network',
        'Step 5 — Fruiting Body (Complete)'
    ];
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.05);

    // If an isolated structure panel is requested
    if (structure !== 'cell' || step >= 3) {
        // For steps 3–5 or explicit non-cell structures, delegate to AnatomicalShapes
        const targetStructure = step === 3 ? 'hyphae'
            : step === 4 ? 'mycelium'
            : step === 5 ? 'fruiting-body'
            : structure;

        AnatomicalShapes.drawFungalCell(
            this.ctx, 0, height * 0.08, width, height * 0.86,
            targetStructure, form
        );

        if (showLabels) {
            const names = {
                'cell':         form === 'yeast' ? 'Yeast Cell (with Budding)' : 'Mold Hyphal Cell',
                'hyphae':       'Septate Hyphae',
                'mycelium':     'Mycelium Network',
                'fruiting-body':'Fruiting Body (Basidiomycete)'
            };
            this.addLabel(names[targetStructure] || targetStructure, width / 2, height * 0.97, '#8D6E63');
        }

        if (showLabels && targetStructure === 'cell') {
            if (form === 'yeast') {
                this.addLabel('Bud',             width * 0.74, height * 0.34, '#8D6E63', 'left');
                this.addLabel('Vacuole',         width * 0.65, height * 0.72, '#AED6F1', 'left');
                this.addLabel('Nucleus',         width * 0.38, height * 0.38, '#9B59B6', 'right');
                this.addLabel('Mitochondria',    width * 0.32, height * 0.72, '#E67E22', 'right');
                this.addLabel('Chitin Wall',     width * 0.32, height * 0.88, '#8D6E63', 'right');
            } else {
                this.addLabel('Septum',   width * 0.35, height * 0.38, '#8D6E63', 'center');
                this.addLabel('Nuclei',   width * 0.50, height * 0.62, '#9B59B6', 'center');
            }
        }

        if (showInset) {
            this.drawInset(width * 0.62, height * 0.06, width * 0.36, height * 0.28, insetType);
        }
        this.ctx.restore();
        return;
    }

    // ── Steps 1 & 2 — cell-level build-up ────────────────────────────────
    const colors = {
        wall:      '#8D6E63',
        membrane:  '#E74C3C',
        cytoplasm: '#F9E79F',
        nucleus:   '#9B59B6',
        vacuole:   '#AED6F1'
    };

    const cx = width  * 0.50;
    const cy = height * 0.52;
    const rx = width  * 0.22;   // horizontal radius
    const ry = height * 0.28;   // vertical radius

    // ── STEP 1 — Wall + membrane ──────────────────────────────────────────
    if (step >= 1) {
        // Cytoplasm body
        const grad = this.ctx.createRadialGradient(cx, cy, 0, cx, cy, rx);
        grad.addColorStop(0, colors.cytoplasm);
        grad.addColorStop(1, AnatomicalShapes.darken(colors.cytoplasm, 0.82));
        this.ctx.fillStyle = grad;
        this.ctx.beginPath();
        this.ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
        this.ctx.fill();

        // Chitin wall (thick)
        this.ctx.strokeStyle = colors.wall;
        this.ctx.lineWidth = 7;
        this.ctx.beginPath();
        this.ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
        this.ctx.stroke();

        // Cell membrane (dashed)
        this.ctx.strokeStyle = colors.membrane;
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([5, 3]);
        this.ctx.beginPath();
        this.ctx.ellipse(cx, cy, rx * 0.94, ry * 0.94, 0, 0, Math.PI * 2);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        if (showLabels) {
            this.addLabel('Chitin Cell Wall',  cx + rx + 10, cy - ry * 0.3, colors.wall,     'left');
            this.addLabel('Cell Membrane',     cx + rx + 10, cy + ry * 0.1, colors.membrane, 'left');
            this.addLabel('Cytoplasm',         cx,           cy,            '#C8A400',        'center');
        }
    }

    // ── STEP 2 — Nucleus + organelles ────────────────────────────────────
    if (step >= 2) {
        // Nucleus
        this.ctx.fillStyle = colors.nucleus;
        this.ctx.globalAlpha = 0.62;
        this.ctx.beginPath();
        this.ctx.arc(cx, cy - ry * 0.15, rx * 0.28, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.globalAlpha = 1;

        // Nucleolus
        this.ctx.fillStyle = AnatomicalShapes.darken(colors.nucleus, 0.7);
        this.ctx.beginPath();
        this.ctx.arc(cx, cy - ry * 0.15, rx * 0.10, 0, Math.PI * 2);
        this.ctx.fill();

        // Vacuole
        this.ctx.fillStyle = colors.vacuole;
        this.ctx.globalAlpha = 0.55;
        this.ctx.beginPath();
        this.ctx.arc(cx + rx * 0.35, cy + ry * 0.30, rx * 0.20, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.globalAlpha = 1;

        // Mitochondria
        this.ctx.fillStyle = '#E67E22';
        for (let i = 0; i < 4; i++) {
            const a = (i / 4) * Math.PI * 2;
            const mx = cx + Math.cos(a) * rx * 0.55;
            const my = cy + Math.sin(a) * ry * 0.55;
            this.ctx.beginPath();
            this.ctx.ellipse(mx, my, rx * 0.10, rx * 0.05, a, 0, Math.PI * 2);
            this.ctx.fill();
        }

        // Budding daughter cell
        this.ctx.fillStyle = AnatomicalShapes.darken(colors.cytoplasm, 0.92);
        this.ctx.beginPath();
        this.ctx.arc(cx + rx * 0.85, cy - ry * 0.45, rx * 0.32, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = colors.wall;
        this.ctx.lineWidth = 5;
        this.ctx.beginPath();
        this.ctx.arc(cx + rx * 0.85, cy - ry * 0.45, rx * 0.32, 0, Math.PI * 2);
        this.ctx.stroke();
        // Bud scar
        this.ctx.strokeStyle = AnatomicalShapes.darken(colors.wall, 0.6);
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.arc(cx + rx * 0.53, cy - ry * 0.27, rx * 0.06, 0, Math.PI * 2);
        this.ctx.stroke();

        if (showLabels) {
            this.addLabel('Nucleus',        cx - rx * 0.35, cy - ry * 0.35, colors.nucleus,  'right');
            this.addLabel('Nucleolus',      cx - rx * 0.35, cy - ry * 0.18, '#6C3483',       'right');
            this.addLabel('Vacuole',        cx + rx * 0.65, cy + ry * 0.42, colors.vacuole,  'left');
            this.addLabel('Mitochondria',   cx - rx * 0.75, cy + ry * 0.42, '#E67E22',       'right');
            this.addLabel('Bud',            cx + rx + 30,   cy - ry * 0.45, colors.wall,     'left');
        }
    }

    // Step indicator
    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${step} of 5`, width - 8, height - 4);

    if (showInset) {
        this.drawInset(width * 0.62, height * 0.06, width * 0.36, height * 0.28, insetType);
    }

    this.ctx.restore();
}


// ═══════════════════════════════════════════════════════════════════════════
// PROTISTS — STEP-BY-STEP RENDERER
// Steps:
//   1 — Amoeba (pseudopodia)
//   2 — + Paramecium (cilia)
//   3 — + Euglena (flagellum & eyespot)
//   4 — + Diatom (silica frustule)
//   5 — Full diversity overview (all protists)
// ═══════════════════════════════════════════════════════════════════════════
renderProtistsDiagram(x, y, width, height, options = {}) {
    const {
        protistType = 'all',
        feature     = 'structure',
        drawingStep = 5,
        showLabels  = true,
        showInset   = false,
        insetType   = 'axoneme-9plus2'
    } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    const step = Math.max(1, Math.min(5, drawingStep));

    const stepLabels = [
        'Step 1 — Amoeba (Pseudopodia)',
        'Step 2 — Paramecium (Cilia)',
        'Step 3 — Euglena (Flagellum & Eyespot)',
        'Step 4 — Diatom (Silica Frustule)',
        'Step 5 — Protist Diversity Overview'
    ];
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.05);

    // If a specific protist type is requested (not 'all'), render just that
    if (protistType !== 'all') {
        AnatomicalShapes.drawProtists(
            this.ctx, 0, height * 0.08, width, height * 0.86,
            protistType, feature
        );
        if (showLabels) {
            const names = {
                amoeba:      'Amoeba proteus — pseudopodia locomotion',
                paramecium:  'Paramecium — cilia locomotion & oral groove',
                euglena:     'Euglena — flagellum, eyespot & chloroplasts',
                volvox:      'Volvox — colonial flagellate with daughter colonies',
                diatom:      'Diatom — silica frustule & golden chloroplasts',
                plasmodium:  'Plasmodium — malaria parasite life stages'
            };
            this.addLabel(names[protistType] || protistType, width / 2, height * 0.97, '#2C3E50');
        }
        if (showInset) {
            this.drawInset(width * 0.62, height * 0.06, width * 0.36, height * 0.28, insetType);
        }
        this.ctx.restore();
        return;
    }

    // ── Step-by-step progressive reveal in quadrant layout ───────────────
    // Quadrant positions (top-left, top-right, bottom-left, bottom-right)
    const quadrants = [
        { key: 'amoeba',     label: 'Amoeba',     x: 0.02,  y: 0.08, w: 0.45, h: 0.40, showFrom: 1 },
        { key: 'paramecium', label: 'Paramecium', x: 0.52,  y: 0.08, w: 0.45, h: 0.40, showFrom: 2 },
        { key: 'euglena',    label: 'Euglena',    x: 0.02,  y: 0.52, w: 0.45, h: 0.40, showFrom: 3 },
        { key: 'diatom',     label: 'Diatom',     x: 0.52,  y: 0.52, w: 0.45, h: 0.40, showFrom: 4 }
    ];

    quadrants.forEach(q => {
        if (step < q.showFrom) return;

        const qx = width  * q.x;
        const qy = height * q.y;
        const qw = width  * q.w;
        const qh = height * q.h;

        // Subtle background panel
        this.ctx.fillStyle = 'rgba(240,248,255,0.6)';
        this.ctx.strokeStyle = '#BDC3C7';
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.roundRect(qx, qy, qw, qh, 6);
        this.ctx.fill();
        this.ctx.stroke();

        // Render the protist inside the quadrant
        AnatomicalShapes.drawProtists(
            this.ctx, qx, qy, qw, qh,
            q.key, feature
        );

        if (showLabels) {
            this.ctx.font = 'bold 11px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(q.label, qx + qw / 2, qy + qh + 13);
        }
    });

    // Step 5 — title bar + locomotion key
    if (step >= 5) {
        this.ctx.font = 'bold 13px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Protist Diversity — Unicellular Eukaryotes', width / 2, height * 0.96);

        // Quick locomotion key
        const key = [
            { label: 'Pseudopodia',    color: '#DAA520' },
            { label: 'Cilia',          color: '#2E8B57' },
            { label: 'Flagellum',      color: '#32CD32' },
            { label: 'Non-motile',     color: '#B8860B' }
        ];
        key.forEach((k, i) => {
            const kx = width * (0.10 + i * 0.22);
            const ky = height * 0.985;
            this.ctx.fillStyle = k.color;
            this.ctx.beginPath();
            this.ctx.arc(kx - 18, ky - 4, 4, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.font = '9px Arial';
            this.ctx.fillStyle = '#555';
            this.ctx.textAlign = 'left';
            this.ctx.fillText(k.label, kx - 12, ky);
        });
    }

    // Step indicator
    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${step} of 5`, width - 8, height - 4);

    if (showInset) {
        this.drawInset(width * 0.62, height * 0.06, width * 0.36, height * 0.28, insetType);
    }

    this.ctx.restore();
}


// ═══════════════════════════════════════════════════════════════════════════
// FOOD WEB — STEP-BY-STEP RENDERER
// Steps:
//   1 — Producers only (bottom trophic level)
//   2 — + Primary consumers
//   3 — + Secondary consumers
//   4 — + Tertiary consumers
//   5 — + Decomposers + all connecting arrows + labels
// ═══════════════════════════════════════════════════════════════════════════
renderFoodWebDiagram(x, y, width, height, options = {}) {
    const {
        trophicLevel = 'complete',
        ecosystem    = 'terrestrial',
        drawingStep  = 5,
        showLabels   = true,
        showInset    = false,
        insetType    = 'energy-flow'
    } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    const step = Math.max(1, Math.min(5, drawingStep));

    const stepLabels = [
        'Step 1 — Producers (Base of Food Web)',
        'Step 2 — + Primary Consumers (Herbivores)',
        'Step 3 — + Secondary Consumers (Carnivores)',
        'Step 4 — + Tertiary Consumers (Apex Predators)',
        'Step 5 — + Decomposers & Feeding Connections'
    ];
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.05);

    // ── Layout constants ───────────────────────────────────────────────────
    // Five horizontal rows, evenly spaced within the canvas.
    // Each row holds up to 3 organism nodes.
    const nodeW = width  * 0.14;
    const nodeH = height * 0.07;

    // Row Y positions (top to bottom: producers → decomposers)
    const rowY = {
        producers:   height * 0.14,
        primary:     height * 0.30,
        secondary:   height * 0.47,
        tertiary:    height * 0.63,
        decomposers: height * 0.80
    };

    // Node X positions — three columns
    const colX = [width * 0.18, width * 0.50, width * 0.82];

    // Color palette
    const colors = {
        producer:        { base: '#2ECC40', light: '#5EEC60', dark: '#1A9929' },
        primaryConsumer: { base: '#FF851B', light: '#FFA54B', dark: '#C86500' },
        secondary:       { base: '#0074D9', light: '#3094F9', dark: '#005099' },
        tertiary:        { base: '#B10DC9', light: '#D13DE9', dark: '#810DA9' },
        decomposer:      { base: '#85144b', light: '#A5345b', dark: '#65042b' }
    };

    // Label data per trophic level
    const terrestrialLabels = {
        producers:   ['Grass',      'Trees',    'Shrubs'],
        primary:     ['Rabbit',     'Deer',     'Grasshopper'],
        secondary:   ['Snake',      'Fox',      'Bird'],
        tertiary:    ['Hawk',       'Wolf',     null],
        decomposers: ['Bacteria',   'Fungi',    'Earthworms']
    };
    const aquaticLabels = {
        producers:   ['Phytoplankton', 'Algae',    'Kelp'],
        primary:     ['Zooplankton',   'Shrimp',   'Small Fish'],
        secondary:   ['Medium Fish',   'Squid',    'Seal'],
        tertiary:    ['Shark',         'Killer Whale', null],
        decomposers: ['Bacteria',      'Fungi',    'Crustaceans']
    };
    const labels = ecosystem === 'aquatic' ? aquaticLabels : terrestrialLabels;

    // Helper: draw one organism node (ellipse + text)
    const drawNode = (cx, cy, color, name) => {
        if (!name) return;
        const grad = this.ctx.createRadialGradient(cx, cy, 0, cx, cy, nodeW / 2);
        grad.addColorStop(0, color.light);
        grad.addColorStop(0.7, color.base);
        grad.addColorStop(1, color.dark);
        this.ctx.fillStyle = grad;
        this.ctx.beginPath();
        this.ctx.ellipse(cx, cy, nodeW / 2, nodeH / 2, 0, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = color.dark;
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
        if (showLabels) {
            this.ctx.fillStyle = '#FFF';
            this.ctx.font = `bold ${Math.round(height * 0.025)}px Arial`;
            this.ctx.textAlign = 'center';
            this.ctx.fillText(name, cx, cy + height * 0.009);
        }
    };

    // Helper: draw dashed arrow between two rows
    const drawFeedingArrow = (x1, y1, x2, y2, color) => {
        this.ctx.save();
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = 1.5;
        this.ctx.setLineDash([5, 4]);
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1 + nodeH / 2);
        this.ctx.lineTo(x2, y2 - nodeH / 2);
        this.ctx.stroke();
        this.ctx.setLineDash([]);
        // Arrowhead
        const angle = Math.atan2((y2 - nodeH / 2) - (y1 + nodeH / 2), x2 - x1);
        const hs = 7;
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.moveTo(x2, y2 - nodeH / 2);
        this.ctx.lineTo(x2 - hs * Math.cos(angle - Math.PI / 6),
                        (y2 - nodeH / 2) - hs * Math.sin(angle - Math.PI / 6));
        this.ctx.lineTo(x2 - hs * Math.cos(angle + Math.PI / 6),
                        (y2 - nodeH / 2) - hs * Math.sin(angle + Math.PI / 6));
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.restore();
    };

    // ── STEP 1 — Producers ─────────────────────────────────────────────────
    if (step >= 1) {
        colX.forEach((cx, i) => {
            drawNode(cx, rowY.producers, colors.producer, labels.producers[i]);
        });
        if (showLabels) {
            this.addLabel('PRODUCERS', width * 0.04, rowY.producers + height * 0.008,
                '#1A9929', 'left');
            // Sun icon to indicate photosynthesis
            this.ctx.fillStyle = '#FFD700';
            this.ctx.beginPath();
            this.ctx.arc(width * 0.93, rowY.producers - height * 0.04,
                width * 0.035, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.font = `italic ${Math.round(height * 0.018)}px Arial`;
            this.ctx.fillStyle = '#888';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Photosynthesis', width * 0.93, rowY.producers + height * 0.005);
        }
    }

    // ── STEP 2 — Primary consumers ────────────────────────────────────────
    if (step >= 2) {
        colX.forEach((cx, i) => {
            drawNode(cx, rowY.primary, colors.primaryConsumer, labels.primary[i]);
        });
        if (showLabels) {
            this.addLabel('PRIMARY\nCONSUMERS', width * 0.04, rowY.primary + height * 0.005,
                '#C86500', 'left');
        }
        // Arrows: every producer → every primary consumer
        if (step >= 2) {
            colX.forEach(px => {
                colX.forEach(cx => {
                    drawFeedingArrow(px, rowY.producers, cx, rowY.primary,
                        'rgba(46,204,64,0.35)');
                });
            });
        }
    }

    // ── STEP 3 — Secondary consumers ──────────────────────────────────────
    if (step >= 3) {
        colX.forEach((cx, i) => {
            drawNode(cx, rowY.secondary, colors.secondary, labels.secondary[i]);
        });
        if (showLabels) {
            this.addLabel('SECONDARY\nCONSUMERS', width * 0.04, rowY.secondary + height * 0.005,
                '#005099', 'left');
        }
        // Arrows: selected primary → secondary (not all, to avoid clutter)
        const primarySecondaryPairs = [[0,0],[0,2],[1,1],[1,2],[2,0],[2,1]];
        primarySecondaryPairs.forEach(([pi, si]) => {
            drawFeedingArrow(colX[pi], rowY.primary, colX[si], rowY.secondary,
                'rgba(255,133,27,0.35)');
        });
    }

    // ── STEP 4 — Tertiary consumers ───────────────────────────────────────
    if (step >= 4) {
        // Only 2 apex predators, centred
        const tertiaryX = [width * 0.34, width * 0.66];
        tertiaryX.forEach((cx, i) => {
            drawNode(cx, rowY.tertiary, colors.tertiary, labels.tertiary[i]);
        });
        if (showLabels) {
            this.addLabel('TERTIARY\nCONSUMERS', width * 0.04, rowY.tertiary + height * 0.005,
                '#810DA9', 'left');
        }
        // Arrows: secondary → tertiary
        colX.forEach(sx => {
            tertiaryX.forEach(tx => {
                drawFeedingArrow(sx, rowY.secondary, tx, rowY.tertiary,
                    'rgba(0,116,217,0.35)');
            });
        });
    }

    // ── STEP 5 — Decomposers + all cross-level arrows to decomposers ──────
    if (step >= 5) {
        colX.forEach((cx, i) => {
            drawNode(cx, rowY.decomposers, colors.decomposer, labels.decomposers[i]);
        });
        if (showLabels) {
            this.addLabel('DECOMPOSERS', width * 0.04, rowY.decomposers + height * 0.008,
                '#65042b', 'left');
        }

        // Every trophic level feeds into decomposers (dashed to centre decomposer)
        const decompTarget = { x: colX[1], y: rowY.decomposers };
        [rowY.producers, rowY.primary, rowY.secondary, rowY.tertiary].forEach(ry => {
            drawFeedingArrow(colX[1], ry, decompTarget.x, decompTarget.y,
                'rgba(133,20,75,0.30)');
        });

        // Dead organic matter bar at very bottom
        this.ctx.fillStyle = 'rgba(139,69,19,0.25)';
        this.ctx.fillRect(width * 0.05, height * 0.91, width * 0.90, height * 0.05);
        this.ctx.strokeStyle = '#8B4513';
        this.ctx.lineWidth = 1.5;
        this.ctx.strokeRect(width * 0.05, height * 0.91, width * 0.90, height * 0.05);
        if (showLabels) {
            this.ctx.font = `italic ${Math.round(height * 0.020)}px Arial`;
            this.ctx.fillStyle = '#5C3010';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Dead Organic Matter — Nutrients returned to soil',
                width / 2, height * 0.945);
        }

        // Legend
        if (showLabels) {
            this.drawLegend(width * 0.68, height * 0.91, [
                { color: colors.producer.base,        label: 'Producers'           },
                { color: colors.primaryConsumer.base,  label: 'Primary Consumers'  },
                { color: colors.secondary.base,        label: 'Secondary Consumers' },
                { color: colors.tertiary.base,         label: 'Tertiary Consumers'  },
                { color: colors.decomposer.base,       label: 'Decomposers'        }
            ]);
        }
    }

    // Step indicator
    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${step} of 5`, width - 8, height - 4);

    if (showInset) {
        this.drawInset(width * 0.62, height * 0.06, width * 0.36, height * 0.22, insetType);
    }

    this.ctx.restore();
}

// ═══════════════════════════════════════════════════════════════════════════
// CARBON CYCLE — STEP-BY-STEP RENDERER
// Steps:
//   1 — Atmosphere reservoir + CO₂ molecules
//   2 — + Plants (photosynthesis arrow down)
//   3 — + Animals (respiration arrow up) + soil/decomposition
//   4 — + Fossil fuels + combustion arrow
//   5 — + Ocean reservoir + absorption + all process labels
// ═══════════════════════════════════════════════════════════════════════════
renderCarbonCycleDiagram(x, y, width, height, options = {}) {
    const {
        process     = 'complete',
        reservoir   = 'atmosphere',
        drawingStep = 5,
        showLabels  = true,
        showInset   = false,
        insetType   = 'co2-molecule'
    } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    const step = Math.max(1, Math.min(5, drawingStep));

    const stepLabels = [
        'Step 1 — Atmosphere (CO₂ Reservoir)',
        'Step 2 — + Photosynthesis (Atmosphere → Plants)',
        'Step 3 — + Respiration & Decomposition',
        'Step 4 — + Fossil Fuels & Combustion',
        'Step 5 — + Ocean Absorption & Complete Cycle'
    ];
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.05);

    // ── Layout constants ───────────────────────────────────────────────────
    const atmTop    = height * 0.07;
    const atmH      = height * 0.26;           // atmosphere band height
    const groundY   = atmTop + atmH;           // where land surface begins
    const soilY     = height * 0.75;           // top of soil/underground zone
    const soilH     = height * 0.18;

    // Key element positions
    const plantX    = width  * 0.20;
    const plantY    = groundY + height * 0.04;
    const animalX   = width  * 0.50;
    const animalY   = groundY + height * 0.06;
    const fossilX   = width  * 0.72;
    const fossilY   = soilY + height * 0.03;
    const oceanX    = width  * 0.80;
    const oceanY    = atmTop + height * 0.04;
    const oceanW    = width  * 0.17;
    const oceanH    = height * 0.18;

    const nodeR     = width  * 0.055;          // reservoir circle radius

    // ── STEP 1 — Atmosphere ────────────────────────────────────────────────
    if (step >= 1) {
        // Atmosphere band
        this.ctx.fillStyle = 'rgba(135,206,250,0.28)';
        this.ctx.fillRect(0, atmTop, width * 0.74, atmH);
        this.ctx.strokeStyle = 'rgba(100,170,220,0.5)';
        this.ctx.lineWidth = 1.5;
        this.ctx.strokeRect(0, atmTop, width * 0.74, atmH);

        // Scatter CO₂ molecules across atmosphere
        const co2Positions = [
            [0.10, 0.10], [0.22, 0.16], [0.35, 0.09], [0.48, 0.19],
            [0.58, 0.12], [0.65, 0.22], [0.30, 0.25], [0.14, 0.28]
        ];
        co2Positions.forEach(([rx, ry]) => {
            AnatomicalShapes.drawCO2Molecule(
                this.ctx, width * rx, atmTop + atmH * ry, width * 0.016
            );
        });

        if (showLabels) {
            this.addLabel('ATMOSPHERE', width * 0.37, atmTop + height * 0.04, '#2471A3');
            this.ctx.font = `bold ${Math.round(height * 0.032)}px Arial`;
            this.ctx.fillStyle = '#1A5276';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('CO₂', width * 0.37, atmTop + height * 0.10);
            this.ctx.font = `${Math.round(height * 0.018)}px Arial`;
            this.ctx.fillStyle = '#555';
            this.ctx.fillText('atmospheric carbon reservoir', width * 0.37, atmTop + height * 0.145);
        }
    }

    // ── STEP 2 — Plants & Photosynthesis ──────────────────────────────────
    if (step >= 2) {
        // Plant node
        this.ctx.fillStyle = '#2ECC40';
        this.ctx.beginPath();
        this.ctx.arc(plantX, plantY + nodeR, nodeR, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = '#1A9929';
        this.ctx.lineWidth = 2.5;
        this.ctx.stroke();

        // Simple leaf symbol inside
        this.ctx.fillStyle = '#1A9929';
        this.ctx.beginPath();
        this.ctx.ellipse(plantX, plantY + nodeR, nodeR * 0.6, nodeR * 0.35,
            -Math.PI / 6, 0, Math.PI * 2);
        this.ctx.fill();

        if (showLabels) {
            this.addLabel('Plants', plantX, plantY + nodeR * 2.5 + 4, '#1A9929');
        }

        // Photosynthesis arrow: atmosphere (above plant) → plant
        const photoArrowTopY = atmTop + atmH;
        const photoArrowBotY = plantY;
        this.ctx.strokeStyle = '#27AE60';
        this.ctx.lineWidth = 3;
        this.ctx.setLineDash([6, 4]);
        this.ctx.beginPath();
        this.ctx.moveTo(plantX, photoArrowTopY);
        this.ctx.lineTo(plantX, photoArrowBotY);
        this.ctx.stroke();
        this.ctx.setLineDash([]);
        // Arrowhead pointing down into plant
        this.ctx.fillStyle = '#27AE60';
        this.ctx.beginPath();
        this.ctx.moveTo(plantX, photoArrowBotY);
        this.ctx.lineTo(plantX - 6, photoArrowBotY - 12);
        this.ctx.lineTo(plantX + 6, photoArrowBotY - 12);
        this.ctx.closePath();
        this.ctx.fill();

        if (showLabels) {
            this.ctx.font = `bold ${Math.round(height * 0.019)}px Arial`;
            this.ctx.fillStyle = '#27AE60';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Photosynthesis', plantX + 8, (photoArrowTopY + photoArrowBotY) / 2);
            this.ctx.font = `italic ${Math.round(height * 0.016)}px Arial`;
            this.ctx.fillStyle = '#555';
            this.ctx.fillText('6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂',
                plantX + 8, (photoArrowTopY + photoArrowBotY) / 2 + 14);
        }
    }

    // ── STEP 3 — Animals, Respiration & Decomposition ─────────────────────
    if (step >= 3) {
        // Soil band
        this.ctx.fillStyle = 'rgba(139,69,19,0.20)';
        this.ctx.fillRect(0, soilY, width * 0.74, soilH);
        this.ctx.strokeStyle = 'rgba(100,50,10,0.3)';
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(0, soilY, width * 0.74, soilH);

        // Animal node
        this.ctx.fillStyle = '#FF851B';
        this.ctx.beginPath();
        this.ctx.arc(animalX, animalY + nodeR, nodeR, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = '#C86500';
        this.ctx.lineWidth = 2.5;
        this.ctx.stroke();

        if (showLabels) {
            this.addLabel('Animals', animalX, animalY + nodeR * 2.5 + 4, '#C86500');
        }

        // Plant → Animal (consumption arrow, horizontal)
        this.ctx.strokeStyle = '#E67E22';
        this.ctx.lineWidth = 2.5;
        this.ctx.beginPath();
        this.ctx.moveTo(plantX + nodeR, plantY + nodeR);
        this.ctx.lineTo(animalX - nodeR, animalY + nodeR);
        this.ctx.stroke();
        this.ctx.fillStyle = '#E67E22';
        this.ctx.beginPath();
        this.ctx.moveTo(animalX - nodeR, animalY + nodeR);
        this.ctx.lineTo(animalX - nodeR - 10, animalY + nodeR - 5);
        this.ctx.lineTo(animalX - nodeR - 10, animalY + nodeR + 5);
        this.ctx.closePath();
        this.ctx.fill();
        if (showLabels) {
            this.ctx.font = `${Math.round(height * 0.017)}px Arial`;
            this.ctx.fillStyle = '#E67E22';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('consumption',
                (plantX + animalX) / 2, plantY + nodeR - 8);
        }

        // Respiration arrow: animal → atmosphere (curved up)
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 2.5;
        this.ctx.setLineDash([6, 4]);
        this.ctx.beginPath();
        this.ctx.moveTo(animalX, animalY);
        this.ctx.quadraticCurveTo(animalX + width * 0.06, atmTop + atmH * 0.3,
            animalX - width * 0.02, atmTop + atmH * 0.8);
        this.ctx.stroke();
        this.ctx.setLineDash([]);
        this.ctx.fillStyle = '#E74C3C';
        this.ctx.beginPath();
        this.ctx.moveTo(animalX - width * 0.02, atmTop + atmH * 0.8);
        this.ctx.lineTo(animalX - width * 0.02 - 7, atmTop + atmH * 0.8 + 12);
        this.ctx.lineTo(animalX - width * 0.02 + 7, atmTop + atmH * 0.8 + 12);
        this.ctx.closePath();
        this.ctx.fill();
        if (showLabels) {
            this.ctx.font = `bold ${Math.round(height * 0.019)}px Arial`;
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Respiration', animalX + width * 0.06, atmTop + atmH * 0.55);
        }

        // Decomposition: organic matter in soil → atmosphere arrow (vertical from soil)
        const decompX = width * 0.32;
        this.ctx.fillStyle = '#8B4513';
        this.ctx.fillRect(decompX - width * 0.07, soilY + height * 0.04,
            width * 0.14, height * 0.07);
        this.ctx.strokeStyle = '#5C2E00';
        this.ctx.lineWidth = 1.5;
        this.ctx.strokeRect(decompX - width * 0.07, soilY + height * 0.04,
            width * 0.14, height * 0.07);
        if (showLabels) {
            this.ctx.font = `${Math.round(height * 0.016)}px Arial`;
            this.ctx.fillStyle = '#FFF';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Organic', decompX, soilY + height * 0.075);
            this.ctx.fillText('Matter', decompX, soilY + height * 0.095);
        }

        // Decomposition arrow up
        this.ctx.strokeStyle = '#8B4513';
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([5, 4]);
        this.ctx.beginPath();
        this.ctx.moveTo(decompX, soilY + height * 0.04);
        this.ctx.lineTo(decompX, atmTop + atmH * 0.85);
        this.ctx.stroke();
        this.ctx.setLineDash([]);
        this.ctx.fillStyle = '#8B4513';
        this.ctx.beginPath();
        this.ctx.moveTo(decompX, atmTop + atmH * 0.85);
        this.ctx.lineTo(decompX - 6, atmTop + atmH * 0.85 + 12);
        this.ctx.lineTo(decompX + 6, atmTop + atmH * 0.85 + 12);
        this.ctx.closePath();
        this.ctx.fill();
        if (showLabels) {
            this.ctx.font = `bold ${Math.round(height * 0.018)}px Arial`;
            this.ctx.fillStyle = '#8B4513';
            this.ctx.textAlign = 'right';
            this.ctx.fillText('Decomposition', decompX - 6,
                (soilY + atmTop + atmH) / 2 + height * 0.01);
        }

        if (showLabels) {
            this.ctx.font = `${Math.round(height * 0.018)}px Arial`;
            this.ctx.fillStyle = '#6D4C41';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('SOIL', width * 0.37, soilY + height * 0.12);
        }
    }

    // ── STEP 4 — Fossil Fuels & Combustion ────────────────────────────────
    if (step >= 4) {
        // Fossil fuel block
        this.ctx.fillStyle = '#333';
        this.ctx.fillRect(fossilX - width * 0.07, fossilY,
            width * 0.14, height * 0.10);
        this.ctx.strokeStyle = '#111';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(fossilX - width * 0.07, fossilY,
            width * 0.14, height * 0.10);
        if (showLabels) {
            this.ctx.font = `bold ${Math.round(height * 0.018)}px Arial`;
            this.ctx.fillStyle = '#FFF';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Fossil', fossilX, fossilY + height * 0.05);
            this.ctx.fillText('Fuels', fossilX, fossilY + height * 0.075);
        }

        // Flames above fossil fuels
        const flameX = fossilX;
        const flameBase = fossilY;
        this.ctx.fillStyle = '#FF4500';
        this.ctx.beginPath();
        this.ctx.moveTo(flameX - width * 0.03, flameBase);
        this.ctx.quadraticCurveTo(flameX - width * 0.025, flameBase - height * 0.06,
            flameX, flameBase - height * 0.10);
        this.ctx.quadraticCurveTo(flameX + width * 0.025, flameBase - height * 0.06,
            flameX + width * 0.03, flameBase);
        this.ctx.closePath();
        this.ctx.fill();

        this.ctx.fillStyle = '#FFD700';
        this.ctx.beginPath();
        this.ctx.moveTo(flameX - width * 0.015, flameBase);
        this.ctx.quadraticCurveTo(flameX - width * 0.01, flameBase - height * 0.04,
            flameX, flameBase - height * 0.065);
        this.ctx.quadraticCurveTo(flameX + width * 0.01, flameBase - height * 0.04,
            flameX + width * 0.015, flameBase);
        this.ctx.closePath();
        this.ctx.fill();

        // Combustion arrow: fossil fuels → atmosphere
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(fossilX, flameBase - height * 0.10);
        this.ctx.quadraticCurveTo(fossilX - width * 0.10, atmTop + atmH * 0.2,
            width * 0.60, atmTop + atmH * 0.75);
        this.ctx.stroke();
        this.ctx.fillStyle = '#E74C3C';
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.60, atmTop + atmH * 0.75);
        this.ctx.lineTo(width * 0.60 - 7, atmTop + atmH * 0.75 + 12);
        this.ctx.lineTo(width * 0.60 + 7, atmTop + atmH * 0.75 + 12);
        this.ctx.closePath();
        this.ctx.fill();

        if (showLabels) {
            this.ctx.font = `bold ${Math.round(height * 0.019)}px Arial`;
            this.ctx.fillStyle = '#C0392B';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Combustion', fossilX - width * 0.04,
                (fossilY + atmTop + atmH) / 2 - height * 0.02);
            this.ctx.font = `italic ${Math.round(height * 0.016)}px Arial`;
            this.ctx.fillStyle = '#888';
            this.ctx.fillText('Coal, Oil, Gas', fossilX,
                fossilY + height * 0.125);
        }
    }

    // ── STEP 5 — Ocean + Absorption + Full Labels ─────────────────────────
    if (step >= 5) {
        // Ocean block
        this.ctx.fillStyle = 'rgba(0,116,217,0.35)';
        this.ctx.fillRect(oceanX - oceanW / 2, oceanY, oceanW, oceanH);
        this.ctx.strokeStyle = '#005099';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(oceanX - oceanW / 2, oceanY, oceanW, oceanH);

        // Dissolved CO₂ molecules in ocean
        [[0.05, 0.3],[0.5, 0.5],[0.85, 0.7],[0.3, 0.75],[0.65, 0.2]].forEach(([rx, ry]) => {
            AnatomicalShapes.drawCO2Molecule(
                this.ctx,
                oceanX - oceanW / 2 + oceanW * rx,
                oceanY + oceanH * ry,
                width * 0.012
            );
        });

        // Ocean absorption arrow: atmosphere → ocean
        this.ctx.strokeStyle = '#0074D9';
        this.ctx.lineWidth = 2.5;
        this.ctx.setLineDash([6, 4]);
        this.ctx.beginPath();
        this.ctx.moveTo(oceanX, atmTop + atmH);
        this.ctx.lineTo(oceanX, oceanY + oceanH * 0.3);
        this.ctx.stroke();
        this.ctx.setLineDash([]);
        this.ctx.fillStyle = '#0074D9';
        this.ctx.beginPath();
        this.ctx.moveTo(oceanX, oceanY + oceanH * 0.3);
        this.ctx.lineTo(oceanX - 6, oceanY + oceanH * 0.3 - 12);
        this.ctx.lineTo(oceanX + 6, oceanY + oceanH * 0.3 - 12);
        this.ctx.closePath();
        this.ctx.fill();

        if (showLabels) {
            this.addLabel('OCEAN', oceanX, oceanY + oceanH * 0.55, '#005099');
            this.ctx.font = `bold ${Math.round(height * 0.018)}px Arial`;
            this.ctx.fillStyle = '#0074D9';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Ocean', oceanX + oceanW * 0.55,
                (atmTop + atmH + oceanY + oceanH * 0.3) / 2);
            this.ctx.fillText('Absorption', oceanX + oceanW * 0.55,
                (atmTop + atmH + oceanY + oceanH * 0.3) / 2 + 14);
            this.ctx.font = `${Math.round(height * 0.016)}px Arial`;
            this.ctx.fillStyle = '#555';
            this.ctx.fillText('CO₂ dissolved', oceanX, oceanY + oceanH * 0.75);
            this.ctx.fillText('in seawater', oceanX, oceanY + oceanH * 0.90);

            // Summary process legend at bottom
            this.drawLegend(width * 0.04, height * 0.92, [
                { color: '#27AE60', label: 'Photosynthesis (CO₂ uptake)' },
                { color: '#E74C3C', label: 'Respiration / Combustion (CO₂ release)' },
                { color: '#8B4513', label: 'Decomposition (CO₂ release)' },
                { color: '#0074D9', label: 'Ocean absorption' }
            ]);
        }
    }

    // Step indicator
    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${step} of 5`, width - 8, height - 4);

    if (showInset) {
        this.drawInset(width * 0.60, height * 0.06, width * 0.38, height * 0.22, insetType);
    }

    this.ctx.restore();
}

// ═══════════════════════════════════════════════════════════════════════════
// FOOD CHAIN — STEP-BY-STEP RENDERER
// Steps:
//   1 — Simple chain: producer → primary → secondary → tertiary (4 levels)
//   2 — Extended chain: adds 2 more levels (5–6 total)
//   3 — Detrital chain: dead matter → detritivores → predators
// Each step is ADDITIVE where relevant; step 2 builds on step 1 by
// extending the chain downward, step 3 is a separate detrital view.
// ═══════════════════════════════════════════════════════════════════════════
renderFoodChainDiagram(x, y, width, height, options = {}) {
    const {
        ecosystem   = 'terrestrial',
        length      = 'simple',
        drawingStep = 1,
        showLabels  = true,
        showInset   = false,
        insetType   = 'ten-percent-rule'
    } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    const step = Math.max(1, Math.min(3, drawingStep));

    const stepLabels = [
        'Step 1 — Simple Food Chain (4 Trophic Levels)',
        'Step 2 — Extended Chain (6 Trophic Levels)',
        'Step 3 — Detrital Food Chain'
    ];
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.05);

    // ── Layout constants ───────────────────────────────────────────────────
    const boxW  = width  * 0.60;
    const boxH  = height * 0.095;
    const boxX  = (width - boxW) / 2;
    const arrowH = height * 0.045;          // gap between boxes used for arrow

    const chainColors = [
        '#2ECC40',   // producer
        '#FFDC00',   // primary
        '#FF851B',   // secondary
        '#0074D9',   // tertiary
        '#B10DC9',   // quaternary
        '#85144b'    // apex
    ];

    const terrestrialSimple   = ['Grass',       'Grasshopper', 'Frog',       'Snake'];
    const terrestrialExtended = ['Plants',      'Caterpillar', 'Mouse',      'Snake',      'Hawk',  'Eagle'];
    const aquaticSimple       = ['Phytoplankton','Zooplankton', 'Small Fish', 'Large Fish'];
    const aquaticExtended     = ['Phytoplankton','Krill',       'Small Fish', 'Medium Fish','Seal',  'Shark'];
    const marineSimple        = ['Algae',        'Shrimp',      'Small Fish', 'Tuna'];
    const marineExtended      = ['Phytoplankton','Krill',       'Herring',    'Tuna',       'Marlin','Shark'];

    const levelNames = ['Producer','Primary Consumer','Secondary Consumer',
                        'Tertiary Consumer','Quaternary Consumer','Apex Predator'];

    const energyValues = ['10,000 kJ','1,000 kJ','100 kJ','10 kJ','1 kJ','0.1 kJ'];

    // Pick chain based on step and ecosystem
    let chain;
    if (step === 1) {
        chain = ecosystem === 'aquatic' ? aquaticSimple
              : ecosystem === 'marine'  ? marineSimple
              : terrestrialSimple;
    } else if (step === 2) {
        chain = ecosystem === 'aquatic' ? aquaticExtended
              : ecosystem === 'marine'  ? marineExtended
              : terrestrialExtended;
    }

    // ── STEPS 1 & 2 — Linear chain ────────────────────────────────────────
    if (step === 1 || step === 2) {
        const totalLevels = chain.length;
        const totalContentH = totalLevels * boxH + (totalLevels - 1) * arrowH;
        let startY = height * 0.09 + (height * 0.82 - totalContentH) / 2;

        // Sun icon (energy source)
        this.ctx.fillStyle = '#FFD700';
        this.ctx.beginPath();
        this.ctx.arc(boxX - width * 0.08, startY + boxH / 2, width * 0.038, 0, Math.PI * 2);
        this.ctx.fill();
        for (let r = 0; r < 8; r++) {
            const ang = (r / 8) * Math.PI * 2;
            this.ctx.strokeStyle = '#FFD700';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.moveTo(boxX - width * 0.08 + Math.cos(ang) * width * 0.042,
                            startY + boxH / 2 + Math.sin(ang) * width * 0.042);
            this.ctx.lineTo(boxX - width * 0.08 + Math.cos(ang) * width * 0.062,
                            startY + boxH / 2 + Math.sin(ang) * width * 0.062);
            this.ctx.stroke();
        }
        if (showLabels) {
            this.ctx.font = `${Math.round(height * 0.018)}px Arial`;
            this.ctx.fillStyle = '#B8860B';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Solar', boxX - width * 0.08, startY + boxH / 2 + width * 0.06);
            this.ctx.fillText('Energy', boxX - width * 0.08, startY + boxH / 2 + width * 0.08);
        }

        chain.forEach((organism, i) => {
            const currentY = startY + i * (boxH + arrowH);
            const color = chainColors[i];

            // Gradient fill for the box
            const grad = this.ctx.createLinearGradient(boxX, currentY, boxX + boxW, currentY);
            grad.addColorStop(0, color);
            grad.addColorStop(0.5, this.lightenHex(color, 40));
            grad.addColorStop(1, color);
            this.ctx.fillStyle = grad;
            this.ctx.fillRect(boxX, currentY, boxW, boxH);
            this.ctx.strokeStyle = this.darkenHex(color, 40);
            this.ctx.lineWidth = 2.5;
            this.ctx.strokeRect(boxX, currentY, boxW, boxH);

            if (showLabels) {
                // Organism name (large)
                this.ctx.font = `bold ${Math.round(height * 0.030)}px Arial`;
                this.ctx.fillStyle = '#FFF';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(organism, width / 2, currentY + boxH * 0.44);

                // Trophic level name (small, beneath)
                this.ctx.font = `${Math.round(height * 0.019)}px Arial`;
                this.ctx.fillStyle = 'rgba(255,255,255,0.85)';
                this.ctx.fillText(levelNames[i], width / 2, currentY + boxH * 0.76);

                // Energy value on the right side
                this.ctx.font = `${Math.round(height * 0.018)}px Arial`;
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.textAlign = 'left';
                this.ctx.fillText(energyValues[i], boxX + boxW + 6, currentY + boxH * 0.55);
            }

            // Arrow to next box
            if (i < chain.length - 1) {
                const arrowY1 = currentY + boxH;
                const arrowY2 = currentY + boxH + arrowH;
                this.ctx.strokeStyle = '#2C3E50';
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.lineWidth = 3;
                this.ctx.beginPath();
                this.ctx.moveTo(width / 2, arrowY1);
                this.ctx.lineTo(width / 2, arrowY2 - 8);
                this.ctx.stroke();
                // Arrowhead
                this.ctx.beginPath();
                this.ctx.moveTo(width / 2, arrowY2);
                this.ctx.lineTo(width / 2 - 8, arrowY2 - 10);
                this.ctx.lineTo(width / 2 + 8, arrowY2 - 10);
                this.ctx.closePath();
                this.ctx.fill();

                if (showLabels) {
                    // 10% rule label next to arrow
                    this.ctx.font = `bold ${Math.round(height * 0.019)}px Arial`;
                    this.ctx.fillStyle = '#E74C3C';
                    this.ctx.textAlign = 'left';
                    this.ctx.fillText('10% transferred',
                        width / 2 + 12, (arrowY1 + arrowY2) / 2 + 4);
                    this.ctx.font = `italic ${Math.round(height * 0.016)}px Arial`;
                    this.ctx.fillStyle = '#888';
                    this.ctx.fillText('90% lost as heat',
                        width / 2 + 12, (arrowY1 + arrowY2) / 2 + 18);
                }
            }
        });
    }

    // ── STEP 3 — Detrital chain ────────────────────────────────────────────
    if (step === 3) {
        const detritalLevels = [
            { label: 'Dead Organic Matter\n(Detritus)',        color: '#8B4513' },
            { label: 'Detritivores\n(Earthworms, Millipedes)', color: '#A0522D' },
            { label: 'Predators\n(Beetles, Centipedes)',       color: '#FF6347' },
            { label: 'Top Predators\n(Birds, Small Mammals)',  color: '#8B008B' }
        ];

        const totalContentH = detritalLevels.length * boxH
                            + (detritalLevels.length - 1) * arrowH;
        let startY = height * 0.09 + (height * 0.82 - totalContentH) / 2;

        detritalLevels.forEach((level, i) => {
            const currentY = startY + i * (boxH + arrowH);
            const lines    = level.label.split('\n');

            this.ctx.fillStyle = level.color;
            this.ctx.fillRect(boxX, currentY, boxW, boxH);
            this.ctx.strokeStyle = this.darkenHex(level.color, 30);
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(boxX, currentY, boxW, boxH);

            if (showLabels) {
                this.ctx.fillStyle = '#FFF';
                this.ctx.textAlign = 'center';
                lines.forEach((line, li) => {
                    const isMain = li === 0;
                    this.ctx.font = isMain
                        ? `bold ${Math.round(height * 0.027)}px Arial`
                        : `${Math.round(height * 0.019)}px Arial`;
                    const lineY = lines.length === 1
                        ? currentY + boxH * 0.56
                        : currentY + boxH * (0.36 + li * 0.32);
                    this.ctx.fillText(line, width / 2, lineY);
                });
            }

            if (i < detritalLevels.length - 1) {
                const arrowY1 = currentY + boxH;
                const arrowY2 = currentY + boxH + arrowH;
                this.ctx.strokeStyle = '#555';
                this.ctx.fillStyle = '#555';
                this.ctx.lineWidth = 3;
                this.ctx.beginPath();
                this.ctx.moveTo(width / 2, arrowY1);
                this.ctx.lineTo(width / 2, arrowY2 - 8);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(width / 2, arrowY2);
                this.ctx.lineTo(width / 2 - 8, arrowY2 - 10);
                this.ctx.lineTo(width / 2 + 8, arrowY2 - 10);
                this.ctx.closePath();
                this.ctx.fill();
            }
        });

        // Decomposers side node (feeds back to detritus)
        const decompCX = boxX - width * 0.10;
        const decompCY = startY + (boxH + arrowH) * 1.5;
        this.ctx.fillStyle = '#85144b';
        this.ctx.beginPath();
        this.ctx.arc(decompCX, decompCY, width * 0.055, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = '#65042b';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
        if (showLabels) {
            this.ctx.font = `${Math.round(height * 0.017)}px Arial`;
            this.ctx.fillStyle = '#FFF';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Decomposers', decompCX, decompCY - 4);
            this.ctx.fillText('(Bacteria,', decompCX, decompCY + 10);
            this.ctx.fillText('Fungi)', decompCX, decompCY + 22);
        }
        // Dashed return arrow: decomposers → detritus box top
        this.ctx.strokeStyle = '#85144b';
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([5, 4]);
        this.ctx.beginPath();
        this.ctx.moveTo(decompCX, decompCY - width * 0.055);
        this.ctx.quadraticCurveTo(
            decompCX - width * 0.04, startY + boxH * 0.3,
            boxX, startY + boxH * 0.5
        );
        this.ctx.stroke();
        this.ctx.setLineDash([]);
        this.ctx.fillStyle = '#85144b';
        this.ctx.beginPath();
        this.ctx.moveTo(boxX, startY + boxH * 0.5);
        this.ctx.lineTo(boxX + 10, startY + boxH * 0.5 - 5);
        this.ctx.lineTo(boxX + 10, startY + boxH * 0.5 + 5);
        this.ctx.closePath();
        this.ctx.fill();

        if (showLabels) {
            this.ctx.font = `italic ${Math.round(height * 0.016)}px Arial`;
            this.ctx.fillStyle = '#85144b';
            this.ctx.textAlign = 'right';
            this.ctx.fillText('nutrients', decompCX - width * 0.01,
                startY + boxH * 0.25);
            this.ctx.fillText('recycled', decompCX - width * 0.01,
                startY + boxH * 0.25 + 14);
        }
    }

    // Step indicator
    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${step} of 3`, width - 8, height - 4);

    if (showInset) {
        this.drawInset(width * 0.62, height * 0.06, width * 0.36, height * 0.22, insetType);
    }

    this.ctx.restore();
}

// ═══════════════════════════════════════════════════════════════════════════
// ENERGY PYRAMID — STEP-BY-STEP RENDERER
// Steps:
//   1 — Energy pyramid (kJ values, 10% rule, 3-D effect)
//   2 — Biomass pyramid (kg values)
//   3 — Numbers pyramid (individual counts)
// Each step draws its own pyramid from scratch; they are not cumulative.
// ═══════════════════════════════════════════════════════════════════════════
renderEnergyPyramidDiagram(x, y, width, height, options = {}) {
    const {
        type        = 'energy',
        ecosystem   = 'terrestrial',
        drawingStep = 1,
        showLabels  = true,
        showInset   = false,
        insetType   = 'energy-loss-heat'
    } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    const step = Math.max(1, Math.min(3, drawingStep));

    const stepLabels = [
        'Step 1 — Energy Pyramid (10% Rule)',
        'Step 2 — Biomass Pyramid (kg dry mass)',
        'Step 3 — Pyramid of Numbers (individuals)'
    ];
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.05);

    // ── Shared pyramid geometry ────────────────────────────────────────────
    // Pyramid base is at the bottom; levels stack upward.
    // Each level is a trapezoid centred horizontally.
    const pyramidBaseY   = height * 0.88;    // bottom edge of producer level
    const levelH         = height * 0.14;    // height of each band
    const levelGap       = height * 0.008;   // small gap between bands
    const maxHalfW       = width  * 0.42;    // half-width of widest (producer) level

    // widthFraction[i] = fraction of maxHalfW for level i (0 = base)
    const widthFractions = [1.00, 0.72, 0.46, 0.24, 0.12];

    const drawPyramidLevel = (levelIndex, totalLevels, fillColor, labelText, sublabelText) => {
        const topIdx    = totalLevels - 1 - levelIndex;   // invert: 0 = widest at bottom
        const halfW     = maxHalfW * widthFractions[topIdx];
        const bandTop   = pyramidBaseY - (levelIndex + 1) * (levelH + levelGap);
        const bandBot   = pyramidBaseY - levelIndex * (levelH + levelGap);

        const grad = this.ctx.createLinearGradient(
            width / 2 - halfW, bandTop,
            width / 2 + halfW, bandTop
        );
        grad.addColorStop(0, this.darkenHex(fillColor, 20));
        grad.addColorStop(0.5, this.lightenHex(fillColor, 30));
        grad.addColorStop(1, this.darkenHex(fillColor, 20));

        this.ctx.fillStyle = grad;
        this.ctx.beginPath();
        this.ctx.moveTo(width / 2 - halfW, bandBot);
        this.ctx.lineTo(width / 2 + halfW, bandBot);
        this.ctx.lineTo(width / 2 + halfW * widthFractions[topIdx - 1 >= 0 ? topIdx - 1 : 0] / widthFractions[topIdx], bandTop);
        this.ctx.lineTo(width / 2 - halfW * widthFractions[topIdx - 1 >= 0 ? topIdx - 1 : 0] / widthFractions[topIdx], bandTop);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.strokeStyle = this.darkenHex(fillColor, 40);
        this.ctx.lineWidth = 2;
        this.ctx.stroke();

        if (showLabels) {
            const midY = (bandTop + bandBot) / 2;
            this.ctx.font = `bold ${Math.round(height * 0.028)}px Arial`;
            this.ctx.fillStyle = '#FFF';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(labelText, width / 2, midY - height * 0.01);
            if (sublabelText) {
                this.ctx.font = `${Math.round(height * 0.020)}px Arial`;
                this.ctx.fillStyle = 'rgba(255,255,255,0.88)';
                this.ctx.fillText(sublabelText, width / 2, midY + height * 0.025);
            }
        }
    };

    // ── STEP 1 — Energy pyramid ────────────────────────────────────────────
    if (step === 1) {
        const levels = [
            { name: 'Producers',           value: '10,000 kJ', color: '#2ECC40' },
            { name: 'Primary Consumers',   value: '1,000 kJ',  color: '#FF851B' },
            { name: 'Secondary Consumers', value: '100 kJ',    color: '#0074D9' },
            { name: 'Tertiary Consumers',  value: '10 kJ',     color: '#B10DC9' }
        ];
        levels.forEach((lv, i) => {
            drawPyramidLevel(i, levels.length, lv.color, lv.name, lv.value);
        });

        // 10% rule arrows on the right side
        if (showLabels) {
            for (let i = 0; i < 3; i++) {
                const arrowY = pyramidBaseY - (i + 1) * (levelH + levelGap) - levelGap / 2;
                this.ctx.font = `italic ${Math.round(height * 0.018)}px Arial`;
                this.ctx.fillStyle = '#E74C3C';
                this.ctx.textAlign = 'left';
                this.ctx.fillText('↑ 10% to next level', width * 0.58, arrowY);
                this.ctx.fillStyle = '#888';
                this.ctx.font = `italic ${Math.round(height * 0.015)}px Arial`;
                this.ctx.fillText('90% lost as heat', width * 0.58, arrowY + 14);
            }
            // Title label
            this.ctx.font = `bold ${Math.round(height * 0.032)}px Arial`;
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Energy Pyramid  —  10% Rule', width / 2, height * 0.10);
        }
    }

    // ── STEP 2 — Biomass pyramid ───────────────────────────────────────────
    if (step === 2) {
        const levels = [
            { name: 'Producers',        value: '10,000 kg', color: '#2ECC40' },
            { name: 'Herbivores',       value: '1,000 kg',  color: '#FF851B' },
            { name: 'Small Carnivores', value: '100 kg',    color: '#0074D9' },
            { name: 'Large Carnivores', value: '10 kg',     color: '#B10DC9' }
        ];
        levels.forEach((lv, i) => {
            drawPyramidLevel(i, levels.length, lv.color, lv.name, lv.value);
        });

        if (showLabels) {
            this.ctx.font = `bold ${Math.round(height * 0.032)}px Arial`;
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Biomass Pyramid', width / 2, height * 0.10);
            this.ctx.font = `italic ${Math.round(height * 0.019)}px Arial`;
            this.ctx.fillStyle = '#555';
            this.ctx.fillText('Dry mass of organisms at each trophic level',
                width / 2, height * 0.13);
        }
    }

    // ── STEP 3 — Numbers pyramid ───────────────────────────────────────────
    if (step === 3) {
        const levels = [
            { name: 'Grass Plants',  value: '1,000,000', color: '#2ECC40' },
            { name: 'Grasshoppers', value: '10,000',     color: '#FF851B' },
            { name: 'Frogs',        value: '100',        color: '#0074D9' },
            { name: 'Snakes',       value: '10',         color: '#B10DC9' },
            { name: 'Hawks',        value: '1',          color: '#85144b' }
        ];
        levels.forEach((lv, i) => {
            drawPyramidLevel(i, levels.length, lv.color, lv.name, lv.value + ' individuals');
        });

        if (showLabels) {
            this.ctx.font = `bold ${Math.round(height * 0.032)}px Arial`;
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Pyramid of Numbers', width / 2, height * 0.10);
            this.ctx.font = `italic ${Math.round(height * 0.019)}px Arial`;
            this.ctx.fillStyle = '#555';
            this.ctx.fillText('Number of individual organisms at each trophic level',
                width / 2, height * 0.13);
        }
    }

    // Step indicator
    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${step} of 3`, width - 8, height - 4);

    if (showInset) {
        this.drawInset(width * 0.62, height * 0.06, width * 0.36, height * 0.22, insetType);
    }

    this.ctx.restore();
}


// ═══════════════════════════════════════════════════════════════════════════
// NITROGEN CYCLE — STEP-BY-STEP RENDERER
// Steps:
//   1 — Atmosphere + N₂ molecules
//   2 — + Fixation (N₂ → NH₃, bacteria nodes)
//   3 — + Nitrification (NH₃ → NO₂⁻ → NO₃⁻)
//   4 — + Assimilation (plants uptake NO₃⁻, animals consume plants)
//   5 — + Denitrification (NO₃⁻ → N₂ back to atmosphere) + ammonification
// ═══════════════════════════════════════════════════════════════════════════
renderNitrogenCycleDiagram(x, y, width, height, options = {}) {
    const {
        process     = 'complete',
        organism    = 'all',
        drawingStep = 5,
        showLabels  = true,
        showInset   = false,
        insetType   = 'n2-molecule'
    } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    const step = Math.max(1, Math.min(5, drawingStep));

    const stepLabels = [
        'Step 1 — Atmosphere (N₂ Reservoir)',
        'Step 2 — + Nitrogen Fixation (N₂ → NH₃)',
        'Step 3 — + Nitrification (NH₃ → NO₂⁻ → NO₃⁻)',
        'Step 4 — + Assimilation (Plant & Animal Uptake)',
        'Step 5 — + Denitrification & Ammonification'
    ];
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.05);

    // ── Layout constants ───────────────────────────────────────────────────
    const atmTop   = height * 0.07;
    const atmH     = height * 0.20;
    const groundY  = atmTop + atmH;            // soil surface
    const soilBotY = height * 0.95;

    // Key node positions (all in soil zone)
    const nh3X   = width * 0.20,  nh3Y  = groundY + height * 0.20;
    const no2X   = width * 0.50,  no2Y  = groundY + height * 0.20;
    const no3X   = width * 0.80,  no3Y  = groundY + height * 0.20;
    const plantX = width * 0.50,  plantY= groundY + height * 0.50;
    const animalX= width * 0.80,  animalY = groundY + height * 0.50;
    const orgNX  = width * 0.20,  orgNY = groundY + height * 0.50;

    const nodeR = width * 0.055;

    // Draw atmosphere band (always visible)
    // ── STEP 1 — Atmosphere ────────────────────────────────────────────────
    if (step >= 1) {
        this.ctx.fillStyle = 'rgba(135,206,250,0.28)';
        this.ctx.fillRect(0, atmTop, width, atmH);
        this.ctx.strokeStyle = 'rgba(100,170,220,0.4)';
        this.ctx.lineWidth = 1.5;
        this.ctx.strokeRect(0, atmTop, width, atmH);

        // Soil background
        this.ctx.fillStyle = 'rgba(139,69,19,0.12)';
        this.ctx.fillRect(0, groundY, width, soilBotY - groundY);

        // N₂ molecules scattered in atmosphere
        [[0.12,0.30],[0.28,0.55],[0.45,0.25],[0.60,0.65],[0.75,0.35],[0.88,0.60]]
        .forEach(([rx,ry]) => {
            AnatomicalShapes.drawN2Molecule(
                this.ctx, width * rx, atmTop + atmH * ry, width * 0.018
            );
        });

        if (showLabels) {
            this.addLabel('ATMOSPHERE — N₂  (78%)', width / 2, atmTop + height * 0.06, '#1A5276');
            this.ctx.font = `italic ${Math.round(height * 0.016)}px Arial`;
            this.ctx.fillStyle = '#555';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Most nitrogen is unavailable in this form',
                width / 2, atmTop + atmH - height * 0.02);
            this.addLabel('SOIL ZONE', width * 0.08, groundY + height * 0.04, '#8B4513', 'left');
        }
    }

    // Helper: draw a circular node with label
    const drawNode = (cx, cy, label, chemSymbol, fillColor, textColor = '#FFF') => {
        this.ctx.fillStyle = fillColor;
        this.ctx.beginPath();
        this.ctx.arc(cx, cy, nodeR, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = this.darkenHex(fillColor, 30);
        this.ctx.lineWidth = 2.5;
        this.ctx.stroke();
        if (showLabels) {
            this.ctx.font = `bold ${Math.round(height * 0.030)}px Arial`;
            this.ctx.fillStyle = textColor;
            this.ctx.textAlign = 'center';
            this.ctx.fillText(chemSymbol, cx, cy + height * 0.008);
            this.ctx.font = `${Math.round(height * 0.017)}px Arial`;
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.fillText(label, cx, cy + nodeR + height * 0.025);
        }
    };

    // Helper: labelled process arrow
    const processArrow = (x1, y1, x2, y2, color, processName, bacteriaName = null) => {
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = 2.5;
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();
        const angle = Math.atan2(y2 - y1, x2 - x1);
        const hs = 9;
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.moveTo(x2, y2);
        this.ctx.lineTo(x2 - hs * Math.cos(angle - Math.PI / 6),
                        y2 - hs * Math.sin(angle - Math.PI / 6));
        this.ctx.lineTo(x2 - hs * Math.cos(angle + Math.PI / 6),
                        y2 - hs * Math.sin(angle + Math.PI / 6));
        this.ctx.closePath();
        this.ctx.fill();
        if (showLabels) {
            const mx = (x1 + x2) / 2;
            const my = (y1 + y2) / 2;
            this.ctx.font = `bold ${Math.round(height * 0.019)}px Arial`;
            this.ctx.fillStyle = color;
            this.ctx.textAlign = 'center';
            this.ctx.fillText(processName, mx, my - height * 0.015);
            if (bacteriaName) {
                this.ctx.font = `italic ${Math.round(height * 0.015)}px Arial`;
                this.ctx.fillStyle = '#888';
                this.ctx.fillText(bacteriaName, mx, my - height * 0.001);
            }
        }
    };

    // ── STEP 2 — Fixation ─────────────────────────────────────────────────
    if (step >= 2) {
        drawNode(nh3X, nh3Y, 'Ammonia', 'NH₃', '#FF6B6B');

        // N₂ (atmosphere centre) → NH₃
        const atmCentreY = atmTop + atmH;
        this.ctx.strokeStyle = '#0074D9';
        this.ctx.lineWidth = 2.5;
        this.ctx.setLineDash([7, 4]);
        this.ctx.beginPath();
        this.ctx.moveTo(nh3X, atmCentreY);
        this.ctx.lineTo(nh3X, nh3Y - nodeR);
        this.ctx.stroke();
        this.ctx.setLineDash([]);
        // Arrowhead
        this.ctx.fillStyle = '#0074D9';
        this.ctx.beginPath();
        this.ctx.moveTo(nh3X, nh3Y - nodeR);
        this.ctx.lineTo(nh3X - 7, nh3Y - nodeR - 12);
        this.ctx.lineTo(nh3X + 7, nh3Y - nodeR - 12);
        this.ctx.closePath();
        this.ctx.fill();

        if (showLabels) {
            this.ctx.font = `bold ${Math.round(height * 0.019)}px Arial`;
            this.ctx.fillStyle = '#0074D9';
            this.ctx.textAlign = 'right';
            this.ctx.fillText('Nitrogen Fixation', nh3X - 6,
                (atmCentreY + nh3Y) / 2 - height * 0.01);
            this.ctx.font = `italic ${Math.round(height * 0.015)}px Arial`;
            this.ctx.fillStyle = '#888';
            this.ctx.fillText('Rhizobium, Azotobacter', nh3X - 6,
                (atmCentreY + nh3Y) / 2 + 12);
        }

        // Lightning fixation note in atmosphere
        if (showLabels) {
            this.ctx.font = `${Math.round(height * 0.015)}px Arial`;
            this.ctx.fillStyle = '#888';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('⚡ Lightning also fixes N₂', width * 0.55, atmTop + atmH * 0.55);
        }
    }

    // ── STEP 3 — Nitrification ────────────────────────────────────────────
    if (step >= 3) {
        drawNode(no2X, no2Y, 'Nitrite', 'NO₂⁻', '#4ECDC4');
        drawNode(no3X, no3Y, 'Nitrate', 'NO₃⁻', '#95E1D3', '#2C3E50');

        // NH₃ → NO₂⁻
        processArrow(nh3X + nodeR, nh3Y, no2X - nodeR, no2Y,
            '#FF6347', 'Nitrification', 'Nitrosomonas');

        // NO₂⁻ → NO₃⁻
        processArrow(no2X + nodeR, no2Y, no3X - nodeR, no3Y,
            '#FF6347', 'Nitrification', 'Nitrobacter');

        if (showLabels) {
            this.ctx.font = `italic ${Math.round(height * 0.015)}px Arial`;
            this.ctx.fillStyle = '#888';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('(requires O₂)',
                (nh3X + no2X) / 2, nh3Y + height * 0.04);
        }
    }

    // ── STEP 4 — Assimilation ─────────────────────────────────────────────
    if (step >= 4) {
        // Plant node
        this.ctx.fillStyle = '#2ECC40';
        this.ctx.beginPath();
        this.ctx.arc(plantX, plantY, nodeR, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = '#1A9929';
        this.ctx.lineWidth = 2.5;
        this.ctx.stroke();
        if (showLabels) {
            this.ctx.font = `bold ${Math.round(height * 0.022)}px Arial`;
            this.ctx.fillStyle = '#FFF';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Plants', plantX, plantY + height * 0.008);
            this.ctx.font = `${Math.round(height * 0.016)}px Arial`;
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.fillText('(organic N)', plantX, plantY + nodeR + height * 0.024);
        }

        // NO₃⁻ → Plant (assimilation, curving down)
        this.ctx.strokeStyle = '#27AE60';
        this.ctx.lineWidth = 2.5;
        this.ctx.beginPath();
        this.ctx.moveTo(no3X, no3Y + nodeR);
        this.ctx.quadraticCurveTo(no3X - width * 0.05, (no3Y + plantY) / 2,
            plantX + nodeR, plantY);
        this.ctx.stroke();
        this.ctx.fillStyle = '#27AE60';
        this.ctx.beginPath();
        this.ctx.moveTo(plantX + nodeR, plantY);
        this.ctx.lineTo(plantX + nodeR + 10, plantY - 6);
        this.ctx.lineTo(plantX + nodeR + 10, plantY + 6);
        this.ctx.closePath();
        this.ctx.fill();
        if (showLabels) {
            this.ctx.font = `bold ${Math.round(height * 0.018)}px Arial`;
            this.ctx.fillStyle = '#27AE60';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Assimilation',
                (no3X + plantX) / 2, (no3Y + plantY) / 2 - height * 0.02);
            this.ctx.font = `italic ${Math.round(height * 0.015)}px Arial`;
            this.ctx.fillStyle = '#888';
            this.ctx.fillText('root uptake', (no3X + plantX) / 2,
                (no3Y + plantY) / 2 - height * 0.005);
        }

        // Animal node
        this.ctx.fillStyle = '#FF851B';
        this.ctx.beginPath();
        this.ctx.arc(animalX, animalY, nodeR, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = '#C86500';
        this.ctx.lineWidth = 2.5;
        this.ctx.stroke();
        if (showLabels) {
            this.ctx.font = `bold ${Math.round(height * 0.022)}px Arial`;
            this.ctx.fillStyle = '#FFF';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Animals', animalX, animalY + height * 0.008);
            this.ctx.font = `${Math.round(height * 0.016)}px Arial`;
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.fillText('(proteins)', animalX, animalY + nodeR + height * 0.024);
        }

        // Plant → Animal (consumption)
        processArrow(plantX + nodeR, plantY, animalX - nodeR, animalY,
            '#E67E22', 'Consumption');
    }

    // ── STEP 5 — Denitrification & Ammonification ─────────────────────────
    if (step >= 5) {
        // Organic N node (dead matter / excretion)
        drawNode(orgNX, orgNY, 'Organic N', 'Org-N', '#A0522D');

        // Animals → Organic N (excretion/death)
        this.ctx.strokeStyle = '#A0522D';
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([5, 4]);
        this.ctx.beginPath();
        this.ctx.moveTo(animalX - nodeR, animalY);
        this.ctx.quadraticCurveTo(
            (animalX + orgNX) / 2, animalY + height * 0.06,
            orgNX + nodeR, orgNY
        );
        this.ctx.stroke();
        this.ctx.setLineDash([]);
        if (showLabels) {
            this.ctx.font = `italic ${Math.round(height * 0.016)}px Arial`;
            this.ctx.fillStyle = '#A0522D';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('death/excretion',
                (animalX + orgNX) / 2, animalY + height * 0.10);
        }

        // Plants → Organic N (death)
        this.ctx.strokeStyle = '#A0522D';
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([5, 4]);
        this.ctx.beginPath();
        this.ctx.moveTo(plantX - nodeR * 0.7, plantY + nodeR * 0.7);
        this.ctx.lineTo(orgNX + nodeR * 0.7, orgNY - nodeR * 0.7);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        // Organic N → NH₃ (ammonification)
        processArrow(orgNX, orgNY - nodeR, nh3X, nh3Y + nodeR,
            '#8B4513', 'Ammonification', 'decomposers');

        // Denitrification: NO₃⁻ → N₂ (back to atmosphere)
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(no3X, no3Y - nodeR);
        this.ctx.quadraticCurveTo(no3X + width * 0.08, atmTop + atmH * 0.4,
            no3X - width * 0.05, atmTop + atmH * 0.7);
        this.ctx.stroke();
        this.ctx.fillStyle = '#E74C3C';
        this.ctx.beginPath();
        this.ctx.moveTo(no3X - width * 0.05, atmTop + atmH * 0.7);
        this.ctx.lineTo(no3X - width * 0.05 - 8, atmTop + atmH * 0.7 + 12);
        this.ctx.lineTo(no3X - width * 0.05 + 8, atmTop + atmH * 0.7 + 12);
        this.ctx.closePath();
        this.ctx.fill();

        if (showLabels) {
            this.ctx.font = `bold ${Math.round(height * 0.019)}px Arial`;
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Denitrification',
                no3X + width * 0.04, (no3Y - nodeR + atmTop + atmH * 0.7) / 2);
            this.ctx.font = `italic ${Math.round(height * 0.015)}px Arial`;
            this.ctx.fillStyle = '#888';
            this.ctx.fillText('Pseudomonas (anaerobic)',
                no3X + width * 0.04, (no3Y - nodeR + atmTop + atmH * 0.7) / 2 + 14);

            // Full legend
            this.drawLegend(width * 0.04, height * 0.88, [
                { color: '#0074D9', label: 'Fixation (N₂ → NH₃)' },
                { color: '#FF6347', label: 'Nitrification (NH₃ → NO₃⁻)' },
                { color: '#27AE60', label: 'Assimilation (plant uptake)' },
                { color: '#8B4513', label: 'Ammonification (decomposition)' },
                { color: '#E74C3C', label: 'Denitrification (→ N₂)' }
            ]);
        }
    }

    // Step indicator
    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${step} of 5`, width - 8, height - 4);

    if (showInset) {
        this.drawInset(width * 0.60, height * 0.06, width * 0.38, height * 0.22, insetType);
    }

    this.ctx.restore();
}

// ═══════════════════════════════════════════════════════════════════════════
// WATER CYCLE — STEP-BY-STEP RENDERER
// Steps:
//   1 — Landscape + sun + water body (ocean/lake)
//   2 — + Evaporation & transpiration arrows + vapour
//   3 — + Cloud formation (condensation)
//   4 — + Precipitation (rain, snow)
//   5 — + Infiltration + runoff + groundwater + full labels
// ═══════════════════════════════════════════════════════════════════════════
renderWaterCycleDiagram(x, y, width, height, options = {}) {
    const {
        process     = 'complete',
        scale       = 'global',
        drawingStep = 5,
        showLabels  = true,
        showInset   = false,
        insetType   = 'water-molecule'
    } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    const step = Math.max(1, Math.min(5, drawingStep));

    const stepLabels = [
        'Step 1 — Landscape & Water Body',
        'Step 2 — + Evaporation & Transpiration',
        'Step 3 — + Condensation & Cloud Formation',
        'Step 4 — + Precipitation',
        'Step 5 — + Infiltration, Runoff & Groundwater'
    ];
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.05);

    // ── Layout constants ───────────────────────────────────────────────────
    const skyTop     = height * 0.07;
    const skyH       = height * 0.40;          // sky zone height
    const groundY    = skyTop + skyH;          // land surface
    const oceanW     = width * 0.32;           // ocean on left
    const oceanX     = 0;
    const landStartX = oceanW;
    const mountainPeakX = width * 0.65;
    const mountainPeakY = groundY - height * 0.22;
    const groundBotY = height * 0.97;

    // ── STEP 1 — Landscape ────────────────────────────────────────────────
    if (step >= 1) {
        // Sky gradient
        const skyGrad = this.ctx.createLinearGradient(0, skyTop, 0, groundY);
        skyGrad.addColorStop(0, '#87CEEB');
        skyGrad.addColorStop(1, '#E0F6FF');
        this.ctx.fillStyle = skyGrad;
        this.ctx.fillRect(0, skyTop, width, skyH);

        // Ocean
        const oceanGrad = this.ctx.createLinearGradient(0, groundY, 0, groundBotY);
        oceanGrad.addColorStop(0, '#4A90E2');
        oceanGrad.addColorStop(1, '#2E5C8A');
        this.ctx.fillStyle = oceanGrad;
        this.ctx.fillRect(oceanX, groundY, oceanW, groundBotY - groundY);

        // Wave lines on ocean
        this.ctx.strokeStyle = 'rgba(255,255,255,0.5)';
        this.ctx.lineWidth = 1.5;
        for (let w = 0; w < 4; w++) {
            const wy = groundY + height * (0.04 + w * 0.06);
            this.ctx.beginPath();
            this.ctx.moveTo(oceanX, wy);
            for (let px = 0; px <= oceanW; px += 12) {
                this.ctx.lineTo(px, wy + Math.sin(px / 10) * 3);
            }
            this.ctx.stroke();
        }

        // Land (green rolling hills leading to mountain)
        const landGrad = this.ctx.createLinearGradient(0, groundY, 0, groundBotY);
        landGrad.addColorStop(0, '#6B8E23');
        landGrad.addColorStop(0.3, '#8B7355');
        landGrad.addColorStop(1, '#8B7355');
        this.ctx.fillStyle = landGrad;
        this.ctx.beginPath();
        this.ctx.moveTo(landStartX, groundY);
        this.ctx.lineTo(mountainPeakX, mountainPeakY);
        this.ctx.lineTo(width, groundY - height * 0.08);
        this.ctx.lineTo(width, groundBotY);
        this.ctx.lineTo(landStartX, groundBotY);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.strokeStyle = 'rgba(0,0,0,0.2)';
        this.ctx.lineWidth = 1;
        this.ctx.stroke();

        // Snow cap on mountain
        this.ctx.fillStyle = '#FFF';
        this.ctx.beginPath();
        this.ctx.moveTo(mountainPeakX, mountainPeakY);
        this.ctx.lineTo(mountainPeakX - width * 0.04, mountainPeakY + height * 0.04);
        this.ctx.lineTo(mountainPeakX + width * 0.04, mountainPeakY + height * 0.04);
        this.ctx.closePath();
        this.ctx.fill();

        // Vegetation on land
        this.ctx.fillStyle = '#228B22';
        [[0.40,0],[0.48,0.02],[0.44,-0.01],[0.52,0.01]].forEach(([rx, dy]) => {
            const tx = width * rx;
            const ty = groundY + height * dy;
            this.ctx.beginPath();
            this.ctx.arc(tx, ty - height * 0.04, width * 0.018, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.fillRect(tx - width * 0.005, ty - height * 0.04, width * 0.01, height * 0.05);
        });

        // Sun
        this.ctx.fillStyle = '#FFD700';
        this.ctx.beginPath();
        this.ctx.arc(width * 0.88, skyTop + height * 0.08, width * 0.055, 0, Math.PI * 2);
        this.ctx.fill();
        for (let r = 0; r < 12; r++) {
            const ang = (r / 12) * Math.PI * 2;
            this.ctx.strokeStyle = '#FFD700';
            this.ctx.lineWidth = 2.5;
            this.ctx.beginPath();
            this.ctx.moveTo(width * 0.88 + Math.cos(ang) * width * 0.060,
                            skyTop + height * 0.08 + Math.sin(ang) * width * 0.060);
            this.ctx.lineTo(width * 0.88 + Math.cos(ang) * width * 0.080,
                            skyTop + height * 0.08 + Math.sin(ang) * width * 0.080);
            this.ctx.stroke();
        }

        if (showLabels) {
            this.addLabel('Ocean', oceanW / 2, groundY + height * 0.10, '#FFF');
            this.addLabel('Mountain', mountainPeakX, mountainPeakY - height * 0.025, '#5D4037');
        }
    }

    // ── STEP 2 — Evaporation & Transpiration ──────────────────────────────
    if (step >= 2) {
        // Evaporation from ocean (upward dashed arrows)
        this.ctx.strokeStyle = '#FF6B6B';
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([6, 4]);
        for (let i = 0; i < 5; i++) {
            const ax = oceanX + oceanW * (0.15 + i * 0.16);
            const topY = skyTop + skyH * 0.25;
            this.ctx.beginPath();
            this.ctx.moveTo(ax, groundY - 2);
            this.ctx.lineTo(ax + (i - 2) * width * 0.01, topY);
            this.ctx.stroke();
            // Arrowhead
            this.ctx.fillStyle = '#FF6B6B';
            this.ctx.setLineDash([]);
            this.ctx.beginPath();
            this.ctx.moveTo(ax + (i - 2) * width * 0.01, topY);
            this.ctx.lineTo(ax + (i - 2) * width * 0.01 - 5, topY + 10);
            this.ctx.lineTo(ax + (i - 2) * width * 0.01 + 5, topY + 10);
            this.ctx.closePath();
            this.ctx.fill();
            this.ctx.setLineDash([6, 4]);
        }
        this.ctx.setLineDash([]);

        // Transpiration from trees (green upward arrows)
        this.ctx.strokeStyle = '#27AE60';
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([5, 4]);
        [[0.40, 0.05],[0.44, 0.03],[0.48, 0.05]].forEach(([rx, dy]) => {
            const ax = width * rx;
            const startY = groundY - height * 0.07;
            const endY   = skyTop + skyH * 0.35;
            this.ctx.beginPath();
            this.ctx.moveTo(ax, startY);
            this.ctx.lineTo(ax, endY);
            this.ctx.stroke();
            this.ctx.setLineDash([]);
            this.ctx.fillStyle = '#27AE60';
            this.ctx.beginPath();
            this.ctx.moveTo(ax, endY);
            this.ctx.lineTo(ax - 5, endY + 10);
            this.ctx.lineTo(ax + 5, endY + 10);
            this.ctx.closePath();
            this.ctx.fill();
            this.ctx.setLineDash([5, 4]);
        });
        this.ctx.setLineDash([]);

        if (showLabels) {
            this.ctx.font = `bold ${Math.round(height * 0.020)}px Arial`;
            this.ctx.fillStyle = '#FF6B6B';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Evaporation', oceanW / 2, skyTop + skyH * 0.20);
            this.ctx.fillStyle = '#27AE60';
            this.ctx.fillText('Transpiration', width * 0.44, skyTop + skyH * 0.28);
        }
    }

    // ── STEP 3 — Condensation / Clouds ────────────────────────────────────
    if (step >= 3) {
        // Helper: draw a cloud shape
        const drawCloud = (cx, cy, cw, ch, fillColor = '#FFF') => {
            this.ctx.fillStyle = fillColor;
            this.ctx.beginPath();
            this.ctx.arc(cx - cw * 0.25, cy, ch * 0.55, 0, Math.PI * 2);
            this.ctx.arc(cx,             cy - ch * 0.20, ch * 0.70, 0, Math.PI * 2);
            this.ctx.arc(cx + cw * 0.25, cy, ch * 0.55, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.strokeStyle = '#BDC3C7';
            this.ctx.lineWidth = 1.5;
            this.ctx.stroke();
        };

        // Two main clouds
        drawCloud(width * 0.28, skyTop + skyH * 0.22, width * 0.20, height * 0.065);
        drawCloud(width * 0.58, skyTop + skyH * 0.15, width * 0.22, height * 0.072, '#E8E8E8');

        if (showLabels) {
            this.ctx.font = `bold ${Math.round(height * 0.019)}px Arial`;
            this.ctx.fillStyle = '#4A90E2';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Condensation', width * 0.28, skyTop + skyH * 0.10);
            this.ctx.font = `italic ${Math.round(height * 0.015)}px Arial`;
            this.ctx.fillStyle = '#888';
            this.ctx.fillText('vapour → water droplets → cloud', width * 0.28, skyTop + skyH * 0.10 + 13);
        }
    }

    // ── STEP 4 — Precipitation ────────────────────────────────────────────
    if (step >= 4) {
        // Rain drops falling from left cloud
        this.ctx.strokeStyle = '#4A90E2';
        this.ctx.lineWidth = 1.8;
        for (let r = 0; r < 18; r++) {
            const rx = width * (0.16 + Math.random() * 0.22);
            const ry = skyTop + skyH * (0.28 + Math.random() * 0.30);
            this.ctx.beginPath();
            this.ctx.moveTo(rx, ry);
            this.ctx.lineTo(rx - width * 0.003, ry + height * 0.030);
            this.ctx.stroke();
        }

        // Snow from right (mountain) cloud
        this.ctx.fillStyle = '#FFF';
        for (let s = 0; s < 12; s++) {
            const sx = width * (0.46 + Math.random() * 0.24);
            const sy = skyTop + skyH * (0.22 + Math.random() * 0.28);
            AnatomicalShapes.drawSnowflake(this.ctx, sx, sy, width * 0.008);
        }

        if (showLabels) {
            this.ctx.font = `bold ${Math.round(height * 0.019)}px Arial`;
            this.ctx.fillStyle = '#4A90E2';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Precipitation', width * 0.25, groundY - height * 0.04);
            this.ctx.font = `italic ${Math.round(height * 0.015)}px Arial`;
            this.ctx.fillStyle = '#888';
            this.ctx.fillText('rain, snow, hail', width * 0.25, groundY - height * 0.025);
        }
    }

    // ── STEP 5 — Infiltration, Runoff & Groundwater ───────────────────────
    if (step >= 5) {
        // Runoff: curved arrow from mountain → ocean
        this.ctx.strokeStyle = '#4A90E2';
        this.ctx.lineWidth = 3.5;
        this.ctx.beginPath();
        this.ctx.moveTo(mountainPeakX, mountainPeakY + height * 0.06);
        this.ctx.bezierCurveTo(
            width * 0.56, groundY + height * 0.04,
            width * 0.42, groundY + height * 0.06,
            oceanW, groundY + height * 0.02
        );
        this.ctx.stroke();
        this.ctx.fillStyle = '#4A90E2';
        this.ctx.beginPath();
        this.ctx.moveTo(oceanW, groundY + height * 0.02);
        this.ctx.lineTo(oceanW + 10, groundY + height * 0.02 - 6);
        this.ctx.lineTo(oceanW + 10, groundY + height * 0.02 + 6);
        this.ctx.closePath();
        this.ctx.fill();

        // Infiltration: dotted downward arrows into soil
        this.ctx.strokeStyle = '#8B4513';
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([4, 4]);
        [[0.50],[0.57],[0.63]].forEach(([rx]) => {
            const ix = width * rx;
            this.ctx.beginPath();
            this.ctx.moveTo(ix, groundY + height * 0.01);
            this.ctx.lineTo(ix, groundY + height * 0.14);
            this.ctx.stroke();
        });
        this.ctx.setLineDash([]);

        // Groundwater zone
        this.ctx.fillStyle = 'rgba(74,144,226,0.22)';
        this.ctx.fillRect(landStartX, groundY + height * 0.15,
            width - landStartX, height * 0.12);
        this.ctx.strokeStyle = '#4A90E2';
        this.ctx.lineWidth = 1.5;
        this.ctx.strokeRect(landStartX, groundY + height * 0.15,
            width - landStartX, height * 0.12);

        // Groundwater flow → ocean (horizontal arrow)
        this.ctx.strokeStyle = '#2E5C8A';
        this.ctx.lineWidth = 2.5;
        this.ctx.setLineDash([6, 4]);
        this.ctx.beginPath();
        this.ctx.moveTo(landStartX, groundY + height * 0.21);
        this.ctx.lineTo(oceanW, groundY + height * 0.21);
        this.ctx.stroke();
        this.ctx.setLineDash([]);
        this.ctx.fillStyle = '#2E5C8A';
        this.ctx.beginPath();
        this.ctx.moveTo(oceanW, groundY + height * 0.21);
        this.ctx.lineTo(oceanW + 10, groundY + height * 0.21 - 5);
        this.ctx.lineTo(oceanW + 10, groundY + height * 0.21 + 5);
        this.ctx.closePath();
        this.ctx.fill();

        if (showLabels) {
            this.ctx.font = `bold ${Math.round(height * 0.019)}px Arial`;
            this.ctx.fillStyle = '#4A90E2';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Surface Runoff', width * 0.52, groundY + height * 0.04);

            this.ctx.fillStyle = '#8B4513';
            this.ctx.fillText('Infiltration', width * 0.63, groundY + height * 0.10);

            this.ctx.fillStyle = '#2E5C8A';
            this.ctx.fillText('Groundwater Flow', width * 0.64, groundY + height * 0.21);

            this.addLabel('Groundwater\nZone', width * 0.80, groundY + height * 0.24, '#2E5C8A');

            // Legend
            this.drawLegend(width * 0.04, groundY + height * 0.18, [
                { color: '#FF6B6B', label: 'Evaporation / Transpiration' },
                { color: '#4A90E2', label: 'Precipitation / Runoff'      },
                { color: '#8B4513', label: 'Infiltration'                },
                { color: '#2E5C8A', label: 'Groundwater flow'            }
            ]);
        }
    }

    // Step indicator
    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${step} of 5`, width - 8, height - 4);

    if (showInset) {
        this.drawInset(width * 0.60, height * 0.06, width * 0.38, height * 0.22, insetType);
    }

    this.ctx.restore();
}

// ═══════════════════════════════════════════════════════════════════════════
// POPULATION GROWTH — STEP-BY-STEP RENDERER
// Steps:
//   1 — Axes + exponential J-curve
//   2 — + Logistic S-curve + carrying capacity line
//   3 — + Phase annotations, equations, legend, comparison notes
// ═══════════════════════════════════════════════════════════════════════════
renderPopulationGrowthDiagram(x, y, width, height, options = {}) {
    const {
        curveType   = 'both',
        phase       = 'complete',
        drawingStep = 3,
        showLabels  = true,
        showInset   = false,
        insetType   = 'growth-equation'
    } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    const step = Math.max(1, Math.min(3, drawingStep));

    const stepLabels = [
        'Step 1 — Exponential Growth (J-curve)',
        'Step 2 — + Logistic Growth (S-curve) & Carrying Capacity',
        'Step 3 — + Phase Labels, Equations & Comparison'
    ];
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.05);

    // ── Layout constants ───────────────────────────────────────────────────
    const axisLeft   = width  * 0.12;
    const axisBot    = height * 0.80;
    const axisRight  = width  * 0.90;
    const axisTop    = height * 0.14;
    const plotW      = axisRight - axisLeft;
    const plotH      = axisBot   - axisTop;

    const K_y        = axisTop + plotH * 0.18;    // carrying capacity Y position

    // ── STEP 1 — Axes + Exponential curve ─────────────────────────────────
    if (step >= 1) {
        // Grid lines (light)
        this.ctx.strokeStyle = '#ECF0F1';
        this.ctx.lineWidth = 1;
        for (let g = 1; g <= 4; g++) {
            const gy = axisTop + plotH * (g / 5);
            this.ctx.beginPath();
            this.ctx.moveTo(axisLeft, gy);
            this.ctx.lineTo(axisRight, gy);
            this.ctx.stroke();
        }

        // Axes
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 2.5;
        this.ctx.beginPath();
        this.ctx.moveTo(axisLeft, axisTop);
        this.ctx.lineTo(axisLeft, axisBot);
        this.ctx.lineTo(axisRight, axisBot);
        this.ctx.stroke();

        // Y-axis arrowhead
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.beginPath();
        this.ctx.moveTo(axisLeft, axisTop - 6);
        this.ctx.lineTo(axisLeft - 5, axisTop + 8);
        this.ctx.lineTo(axisLeft + 5, axisTop + 8);
        this.ctx.closePath();
        this.ctx.fill();

        // X-axis arrowhead
        this.ctx.beginPath();
        this.ctx.moveTo(axisRight + 6, axisBot);
        this.ctx.lineTo(axisRight - 8, axisBot - 5);
        this.ctx.lineTo(axisRight - 8, axisBot + 5);
        this.ctx.closePath();
        this.ctx.fill();

        if (showLabels) {
            // Axis labels
            this.ctx.save();
            this.ctx.translate(axisLeft - width * 0.07, (axisTop + axisBot) / 2);
            this.ctx.rotate(-Math.PI / 2);
            this.ctx.font = `bold ${Math.round(height * 0.025)}px Arial`;
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Population Size (N)', 0, 0);
            this.ctx.restore();

            this.ctx.font = `bold ${Math.round(height * 0.025)}px Arial`;
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Time (t)', (axisLeft + axisRight) / 2, axisBot + height * 0.06);

            this.ctx.textAlign = 'right';
            this.ctx.font = `${Math.round(height * 0.018)}px Arial`;
            this.ctx.fillStyle = '#888';
            this.ctx.fillText('N', axisLeft - 4, axisTop + 4);
            this.ctx.fillText('0', axisLeft - 4, axisBot + 4);
        }

        // Exponential (J) curve
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 3.5;
        this.ctx.beginPath();
        let firstExp = true;
        for (let px = 0; px <= plotW; px += 2) {
            const t = px / plotW;
            const raw = (Math.exp(4.2 * t) - 1) / (Math.exp(4.2) - 1);
            const cy = axisBot - raw * plotH * 0.95;
            if (cy < axisTop) break;
            if (firstExp) { this.ctx.moveTo(axisLeft + px, cy); firstExp = false; }
            else            this.ctx.lineTo(axisLeft + px, cy);
        }
        this.ctx.stroke();

        if (showLabels) {
            this.ctx.font = `bold ${Math.round(height * 0.022)}px Arial`;
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.textAlign = 'right';
            this.ctx.fillText('J-curve', axisRight - 4, axisTop + height * 0.03);
            this.ctx.font = `italic ${Math.round(height * 0.017)}px Arial`;
            this.ctx.fillStyle = '#888';
            this.ctx.fillText('(exponential)', axisRight - 4, axisTop + height * 0.048);
        }
    }

    // ── STEP 2 — Logistic curve + K line ──────────────────────────────────
    if (step >= 2) {
        // Carrying capacity dashed line
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([10, 6]);
        this.ctx.beginPath();
        this.ctx.moveTo(axisLeft, K_y);
        this.ctx.lineTo(axisRight, K_y);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        if (showLabels) {
            this.ctx.font = `bold ${Math.round(height * 0.020)}px Arial`;
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('K  (Carrying Capacity)', axisRight + 4, K_y + 4);
        }

        // Logistic (S) curve
        const K_fraction = 1 - (K_y - axisTop) / plotH;   // normalised K in plot space
        this.ctx.strokeStyle = '#0074D9';
        this.ctx.lineWidth = 3.5;
        this.ctx.beginPath();
        let firstLog = true;
        for (let px = 0; px <= plotW; px += 2) {
            const t = px / plotW;
            const logisticN = K_fraction / (1 + Math.exp(-7 * (t - 0.5)));
            const cy = axisBot - logisticN * plotH;
            if (firstLog) { this.ctx.moveTo(axisLeft + px, cy); firstLog = false; }
            else            this.ctx.lineTo(axisLeft + px, cy);
        }
        this.ctx.stroke();

        if (showLabels) {
            this.ctx.font = `bold ${Math.round(height * 0.022)}px Arial`;
            this.ctx.fillStyle = '#0074D9';
            this.ctx.textAlign = 'right';
            this.ctx.fillText('S-curve', axisRight - 4, K_y + height * 0.03);
            this.ctx.font = `italic ${Math.round(height * 0.017)}px Arial`;
            this.ctx.fillStyle = '#888';
            this.ctx.fillText('(logistic)', axisRight - 4, K_y + height * 0.048);
        }
    }

    // ── STEP 3 — Phase annotations + equations ─────────────────────────────
    if (step >= 3) {
        // Shade logistic phases
        const phases = [
            { x1: 0.00, x2: 0.18, color: 'rgba(255,220,100,0.18)', name: 'Lag\nPhase' },
            { x1: 0.18, x2: 0.50, color: 'rgba(100,200,255,0.18)', name: 'Exponential\nPhase' },
            { x1: 0.50, x2: 0.75, color: 'rgba(200,150,255,0.18)', name: 'Transition\nPhase' },
            { x1: 0.75, x2: 1.00, color: 'rgba(150,255,150,0.18)', name: 'Plateau\n(Equilibrium)' }
        ];
        phases.forEach(ph => {
            this.ctx.fillStyle = ph.color;
            this.ctx.fillRect(axisLeft + ph.x1 * plotW, axisTop,
                (ph.x2 - ph.x1) * plotW, plotH);
            if (showLabels) {
                const midX = axisLeft + (ph.x1 + ph.x2) / 2 * plotW;
                this.ctx.font = `italic ${Math.round(height * 0.017)}px Arial`;
                this.ctx.fillStyle = '#555';
                this.ctx.textAlign = 'center';
                ph.name.split('\n').forEach((line, li) => {
                    this.ctx.fillText(line, midX, axisBot + height * 0.04 + li * 13);
                });
            }
        });

        // Phase divider lines
        [0.18, 0.50, 0.75].forEach(xf => {
            this.ctx.strokeStyle = 'rgba(0,0,0,0.15)';
            this.ctx.lineWidth = 1;
            this.ctx.setLineDash([4, 4]);
            this.ctx.beginPath();
            this.ctx.moveTo(axisLeft + xf * plotW, axisTop);
            this.ctx.lineTo(axisLeft + xf * plotW, axisBot);
            this.ctx.stroke();
            this.ctx.setLineDash([]);
        });

        // K/2 line (max growth rate)
        const K2_y = K_y + (axisBot - K_y) / 2;
        this.ctx.strokeStyle = '#F39C12';
        this.ctx.lineWidth = 1.5;
        this.ctx.setLineDash([6, 4]);
        this.ctx.beginPath();
        this.ctx.moveTo(axisLeft, K2_y);
        this.ctx.lineTo(axisRight, K2_y);
        this.ctx.stroke();
        this.ctx.setLineDash([]);
        if (showLabels) {
            this.ctx.font = `italic ${Math.round(height * 0.016)}px Arial`;
            this.ctx.fillStyle = '#F39C12';
            this.ctx.textAlign = 'right';
            this.ctx.fillText('K/2 (max growth rate)', axisRight - 4, K2_y - 4);
        }

        // Equations
        if (showLabels) {
            this.ctx.font = `bold ${Math.round(height * 0.020)}px Arial`;
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('dN/dt = rN', axisLeft + plotW * 0.18, axisTop + height * 0.04);
            this.ctx.font = `${Math.round(height * 0.016)}px Arial`;
            this.ctx.fillStyle = '#888';
            this.ctx.fillText('(exponential)', axisLeft + plotW * 0.18, axisTop + height * 0.06);

            this.ctx.font = `bold ${Math.round(height * 0.020)}px Arial`;
            this.ctx.fillStyle = '#0074D9';
            this.ctx.fillText('dN/dt = rN(K−N)/K', axisLeft + plotW * 0.45, K_y + height * 0.06);
            this.ctx.font = `${Math.round(height * 0.016)}px Arial`;
            this.ctx.fillStyle = '#888';
            this.ctx.fillText('(logistic)', axisLeft + plotW * 0.45, K_y + height * 0.078);

            // Legend
            this.drawLegend(axisLeft, height * 0.90, [
                { color: '#E74C3C', label: 'Exponential growth (unlimited resources)' },
                { color: '#0074D9', label: 'Logistic growth (limited resources → K)'  }
            ]);
        }
    }

    // Step indicator
    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${step} of 3`, width - 8, height - 4);

    if (showInset) {
        this.drawInset(width * 0.60, height * 0.06, width * 0.36, height * 0.22, insetType);
    }

    this.ctx.restore();
}

// ═══════════════════════════════════════════════════════════════════════════
// ECOSYSTEM — STEP-BY-STEP RENDERER
// Steps:
//   1 — Abiotic factors (background + factor icons)
//   2 — + Producers layer
//   3 — + Consumers (herbivores + carnivores)
//   4 — + Decomposers + nutrient return arrow
//   5 — + Energy flow arrow + interaction labels + legend
// ═══════════════════════════════════════════════════════════════════════════
renderEcosystemDiagram(x, y, width, height, options = {}) {
    const {
        ecosystemType = 'forest',
        component     = 'complete',
        drawingStep   = 5,
        showLabels    = true,
        showInset     = false,
        insetType     = 'energy-nutrient-flow'
    } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    const step = Math.max(1, Math.min(5, drawingStep));

    const stepLabels = [
        'Step 1 — Abiotic Factors (Non-living Environment)',
        'Step 2 — + Producers (Autotrophs)',
        'Step 3 — + Consumers (Heterotrophs)',
        'Step 4 — + Decomposers (Saprotrophs)',
        'Step 5 — + Energy Flow & Nutrient Cycling'
    ];
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.05);

    // ── Ecosystem background colours ───────────────────────────────────────
    const bgProfiles = {
        forest:    { sky: '#87CEEB', land: '#8B7355', ground: '#6B4226' },
        aquatic:   { sky: '#4A90E2', land: '#2E5C8A', ground: '#1A3A5C' },
        grassland: { sky: '#87CEEB', land: '#9ACD32', ground: '#7B8B3A' },
        desert:    { sky: '#FFD700', land: '#DEB887', ground: '#C9A96E' }
    };
    const bg = bgProfiles[ecosystemType] || bgProfiles.forest;

    const skyBotY    = height * 0.48;          // sky/land divider
    const groundBotY = height * 0.96;

    // ── STEP 1 — Abiotic background ────────────────────────────────────────
    if (step >= 1) {
        // Sky
        const skyGrad = this.ctx.createLinearGradient(0, height * 0.07, 0, skyBotY);
        skyGrad.addColorStop(0, bg.sky);
        skyGrad.addColorStop(1, '#DDEEFF');
        this.ctx.fillStyle = skyGrad;
        this.ctx.fillRect(0, height * 0.07, width, skyBotY - height * 0.07);

        // Ground
        const landGrad = this.ctx.createLinearGradient(0, skyBotY, 0, groundBotY);
        landGrad.addColorStop(0, bg.land);
        landGrad.addColorStop(1, bg.ground);
        this.ctx.fillStyle = landGrad;
        this.ctx.fillRect(0, skyBotY, width, groundBotY - skyBotY);

        // Sun
        this.ctx.fillStyle = '#FFD700';
        this.ctx.beginPath();
        this.ctx.arc(width * 0.88, height * 0.13, width * 0.048, 0, Math.PI * 2);
        this.ctx.fill();

        // Abiotic factor boxes
        const abioticFactors = [
            { icon: '☀', name: 'Sunlight',    x: 0.12, y: 0.17, color: '#F39C12' },
            { icon: '💧', name: 'Water',       x: 0.30, y: 0.17, color: '#3498DB' },
            { icon: '🌡', name: 'Temperature', x: 0.50, y: 0.17, color: '#E74C3C' },
            { icon: '🌬', name: 'Air',         x: 0.68, y: 0.17, color: '#95A5A6' }
        ];
        abioticFactors.forEach(f => {
            this.ctx.fillStyle = 'rgba(255,255,255,0.75)';
            this.ctx.beginPath();
            this.ctx.roundRect(width * f.x - width * 0.065, height * f.y,
                width * 0.13, height * 0.09, 6);
            this.ctx.fill();
            this.ctx.strokeStyle = f.color;
            this.ctx.lineWidth = 2;
            this.ctx.stroke();
            if (showLabels) {
                this.ctx.font = `${Math.round(height * 0.032)}px Arial`;
                this.ctx.fillStyle = f.color;
                this.ctx.textAlign = 'center';
                this.ctx.fillText(f.icon, width * f.x, height * f.y + height * 0.044);
                this.ctx.font = `${Math.round(height * 0.016)}px Arial`;
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.fillText(f.name, width * f.x, height * f.y + height * 0.075);
            }
        });

        if (showLabels) {
            this.addLabel('ABIOTIC FACTORS', width / 2, height * 0.095, '#2980B9');
        }
    }

    // ── STEP 2 — Producers ─────────────────────────────────────────────────
    if (step >= 2) {
        const producerData = {
            forest:    [{ x:0.18, label:'Oak Tree'   }, { x:0.45, label:'Fern'    }, { x:0.72, label:'Shrub'    }],
            aquatic:   [{ x:0.18, label:'Algae'      }, { x:0.45, label:'Kelp'    }, { x:0.72, label:'Diatoms'  }],
            grassland: [{ x:0.18, label:'Grass'      }, { x:0.45, label:'Clover'  }, { x:0.72, label:'Wildflower'}],
            desert:    [{ x:0.18, label:'Cactus'     }, { x:0.45, label:'Shrub'   }, { x:0.72, label:'Succulent'}]
        };
        const prods = producerData[ecosystemType];

        prods.forEach(p => {
            const px = width * p.x;
            const py = skyBotY - height * 0.06;

            // Simple plant silhouette
            this.ctx.fillStyle = '#2ECC40';
            this.ctx.beginPath();
            this.ctx.arc(px, py - height * 0.06, width * 0.045, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.fillStyle = '#1A9929';
            this.ctx.fillRect(px - width * 0.008, py - height * 0.06, width * 0.016, height * 0.08);

            if (showLabels) {
                this.addLabel(p.label, px, py + height * 0.02, '#1A9929');
                this.addLabel('Producer', px, py + height * 0.038, '#27AE60');
            }
        });

        if (showLabels) {
            this.addLabel('PRODUCERS', width / 2, skyBotY + height * 0.05, '#27AE60');
        }
    }

    // ── STEP 3 — Consumers ─────────────────────────────────────────────────
    if (step >= 3) {
        // Herbivore node
        const herbX = width * 0.28, herbY = skyBotY + height * 0.16;
        this.ctx.fillStyle = '#FF851B';
        this.ctx.beginPath();
        this.ctx.ellipse(herbX, herbY, width * 0.07, height * 0.05, 0, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = '#C86500';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
        if (showLabels) {
            this.ctx.font = `bold ${Math.round(height * 0.021)}px Arial`;
            this.ctx.fillStyle = '#FFF';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Herbivore', herbX, herbY + height * 0.007);
            this.addLabel('Primary Consumer', herbX, herbY + height * 0.065, '#C86500');
        }

        // Carnivore node
        const carnX = width * 0.68, carnY = skyBotY + height * 0.16;
        this.ctx.fillStyle = '#E74C3C';
        this.ctx.beginPath();
        this.ctx.ellipse(carnX, carnY, width * 0.07, height * 0.05, 0, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = '#C0392B';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
        if (showLabels) {
            this.ctx.font = `bold ${Math.round(height * 0.021)}px Arial`;
            this.ctx.fillStyle = '#FFF';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Carnivore', carnX, carnY + height * 0.007);
            this.addLabel('Secondary Consumer', carnX, carnY + height * 0.065, '#C0392B');
        }

        // Herbivore → Carnivore arrow (predation)
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 2.5;
        this.ctx.beginPath();
        this.ctx.moveTo(herbX + width * 0.07, herbY);
        this.ctx.lineTo(carnX - width * 0.07, carnY);
        this.ctx.stroke();
        this.ctx.fillStyle = '#E74C3C';
        this.ctx.beginPath();
        this.ctx.moveTo(carnX - width * 0.07, carnY);
        this.ctx.lineTo(carnX - width * 0.07 - 10, carnY - 5);
        this.ctx.lineTo(carnX - width * 0.07 - 10, carnY + 5);
        this.ctx.closePath();
        this.ctx.fill();
        if (showLabels) {
            this.ctx.font = `italic ${Math.round(height * 0.016)}px Arial`;
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('predation', (herbX + carnX) / 2, herbY - height * 0.02);
        }

        if (showLabels) {
            this.addLabel('CONSUMERS', width / 2, skyBotY + height * 0.09, '#C0392B');
        }
    }

    // ── STEP 4 — Decomposers ───────────────────────────────────────────────
    if (step >= 4) {
        const decompX = width * 0.50, decompY = groundBotY - height * 0.10;
        this.ctx.fillStyle = '#85144b';
        this.ctx.beginPath();
        this.ctx.ellipse(decompX, decompY, width * 0.10, height * 0.045, 0, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = '#65042b';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
        if (showLabels) {
            this.ctx.font = `bold ${Math.round(height * 0.021)}px Arial`;
            this.ctx.fillStyle = '#FFF';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Decomposers', decompX, decompY + height * 0.007);
            this.ctx.font = `${Math.round(height * 0.016)}px Arial`;
            this.ctx.fillStyle = '#FFC0CB';
            this.ctx.fillText('Bacteria & Fungi', decompX, decompY + height * 0.023);
        }

        // Dead matter → decomposers (dashed)
        this.ctx.strokeStyle = '#85144b';
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([5, 4]);
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.30, skyBotY + height * 0.22);
        this.ctx.quadraticCurveTo(width * 0.40, decompY - height * 0.02, decompX - width * 0.10, decompY);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        // Nutrients return to producers (dashed loop back up)
        this.ctx.strokeStyle = '#8B4513';
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([5, 4]);
        this.ctx.beginPath();
        this.ctx.moveTo(decompX + width * 0.10, decompY);
        this.ctx.quadraticCurveTo(width * 0.80, skyBotY + height * 0.10, width * 0.72, skyBotY - height * 0.03);
        this.ctx.stroke();
        this.ctx.setLineDash([]);
        this.ctx.fillStyle = '#8B4513';
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.72, skyBotY - height * 0.03);
        this.ctx.lineTo(width * 0.72 - 8, skyBotY - height * 0.03 + 10);
        this.ctx.lineTo(width * 0.72 + 8, skyBotY - height * 0.03 + 10);
        this.ctx.closePath();
        this.ctx.fill();

        if (showLabels) {
            this.addLabel('DECOMPOSERS', width / 2, groundBotY - height * 0.17, '#65042b');
            this.ctx.font = `italic ${Math.round(height * 0.016)}px Arial`;
            this.ctx.fillStyle = '#8B4513';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('nutrients recycled →', width * 0.80, skyBotY + height * 0.08);
        }
    }

    // ── STEP 5 — Energy flow + legend ─────────────────────────────────────
    if (step >= 5) {
        // Solar energy arrow into producers (top down)
        this.ctx.strokeStyle = '#FFD700';
        this.ctx.lineWidth = 4;
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.88, height * 0.18);
        this.ctx.quadraticCurveTo(width * 0.70, height * 0.30, width * 0.45, skyBotY - height * 0.08);
        this.ctx.stroke();
        this.ctx.fillStyle = '#FFD700';
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.45, skyBotY - height * 0.08);
        this.ctx.lineTo(width * 0.45 - 8, skyBotY - height * 0.08 - 12);
        this.ctx.lineTo(width * 0.45 + 8, skyBotY - height * 0.08 - 12);
        this.ctx.closePath();
        this.ctx.fill();

        // Energy flow label
        if (showLabels) {
            this.ctx.font = `bold ${Math.round(height * 0.019)}px Arial`;
            this.ctx.fillStyle = '#B8860B';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Solar Energy Input', width * 0.70, height * 0.26);

            this.ctx.font = `bold ${Math.round(height * 0.018)}px Arial`;
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('⚡ Energy flows: Sun → Producers → Consumers → Decomposers',
                width * 0.04, groundBotY - height * 0.22);
            this.ctx.font = `${Math.round(height * 0.016)}px Arial`;
            this.ctx.fillStyle = '#8B4513';
            this.ctx.fillText('♻ Nutrients cycle: Decomposers → Soil → Producers',
                width * 0.04, groundBotY - height * 0.18);

            // Legend
            this.drawLegend(width * 0.04, groundBotY - height * 0.13, [
                { color: '#2ECC40', label: 'Producers (Autotrophs)'   },
                { color: '#FF851B', label: 'Consumers (Heterotrophs)' },
                { color: '#85144b', label: 'Decomposers (Saprotrophs)'},
                { color: '#FFD700', label: 'Energy flow'              },
                { color: '#8B4513', label: 'Nutrient cycling'         }
            ]);
        }
    }

    // Step indicator
    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${step} of 5`, width - 8, height - 4);

    if (showInset) {
        this.drawInset(width * 0.60, height * 0.06, width * 0.36, height * 0.22, insetType);
    }

    this.ctx.restore();
}

// ═══════════════════════════════════════════════════════════════════════════
// BIOMES — STEP-BY-STEP RENDERER
// Steps:
//   1 — All biome tiles (name, colour, climate type)
//   2 — + Temperature & precipitation ranges per biome
//   3 — + Characteristic organisms + productivity notes
// ═══════════════════════════════════════════════════════════════════════════
renderBiomesDiagram(x, y, width, height, options = {}) {
    const {
        biome          = 'all',
        characteristic = 'climate',
        drawingStep    = 1,
        showLabels     = true,
        showInset      = false,
        insetType      = 'climate-graph'
    } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    const step = Math.max(1, Math.min(3, drawingStep));

    const stepLabels = [
        'Step 1 — Major World Biomes (Colour-Coded)',
        'Step 2 — + Climate Ranges (Temperature & Precipitation)',
        'Step 3 — + Characteristic Organisms & Productivity'
    ];
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.05);

    // ── Biome data ─────────────────────────────────────────────────────────
    const biomes = [
        {
            name: 'Tropical\nRainforest', color: '#228B22',
            temp: '20–30°C', precip: '>2000 mm',
            organisms: 'Jaguars, Toucans,\nOrchids, Ferns',
            productivity: 'Very High (NPP)'
        },
        {
            name: 'Desert', color: '#DEB887',
            temp: '−5 to 50°C', precip: '<250 mm',
            organisms: 'Camels, Scorpions,\nCacti, Succulents',
            productivity: 'Very Low'
        },
        {
            name: 'Tundra', color: '#B0E0E6',
            temp: '−40 to 10°C', precip: '<250 mm',
            organisms: 'Polar Bears, Lemmings,\nLichen, Mosses',
            productivity: 'Very Low'
        },
        {
            name: 'Boreal\nForest (Taiga)', color: '#2F5F2F',
            temp: '−40 to 20°C', precip: '400–1000 mm',
            organisms: 'Wolves, Moose,\nSpruce, Pine',
            productivity: 'Low–Moderate'
        },
        {
            name: 'Temperate\nDeciduous Forest', color: '#6B8E23',
            temp: '0–20°C', precip: '750–1500 mm',
            organisms: 'Deer, Foxes,\nOaks, Maples',
            productivity: 'Moderate–High'
        },
        {
            name: 'Temperate\nGrassland', color: '#9ACD32',
            temp: '−20 to 30°C', precip: '250–750 mm',
            organisms: 'Bison, Prairie Dogs,\nGrasses, Wildflowers',
            productivity: 'Moderate'
        },
        {
            name: 'Savanna', color: '#DAA520',
            temp: '18–35°C', precip: '500–1500 mm',
            organisms: 'Lions, Elephants,\nAcacia, Grasses',
            productivity: 'Moderate'
        },
        {
            name: 'Marine\n(Ocean)', color: '#1E90FF',
            temp: '−2 to 30°C', precip: 'N/A',
            organisms: 'Whales, Sharks,\nPhytoplankton, Kelp',
            productivity: 'Moderate–High'
        }
    ];

    // Grid: 4 columns × 2 rows
    const cols = 4, rows = 2;
    const tileW = (width * 0.96) / cols;
    const tileH = step === 1
        ? (height * 0.82) / rows
        : step === 2
            ? (height * 0.78) / rows
            : (height * 0.72) / rows;
    const gridStartX = width * 0.02;
    const gridStartY = height * 0.10;

    biomes.forEach((b, idx) => {
        const col = idx % cols;
        const row = Math.floor(idx / cols);
        const tx  = gridStartX + col * tileW;
        const ty  = gridStartY + row * (tileH + height * 0.01);

        // ── Tile background ────────────────────────────────────────────────
        this.ctx.fillStyle = b.color;
        this.ctx.beginPath();
        this.ctx.roundRect(tx + 2, ty + 2, tileW - 4, tileH - 4, 6);
        this.ctx.fill();
        this.ctx.strokeStyle = this.darkenHex(b.color, 30);
        this.ctx.lineWidth = 2;
        this.ctx.stroke();

        if (!showLabels) return;

        const cx = tx + tileW / 2;

        // ── STEP 1 — Biome name ────────────────────────────────────────────
        this.ctx.fillStyle = '#FFF';
        this.ctx.strokeStyle = 'rgba(0,0,0,0.6)';
        this.ctx.lineWidth = 3;
        const nameLines = b.name.split('\n');
        const nameStartY = step === 1
            ? ty + tileH * 0.42 - (nameLines.length - 1) * 8
            : ty + tileH * 0.26 - (nameLines.length - 1) * 7;
        this.ctx.font = `bold ${Math.round(height * 0.026)}px Arial`;
        this.ctx.textAlign = 'center';
        nameLines.forEach((line, li) => {
            this.ctx.strokeText(line, cx, nameStartY + li * 17);
            this.ctx.fillText(line, cx, nameStartY + li * 17);
        });

        // ── STEP 2 — Climate ranges ────────────────────────────────────────
        if (step >= 2) {
            this.ctx.font = `${Math.round(height * 0.017)}px Arial`;
            this.ctx.fillStyle = 'rgba(255,255,255,0.90)';
            this.ctx.fillText(`🌡 ${b.temp}`, cx, ty + tileH * 0.57);
            this.ctx.fillText(`💧 ${b.precip}`, cx, ty + tileH * 0.72);
        }

        // ── STEP 3 — Organisms + productivity ─────────────────────────────
        if (step >= 3) {
            this.ctx.font = `italic ${Math.round(height * 0.014)}px Arial`;
            this.ctx.fillStyle = 'rgba(255,255,255,0.85)';
            b.organisms.split('\n').forEach((line, li) => {
                this.ctx.fillText(line, cx, ty + tileH * 0.78 + li * 12);
            });
            this.ctx.font = `bold ${Math.round(height * 0.014)}px Arial`;
            this.ctx.fillStyle = '#FFD700';
            this.ctx.fillText(`NPP: ${b.productivity}`, cx, ty + tileH * 0.93);
        }
    });

    // Key at bottom
    if (showLabels) {
        this.ctx.font = `italic ${Math.round(height * 0.018)}px Arial`;
        this.ctx.fillStyle = '#555';
        this.ctx.textAlign = 'center';
        const note = step === 1
            ? 'Biomes are classified by climate and dominant vegetation'
            : step === 2
                ? 'Temperature and annual precipitation are the key climate variables'
                : 'Biomes differ in species richness, adaptations and net primary productivity (NPP)';
        this.ctx.fillText(note, width / 2, height * 0.96);
    }

    // Step indicator
    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${step} of 3`, width - 8, height - 4);

    if (showInset) {
        this.drawInset(width * 0.60, height * 0.06, width * 0.36, height * 0.22, insetType);
    }

    this.ctx.restore();
}

// ═══════════════════════════════════════════════════════════════════════════
// PREDATOR-PREY — STEP-BY-STEP RENDERER
// Steps:
//   1 — Axes + prey time-series curve only
//   2 — + Predator time-series curve (lagged) + legend
//   3 — + Phase plot panel on right + Lotka-Volterra annotations
// ═══════════════════════════════════════════════════════════════════════════
renderPredatorPreyDiagram(x, y, width, height, options = {}) {
    const {
        display     = 'both',
        phase       = 'complete',
        drawingStep = 3,
        showLabels  = true,
        showInset   = false,
        insetType   = 'lotka-volterra-equations'
    } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    const step = Math.max(1, Math.min(3, drawingStep));

    const stepLabels = [
        'Step 1 — Prey Population Over Time',
        'Step 2 — + Predator Population (Lagged)',
        'Step 3 — + Phase Plot & Ecological Interpretation'
    ];
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.05);

    // ── Layout: steps 1 & 2 use full width; step 3 splits left/right ──────
    const fullPlot   = step < 3;
    const tsW        = fullPlot ? width * 0.88 : width * 0.46;   // time-series panel width
    const tsLeft     = width * 0.10;
    const tsTop      = height * 0.12;
    const tsBot      = height * 0.82;
    const tsH        = tsBot - tsTop;
    const tsRight    = tsLeft + tsW;

    // Phase plot panel (step 3 only)
    const ppLeft     = width * 0.58;
    const ppTop      = height * 0.14;
    const ppBot      = height * 0.82;
    const ppW        = width * 0.38;
    const ppH        = ppBot - ppTop;

    // ── Generate smooth oscillating data ──────────────────────────────────
    const nPoints = 300;
    const preyPts  = [], predPts = [];
    for (let i = 0; i <= nPoints; i++) {
        const t = (i / nPoints) * 4 * Math.PI;
        const prey = 0.50 + 0.40 * Math.sin(t);
        const pred = 0.32 + 0.25 * Math.sin(t - Math.PI * 0.52);
        preyPts.push({ t: i / nPoints, v: prey });
        predPts.push({ t: i / nPoints, v: pred });
    }

    const toCanvas = (pt, panel = 'ts') => {
        const lx = panel === 'ts' ? tsLeft : ppLeft;
        const bot = panel === 'ts' ? tsBot : ppBot;
        const w   = panel === 'ts' ? tsW : ppW;
        const h   = panel === 'ts' ? tsH : ppH;
        return {
            x: lx + pt.t * w,
            y: bot - pt.v * h
        };
    };

    // ── STEP 1 — Axes + Prey curve ─────────────────────────────────────────
    if (step >= 1) {
        // Axes
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 2.5;
        this.ctx.beginPath();
        this.ctx.moveTo(tsLeft, tsTop);
        this.ctx.lineTo(tsLeft, tsBot);
        this.ctx.lineTo(tsRight, tsBot);
        this.ctx.stroke();

        // Y-axis arrow
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.beginPath();
        this.ctx.moveTo(tsLeft, tsTop - 6);
        this.ctx.lineTo(tsLeft - 5, tsTop + 8);
        this.ctx.lineTo(tsLeft + 5, tsTop + 8);
        this.ctx.closePath();
        this.ctx.fill();

        // Light horizontal grid lines
        this.ctx.strokeStyle = '#ECF0F1';
        this.ctx.lineWidth = 1;
        for (let g = 1; g <= 4; g++) {
            const gy = tsBot - (g / 5) * tsH;
            this.ctx.beginPath();
            this.ctx.moveTo(tsLeft, gy);
            this.ctx.lineTo(tsRight, gy);
            this.ctx.stroke();
        }

        // Prey curve (green)
        this.ctx.strokeStyle = '#27AE60';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        preyPts.forEach((pt, i) => {
            const c = toCanvas(pt);
            i === 0 ? this.ctx.moveTo(c.x, c.y) : this.ctx.lineTo(c.x, c.y);
        });
        this.ctx.stroke();

        if (showLabels) {
            this.ctx.save();
            this.ctx.translate(tsLeft - width * 0.07, (tsTop + tsBot) / 2);
            this.ctx.rotate(-Math.PI / 2);
            this.ctx.font = `bold ${Math.round(height * 0.022)}px Arial`;
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Population Size', 0, 0);
            this.ctx.restore();

            this.ctx.font = `bold ${Math.round(height * 0.022)}px Arial`;
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Time →', tsLeft + tsW / 2, tsBot + height * 0.07);

            // Prey label at end of curve
            const lastPrey = toCanvas(preyPts[preyPts.length - 1]);
            this.ctx.font = `bold ${Math.round(height * 0.020)}px Arial`;
            this.ctx.fillStyle = '#27AE60';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Prey (Rabbits)', lastPrey.x + 4, lastPrey.y);
        }
    }

    // ── STEP 2 — Predator curve ────────────────────────────────────────────
    if (step >= 2) {
        // Predator curve (red)
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        predPts.forEach((pt, i) => {
            const c = toCanvas(pt);
            i === 0 ? this.ctx.moveTo(c.x, c.y) : this.ctx.lineTo(c.x, c.y);
        });
        this.ctx.stroke();

        if (showLabels) {
            const lastPred = toCanvas(predPts[predPts.length - 1]);
            this.ctx.font = `bold ${Math.round(height * 0.020)}px Arial`;
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Predator (Foxes)', lastPred.x + 4, lastPred.y);

            // Lag annotation
            // Find approximate prey peak & predator peak in first cycle
            const preyPeak = toCanvas({ t: 0.125, v: 0.90 });
            const predPeak = toCanvas({ t: 0.255, v: 0.57 });

            this.ctx.strokeStyle = '#888';
            this.ctx.lineWidth = 1.5;
            this.ctx.setLineDash([4, 4]);
            this.ctx.beginPath();
            this.ctx.moveTo(preyPeak.x, tsTop);
            this.ctx.lineTo(preyPeak.x, tsBot);
            this.ctx.moveTo(predPeak.x, tsTop);
            this.ctx.lineTo(predPeak.x, tsBot);
            this.ctx.stroke();
            this.ctx.setLineDash([]);

            // Lag brace
            const braceY = tsTop + height * 0.04;
            this.ctx.strokeStyle = '#555';
            this.ctx.lineWidth = 1.5;
            this.ctx.beginPath();
            this.ctx.moveTo(preyPeak.x, braceY);
            this.ctx.lineTo(predPeak.x, braceY);
            this.ctx.stroke();
            this.ctx.font = `italic ${Math.round(height * 0.016)}px Arial`;
            this.ctx.fillStyle = '#555';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('time lag', (preyPeak.x + predPeak.x) / 2, braceY - 5);

            // Legend
            this.drawLegend(tsLeft, tsBot + height * 0.10, [
                { color: '#27AE60', label: 'Prey population'     },
                { color: '#E74C3C', label: 'Predator population' }
            ]);

            // Key observation notes
            this.ctx.font = `${Math.round(height * 0.017)}px Arial`;
            this.ctx.fillStyle = '#555';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('• Prey population peaks first', tsLeft + tsW * 0.45, tsBot + height * 0.10);
            this.ctx.fillText('• Predator follows with a time lag', tsLeft + tsW * 0.45, tsBot + height * 0.115);
            this.ctx.fillText('• Populations oscillate cyclically', tsLeft + tsW * 0.45, tsBot + height * 0.130);
        }
    }

    // ── STEP 3 — Phase plot panel ──────────────────────────────────────────
    if (step >= 3) {
        // Phase plot axes
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(ppLeft, ppTop);
        this.ctx.lineTo(ppLeft, ppBot);
        this.ctx.lineTo(ppLeft + ppW, ppBot);
        this.ctx.stroke();

        // Panel background tint
        this.ctx.fillStyle = 'rgba(240,248,255,0.7)';
        this.ctx.fillRect(ppLeft, ppTop, ppW, ppH);

        // Draw the spiral orbit in phase space
        // x-axis = prey (horizontal), y-axis = predator (vertical)
        this.ctx.strokeStyle = '#9B59B6';
        this.ctx.lineWidth = 2.5;
        this.ctx.beginPath();
        const spiralSteps = 400;
        for (let i = 0; i <= spiralSteps; i++) {
            const angle = (i / spiralSteps) * 3 * 2 * Math.PI;
            const decay  = 0.92 + 0.08 * (i / spiralSteps); // spiral inward
            const preyV  = 0.50 + 0.35 * decay * Math.cos(angle);
            const predV  = 0.32 + 0.22 * decay * Math.sin(angle);
            const cx     = ppLeft + preyV * ppW;
            const cy     = ppBot  - predV * ppH;
            i === 0 ? this.ctx.moveTo(cx, cy) : this.ctx.lineTo(cx, cy);
        }
        this.ctx.stroke();

        // Equilibrium point
        const eqX = ppLeft + 0.50 * ppW;
        const eqY = ppBot  - 0.32 * ppH;
        this.ctx.fillStyle = '#E74C3C';
        this.ctx.beginPath();
        this.ctx.arc(eqX, eqY, 6, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = '#FFF';
        this.ctx.lineWidth = 1.5;
        this.ctx.stroke();

        if (showLabels) {
            // Phase plot axis labels
            this.ctx.font = `bold ${Math.round(height * 0.018)}px Arial`;
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Prey →', ppLeft + ppW / 2, ppBot + height * 0.06);

            this.ctx.save();
            this.ctx.translate(ppLeft - width * 0.04, (ppTop + ppBot) / 2);
            this.ctx.rotate(-Math.PI / 2);
            this.ctx.fillText('Predator →', 0, 0);
            this.ctx.restore();

            // Phase plot title
            this.ctx.font = `bold ${Math.round(height * 0.020)}px Arial`;
            this.ctx.fillStyle = '#9B59B6';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Phase Plot', ppLeft + ppW / 2, ppTop - height * 0.02);

            // Equilibrium label
            this.ctx.font = `${Math.round(height * 0.016)}px Arial`;
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Equilibrium', eqX + 8, eqY - 6);
            this.ctx.font = `italic ${Math.round(height * 0.014)}px Arial`;
            this.ctx.fillStyle = '#888';
            this.ctx.fillText('(populations spiral', eqX + 8, eqY + 8);
            this.ctx.fillText('toward balance)', eqX + 8, eqY + 20);

            // Direction arrow on spiral
            this.ctx.font = `${Math.round(height * 0.020)}px Arial`;
            this.ctx.fillStyle = '#9B59B6';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('↺', ppLeft + ppW * 0.72, ppTop + ppH * 0.30);

            // Lotka-Volterra equations box
            const eqBoxX = tsLeft;
            const eqBoxY = tsBot + height * 0.03;
            this.ctx.fillStyle = 'rgba(240,240,255,0.85)';
            this.ctx.beginPath();
            this.ctx.roundRect(eqBoxX, eqBoxY, tsW * 0.38, height * 0.10, 5);
            this.ctx.fill();
            this.ctx.strokeStyle = '#9B59B6';
            this.ctx.lineWidth = 1.5;
            this.ctx.stroke();

            this.ctx.font = `bold ${Math.round(height * 0.016)}px Arial`;
            this.ctx.fillStyle = '#9B59B6';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Lotka-Volterra Equations', eqBoxX + 6, eqBoxY + 14);
            this.ctx.font = `${Math.round(height * 0.016)}px Arial`;
            this.ctx.fillStyle = '#27AE60';
            this.ctx.fillText('dN/dt = αN − βNP  (prey)', eqBoxX + 6, eqBoxY + 30);
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.fillText('dP/dt = δNP − γP  (predator)', eqBoxX + 6, eqBoxY + 46);
            this.ctx.font = `italic ${Math.round(height * 0.013)}px Arial`;
            this.ctx.fillStyle = '#888';
            this.ctx.fillText('α birth rate, β predation, δ conversion, γ death rate',
                eqBoxX + 6, eqBoxY + 60);
        }
    }

    // Step indicator
    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${step} of 3`, width - 8, height - 4);

    if (showInset) {
        this.drawInset(width * 0.60, height * 0.06, width * 0.36, height * 0.22, insetType);
    }

    this.ctx.restore();
}


 // ═══════════════════════════════════════════════════════════════════════
    // TASK 2a — ANIMAL CELL RENDERER
    // ═══════════════════════════════════════════════════════════════════════
    renderAnimalCellDiagram(x, y, width, height, options = {}) {
    const {
        view               = 'complete',
        organelleHighlight = null,
        drawingStep        = 5,
        showLabels         = true,
        showInset          = false,
        insetType          = 'nucleus-detail'
    } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    // Step label
    const diagram = AnatomicalDiagramsRegistry.getDiagram('animalCell');
    const stepEntry = diagram.drawingSteps.find(s => s.step === drawingStep);
    if (stepEntry) {
        this.ctx.font = 'bold 13px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(stepEntry.label, width / 2, height * 0.05);
    }

    // FIX: title bar is already drawn by renderDiagram at y=30,
    // so offset the drawing area below it and use full width
    const drawX = 0;
    const drawY = height * 0.06;
    const drawW = showInset ? width * 0.60 : width;
    const drawH = height * 0.88;

    AnatomicalShapes.drawAnimalCell(
        this.ctx,
        drawX, drawY,
        drawW, drawH,
        view,
        organelleHighlight
    );

    // Step counter
    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${drawingStep} of 5`, width - 8, height - 4);

    if (showInset) {
        this.drawInset(
            width * 0.62, height * 0.07,
            width * 0.36, height * 0.46,
            insetType
        );
    }

    this.ctx.restore();
}

renderPlantCellDiagram(x, y, width, height, options = {}) {
    const {
        view              = 'complete',
        processHighlight  = null,
        drawingStep       = 5,
        showLabels        = true,
        showInset         = false,
        insetType         = 'chloroplast-detail'
    } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    const diagram = AnatomicalDiagramsRegistry.getDiagram('plantCell');
    const stepEntry = diagram.drawingSteps.find(s => s.step === drawingStep);
    if (stepEntry) {
        this.ctx.font = 'bold 13px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(stepEntry.label, width / 2, height * 0.05);
    }

    const drawX = 0;
    const drawY = height * 0.06;
    const drawW = showInset ? width * 0.58 : width;
    const drawH = height * 0.88;

    AnatomicalShapes.drawPlantCell(
        this.ctx,
        drawX, drawY,
        drawW, drawH,
        view,
        processHighlight
    );

    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${drawingStep} of 5`, width - 8, height - 4);

    if (showInset) {
        this.drawInset(
            width * 0.60, height * 0.07,
            width * 0.38, height * 0.46,
            insetType
        );
    }

    this.ctx.restore();
}

    // ═══════════════════════════════════════════════════════════════════════
    // TASK 2c — CELL MEMBRANE RENDERER
    // ═══════════════════════════════════════════════════════════════════════
    renderCellMembraneDiagram(x, y, width, height, options = {}) {
    const {
        view        = 'fluidMosaicModel',
        drawingStep = 5,
        showLabels  = true,
        showInset   = false,
        insetType   = 'phospholipid-structure'
    } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    const diagram = AnatomicalDiagramsRegistry.getDiagram('cellMembrane');
    const stepEntry = diagram.drawingSteps.find(s => s.step === drawingStep);
    if (stepEntry) {
        this.ctx.font = 'bold 13px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(stepEntry.label, width / 2, height * 0.05);
    }

    const drawX = 0;
    const drawY = height * 0.06;
    const drawW = showInset ? width * 0.58 : width;
    const drawH = height * 0.88;

    // FIX: call the unified dispatcher, not a non-existent method
    AnatomicalShapes.drawCellMembrane(
        this.ctx,
        drawX, drawY,
        drawW, drawH,
        view
    );

    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${drawingStep} of 5`, width - 8, height - 4);

    if (showInset) {
        this.drawInset(
            width * 0.62, height * 0.07,
            width * 0.36, height * 0.46,
            insetType
        );
    }

    this.ctx.restore();
}

    // ═══════════════════════════════════════════════════════════════════════
    // TASK 2d — CELL DIVISION RENDERER
    // ═══════════════════════════════════════════════════════════════════════
    renderCellDivisionDiagram(x, y, width, height, options = {}) {
        const {
            view        = 'complete',
            drawingStep = 5,
            showLabels  = true,
            showInset   = false,
            insetType   = 'cell-cycle-checkpoints'
        } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        // Step label
        const diagram = AnatomicalDiagramsRegistry.getDiagram('cellDivision');
        const stepEntry = diagram.drawingSteps.find(s => s.step === drawingStep);
        if (stepEntry) {
            this.ctx.font = 'bold 13px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(stepEntry.label, width / 2, height * 0.05);
        }

        const drawX = width  * 0.02;
        const drawY = height * 0.07;
        const drawW = showInset ? width * 0.56 : width * 0.96;
        const drawH = height * 0.88;

        AnatomicalShapes.drawCellDivision(
            this.ctx,
            drawX, drawY,
            drawW, drawH,
            view
        );

        this.ctx.font = 'italic 10px Arial';
        this.ctx.fillStyle = '#BDC3C7';
        this.ctx.textAlign = 'right';
        this.ctx.fillText(`Step ${drawingStep} of 5`, width - 8, height - 4);

        if (showInset) {
            this.drawInset(
                width * 0.60, height * 0.07,
                width * 0.38, height * 0.40,
                insetType
            );
        }

        this.ctx.restore();
    }

    // ═══════════════════════════════════════════════════════════════════════
    // TASK 2e — CELLULAR RESPIRATION RENDERER
    // ═══════════════════════════════════════════════════════════════════════
    renderCellularRespirationDiagram(x, y, width, height, options = {}) {
        const {
            view        = 'complete',
            drawingStep = 5,
            showLabels  = true,
            showInset   = false,
            insetType   = 'net-atp-yield'
        } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        // Step label
        const diagram = AnatomicalDiagramsRegistry.getDiagram('cellularRespiration');
        const stepEntry = diagram.drawingSteps.find(s => s.step === drawingStep);
        if (stepEntry) {
            this.ctx.font = 'bold 13px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(stepEntry.label, width / 2, height * 0.05);
        }

        const drawX = width  * 0.01;
        const drawY = height * 0.07;
        const drawW = showInset ? width * 0.58 : width * 0.98;
        const drawH = height * 0.88;

        AnatomicalShapes.drawCellularRespiration(
            this.ctx,
            drawX, drawY,
            drawW, drawH,
            view
        );

        this.ctx.font = 'italic 10px Arial';
        this.ctx.fillStyle = '#BDC3C7';
        this.ctx.textAlign = 'right';
        this.ctx.fillText(`Step ${drawingStep} of 5`, width - 8, height - 4);

        if (showInset) {
            this.drawInset(
                width * 0.61, height * 0.07,
                width * 0.37, height * 0.44,
                insetType
            );
        }

        this.ctx.restore();
    }


// ═══════════════════════════════════════════════════════════════════════════
// LEAF CROSS-SECTION — STEP-BY-STEP RENDERER
// Steps:
//   1 — Cuticle layer
//   2 — + Epidermis with stomata
//   3 — + Palisade mesophyll
//   4 — + Spongy mesophyll
//   5 — + Vascular bundle, process highlights, labels
// ═══════════════════════════════════════════════════════════════════════════
renderLeafCrossSectionDiagram(x, y, width, height, options = {}) {
    const {
        layer       = 'complete',
        process     = 'structure',
        drawingStep = 5,
        showLabels  = true,
        showInset   = false,
        insetType   = 'stomata-mechanism'
    } = options;

    this.ctx.save();
    this.ctx.translate(x - width / 2, y - height / 2);

    const step = Math.max(1, Math.min(5, drawingStep));

    const stepLabels = [
        'Step 1 – Cuticle Layer',
        'Step 2 – Epidermis & Stomata',
        'Step 3 – Palisade Mesophyll',
        'Step 4 – Spongy Mesophyll',
        'Step 5 – Complete Leaf Cross-Section'
    ];
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.05);

    // If a specific layer is requested (not complete), delegate directly
    if (layer !== 'complete') {
        AnatomicalShapes.drawLeafCrossSection(
            this.ctx, 0, height * 0.08, width, height * 0.86, layer, process
        );
        if (showLabels) {
            const names = {
                cuticle: 'Waxy Cuticle',
                epidermis: 'Epidermis with Stomata',
                palisade: 'Palisade Mesophyll',
                spongy: 'Spongy Mesophyll',
                vascular: 'Vascular Bundle'
            };
            this.addLabel(names[layer] || layer, width / 2, height * 0.96, '#2E7D32');
        }
        if (showInset) this.drawInset(width * 0.60, height * 0.05, width * 0.38, height * 0.28, insetType);
        this.ctx.restore();
        return;
    }

    // Layout constants shared across steps
    const leafX = width  * 0.05;
    const leafY = height * 0.08;
    const leafW = width  * 0.90;
    const leafH = height * 0.82;

    // Background (light sky – represents "above leaf")
    this.ctx.fillStyle = '#F0F8FF';
    this.ctx.fillRect(leafX, leafY, leafW, leafH * 0.15);
    // Leaf interior background
    this.ctx.fillStyle = '#E8F5E9';
    this.ctx.fillRect(leafX, leafY + leafH * 0.15, leafW, leafH * 0.65);
    // Below leaf
    this.ctx.fillStyle = '#F0F8FF';
    this.ctx.fillRect(leafX, leafY + leafH * 0.80, leafW, leafH * 0.20);

    // ── STEP 1 — Cuticle ────────────────────────────────────────────────────
    if (step >= 1) {
        // Upper cuticle
        this.ctx.fillStyle = '#F0E68C';
        this.ctx.fillRect(leafX, leafY + leafH * 0.05, leafW, leafH * 0.05);
        // Lower cuticle
        this.ctx.fillStyle = '#F0E68C';
        this.ctx.fillRect(leafX, leafY + leafH * 0.78, leafW, leafH * 0.05);

        if (showLabels && step === 1) {
            this.addLabel('Upper Cuticle (waxy, waterproof)', width * 0.5, leafY + leafH * 0.03, '#B8860B');
            this.addLabel('Lower Cuticle', width * 0.5, leafY + leafH * 0.86, '#B8860B');
        }
    }

    // ── STEP 2 — Epidermis ──────────────────────────────────────────────────
    if (step >= 2) {
        // Upper epidermis
        this.ctx.fillStyle = '#E8DDA0';
        this.ctx.fillRect(leafX, leafY + leafH * 0.10, leafW, leafH * 0.08);
        // Lower epidermis
        this.ctx.fillStyle = '#E8DDA0';
        this.ctx.fillRect(leafX, leafY + leafH * 0.70, leafW, leafH * 0.08);

        // Cell walls in epidermis
        this.ctx.strokeStyle = '#C8B870';
        this.ctx.lineWidth = 1;
        for (let i = 1; i < 10; i++) {
            this.ctx.beginPath();
            this.ctx.moveTo(leafX + (i / 10) * leafW, leafY + leafH * 0.10);
            this.ctx.lineTo(leafX + (i / 10) * leafW, leafY + leafH * 0.18);
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.moveTo(leafX + (i / 10) * leafW, leafY + leafH * 0.70);
            this.ctx.lineTo(leafX + (i / 10) * leafW, leafY + leafH * 0.78);
            this.ctx.stroke();
        }

        // Stomata in lower epidermis (2 pairs of guard cells)
        [[0.28, 0.74], [0.68, 0.74]].forEach(([sx, sy]) => {
            AnatomicalShapes.drawStomata(
                this.ctx,
                leafX + sx * leafW, leafY + sy * leafH,
                leafW * 0.08, leafH * 0.05,
                true
            );
        });

        if (showLabels && step === 2) {
            this.addLabel('Upper Epidermis', width * 0.08, leafY + leafH * 0.14, '#8B7355', 'left');
            this.addLabel('Lower Epidermis + Stomata', width * 0.08, leafY + leafH * 0.74, '#8B7355', 'left');
        }
    }

    // ── STEP 3 — Palisade mesophyll ─────────────────────────────────────────
    if (step >= 3) {
        const palTop = leafY + leafH * 0.18;
        const palH   = leafH * 0.22;
        const palGrad = this.ctx.createLinearGradient(0, palTop, 0, palTop + palH);
        palGrad.addColorStop(0, '#2D5016');
        palGrad.addColorStop(1, '#3D6B1F');
        this.ctx.fillStyle = palGrad;
        this.ctx.fillRect(leafX, palTop, leafW, palH);

        // Columnar cell walls
        this.ctx.strokeStyle = '#1A3D0A';
        this.ctx.lineWidth = 1;
        for (let i = 1; i < 14; i++) {
            this.ctx.beginPath();
            this.ctx.moveTo(leafX + (i / 14) * leafW, palTop);
            this.ctx.lineTo(leafX + (i / 14) * leafW, palTop + palH);
            this.ctx.stroke();
        }

        // Chloroplasts
        this.ctx.fillStyle = '#1A3D0A';
        for (let i = 0; i < 13; i++) {
            for (let j = 0; j < 3; j++) {
                this.ctx.beginPath();
                this.ctx.ellipse(
                    leafX + ((i + 0.5) / 14) * leafW,
                    palTop + (j / 2) * palH * 0.85 + palH * 0.08,
                    leafW * 0.012, leafH * 0.018,
                    0, 0, Math.PI * 2
                );
                this.ctx.fill();
            }
        }

        // Photosynthesis highlight
        if (process === 'photosynthesis') {
            this.ctx.strokeStyle = '#FFFF00';
            this.ctx.lineWidth = 3;
            this.ctx.strokeRect(leafX, palTop, leafW, palH);
        }

        if (showLabels && step === 3) {
            this.addLabel('Palisade Mesophyll (primary photosynthesis)', width * 0.5, palTop - 8, '#1B5E20');
        }
    }

    // ── STEP 4 — Spongy mesophyll ───────────────────────────────────────────
    if (step >= 4) {
        const spTop = leafY + leafH * 0.40;
        const spH   = leafH * 0.30;
        this.ctx.fillStyle = '#6B8E4E';
        this.ctx.fillRect(leafX, spTop, leafW, spH);

        // Air spaces (white circles scattered)
        this.ctx.fillStyle = 'rgba(255,255,255,0.75)';
        const airSpaces = [
            [0.08,0.42],[0.22,0.48],[0.38,0.44],[0.54,0.50],[0.70,0.46],[0.86,0.52],
            [0.15,0.60],[0.32,0.56],[0.50,0.62],[0.68,0.58],[0.82,0.64]
        ];
        airSpaces.forEach(([ax, ay]) => {
            this.ctx.beginPath();
            this.ctx.arc(leafX + ax * leafW, leafY + ay * leafH, leafW * 0.022, 0, Math.PI * 2);
            this.ctx.fill();
        });

        // Irregular spongy cells
        this.ctx.strokeStyle = '#4A6A32';
        this.ctx.lineWidth = 1;
        [[0.12,0.44],[0.30,0.42],[0.52,0.47],[0.72,0.43],[0.88,0.48],
         [0.20,0.60],[0.45,0.57],[0.65,0.62],[0.82,0.59]].forEach(([cx, cy]) => {
            this.ctx.beginPath();
            this.ctx.ellipse(
                leafX + cx * leafW, leafY + cy * leafH,
                leafW * 0.055, leafH * 0.065, 0, 0, Math.PI * 2
            );
            this.ctx.stroke();
        });

        if (showLabels && step === 4) {
            this.addLabel('Spongy Mesophyll (air spaces for gas exchange)',
                width * 0.5, leafY + spH + spTop + 8, '#4A6A32');
        }
    }

    // ── STEP 5 — Vascular bundle + process highlights + full labels ─────────
    if (step >= 5) {
        const vbX = leafX + leafW * 0.50;
        const vbY = leafY + leafH * 0.50;

        // Bundle sheath
        this.ctx.fillStyle = '#D2B48C';
        this.ctx.strokeStyle = '#8B7355';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.ellipse(vbX, vbY, leafW * 0.06, leafH * 0.12, 0, 0, Math.PI * 2);
        this.ctx.fill(); this.ctx.stroke();

        // Xylem (lower)
        this.ctx.fillStyle = '#8B4513';
        this.ctx.beginPath();
        this.ctx.ellipse(vbX, vbY + leafH * 0.05, leafW * 0.035, leafH * 0.055, 0, 0, Math.PI * 2);
        this.ctx.fill();

        // Phloem (upper)
        this.ctx.fillStyle = '#228B22';
        this.ctx.beginPath();
        this.ctx.ellipse(vbX, vbY - leafH * 0.04, leafW * 0.028, leafH * 0.038, 0, 0, Math.PI * 2);
        this.ctx.fill();

        // Outer outline of whole leaf section
        this.ctx.strokeStyle = '#2E7D32';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(leafX, leafY + leafH * 0.05, leafW, leafH * 0.78);

        // Process-specific overlays
        if (process === 'photosynthesis') {
            this.ctx.fillStyle = '#FFD700';
            for (let i = 0; i < 5; i++) {
                const ax = leafX + ((i + 0.5) / 5) * leafW;
                this.ctx.beginPath();
                this.ctx.moveTo(ax, leafY);
                this.ctx.lineTo(ax - 5, leafY + leafH * 0.08);
                this.ctx.lineTo(ax + 5, leafY + leafH * 0.08);
                this.ctx.fill();
            }
            this.ctx.strokeStyle = '#FFFF00';
            this.ctx.lineWidth = 3;
            this.ctx.strokeRect(leafX, leafY + leafH * 0.18, leafW, leafH * 0.22);
        } else if (process === 'transpiration') {
            this.ctx.fillStyle = '#87CEEB';
            this.ctx.font = '11px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('H₂O ↓', leafX + leafW * 0.28, leafY + leafH * 0.92);
            this.ctx.fillText('H₂O ↓', leafX + leafW * 0.68, leafY + leafH * 0.92);
            this.ctx.strokeStyle = '#00BFFF';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.ellipse(leafX + leafW * 0.28, leafY + leafH * 0.74, leafW * 0.04, leafH * 0.025, 0, 0, Math.PI * 2);
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.ellipse(leafX + leafW * 0.68, leafY + leafH * 0.74, leafW * 0.04, leafH * 0.025, 0, 0, Math.PI * 2);
            this.ctx.stroke();
        } else if (process === 'gas-exchange') {
            this.ctx.font = 'bold 11px Arial';
            this.ctx.fillStyle = '#FF6347';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('CO₂ →', leafX + leafW * 0.02, leafY + leafH * 0.74);
            this.ctx.fillStyle = '#32CD32';
            this.ctx.textAlign = 'right';
            this.ctx.fillText('← O₂', leafX + leafW * 0.98, leafY + leafH * 0.80);
        }

        // Labels
        if (showLabels) {
            this.ctx.textAlign = 'left';
            const labelColor = '#2C3E50';
            this.addLabel('Upper Cuticle',         width * 0.02, leafY + leafH * 0.07, '#B8860B', 'left');
            this.addLabel('Upper Epidermis',        width * 0.02, leafY + leafH * 0.14, '#8B7355', 'left');
            this.addLabel('Palisade Mesophyll',     width * 0.02, leafY + leafH * 0.28, '#1B5E20', 'left');
            this.addLabel('Spongy Mesophyll',       width * 0.02, leafY + leafH * 0.53, '#4A6A32', 'left');
            this.addLabel('Lower Epidermis',        width * 0.02, leafY + leafH * 0.73, '#8B7355', 'left');
            this.addLabel('Lower Cuticle',          width * 0.02, leafY + leafH * 0.81, '#B8860B', 'left');
            this.addLabel('Vascular Bundle',        leafX + leafW * 0.58, vbY, labelColor, 'left');
            this.addLabel('Xylem',                  leafX + leafW * 0.58, vbY + leafH * 0.05, '#8B4513', 'left');
            this.addLabel('Phloem',                 leafX + leafW * 0.58, vbY - leafH * 0.06, '#228B22', 'left');
            this.addLabel('Stomata',                leafX + leafW * 0.28, leafY + leafH * 0.82, '#555', 'center');
            this.addLabel('Air spaces',             leafX + leafW * 0.72, leafY + leafH * 0.48, '#555', 'center');
        }

        // Legend
        this.drawLegend(8, height - 50, [
            { color: '#F0E68C', label: 'Cuticle'            },
            { color: '#E8DDA0', label: 'Epidermis'          },
            { color: '#2D5016', label: 'Palisade'           },
            { color: '#6B8E4E', label: 'Spongy mesophyll'   },
            { color: '#8B4513', label: 'Xylem'              },
            { color: '#228B22', label: 'Phloem'             }
        ]);
    }

    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${step} of 5`, width - 8, height - 4);

    if (showInset) this.drawInset(width * 0.60, 8, width * 0.38, height * 0.26, insetType);

    this.ctx.restore();
}

// ═══════════════════════════════════════════════════════════════════════════
// PHOTOSYNTHESIS — STEP-BY-STEP RENDERER
// Steps:
//   1 — Chloroplast outline
//   2 — + Light reactions (thylakoid / granum)
//   3 — + ATP & NADPH production arrows
//   4 — + Calvin cycle
//   5 — + Inputs/outputs, equation, full labels
// ═══════════════════════════════════════════════════════════════════════════
renderPhotosynthesisDiagram(x, y, width, height, options = {}) {
    const {
        stage       = 'complete',
        detail      = 'overview',
        drawingStep = 5,
        showLabels  = true,
        showInset   = false,
        insetType   = 'chloroplast-ultrastructure'
    } = options;

    this.ctx.save();
    this.ctx.translate(x - width / 2, y - height / 2);

    const step = Math.max(1, Math.min(5, drawingStep));

    const stepLabels = [
        'Step 1 – Chloroplast Overview',
        'Step 2 – Light-Dependent Reactions',
        'Step 3 – ATP & NADPH Production',
        'Step 4 – Calvin Cycle',
        'Step 5 – Complete Photosynthesis'
    ];
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.05);

    // If a specific stage is requested, delegate directly
    if (stage !== 'complete') {
        AnatomicalShapes.drawPhotosynthesis(
            this.ctx, 0, height * 0.08, width, height * 0.86, stage, detail
        );
        if (showLabels) {
            const names = {
                'light-reactions':    'Light-Dependent Reactions (Z-Scheme)',
                'calvin-cycle':       'Calvin Cycle (Light-Independent)',
                'electron-transport': 'Electron Transport Chain'
            };
            this.addLabel(names[stage] || stage, width / 2, height * 0.97, '#1B5E20');
        }
        if (showInset) this.drawInset(width * 0.60, height * 0.05, width * 0.38, height * 0.28, insetType);
        this.ctx.restore();
        return;
    }

    const cw = width, ch = height;

    // ── STEP 1 — Chloroplast outline ────────────────────────────────────────
    if (step >= 1) {
        this.ctx.fillStyle = '#E8F5E9';
        this.ctx.strokeStyle = '#2E7D32';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.ellipse(cw * 0.50, ch * 0.50, cw * 0.44, ch * 0.40, 0, 0, Math.PI * 2);
        this.ctx.fill(); this.ctx.stroke();

        // Stroma background
        this.ctx.fillStyle = '#C8E6C9';
        this.ctx.beginPath();
        this.ctx.ellipse(cw * 0.50, ch * 0.50, cw * 0.40, ch * 0.36, 0, 0, Math.PI * 2);
        this.ctx.fill();

        if (showLabels && step === 1) {
            this.addLabel('Chloroplast', cw * 0.50, ch * 0.12, '#1B5E20');
            this.addLabel('Stroma (fluid interior)', cw * 0.50, ch * 0.88, '#388E3C');
            this.addLabel('Outer membrane', cw * 0.50, ch * 0.10, '#2E7D32');
        }
    }

    // ── STEP 2 — Granum / thylakoid stack (light reactions zone) ───────────
    if (step >= 2) {
        const grX = cw * 0.30;
        const grY = ch * 0.50;

        for (let i = 0; i < 5; i++) {
            const diskY = grY - ch * 0.14 + i * ch * 0.07;
            const grad = this.ctx.createLinearGradient(grX - cw * 0.14, diskY, grX + cw * 0.14, diskY);
            grad.addColorStop(0, '#1B5E20');
            grad.addColorStop(0.5, '#2E7D32');
            grad.addColorStop(1, '#1B5E20');
            this.ctx.fillStyle = grad;
            this.ctx.fillRect(grX - cw * 0.14, diskY, cw * 0.28, ch * 0.045);
            this.ctx.strokeStyle = '#0D3818';
            this.ctx.lineWidth = 1;
            this.ctx.strokeRect(grX - cw * 0.14, diskY, cw * 0.28, ch * 0.045);
        }

        // Light arrows hitting granum
        this.ctx.fillStyle = '#FFD700';
        for (let i = 0; i < 4; i++) {
            const lx = grX - cw * 0.09 + i * cw * 0.06;
            this.ctx.beginPath();
            this.ctx.moveTo(lx, ch * 0.08);
            this.ctx.lineTo(lx - 5, ch * 0.18);
            this.ctx.lineTo(lx + 5, ch * 0.18);
            this.ctx.fill();
        }
        this.ctx.fillStyle = '#FF6F00';
        this.ctx.font = `bold ${ch * 0.04}px Arial`;
        this.ctx.textAlign = 'center';
        this.ctx.fillText('LIGHT', grX, ch * 0.14);

        if (showLabels && step === 2) {
            this.addLabel('Granum\n(thylakoid stack)', grX - cw * 0.20, grY - ch * 0.08, '#1B5E20', 'right');
            this.addLabel('Thylakoid membrane', grX, grY + ch * 0.24, '#2E7D32');
        }
    }

    // ── STEP 3 — ATP / NADPH arrows ─────────────────────────────────────────
    if (step >= 3) {
        const grX = cw * 0.30;
        const cyX = cw * 0.70;
        const midY = ch * 0.50;

        // Connecting arrow (ATP/NADPH)
        this.ctx.strokeStyle = '#9C27B0';
        this.ctx.lineWidth = 4;
        this.ctx.setLineDash([]);
        this.ctx.beginPath();
        this.ctx.moveTo(grX + cw * 0.14, midY);
        this.ctx.lineTo(cyX - cw * 0.14, midY);
        this.ctx.stroke();
        this.drawArrow(grX + cw * 0.14, midY, cyX - cw * 0.14, midY, '#9C27B0', '', 8);

        this.ctx.font = `${ch * 0.032}px Arial`;
        this.ctx.fillStyle = '#9C27B0';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('ATP', (grX + cyX) / 2, midY - ch * 0.05);
        this.ctx.fillText('NADPH', (grX + cyX) / 2, midY + ch * 0.08);

        // H₂O input, O₂ output
        this.ctx.fillStyle = '#2196F3';
        this.ctx.font = `bold ${ch * 0.04}px Arial`;
        this.ctx.textAlign = 'right';
        this.ctx.fillText('H₂O', grX - cw * 0.18, ch * 0.65);
        this.ctx.fillStyle = '#4CAF50';
        this.ctx.textAlign = 'left';
        this.ctx.fillText('O₂', grX - cw * 0.12, ch * 0.78);

        if (showLabels && step === 3) {
            this.addLabel('Water splitting\n(photolysis)', grX - cw * 0.18, ch * 0.72, '#2196F3', 'right');
            this.addLabel('Oxygen released', grX - cw * 0.12, ch * 0.84, '#4CAF50', 'left');
        }
    }

    // ── STEP 4 — Calvin cycle circle ────────────────────────────────────────
    if (step >= 4) {
        const cyX = cw * 0.70;
        const cyY = ch * 0.50;
        const cyR = cw * 0.14;

        this.ctx.strokeStyle = '#388E3C';
        this.ctx.lineWidth = 4;
        this.ctx.setLineDash([8, 4]);
        this.ctx.beginPath();
        this.ctx.arc(cyX, cyY, cyR, 0, Math.PI * 2);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        // Arrows around cycle
        for (let i = 0; i < 3; i++) {
            const angle = (i / 3) * Math.PI * 2 - Math.PI / 2;
            const nextAngle = angle + (Math.PI * 2 / 3);
            const ax = cyX + Math.cos(nextAngle) * cyR;
            const ay = cyY + Math.sin(nextAngle) * cyR;
            this.ctx.fillStyle = '#388E3C';
            this.ctx.beginPath();
            this.ctx.arc(ax, ay, cw * 0.02, 0, Math.PI * 2);
            this.ctx.fill();
        }

        // CO₂ input
        this.ctx.fillStyle = '#FF5722';
        this.ctx.font = `bold ${ch * 0.04}px Arial`;
        this.ctx.textAlign = 'center';
        this.ctx.fillText('CO₂', cyX, ch * 0.12);
        this.drawArrow(cyX, ch * 0.16, cyX, cyY - cyR, '#FF5722', '', 7);

        // Glucose output
        this.ctx.fillStyle = '#FF9800';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('C₆H₁₂O₆', cyX, ch * 0.88);
        this.ctx.font = `${ch * 0.028}px Arial`;
        this.ctx.fillText('(Glucose)', cyX, ch * 0.93);
        this.drawArrow(cyX, cyY + cyR, cyX, ch * 0.84, '#FF9800', '', 7);

        if (showLabels && step === 4) {
            this.addLabel('Calvin Cycle\n(stroma)', cyX, cyY, '#1B5E20');
            this.addLabel('RuBisCO fixation', cyX + cyR + 10, cyY - cyR * 0.5, '#388E3C', 'left');
            this.addLabel('G3P → Glucose', cyX + cyR + 10, cyY + cyR * 0.5, '#FF9800', 'left');
        }
    }

    // ── STEP 5 — Full labels + overall equation ──────────────────────────────
    if (step >= 5) {
        if (showLabels) {
            this.addLabel('Light Reactions\n(thylakoid)', cw * 0.30, ch * 0.88, '#1B5E20');
            this.addLabel('Light source', cw * 0.30, ch * 0.06, '#FF6F00');
        }

        // Overall equation banner
        this.ctx.fillStyle = 'rgba(27,94,32,0.08)';
        this.ctx.fillRect(8, height - 36, width - 16, 28);
        this.ctx.strokeStyle = '#2E7D32';
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(8, height - 36, width - 16, 28);
        this.ctx.font = `bold ${height * 0.038}px Arial`;
        this.ctx.fillStyle = '#1B5E20';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('6CO₂ + 6H₂O + Light Energy → C₆H₁₂O₆ + 6O₂', width / 2, height - 16);

        this.drawLegend(8, height - 90, [
            { color: '#2E7D32', label: 'Thylakoid / granum'   },
            { color: '#9C27B0', label: 'ATP & NADPH'          },
            { color: '#FF5722', label: 'CO₂ input'            },
            { color: '#FF9800', label: 'Glucose output'       },
            { color: '#4CAF50', label: 'O₂ released'          }
        ]);
    }

    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${step} of 5`, width - 8, height - 4);

    if (showInset) this.drawInset(width * 0.02, 8, width * 0.36, height * 0.28, insetType);

    this.ctx.restore();
}

// ═══════════════════════════════════════════════════════════════════════════
// FLOWER STRUCTURE — STEP-BY-STEP RENDERER
// Steps:
//   1 — Receptacle & sepals
//   2 — + Petals
//   3 — + Stamens
//   4 — + Pistil
//   5 — + Labels & stage overlays
// ═══════════════════════════════════════════════════════════════════════════
renderFlowerStructureDiagram(x, y, width, height, options = {}) {
    const {
        component   = 'complete',
        stage       = 'mature',
        drawingStep = 5,
        showLabels  = true,
        showInset   = false,
        insetType   = 'pollen-grain-detail'
    } = options;

    this.ctx.save();
    this.ctx.translate(x - width / 2, y - height / 2);

    const step = Math.max(1, Math.min(5, drawingStep));

    const stepLabels = [
        'Step 1 – Receptacle & Sepals',
        'Step 2 – Petals',
        'Step 3 – Stamens (Male organs)',
        'Step 4 – Pistil (Female organ)',
        'Step 5 – Complete Flower'
    ];
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.05);

    // Specific component view
    if (component !== 'complete') {
        AnatomicalShapes.drawFlowerStructure(
            this.ctx, 0, height * 0.08, width, height * 0.86, component, stage
        );
        if (showInset) this.drawInset(width * 0.60, height * 0.05, width * 0.38, height * 0.28, insetType);
        this.ctx.restore();
        return;
    }

    const cX = width  * 0.50;
    const cY = height * 0.56;

    // ── STEP 1 — Stem, receptacle, sepals ───────────────────────────────────
    if (step >= 1) {
        // Stem
        this.ctx.fillStyle = '#4CAF50';
        this.ctx.strokeStyle = '#2E7D32';
        this.ctx.lineWidth = 2;
        this.ctx.fillRect(cX - width * 0.02, cY + height * 0.15, width * 0.04, height * 0.28);
        this.ctx.strokeRect(cX - width * 0.02, cY + height * 0.15, width * 0.04, height * 0.28);

        // Receptacle
        this.ctx.fillStyle = '#8BC34A';
        this.ctx.beginPath();
        this.ctx.ellipse(cX, cY + height * 0.15, width * 0.07, height * 0.04, 0, 0, Math.PI * 2);
        this.ctx.fill();

        // Sepals
        for (let i = 0; i < 5; i++) {
            const angle = (i / 5) * Math.PI * 2 - Math.PI / 2;
            this.ctx.save();
            this.ctx.translate(cX, cY);
            this.ctx.rotate(angle);
            this.ctx.fillStyle = '#689F38';
            this.ctx.strokeStyle = '#33691E';
            this.ctx.lineWidth = 1.5;
            this.ctx.beginPath();
            this.ctx.moveTo(0, height * 0.10);
            this.ctx.quadraticCurveTo(-width * 0.04, height * 0.17, -width * 0.045, height * 0.22);
            this.ctx.quadraticCurveTo(0, height * 0.24, width * 0.045, height * 0.22);
            this.ctx.quadraticCurveTo(width * 0.04, height * 0.17, 0, height * 0.10);
            this.ctx.fill(); this.ctx.stroke();
            this.ctx.restore();
        }

        if (showLabels && step === 1) {
            this.addLabel('Stem',       cX + width * 0.06, cY + height * 0.25, '#2E7D32', 'left');
            this.addLabel('Receptacle', cX + width * 0.10, cY + height * 0.15, '#558B2F', 'left');
            this.addLabel('Sepal',      cX - width * 0.20, cY + height * 0.22, '#33691E', 'right');
        }
    }

    // ── STEP 2 — Petals ─────────────────────────────────────────────────────
    if (step >= 2) {
        for (let i = 0; i < 5; i++) {
            const angle = (i / 5) * Math.PI * 2 - Math.PI / 2 + Math.PI / 10;
            const grad = this.ctx.createRadialGradient(cX, cY, 0, cX, cY, width * 0.15);
            grad.addColorStop(0, '#FFE082');
            grad.addColorStop(0.5, '#FFC107');
            grad.addColorStop(1, '#FF6F00');
            this.ctx.save();
            this.ctx.translate(cX, cY);
            this.ctx.rotate(angle);
            this.ctx.fillStyle = grad;
            this.ctx.strokeStyle = '#E65100';
            this.ctx.lineWidth = 1.5;
            this.ctx.beginPath();
            this.ctx.moveTo(0, 0);
            this.ctx.quadraticCurveTo(-width * 0.06, height * 0.05, -width * 0.07, height * 0.12);
            this.ctx.quadraticCurveTo(-width * 0.05, height * 0.18, 0, height * 0.20);
            this.ctx.quadraticCurveTo(width * 0.05, height * 0.18, width * 0.07, height * 0.12);
            this.ctx.quadraticCurveTo(width * 0.06, height * 0.05, 0, 0);
            this.ctx.fill(); this.ctx.stroke();
            this.ctx.restore();
        }

        if (showLabels && step === 2) {
            this.addLabel('Petal\n(corolla)', cX + width * 0.22, cY - height * 0.12, '#E65100', 'left');
        }
    }

    // ── STEP 3 — Stamens ────────────────────────────────────────────────────
    if (step >= 3) {
        for (let i = 0; i < 6; i++) {
            const angle = (i / 6) * Math.PI * 2;
            const stX = cX + Math.cos(angle) * width * 0.08;
            const stY = cY + Math.sin(angle) * height * 0.07;

            // Filament
            this.ctx.strokeStyle = '#FFEB3B';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.moveTo(cX, cY);
            this.ctx.lineTo(stX, stY);
            this.ctx.stroke();

            // Anther
            this.ctx.fillStyle = '#F57C00';
            this.ctx.strokeStyle = '#E65100';
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.ellipse(stX, stY, width * 0.014, height * 0.022, angle, 0, Math.PI * 2);
            this.ctx.fill(); this.ctx.stroke();
        }

        if (showLabels && step === 3) {
            this.addLabel('Stamen\n(Filament + Anther)', cX - width * 0.32, cY - height * 0.06, '#F57C00', 'right');
        }
    }

    // ── STEP 4 — Pistil ─────────────────────────────────────────────────────
    if (step >= 4) {
        // Ovary
        this.ctx.fillStyle = '#8BC34A';
        this.ctx.strokeStyle = '#558B2F';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.ellipse(cX, cY, width * 0.038, height * 0.058, 0, 0, Math.PI * 2);
        this.ctx.fill(); this.ctx.stroke();

        // Style
        this.ctx.fillStyle = '#9CCC65';
        this.ctx.fillRect(cX - width * 0.008, cY - height * 0.10, width * 0.016, height * 0.10);

        // Stigma
        this.ctx.fillStyle = '#FDD835';
        this.ctx.strokeStyle = '#F9A825';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(cX, cY - height * 0.10, width * 0.020, 0, Math.PI * 2);
        this.ctx.fill(); this.ctx.stroke();

        if (showLabels && step === 4) {
            this.addLabel('Stigma',  cX + width * 0.06, cY - height * 0.10, '#F9A825', 'left');
            this.addLabel('Style',   cX + width * 0.06, cY - height * 0.05, '#7CB342', 'left');
            this.addLabel('Ovary',   cX + width * 0.06, cY + height * 0.01, '#558B2F', 'left');
            this.addLabel('Pistil\n(female organ)', cX + width * 0.06, cY + height * 0.06, '#2E7D32', 'left');
        }
    }

    // ── STEP 5 — Labels + stage overlay ─────────────────────────────────────
    if (step >= 5) {
        if (showLabels) {
            this.addLabel('Petal',    cX - width * 0.28, cY - height * 0.18, '#E65100',  'right');
            this.addLabel('Sepal',    cX - width * 0.28, cY + height * 0.22, '#33691E',  'right');
            this.addLabel('Anther',   cX + width * 0.18, cY - height * 0.08, '#F57C00',  'left');
            this.addLabel('Filament', cX + width * 0.18, cY,                  '#FFEB3B',  'left');
            this.addLabel('Stigma',   cX + width * 0.10, cY - height * 0.11, '#F9A825',  'left');
            this.addLabel('Style',    cX + width * 0.10, cY - height * 0.06, '#7CB342',  'left');
            this.addLabel('Ovary',    cX + width * 0.10, cY + height * 0.01, '#558B2F',  'left');
        }

        // Stage overlay
        if (stage === 'pollination') {
            // Pollen grains on stigma
            this.ctx.fillStyle = '#FF6F00';
            for (let i = 0; i < 6; i++) {
                this.ctx.beginPath();
                this.ctx.arc(
                    cX + (Math.random() - 0.5) * width * 0.03,
                    cY - height * 0.10 + (Math.random() - 0.5) * height * 0.03,
                    width * 0.004, 0, Math.PI * 2
                );
                this.ctx.fill();
            }
            this.addLabel('Pollen on stigma', cX - width * 0.12, cY - height * 0.14, '#FF6F00', 'right');
        } else if (stage === 'fertilization') {
            // Pollen tube
            this.ctx.strokeStyle = '#FF9800';
            this.ctx.lineWidth = 2.5;
            this.ctx.setLineDash([4, 3]);
            this.ctx.beginPath();
            this.ctx.moveTo(cX, cY - height * 0.09);
            this.ctx.lineTo(cX, cY - height * 0.02);
            this.ctx.stroke();
            this.ctx.setLineDash([]);
            this.addLabel('Pollen tube →\ngrowing to ovule', cX + width * 0.04, cY - height * 0.06, '#FF9800', 'left');
        }

        const stageText = {
            mature: 'Mature Flower',
            pollination: 'Pollination',
            fertilization: 'Fertilization',
            'seed-development': 'Seed Development'
        };
        this.ctx.font = `bold ${height * 0.042}px Arial`;
        this.ctx.fillStyle = '#1B5E20';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(`Flower Anatomy — ${stageText[stage] || stage}`, width / 2, height * 0.04);

        this.drawLegend(8, height - 54, [
            { color: '#FFC107', label: 'Petals (corolla)'    },
            { color: '#689F38', label: 'Sepals (calyx)'      },
            { color: '#F57C00', label: 'Anther (pollen)'     },
            { color: '#FDD835', label: 'Stigma'              },
            { color: '#8BC34A', label: 'Ovary'               }
        ]);
    }

    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${step} of 5`, width - 8, height - 4);

    if (showInset) this.drawInset(width * 0.60, 8, width * 0.38, height * 0.28, insetType);

    this.ctx.restore();
}

// ═══════════════════════════════════════════════════════════════════════════
// STOMATA STRUCTURE — STEP-BY-STEP RENDERER
// Steps:
//   1 — Epidermal background
//   2 — + Guard cells
//   3 — + Stomatal pore
//   4 — + Chloroplasts in guard cells
//   5 — + Full mechanism, labels
// ═══════════════════════════════════════════════════════════════════════════
renderStomataDiagram(x, y, width, height, options = {}) {
    const {
        state       = 'both',
        view        = 'surface',
        drawingStep = 5,
        showLabels  = true,
        showInset   = false,
        insetType   = 'turgor-pressure'
    } = options;

    this.ctx.save();
    this.ctx.translate(x - width / 2, y - height / 2);

    const step = Math.max(1, Math.min(5, drawingStep));

    const stepLabels = [
        'Step 1 – Epidermal Cells',
        'Step 2 – Guard Cells',
        'Step 3 – Stomatal Pore',
        'Step 4 – Chloroplasts in Guard Cells',
        'Step 5 – Complete Mechanism'
    ];
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.05);

    // For step 5 (or specific state), delegate to AnatomicalShapes
    if (step === 5 || state !== 'both') {
        AnatomicalShapes.drawStomataStructure(
            this.ctx, 0, height * 0.08, width, height * 0.88, state, view
        );
        if (showLabels && step === 5) {
            if (state === 'both') {
                this.addLabel('Open stomata: guard cells turgid, pore visible',
                    width * 0.5, height * 0.96, '#2E7D32');
            } else {
                this.addLabel(state === 'open' ? 'Open Stomata (high turgor)' : 'Closed Stomata (low turgor)',
                    width * 0.5, height * 0.96, '#2E7D32');
            }
        }
        if (showInset) this.drawInset(width * 0.60, 8, width * 0.38, height * 0.28, insetType);
        this.ctx.restore();
        return;
    }

    // Build up incrementally for steps 1–4
    const cX = width  * 0.50;
    const cY = height * 0.52;
    const gW = width  * 0.55;
    const gH = height * 0.58;

    // ── STEP 1 — Epidermal background ───────────────────────────────────────
    if (step >= 1) {
        this.ctx.fillStyle = '#C5E1A5';
        this.ctx.fillRect(cX - gW / 2, cY - gH / 2, gW, gH);
        this.ctx.strokeStyle = '#558B2F';
        this.ctx.lineWidth = 1.5;
        // Cell wall grid
        for (let i = 1; i < 5; i++) {
            this.ctx.beginPath();
            this.ctx.moveTo(cX - gW / 2 + (i / 5) * gW, cY - gH / 2);
            this.ctx.lineTo(cX - gW / 2 + (i / 5) * gW, cY + gH / 2);
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.moveTo(cX - gW / 2, cY - gH / 2 + (i / 5) * gH);
            this.ctx.lineTo(cX + gW / 2, cY - gH / 2 + (i / 5) * gH);
            this.ctx.stroke();
        }
        if (showLabels && step === 1) {
            this.addLabel('Epidermal cells', cX, cY - gH / 2 - 10, '#4A7020');
        }
    }

    // ── STEP 2 — Guard cells ────────────────────────────────────────────────
    if (step >= 2) {
        // Left guard cell
        this.ctx.fillStyle = '#66BB6A';
        this.ctx.strokeStyle = '#2E7D32';
        this.ctx.lineWidth = 2.5;
        this.ctx.beginPath();
        this.ctx.ellipse(cX - width * 0.07, cY, width * 0.06, height * 0.16, -0.3, 0, Math.PI * 2);
        this.ctx.fill(); this.ctx.stroke();

        // Right guard cell
        this.ctx.beginPath();
        this.ctx.ellipse(cX + width * 0.07, cY, width * 0.06, height * 0.16, 0.3, 0, Math.PI * 2);
        this.ctx.fill(); this.ctx.stroke();

        if (showLabels && step === 2) {
            this.addLabel('Guard cells\n(bean-shaped)', cX + width * 0.18, cY, '#2E7D32', 'left');
        }
    }

    // ── STEP 3 — Pore ───────────────────────────────────────────────────────
    if (step >= 3) {
        this.ctx.fillStyle = '#000000';
        this.ctx.beginPath();
        this.ctx.ellipse(cX, cY, width * 0.04, height * 0.12, 0, 0, Math.PI * 2);
        this.ctx.fill();

        // Gas exchange arrows
        this.ctx.strokeStyle = '#87CEEB';
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([4, 3]);
        for (let i = -1; i <= 1; i += 2) {
            this.ctx.beginPath();
            this.ctx.moveTo(cX + i * width * 0.06, cY + height * 0.20);
            this.ctx.lineTo(cX + i * width * 0.06, cY + height * 0.35);
            this.ctx.stroke();
        }
        this.ctx.setLineDash([]);

        if (showLabels && step === 3) {
            this.addLabel('Stomatal pore\n(ostiole)', cX - width * 0.18, cY, '#333', 'right');
            this.addLabel('Gas / H₂O exchange', cX, cY + height * 0.38, '#87CEEB');
        }
    }

    // ── STEP 4 — Chloroplasts ───────────────────────────────────────────────
    if (step >= 4) {
        this.ctx.fillStyle = '#1B5E20';
        for (const [gx, gy] of [[-0.07, 0], [0.07, 0]]) {
            for (let i = 0; i < 6; i++) {
                const angle = (i / 6) * Math.PI * 2;
                this.ctx.beginPath();
                this.ctx.ellipse(
                    cX + gx * width + Math.cos(angle) * width * 0.03,
                    cY + gy * height + Math.sin(angle) * height * 0.08,
                    width * 0.012, height * 0.016, 0, 0, Math.PI * 2
                );
                this.ctx.fill();
            }
        }

        if (showLabels && step === 4) {
            this.addLabel('Chloroplasts\n(enable guard cell photosynthesis)',
                cX, cY + height * 0.44, '#1B5E20');
        }
    }

    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${step} of 5`, width - 8, height - 4);

    if (showInset) this.drawInset(width * 0.60, 8, width * 0.38, height * 0.28, insetType);

    this.ctx.restore();
}

// ═══════════════════════════════════════════════════════════════════════════
// XYLEM & PHLOEM — STEP-BY-STEP RENDERER
// Steps:
//   1 — Bundle sheath
//   2 — + Xylem vessels
//   3 — + Phloem sieve tubes
//   4 — + Companion cells
//   5 — + Transport arrows, labels, pressure-flow
// ═══════════════════════════════════════════════════════════════════════════
renderXylemPhloemDiagram(x, y, width, height, options = {}) {
    const {
        tissue      = 'both',
        transport   = 'structure',
        drawingStep = 5,
        showLabels  = true,
        showInset   = false,
        insetType   = 'cohesion-tension-theory'
    } = options;

    this.ctx.save();
    this.ctx.translate(x - width / 2, y - height / 2);

    const step = Math.max(1, Math.min(5, drawingStep));

    const stepLabels = [
        'Step 1 – Bundle Sheath',
        'Step 2 – Xylem Vessels',
        'Step 3 – Phloem Sieve Tubes',
        'Step 4 – Companion Cells',
        'Step 5 – Complete with Transport'
    ];
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.05);

    // Direct delegation for specific tissue or step 5
    if (step === 5 || tissue !== 'both') {
        AnatomicalShapes.drawXylemPhloem(
            this.ctx, 0, height * 0.08, width, height * 0.86, tissue, transport
        );
        if (showLabels && step === 5) {
            const legend = tissue === 'xylem'
                ? [{ color: '#A0522D', label: 'Xylem (water/minerals up)' }]
                : tissue === 'phloem'
                    ? [{ color: '#90EE90', label: 'Phloem (sugars bidirectional)' }]
                    : [
                        { color: '#A0522D', label: 'Xylem'                  },
                        { color: '#90EE90', label: 'Phloem'                 },
                        { color: '#98FB98', label: 'Companion cells'        },
                        { color: '#FFEB3B', label: 'Sieve plates'           }
                    ];
            this.drawLegend(8, height - 54, legend);
        }
        if (showInset) this.drawInset(width * 0.60, 8, width * 0.38, height * 0.28, insetType);
        this.ctx.restore();
        return;
    }

    // Incremental build for steps 1–4
    const cX = width  * 0.50;
    const cY = height * 0.50;

    // ── STEP 1 — Bundle sheath ───────────────────────────────────────────────
    if (step >= 1) {
        this.ctx.fillStyle = '#D2B48C';
        this.ctx.strokeStyle = '#8B7355';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.ellipse(cX, cY, width * 0.34, height * 0.40, 0, 0, Math.PI * 2);
        this.ctx.fill(); this.ctx.stroke();
        if (showLabels && step === 1) {
            this.addLabel('Bundle sheath\n(protective layer)', cX, cY + height * 0.44, '#8B7355');
        }
    }

    // ── STEP 2 — Xylem vessels (bottom half) ────────────────────────────────
    if (step >= 2) {
        for (let i = 0; i < 5; i++) {
            const vx = cX - width * 0.18 + (i / 4) * width * 0.36;
            const vy = cY + height * 0.14;
            // Cell wall
            this.ctx.fillStyle = '#A0522D';
            this.ctx.strokeStyle = '#654321';
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            this.ctx.arc(vx, vy, width * 0.05, 0, Math.PI * 2);
            this.ctx.fill(); this.ctx.stroke();
            // Lignin rings
            this.ctx.strokeStyle = '#8B4513';
            this.ctx.lineWidth = 1.5;
            for (let r = 1; r <= 3; r++) {
                this.ctx.beginPath();
                this.ctx.arc(vx, vy, width * 0.05 - r * width * 0.01, 0, Math.PI * 2);
                this.ctx.stroke();
            }
            // Hollow lumen
            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.beginPath();
            this.ctx.arc(vx, vy, width * 0.022, 0, Math.PI * 2);
            this.ctx.fill();
        }
        // Dividing line
        this.ctx.strokeStyle = '#8B4513';
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([6, 4]);
        this.ctx.beginPath();
        this.ctx.moveTo(cX - width * 0.30, cY);
        this.ctx.lineTo(cX + width * 0.30, cY);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        if (showLabels && step === 2) {
            this.addLabel('Xylem vessels\n(lignified, hollow lumen)', cX, cY + height * 0.30, '#8B4513');
        }
    }

    // ── STEP 3 — Phloem sieve tubes (top half) ───────────────────────────────
    if (step >= 3) {
        for (let i = 0; i < 6; i++) {
            const px = cX - width * 0.20 + (i / 5) * width * 0.40;
            const py = cY - height * 0.15;
            this.ctx.fillStyle = '#228B22';
            this.ctx.strokeStyle = '#1A6B1A';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.arc(px, py, width * 0.038, 0, Math.PI * 2);
            this.ctx.fill(); this.ctx.stroke();
            // Sieve plate line
            this.ctx.strokeStyle = '#FFD700';
            this.ctx.lineWidth = 1.5;
            this.ctx.beginPath();
            this.ctx.moveTo(px - width * 0.03, py);
            this.ctx.lineTo(px + width * 0.03, py);
            this.ctx.stroke();
        }

        if (showLabels && step === 3) {
            this.addLabel('Phloem sieve tubes\n(living, sieve plates)', cX, cY - height * 0.30, '#228B22');
        }
    }

    // ── STEP 4 — Companion cells ─────────────────────────────────────────────
    if (step >= 4) {
        for (let i = 0; i < 4; i++) {
            const px = cX - width * 0.14 + (i / 3) * width * 0.28;
            const py = cY - height * 0.15;
            const ccX = px + width * 0.06;

            this.ctx.fillStyle = '#32CD32';
            this.ctx.strokeStyle = '#1A7A1A';
            this.ctx.lineWidth = 1.5;
            this.ctx.beginPath();
            this.ctx.arc(ccX, py, width * 0.022, 0, Math.PI * 2);
            this.ctx.fill(); this.ctx.stroke();

            // Nucleus in companion cell
            this.ctx.fillStyle = '#5D4037';
            this.ctx.beginPath();
            this.ctx.arc(ccX, py, width * 0.010, 0, Math.PI * 2);
            this.ctx.fill();

            // Plasmodesmata
            this.ctx.strokeStyle = '#FFD700';
            this.ctx.lineWidth = 1;
            this.ctx.setLineDash([2, 2]);
            this.ctx.beginPath();
            this.ctx.moveTo(px + width * 0.038, py);
            this.ctx.lineTo(ccX - width * 0.022, py);
            this.ctx.stroke();
            this.ctx.setLineDash([]);
        }

        if (showLabels && step === 4) {
            this.addLabel('Companion cells\n(metabolically active, with nucleus)',
                cX + width * 0.38, cY - height * 0.15, '#32CD32', 'left');
        }
    }

    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${step} of 5`, width - 8, height - 4);

    if (showInset) this.drawInset(width * 0.60, 8, width * 0.38, height * 0.28, insetType);

    this.ctx.restore();
}

// ═══════════════════════════════════════════════════════════════════════════
// SEED GERMINATION — STEP-BY-STEP RENDERER
// Steps:
//   1 — Dry seed
//   2 — + Imbibition (water uptake)
//   3 — + Radicle emergence
//   4 — + Shoot emergence
//   5 — + Young seedling with root system
// ═══════════════════════════════════════════════════════════════════════════
renderSeedGerminationDiagram(x, y, width, height, options = {}) {
    const {
        stage       = 'complete',
        seedType    = 'dicot',
        drawingStep = 5,
        showLabels  = true,
        showInset   = false,
        insetType   = 'seed-internal-anatomy'
    } = options;

    this.ctx.save();
    this.ctx.translate(x - width / 2, y - height / 2);

    const step = Math.max(1, Math.min(5, drawingStep));

    const stepLabels = [
        'Step 1 – Dry Seed',
        'Step 2 – Imbibition (Water Uptake)',
        'Step 3 – Radicle Emergence',
        'Step 4 – Shoot Emergence',
        'Step 5 – Young Seedling'
    ];
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.05);

    // For step 5 or a specific stage, delegate to AnatomicalShapes
    if (step === 5 || stage !== 'complete') {
        AnatomicalShapes.drawSeedGermination(
            this.ctx, 0, height * 0.08, width, height * 0.86, stage, seedType
        );
        if (showLabels && step === 5) {
            this.addLabel(
                seedType === 'dicot' ? 'Dicot Germination' : 'Monocot Germination',
                width / 2, height * 0.96, '#2E7D32'
            );
        }
        if (showInset) this.drawInset(width * 0.60, 8, width * 0.38, height * 0.28, insetType);
        this.ctx.restore();
        return;
    }

    // Incremental build: show n stages across the canvas for steps 1–4
    const soilY = height * 0.55;

    // Soil fill
    this.ctx.fillStyle = '#8D6E63';
    this.ctx.fillRect(0, soilY, width, height - soilY);
    this.ctx.fillStyle = '#6D4C41';
    for (let i = 0; i < 30; i++) {
        this.ctx.beginPath();
        this.ctx.arc(
            (i * 137.5 % 1) * width,
            soilY + (i * 0.083 % 1) * (height - soilY),
            width * 0.006, 0, Math.PI * 2
        );
        this.ctx.fill();
    }

    // Draw only the stages that have been "reached"
    const stageConfigs = [
        { method: AnatomicalShapes.drawDrySeed,       x: 0.14, label: 'Dry Seed'   },
        { method: AnatomicalShapes.drawImbibition,    x: 0.30, label: 'Imbibition' },
        { method: AnatomicalShapes.drawRadicleEmergence, x: 0.50, label: 'Radicle'  },
        { method: AnatomicalShapes.drawShootEmergence,   x: 0.68, label: 'Shoot'    },
        { method: AnatomicalShapes.drawYoungSeedling,    x: 0.86, label: 'Seedling' },
    ];

    stageConfigs.slice(0, step).forEach((cfg, idx) => {
        const sx = cfg.x * width;
        const sw = width * 0.12;
        const sh = height * 0.40;

        cfg.method.call(AnatomicalShapes, this.ctx, sx, soilY - sh * 0.3, sw, sh, seedType);

        if (showLabels) {
            this.ctx.font = `bold ${height * 0.032}px Arial`;
            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(cfg.label, sx, soilY + height * 0.08);

            // Step number
            this.ctx.fillStyle = '#FFC107';
            this.ctx.font = `bold ${height * 0.04}px Arial`;
            this.ctx.fillText(`${idx + 1}`, sx, height * 0.10);
        }

        // Arrow to next
        if (idx < step - 1) {
            const nextX = stageConfigs[idx + 1].x * width;
            this.ctx.fillStyle = '#66BB6A';
            this.ctx.beginPath();
            const arrowMid = (sx + nextX) / 2;
            this.ctx.moveTo(arrowMid, soilY - height * 0.12);
            this.ctx.lineTo(arrowMid - 6, soilY - height * 0.18);
            this.ctx.lineTo(arrowMid + 6, soilY - height * 0.18);
            this.ctx.fill();
        }
    });

    // Timeline bar
    this.ctx.strokeStyle = '#8D6E63';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.08, height * 0.92);
    this.ctx.lineTo(width * 0.92, height * 0.92);
    this.ctx.stroke();

    const timeLabels = ['0–24 h', '24–48 h', '2–3 d', '3–5 d', '5–7 d'];
    stageConfigs.slice(0, step).forEach((cfg, idx) => {
        this.ctx.fillStyle = '#BCAAA4';
        this.ctx.font = `${height * 0.025}px Arial`;
        this.ctx.textAlign = 'center';
        this.ctx.fillText(timeLabels[idx], cfg.x * width, height * 0.97);
    });

    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${step} of 5`, width - 8, height - 4);

    if (showInset) this.drawInset(width * 0.60, 8, width * 0.38, height * 0.28, insetType);

    this.ctx.restore();
}

// ═══════════════════════════════════════════════════════════════════════════
// PLANT TROPISMS — STEP-BY-STEP RENDERER
// Steps:
//   1 — Stimulus source
//   2 — + Stimulus perception
//   3 — + Auxin redistribution
//   4 — + Differential cell elongation
//   5 — + Complete growth response with labels
// ═══════════════════════════════════════════════════════════════════════════
renderPlantTropismsDiagram(x, y, width, height, options = {}) {
    const {
        tropismType = 'all',
        mechanism   = 'overview',
        drawingStep = 5,
        showLabels  = true,
        showInset   = false,
        insetType   = 'auxin-action'
    } = options;

    this.ctx.save();
    this.ctx.translate(x - width / 2, y - height / 2);

    const step = Math.max(1, Math.min(5, drawingStep));

    const stepLabels = [
        'Step 1 – Stimulus Source',
        'Step 2 – Stimulus Perception',
        'Step 3 – Auxin Redistribution',
        'Step 4 – Differential Cell Elongation',
        'Step 5 – Complete Growth Response'
    ];
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.05);

    // Delegate for step 5 or specific tropism
    if (step === 5 || tropismType !== 'all') {
        const mech = step === 5 ? mechanism : 'overview';
        AnatomicalShapes.drawTropisms(
            this.ctx, 0, height * 0.08, width, height * 0.86, tropismType, mech
        );
        if (showLabels && step === 5) {
            this.drawLegend(8, height - 54, [
                { color: '#FFD700', label: 'Light stimulus'         },
                { color: '#F44336', label: 'Gravity'                },
                { color: '#9C27B0', label: 'Auxin (IAA)'            },
                { color: '#4CAF50', label: 'Positive growth zone'   },
                { color: '#C5E1A5', label: 'Elongated cells'        }
            ]);
        }
        if (showInset) this.drawInset(width * 0.60, 8, width * 0.38, height * 0.28, insetType);
        this.ctx.restore();
        return;
    }

    // Incremental build for steps 1–4 (phototropism as the model example)
    const soilY   = height * 0.70;
    const plantX  = width  * 0.38;
    const lightX  = width  * 0.12;
    const lightY  = height * 0.25;

    // Soil
    this.ctx.fillStyle = '#8D6E63';
    this.ctx.fillRect(0, soilY, width, height - soilY);

    // ── STEP 1 — Light source ────────────────────────────────────────────────
    if (step >= 1) {
        this.ctx.fillStyle = '#FFD700';
        this.ctx.strokeStyle = '#FF6F00';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(lightX, lightY, width * 0.07, 0, Math.PI * 2);
        this.ctx.fill(); this.ctx.stroke();
        for (let i = 0; i < 10; i++) {
            const a = (i / 10) * Math.PI * 2;
            this.ctx.strokeStyle = '#FFEB3B';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.moveTo(lightX + Math.cos(a) * width * 0.07, lightY + Math.sin(a) * width * 0.07);
            this.ctx.lineTo(lightX + Math.cos(a) * width * 0.12, lightY + Math.sin(a) * width * 0.12);
            this.ctx.stroke();
        }
        // Stem (vertical at this step)
        this.ctx.strokeStyle = '#4CAF50';
        this.ctx.lineWidth = 6;
        this.ctx.beginPath();
        this.ctx.moveTo(plantX, soilY);
        this.ctx.lineTo(plantX, soilY - height * 0.50);
        this.ctx.stroke();

        if (showLabels && step === 1) {
            this.addLabel('Light source\n(stimulus)', lightX, lightY - width * 0.10, '#FF6F00');
            this.addLabel('Plant stem\n(before bending)', plantX + 20, soilY - height * 0.25, '#2E7D32', 'left');
        }
    }

    // ── STEP 2 — Perception (photoreceptors in tip) ──────────────────────────
    if (step >= 2) {
        // Coleoptile / shoot tip
        this.ctx.fillStyle = '#A5D6A7';
        this.ctx.strokeStyle = '#2E7D32';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(plantX, soilY - height * 0.50, width * 0.04, 0, Math.PI * 2);
        this.ctx.fill(); this.ctx.stroke();

        // Light rays hitting tip
        this.ctx.strokeStyle = '#FFD700';
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([4, 3]);
        for (let i = 0; i < 3; i++) {
            this.ctx.beginPath();
            this.ctx.moveTo(lightX + width * 0.07, lightY + i * height * 0.02);
            this.ctx.lineTo(plantX - width * 0.04, soilY - height * 0.50 + i * height * 0.02);
            this.ctx.stroke();
        }
        this.ctx.setLineDash([]);

        if (showLabels && step === 2) {
            this.addLabel('Shoot apex\n(photoreceptors detect light)',
                plantX - 30, soilY - height * 0.55, '#2E7D32', 'right');
        }
    }

    // ── STEP 3 — Auxin redistribution ───────────────────────────────────────
    if (step >= 3) {
        const auxinPanelX = width * 0.58;
        const auxinPanelY = soilY - height * 0.45;
        const panW = width * 0.30;
        const panH = height * 0.35;

        this.ctx.fillStyle = '#E8F5E9';
        this.ctx.strokeStyle = '#388E3C';
        this.ctx.lineWidth = 1.5;
        this.ctx.fillRect(auxinPanelX, auxinPanelY, panW, panH);
        this.ctx.strokeRect(auxinPanelX, auxinPanelY, panW, panH);

        // Stem cross-section (half / half)
        const csX = auxinPanelX + panW / 2;
        const csY = auxinPanelY + panH / 2;

        // High auxin side (shaded)
        this.ctx.fillStyle = '#9C27B0';
        this.ctx.beginPath();
        this.ctx.arc(csX, csY, width * 0.07, Math.PI / 2, Math.PI * 3 / 2);
        this.ctx.lineTo(csX, csY);
        this.ctx.closePath();
        this.ctx.fill();

        // Low auxin side
        this.ctx.fillStyle = 'rgba(156,39,176,0.2)';
        this.ctx.beginPath();
        this.ctx.arc(csX, csY, width * 0.07, -Math.PI / 2, Math.PI / 2);
        this.ctx.lineTo(csX, csY);
        this.ctx.closePath();
        this.ctx.fill();

        this.ctx.strokeStyle = '#6A1B9A';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(csX, csY, width * 0.07, 0, Math.PI * 2);
        this.ctx.stroke();

        if (showLabels) {
            this.ctx.font = `${height * 0.028}px Arial`;
            this.ctx.fillStyle = '#9C27B0';
            this.ctx.textAlign = 'right';
            this.ctx.fillText('High auxin', csX - width * 0.08, csY + height * 0.01);
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Low auxin',  csX + width * 0.08, csY + height * 0.01);
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Auxin distribution', auxinPanelX + panW / 2, auxinPanelY - 10);
        }
    }

    // ── STEP 4 — Differential elongation (bending stem) ─────────────────────
    if (step >= 4) {
        // Replace vertical stem with curved stem
        this.ctx.strokeStyle = '#4CAF50';
        this.ctx.lineWidth = 6;
        this.ctx.beginPath();
        this.ctx.moveTo(plantX, soilY);
        this.ctx.quadraticCurveTo(
            plantX - width * 0.08, soilY - height * 0.25,
            plantX - width * 0.20, soilY - height * 0.50
        );
        this.ctx.stroke();

        // Elongated cells (shaded side)
        const ecs = [[plantX - width * 0.04, soilY - height * 0.20],
                     [plantX - width * 0.08, soilY - height * 0.32],
                     [plantX - width * 0.14, soilY - height * 0.43]];
        this.ctx.fillStyle = '#C5E1A5';
        this.ctx.strokeStyle = '#558B2F';
        this.ctx.lineWidth = 1;
        ecs.forEach(([ex, ey]) => {
            this.ctx.fillRect(ex - width * 0.02, ey - height * 0.04, width * 0.025, height * 0.08);
            this.ctx.strokeRect(ex - width * 0.02, ey - height * 0.04, width * 0.025, height * 0.08);
        });

        // Bending arrow
        this.ctx.strokeStyle = '#F44336';
        this.ctx.lineWidth = 2.5;
        this.ctx.setLineDash([4, 3]);
        this.ctx.beginPath();
        this.ctx.arc(plantX, soilY - height * 0.25, width * 0.12, Math.PI, Math.PI * 1.5, false);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        if (showLabels && step === 4) {
            this.addLabel('Cells elongate more\non shaded side →\nstem bends toward light',
                plantX - width * 0.28, soilY - height * 0.30, '#558B2F', 'right');
        }
    }

    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${step} of 5`, width - 8, height - 4);

    if (showInset) this.drawInset(width * 0.60, 8, width * 0.38, height * 0.28, insetType);

    this.ctx.restore();
}

// ═══════════════════════════════════════════════════════════════════════════
// ROOT SYSTEM — STEP-BY-STEP RENDERER
// Steps:
//   1 — Primary root
//   2 — + Lateral roots
//   3 — + Root hairs
//   4 — + Root cap & meristem
//   5 — + Complete system with labels (delegates to AnatomicalShapes)
// ═══════════════════════════════════════════════════════════════════════════
renderRootSystemDiagram(x, y, width, height, options = {}) {
    const {
        type        = 'complete',
        process     = 'structure',
        drawingStep = 5,
        showLabels  = true,
        showInset   = false,
        insetType   = 'root-hair-cell'
    } = options;

    this.ctx.save();
    this.ctx.translate(x - width / 2, y - height / 2);

    const step = Math.max(1, Math.min(5, drawingStep));

    const stepLabels = [
        'Step 1 – Primary Root',
        'Step 2 – Lateral Roots',
        'Step 3 – Root Hairs',
        'Step 4 – Root Cap & Meristem',
        'Step 5 – Complete Root System'
    ];
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.05);

    // Delegate at step 5 or for a specific type
    if (step === 5 || type !== 'complete') {
        AnatomicalShapes.drawRootSystem(
            this.ctx, 0, height * 0.08, width, height * 0.86, type, process
        );
        if (showLabels && step === 5) {
            this.drawLegend(8, height - 54, [
                { color: '#C8A050', label: 'Taproot system'   },
                { color: '#B89040', label: 'Fibrous roots'    },
                { color: '#D4B060', label: 'Root hairs'       },
                { color: '#4488FF', label: 'Water uptake'     }
            ]);
        }
        if (showInset) this.drawInset(width * 0.60, 8, width * 0.38, height * 0.28, insetType);
        this.ctx.restore();
        return;
    }

    // Incremental soil + taproot build for steps 1–4
    const soilTop = height * 0.10;
    const rootX   = width  * 0.50;

    // Soil
    const soilGrad = this.ctx.createLinearGradient(0, soilTop, 0, height);
    soilGrad.addColorStop(0, '#8B6914');
    soilGrad.addColorStop(1, '#5A3E08');
    this.ctx.fillStyle = soilGrad;
    this.ctx.fillRect(0, soilTop, width, height - soilTop);

    // ── STEP 1 — Primary (tap)root ───────────────────────────────────────────
    if (step >= 1) {
        this.ctx.fillStyle = '#C8A050';
        this.ctx.strokeStyle = '#8B6020';
        this.ctx.lineWidth = 2;
        // Main taproot body
        this.ctx.beginPath();
        this.ctx.moveTo(rootX - width * 0.04, soilTop + height * 0.02);
        this.ctx.bezierCurveTo(rootX - width * 0.038, soilTop + height * 0.3,
            rootX - width * 0.035, soilTop + height * 0.6, rootX - width * 0.033, soilTop + height * 0.84);
        this.ctx.lineTo(rootX + width * 0.033, soilTop + height * 0.84);
        this.ctx.bezierCurveTo(rootX + width * 0.035, soilTop + height * 0.6,
            rootX + width * 0.038, soilTop + height * 0.3, rootX + width * 0.04, soilTop + height * 0.02);
        this.ctx.closePath();
        this.ctx.fill(); this.ctx.stroke();

        if (showLabels && step === 1) {
            this.addLabel('Primary taproot\n(main axis)', rootX + width * 0.06, soilTop + height * 0.40, '#C8A050', 'left');
        }
    }

    // ── STEP 2 — Lateral roots ───────────────────────────────────────────────
    if (step >= 2) {
        const laterals = [
            { y: 0.20, dir: -1, len: 0.22 }, { y: 0.28, dir:  1, len: 0.20 },
            { y: 0.38, dir: -1, len: 0.18 }, { y: 0.46, dir:  1, len: 0.16 },
            { y: 0.56, dir: -1, len: 0.14 }, { y: 0.64, dir:  1, len: 0.12 },
        ];
        this.ctx.strokeStyle = '#A88030';
        this.ctx.lineWidth = 2.5;
        laterals.forEach(lr => {
            const sy = soilTop + lr.y * height;
            this.ctx.beginPath();
            this.ctx.moveTo(rootX + (lr.dir < 0 ? -width * 0.038 : width * 0.038), sy);
            this.ctx.bezierCurveTo(
                rootX + lr.dir * width * (0.04 + lr.len * 0.5), sy + height * 0.02,
                rootX + lr.dir * width * (0.04 + lr.len * 0.8), sy + height * 0.04,
                rootX + lr.dir * width * (0.04 + lr.len),       sy + height * 0.06
            );
            this.ctx.stroke();
        });
        if (showLabels && step === 2) {
            this.addLabel('Lateral roots', rootX - width * 0.28, soilTop + height * 0.35, '#A88030', 'right');
        }
    }

    // ── STEP 3 — Root hairs ─────────────────────────────────────────────────
    if (step >= 3) {
        this.ctx.strokeStyle = '#C8A060';
        this.ctx.lineWidth = 1;
        for (let i = 0; i < 12; i++) {
            const hy = soilTop + height * (0.15 + i * 0.06);
            for (const dir of [-1, 1]) {
                this.ctx.beginPath();
                this.ctx.moveTo(rootX + dir * width * 0.04, hy);
                this.ctx.lineTo(rootX + dir * width * (0.04 + 0.07), hy + height * 0.015);
                this.ctx.stroke();
            }
        }
        if (showLabels && step === 3) {
            this.addLabel('Root hairs\n(absorption surface)', rootX + width * 0.14, soilTop + height * 0.22, '#C8A060', 'left');
        }
    }

    // ── STEP 4 — Root cap & meristem zone ───────────────────────────────────
    if (step >= 4) {
        // Root cap
        this.ctx.fillStyle = '#D4B060';
        this.ctx.strokeStyle = '#9A7230';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.ellipse(rootX, soilTop + height * 0.87, width * 0.048, height * 0.04, 0, 0, Math.PI * 2);
        this.ctx.fill(); this.ctx.stroke();

        // Meristematic zone marker
        this.ctx.strokeStyle = '#FF9800';
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([4, 3]);
        this.ctx.strokeRect(rootX - width * 0.05, soilTop + height * 0.70, width * 0.10, height * 0.14);
        this.ctx.setLineDash([]);

        if (showLabels && step === 4) {
            this.addLabel('Root cap',        rootX + width * 0.07, soilTop + height * 0.87, '#D4B060', 'left');
            this.addLabel('Zone of division\n(meristem)', rootX + width * 0.07, soilTop + height * 0.76, '#FF9800', 'left');
        }
    }

    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${step} of 5`, width - 8, height - 4);

    if (showInset) this.drawInset(width * 0.60, 8, width * 0.38, height * 0.28, insetType);

    this.ctx.restore();
}

// ═══════════════════════════════════════════════════════════════════════════
// STEM SYSTEM — STEP-BY-STEP RENDERER
// Steps:
//   1 — Epidermis
//   2 — + Cortex
//   3 — + Vascular bundles
//   4 — + Nodes, buds & leaves
//   5 — + Complete shoot system (delegates to AnatomicalShapes)
// ═══════════════════════════════════════════════════════════════════════════
renderStemSystemDiagram(x, y, width, height, options = {}) {
    const {
        type        = 'complete',
        process     = 'structure',
        drawingStep = 5,
        showLabels  = true,
        showInset   = false,
        insetType   = 'node-detail'
    } = options;

    this.ctx.save();
    this.ctx.translate(x - width / 2, y - height / 2);

    const step = Math.max(1, Math.min(5, drawingStep));

    const stepLabels = [
        'Step 1 – Epidermis',
        'Step 2 – Cortex',
        'Step 3 – Vascular Bundles',
        'Step 4 – Nodes, Buds & Leaves',
        'Step 5 – Complete Shoot System'
    ];
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.05);

    // Delegate at step 5 or specific type
    if (step === 5 || type !== 'complete') {
        AnatomicalShapes.drawStemSystem(
            this.ctx, 0, height * 0.08, width, height * 0.86, type, process
        );
        if (showLabels && step === 5) {
            this.drawLegend(8, height - 54, [
                { color: '#6B8830', label: 'Epidermis'         },
                { color: '#7AB840', label: 'Cortex'            },
                { color: '#B04020', label: 'Xylem'             },
                { color: '#E08050', label: 'Phloem'            },
                { color: '#E8D880', label: 'Pith'              }
            ]);
        }
        if (showInset) this.drawInset(width * 0.60, 8, width * 0.38, height * 0.28, insetType);
        this.ctx.restore();
        return;
    }

    // Incremental cross-section build for steps 1–4
    const cX   = width  * 0.50;
    const cY   = height * 0.52;
    const maxR = width  * 0.28;

    // ── STEP 1 — Epidermis ring ──────────────────────────────────────────────
    if (step >= 1) {
        this.ctx.fillStyle = '#3A6010';
        this.ctx.strokeStyle = '#1A3808';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(cX, cY, maxR, 0, Math.PI * 2);
        this.ctx.fill(); this.ctx.stroke();
        if (showLabels && step === 1) {
            this.addLabel('Epidermis\n(outermost protective layer)', cX, cY - maxR - 14, '#3A6010');
        }
    }

    // ── STEP 2 — Cortex ─────────────────────────────────────────────────────
    if (step >= 2) {
        this.ctx.fillStyle = '#7AB840';
        this.ctx.beginPath();
        this.ctx.arc(cX, cY, maxR * 0.88, 0, Math.PI * 2);
        this.ctx.fill();
        if (showLabels && step === 2) {
            this.addLabel('Cortex\n(parenchyma, photosynthesis, storage)',
                cX + maxR * 0.62, cY, '#4A7A20', 'left');
        }
    }

    // ── STEP 3 — Vascular bundles ────────────────────────────────────────────
    if (step >= 3) {
        // Pith
        this.ctx.fillStyle = '#E8D880';
        this.ctx.beginPath();
        this.ctx.arc(cX, cY, maxR * 0.40, 0, Math.PI * 2);
        this.ctx.fill();

        // 6 vascular bundles arranged in a ring
        for (let i = 0; i < 6; i++) {
            const angle = (i / 6) * Math.PI * 2;
            const bx = cX + Math.cos(angle) * maxR * 0.62;
            const by = cY + Math.sin(angle) * maxR * 0.62;

            // Phloem (outer)
            this.ctx.fillStyle = '#E08050';
            this.ctx.beginPath();
            this.ctx.arc(bx, by, maxR * 0.10, 0, Math.PI * 2);
            this.ctx.fill();

            // Xylem (inner)
            this.ctx.fillStyle = '#B04020';
            this.ctx.beginPath();
            this.ctx.arc(
                bx + Math.cos(angle + Math.PI) * maxR * 0.06,
                by + Math.sin(angle + Math.PI) * maxR * 0.06,
                maxR * 0.07, 0, Math.PI * 2
            );
            this.ctx.fill();
        }

        if (showLabels && step === 3) {
            this.addLabel('Vascular bundle\n(xylem + phloem)',
                cX + maxR * 0.75, cY - maxR * 0.40, '#B04020', 'left');
            this.addLabel('Pith\n(storage)', cX, cY, '#B8A840');
        }
    }

    // ── STEP 4 — Node label + external shoot sketch ──────────────────────────
    if (step >= 4) {
        const sketX = width * 0.75;
        const sketY = height * 0.35;
        const sketH = height * 0.55;

        // Mini shoot sketch
        this.ctx.fillStyle = '#6B8830';
        this.ctx.strokeStyle = '#3A5510';
        this.ctx.lineWidth = 2;
        this.ctx.fillRect(sketX - width * 0.02, sketY, width * 0.04, sketH);
        this.ctx.strokeRect(sketX - width * 0.02, sketY, width * 0.04, sketH);

        [0.15, 0.35, 0.55, 0.75].forEach((ny, i) => {
            // Node band
            this.ctx.fillStyle = '#4A7020';
            this.ctx.fillRect(sketX - width * 0.025, sketY + ny * sketH, width * 0.05, height * 0.022);

            // Axillary bud
            this.ctx.fillStyle = '#C8A050';
            this.ctx.beginPath();
            this.ctx.arc(sketX + width * 0.036, sketY + ny * sketH, width * 0.014, 0, Math.PI * 2);
            this.ctx.fill();

            // Small leaf
            const side = i % 2 === 0 ? -1 : 1;
            this.ctx.fillStyle = '#7AB840';
            this.ctx.strokeStyle = '#3A6810';
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.moveTo(sketX + side * width * 0.02, sketY + ny * sketH + height * 0.012);
            this.ctx.bezierCurveTo(
                sketX + side * width * 0.10, sketY + ny * sketH - height * 0.02,
                sketX + side * width * 0.17, sketY + ny * sketH,
                sketX + side * width * 0.18, sketY + ny * sketH + height * 0.02
            );
            this.ctx.bezierCurveTo(
                sketX + side * width * 0.12, sketY + ny * sketH + height * 0.05,
                sketX + side * width * 0.06, sketY + ny * sketH + height * 0.04,
                sketX + side * width * 0.02, sketY + ny * sketH + height * 0.012
            );
            this.ctx.fill(); this.ctx.stroke();
        });

        if (showLabels && step === 4) {
            this.addLabel('Node', sketX + width * 0.06, sketY + height * 0.36 * 0.15, '#4A7020', 'left');
            this.addLabel('Axillary bud', sketX + width * 0.07, sketY + height * 0.36 * 0.16 + 14, '#C8A050', 'left');
            this.addLabel('Internode', sketX + width * 0.06, sketY + sketH * 0.55, '#6B8830', 'left');
        }
    }

    // Bottom labels
    if (showLabels) {
        this.ctx.font = `bold ${height * 0.04}px Arial`;
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(step <= 4 ? 'Stem Cross-Section' : 'Complete Shoot System', cX * 0.70, height * 0.96);
    }

    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${step} of 5`, width - 8, height - 4);

    if (showInset) this.drawInset(width * 0.60, 8, width * 0.38, height * 0.28, insetType);

    this.ctx.restore();
}

// ═══════════════════════════════════════════════════════════════════════════
// LEAF ARRANGEMENT — STEP-BY-STEP RENDERER
// Steps:
//   1 — Central stem
//   2 — + Nodes
//   3 — + Leaf blades
//   4 — + Leaf venation
//   5 — + All patterns labeled (delegates to AnatomicalShapes)
// ═══════════════════════════════════════════════════════════════════════════
renderLeafArrangementDiagram(x, y, width, height, options = {}) {
    const {
        pattern     = 'complete',
        drawingStep = 5,
        showLabels  = true,
        showInset   = false,
        insetType   = 'golden-angle'
    } = options;

    this.ctx.save();
    this.ctx.translate(x - width / 2, y - height / 2);

    const step = Math.max(1, Math.min(5, drawingStep));

    const stepLabels = [
        'Step 1 – Central Stem',
        'Step 2 – Nodes',
        'Step 3 – Leaf Blades',
        'Step 4 – Leaf Venation',
        'Step 5 – All Arrangement Patterns'
    ];
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.05);

    // Delegate at step 5 or specific pattern
    if (step === 5 || pattern !== 'complete') {
        AnatomicalShapes.drawLeafArrangement(
            this.ctx, 0, height * 0.08, width, height * 0.86, pattern, null
        );
        if (showLabels && step === 5) {
            this.drawLegend(8, height - 42, [
                { color: '#7AB840', label: 'Alternate'   },
                { color: '#5A9830', label: 'Opposite'    },
                { color: '#3A7820', label: 'Whorled'     },
                { color: '#9ACA50', label: 'Spiral'      }
            ]);
        }
        if (showInset) this.drawInset(width * 0.60, 8, width * 0.38, height * 0.26, insetType);
        this.ctx.restore();
        return;
    }

    // Incremental single-stem build for steps 1–4 (using alternate as model)
    const cX  = width  * 0.50;
    const topY = height * 0.10;
    const botY = height * 0.88;
    const nodeYs = [0.18, 0.30, 0.42, 0.56, 0.68, 0.80];

    this.ctx.fillStyle = '#0A1A08';
    this.ctx.fillRect(0, 0, width, height);

    // ── STEP 1 — Stem ────────────────────────────────────────────────────────
    if (step >= 1) {
        this.ctx.fillStyle = '#6B8830';
        this.ctx.strokeStyle = '#3A5510';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.rect(cX - width * 0.025, topY, width * 0.05, botY - topY);
        this.ctx.fill(); this.ctx.stroke();

        if (showLabels && step === 1) {
            this.addLabel('Stem (main axis)', cX + width * 0.06, (topY + botY) / 2, '#6B8830', 'left');
        }
    }

    // ── STEP 2 — Nodes ───────────────────────────────────────────────────────
    if (step >= 2) {
        this.ctx.fillStyle = '#4A7020';
        nodeYs.forEach(ny => {
            this.ctx.fillRect(cX - width * 0.03, ny * height, width * 0.06, height * 0.022);
        });
        if (showLabels && step === 2) {
            this.addLabel('Nodes\n(points of leaf attachment)',
                cX + width * 0.06, nodeYs[2] * height, '#4A7020', 'left');
        }
    }

    // ── STEP 3 — Alternate leaf blades ───────────────────────────────────────
    if (step >= 3) {
        nodeYs.forEach((ny, i) => {
            const side = i % 2 === 0 ? 1 : -1;
            this.ctx.fillStyle = `hsl(${90 + i * 12}, 60%, 40%)`;
            this.ctx.strokeStyle = '#3A6810';
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.moveTo(cX + side * width * 0.025, ny * height + height * 0.012);
            this.ctx.bezierCurveTo(
                cX + side * width * 0.15, ny * height - height * 0.03,
                cX + side * width * 0.28, ny * height,
                cX + side * width * 0.30, ny * height + height * 0.015
            );
            this.ctx.bezierCurveTo(
                cX + side * width * 0.22, ny * height + height * 0.05,
                cX + side * width * 0.08, ny * height + height * 0.04,
                cX + side * width * 0.025, ny * height + height * 0.012
            );
            this.ctx.fill(); this.ctx.stroke();
        });
        if (showLabels && step === 3) {
            this.addLabel('Alternate arrangement\n(each leaf at different height, opposite sides)',
                cX, height * 0.94, '#7AB840');
        }
    }

    // ── STEP 4 — Venation ────────────────────────────────────────────────────
    if (step >= 4) {
        nodeYs.forEach((ny, i) => {
            const side = i % 2 === 0 ? 1 : -1;
            const mx = cX + side * width * 0.025;
            const my = ny * height + height * 0.012;

            // Midrib
            this.ctx.strokeStyle = '#2A5010';
            this.ctx.lineWidth = 1.5;
            this.ctx.beginPath();
            this.ctx.moveTo(mx, my);
            this.ctx.lineTo(mx + side * width * 0.27, my + height * 0.012);
            this.ctx.stroke();

            // Side veins
            this.ctx.strokeStyle = '#4A7020';
            this.ctx.lineWidth = 0.8;
            for (let v = 1; v <= 3; v++) {
                const vx = mx + side * width * (0.05 + v * 0.07);
                const vy = my + height * 0.010;
                this.ctx.beginPath();
                this.ctx.moveTo(vx, vy);
                this.ctx.lineTo(vx + side * width * 0.04, vy - height * 0.02);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(vx, vy);
                this.ctx.lineTo(vx + side * width * 0.04, vy + height * 0.02);
                this.ctx.stroke();
            }
        });
        if (showLabels && step === 4) {
            this.addLabel('Reticulate (net) venation\n(typical dicot pattern)',
                cX, height * 0.94, '#4A7020');
        }
    }

    // Title
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.font = `bold ${height * 0.048}px Arial`;
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Phyllotaxis — Leaf Arrangement', width / 2, height * 0.05);

    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${step} of 5`, width - 8, height - 4);

    if (showInset) this.drawInset(width * 0.60, 8, width * 0.38, height * 0.26, insetType);

    this.ctx.restore();
}



    // ═══════════════════════════════════════════════════════════════════════════
    // CIRCULATORY SYSTEM — STEP-BY-STEP RENDERER
    // Steps:
    //   1 — Lungs only (top)
    //   2 — + Heart (middle)
    //   3 — + Pulmonary circulation vessels (heart ↔ lungs)
    //   4 — + Systemic circulation vessels (heart ↔ body / capillaries)
    //   5 — + Direction arrows & full labels
    // ═══════════════════════════════════════════════════════════════════════════
    renderCirculatorySystemDiagram(x, y, width, height, options = {}) {
        const {
            showLabels      = true,
            showOxygenation = true,
            component       = 'complete',
            drawingStep     = 5,
            showInset       = false,
            insetType       = 'capillary-exchange'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        const step = Math.max(1, Math.min(5, drawingStep));

        // Step label banner
        const stepLabels = [
            'Step 1 — Lungs',
            'Step 2 — Heart',
            'Step 3 — Pulmonary Circulation (Heart ↔ Lungs)',
            'Step 4 — Systemic Circulation (Heart ↔ Body)',
            'Step 5 — Complete with Labels & Arrows'
        ];
        this.ctx.font = 'bold 13px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.05);

        // ── Layout constants (all steps share these) ───────────────────────────
        const heartX  = width  * 0.36;
        const heartY  = height * 0.36;
        const heartW  = width  * 0.28;
        const heartH  = height * 0.22;

        const lungW   = width  * 0.18;
        const lungH   = height * 0.18;
        const lLungX  = width  * 0.08;   // viewer's left lung
        const rLungX  = width  * 0.74;   // viewer's right lung
        const lungY   = height * 0.08;

        const bodyBoxX = width  * 0.35;
        const bodyBoxY = height * 0.72;
        const bodyBoxW = width  * 0.30;
        const bodyBoxH = height * 0.14;

        const oxyColor   = { base: '#E74C3C', light: '#FF6B6B', dark: '#C0392B' };
        const deoxColor  = { base: '#7B5EA7', light: '#A07CC5', dark: '#5A3D8A' };
        const lungColor  = { base: '#FF9999', light: '#FFCCCC', dark: '#CC6666' };
        const capColor   = { base: '#E8A0A0', light: '#F5CCCC', dark: '#C06060' };

        // ── STEP 1 — Lungs ─────────────────────────────────────────────────────
        if (step >= 1) {
            this.ctx.save();
            this.ctx.translate(lLungX, lungY);
            AnatomicalShapes.drawLeftLung(this.ctx, lungColor, lungW, lungH);
            this.ctx.restore();

            this.ctx.save();
            this.ctx.translate(rLungX, lungY);
            AnatomicalShapes.drawRightLung(this.ctx, lungColor, lungW, lungH);
            this.ctx.restore();

            if (showLabels) {
                this.addLabel('Right Lung', lLungX + lungW * 0.5, lungY - 6, '#CC6666');
                this.addLabel('Left Lung',  rLungX + lungW * 0.5, lungY - 6, '#CC6666');
            }
        }

        // ── STEP 2 — Heart ─────────────────────────────────────────────────────
        if (step >= 2) {
            AnatomicalShapes.drawHeart(this.ctx, heartX, heartY, heartW, heartH, 'wholeheart');

            if (showLabels) {
                this.addLabel('Heart', heartX + heartW / 2, heartY + heartH + 14, '#2C3E50');
            }
        }

        // ── STEP 3 — Pulmonary circulation (heart ↔ lungs) ─────────────────────
        if (step >= 3) {
            this.ctx.save();

            // Pulmonary artery trunk + branches (heart → lungs, deoxygenated)
            this.ctx.save();
            this.ctx.translate(heartX + heartW * 0.62, heartY - height * 0.04);
            AnatomicalShapes.drawPulmonaryArtery(this.ctx, deoxColor, width * 0.30, height * 0.16);
            this.ctx.restore();

            // Pulmonary veins (lungs → left atrium, oxygenated)
            this.ctx.save();
            this.ctx.translate(heartX - width * 0.04, heartY + heartH * 0.08);
            AnatomicalShapes.drawPulmonaryVein(this.ctx, oxyColor, width * 0.32, height * 0.14);
            this.ctx.restore();

            if (showLabels) {
                this.addLabel('Pulmonary Artery\n(deoxygenated → lungs)',
                    width * 0.82, heartY + heartH * 0.02, '#5A3D8A', 'left');
                this.addLabel('Pulmonary Veins\n(oxygenated → heart)',
                    width * 0.16, heartY - height * 0.02, '#E74C3C', 'right');
            }

            // Pulmonary loop arrows
            this.ctx.strokeStyle = deoxColor.dark;
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([4, 3]);
            this.ctx.beginPath();
            this.ctx.moveTo(heartX + heartW * 0.72, heartY + heartH * 0.18);
            this.ctx.bezierCurveTo(width * 0.72, heartY, rLungX + lungW * 0.3, lungY + lungH * 0.55,
                                   rLungX + lungW * 0.1, lungY + lungH * 0.6);
            this.ctx.stroke();
            this.ctx.setLineDash([]);

            this.ctx.strokeStyle = oxyColor.dark;
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([4, 3]);
            this.ctx.beginPath();
            this.ctx.moveTo(lLungX + lungW * 0.9, lungY + lungH * 0.6);
            this.ctx.bezierCurveTo(width * 0.28, lungY + lungH * 0.4,
                                   heartX + heartW * 0.2, heartY,
                                   heartX + heartW * 0.25, heartY + heartH * 0.18);
            this.ctx.stroke();
            this.ctx.setLineDash([]);

            this.ctx.restore();
        }

        // ── STEP 4 — Systemic circulation (heart ↔ body) ──────────────────────
        if (step >= 4) {
            this.ctx.save();

            // Aorta (heart → body, oxygenated)
            this.ctx.save();
            this.ctx.translate(heartX - width * 0.02, heartY - height * 0.06);
            AnatomicalShapes.drawAorta(this.ctx, oxyColor, width * 0.24, height * 0.42);
            this.ctx.restore();

            // Vena cava (body → heart, deoxygenated)
            this.ctx.save();
            this.ctx.translate(heartX + heartW * 0.52, heartY - height * 0.10);
            AnatomicalShapes.drawVenaCava(this.ctx, deoxColor, width * 0.16, height * 0.55);
            this.ctx.restore();

            // Capillary bed at bottom (body tissues)
            this.ctx.save();
            this.ctx.translate(bodyBoxX, bodyBoxY);
            AnatomicalShapes.drawCapillaryBed(this.ctx, capColor, bodyBoxW, bodyBoxH);
            this.ctx.restore();

            // Body tissue label box
            this.ctx.fillStyle = 'rgba(236, 240, 241, 0.7)';
            this.ctx.strokeStyle = '#BDC3C7';
            this.ctx.lineWidth = 1.5;
            this.ctx.beginPath();
            this.ctx.roundRect(bodyBoxX - 4, bodyBoxY - 4, bodyBoxW + 8, bodyBoxH + 8, 6);
            this.ctx.fill();
            this.ctx.stroke();

            if (showLabels) {
                this.addLabel('Aorta\n(oxygenated → body)',
                    heartX - width * 0.06, height * 0.62, '#C0392B', 'right');
                this.addLabel('Vena Cava\n(deoxygenated → heart)',
                    heartX + heartW + width * 0.08, height * 0.62, '#5A3D8A', 'left');
                this.addLabel('Body Tissues\n(Capillary Bed)',
                    bodyBoxX + bodyBoxW / 2, bodyBoxY + bodyBoxH + 14, '#2C3E50');
            }

            // Systemic loop arrows (dashed)
            this.ctx.strokeStyle = oxyColor.dark;
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([4, 3]);
            this.ctx.beginPath();
            this.ctx.moveTo(heartX + heartW * 0.35, heartY + heartH * 0.90);
            this.ctx.bezierCurveTo(heartX, height * 0.65,
                                   bodyBoxX + bodyBoxW * 0.2, bodyBoxY - height * 0.02,
                                   bodyBoxX + bodyBoxW * 0.25, bodyBoxY);
            this.ctx.stroke();

            this.ctx.strokeStyle = deoxColor.dark;
            this.ctx.beginPath();
            this.ctx.moveTo(bodyBoxX + bodyBoxW * 0.75, bodyBoxY);
            this.ctx.bezierCurveTo(bodyBoxX + bodyBoxW, height * 0.65,
                                   heartX + heartW * 0.78, heartY + heartH * 0.88,
                                   heartX + heartW * 0.72, heartY + heartH * 0.55);
            this.ctx.stroke();
            this.ctx.setLineDash([]);

            this.ctx.restore();
        }

        // ── STEP 5 — Solid directional arrows + complete labels ────────────────
        if (step >= 5) {
            this.ctx.save();

            const arrowHead = (ax, ay, angle, size, clr) => {
                this.ctx.fillStyle = clr;
                this.ctx.beginPath();
                this.ctx.moveTo(ax, ay);
                this.ctx.lineTo(ax - size * Math.cos(angle - Math.PI / 6),
                                ay - size * Math.sin(angle - Math.PI / 6));
                this.ctx.lineTo(ax - size * Math.cos(angle + Math.PI / 6),
                                ay - size * Math.sin(angle + Math.PI / 6));
                this.ctx.closePath();
                this.ctx.fill();
            };

            // Pulmonary artery arrow (heart → right lung)
            this.ctx.strokeStyle = deoxColor.dark;
            this.ctx.lineWidth = 3;
            this.ctx.setLineDash([]);
            this.ctx.beginPath();
            this.ctx.moveTo(heartX + heartW * 0.72, heartY + heartH * 0.18);
            this.ctx.bezierCurveTo(width * 0.74, heartY,
                                   rLungX + lungW * 0.3, lungY + lungH * 0.55,
                                   rLungX + lungW * 0.1, lungY + lungH * 0.6);
            this.ctx.stroke();
            arrowHead(rLungX + lungW * 0.1, lungY + lungH * 0.6,
                Math.atan2((lungY + lungH * 0.6) - heartY,
                           (rLungX + lungW * 0.1) - (heartX + heartW * 0.72)), 9, deoxColor.dark);

            // Pulmonary vein arrow (left lung → heart)
            this.ctx.strokeStyle = oxyColor.dark;
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            this.ctx.moveTo(lLungX + lungW * 0.9, lungY + lungH * 0.6);
            this.ctx.bezierCurveTo(width * 0.28, lungY + lungH * 0.4,
                                   heartX + heartW * 0.2, heartY,
                                   heartX + heartW * 0.25, heartY + heartH * 0.18);
            this.ctx.stroke();
            arrowHead(heartX + heartW * 0.25, heartY + heartH * 0.18,
                Math.atan2((heartY + heartH * 0.18) - (lungY + lungH * 0.6),
                           (heartX + heartW * 0.25) - (lLungX + lungW * 0.9)), 9, oxyColor.dark);

            // Aorta arrow (heart → body)
            this.ctx.strokeStyle = oxyColor.dark;
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            this.ctx.moveTo(heartX + heartW * 0.35, heartY + heartH * 0.90);
            this.ctx.bezierCurveTo(heartX, height * 0.65,
                                   bodyBoxX + bodyBoxW * 0.2, bodyBoxY - height * 0.02,
                                   bodyBoxX + bodyBoxW * 0.25, bodyBoxY);
            this.ctx.stroke();
            arrowHead(bodyBoxX + bodyBoxW * 0.25, bodyBoxY,
                Math.atan2(bodyBoxY - (heartY + heartH * 0.90),
                           (bodyBoxX + bodyBoxW * 0.25) - (heartX + heartW * 0.35)), 9, oxyColor.dark);

            // Vena cava arrow (body → heart)
            this.ctx.strokeStyle = deoxColor.dark;
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            this.ctx.moveTo(bodyBoxX + bodyBoxW * 0.75, bodyBoxY);
            this.ctx.bezierCurveTo(bodyBoxX + bodyBoxW, height * 0.65,
                                   heartX + heartW * 0.78, heartY + heartH * 0.88,
                                   heartX + heartW * 0.72, heartY + heartH * 0.55);
            this.ctx.stroke();
            arrowHead(heartX + heartW * 0.72, heartY + heartH * 0.55,
                Math.atan2((heartY + heartH * 0.55) - bodyBoxY,
                           (heartX + heartW * 0.72) - (bodyBoxX + bodyBoxW * 0.75)), 9, deoxColor.dark);

            // Full labels
            if (showLabels) {
                this.addLabel('Right Lung',   lLungX + lungW * 0.5, lungY - 8,  '#CC6666');
                this.addLabel('Left Lung',    rLungX + lungW * 0.5, lungY - 8,  '#CC6666');
                this.addLabel('Heart',        heartX + heartW / 2,  heartY + heartH + 16, '#2C3E50');
                this.addLabel('Body Tissues\n(Capillary Bed)',
                    bodyBoxX + bodyBoxW / 2, bodyBoxY + bodyBoxH + 16, '#2C3E50');
                this.addLabel('Pulmonary Artery\n(deoxygenated)',
                    width * 0.84, heartY + heartH * 0.02, '#5A3D8A', 'left');
                this.addLabel('Pulmonary Veins\n(oxygenated)',
                    width * 0.14, heartY - height * 0.04, '#E74C3C', 'right');
                this.addLabel('Aorta\n(oxygenated)',
                    heartX - width * 0.07, height * 0.63, '#C0392B', 'right');
                this.addLabel('Vena Cava\n(deoxygenated)',
                    heartX + heartW + width * 0.10, height * 0.63, '#5A3D8A', 'left');

                // Gas exchange note at lungs
                this.ctx.font = 'italic 10px Arial';
                this.ctx.fillStyle = '#7F8C8D';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('Gas Exchange', lLungX + lungW * 0.5, lungY + lungH + 14);
                this.ctx.fillText('Gas Exchange', rLungX + lungW * 0.5, lungY + lungH + 14);

                // Nutrient exchange note at capillary bed
                this.ctx.fillText('Nutrient & O₂ Exchange', bodyBoxX + bodyBoxW / 2, bodyBoxY - 6);
            }

            // Oxygenation legend
            if (showOxygenation) {
                this.drawLegend(12, height - 46, [
                    { color: '#E74C3C', label: 'Oxygenated Blood'   },
                    { color: '#7B5EA7', label: 'Deoxygenated Blood' }
                ]);
            }

            this.ctx.restore();
        }

        // Step indicator
        this.ctx.font = 'italic 10px Arial';
        this.ctx.fillStyle = '#BDC3C7';
        this.ctx.textAlign = 'right';
        this.ctx.fillText(`Step ${step} of 5`, width - 8, height - 4);

        if (showInset) {
            this.drawInset(width * 0.60, 8, width * 0.38, height * 0.24, insetType);
        }

        this.ctx.restore();
    }


    // ═══════════════════════════════════════════════════════════════════════════
    // RESPIRATORY SYSTEM — STEP-BY-STEP RENDERER
    // Steps:
    //   1 — Nasal cavity + trachea outline
    //   2 — + Bronchi (primary branching)
    //   3 — + Lungs (left 2 lobes, right 3 lobes)
    //   4 — + Bronchioles + alveoli
    //   5 — + Diaphragm + full labels + pleural cavity note
    // ═══════════════════════════════════════════════════════════════════════════
    renderRespiratorySystemDiagram(x, y, width, height, options = {}) {
        const {
            component   = 'complete',
            drawingStep = 5,
            showLabels  = true,
            showInset   = false,
            insetType   = 'gas-exchange'
        } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        const step = Math.max(1, Math.min(5, drawingStep));

        const stepLabels = [
            'Step 1 — Nasal Cavity & Trachea',
            'Step 2 — Primary Bronchi',
            'Step 3 — Lungs (Lobes)',
            'Step 4 — Bronchioles & Alveoli',
            'Step 5 — Diaphragm & Complete Labels'
        ];
        this.ctx.font = 'bold 13px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.05);

        // If a specific component is requested (non-complete), render just that
        if (component !== 'complete') {
            const color = { base: '#FF9999', light: '#FFCCCC', dark: '#CC6666' };
            AnatomicalShapes.drawRespiratorySystem(
                this.ctx, 0, height * 0.08, width, height * 0.86, component
            );
            if (showLabels) {
                const names = {
                    trachea:    'Trachea',
                    bronchi:    'Primary Bronchi',
                    bronchioles:'Bronchioles',
                    leftLung:   'Left Lung',
                    rightLung:  'Right Lung',
                    alveoli:    'Alveoli',
                    diaphragm:  'Diaphragm'
                };
                this.addLabel(names[component] || component, width / 2, height * 0.96, '#CC6666');
            }
            if (showInset) {
                this.drawInset(width * 0.60, height * 0.08, width * 0.38, height * 0.25, insetType);
            }
            this.ctx.restore();
            return;
        }

        // ── Layout constants ───────────────────────────────────────────────────
        const color = { base: '#FF9999', light: '#FFCCCC', dark: '#CC6666' };

        const tracheaX = width  * 0.47;
        const tracheaY = height * 0.08;
        const tracheaW = width  * 0.06;
        const tracheaH = height * 0.16;

        const bifY      = tracheaY + tracheaH;           // carina (bifurcation)
        const lLungX    = width  * 0.06;
        const rLungX    = width  * 0.54;
        const lungY     = height * 0.26;
        const lungW     = width  * 0.40;
        const lungH     = height * 0.52;

        const diaphY    = height * 0.82;

        // ── STEP 1 — Nasal cavity + trachea ───────────────────────────────────
        if (step >= 1) {
            this.ctx.save();

            // Simplified nasal cavity outline at top
            this.ctx.translate(width * 0.32, height * 0.01);
            AnatomicalShapes.drawNasalCavity(this.ctx, color, width * 0.36, height * 0.10);
            this.ctx.restore();

            // Trachea
            this.ctx.save();
            this.ctx.translate(tracheaX, tracheaY);
            AnatomicalShapes.drawTrachea(this.ctx, color, tracheaW, tracheaH);
            this.ctx.restore();

            if (showLabels) {
                this.addLabel('Nasal Cavity', width * 0.50, height * 0.01, '#CC6666');
                this.addLabel('Trachea',      tracheaX + tracheaW + 6, tracheaY + tracheaH * 0.5, '#CC6666', 'left');
            }
        }

        // ── STEP 2 — Primary bronchi ───────────────────────────────────────────
        if (step >= 2) {
            this.ctx.save();

            // Left main bronchus (longer — heart displaces it)
            this.ctx.strokeStyle = color.base;
            this.ctx.lineWidth = 7;
            this.ctx.lineCap = 'round';
            this.ctx.beginPath();
            this.ctx.moveTo(tracheaX + tracheaW / 2, bifY);
            this.ctx.bezierCurveTo(
                tracheaX - tracheaW, bifY + height * 0.04,
                lLungX + lungW * 0.7, lungY,
                lLungX + lungW * 0.7, lungY + height * 0.02
            );
            this.ctx.stroke();

            // Right main bronchus (shorter, more vertical)
            this.ctx.lineWidth = 8;
            this.ctx.beginPath();
            this.ctx.moveTo(tracheaX + tracheaW / 2, bifY);
            this.ctx.bezierCurveTo(
                tracheaX + tracheaW * 2, bifY + height * 0.04,
                rLungX + lungW * 0.3, lungY,
                rLungX + lungW * 0.3, lungY + height * 0.02
            );
            this.ctx.stroke();

            // Outline strokes
            this.ctx.strokeStyle = color.dark;
            this.ctx.lineWidth = 1.5;
            this.ctx.beginPath();
            this.ctx.moveTo(tracheaX, bifY);
            this.ctx.lineTo(lLungX + lungW * 0.68, lungY + height * 0.01);
            this.ctx.moveTo(tracheaX + tracheaW, bifY);
            this.ctx.lineTo(rLungX + lungW * 0.32, lungY + height * 0.01);
            this.ctx.stroke();

            if (showLabels) {
                this.addLabel('Left\nBronchus',  lLungX + lungW * 0.60, bifY + height * 0.06, '#CC6666', 'right');
                this.addLabel('Right\nBronchus', rLungX + lungW * 0.40, bifY + height * 0.06, '#CC6666', 'left');
                this.addLabel('Carina',          tracheaX + tracheaW / 2, bifY + 12, '#888', 'center');
            }
            this.ctx.restore();
        }

        // ── STEP 3 — Lungs ────────────────────────────────────────────────────
        if (step >= 3) {
            this.ctx.save();
            this.ctx.globalAlpha = 0.85;

            this.ctx.translate(lLungX, lungY);
            AnatomicalShapes.drawLeftLung(this.ctx, color, lungW, lungH);
            this.ctx.restore();

            this.ctx.save();
            this.ctx.globalAlpha = 0.85;
            this.ctx.translate(rLungX, lungY);
            AnatomicalShapes.drawRightLung(this.ctx, color, lungW, lungH);
            this.ctx.restore();

            // Lung lobe annotations
            if (showLabels) {
                // Left lung — 2 lobes
                this.addLabel('Left Lung\n(2 lobes)', lLungX + lungW * 0.35, lungY - 6, '#CC6666');
                this.addLabel('Superior\nLobe',       lLungX + lungW * 0.25, lungY + lungH * 0.25, '#E07070', 'right');
                this.addLabel('Inferior\nLobe',       lLungX + lungW * 0.25, lungY + lungH * 0.65, '#C05050', 'right');
                // Right lung — 3 lobes
                this.addLabel('Right Lung\n(3 lobes)', rLungX + lungW * 0.65, lungY - 6, '#CC6666');
                this.addLabel('Superior',  rLungX + lungW * 0.75, lungY + lungH * 0.18, '#E07070', 'left');
                this.addLabel('Middle',    rLungX + lungW * 0.75, lungY + lungH * 0.44, '#CC5555', 'left');
                this.addLabel('Inferior',  rLungX + lungW * 0.75, lungY + lungH * 0.68, '#C04040', 'left');
            }
        }

        // ── STEP 4 — Bronchioles + alveoli ────────────────────────────────────
        if (step >= 4) {
            this.ctx.save();

            // Left lung bronchiole tree
            this.ctx.save();
            this.ctx.translate(lLungX + lungW * 0.20, lungY + lungH * 0.20);
            AnatomicalShapes.drawBronchioles(this.ctx, color, lungW * 0.60, lungH * 0.55);
            this.ctx.restore();

            // Right lung bronchiole tree
            this.ctx.save();
            this.ctx.translate(rLungX + lungW * 0.20, lungY + lungH * 0.20);
            AnatomicalShapes.drawBronchioles(this.ctx, color, lungW * 0.60, lungH * 0.55);
            this.ctx.restore();

            if (showLabels) {
                this.addLabel('Bronchioles', lLungX + lungW * 0.50, lungY + lungH * 0.72, '#CC6666');
                this.addLabel('Alveoli',     lLungX + lungW * 0.50, lungY + lungH * 0.80, '#CC6666');
                this.addLabel('Bronchioles', rLungX + lungW * 0.50, lungY + lungH * 0.72, '#CC6666');
                this.addLabel('Alveoli',     rLungX + lungW * 0.50, lungY + lungH * 0.80, '#CC6666');
            }

            this.ctx.restore();
        }

        // ── STEP 5 — Diaphragm + full labels ──────────────────────────────────
        if (step >= 5) {
            this.ctx.save();

            this.ctx.translate(width * 0.05, diaphY);
            AnatomicalShapes.drawDiaphragm(this.ctx, color, width * 0.90, height * 0.14);
            this.ctx.restore();

            if (showLabels) {
                // Diaphragm label
                this.addLabel('Diaphragm\n(muscle of respiration)',
                    width * 0.50, diaphY + height * 0.12, '#CC6666');

                // Trachea measurement note
                this.ctx.font = 'italic 10px Arial';
                this.ctx.fillStyle = '#7F8C8D';
                this.ctx.textAlign = 'left';
                this.ctx.fillText('~10–12 cm long', tracheaX + tracheaW + 8, tracheaY + tracheaH * 0.75);

                // Pleural cavity note
                this.ctx.fillStyle = 'rgba(200,220,255,0.18)';
                this.ctx.beginPath();
                this.ctx.roundRect(lLungX - 4, lungY - 4, lungW + 8, lungH + 8, 8);
                this.ctx.fill();
                this.ctx.beginPath();
                this.ctx.roundRect(rLungX - 4, lungY - 4, lungW + 8, lungH + 8, 8);
                this.ctx.fill();

                this.ctx.font = 'italic 9px Arial';
                this.ctx.fillStyle = '#9BB0CC';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('Pleural cavity', lLungX + lungW / 2, lungY + lungH + 8);
                this.ctx.fillText('Pleural cavity', rLungX + lungW / 2, lungY + lungH + 8);

                // Inspiration / expiration note
                this.ctx.font = 'italic 10px Arial';
                this.ctx.fillStyle = '#7F8C8D';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('Inspiration: diaphragm contracts ↓, lungs expand',
                    width / 2, diaphY + height * 0.16);
                this.ctx.fillText('Expiration:  diaphragm relaxes ↑, lungs recoil',
                    width / 2, diaphY + height * 0.19);
            }

            // O2 / CO2 exchange reminder
            this.ctx.font = 'bold 10px Arial';
            this.ctx.fillStyle = '#3498DB';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('O₂ in', lLungX + lungW * 0.20, lungY + lungH * 0.10);
            this.ctx.fillText('O₂ in', rLungX + lungW * 0.20, lungY + lungH * 0.10);
            this.ctx.fillStyle = '#E67E22';
            this.ctx.fillText('CO₂ out', lLungX + lungW * 0.80, lungY + lungH * 0.10);
            this.ctx.fillText('CO₂ out', rLungX + lungW * 0.80, lungY + lungH * 0.10);
        }

        // Step indicator
        this.ctx.font = 'italic 10px Arial';
        this.ctx.fillStyle = '#BDC3C7';
        this.ctx.textAlign = 'right';
        this.ctx.fillText(`Step ${step} of 5`, width - 8, height - 4);

        if (showInset) {
            this.drawInset(width * 0.60, height * 0.05, width * 0.38, height * 0.24, insetType);
        }

        this.ctx.restore();
    }

    // ═══════════════════════════════════════════════════════════════════════════
// DIGESTIVE SYSTEM — STEP-BY-STEP RENDERER
// Steps:
//   1 — Mouth & Esophagus
//   2 — + Stomach
//   3 — + Liver, Pancreas & Gallbladder
//   4 — + Small & Large Intestines
//   5 — + Full labels & digestion notes
// ═══════════════════════════════════════════════════════════════════════════
renderDigestiveSystemDiagram(x, y, width, height, options = {}) {
    const {
        component   = 'complete',
        drawingStep = 5,
        showLabels  = true,
        showInset   = false,
        insetType   = 'villi-structure'
    } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    const step = Math.max(1, Math.min(5, drawingStep));
    const color = { base: '#F4A460', light: '#FFD7A8', dark: '#CD853F' };

    const stepLabels = [
        'Step 1 — Mouth & Esophagus',
        'Step 2 — Stomach',
        'Step 3 — Liver, Pancreas & Gallbladder',
        'Step 4 — Small & Large Intestines',
        'Step 5 — Complete Digestive System'
    ];
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.05);

    // If individual component requested
    if (component !== 'complete') {
        AnatomicalShapes.drawDigestiveSystem(this.ctx, 0, height * 0.08, width, height * 0.86, component);
        if (showLabels) {
            const names = {
                mouth: 'Mouth (Oral Cavity)', esophagus: 'Esophagus',
                stomach: 'Stomach', 'small-intestine': 'Small Intestine',
                'large-intestine': 'Large Intestine', liver: 'Liver',
                pancreas: 'Pancreas', gallbladder: 'Gallbladder'
            };
            this.addLabel(names[component] || component, width / 2, height * 0.96, '#CD853F');
        }
        if (showInset) this.drawInset(width * 0.60, height * 0.08, width * 0.38, height * 0.26, insetType);
        this.ctx.restore();
        return;
    }

    // ── Layout constants ──────────────────────────────────────────────────
    const mouthX  = width * 0.46, mouthY = height * 0.07;
    const esophX  = width * 0.46, esophY = height * 0.11, esophH = height * 0.14;
    const stomX   = width * 0.28, stomY  = height * 0.26;
    const stomW   = width * 0.28, stomH  = height * 0.14;
    const liverX  = width * 0.54, liverY = height * 0.24;
    const liverW  = width * 0.30, liverH = height * 0.12;
    const pancX   = width * 0.30, pancY  = height * 0.36;
    const pancW   = width * 0.20, pancH  = height * 0.06;
    const gallX   = width * 0.60, gallY  = height * 0.34;
    const gallW   = width * 0.08, gallH  = height * 0.06;
    const siX     = width * 0.20, siY    = height * 0.44;
    const siW     = width * 0.60, siH    = height * 0.28;
    const liX     = width * 0.14, liY    = height * 0.42;
    const liW     = width * 0.72, liH    = height * 0.40;

    // ── STEP 1 — Mouth & Esophagus ────────────────────────────────────────
    if (step >= 1) {
        // Mouth
        ctx.save();
        this.ctx.save();
        this.ctx.translate(mouthX, mouthY);
        AnatomicalShapes.drawMouth(this.ctx, color, width * 0.08, height * 0.05);
        this.ctx.restore();

        // Esophagus
        this.ctx.save();
        this.ctx.translate(esophX, esophY);
        AnatomicalShapes.drawEsophagus(this.ctx, color, width * 0.08, esophH);
        this.ctx.restore();
        ctx.restore();

        if (showLabels) {
            this.addLabel('Mouth', mouthX + width * 0.10, mouthY + height * 0.02, '#CD853F', 'left');
            this.addLabel('Esophagus', esophX + width * 0.10, esophY + esophH * 0.50, '#CD853F', 'left');
        }
    }

    // ── STEP 2 — Stomach ─────────────────────────────────────────────────
    if (step >= 2) {
        this.ctx.save();
        this.ctx.translate(stomX, stomY);
        AnatomicalShapes.drawStomach(this.ctx, color, stomW, stomH);
        this.ctx.restore();

        if (showLabels) {
            this.addLabel('Stomach', stomX + stomW / 2, stomY + stomH + 12, '#CD853F');
            this.addLabel('Cardiac\nSphincter', esophX - 4, stomY + stomH * 0.15, '#A0522D', 'right');
            this.addLabel('Pyloric\nSphincter',  stomX + stomW + 4, stomY + stomH * 0.55, '#A0522D', 'left');
        }
    }

    // ── STEP 3 — Liver, Pancreas & Gallbladder ────────────────────────────
    if (step >= 3) {
        this.ctx.save();
        this.ctx.translate(liverX, liverY);
        AnatomicalShapes.drawLiverDigestive(this.ctx, color, liverW, liverH);
        this.ctx.restore();

        this.ctx.save();
        this.ctx.translate(pancX, pancY);
        AnatomicalShapes.drawPancreas(this.ctx, color, pancW, pancH);
        this.ctx.restore();

        this.ctx.save();
        this.ctx.translate(gallX, gallY);
        AnatomicalShapes.drawGallbladder(this.ctx, color, gallW, gallH);
        this.ctx.restore();

        // Bile duct (liver/gallbladder → duodenum)
        this.ctx.strokeStyle = '#8B6914';
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([3, 2]);
        this.ctx.beginPath();
        this.ctx.moveTo(gallX + gallW / 2, gallY + gallH);
        this.ctx.bezierCurveTo(gallX + gallW / 2, stomY + stomH * 0.80,
                               stomX + stomW, stomY + stomH * 0.75,
                               stomX + stomW + width * 0.02, stomY + stomH * 0.72);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        if (showLabels) {
            this.addLabel('Liver',       liverX + liverW / 2, liverY - 6,           '#8B4513');
            this.addLabel('Pancreas',    pancX + pancW / 2,   pancY + pancH + 12,   '#CD853F');
            this.addLabel('Gallbladder', gallX + gallW + 4,   gallY + gallH / 2,    '#CD853F', 'left');
            this.addLabel('Bile\nDuct',  gallX - 4,           gallY + gallH * 1.4,  '#8B6914', 'right');
        }
    }

    // ── STEP 4 — Small & Large Intestines ────────────────────────────────
    if (step >= 4) {
        this.ctx.save();
        this.ctx.translate(siX, siY);
        AnatomicalShapes.drawSmallIntestine(this.ctx, color, siW, siH);
        this.ctx.restore();

        this.ctx.save();
        this.ctx.translate(liX, liY);
        AnatomicalShapes.drawLargeIntestine(this.ctx, color, liW, liH);
        this.ctx.restore();

        if (showLabels) {
            this.addLabel('Small Intestine\n(duodenum → ileum)', width / 2, siY + siH / 2, '#CD853F');
            this.addLabel('Large\nIntestine',  liX + 4,        liY + liH * 0.30, '#CD853F', 'left');
            this.addLabel('Appendix',         liX + liW * 0.20, liY + liH * 0.88, '#A0522D');
            this.addLabel('Rectum',           width / 2,       liY + liH + 8,   '#A0522D');
        }
    }

    // ── STEP 5 — Full labels & notes ──────────────────────────────────────
    if (step >= 5) {
        this.ctx.save();

        // Digestion process annotations
        this.ctx.font = 'italic 10px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'left';
        this.ctx.fillText('Mechanical + chemical digestion', mouthX + width * 0.08, mouthY + height * 0.04);
        this.ctx.fillText('HCl + pepsin → protein digestion', stomX + stomW + 4, stomY + stomH * 0.35);
        this.ctx.fillText('Bile emulsifies fats', gallX + gallW + 4, gallY - 4);
        this.ctx.fillText('90% absorption', siX + siW * 0.55, siY + siH * 0.80);
        this.ctx.fillText('Water reabsorption', liX + liW * 0.55, liY + liH * 0.18);

        // Direction arrows along tract
        const tract = [
            [mouthX + width * 0.04, mouthY + height * 0.05, mouthX + width * 0.04, esophY + esophH * 0.5],
            [esophX + width * 0.04, esophY + esophH * 0.85, stomX + stomW * 0.55, stomY + height * 0.01],
            [stomX + stomW * 0.80, stomY + stomH * 0.65, siX + siW * 0.30, siY + height * 0.01]
        ];
        tract.forEach(([x1, y1, x2, y2]) => {
            this.drawArrow(x1, y1, x2, y2, '#CD853F', '', 6);
        });

        // Legend
        this.drawLegend(width * 0.02, height * 0.88, [
            { color: '#F4A460', label: 'GI Tract'            },
            { color: '#8B4513', label: 'Accessory Organs'    },
            { color: '#8B6914', label: 'Bile / Duct pathway' }
        ]);

        this.ctx.restore();
    }

    // Step indicator
    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${step} of 5`, width - 8, height - 4);

    if (showInset) this.drawInset(width * 0.60, height * 0.04, width * 0.38, height * 0.26, insetType);

    this.ctx.restore();
}

// ═══════════════════════════════════════════════════════════════════════════
// NERVOUS SYSTEM — STEP-BY-STEP RENDERER
// Steps:
//   1 — Brain
//   2 — + Spinal cord
//   3 — + Cranial nerves
//   4 — + Spinal nerves & peripheral branches
//   5 — + Autonomic divisions + full labels
// ═══════════════════════════════════════════════════════════════════════════
renderNervousSystemDiagram(x, y, width, height, options = {}) {
    const {
        component   = 'complete',
        division    = 'both',
        drawingStep = 5,
        showLabels  = true,
        showInset   = false,
        insetType   = 'action-potential'
    } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    const step = Math.max(1, Math.min(5, drawingStep));
    const color = { base: '#F0E68C', light: '#FFFACD', dark: '#BDB76B' };

    const stepLabels = [
        'Step 1 — Brain',
        'Step 2 — Spinal Cord',
        'Step 3 — Cranial Nerves',
        'Step 4 — Spinal Nerves & Peripheral Branches',
        'Step 5 — Complete Nervous System'
    ];
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.05);

    if (component !== 'complete') {
        AnatomicalShapes.drawNervousSystem(this.ctx, 0, height * 0.08, width, height * 0.86, component, division);
        if (showLabels) {
            const names = {
                brain: 'Brain', 'spinal-cord': 'Spinal Cord',
                'cranial-nerves': 'Cranial Nerves', 'spinal-nerves': 'Spinal Nerves',
                autonomic: 'Autonomic Nervous System'
            };
            this.addLabel(names[component] || component, width / 2, height * 0.96, '#BDB76B');
        }
        if (showInset) this.drawInset(width * 0.60, height * 0.08, width * 0.38, height * 0.26, insetType);
        this.ctx.restore();
        return;
    }

    // ── Layout constants ──────────────────────────────────────────────────
    const brainX = width * 0.36, brainY = height * 0.07;
    const brainW = width * 0.28, brainH = height * 0.16;
    const cordX  = width * 0.47, cordY  = brainY + brainH;
    const cordW  = width * 0.06, cordH  = height * 0.50;

    // ── STEP 1 — Brain ────────────────────────────────────────────────────
    if (step >= 1) {
        this.ctx.save();
        this.ctx.translate(brainX, brainY);
        AnatomicalShapes.drawBrain(this.ctx, color, brainW, brainH);
        this.ctx.restore();

        if (showLabels) {
            this.addLabel('Brain', brainX + brainW / 2, brainY - 6, '#BDB76B');
            this.addLabel('Cerebrum',   brainX + brainW * 0.50, brainY + brainH * 0.28, '#A09A40');
            this.addLabel('Cerebellum', brainX + brainW * 0.70, brainY + brainH * 0.82, '#A09A40', 'left');
            this.addLabel('Brain stem', brainX + brainW * 0.50, brainY + brainH * 0.90, '#A09A40');
        }
    }

    // ── STEP 2 — Spinal cord ──────────────────────────────────────────────
    if (step >= 2) {
        this.ctx.save();
        this.ctx.translate(cordX, cordY);
        AnatomicalShapes.drawSpinalCord(this.ctx, color, cordW, cordH);
        this.ctx.restore();

        // Vertebral column outline (dashed)
        this.ctx.strokeStyle = '#D2B48C';
        this.ctx.lineWidth = 1.5;
        this.ctx.setLineDash([3, 3]);
        this.ctx.beginPath();
        this.ctx.roundRect(cordX - width * 0.02, cordY, cordW + width * 0.04, cordH, 4);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        if (showLabels) {
            this.addLabel('Spinal\nCord', cordX + cordW + 6, cordY + cordH * 0.30, '#BDB76B', 'left');
            this.addLabel('Cervical\n(C1–C7)',  cordX + cordW + 6, cordY + cordH * 0.10, '#8B8A40', 'left');
            this.addLabel('Thoracic\n(T1–T12)', cordX + cordW + 6, cordY + cordH * 0.35, '#8B8A40', 'left');
            this.addLabel('Lumbar\n(L1–L5)',    cordX + cordW + 6, cordY + cordH * 0.60, '#8B8A40', 'left');
            this.addLabel('Sacral\n(S1–S5)',    cordX + cordW + 6, cordY + cordH * 0.78, '#8B8A40', 'left');
        }
    }

    // ── STEP 3 — Cranial nerves ───────────────────────────────────────────
    if (step >= 3) {
        this.ctx.save();
        this.ctx.translate(brainX, brainY);
        AnatomicalShapes.drawCranialNerves(this.ctx, color, brainW, brainH);
        this.ctx.restore();

        if (showLabels) {
            this.addLabel('Cranial\nNerves (I–XII)', brainX - 6, brainY + brainH * 0.55, '#BDB76B', 'right');
        }
    }

    // ── STEP 4 — Spinal nerves & branches ────────────────────────────────
    if (step >= 4) {
        this.ctx.save();
        this.ctx.translate(0, cordY);
        AnatomicalShapes.drawSpinalNerves(this.ctx, color, width, cordH);
        this.ctx.restore();

        if (showLabels) {
            this.addLabel('Spinal Nerves\n(31 pairs)', cordX - 8, cordY + cordH * 0.22, '#BDB76B', 'right');
            // Cauda equina
            this.addLabel('Cauda\nEquina', cordX + cordW + 6, cordY + cordH * 0.88, '#A09A40', 'left');
        }
    }

    // ── STEP 5 — Autonomic divisions + full labels ────────────────────────
    if (step >= 5) {
        this.ctx.save();

        // Sympathetic chain (left side, dashed orange)
        this.ctx.strokeStyle = '#E67E22';
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([4, 2]);
        this.ctx.beginPath();
        this.ctx.moveTo(cordX - width * 0.08, cordY + cordH * 0.08);
        this.ctx.lineTo(cordX - width * 0.08, cordY + cordH * 0.85);
        this.ctx.stroke();

        // Sympathetic ganglia nodes
        for (let i = 0; i < 10; i++) {
            const gy = cordY + cordH * (0.10 + i * 0.08);
            this.ctx.fillStyle = '#E67E22';
            this.ctx.beginPath();
            this.ctx.arc(cordX - width * 0.08, gy, 4, 0, Math.PI * 2);
            this.ctx.fill();
        }
        this.ctx.setLineDash([]);

        // Parasympathetic (right side dashed blue)
        this.ctx.strokeStyle = '#2980B9';
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([4, 2]);
        this.ctx.beginPath();
        this.ctx.moveTo(cordX + cordW + width * 0.08, cordY + cordH * 0.08);
        this.ctx.lineTo(cordX + cordW + width * 0.08, cordY + cordH * 0.85);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        if (showLabels) {
            this.addLabel('Sympathetic\nChain',    cordX - width * 0.10, cordY + cordH * 0.45, '#E67E22', 'right');
            this.addLabel('Parasympathetic\nFibres', cordX + cordW + width * 0.06, cordY + cordH * 0.45, '#2980B9', 'left');
        }

        // Legend
        this.drawLegend(width * 0.02, height * 0.88, [
            { color: '#F0E68C', label: 'CNS (brain + cord)' },
            { color: '#E67E22', label: 'Sympathetic'        },
            { color: '#2980B9', label: 'Parasympathetic'    }
        ]);

        this.ctx.restore();
    }

    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${step} of 5`, width - 8, height - 4);

    if (showInset) this.drawInset(width * 0.60, height * 0.04, width * 0.38, height * 0.26, insetType);

    this.ctx.restore();
}


// ═══════════════════════════════════════════════════════════════════════════
// NEURON STRUCTURE — STEP-BY-STEP RENDERER
// Steps:
//   1 — Cell body (soma) only
//   2 — + Dendrites
//   3 — + Axon & myelin sheath
//   4 — + Axon terminals & synapse
//   5 — + Labels, signal direction arrow, action potential
// ═══════════════════════════════════════════════════════════════════════════
renderNeuronStructureDiagram(x, y, width, height, options = {}) {
    const {
        component   = 'complete',
        state       = 'resting',
        drawingStep = 5,
        showLabels  = true,
        showInset   = false,
        insetType   = 'action-potential'
    } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    const step = Math.max(1, Math.min(5, drawingStep));
    const color = { base: '#F0E68C', light: '#FFFACD', dark: '#BDB76B' };

    const stepLabels = [
        'Step 1 — Cell Body (Soma)',
        'Step 2 — Dendrites (Input)',
        'Step 3 — Axon & Myelin Sheath',
        'Step 4 — Axon Terminals & Synapse',
        'Step 5 — Complete Neuron with Signal Direction'
    ];
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.08);

    if (component !== 'complete') {
        AnatomicalShapes.drawNeuronStructure(this.ctx, 0, height * 0.10, width, height * 0.84, component, state);
        if (showLabels) {
            const names = {
                dendrites: 'Dendrites', soma: 'Soma (Cell Body)',
                axon: 'Axon', myelin: 'Myelin Sheath',
                terminals: 'Axon Terminals', 'nodes-of-ranvier': 'Nodes of Ranvier'
            };
            this.addLabel(names[component] || component, width / 2, height * 0.96, '#BDB76B');
        }
        if (showInset) this.drawInset(width * 0.60, height * 0.08, width * 0.38, height * 0.26, insetType);
        this.ctx.restore();
        return;
    }

    // ── Layout constants (horizontal neuron) ─────────────────────────────
    const somaX = width * 0.18, somaY = height * 0.50, somaR = height * 0.14;
    const axonStartX = somaX + somaR + width * 0.01;
    const axonEndX   = width * 0.80;
    const axonY      = somaY;
    const segW  = (axonEndX - axonStartX) / 7;  // 6 myelin + 5 nodes + hillock

    // ── STEP 1 — Soma ─────────────────────────────────────────────────────
    if (step >= 1) {
        this.ctx.save();
        this.ctx.translate(somaX - somaR, somaY - somaR);
        AnatomicalShapes.drawSoma(this.ctx, color, somaR * 2, somaR * 2);
        this.ctx.restore();

        if (showLabels) {
            this.addLabel('Soma\n(Cell Body)', somaX, somaY + somaR + 16, '#BDB76B');
            this.addLabel('Nucleus',    somaX,        somaY, '#8B7355');
            this.addLabel('Nucleolus',  somaX - somaR * 0.6, somaY, '#654321');
        }
    }

    // ── STEP 2 — Dendrites ────────────────────────────────────────────────
    if (step >= 2) {
        this.ctx.save();
        this.ctx.translate(somaX - somaR - width * 0.18, somaY - height * 0.25);
        AnatomicalShapes.drawDendrites(this.ctx, color, width * 0.20, height * 0.50);
        this.ctx.restore();

        if (showLabels) {
            this.addLabel('Dendrites\n(receive signals)', somaX - somaR - width * 0.10, somaY - somaR - 16, '#BDB76B', 'center');
            this.addLabel('Dendritic\nSpines', somaX - somaR - width * 0.14, somaY - somaR + 20, '#A09A40', 'right');
        }
    }

    // ── STEP 3 — Axon & Myelin sheath ────────────────────────────────────
    if (step >= 3) {
        // Axon hillock
        this.ctx.fillStyle = color.dark;
        this.ctx.beginPath();
        this.ctx.moveTo(somaX + somaR * 0.8, axonY);
        this.ctx.lineTo(axonStartX + segW * 0.3, axonY - height * 0.03);
        this.ctx.lineTo(axonStartX + segW * 0.3, axonY + height * 0.03);
        this.ctx.closePath();
        this.ctx.fill();

        // Axon + myelin segments
        this.ctx.save();
        this.ctx.translate(axonStartX + segW * 0.3, axonY - height * 0.06);
        AnatomicalShapes.drawAxon(this.ctx, color, axonEndX - axonStartX - segW * 0.3, height * 0.12);
        this.ctx.restore();

        // Myelin sheath overlay
        this.ctx.save();
        this.ctx.translate(axonStartX + segW * 0.3, axonY - height * 0.10);
        AnatomicalShapes.drawMyelinSheath(this.ctx, color, axonEndX - axonStartX - segW * 0.3, height * 0.20);
        this.ctx.restore();

        // Nodes of Ranvier labels
        this.ctx.save();
        this.ctx.translate(axonStartX + segW * 0.3, axonY - height * 0.10);
        AnatomicalShapes.drawNodesOfRanvier(this.ctx, color, axonEndX - axonStartX - segW * 0.3, height * 0.20);
        this.ctx.restore();

        if (showLabels) {
            this.addLabel('Axon Hillock',  axonStartX + segW * 0.15, axonY + somaR + 12, '#BDB76B');
            this.addLabel('Myelin Sheath\n(Schwann cells)', (axonStartX + axonEndX) / 2, axonY - somaR - 16, '#BDB76B');
            this.addLabel('Node of\nRanvier', axonStartX + segW * 2, axonY + somaR + 12, '#A09A40');
        }
    }

    // ── STEP 4 — Axon terminals ───────────────────────────────────────────
    if (step >= 4) {
        this.ctx.save();
        this.ctx.translate(axonEndX - height * 0.10, axonY - height * 0.20);
        AnatomicalShapes.drawAxonTerminals(this.ctx, color, height * 0.22, height * 0.40);
        this.ctx.restore();

        // Post-synaptic cell (simple ellipse)
        this.ctx.fillStyle = 'rgba(200, 230, 255, 0.40)';
        this.ctx.strokeStyle = '#3498DB';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.ellipse(width * 0.95, axonY, width * 0.04, height * 0.22, 0, 0, Math.PI * 2);
        this.ctx.fill(); this.ctx.stroke();

        if (showLabels) {
            this.addLabel('Axon\nTerminals',       axonEndX + 4,    axonY - somaR - 16, '#BDB76B', 'left');
            this.addLabel('Synaptic\nBoutons',     axonEndX + 4,    axonY + somaR + 12, '#A09A40', 'left');
            this.addLabel('Synaptic\nVesicles',    axonEndX - 12,   axonY - 4,          '#FF69B4', 'right');
            this.addLabel('Post-synaptic\nCell',   width * 0.95,    axonY + height * 0.26, '#3498DB');
        }
    }

    // ── STEP 5 — Labels + signal direction ───────────────────────────────
    if (step >= 5) {
        this.ctx.save();

        // Signal direction arrow (runs full axon length)
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([6, 3]);
        this.ctx.beginPath();
        this.ctx.moveTo(somaX, axonY - somaR - height * 0.18);
        this.ctx.lineTo(axonEndX, axonY - somaR - height * 0.18);
        this.ctx.stroke();
        this.ctx.setLineDash([]);
        this.drawArrow(somaX + (axonEndX - somaX) * 0.70, axonY - somaR - height * 0.18,
                       axonEndX, axonY - somaR - height * 0.18, '#E74C3C', '', 8);
        this.addLabel('Direction of impulse →', (somaX + axonEndX) / 2,
                       axonY - somaR - height * 0.20, '#E74C3C');

        // Action-potential highlight if state matches
        if (state === 'action-potential') {
            const apX = axonStartX + (axonEndX - axonStartX) * 0.50;
            this.ctx.strokeStyle = '#FFD700';
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            this.ctx.arc(apX, axonY, height * 0.08, 0, Math.PI * 2);
            this.ctx.stroke();
            this.addLabel('Action\nPotential', apX, axonY + height * 0.12, '#DAA520');
        }

        // Legend
        this.drawLegend(width * 0.02, height * 0.86, [
            { color: '#F0E68C', label: 'Neuron structure'    },
            { color: '#FFFFFF', label: 'Myelin (insulation)' },
            { color: '#FF69B4', label: 'Synaptic vesicles'   },
            { color: '#E74C3C', label: 'Signal direction'    }
        ]);

        this.ctx.restore();
    }

    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${step} of 5`, width - 8, height - 4);

    if (showInset) this.drawInset(width * 0.60, height * 0.04, width * 0.38, height * 0.26, insetType);

    this.ctx.restore();
}


// ═══════════════════════════════════════════════════════════════════════════
// SKELETAL SYSTEM — STEP-BY-STEP RENDERER
// Steps:
//   1 — Axial skeleton (skull, spine, ribcage)
//   2 — + Pectoral girdle & upper limbs
//   3 — + Pelvic girdle & lower limbs
//   4 — + Hands & feet
//   5 — + Full labels
// ═══════════════════════════════════════════════════════════════════════════
renderSkeletalSystemDiagram(x, y, width, height, options = {}) {
    const {
        region      = 'complete',
        view        = 'anterior',
        drawingStep = 5,
        showLabels  = true,
        showInset   = false,
        insetType   = 'bone-structure'
    } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    const step = Math.max(1, Math.min(5, drawingStep));
    const color = { base: '#F5F5DC', light: '#FFFAF0', dark: '#D2B48C' };

    const stepLabels = [
        'Step 1 — Axial Skeleton (Skull, Spine, Ribcage)',
        'Step 2 — Pectoral Girdle & Upper Limbs',
        'Step 3 — Pelvic Girdle & Lower Limbs',
        'Step 4 — Hands & Feet',
        'Step 5 — Complete Skeleton with Labels'
    ];
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.04);

    if (region !== 'complete') {
        AnatomicalShapes.drawSkeletalSystem(this.ctx, 0, height * 0.07, width, height * 0.88, region, view);
        if (showLabels) {
            const names = {
                axial: 'Axial Skeleton', appendicular: 'Appendicular Skeleton',
                skull: 'Skull', ribcage: 'Ribcage', spine: 'Vertebral Column',
                pelvis: 'Pelvis', 'upper-limb': 'Upper Limb', 'lower-limb': 'Lower Limb'
            };
            this.addLabel(names[region] || region, width / 2, height * 0.97, '#D2B48C');
        }
        if (showInset) this.drawInset(width * 0.60, height * 0.07, width * 0.38, height * 0.26, insetType);
        this.ctx.restore();
        return;
    }

    // ── Layout constants ──────────────────────────────────────────────────
    const midX  = width * 0.50;
    const skullY = height * 0.06, skullW = width * 0.18, skullH = height * 0.10;
    const spineY = skullY + skullH + height * 0.01, spineH = height * 0.46;
    const ribY   = spineY + height * 0.01, ribW = width * 0.32, ribH = height * 0.22;
    const clavY  = spineY, clavSpan = width * 0.18;
    const humY   = clavY + height * 0.02, humH = height * 0.18;
    const pelvisY = spineY + spineH * 0.72, pelvisW = width * 0.28, pelvisH = height * 0.12;
    const femurY  = pelvisY + pelvisH * 0.90, femurH = height * 0.20;
    const tibiaY  = femurY + femurH, tibiaH = height * 0.16;
    const handY   = humY + humH + height * 0.03, handH = height * 0.08;
    const footY   = tibiaY + tibiaH, footH = height * 0.04;

    // ── STEP 1 — Axial (skull + spine + ribcage) ──────────────────────────
    if (step >= 1) {
        // Skull
        this.ctx.save();
        this.ctx.translate(midX - skullW / 2, skullY);
        AnatomicalShapes.drawSkullSimple(this.ctx, color, skullW, skullH);
        this.ctx.restore();

        // Spine
        this.ctx.save();
        this.ctx.translate(midX - width * 0.03, spineY);
        AnatomicalShapes.drawSpine(this.ctx, color, width * 0.06, spineH);
        this.ctx.restore();

        // Ribcage (centred on spine)
        this.ctx.save();
        this.ctx.translate(midX - ribW / 2, ribY);
        AnatomicalShapes.drawRibcage(this.ctx, color, ribW, ribH, view);
        this.ctx.restore();

        if (showLabels) {
            this.addLabel('Skull',   midX, skullY - 4, '#D2B48C');
            this.addLabel('Cervical\n(7)',  midX + width * 0.08, spineY + spineH * 0.06, '#D2B48C', 'left');
            this.addLabel('Thoracic\n(12)', midX + width * 0.08, spineY + spineH * 0.25, '#D2B48C', 'left');
            this.addLabel('Lumbar\n(5)',    midX + width * 0.08, spineY + spineH * 0.55, '#D2B48C', 'left');
            this.addLabel('Sacrum',         midX + width * 0.08, spineY + spineH * 0.74, '#D2B48C', 'left');
            this.addLabel('Ribcage\n(12 pairs)', midX - ribW / 2 - 4, ribY + ribH * 0.50, '#D2B48C', 'right');
            this.addLabel('Sternum', midX, ribY + ribH * 0.35, '#D2B48C');
        }
    }

    // ── STEP 2 — Pectoral girdle & upper limbs ────────────────────────────
    if (step >= 2) {
        // Clavicles
        this.ctx.strokeStyle = color.base;
        this.ctx.lineWidth = 4;
        [[midX, clavY, midX - clavSpan, clavY + height * 0.02],
         [midX, clavY, midX + clavSpan, clavY + height * 0.02]].forEach(([x1, y1, x2, y2]) => {
            this.ctx.beginPath(); this.ctx.moveTo(x1, y1); this.ctx.lineTo(x2, y2); this.ctx.stroke();
        });

        // Scapulae
        [[midX - clavSpan - width * 0.02, clavY + height * 0.01],
         [midX + clavSpan - width * 0.04, clavY + height * 0.01]].forEach(([sx, sy]) => {
            this.ctx.fillStyle = color.light;
            this.ctx.strokeStyle = color.dark;
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.ellipse(sx + width * 0.04, sy + height * 0.04, width * 0.05, height * 0.06, -0.3, 0, Math.PI * 2);
            this.ctx.fill(); this.ctx.stroke();
        });

        // Humerus (upper arm)
        this.ctx.save();
        this.ctx.translate(midX - clavSpan - width * 0.04, humY);
        AnatomicalShapes.drawUpperLimb(this.ctx, color, width * 0.08, humH);
        this.ctx.restore();

        this.ctx.save();
        this.ctx.translate(midX + clavSpan - width * 0.04, humY);
        AnatomicalShapes.drawUpperLimb(this.ctx, color, width * 0.08, humH);
        this.ctx.restore();

        if (showLabels) {
            this.addLabel('Clavicle',  midX - clavSpan / 2, clavY - 4, '#D2B48C');
            this.addLabel('Scapula',   midX - clavSpan - 4, clavY + height * 0.08, '#D2B48C', 'right');
            this.addLabel('Humerus',   midX - clavSpan - width * 0.10, humY + humH * 0.40, '#D2B48C', 'right');
            this.addLabel('Radius /\nUlna', midX - clavSpan - width * 0.10, humY + humH * 0.80, '#D2B48C', 'right');
        }
    }

    // ── STEP 3 — Pelvic girdle & lower limbs ─────────────────────────────
    if (step >= 3) {
        this.ctx.save();
        this.ctx.translate(midX - pelvisW / 2, pelvisY);
        AnatomicalShapes.drawPelvis(this.ctx, color, pelvisW, pelvisH, view);
        this.ctx.restore();

        // Femur
        [midX - pelvisW * 0.30, midX + pelvisW * 0.10].forEach((fx) => {
            this.ctx.save();
            this.ctx.translate(fx, femurY);
            AnatomicalShapes.drawLowerLimb(this.ctx, color, width * 0.08, femurH);
            this.ctx.restore();
        });

        // Tibia/fibula
        [midX - pelvisW * 0.30, midX + pelvisW * 0.10].forEach((tx) => {
            this.ctx.strokeStyle = color.base;
            this.ctx.lineWidth = 5;
            this.ctx.beginPath();
            this.ctx.moveTo(tx + width * 0.04, tibiaY);
            this.ctx.lineTo(tx + width * 0.04, tibiaY + tibiaH);
            this.ctx.stroke();
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            this.ctx.moveTo(tx + width * 0.06, tibiaY);
            this.ctx.lineTo(tx + width * 0.065, tibiaY + tibiaH);
            this.ctx.stroke();
        });

        // Patellae
        [midX - pelvisW * 0.26, midX + pelvisW * 0.14].forEach((px) => {
            this.ctx.fillStyle = color.base;
            this.ctx.beginPath();
            this.ctx.ellipse(px, tibiaY - height * 0.01, width * 0.015, height * 0.018, 0, 0, Math.PI * 2);
            this.ctx.fill();
        });

        if (showLabels) {
            this.addLabel('Pelvis',   midX, pelvisY - 4, '#D2B48C');
            this.addLabel('Femur',    midX - pelvisW * 0.38, femurY + femurH * 0.40, '#D2B48C', 'right');
            this.addLabel('Patella',  midX - pelvisW * 0.20, tibiaY - height * 0.01, '#D2B48C', 'right');
            this.addLabel('Tibia /\nFibula', midX - pelvisW * 0.38, tibiaY + tibiaH * 0.40, '#D2B48C', 'right');
        }
    }

    // ── STEP 4 — Hands & feet ─────────────────────────────────────────────
    if (step >= 4) {
        const hands = [midX - clavSpan - width * 0.06, midX + clavSpan - width * 0.06];
        hands.forEach((hx) => {
            this.ctx.fillStyle = color.light;
            this.ctx.strokeStyle = color.dark;
            this.ctx.lineWidth = 1.5;
            this.ctx.fillRect(hx, handY, width * 0.06, handH * 0.50);
            for (let f = 0; f < 4; f++) {
                this.ctx.strokeRect(hx + f * width * 0.014, handY + handH * 0.50, width * 0.012, handH * 0.50);
            }
        });

        const feet = [midX - pelvisW * 0.28, midX + pelvisW * 0.12];
        feet.forEach((fx) => {
            this.ctx.fillStyle = color.light;
            this.ctx.strokeStyle = color.dark;
            this.ctx.lineWidth = 1.5;
            this.ctx.fillRect(fx, footY, width * 0.07, footH * 0.60);
            for (let t = 0; t < 5; t++) {
                this.ctx.strokeRect(fx + t * width * 0.013, footY + footH * 0.60, width * 0.011, footH * 0.40);
            }
        });

        if (showLabels) {
            this.addLabel('Carpals /\nMetacarpals', midX - clavSpan - width * 0.10, handY + handH * 0.40, '#D2B48C', 'right');
            this.addLabel('Phalanges',              midX - clavSpan - width * 0.10, handY + handH * 0.80, '#D2B48C', 'right');
            this.addLabel('Tarsals /\nMetatarsals', midX - pelvisW * 0.40, footY + footH * 0.40, '#D2B48C', 'right');
        }
    }

    // ── STEP 5 — Full labels ──────────────────────────────────────────────
    if (step >= 5) {
        this.ctx.save();

        // Bone count summary
        this.ctx.font = 'italic 10px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'right';
        this.ctx.fillText('206 bones in adult human skeleton', width - 6, height * 0.97);

        // Axial / Appendicular division brackets
        this.ctx.strokeStyle = '#BDC3C7';
        this.ctx.lineWidth = 1;
        this.ctx.setLineDash([3, 3]);
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.08, skullY);
        this.ctx.lineTo(width * 0.04, skullY);
        this.ctx.lineTo(width * 0.04, pelvisY + pelvisH);
        this.ctx.lineTo(width * 0.08, pelvisY + pelvisH);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        this.ctx.font = 'bold 10px Arial';
        this.ctx.fillStyle = '#95A5A6';
        this.ctx.textAlign = 'center';
        this.ctx.save();
        this.ctx.translate(width * 0.02, (skullY + pelvisY + pelvisH) / 2);
        this.ctx.rotate(-Math.PI / 2);
        this.ctx.fillText('Axial (80 bones)', 0, 0);
        this.ctx.restore();

        this.ctx.save();
        this.ctx.translate(width * 0.02, (pelvisY + height) / 2);
        this.ctx.rotate(-Math.PI / 2);
        this.ctx.fillText('Appendicular (126 bones)', 0, 0);
        this.ctx.restore();

        this.ctx.restore();
    }

    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${step} of 5`, width - 8, height - 4);

    if (showInset) this.drawInset(width * 0.62, height * 0.04, width * 0.36, height * 0.26, insetType);

    this.ctx.restore();
}

// ═══════════════════════════════════════════════════════════════════════════
// URINARY SYSTEM — STEP-BY-STEP RENDERER
// Steps:
//   1 — Kidneys (+ adrenal glands)
//   2 — + Ureters
//   3 — + Urinary bladder
//   4 — + Urethra
//   5 — + Full labels, nephron callout, urine-flow arrows
// ═══════════════════════════════════════════════════════════════════════════
renderUrinarySystemDiagram(x, y, width, height, options = {}) {
    const {
        component   = 'complete',
        drawingStep = 5,
        showLabels  = true,
        showInset   = false,
        insetType   = 'nephron-detail'
    } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    const step = Math.max(1, Math.min(5, drawingStep));
    const color = { base: '#FFD700', light: '#FFF8DC', dark: '#B8860B' };

    const stepLabels = [
        'Step 1 — Kidneys',
        'Step 2 — Ureters',
        'Step 3 — Urinary Bladder',
        'Step 4 — Urethra',
        'Step 5 — Complete Urinary System'
    ];
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.05);

    if (component !== 'complete') {
        AnatomicalShapes.drawUrinarySystem(this.ctx, 0, height * 0.08, width, height * 0.86, component);
        if (showLabels) {
            const names = {
                kidney: 'Kidney', nephron: 'Nephron',
                ureter: 'Ureter', bladder: 'Urinary Bladder',
                urethra: 'Urethra', glomerulus: 'Glomerulus'
            };
            this.addLabel(names[component] || component, width / 2, height * 0.96, '#B8860B');
        }
        if (showInset) this.drawInset(width * 0.60, height * 0.08, width * 0.38, height * 0.26, insetType);
        this.ctx.restore();
        return;
    }

    // Delegate complete drawing to AnatomicalShapes with the current step
    AnatomicalShapes.drawCompleteUrinary(this.ctx, color, width, height, step);

    // Global labels that complement the shape-level ones
    if (showLabels && step >= 5) {
        this.ctx.font = 'italic 10px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Kidneys filter ~180 L of plasma per day', width / 2, height * 0.97);
    }

    // Oxygenation-style legend
    if (step >= 3) {
        this.drawLegend(width * 0.72, height * 0.86, [
            { color: '#FFD700', label: 'Urinary tract' },
            { color: '#FFA500', label: 'Adrenal gland' },
            { color: '#E74C3C', label: 'Renal artery'  },
            { color: '#8B4789', label: 'Aorta / IVC'   }
        ]);
    }

    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${step} of 5`, width - 8, height - 4);

    if (showInset) this.drawInset(width * 0.60, height * 0.04, width * 0.38, height * 0.26, insetType);

    this.ctx.restore();
}

// ═══════════════════════════════════════════════════════════════════════════
// EYE ANATOMY — STEP-BY-STEP RENDERER
// Steps:
//   1 — Outer coat: Sclera + Cornea outline
//   2 — + Middle coat: Choroid, Ciliary body, Iris
//   3 — + Inner coat: Retina, Optic disc, Blood vessels
//   4 — + Lens, anterior/posterior chambers, humours
//   5 — + Full labels + optional light-refraction path
// ═══════════════════════════════════════════════════════════════════════════
renderEyeAnatomyDiagram(x, y, width, height, options = {}) {
    const {
        component   = 'complete',
        process     = 'structure',
        drawingStep = 5,
        showLabels  = true,
        showInset   = false,
        insetType   = 'retinal-layers'
    } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    const step = Math.max(1, Math.min(5, drawingStep));
    const color = { base: '#F5F5DC', light: '#FFFAF0', dark: '#D2B48C' };

    const stepLabels = [
        'Step 1 — Outer Coat (Sclera & Cornea)',
        'Step 2 — Middle Coat (Choroid, Ciliary Body & Iris)',
        'Step 3 — Inner Coat (Retina, Optic Disc & Blood Vessels)',
        'Step 4 — Lens, Chambers & Humours',
        'Step 5 — Complete Eye with Labels'
    ];
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.06);

    if (component !== 'complete') {
        AnatomicalShapes.drawEyeAnatomy(this.ctx, 0, height * 0.10, width, height * 0.84, component, process);
        if (showLabels) {
            const names = {
                cornea: 'Cornea', lens: 'Crystalline Lens', retina: 'Retina',
                'optic-nerve': 'Optic Nerve', iris: 'Iris', 'ciliary-body': 'Ciliary Body'
            };
            this.addLabel(names[component] || component, width / 2, height * 0.96, '#D2B48C');
        }
        if (showInset) this.drawInset(width * 0.60, height * 0.08, width * 0.38, height * 0.26, insetType);
        this.ctx.restore();
        return;
    }

    // ── Eye layout constants ──────────────────────────────────────────────
    const eyeX = width  * 0.50;
    const eyeY = height * 0.52;
    const eyeR = Math.min(width, height) * 0.34;

    // ── STEP 1 — Sclera + Cornea ──────────────────────────────────────────
    if (step >= 1) {
        // Sclera
        const sg = this.ctx.createRadialGradient(eyeX, eyeY, 0, eyeX, eyeY, eyeR);
        sg.addColorStop(0, '#FFFFFF'); sg.addColorStop(1, '#EDEDED');
        this.ctx.fillStyle = sg;
        this.ctx.beginPath();
        this.ctx.arc(eyeX, eyeY, eyeR, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = color.dark;
        this.ctx.lineWidth = 3;
        this.ctx.stroke();

        // Cornea (transparent bump on front)
        const cg = this.ctx.createRadialGradient(eyeX - eyeR * 0.78, eyeY, 0,
                                                  eyeX - eyeR * 0.78, eyeY, eyeR * 0.22);
        cg.addColorStop(0, 'rgba(200,230,255,0.55)');
        cg.addColorStop(1, 'rgba(150,200,230,0.25)');
        this.ctx.fillStyle = cg;
        this.ctx.beginPath();
        this.ctx.arc(eyeX - eyeR * 0.78, eyeY, eyeR * 0.22, -Math.PI / 2, Math.PI / 2);
        this.ctx.lineTo(eyeX - eyeR * 0.78, eyeY + eyeR * 0.22);
        this.ctx.arc(eyeX, eyeY, eyeR, Math.PI * 0.72, Math.PI * 1.28);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.strokeStyle = 'rgba(100,160,210,0.60)';
        this.ctx.lineWidth = 1.5;
        this.ctx.stroke();

        if (showLabels) {
            this.addLabel('Sclera\n(white coat)', eyeX + eyeR * 0.60, eyeY - eyeR * 0.65, '#888', 'left');
            this.addLabel('Cornea',              eyeX - eyeR * 1.18,  eyeY,               '#4682B4', 'right');
        }
    }

    // ── STEP 2 — Choroid, Ciliary body, Iris ──────────────────────────────
    if (step >= 2) {
        // Choroid (dark vascular layer)
        this.ctx.fillStyle = '#7B3B10';
        this.ctx.beginPath();
        this.ctx.arc(eyeX, eyeY, eyeR * 0.94, 0, Math.PI * 2);
        this.ctx.fill();

        // Clear inner area placeholder
        this.ctx.fillStyle = 'rgba(240,240,240,0.5)';
        this.ctx.beginPath();
        this.ctx.arc(eyeX, eyeY, eyeR * 0.88, 0, Math.PI * 2);
        this.ctx.fill();

        // Ciliary body
        this.ctx.save();
        this.ctx.translate(eyeX - eyeR * 0.62, eyeY - eyeR * 0.15);
        AnatomicalShapes.drawCiliaryBody(this.ctx, color, eyeR * 0.30, eyeR * 0.30);
        this.ctx.restore();

        // Iris
        this.ctx.save();
        this.ctx.translate(eyeX - eyeR * 0.56 - eyeR * 0.15, eyeY - eyeR * 0.15);
        AnatomicalShapes.drawIris(this.ctx, color, eyeR * 0.30, eyeR * 0.30);
        this.ctx.restore();

        if (showLabels) {
            this.addLabel('Choroid\n(vascular)',  eyeX + eyeR * 0.60, eyeY + eyeR * 0.20, '#7B3B10', 'left');
            this.addLabel('Ciliary\nBody',        eyeX - eyeR * 0.40, eyeY - eyeR * 0.72, '#BC8F8F');
            this.addLabel('Iris',                 eyeX - eyeR * 0.82, eyeY + eyeR * 0.42, '#4682B4', 'right');
            this.addLabel('Pupil',                eyeX - eyeR * 0.68, eyeY - eyeR * 0.42, '#333', 'right');
        }
    }

    // ── STEP 3 — Retina, optic disc, blood vessels ────────────────────────
    if (step >= 3) {
        // Retina
        this.ctx.save();
        this.ctx.translate(eyeX - eyeR * 0.84, eyeY - eyeR * 0.84);
        AnatomicalShapes.drawRetina(this.ctx, color, eyeR * 1.68, eyeR * 1.68);
        this.ctx.restore();

        // Optic disc (blind spot)
        this.ctx.fillStyle = '#FFE4C4';
        this.ctx.strokeStyle = '#DEB887';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(eyeX + eyeR * 0.50, eyeY, eyeR * 0.08, 0, Math.PI * 2);
        this.ctx.fill(); this.ctx.stroke();

        // Fovea / macula
        this.ctx.fillStyle = '#FFD700';
        this.ctx.beginPath();
        this.ctx.arc(eyeX + eyeR * 0.22, eyeY, eyeR * 0.05, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = '#DAA520';
        this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.arc(eyeX + eyeR * 0.22, eyeY, eyeR * 0.10, 0, Math.PI * 2);
        this.ctx.stroke();

        // Optic nerve
        this.ctx.save();
        this.ctx.translate(eyeX + eyeR * 0.56, eyeY - eyeR * 0.06);
        AnatomicalShapes.drawOpticNerve(this.ctx, color, eyeR * 0.60, eyeR * 0.12);
        this.ctx.restore();

        // Retinal blood vessels
        this.ctx.strokeStyle = '#8B0000';
        this.ctx.lineWidth = 1.5;
        [[eyeX + eyeR * 0.50, eyeY, eyeX + eyeR * 0.20, eyeY - eyeR * 0.40,
          eyeX - eyeR * 0.10, eyeY - eyeR * 0.55],
         [eyeX + eyeR * 0.50, eyeY, eyeX + eyeR * 0.20, eyeY + eyeR * 0.40,
          eyeX - eyeR * 0.10, eyeY + eyeR * 0.55]].forEach(([x1, y1, cx1, cy1, x2, y2]) => {
            this.ctx.beginPath();
            this.ctx.moveTo(x1, y1);
            this.ctx.quadraticCurveTo(cx1, cy1, x2, y2);
            this.ctx.stroke();
        });

        if (showLabels) {
            this.addLabel('Retina',       eyeX - eyeR * 0.20, eyeY - eyeR * 0.78, '#DEB887');
            this.addLabel('Optic Disc\n(Blind Spot)', eyeX + eyeR * 0.50, eyeY + eyeR * 0.16, '#DEB887');
            this.addLabel('Fovea\n(Sharpest vision)', eyeX + eyeR * 0.22, eyeY + eyeR * 0.18, '#DAA520');
            this.addLabel('Optic\nNerve', eyeX + eyeR * 1.10, eyeY + eyeR * 0.06, '#D2B48C', 'left');
        }
    }

    // ── STEP 4 — Lens, chambers, humours ─────────────────────────────────
    if (step >= 4) {
        // Lens
        this.ctx.save();
        this.ctx.translate(eyeX - eyeR * 0.42 - eyeR * 0.08, eyeY - eyeR * 0.14);
        AnatomicalShapes.drawLens(this.ctx, color, eyeR * 0.16, eyeR * 0.28);
        this.ctx.restore();

        // Aqueous humour (anterior chamber)
        this.ctx.fillStyle = 'rgba(173,216,230,0.30)';
        this.ctx.beginPath();
        this.ctx.arc(eyeX - eyeR * 0.78, eyeY, eyeR * 0.18, -Math.PI / 2, Math.PI / 2);
        this.ctx.lineTo(eyeX - eyeR * 0.42, eyeY + eyeR * 0.14);
        this.ctx.arc(eyeX - eyeR * 0.42, eyeY, eyeR * 0.14, Math.PI / 2, -Math.PI / 2, true);
        this.ctx.closePath();
        this.ctx.fill();

        // Vitreous humour (posterior chamber)
        this.ctx.fillStyle = 'rgba(200,230,255,0.18)';
        this.ctx.beginPath();
        this.ctx.arc(eyeX, eyeY, eyeR * 0.78, 0, Math.PI * 2);
        this.ctx.fill();

        // Suspensory ligaments
        this.ctx.strokeStyle = '#D2B48C';
        this.ctx.lineWidth = 0.8;
        for (let i = 0; i < 10; i++) {
            const ang = (i / 10) * Math.PI - Math.PI / 2;
            this.ctx.beginPath();
            this.ctx.moveTo(eyeX - eyeR * 0.42 + Math.cos(ang) * eyeR * 0.08,
                            eyeY + Math.sin(ang) * eyeR * 0.14);
            this.ctx.lineTo(eyeX - eyeR * 0.42 + Math.cos(ang) * eyeR * 0.20,
                            eyeY + Math.sin(ang) * eyeR * 0.22);
            this.ctx.stroke();
        }

        if (showLabels) {
            this.addLabel('Lens',              eyeX - eyeR * 0.42, eyeY + eyeR * 0.22, '#DAA520');
            this.addLabel('Aqueous\nHumour',   eyeX - eyeR * 0.86, eyeY + eyeR * 0.44, '#3498DB', 'right');
            this.addLabel('Vitreous\nHumour',  eyeX + eyeR * 0.10, eyeY + eyeR * 0.55, '#3498DB');
            this.addLabel('Suspensory\nLigaments', eyeX - eyeR * 0.40, eyeY - eyeR * 0.34, '#D2B48C');
        }
    }

    // ── STEP 5 — Full labels + light path ────────────────────────────────
    if (step >= 5) {
        this.ctx.save();

        // Light-refraction path
        if (process === 'light-refraction' || process === 'structure') {
            this.ctx.strokeStyle = 'rgba(255,215,0,0.75)';
            this.ctx.lineWidth = 2;
            this.ctx.globalAlpha = 0.80;
            [eyeY - eyeR * 0.10, eyeY, eyeY + eyeR * 0.10].forEach((ry) => {
                this.ctx.beginPath();
                this.ctx.moveTo(0, ry);
                // Through cornea
                this.ctx.lineTo(eyeX - eyeR * 0.86, ry * 0.98 + eyeY * 0.02);
                // Through lens
                this.ctx.lineTo(eyeX - eyeR * 0.42, ry * 0.92 + eyeY * 0.08);
                // To fovea
                this.ctx.lineTo(eyeX + eyeR * 0.22, eyeY);
                this.ctx.stroke();
            });
            this.ctx.globalAlpha = 1.0;

            this.addLabel('Light path', eyeX - eyeR * 1.1, eyeY - eyeR * 0.22, '#DAA520', 'right');
        }

        // Three-layer summary
        this.ctx.font = 'bold 10px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'left';
        [
            [eyeX + eyeR * 0.62, height * 0.20, 'Fibrous coat: Sclera + Cornea',  '#888'],
            [eyeX + eyeR * 0.62, height * 0.28, 'Vascular coat: Choroid + Ciliary + Iris', '#7B3B10'],
            [eyeX + eyeR * 0.62, height * 0.36, 'Nervous coat: Retina',           '#DEB887'],
        ].forEach(([lx, ly, txt, clr]) => {
            this.ctx.fillStyle = clr;
            this.ctx.fillText(txt, lx, ly);
        });

        this.ctx.restore();
    }

    this.ctx.font = 'italic 10px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`Step ${step} of 5`, width - 8, height - 4);

    if (showInset) this.drawInset(width * 0.60, height * 0.04, width * 0.38, height * 0.26, insetType);

    this.ctx.restore();
}

    // ═══════════════════════════════════════════════════════════════════════════
    // HELPER METHODS
    // ═══════════════════════════════════════════════════════════════════════════

    drawTitle(title, x, y) {
        this.ctx.font = 'bold 24px Arial';
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
        this.ctx.font = 'bold 12px Arial';
        this.ctx.fillStyle = color;
        this.ctx.textAlign = align;
        const lines = text.split('\n');
        lines.forEach((line, i) => this.ctx.fillText(line, x, y + i * 14));
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

    drawCurvedArrow(x1, y1, x2, y2, color, label = '') {
        this.ctx.save();
        this.ctx.strokeStyle = color;
        this.ctx.fillStyle = color;
        this.ctx.lineWidth = 3;

        const midX = (x1 + x2) / 2;
        const midY = (y1 + y2) / 2;
        const dx = x2 - x1, dy = y2 - y1;
        const ctrlX = midX - dy * 0.3;
        const ctrlY = midY + dx * 0.3;

        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.quadraticCurveTo(ctrlX, ctrlY, x2, y2);
        this.ctx.stroke();

        const angle = Math.atan2(y2 - ctrlY, x2 - ctrlX);
        this.ctx.beginPath();
        this.ctx.moveTo(x2, y2);
        this.ctx.lineTo(x2 - 10 * Math.cos(angle - Math.PI / 6),
                        y2 - 10 * Math.sin(angle - Math.PI / 6));
        this.ctx.lineTo(x2 - 10 * Math.cos(angle + Math.PI / 6),
                        y2 - 10 * Math.sin(angle + Math.PI / 6));
        this.ctx.closePath();
        this.ctx.fill();

        if (label) {
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = color;
            this.ctx.textAlign = 'center';
            this.ctx.fillText(label, ctrlX, ctrlY - 5);
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
        this.ctx.font = 'bold 18px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(diagram.name, x, y - 10);
        this.ctx.font = '14px Arial';
        this.ctx.fillText('(Renderer not yet implemented)', x, y + 15);
    }

    renderError(diagram, x, y, width, height, errorMessage) {
        this.ctx.fillStyle = '#FADBD8';
        this.ctx.fillRect(x - width / 2, y - height / 2, width, height);
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(x - width / 2, y - height / 2, width, height);
        this.ctx.font = 'bold 18px Arial';
        this.ctx.fillStyle = '#C0392B';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Error Rendering Diagram', x, y - 10);
        this.ctx.font = '14px Arial';
        this.ctx.fillText(errorMessage, x, y + 15);
    }

lightenHex(hex, amount = 40) {
    const h = hex.replace('#', '');
    const r = Math.min(255, parseInt(h.slice(0,2), 16) + amount);
    const g = Math.min(255, parseInt(h.slice(2,4), 16) + amount);
    const b = Math.min(255, parseInt(h.slice(4,6), 16) + amount);
    return `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`;
}

darkenHex(hex, amount = 40) {
    const h = hex.replace('#', '');
    const r = Math.max(0, parseInt(h.slice(0,2), 16) - amount);
    const g = Math.max(0, parseInt(h.slice(2,4), 16) - amount);
    const b = Math.max(0, parseInt(h.slice(4,6), 16) - amount);
    return `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`;
}


    // ═══════════════════════════════════════════════════════════════════════════
    // INSET DRAWING DISPATCHER
    // ═══════════════════════════════════════════════════════════════════════════
drawInset(x, y, width, height, insetType, options = {}) {
    this.ctx.save();
    this.ctx.translate(x, y);

    // Border + shadow
    this.ctx.strokeStyle = '#34495E';
    this.ctx.lineWidth = 3;
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.shadowColor = 'rgba(0,0,0,0.2)';
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
        // ── Cardiovascular ──────────────────────────────────────────────
        case 'cardiac-cycle':           
           this.drawCardiacCycleInset(width, height);
           break;
        // ── Animal Cell ────────────────────────────────────────────────
            case 'nucleus-detail':
                this.drawNucleusDetailInset(width, height);
                break;
            case 'mitochondria-detail':
                this.drawMitochondriaDetailInset(width, height);
                break;
            case 'er-detail':
                this.drawERDetailInset(width, height);
                break;
            case 'golgi-detail':
                this.drawGolgiDetailInset(width, height);
                break;
            case 'ribosome-detail':
                this.drawRibosomeDetailInset(width, height);
                break;
            case 'centriole-detail':
                this.drawCentrioleDetailInset(width, height);
                break;

            // ── Plant Cell ─────────────────────────────────────────────────
            case 'chloroplast-detail':
                this.drawChloroplastDetailInset(width, height);
                break;
            case 'cell-wall-layers':
                this.drawCellWallLayersInset(width, height);
                break;
            case 'plasmodesmata-detail':
                this.drawPlasmodesmataDetailInset(width, height);
                break;
            case 'vacuole-function':
                this.drawVacuoleFunctionInset(width, height);
                break;
            case 'granum-thylakoid':
                this.drawGranumThylakoidInset(width, height);
                break;
            case 'turgor-pressure':
                this.drawTurgorPressureInset(width, height);
                break;

            // ── Cell Membrane ──────────────────────────────────────────────
            case 'phospholipid-structure':
                this.drawPhospholipidStructureInset(width, height);
                break;
            case 'protein-types':
                this.drawProteinTypesInset(width, height);
                break;
            case 'active-vs-passive':
                this.drawActiveVsPassiveInset(width, height);
                break;
            case 'osmosis-diagram':
                this.drawOsmosisDiagramInset(width, height);
                break;
            case 'ion-channel-gating':
                this.drawIonChannelGatingInset(width, height);
                break;
            case 'membrane-fluidity':
                this.drawMembraneFluididtyInset(width, height);
                break;

            // ── Cell Division ──────────────────────────────────────────────
            case 'cell-cycle-checkpoints':
                this.drawCellCycleCheckpointsInset(width, height);
                break;
            case 'chromosome-structure':
                this.drawChromosomeStructureInset(width, height);
                break;
            case 'spindle-assembly':
                this.drawSpindleAssemblyInset(width, height);
                break;
            case 'cytokinesis-detail':
                this.drawCytokinesisDetailInset(width, height);
                break;
            case 'crossing-over':
                this.drawCrossingOverInset(width, height);
                break;
            case 'independent-assortment':
                this.drawIndependentAssortmentInset(width, height);
                break;

            // ── Cellular Respiration ───────────────────────────────────────
            case 'atp-structure':
                this.drawATPStructureInset(width, height);
                break;
            case 'nadh-fadh2-role':
                this.drawNADHFADH2RoleInset(width, height);
                break;
            case 'proton-gradient':
                this.drawProtonGradientInset(width, height);
                break;
            case 'fermentation-pathway':
                this.drawFermentationPathwayInset(width, height);
                break;
            case 'net-atp-yield':
                this.drawNetATPYieldInset(width, height);
                break;
            case 'substrate-level-phosphorylation':
                this.drawSubstrateLevelPhosphorylationInset(width, height);
                break;
        
        case 'conduction-system':       
           this.drawConductionSystemInset(width, height);
          break;

// ── Immunology / Immune Response ──────────────────────────────────────
    case 'toll-like-receptors':
        this.drawTollLikeReceptorsInset(width, height);
        break;
    case 'cytokine-signaling':
        this.drawCytokineSignalingInset(width, height);
        break;
    case 'mhc-presentation':
        this.drawMHCPresentationInset(width, height);
        break;
    case 'clonal-selection':
        this.drawClonalSelectionInset(width, height);
        break;
    // ── Immunology / Vaccination ───────────────────────────────────────────
    case 'antibody-titer':
        this.drawAntibodyTiterInset(width, height);
        break;
    case 'b-cell-activation':
        this.drawBCellActivationInset(width, height);
        break;
    case 'memory-longevity':
        this.drawMemoryLongevityInset(width, height);
        break;
    case 'herd-immunity-threshold':
        this.drawHerdImmunityThresholdInset(width, height);
        break;
    // ── Hematology / Blood Cells ──────────────────────────────────────────
    case 'blood-composition':
        this.drawBloodCompositionInset(width, height);
        break;
    case 'hematopoiesis':
        this.drawHematopoiesisInset(width, height);
        break;
    case 'rbc-lifespan':
        this.drawRBCLifespanInset(width, height);
        break;
    case 'wbc-differential':
        this.drawWBCDifferentialInset(width, height);
        break;
    // ── Immunology / Antibody Structure ───────────────────────────────────
    case 'disulfide-bonds':
        this.drawDisulfideBondsInset(width, height);
        break;
    case 'fab-detail':
        this.drawFabDetailInset(width, height);
        break;
    case 'fc-effector-functions':
        this.drawFcEffectorFunctionsInset(width, height);
        break;
    case 'isotype-comparison':
        this.drawIsotypeComparisonInset(width, height);
        break;
    // ── Microbiology / Pathogen Types ─────────────────────────────────────
    case 'size-comparison':
        this.drawSizeComparisonInset(width, height);
        break;
    case 'gram-stain':
        this.drawGramStainInset(width, height);
        break;
    case 'viral-replication-cycle':
        this.drawViralReplicationCycleInset(width, height);
        break;
    case 'antibiotic-targets':
        this.drawAntibioticTargetsInset(width, height);
        break;
    // ── Immunology / Inflammation ─────────────────────────────────────────
    case 'cardinal-signs':
        this.drawCardinalSignsInset(width, height);
        break;
    case 'eicosanoid-pathway':
        this.drawEicosanoidPathwayInset(width, height);
        break;
    case 'neutrophil-extravasation':
        this.drawNeutrophilExtravasationInset(width, height);
        break;
    case 'resolution-signals':
        this.drawResolutionSignalsInset(width, height);
        break;
    // ── Epidemiology / Disease Transmission ───────────────────────────────
    case 'r-naught':
        this.drawRNaughtInset(width, height);
        break;
    case 'incubation-periods':
        this.drawIncubationPeriodsInset(width, height);
        break;
    case 'geographic-distribution':
        this.drawGeographicDistributionInset(width, height);
        break;
    case 'prevention-methods':
        this.drawPreventionMethodsInset(width, height);
        break;

        // ── Ecology ────────────────────────────────────────────────────────────────



// Food Web
case 'energy-flow':
    this.drawEnergyFlowInset(width, height);
    break;
case 'trophic-efficiency':
    this.drawTrophicEfficiencyInset(width, height);
    break;
case 'biomagnification':
    this.drawBiomagnificationInset(width, height);
    break;

// Carbon Cycle
case 'co2-molecule':
    this.drawCO2MoleculeInset(width, height);
    break;
case 'greenhouse-effect':
    this.drawGreenhouseEffectInset(width, height);
    break;
case 'carbon-reservoirs':
    this.drawCarbonReservoirsInset(width, height);
    break;

// Food Chain
case 'ten-percent-rule':
    this.drawTenPercentRuleInset(width, height);
    break;
case 'energy-loss':
    this.drawEnergyLossInset(width, height);
    break;
case 'trophic-pyramid':
    this.drawTrophicPyramidInset(width, height);
    break;

// Energy Pyramid
case 'energy-loss-heat':
    this.drawEnergyLossHeatInset(width, height);
    break;
case 'lindeman-efficiency':
    this.drawLindemanEfficiencyInset(width, height);
    break;
case 'inverted-pyramid':
    this.drawInvertedPyramidInset(width, height);
    break;

// Nitrogen Cycle
case 'n2-molecule':
    this.drawN2MoleculeInset(width, height);
    break;
case 'rhizobium-nodule':
    this.drawRhizobiumNoduleInset(width, height);
    break;
case 'nitrogen-forms':
    this.drawNitrogenFormsInset(width, height);
    break;

// Water Cycle
case 'water-molecule':
    this.drawWaterMoleculeInset(width, height);
    break;
case 'transpiration-detail':
    this.drawTranspirationDetailInset(width, height);
    break;
case 'groundwater-flow':
    this.drawGroundwaterFlowInset(width, height);
    break;

// Population Growth
case 'growth-equation':
    this.drawGrowthEquationInset(width, height);
    break;
case 'density-dependence':
    this.drawDensityDependenceInset(width, height);
    break;
case 'limiting-factors':
    this.drawLimitingFactorsInset(width, height);
    break;

// Ecosystem
case 'energy-nutrient-flow':
    this.drawEnergyNutrientFlowInset(width, height);
    break;
case 'symbiosis':
    this.drawSymbiosisInset(width, height);
    break;
case 'niche-concept':
    this.drawNicheConceptInset(width, height);
    break;

// Biomes
case 'climate-graph':
    this.drawClimateGraphInset(width, height);
    break;
case 'whittaker-diagram':
    this.drawWhittakerDiagramInset(width, height);
    break;
case 'species-richness':
    this.drawSpeciesRichnessInset(width, height);
    break;

// Predator-Prey
case 'lotka-volterra-equations':
    this.drawLotkaVolterraInset(width, height);
    break;
case 'lag-explanation':
    this.drawLagExplanationInset(width, height);
    break;
case 'equilibrium-point':
    this.drawEquilibriumPointInset(width, height);
    break;

// ── Microbiology — Bacteria ────────────────────────────────────────────
case 'gram-stain-comparison':
    this.drawGramStainComparisonInset(width, height);
    break;
case 'peptidoglycan-detail':
    this.drawPeptidoglycanDetailInset(width, height);
    break;
case 'flagella-basal-body':
    this.drawFlagellaBasalBodyInset(width, height);
    break;
case 'pili-conjugation':
    this.drawPiliConjugationInset(width, height);
    break;
// ── Microbiology — Virus ──────────────────────────────────────────────
case 'lytic-vs-lysogenic':
    this.drawLyticVsLysogenicInset(width, height);
    break;
case 'receptor-binding':
    this.drawReceptorBindingInset(width, height);
    break;
case 'capsid-symmetry':
    this.drawCapsidSymmetryInset(width, height);
    break;
case 'genome-types':
    this.drawGenomeTypesInset(width, height);
    break;
// ── Microbiology — Fungi ──────────────────────────────────────────────
case 'chitin-wall-detail':
    this.drawChitinWallDetailInset(width, height);
    break;
case 'septum-pore':
    this.drawSeptumPoreInset(width, height);
    break;
case 'spore-types':
    this.drawSporeTypesInset(width, height);
    break;
case 'dimorphism':
    this.drawDimorphismInset(width, height);
    break;
// ── Microbiology — Protists ───────────────────────────────────────────
case 'contractile-vacuole':
    this.drawContractileVacuoleInset(width, height);
    break;
case 'axoneme-9plus2':
    this.drawAxoneme9Plus2Inset(width, height);
    break;
case 'apical-complex':
    this.drawApicalComplexInset(width, height);
    break;
case 'frustule-detail':
    this.drawFrustuleDetailInset(width, height);
    break;
// ── Energy Systems insets ──────────────────────────────────────────────────
case 'atp-yield-summary':
    this.drawATPYieldSummaryInset(width, height);
    break;
case 'nadh-fadh2-roles':
    this.drawNADHFADH2RolesInset(width, height);
    break;
case 'proton-gradient':
    this.drawProtonGradientInset(width, height);
    break;
case 'substrate-level-vs-oxidative':
    this.drawSubstrateLevelVsOxidativeInset(width, height);
    break;
case 'q-cycle-detail':
    this.drawQCycleDetailInset(width, height);
    break;
case 'atp-synthase-rotation':
    this.drawATPSynthaseRotationInset(width, height);
    break;
case 'proton-motive-force':
    this.drawProtonMotiveForceInset(width, height);
    break;
case 'inhibitors':
    this.drawEtcInhibitorsInset(width, height);
    break;
case 'z-scheme':
    this.drawZSchemeInset(width, height);
    break;
case 'calvin-cycle-phases':
    this.drawCalvinCyclePhasesInset(width, height);
    break;
case 'rubisco-mechanism':
    this.drawRubiscoMechanismInset(width, height);
    break;
case 'photorespiration-comparison':
    this.drawPhotorespirationComparisonInset(width, height);
    break;
case 'high-energy-bonds':
    this.drawHighEnergyBondsInset(width, height);
    break;
case 'delta-g-values':
    this.drawDeltaGValuesInset(width, height);
    break;
case 'atp-uses-in-cell':
    this.drawATPUsesInCellInset(width, height);
    break;
case 'phosphorylation-types':
    this.drawPhosphorylationTypesInset(width, height);
    break;
case 'membrane-permeability':
    this.drawMembranePermeabilityInset(width, height);
    break;
case 'cristae-surface-area':
    this.drawCristaeSurfaceAreaInset(width, height);
    break;
case 'import-machinery':
    this.drawImportMachineryInset(width, height);
    break;
case 'endosymbiosis':
    this.drawEndosymbiosisInset(width, height);
    break;
case 'thylakoid-membrane-proteins':
    this.drawThylakoidMembraneProteinsInset(width, height);
    break;
case 'grana-stacking-reason':
    this.drawGranaStackingReasonInset(width, height);
    break;
case 'stroma-vs-thylakoid':
    this.drawStromaVsThylakoidInset(width, height);
    break;
case 'cp-vs-mito':
    this.drawCpVsMitoInset(width, height);
    break;
// ── DNA Structure insets ───────────────────────────────────────────────────
case 'base-pair-detail':
    this.drawBasePairDetailInset(width, height);
    break;
case 'nucleotide-structure':
    this.drawNucleotideStructureInset(width, height);
    break;
case 'major-minor-groove-detail':
    this.drawMajorMinorGrooveInset(width, height);
    break;
case 'dna-dimensions':
    this.drawDNADimensionsInset(width, height);
    break;

// ── DNA Replication insets ─────────────────────────────────────────────────
case 'okazaki-fragments':
    this.drawOkazakiFragmentsInset(width, height);
    break;
case 'replication-fork-detail':
    this.drawReplicationForkDetailInset(width, height);
    break;
case 'helicase-mechanism':
    this.drawHelicaseMechanismInset(width, height);
    break;
case 'proofreading':
    this.drawProofreadingInset(width, height);
    break;

// ── Transcription insets ───────────────────────────────────────────────────
case 'rna-polymerase-detail':
    this.drawRNAPolymeraseDetailInset(width, height);
    break;
case 'splicing-mechanism':
    this.drawSplicingMechanismInset(width, height);
    break;
case 'cap-tail-addition':
    this.drawCapTailAdditionInset(width, height);
    break;
case 'promoter-elements':
    this.drawPromoterElementsInset(width, height);
    break;

// ── Translation insets ─────────────────────────────────────────────────────
case 'peptide-bond-formation':
    this.drawPeptideBondFormationInset(width, height);
    break;
case 'trna-charging':
    this.drawTRNAChargingInset(width, height);
    break;
case 'ribosome-sites':
    this.drawRibosomeSitesInset(width, height);
    break;
case 'polysome':
    this.drawPolysomeInset(width, height);
    break;

// ── RNA Structure insets ───────────────────────────────────────────────────
case 'trna-3d-structure':
    this.drawTRNA3DStructureInset(width, height);
    break;
case 'mrna-features':
    this.drawMRNAFeaturesInset(width, height);
    break;
case 'rrna-domains':
    this.drawRRNADomainsInset(width, height);
    break;
case 'rna-modifications':
    this.drawRNAModificationsInset(width, height);
    break;

// ── Codon Chart insets ─────────────────────────────────────────────────────
case 'wobble-base-pairing':
    this.drawWobbleBasePairingInset(width, height);
    break;
case 'codon-degeneracy':
    this.drawCodonDegeneracyInset(width, height);
    break;
case 'reading-frame':
    this.drawReadingFrameInset(width, height);
    break;
case 'start-stop-summary':
    this.drawStartStopSummaryInset(width, height);
    break;
       
        case 'coronary-circulation':    this.drawCoronaryCirculationInset(width, height);    break;
        case 'capillary-exchange':      this.drawCapillaryExchangeInset(width, height);      break;
        case 'valve-mechanism':         this.drawValveMechanismInset(width, height);         break;
        case 'blood-pressure-flow':     this.drawBloodPressureFlowInset(width, height);      break;
        case 'vascular-resistance':     this.drawVascularResistanceInset(width, height);     break;

        case 'stomata-mechanism':      this.drawStomataMechanismInset(width, height); break;
        case 'chloroplast-ultrastructure': this.drawChloroplastInset(width, height); break;
        case 'cohesion-tension-theory':    this.drawCohesionTensionInset(width, height); break;
        case 'turgor-pressure':            this.drawTurgorPressureInset(width, height); break;
        case 'auxin-action':               this.drawAuxinActionInset(width, height); break;
        case 'golden-angle':               this.drawGoldenAngleInset(width, height); break;
        case 'root-hair-cell':             this.drawRootHairInset(width, height); break;
        case 'pollen-grain-detail':        this.drawPollenGrainInset(width, height); break;
        case 'seed-internal-anatomy':      this.drawSeedAnatomyInset(width, height); break;
        case 'node-detail':                this.drawNodeDetailInset(width, height); break;

        // ── Respiratory ─────────────────────────────────────────────────
        case 'gas-exchange':
            this.drawGasExchangeInset(width * 0.05, height * 0.10, width * 0.90, height * 0.85);
            break;
        case 'alveolar-structure':      this.drawAlveolarStructureInset(width, height);      break;
        case 'surfactant-function':     this.drawSurfactantFunctionInset(width, height);     break;
        case 'oxygen-hemoglobin':       this.drawOxygenHemoglobinInset(width, height);       break;

        // ── Digestive ───────────────────────────────────────────────────
        case 'villi-structure':         this.drawVilliStructureInset(width, height);         break;
        case 'enzyme-action':           this.drawEnzymeActionInset(width, height);           break;
        case 'peristalsis':             this.drawPeristalsisInset(width, height);            break;
        case 'bile-production':         this.drawBileProductionInset(width, height);         break;

        // ── Nervous System ──────────────────────────────────────────────
        case 'action-potential':        this.drawActionPotentialInset(width, height);        break;
        case 'neurotransmitter-release':this.drawNeurotransmitterReleaseInset(width, height);break;
        case 'saltatory-conduction':    this.drawSaltatoryCondutionInset(width, height);     break;
        case 'synapse-detail':          this.drawSynapseDetailInset(width, height);          break;

        // ── Skeletal ────────────────────────────────────────────────────
        case 'bone-structure':          this.drawBoneStructureInset(width, height);          break;
        case 'joint-types':             this.drawJointTypesInset(width, height);             break;
        case 'osteon':                  this.drawOsteonInset(width, height);                 break;
        case 'cartilage':               this.drawCartilageInset(width, height);              break;

        // ── Urinary ─────────────────────────────────────────────────────
        case 'nephron-detail':          this.drawNephronDetailInset(width, height);          break;
        case 'glomerular-filtration':   this.drawGlomerularFiltrationInset(width, height);   break;
        case 'countercurrent':          this.drawCountercurrentInset(width, height);         break;
        case 'urine-formation':         this.drawUrineFormationInset(width, height);         break;

        // ── Eye ─────────────────────────────────────────────────────────
        case 'retinal-layers':          this.drawRetinalLayersInset(width, height);          break;
        case 'accommodation':           this.drawAccommodationInset(width, height);          break;
        case 'visual-pathway':          this.drawVisualPathwayInset(width, height);          break;
        case 'photoreceptors':          this.drawPhotoreceptorsInset(width, height);         break;

        default:
            this.drawPlaceholderInset(width, height, insetType);
    }

    this.ctx.restore();
}


// ═══════════════════════════════════════════════════════════════════════════
// MOLECULAR BIOLOGY INSETS
// ═══════════════════════════════════════════════════════════════════════════

// ── DNA Structure insets ──────────────────────────────────────────────────

drawBasePairDetailInset(width, height) {
    this.ctx.font = 'bold 12px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Base Pair Detail', width / 2, 18);

    const cx = width / 2;
    const pairs = [
        { left: 'A', right: 'T', bonds: 2, lColor: '#FF6B6B', rColor: '#4ECDC4', y: height * 0.35 },
        { left: 'G', right: 'C', bonds: 3, lColor: '#FFD93D', rColor: '#95E1D3', y: height * 0.70 }
    ];

    pairs.forEach(p => {
        // Left base
        this.ctx.fillStyle = p.lColor;
        this.ctx.beginPath();
        this.ctx.arc(cx - 38, p.y, 14, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = 1.5;
        this.ctx.stroke();
        this.ctx.fillStyle = '#000';
        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillText(p.left, cx - 38, p.y + 4);

        // Right base
        this.ctx.fillStyle = p.rColor;
        this.ctx.beginPath();
        this.ctx.arc(cx + 38, p.y, 14, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.fillStyle = '#000';
        this.ctx.fillText(p.right, cx + 38, p.y + 4);

        // Hydrogen bonds
        this.ctx.strokeStyle = '#666';
        this.ctx.lineWidth = 1.5;
        this.ctx.setLineDash([4, 3]);
        const bondSpacing = 6;
        const startBond = p.y - (p.bonds - 1) * bondSpacing / 2;
        for (let i = 0; i < p.bonds; i++) {
            const by = startBond + i * bondSpacing;
            this.ctx.beginPath();
            this.ctx.moveTo(cx - 24, by);
            this.ctx.lineTo(cx + 24, by);
            this.ctx.stroke();
        }
        this.ctx.setLineDash([]);

        this.ctx.font = '9px Arial';
        this.ctx.fillStyle = '#555';
        this.ctx.fillText(`${p.bonds} H-bonds`, cx, p.y + 26);
    });

    // Purine / Pyrimidine labels
    this.ctx.font = '9px Arial';
    this.ctx.fillStyle = '#888';
    this.ctx.fillText('Purines', cx - 38, height * 0.20);
    this.ctx.fillText('Pyrimidines', cx + 38, height * 0.20);
}

drawNucleotideStructureInset(width, height) {
    this.ctx.font = 'bold 12px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Nucleotide Components', width / 2, 18);

    const cx = width / 2;
    const components = [
        { label: 'Phosphate\n(PO₄³⁻)',  color: '#FFA500', y: height * 0.28, r: 14 },
        { label: 'Sugar\n(Deoxyribose)', color: '#90EE90', y: height * 0.55, r: 16 },
        { label: 'Base\n(A/T/G/C)',      color: '#FF6B6B', y: height * 0.80, r: 14 }
    ];

    components.forEach((c, i) => {
        this.ctx.fillStyle = c.color;
        this.ctx.beginPath();
        this.ctx.arc(cx, c.y, c.r, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = '#333';
        this.ctx.lineWidth = 1.5;
        this.ctx.stroke();

        if (i < components.length - 1) {
            this.ctx.beginPath();
            this.ctx.moveTo(cx, c.y + c.r);
            this.ctx.lineTo(cx, components[i + 1].y - components[i + 1].r);
            this.ctx.stroke();
        }

        const lines = c.label.split('\n');
        this.ctx.font = '8px Arial';
        this.ctx.fillStyle = '#333';
        lines.forEach((l, li) => this.ctx.fillText(l, cx + c.r + 20, c.y + li * 10 - 4));
    });
}

drawMajorMinorGrooveInset(width, height) {
    this.ctx.font = 'bold 12px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Groove Comparison', width / 2, 18);

    const rows = [
        { label: '',             major: 'Major Groove', minor: 'Minor Groove', bold: true },
        { label: 'Width',        major: '~22 Å',        minor: '~12 Å'                   },
        { label: 'Depth',        major: '~8.5 Å',       minor: '~7.5 Å'                  },
        { label: 'Accessibility',major: 'High',          minor: 'Low'                     },
        { label: 'TF binding',   major: 'Primary site',  minor: 'Secondary'               }
    ];

    const colW  = width / 3;
    const rowH  = (height - 30) / rows.length;
    const startY = 28;

    rows.forEach((row, i) => {
        const y = startY + i * rowH;
        this.ctx.fillStyle = i === 0 ? '#ECF0F1' : (i % 2 === 0 ? '#F9F9F9' : '#FFFFFF');
        this.ctx.fillRect(0, y, width, rowH);
        this.ctx.strokeStyle = '#DDD';
        this.ctx.lineWidth = 0.5;
        this.ctx.strokeRect(0, y, width, rowH);

        this.ctx.font = row.bold ? 'bold 9px Arial' : '9px Arial';
        this.ctx.fillStyle = '#2C3E50';

        this.ctx.textAlign = 'left';
        this.ctx.fillText(row.label, 4, y + rowH * 0.65);

        this.ctx.fillStyle = '#E74C3C';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(row.major, colW * 1.5, y + rowH * 0.65);

        this.ctx.fillStyle = '#4ECDC4';
        this.ctx.fillText(row.minor, colW * 2.5, y + rowH * 0.65);
    });
}

drawDNADimensionsInset(width, height) {
    this.ctx.font = 'bold 12px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('B-DNA Dimensions', width / 2, 18);

    const dimensions = [
        { label: 'Helix diameter',   value: '~2 nm (20 Å)'    },
        { label: 'Rise per bp',      value: '0.34 nm (3.4 Å)' },
        { label: 'Pitch (1 turn)',   value: '3.4 nm'           },
        { label: 'bp per turn',      value: '10.5 bp'          },
        { label: 'Twist per bp',     value: '34.3°'            },
        { label: 'Helix direction',  value: 'Right-handed'     }
    ];

    dimensions.forEach((d, i) => {
        const y = height * 0.22 + i * (height * 0.11);
        this.ctx.fillStyle = i % 2 === 0 ? '#EBF5FB' : '#FDFEFE';
        this.ctx.fillRect(4, y - 8, width - 8, height * 0.11);
        this.ctx.font = '9px Arial';
        this.ctx.fillStyle = '#555';
        this.ctx.textAlign = 'left';
        this.ctx.fillText(d.label, 8, y + 2);
        this.ctx.font = 'bold 9px Arial';
        this.ctx.fillStyle = '#4A90E2';
        this.ctx.textAlign = 'right';
        this.ctx.fillText(d.value, width - 8, y + 2);
    });
}

// ── DNA Replication insets ────────────────────────────────────────────────

drawOkazakiFragmentsInset(width, height) {
    this.ctx.font = 'bold 12px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Okazaki Fragments', width / 2, 18);

    const cx = width / 2;
    const templateY = height * 0.38;

    // Template strand
    this.ctx.strokeStyle = '#4A90E2';
    this.ctx.lineWidth = 6;
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.08, templateY);
    this.ctx.lineTo(width * 0.92, templateY);
    this.ctx.stroke();
    this.ctx.font = '9px Arial';
    this.ctx.fillStyle = '#4A90E2';
    this.ctx.textAlign = 'left';
    this.ctx.fillText("3'→5' template", width * 0.08, templateY - 6);

    // Okazaki fragments (synthesised 5'→3' opposite direction)
    const frags = [
        { x1: 0.70, x2: 0.88 },
        { x1: 0.48, x2: 0.66 },
        { x1: 0.26, x2: 0.44 }
    ];

    frags.forEach((f, i) => {
        // RNA primer
        this.ctx.strokeStyle = '#9B59B6';
        this.ctx.lineWidth = 5;
        this.ctx.setLineDash([3, 3]);
        this.ctx.beginPath();
        this.ctx.moveTo(width * f.x2, templateY + 18);
        this.ctx.lineTo(width * (f.x2 - 0.03), templateY + 18);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        // DNA fragment
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 5;
        this.ctx.beginPath();
        this.ctx.moveTo(width * (f.x2 - 0.03), templateY + 18);
        this.ctx.lineTo(width * f.x1, templateY + 18);
        this.ctx.stroke();

        this.ctx.font = '8px Arial';
        this.ctx.fillStyle = '#333';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(`Frag ${i + 1}`, width * (f.x1 + f.x2) / 2, templateY + 32);
    });

    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#9B59B6';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('■ RNA primer', width * 0.3, height * 0.80);
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.fillText('■ DNA synthesis', width * 0.7, height * 0.80);

    this.ctx.fillStyle = '#555';
    this.ctx.fillText('← Fork movement', cx, height * 0.90);
}

drawReplicationForkDetailInset(width, height) {
    this.ctx.font = 'bold 12px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Replication Fork Enzymes', width / 2, 18);

    const enzymes = [
        { name: 'Helicase',         color: '#FFD700', role: 'Unwinds DNA'         },
        { name: 'Topoisomerase',     color: '#9B59B6', role: 'Relieves torsion'    },
        { name: 'SSB Proteins',      color: '#3498DB', role: 'Stabilises ssDNA'    },
        { name: 'Primase',           color: '#F39C12', role: 'Lays RNA primers'    },
        { name: 'DNA Pol III',       color: '#2ECC71', role: 'Extends new strand'  },
        { name: 'DNA Pol I',         color: '#1ABC9C', role: 'Removes primers'     },
        { name: 'DNA Ligase',        color: '#E67E22', role: 'Seals nicks'         }
    ];

    const rowH = (height - 28) / enzymes.length;
    enzymes.forEach((e, i) => {
        const y = 28 + i * rowH;
        this.ctx.fillStyle = e.color + '33';
        this.ctx.fillRect(4, y, width - 8, rowH - 2);

        this.ctx.fillStyle = e.color;
        this.ctx.beginPath();
        this.ctx.arc(16, y + rowH / 2, 6, 0, Math.PI * 2);
        this.ctx.fill();

        this.ctx.font = 'bold 8px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'left';
        this.ctx.fillText(e.name, 26, y + rowH / 2 - 2);

        this.ctx.font = '8px Arial';
        this.ctx.fillStyle = '#666';
        this.ctx.textAlign = 'right';
        this.ctx.fillText(e.role, width - 6, y + rowH / 2 + 6);
    });
}

drawHelicaseMechanismInset(width, height) {
    this.ctx.font = 'bold 12px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Helicase Mechanism', width / 2, 18);

    const cx = width / 2, cy = height * 0.50;

    // dsDNA approaching
    this.ctx.strokeStyle = '#4A90E2';
    this.ctx.lineWidth = 5;
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.08, cy - 6);
    this.ctx.lineTo(cx - 22, cy - 6);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.08, cy + 6);
    this.ctx.lineTo(cx - 22, cy + 6);
    this.ctx.stroke();

    // Helicase ring
    this.ctx.fillStyle = '#FFD700';
    this.ctx.beginPath();
    this.ctx.arc(cx, cy, 22, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.strokeStyle = '#E6AC00';
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
    this.ctx.fillStyle = '#333';
    this.ctx.font = 'bold 9px Arial';
    this.ctx.fillText('Helicase', cx, cy + 3);

    // ssDNA leaving
    this.ctx.strokeStyle = '#4A90E2';
    this.ctx.lineWidth = 4;
    this.ctx.beginPath();
    this.ctx.moveTo(cx + 22, cy - 6);
    this.ctx.quadraticCurveTo(cx + 50, cy - 20, width * 0.92, cy - 30);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(cx + 22, cy + 6);
    this.ctx.quadraticCurveTo(cx + 50, cy + 20, width * 0.92, cy + 30);
    this.ctx.stroke();

    // ATP label
    this.ctx.font = '9px Arial';
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.fillText('ATP → ADP + Pᵢ', cx, height * 0.82);
    this.ctx.fillStyle = '#555';
    this.ctx.fillText('Energy drives unwinding', cx, height * 0.90);
}

drawProofreadingInset(width, height) {
    this.ctx.font = 'bold 12px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText("DNA Pol Proofreading (3'→5' Exonuclease)", width / 2, 18);

    const steps = [
        { y: 0.30, color: '#2ECC71', text: "Correct base added → continues 5'→3'" },
        { y: 0.52, color: '#E74C3C', text: 'Mismatch detected → polymerase pauses' },
        { y: 0.72, color: '#F39C12', text: "3'→5' exonuclease removes wrong base"  },
        { y: 0.88, color: '#2ECC71', text: 'Correct base re-inserted → resumes'    }
    ];

    steps.forEach((s, i) => {
        this.ctx.fillStyle = s.color + '33';
        this.ctx.fillRect(8, height * s.y - 8, width - 16, 16);
        this.ctx.fillStyle = s.color;
        this.ctx.beginPath();
        this.ctx.arc(16, height * s.y, 5, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.font = '8px Arial';
        this.ctx.fillStyle = '#333';
        this.ctx.textAlign = 'left';
        this.ctx.fillText(s.text, 24, height * s.y + 4);

        if (i < steps.length - 1) {
            this.ctx.strokeStyle = '#BDC3C7';
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.moveTo(16, height * s.y + 5);
            this.ctx.lineTo(16, height * steps[i + 1].y - 8);
            this.ctx.stroke();
        }
    });

    this.ctx.font = 'bold 8px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Error rate: ~1 in 10⁹ bp after proofreading', width / 2, height * 0.96);
}

// ── Transcription insets ──────────────────────────────────────────────────

drawRNAPolymeraseDetailInset(width, height) {
    this.ctx.font = 'bold 12px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('RNA Pol II – Key Facts', width / 2, 18);

    const facts = [
        { label: 'Type',       value: 'RNA Pol II'             },
        { label: 'Product',    value: 'pre-mRNA'               },
        { label: 'Direction',  value: "3'→5' template read"    },
        { label: 'Synthesis',  value: "5'→3' RNA synthesis"    },
        { label: 'No primer',  value: 'Required'               },
        { label: 'Subunits',   value: '12 (RPB1–RPB12)'        },
        { label: 'Speed',      value: '~20–30 nt/sec'          },
        { label: 'Co-factor',  value: 'TFIID, Mediator'        }
    ];

    const rowH = (height - 28) / facts.length;
    facts.forEach((f, i) => {
        const y = 28 + i * rowH;
        this.ctx.fillStyle = i % 2 === 0 ? '#FDEDEC' : '#FDFEFE';
        this.ctx.fillRect(4, y, width - 8, rowH - 1);
        this.ctx.font = 'bold 8px Arial';
        this.ctx.fillStyle = '#C0392B';
        this.ctx.textAlign = 'left';
        this.ctx.fillText(f.label, 8, y + rowH * 0.65);
        this.ctx.font = '8px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'right';
        this.ctx.fillText(f.value, width - 8, y + rowH * 0.65);
    });
}

drawSplicingMechanismInset(width, height) {
    this.ctx.font = 'bold 12px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Splicing Mechanism', width / 2, 18);

    const cx = width / 2;

    // Pre-mRNA with intron
    const rnaY = height * 0.30;
    // Exon 1
    this.ctx.fillStyle = '#2ECC71';
    this.ctx.fillRect(width * 0.06, rnaY - 6, width * 0.25, 12);
    // Intron
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.fillRect(width * 0.35, rnaY - 6, width * 0.30, 12);
    // Exon 2
    this.ctx.fillStyle = '#2ECC71';
    this.ctx.fillRect(width * 0.69, rnaY - 6, width * 0.25, 12);

    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#FFF';
    this.ctx.fillText('Exon 1', width * 0.185, rnaY + 3);
    this.ctx.fillText('Intron', cx, rnaY + 3);
    this.ctx.fillText('Exon 2', width * 0.815, rnaY + 3);

    // Splice sites
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.font = '7px Arial';
    this.ctx.fillText('GU', width * 0.355, rnaY - 10);
    this.ctx.fillText('AG', width * 0.665, rnaY - 10);

    // Lariat
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.arc(cx, height * 0.60, 18, 0, Math.PI * 2);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(cx + 18, height * 0.60);
    this.ctx.lineTo(width * 0.64, height * 0.60);
    this.ctx.stroke();
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.fillText('Lariat intermediate', cx, height * 0.60 + 26);

    // Mature mRNA
    const matureY = height * 0.82;
    this.ctx.fillStyle = '#2ECC71';
    this.ctx.fillRect(width * 0.15, matureY - 6, width * 0.30, 12);
    this.ctx.fillRect(width * 0.55, matureY - 6, width * 0.30, 12);
    this.ctx.strokeStyle = '#2ECC71';
    this.ctx.lineWidth = 4;
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.45, matureY);
    this.ctx.lineTo(width * 0.55, matureY);
    this.ctx.stroke();

    this.ctx.fillStyle = '#FFF';
    this.ctx.font = '8px Arial';
    this.ctx.fillText('Exon 1', width * 0.30, matureY + 3);
    this.ctx.fillText('Exon 2', width * 0.70, matureY + 3);

    this.ctx.fillStyle = '#2ECC71';
    this.ctx.font = '8px Arial';
    this.ctx.fillText('Joined exons', cx, matureY + 20);
}

drawCapTailAdditionInset(width, height) {
    this.ctx.font = 'bold 12px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText("5' Cap & 3' Poly-A Tail", width / 2, 18);

    const cx = width / 2;

    // 5' cap
    this.ctx.fillStyle = '#FFD700';
    this.ctx.beginPath();
    this.ctx.arc(width * 0.14, height * 0.35, 14, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.strokeStyle = '#E6AC00';
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
    this.ctx.fillStyle = '#333';
    this.ctx.font = 'bold 8px Arial';
    this.ctx.fillText('m⁷G', width * 0.14, height * 0.355);
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#555';
    this.ctx.fillText("5' cap", width * 0.14, height * 0.25);
    this.ctx.fillText('• Protects mRNA',      width * 0.14, height * 0.47);
    this.ctx.fillText('• Ribosome recognition', width * 0.14, height * 0.53);
    this.ctx.fillText('• Nuclear export',      width * 0.14, height * 0.59);

    // Divider
    this.ctx.strokeStyle = '#ECF0F1';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(cx, height * 0.22);
    this.ctx.lineTo(cx, height * 0.88);
    this.ctx.stroke();

    // Poly-A tail
    this.ctx.fillStyle = '#FF6B6B';
    for (let i = 0; i < 6; i++) {
        this.ctx.beginPath();
        this.ctx.arc(width * 0.72 + i * 8, height * 0.35, 5, 0, Math.PI * 2);
        this.ctx.fill();
    }
    this.ctx.font = '7px Arial';
    this.ctx.fillStyle = '#FFF';
    ['A', 'A', 'A', 'A', 'A', 'A'].forEach((l, i) => {
        this.ctx.fillText(l, width * 0.72 + i * 8, height * 0.355);
    });
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#555';
    this.ctx.fillText("3' Poly-A tail", width * 0.80, height * 0.25);
    this.ctx.fillText('• ~200 adenines',     width * 0.80, height * 0.47);
    this.ctx.fillText('• Stability/export',  width * 0.80, height * 0.53);
    this.ctx.fillText('• Translation init.', width * 0.80, height * 0.59);
    this.ctx.fillText('• Added by CPSF',     width * 0.80, height * 0.65);
}

drawPromoterElementsInset(width, height) {
    this.ctx.font = 'bold 12px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Core Promoter Elements', width / 2, 18);

    const lineY = height * 0.45;
    // DNA line
    this.ctx.strokeStyle = '#4A90E2';
    this.ctx.lineWidth = 5;
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.05, lineY);
    this.ctx.lineTo(width * 0.95, lineY);
    this.ctx.stroke();

    // TSS
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.beginPath();
    this.ctx.arc(width * 0.72, lineY, 7, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.fillStyle = '#FFF';
    this.ctx.font = '7px Arial';
    this.ctx.fillText('+1', width * 0.72, lineY + 2.5);

    // Elements
    const elements = [
        { x: 0.20, label: 'GC Box\n(-90)',   color: '#9B59B6', above: true  },
        { x: 0.38, label: 'CAAT Box\n(-75)', color: '#27AE60', above: true  },
        { x: 0.55, label: 'TATA Box\n(-30)', color: '#F39C12', above: false },
        { x: 0.72, label: 'TSS\n(+1)',       color: '#E74C3C', above: false }
    ];

    elements.forEach(el => {
        // bracket on DNA
        this.ctx.strokeStyle = el.color;
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        const bracketY = el.above ? lineY - 4 : lineY + 4;
        const dir = el.above ? -1 : 1;
        this.ctx.moveTo(width * (el.x - 0.04), bracketY);
        this.ctx.lineTo(width * el.x, bracketY + dir * 8);
        this.ctx.lineTo(width * (el.x + 0.04), bracketY);
        this.ctx.stroke();

        const labelY = el.above ? lineY - 28 : lineY + 36;
        this.ctx.font = '8px Arial';
        this.ctx.fillStyle = el.color;
        el.label.split('\n').forEach((l, i) => {
            this.ctx.fillText(l, width * el.x, labelY + i * 10);
        });
    });

    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.fillText('Transcription start site (TSS) = position +1', width / 2, height * 0.88);
}

// ── Translation insets ────────────────────────────────────────────────────

drawPeptideBondFormationInset(width, height) {
    this.ctx.font = 'bold 12px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Peptide Bond Formation', width / 2, 18);

    const cx = width / 2;
    // Amino acid 1 (P-site)
    this.ctx.fillStyle = '#FF6B6B';
    this.ctx.beginPath();
    this.ctx.arc(cx - 35, height * 0.38, 18, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.strokeStyle = '#C0392B';
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
    this.ctx.fillStyle = '#FFF';
    this.ctx.font = '9px Arial';
    this.ctx.fillText('AA₁', cx - 35, height * 0.385);

    // Amino acid 2 (A-site)
    this.ctx.fillStyle = '#4ECDC4';
    this.ctx.beginPath();
    this.ctx.arc(cx + 35, height * 0.38, 18, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.strokeStyle = '#16A085';
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
    this.ctx.fillStyle = '#FFF';
    this.ctx.font = '9px Arial';
    this.ctx.fillText('AA₂', cx + 35, height * 0.385);

    // Bond forming arrow
    this.ctx.strokeStyle = '#F39C12';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.moveTo(cx - 17, height * 0.38);
    this.ctx.lineTo(cx + 17, height * 0.38);
    this.ctx.stroke();
    this.ctx.fillStyle = '#F39C12';
    this.ctx.font = 'bold 8px Arial';
    this.ctx.fillText('–CO–NH–', cx, height * 0.38 - 10);
    this.ctx.fillText('Peptide bond', cx, height * 0.56);

    // PTC label
    this.ctx.fillStyle = '#FFD700';
    this.ctx.beginPath();
    this.ctx.arc(cx, height * 0.72, 14, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.strokeStyle = '#E6AC00';
    this.ctx.lineWidth = 1.5;
    this.ctx.stroke();
    this.ctx.fillStyle = '#333';
    this.ctx.font = '7px Arial';
    this.ctx.fillText('PTC', cx, height * 0.725);
    this.ctx.fillStyle = '#555';
    this.ctx.fillText('Peptidyl Transferase Centre', cx, height * 0.84);
    this.ctx.fillText('(rRNA catalysis, no protein)', cx, height * 0.90);
}

drawTRNAChargingInset(width, height) {
    this.ctx.font = 'bold 12px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('tRNA Charging (Aminoacylation)', width / 2, 18);

    const cx = width / 2;
    const steps = [
        { y: 0.28, text: 'Amino acid + ATP → Aminoacyl-AMP + PPᵢ',    color: '#3498DB' },
        { y: 0.46, text: 'Aminoacyl-AMP + tRNA → Aminoacyl-tRNA + AMP', color: '#F39C12' },
        { y: 0.64, text: "AA attached to 3'-CCA end of tRNA",            color: '#2ECC71' }
    ];

    steps.forEach((s, i) => {
        this.ctx.fillStyle = s.color + '22';
        this.ctx.fillRect(6, height * s.y - 10, width - 12, 22);
        this.ctx.font = '8px Arial';
        this.ctx.fillStyle = s.color;
        this.ctx.fillText(s.text, cx, height * s.y + 4);

        if (i < steps.length - 1) {
            this.ctx.strokeStyle = '#BDC3C7';
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.moveTo(cx, height * s.y + 12);
            this.ctx.lineTo(cx, height * steps[i + 1].y - 10);
            this.ctx.stroke();
            this.ctx.fillStyle = '#BDC3C7';
            this.ctx.fillText('↓', cx, height * (s.y + steps[i + 1].y) / 2 + 4);
        }
    });

    this.ctx.font = 'bold 8px Arial';
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.fillText('Enzyme: Aminoacyl-tRNA Synthetase', cx, height * 0.80);
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.fillText('One specific synthetase per amino acid (20 total)', cx, height * 0.88);
    this.ctx.fillText('Ensures correct codon–amino acid pairing', cx, height * 0.94);
}

drawRibosomeSitesInset(width, height) {
    this.ctx.font = 'bold 12px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Ribosome A, P, E Sites', width / 2, 18);

    const sites = [
        { label: 'A site',  full: 'Aminoacyl-tRNA site',  color: '#E74C3C',
          desc: 'Incoming charged tRNA\nbinds here first'   },
        { label: 'P site',  full: 'Peptidyl-tRNA site',   color: '#E67E22',
          desc: 'tRNA holding the\ngrowing polypeptide'    },
        { label: 'E site',  full: 'Exit site',             color: '#95A5A6',
          desc: 'Deacylated tRNA\nexits here'              }
    ];

    const colW = width / 3;
    sites.forEach((s, i) => {
        const x = colW * i + colW / 2;

        this.ctx.fillStyle = s.color + '33';
        this.ctx.fillRect(colW * i + 4, height * 0.14, colW - 8, height * 0.78);

        this.ctx.fillStyle = s.color;
        this.ctx.font = 'bold 18px Arial';
        this.ctx.fillText(s.label[0], x, height * 0.30);

        this.ctx.font = 'bold 9px Arial';
        this.ctx.fillText(s.label, x, height * 0.42);

        this.ctx.font = '8px Arial';
        this.ctx.fillStyle = '#555';
        this.ctx.fillText(s.full, x, height * 0.52);

        s.desc.split('\n').forEach((l, li) => {
            this.ctx.fillText(l, x, height * (0.64 + li * 0.10));
        });
    });

    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.fillText('Translocation: A→P→E during each elongation cycle', width / 2, height * 0.96);
}

drawPolysomeInset(width, height) {
    this.ctx.font = 'bold 12px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Polysome (Polyribosome)', width / 2, 18);

    const mRNAY = height * 0.45;
    // mRNA
    this.ctx.strokeStyle = '#9B59B6';
    this.ctx.lineWidth = 6;
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.06, mRNAY);
    this.ctx.lineTo(width * 0.94, mRNAY);
    this.ctx.stroke();

    this.ctx.fillStyle = '#FFD700';
    this.ctx.beginPath();
    this.ctx.arc(width * 0.06, mRNAY, 8, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.fillStyle = '#333';
    this.ctx.font = '6px Arial';
    this.ctx.fillText("5'", width * 0.06, mRNAY + 2);

    // 4 ribosomes at different stages
    const ribosomes = [
        { x: 0.18, chainLen: 1 },
        { x: 0.36, chainLen: 3 },
        { x: 0.56, chainLen: 5 },
        { x: 0.76, chainLen: 7 }
    ];

    ribosomes.forEach(r => {
        // Large subunit
        this.ctx.fillStyle = '#2ECC71';
        this.ctx.beginPath();
        this.ctx.ellipse(width * r.x, mRNAY - 16, 20, 12, 0, 0, Math.PI * 2);
        this.ctx.fill();
        // Small subunit
        this.ctx.fillStyle = '#3498DB';
        this.ctx.beginPath();
        this.ctx.ellipse(width * r.x, mRNAY + 16, 16, 10, 0, 0, Math.PI * 2);
        this.ctx.fill();

        // Growing polypeptide
        this.ctx.strokeStyle = '#FF6B6B';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(width * r.x, mRNAY - 28);
        for (let i = 0; i < r.chainLen; i++) {
            this.ctx.lineTo(width * r.x + (i % 2 === 0 ? 6 : -6), mRNAY - 28 - i * 7);
        }
        this.ctx.stroke();
    });

    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#555';
    this.ctx.fillText('Multiple ribosomes translate same mRNA simultaneously', width / 2, height * 0.80);
    this.ctx.fillText('→ efficient protein production', width / 2, height * 0.88);
}

// ── RNA Structure insets ──────────────────────────────────────────────────

drawTRNA3DStructureInset(width, height) {
    this.ctx.font = 'bold 12px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('tRNA 3D L-Shape', width / 2, 18);

    const cx = width / 2;
    // L-shape backbone
    this.ctx.strokeStyle = '#F39C12';
    this.ctx.lineWidth = 8;
    this.ctx.lineCap = 'round';
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.25, height * 0.20);
    this.ctx.lineTo(width * 0.25, height * 0.70);
    this.ctx.lineTo(width * 0.75, height * 0.70);
    this.ctx.stroke();

    // Acceptor end
    this.ctx.fillStyle = '#4ECDC4';
    this.ctx.beginPath();
    this.ctx.arc(width * 0.25, height * 0.20, 12, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.fillStyle = '#FFF';
    this.ctx.font = '8px Arial';
    this.ctx.fillText("3'-CCA", width * 0.25, height * 0.205);
    this.ctx.fillStyle = '#4ECDC4';
    this.ctx.font = '8px Arial';
    this.ctx.fillText('AA binding', width * 0.25, height * 0.14);

    // Anticodon end
    this.ctx.fillStyle = '#E67E22';
    this.ctx.beginPath();
    this.ctx.arc(width * 0.75, height * 0.70, 12, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.fillStyle = '#FFF';
    this.ctx.fillText('ACL', width * 0.75, height * 0.705);
    this.ctx.fillStyle = '#E67E22';
    this.ctx.fillText('Anticodon', width * 0.75, height * 0.80);

    // Corner region
    this.ctx.fillStyle = '#9B59B6';
    this.ctx.beginPath();
    this.ctx.arc(width * 0.25, height * 0.70, 8, 0, Math.PI * 2);
    this.ctx.fill();

    // Arms labels
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#555';
    this.ctx.textAlign = 'right';
    this.ctx.fillText('Acceptor stem', width * 0.22, height * 0.45);
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Anticodon arm', width * 0.50, height * 0.77);

    // ~75 nt note
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.fillText('~76 nucleotides total', cx, height * 0.92);
}

drawMRNAFeaturesInset(width, height) {
    this.ctx.font = 'bold 12px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText("mRNA Feature Functions", width / 2, 18);

    const features = [
        { label: "5' Cap (m⁷G)",     color: '#FFD700', func: 'Ribosome recruitment, stability'    },
        { label: "5' UTR",            color: '#3498DB', func: 'Kozak sequence, IRES elements'      },
        { label: 'Start codon (AUG)', color: '#2ECC71', func: 'Initiates translation, codes Met'   },
        { label: 'CDS',               color: '#27AE60', func: 'Protein coding region (codons)'     },
        { label: 'Stop codon',        color: '#E74C3C', func: 'UAA/UAG/UGA – terminates'           },
        { label: "3' UTR",            color: '#9B59B6', func: 'Stability, localisation, miRNA'     },
        { label: "Poly-A (~200 A's)", color: '#FF6B6B', func: 'Stability, nuclear export, transl.' }
    ];

    const rowH = (height - 28) / features.length;
    features.forEach((f, i) => {
        const y = 28 + i * rowH;
        this.ctx.fillStyle = f.color + '22';
        this.ctx.fillRect(4, y, width - 8, rowH - 1);
        this.ctx.fillStyle = f.color;
        this.ctx.beginPath();
        this.ctx.arc(12, y + rowH / 2, 5, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.font = 'bold 8px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'left';
        this.ctx.fillText(f.label, 20, y + rowH / 2 - 2);
        this.ctx.font = '7px Arial';
        this.ctx.fillStyle = '#666';
        this.ctx.fillText(f.func, 20, y + rowH / 2 + 7);
    });
}

drawRRNADomainsInset(width, height) {
    this.ctx.font = 'bold 12px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('rRNA Types & Ribosome', width / 2, 18);

    const cx = width / 2;

    // Eukaryotic ribosome
    // 60S large subunit
    this.ctx.fillStyle = 'rgba(46,204,113,0.3)';
    this.ctx.beginPath();
    this.ctx.ellipse(cx, height * 0.38, 55, 32, 0, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.strokeStyle = '#2ECC71';
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
    this.ctx.fillStyle = '#2ECC71';
    this.ctx.font = 'bold 10px Arial';
    this.ctx.fillText('60S', cx, height * 0.365);
    this.ctx.font = '8px Arial';
    this.ctx.fillText('28S + 5.8S + 5S rRNA', cx, height * 0.40);

    // 40S small subunit
    this.ctx.fillStyle = 'rgba(52,152,219,0.3)';
    this.ctx.beginPath();
    this.ctx.ellipse(cx, height * 0.60, 45, 26, 0, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.strokeStyle = '#3498DB';
    this.ctx.stroke();
    this.ctx.fillStyle = '#3498DB';
    this.ctx.font = 'bold 10px Arial';
    this.ctx.fillText('40S', cx, height * 0.585);
    this.ctx.font = '8px Arial';
    this.ctx.fillText('18S rRNA', cx, height * 0.615);

    // 80S label
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.font = 'bold 9px Arial';
    this.ctx.fillText('80S ribosome (eukaryote)', cx, height * 0.78);

    // Key domains
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#FFD700';
    this.ctx.fillText('★ PTC: peptidyl transferase (28S)', cx, height * 0.85);
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.fillText('★ Decoding: A-site tRNA check (18S)', cx, height * 0.91);
}

drawRNAModificationsInset(width, height) {
    this.ctx.font = 'bold 12px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('RNA Modifications', width / 2, 18);

    const modifications = [
        { label: 'Pseudouridine (Ψ)',  color: '#9B59B6', rna: 'tRNA, rRNA',  effect: 'Stability'       },
        { label: 'N⁶-methyladenosine', color: '#E74C3C', rna: 'mRNA',        effect: 'Translation, decay' },
        { label: '2′-O-methylation',   color: '#F39C12', rna: 'rRNA, snRNA', effect: 'Structure'        },
        { label: 'Inosine (I)',         color: '#27AE60', rna: 'tRNA',        effect: 'Wobble pairing'   },
        { label: 'Dihydrouridine (D)', color: '#3498DB', rna: 'tRNA D-arm',  effect: 'Flexibility'      }
    ];

    const rowH = (height - 28) / modifications.length;
    modifications.forEach((m, i) => {
        const y = 28 + i * rowH;
        this.ctx.fillStyle = m.color + '22';
        this.ctx.fillRect(4, y, width - 8, rowH - 1);

        this.ctx.fillStyle = m.color;
        this.ctx.beginPath();
        this.ctx.arc(12, y + rowH * 0.4, 5, 0, Math.PI * 2);
        this.ctx.fill();

        this.ctx.font = 'bold 8px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'left';
        this.ctx.fillText(m.label, 20, y + rowH * 0.45);

        this.ctx.font = '7px Arial';
        this.ctx.fillStyle = '#555';
        this.ctx.fillText(`${m.rna} | ${m.effect}`, 20, y + rowH * 0.80);
    });
}

// ── Codon Chart insets ────────────────────────────────────────────────────

drawWobbleBasePairingInset(width, height) {
    this.ctx.font = 'bold 12px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Wobble Base Pairing', width / 2, 18);

    const cx = width / 2;

    // Diagram: anticodon position 34 (wobble) can pair with multiple bases
    this.ctx.font = '9px Arial';
    this.ctx.fillStyle = '#555';
    this.ctx.fillText('Codon position 3 ↔ Anticodon position 34', cx, height * 0.22);

    const wobblePairs = [
        { codon: 'U',  anti: 'A or G', note: 'Standard + wobble' },
        { codon: 'C',  anti: 'G',      note: 'Standard only'      },
        { codon: 'A',  anti: 'U or I', note: 'Standard + inosine' },
        { codon: 'G',  anti: 'C or U', note: 'Standard + wobble'  }
    ];

    const rowH = (height - height * 0.28) / wobblePairs.length;
    wobblePairs.forEach((w, i) => {
        const y = height * 0.28 + i * rowH;
        this.ctx.fillStyle = i % 2 === 0 ? '#EAF4FB' : '#FDFEFE';
        this.ctx.fillRect(4, y, width - 8, rowH - 2);

        this.ctx.font = 'bold 12px Arial';
        this.ctx.fillStyle = '#4A90E2';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(w.codon, width * 0.18, y + rowH * 0.65);

        this.ctx.strokeStyle = '#BDC3C7';
        this.ctx.lineWidth = 1.5;
        this.ctx.setLineDash([3, 3]);
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.28, y + rowH * 0.5);
        this.ctx.lineTo(width * 0.45, y + rowH * 0.5);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        this.ctx.fillStyle = '#E67E22';
        this.ctx.fillText(w.anti, width * 0.60, y + rowH * 0.65);

        this.ctx.font = '7px Arial';
        this.ctx.fillStyle = '#888';
        this.ctx.textAlign = 'right';
        this.ctx.fillText(w.note, width - 5, y + rowH * 0.65);
    });

    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText("Wobble (Crick, 1966): flexibility at 3rd codon position", cx, height * 0.96);
}

drawCodonDegeneracyInset(width, height) {
    this.ctx.font = 'bold 12px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Genetic Code Degeneracy', width / 2, 18);

    const cx = width / 2;

    // Bar chart: number of codons per amino acid
    const data = [
        { aa: 'Met', n: 1, color: '#2ECC71' },
        { aa: 'Trp', n: 1, color: '#27AE60' },
        { aa: 'Phe', n: 2, color: '#3498DB' },
        { aa: 'Tyr', n: 2, color: '#2980B9' },
        { aa: 'Cys', n: 2, color: '#1ABC9C' },
        { aa: 'Ile', n: 3, color: '#F39C12' },
        { aa: 'Val', n: 4, color: '#E67E22' },
        { aa: 'Ala', n: 4, color: '#E74C3C' },
        { aa: 'Leu', n: 6, color: '#C0392B' },
        { aa: 'Arg', n: 6, color: '#9B59B6' }
    ];

    const barAreaX = width * 0.22;
    const barAreaW = width * 0.70;
    const barAreaY = height * 0.22;
    const barAreaH = height * 0.62;
    const barH = barAreaH / data.length - 2;
    const maxVal = 6;

    data.forEach((d, i) => {
        const y = barAreaY + i * (barAreaH / data.length);
        const barW = (d.n / maxVal) * barAreaW;

        this.ctx.fillStyle = d.color + '44';
        this.ctx.fillRect(barAreaX, y, barAreaW, barH);
        this.ctx.fillStyle = d.color;
        this.ctx.fillRect(barAreaX, y, barW, barH);

        this.ctx.font = '8px Arial';
        this.ctx.fillStyle = '#333';
        this.ctx.textAlign = 'right';
        this.ctx.fillText(d.aa, barAreaX - 3, y + barH * 0.75);

        this.ctx.fillStyle = '#FFF';
        this.ctx.textAlign = 'left';
        this.ctx.fillText(d.n, barAreaX + barW + 2, y + barH * 0.75);
    });

    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Number of codons per amino acid', cx, height * 0.90);
    this.ctx.fillText('Degeneracy protects against some point mutations', cx, height * 0.96);
}

drawReadingFrameInset(width, height) {
    this.ctx.font = 'bold 12px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Reading Frames', width / 2, 18);

    const cx = width / 2;
    const seq = 'AUGUUUGGACCA';
    const frames = [
        { start: 0, label: 'Frame +1', color: '#2ECC71' },
        { start: 1, label: 'Frame +2', color: '#3498DB' },
        { start: 2, label: 'Frame +3', color: '#E74C3C' }
    ];

    // mRNA sequence
    const seqY = height * 0.24;
    const charW = (width - 20) / seq.length;
    this.ctx.font = 'bold 10px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    seq.split('').forEach((base, i) => {
        this.ctx.fillText(base, 10 + i * charW + charW / 2, seqY);
    });

    // Position numbers
    this.ctx.font = '7px Arial';
    this.ctx.fillStyle = '#999';
    seq.split('').forEach((_, i) => {
        if ((i + 1) % 3 === 0) this.ctx.fillText(i + 1, 10 + i * charW + charW / 2, seqY - 10);
    });

    frames.forEach((f, fi) => {
        const y = height * (0.36 + fi * 0.20);
        this.ctx.font = '8px Arial';
        this.ctx.fillStyle = f.color;
        this.ctx.textAlign = 'left';
        this.ctx.fillText(f.label, 4, y + 8);

        for (let i = f.start; i + 2 < seq.length; i += 3) {
            const codon = seq.substring(i, i + 3);
            const x = 10 + i * charW;
            const w = 3 * charW;
            this.ctx.fillStyle = f.color + '33';
            this.ctx.fillRect(x, y - 8, w - 2, 14);
            this.ctx.strokeStyle = f.color;
            this.ctx.lineWidth = 1;
            this.ctx.strokeRect(x, y - 8, w - 2, 14);
            this.ctx.fillStyle = '#333';
            this.ctx.font = '8px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(codon, x + w / 2 - 1, y + 2);
        }
    });

    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Correct frame determined by AUG start codon', cx, height * 0.94);
}

drawStartStopSummaryInset(width, height) {
    this.ctx.font = 'bold 12px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Start & Stop Codons', width / 2, 18);

    const cx = width / 2;

    // Start codon
    this.ctx.fillStyle = 'rgba(46,204,113,0.2)';
    this.ctx.fillRect(6, height * 0.12, width - 12, height * 0.32);
    this.ctx.strokeStyle = '#2ECC71';
    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(6, height * 0.12, width - 12, height * 0.32);

    this.ctx.fillStyle = '#2ECC71';
    this.ctx.font = 'bold 18px Arial';
    this.ctx.fillText('AUG', cx, height * 0.24);
    this.ctx.font = 'bold 9px Arial';
    this.ctx.fillText('START codon', cx, height * 0.31);
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#555';
    this.ctx.fillText('Codes for Methionine (Met, M)', cx, height * 0.38);

    // Stop codons
    this.ctx.fillStyle = 'rgba(231,76,60,0.2)';
    this.ctx.fillRect(6, height * 0.50, width - 12, height * 0.42);
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(6, height * 0.50, width - 12, height * 0.42);

    this.ctx.fillStyle = '#E74C3C';
    this.ctx.font = 'bold 9px Arial';
    this.ctx.fillText('STOP codons (do not code amino acids)', cx, height * 0.56);

    const stops = [
        { codon: 'UAA', name: '"Ochre"'   },
        { codon: 'UAG', name: '"Amber"'   },
        { codon: 'UGA', name: '"Opal/Umber"' }
    ];
    stops.forEach((s, i) => {
        this.ctx.fillStyle = '#E74C3C';
        this.ctx.font = 'bold 13px Arial';
        this.ctx.fillText(s.codon, cx, height * (0.65 + i * 0.10));
        this.ctx.font = '8px Arial';
        this.ctx.fillStyle = '#888';
        this.ctx.fillText(s.name, cx + 35, height * (0.65 + i * 0.10));
    });
}


// ═══════════════════════════════════════════════════════════════════════════
// ENERGY SYSTEMS INSETS
// ═══════════════════════════════════════════════════════════════════════════

drawATPYieldSummaryInset(width, height) {
    const ctx = this.ctx;
    ctx.font = 'bold 11px Arial';
    ctx.fillStyle = '#2C3E50';
    ctx.textAlign = 'center';
    ctx.fillText('ATP Yield per Glucose', width / 2, 16);

    const rows = [
        { stage: 'Glycolysis',        atp: '2',    nadh: '2',    fadh: '—'  },
        { stage: 'Pyruvate Decarb.',  atp: '—',    nadh: '2',    fadh: '—'  },
        { stage: 'Krebs Cycle ×2',    atp: '2',    nadh: '6',    fadh: '2'  },
        { stage: 'Oxidative Phos.',   atp: '~26',  nadh: '—',    fadh: '—'  },
        { stage: 'TOTAL',             atp: '~30-32', nadh: '10', fadh: '2'  },
    ];

    const rowH   = (height - 36) / (rows.length + 1);
    const colW   = width * 0.25;
    const startY = 28;

    // Header
    ['Stage', 'ATP', 'NADH', 'FADH₂'].forEach((h, i) => {
        ctx.fillStyle = '#2C3E50';
        ctx.font = 'bold 9px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(h, colW * i + colW / 2, startY + rowH * 0.7);
    });

    // Divider
    ctx.strokeStyle = '#BDC3C7';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(4, startY + rowH);
    ctx.lineTo(width - 4, startY + rowH);
    ctx.stroke();

    rows.forEach((row, ri) => {
        const y     = startY + rowH * (ri + 1.7);
        const isLast = ri === rows.length - 1;

        if (isLast) {
            ctx.fillStyle = '#27AE60';
            ctx.fillRect(4, startY + rowH * (ri + 1.1), width - 8, rowH * 0.95);
        }

        ctx.fillStyle = isLast ? '#ffffff' : '#2C3E50';
        ctx.font      = isLast ? 'bold 9px Arial' : '9px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(row.stage, 8,           y);
        ctx.textAlign = 'center';
        ctx.fillText(row.atp,   colW * 1.5,  y);
        ctx.fillText(row.nadh,  colW * 2.5,  y);
        ctx.fillText(row.fadh,  colW * 3.5,  y);
    });
}

drawNADHFADH2RolesInset(width, height) {
    const ctx = this.ctx;
    ctx.font = 'bold 11px Arial';
    ctx.fillStyle = '#2C3E50';
    ctx.textAlign = 'center';
    ctx.fillText('NADH & FADH₂ Roles', width / 2, 16);

    const items = [
        { label: 'NADH',   color: '#F39C12', atp: '~2.5 ATP each', entry: 'Complex I',   note: 'Donates 2e⁻ to FMN' },
        { label: 'FADH₂',  color: '#E67E22', atp: '~1.5 ATP each', entry: 'Complex II',  note: 'Donates 2e⁻ to FAD' },
    ];

    items.forEach((item, i) => {
        const bx = width * 0.05;
        const by = height * (0.22 + i * 0.42);
        const bw = width * 0.90;
        const bh = height * 0.34;

        ctx.fillStyle = item.color + '22';
        ctx.strokeStyle = item.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(bx, by, bw, bh, 6);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = item.color;
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(item.label, bx + 8, by + 16);

        ctx.fillStyle = '#2C3E50';
        ctx.font = '9px Arial';
        ctx.fillText(item.atp,   bx + 8, by + 28);
        ctx.fillText('Entry: ' + item.entry, bx + 8, by + 40);
        ctx.fillText(item.note,  bx + 8, by + 52);
    });
}

drawProtonGradientInset(width, height) {
    const ctx = this.ctx;
    ctx.font = 'bold 11px Arial';
    ctx.fillStyle = '#2C3E50';
    ctx.textAlign = 'center';
    ctx.fillText('Proton Gradient (PMF)', width / 2, 16);

    const memY = height * 0.50;

    // Intermembrane space (high H+)
    ctx.fillStyle = '#FFE5E5';
    ctx.fillRect(4, height * 0.15, width - 8, memY - height * 0.15);
    ctx.fillStyle = '#E74C3C';
    ctx.font = 'bold 9px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Intermembrane Space', width / 2, height * 0.24);
    ctx.font = '9px Arial';
    ctx.fillText('High [H⁺]  Low pH', width / 2, height * 0.33);

    // Membrane
    ctx.fillStyle = '#C0392B';
    ctx.fillRect(4, memY - 5, width - 8, 10);
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 8px Arial';
    ctx.fillText('Inner Mitochondrial Membrane', width / 2, memY + 3);

    // Matrix (low H+)
    ctx.fillStyle = '#E8F4F8';
    ctx.fillRect(4, memY + 5, width - 8, height * 0.35);
    ctx.fillStyle = '#2980B9';
    ctx.font = 'bold 9px Arial';
    ctx.fillText('Matrix', width / 2, memY + height * 0.18);
    ctx.font = '9px Arial';
    ctx.fillText('Low [H⁺]  High pH', width / 2, memY + height * 0.27);

    // H+ arrows
    for (let i = 0; i < 4; i++) {
        const ax = width * (0.18 + i * 0.20);
        ctx.fillStyle = '#E74C3C';
        ctx.font = 'bold 9px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('H⁺', ax, memY - 18);

        ctx.strokeStyle = '#E74C3C';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(ax, memY - 12);
        ctx.lineTo(ax, memY + 14);
        ctx.stroke();

        // arrowhead
        ctx.fillStyle = '#E74C3C';
        ctx.beginPath();
        ctx.moveTo(ax, memY + 14);
        ctx.lineTo(ax - 4, memY + 8);
        ctx.lineTo(ax + 4, memY + 8);
        ctx.closePath();
        ctx.fill();
    }

    // PMF label
    ctx.fillStyle = '#8E44AD';
    ctx.font = 'bold 9px Arial';
    ctx.textAlign = 'right';
    ctx.fillText('PMF = ΔpH + ΔΨ', width - 6, height - 6);
}

drawSubstrateLevelVsOxidativeInset(width, height) {
    const ctx = this.ctx;
    ctx.font = 'bold 10px Arial';
    ctx.fillStyle = '#2C3E50';
    ctx.textAlign = 'center';
    ctx.fillText('Substrate vs Oxidative Phosph.', width / 2, 15);

    const cols = [
        { title: 'Substrate-Level', color: '#3498DB', atp: '4 ATP', where: 'Glycolysis &\nKrebs', how: 'Direct phosphate\ntransfer' },
        { title: 'Oxidative',       color: '#E74C3C', atp: '~26-28', where: 'Inner mito.\nmembrane', how: 'Chemiosmosis\nvia ETC' }
    ];

    const colW = (width - 12) / 2;
    cols.forEach((col, i) => {
        const bx = 6 + i * colW;
        const by = height * 0.12;

        ctx.fillStyle = col.color + '22';
        ctx.strokeStyle = col.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(bx, by, colW - 4, height - by - 6, 6);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = col.color;
        ctx.font = 'bold 9px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(col.title, bx + colW / 2 - 2, by + 14);

        ctx.fillStyle = '#2C3E50';
        ctx.font = 'bold 10px Arial';
        ctx.fillText(col.atp, bx + colW / 2 - 2, by + 28);

        ctx.font = '8px Arial';
        col.where.split('\n').forEach((l, li) =>
            ctx.fillText(l, bx + colW / 2 - 2, by + 40 + li * 11));
        col.how.split('\n').forEach((l, li) =>
            ctx.fillText(l, bx + colW / 2 - 2, by + 66 + li * 11));
    });
}

drawQCycleDetailInset(width, height) {
    const ctx = this.ctx;
    ctx.font = 'bold 11px Arial';
    ctx.fillStyle = '#2C3E50';
    ctx.textAlign = 'center';
    ctx.fillText('Q Cycle (Complex III)', width / 2, 15);

    const steps = [
        'QH₂ binds Qo site',
        '1st e⁻ → Rieske Fe-S → Cyt c₁ → Cyt c',
        '2nd e⁻ → Cyt b (low) → Cyt b (high)',
        'Q reduced at Qi site + 2H⁺ from matrix',
        'Net: 4H⁺ released per QH₂ oxidised'
    ];

    const rowH = (height - 30) / steps.length;
    steps.forEach((s, i) => {
        const isLast = i === steps.length - 1;
        const by = 24 + i * rowH;

        ctx.fillStyle = isLast ? '#9B59B6' + '33' : (i % 2 === 0 ? '#F8F9FA' : '#FFFFFF');
        ctx.fillRect(4, by, width - 8, rowH - 2);

        ctx.fillStyle = isLast ? '#9B59B6' : '#2C3E50';
        ctx.font      = isLast ? 'bold 9px Arial' : '9px Arial';
        ctx.textAlign = 'left';

        // number badge
        if (!isLast) {
            ctx.fillStyle = '#9B59B6';
            ctx.beginPath();
            ctx.arc(14, by + rowH / 2, 7, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 8px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(i + 1, 14, by + rowH / 2 + 3);
        }

        ctx.fillStyle = isLast ? '#9B59B6' : '#2C3E50';
        ctx.font      = isLast ? 'bold 9px Arial' : '9px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(s, isLast ? 8 : 26, by + rowH / 2 + 3);
    });
}

drawATPSynthaseRotationInset(width, height) {
    const ctx = this.ctx;
    ctx.font = 'bold 11px Arial';
    ctx.fillStyle = '#2C3E50';
    ctx.textAlign = 'center';
    ctx.fillText('ATP Synthase Rotation', width / 2, 15);

    const cx = width * 0.38, cy = height * 0.50;
    const r  = Math.min(width, height) * 0.22;

    // c-ring
    ctx.strokeStyle = '#27AE60';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.stroke();

    // rotation arrows
    ctx.strokeStyle = '#F39C12';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(cx, cy, r + 10, -Math.PI * 0.9, Math.PI * 0.4);
    ctx.stroke();

    // arrowhead on rotation arc
    const aAngle = Math.PI * 0.4;
    const ax = cx + (r + 10) * Math.cos(aAngle);
    const ay = cy + (r + 10) * Math.sin(aAngle);
    ctx.fillStyle = '#F39C12';
    ctx.beginPath();
    ctx.moveTo(ax, ay);
    ctx.lineTo(ax - 8 * Math.cos(aAngle - Math.PI / 2 + 0.5), ay - 8 * Math.sin(aAngle - Math.PI / 2 + 0.5));
    ctx.lineTo(ax - 8 * Math.cos(aAngle + Math.PI / 2 + 0.5), ay - 8 * Math.sin(aAngle + Math.PI / 2 + 0.5));
    ctx.closePath();
    ctx.fill();

    // central stalk
    ctx.fillStyle = '#229954';
    ctx.fillRect(cx - 6, cy - r * 0.6, 12, r * 1.8);

    // F1 head
    ctx.fillStyle = '#27AE60';
    ctx.beginPath();
    ctx.arc(cx, cy + r * 0.9, r * 0.45, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 9px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('F₁', cx, cy + r * 0.93);

    // labels
    const info = [
        { text: '~100 rev/s',     x: width * 0.70, y: height * 0.28 },
        { text: '3 H⁺ per ATP',   x: width * 0.70, y: height * 0.45 },
        { text: 'β: O→L→T→O',     x: width * 0.70, y: height * 0.62 },
        { text: 'c-ring rotates', x: width * 0.70, y: height * 0.79 },
    ];
    info.forEach(item => {
        ctx.fillStyle = '#2C3E50';
        ctx.font = '9px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(item.text, item.x, item.y);
    });
}

drawProtonMotiveForceInset(width, height) {
    const ctx = this.ctx;
    ctx.font = 'bold 11px Arial';
    ctx.fillStyle = '#2C3E50';
    ctx.textAlign = 'center';
    ctx.fillText('Proton Motive Force (PMF)', width / 2, 15);

    // PMF = ΔΨ + ΔpH components
    const barY = height * 0.26;
    const barH = height * 0.18;

    // ΔΨ bar (electrical)
    ctx.fillStyle = '#3498DB';
    ctx.fillRect(width * 0.08, barY, width * 0.60, barH);
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 9px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('ΔΨ  ~-180 mV  (Electrical)', width * 0.38, barY + barH / 2 + 3);

    // ΔpH bar (chemical)
    const bar2Y = barY + barH + 8;
    ctx.fillStyle = '#E74C3C';
    ctx.fillRect(width * 0.08, bar2Y, width * 0.35, barH);
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 9px Arial';
    ctx.fillText('ΔpH  ~1 unit  (Chemical)', width * 0.255, bar2Y + barH / 2 + 3);

    // Equation
    ctx.fillStyle = '#8E44AD';
    ctx.font = 'bold 10px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('PMF = ΔΨ + (2.303 RT/F) × ΔpH', width / 2, bar2Y + barH + 18);

    ctx.fillStyle = '#27AE60';
    ctx.font = 'bold 10px Arial';
    ctx.fillText('≈ −220 mV total', width / 2, bar2Y + barH + 32);

    ctx.fillStyle = '#7F8C8D';
    ctx.font = '8px Arial';
    ctx.fillText('ΔΨ dominates in mitochondria', width / 2, bar2Y + barH + 46);
    ctx.fillText('ΔpH dominates in chloroplasts', width / 2, bar2Y + barH + 57);
}

drawEtcInhibitorsInset(width, height) {
    const ctx = this.ctx;
    ctx.font = 'bold 11px Arial';
    ctx.fillStyle = '#2C3E50';
    ctx.textAlign = 'center';
    ctx.fillText('ETC Inhibitors', width / 2, 15);

    const inhibitors = [
        { name: 'Rotenone',        target: 'Complex I',   effect: 'Blocks NADH → Q',    color: '#E74C3C' },
        { name: 'Malonate',        target: 'Complex II',  effect: 'Competitive inh.',    color: '#E67E22' },
        { name: 'Antimycin A',     target: 'Complex III', effect: 'Blocks Qi site',      color: '#9B59B6' },
        { name: 'CN⁻ / CO',        target: 'Complex IV',  effect: 'Blocks O₂ binding',  color: '#3498DB' },
        { name: 'Oligomycin',      target: 'ATP Synthase',effect: 'Blocks H⁺ channel',  color: '#27AE60' },
    ];

    const rowH = (height - 28) / inhibitors.length;
    inhibitors.forEach((inh, i) => {
        const by = 22 + i * rowH;

        ctx.fillStyle = inh.color + '22';
        ctx.fillRect(4, by + 1, width - 8, rowH - 3);
        ctx.strokeStyle = inh.color;
        ctx.lineWidth = 1.5;
        ctx.strokeRect(4, by + 1, width - 8, rowH - 3);

        ctx.fillStyle = inh.color;
        ctx.font = 'bold 9px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(inh.name, 9, by + rowH * 0.4 + 3);

        ctx.fillStyle = '#2C3E50';
        ctx.font = '8px Arial';
        ctx.fillText(inh.target + ': ' + inh.effect, 9, by + rowH * 0.75 + 3);
    });
}

drawZSchemeInset(width, height) {
    const ctx = this.ctx;
    ctx.font = 'bold 11px Arial';
    ctx.fillStyle = '#2C3E50';
    ctx.textAlign = 'center';
    ctx.fillText('Z-Scheme (Non-Cyclic e⁻ Flow)', width / 2, 15);

    // Energy axis (vertical, inverted — more negative = top)
    const axisX  = width * 0.10;
    const topY   = height * 0.12;
    const botY   = height * 0.92;
    const axisH  = botY - topY;

    ctx.strokeStyle = '#BDC3C7';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(axisX, topY);
    ctx.lineTo(axisX, botY);
    ctx.stroke();

    ctx.fillStyle = '#7F8C8D';
    ctx.font = '8px Arial';
    ctx.textAlign = 'right';
    ctx.fillText('−1.5 V', axisX - 2, topY + 4);
    ctx.fillText('+0.8 V', axisX - 2, botY);
    ctx.fillText('Redox', axisX - 2, topY - 6);
    ctx.fillText('Pot.', axisX - 2, topY + 2);

    // Key species with positions (fraction of axisH, 0=top/negative)
    const species = [
        { name: 'P680*',    frac: 0.03, x: 0.30, color: '#3498DB' },
        { name: 'Pheo.',    frac: 0.10, x: 0.38, color: '#5DADE2' },
        { name: 'PQ',       frac: 0.40, x: 0.46, color: '#F39C12' },
        { name: 'Cyt b₆f',  frac: 0.47, x: 0.52, color: '#9B59B6' },
        { name: 'PC',       frac: 0.55, x: 0.58, color: '#1ABC9C' },
        { name: 'P700*',    frac: 0.10, x: 0.68, color: '#27AE60' },
        { name: 'Fd',       frac: 0.08, x: 0.76, color: '#E67E22' },
        { name: 'NADP⁺',    frac: 0.18, x: 0.84, color: '#27AE60' },
        { name: 'P680',     frac: 0.78, x: 0.30, color: '#2980B9' },
        { name: 'P700',     frac: 0.60, x: 0.68, color: '#229954' },
    ];

    const byName = {};
    species.forEach(s => {
        s.px = width  * s.x;
        s.py = topY   + axisH * s.frac;
        byName[s.name] = s;
    });

    // Electron flow arrows
    const flows = [
        ['P680*', 'Pheo.'], ['Pheo.', 'PQ'], ['PQ', 'Cyt b₆f'],
        ['Cyt b₆f', 'PC'], ['PC', 'P700*'], ['P700*', 'Fd'], ['Fd', 'NADP⁺']
    ];

    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 2;
    flows.forEach(([a, b]) => {
        const sa = byName[a], sb = byName[b];
        if (!sa || !sb) return;
        ctx.beginPath();
        ctx.moveTo(sa.px, sa.py);
        ctx.lineTo(sb.px, sb.py);
        ctx.stroke();
    });

    // Light excitation arrows
    [['P680', 'P680*'], ['P700', 'P700*']].forEach(([from, to]) => {
        const sf = byName[from], st = byName[to];
        if (!sf || !st) return;
        ctx.strokeStyle = '#F39C12';
        ctx.lineWidth = 2;
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.moveTo(sf.px, sf.py);
        ctx.lineTo(st.px, st.py);
        ctx.stroke();
        ctx.setLineDash([]);
    });

    // Draw species dots + labels
    species.forEach(s => {
        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(s.px, s.py, 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#2C3E50';
        ctx.font = '8px Arial';
        ctx.textAlign = s.x < 0.55 ? 'left' : 'right';
        ctx.fillText(s.name, s.px + (s.x < 0.55 ? 8 : -8), s.py + 3);
    });

    // H2O and O2
    ctx.fillStyle = '#3498DB';
    ctx.font = 'bold 8px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('H₂O → O₂', width * 0.30, botY - 4);

    ctx.fillStyle = '#27AE60';
    ctx.fillText('→ NADPH', width * 0.84, botY - 4);
}

drawCalvinCyclePhasesInset(width, height) {
    const ctx = this.ctx;
    ctx.font = 'bold 11px Arial';
    ctx.fillStyle = '#2C3E50';
    ctx.textAlign = 'center';
    ctx.fillText('Calvin Cycle Phases', width / 2, 15);

    const phases = [
        {
            num: '1', title: 'Carbon Fixation',
            color: '#3498DB',
            lines: ['6 CO₂ + 6 RuBP', '→ 12 × 3-PGA', 'Enzyme: Rubisco']
        },
        {
            num: '2', title: 'Reduction',
            color: '#9B59B6',
            lines: ['12 ATP + 12 NADPH', '→ 12 × G3P', '2 G3P exit → glucose']
        },
        {
            num: '3', title: 'Regeneration',
            color: '#27AE60',
            lines: ['10 G3P + 6 ATP', '→ 6 RuBP', 'Cycle continues']
        }
    ];

    const bh  = (height - 28) / phases.length - 4;
    phases.forEach((ph, i) => {
        const by = 22 + i * (bh + 4);

        ctx.fillStyle = ph.color + '22';
        ctx.strokeStyle = ph.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(4, by, width - 8, bh, 6);
        ctx.fill();
        ctx.stroke();

        // Number badge
        ctx.fillStyle = ph.color;
        ctx.beginPath();
        ctx.arc(16, by + bh / 2, 9, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(ph.num, 16, by + bh / 2 + 4);

        ctx.fillStyle = ph.color;
        ctx.font = 'bold 9px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(ph.title, 30, by + 13);

        ctx.fillStyle = '#2C3E50';
        ctx.font = '8px Arial';
        ph.lines.forEach((l, li) => ctx.fillText(l, 30, by + 25 + li * 11));
    });
}

drawRubiscoMechanismInset(width, height) {
    const ctx = this.ctx;
    ctx.font = 'bold 11px Arial';
    ctx.fillStyle = '#2C3E50';
    ctx.textAlign = 'center';
    ctx.fillText('Rubisco Mechanism', width / 2, 15);

    // Rubisco circle
    const cx = width * 0.40, cy = height * 0.40, r = height * 0.16;
    ctx.fillStyle = '#E74C3C';
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 10px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Rubisco', cx, cy - 5);
    ctx.font = '8px Arial';
    ctx.fillText('(RuBisCO)', cx, cy + 7);

    // CO2 input
    ctx.fillStyle = '#95A5A6';
    ctx.font = '9px Arial';
    ctx.textAlign = 'right';
    ctx.fillText('CO₂', cx - r - 4, cy - 10);
    ctx.strokeStyle = '#95A5A6';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(cx - r - 2, cy - 8);
    ctx.lineTo(cx - r + 6, cy - 4);
    ctx.stroke();

    // RuBP input
    ctx.fillStyle = '#3498DB';
    ctx.textAlign = 'right';
    ctx.fillText('RuBP', cx - r - 4, cy + 12);
    ctx.strokeStyle = '#3498DB';
    ctx.beginPath();
    ctx.moveTo(cx - r - 2, cy + 10);
    ctx.lineTo(cx - r + 6, cy + 4);
    ctx.stroke();

    // 3-PGA output
    ctx.fillStyle = '#9B59B6';
    ctx.textAlign = 'left';
    ctx.fillText('2 × 3-PGA', cx + r + 4, cy + 4);
    ctx.strokeStyle = '#9B59B6';
    ctx.beginPath();
    ctx.moveTo(cx + r - 6, cy + 2);
    ctx.lineTo(cx + r + 2, cy + 4);
    ctx.stroke();

    // Notes
    ctx.fillStyle = '#7F8C8D';
    ctx.font = '8px Arial';
    ctx.textAlign = 'center';
    const notes = [
        'Most abundant enzyme on Earth',
        'Can also fix O₂ (oxygenase activity)',
        'Oxygenase → Photorespiration (wasteful)',
        'C4 & CAM plants reduce this problem'
    ];
    notes.forEach((n, i) => ctx.fillText(n, width / 2, height * 0.70 + i * 11));
}

drawPhotorespirationComparisonInset(width, height) {
    const ctx = this.ctx;
    ctx.font = 'bold 11px Arial';
    ctx.fillStyle = '#2C3E50';
    ctx.textAlign = 'center';
    ctx.fillText('Photosynthesis vs Photorespiration', width / 2, 14);

    const cols = [
        { title: 'Carboxylation',  color: '#27AE60', rows: ['CO₂ + RuBP', '→ 2 × 3-PGA', 'Productive', 'Favoured at', 'high CO₂'] },
        { title: 'Oxygenation',    color: '#E74C3C', rows: ['O₂ + RuBP',  '→ 3-PGA + PG', 'Wasteful',  'Favoured at', 'high O₂ / heat'] }
    ];

    const colW = (width - 12) / 2;
    cols.forEach((col, i) => {
        const bx = 6 + i * colW;
        const by = height * 0.12;
        const bh = height * 0.82;

        ctx.fillStyle = col.color + '22';
        ctx.strokeStyle = col.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(bx, by, colW - 4, bh, 6);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = col.color;
        ctx.font = 'bold 9px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(col.title, bx + colW / 2 - 2, by + 14);

        ctx.fillStyle = '#2C3E50';
        ctx.font = '8px Arial';
        col.rows.forEach((r, ri) => ctx.fillText(r, bx + colW / 2 - 2, by + 28 + ri * 12));
    });
}

drawHighEnergyBondsInset(width, height) {
    const ctx = this.ctx;
    ctx.font = 'bold 11px Arial';
    ctx.fillStyle = '#2C3E50';
    ctx.textAlign = 'center';
    ctx.fillText('High-Energy Phosphate Bonds', width / 2, 15);

    // Simple ATP diagram
    const y   = height * 0.36;
    const r   = 14;
    const gap = 8;
    const parts = [
        { label: 'A', color: '#3498DB', x: width * 0.18 },
        { label: 'P', color: '#27AE60', x: width * 0.38 },
        { label: 'P', color: '#F39C12', x: width * 0.58 },
        { label: 'P', color: '#E74C3C', x: width * 0.78 },
    ];

    parts.forEach((p, i) => {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, y, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(p.label, p.x, y + 4);

        if (i > 0) {
            const prev = parts[i - 1];
            // Squiggly bond for phosphate links
            ctx.strokeStyle = i >= 2 ? '#E74C3C' : '#BDC3C7';
            ctx.lineWidth = i >= 2 ? 3 : 1.5;
            ctx.beginPath();
            const bx = prev.x + r, ex = p.x - r;
            const mid = (bx + ex) / 2;
            ctx.moveTo(bx, y);
            ctx.quadraticCurveTo(mid, y - 8, ex, y);
            ctx.stroke();
        }
    });

    ctx.fillStyle = '#E74C3C';
    ctx.font = '8px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('~ High-energy bonds ~', width * 0.68, y - 16);

    const facts = [
        'ΔG° = −7.3 kcal/mol per bond',
        'Under cellular conditions: ~−12 kcal/mol',
        'ATP → ADP + Pi  (most common)',
        'ATP → AMP + PPi (some reactions)',
        'PPi hydrolysis drives reactions forward',
    ];
    facts.forEach((f, i) => {
        ctx.fillStyle = '#2C3E50';
        ctx.font = '8px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(f, 8, height * 0.58 + i * 12);
    });
}

drawDeltaGValuesInset(width, height) {
    const ctx = this.ctx;
    ctx.font = 'bold 11px Arial';
    ctx.fillStyle = '#2C3E50';
    ctx.textAlign = 'center';
    ctx.fillText('ΔG° of Key Reactions', width / 2, 15);

    const data = [
        { label: 'ATP → ADP + Pi',       dg: -7.3,  color: '#E74C3C' },
        { label: 'ADP → AMP + Pi',       dg: -7.3,  color: '#E67E22' },
        { label: 'Glucose-6-P → G + Pi', dg: -3.3,  color: '#F39C12' },
        { label: 'PEP → Pyruvate + Pi',  dg: -14.8, color: '#9B59B6' },
        { label: 'Creatine-P hydrolysis',dg: -10.3, color: '#3498DB' },
    ];

    const maxVal = 15;
    const barAreaW = width * 0.55;
    const barAreaX = width * 0.42;
    const rowH     = (height - 28) / data.length;

    data.forEach((d, i) => {
        const by = 22 + i * rowH;

        ctx.fillStyle = '#2C3E50';
        ctx.font = '8px Arial';
        ctx.textAlign = 'right';
        ctx.fillText(d.label, barAreaX - 4, by + rowH * 0.65);

        const barW = (Math.abs(d.dg) / maxVal) * barAreaW;
        ctx.fillStyle = d.color;
        ctx.fillRect(barAreaX, by + 2, barW, rowH - 5);

        ctx.fillStyle = '#fff';
        ctx.font = 'bold 8px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(d.dg + ' kcal', barAreaX + barW + 2, by + rowH * 0.65);
    });
}

drawATPUsesInCellInset(width, height) {
    const ctx = this.ctx;
    ctx.font = 'bold 11px Arial';
    ctx.fillStyle = '#2C3E50';
    ctx.textAlign = 'center';
    ctx.fillText('ATP Uses in the Cell', width / 2, 15);

    const uses = [
        { name: 'Muscle Contraction',  pct: 0.30, color: '#E74C3C' },
        { name: 'Active Transport',    pct: 0.25, color: '#3498DB' },
        { name: 'Biosynthesis',        pct: 0.20, color: '#27AE60' },
        { name: 'Nerve Impulses',      pct: 0.12, color: '#F39C12' },
        { name: 'Cell Division',       pct: 0.08, color: '#9B59B6' },
        { name: 'Other',               pct: 0.05, color: '#95A5A6' },
    ];

    const cx = width * 0.38, cy = height * 0.54, r = Math.min(width, height) * 0.26;
    let startAngle = -Math.PI / 2;

    uses.forEach(u => {
        const sweep = u.pct * Math.PI * 2;
        ctx.fillStyle = u.color;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, r, startAngle, startAngle + sweep);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        startAngle += sweep;
    });

    // Legend
    uses.forEach((u, i) => {
        const lx = width * 0.65;
        const ly = height * 0.24 + i * (height * 0.12);
        ctx.fillStyle = u.color;
        ctx.fillRect(lx, ly - 6, 10, 10);
        ctx.fillStyle = '#2C3E50';
        ctx.font = '8px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(`${u.name} (${Math.round(u.pct * 100)}%)`, lx + 13, ly + 3);
    });

    // Fun fact
    ctx.fillStyle = '#7F8C8D';
    ctx.font = 'italic 8px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Body recycles ~40 kg ATP/day!', width / 2, height - 5);
}

drawPhosphorylationTypesInset(width, height) {
    const ctx = this.ctx;
    ctx.font = 'bold 11px Arial';
    ctx.fillStyle = '#2C3E50';
    ctx.textAlign = 'center';
    ctx.fillText('Types of Phosphorylation', width / 2, 15);

    const types = [
        {
            title: 'Substrate-Level',
            color: '#3498DB',
            lines: ['Direct phosphate transfer', 'from high-energy compound', 'Site: cytosol & matrix', 'Yield: 4 ATP/glucose']
        },
        {
            title: 'Oxidative',
            color: '#E74C3C',
            lines: ['Via ETC + chemiosmosis', 'ATP synthase driven by H⁺', 'Site: inner mito. membrane', 'Yield: ~26-28 ATP/glucose']
        },
        {
            title: 'Photophosphorylation',
            color: '#27AE60',
            lines: ['Light drives electron flow', 'H⁺ gradient in thylakoid', 'Site: thylakoid membrane', 'Yield: varies with light']
        }
    ];

    const bh = (height - 28) / types.length - 3;
    types.forEach((t, i) => {
        const by = 22 + i * (bh + 3);
        ctx.fillStyle = t.color + '22';
        ctx.strokeStyle = t.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(4, by, width - 8, bh, 5);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = t.color;
        ctx.font = 'bold 9px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(t.title, 8, by + 13);

        ctx.fillStyle = '#2C3E50';
        ctx.font = '8px Arial';
        t.lines.forEach((l, li) => ctx.fillText(l, 8, by + 26 + li * 10));
    });
}

drawMembranePermeabilityInset(width, height) {
    const ctx = this.ctx;
    ctx.font = 'bold 11px Arial';
    ctx.fillStyle = '#2C3E50';
    ctx.textAlign = 'center';
    ctx.fillText('Membrane Permeability', width / 2, 15);

    const membranes = [
        {
            name: 'Outer Membrane',
            color: '#D4AF87',
            permeable: ['Small molecules <5kDa', 'Ions', 'ATP/ADP', 'Pyruvate'],
            impermeable: []
        },
        {
            name: 'Inner Membrane',
            color: '#C19A6B',
            permeable: ['Specific transporters only', 'O₂, CO₂, H₂O (passive)'],
            impermeable: ['H⁺ (critical!)', 'Most ions', 'NADH', 'Pyruvate (needs carrier)']
        }
    ];

    const rowH = (height - 24) / membranes.length - 4;
    membranes.forEach((m, i) => {
        const by = 22 + i * (rowH + 4);
        ctx.fillStyle = m.color + '44';
        ctx.strokeStyle = m.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(4, by, width - 8, rowH, 5);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#2C3E50';
        ctx.font = 'bold 9px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(m.name, 8, by + 12);

        if (m.permeable.length) {
            ctx.fillStyle = '#27AE60';
            ctx.font = 'bold 8px Arial';
            ctx.fillText('✓ Permeable:', 8, by + 24);
            ctx.font = '8px Arial';
            m.permeable.forEach((p, pi) => ctx.fillText(p, 14, by + 35 + pi * 10));
        }

        if (m.impermeable.length) {
            const impX = width * 0.50;
            ctx.fillStyle = '#E74C3C';
            ctx.font = 'bold 8px Arial';
            ctx.fillText('✗ Impermeable:', impX, by + 24);
            ctx.font = '8px Arial';
            m.impermeable.forEach((p, pi) => ctx.fillText(p, impX + 6, by + 35 + pi * 10));
        }
    });
}

drawCristaeSurfaceAreaInset(width, height) {
    const ctx = this.ctx;
    ctx.font = 'bold 11px Arial';
    ctx.fillStyle = '#2C3E50';
    ctx.textAlign = 'center';
    ctx.fillText('Cristae & Surface Area', width / 2, 15);

    // Simple comparison: flat vs folded
    const flatY   = height * 0.35;
    const foldedY = height * 0.65;
    const lx = width * 0.08, rx = width * 0.62;

    // Flat inner membrane
    ctx.strokeStyle = '#C19A6B';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(lx, flatY);
    ctx.lineTo(rx, flatY);
    ctx.stroke();
    ctx.fillStyle = '#2C3E50';
    ctx.font = '9px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Flat', rx + 4, flatY + 4);
    ctx.fillText('↓ less ATP', rx + 4, flatY + 16);

    // Folded (cristae)
    ctx.strokeStyle = '#8B6914';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(lx, foldedY);
    for (let xi = 0; xi <= 8; xi++) {
        const fx = lx + (rx - lx) * xi / 8;
        const fy = foldedY + (xi % 2 === 0 ? 0 : -20);
        xi === 0 ? ctx.moveTo(fx, fy) : ctx.lineTo(fx, fy);
    }
    ctx.stroke();
    ctx.fillStyle = '#2C3E50';
    ctx.font = '9px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Cristae', rx + 4, foldedY - 8);
    ctx.fillText('↑ more ATP', rx + 4, foldedY + 4);

    // Stats
    ctx.fillStyle = '#7F8C8D';
    ctx.font = '8px Arial';
    ctx.textAlign = 'center';
    const stats = [
        'Cristae increase surface area 5–10×',
        'Heart muscle: very dense cristae',
        'Liver: fewer, less densely packed',
        'More cristae = more ATP synthase = more ATP'
    ];
    stats.forEach((s, i) => ctx.fillText(s, width / 2, height * 0.78 + i * 11));
}

drawImportMachineryInset(width, height) {
    const ctx = this.ctx;
    ctx.font = 'bold 11px Arial';
    ctx.fillStyle = '#2C3E50';
    ctx.textAlign = 'center';
    ctx.fillText('Mitochondrial Protein Import', width / 2, 15);

    // Outer membrane with TOM
    const outerY = height * 0.32;
    ctx.fillStyle = '#D4AF87';
    ctx.fillRect(width * 0.08, outerY - 6, width * 0.84, 12);
    ctx.fillStyle = '#2C3E50';
    ctx.font = '8px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Outer Membrane', width * 0.08, outerY - 10);

    // TOM complex
    ctx.fillStyle = '#3498DB';
    ctx.fillRect(width * 0.40, outerY - 12, width * 0.18, 24);
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 9px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('TOM', width * 0.49, outerY + 4);

    // Intermembrane space
    ctx.fillStyle = '#E8D4B8';
    ctx.fillRect(width * 0.08, outerY + 6, width * 0.84, height * 0.18);

    // Inner membrane with TIM
    const innerY = outerY + height * 0.22;
    ctx.fillStyle = '#C19A6B';
    ctx.fillRect(width * 0.08, innerY - 6, width * 0.84, 12);
    ctx.fillStyle = '#2C3E50';
    ctx.font = '8px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Inner Membrane', width * 0.08, innerY - 10);

    // TIM complex
    ctx.fillStyle = '#E67E22';
    ctx.fillRect(width * 0.40, innerY - 12, width * 0.18, 24);
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 9px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('TIM', width * 0.49, innerY + 4);

    // Protein arrow
    ctx.strokeStyle = '#9B59B6';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(width * 0.49, height * 0.12);
    ctx.lineTo(width * 0.49, innerY + 14);
    ctx.stroke();
    ctx.fillStyle = '#9B59B6';
    ctx.beginPath();
    ctx.moveTo(width * 0.49, innerY + 14);
    ctx.lineTo(width * 0.49 - 5, innerY + 6);
    ctx.lineTo(width * 0.49 + 5, innerY + 6);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = '#9B59B6';
    ctx.font = '8px Arial';
    ctx.textAlign = 'right';
    ctx.fillText('Cytosolic', width * 0.42, height * 0.12);
    ctx.fillText('precursor', width * 0.42, height * 0.12 + 10);
    ctx.fillText('protein', width * 0.42, height * 0.12 + 20);

    // Notes
    ctx.fillStyle = '#7F8C8D';
    ctx.font = '8px Arial';
    ctx.textAlign = 'center';
    const notes = [
        '~99% of mito proteins nuclear-encoded',
        'N-terminal targeting sequence guides import',
        'Hsp70 chaperones assist unfolding'
    ];
    notes.forEach((n, i) => ctx.fillText(n, width / 2, innerY + 28 + i * 11));
}

drawEndosymbiosisInset(width, height) {
    const ctx = this.ctx;
    ctx.font = 'bold 11px Arial';
    ctx.fillStyle = '#2C3E50';
    ctx.textAlign = 'center';
    ctx.fillText('Endosymbiotic Theory', width / 2, 15);

    const steps = [
        { text: 'Ancestral eukaryote engulfs α-proteobacterium', color: '#3498DB', icon: '🔵' },
        { text: 'Bacterium survives → endosymbiont',             color: '#27AE60', icon: '🟢' },
        { text: 'Genes transfer to nucleus over time',           color: '#F39C12', icon: '🟡' },
        { text: 'Result: Modern mitochondrion',                  color: '#E74C3C', icon: '🔴' },
    ];

    const rowH = (height - 28) / steps.length - 3;
    steps.forEach((s, i) => {
        const by = 22 + i * (rowH + 3);
        ctx.fillStyle = s.color + '22';
        ctx.strokeStyle = s.color;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(4, by, width - 8, rowH, 5);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#2C3E50';
        ctx.font = '9px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(`${i + 1}. ${s.text}`, 10, by + rowH / 2 + 3);
    });

    // Evidence
    ctx.fillStyle = '#7F8C8D';
    ctx.font = 'italic 8px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Evidence: double membrane, 70S ribosomes, circular DNA', width / 2, height - 4);
}

drawThylakoidMembraneProteinsInset(width, height) {
    const ctx = this.ctx;
    ctx.font = 'bold 11px Arial';
    ctx.fillStyle = '#2C3E50';
    ctx.textAlign = 'center';
    ctx.fillText('Thylakoid Membrane Proteins', width / 2, 15);

    const memY = height * 0.50;

    // Thylakoid lumen
    ctx.fillStyle = '#FFF9E0';
    ctx.fillRect(4, height * 0.15, width - 8, memY - height * 0.15);
    ctx.fillStyle = '#F39C12';
    ctx.font = '8px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Thylakoid Lumen', width / 2, height * 0.23);

    // Membrane
    ctx.fillStyle = '#66BB6A';
    ctx.fillRect(4, memY - 14, width - 8, 28);

    // Stroma
    ctx.fillStyle = '#E8F5E9';
    ctx.fillRect(4, memY + 14, width - 8, height * 0.35);
    ctx.fillStyle = '#27AE60';
    ctx.font = '8px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Stroma', width / 2, memY + height * 0.24);

    // Proteins
    const proteins = [
        { name: 'PSII', x: 0.16, color: '#3498DB',  location: 'grana' },
        { name: 'Cyt b₆f', x: 0.36, color: '#9B59B6', location: 'both' },
        { name: 'PSI',  x: 0.56, color: '#27AE60',  location: 'stroma lamellae' },
        { name: 'ATP Syn', x: 0.78, color: '#E67E22', location: 'both' },
    ];

    proteins.forEach(p => {
        ctx.fillStyle = p.color;
        ctx.fillRect(width * p.x - 14, memY - 18, 28, 36);
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 8px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(p.name, width * p.x, memY + 3);

        ctx.fillStyle = '#2C3E50';
        ctx.font = '7px Arial';
        ctx.fillText(p.location, width * p.x, memY + 26);
    });
}

drawGranaStackingReasonInset(width, height) {
    const ctx = this.ctx;
    ctx.font = 'bold 11px Arial';
    ctx.fillStyle = '#2C3E50';
    ctx.textAlign = 'center';
    ctx.fillText('Why Do Grana Stack?', width / 2, 15);

    const reasons = [
        { title: 'Maximises light absorption',    color: '#F39C12', note: 'More PSII per volume' },
        { title: 'Separates PSII from PSI',        color: '#3498DB', note: 'Prevents excitation spillover' },
        { title: 'Increases H⁺ gradient',          color: '#E74C3C', note: 'Lumen more concentrated' },
        { title: 'Regulates light harvesting',     color: '#9B59B6', note: 'State transitions possible' },
        { title: 'Structural stability',           color: '#27AE60', note: 'LHCII drives adhesion' },
    ];

    const rowH = (height - 24) / reasons.length - 2;
    reasons.forEach((r, i) => {
        const by = 22 + i * (rowH + 2);
        ctx.fillStyle = r.color + '22';
        ctx.strokeStyle = r.color;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(4, by, width - 8, rowH, 4);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = r.color;
        ctx.font = 'bold 8px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(r.title, 8, by + rowH * 0.44);
        ctx.fillStyle = '#555';
        ctx.font = '8px Arial';
        ctx.fillText(r.note, 8, by + rowH * 0.80);
    });
}

drawStromaVsThylakoidInset(width, height) {
    const ctx = this.ctx;
    ctx.font = 'bold 11px Arial';
    ctx.fillStyle = '#2C3E50';
    ctx.textAlign = 'center';
    ctx.fillText('Stroma vs Thylakoid', width / 2, 15);

    const cols = [
        {
            name: 'Stroma',
            color: '#27AE60',
            items: ['Calvin cycle', 'Rubisco', 'cpDNA', '70S ribosomes', 'Starch grains', 'Low [H⁺]']
        },
        {
            name: 'Thylakoid',
            color: '#F39C12',
            items: ['Light reactions', 'PSII, PSI', 'Cyt b₆f', 'ATP synthase', 'H⁺ gradient', 'O₂ produced']
        }
    ];

    const colW = (width - 12) / 2;
    cols.forEach((col, i) => {
        const bx = 6 + i * colW;
        const by = height * 0.12;

        ctx.fillStyle = col.color + '22';
        ctx.strokeStyle = col.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(bx, by, colW - 4, height - by - 6, 6);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = col.color;
        ctx.font = 'bold 10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(col.name, bx + colW / 2 - 2, by + 14);

        ctx.fillStyle = '#2C3E50';
        ctx.font = '8px Arial';
        col.items.forEach((item, ii) =>
            ctx.fillText('• ' + item, bx + 6, by + 28 + ii * 12));
    });
}

drawCpVsMitoInset(width, height) {
    const ctx = this.ctx;
    ctx.font = 'bold 11px Arial';
    ctx.fillStyle = '#2C3E50';
    ctx.textAlign = 'center';
    ctx.fillText('Chloroplast vs Mitochondrion', width / 2, 15);

    const rows = [
        { feature: 'Function',      cp: 'Photosynthesis',     mito: 'Respiration'     },
        { feature: 'Membranes',     cp: '3 (+ thylakoid)',    mito: '2'               },
        { feature: 'DNA',           cp: 'Circular (cpDNA)',   mito: 'Circular (mtDNA)'},
        { feature: 'Ribosomes',     cp: '70S',                mito: '70S'             },
        { feature: 'Products',      cp: 'Glucose, O₂',        mito: 'ATP, CO₂, H₂O'  },
        { feature: 'H⁺ gradient',   cp: 'Into lumen',         mito: 'Into IMS'        },
        { feature: 'Origin',        cp: 'Cyanobacterium',     mito: 'α-proteobacterium'},
    ];

    const rowH = (height - 32) / (rows.length + 1);
    const colW = (width - 8) / 3;

    // Header
    ['Feature', 'Chloroplast', 'Mitochondrion'].forEach((h, i) => {
        ctx.fillStyle = i === 1 ? '#27AE60' : (i === 2 ? '#E74C3C' : '#2C3E50');
        ctx.font = 'bold 9px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(h, 4 + colW * i + colW / 2, 30);
    });

    ctx.strokeStyle = '#BDC3C7';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(4, 34);
    ctx.lineTo(width - 4, 34);
    ctx.stroke();

    rows.forEach((row, ri) => {
        const y = 34 + rowH * (ri + 1);
        if (ri % 2 === 0) {
            ctx.fillStyle = '#F8F9FA';
            ctx.fillRect(4, y - rowH * 0.8, width - 8, rowH);
        }

        ctx.fillStyle = '#2C3E50';
        ctx.font = 'bold 8px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(row.feature, 8, y);

        ctx.font = '8px Arial';
        ctx.fillStyle = '#27AE60';
        ctx.textAlign = 'center';
        ctx.fillText(row.cp, 4 + colW * 1.5, y);

        ctx.fillStyle = '#E74C3C';
        ctx.fillText(row.mito, 4 + colW * 2.5, y);
    });
}



// ═══════════════════════════════════════════════════════════════════════════
// IMMUNE RESPONSE INSETS
// ═══════════════════════════════════════════════════════════════════════════

drawTollLikeReceptorsInset(width, height) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Toll-Like Receptors (PRRs)', width / 2, 16);

    // Cell membrane
    this.ctx.fillStyle = '#FFE4C4';
    this.ctx.fillRect(width * 0.05, height * 0.35, width * 0.9, height * 0.28);
    this.ctx.strokeStyle = '#8B4513';
    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(width * 0.05, height * 0.35, width * 0.9, height * 0.28);

    this.ctx.font = 'bold 9px Arial';
    this.ctx.fillStyle = '#8B4513';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Cell Membrane', width * 0.07, height * 0.34);

    // TLR proteins spanning membrane
    const tlrs = [
        { x: 0.2,  lig: 'LPS',   color: '#E74C3C', name: 'TLR4' },
        { x: 0.45, lig: 'dsRNA', color: '#E67E22', name: 'TLR3' },
        { x: 0.70, lig: 'CpG',   color: '#9B59B6', name: 'TLR9' }
    ];

    tlrs.forEach(tlr => {
        const cx = width * tlr.x;

        // Extracellular domain (leucine-rich repeats)
        this.ctx.fillStyle = tlr.color;
        this.ctx.beginPath();
        this.ctx.ellipse(cx, height * 0.30, 14, 10, 0, 0, Math.PI * 2);
        this.ctx.fill();

        // Transmembrane domain
        this.ctx.fillStyle = tlr.color;
        this.ctx.fillRect(cx - 5, height * 0.35, 10, height * 0.28);

        // Intracellular TIR domain
        this.ctx.beginPath();
        this.ctx.ellipse(cx, height * 0.70, 14, 10, 0, 0, Math.PI * 2);
        this.ctx.fill();

        // Ligand
        this.ctx.fillStyle = '#8B0000';
        this.ctx.beginPath();
        this.ctx.arc(cx, height * 0.18, 8, 0, Math.PI * 2);
        this.ctx.fill();

        // Binding dashes
        this.ctx.strokeStyle = '#555';
        this.ctx.lineWidth = 1;
        this.ctx.setLineDash([2, 2]);
        this.ctx.beginPath();
        this.ctx.moveTo(cx, height * 0.26);
        this.ctx.lineTo(cx, height * 0.22);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        // Labels
        this.ctx.font = '8px Arial';
        this.ctx.fillStyle = '#fff';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(tlr.lig, cx, height * 0.19);
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.fillText(tlr.name, cx, height * 0.31);
    });

    // NF-κB signaling arrow
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.45, height * 0.72);
    this.ctx.lineTo(width * 0.45, height * 0.83);
    this.ctx.stroke();
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.45, height * 0.83);
    this.ctx.lineTo(width * 0.41, height * 0.79);
    this.ctx.lineTo(width * 0.49, height * 0.79);
    this.ctx.closePath();
    this.ctx.fill();

    this.ctx.font = '9px Arial';
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('NF-κB → Cytokines', width * 0.45, height * 0.91);
}

drawCytokineSignalingInset(width, height) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Cytokine Signaling', width / 2, 16);

    // Source cell
    this.ctx.fillStyle = '#FFB366';
    this.ctx.beginPath();
    this.ctx.arc(width * 0.22, height * 0.40, 22, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.strokeStyle = '#FF8C00';
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#fff';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Source', width * 0.22, height * 0.38);
    this.ctx.fillText('Cell', width * 0.22, height * 0.45);

    // Cytokine molecules radiating
    const cytokines = [
        { x: 0.42, y: 0.28, label: 'IL-1β', color: '#E74C3C' },
        { x: 0.48, y: 0.42, label: 'TNF-α', color: '#E67E22' },
        { x: 0.42, y: 0.56, label: 'IL-6',  color: '#F39C12' }
    ];

    cytokines.forEach(cyt => {
        // Arrow from source
        this.ctx.strokeStyle = cyt.color;
        this.ctx.lineWidth = 1.5;
        this.ctx.setLineDash([3, 2]);
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.30, height * 0.40);
        this.ctx.lineTo(width * cyt.x - 8, height * cyt.y);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        // Cytokine dot
        this.ctx.fillStyle = cyt.color;
        this.ctx.beginPath();
        this.ctx.arc(width * cyt.x, height * cyt.y, 7, 0, Math.PI * 2);
        this.ctx.fill();

        this.ctx.font = '8px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'left';
        this.ctx.fillText(cyt.label, width * cyt.x + 10, height * cyt.y + 3);
    });

    // Target cell
    this.ctx.fillStyle = '#4169E1';
    this.ctx.beginPath();
    this.ctx.arc(width * 0.75, height * 0.42, 22, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.strokeStyle = '#2040A0';
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#fff';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Target', width * 0.75, height * 0.40);
    this.ctx.fillText('Cell', width * 0.75, height * 0.47);

    // Receptor on target
    this.ctx.fillStyle = '#FFD700';
    this.ctx.beginPath();
    this.ctx.arc(width * 0.75 - 22, height * 0.38, 5, 0, Math.PI * 2);
    this.ctx.fill();

    // Arrows to target
    cytokines.forEach(cyt => {
        this.ctx.strokeStyle = cyt.color;
        this.ctx.lineWidth = 1.5;
        this.ctx.setLineDash([3, 2]);
        this.ctx.beginPath();
        this.ctx.moveTo(width * cyt.x + 7, height * cyt.y);
        this.ctx.lineTo(width * 0.75 - 22, height * 0.40);
        this.ctx.stroke();
        this.ctx.setLineDash([]);
    });

    // Effects box
    this.ctx.fillStyle = 'rgba(240,248,255,0.8)';
    this.ctx.fillRect(width * 0.08, height * 0.72, width * 0.84, height * 0.23);
    this.ctx.strokeStyle = '#BDC3C7';
    this.ctx.lineWidth = 1;
    this.ctx.strokeRect(width * 0.08, height * 0.72, width * 0.84, height * 0.23);

    this.ctx.font = 'bold 8px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Effects: fever • inflammation • cell proliferation • differentiation', width * 0.10, height * 0.82);
    this.ctx.font = '8px Arial';
    this.ctx.fillText('JAK-STAT pathway activated upon receptor binding', width * 0.10, height * 0.90);
}

drawMHCPresentationInset(width, height) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('MHC Antigen Presentation', width / 2, 16);

    const cx = width * 0.5;

    // APC cell body
    this.ctx.fillStyle = '#FFB366';
    this.ctx.beginPath();
    this.ctx.arc(cx, height * 0.48, 38, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.strokeStyle = '#FF8C00';
    this.ctx.lineWidth = 2;
    this.ctx.stroke();

    // Dendritic extensions
    for (let i = 0; i < 5; i++) {
        const angle = (Math.PI * 2 * i) / 5 + 0.2;
        this.ctx.strokeStyle = '#FFB366';
        this.ctx.lineWidth = 4;
        this.ctx.beginPath();
        this.ctx.moveTo(cx + Math.cos(angle) * 38, height * 0.48 + Math.sin(angle) * 38);
        this.ctx.lineTo(cx + Math.cos(angle) * 55, height * 0.48 + Math.sin(angle) * 55);
        this.ctx.stroke();
    }

    // MHC II molecule on surface
    this.ctx.fillStyle = '#9370DB';
    this.ctx.fillRect(cx - 12, height * 0.26, 24, 12);
    this.ctx.fillStyle = '#FFD700';
    this.ctx.fillRect(cx - 6, height * 0.21, 12, 6);   // peptide groove

    // T cell receptor approaching
    this.ctx.fillStyle = '#4169E1';
    this.ctx.beginPath();
    this.ctx.arc(cx, height * 0.12, 14, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#fff';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('TCR', cx, height * 0.13);

    // Dashed binding line
    this.ctx.strokeStyle = '#FFD700';
    this.ctx.lineWidth = 1.5;
    this.ctx.setLineDash([2, 2]);
    this.ctx.beginPath();
    this.ctx.moveTo(cx, height * 0.18);
    this.ctx.lineTo(cx, height * 0.23);
    this.ctx.stroke();
    this.ctx.setLineDash([]);

    // Labels
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#9370DB';
    this.ctx.textAlign = 'right';
    this.ctx.fillText('MHC II', cx - 14, height * 0.34);
    this.ctx.fillStyle = '#FFD700';
    this.ctx.fillText('Peptide', cx - 14, height * 0.26);
    this.ctx.fillStyle = '#FF8C00';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('APC', cx + 42, height * 0.50);

    // Bottom note
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('CD4⁺ T cell activation', cx, height * 0.90);
    this.ctx.fillText('MHC I → CD8⁺ (cytotoxic)', cx, height * 0.95);
}

drawClonalSelectionInset(width, height) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Clonal Selection', width / 2, 16);

    // Antigen in centre
    this.ctx.fillStyle = '#8B0000';
    this.ctx.beginPath();
    this.ctx.arc(width * 0.5, height * 0.38, 14, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#fff';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Ag', width * 0.5, height * 0.39);

    // Diverse B cell pool
    const bcells = [
        { x: 0.18, y: 0.30, match: false, color: '#E6E6FA' },
        { x: 0.28, y: 0.20, match: false, color: '#E6E6FA' },
        { x: 0.50, y: 0.15, match: true,  color: '#00CED1' },  // selected
        { x: 0.72, y: 0.20, match: false, color: '#E6E6FA' },
        { x: 0.82, y: 0.30, match: false, color: '#E6E6FA' }
    ];

    bcells.forEach(bc => {
        this.ctx.fillStyle = bc.color;
        this.ctx.beginPath();
        this.ctx.arc(width * bc.x, height * bc.y, 12, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = bc.match ? '#008B8B' : '#888';
        this.ctx.lineWidth = bc.match ? 2.5 : 1;
        this.ctx.stroke();

        if (bc.match) {
            // Arrow to antigen
            this.ctx.strokeStyle = '#008B8B';
            this.ctx.lineWidth = 1.5;
            this.ctx.beginPath();
            this.ctx.moveTo(width * bc.x, height * bc.y + 12);
            this.ctx.lineTo(width * 0.5, height * 0.38 - 14);
            this.ctx.stroke();
        }
    });

    // Clonal expansion
    const expanded = [
        { x: 0.30, y: 0.60 }, { x: 0.40, y: 0.65 }, { x: 0.50, y: 0.68 },
        { x: 0.60, y: 0.65 }, { x: 0.70, y: 0.60 }, { x: 0.35, y: 0.75 },
        { x: 0.50, y: 0.80 }, { x: 0.65, y: 0.75 }
    ];

    expanded.forEach(e => {
        this.ctx.fillStyle = '#00CED1';
        this.ctx.beginPath();
        this.ctx.arc(width * e.x, height * e.y, 9, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = '#008B8B';
        this.ctx.lineWidth = 1.5;
        this.ctx.stroke();
    });

    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#008B8B';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Clonal Expansion', width * 0.5, height * 0.88);
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.fillText('One B cell → many identical clones', width * 0.5, height * 0.94);
}

// ═══════════════════════════════════════════════════════════════════════════
// VACCINATION INSETS
// ═══════════════════════════════════════════════════════════════════════════

drawAntibodyTiterInset(width, height) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Antibody Titer Over Time', width / 2, 16);

    const gx = width * 0.14, gy = height * 0.22;
    const gw = width * 0.80, gh = height * 0.58;

    // Axes
    this.ctx.strokeStyle = '#2C3E50';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(gx, gy);
    this.ctx.lineTo(gx, gy + gh);
    this.ctx.lineTo(gx + gw, gy + gh);
    this.ctx.stroke();

    // Axis labels
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Time', gx + gw / 2, gy + gh + 14);
    this.ctx.save();
    this.ctx.translate(gx - 14, gy + gh / 2);
    this.ctx.rotate(-Math.PI / 2);
    this.ctx.fillText('Ab Titer', 0, 0);
    this.ctx.restore();

    // Primary response curve (blue, dashed)
    this.ctx.strokeStyle = '#4169E1';
    this.ctx.lineWidth = 2;
    this.ctx.setLineDash([4, 3]);
    this.ctx.beginPath();
    this.ctx.moveTo(gx,            gy + gh);
    this.ctx.bezierCurveTo(
        gx + gw * 0.20, gy + gh,
        gx + gw * 0.30, gy + gh * 0.35,
        gx + gw * 0.42, gy + gh * 0.30
    );
    this.ctx.bezierCurveTo(
        gx + gw * 0.50, gy + gh * 0.25,
        gx + gw * 0.55, gy + gh * 0.60,
        gx + gw * 0.60, gy + gh
    );
    this.ctx.stroke();
    this.ctx.setLineDash([]);

    // Second dose marker
    this.ctx.strokeStyle = '#888';
    this.ctx.lineWidth = 1;
    this.ctx.setLineDash([4, 4]);
    this.ctx.beginPath();
    this.ctx.moveTo(gx + gw * 0.60, gy);
    this.ctx.lineTo(gx + gw * 0.60, gy + gh);
    this.ctx.stroke();
    this.ctx.setLineDash([]);
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#555';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('2nd dose', gx + gw * 0.60, gy - 4);

    // Secondary response curve (red, solid, higher)
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 2.5;
    this.ctx.beginPath();
    this.ctx.moveTo(gx + gw * 0.60, gy + gh);
    this.ctx.bezierCurveTo(
        gx + gw * 0.68, gy + gh,
        gx + gw * 0.70, gy + gh * 0.06,
        gx + gw * 0.76, gy + gh * 0.04
    );
    this.ctx.bezierCurveTo(
        gx + gw * 0.82, gy + gh * 0.02,
        gx + gw * 0.88, gy + gh * 0.18,
        gx + gw,        gy + gh * 0.15
    );
    this.ctx.stroke();

    // Legend
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#4169E1';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('─ ─ Primary (slow, lower)', gx, gy + gh + 28);
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.fillText('—— Secondary (fast, high)', gx, gy + gh + 40);
}

drawBCellActivationInset(width, height) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('B Cell Activation', width / 2, 16);

    // Antigen
    this.ctx.fillStyle = '#8B0000';
    this.ctx.beginPath();
    this.ctx.arc(width * 0.22, height * 0.38, 16, 0, Math.PI * 2);
    this.ctx.fill();
    for (let i = 0; i < 6; i++) {
        const a = (Math.PI * 2 * i) / 6;
        this.ctx.fillStyle = '#FF0000';
        this.ctx.beginPath();
        this.ctx.arc(width * 0.22 + Math.cos(a) * 18, height * 0.38 + Math.sin(a) * 18, 4, 0, Math.PI * 2);
        this.ctx.fill();
    }
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#8B0000';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Antigen', width * 0.22, height * 0.58);

    // BCR binding arrow
    this.ctx.strokeStyle = '#888';
    this.ctx.lineWidth = 1.5;
    this.ctx.setLineDash([3, 2]);
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.38, height * 0.38);
    this.ctx.lineTo(width * 0.28, height * 0.38);
    this.ctx.stroke();
    this.ctx.setLineDash([]);

    // B cell
    this.ctx.fillStyle = '#00CED1';
    this.ctx.beginPath();
    this.ctx.arc(width * 0.50, height * 0.38, 24, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.strokeStyle = '#008B8B';
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#fff';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('B Cell', width * 0.50, height * 0.39);

    // T helper signal
    this.ctx.fillStyle = '#4169E1';
    this.ctx.beginPath();
    this.ctx.arc(width * 0.78, height * 0.28, 16, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#fff';
    this.ctx.fillText('Th', width * 0.78, height * 0.29);

    this.ctx.strokeStyle = '#4169E1';
    this.ctx.lineWidth = 1.5;
    this.ctx.setLineDash([3, 2]);
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.78, height * 0.35);
    this.ctx.lineTo(width * 0.64, height * 0.40);
    this.ctx.stroke();
    this.ctx.setLineDash([]);

    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#4169E1';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('CD40L / IL-2', width * 0.72, height * 0.30);

    // Arrow to plasma cell
    this.ctx.strokeStyle = '#2C3E50';
    this.ctx.lineWidth = 1.5;
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.50, height * 0.56);
    this.ctx.lineTo(width * 0.50, height * 0.66);
    this.ctx.stroke();

    // Plasma cell
    this.ctx.fillStyle = '#9370DB';
    this.ctx.beginPath();
    this.ctx.arc(width * 0.50, height * 0.78, 18, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#fff';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Plasma', width * 0.50, height * 0.76);
    this.ctx.fillText('Cell', width * 0.50, height * 0.82);

    // Antibody icons
    for (let i = 0; i < 3; i++) {
        AnatomicalShapes.drawAntibody(this.ctx, width * (0.68 + i * 0.10), height * 0.78, 8);
    }
}

drawMemoryLongevityInset(width, height) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Memory Cell Longevity', width / 2, 16);

    const gx = width * 0.16, gy = height * 0.22;
    const gw = width * 0.78, gh = height * 0.55;

    // Axes
    this.ctx.strokeStyle = '#2C3E50';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(gx, gy);
    this.ctx.lineTo(gx, gy + gh);
    this.ctx.lineTo(gx + gw, gy + gh);
    this.ctx.stroke();

    // Y-axis label
    this.ctx.save();
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.translate(gx - 12, gy + gh / 2);
    this.ctx.rotate(-Math.PI / 2);
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Cell Number', 0, 0);
    this.ctx.restore();

    // X-axis years
    const years = ['0', '1', '5', '10', '20+'];
    years.forEach((yr, i) => {
        const xp = gx + (i / (years.length - 1)) * gw;
        this.ctx.font = '7px Arial';
        this.ctx.fillStyle = '#555';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(yr + 'y', xp, gy + gh + 12);
    });

    // Effector cell curve (fast decay)
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(gx, gy + gh * 0.05);
    this.ctx.bezierCurveTo(
        gx + gw * 0.10, gy + gh * 0.05,
        gx + gw * 0.18, gy + gh * 0.80,
        gx + gw * 0.28, gy + gh * 0.95
    );
    this.ctx.lineTo(gx + gw, gy + gh * 0.95);
    this.ctx.stroke();

    // Memory cell curve (slow, sustained)
    this.ctx.strokeStyle = '#9370DB';
    this.ctx.lineWidth = 2.5;
    this.ctx.beginPath();
    this.ctx.moveTo(gx, gy + gh * 0.05);
    this.ctx.bezierCurveTo(
        gx + gw * 0.20, gy + gh * 0.10,
        gx + gw * 0.50, gy + gh * 0.28,
        gx + gw,        gy + gh * 0.32
    );
    this.ctx.stroke();

    // Legend
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('— Effector cells (short-lived)', gx, gy + gh + 28);
    this.ctx.fillStyle = '#9370DB';
    this.ctx.fillText('— Memory cells (decades)', gx, gy + gh + 40);

    // Bone marrow niche note
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.fillText('Bone marrow niches sustain long-lived plasma cells', gx, gy + gh + 52);
}

drawHerdImmunityThresholdInset(width, height) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Herd Immunity Threshold', width / 2, 16);

    // Formula
    this.ctx.font = 'bold 12px Arial';
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('H = 1 − 1/R₀', width / 2, height * 0.24);

    // Population grid
    const cols = 8, rows = 5;
    const cellW = (width * 0.80) / cols;
    const cellH = (height * 0.38) / rows;
    const startX = width * 0.10;
    const startY = height * 0.32;

    // ~70% immune (green), rest susceptible (red)
    const immuneCount = Math.round(cols * rows * 0.72);
    let idx = 0;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const px = startX + c * cellW + cellW / 2;
            const py = startY + r * cellH + cellH / 2;
            const isImmune = idx < immuneCount;

            this.ctx.fillStyle = isImmune ? '#27AE60' : '#E74C3C';
            this.ctx.beginPath();
            this.ctx.arc(px, py, Math.min(cellW, cellH) * 0.35, 0, Math.PI * 2);
            this.ctx.fill();
            idx++;
        }
    }

    // Legend
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#27AE60';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('● Immune (vaccinated)', width * 0.10, height * 0.78);
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.fillText('● Susceptible', width * 0.10, height * 0.86);

    // R₀ examples
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.fillText('Measles R₀≈15 → H=93%  |  COVID R₀≈2-3 → H=50-67%', width * 0.10, height * 0.94);
}

// ═══════════════════════════════════════════════════════════════════════════
// BLOOD CELLS INSETS
// ═══════════════════════════════════════════════════════════════════════════

drawBloodCompositionInset(width, height) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Blood Composition', width / 2, 16);

    // Blood tube graphic
    const tubeX = width * 0.15, tubeY = height * 0.18;
    const tubeW = width * 0.25, tubeH = height * 0.72;

    // Tube outline
    this.ctx.strokeStyle = '#888';
    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(tubeX, tubeY, tubeW, tubeH);

    // Layers — plasma (55%), buffy coat (1%), RBCs (44%)
    const plasmaH = tubeH * 0.55;
    const buffyH  = tubeH * 0.01;
    const rbcH    = tubeH * 0.44;

    this.ctx.fillStyle = '#FFF8DC';   // plasma
    this.ctx.fillRect(tubeX, tubeY, tubeW, plasmaH);
    this.ctx.fillStyle = '#A9A9A9';   // buffy coat
    this.ctx.fillRect(tubeX, tubeY + plasmaH, tubeW, buffyH + 4);
    this.ctx.fillStyle = '#DC143C';   // RBCs
    this.ctx.fillRect(tubeX, tubeY + plasmaH + buffyH + 4, tubeW, rbcH - 4);

    // Labels with lines
    const labelX = tubeX + tubeW + 8;
    const labelData = [
        { y: tubeY + plasmaH * 0.45, label: 'Plasma 55%',     sub: 'water, proteins,\nhormones', color: '#B8860B' },
        { y: tubeY + plasmaH + 6,    label: 'WBCs & Platelets',sub: '< 1%',                      color: '#666'    },
        { y: tubeY + plasmaH + rbcH * 0.5 + 10, label: 'RBCs 44%', sub: 'haematocrit',           color: '#8B0000' }
    ];

    this.ctx.lineWidth = 1;
    labelData.forEach(ld => {
        this.ctx.strokeStyle = '#999';
        this.ctx.beginPath();
        this.ctx.moveTo(tubeX + tubeW, ld.y);
        this.ctx.lineTo(labelX, ld.y);
        this.ctx.stroke();

        this.ctx.font = 'bold 8px Arial';
        this.ctx.fillStyle = ld.color;
        this.ctx.textAlign = 'left';
        this.ctx.fillText(ld.label, labelX + 2, ld.y - 1);
        this.ctx.font = '7px Arial';
        this.ctx.fillStyle = '#555';
        ld.sub.split('\n').forEach((line, i) => {
            this.ctx.fillText(line, labelX + 2, ld.y + 9 + i * 9);
        });
    });
}

drawHematopoiesisInset(width, height) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Haematopoiesis', width / 2, 16);

    // HSC at top
    const hscX = width * 0.5, hscY = height * 0.20;
    this.ctx.fillStyle = '#FFD700';
    this.ctx.beginPath();
    this.ctx.arc(hscX, hscY, 14, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.font = '7px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('HSC', hscX, hscY + 3);

    // Two lineage branches
    const lineages = [
        { x: 0.28, y: 0.40, label: 'Myeloid\nProgenitor', color: '#E67E22' },
        { x: 0.72, y: 0.40, label: 'Lymphoid\nProgenitor', color: '#9B59B6' }
    ];

    lineages.forEach(lin => {
        this.ctx.strokeStyle = '#BDC3C7';
        this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.moveTo(hscX, hscY + 14);
        this.ctx.lineTo(width * lin.x, height * lin.y - 12);
        this.ctx.stroke();

        this.ctx.fillStyle = lin.color;
        this.ctx.beginPath();
        this.ctx.arc(width * lin.x, height * lin.y, 12, 0, Math.PI * 2);
        this.ctx.fill();

        this.ctx.font = '7px Arial';
        this.ctx.fillStyle = '#fff';
        this.ctx.textAlign = 'center';
        lin.label.split('\n').forEach((l, i) => {
            this.ctx.fillText(l, width * lin.x, height * lin.y - 3 + i * 9);
        });
    });

    // Myeloid daughters
    const myeloid = [
        { x: 0.14, y: 0.65, label: 'RBC',        color: '#DC143C' },
        { x: 0.28, y: 0.65, label: 'Neutrophil',  color: '#FFE4E1' },
        { x: 0.42, y: 0.65, label: 'Platelet',    color: '#DDA0DD' }
    ];
    // Lymphoid daughters
    const lymphoid = [
        { x: 0.58, y: 0.65, label: 'B Cell',      color: '#00CED1' },
        { x: 0.72, y: 0.65, label: 'T Cell',      color: '#4169E1' },
        { x: 0.86, y: 0.65, label: 'NK Cell',     color: '#9370DB' }
    ];

    [...myeloid, ...lymphoid].forEach(cell => {
        const parentX = cell.x < 0.50 ? width * 0.28 : width * 0.72;
        const parentY = height * 0.40;

        this.ctx.strokeStyle = '#BDC3C7';
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.moveTo(parentX, parentY + 12);
        this.ctx.lineTo(width * cell.x, height * cell.y - 10);
        this.ctx.stroke();

        this.ctx.fillStyle = cell.color;
        this.ctx.beginPath();
        this.ctx.arc(width * cell.x, height * cell.y, 10, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = '#888';
        this.ctx.lineWidth = 1;
        this.ctx.stroke();

        this.ctx.font = '7px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(cell.label, width * cell.x, height * cell.y + 20);
    });

    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('All blood cells arise from Haematopoietic Stem Cells (HSC)', width / 2, height * 0.95);
}

drawRBCLifespanInset(width, height) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('RBC Lifespan (~120 days)', width / 2, 16);

    // Circular lifecycle
    const cx = width * 0.50, cy = height * 0.50, r = Math.min(width, height) * 0.28;

    this.ctx.strokeStyle = '#DC143C';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.arc(cx, cy, r, 0, Math.PI * 1.85);
    this.ctx.stroke();

    // Arrowhead
    const aA = Math.PI * 1.85;
    this.ctx.fillStyle = '#DC143C';
    this.ctx.beginPath();
    this.ctx.moveTo(cx + Math.cos(aA) * r, cy + Math.sin(aA) * r);
    this.ctx.lineTo(cx + Math.cos(aA - 0.3) * (r - 10), cy + Math.sin(aA - 0.3) * (r - 10));
    this.ctx.lineTo(cx + Math.cos(aA + 0.1) * (r + 8),  cy + Math.sin(aA + 0.1) * (r + 8));
    this.ctx.closePath();
    this.ctx.fill();

    // Stages on circle
    const stages = [
        { angle: -Math.PI / 2, label: 'Born in\nBone Marrow',   color: '#FFD700'  },
        { angle: 0,            label: 'Circulates\n~120 days',   color: '#DC143C'  },
        { angle: Math.PI / 2,  label: 'Aged / Damaged',          color: '#8B0000'  },
        { angle: Math.PI,      label: 'Destroyed in\nSpleen',    color: '#9370DB'  }
    ];

    stages.forEach(st => {
        const sx = cx + Math.cos(st.angle) * r;
        const sy = cy + Math.sin(st.angle) * r;

        this.ctx.fillStyle = st.color;
        this.ctx.beginPath();
        this.ctx.arc(sx, sy, 8, 0, Math.PI * 2);
        this.ctx.fill();

        const lx = cx + Math.cos(st.angle) * (r + 30);
        const ly = cy + Math.sin(st.angle) * (r + 30);
        this.ctx.font = '7px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        st.label.split('\n').forEach((l, i) => this.ctx.fillText(l, lx, ly - 5 + i * 9));
    });

    // Centre fact
    this.ctx.font = 'bold 9px Arial';
    this.ctx.fillStyle = '#DC143C';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('2.5 million', cx, cy - 4);
    this.ctx.font = '7px Arial';
    this.ctx.fillStyle = '#555';
    this.ctx.fillText('new RBCs/second', cx, cy + 7);
}

drawWBCDifferentialInset(width, height) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('WBC Differential Count', width / 2, 16);

    // Donut chart data
    const cells = [
        { label: 'Neutrophils', pct: 0.60, color: '#FFE4E1' },
        { label: 'Lymphocytes', pct: 0.30, color: '#E6E6FA' },
        { label: 'Monocytes',   pct: 0.06, color: '#F0E68C' },
        { label: 'Eosinophils', pct: 0.03, color: '#FFB6C1' },
        { label: 'Basophils',   pct: 0.01, color: '#DDA0DD' }
    ];

    const cx = width * 0.38, cy = height * 0.50;
    const ro = Math.min(width * 0.32, height * 0.34);
    const ri = ro * 0.50;
    let startA = -Math.PI / 2;

    cells.forEach(c => {
        const sweep = c.pct * Math.PI * 2;

        // Slice
        this.ctx.fillStyle = c.color;
        this.ctx.beginPath();
        this.ctx.moveTo(cx, cy);
        this.ctx.arc(cx, cy, ro, startA, startA + sweep);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.strokeStyle = '#fff';
        this.ctx.lineWidth = 1.5;
        this.ctx.stroke();

        // Donut hole
        this.ctx.fillStyle = '#fff';
        this.ctx.beginPath();
        this.ctx.arc(cx, cy, ri, startA, startA + sweep);
        this.ctx.arc(cx, cy, ri, startA + sweep, startA, true);
        this.ctx.fill();

        startA += sweep;
    });

    // Centre text
    this.ctx.font = 'bold 8px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('WBC', cx, cy - 4);
    this.ctx.font = '7px Arial';
    this.ctx.fillText('~7,000/μL', cx, cy + 6);

    // Legend
    const lx = width * 0.72, ly = height * 0.24;
    cells.forEach((c, i) => {
        const yp = ly + i * height * 0.13;
        this.ctx.fillStyle = c.color;
        this.ctx.strokeStyle = '#888';
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.rect(lx, yp, 10, 10);
        this.ctx.fill();
        this.ctx.stroke();

        this.ctx.font = '7px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'left';
        this.ctx.fillText(`${c.label} ${Math.round(c.pct * 100)}%`, lx + 13, yp + 8);
    });
}

// ═══════════════════════════════════════════════════════════════════════════
// ANTIBODY STRUCTURE INSETS
// ═══════════════════════════════════════════════════════════════════════════

drawDisulfideBondsInset(width, height) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Disulfide Bonds (S–S)', width / 2, 16);

    const cx = width * 0.50;

    // Simplified antibody Y shape
    this.ctx.strokeStyle = '#4169E1';
    this.ctx.lineWidth = 14;
    this.ctx.lineCap = 'round';
    // Left arm
    this.ctx.beginPath();
    this.ctx.moveTo(cx, height * 0.52);
    this.ctx.lineTo(cx - width * 0.28, height * 0.24);
    this.ctx.stroke();
    // Right arm
    this.ctx.beginPath();
    this.ctx.moveTo(cx, height * 0.52);
    this.ctx.lineTo(cx + width * 0.28, height * 0.24);
    this.ctx.stroke();
    // Stem
    this.ctx.beginPath();
    this.ctx.moveTo(cx, height * 0.52);
    this.ctx.lineTo(cx, height * 0.84);
    this.ctx.stroke();

    // S-S bond markers (gold X)
    const bonds = [
        { x: cx - width * 0.14, y: height * 0.37 },
        { x: cx + width * 0.14, y: height * 0.37 },
        { x: cx,                y: height * 0.52  },
        { x: cx,                y: height * 0.68  }
    ];

    bonds.forEach(b => {
        this.ctx.strokeStyle = '#FFD700';
        this.ctx.lineWidth = 3;
        const s = 7;
        this.ctx.beginPath();
        this.ctx.moveTo(b.x - s, b.y - s); this.ctx.lineTo(b.x + s, b.y + s);
        this.ctx.moveTo(b.x + s, b.y - s); this.ctx.lineTo(b.x - s, b.y + s);
        this.ctx.stroke();
    });

    // Legend
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#FFD700';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('✕ = Disulfide bond (Cys–Cys)', cx, height * 0.92);
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.fillText('Stabilise chain pairing & hinge flexibility', cx, height * 0.97);
}

drawFabDetailInset(width, height) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Fab Fragment Detail', width / 2, 16);

    const cx = width * 0.50, baseY = height * 0.80;

    // Heavy chain (larger)
    this.ctx.fillStyle = '#4169E1';
    this.ctx.beginPath();
    this.ctx.roundRect(cx - 20, baseY - height * 0.60, 30, height * 0.60, 4);
    this.ctx.fill();

    // Light chain (smaller, alongside)
    this.ctx.fillStyle = '#87CEEB';
    this.ctx.beginPath();
    this.ctx.roundRect(cx + 12, baseY - height * 0.55, 20, height * 0.55, 4);
    this.ctx.fill();

    // Variable regions (top, highlighted)
    this.ctx.fillStyle = '#FF6347';
    this.ctx.beginPath();
    this.ctx.roundRect(cx - 20, baseY - height * 0.60, 30, height * 0.22, 4);
    this.ctx.fill();
    this.ctx.fillStyle = '#FF8C69';
    this.ctx.beginPath();
    this.ctx.roundRect(cx + 12, baseY - height * 0.55, 20, height * 0.22, 4);
    this.ctx.fill();

    // CDR loops
    for (let i = 0; i < 3; i++) {
        this.ctx.fillStyle = '#FFD700';
        this.ctx.beginPath();
        this.ctx.arc(cx - 5 + i * 10, baseY - height * 0.60, 5, Math.PI, 0);
        this.ctx.fill();
    }

    // Antigen (top)
    this.ctx.fillStyle = '#8B0000';
    this.ctx.beginPath();
    this.ctx.arc(cx + 4, baseY - height * 0.70, 14, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#fff';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Ag', cx + 4, baseY - height * 0.69);

    // Labels
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#4169E1';
    this.ctx.textAlign = 'right';
    this.ctx.fillText('VH', cx - 22, baseY - height * 0.52);
    this.ctx.fillText('CH1', cx - 22, baseY - height * 0.30);
    this.ctx.fillStyle = '#87CEEB';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('VL', cx + 34, baseY - height * 0.48);
    this.ctx.fillText('CL', cx + 34, baseY - height * 0.26);
    this.ctx.fillStyle = '#FFD700';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('CDRs', cx - 2, baseY - height * 0.63);
}

drawFcEffectorFunctionsInset(width, height) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Fc Effector Functions', width / 2, 16);

    // Central Fc region
    this.ctx.fillStyle = '#4169E1';
    this.ctx.beginPath();
    this.ctx.ellipse(width * 0.50, height * 0.44, 22, 28, 0, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#fff';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Fc', width * 0.50, height * 0.45);

    // Radiating functions
    const funcs = [
        { angle: -Math.PI * 0.65, label: 'Complement\nActivation',   color: '#E74C3C', icon: '★' },
        { angle: -Math.PI * 0.15, label: 'ADCC\n(NK cells)',         color: '#9B59B6', icon: '⚡' },
        { angle:  Math.PI * 0.30, label: 'Opsonisation\n(Macrophage)', color: '#E67E22', icon: '○' },
        { angle:  Math.PI * 0.80, label: 'Mast Cell\nDegranulation', color: '#E74C3C', icon: '●' },
        { angle: -Math.PI * 0.90, label: 'Neonatal FcRn\n(half-life)', color: '#27AE60', icon: '↑' }
    ];

    const r = Math.min(width, height) * 0.33;
    funcs.forEach(fn => {
        const tx = width * 0.50 + Math.cos(fn.angle) * r;
        const ty = height * 0.44 + Math.sin(fn.angle) * r;

        this.ctx.strokeStyle = fn.color;
        this.ctx.lineWidth = 1.5;
        this.ctx.setLineDash([3, 2]);
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.50 + Math.cos(fn.angle) * 22, height * 0.44 + Math.sin(fn.angle) * 28);
        this.ctx.lineTo(tx - Math.cos(fn.angle) * 10, ty - Math.sin(fn.angle) * 10);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        this.ctx.fillStyle = fn.color;
        this.ctx.beginPath();
        this.ctx.arc(tx, ty, 9, 0, Math.PI * 2);
        this.ctx.fill();

        this.ctx.font = '9px Arial';
        this.ctx.fillStyle = '#fff';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(fn.icon, tx, ty + 3);

        // Label (offset outward)
        const lx = width * 0.50 + Math.cos(fn.angle) * (r + 28);
        const ly = height * 0.44 + Math.sin(fn.angle) * (r + 28);
        this.ctx.font = '7px Arial';
        this.ctx.fillStyle = fn.color;
        fn.label.split('\n').forEach((l, i) => this.ctx.fillText(l, lx, ly - 4 + i * 9));
    });
}

drawIsotypeComparisonInset(width, height) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Immunoglobulin Isotypes', width / 2, 16);

    const isotypes = [
        { name: 'IgG', serum: '75%', halflife: '21d', location: 'Blood, tissues',  color: '#4169E1' },
        { name: 'IgA', serum: '15%', halflife: '6d',  location: 'Mucosa, milk',    color: '#27AE60' },
        { name: 'IgM', serum: '10%', halflife: '5d',  location: 'Blood (pentamer)',color: '#E67E22' },
        { name: 'IgE', serum: '<1%', halflife: '2d',  location: 'Allergy/parasite',color: '#E74C3C' },
        { name: 'IgD', serum: '<1%', halflife: '3d',  location: 'B cell receptor', color: '#9B59B6' }
    ];

    const rowH = (height * 0.74) / isotypes.length;
    const cols = [width * 0.04, width * 0.22, width * 0.38, width * 0.54, width * 0.72];

    // Header
    this.ctx.font = 'bold 7px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'left';
    ['Type', 'Serum', 't½', 'Location', ''].forEach((h, i) => {
        this.ctx.fillText(h, cols[i], height * 0.24);
    });

    this.ctx.strokeStyle = '#BDC3C7';
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.04, height * 0.27);
    this.ctx.lineTo(width * 0.96, height * 0.27);
    this.ctx.stroke();

    isotypes.forEach((iso, i) => {
        const rowY = height * 0.28 + i * rowH;

        // Colour swatch
        this.ctx.fillStyle = iso.color;
        this.ctx.fillRect(cols[0], rowY + 1, 8, 10);

        this.ctx.font = 'bold 8px Arial';
        this.ctx.fillStyle = iso.color;
        this.ctx.textAlign = 'left';
        this.ctx.fillText(iso.name, cols[0] + 10, rowY + 9);

        this.ctx.font = '7px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.fillText(iso.serum,    cols[1], rowY + 9);
        this.ctx.fillText(iso.halflife, cols[2], rowY + 9);
        this.ctx.fillText(iso.location, cols[3], rowY + 9);
    });
}

// ═══════════════════════════════════════════════════════════════════════════
// PATHOGEN TYPES INSETS
// ═══════════════════════════════════════════════════════════════════════════

drawSizeComparisonInset(width, height) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Pathogen Size Comparison', width / 2, 16);

    // Log-scale bar
    const items = [
        { label: 'Prion',    size: '2–10 nm',  logR: 3,  color: '#9370DB' },
        { label: 'Virus',    size: '20–300 nm', logR: 7,  color: '#FF6347' },
        { label: 'Bacteria', size: '1–10 μm',  logR: 14, color: '#228B22' },
        { label: 'Fungi',    size: '2–200 μm', logR: 22, color: '#DEB887' },
        { label: 'Protozoa', size: '10–100 μm',logR: 28, color: '#87CEEB' },
        { label: 'Helminth', size: 'mm–m',      logR: 38, color: '#CD853F' }
    ];

    const baseY = height * 0.56;
    const baseX = width * 0.08;

    // Scale line
    this.ctx.strokeStyle = '#BDC3C7';
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    this.ctx.moveTo(baseX, baseY);
    this.ctx.lineTo(width * 0.92, baseY);
    this.ctx.stroke();

    items.forEach(item => {
        const cx = baseX + (item.logR / 40) * (width * 0.84);
        const r  = item.logR * 1.4;

        this.ctx.fillStyle = item.color;
        this.ctx.beginPath();
        this.ctx.arc(cx, baseY, r, 0, Math.PI * 2);
        this.ctx.fill();

        // Tick label above
        this.ctx.font = '7px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(item.label, cx, baseY - r - 12);
        this.ctx.fillStyle = '#888';
        this.ctx.fillText(item.size, cx, baseY - r - 3);
    });

    // Scale note
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Scale is logarithmic — relative sizes only', width * 0.50, height * 0.80);

    // Human cell for reference
    this.ctx.font = 'bold 8px Arial';
    this.ctx.fillStyle = '#555';
    this.ctx.fillText('Human cell ≈ 10–100 μm (similar to fungi/protozoa)', width * 0.50, height * 0.90);
}

drawGramStainInset(width, height) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Gram Stain (Bacteria)', width / 2, 16);

    // Gram+ side
    this.ctx.font = 'bold 10px Arial';
    this.ctx.fillStyle = '#9B59B6';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Gram +', width * 0.26, height * 0.25);

    // Thick peptidoglycan
    this.ctx.fillStyle = '#9B59B6';
    this.ctx.fillRect(width * 0.08, height * 0.35, width * 0.36, height * 0.22);

    // Thin membrane
    this.ctx.fillStyle = '#DDA0DD';
    this.ctx.fillRect(width * 0.08, height * 0.57, width * 0.36, height * 0.08);

    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#fff';
    this.ctx.fillText('Thick Peptidoglycan', width * 0.26, height * 0.48);
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.fillText('Cell membrane', width * 0.26, height * 0.64);
    this.ctx.fillText('→ Retains crystal violet', width * 0.26, height * 0.73);
    this.ctx.fillStyle = '#9B59B6';
    this.ctx.fillText('Purple/blue colour', width * 0.26, height * 0.80);

    // Divider
    this.ctx.strokeStyle = '#BDC3C7';
    this.ctx.lineWidth = 1;
    this.ctx.setLineDash([4, 4]);
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.50, height * 0.20);
    this.ctx.lineTo(width * 0.50, height * 0.90);
    this.ctx.stroke();
    this.ctx.setLineDash([]);

    // Gram− side
    this.ctx.font = 'bold 10px Arial';
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Gram −', width * 0.74, height * 0.25);

    // Outer membrane
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.fillRect(width * 0.56, height * 0.33, width * 0.36, height * 0.07);

    // Thin peptidoglycan
    this.ctx.fillStyle = '#FFA0A0';
    this.ctx.fillRect(width * 0.56, height * 0.40, width * 0.36, height * 0.08);

    // Inner membrane
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.fillRect(width * 0.56, height * 0.48, width * 0.36, height * 0.07);

    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#fff';
    this.ctx.fillText('Outer membrane', width * 0.74, height * 0.38);
    this.ctx.fillText('Thin peptidoglycan', width * 0.74, height * 0.46);
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.fillText('→ Loses crystal violet', width * 0.74, height * 0.62);
    this.ctx.fillText('→ Counterstained safranin', width * 0.74, height * 0.70);
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.fillText('Pink/red colour', width * 0.74, height * 0.78);

    // Examples
    this.ctx.font = '7px Arial';
    this.ctx.fillStyle = '#9B59B6';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('e.g. Staph, Strep', width * 0.26, height * 0.90);
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.fillText('e.g. E. coli, Salmonella', width * 0.74, height * 0.90);
}

drawViralReplicationCycleInset(width, height) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Viral Replication Cycle', width / 2, 16);

    const stages = [
        { n: '1', label: 'Attachment',  x: 0.50, y: 0.22, color: '#E74C3C' },
        { n: '2', label: 'Entry',       x: 0.78, y: 0.38, color: '#E67E22' },
        { n: '3', label: 'Replication', x: 0.70, y: 0.62, color: '#F1C40F' },
        { n: '4', label: 'Assembly',    x: 0.44, y: 0.75, color: '#27AE60' },
        { n: '5', label: 'Release',     x: 0.22, y: 0.60, color: '#2980B9' },
        { n: '6', label: 'Spread',      x: 0.22, y: 0.36, color: '#9B59B6' }
    ];

    // Host cell
    this.ctx.fillStyle = 'rgba(255,228,196,0.5)';
    this.ctx.beginPath();
    this.ctx.arc(width * 0.50, height * 0.52, height * 0.28, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.strokeStyle = '#DEB887';
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#888';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Host Cell', width * 0.50, height * 0.52);

    // Cycle arrow ring
    this.ctx.strokeStyle = '#BDC3C7';
    this.ctx.lineWidth = 1.5;
    this.ctx.setLineDash([3, 3]);
    this.ctx.beginPath();
    this.ctx.arc(width * 0.50, height * 0.52, height * 0.35, 0, Math.PI * 1.9);
    this.ctx.stroke();
    this.ctx.setLineDash([]);

    // Arrowhead
    const arA = Math.PI * 1.9;
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.50 + Math.cos(arA) * height * 0.35, height * 0.52 + Math.sin(arA) * height * 0.35);
    this.ctx.lineTo(width * 0.50 + Math.cos(arA - 0.25) * (height * 0.35 - 8), height * 0.52 + Math.sin(arA - 0.25) * (height * 0.35 - 8));
    this.ctx.lineTo(width * 0.50 + Math.cos(arA + 0.05) * (height * 0.35 + 8), height * 0.52 + Math.sin(arA + 0.05) * (height * 0.35 + 8));
    this.ctx.closePath();
    this.ctx.fill();

    stages.forEach(st => {
        this.ctx.fillStyle = st.color;
        this.ctx.beginPath();
        this.ctx.arc(width * st.x, height * st.y, 12, 0, Math.PI * 2);
        this.ctx.fill();

        this.ctx.font = 'bold 9px Arial';
        this.ctx.fillStyle = '#fff';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(st.n, width * st.x, height * st.y + 3);

        this.ctx.font = '7px Arial';
        this.ctx.fillStyle = st.color;
        this.ctx.fillText(st.label, width * st.x, height * st.y + 20);
    });
}

drawAntibioticTargetsInset(width, height) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Antibiotic Targets', width / 2, 16);

    // Bacterial cell (simplified cross-section)
    this.ctx.fillStyle = 'rgba(144,238,144,0.35)';
    this.ctx.beginPath();
    this.ctx.ellipse(width * 0.50, height * 0.50, width * 0.36, height * 0.32, 0, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.strokeStyle = '#228B22';
    this.ctx.lineWidth = 3;
    this.ctx.stroke();

    const targets = [
        { label: 'Cell Wall',       drug: 'Penicillins\nCephalosporins', x: 0.50, y: 0.18, color: '#E74C3C' },
        { label: '30S Ribosome',    drug: 'Aminoglycosides\nTetracyclines', x: 0.78, y: 0.38, color: '#E67E22' },
        { label: '50S Ribosome',    drug: 'Macrolides\nChloramphenicol',   x: 0.78, y: 0.62, color: '#F1C40F' },
        { label: 'DNA Gyrase',      drug: 'Fluoroquinolones',             x: 0.50, y: 0.78, color: '#27AE60' },
        { label: 'Cell Membrane',   drug: 'Polymyxins',                   x: 0.22, y: 0.60, color: '#9B59B6' },
        { label: 'Metabolic Path',  drug: 'Sulfonamides',                 x: 0.22, y: 0.38, color: '#2980B9' }
    ];

    targets.forEach(tgt => {
        // Line to cell
        this.ctx.strokeStyle = tgt.color;
        this.ctx.lineWidth = 1;
        this.ctx.setLineDash([3, 2]);
        this.ctx.beginPath();
        this.ctx.moveTo(width * tgt.x, height * tgt.y + 8);
        this.ctx.lineTo(width * 0.50, height * 0.50);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        this.ctx.fillStyle = tgt.color;
        this.ctx.beginPath();
        this.ctx.arc(width * tgt.x, height * tgt.y, 8, 0, Math.PI * 2);
        this.ctx.fill();

        this.ctx.font = 'bold 7px Arial';
        this.ctx.fillStyle = tgt.color;
        this.ctx.textAlign = tgt.x < 0.50 ? 'right' : tgt.x > 0.50 ? 'left' : 'center';
        const offX = tgt.x < 0.50 ? -10 : tgt.x > 0.50 ? 10 : 0;
        const offY = tgt.y < 0.50 ? -14 : 18;
        this.ctx.fillText(tgt.label, width * tgt.x + offX, height * tgt.y + offY - 8);
        this.ctx.font = '6px Arial';
        tgt.drug.split('\n').forEach((l, i) => {
            this.ctx.fillText(l, width * tgt.x + offX, height * tgt.y + offY + i * 8);
        });
    });
}

// ═══════════════════════════════════════════════════════════════════════════
// INFLAMMATION INSETS
// ═══════════════════════════════════════════════════════════════════════════

drawCardinalSignsInset(width, height) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Cardinal Signs of Inflammation', width / 2, 16);

    const signs = [
        { latin: 'Rubor',    english: 'Redness',           cause: 'Vasodilation → more blood',      icon: '🔴', color: '#E74C3C' },
        { latin: 'Calor',    english: 'Heat',               cause: '↑ Blood flow + metabolism',      icon: '🌡', color: '#E67E22' },
        { latin: 'Tumor',    english: 'Swelling (Oedema)',   cause: '↑ Permeability → fluid leaks',   icon: '💧', color: '#3498DB' },
        { latin: 'Dolor',    english: 'Pain',               cause: 'Bradykinin, PGE2 sensitise',      icon: '⚡', color: '#9B59B6' },
        { latin: 'Functio',  english: 'Loss of Function',   cause: 'Pain + swelling limit movement',  icon: '✋', color: '#7F8C8D' }
    ];

    signs.forEach((s, i) => {
        const yp = height * 0.22 + i * height * 0.146;

        this.ctx.fillStyle = s.color;
        this.ctx.beginPath();
        this.ctx.roundRect(width * 0.04, yp, width * 0.92, height * 0.13, 5);
        this.ctx.fill();

        this.ctx.font = 'bold 9px Arial';
        this.ctx.fillStyle = '#fff';
        this.ctx.textAlign = 'left';
        this.ctx.fillText(`${s.latin} — ${s.english}`, width * 0.06, yp + height * 0.05);
        this.ctx.font = '7px Arial';
        this.ctx.fillText(s.cause, width * 0.06, yp + height * 0.10);
    });
}

drawEicosanoidPathwayInset(width, height) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Eicosanoid Pathway', width / 2, 16);

    // Arachidonic acid at top
    this.ctx.fillStyle = '#FFD700';
    this.ctx.beginPath();
    this.ctx.roundRect(width * 0.25, height * 0.18, width * 0.50, height * 0.10, 5);
    this.ctx.fill();
    this.ctx.font = 'bold 8px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Arachidonic Acid', width * 0.50, height * 0.25);

    // COX branch
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.35, height * 0.28);
    this.ctx.lineTo(width * 0.25, height * 0.42);
    this.ctx.stroke();

    this.ctx.fillStyle = '#FADBD8';
    this.ctx.beginPath();
    this.ctx.roundRect(width * 0.04, height * 0.42, width * 0.42, height * 0.10, 4);
    this.ctx.fill();
    this.ctx.font = 'bold 8px Arial';
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.fillText('COX-1 / COX-2', width * 0.25, height * 0.49);

    // Arrow to prostaglandins
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 1.5;
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.25, height * 0.52);
    this.ctx.lineTo(width * 0.25, height * 0.62);
    this.ctx.stroke();

    this.ctx.fillStyle = '#E74C3C';
    this.ctx.beginPath();
    this.ctx.roundRect(width * 0.04, height * 0.62, width * 0.42, height * 0.10, 4);
    this.ctx.fill();
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#fff';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Prostaglandins / Thromboxane', width * 0.25, height * 0.69);

    this.ctx.font = '7px Arial';
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.fillText('Pain, fever, vasodilation, clotting', width * 0.25, height * 0.78);
    this.ctx.fillText('NSAIDs block COX enzymes', width * 0.25, height * 0.84);

    // LOX branch
    this.ctx.strokeStyle = '#9B59B6';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.65, height * 0.28);
    this.ctx.lineTo(width * 0.75, height * 0.42);
    this.ctx.stroke();

    this.ctx.fillStyle = '#E8DAEF';
    this.ctx.beginPath();
    this.ctx.roundRect(width * 0.54, height * 0.42, width * 0.42, height * 0.10, 4);
    this.ctx.fill();
    this.ctx.font = 'bold 8px Arial';
    this.ctx.fillStyle = '#9B59B6';
    this.ctx.fillText('5-Lipoxygenase (LOX)', width * 0.75, height * 0.49);

    this.ctx.strokeStyle = '#9B59B6';
    this.ctx.lineWidth = 1.5;
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.75, height * 0.52);
    this.ctx.lineTo(width * 0.75, height * 0.62);
    this.ctx.stroke();

    this.ctx.fillStyle = '#9B59B6';
    this.ctx.beginPath();
    this.ctx.roundRect(width * 0.54, height * 0.62, width * 0.42, height * 0.10, 4);
    this.ctx.fill();
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#fff';
    this.ctx.fillText('Leukotrienes', width * 0.75, height * 0.69);

    this.ctx.font = '7px Arial';
    this.ctx.fillStyle = '#9B59B6';
    this.ctx.fillText('Bronchoconstriction, allergy', width * 0.75, height * 0.78);
    this.ctx.fillText('Montelukast blocks LOX', width * 0.75, height * 0.84);
}

drawNeutrophilExtravasationInset(width, height) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Neutrophil Extravasation', width / 2, 16);

    // Blood vessel walls
    this.ctx.fillStyle = '#FFB6C1';
    this.ctx.fillRect(width * 0.04, height * 0.30, width * 0.92, height * 0.08);
    this.ctx.fillRect(width * 0.04, height * 0.60, width * 0.92, height * 0.08);

    this.ctx.font = '7px Arial';
    this.ctx.fillStyle = '#888';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Endothelium', width * 0.06, height * 0.28);

    // Lumen flow arrows
    for (let i = 0; i < 3; i++) {
        const fx = width * (0.15 + i * 0.28);
        this.ctx.strokeStyle = '#DC143C';
        this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.moveTo(fx, height * 0.50);
        this.ctx.lineTo(fx + width * 0.10, height * 0.50);
        this.ctx.stroke();
        this.ctx.fillStyle = '#DC143C';
        this.ctx.beginPath();
        this.ctx.moveTo(fx + width * 0.10, height * 0.50);
        this.ctx.lineTo(fx + width * 0.07, height * 0.47);
        this.ctx.lineTo(fx + width * 0.07, height * 0.53);
        this.ctx.closePath();
        this.ctx.fill();
    }

    // Steps
    const steps = [
        { x: 0.14, phase: 'Rolling',     color: '#E67E22' },
        { x: 0.36, phase: 'Activation',  color: '#F1C40F' },
        { x: 0.58, phase: 'Adhesion',    color: '#E74C3C' },
        { x: 0.80, phase: 'Transmig.',   color: '#9B59B6' }
    ];

    steps.forEach((st, i) => {
        const ny = i < 3 ? height * 0.46 : height * 0.42;
        this.ctx.fillStyle = st.color;
        this.ctx.beginPath();
        this.ctx.arc(width * st.x, ny, 10, 0, Math.PI * 2);
        this.ctx.fill();

        this.ctx.font = '7px Arial';
        this.ctx.fillStyle = st.color;
        this.ctx.textAlign = 'center';
        this.ctx.fillText(st.phase, width * st.x, ny - 13);
    });

    // Transmigrating cell
    this.ctx.fillStyle = '#9B59B6';
    this.ctx.beginPath();
    this.ctx.arc(width * 0.80, height * 0.64, 8, 0, Math.PI * 2);
    this.ctx.fill();

    // Tissue zone
    this.ctx.fillStyle = 'rgba(255,228,196,0.4)';
    this.ctx.fillRect(width * 0.04, height * 0.68, width * 0.92, height * 0.20);
    this.ctx.font = '7px Arial';
    this.ctx.fillStyle = '#888';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Tissue (chemokine gradient →)', width * 0.06, height * 0.86);

    // Molecules key
    this.ctx.font = '7px Arial';
    this.ctx.fillStyle = '#E67E22';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('P-Selectin → Rolling → ICAM-1/Integrin → Adhesion → PECAM-1 → Crossing', width * 0.50, height * 0.94);
}

drawResolutionSignalsInset(width, height) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Inflammation Resolution', width / 2, 16);

    // Pro vs anti-inflammatory balance
    const cx = width * 0.50, by = height * 0.62;

    // Scale beam
    this.ctx.strokeStyle = '#555';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.moveTo(cx, by);
    this.ctx.lineTo(cx, height * 0.28);
    this.ctx.stroke();

    this.ctx.strokeStyle = '#555';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(cx - width * 0.32, by);
    this.ctx.lineTo(cx + width * 0.32, by);
    this.ctx.stroke();

    // Pro-inflammatory (left, heavier)
    this.ctx.fillStyle = 'rgba(231,76,60,0.8)';
    this.ctx.beginPath();
    this.ctx.rect(cx - width * 0.40, by + 4, width * 0.28, height * 0.18);
    this.ctx.fill();
    this.ctx.font = 'bold 7px Arial';
    this.ctx.fillStyle = '#fff';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Pro-inflammatory', cx - width * 0.26, by + height * 0.07);
    this.ctx.font = '7px Arial';
    this.ctx.fillText('TNF-α, IL-1β, IL-6', cx - width * 0.26, by + height * 0.13);

    // Anti-inflammatory (right)
    this.ctx.fillStyle = 'rgba(39,174,96,0.8)';
    this.ctx.beginPath();
    this.ctx.rect(cx + width * 0.12, by + 4, width * 0.28, height * 0.18);
    this.ctx.fill();
    this.ctx.font = 'bold 7px Arial';
    this.ctx.fillStyle = '#fff';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Pro-resolution', cx + width * 0.26, by + height * 0.07);
    this.ctx.font = '7px Arial';
    this.ctx.fillText('IL-10, TGF-β, Lipoxins', cx + width * 0.26, by + height * 0.13);

    // Resolution molecules listed
    const molecules = [
        { label: 'Lipoxins',    role: 'Halt neutrophil recruitment',   color: '#27AE60' },
        { label: 'Resolvins',   role: 'Promote macrophage clearance',  color: '#2980B9' },
        { label: 'Protectins',  role: 'Prevent further damage',        color: '#9B59B6' },
        { label: 'IL-10',       role: 'Anti-inflammatory cytokine',    color: '#27AE60' }
    ];

    this.ctx.font = 'bold 8px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Resolution mediators:', width * 0.06, height * 0.24);

    molecules.forEach((m, i) => {
        const yp = height * 0.30 + i * height * 0.08;
        this.ctx.fillStyle = m.color;
        this.ctx.beginPath();
        this.ctx.arc(width * 0.10, yp, 5, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.font = 'bold 7px Arial';
        this.ctx.fillStyle = m.color;
        this.ctx.textAlign = 'left';
        this.ctx.fillText(m.label + ':', width * 0.14, yp + 3);
        this.ctx.font = '7px Arial';
        this.ctx.fillStyle = '#555';
        this.ctx.fillText(m.role, width * 0.30, yp + 3);
    });
}

// ═══════════════════════════════════════════════════════════════════════════
// DISEASE TRANSMISSION INSETS
// ═══════════════════════════════════════════════════════════════════════════

drawRNaughtInset(width, height) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Basic Reproduction Number (R₀)', width / 2, 16);

    // R₀ formula
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('R₀ = β × κ × D', width / 2, height * 0.24);

    this.ctx.font = '7px Arial';
    this.ctx.fillStyle = '#555';
    this.ctx.fillText('β=transmission prob.  κ=contacts/time  D=infectious period', width / 2, height * 0.31);

    // Visual tree — 1 person infects R₀ others
    const sourceX = width * 0.5, sourceY = height * 0.42;
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.beginPath();
    this.ctx.arc(sourceX, sourceY, 14, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#fff';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('1', sourceX, sourceY + 3);

    const secondary = 3;  // illustrative R₀ = 3
    for (let i = 0; i < secondary; i++) {
        const angle = -Math.PI / 2 + (i - 1) * (Math.PI / 2.5);
        const tx = sourceX + Math.cos(angle) * width * 0.22;
        const ty = sourceY + Math.sin(angle) * height * 0.22 + height * 0.18;

        this.ctx.strokeStyle = '#BDC3C7';
        this.ctx.lineWidth = 1.5;
        this.ctx.setLineDash([3, 2]);
        this.ctx.beginPath();
        this.ctx.moveTo(sourceX, sourceY + 14);
        this.ctx.lineTo(tx, ty - 12);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        this.ctx.fillStyle = '#E67E22';
        this.ctx.beginPath();
        this.ctx.arc(tx, ty, 11, 0, Math.PI * 2);
        this.ctx.fill();
    }

    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#E67E22';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Illustrative R₀ = 3 (each case infects 3)', width / 2, height * 0.76);

    // Disease R₀ bar chart (minimal)
    const diseases = [
        { name: 'Measles',  r: 15, color: '#E74C3C' },
        { name: 'COVID',    r: 3,  color: '#E67E22' },
        { name: 'Malaria',  r: 80, color: '#9B59B6', note: 'entomological' },
        { name: 'Flu',      r: 2,  color: '#27AE60' }
    ];

    this.ctx.font = 'bold 7px Arial';
    this.ctx.fillStyle = '#555';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Approximate R₀ values:', width * 0.06, height * 0.82);

    diseases.forEach((d, i) => {
        const xp = width * (0.06 + i * 0.23);
        this.ctx.fillStyle = d.color;
        this.ctx.font = 'bold 8px Arial';
        this.ctx.textAlign = 'left';
        this.ctx.fillText(`${d.name}: ${d.r}`, xp, height * 0.91);
    });
}

drawIncubationPeriodsInset(width, height) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Incubation Periods', width / 2, 16);

    const diseases = [
        { name: 'Malaria',     range: '7–30 days',  days: [7,  30], color: '#9B59B6' },
        { name: 'Dengue',      range: '4–10 days',  days: [4,  10], color: '#E74C3C' },
        { name: 'Lyme',        range: '3–30 days',  days: [3,  30], color: '#27AE60' },
        { name: 'Zika',        range: '3–14 days',  days: [3,  14], color: '#E67E22' },
        { name: 'Plague',      range: '1–7 days',   days: [1,   7], color: '#8B0000' },
        { name: 'Typhus',      range: '6–14 days',  days: [6,  14], color: '#2980B9' }
    ];

    const maxDay = 35;
    const gx = width * 0.26, gy = height * 0.20;
    const gw = width * 0.70, rowH = (height * 0.72) / diseases.length;

    // X-axis
    this.ctx.strokeStyle = '#BDC3C7';
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    this.ctx.moveTo(gx, gy + diseases.length * rowH);
    this.ctx.lineTo(gx + gw, gy + diseases.length * rowH);
    this.ctx.stroke();

    // Day ticks
    [0, 7, 14, 21, 30].forEach(d => {
        const xp = gx + (d / maxDay) * gw;
        this.ctx.font = '7px Arial';
        this.ctx.fillStyle = '#888';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(`${d}d`, xp, gy + diseases.length * rowH + 11);
        this.ctx.strokeStyle = '#EEE';
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.moveTo(xp, gy);
        this.ctx.lineTo(xp, gy + diseases.length * rowH);
        this.ctx.stroke();
    });

    diseases.forEach((d, i) => {
        const y = gy + i * rowH + rowH * 0.2;
        const barH = rowH * 0.55;
        const x1 = gx + (d.days[0] / maxDay) * gw;
        const x2 = gx + (d.days[1] / maxDay) * gw;

        // Disease label
        this.ctx.font = '8px Arial';
        this.ctx.fillStyle = d.color;
        this.ctx.textAlign = 'right';
        this.ctx.fillText(d.name, gx - 4, y + barH * 0.65);

        // Bar
        this.ctx.fillStyle = d.color;
        this.ctx.globalAlpha = 0.8;
        this.ctx.beginPath();
        this.ctx.roundRect(x1, y, x2 - x1, barH, 3);
        this.ctx.fill();
        this.ctx.globalAlpha = 1.0;

        // Range label
        this.ctx.font = '7px Arial';
        this.ctx.fillStyle = d.color;
        this.ctx.textAlign = 'left';
        this.ctx.fillText(d.range, x2 + 3, y + barH * 0.65);
    });
}

drawGeographicDistributionInset(width, height) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Geographic Distribution', width / 2, 16);

    // Simplified world map outline (tropical belt)
    this.ctx.fillStyle = '#ECF0F1';
    this.ctx.beginPath();
    this.ctx.roundRect(width * 0.05, height * 0.22, width * 0.90, height * 0.50, 6);
    this.ctx.fill();
    this.ctx.strokeStyle = '#BDC3C7';
    this.ctx.lineWidth = 1;
    this.ctx.stroke();

    // Equator line
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 1;
    this.ctx.setLineDash([4, 4]);
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.05, height * 0.47);
    this.ctx.lineTo(width * 0.95, height * 0.47);
    this.ctx.stroke();
    this.ctx.setLineDash([]);
    this.ctx.font = '7px Arial';
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Equator', width * 0.06, height * 0.45);

    // Tropic lines
    this.ctx.strokeStyle = '#F39C12';
    this.ctx.lineWidth = 1;
    this.ctx.setLineDash([3, 3]);
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.05, height * 0.34);
    this.ctx.lineTo(width * 0.95, height * 0.34);
    this.ctx.moveTo(width * 0.05, height * 0.60);
    this.ctx.lineTo(width * 0.95, height * 0.60);
    this.ctx.stroke();
    this.ctx.setLineDash([]);
    this.ctx.fillStyle = '#F39C12';
    this.ctx.fillText('Tropic of Cancer', width * 0.06, height * 0.32);
    this.ctx.fillText('Tropic of Capricorn', width * 0.06, height * 0.63);

    // Disease risk overlay (tropical belt)
    this.ctx.fillStyle = 'rgba(231,76,60,0.20)';
    this.ctx.beginPath();
    this.ctx.roundRect(width * 0.05, height * 0.34, width * 0.90, height * 0.27, 4);
    this.ctx.fill();

    // Disease dots
    const spots = [
        { x: 0.25, y: 0.47, label: 'Malaria\nDengue',   color: '#E74C3C' },
        { x: 0.50, y: 0.44, label: 'Malaria\nRift Valley',color: '#9B59B6' },
        { x: 0.70, y: 0.48, label: 'Dengue\nZika',       color: '#E67E22' }
    ];

    spots.forEach(sp => {
        this.ctx.fillStyle = sp.color;
        this.ctx.beginPath();
        this.ctx.arc(width * sp.x, height * sp.y, 10, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.globalAlpha = 0.3;
        this.ctx.beginPath();
        this.ctx.arc(width * sp.x, height * sp.y, 22, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.globalAlpha = 1.0;

        this.ctx.font = '7px Arial';
        this.ctx.fillStyle = sp.color;
        this.ctx.textAlign = 'center';
        sp.label.split('\n').forEach((l, i) => {
            this.ctx.fillText(l, width * sp.x, height * sp.y + 16 + i * 9);
        });
    });

    // Lyme (temperate)
    this.ctx.fillStyle = '#27AE60';
    this.ctx.beginPath();
    this.ctx.arc(width * 0.22, height * 0.30, 8, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.font = '7px Arial';
    this.ctx.fillStyle = '#27AE60';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Lyme', width * 0.22, height * 0.27);

    // Note
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Climate change is expanding vector habitats poleward', width / 2, height * 0.82);
    this.ctx.fillText('Altitude and urbanisation also affect distribution', width / 2, height * 0.90);
}

drawPreventionMethodsInset(width, height) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Prevention Methods', width / 2, 16);

    const methods = [
        { label: 'Insecticide-Treated\nBed Nets (ITNs)',    color: '#3498DB', icon: '🛏' },
        { label: 'Indoor Residual\nSpraying (IRS)',         color: '#E67E22', icon: '🏠' },
        { label: 'Repellents\n(DEET, Picaridin)',           color: '#27AE60', icon: '🌿' },
        { label: 'Vaccines\n(Mosquirix, Dengvaxia)',        color: '#9B59B6', icon: '💉' },
        { label: 'Larval Source\nManagement',               color: '#F39C12', icon: '💧' },
        { label: 'Genetic Control\n(Sterile insect tech)', color: '#E74C3C', icon: '🧬' }
    ];

    const cols = 2, rows = 3;
    const cellW = (width * 0.90) / cols;
    const cellH = (height * 0.80) / rows;

    methods.forEach((m, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const bx = width * 0.05 + col * cellW;
        const by = height * 0.17 + row * cellH;

        this.ctx.fillStyle = m.color;
        this.ctx.globalAlpha = 0.15;
        this.ctx.beginPath();
        this.ctx.roundRect(bx, by, cellW - 4, cellH - 4, 5);
        this.ctx.fill();
        this.ctx.globalAlpha = 1.0;

        this.ctx.strokeStyle = m.color;
        this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.roundRect(bx, by, cellW - 4, cellH - 4, 5);
        this.ctx.stroke();

        // Icon (text fallback)
        this.ctx.font = '14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(m.icon, bx + cellW * 0.25, by + cellH * 0.44);

        this.ctx.font = 'bold 7px Arial';
        this.ctx.fillStyle = m.color;
        m.label.split('\n').forEach((l, j) => {
            this.ctx.fillText(l, bx + cellW * 0.62, by + cellH * 0.35 + j * 10);
        });
    });

    this.ctx.font = '7px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('WHO recommends integrated vector management (IVM)', width / 2, height * 0.96);
}

// ═══════════════════════════════════════════════════════════════════════════
// BACTERIA INSETS
// ═══════════════════════════════════════════════════════════════════════════

drawGramStainComparisonInset(width, height) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Gram Stain Comparison', width / 2, 16);

    const panelW = width  * 0.40;
    const panelH = height * 0.62;
    const panelY = height * 0.14;

    // ── Gram-positive panel (left) ────────────────────────────────────────
    const gpX = width * 0.06;

    this.ctx.fillStyle = '#F3E5F5';
    this.ctx.strokeStyle = '#9B59B6';
    this.ctx.lineWidth = 1.5;
    this.ctx.beginPath();
    this.ctx.roundRect(gpX, panelY, panelW, panelH, 4);
    this.ctx.fill();
    this.ctx.stroke();

    // Outer thick peptidoglycan
    this.ctx.fillStyle = '#9B59B6';
    this.ctx.fillRect(gpX + panelW * 0.15, panelY + panelH * 0.15, panelW * 0.70, panelH * 0.28);

    // Striations inside wall
    this.ctx.strokeStyle = '#7D3C98';
    this.ctx.lineWidth = 1;
    for (let i = 1; i <= 4; i++) {
        const ly = panelY + panelH * 0.15 + (i / 4.5) * panelH * 0.28;
        this.ctx.beginPath();
        this.ctx.moveTo(gpX + panelW * 0.15, ly);
        this.ctx.lineTo(gpX + panelW * 0.85, ly);
        this.ctx.stroke();
    }

    // Cell membrane
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.fillRect(gpX + panelW * 0.15, panelY + panelH * 0.43, panelW * 0.70, panelH * 0.07);

    // Cytoplasm
    this.ctx.fillStyle = '#FEF9E7';
    this.ctx.fillRect(gpX + panelW * 0.15, panelY + panelH * 0.50, panelW * 0.70, panelH * 0.35);

    // Crystal violet retained (purple stain)
    this.ctx.fillStyle = 'rgba(155,89,182,0.35)';
    this.ctx.fillRect(gpX + panelW * 0.15, panelY + panelH * 0.15, panelW * 0.70, panelH * 0.28);

    // Labels
    this.ctx.font = 'bold 8px Arial';
    this.ctx.fillStyle = '#6C3483';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Gram (+)', gpX + panelW / 2, panelY + panelH * 0.10);

    this.ctx.font = '7px Arial';
    this.ctx.fillStyle = '#555';
    this.ctx.fillText('Thick PG', gpX + panelW / 2, panelY + panelH * 0.32);
    this.ctx.fillText('Membrane', gpX + panelW / 2, panelY + panelH * 0.49);
    this.ctx.fillStyle = '#9B59B6';
    this.ctx.font = 'bold 7px Arial';
    this.ctx.fillText('PURPLE', gpX + panelW / 2, panelY + panelH * 0.90);

    // ── Gram-negative panel (right) ───────────────────────────────────────
    const gnX = width * 0.53;

    this.ctx.fillStyle = '#FCE4EC';
    this.ctx.strokeStyle = '#E91E63';
    this.ctx.lineWidth = 1.5;
    this.ctx.beginPath();
    this.ctx.roundRect(gnX, panelY, panelW, panelH, 4);
    this.ctx.fill();
    this.ctx.stroke();

    // Outer membrane
    this.ctx.fillStyle = '#C2185B';
    this.ctx.fillRect(gnX + panelW * 0.15, panelY + panelH * 0.14, panelW * 0.70, panelH * 0.10);

    // Periplasm
    this.ctx.fillStyle = '#F8BBD9';
    this.ctx.fillRect(gnX + panelW * 0.15, panelY + panelH * 0.24, panelW * 0.70, panelH * 0.07);

    // Thin peptidoglycan
    this.ctx.fillStyle = '#E91E63';
    this.ctx.fillRect(gnX + panelW * 0.15, panelY + panelH * 0.31, panelW * 0.70, panelH * 0.05);

    // Cell membrane
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.fillRect(gnX + panelW * 0.15, panelY + panelH * 0.40, panelW * 0.70, panelH * 0.07);

    // Cytoplasm
    this.ctx.fillStyle = '#FEF9E7';
    this.ctx.fillRect(gnX + panelW * 0.15, panelY + panelH * 0.47, panelW * 0.70, panelH * 0.38);

    // LPS spikes on outer membrane
    this.ctx.strokeStyle = '#880E4F';
    this.ctx.lineWidth = 1.5;
    for (let i = 0; i < 7; i++) {
        const lx = gnX + panelW * 0.19 + i * panelW * 0.10;
        this.ctx.beginPath();
        this.ctx.moveTo(lx, panelY + panelH * 0.14);
        this.ctx.lineTo(lx, panelY + panelH * 0.07);
        this.ctx.stroke();
        this.ctx.fillStyle = '#880E4F';
        this.ctx.beginPath();
        this.ctx.arc(lx, panelY + panelH * 0.07, 2, 0, Math.PI * 2);
        this.ctx.fill();
    }

    this.ctx.font = 'bold 8px Arial';
    this.ctx.fillStyle = '#880E4F';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Gram (−)', gnX + panelW / 2, panelY + panelH * 0.10);

    this.ctx.font = '7px Arial';
    this.ctx.fillStyle = '#555';
    this.ctx.fillText('Outer Mem.', gnX + panelW / 2, panelY + panelH * 0.21);
    this.ctx.fillText('Thin PG',    gnX + panelW / 2, panelY + panelH * 0.36);
    this.ctx.fillText('Membrane',   gnX + panelW / 2, panelY + panelH * 0.46);
    this.ctx.fillStyle = '#E91E63';
    this.ctx.font = 'bold 7px Arial';
    this.ctx.fillText('PINK / RED', gnX + panelW / 2, panelY + panelH * 0.90);

    // Crystal violet washed out note
    this.ctx.font = 'italic 7px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('CV decolorised → safranin counterstain', width / 2, height * 0.92);
}

drawPeptidoglycanDetailInset(width, height) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Peptidoglycan (Murein)', width / 2, 16);

    const midY = height * 0.50;

    // Glycan strands (horizontal)
    const strandColors = ['#9B59B6', '#8E44AD', '#7D3C98'];
    for (let s = 0; s < 3; s++) {
        const sy = height * (0.28 + s * 0.20);
        this.ctx.strokeStyle = strandColors[s];
        this.ctx.lineWidth = 5;
        this.ctx.lineCap = 'round';
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.08, sy);
        this.ctx.lineTo(width * 0.92, sy);
        this.ctx.stroke();

        // NAM / NAG sugar units
        for (let u = 0; u < 8; u++) {
            const ux = width * (0.10 + u * 0.11);
            const isNAM = u % 2 === 0;
            this.ctx.fillStyle = isNAM ? '#6C3483' : '#A569BD';
            this.ctx.beginPath();
            this.ctx.rect(ux - 6, sy - 5, 12, 10);
            this.ctx.fill();

            this.ctx.font = '6px Arial';
            this.ctx.fillStyle = '#fff';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(isNAM ? 'M' : 'G', ux, sy + 2);
        }
    }

    // Peptide cross-links (vertical bridges between strands)
    this.ctx.strokeStyle = '#E67E22';
    this.ctx.lineWidth = 2;
    const bridgeXPositions = [0.22, 0.44, 0.66, 0.88];
    bridgeXPositions.forEach(bx => {
        const strand1Y = height * 0.28;
        const strand2Y = height * 0.48;
        const strand3Y = height * 0.68;

        // Bridge 1→2
        this.ctx.beginPath();
        this.ctx.moveTo(width * bx, strand1Y);
        this.ctx.lineTo(width * bx, strand2Y);
        this.ctx.stroke();

        // Bridge 2→3 (every other)
        if (bridgeXPositions.indexOf(bx) % 2 === 1) {
            this.ctx.beginPath();
            this.ctx.moveTo(width * bx, strand2Y);
            this.ctx.lineTo(width * bx, strand3Y);
            this.ctx.stroke();
        }

        // Peptide chain dots
        for (let d = 1; d <= 3; d++) {
            this.ctx.fillStyle = '#E67E22';
            this.ctx.beginPath();
            this.ctx.arc(width * bx, strand1Y + (d / 4) * (strand2Y - strand1Y), 2.5, 0, Math.PI * 2);
            this.ctx.fill();
        }
    });

    // Legend
    this.ctx.font = '8px Arial';
    this.ctx.textAlign = 'left';

    this.ctx.fillStyle = '#6C3483';
    this.ctx.fillRect(width * 0.08, height * 0.84, 10, 8);
    this.ctx.fillStyle = '#555';
    this.ctx.fillText('NAM (N-acetylmuramic acid)', width * 0.21, height * 0.91);

    this.ctx.fillStyle = '#A569BD';
    this.ctx.fillRect(width * 0.08, height * 0.92, 10, 8);
    this.ctx.fillStyle = '#555';
    this.ctx.fillText('NAG (N-acetylglucosamine)', width * 0.21, height * 0.99);

    this.ctx.strokeStyle = '#E67E22';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.55, height * 0.87);
    this.ctx.lineTo(width * 0.65, height * 0.87);
    this.ctx.stroke();
    this.ctx.fillStyle = '#555';
    this.ctx.fillText('Peptide cross-link', width * 0.67, height * 0.91);
}

drawFlagellaBasalBodyInset(width, height) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Flagellar Basal Body', width / 2, 16);

    const cx = width  * 0.38;
    const topY = height * 0.12;
    const botY = height * 0.88;
    const rodH = botY - topY;

    // ── Rod (central shaft) ───────────────────────────────────────────────
    this.ctx.strokeStyle = '#95A5A6';
    this.ctx.lineWidth = 4;
    this.ctx.beginPath();
    this.ctx.moveTo(cx, topY);
    this.ctx.lineTo(cx, botY);
    this.ctx.stroke();

    // ── Rings ─────────────────────────────────────────────────────────────
    const rings = [
        { label: 'L ring',  subLabel: '(outer membrane)',   yFrac: 0.18, color: '#E74C3C',  r: width * 0.13 },
        { label: 'P ring',  subLabel: '(peptidoglycan)',    yFrac: 0.35, color: '#3498DB',  r: width * 0.11 },
        { label: 'MS ring', subLabel: '(inner membrane)',   yFrac: 0.56, color: '#27AE60',  r: width * 0.13 },
        { label: 'C ring',  subLabel: '(cytoplasmic)',      yFrac: 0.74, color: '#9B59B6',  r: width * 0.15 },
    ];

    rings.forEach(ring => {
        const ry = topY + rodH * ring.yFrac;

        this.ctx.strokeStyle = ring.color;
        this.ctx.lineWidth = 6;
        this.ctx.beginPath();
        this.ctx.ellipse(cx, ry, ring.r, height * 0.04, 0, 0, Math.PI * 2);
        this.ctx.stroke();

        // Label on right
        this.ctx.font = 'bold 8px Arial';
        this.ctx.fillStyle = ring.color;
        this.ctx.textAlign = 'left';
        this.ctx.fillText(ring.label, cx + ring.r + 6, ry - 1);
        this.ctx.font = '7px Arial';
        this.ctx.fillStyle = '#666';
        this.ctx.fillText(ring.subLabel, cx + ring.r + 6, ry + 8);
    });

    // ── Membrane lines ────────────────────────────────────────────────────
    // Outer membrane (near L ring)
    const lY = topY + rodH * 0.18;
    this.ctx.strokeStyle = '#C2185B';
    this.ctx.lineWidth = 2;
    this.ctx.setLineDash([4, 2]);
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.04, lY - height * 0.04);
    this.ctx.lineTo(width * 0.70, lY - height * 0.04);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.04, lY + height * 0.04);
    this.ctx.lineTo(width * 0.70, lY + height * 0.04);
    this.ctx.stroke();

    // Inner membrane (near MS ring)
    const msY = topY + rodH * 0.56;
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.04, msY - height * 0.04);
    this.ctx.lineTo(width * 0.70, msY - height * 0.04);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.04, msY + height * 0.04);
    this.ctx.lineTo(width * 0.70, msY + height * 0.04);
    this.ctx.stroke();
    this.ctx.setLineDash([]);

    // ── Hook at top ───────────────────────────────────────────────────────
    this.ctx.strokeStyle = '#E67E22';
    this.ctx.lineWidth = 4;
    this.ctx.beginPath();
    this.ctx.arc(cx + width * 0.06, topY, width * 0.06, Math.PI, Math.PI * 1.5);
    this.ctx.stroke();

    this.ctx.font = '7px Arial';
    this.ctx.fillStyle = '#E67E22';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Hook', cx + width * 0.13, topY + 4);

    // Stator / MotAB note
    this.ctx.font = '7px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('MotA/B stator (H⁺ driven)', width * 0.38, height * 0.95);
}

drawPiliConjugationInset(width, height) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Conjugation via Sex Pilus', width / 2, 16);

    const donorX    = width  * 0.18;
    const recipX    = width  * 0.78;
    const cellY     = height * 0.45;
    const cellRX    = width  * 0.12;
    const cellRY    = height * 0.20;

    // ── Donor cell ────────────────────────────────────────────────────────
    this.ctx.fillStyle = '#FEF9E7';
    this.ctx.strokeStyle = '#9B59B6';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.ellipse(donorX, cellY, cellRX, cellRY, 0, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();

    // Donor plasmid (F factor)
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 2.5;
    this.ctx.beginPath();
    this.ctx.arc(donorX, cellY, cellRX * 0.40, 0, Math.PI * 2);
    this.ctx.stroke();

    this.ctx.font = '7px Arial';
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('F plasmid', donorX, cellY + 3);

    // ── Recipient cell ────────────────────────────────────────────────────
    this.ctx.fillStyle = '#EBF5FB';
    this.ctx.strokeStyle = '#2980B9';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.ellipse(recipX, cellY, cellRX, cellRY, 0, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();

    this.ctx.font = '7px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('F⁻ cell', recipX, cellY + 3);

    // ── Sex pilus ─────────────────────────────────────────────────────────
    this.ctx.strokeStyle = '#E67E22';
    this.ctx.lineWidth = 4;
    this.ctx.beginPath();
    this.ctx.moveTo(donorX + cellRX, cellY - cellRY * 0.1);
    this.ctx.bezierCurveTo(
        donorX + cellRX + width * 0.12, cellY - height * 0.10,
        recipX - cellRX - width * 0.12, cellY - height * 0.10,
        recipX - cellRX, cellY - cellRY * 0.1
    );
    this.ctx.stroke();

    // DNA transfer arrow inside pilus
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 2;
    this.ctx.setLineDash([4, 3]);
    this.ctx.beginPath();
    this.ctx.moveTo(donorX + cellRX + width * 0.04, cellY - height * 0.05);
    this.ctx.lineTo(recipX - cellRX - width * 0.04, cellY - height * 0.05);
    this.ctx.stroke();
    this.ctx.setLineDash([]);

    // Arrowhead
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.beginPath();
    const ax = recipX - cellRX - width * 0.04;
    const ay = cellY - height * 0.05;
    this.ctx.moveTo(ax, ay);
    this.ctx.lineTo(ax - 8, ay - 5);
    this.ctx.lineTo(ax - 8, ay + 5);
    this.ctx.closePath();
    this.ctx.fill();

    // Labels
    this.ctx.font = 'bold 8px Arial';
    this.ctx.fillStyle = '#E67E22';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Sex Pilus', width * 0.50, cellY - height * 0.22);

    this.ctx.font = '7px Arial';
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.fillText('ssDNA transfer', width * 0.50, cellY - height * 0.08);

    this.ctx.font = 'bold 8px Arial';
    this.ctx.fillStyle = '#9B59B6';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('F⁺ Donor', donorX, cellY + cellRY + 13);
    this.ctx.fillStyle = '#2980B9';
    this.ctx.fillText('F⁻ Recipient', recipX, cellY + cellRY + 13);

    this.ctx.font = 'italic 7px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.fillText('Horizontal gene transfer via conjugation', width / 2, height * 0.93);
}


// ═══════════════════════════════════════════════════════════════════════════
// VIRUS INSETS
// ═══════════════════════════════════════════════════════════════════════════

drawLyticVsLysogenicInset(width, height) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Lytic vs Lysogenic Cycle', width / 2, 16);

    const colW  = width  * 0.43;
    const colH  = height * 0.72;
    const colY  = height * 0.12;
    const lyticX    = width * 0.04;
    const lysogenX  = width * 0.53;

    // ── Panel backgrounds ─────────────────────────────────────────────────
    this.ctx.fillStyle = '#FDEDEC';
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 1.5;
    this.ctx.beginPath();
    this.ctx.roundRect(lyticX, colY, colW, colH, 4);
    this.ctx.fill();
    this.ctx.stroke();

    this.ctx.fillStyle = '#EAF2FF';
    this.ctx.strokeStyle = '#3498DB';
    this.ctx.beginPath();
    this.ctx.roundRect(lysogenX, colY, colW, colH, 4);
    this.ctx.fill();
    this.ctx.stroke();

    // ── Lytic steps ───────────────────────────────────────────────────────
    this.ctx.font = 'bold 8px Arial';
    this.ctx.fillStyle = '#C0392B';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('LYTIC', lyticX + colW / 2, colY + 12);

    const lyticSteps = ['Attachment', 'Injection', 'Replication', 'Assembly', 'Lysis → burst'];
    const stepColors = ['#F1948A', '#EC7063', '#E74C3C', '#CB4335', '#B03A2E'];
    lyticSteps.forEach((s, i) => {
        const sy = colY + colH * (0.18 + i * 0.16);
        this.ctx.fillStyle = stepColors[i];
        this.ctx.beginPath();
        this.ctx.roundRect(lyticX + colW * 0.10, sy, colW * 0.80, colH * 0.10, 3);
        this.ctx.fill();
        this.ctx.font = '7px Arial';
        this.ctx.fillStyle = '#fff';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(s, lyticX + colW / 2, sy + colH * 0.065);
        // Arrow to next
        if (i < lyticSteps.length - 1) {
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.font = '9px Arial';
            this.ctx.fillText('↓', lyticX + colW / 2, sy + colH * 0.135);
        }
    });

    // ── Lysogenic steps ───────────────────────────────────────────────────
    this.ctx.font = 'bold 8px Arial';
    this.ctx.fillStyle = '#2471A3';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('LYSOGENIC', lysogenX + colW / 2, colY + 12);

    const lysogenicSteps = ['Attachment', 'Injection', 'Integration', 'Prophage', '→ Induction'];
    const lysoColors = ['#85C1E9', '#5DADE2', '#3498DB', '#2E86C1', '#1A5276'];
    lysogenicSteps.forEach((s, i) => {
        const sy = colY + colH * (0.18 + i * 0.16);
        this.ctx.fillStyle = lysoColors[i];
        this.ctx.beginPath();
        this.ctx.roundRect(lysogenX + colW * 0.10, sy, colW * 0.80, colH * 0.10, 3);
        this.ctx.fill();
        this.ctx.font = '7px Arial';
        this.ctx.fillStyle = i > 2 ? '#fff' : '#1A3A5C';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(s, lysogenX + colW / 2, sy + colH * 0.065);
        if (i < lysogenicSteps.length - 1) {
            this.ctx.fillStyle = '#3498DB';
            this.ctx.font = '9px Arial';
            this.ctx.fillText('↓', lysogenX + colW / 2, sy + colH * 0.135);
        }
    });

    // Footer note
    this.ctx.font = 'italic 7px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Induction converts lysogenic → lytic', width / 2, height * 0.93);
}

drawReceptorBindingInset(width, height) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Receptor Binding & Entry', width / 2, 16);

    const hostCellY = height * 0.82;
    const hostCellH = height * 0.15;

    // ── Host cell membrane ────────────────────────────────────────────────
    this.ctx.fillStyle = '#FFC1C1';
    this.ctx.fillRect(0, hostCellY, width, hostCellH);
    this.ctx.strokeStyle = '#C0392B';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(0, hostCellY);
    this.ctx.lineTo(width, hostCellY);
    this.ctx.stroke();

    // Receptor proteins on membrane
    const receptorXs = [0.25, 0.50, 0.75];
    receptorXs.forEach(rx => {
        this.ctx.fillStyle = '#2980B9';
        this.ctx.beginPath();
        this.ctx.roundRect(width * rx - 8, hostCellY - 14, 16, 28, 4);
        this.ctx.fill();
        this.ctx.font = '6px Arial';
        this.ctx.fillStyle = '#fff';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('R', width * rx, hostCellY + 3);
    });

    // ── Virus approaching receptor ────────────────────────────────────────
    // Virus bound to middle receptor
    const virX = width * 0.50;
    const virY = hostCellY - 42;
    const virR = width * 0.08;

    this.ctx.fillStyle = '#E74C3C';
    this.ctx.beginPath();
    this.ctx.arc(virX, virY, virR, 0, Math.PI * 2);
    this.ctx.fill();

    // Spike bound
    this.ctx.strokeStyle = '#A93226';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.moveTo(virX, virY + virR);
    this.ctx.lineTo(virX, hostCellY - 14);
    this.ctx.stroke();

    // Free virus (unbound)
    const freeVirX = width * 0.20;
    const freeVirY = hostCellY - 80;
    this.ctx.fillStyle = 'rgba(231,76,60,0.55)';
    this.ctx.beginPath();
    this.ctx.arc(freeVirX, freeVirY, virR * 0.85, 0, Math.PI * 2);
    this.ctx.fill();

    // Spikes on free virus
    for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2;
        this.ctx.strokeStyle = '#A93226';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(freeVirX + Math.cos(a) * virR * 0.85, freeVirY + Math.sin(a) * virR * 0.85);
        this.ctx.lineTo(freeVirX + Math.cos(a) * virR * 1.25, freeVirY + Math.sin(a) * virR * 1.25);
        this.ctx.stroke();
    }

    // Arrow: approaching
    this.ctx.strokeStyle = '#E67E22';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(freeVirX + virR * 1.1, freeVirY + virR * 0.6);
    this.ctx.lineTo(virX - virR * 1.3, virY - virR * 0.3);
    this.ctx.stroke();
    this.ctx.fillStyle = '#E67E22';
    this.ctx.beginPath();
    this.ctx.arc(virX - virR * 1.3, virY - virR * 0.3, 3, 0, Math.PI * 2);
    this.ctx.fill();

    // Labels
    this.ctx.font = '7px Arial';
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Spike–Receptor', virX + virR + 28, virY + virR * 0.3);
    this.ctx.fillText('binding', virX + virR + 28, virY + virR * 0.3 + 9);

    this.ctx.fillStyle = '#2980B9';
    this.ctx.fillText('Host Receptor', width * 0.50, hostCellY + hostCellH * 0.55);

    this.ctx.font = 'italic 7px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Specificity determines host range & tissue tropism', width / 2, height * 0.05);
}

drawCapsidSymmetryInset(width, height) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Capsid Symmetry Types', width / 2, 16);

    const panelY = height * 0.12;

    // ── Icosahedral ───────────────────────────────────────────────────────
    const icoX = width * 0.22;
    const icoY = panelY + height * 0.22;
    const icoR = width * 0.14;

    this.ctx.fillStyle = '#3498DB';
    AnatomicalShapes.drawIcosahedron(this.ctx, icoX, icoY, icoR);

    // Pentons
    this.ctx.fillStyle = '#E74C3C';
    for (let i = 0; i < 5; i++) {
        const a = (i / 5) * Math.PI * 2;
        const px = icoX + Math.cos(a) * icoR * 0.85;
        const py = icoY + Math.sin(a) * icoR * 0.85;
        this.ctx.beginPath();
        AnatomicalShapes.drawPentagon(this.ctx, px, py, icoR * 0.18);
        this.ctx.fill();
    }

    this.ctx.font = 'bold 8px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Icosahedral', icoX, icoY + icoR + 13);
    this.ctx.font = '7px Arial';
    this.ctx.fillStyle = '#666';
    this.ctx.fillText('e.g. Adenovirus', icoX, icoY + icoR + 22);

    // ── Helical ───────────────────────────────────────────────────────────
    const helX = width * 0.75;
    const helY = panelY + height * 0.22;

    this.ctx.strokeStyle = '#27AE60';
    this.ctx.lineWidth = 5;
    this.ctx.lineCap = 'round';

    // Helix outline (tube)
    for (let side = -1; side <= 1; side += 2) {
        this.ctx.beginPath();
        for (let i = 0; i <= 60; i++) {
            const t  = i / 60;
            const hx = helX + Math.sin(t * Math.PI * 4) * width * 0.08 * side;
            const hy = helY - height * 0.18 + t * height * 0.36;
            i === 0 ? this.ctx.moveTo(hx, hy) : this.ctx.lineTo(hx, hy);
        }
        this.ctx.stroke();
    }

    // Capsomers on helix
    this.ctx.fillStyle = '#229954';
    for (let i = 0; i <= 8; i++) {
        const t  = i / 8;
        const hx = helX + Math.sin(t * Math.PI * 4) * width * 0.08;
        const hy = helY - height * 0.18 + t * height * 0.36;
        this.ctx.beginPath();
        this.ctx.arc(hx, hy, width * 0.025, 0, Math.PI * 2);
        this.ctx.fill();
    }

    this.ctx.font = 'bold 8px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Helical', helX, helY + height * 0.20);
    this.ctx.font = '7px Arial';
    this.ctx.fillStyle = '#666';
    this.ctx.fillText('e.g. TMV, Rabies', helX, helY + height * 0.20 + 9);

    // ── Complex (phage) ───────────────────────────────────────────────────
    const cplX = width * 0.50;
    const cplY = panelY + height * 0.65;

    // Mini phage head
    this.ctx.fillStyle = '#9B59B6';
    this.ctx.beginPath();
    this.ctx.arc(cplX, cplY - height * 0.08, width * 0.07, 0, Math.PI * 2);
    this.ctx.fill();

    // Mini tail
    this.ctx.strokeStyle = '#7D3C98';
    this.ctx.lineWidth = 5;
    this.ctx.beginPath();
    this.ctx.moveTo(cplX, cplY - height * 0.08 + width * 0.07);
    this.ctx.lineTo(cplX, cplY + height * 0.05);
    this.ctx.stroke();

    // Fibers
    this.ctx.lineWidth = 2;
    for (let i = 0; i < 4; i++) {
        const a = (i / 4) * Math.PI * 2;
        this.ctx.beginPath();
        this.ctx.moveTo(cplX + Math.cos(a) * width * 0.03, cplY + height * 0.05);
        this.ctx.lineTo(cplX + Math.cos(a) * width * 0.09, cplY + height * 0.10);
        this.ctx.stroke();
    }

    this.ctx.font = 'bold 8px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Complex', cplX, cplY + height * 0.14);
    this.ctx.font = '7px Arial';
    this.ctx.fillStyle = '#666';
    this.ctx.fillText('e.g. T4 Phage', cplX, cplY + height * 0.14 + 9);
}

drawGenomeTypesInset(width, height) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Viral Genome Types', width / 2, 16);

    const types = [
        { label: 'dsDNA',  color: '#3498DB', y: 0.18, desc: 'Herpesviruses, Adenovirus' },
        { label: 'ssDNA',  color: '#2980B9', y: 0.34, desc: 'Parvoviruses' },
        { label: 'dsRNA',  color: '#E67E22', y: 0.50, desc: 'Reoviruses, Rotavirus' },
        { label: 'ssRNA(+)',color: '#E74C3C', y: 0.63, desc: 'Coronaviruses, Poliovirus' },
        { label: 'ssRNA(−)',color: '#C0392B', y: 0.76, desc: 'Influenza, Rabies' },
        { label: 'ssRNA-RT',color: '#9B59B6', y: 0.89, desc: 'HIV, HTLV' },
    ];

    types.forEach(t => {
        const ty = height * t.y;

        // Colour chip
        this.ctx.fillStyle = t.color;
        this.ctx.beginPath();
        this.ctx.roundRect(width * 0.04, ty - 7, width * 0.18, 13, 3);
        this.ctx.fill();

        // Label
        this.ctx.font = 'bold 8px Arial';
        this.ctx.fillStyle = '#fff';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(t.label, width * 0.04 + width * 0.09, ty + 2);

        // Example
        this.ctx.font = '7px Arial';
        this.ctx.fillStyle = '#555';
        this.ctx.textAlign = 'left';
        this.ctx.fillText(t.desc, width * 0.26, ty + 2);

        // Mini strand visualisation
        this.ctx.strokeStyle = t.color;
        this.ctx.lineWidth = t.label.startsWith('ds') ? 4 : 2;

        if (t.label.includes('DNA') && t.label.startsWith('ds')) {
            // Double helix hint
            for (let s = 0; s < 2; s++) {
                this.ctx.beginPath();
                for (let i = 0; i <= 20; i++) {
                    const sx = width * 0.82 + (i / 20) * width * 0.14;
                    const sy = ty + Math.sin(i * 0.7 + s * Math.PI) * 4;
                    i === 0 ? this.ctx.moveTo(sx, sy) : this.ctx.lineTo(sx, sy);
                }
                this.ctx.stroke();
            }
        } else {
            // Single strand
            this.ctx.beginPath();
            for (let i = 0; i <= 20; i++) {
                const sx = width * 0.82 + (i / 20) * width * 0.14;
                const sy = ty + Math.sin(i * 0.9) * 5;
                i === 0 ? this.ctx.moveTo(sx, sy) : this.ctx.lineTo(sx, sy);
            }
            this.ctx.stroke();
        }
    });
}


// ═══════════════════════════════════════════════════════════════════════════
// FUNGI INSETS
// ═══════════════════════════════════════════════════════════════════════════

drawChitinWallDetailInset(width, height) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Fungal Cell Wall Layers', width / 2, 16);

    // Layer stack (inside → outside, bottom → top of diagram)
    const layers = [
        { label: 'Cytoplasm',          color: '#FEF9E7', h: 0.14 },
        { label: 'Plasma Membrane',    color: '#E74C3C', h: 0.06 },
        { label: '1,3-β-Glucan',       color: '#C8A400', h: 0.10 },
        { label: '1,6-β-Glucan',       color: '#B7950B', h: 0.08 },
        { label: 'Chitin fibres',       color: '#8D6E63', h: 0.10 },
        { label: 'Mannoproteins',       color: '#A9CCE3', h: 0.12 },
        { label: 'GPI proteins',        color: '#7FB3D3', h: 0.08 },
    ];

    let currentY = height * 0.88;
    const layerX = width * 0.08;
    const layerW = width * 0.56;

    layers.forEach(layer => {
        const lh = height * layer.h;
        currentY -= lh;

        this.ctx.fillStyle = layer.color;
        this.ctx.fillRect(layerX, currentY, layerW, lh);
        this.ctx.strokeStyle = AnatomicalShapes.darken(layer.color, 0.75);
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(layerX, currentY, layerW, lh);

        this.ctx.font = '7px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'left';
        this.ctx.fillText(layer.label, layerX + layerW + 6, currentY + lh * 0.60);
    });

    // Chitin fibril detail (enlarged circle)
    const chitinY = height * 0.88 - (0.14 + 0.06 + 0.10 + 0.08) * height - height * 0.05;
    this.ctx.strokeStyle = '#8D6E63';
    this.ctx.lineWidth = 1.5;
    this.ctx.beginPath();
    this.ctx.arc(width * 0.86, height * 0.50, width * 0.10, 0, Math.PI * 2);
    this.ctx.stroke();

    // Chitin fibrils inside circle
    for (let i = 0; i < 5; i++) {
        const fy = height * 0.43 + i * height * 0.035;
        this.ctx.strokeStyle = '#8D6E63';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.76, fy);
        this.ctx.lineTo(width * 0.96, fy);
        this.ctx.stroke();
    }

    this.ctx.font = '7px Arial';
    this.ctx.fillStyle = '#8D6E63';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Chitin', width * 0.86, height * 0.63);
    this.ctx.fillText('fibril', width * 0.86, height * 0.63 + 9);

    // Arrow from chitin layer to enlarged view
    this.ctx.strokeStyle = '#999';
    this.ctx.lineWidth = 1;
    this.ctx.setLineDash([3, 2]);
    this.ctx.beginPath();
    this.ctx.moveTo(layerX + layerW, height * 0.52);
    this.ctx.lineTo(width * 0.76, height * 0.50);
    this.ctx.stroke();
    this.ctx.setLineDash([]);

    // Target annotation
    this.ctx.font = 'italic 7px Arial';
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Antifungal targets:', width / 2, height * 0.93);
    this.ctx.fillText('Echinocandins (glucan) · Azoles (membrane) · Polyenes (ergosterol)', width / 2, height * 0.98);
}

drawSeptumPoreInset(width, height) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Septal Pore Apparatus', width / 2, 16);

    const cx   = width  * 0.50;
    const sepY = height * 0.50;

    // ── Hyphal walls (tube cross-section) ────────────────────────────────
    this.ctx.strokeStyle = '#8D6E63';
    this.ctx.lineWidth = 6;
    // Top wall
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.08, sepY - height * 0.18);
    this.ctx.lineTo(width * 0.92, sepY - height * 0.18);
    this.ctx.stroke();
    // Bottom wall
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.08, sepY + height * 0.18);
    this.ctx.lineTo(width * 0.92, sepY + height * 0.18);
    this.ctx.stroke();

    // ── Septum (cross-wall) ────────────────────────────────────────────
    this.ctx.strokeStyle = '#6D4C41';
    this.ctx.lineWidth = 5;
    // Left half of septum
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.08, sepY);
    this.ctx.lineTo(cx - width * 0.08, sepY);
    this.ctx.stroke();
    // Right half of septum
    this.ctx.beginPath();
    this.ctx.moveTo(cx + width * 0.08, sepY);
    this.ctx.lineTo(width * 0.92, sepY);
    this.ctx.stroke();

    // ── Central pore (gap) ────────────────────────────────────────────────
    this.ctx.fillStyle = '#FEF9E7';
    this.ctx.beginPath();
    this.ctx.ellipse(cx, sepY, width * 0.07, height * 0.06, 0, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.strokeStyle = '#8D6E63';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.ellipse(cx, sepY, width * 0.07, height * 0.06, 0, 0, Math.PI * 2);
    this.ctx.stroke();

    // ── Woronin body (occludes pore in Ascomycetes) ───────────────────────
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.beginPath();
    this.ctx.arc(cx, sepY, width * 0.04, 0, Math.PI * 2);
    this.ctx.fill();

    this.ctx.font = '7px Arial';
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Woronin body', cx + width * 0.09, sepY + 3);
    this.ctx.fillStyle = '#555';
    this.ctx.fillText('(seals pore on injury)', cx + width * 0.09, sepY + 12);

    // ── Cytoplasmic streaming arrows ───────────────────────────────────────
    this.ctx.strokeStyle = '#3498DB';
    this.ctx.lineWidth = 2;
    // Arrow left → right through pore
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.20, sepY - height * 0.08);
    this.ctx.lineTo(cx - width * 0.08, sepY - height * 0.02);
    this.ctx.stroke();

    this.ctx.fillStyle = '#3498DB';
    this.ctx.beginPath();
    this.ctx.arc(cx - width * 0.08, sepY - height * 0.02, 3, 0, Math.PI * 2);
    this.ctx.fill();

    // Labels
    this.ctx.font = 'bold 7px Arial';
    this.ctx.fillStyle = '#6D4C41';
    this.ctx.textAlign = 'right';
    this.ctx.fillText('Septum', width * 0.46, sepY - height * 0.10);

    this.ctx.fillStyle = '#3498DB';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Cytoplasmic flow', width * 0.08, sepY - height * 0.10);

    this.ctx.font = 'italic 7px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Septate hyphae allow nutrient sharing between cells', width / 2, height * 0.92);
}


drawSporeTypesInset(width, height) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Fungal Spore Types', width / 2, 16);

    const spores = [
        { name: 'Conidia',       subName: '(Asexual)',    x: 0.22, y: 0.30, color: '#27AE60', shape: 'oval'    },
        { name: 'Ascospore',     subName: '(Sexual/Asco)',x: 0.65, y: 0.30, color: '#3498DB', shape: 'ellipse' },
        { name: 'Basidiospore',  subName: '(Sexual/Basidio)',x: 0.22, y: 0.72, color: '#9B59B6', shape: 'round' },
        { name: 'Sporangiospore',subName: '(Zygomycetes)',x: 0.65, y: 0.72, color: '#E67E22', shape: 'cluster' },
    ];

    spores.forEach(sp => {
        const sx = width  * sp.x;
        const sy = height * sp.y;

        if (sp.shape === 'oval') {
            // Chain of conidia
            for (let c = 0; c < 4; c++) {
                this.ctx.fillStyle = sp.color;
                this.ctx.beginPath();
                this.ctx.ellipse(sx + c * width * 0.06, sy, width * 0.03, height * 0.045, 0, 0, Math.PI * 2);
                this.ctx.fill();
                this.ctx.strokeStyle = AnatomicalShapes.darken(sp.color, 0.8);
                this.ctx.lineWidth = 1;
                this.ctx.stroke();
            }
            // Conidiophore
            this.ctx.strokeStyle = AnatomicalShapes.darken(sp.color, 0.7);
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.moveTo(sx - width * 0.01, sy);
            this.ctx.lineTo(sx - width * 0.01, sy + height * 0.10);
            this.ctx.stroke();

        } else if (sp.shape === 'ellipse') {
            // Ascus with ascospores
            this.ctx.strokeStyle = sp.color;
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.ellipse(sx, sy, width * 0.07, height * 0.14, 0, 0, Math.PI * 2);
            this.ctx.stroke();
            // 8 spores inside
            for (let i = 0; i < 8; i++) {
                const a = (i / 8) * Math.PI * 2;
                this.ctx.fillStyle = sp.color;
                this.ctx.beginPath();
                this.ctx.ellipse(
                    sx + Math.cos(a) * width * 0.04,
                    sy + Math.sin(a) * height * 0.09,
                    width * 0.015, height * 0.022, a, 0, Math.PI * 2
                );
                this.ctx.fill();
            }

        } else if (sp.shape === 'round') {
            // Basidium with 4 basidiospores on sterigmata
            this.ctx.fillStyle = AnatomicalShapes.darken(sp.color, 0.8);
            this.ctx.beginPath();
            this.ctx.ellipse(sx, sy + height * 0.07, width * 0.05, height * 0.08, 0, 0, Math.PI * 2);
            this.ctx.fill();
            // 4 sterigmata + spores
            for (let i = 0; i < 4; i++) {
                const a = (i / 4) * Math.PI * 2 - Math.PI / 2;
                const stX = sx + Math.cos(a) * width * 0.04;
                const stY = sy + height * 0.07 + Math.sin(a) * height * 0.07;
                const sporeX = sx + Math.cos(a) * width * 0.09;
                const sporeY = sy + height * 0.07 + Math.sin(a) * height * 0.14;
                this.ctx.strokeStyle = AnatomicalShapes.darken(sp.color, 0.8);
                this.ctx.lineWidth = 1.5;
                this.ctx.beginPath();
                this.ctx.moveTo(stX, stY);
                this.ctx.lineTo(sporeX, sporeY);
                this.ctx.stroke();
                this.ctx.fillStyle = sp.color;
                this.ctx.beginPath();
                this.ctx.arc(sporeX, sporeY, width * 0.025, 0, Math.PI * 2);
                this.ctx.fill();
            }

        } else if (sp.shape === 'cluster') {
            // Sporangium
            this.ctx.fillStyle = `${sp.color}88`;
            this.ctx.beginPath();
            this.ctx.arc(sx, sy, width * 0.07, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.strokeStyle = sp.color;
            this.ctx.lineWidth = 2;
            this.ctx.stroke();
            // Spores inside
            for (let i = 0; i < 10; i++) {
                const a = Math.random() * Math.PI * 2;
                const r = Math.random() * width * 0.05;
                this.ctx.fillStyle = sp.color;
                this.ctx.beginPath();
                this.ctx.arc(sx + Math.cos(a) * r, sy + Math.sin(a) * r, width * 0.012, 0, Math.PI * 2);
                this.ctx.fill();
            }
            // Sporangiophore
            this.ctx.strokeStyle = AnatomicalShapes.darken(sp.color, 0.8);
            this.ctx.lineWidth = 2.5;
            this.ctx.beginPath();
            this.ctx.moveTo(sx, sy + width * 0.07);
            this.ctx.lineTo(sx, sy + height * 0.14);
            this.ctx.stroke();
        }

        // Labels
        this.ctx.font = 'bold 7px Arial';
        this.ctx.fillStyle = sp.color;
        this.ctx.textAlign = 'center';
        this.ctx.fillText(sp.name,    sx + width * 0.09, sy + height * 0.19);
        this.ctx.font = '6px Arial';
        this.ctx.fillStyle = '#666';
        this.ctx.fillText(sp.subName, sx + width * 0.09, sy + height * 0.19 + 8);
    });
}

drawDimorphismInset(width, height) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Fungal Dimorphism', width / 2, 16);

    const arrowCX = width * 0.50;
    const midY    = height * 0.48;

    // ── Yeast form (left) ─────────────────────────────────────────────────
    const yeastX  = width * 0.22;
    const yeastY  = midY;

    this.ctx.fillStyle = '#FEF9E7';
    this.ctx.strokeStyle = '#8D6E63';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.ellipse(yeastX, yeastY, width * 0.13, height * 0.18, 0, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();

    // Nucleus
    this.ctx.fillStyle = 'rgba(155,89,182,0.55)';
    this.ctx.beginPath();
    this.ctx.arc(yeastX, yeastY, width * 0.04, 0, Math.PI * 2);
    this.ctx.fill();

    // Budding
    this.ctx.fillStyle = '#FEF9E7';
    this.ctx.strokeStyle = '#8D6E63';
    this.ctx.lineWidth = 2.5;
    this.ctx.beginPath();
    this.ctx.arc(yeastX + width * 0.10, yeastY - height * 0.08, width * 0.06, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();

    this.ctx.font = 'bold 8px Arial';
    this.ctx.fillStyle = '#8D6E63';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Yeast Form', yeastX, yeastY + height * 0.22);
    this.ctx.font = '7px Arial';
    this.ctx.fillStyle = '#555';
    this.ctx.fillText('37°C / host tissue', yeastX, yeastY + height * 0.22 + 9);

    // ── Mold / hyphal form (right) ────────────────────────────────────────
    const moldX = width * 0.78;
    const moldY = midY;

    // Branching hyphae
    const drawHypha = (sx, sy, angle, depth) => {
        if (depth > 2) return;
        const len = width * (0.10 - depth * 0.03);
        const ex  = sx + Math.cos(angle) * len;
        const ey  = sy + Math.sin(angle) * len;
        this.ctx.strokeStyle = '#8D6E63';
        this.ctx.lineWidth   = 3 - depth;
        this.ctx.beginPath();
        this.ctx.moveTo(sx, sy);
        this.ctx.lineTo(ex, ey);
        this.ctx.stroke();
        drawHypha(ex, ey, angle - 0.5, depth + 1);
        drawHypha(ex, ey, angle + 0.5, depth + 1);
    };
    drawHypha(moldX, moldY + height * 0.10, -Math.PI / 2, 0);
    drawHypha(moldX - width * 0.06, moldY, 0, 0);
    drawHypha(moldX + width * 0.06, moldY, Math.PI, 0);

    this.ctx.font = 'bold 8px Arial';
    this.ctx.fillStyle = '#8D6E63';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Mold Form', moldX, moldY + height * 0.22);
    this.ctx.font = '7px Arial';
    this.ctx.fillStyle = '#555';
    this.ctx.fillText('25°C / environment', moldX, moldY + height * 0.22 + 9);

    // ── Bidirectional arrow ───────────────────────────────────────────────
    this.ctx.strokeStyle = '#E67E22';
    this.ctx.lineWidth = 2.5;
    this.ctx.beginPath();
    this.ctx.moveTo(yeastX + width * 0.16, midY);
    this.ctx.lineTo(moldX  - width * 0.16, midY);
    this.ctx.stroke();

    // Arrowheads
    [yeastX + width * 0.16, moldX - width * 0.16].forEach((ax, i) => {
        const dir = i === 0 ? 1 : -1;
        this.ctx.fillStyle = '#E67E22';
        this.ctx.beginPath();
        this.ctx.moveTo(ax, midY);
        this.ctx.lineTo(ax - dir * 9, midY - 5);
        this.ctx.lineTo(ax - dir * 9, midY + 5);
        this.ctx.closePath();
        this.ctx.fill();
    });

    this.ctx.font = '7px Arial';
    this.ctx.fillStyle = '#E67E22';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Temperature switch', arrowCX, midY - 8);

    // Examples
    this.ctx.font = 'italic 7px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('e.g. Histoplasma, Coccidioides, Candida', width / 2, height * 0.93);
}

// ═══════════════════════════════════════════════════════════════════════════
// PROTIST INSETS
// ═══════════════════════════════════════════════════════════════════════════

drawContractileVacuoleInset(width, height) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Contractile Vacuole', width / 2, 16);

    const cx = width  * 0.50;
    const cy = height * 0.46;

    // ── Central vacuole ───────────────────────────────────────────────────
    this.ctx.fillStyle = 'rgba(173,216,230,0.75)';
    this.ctx.strokeStyle = '#5DADE2';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.arc(cx, cy, width * 0.13, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();

    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#2471A3';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('CV', cx, cy + 3);

    // ── Radiating canals ──────────────────────────────────────────────────
    const canalCount = 8;
    for (let i = 0; i < canalCount; i++) {
        const a    = (i / canalCount) * Math.PI * 2;
        const sX   = cx + Math.cos(a) * width  * 0.13;
        const sY   = cy + Math.sin(a) * width  * 0.13;
        const eX   = cx + Math.cos(a) * width  * 0.30;
        const eY   = cy + Math.sin(a) * width  * 0.30;

        this.ctx.strokeStyle = '#85C1E9';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(sX, sY);
        this.ctx.lineTo(eX, eY);
        this.ctx.stroke();

        // Ampullae at tips
        this.ctx.fillStyle = '#AED6F1';
        this.ctx.strokeStyle = '#5DADE2';
        this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.arc(eX, eY, width * 0.025, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();
    }

    // ── Systole / diastole panels ─────────────────────────────────────────
    const panW = width * 0.30;
    const panH = height * 0.18;
    const panY = height * 0.74;

    // Diastole (filling)
    this.ctx.fillStyle = 'rgba(173,216,230,0.35)';
    this.ctx.strokeStyle = '#5DADE2';
    this.ctx.lineWidth = 1.5;
    this.ctx.beginPath();
    this.ctx.roundRect(width * 0.06, panY, panW, panH, 4);
    this.ctx.fill();
    this.ctx.stroke();

    this.ctx.fillStyle = '#85C1E9';
    this.ctx.beginPath();
    this.ctx.arc(width * 0.06 + panW / 2, panY + panH / 2, panW * 0.20, 0, Math.PI * 2);
    this.ctx.fill();

    this.ctx.font = 'bold 7px Arial';
    this.ctx.fillStyle = '#2471A3';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Diastole (fill)', width * 0.06 + panW / 2, panY + panH + 9);

    // Systole (contracting / expelling)
    this.ctx.fillStyle = 'rgba(173,216,230,0.35)';
    this.ctx.strokeStyle = '#5DADE2';
    this.ctx.beginPath();
    this.ctx.roundRect(width * 0.63, panY, panW, panH, 4);
    this.ctx.fill();
    this.ctx.stroke();

    this.ctx.fillStyle = '#5DADE2';
    this.ctx.beginPath();
    this.ctx.arc(width * 0.63 + panW / 2, panY + panH / 2, panW * 0.08, 0, Math.PI * 2);
    this.ctx.fill();

    // Expulsion arrow
    this.ctx.strokeStyle = '#2471A3';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.63 + panW / 2, panY + panH / 2);
    this.ctx.lineTo(width * 0.63 + panW * 0.85, panY + panH / 2);
    this.ctx.stroke();
    this.ctx.fillStyle = '#2471A3';
    this.ctx.beginPath();
    this.ctx.arc(width * 0.63 + panW * 0.85, panY + panH / 2, 3, 0, Math.PI * 2);
    this.ctx.fill();

    this.ctx.font = 'bold 7px Arial';
    this.ctx.fillStyle = '#2471A3';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Systole (expel)', width * 0.63 + panW / 2, panY + panH + 9);

    this.ctx.font = 'italic 7px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Osmoregulation in freshwater protists', width / 2, height * 0.07);
}

drawAxoneme9Plus2Inset(width, height) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('9+2 Axoneme (Cross-section)', width / 2, 16);

    const cx = width  * 0.50;
    const cy = height * 0.48;
    const outerR = width * 0.28;
    const doubletR = width * 0.035;

    // ── Outer membrane ────────────────────────────────────────────────────
    this.ctx.strokeStyle = '#BDC3C7';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(cx, cy, outerR + width * 0.04, 0, Math.PI * 2);
    this.ctx.stroke();

    // ── 9 outer doublets ──────────────────────────────────────────────────
    for (let i = 0; i < 9; i++) {
        const a  = (i / 9) * Math.PI * 2 - Math.PI / 2;
        const dX = cx + Math.cos(a) * outerR;
        const dY = cy + Math.sin(a) * outerR;

        // A-tubule
        this.ctx.fillStyle = '#3498DB';
        this.ctx.strokeStyle = '#2471A3';
        this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.arc(dX, dY, doubletR, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        // B-tubule (partial, offset)
        const bOffX = dX + Math.cos(a + Math.PI / 2) * doubletR * 1.4;
        const bOffY = dY + Math.sin(a + Math.PI / 2) * doubletR * 1.4;
        this.ctx.fillStyle = '#5DADE2';
        this.ctx.beginPath();
        this.ctx.arc(bOffX, bOffY, doubletR * 0.85, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        // Dynein arm (radial spoke hint)
        this.ctx.strokeStyle = '#E67E22';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(dX, dY);
        this.ctx.lineTo(cx + Math.cos(a) * outerR * 0.72, cy + Math.sin(a) * outerR * 0.72);
        this.ctx.stroke();

        // Outer dynein arm
        const dynX = dX + Math.cos(a - Math.PI / 3) * doubletR * 1.8;
        const dynY = dY + Math.sin(a - Math.PI / 3) * doubletR * 1.8;
        this.ctx.fillStyle = '#E67E22';
        this.ctx.beginPath();
        this.ctx.arc(dynX, dynY, doubletR * 0.55, 0, Math.PI * 2);
        this.ctx.fill();
    }

    // ── Central pair (2 singlets) ─────────────────────────────────────────
    const centR = doubletR * 0.90;
    const centOffset = doubletR * 1.3;

    this.ctx.fillStyle = '#E74C3C';
    this.ctx.strokeStyle = '#C0392B';
    this.ctx.lineWidth = 1.5;
    this.ctx.beginPath();
    this.ctx.arc(cx - centOffset, cy, centR, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.arc(cx + centOffset, cy, centR, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();

    // Central sheath
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 1;
    this.ctx.setLineDash([2, 2]);
    this.ctx.beginPath();
    this.ctx.ellipse(cx, cy, centOffset + centR * 1.5, centR * 1.8, 0, 0, Math.PI * 2);
    this.ctx.stroke();
    this.ctx.setLineDash([]);

    // ── Legend ────────────────────────────────────────────────────────────
    const legY = height * 0.83;
    this.ctx.font = '7px Arial';
    this.ctx.textAlign = 'left';

    this.ctx.fillStyle = '#3498DB';
    this.ctx.beginPath();
    this.ctx.arc(width * 0.06, legY, 5, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.fillStyle = '#555';
    this.ctx.fillText('A-tubule (outer doublet)', width * 0.10, legY + 3);

    this.ctx.fillStyle = '#E74C3C';
    this.ctx.beginPath();
    this.ctx.arc(width * 0.06, legY + 12, 5, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.fillStyle = '#555';
    this.ctx.fillText('Central pair singlets', width * 0.10, legY + 15);

    this.ctx.fillStyle = '#E67E22';
    this.ctx.beginPath();
    this.ctx.arc(width * 0.56, legY, 5, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.fillStyle = '#555';
    this.ctx.fillText('Dynein arm (motor)', width * 0.60, legY + 3);

    this.ctx.font = 'italic 7px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Powers cilia & flagella beating', width / 2, height * 0.97);
}

drawApicalComplexInset(width, height) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Apical Complex (Apicomplexa)', width / 2, 16);

    const cx    = width  * 0.38;
    const cellH = height * 0.72;
    const cellY = height * 0.14;

    // ── Parasite cell outline (merozoite shape) ───────────────────────────
    this.ctx.fillStyle = 'rgba(220,20,60,0.12)';
    this.ctx.strokeStyle = '#8B0000';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.ellipse(cx, cellY + cellH * 0.50, width * 0.22, cellH * 0.45, 0, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();

    // ── Apical tip structures (top of cell) ───────────────────────────────
    const apicY = cellY + cellH * 0.06;

    // Polar rings
    this.ctx.strokeStyle = '#4B0082';
    this.ctx.lineWidth = 3;
    for (let r = 0; r < 2; r++) {
        this.ctx.beginPath();
        this.ctx.ellipse(cx, apicY + r * height * 0.06, width * (0.04 + r * 0.04), height * 0.02, 0, 0, Math.PI * 2);
        this.ctx.stroke();
    }

    // Conoid
    this.ctx.fillStyle = 'rgba(75,0,130,0.55)';
    this.ctx.beginPath();
    this.ctx.moveTo(cx - width * 0.03, apicY + height * 0.04);
    this.ctx.lineTo(cx + width * 0.03, apicY + height * 0.04);
    this.ctx.lineTo(cx + width * 0.02, apicY + height * 0.10);
    this.ctx.lineTo(cx - width * 0.02, apicY + height * 0.10);
    this.ctx.closePath();
    this.ctx.fill();

    // Rhoptries (elongated secretory organelles)
    this.ctx.fillStyle = '#E74C3C';
    for (let i = -1; i <= 1; i += 2) {
        this.ctx.beginPath();
        this.ctx.ellipse(cx + i * width * 0.07, apicY + height * 0.22, width * 0.025, height * 0.10, 0, 0, Math.PI * 2);
        this.ctx.fill();
        // Neck
        this.ctx.beginPath();
        this.ctx.ellipse(cx + i * width * 0.04, apicY + height * 0.11, width * 0.012, height * 0.04, 0, 0, Math.PI * 2);
        this.ctx.fill();
    }

    // Micronemes (small rod-shaped)
    this.ctx.fillStyle = '#3498DB';
    for (let i = 0; i < 6; i++) {
        const mx = cx + (i % 3 - 1) * width * 0.08;
        const my = apicY + height * (0.34 + Math.floor(i / 3) * 0.08);
        this.ctx.beginPath();
        this.ctx.ellipse(mx, my, width * 0.030, height * 0.025, 0, 0, Math.PI * 2);
        this.ctx.fill();
    }

    // Dense granules
    this.ctx.fillStyle = '#F39C12';
    for (let i = 0; i < 5; i++) {
        const gx = cx + (i % 3 - 1) * width * 0.09;
        const gy = apicY + height * (0.52 + Math.floor(i / 3) * 0.10);
        this.ctx.beginPath();
        this.ctx.arc(gx, gy, width * 0.022, 0, Math.PI * 2);
        this.ctx.fill();
    }

    // Nucleus
    this.ctx.fillStyle = 'rgba(147,112,219,0.55)';
    this.ctx.beginPath();
    this.ctx.arc(cx, cellY + cellH * 0.70, width * 0.07, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.strokeStyle = '#663399';
    this.ctx.lineWidth = 1.5;
    this.ctx.stroke();

    // ── Labels on right ───────────────────────────────────────────────────
    const labelX = width * 0.64;
    const items  = [
        { label: 'Polar rings',    y: apicY + height * 0.03, color: '#4B0082'  },
        { label: 'Conoid',         y: apicY + height * 0.08, color: '#4B0082'  },
        { label: 'Rhoptries',      y: apicY + height * 0.22, color: '#E74C3C'  },
        { label: 'Micronemes',     y: apicY + height * 0.38, color: '#3498DB'  },
        { label: 'Dense granules', y: apicY + height * 0.55, color: '#F39C12'  },
        { label: 'Nucleus',        y: cellY + cellH * 0.70,  color: '#663399'  },
    ];
    items.forEach(item => {
        this.ctx.strokeStyle = '#CCC';
        this.ctx.lineWidth = 1;
        this.ctx.setLineDash([2, 2]);
        this.ctx.beginPath();
        this.ctx.moveTo(cx + width * 0.24, item.y);
        this.ctx.lineTo(labelX - 4, item.y);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        this.ctx.font = '7px Arial';
        this.ctx.fillStyle = item.color;
        this.ctx.textAlign = 'left';
        this.ctx.fillText(item.label, labelX, item.y + 3);
    });

    this.ctx.font = 'italic 7px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Secretes invasion proteins during host-cell entry', width / 2, height * 0.96);
}

drawFrustuleDetailInset(width, height) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Diatom Frustule (Cross-section)', width / 2, 16);

    const cx      = width  * 0.50;
    const topY    = height * 0.14;
    const botY    = height * 0.82;
    const frustH  = botY - topY;
    const halfW   = width  * 0.30;
    const overlapH = height * 0.07;

    // ── Epitheca (larger, outer half) ─────────────────────────────────────
    this.ctx.fillStyle = 'rgba(218,165,32,0.45)';
    this.ctx.strokeStyle = '#B8860B';
    this.ctx.lineWidth = 3;
    // Top cap
    this.ctx.beginPath();
    this.ctx.roundRect(cx - halfW, topY, halfW * 2, frustH * 0.48, [6, 6, 0, 0]);
    this.ctx.fill();
    this.ctx.stroke();

    // Striae on epitheca
    this.ctx.strokeStyle = 'rgba(139,69,19,0.55)';
    this.ctx.lineWidth = 1.5;
    for (let i = 1; i <= 7; i++) {
        const lx = cx - halfW + (i / 8) * halfW * 2;
        this.ctx.beginPath();
        this.ctx.moveTo(lx, topY + frustH * 0.06);
        this.ctx.lineTo(lx, topY + frustH * 0.44);
        this.ctx.stroke();
    }

    // Raphe line on epitheca
    this.ctx.strokeStyle = '#8B4513';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.moveTo(cx - halfW + 6, topY + frustH * 0.24);
    this.ctx.lineTo(cx + halfW - 6, topY + frustH * 0.24);
    this.ctx.stroke();

    // ── Hypotheca (smaller, inner half) ──────────────────────────────────
    this.ctx.fillStyle = 'rgba(184,134,11,0.35)';
    this.ctx.strokeStyle = '#9A7D0A';
    this.ctx.lineWidth = 3;
    // Bottom cap (slightly smaller = fits inside epitheca)
    this.ctx.beginPath();
    this.ctx.roundRect(cx - halfW * 0.90, topY + frustH * 0.52, halfW * 1.80, frustH * 0.46, [0, 0, 6, 6]);
    this.ctx.fill();
    this.ctx.stroke();

    // Striae on hypotheca
    this.ctx.strokeStyle = 'rgba(139,69,19,0.40)';
    this.ctx.lineWidth = 1;
    for (let i = 1; i <= 7; i++) {
        const lx = cx - halfW * 0.90 + (i / 8) * halfW * 1.80;
        this.ctx.beginPath();
        this.ctx.moveTo(lx, topY + frustH * 0.56);
        this.ctx.lineTo(lx, topY + frustH * 0.94);
        this.ctx.stroke();
    }

    // ── Overlap girdle bands ──────────────────────────────────────────────
    this.ctx.strokeStyle = '#B8860B';
    this.ctx.lineWidth = 2;
    this.ctx.setLineDash([4, 2]);
    this.ctx.beginPath();
    this.ctx.moveTo(cx - halfW,      topY + frustH * 0.48);
    this.ctx.lineTo(cx + halfW,      topY + frustH * 0.48);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(cx - halfW * 0.90, topY + frustH * 0.52);
    this.ctx.lineTo(cx + halfW * 0.90, topY + frustH * 0.52);
    this.ctx.stroke();
    this.ctx.setLineDash([]);

    // ── Labels ────────────────────────────────────────────────────────────
    const labX = cx + halfW + 8;
    this.ctx.font = '7px Arial';
    this.ctx.textAlign = 'left';

    this.ctx.fillStyle = '#B8860B';
    this.ctx.fillText('Epitheca', labX, topY + frustH * 0.18);
    this.ctx.fillText('(epivalve)', labX, topY + frustH * 0.18 + 9);

    this.ctx.strokeStyle = '#CCC';
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    this.ctx.moveTo(cx + halfW, topY + frustH * 0.20);
    this.ctx.lineTo(labX - 3, topY + frustH * 0.20);
    this.ctx.stroke();

    this.ctx.fillStyle = '#9A7D0A';
    this.ctx.fillText('Hypotheca', labX, topY + frustH * 0.65);
    this.ctx.fillText('(hypovalve)', labX, topY + frustH * 0.65 + 9);

    this.ctx.strokeStyle = '#CCC';
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    this.ctx.moveTo(cx + halfW * 0.90, topY + frustH * 0.67);
    this.ctx.lineTo(labX - 3, topY + frustH * 0.67);
    this.ctx.stroke();

    this.ctx.fillStyle = '#8B4513';
    this.ctx.fillText('Raphe', labX, topY + frustH * 0.26);
    this.ctx.strokeStyle = '#CCC';
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    this.ctx.moveTo(cx + halfW, topY + frustH * 0.24);
    this.ctx.lineTo(labX - 3, topY + frustH * 0.26);
    this.ctx.stroke();

    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.fillText('Girdle bands', labX, topY + frustH * 0.50);

    this.ctx.font = 'italic 7px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('SiO₂ wall — each division produces smaller hypotheca', width / 2, height * 0.97);
}

// ═══════════════════════════════════════════════════════════════════════════
// FOOD WEB INSETS
// ═══════════════════════════════════════════════════════════════════════════

drawEnergyFlowInset(w, h) {
    // Title
    this.ctx.font = `bold ${Math.round(h * 0.10)}px Arial`;
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Energy Flow', w / 2, h * 0.12);

    // Five trophic boxes stacked, narrowing upward
    const levels = [
        { label: 'Producers',         kJ: '10,000', color: '#2ECC40', w: 0.82 },
        { label: 'Primary Consumers', kJ: '1,000',  color: '#FF851B', w: 0.62 },
        { label: 'Secondary',         kJ: '100',    color: '#0074D9', w: 0.44 },
        { label: 'Tertiary',          kJ: '10',     color: '#B10DC9', w: 0.28 }
    ];
    const boxH  = h * 0.13;
    const gapH  = h * 0.02;
    const totalH = levels.length * boxH + (levels.length - 1) * gapH;
    let y = h * 0.20;

    levels.forEach(lv => {
        const bw  = w * lv.w;
        const bx  = (w - bw) / 2;
        this.ctx.fillStyle = lv.color;
        this.ctx.fillRect(bx, y, bw, boxH);
        this.ctx.strokeStyle = '#fff';
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(bx, y, bw, boxH);
        this.ctx.font = `bold ${Math.round(h * 0.075)}px Arial`;
        this.ctx.fillStyle = '#fff';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(`${lv.label}  ${lv.kJ} kJ`, w / 2, y + boxH * 0.65);
        y += boxH + gapH;
    });

    // 10% rule label
    this.ctx.font = `italic ${Math.round(h * 0.072)}px Arial`;
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('10% transferred at each level; 90% lost as heat', w / 2, h * 0.94);
}

// ─────────────────────────────────────────────────────────────────────────

drawTrophicEfficiencyInset(w, h) {
    this.ctx.font = `bold ${Math.round(h * 0.10)}px Arial`;
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Trophic Efficiency', w / 2, h * 0.12);

    // Bar chart: efficiency % at each transfer
    const bars = [
        { label: 'P → 1°', pct: 10, color: '#27AE60' },
        { label: '1°→ 2°', pct: 10, color: '#FF851B' },
        { label: '2°→ 3°', pct: 10, color: '#0074D9' }
    ];
    const chartLeft = w * 0.14;
    const chartBot  = h * 0.82;
    const chartH    = h * 0.50;
    const chartW    = w * 0.72;
    const barW      = chartW / (bars.length * 2);

    // Axes
    this.ctx.strokeStyle = '#2C3E50';
    this.ctx.lineWidth = 1.5;
    this.ctx.beginPath();
    this.ctx.moveTo(chartLeft, chartBot - chartH);
    this.ctx.lineTo(chartLeft, chartBot);
    this.ctx.lineTo(chartLeft + chartW, chartBot);
    this.ctx.stroke();

    // Y-axis label
    this.ctx.save();
    this.ctx.translate(chartLeft - w * 0.08, chartBot - chartH / 2);
    this.ctx.rotate(-Math.PI / 2);
    this.ctx.font = `${Math.round(h * 0.068)}px Arial`;
    this.ctx.fillStyle = '#555';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Efficiency (%)', 0, 0);
    this.ctx.restore();

    bars.forEach((b, i) => {
        const bh  = (b.pct / 100) * chartH;
        const bx  = chartLeft + i * (barW * 2) + barW * 0.5;
        const by  = chartBot - bh;
        this.ctx.fillStyle = b.color;
        this.ctx.fillRect(bx, by, barW, bh);

        this.ctx.font = `bold ${Math.round(h * 0.075)}px Arial`;
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(`${b.pct}%`, bx + barW / 2, by - 3);
        this.ctx.font = `${Math.round(h * 0.065)}px Arial`;
        this.ctx.fillText(b.label, bx + barW / 2, chartBot + h * 0.05);
    });

    this.ctx.font = `italic ${Math.round(h * 0.068)}px Arial`;
    this.ctx.fillStyle = '#888';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Lindeman\'s 10% rule — average ecological efficiency', w / 2, h * 0.94);
}

// ─────────────────────────────────────────────────────────────────────────

drawBiomagnificationInset(w, h) {
    this.ctx.font = `bold ${Math.round(h * 0.10)}px Arial`;
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Biomagnification', w / 2, h * 0.12);

    // Silhouette chain + toxin dots increasing upward
    const chain = [
        { label: 'Water',     conc: 0.000001, color: '#4A90E2', r: 0.06 },
        { label: 'Plankton',  conc: 0.0001,   color: '#27AE60', r: 0.07 },
        { label: 'Small Fish',conc: 0.01,     color: '#FF851B', r: 0.08 },
        { label: 'Large Fish',conc: 1.0,      color: '#0074D9', r: 0.09 },
        { label: 'Bird/Human',conc: 25.0,     color: '#E74C3C', r: 0.10 }
    ];
    const spacing = w * 0.18;
    const baseX   = w * 0.10;
    const midY    = h * 0.55;

    chain.forEach((c, i) => {
        const cx = baseX + i * spacing;
        // Node
        this.ctx.fillStyle = c.color;
        this.ctx.beginPath();
        this.ctx.arc(cx, midY, w * c.r, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = '#fff';
        this.ctx.lineWidth = 1;
        this.ctx.stroke();

        // Toxin dots inside (more dots = higher concentration)
        const dots = Math.min(Math.ceil(Math.log10(c.conc + 1e-8) + 9), 8);
        this.ctx.fillStyle = '#FFD700';
        for (let d = 0; d < dots; d++) {
            const angle = (d / 8) * Math.PI * 2;
            const dr    = w * c.r * 0.50;
            this.ctx.beginPath();
            this.ctx.arc(cx + Math.cos(angle) * dr * 0.5,
                         midY + Math.sin(angle) * dr * 0.5,
                         w * 0.012, 0, Math.PI * 2);
            this.ctx.fill();
        }

        // Label
        this.ctx.font = `${Math.round(h * 0.065)}px Arial`;
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(c.label, cx, midY + w * c.r + h * 0.06);

        // Arrow
        if (i < chain.length - 1) {
            const nextX = baseX + (i + 1) * spacing;
            this.ctx.strokeStyle = '#888';
            this.ctx.lineWidth = 1.5;
            this.ctx.beginPath();
            this.ctx.moveTo(cx + w * c.r, midY);
            this.ctx.lineTo(nextX - w * chain[i + 1].r, midY);
            this.ctx.stroke();
        }
    });

    this.ctx.font = `italic ${Math.round(h * 0.068)}px Arial`;
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Toxin concentration multiplies ~10× at each trophic level', w / 2, h * 0.94);
}

// ═══════════════════════════════════════════════════════════════════════════
// CARBON CYCLE INSETS
// ═══════════════════════════════════════════════════════════════════════════

drawCO2MoleculeInset(w, h) {
    this.ctx.font = `bold ${Math.round(h * 0.10)}px Arial`;
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('CO₂ Molecule', w / 2, h * 0.12);

    // Draw a large CO2 molecule centred
    AnatomicalShapes.drawCO2Molecule(this.ctx, w / 2, h * 0.48, w * 0.10);

    // Bond angle label
    this.ctx.font = `bold ${Math.round(h * 0.075)}px Arial`;
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('O', w * 0.24, h * 0.42);
    this.ctx.fillStyle = '#333';
    this.ctx.fillText('C', w * 0.50, h * 0.40);
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.fillText('O', w * 0.76, h * 0.42);

    // Bond labels
    this.ctx.font = `${Math.round(h * 0.068)}px Arial`;
    this.ctx.fillStyle = '#555';
    this.ctx.fillText('double bond', w * 0.34, h * 0.62);
    this.ctx.fillText('double bond', w * 0.66, h * 0.62);

    // Structure line
    this.ctx.strokeStyle = '#333';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(w * 0.28, h * 0.50);
    this.ctx.lineTo(w * 0.44, h * 0.50);
    this.ctx.moveTo(w * 0.56, h * 0.50);
    this.ctx.lineTo(w * 0.72, h * 0.50);
    this.ctx.stroke();

    // 180° label
    this.ctx.font = `bold ${Math.round(h * 0.075)}px Arial`;
    this.ctx.fillStyle = '#0074D9';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Bond angle: 180°  (linear)', w / 2, h * 0.76);

    this.ctx.font = `italic ${Math.round(h * 0.068)}px Arial`;
    this.ctx.fillStyle = '#888';
    this.ctx.fillText('Molecular mass: 44 g/mol   Greenhouse gas', w / 2, h * 0.90);
}

// ─────────────────────────────────────────────────────────────────────────

drawGreenhouseEffectInset(w, h) {
    this.ctx.font = `bold ${Math.round(h * 0.10)}px Arial`;
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Greenhouse Effect', w / 2, h * 0.12);

    // Sun
    this.ctx.fillStyle = '#FFD700';
    this.ctx.beginPath();
    this.ctx.arc(w * 0.12, h * 0.25, w * 0.07, 0, Math.PI * 2);
    this.ctx.fill();

    // Atmosphere band
    this.ctx.fillStyle = 'rgba(135,206,250,0.35)';
    this.ctx.fillRect(0, h * 0.38, w, h * 0.14);
    this.ctx.font = `${Math.round(h * 0.068)}px Arial`;
    this.ctx.fillStyle = '#1A5276';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Atmosphere (CO₂, CH₄, H₂O)', w / 2, h * 0.47);

    // Ground
    this.ctx.fillStyle = '#8B7355';
    this.ctx.fillRect(0, h * 0.78, w, h * 0.10);
    this.ctx.font = `${Math.round(h * 0.065)}px Arial`;
    this.ctx.fillStyle = '#fff';
    this.ctx.fillText('Earth\'s Surface', w / 2, h * 0.855);

    // Solar radiation arrow down
    this.ctx.strokeStyle = '#FFD700';
    this.ctx.lineWidth = 2.5;
    this.ctx.beginPath();
    this.ctx.moveTo(w * 0.25, h * 0.18);
    this.ctx.lineTo(w * 0.35, h * 0.38);
    this.ctx.stroke();
    this.ctx.fillStyle = '#FFD700';
    this.ctx.beginPath();
    this.ctx.moveTo(w * 0.35, h * 0.38);
    this.ctx.lineTo(w * 0.31, h * 0.30);
    this.ctx.lineTo(w * 0.39, h * 0.30);
    this.ctx.closePath();
    this.ctx.fill();
    this.ctx.font = `${Math.round(h * 0.062)}px Arial`;
    this.ctx.fillStyle = '#B8860B';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Solar', w * 0.36, h * 0.28);
    this.ctx.fillText('radiation', w * 0.36, h * 0.34);

    // IR re-emitted up
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 2;
    this.ctx.setLineDash([5, 3]);
    this.ctx.beginPath();
    this.ctx.moveTo(w * 0.55, h * 0.78);
    this.ctx.lineTo(w * 0.50, h * 0.52);
    this.ctx.stroke();
    this.ctx.setLineDash([]);
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.beginPath();
    this.ctx.moveTo(w * 0.50, h * 0.52);
    this.ctx.lineTo(w * 0.47, h * 0.60);
    this.ctx.lineTo(w * 0.53, h * 0.60);
    this.ctx.closePath();
    this.ctx.fill();
    this.ctx.font = `${Math.round(h * 0.062)}px Arial`;
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('IR re-emitted', w * 0.56, h * 0.62);

    // Re-absorbed arrow down
    this.ctx.strokeStyle = '#C0392B';
    this.ctx.lineWidth = 2;
    this.ctx.setLineDash([5, 3]);
    this.ctx.beginPath();
    this.ctx.moveTo(w * 0.72, h * 0.52);
    this.ctx.lineTo(w * 0.72, h * 0.78);
    this.ctx.stroke();
    this.ctx.setLineDash([]);
    this.ctx.fillStyle = '#C0392B';
    this.ctx.beginPath();
    this.ctx.moveTo(w * 0.72, h * 0.78);
    this.ctx.lineTo(w * 0.69, h * 0.70);
    this.ctx.lineTo(w * 0.75, h * 0.70);
    this.ctx.closePath();
    this.ctx.fill();
    this.ctx.font = `${Math.round(h * 0.062)}px Arial`;
    this.ctx.fillStyle = '#C0392B';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Re-absorbed →', w * 0.73, h * 0.68);
    this.ctx.fillText('warming', w * 0.73, h * 0.73);

    this.ctx.font = `italic ${Math.round(h * 0.068)}px Arial`;
    this.ctx.fillStyle = '#888';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('More CO₂ → stronger greenhouse effect → higher temperatures', w / 2, h * 0.94);
}

// ─────────────────────────────────────────────────────────────────────────

drawCarbonReservoirsInset(w, h) {
    this.ctx.font = `bold ${Math.round(h * 0.10)}px Arial`;
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Carbon Reservoirs', w / 2, h * 0.12);

    const reservoirs = [
        { name: 'Deep Ocean',     Gt: 38000, color: '#2E5C8A' },
        { name: 'Fossil Fuels',   Gt: 4000,  color: '#333'    },
        { name: 'Terrestrial',    Gt: 2300,  color: '#27AE60' },
        { name: 'Atmosphere',     Gt: 830,   color: '#87CEEB' },
        { name: 'Surface Ocean',  Gt: 1000,  color: '#4A90E2' }
    ];

    const maxGt   = 38000;
    const barMaxW = w * 0.55;
    const rowH    = h * 0.12;
    const startY  = h * 0.18;
    const labelX  = w * 0.04;
    const barX    = w * 0.38;

    reservoirs.forEach((r, i) => {
        const y   = startY + i * rowH;
        const bw  = (r.Gt / maxGt) * barMaxW;

        // Bar
        this.ctx.fillStyle = r.color;
        this.ctx.fillRect(barX, y + rowH * 0.15, bw, rowH * 0.62);
        this.ctx.strokeStyle = '#fff';
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(barX, y + rowH * 0.15, bw, rowH * 0.62);

        // Label
        this.ctx.font = `${Math.round(h * 0.070)}px Arial`;
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'left';
        this.ctx.fillText(r.name, labelX, y + rowH * 0.65);

        // Value
        this.ctx.font = `bold ${Math.round(h * 0.068)}px Arial`;
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'left';
        this.ctx.fillText(`${r.Gt.toLocaleString()} Gt C`, barX + bw + 4, y + rowH * 0.65);
    });

    this.ctx.font = `italic ${Math.round(h * 0.068)}px Arial`;
    this.ctx.fillStyle = '#888';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Gt C = Gigatonnes of carbon stored', w / 2, h * 0.94);
}

// ═══════════════════════════════════════════════════════════════════════════
// FOOD CHAIN INSETS
// ═══════════════════════════════════════════════════════════════════════════

drawTenPercentRuleInset(w, h) {
    this.ctx.font = `bold ${Math.round(h * 0.10)}px Arial`;
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('The 10% Rule', w / 2, h * 0.12);

    // Large fraction illustration
    // 100 dots at bottom, 10 dots above, 1 dot at top
    const drawDotGrid = (cx, cy, count, dotR, color) => {
        const cols = Math.ceil(Math.sqrt(count));
        let drawn = 0;
        for (let r = 0; r < cols && drawn < count; r++) {
            for (let c = 0; c < cols && drawn < count; c++) {
                this.ctx.fillStyle = color;
                this.ctx.beginPath();
                this.ctx.arc(cx - (cols / 2 - c) * dotR * 2.5,
                             cy + r * dotR * 2.5, dotR, 0, Math.PI * 2);
                this.ctx.fill();
                drawn++;
            }
        }
    };

    drawDotGrid(w * 0.22, h * 0.72, 100, w * 0.012, '#2ECC40');
    this.ctx.font = `bold ${Math.round(h * 0.075)}px Arial`;
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('100 units', w * 0.22, h * 0.87);
    this.ctx.fillText('(Producers)', w * 0.22, h * 0.93);

    drawDotGrid(w * 0.55, h * 0.58, 10, w * 0.015, '#FF851B');
    this.ctx.fillText('10 units', w * 0.55, h * 0.78);
    this.ctx.fillText('(Primary)', w * 0.55, h * 0.84);

    drawDotGrid(w * 0.84, h * 0.46, 1, w * 0.022, '#E74C3C');
    this.ctx.fillText('1 unit', w * 0.84, h * 0.64);
    this.ctx.fillText('(Secondary)', w * 0.84, h * 0.70);

    // Arrows
    this.ctx.strokeStyle = '#888';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(w * 0.35, h * 0.68);
    this.ctx.lineTo(w * 0.44, h * 0.60);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(w * 0.66, h * 0.56);
    this.ctx.lineTo(w * 0.76, h * 0.50);
    this.ctx.stroke();

    this.ctx.font = `bold ${Math.round(h * 0.070)}px Arial`;
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.fillText('×10%', w * 0.40, h * 0.59);
    this.ctx.fillText('×10%', w * 0.71, h * 0.46);

    this.ctx.font = `italic ${Math.round(h * 0.068)}px Arial`;
    this.ctx.fillStyle = '#888';
    this.ctx.fillText('Only 10% of energy passes to each successive level', w / 2, h * 0.09);
}

// ─────────────────────────────────────────────────────────────────────────

drawEnergyLossInset(w, h) {
    this.ctx.font = `bold ${Math.round(h * 0.10)}px Arial`;
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Energy Loss Pathways', w / 2, h * 0.12);

    // Sankey-style block
    const blockX = w * 0.12;
    const blockY = h * 0.24;
    const blockW = w * 0.28;
    const blockH = h * 0.40;

    this.ctx.fillStyle = '#FF851B';
    this.ctx.fillRect(blockX, blockY, blockW, blockH);
    this.ctx.font = `bold ${Math.round(h * 0.072)}px Arial`;
    this.ctx.fillStyle = '#fff';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Organism', blockX + blockW / 2, blockY + blockH * 0.42);
    this.ctx.fillText('(Consumer)', blockX + blockW / 2, blockY + blockH * 0.62);

    const losses = [
        { label: 'Heat (Respiration)',  pct: 60, color: '#E74C3C',  y: 0.26 },
        { label: 'Faeces (Egestion)',   pct: 20, color: '#8B4513',  y: 0.42 },
        { label: 'Excretion (Urine)',   pct: 10, color: '#F39C12',  y: 0.55 }
    ];

    losses.forEach(l => {
        const arrowX1 = blockX + blockW;
        const arrowY  = h * l.y;
        const arrowX2 = w * 0.75;
        const barH    = h * 0.08;

        this.ctx.strokeStyle = l.color;
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(arrowX1, blockY + blockH * 0.50);
        this.ctx.lineTo(arrowX2 - w * 0.05, arrowY);
        this.ctx.stroke();

        this.ctx.fillStyle = l.color;
        this.ctx.fillRect(arrowX2 - w * 0.05, arrowY - barH / 2, w * 0.22, barH);
        this.ctx.font = `${Math.round(h * 0.065)}px Arial`;
        this.ctx.fillStyle = '#fff';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(`${l.pct}% ${l.label}`, arrowX2 + w * 0.06, arrowY + h * 0.024);
    });

    // Transfer arrow
    this.ctx.strokeStyle = '#27AE60';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.moveTo(blockX + blockW / 2, blockY + blockH);
    this.ctx.lineTo(blockX + blockW / 2, h * 0.75);
    this.ctx.stroke();
    this.ctx.font = `bold ${Math.round(h * 0.072)}px Arial`;
    this.ctx.fillStyle = '#27AE60';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('10% → next level', blockX + blockW / 2, h * 0.82);

    this.ctx.font = `italic ${Math.round(h * 0.068)}px Arial`;
    this.ctx.fillStyle = '#888';
    this.ctx.fillText('Energy is lost as heat — it cannot be recycled', w / 2, h * 0.94);
}

// ─────────────────────────────────────────────────────────────────────────

drawTrophicPyramidInset(w, h) {
    this.ctx.font = `bold ${Math.round(h * 0.10)}px Arial`;
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Trophic Pyramid', w / 2, h * 0.12);

    const levels = [
        { name: 'Producers',  color: '#2ECC40', wf: 0.80 },
        { name: '1° Consumer',color: '#FF851B', wf: 0.58 },
        { name: '2° Consumer',color: '#0074D9', wf: 0.38 },
        { name: '3° Consumer',color: '#B10DC9', wf: 0.20 }
    ];
    const bH     = h * 0.14;
    const gap    = h * 0.01;
    const baseY  = h * 0.85;

    levels.forEach((lv, i) => {
        const bw  = w * lv.wf;
        const bx  = (w - bw) / 2;
        const by  = baseY - (i + 1) * (bH + gap);
        this.ctx.fillStyle = lv.color;
        this.ctx.fillRect(bx, by, bw, bH);
        this.ctx.strokeStyle = '#fff';
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(bx, by, bw, bH);
        this.ctx.font = `bold ${Math.round(h * 0.072)}px Arial`;
        this.ctx.fillStyle = '#fff';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(lv.name, w / 2, by + bH * 0.65);
    });

    this.ctx.font = `italic ${Math.round(h * 0.068)}px Arial`;
    this.ctx.fillStyle = '#888';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Widest level = most energy/biomass/numbers', w / 2, h * 0.94);
}

// ═══════════════════════════════════════════════════════════════════════════
// ENERGY PYRAMID INSETS
// ═══════════════════════════════════════════════════════════════════════════

drawEnergyLossHeatInset(w, h) {
    this.ctx.font = `bold ${Math.round(h * 0.10)}px Arial`;
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Energy Lost as Heat', w / 2, h * 0.12);

    // Pie chart: 10% transferred, 90% heat
    const cx = w / 2, cy = h * 0.50, r = Math.min(w, h) * 0.28;

    // 90% heat slice
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.beginPath();
    this.ctx.moveTo(cx, cy);
    this.ctx.arc(cx, cy, r, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * 0.90);
    this.ctx.closePath();
    this.ctx.fill();

    // 10% transferred slice
    this.ctx.fillStyle = '#27AE60';
    this.ctx.beginPath();
    this.ctx.moveTo(cx, cy);
    this.ctx.arc(cx, cy, r, -Math.PI / 2 + Math.PI * 2 * 0.90, -Math.PI / 2 + Math.PI * 2);
    this.ctx.closePath();
    this.ctx.fill();

    this.ctx.strokeStyle = '#fff';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(cx, cy, r, 0, Math.PI * 2);
    this.ctx.stroke();

    // Labels
    this.ctx.font = `bold ${Math.round(h * 0.090)}px Arial`;
    this.ctx.fillStyle = '#fff';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('90%', cx - r * 0.30, cy + r * 0.10);
    this.ctx.font = `${Math.round(h * 0.068)}px Arial`;
    this.ctx.fillText('Heat', cx - r * 0.30, cy + r * 0.28);

    this.ctx.font = `bold ${Math.round(h * 0.072)}px Arial`;
    this.ctx.fillStyle = '#fff';
    this.ctx.fillText('10%', cx + r * 0.72, cy - r * 0.50);
    this.ctx.font = `${Math.round(h * 0.065)}px Arial`;
    this.ctx.fillText('Next level', cx + r * 0.72, cy - r * 0.30);

    this.ctx.font = `italic ${Math.round(h * 0.068)}px Arial`;
    this.ctx.fillStyle = '#888';
    this.ctx.fillText('Heat energy is permanently lost from the food web', w / 2, h * 0.92);
}

// ─────────────────────────────────────────────────────────────────────────

drawLindemanEfficiencyInset(w, h) {
    this.ctx.font = `bold ${Math.round(h * 0.10)}px Arial`;
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Lindeman Efficiency', w / 2, h * 0.12);

    // Formula box
    this.ctx.fillStyle = 'rgba(0,116,217,0.08)';
    this.ctx.beginPath();
    this.ctx.roundRect(w * 0.08, h * 0.20, w * 0.84, h * 0.20, 6);
    this.ctx.fill();
    this.ctx.strokeStyle = '#0074D9';
    this.ctx.lineWidth = 1.5;
    this.ctx.stroke();

    this.ctx.font = `bold ${Math.round(h * 0.082)}px Arial`;
    this.ctx.fillStyle = '#0074D9';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('E = (Energy at level n+1) / (Energy at level n) × 100', w / 2, h * 0.33);

    // Worked example
    const ex = [
        { level: 'Producers',  E: 10000 },
        { level: '1° Consumer',E: 1000  },
        { level: '2° Consumer',E: 100   },
        { level: '3° Consumer',E: 10    }
    ];
    const rowH = h * 0.12;
    const startY = h * 0.46;
    const col1 = w * 0.08, col2 = w * 0.50, col3 = w * 0.78;

    this.ctx.font = `bold ${Math.round(h * 0.072)}px Arial`;
    this.ctx.fillStyle = '#555';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Level', col1, startY);
    this.ctx.fillText('Energy (kJ)', col2, startY);
    this.ctx.fillText('Efficiency', col3, startY);

    ex.forEach((row, i) => {
        const y = startY + (i + 1) * rowH;
        this.ctx.font = `${Math.round(h * 0.068)}px Arial`;
        this.ctx.fillStyle = i % 2 === 0 ? '#2C3E50' : '#555';
        this.ctx.fillText(row.level, col1, y);
        this.ctx.fillText(row.E.toLocaleString(), col2, y);
        this.ctx.fillText(i > 0 ? '10%' : '—', col3, y);
    });

    this.ctx.font = `italic ${Math.round(h * 0.068)}px Arial`;
    this.ctx.fillStyle = '#888';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Real ecosystems: 5–20% efficiency (avg ~10%)', w / 2, h * 0.94);
}

// ─────────────────────────────────────────────────────────────────────────

drawInvertedPyramidInset(w, h) {
    this.ctx.font = `bold ${Math.round(h * 0.10)}px Arial`;
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Inverted Pyramid', w / 2, h * 0.12);

    // Normal pyramid (left)
    this.ctx.font = `bold ${Math.round(h * 0.072)}px Arial`;
    this.ctx.fillStyle = '#555';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Normal', w * 0.27, h * 0.22);

    const normalLevels = [
        { wf: 0.42, color: '#2ECC40' },
        { wf: 0.28, color: '#FF851B' },
        { wf: 0.16, color: '#0074D9' }
    ];
    const bH = h * 0.12;
    const gap = h * 0.01;
    const baseY = h * 0.72;

    normalLevels.forEach((lv, i) => {
        const bw = w * lv.wf;
        const bx = w * 0.27 - bw / 2;
        const by = baseY - (i + 1) * (bH + gap);
        this.ctx.fillStyle = lv.color;
        this.ctx.fillRect(bx, by, bw, bH);
    });

    // Inverted pyramid (right) — marine phytoplankton example
    this.ctx.font = `bold ${Math.round(h * 0.072)}px Arial`;
    this.ctx.fillStyle = '#555';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Inverted', w * 0.73, h * 0.22);
    this.ctx.font = `${Math.round(h * 0.060)}px Arial`;
    this.ctx.fillText('(e.g. marine)', w * 0.73, h * 0.30);

    const invertedLevels = [
        { wf: 0.12, color: '#2ECC40' },  // phytoplankton — tiny biomass
        { wf: 0.24, color: '#FF851B' },
        { wf: 0.38, color: '#0074D9' }
    ];
    invertedLevels.forEach((lv, i) => {
        const bw = w * lv.wf;
        const bx = w * 0.73 - bw / 2;
        const by = baseY - (i + 1) * (bH + gap);
        this.ctx.fillStyle = lv.color;
        this.ctx.fillRect(bx, by, bw, bH);
    });

    this.ctx.font = `italic ${Math.round(h * 0.068)}px Arial`;
    this.ctx.fillStyle = '#888';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Biomass pyramids can be inverted in aquatic systems', w / 2, h * 0.88);
    this.ctx.fillText('(fast-reproducing phytoplankton support large consumers)', w / 2, h * 0.94);
}

// ═══════════════════════════════════════════════════════════════════════════
// NITROGEN CYCLE INSETS
// ═══════════════════════════════════════════════════════════════════════════

drawN2MoleculeInset(w, h) {
    this.ctx.font = `bold ${Math.round(h * 0.10)}px Arial`;
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('N₂ Molecule', w / 2, h * 0.12);

    // Large N2 molecule
    AnatomicalShapes.drawN2Molecule(this.ctx, w / 2, h * 0.46, w * 0.12);

    // Labels
    this.ctx.font = `bold ${Math.round(h * 0.082)}px Arial`;
    this.ctx.fillStyle = '#0074D9';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('N', w * 0.34, h * 0.42);
    this.ctx.fillText('N', w * 0.66, h * 0.42);

    // Triple bond annotation
    this.ctx.font = `bold ${Math.round(h * 0.075)}px Arial`;
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.fillText('≡ Triple bond', w / 2, h * 0.64);

    // Bond energy
    this.ctx.fillStyle = 'rgba(231,76,60,0.10)';
    this.ctx.beginPath();
    this.ctx.roundRect(w * 0.10, h * 0.68, w * 0.80, h * 0.12, 5);
    this.ctx.fill();
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 1;
    this.ctx.stroke();
    this.ctx.font = `bold ${Math.round(h * 0.072)}px Arial`;
    this.ctx.fillStyle = '#C0392B';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Bond energy: 945 kJ/mol — very stable!', w / 2, h * 0.77);

    this.ctx.font = `${Math.round(h * 0.070)}px Arial`;
    this.ctx.fillStyle = '#555';
    this.ctx.fillText('78% of atmosphere • Must be "fixed" to be usable', w / 2, h * 0.88);

    this.ctx.font = `italic ${Math.round(h * 0.065)}px Arial`;
    this.ctx.fillStyle = '#888';
    this.ctx.fillText('Only bacteria & lightning can break the triple bond', w / 2, h * 0.95);
}

// ─────────────────────────────────────────────────────────────────────────

drawRhizobiumNoduleInset(w, h) {
    this.ctx.font = `bold ${Math.round(h * 0.10)}px Arial`;
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Root Nodule', w / 2, h * 0.12);

    // Root (vertical green bar)
    this.ctx.fillStyle = '#8B4513';
    this.ctx.fillRect(w * 0.46, h * 0.18, w * 0.08, h * 0.60);

    // Nodule (ellipse on root)
    const nodX = w * 0.50, nodY = h * 0.46;
    this.ctx.fillStyle = '#FFA07A';
    this.ctx.beginPath();
    this.ctx.ellipse(nodX, nodY, w * 0.14, h * 0.12, 0, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.strokeStyle = '#CC6633';
    this.ctx.lineWidth = 2;
    this.ctx.stroke();

    // Bacteria dots inside nodule
    this.ctx.fillStyle = '#8B008B';
    for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const bx = nodX + Math.cos(angle) * w * 0.065;
        const by = nodY + Math.sin(angle) * h * 0.055;
        this.ctx.beginPath();
        this.ctx.ellipse(bx, by, w * 0.018, h * 0.012, angle, 0, Math.PI * 2);
        this.ctx.fill();
    }

    // Labels
    this.ctx.font = `${Math.round(h * 0.070)}px Arial`;
    this.ctx.fillStyle = '#8B4513';
    this.ctx.textAlign = 'right';
    this.ctx.fillText('Root', w * 0.44, h * 0.30);

    this.ctx.fillStyle = '#CC6633';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Nodule', w * 0.66, h * 0.40);
    this.ctx.fillStyle = '#8B008B';
    this.ctx.fillText('Rhizobium', w * 0.66, h * 0.50);
    this.ctx.fillText('bacteria', w * 0.66, h * 0.57);

    // N2 → NH3 label
    this.ctx.font = `bold ${Math.round(h * 0.075)}px Arial`;
    this.ctx.fillStyle = '#0074D9';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('N₂  →  NH₃', w / 2, h * 0.74);
    this.ctx.font = `${Math.round(h * 0.065)}px Arial`;
    this.ctx.fillStyle = '#555';
    this.ctx.fillText('Mutualistic symbiosis', w / 2, h * 0.83);

    this.ctx.font = `italic ${Math.round(h * 0.068)}px Arial`;
    this.ctx.fillStyle = '#888';
    this.ctx.fillText('Plant supplies sugars; bacteria fix nitrogen', w / 2, h * 0.94);
}

// ─────────────────────────────────────────────────────────────────────────

drawNitrogenFormsInset(w, h) {
    this.ctx.font = `bold ${Math.round(h * 0.10)}px Arial`;
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Nitrogen Forms in Soil', w / 2, h * 0.12);

    const forms = [
        { symbol: 'N₂',    name: 'Dinitrogen',  sub: 'atmosphere',   color: '#87CEEB', x: 0.16 },
        { symbol: 'NH₃',   name: 'Ammonia',     sub: 'fixation product', color: '#FF6B6B', x: 0.38 },
        { symbol: 'NO₂⁻',  name: 'Nitrite',     sub: 'intermediate', color: '#4ECDC4', x: 0.61 },
        { symbol: 'NO₃⁻',  name: 'Nitrate',     sub: 'plant-usable', color: '#95E1D3', x: 0.84 }
    ];

    forms.forEach((f, i) => {
        const cx = w * f.x;
        const cy = h * 0.47;
        const r  = w * 0.080;

        this.ctx.fillStyle = f.color;
        this.ctx.beginPath();
        this.ctx.arc(cx, cy, r, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = '#fff';
        this.ctx.lineWidth = 1.5;
        this.ctx.stroke();

        this.ctx.font = `bold ${Math.round(h * 0.075)}px Arial`;
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(f.symbol, cx, cy + h * 0.010);

        this.ctx.font = `bold ${Math.round(h * 0.065)}px Arial`;
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.fillText(f.name, cx, cy + r + h * 0.055);
        this.ctx.font = `italic ${Math.round(h * 0.058)}px Arial`;
        this.ctx.fillStyle = '#888';
        this.ctx.fillText(f.sub, cx, cy + r + h * 0.095);

        // Arrow to next
        if (i < forms.length - 1) {
            const nextCx = w * forms[i + 1].x;
            this.ctx.strokeStyle = '#555';
            this.ctx.lineWidth = 1.5;
            this.ctx.beginPath();
            this.ctx.moveTo(cx + r, cy);
            this.ctx.lineTo(nextCx - r, cy);
            this.ctx.stroke();
            this.ctx.fillStyle = '#555';
            this.ctx.beginPath();
            this.ctx.moveTo(nextCx - r, cy);
            this.ctx.lineTo(nextCx - r - 8, cy - 4);
            this.ctx.lineTo(nextCx - r - 8, cy + 4);
            this.ctx.closePath();
            this.ctx.fill();
        }
    });

    // Process labels between nodes
    const processLabels = ['Fixation', 'Nitrification', 'Nitrification'];
    processLabels.forEach((p, i) => {
        const cx = w * ((forms[i].x + forms[i + 1].x) / 2);
        this.ctx.font = `italic ${Math.round(h * 0.060)}px Arial`;
        this.ctx.fillStyle = '#E74C3C';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(p, cx, h * 0.34);
    });

    this.ctx.font = `italic ${Math.round(h * 0.068)}px Arial`;
    this.ctx.fillStyle = '#888';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Plants can only absorb NH₄⁺ and NO₃⁻ directly', w / 2, h * 0.94);
}

// ═══════════════════════════════════════════════════════════════════════════
// WATER CYCLE INSETS
// ═══════════════════════════════════════════════════════════════════════════

drawWaterMoleculeInset(w, h) {
    this.ctx.font = `bold ${Math.round(h * 0.10)}px Arial`;
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('H₂O Molecule', w / 2, h * 0.12);

    // Oxygen atom (large, red)
    const ox = w / 2, oy = h * 0.46;
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.beginPath();
    this.ctx.arc(ox, oy, w * 0.10, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.font = `bold ${Math.round(h * 0.085)}px Arial`;
    this.ctx.fillStyle = '#fff';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('O', ox, oy + h * 0.014);

    // Hydrogen atoms at 104.5° bond angle
    const bondLen = w * 0.18;
    const halfAngle = (104.5 / 2) * (Math.PI / 180);

    const h1x = ox - Math.sin(halfAngle) * bondLen;
    const h1y = oy + Math.cos(halfAngle) * bondLen;
    const h2x = ox + Math.sin(halfAngle) * bondLen;
    const h2y = oy + Math.cos(halfAngle) * bondLen;

    // Bonds
    this.ctx.strokeStyle = '#555';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.moveTo(ox, oy);
    this.ctx.lineTo(h1x, h1y);
    this.ctx.moveTo(ox, oy);
    this.ctx.lineTo(h2x, h2y);
    this.ctx.stroke();

    // H atoms
    [{ x: h1x, y: h1y }, { x: h2x, y: h2y }].forEach(pos => {
        this.ctx.fillStyle = '#3498DB';
        this.ctx.beginPath();
        this.ctx.arc(pos.x, pos.y, w * 0.065, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.font = `bold ${Math.round(h * 0.080)}px Arial`;
        this.ctx.fillStyle = '#fff';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('H', pos.x, pos.y + h * 0.012);
    });

    // Bond angle arc
    this.ctx.strokeStyle = '#F39C12';
    this.ctx.lineWidth = 1.5;
    this.ctx.beginPath();
    this.ctx.arc(ox, oy, w * 0.08, Math.PI / 2 + halfAngle, Math.PI / 2 - halfAngle);
    this.ctx.stroke();
    this.ctx.font = `bold ${Math.round(h * 0.068)}px Arial`;
    this.ctx.fillStyle = '#F39C12';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('104.5°', ox, oy - w * 0.08 - h * 0.02);

    this.ctx.font = `${Math.round(h * 0.068)}px Arial`;
    this.ctx.fillStyle = '#555';
    this.ctx.fillText('Polar molecule — enables hydrogen bonding', w / 2, h * 0.90);

    this.ctx.font = `italic ${Math.round(h * 0.065)}px Arial`;
    this.ctx.fillStyle = '#888';
    this.ctx.fillText('Unique properties: high specific heat, surface tension', w / 2, h * 0.96);
}

// ─────────────────────────────────────────────────────────────────────────

drawTranspirationDetailInset(w, h) {
    this.ctx.font = `bold ${Math.round(h * 0.10)}px Arial`;
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Transpiration', w / 2, h * 0.12);

    // Leaf cross-section
    this.ctx.fillStyle = '#2ECC40';
    this.ctx.beginPath();
    this.ctx.ellipse(w / 2, h * 0.40, w * 0.36, h * 0.14, 0, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.strokeStyle = '#1A9929';
    this.ctx.lineWidth = 2;
    this.ctx.stroke();

    // Stomata on underside
    const stomataCY = h * 0.54;
    [-0.20, 0, 0.20].forEach(dx => {
        this.ctx.fillStyle = '#1A5E1A';
        this.ctx.beginPath();
        this.ctx.ellipse(w / 2 + w * dx, stomataCY, w * 0.04, h * 0.018, 0, 0, Math.PI * 2);
        this.ctx.fill();
    });
    this.ctx.font = `${Math.round(h * 0.065)}px Arial`;
    this.ctx.fillStyle = '#1A5E1A';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Stomata (open)', w / 2, h * 0.63);

    // Water vapour arrows upward from stomata
    this.ctx.strokeStyle = '#4A90E2';
    this.ctx.lineWidth = 2;
    this.ctx.setLineDash([4, 3]);
    [-0.20, 0, 0.20].forEach(dx => {
        const ax = w / 2 + w * dx;
        this.ctx.beginPath();
        this.ctx.moveTo(ax, stomataCY - h * 0.02);
        this.ctx.lineTo(ax, h * 0.22);
        this.ctx.stroke();
        // Arrow tip
        this.ctx.setLineDash([]);
        this.ctx.fillStyle = '#4A90E2';
        this.ctx.beginPath();
        this.ctx.moveTo(ax, h * 0.22);
        this.ctx.lineTo(ax - 4, h * 0.27);
        this.ctx.lineTo(ax + 4, h * 0.27);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.setLineDash([4, 3]);
    });
    this.ctx.setLineDash([]);

    // H2O label
    this.ctx.font = `bold ${Math.round(h * 0.072)}px Arial`;
    this.ctx.fillStyle = '#4A90E2';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('H₂O vapour', w / 2, h * 0.17);

    // Xylem label inside leaf
    this.ctx.font = `${Math.round(h * 0.065)}px Arial`;
    this.ctx.fillStyle = '#fff';
    this.ctx.fillText('Xylem (water transport)', w / 2, h * 0.40);

    // Factors
    this.ctx.font = `${Math.round(h * 0.065)}px Arial`;
    this.ctx.fillStyle = '#555';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Rate ↑ with: heat, wind, low humidity', w * 0.06, h * 0.78);
    this.ctx.fillText('Rate ↓ with: stomatal closure (night, drought)', w * 0.06, h * 0.85);

    this.ctx.font = `italic ${Math.round(h * 0.068)}px Arial`;
    this.ctx.fillStyle = '#888';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Transpiration = 90% of water lost from plants', w / 2, h * 0.94);
}

// ─────────────────────────────────────────────────────────────────────────

drawGroundwaterFlowInset(w, h) {
    this.ctx.font = `bold ${Math.round(h * 0.10)}px Arial`;
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Groundwater Flow', w / 2, h * 0.12);

    // Soil layers
    const layers = [
        { name: 'Unsaturated Zone', color: '#D4A96A', y: 0.20, h: 0.20 },
        { name: 'Water Table',      color: '#4A90E2', y: 0.40, h: 0.03, label: true },
        { name: 'Saturated Zone\n(Aquifer)', color: 'rgba(74,144,226,0.30)', y: 0.43, h: 0.25 },
        { name: 'Impermeable Rock', color: '#555',    y: 0.68, h: 0.12 }
    ];
    layers.forEach(l => {
        this.ctx.fillStyle = l.color;
        this.ctx.fillRect(w * 0.06, h * l.y, w * 0.88, h * l.h);
        if (l.name !== 'Water Table') {
            this.ctx.font = `${Math.round(h * 0.065)}px Arial`;
            this.ctx.fillStyle = l.color === '#555' || l.color === '#D4A96A' ? '#fff' : '#1A3A5C';
            this.ctx.textAlign = 'center';
            l.name.split('\n').forEach((line, li) => {
                this.ctx.fillText(line, w / 2, h * (l.y + l.h * 0.45 + li * 0.055));
            });
        }
    });
    // Water table label
    this.ctx.font = `bold ${Math.round(h * 0.068)}px Arial`;
    this.ctx.fillStyle = '#0074D9';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('← Water Table', w * 0.52, h * 0.43);

    // Infiltration arrows
    this.ctx.strokeStyle = '#4A90E2';
    this.ctx.lineWidth = 2;
    this.ctx.setLineDash([4, 3]);
    [0.20, 0.35, 0.50].forEach(rx => {
        this.ctx.beginPath();
        this.ctx.moveTo(w * rx, h * 0.20);
        this.ctx.lineTo(w * rx, h * 0.40);
        this.ctx.stroke();
    });
    this.ctx.setLineDash([]);

    // Horizontal groundwater flow arrow
    this.ctx.strokeStyle = '#0074D9';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.moveTo(w * 0.15, h * 0.56);
    this.ctx.lineTo(w * 0.82, h * 0.56);
    this.ctx.stroke();
    this.ctx.fillStyle = '#0074D9';
    this.ctx.beginPath();
    this.ctx.moveTo(w * 0.82, h * 0.56);
    this.ctx.lineTo(w * 0.76, h * 0.53);
    this.ctx.lineTo(w * 0.76, h * 0.59);
    this.ctx.closePath();
    this.ctx.fill();
    this.ctx.font = `${Math.round(h * 0.065)}px Arial`;
    this.ctx.fillStyle = '#0074D9';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Groundwater flow →', w / 2, h * 0.51);

    this.ctx.font = `italic ${Math.round(h * 0.068)}px Arial`;
    this.ctx.fillStyle = '#888';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Aquifers supply ~30% of global freshwater needs', w / 2, h * 0.88);
    this.ctx.fillText('Recharge rate often slower than extraction', w / 2, h * 0.94);
}

// ═══════════════════════════════════════════════════════════════════════════
// POPULATION GROWTH INSETS
// ═══════════════════════════════════════════════════════════════════════════

drawGrowthEquationInset(w, h) {
    this.ctx.font = `bold ${Math.round(h * 0.10)}px Arial`;
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Growth Equations', w / 2, h * 0.12);

    // Exponential equation box
    this.ctx.fillStyle = 'rgba(231,76,60,0.08)';
    this.ctx.beginPath();
    this.ctx.roundRect(w * 0.06, h * 0.20, w * 0.88, h * 0.22, 6);
    this.ctx.fill();
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 1.5;
    this.ctx.stroke();

    this.ctx.font = `bold ${Math.round(h * 0.082)}px Arial`;
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Exponential:   dN/dt = rN', w / 2, h * 0.31);
    this.ctx.font = `${Math.round(h * 0.065)}px Arial`;
    this.ctx.fillStyle = '#888';
    this.ctx.fillText('N = population size   r = intrinsic rate of increase', w / 2, h * 0.38);

    // Logistic equation box
    this.ctx.fillStyle = 'rgba(0,116,217,0.08)';
    this.ctx.beginPath();
    this.ctx.roundRect(w * 0.06, h * 0.46, w * 0.88, h * 0.26, 6);
    this.ctx.fill();
    this.ctx.strokeStyle = '#0074D9';
    this.ctx.lineWidth = 1.5;
    this.ctx.stroke();

    this.ctx.font = `bold ${Math.round(h * 0.082)}px Arial`;
    this.ctx.fillStyle = '#0074D9';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Logistic:   dN/dt = rN(K − N) / K', w / 2, h * 0.57);
    this.ctx.font = `${Math.round(h * 0.065)}px Arial`;
    this.ctx.fillStyle = '#888';
    this.ctx.fillText('K = carrying capacity', w / 2, h * 0.64);
    this.ctx.fillText('When N ≪ K  →  exponential growth', w / 2, h * 0.70);
    this.ctx.fillText('When N = K  →  growth rate = 0', w / 2, h * 0.75);

    // Key difference note
    this.ctx.font = `bold ${Math.round(h * 0.070)}px Arial`;
    this.ctx.fillStyle = '#27AE60';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Max growth rate at N = K/2  (inflection point)', w / 2, h * 0.86);

    this.ctx.font = `italic ${Math.round(h * 0.065)}px Arial`;
    this.ctx.fillStyle = '#888';
    this.ctx.fillText('r-selected species: high r   K-selected: high K', w / 2, h * 0.94);
}

// ─────────────────────────────────────────────────────────────────────────

drawDensityDependenceInset(w, h) {
    this.ctx.font = `bold ${Math.round(h * 0.10)}px Arial`;
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Density Dependence', w / 2, h * 0.12);

    // Two panels side by side
    // Left: density-dependent factors
    this.ctx.fillStyle = 'rgba(231,76,60,0.10)';
    this.ctx.beginPath();
    this.ctx.roundRect(w * 0.04, h * 0.20, w * 0.44, h * 0.58, 5);
    this.ctx.fill();
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 1.5;
    this.ctx.stroke();

    this.ctx.font = `bold ${Math.round(h * 0.075)}px Arial`;
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Density-Dependent', w * 0.26, h * 0.29);
    this.ctx.font = `${Math.round(h * 0.065)}px Arial`;
    this.ctx.fillStyle = '#2C3E50';
    const dd = ['• Competition', '• Predation', '• Disease', '• Parasitism', '• Starvation'];
    dd.forEach((item, i) => {
        this.ctx.fillText(item, w * 0.26, h * (0.37 + i * 0.075));
    });

    // Right: density-independent factors
    this.ctx.fillStyle = 'rgba(0,116,217,0.10)';
    this.ctx.beginPath();
    this.ctx.roundRect(w * 0.52, h * 0.20, w * 0.44, h * 0.58, 5);
    this.ctx.fill();
    this.ctx.strokeStyle = '#0074D9';
    this.ctx.lineWidth = 1.5;
    this.ctx.stroke();

    this.ctx.font = `bold ${Math.round(h * 0.075)}px Arial`;
    this.ctx.fillStyle = '#0074D9';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Density-Independent', w * 0.74, h * 0.29);
    this.ctx.font = `${Math.round(h * 0.065)}px Arial`;
    this.ctx.fillStyle = '#2C3E50';
    const di = ['• Temperature', '• Floods/Drought', '• Fire', '• Volcanic eruption', '• Human activity'];
    di.forEach((item, i) => {
        this.ctx.fillText(item, w * 0.74, h * (0.37 + i * 0.075));
    });

    this.ctx.font = `italic ${Math.round(h * 0.068)}px Arial`;
    this.ctx.fillStyle = '#888';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Density-dependent factors create negative feedback → stabilise populations', w / 2, h * 0.88);
    this.ctx.fillText('Density-independent factors act regardless of population size', w / 2, h * 0.94);
}

// ─────────────────────────────────────────────────────────────────────────

drawLimitingFactorsInset(w, h) {
    this.ctx.font = `bold ${Math.round(h * 0.10)}px Arial`;
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Limiting Factors', w / 2, h * 0.12);

    // Liebig's barrel illustration (stave diagram)
    const barrelX  = w * 0.28;
    const barrelY  = h * 0.22;
    const barrelW  = w * 0.44;
    const barrelH  = h * 0.52;
    const nStaves  = 6;
    const staveW   = barrelW / nStaves;

    // Stave heights (one short = limiting factor)
    const staveHeights = [1.0, 0.95, 0.70, 1.0, 0.90, 1.0]; // 0.70 = limiting
    const staveColors  = ['#2ECC40','#27AE60','#E74C3C','#2ECC40','#27AE60','#27AE60'];
    const staveLabels  = ['N', 'P', 'H₂O', 'Light', 'CO₂', 'Temp'];

    staveHeights.forEach((frac, i) => {
        const sh = barrelH * frac;
        const sx = barrelX + i * staveW;
        const sy = barrelY + barrelH - sh;
        this.ctx.fillStyle = staveColors[i];
        this.ctx.fillRect(sx + 1, sy, staveW - 2, sh);
        this.ctx.strokeStyle = '#fff';
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(sx + 1, sy, staveW - 2, sh);

        this.ctx.font = `${Math.round(h * 0.060)}px Arial`;
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(staveLabels[i], sx + staveW / 2, barrelY + barrelH + h * 0.04);
    });

    // Water level line (at shortest stave)
    const waterY = barrelY + barrelH - barrelH * 0.70;
    this.ctx.strokeStyle = '#4A90E2';
    this.ctx.lineWidth = 2.5;
    this.ctx.setLineDash([6, 3]);
    this.ctx.beginPath();
    this.ctx.moveTo(barrelX, waterY);
    this.ctx.lineTo(barrelX + barrelW, waterY);
    this.ctx.stroke();
    this.ctx.setLineDash([]);

    // Arrow pointing to short stave
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(barrelX + 2.5 * staveW + staveW / 2 + w * 0.08, waterY - h * 0.04);
    this.ctx.lineTo(barrelX + 2.5 * staveW + staveW / 2, waterY - h * 0.01);
    this.ctx.stroke();
    this.ctx.font = `bold ${Math.round(h * 0.068)}px Arial`;
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Limiting', barrelX + barrelW + w * 0.04, waterY - h * 0.02);
    this.ctx.fillText('factor', barrelX + barrelW + w * 0.04, waterY + h * 0.02);

    this.ctx.font = `bold ${Math.round(h * 0.072)}px Arial`;
    this.ctx.fillStyle = '#0074D9';
    this.ctx.textAlign = 'center';
    this.ctx.fillText("Liebig's Law of the Minimum", w / 2, h * 0.84);

    this.ctx.font = `italic ${Math.round(h * 0.065)}px Arial`;
    this.ctx.fillStyle = '#888';
    this.ctx.fillText('Growth is limited by the scarcest essential resource', w / 2, h * 0.92);
}

// ═══════════════════════════════════════════════════════════════════════════
// ECOSYSTEM INSETS
// ═══════════════════════════════════════════════════════════════════════════

drawEnergyNutrientFlowInset(w, h) {
    this.ctx.font = `bold ${Math.round(h * 0.10)}px Arial`;
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Energy vs Nutrient Flow', w / 2, h * 0.12);

    // Two column comparison
    const colA = w * 0.25, colB = w * 0.75;

    // Headers
    this.ctx.font = `bold ${Math.round(h * 0.080)}px Arial`;
    this.ctx.fillStyle = '#FFD700';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('⚡ Energy', colA, h * 0.22);
    this.ctx.fillStyle = '#27AE60';
    this.ctx.fillText('♻ Nutrients', colB, h * 0.22);

    // Vertical divider
    this.ctx.strokeStyle = '#DDD';
    this.ctx.lineWidth = 1.5;
    this.ctx.beginPath();
    this.ctx.moveTo(w / 2, h * 0.17);
    this.ctx.lineTo(w / 2, h * 0.88);
    this.ctx.stroke();

    const rowsA = ['One-way flow', 'Cannot be recycled', 'Lost as heat', 'Source: Sun', 'Decreases\nup chain'];
    const rowsB = ['Cyclic flow', 'Continuously recycled', 'Returned by decomposers', 'Source: abiotic', 'Conserved\nin ecosystem'];

    const rowH = h * 0.12;
    const startY = h * 0.30;

    rowsA.forEach((row, i) => {
        const y = startY + i * rowH;
        this.ctx.font = `${Math.round(h * 0.065)}px Arial`;
        this.ctx.fillStyle = '#B8860B';
        this.ctx.textAlign = 'center';
        row.split('\n').forEach((line, li) => {
            this.ctx.fillText(line, colA, y + li * h * 0.055);
        });
        this.ctx.fillStyle = '#1A7A3F';
        rowsB[i].split('\n').forEach((line, li) => {
            this.ctx.fillText(line, colB, y + li * h * 0.055);
        });
    });

    this.ctx.font = `italic ${Math.round(h * 0.065)}px Arial`;
    this.ctx.fillStyle = '#888';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Energy flows through; matter cycles within ecosystems', w / 2, h * 0.94);
}

// ─────────────────────────────────────────────────────────────────────────

drawSymbiosisInset(w, h) {
    this.ctx.font = `bold ${Math.round(h * 0.10)}px Arial`;
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Types of Symbiosis', w / 2, h * 0.12);

    const types = [
        { name: 'Mutualism',    outcome: '+ / +', color: '#27AE60', example: 'Bees & flowers', desc: 'Both benefit' },
        { name: 'Commensalism', outcome: '+ / 0', color: '#F39C12', example: 'Barnacles on whales', desc: 'One benefits, other unaffected' },
        { name: 'Parasitism',   outcome: '+ / −', color: '#E74C3C', example: 'Tapeworm in host', desc: 'One benefits, other harmed' }
    ];

    const rowH = h * 0.22;
    const startY = h * 0.18;

    types.forEach((t, i) => {
        const y = startY + i * rowH;
        // Colour stripe
        this.ctx.fillStyle = t.color;
        this.ctx.fillRect(w * 0.04, y, w * 0.12, rowH * 0.80);

        // Outcome badge
        this.ctx.fillStyle = 'rgba(0,0,0,0.08)';
        this.ctx.beginPath();
        this.ctx.roundRect(w * 0.18, y + rowH * 0.10, w * 0.18, rowH * 0.60, 4);
        this.ctx.fill();
        this.ctx.font = `bold ${Math.round(h * 0.082)}px Arial`;
        this.ctx.fillStyle = t.color;
        this.ctx.textAlign = 'center';
        this.ctx.fillText(t.outcome, w * 0.27, y + rowH * 0.50);

        // Name + description
        this.ctx.font = `bold ${Math.round(h * 0.072)}px Arial`;
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'left';
        this.ctx.fillText(t.name, w * 0.40, y + rowH * 0.30);
        this.ctx.font = `${Math.round(h * 0.065)}px Arial`;
        this.ctx.fillStyle = '#555';
        this.ctx.fillText(t.desc, w * 0.40, y + rowH * 0.50);
        this.ctx.font = `italic ${Math.round(h * 0.060)}px Arial`;
        this.ctx.fillStyle = '#888';
        this.ctx.fillText(`e.g. ${t.example}`, w * 0.40, y + rowH * 0.68);
    });

    this.ctx.font = `italic ${Math.round(h * 0.068)}px Arial`;
    this.ctx.fillStyle = '#888';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Symbiosis = long-term close association between two species', w / 2, h * 0.94);
}

// ─────────────────────────────────────────────────────────────────────────

drawNicheConceptInset(w, h) {
    this.ctx.font = `bold ${Math.round(h * 0.10)}px Arial`;
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Ecological Niche', w / 2, h * 0.12);

    // Fundamental niche (large ellipse)
    this.ctx.fillStyle = 'rgba(0,116,217,0.15)';
    this.ctx.beginPath();
    this.ctx.ellipse(w * 0.48, h * 0.52, w * 0.38, h * 0.28, 0, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.strokeStyle = '#0074D9';
    this.ctx.lineWidth = 2;
    this.ctx.setLineDash([6, 4]);
    this.ctx.stroke();
    this.ctx.setLineDash([]);

    // Realised niche (smaller, offset ellipse inside)
    this.ctx.fillStyle = 'rgba(231,76,60,0.25)';
    this.ctx.beginPath();
    this.ctx.ellipse(w * 0.44, h * 0.54, w * 0.20, h * 0.16, 0, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 2;
    this.ctx.stroke();

    // Labels
    this.ctx.font = `bold ${Math.round(h * 0.072)}px Arial`;
    this.ctx.fillStyle = '#0074D9';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Fundamental Niche', w * 0.75, h * 0.30);
    this.ctx.font = `italic ${Math.round(h * 0.062)}px Arial`;
    this.ctx.fillStyle = '#555';
    this.ctx.fillText('(potential range,', w * 0.75, h * 0.37);
    this.ctx.fillText('no competition)', w * 0.75, h * 0.43);

    this.ctx.font = `bold ${Math.round(h * 0.072)}px Arial`;
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.fillText('Realised Niche', w * 0.44, h * 0.73);
    this.ctx.font = `italic ${Math.round(h * 0.062)}px Arial`;
    this.ctx.fillStyle = '#555';
    this.ctx.fillText('(actual range,', w * 0.44, h * 0.79);
    this.ctx.fillText('with competition)', w * 0.44, h * 0.85);

    // Axis labels
    this.ctx.font = `${Math.round(h * 0.065)}px Arial`;
    this.ctx.fillStyle = '#555';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Resource Axis 1 (e.g. temperature) →', w / 2, h * 0.96);
    this.ctx.save();
    this.ctx.translate(w * 0.04, h / 2);
    this.ctx.rotate(-Math.PI / 2);
    this.ctx.fillText('Resource Axis 2 →', 0, 0);
    this.ctx.restore();
}

// ═══════════════════════════════════════════════════════════════════════════
// BIOMES INSETS
// ═══════════════════════════════════════════════════════════════════════════

drawClimateGraphInset(w, h) {
    this.ctx.font = `bold ${Math.round(h * 0.10)}px Arial`;
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Climograph (Temp. Forest)', w / 2, h * 0.12);

    // Months
    const months = ['J','F','M','A','M','J','J','A','S','O','N','D'];
    const tempC  = [2,3,7,12,17,20,22,21,17,11,6,3];    // °C
    const precipMM = [55,45,50,45,55,60,55,60,55,55,60,60]; // mm

    const chartL = w * 0.12, chartR = w * 0.88;
    const chartT = h * 0.20, chartB = h * 0.78;
    const chartW = chartR - chartL;
    const chartH = chartB - chartT;

    // Axes
    this.ctx.strokeStyle = '#2C3E50';
    this.ctx.lineWidth = 1.5;
    this.ctx.beginPath();
    this.ctx.moveTo(chartL, chartT);
    this.ctx.lineTo(chartL, chartB);
    this.ctx.lineTo(chartR, chartB);
    this.ctx.stroke();

    const colW = chartW / 12;

    // Precipitation bars (blue)
    const maxPrecip = 80;
    months.forEach((m, i) => {
        const bh = (precipMM[i] / maxPrecip) * chartH;
        const bx = chartL + i * colW;
        this.ctx.fillStyle = 'rgba(74,144,226,0.55)';
        this.ctx.fillRect(bx + 1, chartB - bh, colW - 2, bh);
    });

    // Temperature line (red)
    const maxTemp = 30, minTemp = -5;
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 2.5;
    this.ctx.beginPath();
    tempC.forEach((t, i) => {
        const tx = chartL + (i + 0.5) * colW;
        const ty = chartB - ((t - minTemp) / (maxTemp - minTemp)) * chartH;
        i === 0 ? this.ctx.moveTo(tx, ty) : this.ctx.lineTo(tx, ty);
    });
    this.ctx.stroke();

    // X-axis month labels
    this.ctx.font = `${Math.round(h * 0.055)}px Arial`;
    this.ctx.fillStyle = '#555';
    this.ctx.textAlign = 'center';
    months.forEach((m, i) => {
        this.ctx.fillText(m, chartL + (i + 0.5) * colW, chartB + h * 0.04);
    });

    // Y-axis labels (temp)
    this.ctx.font = `${Math.round(h * 0.055)}px Arial`;
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.textAlign = 'right';
    [0, 10, 20].forEach(t => {
        const ty = chartB - ((t - minTemp) / (maxTemp - minTemp)) * chartH;
        this.ctx.fillText(`${t}°C`, chartL - 2, ty + 3);
    });

    // Legend
    this.ctx.fillStyle = 'rgba(74,144,226,0.55)';
    this.ctx.fillRect(chartL, chartB + h * 0.08, w * 0.06, h * 0.05);
    this.ctx.font = `${Math.round(h * 0.062)}px Arial`;
    this.ctx.fillStyle = '#4A90E2';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Precipitation (mm)', chartL + w * 0.07, chartB + h * 0.116);

    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(w * 0.52, chartB + h * 0.105);
    this.ctx.lineTo(w * 0.58, chartB + h * 0.105);
    this.ctx.stroke();
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.fillText('Temperature (°C)', w * 0.59, chartB + h * 0.116);
}

// ─────────────────────────────────────────────────────────────────────────

drawWhittakerDiagramInset(w, h) {
    this.ctx.font = `bold ${Math.round(h * 0.10)}px Arial`;
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Whittaker Biome Diagram', w / 2, h * 0.12);

    // Axes
    const chartL = w * 0.16, chartR = w * 0.92;
    const chartT = h * 0.18, chartB = h * 0.82;
    const chartW = chartR - chartL;
    const chartH = chartB - chartT;

    this.ctx.strokeStyle = '#2C3E50';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(chartL, chartT);
    this.ctx.lineTo(chartL, chartB);
    this.ctx.lineTo(chartR, chartB);
    this.ctx.stroke();

    // Axis labels
    this.ctx.font = `bold ${Math.round(h * 0.068)}px Arial`;
    this.ctx.fillStyle = '#555';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Mean Annual Temperature (°C) →', chartL + chartW / 2, chartB + h * 0.06);
    this.ctx.save();
    this.ctx.translate(chartL - w * 0.10, chartT + chartH / 2);
    this.ctx.rotate(-Math.PI / 2);
    this.ctx.fillText('Annual Precipitation (cm) →', 0, 0);
    this.ctx.restore();

    // Biome regions (approximate polygons)
    const biomeRegions = [
        { name: 'Tropical\nRainforest', color: 'rgba(34,139,34,0.50)',
          pts: [[0.75,0.05],[1.00,0.05],[1.00,0.50],[0.80,0.50]] },
        { name: 'Temperate\nForest',    color: 'rgba(107,142,35,0.50)',
          pts: [[0.50,0.20],[0.75,0.20],[0.80,0.50],[0.55,0.50]] },
        { name: 'Taiga',               color: 'rgba(47,95,47,0.50)',
          pts: [[0.25,0.20],[0.50,0.20],[0.55,0.50],[0.30,0.55]] },
        { name: 'Tundra',              color: 'rgba(176,224,230,0.60)',
          pts: [[0.00,0.40],[0.25,0.20],[0.30,0.55],[0.05,0.65]] },
        { name: 'Grassland',           color: 'rgba(154,205,50,0.50)',
          pts: [[0.50,0.55],[0.75,0.55],[0.80,0.80],[0.50,0.80]] },
        { name: 'Desert',              color: 'rgba(222,184,135,0.60)',
          pts: [[0.60,0.75],[1.00,0.55],[1.00,1.00],[0.60,1.00]] },
        { name: 'Savanna',             color: 'rgba(218,165,32,0.50)',
          pts: [[0.75,0.50],[1.00,0.50],[1.00,0.55],[0.80,0.80]] }
    ];

    biomeRegions.forEach(br => {
        this.ctx.fillStyle = br.color;
        this.ctx.beginPath();
        br.pts.forEach(([rx, ry], i) => {
            const px = chartL + rx * chartW;
            const py = chartT + (1 - ry) * chartH;
            i === 0 ? this.ctx.moveTo(px, py) : this.ctx.lineTo(px, py);
        });
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.strokeStyle = 'rgba(255,255,255,0.5)';
        this.ctx.lineWidth = 1;
        this.ctx.stroke();

        // Region label at centroid
        const cx = chartL + (br.pts.reduce((s,p) => s + p[0], 0) / br.pts.length) * chartW;
        const cy = chartT + (1 - br.pts.reduce((s,p) => s + p[1], 0) / br.pts.length) * chartH;
        this.ctx.font = `bold ${Math.round(h * 0.055)}px Arial`;
        this.ctx.fillStyle = 'rgba(0,0,0,0.75)';
        this.ctx.textAlign = 'center';
        br.name.split('\n').forEach((line, li) => {
            this.ctx.fillText(line, cx, cy + li * h * 0.056 - h * 0.026);
        });
    });

    this.ctx.font = `italic ${Math.round(h * 0.065)}px Arial`;
    this.ctx.fillStyle = '#888';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Climate determines biome type — temperature × precipitation', w / 2, h * 0.94);
}

// ─────────────────────────────────────────────────────────────────────────

drawSpeciesRichnessInset(w, h) {
    this.ctx.font = `bold ${Math.round(h * 0.10)}px Arial`;
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Latitudinal Diversity Gradient', w / 2, h * 0.12);

    // Map silhouette (simplified globe outline)
    const mapL = w * 0.12, mapR = w * 0.50;
    const mapT = h * 0.18, mapB = h * 0.82;

    // Latitude bands (coloured by richness)
    const bands = [
        { label: '90°N (Poles)', richness: 0.05, color: '#E0FFFF' },
        { label: '60°N',         richness: 0.15, color: '#B0E0E6' },
        { label: '45°N',         richness: 0.35, color: '#9ACD32' },
        { label: '30°N',         richness: 0.55, color: '#FFA500' },
        { label: '15°N',         richness: 0.75, color: '#FF6347' },
        { label: '0° (Equator)', richness: 1.00, color: '#228B22' },
        { label: '15°S',         richness: 0.80, color: '#FF6347' },
        { label: '30°S',         richness: 0.50, color: '#FFA500' },
        { label: '60°S',         richness: 0.12, color: '#B0E0E6' },
        { label: '90°S (Poles)', richness: 0.04, color: '#E0FFFF' }
    ];

    const bandH = (mapB - mapT) / bands.length;
    bands.forEach((b, i) => {
        const by = mapT + i * bandH;
        this.ctx.fillStyle = b.color;
        this.ctx.fillRect(mapL, by, mapR - mapL, bandH);
        this.ctx.font = `${Math.round(h * 0.055)}px Arial`;
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'right';
        this.ctx.fillText(b.label, mapL - 3, by + bandH * 0.70);
    });
    this.ctx.strokeStyle = '#555';
    this.ctx.lineWidth = 1;
    this.ctx.strokeRect(mapL, mapT, mapR - mapL, mapB - mapT);

    // Species richness curve on right panel
    const curveL = w * 0.60, curveR = w * 0.94;
    this.ctx.strokeStyle = '#2C3E50';
    this.ctx.lineWidth = 1.5;
    this.ctx.beginPath();
    this.ctx.moveTo(curveL, mapT);
    this.ctx.lineTo(curveL, mapB);
    this.ctx.lineTo(curveR, mapB);
    this.ctx.stroke();

    // Draw richness curve
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    bands.forEach((b, i) => {
        const py = mapT + (i + 0.5) * bandH;
        const px = curveL + b.richness * (curveR - curveL);
        i === 0 ? this.ctx.moveTo(px, py) : this.ctx.lineTo(px, py);
    });
    this.ctx.stroke();

    this.ctx.font = `bold ${Math.round(h * 0.065)}px Arial`;
    this.ctx.fillStyle = '#555';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Species\nRichness →', curveL + (curveR - curveL) / 2, mapB + h * 0.06);

    this.ctx.font = `italic ${Math.round(h * 0.068)}px Arial`;
    this.ctx.fillStyle = '#888';
    this.ctx.fillText('Species richness peaks at the equator and decreases toward the poles', w / 2, h * 0.94);
}

// ═══════════════════════════════════════════════════════════════════════════
// PREDATOR-PREY INSETS
// ═══════════════════════════════════════════════════════════════════════════

drawLotkaVolterraInset(w, h) {
    this.ctx.font = `bold ${Math.round(h * 0.10)}px Arial`;
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Lotka-Volterra Equations', w / 2, h * 0.12);

    // Prey equation box
    this.ctx.fillStyle = 'rgba(39,174,96,0.08)';
    this.ctx.beginPath();
    this.ctx.roundRect(w * 0.05, h * 0.19, w * 0.90, h * 0.26, 6);
    this.ctx.fill();
    this.ctx.strokeStyle = '#27AE60';
    this.ctx.lineWidth = 1.5;
    this.ctx.stroke();

    this.ctx.font = `bold ${Math.round(h * 0.080)}px Arial`;
    this.ctx.fillStyle = '#27AE60';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Prey:  dN/dt = αN − βNP', w / 2, h * 0.30);
    this.ctx.font = `${Math.round(h * 0.065)}px Arial`;
    this.ctx.fillStyle = '#555';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('α = prey birth rate      β = predation rate', w * 0.08, h * 0.38);
    this.ctx.fillText('N = prey pop.    P = predator pop.', w * 0.08, h * 0.43);

    // Predator equation box
    this.ctx.fillStyle = 'rgba(231,76,60,0.08)';
    this.ctx.beginPath();
    this.ctx.roundRect(w * 0.05, h * 0.50, w * 0.90, h * 0.26, 6);
    this.ctx.fill();
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 1.5;
    this.ctx.stroke();

    this.ctx.font = `bold ${Math.round(h * 0.080)}px Arial`;
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Predator:  dP/dt = δNP − γP', w / 2, h * 0.61);
    this.ctx.font = `${Math.round(h * 0.065)}px Arial`;
    this.ctx.fillStyle = '#555';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('δ = conversion efficiency      γ = predator death rate', w * 0.08, h * 0.69);
    this.ctx.fillText('NP term = interaction between species', w * 0.08, h * 0.74);

    // Equilibrium conditions
    this.ctx.font = `bold ${Math.round(h * 0.070)}px Arial`;
    this.ctx.fillStyle = '#9B59B6';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Equilibrium: N* = γ/δ   P* = α/β', w / 2, h * 0.87);

    this.ctx.font = `italic ${Math.round(h * 0.065)}px Arial`;
    this.ctx.fillStyle = '#888';
    this.ctx.fillText('Vito Volterra (1926) & Alfred Lotka (1925)', w / 2, h * 0.95);
}

// ─────────────────────────────────────────────────────────────────────────

drawLagExplanationInset(w, h) {
    this.ctx.font = `bold ${Math.round(h * 0.10)}px Arial`;
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Population Time Lag', w / 2, h * 0.12);

    // Mini time-series showing one cycle with annotations
    const chartL = w * 0.10, chartR = w * 0.90;
    const chartT = h * 0.20, chartB = h * 0.72;
    const chartW = chartR - chartL, chartH = chartB - chartT;

    // Axes
    this.ctx.strokeStyle = '#555';
    this.ctx.lineWidth = 1.5;
    this.ctx.beginPath();
    this.ctx.moveTo(chartL, chartT);
    this.ctx.lineTo(chartL, chartB);
    this.ctx.lineTo(chartR, chartB);
    this.ctx.stroke();

    // One cycle prey curve (green)
    this.ctx.strokeStyle = '#27AE60';
    this.ctx.lineWidth = 2.5;
    this.ctx.beginPath();
    for (let i = 0; i <= 100; i++) {
        const t = i / 100;
        const v = 0.50 + 0.38 * Math.sin(t * 2 * Math.PI);
        const px = chartL + t * chartW;
        const py = chartB - v * chartH;
        i === 0 ? this.ctx.moveTo(px, py) : this.ctx.lineTo(px, py);
    }
    this.ctx.stroke();

    // One cycle predator curve (red), lagged ~quarter phase
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 2.5;
    this.ctx.beginPath();
    for (let i = 0; i <= 100; i++) {
        const t = i / 100;
        const v = 0.35 + 0.25 * Math.sin(t * 2 * Math.PI - Math.PI * 0.50);
        const px = chartL + t * chartW;
        const py = chartB - v * chartH;
        i === 0 ? this.ctx.moveTo(px, py) : this.ctx.lineTo(px, py);
    }
    this.ctx.stroke();

    // Prey peak marker
    const preyPeakX = chartL + 0.25 * chartW;
    const predPeakX = chartL + 0.50 * chartW;

    this.ctx.strokeStyle = '#888';
    this.ctx.lineWidth = 1;
    this.ctx.setLineDash([4, 3]);
    this.ctx.beginPath();
    this.ctx.moveTo(preyPeakX, chartT);
    this.ctx.lineTo(preyPeakX, chartB);
    this.ctx.moveTo(predPeakX, chartT);
    this.ctx.lineTo(predPeakX, chartB);
    this.ctx.stroke();
    this.ctx.setLineDash([]);

    // Lag brace
    const braceY = chartT + h * 0.04;
    this.ctx.strokeStyle = '#9B59B6';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(preyPeakX, braceY);
    this.ctx.lineTo(predPeakX, braceY);
    this.ctx.stroke();
    this.ctx.fillStyle = '#9B59B6';
    this.ctx.beginPath();
    this.ctx.moveTo(preyPeakX, braceY);
    this.ctx.lineTo(preyPeakX + 6, braceY - 4);
    this.ctx.lineTo(preyPeakX + 6, braceY + 4);
    this.ctx.closePath();
    this.ctx.fill();
    this.ctx.beginPath();
    this.ctx.moveTo(predPeakX, braceY);
    this.ctx.lineTo(predPeakX - 6, braceY - 4);
    this.ctx.lineTo(predPeakX - 6, braceY + 4);
    this.ctx.closePath();
    this.ctx.fill();

    this.ctx.font = `bold ${Math.round(h * 0.068)}px Arial`;
    this.ctx.fillStyle = '#9B59B6';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Time lag', (preyPeakX + predPeakX) / 2, braceY - h * 0.02);

    // Explanation steps
    const steps = [
        { color: '#27AE60', text: '1. Prey increases → more food for predators' },
        { color: '#E74C3C', text: '2. Predators increase (lag) → prey declines' },
        { color: '#9B59B6', text: '3. Prey declines → predators starve → decline' },
        { color: '#888',    text: '4. Cycle repeats with consistent lag' }
    ];
    steps.forEach((s, i) => {
        this.ctx.font = `${Math.round(h * 0.063)}px Arial`;
        this.ctx.fillStyle = s.color;
        this.ctx.textAlign = 'left';
        this.ctx.fillText(s.text, w * 0.05, h * (0.77 + i * 0.058));
    });
}

// ─────────────────────────────────────────────────────────────────────────

drawEquilibriumPointInset(w, h) {
    this.ctx.font = `bold ${Math.round(h * 0.10)}px Arial`;
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Equilibrium Point', w / 2, h * 0.12);

    // Phase plot axes
    const chartL = w * 0.14, chartR = w * 0.88;
    const chartT = h * 0.18, chartB = h * 0.80;
    const chartW = chartR - chartL, chartH = chartB - chartT;

    this.ctx.strokeStyle = '#2C3E50';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(chartL, chartT);
    this.ctx.lineTo(chartL, chartB);
    this.ctx.lineTo(chartR, chartB);
    this.ctx.stroke();

    // Axis labels
    this.ctx.font = `${Math.round(h * 0.065)}px Arial`;
    this.ctx.fillStyle = '#27AE60';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Prey population (N) →', chartL + chartW / 2, chartB + h * 0.055);
    this.ctx.save();
    this.ctx.translate(chartL - w * 0.08, chartT + chartH / 2);
    this.ctx.rotate(-Math.PI / 2);
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.fillText('Predator population (P) ↑', 0, 0);
    this.ctx.restore();

    // Equilibrium point
    const eqX = chartL + chartW * 0.50;
    const eqY = chartT + chartH * 0.45;

    // Draw the closed orbit
    this.ctx.strokeStyle = '#9B59B6';
    this.ctx.lineWidth = 2.5;
    this.ctx.beginPath();
    for (let i = 0; i <= 360; i++) {
        const angle = (i / 360) * Math.PI * 2;
        const px = eqX + Math.cos(angle) * chartW * 0.30;
        const py = eqY + Math.sin(angle) * chartH * 0.36;
        i === 0 ? this.ctx.moveTo(px, py) : this.ctx.lineTo(px, py);
    }
    this.ctx.closePath();
    this.ctx.stroke();

    // Direction arrow on orbit
    const arrAngle = Math.PI * 0.25;
    const arrX = eqX + Math.cos(arrAngle) * chartW * 0.30;
    const arrY = eqY + Math.sin(arrAngle) * chartH * 0.36;
    this.ctx.fillStyle = '#9B59B6';
    this.ctx.font = `bold ${Math.round(h * 0.08)}px Arial`;
    this.ctx.textAlign = 'center';
    this.ctx.fillText('↺', arrX + w * 0.03, arrY - h * 0.03);

    // Equilibrium point
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.beginPath();
    this.ctx.arc(eqX, eqY, 7, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.strokeStyle = '#fff';
    this.ctx.lineWidth = 2;
    this.ctx.stroke();

    // Equilibrium label
    this.ctx.font = `bold ${Math.round(h * 0.068)}px Arial`;
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Equilibrium', eqX + 10, eqY - h * 0.02);
    this.ctx.font = `${Math.round(h * 0.060)}px Arial`;
    this.ctx.fillStyle = '#888';
    this.ctx.fillText('N* = γ/δ,  P* = α/β', eqX + 10, eqY + h * 0.03);

    // Note
    this.ctx.font = `italic ${Math.round(h * 0.068)}px Arial`;
    this.ctx.fillStyle = '#888';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Populations orbit the equilibrium point indefinitely', w / 2, h * 0.90);
    this.ctx.fillText('(neutral stability in the classic Lotka-Volterra model)', w / 2, h * 0.96);
}

// ═══════════════════════════════════════════════════════════════════════
    // TASK 3 — NEW INSETS
    // ═══════════════════════════════════════════════════════════════════════

    // ── ANIMAL CELL INSETS ────────────────────────────────────────────────

    drawNucleusDetailInset(width, height) {
        const cx = width * 0.50, cy = height * 0.52;
        const r  = Math.min(width, height) * 0.28;

        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Nucleus — Detail', width / 2, 15);

        // Nuclear envelope
        const grad = this.ctx.createRadialGradient(cx - r * 0.2, cy - r * 0.2, 0, cx, cy, r);
        grad.addColorStop(0, '#9B88C6');
        grad.addColorStop(1, '#5B4886');
        this.ctx.fillStyle = grad;
        this.ctx.beginPath();
        this.ctx.arc(cx, cy, r, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = '#5B4886';
        this.ctx.lineWidth = 3;
        this.ctx.stroke();

        // Nuclear pores (8 evenly spaced)
        for (let i = 0; i < 8; i++) {
            const a = (i / 8) * Math.PI * 2;
            const px = cx + Math.cos(a) * r, py = cy + Math.sin(a) * r;
            this.ctx.fillStyle = 'rgba(220,200,255,0.9)';
            this.ctx.beginPath();
            this.ctx.arc(px, py, r * 0.10, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.strokeStyle = '#7B5B98';
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
        }

        // Nucleolus
        this.ctx.fillStyle = '#3A2866';
        this.ctx.beginPath();
        this.ctx.arc(cx + r * 0.15, cy - r * 0.12, r * 0.25, 0, Math.PI * 2);
        this.ctx.fill();

        // Chromatin wisps
        this.ctx.strokeStyle = 'rgba(180,160,255,0.55)';
        this.ctx.lineWidth = 1.5;
        for (let i = 0; i < 5; i++) {
            const a = (i / 5) * Math.PI * 2;
            this.ctx.beginPath();
            this.ctx.moveTo(cx, cy);
            this.ctx.quadraticCurveTo(
                cx + Math.cos(a + 0.5) * r * 0.45,
                cy + Math.sin(a + 0.5) * r * 0.45,
                cx + Math.cos(a) * r * 0.65,
                cy + Math.sin(a) * r * 0.65
            );
            this.ctx.stroke();
        }

        // Labels
        this.ctx.font = '9px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'left';
        this.ctx.fillText('Nuclear pore', cx + r + 4, cy - r * 0.5);
        this.ctx.fillText('Nucleolus',    cx + r * 0.25, cy - r * 0.35);
        this.ctx.fillText('Chromatin',    cx - r * 0.85, cy + r * 0.55);
        this.ctx.fillText('Nuclear envelope', cx - r - 2, cy - r * 0.85);
        this.ctx.textAlign = 'center';
        this.ctx.font = 'italic 8px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.fillText('Double membrane with pores', width / 2, height * 0.95);
    }

    drawMitochondriaDetailInset(width, height) {
        const cx = width * 0.50, cy = height * 0.50;
        const rx = width  * 0.36, ry = height * 0.26;

        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Mitochondrion — Cross-section', width / 2, 15);

        // Outer membrane
        this.ctx.fillStyle = '#FFCAC5';
        this.ctx.beginPath();
        this.ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = '#C65E53';
        this.ctx.lineWidth = 2.5;
        this.ctx.stroke();

        // Inner membrane (slightly smaller)
        this.ctx.fillStyle = '#FF9E93';
        this.ctx.beginPath();
        this.ctx.ellipse(cx, cy, rx * 0.78, ry * 0.72, 0, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = '#C65E53';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();

        // Matrix
        this.ctx.fillStyle = 'rgba(200,100,80,0.15)';
        this.ctx.beginPath();
        this.ctx.ellipse(cx, cy, rx * 0.60, ry * 0.54, 0, 0, Math.PI * 2);
        this.ctx.fill();

        // Cristae (folded inner membrane ridges)
        this.ctx.strokeStyle = '#E67E73';
        this.ctx.lineWidth = 2;
        const cristaCount = 5;
        for (let i = 0; i < cristaCount; i++) {
            const t  = -ry * 0.55 + (i / (cristaCount - 1)) * ry * 1.10;
            const hw = rx * 0.50 * Math.sqrt(Math.max(0, 1 - (t / (ry * 0.72)) ** 2));
            this.ctx.beginPath();
            this.ctx.moveTo(cx - hw, cy + t);
            this.ctx.lineTo(cx + hw, cy + t);
            this.ctx.stroke();
        }

        // Ribosome dots in matrix
        this.ctx.fillStyle = 'rgba(100,70,60,0.6)';
        const rSeeds = [0.3, 0.6, 0.45, 0.55, 0.4, 0.65];
        for (let i = 0; i < 6; i++) {
            const a = (i / 6) * Math.PI * 2;
            const rd = rx * 0.35;
            this.ctx.beginPath();
            this.ctx.arc(cx + Math.cos(a) * rd * 0.6, cy + Math.sin(a) * rd * 0.45, 3, 0, Math.PI * 2);
            this.ctx.fill();
        }

        // Labels
        this.ctx.font = '9px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'left';
        this.ctx.fillText('Outer membrane',  cx + rx + 4, cy - ry * 0.4);
        this.ctx.fillText('Inner membrane',  cx + rx * 0.80 + 4, cy);
        this.ctx.fillText('Cristae',         cx + rx * 0.55 + 4, cy + ry * 0.25);
        this.ctx.fillText('Matrix',          cx - rx * 0.20, cy + ry * 0.10);
        this.ctx.textAlign = 'center';
        this.ctx.font = 'italic 8px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.fillText('Site of Krebs cycle & ETC', width / 2, height * 0.94);
    }

    drawERDetailInset(width, height) {
        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Endoplasmic Reticulum', width / 2, 15);

        const midY = height * 0.50;

        // Rough ER (left half) — parallel membranes with ribosomes
        this.ctx.strokeStyle = '#6BA6CC';
        this.ctx.lineWidth = 2;
        for (let i = 0; i < 5; i++) {
            const y = midY - height * 0.18 + i * height * 0.09;
            this.ctx.beginPath();
            this.ctx.moveTo(width * 0.05, y);
            this.ctx.bezierCurveTo(width * 0.20, y - height * 0.04, width * 0.35, y + height * 0.04, width * 0.48, y);
            this.ctx.stroke();
            // Ribosomes on outer surface
            if (i % 2 === 0) {
                for (let j = 0; j < 6; j++) {
                    const rx = width * 0.06 + j * width * 0.065;
                    this.ctx.fillStyle = '#8B7D6B';
                    this.ctx.beginPath();
                    this.ctx.arc(rx, y - 4, 3, 0, Math.PI * 2);
                    this.ctx.fill();
                }
            }
        }
        // Rough ER label
        this.ctx.font = 'bold 9px Arial';
        this.ctx.fillStyle = '#4A86AC';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Rough ER', width * 0.26, height * 0.88);
        this.ctx.font = '8px Arial';
        this.ctx.fillText('(with ribosomes)', width * 0.26, height * 0.95);

        // Smooth ER (right half) — wavy cisternae
        this.ctx.strokeStyle = '#ABE6FF';
        this.ctx.lineWidth = 2;
        for (let i = 0; i < 4; i++) {
            const y = midY - height * 0.15 + i * height * 0.10;
            this.ctx.beginPath();
            this.ctx.moveTo(width * 0.54, y);
            for (let t = 0; t <= 1; t += 0.1) {
                const sx = width * 0.54 + t * width * 0.40;
                const sy = y + Math.sin(t * Math.PI * 3) * height * 0.04;
                this.ctx.lineTo(sx, sy);
            }
            this.ctx.stroke();
        }
        this.ctx.font = 'bold 9px Arial';
        this.ctx.fillStyle = '#3A96CC';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Smooth ER', width * 0.74, height * 0.88);
        this.ctx.font = '8px Arial';
        this.ctx.fillText('(lipid synthesis)', width * 0.74, height * 0.95);

        // Dividing line
        this.ctx.strokeStyle = '#BDC3C7';
        this.ctx.lineWidth = 1;
        this.ctx.setLineDash([4, 3]);
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.51, height * 0.10);
        this.ctx.lineTo(width * 0.51, height * 0.85);
        this.ctx.stroke();
        this.ctx.setLineDash([]);
    }

    drawGolgiDetailInset(width, height) {
        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Golgi Apparatus', width / 2, 15);

        const cx = width  * 0.42, cy = height * 0.50;
        const stackCount = 6;
        const stackH = height * 0.055;
        const startY = cy - (stackCount / 2) * stackH;

        // Cisternae stack — wider in middle, narrower at ends
        for (let i = 0; i < stackCount; i++) {
            const taper = 1 - Math.abs(i - (stackCount - 1) / 2) / (stackCount * 0.8);
            const hw    = width * 0.22 * taper;
            const y     = startY + i * stackH;
            const grad  = this.ctx.createLinearGradient(cx - hw, y, cx + hw, y);
            grad.addColorStop(0,   '#D48440');
            grad.addColorStop(0.5, '#FFC480');
            grad.addColorStop(1,   '#D48440');
            this.ctx.fillStyle = grad;
            this.ctx.beginPath();
            this.ctx.ellipse(cx, y + stackH / 2, hw, stackH * 0.45, 0, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.strokeStyle = '#D48440';
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
        }

        // cis face label (bottom — receives from ER)
        this.ctx.font = '9px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'left';
        this.ctx.fillText('cis face', cx + width * 0.24, startY + stackH * 0.5);
        this.ctx.fillText('(receives from ER)', cx + width * 0.24, startY + stackH * 1.0);
        // trans face label (top — ships to membrane)
        this.ctx.fillText('trans face', cx + width * 0.24, startY + (stackCount - 1) * stackH + stackH * 0.5);
        this.ctx.fillText('(ships to membrane)', cx + width * 0.24, startY + stackCount * stackH);

        // Vesicles budding from trans
        for (let i = 0; i < 3; i++) {
            const vx = cx - width * 0.28 + i * width * 0.14;
            const vy = startY + (stackCount - 0.5) * stackH + height * 0.08;
            this.ctx.fillStyle = '#FFC480';
            this.ctx.beginPath();
            this.ctx.arc(vx, vy, width * 0.04, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.strokeStyle = '#D48440';
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
        }
        this.ctx.font = 'italic 8px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Secretory vesicles budding', width * 0.42, height * 0.92);
    }

    drawRibosomeDetailInset(width, height) {
        const cx = width * 0.45, cy = height * 0.48;
        const r  = Math.min(width, height) * 0.16;

        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Ribosome — 70S / 80S', width / 2, 15);

        // Large subunit (60S / 50S)
        this.ctx.fillStyle = '#8B7D6B';
        this.ctx.beginPath();
        this.ctx.ellipse(cx, cy - r * 0.3, r * 1.2, r * 0.75, 0, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = '#6B5D4B';
        this.ctx.lineWidth = 1.5;
        this.ctx.stroke();

        // Small subunit (40S / 30S)
        this.ctx.fillStyle = '#AB9D8B';
        this.ctx.beginPath();
        this.ctx.ellipse(cx, cy + r * 0.55, r * 0.95, r * 0.55, 0, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = '#8B7D6B';
        this.ctx.lineWidth = 1.5;
        this.ctx.stroke();

        // mRNA thread
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 2.5;
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.05, cy + r * 0.55);
        this.ctx.lineTo(width * 0.95, cy + r * 0.55);
        this.ctx.stroke();

        // Growing polypeptide chain
        this.ctx.strokeStyle = '#27AE60';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(cx + r * 0.5, cy - r * 0.8);
        for (let i = 0; i < 6; i++) {
            this.ctx.lineTo(cx + r * 0.5 + (i % 2 === 0 ? 10 : -10), cy - r * 0.8 - i * 10);
        }
        this.ctx.stroke();

        // Labels
        this.ctx.font = '9px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'right';
        this.ctx.fillText('Large subunit (60S)', cx - r * 1.2 - 4, cy - r * 0.30);
        this.ctx.fillText('Small subunit (40S)', cx - r * 0.95 - 4, cy + r * 0.55);
        this.ctx.textAlign = 'left';
        this.ctx.fillText('mRNA', width * 0.05, cy + r * 0.55 - 6);
        this.ctx.fillText('Polypeptide', cx + r * 0.60, cy - r * 1.0);
        this.ctx.textAlign = 'center';
        this.ctx.font = 'italic 8px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.fillText('Translates mRNA → protein', width / 2, height * 0.94);
    }

    drawCentrioleDetailInset(width, height) {
        const cx = width * 0.50, cy = height * 0.48;

        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Centriole — Cross-section', width / 2, 15);

        // Draw the 9-triplet ring (9 × 3 microtubule pattern)
        const outerR = Math.min(width, height) * 0.28;
        const tubeR  = outerR * 0.14;

        for (let i = 0; i < 9; i++) {
            const angle = (i / 9) * Math.PI * 2 - Math.PI / 2;
            const tx = cx + Math.cos(angle) * outerR;
            const ty = cy + Math.sin(angle) * outerR;

            // Draw A, B, C tubules as three overlapping circles
            for (let j = 0; j < 3; j++) {
                const jAngle = angle + (j - 1) * 0.30;
                const jx = tx + Math.cos(jAngle) * tubeR * (j === 0 ? 0 : 1.1);
                const jy = ty + Math.sin(jAngle) * tubeR * (j === 0 ? 0 : 1.1);
                this.ctx.fillStyle = j === 0 ? '#9B7BB8' : (j === 1 ? '#BB9BD8' : '#DBC4F4');
                this.ctx.beginPath();
                this.ctx.arc(jx, jy, tubeR * 0.8, 0, Math.PI * 2);
                this.ctx.fill();
                this.ctx.strokeStyle = '#7B5B98';
                this.ctx.lineWidth = 0.8;
                this.ctx.stroke();
            }
        }

        // Hub + spokes
        this.ctx.fillStyle = '#7B5B98';
        this.ctx.beginPath();
        this.ctx.arc(cx, cy, outerR * 0.14, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = 'rgba(150,100,200,0.5)';
        this.ctx.lineWidth = 1;
        for (let i = 0; i < 9; i++) {
            const angle = (i / 9) * Math.PI * 2 - Math.PI / 2;
            this.ctx.beginPath();
            this.ctx.moveTo(cx, cy);
            this.ctx.lineTo(cx + Math.cos(angle) * outerR * 0.82, cy + Math.sin(angle) * outerR * 0.82);
            this.ctx.stroke();
        }

        // Labels
        this.ctx.font = '9px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('9+0 triplet arrangement', width / 2, cy + outerR + 14);
        this.ctx.font = 'italic 8px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.fillText('Organises mitotic spindle', width / 2, height * 0.95);
    }

    // ── PLANT CELL INSETS ─────────────────────────────────────────────────

    drawChloroplastDetailInset(width, height) {
        const cx = width * 0.46, cy = height * 0.50;
        const rx = width  * 0.35, ry = height * 0.28;

        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Chloroplast — Detail', width / 2, 15);

        // Outer envelope
        this.ctx.fillStyle = '#C8EEC8';
        this.ctx.beginPath();
        this.ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = '#228B22';
        this.ctx.lineWidth = 2.5;
        this.ctx.stroke();

        // Inner envelope
        this.ctx.strokeStyle = '#32CD32';
        this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.ellipse(cx, cy, rx * 0.88, ry * 0.84, 0, 0, Math.PI * 2);
        this.ctx.stroke();

        // Stroma (background)
        this.ctx.fillStyle = 'rgba(50,140,50,0.12)';
        this.ctx.beginPath();
        this.ctx.ellipse(cx, cy, rx * 0.84, ry * 0.78, 0, 0, Math.PI * 2);
        this.ctx.fill();

        // Grana (stacks of thylakoids — simplified as vertical stacks)
        const granaPositions = [[cx - rx * 0.40, cy], [cx + rx * 0.05, cy - ry * 0.20], [cx + rx * 0.38, cy + ry * 0.10]];
        granaPositions.forEach(([gx, gy]) => {
            for (let i = 0; i < 5; i++) {
                this.ctx.fillStyle = i % 2 === 0 ? '#228B22' : '#32CD32';
                this.ctx.fillRect(gx - width * 0.06, gy - height * 0.015 + i * height * 0.028,
                    width * 0.12, height * 0.022);
                this.ctx.strokeStyle = '#006400';
                this.ctx.lineWidth = 0.5;
                this.ctx.strokeRect(gx - width * 0.06, gy - height * 0.015 + i * height * 0.028,
                    width * 0.12, height * 0.022);
            }
        });

        // Stroma lamellae (connecting strands)
        this.ctx.strokeStyle = 'rgba(50,160,50,0.55)';
        this.ctx.lineWidth = 1.5;
        for (let i = 0; i < 2; i++) {
            this.ctx.beginPath();
            this.ctx.moveTo(granaPositions[i][0] + width * 0.06, granaPositions[i][1] + i * height * 0.02);
            this.ctx.lineTo(granaPositions[i + 1][0] - width * 0.06, granaPositions[i + 1][1] + i * height * 0.02);
            this.ctx.stroke();
        }

        // Labels
        this.ctx.font = '9px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'left';
        this.ctx.fillText('Outer envelope', cx + rx + 4, cy - ry * 0.5);
        this.ctx.fillText('Stroma', cx + rx * 0.30, cy + ry * 0.55);
        this.ctx.fillText('Granum', cx - rx * 0.55, cy - ry * 0.60);
        this.ctx.textAlign = 'center';
        this.ctx.font = 'italic 8px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.fillText('Light reactions in thylakoids; Calvin cycle in stroma', width / 2, height * 0.95);
    }

    drawCellWallLayersInset(width, height) {
        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Cell Wall Layers', width / 2, 15);

        const layers = [
            { label: 'Middle Lamella',  color: '#A0C878', thick: 0.06, note: 'Pectin (cell adhesion)' },
            { label: 'Primary Wall',    color: '#8FBC8F', thick: 0.12, note: 'Cellulose + hemicellulose' },
            { label: 'Secondary Wall',  color: '#C8A060', thick: 0.22, note: 'Lignin + cellulose (some cells)' },
            { label: 'Cell Membrane',   color: '#F8EAD8', thick: 0.04, note: 'Phospholipid bilayer' },
            { label: 'Cytoplasm',       color: '#F5F5DC', thick: 0.30, note: '' },
        ];

        let x = width * 0.04;
        layers.forEach(layer => {
            const lw = layer.thick * width;
            this.ctx.fillStyle = layer.color;
            this.ctx.fillRect(x, height * 0.18, lw, height * 0.55);
            this.ctx.strokeStyle = '#888';
            this.ctx.lineWidth = 1;
            this.ctx.strokeRect(x, height * 0.18, lw, height * 0.55);
            // Rotated label
            this.ctx.save();
            this.ctx.translate(x + lw / 2, height * 0.18 - 6);
            this.ctx.rotate(-Math.PI / 4);
            this.ctx.font = 'bold 8px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'left';
            this.ctx.fillText(layer.label, 0, 0);
            this.ctx.restore();
            // Note below
            if (layer.note) {
                this.ctx.save();
                this.ctx.translate(x + lw / 2, height * 0.77);
                this.ctx.rotate(Math.PI / 2);
                this.ctx.font = '7px Arial';
                this.ctx.fillStyle = '#7F8C8D';
                this.ctx.textAlign = 'left';
                this.ctx.fillText(layer.note, 0, 0);
                this.ctx.restore();
            }
            x += lw;
        });

        this.ctx.font = 'italic 8px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('← Apoplast  |  Symplast →', width / 2, height * 0.95);
    }

    drawPlasmodesmataDetailInset(width, height) {
        const cx = width * 0.50, cy = height * 0.50;

        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Plasmodesmata', width / 2, 15);

        // Two adjacent cells (left and right halves)
        this.ctx.fillStyle = '#F5F5DC';
        this.ctx.fillRect(width * 0.05, height * 0.22, width * 0.38, height * 0.58);
        this.ctx.fillRect(width * 0.57, height * 0.22, width * 0.38, height * 0.58);

        // Cell walls
        this.ctx.fillStyle = '#8FBC8F';
        this.ctx.fillRect(width * 0.42, height * 0.20, width * 0.16, height * 0.62);
        this.ctx.strokeStyle = '#6B8E6B';
        this.ctx.lineWidth = 1.5;
        this.ctx.strokeRect(width * 0.42, height * 0.20, width * 0.16, height * 0.62);

        // Plasmodesmata channels (3 vertical pores through wall)
        const poreYs = [height * 0.34, height * 0.50, height * 0.66];
        poreYs.forEach(py => {
            // Channel tube
            this.ctx.fillStyle = '#F8EAD8';
            this.ctx.fillRect(width * 0.44, py - height * 0.035, width * 0.12, height * 0.07);
            // Desmotubule (ER strand)
            this.ctx.strokeStyle = '#6BA6CC';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.moveTo(width * 0.50, py - height * 0.035);
            this.ctx.lineTo(width * 0.50, py + height * 0.035);
            this.ctx.stroke();
        });

        // ER in each cell
        this.ctx.strokeStyle = '#8BC6EC';
        this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.08, height * 0.40);
        this.ctx.quadraticCurveTo(width * 0.22, height * 0.30, width * 0.44, height * 0.50);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.56, height * 0.50);
        this.ctx.quadraticCurveTo(width * 0.78, height * 0.60, width * 0.92, height * 0.55);
        this.ctx.stroke();

        // Labels
        this.ctx.font = '9px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Cell 1', width * 0.24, height * 0.24);
        this.ctx.fillText('Cell 2', width * 0.76, height * 0.24);
        this.ctx.fillText('Cell wall', width * 0.50, height * 0.17);
        this.ctx.fillText('Desmotubule\n(ER strand)', width * 0.50, height * 0.87);
        this.ctx.font = 'italic 8px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.fillText('Channels linking adjacent plant cells', width / 2, height * 0.97);
    }

    drawVacuoleFunctionInset(width, height) {
        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Central Vacuole — Functions', width / 2, 15);

        // Vacuole circle
        const cx = width * 0.50, cy = height * 0.48;
        const r  = Math.min(width, height) * 0.28;
        const vg = this.ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        vg.addColorStop(0, '#B0E0E6');
        vg.addColorStop(1, '#4682B4');
        this.ctx.fillStyle = vg;
        this.ctx.beginPath();
        this.ctx.arc(cx, cy, r, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = '#4682B4';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
        this.ctx.font = 'bold 10px Arial';
        this.ctx.fillStyle = '#fff';
        this.ctx.fillText('Cell sap', cx, cy - 6);
        this.ctx.font = '8px Arial';
        this.ctx.fillText('(water, ions, pigments)', cx, cy + 6);

        // Function annotations around the circle
        const functions = [
            { label: 'Turgor pressure\n(structural support)', a: -Math.PI / 2 },
            { label: 'Storage\n(nutrients, waste)', a: Math.PI / 6 },
            { label: 'Pigments\n(flower colour)', a: Math.PI * 0.72 },
            { label: 'pH regulation', a: Math.PI + Math.PI / 6 },
            { label: 'Osmoregulation', a: -Math.PI * 0.72 },
        ];
        functions.forEach(({ label, a }) => {
            const lx = cx + Math.cos(a) * (r + width * 0.12);
            const ly = cy + Math.sin(a) * (r + height * 0.10);
            this.ctx.strokeStyle = '#4682B4';
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.moveTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
            this.ctx.lineTo(lx, ly);
            this.ctx.stroke();
            this.ctx.font = '8px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            label.split('\n').forEach((line, li) => this.ctx.fillText(line, lx, ly + li * 10 - 4));
        });
    }

    drawGranumThylakoidInset(width, height) {
        const cx = width * 0.40, startY = height * 0.18;
        const thylW = width * 0.42, thylH = height * 0.065;
        const stackN = 7;

        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Granum & Thylakoid Stack', width / 2, 15);

        // Draw thylakoid discs
        for (let i = 0; i < stackN; i++) {
            const y = startY + i * (thylH + height * 0.005);
            const grad = this.ctx.createLinearGradient(cx - thylW / 2, y, cx - thylW / 2, y + thylH);
            grad.addColorStop(0, '#32CD32');
            grad.addColorStop(0.5, '#228B22');
            grad.addColorStop(1, '#006400');
            this.ctx.fillStyle = grad;
            this.ctx.beginPath();
            this.ctx.ellipse(cx, y + thylH / 2, thylW / 2, thylH / 2, 0, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.strokeStyle = '#004400';
            this.ctx.lineWidth = 1;
            this.ctx.stroke();

            // Lumen label on first disc
            if (i === 0) {
                this.ctx.font = '8px Arial';
                this.ctx.fillStyle = '#fff';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('Thylakoid lumen', cx, y + thylH / 2 + 3);
            }
        }

        // Photosystem II icon on outer membrane
        this.ctx.fillStyle = '#FFDD44';
        this.ctx.beginPath();
        this.ctx.arc(cx - thylW * 0.30, startY + thylH / 2, 8, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.font = 'bold 7px Arial';
        this.ctx.fillStyle = '#333';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('PSII', cx - thylW * 0.30, startY + thylH / 2 + 3);

        // Photosystem I
        this.ctx.fillStyle = '#88EEBB';
        this.ctx.beginPath();
        this.ctx.arc(cx + thylW * 0.25, startY + thylH / 2, 8, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.font = 'bold 7px Arial';
        this.ctx.fillStyle = '#333';
        this.ctx.fillText('PSI', cx + thylW * 0.25, startY + thylH / 2 + 3);

        // Labels
        this.ctx.font = '9px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'left';
        this.ctx.fillText('← 1 granum', cx + thylW / 2 + 6, startY + stackN * (thylH + height * 0.005) / 2);
        this.ctx.fillText(`(${stackN} thylakoids)`, cx + thylW / 2 + 6, startY + stackN * (thylH + height * 0.005) / 2 + 12);
        this.ctx.font = 'italic 8px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('H₂O → O₂ (PSII)  |  NADP⁺→NADPH (PSI)', width / 2, height * 0.95);
    }

    drawTurgorPressureInset(width, height) {
        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Turgor Pressure', width / 2, 15);

        const states = [
            { label: 'Turgid', x: width * 0.25, col: '#87CEEB', wall: '#6B8E6B', note: 'High water\npotential outside' },
            { label: 'Plasmolysed', x: width * 0.75, col: '#E0D0A0', wall: '#6B8E6B', note: 'Low water\npotential outside' },
        ];

        states.forEach(({ label, x, col, wall, note }) => {
            const cy = height * 0.50, r = Math.min(width, height) * 0.22;

            // Cell wall
            this.ctx.strokeStyle = wall;
            this.ctx.lineWidth = 5;
            this.ctx.beginPath();
            this.ctx.rect(x - r * 1.1, cy - r * 0.95, r * 2.2, r * 1.9);
            this.ctx.stroke();

            // Vacuole / cytoplasm
            this.ctx.fillStyle = col;
            const vr = label === 'Turgid' ? r * 0.85 : r * 0.50;
            this.ctx.beginPath();
            this.ctx.arc(x, cy, vr, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.strokeStyle = '#4682B4';
            this.ctx.lineWidth = 1.5;
            this.ctx.stroke();

            if (label === 'Plasmolysed') {
                // Cytoplasm shrunk away from wall
                this.ctx.strokeStyle = '#C0A060';
                this.ctx.lineWidth = 1;
                this.ctx.setLineDash([3, 3]);
                this.ctx.beginPath();
                this.ctx.rect(x - r * 0.9, cy - r * 0.78, r * 1.8, r * 1.56);
                this.ctx.stroke();
                this.ctx.setLineDash([]);
                this.ctx.font = '8px Arial';
                this.ctx.fillStyle = '#C0A060';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('Cytoplasm\npulled away', x, cy + r * 0.88);
            }

            // Water arrows
            const arrowDir = label === 'Turgid' ? -1 : 1;
            this.ctx.strokeStyle = '#3498DB';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.moveTo(x + arrowDir * r * 0.40, cy - r * 1.15);
            this.ctx.lineTo(x + arrowDir * r * 0.40, cy - r * 0.95);
            this.ctx.stroke();

            // State label
            this.ctx.font = 'bold 10px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(label, x, height * 0.22);

            // Note
            this.ctx.font = '8px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            note.split('\n').forEach((line, li) => this.ctx.fillText(line, x, height * 0.82 + li * 10));
        });

        // Osmosis arrow between two cells
        this.ctx.font = 'bold 9px Arial';
        this.ctx.fillStyle = '#3498DB';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('H₂O →', width * 0.50, height * 0.50);
    }

    // ── CELL MEMBRANE INSETS ──────────────────────────────────────────────

    drawPhospholipidStructureInset(width, height) {
        const cx = width * 0.35, headY = height * 0.25, tailEndY = height * 0.75;

        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Phospholipid Molecule', width / 2, 15);

        // Hydrophilic head (circle)
        this.ctx.fillStyle = '#F0C080';
        this.ctx.beginPath();
        this.ctx.arc(cx, headY, width * 0.10, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = '#D0A060';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
        this.ctx.font = 'bold 8px Arial';
        this.ctx.fillStyle = '#333';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Phosphate', cx, headY - 2);
        this.ctx.fillText('head', cx, headY + 10);

        // Glycerol backbone
        this.ctx.fillStyle = '#D0C080';
        this.ctx.fillRect(cx - 12, headY + width * 0.10, 24, height * 0.08);
        this.ctx.font = '7px Arial';
        this.ctx.fillStyle = '#555';
        this.ctx.fillText('Glycerol', cx, headY + width * 0.10 + height * 0.05);

        // Two fatty acid tails
        const tailTopY = headY + width * 0.10 + height * 0.08;
        const tailCols = ['#FFE0A0', '#FFD090'];
        [cx - width * 0.07, cx + width * 0.07].forEach((tx, ti) => {
            this.ctx.fillStyle = tailCols[ti];
            this.ctx.fillRect(tx - 7, tailTopY, 14, tailEndY - tailTopY);
            this.ctx.strokeStyle = '#D0A060';
            this.ctx.lineWidth = 1;
            this.ctx.strokeRect(tx - 7, tailTopY, 14, tailEndY - tailTopY);
            // Kink for unsaturated
            if (ti === 1) {
                this.ctx.strokeStyle = '#A07030';
                this.ctx.lineWidth = 1.5;
                this.ctx.setLineDash([2, 2]);
                this.ctx.beginPath();
                this.ctx.moveTo(tx, tailTopY + (tailEndY - tailTopY) * 0.5);
                this.ctx.lineTo(tx + 10, tailTopY + (tailEndY - tailTopY) * 0.5 + 10);
                this.ctx.stroke();
                this.ctx.setLineDash([]);
            }
        });

        // Labels right side
        this.ctx.font = '9px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'left';
        this.ctx.fillText('Hydrophilic', cx + width * 0.14, headY);
        this.ctx.fillText('(water-loving)', cx + width * 0.14, headY + 11);
        this.ctx.fillText('Hydrophobic', cx + width * 0.14, (tailTopY + tailEndY) / 2 - 6);
        this.ctx.fillText('fatty acid tails', cx + width * 0.14, (tailTopY + tailEndY) / 2 + 6);
        this.ctx.fillText('(water-fearing)', cx + width * 0.14, (tailTopY + tailEndY) / 2 + 18);

        this.ctx.font = 'italic 8px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Amphipathic molecule — forms bilayer', width / 2, height * 0.93);
    }

    drawProteinTypesInset(width, height) {
        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Membrane Protein Types', width / 2, 15);

        // Bilayer bands
        const by1 = height * 0.38, by2 = height * 0.55;
        this.ctx.fillStyle = '#F0C080';
        this.ctx.fillRect(width * 0.04, by1, width * 0.92, by2 - by1);
        this.ctx.strokeStyle = '#D0A060';
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(width * 0.04, by1, width * 0.92, (by2 - by1) / 2);
        this.ctx.strokeRect(width * 0.04, by1 + (by2 - by1) / 2, width * 0.92, (by2 - by1) / 2);

        const proteins = [
            { label: 'Integral\n(channel)', x: width * 0.18, col: '#9B78C8', span: true },
            { label: 'Peripheral\n(extracell.)', x: width * 0.42, col: '#E07840', span: false, side: 'top' },
            { label: 'Integral\n(receptor)', x: width * 0.62, col: '#7B98D8', span: true },
            { label: 'Peripheral\n(cytoplasm)', x: width * 0.84, col: '#58A860', span: false, side: 'bottom' },
        ];

        proteins.forEach(({ label, x, col, span, side }) => {
            this.ctx.fillStyle = col;
            if (span) {
                this.ctx.beginPath();
                this.ctx.roundRect(x - 12, by1 - 6, 24, by2 - by1 + 12, 6);
                this.ctx.fill();
            } else if (side === 'top') {
                this.ctx.beginPath();
                this.ctx.ellipse(x, by1 - 10, 16, 12, 0, 0, Math.PI * 2);
                this.ctx.fill();
            } else {
                this.ctx.beginPath();
                this.ctx.ellipse(x, by2 + 10, 16, 12, 0, 0, Math.PI * 2);
                this.ctx.fill();
            }
            this.ctx.font = '8px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            label.split('\n').forEach((line, li) => {
                this.ctx.fillText(line, x, (side === 'bottom' ? by2 + 28 : by1 - 26) + li * 10);
            });
        });

        this.ctx.font = 'italic 8px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Fluid mosaic model — proteins float in bilayer', width / 2, height * 0.94);
    }

    drawActiveVsPassiveInset(width, height) {
        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Active vs Passive Transport', width / 2, 15);

        // Dividing line
        this.ctx.strokeStyle = '#BDC3C7';
        this.ctx.lineWidth = 1;
        this.ctx.setLineDash([4, 3]);
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.50, height * 0.10);
        this.ctx.lineTo(width * 0.50, height * 0.92);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        // Left: Passive (down gradient)
        this.ctx.font = 'bold 10px Arial';
        this.ctx.fillStyle = '#27AE60';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Passive', width * 0.25, height * 0.14);
        this.ctx.font = '8px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.fillText('No energy (ATP)', width * 0.25, height * 0.22);

        // Concentration gradient bars (left)
        for (let i = 0; i < 5; i++) {
            const alpha = 1 - i * 0.18;
            this.ctx.fillStyle = `rgba(39,174,96,${alpha})`;
            this.ctx.fillRect(width * 0.06 + i * width * 0.07, height * 0.30, width * 0.06, height * 0.28);
        }
        // Arrow pointing right (down gradient)
        this.ctx.strokeStyle = '#27AE60';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.08, height * 0.64);
        this.ctx.lineTo(width * 0.44, height * 0.64);
        this.ctx.stroke();
        this.ctx.fillStyle = '#27AE60';
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.44, height * 0.64);
        this.ctx.lineTo(width * 0.40, height * 0.61);
        this.ctx.lineTo(width * 0.40, height * 0.67);
        this.ctx.fill();
        this.ctx.font = '8px Arial';
        this.ctx.fillText('High → Low', width * 0.25, height * 0.74);
        this.ctx.fillText('(diffusion / osmosis)', width * 0.25, height * 0.82);

        // Right: Active (up gradient)
        this.ctx.font = 'bold 10px Arial';
        this.ctx.fillStyle = '#E74C3C';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Active', width * 0.75, height * 0.14);
        this.ctx.font = '8px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.fillText('Requires ATP', width * 0.75, height * 0.22);

        // Gradient bars reversed
        for (let i = 0; i < 5; i++) {
            const alpha = 0.2 + i * 0.18;
            this.ctx.fillStyle = `rgba(231,76,60,${alpha})`;
            this.ctx.fillRect(width * 0.56 + i * width * 0.07, height * 0.30, width * 0.06, height * 0.28);
        }
        // Arrow pointing left (against gradient)
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.94, height * 0.64);
        this.ctx.lineTo(width * 0.56, height * 0.64);
        this.ctx.stroke();
        this.ctx.fillStyle = '#E74C3C';
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.56, height * 0.64);
        this.ctx.lineTo(width * 0.60, height * 0.61);
        this.ctx.lineTo(width * 0.60, height * 0.67);
        this.ctx.fill();
        this.ctx.font = '8px Arial';
        this.ctx.fillText('Low → High', width * 0.75, height * 0.74);
        this.ctx.fillText('(pumps, Na⁺/K⁺ ATPase)', width * 0.75, height * 0.82);

        // ATP label
        this.ctx.font = 'bold 9px Arial';
        this.ctx.fillStyle = '#F39C12';
        this.ctx.fillText('ATP ⚡', width * 0.75, height * 0.90);
    }

    drawOsmosisDiagramInset(width, height) {
        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Osmosis', width / 2, 15);

        const memX = width * 0.50, memTop = height * 0.15, memBot = height * 0.85;

        // Left side (dilute — high ψ)
        this.ctx.fillStyle = 'rgba(100,180,255,0.20)';
        this.ctx.fillRect(width * 0.04, memTop, memX - width * 0.05, memBot - memTop);
        // Right side (concentrated — low ψ)
        this.ctx.fillStyle = 'rgba(100,180,255,0.50)';
        this.ctx.fillRect(memX + width * 0.01, memTop, width * 0.95 - memX, memBot - memTop);

        // Membrane
        this.ctx.fillStyle = '#F0C080';
        this.ctx.fillRect(memX - 4, memTop, 8, memBot - memTop);
        this.ctx.strokeStyle = '#D0A060';
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(memX - 4, memTop, 8, memBot - memTop);
        this.ctx.font = '8px Arial';
        this.ctx.fillStyle = '#A07030';
        this.ctx.save();
        this.ctx.translate(memX, (memTop + memBot) / 2);
        this.ctx.rotate(-Math.PI / 2);
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Semipermeable membrane', 0, 0);
        this.ctx.restore();

        // Water molecules (dots) — more on left, fewer on right
        const dotData = [
            { x: width * 0.20, n: 8, col: '#3498DB' },
            { x: width * 0.72, n: 4, col: '#3498DB' },
        ];
        dotData.forEach(({ x, n, col }) => {
            this.ctx.fillStyle = col;
            for (let i = 0; i < n; i++) {
                const row = Math.floor(i / 2);
                const col2 = i % 2;
                this.ctx.beginPath();
                this.ctx.arc(x - 12 + col2 * 24, memTop + height * 0.12 + row * height * 0.10, 5, 0, Math.PI * 2);
                this.ctx.fill();
            }
        });

        // Net osmosis arrow
        this.ctx.strokeStyle = '#3498DB';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.34, height * 0.50);
        this.ctx.lineTo(memX - 6, height * 0.50);
        this.ctx.stroke();
        this.ctx.fillStyle = '#3498DB';
        this.ctx.beginPath();
        this.ctx.moveTo(memX - 6, height * 0.50);
        this.ctx.lineTo(memX - 14, height * 0.47);
        this.ctx.lineTo(memX - 14, height * 0.53);
        this.ctx.fill();

        // Labels
        this.ctx.font = '9px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Dilute', width * 0.24, memTop - 3);
        this.ctx.fillText('(high ψ)', width * 0.24, memTop + 8);
        this.ctx.fillText('Concentrated', width * 0.74, memTop - 3);
        this.ctx.fillText('(low ψ)', width * 0.74, memTop + 8);
        this.ctx.fillText('Net H₂O flow →', width * 0.36, height * 0.44);
        this.ctx.font = 'italic 8px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.fillText('Water moves down water-potential gradient', width / 2, height * 0.94);
    }

    drawIonChannelGatingInset(width, height) {
        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Ion Channel — Gating', width / 2, 15);

        const states = ['Closed', 'Open'];
        states.forEach((state, si) => {
            const cx = width * (si === 0 ? 0.26 : 0.74);
            const by = height * 0.45;
            const bh = height * 0.30;

            // Bilayer
            this.ctx.fillStyle = '#F0C080';
            this.ctx.fillRect(cx - width * 0.17, by, width * 0.34, bh);
            this.ctx.strokeStyle = '#D0A060';
            this.ctx.lineWidth = 1;
            this.ctx.strokeRect(cx - width * 0.17, by, width * 0.34, bh / 2);
            this.ctx.strokeRect(cx - width * 0.17, by + bh / 2, width * 0.34, bh / 2);

            // Channel protein (two subunits with gate in middle)
            const gapW = state === 'Open' ? width * 0.06 : width * 0.00;
            this.ctx.fillStyle = '#9B78C8';
            // Left subunit
            this.ctx.beginPath();
            this.ctx.roundRect(cx - width * 0.10, by - 10, width * 0.09 - gapW / 2, bh + 20, 4);
            this.ctx.fill();
            this.ctx.strokeStyle = '#7B58A8';
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
            // Right subunit
            this.ctx.fillStyle = '#9B78C8';
            this.ctx.beginPath();
            this.ctx.roundRect(cx + gapW / 2 + width * 0.01, by - 10, width * 0.09 - gapW / 2, bh + 20, 4);
            this.ctx.fill();
            this.ctx.stroke();

            // Ion flow arrows (only open)
            if (state === 'Open') {
                this.ctx.strokeStyle = '#E74C3C';
                this.ctx.lineWidth = 2;
                for (let i = 0; i < 3; i++) {
                    const ay = by + height * 0.05 + i * height * 0.08;
                    this.ctx.beginPath();
                    this.ctx.moveTo(cx, ay - 8);
                    this.ctx.lineTo(cx, ay + 8);
                    this.ctx.stroke();
                }
                this.ctx.fillStyle = '#E74C3C';
                this.ctx.font = 'bold 8px Arial';
                this.ctx.fillText('Na⁺', cx + width * 0.06, by + height * 0.10);
            }

            // Ligand / voltage indicator
            if (si === 1) {
                this.ctx.fillStyle = '#F1C40F';
                this.ctx.beginPath();
                this.ctx.arc(cx - width * 0.10, by - 18, 7, 0, Math.PI * 2);
                this.ctx.fill();
                this.ctx.font = '7px Arial';
                this.ctx.fillStyle = '#333';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('⚡', cx - width * 0.10, by - 15);
            }

            this.ctx.font = 'bold 9px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(state, cx, height * 0.82);
        });

        this.ctx.font = 'italic 8px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Voltage-gated & ligand-gated channels', width / 2, height * 0.94);
    }

    drawMembraneFluididtyInset(width, height) {
        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Membrane Fluidity Factors', width / 2, 15);

        // Bilayer
        const by = height * 0.40, bh = height * 0.22;
        this.ctx.fillStyle = '#F0C080';
        this.ctx.fillRect(width * 0.05, by, width * 0.90, bh);
        this.ctx.strokeStyle = '#D0A060';
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(width * 0.05, by, width * 0.90, bh / 2);
        this.ctx.strokeRect(width * 0.05, by + bh / 2, width * 0.90, bh / 2);

        // Cholesterol wedges
        [0.25, 0.50, 0.75].forEach(fx => {
            this.ctx.fillStyle = '#F0E68C';
            this.ctx.beginPath();
            this.ctx.moveTo(width * fx, by + bh / 2 - 6);
            this.ctx.lineTo(width * fx - 6, by + bh / 2 + 12);
            this.ctx.lineTo(width * fx + 6, by + bh / 2 + 12);
            this.ctx.closePath();
            this.ctx.fill();
            this.ctx.strokeStyle = '#B8B020';
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
        });
        this.ctx.font = '8px Arial';
        this.ctx.fillStyle = '#8A7800';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Cholesterol (stabilises fluidity)', width * 0.50, by + bh + 14);

        // Unsaturated fatty acid kink
        this.ctx.strokeStyle = '#C05030';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.15, by + bh * 0.2);
        this.ctx.lineTo(width * 0.15, by + bh * 0.5);
        this.ctx.lineTo(width * 0.20, by + bh * 0.55);
        this.ctx.lineTo(width * 0.15, by + bh * 0.8);
        this.ctx.stroke();
        this.ctx.font = '8px Arial';
        this.ctx.fillStyle = '#C05030';
        this.ctx.textAlign = 'left';
        this.ctx.fillText('Unsaturated tail', width * 0.04, by - 6);
        this.ctx.fillText('(kink → more fluid)', width * 0.04, by - 15);

        // Temperature arrow
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.78, by - 20);
        this.ctx.lineTo(width * 0.90, by - 20);
        this.ctx.stroke();
        this.ctx.font = '9px Arial';
        this.ctx.fillStyle = '#E74C3C';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('↑ Temp → ↑ Fluidity', width * 0.80, by - 26);

        this.ctx.font = 'italic 8px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Fluid mosaic: lipids & proteins move laterally', width / 2, height * 0.94);
    }

    // ── CELL DIVISION INSETS ──────────────────────────────────────────────

    drawCellCycleCheckpointsInset(width, height) {
        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Cell Cycle & Checkpoints', width / 2, 15);

        const cx = width * 0.50, cy = height * 0.52;
        const r  = Math.min(width, height) * 0.32;

        // Phases as pie slices
        const phases = [
            { label: 'G₁', color: '#AED6F1', pct: 0.30, desc: 'Growth' },
            { label: 'S',  color: '#A9DFBF', pct: 0.25, desc: 'DNA synthesis' },
            { label: 'G₂', color: '#F9E79F', pct: 0.20, desc: 'Prep for mitosis' },
            { label: 'M',  color: '#F1948A', pct: 0.10, desc: 'Mitosis' },
            { label: 'G₀', color: '#D5D8DC', pct: 0.15, desc: 'Quiescence' },
        ];

        let startAngle = -Math.PI / 2;
        phases.forEach(p => {
            const sweep = p.pct * Math.PI * 2;
            this.ctx.fillStyle = p.color;
            this.ctx.beginPath();
            this.ctx.moveTo(cx, cy);
            this.ctx.arc(cx, cy, r, startAngle, startAngle + sweep);
            this.ctx.closePath();
            this.ctx.fill();
            this.ctx.strokeStyle = '#fff';
            this.ctx.lineWidth = 2;
            this.ctx.stroke();
            const midA = startAngle + sweep / 2;
            this.ctx.font = 'bold 10px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(p.label, cx + Math.cos(midA) * r * 0.65, cy + Math.sin(midA) * r * 0.65);
            startAngle += sweep;
        });

        // Checkpoint diamonds
        const checkpoints = [
            { label: 'G₁/S\ncheckpoint', a: Math.PI * 0.25,  col: '#E74C3C' },
            { label: 'G₂/M\ncheckpoint', a: Math.PI * 0.82,  col: '#E74C3C' },
            { label: 'Spindle\ncheckpoint', a: Math.PI * 1.1, col: '#E74C3C' },
        ];
        checkpoints.forEach(({ label, a, col }) => {
            const dx = cx + Math.cos(a) * r, dy = cy + Math.sin(a) * r;
            this.ctx.fillStyle = col;
            this.ctx.beginPath();
            this.ctx.moveTo(dx, dy - 8);
            this.ctx.lineTo(dx + 8, dy);
            this.ctx.lineTo(dx, dy + 8);
            this.ctx.lineTo(dx - 8, dy);
            this.ctx.closePath();
            this.ctx.fill();
            this.ctx.font = '7px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = a > Math.PI ? 'right' : 'left';
            label.split('\n').forEach((line, li) => {
                this.ctx.fillText(line, dx + (a > Math.PI ? -12 : 12), dy - 4 + li * 9);
            });
        });

        this.ctx.font = 'italic 8px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Checkpoints prevent faulty division', width / 2, height * 0.94);
    }

    drawChromosomeStructureInset(width, height) {
        const cx = width * 0.42, cy = height * 0.50;

        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Chromosome Structure', width / 2, 15);

        // Draw X-shaped chromosome (two chromatids joined at centromere)
        const armW = width * 0.08, shortArmH = height * 0.22, longArmH = height * 0.30;

        // Draw sister chromatids side by side
        [-1, 1].forEach(side => {
            const x = cx + side * armW * 0.55;
            // Short arm
            this.ctx.fillStyle = '#6080E0';
            this.ctx.beginPath();
            this.ctx.roundRect(x - armW / 2, cy - height * 0.06 - shortArmH, armW, shortArmH, 6);
            this.ctx.fill();
            this.ctx.strokeStyle = '#4060C0';
            this.ctx.lineWidth = 1.5;
            this.ctx.stroke();
            // Long arm
            this.ctx.fillStyle = '#8090F0';
            this.ctx.beginPath();
            this.ctx.roundRect(x - armW / 2, cy + height * 0.06, armW, longArmH, 6);
            this.ctx.fill();
            this.ctx.strokeStyle = '#4060C0';
            this.ctx.stroke();
        });

        // Centromere (constriction)
        this.ctx.fillStyle = '#E74C3C';
        this.ctx.beginPath();
        this.ctx.ellipse(cx, cy, armW * 1.2, height * 0.06, 0, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = '#C0392B';
        this.ctx.lineWidth = 1;
        this.ctx.stroke();

        // Telomere dots at ends
        [cy - height * 0.06 - shortArmH, cy + height * 0.06 + longArmH].forEach(ty => {
            this.ctx.fillStyle = '#F1C40F';
            this.ctx.beginPath();
            this.ctx.ellipse(cx, ty, armW * 1.3, height * 0.03, 0, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.strokeStyle = '#D4A020';
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
        });

        // Labels
        this.ctx.font = '9px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'left';
        const lx = cx + armW * 1.3 + 6;
        this.ctx.fillText('Telomere', lx, cy - height * 0.06 - shortArmH);
        this.ctx.fillText('Short arm (p)', lx, cy - height * 0.18);
        this.ctx.fillText('Centromere', lx, cy + 3);
        this.ctx.fillText('Long arm (q)', lx, cy + height * 0.20);
        this.ctx.fillText('Telomere', lx, cy + height * 0.06 + longArmH);
        this.ctx.fillText('Sister\nchromatids', lx, cy - height * 0.38);

        this.ctx.font = 'italic 8px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Each chromatid = one DNA double helix', width / 2, height * 0.94);
    }

    drawSpindleAssemblyInset(width, height) {
        const cx = width * 0.50, cy = height * 0.50;

        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Spindle Apparatus', width / 2, 15);

        // Two poles (centrioles)
        const poleY = [height * 0.18, height * 0.82];
        poleY.forEach((py, pi) => {
            this.ctx.fillStyle = '#9B7BB8';
            this.ctx.beginPath();
            this.ctx.ellipse(cx, py, width * 0.07, height * 0.04, 0, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.strokeStyle = '#7B5B98';
            this.ctx.lineWidth = 1.5;
            this.ctx.stroke();
            this.ctx.font = '9px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(pi === 0 ? 'Centrosome (pole 1)' : 'Centrosome (pole 2)', cx, py + (pi === 0 ? -height * 0.05 : height * 0.06));
        });

        // Spindle fibres (microtubules)
        const fiberAngles = [-0.35, -0.15, 0, 0.15, 0.35];
        fiberAngles.forEach(a => {
            this.ctx.strokeStyle = 'rgba(96,192,96,0.75)';
            this.ctx.lineWidth = 1.8;
            this.ctx.beginPath();
            this.ctx.moveTo(cx + Math.sin(a) * width * 0.35, poleY[0] + height * 0.04);
            this.ctx.lineTo(cx + Math.sin(a) * width * 0.35, poleY[1] - height * 0.04);
            this.ctx.stroke();
        });

        // Chromosomes at metaphase plate
        const chromYs = [cy - height * 0.06, cy, cy + height * 0.06];
        chromYs.forEach(chY => {
            this.ctx.fillStyle = '#6080E0';
            this.ctx.beginPath();
            this.ctx.ellipse(cx, chY, width * 0.10, height * 0.025, 0, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.strokeStyle = '#4060C0';
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
        });

        // Metaphase plate
        this.ctx.strokeStyle = 'rgba(200,100,0,0.50)';
        this.ctx.lineWidth = 1.5;
        this.ctx.setLineDash([4, 3]);
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.10, cy);
        this.ctx.lineTo(width * 0.90, cy);
        this.ctx.stroke();
        this.ctx.setLineDash([]);
        this.ctx.font = '8px Arial';
        this.ctx.fillStyle = 'rgba(200,100,0,0.8)';
        this.ctx.textAlign = 'right';
        this.ctx.fillText('Metaphase plate', width * 0.90, cy - 4);

        this.ctx.font = 'italic 8px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Kinetochore fibres attach at centromere', width / 2, height * 0.94);
    }

    drawCytokinesisDetailInset(width, height) {
        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Cytokinesis', width / 2, 15);

        const states = [
            { label: 'Animal Cell\n(Cleavage furrow)', x: width * 0.26 },
            { label: 'Plant Cell\n(Cell plate)', x: width * 0.74 },
        ];

        states.forEach(({ label, x }) => {
            const cy = height * 0.50, r = Math.min(width, height) * 0.26;
            const isAnimal = label.includes('Animal');

            // Cell outline
            this.ctx.fillStyle = isAnimal ? '#D0E8F8' : '#D8F0D0';
            this.ctx.beginPath();
            this.ctx.arc(x, cy, r, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.strokeStyle = isAnimal ? '#5090C0' : '#509050';
            this.ctx.lineWidth = 2;
            this.ctx.stroke();

            // Two forming nuclei
            [cy - r * 0.38, cy + r * 0.38].forEach(ny => {
                this.ctx.fillStyle = isAnimal ? '#9B78C8' : '#7B68A6';
                this.ctx.beginPath();
                this.ctx.arc(x, ny, r * 0.22, 0, Math.PI * 2);
                this.ctx.fill();
            });

            if (isAnimal) {
                // Cleavage furrow (pinch at equator)
                this.ctx.strokeStyle = '#E74C3C';
                this.ctx.lineWidth = 3;
                this.ctx.beginPath();
                this.ctx.moveTo(x - r + 8, cy);
                this.ctx.lineTo(x + r - 8, cy);
                this.ctx.stroke();
                // Actin ring arrows
                this.ctx.strokeStyle = 'rgba(200,50,50,0.7)';
                this.ctx.lineWidth = 1.5;
                [[-1, 1], [1, -1]].forEach(([dx]) => {
                    this.ctx.beginPath();
                    this.ctx.moveTo(x + dx * (r - 10), cy);
                    this.ctx.lineTo(x + dx * (r - 20), cy);
                    this.ctx.stroke();
                });
                this.ctx.font = '8px Arial';
                this.ctx.fillStyle = '#C0392B';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('Actin-myosin\ncontractile ring', x, cy + r + 14);
            } else {
                // Cell plate (Golgi vesicles fusing)
                this.ctx.fillStyle = '#F4A460';
                this.ctx.fillRect(x - r * 0.55, cy - 5, r * 1.10, 10);
                this.ctx.strokeStyle = '#D48440';
                this.ctx.lineWidth = 1.5;
                this.ctx.strokeRect(x - r * 0.55, cy - 5, r * 1.10, 10);
                // Vesicles fusing
                this.ctx.fillStyle = '#FFC480';
                [-0.40, -0.20, 0, 0.20, 0.40].forEach(off => {
                    this.ctx.beginPath();
                    this.ctx.arc(x + off * r, cy, 5, 0, Math.PI * 2);
                    this.ctx.fill();
                });
                this.ctx.font = '8px Arial';
                this.ctx.fillStyle = '#C08030';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('Golgi vesicles\nform cell plate', x, cy + r + 14);
            }

            this.ctx.font = 'bold 9px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            label.split('\n').forEach((line, li) => this.ctx.fillText(line, x, height * 0.16 + li * 12));
        });
    }

    drawCrossingOverInset(width, height) {
        const cy = height * 0.50;

        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Crossing Over (Prophase I)', width / 2, 15);

        // Homologous chromosomes before
        const beforeX = width * 0.22;
        const chromH  = height * 0.55, chromW = width * 0.06;

        // Left homologue
        this.ctx.fillStyle = '#6080E0';
        this.ctx.beginPath();
        this.ctx.roundRect(beforeX - chromW - 4, cy - chromH / 2, chromW, chromH, 5);
        this.ctx.fill();
        // Right homologue (same locus, different allele)
        this.ctx.fillStyle = '#E08060';
        this.ctx.beginPath();
        this.ctx.roundRect(beforeX + 4, cy - chromH / 2, chromW, chromH, 5);
        this.ctx.fill();

        // Chiasmata (X crossover)
        const chiaY = cy + height * 0.04;
        this.ctx.strokeStyle = '#888';
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.moveTo(beforeX - chromW - 4, chiaY - 6);
        this.ctx.lineTo(beforeX + 4, chiaY + 6);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(beforeX + 4, chiaY - 6);
        this.ctx.lineTo(beforeX - chromW - 4, chiaY + 6);
        this.ctx.stroke();
        this.ctx.font = '8px Arial';
        this.ctx.fillStyle = '#666';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Chiasma', beforeX, chiaY - height * 0.15);

        // Arrow
        this.ctx.strokeStyle = '#555';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.42, cy);
        this.ctx.lineTo(width * 0.54, cy);
        this.ctx.stroke();
        this.ctx.fillStyle = '#555';
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.54, cy);
        this.ctx.lineTo(width * 0.50, cy - 5);
        this.ctx.lineTo(width * 0.50, cy + 5);
        this.ctx.fill();

        // After — recombinant chromosomes
        const afterX = width * 0.73;
        // Left recombinant (top = blue, bottom = orange)
        this.ctx.fillStyle = '#6080E0';
        this.ctx.beginPath();
        this.ctx.roundRect(afterX - chromW - 4, cy - chromH / 2, chromW, chromH * 0.50, 5);
        this.ctx.fill();
        this.ctx.fillStyle = '#E08060';
        this.ctx.beginPath();
        this.ctx.roundRect(afterX - chromW - 4, cy, chromW, chromH * 0.50, 5);
        this.ctx.fill();
        // Right recombinant (top = orange, bottom = blue)
        this.ctx.fillStyle = '#E08060';
        this.ctx.beginPath();
        this.ctx.roundRect(afterX + 4, cy - chromH / 2, chromW, chromH * 0.50, 5);
        this.ctx.fill();
        this.ctx.fillStyle = '#6080E0';
        this.ctx.beginPath();
        this.ctx.roundRect(afterX + 4, cy, chromW, chromH * 0.50, 5);
        this.ctx.fill();

        this.ctx.font = '9px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Bivalent\n(synapsed)', beforeX, height * 0.88);
        this.ctx.fillText('Recombinant\nchromatids', afterX, height * 0.88);

        this.ctx.font = 'italic 8px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.fillText('Increases genetic diversity', width / 2, height * 0.97);
    }

    drawIndependentAssortmentInset(width, height) {
        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Independent Assortment', width / 2, 15);

        // Parent cell (top) with 2 bivalents
        const parentX = width * 0.50, parentY = height * 0.25, pr = width * 0.10;
        this.ctx.fillStyle = '#D0E8F8';
        this.ctx.beginPath();
        this.ctx.arc(parentX, parentY, pr, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = '#5090C0';
        this.ctx.lineWidth = 1.5;
        this.ctx.stroke();
        // Two bivalent pairs
        [[-1, '#6080E0', '#E08060'], [1, '#60C080', '#C06080']].forEach(([side, ca, cb]) => {
            const bx = parentX + side * pr * 0.45;
            this.ctx.fillStyle = ca;
            this.ctx.fillRect(bx - 5, parentY - 12, 4, 24);
            this.ctx.fillStyle = cb;
            this.ctx.fillRect(bx + 1, parentY - 12, 4, 24);
        });

        // Dividing arrows to two possible orientations
        const arrowCols = ['#3498DB', '#E67E22'];
        [[width * 0.24, height * 0.55], [width * 0.76, height * 0.55]].forEach(([dx, dy], oi) => {
            this.ctx.strokeStyle = arrowCols[oi];
            this.ctx.lineWidth = 1.5;
            this.ctx.beginPath();
            this.ctx.moveTo(parentX + (oi === 0 ? -pr * 0.4 : pr * 0.4), parentY + pr);
            this.ctx.lineTo(dx, dy - 14);
            this.ctx.stroke();

            // Daughter cells
            const r2 = width * 0.09;
            [[-1, 1], [1, -1]][oi].forEach((side, ci) => {
                const offY = ci === 0 ? -height * 0.10 : height * 0.10;
                this.ctx.fillStyle = '#EEF4FF';
                this.ctx.beginPath();
                this.ctx.arc(dx + side * r2 * 1.1, dy + offY, r2, 0, Math.PI * 2);
                this.ctx.fill();
                this.ctx.strokeStyle = arrowCols[oi];
                this.ctx.lineWidth = 1;
                this.ctx.stroke();
                // One chromosome each
                const cols = oi === 0
                    ? [['#6080E0', '#60C080'], ['#E08060', '#C06080']][ci]
                    : [['#6080E0', '#C06080'], ['#E08060', '#60C080']][ci];
                cols.forEach((col, ji) => {
                    this.ctx.fillStyle = col;
                    this.ctx.fillRect(dx + side * r2 * 1.1 - 5 + ji * 6, dy + offY - 8, 4, 16);
                });
            });
        });

        this.ctx.font = '8px Arial';
        this.ctx.fillStyle = '#3498DB';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Orientation A', width * 0.24, height * 0.90);
        this.ctx.fillStyle = '#E67E22';
        this.ctx.fillText('Orientation B', width * 0.76, height * 0.90);
        this.ctx.font = 'italic 8px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.fillText('4 gamete combinations possible (Law of Independent Assortment)', width / 2, height * 0.97);
    }

    // ── CELLULAR RESPIRATION INSETS ───────────────────────────────────────

    drawATPStructureInset(width, height) {
        const cx = width * 0.42, cy = height * 0.50;

        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('ATP Structure', width / 2, 15);

        // Adenine base
        this.ctx.fillStyle = '#AED6F1';
        this.ctx.beginPath();
        this.ctx.roundRect(cx - width * 0.16, cy - height * 0.35, width * 0.22, height * 0.28, 8);
        this.ctx.fill();
        this.ctx.strokeStyle = '#2E86C1';
        this.ctx.lineWidth = 1.5;
        this.ctx.stroke();
        this.ctx.font = 'bold 9px Arial';
        this.ctx.fillStyle = '#1A5276';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Adenine', cx - width * 0.05, cy - height * 0.22);

        // Ribose sugar
        this.ctx.fillStyle = '#A9DFBF';
        this.ctx.beginPath();
        this.ctx.roundRect(cx - width * 0.04, cy - height * 0.22, width * 0.14, height * 0.20, 6);
        this.ctx.fill();
        this.ctx.strokeStyle = '#1D8348';
        this.ctx.lineWidth = 1.5;
        this.ctx.stroke();
        this.ctx.font = '8px Arial';
        this.ctx.fillStyle = '#1A5226';
        this.ctx.fillText('Ribose', cx + width * 0.03, cy - height * 0.12);

        // Three phosphate groups
        const phosphCols = ['#E74C3C', '#E67E22', '#F1C40F'];
        const phosphLabels = ['γ (high-energy)', 'β', 'α'];
        phosphCols.forEach((col, pi) => {
            const px = cx + width * 0.12 + pi * width * 0.14;
            const py = cy - height * 0.04;
            this.ctx.fillStyle = col;
            this.ctx.beginPath();
            this.ctx.arc(px, py, width * 0.055, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.strokeStyle = '#888';
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
            this.ctx.font = 'bold 9px Arial';
            this.ctx.fillStyle = '#fff';
            this.ctx.fillText('P', px, py + 3);
            this.ctx.font = '7px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.fillText(phosphLabels[pi], px, py + width * 0.07);
        });

        // Bond labels
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([3, 2]);
        this.ctx.beginPath();
        this.ctx.moveTo(cx + width * 0.12, cy - height * 0.04 + width * 0.055);
        this.ctx.lineTo(cx + width * 0.12, cy + height * 0.20);
        this.ctx.stroke();
        this.ctx.setLineDash([]);
        this.ctx.font = '9px Arial';
        this.ctx.fillStyle = '#E74C3C';
        this.ctx.textAlign = 'left';
        this.ctx.fillText('High-energy\nphosphate bond\n(~30.5 kJ/mol)', cx + width * 0.12 + 4, cy + height * 0.22);

        this.ctx.font = 'italic 8px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('ATP → ADP + Pᵢ releases ~30.5 kJ/mol', width / 2, height * 0.93);
    }

    drawNADHFADH2RoleInset(width, height) {
        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('NADH & FADH₂ as Electron Carriers', width / 2, 15);

        // Two columns: NADH and FADH2
        [[width * 0.28, 'NADH', '#3498DB', 'NAD⁺', '2.5 ATP per NADH'],
         [width * 0.72, 'FADH₂', '#E67E22', 'FAD', '1.5 ATP per FADH₂']
        ].forEach(([x, label, col, oxidised, yield_]) => {
            // Reduced form circle
            this.ctx.fillStyle = col;
            this.ctx.beginPath();
            this.ctx.arc(x, height * 0.35, width * 0.12, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.strokeStyle = col;
            this.ctx.lineWidth = 2;
            this.ctx.stroke();
            this.ctx.font = 'bold 12px Arial';
            this.ctx.fillStyle = '#fff';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(label, x, height * 0.38);

            // Arrow (electron donation)
            this.ctx.strokeStyle = '#555';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.moveTo(x, height * 0.35 + width * 0.12);
            this.ctx.lineTo(x, height * 0.60);
            this.ctx.stroke();
            this.ctx.fillStyle = '#555';
            this.ctx.beginPath();
            this.ctx.moveTo(x, height * 0.62);
            this.ctx.lineTo(x - 5, height * 0.58);
            this.ctx.lineTo(x + 5, height * 0.58);
            this.ctx.fill();

            // Oxidised form
            this.ctx.fillStyle = 'rgba(200,200,200,0.5)';
            this.ctx.beginPath();
            this.ctx.arc(x, height * 0.70, width * 0.10, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.strokeStyle = '#888';
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
            this.ctx.font = '10px Arial';
            this.ctx.fillStyle = '#555';
            this.ctx.fillText(oxidised, x, height * 0.73);

            // ATP yield label
            this.ctx.font = 'bold 9px Arial';
            this.ctx.fillStyle = '#F39C12';
            this.ctx.fillText(yield_, x, height * 0.86);

            // Electrons label
            this.ctx.font = '8px Arial';
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.fillText('2e⁻ + H⁺', x + width * 0.14, height * 0.50);
        });

        this.ctx.font = 'italic 8px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Electrons passed to ETC → drive ATP synthesis', width / 2, height * 0.94);
    }

    drawProtonGradientInset(width, height) {
        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Proton (H⁺) Gradient — Chemiosmosis', width / 2, 15);

        // Inner mitochondrial membrane band
        const memY = height * 0.48, memH = height * 0.10;
        this.ctx.fillStyle = '#60C090';
        this.ctx.fillRect(width * 0.05, memY, width * 0.90, memH);
        this.ctx.strokeStyle = '#40A070';
        this.ctx.lineWidth = 1.5;
        this.ctx.strokeRect(width * 0.05, memY, width * 0.90, memH);
        this.ctx.font = 'bold 9px Arial';
        this.ctx.fillStyle = '#fff';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Inner Mitochondrial Membrane', width / 2, memY + memH * 0.62);

        // Intermembrane space (above — high H+)
        this.ctx.fillStyle = 'rgba(231,76,60,0.12)';
        this.ctx.fillRect(width * 0.05, height * 0.22, width * 0.90, memY - height * 0.22);
        this.ctx.font = 'bold 10px Arial';
        this.ctx.fillStyle = '#922B21';
        this.ctx.fillText('Intermembrane Space', width / 2, height * 0.28);
        this.ctx.font = '9px Arial';
        this.ctx.fillText('High [H⁺]  (low pH ≈ 7.0)', width / 2, height * 0.36);

        // Matrix (below — low H+)
        this.ctx.fillStyle = 'rgba(52,152,219,0.10)';
        this.ctx.fillRect(width * 0.05, memY + memH, width * 0.90, height * 0.70 - (memY + memH));
        this.ctx.font = 'bold 10px Arial';
        this.ctx.fillStyle = '#1A5276';
        this.ctx.fillText('Matrix', width / 2, memY + memH + height * 0.08);
        this.ctx.font = '9px Arial';
        this.ctx.fillText('Low [H⁺]  (high pH ≈ 7.8)', width / 2, memY + memH + height * 0.16);

        // H+ pumping arrows (upward through complexes)
        [0.22, 0.45, 0.68].forEach(fx => {
            const ax = width * fx;
            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.moveTo(ax, memY + memH * 0.85);
            this.ctx.lineTo(ax, memY + memH * 0.15);
            this.ctx.stroke();
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.beginPath();
            this.ctx.moveTo(ax, memY);
            this.ctx.lineTo(ax - 5, memY + memH * 0.20);
            this.ctx.lineTo(ax + 5, memY + memH * 0.20);
            this.ctx.fill();
            this.ctx.font = 'bold 8px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('H⁺', ax, memY - 5);
        });

        // ATP synthase (rightmost — H+ flowing back DOWN)
        const synthX = width * 0.86;
        this.ctx.fillStyle = '#F0C040';
        this.ctx.beginPath();
        this.ctx.roundRect(synthX - 14, memY - 12, 28, memH + 24, 5);
        this.ctx.fill();
        this.ctx.strokeStyle = '#D0A020';
        this.ctx.lineWidth = 1.5;
        this.ctx.stroke();
        this.ctx.font = 'bold 8px Arial';
        this.ctx.fillStyle = '#333';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('ATP', synthX, memY + memH / 2 + 3);
        this.ctx.fillText('syn.', synthX, memY + memH / 2 + 12);
        // H+ flowing down through synthase
        this.ctx.strokeStyle = '#3498DB';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(synthX, memY - 4);
        this.ctx.lineTo(synthX, memY + memH + 4);
        this.ctx.stroke();
        this.ctx.font = 'bold 8px Arial';
        this.ctx.fillStyle = '#2980B9';
        this.ctx.fillText('H⁺', synthX + 14, memY - 4);
        this.ctx.fillText('→ATP', synthX, memY + memH + 16);

        this.ctx.font = 'italic 8px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Proton-motive force drives ATP synthase rotation', width / 2, height * 0.93);
    }

    drawFermentationPathwayInset(width, height) {
        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Fermentation Pathways', width / 2, 15);

        // Shared start: Glucose → Pyruvate
        this.ctx.fillStyle = '#AED6F1';
        this.ctx.beginPath();
        this.ctx.roundRect(width * 0.30, height * 0.08, width * 0.40, height * 0.10, 6);
        this.ctx.fill();
        this.ctx.font = 'bold 10px Arial';
        this.ctx.fillStyle = '#1A3550';
        this.ctx.fillText('Glucose', width * 0.50, height * 0.14);

        this.ctx.strokeStyle = '#555';
        this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.50, height * 0.18);
        this.ctx.lineTo(width * 0.50, height * 0.28);
        this.ctx.stroke();
        this.ctx.font = '8px Arial';
        this.ctx.fillStyle = '#666';
        this.ctx.fillText('Glycolysis\n(2 ATP)', width * 0.62, height * 0.24);

        this.ctx.fillStyle = '#A9DFBF';
        this.ctx.beginPath();
        this.ctx.roundRect(width * 0.30, height * 0.28, width * 0.40, height * 0.10, 6);
        this.ctx.fill();
        this.ctx.font = 'bold 10px Arial';
        this.ctx.fillStyle = '#1A5226';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('2 Pyruvate + 2 NADH', width * 0.50, height * 0.34);

        // Fork left (lactic acid) and right (ethanol)
        const forkY = height * 0.38;
        [[width * 0.24, 'Lactic Acid\nFermentation', '#E8A0A0', '#C05050',
          'Lactate\n(C₃H₅O₃⁻)', 'NAD⁺\nregenerated', 'Muscle cells\nyeast (some)'],
         [width * 0.76, 'Alcoholic\nFermentation', '#FAD5A5', '#C08050',
          'Ethanol + CO₂', 'NAD⁺\nregenerated', 'Yeast, plants\n(anaerobic)']
        ].forEach(([x, title, fill, stroke, product, note1, note2]) => {
            // Arrow from pyruvate
            this.ctx.strokeStyle = stroke;
            this.ctx.lineWidth = 1.5;
            this.ctx.beginPath();
            this.ctx.moveTo(width * 0.50, forkY);
            this.ctx.lineTo(x, height * 0.48);
            this.ctx.stroke();

            // Product box
            this.ctx.fillStyle = fill;
            this.ctx.beginPath();
            this.ctx.roundRect(x - width * 0.18, height * 0.50, width * 0.36, height * 0.12, 6);
            this.ctx.fill();
            this.ctx.strokeStyle = stroke;
            this.ctx.lineWidth = 1.5;
            this.ctx.stroke();
            this.ctx.font = 'bold 9px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            product.split('\n').forEach((line, li) => this.ctx.fillText(line, x, height * 0.57 + li * 10));

            // Notes
            this.ctx.font = '8px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.fillText(note1, x, height * 0.70);
            this.ctx.fillText(note2, x, height * 0.78);

            // Section title
            this.ctx.font = 'bold 9px Arial';
            this.ctx.fillStyle = stroke;
            this.ctx.fillText(title, x, height * 0.47);
        });

        this.ctx.font = 'italic 8px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('No net ATP beyond glycolysis — regenerates NAD⁺', width / 2, height * 0.93);
    }

    drawNetATPYieldInset(width, height) {
        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Net ATP Yield — Aerobic Respiration', width / 2, 15);

        const stages = [
            { label: 'Glycolysis',          atp:  2, nadh:  2, fadh: 0,  col: '#60B0E0' },
            { label: 'Pyruvate oxidation',   atp:  0, nadh:  2, fadh: 0,  col: '#A070C0' },
            { label: 'Krebs cycle (×2)',     atp:  2, nadh:  6, fadh: 2,  col: '#E08060' },
            { label: 'ETC (NADH×10)',        atp: 25, nadh:  0, fadh: 0,  col: '#60C090' },
            { label: 'ETC (FADH₂×2)',        atp:  3, nadh:  0, fadh: 0,  col: '#80D0A0' },
        ];

        const rowH = height * 0.12;
        const startY = height * 0.16;
        const cols = [width * 0.28, width * 0.56, width * 0.72, width * 0.86];

        // Header
        this.ctx.font = 'bold 9px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        ['Stage', 'ATP', 'NADH', 'FADH₂'].forEach((h, hi) => this.ctx.fillText(h, cols[hi], startY - 4));

        // Rows
        stages.forEach(({ label, atp, nadh, fadh, col }, i) => {
            const ry = startY + i * rowH;
            this.ctx.fillStyle = col + '30';
            this.ctx.fillRect(width * 0.03, ry, width * 0.94, rowH - 2);
            this.ctx.strokeStyle = col;
            this.ctx.lineWidth = 1;
            this.ctx.strokeRect(width * 0.03, ry, width * 0.94, rowH - 2);

            this.ctx.font = '9px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(label, cols[0], ry + rowH * 0.58);
            this.ctx.fillStyle = '#27AE60';
            this.ctx.fillText(atp > 0 ? `+${atp}` : '-', cols[1], ry + rowH * 0.58);
            this.ctx.fillStyle = '#3498DB';
            this.ctx.fillText(nadh > 0 ? `${nadh}` : '-', cols[2], ry + rowH * 0.58);
            this.ctx.fillStyle = '#E67E22';
            this.ctx.fillText(fadh > 0 ? `${fadh}` : '-', cols[3], ry + rowH * 0.58);
        });

        // Total
        const totalY = startY + stages.length * rowH + height * 0.02;
        this.ctx.fillStyle = '#F0F0F0';
        this.ctx.fillRect(width * 0.03, totalY, width * 0.94, rowH);
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(width * 0.03, totalY, width * 0.94, rowH);
        this.ctx.font = 'bold 10px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('TOTAL', cols[0], totalY + rowH * 0.62);
        this.ctx.fillStyle = '#27AE60';
        this.ctx.fillText('~32 ATP', cols[1], totalY + rowH * 0.62);
        this.ctx.fillStyle = '#3498DB';
        this.ctx.fillText('10', cols[2], totalY + rowH * 0.62);
        this.ctx.fillStyle = '#E67E22';
        this.ctx.fillText('2', cols[3], totalY + rowH * 0.62);

        this.ctx.font = 'italic 8px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Theoretical max; actual yield ≈ 30–32 ATP', width / 2, height * 0.96);
    }

    drawSubstrateLevelPhosphorylationInset(width, height) {
        const cx = width * 0.50;

        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Substrate-Level Phosphorylation', width / 2, 15);

        // Contrast with oxidative phosphorylation
        const sections = [
            { label: 'Substrate-Level', y: height * 0.22, col: '#A9DFBF', stroke: '#27AE60',
              steps: ['High-energy substrate', '↓ (enzyme)', 'ADP + Pᵢ → ATP', 'No membrane needed'],
              where: 'Glycolysis & Krebs cycle' },
            { label: 'Oxidative Phosphorylation', y: height * 0.60, col: '#AED6F1', stroke: '#2980B9',
              steps: ['NADH / FADH₂', '→ ETC → H⁺ gradient', 'ATP synthase', 'Requires membrane'],
              where: 'Inner mitochondrial membrane' },
        ];

        sections.forEach(({ label, y, col, stroke, steps, where }) => {
            this.ctx.fillStyle = col;
            this.ctx.beginPath();
            this.ctx.roundRect(width * 0.06, y, width * 0.88, height * 0.32, 8);
            this.ctx.fill();
            this.ctx.strokeStyle = stroke;
            this.ctx.lineWidth = 2;
            this.ctx.stroke();

            this.ctx.font = 'bold 10px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(label, cx, y + height * 0.06);

            steps.forEach((step, si) => {
                this.ctx.font = '9px Arial';
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.fillText(step, cx, y + height * 0.12 + si * height * 0.054);
            });

            this.ctx.font = 'italic 8px Arial';
            this.ctx.fillStyle = stroke;
            this.ctx.fillText(`Where: ${where}`, cx, y + height * 0.30);
        });

        this.ctx.font = 'italic 8px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Both mechanisms yield ATP but by different means', width / 2, height * 0.95);
    }

    // ── Placeholder (unchanged) ───────────────────────────────────────────
    drawPlaceholderInset(width, height, insetType) {
        this.ctx.fillStyle = '#ECF0F1';
        this.ctx.fillRect(width * 0.1, height * 0.2, width * 0.8, height * 0.6);
        this.ctx.strokeStyle = '#BDC3C7';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(width * 0.1, height * 0.2, width * 0.8, height * 0.6);
        this.ctx.font = 'bold 13px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(`Inset: ${insetType}`, width / 2, height / 2 - 8);
        this.ctx.font = '11px Arial';
        this.ctx.fillText('(Implementation pending)', width / 2, height / 2 + 10);
    }



drawStomataMechanismInset(width, height) {
    this.ctx.font = 'bold 12px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Stomata Opening Mechanism', width / 2, 18);

    // Two columns: open / closed
    const cols = [
        { label: 'Open (turgid)', x: width * 0.28, open: true,  color: '#66BB6A' },
        { label: 'Closed (flaccid)', x: width * 0.72, open: false, color: '#A5D6A7' }
    ];
    const cy = height * 0.52;

    cols.forEach(col => {
        // Guard cells
        this.ctx.fillStyle = col.color;
        this.ctx.strokeStyle = '#2E7D32';
        this.ctx.lineWidth = 2;

        if (col.open) {
            this.ctx.beginPath();
            this.ctx.ellipse(col.x - width * 0.07, cy, width * 0.06, height * 0.18, -0.3, 0, Math.PI * 2);
            this.ctx.fill(); this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.ellipse(col.x + width * 0.07, cy, width * 0.06, height * 0.18, 0.3, 0, Math.PI * 2);
            this.ctx.fill(); this.ctx.stroke();
            // Pore
            this.ctx.fillStyle = '#1A1A2E';
            this.ctx.beginPath();
            this.ctx.ellipse(col.x, cy, width * 0.04, height * 0.12, 0, 0, Math.PI * 2);
            this.ctx.fill();
        } else {
            this.ctx.beginPath();
            this.ctx.ellipse(col.x - width * 0.05, cy, width * 0.05, height * 0.18, 0, 0, Math.PI * 2);
            this.ctx.fill(); this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.ellipse(col.x + width * 0.05, cy, width * 0.05, height * 0.18, 0, 0, Math.PI * 2);
            this.ctx.fill(); this.ctx.stroke();
            // Closed line
            this.ctx.strokeStyle = '#1B5E20';
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            this.ctx.moveTo(col.x, cy - height * 0.18);
            this.ctx.lineTo(col.x, cy + height * 0.18);
            this.ctx.stroke();
        }

        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 9px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(col.label, col.x, cy + height * 0.26);
        this.ctx.font = '8px Arial';
        this.ctx.fillStyle = '#9C27B0';
        this.ctx.fillText(col.open ? 'K⁺ in → H₂O in' : 'K⁺ out → H₂O out', col.x, cy + height * 0.36);
    });
}

drawChloroplastInset(width, height) {
    this.ctx.font = 'bold 12px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Chloroplast Structure', width / 2, 18);

    const cx = width / 2, cy = height * 0.52;

    // Outer/inner membrane
    this.ctx.fillStyle = '#E8F5E9';
    this.ctx.strokeStyle = '#2E7D32';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.ellipse(cx, cy, width * 0.42, height * 0.36, 0, 0, Math.PI * 2);
    this.ctx.fill(); this.ctx.stroke();

    // Stroma
    this.ctx.fillStyle = '#C8E6C9';
    this.ctx.beginPath();
    this.ctx.ellipse(cx, cy, width * 0.36, height * 0.30, 0, 0, Math.PI * 2);
    this.ctx.fill();

    // Granum stack
    this.ctx.fillStyle = '#1B5E20';
    for (let i = 0; i < 4; i++) {
        this.ctx.fillRect(cx - width * 0.12, cy - height * 0.16 + i * height * 0.08, width * 0.24, height * 0.05);
    }

    // Labels
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#1B5E20';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Granum', cx + width * 0.14, cy - height * 0.05);
    this.ctx.fillText('(thylakoid stack)', cx + width * 0.14, cy + height * 0.03);
    this.ctx.fillStyle = '#388E3C';
    this.ctx.textAlign = 'right';
    this.ctx.fillText('Stroma', cx - width * 0.14, cy + height * 0.22);
    this.ctx.fillStyle = '#2E7D32';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Outer membrane', cx, cy - height * 0.38);
}

drawCohesionTensionInset(width, height) {
    this.ctx.font = 'bold 12px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Cohesion-Tension Theory', width / 2, 18);

    // Column representing xylem vessel
    const vx = width / 2;
    this.ctx.fillStyle = '#A0522D';
    this.ctx.strokeStyle = '#654321';
    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(vx - width * 0.08, height * 0.12, width * 0.16, height * 0.75);

    // Water column (blue)
    this.ctx.fillStyle = '#2196F3';
    this.ctx.fillRect(vx - width * 0.06, height * 0.14, width * 0.12, height * 0.71);

    // Upward arrows (tension)
    this.ctx.fillStyle = '#FFFFFF';
    for (let i = 0; i < 4; i++) {
        const ay = height * (0.25 + i * 0.16);
        this.ctx.beginPath();
        this.ctx.moveTo(vx, ay);
        this.ctx.lineTo(vx - 5, ay + 12);
        this.ctx.lineTo(vx + 5, ay + 12);
        this.ctx.fill();
    }

    // Labels
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#2196F3';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Transpiration', vx + width * 0.12, height * 0.18);
    this.ctx.fillText('pull (tension)', vx + width * 0.12, height * 0.26);
    this.ctx.fillStyle = '#1565C0';
    this.ctx.fillText('H₂O cohesion', vx + width * 0.12, height * 0.50);
    this.ctx.fillStyle = '#0D47A1';
    this.ctx.fillText('Root pressure', vx + width * 0.12, height * 0.80);
}

drawTurgorPressureInset(width, height) {
    this.ctx.font = 'bold 12px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Turgor Pressure', width / 2, 18);

    const cols = [
        { label: 'Low turgor', x: width * 0.28, r: 0.14, waterCount: 3, color: '#A5D6A7' },
        { label: 'High turgor', x: width * 0.72, r: 0.20, waterCount: 9, color: '#43A047' }
    ];
    const cy = height * 0.52;

    cols.forEach(col => {
        this.ctx.fillStyle = col.color;
        this.ctx.strokeStyle = '#2E7D32';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(col.x, cy, col.r * width, 0, Math.PI * 2);
        this.ctx.fill(); this.ctx.stroke();

        // Water molecules
        this.ctx.fillStyle = '#2196F3';
        for (let i = 0; i < col.waterCount; i++) {
            const angle = (i / col.waterCount) * Math.PI * 2;
            const r = col.r * width * 0.55;
            this.ctx.beginPath();
            this.ctx.arc(col.x + Math.cos(angle) * r, cy + Math.sin(angle) * r, 4, 0, Math.PI * 2);
            this.ctx.fill();
        }

        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 9px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(col.label, col.x, cy + col.r * width + 16);
    });

    // Osmosis arrow
    this.ctx.strokeStyle = '#9C27B0';
    this.ctx.lineWidth = 2;
    this.ctx.setLineDash([4, 3]);
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.42, cy);
    this.ctx.lineTo(width * 0.52, cy);
    this.ctx.stroke();
    this.ctx.setLineDash([]);
    this.ctx.fillStyle = '#9C27B0';
    this.ctx.font = '8px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Osmosis', width / 2, cy + 14);
}

drawAuxinActionInset(width, height) {
    this.ctx.font = 'bold 12px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Auxin (IAA) Action', width / 2, 18);

    // Cell wall acidification model
    const steps = [
        { y: 0.25, label: '1. Auxin binds receptor', color: '#9C27B0' },
        { y: 0.42, label: '2. H⁺ pumped into wall', color: '#F44336' },
        { y: 0.58, label: '3. Wall loosened (acidic)', color: '#FF9800' },
        { y: 0.75, label: '4. Cell elongates', color: '#4CAF50' }
    ];

    steps.forEach((s, i) => {
        this.ctx.fillStyle = s.color;
        this.ctx.beginPath();
        this.ctx.arc(width * 0.12, s.y * height, 8, 0, Math.PI * 2);
        this.ctx.fill();

        this.ctx.font = '9px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'left';
        this.ctx.fillText(s.label, width * 0.20, s.y * height + 4);

        if (i < steps.length - 1) {
            this.ctx.strokeStyle = '#BDC3C7';
            this.ctx.lineWidth = 1.5;
            this.ctx.beginPath();
            this.ctx.moveTo(width * 0.12, s.y * height + 10);
            this.ctx.lineTo(width * 0.12, steps[i + 1].y * height - 10);
            this.ctx.stroke();
        }
    });

    this.ctx.font = 'italic 8px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Acid growth hypothesis', width / 2, height * 0.90);
}

drawGoldenAngleInset(width, height) {
    this.ctx.font = 'bold 12px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Golden Angle (137.5°)', width / 2, 18);

    const cx = width / 2, cy = height * 0.52;

    // Spiral of leaves using golden angle
    for (let i = 0; i < 20; i++) {
        const angle = i * 2.399; // radians (~137.5°)
        const r = Math.sqrt(i) * width * 0.06;
        const lx = cx + Math.cos(angle) * r;
        const ly = cy + Math.sin(angle) * r;

        this.ctx.fillStyle = `hsl(${80 + i * 14}, 60%, ${35 + i * 1.5}%)`;
        this.ctx.beginPath();
        this.ctx.arc(lx, ly, 4 + i * 0.3, 0, Math.PI * 2);
        this.ctx.fill();
    }

    this.ctx.font = '9px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Each leaf at 137.5° from last', cx, height * 0.88);
    this.ctx.fillText('→ maximises light capture', cx, height * 0.94);
}

drawRootHairInset(width, height) {
    this.ctx.font = 'bold 12px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Root Hair Cell', width / 2, 18);

    const cx = width * 0.45, cy = height * 0.52;

    // Cell body
    this.ctx.fillStyle = '#FFF9C4';
    this.ctx.strokeStyle = '#F9A825';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.ellipse(cx, cy, width * 0.20, height * 0.30, 0, 0, Math.PI * 2);
    this.ctx.fill(); this.ctx.stroke();

    // Nucleus
    this.ctx.fillStyle = '#F57C00';
    this.ctx.beginPath();
    this.ctx.arc(cx, cy, width * 0.06, 0, Math.PI * 2);
    this.ctx.fill();

    // Root hair extension
    this.ctx.fillStyle = '#FFFDE7';
    this.ctx.strokeStyle = '#F9A825';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(cx + width * 0.20, cy - height * 0.05);
    this.ctx.quadraticCurveTo(cx + width * 0.45, cy - height * 0.02, cx + width * 0.50, cy + height * 0.10);
    this.ctx.quadraticCurveTo(cx + width * 0.48, cy + height * 0.20, cx + width * 0.22, cy + height * 0.08);
    this.ctx.closePath();
    this.ctx.fill(); this.ctx.stroke();

    // Water arrows entering hair
    this.ctx.fillStyle = '#2196F3';
    for (let i = 0; i < 4; i++) {
        this.ctx.beginPath();
        this.ctx.arc(cx + width * (0.36 + i * 0.04), cy + height * (0.04 + i * 0.04), 3, 0, Math.PI * 2);
        this.ctx.fill();
    }

    this.ctx.font = '9px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Root hair', cx + width * 0.22, cy - height * 0.20);
    this.ctx.fillText('(extension)', cx + width * 0.22, cy - height * 0.12);
    this.ctx.fillStyle = '#2196F3';
    this.ctx.fillText('H₂O →', cx + width * 0.53, cy + height * 0.10);
}

drawPollenGrainInset(width, height) {
    this.ctx.font = 'bold 12px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Pollen Grain Structure', width / 2, 18);

    const cx = width / 2, cy = height * 0.50;
    const pr = width * 0.22;

    // Outer wall (exine)
    this.ctx.fillStyle = '#FF9800';
    this.ctx.strokeStyle = '#E65100';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(cx, cy, pr, 0, Math.PI * 2);
    this.ctx.fill(); this.ctx.stroke();

    // Spiky surface
    for (let i = 0; i < 14; i++) {
        const angle = (i / 14) * Math.PI * 2;
        this.ctx.fillStyle = '#BF360C';
        this.ctx.beginPath();
        this.ctx.moveTo(cx + Math.cos(angle) * pr, cy + Math.sin(angle) * pr);
        this.ctx.lineTo(cx + Math.cos(angle - 0.15) * (pr - 5), cy + Math.sin(angle - 0.15) * (pr - 5));
        this.ctx.lineTo(cx + Math.cos(angle + 0.15) * (pr - 5), cy + Math.sin(angle + 0.15) * (pr - 5));
        this.ctx.fill();
    }

    // Inner wall (intine)
    this.ctx.fillStyle = '#FFF8E1';
    this.ctx.beginPath();
    this.ctx.arc(cx, cy, pr * 0.80, 0, Math.PI * 2);
    this.ctx.fill();

    // Nuclei
    this.ctx.fillStyle = '#9C27B0';
    this.ctx.beginPath();
    this.ctx.arc(cx - pr * 0.22, cy, pr * 0.18, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.fillStyle = '#673AB7';
    this.ctx.beginPath();
    this.ctx.arc(cx + pr * 0.22, cy, pr * 0.12, 0, Math.PI * 2);
    this.ctx.fill();

    // Labels
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#E65100';
    this.ctx.textAlign = 'right';
    this.ctx.fillText('Exine (outer)', cx - pr - 4, cy - pr * 0.30);
    this.ctx.fillStyle = '#9C27B0';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Veg. nucleus', cx + pr + 4, cy - height * 0.05);
    this.ctx.fillText('Gen. nucleus', cx + pr + 4, cy + height * 0.08);
}

drawSeedAnatomyInset(width, height) {
    this.ctx.font = 'bold 12px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Seed Internal Anatomy', width / 2, 18);

    const cx = width / 2, cy = height * 0.52;

    // Seed coat
    this.ctx.fillStyle = '#8D6E63';
    this.ctx.strokeStyle = '#5D4037';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.ellipse(cx, cy, width * 0.36, height * 0.36, 0, 0, Math.PI * 2);
    this.ctx.fill(); this.ctx.stroke();

    // Cotyledons
    this.ctx.fillStyle = '#AED581';
    [[-0.14, 0], [0.14, 0]].forEach(([dx, dy]) => {
        this.ctx.beginPath();
        this.ctx.ellipse(cx + dx * width, cy + dy * height, width * 0.14, height * 0.24, 0, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = '#558B2F';
        this.ctx.lineWidth = 1;
        this.ctx.stroke();
    });

    // Embryonic axis
    this.ctx.fillStyle = '#FFEB3B';
    this.ctx.fillRect(cx - width * 0.03, cy - height * 0.20, width * 0.06, height * 0.40);

    // Plumule / radicle tips
    this.ctx.fillStyle = '#66BB6A';
    this.ctx.beginPath();
    this.ctx.arc(cx, cy - height * 0.22, width * 0.04, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.fillStyle = '#FDD835';
    this.ctx.beginPath();
    this.ctx.arc(cx, cy + height * 0.22, width * 0.04, 0, Math.PI * 2);
    this.ctx.fill();

    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'right';
    this.ctx.fillText('Plumule →', cx - width * 0.04, cy - height * 0.23);
    this.ctx.fillText('Cotyledons →', cx - width * 0.04, cy + height * 0.02);
    this.ctx.textAlign = 'left';
    this.ctx.fillText('← Radicle', cx + width * 0.06, cy + height * 0.23);
    this.ctx.fillStyle = '#5D4037';
    this.ctx.fillText('← Seed coat', cx + width * 0.38, cy - height * 0.28);
}

drawNodeDetailInset(width, height) {
    this.ctx.font = 'bold 12px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Node Anatomy', width / 2, 18);

    const cx = width / 2, cy = height * 0.52;

    // Internode (stem segment)
    this.ctx.fillStyle = '#7AB840';
    this.ctx.strokeStyle = '#3A6810';
    this.ctx.lineWidth = 2;
    this.ctx.fillRect(cx - width * 0.06, height * 0.15, width * 0.12, height * 0.70);
    this.ctx.strokeRect(cx - width * 0.06, height * 0.15, width * 0.12, height * 0.70);

    // Node band
    this.ctx.fillStyle = '#4A7020';
    this.ctx.fillRect(cx - width * 0.07, cy - height * 0.04, width * 0.14, height * 0.08);

    // Axillary bud
    this.ctx.fillStyle = '#C8A050';
    this.ctx.strokeStyle = '#8B6020';
    this.ctx.lineWidth = 1.5;
    this.ctx.beginPath();
    this.ctx.ellipse(cx + width * 0.10, cy, width * 0.06, height * 0.06, 0, 0, Math.PI * 2);
    this.ctx.fill(); this.ctx.stroke();

    // Leaf base (petiole attachment)
    this.ctx.fillStyle = '#66BB6A';
    this.ctx.beginPath();
    this.ctx.moveTo(cx + width * 0.06, cy - height * 0.02);
    this.ctx.bezierCurveTo(cx + width * 0.18, cy - height * 0.06,
        cx + width * 0.32, cy - height * 0.04, cx + width * 0.38, cy);
    this.ctx.bezierCurveTo(cx + width * 0.32, cy + height * 0.04,
        cx + width * 0.18, cy + height * 0.06, cx + width * 0.06, cy + height * 0.02);
    this.ctx.fill();

    // Labels
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#4A7020';
    this.ctx.textAlign = 'right';
    this.ctx.fillText('Node', cx - width * 0.10, cy + height * 0.02);
    this.ctx.fillStyle = '#C8A050';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Axillary bud', cx + width * 0.18, cy - height * 0.08);
    this.ctx.fillStyle = '#66BB6A';
    this.ctx.fillText('Leaf base', cx + width * 0.36, cy + height * 0.12);
    this.ctx.fillStyle = '#7AB840';
    this.ctx.textAlign = 'right';
    this.ctx.fillText('Internode', cx - width * 0.10, height * 0.30);
}

// ═══════════════════════════════════════════════════════════════════════════
// CARDIOVASCULAR INSETS
// ═══════════════════════════════════════════════════════════════════════════

drawBloodPressureFlowInset(width, height) {
    this._insetTitle('Blood Pressure & Flow', width);

    // Axes
    const ox = width * 0.12, oy = height * 0.78;
    const aw = width * 0.82, ah = height * 0.54;
    this.ctx.strokeStyle = '#34495E';
    this.ctx.lineWidth = 1.5;
    this.ctx.beginPath();
    this.ctx.moveTo(ox, oy - ah); this.ctx.lineTo(ox, oy); this.ctx.lineTo(ox + aw, oy);
    this.ctx.stroke();

    // Pressure curve (aortic)
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 2.5;
    this.ctx.beginPath();
    for (let i = 0; i <= 60; i++) {
        const t  = i / 60;
        const px = ox + t * aw;
        // Simulate one cardiac cycle pressure wave
        let pressure;
        if (t < 0.35) {
            pressure = 0.30 + Math.sin(t / 0.35 * Math.PI) * 0.70; // systolic rise & fall
        } else {
            pressure = 0.30 - (t - 0.35) * 0.20; // diastolic runoff
        }
        const py = oy - pressure * ah;
        i === 0 ? this.ctx.moveTo(px, py) : this.ctx.lineTo(px, py);
    }
    this.ctx.stroke();

    // Reference lines
    [[0.95, '#E74C3C', 'Systolic ~120 mmHg'],
     [0.55, '#3498DB', 'Diastolic ~80 mmHg']].forEach(([frac, clr, lbl]) => {
        this.ctx.strokeStyle = clr;
        this.ctx.lineWidth = 1;
        this.ctx.setLineDash([4, 3]);
        this.ctx.beginPath();
        this.ctx.moveTo(ox, oy - frac * ah); this.ctx.lineTo(ox + aw, oy - frac * ah);
        this.ctx.stroke();
        this.ctx.setLineDash([]);
        this.ctx.font = '8px Arial';
        this.ctx.fillStyle = clr;
        this.ctx.textAlign = 'left';
        this.ctx.fillText(lbl, ox + 2, oy - frac * ah - 2);
    });

    // Axis labels
    this.ctx.font = '9px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Time', ox + aw / 2, oy + 14);
    this.ctx.save();
    this.ctx.translate(ox - 12, oy - ah / 2);
    this.ctx.rotate(-Math.PI / 2);
    this.ctx.fillText('Pressure (mmHg)', 0, 0);
    this.ctx.restore();
}

drawVascularResistanceInset(width, height) {
    this._insetTitle('Vascular Resistance', width);

    const vessels = [
        { label: 'Aorta',        r: 0.90, color: '#C0392B', resistance: 0.05 },
        { label: 'Arteries',     r: 0.65, color: '#E74C3C', resistance: 0.20 },
        { label: 'Arterioles',   r: 0.40, color: '#E67E22', resistance: 0.65 },
        { label: 'Capillaries',  r: 0.10, color: '#F39C12', resistance: 0.85 },
        { label: 'Venules',      r: 0.12, color: '#9B59B6', resistance: 0.40 },
        { label: 'Veins',        r: 0.45, color: '#8E44AD', resistance: 0.15 },
        { label: 'Vena Cava',    r: 0.85, color: '#6C3483', resistance: 0.03 }
    ];

    const barH  = height * 0.048;
    const barY0 = height * 0.18;
    const maxW  = width * 0.50;
    const lblX  = width * 0.54;

    vessels.forEach((v, i) => {
        const by = barY0 + i * (barH + height * 0.022);
        // Vessel lumen bar (width = relative radius)
        this.ctx.fillStyle = v.color;
        const lumenW = v.r * maxW * 0.45;
        this.ctx.fillRect(width * 0.04, by + barH * 0.15, lumenW, barH * 0.70);
        // Resistance bar (inverted right side)
        this.ctx.fillStyle = 'rgba(52,73,94,0.25)';
        this.ctx.fillRect(lblX, by + barH * 0.15, v.resistance * maxW * 0.40, barH * 0.70);
        // Label
        this.ctx.font = '8px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'left';
        this.ctx.fillText(v.label, lblX + v.resistance * maxW * 0.40 + 3, by + barH * 0.72);
    });

    // Column headers
    this.ctx.font = 'bold 9px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Lumen size', width * 0.04 + maxW * 0.20, barY0 - 6);
    this.ctx.fillText('Resistance', lblX + maxW * 0.20, barY0 - 6);
}

// ═══════════════════════════════════════════════════════════════════════════
// DIGESTIVE INSETS
// ═══════════════════════════════════════════════════════════════════════════

drawVilliStructureInset(width, height) {
    this._insetTitle('Intestinal Villi', width);

    const baseY = height * 0.88;
    const villW = width * 0.10;
    const villH = height * 0.46;

    // Draw 4 villi
    for (let v = 0; v < 4; v++) {
        const vx = width * (0.12 + v * 0.21);

        // Villus body
        const grad = this.ctx.createLinearGradient(vx, baseY - villH, vx + villW, baseY);
        grad.addColorStop(0, '#FFD7A8');
        grad.addColorStop(1, '#F4A460');
        this.ctx.fillStyle = grad;
        this.ctx.beginPath();
        this.ctx.moveTo(vx, baseY);
        this.ctx.bezierCurveTo(vx - villW * 0.2, baseY - villH * 0.6, vx, baseY - villH, vx + villW / 2, baseY - villH);
        this.ctx.bezierCurveTo(vx + villW, baseY - villH, vx + villW * 1.2, baseY - villH * 0.6, vx + villW, baseY);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.strokeStyle = '#CD853F';
        this.ctx.lineWidth = 1.5;
        this.ctx.stroke();

        // Central lacteal (lymph vessel)
        this.ctx.strokeStyle = '#27AE60';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(vx + villW / 2, baseY - villH * 0.85);
        this.ctx.lineTo(vx + villW / 2, baseY - villH * 0.10);
        this.ctx.stroke();

        // Capillaries (red/blue loops)
        for (let c = 0; c < 3; c++) {
            const cy = baseY - villH * (0.25 + c * 0.20);
            this.ctx.strokeStyle = c % 2 === 0 ? '#E74C3C' : '#3498DB';
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.ellipse(vx + villW / 2, cy, villW * 0.28, height * 0.025, 0, 0, Math.PI * 2);
            this.ctx.stroke();
        }

        // Microvilli (brush border) at tip
        this.ctx.strokeStyle = '#CD853F';
        this.ctx.lineWidth = 1;
        for (let m = 0; m < 5; m++) {
            const mx = vx + villW * (0.10 + m * 0.20);
            this.ctx.beginPath();
            this.ctx.moveTo(mx, baseY - villH);
            this.ctx.lineTo(mx, baseY - villH - height * 0.028);
            this.ctx.stroke();
        }
    }

    // Crypt of Lieberkühn between villi
    for (let c = 0; c < 3; c++) {
        const cx = width * (0.22 + c * 0.21);
        this.ctx.fillStyle = '#FFD7A8';
        this.ctx.beginPath();
        this.ctx.ellipse(cx, baseY, villW * 0.35, height * 0.030, 0, 0, Math.PI);
        this.ctx.fill();
    }

    // Intestinal wall base
    this.ctx.fillStyle = '#F4A460';
    this.ctx.fillRect(width * 0.04, baseY, width * 0.92, height * 0.060);

    // Labels
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Microvilli (brush border)', width * 0.04, height * 0.36);
    this.ctx.fillStyle = '#27AE60';
    this.ctx.fillText('Central lacteal', width * 0.04, height * 0.50);
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.fillText('Blood capillaries', width * 0.04, height * 0.62);
    this.ctx.fillStyle = '#CD853F';
    this.ctx.fillText('Crypt of Lieberkühn', width * 0.04, height * 0.94);
}

drawEnzymeActionInset(width, height) {
    this._insetTitle('Enzyme Action', width);

    const cx = width / 2, cy = height * 0.50;

    // Lock-and-key model
    // Enzyme (large)
    this.ctx.fillStyle = '#AED6F1';
    this.ctx.strokeStyle = '#2980B9';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.ellipse(cx, cy, width * 0.30, height * 0.26, 0, 0, Math.PI * 2);
    this.ctx.fill(); this.ctx.stroke();

    // Active site (notch)
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.beginPath();
    this.ctx.arc(cx, cy - height * 0.20, width * 0.10, 0, Math.PI);
    this.ctx.fill();

    // Substrate approaching
    this.ctx.fillStyle = '#F9CA24';
    this.ctx.strokeStyle = '#F0932B';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.ellipse(cx, height * 0.18, width * 0.09, height * 0.07, 0, 0, Math.PI * 2);
    this.ctx.fill(); this.ctx.stroke();
    this.drawArrow(cx, height * 0.27, cx, cy - height * 0.21, '#F0932B', '', 7);

    // ES complex (products splitting right)
    this.ctx.fillStyle = '#6AB04C';
    this.ctx.strokeStyle = '#27AE60';
    this.ctx.lineWidth = 1.5;
    [[cx - width * 0.28, cy + height * 0.16],
     [cx + width * 0.28, cy + height * 0.16]].forEach(([px, py]) => {
        this.ctx.beginPath();
        this.ctx.ellipse(px, py, width * 0.06, height * 0.05, 0, 0, Math.PI * 2);
        this.ctx.fill(); this.ctx.stroke();
        this.drawArrow(cx, cy + height * 0.08, px, py - height * 0.02, '#27AE60', '', 6);
    });

    // Labels
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Enzyme', cx + width * 0.22, cy + height * 0.06);
    this.ctx.fillText('Substrate', cx + width * 0.14, height * 0.14);
    this.ctx.fillText('Active site', cx + width * 0.16, cy - height * 0.18);
    this.ctx.fillStyle = '#27AE60';
    this.ctx.fillText('Products', cx, cy + height * 0.28);

    // Equation
    this.ctx.font = 'bold 9px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.fillText('E + S  ⇌  ES  →  E + P', cx, height * 0.94);
}

drawPeristalsisInset(width, height) {
    this._insetTitle('Peristalsis', width);

    const tubeY  = height * 0.40;
    const tubeH  = height * 0.20;
    const tubeX  = width  * 0.06;
    const tubeW  = width  * 0.88;

    // Intestinal tube
    this.ctx.fillStyle = '#FFD7A8';
    this.ctx.strokeStyle = '#CD853F';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.roundRect(tubeX, tubeY, tubeW, tubeH, tubeH / 2);
    this.ctx.fill(); this.ctx.stroke();

    // 3 wave snapshots
    const waves = [0.20, 0.45, 0.70];
    waves.forEach((wt, wi) => {
        const wx = tubeX + tubeW * wt;
        // Contracted ring (circular muscle)
        this.ctx.fillStyle = '#8B4513';
        this.ctx.beginPath();
        this.ctx.ellipse(wx, tubeY + tubeH / 2, width * 0.030, tubeH * 0.56, 0, 0, Math.PI * 2);
        this.ctx.fill();
        // Relaxed (longitudinal)
        this.ctx.fillStyle = 'rgba(205,133,63,0.35)';
        this.ctx.beginPath();
        this.ctx.roundRect(wx - width * 0.06, tubeY + tubeH * 0.05, width * 0.12, tubeH * 0.90, 4);
        this.ctx.fill();
    });

    // Bolus (food mass)
    this.ctx.fillStyle = '#E8D5A3';
    this.ctx.strokeStyle = '#B8962E';
    this.ctx.lineWidth = 1.5;
    this.ctx.beginPath();
    this.ctx.ellipse(tubeX + tubeW * 0.57, tubeY + tubeH / 2, width * 0.075, tubeH * 0.30, 0, 0, Math.PI * 2);
    this.ctx.fill(); this.ctx.stroke();

    // Direction arrow
    this.drawArrow(tubeX + tubeW * 0.08, tubeY - height * 0.06,
                   tubeX + tubeW * 0.88, tubeY - height * 0.06, '#E74C3C', 'Direction of movement');

    // Labels
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Contracted', tubeX + tubeW * 0.20, tubeY + tubeH + 14);
    this.ctx.fillText('Relaxed',    tubeX + tubeW * 0.45, tubeY + tubeH + 14);
    this.ctx.fillText('Bolus',      tubeX + tubeW * 0.68, tubeY + tubeH + 14);

    this.ctx.font = 'italic 8px Arial';
    this.ctx.fillStyle = '#95A5A6';
    this.ctx.fillText('Circular muscle contracts behind bolus,', width / 2, height * 0.80);
    this.ctx.fillText('longitudinal muscle relaxes ahead', width / 2, height * 0.88);
}

drawBileProductionInset(width, height) {
    this._insetTitle('Bile Production & Flow', width);

    const nodes = [
        { label: 'Liver',        x: 0.50, y: 0.22, w: 0.30, h: 0.10, color: '#8B4513' },
        { label: 'Gallbladder',  x: 0.72, y: 0.44, w: 0.16, h: 0.08, color: '#228B22' },
        { label: 'Bile Duct',    x: 0.50, y: 0.60, w: 0.08, h: 0.14, color: '#8B6914' },
        { label: 'Duodenum',     x: 0.50, y: 0.82, w: 0.36, h: 0.08, color: '#F4A460' }
    ];

    nodes.forEach(n => {
        this.ctx.fillStyle = n.color;
        this.ctx.strokeStyle = 'rgba(0,0,0,0.25)';
        this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.roundRect(width * (n.x - n.w / 2), height * (n.y - n.h / 2),
                           width * n.w, height * n.h, 5);
        this.ctx.fill(); this.ctx.stroke();
        this.ctx.font = 'bold 9px Arial';
        this.ctx.fillStyle = '#fff';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(n.label, width * n.x, height * n.y + 4);
    });

    // Flow arrows
    const flows = [
        [0.50, 0.27, 0.72, 0.40, '#228B22', 'Bile stored'],
        [0.72, 0.48, 0.54, 0.57, '#8B6914', 'Released on\nfat intake'],
        [0.50, 0.27, 0.50, 0.53, '#8B6914', ''],
        [0.50, 0.67, 0.50, 0.78, '#8B6914', '']
    ];
    flows.forEach(([x1, y1, x2, y2, clr, lbl]) => {
        this.drawArrow(width * x1, height * y1, width * x2, height * y2, clr, '', 6);
        if (lbl) {
            this.ctx.font = '8px Arial';
            this.ctx.fillStyle = clr;
            this.ctx.textAlign = 'left';
            lbl.split('\n').forEach((l, i) =>
                this.ctx.fillText(l, width * x2 + 4, height * ((y1 + y2) / 2) + i * 10));
        }
    });

    this.ctx.font = 'italic 8px Arial';
    this.ctx.fillStyle = '#95A5A6';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Bile emulsifies dietary fats', width / 2, height * 0.96);
}

// ═══════════════════════════════════════════════════════════════════════════
// NERVOUS SYSTEM INSETS
// ═══════════════════════════════════════════════════════════════════════════

drawActionPotentialInset(width, height) {
    this._insetTitle('Action Potential', width);

    const ox = width * 0.12, oy = height * 0.76;
    const aw = width * 0.82, ah = height * 0.54;

    // Axes
    this.ctx.strokeStyle = '#34495E';
    this.ctx.lineWidth = 1.5;
    this.ctx.beginPath();
    this.ctx.moveTo(ox, oy - ah); this.ctx.lineTo(ox, oy); this.ctx.lineTo(ox + aw, oy);
    this.ctx.stroke();

    // AP waveform
    const apPoints = [
        [0.00, 0.15], [0.08, 0.15], [0.18, 0.92], [0.30, 1.00],
        [0.40, 0.88], [0.52, 0.05], [0.62, -0.08], [0.72, -0.02],
        [0.82, 0.15], [1.00, 0.15]
    ];
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 2.5;
    this.ctx.beginPath();
    apPoints.forEach(([t, v], i) => {
        const px = ox + t * aw, py = oy - v * ah;
        i === 0 ? this.ctx.moveTo(px, py) : this.ctx.lineTo(px, py);
    });
    this.ctx.stroke();

    // Resting potential line
    this.ctx.strokeStyle = '#3498DB';
    this.ctx.lineWidth = 1;
    this.ctx.setLineDash([4, 3]);
    this.ctx.beginPath();
    this.ctx.moveTo(ox, oy - 0.15 * ah); this.ctx.lineTo(ox + aw, oy - 0.15 * ah);
    this.ctx.stroke();
    this.ctx.setLineDash([]);

    // Phase labels
    const phases = [
        { t: 0.13, label: 'Resting\n−70 mV',  color: '#3498DB'  },
        { t: 0.30, label: 'Depol.\n+40 mV',   color: '#E74C3C'  },
        { t: 0.52, label: 'Repol.',            color: '#F39C12'  },
        { t: 0.65, label: 'Hyper-\npol.',      color: '#9B59B6'  },
        { t: 0.85, label: 'Refractory',        color: '#7F8C8D'  }
    ];
    phases.forEach(p => {
        this.ctx.font = '7px Arial';
        this.ctx.fillStyle = p.color;
        this.ctx.textAlign = 'center';
        p.label.split('\n').forEach((l, i) =>
            this.ctx.fillText(l, ox + p.t * aw, height * 0.88 + i * 9));
    });

    // Axis labels
    this.ctx.font = '9px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Time (ms)', ox + aw / 2, oy + 14);
    this.ctx.save();
    this.ctx.translate(ox - 12, oy - ah / 2);
    this.ctx.rotate(-Math.PI / 2);
    this.ctx.fillText('Membrane potential (mV)', 0, 0);
    this.ctx.restore();
}

drawNeurotransmitterReleaseInset(width, height) {
    this._insetTitle('Neurotransmitter Release', width);

    const preX  = width * 0.50, preY  = height * 0.22, preR = width * 0.20;
    const postX = width * 0.50, postY = height * 0.78, postW = width * 0.82, postH = height * 0.10;
    const gapY1 = preY + preR, gapY2 = postY - postH / 2;

    // Pre-synaptic terminal
    const grad = this.ctx.createRadialGradient(preX, preY, 0, preX, preY, preR);
    grad.addColorStop(0, '#F0E68C'); grad.addColorStop(1, '#BDB76B');
    this.ctx.fillStyle = grad;
    this.ctx.beginPath();
    this.ctx.arc(preX, preY, preR, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.strokeStyle = '#8B8740'; this.ctx.lineWidth = 2; this.ctx.stroke();

    // Synaptic vesicles
    const vesiclePos = [[-0.10, 0.06], [0.06, -0.02], [-0.06, -0.10],
                        [0.12, 0.10], [0, 0.12], [-0.14, -0.04]];
    vesiclePos.forEach(([dx, dy]) => {
        this.ctx.fillStyle = '#FF69B4';
        this.ctx.strokeStyle = '#C0185E';
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.arc(preX + dx * width, preY + dy * height, width * 0.028, 0, Math.PI * 2);
        this.ctx.fill(); this.ctx.stroke();
    });

    // Active zone (docked vesicle)
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.beginPath();
    this.ctx.arc(preX, gapY1 - height * 0.02, width * 0.030, 0, Math.PI * 2);
    this.ctx.fill();

    // Synaptic cleft
    this.ctx.fillStyle = 'rgba(173,216,230,0.30)';
    this.ctx.fillRect(width * 0.14, gapY1, width * 0.72, gapY2 - gapY1);
    this.ctx.strokeStyle = '#BDC3C7'; this.ctx.lineWidth = 1;
    this.ctx.strokeRect(width * 0.14, gapY1, width * 0.72, gapY2 - gapY1);

    // NT molecules diffusing
    this.ctx.fillStyle = '#E74C3C';
    [[0.38, 0.52], [0.50, 0.54], [0.62, 0.52],
     [0.44, 0.58], [0.56, 0.58], [0.50, 0.62]].forEach(([tx, ty]) => {
        this.ctx.beginPath();
        this.ctx.arc(width * tx, height * ty, 4, 0, Math.PI * 2);
        this.ctx.fill();
    });

    // Post-synaptic membrane
    this.ctx.fillStyle = '#AED6F1';
    this.ctx.strokeStyle = '#2980B9'; this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.roundRect(width * 0.09, postY - postH / 2, postW, postH, 4);
    this.ctx.fill(); this.ctx.stroke();

    // Receptors
    for (let r = 0; r < 5; r++) {
        const rx = width * (0.20 + r * 0.15);
        this.ctx.fillStyle = '#2ECC71';
        this.ctx.beginPath();
        this.ctx.arc(rx, postY - postH / 2, 5, 0, Math.PI * 2);
        this.ctx.fill();
    }

    // Labels
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Pre-synaptic terminal', preX + preR + 4, preY);
    this.ctx.fillText('Synaptic vesicles',    preX + preR + 4, preY + 12);
    this.ctx.fillText('Synaptic cleft',       width * 0.14 + 4, (gapY1 + gapY2) / 2 + 4);
    this.ctx.fillText('Receptors',            width * 0.14 + 4, postY + 4);
    this.ctx.fillText('Post-synaptic membrane', width * 0.14 + 4, postY + 14);
}

drawSaltatoryCondutionInset(width, height) {
    this._insetTitle('Saltatory Conduction', width);

    const axonY = height * 0.44, axonH = height * 0.12;
    const ax0   = width * 0.06, axW   = width * 0.88;
    const nSegments = 5, segW = axW / nSegments;

    // Axon core
    this.ctx.fillStyle = '#F0E68C';
    this.ctx.fillRect(ax0, axonY, axW, axonH);

    // Myelin segments
    for (let i = 0; i < nSegments; i++) {
        if (i % 2 === 0) {
            const mx = ax0 + i * segW;
            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.strokeStyle = '#D2D2D2';
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.roundRect(mx, axonY - axonH * 0.40, segW, axonH * 1.80, 4);
            this.ctx.fill(); this.ctx.stroke();
            // Schwann cell nucleus
            this.ctx.fillStyle = '#D3D3D3';
            this.ctx.beginPath();
            this.ctx.ellipse(mx + segW / 2, axonY - axonH * 0.55, segW * 0.18, axonH * 0.18, 0, 0, Math.PI * 2);
            this.ctx.fill();
        }
    }

    // Nodes of Ranvier
    for (let n = 1; n < nSegments; n += 2) {
        const nx = ax0 + n * segW;
        this.ctx.fillStyle = '#BDB76B';
        this.ctx.fillRect(nx, axonY - 2, segW, axonH + 4);
        // Na+ influx indicator
        this.ctx.fillStyle = '#E74C3C';
        this.ctx.font = 'bold 9px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Na⁺', nx + segW / 2, axonY - axonH * 0.20);
    }

    // Impulse jump arrows (saltatory)
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 2.5;
    for (let n = 1; n < nSegments - 1; n += 2) {
        const startX = ax0 + n * segW + segW / 2;
        const endX   = ax0 + (n + 2) * segW + segW / 2;
        this.ctx.beginPath();
        this.ctx.moveTo(startX, axonY - axonH * 0.80);
        this.ctx.bezierCurveTo(startX + (endX - startX) * 0.30, axonY - axonH * 1.60,
                               endX   - (endX - startX) * 0.30, axonY - axonH * 1.60, endX, axonY - axonH * 0.80);
        this.ctx.stroke();
        this.drawArrow(endX - 2, axonY - axonH * 0.82, endX, axonY - axonH * 0.80, '#E74C3C', '', 6);
    }

    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Myelin sheath', ax0 + segW / 2, axonY + axonH + 14);
    this.ctx.fillText('Node of Ranvier', ax0 + segW * 1.5, axonY + axonH + 14);
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.fillText('Impulse jumps node-to-node (faster conduction)', width / 2, height * 0.92);
}

drawSynapseDetailInset(width, height) {
    this._insetTitle('Synapse Detail', width);

    // Pre-synaptic axon terminal
    this.ctx.fillStyle = '#F0E68C';
    this.ctx.strokeStyle = '#BDB76B';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.roundRect(width * 0.15, height * 0.10, width * 0.70, height * 0.30, 8);
    this.ctx.fill(); this.ctx.stroke();

    // Mitochondrion inside terminal
    this.ctx.fillStyle = '#E67E22';
    this.ctx.beginPath();
    this.ctx.ellipse(width * 0.30, height * 0.25, width * 0.07, height * 0.06, 0, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.strokeStyle = '#CC5500'; this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    for (let c = 0; c < 3; c++) {
        this.ctx.moveTo(width * 0.26, height * (0.22 + c * 0.02));
        this.ctx.lineTo(width * 0.34, height * (0.22 + c * 0.02));
    }
    this.ctx.stroke();

    // Vesicle cluster
    const vPositions = [[0.52, 0.20], [0.60, 0.18], [0.56, 0.26],
                        [0.64, 0.25], [0.52, 0.32], [0.68, 0.18]];
    vPositions.forEach(([vx, vy]) => {
        this.ctx.fillStyle = '#FF69B4';
        this.ctx.strokeStyle = '#C0185E'; this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.arc(width * vx, height * vy, width * 0.026, 0, Math.PI * 2);
        this.ctx.fill(); this.ctx.stroke();
        // NT dots inside vesicle
        this.ctx.fillStyle = '#C0185E';
        this.ctx.beginPath();
        this.ctx.arc(width * vx, height * vy, 2, 0, Math.PI * 2);
        this.ctx.fill();
    });

    // Active zone thickening
    this.ctx.fillStyle = '#8B8740';
    this.ctx.fillRect(width * 0.35, height * 0.39, width * 0.30, height * 0.016);

    // Cleft
    this.ctx.fillStyle = 'rgba(173,216,230,0.28)';
    this.ctx.fillRect(width * 0.10, height * 0.40, width * 0.80, height * 0.095);

    // Exocytosed NT
    this.ctx.fillStyle = '#E74C3C';
    [[0.42, 0.45], [0.50, 0.43], [0.58, 0.46]].forEach(([tx, ty]) => {
        this.ctx.beginPath();
        this.ctx.arc(width * tx, height * ty, 3, 0, Math.PI * 2);
        this.ctx.fill();
    });

    // Post-synaptic density
    this.ctx.fillStyle = '#AED6F1';
    this.ctx.strokeStyle = '#2980B9'; this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.roundRect(width * 0.10, height * 0.50, width * 0.80, height * 0.12, 4);
    this.ctx.fill(); this.ctx.stroke();

    // Ligand-gated ion channels
    for (let ch = 0; ch < 4; ch++) {
        const chx = width * (0.22 + ch * 0.18);
        this.ctx.fillStyle = '#2ECC71';
        this.ctx.beginPath();
        this.ctx.roundRect(chx, height * 0.50, width * 0.06, height * 0.10, 2);
        this.ctx.fill();
        this.ctx.strokeStyle = '#27AE60'; this.ctx.lineWidth = 1; this.ctx.stroke();
    }

    // Labels
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'left';
    [
        [width * 0.16, height * 0.09,  'Pre-synaptic terminal'],
        [width * 0.16, height * 0.27,  'Mitochondrion'],
        [width * 0.70, height * 0.22,  'Vesicles (NT)'],
        [width * 0.16, height * 0.46,  'Synaptic cleft (~20 nm)'],
        [width * 0.16, height * 0.66,  'Ion channels'],
        [width * 0.16, height * 0.74,  'Post-synaptic membrane'],
    ].forEach(([lx, ly, txt]) => this.ctx.fillText(txt, lx, ly));
}

// ═══════════════════════════════════════════════════════════════════════════
// SKELETAL INSETS
// ═══════════════════════════════════════════════════════════════════════════

drawBoneStructureInset(width, height) {
    this._insetTitle('Bone Structure', width);

    const boneX = width * 0.28, boneY = height * 0.12;
    const boneW = width * 0.44, boneH = height * 0.78;

    // Periosteum
    this.ctx.fillStyle = '#F5DEB3';
    this.ctx.strokeStyle = '#D2B48C'; this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.roundRect(boneX - 6, boneY - 4, boneW + 12, boneH + 8, 8);
    this.ctx.fill(); this.ctx.stroke();

    // Compact bone
    this.ctx.fillStyle = '#FFFAF0';
    this.ctx.beginPath();
    this.ctx.roundRect(boneX, boneY, boneW, boneH, 6);
    this.ctx.fill(); this.ctx.stroke();

    // Spongy bone (centre)
    this.ctx.fillStyle = '#FFF8DC';
    this.ctx.beginPath();
    this.ctx.roundRect(boneX + boneW * 0.22, boneY + boneH * 0.12,
                       boneW * 0.56, boneH * 0.76, 4);
    this.ctx.fill();

    // Trabeculae pattern
    this.ctx.strokeStyle = '#D2B48C'; this.ctx.lineWidth = 1;
    for (let tx = 0; tx < 4; tx++) {
        for (let ty = 0; ty < 6; ty++) {
            const x1 = boneX + boneW * (0.26 + tx * 0.12);
            const y1 = boneY + boneH * (0.16 + ty * 0.11);
            this.ctx.beginPath();
            this.ctx.moveTo(x1, y1); this.ctx.lineTo(x1 + boneW * 0.08, y1 + boneH * 0.06);
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.moveTo(x1 + boneW * 0.08, y1); this.ctx.lineTo(x1, y1 + boneH * 0.06);
            this.ctx.stroke();
        }
    }

    // Medullary cavity
    this.ctx.fillStyle = 'rgba(255,200,200,0.40)';
    this.ctx.beginPath();
    this.ctx.ellipse(boneX + boneW / 2, boneY + boneH / 2, boneW * 0.16, boneH * 0.24, 0, 0, Math.PI * 2);
    this.ctx.fill();

    // Haversian canals in compact bone
    [[0.12, 0.30], [0.12, 0.55], [0.12, 0.78],
     [0.88, 0.30], [0.88, 0.55], [0.88, 0.78]].forEach(([fx, fy]) => {
        this.ctx.strokeStyle = '#E74C3C'; this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.arc(boneX + boneW * fx, boneY + boneH * fy, boneW * 0.04, 0, Math.PI * 2);
        this.ctx.stroke();
        this.ctx.fillStyle = '#E74C3C';
        this.ctx.beginPath();
        this.ctx.arc(boneX + boneW * fx, boneY + boneH * fy, boneW * 0.02, 0, Math.PI * 2);
        this.ctx.fill();
    });

    // Labels
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'right';
    [[width * 0.26, height * 0.16, 'Periosteum'],
     [width * 0.26, height * 0.26, 'Compact bone'],
     [width * 0.26, height * 0.40, 'Spongy bone\n(trabeculae)'],
     [width * 0.26, height * 0.55, 'Medullary\ncavity'],
     [width * 0.26, height * 0.68, 'Haversian canal\n(blood vessel)']
    ].forEach(([lx, ly, txt]) => {
        txt.split('\n').forEach((l, i) => this.ctx.fillText(l, lx, ly + i * 10));
        // connector dot
        this.ctx.fillStyle = '#BDC3C7';
        this.ctx.beginPath();
        this.ctx.arc(lx + 3, ly - 3, 2, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.fillStyle = '#7F8C8D';
    });
}

drawJointTypesInset(width, height) {
    this._insetTitle('Joint Types', width);

    const joints = [
        { name: 'Ball & Socket\n(Hip, Shoulder)', x: 0.20, y: 0.40, draw: (cx, cy, r) => {
            this.ctx.fillStyle = '#F5F5DC';
            this.ctx.strokeStyle = '#D2B48C'; this.ctx.lineWidth = 1.5;
            // Socket
            this.ctx.beginPath();
            this.ctx.arc(cx, cy, r, Math.PI * 0.5, Math.PI * 1.5);
            this.ctx.fill(); this.ctx.stroke();
            // Ball
            this.ctx.fillStyle = '#FFF8DC';
            this.ctx.beginPath();
            this.ctx.arc(cx + r * 0.30, cy, r * 0.72, 0, Math.PI * 2);
            this.ctx.fill(); this.ctx.stroke();
        }},
        { name: 'Hinge\n(Elbow, Knee)', x: 0.50, y: 0.40, draw: (cx, cy, r) => {
            this.ctx.fillStyle = '#F5F5DC';
            this.ctx.strokeStyle = '#D2B48C'; this.ctx.lineWidth = 1.5;
            this.ctx.beginPath();
            this.ctx.roundRect(cx - r, cy - r * 0.30, r * 2, r * 0.60, 4);
            this.ctx.fill(); this.ctx.stroke();
            this.ctx.fillStyle = '#FFF8DC';
            this.ctx.beginPath();
            this.ctx.roundRect(cx - r, cy - r * 0.28, r * 2, r * 0.56, 4);
            this.ctx.fill(); this.ctx.stroke();
        }},
        { name: 'Pivot\n(Atlas/Axis)', x: 0.80, y: 0.40, draw: (cx, cy, r) => {
            this.ctx.fillStyle = '#F5F5DC';
            this.ctx.strokeStyle = '#D2B48C'; this.ctx.lineWidth = 1.5;
            this.ctx.beginPath();
            this.ctx.arc(cx, cy, r, 0, Math.PI * 2);
            this.ctx.fill(); this.ctx.stroke();
            this.ctx.fillStyle = '#FFF8DC';
            this.ctx.beginPath();
            this.ctx.arc(cx, cy, r * 0.50, 0, Math.PI * 2);
            this.ctx.fill(); this.ctx.stroke();
            // Pivot pin
            this.ctx.fillStyle = '#D2B48C';
            this.ctx.beginPath();
            this.ctx.arc(cx, cy, r * 0.18, 0, Math.PI * 2);
            this.ctx.fill();
        }}
    ];

    const r = Math.min(width, height) * 0.100;
    joints.forEach(j => {
        const cx = width * j.x, cy = height * j.y;
        j.draw(cx, cy, r);
        this.ctx.font = '8px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        j.name.split('\n').forEach((l, i) =>
            this.ctx.fillText(l, cx, cy + r + 12 + i * 10));
    });

    // Synovial cavity label
    this.ctx.font = 'italic 8px Arial';
    this.ctx.fillStyle = '#95A5A6';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('All are synovial joints (fluid-filled cavity)', width / 2, height * 0.90);
}

drawOsteonInset(width, height) {
    this._insetTitle('Osteon (Haversian System)', width);

    const cx = width * 0.50, cy = height * 0.54;
    const maxR = Math.min(width, height) * 0.33;

    // Concentric lamellae
    const colors = ['#FFFAF0', '#FFF8DC', '#FFFACD', '#FEFCE8', '#FFFFF0'];
    for (let i = colors.length - 1; i >= 0; i--) {
        this.ctx.fillStyle = colors[i];
        this.ctx.strokeStyle = '#D2B48C'; this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.arc(cx, cy, maxR * (0.30 + i * 0.14), 0, Math.PI * 2);
        this.ctx.fill(); this.ctx.stroke();
    }

    // Haversian canal (centre)
    this.ctx.fillStyle = '#FADBD8';
    this.ctx.strokeStyle = '#E74C3C'; this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(cx, cy, maxR * 0.16, 0, Math.PI * 2);
    this.ctx.fill(); this.ctx.stroke();

    // Osteocytes in lacunae
    for (let ring = 1; ring <= 4; ring++) {
        const rr = maxR * (0.30 + (ring - 0.5) * 0.14);
        for (let o = 0; o < ring * 3; o++) {
            const ang = (o / (ring * 3)) * Math.PI * 2;
            const ox = cx + Math.cos(ang) * rr;
            const oy = cy + Math.sin(ang) * rr;
            this.ctx.fillStyle = '#BDB76B';
            this.ctx.beginPath();
            this.ctx.ellipse(ox, oy, maxR * 0.032, maxR * 0.020, ang, 0, Math.PI * 2);
            this.ctx.fill();
            // Canaliculi (tiny radiating lines)
            this.ctx.strokeStyle = '#BDB76B'; this.ctx.lineWidth = 0.6;
            for (let c = 0; c < 4; c++) {
                const ca = ang + (c / 4) * Math.PI * 2;
                this.ctx.beginPath();
                this.ctx.moveTo(ox, oy);
                this.ctx.lineTo(ox + Math.cos(ca) * maxR * 0.055, oy + Math.sin(ca) * maxR * 0.055);
                this.ctx.stroke();
            }
        }
    }

    // Volkmann canal (transverse)
    this.ctx.strokeStyle = '#E74C3C'; this.ctx.lineWidth = 2.5;
    this.ctx.beginPath();
    this.ctx.moveTo(cx + maxR * 0.90, cy); this.ctx.lineTo(cx + maxR * 0.16, cy);
    this.ctx.stroke();

    // Labels
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'left';
    [['Haversian canal\n(blood/nerve)', cx + maxR + 4, cy - maxR * 0.30],
     ['Osteocyte in lacuna', cx + maxR + 4, cy + maxR * 0.10],
     ['Lamella (ring)', cx + maxR + 4, cy + maxR * 0.46],
     ['Volkmann canal', cx + maxR + 4, cy - maxR * 0.66]
    ].forEach(([txt, lx, ly]) =>
        txt.split('\n').forEach((l, i) => this.ctx.fillText(l, lx, ly + i * 9)));
}

drawCartilageInset(width, height) {
    this._insetTitle('Cartilage Types', width);

    const types = [
        {
            name: 'Hyaline\n(articular)', x: 0.18, color: '#B0C4DE', textColor: '#1a5276',
            draw: (cx, cy, w, h) => {
                // Glassy matrix
                const g = this.ctx.createRadialGradient(cx, cy, 0, cx, cy, w / 2);
                g.addColorStop(0, '#D6EAF8'); g.addColorStop(1, '#B0C4DE');
                this.ctx.fillStyle = g;
                this.ctx.beginPath();
                this.ctx.roundRect(cx - w / 2, cy - h / 2, w, h, 6);
                this.ctx.fill();
                // Chondrocytes in lacunae
                for (let i = 0; i < 8; i++) {
                    const lx = cx + (Math.random() * 0.80 - 0.40) * w;
                    const ly = cy + (Math.random() * 0.80 - 0.40) * h;
                    this.ctx.fillStyle = '#2471A3';
                    this.ctx.beginPath();
                    this.ctx.ellipse(lx, ly, w * 0.06, h * 0.06, 0, 0, Math.PI * 2);
                    this.ctx.fill();
                }
            }
        },
        {
            name: 'Fibro-\ncartilage', x: 0.50, color: '#F0E68C', textColor: '#7B6914',
            draw: (cx, cy, w, h) => {
                this.ctx.fillStyle = '#FFFACD';
                this.ctx.beginPath();
                this.ctx.roundRect(cx - w / 2, cy - h / 2, w, h, 6);
                this.ctx.fill();
                // Collagen fibres
                this.ctx.strokeStyle = '#CD853F'; this.ctx.lineWidth = 1;
                for (let f = 0; f < 8; f++) {
                    const fy = cy - h / 2 + (f / 7) * h;
                    this.ctx.beginPath();
                    this.ctx.moveTo(cx - w / 2, fy);
                    this.ctx.bezierCurveTo(cx - w / 4, fy + h * 0.05, cx + w / 4, fy - h * 0.05, cx + w / 2, fy);
                    this.ctx.stroke();
                }
            }
        },
        {
            name: 'Elastic\n(ear, larynx)', x: 0.82, color: '#FFDAB9', textColor: '#8B4513',
            draw: (cx, cy, w, h) => {
                this.ctx.fillStyle = '#FFE4C4';
                this.ctx.beginPath();
                this.ctx.roundRect(cx - w / 2, cy - h / 2, w, h, 6);
                this.ctx.fill();
                // Elastic fibres (wavy)
                this.ctx.strokeStyle = '#CD853F'; this.ctx.lineWidth = 0.8;
                for (let f = 0; f < 6; f++) {
                    const fy = cy - h * 0.35 + (f / 5) * h * 0.70;
                    this.ctx.beginPath();
                    this.ctx.moveTo(cx - w / 2, fy);
                    for (let t = 0; t <= 10; t++) {
                        const tx = cx - w / 2 + (t / 10) * w;
                        const ty = fy + Math.sin(t / 10 * Math.PI * 3) * h * 0.04;
                        t === 0 ? this.ctx.moveTo(tx, ty) : this.ctx.lineTo(tx, ty);
                    }
                    this.ctx.stroke();
                }
            }
        }
    ];

    const cardW = width * 0.26, cardH = height * 0.46;
    types.forEach(t => {
        const cx = width * t.x, cy = height * 0.44;
        t.draw(cx, cy, cardW, cardH);
        this.ctx.strokeStyle = t.color; this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.roundRect(cx - cardW / 2, cy - cardH / 2, cardW, cardH, 6);
        this.ctx.stroke();
        this.ctx.font = 'bold 8px Arial';
        this.ctx.fillStyle = t.textColor;
        this.ctx.textAlign = 'center';
        t.name.split('\n').forEach((l, i) =>
            this.ctx.fillText(l, cx, cy + cardH / 2 + 12 + i * 10));
    });

    this.ctx.font = 'italic 8px Arial';
    this.ctx.fillStyle = '#95A5A6';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('No blood vessels — nutrients via diffusion', width / 2, height * 0.94);
}

// ═══════════════════════════════════════════════════════════════════════════
// URINARY INSETS
// ═══════════════════════════════════════════════════════════════════════════

drawNephronDetailInset(width, height) {
    this._insetTitle('Nephron Structure', width);

    // Glomerulus + Bowman's capsule
    const gcX = width * 0.28, gcY = height * 0.28, gcR = width * 0.10;
    this.ctx.fillStyle = '#FFF8DC';
    this.ctx.strokeStyle = '#B8860B'; this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(gcX, gcY, gcR * 1.40, 0, Math.PI * 2);
    this.ctx.fill(); this.ctx.stroke();
    // Glomerular tuft
    this.ctx.fillStyle = '#FFD700';
    for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2;
        this.ctx.beginPath();
        this.ctx.arc(gcX + Math.cos(a) * gcR * 0.55, gcY + Math.sin(a) * gcR * 0.55,
                     gcR * 0.35, 0, Math.PI * 2);
        this.ctx.fill();
    }
    this.ctx.fillStyle = '#DAA520';
    this.ctx.beginPath();
    this.ctx.arc(gcX, gcY, gcR * 0.50, 0, Math.PI * 2);
    this.ctx.fill();

    // Tubule pathway (color-coded)
    const tubuleSegments = [
        { label: 'PCT', color: '#E67E22', points: [[0.40, 0.22], [0.55, 0.18], [0.68, 0.22], [0.70, 0.30]] },
        { label: 'Loop\nof Henle', color: '#3498DB', points: [[0.70, 0.30], [0.75, 0.50], [0.72, 0.68], [0.60, 0.72], [0.50, 0.68], [0.48, 0.50]] },
        { label: 'DCT', color: '#9B59B6', points: [[0.48, 0.50], [0.40, 0.44], [0.32, 0.40], [0.28, 0.44]] },
        { label: 'CD',  color: '#27AE60', points: [[0.28, 0.44], [0.25, 0.58], [0.26, 0.72], [0.28, 0.82]] }
    ];

    tubuleSegments.forEach(seg => {
        this.ctx.strokeStyle = seg.color; this.ctx.lineWidth = 4; this.ctx.lineCap = 'round';
        this.ctx.beginPath();
        seg.points.forEach(([tx, ty], i) => {
            i === 0 ? this.ctx.moveTo(width * tx, height * ty) : this.ctx.lineTo(width * tx, height * ty);
        });
        this.ctx.stroke();
        // Label at midpoint
        const mid = seg.points[Math.floor(seg.points.length / 2)];
        this.ctx.font = '7px Arial';
        this.ctx.fillStyle = seg.color;
        this.ctx.textAlign = 'left';
        seg.label.split('\n').forEach((l, i) =>
            this.ctx.fillText(l, width * mid[0] + 5, height * mid[1] + i * 8));
    });

    // Afferent / efferent arterioles
    this.ctx.strokeStyle = '#E74C3C'; this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.14, gcY - gcR * 0.50); this.ctx.lineTo(gcX - gcR * 1.20, gcY);
    this.ctx.stroke();
    this.ctx.strokeStyle = '#8B4789'; this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(gcX - gcR * 1.20, gcY + gcR * 0.30); this.ctx.lineTo(width * 0.14, gcY + gcR * 0.80);
    this.ctx.stroke();

    // Collecting duct endpoint
    this.ctx.fillStyle = '#27AE60';
    this.ctx.beginPath();
    this.ctx.ellipse(width * 0.28, height * 0.88, width * 0.04, height * 0.03, 0, 0, Math.PI * 2);
    this.ctx.fill();

    // Legend
    this.ctx.font = '7px Arial';
    this.ctx.textAlign = 'left';
    [['PCT = Proximal Convoluted Tubule',  '#E67E22', height * 0.90],
     ['DCT = Distal Convoluted Tubule',    '#9B59B6', height * 0.96],
    ].forEach(([txt, clr, ly]) => {
        this.ctx.fillStyle = clr;
        this.ctx.fillText(txt, width * 0.32, ly);
    });
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.fillText('Afferent arteriole', width * 0.16, gcY - gcR * 0.70);
    this.ctx.fillStyle = '#8B4789';
    this.ctx.fillText('Efferent arteriole', width * 0.04, gcY + gcR * 1.10);
}

drawGlomerularFiltrationInset(width, height) {
    this._insetTitle('Glomerular Filtration', width);

    const capX = width * 0.50, capY = height * 0.42, capR = width * 0.22;

    // Glomerular capillary (fenestrated)
    this.ctx.fillStyle = '#FADBD8';
    this.ctx.strokeStyle = '#E74C3C'; this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(capX, capY, capR, 0, Math.PI * 2);
    this.ctx.fill(); this.ctx.stroke();

    // Fenestrae (pores in capillary)
    this.ctx.fillStyle = '#FFFFFF';
    for (let i = 0; i < 16; i++) {
        const a = (i / 16) * Math.PI * 2;
        this.ctx.beginPath();
        this.ctx.arc(capX + Math.cos(a) * capR, capY + Math.sin(a) * capR, 2, 0, Math.PI * 2);
        this.ctx.fill();
    }

    // Bowman's space
    this.ctx.strokeStyle = '#B8860B'; this.ctx.lineWidth = 2;
    this.ctx.setLineDash([3, 2]);
    this.ctx.beginPath();
    this.ctx.arc(capX, capY, capR * 1.50, 0, Math.PI * 2);
    this.ctx.stroke();
    this.ctx.setLineDash([]);

    // Filtrate arrows (outward)
    this.ctx.fillStyle = '#27AE60';
    for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2;
        this.drawArrow(capX + Math.cos(a) * capR * 0.80, capY + Math.sin(a) * capR * 0.80,
                       capX + Math.cos(a) * capR * 1.40, capY + Math.sin(a) * capR * 1.40,
                       '#27AE60', '', 5);
    }

    // Filtrate label
    this.ctx.fillStyle = '#27AE60';
    this.ctx.font = '8px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Filtrate', capX, capY + capR * 1.72);

    // GFR info
    this.ctx.font = 'bold 9px Arial';
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('GFR ≈ 125 mL/min', width / 2, height * 0.88);
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.fillText('= 180 L filtered per day', width / 2, height * 0.94);

    // Left label: blood in
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.textAlign = 'right';
    this.ctx.fillText('Blood under\npressure'.replace('\n', '\n'), width * 0.22, capY + 4);
}

drawCountercurrentInset(width, height) {
    this._insetTitle('Countercurrent Multiplier', width);

    // Descending limb (left)
    const dlX = width * 0.28, dlTop = height * 0.14, dlH = height * 0.64;
    this.ctx.fillStyle = '#AED6F1';
    this.ctx.strokeStyle = '#2980B9'; this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.roundRect(dlX - width * 0.06, dlTop, width * 0.12, dlH, 4);
    this.ctx.fill(); this.ctx.stroke();

    // Ascending limb (right)
    const alX = width * 0.68;
    this.ctx.fillStyle = '#FAD7A0';
    this.ctx.strokeStyle = '#E67E22'; this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.roundRect(alX - width * 0.06, dlTop, width * 0.12, dlH, 4);
    this.ctx.fill(); this.ctx.stroke();

    // Bottom connector (loop)
    this.ctx.strokeStyle = '#7F8C8D'; this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(dlX - width * 0.06, dlTop + dlH);
    this.ctx.bezierCurveTo(dlX, dlTop + dlH + height * 0.06,
                            alX, dlTop + dlH + height * 0.06,
                            alX + width * 0.06, dlTop + dlH);
    this.ctx.stroke();

    // Osmolarity gradient (background shading)
    for (let i = 0; i < 8; i++) {
        const gy = dlTop + (i / 8) * dlH;
        const alpha = 0.04 + (i / 8) * 0.16;
        this.ctx.fillStyle = `rgba(180,120,60,${alpha})`;
        this.ctx.fillRect(width * 0.12, gy, width * 0.76, dlH / 8);
    }

    // Osmolarity values
    const values = ['300', '400', '500', '600', '700', '800', '900', '1200'];
    values.forEach((v, i) => {
        const vy = dlTop + (i / 8) * dlH + 10;
        this.ctx.font = '8px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'right';
        this.ctx.fillText(v, width * 0.10, vy);
    });

    // Flow direction arrows
    this.drawArrow(dlX, dlTop + 8, dlX, dlTop + dlH - 8, '#2980B9', '', 6);   // descending: down
    this.drawArrow(alX, dlTop + dlH - 8, alX, dlTop + 8, '#E67E22', '', 6);   // ascending: up

    // Na+ / H2O movement arrows (across)
    for (let i = 2; i < 7; i++) {
        const ay = dlTop + (i / 8) * dlH;
        this.ctx.strokeStyle = '#27AE60'; this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.moveTo(alX - width * 0.06, ay); this.ctx.lineTo(alX - width * 0.18, ay);
        this.ctx.stroke();
        this.ctx.font = '7px Arial';
        this.ctx.fillStyle = '#27AE60';
        this.ctx.textAlign = 'right';
        this.ctx.fillText('Na⁺', alX - width * 0.18 - 2, ay + 3);
    }

    // Water arrows from descending limb
    for (let i = 2; i < 7; i++) {
        const ay = dlTop + (i / 8) * dlH;
        this.ctx.strokeStyle = '#3498DB'; this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.moveTo(dlX + width * 0.06, ay); this.ctx.lineTo(dlX + width * 0.20, ay);
        this.ctx.stroke();
        this.ctx.font = '7px Arial';
        this.ctx.fillStyle = '#3498DB';
        this.ctx.textAlign = 'left';
        this.ctx.fillText('H₂O', dlX + width * 0.20 + 2, ay + 3);
    }

    // Labels
    this.ctx.font = 'bold 9px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = '#2980B9';
    this.ctx.fillText('Descending', dlX, dlTop - 4);
    this.ctx.fillStyle = '#E67E22';
    this.ctx.fillText('Ascending', alX, dlTop - 4);
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.fillText('mOsm/L', width * 0.08, dlTop - 4);
}

drawUrineFormationInset(width, height) {
    this._insetTitle('Urine Formation', width);

    const steps = [
        { label: 'Filtration',   sub: 'Glomerulus',          color: '#AED6F1', y: 0.18, icon: '⇓' },
        { label: 'Reabsorption', sub: 'PCT + Loop of Henle',  color: '#A9DFBF', y: 0.38, icon: '⇑' },
        { label: 'Secretion',    sub: 'DCT',                  color: '#FAD7A0', y: 0.58, icon: '⇓' },
        { label: 'Excretion',    sub: 'Collecting duct →\nUreter → Bladder', color: '#F1948A', y: 0.78, icon: '⇓' }
    ];

    const bw = width * 0.72, bh = height * 0.10, bx = width * 0.14;
    steps.forEach((s, i) => {
        const by = height * s.y;
        // Box
        this.ctx.fillStyle = s.color;
        this.ctx.strokeStyle = 'rgba(0,0,0,0.15)'; this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.roundRect(bx, by, bw, bh, 5);
        this.ctx.fill(); this.ctx.stroke();
        // Step number
        this.ctx.font = 'bold 14px Arial';
        this.ctx.fillStyle = 'rgba(0,0,0,0.25)';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(`${i + 1}`, bx + bw * 0.08, by + bh * 0.72);
        // Labels
        this.ctx.font = 'bold 9px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.fillText(s.label, bx + bw * 0.50, by + bh * 0.44);
        this.ctx.font = '8px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        s.sub.split('\n').forEach((l, li) =>
            this.ctx.fillText(l, bx + bw * 0.50, by + bh * 0.72 + li * 8));
        // Connector arrow
        if (i < steps.length - 1) {
            this.drawArrow(bx + bw / 2, by + bh + 2,
                           bx + bw / 2, height * steps[i + 1].y - 2, '#95A5A6', '', 6);
        }
    });
    // Volume reduction note
    this.ctx.font = 'italic 8px Arial';
    this.ctx.fillStyle = '#95A5A6';
    this.ctx.textAlign = 'right';
    this.ctx.fillText('180 L/day → 1–2 L urine', width * 0.92, height * 0.96);
}

// ═══════════════════════════════════════════════════════════════════════════
// EYE INSETS
// ═══════════════════════════════════════════════════════════════════════════

drawRetinalLayersInset(width, height) {
    this._insetTitle('Retinal Layers', width);

    const layers = [
        { name: 'Vitreous',          color: 'rgba(173,216,230,0.30)', h: 0.06 },
        { name: 'Nerve fibre layer', color: '#D5DBDB',               h: 0.06 },
        { name: 'Ganglion cells',    color: '#AED6F1',               h: 0.08 },
        { name: 'Inner plexiform',   color: '#FDEBD0',               h: 0.06 },
        { name: 'Inner nuclear',     color: '#FAD7A0',               h: 0.08 },
        { name: 'Outer plexiform',   color: '#FDEBD0',               h: 0.06 },
        { name: 'Outer nuclear',     color: '#F9E79F',               h: 0.08 },
        { name: 'Photoreceptors',    color: '#F0B27A',               h: 0.10 },
        { name: 'RPE',               color: '#8B4513',               h: 0.06 },
        { name: 'Choroid',           color: '#7B3B10',               h: 0.08 }
    ];

    const lx = width * 0.04, lw = width * 0.58;
    let curY = height * 0.12;
    layers.forEach(layer => {
        const lh = height * layer.h;
        this.ctx.fillStyle = layer.color;
        this.ctx.strokeStyle = 'rgba(0,0,0,0.08)'; this.ctx.lineWidth = 1;
        this.ctx.fillRect(lx, curY, lw, lh);
        this.ctx.strokeRect(lx, curY, lw, lh);
        this.ctx.font = '8px Arial';
        this.ctx.fillStyle = layer.h < 0.07 ? '#666' : '#2C3E50';
        this.ctx.textAlign = 'left';
        this.ctx.fillText(layer.name, lx + lw + 6, curY + lh * 0.65);
        curY += lh;
    });

    // Light direction arrow
    this.drawArrow(width * 0.82, height * 0.16, width * 0.82, height * 0.82, '#DAA520', '', 7);
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#DAA520';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Light', width * 0.90, height * 0.50);

    // Rod & cone icons at photoreceptor level
    const prY = height * (0.12 + [0.06,0.06,0.08,0.06,0.08,0.06,0.08].reduce((s,v)=>s+v,0));
    for (let r = 0; r < 4; r++) {
        // Rod
        this.ctx.fillStyle = '#E74C3C';
        this.ctx.fillRect(lx + width * 0.04 + r * width * 0.13, prY + height * 0.01, width * 0.02, height * 0.08);
        // Cone
        this.ctx.fillStyle = '#3498DB';
        this.ctx.beginPath();
        this.ctx.moveTo(lx + width * 0.09 + r * width * 0.13, prY + height * 0.01);
        this.ctx.lineTo(lx + width * 0.06 + r * width * 0.13, prY + height * 0.08);
        this.ctx.lineTo(lx + width * 0.12 + r * width * 0.13, prY + height * 0.08);
        this.ctx.closePath();
        this.ctx.fill();
    }
}

drawAccommodationInset(width, height) {
    this._insetTitle('Accommodation', width);

    const drawEye = (ex, ey, er, label, subLabel, lensThick, rayTarget) => {
        // Sclera
        this.ctx.fillStyle = '#F0F0F0';
        this.ctx.strokeStyle = '#CCC'; this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.arc(ex, ey, er, 0, Math.PI * 2);
        this.ctx.fill(); this.ctx.stroke();

        // Lens (thickness varies)
        this.ctx.fillStyle = 'rgba(255,255,200,0.80)';
        this.ctx.strokeStyle = '#DAA520'; this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.ellipse(ex - er * 0.30, ey, er * lensThick * 0.40, er * 0.46, 0, 0, Math.PI * 2);
        this.ctx.fill(); this.ctx.stroke();

        // Retina marker
        this.ctx.fillStyle = '#FFD700';
        this.ctx.beginPath();
        this.ctx.arc(ex + er * 0.62, ey, er * 0.08, 0, Math.PI * 2);
        this.ctx.fill();

        // Light rays
        this.ctx.strokeStyle = 'rgba(255,215,0,0.70)';
        this.ctx.lineWidth = 1.5;
        [-0.25, 0, 0.25].forEach(offset => {
            this.ctx.beginPath();
            this.ctx.moveTo(ex - er * 1.60, ey + er * offset);
            this.ctx.lineTo(ex - er * 0.36, ey + er * offset * 0.60);
            this.ctx.lineTo(ex + er * 0.62, rayTarget === 'on' ? ey : ey + er * offset * 0.15);
            this.ctx.stroke();
        });

        // Label
        this.ctx.font = 'bold 9px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(label,    ex, ey + er + 14);
        this.ctx.font = '8px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.fillText(subLabel, ex, ey + er + 24);
    };

    const r = Math.min(width, height) * 0.18;
    drawEye(width * 0.28, height * 0.46, r, 'Far Vision', 'Lens thin, flat', 0.55, 'on');
    drawEye(width * 0.72, height * 0.46, r, 'Near Vision', 'Lens thick, curved', 1.20, 'on');

    // vs divider
    this.ctx.font = 'bold 14px Arial';
    this.ctx.fillStyle = '#BDC3C7';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('vs', width * 0.50, height * 0.50);

    // Ciliary muscle note
    this.ctx.font = 'italic 8px Arial';
    this.ctx.fillStyle = '#95A5A6';
    this.ctx.fillText('Ciliary muscles relax → lens thin', width * 0.28, height * 0.92);
    this.ctx.fillText('Ciliary muscles contract → lens thick', width * 0.72, height * 0.92);
}

drawVisualPathwayInset(width, height) {
    this._insetTitle('Visual Pathway', width);

    const elements = [
        { label: 'Left eye',         x: 0.22, y: 0.18, w: 0.16, h: 0.06, color: '#AED6F1' },
        { label: 'Right eye',        x: 0.78, y: 0.18, w: 0.16, h: 0.06, color: '#AED6F1' },
        { label: 'Optic nerve',      x: 0.22, y: 0.32, w: 0.16, h: 0.05, color: '#F0E68C' },
        { label: 'Optic nerve',      x: 0.78, y: 0.32, w: 0.16, h: 0.05, color: '#F0E68C' },
        { label: 'Optic chiasm',     x: 0.50, y: 0.42, w: 0.24, h: 0.06, color: '#F9CA24' },
        { label: 'Optic tract (L)',  x: 0.26, y: 0.54, w: 0.18, h: 0.05, color: '#F0E68C' },
        { label: 'Optic tract (R)',  x: 0.74, y: 0.54, w: 0.18, h: 0.05, color: '#F0E68C' },
        { label: 'LGN (L)',          x: 0.24, y: 0.64, w: 0.14, h: 0.06, color: '#C39BD3' },
        { label: 'LGN (R)',          x: 0.76, y: 0.64, w: 0.14, h: 0.06, color: '#C39BD3' },
        { label: 'Visual cortex\n(V1 occipital)', x: 0.50, y: 0.80, w: 0.36, h: 0.08, color: '#82E0AA' }
    ];

    elements.forEach(el => {
        this.ctx.fillStyle = el.color;
        this.ctx.strokeStyle = 'rgba(0,0,0,0.15)'; this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.roundRect(width * (el.x - el.w / 2), height * (el.y - el.h / 2),
                           width * el.w, height * el.h, 3);
        this.ctx.fill(); this.ctx.stroke();
        this.ctx.font = '7px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        el.label.split('\n').forEach((l, i) =>
            this.ctx.fillText(l, width * el.x, height * el.y + 3 + i * 8));
    });

    // Connecting arrows
    const arrows = [
        [0.22, 0.22, 0.22, 0.30], [0.78, 0.22, 0.78, 0.30],
        [0.22, 0.34, 0.38, 0.39], [0.78, 0.34, 0.62, 0.39],
        [0.50, 0.45, 0.32, 0.51], [0.50, 0.45, 0.68, 0.51],
        [0.30, 0.57, 0.27, 0.61], [0.70, 0.57, 0.73, 0.61],
        [0.27, 0.67, 0.40, 0.76], [0.73, 0.67, 0.60, 0.76]
    ];
    arrows.forEach(([x1, y1, x2, y2]) =>
        this.drawArrow(width * x1, height * y1, width * x2, height * y2, '#BDC3C7', '', 5));

    // Decussation indicator at chiasm
    this.ctx.strokeStyle = '#E74C3C'; this.ctx.lineWidth = 1.5;
    this.ctx.setLineDash([2, 2]);
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.38, height * 0.42); this.ctx.lineTo(width * 0.62, height * 0.42);
    this.ctx.stroke();
    this.ctx.setLineDash([]);
    this.ctx.font = '7px Arial';
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Nasal fibres cross', width * 0.50, height * 0.50);
}

drawPhotoreceptorsInset(width, height) {
    this._insetTitle('Photoreceptors', width);

    // Rod
    const rodX = width * 0.25;
    const drawRod = (rx, ry, rh) => {
        // Outer segment (discs)
        this.ctx.fillStyle = '#8B0000';
        this.ctx.strokeStyle = '#5B0000'; this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.roundRect(rx - width * 0.04, ry, width * 0.08, rh * 0.40, 3);
        this.ctx.fill(); this.ctx.stroke();
        for (let d = 0; d < 7; d++) {
            this.ctx.strokeStyle = '#FF000050'; this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.moveTo(rx - width * 0.04, ry + (d / 7) * rh * 0.38);
            this.ctx.lineTo(rx + width * 0.04, ry + (d / 7) * rh * 0.38);
            this.ctx.stroke();
        }
        // Cilium
        this.ctx.strokeStyle = '#555'; this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.moveTo(rx, ry + rh * 0.40); this.ctx.lineTo(rx, ry + rh * 0.46);
        this.ctx.stroke();
        // Inner segment
        this.ctx.fillStyle = '#E8B4B8';
        this.ctx.strokeStyle = '#C06080'; this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.roundRect(rx - width * 0.04, ry + rh * 0.46, width * 0.08, rh * 0.24, 2);
        this.ctx.fill(); this.ctx.stroke();
        // Mitochondria
        for (let m = 0; m < 3; m++) {
            this.ctx.fillStyle = '#E67E22';
            this.ctx.beginPath();
            this.ctx.ellipse(rx + (m - 1) * width * 0.025, ry + rh * 0.52,
                             width * 0.018, rh * 0.030, 0, 0, Math.PI * 2);
            this.ctx.fill();
        }
        // Nucleus
        this.ctx.fillStyle = '#3498DB';
        this.ctx.beginPath();
        this.ctx.arc(rx, ry + rh * 0.74, width * 0.032, 0, Math.PI * 2);
        this.ctx.fill();
        // Synaptic terminal
        this.ctx.fillStyle = '#27AE60';
        this.ctx.beginPath();
        this.ctx.arc(rx, ry + rh * 0.90, width * 0.040, 0, Math.PI * 2);
        this.ctx.fill();
    };

    // Cone
    const coneX = width * 0.62;
    const drawCone = (cx, cy, ch) => {
        // Outer segment (tapered)
        this.ctx.fillStyle = '#004080';
        this.ctx.strokeStyle = '#002050'; this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.moveTo(cx - width * 0.050, cy);
        this.ctx.lineTo(cx - width * 0.025, cy + ch * 0.36);
        this.ctx.lineTo(cx + width * 0.025, cy + ch * 0.36);
        this.ctx.lineTo(cx + width * 0.050, cy);
        this.ctx.closePath();
        this.ctx.fill(); this.ctx.stroke();
        for (let d = 0; d < 6; d++) {
            const dw = width * 0.050 - (d / 6) * width * 0.025;
            const dy = cy + (d / 6) * ch * 0.34;
            this.ctx.strokeStyle = '#0080FF50'; this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.moveTo(cx - dw, dy); this.ctx.lineTo(cx + dw, dy);
            this.ctx.stroke();
        }
        // Cilium
        this.ctx.strokeStyle = '#555'; this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.moveTo(cx, cy + ch * 0.36); this.ctx.lineTo(cx, cy + ch * 0.42);
        this.ctx.stroke();
        // Inner segment
        this.ctx.fillStyle = '#AED6F1';
        this.ctx.strokeStyle = '#2980B9'; this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.roundRect(cx - width * 0.040, cy + ch * 0.42, width * 0.080, ch * 0.24, 2);
        this.ctx.fill(); this.ctx.stroke();
        // Nucleus
        this.ctx.fillStyle = '#E74C3C';
        this.ctx.beginPath();
        this.ctx.arc(cx, cy + ch * 0.70, width * 0.032, 0, Math.PI * 2);
        this.ctx.fill();
        // Synaptic terminal
        this.ctx.fillStyle = '#F39C12';
        this.ctx.beginPath();
        this.ctx.arc(cx, cy + ch * 0.88, width * 0.040, 0, Math.PI * 2);
        this.ctx.fill();
    };

    const baseY = height * 0.14, cellH = height * 0.66;
    drawRod(rodX, baseY, cellH);
    drawCone(coneX, baseY, cellH);

    // Labels
    this.ctx.font = 'bold 10px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = '#8B0000';
    this.ctx.fillText('Rod', rodX, baseY - 6);
    this.ctx.fillStyle = '#004080';
    this.ctx.fillText('Cone', coneX, baseY - 6);

    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    [['Disc membranes\n(rhodopsin)', rodX, baseY + cellH * 0.18],
     ['Mitochondria',               rodX, baseY + cellH * 0.54],
     ['Nucleus',                    rodX, baseY + cellH * 0.78],
     ['Synaptic terminal',          rodX, baseY + cellH * 0.96],
     ['Cone discs\n(opsins R/G/B)', coneX, baseY + cellH * 0.18],
     ['Nucleus',                    coneX, baseY + cellH * 0.74],
    ].forEach(([txt, lx, ly]) =>
        txt.split('\n').forEach((l, i) => this.ctx.fillText(l, lx, ly + i * 9)));

    // Summary
    this.ctx.font = 'italic 8px Arial';
    this.ctx.fillStyle = '#95A5A6';
    this.ctx.fillText('Rods: dim light / B&W   |   Cones: colour vision', width / 2, height * 0.96);
}

// ═══════════════════════════════════════════════════════════════════════════
// SHARED PRIVATE HELPER
// ═══════════════════════════════════════════════════════════════════════════

_insetTitle(text, width) {
    this.ctx.font = 'bold 12px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(text, width / 2, 18);
}



    // ── Cardiac cycle inset ──────────────────────────────────────────────────
    drawCardiacCycleInset(width, height) {
        this.ctx.font = 'bold 12px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Cardiac Cycle', width / 2, 18);

        const phases = [
            { label: 'Diastole',  color: '#AED6F1', pct: 0.60, note: 'Chambers fill' },
            { label: 'Systole',   color: '#E74C3C', pct: 0.35, note: 'Chambers pump' },
            { label: 'Rest',      color: '#BDC3C7', pct: 0.05, note: '' }
        ];
        const cx = width / 2, cy = height * 0.56, r = Math.min(width, height) * 0.30;
        let startAngle = -Math.PI / 2;

        phases.forEach(p => {
            const sweep = p.pct * Math.PI * 2;
            this.ctx.fillStyle = p.color;
            this.ctx.beginPath();
            this.ctx.moveTo(cx, cy);
            this.ctx.arc(cx, cy, r, startAngle, startAngle + sweep);
            this.ctx.closePath();
            this.ctx.fill();
            this.ctx.strokeStyle = '#fff';
            this.ctx.lineWidth = 2;
            this.ctx.stroke();

            const midA = startAngle + sweep / 2;
            const lx = cx + Math.cos(midA) * r * 0.65;
            const ly = cy + Math.sin(midA) * r * 0.65;
            this.ctx.font = 'bold 9px Arial';
            this.ctx.fillStyle = '#fff';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(p.label, lx, ly);
            if (p.note) {
                this.ctx.font = '8px Arial';
                this.ctx.fillText(p.note, lx, ly + 10);
            }
            startAngle += sweep;
        });

        // HR indicator
        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillStyle = '#E74C3C';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('HR ≈ 72 bpm', width / 2, height * 0.92);
    }

    // ── Conduction system inset ──────────────────────────────────────────────
    drawConductionSystemInset(width, height) {
        this.ctx.font = 'bold 12px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Conduction System', width / 2, 18);

        const nodes = [
            { id: 'SA',  label: 'SA Node\n(Pacemaker)',  x: 0.72, y: 0.28, color: '#E74C3C' },
            { id: 'AV',  label: 'AV Node',               x: 0.55, y: 0.50, color: '#E67E22' },
            { id: 'HB',  label: 'Bundle of His',         x: 0.50, y: 0.60, color: '#F1C40F' },
            { id: 'LBB', label: 'Left\nBundle Branch',   x: 0.35, y: 0.70, color: '#27AE60' },
            { id: 'RBB', label: 'Right\nBundle Branch',  x: 0.65, y: 0.70, color: '#27AE60' },
            { id: 'PF',  label: 'Purkinje\nFibres',      x: 0.50, y: 0.86, color: '#2980B9' }
        ];

        const edges = [
            ['SA', 'AV'], ['AV', 'HB'], ['HB', 'LBB'], ['HB', 'RBB'],
            ['LBB', 'PF'], ['RBB', 'PF']
        ];

        const byId = {};
        nodes.forEach(n => { byId[n.id] = n; });

        // Edges
        this.ctx.strokeStyle = '#BDC3C7';
        this.ctx.lineWidth = 2;
        edges.forEach(([a, b]) => {
            const na = byId[a], nb = byId[b];
            this.ctx.beginPath();
            this.ctx.moveTo(width * na.x, height * na.y);
            this.ctx.lineTo(width * nb.x, height * nb.y);
            this.ctx.stroke();
        });

        // Nodes
        nodes.forEach(n => {
            this.ctx.fillStyle = n.color;
            this.ctx.beginPath();
            this.ctx.arc(width * n.x, height * n.y, 8, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.font = '8px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = n.x < 0.5 ? 'right' : 'left';
            const lines = n.label.split('\n');
            lines.forEach((l, i) => {
                this.ctx.fillText(l, width * n.x + (n.x < 0.5 ? -12 : 12),
                    height * n.y - 4 + i * 10);
            });
        });
    }

    // ── Coronary circulation inset ───────────────────────────────────────────
    drawCoronaryCirculationInset(width, height) {
        this.ctx.font = 'bold 12px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Coronary Circulation', width / 2, 18);

        const color = { base: '#E74C3C', light: '#FF6B6B', dark: '#C0392B' };
        this.ctx.save();
        this.ctx.translate(width * 0.12, height * 0.15);
        AnatomicalShapes.drawCoronaryArteries(this.ctx, color, width * 0.76, height * 0.72);
        this.ctx.restore();

        this.ctx.font = '9px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Supplies O₂ to heart muscle', width / 2, height * 0.94);
    }

    // ── Capillary exchange inset ─────────────────────────────────────────────
    drawCapillaryExchangeInset(width, height) {
        this.ctx.font = 'bold 12px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Capillary Exchange', width / 2, 18);

        const color = { base: '#E8A0A0', light: '#F5CCCC', dark: '#C06060' };
        this.ctx.save();
        this.ctx.translate(width * 0.06, height * 0.18);
        AnatomicalShapes.drawCapillaryBed(this.ctx, color, width * 0.88, height * 0.65);
        this.ctx.restore();

        this.ctx.font = '9px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('O₂, nutrients → tissues', width / 2, height * 0.90);
        this.ctx.fillText('CO₂, waste ← tissues',   width / 2, height * 0.96);
    }

    // ── Valve mechanism inset ────────────────────────────────────────────────
    drawValveMechanismInset(width, height) {
        this.ctx.font = 'bold 12px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Valve Mechanism', width / 2, 18);

        const color = { base: '#F0E68C', light: '#FFFACD', dark: '#DAA520' };
        this.ctx.save();
        this.ctx.translate(width * 0.08, height * 0.18);
        AnatomicalShapes.drawHeartValves(this.ctx, color, width * 0.84, height * 0.70);
        this.ctx.restore();

        this.ctx.font = '9px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Prevent backflow of blood', width / 2, height * 0.94);
    }

    // ── Gas exchange inset ───────────────────────────────────────────────────
    drawGasExchangeInset(x, y, width, height) {
        this.ctx.save();
        this.ctx.translate(x, y);

        this.ctx.font = 'bold 12px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Gas Exchange in Alveoli', width / 2, 18);

        // Alveolus
        this.ctx.strokeStyle = '#FFB6D9';
        this.ctx.fillStyle = 'rgba(255,182,217,0.2)';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(width * 0.32, height * 0.55, width * 0.20, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        // Capillary wrap
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 5;
        this.ctx.beginPath();
        this.ctx.arc(width * 0.32, height * 0.55, width * 0.24, 0, Math.PI * 2);
        this.ctx.stroke();

        // O2
        this.ctx.fillStyle = '#3498DB';
        this.ctx.font = 'bold 12px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('O₂', width * 0.26, height * 0.44);
        this.drawArrow(width * 0.26, height * 0.46, width * 0.26, height * 0.56, '#3498DB', '', 6);

        // CO2
        this.ctx.fillStyle = '#E67E22';
        this.ctx.fillText('CO₂', width * 0.38, height * 0.67);
        this.drawArrow(width * 0.38, height * 0.64, width * 0.38, height * 0.54, '#E67E22', '', 6);

        // Red blood cell
        this.ctx.fillStyle = '#C0392B';
        this.ctx.beginPath();
        this.ctx.ellipse(width * 0.52, height * 0.55, 10, 6, 0, 0, Math.PI * 2);
        this.ctx.fill();

        // Labels
        this.ctx.font = '9px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'left';
        this.ctx.fillText('Alveolus (air)',  width * 0.56, height * 0.38);
        this.ctx.fillText('Capillary',       width * 0.56, height * 0.58);
        this.ctx.fillText('Red blood cell',  width * 0.56, height * 0.50);

        this.ctx.font = '9px Arial';
        this.ctx.fillStyle = '#34495E';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('O₂ diffuses into blood', width / 2, height * 0.88);
        this.ctx.fillText('CO₂ diffuses out',       width / 2, height * 0.94);

        this.ctx.restore();
    }

    // ── Alveolar structure inset ─────────────────────────────────────────────
    drawAlveolarStructureInset(width, height) {
        this.ctx.font = 'bold 12px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Alveolar Structure', width / 2, 18);

        const alveoli = [
            { x: 0.25, y: 0.42, r: 0.12 },
            { x: 0.50, y: 0.52, r: 0.15 },
            { x: 0.72, y: 0.40, r: 0.10 }
        ];
        alveoli.forEach(a => {
            this.ctx.strokeStyle = '#FFB6D9';
            this.ctx.fillStyle = 'rgba(255,182,217,0.15)';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.arc(width * a.x, height * a.y, width * a.r, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.stroke();
            // Type I cells
            for (let i = 0; i < 6; i++) {
                const ang = (i / 6) * Math.PI * 2;
                this.ctx.fillStyle = 'rgba(255,182,217,0.5)';
                this.ctx.beginPath();
                this.ctx.arc(width * a.x + Math.cos(ang) * width * a.r,
                             height * a.y + Math.sin(ang) * width * a.r, 3, 0, Math.PI * 2);
                this.ctx.fill();
            }
        });

        // Type II (surfactant)
        this.ctx.fillStyle = '#9B59B6';
        this.ctx.beginPath();
        this.ctx.arc(width * 0.50, height * 0.42, 6, 0, Math.PI * 2);
        this.ctx.fill();

        // Capillary network
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.08, height * 0.38);
        this.ctx.quadraticCurveTo(width * 0.50, height * 0.28, width * 0.92, height * 0.38);
        this.ctx.stroke();

        this.ctx.font = '9px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'left';
        this.ctx.fillText('Type I Pneumocyte',                width * 0.06, height * 0.74);
        this.ctx.fillText('Type II (surfactant)',             width * 0.06, height * 0.82);
        this.ctx.fillText('Capillary network',                width * 0.06, height * 0.90);
    }

    // ── Surfactant function inset ────────────────────────────────────────────
    drawSurfactantFunctionInset(width, height) {
        this.ctx.font = 'bold 12px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Surfactant Function', width / 2, 18);

        // Without
        this.ctx.font = 'bold 10px Arial';
        this.ctx.fillText('Without', width * 0.25, 36);
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.fillStyle = 'rgba(231,76,60,0.2)';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(width * 0.25, height * 0.55, width * 0.14, 0, Math.PI * 2);
        this.ctx.fill(); this.ctx.stroke();
        for (let i = 0; i < 8; i++) {
            const ang = (i / 8) * Math.PI * 2;
            this.drawArrow(
                width * 0.25 + Math.cos(ang) * width * 0.17,
                height * 0.55 + Math.sin(ang) * width * 0.17,
                width * 0.25 + Math.cos(ang) * width * 0.11,
                height * 0.55 + Math.sin(ang) * width * 0.11,
                '#E74C3C', '', 4
            );
        }

        // With
        this.ctx.fillText('With Surfactant', width * 0.70, 36);
        this.ctx.strokeStyle = '#27AE60';
        this.ctx.fillStyle = 'rgba(39,174,96,0.2)';
        this.ctx.beginPath();
        this.ctx.arc(width * 0.70, height * 0.55, width * 0.18, 0, Math.PI * 2);
        this.ctx.fill(); this.ctx.stroke();
        this.ctx.strokeStyle = '#3498DB';
        this.ctx.setLineDash([2, 2]);
        this.ctx.beginPath();
        this.ctx.arc(width * 0.70, height * 0.55, width * 0.20, 0, Math.PI * 2);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        this.ctx.font = '9px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Reduces surface tension,', width / 2, height * 0.82);
        this.ctx.fillText('prevents alveolar collapse', width / 2, height * 0.88);
    }

    // ── Oxygen-haemoglobin inset ─────────────────────────────────────────────
    drawOxygenHemoglobinInset(width, height) {
        this.ctx.font = 'bold 12px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('O₂–Haemoglobin Curve', width / 2, 18);

        // S-curve axes
        const cSX = width * 0.18, cSY = height * 0.72;
        const cW  = width * 0.64, cH  = height * 0.48;

        this.ctx.strokeStyle = '#34495E';
        this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.moveTo(cSX, cSY);
        this.ctx.lineTo(cSX + cW, cSY);
        this.ctx.moveTo(cSX, cSY);
        this.ctx.lineTo(cSX, cSY - cH);
        this.ctx.stroke();

        // Sigmoid
        this.ctx.strokeStyle = '#2980B9';
        this.ctx.lineWidth = 2.5;
        this.ctx.beginPath();
        for (let i = 0; i <= 30; i++) {
            const t   = i / 30;
            const sx  = cSX + t * cW;
            const sat = Math.pow(t, 2.8) / (Math.pow(t, 2.8) + Math.pow(0.5, 2.8));
            const sy  = cSY - sat * cH;
            i === 0 ? this.ctx.moveTo(sx, sy) : this.ctx.lineTo(sx, sy);
        }
        this.ctx.stroke();

        // Axis labels
        this.ctx.font = '9px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('pO₂ (mmHg)', cSX + cW / 2, cSY + 14);
        this.ctx.save();
        this.ctx.translate(cSX - 14, cSY - cH / 2);
        this.ctx.rotate(-Math.PI / 2);
        this.ctx.fillText('% Saturation', 0, 0);
        this.ctx.restore();

        // Hb molecule diagram (top-left)
        const hbX = width * 0.14, hbY = height * 0.30, sub = width * 0.065;
        [[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([dx, dy], i) => {
            const sx = hbX + dx * sub * 0.9, sy = hbY + dy * sub * 0.9;
            this.ctx.fillStyle = '#C0392B';
            this.ctx.beginPath();
            this.ctx.arc(sx, sy, sub, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.fillStyle = '#8B4513';
            this.ctx.beginPath();
            this.ctx.arc(sx, sy, sub * 0.3, 0, Math.PI * 2);
            this.ctx.fill();
            if (i < 3) {
                this.ctx.fillStyle = '#3498DB';
                this.ctx.font = 'bold 9px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('O₂', sx + sub * 0.55, sy - sub * 0.75);
            }
        });
        this.ctx.font = '9px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Hb (4 subunits)', hbX, hbY + sub * 1.6);
    }


    // ═══════════════════════════════════════════════════════════════════════════
// PLANT INSET IMPLEMENTATIONS
// ═══════════════════════════════════════════════════════════════════════════

_insetTitle(title, width) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(title, width / 2, 16);
}

drawChloroplastDetailInset(width, height) {
    this._insetTitle('Chloroplast Ultrastructure', width);
    const cx = width * 0.50, cy = height * 0.54;
    // Outer envelope
    this.ctx.fillStyle = '#E8F5E9';
    this.ctx.strokeStyle = '#2E7D32';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.ellipse(cx, cy, width * 0.42, height * 0.36, 0, 0, Math.PI * 2);
    this.ctx.fill(); this.ctx.stroke();
    // Stroma
    this.ctx.fillStyle = '#C8E6C9';
    this.ctx.beginPath();
    this.ctx.ellipse(cx, cy, width * 0.38, height * 0.30, 0, 0, Math.PI * 2);
    this.ctx.fill();
    // Granum stack (mini)
    for (let i = 0; i < 4; i++) {
        this.ctx.fillStyle = i % 2 === 0 ? '#2E7D32' : '#388E3C';
        this.ctx.fillRect(cx - width * 0.12, cy - height * 0.12 + i * height * 0.06, width * 0.24, height * 0.045);
    }
    // Labels
    this.ctx.fillStyle = '#1B5E20';
    this.ctx.font = '9px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Granum', cx, cy + height * 0.12);
    this.ctx.fillText('Stroma', cx + width * 0.26, cy);
    this.ctx.fillText('Outer membrane', cx, cy - height * 0.38);
    this.ctx.textAlign = 'left';
}
drawTurgorPressureInset(width, height) {
    this._insetTitle('Turgor Pressure & Guard Cells', width);
    const drawGC = (bx, by, isOpen, label) => {
        const gcW = width * 0.16, gcH = height * 0.32;
        this.ctx.fillStyle = '#66BB6A';
        this.ctx.strokeStyle = '#2E7D32';
        this.ctx.lineWidth = 1.5;
        if (isOpen) {
            this.ctx.beginPath();
            this.ctx.ellipse(bx - gcW * 0.6, by, gcW * 0.38, gcH * 0.5, -0.35, 0, Math.PI * 2);
            this.ctx.fill(); this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.ellipse(bx + gcW * 0.6, by, gcW * 0.38, gcH * 0.5, 0.35, 0, Math.PI * 2);
            this.ctx.fill(); this.ctx.stroke();
            this.ctx.fillStyle = '#000';
            this.ctx.beginPath();
            this.ctx.ellipse(bx, by, gcW * 0.25, gcH * 0.35, 0, 0, Math.PI * 2);
            this.ctx.fill();
        } else {
            this.ctx.beginPath();
            this.ctx.ellipse(bx - gcW * 0.35, by, gcW * 0.35, gcH * 0.5, 0, 0, Math.PI * 2);
            this.ctx.fill(); this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.ellipse(bx + gcW * 0.35, by, gcW * 0.35, gcH * 0.5, 0, 0, Math.PI * 2);
            this.ctx.fill(); this.ctx.stroke();
        }
        this.ctx.fillStyle = '#000';
        this.ctx.font = '9px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(label, bx, by + gcH * 0.6);
        this.ctx.textAlign = 'left';
    };
    drawGC(width * 0.28, height * 0.50, false, 'Closed\n(low turgor)');
    drawGC(width * 0.72, height * 0.50, true,  'Open\n(high turgor)');
    // K+ arrows
    this.ctx.fillStyle = '#9C27B0';
    this.ctx.font = '9px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('K⁺ out', width * 0.28, height * 0.82);
    this.ctx.fillText('K⁺ in', width * 0.72, height * 0.82);
    this.ctx.textAlign = 'left';
}

drawCohesionTensionInset(width, height) {
    this._insetTitle('Cohesion–Tension Theory', width);
    const cx = width * 0.5;
    // Xylem tube
    this.ctx.fillStyle = '#DCEDC8';
    this.ctx.strokeStyle = '#558B2F';
    this.ctx.lineWidth = 2;
    this.ctx.fillRect(cx - width * 0.08, height * 0.12, width * 0.16, height * 0.70);
    this.ctx.strokeRect(cx - width * 0.08, height * 0.12, width * 0.16, height * 0.70);
    // Water column
    this.ctx.fillStyle = '#90CAF9';
    this.ctx.fillRect(cx - width * 0.06, height * 0.14, width * 0.12, height * 0.64);
    // Cohesion bonds between molecules
    for (let i = 0; i < 6; i++) {
        const my = height * (0.20 + i * 0.10);
        this.ctx.fillStyle = '#1565C0';
        this.ctx.beginPath();
        this.ctx.arc(cx, my, width * 0.02, 0, Math.PI * 2);
        this.ctx.fill();
        if (i > 0) {
            this.ctx.strokeStyle = '#42A5F5';
            this.ctx.lineWidth = 1;
            this.ctx.setLineDash([2, 2]);
            this.ctx.beginPath();
            this.ctx.moveTo(cx, my - width * 0.02);
            this.ctx.lineTo(cx, my - height * 0.10 + width * 0.02);
            this.ctx.stroke();
            this.ctx.setLineDash([]);
        }
    }
    // Transpiration arrow at top
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(cx, height * 0.14);
    this.ctx.lineTo(cx, height * 0.04);
    this.ctx.stroke();
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.font = '9px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Transpiration pull ↑', cx, height * 0.94);
    this.ctx.fillText('H-bonds = cohesion', cx - width * 0.22, height * 0.50);
    this.ctx.textAlign = 'left';
}

drawZSchemeInset(width, height) {
    this._insetTitle('Z-Scheme (Light Reactions)', width);
    const data = [
        { x: 0.10, y: 0.75, label: 'H₂O', color: '#2196F3'  },
        { x: 0.25, y: 0.65, label: 'P680', color: '#E53935'  },
        { x: 0.38, y: 0.30, label: 'PQ',   color: '#FB8C00'  },
        { x: 0.52, y: 0.48, label: 'Cyt b₆f', color: '#6D4C41' },
        { x: 0.65, y: 0.20, label: 'P700', color: '#E53935'  },
        { x: 0.80, y: 0.10, label: 'Fd→NADPH', color: '#388E3C' }
    ];
    this.ctx.strokeStyle = '#546E7A';
    this.ctx.lineWidth = 1.5;
    data.forEach((d, i) => {
        if (i > 0) {
            const prev = data[i - 1];
            this.ctx.beginPath();
            this.ctx.moveTo(prev.x * width, height * (prev.y + 0.04));
            this.ctx.lineTo(d.x * width, height * (d.y + 0.04));
            this.ctx.stroke();
        }
        this.ctx.fillStyle = d.color;
        this.ctx.beginPath();
        this.ctx.arc(d.x * width, d.y * height, width * 0.03, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.fillStyle = '#000';
        this.ctx.font = '8px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(d.label, d.x * width, d.y * height + height * 0.08);
    });
    // Photon arrows
    ['P680', 'P700'].forEach((_, i) => {
        const px = (0.25 + i * 0.40) * width;
        const py = (0.65 - i * 0.45) * height;
        this.ctx.fillStyle = '#FFD700';
        this.ctx.font = '10px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('hν', px, py - height * 0.06);
        this.drawArrow(px, py - height * 0.04, px, py, '#FFD700', '', 5);
    });
    this.ctx.fillStyle = '#4CAF50';
    this.ctx.font = '9px Arial';
    this.ctx.fillText('O₂', width * 0.10, height * 0.88);
    this.ctx.textAlign = 'left';
}

drawAuxinDoseResponseInset(width, height) {
    this._insetTitle('Auxin Dose–Response', width);
    const gx = width * 0.12, gy = height * 0.20;
    const gw = width * 0.80, gh = height * 0.62;

    // Axes
    this.ctx.strokeStyle = '#333';
    this.ctx.lineWidth = 1.5;
    this.ctx.beginPath();
    this.ctx.moveTo(gx, gy); this.ctx.lineTo(gx, gy + gh);
    this.ctx.lineTo(gx + gw, gy + gh);
    this.ctx.stroke();

    // Stem curve (peaks high, stays high)
    this.ctx.strokeStyle = '#4CAF50';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    for (let i = 0; i <= 40; i++) {
        const px = gx + (i / 40) * gw;
        const t = i / 40;
        const py = gy + gh - gh * Math.min(0.9, 4 * t * (1 - t) * 0.9 + (t < 0.5 ? 0 : (t - 0.5) * -0.6));
        i === 0 ? this.ctx.moveTo(px, py) : this.ctx.lineTo(px, py);
    }
    this.ctx.stroke();

    // Root curve (peaks lower, inhibited at high conc)
    this.ctx.strokeStyle = '#F44336';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    for (let i = 0; i <= 40; i++) {
        const px = gx + (i / 40) * gw;
        const t = i / 40;
        const py = gy + gh - gh * Math.max(-0.1, 0.5 * Math.sin(t * Math.PI * 0.7) - t * 0.4);
        i === 0 ? this.ctx.moveTo(px, py) : this.ctx.lineTo(px, py);
    }
    this.ctx.stroke();

    // Labels
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#4CAF50';
    this.ctx.fillText('Stem', gx + gw * 0.55, gy + gh * 0.15);
    this.ctx.fillStyle = '#F44336';
    this.ctx.fillText('Root', gx + gw * 0.30, gy + gh * 0.55);
    this.ctx.fillStyle = '#333';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('[Auxin] →', gx + gw / 2, gy + gh + height * 0.08);
    this.ctx.save();
    this.ctx.translate(gx - width * 0.08, gy + gh / 2);
    this.ctx.rotate(-Math.PI / 2);
    this.ctx.fillText('Growth response', 0, 0);
    this.ctx.restore();
    this.ctx.textAlign = 'left';
}
drawDoubleFertilisationInset(width, height) {
    this._insetTitle('Double Fertilisation', width);
    // Pollen tube
    this.ctx.strokeStyle = '#FF9800';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.10, height * 0.15);
    this.ctx.lineTo(width * 0.10, height * 0.60);
    this.ctx.stroke();
    // Two sperm nuclei
    ['#E91E63', '#9C27B0'].forEach((c, i) => {
        this.ctx.fillStyle = c;
        this.ctx.beginPath();
        this.ctx.arc(width * 0.10, height * (0.45 + i * 0.12), width * 0.04, 0, Math.PI * 2);
        this.ctx.fill();
    });
    // Embryo sac
    this.ctx.fillStyle = 'rgba(200,230,200,0.4)';
    this.ctx.strokeStyle = '#2E7D32';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.ellipse(width * 0.62, height * 0.55, width * 0.32, height * 0.35, 0, 0, Math.PI * 2);
    this.ctx.fill(); this.ctx.stroke();
    // Egg cell
    this.ctx.fillStyle = '#E91E63';
    this.ctx.beginPath();
    this.ctx.arc(width * 0.52, height * 0.55, width * 0.06, 0, Math.PI * 2);
    this.ctx.fill();
    // Polar nuclei
    this.ctx.fillStyle = '#9C27B0';
    [0.66, 0.74].forEach(px => {
        this.ctx.beginPath();
        this.ctx.arc(px * width, height * 0.55, width * 0.04, 0, Math.PI * 2);
        this.ctx.fill();
    });
    // Fusion arrows
    this.ctx.strokeStyle = '#E91E63';
    this.ctx.lineWidth = 1.5;
    this.ctx.setLineDash([3, 2]);
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.14, height * 0.47);
    this.ctx.lineTo(width * 0.46, height * 0.53);
    this.ctx.stroke();
    this.ctx.strokeStyle = '#9C27B0';
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.14, height * 0.57);
    this.ctx.lineTo(width * 0.62, height * 0.55);
    this.ctx.stroke();
    this.ctx.setLineDash([]);
    this.ctx.fillStyle = '#333';
    this.ctx.font = '9px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('→ Zygote (2n)', width * 0.52, height * 0.80);
    this.ctx.fillText('→ Endosperm (3n)', width * 0.70, height * 0.88);
    this.ctx.textAlign = 'left';
}
drawPhytochromeCycleInset(width, height) {
    this._insetTitle('Phytochrome Cycle (Pr / Pfr)', width);
    const cx = width * 0.5, cy = height * 0.50;
    const r = Math.min(width, height) * 0.28;
    // Pr circle
    this.ctx.fillStyle = '#E53935';
    this.ctx.strokeStyle = '#B71C1C';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(cx - r, cy, r * 0.55, 0, Math.PI * 2);
    this.ctx.fill(); this.ctx.stroke();
    this.ctx.fillStyle = '#FFF';
    this.ctx.font = 'bold 10px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Pr', cx - r, cy + 4);
    // Pfr circle
    this.ctx.fillStyle = '#1565C0';
    this.ctx.strokeStyle = '#0D47A1';
    this.ctx.beginPath();
    this.ctx.arc(cx + r, cy, r * 0.55, 0, Math.PI * 2);
    this.ctx.fill(); this.ctx.stroke();
    this.ctx.fillStyle = '#FFF';
    this.ctx.fillText('Pfr', cx + r, cy + 4);
    // Arrows
    this.ctx.strokeStyle = '#FF6F00'; this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(cx - r * 0.4, cy - r * 0.35);
    this.ctx.quadraticCurveTo(cx, cy - r * 0.8, cx + r * 0.4, cy - r * 0.35);
    this.ctx.stroke();
    this.ctx.fillStyle = '#FF6F00';
    this.ctx.font = '9px Arial';
    this.ctx.fillText('Red light (660nm)', cx, cy - r * 0.85);
    this.ctx.strokeStyle = '#880E4F'; this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(cx + r * 0.4, cy + r * 0.35);
    this.ctx.quadraticCurveTo(cx, cy + r * 0.8, cx - r * 0.4, cy + r * 0.35);
    this.ctx.stroke();
    this.ctx.fillStyle = '#880E4F';
    this.ctx.fillText('Far-red (730nm) / Dark', cx, cy + r * 1.0);
    this.ctx.fillStyle = '#1565C0';
    this.ctx.fillText('Pfr → flowering response', cx, height * 0.90);
    this.ctx.textAlign = 'left';
}
drawRhizobiumNoduleInset(width, height) {
    this._insetTitle('Rhizobium Root Nodule', width);
    // Root section
    this.ctx.fillStyle = '#C8A050';
    this.ctx.strokeStyle = '#8B6914';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.rect(width * 0.10, height * 0.25, width * 0.80, height * 0.20);
    this.ctx.fill(); this.ctx.stroke();
    if (true) {
        this.ctx.fillStyle = '#8B6914';
        this.ctx.font = '9px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Root cortex', width / 2, height * 0.30);
    }
    // Nodule
    this.ctx.fillStyle = '#FF8A65';
    this.ctx.strokeStyle = '#BF360C';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.ellipse(width * 0.50, height * 0.62, width * 0.22, height * 0.22, 0, 0, Math.PI * 2);
    this.ctx.fill(); this.ctx.stroke();
    // Bacteroids inside
    this.ctx.fillStyle = '#6D4C41';
    for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2;
        this.ctx.beginPath();
        this.ctx.ellipse(width * 0.50 + Math.cos(a) * width * 0.12,
                         height * 0.62 + Math.sin(a) * height * 0.10,
                         width * 0.025, height * 0.020, a, 0, Math.PI * 2);
        this.ctx.fill();
    }
    // N2 → NH3 label
    this.ctx.fillStyle = '#FFF';
    this.ctx.font = 'bold 9px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('N₂ → NH₃', width * 0.50, height * 0.64);
    this.ctx.fillStyle = '#333';
    this.ctx.font = '9px Arial';
    this.ctx.fillText('Nodule (Rhizobium)', width / 2, height * 0.88);
    this.ctx.textAlign = 'left';
}
drawC3vsC4Inset(width, height) {
    this._insetTitle('C3 vs C4 vs CAM', width);
    const headers = ['Feature', 'C3', 'C4', 'CAM'];
    const rows = [
        ['First product', '3-PGA', 'OAA (4C)', 'OAA (4C)'],
        ['Primary enzyme', 'RuBisCO', 'PEP carbox.', 'PEP carbox.'],
        ['CO₂ separation', 'None', 'Spatial', 'Temporal'],
        ['Stomata',        'Day open', 'Day open', 'Night open'],
        ['Example',        'Wheat', 'Maize', 'Cactus'],
    ];
    const colW = width / 4, rowH = height * 0.13;
    const startY = height * 0.18;
    // Header row
    this.ctx.fillStyle = '#37474F';
    this.ctx.font = 'bold 8px Arial';
    this.ctx.textAlign = 'center';
    headers.forEach((h, i) => this.ctx.fillText(h, colW * i + colW / 2, startY));
    // Data rows
    rows.forEach((row, ri) => {
        const ry = startY + (ri + 1) * rowH;
        this.ctx.fillStyle = ri % 2 === 0 ? '#F5F5F5' : '#EEEEEE';
        this.ctx.fillRect(0, ry - rowH * 0.8, width, rowH * 0.9);
        this.ctx.fillStyle = '#333';
        this.ctx.font = '8px Arial';
        row.forEach((cell, ci) => {
            this.ctx.fillText(cell, colW * ci + colW / 2, ry - rowH * 0.15);
        });
    });
    this.ctx.textAlign = 'left';
}
drawAleuroneAmylaseInset(width, height) {
    this._insetTitle('GA: Aleurone → Amylase', width);
    const steps = [
        { label: 'GA released\nfrom embryo', color: '#44AA44', y: 0.18 },
        { label: 'GA binds aleurone\ncell receptor', color: '#66BB66', y: 0.36 },
        { label: 'Amylase genes\nactivated (DELLA)', color: '#88CC44', y: 0.54 },
        { label: 'Amylase secreted\ninto endosperm', color: '#AADD22', y: 0.72 },
        { label: 'Starch → sugars\nfor seedling growth', color: '#FFD700', y: 0.88 },
    ];
    steps.forEach((s, i) => {
        this.ctx.fillStyle = s.color;
        this.ctx.strokeStyle = 'rgba(0,0,0,0.2)';
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.roundRect(width * 0.08, s.y * height - height * 0.06, width * 0.84, height * 0.10, 4);
        this.ctx.fill(); this.ctx.stroke();
        this.ctx.fillStyle = '#000';
        this.ctx.font = '8px Arial';
        this.ctx.textAlign = 'center';
        s.label.split('\n').forEach((line, li) => {
            this.ctx.fillText(line, width / 2, s.y * height - height * 0.01 + li * height * 0.04);
        });
        if (i < steps.length - 1) {
            this.ctx.fillStyle = '#666';
            this.ctx.fillText('↓', width / 2, (s.y + 0.06) * height);
        }
    });
    this.ctx.textAlign = 'left';
}
drawCAMAcidGraphInset(width, height) {
    this._insetTitle('CAM: Malate Levels', width);
    const gx = width * 0.12, gy = height * 0.18;
    const gw = width * 0.80, gh = height * 0.58;
    // Axes
    this.ctx.strokeStyle = '#333';
    this.ctx.lineWidth = 1.5;
    this.ctx.beginPath();
    this.ctx.moveTo(gx, gy); this.ctx.lineTo(gx, gy + gh);
    this.ctx.lineTo(gx + gw, gy + gh);
    this.ctx.stroke();
    // Night region
    this.ctx.fillStyle = 'rgba(10,10,30,0.15)';
    this.ctx.fillRect(gx, gy, gw * 0.5, gh);
    // Day region
    this.ctx.fillStyle = 'rgba(255,220,50,0.10)';
    this.ctx.fillRect(gx + gw * 0.5, gy, gw * 0.5, gh);
    // Malate curve (rises at night, drops during day)
    this.ctx.strokeStyle = '#4488CC';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    for (let i = 0; i <= 40; i++) {
        const t = i / 40;
        const px = gx + t * gw;
        const py = gy + gh - gh * (t < 0.5 ? t * 1.8 : (1 - t) * 1.8);
        i === 0 ? this.ctx.moveTo(px, py) : this.ctx.lineTo(px, py);
    }
    this.ctx.stroke();
    // Labels
    this.ctx.fillStyle = '#333';
    this.ctx.font = '9px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Night', gx + gw * 0.25, gy + gh + height * 0.06);
    this.ctx.fillText('Day', gx + gw * 0.75, gy + gh + height * 0.06);
    this.ctx.fillStyle = '#4488CC';
    this.ctx.fillText('[Malate]', gx + gw * 0.20, gy + height * 0.06);
    this.ctx.fillText('CO₂ fixed at night', width / 2, height * 0.88);
    this.ctx.fillText('CO₂ released for Calvin in day', width / 2, height * 0.94);
    this.ctx.textAlign = 'left';
}
drawPericarpLayersInset(width, height) {
    this._insetTitle('Pericarp Layers (Drupe)', width);
    const cx = width * 0.45, cy = height * 0.52;
    const layers = [
        { r: 0.36, color: '#CC3366', label: 'Exocarp (skin)'    },
        { r: 0.28, color: '#FF6699', label: 'Mesocarp (flesh)'  },
        { r: 0.16, color: '#AA5522', label: 'Endocarp (stone)'  },
        { r: 0.08, color: '#CCAA44', label: 'Seed'              },
    ];
    layers.forEach(l => {
        this.ctx.fillStyle = l.color;
        this.ctx.beginPath();
        this.ctx.arc(cx, cy, l.r * width, 0, Math.PI * 2);
        this.ctx.fill();
    });
    // Labels with lines
    layers.forEach((l, i) => {
        const lx = cx + l.r * width + 4, ly = cy - (layers.length / 2 - i) * height * 0.14;
        this.ctx.strokeStyle = l.color;
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.moveTo(cx + l.r * width, cy);
        this.ctx.lineTo(lx, ly);
        this.ctx.stroke();
        this.ctx.fillStyle = '#333';
        this.ctx.font = '9px Arial';
        this.ctx.fillText(l.label, lx + 2, ly + 3);
    });
}
drawApoplastSymplastInset(width, height) {
    this._insetTitle('Apoplast & Symplast Pathways', width);
    const cellSize = width * 0.28, cellH = height * 0.45;
    const startX = width * 0.06;
    const colors = ['#C8E6C9', '#A5D6A7', '#81C784'];
    for (let i = 0; i < 3; i++) {
        const cx = startX + i * (cellSize + width * 0.04);
        this.ctx.fillStyle = colors[i];
        this.ctx.strokeStyle = '#388E3C';
        this.ctx.lineWidth = 2;
        this.ctx.fillRect(cx, height * 0.24, cellSize, cellH);
        this.ctx.strokeRect(cx, height * 0.24, cellSize, cellH);
        // Vacuole
        this.ctx.fillStyle = '#DCEDC8';
        this.ctx.fillRect(cx + cellSize * 0.2, height * 0.32, cellSize * 0.6, cellH * 0.55);
    }
    // Symplast path (through cytoplasm, plasmodesmata)
    this.ctx.strokeStyle = '#E91E63';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(startX + cellSize * 0.5, height * 0.50);
    for (let i = 0; i < 2; i++) {
        const jx = startX + (i + 1) * (cellSize + width * 0.04);
        this.ctx.lineTo(jx - 2, height * 0.50);
        this.ctx.moveTo(jx + 2, height * 0.50);
        this.ctx.lineTo(jx + cellSize * 0.5, height * 0.50);
    }
    this.ctx.stroke();
    // Apoplast path (around cells, cell walls)
    this.ctx.strokeStyle = '#1565C0';
    this.ctx.lineWidth = 2;
    this.ctx.setLineDash([4, 3]);
    this.ctx.beginPath();
    this.ctx.moveTo(startX, height * 0.24);
    this.ctx.lineTo(width * 0.94, height * 0.24);
    this.ctx.stroke();
    this.ctx.setLineDash([]);
    // Legend
    this.ctx.font = '9px Arial';
    this.ctx.fillStyle = '#E91E63';
    this.ctx.fillText('— Symplast (through cytoplasm)', width * 0.05, height * 0.82);
    this.ctx.fillStyle = '#1565C0';
    this.ctx.fillText('-- Apoplast (cell walls)', width * 0.05, height * 0.92);
}
drawSucroseLoadingInset(width, height) {
    this._insetTitle('Phloem Loading (Sucrose)', width);
    // Mesophyll → companion → sieve tube
    const cells = [
        { label: 'Mesophyll', color: '#A5D6A7', x: 0.05 },
        { label: 'Companion', color: '#FFCC80', x: 0.38 },
        { label: 'Sieve tube', color: '#90EE90', x: 0.67 },
    ];
    cells.forEach(c => {
        this.ctx.fillStyle = c.color;
        this.ctx.strokeStyle = '#555';
        this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.roundRect(c.x * width, height * 0.24, width * 0.28, height * 0.48, 6);
        this.ctx.fill(); this.ctx.stroke();
        this.ctx.fillStyle = '#333';
        this.ctx.font = '8px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(c.label, (c.x + 0.14) * width, height * 0.80);
    });
    // H⁺ symport arrow
    this.ctx.strokeStyle = '#9C27B0';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.33, height * 0.48);
    this.ctx.lineTo(width * 0.38, height * 0.48);
    this.ctx.stroke();
    this.ctx.fillStyle = '#9C27B0';
    this.ctx.font = '9px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('H⁺/sucrose\nsymporter', width * 0.525, height * 0.44);
    this.ctx.fillText('High pressure builds', width * 0.80, height * 0.88);
    // Sucrose dots in sieve tube
    this.ctx.fillStyle = '#FF9800';
    [[0.72, 0.38],[0.78, 0.52],[0.84, 0.44]].forEach(([sx, sy]) => {
        this.ctx.beginPath();
        this.ctx.arc(sx * width, sy * height, width * 0.025, 0, Math.PI * 2);
        this.ctx.fill();
    });
    this.ctx.textAlign = 'left';
}
drawRootHairDetailInset(width, height) {
    this._insetTitle('Root Hair Cell', width);
    // Root surface
    this.ctx.fillStyle = '#D2B48C';
    this.ctx.fillRect(0, height * 0.34, width, height * 0.20);
    // Cell body
    this.ctx.fillStyle = '#C8E6C9';
    this.ctx.strokeStyle = '#388E3C';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.rect(width * 0.20, height * 0.36, width * 0.60, height * 0.16);
    this.ctx.fill(); this.ctx.stroke();
    // Root hair extension
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.48, height * 0.36);
    this.ctx.bezierCurveTo(width * 0.42, height * 0.10, width * 0.56, height * 0.06, width * 0.58, height * 0.10);
    this.ctx.bezierCurveTo(width * 0.60, height * 0.20, width * 0.56, height * 0.35, width * 0.52, height * 0.36);
    this.ctx.fill(); this.ctx.stroke();
    // Nucleus
    this.ctx.fillStyle = '#8D6E63';
    this.ctx.beginPath();
    this.ctx.arc(width * 0.38, height * 0.44, width * 0.05, 0, Math.PI * 2);
    this.ctx.fill();
    // Vacuole
    this.ctx.fillStyle = 'rgba(100,150,250,0.3)';
    this.ctx.beginPath();
    this.ctx.ellipse(width * 0.60, height * 0.44, width * 0.12, height * 0.06, 0, 0, Math.PI * 2);
    this.ctx.fill();
    // Water arrows into hair
    this.ctx.strokeStyle = '#2196F3';
    this.ctx.lineWidth = 1.5;
    [[0.30, 0.28], [0.46, 0.22], [0.62, 0.26]].forEach(([ax, ay]) => {
        this.ctx.beginPath();
        this.ctx.moveTo(ax * width, ay * height);
        this.ctx.lineTo(ax * width + width * 0.02, (ay + 0.06) * height);
        this.ctx.stroke();
    });
    this.ctx.fillStyle = '#333';
    this.ctx.font = '9px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Root hair (large surface area)', width / 2, height * 0.92);
    this.ctx.fillStyle = '#2196F3';
    this.ctx.fillText('H₂O / ions ↓', width * 0.47, height * 0.18);
    this.ctx.textAlign = 'left';
}
drawAntherCrossSectionInset(width, height) {
    this._insetTitle('Anther Cross-Section', width);
    const cx = width * 0.50, cy = height * 0.50;
    // Four microsporangia
    const positions = [[-1,-1],[1,-1],[-1,1],[1,1]];
    positions.forEach(([dx, dy]) => {
        this.ctx.fillStyle = '#F57C00';
        this.ctx.strokeStyle = '#E65100';
        this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.ellipse(cx + dx * width * 0.15, cy + dy * height * 0.12,
                         width * 0.13, height * 0.10, 0, 0, Math.PI * 2);
        this.ctx.fill(); this.ctx.stroke();
        // Pollen grains inside
        this.ctx.fillStyle = '#FFD54F';
        for (let i = 0; i < 3; i++) {
            const a = (i / 3) * Math.PI * 2;
            this.ctx.beginPath();
            this.ctx.arc(cx + dx * width * 0.15 + Math.cos(a) * width * 0.04,
                         cy + dy * height * 0.12 + Math.sin(a) * height * 0.03,
                         width * 0.018, 0, Math.PI * 2);
            this.ctx.fill();
        }
    });
    // Connective tissue
    this.ctx.fillStyle = '#8D6E63';
    this.ctx.beginPath();
    this.ctx.rect(cx - width * 0.03, cy - height * 0.25, width * 0.06, height * 0.50);
    this.ctx.fill();
    this.ctx.fillStyle = '#333';
    this.ctx.font = '9px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('4 microsporangia', cx, height * 0.90);
    this.ctx.fillText('Pollen grains', cx, height * 0.96);
    this.ctx.textAlign = 'left';
}
drawSeedAnatomyInset(width, height) {
    this._insetTitle('Dicot Seed Anatomy', width);
    const cx = width * 0.45, cy = height * 0.52;
    // Seed coat (testa)
    this.ctx.fillStyle = '#8D6E63';
    this.ctx.strokeStyle = '#5D4037';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.ellipse(cx, cy, width * 0.38, height * 0.40, 0, 0, Math.PI * 2);
    this.ctx.fill(); this.ctx.stroke();
    // Cotyledons (2)
    this.ctx.fillStyle = '#A5D6A7';
    this.ctx.strokeStyle = '#388E3C';
    this.ctx.lineWidth = 1.5;
    this.ctx.beginPath();
    this.ctx.ellipse(cx - width * 0.12, cy, width * 0.16, height * 0.30, -0.2, 0, Math.PI * 2);
    this.ctx.fill(); this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.ellipse(cx + width * 0.12, cy, width * 0.16, height * 0.30, 0.2, 0, Math.PI * 2);
    this.ctx.fill(); this.ctx.stroke();
    // Embryo axis
    this.ctx.fillStyle = '#FFCC80';
    this.ctx.strokeStyle = '#F57C00';
    this.ctx.lineWidth = 1.5;
    this.ctx.beginPath();
    this.ctx.rect(cx - width * 0.03, cy - height * 0.12, width * 0.06, height * 0.28);
    this.ctx.fill(); this.ctx.stroke();
    // Labels
    const labels = [
        { text: 'Testa', x: cx + width * 0.42, y: cy - height * 0.10, color: '#5D4037' },
        { text: 'Cotyledon', x: cx + width * 0.42, y: cy, color: '#388E3C' },
        { text: 'Radicle', x: cx + width * 0.42, y: cy + height * 0.20, color: '#F57C00' },
    ];
    labels.forEach(l => {
        this.ctx.strokeStyle = 'rgba(0,0,0,0.2)';
        this.ctx.lineWidth = 0.5;
        this.ctx.beginPath();
        this.ctx.moveTo(l.x - 2, l.y);
        this.ctx.lineTo(cx + width * 0.38, l.y);
        this.ctx.stroke();
        this.ctx.fillStyle = l.color;
        this.ctx.font = '9px Arial';
        this.ctx.fillText(l.text, l.x, l.y + 3);
    });
}
drawGoldenAngleInset(width, height) {
    this._insetTitle('Fibonacci / Golden Angle (137.5°)', width);
    const cx = width * 0.45, cy = height * 0.54;
    const maxR = Math.min(width, height) * 0.34;
    // Draw spiral dots
    for (let i = 0; i < 34; i++) {
        const angle = i * 2.399;   // golden angle in radians
        const r = maxR * Math.sqrt(i / 34);
        const px = cx + Math.cos(angle) * r;
        const py = cy + Math.sin(angle) * r;
        const hue = (i * 10) % 360;
        this.ctx.fillStyle = `hsl(${hue},70%,45%)`;
        this.ctx.beginPath();
        this.ctx.arc(px, py, Math.max(2, maxR * 0.06 * (1 - i / 50)), 0, Math.PI * 2);
        this.ctx.fill();
    }
    // 137.5° arc
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 1.5;
    this.ctx.beginPath();
    this.ctx.arc(cx, cy, maxR * 0.20, 0, 2.399);
    this.ctx.stroke();
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.font = '9px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('137.5°', cx + maxR * 0.25, cy - maxR * 0.15);
    this.ctx.fillStyle = '#333';
    this.ctx.fillText('Minimises overlap → max light capture', width / 2, height * 0.92);
    this.ctx.textAlign = 'left';
}



    // ── Generic placeholder inset ────────────────────────────────────────────
    drawPlaceholderInset(width, height, insetType) {
        this.ctx.fillStyle = '#ECF0F1';
        this.ctx.fillRect(width * 0.1, height * 0.2, width * 0.8, height * 0.6);
        this.ctx.strokeStyle = '#BDC3C7';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(width * 0.1, height * 0.2, width * 0.8, height * 0.6);
        this.ctx.font = 'bold 13px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(`Inset: ${insetType}`, width / 2, height / 2 - 8);
        this.ctx.font = '11px Arial';
        this.ctx.fillText('(Implementation pending)', width / 2, height / 2 + 10);
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
                AnatomicalShapes.drawCopperReductionDiagram(this.ctx, width * 0.04, height * 0.04, width * 0.92, height * 0.92);
                break;
            case 'sugar-structures':
                this.drawSugarStructuresInset(width, height);
                break;

            // ── Iodine ───────────────────────────────────────────────────
            case 'amylose-helix':
                AnatomicalShapes.drawAmyloseHelix(this.ctx, width * 0.04, height * 0.04, width * 0.92, height * 0.92);
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
                AnatomicalShapes.drawPeptideBond(this.ctx, width * 0.04, height * 0.04, width * 0.92, height * 0.92);
                break;
            case 'copper-coordination':
                AnatomicalShapes.drawCopperCoordination(this.ctx, width * 0.04, height * 0.04, width * 0.92, height * 0.92);
                break;
            case 'protein-structure':
                this.drawProteinStructureInset(width, height);
                break;

            // ── Sudan ────────────────────────────────────────────────────
            case 'lipid-bilayer':
                this.drawLipidBilayerInset(width, height);
                break;
            case 'dye-solubility':
                AnatomicalShapes.drawDyeSolubility(this.ctx, width * 0.04, height * 0.04, width * 0.92, height * 0.92);
                break;
            case 'emulsion-detail':
                AnatomicalShapes.drawEmulsionDroplets(this.ctx, width * 0.04, height * 0.04, width * 0.92, height * 0.92);
                break;
            case 'triglyceride-structure':
                AnatomicalShapes.drawTriglyceride(this.ctx, width * 0.04, height * 0.04, width * 0.92, height * 0.92);
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
        AnatomicalShapes.drawBenedictsColourGradient(this.ctx,
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


export {BiochemicalDiagramRenderer};
