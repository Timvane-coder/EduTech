// ====================================================================
// ENDOCYTOSIS & EXOCYTOSIS VISUALIZATION — MODULAR OOP ARCHITECTURE
//
// GHOST SYSTEM (mirrors mitosis.js v3):
//   Every animation frame:
//     1. clearRect on mainCanvas + particleCanvas
//     2. GHOST PASS — draw entire cell at final/developed state
//                     with globalAlpha = CONFIG.ghost.opacity (0.07)
//     3. SCENE PASS — draw scene-driven elements at their current
//                     opacity (0 → 1) on top of the ghost
//
//   Ghost shows: membrane bilayer, all organelles, receptors,
//   representative vesicles at key positions, external particles.
//   As scroll progresses each element brightens from ghost → full.
// ====================================================================

// ==================== CONFIGURATION ====================
const CONFIG = {
    canvas: { width: 1200, height: 800 },
    cell: {
        centerX: 600,
        centerY: 400,
        radius:  260
    },
    membrane: {
        thickness: 14,
        lipidCount: 120
    },
    vesicle: {
        minRadius: 22,
        maxRadius: 48,
        speed: 1.4
    },
    cargo: {
        particleCount: 80,
        size: 5
    },
    animation: {
        fps: 60,
        dtCap: 50
    },
    ghost: {
        opacity: 0.07      // dim skeleton opacity — same as mitosis
    },
    colors: {
        cellBg:         'rgba(14, 22, 48, 0.55)',
        membraneFill:   'rgba(123, 140, 222, 0.45)',
        membraneStroke: 'rgba(123, 140, 222, 0.85)',
        endoVesicle:    '#ff6b6b',
        exoVesicle:     '#4ecdc4',
        cargo:          '#f7dc6f',
        lysosome:       '#c0392b',
        nucleus:        'rgba(90, 60, 140, 0.7)',
        nucleusStroke:  'rgba(140, 110, 200, 0.9)',
        er:             'rgba(60, 100, 160, 0.5)',
        golgi:          'rgba(80, 160, 120, 0.6)',
        receptor:       '#e67e22',
        ligand:         '#f39c12',
        plaque:         'rgba(200, 180, 100, 0.85)'
    }
};

// ==================== UTILITY CLASSES ====================
class Vector2D {
    constructor(x = 0, y = 0) { this.x = x; this.y = y; }
    add(v)      { return new Vector2D(this.x + v.x, this.y + v.y); }
    subtract(v) { return new Vector2D(this.x - v.x, this.y - v.y); }
    multiply(s) { return new Vector2D(this.x * s,   this.y * s); }
    magnitude() { return Math.sqrt(this.x * this.x + this.y * this.y); }
    normalize() {
        const m = this.magnitude();
        return m > 0 ? new Vector2D(this.x / m, this.y / m) : new Vector2D(0, 0);
    }
    distance(v) { return Math.sqrt((this.x - v.x) ** 2 + (this.y - v.y) ** 2); }
    clone()     { return new Vector2D(this.x, this.y); }
    lerpTo(target, t) {
        return new Vector2D(
            this.x + (target.x - this.x) * t,
            this.y + (target.y - this.y) * t
        );
    }
    rotate(angle) {
        const cos = Math.cos(angle), sin = Math.sin(angle);
        return new Vector2D(this.x * cos - this.y * sin, this.x * sin + this.y * cos);
    }
}

class Color {
    constructor(r, g, b, a = 1) { this.r = r; this.g = g; this.b = b; this.a = a; }
    toString() { return `rgba(${this.r|0},${this.g|0},${this.b|0},${this.a.toFixed(2)})`; }
    lerp(target, t) {
        return new Color(
            this.r + (target.r - this.r) * t, this.g + (target.g - this.g) * t,
            this.b + (target.b - this.b) * t, this.a + (target.a - this.a) * t
        );
    }
    static fromHex(hex) {
        const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return r ? new Color(parseInt(r[1],16), parseInt(r[2],16), parseInt(r[3],16)) : new Color(128,128,128);
    }
}

// ==================== CANVAS RENDERER ====================
class CanvasRenderer {
    constructor(canvasId, w, h) {
        this.canvas = document.getElementById(canvasId);
        this.ctx    = this.canvas.getContext('2d');
        this.width  = w; this.height = h;
        this.canvas.width = w; this.canvas.height = h;
    }

    clear() { this.ctx.clearRect(0, 0, this.width, this.height); }

    // KEY: clean alpha wrapper — used by both ghost pass and scene pass
    withAlpha(alpha, fn) {
        if (alpha <= 0) return;
        const c = this.ctx;
        c.save();
        c.globalAlpha = Math.min(1, alpha);
        fn();
        c.restore();
    }

    drawCircle(x, y, r, fill, stroke, lw = 1) {
        const c = this.ctx;
        c.beginPath(); c.arc(x, y, r, 0, Math.PI * 2);
        if (fill)   { c.fillStyle = fill;   c.fill(); }
        if (stroke) { c.strokeStyle = stroke; c.lineWidth = lw; c.stroke(); }
    }

    drawEllipse(x, y, rx, ry, fill, stroke, lw = 1, angle = 0) {
        const c = this.ctx;
        c.beginPath(); c.ellipse(x, y, rx, ry, angle, 0, Math.PI * 2);
        if (fill)   { c.fillStyle = fill;   c.fill(); }
        if (stroke) { c.strokeStyle = stroke; c.lineWidth = lw; c.stroke(); }
    }

    drawPath(points, stroke, lw = 2, closed = false) {
        if (points.length < 2) return;
        const c = this.ctx;
        c.beginPath(); c.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) c.lineTo(points[i].x, points[i].y);
        if (closed) c.closePath();
        c.strokeStyle = stroke; c.lineWidth = lw; c.stroke();
    }

    fillPolygon(points, fill) {
        if (points.length < 3) return;
        const c = this.ctx;
        c.beginPath(); c.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) c.lineTo(points[i].x, points[i].y);
        c.closePath(); c.fillStyle = fill; c.fill();
    }

    drawText(text, x, y, font = '14px Arial', color = '#fff', align = 'center') {
        const c = this.ctx;
        c.font = font; c.fillStyle = color; c.textAlign = align;
        c.fillText(text, x, y);
    }

    drawGradientCircle(x, y, r, stops) {
        const g = this.ctx.createRadialGradient(x, y, 0, x, y, r);
        stops.forEach(s => g.addColorStop(s.offset, s.color));
        const c = this.ctx;
        c.beginPath(); c.arc(x, y, r, 0, Math.PI * 2);
        c.fillStyle = g; c.fill();
    }

    drawBezier(p0, p1, p2, p3, stroke, lw = 2) {
        const c = this.ctx;
        c.beginPath(); c.moveTo(p0.x, p0.y);
        c.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
        c.strokeStyle = stroke; c.lineWidth = lw; c.stroke();
    }

    drawArc(cx, cy, r, startAngle, endAngle, stroke, lw = 3) {
        const c = this.ctx;
        c.beginPath(); c.arc(cx, cy, r, startAngle, endAngle);
        c.strokeStyle = stroke; c.lineWidth = lw; c.stroke();
    }

    save()          { this.ctx.save(); }
    restore()       { this.ctx.restore(); }
    translate(x, y) { this.ctx.translate(x, y); }
    rotate(a)       { this.ctx.rotate(a); }
}

// ==================== ANATOMICAL STRUCTURES ====================

/* ─── Lipid ─── */
class Lipid {
    constructor(angle, radius, layerOffset) {
        this.angle       = angle;
        this.radius      = radius;
        this.layerOffset = layerOffset;
        this.wobble      = Math.random() * Math.PI * 2;
    }

    draw(renderer, cx, cy, time) {
        const wobbleAmt    = 1.2;
        const currentAngle = this.angle + Math.sin(time * 0.002 + this.wobble) * 0.012;
        const r = this.radius + Math.sin(time * 0.003 + this.wobble) * wobbleAmt;
        const x = cx + Math.cos(currentAngle) * r;
        const y = cy + Math.sin(currentAngle) * r;

        const headR = 3.2;
        renderer.drawCircle(x, y, headR,
            this.layerOffset > 0 ? 'rgba(123,140,222,0.7)' : 'rgba(123,140,222,0.55)', null);

        const tailLen  = 7;
        const tailDirX = cx - x, tailDirY = cy - y;
        const tailMag  = Math.sqrt(tailDirX*tailDirX + tailDirY*tailDirY) || 1;
        const tx = x + (tailDirX / tailMag) * tailLen * (this.layerOffset > 0 ? 1 : -1);
        const ty = y + (tailDirY / tailMag) * tailLen * (this.layerOffset > 0 ? 1 : -1);

        const c = renderer.ctx;
        c.beginPath(); c.moveTo(x, y); c.lineTo(tx, ty);
        c.strokeStyle = 'rgba(100,120,200,0.45)'; c.lineWidth = 1.2; c.stroke();
    }
}

/* ─── CellMembrane ─── */
class CellMembrane {
    constructor(center, radius) {
        this.center       = center;
        this.radius       = radius;
        this.lipids       = [];
        this.opacity      = 0;
        this.deformations = [];
        this.buildLipids();
    }

    buildLipids() {
        const n = CONFIG.membrane.lipidCount;
        for (let i = 0; i < n; i++) {
            const angle = (i / n) * Math.PI * 2;
            this.lipids.push(new Lipid(angle, this.radius + 5,  1));
            this.lipids.push(new Lipid(angle, this.radius - 5, -1));
        }
    }

    addDeformation(angle, depth, direction) {
        this.deformations.push({ angle, depth, progress: 0, direction, maxProgress: 1 });
    }

    // Core geometry — draws at whatever globalAlpha is currently set
    // `opacityOverride` lets the ghost pass force 1.0 without mutating state
    drawCore(renderer, time, opacityOverride) {
        const eff = (opacityOverride !== undefined) ? opacityOverride : this.opacity;
        if (eff <= 0) return;
        const cx = this.center.x, cy = this.center.y;

        renderer.withAlpha(eff, () => {
            renderer.drawGradientCircle(cx, cy, this.radius + 30, [
                { offset: 0,    color: 'rgba(123,140,222,0)' },
                { offset: 0.7,  color: 'rgba(123,140,222,0.04)' },
                { offset: 0.88, color: `rgba(123,140,222,${eff * 0.18})` },
                { offset: 1,    color: 'rgba(123,140,222,0)' }
            ]);
            renderer.drawCircle(cx, cy, this.radius + 5, null, 'rgba(123,140,222,0.35)', 4);
            renderer.drawCircle(cx, cy, this.radius - 5, null, 'rgba(123,140,222,0.28)', 3);
            renderer.drawCircle(cx, cy, this.radius,     'rgba(123,140,222,0.08)', null);

            this.lipids.forEach(lip => lip.draw(renderer, cx, cy, time));

            this.deformations.forEach(d => {
                if (d.progress >= d.maxProgress) return;
                const bendRadius = d.depth * d.progress * d.direction;
                const arcSpan = 0.45;
                const c = renderer.ctx;
                c.save();
                c.globalAlpha *= (1 - d.progress * 0.5);
                c.beginPath();
                const steps = 30;
                for (let i = 0; i <= steps; i++) {
                    const t     = i / steps;
                    const angle = d.angle - arcSpan + t * arcSpan * 2;
                    const bump  = Math.exp(-((t - 0.5) ** 2) / 0.08) * bendRadius;
                    const r2    = this.radius + bump;
                    const px    = cx + Math.cos(angle) * r2;
                    const py    = cy + Math.sin(angle) * r2;
                    i === 0 ? c.moveTo(px, py) : c.lineTo(px, py);
                }
                c.strokeStyle = d.direction > 0 ? CONFIG.colors.endoVesicle : CONFIG.colors.exoVesicle;
                c.lineWidth   = 3.5; c.stroke();
                c.restore();
            });
        });
    }

    draw(renderer, time)      { this.drawCore(renderer, time); }
    drawGhost(renderer, time) { this.drawCore(renderer, time, 1); }

    update(dt) {
        this.deformations = this.deformations.filter(d => {
            d.progress += dt * 0.0015;
            return d.progress < d.maxProgress + 0.3;
        });
    }
}

/* ─── Organelle ─── */
class Organelle {
    constructor(name, position, rx, ry, fillColor, strokeColor, angle = 0) {
        this.name        = name;
        this.position    = position;
        this.rx          = rx; this.ry = ry;
        this.fillColor   = fillColor;
        this.strokeColor = strokeColor;
        this.angle       = angle;
        this.opacity     = 0;
        this.pulsePhase  = Math.random() * Math.PI * 2;
    }

    // Core geometry — opacityOverride for ghost
    drawCore(renderer, time, opacityOverride) {
        const eff = (opacityOverride !== undefined) ? opacityOverride : this.opacity;
        if (eff <= 0) return;
        const pulse = 1 + Math.sin(time * 0.002 + this.pulsePhase) * 0.02;
        const x = this.position.x, y = this.position.y;

        renderer.withAlpha(eff, () => {
            if (this.name === 'Nucleus') {
                renderer.drawEllipse(x, y, this.rx * pulse, this.ry * pulse, this.fillColor, null);
                renderer.drawEllipse(x, y, this.rx * pulse + 4, this.ry * pulse + 4, null, this.strokeColor, 2.5);
                renderer.drawEllipse(x, y, this.rx * pulse - 2, this.ry * pulse - 2, null, 'rgba(140,110,200,0.4)', 1.5);
                renderer.drawCircle(x - 4, y + 4, this.rx * 0.22, 'rgba(100,70,160,0.7)', null);
                for (let i = 0; i < 8; i++) {
                    const a  = (i / 8) * Math.PI * 2 + time * 0.0005;
                    const px = x + Math.cos(a) * (this.rx * pulse + 2);
                    const py = y + Math.sin(a) * (this.ry * pulse + 2);
                    renderer.drawCircle(px, py, 2.2, 'rgba(180,160,230,0.7)', null);
                }

            } else if (this.name === 'ER') {
                const c = renderer.ctx;
                c.strokeStyle = this.strokeColor; c.lineWidth = 3;
                for (let row = -1; row <= 1; row++) {
                    c.beginPath();
                    for (let i = 0; i <= 40; i++) {
                        const t  = i / 40;
                        const px = x - this.rx + t * this.rx * 2;
                        const py = y + row * 18 + Math.sin(t * Math.PI * 3 + time * 0.002 + row) * 10;
                        i === 0 ? c.moveTo(px, py) : c.lineTo(px, py);
                    }
                    c.stroke();
                }

            } else if (this.name === 'Golgi') {
                for (let i = -2; i <= 2; i++) {
                    const shift = Math.sin(time * 0.002 + i) * 2;
                    renderer.drawEllipse(
                        x + shift, y + i * 9, this.rx, 4,
                        i === 0 ? 'rgba(80,180,140,0.65)' : 'rgba(80,160,120,0.4)',
                        'rgba(60,140,100,0.6)', 1.2
                    );
                }

            } else if (this.name === 'Lysosome') {
                const lp = 1 + Math.sin(time * 0.004 + this.pulsePhase) * 0.06;
                renderer.drawCircle(x, y, this.rx * lp, this.fillColor, this.strokeColor, 2.5);
                for (let i = 0; i < 6; i++) {
                    const a = (i / 6) * Math.PI * 2 + time * 0.003;
                    const d = this.rx * 0.5 * (0.5 + Math.sin(time * 0.005 + i) * 0.5);
                    renderer.drawCircle(x + Math.cos(a)*d, y + Math.sin(a)*d, 1.8, 'rgba(255,180,100,0.6)', null);
                }
            }
        });

        if (window.showLabels && eff > 0.5) {
            const labelY = this.name === 'ER'    ? y - this.ry - 8
                         : this.name === 'Golgi' ? y - 28
                         : y + this.ry + 15;
            renderer.drawText(this.name, x, labelY, 'bold 11px Arial',
                `rgba(255,255,255,${eff * 0.85})`);
        }
    }

    draw(renderer, time)      { this.drawCore(renderer, time); }
    drawGhost(renderer, time) { this.drawCore(renderer, time, 1); }
}

/* ─── Receptor ─── */
class Receptor {
    constructor(angle, cellCenter, cellRadius) {
        this.angle      = angle;
        this.cellCenter = cellCenter;
        this.cellRadius = cellRadius;
        this.opacity    = 0;
        this.bound      = false;
        this.boundTime  = 0;
    }

    getPosition() {
        return new Vector2D(
            this.cellCenter.x + Math.cos(this.angle) * this.cellRadius,
            this.cellCenter.y + Math.sin(this.angle) * this.cellRadius
        );
    }

    drawCore(renderer, time, opacityOverride) {
        const eff = (opacityOverride !== undefined) ? opacityOverride : this.opacity;
        if (eff <= 0) return;
        const pos = this.getPosition();
        const cx  = this.cellCenter.x, cy = this.cellCenter.y;

        renderer.withAlpha(eff, () => {
            const innerDir = new Vector2D(cx - pos.x, cy - pos.y).normalize();
            const stemEnd  = pos.add(innerDir.multiply(12));
            const c = renderer.ctx;
            c.beginPath(); c.moveTo(pos.x, pos.y); c.lineTo(stemEnd.x, stemEnd.y);
            c.strokeStyle = CONFIG.colors.receptor; c.lineWidth = 3; c.stroke();

            const outDir  = innerDir.multiply(-1);
            const armLen  = 7;
            const armBase = pos.add(outDir.multiply(4));
            const left    = armBase.add(outDir.rotate( 0.5).multiply(armLen));
            const right   = armBase.add(outDir.rotate(-0.5).multiply(armLen));
            c.beginPath(); c.moveTo(left.x, left.y); c.lineTo(armBase.x, armBase.y);
            c.lineTo(right.x, right.y);
            c.strokeStyle = CONFIG.colors.receptor; c.lineWidth = 2.5; c.stroke();
            renderer.drawCircle(left.x,  left.y,  2.2, CONFIG.colors.receptor, null);
            renderer.drawCircle(right.x, right.y, 2.2, CONFIG.colors.receptor, null);

            if (this.bound)
                renderer.drawCircle(armBase.x, armBase.y - 4, 4.5,
                    CONFIG.colors.ligand, 'rgba(230,126,34,0.8)', 1.2);
        });
    }

    draw(renderer, time)      { this.drawCore(renderer, time); }
    drawGhost(renderer, time) { this.drawCore(renderer, time, 1); }

    update(dt) { if (this.bound) this.boundTime += dt; }
}

/* ─── Vesicle ─── */
class Vesicle {
    constructor(position, radius, type, target) {
        this.position     = position.clone();
        this.radius       = radius;
        this.type         = type;
        this.target       = target;
        this.isActive     = true;
        this.opacity      = 1;
        this.progress     = 0;
        this.origin       = position.clone();
        this.cargo        = [];
        this.fusing       = false;
        this.fuseProgress = 0;
        this.label        = '';
        this.phase        = Math.random() * Math.PI * 2;
    }

    get color() {
        switch (this.type) {
            case 'endocytic':  return CONFIG.colors.endoVesicle;
            case 'exocytic':   return CONFIG.colors.exoVesicle;
            case 'lysosomal':  return CONFIG.colors.lysosome;
            case 'secretory':  return CONFIG.colors.exoVesicle;
            default:           return '#aaa';
        }
    }

    draw(renderer, time) {
        if (!this.isActive || this.opacity <= 0) return;
        const x = this.position.x, y = this.position.y;
        const wobble = Math.sin(time * 0.003 + this.phase) * 1.5;
        const r = this.radius * (this.fusing ? (1 + this.fuseProgress * 0.3) : 1);

        renderer.withAlpha(this.opacity, () => {
            renderer.drawGradientCircle(x, y + wobble, r + 6, [
                { offset: 0,   color: this.color + '40' },
                { offset: 0.6, color: this.color + '18' },
                { offset: 1,   color: this.color + '00' }
            ]);
            renderer.drawCircle(x, y + wobble, r, this.color + '28', this.color, 2.2);
            this.cargo.forEach(c => { if (c.isActive) c.draw(renderer, time); });
            if (window.showLabels && this.label && this.opacity > 0.6)
                renderer.drawText(this.label, x, y + wobble - r - 7, '10px Arial', 'rgba(255,255,255,0.75)');
        });
    }

    update(dt, speed) {
        if (!this.isActive) return;
        if (this.fusing) {
            this.fuseProgress += dt * 0.002;
            if (this.fuseProgress >= 1) {
                this.isActive = false;
                this.cargo.forEach(c => { c.released = true; });
            }
            return;
        }
        this.progress += speed * dt * 0.0008;
        if (this.progress >= 1) {
            this.progress = 1;
            this.position = this.target.clone();
            this.startFusing();
        } else {
            this.position = this.origin.lerpTo(this.target, this.progress);
        }
        this.cargo.forEach(c => { c.position = this.position.clone().add(c.offset); });
    }

    startFusing() { this.fusing = true; this.fuseProgress = 0; }
}

/* ─── CargoParticle ─── */
class CargoParticle {
    constructor(position, vesicleOffset, type) {
        this.position = position.clone();
        this.offset   = vesicleOffset;
        this.type     = type;
        this.isActive = true;
        this.released = false;
        this.size     = type === 'pathogen' ? 7 : type === 'protein' ? 4.5 : 3.5;
        this.phase    = Math.random() * Math.PI * 2;
    }

    get color() {
        switch (this.type) {
            case 'protein':          return '#f7dc6f';
            case 'nutrient':         return '#82e0aa';
            case 'pathogen':         return '#e74c3c';
            case 'neurotransmitter': return '#a569bd';
            default:                 return '#ccc';
        }
    }

    draw(renderer, time) {
        if (!this.isActive) return;
        const wobble = Math.sin(time * 0.004 + this.phase) * 1.8;
        renderer.drawCircle(
            this.position.x, this.position.y + wobble,
            this.size, this.color + 'cc', this.color, 1
        );
    }
}

/* ─── Ligand ─── */
class Ligand {
    constructor(startPosition, targetAngle, cellCenter, cellRadius) {
        this.position    = startPosition.clone();
        this.targetAngle = targetAngle;
        this.cellCenter  = cellCenter;
        this.cellRadius  = cellRadius;
        this.target      = new Vector2D(
            cellCenter.x + Math.cos(targetAngle) * (cellRadius + 10),
            cellCenter.y + Math.sin(targetAngle) * (cellRadius + 10)
        );
        this.progress = 0;
        this.origin   = startPosition.clone();
        this.isActive = true;
        this.bound    = false;
        this.phase    = Math.random() * Math.PI * 2;
    }

    draw(renderer, time) {
        if (!this.isActive || this.bound) return;
        const wobble = Math.sin(time * 0.005 + this.phase) * 2;
        renderer.drawCircle(
            this.position.x, this.position.y + wobble,
            4, CONFIG.colors.ligand, 'rgba(230,126,34,0.9)', 1.2
        );
    }

    update(dt, speed) {
        if (this.bound || !this.isActive) return;
        this.progress += speed * dt * 0.0006;
        if (this.progress >= 1) {
            this.progress = 1; this.position = this.target.clone(); this.bound = true;
        } else {
            this.position = this.origin.lerpTo(this.target, this.progress);
        }
    }
}

/* ─── CoatedPit ─── */
class CoatedPit {
    constructor(angle, cellCenter, cellRadius) {
        this.angle      = angle;
        this.cellCenter = cellCenter;
        this.cellRadius = cellRadius;
        this.progress   = 0;
        this.isActive   = true;
        this.opacity    = 0;
    }

    draw(renderer, time) {
        if (!this.isActive || this.opacity <= 0) return;
        const cx = this.cellCenter.x, cy = this.cellCenter.y;
        const pitDepth = 30 * this.progress;
        const pitSpan  = 0.35;
        const steps    = 24;

        renderer.withAlpha(this.opacity, () => {
            const c = renderer.ctx;
            for (let i = 0; i <= steps; i++) {
                const t     = i / steps;
                const angle = this.angle - pitSpan + t * pitSpan * 2;
                const bump  = Math.exp(-((t - 0.5) ** 2) / 0.06) * pitDepth;
                const r     = this.cellRadius - bump;
                const px    = cx + Math.cos(angle) * r;
                const py    = cy + Math.sin(angle) * r;
                if (this.progress < 0.85)
                    renderer.drawCircle(px, py, 2.8, 'rgba(180,140,80,0.7)', null);
            }
            c.beginPath();
            for (let i = 0; i <= steps; i++) {
                const t     = i / steps;
                const angle = this.angle - pitSpan + t * pitSpan * 2;
                const bump  = Math.exp(-((t - 0.5) ** 2) / 0.06) * pitDepth;
                const r     = this.cellRadius - bump;
                const px    = cx + Math.cos(angle) * r;
                const py    = cy + Math.sin(angle) * r;
                i === 0 ? c.moveTo(px, py) : c.lineTo(px, py);
            }
            c.strokeStyle = CONFIG.colors.endoVesicle; c.lineWidth = 3; c.stroke();
        });
    }

    update(dt) {
        if (!this.isActive) return;
        this.progress += dt * 0.0009;
        if (this.progress >= 1) this.isActive = false;
    }
}

/* ─── PseudoPod ─── */
class PseudoPod {
    constructor(angle, cellCenter, cellRadius) {
        this.angle      = angle;
        this.cellCenter = cellCenter;
        this.cellRadius = cellRadius;
        this.progress   = 0;
        this.isActive   = true;
        this.opacity    = 1;
    }

    draw(renderer, time) {
        if (!this.isActive || this.opacity <= 0) return;
        const cx = this.cellCenter.x, cy = this.cellCenter.y;
        const extendLen   = 55 * this.progress;
        const spreadAngle = 0.4 * (1 - this.progress * 0.6);

        renderer.withAlpha(this.opacity, () => {
            const armAngles = [this.angle - spreadAngle, this.angle + spreadAngle];
            armAngles.forEach(a => {
                const baseX = cx + Math.cos(a) * this.cellRadius;
                const baseY = cy + Math.sin(a) * this.cellRadius;
                const tipX  = cx + Math.cos(this.angle) * (this.cellRadius + extendLen);
                const tipY  = cy + Math.sin(this.angle) * (this.cellRadius + extendLen);
                renderer.drawBezier(
                    new Vector2D(baseX, baseY),
                    new Vector2D(baseX + (tipX-baseX)*0.3, baseY + (tipY-baseY)*0.1),
                    new Vector2D(tipX  - (tipX-baseX)*0.1, tipY  - (tipY-baseY)*0.3),
                    new Vector2D(tipX, tipY),
                    CONFIG.colors.endoVesicle, 4
                );
            });
            const steps = 18;
            const points = [];
            for (let i = 0; i <= steps; i++) {
                const t = i / steps;
                const a = armAngles[0] + t * (armAngles[1] - armAngles[0]);
                const r = this.cellRadius + Math.sin(t * Math.PI) * extendLen;
                points.push(new Vector2D(cx + Math.cos(a)*r, cy + Math.sin(a)*r));
            }
            renderer.fillPolygon(points, 'rgba(255,107,107,0.12)');
        });
    }

    update(dt) {
        if (!this.isActive) return;
        this.progress += dt * 0.0007;
        if (this.progress >= 1) this.isActive = false;
    }
}

/* ─── ExternalParticle ─── */
class ExternalParticle {
    constructor(position, type) {
        this.position = position.clone();
        this.type     = type;
        this.isActive = true;
        this.phase    = Math.random() * Math.PI * 2;
        this.drift    = new Vector2D((Math.random()-0.5)*0.3, (Math.random()-0.5)*0.3);
    }

    get size()  { return this.type === 'bacteria' ? 9 : 4; }
    get color() { return this.type === 'bacteria' ? '#e74c3c' : '#82e0aa'; }

    draw(renderer, time) {
        if (!this.isActive) return;
        const wobble = Math.sin(time * 0.003 + this.phase) * 2;
        if (this.type === 'bacteria') {
            const c = renderer.ctx;
            c.save();
            c.translate(this.position.x, this.position.y + wobble);
            c.rotate(time * 0.001 + this.phase);
            c.beginPath();
            c.roundRect(-8, -3, 16, 6, 3);
            c.fillStyle = this.color + 'cc'; c.fill();
            c.strokeStyle = this.color; c.lineWidth = 1; c.stroke();
            c.restore();
        } else {
            renderer.drawCircle(this.position.x, this.position.y + wobble,
                this.size, this.color + 'bb', this.color, 1);
        }
    }

    update(dt) {
        if (!this.isActive) return;
        this.position.x += this.drift.x * dt * 0.05;
        this.position.y += this.drift.y * dt * 0.05;
    }
}

// ==================== CARGO SYSTEM ====================
class CargoSystem {
    constructor() {
        this.vesicles      = [];
        this.externalParts = [];
        this.ligands       = [];
        this.coatedPits    = [];
        this.pseudoPods    = [];
        this.flowSpeed     = CONFIG.vesicle.speed;
        this.isPaused      = false;
        this.endoEvents    = 0;
        this.exoEvents     = 0;
        this.cargoDelivered = 0;
    }

    addVesicle(v)          { this.vesicles.push(v); }
    addExternalParticle(p) { this.externalParts.push(p); }
    addLigand(l)           { this.ligands.push(l); }
    addCoatedPit(cp)       { this.coatedPits.push(cp); }
    addPseudoPod(pp)       { this.pseudoPods.push(pp); }

    pause()  { this.isPaused = true;  }
    resume() { this.isPaused = false; }
    clear()  {
        this.vesicles = []; this.externalParts = [];
        this.ligands  = []; this.coatedPits    = []; this.pseudoPods = [];
    }

    update(dt) {
        if (this.isPaused) return;
        this.vesicles.forEach(v   => v.update(dt, this.flowSpeed));
        this.externalParts.forEach(p  => p.update(dt));
        this.ligands.forEach(l    => l.update(dt, this.flowSpeed));
        this.coatedPits.forEach(cp => cp.update(dt));
        this.pseudoPods.forEach(pp => pp.update(dt));

        this.vesicles = this.vesicles.filter(v => {
            if (!v.isActive) { this.cargoDelivered += v.cargo.length; return false; }
            return true;
        });
        this.coatedPits = this.coatedPits.filter(cp => cp.isActive);
        this.pseudoPods = this.pseudoPods.filter(pp => pp.isActive);
        this.ligands    = this.ligands.filter(l => l.isActive && !l.bound);
    }

    draw(renderer, time) {
        this.externalParts.forEach(p  => p.draw(renderer, time));
        this.ligands.forEach(l       => l.draw(renderer, time));
        this.coatedPits.forEach(cp   => cp.draw(renderer, time));
        this.pseudoPods.forEach(pp   => pp.draw(renderer, time));
        this.vesicles.forEach(v      => v.draw(renderer, time));
    }

    getActiveVesicleCount() { return this.vesicles.filter(v => v.isActive).length; }
}

// ==================== TRANSPORT SYSTEM ====================
class TransportSystem {
    constructor() {
        this.membrane      = null;
        this.organelles    = {};
        this.receptors     = [];
        this.cargoSystem   = new CargoSystem();
        this.center        = new Vector2D(CONFIG.cell.centerX, CONFIG.cell.centerY);
        this.cellRadius    = CONFIG.cell.radius;
        this.activeProcess = 'both';

        // ── Ghost final-state positions ──
        // Pre-computed once in initialize(); used every frame for ghost pass
        this._ghostVesicles    = [];   // [{pos, r, type}] — representative positions
        this._ghostExternals   = [];   // pre-seeded external particles
    }

    initialize() {
        this.membrane = new CellMembrane(this.center, this.cellRadius);

        this.organelles.nucleus = new Organelle('Nucleus',
            new Vector2D(this.center.x - 30, this.center.y + 20), 58, 50,
            CONFIG.colors.nucleus, CONFIG.colors.nucleusStroke);
        this.organelles.er = new Organelle('ER',
            new Vector2D(this.center.x + 60, this.center.y + 40), 70, 30,
            CONFIG.colors.er, CONFIG.colors.er);
        this.organelles.golgi = new Organelle('Golgi',
            new Vector2D(this.center.x + 20, this.center.y - 60), 35, 12,
            CONFIG.colors.golgi, CONFIG.colors.golgi);
        this.organelles.lysosome = new Organelle('Lysosome',
            new Vector2D(this.center.x - 80, this.center.y - 30), 22, 22,
            CONFIG.colors.lysosome, 'rgba(192,57,43,0.9)');

        const receptorAngles = [-0.6, -0.2, 0.3, 0.8, 1.4];
        receptorAngles.forEach(a => {
            this.receptors.push(new Receptor(a, this.center, this.cellRadius));
        });

        this._seedExternalParticles();

        // ── Build ghost vesicle snapshots ──
        // One endocytic vesicle mid-journey toward lysosome
        // One exocytic vesicle mid-journey toward membrane
        // One pinosome near membrane
        const lyso   = this.organelles.lysosome.position;
        const golgi  = this.organelles.golgi.position;
        const cx = this.center.x, cy = this.center.y;
        const memR   = this.cellRadius;

        this._ghostVesicles = [
            // endocytic: halfway from top membrane to lysosome
            { pos: new Vector2D(cx, cy - memR * 0.5), r: 24, type: 'endocytic' },
            // exocytic: midway Golgi to right membrane
            { pos: golgi.lerpTo(new Vector2D(cx + memR * 0.8, cy - 60), 0.5), r: 20, type: 'exocytic' },
            // pinosome: near left membrane
            { pos: new Vector2D(cx - memR * 0.7, cy + 30), r: 14, type: 'endocytic' },
            // secretory: near bottom
            { pos: new Vector2D(cx + 30, cy + memR * 0.6), r: 26, type: 'secretory' },
        ];
    }

    _seedExternalParticles() {
        const angles = [0, 0.7, 1.4, 2.2, 3.0, 3.8, 4.5, 5.3];
        angles.forEach(a => {
            const dist = this.cellRadius + 60 + Math.random() * 60;
            this.cargoSystem.addExternalParticle(new ExternalParticle(
                new Vector2D(
                    this.center.x + Math.cos(a) * dist,
                    this.center.y + Math.sin(a) * dist
                ),
                Math.random() < 0.25 ? 'bacteria' : 'nutrient'
            ));
        });
    }

    // ── GHOST PASS ────────────────────────────────────────────────
    // Draws the fully-developed end-state of the whole cell at
    // CONFIG.ghost.opacity — called every frame BEFORE scene pass.
    drawGhost(mainR, particleR, time) {
        const g  = CONFIG.ghost.opacity;
        const cx = this.center.x, cy = this.center.y;

        mainR.withAlpha(g, () => {
            // Cell interior
            mainR.drawGradientCircle(cx, cy, this.cellRadius, [
                { offset: 0,   color: 'rgba(14,22,48,0.6)' },
                { offset: 0.7, color: 'rgba(10,18,40,0.5)' },
                { offset: 1,   color: 'rgba(8,14,34,0.3)'  }
            ]);

            // Organelles (all at full opacity inside the withAlpha block)
            Object.values(this.organelles).forEach(o => o.drawCore(mainR, time, 1));

            // Receptors
            this.receptors.forEach(r => r.drawCore(mainR, time, 1));

            // Membrane (drawn last on main so it's on top of organelles)
            this.membrane.drawGhost(mainR, time);
        });

        // Vesicles + external particles on particle canvas
        particleR.withAlpha(g, () => {
            // External particles
            this.cargoSystem.externalParts.forEach(p => p.draw(particleR, time));

            // Ghost vesicles at pre-computed positions
            this._ghostVesicles.forEach(gv => {
                const col = gv.type === 'endocytic'
                    ? CONFIG.colors.endoVesicle
                    : CONFIG.colors.exoVesicle;
                particleR.drawGradientCircle(gv.pos.x, gv.pos.y, gv.r + 6, [
                    { offset: 0,   color: col + '40' },
                    { offset: 0.6, color: col + '18' },
                    { offset: 1,   color: col + '00' }
                ]);
                particleR.drawCircle(gv.pos.x, gv.pos.y, gv.r, col + '28', col, 2.2);
            });
        });
    }

    // ── SCENE PASS ────────────────────────────────────────────────
    // Phase-driven elements at current opacity (0 → 1)
    draw(mainR, particleR, time) {
        const cx = this.center.x, cy = this.center.y;

        // Cell interior fill (always)
        mainR.drawGradientCircle(cx, cy, this.cellRadius, [
            { offset: 0,   color: 'rgba(14,22,48,0.6)' },
            { offset: 0.7, color: 'rgba(10,18,40,0.5)' },
            { offset: 1,   color: 'rgba(8,14,34,0.3)'  }
        ]);

        // Organelles at their scene-driven opacity
        Object.values(this.organelles).forEach(o => o.draw(mainR, time));

        // Receptors
        this.receptors.forEach(r => r.draw(mainR, time));

        // Membrane
        if (this.membrane) this.membrane.draw(mainR, time);

        // Label
        if (window.showLabels && this.membrane && this.membrane.opacity > 0.5)
            mainR.drawText('Plasma Membrane', cx, cy - this.cellRadius - 18,
                'bold 12px Arial', 'rgba(123,140,222,0.8)');

        // Particle canvas: external particles + vesicles
        this.cargoSystem.externalParts.forEach(p => p.draw(particleR, time));
        this.cargoSystem.ligands.forEach(l => l.draw(particleR, time));
        this.cargoSystem.coatedPits.forEach(cp => cp.draw(mainR, time));
        this.cargoSystem.pseudoPods.forEach(pp => pp.draw(mainR, time));
        this.cargoSystem.vesicles.forEach(v => v.draw(particleR, time));
    }

    update(dt) {
        if (this.membrane) this.membrane.update(dt);
        this.receptors.forEach(r => r.update(dt));
        this.cargoSystem.update(dt);
    }

    // ── Spawn helpers (unchanged from original) ──

    spawnReceptorMediatedEndo(angle) {
        const ligandStart = new Vector2D(
            this.center.x + Math.cos(angle) * (this.cellRadius + 80),
            this.center.y + Math.sin(angle) * (this.cellRadius + 80)
        );
        this.cargoSystem.addLigand(new Ligand(ligandStart, angle, this.center, this.cellRadius));
        setTimeout(() => {
            const pit = new CoatedPit(angle, this.center, this.cellRadius);
            pit.opacity = 1;
            this.cargoSystem.addCoatedPit(pit);
            this.membrane.addDeformation(angle, 40, 1);
            setTimeout(() => {
                const vesiclePos = new Vector2D(
                    this.center.x + Math.cos(angle) * (this.cellRadius - 30),
                    this.center.y + Math.sin(angle) * (this.cellRadius - 30)
                );
                const v = new Vesicle(vesiclePos, 24, 'endocytic', this.organelles.lysosome.position);
                v.label = 'Early Endosome';
                for (let i = 0; i < 3; i++) {
                    const off = new Vector2D((Math.random()-0.5)*16, (Math.random()-0.5)*16);
                    v.cargo.push(new CargoParticle(vesiclePos.add(off), off, 'protein'));
                }
                this.cargoSystem.addVesicle(v);
                this.cargoSystem.endoEvents++;
            }, 1200);
        }, 1400);
    }

    spawnPhagocytosis(angle) {
        const pod = new PseudoPod(angle, this.center, this.cellRadius);
        this.cargoSystem.addPseudoPod(pod);

        const targetPos = new Vector2D(
            this.center.x + Math.cos(angle) * (this.cellRadius + 25),
            this.center.y + Math.sin(angle) * (this.cellRadius + 25)
        );
        let closest = null, closestDist = Infinity;
        this.cargoSystem.externalParts.forEach(p => {
            const d = p.position.distance(targetPos);
            if (d < closestDist) { closestDist = d; closest = p; }
        });
        if (closest) closest.isActive = false;

        setTimeout(() => {
            const vesiclePos = new Vector2D(
                this.center.x + Math.cos(angle) * (this.cellRadius - 20),
                this.center.y + Math.sin(angle) * (this.cellRadius - 20)
            );
            const v = new Vesicle(vesiclePos, 32, 'endocytic', this.organelles.lysosome.position);
            v.label = 'Phagosome';
            v.cargo.push(new CargoParticle(vesiclePos, new Vector2D(0,0), 'pathogen'));
            this.cargoSystem.addVesicle(v);
            this.cargoSystem.endoEvents++;

            const newAngle = Math.random() * Math.PI * 2;
            const dist = this.cellRadius + 60 + Math.random() * 60;
            this.cargoSystem.addExternalParticle(new ExternalParticle(
                new Vector2D(this.center.x + Math.cos(newAngle)*dist,
                             this.center.y + Math.sin(newAngle)*dist), 'bacteria'
            ));
        }, 1600);
    }

    spawnPinocytosis(angle) {
        this.membrane.addDeformation(angle, 18, 1);
        setTimeout(() => {
            const vesiclePos = new Vector2D(
                this.center.x + Math.cos(angle) * (this.cellRadius - 15),
                this.center.y + Math.sin(angle) * (this.cellRadius - 15)
            );
            const v = new Vesicle(vesiclePos, 14, 'endocytic', this.organelles.er.position);
            v.label = 'Pinosome';
            v.cargo.push(new CargoParticle(vesiclePos, new Vector2D(0,0), 'nutrient'));
            this.cargoSystem.addVesicle(v);
            this.cargoSystem.endoEvents++;
        }, 700);
    }

    spawnConstitutiveExocytosis() {
        const golgi = this.organelles.golgi;
        const angle = -1.0 + Math.random() * 0.6;
        const target = new Vector2D(
            this.center.x + Math.cos(angle) * this.cellRadius,
            this.center.y + Math.sin(angle) * this.cellRadius
        );
        const v = new Vesicle(golgi.position.clone(), 20, 'exocytic', target);
        v.label = 'Secretory Vesicle';
        for (let i = 0; i < 2; i++) {
            const off = new Vector2D((Math.random()-0.5)*12, (Math.random()-0.5)*12);
            v.cargo.push(new CargoParticle(golgi.position.add(off), off, 'protein'));
        }
        this.cargoSystem.addVesicle(v);
        this.cargoSystem.exoEvents++;
        setTimeout(() => { this.membrane.addDeformation(angle, 20, -1); }, 1200);
    }

    spawnRegulatedExocytosis() {
        const golgi = this.organelles.golgi;
        const angle = -0.8 + Math.random() * 1.2;
        const target = new Vector2D(
            this.center.x + Math.cos(angle) * this.cellRadius,
            this.center.y + Math.sin(angle) * this.cellRadius
        );
        const v = new Vesicle(golgi.position.clone(), 28, 'secretory', target);
        v.label = 'Signal Vesicle';
        for (let i = 0; i < 4; i++) {
            const off = new Vector2D((Math.random()-0.5)*20, (Math.random()-0.5)*20);
            v.cargo.push(new CargoParticle(golgi.position.add(off), off, 'neurotransmitter'));
        }
        this.cargoSystem.addVesicle(v);
        this.cargoSystem.exoEvents++;
        setTimeout(() => { this.membrane.addDeformation(angle, 28, -1); }, 1000);
    }
}

// ==================== SCENE MANAGER ====================
class SceneManager {
    constructor(system) {
        this.system          = system;
        this.currentScene    = null;
        this.scenes          = this.defineScenes();
        this._periodicTimers = [];
    }

    defineScenes() {
        return [
            { name:'Introduction',           scrollStart:0,    scrollEnd:350,
              onEnter: () => this.sceneIntro(),          onUpdate: p => this.updateIntro(p) },
            { name:'Cell Overview',           scrollStart:350,  scrollEnd:750,
              onEnter: () => this.sceneCellOverview(),   onUpdate: p => this.updateCellOverview(p) },
            { name:'Membrane Zoom',           scrollStart:750,  scrollEnd:1150,
              onEnter: () => this.sceneMembrane(),       onUpdate: p => this.updateMembrane(p) },
            { name:'Organelles',              scrollStart:1150, scrollEnd:1600,
              onEnter: () => this.sceneOrganelles(),     onUpdate: p => this.updateOrganelles(p) },
            { name:'Receptors & Ligands',     scrollStart:1600, scrollEnd:2050,
              onEnter: () => this.sceneReceptors(),      onUpdate: p => this.updateReceptors(p) },
            { name:'Receptor-Mediated Endo',  scrollStart:2050, scrollEnd:2600,
              onEnter: () => this.sceneReceptorEndo(),   onUpdate: p => this.updateReceptorEndo(p) },
            { name:'Phagocytosis',            scrollStart:2600, scrollEnd:3100,
              onEnter: () => this.scenePhagocytosis(),   onUpdate: p => this.updatePhagocytosis(p) },
            { name:'Pinocytosis',             scrollStart:3100, scrollEnd:3550,
              onEnter: () => this.scenePinocytosis(),    onUpdate: p => this.updatePinocytosis(p) },
            { name:'Lysosome Digestion',      scrollStart:3550, scrollEnd:4000,
              onEnter: () => this.sceneLysosome(),       onUpdate: p => this.updateLysosome(p) },
            { name:'Constitutive Exocytosis', scrollStart:4000, scrollEnd:4500,
              onEnter: () => this.sceneConExo(),         onUpdate: p => this.updateConExo(p) },
            { name:'Regulated Exocytosis',    scrollStart:4500, scrollEnd:5000,
              onEnter: () => this.sceneRegExo(),         onUpdate: p => this.updateRegExo(p) },
            { name:'SNARE Fusion Detail',     scrollStart:5000, scrollEnd:5450,
              onEnter: () => this.sceneSNARE(),          onUpdate: p => this.updateSNARE(p) },
            { name:'Membrane Recycling',      scrollStart:5450, scrollEnd:5800,
              onEnter: () => this.sceneRecycling(),      onUpdate: p => this.updateRecycling(p) },
            { name:'Complete System',         scrollStart:5800, scrollEnd:6200,
              onEnter: () => this.sceneComplete(),       onUpdate: p => this.updateComplete(p) }
        ];
    }

    _setText(html) { document.getElementById('text').innerHTML = html; }
    _showPanel(id) { const el = document.getElementById(id); if (el) el.classList.add('visible'); }
    _hidePanel(id) { const el = document.getElementById(id); if (el) el.classList.remove('visible'); }

    // ── Scene 0: Introduction ──
    sceneIntro() {
        this._setText('Welcome — scroll to explore how cells move molecules across their membranes');
        // Reset scene-driven opacities so ghost is the only thing visible
        this.system.membrane.opacity = 0;
        Object.values(this.system.organelles).forEach(o => o.opacity = 0);
        this.system.receptors.forEach(r => r.opacity = 0);
    }
    updateIntro(p) {
        // Membrane starts brightening immediately so the cell outline fills in from ghost
        this.system.membrane.opacity = Math.min(1, p * 3);
    }

    // ── Scene 1: Cell Overview ──
    sceneCellOverview() {
        this._setText('🧬 The Cell — a microscopic world of constant activity');
        this._showPanel('info-cell');
        Object.values(this.system.organelles).forEach(o => o.opacity = 0);
    }
    updateCellOverview(p) {
        this.system.membrane.opacity = 1;
    }

    // ── Scene 2: Membrane Zoom ──
    sceneMembrane() {
        this._setText('The Plasma Membrane — a dynamic phospholipid bilayer with embedded proteins');
    }
    updateMembrane(p) {
        this.system.membrane.opacity = 1;
        this.system.receptors.forEach((r, i) => {
            r.opacity = Math.min(1, Math.max(0, (p - i * 0.15) * 3));
        });
    }

    // ── Scene 3: Organelles ──
    sceneOrganelles() {
        this._setText('Major organelles — the cell\'s functional machinery');
        this._showPanel('info-cell');
    }
    updateOrganelles(p) {
        const order = ['nucleus','er','golgi','lysosome'];
        order.forEach((name, i) => {
            const o = this.system.organelles[name];
            if (o) {
                const start = i * 0.22;
                o.opacity = Math.min(1, Math.max(0, (p - start) * 4));
            }
        });
    }

    // ── Scene 4: Receptors & Ligands ──
    sceneReceptors() {
        this._setText('Receptors on the membrane wait for specific signal molecules (ligands)');
        this._showPanel('info-endo');
        this.system.receptors.forEach(r => r.opacity = 1);
    }
    updateReceptors(p) {
        if (p > 0.4 && !this._ligandSeeded) {
            this._ligandSeeded = true;
            this.system.receptors.forEach((r, i) => {
                if (i < 3) {
                    const startAngle = r.angle + 0.8;
                    const ligandStart = new Vector2D(
                        this.system.center.x + Math.cos(startAngle) * (this.system.cellRadius + 70),
                        this.system.center.y + Math.sin(startAngle) * (this.system.cellRadius + 70)
                    );
                    this.system.cargoSystem.addLigand(
                        new Ligand(ligandStart, r.angle, this.system.center, this.system.cellRadius)
                    );
                }
            });
        }
    }

    // ── Scene 5: Receptor-Mediated Endocytosis ──
    sceneReceptorEndo() {
        this._setText('⬇️ Receptor-Mediated Endocytosis — ligand binds receptor → clathrin-coated pit forms → vesicle internalizes');
        this._showPanel('info-endo');
        this._ligandSeeded = false;
        this.system.spawnReceptorMediatedEndo(-0.3);
    }
    updateReceptorEndo(p) {
        if (p > 0.3) this.system.receptors.forEach(r => { if (!r.bound) { r.bound = true; r.boundTime = 0; } });
    }

    // ── Scene 6: Phagocytosis ──
    scenePhagocytosis() {
        this._setText('🦠 Phagocytosis — pseudopods extend and engulf large particles like bacteria');
        this._showPanel('info-endo');
        this.system.receptors.forEach(r => { r.bound = false; });
        this.system.spawnPhagocytosis(0.2);
    }
    updatePhagocytosis(p) {
        if (p > 0.7 && !this._phago2) { this._phago2 = true; this.system.spawnPhagocytosis(2.8); }
    }

    // ── Scene 7: Pinocytosis ──
    scenePinocytosis() {
        this._setText('💧 Pinocytosis — the cell drinks tiny droplets of extracellular fluid');
        this._showPanel('info-endo');
        this._phago2 = false;
        const angles = [0.5, 1.8, 3.2, 4.5, 5.6];
        angles.forEach((a, i) => setTimeout(() => this.system.spawnPinocytosis(a), i * 400));
    }
    updatePinocytosis() {}

    // ── Scene 8: Lysosome Digestion ──
    sceneLysosome() {
        this._setText('🧪 Lysosomal Digestion — enzymes break down engulfed material');
        this._showPanel('info-endo');
        this.system.organelles.lysosome.opacity = 1;
    }
    updateLysosome() {}

    // ── Scene 9: Constitutive Exocytosis ──
    sceneConExo() {
        this._setText('⬆️ Constitutive Exocytosis — continuous export of proteins from the Golgi');
        this._showPanel('info-exo');
        this.system.spawnConstitutiveExocytosis();
    }
    updateConExo(p) {
        if (p > 0.5 && !this._conExo2) { this._conExo2 = true; this.system.spawnConstitutiveExocytosis(); }
    }

    // ── Scene 10: Regulated Exocytosis ──
    sceneRegExo() {
        this._setText('⚡ Regulated Exocytosis — a signal triggers release of neurotransmitters or hormones');
        this._showPanel('info-exo');
        this._conExo2 = false;
        this.system.spawnRegulatedExocytosis();
    }
    updateRegExo(p) {
        if (p > 0.6 && !this._regExo2) { this._regExo2 = true; this.system.spawnRegulatedExocytosis(); }
    }

    // ── Scene 11: SNARE Fusion Detail ──
    sceneSNARE() {
        this._setText('🔗 SNARE Proteins — molecular zippers that fuse the vesicle membrane with the plasma membrane');
        this._showPanel('info-exo');
        this._regExo2 = false;
        this.system.spawnRegulatedExocytosis();
    }
    updateSNARE() {}

    // ── Scene 12: Membrane Recycling ──
    sceneRecycling() {
        this._setText('♻️ Membrane Recycling — endocytosed membrane is sorted and recycled back to the surface');
        this._showPanel('info-stats');
        const lyso  = this.system.organelles.lysosome;
        const angle = 2.5;
        const target = new Vector2D(
            this.system.center.x + Math.cos(angle) * this.system.cellRadius,
            this.system.center.y + Math.sin(angle) * this.system.cellRadius
        );
        const v = new Vesicle(lyso.position.clone(), 18, 'exocytic', target);
        v.label = 'Recycled Membrane';
        v.cargo.push(new CargoParticle(lyso.position, new Vector2D(0,0), 'protein'));
        this.system.cargoSystem.addVesicle(v);
        this.system.membrane.addDeformation(angle, 15, -1);
    }
    updateRecycling() {}

    // ── Scene 13: Complete System ──
    sceneComplete() {
        this._setText('🧬 The Complete Picture — endocytosis & exocytosis in continuous balance');
        document.getElementById('text').style.fontSize  = '20px';
        document.getElementById('text').style.background = 'rgba(78,205,196,0.22)';
        document.getElementById('control-panel').style.display    = 'block';
        document.getElementById('process-selector').style.display = 'block';
        document.getElementById('info-panels').style.display      = 'block';
        ['info-cell','info-endo','info-exo','info-stats'].forEach(id => this._showPanel(id));
        this._startPeriodicSpawns();
    }
    updateComplete() {}

    _startPeriodicSpawns() {
        if (this._periodicStarted) return;
        this._periodicStarted = true;
        const sys = this.system;
        this._periodicTimers.push(setInterval(() => {
            if (sys.activeProcess === 'exocytosis') return;
            const r = Math.random();
            if      (r < 0.35) sys.spawnPhagocytosis(Math.random() * Math.PI * 2);
            else if (r < 0.7)  sys.spawnPinocytosis(Math.random() * Math.PI * 2);
            else               sys.spawnReceptorMediatedEndo(Math.random() * Math.PI * 2);
        }, 3500));
        this._periodicTimers.push(setInterval(() => {
            if (sys.activeProcess === 'endocytosis') return;
            Math.random() < 0.5
                ? sys.spawnConstitutiveExocytosis()
                : sys.spawnRegulatedExocytosis();
        }, 2800));
    }

    update(scrollPosition) {
        const activeScene = this.scenes.find(s =>
            scrollPosition >= s.scrollStart && scrollPosition < s.scrollEnd
        );
        if (!activeScene) return;
        if (this.currentScene !== activeScene) {
            if (activeScene.onEnter) activeScene.onEnter();
            this.currentScene = activeScene;
        }
        if (activeScene.onUpdate) {
            const progress = (scrollPosition - activeScene.scrollStart) /
                             (activeScene.scrollEnd - activeScene.scrollStart);
            activeScene.onUpdate(Math.max(0, Math.min(1, progress)));
        }
    }

    cleanup() {
        this._periodicTimers.forEach(t => clearInterval(t));
        this._periodicTimers = [];
    }
}

// ==================== MAIN APPLICATION ====================
class TransportApp {
    constructor() {
        this.mainRenderer     = null;
        this.particleRenderer = null;
        this.system           = null;
        this.sceneManager     = null;
        this.lastTime         = 0;
        this.isRunning        = false;
        this.speedMultiplier  = 1;
        window.showLabels     = true;
    }

    initialize() {
        this.mainRenderer     = new CanvasRenderer('mainCanvas',     CONFIG.canvas.width, CONFIG.canvas.height);
        this.particleRenderer = new CanvasRenderer('particleCanvas', CONFIG.canvas.width, CONFIG.canvas.height);

        this.system = new TransportSystem();
        this.system.initialize();

        this.sceneManager = new SceneManager(this.system);
        this.setupEventListeners();

        this.isRunning = true;
        this.lastTime  = performance.now();
        this.animate();

        console.log('%c🧬 Endocytosis & Exocytosis Visualization ready (ghost v3)', 'color:#4ecdc4;font-weight:bold');
    }

    setupEventListeners() {
        const labelsBtn = document.getElementById('toggle-labels');
        if (labelsBtn) labelsBtn.addEventListener('click', () => {
            window.showLabels = !window.showLabels;
            labelsBtn.textContent = window.showLabels ? 'Hide Labels' : 'Show Labels';
        });

        const flowBtn = document.getElementById('toggle-flow');
        if (flowBtn) flowBtn.addEventListener('click', () => {
            if (this.system.cargoSystem.isPaused) {
                this.system.cargoSystem.resume();
                flowBtn.textContent = 'Pause Animation';
            } else {
                this.system.cargoSystem.pause();
                flowBtn.textContent = 'Resume Animation';
            }
        });

        const speedBtn = document.getElementById('toggle-speed');
        if (speedBtn) {
            const speeds = [1, 1.5, 2, 0.5];
            let si = 0;
            speedBtn.addEventListener('click', () => {
                si = (si + 1) % speeds.length;
                this.speedMultiplier = speeds[si];
                speedBtn.textContent = `Speed: ${speeds[si]}×`;
            });
        }

        const processSelect = document.getElementById('process');
        if (processSelect) processSelect.addEventListener('change', e => {
            this.system.activeProcess = e.target.value;
        });

        const subtypeSelect = document.getElementById('subtype');
        if (subtypeSelect) subtypeSelect.addEventListener('change', e => {
            const val = e.target.value;
            const textEl = document.getElementById('text');
            if      (val === 'phagocytosis') textEl.innerHTML = '🦠 Phagocytosis — engulfing large particles';
            else if (val === 'pinocytosis')  textEl.innerHTML = '💧 Pinocytosis — drinking fluid droplets';
            else if (val === 'receptor')     textEl.innerHTML = '🔗 Receptor-Mediated — specific ligand binding';
            else textEl.innerHTML = '🧬 Endocytosis & Exocytosis — the full picture';
        });
    }

    animate() {
        if (!this.isRunning) return;

        const now = performance.now();
        let dt    = Math.min(now - this.lastTime, CONFIG.animation.dtCap) * this.speedMultiplier;
        this.lastTime = now;

        // 1. Clear
        this.mainRenderer.clear();
        this.particleRenderer.clear();

        // 2. Ghost pass — dim skeleton of the fully-developed cell, every frame
        this.system.drawGhost(this.mainRenderer, this.particleRenderer, now);

        // 3. Scene pass — phase-driven elements at current opacity on top
        this.system.draw(this.mainRenderer, this.particleRenderer, now);

        // 4. Physics
        this.system.update(dt);

        // 5. Stats
        this.updateStats();

        requestAnimationFrame(() => this.animate());
    }

    updateStats() {
        const cs  = this.system.cargoSystem;
        const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
        set('vesicle-count', cs.getActiveVesicleCount());
        set('endo-count',    cs.endoEvents);
        set('exo-count',     cs.exoEvents);
        set('cargo-count',   cs.cargoDelivered);
        const total = cs.endoEvents + cs.exoEvents || 1;
        set('recycle-pct',   Math.min(100, Math.round((cs.cargoDelivered / total) * 100)));
    }

    handleScroll(scrollPosition) { this.sceneManager.update(scrollPosition); }

    destroy() {
        this.isRunning = false;
        if (this.sceneManager) this.sceneManager.cleanup();
        if (this.system)       this.system.cargoSystem.clear();
    }
}

// ==================== BOOTSTRAP ====================
let app = null;

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function () { scrollFunction(); };

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

    // Initialise on first scroll tick — ghost is visible immediately
    if (scroll > 50 && !app) {
        app = new TransportApp();
        app.initialize();
    }

    if (app) app.handleScroll(scroll);

    document.getElementById('myBtn').style.display = scroll > 5200 ? 'block' : 'none';
}

window.addEventListener('load', () => {
    alert(
        'Welcome to Endocytosis & Exocytosis!\n\n' +
        'An interactive cell-biology visualization.\n\n' +
        'Features:\n' +
        '✓ Ghost silhouette visible from first scroll\n' +
        '✓ Animated phospholipid bilayer membrane\n' +
        '✓ Receptor-mediated endocytosis\n' +
        '✓ Phagocytosis & Pinocytosis\n' +
        '✓ Constitutive & Regulated exocytosis\n' +
        '✓ SNARE-protein vesicle fusion\n' +
        '✓ Lysosomal digestion\n' +
        '✓ Live cargo & event statistics\n\n' +
        'Scroll slowly to explore! 🧬'
    );
});

window.addEventListener('beforeunload', () => { if (app) app.destroy(); });
