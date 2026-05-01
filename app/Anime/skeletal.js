// ====================================================================
// SKELETAL SYSTEM VISUALIZATION - MODULAR OOP ARCHITECTURE
// Mirrors the structure of the Circulatory System visualization:
//   CONFIG → Utilities → Renderer → Structures → Particles →
//   SkeletalSystem → SceneManager → App → Init
// ====================================================================

// ==================== CONFIGURATION ====================
const CONFIG = {
    canvas: {
        width: 1200,
        height: 800,
        backgroundColor: 'transparent'
    },
    skeleton: {
        centerX: 600,
        centerY: 400,
        boneColor: '#e8d5b7',          // warm ivory
        boneStroke: '#c4a882',         // darker ivory stroke
        cartilageColor: '#85c1e9',     // light blue cartilage
        marrowColor: '#e8a87c',        // peach-orange marrow
        jointGlowColor: 'rgba(232,213,183,0.4)',
        ghostOpacity: 0.09             // base ghost silhouette opacity
    },
    cells: {
        maxParticles: 120,
        particleSize: 3,
        flowSpeed: 1.8
    },
    animation: {
        remodelingInterval: 2000,       // new cell every 2 s
        particleUpdateInterval: 16      // 60 FPS
    },
    disease: {
        osteoporosis: {
            densityFactor: 0.45,        // bone becomes porous
            healthScore: 35
        },
        arthritis: {
            jointInflamSize: 1.6,       // joints swell
            healthScore: 55
        },
        fracture: {
            healthScore: 60             // healing over time
        },
        osteomalacia: {
            softnessFactor: 0.7,        // bones bend / glow yellow
            healthScore: 40
        }
    }
};

// ==================== UTILITY CLASSES ====================
class Vector2D {
    constructor(x, y) { this.x = x; this.y = y; }

    add(v)            { return new Vector2D(this.x + v.x, this.y + v.y); }
    subtract(v)       { return new Vector2D(this.x - v.x, this.y - v.y); }
    multiply(s)       { return new Vector2D(this.x * s, this.y * s); }
    magnitude()       { return Math.sqrt(this.x * this.x + this.y * this.y); }
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

    toString() { return `rgba(${Math.round(this.r)},${Math.round(this.g)},${Math.round(this.b)},${this.a.toFixed(2)})`; }

    static fromHex(hex) {
        const res = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return res ? new Color(parseInt(res[1],16), parseInt(res[2],16), parseInt(res[3],16)) : null;
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
        this.ctx = this.canvas.getContext('2d');
        this.width = width;
        this.height = height;
        this.canvas.width = width;
        this.canvas.height = height;
    }

    clear() { this.ctx.clearRect(0, 0, this.width, this.height); }

    // ── primitives ────────────────────────────────────────
    drawCircle(x, y, radius, fillColor, strokeColor = null, lineWidth = 1) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, Math.PI * 2);
        if (fillColor) { this.ctx.fillStyle = fillColor; this.ctx.fill(); }
        if (strokeColor) {
            this.ctx.strokeStyle = strokeColor;
            this.ctx.lineWidth = lineWidth;
            this.ctx.stroke();
        }
    }

    drawEllipse(x, y, rx, ry, fillColor, strokeColor = null, lineWidth = 1, rotation = 0) {
        this.ctx.save();
        this.ctx.translate(x, y);
        this.ctx.rotate(rotation);
        this.ctx.beginPath();
        this.ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
        if (fillColor) { this.ctx.fillStyle = fillColor; this.ctx.fill(); }
        if (strokeColor) {
            this.ctx.strokeStyle = strokeColor;
            this.ctx.lineWidth = lineWidth;
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
        this.ctx.lineWidth = lineWidth;
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
            this.ctx.lineWidth = lineWidth;
            this.ctx.stroke();
        }
    }

    drawCurve(startX, startY, cp1x, cp1y, cp2x, cp2y, endX, endY, strokeColor, lineWidth = 2) {
        this.ctx.beginPath();
        this.ctx.moveTo(startX, startY);
        this.ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY);
        this.ctx.strokeStyle = strokeColor;
        this.ctx.lineWidth = lineWidth;
        this.ctx.stroke();
    }

    drawText(text, x, y, font = '14px Arial', color = '#ffffff', align = 'center') {
        this.ctx.font = font;
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

    // ── rounded rectangle (for bone shafts with rounded ends) ──
    drawRoundedRect(x, y, w, h, radius, fillColor, strokeColor = null, lineWidth = 1) {
        const r = Math.min(radius, w / 2, h / 2);
        this.ctx.beginPath();
        this.ctx.moveTo(x + r, y);
        this.ctx.lineTo(x + w - r, y);
        this.ctx.quadraticCurveTo(x + w, y, x + w, y + r);
        this.ctx.lineTo(x + w, y + h - r);
        this.ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        this.ctx.lineTo(x + r, y + h);
        this.ctx.quadraticCurveTo(x, y + h, x, y + h - r);
        this.ctx.lineTo(x, y + r);
        this.ctx.quadraticCurveTo(x, y, x + r, y);
        this.ctx.closePath();
        if (fillColor) { this.ctx.fillStyle = fillColor; this.ctx.fill(); }
        if (strokeColor) {
            this.ctx.strokeStyle = strokeColor;
            this.ctx.lineWidth = lineWidth;
            this.ctx.stroke();
        }
    }

    // ── save / restore helpers ────────────────────────────
    save()    { this.ctx.save(); }
    restore() { this.ctx.restore(); }
    translate(x, y) { this.ctx.translate(x, y); }
    rotate(a)       { this.ctx.rotate(a); }
    scale(sx, sy)   { this.ctx.scale(sx, sy || sx); }
}

// ==================== ANATOMICAL STRUCTURES ====================

// ── Bone ─────────────────────────────────────────────────────────
class Bone {
    constructor(name, type, shapeData, drawFn) {
        this.name        = name;
        this.type        = type;
        this.shapeData   = shapeData;
        this.drawFn      = drawFn;
        this.opacity     = 0;          // scene-driven bright layer starts at 0
        this.isHighlighted = false;
        this.highlightPulse = 0;
        this.densityFactor = 1;
        this.isFractured   = false;
        this.fractureProg  = 0;
        this.isSoft        = false;
    }

    // ── colour helpers ──────────────────────────────────────
    getBoneColor() {
        let base = Color.fromHex(CONFIG.skeleton.boneColor);
        if (this.isSoft) {
            base = base.lerp(new Color(240, 220, 100), 0.45);
        }
        if (this.densityFactor < 1) {
            base = base.lerp(new Color(180, 170, 160), 1 - this.densityFactor);
            base.a = 0.5 + this.densityFactor * 0.5;
        }
        base.a *= this.opacity;
        return base;
    }

    getStrokeColor() {
        let base = Color.fromHex(CONFIG.skeleton.boneStroke);
        if (this.isSoft) base = base.lerp(new Color(200, 180, 60), 0.45);
        base.a *= this.opacity;
        return base;
    }

    draw(renderer) {
        if (this.opacity <= 0) return;

        // ── highlight glow (pulsing) ──
        if (this.isHighlighted) {
            this.highlightPulse += 0.08;
            const glowAlpha = 0.15 + Math.sin(this.highlightPulse) * 0.12;
            renderer.ctx.save();
            renderer.ctx.shadowColor = `rgba(232,213,183,${glowAlpha})`;
            renderer.ctx.shadowBlur  = 14;
            this.drawBone(renderer);
            renderer.ctx.restore();
        }

        // ── main bone geometry ──
        this.drawBone(renderer);

        // ── fracture line overlay ──
        if (this.isFractured && this.fractureProg < 1) {
            this.drawFracture(renderer);
        }

        // ── label ──
        if (window.showLabels && this.opacity > 0.55) {
            const labelPos = this.shapeData.labelPos || this.shapeData.center;
            if (labelPos) {
                renderer.drawText(
                    this.name,
                    labelPos.x,
                    labelPos.y,
                    'bold 11px "Segoe UI", sans-serif',
                    `rgba(255,255,255,${this.opacity * 0.92})`,
                    'center'
                );
            }
        }
    }

    drawBone(renderer) {
        if (this.drawFn) this.drawFn(renderer, this);
    }

    drawFracture(renderer) {
        const c = this.shapeData.center;
        if (!c) return;
        const healAlpha = 1 - this.fractureProg;
        const crackColor = `rgba(255,80,80,${healAlpha * this.opacity})`;
        const hw = (this.shapeData.width || 16) * 0.35;

        const points = [
            new Vector2D(c.x - hw, c.y - 2),
            new Vector2D(c.x - hw * 0.4, c.y + 4),
            new Vector2D(c.x, c.y - 3),
            new Vector2D(c.x + hw * 0.5, c.y + 5),
            new Vector2D(c.x + hw, c.y - 1)
        ];
        renderer.drawPath(points, crackColor, 2.5);

        if (this.fractureProg > 0.15) {
            const callusAlpha = Math.min(1, (this.fractureProg - 0.15) / 0.4) * this.opacity * 0.5;
            renderer.drawGradientCircle(c.x, c.y, hw * 1.4, [
                { offset: 0, color: `rgba(88,214,141,${callusAlpha})` },
                { offset: 1, color: 'rgba(88,214,141,0)' }
            ]);
        }
    }

    applyNormal() {
        this.densityFactor = 1;
        this.isFractured   = false;
        this.fractureProg  = 0;
        this.isSoft        = false;
        this.isHighlighted = false;
    }

    update(deltaTime) {
        if (this.isFractured && this.fractureProg < 1) {
            this.fractureProg += deltaTime * 0.00008;
        }
    }
}

// ── Joint ────────────────────────────────────────────────────────
class Joint {
    constructor(name, position, type, radius = 8) {
        this.name        = name;
        this.position    = position;
        this.type        = type;
        this.radius      = radius;
        this.opacity     = 0;
        this.isInflamed  = false;
        this.inflammPulse = 0;
    }

    draw(renderer) {
        if (this.opacity <= 0) return;

        const x = this.position.x;
        const y = this.position.y;
        const r = this.radius;
        const alpha = this.opacity;

        if (this.isInflamed) {
            this.inflammPulse += 0.07;
            const iAlpha = (0.25 + Math.sin(this.inflammPulse) * 0.15) * alpha;
            renderer.drawGradientCircle(x, y, r * 2.2, [
                { offset: 0, color: `rgba(236,112,99,${iAlpha})` },
                { offset: 0.6, color: `rgba(236,112,99,${iAlpha * 0.4})` },
                { offset: 1, color: 'rgba(236,112,99,0)' }
            ]);
        }

        const capsuleColor = `rgba(200,180,160,${alpha * 0.35})`;
        renderer.drawCircle(x, y, r * 1.5, capsuleColor, null);

        const cartColor  = `rgba(133,193,233,${alpha * 0.75})`;
        const cartStroke = `rgba(100,160,210,${alpha * 0.9})`;
        renderer.drawCircle(x, y, r, cartColor, cartStroke, 2);

        let dotColor;
        switch (this.type) {
            case 'ball-socket': dotColor = `rgba(232,168,124,${alpha})`; break;
            case 'hinge':       dotColor = `rgba(133,193,233,${alpha})`; break;
            case 'pivot':       dotColor = `rgba(174,214,241,${alpha})`; break;
            case 'gliding':     dotColor = `rgba(163,228,215,${alpha})`; break;
            case 'saddle':      dotColor = `rgba(200,180,220,${alpha})`; break;
            default:            dotColor = `rgba(200,200,200,${alpha})`; break;
        }
        renderer.drawCircle(x, y, r * 0.35, dotColor);

        if (window.showLabels && this.opacity > 0.6) {
            renderer.drawText(
                this.name,
                x,
                y - r * 1.9,
                '10px "Segoe UI", sans-serif',
                `rgba(163,228,215,${alpha * 0.9})`,
                'center'
            );
        }
    }

    applyNormal() {
        this.isInflamed   = false;
        this.inflammPulse = 0;
    }

    update() {}
}

// ==================== BONE FACTORY ====================
class BoneFactory {

    static longBone(renderer, bone, cx, cy, topX, topY, botX, botY, shaftW, epW, epH, color, stroke) {
        renderer.drawEllipse(topX, topY, epW, epH, color.toString(), stroke.toString(), 2);
        renderer.drawEllipse(botX, botY, epW, epH, color.toString(), stroke.toString(), 2);
        const hw = shaftW / 2;
        const dx = botX - topX;
        const dy = botY - topY;
        const len = Math.sqrt(dx * dx + dy * dy);
        const ux = dx / len, uy = dy / len;
        const px = -uy, py = ux;

        const shaft = [
            new Vector2D(topX + px * hw, topY + py * hw),
            new Vector2D(botX + px * hw, botY + py * hw),
            new Vector2D(botX - px * hw, botY - py * hw),
            new Vector2D(topX - px * hw, topY - py * hw)
        ];
        renderer.fillPolygon(shaft, color.toString(), stroke.toString(), 2);
    }

    static createSkull(cx, cy) {
        const center = new Vector2D(cx, cy - 168);
        return new Bone('Skull', 'irregular', {
            center,
            labelPos: new Vector2D(cx, cy - 222)
        }, (renderer, bone) => {
            const x = center.x, y = center.y;
            const col = bone.getBoneColor();
            const str = bone.getStrokeColor();

            renderer.drawEllipse(x, y - 14, 38, 32, col.toString(), str.toString(), 2.5);
            renderer.drawEllipse(x - 28, y + 14, 12, 7, col.toString(), str.toString(), 1.5);
            renderer.drawEllipse(x + 28, y + 14, 12, 7, col.toString(), str.toString(), 1.5);
            renderer.drawEllipse(x, y + 8, 7, 10, `rgba(30,20,20,${bone.opacity * 0.7})`, str.toString(), 1);
            renderer.drawCircle(x - 14, y - 4, 9, `rgba(20,15,15,${bone.opacity * 0.75})`, str.toString(), 1.2);
            renderer.drawCircle(x + 14, y - 4, 9, `rgba(20,15,15,${bone.opacity * 0.75})`, str.toString(), 1.2);

            renderer.ctx.beginPath();
            renderer.ctx.arc(x, y - 14, 30, 0.3, 1.2);
            renderer.ctx.strokeStyle = `rgba(196,168,130,${bone.opacity * 0.5})`;
            renderer.ctx.lineWidth = 1;
            renderer.ctx.stroke();
        });
    }

    static createMandible(cx, cy) {
        const center = new Vector2D(cx, cy - 130);
        return new Bone('Mandible', 'irregular', {
            center,
            labelPos: new Vector2D(cx, cy - 108)
        }, (renderer, bone) => {
            const x = center.x, y = center.y;
            const col = bone.getBoneColor();
            const str = bone.getStrokeColor();

            const pts = [
                new Vector2D(x - 22, y - 12),
                new Vector2D(x - 24, y - 4),
                new Vector2D(x - 22, y + 8),
                new Vector2D(x - 10, y + 16),
                new Vector2D(x, y + 18),
                new Vector2D(x + 10, y + 16),
                new Vector2D(x + 22, y + 8),
                new Vector2D(x + 24, y - 4),
                new Vector2D(x + 22, y - 12)
            ];
            renderer.fillPolygon(pts, col.toString(), str.toString(), 2);
        });
    }

    static createCervicalSpine(cx, cy) {
        const center = new Vector2D(cx, cy - 105);
        const verts = [];
        for (let i = 0; i < 7; i++) {
            verts.push(new Vector2D(cx, cy - 105 + i * 11));
        }
        return new Bone('Cervical Spine', 'irregular', {
            center,
            labelPos: new Vector2D(cx + 52, cy - 105),
            verts
        }, (renderer, bone) => {
            const col = bone.getBoneColor();
            const str = bone.getStrokeColor();
            verts.forEach(v => {
                renderer.drawEllipse(v.x, v.y, 10, 5, col.toString(), str.toString(), 1.5);
                renderer.drawEllipse(v.x - 14, v.y, 5, 3, col.toString(), str.toString(), 1);
                renderer.drawEllipse(v.x + 14, v.y, 5, 3, col.toString(), str.toString(), 1);
            });
        });
    }

    static createThoracicSpine(cx, cy) {
        const startY = cy - 28;
        const center = new Vector2D(cx, startY + 66);
        const verts = [];
        for (let i = 0; i < 12; i++) verts.push(new Vector2D(cx, startY + i * 11));

        return new Bone('Thoracic Spine', 'irregular', {
            center,
            labelPos: new Vector2D(cx + 58, startY + 40),
            verts
        }, (renderer, bone) => {
            const col = bone.getBoneColor();
            const str = bone.getStrokeColor();
            verts.forEach(v => {
                renderer.drawEllipse(v.x, v.y, 9, 5, col.toString(), str.toString(), 1.5);
                renderer.drawCircle(v.x, v.y + 5, 3, col.toString(), str.toString(), 1);
            });
        });
    }

    static createLumbarSpine(cx, cy) {
        const startY = cy + 104;
        const center = new Vector2D(cx, startY + 22);
        const verts = [];
        for (let i = 0; i < 5; i++) verts.push(new Vector2D(cx, startY + i * 11));

        return new Bone('Lumbar Spine', 'irregular', {
            center,
            labelPos: new Vector2D(cx + 50, startY + 18),
            verts
        }, (renderer, bone) => {
            const col = bone.getBoneColor();
            const str = bone.getStrokeColor();
            verts.forEach(v => {
                renderer.drawEllipse(v.x, v.y, 12, 6, col.toString(), str.toString(), 1.8);
                renderer.drawEllipse(v.x - 16, v.y, 5, 3.5, col.toString(), str.toString(), 1);
                renderer.drawEllipse(v.x + 16, v.y, 5, 3.5, col.toString(), str.toString(), 1);
            });
        });
    }

    static createSacrum(cx, cy) {
        const center = new Vector2D(cx, cy + 162);
        return new Bone('Sacrum', 'irregular', {
            center,
            labelPos: new Vector2D(cx, cy + 190)
        }, (renderer, bone) => {
            const col = bone.getBoneColor();
            const str = bone.getStrokeColor();
            const pts = [
                new Vector2D(center.x - 18, center.y - 16),
                new Vector2D(center.x + 18, center.y - 16),
                new Vector2D(center.x + 12, center.y + 16),
                new Vector2D(center.x - 12, center.y + 16)
            ];
            renderer.fillPolygon(pts, col.toString(), str.toString(), 2);
            for (let i = 0; i < 4; i++) {
                renderer.drawCircle(center.x - 7, center.y - 8 + i * 7, 2.5,
                    `rgba(25,20,18,${bone.opacity*0.6})`, str.toString(), 0.8);
                renderer.drawCircle(center.x + 7, center.y - 8 + i * 7, 2.5,
                    `rgba(25,20,18,${bone.opacity*0.6})`, str.toString(), 0.8);
            }
        });
    }

    static createCoccyx(cx, cy) {
        const center = new Vector2D(cx, cy + 195);
        return new Bone('Coccyx', 'irregular', {
            center,
            labelPos: new Vector2D(cx + 28, cy + 200)
        }, (renderer, bone) => {
            const col = bone.getBoneColor();
            const str = bone.getStrokeColor();
            renderer.drawEllipse(center.x, center.y, 5, 10, col.toString(), str.toString(), 1.5);
        });
    }

    static createSternum(cx, cy) {
        const center = new Vector2D(cx, cy + 20);
        return new Bone('Sternum', 'flat', {
            center,
            labelPos: new Vector2D(cx, cy - 5)
        }, (renderer, bone) => {
            const col = bone.getBoneColor();
            const str = bone.getStrokeColor();
            const pts = [
                new Vector2D(center.x - 12, center.y - 42),
                new Vector2D(center.x + 12, center.y - 42),
                new Vector2D(center.x + 10, center.y - 30),
                new Vector2D(center.x + 8, center.y + 30),
                new Vector2D(center.x + 3, center.y + 42),
                new Vector2D(center.x - 3, center.y + 42),
                new Vector2D(center.x - 8, center.y + 30),
                new Vector2D(center.x - 10, center.y - 30)
            ];
            renderer.fillPolygon(pts, col.toString(), str.toString(), 2);
        });
    }

    static createRibPair(cx, cy, index) {
        const ribNum   = index + 1;
        const yOffset  = cy - 30 + index * 11;
        const outerX   = 70 + index * 2;
        const dropY    = 8 + index * 3.5;

        const leftCenter  = new Vector2D(cx - outerX * 0.5, yOffset + dropY * 0.5);
        const rightCenter = new Vector2D(cx + outerX * 0.5, yOffset + dropY * 0.5);

        const makeDraw = (side) => (renderer, bone) => {
            const col  = bone.getBoneColor();
            const str  = bone.getStrokeColor();
            const sign = side === 'L' ? -1 : 1;
            const sx   = cx + sign * 10;
            const sy   = yOffset;
            const ex   = cx + sign * outerX;
            const ey   = yOffset + dropY;
            const cpx  = cx + sign * (outerX * 0.45);
            const cpy  = yOffset - 4 + dropY * 0.15;

            renderer.ctx.beginPath();
            renderer.ctx.moveTo(sx, sy);
            renderer.ctx.quadraticCurveTo(cpx, cpy, ex, ey);
            renderer.ctx.strokeStyle = str.toString();
            renderer.ctx.lineWidth = 5;
            renderer.ctx.lineCap = 'round';
            renderer.ctx.stroke();

            renderer.ctx.beginPath();
            renderer.ctx.moveTo(sx, sy);
            renderer.ctx.quadraticCurveTo(cpx, cpy, ex, ey);
            renderer.ctx.strokeStyle = col.toString();
            renderer.ctx.lineWidth = 3;
            renderer.ctx.stroke();

            if (ribNum <= 7) {
                const cartEnd = new Vector2D(cx + sign * 10, yOffset + 2);
                renderer.ctx.beginPath();
                renderer.ctx.moveTo(sx, sy);
                renderer.ctx.lineTo(cartEnd.x, cartEnd.y);
                renderer.ctx.strokeStyle = `rgba(133,193,233,${bone.opacity * 0.6})`;
                renderer.ctx.lineWidth = 3;
                renderer.ctx.lineCap = 'round';
                renderer.ctx.stroke();
            }
        };

        return {
            left: new Bone(`Rib ${ribNum} (L)`, 'flat', {
                center: leftCenter,
                labelPos: new Vector2D(cx - outerX - 10, yOffset + dropY)
            }, makeDraw('L')),
            right: new Bone(`Rib ${ribNum} (R)`, 'flat', {
                center: rightCenter,
                labelPos: new Vector2D(cx + outerX + 10, yOffset + dropY)
            }, makeDraw('R'))
        };
    }

    static createScapula(cx, cy, side) {
        const sign = side === 'L' ? -1 : 1;
        const center = new Vector2D(cx + sign * 72, cy - 40);
        return new Bone(`Scapula (${side})`, 'flat', {
            center,
            labelPos: new Vector2D(center.x, center.y - 25)
        }, (renderer, bone) => {
            const col = bone.getBoneColor();
            const str = bone.getStrokeColor();
            const x = center.x, y = center.y;
            const pts = [
                new Vector2D(x, y - 28),
                new Vector2D(x - sign * 20, y + 22),
                new Vector2D(x + sign * 8, y + 18),
                new Vector2D(x + sign * 10, y - 10)
            ];
            renderer.fillPolygon(pts, col.toString(), str.toString(), 2);
            renderer.drawPath([
                new Vector2D(x + sign * 10, y - 2),
                new Vector2D(x - sign * 4, y + 6)
            ], str.toString(), 2.5);
        });
    }

    static createClavicle(cx, cy, side) {
        const sign = side === 'L' ? -1 : 1;
        const center = new Vector2D(cx + sign * 40, cy - 62);
        return new Bone(`Clavicle (${side})`, 'long', {
            center,
            labelPos: new Vector2D(center.x, center.y - 14)
        }, (renderer, bone) => {
            const col = bone.getBoneColor();
            const str = bone.getStrokeColor();
            const sx = cx + sign * 12;
            const sy = cy - 58;
            const ex = cx + sign * 70;
            const ey = cy - 58;

            renderer.ctx.beginPath();
            renderer.ctx.moveTo(sx, sy);
            renderer.ctx.quadraticCurveTo(cx + sign * 35, cy - 72, ex, ey);
            renderer.ctx.strokeStyle = str.toString();
            renderer.ctx.lineWidth = 6;
            renderer.ctx.lineCap = 'round';
            renderer.ctx.stroke();

            renderer.ctx.beginPath();
            renderer.ctx.moveTo(sx, sy);
            renderer.ctx.quadraticCurveTo(cx + sign * 35, cy - 72, ex, ey);
            renderer.ctx.strokeStyle = col.toString();
            renderer.ctx.lineWidth = 4;
            renderer.ctx.stroke();
        });
    }

    static createHumerus(cx, cy, side) {
        const sign = side === 'L' ? -1 : 1;
        const topPos  = new Vector2D(cx + sign * 70, cy - 50);
        const botPos  = new Vector2D(cx + sign * 82, cy + 50);
        const center  = Vector2D.lerp(topPos, botPos, 0.5);
        return new Bone(`Humerus (${side})`, 'long', {
            center,
            width: 14,
            labelPos: new Vector2D(center.x + sign * 22, center.y)
        }, (renderer, bone) => {
            const col = bone.getBoneColor();
            const str = bone.getStrokeColor();
            BoneFactory.longBone(renderer, bone,
                center.x, center.y,
                topPos.x,  topPos.y,
                botPos.x,  botPos.y,
                10, 13, 8, col, str
            );
        });
    }

    static createRadius(cx, cy, side) {
        const sign = side === 'L' ? -1 : 1;
        const topPos = new Vector2D(cx + sign * 78, cy + 52);
        const botPos = new Vector2D(cx + sign * 72, cy + 118);
        const center = Vector2D.lerp(topPos, botPos, 0.5);
        return new Bone(`Radius (${side})`, 'long', {
            center,
            width: 8,
            labelPos: new Vector2D(center.x + sign * 14, center.y - 4)
        }, (renderer, bone) => {
            const col = bone.getBoneColor();
            const str = bone.getStrokeColor();
            BoneFactory.longBone(renderer, bone,
                center.x, center.y,
                topPos.x, topPos.y,
                botPos.x, botPos.y,
                6, 8, 5, col, str
            );
        });
    }

    static createUlna(cx, cy, side) {
        const sign = side === 'L' ? -1 : 1;
        const topPos = new Vector2D(cx + sign * 86, cy + 48);
        const botPos = new Vector2D(cx + sign * 80, cy + 118);
        const center = Vector2D.lerp(topPos, botPos, 0.5);
        return new Bone(`Ulna (${side})`, 'long', {
            center,
            width: 8,
            labelPos: new Vector2D(center.x + sign * 22, center.y + 4)
        }, (renderer, bone) => {
            const col = bone.getBoneColor();
            const str = bone.getStrokeColor();
            renderer.drawCircle(topPos.x, topPos.y - 5, 5, col.toString(), str.toString(), 1.5);
            BoneFactory.longBone(renderer, bone,
                center.x, center.y,
                topPos.x, topPos.y,
                botPos.x, botPos.y,
                6, 7, 5, col, str
            );
        });
    }

    static createHand(cx, cy, side) {
        const sign = side === 'L' ? -1 : 1;
        const wristPos = new Vector2D(cx + sign * 76, cy + 120);
        const center   = new Vector2D(wristPos.x, wristPos.y + 18);
        return new Bone(`Hand (${side})`, 'short', {
            center,
            labelPos: new Vector2D(center.x + sign * 22, center.y + 8)
        }, (renderer, bone) => {
            const col = bone.getBoneColor();
            const str = bone.getStrokeColor();
            const x = wristPos.x, y = wristPos.y;

            renderer.drawEllipse(x, y + 5, 12, 7, col.toString(), str.toString(), 1.5);

            const fingerSpread = 5;
            for (let i = 0; i < 5; i++) {
                const fx = x + sign * (i - 2) * fingerSpread;
                renderer.ctx.beginPath();
                renderer.ctx.moveTo(fx, y + 10);
                renderer.ctx.lineTo(fx, y + 22);
                renderer.ctx.strokeStyle = str.toString();
                renderer.ctx.lineWidth = 4;
                renderer.ctx.lineCap = 'round';
                renderer.ctx.stroke();
                renderer.ctx.beginPath();
                renderer.ctx.moveTo(fx, y + 10);
                renderer.ctx.lineTo(fx, y + 22);
                renderer.ctx.strokeStyle = col.toString();
                renderer.ctx.lineWidth = 2.5;
                renderer.ctx.stroke();
                renderer.ctx.beginPath();
                renderer.ctx.moveTo(fx, y + 22);
                renderer.ctx.lineTo(fx, y + 30);
                renderer.ctx.strokeStyle = str.toString();
                renderer.ctx.lineWidth = 3;
                renderer.ctx.stroke();
                renderer.ctx.beginPath();
                renderer.ctx.moveTo(fx, y + 22);
                renderer.ctx.lineTo(fx, y + 30);
                renderer.ctx.strokeStyle = col.toString();
                renderer.ctx.lineWidth = 2;
                renderer.ctx.stroke();
                if (i !== 0) {
                    renderer.ctx.beginPath();
                    renderer.ctx.moveTo(fx, y + 30);
                    renderer.ctx.lineTo(fx, y + 37);
                    renderer.ctx.strokeStyle = str.toString();
                    renderer.ctx.lineWidth = 2.5;
                    renderer.ctx.stroke();
                    renderer.ctx.beginPath();
                    renderer.ctx.moveTo(fx, y + 30);
                    renderer.ctx.lineTo(fx, y + 37);
                    renderer.ctx.strokeStyle = col.toString();
                    renderer.ctx.lineWidth = 1.5;
                    renderer.ctx.stroke();
                }
            }
        });
    }

    static createPelvisSide(cx, cy, side) {
        const sign = side === 'L' ? -1 : 1;
        const center = new Vector2D(cx + sign * 42, cy + 158);
        return new Bone(`Pelvis (${side})`, 'irregular', {
            center,
            labelPos: new Vector2D(center.x + sign * 32, center.y - 18)
        }, (renderer, bone) => {
            const col = bone.getBoneColor();
            const str = bone.getStrokeColor();
            const x = center.x, y = center.y;

            const ilium = [
                new Vector2D(x + sign * 5, y - 30),
                new Vector2D(x + sign * 30, y - 22),
                new Vector2D(x + sign * 32, y - 8),
                new Vector2D(x + sign * 22, y + 8),
                new Vector2D(x + sign * 10, y + 12)
            ];
            renderer.fillPolygon(ilium, col.toString(), str.toString(), 2);

            const ischium = [
                new Vector2D(x + sign * 10, y + 12),
                new Vector2D(x + sign * 18, y + 22),
                new Vector2D(x + sign * 14, y + 34),
                new Vector2D(x + sign * 2, y + 30)
            ];
            renderer.fillPolygon(ischium, col.toString(), str.toString(), 2);

            renderer.drawPath([
                new Vector2D(x + sign * 2, y + 30),
                new Vector2D(cx, y + 34)
            ], str.toString(), 4);
            renderer.drawPath([
                new Vector2D(x + sign * 2, y + 30),
                new Vector2D(cx, y + 34)
            ], col.toString(), 2.5);

            renderer.drawCircle(x + sign * 12, y + 6, 11,
                `rgba(133,193,233,${bone.opacity * 0.45})`,
                str.toString(), 1.5);
        });
    }

    static createFemur(cx, cy, side) {
        const sign = side === 'L' ? -1 : 1;
        const headPos = new Vector2D(cx + sign * 54, cy + 164);
        const botPos  = new Vector2D(cx + sign * 40, cy + 290);
        const center  = Vector2D.lerp(headPos, botPos, 0.5);
        return new Bone(`Femur (${side})`, 'long', {
            center,
            width: 16,
            labelPos: new Vector2D(center.x + sign * 24, center.y)
        }, (renderer, bone) => {
            const col = bone.getBoneColor();
            const str = bone.getStrokeColor();

            renderer.drawCircle(headPos.x + sign * 10, headPos.y + 4, 7,
                col.toString(), str.toString(), 1.5);

            BoneFactory.longBone(renderer, bone,
                center.x, center.y,
                headPos.x, headPos.y,
                botPos.x,  botPos.y,
                11, 14, 9, col, str
            );

            renderer.drawCircle(headPos.x - sign * 8, headPos.y - 3, 9,
                col.toString(), str.toString(), 2);
        });
    }

    static createPatella(cx, cy, side) {
        const sign   = side === 'L' ? -1 : 1;
        const center = new Vector2D(cx + sign * 40, cy + 293);
        return new Bone(`Patella (${side})`, 'sesamoid', {
            center,
            labelPos: new Vector2D(center.x + sign * 18, center.y)
        }, (renderer, bone) => {
            const col = bone.getBoneColor();
            const str = bone.getStrokeColor();
            renderer.drawEllipse(center.x + sign * 12, center.y, 6, 8, col.toString(), str.toString(), 2);
        });
    }

    static createTibia(cx, cy, side) {
        const sign   = side === 'L' ? -1 : 1;
        const topPos = new Vector2D(cx + sign * 36, cy + 295);
        const botPos = new Vector2D(cx + sign * 34, cy + 380);
        const center = Vector2D.lerp(topPos, botPos, 0.5);
        return new Bone(`Tibia (${side})`, 'long', {
            center,
            width: 12,
            labelPos: new Vector2D(center.x + sign * 16, center.y)
        }, (renderer, bone) => {
            const col = bone.getBoneColor();
            const str = bone.getStrokeColor();
            BoneFactory.longBone(renderer, bone,
                center.x, center.y,
                topPos.x, topPos.y,
                botPos.x, botPos.y,
                9, 12, 7, col, str
            );
        });
    }

    static createFibula(cx, cy, side) {
        const sign   = side === 'L' ? -1 : 1;
        const topPos = new Vector2D(cx + sign * 48, cy + 300);
        const botPos = new Vector2D(cx + sign * 46, cy + 380);
        const center = Vector2D.lerp(topPos, botPos, 0.5);
        return new Bone(`Fibula (${side})`, 'long', {
            center,
            width: 6,
            labelPos: new Vector2D(center.x + sign * 20, center.y + 4)
        }, (renderer, bone) => {
            const col = bone.getBoneColor();
            const str = bone.getStrokeColor();
            BoneFactory.longBone(renderer, bone,
                center.x, center.y,
                topPos.x, topPos.y,
                botPos.x, botPos.y,
                4, 5, 4, col, str
            );
        });
    }

    static createFoot(cx, cy, side) {
        const sign   = side === 'L' ? -1 : 1;
        const ankle  = new Vector2D(cx + sign * 38, cy + 382);
        const center = new Vector2D(ankle.x, ankle.y + 20);
        return new Bone(`Foot (${side})`, 'short', {
            center,
            labelPos: new Vector2D(center.x + sign * 24, center.y + 12)
        }, (renderer, bone) => {
            const col = bone.getBoneColor();
            const str = bone.getStrokeColor();
            const x = ankle.x, y = ankle.y;

            renderer.drawEllipse(x - sign * 4, y + 8, 10, 7, col.toString(), str.toString(), 2);
            renderer.drawEllipse(x, y + 2, 7, 5, col.toString(), str.toString(), 1.5);

            for (let i = 0; i < 5; i++) {
                const fx = x + sign * (i - 2) * 4.5;
                renderer.ctx.beginPath();
                renderer.ctx.moveTo(fx, y + 14);
                renderer.ctx.lineTo(fx + sign * (i - 2) * 0.8, y + 28);
                renderer.ctx.strokeStyle = str.toString();
                renderer.ctx.lineWidth = 4;
                renderer.ctx.lineCap = 'round';
                renderer.ctx.stroke();
                renderer.ctx.beginPath();
                renderer.ctx.moveTo(fx, y + 14);
                renderer.ctx.lineTo(fx + sign * (i - 2) * 0.8, y + 28);
                renderer.ctx.strokeStyle = col.toString();
                renderer.ctx.lineWidth = 2.5;
                renderer.ctx.stroke();
                renderer.drawCircle(fx + sign * (i - 2) * 0.8, y + 32, 3,
                    col.toString(), str.toString(), 1);
            }
        });
    }
}

// ==================== PARTICLE SYSTEM (Bone Cells) ====================
class BoneCell {
    constructor(position, vessel, type) {
        this.position     = position;
        this.vessel       = vessel;
        this.type         = type;
        this.pathProgress = Math.random();
        this.size         = type === 'marrow' ? 2.5 : 3;
        this.opacity      = 1;
        this.isActive     = true;
        this.wobble       = Math.random() * Math.PI * 2;
    }

    getColor() {
        switch (this.type) {
            case 'osteoblast': return new Color(88, 214, 141, this.opacity);
            case 'osteoclast': return new Color(236, 112, 99, this.opacity);
            case 'osteocyte':  return new Color(247, 220, 111, this.opacity);
            case 'marrow':     return new Color(232, 168, 124, this.opacity);
            default:           return new Color(200, 200, 200, this.opacity);
        }
    }

    draw(renderer) {
        if (!this.isActive || this.opacity <= 0) return;
        const col = this.getColor();
        renderer.drawGradientCircle(this.position.x, this.position.y, this.size, [
            { offset: 0,   color: col.toString() },
            { offset: 0.6, color: col.toString() },
            { offset: 1,   color: `rgba(${Math.round(col.r)},${Math.round(col.g)},${Math.round(col.b)},0)` }
        ]);
    }

    update(deltaTime, flowSpeed) {
        if (!this.isActive || !this.vessel) return;

        this.pathProgress += flowSpeed * deltaTime * 0.00012;
        if (this.pathProgress > 1) this.pathProgress -= 1;

        const c = this.vessel.shapeData.center;
        if (!c) return;

        const orbitRadius = 18 + Math.sin(this.wobble + this.pathProgress * Math.PI * 4) * 6;
        const angle       = this.pathProgress * Math.PI * 2 + this.wobble;
        this.position = new Vector2D(
            c.x + Math.cos(angle) * orbitRadius,
            c.y + Math.sin(angle) * orbitRadius * 0.55
        );
    }
}

class ParticleSystem {
    constructor() {
        this.particles    = [];
        this.maxParticles = CONFIG.cells.maxParticles;
        this.flowSpeed    = CONFIG.cells.flowSpeed;
        this.isPaused     = false;
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

// ==================== SKELETAL SYSTEM ====================
class SkeletalSystem {
    constructor() {
        this.bones           = {};
        this.joints          = {};
        this.particleSystem  = new ParticleSystem();
        this.currentScenario = 'normal';
    }

    initialize(cx, cy) {
        this.createBones(cx, cy);
        this.createJoints(cx, cy);
    }

    createBones(cx, cy) {
        this.bones.skull           = BoneFactory.createSkull(cx, cy);
        this.bones.mandible        = BoneFactory.createMandible(cx, cy);

        this.bones.cervicalSpine   = BoneFactory.createCervicalSpine(cx, cy);
        this.bones.thoracicSpine   = BoneFactory.createThoracicSpine(cx, cy);
        this.bones.lumbarSpine     = BoneFactory.createLumbarSpine(cx, cy);
        this.bones.sacrum          = BoneFactory.createSacrum(cx, cy);
        this.bones.coccyx          = BoneFactory.createCoccyx(cx, cy);

        this.bones.sternum         = BoneFactory.createSternum(cx, cy);
        for (let i = 0; i < 12; i++) {
            const pair = BoneFactory.createRibPair(cx, cy, i);
            this.bones[`ribL${i}`]  = pair.left;
            this.bones[`ribR${i}`]  = pair.right;
        }

        ['L','R'].forEach(side => {
            this.bones[`scapula${side}`]  = BoneFactory.createScapula(cx, cy, side);
            this.bones[`clavicle${side}`] = BoneFactory.createClavicle(cx, cy, side);
            this.bones[`humerus${side}`]  = BoneFactory.createHumerus(cx, cy, side);
            this.bones[`radius${side}`]   = BoneFactory.createRadius(cx, cy, side);
            this.bones[`ulna${side}`]     = BoneFactory.createUlna(cx, cy, side);
            this.bones[`hand${side}`]     = BoneFactory.createHand(cx, cy, side);
        });

        this.bones.pelvisL         = BoneFactory.createPelvisSide(cx, cy, 'L');
        this.bones.pelvisR         = BoneFactory.createPelvisSide(cx, cy, 'R');

        ['L','R'].forEach(side => {
            this.bones[`femur${side}`]   = BoneFactory.createFemur(cx, cy, side);
            this.bones[`patella${side}`] = BoneFactory.createPatella(cx, cy, side);
            this.bones[`tibia${side}`]   = BoneFactory.createTibia(cx, cy, side);
            this.bones[`fibula${side}`]  = BoneFactory.createFibula(cx, cy, side);
            this.bones[`foot${side}`]    = BoneFactory.createFoot(cx, cy, side);
        });
    }

    createJoints(cx, cy) {
        this.joints.tmjL = new Joint('TMJ (L)', new Vector2D(cx - 22, cy - 148), 'gliding', 5);
        this.joints.tmjR = new Joint('TMJ (R)', new Vector2D(cx + 22, cy - 148), 'gliding', 5);

        this.joints.atlantoOccipital = new Joint('Atlanto-Occipital', new Vector2D(cx, cy - 113), 'pivot', 6);

        this.joints.sternoClавL = new Joint('Sternoclavicular (L)', new Vector2D(cx - 12, cy - 58), 'gliding', 5);
        this.joints.sternoClавR = new Joint('Sternoclavicular (R)', new Vector2D(cx + 12, cy - 58), 'gliding', 5);

        this.joints.shoulderL = new Joint('Shoulder (L)', new Vector2D(cx - 70, cy - 50), 'ball-socket', 9);
        this.joints.shoulderR = new Joint('Shoulder (R)', new Vector2D(cx + 70, cy - 50), 'ball-socket', 9);

        this.joints.elbowL = new Joint('Elbow (L)', new Vector2D(cx - 82, cy + 50), 'hinge', 8);
        this.joints.elbowR = new Joint('Elbow (R)', new Vector2D(cx + 82, cy + 50), 'hinge', 8);

        this.joints.wristL = new Joint('Wrist (L)', new Vector2D(cx - 76, cy + 120), 'gliding', 6);
        this.joints.wristR = new Joint('Wrist (R)', new Vector2D(cx + 76, cy + 120), 'gliding', 6);

        this.joints.sacroiliacL = new Joint('Sacroiliac (L)', new Vector2D(cx - 37, cy + 148), 'gliding', 6);
        this.joints.sacroiliacR = new Joint('Sacroiliac (R)', new Vector2D(cx + 37, cy + 148), 'gliding', 6);

        this.joints.hipL = new Joint('Hip (L)', new Vector2D(cx - 54, cy + 165), 'ball-socket', 10);
        this.joints.hipR = new Joint('Hip (R)', new Vector2D(cx + 54, cy + 165), 'ball-socket', 10);

        this.joints.kneeL = new Joint('Knee (L)', new Vector2D(cx - 38, cy + 292), 'hinge', 9);
        this.joints.kneeR = new Joint('Knee (R)', new Vector2D(cx + 38, cy + 292), 'hinge', 9);

        this.joints.ankleL = new Joint('Ankle (L)', new Vector2D(cx - 38, cy + 382), 'saddle', 7);
        this.joints.ankleR = new Joint('Ankle (R)', new Vector2D(cx + 38, cy + 382), 'saddle', 7);
    }

    // ── Ghost silhouette: renders every bone at a fixed low opacity,
    //    always healthy ivory, independent of the scene-driven bright layer.
    //    Called once per frame before everything else.
    drawGhost(renderer) {
        const GHOST_OPACITY = CONFIG.skeleton.ghostOpacity;  // 0.09

        Object.values(this.bones).forEach(bone => {
            // Stash current state
            const savedOpacity      = bone.opacity;
            const savedDensity      = bone.densityFactor;
            const savedSoft         = bone.isSoft;
            const savedFractured    = bone.isFractured;
            const savedHighlighted  = bone.isHighlighted;

            // Force ghost state: healthy, fully opaque at ghost level
            bone.opacity       = GHOST_OPACITY;
            bone.densityFactor = 1;
            bone.isSoft        = false;
            bone.isFractured   = false;    // no fracture crack in ghost
            bone.isHighlighted = false;    // no glow halo in ghost

            // drawBone uses bone.getBoneColor() / getStrokeColor() which
            // both read bone.opacity, so the ghost tint is applied correctly.
            bone.drawBone(renderer);

            // Restore
            bone.opacity       = savedOpacity;
            bone.densityFactor = savedDensity;
            bone.isSoft        = savedSoft;
            bone.isFractured   = savedFractured;
            bone.isHighlighted = savedHighlighted;
        });
    }

    // ── Scenario system ──────────────────────────────────
    applyScenario(scenario) {
        this.currentScenario = scenario;

        Object.values(this.bones).forEach(b => b.applyNormal());
        Object.values(this.joints).forEach(j => j.applyNormal());
        this.particleSystem.clear();

        switch (scenario) {
            case 'osteoporosis':  this.applyOsteoporosis(); break;
            case 'arthritis':     this.applyArthritis();    break;
            case 'fracture':      this.applyFracture();     break;
            case 'osteomalacia':  this.applyOsteomalacia(); break;
            case 'normal':
            default:              this.applyNormal();       break;
        }
    }

    applyNormal() {
        this.particleSystem.flowSpeed = CONFIG.cells.flowSpeed;
        this.seedCells(8, 6, 4, 12);
    }

    applyOsteoporosis() {
        Object.values(this.bones).forEach(b => {
            if (['long','flat'].includes(b.type)) {
                b.densityFactor = CONFIG.disease.osteoporosis.densityFactor;
            }
        });
        this.seedCells(3, 8, 4, 10);
    }

    applyArthritis() {
        Object.values(this.joints).forEach(j => {
            if (['ball-socket','hinge','saddle'].includes(j.type)) {
                j.isInflamed = true;
            }
        });
        this.seedCells(6, 10, 5, 8);
    }

    applyFracture() {
        this.bones.femurL.isFractured  = true;
        this.bones.femurL.fractureProg = 0;
        this.seedCells(14, 4, 6, 10);
    }

    applyOsteomalacia() {
        Object.values(this.bones).forEach(b => {
            b.isSoft = true;
            b.densityFactor = CONFIG.disease.osteomalacia.softnessFactor;
        });
        this.seedCells(10, 5, 3, 8);
    }

    seedCells(blasts, clasts, cytes, marrow) {
        this.particleSystem.clear();
        const boneList = Object.values(this.bones).filter(b => b.shapeData.center);

        const spawnOnRandom = (count, type) => {
            for (let i = 0; i < count; i++) {
                const bone = boneList[Math.floor(Math.random() * boneList.length)];
                const pos  = bone.shapeData.center;
                this.particleSystem.addParticle(new BoneCell(
                    new Vector2D(pos.x, pos.y), bone, type
                ));
            }
        };
        spawnOnRandom(blasts,  'osteoblast');
        spawnOnRandom(clasts,  'osteoclast');
        spawnOnRandom(cytes,   'osteocyte');
        spawnOnRandom(marrow,  'marrow');
    }

    update(deltaTime) {
        Object.values(this.bones).forEach(b => b.update(deltaTime));
        this.particleSystem.update(deltaTime);
    }

    // ── Render order:
    //    0. Ghost silhouette  — always-on base layer at fixed low opacity
    //    1. Joints            — behind bones so cartilage caps are partially covered
    //    2. Bones             — scene-brightened layer on top of ghost
    //    3. Cells             — particle canvas, above everything
    draw(mainRenderer, particleRenderer) {
        // 0. Ghost: entire skeleton at low fixed opacity, always ivory, no disease tints
        this.drawGhost(mainRenderer);

        // 1. Joints
        Object.values(this.joints).forEach(j => j.draw(mainRenderer));

        // 2. Bones (scene-driven opacity 0 → 1)
        Object.values(this.bones).forEach(b => b.draw(mainRenderer));

        // 3. Bone cells
        this.particleSystem.draw(particleRenderer);
    }
}

// ==================== SCENE MANAGER ====================
class SceneManager {
    constructor(skeletalSystem) {
        this.system            = skeletalSystem;
        this.currentScene      = null;
        this.heartbeatInterval = null;
        this.scenes            = this.defineScenes();
    }

    defineScenes() {
        return [
            {
                name: 'Introduction',
                scrollStart: 0,
                scrollEnd: 350,
                onEnter: () => {
                    setText("The human skeletal system…");
                },
                onUpdate: (p) => {}
            },
            {
                name: 'Skull Appears',
                scrollStart: 350,
                scrollEnd: 700,
                onEnter: () => {
                    setText("The Skull — Protecting your brain 🦴");
                    showPanel('info-skeleton');
                },
                onUpdate: (p) => {
                    this.fadeIn('skull',    p);
                    this.fadeIn('mandible', p, 0.4);
                    this.fadeJoint('tmjL',  p, 0.5);
                    this.fadeJoint('tmjR',  p, 0.5);
                }
            },
            {
                name: 'Cervical Spine',
                scrollStart: 700,
                scrollEnd: 1050,
                onEnter: () => {
                    setText("The Cervical Spine — 7 vertebrae support your head");
                },
                onUpdate: (p) => {
                    this.fadeIn('cervicalSpine', p);
                    this.fadeJoint('atlantoOccipital', p, 0.3);
                }
            },
            {
                name: 'Thoracic Spine & Ribcage',
                scrollStart: 1050,
                scrollEnd: 1500,
                onEnter: () => {
                    setText("The Ribcage — 12 pairs of ribs shield vital organs");
                    showPanel('info-joints');
                },
                onUpdate: (p) => {
                    this.fadeIn('thoracicSpine', p, 0);
                    this.fadeIn('sternum',       p, 0.15);
                    for (let i = 0; i < 12; i++) {
                        const t = i / 12;
                        this.fadeIn(`ribL${i}`, p, t * 0.6);
                        this.fadeIn(`ribR${i}`, p, t * 0.6 + 0.05);
                    }
                }
            },
            {
                name: 'Lumbar Spine',
                scrollStart: 1500,
                scrollEnd: 1850,
                onEnter: () => {
                    setText("The Lumbar Spine — 5 large vertebrae bear your weight");
                },
                onUpdate: (p) => {
                    this.fadeIn('lumbarSpine', p);
                    this.fadeIn('sacrum',      p, 0.5);
                    this.fadeIn('coccyx',      p, 0.75);
                }
            },
            {
                name: 'Pelvis',
                scrollStart: 1850,
                scrollEnd: 2200,
                onEnter: () => {
                    setText("The Pelvis — A sturdy ring protecting abdominal organs");
                },
                onUpdate: (p) => {
                    this.fadeIn('pelvisL',         p);
                    this.fadeIn('pelvisR',         p, 0.05);
                    this.fadeJoint('sacroiliacL',  p, 0.2);
                    this.fadeJoint('sacroiliacR',  p, 0.25);
                }
            },
            {
                name: 'Upper Limbs',
                scrollStart: 2200,
                scrollEnd: 2750,
                onEnter: () => {
                    setText("Upper Limbs — Shoulder to fingertip");
                },
                onUpdate: (p) => {
                    const stages = [
                        { bones: ['scapulaL','scapulaR'],   joints: [],                           start: 0    },
                        { bones: ['clavicleL','clavicleR'], joints: ['sternoClавL','sternoClавR'], start: 0.12 },
                        { bones: [],                        joints: ['shoulderL','shoulderR'],     start: 0.18 },
                        { bones: ['humerusL','humerusR'],   joints: [],                           start: 0.25 },
                        { bones: [],                        joints: ['elbowL','elbowR'],           start: 0.45 },
                        { bones: ['radiusL','radiusR','ulnaL','ulnaR'], joints: [],               start: 0.5  },
                        { bones: [],                        joints: ['wristL','wristR'],           start: 0.72 },
                        { bones: ['handL','handR'],         joints: [],                           start: 0.78 }
                    ];
                    stages.forEach(stage => {
                        stage.bones.forEach(n  => this.fadeIn(n,    p, stage.start));
                        stage.joints.forEach(n => this.fadeJoint(n, p, stage.start));
                    });
                }
            },
            {
                name: 'Lower Limbs',
                scrollStart: 2750,
                scrollEnd: 3300,
                onEnter: () => {
                    setText("Lower Limbs — The strongest bones in the body");
                },
                onUpdate: (p) => {
                    const stages = [
                        { bones: [],                          joints: ['hipL','hipR'],         start: 0    },
                        { bones: ['femurL','femurR'],         joints: [],                      start: 0.08 },
                        { bones: ['patellaL','patellaR'],     joints: ['kneeL','kneeR'],       start: 0.42 },
                        { bones: ['tibiaL','tibiaR','fibulaL','fibulaR'], joints: [],          start: 0.5  },
                        { bones: [],                          joints: ['ankleL','ankleR'],     start: 0.75 },
                        { bones: ['footL','footR'],           joints: [],                      start: 0.8  }
                    ];
                    stages.forEach(stage => {
                        stage.bones.forEach(n  => this.fadeIn(n,    p, stage.start));
                        stage.joints.forEach(n => this.fadeJoint(n, p, stage.start));
                    });
                }
            },
            {
                name: 'Joint Types',
                scrollStart: 3300,
                scrollEnd: 3750,
                onEnter: () => {
                    setText("Joint Types — How bones connect and move");
                    showPanel('info-joints');
                },
                onUpdate: (p) => {
                    const groups = [
                        { joints: ['shoulderL','shoulderR','hipL','hipR'],               start: 0    },
                        { joints: ['elbowL','elbowR','kneeL','kneeR'],                   start: 0.3  },
                        { joints: ['atlantoOccipital'],                                  start: 0.6  },
                        { joints: ['wristL','wristR','ankleL','ankleR','tmjL','tmjR'],   start: 0.75 }
                    ];
                    Object.values(this.system.joints).forEach(j => j.isHighlighted = false);
                    groups.forEach(g => {
                        if (p >= g.start) {
                            g.joints.forEach(n => {
                                const j = this.system.joints[n];
                                if (j) j.isHighlighted = true;
                            });
                        }
                    });
                }
            },
            {
                name: 'Bone Remodeling',
                scrollStart: 3750,
                scrollEnd: 4300,
                onEnter: () => {
                    setText("Bone Remodeling — Constant rebuild cycle 🔄");
                    showPanel('info-stats');
                    this.system.seedCells(8, 6, 4, 12);
                },
                onUpdate: (p) => {
                    ['skull','femurL','femurR','tibiaL','tibiaR'].forEach(n => {
                        const b = this.system.bones[n];
                        if (b) b.isHighlighted = (p > 0.2);
                    });
                }
            },
            {
                name: 'Complete Skeleton',
                scrollStart: 4300,
                scrollEnd: 5200,
                onEnter: () => {
                    setText("The Complete Skeletal System 🦴");
                    document.getElementById('text').style.fontSize   = '22px';
                    document.getElementById('text').style.background = 'rgba(232,213,183,0.2)';

                    document.getElementById('control-panel').style.display    = 'block';
                    document.getElementById('disease-selector').style.display = 'block';
                    document.getElementById('info-panels').style.display      = 'block';
                    showPanel('info-skeleton');
                    showPanel('info-joints');
                    showPanel('info-stats');

                    if (this.system.particleSystem.particles.length === 0) {
                        this.system.seedCells(8, 6, 4, 12);
                    }
                },
                onUpdate: (p) => {
                    Object.values(this.system.bones).forEach(b  => { b.opacity = 1; });
                    Object.values(this.system.joints).forEach(j => { j.opacity = 1; });
                }
            },
            {
                name: 'Interactive Mode',
                scrollStart: 5200,
                scrollEnd: 6000,
                onEnter: () => {
                    setText("Use the controls above to explore disease scenarios!");
                },
                onUpdate: () => {}
            }
        ];
    }

    update(scrollPosition) {
        const active = this.scenes.find(s =>
            scrollPosition >= s.scrollStart && scrollPosition < s.scrollEnd
        );
        if (!active) return;

        if (this.currentScene !== active) {
            Object.values(this.system.joints).forEach(j => { j.isHighlighted = false; });
            if (active.onEnter) active.onEnter();
            this.currentScene = active;
        }

        if (active.onUpdate) {
            const progress = (scrollPosition - active.scrollStart) /
                             (active.scrollEnd - active.scrollStart);
            active.onUpdate(Math.max(0, Math.min(1, progress)));
        }
    }

    fadeIn(boneName, sceneProgress, startAt = 0) {
        const bone = this.system.bones[boneName];
        if (!bone) return;
        if (sceneProgress < startAt) return;
        const localP = (sceneProgress - startAt) / (1 - startAt || 1);
        bone.opacity = Math.min(1, localP * 2.5);
    }

    fadeJoint(jointName, sceneProgress, startAt = 0) {
        const joint = this.system.joints[jointName];
        if (!joint) return;
        if (sceneProgress < startAt) return;
        const localP = (sceneProgress - startAt) / (1 - startAt || 1);
        joint.opacity = Math.min(1, localP * 2.5);
    }

    cleanup() {
        if (this.heartbeatInterval) {
            clearInterval(this.heartbeatInterval);
            this.heartbeatInterval = null;
        }
    }
}

// ==================== MAIN APPLICATION ====================
class SkeletalApp {
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

        this.system = new SkeletalSystem();
        this.system.initialize(CONFIG.skeleton.centerX, CONFIG.skeleton.centerY);

        this.sceneManager = new SceneManager(this.system);

        this.setupEventListeners();

        this.isRunning = true;
        this.lastTime  = performance.now();
        this.animate();

        console.log('Skeletal System initialized — ghost silhouette active.');
    }

    setupEventListeners() {
        const toggleLabelsBtn = document.getElementById('toggle-labels');
        if (toggleLabelsBtn) {
            toggleLabelsBtn.addEventListener('click', () => {
                this.showLabels      = !this.showLabels;
                window.showLabels    = this.showLabels;
                toggleLabelsBtn.textContent = this.showLabels ? 'Hide Labels' : 'Show Labels';
            });
        }

        const toggleRemBtn = document.getElementById('toggle-remodeling');
        if (toggleRemBtn) {
            toggleRemBtn.addEventListener('click', () => {
                if (this.system.particleSystem.isPaused) {
                    this.system.particleSystem.resume();
                    toggleRemBtn.textContent = 'Pause Remodeling';
                } else {
                    this.system.particleSystem.pause();
                    toggleRemBtn.textContent = 'Resume Remodeling';
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
            osteoporosis: '⚠️ Osteoporosis: Bones lose density — fracture risk increases',
            arthritis:    '⚠️ Rheumatoid Arthritis: Joints inflame and stiffen',
            fracture:     '⚠️ Fracture: Left femur broken — watch it heal over time',
            osteomalacia: '⚠️ Osteomalacia: Bones soften due to vitamin-D deficiency'
        };
        if (msgs[scenario]) {
            text.innerHTML = msgs[scenario];
            text.style.background = 'rgba(236,112,99,0.25)';
        } else {
            text.style.background = 'rgba(0,0,0,0.5)';
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
        setElText('blast-count',  ps.getCountByType('osteoblast'));
        setElText('clast-count',  ps.getCountByType('osteoclast'));
        setElText('cyte-count',   ps.getCountByType('osteocyte'));
        setElText('marrow-count', ps.getCountByType('marrow'));
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

// ==================== SMALL HELPERS ====================
function setText(html) {
    const el = document.getElementById('text');
    if (el) {
        el.innerHTML = html;
        el.style.fontSize  = '18px';
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

    // ── CHANGE: init on first scroll tick (> 0 not > 50) so the
    //    ghost silhouette is visible the instant the user begins scrolling.
    if (scroll > 0 && !app) {
        app = new SkeletalApp();
        app.initialize();
    }

    if (app) {
        app.handleScroll(scroll);
    }

    document.getElementById('myBtn').style.display = scroll > 5000 ? 'block' : 'none';
}

// ── Welcome alert ──
alert(
    'Welcome to the Skeletal System!\n\n' +
    'A scientifically accurate, interactive visualization.\n\n' +
    'Features:\n' +
    '✓ 206 bones rendered anatomically\n' +
    '✓ Ghost silhouette visible from first scroll\n' +
    '✓ Joint types colour-coded\n' +
    '✓ Live bone-remodeling cell animation\n' +
    '✓ Disease scenarios (Osteoporosis, Arthritis, Fracture, Osteomalacia)\n\n' +
    'Scroll slowly to explore! 🦴'
);

// ── Cleanup on unload ──
window.addEventListener('beforeunload', () => {
    if (app) app.destroy();
});
