import { createCanvas } from '@napi-rs/canvas';
import fs from 'fs';
import { AnatomicalDiagramsRegistry} from './register.js';
import { AnatomicalShapes} from './anatomyshapes.js';



class AnatomicalDiagramRenderer {
    constructor(canvas = null) {
        this.defaultFont = 'Arial, sans-serif';
        this.defaultFontSize = 12;
        this.canvas = canvas;
        this.ctx = canvas ? canvas.getContext('2d') : null;
        this.currentFrame = 0;
    }

    // ─── Core entry point ────────────────────────────────────────────────────
    renderDiagram(diagramKey, x, y, width, height, options = {}) {
        const diagram = AnatomicalDiagramsRegistry.getDiagram(diagramKey);
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

    // ═══════════════════════════════════════════════════════════════════════════
    // HEART ANATOMY — STEP-BY-STEP RENDERER
    // Steps:
    //   1 — Overall outer heart shape (blank silhouette)
    //   2 — + Center dividing curve (septum / AV groove)
    //   3 — + Atria (top chambers) & Ventricles (bottom chambers)
    //   4 — + Major blood vessels & Valves
    //   5 — + Final crisp outline, full labels, blood-flow arrows
    // ═══════════════════════════════════════════════════════════════════════════
    renderHeartAnatomyDiagram(x, y, width, height, options = {}) {
        const {
            showLabels    = true,
            showBloodFlow = true,
            animate       = false,
            chamber       = 'wholeheart',
            drawingStep   = 5,
            showInset     = false,
            insetType     = 'cardiac-cycle'
        } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        // ── Title ──────────────────────────────────────────────────────────────
        this.ctx.font = 'bold 22px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';

        // ── Heart bounding box ─────────────────────────────────────────────────
        const hbX = width  * 0.20;
        const hbY = height * 0.10;
        const hbW = width  * 0.60;
        const hbH = height * 0.70;

        // Centre of heart shape (used for vessel placement & outline redraw)
        const cx = hbX + hbW * 0.50;
        const cy = hbY + hbH * 0.42;   // same ratio as drawOverallHeartShape

        // ── Individual chamber view (non-wholeheart) ───────────────────────────
        if (chamber !== 'wholeheart') {
            const state = chamber.includes('Atrium') ? 'neutral'
                        : chamber.includes('right')  ? 'deoxygenated'
                        :                               'oxygenated';
            AnatomicalShapes.drawHeart(this.ctx, hbX, hbY, hbW, hbH, chamber, state);

            if (showLabels) {
                const chamberNames = {
                    rightAtrium:    'Right Atrium',
                    rightVentricle: 'Right Ventricle',
                    leftAtrium:     'Left Atrium',
                    leftVentricle:  'Left Ventricle',
                    septum:         'Interventricular Septum'
                };
                this.addLabel(chamberNames[chamber] || chamber, width / 2, hbY - 4, '#2C3E50');

                if (chamber === 'rightAtrium') {
                    this.addLabel('Tricuspid Valve',      width * 0.50, hbY + hbH * 0.75, '#DAA520');
                    this.addLabel('SVC Opening',          width * 0.20, hbY + hbH * 0.28, '#8B4789', 'right');
                    this.addLabel('IVC Opening',          width * 0.20, hbY + hbH * 0.62, '#8B4789', 'right');
                } else if (chamber === 'rightVentricle') {
                    this.addLabel('Tricuspid Valve',      width * 0.50, hbY + hbH * 0.26, '#DAA520');
                    this.addLabel('Pulmonary Valve',      width * 0.50, hbY + hbH * 0.18, '#20B2AA');
                    this.addLabel('Papillary Muscles',    width * 0.22, hbY + hbH * 0.62, '#8B0000', 'right');
                    this.addLabel('Chordae Tendineae',    width * 0.44, hbY + hbH * 0.50, '#CD853F');
                } else if (chamber === 'leftAtrium') {
                    this.addLabel('Mitral Valve',               width * 0.50, hbY + hbH * 0.75, '#DAA520');
                    this.addLabel('Pulmonary Vein\nOpenings',   width * 0.20, hbY + hbH * 0.40, '#E74C3C', 'right');
                } else if (chamber === 'leftVentricle') {
                    this.addLabel('Mitral Valve',         width * 0.50, hbY + hbH * 0.26, '#DAA520');
                    this.addLabel('Aortic Valve',         width * 0.50, hbY + hbH * 0.18, '#20B2AA');
                    this.addLabel('Papillary Muscles',    width * 0.22, hbY + hbH * 0.62, '#8B0000', 'right');
                    this.addLabel('Thick Myocardium',     width * 0.80, hbY + hbH * 0.50, '#C0392B', 'left');
                }
            }

            if (showInset) {
                this.drawInset(width * 0.60, height * 0.02, width * 0.38, height * 0.25, insetType);
            }
            this.ctx.restore();
            return;
        }

        // ══════════════════════════════════════════════════════════════════════
        // WHOLE HEART STEP-BY-STEP BUILD
        // ══════════════════════════════════════════════════════════════════════
        const step = Math.max(1, Math.min(5, drawingStep));

        // Step label banner
        const stepLabels = [
            'Step 1 — Overall Heart Shape (Outer Outline)',
            'Step 2 — Center Dividing Curve',
            'Step 3 — Atria (Top Chambers) & Ventricles (Bottom Chambers)',
            'Step 4 — Major Blood Vessels & Valves',
            'Step 5 — Final Outline & Labels'
        ];
        this.ctx.font = 'bold 13px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(stepLabels[step - 1], width / 2, height * 0.06);

        // ── STEP 1 — Blank outer silhouette ───────────────────────────────────
        if (step >= 1) {
            AnatomicalShapes.drawHeart(this.ctx, hbX, hbY, hbW, hbH, 'outline');
        }

        // ── STEP 2 — Center dividing curve (septum + AV groove) ───────────────
        if (step >= 2) {
            this.ctx.save();
            this.ctx.strokeStyle = '#8B0000';
            this.ctx.lineWidth = 2.5;

            // Vertical interventricular / interatrial dividing curve
            this.ctx.beginPath();
            this.ctx.moveTo(cx, hbY + hbH * 0.10);
            this.ctx.bezierCurveTo(
                cx + hbW * 0.05, hbY + hbH * 0.28,
                cx + hbW * 0.03, hbY + hbH * 0.52,
                cx,              hbY + hbH * 0.88
            );
            this.ctx.stroke();

            // Atrioventricular (coronary) groove — horizontal divider
            this.ctx.beginPath();
            this.ctx.moveTo(hbX + hbW * 0.14, hbY + hbH * 0.40);
            this.ctx.bezierCurveTo(
                hbX + hbW * 0.35, hbY + hbH * 0.44,
                hbX + hbW * 0.65, hbY + hbH * 0.44,
                hbX + hbW * 0.86, hbY + hbH * 0.40
            );
            this.ctx.stroke();

            if (showLabels) {
                this.addLabel('Septum',    cx + 8,               hbY + hbH * 0.52, '#8B0000', 'left');
                this.addLabel('AV Groove', hbX + hbW * 0.88 + 4, hbY + hbH * 0.42, '#8B0000', 'left');
            }
            this.ctx.restore();
        }

        // ── STEP 3 — Atria + Ventricles ───────────────────────────────────────
        if (step >= 3) {
            this.ctx.save();
            this.ctx.globalAlpha = 0.82;

            // Right atrium (viewer's left = anatomical right) — upper right quadrant
            AnatomicalShapes.drawHeart(
                this.ctx,
                hbX + hbW * 0.50, hbY + hbH * 0.05,
                hbW * 0.38,        hbH * 0.34,
                'rightAtrium', 'deoxygenated'
            );

            // Left atrium — upper left quadrant
            AnatomicalShapes.drawHeart(
                this.ctx,
                hbX + hbW * 0.12, hbY + hbH * 0.05,
                hbW * 0.38,        hbH * 0.34,
                'leftAtrium', 'oxygenated'
            );

            // Right ventricle — lower right (larger)
            AnatomicalShapes.drawHeart(
                this.ctx,
                hbX + hbW * 0.47, hbY + hbH * 0.38,
                hbW * 0.42,        hbH * 0.50,
                'rightVentricle', 'deoxygenated'
            );

            // Left ventricle — lower left (slightly larger — thicker wall)
            AnatomicalShapes.drawHeart(
                this.ctx,
                hbX + hbW * 0.10, hbY + hbH * 0.38,
                hbW * 0.40,        hbH * 0.52,
                'leftVentricle', 'oxygenated'
            );

            this.ctx.globalAlpha = 1.0;

            if (showLabels) {
                this.addLabel('Right\nAtrium',    hbX + hbW * 0.80, hbY + hbH * 0.18, '#A569A0', 'left');
                this.addLabel('Left\nAtrium',     hbX + hbW * 0.10, hbY + hbH * 0.18, '#FF6B6B', 'right');
                this.addLabel('Right\nVentricle', hbX + hbW * 0.80, hbY + hbH * 0.60, '#8B4789', 'left');
                this.addLabel('Left\nVentricle',  hbX + hbW * 0.08, hbY + hbH * 0.60, '#E74C3C', 'right');
            }
            this.ctx.restore();
        }

        // ── STEP 4 — Major vessels + valves ───────────────────────────────────
        if (step >= 4) {
            this.ctx.save();

            const oxyColor  = { base: '#E74C3C', light: '#FF6B6B', dark: '#C0392B' };
            const deoxColor = { base: '#8B4789', light: '#A569A0', dark: '#6B3569' };
            const valveColor = { base: '#F0E68C', light: '#FFFACD', dark: '#DAA520' };

            // Aorta (left of midline, oxygenated — red)
            this.ctx.save();
            this.ctx.translate(hbX + hbW * 0.14, hbY - hbH * 0.08);
            AnatomicalShapes.drawAorta(this.ctx, oxyColor, hbW * 0.30, hbH * 0.38);
            this.ctx.restore();

            // Pulmonary artery (right of midline, deoxygenated — purple)
            this.ctx.save();
            this.ctx.translate(hbX + hbW * 0.52, hbY - hbH * 0.06);
            AnatomicalShapes.drawPulmonaryArtery(this.ctx, deoxColor, hbW * 0.36, hbH * 0.24);
            this.ctx.restore();

            // Pulmonary veins (entering left atrium)
            this.ctx.save();
            this.ctx.translate(hbX + hbW * 0.04, hbY + hbH * 0.04);
            AnatomicalShapes.drawPulmonaryVein(this.ctx, oxyColor, hbW * 0.42, hbH * 0.18);
            this.ctx.restore();

            // Vena cava (entering right atrium)
            this.ctx.save();
            this.ctx.translate(hbX + hbW * 0.54, hbY - hbH * 0.08);
            AnatomicalShapes.drawVenaCava(this.ctx, deoxColor, hbW * 0.24, hbH * 0.55);
            this.ctx.restore();

            // Heart valves overlay
            this.ctx.save();
            this.ctx.translate(hbX + hbW * 0.08, hbY + hbH * 0.26);
            AnatomicalShapes.drawHeartValves(this.ctx, valveColor, hbW * 0.84, hbH * 0.28);
            this.ctx.restore();

            if (showLabels) {
                this.addLabel('Aorta',             hbX + hbW * 0.05, hbY - hbH * 0.04, '#C0392B', 'right');
                this.addLabel('Pulmonary\nArtery', hbX + hbW * 0.68, hbY - hbH * 0.02, '#8B4789', 'left');
                this.addLabel('Pulmonary\nVeins',  hbX - 4,          hbY + hbH * 0.10, '#E74C3C', 'right');
                this.addLabel('SVC / IVC',         hbX + hbW + 4,    hbY + hbH * 0.10, '#8B4789', 'left');
                this.addLabel('Mitral Valve',      hbX + hbW * 0.20, hbY + hbH * 0.38, '#DAA520', 'right');
                this.addLabel('Tricuspid\nValve',  hbX + hbW * 0.82, hbY + hbH * 0.38, '#DAA520', 'left');
                this.addLabel('Aortic Valve',      hbX + hbW * 0.20, hbY + hbH * 0.30, '#20B2AA', 'right');
                this.addLabel('Pulmonary\nValve',  hbX + hbW * 0.82, hbY + hbH * 0.30, '#20B2AA', 'left');
            }
            this.ctx.restore();
        }

        // ── STEP 5 — Final crisp outer outline + full labels + flow arrows ─────
        if (step >= 5) {
            this.ctx.save();

            // Redraw outer outline on top of everything
            this.ctx.strokeStyle = '#6B0000';
            this.ctx.lineWidth = 3.5;
            this.ctx.beginPath();
            this.ctx.moveTo(cx, cy);
            this.ctx.bezierCurveTo(cx,            cy - hbH * 0.30, cx - hbW * 0.40, cy - hbH * 0.30, cx - hbW * 0.40, cy);
            this.ctx.bezierCurveTo(cx - hbW * 0.40, cy + hbH * 0.15, cx - hbW * 0.25, cy + hbH * 0.30, cx, cy + hbH * 0.50);
            this.ctx.bezierCurveTo(cx + hbW * 0.25, cy + hbH * 0.30, cx + hbW * 0.40, cy + hbH * 0.15, cx + hbW * 0.40, cy);
            this.ctx.bezierCurveTo(cx + hbW * 0.40, cy - hbH * 0.30, cx, cy - hbH * 0.30, cx, cy);
            this.ctx.closePath();
            this.ctx.stroke();

            // Blood-flow arrows
            if (showBloodFlow) {
                this.drawArrow(width * 0.90, height * 0.26, hbX + hbW * 0.82, hbY + hbH * 0.20, '#8B4789', 'From Body');
                this.drawArrow(hbX + hbW * 0.72, hbY + hbH * 0.55, width * 0.88, height * 0.10,  '#8B4789', 'To Lungs');
                this.drawArrow(width * 0.10, height * 0.10, hbX + hbW * 0.18, hbY + hbH * 0.20,  '#E74C3C', 'From Lungs');
                this.drawArrow(hbX + hbW * 0.25, hbY + hbH * 0.55, width * 0.08, height * 0.26,  '#E74C3C', 'To Body');
            }

            // Full label set
            if (showLabels) {
                this.addLabel('Superior\nVena Cava', width * 0.90, height * 0.20, '#8B4789', 'left');
                this.addLabel('Inferior\nVena Cava', width * 0.90, height * 0.72, '#8B4789', 'left');
                this.addLabel('Aorta',               width * 0.08, height * 0.18, '#E74C3C', 'right');
                this.addLabel('Pulmonary\nArtery',   width * 0.60, height * 0.08, '#8B4789', 'center');
                this.addLabel('Pulmonary\nVeins',    width * 0.22, height * 0.24, '#E74C3C', 'right');
                this.addLabel('Right Atrium',        width * 0.82, height * 0.38, '#A569A0', 'left');
                this.addLabel('Right Ventricle',     width * 0.82, height * 0.58, '#8B4789', 'left');
                this.addLabel('Left Atrium',         width * 0.18, height * 0.38, '#FF6B6B', 'right');
                this.addLabel('Left Ventricle',      width * 0.18, height * 0.58, '#E74C3C', 'right');
                this.addLabel('Septum',              width * 0.50, height * 0.58, '#5D4E60');
                this.addLabel('Apex',                width * 0.50, hbY + hbH * 0.96, '#333');
            }

            // Blood oxygenation legend
            if (showBloodFlow) {
                this.drawLegend(width * 0.02, height * 0.85, [
                    { color: '#E74C3C', label: 'Oxygenated Blood'   },
                    { color: '#8B4789', label: 'Deoxygenated Blood' }
                ]);
            }

            this.ctx.restore();
        }

        // Step indicator (all steps)
        this.ctx.font = 'italic 10px Arial';
        this.ctx.fillStyle = '#BDC3C7';
        this.ctx.textAlign = 'right';
        this.ctx.fillText(`Step ${step} of 5`, width - 8, height - 4);

        if (showInset) {
            this.drawInset(width * 0.60, 0, width * 0.38, height * 0.24, insetType);
        }

        if (animate) {
            const scale = 1 + Math.sin(this.currentFrame * 0.1) * 0.05;
            this.ctx.scale(scale, scale);
        }

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
        case 'conduction-system':       
           this.drawConductionSystemInset(width, height);
           break;
        case 'coronary-circulation':    this.drawCoronaryCirculationInset(width, height);    break;
        case 'capillary-exchange':      this.drawCapillaryExchangeInset(width, height);      break;
        case 'valve-mechanism':         this.drawValveMechanismInset(width, height);         break;
        case 'blood-pressure-flow':     this.drawBloodPressureFlowInset(width, height);      break;
        case 'vascular-resistance':     this.drawVascularResistanceInset(width, height);     break;

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
}


export {AnatomicalDiagramRenderer};
