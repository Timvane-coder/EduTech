
import fs from 'fs';
import path from 'path';
import readline from 'readline';
import * as math from 'mathjs';

// Theme enum (copied from types.js)
const Theme = {
    Standard: "standard",
    Dark: "dark",
    Scientific: "scientific"
};

// ==================== SVG HELPER CLASS ====================

class SVGCanvas {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.elements = [];
        this.strokeStyle = 'rgb(0,0,0)';
        this.fillStyle = 'rgb(0,0,0)';
        this.lineWidth = 1;
        this.font = '12px Arial';
        this.textAlign = 'left';
        this.textBaseline = 'alphabetic';
        this._lineDash = [];
        this._currentPath = [];
        this._pathStarted = false;
    }

    // ---- state ----
    setLineDash(arr) { this._lineDash = arr; }

    // ---- path API ----
    beginPath() {
        this._currentPath = [];
        this._pathStarted = false;
    }

    moveTo(x, y) {
        this._currentPath.push(`M ${x} ${y}`);
        this._pathStarted = true;
    }

    lineTo(x, y) {
        if (!this._pathStarted) {
            this._currentPath.push(`M ${x} ${y}`);
            this._pathStarted = true;
        } else {
            this._currentPath.push(`L ${x} ${y}`);
        }
    }

    closePath() {
        this._currentPath.push('Z');
    }

    arc(cx, cy, r, startAngle, endAngle, anticlockwise = false) {
        if (Math.abs(endAngle - startAngle) >= 2 * Math.PI - 0.001) {
            // Full circle
            this._currentPath.push(
                `M ${cx + r} ${cy}`,
                `A ${r} ${r} 0 1 0 ${cx - r} ${cy}`,
                `A ${r} ${r} 0 1 0 ${cx + r} ${cy}`
            );
            this._pathStarted = true;
            return;
        }
        const x1 = cx + r * Math.cos(startAngle);
        const y1 = cy + r * Math.sin(startAngle);
        const x2 = cx + r * Math.cos(endAngle);
        const y2 = cy + r * Math.sin(endAngle);
        const largeArc = Math.abs(endAngle - startAngle) > Math.PI ? 1 : 0;
        const sweep = anticlockwise ? 0 : 1;
        if (!this._pathStarted) {
            this._currentPath.push(`M ${x1} ${y1}`);
            this._pathStarted = true;
        } else {
            this._currentPath.push(`L ${x1} ${y1}`);
        }
        this._currentPath.push(`A ${r} ${r} 0 ${largeArc} ${sweep} ${x2} ${y2}`);
    }

    stroke() {
        if (this._currentPath.length === 0) return;
        const dashAttr = this._lineDash.length
            ? `stroke-dasharray="${this._lineDash.join(',')}"` : '';
        this.elements.push(
            `<path d="${this._currentPath.join(' ')}" stroke="${this.strokeStyle}" stroke-width="${this.lineWidth}" fill="none" ${dashAttr}/>`
        );
    }

    fill() {
        if (this._currentPath.length === 0) return;
        this.elements.push(
            `<path d="${this._currentPath.join(' ')}" fill="${this.fillStyle}" stroke="none"/>`
        );
    }

    // ---- rect ----
    fillRect(x, y, w, h) {
        this.elements.push(
            `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${this.fillStyle}"/>`
        );
    }

    // ---- text ----
    fillText(text, x, y) {
        const escaped = String(text)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');

        const anchor = this.textAlign === 'center' ? 'middle'
            : this.textAlign === 'right' ? 'end' : 'start';

        const baseline = this.textBaseline === 'top' ? 'hanging'
            : this.textBaseline === 'middle' ? 'central'
            : 'auto';

        // Parse font size from font string, e.g. "bold 14px Arial"
        const sizeMatch = this.font.match(/(\d+)px/);
        const fontSize = sizeMatch ? parseInt(sizeMatch[1]) : 12;
        const isBold = this.font.includes('bold');
        const fontWeight = isBold ? 'bold' : 'normal';

        this.elements.push(
            `<text x="${x}" y="${y}" font-size="${fontSize}" font-family="Arial" font-weight="${fontWeight}" fill="${this.fillStyle}" text-anchor="${anchor}" dominant-baseline="${baseline}">${escaped}</text>`
        );
    }

    // ---- export ----
    toSVG() {
        return [
            `<svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.height}" viewBox="0 0 ${this.width} ${this.height}">`,
            ...this.elements,
            `</svg>`
        ].join('\n');
    }
}

// ==================== GRAPHING CALCULATOR ====================

class GraphingCalculator {
    constructor(options) {
        this.equations = [];
        this.plotHistory = [];
        this.colors = ["rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,165,0)", "rgb(128,0,128)"];
        this.colorIndex = 0;
        this.size = 480;
        this.gridSize = 20;
        this.xMin = -10;
        this.xMax = 10;
        this.yMin = -10;
        this.yMax = 10;
        this.backgroundColor = "rgb(255,255,255)";
        this.gridColor = "rgb(200,200,200)";
        this.axisColor = "rgb(0,0,0)";
        this.theme = Theme.Standard;
        this.showGrid = true;
        this.showAxes = true;
        if (options) {
            Object.assign(this, options);
        }
    }

    get width() { return this.size; }
    get height() { return this.size; }

    setTheme(theme) {
        this.theme = theme;
        if (theme === Theme.Standard) {
            this.backgroundColor = "rgb(255,255,255)";
            this.gridColor = "rgb(200,200,200)";
            this.axisColor = "rgb(0,0,0)";
        } else if (theme === Theme.Dark) {
            this.backgroundColor = "rgb(30,30,30)";
            this.gridColor = "rgb(70,70,70)";
            this.axisColor = "rgb(255,255,255)";
        } else if (theme === Theme.Scientific) {
            this.backgroundColor = "rgb(240,248,255)";
            this.gridColor = "rgb(176,196,222)";
            this.axisColor = "rgb(25,25,112)";
        }
    }

    addEquation(equation) {
        try {
            const cleanEquation = this.cleanEquation(equation);
            if (!cleanEquation) return false;
            this.equations.push(cleanEquation);
            const equationType = this.detectEquationType(cleanEquation);
            const color = this.colors[this.colorIndex % this.colors.length] ?? "rgb(0,0,0)";
            this.colorIndex++;
            this.plotHistory.push({ equation: cleanEquation, type: equationType, color });
            return true;
        } catch (error) {
            console.error("Error adding equation:", error);
            return false;
        }
    }

    clearEquations() {
        this.equations = [];
        this.plotHistory = [];
        this.colorIndex = 0;
    }

    removeLastEquation() {
        if (this.equations.length > 0) {
            this.equations.pop();
            this.plotHistory.pop();
            this.colorIndex = Math.max(0, this.colorIndex - 1);
        }
    }

    cleanEquation(equation) {
        let cleaned = equation.replace(/\s/g, '');
        cleaned = cleaned.replace(/\^/g, '**');
        cleaned = cleaned.replace(/ln/g, 'log');
        cleaned = cleaned.replace(/π/g, 'pi');
        cleaned = cleaned.replace(/∞/g, 'Infinity');
        return cleaned;
    }

    detectEquationType(equation) {
        if (equation.includes('sin') || equation.includes('cos') || equation.includes('tan')) return 'trigonometric';
        else if (equation.includes('log') || equation.includes('ln')) return 'logarithmic';
        else if (equation.includes('**') && equation.includes('x**2')) return 'quadratic';
        else if (equation.includes('**')) return 'exponential';
        else if (equation.includes('abs') || equation.includes('|')) return 'absolute';
        else if (equation.includes('sqrt')) return 'radical';
        else if (equation.includes('x') && !equation.includes('**')) return 'linear';
        return 'constant';
    }

    screenToGraph(screenX, screenY) {
        const graphX = this.xMin + (screenX / this.size) * (this.xMax - this.xMin);
        const graphY = this.yMax - (screenY / this.size) * (this.yMax - this.yMin);
        return [graphX, graphY];
    }

    graphToScreen(graphX, graphY) {
        const screenX = ((graphX - this.xMin) / (this.xMax - this.xMin)) * this.size;
        const screenY = ((this.yMax - graphY) / (this.yMax - this.yMin)) * this.size;
        return [screenX, screenY];
    }

    async drawGraph(ctx, equationLimit) {
        ctx.fillStyle = this.backgroundColor;
        ctx.fillRect(0, 0, this.width, this.height);
        if (this.showGrid) this.drawGrid(ctx);
        if (this.showAxes) this.drawAxes(ctx);
        const limit = equationLimit !== undefined
            ? Math.min(equationLimit, this.equations.length)
            : this.equations.length;
        for (let i = 0; i < limit; i++) {
            const equation = this.equations[i];
            const historyEntry = this.plotHistory[i];
            if (equation && historyEntry) {
                await this.plotEquation(ctx, equation, historyEntry.color);
            }
        }
        return ctx;
    }

    drawGrid(ctx) {
        ctx.strokeStyle = this.gridColor;
        ctx.lineWidth = 0.5;
        const xStep = (this.xMax - this.xMin) / 20;
        const yStep = (this.yMax - this.yMin) / 20;
        for (let x = this.xMin; x <= this.xMax; x += xStep) {
            const [screenX] = this.graphToScreen(x, 0);
            ctx.beginPath();
            ctx.moveTo(screenX, 0);
            ctx.lineTo(screenX, this.height);
            ctx.stroke();
        }
        for (let y = this.yMin; y <= this.yMax; y += yStep) {
            const [, screenY] = this.graphToScreen(0, y);
            ctx.beginPath();
            ctx.moveTo(0, screenY);
            ctx.lineTo(this.width, screenY);
            ctx.stroke();
        }
    }

    drawAxes(ctx) {
        ctx.strokeStyle = this.axisColor;
        ctx.lineWidth = 2;
        if (this.yMin <= 0 && this.yMax >= 0) {
            const [, yAxisScreenY] = this.graphToScreen(0, 0);
            ctx.beginPath();
            ctx.moveTo(0, yAxisScreenY);
            ctx.lineTo(this.width, yAxisScreenY);
            ctx.stroke();
        }
        if (this.xMin <= 0 && this.xMax >= 0) {
            const [xAxisScreenX] = this.graphToScreen(0, 0);
            ctx.beginPath();
            ctx.moveTo(xAxisScreenX, 0);
            ctx.lineTo(xAxisScreenX, this.height);
            ctx.stroke();
        }
        this.drawAxisLabels(ctx);
    }

    drawAxisLabels(ctx) {
        ctx.fillStyle = this.axisColor;
        ctx.font = "12px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        const xStep = Math.ceil((this.xMax - this.xMin) / 10);
        for (let x = Math.ceil(this.xMin / xStep) * xStep; x <= this.xMax; x += xStep) {
            if (x !== 0) {
                const [screenX, yAxisScreenY] = this.graphToScreen(x, 0);
                if (screenX >= 0 && screenX <= this.width) {
                    ctx.fillText(x.toString(), screenX, Math.min(yAxisScreenY + 5, this.height - 15));
                }
            }
        }
        ctx.textAlign = "right";
        ctx.textBaseline = "middle";
        const yStep = Math.ceil((this.yMax - this.yMin) / 10);
        for (let y = Math.ceil(this.yMin / yStep) * yStep; y <= this.yMax; y += yStep) {
            if (y !== 0) {
                const [xAxisScreenX, screenY] = this.graphToScreen(0, y);
                if (screenY >= 0 && screenY <= this.height) {
                    ctx.fillText(y.toString(), Math.max(xAxisScreenX - 5, 25), screenY);
                }
            }
        }
    }

    async plotEquation(ctx, equation, color) {
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        const step = (this.xMax - this.xMin) / this.size;
        let firstPoint = true;
        try {
            for (let x = this.xMin; x <= this.xMax; x += step) {
                const expression = equation.replace(/y\s*=\s*/, '').replace(/x/g, x.toString());
                try {
                    const y = math.evaluate(expression);
                    if (typeof y === 'number' && isFinite(y) && y >= this.yMin && y <= this.yMax) {
                        const [screenX, screenY] = this.graphToScreen(x, y);
                        if (firstPoint) { ctx.moveTo(screenX, screenY); firstPoint = false; }
                        else { ctx.lineTo(screenX, screenY); }
                    } else { firstPoint = true; }
                } catch { firstPoint = true; }
            }
            ctx.stroke();
        } catch (error) {
            console.error("Error plotting equation:", equation, error);
        }
    }

    // Returns SVG string instead of buffer
    async toSVG(options) {
        const ctx = new SVGCanvas(this.width, this.height);
        const equationLimit = options?.equation !== undefined ? options.equation : this.equations.length;
        await this.drawGraph(ctx, equationLimit);
        return ctx.toSVG();
    }

    // Keep buffer name for backward compat but now returns SVG string
    async buffer(mime, options) {
        return this.toSVG(options);
    }

    getEquations() { return [...this.equations]; }
    getPlotHistory() { return [...this.plotHistory]; }
}

// ==================== GRAPHING CALCULATOR GAME ====================

class GraphingCalculatorGame {
    constructor() {
        this.calculator = new GraphingCalculator({
            size: 480,
            theme: Theme.Standard,
            xMin: -10, xMax: 10,
            yMin: -10, yMax: 10,
            showGrid: true, showAxes: true
        });

        this.equationCounter = 0;
        this.triangleCounter = 0;
        this.vectorCounter = 0;
        this.matrixCounter = 0;
        this.circleCounter = 0;
        this.rectangleCounter = 0;
        this.squareCounter = 0;
        this.parallelogramCounter = 0;
        this.polygonCounter = 0;
        this.ellipseCounter = 0;
        this.quadrilateralCounter = 0;
        this.cylinderCounter = 0;
        this.trapezoidCounter = 0;
        this.sphereCounter = 0;
        this.coneCounter = 0;
        this.cubeCounter = 0;

        this.equationHistory = [];
        this.triangleHistory = [];
        this.vectorHistory = [];
        this.matrixHistory = [];
        this.circleHistory = [];
        this.rectangleHistory = [];
        this.squareHistory = [];
        this.parallelogramHistory = [];
        this.polygonHistory = [];
        this.ellipseHistory = [];
        this.quadrilateralHistory = [];
        this.cylinderHistory = [];
        this.trapezoidHistory = [];
        this.sphereHistory = [];
        this.coneHistory = [];
        this.cubeHistory = [];

        this.vectorSettings = {
            arrowSize: 12, arrowColor: '#ff6600', componentColor: '#0066ff',
            resultantColor: '#ff0000', showComponents: true, showMagnitude: true,
            showAngle: true, show3D: false
        };

        this.matrixSettings = {
            showGrid: true, showBasis: true, showTransformation: true,
            gridColor: '#e0e0e0', basisColor: '#0066ff', transformedColor: '#ff0000',
            pointColor: '#00aa00', showEigenvalues: true, showDeterminant: true
        };

        this.formulaDatabase = {
            "y=2x+3": "Linear function: slope = 2, y-intercept = 3",
            "y=x+1": "Linear function: slope = 1, y-intercept = 1",
            "y=-x+5": "Linear function: slope = -1, y-intercept = 5",
            "y=0.5x-2": "Linear function: slope = 0.5, y-intercept = -2",
            "y=3x": "Linear function through origin: slope = 3",
            "y=x**2": "Basic parabola opening upward",
            "y=-x**2": "Inverted parabola opening downward",
            "y=x**2+2x+1": "Quadratic function: y = (x+1)²",
            "y=2x**2-4x+1": "Quadratic function with vertex form transformation",
            "y=-0.5x**2+3x-2": "Downward opening parabola",
            "y=(x-1)**2": "Vertex form parabola: vertex at (1,0)",
            "y=2(x-3)**2+5": "Vertex form parabola: vertex at (3,5)",
            "y=x**3": "Basic cubic function",
            "y=x**3-3x**2+2x": "Cubic polynomial with local extrema",
            "y=x**4-2x**2": "Fourth-degree polynomial (W-shaped)",
            "y=2**x": "Exponential growth function, base 2",
            "y=0.5**x": "Exponential decay function",
            "y=e**x": "Natural exponential function",
            "y=e**(-x)": "Negative exponential decay",
            "y=2*e**(0.5x)": "Scaled exponential growth",
            "y=log(x)": "Natural logarithm function",
            "y=log(x,2)": "Logarithm base 2",
            "y=log(x+1)": "Shifted logarithm function",
            "y=-log(x)": "Reflected logarithm function",
            "y=sin(x)": "Sine wave function",
            "y=cos(x)": "Cosine wave function",
            "y=tan(x)": "Tangent function with vertical asymptotes",
            "y=2sin(x)": "Amplitude-scaled sine function",
            "y=sin(2x)": "Frequency-doubled sine function",
            "y=sin(x-pi/2)": "Phase-shifted sine function",
            "y=sin(x)+cos(x)": "Sum of sine and cosine",
            "y=asin(x)": "Arcsine function (inverse sine)",
            "y=acos(x)": "Arccosine function (inverse cosine)",
            "y=atan(x)": "Arctangent function (inverse tangent)",
            "y=abs(x)": "Absolute value function (V-shape)",
            "y=abs(x-2)": "Shifted absolute value function",
            "y=abs(x)+abs(x-4)": "Sum of two absolute value functions",
            "y=-abs(x)+3": "Inverted and shifted absolute value",
            "y=sqrt(x)": "Square root function",
            "y=sqrt(x-1)": "Shifted square root function",
            "y=-sqrt(x)": "Reflected square root function",
            "y=2sqrt(x+3)": "Scaled and shifted square root",
            "y=1/x": "Reciprocal function with vertical and horizontal asymptotes",
            "y=1/(x-1)": "Shifted reciprocal function",
            "y=(x+1)/(x-2)": "Rational function with oblique asymptote",
            "y=x**2/(x**2+1)": "Rational function approaching horizontal asymptote",
            "y=floor(x)": "Floor function (step function)",
            "y=ceil(x)": "Ceiling function",
            "y=sign(x)": "Sign function",
            "y=max(0,x)": "ReLU function (Rectified Linear Unit)",
            "x**2+y**2=25": "Circle with radius 5 centered at origin",
            "(x-2)**2+(y-1)**2=9": "Circle with radius 3 centered at (2,1)",
            "y=x*sin(x)": "Product of linear and sine functions",
            "y=e**(-x)*cos(x)": "Damped cosine function",
            "y=x**2*sin(1/x)": "Rapidly oscillating function near origin",
            "y=sin(x)/x": "Sinc function",
            "y=e**(-x**2/2)/sqrt(2*pi)": "Standard normal distribution",
            "y=x*e**(-x)": "Gamma distribution shape",
            "x=cos(t),y=sin(t)": "Unit circle (parametric)",
            "x=t,y=t**2": "Parabola (parametric form)",
            "r=1": "Unit circle (polar)",
            "r=1+cos(theta)": "Cardioid (polar)",
            "r=sin(2*theta)": "Rose curve (polar)"
        };
    }

    // ==================== SVG SAVE HELPER ====================

    _ensureTempDir() {
        if (!fs.existsSync('./temp')) fs.mkdirSync('./temp', { recursive: true });
    }

    _writeSVG(filepath, svgContent) {
        this._ensureTempDir();
        fs.writeFileSync(filepath, svgContent, 'utf8');
    }

    // ==================== FRESH CALCULATOR ====================

    createFreshCalculator() {
        return new GraphingCalculator({
            size: 480,
            theme: this.calculator.theme,
            xMin: this.calculator.xMin, xMax: this.calculator.xMax,
            yMin: this.calculator.yMin, yMax: this.calculator.yMax,
            showGrid: this.calculator.showGrid, showAxes: this.calculator.showAxes,
            backgroundColor: this.calculator.backgroundColor,
            gridColor: this.calculator.gridColor,
            axisColor: this.calculator.axisColor
        });
    }

    sanitizeFilename(name) {
        return name.replace(/[^a-z0-9_\-]/gi, '_');
    }

    getFormulaDescription(equation) {
        return this.formulaDatabase[equation] || 'Mathematical function';
    }

    // ==================== CIRCLE METHODS ====================

    parseCircleInput(input) {
        const pattern1 = /circle\s*center\(([^,]+),([^)]+)\)\s*radius\s*([^\s]+)/i;
        const match1 = input.match(pattern1);
        if (match1) return { center: { x: parseFloat(match1[1]), y: parseFloat(match1[2]) }, radius: parseFloat(match1[3]) };

        const pattern2 = /circle\s*\(([^,]+),([^)]+)\)\s*([^\s]+)/i;
        const match2 = input.match(pattern2);
        if (match2) return { center: { x: parseFloat(match2[1]), y: parseFloat(match2[2]) }, radius: parseFloat(match2[3]) };

        const pattern3 = /circle\s*([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+)/i;
        const match3 = input.match(pattern3);
        if (match3) return { center: { x: parseFloat(match3[1]), y: parseFloat(match3[2]) }, radius: parseFloat(match3[3]) };

        const pattern4 = /circle\s*diameter\s*([^\s]+)\s*at\s*\(([^,]+),([^)]+)\)/i;
        const match4 = input.match(pattern4);
        if (match4) return { center: { x: parseFloat(match4[2]), y: parseFloat(match4[3]) }, radius: parseFloat(match4[1]) / 2, isDiameter: true };

        return null;
    }

    calculateCircleProperties(center, radius) {
        return {
            center, radius,
            diameter: 2 * radius,
            area: Math.PI * radius * radius,
            circumference: 2 * Math.PI * radius
        };
    }

    addCircle(input) {
        const circleData = this.parseCircleInput(input);
        if (!circleData) {
            console.log("❌ Invalid circle format!");
            console.log("💡 Examples:\n  • circle center(0,0) radius 5\n  • circle (2,3) 4\n  • circle 0,0,3\n  • circle diameter 10 at (1,1)");
            return false;
        }
        const { center, radius } = circleData;
        if (isNaN(center.x) || isNaN(center.y) || isNaN(radius) || radius <= 0) {
            console.log("❌ Invalid values! Radius must be positive.");
            return false;
        }
        const circleProps = this.calculateCircleProperties(center, radius);
        this.circleCounter++;
        this.circleHistory.push({ id: this.circleCounter, input, properties: circleProps });
        this.displayCircleAnalysis(circleProps);
        this.saveIndividualCircle(circleProps);
        return true;
    }

    displayCircleAnalysis(props) {
        const { center, radius, diameter, area, circumference } = props;
        console.log(`\n⭕ CIRCLE ANALYSIS`);
        console.log("=".repeat(50));
        console.log(`📍 Center: (${center.x}, ${center.y})`);
        console.log(`\n📏 Measurements:`);
        console.log(`   Radius: ${radius.toFixed(3)} units`);
        console.log(`   Diameter: ${diameter.toFixed(3)} units`);
        console.log(`   Area: ${area.toFixed(3)} square units`);
        console.log(`   Circumference: ${circumference.toFixed(3)} units`);
        console.log(`\n📊 Properties:`);
        console.log(`   Area formula: πr² = π(${radius.toFixed(2)})²`);
        console.log(`   Circumference formula: 2πr = 2π(${radius.toFixed(2)})`);
        console.log("=".repeat(50));
    }

    async saveIndividualCircle(circleProps) {
        try {
            const svgContent = await this.createCircleSVG(circleProps);
            const { center, radius } = circleProps;
            const filename = `circle_${String(this.circleCounter).padStart(3, '0')}_center${center.x}_${center.y}_r${radius.toFixed(1)}.svg`;
            const filepath = path.join('./temp', filename);
            this._writeSVG(filepath, svgContent);
            console.log(`💾 Circle SVG saved: ${filename}`);
        } catch (error) {
            console.error("❌ Error saving circle SVG:", error);
        }
    }

    async createCircleSVG(circleProps) {
        const ctx = new SVGCanvas(this.calculator.width, this.calculator.height);
        await this.calculator.drawGraph(ctx);
        this.drawCircle(ctx, circleProps);
        return ctx.toSVG();
    }

    drawCircle(ctx, circleProps) {
        const { center, radius, area, circumference } = circleProps;
        const screenCenter = this.calculator.graphToScreen(center.x, center.y);
        const screenRadius = Math.abs(this.calculator.graphToScreen(radius, 0)[0] - this.calculator.graphToScreen(0, 0)[0]);

        ctx.strokeStyle = '#ff0000';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(screenCenter[0], screenCenter[1], screenRadius, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.fillStyle = '#0066ff';
        ctx.beginPath();
        ctx.arc(screenCenter[0], screenCenter[1], 6, 0, 2 * Math.PI);
        ctx.fill();

        ctx.strokeStyle = '#00aa00';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(screenCenter[0], screenCenter[1]);
        ctx.lineTo(screenCenter[0] + screenRadius, screenCenter[1]);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = 'black';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`Center (${center.x}, ${center.y})`, screenCenter[0], screenCenter[1] - 15);
        ctx.fillText(`r = ${radius.toFixed(2)}`, screenCenter[0] + screenRadius / 2, screenCenter[1] - 10);

        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(`Circle`, 10, 25);

        ctx.font = '12px Arial';
        const props = [
            `Center: (${center.x}, ${center.y})`,
            `Radius: ${radius.toFixed(2)} units`,
            `Area: ${area.toFixed(2)} sq units`,
            `Circumference: ${circumference.toFixed(2)} units`
        ];
        props.forEach((prop, index) => ctx.fillText(prop, 10, 50 + index * 15));
    }

    // ==================== TRIANGLE METHODS ====================

    parseTriangleInput(input) {
        const pattern1 = /triangle\s*a\(([^,]+),([^)]+)\)\s*b\(([^,]+),([^)]+)\)\s*c\(([^,]+),([^)]+)\)/i;
        const match1 = input.match(pattern1);
        if (match1) return {
            A: { x: parseFloat(match1[1]), y: parseFloat(match1[2]) },
            B: { x: parseFloat(match1[3]), y: parseFloat(match1[4]) },
            C: { x: parseFloat(match1[5]), y: parseFloat(match1[6]) }
        };

        const pattern2 = /triangle\s*\(([^,]+),([^)]+)\)\s*\(([^,]+),([^)]+)\)\s*\(([^,]+),([^)]+)\)/i;
        const match2 = input.match(pattern2);
        if (match2) return {
            A: { x: parseFloat(match2[1]), y: parseFloat(match2[2]) },
            B: { x: parseFloat(match2[3]), y: parseFloat(match2[4]) },
            C: { x: parseFloat(match2[5]), y: parseFloat(match2[6]) }
        };

        const pattern3 = /triangle\s*([-+]?\d*\.?\d+),([-+]?\d*\.?\d+)\s+([-+]?\d*\.?\d+),([-+]?\d*\.?\d+)\s+([-+]?\d*\.?\d+),([-+]?\d*\.?\d+)/i;
        const match3 = input.match(pattern3);
        if (match3) return {
            A: { x: parseFloat(match3[1]), y: parseFloat(match3[2]) },
            B: { x: parseFloat(match3[3]), y: parseFloat(match3[4]) },
            C: { x: parseFloat(match3[5]), y: parseFloat(match3[6]) }
        };

        return null;
    }

    areCollinear(A, B, C) {
        const crossProduct = (B.x - A.x) * (C.y - A.y) - (B.y - A.y) * (C.x - A.x);
        return Math.abs(crossProduct) < 1e-10;
    }

    calculateDistance(p1, p2) {
        return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
    }

    calculateAngle(a, b, c) {
        const cosAngle = (a * a + b * b - c * c) / (2 * a * b);
        return Math.acos(Math.max(-1, Math.min(1, cosAngle))) * (180 / Math.PI);
    }

    classifyBySides(sideA, sideB, sideC) {
        const sides = [sideA, sideB, sideC].sort((a, b) => a - b);
        const tol = 1e-10;
        if (Math.abs(sides[0] - sides[1]) < tol && Math.abs(sides[1] - sides[2]) < tol) return "Equilateral";
        if (Math.abs(sides[0] - sides[1]) < tol || Math.abs(sides[1] - sides[2]) < tol || Math.abs(sides[0] - sides[2]) < tol) return "Isosceles";
        return "Scalene";
    }

    classifyByAngles(angleA, angleB, angleC) {
        const angles = [angleA, angleB, angleC];
        if (angles.some(a => Math.abs(a - 90) < 1)) return "Right";
        if (angles.every(a => a < 90)) return "Acute";
        return "Obtuse";
    }

    calculateTriangleProperties(A, B, C) {
        const sideAB = this.calculateDistance(A, B);
        const sideBC = this.calculateDistance(B, C);
        const sideCA = this.calculateDistance(C, A);
        const angleA = this.calculateAngle(sideBC, sideCA, sideAB);
        const angleB = this.calculateAngle(sideCA, sideAB, sideBC);
        const angleC = this.calculateAngle(sideAB, sideBC, sideCA);
        const area = 0.5 * Math.abs((B.x - A.x) * (C.y - A.y) - (C.x - A.x) * (B.y - A.y));
        const perimeter = sideAB + sideBC + sideCA;
        const sideClassification = this.classifyBySides(sideAB, sideBC, sideCA);
        const angleClassification = this.classifyByAngles(angleA, angleB, angleC);
        return {
            vertices: { A, B, C },
            sides: { AB: sideAB, BC: sideBC, CA: sideCA },
            angles: { A: angleA, B: angleB, C: angleC },
            area, perimeter,
            classifications: { sides: sideClassification, angles: angleClassification, full: `${sideClassification} ${angleClassification}` }
        };
    }

    addTriangle(input) {
        const points = this.parseTriangleInput(input);
        if (!points) {
            console.log("❌ Invalid triangle format!\n💡 Examples:\n  • triangle A(0,0) B(4,0) C(2,3)\n  • triangle (0,0) (4,0) (2,3)\n  • triangle 0,0 4,0 2,3");
            return false;
        }
        const { A, B, C } = points;
        if ([A.x, A.y, B.x, B.y, C.x, C.y].some(val => isNaN(val))) {
            console.log("❌ Invalid coordinates! Please use numbers only.");
            return false;
        }
        if (this.areCollinear(A, B, C)) {
            console.log("❌ Points are collinear! Cannot form a triangle.");
            return false;
        }
        const triangleProps = this.calculateTriangleProperties(A, B, C);
        this.triangleCounter++;
        this.triangleHistory.push({ id: this.triangleCounter, input, properties: triangleProps });
        this.displayTriangleAnalysis(triangleProps);
        this.saveIndividualTriangle(triangleProps);
        return true;
    }

    displayTriangleAnalysis(props) {
        const { vertices, sides, angles, area, perimeter, classifications } = props;
        console.log(`\n🔺 TRIANGLE ANALYSIS`);
        console.log("=".repeat(50));
        console.log(`📍 Vertices:\n   A: (${vertices.A.x}, ${vertices.A.y})\n   B: (${vertices.B.x}, ${vertices.B.y})\n   C: (${vertices.C.x}, ${vertices.C.y})`);
        console.log(`\n📏 Side Lengths:\n   AB = ${sides.AB.toFixed(3)}\n   BC = ${sides.BC.toFixed(3)}\n   CA = ${sides.CA.toFixed(3)}`);
        console.log(`\n📐 Angles:\n   ∠A = ${angles.A.toFixed(1)}°\n   ∠B = ${angles.B.toFixed(1)}°\n   ∠C = ${angles.C.toFixed(1)}°\n   Sum = ${(angles.A + angles.B + angles.C).toFixed(1)}° ✓`);
        console.log(`\n📊 Properties:\n   Area: ${area.toFixed(3)} sq units\n   Perimeter: ${perimeter.toFixed(3)} units`);
        console.log(`\n🏷️ Classification:\n   By sides: ${classifications.sides} Triangle\n   By angles: ${classifications.angles} Triangle\n   Overall: ${classifications.full} Triangle`);
        this.displaySpecialProperties(props);
        console.log("=".repeat(50));
    }

    displaySpecialProperties(props) {
        const { sides, angles, classifications } = props;
        const specialProps = [];
        if (classifications.angles === "Right") {
            const sortedSides = Object.values(sides).sort((a, b) => a - b);
            const [a, b, c] = sortedSides;
            if (Math.abs(c * c - (a * a + b * b)) < 0.001) {
                specialProps.push(`✓ Pythagorean theorem: ${a.toFixed(2)}² + ${b.toFixed(2)}² = ${c.toFixed(2)}²`);
            }
            if (Math.abs(a - b) < 0.001 && Math.abs(c - a * Math.sqrt(2)) < 0.001) specialProps.push("🔺 Special: 45-45-90 Triangle");
            if (Math.abs(c / a - 2) < 0.001 && Math.abs(b / a - Math.sqrt(3)) < 0.001) specialProps.push("🔺 Special: 30-60-90 Triangle");
        }
        if (classifications.sides === "Equilateral") {
            specialProps.push("✓ All angles are 60°");
            specialProps.push("✓ All sides are equal");
        }
        if (specialProps.length > 0) {
            console.log(`\n⭐ Special Properties:`);
            specialProps.forEach(p => console.log(`   ${p}`));
        }
    }

    async saveIndividualTriangle(triangleProps) {
        try {
            const svgContent = await this.createTriangleSVG(triangleProps);
            const { vertices } = triangleProps;
            const filename = `triangle_${String(this.triangleCounter).padStart(3, '0')}_A${vertices.A.x}_${vertices.A.y}_B${vertices.B.x}_${vertices.B.y}_C${vertices.C.x}_${vertices.C.y}.svg`;
            const filepath = path.join('./temp', filename);
            this._writeSVG(filepath, svgContent);
            console.log(`💾 Triangle SVG saved: ${filename}`);
        } catch (error) {
            console.error("❌ Error saving triangle SVG:", error);
        }
    }

    async createTriangleSVG(triangleProps) {
        const ctx = new SVGCanvas(this.calculator.width, this.calculator.height);
        await this.calculator.drawGraph(ctx);
        this.drawTriangle(ctx, triangleProps);
        return ctx.toSVG();
    }

    drawTriangle(ctx, triangleProps) {
        const { vertices, sides, angles, classifications } = triangleProps;
        const { A, B, C } = vertices;
        const screenA = this.calculator.graphToScreen(A.x, A.y);
        const screenB = this.calculator.graphToScreen(B.x, B.y);
        const screenC = this.calculator.graphToScreen(C.x, C.y);

        ctx.strokeStyle = '#ff0000';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(screenA[0], screenA[1]);
        ctx.lineTo(screenB[0], screenB[1]);
        ctx.lineTo(screenC[0], screenC[1]);
        ctx.closePath();
        ctx.stroke();

        const drawVertex = (screen, label, color) => {
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(screen[0], screen[1], 6, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillStyle = 'black';
            ctx.font = 'bold 14px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(label, screen[0], screen[1] - 15);
        };

        drawVertex(screenA, `A(${A.x}, ${A.y})`, '#ff0000');
        drawVertex(screenB, `B(${B.x}, ${B.y})`, '#00aa00');
        drawVertex(screenC, `C(${C.x}, ${C.y})`, '#0066ff');

        this.drawSideLabels(ctx, screenA, screenB, screenC, sides);
        this.drawAngleLabels(ctx, screenA, screenB, screenC, angles);

        ctx.fillStyle = 'black';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(`${classifications.full} Triangle`, 10, 25);

        ctx.font = '12px Arial';
        [
            `Area: ${triangleProps.area.toFixed(2)} sq units`,
            `Perimeter: ${triangleProps.perimeter.toFixed(2)} units`,
            `Sides: AB=${sides.AB.toFixed(2)}, BC=${sides.BC.toFixed(2)}, CA=${sides.CA.toFixed(2)}`,
            `Angles: ∠A=${angles.A.toFixed(1)}°, ∠B=${angles.B.toFixed(1)}°, ∠C=${angles.C.toFixed(1)}°`
        ].forEach((prop, i) => ctx.fillText(prop, 10, 50 + i * 15));
    }

    drawSideLabels(ctx, screenA, screenB, screenC, sides) {
        const drawLabel = (s1, s2, length, label) => {
            const midX = (s1[0] + s2[0]) / 2;
            const midY = (s1[1] + s2[1]) / 2;
            ctx.fillStyle = '#666666';
            ctx.font = '11px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(`${label}: ${length.toFixed(2)}`, midX, midY - 5);
        };
        drawLabel(screenA, screenB, sides.AB, 'AB');
        drawLabel(screenB, screenC, sides.BC, 'BC');
        drawLabel(screenC, screenA, sides.CA, 'CA');
    }

    drawAngleLabels(ctx, screenA, screenB, screenC, angles) {
        ctx.fillStyle = '#333333';
        ctx.font = '10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`${angles.A.toFixed(1)}°`, screenA[0] + 15, screenA[1] + 5);
        ctx.fillText(`${angles.B.toFixed(1)}°`, screenB[0] + 15, screenB[1] + 5);
        ctx.fillText(`${angles.C.toFixed(1)}°`, screenC[0] + 15, screenC[1] + 5);
    }

    // ==================== EQUATION METHODS ====================

    parseLinear(equation) {
        const cleanEq = equation.replace(/\s/g, '').replace('y=', '');
        const patterns = [
            /^([+-]?\d*\.?\d*)\*?x([+-]\d+\.?\d*)?$/,
            /^x([+-]\d+\.?\d*)?$/,
            /^([+-]?\d*\.?\d*)\*?x$/,
            /^x$/,
            /^([+-]?\d+\.?\d*)$/
        ];
        for (let pattern of patterns) {
            const match = cleanEq.match(pattern);
            if (match) {
                let slope, intercept;
                if (pattern.source.includes('x')) {
                    slope = match[1] !== undefined ? match[1] : '1';
                    if (slope === '' || slope === '+') slope = '1';
                    if (slope === '-') slope = '-1';
                    slope = parseFloat(slope);
                    intercept = match[2] ? parseFloat(match[2]) : 0;
                } else {
                    slope = 0;
                    intercept = parseFloat(match[1]);
                }
                return { slope, intercept, isLinear: true };
            }
        }
        return { isLinear: false };
    }

    parseQuadratic(equation) {
        const cleanEq = equation.replace(/\s/g, '').replace('y=', '');
        const vertexPattern = /^([+-]?\d*\.?\d*)\(x([+-]\d+\.?\d*)\)\*\*2([+-]\d+\.?\d*)?$/;
        const vertexMatch = cleanEq.match(vertexPattern);
        if (vertexMatch) {
            let a = vertexMatch[1] || '1';
            if (a === '' || a === '+') a = '1';
            if (a === '-') a = '-1';
            a = parseFloat(a);
            const h = -parseFloat(vertexMatch[2]);
            const k = vertexMatch[3] ? parseFloat(vertexMatch[3]) : 0;
            return { a, h, k, isQuadratic: true, form: 'vertex' };
        }
        const standardPatterns = [
            /^([+-]?\d*\.?\d*)\*?x\*\*2([+-]\d*\.?\d*)\*?x([+-]\d+\.?\d*)?$/,
            /^([+-]?\d*\.?\d*)\*?x\*\*2([+-]\d+\.?\d*)?$/,
            /^x\*\*2([+-]\d*\.?\d*)\*?x([+-]\d+\.?\d*)?$/,
            /^x\*\*2([+-]\d+\.?\d*)?$/,
            /^x\*\*2$/
        ];
        for (let pattern of standardPatterns) {
            const match = cleanEq.match(pattern);
            if (match) {
                let a, b, c;
                if (pattern.source === '^x\\*\\*2$') { a = 1; b = 0; c = 0; }
                else if (pattern.source.includes('bx')) {
                    a = match[1] || '1'; if (a === '' || a === '+') a = '1'; if (a === '-') a = '-1'; a = parseFloat(a);
                    b = match[2] || '0'; if (b === '+' || b === '') b = '1'; if (b === '-') b = '-1'; b = parseFloat(b);
                    c = match[3] ? parseFloat(match[3]) : 0;
                } else {
                    if (match[1] !== undefined) {
                        a = match[1] || '1'; if (a === '' || a === '+') a = '1'; if (a === '-') a = '-1'; a = parseFloat(a);
                        b = 0; c = match[2] ? parseFloat(match[2]) : 0;
                    } else { a = 1; b = 0; c = match[1] ? parseFloat(match[1]) : 0; }
                }
                const h = b !== 0 ? -b / (2 * a) : 0;
                const k = c - (b * b) / (4 * a);
                return { a, b, c, h, k, isQuadratic: true, form: 'standard' };
            }
        }
        return { isQuadratic: false };
    }

    parseCubic(equation) {
        const cleanEq = equation.replace(/\s/g, '').replace('y=', '');
        const pattern = /^([+-]?\d*\.?\d*)\*?x\*\*3([+-]\d*\.?\d*)\*?x\*\*2([+-]\d*\.?\d*)\*?x([+-]\d+\.?\d*)?$/;
        const match = cleanEq.match(pattern);
        if (match) {
            let a = match[1] || '1'; if (a === '' || a === '+') a = '1'; if (a === '-') a = '-1'; a = parseFloat(a);
            let b = match[2] || '0'; if (b === '+') b = '1'; if (b === '-') b = '-1'; b = parseFloat(b);
            let c = match[3] || '0'; if (c === '+') c = '1'; if (c === '-') c = '-1'; c = parseFloat(c);
            let d = match[4] ? parseFloat(match[4]) : 0;
            return { a, b, c, d, isCubic: true };
        }
        const simple = cleanEq.match(/^([+-]?\d*\.?\d*)\*?x\*\*3$/);
        if (simple) {
            let a = simple[1] || '1'; if (a === '' || a === '+') a = '1'; if (a === '-') a = '-1';
            return { a: parseFloat(a), b: 0, c: 0, d: 0, isCubic: true };
        }
        return { isCubic: false };
    }

    parseExponential(equation) {
        const cleanEq = equation.replace(/\s/g, '').replace('y=', '');
        const patterns = [
            /^([+-]?\d*\.?\d*)\*?(\d*\.?\d+)\*\*x$/,
            /^([+-]?\d*\.?\d*)\*?e\*\*x$/,
            /^([+-]?\d*\.?\d*)\*?e\*\*\(([+-]?\d*\.?\d*)x\)$/,
            /^([+-]?\d*\.?\d*)\*?e\*\*\(([+-]?\d*\.?\d*)x([+-]\d+\.?\d*)\)$/,
        ];
        for (let i = 0; i < patterns.length; i++) {
            const match = cleanEq.match(patterns[i]);
            if (match) {
                let coefficient = match[1] || '1';
                if (coefficient === '' || coefficient === '+') coefficient = '1';
                if (coefficient === '-') coefficient = '-1';
                let base = Math.E, exponentCoeff = 1, exponentShift = 0;
                if (i === 0) base = parseFloat(match[2]);
                else if (match[2]) exponentCoeff = parseFloat(match[2]);
                if (match[3]) exponentShift = parseFloat(match[3]);
                return { coefficient: parseFloat(coefficient), base, exponentCoeff, exponentShift, isExponential: true };
            }
        }
        return { isExponential: false };
    }

    parseLogarithmic(equation) {
        const cleanEq = equation.replace(/\s/g, '').replace('y=', '');
        const patterns = [
            /^([+-]?\d*\.?\d*)\*?log\(x\)$/,
            /^([+-]?\d*\.?\d*)\*?log\(x,(\d+)\)$/,
            /^([+-]?\d*\.?\d*)\*?log\(x([+-]\d+\.?\d*)\)$/,
            /^([+-]?\d*\.?\d*)\*?log\(([+-]?\d*\.?\d*)x\)$/,
        ];
        for (let i = 0; i < patterns.length; i++) {
            const match = cleanEq.match(patterns[i]);
            if (match) {
                let coefficient = match[1] || '1';
                if (coefficient === '' || coefficient === '+') coefficient = '1';
                if (coefficient === '-') coefficient = '-1';
                let base = Math.E, xCoeff = 1, xShift = 0;
                if (i === 1) base = parseFloat(match[2]);
                else if (i === 2) xShift = parseFloat(match[2]);
                else if (i === 3) xCoeff = parseFloat(match[2]);
                return { coefficient: parseFloat(coefficient), base, xCoeff, xShift, isLogarithmic: true };
            }
        }
        return { isLogarithmic: false };
    }

    parseTrigonometric(equation) {
        const cleanEq = equation.replace(/\s/g, '').replace('y=', '');
        const funcPattern = /(sin|cos|tan|asin|acos|atan)/;
        const match = cleanEq.match(funcPattern);
        if (!match) return { isTrigonometric: false };
        const func = match[1];
        const fullPattern = /^([+-]?\d*\.?\d*)\*?(sin|cos|tan|asin|acos|atan)\(([+-]?\d*\.?\d*)x?([+-]\d*\.?\d*)?\)([+-]\d+\.?\d*)?$/;
        const fullMatch = cleanEq.match(fullPattern);
        if (fullMatch) {
            let amplitude = fullMatch[1] || '1'; if (amplitude === '' || amplitude === '+') amplitude = '1'; if (amplitude === '-') amplitude = '-1';
            let frequency = fullMatch[3] || '1'; if (frequency === '' || frequency === '+') frequency = '1'; if (frequency === '-') frequency = '-1';
            return { function: func, amplitude: parseFloat(amplitude), frequency: parseFloat(frequency), phase: fullMatch[4] ? parseFloat(fullMatch[4]) : 0, verticalShift: fullMatch[5] ? parseFloat(fullMatch[5]) : 0, isTrigonometric: true };
        }
        return { isTrigonometric: false };
    }

    parseAbsoluteValue(equation) {
        const cleanEq = equation.replace(/\s/g, '').replace('y=', '');
        const pattern = /^([+-]?\d*\.?\d*)\*?abs\(([+-]?\d*\.?\d*)x([+-]\d+\.?\d*)?\)([+-]\d+\.?\d*)?$/;
        const match = cleanEq.match(pattern);
        if (match) {
            let coefficient = match[1] || '1'; if (coefficient === '' || coefficient === '+') coefficient = '1'; if (coefficient === '-') coefficient = '-1';
            let xCoeff = match[2] || '1'; if (xCoeff === '' || xCoeff === '+') xCoeff = '1'; if (xCoeff === '-') xCoeff = '-1';
            return { coefficient: parseFloat(coefficient), xCoeff: parseFloat(xCoeff), xShift: match[3] ? parseFloat(match[3]) : 0, verticalShift: match[4] ? parseFloat(match[4]) : 0, isAbsoluteValue: true };
        }
        if (cleanEq.includes('abs') && cleanEq.split('abs').length > 2) return { isAbsoluteValue: true, isMultiple: true };
        return { isAbsoluteValue: false };
    }

    parseSquareRoot(equation) {
        const cleanEq = equation.replace(/\s/g, '').replace('y=', '');
        const pattern = /^([+-]?\d*\.?\d*)\*?sqrt\(([+-]?\d*\.?\d*)x([+-]\d+\.?\d*)?\)([+-]\d+\.?\d*)?$/;
        const match = cleanEq.match(pattern);
        if (match) {
            let coefficient = match[1] || '1'; if (coefficient === '' || coefficient === '+') coefficient = '1'; if (coefficient === '-') coefficient = '-1';
            let xCoeff = match[2] || '1'; if (xCoeff === '' || xCoeff === '+') xCoeff = '1'; if (xCoeff === '-') xCoeff = '-1';
            return { coefficient: parseFloat(coefficient), xCoeff: parseFloat(xCoeff), xShift: match[3] ? parseFloat(match[3]) : 0, verticalShift: match[4] ? parseFloat(match[4]) : 0, isSquareRoot: true };
        }
        return { isSquareRoot: false };
    }

    parseRational(equation) {
        const cleanEq = equation.replace(/\s/g, '').replace('y=', '');
        if (!cleanEq.includes('/')) return { isRational: false };
        const parts = cleanEq.split('/');
        if (parts.length === 2) return { numerator: parts[0], denominator: parts[1], isRational: true };
        return { isRational: false };
    }

    parseSpecialFunction(equation) {
        const cleanEq = equation.replace(/\s/g, '').replace('y=', '');
        for (let func of ['floor', 'ceil', 'sign', 'max', 'min']) {
            if (cleanEq.includes(func)) return { function: func, isSpecial: true };
        }
        return { isSpecial: false };
    }

    // ---- showXxxPoints methods (unchanged — console only) ----

    showLinearPoints(equation, { slope, intercept }) {
        console.log(`📊 Linear Function Analysis:\n   Slope (m) = ${slope}\n   Y-intercept (c) = ${intercept}`);
        console.log(`   Type: ${slope === 0 ? 'Horizontal line' : slope > 0 ? 'Increasing line' : 'Decreasing line'}`);
        console.log(`📍 Key Points:`);
        [-3, -2, -1, 0, 1, 2, 3].forEach(x => {
            const y = slope * x + intercept;
            if (y >= this.calculator.yMin && y <= this.calculator.yMax && x >= this.calculator.xMin && x <= this.calculator.xMax)
                console.log(`   (${x}, ${y})${x === 0 ? ' ← Y-intercept' : ''}`);
        });
        console.log(`🎯 Y-intercept: (0, ${intercept})`);
        if (slope !== 0) {
            const xi = -intercept / slope;
            if (xi >= this.calculator.xMin && xi <= this.calculator.xMax) console.log(`🎯 X-intercept: (${xi.toFixed(2)}, 0)`);
        }
    }

    showQuadraticPoints(equation, { a, h, k, form }) {
        console.log(`📊 Quadratic Function Analysis:\n   Form: ${form === 'vertex' ? 'Vertex' : 'Standard'}\n   a = ${a} (opens ${a > 0 ? 'upward' : 'downward'})\n🎯 Vertex: (${h}, ${k})\n📏 Axis of symmetry: x = ${h}`);
        console.log(`📍 Key Points:`);
        [-2, -1, 0, 1, 2].forEach(offset => {
            const x = h + offset, y = a * (x - h) ** 2 + k;
            if (x >= this.calculator.xMin && x <= this.calculator.xMax && y >= this.calculator.yMin && y <= this.calculator.yMax)
                console.log(`   (${x}, ${y})${offset === 0 ? ' ← Vertex' : ''}`);
        });
        console.log(`📈 Range: y ${a > 0 ? '≥' : '≤'} ${k} (${a > 0 ? 'minimum' : 'maximum'}: ${k})`);
    }

    showCubicPoints(equation, { a, b, c, d }) {
        console.log(`📊 Cubic Function Analysis:\n   ${a}x³ + ${b}x² + ${c}x + ${d}\n   Leading coefficient: ${a}`);
        const disc = 4 * b * b - 12 * a * c;
        if (disc > 0) {
            const x1 = (-2 * b + Math.sqrt(disc)) / (6 * a), x2 = (-2 * b - Math.sqrt(disc)) / (6 * a);
            console.log(`🔍 Critical Points: (${x1.toFixed(3)}, ${(a*x1**3+b*x1**2+c*x1+d).toFixed(3)}), (${x2.toFixed(3)}, ${(a*x2**3+b*x2**2+c*x2+d).toFixed(3)})`);
        }
        console.log(`🎯 Y-intercept: (0, ${d})`);
        console.log(`📍 Key Points:`);
        [-2, -1, 0, 1, 2].forEach(x => {
            const y = a * x ** 3 + b * x ** 2 + c * x + d;
            if (y >= this.calculator.yMin && y <= this.calculator.yMax) console.log(`   (${x}, ${y.toFixed(3)})`);
        });
    }

    showExponentialPoints(equation, { coefficient, base, exponentCoeff, exponentShift }) {
        console.log(`📊 Exponential Function Analysis:\n   Coefficient: ${coefficient}\n   Base: ${base === Math.E ? 'e' : base}\n   ${coefficient * exponentCoeff > 0 ? 'Growth' : 'Decay'}`);
        const yInt = coefficient * Math.pow(base, exponentShift);
        console.log(`🎯 Y-intercept: (0, ${yInt.toFixed(4)})`);
        console.log(`📍 Key Points:`);
        [-2, -1, 0, 1, 2].forEach(x => {
            const y = coefficient * Math.pow(base, exponentCoeff * x + exponentShift);
            if (y >= this.calculator.yMin && y <= this.calculator.yMax && isFinite(y)) console.log(`   (${x}, ${y.toFixed(4)})`);
        });
    }

    showLogarithmicPoints(equation, { coefficient, base, xCoeff, xShift }) {
        const domainStart = -xShift / xCoeff;
        console.log(`📊 Logarithmic Function:\n   Domain: x > ${domainStart.toFixed(3)}\n   Vertical asymptote: x = ${domainStart.toFixed(3)}`);
        const xi = (Math.pow(base, 0) - xShift) / xCoeff;
        if (xi > domainStart) console.log(`🎯 X-intercept: (${xi.toFixed(4)}, 0)`);
        console.log(`📍 Key Points:`);
        [0.1, 0.5, 1, 2, 5, 10].map(v => v + domainStart + 0.1).forEach(x => {
            if (x > domainStart) {
                const logArg = xCoeff * x + xShift;
                if (logArg > 0) {
                    const y = coefficient * (Math.log(logArg) / Math.log(base));
                    if (y >= this.calculator.yMin && y <= this.calculator.yMax && isFinite(y)) console.log(`   (${x.toFixed(3)}, ${y.toFixed(4)})`);
                }
            }
        });
    }

    showTrigonometricPoints(equation, { function: func, amplitude, frequency, phase, verticalShift }) {
        const period = (func === 'tan' ? Math.PI : 2 * Math.PI) / Math.abs(frequency);
        console.log(`📊 Trig Function: ${func}\n   Amplitude: ${amplitude}, Frequency: ${frequency}, Period: ${period.toFixed(4)}`);
        if (func === 'sin' || func === 'cos') console.log(`📏 Range: [${verticalShift - Math.abs(amplitude)}, ${verticalShift + Math.abs(amplitude)}]`);
    }

    showAbsoluteValuePoints(equation, info) {
        if (info.isMultiple) { console.log(`📊 Multiple Absolute Value: ${equation}`); return; }
        const { coefficient, xCoeff, xShift, verticalShift } = info;
        const vertexX = -xShift / xCoeff;
        console.log(`📊 Absolute Value:\n🎯 Vertex: (${vertexX.toFixed(3)}, ${verticalShift})\n   Slopes: ±${coefficient * xCoeff}`);
        [-2, -1, 0, 1, 2].forEach(off => {
            const x = vertexX + off, y = coefficient * Math.abs(xCoeff * x + xShift) + verticalShift;
            if (y >= this.calculator.yMin && y <= this.calculator.yMax) console.log(`   (${x.toFixed(3)}, ${y.toFixed(3)})${off === 0 ? ' ← Vertex' : ''}`);
        });
    }

    showSquareRootPoints(equation, { coefficient, xCoeff, xShift, verticalShift }) {
        const startX = -xShift / xCoeff;
        console.log(`📊 Square Root:\n🎯 Start: (${startX.toFixed(3)}, ${verticalShift})\n   Domain: x ${xCoeff > 0 ? '≥' : '≤'} ${startX.toFixed(3)}`);
        [0, 1, 4, 9].forEach(offset => {
            const x = startX + (xCoeff > 0 ? offset / Math.abs(xCoeff) : -offset / Math.abs(xCoeff));
            const radicand = xCoeff * x + xShift;
            if (radicand >= 0) {
                const y = coefficient * Math.sqrt(radicand) + verticalShift;
                if (y >= this.calculator.yMin && y <= this.calculator.yMax) console.log(`   (${x.toFixed(3)}, ${y.toFixed(3)})`);
            }
        });
    }

    showRationalPoints(equation, { numerator, denominator }) {
        console.log(`📊 Rational Function:\n   Numerator: ${numerator}\n   Denominator: ${denominator}`);
        if (denominator === 'x') console.log(`   Vertical asymptote: x = 0`);
        else { const m = denominator.match(/x([+-]\d+)/); if (m) console.log(`   Vertical asymptote: x = ${-parseFloat(m[1])}`); }
    }

    showSpecialFunctionPoints(equation, { function: func }) {
        const desc = { floor: 'Step function (greatest integer ≤ x)', ceil: 'Ceiling function', sign: 'Sign function (-1, 0, 1)', max: 'Maximum / ReLU function', min: 'Minimum function' };
        console.log(`📊 Special Function: ${func}\n   ${desc[func] || ''}`);
    }

    analyzeAndShowKeyPoints(equation) {
        const checks = [
            ['parseQuadratic', 'showQuadraticPoints', 'isQuadratic'],
            ['parseLinear', 'showLinearPoints', 'isLinear'],
            ['parseCubic', 'showCubicPoints', 'isCubic'],
            ['parseExponential', 'showExponentialPoints', 'isExponential'],
            ['parseLogarithmic', 'showLogarithmicPoints', 'isLogarithmic'],
            ['parseTrigonometric', 'showTrigonometricPoints', 'isTrigonometric'],
            ['parseAbsoluteValue', 'showAbsoluteValuePoints', 'isAbsoluteValue'],
            ['parseSquareRoot', 'showSquareRootPoints', 'isSquareRoot'],
            ['parseRational', 'showRationalPoints', 'isRational'],
            ['parseSpecialFunction', 'showSpecialFunctionPoints', 'isSpecial'],
        ];
        for (const [parseFn, showFn, flag] of checks) {
            const info = this[parseFn](equation);
            if (info[flag]) { this[showFn](equation, info); return; }
        }
        console.log(`📊 Function Analysis: ${equation}\n📍 General function — check SVG for visualization`);
    }

    // ---- draw*Points methods (SVGCanvas instead of canvas context) ----

    markCoordinatePoints(ctx, equation, calculator) {
        const checks = [
            ['parseQuadratic', 'drawQuadraticPoints', 'isQuadratic'],
            ['parseLinear', 'drawLinearPoints', 'isLinear'],
            ['parseCubic', 'drawCubicPoints', 'isCubic'],
            ['parseExponential', 'drawExponentialPoints', 'isExponential'],
            ['parseLogarithmic', 'drawLogarithmicPoints', 'isLogarithmic'],
            ['parseTrigonometric', 'drawTrigonometricPoints', 'isTrigonometric'],
            ['parseAbsoluteValue', 'drawAbsoluteValuePoints', 'isAbsoluteValue'],
            ['parseSquareRoot', 'drawSquareRootPoints', 'isSquareRoot'],
            ['parseRational', 'drawRationalPoints', 'isRational'],
            ['parseSpecialFunction', 'drawSpecialFunctionPoints', 'isSpecial'],
        ];
        for (const [parseFn, drawFn, flag] of checks) {
            const info = this[parseFn](equation);
            if (info[flag]) { this[drawFn](ctx, equation, info, calculator); return; }
        }
    }

    _drawCurve(ctx, points, color) {
        if (points.length < 2) return;
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(points[0].screenX, points[0].screenY);
        for (let i = 1; i < points.length; i++) ctx.lineTo(points[i].screenX, points[i].screenY);
        ctx.stroke();
    }

    _sampleCurve(fn, xMin, xMax, numPoints, yMin, yMax, calculator) {
        const pts = [];
        for (let i = 0; i <= numPoints; i++) {
            const x = xMin + (xMax - xMin) * i / numPoints;
            const y = fn(x);
            if (y !== undefined && isFinite(y) && !isNaN(y) && y >= yMin && y <= yMax) {
                const [screenX, screenY] = calculator.graphToScreen(x, y);
                pts.push({ x, y, screenX, screenY });
            }
        }
        return pts;
    }

    _markDot(ctx, screenX, screenY, r, color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(screenX, screenY, r, 0, 2 * Math.PI);
        ctx.fill();
    }

    _labelPoint(ctx, screenX, screenY, label, color = 'black') {
        ctx.fillStyle = color;
        ctx.font = '11px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(label, screenX, screenY - 10);
    }

    drawLinearPoints(ctx, equation, { slope, intercept }, calculator) {
        const pts = this._sampleCurve(x => slope * x + intercept, calculator.xMin, calculator.xMax, 50, calculator.yMin, calculator.yMax, calculator);
        this._drawCurve(ctx, pts, '#ff0000');
        [-3, -2, -1, 0, 1, 2, 3].forEach(x => {
            const y = slope * x + intercept;
            if (x >= calculator.xMin && x <= calculator.xMax && y >= calculator.yMin && y <= calculator.yMax) {
                const [sx, sy] = calculator.graphToScreen(x, y);
                this._markDot(ctx, sx, sy, 4, x === 0 ? 'blue' : 'red');
                this._labelPoint(ctx, sx, sy, `(${x},${y})`, x === 0 ? 'blue' : 'black');
            }
        });
    }

    drawQuadraticPoints(ctx, equation, { a, h, k }, calculator) {
        const pts = this._sampleCurve(x => a * (x - h) ** 2 + k, calculator.xMin, calculator.xMax, 100, calculator.yMin, calculator.yMax, calculator);
        this._drawCurve(ctx, pts, '#ff0000');
        [-2, -1, 0, 1, 2].forEach(offset => {
            const x = h + offset, y = a * (x - h) ** 2 + k;
            if (x >= calculator.xMin && x <= calculator.xMax && y >= calculator.yMin && y <= calculator.yMax) {
                const [sx, sy] = calculator.graphToScreen(x, y);
                const isVertex = offset === 0;
                this._markDot(ctx, sx, sy, isVertex ? 6 : 4, isVertex ? 'purple' : 'green');
                ctx.fillStyle = isVertex ? 'purple' : 'black';
                ctx.font = isVertex ? 'bold 13px Arial' : '11px Arial';
                ctx.textAlign = 'center';
                ctx.fillText(isVertex ? `Vertex: (${x},${y})` : `(${x},${y})`, sx, sy - (isVertex ? 18 : 10));
            }
        });
        if (h >= calculator.xMin && h <= calculator.xMax) {
            const [ax1] = calculator.graphToScreen(h, calculator.yMin);
            const [ax2] = calculator.graphToScreen(h, calculator.yMax);
            const [, ay1] = calculator.graphToScreen(h, calculator.yMin);
            const [, ay2] = calculator.graphToScreen(h, calculator.yMax);
            ctx.strokeStyle = 'purple';
            ctx.lineWidth = 1;
            ctx.setLineDash([5, 5]);
            ctx.beginPath();
            ctx.moveTo(ax1, ay1);
            ctx.lineTo(ax2, ay2);
            ctx.stroke();
            ctx.setLineDash([]);
        }
    }

    drawCubicPoints(ctx, equation, { a, b, c, d }, calculator) {
        const pts = this._sampleCurve(x => a * x ** 3 + b * x ** 2 + c * x + d, calculator.xMin, calculator.xMax, 100, calculator.yMin, calculator.yMax, calculator);
        this._drawCurve(ctx, pts, '#ff0000');
        const disc = 4 * b * b - 12 * a * c;
        if (disc >= 0) {
            [(-2 * b + Math.sqrt(disc)) / (6 * a), (-2 * b - Math.sqrt(disc)) / (6 * a)].forEach(x => {
                if (x >= calculator.xMin && x <= calculator.xMax) {
                    const y = a * x ** 3 + b * x ** 2 + c * x + d;
                    if (y >= calculator.yMin && y <= calculator.yMax) {
                        const [sx, sy] = calculator.graphToScreen(x, y);
                        this._markDot(ctx, sx, sy, 5, 'purple');
                        this._labelPoint(ctx, sx, sy, `Critical (${x.toFixed(2)},${y.toFixed(2)})`, 'purple');
                    }
                }
            });
        }
        [-2, -1, 0, 1, 2].forEach(x => {
            const y = a * x ** 3 + b * x ** 2 + c * x + d;
            if (x >= calculator.xMin && x <= calculator.xMax && y >= calculator.yMin && y <= calculator.yMax) {
                const [sx, sy] = calculator.graphToScreen(x, y);
                this._markDot(ctx, sx, sy, 3, 'green');
                this._labelPoint(ctx, sx, sy, `(${x},${y.toFixed(1)})`);
            }
        });
    }

    drawExponentialPoints(ctx, equation, { coefficient, base, exponentCoeff, exponentShift }, calculator) {
        const pts = this._sampleCurve(x => coefficient * Math.pow(base, exponentCoeff * x + exponentShift), calculator.xMin, calculator.xMax, 100, calculator.yMin, calculator.yMax, calculator);
        this._drawCurve(ctx, pts, '#ff6600');
        const yInt = coefficient * Math.pow(base, exponentShift);
        if (yInt >= calculator.yMin && yInt <= calculator.yMax) {
            const [sx, sy] = calculator.graphToScreen(0, yInt);
            this._markDot(ctx, sx, sy, 5, 'blue');
            this._labelPoint(ctx, sx, sy, `(0,${yInt.toFixed(2)})`, 'blue');
        }
        [-2, -1, 1, 2].forEach(x => {
            const y = coefficient * Math.pow(base, exponentCoeff * x + exponentShift);
            if (isFinite(y) && y >= calculator.yMin && y <= calculator.yMax) {
                const [sx, sy] = calculator.graphToScreen(x, y);
                this._markDot(ctx, sx, sy, 3, 'orange');
                this._labelPoint(ctx, sx, sy, `(${x},${y.toFixed(2)})`);
            }
        });
    }

    drawLogarithmicPoints(ctx, equation, { coefficient, base, xCoeff, xShift }, calculator) {
        const asymptoteX = -xShift / xCoeff;
        const xStart = Math.max(calculator.xMin, asymptoteX + 0.01);
        const pts = this._sampleCurve(x => {
            const arg = xCoeff * x + xShift;
            return arg > 0 ? coefficient * Math.log(arg) / Math.log(base) : undefined;
        }, xStart, calculator.xMax, 100, calculator.yMin, calculator.yMax, calculator);
        this._drawCurve(ctx, pts, '#9900cc');
        if (asymptoteX >= calculator.xMin && asymptoteX <= calculator.xMax) {
            const [asx, asy1] = calculator.graphToScreen(asymptoteX, calculator.yMin);
            const [, asy2] = calculator.graphToScreen(asymptoteX, calculator.yMax);
            ctx.strokeStyle = 'red';
            ctx.lineWidth = 1;
            ctx.setLineDash([5, 5]);
            ctx.beginPath();
            ctx.moveTo(asx, asy1);
            ctx.lineTo(asx, asy2);
            ctx.stroke();
            ctx.setLineDash([]);
        }
        [1, 2, 5, 10].forEach(off => {
            const x = asymptoteX + off;
            const arg = xCoeff * x + xShift;
            if (arg > 0 && x >= calculator.xMin && x <= calculator.xMax) {
                const y = coefficient * Math.log(arg) / Math.log(base);
                if (isFinite(y) && y >= calculator.yMin && y <= calculator.yMax) {
                    const [sx, sy] = calculator.graphToScreen(x, y);
                    this._markDot(ctx, sx, sy, 3, 'purple');
                    this._labelPoint(ctx, sx, sy, `(${x.toFixed(1)},${y.toFixed(1)})`);
                }
            }
        });
    }

    drawTrigonometricPoints(ctx, equation, { function: func, amplitude, frequency, phase, verticalShift }, calculator) {
        const pts = [];
        const step = (calculator.xMax - calculator.xMin) / 200;
        for (let x = calculator.xMin; x <= calculator.xMax; x += step) {
            const arg = frequency * x + phase;
            let y;
            switch (func) {
                case 'sin': y = amplitude * Math.sin(arg) + verticalShift; break;
                case 'cos': y = amplitude * Math.cos(arg) + verticalShift; break;
                case 'tan': if (Math.abs(Math.cos(arg)) > 0.01) y = amplitude * Math.tan(arg) + verticalShift; break;
                case 'asin': if (Math.abs(arg) <= 1) y = amplitude * Math.asin(arg) + verticalShift; break;
                case 'acos': if (Math.abs(arg) <= 1) y = amplitude * Math.acos(arg) + verticalShift; break;
                case 'atan': y = amplitude * Math.atan(arg) + verticalShift; break;
            }
            if (y !== undefined && isFinite(y) && y >= calculator.yMin && y <= calculator.yMax) {
                const [sx, sy] = calculator.graphToScreen(x, y);
                pts.push({ x, y, screenX: sx, screenY: sy });
            }
        }
        // Draw with discontinuity detection
        if (pts.length > 1) {
            ctx.strokeStyle = '#0099ff';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(pts[0].screenX, pts[0].screenY);
            for (let i = 1; i < pts.length; i++) {
                if (Math.abs(pts[i].screenY - pts[i - 1].screenY) > 100)
                    ctx.moveTo(pts[i].screenX, pts[i].screenY);
                else
                    ctx.lineTo(pts[i].screenX, pts[i].screenY);
            }
            ctx.stroke();
        }
    }

    drawAbsoluteValuePoints(ctx, equation, info, calculator) {
        if (info.isMultiple) return;
        const { coefficient, xCoeff, xShift, verticalShift } = info;
        const pts = this._sampleCurve(x => coefficient * Math.abs(xCoeff * x + xShift) + verticalShift, calculator.xMin, calculator.xMax, 100, calculator.yMin, calculator.yMax, calculator);
        this._drawCurve(ctx, pts, '#cc0099');
        const vx = -xShift / xCoeff, vy = verticalShift;
        if (vx >= calculator.xMin && vx <= calculator.xMax && vy >= calculator.yMin && vy <= calculator.yMax) {
            const [sx, sy] = calculator.graphToScreen(vx, vy);
            this._markDot(ctx, sx, sy, 6, 'red');
            ctx.fillStyle = 'red'; ctx.font = 'bold 13px Arial'; ctx.textAlign = 'center';
            ctx.fillText(`Vertex (${vx.toFixed(2)},${vy.toFixed(2)})`, sx, sy - 15);
        }
        [vx - 2, vx - 1, vx + 1, vx + 2].forEach(x => {
            const y = coefficient * Math.abs(xCoeff * x + xShift) + verticalShift;
            if (x >= calculator.xMin && x <= calculator.xMax && y >= calculator.yMin && y <= calculator.yMax) {
                const [sx, sy] = calculator.graphToScreen(x, y);
                this._markDot(ctx, sx, sy, 3, 'magenta');
                this._labelPoint(ctx, sx, sy, `(${x.toFixed(1)},${y.toFixed(1)})`);
            }
        });
    }

    drawSquareRootPoints(ctx, equation, { coefficient, xCoeff, xShift, verticalShift }, calculator) {
        const startX = -xShift / xCoeff;
        const xMin = xCoeff > 0 ? Math.max(calculator.xMin, startX) : calculator.xMin;
        const xMax = xCoeff > 0 ? calculator.xMax : Math.min(calculator.xMax, startX);
        const pts = this._sampleCurve(x => {
            const r = xCoeff * x + xShift;
            return r >= 0 ? coefficient * Math.sqrt(r) + verticalShift : undefined;
        }, xMin, xMax, 100, calculator.yMin, calculator.yMax, calculator);
        this._drawCurve(ctx, pts, '#00aa88');
        if (startX >= calculator.xMin && startX <= calculator.xMax && verticalShift >= calculator.yMin && verticalShift <= calculator.yMax) {
            const [sx, sy] = calculator.graphToScreen(startX, verticalShift);
            this._markDot(ctx, sx, sy, 6, 'teal');
            ctx.fillStyle = 'teal'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center';
            ctx.fillText(`Start (${startX.toFixed(2)},${verticalShift.toFixed(2)})`, sx, sy - 15);
        }
    }

    drawRationalPoints(ctx, equation, { numerator, denominator }, calculator) {
        ctx.fillStyle = 'black'; ctx.font = '12px Arial'; ctx.textAlign = 'left';
        ctx.fillText('Rational function — check for asymptotes', 10, 30);
    }

    drawSpecialFunctionPoints(ctx, equation, { function: func }, calculator) {
        const fnMap = { floor: x => Math.floor(x), ceil: x => Math.ceil(x), sign: x => Math.sign(x), max: x => Math.max(0, x) };
        const fn = fnMap[func];
        if (!fn) return;
        // Draw horizontal segments only (step functions)
        ctx.strokeStyle = '#ff3366';
        ctx.lineWidth = 2;
        for (let x = calculator.xMin; x < calculator.xMax; x += 0.01) {
            const y = fn(x), yn = fn(x + 0.01);
            if (Math.abs(y - yn) < 0.1 && y >= calculator.yMin && y <= calculator.yMax) {
                const [sx, sy] = calculator.graphToScreen(x, y);
                const [sx2, sy2] = calculator.graphToScreen(x + 0.01, yn);
                ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(sx2, sy2); ctx.stroke();
            }
        }
        ctx.fillStyle = 'black'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'left';
        ctx.fillText(`${func} function`, 10, 30);
    }

    // ==================== EQUATION ADD / GRAPH ====================

    addEquation(equation) {
        try {
            const testCalc = this.createFreshCalculator();
            if (testCalc.addEquation(equation)) {
                this.equationCounter++;
                this.equationHistory.push(`${this.equationCounter}. ${equation}`);
                this.saveIndividualGraph(equation, testCalc);
                const description = this.getFormulaDescription(equation);
                console.log(`\n📈 ${equation}: ${description}`);
                console.log(`Added equation: ${equation}`);
                this.analyzeAndShowKeyPoints(equation);
                return true;
            }
            return false;
        } catch (error) {
            console.log("❌ Invalid equation!");
            return false;
        }
    }

    async saveIndividualGraph(equation, calculator) {
        try {
            const svgContent = await this.createGraphWithPoints(equation, calculator);
            const filename = `equation_${String(this.equationCounter).padStart(3, '0')}_${this.sanitizeFilename(equation)}.svg`;
            const filepath = path.join('./temp', filename);
            this._writeSVG(filepath, svgContent);
            console.log(`💾 Individual SVG saved: ${filename}`);
        } catch (error) {
            console.error("❌ Error saving individual SVG:", error);
        }
    }

    async createGraphWithPoints(equation, calculator) {
        const ctx = new SVGCanvas(calculator.width, calculator.height);
        await calculator.drawGraph(ctx);
        this.markCoordinatePoints(ctx, equation, calculator);
        return ctx.toSVG();
    }

    updateGraph() {
        console.log(`🎨 Individual SVG created for equation`);
    }

    async saveCurrentGraph() {
        try {
            const svgContent = await this.calculator.toSVG();
            const filename = `summary_${String(this.equationCounter).padStart(3, '0')}.svg`;
            const filepath = path.join('./temp', filename);
            this._writeSVG(filepath, svgContent);
            console.log(`💾 Summary SVG saved: ${filename}`);
        } catch (error) {
            console.error("❌ Error saving summary SVG:", error);
        }
    }

    // ==================== THEME / WINDOW / STATUS ====================

    changeTheme(themeName) {
        const themes = { 'standard': Theme.Standard, 'dark': Theme.Dark, 'scientific': Theme.Scientific };
        if (themes[themeName]) {
            this.calculator = new GraphingCalculator({
                size: this.calculator.width, theme: themes[themeName],
                xMin: this.calculator.xMin, xMax: this.calculator.xMax,
                yMin: this.calculator.yMin, yMax: this.calculator.yMax,
                showGrid: this.calculator.showGrid, showAxes: this.calculator.showAxes
            });
            return true;
        }
        return false;
    }

    setViewingWindow(xMin, xMax, yMin, yMax) {
        if (xMin >= xMax || yMin >= yMax) return false;
        this.calculator = new GraphingCalculator({
            size: this.calculator.width, theme: this.calculator.theme,
            xMin, xMax, yMin, yMax,
            showGrid: this.calculator.showGrid, showAxes: this.calculator.showAxes
        });
        return true;
    }

    getTotalItemCount() {
        return this.equationCounter + this.triangleCounter + this.circleCounter;

            /**+ this.rectangleCounter + this.squareCounter + this.parallelogramCounter +
            this.polygonCounter + this.ellipseCounter + this.quadrilateralCounter +
            this.trapezoidCounter + this.sphereCounter + this.cylinderCounter +
            this.coneCounter + this.cubeCounter + this.vectorCounter + this.matrixCounter;*/
    }

    getCalculatorStatus() {
        const total = this.getTotalItemCount();
        return `📊 Status | Total: ${total} | Eq: ${this.equationCounter} | 2D: ${this.triangleCounter + this.circleCounter}`;
       /**+ this.rectangleCounter + this.squareCounter + this.parallelogramCounter + this.polygonCounter + this.ellipseCounter + this.quadrilateralCounter + this.trapezoidCounter} | 3D: ${this.sphereCounter + this.cylinderCounter + this.coneCounter + this.cubeCounter} | Vec: ${this.vectorCounter} | Mat: ${this.matrixCounter}`;*/
    }

    clearAll() {
        this.calculator.clearEquations();
        ['equationHistory','triangleHistory','circleHistory'/**,'rectangleHistory','squareHistory',
         'parallelogramHistory','polygonHistory','ellipseHistory','quadrilateralHistory',
         'trapezoidHistory','sphereHistory','cylinderHistory','coneHistory','cubeHistory',
         'vectorHistory','matrixHistory'*/].forEach(h => this[h] = []);
        ['equationCounter','triangleCounter','circleCounter'/**,'rectangleCounter','squareCounter',
         'parallelogramCounter','polygonCounter','ellipseCounter','quadrilateralCounter',
         'trapezoidCounter','sphereCounter','cylinderCounter','coneCounter','cubeCounter',
         'vectorCounter','matrixCounter'*/].forEach(c => this[c] = 0);
    }

    undoLast() {
        if (this.getTotalItemCount() === 0) { console.log("❌ Nothing to undo!"); return; }
        const historyMap = [
            /**['matrix', 'matrixHistory', 'matrixCounter'],
            ['vector', 'vectorHistory', 'vectorCounter'],
            ['cube', 'cubeHistory', 'cubeCounter'],
            ['cone', 'coneHistory', 'coneCounter'],
            ['cylinder', 'cylinderHistory', 'cylinderCounter'],
            ['sphere', 'sphereHistory', 'sphereCounter'],
            ['trapezoid', 'trapezoidHistory', 'trapezoidCounter'],
            ['quadrilateral', 'quadrilateralHistory', 'quadrilateralCounter'],
            ['ellipse', 'ellipseHistory', 'ellipseCounter'],
            ['polygon', 'polygonHistory', 'polygonCounter'],
            ['parallelogram', 'parallelogramHistory', 'parallelogramCounter'],
            ['square', 'squareHistory', 'squareCounter'],
            ['rectangle', 'rectangleHistory', 'rectangleCounter'],*/
            ['circle', 'circleHistory', 'circleCounter'],
            ['triangle', 'triangleHistory', 'triangleCounter'],
        ];
        for (const [name, histKey, counterKey] of historyMap) {
            if (this[histKey].length > 0) {
                const removed = this[histKey].pop();
                this[counterKey]--;
                console.log(`⬅️  Removed ${name}: ${removed.input}`);
                return;
            }
        }
        if (this.equationHistory.length > 0) {
            const removed = this.equationHistory.pop();
            this.equationCounter--;
            console.log(`⬅️  Removed equation: ${removed}`);
        }
    }

    displayShapeHistory(shapeName, history) {
        const icons = { triangle:'🔺', circle:'⭕'/**, rectangle:'▭', square:'▢', parallelogram:'▱', polygon:'⬡', ellipse:'⬭', quadrilateral:'⬢', trapezoid:'⏢', sphere:'🌐', cylinder:'🛢️', cone:'🔺', cube:'🧊'*/ };
        console.log(`\n${icons[shapeName] || '📐'} ${shapeName.charAt(0).toUpperCase() + shapeName.slice(1)} History:`);
        console.log("=".repeat(60));
        if (history.length === 0) { console.log(`No ${shapeName}s added yet.`); }
        else {
            history.forEach(item => {
                console.log(`  ${item.id}. ${item.input}`);
                const p = item.properties;
                if (p.area !== undefined) console.log(`     Area: ${p.area.toFixed(3)} sq units`);
                if (p.volume !== undefined) console.log(`     Volume: ${p.volume.toFixed(3)} cubic units`);
                if (p.perimeter !== undefined) console.log(`     Perimeter: ${p.perimeter.toFixed(3)} units`);
                else if (p.circumference !== undefined) console.log(`     Circumference: ${p.circumference.toFixed(3)} units`);
                else if (p.surfaceArea !== undefined) console.log(`     Surface Area: ${p.surfaceArea.toFixed(3)} sq units`);
                console.log("");
            });
        }
        console.log("=".repeat(60));
    }

    displayCurrentGraph() {
        console.log("\n🎨 GRAPH DISPLAY INFORMATION");
        console.log("=".repeat(70));
        console.log(`\n📊 SUMMARY:`);
        [['📈 Equations', this.equationCounter],['🔺 Triangles', this.triangleCounter],['⭕ Circles', this.circleCounter],
         /**['▭ Rectangles', this.rectangleCounter],['▢ Squares', this.squareCounter],['▱ Parallelograms', this.parallelogramCounter],
         ['⬡ Polygons', this.polygonCounter],['⬭ Ellipses', this.ellipseCounter],['⬢ Quadrilaterals', this.quadrilateralCounter],
         ['⏢ Trapezoids', this.trapezoidCounter],['🌐 Spheres', this.sphereCounter],['🛢️ Cylinders', this.cylinderCounter],
         ['🔺 Cones', this.coneCounter],['🧊 Cubes', this.cubeCounter],['➡️ Vectors', this.vectorCounter],['🔢 Matrices', this.matrixCounter],*/
         ['📊 Total', this.getTotalItemCount()]
        ].forEach(([label, val]) => console.log(`  ${label}: ${val}`));
        console.log(`\n⚙️  Theme: ${this.calculator.theme}`);
        console.log(`  Window: x[${this.calculator.xMin}, ${this.calculator.xMax}], y[${this.calculator.yMin}, ${this.calculator.yMax}]`);
        console.log(`\n💡 All SVG files saved automatically to './temp/' folder`);
        console.log("=".repeat(70));
    }

    // ==================== DISPLAY HELP / FORMULAS ====================

    displayAllFormulas() {
        console.log("\n" + "=".repeat(80));
        console.log("📊 COMPLETE MATHEMATICAL FORMULA REFERENCE");
        console.log("=".repeat(80));
        const categories = [
            { title: "📏 LINEAR FUNCTIONS", formulas: ["y=2x+3","y=x+1","y=-x+5","y=0.5x-2","y=3x"] },
            { title: "📈 QUADRATIC FUNCTIONS", formulas: ["y=x**2","y=-x**2","y=x**2+2x+1","y=2x**2-4x+1","y=-0.5x**2+3x-2"] },
            { title: "🔄 CUBIC & POLYNOMIAL", formulas: ["y=x**3","y=x**3-3x**2+2x","y=x**4-2x**2"] },
            { title: "📊 EXPONENTIAL", formulas: ["y=2**x","y=0.5**x","y=e**x","y=e**(-x)","y=2*e**(0.5x)"] },
            { title: "📉 LOGARITHMIC", formulas: ["y=log(x)","y=log(x,2)","y=log(x+1)","y=-log(x)"] },
            { title: "🌊 TRIGONOMETRIC", formulas: ["y=sin(x)","y=cos(x)","y=tan(x)","y=2sin(x)","y=sin(2x)"] },
            { title: "📐 ABSOLUTE VALUE", formulas: ["y=abs(x)","y=abs(x-2)","y=-abs(x)+3"] },
            { title: "√ SQUARE ROOT", formulas: ["y=sqrt(x)","y=sqrt(x-1)","y=-sqrt(x)"] },
            { title: "➗ RATIONAL", formulas: ["y=1/x","y=1/(x-1)","y=(x+1)/(x-2)"] },
        ];
        categories.forEach(cat => {
            console.log(`\n${cat.title}\n${"-".repeat(50)}`);
            cat.formulas.forEach(f => console.log(`  ${f.padEnd(40)} → ${this.formulaDatabase[f] || 'Mathematical function'}`));
        });
        console.log("\n" + "=".repeat(80));
    }

    displayHelp() {
        console.log("\n" + "=".repeat(70));
        console.log("🧮 GRAPHING CALCULATOR COMMANDS");
        console.log("=".repeat(70));
        console.log("\n📚 INFORMATION: formulas | history | status | help");
        console.log("📈 GRAPHING:    graph | save | theme | zoom");
        console.log("🗑️  MANAGEMENT: clear | undo | quit");
        console.log("\n📝 INPUT EXAMPLES:");
        console.log("  Equations:  y=x**2, y=sin(x), y=2x+3");
        console.log("  Triangle:   triangle A(0,0) B(4,0) C(2,3)");
        console.log("  Circle:     circle center(0,0) radius 5");
        console.log("  Vector:     vector A(1,2) B(5,4)");
        console.log("  Matrix:     matrix [[1,2],[3,4]]");
        console.log("\n✨ All visualizations saved as .svg in './temp/'");
        console.log("=".repeat(70));
    }
}

export { GraphingCalculator, GraphingCalculatorGame, Theme };
