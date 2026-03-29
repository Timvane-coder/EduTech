Here's the statistics & probability related problem generator:
// ==================== STATISTICS & PROBABILITY WITH DIAGRAMS ====================

generateRelatedStatisticsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    // ─── 1. BAR CHART ──────────────────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Bar Chart Analysis',
        problem: 'The scores of 5 groups A, B, C, D, E are 12, 19, 15, 8, and 22. Draw a bar chart and find the mean score and the range.',
        parameters: {
            labels: ['A', 'B', 'C', 'D', 'E'],
            values: [12, 19, 15, 8, 22]
        },
        type: 'bar_chart',
        subparts: [
            'Plot each group on the x-axis with its value as bar height',
            'Mean = (12 + 19 + 15 + 8 + 22) / 5 = 76 / 5 = 15.2',
            'Range = max − min = 22 − 8 = 14',
            'Highest scoring group: E (22)',
            'Lowest scoring group: D (8)'
        ],
        helper: 'Mean = Σx / n; Range = max − min',
        answer: 'Mean = 15.2 | Range = 14 | Highest: E, Lowest: D',
        realWorldContext: 'Comparing performance across categories, sales figures by region',
        diagramInfo: {
            type: 'bar_chart',
            registryKey: 'barChart',
            renderOptions: {
                title: 'Bar Chart',
                showBars: true,
                showAxes: true,
                showValues: true,
                showGrid: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `math_bar_chart_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ─── 2. HISTOGRAM ──────────────────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Histogram — Frequency Distribution',
        problem: 'Data is grouped into intervals [0–10), [10–20), [20–30), [30–40) with frequencies 5, 12, 18, 9. Draw a histogram and find the modal class and estimated mean.',
        parameters: {
            intervals: [[0, 10], [10, 20], [20, 30], [30, 40]],
            frequencies: [5, 12, 18, 9]
        },
        type: 'histogram',
        subparts: [
            'Modal class: interval with highest frequency = [20–30) with f = 18',
            'Total frequency: n = 5 + 12 + 18 + 9 = 44',
            'Midpoints: 5, 15, 25, 35',
            'Estimated mean = Σ(midpoint × f) / n',
            '= (5×5 + 15×12 + 25×18 + 35×9) / 44',
            '= (25 + 180 + 450 + 315) / 44 = 970 / 44 ≈ 22.05'
        ],
        helper: 'Modal class = class with highest frequency; Estimated mean = Σ(mx × f) / Σf',
        answer: 'Modal class: [20–30) | Estimated mean ≈ 22.05 | n = 44',
        realWorldContext: 'Exam score distributions, age groupings in a population',
        diagramInfo: {
            type: 'histogram',
            registryKey: 'histogram',
            renderOptions: {
                title: 'Histogram',
                showBars: true,
                showAxes: true,
                showFrequency: true,
                showIntervals: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `math_histogram_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ─── 3. PIE CHART ──────────────────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Pie Chart — Sector Angles',
        problem: 'Four categories A, B, C, D have values 30, 45, 60, 25. Draw a pie chart and calculate the sector angle for each category.',
        parameters: {
            labels: ['A', 'B', 'C', 'D'],
            values: [30, 45, 60, 25]
        },
        type: 'pie_chart',
        subparts: [
            'Total = 30 + 45 + 60 + 25 = 160',
            'Sector angle = (value / total) × 360°',
            'A: (30/160) × 360 = 67.5°',
            'B: (45/160) × 360 = 101.25°',
            'C: (60/160) × 360 = 135°',
            'D: (25/160) × 360 = 56.25°',
            'Check: 67.5 + 101.25 + 135 + 56.25 = 360° ✓'
        ],
        helper: 'Sector angle = (value / Σvalues) × 360°',
        answer: 'A: 67.5° | B: 101.25° | C: 135° | D: 56.25° | Total: 360° ✓',
        realWorldContext: 'Budget allocation, market share, survey results',
        diagramInfo: {
            type: 'pie_chart',
            registryKey: 'pieChart',
            renderOptions: {
                title: 'Pie Chart',
                showSlices: true,
                showLabels: true,
                showPercentages: true,
                showAngles: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 800, height: 800 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `math_pie_chart_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ─── 4. LINE GRAPH ─────────────────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Line Graph — Trend Analysis',
        problem: 'A quantity is recorded at times x = 0, 1, 2, 3, 4, 5 with values y = 2, 5, 4, 8, 7, 10. Plot the line graph and find the overall change and average rate of change.',
        parameters: {
            xValues: [0, 1, 2, 3, 4, 5],
            yValues: [2, 5, 4, 8, 7, 10]
        },
        type: 'line_graph',
        subparts: [
            'Plot each (x, y) pair and connect with line segments',
            'Overall change = final value − initial value = 10 − 2 = 8',
            'Time interval = 5 − 0 = 5 units',
            'Average rate of change = Δy / Δx = 8 / 5 = 1.6 units per time unit',
            'General trend: increasing with minor fluctuations at x = 2 and x = 4'
        ],
        helper: 'Average rate of change = (y_final − y_initial) / (x_final − x_initial)',
        answer: 'Overall change = 8 | Average rate of change = 1.6 units/unit | Trend: generally increasing',
        realWorldContext: 'Temperature over time, stock prices, population growth',
        diagramInfo: {
            type: 'line_graph',
            registryKey: 'lineGraph',
            renderOptions: {
                title: 'Line Graph',
                showLine: true,
                showPoints: true,
                showAxes: true,
                showGrid: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `math_line_graph_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ─── 5. SCATTER PLOT ───────────────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Scatter Plot — Correlation',
        problem: 'Six data points are given: (1,2), (2,4), (3,5), (4,4), (5,7), (6,8). Plot a scatter diagram, describe the correlation, and find the equation of the line of best fit.',
        parameters: {
            data: [[1, 2], [2, 4], [3, 5], [4, 4], [5, 7], [6, 8]]
        },
        type: 'scatter_plot',
        subparts: [
            'Plot each (x, y) pair on the coordinate plane',
            'Correlation: positive — as x increases, y generally increases',
            'x̄ = (1+2+3+4+5+6)/6 = 3.5 | ȳ = (2+4+5+4+7+8)/6 = 5',
            'Σ(x − x̄)(y − ȳ) = 17.5 | Σ(x − x̄)² = 17.5',
            'Gradient m = 17.5 / 17.5 = 1',
            'y-intercept c = ȳ − mx̄ = 5 − 1×3.5 = 1.5',
            'Line of best fit: y = x + 1.5'
        ],
        helper: 'm = Σ(x−x̄)(y−ȳ) / Σ(x−x̄)²; c = ȳ − mx̄',
        answer: 'Positive correlation | Line of best fit: y = x + 1.5',
        realWorldContext: 'Height vs weight, study hours vs exam scores',
        diagramInfo: {
            type: 'scatter_plot',
            registryKey: 'scatterPlot',
            renderOptions: {
                title: 'Scatter Plot',
                showPoints: true,
                showLineOfBestFit: true,
                showCorrelation: true,
                showAxes: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `math_scatter_plot_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ─── 6. STEM-AND-LEAF PLOT ─────────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Stem-and-Leaf Plot',
        problem: 'The data set is: 23, 25, 27, 31, 33, 34, 38, 42, 45, 47, 51, 53. Construct a stem-and-leaf plot and find the median and range.',
        parameters: {
            data: [23, 25, 27, 31, 33, 34, 38, 42, 45, 47, 51, 53]
        },
        type: 'stem_leaf',
        subparts: [
            'Stems: 2 | 3 | 4 | 5',
            '2 | 3 5 7',
            '3 | 1 3 4 8',
            '4 | 2 5 7',
            '5 | 1 3',
            'n = 12 (even) → median = average of 6th and 7th values',
            '6th value = 34, 7th value = 38 → Median = (34 + 38) / 2 = 36',
            'Range = 53 − 23 = 30'
        ],
        helper: 'Order data; stems = tens digits; leaves = units digits; median position = (n+1)/2',
        answer: 'Median = 36 | Range = 30',
        realWorldContext: 'Displaying raw data distribution while preserving original values',
        diagramInfo: {
            type: 'stem_leaf',
            registryKey: 'stemAndLeafPlot',
            renderOptions: {
                title: 'Stem-and-Leaf Plot',
                showStem: true,
                showLeaves: true,
                showKey: true,
                showOrdered: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 700, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `math_stem_leaf_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ─── 7. BOX PLOT ───────────────────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Box-and-Whisker Plot',
        problem: 'A data set has the five-number summary: Min = 10, Q1 = 25, Median = 35, Q3 = 50, Max = 70. Draw the box plot and find the IQR. Determine whether a value of 80 would be an outlier.',
        parameters: {
            min: 10,
            Q1: 25,
            median: 35,
            Q3: 50,
            max: 70
        },
        type: 'box_plot',
        subparts: [
            'IQR = Q3 − Q1 = 50 − 25 = 25',
            'Lower fence = Q1 − 1.5 × IQR = 25 − 37.5 = −12.5',
            'Upper fence = Q3 + 1.5 × IQR = 50 + 37.5 = 87.5',
            'Value 80: is 80 > 87.5? No → 80 is NOT an outlier',
            'Box spans Q1 to Q3; whiskers extend to min and max',
            'Median line drawn at 35 inside the box'
        ],
        helper: 'IQR = Q3 − Q1; Outlier if value < Q1 − 1.5×IQR or > Q3 + 1.5×IQR',
        answer: 'IQR = 25 | Fences: −12.5 and 87.5 | 80 is NOT an outlier',
        realWorldContext: 'Comparing score distributions across classes or groups',
        diagramInfo: {
            type: 'box_plot',
            registryKey: 'boxPlot',
            renderOptions: {
                title: 'Box Plot',
                showBox: true,
                showWhiskers: true,
                showMedian: true,
                showQuartiles: true,
                showOutliers: true,
                width: 900,
                height: 400,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 900, height: 400 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `math_box_plot_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ─── 8. FREQUENCY POLYGON ──────────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Frequency Polygon',
        problem: 'A frequency distribution has midpoints 5, 15, 25, 35, 45 with frequencies 3, 8, 12, 7, 4. Draw a frequency polygon and estimate the mean.',
        parameters: {
            midpoints: [5, 15, 25, 35, 45],
            frequencies: [3, 8, 12, 7, 4]
        },
        type: 'frequency_polygon',
        subparts: [
            'Plot each (midpoint, frequency) pair and connect with straight lines',
            'Extend to zero at each end (midpoints 0 and beyond 45)',
            'Total frequency: n = 3 + 8 + 12 + 7 + 4 = 34',
            'Estimated mean = Σ(midpoint × f) / n',
            '= (5×3 + 15×8 + 25×12 + 35×7 + 45×4) / 34',
            '= (15 + 120 + 300 + 245 + 180) / 34 = 860 / 34 ≈ 25.29'
        ],
        helper: 'Frequency polygon connects midpoint-frequency pairs; mean = Σ(mx × f) / Σf',
        answer: 'Estimated mean ≈ 25.29 | n = 34 | Modal class midpoint: 25',
        realWorldContext: 'Comparing two frequency distributions on the same axes',
        diagramInfo: {
            type: 'frequency_polygon',
            registryKey: 'frequencyPolygon',
            renderOptions: {
                title: 'Frequency Polygon',
                showPolygon: true,
                showPoints: true,
                showAxes: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `math_frequency_polygon_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ─── 9. CUMULATIVE FREQUENCY CURVE ─────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Cumulative Frequency Curve (Ogive)',
        problem: 'Upper class boundaries are 10, 20, 30, 40, 50 with cumulative frequencies 5, 13, 28, 40, 50. Draw the ogive and estimate the median, Q1, and Q3.',
        parameters: {
            upperBounds: [10, 20, 30, 40, 50],
            cumulativeFrequencies: [5, 13, 28, 40, 50]
        },
        type: 'cumulative_frequency',
        subparts: [
            'Plot (upper boundary, cumulative frequency) and join with a smooth curve',
            'Total n = 50',
            'Median at n/2 = 25th value → read off curve at cf = 25 → Median ≈ 28',
            'Q1 at n/4 = 12.5th value → read at cf = 12.5 → Q1 ≈ 19.6',
            'Q3 at 3n/4 = 37.5th value → read at cf = 37.5 → Q3 ≈ 38',
            'IQR = Q3 − Q1 ≈ 38 − 19.6 = 18.4'
        ],
        helper: 'Read median at n/2, Q1 at n/4, Q3 at 3n/4 from the cumulative frequency axis',
        answer: 'Median ≈ 28 | Q1 ≈ 19.6 | Q3 ≈ 38 | IQR ≈ 18.4',
        realWorldContext: 'Estimating percentiles in large grouped data sets',
        diagramInfo: {
            type: 'cumulative_frequency',
            registryKey: 'cumulativeFrequencyCurve',
            renderOptions: {
                title: 'Cumulative Frequency Curve',
                showCurve: true,
                showPoints: true,
                showMedian: true,
                showQuartiles: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `math_cumulative_frequency_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ─── 10. MEAN, MEDIAN, MODE ────────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Measures of Central Tendency',
        problem: 'Find the mean, median, and mode of the data set: 2, 3, 4, 4, 5, 5, 5, 6, 7, 8.',
        parameters: {
            data: [2, 3, 4, 4, 5, 5, 5, 6, 7, 8]
        },
        type: 'central_tendency',
        subparts: [
            'n = 10 values (already ordered)',
            'Mean = Σx / n = (2+3+4+4+5+5+5+6+7+8) / 10 = 49 / 10 = 4.9',
            'Median: average of 5th and 6th values = (5 + 5) / 2 = 5',
            'Mode: most frequent value = 5 (appears 3 times)',
            'All three measures are close → fairly symmetric distribution'
        ],
        helper: 'Mean = Σx/n; Median = middle value(s); Mode = most frequent',
        answer: 'Mean = 4.9 | Median = 5 | Mode = 5',
        realWorldContext: 'Summarising exam results, salary data, any numerical dataset',
        diagramInfo: {
            type: 'central_tendency',
            registryKey: 'meanMedianMode',
            renderOptions: {
                title: 'Measures of Central Tendency',
                showData: true,
                showMean: true,
                showMedian: true,
                showMode: true,
                showCalculations: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `math_central_tendency_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ─── 11. RANGE AND IQR ─────────────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Range and Interquartile Range',
        problem: 'For the data: 12, 15, 18, 22, 25, 28, 32, 35, 40, 45 — find the range, quartiles, IQR, and identify any outliers.',
        parameters: {
            data: [12, 15, 18, 22, 25, 28, 32, 35, 40, 45]
        },
        type: 'spread_measures',
        subparts: [
            'n = 10, data already ordered',
            'Range = 45 − 12 = 33',
            'Q1 = average of 2nd and 3rd values = (15 + 18) / 2 = 16.5',
            'Q3 = average of 8th and 9th values = (35 + 40) / 2 = 37.5',
            'IQR = Q3 − Q1 = 37.5 − 16.5 = 21',
            'Lower fence = 16.5 − 1.5×21 = −15 | Upper fence = 37.5 + 1.5×21 = 69',
            'All values lie within [−15, 69] → No outliers'
        ],
        helper: 'IQR = Q3 − Q1; fences = Q1 − 1.5×IQR and Q3 + 1.5×IQR',
        answer: 'Range = 33 | Q1 = 16.5 | Q3 = 37.5 | IQR = 21 | No outliers',
        realWorldContext: 'Measuring variability in test scores, financial returns',
        diagramInfo: {
            type: 'spread_measures',
            registryKey: 'rangeAndIQR',
            renderOptions: {
                title: 'Range and IQR',
                showData: true,
                showRange: true,
                showQuartiles: true,
                showIQR: true,
                showBoxPlot: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `math_range_iqr_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ─── 12. PROBABILITY TREE DIAGRAM ──────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Probability Tree Diagram',
        problem: 'A fair coin is flipped twice. Draw a probability tree diagram and find P(HH), P(exactly one head), and P(at least one tail).',
        parameters: {
            events: [
                { name: 'First flip', outcomes: [{ label: 'H', probability: 0.5 }, { label: 'T', probability: 0.5 }] },
                { name: 'Second flip', outcomes: [{ label: 'H', probability: 0.5 }, { label: 'T', probability: 0.5 }] }
            ]
        },
        type: 'probability_tree',
        subparts: [
            'Branch 1: H (0.5) → H (0.5) = HH with P = 0.5 × 0.5 = 0.25',
            'Branch 2: H (0.5) → T (0.5) = HT with P = 0.5 × 0.5 = 0.25',
            'Branch 3: T (0.5) → H (0.5) = TH with P = 0.5 × 0.5 = 0.25',
            'Branch 4: T (0.5) → T (0.5) = TT with P = 0.5 × 0.5 = 0.25',
            'P(HH) = 0.25',
            'P(exactly one head) = P(HT) + P(TH) = 0.25 + 0.25 = 0.5',
            'P(at least one tail) = 1 − P(HH) = 1 − 0.25 = 0.75'
        ],
        helper: 'Multiply probabilities along branches; add probabilities across branches for combined events',
        answer: 'P(HH) = 0.25 | P(exactly one head) = 0.5 | P(at least one tail) = 0.75',
        realWorldContext: 'Coin tosses, sequential independent events, genetics',
        diagramInfo: {
            type: 'probability_tree',
            registryKey: 'probabilityTreeDiagram',
            renderOptions: {
                title: 'Probability Tree Diagram',
                showTree: true,
                showProbabilities: true,
                showOutcomes: true,
                showCalculations: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 1000, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `math_probability_tree_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ─── 13. PROBABILITY VENN DIAGRAM ──────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Probability Venn Diagram',
        problem: 'Events A and B have P(A) = 0.6, P(B) = 0.5, P(A ∩ B) = 0.3. Find P(A ∪ B), P(A only), P(B only), and P(neither A nor B).',
        parameters: {
            P_A: 0.6,
            P_B: 0.5,
            P_A_and_B: 0.3
        },
        type: 'probability_venn',
        subparts: [
            'P(A ∪ B) = P(A) + P(B) − P(A ∩ B) = 0.6 + 0.5 − 0.3 = 0.8',
            'P(A only) = P(A) − P(A ∩ B) = 0.6 − 0.3 = 0.3',
            'P(B only) = P(B) − P(A ∩ B) = 0.5 − 0.3 = 0.2',
            'P(neither) = 1 − P(A ∪ B) = 1 − 0.8 = 0.2',
            'Check: 0.3 + 0.3 + 0.2 + 0.2 = 1.0 ✓',
            'A and B are NOT mutually exclusive (P(A ∩ B) ≠ 0)',
            'A and B are NOT independent (P(A)×P(B) = 0.3 = P(A ∩ B) → actually independent!)'
        ],
        helper: 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B); Independent if P(A ∩ B) = P(A) × P(B)',
        answer: 'P(A ∪ B) = 0.8 | P(A only) = 0.3 | P(B only) = 0.2 | P(neither) = 0.2 | A and B are independent',
        realWorldContext: 'Medical testing, overlapping risk factors, survey analysis',
        diagramInfo: {
            type: 'probability_venn',
            registryKey: 'probabilityVennDiagram',
            renderOptions: {
                title: 'Probability Venn Diagram',
                showVenn: true,
                showProbabilities: true,
                showRegions: true,
                showCalculations: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `math_probability_venn_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    return relatedProblems;
}

