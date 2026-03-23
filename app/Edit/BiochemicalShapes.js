// ============================================================================
// biochemicalShapes.js
// Static drawing primitives for the four biochemical food tests.
// Follows the exact same dispatcher + component-method pattern as
// AnatomicalShapes in anatomyshapes.js (drawRespiratorySystem / drawNeuronStructure).
// ============================================================================

class BiochemicalShapes {

    // ════════════════════════════════════════════════════════════════════════
    // BENEDICT'S TEST FOR REDUCING SUGARS
    // dataRequired: ['component', 'sugarConcentration']
    // componentOptions: ['complete', 'reagent', 'testTube', 'colorChange',
    //                    'waterbath', 'precipitate', 'resultsTable']
    // ════════════════════════════════════════════════════════════════════════

    static drawBenedictsTest(ctx, x, y, width, height, component, sugarConcentration = 'high') {
        ctx.save();
        ctx.translate(x, y);

        const color = {
            negative: '#1A6BB5',
            trace:    '#27AE60',
            low:      '#F1C40F',
            medium:   '#E67E22',
            high:     '#C0392B',
            reagent:  '#1A6BB5'
        };

        switch (component) {
            case 'complete':
                this.drawCompleteBenedictsTest(ctx, color, width, height, sugarConcentration);
                break;
            case 'reagent':
                this.drawBenedictsReagent(ctx, color, width, height);
                break;
            case 'testTube':
                this.drawBenedictsTestTube(ctx, color, width, height, sugarConcentration);
                break;
            case 'colorChange':
                this.drawBenedictsColorChange(ctx, color, width, height);
                break;
            case 'waterbath':
                this.drawWaterBath(ctx, color, width, height);
                break;
            case 'precipitate':
                this.drawBenedictsPrecipitate(ctx, color, width, height, sugarConcentration);
                break;
            case 'resultsTable':
                this.drawBenedictsResultsTable(ctx, color, width, height);
                break;
        }

        ctx.restore();
    }

    static drawCompleteBenedictsTest(ctx, color, w, h, sugarConcentration) {
        // ── Reagent bottle (left) ────────────────────────────────────────
        ctx.fillStyle = '#1A6BB5';
        ctx.strokeStyle = '#0D3D6B';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(w * 0.05, h * 0.25, w * 0.16, h * 0.38, 5);
        ctx.fill();
        ctx.stroke();

        // Bottle neck
        ctx.fillStyle = '#0D3D6B';
        ctx.beginPath();
        ctx.roundRect(w * 0.10, h * 0.18, w * 0.06, h * 0.08, 3);
        ctx.fill();

        // Bottle label
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 9px Arial';
        ctx.textAlign = 'center';
        ctx.fillText("Benedict's", w * 0.13, h * 0.40);
        ctx.font = '8px Arial';
        ctx.fillText('Reagent', w * 0.13, h * 0.50);

        // ── Test tube (centre) ───────────────────────────────────────────
        const tubeColor = color[sugarConcentration] || color.high;
        this.drawTestTube(ctx, w * 0.45, h * 0.18, w * 0.10, h * 0.44, tubeColor, 0.76);

        // ── Water bath (below tube) ──────────────────────────────────────
        ctx.fillStyle = 'rgba(173,216,230,0.45)';
        ctx.strokeStyle = '#5A7A9A';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.rect(w * 0.30, h * 0.64, w * 0.40, h * 0.22);
        ctx.fill();
        ctx.stroke();

        // Bubbles
        ctx.fillStyle = 'rgba(255,255,255,0.70)';
        [[0.38, 0.74], [0.45, 0.70], [0.55, 0.76], [0.62, 0.72], [0.50, 0.80]].forEach(([fx, fy]) => {
            ctx.beginPath();
            ctx.arc(w * fx, h * fy, 3, 0, Math.PI * 2);
            ctx.fill();
        });

        ctx.font = 'bold 9px Arial';
        ctx.fillStyle = '#2C6699';
        ctx.textAlign = 'center';
        ctx.fillText('100 °C Water Bath', w * 0.50, h * 0.92);

        // ── Precipitate at tube bottom ───────────────────────────────────
        if (['low', 'medium', 'high'].includes(sugarConcentration)) {
            ctx.save();
            ctx.translate(w * 0.36, h * 0.54);
            this.drawPrecipitateParticles(ctx, w * 0.055, h * 0.03, tubeColor, 14);
            ctx.restore();
        }

        // ── Dropper arrow from bottle to tube ────────────────────────────
        ctx.strokeStyle = '#555';
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 2]);
        ctx.beginPath();
        ctx.moveTo(w * 0.21, h * 0.30);
        ctx.lineTo(w * 0.40, h * 0.30);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = '#555';
        ctx.beginPath();
        ctx.moveTo(w * 0.40, h * 0.30);
        ctx.lineTo(w * 0.36, h * 0.27);
        ctx.lineTo(w * 0.36, h * 0.33);
        ctx.closePath();
        ctx.fill();

        // ── Colour result label ──────────────────────────────────────────
        ctx.fillStyle = tubeColor;
        ctx.font = 'bold 10px Arial';
        ctx.textAlign = 'left';
        const resultLabels = {
            negative: 'Blue (no change)',
            trace:    'Green precipitate',
            low:      'Yellow precipitate',
            medium:   'Orange precipitate',
            high:     'Brick red precipitate'
        };
        ctx.fillText(resultLabels[sugarConcentration] || '', w * 0.60, h * 0.38);
    }

    static drawBenedictsReagent(ctx, color, w, h) {
        const grad = ctx.createLinearGradient(w * 0.20, 0, w * 0.80, 0);
        grad.addColorStop(0, '#4A9BD4');
        grad.addColorStop(0.5, '#1A6BB5');
        grad.addColorStop(1, '#0D3D6B');

        ctx.fillStyle = grad;
        ctx.strokeStyle = '#0D3D6B';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.roundRect(w * 0.22, h * 0.30, w * 0.56, h * 0.55, 8);
        ctx.fill();
        ctx.stroke();

        // Neck
        ctx.fillStyle = '#0D3D6B';
        ctx.beginPath();
        ctx.roundRect(w * 0.38, h * 0.16, w * 0.24, h * 0.16, 4);
        ctx.fill();
        ctx.stroke();

        // Stopper
        ctx.fillStyle = '#E8A020';
        ctx.beginPath();
        ctx.roundRect(w * 0.42, h * 0.08, w * 0.16, h * 0.10, 3);
        ctx.fill();
        ctx.stroke();

        // Label plate
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.roundRect(w * 0.26, h * 0.44, w * 0.48, h * 0.28, 4);
        ctx.fill();
        ctx.strokeStyle = '#0D3D6B';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.fillStyle = '#0D3D6B';
        ctx.font = 'bold 11px Arial';
        ctx.textAlign = 'center';
        ctx.fillText("Benedict's", w * 0.50, h * 0.55);
        ctx.font = '9px Arial';
        ctx.fillText('Qualitative Reagent', w * 0.50, h * 0.63);

        ctx.fillStyle = '#333';
        ctx.font = '8px Arial';
        ctx.textAlign = 'left';
        ctx.fillText('• CuSO₄ (copper sulphate)', w * 0.10, h * 0.86);
        ctx.fillText('• Na citrate + Na carbonate', w * 0.10, h * 0.94);
    }

    static drawBenedictsTestTube(ctx, color, w, h, sugarConcentration) {
        const fillColor = color[sugarConcentration] || color.high;
        this.drawTestTube(ctx, w * 0.50, h * 0.08, w * 0.20, h * 0.76, fillColor, 0.80);

        ctx.strokeStyle = fillColor;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(w * 0.64, h * 0.40);
        ctx.lineTo(w * 0.82, h * 0.40);
        ctx.stroke();

        ctx.fillStyle = fillColor;
        ctx.font = 'bold 10px Arial';
        ctx.textAlign = 'left';
        const labels = {
            negative: 'Blue (−)',
            trace:    'Green (±)',
            low:      'Yellow (+)',
            medium:   'Orange (++)',
            high:     'Brick Red (+++)'
        };
        ctx.fillText(labels[sugarConcentration] || '', w * 0.84, h * 0.43);

        if (['low', 'medium', 'high'].includes(sugarConcentration)) {
            ctx.save();
            ctx.translate(w * 0.40, h * 0.72);
            this.drawPrecipitateParticles(ctx, w * 0.06, h * 0.04, fillColor, 16);
            ctx.restore();
        }
    }

    static drawBenedictsColorChange(ctx, color, w, h) {
        // Five tubes showing the full colour range side by side
        const concentrations = ['negative', 'trace', 'low', 'medium', 'high'];
        const labels         = ['Negative', 'Trace', 'Low', 'Medium', 'High'];
        const spacing        = w * 0.18;
        const startX         = w * 0.10;
        const tubeW          = w * 0.10;
        const tubeH          = h * 0.58;
        const tubeY          = h * 0.14;

        concentrations.forEach((conc, i) => {
            const cx = startX + i * spacing + tubeW / 2;
            this.drawTestTube(ctx, cx, tubeY, tubeW, tubeH, color[conc], 0.80);

            if (['low', 'medium', 'high'].includes(conc)) {
                ctx.save();
                ctx.translate(cx - tubeW * 0.35, tubeY + tubeH * 0.78);
                this.drawPrecipitateParticles(ctx, tubeW * 0.35, tubeH * 0.04, color[conc], 14);
                ctx.restore();
            }

            ctx.fillStyle = color[conc];
            ctx.font = 'bold 9px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(labels[i], cx, tubeY - 5);

            const resultText = conc === 'negative' ? 'Blue\n(no ppt)' :
                               conc === 'trace'    ? 'Green\nppt'     :
                               conc === 'low'      ? 'Yellow\nppt'    :
                               conc === 'medium'   ? 'Orange\nppt'    : 'Red\nppt';
            resultText.split('\n').forEach((line, li) => {
                ctx.fillText(line, cx, tubeY + tubeH + 12 + li * 12);
            });
        });

        // Gradient arrow beneath
        this.drawGradientArrow(ctx, w * 0.10, h * 0.94, w * 0.88, h * 0.94);
        ctx.fillStyle = '#555';
        ctx.font = 'italic 9px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Increasing reducing sugar concentration →', w / 2, h * 0.98);
    }

    static drawWaterBath(ctx, color, w, h) {
        // Beaker / water bath
        ctx.fillStyle = 'rgba(173,216,230,0.50)';
        ctx.strokeStyle = '#5A7A9A';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.rect(w * 0.08, h * 0.20, w * 0.84, h * 0.62);
        ctx.fill();
        ctx.stroke();

        // Water ripples
        ctx.strokeStyle = '#4A90C8';
        ctx.lineWidth = 1.5;
        for (let i = 0; i < 4; i++) {
            ctx.beginPath();
            ctx.moveTo(w * 0.12, h * (0.30 + i * 0.05));
            ctx.bezierCurveTo(w * 0.30, h * (0.28 + i * 0.05), w * 0.70, h * (0.32 + i * 0.05), w * 0.88, h * (0.30 + i * 0.05));
            ctx.stroke();
        }

        // Bubbles
        ctx.fillStyle = 'rgba(255,255,255,0.75)';
        [[0.20,0.65],[0.35,0.55],[0.50,0.70],[0.65,0.58],[0.78,0.62],[0.28,0.75],[0.55,0.80]].forEach(([fx, fy]) => {
            ctx.beginPath();
            ctx.arc(w * fx, h * fy, 3.5, 0, Math.PI * 2);
            ctx.fill();
        });

        // Temperature
        ctx.fillStyle = '#C0392B';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('100 °C', w * 0.50, h * 0.18);

        // Stand legs
        ctx.strokeStyle = '#666';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(w * 0.08, h * 0.82);
        ctx.lineTo(w * 0.08, h * 0.92);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(w * 0.92, h * 0.82);
        ctx.lineTo(w * 0.92, h * 0.92);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(w * 0.04, h * 0.94);
        ctx.lineTo(w * 0.96, h * 0.94);
        ctx.stroke();

        ctx.fillStyle = '#E74C3C';
        ctx.font = 'bold 9px Arial';
        ctx.fillText('⚠ Do NOT stopper tube', w * 0.50, h * 0.99);
    }

    static drawBenedictsPrecipitate(ctx, color, w, h, sugarConcentration) {
        const fillColor = color[sugarConcentration] || color.high;
        this.drawTestTube(ctx, w * 0.50, h * 0.10, w * 0.22, h * 0.68, fillColor, 0.78);

        ctx.save();
        ctx.translate(w * 0.39, h * 0.68);
        this.drawPrecipitateParticles(ctx, w * 0.08, h * 0.05, fillColor, 22);
        ctx.restore();

        // Sediment disc at bottom
        const grad = ctx.createLinearGradient(0, h * 0.73, 0, h * 0.78);
        grad.addColorStop(0, fillColor);
        grad.addColorStop(1, 'rgba(0,0,0,0.30)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.ellipse(w * 0.50, h * 0.76, w * 0.09, h * 0.02, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = fillColor;
        ctx.font = '9px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Cu₂O precipitate', w * 0.50, h * 0.90);
        ctx.fillText('(insoluble copper(I) oxide)', w * 0.50, h * 0.96);
    }

    static drawBenedictsResultsTable(ctx, color, w, h) {
        const headers = ['Result', 'Colour', 'Precipitate', 'Reducing Sugar', '~Amount'];
        const rows = [
            ['Negative', { swatch: '#1A6BB5', label: 'Blue'      }, 'None',   'Absent',  'None'     ],
            ['Trace',    { swatch: '#27AE60', label: 'Green'     }, 'Slight', 'Present', 'Very low' ],
            ['Low +',    { swatch: '#F1C40F', label: 'Yellow'    }, 'Yes',    'Present', 'Low'      ],
            ['Medium ++',{ swatch: '#E67E22', label: 'Orange'    }, 'Yes',    'Present', 'Moderate' ],
            ['High +++', { swatch: '#C0392B', label: 'Brick Red' }, 'Heavy',  'Present', 'High'     ],
        ];
        this.drawResultsTable(ctx, 0, 0, w, h, headers, rows, [1, 2, 3, 4]);
    }

    // ════════════════════════════════════════════════════════════════════════
    // IODINE TEST FOR STARCH
    // dataRequired: ['component', 'starchPresent']
    // componentOptions: ['complete', 'reagent', 'spottingTile', 'dropApplication',
    //                    'colorChange', 'positiveResult', 'resultsTable']
    // ════════════════════════════════════════════════════════════════════════

    static drawIodineTest(ctx, x, y, width, height, component, starchPresent = 'present') {
        ctx.save();
        ctx.translate(x, y);

        const color = {
            reagent:  '#8B6914',
            negative: '#8B6914',
            positive: '#1A237E',
            tile:     '#F0F0F0'
        };

        switch (component) {
            case 'complete':
                this.drawCompleteIodineTest(ctx, color, width, height, starchPresent);
                break;
            case 'reagent':
                this.drawIodineReagent(ctx, color, width, height);
                break;
            case 'spottingTile':
                this.drawIodineSpottingTile(ctx, color, width, height, starchPresent);
                break;
            case 'dropApplication':
                this.drawIodineDropApplication(ctx, color, width, height);
                break;
            case 'colorChange':
                this.drawIodineColorChange(ctx, color, width, height, starchPresent);
                break;
            case 'positiveResult':
                this.drawIodinePositiveResult(ctx, color, width, height);
                break;
            case 'resultsTable':
                this.drawIodineResultsTable(ctx, color, width, height);
                break;
        }

        ctx.restore();
    }

    static drawCompleteIodineTest(ctx, color, w, h, starchPresent) {
        // ── Iodine bottle ────────────────────────────────────────────────
        ctx.fillStyle = '#5A3E0A';
        ctx.strokeStyle = '#3A2606';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(w * 0.04, h * 0.22, w * 0.18, h * 0.42, 5);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#3A2606';
        ctx.beginPath();
        ctx.roundRect(w * 0.09, h * 0.14, w * 0.08, h * 0.10, 3);
        ctx.fill();

        ctx.fillStyle = '#F0C040';
        ctx.font = 'bold 8px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Iodine', w * 0.13, h * 0.38);
        ctx.font = '7px Arial';
        ctx.fillText('I₂/KI', w * 0.13, h * 0.48);

        // ── Spotting tile ────────────────────────────────────────────────
        const tileX = w * 0.28, tileY = h * 0.22, tileW = w * 0.66, tileH = h * 0.22;
        const wellColors = ['#F9E4B7',
            starchPresent === 'present' ? '#1A237E' : '#8B6914',
            '#1A237E', '#1A237E', '#8B6914', '#8B6914'];
        const wells = wellColors.map((c, i) => ({ col: i, row: 0, color: c }));
        this.drawSpottingTileComponent(ctx, tileX, tileY, tileW, tileH, wells, 6, 1);

        const sampleNames = ['Glucose', 'Starch', 'Bread', 'Potato', 'Onion', 'Water'];
        const cellW = tileW / 6;
        sampleNames.forEach((name, i) => {
            ctx.fillStyle = '#555';
            ctx.font = '8px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(name, tileX + cellW * i + cellW / 2, tileY - 5);
        });

        // ── Dropper over well 1 ──────────────────────────────────────────
        this.drawDropperPipette(ctx, tileX + cellW * 1.5, tileY + 4, '#8B6914');

        // ── Result panels ────────────────────────────────────────────────
        const panelY  = h * 0.54;
        const posColor = starchPresent === 'present' ? '#1A237E' : '#8B6914';

        // Negative panel
        ctx.fillStyle = 'rgba(139,105,20,0.10)';
        ctx.strokeStyle = '#8B6914';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(w * 0.04, panelY, w * 0.42, h * 0.32, 6);
        ctx.fill(); ctx.stroke();
        ctx.fillStyle = '#8B6914';
        ctx.beginPath();
        ctx.arc(w * 0.16, panelY + h * 0.10, h * 0.07, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#FFF';
        ctx.font = 'bold 8px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('−', w * 0.16, panelY + h * 0.13);
        ctx.fillStyle = '#5A3E0A';
        ctx.font = 'bold 9px Arial';
        ctx.fillText('Yellow-brown', w * 0.30, panelY + h * 0.12);
        ctx.font = '8px Arial';
        ctx.fillText('Starch ABSENT', w * 0.30, panelY + h * 0.24);

        // Positive panel
        ctx.fillStyle = `${posColor}22`;
        ctx.strokeStyle = posColor;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(w * 0.54, panelY, w * 0.42, h * 0.32, 6);
        ctx.fill(); ctx.stroke();
        ctx.fillStyle = posColor;
        ctx.beginPath();
        ctx.arc(w * 0.66, panelY + h * 0.10, h * 0.07, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#FFF';
        ctx.font = 'bold 8px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(starchPresent === 'present' ? '+' : '−', w * 0.66, panelY + h * 0.13);
        ctx.fillStyle = posColor;
        ctx.font = 'bold 9px Arial';
        ctx.fillText(starchPresent === 'present' ? 'Blue-black' : 'Yellow-brown', w * 0.80, panelY + h * 0.12);
        ctx.font = '8px Arial';
        ctx.fillText(starchPresent === 'present' ? 'Starch PRESENT' : 'Starch ABSENT', w * 0.80, panelY + h * 0.24);
    }

    static drawIodineReagent(ctx, color, w, h) {
        ctx.fillStyle = '#6B4E0A';
        ctx.strokeStyle = '#3A2606';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.roundRect(w * 0.22, h * 0.28, w * 0.56, h * 0.56, 8);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#3A2606';
        ctx.beginPath();
        ctx.roundRect(w * 0.38, h * 0.14, w * 0.24, h * 0.16, 4);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#F0C040';
        ctx.beginPath();
        ctx.roundRect(w * 0.43, h * 0.06, w * 0.14, h * 0.10, 3);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#F0E8C8';
        ctx.beginPath();
        ctx.roundRect(w * 0.28, h * 0.42, w * 0.44, h * 0.30, 4);
        ctx.fill();
        ctx.strokeStyle = '#3A2606';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.fillStyle = '#3A2606';
        ctx.font = 'bold 11px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Iodine', w * 0.50, h * 0.53);
        ctx.font = '8px Arial';
        ctx.fillText('Solution (I₂/KI)', w * 0.50, h * 0.61);
        ctx.fillText('Yellow-brown', w * 0.50, h * 0.68);

        ctx.fillStyle = '#C0392B';
        ctx.font = '8px Arial';
        ctx.fillText('⚠ Stains clothing/skin', w * 0.50, h * 0.92);
    }

    static drawIodineSpottingTile(ctx, color, w, h, starchPresent) {
        const wellColors = ['#F9E4B7',
            starchPresent === 'present' ? '#1A237E' : '#8B6914',
            '#1A237E', '#1A237E', '#8B6914', '#8B6914'];
        const wells = wellColors.map((c, i) => ({ col: i, row: 0, color: c }));
        this.drawSpottingTileComponent(ctx, w * 0.04, h * 0.28, w * 0.92, h * 0.44, wells, 6, 1);

        const labels = ['Glucose', 'Starch\nsol.', 'Bread', 'Potato', 'Onion', 'Water'];
        const cellW  = (w * 0.92) / 6;
        labels.forEach((lbl, i) => {
            lbl.split('\n').forEach((line, li) => {
                ctx.fillStyle = '#555';
                ctx.font = '9px Arial';
                ctx.textAlign = 'center';
                ctx.fillText(line, w * 0.04 + cellW * i + cellW / 2, h * 0.24 + li * 11);
            });
        });

        const resultText = ['−', starchPresent === 'present' ? '+' : '−', '+', '+', '−', '−'];
        resultText.forEach((t, i) => {
            ctx.fillStyle = t === '+' ? '#1A237E' : '#8B6914';
            ctx.font = 'bold 12px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(t, w * 0.04 + cellW * i + cellW / 2, h * 0.82);
        });
    }

    static drawIodineDropApplication(ctx, color, w, h) {
        const wells = [0, 1, 2, 3].map(i => ({ col: i, row: 0, color: '#8B6914' }));
        this.drawSpottingTileComponent(ctx, w * 0.08, h * 0.42, w * 0.84, h * 0.32, wells, 4, 1);

        const cellW = (w * 0.84) / 4;
        this.drawDropperPipette(ctx, w * 0.08 + cellW * 0.5, h * 0.42, '#8B6914');

        ctx.fillStyle = '#8B6914';
        ctx.beginPath();
        ctx.arc(w * 0.08 + cellW * 0.5, h * 0.44, 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#555';
        ctx.font = '9px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Add 2 drops iodine to each well', w * 0.50, h * 0.86);
        ctx.fillText('Wait 30 seconds for colour to develop', w * 0.50, h * 0.94);
    }

    static drawIodineColorChange(ctx, color, w, h, starchPresent) {
        const beforeColor = '#8B6914';
        const afterColor  = starchPresent === 'present' ? '#1A237E' : '#8B6914';
        const tubeW = w * 0.14, tubeH = h * 0.54;

        this.drawTestTube(ctx, w * 0.22, h * 0.16, tubeW, tubeH, beforeColor, 0.78);
        ctx.fillStyle = '#555';
        ctx.font = 'bold 9px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Before', w * 0.22, h * 0.12);
        ctx.fillText('(yellow-brown)', w * 0.22, h * 0.76);

        this.drawStepArrow(ctx, w * 0.34, h * 0.42, w * 0.58, h * 0.42);
        ctx.font = '8px Arial';
        ctx.fillStyle = '#555';
        ctx.textAlign = 'center';
        ctx.fillText('+ iodine', w * 0.46, h * 0.36);

        this.drawTestTube(ctx, w * 0.72, h * 0.16, tubeW, tubeH, afterColor, 0.78);
        ctx.fillStyle = afterColor;
        ctx.font = 'bold 9px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('After', w * 0.72, h * 0.12);
        ctx.fillText(starchPresent === 'present' ? 'Blue-black ✓' : 'Yellow-brown ✗', w * 0.72, h * 0.76);

        ctx.fillStyle = starchPresent === 'present' ? '#1A237E' : '#8B6914';
        ctx.font = 'bold 10px Arial';
        ctx.fillText(starchPresent === 'present' ? 'STARCH PRESENT' : 'STARCH ABSENT', w * 0.50, h * 0.92);
    }

    static drawIodinePositiveResult(ctx, color, w, h) {
        ctx.fillStyle = '#1A237E';
        ctx.beginPath();
        ctx.arc(w * 0.50, h * 0.40, Math.min(w, h) * 0.30, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 13px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Blue-Black', w * 0.50, h * 0.36);
        ctx.fillText('Colour', w * 0.50, h * 0.46);

        ctx.fillStyle = '#1A237E';
        ctx.font = 'bold 11px Arial';
        ctx.fillText('STARCH PRESENT (+ve)', w * 0.50, h * 0.80);
        ctx.fillStyle = '#555';
        ctx.font = 'italic 9px Arial';
        ctx.fillText('I₂ trapped in amylose helix → blue-black', w * 0.50, h * 0.90);
    }

    static drawIodineResultsTable(ctx, color, w, h) {
        const headers = ['Food Sample', 'Colour After', 'Starch?', 'Notes'];
        const rows = [
            ['Glucose solution', 'Yellow-brown', 'No',  'Reducing sugar, not starch'  ],
            ['Starch solution',  'Blue-black',   'Yes', 'Standard positive control'   ],
            ['Bread crumb',      'Blue-black',   'Yes', 'Amylose in wheat flour'      ],
            ['Potato slice',     'Blue-black',   'Yes', 'Amylose + amylopectin'       ],
            ['Onion juice',      'Yellow-brown', 'No',  'Stores sugar, not starch'    ],
            ['Distilled water',  'Yellow-brown', 'No',  'Negative control'            ],
        ];
        this.drawResultsTable(ctx, 0, 0, w, h, headers, rows, [1, 2, 3]);
    }

    // ════════════════════════════════════════════════════════════════════════
    // BIURET TEST FOR PROTEINS
    // dataRequired: ['component', 'proteinPresent']
    // componentOptions: ['complete', 'naohReagent', 'cuso4Reagent', 'testTube',
    //                    'colorChange', 'peptideBond', 'resultsTable']
    // ════════════════════════════════════════════════════════════════════════

    static drawBiuretTest(ctx, x, y, width, height, component, proteinPresent = 'present') {
        ctx.save();
        ctx.translate(x, y);

        const color = {
            naoh:     'rgba(200,240,220,0.85)',
            cuso4:    'rgba(100,160,220,0.90)',
            negative: '#1A6BB5',
            positive: '#9B59B6',
            amino:    '#E8B4D0'
        };

        switch (component) {
            case 'complete':
                this.drawCompleteBiuretTest(ctx, color, width, height, proteinPresent);
                break;
            case 'naohReagent':
                this.drawNaOHReagent(ctx, color, width, height);
                break;
            case 'cuso4Reagent':
                this.drawCuSO4Reagent(ctx, color, width, height);
                break;
            case 'testTube':
                this.drawBiuretTestTube(ctx, color, width, height, proteinPresent);
                break;
            case 'colorChange':
                this.drawBiuretColorChange(ctx, color, width, height, proteinPresent);
                break;
            case 'peptideBond':
                this.drawPeptideBondDetail(ctx, color, width, height);
                break;
            case 'resultsTable':
                this.drawBiuretResultsTable(ctx, color, width, height);
                break;
        }

        ctx.restore();
    }

    static drawCompleteBiuretTest(ctx, color, w, h, proteinPresent) {
        // ── Sample tube with dropper (NaOH) ──────────────────────────────
        this.drawTestTube(ctx, w * 0.14, h * 0.15, w * 0.10, h * 0.42, 'rgba(240,230,200,0.90)', 0.68);
        this.drawDropperPipette(ctx, w * 0.14, h * 0.14, 'rgba(200,240,220,0.85)');

        this.drawStepArrow(ctx, w * 0.22, h * 0.36, w * 0.34, h * 0.36);
        ctx.fillStyle = '#27AE60';
        ctx.font = '8px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('+ NaOH', w * 0.28, h * 0.31);

        // ── After NaOH tube with CuSO₄ dropper ───────────────────────────
        this.drawTestTube(ctx, w * 0.40, h * 0.15, w * 0.10, h * 0.42, 'rgba(173,216,230,0.80)', 0.70);
        this.drawDropperPipette(ctx, w * 0.40, h * 0.14, 'rgba(100,160,220,0.90)');

        this.drawStepArrow(ctx, w * 0.48, h * 0.36, w * 0.60, h * 0.36);
        ctx.fillStyle = '#1A6BB5';
        ctx.font = '8px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('+ CuSO₄', w * 0.54, h * 0.31);

        // ── Result tube ──────────────────────────────────────────────────
        const resultColor = proteinPresent === 'present' ? '#9B59B6' : '#1A6BB5';
        this.drawTestTube(ctx, w * 0.66, h * 0.15, w * 0.10, h * 0.42, resultColor, 0.72);

        // ── Result panel ─────────────────────────────────────────────────
        ctx.fillStyle = `${resultColor}22`;
        ctx.strokeStyle = resultColor;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(w * 0.54, h * 0.66, w * 0.42, h * 0.26, 6);
        ctx.fill(); ctx.stroke();

        ctx.fillStyle = resultColor;
        ctx.font = 'bold 10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(proteinPresent === 'present' ? 'POSITIVE (+ve)' : 'NEGATIVE (−ve)', w * 0.75, h * 0.77);
        ctx.font = '9px Arial';
        ctx.fillText(proteinPresent === 'present' ? 'Purple / lilac' : 'Blue (no change)', w * 0.75, h * 0.86);
    }

    static drawNaOHReagent(ctx, color, w, h) {
        const grad = ctx.createLinearGradient(w * 0.20, 0, w * 0.80, 0);
        grad.addColorStop(0, 'rgba(200,240,220,0.60)');
        grad.addColorStop(0.5, 'rgba(180,230,200,0.80)');
        grad.addColorStop(1, 'rgba(140,200,170,0.90)');

        ctx.fillStyle = grad;
        ctx.strokeStyle = '#2ECC71';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.roundRect(w * 0.22, h * 0.30, w * 0.56, h * 0.52, 8);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#27AE60';
        ctx.beginPath();
        ctx.roundRect(w * 0.38, h * 0.16, w * 0.24, h * 0.16, 4);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#1A7A42';
        ctx.beginPath();
        ctx.roundRect(w * 0.43, h * 0.08, w * 0.14, h * 0.10, 3);
        ctx.fill();

        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.roundRect(w * 0.28, h * 0.42, w * 0.44, h * 0.28, 4);
        ctx.fill();
        ctx.strokeStyle = '#27AE60';
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.fillStyle = '#1A5C30';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('NaOH', w * 0.50, h * 0.54);
        ctx.font = '9px Arial';
        ctx.fillText('Sodium Hydroxide', w * 0.50, h * 0.62);
        ctx.fillText('(alkaline solution)', w * 0.50, h * 0.70);

        ctx.fillStyle = '#C0392B';
        ctx.font = '8px Arial';
        ctx.fillText('⚠ Corrosive – handle carefully', w * 0.50, h * 0.92);
    }

    static drawCuSO4Reagent(ctx, color, w, h) {
        const grad = ctx.createLinearGradient(w * 0.20, 0, w * 0.80, 0);
        grad.addColorStop(0, 'rgba(100,160,220,0.60)');
        grad.addColorStop(0.5, 'rgba(70,130,200,0.85)');
        grad.addColorStop(1, 'rgba(40,90,160,0.90)');

        ctx.fillStyle = grad;
        ctx.strokeStyle = '#1A6BB5';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.roundRect(w * 0.22, h * 0.30, w * 0.56, h * 0.52, 8);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#1A6BB5';
        ctx.beginPath();
        ctx.roundRect(w * 0.38, h * 0.16, w * 0.24, h * 0.16, 4);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#0D3D6B';
        ctx.beginPath();
        ctx.roundRect(w * 0.43, h * 0.08, w * 0.14, h * 0.10, 3);
        ctx.fill();

        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.roundRect(w * 0.28, h * 0.42, w * 0.44, h * 0.28, 4);
        ctx.fill();
        ctx.strokeStyle = '#1A6BB5';
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.fillStyle = '#0D3D6B';
        ctx.font = 'bold 11px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('CuSO₄', w * 0.50, h * 0.54);
        ctx.font = '9px Arial';
        ctx.fillText('Copper(II) sulphate', w * 0.50, h * 0.62);
        ctx.fillText('(very dilute – 1 drop)', w * 0.50, h * 0.70);

        ctx.fillStyle = '#555';
        ctx.font = '8px Arial';
        ctx.fillText('Add only 1–2 drops', w * 0.50, h * 0.92);
    }

    static drawBiuretTestTube(ctx, color, w, h, proteinPresent) {
        const fillColor = proteinPresent === 'present' ? '#9B59B6' : '#1A6BB5';
        this.drawTestTube(ctx, w * 0.50, h * 0.10, w * 0.22, h * 0.72, fillColor, 0.78);

        ctx.strokeStyle = fillColor;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(w * 0.64, h * 0.40);
        ctx.lineTo(w * 0.82, h * 0.40);
        ctx.stroke();

        ctx.fillStyle = fillColor;
        ctx.font = 'bold 10px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(proteinPresent === 'present' ? 'Purple / lilac' : 'Blue (no change)', w * 0.84, h * 0.43);
        ctx.font = '9px Arial';
        ctx.fillText(proteinPresent === 'present' ? 'Protein PRESENT' : 'Protein ABSENT', w * 0.84, h * 0.54);
    }

    static drawBiuretColorChange(ctx, color, w, h, proteinPresent) {
        const negColor = '#1A6BB5';
        const posColor = proteinPresent === 'present' ? '#9B59B6' : '#1A6BB5';
        const tubeW    = w * 0.14, tubeH = h * 0.52;

        this.drawTestTube(ctx, w * 0.22, h * 0.16, tubeW, tubeH, negColor, 0.76);
        ctx.fillStyle = '#555';
        ctx.font = 'bold 9px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Negative', w * 0.22, h * 0.12);
        ctx.fillStyle = negColor;
        ctx.fillText('Blue (no change)', w * 0.22, h * 0.74);
        ctx.fillStyle = '#888';
        ctx.font = '8px Arial';
        ctx.fillText('Protein ABSENT', w * 0.22, h * 0.82);

        this.drawStepArrow(ctx, w * 0.34, h * 0.42, w * 0.58, h * 0.42);
        ctx.font = '8px Arial';
        ctx.fillStyle = '#555';
        ctx.textAlign = 'center';
        ctx.fillText('+ protein', w * 0.46, h * 0.36);

        this.drawTestTube(ctx, w * 0.72, h * 0.16, tubeW, tubeH, posColor, 0.76);
        ctx.fillStyle = posColor;
        ctx.font = 'bold 9px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Positive', w * 0.72, h * 0.12);
        ctx.fillText('Purple / lilac', w * 0.72, h * 0.74);
        ctx.fillStyle = '#6C3483';
        ctx.font = '8px Arial';
        ctx.fillText('Protein PRESENT', w * 0.72, h * 0.82);

        ctx.fillStyle = '#888';
        ctx.font = 'italic 8px Arial';
        ctx.fillText('Pink = amino acids / dipeptides', w * 0.50, h * 0.92);
        ctx.fillText('Purple = polypeptides / proteins', w * 0.50, h * 0.98);
    }

    static drawPeptideBondDetail(ctx, color, w, h) {
        ctx.font = 'bold 11px Arial';
        ctx.fillStyle = '#2C3E50';
        ctx.textAlign = 'center';
        ctx.fillText('Peptide Bond', w / 2, 14);

        // Amino acid 1
        ctx.fillStyle = '#AED6F1';
        ctx.strokeStyle = '#1A6BB5';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(w * 0.04, h * 0.28, w * 0.26, h * 0.40, 5);
        ctx.fill(); ctx.stroke();
        ctx.fillStyle = '#1A3A5C';
        ctx.font = '9px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('H₂N-CHR-', w * 0.17, h * 0.50);
        ctx.fillText('COOH', w * 0.17, h * 0.62);

        // Peptide bond region
        ctx.fillStyle = '#FADBD8';
        ctx.strokeStyle = '#C0392B';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(w * 0.34, h * 0.30, w * 0.32, h * 0.36, 5);
        ctx.fill(); ctx.stroke();
        ctx.fillStyle = '#C0392B';
        ctx.font = 'bold 9px Arial';
        ctx.fillText('–CO–NH–', w * 0.50, h * 0.51);
        ctx.font = '8px Arial';
        ctx.fillText('(peptide bond)', w * 0.50, h * 0.64);

        // Amino acid 2
        ctx.fillStyle = '#AED6F1';
        ctx.strokeStyle = '#1A6BB5';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(w * 0.70, h * 0.28, w * 0.26, h * 0.40, 5);
        ctx.fill(); ctx.stroke();
        ctx.fillStyle = '#1A3A5C';
        ctx.font = '9px Arial';
        ctx.fillText('-CHR-COOH', w * 0.83, h * 0.50);

        // Cu²⁺ annotation
        ctx.strokeStyle = '#9B59B6';
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 2]);
        ctx.beginPath();
        ctx.moveTo(w * 0.50, h * 0.30);
        ctx.lineTo(w * 0.50, h * 0.14);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = '#9B59B6';
        ctx.font = '8px Arial';
        ctx.fillText('Cu²⁺ coordinates here', w * 0.50, h * 0.10);
    }

    static drawBiuretResultsTable(ctx, color, w, h) {
        const headers = ['Food Sample', 'Colour', 'Protein?', 'Notes'];
        const rows = [
            ['Egg white (dilute)', { swatch: '#9B59B6', label: 'Purple' }, 'Yes', 'Classic +ve result' ],
            ['Milk',               { swatch: '#9B59B6', label: 'Purple' }, 'Yes', 'Casein & whey'      ],
            ['Glucose soln.',      { swatch: '#1A6BB5', label: 'Blue'   }, 'No',  'No peptide bonds'   ],
            ['Amino acid soln.',   { swatch: '#E8B4D0', label: 'Pink'   }, '~',   'No peptide bond'    ],
            ['Starch soln.',       { swatch: '#1A6BB5', label: 'Blue'   }, 'No',  'Carbohydrate'       ],
            ['Distilled water',    { swatch: '#1A6BB5', label: 'Blue'   }, 'No',  'Negative control'   ],
        ];
        this.drawResultsTable(ctx, 0, 0, w, h, headers, rows, [0, 1]);
    }

    // ════════════════════════════════════════════════════════════════════════
    // SUDAN III/IV TEST FOR LIPIDS
    // dataRequired: ['component', 'lipidPresent']
    // componentOptions: ['complete', 'reagent', 'testTube', 'emulsionLayer',
    //                    'redLayer', 'waterLayer', 'resultsTable']
    // ════════════════════════════════════════════════════════════════════════

    static drawSudanTest(ctx, x, y, width, height, component, lipidPresent = 'present') {
        ctx.save();
        ctx.translate(x, y);

        const color = {
            dye:        '#E74C3C',
            fatLayer:   '#E74C3C',
            waterLayer: '#D6EAF8',
            negative:   'rgba(231,76,60,0.25)',
            positive:   '#E74C3C'
        };

        switch (component) {
            case 'complete':
                this.drawCompleteSudanTest(ctx, color, width, height, lipidPresent);
                break;
            case 'reagent':
                this.drawSudanReagent(ctx, color, width, height);
                break;
            case 'testTube':
                this.drawSudanTestTube(ctx, color, width, height, lipidPresent);
                break;
            case 'emulsionLayer':
                this.drawEmulsionLayer(ctx, color, width, height);
                break;
            case 'redLayer':
                this.drawRedFatLayer(ctx, color, width, height);
                break;
            case 'waterLayer':
                this.drawWaterLayer(ctx, color, width, height);
                break;
            case 'resultsTable':
                this.drawSudanResultsTable(ctx, color, width, height);
                break;
        }

        ctx.restore();
    }

    static drawCompleteSudanTest(ctx, color, w, h, lipidPresent) {
        // ── Sudan dye bottle ─────────────────────────────────────────────
        ctx.fillStyle = '#8B1A1A';
        ctx.strokeStyle = '#5A0E0E';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(w * 0.03, h * 0.22, w * 0.16, h * 0.42, 5);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#5A0E0E';
        ctx.beginPath();
        ctx.roundRect(w * 0.07, h * 0.14, w * 0.08, h * 0.10, 3);
        ctx.fill();

        ctx.fillStyle = '#FFB3B3';
        ctx.font = 'bold 7px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Sudan', w * 0.11, h * 0.38);
        ctx.fillText('III/IV', w * 0.11, h * 0.46);

        // ── Tube before shaking ──────────────────────────────────────────
        this.drawTestTube(ctx, w * 0.32, h * 0.15, w * 0.10, h * 0.42, '#E74C3C', 0.70);
        ctx.fillStyle = '#555';
        ctx.font = '8px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('+ sample', w * 0.32, h * 0.12);

        // Shake arrows
        ['↕', '↕'].forEach((a, i) => {
            ctx.font = 'bold 16px Arial';
            ctx.fillStyle = '#E67E22';
            ctx.textAlign = 'center';
            ctx.fillText(a, w * (0.46 + i * 0.04), h * 0.40);
        });

        // ── Result tube ──────────────────────────────────────────────────
        if (lipidPresent === 'present') {
            this.drawLayeredTestTube(ctx, w * 0.68, h * 0.15, w * 0.10, h * 0.44, [
                { color: '#E74C3C', fraction: 0.28 },
                { color: '#D6EAF8', fraction: 0.52 }
            ]);
            ctx.fillStyle = '#C0392B';
            ctx.font = '8px Arial';
            ctx.textAlign = 'left';
            ctx.fillText('← fat',   w * 0.82, h * 0.30);
            ctx.fillText('← water', w * 0.82, h * 0.52);
        } else {
            this.drawTestTube(ctx, w * 0.68, h * 0.15, w * 0.10, h * 0.44, 'rgba(231,76,60,0.20)', 0.78);
        }

        // ── Result label ─────────────────────────────────────────────────
        ctx.fillStyle = lipidPresent === 'present' ? '#C0392B' : '#555';
        ctx.font = 'bold 10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(lipidPresent === 'present' ? 'LIPID PRESENT (+ve)' : 'LIPID ABSENT (−ve)',
            w * 0.50, h * 0.88);
    }

    static drawSudanReagent(ctx, color, w, h) {
        const grad = ctx.createLinearGradient(w * 0.20, 0, w * 0.80, 0);
        grad.addColorStop(0, 'rgba(220,80,60,0.70)');
        grad.addColorStop(0.5, 'rgba(200,50,40,0.90)');
        grad.addColorStop(1, 'rgba(160,30,20,0.95)');

        ctx.fillStyle = grad;
        ctx.strokeStyle = '#8B1A1A';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.roundRect(w * 0.22, h * 0.30, w * 0.56, h * 0.52, 8);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#8B1A1A';
        ctx.beginPath();
        ctx.roundRect(w * 0.38, h * 0.16, w * 0.24, h * 0.16, 4);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#D44';
        ctx.beginPath();
        ctx.roundRect(w * 0.43, h * 0.08, w * 0.14, h * 0.10, 3);
        ctx.fill();

        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.roundRect(w * 0.28, h * 0.42, w * 0.44, h * 0.28, 4);
        ctx.fill();
        ctx.strokeStyle = '#8B1A1A';
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.fillStyle = '#5A0E0E';
        ctx.font = 'bold 11px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Sudan III/IV', w * 0.50, h * 0.54);
        ctx.font = '9px Arial';
        ctx.fillText('Lipid-soluble red dye', w * 0.50, h * 0.62);
        ctx.fillText('(non-polar)', w * 0.50, h * 0.70);

        ctx.fillStyle = '#555';
        ctx.font = '8px Arial';
        ctx.fillText('Dissolves readily in fat/oil', w * 0.50, h * 0.90);
    }

    static drawSudanTestTube(ctx, color, w, h, lipidPresent) {
        if (lipidPresent === 'present') {
            this.drawLayeredTestTube(ctx, w * 0.50, h * 0.08, w * 0.22, h * 0.74, [
                { color: '#E74C3C', fraction: 0.28 },
                { color: '#D6EAF8', fraction: 0.50 }
            ]);
            ctx.fillStyle = '#C0392B';
            ctx.font = 'bold 9px Arial';
            ctx.textAlign = 'left';
            ctx.fillText('← Red lipid layer',   w * 0.65, h * 0.28);
            ctx.fillStyle = '#1A6BB5';
            ctx.fillText('← Aqueous layer',      w * 0.65, h * 0.52);
        } else {
            this.drawTestTube(ctx, w * 0.50, h * 0.08, w * 0.22, h * 0.74, 'rgba(231,76,60,0.20)', 0.80);
            ctx.fillStyle = '#555';
            ctx.font = '9px Arial';
            ctx.textAlign = 'left';
            ctx.fillText('Uniform pale/pink', w * 0.65, h * 0.42);
            ctx.fillText('(no layer)', w * 0.65, h * 0.52);
        }

        ctx.fillStyle = lipidPresent === 'present' ? '#C0392B' : '#555';
        ctx.font = 'bold 10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(lipidPresent === 'present' ? 'Lipid PRESENT' : 'Lipid ABSENT', w * 0.50, h * 0.92);
    }

    static drawEmulsionLayer(ctx, color, w, h) {
        // Aqueous background
        ctx.fillStyle = '#EBF5FB';
        ctx.strokeStyle = '#AED6F1';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(0, 0, w, h, 5);
        ctx.fill(); ctx.stroke();

        // Fat droplets stained red
        const drops = [
            [0.20, 0.35, 18], [0.45, 0.55, 14], [0.65, 0.30, 20],
            [0.30, 0.65, 12], [0.75, 0.60, 16], [0.55, 0.80, 10],
            [0.15, 0.70, 10], [0.80, 0.80, 8]
        ];
        drops.forEach(([fx, fy, r]) => {
            const grad = ctx.createRadialGradient(w*fx - r*0.3, h*fy - r*0.3, 1, w*fx, h*fy, r);
            grad.addColorStop(0, '#FADBD8');
            grad.addColorStop(1, '#E74C3C');
            ctx.fillStyle = grad;
            ctx.strokeStyle = '#C0392B';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(w * fx, h * fy, r, 0, Math.PI * 2);
            ctx.fill(); ctx.stroke();
        });

        ctx.font = '9px Arial';
        ctx.fillStyle = '#1A5C8A';
        ctx.textAlign = 'center';
        ctx.fillText('Lipid droplets stained red by Sudan dye', w / 2, h * 0.94);
    }

    static drawRedFatLayer(ctx, color, w, h) {
        const grad = ctx.createLinearGradient(0, 0, 0, h * 0.60);
        grad.addColorStop(0, '#FADBD8');
        grad.addColorStop(0.5, '#E74C3C');
        grad.addColorStop(1, '#C0392B');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.roundRect(w * 0.10, h * 0.10, w * 0.80, h * 0.55, 5);
        ctx.fill();
        ctx.strokeStyle = '#8B1A1A';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Dye molecules
        ctx.fillStyle = '#8B1A1A';
        [[0.25,0.28],[0.45,0.38],[0.65,0.24],[0.35,0.50],[0.70,0.48],[0.55,0.34]].forEach(([fx, fy]) => {
            ctx.beginPath();
            ctx.arc(w*fx, h*fy, 4, 0, Math.PI*2);
            ctx.fill();
        });

        ctx.fillStyle = '#C0392B';
        ctx.font = 'bold 10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Red fat layer', w * 0.50, h * 0.76);
        ctx.font = '9px Arial';
        ctx.fillStyle = '#555';
        ctx.fillText('Sudan dye dissolved in lipid', w * 0.50, h * 0.86);
        ctx.fillText('(non-polar dye → non-polar fat)', w * 0.50, h * 0.94);
    }

    static drawWaterLayer(ctx, color, w, h) {
        const grad = ctx.createLinearGradient(0, 0, 0, h * 0.60);
        grad.addColorStop(0, '#EBF5FB');
        grad.addColorStop(1, '#AED6F1');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.roundRect(w * 0.10, h * 0.10, w * 0.80, h * 0.55, 5);
        ctx.fill();
        ctx.strokeStyle = '#5A7A9A';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // H₂O molecules
        ctx.fillStyle = '#2980B9';
        [[0.25,0.28],[0.50,0.22],[0.70,0.32],[0.35,0.48],[0.62,0.46]].forEach(([fx, fy]) => {
            ctx.beginPath();
            ctx.arc(w*fx, h*fy, 4, 0, Math.PI*2);
            ctx.fill();
            ctx.fillStyle = '#FFF';
            ctx.font = '6px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('H₂O', w*fx, h*fy + 2);
            ctx.fillStyle = '#2980B9';
        });

        ctx.fillStyle = '#1A6BB5';
        ctx.font = 'bold 10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Aqueous (water) layer', w * 0.50, h * 0.76);
        ctx.font = '9px Arial';
        ctx.fillStyle = '#555';
        ctx.fillText('Sudan dye does NOT dissolve here', w * 0.50, h * 0.86);
        ctx.fillText('(polar water ≠ non-polar dye)', w * 0.50, h * 0.94);
    }

    static drawSudanResultsTable(ctx, color, w, h) {
        const headers = ['Food Sample', 'Observation', 'Lipid?', 'Notes'];
        const rows = [
            ['Cooking oil',   'Red upper layer',     'Yes',   'Pure lipid – positive' ],
            ['Full-fat milk', 'Red layer / globules', 'Yes',   'Fat globules present'  ],
            ['Skimmed milk',  'Very pale pink',       'Trace', 'Very low fat content'  ],
            ['Glucose soln.', 'Pale orange uniform',  'No',    'No lipid – negative'   ],
            ['Starch soln.',  'Pale orange uniform',  'No',    'No lipid – negative'   ],
            ['Distilled H₂O', 'Pale orange uniform',  'No',    'Negative control'      ],
        ];
        this.drawResultsTable(ctx, 0, 0, w, h, headers, rows, [0, 1]);
    }

    // ════════════════════════════════════════════════════════════════════════
    // SHARED UTILITY PRIMITIVES
    // Used internally by all four test dispatchers above
    // ════════════════════════════════════════════════════════════════════════

    static drawTestTube(ctx, cx, topY, tubeW, tubeH, fillColor = null, fillFraction = 0.75) {
        const r  = tubeW / 2;
        const bY = topY + tubeH - r;

        ctx.save();
        ctx.fillStyle = 'rgba(220,240,255,0.25)';
        ctx.strokeStyle = '#5A7A9A';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(cx - r, topY);
        ctx.lineTo(cx - r, bY);
        ctx.arc(cx, bY, r, Math.PI, 0);
        ctx.lineTo(cx + r, topY);
        ctx.closePath();
        ctx.fill();

        if (fillColor) {
            const liqTop    = topY + tubeH * (1 - fillFraction);
            const liqHeight = tubeH * fillFraction - r;
            ctx.save();
            ctx.beginPath();
            ctx.rect(cx - r + 1, liqTop, tubeW - 2, liqHeight + 2);
            ctx.clip();
            ctx.fillStyle = fillColor;
            ctx.fillRect(cx - r + 1, liqTop, tubeW - 2, liqHeight + 2);
            ctx.restore();

            ctx.save();
            ctx.beginPath();
            ctx.arc(cx, bY, r - 1, 0, Math.PI * 2);
            ctx.clip();
            ctx.fillStyle = fillColor;
            ctx.fillRect(cx - r, bY - r, tubeW, tubeH);
            ctx.restore();
        }

        ctx.strokeStyle = '#5A7A9A';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(cx - r, topY);
        ctx.lineTo(cx - r, bY);
        ctx.arc(cx, bY, r, Math.PI, 0);
        ctx.lineTo(cx + r, topY);
        ctx.stroke();

        // Glass shine
        ctx.strokeStyle = 'rgba(255,255,255,0.55)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(cx - r + 3, topY + 8);
        ctx.lineTo(cx - r + 3, bY - 6);
        ctx.stroke();

        ctx.restore();
    }

    static drawLayeredTestTube(ctx, cx, topY, tubeW, tubeH, layers = []) {
        const r  = tubeW / 2;
        const bY = topY + tubeH - r;

        ctx.save();
        ctx.fillStyle = 'rgba(220,240,255,0.20)';
        ctx.strokeStyle = '#5A7A9A';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(cx - r, topY);
        ctx.lineTo(cx - r, bY);
        ctx.arc(cx, bY, r, Math.PI, 0);
        ctx.lineTo(cx + r, topY);
        ctx.closePath();
        ctx.fill();

        let cursor = topY;
        layers.forEach((layer, idx) => {
            const layerH = tubeH * layer.fraction;
            const isLast = idx === layers.length - 1;
            ctx.save();
            if (isLast) {
                ctx.beginPath();
                ctx.rect(cx - r + 1, cursor, tubeW - 2, layerH + r);
                ctx.arc(cx, bY, r - 1, 0, Math.PI * 2);
                ctx.clip();
            } else {
                ctx.beginPath();
                ctx.rect(cx - r + 1, cursor, tubeW - 2, layerH);
                ctx.clip();
            }
            ctx.fillStyle = layer.color;
            ctx.fillRect(cx - r + 1, cursor, tubeW - 2, layerH + (isLast ? r : 0));
            ctx.restore();

            if (!isLast) {
                ctx.strokeStyle = 'rgba(0,0,0,0.18)';
                ctx.lineWidth = 1.5;
                ctx.setLineDash([4, 3]);
                ctx.beginPath();
                ctx.moveTo(cx - r + 2, cursor + layerH);
                ctx.lineTo(cx + r - 2, cursor + layerH);
                ctx.stroke();
                ctx.setLineDash([]);
            }
            cursor += layerH;
        });

        ctx.strokeStyle = '#5A7A9A';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(cx - r, topY);
        ctx.lineTo(cx - r, bY);
        ctx.arc(cx, bY, r, Math.PI, 0);
        ctx.lineTo(cx + r, topY);
        ctx.stroke();

        ctx.strokeStyle = 'rgba(255,255,255,0.50)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(cx - r + 3, topY + 6);
        ctx.lineTo(cx - r + 3, bY - 8);
        ctx.stroke();

        ctx.restore();
    }

    static drawSpottingTileComponent(ctx, x, y, w, h, wells = [], cols = 6, rows = 2) {
        ctx.save();
        ctx.fillStyle = '#F0F0F0';
        ctx.strokeStyle = '#AAAAAA';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(x, y, w, h, 6);
        ctx.fill();
        ctx.stroke();

        const cellW = w / cols;
        const cellH = h / rows;
        const wellR = Math.min(cellW, cellH) * 0.35;

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const cx    = x + cellW * (col + 0.5);
                const cy    = y + cellH * (row + 0.5);
                const match = wells.find(wl => wl.col === col && wl.row === row);
                const fill  = match ? match.color : '#FFFFFF';

                ctx.fillStyle = fill;
                ctx.strokeStyle = '#BBBBBB';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.arc(cx, cy, wellR, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();

                ctx.fillStyle = 'rgba(255,255,255,0.35)';
                ctx.beginPath();
                ctx.arc(cx - wellR * 0.25, cy - wellR * 0.25, wellR * 0.30, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        ctx.restore();
    }

    static drawDropperPipette(ctx, cx, tipY, dropColor = '#8B6914') {
        ctx.save();
        ctx.fillStyle = '#D4E8F7';
        ctx.strokeStyle = '#5A7A9A';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(cx - 6, tipY - 44, 12, 30, 3);
        ctx.fill(); ctx.stroke();

        ctx.fillStyle = '#E8A020';
        ctx.beginPath();
        ctx.ellipse(cx, tipY - 44, 10, 12, 0, 0, Math.PI * 2);
        ctx.fill(); ctx.stroke();

        ctx.fillStyle = '#D4E8F7';
        ctx.strokeStyle = '#5A7A9A';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(cx - 3, tipY - 14);
        ctx.lineTo(cx - 1, tipY);
        ctx.lineTo(cx + 1, tipY);
        ctx.lineTo(cx + 3, tipY - 14);
        ctx.closePath();
        ctx.fill(); ctx.stroke();

        ctx.fillStyle = dropColor;
        ctx.beginPath();
        ctx.arc(cx, tipY + 7, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }

    static drawPrecipitateParticles(ctx, halfW, halfH, color = '#C0392B', count = 18) {
        ctx.save();
        for (let i = 0; i < count; i++) {
            const px = -halfW + (i / count) * halfW * 2;
            const py = -(i % 3) * (halfH * 0.5) - 2;
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(px, py, 2.5, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
    }

    static drawResultsTable(ctx, x, y, w, h, headers, rows, positiveRows = []) {
        ctx.save();
        ctx.translate(x, y);

        const totalRows = rows.length + 1;
        const colW      = w / headers.length;
        const rowH      = h / totalRows;

        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(0, 0, w, h, 4);
        ctx.stroke();

        // Header row
        ctx.fillStyle = '#2C3E50';
        ctx.beginPath();
        ctx.roundRect(0, 0, w, rowH, [4, 4, 0, 0]);
        ctx.fill();

        ctx.font = 'bold 11px Arial';
        ctx.fillStyle = '#FFFFFF';
        ctx.textAlign = 'center';
        headers.forEach((hdr, col) => {
            ctx.fillText(hdr, colW * col + colW / 2, rowH * 0.68);
        });

        // Data rows
        rows.forEach((row, ri) => {
            const ry    = rowH * (ri + 1);
            const isPos = positiveRows.includes(ri);

            ctx.fillStyle = isPos ? '#E8F5E9' : (ri % 2 === 0 ? '#FAFAFA' : '#F0F4F8');
            ctx.fillRect(1, ry + 1, w - 2, rowH - 1);

            ctx.font = isPos ? 'bold 10px Arial' : '10px Arial';
            row.forEach((cell, col) => {
                if (typeof cell === 'object' && cell.swatch) {
                    const swX = colW * col + colW / 2;
                    const swY = ry + rowH / 2;
                    ctx.fillStyle = cell.swatch;
                    ctx.beginPath();
                    ctx.roundRect(swX - 18, swY - 7, 36, 14, 3);
                    ctx.fill();
                    ctx.strokeStyle = '#999';
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                    ctx.fillStyle = '#333';
                    ctx.font = '9px Arial';
                    ctx.textAlign = 'center';
                    ctx.fillText(cell.label || '', swX, swY + 3);
                } else {
                    ctx.fillStyle = isPos ? '#1A5C2A' : '#2C3E50';
                    ctx.textAlign = 'center';
                    ctx.fillText(String(cell), colW * col + colW / 2, ry + rowH * 0.65);
                }
            });
        });

        // Vertical dividers
        ctx.strokeStyle = '#BDC3C7';
        ctx.lineWidth = 1;
        for (let col = 1; col < headers.length; col++) {
            ctx.beginPath();
            ctx.moveTo(colW * col, 0);
            ctx.lineTo(colW * col, h);
            ctx.stroke();
        }

        // Horizontal dividers
        for (let row = 0; row <= rows.length; row++) {
            ctx.strokeStyle = row === 0 ? '#2C3E50' : '#BDC3C7';
            ctx.lineWidth   = row === 0 ? 2 : 0.8;
            ctx.beginPath();
            ctx.moveTo(0, rowH * (row + 1));
            ctx.lineTo(w, rowH * (row + 1));
            ctx.stroke();
        }

        ctx.restore();
    }

    // ── Gradient direction arrow ─────────────────────────────────────────────
    static drawGradientArrow(ctx, x1, y1, x2, y2) {
        const grad = ctx.createLinearGradient(x1, y1, x2, y2);
        grad.addColorStop(0, '#1A6BB5');
        grad.addColorStop(1, '#C0392B');
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        const angle = Math.atan2(y2 - y1, x2 - x1);
        ctx.fillStyle = '#C0392B';
        ctx.beginPath();
        ctx.moveTo(x2, y2);
        ctx.lineTo(x2 - 8 * Math.cos(angle - Math.PI / 6), y2 - 8 * Math.sin(angle - Math.PI / 6));
        ctx.lineTo(x2 - 8 * Math.cos(angle + Math.PI / 6), y2 - 8 * Math.sin(angle + Math.PI / 6));
        ctx.closePath();
        ctx.fill();
    }

    // ── Step transition arrow ────────────────────────────────────────────────
    static drawStepArrow(ctx, x1, y1, x2, y2) {
        ctx.strokeStyle = '#888';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        const angle = Math.atan2(y2 - y1, x2 - x1);
        ctx.fillStyle = '#888';
        ctx.beginPath();
        ctx.moveTo(x2, y2);
        ctx.lineTo(x2 - 7 * Math.cos(angle - Math.PI / 6), y2 - 7 * Math.sin(angle - Math.PI / 6));
        ctx.lineTo(x2 - 7 * Math.cos(angle + Math.PI / 6), y2 - 7 * Math.sin(angle + Math.PI / 6));
        ctx.closePath();
        ctx.fill();
    }
}

export { BiochemicalShapes };
