import { createCanvas } from '@napi-rs/canvas';
import fs from 'fs';
import path from 'path';
import readline from 'readline';
import * as math from 'mathjs';
import GIFEncoder from 'gifencoder';
import { PassThrough } from 'stream';

// Theme enum (copied from types.js)
const Theme = {
    Standard: "standard",
    Dark: "dark",
    Scientific: "scientific"
};

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

    get width() {
        return this.size;
    }

    get height() {
        return this.size;
    }

    setTheme(theme) {
        this.theme = theme;
        if (theme === Theme.Standard) {
            this.backgroundColor = "rgb(255,255,255)";
            this.gridColor = "rgb(200,200,200)";
            this.axisColor = "rgb(0,0,0)";
        }
        else if (theme === Theme.Dark) {
            this.backgroundColor = "rgb(30,30,30)";
            this.gridColor = "rgb(70,70,70)";
            this.axisColor = "rgb(255,255,255)";
        }
        else if (theme === Theme.Scientific) {
            this.backgroundColor = "rgb(240,248,255)";
            this.gridColor = "rgb(176,196,222)";
            this.axisColor = "rgb(25,25,112)";
        }
    }

    addEquation(equation) {
        try {
            const cleanEquation = this.cleanEquation(equation);
            if (!cleanEquation)
                return false;
            this.equations.push(cleanEquation);
            const equationType = this.detectEquationType(cleanEquation);
            const color = this.colors[this.colorIndex % this.colors.length] ?? "rgb(0,0,0)";
            this.colorIndex++;
            this.plotHistory.push({
                equation: cleanEquation,
                type: equationType,
                color
            });
            return true;
        }
        catch (error) {
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
        if (equation.includes('sin') || equation.includes('cos') || equation.includes('tan')) {
            return 'trigonometric';
        }
        else if (equation.includes('log') || equation.includes('ln')) {
            return 'logarithmic';
        }
        else if (equation.includes('**') && equation.includes('x**2')) {
            return 'quadratic';
        }
        else if (equation.includes('**')) {
            return 'exponential';
        }
        else if (equation.includes('abs') || equation.includes('|')) {
            return 'absolute';
        }
        else if (equation.includes('sqrt')) {
            return 'radical';
        }
        else if (equation.includes('x') && !equation.includes('**')) {
            return 'linear';
        }
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
        if (this.showGrid) {
            this.drawGrid(ctx);
        }
        if (this.showAxes) {
            this.drawAxes(ctx);
        }
        const limit = equationLimit !== undefined ? Math.min(equationLimit, this.equations.length) : this.equations.length;
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
                        if (firstPoint) {
                            ctx.moveTo(screenX, screenY);
                            firstPoint = false;
                        }
                        else {
                            ctx.lineTo(screenX, screenY);
                        }
                    }
                    else {
                        firstPoint = true;
                    }
                }
                catch {
                    firstPoint = true;
                }
            }
            ctx.stroke();
        }
        catch (error) {
            console.error("Error plotting equation:", equation, error);
        }
    }

    async buffer(mime = "image/png", options) {
        const canvas = createCanvas(this.width, this.height);
        const ctx = canvas.getContext("2d");
        if (mime !== "image/gif") {
            const equationLimit = options?.equation !== undefined ? options.equation : this.equations.length;
            await this.drawGraph(ctx, equationLimit);
            return canvas.toBuffer(mime);
        }
        else {
            return new Promise((resolve, reject) => {
                const encoder = new GIFEncoder(this.width, this.height);
                const passThrough = new PassThrough();
                const chunks = [];
                passThrough.on("data", chunk => chunks.push(chunk));
                passThrough.on("end", () => resolve(Buffer.concat(chunks)));
                passThrough.on("error", reject);
                encoder.start();
                encoder.setRepeat(0);
                encoder.setDelay(options?.delay ?? 1000);
                encoder.createReadStream().pipe(passThrough);
                const createFrames = async () => {
                    const limit = options?.equation !== undefined ? Math.min(options.equation, this.equations.length) : this.equations.length;
                    const showProgression = options?.showProgression ?? true;
                    if (showProgression) {
                        for (let i = 0; i <= limit; i++) {
                            const tempCalc = new GraphingCalculator({
                                size: this.size,
                                xMin: this.xMin,
                                xMax: this.xMax,
                                yMin: this.yMin,
                                yMax: this.yMax,
                                backgroundColor: this.backgroundColor,
                                gridColor: this.gridColor,
                                axisColor: this.axisColor,
                                theme: this.theme,
                                showGrid: this.showGrid,
                                showAxes: this.showAxes
                            });
                            for (let j = 0; j < i; j++) {
                                const equation = this.equations[j];
                                if (equation) {
                                    tempCalc.addEquation(equation);
                                }
                            }
                            await tempCalc.drawGraph(ctx);
                            encoder.addFrame(ctx);
                        }
                    }
                    else {
                        await this.drawGraph(ctx, limit);
                        encoder.addFrame(ctx);
                    }
                };
                createFrames()
                    .then(() => encoder.finish())
                    .catch(reject);
            });
        }
    }

    getEquations() {
        return [...this.equations];
    }

    getPlotHistory() {
        return [...this.plotHistory];
    }
}

const EndSection0 = "close"

class GraphingCalculatorGame {
    constructor() {
        // Initialize graphing calculator
        this.calculator = new GraphingCalculator({
            size: 480,
            theme: Theme.Standard,
            xMin: -10,
            xMax: 10,
            yMin: -10,
            yMax: 10,
            showGrid: true,
            showAxes: true
        });
        
        // Counters and history
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

        // Vector-specific settings
        this.vectorSettings = {
            arrowSize: 12,
            arrowColor: '#ff6600',
            componentColor: '#0066ff',
            resultantColor: '#ff0000',
            showComponents: true,
            showMagnitude: true,
            showAngle: true,
            show3D: false
        };

        // Matrix-specific settings
        this.matrixSettings = {
            showGrid: true,
            showBasis: true,
            showTransformation: true,
            gridColor: '#e0e0e0',
            basisColor: '#0066ff',
            transformedColor: '#ff0000',
            pointColor: '#00aa00',
            showEigenvalues: true,
            showDeterminant: true
        };

        // Complete formula database with descriptions
        this.formulaDatabase = {
            // Basic Linear Functions
            "y=2x+3": "Linear function: slope = 2, y-intercept = 3",
            "y=x+1": "Linear function: slope = 1, y-intercept = 1",
            "y=-x+5": "Linear function: slope = -1, y-intercept = 5",
            "y=0.5x-2": "Linear function: slope = 0.5, y-intercept = -2",
            "y=3x": "Linear function through origin: slope = 3",

            // Quadratic Functions
            "y=x**2": "Basic parabola opening upward",
            "y=-x**2": "Inverted parabola opening downward",
            "y=x**2+2x+1": "Quadratic function: y = (x+1)²",
            "y=2x**2-4x+1": "Quadratic function with vertex form transformation",
            "y=-0.5x**2+3x-2": "Downward opening parabola",
            "y=(x-1)**2": "Vertex form parabola: vertex at (1,0)",
            "y=2(x-3)**2+5": "Vertex form parabola: vertex at (3,5)",

            // Cubic and Higher Polynomials
            "y=x**3": "Basic cubic function",
            "y=x**3-3x**2+2x": "Cubic polynomial with local extrema",
            "y=x**4-2x**2": "Fourth-degree polynomial (W-shaped)",

            // Exponential Functions
            "y=2**x": "Exponential growth function, base 2",
            "y=0.5**x": "Exponential decay function",
            "y=e**x": "Natural exponential function",
            "y=e**(-x)": "Negative exponential decay",
            "y=2*e**(0.5x)": "Scaled exponential growth",

            // Logarithmic Functions
            "y=log(x)": "Natural logarithm function",
            "y=log(x,2)": "Logarithm base 2",
            "y=log(x+1)": "Shifted logarithm function",
            "y=-log(x)": "Reflected logarithm function",

            // Trigonometric Functions
            "y=sin(x)": "Sine wave function",
            "y=cos(x)": "Cosine wave function",
            "y=tan(x)": "Tangent function with vertical asymptotes",
            "y=2sin(x)": "Amplitude-scaled sine function",
            "y=sin(2x)": "Frequency-doubled sine function",
            "y=sin(x-pi/2)": "Phase-shifted sine function",
            "y=sin(x)+cos(x)": "Sum of sine and cosine",

            // Inverse Trigonometric Functions
            "y=asin(x)": "Arcsine function (inverse sine)",
            "y=acos(x)": "Arccosine function (inverse cosine)",
            "y=atan(x)": "Arctangent function (inverse tangent)",

            // Absolute Value Functions
            "y=abs(x)": "Absolute value function (V-shape)",
            "y=abs(x-2)": "Shifted absolute value function",
            "y=abs(x)+abs(x-4)": "Sum of two absolute value functions",
            "y=-abs(x)+3": "Inverted and shifted absolute value",

            // Square Root Functions
            "y=sqrt(x)": "Square root function",
            "y=sqrt(x-1)": "Shifted square root function",
            "y=-sqrt(x)": "Reflected square root function",
            "y=2sqrt(x+3)": "Scaled and shifted square root",

            // Rational Functions
            "y=1/x": "Reciprocal function with vertical and horizontal asymptotes",
            "y=1/(x-1)": "Shifted reciprocal function",
            "y=(x+1)/(x-2)": "Rational function with oblique asymptote",
            "y=x**2/(x**2+1)": "Rational function approaching horizontal asymptote",

            // Piecewise and Special Functions
            "y=floor(x)": "Floor function (step function)",
            "y=ceil(x)": "Ceiling function",
            "y=sign(x)": "Sign function",
            "y=max(0,x)": "ReLU function (Rectified Linear Unit)",

            // Circle and Conic Equations (implicit forms)
            "x**2+y**2=25": "Circle with radius 5 centered at origin",
            "(x-2)**2+(y-1)**2=9": "Circle with radius 3 centered at (2,1)",

            // Complex Functions
            "y=x*sin(x)": "Product of linear and sine functions",
            "y=e**(-x)*cos(x)": "Damped cosine function",
            "y=x**2*sin(1/x)": "Rapidly oscillating function near origin",
            "y=sin(x)/x": "Sinc function",

            // Statistics and Probability
            "y=e**(-x**2/2)/sqrt(2*pi)": "Standard normal distribution",
            "y=x*e**(-x)": "Gamma distribution shape",

            // Parametric Examples (for reference)
            "x=cos(t),y=sin(t)": "Unit circle (parametric)",
            "x=t,y=t**2": "Parabola (parametric form)",

            // Polar Examples (for reference)
            "r=1": "Unit circle (polar)",
            "r=1+cos(theta)": "Cardioid (polar)",
            "r=sin(2*theta)": "Rose curve (polar)"
        };
    }

    const EndSection1 = "close"


    // ==================== QUADRILATERAL METHODS ====================
    
    /**
     * Parse quadrilateral input from various formats
     */
    parseQuadrilateralInput(input) {
        // Pattern 1: quadrilateral A(x1,y1) B(x2,y2) C(x3,y3) D(x4,y4)
        const pattern1 = /quadrilateral\s*a\(([^,]+),([^)]+)\)\s*b\(([^,]+),([^)]+)\)\s*c\(([^,]+),([^)]+)\)\s*d\(([^,]+),([^)]+)\)/i;
        const match1 = input.match(pattern1);
        if (match1) {
            return {
                A: { x: parseFloat(match1[1]), y: parseFloat(match1[2]) },
                B: { x: parseFloat(match1[3]), y: parseFloat(match1[4]) },
                C: { x: parseFloat(match1[5]), y: parseFloat(match1[6]) },
                D: { x: parseFloat(match1[7]), y: parseFloat(match1[8]) }
            };
        }

        // Pattern 2: quadrilateral (x1,y1) (x2,y2) (x3,y3) (x4,y4)
        const pattern2 = /quadrilateral\s*\(([^,]+),([^)]+)\)\s*\(([^,]+),([^)]+)\)\s*\(([^,]+),([^)]+)\)\s*\(([^,]+),([^)]+)\)/i;
        const match2 = input.match(pattern2);
        if (match2) {
            return {
                A: { x: parseFloat(match2[1]), y: parseFloat(match2[2]) },
                B: { x: parseFloat(match2[3]), y: parseFloat(match2[4]) },
                C: { x: parseFloat(match2[5]), y: parseFloat(match2[6]) },
                D: { x: parseFloat(match2[7]), y: parseFloat(match2[8]) }
            };
        }

        return null;
    }

    /**
     * Calculate quadrilateral properties
     */
    calculateQuadrilateralProperties(A, B, C, D) {
        // Calculate side lengths
        const sideAB = this.calculateDistance(A, B);
        const sideBC = this.calculateDistance(B, C);
        const sideCD = this.calculateDistance(C, D);
        const sideDA = this.calculateDistance(D, A);

        // Calculate diagonals
        const diagonalAC = this.calculateDistance(A, C);
        const diagonalBD = this.calculateDistance(B, D);

        // Calculate area using Shoelace formula
        const area = 0.5 * Math.abs(
            (A.x * B.y - B.x * A.y) +
            (B.x * C.y - C.x * B.y) +
            (C.x * D.y - D.x * C.y) +
            (D.x * A.y - A.x * D.y)
        );

        // Calculate perimeter
        const perimeter = sideAB + sideBC + sideCD + sideDA;

        // Classify quadrilateral
        const classification = this.classifyQuadrilateral(A, B, C, D, sideAB, sideBC, sideCD, sideDA);

        return {
            vertices: { A, B, C, D },
            sides: { AB: sideAB, BC: sideBC, CD: sideCD, DA: sideDA },
            diagonals: { AC: diagonalAC, BD: diagonalBD },
            area,
            perimeter,
            classification
        };
    }

    /**
     * Classify quadrilateral type
     */
    classifyQuadrilateral(A, B, C, D, sideAB, sideBC, sideCD, sideDA) {
        const tolerance = 0.001;

        // Check for rectangle (opposite sides equal and diagonals equal)
        const oppositeSidesEqual = Math.abs(sideAB - sideCD) < tolerance && Math.abs(sideBC - sideDA) < tolerance;
        const diagonalAC = this.calculateDistance(A, C);
        const diagonalBD = this.calculateDistance(B, D);
        const diagonalsEqual = Math.abs(diagonalAC - diagonalBD) < tolerance;

        if (oppositeSidesEqual && diagonalsEqual) {
            // Check if all sides equal (square)
            if (Math.abs(sideAB - sideBC) < tolerance) {
                return "Square";
            }
            return "Rectangle";
        }

        // Check for parallelogram (opposite sides equal)
        if (oppositeSidesEqual) {
            // Check for rhombus (all sides equal)
            if (Math.abs(sideAB - sideBC) < tolerance && Math.abs(sideBC - sideCD) < tolerance) {
                return "Rhombus";
            }
            return "Parallelogram";
        }

        // Check for trapezoid (one pair of parallel sides)
        const vectorAB = { x: B.x - A.x, y: B.y - A.y };
        const vectorDC = { x: C.x - D.x, y: C.y - D.y };
        const vectorAD = { x: D.x - A.x, y: D.y - A.y };
        const vectorBC = { x: C.x - B.x, y: C.y - B.y };

        const crossABDC = vectorAB.x * vectorDC.y - vectorAB.y * vectorDC.x;
        const crossADBC = vectorAD.x * vectorBC.y - vectorAD.y * vectorBC.x;

        if (Math.abs(crossABDC) < tolerance || Math.abs(crossADBC) < tolerance) {
            return "Trapezoid";
        }

        return "General Quadrilateral";
    }

    /**
     * Add quadrilateral
     */
    addQuadrilateral(input) {
        const points = this.parseQuadrilateralInput(input);

        if (!points) {
            console.log("❌ Invalid quadrilateral format!");
            console.log("💡 Examples:");
            console.log("  • quadrilateral A(0,0) B(4,0) C(5,3) D(1,3)");
            console.log("  • quadrilateral (0,0) (4,0) (5,3) (1,3)");
            return false;
        }

        const { A, B, C, D } = points;

        if ([A.x, A.y, B.x, B.y, C.x, C.y, D.x, D.y].some(val => isNaN(val))) {
            console.log("❌ Invalid coordinates! Please use numbers only.");
            return false;
        }

        const quadProps = this.calculateQuadrilateralProperties(A, B, C, D);

        this.quadrilateralCounter++;
        this.quadrilateralHistory.push({
            id: this.quadrilateralCounter,
            input: input,
            properties: quadProps
        });

        this.displayQuadrilateralAnalysis(quadProps);
        this.saveIndividualQuadrilateral(quadProps);

        return true;
    }

    /**
     * Display quadrilateral analysis
     */
    displayQuadrilateralAnalysis(props) {
        const { vertices, sides, diagonals, area, perimeter, classification } = props;

        console.log(`\n⬢ QUADRILATERAL ANALYSIS`);
        console.log("=".repeat(50));

        console.log(`📍 Vertices:`);
        console.log(`   A: (${vertices.A.x}, ${vertices.A.y})`);
        console.log(`   B: (${vertices.B.x}, ${vertices.B.y})`);
        console.log(`   C: (${vertices.C.x}, ${vertices.C.y})`);
        console.log(`   D: (${vertices.D.x}, ${vertices.D.y})`);

        console.log(`\n📏 Side Lengths:`);
        console.log(`   AB = ${sides.AB.toFixed(3)} units`);
        console.log(`   BC = ${sides.BC.toFixed(3)} units`);
        console.log(`   CD = ${sides.CD.toFixed(3)} units`);
        console.log(`   DA = ${sides.DA.toFixed(3)} units`);

        console.log(`\n📐 Diagonals:`);
        console.log(`   AC = ${diagonals.AC.toFixed(3)} units`);
        console.log(`   BD = ${diagonals.BD.toFixed(3)} units`);

        console.log(`\n📊 Properties:`);
        console.log(`   Area: ${area.toFixed(3)} square units`);
        console.log(`   Perimeter: ${perimeter.toFixed(3)} units`);

        console.log(`\n🏷️ Classification: ${classification}`);

        console.log("=".repeat(50));
    }

    /**
     * Save individual quadrilateral graph
     */
    async saveIndividualQuadrilateral(quadProps) {
        try {
            const buffer = await this.createQuadrilateralGraph(quadProps);
            const { vertices } = quadProps;

            const filename = `quadrilateral_${String(this.quadrilateralCounter).padStart(3, '0')}_${vertices.A.x}_${vertices.A.y}.png`;
            const filepath = path.join('./temp', filename);

            if (!fs.existsSync('./temp')) {
                fs.mkdirSync('./temp', { recursive: true });
            }

            fs.writeFileSync(filepath, buffer);
            console.log(`💾 Quadrilateral graph saved: ${filename}`);
        } catch (error) {
            console.error("❌ Error saving quadrilateral graph:", error);
        }
    }

    /**
     * Create quadrilateral graph
     */
    async createQuadrilateralGraph(quadProps) {
        const canvas = createCanvas(this.calculator.width, this.calculator.height);
        const ctx = canvas.getContext("2d");

        await this.calculator.drawGraph(ctx);
        this.drawQuadrilateral(ctx, quadProps);

        return canvas.toBuffer("image/png");
    }

    /**
     * Draw quadrilateral
     */
    drawQuadrilateral(ctx, quadProps) {
        const { vertices, sides, area, perimeter, classification } = quadProps;

        const screenA = this.calculator.graphToScreen(vertices.A.x, vertices.A.y);
        const screenB = this.calculator.graphToScreen(vertices.B.x, vertices.B.y);
        const screenC = this.calculator.graphToScreen(vertices.C.x, vertices.C.y);
        const screenD = this.calculator.graphToScreen(vertices.D.x, vertices.D.y);

        // Draw quadrilateral
        ctx.strokeStyle = '#ff0000';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(screenA[0], screenA[1]);
        ctx.lineTo(screenB[0], screenB[1]);
        ctx.lineTo(screenC[0], screenC[1]);
        ctx.lineTo(screenD[0], screenD[1]);
        ctx.closePath();
        ctx.stroke();

        // Draw diagonals
        ctx.strokeStyle = '#00aa00';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(screenA[0], screenA[1]);
        ctx.lineTo(screenC[0], screenC[1]);
        ctx.moveTo(screenB[0], screenB[1]);
        ctx.lineTo(screenD[0], screenD[1]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Draw vertices
        [screenA, screenB, screenC, screenD].forEach((screen, i) => {
            ctx.fillStyle = '#0066ff';
            ctx.beginPath();
            ctx.arc(screen[0], screen[1], 5, 0, 2 * Math.PI);
            ctx.fill();
        });

        // Title and properties
        ctx.fillStyle = 'black';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(`${classification}`, 10, 25);

        ctx.font = '12px Arial';
        const props = [
            `Area: ${area.toFixed(2)} sq units`,
            `Perimeter: ${perimeter.toFixed(2)} units`,
            `Sides: AB=${sides.AB.toFixed(2)}, BC=${sides.BC.toFixed(2)}`,
            `       CD=${sides.CD.toFixed(2)}, DA=${sides.DA.toFixed(2)}`
        ];

        props.forEach((prop, index) => {
            ctx.fillText(prop, 10, 50 + index * 15);
        });
    }
    const EndSection2 = "close"
// ==================== TRAPEZOID METHODS ====================
    
    /**
     * Parse trapezoid input
     */
    parseTrapezoidInput(input) {
        // Pattern 1: trapezoid (x,y) base1 base2 height
        const pattern1 = /trapezoid\s*\(([^,]+),([^)]+)\)\s*([^\s]+)\s*([^\s]+)\s*([^\s]+)/i;
        const match1 = input.match(pattern1);
        if (match1) {
            return {
                corner: { x: parseFloat(match1[1]), y: parseFloat(match1[2]) },
                base1: parseFloat(match1[3]),
                base2: parseFloat(match1[4]),
                height: parseFloat(match1[5])
            };
        }

        // Pattern 2: trapezoid x,y,base1,base2,height
        const pattern2 = /trapezoid\s*([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+)/i;
        const match2 = input.match(pattern2);
        if (match2) {
            return {
                corner: { x: parseFloat(match2[1]), y: parseFloat(match2[2]) },
                base1: parseFloat(match2[3]),
                base2: parseFloat(match2[4]),
                height: parseFloat(match2[5])
            };
        }

        return null;
    }

    /**
     * Calculate trapezoid properties
     */
    calculateTrapezoidProperties(corner, base1, base2, height) {
        // Area = (base1 + base2) * height / 2
        const area = (base1 + base2) * height / 2;

        // Calculate offset for trapezoid shape (centered)
        const offset = (base1 - base2) / 2;

        // Calculate vertices
        const vertices = {
            A: corner,
            B: { x: corner.x + base1, y: corner.y },
            C: { x: corner.x + base1 - offset, y: corner.y + height },
            D: { x: corner.x + offset, y: corner.y + height }
        };

        // Calculate leg lengths
        const legAD = this.calculateDistance(vertices.A, vertices.D);
        const legBC = this.calculateDistance(vertices.B, vertices.C);

        // Calculate perimeter
        const perimeter = base1 + base2 + legAD + legBC;

        // Calculate median (midsegment)
        const median = (base1 + base2) / 2;

        return {
            corner,
            base1,
            base2,
            height,
            area,
            perimeter,
            median,
            vertices,
            legs: { AD: legAD, BC: legBC }
        };
    }

    /**
     * Add trapezoid
     */
    addTrapezoid(input) {
        const trapData = this.parseTrapezoidInput(input);

        if (!trapData) {
            console.log("❌ Invalid trapezoid format!");
            console.log("💡 Examples:");
            console.log("  • trapezoid (0,0) 6 4 3");
            console.log("  • trapezoid 1,1,5,3,2");
            return false;
        }

        const { corner, base1, base2, height } = trapData;

        if (isNaN(corner.x) || isNaN(corner.y) || isNaN(base1) || isNaN(base2) || isNaN(height) ||
            base1 <= 0 || base2 <= 0 || height <= 0) {
            console.log("❌ Invalid values! All measurements must be positive.");
            return false;
        }

        const trapProps = this.calculateTrapezoidProperties(corner, base1, base2, height);

        this.trapezoidCounter++;
        this.trapezoidHistory.push({
            id: this.trapezoidCounter,
            input: input,
            properties: trapProps
        });

        this.displayTrapezoidAnalysis(trapProps);
        this.saveIndividualTrapezoid(trapProps);

        return true;
    }

    /**
     * Display trapezoid analysis
     */
    displayTrapezoidAnalysis(props) {
        const { base1, base2, height, area, perimeter, median, vertices, legs } = props;

        console.log(`\n⏢ TRAPEZOID ANALYSIS`);
        console.log("=".repeat(50));

        console.log(`📍 Vertices:`);
        console.log(`   A: (${vertices.A.x.toFixed(2)}, ${vertices.A.y.toFixed(2)}) - Bottom-left`);
        console.log(`   B: (${vertices.B.x.toFixed(2)}, ${vertices.B.y.toFixed(2)}) - Bottom-right`);
        console.log(`   C: (${vertices.C.x.toFixed(2)}, ${vertices.C.y.toFixed(2)}) - Top-right`);
        console.log(`   D: (${vertices.D.x.toFixed(2)}, ${vertices.D.y.toFixed(2)}) - Top-left`);

        console.log(`\n📏 Measurements:`);
        console.log(`   Base 1 (bottom): ${base1.toFixed(3)} units`);
        console.log(`   Base 2 (top): ${base2.toFixed(3)} units`);
        console.log(`   Height: ${height.toFixed(3)} units`);
        console.log(`   Median (midsegment): ${median.toFixed(3)} units`);
        console.log(`   Leg AD: ${legs.AD.toFixed(3)} units`);
        console.log(`   Leg BC: ${legs.BC.toFixed(3)} units`);

        console.log(`\n📊 Properties:`);
        console.log(`   Area: ${area.toFixed(3)} square units`);
        console.log(`   Perimeter: ${perimeter.toFixed(3)} units`);
        console.log(`   Formula: Area = (b₁ + b₂) × h / 2`);

        if (Math.abs(legs.AD - legs.BC) < 0.001) {
            console.log(`\n⭐ Special: Isosceles Trapezoid (legs are equal)`);
        }

        console.log("=".repeat(50));
    }

    /**
     * Save individual trapezoid graph
     */
    async saveIndividualTrapezoid(trapProps) {
        try {
            const buffer = await this.createTrapezoidGraph(trapProps);
            const { corner, base1, base2, height } = trapProps;

            const filename = `trapezoid_${String(this.trapezoidCounter).padStart(3, '0')}_${corner.x}_${corner.y}_b1${base1}_b2${base2}_h${height}.png`;
            const filepath = path.join('./temp', filename);

            if (!fs.existsSync('./temp')) {
                fs.mkdirSync('./temp', { recursive: true });
            }

            fs.writeFileSync(filepath, buffer);
            console.log(`💾 Trapezoid graph saved: ${filename}`);
        } catch (error) {
            console.error("❌ Error saving trapezoid graph:", error);
        }
    }

    /**
     * Create trapezoid graph
     */
    async createTrapezoidGraph(trapProps) {
        const canvas = createCanvas(this.calculator.width, this.calculator.height);
        const ctx = canvas.getContext("2d");

        await this.calculator.drawGraph(ctx);
        this.drawTrapezoid(ctx, trapProps);

        return canvas.toBuffer("image/png");
    }

    /**
     * Draw trapezoid
     */
    drawTrapezoid(ctx, trapProps) {
        const { vertices, base1, base2, height, area, perimeter, median } = trapProps;

        const screenA = this.calculator.graphToScreen(vertices.A.x, vertices.A.y);
        const screenB = this.calculator.graphToScreen(vertices.B.x, vertices.B.y);
        const screenC = this.calculator.graphToScreen(vertices.C.x, vertices.C.y);
        const screenD = this.calculator.graphToScreen(vertices.D.x, vertices.D.y);

        // Draw trapezoid
        ctx.strokeStyle = '#ff0000';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(screenA[0], screenA[1]);
        ctx.lineTo(screenB[0], screenB[1]);
        ctx.lineTo(screenC[0], screenC[1]);
        ctx.lineTo(screenD[0], screenD[1]);
        ctx.closePath();
        ctx.stroke();

        // Draw height line
        ctx.strokeStyle = '#00aa00';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        const midX = (vertices.A.x + vertices.B.x) / 2;
        const screenMidBottom = this.calculator.graphToScreen(midX, vertices.A.y);
        const screenMidTop = this.calculator.graphToScreen(midX, vertices.D.y);
        ctx.beginPath();
        ctx.moveTo(screenMidBottom[0], screenMidBottom[1]);
        ctx.lineTo(screenMidTop[0], screenMidTop[1]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Draw vertices
        [screenA, screenB, screenC, screenD].forEach((screen, i) => {
            ctx.fillStyle = '#0066ff';
            ctx.beginPath();
            ctx.arc(screen[0], screen[1], 5, 0, 2 * Math.PI);
            ctx.fill();
        });

// Title and properties
        ctx.fillStyle = 'black';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(`Trapezoid`, 10, 25);

        ctx.font = '12px Arial';
        const props = [
            `Base 1: ${base1.toFixed(2)} units`,
            `Base 2: ${base2.toFixed(2)} units`,
            `Height: ${height.toFixed(2)} units`,
            `Median: ${median.toFixed(2)} units`,
            `Area: ${area.toFixed(2)} sq units`,
            `Perimeter: ${perimeter.toFixed(2)} units`
        ];

        props.forEach((prop, index) => {
            ctx.fillText(prop, 10, 50 + index * 15);
        });
    }
    const EndSection3 = "close"
    // ==================== SPHERE METHODS ====================
    
    /**
     * Parse sphere input
     */
    parseSphereInput(input) {
        // Pattern 1: sphere center(x,y,z) radius r
        const pattern1 = /sphere\s*center\(([^,]+),([^,]+),([^)]+)\)\s*radius\s*([^\s]+)/i;
        const match1 = input.match(pattern1);
        if (match1) {
            return {
                center: { x: parseFloat(match1[1]), y: parseFloat(match1[2]), z: parseFloat(match1[3]) },
                radius: parseFloat(match1[4])
            };
        }

        // Pattern 2: sphere (x,y,z) r
        const pattern2 = /sphere\s*\(([^,]+),([^,]+),([^)]+)\)\s*([^\s]+)/i;
        const match2 = input.match(pattern2);
        if (match2) {
            return {
                center: { x: parseFloat(match2[1]), y: parseFloat(match2[2]), z: parseFloat(match2[3]) },
                radius: parseFloat(match2[4])
            };
        }

        // Pattern 3: sphere x,y,z,r
        const pattern3 = /sphere\s*([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+)/i;
        const match3 = input.match(pattern3);
        if (match3) {
            return {
                center: { x: parseFloat(match3[1]), y: parseFloat(match3[2]), z: parseFloat(match3[3]) },
                radius: parseFloat(match3[4])
            };
        }

        return null;
    }

    /**
     * Calculate sphere properties
     */
    calculateSphereProperties(center, radius) {
        const surfaceArea = 4 * Math.PI * radius * radius;
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        const diameter = 2 * radius;

        return {
            center,
            radius,
            diameter,
            surfaceArea,
            volume
        };
    }

    /**
     * Add sphere
     */
    addSphere(input) {
        const sphereData = this.parseSphereInput(input);

        if (!sphereData) {
            console.log("❌ Invalid sphere format!");
            console.log("💡 Examples:");
            console.log("  • sphere center(0,0,0) radius 5");
            console.log("  • sphere (1,2,3) 4");
            console.log("  • sphere 0,0,0,3");
            return false;
        }

        const { center, radius } = sphereData;

        if (isNaN(center.x) || isNaN(center.y) || isNaN(center.z) || isNaN(radius) || radius <= 0) {
            console.log("❌ Invalid values! Radius must be positive.");
            return false;
        }

        const sphereProps = this.calculateSphereProperties(center, radius);

        this.sphereCounter++;
        this.sphereHistory.push({
            id: this.sphereCounter,
            input: input,
            properties: sphereProps
        });

        this.displaySphereAnalysis(sphereProps);
        this.saveIndividualSphere(sphereProps);

        return true;
    }

    /**
     * Display sphere analysis
     */
    displaySphereAnalysis(props) {
        const { center, radius, diameter, surfaceArea, volume } = props;

        console.log(`\n🌐 SPHERE ANALYSIS`);
        console.log("=".repeat(50));

        console.log(`📍 Center: (${center.x}, ${center.y}, ${center.z})`);

        console.log(`\n📏 Measurements:`);
        console.log(`   Radius: ${radius.toFixed(3)} units`);
        console.log(`   Diameter: ${diameter.toFixed(3)} units`);
        console.log(`   Surface Area: ${surfaceArea.toFixed(3)} square units`);
        console.log(`   Volume: ${volume.toFixed(3)} cubic units`);

        console.log(`\n📊 Formulas:`);
        console.log(`   Surface Area: 4πr² = 4π(${radius.toFixed(2)})²`);
        console.log(`   Volume: (4/3)πr³ = (4/3)π(${radius.toFixed(2)})³`);

        console.log("=".repeat(50));
    }

    /**
     * Save individual sphere graph
     */
    async saveIndividualSphere(sphereProps) {
        try {
            const buffer = await this.createSphereGraph(sphereProps);
            const { center, radius } = sphereProps;

            const filename = `sphere_${String(this.sphereCounter).padStart(3, '0')}_center${center.x}_${center.y}_${center.z}_r${radius.toFixed(1)}.png`;
            const filepath = path.join('./temp', filename);

            if (!fs.existsSync('./temp')) {
                fs.mkdirSync('./temp', { recursive: true });
            }

            fs.writeFileSync(filepath, buffer);
            console.log(`💾 Sphere graph saved: ${filename}`);
        } catch (error) {
            console.error("❌ Error saving sphere graph:", error);
        }
    }

    /**
     * Create sphere graph (2D projection)
     */
    async createSphereGraph(sphereProps) {
        const canvas = createCanvas(this.calculator.width, this.calculator.height);
        const ctx = canvas.getContext("2d");

        await this.calculator.drawGraph(ctx);
        this.drawSphere(ctx, sphereProps);

        return canvas.toBuffer("image/png");
    }

    /**
     * Draw sphere (as 2D projection)
     */
    drawSphere(ctx, sphereProps) {
        const { center, radius, surfaceArea, volume } = sphereProps;

        // Project to 2D (XY plane)
        const screenCenter = this.calculator.graphToScreen(center.x, center.y);
        const screenRadius = Math.abs(this.calculator.graphToScreen(radius, 0)[0] - this.calculator.graphToScreen(0, 0)[0]);

        // Draw outer circle
        ctx.strokeStyle = '#ff0000';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(screenCenter[0], screenCenter[1], screenRadius, 0, 2 * Math.PI);
        ctx.stroke();

        // Draw ellipse to show 3D effect
        ctx.strokeStyle = '#0066ff';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.ellipse(screenCenter[0], screenCenter[1], screenRadius, screenRadius * 0.4, 0, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.setLineDash([]);

        // Draw center point
        ctx.fillStyle = '#0066ff';
        ctx.beginPath();
        ctx.arc(screenCenter[0], screenCenter[1], 5, 0, 2 * Math.PI);
        ctx.fill();

        // Draw radius line
        ctx.strokeStyle = '#00aa00';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(screenCenter[0], screenCenter[1]);
        ctx.lineTo(screenCenter[0] + screenRadius, screenCenter[1]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Title and properties
        ctx.fillStyle = 'black';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(`Sphere (3D)`, 10, 25);

        ctx.font = '12px Arial';
        const props = [
            `Center: (${center.x}, ${center.y}, ${center.z})`,
            `Radius: ${radius.toFixed(2)} units`,
            `Surface Area: ${surfaceArea.toFixed(2)} sq units`,
            `Volume: ${volume.toFixed(2)} cubic units`,
            `[2D projection shown]`
        ];

        props.forEach((prop, index) => {
            ctx.fillText(prop, 10, 50 + index * 15);
        });
    }
    const EndSection4 = "close"
    // ==================== CYLINDER METHODS ====================
    
    /**
     * Parse cylinder input
     */
    parseCylinderInput(input) {
        // Pattern 1: cylinder center(x,y,z) radius height
        const pattern1 = /cylinder\s*center\(([^,]+),([^,]+),([^)]+)\)\s*radius\s*([^\s]+)\s*height\s*([^\s]+)/i;
        const match1 = input.match(pattern1);
        if (match1) {
            return {
                center: { x: parseFloat(match1[1]), y: parseFloat(match1[2]), z: parseFloat(match1[3]) },
                radius: parseFloat(match1[4]),
                height: parseFloat(match1[5])
            };
        }

        // Pattern 2: cylinder (x,y,z) r h
        const pattern2 = /cylinder\s*\(([^,]+),([^,]+),([^)]+)\)\s*([^\s]+)\s*([^\s]+)/i;
        const match2 = input.match(pattern2);
        if (match2) {
            return {
                center: { x: parseFloat(match2[1]), y: parseFloat(match2[2]), z: parseFloat(match2[3]) },
                radius: parseFloat(match2[4]),
                height: parseFloat(match2[5])
            };
        }

        // Pattern 3: cylinder x,y,z,r,h
        const pattern3 = /cylinder\s*([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+)/i;
        const match3 = input.match(pattern3);
        if (match3) {
            return {
                center: { x: parseFloat(match3[1]), y: parseFloat(match3[2]), z: parseFloat(match3[3]) },
                radius: parseFloat(match3[4]),
                height: parseFloat(match3[5])
            };
        }

        return null;
    }

    /**
     * Calculate cylinder properties
     */
    calculateCylinderProperties(center, radius, height) {
        const baseArea = Math.PI * radius * radius;
        const lateralSurfaceArea = 2 * Math.PI * radius * height;
        const totalSurfaceArea = lateralSurfaceArea + 2 * baseArea;
        const volume = baseArea * height;

        return {
            center,
            radius,
            height,
            baseArea,
            lateralSurfaceArea,
            totalSurfaceArea,
            volume
        };
    }

    /**
     * Add cylinder
     */
    addCylinder(input) {
        const cylData = this.parseCylinderInput(input);

        if (!cylData) {
            console.log("❌ Invalid cylinder format!");
            console.log("💡 Examples:");
            console.log("  • cylinder center(0,0,0) radius 3 height 5");
            console.log("  • cylinder (1,2,3) 4 6");
            console.log("  • cylinder 0,0,0,3,5");
            return false;
        }

        const { center, radius, height } = cylData;

        if (isNaN(center.x) || isNaN(center.y) || isNaN(center.z) || 
            isNaN(radius) || isNaN(height) || radius <= 0 || height <= 0) {
            console.log("❌ Invalid values! Radius and height must be positive.");
            return false;
        }

        const cylProps = this.calculateCylinderProperties(center, radius, height);

        this.cylinderCounter++;
        this.cylinderHistory.push({
            id: this.cylinderCounter,
            input: input,
            properties: cylProps
        });

        this.displayCylinderAnalysis(cylProps);
        this.saveIndividualCylinder(cylProps);

        return true;
    }

    /**
     * Display cylinder analysis
     */
    displayCylinderAnalysis(props) {
        const { center, radius, height, baseArea, lateralSurfaceArea, totalSurfaceArea, volume } = props;

        console.log(`\n🛢️ CYLINDER ANALYSIS`);
        console.log("=".repeat(50));

        console.log(`📍 Center: (${center.x}, ${center.y}, ${center.z})`);

        console.log(`\n📏 Measurements:`);
        console.log(`   Radius: ${radius.toFixed(3)} units`);
        console.log(`   Height: ${height.toFixed(3)} units`);
        console.log(`   Base Area: ${baseArea.toFixed(3)} square units`);
        console.log(`   Lateral Surface Area: ${lateralSurfaceArea.toFixed(3)} square units`);
        console.log(`   Total Surface Area: ${totalSurfaceArea.toFixed(3)} square units`);
        console.log(`   Volume: ${volume.toFixed(3)} cubic units`);

        console.log(`\n📊 Formulas:`);
        console.log(`   Base Area: πr² = π(${radius.toFixed(2)})²`);
        console.log(`   Lateral Surface Area: 2πrh = 2π(${radius.toFixed(2)})(${height.toFixed(2)})`);
        console.log(`   Volume: πr²h = π(${radius.toFixed(2)})²(${height.toFixed(2)})`);

        console.log("=".repeat(50));
    }

    /**
     * Save individual cylinder graph
     */
    async saveIndividualCylinder(cylProps) {
        try {
            const buffer = await this.createCylinderGraph(cylProps);
            const { center, radius, height } = cylProps;

            const filename = `cylinder_${String(this.cylinderCounter).padStart(3, '0')}_center${center.x}_${center.y}_${center.z}_r${radius}_h${height}.png`;
            const filepath = path.join('./temp', filename);

            if (!fs.existsSync('./temp')) {
                fs.mkdirSync('./temp', { recursive: true });
            }

            fs.writeFileSync(filepath, buffer);
            console.log(`💾 Cylinder graph saved: ${filename}`);
        } catch (error) {
            console.error("❌ Error saving cylinder graph:", error);
        }
    }

    /**
     * Create cylinder graph (2D projection)
     */
    async createCylinderGraph(cylProps) {
        const canvas = createCanvas(this.calculator.width, this.calculator.height);
        const ctx = canvas.getContext("2d");

        await this.calculator.drawGraph(ctx);
        this.drawCylinder(ctx, cylProps);

        return canvas.toBuffer("image/png");
    }

    /**
     * Draw cylinder (as 2D projection)
     */
    drawCylinder(ctx, cylProps) {
        const { center, radius, height, volume, totalSurfaceArea } = cylProps;

        // Project to 2D (side view)
        const screenCenter = this.calculator.graphToScreen(center.x, center.y);
        const screenRadius = Math.abs(this.calculator.graphToScreen(radius, 0)[0] - this.calculator.graphToScreen(0, 0)[0]);
        const screenHeight = Math.abs(this.calculator.graphToScreen(0, height)[1] - this.calculator.graphToScreen(0, 0)[1]);

        // Draw top ellipse
        ctx.strokeStyle = '#ff0000';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.ellipse(screenCenter[0], screenCenter[1] - screenHeight/2, screenRadius, screenRadius * 0.3, 0, 0, 2 * Math.PI);
        ctx.stroke();

        // Draw bottom ellipse
        ctx.beginPath();
        ctx.ellipse(screenCenter[0], screenCenter[1] + screenHeight/2, screenRadius, screenRadius * 0.3, 0, 0, 2 * Math.PI);
        ctx.stroke();

        // Draw side lines
        ctx.beginPath();
        ctx.moveTo(screenCenter[0] - screenRadius, screenCenter[1] - screenHeight/2);
        ctx.lineTo(screenCenter[0] - screenRadius, screenCenter[1] + screenHeight/2);
        ctx.moveTo(screenCenter[0] + screenRadius, screenCenter[1] - screenHeight/2);
        ctx.lineTo(screenCenter[0] + screenRadius, screenCenter[1] + screenHeight/2);
        ctx.stroke();

        // Draw height line
        ctx.strokeStyle = '#00aa00';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(screenCenter[0], screenCenter[1] - screenHeight/2);
        ctx.lineTo(screenCenter[0], screenCenter[1] + screenHeight/2);
        ctx.stroke();
        ctx.setLineDash([]);

        // Draw center point
        ctx.fillStyle = '#0066ff';
        ctx.beginPath();
        ctx.arc(screenCenter[0], screenCenter[1], 5, 0, 2 * Math.PI);
        ctx.fill();

        // Title and properties
        ctx.fillStyle = 'black';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(`Cylinder (3D)`, 10, 25);

        ctx.font = '12px Arial';
        const props = [
            `Center: (${center.x}, ${center.y}, ${center.z})`,
            `Radius: ${radius.toFixed(2)} units`,
            `Height: ${height.toFixed(2)} units`,
            `Surface Area: ${totalSurfaceArea.toFixed(2)} sq units`,
            `Volume: ${volume.toFixed(2)} cubic units`,
            `[2D projection shown]`
        ];

        props.forEach((prop, index) => {
            ctx.fillText(prop, 10, 50 + index * 15);
        });
    }
    const EndSection5 = "close"

    // ==================== CONE METHODS ====================
    
    /**
     * Parse cone input
     */
    parseConeInput(input) {
        // Pattern 1: cone center(x,y,z) radius height
        const pattern1 = /cone\s*center\(([^,]+),([^,]+),([^)]+)\)\s*radius\s*([^\s]+)\s*height\s*([^\s]+)/i;
        const match1 = input.match(pattern1);
        if (match1) {
            return {
                center: { x: parseFloat(match1[1]), y: parseFloat(match1[2]), z: parseFloat(match1[3]) },
                radius: parseFloat(match1[4]),
                height: parseFloat(match1[5])
            };
        }

        // Pattern 2: cone (x,y,z) r h
        const pattern2 = /cone\s*\(([^,]+),([^,]+),([^)]+)\)\s*([^\s]+)\s*([^\s]+)/i;
        const match2 = input.match(pattern2);
        if (match2) {
            return {
                center: { x: parseFloat(match2[1]), y: parseFloat(match2[2]), z: parseFloat(match2[3]) },
                radius: parseFloat(match2[4]),
                height: parseFloat(match2[5])
            };
        }

        // Pattern 3: cone x,y,z,r,h
        const pattern3 = /cone\s*([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+)/i;
        const match3 = input.match(pattern3);
        if (match3) {
            return {
                center: { x: parseFloat(match3[1]), y: parseFloat(match3[2]), z: parseFloat(match3[3]) },
                radius: parseFloat(match3[4]),
                height: parseFloat(match3[5])
            };
        }

        return null;
    }

    /**
     * Calculate cone properties
     */
    calculateConeProperties(center, radius, height) {
        const slantHeight = Math.sqrt(radius * radius + height * height);
        const baseArea = Math.PI * radius * radius;
        const lateralSurfaceArea = Math.PI * radius * slantHeight;
        const totalSurfaceArea = baseArea + lateralSurfaceArea;
        const volume = (1/3) * baseArea * height;

        return {
            center,
            radius,
            height,
            slantHeight,
            baseArea,
            lateralSurfaceArea,
            totalSurfaceArea,
            volume
        };
    }

    /**
     * Add cone
     */
    addCone(input) {
        const coneData = this.parseConeInput(input);

        if (!coneData) {
            console.log("❌ Invalid cone format!");
            console.log("💡 Examples:");
            console.log("  • cone center(0,0,0) radius 3 height 5");
            console.log("  • cone (1,2,3) 4 6");
            console.log("  • cone 0,0,0,3,5");
            return false;
        }

        const { center, radius, height } = coneData;

        if (isNaN(center.x) || isNaN(center.y) || isNaN(center.z) || 
            isNaN(radius) || isNaN(height) || radius <= 0 || height <= 0) {
            console.log("❌ Invalid values! Radius and height must be positive.");
            return false;
        }

        const coneProps = this.calculateConeProperties(center, radius, height);

        this.coneCounter++;
        this.coneHistory.push({
            id: this.coneCounter,
            input: input,
            properties: coneProps
        });

        this.displayConeAnalysis(coneProps);
        this.saveIndividualCone(coneProps);

        return true;
    }

    /**
     * Display cone analysis
     */

/**
     * Display cone analysis
     */
    displayConeAnalysis(props) {
        const { center, radius, height, slantHeight, baseArea, lateralSurfaceArea, totalSurfaceArea, volume } = props;

        console.log(`\n🔺 CONE ANALYSIS`);
        console.log("=".repeat(50));

        console.log(`📍 Center (base): (${center.x}, ${center.y}, ${center.z})`);

        console.log(`\n📏 Measurements:`);
        console.log(`   Radius: ${radius.toFixed(3)} units`);
        console.log(`   Height: ${height.toFixed(3)} units`);
        console.log(`   Slant Height: ${slantHeight.toFixed(3)} units`);
        console.log(`   Base Area: ${baseArea.toFixed(3)} square units`);
        console.log(`   Lateral Surface Area: ${lateralSurfaceArea.toFixed(3)} square units`);
        console.log(`   Total Surface Area: ${totalSurfaceArea.toFixed(3)} square units`);
        console.log(`   Volume: ${volume.toFixed(3)} cubic units`);

        console.log(`\n📊 Formulas:`);
        console.log(`   Slant Height: l = √(r² + h²) = √(${radius.toFixed(2)}² + ${height.toFixed(2)}²)`);
        console.log(`   Volume: (1/3)πr²h = (1/3)π(${radius.toFixed(2)})²(${height.toFixed(2)})`);
        console.log(`   Lateral Surface Area: πrl = π(${radius.toFixed(2)})(${slantHeight.toFixed(2)})`);

        console.log("=".repeat(50));
    }

    /**
     * Save individual cone graph
     */
    async saveIndividualCone(coneProps) {
        try {
            const buffer = await this.createConeGraph(coneProps);
            const { center, radius, height } = coneProps;

            const filename = `cone_${String(this.coneCounter).padStart(3, '0')}_center${center.x}_${center.y}_${center.z}_r${radius}_h${height}.png`;
            const filepath = path.join('./temp', filename);

            if (!fs.existsSync('./temp')) {
                fs.mkdirSync('./temp', { recursive: true });
            }

            fs.writeFileSync(filepath, buffer);
            console.log(`💾 Cone graph saved: ${filename}`);
        } catch (error) {
            console.error("❌ Error saving cone graph:", error);
        }
    }

    /**
     * Create cone graph (2D projection)
     */
    async createConeGraph(coneProps) {
        const canvas = createCanvas(this.calculator.width, this.calculator.height);
        const ctx = canvas.getContext("2d");

        await this.calculator.drawGraph(ctx);
        this.drawCone(ctx, coneProps);

        return canvas.toBuffer("image/png");
    }
    const EndSection6 = "close"
    /**
     * Draw cone (as 2D projection)
     */
    drawCone(ctx, coneProps) {
        const { center, radius, height, slantHeight, volume, totalSurfaceArea } = coneProps;

        // Project to 2D (side view)
        const screenCenter = this.calculator.graphToScreen(center.x, center.y);
        const screenRadius = Math.abs(this.calculator.graphToScreen(radius, 0)[0] - this.calculator.graphToScreen(0, 0)[0]);
        const screenHeight = Math.abs(this.calculator.graphToScreen(0, height)[1] - this.calculator.graphToScreen(0, 0)[1]);

        // Draw base ellipse
        ctx.strokeStyle = '#ff0000';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.ellipse(screenCenter[0], screenCenter[1] + screenHeight/2, screenRadius, screenRadius * 0.3, 0, 0, 2 * Math.PI);
        ctx.stroke();

        // Draw cone sides
        ctx.beginPath();
        ctx.moveTo(screenCenter[0] - screenRadius, screenCenter[1] + screenHeight/2);
        ctx.lineTo(screenCenter[0], screenCenter[1] - screenHeight/2);
        ctx.lineTo(screenCenter[0] + screenRadius, screenCenter[1] + screenHeight/2);
        ctx.stroke();

        // Draw height line
        ctx.strokeStyle = '#00aa00';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(screenCenter[0], screenCenter[1] - screenHeight/2);
        ctx.lineTo(screenCenter[0], screenCenter[1] + screenHeight/2);
        ctx.stroke();
        ctx.setLineDash([]);

        // Draw apex point
        ctx.fillStyle = '#0066ff';
        ctx.beginPath();
        ctx.arc(screenCenter[0], screenCenter[1] - screenHeight/2, 5, 0, 2 * Math.PI);
        ctx.fill();

        // Draw base center
        ctx.beginPath();
        ctx.arc(screenCenter[0], screenCenter[1] + screenHeight/2, 5, 0, 2 * Math.PI);
        ctx.fill();

        // Title and properties
        ctx.fillStyle = 'black';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(`Cone (3D)`, 10, 25);

        ctx.font = '12px Arial';
        const props = [
            `Center: (${center.x}, ${center.y}, ${center.z})`,
            `Radius: ${radius.toFixed(2)} units`,
            `Height: ${height.toFixed(2)} units`,
            `Slant Height: ${slantHeight.toFixed(2)} units`,
            `Surface Area: ${totalSurfaceArea.toFixed(2)} sq units`,
            `Volume: ${volume.toFixed(2)} cubic units`,
            `[2D projection shown]`
        ];

        props.forEach((prop, index) => {
            ctx.fillText(prop, 10, 50 + index * 15);
        });
    }
    const EndSection7 = "close"
    // ==================== CUBE METHODS ====================
    
    /**
     * Parse cube input
     */
    parseCubeInput(input) {
        // Pattern 1: cube (x,y,z) side
        const pattern1 = /cube\s*\(([^,]+),([^,]+),([^)]+)\)\s*([^\s]+)/i;
        const match1 = input.match(pattern1);
        if (match1) {
            return {
                corner: { x: parseFloat(match1[1]), y: parseFloat(match1[2]), z: parseFloat(match1[3]) },
                side: parseFloat(match1[4])
            };
        }

        // Pattern 2: cube x,y,z,side
        const pattern2 = /cube\s*([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+)/i;
        const match2 = input.match(pattern2);
        if (match2) {
            return {
                corner: { x: parseFloat(match2[1]), y: parseFloat(match2[2]), z: parseFloat(match2[3]) },
                side: parseFloat(match2[4])
            };
        }

        return null;
    }

    /**
     * Calculate cube properties
     */
    calculateCubeProperties(corner, side) {
        const surfaceArea = 6 * side * side;
        const volume = side * side * side;
        const spaceDiagonal = side * Math.sqrt(3);
        const faceDiagonal = side * Math.sqrt(2);

        return {
            corner,
            side,
            surfaceArea,
            volume,
            spaceDiagonal,
            faceDiagonal
        };
    }

  
    addCube(input) {
        const cubeData = this.parseCubeInput(input);

        if (!cubeData) {
            console.log("❌ Invalid cube format!");
            console.log("💡 Examples:");
            console.log("  • cube (0,0,0) 4");
            console.log("  • cube 1,1,1,3");
            return false;
        }

        const { corner, side } = cubeData;

        if (isNaN(corner.x) || isNaN(corner.y) || isNaN(corner.z) || isNaN(side) || side <= 0) {
            console.log("❌ Invalid values! Side must be positive.");
            return false;
        }

        const cubeProps = this.calculateCubeProperties(corner, side);

        this.cubeCounter++;
        this.cubeHistory.push({
            id: this.cubeCounter,
            input: input,
            properties: cubeProps
        });

        this.displayCubeAnalysis(cubeProps);
        this.saveIndividualCube(cubeProps);

        return true;
    }

    /**
     * Display cube analysis
     */
    displayCubeAnalysis(props) {
        const { corner, side, surfaceArea, volume, spaceDiagonal, faceDiagonal } = props;

        console.log(`\n🧊 CUBE ANALYSIS`);
        console.log("=".repeat(50));

        console.log(`📍 Corner: (${corner.x}, ${corner.y}, ${corner.z})`);

        console.log(`\n📏 Measurements:`);
        console.log(`   Side: ${side.toFixed(3)} units`);
        console.log(`   Face Diagonal: ${faceDiagonal.toFixed(3)} units (${side.toFixed(2)}√2)`);
        console.log(`   Space Diagonal: ${spaceDiagonal.toFixed(3)} units (${side.toFixed(2)}√3)`);
        console.log(`   Surface Area: ${surfaceArea.toFixed(3)} square units`);
        console.log(`   Volume: ${volume.toFixed(3)} cubic units`);

        console.log(`\n📊 Properties:`);
        console.log(`   6 square faces`);
        console.log(`   12 edges (all equal)`);
        console.log(`   8 vertices`);
        console.log(`   All angles are 90°`);

        console.log(`\n📐 Formulas:`);
        console.log(`   Surface Area: 6s² = 6(${side.toFixed(2)})²`);
        console.log(`   Volume: s³ = (${side.toFixed(2)})³`);

        console.log("=".repeat(50));
    }

    /**
     * Save individual cube graph
     */
    async saveIndividualCube(cubeProps) {
        try {
            const buffer = await this.createCubeGraph(cubeProps);
            const { corner, side } = cubeProps;

            const filename = `cube_${String(this.cubeCounter).padStart(3, '0')}_corner${corner.x}_${corner.y}_${corner.z}_side${side}.png`;
            const filepath = path.join('./temp', filename);

            if (!fs.existsSync('./temp')) {
                fs.mkdirSync('./temp', { recursive: true });
            }

            fs.writeFileSync(filepath, buffer);
            console.log(`💾 Cube graph saved: ${filename}`);
        } catch (error) {
            console.error("❌ Error saving cube graph:", error);
        }
    }

    /**
     * Create cube graph (isometric projection)
     */
    async createCubeGraph(cubeProps) {
        const canvas = createCanvas(this.calculator.width, this.calculator.height);
        const ctx = canvas.getContext("2d");

        await this.calculator.drawGraph(ctx);
        this.drawCube(ctx, cubeProps);

        return canvas.toBuffer("image/png");
    }

    /**
     * Draw cube (as isometric projection)
     */
    drawCube(ctx, cubeProps) {
        const { corner, side, surfaceArea, volume, spaceDiagonal } = cubeProps;

        // Project to 2D (isometric view)
        const screenCorner = this.calculator.graphToScreen(corner.x, corner.y);
        const screenSide = Math.abs(this.calculator.graphToScreen(side, 0)[0] - this.calculator.graphToScreen(0, 0)[0]);

        // Isometric projection angles
        const isoX = screenSide * Math.cos(Math.PI / 6);
        const isoY = screenSide * Math.sin(Math.PI / 6);
        const isoZ = screenSide;

        // Calculate 8 vertices of the cube in isometric projection
        const x = screenCorner[0];
        const y = screenCorner[1];

        const vertices = {
            // Front face (bottom)
            v1: [x, y],
            v2: [x + isoX, y - isoY],
            v3: [x + isoX, y - isoY - isoZ],
            v4: [x, y - isoZ],
            // Back face (top)
            v5: [x - isoX, y - isoY],
            v6: [x, y - 2 * isoY],
            v7: [x, y - 2 * isoY - isoZ],
            v8: [x - isoX, y - isoY - isoZ]
        };

        // Draw cube edges
        ctx.strokeStyle = '#ff0000';
        ctx.lineWidth = 3;

        // Front face
        ctx.beginPath();
        ctx.moveTo(vertices.v1[0], vertices.v1[1]);
        ctx.lineTo(vertices.v2[0], vertices.v2[1]);
        ctx.lineTo(vertices.v3[0], vertices.v3[1]);
        ctx.lineTo(vertices.v4[0], vertices.v4[1]);
        ctx.closePath();
        ctx.stroke();

        // Back face
        ctx.beginPath();
        ctx.moveTo(vertices.v5[0], vertices.v5[1]);
        ctx.lineTo(vertices.v6[0], vertices.v6[1]);
        ctx.lineTo(vertices.v7[0], vertices.v7[1]);
        ctx.lineTo(vertices.v8[0], vertices.v8[1]);
        ctx.closePath();
        ctx.stroke();

        // Connecting edges
        ctx.beginPath();
        ctx.moveTo(vertices.v1[0], vertices.v1[1]);
        ctx.lineTo(vertices.v5[0], vertices.v5[1]);
        ctx.moveTo(vertices.v2[0], vertices.v2[1]);
        ctx.lineTo(vertices.v6[0], vertices.v6[1]);
        ctx.moveTo(vertices.v3[0], vertices.v3[1]);
        ctx.lineTo(vertices.v7[0], vertices.v7[1]);
        ctx.moveTo(vertices.v4[0], vertices.v4[1]);
        ctx.lineTo(vertices.v8[0], vertices.v8[1]);
        ctx.stroke();

        // Draw vertices
        Object.values(vertices).forEach(v => {
            ctx.fillStyle = '#0066ff';
            ctx.beginPath();
            ctx.arc(v[0], v[1], 4, 0, 2 * Math.PI);
            ctx.fill();
        });

        // Title and properties
        ctx.fillStyle = 'black';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(`Cube (3D)`, 10, 25);

        ctx.font = '12px Arial';
        const props = [
            `Corner: (${corner.x}, ${corner.y}, ${corner.z})`,
            `Side: ${side.toFixed(2)} units`,
            `Space Diagonal: ${spaceDiagonal.toFixed(2)} units`,
            `Surface Area: ${surfaceArea.toFixed(2)} sq units`,
            `Volume: ${volume.toFixed(2)} cubic units`,
            `[Isometric projection shown]`
        ];

        props.forEach((prop, index) => {
            ctx.fillText(prop, 10, 50 + index * 15);
        });
    }
    const EndSection8 = "close"
// ==================== CIRCLE METHODS ====================
    
    /**
     * Parse circle input from various formats
     */
    parseCircleInput(input) {
        const cleanInput = input.replace(/\s/g, '').toLowerCase();

        // Pattern 1: circle center(x,y) radius r
        const pattern1 = /circle\s*center\(([^,]+),([^)]+)\)\s*radius\s*([^\s]+)/i;
        const match1 = input.match(pattern1);
        if (match1) {
            return {
                center: { x: parseFloat(match1[1]), y: parseFloat(match1[2]) },
                radius: parseFloat(match1[3])
            };
        }

        // Pattern 2: circle (x,y) r
        const pattern2 = /circle\s*\(([^,]+),([^)]+)\)\s*([^\s]+)/i;
        const match2 = input.match(pattern2);
        if (match2) {
            return {
                center: { x: parseFloat(match2[1]), y: parseFloat(match2[2]) },
                radius: parseFloat(match2[3])
            };
        }

        // Pattern 3: circle x,y,r
        const pattern3 = /circle\s*([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+)/i;
        const match3 = input.match(pattern3);
        if (match3) {
            return {
                center: { x: parseFloat(match3[1]), y: parseFloat(match3[2]) },
                radius: parseFloat(match3[3])
            };
        }

        // Pattern 4: circle diameter d at (x,y)
        const pattern4 = /circle\s*diameter\s*([^\s]+)\s*at\s*\(([^,]+),([^)]+)\)/i;
        const match4 = input.match(pattern4);
        if (match4) {
            return {
                center: { x: parseFloat(match4[2]), y: parseFloat(match4[3]) },
                radius: parseFloat(match4[1]) / 2,
                isDiameter: true
            };
        }

        return null;
    }

    /**
     * Calculate circle properties
     */
    calculateCircleProperties(center, radius) {
        const area = Math.PI * radius * radius;
        const circumference = 2 * Math.PI * radius;
        const diameter = 2 * radius;

        return {
            center,
            radius,
            diameter,
            area,
            circumference
        };
    }

    /**
     * Add circle to the calculator
     */
    addCircle(input) {
        const circleData = this.parseCircleInput(input);

        if (!circleData) {
            console.log("❌ Invalid circle format!");
            console.log("💡 Examples:");
            console.log("  • circle center(0,0) radius 5");
            console.log("  • circle (2,3) 4");
            console.log("  • circle 0,0,3");
            console.log("  • circle diameter 10 at (1,1)");
            return false;
        }

        const { center, radius } = circleData;

        if (isNaN(center.x) || isNaN(center.y) || isNaN(radius) || radius <= 0) {
            console.log("❌ Invalid values! Radius must be positive.");
            return false;
        }

        const circleProps = this.calculateCircleProperties(center, radius);

        this.circleCounter++;
        this.circleHistory.push({
            id: this.circleCounter,
            input: input,
            properties: circleProps
        });

        this.displayCircleAnalysis(circleProps);
        this.saveIndividualCircle(circleProps);

        return true;
    }

    /**
     * Display circle analysis
     */
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

    /**
     * Save individual circle graph
     */
    async saveIndividualCircle(circleProps) {
        try {
            const buffer = await this.createCircleGraph(circleProps);
            const { center, radius } = circleProps;

            const filename = `circle_${String(this.circleCounter).padStart(3, '0')}_center${center.x}_${center.y}_r${radius.toFixed(1)}.png`;
            const filepath = path.join('./temp', filename);

            if (!fs.existsSync('./temp')) {
                fs.mkdirSync('./temp', { recursive: true });
            }

            fs.writeFileSync(filepath, buffer);
            console.log(`💾 Circle graph saved: ${filename}`);
        } catch (error) {
            console.error("❌ Error saving circle graph:", error);
        }
    }

    /**
     * Create circle graph
     */
    async createCircleGraph(circleProps) {
        const canvas = createCanvas(this.calculator.width, this.calculator.height);
        const ctx = canvas.getContext("2d");

        await this.calculator.drawGraph(ctx);
        this.drawCircle(ctx, circleProps);

        return canvas.toBuffer("image/png");
    }

    /**
     * Draw circle with annotations
     */
    drawCircle(ctx, circleProps) {
        const { center, radius, area, circumference } = circleProps;

        const screenCenter = this.calculator.graphToScreen(center.x, center.y);
        const screenRadius = Math.abs(this.calculator.graphToScreen(radius, 0)[0] - this.calculator.graphToScreen(0, 0)[0]);

        // Draw circle
        ctx.strokeStyle = '#ff0000';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(screenCenter[0], screenCenter[1], screenRadius, 0, 2 * Math.PI);
        ctx.stroke();

        // Draw center point
        ctx.fillStyle = '#0066ff';
        ctx.beginPath();
        ctx.arc(screenCenter[0], screenCenter[1], 6, 0, 2 * Math.PI);
        ctx.fill();

        // Draw radius line
        ctx.strokeStyle = '#00aa00';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(screenCenter[0], screenCenter[1]);
        ctx.lineTo(screenCenter[0] + screenRadius, screenCenter[1]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Labels
        ctx.fillStyle = 'black';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`Center (${center.x}, ${center.y})`, screenCenter[0], screenCenter[1] - 15);
        ctx.fillText(`r = ${radius.toFixed(2)}`, screenCenter[0] + screenRadius / 2, screenCenter[1] - 10);

        // Title and properties
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

        props.forEach((prop, index) => {
            ctx.fillText(prop, 10, 50 + index * 15);
        });
    }
    const EndSection9 = "close"

    // ==================== RECTANGLE METHODS ====================
    
    /**
     * Parse rectangle input
     */
    parseRectangleInput(input) {
        // Pattern 1: rectangle (x,y) length width
        const pattern1 = /rectangle\s*\(([^,]+),([^)]+)\)\s*([^\s]+)\s*([^\s]+)/i;
        const match1 = input.match(pattern1);
        if (match1) {
            return {
                corner: { x: parseFloat(match1[1]), y: parseFloat(match1[2]) },
                length: parseFloat(match1[3]),
                width: parseFloat(match1[4])
            };
        }

        // Pattern 2: rectangle x,y,length,width
        const pattern2 = /rectangle\s*([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+)/i;
        const match2 = input.match(pattern2);
        if (match2) {
            return {
                corner: { x: parseFloat(match2[1]), y: parseFloat(match2[2]) },
                length: parseFloat(match2[3]),
                width: parseFloat(match2[4])
            };
        }

        return null;
    }

    /**
     * Calculate rectangle properties
     */
    calculateRectangleProperties(corner, length, width) {
        const area = length * width;
        const perimeter = 2 * (length + width);
        const diagonal = Math.sqrt(length * length + width * width);

        return {
            corner,
            length,
            width,
            area,
            perimeter,
            diagonal,
            vertices: {
                A: corner,
                B: { x: corner.x + length, y: corner.y },
                C: { x: corner.x + length, y: corner.y + width },
                D: { x: corner.x, y: corner.y + width }
            }
        };
    }

    /**
     * Add rectangle
     */
    addRectangle(input) {
        const rectData = this.parseRectangleInput(input);

        if (!rectData) {
            console.log("❌ Invalid rectangle format!");
            console.log("💡 Examples:");
            console.log("  • rectangle (0,0) 4 3");
            console.log("  • rectangle 1,1,5,2");
            return false;
        }

        const { corner, length, width } = rectData;

        if (isNaN(corner.x) || isNaN(corner.y) || isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
            console.log("❌ Invalid values! Length and width must be positive.");
            return false;
        }

        const rectProps = this.calculateRectangleProperties(corner, length, width);

        this.rectangleCounter++;
        this.rectangleHistory.push({
            id: this.rectangleCounter,
            input: input,
            properties: rectProps
        });

        this.displayRectangleAnalysis(rectProps);
        this.saveIndividualRectangle(rectProps);

        return true;
    }

    /**
     * Display rectangle analysis
     */
    displayRectangleAnalysis(props) {
        const { corner, length, width, area, perimeter, diagonal, vertices } = props;

        console.log(`\n▭ RECTANGLE ANALYSIS`);
        console.log("=".repeat(50));

        console.log(`📍 Vertices:`);
        console.log(`   A: (${vertices.A.x}, ${vertices.A.y}) - Bottom-left`);
        console.log(`   B: (${vertices.B.x}, ${vertices.B.y}) - Bottom-right`);
        console.log(`   C: (${vertices.C.x}, ${vertices.C.y}) - Top-right`);
        console.log(`   D: (${vertices.D.x}, ${vertices.D.y}) - Top-left`);

        console.log(`\n📏 Measurements:`);
        console.log(`   Length: ${length.toFixed(3)} units`);
        console.log(`   Width: ${width.toFixed(3)} units`);
        console.log(`   Diagonal: ${diagonal.toFixed(3)} units`);
        console.log(`   Area: ${area.toFixed(3)} square units`);
        console.log(`   Perimeter: ${perimeter.toFixed(3)} units`);

        console.log(`\n📊 Properties:`);
        console.log(`   All angles: 90°`);
        console.log(`   Opposite sides equal`);
        if (Math.abs(length - width) < 0.001) {
            console.log(`   ⭐ Special: This is a SQUARE!`);
        }

        console.log("=".repeat(50));
    }

    /**
     * Save individual rectangle graph
     */
    async saveIndividualRectangle(rectProps) {
        try {
            const buffer = await this.createRectangleGraph(rectProps);
            const { corner, length, width } = rectProps;

            const filename = `rectangle_${String(this.rectangleCounter).padStart(3, '0')}_${corner.x}_${corner.y}_${length}x${width}.png`;
            const filepath = path.join('./temp', filename);

            if (!fs.existsSync('./temp')) {
                fs.mkdirSync('./temp', { recursive: true });
            }

            fs.writeFileSync(filepath, buffer);
            console.log(`💾 Rectangle graph saved: ${filename}`);
        } catch (error) {
            console.error("❌ Error saving rectangle graph:", error);
        }
    }

    /**
     * Create rectangle graph
     */
    async createRectangleGraph(rectProps) {
        const canvas = createCanvas(this.calculator.width, this.calculator.height);
        const ctx = canvas.getContext("2d");

        await this.calculator.drawGraph(ctx);
        this.drawRectangle(ctx, rectProps);

        return canvas.toBuffer("image/png");
    }

    /**
     * Draw rectangle
     */
    drawRectangle(ctx, rectProps) {
        const { vertices, length, width, area, perimeter, diagonal } = rectProps;

        const screenA = this.calculator.graphToScreen(vertices.A.x, vertices.A.y);
        const screenB = this.calculator.graphToScreen(vertices.B.x, vertices.B.y);
        const screenC = this.calculator.graphToScreen(vertices.C.x, vertices.C.y);
        const screenD = this.calculator.graphToScreen(vertices.D.x, vertices.D.y);

        // Draw rectangle
        ctx.strokeStyle = '#ff0000';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(screenA[0], screenA[1]);
        ctx.lineTo(screenB[0], screenB[1]);
        ctx.lineTo(screenC[0], screenC[1]);
        ctx.lineTo(screenD[0], screenD[1]);
        ctx.closePath();
        ctx.stroke();

        // Draw diagonal
        ctx.strokeStyle = '#00aa00';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(screenA[0], screenA[1]);
        ctx.lineTo(screenC[0], screenC[1]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Draw vertices
        [screenA, screenB, screenC, screenD].forEach((screen, i) => {
            ctx.fillStyle = '#0066ff';
            ctx.beginPath();
            ctx.arc(screen[0], screen[1], 5, 0, 2 * Math.PI);
            ctx.fill();
        });

        // Title and properties
        ctx.fillStyle = 'black';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(`Rectangle`, 10, 25);

        ctx.font = '12px Arial';
        const props = [
            `Length: ${length.toFixed(2)} units`,
            `Width: ${width.toFixed(2)} units`,
            `Diagonal: ${diagonal.toFixed(2)} units`,
            `Area: ${area.toFixed(2)} sq units`,
            `Perimeter: ${perimeter.toFixed(2)} units`
        ];

        props.forEach((prop, index) => {
            ctx.fillText(prop, 10, 50 + index * 15);
        });
    }
    const EndSection10 = "close"

// ==================== SQUARE METHODS ====================
    
    /**
     * Parse square input
     */
    parseSquareInput(input) {
        // Pattern 1: square (x,y) side
        const pattern1 = /square\s*\(([^,]+),([^)]+)\)\s*([^\s]+)/i;
        const match1 = input.match(pattern1);
        if (match1) {
            return {
                corner: { x: parseFloat(match1[1]), y: parseFloat(match1[2]) },
                side: parseFloat(match1[3])
            };
        }

        // Pattern 2: square x,y,side
        const pattern2 = /square\s*([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+)/i;
        const match2 = input.match(pattern2);
        if (match2) {
            return {
                corner: { x: parseFloat(match2[1]), y: parseFloat(match2[2]) },
                side: parseFloat(match2[3])
            };
        }

        return null;
    }

    /**
     * Calculate square properties
     */
    calculateSquareProperties(corner, side) {
        const area = side * side;
        const perimeter = 4 * side;
        const diagonal = side * Math.sqrt(2);

        return {
            corner,
            side,
            area,
            perimeter,
            diagonal,
            vertices: {
                A: corner,
                B: { x: corner.x + side, y: corner.y },
                C: { x: corner.x + side, y: corner.y + side },
                D: { x: corner.x, y: corner.y + side }
            }
        };
    }

    /**
     * Add square
     */
    addSquare(input) {
        const squareData = this.parseSquareInput(input);

        if (!squareData) {
            console.log("❌ Invalid square format!");
            console.log("💡 Examples:");
            console.log("  • square (0,0) 4");
            console.log("  • square 1,1,3");
            return false;
        }

        const { corner, side } = squareData;

        if (isNaN(corner.x) || isNaN(corner.y) || isNaN(side) || side <= 0) {
            console.log("❌ Invalid values! Side must be positive.");
            return false;
        }

        const squareProps = this.calculateSquareProperties(corner, side);

        this.squareCounter++;
        this.squareHistory.push({
            id: this.squareCounter,
            input: input,
            properties: squareProps
        });

        this.displaySquareAnalysis(squareProps);
        this.saveIndividualSquare(squareProps);

        return true;
    }

    /**
     * Display square analysis
     */
    displaySquareAnalysis(props) {
        const { corner, side, area, perimeter, diagonal, vertices } = props;

        console.log(`\n▢ SQUARE ANALYSIS`);
        console.log("=".repeat(50));

        console.log(`📍 Vertices:`);
        console.log(`   A: (${vertices.A.x}, ${vertices.A.y}) - Bottom-left`);
        console.log(`   B: (${vertices.B.x}, ${vertices.B.y}) - Bottom-right`);
        console.log(`   C: (${vertices.C.x}, ${vertices.C.y}) - Top-right`);
        console.log(`   D: (${vertices.D.x}, ${vertices.D.y}) - Top-left`);

        console.log(`\n📏 Measurements:`);
        console.log(`   Side: ${side.toFixed(3)} units`);
        console.log(`   Diagonal: ${diagonal.toFixed(3)} units (${side.toFixed(2)}√2)`);
        console.log(`   Area: ${area.toFixed(3)} square units`);
        console.log(`   Perimeter: ${perimeter.toFixed(3)} units`);

        console.log(`\n📊 Properties:`);
        console.log(`   All angles: 90°`);
        console.log(`   All sides equal`);
        console.log(`   Diagonals bisect at 90°`);

        console.log("=".repeat(50));
    }

    /**
     * Save individual square graph
     */
    async saveIndividualSquare(squareProps) {
        try {
            const buffer = await this.createSquareGraph(squareProps);
            const { corner, side } = squareProps;

            const filename = `square_${String(this.squareCounter).padStart(3, '0')}_${corner.x}_${corner.y}_side${side}.png`;
            const filepath = path.join('./temp', filename);

            if (!fs.existsSync('./temp')) {
                fs.mkdirSync('./temp', { recursive: true });
            }

            fs.writeFileSync(filepath, buffer);
            console.log(`💾 Square graph saved: ${filename}`);
        } catch (error) {
            console.error("❌ Error saving square graph:", error);
        }
    }

    /**
     * Create square graph
     */
    async createSquareGraph(squareProps) {
        const canvas = createCanvas(this.calculator.width, this.calculator.height);
        const ctx = canvas.getContext("2d");

        await this.calculator.drawGraph(ctx);
        this.drawSquare(ctx, squareProps);

        return canvas.toBuffer("image/png");
    }

    /**
     * Draw square
     */
    drawSquare(ctx, squareProps) {
        const { vertices, side, area, perimeter, diagonal } = squareProps;

        const screenA = this.calculator.graphToScreen(vertices.A.x, vertices.A.y);
        const screenB = this.calculator.graphToScreen(vertices.B.x, vertices.B.y);
        const screenC = this.calculator.graphToScreen(vertices.C.x, vertices.C.y);
        const screenD = this.calculator.graphToScreen(vertices.D.x, vertices.D.y);

        // Draw square
        ctx.strokeStyle = '#ff0000';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(screenA[0], screenA[1]);
        ctx.lineTo(screenB[0], screenB[1]);
        ctx.lineTo(screenC[0], screenC[1]);
        ctx.lineTo(screenD[0], screenD[1]);
        ctx.closePath();
        ctx.stroke();

        // Draw diagonals
        ctx.strokeStyle = '#00aa00';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(screenA[0], screenA[1]);
        ctx.lineTo(screenC[0], screenC[1]);
        ctx.moveTo(screenB[0], screenB[1]);
        ctx.lineTo(screenD[0], screenD[1]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Draw vertices
        [screenA, screenB, screenC, screenD].forEach((screen, i) => {
            ctx.fillStyle = '#0066ff';
            ctx.beginPath();
            ctx.arc(screen[0], screen[1], 5, 0, 2 * Math.PI);
            ctx.fill();
        });

        // Title and properties
        ctx.fillStyle = 'black';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(`Square`, 10, 25);

        ctx.font = '12px Arial';
        const props = [
            `Side: ${side.toFixed(2)} units`,
            `Diagonal: ${diagonal.toFixed(2)} units`,
            `Area: ${area.toFixed(2)} sq units`,
            `Perimeter: ${perimeter.toFixed(2)} units`
        ];

        props.forEach((prop, index) => {
            ctx.fillText(prop, 10, 50 + index * 15);
        });
    }
    const EndSection11 = "close"

    // ==================== PARALLELOGRAM METHODS ====================
    
    /**
     * Parse parallelogram input
     */
    parseParallelogramInput(input) {
        // Pattern 1: parallelogram (x,y) base side height
        const pattern1 = /parallelogram\s*\(([^,]+),([^)]+)\)\s*([^\s]+)\s*([^\s]+)\s*([^\s]+)/i;
        const match1 = input.match(pattern1);
        if (match1) {
            return {
                corner: { x: parseFloat(match1[1]), y: parseFloat(match1[2]) },
                base: parseFloat(match1[3]),
                side: parseFloat(match1[4]),
                height: parseFloat(match1[5])
            };
        }

        // Pattern 2: parallelogram x,y,base,side,height
        const pattern2 = /parallelogram\s*([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+)/i;
        const match2 = input.match(pattern2);
        if (match2) {
            return {
                corner: { x: parseFloat(match2[1]), y: parseFloat(match2[2]) },
                base: parseFloat(match2[3]),
                side: parseFloat(match2[4]),
                height: parseFloat(match2[5])
            };
        }

        return null;
    }

    /**
     * Calculate parallelogram properties
     */
    calculateParallelogramProperties(corner, base, side, height) {
        const area = base * height;
        const perimeter = 2 * (base + side);
        
        // Calculate angle using height and side
        const angle = Math.asin(height / side) * (180 / Math.PI);
        const complementaryAngle = 180 - angle;

        // Calculate offset for parallelogram shape
        const offset = Math.sqrt(side * side - height * height);

        return {
            corner,
            base,
            side,
            height,
            area,
            perimeter,
            angles: {
                acute: angle,
                obtuse: complementaryAngle
            },
            vertices: {
                A: corner,
                B: { x: corner.x + base, y: corner.y },
                C: { x: corner.x + base + offset, y: corner.y + height },
                D: { x: corner.x + offset, y: corner.y + height }
            }
        };
    }

    /**
     * Add parallelogram
     */
    addParallelogram(input) {
        const paraData = this.parseParallelogramInput(input);

        if (!paraData) {
            console.log("❌ Invalid parallelogram format!");
            console.log("💡 Examples:");
            console.log("  • parallelogram (0,0) 5 4 3");
            console.log("  • parallelogram 1,1,6,3,2");
            return false;
        }

        const { corner, base, side, height } = paraData;

        if (isNaN(corner.x) || isNaN(corner.y) || isNaN(base) || isNaN(side) || isNaN(height) || 
            base <= 0 || side <= 0 || height <= 0 || height > side) {
            console.log("❌ Invalid values! Height must be less than or equal to side length.");
            return false;
        }

        const paraProps = this.calculateParallelogramProperties(corner, base, side, height);

        this.parallelogramCounter++;
        this.parallelogramHistory.push({
            id: this.parallelogramCounter,
            input: input,
            properties: paraProps
        });

        this.displayParallelogramAnalysis(paraProps);
        this.saveIndividualParallelogram(paraProps);

        return true;
    }

    /**
     * Display parallelogram analysis
     */
    displayParallelogramAnalysis(props) {
        const { corner, base, side, height, area, perimeter, angles, vertices } = props;

        console.log(`\n▱ PARALLELOGRAM ANALYSIS`);
        console.log("=".repeat(50));

        console.log(`📍 Vertices:`);
        console.log(`   A: (${vertices.A.x.toFixed(2)}, ${vertices.A.y.toFixed(2)}) - Bottom-left`);
        console.log(`   B: (${vertices.B.x.toFixed(2)}, ${vertices.B.y.toFixed(2)}) - Bottom-right`);
        console.log(`   C: (${vertices.C.x.toFixed(2)}, ${vertices.C.y.toFixed(2)}) - Top-right`);
        console.log(`   D: (${vertices.D.x.toFixed(2)}, ${vertices.D.y.toFixed(2)}) - Top-left`);

        console.log(`\n📏 Measurements:`);
        console.log(`   Base: ${base.toFixed(3)} units`);
        console.log(`   Side: ${side.toFixed(3)} units`);
        console.log(`   Height: ${height.toFixed(3)} units`);
        console.log(`   Area: ${area.toFixed(3)} square units`);
        console.log(`   Perimeter: ${perimeter.toFixed(3)} units`);

        console.log(`\n📐 Angles:`);
        console.log(`   Acute angles: ${angles.acute.toFixed(1)}°`);
        console.log(`   Obtuse angles: ${angles.obtuse.toFixed(1)}°`);

        console.log(`\n📊 Properties:`);
        console.log(`   Opposite sides parallel and equal`);
        console.log(`   Opposite angles equal`);
        console.log(`   Adjacent angles supplementary`);

        console.log("=".repeat(50));
    }

    /**
     * Save individual parallelogram graph
     */
    async saveIndividualParallelogram(paraProps) {
        try {
            const buffer = await this.createParallelogramGraph(paraProps);
            const { corner, base, side, height } = paraProps;

            const filename = `parallelogram_${String(this.parallelogramCounter).padStart(3, '0')}_${corner.x}_${corner.y}_b${base}_s${side}_h${height}.png`;
            const filepath = path.join('./temp', filename);

            if (!fs.existsSync('./temp')) {
                fs.mkdirSync('./temp', { recursive: true });
            }

            fs.writeFileSync(filepath, buffer);
            console.log(`💾 Parallelogram graph saved: ${filename}`);
        } catch (error) {
            console.error("❌ Error saving parallelogram graph:", error);
        }
    }

    /**
     * Create parallelogram graph
     */
    async createParallelogramGraph(paraProps) {
        const canvas = createCanvas(this.calculator.width, this.calculator.height);
        const ctx = canvas.getContext("2d");

        await this.calculator.drawGraph(ctx);
        this.drawParallelogram(ctx, paraProps);

        return canvas.toBuffer("image/png");
    }

    /**
     * Draw parallelogram
     */
    drawParallelogram(ctx, paraProps) {
        const { vertices, base, side, height, area, perimeter, angles } = paraProps;

        const screenA = this.calculator.graphToScreen(vertices.A.x, vertices.A.y);
        const screenB = this.calculator.graphToScreen(vertices.B.x, vertices.B.y);
        const screenC = this.calculator.graphToScreen(vertices.C.x, vertices.C.y);
        const screenD = this.calculator.graphToScreen(vertices.D.x, vertices.D.y);

        // Draw parallelogram
        ctx.strokeStyle = '#ff0000';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(screenA[0], screenA[1]);
        ctx.lineTo(screenB[0], screenB[1]);
        ctx.lineTo(screenC[0], screenC[1]);
        ctx.lineTo(screenD[0], screenD[1]);
        ctx.closePath();
        ctx.stroke();

        // Draw height line
        ctx.strokeStyle = '#00aa00';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(screenD[0], screenD[1]);
        ctx.lineTo(screenD[0], screenA[1]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Draw vertices
        [screenA, screenB, screenC, screenD].forEach((screen, i) => {
            ctx.fillStyle = '#0066ff';
            ctx.beginPath();
            ctx.arc(screen[0], screen[1], 5, 0, 2 * Math.PI);
            ctx.fill();
        });

        // Title and properties
        ctx.fillStyle = 'black';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(`Parallelogram`, 10, 25);

        ctx.font = '12px Arial';
        const props = [
            `Base: ${base.toFixed(2)} units`,
            `Side: ${side.toFixed(2)} units`,
            `Height: ${height.toFixed(2)} units`,
            `Area: ${area.toFixed(2)} sq units`,
            `Perimeter: ${perimeter.toFixed(2)} units`,
            `Angles: ${angles.acute.toFixed(1)}° and ${angles.obtuse.toFixed(1)}°`
        ];

        props.forEach((prop, index) => {
            ctx.fillText(prop, 10, 50 + index * 15);
        });
    }
    const EndSection12 = "close"

// ==================== POLYGON METHODS ====================
    
    /**
     * Parse polygon input
     */
    parsePolygonInput(input) {
        // Pattern 1: polygon n sides (x,y) side
        const pattern1 = /polygon\s*(\d+)\s*sides\s*\(([^,]+),([^)]+)\)\s*([^\s]+)/i;
        const match1 = input.match(pattern1);
        if (match1) {
            return {
                n: parseInt(match1[1]),
                center: { x: parseFloat(match1[2]), y: parseFloat(match1[3]) },
                side: parseFloat(match1[4])
            };
        }

        // Pattern 2: polygon n,x,y,side
        const pattern2 = /polygon\s*(\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+)/i;
        const match2 = input.match(pattern2);
        if (match2) {
            return {
                n: parseInt(match2[1]),
                center: { x: parseFloat(match2[2]), y: parseFloat(match2[3]) },
                side: parseFloat(match2[4])
            };
        }

        return null;
    }

    /**
     * Calculate polygon properties
     */
    calculatePolygonProperties(n, center, side) {
        // Calculate radius (circumradius) from side length
        const radius = side / (2 * Math.sin(Math.PI / n));
        
        // Calculate area
        const area = (n * side * side) / (4 * Math.tan(Math.PI / n));
        
        // Calculate perimeter
        const perimeter = n * side;
        
        // Calculate interior angle
        const interiorAngle = ((n - 2) * 180) / n;
        
        // Calculate exterior angle
        const exteriorAngle = 360 / n;

        // Calculate vertices
        const vertices = [];
        for (let i = 0; i < n; i++) {
            const angle = (2 * Math.PI * i) / n - Math.PI / 2; // Start from top
            vertices.push({
                x: center.x + radius * Math.cos(angle),
                y: center.y + radius * Math.sin(angle)
            });
        }

        return {
            n,
            center,
            side,
            radius,
            area,
            perimeter,
            interiorAngle,
            exteriorAngle,
            vertices
        };
    }

    /**
     * Add polygon
     */
    addPolygon(input) {
        const polyData = this.parsePolygonInput(input);

        if (!polyData) {
            console.log("❌ Invalid polygon format!");
            console.log("💡 Examples:");
            console.log("  • polygon 5 sides (0,0) 2");
            console.log("  • polygon 6,1,1,3");
            return false;
        }

        const { n, center, side } = polyData;

        if (isNaN(center.x) || isNaN(center.y) || isNaN(side) || side <= 0 || n < 3) {
            console.log("❌ Invalid values! Side must be positive and n must be at least 3.");
            return false;
        }

        const polyProps = this.calculatePolygonProperties(n, center, side);

        this.polygonCounter++;
        this.polygonHistory.push({
            id: this.polygonCounter,
            input: input,
            properties: polyProps
        });

        this.displayPolygonAnalysis(polyProps);
        this.saveIndividualPolygon(polyProps);

        return true;
    }

    /**
     * Display polygon analysis
     */
    displayPolygonAnalysis(props) {
        const { n, center, side, radius, area, perimeter, interiorAngle, exteriorAngle } = props;

        const polygonNames = {
            3: "Triangle", 4: "Quadrilateral", 5: "Pentagon", 6: "Hexagon",
            7: "Heptagon", 8: "Octagon", 9: "Nonagon", 10: "Decagon",
            11: "Hendecagon", 12: "Dodecagon"
        };
        const name = polygonNames[n] || `${n}-gon`;

        console.log(`\n⬡ ${n}-SIDED POLYGON (${name.toUpperCase()}) ANALYSIS`);
        console.log("=".repeat(50));

        console.log(`📍 Center: (${center.x}, ${center.y})`);
        console.log(`   Number of sides: ${n}`);

        console.log(`\n📏 Measurements:`);
        console.log(`   Side length: ${side.toFixed(3)} units`);
        console.log(`   Radius (circumradius): ${radius.toFixed(3)} units`);
        console.log(`   Area: ${area.toFixed(3)} square units`);
        console.log(`   Perimeter: ${perimeter.toFixed(3)} units`);

        console.log(`\n📐 Angles:`);
        console.log(`   Interior angle: ${interiorAngle.toFixed(1)}°`);
        console.log(`   Exterior angle: ${exteriorAngle.toFixed(1)}°`);
        console.log(`   Sum of interior angles: ${((n - 2) * 180).toFixed(1)}°`);

        console.log(`\n📊 Properties:`);
        console.log(`   Regular ${name.toLowerCase()} (all sides and angles equal)`);
        console.log(`   ${n} lines of symmetry`);
        console.log(`   Rotational symmetry of order ${n}`);

        console.log("=".repeat(50));
    }

    /**
     * Save individual polygon graph
     */
    async saveIndividualPolygon(polyProps) {
        try {
            const buffer = await this.createPolygonGraph(polyProps);
            const { n, center, side } = polyProps;

            const filename = `polygon_${String(this.polygonCounter).padStart(3, '0')}_${n}sides_${center.x}_${center.y}_s${side}.png`;
            const filepath = path.join('./temp', filename);

            if (!fs.existsSync('./temp')) {
                fs.mkdirSync('./temp', { recursive: true });
            }

            fs.writeFileSync(filepath, buffer);
            console.log(`💾 Polygon graph saved: ${filename}`);
        } catch (error) {
            console.error("❌ Error saving polygon graph:", error);
        }
    }

    /**
     * Create polygon graph
     */
    async createPolygonGraph(polyProps) {
        const canvas = createCanvas(this.calculator.width, this.calculator.height);
        const ctx = canvas.getContext("2d");

        await this.calculator.drawGraph(ctx);
        this.drawPolygon(ctx, polyProps);

        return canvas.toBuffer("image/png");
    }

    /**
     * Draw polygon
     */
    drawPolygon(ctx, polyProps) {
        const { n, vertices, center, side, area, perimeter, interiorAngle, radius } = polyProps;

        const screenVertices = vertices.map(v => this.calculator.graphToScreen(v.x, v.y));
        const screenCenter = this.calculator.graphToScreen(center.x, center.y);

        // Draw polygon
        ctx.strokeStyle = '#ff0000';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(screenVertices[0][0], screenVertices[0][1]);
        for (let i = 1; i < screenVertices.length; i++) {
            ctx.lineTo(screenVertices[i][0], screenVertices[i][1]);
        }
        ctx.closePath();
        ctx.stroke();

        // Draw radius lines
        ctx.strokeStyle = '#00aa00';
        ctx.lineWidth = 1;
        ctx.setLineDash([5, 5]);
        screenVertices.forEach(screen => {
            ctx.beginPath();
            ctx.moveTo(screenCenter[0], screenCenter[1]);
            ctx.lineTo(screen[0], screen[1]);
            ctx.stroke();
        });
        ctx.setLineDash([]);

        // Draw center
        ctx.fillStyle = '#0066ff';
        ctx.beginPath();
        ctx.arc(screenCenter[0], screenCenter[1], 5, 0, 2 * Math.PI);
        ctx.fill();

        // Draw vertices
        screenVertices.forEach(screen => {
            ctx.fillStyle = '#ff6600';
            ctx.beginPath();
            ctx.arc(screen[0], screen[1], 4, 0, 2 * Math.PI);
            ctx.fill();
        });

        const polygonNames = {
            3: "Triangle", 4: "Quadrilateral", 5: "Pentagon", 6: "Hexagon",
            7: "Heptagon", 8: "Octagon", 9: "Nonagon", 10: "Decagon"
        };
        const name = polygonNames[n] || `${n}-gon`;

        // Title and properties
        ctx.fillStyle = 'black';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(`Regular ${name} (${n} sides)`, 10, 25);

        ctx.font = '12px Arial';
        const props = [
            `Side: ${side.toFixed(2)} units`,
            `Radius: ${radius.toFixed(2)} units`,
            `Area: ${area.toFixed(2)} sq units`,
            `Perimeter: ${perimeter.toFixed(2)} units`,
            `Interior angle: ${interiorAngle.toFixed(1)}°`
        ];

        props.forEach((prop, index) => {
            ctx.fillText(prop, 10, 50 + index * 15);
        });
    }
    const EndSection13 = "close"
    // ==================== ELLIPSE METHODS ====================
    
    /**
     * Parse ellipse input
     */
    parseEllipseInput(input) {
        // Pattern 1: ellipse center(x,y) a b
        const pattern1 = /ellipse\s*center\(([^,]+),([^)]+)\)\s*([^\s]+)\s*([^\s]+)/i;
        const match1 = input.match(pattern1);
        if (match1) {
            return {
                center: { x: parseFloat(match1[1]), y: parseFloat(match1[2]) },
                a: parseFloat(match1[3]),
                b: parseFloat(match1[4])
            };
        }

        // Pattern 2: ellipse (x,y) a b
        const pattern2 = /ellipse\s*\(([^,]+),([^)]+)\)\s*([^\s]+)\s*([^\s]+)/i;
        const match2 = input.match(pattern2);
        if (match2) {
            return {
                center: { x: parseFloat(match2[1]), y: parseFloat(match2[2]) },
                a: parseFloat(match2[3]),
                b: parseFloat(match2[4])
            };
        }

        // Pattern 3: ellipse x,y,a,b
        const pattern3 = /ellipse\s*([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+)/i;
        const match3 = input.match(pattern3);
        if (match3) {
            return {
                center: { x: parseFloat(match3[1]), y: parseFloat(match3[2]) },
                a: parseFloat(match3[3]),
                b: parseFloat(match3[4])
            };
        }

        return null;
    }

    /**
     * Calculate ellipse properties
     */
    calculateEllipseProperties(center, a, b) {
        // Ensure a >= b (a is semi-major axis)
        const semiMajor = Math.max(a, b);
        const semiMinor = Math.min(a, b);

        // Calculate area
        const area = Math.PI * a * b;

        // Calculate approximate perimeter (Ramanujan's approximation)
        const h = Math.pow((a - b), 2) / Math.pow((a + b), 2);
        const perimeter = Math.PI * (a + b) * (1 + (3 * h) / (10 + Math.sqrt(4 - 3 * h)));

        // Calculate eccentricity
        const eccentricity = Math.sqrt(1 - (semiMinor * semiMinor) / (semiMajor * semiMajor));

        // Calculate focal distance
        const c = Math.sqrt(semiMajor * semiMajor - semiMinor * semiMinor);

        return {
            center,
            a,
            b,
            semiMajor,
            semiMinor,
            area,
            perimeter,
            eccentricity,
            focalDistance: c,
            foci: a >= b ? [
                { x: center.x - c, y: center.y },
                { x: center.x + c, y: center.y }
            ] : [
                { x: center.x, y: center.y - c },
                { x: center.x, y: center.y + c }
            ]
        };
    }

    /**
     * Add ellipse
     */
    addEllipse(input) {
        const ellipseData = this.parseEllipseInput(input);

        if (!ellipseData) {
            console.log("❌ Invalid ellipse format!");
            console.log("💡 Examples:");
            console.log("  • ellipse center(0,0) 5 3");
            console.log("  • ellipse (1,1) 4 2");
            console.log("  • ellipse 0,0,6,4");
            return false;
        }

        const { center, a, b } = ellipseData;

        if (isNaN(center.x) || isNaN(center.y) || isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
            console.log("❌ Invalid values! Semi-axes must be positive.");
            return false;
        }

        const ellipseProps = this.calculateEllipseProperties(center, a, b);

        this.ellipseCounter++;
        this.ellipseHistory.push({
            id: this.ellipseCounter,
            input: input,
            properties: ellipseProps
        });

        this.displayEllipseAnalysis(ellipseProps);
        this.saveIndividualEllipse(ellipseProps);

        return true;
    }

    /**
     * Display ellipse analysis
     */
    displayEllipseAnalysis(props) {
        const { center, a, b, semiMajor, semiMinor, area, perimeter, eccentricity, focalDistance, foci } = props;

        console.log(`\n⬭ ELLIPSE ANALYSIS`);
        console.log("=".repeat(50));

        console.log(`📍 Center: (${center.x}, ${center.y})`);
        console.log(`\n📏 Measurements:`);
        console.log(`   Semi-major axis (a): ${semiMajor.toFixed(3)} units`);
        console.log(`   Semi-minor axis (b): ${semiMinor.toFixed(3)} units`);
        console.log(`   Area: ${area.toFixed(3)} square units`);
        console.log(`   Perimeter (approx): ${perimeter.toFixed(3)} units`);

        console.log(`\n📊 Properties:`);
        console.log(`   Eccentricity: ${eccentricity.toFixed(4)}`);
        console.log(`   Focal distance (c): ${focalDistance.toFixed(3)} units`);
        console.log(`   Focus 1: (${foci[0].x.toFixed(2)}, ${foci[0].y.toFixed(2)})`);
        console.log(`   Focus 2: (${foci[1].x.toFixed(2)}, ${foci[1].y.toFixed(2)})`);

        console.log(`\n📐 Classification:`);
        if (Math.abs(a - b) < 0.001) {
            console.log(`   ⭐ Special case: Circle (a = b)`);
        } else if (eccentricity < 0.5) {
            console.log(`   Nearly circular ellipse`);
        } else if (eccentricity > 0.9) {
            console.log(`   Highly elongated ellipse`);
        } else {
            console.log(`   Standard ellipse`);
        }

        console.log("=".repeat(50));
    }

    /**
     * Save individual ellipse graph
     */
    async saveIndividualEllipse(ellipseProps) {
        try {
            const buffer = await this.createEllipseGraph(ellipseProps);
            const { center, a, b } = ellipseProps;

            const filename = `ellipse_${String(this.ellipseCounter).padStart(3, '0')}_${center.x}_${center.y}_a${a}_b${b}.png`;
            const filepath = path.join('./temp', filename);

            if (!fs.existsSync('./temp')) {
                fs.mkdirSync('./temp', { recursive: true });
            }

            fs.writeFileSync(filepath, buffer);
            console.log(`💾 Ellipse graph saved: ${filename}`);
        } catch (error) {
            console.error("❌ Error saving ellipse graph:", error);
        }
    }

    /**
     * Create ellipse graph
     */
    async createEllipseGraph(ellipseProps) {
        const canvas = createCanvas(this.calculator.width, this.calculator.height);
        const ctx = canvas.getContext("2d");

        await this.calculator.drawGraph(ctx);
        this.drawEllipse(ctx, ellipseProps);

        return canvas.toBuffer("image/png");
    }

    /**
     * Draw ellipse
     */
    drawEllipse(ctx, ellipseProps) {
        const { center, a, b, area, perimeter, eccentricity, foci } = ellipseProps;

        const screenCenter = this.calculator.graphToScreen(center.x, center.y);
        const screenRadiusX = Math.abs(this.calculator.graphToScreen(a, 0)[0] - this.calculator.graphToScreen(0, 0)[0]);
        const screenRadiusY = Math.abs(this.calculator.graphToScreen(0, b)[1] - this.calculator.graphToScreen(0, 0)[1]);

        // Draw ellipse
        ctx.strokeStyle = '#ff0000';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.ellipse(screenCenter[0], screenCenter[1], screenRadiusX, screenRadiusY, 0, 0, 2 * Math.PI);
        ctx.stroke();

        // Draw center
        ctx.fillStyle = '#0066ff';
        ctx.beginPath();
        ctx.arc(screenCenter[0], screenCenter[1], 5, 0, 2 * Math.PI);
        ctx.fill();

        // Draw foci
        const screenFocus1 = this.calculator.graphToScreen(foci[0].x, foci[0].y);
        const screenFocus2 = this.calculator.graphToScreen(foci[1].x, foci[1].y);

        ctx.fillStyle = '#00aa00';
        ctx.beginPath();
        ctx.arc(screenFocus1[0], screenFocus1[1], 4, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(screenFocus2[0], screenFocus2[1], 4, 0, 2 * Math.PI);
        ctx.fill();

        // Draw axes
        ctx.strokeStyle = '#00aa00';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);// Major axis
        if (a >= b) {
            const screenLeft = this.calculator.graphToScreen(center.x - a, center.y);
            const screenRight = this.calculator.graphToScreen(center.x + a, center.y);
            ctx.beginPath();
            ctx.moveTo(screenLeft[0], screenLeft[1]);
            ctx.lineTo(screenRight[0], screenRight[1]);
            ctx.stroke();
        } else {
            const screenTop = this.calculator.graphToScreen(center.x, center.y + a);
            const screenBottom = this.calculator.graphToScreen(center.x, center.y - a);
            ctx.beginPath();
            ctx.moveTo(screenTop[0], screenTop[1]);
            ctx.lineTo(screenBottom[0], screenBottom[1]);
            ctx.stroke();
        }

        // Minor axis
        if (b < a) {
            const screenTop = this.calculator.graphToScreen(center.x, center.y + b);
            const screenBottom = this.calculator.graphToScreen(center.x, center.y - b);
            ctx.beginPath();
            ctx.moveTo(screenTop[0], screenTop[1]);
            ctx.lineTo(screenBottom[0], screenBottom[1]);
            ctx.stroke();
        } else {
            const screenLeft = this.calculator.graphToScreen(center.x - b, center.y);
            const screenRight = this.calculator.graphToScreen(center.x + b, center.y);
            ctx.beginPath();
            ctx.moveTo(screenLeft[0], screenLeft[1]);
            ctx.lineTo(screenRight[0], screenRight[1]);
            ctx.stroke();
        }

        ctx.setLineDash([]);

        // Title and properties
        ctx.fillStyle = 'black';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(`Ellipse`, 10, 25);

        ctx.font = '12px Arial';
        const props = [
            `Center: (${center.x}, ${center.y})`,
            `Semi-major axis: ${Math.max(a, b).toFixed(2)} units`,
            `Semi-minor axis: ${Math.min(a, b).toFixed(2)} units`,
            `Area: ${area.toFixed(2)} sq units`,
            `Perimeter: ${perimeter.toFixed(2)} units (approx)`,
            `Eccentricity: ${eccentricity.toFixed(3)}`
        ];

        props.forEach((prop, index) => {
            ctx.fillText(prop, 10, 50 + index * 15);
        });
    }
    const EndSection14 = "close"

// ==================== TRIANGLE METHODS (EXISTING) ====================

    /**
     * Parse triangle input from various formats
     */
    parseTriangleInput(input) {
        // Remove spaces and convert to lowercase for parsing
        const cleanInput = input.replace(/\s/g, '').toLowerCase();

        // Pattern 1: triangle A(x1,y1) B(x2,y2) C(x3,y3)
        const pattern1 = /triangle\s*a\(([^,]+),([^)]+)\)\s*b\(([^,]+),([^)]+)\)\s*c\(([^,]+),([^)]+)\)/i;
        const match1 = input.match(pattern1);

        if (match1) {
            return {
                A: { x: parseFloat(match1[1]), y: parseFloat(match1[2]) },
                B: { x: parseFloat(match1[3]), y: parseFloat(match1[4]) },
                C: { x: parseFloat(match1[5]), y: parseFloat(match1[6]) }
            };
        }

        // Pattern 2: triangle (x1,y1) (x2,y2) (x3,y3)
        const pattern2 = /triangle\s*\(([^,]+),([^)]+)\)\s*\(([^,]+),([^)]+)\)\s*\(([^,]+),([^)]+)\)/i;
        const match2 = input.match(pattern2);

        if (match2) {
            return {
                A: { x: parseFloat(match2[1]), y: parseFloat(match2[2]) },
                B: { x: parseFloat(match2[3]), y: parseFloat(match2[4]) },
                C: { x: parseFloat(match2[5]), y: parseFloat(match2[6]) }
            };
        }

        // Pattern 3: Simple coordinate list: triangle 0,0 4,0 2,3
        const pattern3 = /triangle\s*([-+]?\d*\.?\d+),([-+]?\d*\.?\d+)\s+([-+]?\d*\.?\d+),([-+]?\d*\.?\d+)\s+([-+]?\d*\.?\d+),([-+]?\d*\.?\d+)/i;
        const match3 = input.match(pattern3);

        if (match3) {
            return {
                A: { x: parseFloat(match3[1]), y: parseFloat(match3[2]) },
                B: { x: parseFloat(match3[3]), y: parseFloat(match3[4]) },
                C: { x: parseFloat(match3[5]), y: parseFloat(match3[6]) }
            };
        }

        return null;
    }

    /**
     * Check if three points are collinear
     */
    areCollinear(A, B, C) {
        // Using cross product method: points are collinear if cross product is 0
        const crossProduct = (B.x - A.x) * (C.y - A.y) - (B.y - A.y) * (C.x - A.x);
        return Math.abs(crossProduct) < 1e-10; // Account for floating point precision
    }

    /**
     * Calculate distance between two points
     */
    calculateDistance(p1, p2) {
        return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
    }

    /**
     * Calculate angle using law of cosines
     */
    calculateAngle(a, b, c) {
        // Using law of cosines: cos(C) = (a² + b² - c²) / (2ab)
        const cosAngle = (a * a + b * b - c * c) / (2 * a * b);
        // Clamp to [-1, 1] to handle floating point errors
        const clampedCos = Math.max(-1, Math.min(1, cosAngle));
        return Math.acos(clampedCos) * (180 / Math.PI); // Convert to degrees
    }

    /**
     * Classify triangle by sides
     */
    classifyBySides(sideA, sideB, sideC) {
        const sides = [sideA, sideB, sideC].sort((a, b) => a - b);
        const tolerance = 1e-10;

        if (Math.abs(sides[0] - sides[1]) < tolerance && Math.abs(sides[1] - sides[2]) < tolerance) {
            return "Equilateral";
        } else if (Math.abs(sides[0] - sides[1]) < tolerance ||
                   Math.abs(sides[1] - sides[2]) < tolerance ||
                   Math.abs(sides[0] - sides[2]) < tolerance) {
            return "Isosceles";
        } else {
            return "Scalene";
        }
    }

    /**
     * Classify triangle by angles
     */
    classifyByAngles(angleA, angleB, angleC) {
        const angles = [angleA, angleB, angleC];
        const tolerance = 1;

        if (angles.some(angle => Math.abs(angle - 90) < tolerance)) {
            return "Right";
        } else if (angles.every(angle => angle < 90)) {
            return "Acute";
        } else {
            return "Obtuse";
        }
    }

    /**
     * Calculate triangle properties
     */
    calculateTriangleProperties(A, B, C) {
        // Calculate side lengths
        const sideAB = this.calculateDistance(A, B); // side c
        const sideBC = this.calculateDistance(B, C); // side a
        const sideCA = this.calculateDistance(C, A); // side b

        // Calculate angles using law of cosines
        const angleA = this.calculateAngle(sideBC, sideCA, sideAB); // angle at A
        const angleB = this.calculateAngle(sideCA, sideAB, sideBC); // angle at B
        const angleC = this.calculateAngle(sideAB, sideBC, sideCA); // angle at C

        // Calculate area using cross product formula
        const area = 0.5 * Math.abs((B.x - A.x) * (C.y - A.y) - (C.x - A.x) * (B.y - A.y));

        // Calculate perimeter
        const perimeter = sideAB + sideBC + sideCA;

        // Classify triangle
        const sideClassification = this.classifyBySides(sideAB, sideBC, sideCA);
        const angleClassification = this.classifyByAngles(angleA, angleB, angleC);

        return {
            vertices: { A, B, C },
            sides: {
                AB: sideAB,
                BC: sideBC,
                CA: sideCA
            },
            angles: {
                A: angleA,
                B: angleB,
                C: angleC
            },
            area,
            perimeter,
            classifications: {
                sides: sideClassification,
                angles: angleClassification,
                full: `${sideClassification} ${angleClassification}`
            }
        };
    }

    /**
     * Add triangle to the calculator
     */
    addTriangle(input) {
        const points = this.parseTriangleInput(input);

        if (!points) {
            console.log("❌ Invalid triangle format!");
            console.log("💡 Examples:");
            console.log("  • triangle A(0,0) B(4,0) C(2,3)");
            console.log("  • triangle (0,0) (4,0) (2,3)");
            console.log("  • triangle 0,0 4,0 2,3");
            return false;
        }

        const { A, B, C } = points;

        // Check if points are valid numbers
        if ([A.x, A.y, B.x, B.y, C.x, C.y].some(val => isNaN(val))) {
            console.log("❌ Invalid coordinates! Please use numbers only.");
            return false;
        }

        // Check if points are collinear
        if (this.areCollinear(A, B, C)) {
            console.log("❌ Points are collinear! Cannot form a triangle.");
            console.log(`Points: A(${A.x}, ${A.y}), B(${B.x}, ${B.y}), C(${C.x}, ${C.y})`);
            return false;
        }

        // Calculate triangle properties
        const triangleProps = this.calculateTriangleProperties(A, B, C);

        this.triangleCounter++;
        this.triangleHistory.push({
            id: this.triangleCounter,
            input: input,
            properties: triangleProps
        });

        // Display triangle analysis
        this.displayTriangleAnalysis(triangleProps);

        // Create individual triangle graph
        this.saveIndividualTriangle(triangleProps);

        return true;
    }

    /**
     * Display detailed triangle analysis
     */
    displayTriangleAnalysis(props) {
        const { vertices, sides, angles, area, perimeter, classifications } = props;

        console.log(`\n🔺 TRIANGLE ANALYSIS`);
        console.log("=".repeat(50));

        // Vertices
        console.log(`📍 Vertices:`);
        console.log(`   A: (${vertices.A.x}, ${vertices.A.y})`);
        console.log(`   B: (${vertices.B.x}, ${vertices.B.y})`);
        console.log(`   C: (${vertices.C.x}, ${vertices.C.y})`);

        // Side lengths
        console.log(`\n📏 Side Lengths:`);
        console.log(`   AB = ${sides.AB.toFixed(3)} units`);
        console.log(`   BC = ${sides.BC.toFixed(3)} units`);
        console.log(`   CA = ${sides.CA.toFixed(3)} units`);

        // Angles
        console.log(`\n📐 Angles:`);
        console.log(`   ∠A = ${angles.A.toFixed(1)}°`);
        console.log(`   ∠B = ${angles.B.toFixed(1)}°`);
        console.log(`   ∠C = ${angles.C.toFixed(1)}°`);
        console.log(`   Sum = ${(angles.A + angles.B + angles.C).toFixed(1)}° ✓`);

        // Properties
        console.log(`\n📊 Properties:`);
        console.log(`   Area: ${area.toFixed(3)} square units`);
        console.log(`   Perimeter: ${perimeter.toFixed(3)} units`);

        // Classification
        console.log(`\n🏷️ Classification:`);
        console.log(`   By sides: ${classifications.sides} Triangle`);
        console.log(`   By angles: ${classifications.angles} Triangle`);
        console.log(`   Overall: ${classifications.full} Triangle`);

        // Special properties
        this.displaySpecialProperties(props);

        console.log("=".repeat(50));
    }

    /**
     * Display special triangle properties
     */
    displaySpecialProperties(props) {
        const { sides, angles, classifications } = props;
        const specialProps = [];

        // Check for right triangle properties
        if (classifications.angles === "Right") {
            const sortedSides = Object.values(sides).sort((a, b) => a - b);
            const [a, b, c] = sortedSides;
            const pythagorean = Math.abs(c * c - (a * a + b * b));

            if (pythagorean < 0.001) {
                specialProps.push(`✓ Pythagorean theorem: ${a.toFixed(2)}² + ${b.toFixed(2)}² = ${c.toFixed(2)}²`);
            }
        }

        // Check for special right triangles
        if (classifications.angles === "Right") {
            const sortedSides = Object.values(sides).sort((a, b) => a - b);
            const [a, b, c] = sortedSides;

            // 45-45-90 triangle
            if (Math.abs(a - b) < 0.001 && Math.abs(c - a * Math.sqrt(2)) < 0.001) {
                specialProps.push("🔺 Special: 45-45-90 Triangle");
            }

            // 30-60-90 triangle
            const ratio1 = c / a;
            const ratio2 = b / a;
            if (Math.abs(ratio1 - 2) < 0.001 && Math.abs(ratio2 - Math.sqrt(3)) < 0.001) {
                specialProps.push("🔺 Special: 30-60-90 Triangle");
            }
        }

        // Check for equilateral properties
        if (classifications.sides === "Equilateral") {
            specialProps.push("✓ All angles are 60°");
            specialProps.push("✓ All sides are equal");
        }

        // Check for isosceles properties
        if (classifications.sides === "Isosceles") {
            const anglesArray = Object.values(angles);
            const baseAngles = anglesArray.filter((angle, index, arr) =>
                arr.findIndex(a => Math.abs(a - angle) < 0.001) !== index ||
                arr.filter(a => Math.abs(a - angle) < 0.001).length > 1
            );
            if (baseAngles.length >= 2) {
                specialProps.push(`✓ Base angles: ${baseAngles[0].toFixed(1)}°`);
            }
        }

        if (specialProps.length > 0) {
            console.log(`\n⭐ Special Properties:`);
            specialProps.forEach(prop => console.log(`   ${prop}`));
        }
    }

    /**
     * Save individual triangle graph
     */
    async saveIndividualTriangle(triangleProps) {
        try {
            const buffer = await this.createTriangleGraph(triangleProps);
            const { vertices } = triangleProps;

            const filename = `triangle_${String(this.triangleCounter).padStart(3, '0')}_A${vertices.A.x}_${vertices.A.y}_B${vertices.B.x}_${vertices.B.y}_C${vertices.C.x}_${vertices.C.y}.png`;
            const filepath = path.join('./temp', filename);

            // Create directory if it doesn't exist
            if (!fs.existsSync('./temp')) {
                fs.mkdirSync('./temp', { recursive: true });
            }

            fs.writeFileSync(filepath, buffer);
            console.log(`💾 Triangle graph saved: ${filename}`);
        } catch (error) {
            console.error("❌ Error saving triangle graph:", error);
        }
    }

    /**
     * Create triangle graph with all details
     */
    async createTriangleGraph(triangleProps) {
        const canvas = createCanvas(this.calculator.width, this.calculator.height);
        const ctx = canvas.getContext("2d");

        // Draw basic grid and axes
        await this.calculator.drawGraph(ctx);

        // Draw triangle
        this.drawTriangle(ctx, triangleProps);

        return canvas.toBuffer("image/png");
    }

    /**
     * Draw triangle with all annotations
     */
    drawTriangle(ctx, triangleProps) {
        const { vertices, sides, angles, classifications } = triangleProps;
        const { A, B, C } = vertices;

        // Convert coordinates to screen coordinates
        const screenA = this.calculator.graphToScreen(A.x, A.y);
        const screenB = this.calculator.graphToScreen(B.x, B.y);
        const screenC = this.calculator.graphToScreen(C.x, C.y);

        // Draw triangle outline
        ctx.strokeStyle = '#ff0000';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(screenA[0], screenA[1]);
        ctx.lineTo(screenB[0], screenB[1]);
        ctx.lineTo(screenC[0], screenC[1]);
        ctx.closePath();
        ctx.stroke();

        // Draw vertices as circles
        const drawVertex = (screen, label, color = '#0066ff') => {
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(screen[0], screen[1], 6, 0, 2 * Math.PI);
            ctx.fill();

            // Label
            ctx.fillStyle = 'black';
            ctx.font = 'bold 14px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(label, screen[0], screen[1] - 15);
        };

        drawVertex(screenA, `A(${A.x}, ${A.y})`, '#ff0000');
        drawVertex(screenB, `B(${B.x}, ${B.y})`, '#00aa00');
        drawVertex(screenC, `C(${C.x}, ${C.y})`, '#0066ff');

        // Draw side length labels
        this.drawSideLabels(ctx, screenA, screenB, screenC, sides);

        // Draw angle labels
        this.drawAngleLabels(ctx, screenA, screenB, screenC, angles);

        // Draw title and classification
        ctx.fillStyle = 'black';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(`${classifications.full} Triangle`, 10, 25);

        // Draw properties
        ctx.font = '12px Arial';
        const props = [
            `Area: ${triangleProps.area.toFixed(2)} sq units`,
            `Perimeter: ${triangleProps.perimeter.toFixed(2)} units`,
            `Sides: AB=${sides.AB.toFixed(2)}, BC=${sides.BC.toFixed(2)}, CA=${sides.CA.toFixed(2)}`,
            `Angles: ∠A=${angles.A.toFixed(1)}°, ∠B=${angles.B.toFixed(1)}°, ∠C=${angles.C.toFixed(1)}°`
        ];

        props.forEach((prop, index) => {
            ctx.fillText(prop, 10, 50 + index * 15);
        });
    }

    /**
     * Draw side length labels
     */
    drawSideLabels(ctx, screenA, screenB, screenC, sides) {
        const drawSideLabel = (screen1, screen2, length, label) => {
            const midX = (screen1[0] + screen2[0]) / 2;
            const midY = (screen1[1] + screen2[1]) / 2;

            ctx.fillStyle = '#666666';
            ctx.font = '11px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(`${label}: ${length.toFixed(2)}`, midX, midY - 5);
        };

        drawSideLabel(screenA, screenB, sides.AB, 'AB');
        drawSideLabel(screenB, screenC, sides.BC, 'BC');
        drawSideLabel(screenC, screenA, sides.CA, 'CA');
    }

    /**
     * Draw angle labels
     */
    drawAngleLabels(ctx, screenA, screenB, screenC, angles) {
        ctx.fillStyle = '#333333';
        ctx.font = '10px Arial';
        ctx.textAlign = 'center';

        // Angle at A
        ctx.fillText(`${angles.A.toFixed(1)}°`, screenA[0] + 15, screenA[1] + 5);

        // Angle at B
        ctx.fillText(`${angles.B.toFixed(1)}°`, screenB[0] + 15, screenB[1] + 5);

        // Angle at C
        ctx.fillText(`${angles.C.toFixed(1)}°`, screenC[0] + 15, screenC[1] + 5);
    }

    // ==================== HELPER & UTILITY METHODS ====================

    /**
     * Get formula description
     */
    getFormulaDescription(equation) {
        const cleanEq = equation.replace(/\s/g, '');
        return this.formulaDatabase[cleanEq] || `Mathematical function: ${equation}`;
    }

    /**
     * Create a new calculator instance for each equation
     */
    createFreshCalculator() {
        return new GraphingCalculator({
            size: 480,
            theme: this.calculator.theme,
            xMin: this.calculator.xMin,
            xMax: this.calculator.xMax,
            yMin: this.calculator.yMin,
            yMax: this.calculator.yMax,
            showGrid: this.calculator.showGrid,
            showAxes: this.calculator.showAxes,
            backgroundColor: this.calculator.backgroundColor,
            gridColor: this.calculator.gridColor,
            axisColor: this.calculator.axisColor
        });
    }

    /**
     * Sanitize filename
     */
    sanitizeFilename(name) {
        return name.replace(/[^a-z0-9_\-]/gi, '_');
    }
    const EndSection15 = "close"

// ==================== VECTOR METHODS ====================

    /**
     * Parse vector input from various formats
     */
    parseVectorInput(input) {
        const cleanInput = input.replace(/\s/g, '').toLowerCase();

        // Pattern 1: vector A(x1,y1) B(x2,y2) - displacement vector
        const pattern1 = /vector\s*a\(([^,]+),([^)]+)\)\s*b\(([^,]+),([^)]+)\)/i;
        const match1 = input.match(pattern1);
        if (match1) {
            return {
                type: 'displacement',
                points: [
                    { x: parseFloat(match1[1]), y: parseFloat(match1[2]), label: 'A' },
                    { x: parseFloat(match1[3]), y: parseFloat(match1[4]), label: 'B' }
                ]
            };
        }

        // Pattern 2: vector (x1,y1) (x2,y2) - displacement vector
        const pattern2 = /vector\s*\(([^,]+),([^)]+)\)\s*\(([^,]+),([^)]+)\)/i;
        const match2 = input.match(pattern2);
        if (match2) {
            return {
                type: 'displacement',
                points: [
                    { x: parseFloat(match2[1]), y: parseFloat(match2[2]), label: 'Start' },
                    { x: parseFloat(match2[3]), y: parseFloat(match2[4]), label: 'End' }
                ]
            };
        }

        // Pattern 3: vectors A(x1,y1) B(x2,y2) C(x3,y3) - multiple vectors
        const pattern3 = /vectors?\s*a\(([^,]+),([^)]+)\)\s*b\(([^,]+),([^)]+)\)\s*c\(([^,]+),([^)]+)\)/i;
        const match3 = input.match(pattern3);
        if (match3) {
            return {
                type: 'multiple',
                points: [
                    { x: parseFloat(match3[1]), y: parseFloat(match3[2]), label: 'A' },
                    { x: parseFloat(match3[3]), y: parseFloat(match3[4]), label: 'B' },
                    { x: parseFloat(match3[5]), y: parseFloat(match3[6]), label: 'C' }
                ]
            };
        }

        // Pattern 4: vector <x,y> - component form
        const pattern4 = /vector\s*<([^,]+),([^>]+)>/i;
        const match4 = input.match(pattern4);
        if (match4) {
            return {
                type: 'component',
                components: { x: parseFloat(match4[1]), y: parseFloat(match4[2]) }
            };
        }

        // Pattern 5: 3D vector A(x1,y1,z1) B(x2,y2,z2)
        const pattern5 = /vector\s*a\(([^,]+),([^,]+),([^)]+)\)\s*b\(([^,]+),([^,]+),([^)]+)\)/i;
        const match5 = input.match(pattern5);
        if (match5) {
            return {
                type: 'displacement3d',
                points: [
                    { x: parseFloat(match5[1]), y: parseFloat(match5[2]), z: parseFloat(match5[3]), label: 'A' },
                    { x: parseFloat(match5[4]), y: parseFloat(match5[5]), z: parseFloat(match5[6]), label: 'B' }
                ]
            };
        }

        return null;
    }

    /**
     * Calculate displacement vector from two points
     */
    calculateDisplacementVector(point1, point2) {
        const vector = {
            components: {
                x: point2.x - point1.x,
                y: point2.y - point1.y,
                z: point2.z !== undefined ? point2.z - point1.z : undefined
            },
            startPoint: point1,
            endPoint: point2,
            is3D: point1.z !== undefined && point2.z !== undefined
        };

        // Calculate magnitude
        if (vector.is3D) {
            vector.magnitude = Math.sqrt(
                vector.components.x ** 2 +
                vector.components.y ** 2 +
                vector.components.z ** 2
            );
        } else {
            vector.magnitude = Math.sqrt(
                vector.components.x ** 2 +
                vector.components.y ** 2
            );
        }

        // Calculate direction angles
        vector.direction = this.calculateVectorDirection(vector.components, vector.is3D);

        // Calculate unit vector
        vector.unitVector = {
            x: vector.components.x / vector.magnitude,
            y: vector.components.y / vector.magnitude,
            z: vector.is3D ? vector.components.z / vector.magnitude : undefined
        };

        return vector;
    }

    /**
     * Calculate direction angles for vector
     */
    calculateVectorDirection(components, is3D = false) {
        const direction = {};

        if (is3D) {
            // Direction cosines and angles for 3D
            const magnitude = Math.sqrt(components.x ** 2 + components.y ** 2 + components.z ** 2);

            direction.cosines = {
                alpha: components.x / magnitude,
                beta: components.y / magnitude,
                gamma: components.z / magnitude
            };

            direction.angles = {
                alpha: Math.acos(direction.cosines.alpha) * (180 / Math.PI),
                beta: Math.acos(direction.cosines.beta) * (180 / Math.PI),
                gamma: Math.acos(direction.cosines.gamma) * (180 / Math.PI)
            };
        } else {
            // 2D direction
            direction.angle = Math.atan2(components.y, components.x) * (180 / Math.PI);
            direction.bearing = this.calculateBearing(components.x, components.y);

            // Quadrant
            if (components.x >= 0 && components.y >= 0) direction.quadrant = "I";
            else if (components.x < 0 && components.y >= 0) direction.quadrant = "II";
            else if (components.x < 0 && components.y < 0) direction.quadrant = "III";
            else direction.quadrant = "IV";
        }

        return direction;
    }

    /**
     * Calculate bearing (navigation angle)
     */
    calculateBearing(x, y) {
        let bearing = Math.atan2(x, y) * (180 / Math.PI);
        if (bearing < 0) bearing += 360;

        // Convert to compass bearing
        const compassQuadrant = Math.floor(bearing / 90);
        const compassAngle = bearing % 90;

        switch (compassQuadrant) {
            case 0: return `N${compassAngle.toFixed(1)}°E`;
            case 1: return `S${(90 - compassAngle).toFixed(1)}°E`;
            case 2: return `S${compassAngle.toFixed(1)}°W`;
            case 3: return `N${(90 - compassAngle).toFixed(1)}°W`;
            default: return `${bearing.toFixed(1)}°`;
        }
    }

    /**
     * Add two vectors
     */
    addVectors(vector1, vector2) {
        return {
            x: vector1.components.x + vector2.components.x,
            y: vector1.components.y + vector2.components.y,
            z: vector1.is3D && vector2.is3D ? (vector1.components.z || 0) + (vector2.components.z || 0) : undefined
        };
    }

    /**
     * Subtract two vectors
     */
    subtractVectors(vector1, vector2) {
        return {
            x: vector1.components.x - vector2.components.x,
            y: vector1.components.y - vector2.components.y,
            z: vector1.is3D && vector2.is3D ? (vector1.components.z || 0) - (vector2.components.z || 0) : undefined
        };
    }

    /**
     * Scalar multiplication
     */
    scalarMultiply(vector, scalar) {
        return {
            x: vector.components.x * scalar,
            y: vector.components.y * scalar,
            z: vector.is3D ? (vector.components.z || 0) * scalar : undefined
        };
    }

    /**
     * Dot product of two vectors
     */
    dotProduct(vector1, vector2) {
        let dot = vector1.components.x * vector2.components.x +
                  vector1.components.y * vector2.components.y;

        if (vector1.is3D && vector2.is3D) {
            dot += (vector1.components.z || 0) * (vector2.components.z || 0);
        }

        return dot;
    }

    /**
     * Cross product of two vectors (2D gives scalar, 3D gives vector)
     */
    crossProduct(vector1, vector2) {
        if (vector1.is3D && vector2.is3D) {
            // 3D cross product
            return {
                x: (vector1.components.y || 0) * (vector2.components.z || 0) -
                   (vector1.components.z || 0) * (vector2.components.y || 0),
                y: (vector1.components.z || 0) * (vector2.components.x || 0) -
                   (vector1.components.x || 0) * (vector2.components.z || 0),
                z: (vector1.components.x || 0) * (vector2.components.y || 0) -
                   (vector1.components.y || 0) * (vector2.components.x || 0)
            };
        } else {
            // 2D cross product (scalar)
            return vector1.components.x * vector2.components.y -
                   vector1.components.y * vector2.components.x;
        }
    }

    /**
     * Check if vectors are orthogonal
     */
    areVectorsOrthogonal(vector1, vector2, tolerance = 1e-10) {
        return Math.abs(this.dotProduct(vector1, vector2)) < tolerance;
    }

    /**
     * Check if vectors are parallel
     */
    areVectorsParallel(vector1, vector2, tolerance = 1e-10) {
        const cross = this.crossProduct(vector1, vector2);
        if (typeof cross === 'number') {
            return Math.abs(cross) < tolerance;
        } else {
            const crossMagnitude = Math.sqrt(cross.x ** 2 + cross.y ** 2 + cross.z ** 2);
            return crossMagnitude < tolerance;
        }
    }

    /**
     * Calculate angle between two vectors
     */
    angleBetweenVectors(vector1, vector2) {
        const dot = this.dotProduct(vector1, vector2);
        const angle = Math.acos(dot / (vector1.magnitude * vector2.magnitude));
        return angle * (180 / Math.PI);
    }

    /**
     * Draw vector arrow
     */
    drawVectorArrow(ctx, startScreen, endScreen, color = '#ff6600', label = '', showComponents = false) {
        const [startX, startY] = startScreen;
        const [endX, endY] = endScreen;

        // Calculate arrow direction
        const dx = endX - startX;
        const dy = endY - startY;
        const length = Math.sqrt(dx * dx + dy * dy);

        if (length < 1) return; // Too small to draw

        const unitX = dx / length;
        const unitY = dy / length;

        // Draw main line
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        // Draw arrowhead
        const arrowLength = this.vectorSettings.arrowSize;
        const arrowAngle = Math.PI / 6; // 30 degrees

        const arrow1X = endX - arrowLength * Math.cos(Math.atan2(dy, dx) - arrowAngle);
        const arrow1Y = endY - arrowLength * Math.sin(Math.atan2(dy, dx) - arrowAngle);
        const arrow2X = endX - arrowLength * Math.cos(Math.atan2(dy, dx) + arrowAngle);
        const arrow2Y = endY - arrowLength * Math.sin(Math.atan2(dy, dx) + arrowAngle);

        ctx.beginPath();
        ctx.moveTo(endX, endY);
        ctx.lineTo(arrow1X, arrow1Y);
        ctx.moveTo(endX, endY);
        ctx.lineTo(arrow2X, arrow2Y);
        ctx.stroke();

        // Draw label
        if (label) {
            ctx.fillStyle = color;
            ctx.font = 'bold 12px Arial';
            ctx.textAlign = 'center';
            const midX = (startX + endX) / 2;
            const midY = (startY + endY) / 2;
            ctx.fillText(label, midX + 15, midY - 5);
        }

        // Draw components if requested
        if (showComponents && this.vectorSettings.showComponents) {
            this.drawVectorComponents(ctx, startScreen, endScreen);
        }
    }

    /**
     * Draw vector components (x and y projections)
     */
    drawVectorComponents(ctx, startScreen, endScreen) {
        const [startX, startY] = startScreen;
        const [endX, endY] = endScreen;

        // X component (horizontal)
        ctx.strokeStyle = this.vectorSettings.componentColor;
        ctx.lineWidth = 1;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, startY);
        ctx.stroke();

        // Y component (vertical)
        ctx.beginPath();
        ctx.moveTo(endX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        ctx.setLineDash([]); // Reset line dash

        // Component labels
        ctx.fillStyle = this.vectorSettings.componentColor;
        ctx.font = '10px Arial';
        ctx.textAlign = 'center';

        // X component label
        const xCompMid = (startX + endX) / 2;
        ctx.fillText(`x: ${(endX - startX).toFixed(1)}`, xCompMid, startY - 5);

        // Y component label
        const yCompMid = (startY + endY) / 2;
        ctx.save();
        ctx.translate(endX + 15, yCompMid);
        ctx.rotate(-Math.PI / 2);
        ctx.fillText(`y: ${(endY - startY).toFixed(1)}`, 0, 0);
        ctx.restore();
    }

    /**
     * Draw complete vector analysis
     */
    drawVectorAnalysis(ctx, vectorData) {
        const { vectors, resultant, operations } = vectorData;

        // Draw grid using the calculator's method
        this.calculator.drawGrid(ctx);

        // Draw individual vectors
        vectors.forEach((vector, index) => {
            const colors = ['#ff6600', '#00aa00', '#0066ff', '#ff0066'];
            const color = colors[index % colors.length];

            const startScreen = this.calculator.graphToScreen(vector.startPoint.x, vector.startPoint.y);
            const endScreen = this.calculator.graphToScreen(vector.endPoint.x, vector.endPoint.y);

            this.drawVectorArrow(ctx, startScreen, endScreen, color,
                `v${index + 1}`, this.vectorSettings.showComponents);

            // Draw start and end points
            this.drawVectorPoint(ctx, startScreen, vector.startPoint.label || `Start${index + 1}`, '#333');
            this.drawVectorPoint(ctx, endScreen, vector.endPoint.label || `End${index + 1}`, color);
        });

        // Draw resultant if multiple vectors
        if (resultant) {
            const resultantStart = this.calculator.graphToScreen(0, 0);
            const resultantEnd = this.calculator.graphToScreen(resultant.x, resultant.y);
            this.drawVectorArrow(ctx, resultantStart, resultantEnd,
                this.vectorSettings.resultantColor, 'Resultant', false);
        }

        // Draw analysis information
        this.drawVectorInfo(ctx, vectorData);
    }

    /**
     * Draw point with label
     */
    drawVectorPoint(ctx, screen, label, color = '#333') {
        const [x, y] = screen;

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fill();

        ctx.fillStyle = 'black';
        ctx.font = '11px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(label, x, y - 10);
    }

    /**
     * Draw vector information panel
     */
    drawVectorInfo(ctx, vectorData) {
        const { vectors, operations } = vectorData;

        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.fillRect(10, 10, 280, vectors.length * 60 + 40);
        ctx.strokeStyle = '#ccc';
        ctx.strokeRect(10, 10, 280, vectors.length * 60 + 40);

        ctx.fillStyle = 'black';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'left';
        ctx.fillText('Vector Analysis', 20, 30);

        ctx.font = '11px Arial';
        let yOffset = 50;

        vectors.forEach((vector, index) => {
            const info = [
                `Vector ${index + 1}: <${vector.components.x.toFixed(2)}, ${vector.components.y.toFixed(2)}${vector.is3D ? `, ${vector.components.z.toFixed(2)}` : ''}>`,
                `Magnitude: ${vector.magnitude.toFixed(3)} units`,
                vector.is3D
                    ? `Angles: α=${vector.direction.angles.alpha.toFixed(1)}°, β=${vector.direction.angles.beta.toFixed(1)}°, γ=${vector.direction.angles.gamma.toFixed(1)}°`
                    : `Direction: ${vector.direction.angle?.toFixed(1)}°`,
                vector.is3D ? '' : `Bearing: ${vector.direction.bearing || 'N/A'}`
            ];

            info.forEach((line, lineIndex) => {
                if (line) ctx.fillText(line, 20, yOffset + lineIndex * 12);
            });

            yOffset += 60;
        });

        // Draw operations results
        if (operations && Object.keys(operations).length > 0) {
            ctx.font = 'bold 11px Arial';
            ctx.fillText('Operations:', 20, yOffset);
            yOffset += 15;

            ctx.font = '10px Arial';
            Object.entries(operations).forEach(([op, result]) => {
                if (typeof result === 'object' && result.x !== undefined) {
                    ctx.fillText(`${op}: <${result.x.toFixed(2)}, ${result.y.toFixed(2)}${result.z !== undefined ? `, ${result.z.toFixed(2)}` : ''}>`, 20, yOffset);
                } else if (typeof result === 'number') {
                    ctx.fillText(`${op}: ${result.toFixed(3)}${op.includes('Angle') ? '°' : ''}`, 20, yOffset);
                } else if (typeof result === 'boolean') {
                    ctx.fillText(`${op}: ${result ? 'Yes' : 'No'}`, 20, yOffset);
                }
                yOffset += 12;
            });
        }
    }

/**
     * Process vector input and create analysis
     */
    addVector(input) {
        const parsed = this.parseVectorInput(input);

        if (!parsed) {
            console.log("❌ Invalid vector format!");
            console.log("💡 Examples:");
            console.log("  • vector A(1,2) B(5,4)  → Displacement vector");
            console.log("  • vector (0,0) (3,4)   → Simple displacement");
            console.log("  • vector <3,4>          → Component form");
            console.log("  • vectors A(1,1) B(4,3) C(6,5)  → Multiple vectors");
            console.log("  • vector A(1,2,3) B(4,5,6)      → 3D vector");
            return false;
        }

        // Validate coordinates
        if (parsed.points) {
            if (parsed.points.some(p => isNaN(p.x) || isNaN(p.y) || (parsed.type === 'displacement3d' && isNaN(p.z)))) {
                console.log("❌ Invalid coordinates! Please use numbers only.");
                return false;
            }
        } else if (parsed.components) {
            if (isNaN(parsed.components.x) || isNaN(parsed.components.y)) {
                console.log("❌ Invalid components! Please use numbers only.");
                return false;
            }
        }

        let vectorData = { vectors: [], operations: {} };

        if (parsed.type === 'displacement' || parsed.type === 'displacement3d') {
            const vector = this.calculateDisplacementVector(parsed.points[0], parsed.points[1]);
            vectorData.vectors.push(vector);

        } else if (parsed.type === 'component') {
            const vector = {
                components: parsed.components,
                startPoint: { x: 0, y: 0, label: 'Origin' },
                endPoint: { x: parsed.components.x, y: parsed.components.y, label: 'End' },
                magnitude: Math.sqrt(parsed.components.x ** 2 + parsed.components.y ** 2),
                is3D: false
            };
            vector.direction = this.calculateVectorDirection(vector.components);
            vector.unitVector = {
                x: vector.components.x / vector.magnitude,
                y: vector.components.y / vector.magnitude
            };
            vectorData.vectors.push(vector);

        } else if (parsed.type === 'multiple') {
            // Create vectors from consecutive points
            for (let i = 0; i < parsed.points.length - 1; i++) {
                const vector = this.calculateDisplacementVector(parsed.points[i], parsed.points[i + 1]);
                vectorData.vectors.push(vector);
            }

            // Calculate vector operations for multiple vectors
            if (vectorData.vectors.length >= 2) {
                const v1 = vectorData.vectors[0];
                const v2 = vectorData.vectors[1];

                vectorData.operations = {
                    'Sum': this.addVectors(v1, v2),
                    'Difference': this.subtractVectors(v1, v2),
                    'Dot Product': this.dotProduct(v1, v2),
                    'Cross Product': this.crossProduct(v1, v2),
                    'Angle Between': this.angleBetweenVectors(v1, v2),
                    'Orthogonal': this.areVectorsOrthogonal(v1, v2),
                    'Parallel': this.areVectorsParallel(v1, v2)
                };

                // Calculate resultant
                vectorData.resultant = vectorData.operations['Sum'];
            }
        }

        this.vectorCounter++;
        this.vectorHistory.push({
            id: this.vectorCounter,
            input: input,
            data: vectorData
        });

        // Display analysis
        this.displayVectorAnalysis(vectorData);

        // Save graph
        this.saveVectorGraph(vectorData);

        return true;
    }

    /**
     * Display comprehensive vector analysis
     */
    displayVectorAnalysis(vectorData) {
        const { vectors, operations, resultant } = vectorData;

        console.log(`\n➡️  VECTOR ANALYSIS`);
        console.log("=".repeat(60));

        vectors.forEach((vector, index) => {
            console.log(`\n📐 Vector ${index + 1}:`);
            console.log(`   From: ${vector.startPoint.label}(${vector.startPoint.x}, ${vector.startPoint.y}${vector.is3D ? `, ${vector.startPoint.z}` : ''})`);
            console.log(`   To:   ${vector.endPoint.label}(${vector.endPoint.x}, ${vector.endPoint.y}${vector.is3D ? `, ${vector.endPoint.z}` : ''})`);
            console.log(`   Components: <${vector.components.x.toFixed(3)}, ${vector.components.y.toFixed(3)}${vector.is3D ? `, ${vector.components.z.toFixed(3)}` : ''}>`);
            console.log(`   Magnitude: ${vector.magnitude.toFixed(4)} units`);

            if (vector.is3D) {
                console.log(`   Direction Angles: α=${vector.direction.angles.alpha.toFixed(1)}°, β=${vector.direction.angles.beta.toFixed(1)}°, γ=${vector.direction.angles.gamma.toFixed(1)}°`);
                console.log(`   Direction Cosines: <${vector.direction.cosines.alpha.toFixed(4)}, ${vector.direction.cosines.beta.toFixed(4)}, ${vector.direction.cosines.gamma.toFixed(4)}>`);
            } else {
                console.log(`   Direction: ${vector.direction.angle.toFixed(1)}° (${vector.direction.quadrant})`);
                console.log(`   Bearing: ${vector.direction.bearing}`);
            }

            console.log(`   Unit Vector: <${vector.unitVector.x.toFixed(4)}, ${vector.unitVector.y.toFixed(4)}${vector.is3D ? `, ${vector.unitVector.z.toFixed(4)}` : ''}>`);
        });

        if (operations && Object.keys(operations).length > 0) {
            console.log(`\n🔧 Vector Operations:`);
            Object.entries(operations).forEach(([op, result]) => {
                if (typeof result === 'object' && result.x !== undefined) {
                    console.log(`   ${op}: <${result.x.toFixed(3)}, ${result.y.toFixed(3)}${result.z !== undefined ? `, ${result.z.toFixed(3)}` : ''}>`);
                } else if (typeof result === 'number') {
                    console.log(`   ${op}: ${result.toFixed(4)}${op.includes('Angle') ? '°' : ''}`);
                } else if (typeof result === 'boolean') {
                    console.log(`   ${op}: ${result ? '✓ Yes' : '✗ No'}`);
                }
            });
        }

        if (resultant) {
            const resultantMag = Math.sqrt(resultant.x ** 2 + resultant.y ** 2 + (resultant.z || 0) ** 2);
            console.log(`\n📍 Resultant Vector:`);
            console.log(`   Components: <${resultant.x.toFixed(3)}, ${resultant.y.toFixed(3)}${resultant.z !== undefined ? `, ${resultant.z.toFixed(3)}` : ''}>`);
            console.log(`   Magnitude: ${resultantMag.toFixed(4)} units`);
        }

        console.log("=".repeat(60));
    }

    /**
     * Save vector graph
     */
    async saveVectorGraph(vectorData) {
        try {
            const canvas = createCanvas(this.calculator.width, this.calculator.height);
            const ctx = canvas.getContext('2d');

            this.drawVectorAnalysis(ctx, vectorData);

            const filename = `vector_${String(this.vectorCounter).padStart(3, '0')}_analysis.png`;
            const filepath = path.join('./temp', filename);

            if (!fs.existsSync('./temp')) {
                fs.mkdirSync('./temp', { recursive: true });
            }

            const buffer = canvas.toBuffer('image/png');
            fs.writeFileSync(filepath, buffer);

            console.log(`💾 Vector graph saved: ${filename}`);
        } catch (error) {
            console.error("❌ Error saving vector graph:", error);
        }
    }

    /**
     * Display vector history
     */
    displayVectorHistory() {
        console.log(`\n📜 Vector History (${this.vectorCounter} vectors)`);
        console.log("=".repeat(50));

        if (this.vectorHistory.length === 0) {
            console.log("No vectors added yet.");
            return;
        }

        this.vectorHistory.forEach(entry => {
            const { vectors } = entry.data;
            console.log(`${entry.id}. ${entry.input}`);
            vectors.forEach((vector, index) => {
                console.log(`   Vector ${index + 1}: <${vector.components.x.toFixed(2)}, ${vector.components.y.toFixed(2)}${vector.is3D ? `, ${vector.components.z.toFixed(2)}` : ''}> | Mag: ${vector.magnitude.toFixed(2)}`);
            });
            console.log("");
        });
    }

    /**
     * Toggle vector display settings
     */
    toggleVectorSettings() {
        console.log("\n🎛️ Vector Display Settings:");
        console.log(`   Show Components: ${this.vectorSettings.showComponents ? '✓ Enabled' : '✗ Disabled'}`);
        console.log(`   Show Magnitude: ${this.vectorSettings.showMagnitude ? '✓ Enabled' : '✗ Disabled'}`);
        console.log(`   Show Angle: ${this.vectorSettings.showAngle ? '✓ Enabled' : '✗ Disabled'}`);

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question("Enter setting to toggle (components/magnitude/angle) or 'cancel': ", (input) => {
            switch (input.toLowerCase()) {
                case 'components':
                    this.vectorSettings.showComponents = !this.vectorSettings.showComponents;
                    console.log(`Components display ${this.vectorSettings.showComponents ? 'enabled' : 'disabled'}`);
                    break;
                case 'magnitude':
                    this.vectorSettings.showMagnitude = !this.vectorSettings.showMagnitude;
                    console.log(`Magnitude display ${this.vectorSettings.showMagnitude ? 'enabled' : 'disabled'}`);
                    break;
                case 'angle':
                    this.vectorSettings.showAngle = !this.vectorSettings.showAngle;
                    console.log(`Angle display ${this.vectorSettings.showAngle ? 'enabled' : 'disabled'}`);
                    break;
                case 'cancel':
                    console.log("No changes made.");
                    break;
                default:
                    console.log("❌ Invalid setting. Use 'components', 'magnitude', 'angle', or 'cancel'.");
            }
            rl.close();
        });
    }
    const EndSection16 = "close"
/**
     * Parse linear equation to extract slope and intercept
     */
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

    /**
     * Parse quadratic equation to extract coefficients
     */
    parseQuadratic(equation) {
        const cleanEq = equation.replace(/\s/g, '').replace('y=', '');

        // Vertex form pattern: a(x-h)**2+k or a(x+h)**2+k
        const vertexPattern = /^([+-]?\d*\.?\d*)\(x([+-]\d+\.?\d*)\)\*\*2([+-]\d+\.?\d*)?$/;
        const vertexMatch = cleanEq.match(vertexPattern);

        if (vertexMatch) {
            let a = vertexMatch[1] || '1';
            if (a === '' || a === '+') a = '1';
            if (a === '-') a = '-1';
            a = parseFloat(a);

            const h = -parseFloat(vertexMatch[2]); // Note: negative because (x-h) form
            const k = vertexMatch[3] ? parseFloat(vertexMatch[3]) : 0;

            return { a, h, k, isQuadratic: true, form: 'vertex' };
        }

        // Standard form pattern: ax**2+bx+c
        const standardPatterns = [
            // Full form: ax**2+bx+c
            /^([+-]?\d*\.?\d*)\*?x\*\*2([+-]\d*\.?\d*)\*?x([+-]\d+\.?\d*)?$/,
            // No linear term: ax**2+c
            /^([+-]?\d*\.?\d*)\*?x\*\*2([+-]\d+\.?\d*)?$/,
            // Just x**2 with terms: x**2+bx+c
            /^x\*\*2([+-]\d*\.?\d*)\*?x([+-]\d+\.?\d*)?$/,
            // Just x**2 with constant: x**2+c
            /^x\*\*2([+-]\d+\.?\d*)?$/,
            // Just x**2
            /^x\*\*2$/
        ];

        for (let pattern of standardPatterns) {
            const match = cleanEq.match(pattern);
            if (match) {
                let a, b, c;

                if (pattern.source === '^x\\*\\*2$') {
                    // Just x**2
                    a = 1; b = 0; c = 0;
                } else if (pattern.source.includes('bx')) {
                    // Has linear term
                    a = match[1] || '1';
                    if (a === '' || a === '+') a = '1';
                    if (a === '-') a = '-1';
                    a = parseFloat(a);

                    b = match[2] || '0';
                    if (b === '+' || b === '') b = '1';
                    if (b === '-') b = '-1';
                    b = parseFloat(b);

                    c = match[3] ? parseFloat(match[3]) : 0;
                } else {
                    // No linear term or simple forms
                    if (match[1] !== undefined) {
                        a = match[1] || '1';
                        if (a === '' || a === '+') a = '1';
                        if (a === '-') a = '-1';
                        a = parseFloat(a);

                        b = 0;
                        c = match[2] ? parseFloat(match[2]) : 0;
                    } else {
                        // x**2 + constant form
                        a = 1;
                        b = 0;
                        c = match[1] ? parseFloat(match[1]) : 0;
                    }
                }

                // Convert to vertex form: h = -b/(2a), k = c - b²/(4a)
                const h = b !== 0 ? -b / (2 * a) : 0;
                const k = c - (b * b) / (4 * a);

                return { a, b, c, h, k, isQuadratic: true, form: 'standard' };
            }
        }

        return { isQuadratic: false };
    }

/**
     * Show key points for linear equations
     */
    showLinearPoints(equation, { slope, intercept }) {
        console.log(`📊 Linear Function Analysis:`);
        console.log(`   Slope (m) = ${slope}`);
        console.log(`   Y-intercept (c) = ${intercept}`);

        if (slope === 0) {
            console.log(`   Type: Horizontal line`);
        } else if (slope > 0) {
            console.log(`   Type: Increasing line`);
        } else {
            console.log(`   Type: Decreasing line`);
        }

        console.log(`📍 Key Points:`);

        // Calculate key points
        const keyXValues = [-3, -2, -1, 0, 1, 2, 3];
        keyXValues.forEach(x => {
            const y = slope * x + intercept;
            if (y >= this.calculator.yMin && y <= this.calculator.yMax &&
                x >= this.calculator.xMin && x <= this.calculator.xMax) {
                const marker = x === 0 ? ' ← Y-intercept' : '';
                console.log(`   (${x}, ${y})${marker}`);
            }
        });

        // Show y-intercept specifically
        console.log(`🎯 Y-intercept: (0, ${intercept})`);

        // Show x-intercept if it exists and is reasonable
        if (slope !== 0) {
            const xIntercept = -intercept / slope;
            if (xIntercept >= this.calculator.xMin && xIntercept <= this.calculator.xMax) {
                console.log(`🎯 X-intercept: (${xIntercept.toFixed(2)}, 0)`);
            }
        }
    }

    /**
     * Show key points for quadratic equations
     */
    showQuadraticPoints(equation, { a, h, k, form }) {
        console.log(`📊 Quadratic Function Analysis:`);
        console.log(`📐 Form: ${form === 'vertex' ? 'Vertex' : 'Standard'} form`);
        console.log(`📊 Coefficient a = ${a} (opens ${a > 0 ? 'upward' : 'downward'})`);
        console.log(`🎯 Vertex: (${h}, ${k})`);
        console.log(`📏 Axis of symmetry: x = ${h}`);
        console.log(`📍 Key Points:`);

        // Calculate key points around the vertex
        const keyXOffsets = [-2, -1, 0, 1, 2];
        keyXOffsets.forEach(offset => {
            const x = h + offset;
            const y = a * (x - h) * (x - h) + k;

            if (x >= this.calculator.xMin && x <= this.calculator.xMax &&
                y >= this.calculator.yMin && y <= this.calculator.yMax) {
                const marker = offset === 0 ? ' ← Vertex' : '';
                console.log(`   (${x}, ${y})${marker}`);
            }
        });

        // Show range information
        if (a > 0) {
            console.log(`📈 Range: y ≥ ${k} (minimum value: ${k})`);
        } else {
            console.log(`📈 Range: y ≤ ${k} (maximum value: ${k})`);
        }

        // Show discriminant info if in standard form
        if (form === 'standard') {
            const discriminant = (4 * a) * k - (h * h * 4 * a * a);
            if (discriminant > 0) {
                console.log(`🔄 X-intercepts: Two real roots`);
            } else if (discriminant === 0) {
                console.log(`🔄 X-intercept: One real root (touches x-axis)`);
            } else {
                console.log(`🔄 X-intercepts: No real roots (doesn't touch x-axis)`);
            }
        }
    }

    /**
     * Save individual graph for single equation with coordinate points marked
     */
    async saveIndividualGraph(equation, calculator) {
        try {
            // Create a custom version that marks coordinate points
            const buffer = await this.createGraphWithPoints(equation, calculator);

            const filename = `equation_${String(this.equationCounter).padStart(3, '0')}_${this.sanitizeFilename(equation)}.png`;
            const filepath = path.join('./temp', filename);

            // Create directory if it doesn't exist
            if (!fs.existsSync('./temp')) {
                fs.mkdirSync('./temp', { recursive: true });
            }

            fs.writeFileSync(filepath, buffer);
            console.log(`💾 Individual graph saved: ${filename}`);
        } catch (error) {
            console.error("❌ Error saving individual graph:", error);
        }
    }

/**
     * Draw linear function points with connecting line
     */
    drawLinearPoints(ctx, equation, { slope, intercept }, calculator) {
        // Generate points across the viewing window
        const points = [];
        const xMin = calculator.xMin;
        const xMax = calculator.xMax;

        // Create more points for smoother line
        const numPoints = 50;
        for (let i = 0; i <= numPoints; i++) {
            const x = xMin + (xMax - xMin) * i / numPoints;
            const y = slope * x + intercept;

            if (y >= calculator.yMin && y <= calculator.yMax) {
                const [screenX, screenY] = calculator.graphToScreen(x, y);
                points.push({ x, y, screenX, screenY });
            }
        }

        // Draw the connecting line first
        if (points.length > 1) {
            ctx.strokeStyle = '#ff0000';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(points[0].screenX, points[0].screenY);

            for (let i = 1; i < points.length; i++) {
                ctx.lineTo(points[i].screenX, points[i].screenY);
            }
            ctx.stroke();
        }

        // Mark specific coordinate points
        const keyXValues = [-3, -2, -1, 0, 1, 2, 3];
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';

        keyXValues.forEach(x => {
            const y = slope * x + intercept;

            if (x >= calculator.xMin && x <= calculator.xMax &&
                y >= calculator.yMin && y <= calculator.yMax) {

                const [screenX, screenY] = calculator.graphToScreen(x, y);

                // Draw point circle
                ctx.fillStyle = 'red';
                ctx.beginPath();
                ctx.arc(screenX, screenY, 4, 0, 2 * Math.PI);
                ctx.fill();

                // Draw coordinate label
                ctx.fillStyle = 'black';
                ctx.fillText(`(${x},${y})`, screenX, screenY - 15);
            }
        });

        // Highlight y-intercept with different color
        if (intercept >= calculator.yMin && intercept <= calculator.yMax &&
            0 >= calculator.xMin && 0 <= calculator.xMax) {
            const [screenX, screenY] = calculator.graphToScreen(0, intercept);
            ctx.fillStyle = 'blue';
            ctx.beginPath();
            ctx.arc(screenX, screenY, 6, 0, 2 * Math.PI);
            ctx.fill();

            ctx.fillStyle = 'blue';
            ctx.font = 'bold 14px Arial';
            ctx.fillText(`Y-int: (0,${intercept})`, screenX, screenY - 20);
        }
    }

    /**
     * Draw quadratic function points with parabola curve
     */
    drawQuadraticPoints(ctx, equation, { a, h, k }, calculator) {
        // Generate points for smooth parabola
        const points = [];
        const xMin = calculator.xMin;
        const xMax = calculator.xMax;

        const numPoints = 100;
        for (let i = 0; i <= numPoints; i++) {
            const x = xMin + (xMax - xMin) * i / numPoints;
            const y = a * (x - h) * (x - h) + k;

            if (y >= calculator.yMin && y <= calculator.yMax) {
                const [screenX, screenY] = calculator.graphToScreen(x, y);
                points.push({ x, y, screenX, screenY });
            }
        }

        // Draw the parabola curve
        if (points.length > 1) {
            ctx.strokeStyle = '#ff0000';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(points[0].screenX, points[0].screenY);

            for (let i = 1; i < points.length; i++) {
                ctx.lineTo(points[i].screenX, points[i].screenY);
            }
            ctx.stroke();
        }

        // Mark specific coordinate points around vertex
        const keyXOffsets = [-2, -1, 0, 1, 2];
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';

        keyXOffsets.forEach(offset => {
            const x = h + offset;
            const y = a * (x - h) * (x - h) + k;

            if (x >= calculator.xMin && x <= calculator.xMax &&
                y >= calculator.yMin && y <= calculator.yMax) {

                const [screenX, screenY] = calculator.graphToScreen(x, y);

                // Color coding: purple for vertex, green for others
                if (offset === 0) {
                    // Vertex point
                    ctx.fillStyle = 'purple';
                    ctx.beginPath();
                    ctx.arc(screenX, screenY, 6, 0, 2 * Math.PI);
                    ctx.fill();

                    ctx.fillStyle = 'purple';
                    ctx.font = 'bold 14px Arial';
                    ctx.fillText(`Vertex: (${x},${y})`, screenX, screenY - 20);
                } else {
                    // Regular points
                    ctx.fillStyle = 'green';
                    ctx.beginPath();
                    ctx.arc(screenX, screenY, 4, 0, 2 * Math.PI);
                    ctx.fill();

                    ctx.fillStyle = 'black';
                    ctx.font = '12px Arial';
                    ctx.fillText(`(${x},${y})`, screenX, screenY - 15);
                }
            }
        });

        // Draw axis of symmetry
        if (h >= calculator.xMin && h <= calculator.xMax) {
            const [axisScreenX1, axisScreenY1] = calculator.graphToScreen(h, calculator.yMin);
            const [axisScreenX2, axisScreenY2] = calculator.graphToScreen(h, calculator.yMax);

            ctx.strokeStyle = 'purple';
            ctx.lineWidth = 1;
            ctx.setLineDash([5, 5]);
            ctx.beginPath();
            ctx.moveTo(axisScreenX1, axisScreenY1);
            ctx.lineTo(axisScreenX2, axisScreenY2);
            ctx.stroke();
            ctx.setLineDash([]);
        }
    }

/**
 * Parse cubic polynomial equation
 */
parseCubic(equation) {
    const cleanEq = equation.replace(/\s/g, '').replace('y=', '');

    // Pattern: ax**3+bx**2+cx+d
    const pattern = /^([+-]?\d*\.?\d*)\*?x\*\*3([+-]\d*\.?\d*)\*?x\*\*2([+-]\d*\.?\d*)\*?x([+-]\d+\.?\d*)?$/;
    const match = cleanEq.match(pattern);

    if (match) {
        let a = match[1] || '1';
        if (a === '' || a === '+') a = '1';
        if (a === '-') a = '-1';
        a = parseFloat(a);

        let b = match[2] || '0';
        if (b === '+') b = '1';
        if (b === '-') b = '-1';
        b = parseFloat(b);

        let c = match[3] || '0';
        if (c === '+') c = '1';
        if (c === '-') c = '-1';
        c = parseFloat(c);

        let d = match[4] ? parseFloat(match[4]) : 0;

        return { a, b, c, d, isCubic: true };
    }

    // Simple x**3 pattern
    if (cleanEq.match(/^([+-]?\d*\.?\d*)\*?x\*\*3$/)) {
        const simpleMatch = cleanEq.match(/^([+-]?\d*\.?\d*)\*?x\*\*3$/);
        let a = simpleMatch[1] || '1';
        if (a === '' || a === '+') a = '1';
        if (a === '-') a = '-1';
        return { a: parseFloat(a), b: 0, c: 0, d: 0, isCubic: true };
    }

    return { isCubic: false };
}

/**
 * Parse exponential equation
 */
parseExponential(equation) {
    const cleanEq = equation.replace(/\s/g, '').replace('y=', '');

    // Pattern: a*base**x or a*base**(bx+c)+d
    const patterns = [
        /^([+-]?\d*\.?\d*)\*?(\d*\.?\d+)\*\*x$/,  // a*base**x
        /^([+-]?\d*\.?\d*)\*?e\*\*x$/,  // a*e**x
        /^([+-]?\d*\.?\d*)\*?e\*\*\(([+-]?\d*\.?\d*)x\)$/,  // a*e**(bx)
        /^([+-]?\d*\.?\d*)\*?e\*\*\(([+-]?\d*\.?\d*)x([+-]\d+\.?\d*)\)$/,  // a*e**(bx+c)
    ];

    for (let pattern of patterns) {
        const match = cleanEq.match(pattern);
        if (match) {
            let coefficient = match[1] || '1';
            if (coefficient === '' || coefficient === '+') coefficient = '1';
            if (coefficient === '-') coefficient = '-1';

            let base = 'e';
            let exponentCoeff = 1;
            let exponentShift = 0;

            if (pattern === patterns[0]) {
                base = parseFloat(match[2]);
            } else if (match[2]) {
                exponentCoeff = parseFloat(match[2]);
            }
            if (match[3]) {
                exponentShift = parseFloat(match[3]);
            }

            return {
                coefficient: parseFloat(coefficient),
                base: base === 'e' ? Math.E : base,
                exponentCoeff,
                exponentShift,
                isExponential: true
            };
        }
    }

    return { isExponential: false };
}

/**
 * Parse logarithmic equation
 */
parseLogarithmic(equation) {
    const cleanEq = equation.replace(/\s/g, '').replace('y=', '');

    // Patterns for logarithmic functions
    const patterns = [
        /^([+-]?\d*\.?\d*)\*?log\(x\)$/,  // a*log(x)
        /^([+-]?\d*\.?\d*)\*?log\(x,(\d+)\)$/,  // a*log(x,base)
        /^([+-]?\d*\.?\d*)\*?log\(x([+-]\d+\.?\d*)\)$/,  // a*log(x+b)
        /^([+-]?\d*\.?\d*)\*?log\(([+-]?\d*\.?\d*)x\)$/,  // a*log(bx)
    ];

    for (let pattern of patterns) {
        const match = cleanEq.match(pattern);
        if (match) {
            let coefficient = match[1] || '1';
            if (coefficient === '' || coefficient === '+') coefficient = '1';
            if (coefficient === '-') coefficient = '-1';

            let base = Math.E; // Natural log by default
            let xCoeff = 1;
            let xShift = 0;

            if (pattern === patterns[1]) {
                base = parseFloat(match[2]);
            } else if (pattern === patterns[2]) {
                xShift = parseFloat(match[2]);
            } else if (pattern === patterns[3]) {
                xCoeff = parseFloat(match[2]);
            }

            return {
                coefficient: parseFloat(coefficient),
                base,
                xCoeff,
                xShift,
                isLogarithmic: true
            };
        }
    }

    return { isLogarithmic: false };
}

/**
 * Parse trigonometric equation
 */
parseTrigonometric(equation) {
    const cleanEq = equation.replace(/\s/g, '').replace('y=', '');

    // Patterns for trig functions: a*func(bx+c)+d
    const funcPattern = /(sin|cos|tan|asin|acos|atan)/;
    const match = cleanEq.match(funcPattern);

    if (!match) return { isTrigonometric: false };

    const func = match[1];

    // Extract coefficients: a*func(bx+c)+d
    const fullPattern = /^([+-]?\d*\.?\d*)\*?(sin|cos|tan|asin|acos|atan)\(([+-]?\d*\.?\d*)x?([+-]\d*\.?\d*)?\)([+-]\d+\.?\d*)?$/;
    const fullMatch = cleanEq.match(fullPattern);

    if (fullMatch) {
        let amplitude = fullMatch[1] || '1';
        if (amplitude === '' || amplitude === '+') amplitude = '1';
        if (amplitude === '-') amplitude = '-1';

        let frequency = fullMatch[3] || '1';
        if (frequency === '' || frequency === '+') frequency = '1';
        if (frequency === '-') frequency = '-1';

        let phase = fullMatch[4] ? parseFloat(fullMatch[4]) : 0;
        let verticalShift = fullMatch[5] ? parseFloat(fullMatch[5]) : 0;

        return {
            function: func,
            amplitude: parseFloat(amplitude),
            frequency: parseFloat(frequency),
            phase,
            verticalShift,
            isTrigonometric: true
        };
    }

    return { isTrigonometric: false };
}

/**
 * Parse absolute value equation
 */
parseAbsoluteValue(equation) {
    const cleanEq = equation.replace(/\s/g, '').replace('y=', '');

    // Pattern: a*abs(bx+c)+d
    const pattern = /^([+-]?\d*\.?\d*)\*?abs\(([+-]?\d*\.?\d*)x([+-]\d+\.?\d*)?\)([+-]\d+\.?\d*)?$/;
    const match = cleanEq.match(pattern);

    if (match) {
        let coefficient = match[1] || '1';
        if (coefficient === '' || coefficient === '+') coefficient = '1';
        if (coefficient === '-') coefficient = '-1';

        let xCoeff = match[2] || '1';
        if (xCoeff === '' || xCoeff === '+') xCoeff = '1';
        if (xCoeff === '-') xCoeff = '-1';

        let xShift = match[3] ? parseFloat(match[3]) : 0;
        let verticalShift = match[4] ? parseFloat(match[4]) : 0;

        return {
            coefficient: parseFloat(coefficient),
            xCoeff: parseFloat(xCoeff),
            xShift,
            verticalShift,
            isAbsoluteValue: true
        };
    }

    // Multiple absolute values: abs(x)+abs(x-4)
    if (cleanEq.includes('abs') && cleanEq.split('abs').length > 2) {
        return { isAbsoluteValue: true, isMultiple: true };
    }

    return { isAbsoluteValue: false };
}

/**
 * Parse square root equation
 */
parseSquareRoot(equation) {
    const cleanEq = equation.replace(/\s/g, '').replace('y=', '');

    // Pattern: a*sqrt(bx+c)+d
    const pattern = /^([+-]?\d*\.?\d*)\*?sqrt\(([+-]?\d*\.?\d*)x([+-]\d+\.?\d*)?\)([+-]\d+\.?\d*)?$/;
    const match = cleanEq.match(pattern);

    if (match) {
        let coefficient = match[1] || '1';
        if (coefficient === '' || coefficient === '+') coefficient = '1';
        if (coefficient === '-') coefficient = '-1';

        let xCoeff = match[2] || '1';
        if (xCoeff === '' || xCoeff === '+') xCoeff = '1';
        if (xCoeff === '-') xCoeff = '-1';

        let xShift = match[3] ? parseFloat(match[3]) : 0;
        let verticalShift = match[4] ? parseFloat(match[4]) : 0;

        return {
            coefficient: parseFloat(coefficient),
            xCoeff: parseFloat(xCoeff),
            xShift,
            verticalShift,
            isSquareRoot: true
        };
    }

    return { isSquareRoot: false };
}

/**
 * Parse rational equation
 */
parseRational(equation) {
    const cleanEq = equation.replace(/\s/g, '').replace('y=', '');

    // Check if it contains division
    if (!cleanEq.includes('/')) return { isRational: false };

    // Pattern: numerator/denominator
    const parts = cleanEq.split('/');
    if (parts.length === 2) {
        return {
            numerator: parts[0],
            denominator: parts[1],
            isRational: true
        };
    }

    return { isRational: false };
}

/**
 * Parse special functions (floor, ceil, sign, max)
 */
parseSpecialFunction(equation) {
    const cleanEq = equation.replace(/\s/g, '').replace('y=', '');

    const specialFuncs = ['floor', 'ceil', 'sign', 'max', 'min'];
    
    for (let func of specialFuncs) {
        if (cleanEq.includes(func)) {
            return {
                function: func,
                isSpecial: true
            };
        }
    }

    return { isSpecial: false };
}

/**
 * Show key points for cubic equations
 */
showCubicPoints(equation, { a, b, c, d }) {
    console.log(`📊 Cubic Function Analysis:`);
    console.log(`   Equation: ${equation}`);
    console.log(`   Standard form: ${a}x³ + ${b}x² + ${c}x + ${d}`);
    console.log(`   Leading coefficient: ${a} (${a > 0 ? 'rises to right' : 'falls to right'})`);

    // Calculate critical points (where derivative = 0)
    // f'(x) = 3ax² + 2bx + c = 0
    const discriminant = 4 * b * b - 12 * a * c;
    
    if (discriminant > 0) {
        const x1 = (-2 * b + Math.sqrt(discriminant)) / (6 * a);
        const x2 = (-2 * b - Math.sqrt(discriminant)) / (6 * a);
        const y1 = a * x1 ** 3 + b * x1 ** 2 + c * x1 + d;
        const y2 = a * x2 ** 3 + b * x2 ** 2 + c * x2 + d;
        
        console.log(`\n🔍 Critical Points (local extrema):`);
        console.log(`   Point 1: (${x1.toFixed(3)}, ${y1.toFixed(3)})`);
        console.log(`   Point 2: (${x2.toFixed(3)}, ${y2.toFixed(3)})`);
    } else if (discriminant === 0) {
        const x = -2 * b / (6 * a);
        const y = a * x ** 3 + b * x ** 2 + c * x + d;
        console.log(`\n🔍 Inflection Point: (${x.toFixed(3)}, ${y.toFixed(3)})`);
    }

    // Y-intercept
    console.log(`\n🎯 Y-intercept: (0, ${d})`);

    // Sample points
    console.log(`\n📍 Key Points:`);
    const keyXValues = [-2, -1, 0, 1, 2];
    keyXValues.forEach(x => {
        const y = a * x ** 3 + b * x ** 2 + c * x + d;
        if (y >= this.calculator.yMin && y <= this.calculator.yMax) {
            console.log(`   (${x}, ${y.toFixed(3)})`);
        }
    });
}

/**
 * Show key points for exponential equations
 */
showExponentialPoints(equation, { coefficient, base, exponentCoeff, exponentShift }) {
    console.log(`📊 Exponential Function Analysis:`);
    console.log(`   Equation: ${equation}`);
    console.log(`   Coefficient: ${coefficient}`);
    console.log(`   Base: ${base === Math.E ? 'e (natural)' : base}`);
    console.log(`   Growth: ${coefficient * exponentCoeff > 0 ? 'Exponential growth' : 'Exponential decay'}`);

    // Y-intercept (when x = 0)
    const yIntercept = coefficient * Math.pow(base, exponentShift);
    console.log(`\n🎯 Y-intercept: (0, ${yIntercept.toFixed(4)})`);

    // Horizontal asymptote
    console.log(`📏 Horizontal asymptote: y = ${exponentShift !== 0 ? exponentShift : 0}`);

    // Sample points
    console.log(`\n📍 Key Points:`);
    const keyXValues = [-2, -1, 0, 1, 2];
    keyXValues.forEach(x => {
        const y = coefficient * Math.pow(base, exponentCoeff * x + exponentShift);
        if (y >= this.calculator.yMin && y <= this.calculator.yMax && !isNaN(y) && isFinite(y)) {
            console.log(`   (${x}, ${y.toFixed(4)})`);
        }
    });
}

/**
 * Show key points for logarithmic equations
 */
showLogarithmicPoints(equation, { coefficient, base, xCoeff, xShift }) {
    console.log(`📊 Logarithmic Function Analysis:`);
    console.log(`   Equation: ${equation}`);
    console.log(`   Coefficient: ${coefficient}`);
    console.log(`   Base: ${base === Math.E ? 'e (natural log)' : base}`);
    
    // Domain restriction
    const domainStart = -xShift / xCoeff;
    console.log(`\n📏 Domain: x > ${domainStart.toFixed(3)}`);
    console.log(`📏 Vertical asymptote: x = ${domainStart.toFixed(3)}`);

    // X-intercept (when y = 0)
    const xIntercept = (Math.pow(base, 0) - xShift) / xCoeff;
    if (xIntercept > domainStart) {
        console.log(`🎯 X-intercept: (${xIntercept.toFixed(4)}, 0)`);
    }

    // Sample points
    console.log(`\n📍 Key Points:`);
    const keyXValues = [0.1, 0.5, 1, 2, 3, 5, 10].map(x => x + domainStart + 0.1);
    keyXValues.forEach(x => {
        if (x > domainStart) {
            const logArg = xCoeff * x + xShift;
            if (logArg > 0) {
                const y = coefficient * (Math.log(logArg) / Math.log(base));
                if (y >= this.calculator.yMin && y <= this.calculator.yMax && !isNaN(y) && isFinite(y)) {
                    console.log(`   (${x.toFixed(3)}, ${y.toFixed(4)})`);
                }
            }
        }
    });
}

/**
 * Show key points for trigonometric equations
 */
showTrigonometricPoints(equation, { function: func, amplitude, frequency, phase, verticalShift }) {
    console.log(`📊 Trigonometric Function Analysis:`);
    console.log(`   Function: ${func}`);
    console.log(`   Amplitude: ${amplitude}`);
    console.log(`   Frequency: ${frequency}`);
    console.log(`   Phase shift: ${phase}`);
    console.log(`   Vertical shift: ${verticalShift}`);

    // Period
    let period = 2 * Math.PI / Math.abs(frequency);
    if (func === 'tan') {
        period = Math.PI / Math.abs(frequency);
    }
    console.log(`   Period: ${period.toFixed(4)} (${(period * 180 / Math.PI).toFixed(1)}°)`);

    // Range
    if (func === 'sin' || func === 'cos') {
        const minY = verticalShift - Math.abs(amplitude);
        const maxY = verticalShift + Math.abs(amplitude);
        console.log(`\n📏 Range: [${minY}, ${maxY}]`);
    } else if (func === 'tan') {
        console.log(`\n📏 Range: All real numbers`);
        console.log(`⚠️  Vertical asymptotes at x = ${-phase/frequency + Math.PI/(2*frequency)} + nπ/${frequency}`);
    }

    // Sample points
    console.log(`\n📍 Key Points (one period):`);
    const numPoints = 5;
    for (let i = 0; i <= numPoints; i++) {
        const x = i * period / numPoints - phase / frequency;
        let y;
        
        const arg = frequency * x + phase;
        switch (func) {
            case 'sin':
                y = amplitude * Math.sin(arg) + verticalShift;
                break;
            case 'cos':
                y = amplitude * Math.cos(arg) + verticalShift;
                break;
            case 'tan':
                y = amplitude * Math.tan(arg) + verticalShift;
                break;
            case 'asin':
                if (Math.abs(arg) <= 1) y = amplitude * Math.asin(arg) + verticalShift;
                break;
            case 'acos':
                if (Math.abs(arg) <= 1) y = amplitude * Math.acos(arg) + verticalShift;
                break;
            case 'atan':
                y = amplitude * Math.atan(arg) + verticalShift;
                break;
        }
        
        if (y !== undefined && !isNaN(y) && isFinite(y) && 
            y >= this.calculator.yMin && y <= this.calculator.yMax) {
            console.log(`   (${x.toFixed(4)}, ${y.toFixed(4)})`);
        }
    }
}

/**
 * Show key points for absolute value equations
 */
showAbsoluteValuePoints(equation, info) {
    if (info.isMultiple) {
        console.log(`📊 Multiple Absolute Value Function:`);
        console.log(`   Equation: ${equation}`);
        console.log(`   📍 Check graph for visualization of multiple components`);
        return;
    }

    const { coefficient, xCoeff, xShift, verticalShift } = info;
    
    console.log(`📊 Absolute Value Function Analysis:`);
    console.log(`   Form: ${coefficient}|${xCoeff}x ${xShift >= 0 ? '+' : ''}${xShift}| ${verticalShift >= 0 ? '+' : ''}${verticalShift}`);
    
    // Vertex (where expression inside abs = 0)
    const vertexX = -xShift / xCoeff;
    const vertexY = verticalShift;
    console.log(`\n🎯 Vertex: (${vertexX.toFixed(3)}, ${vertexY})`);
    
    // Slopes
    console.log(`📐 Slopes: ${coefficient * xCoeff} (right), ${-coefficient * xCoeff} (left)`);

    // Sample points
    console.log(`\n📍 Key Points:`);
    const keyXValues = [vertexX - 2, vertexX - 1, vertexX, vertexX + 1, vertexX + 2];
    keyXValues.forEach(x => {
        const y = coefficient * Math.abs(xCoeff * x + xShift) + verticalShift;
        if (y >= this.calculator.yMin && y <= this.calculator.yMax) {
            const marker = x === vertexX ? ' ← Vertex' : '';
            console.log(`   (${x.toFixed(3)}, ${y.toFixed(3)})${marker}`);
        }
    });
}

/**
 * Show key points for square root equations
 */
showSquareRootPoints(equation, { coefficient, xCoeff, xShift, verticalShift }) {
    console.log(`📊 Square Root Function Analysis:`);
    console.log(`   Form: ${coefficient}√(${xCoeff}x ${xShift >= 0 ? '+' : ''}${xShift}) ${verticalShift >= 0 ? '+' : ''}${verticalShift}`);
    
    // Starting point (where radicand = 0)
    const startX = -xShift / xCoeff;
    const startY = verticalShift;
    console.log(`\n🎯 Starting point: (${startX.toFixed(3)}, ${startY})`);
    
    // Domain
    if (xCoeff > 0) {
        console.log(`📏 Domain: x ≥ ${startX.toFixed(3)}`);
    } else {
        console.log(`📏 Domain: x ≤ ${startX.toFixed(3)}`);
    }

    // Range
    if (coefficient > 0) {
        console.log(`📏 Range: y ≥ ${startY}`);
    } else {
        console.log(`📏 Range: y ≤ ${startY}`);
    }

    // Sample points
    console.log(`\n📍 Key Points:`);
    const offsets = [0, 1, 4, 9, 16].map(v => v / Math.abs(xCoeff));
    offsets.forEach(offset => {
        const x = startX + (xCoeff > 0 ? offset : -offset);
        const radicand = xCoeff * x + xShift;
        if (radicand >= 0) {
            const y = coefficient * Math.sqrt(radicand) + verticalShift;
            if (y >= this.calculator.yMin && y <= this.calculator.yMax) {
                console.log(`   (${x.toFixed(3)}, ${y.toFixed(3)})`);
            }
        }
    });
}

/**
 * Show key points for rational equations
 */
showRationalPoints(equation, { numerator, denominator }) {
    console.log(`📊 Rational Function Analysis:`);
    console.log(`   Numerator: ${numerator}`);
    console.log(`   Denominator: ${denominator}`);

    // Try to find vertical asymptotes (where denominator = 0)
    console.log(`\n⚠️  Vertical asymptotes: where ${denominator} = 0`);
    
    // For simple cases
    if (denominator === 'x') {
        console.log(`   x = 0`);
    } else if (denominator.match(/x([+-]\d+)/)) {
        const match = denominator.match(/x([+-]\d+)/);
        const asymptote = -parseFloat(match[1]);
        console.log(`   x = ${asymptote}`);
    }

    // Horizontal asymptote analysis
    console.log(`\n📏 Horizontal asymptote: Analyze degrees of numerator and denominator`);

    // Sample points
    console.log(`\n📍 Sample Points:`);
    const keyXValues = [-3, -2, -1, -0.5, 0.5, 1, 2, 3];
    keyXValues.forEach(x => {
        try {
            // This is a simplified evaluation - would need proper expression parser
            console.log(`   Note: Check individual graph for accurate point values`);
        } catch (e) {
            // Skip problematic points
        }
    });
}

/**
 * Show key points for special functions
 */
showSpecialFunctionPoints(equation, { function: func }) {
    console.log(`📊 Special Function Analysis:`);
    console.log(`   Function type: ${func}`);
    
    switch (func) {
        case 'floor':
            console.log(`   Description: Step function (greatest integer ≤ x)`);
            console.log(`   Discontinuous at all integers`);
            break;
        case 'ceil':
            console.log(`   Description: Ceiling function (least integer ≥ x)`);
            console.log(`   Discontinuous at all integers`);
            break;
        case 'sign':
            console.log(`   Description: Sign function (-1, 0, or 1)`);
            console.log(`   Returns: -1 for x<0, 0 for x=0, 1 for x>0`);
            break;
        case 'max':
            console.log(`   Description: Maximum function (ReLU if max(0,x))`);
            console.log(`   Returns maximum of given values`);
            break;
        case 'min':
            console.log(`   Description: Minimum function`);
            console.log(`   Returns minimum of given values`);
            break;
    }

    console.log(`\n📍 Check individual graph for detailed visualization`);
}

/**
     * Add an equation to the calculator
     */
    addEquation(equation) {
        try {
            // Test if equation is valid by creating a fresh calculator
            const testCalc = this.createFreshCalculator();
            if (testCalc.addEquation(equation)) {
                this.equationCounter++;
                this.equationHistory.push(`${this.equationCounter}. ${equation}`);

                // Create individual graph for this equation
                this.saveIndividualGraph(equation, testCalc);

                // Display equation description
                const description = this.getFormulaDescription(equation);
                console.log(`\n📈 ${equation}: ${description}`);
                console.log(`Added equation: ${equation}`);

                // Show calculated key points based on function type
                this.analyzeAndShowKeyPoints(equation);

                return true;
            }
            return false;
        } catch (error) {
            console.log("❌ Invalid equation!");
            return false;
        }
    }

    /**
     * Analyze equation type and show appropriate key points
     */
   analyzeAndShowKeyPoints(equation) {
    // Check for quadratic first
    const quadraticInfo = this.parseQuadratic(equation);
    if (quadraticInfo.isQuadratic) {
        this.showQuadraticPoints(equation, quadraticInfo);
        return;
    }

    // Check for linear
    const linearInfo = this.parseLinear(equation);
    if (linearInfo.isLinear) {
        this.showLinearPoints(equation, linearInfo);
        return;
    }

    // Check for cubic
    const cubicInfo = this.parseCubic(equation);
    if (cubicInfo.isCubic) {
        this.showCubicPoints(equation, cubicInfo);
        return;
    }

    // Check for exponential
    const exponentialInfo = this.parseExponential(equation);
    if (exponentialInfo.isExponential) {
        this.showExponentialPoints(equation, exponentialInfo);
        return;
    }

    // Check for logarithmic
    const logarithmicInfo = this.parseLogarithmic(equation);
    if (logarithmicInfo.isLogarithmic) {
        this.showLogarithmicPoints(equation, logarithmicInfo);
        return;
    }

    // Check for trigonometric
    const trigInfo = this.parseTrigonometric(equation);
    if (trigInfo.isTrigonometric) {
        this.showTrigonometricPoints(equation, trigInfo);
        return;
    }

    // Check for absolute value
    const absInfo = this.parseAbsoluteValue(equation);
    if (absInfo.isAbsoluteValue) {
        this.showAbsoluteValuePoints(equation, absInfo);
        return;
    }

    // Check for square root
    const sqrtInfo = this.parseSquareRoot(equation);
    if (sqrtInfo.isSquareRoot) {
        this.showSquareRootPoints(equation, sqrtInfo);
        return;
    }

    // Check for rational
    const rationalInfo = this.parseRational(equation);
    if (rationalInfo.isRational) {
        this.showRationalPoints(equation, rationalInfo);
        return;
    }

    // Check for special functions
    const specialInfo = this.parseSpecialFunction(equation);
    if (specialInfo.isSpecial) {
        this.showSpecialFunctionPoints(equation, specialInfo);
        return;
    }

    // For other functions, show general analysis
    console.log(`📊 Function Analysis: ${equation}`);
    console.log(`📍 General function - check individual graph for visualization`);
}

/**
     * Mark coordinate points on the graph with proper line connections
     */
markCoordinatePoints(ctx, equation, calculator) {
    // Check for each function type in order
    const quadraticInfo = this.parseQuadratic(equation);
    if (quadraticInfo.isQuadratic) {
        this.drawQuadraticPoints(ctx, equation, quadraticInfo, calculator);
        return;
    }

    const linearInfo = this.parseLinear(equation);
    if (linearInfo.isLinear) {
        this.drawLinearPoints(ctx, equation, linearInfo, calculator);
        return;
    }

    const cubicInfo = this.parseCubic(equation);
    if (cubicInfo.isCubic) {
        this.drawCubicPoints(ctx, equation, cubicInfo, calculator);
        return;
    }

    const exponentialInfo = this.parseExponential(equation);
    if (exponentialInfo.isExponential) {
        this.drawExponentialPoints(ctx, equation, exponentialInfo, calculator);
        return;
    }

    const logarithmicInfo = this.parseLogarithmic(equation);
    if (logarithmicInfo.isLogarithmic) {
        this.drawLogarithmicPoints(ctx, equation, logarithmicInfo, calculator);
        return;
    }

    const trigInfo = this.parseTrigonometric(equation);
    if (trigInfo.isTrigonometric) {
        this.drawTrigonometricPoints(ctx, equation, trigInfo, calculator);
        return;
    }

    const absInfo = this.parseAbsoluteValue(equation);
    if (absInfo.isAbsoluteValue) {
        this.drawAbsoluteValuePoints(ctx, equation, absInfo, calculator);
        return;
    }

    const sqrtInfo = this.parseSquareRoot(equation);
    if (sqrtInfo.isSquareRoot) {
        this.drawSquareRootPoints(ctx, equation, sqrtInfo, calculator);
        return;
    }

    const rationalInfo = this.parseRational(equation);
    if (rationalInfo.isRational) {
        this.drawRationalPoints(ctx, equation, rationalInfo, calculator);
        return;
    }

    const specialInfo = this.parseSpecialFunction(equation);
    if (specialInfo.isSpecial) {
        this.drawSpecialFunctionPoints(ctx, equation, specialInfo, calculator);
        return;
    }

    // For other functions, just draw the standard curve
    console.log(`📊 Standard function visualization for: ${equation}`);
}

/**
 * Draw cubic function points with connecting curve
 */
drawCubicPoints(ctx, equation, { a, b, c, d }, calculator) {
    const points = [];
    const xMin = calculator.xMin;
    const xMax = calculator.xMax;
    const numPoints = 100;

    for (let i = 0; i <= numPoints; i++) {
        const x = xMin + (xMax - xMin) * i / numPoints;
        const y = a * x ** 3 + b * x ** 2 + c * x + d;

        if (y >= calculator.yMin && y <= calculator.yMax) {
            const [screenX, screenY] = calculator.graphToScreen(x, y);
            points.push({ x, y, screenX, screenY });
        }
    }

    // Draw the curve
    if (points.length > 1) {
        ctx.strokeStyle = '#ff0000';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(points[0].screenX, points[0].screenY);

        for (let i = 1; i < points.length; i++) {
            ctx.lineTo(points[i].screenX, points[i].screenY);
        }
        ctx.stroke();
    }

    // Mark critical points
    const discriminant = 4 * b * b - 12 * a * c;
    if (discriminant >= 0) {
        const x1 = (-2 * b + Math.sqrt(discriminant)) / (6 * a);
        const x2 = (-2 * b - Math.sqrt(discriminant)) / (6 * a);

        [x1, x2].forEach((x, idx) => {
            if (x >= calculator.xMin && x <= calculator.xMax) {
                const y = a * x ** 3 + b * x ** 2 + c * x + d;
                if (y >= calculator.yMin && y <= calculator.yMax) {
                    const [screenX, screenY] = calculator.graphToScreen(x, y);
                    
                    ctx.fillStyle = 'purple';
                    ctx.beginPath();
                    ctx.arc(screenX, screenY, 5, 0, 2 * Math.PI);
                    ctx.fill();

                    ctx.fillStyle = 'purple';
                    ctx.font = 'bold 12px Arial';
                    ctx.textAlign = 'center';
                    ctx.fillText(`Critical (${x.toFixed(2)},${y.toFixed(2)})`, screenX, screenY - 15);
                }
            }
        });
    }

    // Mark key integer points
    ctx.font = '11px Arial';
    [-2, -1, 0, 1, 2].forEach(x => {
        if (x >= calculator.xMin && x <= calculator.xMax) {
            const y = a * x ** 3 + b * x ** 2 + c * x + d;
            if (y >= calculator.yMin && y <= calculator.yMax) {
                const [screenX, screenY] = calculator.graphToScreen(x, y);
                
                ctx.fillStyle = 'green';
                ctx.beginPath();
                ctx.arc(screenX, screenY, 3, 0, 2 * Math.PI);
                ctx.fill();

                ctx.fillStyle = 'black';
                ctx.fillText(`(${x},${y.toFixed(1)})`, screenX, screenY - 10);
            }
        }
    });
}

/**
 * Draw exponential function points
 */
drawExponentialPoints(ctx, equation, { coefficient, base, exponentCoeff, exponentShift }, calculator) {
    const points = [];
    const xMin = calculator.xMin;
    const xMax = calculator.xMax;
    const numPoints = 100;

    for (let i = 0; i <= numPoints; i++) {
        const x = xMin + (xMax - xMin) * i / numPoints;
        const y = coefficient * Math.pow(base, exponentCoeff * x + exponentShift);

        if (y >= calculator.yMin && y <= calculator.yMax && isFinite(y) && !isNaN(y)) {
            const [screenX, screenY] = calculator.graphToScreen(x, y);
            points.push({ x, y, screenX, screenY });
        }
    }

    // Draw the curve
    if (points.length > 1) {
        ctx.strokeStyle = '#ff6600';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(points[0].screenX, points[0].screenY);

        for (let i = 1; i < points.length; i++) {
            ctx.lineTo(points[i].screenX, points[i].screenY);
        }
        ctx.stroke();
    }

    // Mark y-intercept
    const yInt = coefficient * Math.pow(base, exponentShift);
    if (yInt >= calculator.yMin && yInt <= calculator.yMax) {
        const [screenX, screenY] = calculator.graphToScreen(0, yInt);
        
        ctx.fillStyle = 'blue';
        ctx.beginPath();
        ctx.arc(screenX, screenY, 5, 0, 2 * Math.PI);
        ctx.fill();

        ctx.fillStyle = 'blue';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`(0,${yInt.toFixed(2)})`, screenX, screenY - 15);
    }

    // Mark key points
    ctx.font = '11px Arial';
    [-2, -1, 1, 2].forEach(x => {
        if (x >= calculator.xMin && x <= calculator.xMax) {
            const y = coefficient * Math.pow(base, exponentCoeff * x + exponentShift);
            if (y >= calculator.yMin && y <= calculator.yMax && isFinite(y)) {
                const [screenX, screenY] = calculator.graphToScreen(x, y);
                
                ctx.fillStyle = 'orange';
                ctx.beginPath();
                ctx.arc(screenX, screenY, 3, 0, 2 * Math.PI);
                ctx.fill();

                ctx.fillStyle = 'black';
                ctx.fillText(`(${x},${y.toFixed(2)})`, screenX, screenY - 10);
            }
        }
    });
}

/**
 * Draw logarithmic function points
 */
drawLogarithmicPoints(ctx, equation, { coefficient, base, xCoeff, xShift }, calculator) {
    const points = [];
    const xMin = Math.max(calculator.xMin, -xShift / xCoeff + 0.01);
    const xMax = calculator.xMax;
    const numPoints = 100;

    for (let i = 0; i <= numPoints; i++) {
        const x = xMin + (xMax - xMin) * i / numPoints;
        const logArg = xCoeff * x + xShift;
        
        if (logArg > 0) {
            const y = coefficient * (Math.log(logArg) / Math.log(base));

            if (y >= calculator.yMin && y <= calculator.yMax && isFinite(y) && !isNaN(y)) {
                const [screenX, screenY] = calculator.graphToScreen(x, y);
                points.push({ x, y, screenX, screenY });
            }
        }
    }

    // Draw the curve
    if (points.length > 1) {
        ctx.strokeStyle = '#9900cc';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(points[0].screenX, points[0].screenY);

        for (let i = 1; i < points.length; i++) {
            ctx.lineTo(points[i].screenX, points[i].screenY);
        }
        ctx.stroke();
    }

    // Draw vertical asymptote
    const asymptoteX = -xShift / xCoeff;
    if (asymptoteX >= calculator.xMin && asymptoteX <= calculator.xMax) {
        const [asymScreenX, asymScreenY1] = calculator.graphToScreen(asymptoteX, calculator.yMin);
        const [, asymScreenY2] = calculator.graphToScreen(asymptoteX, calculator.yMax);

        ctx.strokeStyle = 'red';
        ctx.lineWidth = 1;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(asymScreenX, asymScreenY1);
        ctx.lineTo(asymScreenX, asymScreenY2);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = 'red';
        ctx.font = '10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Asymptote', asymScreenX, 20);
    }

    // Mark key points
    ctx.font = '11px Arial';
    [1, 2, 3, 5, 10].forEach(offset => {
        const x = asymptoteX + offset;
        if (x >= calculator.xMin && x <= calculator.xMax) {
            const logArg = xCoeff * x + xShift;
            if (logArg > 0) {
                const y = coefficient * (Math.log(logArg) / Math.log(base));
                if (y >= calculator.yMin && y <= calculator.yMax && isFinite(y)) {
                    const [screenX, screenY] = calculator.graphToScreen(x, y);
                    
                    ctx.fillStyle = 'purple';
                    ctx.beginPath();
                    ctx.arc(screenX, screenY, 3, 0, 2 * Math.PI);
                    ctx.fill();

                    ctx.fillStyle = 'black';
                    ctx.fillText(`(${x.toFixed(1)},${y.toFixed(1)})`, screenX, screenY - 10);
                }
            }
        }
    });
}

/**
 * Draw trigonometric function points
 */
drawTrigonometricPoints(ctx, equation, { function: func, amplitude, frequency, phase, verticalShift }, calculator) {
    const points = [];
    const xMin = calculator.xMin;
    const xMax = calculator.xMax;
    const numPoints = 200; // More points for smooth curves

    for (let i = 0; i <= numPoints; i++) {
        const x = xMin + (xMax - xMin) * i / numPoints;
        const arg = frequency * x + phase;
        let y;

        switch (func) {
            case 'sin':
                y = amplitude * Math.sin(arg) + verticalShift;
                break;
            case 'cos':
                y = amplitude * Math.cos(arg) + verticalShift;
                break;
            case 'tan':
                y = amplitude * Math.tan(arg) + verticalShift;
                // Skip near asymptotes
                if (Math.abs(Math.cos(arg)) < 0.01) continue;
                break;
            case 'asin':
                if (Math.abs(arg) <= 1) y = amplitude * Math.asin(arg) + verticalShift;
                break;
            case 'acos':
                if (Math.abs(arg) <= 1) y = amplitude * Math.acos(arg) + verticalShift;
                break;
            case 'atan':
                y = amplitude * Math.atan(arg) + verticalShift;
                break;
        }

        if (y !== undefined && y >= calculator.yMin && y <= calculator.yMax && isFinite(y) && !isNaN(y)) {
            const [screenX, screenY] = calculator.graphToScreen(x, y);
            points.push({ x, y, screenX, screenY });
        }
    }

    // Draw the curve
    if (points.length > 1) {
        ctx.strokeStyle = '#0099ff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(points[0].screenX, points[0].screenY);

        for (let i = 1; i < points.length; i++) {
            // Check for discontinuities (large jumps)
            const dx = Math.abs(points[i].screenX - points[i - 1].screenX);
            const dy = Math.abs(points[i].screenY - points[i - 1].screenY);
            
            if (dy < 100 || dx > 10) { // Not a vertical asymptote jump
                ctx.lineTo(points[i].screenX, points[i].screenY);
            } else {
                ctx.moveTo(points[i].screenX, points[i].screenY);
            }
        }
        ctx.stroke();
    }

    // Mark key points (maxima, minima, zeros)
    const period = func === 'tan' ? Math.PI / Math.abs(frequency) : 2 * Math.PI / Math.abs(frequency);
    const startX = -phase / frequency;

    ctx.font = '11px Arial';
    
    // Mark one complete period
    for (let i = 0; i <= 4; i++) {
        const x = startX + i * period / 4;
        if (x >= calculator.xMin && x <= calculator.xMax) {
            const arg = frequency * x + phase;
            let y;

            switch (func) {
                case 'sin':
                    y = amplitude * Math.sin(arg) + verticalShift;
                    break;
                case 'cos':
                    y = amplitude * Math.cos(arg) + verticalShift;
                    break;
                case 'tan':
                    if (Math.abs(Math.cos(arg)) > 0.01) {
                        y = amplitude * Math.tan(arg) + verticalShift;
                    }
                    break;
            }

            if (y !== undefined && y >= calculator.yMin && y <= calculator.yMax && isFinite(y)) {
                const [screenX, screenY] = calculator.graphToScreen(x, y);
                
                // Color code: max (red), min (blue), zero (green)
                let color = 'orange';
                if (Math.abs(y - verticalShift) < 0.1) color = 'green'; // Near zero
                else if (y > verticalShift + amplitude * 0.9) color = 'red'; // Near max
                else if (y < verticalShift - amplitude * 0.9) color = 'blue'; // Near min

                ctx.fillStyle = color;
                ctx.beginPath();
                ctx.arc(screenX, screenY, 3, 0, 2 * Math.PI);
                ctx.fill();

                ctx.fillStyle = 'black';
                ctx.fillText(`(${x.toFixed(2)},${y.toFixed(2)})`, screenX, screenY - 10);
            }
        }
    }
}

/**
 * Draw absolute value function points
 */
drawAbsoluteValuePoints(ctx, equation, info, calculator) {
    if (info.isMultiple) {
        // For multiple absolute values, just draw the standard curve
        console.log('Drawing multiple absolute value function');
        return;
    }

    const { coefficient, xCoeff, xShift, verticalShift } = info;
    const points = [];
    const xMin = calculator.xMin;
    const xMax = calculator.xMax;
    const numPoints = 100;

    for (let i = 0; i <= numPoints; i++) {
        const x = xMin + (xMax - xMin) * i / numPoints;
        const y = coefficient * Math.abs(xCoeff * x + xShift) + verticalShift;

        if (y >= calculator.yMin && y <= calculator.yMax) {
            const [screenX, screenY] = calculator.graphToScreen(x, y);
            points.push({ x, y, screenX, screenY });
        }
    }

    // Draw the curve
    if (points.length > 1) {
        ctx.strokeStyle = '#cc0099';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(points[0].screenX, points[0].screenY);

        for (let i = 1; i < points.length; i++) {
            ctx.lineTo(points[i].screenX, points[i].screenY);
        }
        ctx.stroke();
    }

    // Mark vertex
    const vertexX = -xShift / xCoeff;
    const vertexY = verticalShift;
    
    if (vertexX >= calculator.xMin && vertexX <= calculator.xMax &&
        vertexY >= calculator.yMin && vertexY <= calculator.yMax) {
        const [screenX, screenY] = calculator.graphToScreen(vertexX, vertexY);
        
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(screenX, screenY, 6, 0, 2 * Math.PI);
        ctx.fill();

        ctx.fillStyle = 'red';
        ctx.font = 'bold 13px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`Vertex (${vertexX.toFixed(2)},${vertexY.toFixed(2)})`, screenX, screenY - 15);
    }

    // Mark other key points
    ctx.font = '11px Arial';
    [vertexX - 2, vertexX - 1, vertexX + 1, vertexX + 2].forEach(x => {
        if (x >= calculator.xMin && x <= calculator.xMax) {
            const y = coefficient * Math.abs(xCoeff * x + xShift) + verticalShift;
            if (y >= calculator.yMin && y <= calculator.yMax) {
                const [screenX, screenY] = calculator.graphToScreen(x, y);
                
                ctx.fillStyle = 'magenta';
                ctx.beginPath();
                ctx.arc(screenX, screenY, 3, 0, 2 * Math.PI);
                ctx.fill();

                ctx.fillStyle = 'black';
                ctx.fillText(`(${x.toFixed(1)},${y.toFixed(1)})`, screenX, screenY - 10);
            }
        }
    });
}

/**
 * Draw square root function points
 */
drawSquareRootPoints(ctx, equation, { coefficient, xCoeff, xShift, verticalShift }, calculator) {
    const points = [];
    const startX = -xShift / xCoeff;
    
    const xMin = xCoeff > 0 ? Math.max(calculator.xMin, startX) : calculator.xMin;
    const xMax = xCoeff > 0 ? calculator.xMax : Math.min(calculator.xMax, startX);
    const numPoints = 100;

    for (let i = 0; i <= numPoints; i++) {
        const x = xMin + (xMax - xMin) * i / numPoints;
        const radicand = xCoeff * x + xShift;
        
        if (radicand >= 0) {
            const y = coefficient * Math.sqrt(radicand) + verticalShift;

            if (y >= calculator.yMin && y <= calculator.yMax && isFinite(y) && !isNaN(y)) {
                const [screenX, screenY] = calculator.graphToScreen(x, y);
                points.push({ x, y, screenX, screenY });
            }
        }
    }

    // Draw the curve
    if (points.length > 1) {
        ctx.strokeStyle = '#00aa88';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(points[0].screenX, points[0].screenY);

        for (let i = 1; i < points.length; i++) {
            ctx.lineTo(points[i].screenX, points[i].screenY);
        }
        ctx.stroke();
    }

    // Mark starting point
    if (startX >= calculator.xMin && startX <= calculator.xMax &&
        verticalShift >= calculator.yMin && verticalShift <= calculator.yMax) {
        const [screenX, screenY] = calculator.graphToScreen(startX, verticalShift);
        
        ctx.fillStyle = 'teal';
        ctx.beginPath();
        ctx.arc(screenX, screenY, 6, 0, 2 * Math.PI);
        ctx.fill();

        ctx.fillStyle = 'teal';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`Start (${startX.toFixed(2)},${verticalShift.toFixed(2)})`, screenX, screenY - 15);
    }

    // Mark key points
    ctx.font = '11px Arial';
    [0, 1, 4, 9].forEach(offset => {
        const x = startX + (xCoeff > 0 ? offset / Math.abs(xCoeff) : -offset / Math.abs(xCoeff));
        if (x >= calculator.xMin && x <= calculator.xMax) {
            const radicand = xCoeff * x + xShift;
            if (radicand >= 0) {
                const y = coefficient * Math.sqrt(radicand) + verticalShift;
                if (y >= calculator.yMin && y <= calculator.yMax) {
                    const [screenX, screenY] = calculator.graphToScreen(x, y);
                    
                    ctx.fillStyle = 'darkgreen';
                    ctx.beginPath();
                    ctx.arc(screenX, screenY, 3, 0, 2 * Math.PI);
                    ctx.fill();

                    ctx.fillStyle = 'black';
                    ctx.fillText(`(${x.toFixed(1)},${y.toFixed(1)})`, screenX, screenY - 10);
                }
            }
        }
    });
}

/**
 * Draw rational function points
 */
drawRationalPoints(ctx, equation, { numerator, denominator }, calculator) {
    // This is a simplified version - full implementation would need expression parsing
    console.log('Drawing rational function - using standard curve');
    
    // Draw note about asymptotes
    ctx.fillStyle = 'black';
    ctx.font = '12px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Rational function - check for asymptotes', 10, 30);
}

/**
 * Draw special function points
 */
drawSpecialFunctionPoints(ctx, equation, { function: func }, calculator) {
    const points = [];
    const xMin = calculator.xMin;
    const xMax = calculator.xMax;
    const numPoints = 500; // More points for step functions

    for (let i = 0; i <= numPoints; i++) {
        const x = xMin + (xMax - xMin) * i / numPoints;
        let y;

        switch (func) {
            case 'floor':
                y = Math.floor(x);
                break;
            case 'ceil':
                y = Math.ceil(x);
                break;
            case 'sign':
                y = Math.sign(x);
                break;
            case 'max':
                y = Math.max(0, x); // Assuming max(0,x)
                break;
        }

        if (y !== undefined && y >= calculator.yMin && y <= calculator.yMax) {
            const [screenX, screenY] = calculator.graphToScreen(x, y);
            points.push({ x, y, screenX, screenY });
        }
    }

    // Draw the curve with discontinuities
    if (points.length > 1) {
        ctx.strokeStyle = '#ff3366';
        ctx.lineWidth = 2;
        
        for (let i = 1; i < points.length; i++) {
            // Only connect points if y-values are same (horizontal segments)
            if (Math.abs(points[i].y - points[i - 1].y) < 0.1) {
                ctx.beginPath();
                ctx.moveTo(points[i - 1].screenX, points[i - 1].screenY);
                ctx.lineTo(points[i].screenX, points[i].screenY);
                ctx.stroke();
            }
        }
    }

    // Mark integer points
    ctx.font = '10px Arial';
    for (let x = Math.ceil(calculator.xMin); x <= Math.floor(calculator.xMax); x++) {
        let y;
        switch (func) {
            case 'floor':
                y = Math.floor(x);
                break;
            case 'ceil':
                y = Math.ceil(x);
                break;
            case 'sign':
                y = Math.sign(x);
                break;
            case 'max':
                y = Math.max(0, x);
                break;
        }

        if (y !== undefined && y >= calculator.yMin && y <= calculator.yMax) {
            const [screenX, screenY] = calculator.graphToScreen(x, y);
            
            ctx.fillStyle = 'red';
            ctx.beginPath();
            ctx.arc(screenX, screenY, 3, 0, 2 * Math.PI);
            ctx.fill();
        }
    }

    // Add function type label
    ctx.fillStyle = 'black';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'left';
    ctx.fillText(`${func} function`, 10, 30);
}
    /**
     * Draw linear function points with connecting line
     */
    drawLinearPoints(ctx, equation, { slope, intercept }, calculator) {
        // Generate points across the viewing window
        const points = [];
        const xMin = calculator.xMin;
        const xMax = calculator.xMax;

        // Create more points for smoother line
        const numPoints = 50;
        for (let i = 0; i <= numPoints; i++) {
            const x = xMin + (xMax - xMin) * i / numPoints;
            const y = slope * x + intercept;

            if (y >= calculator.yMin && y <= calculator.yMax) {
                const [screenX, screenY] = calculator.graphToScreen(x, y);
                points.push({ x, y, screenX, screenY });
            }
        }

        // Draw the connecting line first
        if (points.length > 1) {
            ctx.strokeStyle = '#ff0000';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(points[0].screenX, points[0].screenY);

            for (let i = 1; i < points.length; i++) {
                ctx.lineTo(points[i].screenX, points[i].screenY);
            }
            ctx.stroke();
        }

        // Mark specific coordinate points
        const keyXValues = [-3, -2, -1, 0, 1, 2, 3];
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';

        keyXValues.forEach(x => {
            const y = slope * x + intercept;

            if (x >= calculator.xMin && x <= calculator.xMax &&
                y >= calculator.yMin && y <= calculator.yMax) {

                const [screenX, screenY] = calculator.graphToScreen(x, y);

                // Draw point circle
                ctx.fillStyle = 'red';
                ctx.beginPath();
                ctx.arc(screenX, screenY, 4, 0, 2 * Math.PI);
                ctx.fill();

                // Draw coordinate label
                ctx.fillStyle = 'black';
                ctx.fillText(`(${x},${y})`, screenX, screenY - 15);
            }
        });

        // Highlight y-intercept with different color
        if (intercept >= calculator.yMin && intercept <= calculator.yMax &&
            0 >= calculator.xMin && 0 <= calculator.xMax) {
            const [screenX, screenY] = calculator.graphToScreen(0, intercept);
            ctx.fillStyle = 'blue';
            ctx.beginPath();
            ctx.arc(screenX, screenY, 6, 0, 2 * Math.PI);
            ctx.fill();

            ctx.fillStyle = 'blue';
            ctx.font = 'bold 14px Arial';
            ctx.fillText(`Y-int: (0,${intercept})`, screenX, screenY - 20);
        }
    }

    /**
     * Draw quadratic function points with parabola curve
     */
    drawQuadraticPoints(ctx, equation, { a, h, k }, calculator) {
        // Generate points for smooth parabola
        const points = [];
        const xMin = calculator.xMin;
        const xMax = calculator.xMax;

        const numPoints = 100;
        for (let i = 0; i <= numPoints; i++) {
            const x = xMin + (xMax - xMin) * i / numPoints;
            const y = a * (x - h) * (x - h) + k;

            if (y >= calculator.yMin && y <= calculator.yMax) {
                const [screenX, screenY] = calculator.graphToScreen(x, y);
                points.push({ x, y, screenX, screenY });
            }
        }

        // Draw the parabola curve
        if (points.length > 1) {
            ctx.strokeStyle = '#ff0000';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(points[0].screenX, points[0].screenY);

            for (let i = 1; i < points.length; i++) {
                ctx.lineTo(points[i].screenX, points[i].screenY);
            }
            ctx.stroke();
        }

        // Mark specific coordinate points around vertex
        const keyXOffsets = [-2, -1, 0, 1, 2];
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';

        keyXOffsets.forEach(offset => {
            const x = h + offset;
            const y = a * (x - h) * (x - h) + k;

            if (x >= calculator.xMin && x <= calculator.xMax &&
                y >= calculator.yMin && y <= calculator.yMax) {

                const [screenX, screenY] = calculator.graphToScreen(x, y);

                // Color coding: purple for vertex, green for others
                if (offset === 0) {
                    // Vertex point
                    ctx.fillStyle = 'purple';
                    ctx.beginPath();
                    ctx.arc(screenX, screenY, 6, 0, 2 * Math.PI);
                    ctx.fill();

                    ctx.fillStyle = 'purple';
                    ctx.font = 'bold 14px Arial';
                    ctx.fillText(`Vertex: (${x},${y})`, screenX, screenY - 20);
                } else {
                    // Regular points
                    ctx.fillStyle = 'green';
                    ctx.beginPath();
                    ctx.arc(screenX, screenY, 4, 0, 2 * Math.PI);
                    ctx.fill();

                    ctx.fillStyle = 'black';
                    ctx.font = '12px Arial';
                    ctx.fillText(`(${x},${y})`, screenX, screenY - 15);
                }
            }
        });

        // Draw axis of symmetry
        if (h >= calculator.xMin && h <= calculator.xMax) {
            const [axisScreenX1, axisScreenY1] = calculator.graphToScreen(h, calculator.yMin);
            const [axisScreenX2, axisScreenY2] = calculator.graphToScreen(h, calculator.yMax);

            ctx.strokeStyle = 'purple';
            ctx.lineWidth = 1;
            ctx.setLineDash([5, 5]);
            ctx.beginPath();
            ctx.moveTo(axisScreenX1, axisScreenY1);
            ctx.lineTo(axisScreenX2, axisScreenY2);
            ctx.stroke();
            ctx.setLineDash([]);
        }
    }
    

    /**
     * Update the graph with current equations (now for display only)
     */
    updateGraph() {
        // This is now just for status display
        console.log(`🎨 Individual graph created for equation`);
    }
    
    /**
     * Save current graph as PNG (legacy - now creates summary)
     */
    async saveCurrentGraph() {
        try {
            // Create a summary graph showing the current state
            const buffer = await this.calculator.buffer("image/png");

            const filename = `summary_${String(this.equationCounter).padStart(3, '0')}.png`;
            const filepath = path.join('./temp', filename);

            // Create directory if it doesn't exist
            if (!fs.existsSync('./temp')) {
                fs.mkdirSync('./temp', { recursive: true });
            }

            fs.writeFileSync(filepath, buffer);
            console.log(`💾 Summary graph saved: ${filename}`);
        } catch (error) {
            console.error("❌ Error saving summary graph:", error);
        }
    }

    /**
     * Save individual graph for single equation with coordinate points marked
     */
    async saveIndividualGraph(equation, calculator) {
        try {
            // Create a custom version that marks coordinate points
            const buffer = await this.createGraphWithPoints(equation, calculator);

            const filename = `equation_${String(this.equationCounter).padStart(3, '0')}_${this.sanitizeFilename(equation)}.png`;
            const filepath = path.join('./temp', filename);

            // Create directory if it doesn't exist
            if (!fs.existsSync('./temp')) {
                fs.mkdirSync('./temp', { recursive: true });
            }

            fs.writeFileSync(filepath, buffer);
            console.log(`💾 Individual graph saved: ${filename}`);
        } catch (error) {
            console.error("❌ Error saving individual graph:", error);
        }
    }

    /**
     * Create graph with coordinate points marked and proper line drawing
     */
    async createGraphWithPoints(equation, calculator) {
        const canvas = createCanvas(calculator.width, calculator.height);
        const ctx = canvas.getContext("2d");

        // Draw the basic graph
        await calculator.drawGraph(ctx);

        // Add coordinate points and enhanced line drawing
        this.markCoordinatePoints(ctx, equation, calculator);

        return canvas.toBuffer("image/png");
    }
    const EndSection17 = "close"
// ==================== MATRIX METHODS ====================

    /**
     * Parse matrix input from various formats
     */
    parseMatrixInput(input) {
        const cleanInput = input.trim().toLowerCase();

        // Pattern 1: matrix [[a,b],[c,d]] - standard notation
        const pattern1 = /matrix\s*\[\[([^\]]+)\],\[([^\]]+)\]\]/i;
        const match1 = input.match(pattern1);
        if (match1) {
            try {
                const row1 = match1[1].split(',').map(x => parseFloat(x.trim()));
                const row2 = match2[2].split(',').map(x => parseFloat(x.trim()));
                return {
                    type: '2x2',
                    values: [row1, row2]
                };
            } catch (e) {
                return null;
            }
        }

        // Pattern 2: matrix [a,b,c,d] - flat array for 2x2
        const pattern2 = /matrix\s*\[([^\]]+)\]/i;
        const match2 = input.match(pattern2);
        if (match2) {
            try {
                const values = match2[1].split(',').map(x => parseFloat(x.trim()));
                if (values.length === 4) {
                    return {
                        type: '2x2',
                        values: [[values[0], values[1]], [values[2], values[3]]]
                    };
                } else if (values.length === 9) {
                    return {
                        type: '3x3',
                        values: [
                            [values[0], values[1], values[2]],
                            [values[3], values[4], values[5]],
                            [values[6], values[7], values[8]]
                        ]
                    };
                }
            } catch (e) {
                return null;
            }
        }

        // Pattern 3: matrix a b c d - space separated for 2x2
        const pattern3 = /matrix\s+([-+]?\d*\.?\d+)\s+([-+]?\d*\.?\d+)\s+([-+]?\d*\.?\d+)\s+([-+]?\d*\.?\d+)/i;
        const match3 = input.match(pattern3);
        if (match3) {
            return {
                type: '2x2',
                values: [
                    [parseFloat(match3[1]), parseFloat(match3[2])],
                    [parseFloat(match3[3]), parseFloat(match3[4])]
                ]
            };
        }

        // Pattern 4: matrix rotation angle - rotation matrix
        const pattern4 = /matrix\s+rotation\s+([-+]?\d*\.?\d+)/i;
        const match4 = input.match(pattern4);
        if (match4) {
            const angle = parseFloat(match4[1]) * Math.PI / 180; // Convert to radians
            return {
                type: '2x2',
                values: [
                    [Math.cos(angle), -Math.sin(angle)],
                    [Math.sin(angle), Math.cos(angle)]
                ],
                description: `Rotation by ${match4[1]}°`
            };
        }

        // Pattern 5: matrix scale sx sy - scaling matrix
        const pattern5 = /matrix\s+scale\s+([-+]?\d*\.?\d+)\s+([-+]?\d*\.?\d+)/i;
        const match5 = input.match(pattern5);
        if (match5) {
            return {
                type: '2x2',
                values: [
                    [parseFloat(match5[1]), 0],
                    [0, parseFloat(match5[2])]
                ],
                description: `Scale by (${match5[1]}, ${match5[2]})`
            };
        }

        // Pattern 6: matrix reflection axis - reflection matrix
        const pattern6 = /matrix\s+reflection\s+(x|y)/i;
        const match6 = input.match(pattern6);
        if (match6) {
            const axis = match6[1].toLowerCase();
            if (axis === 'x') {
                return {
                    type: '2x2',
                    values: [[1, 0], [0, -1]],
                    description: 'Reflection across x-axis'
                };
            } else {
                return {
                    type: '2x2',
                    values: [[-1, 0], [0, 1]],
                    description: 'Reflection across y-axis'
                };
            }
        }

        // Pattern 7: matrix shear sx sy - shear matrix
        const pattern7 = /matrix\s+shear\s+([-+]?\d*\.?\d+)\s+([-+]?\d*\.?\d+)/i;
        const match7 = input.match(pattern7);
        if (match7) {
            return {
                type: '2x2',
                values: [
                    [1, parseFloat(match7[1])],
                    [parseFloat(match7[2]), 1]
                ],
                description: `Shear by (${match7[1]}, ${match7[2]})`
            };
        }

        return null;
    }

    /**
     * Calculate matrix determinant
     */
    calculateDeterminant(matrix) {
        const n = matrix.length;

        if (n === 2) {
            // 2x2 matrix
            return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
        } else if (n === 3) {
            // 3x3 matrix using rule of Sarrus
            return (
                matrix[0][0] * matrix[1][1] * matrix[2][2] +
                matrix[0][1] * matrix[1][2] * matrix[2][0] +
                matrix[0][2] * matrix[1][0] * matrix[2][1] -
                matrix[0][2] * matrix[1][1] * matrix[2][0] -
                matrix[0][1] * matrix[1][0] * matrix[2][2] -
                matrix[0][0] * matrix[1][2] * matrix[2][1]
            );
        }

        return null;
    }

    /**
     * Calculate matrix trace
     */
    calculateTrace(matrix) {
        let trace = 0;
        for (let i = 0; i < matrix.length; i++) {
            trace += matrix[i][i];
        }
        return trace;
    }

    /**
     * Transpose matrix
     */
    transposeMatrix(matrix) {
        const rows = matrix.length;
        const cols = matrix[0].length;
        const transposed = [];

        for (let i = 0; i < cols; i++) {
            transposed[i] = [];
            for (let j = 0; j < rows; j++) {
                transposed[i][j] = matrix[j][i];
            }
        }

        return transposed;
    }

    /**
     * Invert 2x2 matrix
     */
    invertMatrix2x2(matrix) {
        const det = this.calculateDeterminant(matrix);

        if (Math.abs(det) < 1e-10) {
            return null; // Matrix is singular
        }

        return [
            [matrix[1][1] / det, -matrix[0][1] / det],
            [-matrix[1][0] / det, matrix[0][0] / det]
        ];
    }

    /**
     * Multiply two matrices
     */
    multiplyMatrices(A, B) {
        const rowsA = A.length;
        const colsA = A[0].length;
        const colsB = B[0].length;

        const result = [];
        for (let i = 0; i < rowsA; i++) {
            result[i] = [];
            for (let j = 0; j < colsB; j++) {
                result[i][j] = 0;
                for (let k = 0; k < colsA; k++) {
                    result[i][j] += A[i][k] * B[k][j];
                }
            }
        }

        return result;
    }

    /**
     * Apply matrix transformation to a point
     */
    transformPoint(matrix, point) {
        if (matrix.length === 2 && matrix[0].length === 2) {
            // 2D transformation
            return {
                x: matrix[0][0] * point.x + matrix[0][1] * point.y,
                y: matrix[1][0] * point.x + matrix[1][1] * point.y
            };
        }
        return point;
    }

    /**
     * Calculate eigenvalues for 2x2 matrix
     */
    calculateEigenvalues2x2(matrix) {
        const a = matrix[0][0];
        const b = matrix[0][1];
        const c = matrix[1][0];
        const d = matrix[1][1];

        const trace = a + d;
        const det = a * d - b * c;

        const discriminant = trace * trace - 4 * det;

        if (discriminant < 0) {
            // Complex eigenvalues
            const real = trace / 2;
            const imag = Math.sqrt(-discriminant) / 2;
            return {
                lambda1: { real, imag },
                lambda2: { real, imag: -imag },
                isReal: false
            };
        } else {
            // Real eigenvalues
            const lambda1 = (trace + Math.sqrt(discriminant)) / 2;
            const lambda2 = (trace - Math.sqrt(discriminant)) / 2;
            return {
                lambda1: { real: lambda1, imag: 0 },
                lambda2: { real: lambda2, imag: 0 },
                isReal: true
            };
        }
    }

    /**
     * Classify matrix transformation type
     */
    classifyTransformation(matrix) {
        const det = this.calculateDeterminant(matrix);
        const trace = this.calculateTrace(matrix);
        const eigenvalues = this.calculateEigenvalues2x2(matrix);

        let classification = [];

        // Check for identity
        if (Math.abs(matrix[0][0] - 1) < 1e-10 && Math.abs(matrix[1][1] - 1) < 1e-10 &&
            Math.abs(matrix[0][1]) < 1e-10 && Math.abs(matrix[1][0]) < 1e-10) {
            classification.push("Identity");
        }

        // Check for rotation
        if (Math.abs(det - 1) < 1e-10 && 
            Math.abs(matrix[0][0] - matrix[1][1]) < 1e-10 &&
            Math.abs(matrix[0][1] + matrix[1][0]) < 1e-10) {
            const angle = Math.acos(matrix[0][0]) * 180 / Math.PI;
            classification.push(`Rotation (${angle.toFixed(1)}°)`);
        }

        // Check for reflection
        if (Math.abs(det + 1) < 1e-10) {
            classification.push("Reflection");
        }

        // Check for scaling
        if (Math.abs(matrix[0][1]) < 1e-10 && Math.abs(matrix[1][0]) < 1e-10) {
            classification.push(`Scaling (${matrix[0][0].toFixed(2)}, ${matrix[1][1].toFixed(2)})`);
        }

        // Check for shear
        if (Math.abs(det - 1) < 1e-10 && 
            (Math.abs(matrix[0][1]) > 1e-10 || Math.abs(matrix[1][0]) > 1e-10)) {
            classification.push("Shear");
        }

        // Determinant analysis
        if (Math.abs(det) < 1e-10) {
            classification.push("Singular (no inverse)");
        } else if (det < 0) {
            classification.push("Orientation-reversing");
        } else {
            classification.push("Orientation-preserving");
        }

        return classification.length > 0 ? classification : ["General linear transformation"];
    }

/**
     * Add matrix to calculator
     */
    addMatrix(input) {
        const parsed = this.parseMatrixInput(input);

        if (!parsed) {
            console.log("❌ Invalid matrix format!");
            console.log("💡 Examples:");
            console.log("  • matrix [[1,2],[3,4]]     → Standard notation");
            console.log("  • matrix [1,2,3,4]         → Flat array for 2x2");
            console.log("  • matrix 1 2 3 4           → Space separated");
            console.log("  • matrix rotation 45       → Rotation by 45°");
            console.log("  • matrix scale 2 3         → Scale by (2,3)");
            console.log("  • matrix reflection x      → Reflect across x-axis");
            console.log("  • matrix shear 0.5 0       → Shear transformation");
            return false;
        }

        // Validate matrix values
        const flat = parsed.values.flat();
        if (flat.some(val => isNaN(val))) {
            console.log("❌ Invalid matrix values! Please use numbers only.");
            return false;
        }

        // Calculate matrix properties
        const matrixData = this.analyzeMatrix(parsed.values, parsed.description);

        this.matrixCounter++;
        this.matrixHistory.push({
            id: this.matrixCounter,
            input: input,
            matrix: parsed.values,
            data: matrixData,
            description: parsed.description
        });

        // Display analysis
        this.displayMatrixAnalysis(matrixData);

        // Save visualization
        this.saveMatrixGraph(matrixData);

        return true;
    }

    /**
     * Analyze matrix and calculate all properties
     */
    analyzeMatrix(matrix, description = null) {
        const det = this.calculateDeterminant(matrix);
        const trace = this.calculateTrace(matrix);
        const transposed = this.transposeMatrix(matrix);
        const inverse = matrix.length === 2 ? this.invertMatrix2x2(matrix) : null;
        const eigenvalues = matrix.length === 2 ? this.calculateEigenvalues2x2(matrix) : null;
        const classifications = this.classifyTransformation(matrix);

        // Create test grid points
        const gridPoints = this.createTestGrid();
        const transformedPoints = gridPoints.map(p => this.transformPoint(matrix, p));

        // Create basis vectors
        const basisVectors = [
            { original: { x: 1, y: 0 }, transformed: this.transformPoint(matrix, { x: 1, y: 0 }) },
            { original: { x: 0, y: 1 }, transformed: this.transformPoint(matrix, { x: 0, y: 1 }) }
        ];

        return {
            matrix,
            description,
            determinant: det,
            trace,
            transposed,
            inverse,
            eigenvalues,
            classifications,
            gridPoints,
            transformedPoints,
            basisVectors,
            isInvertible: inverse !== null
        };
    }

    /**
     * Create test grid for visualization
     */
    createTestGrid() {
        const points = [];
        for (let x = -5; x <= 5; x++) {
            for (let y = -5; y <= 5; y++) {
                points.push({ x, y });
            }
        }
        return points;
    }

    /**
     * Display comprehensive matrix analysis
     */
    displayMatrixAnalysis(data) {
        const { matrix, description, determinant, trace, transposed, inverse, 
                eigenvalues, classifications } = data;

        console.log(`\n🔢 MATRIX ANALYSIS`);
        console.log("=".repeat(60));

        if (description) {
            console.log(`📝 Description: ${description}`);
        }

        // Original matrix
        console.log(`\n📊 Original Matrix:`);
        this.printMatrix(matrix);

        // Properties
        console.log(`\n📐 Properties:`);
        console.log(`   Determinant: ${determinant.toFixed(4)}`);
        console.log(`   Trace: ${trace.toFixed(4)}`);
        console.log(`   Invertible: ${inverse ? '✓ Yes' : '✗ No'}`);

        // Classifications
        console.log(`\n🏷️  Classification:`);
        classifications.forEach(c => console.log(`   • ${c}`));

        // Eigenvalues
        if (eigenvalues) {
            console.log(`\n🔬 Eigenvalues:`);
            if (eigenvalues.isReal) {
                console.log(`   λ₁ = ${eigenvalues.lambda1.real.toFixed(4)}`);
                console.log(`   λ₂ = ${eigenvalues.lambda2.real.toFixed(4)}`);
            } else {
                console.log(`   λ₁ = ${eigenvalues.lambda1.real.toFixed(4)} + ${eigenvalues.lambda1.imag.toFixed(4)}i`);
                console.log(`   λ₂ = ${eigenvalues.lambda2.real.toFixed(4)} - ${eigenvalues.lambda2.imag.toFixed(4)}i`);
            }
        }

        // Transposed matrix
        console.log(`\n🔄 Transposed Matrix:`);
        this.printMatrix(transposed);

        // Inverse matrix
        if (inverse) {
            console.log(`\n↩️  Inverse Matrix:`);
            this.printMatrix(inverse);
        }

        // Basis transformation
        console.log(`\n📍 Basis Vector Transformation:`);
        console.log(`   î: (1,0) → (${data.basisVectors[0].transformed.x.toFixed(2)}, ${data.basisVectors[0].transformed.y.toFixed(2)})`);
        console.log(`   ĵ: (0,1) → (${data.basisVectors[1].transformed.x.toFixed(2)}, ${data.basisVectors[1].transformed.y.toFixed(2)})`);

        // Area/Volume scaling
        console.log(`\n📏 Geometric Effects:`);
        console.log(`   Area scaling factor: ${Math.abs(determinant).toFixed(4)}`);
        if (determinant < 0) {
            console.log(`   ⚠️  Orientation reversed`);
        }

        console.log("=".repeat(60));
    }

    /**
     * Print matrix in formatted way
     */
    printMatrix(matrix) {
        const formatted = matrix.map(row => 
            '   [ ' + row.map(val => val.toFixed(4).padStart(8)).join(', ') + ' ]'
        ).join('\n');
        console.log(formatted);
    }

    /**
     * Save matrix visualization graph
     */
    async saveMatrixGraph(matrixData) {
        try {
            const canvas = createCanvas(this.calculator.width * 2, this.calculator.height);
            const ctx = canvas.getContext('2d');

            this.drawMatrixVisualization(ctx, matrixData);

            const filename = `matrix_${String(this.matrixCounter).padStart(3, '0')}_transformation.png`;
            const filepath = path.join('./temp', filename);

            if (!fs.existsSync('./temp')) {
                fs.mkdirSync('./temp', { recursive: true });
            }

            const buffer = canvas.toBuffer('image/png');
            fs.writeFileSync(filepath, buffer);

            console.log(`💾 Matrix visualization saved: ${filename}`);
        } catch (error) {
            console.error("❌ Error saving matrix graph:", error);
        }
    }

    /**
     * Draw complete matrix visualization (side-by-side comparison)
     */
    drawMatrixVisualization(ctx, matrixData) {
        const width = this.calculator.width;
        const height = this.calculator.height;

        // Draw original on left, transformed on right
        this.drawMatrixSide(ctx, matrixData, 0, false); // Original
        this.drawMatrixSide(ctx, matrixData, width, true); // Transformed

        // Draw dividing line
        ctx.strokeStyle = '#999';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(width, 0);
        ctx.lineTo(width, height);
        ctx.stroke();

        // Add labels
        ctx.fillStyle = 'black';
        ctx.font = 'bold 18px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Original', width / 2, 30);
        ctx.fillText('Transformed', width * 1.5, 30);
    }

    /**
     * Draw one side of matrix visualization
     */
    drawMatrixSide(ctx, matrixData, offsetX, isTransformed) {
        const width = this.calculator.width;
        const height = this.calculator.height;

        // Save context and translate
        ctx.save();
        ctx.translate(offsetX, 0);

        // Create temporary calculator for this side
        const tempCalc = this.createFreshCalculator();
        
        // Draw grid and axes
        tempCalc.drawGrid(ctx);

        // Draw grid transformation if enabled
        if (this.matrixSettings.showGrid) {
            this.drawTransformedGrid(ctx, matrixData, tempCalc, isTransformed);
        }

        // Draw basis vectors
        if (this.matrixSettings.showBasis) {
            this.drawBasisVectors(ctx, matrixData, tempCalc, isTransformed);
        }

        // Draw unit square transformation
        this.drawUnitSquare(ctx, matrixData, tempCalc, isTransformed);

        // Draw matrix info panel
        this.drawMatrixInfoPanel(ctx, matrixData, isTransformed);

        ctx.restore();
    }

    /**
     * Draw transformed grid lines
     */
    drawTransformedGrid(ctx, matrixData, calculator, isTransformed) {
        ctx.strokeStyle = this.matrixSettings.gridColor;
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.3;

        const gridRange = 5;
        
        for (let i = -gridRange; i <= gridRange; i++) {
            // Vertical grid lines
            const line1 = [
                { x: i, y: -gridRange },
                { x: i, y: gridRange }
            ];

            // Horizontal grid lines
            const line2 = [
                { x: -gridRange, y: i },
                { x: gridRange, y: i }
            ];

            if (isTransformed) {
                this.drawTransformedLine(ctx, line1, matrixData.matrix, calculator);
                this.drawTransformedLine(ctx, line2, matrixData.matrix, calculator);
            } else {
                this.drawLine(ctx, line1, calculator);
                this.drawLine(ctx, line2, calculator);
            }
        }

        ctx.globalAlpha = 1.0;
    }

    /**
     * Draw line between two points
     */
    drawLine(ctx, points, calculator) {
        if (points.length < 2) return;

        ctx.beginPath();
        const [startX, startY] = calculator.graphToScreen(points[0].x, points[0].y);
        ctx.moveTo(startX, startY);

        for (let i = 1; i < points.length; i++) {
            const [x, y] = calculator.graphToScreen(points[i].x, points[i].y);
            ctx.lineTo(x, y);
        }
        ctx.stroke();
    }

    /**
     * Draw transformed line
     */
    drawTransformedLine(ctx, points, matrix, calculator) {
        const transformed = points.map(p => this.transformPoint(matrix, p));
        this.drawLine(ctx, transformed, calculator);
    }
/**
     * Draw basis vectors
     */
    drawBasisVectors(ctx, matrixData, calculator, isTransformed) {
        const { basisVectors } = matrixData;

        // i-hat (x-axis basis vector) - red
        const iHat = isTransformed ? basisVectors[0].transformed : basisVectors[0].original;
        this.drawVectorFromOrigin(ctx, iHat, calculator, '#ff0000', 'î');

        // j-hat (y-axis basis vector) - blue
        const jHat = isTransformed ? basisVectors[1].transformed : basisVectors[1].original;
        this.drawVectorFromOrigin(ctx, jHat, calculator, '#0066ff', 'ĵ');
    }

    /**
     * Draw vector from origin
     */
    drawVectorFromOrigin(ctx, point, calculator, color, label) {
        const origin = calculator.graphToScreen(0, 0);
        const end = calculator.graphToScreen(point.x, point.y);

        // Draw arrow
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.lineWidth = 3;

        // Line
        ctx.beginPath();
        ctx.moveTo(origin[0], origin[1]);
        ctx.lineTo(end[0], end[1]);
        ctx.stroke();

        // Arrowhead
        const angle = Math.atan2(end[1] - origin[1], end[0] - origin[0]);
        const arrowLength = 15;
        const arrowAngle = Math.PI / 6;

        ctx.beginPath();
        ctx.moveTo(end[0], end[1]);
        ctx.lineTo(
            end[0] - arrowLength * Math.cos(angle - arrowAngle),
            end[1] - arrowLength * Math.sin(angle - arrowAngle)
        );
        ctx.lineTo(
            end[0] - arrowLength * Math.cos(angle + arrowAngle),
            end[1] - arrowLength * Math.sin(angle + arrowAngle)
        );
        ctx.closePath();
        ctx.fill();

        // Label
        ctx.fillStyle = color;
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(label, end[0] + 15, end[1] - 10);
    }

    /**
     * Draw unit square and its transformation
     */
    drawUnitSquare(ctx, matrixData, calculator, isTransformed) {
        // Define unit square vertices
        const square = [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 1, y: 1 },
            { x: 0, y: 1 },
            { x: 0, y: 0 } // Close the square
        ];

        const vertices = isTransformed 
            ? square.map(p => this.transformPoint(matrixData.matrix, p))
            : square;

        // Draw filled square
        ctx.fillStyle = isTransformed 
            ? 'rgba(255, 0, 0, 0.15)' 
            : 'rgba(0, 100, 255, 0.15)';
        
        ctx.beginPath();
        const [startX, startY] = calculator.graphToScreen(vertices[0].x, vertices[0].y);
        ctx.moveTo(startX, startY);
        
        for (let i = 1; i < vertices.length; i++) {
            const [x, y] = calculator.graphToScreen(vertices[i].x, vertices[i].y);
            ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();

        // Draw outline
        ctx.strokeStyle = isTransformed ? '#ff0000' : '#0066ff';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw vertices
        for (let i = 0; i < vertices.length - 1; i++) {
            const [x, y] = calculator.graphToScreen(vertices[i].x, vertices[i].y);
            ctx.fillStyle = isTransformed ? '#ff0000' : '#0066ff';
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, 2 * Math.PI);
            ctx.fill();
        }
    }

    /**
     * Draw matrix information panel
     */
    drawMatrixInfoPanel(ctx, matrixData, isTransformed) {
        const { matrix, determinant, classifications } = matrixData;

        // Background
        ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
        ctx.fillRect(10, 50, 200, 150);
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 1;
        ctx.strokeRect(10, 50, 200, 150);

        // Title
        ctx.fillStyle = 'black';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(isTransformed ? 'After Transformation' : 'Before Transformation', 20, 65);

        // Matrix display
        ctx.font = '10px Courier New';
        let yPos = 85;
        
        if (!isTransformed) {
            ctx.fillText('Matrix:', 20, yPos);
            yPos += 15;
            matrix.forEach(row => {
                const rowStr = '[ ' + row.map(v => v.toFixed(2).padStart(6)).join(' ') + ' ]';
                ctx.fillText(rowStr, 20, yPos);
                yPos += 12;
            });

            yPos += 5;
            ctx.font = '10px Arial';
            ctx.fillText(`det = ${determinant.toFixed(3)}`, 20, yPos);
            yPos += 15;
            ctx.fillText(`Area scale: ${Math.abs(determinant).toFixed(3)}x`, 20, yPos);
        } else {
            ctx.font = '9px Arial';
            yPos = 80;
            ctx.fillText('Type:', 20, yPos);
            yPos += 12;
            classifications.slice(0, 3).forEach(c => {
                const shortC = c.length > 28 ? c.substring(0, 25) + '...' : c;
                ctx.fillText('• ' + shortC, 20, yPos);
                yPos += 12;
            });
        }
    }

    /**
     * Display matrix history
     */
    displayMatrixHistory() {
        console.log(`\n📜 Matrix History (${this.matrixCounter} matrices)`);
        console.log("=".repeat(50));

        if (this.matrixHistory.length === 0) {
            console.log("No matrices added yet.");
            return;
        }

        this.matrixHistory.forEach(entry => {
            const { matrix, data } = entry;
            console.log(`${entry.id}. ${entry.input}`);
            if (entry.description) {
                console.log(`   Description: ${entry.description}`);
            }
            console.log(`   Determinant: ${data.determinant.toFixed(3)}`);
            console.log(`   Type: ${data.classifications[0]}`);
            console.log("");
        });
    }

    /**
     * Toggle matrix display settings
     */
    toggleMatrixSettings() {
        console.log("\n🎛️ Matrix Display Settings:");
        console.log(`   Show Grid: ${this.matrixSettings.showGrid ? '✓ Enabled' : '✗ Disabled'}`);
        console.log(`   Show Basis: ${this.matrixSettings.showBasis ? '✓ Enabled' : '✗ Disabled'}`);
        console.log(`   Show Eigenvalues: ${this.matrixSettings.showEigenvalues ? '✓ Enabled' : '✗ Disabled'}`);

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question("Enter setting to toggle (grid/basis/eigenvalues) or 'cancel': ", (input) => {
            switch (input.toLowerCase()) {
                case 'grid':
                    this.matrixSettings.showGrid = !this.matrixSettings.showGrid;
                    console.log(`Grid display ${this.matrixSettings.showGrid ? 'enabled' : 'disabled'}`);
                    break;
                case 'basis':
                    this.matrixSettings.showBasis = !this.matrixSettings.showBasis;
                    console.log(`Basis display ${this.matrixSettings.showBasis ? 'enabled' : 'disabled'}`);
                    break;
                case 'eigenvalues':
                    this.matrixSettings.showEigenvalues = !this.matrixSettings.showEigenvalues;
                    console.log(`Eigenvalues display ${this.matrixSettings.showEigenvalues ? 'enabled' : 'disabled'}`);
                    break;
                case 'cancel':
                    console.log("No changes made.");
                    break;
                default:
                    console.log("❌ Invalid setting. Use 'grid', 'basis', 'eigenvalues', or 'cancel'.");
            }
            rl.close();
        });
    }
    const EndSection18 = "close"

/**
     * Display all available formulas with descriptions (UPDATED WITH NEW SHAPES)
     */
    displayAllFormulas() {
        console.log("\n" + "=".repeat(80));
        console.log("📊 COMPLETE MATHEMATICAL FORMULA REFERENCE");
        console.log("=".repeat(80));

        const categories = [
            {
                title: "📏 LINEAR FUNCTIONS (y = mx + c)",
                formulas: ["y=2x+3", "y=x+1", "y=-x+5", "y=0.5x-2", "y=3x"]
            },
            {
                title: "📈 QUADRATIC FUNCTIONS",
                formulas: ["y=x**2", "y=-x**2", "y=x**2+2x+1", "y=2x**2-4x+1", "y=-0.5x**2+3x-2"]
            },
            {
                title: "🔄 CUBIC & POLYNOMIAL FUNCTIONS",
                formulas: ["y=x**3", "y=x**3-3x**2+2x", "y=x**4-2x**2"]
            },
            {
                title: "📊 EXPONENTIAL FUNCTIONS",
                formulas: ["y=2**x", "y=0.5**x", "y=e**x", "y=e**(-x)", "y=2*e**(0.5x)"]
            },
            {
                title: "📉 LOGARITHMIC FUNCTIONS",
                formulas: ["y=log(x)", "y=log(x,2)", "y=log(x+1)", "y=-log(x)"]
            },
            {
                title: "🌊 TRIGONOMETRIC FUNCTIONS",
                formulas: ["y=sin(x)", "y=cos(x)", "y=tan(x)", "y=2sin(x)", "y=sin(2x)", "y=sin(x-pi/2)"]
            },
            {
                title: "🔄 INVERSE TRIG FUNCTIONS",
                formulas: ["y=asin(x)", "y=acos(x)", "y=atan(x)"]
            },
            {
                title: "📐 ABSOLUTE VALUE FUNCTIONS",
                formulas: ["y=abs(x)", "y=abs(x-2)", "y=abs(x)+abs(x-4)", "y=-abs(x)+3"]
            },
            {
                title: "√ SQUARE ROOT FUNCTIONS",
                formulas: ["y=sqrt(x)", "y=sqrt(x-1)", "y=-sqrt(x)", "y=2sqrt(x+3)"]
            },
            {
                title: "➗ RATIONAL FUNCTIONS",
                formulas: ["y=1/x", "y=1/(x-1)", "y=(x+1)/(x-2)", "y=x**2/(x**2+1)"]
            },
            {
                title: "🔺 2D GEOMETRY SHAPES",
                formulas: [
                    "triangle A(0,0) B(4,0) C(2,3)",
                    "circle center(0,0) radius 5",
                    "rectangle (0,0) 4 3",
                    "square (0,0) 4",
                    "parallelogram (0,0) 5 4 3",
                    "polygon 6 sides (0,0) 2",
                    "ellipse center(0,0) 5 3",
                    "quadrilateral A(0,0) B(4,0) C(5,3) D(1,3)",
                    "trapezoid (0,0) 6 4 3"
                ]
            },
            {
                title: "🧊 3D GEOMETRY SHAPES",
                formulas: [
                    "sphere center(0,0,0) radius 5",
                    "cylinder center(0,0,0) radius 3 height 5",
                    "cone center(0,0,0) radius 3 height 5",
                    "cube (0,0,0) 4"
                ]
            },
            {
                title: "➡️  VECTOR OPERATIONS",
                formulas: [
                    "vector A(1,2) B(5,4)    → Displacement vector",
                    "vector <3,4>            → Component form",
                    "vectors A(1,1) B(4,3) C(6,5) → Multiple vectors",
                    "vector A(1,2,3) B(4,5,6) → 3D vector"
                ]
            },
            {
                title: "🔢 MATRIX TRANSFORMATIONS",
                formulas: [
                    "matrix [[1,2],[3,4]]    → Standard 2x2 matrix",
                    "matrix [1,2,3,4]        → Flat array notation",
                    "matrix 1 2 3 4          → Space separated",
                    "matrix rotation 45      → Rotation by 45°",
                    "matrix scale 2 3        → Scale transformation",
                    "matrix reflection x     → Reflection across x-axis"
                ]
            }
        ];

        categories.forEach(category => {
            console.log(`\n${category.title}`);
            console.log("-".repeat(50));
            category.formulas.forEach(formula => {
                if (formula.includes('→')) {
                    console.log(`${formula}`);
                } else {
                    const description = this.formulaDatabase[formula] || 
                        (formula.includes('triangle') ? "Triangle analysis" : 
                         formula.includes('circle') ? "Circle analysis" :
                         formula.includes('rectangle') ? "Rectangle analysis" :
                         formula.includes('square') ? "Square analysis" :
                         formula.includes('parallelogram') ? "Parallelogram analysis" :
                         formula.includes('polygon') ? "Polygon analysis" :
                         formula.includes('ellipse') ? "Ellipse analysis" :
                         formula.includes('quadrilateral') ? "Quadrilateral analysis" :
                         formula.includes('trapezoid') ? "Trapezoid analysis" :
                         formula.includes('sphere') ? "Sphere (3D) analysis" :
                         formula.includes('cylinder') ? "Cylinder (3D) analysis" :
                         formula.includes('cone') ? "Cone (3D) analysis" :
                         formula.includes('cube') ? "Cube (3D) analysis" :
                         formula.includes('vector') ? "Vector operation" :
                         formula.includes('matrix') ? "Matrix transformation" :
                         "Mathematical function");
                    console.log(`${formula.padEnd(40)} → ${description}`);
                }
            });
        });

        console.log("\n" + "=".repeat(80));
        console.log("📝 INPUT EXAMPLES:");
        console.log("");
        console.log("📈 EQUATIONS:");
        console.log("  • Linear:          y=2x+3, y=-0.5x+1, y=3x-2");
        console.log("  • Quadratic:       y=x**2+2x+1, y=-2x**2+4x");
        console.log("  • Exponential:     y=2**x, y=e**(-x)");
        console.log("  • Trigonometric:   y=sin(x), y=cos(2x), y=tan(x)");
        console.log("");
        console.log("🔺 2D GEOMETRY SHAPES:");
        console.log("  • Triangle:        triangle A(0,0) B(4,0) C(2,3)");
        console.log("  • Circle:          circle center(0,0) radius 5");
        console.log("  • Rectangle:       rectangle (0,0) 4 3");
        console.log("  • Square:          square (0,0) 4");
        console.log("  • Parallelogram:   parallelogram (0,0) 5 4 3");
        console.log("  • Polygon:         polygon 6 sides (0,0) 2");
        console.log("  • Ellipse:         ellipse center(0,0) 5 3");
        console.log("  • Quadrilateral:   quadrilateral A(0,0) B(4,0) C(5,3) D(1,3)");
        console.log("  • Trapezoid:       trapezoid (0,0) 6 4 3");
        console.log("");
        console.log("🧊 3D GEOMETRY SHAPES:");
        console.log("  • Sphere:          sphere center(0,0,0) radius 5");
        console.log("  • Cylinder:        cylinder center(0,0,0) radius 3 height 5");
        console.log("  • Cone:            cone center(0,0,0) radius 3 height 5");
        console.log("  • Cube:            cube (0,0,0) 4");
        console.log("");
        console.log("➡️  VECTORS:");
        console.log("  • vector A(1,2) B(5,4)          → 2D displacement");
        console.log("  • vector <3,4>                  → Component form");
        console.log("  • vectors A(1,1) B(4,3) C(6,5)  → Multiple vectors");
        console.log("  • vector A(1,2,3) B(4,5,6)      → 3D vector");
        console.log("");
        console.log("🔢 MATRICES:");
        console.log("  • matrix [[1,2],[3,4]]          → Standard notation");
        console.log("  • matrix [1,2,3,4]              → Flat array (2x2)");
        console.log("  • matrix 1 0 0 1                → Identity matrix");
        console.log("  • matrix rotation 45            → 45° rotation");
        console.log("  • matrix scale 2 2              → Uniform scaling");
        console.log("");
        console.log("=".repeat(80));
        console.log("✨ FEATURES:");
        console.log("🎯 Each equation creates its own graph with coordinate points!");
        console.log("🔺 Complete geometric analysis for 2D shapes!");
        console.log("🧊 Full 3D shape analysis with projections!");
        console.log("➡️  Vector operations with magnitude, direction & operations!");
        console.log("🔢 Matrix transformations with before/after visualization!");
        console.log("📁 All visualizations saved to './temp/' folder");
        console.log("=".repeat(80));
    }

    /**
     * Display help menu (UPDATED WITH ALL NEW SHAPES)
     */
    displayHelp() {
        console.log("\n" + "=".repeat(70));
        console.log("🧮 GRAPHING CALCULATOR COMMANDS");
        console.log("=".repeat(70));
        
        console.log("\n📚 INFORMATION COMMANDS:");
        console.log("  📊 formulas  → Show all available mathematical formulas");
        console.log("  📜 history   → Show all history (equations, shapes, vectors, matrices)");
        console.log("  🔄 status    → Show current calculator status");
        console.log("  ❓ help      → Show this help menu");
        
        console.log("\n📈 GRAPHING COMMANDS:");
        console.log("  📈 graph     → Display current graph visualization");
        console.log("  💾 save      → Save current summary graph as PNG");
        console.log("  🎨 theme     → Change graph theme (standard/dark/scientific)");
        console.log("  📏 zoom      → Adjust viewing window (xmin xmax ymin ymax)");
        
        console.log("\n📋 HISTORY COMMANDS:");
        console.log("  📜 history   → Show all history");
        console.log("  🔺 triangles → Show triangle history");
        console.log("  ⭕ circles   → Show circle history");
        console.log("  ▭ rectangles → Show rectangle history");
        console.log("  ▢ squares    → Show square history");
        console.log("  ▱ parallelograms → Show parallelogram history");
        console.log("  ⬡ polygons   → Show polygon history");
        console.log("  ⬭ ellipses   → Show ellipse history");
        console.log("  ⬢ quadrilaterals → Show quadrilateral history");
        console.log("  ⏢ trapezoids → Show trapezoid history");
        console.log("  🌐 spheres   → Show sphere history");
        console.log("  🛢️ cylinders → Show cylinder history");
        console.log("  🔺 cones     → Show cone history");
        console.log("  🧊 cubes     → Show cube history");
        console.log("  ➡️  vectors   → Show vector history (alias: vhistory)");
        console.log("  🔢 matrices  → Show matrix history (alias: mhistory)");
        
        console.log("\n⚙️  SETTINGS COMMANDS:");
        console.log("  🎛️  vtoggle  → Toggle vector display options");
        console.log("  🎛️  mtoggle  → Toggle matrix display options");
        
        console.log("\n🗑️  MANAGEMENT COMMANDS:");
        console.log("  🗑️  clear    → Clear all items");
        console.log("  ⬅️  undo     → Remove last item");
        console.log("  🚪 quit     → Exit the calculator (alias: exit)");
        
        console.log("\n" + "=".repeat(70));
        console.log("📝 TO ADD ITEMS:");
        console.log("");
        console.log("  📈 EQUATION:  Just type it");
        console.log("     Examples: y=x**2, y=sin(x), y=2x+3");
        console.log("");
        console.log("  🔺 2D SHAPES:");
        console.log("     • Triangle:      triangle A(0,0) B(4,0) C(2,3)");
        console.log("     • Circle:        circle center(0,0) radius 5");
        console.log("     • Rectangle:     rectangle (0,0) 4 3");
        console.log("     • Square:        square (0,0) 4");
        console.log("     • Parallelogram: parallelogram (0,0) 5 4 3");
        console.log("     • Polygon:       polygon 6 sides (0,0) 2");
        console.log("     • Ellipse:       ellipse center(0,0) 5 3");
        console.log("     • Quadrilateral: quadrilateral A(0,0) B(4,0) C(5,3) D(1,3)");
        console.log("     • Trapezoid:     trapezoid (0,0) 6 4 3");
        console.log("");
        console.log("  🧊 3D SHAPES:");
        console.log("     • Sphere:        sphere center(0,0,0) radius 5");
        console.log("     • Cylinder:      cylinder center(0,0,0) radius 3 height 5");
        console.log("     • Cone:          cone center(0,0,0) radius 3 height 5");
        console.log("     • Cube:          cube (0,0,0) 4");
        console.log("");
        console.log("  ➡️  VECTOR:   vector A(x1,y1) B(x2,y2) or vector <x,y>");
        console.log("     Examples: vector A(1,2) B(5,4)");
        console.log("");
        console.log("  🔢 MATRIX:    matrix [values] or matrix [transformation]");
        console.log("     Examples: matrix [[1,2],[3,4]]");
        console.log("               matrix rotation 45");
        console.log("");
        console.log("=".repeat(70));
        console.log("✨ FEATURES:");
        console.log("  • Individual graphs with coordinate points marked");
        console.log("  • Complete geometric analysis for 2D & 3D shapes");
        console.log("  • Vector operations and visualizations");
        console.log("  • Matrix transformations with before/after views");
        console.log("  • All visualizations automatically saved to './temp/'");
        console.log("=".repeat(70));
    }

    /**
     * Get total item count
     */
    getTotalItemCount() {
        return this.equationCounter + this.triangleCounter + this.circleCounter + 
               this.rectangleCounter + this.squareCounter + this.parallelogramCounter +
               this.polygonCounter + this.ellipseCounter + this.quadrilateralCounter +
               this.trapezoidCounter + this.sphereCounter + this.cylinderCounter +
               this.coneCounter + this.cubeCounter + this.vectorCounter + this.matrixCounter;
    }

    /**
     * Clear all items
     */
    clearAll() {
        this.calculator.clearEquations();
        this.equationHistory = [];
        this.triangleHistory = [];
        this.circleHistory = [];
        this.rectangleHistory = [];
        this.squareHistory = [];
        this.parallelogramHistory = [];
        this.polygonHistory = [];
        this.ellipseHistory = [];
        this.quadrilateralHistory = [];
        this.trapezoidHistory = [];
        this.sphereHistory = [];
        this.cylinderHistory = [];
        this.coneHistory = [];
        this.cubeHistory = [];
        this.vectorHistory = [];
        this.matrixHistory = [];
        
        this.equationCounter = 0;
        this.triangleCounter = 0;
        this.circleCounter = 0;
        this.rectangleCounter = 0;
        this.squareCounter = 0;
        this.parallelogramCounter = 0;
        this.polygonCounter = 0;
        this.ellipseCounter = 0;
        this.quadrilateralCounter = 0;
        this.trapezoidCounter = 0;
        this.sphereCounter = 0;
        this.cylinderCounter = 0;
        this.coneCounter = 0;
        this.cubeCounter = 0;
        this.vectorCounter = 0;
        this.matrixCounter = 0;
    }

/**
     * Display shape history helper
     */
    displayShapeHistory(shapeName, history) {
        const icons = {
            triangle: '🔺',
            circle: '⭕',
            rectangle: '▭',
            square: '▢',
            parallelogram: '▱',
            polygon: '⬡',
            ellipse: '⬭',
            quadrilateral: '⬢',
            trapezoid: '⏢',
            sphere: '🌐',
            cylinder: '🛢️',
            cone: '🔺',
            cube: '🧊'
        };

        console.log(`\n${icons[shapeName]} ${shapeName.charAt(0).toUpperCase() + shapeName.slice(1)} History:`);
        console.log("=".repeat(60));
        
        if (history.length === 0) {
            console.log(`No ${shapeName}s added yet.`);
        } else {
            history.forEach(item => {
                console.log(`  ${item.id}. ${item.input}`);
                const props = item.properties;
                if (props.area !== undefined) {
                    console.log(`     Area: ${props.area.toFixed(3)} sq units`);
                }
                if (props.volume !== undefined) {
                    console.log(`     Volume: ${props.volume.toFixed(3)} cubic units`);
                }
                if (props.perimeter !== undefined) {
                    console.log(`     Perimeter: ${props.perimeter.toFixed(3)} units`);
                } else if (props.circumference !== undefined) {
                    console.log(`     Circumference: ${props.circumference.toFixed(3)} units`);
                } else if (props.surfaceArea !== undefined) {
                    console.log(`     Surface Area: ${props.surfaceArea.toFixed(3)} sq units`);
                }
                console.log("");
            });
        }
        console.log("=".repeat(60));
    }

    /**
     * Undo last item (UPDATED)
     */
    undoLast() {
        if (this.getTotalItemCount() === 0) {
            console.log("❌ Nothing to undo!");
            return;
        }

        // Find the most recent item
        const lastIds = {
            equation: this.equationHistory.length > 0 ? parseInt(this.equationHistory[this.equationHistory.length - 1].split('.')[0]) : 0,
            triangle: this.triangleHistory.length > 0 ? this.triangleHistory[this.triangleHistory.length - 1].id : 0,
            circle: this.circleHistory.length > 0 ? this.circleHistory[this.circleHistory.length - 1].id : 0,
            rectangle: this.rectangleHistory.length > 0 ? this.rectangleHistory[this.rectangleHistory.length - 1].id : 0,
            square: this.squareHistory.length > 0 ? this.squareHistory[this.squareHistory.length - 1].id : 0,
            parallelogram: this.parallelogramHistory.length > 0 ? this.parallelogramHistory[this.parallelogramHistory.length - 1].id : 0,
            polygon: this.polygonHistory.length > 0 ? this.polygonHistory[this.polygonHistory.length - 1].id : 0,
            ellipse: this.ellipseHistory.length > 0 ? this.ellipseHistory[this.ellipseHistory.length - 1].id : 0,
            quadrilateral: this.quadrilateralHistory.length > 0 ? this.quadrilateralHistory[this.quadrilateralHistory.length - 1].id : 0,
            trapezoid: this.trapezoidHistory.length > 0 ? this.trapezoidHistory[this.trapezoidHistory.length - 1].id : 0,
            sphere: this.sphereHistory.length > 0 ? this.sphereHistory[this.sphereHistory.length - 1].id : 0,
            cylinder: this.cylinderHistory.length > 0 ? this.cylinderHistory[this.cylinderHistory.length - 1].id : 0,
            cone: this.coneHistory.length > 0 ? this.coneHistory[this.coneHistory.length - 1].id : 0,
            cube: this.cubeHistory.length > 0 ? this.cubeHistory[this.cubeHistory.length - 1].id : 0,
            vector: this.vectorHistory.length > 0 ? this.vectorHistory[this.vectorHistory.length - 1].id : 0,
            matrix: this.matrixHistory.length > 0 ? this.matrixHistory[this.matrixHistory.length - 1].id : 0
        };

        const maxId = Math.max(...Object.values(lastIds));

        if (maxId === lastIds.matrix && lastIds.matrix > 0) {
            const removed = this.matrixHistory.pop();
            this.matrixCounter--;
            console.log(`⬅️  Removed matrix: ${removed.input}`);
        } else if (maxId === lastIds.vector && lastIds.vector > 0) {
            const removed = this.vectorHistory.pop();
            this.vectorCounter--;
            console.log(`⬅️  Removed vector: ${removed.input}`);
        } else if (maxId === lastIds.cube && lastIds.cube > 0) {
            const removed = this.cubeHistory.pop();
            this.cubeCounter--;
            console.log(`⬅️  Removed cube: ${removed.input}`);
        } else if (maxId === lastIds.cone && lastIds.cone > 0) {
            const removed = this.coneHistory.pop();
            this.coneCounter--;
            console.log(`⬅️  Removed cone: ${removed.input}`);
        } else if (maxId === lastIds.cylinder && lastIds.cylinder > 0) {
            const removed = this.cylinderHistory.pop();
            this.cylinderCounter--;
            console.log(`⬅️  Removed cylinder: ${removed.input}`);
        } else if (maxId === lastIds.sphere && lastIds.sphere > 0) {
            const removed = this.sphereHistory.pop();
            this.sphereCounter--;
            console.log(`⬅️  Removed sphere: ${removed.input}`);
        } else if (maxId === lastIds.trapezoid && lastIds.trapezoid > 0) {
            const removed = this.trapezoidHistory.pop();
            this.trapezoidCounter--;
            console.log(`⬅️  Removed trapezoid: ${removed.input}`);
        } else if (maxId === lastIds.quadrilateral && lastIds.quadrilateral > 0) {
            const removed = this.quadrilateralHistory.pop();
            this.quadrilateralCounter--;
            console.log(`⬅️  Removed quadrilateral: ${removed.input}`);
        } else if (maxId === lastIds.ellipse && lastIds.ellipse > 0) {
            const removed = this.ellipseHistory.pop();
            this.ellipseCounter--;
            console.log(`⬅️  Removed ellipse: ${removed.input}`);
        } else if (maxId === lastIds.polygon && lastIds.polygon > 0) {
            const removed = this.polygonHistory.pop();
            this.polygonCounter--;
            console.log(`⬅️  Removed polygon: ${removed.input}`);
        } else if (maxId === lastIds.parallelogram && lastIds.parallelogram > 0) {
            const removed = this.parallelogramHistory.pop();
            this.parallelogramCounter--;
            console.log(`⬅️  Removed parallelogram: ${removed.input}`);
        } else if (maxId === lastIds.square && lastIds.square > 0) {
            const removed = this.squareHistory.pop();
            this.squareCounter--;
            console.log(`⬅️  Removed square: ${removed.input}`);
        } else if (maxId === lastIds.rectangle && lastIds.rectangle > 0) {
            const removed = this.rectangleHistory.pop();
            this.rectangleCounter--;
            console.log(`⬅️  Removed rectangle: ${removed.input}`);
        } else if (maxId === lastIds.circle && lastIds.circle > 0) {
            const removed = this.circleHistory.pop();
            this.circleCounter--;
            console.log(`⬅️  Removed circle: ${removed.input}`);
        } else if (maxId === lastIds.triangle && lastIds.triangle > 0) {
            const removed = this.triangleHistory.pop();
            this.triangleCounter--;
            console.log(`⬅️  Removed triangle: ${removed.input}`);
        } else if (this.equationHistory.length > 0) {
            const removed = this.equationHistory.pop();
            this.equationCounter--;
            console.log(`⬅️  Removed equation: ${removed}`);
        }
    }

    /**
     * Display current graph info (UPDATED WITH ALL SHAPES)
     */
    displayCurrentGraph() {
        console.log("\n🎨 GRAPH DISPLAY INFORMATION");
        console.log("=".repeat(70));
        
        console.log("\n📊 SUMMARY:");
        console.log(`  📈 Equations: ${this.equationCounter}`);
        console.log(`  🔺 Triangles: ${this.triangleCounter}`);
        console.log(`  ⭕ Circles: ${this.circleCounter}`);
        console.log(`  ▭ Rectangles: ${this.rectangleCounter}`);
        console.log(`  ▢ Squares: ${this.squareCounter}`);
        console.log(`  ▱ Parallelograms: ${this.parallelogramCounter}`);
        console.log(`  ⬡ Polygons: ${this.polygonCounter}`);
        console.log(`  ⬭ Ellipses: ${this.ellipseCounter}`);
        console.log(`  ⬢ Quadrilaterals: ${this.quadrilateralCounter}`);
        console.log(`  ⏢ Trapezoids: ${this.trapezoidCounter}`);
        console.log(`  🌐 Spheres: ${this.sphereCounter}`);
        console.log(`  🛢️ Cylinders: ${this.cylinderCounter}`);
        console.log(`  🔺 Cones: ${this.coneCounter}`);
        console.log(`  🧊 Cubes: ${this.cubeCounter}`);
        console.log(`  ➡️  Vectors: ${this.vectorCounter}`);
        console.log(`  🔢 Matrices: ${this.matrixCounter}`);
        console.log(`  📊 Total items: ${this.getTotalItemCount()}`);
        
        console.log("\n⚙️  SETTINGS:");
        console.log(`  🎨 Current theme: ${this.calculator.theme}`);
        console.log(`  📏 Viewing window: x[${this.calculator.xMin}, ${this.calculator.xMax}], y[${this.calculator.yMin}, ${this.calculator.yMax}]`);

        console.log("\n📁 INDIVIDUAL GRAPH FILES:");
        
        if (this.equationHistory.length > 0) {
            console.log("\n  📈 Equation Graphs:");
            this.equationHistory.forEach((eq, index) => {
                const filename = `equation_${String(index + 1).padStart(3, '0')}_${this.sanitizeFilename(eq.replace(/^\d+\.\s*/, ''))}.png`;
                console.log(`    • ${filename}`);
            });
        }

        const shapeTypes = [
            { name: 'Triangle', history: this.triangleHistory, icon: '🔺' },
            { name: 'Circle', history: this.circleHistory, icon: '⭕' },
            { name: 'Rectangle', history: this.rectangleHistory, icon: '▭' },
            { name: 'Square', history: this.squareHistory, icon: '▢' },
            { name: 'Parallelogram', history: this.parallelogramHistory, icon: '▱' },
            { name: 'Polygon', history: this.polygonHistory, icon: '⬡' },
            { name: 'Ellipse', history: this.ellipseHistory, icon: '⬭' },
            { name: 'Quadrilateral', history: this.quadrilateralHistory, icon: '⬢' },
            { name: 'Trapezoid', history: this.trapezoidHistory, icon: '⏢' },
            { name: 'Sphere', history: this.sphereHistory, icon: '🌐' },
            { name: 'Cylinder', history: this.cylinderHistory, icon: '🛢️' },
            { name: 'Cone', history: this.coneHistory, icon: '🔺' },
            { name: 'Cube', history: this.cubeHistory, icon: '🧊' }
        ];

        shapeTypes.forEach(shape => {
            if (shape.history.length > 0) {
                console.log(`\n  ${shape.icon} ${shape.name} Graphs:`);
                shape.history.forEach((item, index) => {
                    console.log(`    • ${shape.name.toLowerCase()}_${String(index + 1).padStart(3, '0')}_...png`);
                });
            }
        });

        if (this.vectorHistory.length > 0) {
            console.log("\n  ➡️  Vector Graphs:");
            this.vectorHistory.forEach((vec, index) => {
                console.log(`    • vector_${String(index + 1).padStart(3, '0')}_analysis.png`);
            });
        }

        if (this.matrixHistory.length > 0) {
            console.log("\n  🔢 Matrix Graphs:");
            this.matrixHistory.forEach((mat, index) => {
                const desc = mat.description ? ` (${mat.description})` : '';
                console.log(`    • matrix_${String(index + 1).padStart(3, '0')}_transformation.png${desc}`);
            });
        }

        if (this.getTotalItemCount() === 0) {
            console.log("\n  📝 No graphs generated yet.");
            console.log("  💡 Add equations, shapes, vectors, or matrices to generate visualizations!");
        }

        console.log("\n💡 TIPS:");
        console.log("  • Each equation creates its own detailed graph with marked points");
        console.log("  • Each 2D shape creates a complete geometric analysis");
        console.log("  • Each 3D shape creates a projection view with all properties");
        console.log("  • Each vector creates a visual analysis with all operations");
        console.log("  • Each matrix creates a before/after transformation view");
        console.log("  • Domain & Range automatically displayed on all graphs");
        console.log("  • All files are saved automatically in './temp/' folder");
        console.log("  • Use 'formulas' to see all available input formats");
        console.log("=".repeat(70));
    }

    /**
     * Get current calculator status (UPDATED)
     */
    getCalculatorStatus() {
        const total = this.getTotalItemCount();
        return `📊 Status | Total: ${total} | Eq: ${this.equationCounter} | 2D: ${this.triangleCounter + this.circleCounter + this.rectangleCounter + this.squareCounter + this.parallelogramCounter + this.polygonCounter + this.ellipseCounter + this.quadrilateralCounter + this.trapezoidCounter} | 3D: ${this.sphereCounter + this.cylinderCounter + this.coneCounter + this.cubeCounter} | Vec: ${this.vectorCounter} | Mat: ${this.matrixCounter}`;
    }

    /**
     * Change theme
     */
    changeTheme(themeName) {
        const themes = {
            'standard': Theme.Standard,
            'dark': Theme.Dark,
            'scientific': Theme.Scientific
        };

        if (themes[themeName]) {
            this.calculator = new GraphingCalculator({
                size: this.calculator.width,
                theme: themes[themeName],
                xMin: this.calculator.xMin,
                xMax: this.calculator.xMax,
                yMin: this.calculator.yMin,
                yMax: this.calculator.yMax,
                showGrid: this.calculator.showGrid,
                showAxes: this.calculator.showAxes
            });
            return true;
        }
        return false;
    }

    /**
     * Set viewing window
     */
    setViewingWindow(xMin, xMax, yMin, yMax) {
        if (xMin >= xMax || yMin >= yMax) {
            return false;
        }

        this.calculator = new GraphingCalculator({
            size: this.calculator.width,
            theme: this.calculator.theme,
            xMin,
            xMax,
            yMin,
            yMax,
            showGrid: this.calculator.showGrid,
            showAxes: this.calculator.showAxes
        });
        return true;
    }

}

export { GraphingCalculator, GraphingCalculatorGame,Theme };
const EndSection19 = "close"
