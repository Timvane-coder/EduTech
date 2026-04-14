
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
    
