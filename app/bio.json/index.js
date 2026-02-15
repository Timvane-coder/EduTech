// ====================================================================
// CIRCULATORY SYSTEM VISUALIZATION - PNG EXPORT VERSION
// ====================================================================
// Run with: node circulatory_export.js

const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// ==================== CONFIGURATION ====================
const CONFIG = {
    canvas: {
        width: 1200,
        height: 800,
        backgroundColor: '#1a1a2e'
    },
    heart: {
        centerX: 600,
        centerY: 400,
        chamberSize: 60,
        wallThickness: 3,
        valveSize: 8
    },
    blood: {
        particleCount: 150,
        particleSize: 3,
        flowSpeed: 2,
        oxygenatedColor: '#ff4444',
        deoxygenatedColor: '#4169e1'
    },
    animation: {
        heartbeatInterval: 833,
        particleUpdateInterval: 16
    },
    export: {
        outputDir: './circulatory_export',
        format: 'png'
    }
};

// ==================== UTILITY CLASSES ====================
class Vector2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(v) {
        return new Vector2D(this.x + v.x, this.y + v.y);
    }

    subtract(v) {
        return new Vector2D(this.x - v.x, this.y - v.y);
    }

    multiply(scalar) {
        return new Vector2D(this.x * scalar, this.y * scalar);
    }

    magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    normalize() {
        const mag = this.magnitude();
        return mag > 0 ? new Vector2D(this.x / mag, this.y / mag) : new Vector2D(0, 0);
    }

    distance(v) {
        return Math.sqrt((this.x - v.x) ** 2 + (this.y - v.y) ** 2);
    }
}

class Color {
    constructor(r, g, b, a = 1) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    toString() {
        return `rgba(${Math.round(this.r)}, ${Math.round(this.g)}, ${Math.round(this.b)}, ${this.a})`;
    }

    static fromHex(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? new Color(
            parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16)
        ) : null;
    }

    lerp(targetColor, t) {
        return new Color(
            this.r + (targetColor.r - this.r) * t,
            this.g + (targetColor.g - this.g) * t,
            this.b + (targetColor.b - this.b) * t,
            this.a + (targetColor.a - this.a) * t
        );
    }
}

// ==================== CANVAS RENDERER ====================
class CanvasRenderer {
    constructor(width, height) {
        this.canvas = createCanvas(width, height);
        this.ctx = this.canvas.getContext('2d');
        this.width = width;
        this.height = height;
        this.scale = 1;
        this.offset = new Vector2D(0, 0);
    }

    clear(color = CONFIG.canvas.backgroundColor) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, 0, this.width, this.height);
    }

    drawCircle(x, y, radius, fillColor, strokeColor = null, lineWidth = 1) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, Math.PI * 2);
        if (fillColor) {
            this.ctx.fillStyle = fillColor;
            this.ctx.fill();
        }
        if (strokeColor) {
            this.ctx.strokeStyle = strokeColor;
            this.ctx.lineWidth = lineWidth;
            this.ctx.stroke();
        }
    }

    drawPath(points, strokeColor, lineWidth = 2, closed = false) {
        if (points.length < 2) return;

        this.ctx.beginPath();
        this.ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
            this.ctx.lineTo(points[i].x, points[i].y);
        }
        if (closed) this.ctx.closePath();

        this.ctx.strokeStyle = strokeColor;
        this.ctx.lineWidth = lineWidth;
        this.ctx.stroke();
    }

    drawSmoothPath(points, strokeColor, lineWidth = 2, closed = false) {
        if (points.length < 2) return;

        this.ctx.beginPath();
        this.ctx.moveTo(points[0].x, points[0].y);

        for (let i = 1; i < points.length - 2; i++) {
            const xc = (points[i].x + points[i + 1].x) / 2;
            const yc = (points[i].y + points[i + 1].y) / 2;
            this.ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
        }

        if (points.length > 2) {
            this.ctx.quadraticCurveTo(
                points[points.length - 2].x,
                points[points.length - 2].y,
                points[points.length - 1].x,
                points[points.length - 1].y
            );
        }

        if (closed) this.ctx.closePath();

        this.ctx.strokeStyle = strokeColor;
        this.ctx.lineWidth = lineWidth;
        this.ctx.stroke();
    }

    fillPolygon(points, fillColor) {
        if (points.length < 3) return;

        this.ctx.beginPath();
        this.ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
            this.ctx.lineTo(points[i].x, points[i].y);
        }
        this.ctx.closePath();
        this.ctx.fillStyle = fillColor;
        this.ctx.fill();
    }

    drawText(text, x, y, font = '14px Arial', color = '#ffffff', align = 'center') {
        this.ctx.font = font;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = align;
        this.ctx.fillText(text, x, y);
    }

    drawGradientCircle(x, y, radius, colorStops) {
        const gradient = this.ctx.createRadialGradient(x, y, 0, x, y, radius);
        colorStops.forEach(stop => gradient.addColorStop(stop.offset, stop.color));

        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, Math.PI * 2);
        this.ctx.fillStyle = gradient;
        this.ctx.fill();
    }

    saveToFile(filename) {
        const buffer = this.canvas.toBuffer('image/png');
        fs.writeFileSync(filename, buffer);
        console.log(`✓ Saved: ${filename}`);
    }
}

// ==================== ANATOMICAL STRUCTURES ====================
class HeartChamber {
    constructor(name, position, width, height, type) {
        this.name = name;
        this.position = position;
        this.width = width;
        this.height = height;
        this.type = type;
        this.isContracting = false;
        this.contractionPhase = 0;
        this.baseColor = type === 'atrium' ? new Color(140, 50, 50, 0.85) : new Color(160, 40, 40, 0.9);
    }

    draw(renderer) {
        const scale = this.isContracting ? 0.92 + Math.sin(this.contractionPhase) * 0.08 : 1;
        const currentWidth = this.width * scale;
        const currentHeight = this.height * scale;

        const points = this.getChamberPoints(currentWidth, currentHeight);

        renderer.ctx.save();
        const gradient = renderer.ctx.createRadialGradient(
            this.position.x, this.position.y, 0,
            this.position.x, this.position.y, Math.max(currentWidth, currentHeight)
        );
        gradient.addColorStop(0, this.baseColor.lerp(new Color(200, 100, 100), 0.3).toString());
        gradient.addColorStop(1, this.baseColor.toString());

        renderer.ctx.beginPath();
        renderer.ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
            renderer.ctx.lineTo(points[i].x, points[i].y);
        }
        renderer.ctx.closePath();
        renderer.ctx.fillStyle = gradient;
        renderer.ctx.fill();

        renderer.ctx.strokeStyle = 'rgba(100, 20, 20, 0.8)';
        renderer.ctx.lineWidth = 3;
        renderer.ctx.stroke();

        renderer.ctx.strokeStyle = 'rgba(200, 100, 100, 0.3)';
        renderer.ctx.lineWidth = 1;
        renderer.ctx.stroke();

        renderer.ctx.restore();

        renderer.drawText(
            this.name,
            this.position.x,
            this.position.y,
            'bold 13px Arial',
            '#ffffff'
        );
    }

    getChamberPoints(width, height) {
        const x = this.position.x;
        const y = this.position.y;

        if (this.type === 'atrium') {
            return [
                new Vector2D(x - width/2, y),
                new Vector2D(x - width/2, y - height * 0.6),
                new Vector2D(x - width/3, y - height * 0.85),
                new Vector2D(x, y - height),
                new Vector2D(x + width/3, y - height * 0.85),
                new Vector2D(x + width/2, y - height * 0.6),
                new Vector2D(x + width/2, y)
            ];
        } else {
            return [
                new Vector2D(x - width/2, y),
                new Vector2D(x - width/2.2, y + height * 0.4),
                new Vector2D(x - width/3, y + height * 0.7),
                new Vector2D(x, y + height),
                new Vector2D(x + width/3, y + height * 0.7),
                new Vector2D(x + width/2.2, y + height * 0.4),
                new Vector2D(x + width/2, y)
            ];
        }
    }

    contract() {
        this.isContracting = true;
        this.contractionPhase = 0;
    }

    update(deltaTime) {
        if (this.isContracting) {
            this.contractionPhase += deltaTime * 0.01;
            if (this.contractionPhase >= Math.PI * 2) {
                this.isContracting = false;
                this.contractionPhase = 0;
            }
        }
    }
}

class Valve {
    constructor(position, type, angle = 0) {
        this.position = position;
        this.type = type;
        this.angle = angle;
        this.isOpen = false;
        this.openness = 0;
    }

    draw(renderer) {
        const size = 14;
        const leafletWidth = size * 0.35;

        renderer.ctx.save();
        renderer.ctx.translate(this.position.x, this.position.y);
        renderer.ctx.rotate(this.angle);

        if (this.isOpen) {
            renderer.ctx.fillStyle = 'rgba(180, 120, 120, 0.85)';
            renderer.ctx.fillRect(-leafletWidth, -size/2, leafletWidth * 0.25, size);
            renderer.ctx.fillRect(leafletWidth * 0.75, -size/2, leafletWidth * 0.25, size);
        } else {
            renderer.ctx.fillStyle = 'rgba(160, 100, 100, 0.95)';
            renderer.ctx.fillRect(-leafletWidth/2, -size/2, leafletWidth, size);
        }

        renderer.ctx.restore();

        renderer.drawText(
            this.type,
            this.position.x,
            this.position.y - 20,
            '10px Arial',
            '#ffcccc',
            'center'
        );
    }

    open() {
        this.isOpen = true;
    }

    close() {
        this.isOpen = false;
    }
}

class Heart {
    constructor(centerX, centerY) {
        this.center = new Vector2D(centerX, centerY);
        this.chambers = this.createChambers();
        this.valves = this.createValves();
        this.beatPhase = 0;
        this.bpm = 72;
    }

    createChambers() {
        const offset = 45;
        const chamberWidth = 55;
        const chamberHeight = 65;

        return {
            RA: new HeartChamber(
                'RA',
                new Vector2D(this.center.x + offset, this.center.y - offset),
                chamberWidth,
                chamberHeight * 0.75,
                'atrium'
            ),
            RV: new HeartChamber(
                'RV',
                new Vector2D(this.center.x + offset, this.center.y + offset + 5),
                chamberWidth,
                chamberHeight,
                'ventricle'
            ),
            LA: new HeartChamber(
                'LA',
                new Vector2D(this.center.x - offset, this.center.y - offset),
                chamberWidth,
                chamberHeight * 0.75,
                'atrium'
            ),
            LV: new HeartChamber(
                'LV',
                new Vector2D(this.center.x - offset, this.center.y + offset + 5),
                chamberWidth * 1.1,
                chamberHeight * 1.1,
                'ventricle'
            )
        };
    }

    createValves() {
        return {
            tricuspid: new Valve(
                new Vector2D(this.center.x + 45, this.center.y),
                'Tricuspid',
                0
            ),
            pulmonary: new Valve(
                new Vector2D(this.center.x + 45, this.center.y - 75),
                'Pulmonary',
                Math.PI / 2
            ),
            mitral: new Valve(
                new Vector2D(this.center.x - 45, this.center.y),
                'Mitral',
                0
            ),
            aortic: new Valve(
                new Vector2D(this.center.x - 45, this.center.y - 75),
                'Aortic',
                Math.PI / 2
            )
        };
    }

    draw(renderer) {
        this.drawHeartOutline(renderer);

        renderer.ctx.save();
        renderer.ctx.strokeStyle = 'rgba(100, 20, 20, 0.9)';
        renderer.ctx.lineWidth = 5;
        renderer.ctx.setLineDash([5, 3]);
        renderer.drawPath([
            new Vector2D(this.center.x, this.center.y - 90),
            new Vector2D(this.center.x, this.center.y + 95)
        ], 'rgba(100, 20, 20, 0.9)', 5);
        renderer.ctx.setLineDash([]);
        renderer.ctx.restore();

        Object.values(this.chambers).forEach(chamber => chamber.draw(renderer));
        Object.values(this.valves).forEach(valve => valve.draw(renderer));
    }

    drawHeartOutline(renderer) {
        const ctx = renderer.ctx;
        const x = this.center.x;
        const y = this.center.y;

        ctx.save();
        ctx.beginPath();

        ctx.moveTo(x, y - 100);
        ctx.bezierCurveTo(x - 30, y - 110, x - 70, y - 90, x - 80, y - 50);
        ctx.bezierCurveTo(x - 85, y - 20, x - 80, y + 20, x - 60, y + 60);
        ctx.bezierCurveTo(x - 40, y + 90, x - 15, y + 110, x, y + 120);
        ctx.bezierCurveTo(x + 15, y + 110, x + 40, y + 90, x + 60, y + 60);
        ctx.bezierCurveTo(x + 80, y + 20, x + 85, y - 20, x + 80, y - 50);
        ctx.bezierCurveTo(x + 70, y - 90, x + 30, y - 110, x, y - 100);

        ctx.strokeStyle = 'rgba(180, 60, 60, 0.5)';
        ctx.lineWidth = 2;
        ctx.stroke();

        const gradient = ctx.createRadialGradient(x, y, 50, x, y, 140);
        gradient.addColorStop(0, 'rgba(255, 107, 107, 0)');
        gradient.addColorStop(0.7, 'rgba(255, 107, 107, 0.08)');
        gradient.addColorStop(1, 'rgba(255, 107, 107, 0.2)');

        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.restore();
    }

    beat() {
        this.chambers.RA.contract();
        this.chambers.LA.contract();
        this.valves.tricuspid.open();
        this.valves.mitral.open();

        setTimeout(() => {
            this.valves.tricuspid.close();
            this.valves.mitral.close();
            this.chambers.RV.contract();
            this.chambers.LV.contract();
            this.valves.pulmonary.open();
            this.valves.aortic.open();
        }, 100);

        setTimeout(() => {
            this.valves.pulmonary.close();
            this.valves.aortic.close();
        }, 300);
    }

    update(deltaTime) {
        Object.values(this.chambers).forEach(chamber => chamber.update(deltaTime));
    }
}

class BloodVessel {
    constructor(name, path, type, width = 10) {
        this.name = name;
        this.path = path;
        this.type = type;
        this.width = width;
        this.opacity = 0;
        this.flowDirection = 1;
        this.plaqueLocations = [];
    }

    getColor() {
        const alpha = this.opacity;
        switch(this.type) {
            case 'artery':
                return new Color(220, 50, 50, alpha);
            case 'vein':
                return new Color(70, 90, 180, alpha);
            case 'pulmonary':
                return new Color(140, 70, 200, alpha);
            case 'capillary':
                return new Color(180, 80, 120, alpha * 0.6);
            default:
                return new Color(255, 255, 255, alpha);
        }
    }

    draw(renderer) {
        if (this.opacity <= 0) return;

        const color = this.getColor();
        const darkerColor = color.lerp(new Color(0, 0, 0), 0.4);

        renderer.ctx.save();

        renderer.ctx.strokeStyle = darkerColor.toString();
        renderer.ctx.lineWidth = this.width + 2;
        renderer.ctx.lineCap = 'round';
        renderer.ctx.lineJoin = 'round';
        renderer.drawSmoothPath(this.path, darkerColor.toString(), this.width + 2);

        renderer.ctx.strokeStyle = color.toString();
        renderer.ctx.lineWidth = this.width;
        renderer.drawSmoothPath(this.path, color.toString(), this.width);

        const highlightColor = color.lerp(new Color(255, 255, 255), 0.3);
        highlightColor.a *= 0.5;
        renderer.ctx.strokeStyle = highlightColor.toString();
        renderer.ctx.lineWidth = this.width * 0.4;
        renderer.drawSmoothPath(this.path, highlightColor.toString(), this.width * 0.4);

        renderer.ctx.restore();

        this.plaqueLocations.forEach(plaque => {
            const point = this.getPointAtDistance(plaque.position);
            renderer.drawGradientCircle(
                point.x,
                point.y,
                this.width * 0.6,
                [
                    { offset: 0, color: 'rgba(240, 220, 140, 0.9)' },
                    { offset: 1, color: 'rgba(200, 180, 100, 0.7)' }
                ]
            );
        });

        if (this.opacity > 0.5) {
            const midPoint = this.path[Math.floor(this.path.length / 2)];
            renderer.drawText(
                this.name,
                midPoint.x,
                midPoint.y - 15,
                '10px Arial',
                color.toString(),
                'center'
            );
        }
    }

    getPointAtDistance(t) {
        const index = Math.floor(t * (this.path.length - 1));
        const nextIndex = Math.min(index + 1, this.path.length - 1);
        const localT = (t * (this.path.length - 1)) - index;

        const p1 = this.path[index];
        const p2 = this.path[nextIndex];

        return new Vector2D(
            p1.x + (p2.x - p1.x) * localT,
            p1.y + (p2.y - p1.y) * localT
        );
    }

    addPlaque(position) {
        this.plaqueLocations.push({ position, size: Math.random() * 0.3 + 0.2 });
    }

    clearPlaques() {
        this.plaqueLocations = [];
    }
}

class Organ {
    constructor(name, position, size, color) {
        this.name = name;
        this.position = position;
        this.size = size;
        this.color = color;
        this.opacity = 0;
        this.capillaryBeds = [];
    }

    draw(renderer) {
        if (this.opacity <= 0) return;

        const color = new Color(this.color.r, this.color.g, this.color.b, this.opacity);

        switch(this.name) {
            case 'Brain':
                this.drawBrain(renderer, color);
                break;
            case 'Lung-L':
            case 'Lung-R':
                this.drawLung(renderer, color);
                break;
            case 'Liver':
                this.drawLiver(renderer, color);
                break;
            case 'Kidney-L':
            case 'Kidney-R':
                this.drawKidney(renderer, color);
                break;
            default:
                renderer.drawCircle(this.position.x, this.position.y, this.size, color.toString());
        }

        if (this.opacity > 0.5) {
            renderer.ctx.save();
            this.capillaryBeds.forEach(cap => {
                const gradient = renderer.ctx.createRadialGradient(cap.x, cap.y, 0, cap.x, cap.y, 2);
                gradient.addColorStop(0, 'rgba(255, 120, 150, 0.8)');
                gradient.addColorStop(1, 'rgba(255, 120, 150, 0)');
                renderer.ctx.fillStyle = gradient;
                renderer.ctx.beginPath();
                renderer.ctx.arc(cap.x, cap.y, 2, 0, Math.PI * 2);
                renderer.ctx.fill();
            });
            renderer.ctx.restore();
        }

        if (this.opacity > 0.5) {
            renderer.drawText(
                this.name,
                this.position.x,
                this.position.y + this.size + 18,
                'bold 12px Arial',
                '#ffffff',
                'center'
            );
        }
    }

    drawBrain(renderer, color) {
        const x = this.position.x;
        const y = this.position.y;
        const s = this.size;
        const ctx = renderer.ctx;

        ctx.save();

        const gradient = ctx.createRadialGradient(x, y - s * 0.2, s * 0.3, x, y, s);
        gradient.addColorStop(0, color.lerp(new Color(255, 255, 255), 0.3).toString());
        gradient.addColorStop(1, color.toString());

        ctx.beginPath();
        ctx.ellipse(x, y, s * 0.9, s, 0, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.strokeStyle = color.lerp(new Color(0, 0, 0), 0.4).toString();
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.strokeStyle = color.lerp(new Color(0, 0, 0), 0.3).toString();
        ctx.lineWidth = 1.5;

        ctx.beginPath();
        ctx.moveTo(x, y - s);
        ctx.lineTo(x, y + s);
        ctx.stroke();

        for (let i = 0; i < 3; i++) {
            const offsetX = (i - 1) * s * 0.4;
            ctx.beginPath();
            ctx.moveTo(x + offsetX, y - s * 0.7);
            ctx.quadraticCurveTo(x + offsetX + s * 0.1, y - s * 0.3, x + offsetX, y);
            ctx.quadraticCurveTo(x + offsetX - s * 0.1, y + s * 0.3, x + offsetX, y + s * 0.7);
            ctx.stroke();
        }

        ctx.restore();
    }

    drawLung(renderer, color) {
        const x = this.position.x;
        const y = this.position.y;
        const s = this.size;
        const ctx = renderer.ctx;

        ctx.save();

        const gradient = ctx.createRadialGradient(x, y - s * 0.2, s * 0.2, x, y, s * 1.2);
        gradient.addColorStop(0, color.lerp(new Color(255, 200, 200), 0.4).toString());
        gradient.addColorStop(1, color.toString());

        const points = [
            new Vector2D(x, y - s * 0.95),
            new Vector2D(x - s * 0.45, y - s * 0.6),
            new Vector2D(x - s * 0.65, y - s * 0.1),
            new Vector2D(x - s * 0.7, y + s * 0.4),
            new Vector2D(x - s * 0.4, y + s * 0.85),
            new Vector2D(x, y + s * 0.95),
            new Vector2D(x + s * 0.4, y + s * 0.85),
            new Vector2D(x + s * 0.7, y + s * 0.4),
            new Vector2D(x + s * 0.65, y - s * 0.1),
            new Vector2D(x + s * 0.45, y - s * 0.6)
        ];

        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
            const xc = (points[i].x + points[(i + 1) % points.length].x) / 2;
            const yc = (points[i].y + points[(i + 1) % points.length].y) / 2;
            ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
        }
        ctx.closePath();
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.strokeStyle = color.lerp(new Color(0, 0, 0), 0.4).toString();
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.strokeStyle = 'rgba(200, 150, 150, 0.6)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x, y - s * 0.8);
        ctx.lineTo(x, y - s * 0.2);
        ctx.stroke();

        const branches = [
            { angle: -0.6, length: s * 0.5 },
            { angle: 0, length: s * 0.4 },
            { angle: 0.6, length: s * 0.5 }
        ];

        branches.forEach(branch => {
            ctx.beginPath();
            ctx.moveTo(x, y - s * 0.2);
            ctx.lineTo(
                x + Math.sin(branch.angle) * branch.length,
                y - s * 0.2 + Math.cos(branch.angle) * branch.length
            );
            ctx.stroke();
        });

        ctx.restore();
    }

    drawLiver(renderer, color) {
        const x = this.position.x;
        const y = this.position.y;
        const s = this.size;
        const ctx = renderer.ctx;

        ctx.save();

        const gradient = ctx.createRadialGradient(x - s * 0.2, y - s * 0.1, s * 0.2, x, y, s * 1.1);
        gradient.addColorStop(0, color.lerp(new Color(180, 120, 80), 0.3).toString());
        gradient.addColorStop(1, color.toString());

        const points = [
            new Vector2D(x - s * 0.9, y - s * 0.4),
            new Vector2D(x - s * 0.6, y - s * 0.75),
            new Vector2D(x - s * 0.1, y - s * 0.8),
            new Vector2D(x + s * 0.4, y - s * 0.7),
            new Vector2D(x + s * 0.85, y - s * 0.35),
            new Vector2D(x + s * 0.9, y + s * 0.1),
            new Vector2D(x + s * 0.75, y + s * 0.55),
            new Vector2D(x + s * 0.3, y + s * 0.75),
            new Vector2D(x - s * 0.2, y + s * 0.8),
            new Vector2D(x - s * 0.6, y + s * 0.7),
            new Vector2D(x - s * 0.85, y + s * 0.4),
            new Vector2D(x - s * 0.95, y)
        ];

        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
            const xc = (points[i].x + points[(i + 1) % points.length].x) / 2;
            const yc = (points[i].y + points[(i + 1) % points.length].y) / 2;
            ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
        }
        ctx.closePath();
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.strokeStyle = color.lerp(new Color(0, 0, 0), 0.4).toString();
        ctx.lineWidth = 2.5;
        ctx.stroke();

        ctx.strokeStyle = color.lerp(new Color(0, 0, 0), 0.3).toString();
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(x - s * 0.1, y - s * 0.8);
        ctx.quadraticCurveTo(x, y - s * 0.2, x + s * 0.2, y + s * 0.6);
        ctx.stroke();

        ctx.restore();
    }

    drawKidney(renderer, color) {
        const x = this.position.x;
        const y = this.position.y;
        const s = this.size;
        const ctx = renderer.ctx;

        ctx.save();

        const gradient = ctx.createRadialGradient(x, y - s * 0.2, s * 0.2, x, y, s);
        gradient.addColorStop(0, color.lerp(new Color(240, 200, 200), 0.3).toString());
        gradient.addColorStop(1, color.toString());

        ctx.beginPath();

        ctx.moveTo(x, y - s);
        ctx.bezierCurveTo(x + s * 0.7, y - s * 0.9, x + s * 0.8, y - s * 0.3, x + s * 0.7, y + s * 0.3);
        ctx.bezierCurveTo(x + s * 0.6, y + s * 0.8, x + s * 0.2, y + s, x, y + s);
        ctx.bezierCurveTo(x - s * 0.2, y + s * 0.95, x - s * 0.4, y + s * 0.7, x - s * 0.35, y + s * 0.3);
        ctx.bezierCurveTo(x - s * 0.3, y, x - s * 0.35, y - s * 0.3, x - s * 0.4, y - s * 0.7);
        ctx.bezierCurveTo(x - s * 0.3, y - s * 0.9, x - s * 0.1, y - s, x, y - s);

        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.strokeStyle = color.lerp(new Color(0, 0, 0), 0.4).toString();
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = color.lerp(new Color(150, 80, 80), 0.5).toString();
        ctx.beginPath();
        ctx.ellipse(x - s * 0.15, y, s * 0.25, s * 0.4, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = color.lerp(new Color(0, 0, 0), 0.2).toString();
        ctx.lineWidth = 1;
        for (let i = 0; i < 4; i++) {
            const angle = (i / 4) * Math.PI * 2;
            const startX = x + Math.cos(angle) * s * 0.3;
            const startY = y + Math.sin(angle) * s * 0.5;
            const endX = x + Math.cos(angle) * s * 0.6;
            const endY = y + Math.sin(angle) * s * 0.8;
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            ctx.stroke();
        }

        ctx.restore();
    }

    generateCapillaryBeds(count) {
        this.capillaryBeds = [];
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * this.size * 0.65;
            this.capillaryBeds.push(new Vector2D(
                this.position.x + Math.cos(angle) * dist,
                this.position.y + Math.sin(angle) * dist
            ));
        }
    }
}

class Leg {
    constructor(side, centerX, centerY) {
        this.side = side;
        this.centerX = centerX;
        this.centerY = centerY;
        this.opacity = 0;

        this.thighLength = 180;
        this.calfLength = 160;
        this.thighWidth = 45;
        this.calfWidth = 35;
        this.footLength = 60;
        this.footHeight = 25;
    }

    draw(renderer) {
        if (this.opacity <= 0) return;

        const ctx = renderer.ctx;
        const x = this.centerX;
        const y = this.centerY;
        const sideOffset = this.side === 'left' ? -1 : 1;

        ctx.save();
        ctx.globalAlpha = this.opacity;

        const thighGradient = ctx.createLinearGradient(x, y, x, y + this.thighLength);
        thighGradient.addColorStop(0, 'rgba(220, 180, 160, 0.7)');
        thighGradient.addColorStop(1, 'rgba(200, 160, 140, 0.7)');

        ctx.beginPath();
        ctx.moveTo(x - this.thighWidth / 2, y);
        ctx.lineTo(x - this.thighWidth / 2 + 5, y + this.thighLength);
        ctx.lineTo(x + this.thighWidth / 2 - 5, y + this.thighLength);
        ctx.lineTo(x + this.thighWidth / 2, y);
        ctx.closePath();
        ctx.fillStyle = thighGradient;
        ctx.fill();
        ctx.strokeStyle = 'rgba(150, 120, 100, 0.8)';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(x, y + this.thighLength, this.thighWidth / 2.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(210, 170, 150, 0.8)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(150, 120, 100, 0.8)';
        ctx.lineWidth = 2;
        ctx.stroke();

        const calfGradient = ctx.createLinearGradient(x, y + this.thighLength, x, y + this.thighLength + this.calfLength);
        calfGradient.addColorStop(0, 'rgba(210, 170, 150, 0.7)');
        calfGradient.addColorStop(1, 'rgba(190, 150, 130, 0.7)');

        ctx.beginPath();
        ctx.moveTo(x - this.calfWidth / 2, y + this.thighLength);
        ctx.lineTo(x - this.calfWidth / 2 + 3, y + this.thighLength + this.calfLength);
        ctx.lineTo(x + this.calfWidth / 2 - 3, y + this.thighLength + this.calfLength);
        ctx.lineTo(x + this.calfWidth / 2, y + this.thighLength);
        ctx.closePath();
        ctx.fillStyle = calfGradient;
        ctx.fill();
        ctx.strokeStyle = 'rgba(150, 120, 100, 0.8)';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(x, y + this.thighLength + this.calfLength, this.calfWidth / 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(200, 160, 140, 0.8)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(150, 120, 100, 0.8)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        const footY = y + this.thighLength + this.calfLength;
        ctx.beginPath();
        ctx.ellipse(x + this.footLength / 3, footY, this.footLength / 2, this.footHeight / 2, 0, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(200, 160, 140, 0.7)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(150, 120, 100, 0.8)';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.strokeStyle = 'rgba(150, 120, 100, 0.4)';
        ctx.lineWidth = 1;

        ctx.beginPath();
        ctx.moveTo(x - this.thighWidth / 4, y + 20);
        ctx.lineTo(x - this.thighWidth / 4, y + this.thighLength - 20);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x + this.thighWidth / 4, y + 20);
        ctx.lineTo(x + this.thighWidth / 4, y + this.thighLength - 20);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x, y + this.thighLength + 30);
        ctx.quadraticCurveTo(
            x + sideOffset * this.calfWidth / 3,
            y + this.thighLength + this.calfLength / 2,
            x, y + this.thighLength + this.calfLength - 30
        );
        ctx.stroke();

        ctx.restore();
    }
}

class BloodCell {
    constructor(position, velocity, type, vessel = null) {
        this.position = position;
        this.velocity = velocity;
        this.type = type;
        this.vessel = vessel;
        this.pathProgress = 0;
        this.size = 3;
        this.opacity = 1;
        this.isActive = true;
        this.oxygenLevel = type === 'oxygenated' ? 1.0 : 0.3;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.1;
    }

    getColor() {
        const deoxyColor = new Color(70, 90, 180, this.opacity);
        const oxyColor = new Color(220, 50, 50, this.opacity);
        return deoxyColor.lerp(oxyColor, this.oxygenLevel);
    }

    draw(renderer) {
        if (!this.isActive || this.opacity <= 0) return;

        const color = this.getColor();
        const ctx = renderer.ctx;

        ctx.save();
        ctx.translate(this.position.x, this.position.y);
        ctx.rotate(this.rotation);

        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size);
        gradient.addColorStop(0, color.lerp(new Color(255, 255, 255), 0.4).toString());
        gradient.addColorStop(0.5, color.toString());
        gradient.addColorStop(1, color.lerp(new Color(0, 0, 0), 0.3).toString());

        ctx.beginPath();
        ctx.ellipse(0, 0, this.size, this.size * 0.7, 0, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.ellipse(0, 0, this.size * 0.3, this.size * 0.2, 0, 0, Math.PI * 2);
        ctx.fillStyle = color.lerp(new Color(255, 255, 255), 0.6).toString();
        ctx.globalAlpha = 0.5;
        ctx.fill();

        ctx.restore();
    }
}

class ParticleSystem {
    constructor() {
        this.particles = [];
        this.maxParticles = CONFIG.blood.particleCount;
        this.flowSpeed = CONFIG.blood.flowSpeed;
    }

    addParticle(particle) {
        if (this.particles.length < this.maxParticles) {
            this.particles.push(particle);
        }
    }

    draw(renderer) {
        this.particles.forEach(particle => particle.draw(renderer));
    }

    clear() {
        this.particles = [];
    }
}

// ==================== CIRCULATION SYSTEM ====================
class CirculatorySystem {
    constructor() {
        this.heart = null;
        this.vessels = {};
        this.organs = {};
        this.legs = {};
        this.particleSystem = new ParticleSystem();
    }

    initialize(centerX, centerY) {
        this.heart = new Heart(centerX, centerY);
        this.createVessels(centerX, centerY);
        this.createOrgans(centerX, centerY);
        this.createLegs(centerX, centerY);
    }

    createVessels(cx, cy) {
        this.vessels.pulmonaryArtery = new BloodVessel(
            'Pulmonary Artery',
            [
                new Vector2D(cx + 45, cy - 75),
                new Vector2D(cx + 70, cy - 110),
                new Vector2D(cx + 100, cy - 150),
                new Vector2D(cx + 130, cy - 180),
                new Vector2D(cx + 150, cy - 200)
            ],
            'pulmonary',
            9
        );

        this.vessels.pulmonaryVein = new BloodVessel(
            'Pulmonary Vein',
            [
                new Vector2D(cx - 150, cy - 200),
                new Vector2D(cx - 130, cy - 180),
                new Vector2D(cx - 100, cy - 150),
                new Vector2D(cx - 70, cy - 110),
                new Vector2D(cx - 45, cy - 75)
            ],
            'pulmonary',
            9
        );

        this.vessels.aorta = new BloodVessel(
            'Aorta',
            [
                new Vector2D(cx - 45, cy - 75),
                new Vector2D(cx - 70, cy - 110),
                new Vector2D(cx - 90, cy - 150),
                new Vector2D(cx - 100, cy - 190),
                new Vector2D(cx - 100, cy - 210)
            ],
            'artery',
            13
        );

        this.vessels.descendingAorta = new BloodVessel(
            'Descending Aorta',
            [
                new Vector2D(cx - 100, cy - 210),
                new Vector2D(cx - 100, cy - 150),
                new Vector2D(cx - 100, cy - 80),
                new Vector2D(cx - 100, cy),
                new Vector2D(cx - 100, cy + 80),
                new Vector2D(cx - 100, cy + 120)
            ],
            'artery',
            13
        );

        this.vessels.carotidArtery = new BloodVessel(
            'Carotid Artery',
            [
                new Vector2D(cx - 100, cy - 210),
                new Vector2D(cx - 90, cy - 240),
                new Vector2D(cx - 70, cy - 270),
                new Vector2D(cx - 40, cy - 290),
                new Vector2D(cx, cy - 310)
            ],
            'artery',
            7
        );

        this.vessels.renalArteryL = new BloodVessel(
            'Renal A. (L)',
            [
                new Vector2D(cx - 100, cy + 50),
                new Vector2D(cx - 120, cy + 65),
                new Vector2D(cx - 140, cy + 80),
                new Vector2D(cx - 160, cy + 90)
            ],
            'artery',
            6
        );

        this.vessels.renalArteryR = new BloodVessel(
            'Renal A. (R)',
            [
                new Vector2D(cx - 100, cy + 50),
                new Vector2D(cx - 80, cy + 65),
                new Vector2D(cx - 60, cy + 80),
                new Vector2D(cx - 40, cy + 90),
                new Vector2D(cx + 50, cy + 100)
            ],
            'artery',
            6
        );

        this.vessels.hepaticArtery = new BloodVessel(
            'Hepatic Artery',
            [
                new Vector2D(cx - 100, cy + 10),
                new Vector2D(cx - 70, cy + 25),
                new Vector2D(cx - 40, cy + 35),
                new Vector2D(cx, cy + 45),
                new Vector2D(cx + 30, cy + 50)
            ],
            'artery',
            6
        );

        this.vessels.iliacArteryL = new BloodVessel(
            'Iliac A. (L)',
            [
                new Vector2D(cx - 100, cy + 120),
                new Vector2D(cx - 110, cy + 150),
                new Vector2D(cx - 125, cy + 185),
                new Vector2D(cx - 140, cy + 225),
                new Vector2D(cx - 150, cy + 270),
                new Vector2D(cx - 155, cy + 310)
            ],
            'artery',
            7
        );

        this.vessels.iliacArteryR = new BloodVessel(
            'Iliac A. (R)',
            [
                new Vector2D(cx - 100, cy + 120),
                new Vector2D(cx - 90, cy + 150),
                new Vector2D(cx - 75, cy + 185),
                new Vector2D(cx - 60, cy + 225),
                new Vector2D(cx - 50, cy + 270),
                new Vector2D(cx - 45, cy + 310)
            ],
            'artery',
            7
        );

        this.vessels.venaCavaSuperior = new BloodVessel(
            'Superior Vena Cava',
            [
                new Vector2D(cx + 100, cy - 210),
                new Vector2D(cx + 90, cy - 170),
                new Vector2D(cx + 75, cy - 130),
                new Vector2D(cx + 60, cy - 95),
                new Vector2D(cx + 45, cy - 75)
            ],
            'vein',
            11
        );

        this.vessels.venaCavaInferior = new BloodVessel(
            'Inferior Vena Cava',
            [
                new Vector2D(cx + 100, cy + 120),
                new Vector2D(cx + 100, cy + 80),
                new Vector2D(cx + 100, cy + 30),
                new Vector2D(cx + 95, cy - 10),
                new Vector2D(cx + 85, cy - 45),
                new Vector2D(cx + 70, cy - 65),
                new Vector2D(cx + 45, cy - 75)
            ],
            'vein',
            11
        );
    }

    createOrgans(cx, cy) {
        this.organs.brain = new Organ(
            'Brain',
            new Vector2D(cx, cy - 320),
            42,
            new Color(245, 215, 215)
        );

        this.organs.lungL = new Organ(
            'Lung-L',
            new Vector2D(cx - 150, cy - 210),
            52,
            new Color(255, 180, 180)
        );

        this.organs.lungR = new Organ(
            'Lung-R',
            new Vector2D(cx + 150, cy - 210),
            52,
            new Color(255, 180, 180)
        );

        this.organs.liver = new Organ(
            'Liver',
            new Vector2D(cx + 50, cy + 50),
            48,
            new Color(139, 69, 19)
        );

        this.organs.kidneyL = new Organ(
            'Kidney-L',
            new Vector2D(cx - 160, cy + 90),
            28,
            new Color(180, 100, 100)
        );

        this.organs.kidneyR = new Organ(
            'Kidney-R',
            new Vector2D(cx + 50, cy + 100),
            28,
            new Color(180, 100, 100)
        );

        Object.values(this.organs).forEach(organ => {
            organ.generateCapillaryBeds(25);
        });
    }

    createLegs(cx, cy) {
        this.legs.left = new Leg('left', cx - 155, cy + 310);
        this.legs.right = new Leg('right', cx - 45, cy + 310);
    }

    draw(renderer) {
        Object.values(this.legs).forEach(leg => leg.draw(renderer));
        Object.values(this.organs).forEach(organ => organ.draw(renderer));
        Object.values(this.vessels).forEach(vessel => vessel.draw(renderer));
        if (this.heart) {
            this.heart.draw(renderer);
        }
        this.particleSystem.draw(renderer);
    }

    spawnBloodCells(vessel, count, type) {
        for (let i = 0; i < count; i++) {
            const progress = Math.random();
            const position = vessel.getPointAtDistance(progress);
            const velocity = new Vector2D(0, 0);

            const cell = new BloodCell(position, velocity, type, vessel);
            cell.pathProgress = progress;
            this.particleSystem.addParticle(cell);
        }
    }
}

// ==================== SCENE EXPORTER ====================
class SceneExporter {
    constructor(system, renderer) {
        this.system = system;
        this.renderer = renderer;
        this.outputDir = CONFIG.export.outputDir;
        this.scenes = this.defineScenes();
    }

    defineScenes() {
        return [
            {
                name: 'heart_only',
                description: 'The heart with all four chambers',
                setup: () => {
                    // Heart is always visible
                }
            },
            {
                name: 'heart_with_lungs',
                description: 'Heart with both lungs',
                setup: () => {
                    this.system.organs.lungL.opacity = 1;
                    this.system.organs.lungR.opacity = 1;
                }
            },
            {
                name: 'pulmonary_circulation',
                description: 'Heart, lungs, and pulmonary vessels',
                setup: () => {
                    this.system.organs.lungL.opacity = 1;
                    this.system.organs.lungR.opacity = 1;
                    this.system.vessels.pulmonaryArtery.opacity = 1;
                    this.system.vessels.pulmonaryVein.opacity = 1;
                    
                    this.system.spawnBloodCells(this.system.vessels.pulmonaryArtery, 15, 'deoxygenated');
                    this.system.spawnBloodCells(this.system.vessels.pulmonaryVein, 15, 'oxygenated');
                }
            },
            {
                name: 'systemic_arteries',
                description: 'Heart with major systemic arteries',
                setup: () => {
                    this.system.vessels.aorta.opacity = 1;
                    this.system.vessels.descendingAorta.opacity = 1;
                    this.system.vessels.carotidArtery.opacity = 1;
                    this.system.vessels.renalArteryL.opacity = 1;
                    this.system.vessels.renalArteryR.opacity = 1;
                    this.system.vessels.hepaticArtery.opacity = 1;
                    this.system.vessels.iliacArteryL.opacity = 1;
                    this.system.vessels.iliacArteryR.opacity = 1;

                    Object.values(this.system.vessels).forEach(vessel => {
                        if (vessel.type === 'artery' && vessel.opacity > 0) {
                            this.system.spawnBloodCells(vessel, 8, 'oxygenated');
                        }
                    });
                }
            },
            {
                name: 'major_organs',
                description: 'Heart with brain, liver, and kidneys',
                setup: () => {
                    this.system.organs.brain.opacity = 1;
                    this.system.organs.liver.opacity = 1;
                    this.system.organs.kidneyL.opacity = 1;
                    this.system.organs.kidneyR.opacity = 1;
                    this.system.vessels.aorta.opacity = 1;
                    this.system.vessels.descendingAorta.opacity = 1;
                    this.system.vessels.carotidArtery.opacity = 1;
                    this.system.vessels.renalArteryL.opacity = 1;
                    this.system.vessels.renalArteryR.opacity = 1;
                    this.system.vessels.hepaticArtery.opacity = 1;
                }
            },
            {
                name: 'systemic_veins',
                description: 'Heart with major systemic veins',
                setup: () => {
                    this.system.vessels.venaCavaSuperior.opacity = 1;
                    this.system.vessels.venaCavaInferior.opacity = 1;

                    this.system.spawnBloodCells(this.system.vessels.venaCavaSuperior, 10, 'deoxygenated');
                    this.system.spawnBloodCells(this.system.vessels.venaCavaInferior, 10, 'deoxygenated');
                }
            },
            {
                name: 'complete_with_legs',
                description: 'Complete circulatory system including legs',
                setup: () => {
                    this.system.organs.lungL.opacity = 1;
                    this.system.organs.lungR.opacity = 1;
                    this.system.organs.brain.opacity = 1;
                    this.system.organs.liver.opacity = 1;
                    this.system.organs.kidneyL.opacity = 1;
                    this.system.organs.kidneyR.opacity = 1;
                    this.system.legs.left.opacity = 1;
                    this.system.legs.right.opacity = 1;

                    Object.values(this.system.vessels).forEach(vessel => {
                        vessel.opacity = 1;
                        const type = vessel.type === 'artery' ? 'oxygenated' : 'deoxygenated';
                        this.system.spawnBloodCells(vessel, 5, type);
                    });
                }
            },
            {
                name: 'complete_system',
                description: 'Complete circulatory system with all components',
                setup: () => {
                    this.system.organs.lungL.opacity = 1;
                    this.system.organs.lungR.opacity = 1;
                    this.system.organs.brain.opacity = 1;
                    this.system.organs.liver.opacity = 1;
                    this.system.organs.kidneyL.opacity = 1;
                    this.system.organs.kidneyR.opacity = 1;
                    this.system.legs.left.opacity = 1;
                    this.system.legs.right.opacity = 1;

                    Object.values(this.system.vessels).forEach(vessel => {
                        vessel.opacity = 1;
                        const type = vessel.type === 'artery' ? 'oxygenated' : 'deoxygenated';
                        this.system.spawnBloodCells(vessel, 8, type);
                    });
                }
            }
        ];
    }

    async exportAllScenes() {
        if (!fs.existsSync(this.outputDir)) {
            fs.mkdirSync(this.outputDir, { recursive: true });
            console.log(`Created output directory: ${this.outputDir}`);
        }

        console.log('\n🫀 Starting Circulatory System Export...\n');

        for (const scene of this.scenes) {
            await this.exportScene(scene);
        }

        console.log('\n✅ Export complete! All images saved to:', this.outputDir);
        console.log(`📁 Total scenes exported: ${this.scenes.length}\n`);
    }

    async exportScene(scene) {
        this.resetSystem();
        
        scene.setup();

        this.renderer.clear();
        this.system.draw(this.renderer);

        const filename = path.join(this.outputDir, `${scene.name}.png`);
        this.renderer.saveToFile(filename);

        console.log(`   📸 ${scene.name}.png - ${scene.description}`);
    }

    resetSystem() {
        Object.values(this.system.vessels).forEach(vessel => {
            vessel.opacity = 0;
            vessel.clearPlaques();
        });

        Object.values(this.system.organs).forEach(organ => {
            organ.opacity = 0;
        });

        Object.values(this.system.legs).forEach(leg => {
            leg.opacity = 0;
        });

        this.system.particleSystem.clear();
    }
}

// ==================== MAIN EXECUTION ====================
async function main() {
    console.log('====================================================================');
    console.log('  CIRCULATORY SYSTEM VISUALIZATION - PNG EXPORT');
    console.log('====================================================================\n');

    const renderer = new CanvasRenderer(CONFIG.canvas.width, CONFIG.canvas.height);
    const system = new CirculatorySystem();
    system.initialize(CONFIG.heart.centerX, CONFIG.heart.centerY);

    const exporter = new SceneExporter(system, renderer);
    await exporter.exportAllScenes();
}

// Run the export
main().catch(console.error);

