// ====================================================================
// CIRCULATORY SYSTEM VISUALIZATION - MODULAR OOP ARCHITECTURE
//   CONFIG → Utilities → Renderer → Structures → Particles →
//   CirculatorySystem → SceneManager → App → Init
// ====================================================================

// ==================== CONFIGURATION ====================
const CONFIG = {
    canvas: {
        width: 1200,
        height: 800,
        backgroundColor: 'transparent'
    },
    circulatory: {
        centerX: 600,
        centerY: 400,
        arteryColor: '#c0392b',
        arteryStroke: '#922b21',
        veinColor: '#2471a3',
        veinStroke: '#1a5276',
        capillaryColor: '#e74c3c',
        oxygenatedColor: '#e74c3c',
        deoxygenatedColor: '#2980b9',
        heartColor: '#c0392b',
        heartGlow: 'rgba(231,76,60,0.4)',
        organColor: '#7d6e5e',
        organStroke: '#5d4e3e'
    },
    cells: {
        maxParticles: 150,
        particleSize: 3.5,
        flowSpeed: 2.2
    },
    animation: {
        heartbeatInterval: 800,
        particleUpdateInterval: 16
    },
    disease: {
        hypertension: {
            pressureFactor: 1.8,
            healthScore: 45
        },
        atherosclerosis: {
            blockageFactor: 0.4,
            healthScore: 40
        },
        anemia: {
            cellCount: 0.3,
            healthScore: 55
        },
        heartFailure: {
            pumpFactor: 0.35,
            healthScore: 30
        }
    }
};

// ==================== UTILITY CLASSES ====================
class Vector2D {
    constructor(x, y) { this.x = x; this.y = y; }

    add(v)       { return new Vector2D(this.x + v.x, this.y + v.y); }
    subtract(v)  { return new Vector2D(this.x - v.x, this.y - v.y); }
    multiply(s)  { return new Vector2D(this.x * s, this.y * s); }
    magnitude()  { return Math.sqrt(this.x * this.x + this.y * this.y); }
    normalize() {
        const m = this.magnitude();
        return m > 0 ? new Vector2D(this.x / m, this.y / m) : new Vector2D(0, 0);
    }
    distance(v) { return Math.sqrt((this.x - v.x) ** 2 + (this.y - v.y) ** 2); }

    static lerp(a, b, t) {
        return new Vector2D(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t);
    }
}

class Color {
    constructor(r, g, b, a = 1) { this.r = r; this.g = g; this.b = b; this.a = a; }

    toString() {
        return `rgba(${Math.round(this.r)},${Math.round(this.g)},${Math.round(this.b)},${this.a.toFixed(2)})`;
    }

    static fromHex(hex) {
        const res = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return res ? new Color(parseInt(res[1], 16), parseInt(res[2], 16), parseInt(res[3], 16)) : null;
    }

    lerp(target, t) {
        return new Color(
            this.r + (target.r - this.r) * t,
            this.g + (target.g - this.g) * t,
            this.b + (target.b - this.b) * t,
            this.a + (target.a - this.a) * t
        );
    }
}

// ==================== CANVAS RENDERER ====================
class CanvasRenderer {
    constructor(canvasId, width, height) {
        this.canvas = document.getElementById(canvasId);
        this.ctx    = this.canvas.getContext('2d');
        this.width  = width;
        this.height = height;
        this.canvas.width  = width;
        this.canvas.height = height;
    }

    clear() { this.ctx.clearRect(0, 0, this.width, this.height); }

    drawCircle(x, y, radius, fillColor, strokeColor = null, lineWidth = 1) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, Math.PI * 2);
        if (fillColor)  { this.ctx.fillStyle = fillColor; this.ctx.fill(); }
        if (strokeColor) {
            this.ctx.strokeStyle = strokeColor;
            this.ctx.lineWidth   = lineWidth;
            this.ctx.stroke();
        }
    }

    drawEllipse(x, y, rx, ry, fillColor, strokeColor = null, lineWidth = 1, rotation = 0) {
        this.ctx.save();
        this.ctx.translate(x, y);
        this.ctx.rotate(rotation);
        this.ctx.beginPath();
        this.ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
        if (fillColor)  { this.ctx.fillStyle = fillColor; this.ctx.fill(); }
        if (strokeColor) {
            this.ctx.strokeStyle = strokeColor;
            this.ctx.lineWidth   = lineWidth;
            this.ctx.stroke();
        }
        this.ctx.restore();
    }

    drawPath(points, strokeColor, lineWidth = 2, closed = false) {
        if (points.length < 2) return;
        this.ctx.beginPath();
        this.ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) this.ctx.lineTo(points[i].x, points[i].y);
        if (closed) this.ctx.closePath();
        this.ctx.strokeStyle = strokeColor;
        this.ctx.lineWidth   = lineWidth;
        this.ctx.stroke();
    }

    fillPolygon(points, fillColor, strokeColor = null, lineWidth = 1) {
        if (points.length < 3) return;
        this.ctx.beginPath();
        this.ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) this.ctx.lineTo(points[i].x, points[i].y);
        this.ctx.closePath();
        this.ctx.fillStyle = fillColor;
        this.ctx.fill();
        if (strokeColor) {
            this.ctx.strokeStyle = strokeColor;
            this.ctx.lineWidth   = lineWidth;
            this.ctx.stroke();
        }
    }

    drawCurve(sx, sy, cp1x, cp1y, cp2x, cp2y, ex, ey, strokeColor, lineWidth = 2) {
        this.ctx.beginPath();
        this.ctx.moveTo(sx, sy);
        this.ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, ex, ey);
        this.ctx.strokeStyle = strokeColor;
        this.ctx.lineWidth   = lineWidth;
        this.ctx.stroke();
    }

    drawText(text, x, y, font = '14px Arial', color = '#ffffff', align = 'center') {
        this.ctx.font      = font;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = align;
        this.ctx.fillText(text, x, y);
    }

    drawGradientCircle(x, y, radius, colorStops) {
        const g = this.ctx.createRadialGradient(x, y, 0, x, y, radius);
        colorStops.forEach(s => g.addColorStop(s.offset, s.color));
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, Math.PI * 2);
        this.ctx.fillStyle = g;
        this.ctx.fill();
    }

    drawLinearGradientPath(points, colorStart, colorEnd, lineWidth = 4) {
        if (points.length < 2) return;
        const g = this.ctx.createLinearGradient(
            points[0].x, points[0].y,
            points[points.length - 1].x, points[points.length - 1].y
        );
        g.addColorStop(0, colorStart);
        g.addColorStop(1, colorEnd);
        this.ctx.beginPath();
        this.ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) this.ctx.lineTo(points[i].x, points[i].y);
        this.ctx.strokeStyle = g;
        this.ctx.lineWidth   = lineWidth;
        this.ctx.lineCap     = 'round';
        this.ctx.stroke();
    }

    save()            { this.ctx.save(); }
    restore()         { this.ctx.restore(); }
    translate(x, y)   { this.ctx.translate(x, y); }
    rotate(a)         { this.ctx.rotate(a); }
    scale(sx, sy)     { this.ctx.scale(sx, sy || sx); }
}

// ==================== VESSEL (Blood Vessel) ====================
// Arteries, veins, capillaries — each a named path with width + type.
class BloodVessel {
    constructor(name, type, pathPoints, width) {
        this.name       = name;        // e.g. 'Aorta'
        this.type       = type;        // 'artery' | 'vein' | 'capillary' | 'pulmonary-artery' | 'pulmonary-vein'
        this.pathPoints = pathPoints;  // Vector2D[]
        this.width      = width;       // stroke width
        this.opacity    = 0;
        this.isHighlighted    = false;
        this.highlightPulse   = 0;
        this.blockageFactor   = 1;     // 1 = open; <1 = atherosclerosis
        this.isHypertensive   = false;
    }

    getColor() {
        switch (this.type) {
            case 'artery':
            case 'pulmonary-artery': return Color.fromHex(CONFIG.circulatory.arteryColor);
            case 'vein':
            case 'pulmonary-vein':   return Color.fromHex(CONFIG.circulatory.veinColor);
            case 'capillary':        return Color.fromHex(CONFIG.circulatory.capillaryColor);
            default:                 return new Color(200, 200, 200);
        }
    }

    getStroke() {
        switch (this.type) {
            case 'artery':
            case 'pulmonary-artery': return Color.fromHex(CONFIG.circulatory.arteryStroke);
            case 'vein':
            case 'pulmonary-vein':   return Color.fromHex(CONFIG.circulatory.veinStroke);
            case 'capillary':        return new Color(180, 60, 60);
            default:                 return new Color(150, 150, 150);
        }
    }

    draw(renderer) {
        if (this.opacity <= 0) return;

        const col  = this.getColor();
        col.a      = this.opacity;
        const str  = this.getStroke();
        str.a      = this.opacity;

        // Highlight glow
        if (this.isHighlighted) {
            this.highlightPulse += 0.07;
            const glowA = 0.15 + Math.sin(this.highlightPulse) * 0.1;
            renderer.ctx.save();
            renderer.ctx.shadowColor = `rgba(231,76,60,${glowA * 3})`;
            renderer.ctx.shadowBlur  = 18;
            this._drawPath(renderer, col, str);
            renderer.ctx.restore();
        }

        this._drawPath(renderer, col, str);

        // Blockage indicator (atherosclerosis — narrow dark patch)
        if (this.blockageFactor < 1 && this.pathPoints.length >= 2) {
            const mid = Vector2D.lerp(
                this.pathPoints[0],
                this.pathPoints[this.pathPoints.length - 1],
                0.5
            );
            const narrowW = Math.max(1, this.width * this.blockageFactor);
            renderer.drawCircle(mid.x, mid.y, this.width * 0.6,
                `rgba(80,50,40,${this.opacity * 0.85})`, null);
        }

        // Label
        if (window.showLabels && this.opacity > 0.6 && this.pathPoints.length >= 2) {
            const mid = this.pathPoints[Math.floor(this.pathPoints.length / 2)];
            renderer.drawText(
                this.name,
                mid.x,
                mid.y - this.width - 5,
                'bold 10px "Segoe UI", sans-serif',
                `rgba(255,255,255,${this.opacity * 0.85})`,
                'center'
            );
        }
    }

    _drawPath(renderer, col, str) {
        if (this.pathPoints.length < 2) return;
        const w = this.width;

        // Outer stroke
        renderer.ctx.beginPath();
        renderer.ctx.moveTo(this.pathPoints[0].x, this.pathPoints[0].y);
        for (let i = 1; i < this.pathPoints.length; i++) {
            renderer.ctx.lineTo(this.pathPoints[i].x, this.pathPoints[i].y);
        }
        renderer.ctx.strokeStyle = str.toString();
        renderer.ctx.lineWidth   = w + 2;
        renderer.ctx.lineCap     = 'round';
        renderer.ctx.lineJoin    = 'round';
        renderer.ctx.stroke();

        // Inner fill
        renderer.ctx.beginPath();
        renderer.ctx.moveTo(this.pathPoints[0].x, this.pathPoints[0].y);
        for (let i = 1; i < this.pathPoints.length; i++) {
            renderer.ctx.lineTo(this.pathPoints[i].x, this.pathPoints[i].y);
        }
        renderer.ctx.strokeStyle = col.toString();
        renderer.ctx.lineWidth   = w;
        renderer.ctx.stroke();
    }

    applyNormal() {
        this.blockageFactor  = 1;
        this.isHypertensive  = false;
        this.isHighlighted   = false;
    }

    update() { }
}

// ==================== VALVE ====================
// Represents heart valves (aortic, mitral, pulmonary, tricuspid).
class Valve {
    constructor(name, position, radius = 7) {
        this.name    = name;
        this.position = position;
        this.radius  = radius;
        this.opacity = 0;
        this.isOpen  = true;
        this.openPct = 1;    // 0 = fully closed, 1 = fully open
        this.phase   = Math.random() * Math.PI * 2;
    }

    draw(renderer) {
        if (this.opacity <= 0) return;

        const x = this.position.x;
        const y = this.position.y;
        const r = this.radius;
        const alpha = this.opacity;

        // Glow ring
        renderer.drawGradientCircle(x, y, r * 2, [
            { offset: 0,   color: `rgba(231,76,60,${alpha * 0.3})` },
            { offset: 0.5, color: `rgba(231,76,60,${alpha * 0.1})` },
            { offset: 1,   color: 'rgba(231,76,60,0)' }
        ]);

        // Valve ring
        renderer.drawCircle(x, y, r, `rgba(180,60,60,${alpha * 0.4})`,
            `rgba(231,76,60,${alpha * 0.9})`, 2);

        // Valve leaflets (two arcs showing open/close)
        const leafAlpha = alpha * 0.85;
        const openAngle = this.openPct * Math.PI * 0.45;
        renderer.ctx.save();
        renderer.ctx.translate(x, y);

        // Left leaflet
        renderer.ctx.beginPath();
        renderer.ctx.moveTo(0, 0);
        renderer.ctx.arc(0, 0, r * 0.8, -Math.PI / 2 - openAngle, -Math.PI / 2, false);
        renderer.ctx.closePath();
        renderer.ctx.fillStyle = `rgba(220,80,70,${leafAlpha})`;
        renderer.ctx.fill();

        // Right leaflet
        renderer.ctx.beginPath();
        renderer.ctx.moveTo(0, 0);
        renderer.ctx.arc(0, 0, r * 0.8, -Math.PI / 2, -Math.PI / 2 + openAngle, false);
        renderer.ctx.closePath();
        renderer.ctx.fillStyle = `rgba(220,80,70,${leafAlpha})`;
        renderer.ctx.fill();

        renderer.ctx.restore();

        if (window.showLabels && this.opacity > 0.6) {
            renderer.drawText(
                this.name, x, y - r * 2.2,
                '10px "Segoe UI", sans-serif',
                `rgba(255,180,160,${alpha * 0.9})`, 'center'
            );
        }
    }

    beat(phase) {
        // Simulate valve opening/closing with heartbeat
        this.phase += 0.06;
        this.openPct = 0.3 + Math.abs(Math.sin(this.phase + phase)) * 0.7;
    }

    applyNormal() { this.openPct = 1; }
    update() { }
}

// ==================== ORGAN ====================
// Heart, Lungs, Brain, Kidneys, Liver, Stomach, Legs…
// Each Organ has a name, a draw function, and disease state flags.
class Organ {
    constructor(name, type, shapeData, drawFn) {
        this.name       = name;
        this.type       = type;   // 'heart'|'lung'|'brain'|'kidney'|'liver'|'limb'|'stomach'
        this.shapeData  = shapeData;
        this.drawFn     = drawFn;
        this.opacity    = 0;
        this.isHighlighted   = false;
        this.highlightPulse  = 0;
        this.isIschemic      = false;   // reduced blood flow
        this.heartbeatScale  = 1;       // for heart pulsing
        this.heartPhase      = 0;
    }

    draw(renderer) {
        if (this.opacity <= 0) return;

        if (this.isHighlighted) {
            this.highlightPulse += 0.07;
            renderer.ctx.save();
            renderer.ctx.shadowColor = `rgba(231,76,60,${0.2 + Math.sin(this.highlightPulse) * 0.15})`;
            renderer.ctx.shadowBlur  = 20;
            if (this.drawFn) this.drawFn(renderer, this);
            renderer.ctx.restore();
        } else {
            if (this.drawFn) this.drawFn(renderer, this);
        }

        // Ischemia overlay (pale blue tint — poor oxygenation)
        if (this.isIschemic && this.shapeData.center) {
            const c = this.shapeData.center;
            const r = this.shapeData.radius || 30;
            renderer.drawGradientCircle(c.x, c.y, r * 1.2, [
                { offset: 0, color: `rgba(41,128,185,${this.opacity * 0.35})` },
                { offset: 1, color: 'rgba(41,128,185,0)' }
            ]);
        }

        if (window.showLabels && this.opacity > 0.5 && this.shapeData.labelPos) {
            const lp = this.shapeData.labelPos;
            renderer.drawText(
                this.name,
                lp.x, lp.y,
                'bold 11px "Segoe UI", sans-serif',
                `rgba(255,255,255,${this.opacity * 0.9})`,
                'center'
            );
        }
    }

    applyNormal() {
        this.isIschemic     = false;
        this.isHighlighted  = false;
    }

    update(deltaTime) {
        if (this.type === 'heart') {
            this.heartPhase  += deltaTime * 0.004;
            this.heartbeatScale = 1 + Math.abs(Math.sin(this.heartPhase)) * 0.06;
        }
    }
}

// ==================== ORGAN FACTORY ====================
class OrganFactory {

    // ── HEART ──────────────────────────────────────────
    static createHeart(cx, cy) {
        const center = new Vector2D(cx, cy + 10);
        return new Organ('Heart', 'heart', {
            center,
            radius: 40,
            labelPos: new Vector2D(cx, cy - 40)
        }, (renderer, organ) => {
            const x = center.x;
            const y = center.y;
            const s = organ.heartbeatScale || 1;
            const alpha = organ.opacity;

            renderer.ctx.save();
            renderer.ctx.translate(x, y);
            renderer.ctx.scale(s, s);
            renderer.ctx.translate(-x, -y);

            // Outer glow
            renderer.drawGradientCircle(x, y, 55, [
                { offset: 0,   color: `rgba(192,57,43,${alpha * 0.35})` },
                { offset: 0.5, color: `rgba(192,57,43,${alpha * 0.12})` },
                { offset: 1,   color: 'rgba(192,57,43,0)' }
            ]);

            // Heart shape via two circles + triangle
            // Left lobe
            renderer.drawCircle(x - 15, y - 10, 20,
                `rgba(192,57,43,${alpha})`,
                `rgba(145,43,33,${alpha})`, 2);
            // Right lobe
            renderer.drawCircle(x + 15, y - 10, 20,
                `rgba(192,57,43,${alpha})`,
                `rgba(145,43,33,${alpha})`, 2);
            // Bottom triangle point
            const pts = [
                new Vector2D(x - 32, y + 2),
                new Vector2D(x + 32, y + 2),
                new Vector2D(x, y + 36)
            ];
            renderer.fillPolygon(pts,
                `rgba(192,57,43,${alpha})`,
                `rgba(145,43,33,${alpha})`, 2);

            // Highlight sheen
            renderer.drawGradientCircle(x - 10, y - 8, 12, [
                { offset: 0, color: `rgba(255,150,130,${alpha * 0.45})` },
                { offset: 1, color: 'rgba(255,150,130,0)' }
            ]);

            // Septum line
            renderer.ctx.beginPath();
            renderer.ctx.moveTo(x, y - 28);
            renderer.ctx.lineTo(x, y + 30);
            renderer.ctx.strokeStyle = `rgba(145,43,33,${alpha * 0.5})`;
            renderer.ctx.lineWidth = 2;
            renderer.ctx.stroke();

            renderer.ctx.restore();
        });
    }

    // ── LUNGS ──────────────────────────────────────────
    static createLung(cx, cy, side) {
        const sign   = side === 'L' ? -1 : 1;
        const ox     = cx + sign * 75;
        const oy     = cy - 10;
        const center = new Vector2D(ox, oy);
        return new Organ(`${side === 'L' ? 'Left' : 'Right'} Lung`, 'lung', {
            center,
            radius: 52,
            labelPos: new Vector2D(ox, oy - 68)
        }, (renderer, organ) => {
            const alpha = organ.opacity;

            // Main lung lobe (tall ellipse)
            renderer.drawEllipse(ox, oy, 38, 60,
                `rgba(210,130,115,${alpha * 0.75})`,
                `rgba(170,80,70,${alpha})`, 2);

            // Upper lobe
            renderer.drawEllipse(ox - sign * 5, oy - 38, 22, 26,
                `rgba(225,150,135,${alpha * 0.65})`,
                `rgba(180,90,80,${alpha * 0.8})`, 1.5);

            // Lower lobe
            renderer.drawEllipse(ox + sign * 2, oy + 22, 30, 28,
                `rgba(195,110,100,${alpha * 0.65})`,
                `rgba(160,75,65,${alpha * 0.8})`, 1.5);

            // Bronchiole tree details
            const bronchiColor = `rgba(240,180,160,${alpha * 0.55})`;
            renderer.drawCurve(
                ox, oy - 15,
                ox - sign * 10, oy - 5,
                ox - sign * 15, oy + 10,
                ox - sign * 12, oy + 25,
                bronchiColor, 2
            );
            renderer.drawCurve(
                ox, oy - 15,
                ox + sign * 8, oy,
                ox + sign * 10, oy + 18,
                ox + sign * 5, oy + 32,
                bronchiColor, 2
            );

            // Hilum (medial indentation where vessels enter)
            renderer.drawEllipse(ox - sign * 32, oy + 5, 6, 14,
                `rgba(160,70,60,${alpha * 0.8})`,
                `rgba(130,50,45,${alpha})`, 1.5);
        });
    }

    // ── BRAIN ──────────────────────────────────────────
    static createBrain(cx, cy) {
        const center = new Vector2D(cx, cy - 200);
        return new Organ('Brain', 'brain', {
            center,
            radius: 48,
            labelPos: new Vector2D(cx, cy - 258)
        }, (renderer, organ) => {
            const x = center.x, y = center.y;
            const alpha = organ.opacity;

            // Cerebrum (two hemispheres)
            renderer.drawEllipse(x - 22, y - 5, 28, 38,
                `rgba(220,160,150,${alpha * 0.85})`,
                `rgba(180,110,100,${alpha})`, 2);
            renderer.drawEllipse(x + 22, y - 5, 28, 38,
                `rgba(220,160,150,${alpha * 0.85})`,
                `rgba(180,110,100,${alpha})`, 2);

            // Corpus callosum (bridge, lighter)
            renderer.drawEllipse(x, y - 5, 8, 28,
                `rgba(235,180,170,${alpha * 0.7})`, null);

            // Gyri / sulci (folds — curved lines)
            const gyriAlpha = alpha * 0.45;
            const gyriCol = `rgba(160,90,80,${gyriAlpha})`;
            // Left hemisphere folds
            renderer.ctx.beginPath();
            renderer.ctx.arc(x - 22, y - 5, 28, -2.2, -0.9, false);
            renderer.ctx.strokeStyle = gyriCol;
            renderer.ctx.lineWidth = 1.5;
            renderer.ctx.stroke();
            renderer.ctx.beginPath();
            renderer.ctx.arc(x - 22, y - 5, 18, -2.5, -0.6, false);
            renderer.ctx.stroke();
            // Right hemisphere folds
            renderer.ctx.beginPath();
            renderer.ctx.arc(x + 22, y - 5, 28, Math.PI + 0.9, Math.PI + 2.2, false);
            renderer.ctx.strokeStyle = gyriCol;
            renderer.ctx.stroke();
            renderer.ctx.beginPath();
            renderer.ctx.arc(x + 22, y - 5, 18, Math.PI + 0.6, Math.PI + 2.5, false);
            renderer.ctx.stroke();

            // Cerebellum
            renderer.drawEllipse(x, y + 36, 22, 14,
                `rgba(200,140,130,${alpha * 0.8})`,
                `rgba(160,100,90,${alpha})`, 1.5);

            // Brain stem
            renderer.drawEllipse(x, y + 52, 7, 12,
                `rgba(185,120,110,${alpha * 0.9})`,
                `rgba(150,85,75,${alpha})`, 1.5);
        });
    }

    // ── KIDNEYS ─────────────────────────────────────────
    static createKidney(cx, cy, side) {
        const sign   = side === 'L' ? -1 : 1;
        const ox     = cx + sign * 90;
        const oy     = cy + 80;
        const center = new Vector2D(ox, oy);
        return new Organ(`${side === 'L' ? 'Left' : 'Right'} Kidney`, 'kidney', {
            center,
            radius: 28,
            labelPos: new Vector2D(ox + sign * 40, oy)
        }, (renderer, organ) => {
            const alpha = organ.opacity;

            // Kidney bean shape (rotated ellipse with medial indentation)
            renderer.ctx.save();
            renderer.ctx.translate(ox, oy);
            renderer.ctx.rotate(sign * 0.15);

            renderer.ctx.beginPath();
            renderer.ctx.ellipse(0, 0, 16, 28, 0, 0, Math.PI * 2);
            renderer.ctx.fillStyle = `rgba(200,110,90,${alpha * 0.85})`;
            renderer.ctx.fill();
            renderer.ctx.strokeStyle = `rgba(160,75,60,${alpha})`;
            renderer.ctx.lineWidth = 2;
            renderer.ctx.stroke();

            // Renal pelvis (inner lighter area)
            renderer.ctx.beginPath();
            renderer.ctx.ellipse(-sign * 3, 0, 8, 16, 0, 0, Math.PI * 2);
            renderer.ctx.fillStyle = `rgba(230,150,130,${alpha * 0.6})`;
            renderer.ctx.fill();

            // Hilum (medial notch)
            renderer.ctx.beginPath();
            renderer.ctx.arc(-sign * 14, 0, 6, -Math.PI / 2, Math.PI / 2, side === 'L');
            renderer.ctx.fillStyle = `rgba(80,40,30,${alpha * 0.5})`;
            renderer.ctx.fill();

            renderer.ctx.restore();
        });
    }

    // ── LIVER ───────────────────────────────────────────
    static createLiver(cx, cy) {
        const center = new Vector2D(cx + 35, cy + 62);
        return new Organ('Liver', 'liver', {
            center,
            radius: 45,
            labelPos: new Vector2D(cx + 70, cy + 40)
        }, (renderer, organ) => {
            const x = center.x, y = center.y;
            const alpha = organ.opacity;

            // Main lobe (large)
            renderer.drawEllipse(x - 10, y, 48, 32,
                `rgba(140,80,50,${alpha * 0.85})`,
                `rgba(100,55,35,${alpha})`, 2.5);

            // Right lobe (slightly lighter)
            renderer.drawEllipse(x + 20, y - 5, 32, 22,
                `rgba(155,90,60,${alpha * 0.75})`,
                `rgba(110,60,40,${alpha * 0.8})`, 2);

            // Gallbladder (small green pouch underneath)
            renderer.drawEllipse(x - 10, y + 30, 9, 13,
                `rgba(100,150,80,${alpha * 0.8})`,
                `rgba(70,110,55,${alpha})`, 1.5);

            // Hepatic surface texture lines
            const texColor = `rgba(100,55,35,${alpha * 0.3})`;
            for (let i = -2; i <= 2; i++) {
                renderer.ctx.beginPath();
                renderer.ctx.moveTo(x - 45 + i * 12, y - 15);
                renderer.ctx.quadraticCurveTo(x + i * 8, y + 5, x - 15 + i * 10, y + 25);
                renderer.ctx.strokeStyle = texColor;
                renderer.ctx.lineWidth = 1;
                renderer.ctx.stroke();
            }
        });
    }

    // ── STOMACH ─────────────────────────────────────────
    static createStomach(cx, cy) {
        const center = new Vector2D(cx - 30, cy + 72);
        return new Organ('Stomach', 'stomach', {
            center,
            radius: 32,
            labelPos: new Vector2D(cx - 75, cy + 65)
        }, (renderer, organ) => {
            const x = center.x, y = center.y;
            const alpha = organ.opacity;

            // Stomach body (bean-shaped)
            renderer.ctx.beginPath();
            renderer.ctx.moveTo(x - 20, y - 22);
            renderer.ctx.bezierCurveTo(x - 40, y - 22, x - 42, y + 8, x - 32, y + 22);
            renderer.ctx.bezierCurveTo(x - 20, y + 32, x + 10, y + 28, x + 20, y + 10);
            renderer.ctx.bezierCurveTo(x + 28, y - 5, x + 18, y - 24, x, y - 28);
            renderer.ctx.bezierCurveTo(x - 8, y - 32, x - 14, y - 28, x - 20, y - 22);
            renderer.ctx.closePath();
            renderer.ctx.fillStyle = `rgba(170,120,100,${alpha * 0.8})`;
            renderer.ctx.fill();
            renderer.ctx.strokeStyle = `rgba(130,85,65,${alpha})`;
            renderer.ctx.lineWidth = 2;
            renderer.ctx.stroke();

            // Rugae (internal folds, suggested)
            for (let i = 0; i < 3; i++) {
                const fy = y - 10 + i * 10;
                renderer.ctx.beginPath();
                renderer.ctx.moveTo(x - 25, fy);
                renderer.ctx.quadraticCurveTo(x, fy + 4, x + 14, fy - 2);
                renderer.ctx.strokeStyle = `rgba(140,90,70,${alpha * 0.35})`;
                renderer.ctx.lineWidth = 1.5;
                renderer.ctx.stroke();
            }
        });
    }

    // ── LEFT LEG (simplified — shows femoral and tibial vessels) ──
    static createLeg(cx, cy, side) {
        const sign   = side === 'L' ? -1 : 1;
        const ox     = cx + sign * 55;
        const oyTop  = cy + 160;
        const center = new Vector2D(ox, oyTop + 90);
        return new Organ(`${side === 'L' ? 'Left' : 'Right'} Leg`, 'limb', {
            center,
            radius: 20,
            labelPos: new Vector2D(ox + sign * 35, oyTop + 85)
        }, (renderer, organ) => {
            const alpha = organ.opacity;

            // Thigh
            renderer.drawEllipse(ox, oyTop + 40, 18, 52,
                `rgba(200,160,140,${alpha * 0.6})`,
                `rgba(160,120,100,${alpha * 0.8})`, 2);

            // Knee
            renderer.drawCircle(ox, oyTop + 92, 14,
                `rgba(190,150,130,${alpha * 0.7})`,
                `rgba(155,110,90,${alpha})`, 2);

            // Shin
            renderer.drawEllipse(ox, oyTop + 138, 12, 40,
                `rgba(200,160,140,${alpha * 0.6})`,
                `rgba(160,120,100,${alpha * 0.8})`, 2);

            // Foot
            renderer.drawEllipse(ox + sign * 10, oyTop + 178, 22, 8,
                `rgba(185,145,125,${alpha * 0.8})`,
                `rgba(150,110,90,${alpha})`, 1.5);
        });
    }
}

// ==================== VESSEL FACTORY ====================
// Returns fully-configured BloodVessel instances.
class VesselFactory {

    // ── AORTA (ascending + arch + descending) ──────────
    static createAorta(cx, cy) {
        const pts = [
            new Vector2D(cx - 5, cy - 20),    // aortic root
            new Vector2D(cx - 5, cy - 50),    // ascending aorta
            new Vector2D(cx - 20, cy - 75),   // arch starts
            new Vector2D(cx - 45, cy - 80),   // arch apex
            new Vector2D(cx - 30, cy - 65),   // arch descends
            new Vector2D(cx - 22, cy - 30),   // descending aorta top
            new Vector2D(cx - 20, cy + 60),   // descending aorta mid
            new Vector2D(cx - 18, cy + 140),  // bifurcation
        ];
        return new BloodVessel('Aorta', 'artery', pts, 8);
    }

    // ── CAROTID ARTERIES ───────────────────────────────
    static createCarotid(cx, cy, side) {
        const sign = side === 'L' ? -1 : 1;
        const pts  = [
            new Vector2D(cx - 38, cy - 75),
            new Vector2D(cx + sign * 22, cy - 100),
            new Vector2D(cx + sign * 28, cy - 140),
            new Vector2D(cx + sign * 26, cy - 185)
        ];
        return new BloodVessel(`${side} Carotid`, 'artery', pts, 4);
    }

    // ── SUBCLAVIAN / BRACHIAL ARTERIES ─────────────────
    static createBrachialArtery(cx, cy, side) {
        const sign = side === 'L' ? -1 : 1;
        const pts  = [
            new Vector2D(cx - 38, cy - 72),
            new Vector2D(cx + sign * 48, cy - 70),
            new Vector2D(cx + sign * 65, cy - 55),
            new Vector2D(cx + sign * 72, cy),
            new Vector2D(cx + sign * 78, cy + 55),
            new Vector2D(cx + sign * 75, cy + 110)
        ];
        return new BloodVessel(`${side} Brachial A.`, 'artery', pts, 3);
    }

    // ── FEMORAL ARTERIES ───────────────────────────────
    static createFemoralArtery(cx, cy, side) {
        const sign = side === 'L' ? -1 : 1;
        const pts  = [
            new Vector2D(cx - 18, cy + 140),
            new Vector2D(cx + sign * 35, cy + 155),
            new Vector2D(cx + sign * 48, cy + 200),
            new Vector2D(cx + sign * 52, cy + 260),
            new Vector2D(cx + sign * 52, cy + 320)
        ];
        return new BloodVessel(`${side} Femoral A.`, 'artery', pts, 4);
    }

    // ── PULMONARY ARTERIES (deoxygenated, so blue-ish) ─
    static createPulmonaryArtery(cx, cy, side) {
        const sign = side === 'L' ? -1 : 1;
        const pts  = [
            new Vector2D(cx + 5, cy - 5),
            new Vector2D(cx + 5, cy - 20),
            new Vector2D(cx + sign * 25, cy - 28),
            new Vector2D(cx + sign * 55, cy - 25),
            new Vector2D(cx + sign * 72, cy - 18)
        ];
        return new BloodVessel(`${side} Pulmonary A.`, 'pulmonary-artery', pts, 4);
    }

    // ── PULMONARY VEINS (oxygenated, so red-ish) ───────
    static createPulmonaryVein(cx, cy, side) {
        const sign = side === 'L' ? -1 : 1;
        const pts  = [
            new Vector2D(cx + sign * 68, cy),
            new Vector2D(cx + sign * 42, cy + 5),
            new Vector2D(cx + sign * 18, cy + 2),
            new Vector2D(cx - 3, cy)
        ];
        return new BloodVessel(`${side} Pulmonary V.`, 'pulmonary-vein', pts, 4);
    }

    // ── SUPERIOR VENA CAVA ─────────────────────────────
    static createSuperiorVenaCava(cx, cy) {
        const pts = [
            new Vector2D(cx + 12, cy - 15),
            new Vector2D(cx + 14, cy - 50),
            new Vector2D(cx + 18, cy - 85),
            new Vector2D(cx + 22, cy - 120)
        ];
        return new BloodVessel('Superior Vena Cava', 'vein', pts, 6);
    }

    // ── INFERIOR VENA CAVA ─────────────────────────────
    static createInferiorVenaCava(cx, cy) {
        const pts = [
            new Vector2D(cx + 10, cy - 10),
            new Vector2D(cx + 8,  cy + 45),
            new Vector2D(cx + 6,  cy + 110),
            new Vector2D(cx + 4,  cy + 148)
        ];
        return new BloodVessel('Inferior Vena Cava', 'vein', pts, 6);
    }

    // ── RENAL ARTERIES ─────────────────────────────────
    static createRenalArtery(cx, cy, side) {
        const sign = side === 'L' ? -1 : 1;
        const pts  = [
            new Vector2D(cx - 18, cy + 85),
            new Vector2D(cx + sign * 45, cy + 82),
            new Vector2D(cx + sign * 78, cy + 80)
        ];
        return new BloodVessel(`${side} Renal A.`, 'artery', pts, 3);
    }

    // ── FEMORAL VEINS ──────────────────────────────────
    static createFemoralVein(cx, cy, side) {
        const sign = side === 'L' ? -1 : 1;
        const pts  = [
            new Vector2D(cx + sign * 44, cy + 320),
            new Vector2D(cx + sign * 42, cy + 258),
            new Vector2D(cx + sign * 38, cy + 200),
            new Vector2D(cx + sign * 28, cy + 155),
            new Vector2D(cx + 4,  cy + 148)
        ];
        return new BloodVessel(`${side} Femoral V.`, 'vein', pts, 3.5);
    }

    // ── HEPATIC PORTAL VEIN ────────────────────────────
    static createPortalVein(cx, cy) {
        const pts = [
            new Vector2D(cx - 22, cy + 90),
            new Vector2D(cx + 5,  cy + 78),
            new Vector2D(cx + 30, cy + 68)
        ];
        return new BloodVessel('Portal Vein', 'vein', pts, 3);
    }

    // ── CAPILLARY NETWORKS (fine meshes near organs) ───
    static createCapillaryBed(cx, cy, ox, oy, radius, count = 8) {
        const vessels = [];
        for (let i = 0; i < count; i++) {
            const angle  = (i / count) * Math.PI * 2;
            const angle2 = angle + 0.6;
            const pts    = [
                new Vector2D(
                    ox + Math.cos(angle)  * (radius * 0.4),
                    oy + Math.sin(angle)  * (radius * 0.4)
                ),
                new Vector2D(
                    ox + Math.cos(angle)  * (radius * 0.7) + (Math.random() - 0.5) * 8,
                    oy + Math.sin(angle)  * (radius * 0.7) + (Math.random() - 0.5) * 8
                ),
                new Vector2D(
                    ox + Math.cos(angle2) * (radius * 0.9),
                    oy + Math.sin(angle2) * (radius * 0.9)
                )
            ];
            vessels.push(new BloodVessel(`Cap ${i}`, 'capillary', pts, 1));
        }
        return vessels;
    }

    // ── CORONARY ARTERIES (on heart surface) ───────────
    static createCoronaryArteries(cx, cy) {
        const vessels = [];
        // Left anterior descending
        vessels.push(new BloodVessel('Left Coronary', 'artery', [
            new Vector2D(cx - 8, cy - 22),
            new Vector2D(cx - 18, cy - 8),
            new Vector2D(cx - 22, cy + 10),
            new Vector2D(cx - 14, cy + 28)
        ], 2));
        // Right coronary
        vessels.push(new BloodVessel('Right Coronary', 'artery', [
            new Vector2D(cx + 8, cy - 22),
            new Vector2D(cx + 20, cy - 8),
            new Vector2D(cx + 24, cy + 8),
            new Vector2D(cx + 16, cy + 26)
        ], 2));
        return vessels;
    }
}

// ==================== BLOOD CELL (Particle) ====================
class BloodCell {
    constructor(position, vessel, type) {
        this.position     = position;
        this.vessel       = vessel;        // BloodVessel whose path we follow
        this.type         = type;          // 'rbc' | 'wbc' | 'platelet' | 'plasma'
        this.pathProgress = Math.random(); // 0..1 along the vessel path
        this.size         = type === 'platelet' ? 2 : type === 'wbc' ? 4.5 : 3.5;
        this.opacity      = 1;
        this.isActive     = true;
        this.wobble       = Math.random() * Math.PI * 2;
        this.speed        = 0.8 + Math.random() * 0.4;  // per-cell speed multiplier
    }

    getColor() {
        switch (this.type) {
            case 'rbc':      return new Color(220, 50, 40, this.opacity);   // bright red
            case 'wbc':      return new Color(240, 230, 200, this.opacity);  // creamy white
            case 'platelet': return new Color(255, 200, 80, this.opacity);   // golden
            case 'plasma':   return new Color(255, 220, 150, this.opacity);  // pale yellow
            default:         return new Color(200, 100, 100, this.opacity);
        }
    }

    draw(renderer) {
        if (!this.isActive || this.opacity <= 0) return;
        const col = this.getColor();

        if (this.type === 'rbc') {
            // Biconcave disc hint — slightly elongated, brighter centre
            renderer.drawGradientCircle(this.position.x, this.position.y, this.size, [
                { offset: 0,   color: `rgba(255,100,80,${col.a})` },
                { offset: 0.4, color: col.toString() },
                { offset: 1,   color: `rgba(${Math.round(col.r)},${Math.round(col.g)},${Math.round(col.b)},0)` }
            ]);
        } else {
            renderer.drawGradientCircle(this.position.x, this.position.y, this.size, [
                { offset: 0,   color: col.toString() },
                { offset: 0.7, color: col.toString() },
                { offset: 1,   color: `rgba(${Math.round(col.r)},${Math.round(col.g)},${Math.round(col.b)},0)` }
            ]);
        }

        // WBC nucleus hint
        if (this.type === 'wbc') {
            renderer.drawCircle(
                this.position.x, this.position.y,
                this.size * 0.4,
                `rgba(120,120,200,${this.opacity * 0.7})`, null
            );
        }
    }

    update(deltaTime, flowSpeed) {
        if (!this.isActive || !this.vessel) return;

        const pts = this.vessel.pathPoints;
        if (!pts || pts.length < 2) return;

        // Advance along vessel path
        this.pathProgress += flowSpeed * this.speed * deltaTime * 0.0001;
        if (this.pathProgress > 1) this.pathProgress -= 1;

        // Interpolate position along multi-segment path
        const totalSegs = pts.length - 1;
        const rawT      = this.pathProgress * totalSegs;
        const seg       = Math.min(Math.floor(rawT), totalSegs - 1);
        const localT    = rawT - seg;

        const p0 = pts[seg];
        const p1 = pts[seg + 1];

        // Small perpendicular wobble (simulates turbulent flow)
        const dx = p1.x - p0.x;
        const dy = p1.y - p0.y;
        const len = Math.sqrt(dx * dx + dy * dy) || 1;
        const nx  = -dy / len;
        const ny  =  dx / len;
        const wobbleAmp = this.vessel.width * 0.3;
        const woff = Math.sin(this.wobble + this.pathProgress * Math.PI * 6) * wobbleAmp;

        this.position = new Vector2D(
            p0.x + (p1.x - p0.x) * localT + nx * woff,
            p0.y + (p1.y - p0.y) * localT + ny * woff
        );
    }
}

// ==================== PARTICLE SYSTEM ====================
class ParticleSystem {
    constructor() {
        this.particles   = [];
        this.maxParticles = CONFIG.cells.maxParticles;
        this.flowSpeed   = CONFIG.cells.flowSpeed;
        this.isPaused    = false;
    }

    addParticle(p) {
        if (this.particles.length < this.maxParticles) this.particles.push(p);
    }

    update(deltaTime) {
        if (this.isPaused) return;
        this.particles.forEach(p => p.update(deltaTime, this.flowSpeed));
        this.particles = this.particles.filter(p => p.isActive);
    }

    draw(renderer) {
        this.particles.forEach(p => p.draw(renderer));
    }

    pause()  { this.isPaused = true; }
    resume() { this.isPaused = false; }
    clear()  { this.particles = []; }

    getCountByType(type) {
        return this.particles.filter(p => p.type === type && p.isActive).length;
    }
}

// ==================== CIRCULATORY SYSTEM ====================
class CirculatorySystem {
    constructor() {
        this.organs          = {};
        this.vessels         = {};
        this.capillaries     = [];
        this.valves          = {};
        this.particleSystem  = new ParticleSystem();
        this.currentScenario = 'normal';
        this.heartbeatPhase  = 0;
    }

    initialize(cx, cy) {
        this.cx = cx;
        this.cy = cy;
        this.createOrgans(cx, cy);
        this.createVessels(cx, cy);
        this.createValves(cx, cy);
    }

    // ── organs ────────────────────────────────────────────
    createOrgans(cx, cy) {
        this.organs.heart   = OrganFactory.createHeart(cx, cy);
        this.organs.lungL   = OrganFactory.createLung(cx, cy, 'L');
        this.organs.lungR   = OrganFactory.createLung(cx, cy, 'R');
        this.organs.brain   = OrganFactory.createBrain(cx, cy);
        this.organs.kidneyL = OrganFactory.createKidney(cx, cy, 'L');
        this.organs.kidneyR = OrganFactory.createKidney(cx, cy, 'R');
        this.organs.liver   = OrganFactory.createLiver(cx, cy);
        this.organs.stomach = OrganFactory.createStomach(cx, cy);
        this.organs.legL    = OrganFactory.createLeg(cx, cy, 'L');
        this.organs.legR    = OrganFactory.createLeg(cx, cy, 'R');
    }

    // ── vessels ──────────────────────────────────────────
    createVessels(cx, cy) {
        // Major vessels
        this.vessels.aorta   = VesselFactory.createAorta(cx, cy);
        this.vessels.svc     = VesselFactory.createSuperiorVenaCava(cx, cy);
        this.vessels.ivc     = VesselFactory.createInferiorVenaCava(cx, cy);
        this.vessels.paL     = VesselFactory.createPulmonaryArtery(cx, cy, 'L');
        this.vessels.paR     = VesselFactory.createPulmonaryArtery(cx, cy, 'R');
        this.vessels.pvL     = VesselFactory.createPulmonaryVein(cx, cy, 'L');
        this.vessels.pvR     = VesselFactory.createPulmonaryVein(cx, cy, 'R');

        // Arterial branches
        this.vessels.carotidL  = VesselFactory.createCarotid(cx, cy, 'L');
        this.vessels.carotidR  = VesselFactory.createCarotid(cx, cy, 'R');
        this.vessels.brachialL = VesselFactory.createBrachialArtery(cx, cy, 'L');
        this.vessels.brachialR = VesselFactory.createBrachialArtery(cx, cy, 'R');
        this.vessels.femoralAL = VesselFactory.createFemoralArtery(cx, cy, 'L');
        this.vessels.femoralAR = VesselFactory.createFemoralArtery(cx, cy, 'R');
        this.vessels.renalAL   = VesselFactory.createRenalArtery(cx, cy, 'L');
        this.vessels.renalAR   = VesselFactory.createRenalArtery(cx, cy, 'R');

        // Venous return
        this.vessels.femoralVL = VesselFactory.createFemoralVein(cx, cy, 'L');
        this.vessels.femoralVR = VesselFactory.createFemoralVein(cx, cy, 'R');
        this.vessels.portal    = VesselFactory.createPortalVein(cx, cy);

        // Coronary arteries
        VesselFactory.createCoronaryArteries(cx, cy).forEach((v, i) => {
            this.vessels[`coronary${i}`] = v;
        });

        // Capillary beds
        const caps = [
            ...VesselFactory.createCapillaryBed(cx, cy, cx - 75, cy - 10, 50, 8),  // lung L
            ...VesselFactory.createCapillaryBed(cx, cy, cx + 75, cy - 10, 50, 8),  // lung R
            ...VesselFactory.createCapillaryBed(cx, cy, cx,     cy - 200, 42, 6),  // brain
            ...VesselFactory.createCapillaryBed(cx, cy, cx - 90, cy + 80, 28, 5),  // kidney L
            ...VesselFactory.createCapillaryBed(cx, cy, cx + 90, cy + 80, 28, 5),  // kidney R
            ...VesselFactory.createCapillaryBed(cx, cy, cx + 35, cy + 65, 40, 5),  // liver
        ];
        caps.forEach((c, i) => { this.capillaries.push(c); });
    }

    // ── valves ────────────────────────────────────────────
    createValves(cx, cy) {
        this.valves.aortic    = new Valve('Aortic',    new Vector2D(cx - 5, cy - 22), 7);
        this.valves.pulmonary = new Valve('Pulmonary', new Vector2D(cx + 5, cy - 15), 6);
        this.valves.mitral    = new Valve('Mitral',    new Vector2D(cx - 8, cy + 5),  7);
        this.valves.tricuspid = new Valve('Tricuspid', new Vector2D(cx + 8, cy + 8),  6);
    }

    // ── scenario system ───────────────────────────────────
    applyScenario(scenario) {
        this.currentScenario = scenario;

        Object.values(this.organs).forEach(o  => o.applyNormal());
        Object.values(this.vessels).forEach(v => v.applyNormal());
        this.capillaries.forEach(c => c.applyNormal());
        Object.values(this.valves).forEach(v  => v.applyNormal());
        this.particleSystem.clear();

        switch (scenario) {
            case 'hypertension':     this.applyHypertension();    break;
            case 'atherosclerosis':  this.applyAtherosclerosis(); break;
            case 'anemia':           this.applyAnemia();           break;
            case 'heartFailure':     this.applyHeartFailure();     break;
            case 'normal':
            default:                 this.applyNormal();           break;
        }
    }

    applyNormal() {
        this.particleSystem.flowSpeed = CONFIG.cells.flowSpeed;
        this.seedCells(35, 8, 12, 10);
    }

    applyHypertension() {
        // Vessels slightly red/wider; faster flow
        this.particleSystem.flowSpeed = CONFIG.cells.flowSpeed * CONFIG.disease.hypertension.pressureFactor;
        Object.values(this.vessels).forEach(v => { v.isHypertensive = true; });
        this.seedCells(30, 8, 10, 8);
    }

    applyAtherosclerosis() {
        // Major arteries partially blocked
        ['aorta', 'carotidL', 'carotidR', 'femoralAL', 'femoralAR'].forEach(name => {
            const v = this.vessels[name];
            if (v) v.blockageFactor = CONFIG.disease.atherosclerosis.blockageFactor;
        });
        this.particleSystem.flowSpeed = CONFIG.cells.flowSpeed * 0.55;
        this.seedCells(20, 12, 8, 6);
    }

    applyAnemia() {
        // Far fewer red cells
        this.particleSystem.flowSpeed = CONFIG.cells.flowSpeed * 0.75;
        const rbcCount = Math.round(35 * CONFIG.disease.anemia.cellCount);
        this.seedCells(rbcCount, 6, 5, 8);
    }

    applyHeartFailure() {
        // Slow pump; ischemia in organs; valves barely open
        this.particleSystem.flowSpeed = CONFIG.cells.flowSpeed * CONFIG.disease.heartFailure.pumpFactor;
        this.organs.brain.isIschemic   = true;
        this.organs.kidneyL.isIschemic = true;
        this.organs.kidneyR.isIschemic = true;
        this.organs.legL.isIschemic    = true;
        this.organs.legR.isIschemic    = true;
        Object.values(this.valves).forEach(v => { v.openPct = 0.3; });
        this.seedCells(15, 5, 6, 5);
    }

    // Seed particles across all named vessels
    seedCells(rbc, wbc, platelets, plasma) {
        this.particleSystem.clear();
        const allVessels = [
            ...Object.values(this.vessels),
            ...this.capillaries
        ].filter(v => v.pathPoints && v.pathPoints.length >= 2);

        const spawn = (count, type) => {
            for (let i = 0; i < count; i++) {
                const v = allVessels[Math.floor(Math.random() * allVessels.length)];
                const p = v.pathPoints[0];
                const cell = new BloodCell(new Vector2D(p.x, p.y), v, type);
                cell.pathProgress = Math.random();
                this.particleSystem.addParticle(cell);
            }
        };

        spawn(rbc,      'rbc');
        spawn(wbc,      'wbc');
        spawn(platelets,'platelet');
        spawn(plasma,   'plasma');
    }

    // ── per-frame ─────────────────────────────────────────
    update(deltaTime) {
        this.heartbeatPhase += deltaTime * 0.004;

        Object.values(this.organs).forEach(o => o.update(deltaTime));

        // Pulse valve animation with heartbeat
        Object.values(this.valves).forEach((v, i) => {
            v.beat(i * 0.4);
        });

        this.particleSystem.update(deltaTime);
    }

    // ── render ────────────────────────────────────────────
    draw(mainRenderer, particleRenderer) {
        // 1. Capillaries (very thin, behind)
        this.capillaries.forEach(c => c.draw(mainRenderer));

        // 2. Major vessels
        Object.values(this.vessels).forEach(v => v.draw(mainRenderer));

        // 3. Organs
        Object.values(this.organs).forEach(o => o.draw(mainRenderer));

        // 4. Valves (on top of heart)
        Object.values(this.valves).forEach(v => v.draw(mainRenderer));

        // 5. Blood cells (particle layer)
        this.particleSystem.draw(particleRenderer);
    }
}

// ==================== SCENE MANAGER ====================
class SceneManager {
    constructor(circulatorySystem) {
        this.system            = circulatorySystem;
        this.currentScene      = null;
        this.heartbeatInterval = null;
        this.scenes            = this.defineScenes();
    }

    defineScenes() {
        return [
            // ── 0: Introduction ───────────────────────────
            {
                name: 'Introduction',
                scrollStart: 0,
                scrollEnd: 350,
                onEnter: () => {
                    setText('The human circulatory system…');
                },
                onUpdate: () => {}
            },

            // ── 1: Heart Appears ──────────────────────────
            {
                name: 'Heart Appears',
                scrollStart: 350,
                scrollEnd: 750,
                onEnter: () => {
                    setText('The Heart — 100,000 beats a day ❤️');
                    showPanel('info-circulatory');
                },
                onUpdate: (p) => {
                    this.fadeOrgan('heart', p);
                    this.fadeValve('aortic',    p, 0.35);
                    this.fadeValve('pulmonary', p, 0.45);
                    this.fadeValve('mitral',    p, 0.55);
                    this.fadeValve('tricuspid', p, 0.65);
                    // Coronary arteries
                    this.fadeVessel('coronary0', p, 0.5);
                    this.fadeVessel('coronary1', p, 0.6);
                }
            },

            // ── 2: Lungs & Pulmonary Circulation ──────────
            {
                name: 'Lungs',
                scrollStart: 750,
                scrollEnd: 1150,
                onEnter: () => {
                    setText('The Lungs — Oxygenating every drop of blood 🫁');
                    showPanel('info-vessels');
                },
                onUpdate: (p) => {
                    this.fadeOrgan('lungL', p);
                    this.fadeOrgan('lungR', p, 0.08);
                    this.fadeVessel('paL', p, 0.25);
                    this.fadeVessel('paR', p, 0.3);
                    this.fadeVessel('pvL', p, 0.5);
                    this.fadeVessel('pvR', p, 0.55);
                }
            },

            // ── 3: Brain & Carotids ───────────────────────
            {
                name: 'Brain',
                scrollStart: 1150,
                scrollEnd: 1550,
                onEnter: () => {
                    setText('The Brain — Needs 20% of all oxygen your blood carries 🧠');
                },
                onUpdate: (p) => {
                    this.fadeOrgan('brain', p);
                    this.fadeVessel('svc',      p, 0.3);
                    this.fadeVessel('carotidL', p, 0.35);
                    this.fadeVessel('carotidR', p, 0.4);
                }
            },

            // ── 4: Aorta & Systemic Circulation ──────────
            {
                name: 'Aorta',
                scrollStart: 1550,
                scrollEnd: 1950,
                onEnter: () => {
                    setText('The Aorta — Largest artery; 2.5 cm wide 🩸');
                    showPanel('info-vessels');
                },
                onUpdate: (p) => {
                    this.fadeVessel('aorta', p);
                    this.fadeVessel('ivc',   p, 0.4);
                    this.fadeVessel('brachialL', p, 0.5);
                    this.fadeVessel('brachialR', p, 0.55);
                }
            },

            // ── 5: Kidneys & Renal Circulation ───────────
            {
                name: 'Kidneys',
                scrollStart: 1950,
                scrollEnd: 2350,
                onEnter: () => {
                    setText('The Kidneys — Filter 200 litres of blood daily 🫘');
                },
                onUpdate: (p) => {
                    this.fadeOrgan('kidneyL', p);
                    this.fadeOrgan('kidneyR', p, 0.08);
                    this.fadeVessel('renalAL', p, 0.3);
                    this.fadeVessel('renalAR', p, 0.35);
                }
            },

            // ── 6: Liver & Portal System ─────────────────
            {
                name: 'Liver',
                scrollStart: 2350,
                scrollEnd: 2750,
                onEnter: () => {
                    setText('The Liver — Processes 1.5 litres of blood per minute 🟤');
                },
                onUpdate: (p) => {
                    this.fadeOrgan('liver',   p);
                    this.fadeOrgan('stomach', p, 0.3);
                    this.fadeVessel('portal', p, 0.45);
                }
            },

            // ── 7: Lower Body & Femoral Vessels ──────────
            {
                name: 'Lower Body',
                scrollStart: 2750,
                scrollEnd: 3200,
                onEnter: () => {
                    setText('Lower Body Circulation — Blood reaching every extremity 🦵');
                },
                onUpdate: (p) => {
                    this.fadeOrgan('legL', p);
                    this.fadeOrgan('legR', p, 0.05);
                    this.fadeVessel('femoralAL', p, 0.25);
                    this.fadeVessel('femoralAR', p, 0.3);
                    this.fadeVessel('femoralVL', p, 0.5);
                    this.fadeVessel('femoralVR', p, 0.55);
                }
            },

            // ── 8: Capillary Network ──────────────────────
            {
                name: 'Capillaries',
                scrollStart: 3200,
                scrollEnd: 3650,
                onEnter: () => {
                    setText('Capillaries — 60,000 miles of microvessels 🔴');
                    showPanel('info-vessels');
                },
                onUpdate: (p) => {
                    this.capillaryfadeAll(p);
                }
            },

            // ── 9: Blood Cells ────────────────────────────
            {
                name: 'Blood Cells',
                scrollStart: 3650,
                scrollEnd: 4200,
                onEnter: () => {
                    setText('Blood Cells — Billions flowing every second 💉');
                    showPanel('info-stats');
                    this.system.seedCells(35, 8, 12, 10);
                },
                onUpdate: (p) => {
                    ['heart','lungL','lungR','brain','kidneyL','kidneyR'].forEach(n => {
                        const o = this.system.organs[n];
                        if (o) o.isHighlighted = (p > 0.2);
                    });
                }
            },

            // ── 10: Complete Circulatory System ───────────
            {
                name: 'Complete System',
                scrollStart: 4200,
                scrollEnd: 5100,
                onEnter: () => {
                    setText('The Complete Circulatory System ❤️');
                    document.getElementById('text').style.fontSize   = '22px';
                    document.getElementById('text').style.background = 'rgba(192,57,43,0.2)';

                    document.getElementById('control-panel').style.display    = 'block';
                    document.getElementById('disease-selector').style.display = 'block';
                    document.getElementById('info-panels').style.display      = 'block';
                    showPanel('info-circulatory');
                    showPanel('info-vessels');
                    showPanel('info-stats');

                    if (this.system.particleSystem.particles.length === 0) {
                        this.system.seedCells(35, 8, 12, 10);
                    }
                },
                onUpdate: () => {
                    Object.values(this.system.organs).forEach(o  => { o.opacity = 1; });
                    Object.values(this.system.vessels).forEach(v => { v.opacity = 1; });
                    this.system.capillaries.forEach(c => { c.opacity = 1; });
                    Object.values(this.system.valves).forEach(v  => { v.opacity = 1; });
                }
            },

            // ── 11: Interactive Mode ──────────────────────
            {
                name: 'Interactive Mode',
                scrollStart: 5100,
                scrollEnd: 6000,
                onEnter: () => {
                    setText('Use the controls above to explore disease scenarios!');
                },
                onUpdate: () => {}
            }
        ];
    }

    update(scrollPosition) {
        const active = this.scenes.find(
            s => scrollPosition >= s.scrollStart && scrollPosition < s.scrollEnd
        );
        if (!active) return;

        if (this.currentScene !== active) {
            Object.values(this.system.organs).forEach(o  => { o.isHighlighted = false; });
            Object.values(this.system.vessels).forEach(v => { v.isHighlighted = false; });
            if (active.onEnter) active.onEnter();
            this.currentScene = active;
        }

        if (active.onUpdate) {
            const p = (scrollPosition - active.scrollStart) /
                      (active.scrollEnd - active.scrollStart);
            active.onUpdate(Math.max(0, Math.min(1, p)));
        }
    }

    // ── helpers ──────────────────────────────────────────
    fadeOrgan(name, p, startAt = 0) {
        const o = this.system.organs[name];
        if (!o) return;
        if (p < startAt) return;
        const lp = (p - startAt) / (1 - startAt || 1);
        o.opacity = Math.min(1, lp * 2.5);
    }

    fadeVessel(name, p, startAt = 0) {
        const v = this.system.vessels[name];
        if (!v) return;
        if (p < startAt) return;
        const lp = (p - startAt) / (1 - startAt || 1);
        v.opacity = Math.min(1, lp * 2.5);
    }

    fadeValve(name, p, startAt = 0) {
        const v = this.system.valves[name];
        if (!v) return;
        if (p < startAt) return;
        const lp = (p - startAt) / (1 - startAt || 1);
        v.opacity = Math.min(1, lp * 2.5);
    }

    capillaryfadeAll(p) {
        this.system.capillaries.forEach((c, i) => {
            const startAt = (i / this.system.capillaries.length) * 0.5;
            if (p < startAt) return;
            const lp = (p - startAt) / (1 - startAt || 1);
            c.opacity = Math.min(1, lp * 3);
        });
    }

    cleanup() {
        if (this.heartbeatInterval) {
            clearInterval(this.heartbeatInterval);
            this.heartbeatInterval = null;
        }
    }
}

// ==================== MAIN APPLICATION ====================
class CirculatoryApp {
    constructor() {
        this.mainRenderer     = null;
        this.particleRenderer = null;
        this.system           = null;
        this.sceneManager     = null;
        this.lastTime         = 0;
        this.isRunning        = false;
        this.showLabels       = true;
        window.showLabels     = true;
    }

    initialize() {
        this.mainRenderer     = new CanvasRenderer('mainCanvas',     CONFIG.canvas.width, CONFIG.canvas.height);
        this.particleRenderer = new CanvasRenderer('particleCanvas', CONFIG.canvas.width, CONFIG.canvas.height);

        this.system = new CirculatorySystem();
        this.system.initialize(CONFIG.circulatory.centerX, CONFIG.circulatory.centerY);

        this.sceneManager = new SceneManager(this.system);

        this.setupEventListeners();

        this.isRunning = true;
        this.lastTime  = performance.now();
        this.animate();

        console.log('Circulatory System initialized successfully!');
    }

    setupEventListeners() {
        const toggleLabelsBtn = document.getElementById('toggle-labels');
        if (toggleLabelsBtn) {
            toggleLabelsBtn.addEventListener('click', () => {
                this.showLabels   = !this.showLabels;
                window.showLabels = this.showLabels;
                toggleLabelsBtn.textContent = this.showLabels ? 'Hide Labels' : 'Show Labels';
            });
        }

        const toggleFlowBtn = document.getElementById('toggle-flow');
        if (toggleFlowBtn) {
            toggleFlowBtn.addEventListener('click', () => {
                if (this.system.particleSystem.isPaused) {
                    this.system.particleSystem.resume();
                    toggleFlowBtn.textContent = 'Pause Flow';
                } else {
                    this.system.particleSystem.pause();
                    toggleFlowBtn.textContent = 'Resume Flow';
                }
            });
        }

        const scenarioSelect = document.getElementById('scenario');
        if (scenarioSelect) {
            scenarioSelect.addEventListener('change', (e) => {
                this.system.applyScenario(e.target.value);
                this.updateDiseaseText(e.target.value);
            });
        }
    }

    updateDiseaseText(scenario) {
        const text = document.getElementById('text');
        const msgs = {
            hypertension:    '⚠️ Hypertension: Blood pressure dangerously elevated',
            atherosclerosis: '⚠️ Atherosclerosis: Plaques narrowing your arteries',
            anemia:          '⚠️ Anaemia: Too few red blood cells to carry oxygen',
            heartFailure:    '⚠️ Heart Failure: Pump weakened — organs becoming ischaemic'
        };
        if (msgs[scenario]) {
            text.innerHTML = msgs[scenario];
            text.style.background = 'rgba(192,57,43,0.3)';
        } else {
            text.style.background = 'rgba(0,0,0,0.7)';
        }

        const healthEl = document.getElementById('health-value');
        if (healthEl) {
            const score = scenario === 'normal' ? 100 :
                (CONFIG.disease[scenario] ? CONFIG.disease[scenario].healthScore : 100);
            healthEl.textContent = score;
            healthEl.style.color = score >= 70 ? '#58d68d' : score >= 45 ? '#f39c12' : '#ec7063';
        }
    }

    animate() {
        if (!this.isRunning) return;

        const now       = performance.now();
        const deltaTime = now - this.lastTime;
        this.lastTime   = now;

        this.mainRenderer.clear();
        this.particleRenderer.clear();

        this.system.update(deltaTime);
        this.system.draw(this.mainRenderer, this.particleRenderer);

        this.updateStats();

        requestAnimationFrame(() => this.animate());
    }

    updateStats() {
        const ps = this.system.particleSystem;
        setElText('rbc-count',      ps.getCountByType('rbc'));
        setElText('wbc-count',      ps.getCountByType('wbc'));
        setElText('platelet-count', ps.getCountByType('platelet'));
        setElText('plasma-count',   ps.getCountByType('plasma'));
    }

    handleScroll(scrollPosition) {
        this.sceneManager.update(scrollPosition);
    }

    destroy() {
        this.isRunning = false;
        this.sceneManager.cleanup();
        this.system.particleSystem.clear();
    }
}

// ==================== HELPERS ====================
function setText(html) {
    const el = document.getElementById('text');
    if (el) {
        el.innerHTML    = html;
        el.style.fontSize   = '18px';
        el.style.background = 'rgba(0,0,0,0.7)';
    }
}

function showPanel(id) {
    const el = document.getElementById(id);
    if (el) el.classList.add('visible');
}

function setElText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
}

// ==================== INITIALIZATION ====================
let app = null;

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    const scroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (scroll === 0) {
        document.getElementById('scroll').style.display = 'block';
        document.getElementById('arrow').style.display  = 'block';
    }

    if (scroll > 10) {
        document.getElementById('main').style.opacity   = '1';
        document.getElementById('scroll').style.display = 'none';
        document.getElementById('arrow').style.display  = 'none';
    }

    if (scroll > 50 && !app) {
        app = new CirculatoryApp();
        app.initialize();
    }

    if (app) {
        app.handleScroll(scroll);
    }

    document.getElementById('myBtn').style.display = scroll > 5000 ? 'block' : 'none';
}

alert(
    'Welcome to the Circulatory System!\n\n' +
    'A scientifically accurate, interactive visualization.\n\n' +
    'Features:\n' +
    '✓ Heart, Lungs, Brain, Kidneys, Liver & more\n' +
    '✓ Arteries, Veins & Capillary networks\n' +
    '✓ Live blood cell animation (RBCs, WBCs, Platelets)\n' +
    '✓ Heart valve animation\n' +
    '✓ Disease scenarios (Hypertension, Atherosclerosis, Anaemia, Heart Failure)\n\n' +
    'Scroll slowly to explore! ❤️'
);

window.addEventListener('beforeunload', () => {
    if (app) app.destroy();
});
