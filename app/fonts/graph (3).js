import { createCanvas } from '@napi-rs/canvas';
import ExcelJS from 'exceljs';
import fs from 'fs';
import os from 'os';
import path from 'path';
import readline from 'readline';
import * as math from 'mathjs';
import GIFEncoder from 'gifencoder';
import { PassThrough } from 'stream';




// ============================================================================
// GRAPH REGISTRY - Comprehensive Graph Configuration System
// ============================================================================

class GraphRegistry {
    static graphs = {
        // ===== LINEAR GRAPHS =====
        'linear': {
            name: 'Linear Function',
            category: 'Linear',
            description: 'Straight line graph with constant slope',
            equation: 'y = mx + b',
            configParameters: {
                required: ['points'],
                optional: ['slope', 'yIntercept', 'domain', 'range'],
                style: ['lineColor', 'lineWidth', 'pointColor', 'pointSize', 'showGrid', 'showEquation', 'showSlope']
            },
            validation: {
                minimumPoints: 2,
                uniqueXValues: true
            },
            usage: 'Teaching linear relationships, slope-intercept form, and rate of change',
            examples: [
                'Positive slope: points [(-2, -1), (0, 3), (2, 7)]',
                'Negative slope: points [(-2, 8), (0, 4), (2, 0)]',
                'Zero slope: points [(-2, 3), (0, 3), (2, 3)]'
            ],
            calculations: ['slope', 'yIntercept', 'equation', 'correlation', 'rSquared', 'predictions'],
            defaultOptions: {
                lineColor: '#2196F3',
                lineWidth: 3,
                pointColor: '#FF5722',
                pointSize: 6,
                showGrid: true,
                showEquation: true,
                showSlope: true,
                showPoints: true,
                showTrendLine: true,
                gridColor: '#E0E0E0',
                axisColor: '#000000'
            }
        },

        'quadratic': {
            name: 'Quadratic Function',
            category: 'Polynomial',
            description: 'Parabola with vertex form or standard form',
            equation: 'y = ax² + bx + c',
            configParameters: {
                required: ['points'],
                optional: ['a', 'b', 'c', 'vertex', 'axis', 'domain', 'range'],
                style: ['curveColor', 'lineWidth', 'pointColor', 'pointSize', 'showGrid', 'showEquation', 'showVertex', 'showAxis']
            },
            validation: {
                minimumPoints: 3,
                uniqueXValues: true
            },
            usage: 'Understanding parabolas, vertex, axis of symmetry, and quadratic relationships',
            examples: [
                'Upward parabola: points [(-2, 4), (-1, 1), (0, 0), (1, 1), (2, 4)]',
                'Downward parabola: points [(-2, -4), (-1, -1), (0, 0), (1, -1), (2, -4)]',
                'Shifted parabola: points [(-1, 5), (0, 2), (1, 1), (2, 2), (3, 5)]'
            ],
            calculations: ['coefficients', 'vertex', 'axisOfSymmetry', 'yIntercept', 'roots', 'equation', 'rSquared'],
            defaultOptions: {
                curveColor: '#9C27B0',
                lineWidth: 3,
                pointColor: '#FF5722',
                pointSize: 6,
                showGrid: true,
                showEquation: true,
                showVertex: true,
                showAxis: true,
                showPoints: true,
                gridColor: '#E0E0E0',
                axisColor: '#000000'
            }
        },

        'exponential': {
            name: 'Exponential Function',
            category: 'Exponential',
            description: 'Exponential growth or decay curve',
            equation: 'y = a·b^x or y = a·e^(kx)',
            configParameters: {
                required: ['points'],
                optional: ['base', 'coefficient', 'growthRate', 'domain', 'range'],
                style: ['curveColor', 'lineWidth', 'pointColor', 'pointSize', 'showGrid', 'showEquation', 'showAsymptote']
            },
            validation: {
                minimumPoints: 3,
                positiveYValues: 'optional',
                uniqueXValues: true
            },
            usage: 'Modeling exponential growth, compound interest, population growth, radioactive decay',
            examples: [
                'Growth: points [(0, 1), (1, 2), (2, 4), (3, 8)]',
                'Decay: points [(0, 8), (1, 4), (2, 2), (3, 1)]',
                'Natural exponential: points [(0, 1), (1, 2.718), (2, 7.389)]'
            ],
            calculations: ['base', 'coefficient', 'growthRate', 'equation', 'doubling', 'halfLife', 'rSquared'],
            defaultOptions: {
                curveColor: '#FF9800',
                lineWidth: 3,
                pointColor: '#FF5722',
                pointSize: 6,
                showGrid: true,
                showEquation: true,
                showAsymptote: true,
                showPoints: true,
                gridColor: '#E0E0E0',
                axisColor: '#000000'
            }
        },

        'logarithmic': {
            name: 'Logarithmic Function',
            category: 'Logarithmic',
            description: 'Logarithmic curve, inverse of exponential',
            equation: 'y = a·log_b(x) + c',
            configParameters: {
                required: ['points'],
                optional: ['base', 'coefficient', 'verticalShift', 'domain', 'range'],
                style: ['curveColor', 'lineWidth', 'pointColor', 'pointSize', 'showGrid', 'showEquation', 'showAsymptote']
            },
            validation: {
                minimumPoints: 3,
                positiveXValues: true,
                uniqueXValues: true
            },
            usage: 'Understanding logarithms, inverse relationships, pH scales, decibel levels',
            examples: [
                'Natural log: points [(1, 0), (2, 0.693), (3, 1.099), (4, 1.386)]',
                'Log base 10: points [(1, 0), (10, 1), (100, 2)]',
                'Shifted log: points [(1, 2), (2, 2.693), (3, 3.099)]'
            ],
            calculations: ['base', 'coefficient', 'verticalShift', 'equation', 'asymptote', 'rSquared'],
            defaultOptions: {
                curveColor: '#4CAF50',
                lineWidth: 3,
                pointColor: '#FF5722',
                pointSize: 6,
                showGrid: true,
                showEquation: true,
                showAsymptote: true,
                showPoints: true,
                gridColor: '#E0E0E0',
                axisColor: '#000000'
            }
        },

        'cubic': {
            name: 'Cubic Function',
            category: 'Polynomial',
            description: 'Third-degree polynomial with one or two turning points',
            equation: 'y = ax³ + bx² + cx + d',
            configParameters: {
                required: ['points'],
                optional: ['a', 'b', 'c', 'd', 'inflectionPoint', 'domain', 'range'],
                style: ['curveColor', 'lineWidth', 'pointColor', 'pointSize', 'showGrid', 'showEquation', 'showInflection']
            },
            validation: {
                minimumPoints: 4,
                uniqueXValues: true
            },
            usage: 'Understanding cubic functions, inflection points, and polynomial behavior',
            examples: [
                'Standard cubic: points [(-2, -8), (-1, -1), (0, 0), (1, 1), (2, 8)]',
                'Shifted cubic: points [(-2, -5), (-1, 0), (0, 1), (1, 2), (2, 11)]',
                'Complex cubic: points [(-2, 4), (-1, 0), (0, -2), (1, 0), (2, 12)]'
            ],
            calculations: ['coefficients', 'inflectionPoint', 'localExtrema', 'roots', 'equation', 'rSquared'],
            defaultOptions: {
                curveColor: '#E91E63',
                lineWidth: 3,
                pointColor: '#FF5722',
                pointSize: 6,
                showGrid: true,
                showEquation: true,
                showInflection: true,
                showPoints: true,
                gridColor: '#E0E0E0',
                axisColor: '#000000'
            }
        },

        'sine': {
            name: 'Sine Function',
            category: 'Trigonometric',
            description: 'Sinusoidal wave with amplitude, period, and phase shift',
            equation: 'y = A·sin(B(x - C)) + D',
            configParameters: {
                required: ['points'],
                optional: ['amplitude', 'period', 'phaseShift', 'verticalShift', 'domain', 'range'],
                style: ['curveColor', 'lineWidth', 'pointColor', 'pointSize', 'showGrid', 'showEquation', 'showAmplitude', 'showPeriod']
            },
            validation: {
                minimumPoints: 5,
                uniqueXValues: true
            },
            usage: 'Understanding periodic functions, waves, oscillations, and harmonic motion',
            examples: [
                'Standard sine: points [(0, 0), (π/2, 1), (π, 0), (3π/2, -1), (2π, 0)]',
                'Amplitude 2: points [(0, 0), (π/2, 2), (π, 0), (3π/2, -2), (2π, 0)]',
                'Phase shifted: points [(π/4, 0), (3π/4, 1), (5π/4, 0), (7π/4, -1)]'
            ],
            calculations: ['amplitude', 'period', 'frequency', 'phaseShift', 'verticalShift', 'equation', 'rSquared'],
            defaultOptions: {
                curveColor: '#3F51B5',
                lineWidth: 3,
                pointColor: '#FF5722',
                pointSize: 6,
                showGrid: true,
                showEquation: true,
                showAmplitude: true,
                showPeriod: true,
                showPoints: true,
                gridColor: '#E0E0E0',
                axisColor: '#000000'
            }
        },

        'cosine': {
            name: 'Cosine Function',
            category: 'Trigonometric',
            description: 'Cosine wave, phase-shifted sine function',
            equation: 'y = A·cos(B(x - C)) + D',
            configParameters: {
                required: ['points'],
                optional: ['amplitude', 'period', 'phaseShift', 'verticalShift', 'domain', 'range'],
                style: ['curveColor', 'lineWidth', 'pointColor', 'pointSize', 'showGrid', 'showEquation', 'showAmplitude', 'showPeriod']
            },
            validation: {
                minimumPoints: 5,
                uniqueXValues: true
            },
            usage: 'Understanding cosine functions, alternating current, circular motion',
            examples: [
                'Standard cosine: points [(0, 1), (π/2, 0), (π, -1), (3π/2, 0), (2π, 1)]',
                'Amplitude 3: points [(0, 3), (π/2, 0), (π, -3), (3π/2, 0), (2π, 3)]',
                'Shifted: points [(0, 2), (π/2, 1), (π, 0), (3π/2, 1), (2π, 2)]'
            ],
            calculations: ['amplitude', 'period', 'frequency', 'phaseShift', 'verticalShift', 'equation', 'rSquared'],
            defaultOptions: {
                curveColor: '#009688',
                lineWidth: 3,
                pointColor: '#FF5722',
                pointSize: 6,
                showGrid: true,
                showEquation: true,
                showAmplitude: true,
                showPeriod: true,
                showPoints: true,
                gridColor: '#E0E0E0',
                axisColor: '#000000'
            }
        },

        'tangent': {
            name: 'Tangent Function',
            category: 'Trigonometric',
            description: 'Tangent function with vertical asymptotes',
            equation: 'y = A·tan(B(x - C)) + D',
            configParameters: {
                required: ['points'],
                optional: ['amplitude', 'period', 'phaseShift', 'verticalShift', 'domain', 'range'],
                style: ['curveColor', 'lineWidth', 'pointColor', 'pointSize', 'showGrid', 'showEquation', 'showAsymptotes']
            },
            validation: {
                minimumPoints: 5,
                uniqueXValues: true,
                excludeAsymptotes: true
            },
            usage: 'Understanding tangent function, slopes, and vertical asymptotes',
            examples: [
                'Standard tangent: points [(-π/4, -1), (0, 0), (π/4, 1)]',
                'Stretched: points [(-π/4, -2), (0, 0), (π/4, 2)]'
            ],
            calculations: ['period', 'phaseShift', 'verticalShift', 'asymptotes', 'equation', 'rSquared'],
            defaultOptions: {
                curveColor: '#795548',
                lineWidth: 3,
                pointColor: '#FF5722',
                pointSize: 6,
                showGrid: true,
                showEquation: true,
                showAsymptotes: true,
                showPoints: true,
                gridColor: '#E0E0E0',
                axisColor: '#000000',
                asymptoteColor: '#FF0000',
                asymptoteStyle: 'dashed'
            }
        },

        'absolute': {
            name: 'Absolute Value Function',
            category: 'Piecewise',
            description: 'V-shaped graph with vertex',
            equation: 'y = a|x - h| + k',
            configParameters: {
                required: ['points'],
                optional: ['vertex', 'slope', 'verticalStretch', 'domain', 'range'],
                style: ['lineColor', 'lineWidth', 'pointColor', 'pointSize', 'showGrid', 'showEquation', 'showVertex']
            },
            validation: {
                minimumPoints: 3,
                uniqueXValues: true
            },
            usage: 'Understanding absolute value, distance, and piecewise functions',
            examples: [
                'Standard: points [(-2, 2), (-1, 1), (0, 0), (1, 1), (2, 2)]',
                'Shifted: points [(-1, 3), (0, 2), (1, 1), (2, 2), (3, 3)]',
                'Stretched: points [(-2, 4), (-1, 2), (0, 0), (1, 2), (2, 4)]'
            ],
            calculations: ['vertex', 'slope', 'verticalStretch', 'equation', 'rSquared'],
            defaultOptions: {
                lineColor: '#00BCD4',
                lineWidth: 3,
                pointColor: '#FF5722',
                pointSize: 6,
                showGrid: true,
                showEquation: true,
                showVertex: true,
                showPoints: true,
                gridColor: '#E0E0E0',
                axisColor: '#000000'
            }
        },

        'squareRoot': {
            name: 'Square Root Function',
            category: 'Radical',
            description: 'Square root curve starting from origin or shifted',
            equation: 'y = a√(x - h) + k',
            configParameters: {
                required: ['points'],
                optional: ['horizontalShift', 'verticalShift', 'verticalStretch', 'domain', 'range'],
                style: ['curveColor', 'lineWidth', 'pointColor', 'pointSize', 'showGrid', 'showEquation', 'showDomain']
            },
            validation: {
                minimumPoints: 3,
                nonNegativeXAdjusted: true,
                uniqueXValues: true
            },
            usage: 'Understanding radical functions, domain restrictions, and square roots',
            examples: [
                'Standard: points [(0, 0), (1, 1), (4, 2), (9, 3)]',
                'Shifted right: points [(1, 0), (2, 1), (5, 2), (10, 3)]',
                'Stretched: points [(0, 0), (1, 2), (4, 4), (9, 6)]'
            ],
            calculations: ['horizontalShift', 'verticalShift', 'verticalStretch', 'domain', 'equation', 'rSquared'],
            defaultOptions: {
                curveColor: '#673AB7',
                lineWidth: 3,
                pointColor: '#FF5722',
                pointSize: 6,
                showGrid: true,
                showEquation: true,
                showDomain: true,
                showPoints: true,
                gridColor: '#E0E0E0',
                axisColor: '#000000'
            }
        },

        'rational': {
            name: 'Rational Function',
            category: 'Rational',
            description: 'Function with polynomial numerator and denominator, includes asymptotes',
            equation: 'y = (ax + b)/(cx + d)',
            configParameters: {
                required: ['points'],
                optional: ['numerator', 'denominator', 'verticalAsymptote', 'horizontalAsymptote', 'domain', 'range'],
                style: ['curveColor', 'lineWidth', 'pointColor', 'pointSize', 'showGrid', 'showEquation', 'showAsymptotes']
            },
            validation: {
                minimumPoints: 5,
                uniqueXValues: true,
                excludeAsymptotes: true
            },
            usage: 'Understanding rational functions, asymptotic behavior, and discontinuities',
            examples: [
                'Simple: points [(-3, -1.5), (-2, -2), (-1, -3), (1, 3), (2, 2), (3, 1.5)]',
                'Hyperbola: points [(-2, -0.5), (-1, -1), (1, 1), (2, 0.5)]'
            ],
            calculations: ['verticalAsymptote', 'horizontalAsymptote', 'holes', 'intercepts', 'equation', 'rSquared'],
            defaultOptions: {
                curveColor: '#FF5722',
                lineWidth: 3,
                pointColor: '#FF9800',
                pointSize: 6,
                showGrid: true,
                showEquation: true,
                showAsymptotes: true,
                showPoints: true,
                gridColor: '#E0E0E0',
                axisColor: '#000000',
                asymptoteColor: '#FF0000',
                asymptoteStyle: 'dashed'
            }
        },

        'piecewise': {
            name: 'Piecewise Function',
            category: 'Piecewise',
            description: 'Function defined by multiple sub-functions over different intervals',
            equation: 'Multiple equations over different domains',
            configParameters: {
                required: ['segments'], // Array of {points, domain} objects
                optional: ['domain', 'range'],
                style: ['colors', 'lineWidth', 'pointColor', 'pointSize', 'showGrid', 'showEquations', 'showBreakpoints']
            },
            validation: {
                minimumSegments: 2,
                uniqueXValues: 'per segment'
            },
            usage: 'Understanding piecewise functions, step functions, and discontinuities',
            examples: [
                'Two-piece: segment1: [(-2, 4), (0, 0)], segment2: [(0, 0), (2, 4)]',
                'Step function: constant values over intervals'
            ],
            calculations: ['continuity', 'discontinuities', 'domain', 'range', 'equations'],
            defaultOptions: {
                colors: ['#2196F3', '#4CAF50', '#FF9800', '#E91E63'],
                lineWidth: 3,
                pointColor: '#FF5722',
                pointSize: 6,
                showGrid: true,
                showEquations: true,
                showBreakpoints: true,
                showPoints: true,
                gridColor: '#E0E0E0',
                axisColor: '#000000'
            }
        },

        'polynomial': {
            name: 'Polynomial Function',
            category: 'Polynomial',
            description: 'General polynomial of any degree',
            equation: 'y = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀',
            configParameters: {
                required: ['points'],
                optional: ['degree', 'coefficients', 'roots', 'domain', 'range'],
                style: ['curveColor', 'lineWidth', 'pointColor', 'pointSize', 'showGrid', 'showEquation', 'showRoots']
            },
            validation: {
                minimumPoints: 'degree + 1',
                uniqueXValues: true
            },
            usage: 'Understanding higher-degree polynomials, roots, and polynomial behavior',
            examples: [
                'Degree 4: points with quartic pattern',
                'Degree 5: points with quintic pattern'
            ],
            calculations: ['degree', 'coefficients', 'roots', 'localExtrema', 'inflectionPoints', 'equation', 'rSquared'],
            defaultOptions: {
                curveColor: '#607D8B',
                lineWidth: 3,
                pointColor: '#FF5722',
                pointSize: 6,
                showGrid: true,
                showEquation: true,
                showRoots: true,
                showPoints: true,
                gridColor: '#E0E0E0',
                axisColor: '#000000'
            }
        },

        'power': {
            name: 'Power Function',
            category: 'Power',
            description: 'Function of the form y = ax^n',
            equation: 'y = ax^n',
            configParameters: {
                required: ['points'],
                optional: ['coefficient', 'exponent', 'domain', 'range'],
                style: ['curveColor', 'lineWidth', 'pointColor', 'pointSize', 'showGrid', 'showEquation']
            },
            validation: {
                minimumPoints: 3,
                uniqueXValues: true
            },
            usage: 'Understanding power relationships, inverse relationships, and scaling',
            examples: [
                'Square: points [(1, 1), (2, 4), (3, 9)]',
                'Inverse: points [(1, 1), (2, 0.5), (4, 0.25)]',
                'Cube: points [(1, 1), (2, 8), (3, 27)]'
            ],
            calculations: ['coefficient', 'exponent', 'equation', 'rSquared'],
            defaultOptions: {
                curveColor: '#8BC34A',
                lineWidth: 3,
                pointColor: '#FF5722',
                pointSize: 6,
                showGrid: true,
                showEquation: true,
                showPoints: true,
                gridColor: '#E0E0E0',
                axisColor: '#000000'
            }
        },

        'logistic': {
            name: 'Logistic Function',
            category: 'S-Curve',
            description: 'S-shaped growth curve with upper and lower limits',
            equation: 'y = L/(1 + e^(-k(x-x₀)))',
            configParameters: {
                required: ['points'],
                optional: ['maxValue', 'growthRate', 'midpoint', 'domain', 'range'],
                style: ['curveColor', 'lineWidth', 'pointColor', 'pointSize', 'showGrid', 'showEquation', 'showAsymptotes']
            },
            validation: {
                minimumPoints: 5,
                uniqueXValues: true
            },
            usage: 'Modeling population growth, learning curves, and sigmoid functions',
            examples: [
                'Population growth: limited by carrying capacity',
                'Learning curve: rapid growth then plateau'
            ],
            calculations: ['maxValue', 'growthRate', 'inflectionPoint', 'asymptotes', 'equation', 'rSquared'],
            defaultOptions: {
                curveColor: '#FF9800',
                lineWidth: 3,
                pointColor: '#FF5722',
                pointSize: 6,
                showGrid: true,
                showEquation: true,
                showAsymptotes: true,
                showPoints: true,
                gridColor: '#E0E0E0',
                axisColor: '#000000'
            }
        }
    };

    // Get graph configuration
    static getGraph(graphKey) {
        return this.graphs[graphKey];
    }

    // Get all graphs
    static getAllGraphs() {
        return Object.keys(this.graphs);
    }

    // Get graphs by category
    static getGraphsByCategory(category) {
        return Object.entries(this.graphs)
            .filter(([_, graph]) => graph.category === category)
            .reduce((acc, [key, graph]) => {
                acc[key] = graph;
                return acc;
            }, {});
    }

    // Get all categories
    static getAllCategories() {
        return [...new Set(Object.values(this.graphs).map(g => g.category))];
    }

    // Search graphs
    static searchGraphs(query) {
        const lowerQuery = query.toLowerCase();
        return Object.entries(this.graphs)
            .filter(([key, graph]) =>
                graph.name.toLowerCase().includes(lowerQuery) ||
                graph.description.toLowerCase().includes(lowerQuery) ||
                graph.category.toLowerCase().includes(lowerQuery) ||
                graph.equation.toLowerCase().includes(lowerQuery) ||
                key.toLowerCase().includes(lowerQuery)
            )
            .reduce((acc, [key, graph]) => {
                acc[key] = graph;
                return acc;
            }, {});
    }

    // Validate graph configuration
    static validateGraphConfig(graphKey, config) {
        const graph = this.getGraph(graphKey);
        if (!graph) {
            return { valid: false, errors: ['Graph not found'] };
        }

        const validation = {
            valid: true,
            errors: [],
            warnings: []
        };

        // Check for points or segments
        if (graphKey === 'piecewise') {
            if (!config.segments || !Array.isArray(config.segments)) {
                validation.errors.push('Piecewise function requires segments array');
                validation.valid = false;
            } else if (config.segments.length < 2) {
                validation.errors.push('Piecewise function requires at least 2 segments');
                validation.valid = false;
            }
        } else {
            if (!config.points || !Array.isArray(config.points)) {
                validation.errors.push('Points array is required');
                validation.valid = false;
                return validation;
            }

            // Minimum points validation
            let minPoints = graph.validation.minimumPoints;
            if (typeof minPoints === 'string') {
                // For polynomials: 'degree + 1'
                minPoints = (config.degree || 2) + 1;
            }

            if (config.points.length < minPoints) {
                validation.errors.push(`Minimum ${minPoints} points required (got ${config.points.length})`);
                validation.valid = false;
            }

            // Validate point structure
            const invalidPoints = config.points.filter(p =>
                !Array.isArray(p) || p.length !== 2 || typeof p[0] !== 'number' || typeof p[1] !== 'number'
            );

            if (invalidPoints.length > 0) {
                validation.errors.push('All points must be [x, y] arrays with numeric values');
                validation.valid = false;
            }

            // Check for unique X values
            if (graph.validation.uniqueXValues) {
                const xValues = config.points.map(p => p[0]);
                const uniqueX = new Set(xValues);
                if (xValues.length !== uniqueX.size) {
                    validation.errors.push('All X values must be unique');
                    validation.valid = false;
                }
            }

            // Positive X values (for logarithmic, square root)
            if (graph.validation.positiveXValues) {
                const negativeX = config.points.filter(p => p[0] <= 0);
                if (negativeX.length > 0) {
                    validation.errors.push('All X values must be positive');
                    validation.valid = false;
                }
            }

            // Positive Y values (for exponential)
            if (graph.validation.positiveYValues && graph.validation.positiveYValues !== 'optional') {
                const negativeY = config.points.filter(p => p[1] <= 0);
                if (negativeY.length > 0) {
                    validation.errors.push('All Y values must be positive');
                    validation.valid = false;
                }
            }
        }

        return validation;
    }

    // Get graph statistics
    static getGraphStatistics() {
        const stats = {
            total: Object.keys(this.graphs).length,
            byCategory: {}
        };

        Object.values(this.graphs).forEach(graph => {
            if (!stats.byCategory[graph.category]) {
                stats.byCategory[graph.category] = 0;
            }
            stats.byCategory[graph.category]++;
        });

        return stats;
    }
}

// ============================================================================
// GRAPH RENDERER - Renders mathematical graphs to canvas
// ============================================================================

class GraphRenderer {
    constructor(canvas = null, ctx = null) {
        this.canvas = canvas;
        this.ctx = ctx;
    }

    // Main render method
    renderGraph(graphKey, x, y, width, height, config = {}) {
        const graph = GraphRegistry.getGraph(graphKey);
        if (!graph) {
            throw new Error(`Graph '${graphKey}' not found`);
        }

        // Validate configuration
        const validation = GraphRegistry.validateGraphConfig(graphKey, config);
        if (!validation.valid) {
            throw new Error(`Invalid configuration: ${validation.errors.join(', ')}`);
        }

        // Merge with defaults
        const mergedConfig = { ...graph.defaultOptions, ...config };

        // Calculate the graph and get metadata
        const graphData = this.calculateGraph(graphKey, mergedConfig);

        // Render based on graph type
        this.renderGraphVisualization(graphKey,
            x,
            y,
            width,
            height,
            mergedConfig,
            graphData
        );

        return graphData;
    }

    // Calculate graph properties and fitted curve
    calculateGraph(graphKey, config) {
        const graph = GraphRegistry.getGraph(graphKey);
        const points = config.points || [];

        switch (graphKey) {
            case 'linear':
                return this.calculateLinear(points);
            case 'quadratic':
                return this.calculateQuadratic(points);
            case 'exponential':
                return this.calculateExponential(points);
            case 'logarithmic':
                return this.calculateLogarithmic(points);
            case 'cubic':
                return this.calculateCubic(points);
            case 'sine':
                return this.calculateSine(points);
            case 'cosine':
                return this.calculateCosine(points);
            case 'tangent':
                return this.calculateTangent(points);
            case 'absolute':
                return this.calculateAbsolute(points);
            case 'squareRoot':
                return this.calculateSquareRoot(points);
            case 'rational':
                return this.calculateRational(points);
            case 'piecewise':
                return this.calculatePiecewise(config.segments);
            case 'polynomial':
                return this.calculatePolynomial(points, config.degree || 4);
            case 'power':
                return this.calculatePower(points);
            case 'logistic':
                return this.calculateLogistic(points);
            default:
                throw new Error(`Calculator for graph '${graphKey}' not implemented`);
        }
    }

    // ========== CALCULATION METHODS ==========

    calculateLinear(points) {
        const n = points.length;
        let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;

        points.forEach(([x, y]) => {
            sumX += x;
            sumY += y;
            sumXY += x * y;
            sumX2 += x * x;
        });

        const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
        const yIntercept = (sumY - slope * sumX) / n;

        // Calculate R²
        const yMean = sumY / n;
        let ssTotal = 0, ssResidual = 0;
        points.forEach(([x, y]) => {
            const yPred = slope * x + yIntercept;
            ssTotal += Math.pow(y - yMean, 2);
            ssResidual += Math.pow(y - yPred, 2);
        });
        const rSquared = 1 - (ssResidual / ssTotal);

        // Calculate correlation coefficient
        const r = slope > 0 ? Math.sqrt(rSquared) : -Math.sqrt(rSquared);

        return {
            type: 'linear',
            slope,
            yIntercept,
            equation: `y = ${slope.toFixed(4)}x + ${yIntercept.toFixed(4)}`,
            correlation: r,
            rSquared,
            predict: (x) => slope * x + yIntercept,
            points
        };
    }

    calculateQuadratic(points) {
        // Use matrix method to solve for a, b, c in y = ax² + bx + c
        const n = points.length;
        let sumX = 0, sumX2 = 0, sumX3 = 0, sumX4 = 0;
        let sumY = 0, sumXY = 0, sumX2Y = 0;

        points.forEach(([x, y]) => {
            sumX += x;
            sumX2 += x * x;
            sumX3 += x * x * x;
            sumX4 += x * x * x * x;
            sumY += y;
            sumXY += x * y;
            sumX2Y += x * x * y;
        });

        // Solve 3x3 system using Cramer's rule
        const det = n * (sumX2 * sumX4 - sumX3 * sumX3) -
                    sumX * (sumX * sumX4 - sumX2 * sumX3) +
                    sumX2 * (sumX * sumX3 - sumX2 * sumX2);

        const a = (sumY * (sumX2 * sumX4 - sumX3 * sumX3) -
                   sumXY * (sumX * sumX4 - sumX2 * sumX3) +
                   sumX2Y * (sumX * sumX3 - sumX2 * sumX2)) / det;

        const b = (n * (sumXY * sumX4 - sumX2Y * sumX3) -
                   sumX * (sumY * sumX4 - sumX2Y * sumX2) +
                   sumX2 * (sumY * sumX3 - sumXY * sumX2)) / det;

        const c = (n * (sumX2 * sumX2Y - sumX3 * sumXY) -
                   sumX * (sumX * sumX2Y - sumX2 * sumXY) +
                   sumX2 * (sumX * sumXY - sumX2 * sumY)) / det;

        // Calculate vertex
        const vertexX = -b / (2 * a);
        const vertexY = a * vertexX * vertexX + b * vertexX + c;

        // Calculate R²
        const yMean = sumY / n;
        let ssTotal = 0, ssResidual = 0;
        points.forEach(([x, y]) => {
            const yPred = a * x * x + b * x + c;
            ssTotal += Math.pow(y - yMean, 2);
            ssResidual += Math.pow(y - yPred, 2);
        });
        const rSquared = 1 - (ssResidual / ssTotal);

        // Calculate roots using quadratic formula
        const discriminant = b * b - 4 * a * c;
        let roots = [];
        if (discriminant >= 0) {
            roots.push((-b + Math.sqrt(discriminant)) / (2 * a));
            roots.push((-b - Math.sqrt(discriminant)) / (2 * a));
        }

        return {
            type: 'quadratic',
            a, b, c,
            coefficients: { a, b, c },
            vertex: { x: vertexX, y: vertexY },
            axisOfSymmetry: vertexX,
            yIntercept: c,
            roots: roots.length > 0 ? roots : null,
            equation: `y = ${a.toFixed(4)}x² + ${b.toFixed(4)}x + ${c.toFixed(4)}`,
            rSquared,
            predict: (x) => a * x * x + b * x + c,
            points
        };
    }

    calculateExponential(points) {
        // Linearize: ln(y) = ln(a) + bx
        const linearPoints = points
            .filter(([x, y]) => y > 0)
            .map(([x, y]) => [x, Math.log(y)]);

        if (linearPoints.length < 2) {
            throw new Error('Exponential fit requires positive y values');
        }

        const linear = this.calculateLinear(linearPoints);
        const a = Math.exp(linear.yIntercept);
        const b = Math.exp(linear.slope);
        const k = linear.slope;

        // Calculate R² on original data
        const yMean = points.reduce((sum, [, y]) => sum + y, 0) / points.length;
        let ssTotal = 0, ssResidual = 0;
        points.forEach(([x, y]) => {
            const yPred = a * Math.pow(b, x);
            ssTotal += Math.pow(y - yMean, 2);
            ssResidual += Math.pow(y - yPred, 2);
        });
        const rSquared = 1 - (ssResidual / ssTotal);

        // Calculate doubling time or half-life
        const doublingTime = Math.log(2) / Math.abs(k);
        const halfLife = doublingTime; // Same calculation

        return {
            type: 'exponential',
            coefficient: a,
            base: b,
            growthRate: k,
            equation: `y = ${a.toFixed(4)} × ${b.toFixed(4)}^x`,
            alternateEquation: `y = ${a.toFixed(4)} × e^(${k.toFixed(4)}x)`,
            doubling: k > 0 ? doublingTime : null,
            halfLife: k < 0 ? halfLife : null,
            rSquared,
            predict: (x) => a * Math.pow(b, x),
            points
        };
    }

    calculateLogarithmic(points) {
        // Linearize: y = a·ln(x) + b
        const validPoints = points.filter(([x]) => x > 0);

        if (validPoints.length < 2) {
            throw new Error('Logarithmic fit requires positive x values');
        }

        const linearPoints = validPoints.map(([x, y]) => [Math.log(x), y]);
        const linear = this.calculateLinear(linearPoints);

        const coefficient = linear.slope;
        const verticalShift = linear.yIntercept;
        const base = Math.E; // Natural log

        // Calculate R²
        const yMean = validPoints.reduce((sum, [, y]) => sum + y, 0) / validPoints.length;
        let ssTotal = 0, ssResidual = 0;
        validPoints.forEach(([x, y]) => {
            const yPred = coefficient * Math.log(x) + verticalShift;
            ssTotal += Math.pow(y - yMean, 2);
            ssResidual += Math.pow(y - yPred, 2);
        });
        const rSquared = 1 - (ssResidual / ssTotal);

        return {
            type: 'logarithmic',
            coefficient,
            verticalShift,
            base,
            equation: `y = ${coefficient.toFixed(4)} × ln(x) + ${verticalShift.toFixed(4)}`,
            asymptote: { type: 'vertical', value: 0 },
            rSquared,
            predict: (x) => x > 0 ? coefficient * Math.log(x) + verticalShift : null,
            points: validPoints
        };
    }

    calculateCubic(points) {
        // Fit y = ax³ + bx² + cx + d using least squares
        const n = points.length;
        
        // Build matrices for normal equations
        let sumX = 0, sumX2 = 0, sumX3 = 0, sumX4 = 0, sumX5 = 0, sumX6 = 0;
        let sumY = 0, sumXY = 0, sumX2Y = 0, sumX3Y = 0;

        points.forEach(([x, y]) => {
            sumX += x;
            sumX2 += x * x;
            sumX3 += x * x * x;
            sumX4 += x * x * x * x;
            sumX5 += x * x * x * x * x;
            sumX6 += x * x * x * x * x * x;
            sumY += y;
            sumXY += x * y;
            sumX2Y += x * x * y;
            sumX3Y += x * x * x * y;
        });

        // Use simplified calculation for cubic regression
        // This is a simplified approach - full matrix solution would be more accurate
        const avgX = sumX / n;
        const avgY = sumY / n;

        // Simplified cubic coefficients (approximation)
        const a = (sumX3Y - avgY * sumX3) / (sumX6 - avgX * sumX3);
        const b = (sumX2Y - avgY * sumX2 - a * sumX5) / (sumX4 - avgX * sumX2);
        const c = (sumXY - avgY * sumX - a * sumX4 - b * sumX3) / (sumX2 - avgX * sumX);
        const d = avgY - a * (sumX3 / n) - b * (sumX2 / n) - c * avgX;

        // Calculate R²
        const yMean = sumY / n;
        let ssTotal = 0, ssResidual = 0;
        points.forEach(([x, y]) => {
            const yPred = a * x * x * x + b * x * x + c * x + d;
            ssTotal += Math.pow(y - yMean, 2);
            ssResidual += Math.pow(y - yPred, 2);
        });
        const rSquared = 1 - (ssResidual / ssTotal);

        // Find inflection point: x = -b / (3a)
        const inflectionX = -b / (3 * a);
        const inflectionY = a * Math.pow(inflectionX, 3) + b * Math.pow(inflectionX, 2) + 
                           c * inflectionX + d;

        return {
            type: 'cubic',
            a, b, c, d,
            coefficients: { a, b, c, d },
            inflectionPoint: { x: inflectionX, y: inflectionY },
            equation: `y = ${a.toFixed(4)}x³ + ${b.toFixed(4)}x² + ${c.toFixed(4)}x + ${d.toFixed(4)}`,
            rSquared,
            predict: (x) => a * x * x * x + b * x * x + c * x + d,
            points
        };
    }

    calculateSine(points) {
        // Estimate sine wave parameters: y = A·sin(B(x - C)) + D
        const yValues = points.map(([, y]) => y);
        const xValues = points.map(([x]) => x);

        // Estimate amplitude (A) and vertical shift (D)
        const yMax = Math.max(...yValues);
        const yMin = Math.min(...yValues);
        const amplitude = (yMax - yMin) / 2;
        const verticalShift = (yMax + yMin) / 2;

        // Estimate period and frequency
        // Find zero crossings to estimate period
        const crossings = [];
        for (let i = 0; i < points.length - 1; i++) {
            const y1 = points[i][1] - verticalShift;
            const y2 = points[i + 1][1] - verticalShift;
            if (y1 * y2 < 0) { // Sign change
                crossings.push((points[i][0] + points[i + 1][0]) / 2);
            }
        }

        let period = 2 * Math.PI;
        if (crossings.length >= 2) {
            const avgDistance = crossings.slice(1).reduce((sum, x, i) => 
                sum + (x - crossings[i]), 0) / (crossings.length - 1);
            period = avgDistance * 2; // Half period between crossings
        }

        const frequency = (2 * Math.PI) / period;

        // Estimate phase shift - find where sine wave should start
        let phaseShift = 0;
        if (points.length > 0) {
            const firstPoint = points[0];
            const normalizedY = (firstPoint[1] - verticalShift) / amplitude;
            // Clamp to [-1, 1]
            const clampedY = Math.max(-1, Math.min(1, normalizedY));
            phaseShift = firstPoint[0] - Math.asin(clampedY) / frequency;
        }

        // Calculate R²
        const yMean = yValues.reduce((a, b) => a + b, 0) / yValues.length;
        let ssTotal = 0, ssResidual = 0;
        points.forEach(([x, y]) => {
            const yPred = amplitude * Math.sin(frequency * (x - phaseShift)) + verticalShift;
            ssTotal += Math.pow(y - yMean, 2);
            ssResidual += Math.pow(y - yPred, 2);
        });
        const rSquared = 1 - (ssResidual / ssTotal);

        return {
            type: 'sine',
            amplitude,
            period,
            frequency,
            phaseShift,
            verticalShift,
            equation: `y = ${amplitude.toFixed(4)} × sin(${frequency.toFixed(4)}(x - ${phaseShift.toFixed(4)})) + ${verticalShift.toFixed(4)}`,
            rSquared,
            predict: (x) => amplitude * Math.sin(frequency * (x - phaseShift)) + verticalShift,
            points
        };
    }

    calculateCosine(points) {
        // Cosine is sine shifted by π/2
        const sineData = this.calculateSine(points);
        
        // Convert sine to cosine: cos(x) = sin(x + π/2)
        const phaseShift = sineData.phaseShift - (Math.PI / 2) / sineData.frequency;

        return {
            type: 'cosine',
            amplitude: sineData.amplitude,
            period: sineData.period,
            frequency: sineData.frequency,
            phaseShift,
            verticalShift: sineData.verticalShift,
            equation: `y = ${sineData.amplitude.toFixed(4)} × cos(${sineData.frequency.toFixed(4)}(x - ${phaseShift.toFixed(4)})) + ${sineData.verticalShift.toFixed(4)}`,
            rSquared: sineData.rSquared,
            predict: (x) => sineData.amplitude * Math.cos(sineData.frequency * (x - phaseShift)) + sineData.verticalShift,
            points
        };
    }

    calculateTangent(points) {
        // Estimate tangent function: y = A·tan(B(x - C)) + D
        const yValues = points.map(([, y]) => y);
        const xValues = points.map(([x]) => x);

        // Estimate vertical shift
        const verticalShift = yValues.reduce((a, b) => a + b, 0) / yValues.length;

        // Estimate period (standard is π)
        const period = Math.PI;
        const frequency = Math.PI / period;

        // Estimate phase shift and amplitude
        let phaseShift = 0;
        let amplitude = 1;

        // Find where tan(x) = 0 (should be at x = nπ)
        const zeroPoints = points.filter(([, y]) => Math.abs(y - verticalShift) < 0.1);
        if (zeroPoints.length > 0) {
            phaseShift = zeroPoints[0][0];
        }

        // Calculate asymptotes
        const asymptotes = [];
        for (let i = -10; i <= 10; i++) {
            const asymptote = phaseShift + (period / 2) + i * period;
            asymptotes.push(asymptote);
        }

        return {
            type: 'tangent',
            amplitude,
            period,
            frequency,
            phaseShift,
            verticalShift,
            asymptotes: asymptotes.filter(a => {
                const xMin = Math.min(...xValues);
                const xMax = Math.max(...xValues);
                return a >= xMin - period && a <= xMax + period;
            }),
            equation: `y = ${amplitude.toFixed(4)} × tan(${frequency.toFixed(4)}(x - ${phaseShift.toFixed(4)})) + ${verticalShift.toFixed(4)}`,
            predict: (x) => {
                const value = amplitude * Math.tan(frequency * (x - phaseShift)) + verticalShift;
                return isFinite(value) ? value : null;
            },
            points
        };
    }

    calculateAbsolute(points) {
        // Fit y = a|x - h| + k
        // Find vertex (minimum point)
        let vertexX = 0, vertexY = Infinity;
        
        points.forEach(([x, y]) => {
            if (y < vertexY) {
                vertexY = y;
                vertexX = x;
            }
        });

        // Calculate slope from points on either side of vertex
        const leftPoints = points.filter(([x]) => x < vertexX);
        const rightPoints = points.filter(([x]) => x > vertexX);

        let slope = 1;
        if (rightPoints.length > 0) {
            const rightPoint = rightPoints[0];
            slope = Math.abs((rightPoint[1] - vertexY) / (rightPoint[0] - vertexX));
        } else if (leftPoints.length > 0) {
            const leftPoint = leftPoints[leftPoints.length - 1];
            slope = Math.abs((leftPoint[1] - vertexY) / (leftPoint[0] - vertexX));
        }

        // Calculate R²
        const yMean = points.reduce((sum, [, y]) => sum + y, 0) / points.length;
        let ssTotal = 0, ssResidual = 0;
        points.forEach(([x, y]) => {
            const yPred = slope * Math.abs(x - vertexX) + vertexY;
            ssTotal += Math.pow(y - yMean, 2);
            ssResidual += Math.pow(y - yPred, 2);
        });
        const rSquared = 1 - (ssResidual / ssTotal);

        return {
            type: 'absolute',
            vertex: { x: vertexX, y: vertexY },
            slope,
            verticalStretch: slope,
            equation: `y = ${slope.toFixed(4)}|x - ${vertexX.toFixed(4)}| + ${vertexY.toFixed(4)}`,
            rSquared,
            predict: (x) => slope * Math.abs(x - vertexX) + vertexY,
            points
        };
    }

    calculateSquareRoot(points) {
        // Fit y = a√(x - h) + k
        // Transform to linear: y = a√u where u = x - h
        
        // Find horizontal shift (where function starts)
        const xValues = points.map(([x]) => x);
        const horizontalShift = Math.min(...xValues);

        // Linearize
        const linearPoints = points
            .filter(([x]) => x >= horizontalShift)
            .map(([x, y]) => [Math.sqrt(x - horizontalShift), y]);

        const linear = this.calculateLinear(linearPoints);
        const verticalStretch = linear.slope;
        const verticalShift = linear.yIntercept;

        // Calculate R²
        const yMean = points.reduce((sum, [, y]) => sum + y, 0) / points.length;
        let ssTotal = 0, ssResidual = 0;
        points.forEach(([x, y]) => {
            if (x >= horizontalShift) {
                const yPred = verticalStretch * Math.sqrt(x - horizontalShift) + verticalShift;
                ssTotal += Math.pow(y - yMean, 2);
                ssResidual += Math.pow(y - yPred, 2);
            }
        });
        const rSquared = ssTotal > 0 ? 1 - (ssResidual / ssTotal) : 0;

        return {
            type: 'squareRoot',
            horizontalShift,
            verticalShift,
            verticalStretch,
            equation: `y = ${verticalStretch.toFixed(4)}√(x - ${horizontalShift.toFixed(4)}) + ${verticalShift.toFixed(4)}`,
            domain: `x ≥ ${horizontalShift.toFixed(4)}`,
            rSquared,
            predict: (x) => x >= horizontalShift ? 
                verticalStretch * Math.sqrt(x - horizontalShift) + verticalShift : null,
            points
        };
    }

    calculateRational(points) {
        // Fit y = (ax + b) / (cx + d)
        // Simplified approach: find vertical asymptote and horizontal asymptote
        
        const xValues = points.map(([x]) => x);
        const yValues = points.map(([, y]) => y);

        // Estimate horizontal asymptote (y approaches this as x → ∞)
        const horizontalAsymptote = (yValues[yValues.length - 1] + yValues[yValues.length - 2]) / 2;

        // Estimate vertical asymptote (look for large y changes)
        let verticalAsymptote = 0;
        let maxYChange = 0;
        for (let i = 0; i < points.length - 1; i++) {
            const yChange = Math.abs(points[i + 1][1] - points[i][1]);
            if (yChange > maxYChange) {
                maxYChange = yChange;
                verticalAsymptote = (points[i][0] + points[i + 1][0]) / 2;
            }
        }

        // Simple rational function: y = a/(x - h) + k
        const h = verticalAsymptote;
        const k = horizontalAsymptote;

        // Fit a using a point far from asymptote
        const farPoint = points.reduce((furthest, [x, y]) => 
            Math.abs(x - h) > Math.abs(furthest[0] - h) ? [x, y] : furthest
        , points[0]);
        
        const a = (farPoint[1] - k) * (farPoint[0] - h);

        return {
            type: 'rational',
            verticalAsymptote: h,
            horizontalAsymptote: k,
            coefficient: a,
            equation: `y = ${a.toFixed(4)}/(x - ${h.toFixed(4)}) + ${k.toFixed(4)}`,
            asymptotes: {
                vertical: h,
                horizontal: k
            },
            predict: (x) => Math.abs(x - h) > 0.001 ? a / (x - h) + k : null,
            points
        };
    }

    calculatePiecewise(segments) {
        // Each segment has its own equation
        const segmentData = segments.map((segment, index) => {
            const points = segment.points || segment;
            const linear = this.calculateLinear(points);
            
            const xValues = points.map(([x]) => x);
            const domain = {
                min: Math.min(...xValues),
                max: Math.max(...xValues)
            };

            return {
                index,
                ...linear,
                domain,
                equation: linear.equation
            };
        });

        return {
            type: 'piecewise',
            segments: segmentData,
            equation: segmentData.map(s => 
                `${s.equation} for ${s.domain.min.toFixed(2)} ≤ x ≤ ${s.domain.max.toFixed(2)}`
            ).join('\n'),
            predict: (x) => {
                for (const segment of segmentData) {
                    if (x >= segment.domain.min && x <= segment.domain.max) {
                        return segment.predict(x);
                    }
                }
                return null;
            },
            segments: segments
        };
    }

    calculatePolynomial(points, degree) {
        // For higher degree polynomials, use general approach
        // This is simplified - full implementation would use matrix methods
        
        if (degree === 2) return this.calculateQuadratic(points);
        if (degree === 3) return this.calculateCubic(points);
        
        // For degree 4+, use approximation
        const linear = this.calculateLinear(points);
        
        return {
            type: 'polynomial',
            degree,
            equation: `Polynomial degree ${degree} (approximation)`,
            coefficients: { approximate: true },
            rSquared: linear.rSquared,
            predict: linear.predict,
            points,
            note: 'Higher-degree polynomial fitting requires advanced numerical methods'
        };
    }

    calculatePower(points) {
        // Fit y = ax^n
        // Linearize: log(y) = log(a) + n·log(x)
        
        const validPoints = points.filter(([x, y]) => x > 0 && y > 0);
        
        if (validPoints.length < 2) {
            throw new Error('Power fit requires positive x and y values');
        }

        const linearPoints = validPoints.map(([x, y]) => [Math.log(x), Math.log(y)]);
        const linear = this.calculateLinear(linearPoints);
        
        const coefficient = Math.exp(linear.yIntercept);
        const exponent = linear.slope;

        // Calculate R²
        const yMean = validPoints.reduce((sum, [, y]) => sum + y, 0) / validPoints.length;
        let ssTotal = 0, ssResidual = 0;
        validPoints.forEach(([x, y]) => {
            const yPred = coefficient * Math.pow(x, exponent);
            ssTotal += Math.pow(y - yMean, 2);
            ssResidual += Math.pow(y - yPred, 2);
        });
        const rSquared = 1 - (ssResidual / ssTotal);

        return {
            type: 'power',
            coefficient,
            exponent,
            equation: `y = ${coefficient.toFixed(4)} × x^${exponent.toFixed(4)}`,
            rSquared,
            predict: (x) => x > 0 ? coefficient * Math.pow(x, exponent) : null,
            points: validPoints
        };
    }

    calculateLogistic(points) {
        // Fit y = L / (1 + e^(-k(x - x₀)))
        const yValues = points.map(([, y]) => y);
        const xValues = points.map(([x]) => x);

        // Estimate L (maximum value)
        const maxValue = Math.max(...yValues);
        const minValue = Math.min(...yValues);
        const L = maxValue * 1.1; // Slightly above max

        // Estimate midpoint (inflection point)
        const midpoint = (xValues[0] + xValues[xValues.length - 1]) / 2;

        // Estimate growth rate
        const growthRate = 1.0;

        // Calculate R² (approximate)
        const yMean = yValues.reduce((a, b) => a + b, 0) / yValues.length;
        let ssTotal = 0, ssResidual = 0;
        points.forEach(([x, y]) => {
            const yPred = L / (1 + Math.exp(-growthRate * (x - midpoint)));
            ssTotal += Math.pow(y - yMean, 2);
            ssResidual += Math.pow(y - yPred, 2);
        });
        const rSquared = 1 - (ssResidual / ssTotal);

        return {
            type: 'logistic',
            maxValue: L,
            growthRate,
            inflectionPoint: { x: midpoint, y: L / 2 },
            equation: `y = ${L.toFixed(4)} /(1 + e^(-${growthRate.toFixed(4)}(x - ${midpoint.toFixed(4)})))`,
            asymptotes: {
                lower: minValue,
                upper: L
            },
            rSquared,
            predict: (x) => L / (1 + Math.exp(-growthRate * (x - midpoint))),
            points
        };
    }

    // ========== VISUALIZATION METHODS ==========

    renderGraphVisualization(graphKey, x, y, width, height, config, graphData) {
        const ctx = this.ctx;
        
        // Background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(x, y, width, height);

        // Title
        const graph = GraphRegistry.getGraph(graphKey);
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 18px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(graph.name, x + width / 2, y + 30);

        // Subtitle with equation
        if (config.showEquation) {
            ctx.font = '14px Arial';
            ctx.fillStyle = '#666666';
            ctx.fillText(graphData.equation, x + width / 2, y + 52);
        }

        // Calculate viewport bounds
        const points = graphKey === 'piecewise' ? 
            config.segments.flatMap(s => s.points || s) : 
            config.points;
        
        const xValues = points.map(p => p[0]);
        const yValues = points.map(p => p[1]);
        
        const xMin = Math.min(...xValues) - 1;
        const xMax = Math.max(...xValues) + 1;
        const yMin = Math.min(...yValues) - 1;
        const yMax = Math.max(...yValues) + 1;

        // Graph area
        const graphX = x + 80;
        const graphY = y + 80;
        const graphWidth = width - 160;
        const graphHeight = height - 180;

        // Scale functions
        const scaleX = (xVal) => graphX + ((xVal - xMin) / (xMax - xMin)) * graphWidth;
        const scaleY = (yVal) => graphY + graphHeight - ((yVal - yMin) / (yMax - yMin)) * graphHeight;

        // Draw grid
        if (config.showGrid) {
            this.drawGrid(ctx, graphX, graphY, graphWidth, graphHeight, 
                         xMin, xMax, yMin, yMax, config);
        }

        // Draw axes
        this.drawAxes(ctx, graphX, graphY, graphWidth, graphHeight, 
                     xMin, xMax, yMin, yMax, scaleX, scaleY, config);

        // Draw asymptotes if applicable
        if (config.showAsymptotes && graphData.asymptotes) {
            this.drawAsymptotes(ctx, graphData, graphX, graphY, graphWidth, graphHeight,
                              xMin, xMax, yMin, yMax, scaleX, scaleY, config);
        }

        // Draw the curve/line
        if (graphKey === 'piecewise') {
            this.drawPiecewiseCurve(ctx, graphData, graphX, graphY, graphWidth, graphHeight,
                                   xMin, xMax, scaleX, scaleY, config);
        } else if (['tangent', 'rational'].includes(graphKey)) {
            this.drawCurveWithDiscontinuities(ctx, graphData, graphX, graphY, graphWidth, graphHeight,
                                             xMin, xMax, scaleX, scaleY, config);
        } else {
            this.drawCurve(ctx, graphData, graphX, graphY, graphWidth, graphHeight,
                          xMin, xMax, scaleX, scaleY, config);
        }

        // Draw data points
        if (config.showPoints) {
            this.drawPoints(ctx, points, scaleX, scaleY, config);
        }

        // Draw special features
        if (graphKey === 'quadratic' && config.showVertex) {
            this.drawVertex(ctx, graphData.vertex, scaleX, scaleY, config);
        }
        
        if (graphKey === 'absolute' && config.showVertex) {
            this.drawVertex(ctx, graphData.vertex, scaleX, scaleY, config);
        }

        if (['sine', 'cosine'].includes(graphKey) && config.showAmplitude) {
            this.drawAmplitude(ctx, graphData, graphX, graphY, graphWidth, graphHeight,
                             scaleX, scaleY, config);
        }

        if (graphKey === 'cubic' && config.showInflection) {
            this.drawInflectionPoint(ctx, graphData.inflectionPoint, scaleX, scaleY, config);
        }

        // Draw statistics panel
        this.drawStatisticsPanel(ctx, graphData, x, y + height - 90, width, config);
    }

    drawGrid(ctx, x, y, width, height, xMin, xMax, yMin, yMax, config) {
        ctx.strokeStyle = config.gridColor || '#E0E0E0';
        ctx.lineWidth = 0.5;

        const xStep = this.calculateGridStep(xMax - xMin);
        const yStep = this.calculateGridStep(yMax - yMin);

        // Vertical grid lines
        for (let xVal = Math.ceil(xMin / xStep) * xStep; xVal <= xMax; xVal += xStep) {
            const xPos = x + ((xVal - xMin) / (xMax - xMin)) * width;
            ctx.beginPath();
            ctx.moveTo(xPos, y);
            ctx.lineTo(xPos, y + height);
            ctx.stroke();
        }

        // Horizontal grid lines
        for (let yVal = Math.ceil(yMin / yStep) * yStep; yVal <= yMax; yVal += yStep) {
            const yPos = y + height - ((yVal - yMin) / (yMax - yMin)) * height;
            ctx.beginPath();
            ctx.moveTo(x, yPos);
            ctx.lineTo(x + width, yPos);
            ctx.stroke();
        }
    }

    drawAxes(ctx, x, y, width, height, xMin, xMax, yMin, yMax, scaleX, scaleY, config) {
        ctx.strokeStyle = config.axisColor || '#000000';
        ctx.lineWidth = 2;

        // X-axis
        if (yMin <= 0 && yMax >= 0) {
            const yAxisPos = scaleY(0);
            ctx.beginPath();
            ctx.moveTo(x, yAxisPos);
            ctx.lineTo(x + width, yAxisPos);
            ctx.stroke();

            // X-axis arrow
            ctx.beginPath();
            ctx.moveTo(x + width, yAxisPos);
            ctx.lineTo(x + width - 10, yAxisPos - 5);
            ctx.lineTo(x + width - 10, yAxisPos + 5);
            ctx.closePath();
            ctx.fill();

            // X-axis label
            ctx.fillStyle = '#000000';
            ctx.font = 'bold 14px Arial';
            ctx.textAlign = 'right';
            ctx.fillText('x', x + width - 15, yAxisPos - 10);
        }

        // Y-axis
        if (xMin <= 0 && xMax >= 0) {
            const xAxisPos = scaleX(0);
            ctx.beginPath();
            ctx.moveTo(xAxisPos, y + height);
            ctx.lineTo(xAxisPos, y);
            ctx.stroke();

            // Y-axis arrow
            ctx.beginPath();
            ctx.moveTo(xAxisPos, y);
            ctx.lineTo(xAxisPos - 5, y + 10);
            ctx.lineTo(xAxisPos + 5, y + 10);
            ctx.closePath();
            ctx.fill();

            // Y-axis label
            ctx.fillStyle = '#000000';
            ctx.font = 'bold 14px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('y', xAxisPos + 20, y + 15);
        }

        // Draw tick marks and labels
        this.drawTickMarks(ctx, x, y, width, height, xMin, xMax, yMin, yMax, scaleX, scaleY);
    }

    drawTickMarks(ctx, x, y, width, height, xMin, xMax, yMin, yMax, scaleX, scaleY) {
        ctx.strokeStyle = '#000000';
        ctx.fillStyle = '#000000';
        ctx.font = '11px Arial';
        ctx.lineWidth = 1;

        const xStep = this.calculateGridStep(xMax - xMin);
        const yStep = this.calculateGridStep(yMax - yMin);

        // X-axis ticks
        const yAxisPos = (yMin <= 0 && yMax >= 0) ? scaleY(0) : y + height;
        for (let xVal = Math.ceil(xMin / xStep) * xStep; xVal <= xMax; xVal += xStep) {
            if (Math.abs(xVal) < 0.0001) continue; // Skip origin
            const xPos = scaleX(xVal);
            
            ctx.beginPath();
            ctx.moveTo(xPos, yAxisPos - 5);
            ctx.lineTo(xPos, yAxisPos + 5);
            ctx.stroke();

            ctx.textAlign = 'center';
            ctx.fillText(xVal.toFixed(1), xPos, yAxisPos + 20);
        }

        // Y-axis ticks
        const xAxisPos = (xMin <= 0 && xMax >= 0) ? scaleX(0) : x;
        for (let yVal = Math.ceil(yMin / yStep) * yStep; yVal <= yMax; yVal += yStep) {
            if (Math.abs(yVal) < 0.0001) continue; // Skip origin
            const yPos = scaleY(yVal);
            
            ctx.beginPath();
            ctx.moveTo(xAxisPos - 5, yPos);
            ctx.lineTo(xAxisPos + 5, yPos);
            ctx.stroke();

            ctx.textAlign = 'right';
            ctx.fillText(yVal.toFixed(1), xAxisPos - 10, yPos + 4);
        }

        // Origin label
        if (xMin <= 0 && xMax >= 0 && yMin <= 0 && yMax >= 0) {
            ctx.textAlign = 'right';
            ctx.fillText('0', scaleX(0) - 10, scaleY(0) + 20);
        }
    }

    drawAsymptotes(ctx, graphData, x, y, width, height, xMin, xMax, yMin, yMax, scaleX, scaleY, config) {
        ctx.strokeStyle = config.asymptoteColor || '#FF0000';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([5, 5]);

        if (graphData.asymptotes) {
            // Vertical asymptote
            if (typeof graphData.asymptotes === 'object' && graphData.asymptotes.vertical !== undefined) {
                const xVal = graphData.asymptotes.vertical;
                if (xVal >= xMin && xVal <= xMax) {
                    const xPos = scaleX(xVal);
                    ctx.beginPath();
                    ctx.moveTo(xPos, y);
                    ctx.lineTo(xPos, y + height);
                    ctx.stroke();

                    ctx.font = '10px Arial';
                    ctx.fillStyle = '#FF0000';
                    ctx.textAlign = 'center';
                    ctx.fillText(`x = ${xVal.toFixed(2)}`, xPos, y + 15);
                }
            }

            // Horizontal asymptote
            if (typeof graphData.asymptotes === 'object' && graphData.asymptotes.horizontal !== undefined) {
                const yVal = graphData.asymptotes.horizontal;
                if (yVal >= yMin && yVal <= yMax) {
                    const yPos = scaleY(yVal);
                    ctx.beginPath();
                    ctx.moveTo(x, yPos);
                    ctx.lineTo(x + width, yPos);
                    ctx.stroke();

                    ctx.font = '10px Arial';
                    ctx.fillStyle = '#FF0000';
                    ctx.textAlign = 'left';
                    ctx.fillText(`y = ${yVal.toFixed(2)}`, x + 5, yPos - 5);
                }
            }

            // Multiple asymptotes (for tangent)
            if (Array.isArray(graphData.asymptotes)) {
                graphData.asymptotes.forEach(xVal => {
                    if (xVal >= xMin && xVal <= xMax) {
                        const xPos = scaleX(xVal);
                        ctx.beginPath();
                        ctx.moveTo(xPos, y);
                        ctx.lineTo(xPos, y + height);
                        ctx.stroke();
                    }
                });
            }
        }

        ctx.setLineDash([]);
    }

    drawCurve(ctx, graphData, x, y, width, height, xMin, xMax, scaleX, scaleY, config) {
        ctx.strokeStyle = config.lineColor || config.curveColor || '#2196F3';
        ctx.lineWidth = config.lineWidth || 3;

        const numPoints = 500;
        const step = (xMax - xMin) / numPoints;

        ctx.beginPath();
        let firstPoint = true;

        for (let i = 0; i <= numPoints; i++) {
            const xVal = xMin + i * step;
            const yVal = graphData.predict(xVal);

            if (yVal !== null && isFinite(yVal)) {
                const xPos = scaleX(xVal);
                const yPos = scaleY(yVal);

                if (firstPoint) {
                    ctx.moveTo(xPos, yPos);
                    firstPoint = false;
                } else {
                    ctx.lineTo(xPos, yPos);
                }
            } else {
                firstPoint = true;
            }
        }

        ctx.stroke();
    }

    drawCurveWithDiscontinuities(ctx, graphData, x, y, width, height, xMin, xMax, scaleX, scaleY, config) {
        ctx.strokeStyle = config.lineColor || config.curveColor || '#2196F3';
        ctx.lineWidth = config.lineWidth || 3;

        const numPoints = 500;
        const step = (xMax - xMin) / numPoints;

        // Get asymptotes
        const asymptotes = Array.isArray(graphData.asymptotes) ? 
            graphData.asymptotes : 
            [graphData.asymptotes?.vertical].filter(a => a !== undefined);

        let currentSegmentStart = xMin;
        
        asymptotes.forEach(asymptote => {
            if (asymptote > xMin && asymptote < xMax) {
                // Draw segment before asymptote
                this.drawCurveSegment(ctx, graphData, currentSegmentStart, asymptote - 0.01, 
                                    scaleX, scaleY, step);
                currentSegmentStart = asymptote + 0.01;
            }
        });

        // Draw final segment
        this.drawCurveSegment(ctx, graphData, currentSegmentStart, xMax, scaleX, scaleY, step);
    }

    drawCurveSegment(ctx, graphData, xStart, xEnd, scaleX, scaleY, step) {
        ctx.beginPath();
        let firstPoint = true;

        const numPoints = Math.ceil((xEnd - xStart) / step);
        
        for (let i = 0; i <= numPoints; i++) {
            const xVal = xStart + (i / numPoints) * (xEnd - xStart);
            const yVal = graphData.predict(xVal);

            if (yVal !== null && isFinite(yVal) && Math.abs(yVal) < 1000) {
                const xPos = scaleX(xVal);
                const yPos = scaleY(yVal);

                if (firstPoint) {
                    ctx.moveTo(xPos, yPos);
                    firstPoint = false;
                } else {
                    ctx.lineTo(xPos, yPos);
                }
            }
        }

        ctx.stroke();
    }

    drawPiecewiseCurve(ctx, graphData, x, y, width, height, xMin, xMax, scaleX, scaleY, config) {
        const colors = config.colors || ['#2196F3', '#4CAF50', '#FF9800', '#E91E63'];

        graphData.segments.forEach((segment, index) => {
            ctx.strokeStyle = colors[index % colors.length];
            ctx.lineWidth = config.lineWidth || 3;

            const segmentXMin = segment.domain.min;
            const segmentXMax = segment.domain.max;
            
            ctx.beginPath();
            const numPoints = 100;
            const step = (segmentXMax - segmentXMin) / numPoints;

            for (let i = 0; i <= numPoints; i++) {
                const xVal = segmentXMin + i * step;
                const yVal = segment.predict(xVal);

                if (yVal !== null && isFinite(yVal)) {
                    const xPos = scaleX(xVal);
                    const yPos = scaleY(yVal);

                    if (i === 0) {
                        ctx.moveTo(xPos, yPos);
                    } else {
                        ctx.lineTo(xPos, yPos);
                    }
                }
            }

            ctx.stroke();

            // Draw breakpoints if enabled
            if (config.showBreakpoints) {
                ctx.fillStyle = colors[index % colors.length];
                [segmentXMin, segmentXMax].forEach(xVal => {
                    const yVal = segment.predict(xVal);
                    if (yVal !== null && isFinite(yVal)) {
                        ctx.beginPath();
                        ctx.arc(scaleX(xVal), scaleY(yVal), 5, 0, 2 * Math.PI);
                        ctx.fill();
                    }
                });
            }
        });
    }

    drawPoints(ctx, points, scaleX, scaleY, config) {
        ctx.fillStyle = config.pointColor || '#FF5722';
        const pointSize = config.pointSize || 6;

        points.forEach(([x, y]) => {
            ctx.beginPath();
            ctx.arc(scaleX(x), scaleY(y), pointSize, 0, 2 * Math.PI);
            ctx.fill();

            // Point outline
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 2;
            ctx.stroke();
        });
    }

    drawVertex(ctx, vertex, scaleX, scaleY, config) {
        const xPos = scaleX(vertex.x);
        const yPos = scaleY(vertex.y);

        // Draw vertex point
        ctx.fillStyle = '#FF0000';
        ctx.beginPath();
        ctx.arc(xPos, yPos, 8, 0, 2 * Math.PI);
        ctx.fill();

        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Vertex label
        ctx.fillStyle = '#FF0000';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(
            `Vertex: (${vertex.x.toFixed(2)}, ${vertex.y.toFixed(2)})`,
            xPos,
            yPos - 15
        );
    }

    drawInflectionPoint(ctx, point, scaleX, scaleY, config) {
        const xPos = scaleX(point.x);
        const yPos = scaleY(point.y);

        // Draw inflection point
        ctx.fillStyle = '#9C27B0';
        ctx.beginPath();
        ctx.arc(xPos, yPos, 7, 0, 2 * Math.PI);
        ctx.fill();

        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Inflection point label
        ctx.fillStyle = '#9C27B0';
        ctx.font = 'bold 11px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(
            `Inflection: (${point.x.toFixed(2)}, ${point.y.toFixed(2)})`,
            xPos,
            yPos - 15
        );
    }

    drawAmplitude(ctx, graphData, x, y, width, height, scaleX, scaleY, config) {
        // Draw amplitude lines
        const centerY = graphData.verticalShift;
        const topY = centerY + graphData.amplitude;
        const bottomY = centerY - graphData.amplitude;

        ctx.strokeStyle = '#FF9800';
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 3]);

        // Top amplitude line
        ctx.beginPath();
        ctx.moveTo(x, scaleY(topY));
        ctx.lineTo(x + width, scaleY(topY));
        ctx.stroke();

        // Bottom amplitude line
        ctx.beginPath();
        ctx.moveTo(x, scaleY(bottomY));
        ctx.lineTo(x + width, scaleY(bottomY));
        ctx.stroke();

        // Center line
        ctx.strokeStyle = '#FFC107';
        ctx.beginPath();
        ctx.moveTo(x, scaleY(centerY));
        ctx.lineTo(x + width, scaleY(centerY));
        ctx.stroke();

        ctx.setLineDash([]);

        // Amplitude label
        ctx.fillStyle = '#FF9800';
        ctx.font = 'bold 11px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(
            `A = ${graphData.amplitude.toFixed(2)}`,
            x + 10,
            scaleY(topY) - 5
        );
    }

    drawStatisticsPanel(ctx, graphData, x, y, width, config) {
        // Background
        ctx.fillStyle = '#F5F5F5';
        ctx.fillRect(x + 20, y, width - 40, 80);

        // Border
        ctx.strokeStyle = '#BDBDBD';
        ctx.lineWidth = 1;
        ctx.strokeRect(x + 20, y, width - 40, 80);

        // Statistics
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'left';
        ctx.fillText('Statistics:', x + 35, y + 20);

        ctx.font = '11px Arial';
        const stats = [];

        if (graphData.rSquared !== undefined) {
            stats.push(`R² = ${graphData.rSquared.toFixed(4)}`);
        }

        if (graphData.correlation !== undefined) {
            stats.push(`r = ${graphData.correlation.toFixed(4)}`);
        }

        if (graphData.slope !== undefined) {
            stats.push(`Slope = ${graphData.slope.toFixed(4)}`);
        }

        if (graphData.amplitude !== undefined) {
            stats.push(`Amplitude = ${graphData.amplitude.toFixed(4)}`);
        }

        if (graphData.period !== undefined) {
            stats.push(`Period = ${graphData.period.toFixed(4)}`);
        }

        // Display stats
        const statsPerRow = Math.ceil(stats.length / 2);
        stats.forEach((stat, index) => {
            const row = Math.floor(index / statsPerRow);
            const col = index % statsPerRow;
            const statX = x + 35 + (col * ((width - 70) / statsPerRow));
            const statY = y + 40 + (row * 20);
            ctx.fillText(stat, statX, statY);
        });

        // Points count
        const pointsCount = graphData.points ? graphData.points.length : 0;
        ctx.fillText(`Data Points: ${pointsCount}`, x + 35, y + 70);
    }

    calculateGridStep(range) {
        const rawStep = range / 10;
        const magnitude = Math.pow(10, Math.floor(Math.log10(rawStep)));
        const normalized = rawStep / magnitude;

        if (normalized < 1.5) return magnitude;
        if (normalized < 3) return 2 * magnitude;
        if (normalized < 7) return 5 * magnitude;
        return 10 * magnitude;
    }
}



export {GraphRegistry,  GraphRenderer};



// ============================================================================
// ADD THIS TO EnhancedSpreadsheetWorkbook CLASS
/**
export class EnhancedSpreadsheetWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1600;
        this.height = options.height || 2000;
        this.theme = options.theme || 'professional';

        // Spreadsheet data
        this.data = [];
        this.headers = [];
        this.formulas = {};
        this.calculations = {};
        this.history = [];

        // Chart management
        this.charts = [];
        this.chartRenderer = new ChartCanvasRenderer();

        // Anatomical diagram management
        this.anatomicalDiagrams = [];
        this.diagramRenderer = new AnatomicalDiagramRenderer(null);

        // Cross-section diagram management
        this.crossSectionDiagrams = [];
        this.crossSectionRenderer = new CrossSectionDiagramRenderer(null);

        // Stereochemistry diagram management
        this.stereochemistryDiagrams = [];
        this.stereochemistryRenderer = new StereochemistryDiagramRenderer(null);

        // Graphing Calculator management
        this.graphingCalculator = null;

        // Statistical Workbook management
        this.statisticalWorkbook = null;
        this.statisticalAnalyses = [];

        // Unified diagram tracking (for convenience)
        this.allDiagrams = {
            anatomical: this.anatomicalDiagrams,
            crossSection: this.crossSectionDiagrams,
            stereochemistry: this.stereochemistryDiagrams
        };

        // Visual settings
        this.cellWidth = 150;
        this.cellHeight = 30;
        this.headerHeight = 35;
        this.fontSize = 11;
        this.headerFontSize = 12;

        // Metadata
        this.sheetName = options.sheetName || 'Sheet1';
        this.createdDate = new Date();
        this.lastModified = new Date();
        this.author = options.author || 'User';

        this.setThemeColors();
    }

    // ==================== THEME COLORS ====================
    setThemeColors() {
        const themes = {
            professional: {
                background: '#ffffff',
                gridColor: '#e0e0e0',
                headerBg: '#2c3e50',
                headerText: '#ffffff',
                cellBg: '#ffffff',
                cellText: '#000000',
                borderColor: '#c0c0c0'
            },
            dark: {
                background: '#1e1e1e',
                gridColor: '#404040',
                headerBg: '#0d47a1',
                headerText: '#ffffff',
                cellBg: '#2d2d2d',
                cellText: '#ffffff',
                borderColor: '#505050'
            },
            light: {
                background: '#f5f5f5',
                gridColor: '#d0d0d0',
                headerBg: '#4caf50',
                headerText: '#ffffff',
                cellBg: '#ffffff',
                cellText: '#000000',
                borderColor: '#bdbdbd'
            }
        };
        this.colors = themes[this.theme] || themes.professional;
    }

    // ==================== STATISTICAL WORKBOOK INTEGRATION ====================

   
    loadData(data, headers = null) {
        if (!Array.isArray(data) || data.length === 0) {
            throw new Error('Data must be a non-empty array');
        }

        this.data = data.map(row => Array.isArray(row) ? row : Object.values(row));
        this.headers = headers || (Array.isArray(data[0]) ? data[0].map((_, i) => this.columnToLetter(i)) : Object.keys(data[0]));

        if (this.data.length > 0 && this.data[0].every(cell => typeof cell === 'string')) {
            this.headers = this.data[0];
            this.data = this.data.slice(1);
        }

        this.lastModified = new Date();
        this.addToHistory('Data loaded');

        return this;
    }

    columnToLetter(column) {
        let temp, letter = '';
        while (column >= 0) {
            temp = column % 26;
            letter = String.fromCharCode(temp + 65) + letter;
            column = (column - temp) / 26 - 1;
        }
        return letter;
    }

    letterToColumn(letter) {
        let column = 0;
        for (let i = 0; i < letter.length; i++) {
            column = column * 26 + letter.charCodeAt(i) - 64;
        }
        return column - 1;
    }

    parseCellReference(ref) {
        const match = ref.match(/^([A-Z]+)(\d+)$/);
        if (!match) return null;
        return {
            col: this.letterToColumn(match[1]),
            row: parseInt(match[2]) - 1
        };
    }

    parseRangeReference(range) {
        const [start, end] = range.split(':');
        const startCell = this.parseCellReference(start);
        const endCell = this.parseCellReference(end || start);
        return { start: startCell, end: endCell };
    }

    getCellValue(cellRef) {
        const cell = this.parseCellReference(cellRef);
        if (!cell || cell.row < 0 || cell.row >= this.data.length) return null;
        if (cell.col < 0 || cell.col >= this.data[cell.row].length) return null;
        return this.data[cell.row][cell.col];
    }

    setCellValue(cellRef, value) {
        const cell = this.parseCellReference(cellRef);
        if (!cell) return false;

        while (this.data.length <= cell.row) {
            this.data.push([]);
        }
        while (this.data[cell.row].length <= cell.col) {
            this.data[cell.row].push('');
        }

        this.data[cell.row][cell.col] = value;
        this.lastModified = new Date();
        return true;
    }

    getRangeValues(rangeRef) {
        const range = this.parseRangeReference(rangeRef);
        if (!range.start || !range.end) return [];

        const values = [];
        for (let row = range.start.row; row <= range.end.row; row++) {
            for (let col = range.start.col; col <= range.end.col; col++) {
                if (row >= 0 && row < this.data.length && col >= 0 && col < this.data[row].length) {
                    values.push(this.data[row][col]);
                }
            }
        }
        return values;
    }

    applyFormula(targetCell, formulaKey, params) {
        const formula = SpreadsheetFormulaRegistry.getFormula(formulaKey);
        if (!formula) {
            throw new Error(`Formula '${formulaKey}' not found`);
        }

        const processedParams = params.map(param => {
            if (typeof param === 'string' && param.includes(':')) {
                return this.getRangeValues(param);
            }
            else if (typeof param === 'string' && /^[A-Z]+\d+$/.test(param)) {
                return this.getCellValue(param);
            }
            return param;
        });

        const result = formula.calculate(...processedParams);

        this.formulas[targetCell] = {
            formulaKey,
            formula: `=${formula.excelFormula}(${params.join(',')})`,
            params,
            timestamp: new Date()
        };
        this.calculations[targetCell] = result;

        this.setCellValue(targetCell, result);

        this.addToHistory(`Applied ${formula.name} to ${targetCell}`);

        return {
            cell: targetCell,
            formula: this.formulas[targetCell].formula,
            result,
            formatted: this.formatCellValue(result, formula.category)
        };
    }

  applyFormulaBatch(targetRange, formulaKey, paramTemplate) {
    const range = this.parseRangeReference(targetRange);
    if (!range.start || !range.end) {
        throw new Error('Invalid target range');
    }

    const formula = SpreadsheetFormulaRegistry.getFormula(formulaKey);
    if (!formula) {
        throw new Error(`Formula '${formulaKey}' not found`);
    }

    const results = [];

    // Handle row-wise operations
    const rowWiseFormulas = [
        'sumByRow', 'productByRow', 'averageByRow', 'divideByRow', 
        'subtractByRow', 'maxByRow', 'minByRow', 'countByRow'
    ];
    
    if (rowWiseFormulas.includes(formulaKey)) {
        const sourceRange = this.parseRangeReference(paramTemplate[0]);
        
        if (!sourceRange.start || !sourceRange.end) {
            throw new Error('Invalid source range');
        }
        
        // Calculate number of rows in source and target
        const sourceRows = sourceRange.end.row - sourceRange.start.row + 1;
        const targetRows = range.end.row - range.start.row + 1;
        
        if (sourceRows !== targetRows) {
            throw new Error(`Source has ${sourceRows} rows but target has ${targetRows} rows. They must match.`);
        }
        
        // Process each row
        for (let i = 0; i < sourceRows; i++) {
            const sourceRow = sourceRange.start.row + i;
            const targetRow = range.start.row + i;
            
            // Build row range (e.g., C2:E2, C3:E3, etc.)
            const rowRangeStart = `${this.columnToLetter(sourceRange.start.col)}${sourceRow + 1}`;
            const rowRangeEnd = `${this.columnToLetter(sourceRange.end.col)}${sourceRow + 1}`;
            const rowRange = `${rowRangeStart}:${rowRangeEnd}`;
            
            // Get values for this row
            const rowValues = this.getRangeValues(rowRange);
            
            // Calculate based on formula type
            let result;
            let excelFormulaName;
            
            switch (formulaKey) {
                case 'sumByRow':
                    result = rowValues.reduce((sum, val) => sum + (parseFloat(val) || 0), 0);
                    excelFormulaName = 'SUM';
                    break;
                    
                case 'productByRow':
                    result = rowValues.reduce((prod, val) => prod * (parseFloat(val) || 1), 1);
                    excelFormulaName = 'PRODUCT';
                    break;
                    
                case 'averageByRow':
                    const nums = rowValues.filter(v => !isNaN(parseFloat(v))).map(v => parseFloat(v));
                    result = nums.length > 0 ? nums.reduce((sum, val) => sum + val, 0) / nums.length : 0;
                    excelFormulaName = 'AVERAGE';
                    break;
                    
                case 'subtractByRow':
                    // First value minus all subsequent values
                    result = rowValues.length > 0 ? parseFloat(rowValues[0]) || 0 : 0;
                    for (let j = 1; j < rowValues.length; j++) {
                        result -= (parseFloat(rowValues[j]) || 0);
                    }
                    excelFormulaName = 'SUBTRACT';
                    break;
                    
                case 'divideByRow':
                    // First value divided by product of all subsequent values
                    result = rowValues.length > 0 ? parseFloat(rowValues[0]) || 1 : 1;
                    for (let j = 1; j < rowValues.length; j++) {
                        const divisor = parseFloat(rowValues[j]) || 1;
                        if (divisor === 0) {
                            throw new Error(`Division by zero in row ${sourceRow + 1}`);
                        }
                        result /= divisor;
                    }
                    excelFormulaName = 'DIVIDE';
                    break;
                    
                case 'maxByRow':
                    const maxNums = rowValues.filter(v => !isNaN(parseFloat(v))).map(v => parseFloat(v));
                    result = maxNums.length > 0 ? Math.max(...maxNums) : 0;
                    excelFormulaName = 'MAX';
                    break;
                    
                case 'minByRow':
                    const minNums = rowValues.filter(v => !isNaN(parseFloat(v))).map(v => parseFloat(v));
                    result = minNums.length > 0 ? Math.min(...minNums) : 0;
                    excelFormulaName = 'MIN';
                    break;
                    
                case 'countByRow':
                    result = rowValues.filter(v => v !== null && v !== undefined && v !== '').length;
                    excelFormulaName = 'COUNT';
                    break;
                    
                default:
                    throw new Error(`Unknown row-wise formula: ${formulaKey}`);
            }
            
            // Target cell (e.g., F2, F3, F4, etc.)
            const targetCell = `${this.columnToLetter(range.start.col)}${targetRow + 1}`;
            
            // Set value
            this.setCellValue(targetCell, result);
            
            // Store formula
            this.formulas[targetCell] = {
                formulaKey,
                formula: `=${excelFormulaName}(${rowRange})`,
                params: [rowRange],
                timestamp: new Date()
            };
            
            this.calculations[targetCell] = result;
            
            results.push({
                cell: targetCell,
                formula: `=${excelFormulaName}(${rowRange})`,
                result,
                formatted: this.formatCellValue(result, formula.category)
            });
        }
        
        this.addToHistory(`Applied ${formula.name} to ${targetRange}`);
        return results;
    }
    
    // Original batch logic for other formulas
    for (let row = range.start.row; row <= range.end.row; row++) {
        for (let col = range.start.col; col <= range.end.col; col++) {
            const cellRef = `${this.columnToLetter(col)}${row + 1}`;

            // Adjust parameters for current row
            const adjustedParams = paramTemplate.map(param => {
                if (typeof param === 'string' && param.includes('{row}')) {
                    return param.replace('{row}', String(row + 1));
                }
                return param;
            });

            try {
                const result = this.applyFormula(cellRef, formulaKey, adjustedParams);
                results.push(result);
            } catch (error) {
                results.push({ cell: cellRef, error: error.message });
            }
        }
    }

    return results;
}
    formatCellValue(value, category) {
        if (value === null || value === undefined) return '';

        switch (category) {
            case 'Budget & Business':
            case 'Financial & Economic':
                if (typeof value === 'number') {
                    if (Math.abs(value) < 1 && value !== 0) {
                        return (value * 100).toFixed(2) + '%';
                    }
                    return '$' + value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                }
                break;
            case 'Statistics & Science':
                if (typeof value === 'number') {
                    return value.toFixed(4);
                }
                break;
            default:
                if (typeof value === 'number') {
                    return value.toLocaleString('en-US', { maximumFractionDigits: 2 });
                }
        }

        return String(value);
    }

    getAvailableActions() {
        const actions = {};
        const categories = SpreadsheetFormulaRegistry.getAllCategories();

        categories.forEach(category => {
            actions[category] = SpreadsheetFormulaRegistry.getFormulasByCategory(category);
        });

        return actions;
    }

    suggestFormulas(cellRange) {
        const values = this.getRangeValues(cellRange);
        const suggestions = [];

        const hasNumbers = values.some(v => !isNaN(parseFloat(v)));
        if (hasNumbers) {
            suggestions.push(
                { key: 'sum', priority: 10, reason: 'Numeric data detected' },
                { key: 'average', priority: 9, reason: 'Calculate central tendency' },
                { key: 'max', priority: 8, reason: 'Find highest value' },
                { key: 'min', priority: 8, reason: 'Find lowest value' }
            );
        }

        if (this.headers.some(h => /revenue|sales|income|cost|expense|budget/i.test(h))) {
            suggestions.push(
                { key: 'profitMargin', priority: 10, reason: 'Financial data detected' },
                { key: 'budgetPercentage', priority: 9, reason: 'Budget tracking recommended' }
            );
        }

        if (values.some(v => !isNaN(Date.parse(v)))) {
            suggestions.push(
                { key: 'datedif', priority: 7, reason: 'Date data detected' }
            );
        }

        return suggestions.sort((a, b) => b.priority - a.priority);
    }

    addToHistory(action) {
        this.history.push({
            action,
            timestamp: new Date(),
            dataSnapshot: JSON.parse(JSON.stringify({
                data: this.data,
                formulas: this.formulas
            }))
        });

        if (this.history.length > 50) {
            this.history = this.history.slice(-50);
        }
    }


    renderSpreadsheet(ctx) {
        ctx.fillStyle = this.colors.background;
        ctx.fillRect(0, 0, this.width, this.height);

        const startX = 60;
        const startY = 100;

        ctx.fillStyle = this.colors.cellText;
        ctx.font = 'bold 24px Arial';
        ctx.fillText(this.sheetName, 30, 40);

        ctx.font = '12px Arial';
        ctx.fillText(`Last Modified: ${this.lastModified.toLocaleString()}`, 30, 70);

        this.headers.forEach((header, colIndex) => {
            const x = startX + colIndex * this.cellWidth;

            ctx.fillStyle = this.colors.headerBg;
            ctx.fillRect(x, startY, this.cellWidth, this.headerHeight);

            ctx.strokeStyle = this.colors.borderColor;
            ctx.strokeRect(x, startY, this.cellWidth, this.headerHeight);

            ctx.fillStyle = this.colors.headerText;
            ctx.font = `bold ${this.headerFontSize}px Arial`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(
                String(header).substring(0, 15),
                x + this.cellWidth / 2,
                startY + this.headerHeight / 2
            );
        });

        this.data.forEach((row, rowIndex) => {
            const y = startY + this.headerHeight + rowIndex * this.cellHeight;

            ctx.fillStyle = this.colors.headerBg;
            ctx.fillRect(10, y, 40, this.cellHeight);
            ctx.strokeStyle = this.colors.borderColor;
            ctx.strokeRect(10, y, 40, this.cellHeight);

            ctx.fillStyle = this.colors.headerText;
            ctx.font = 'bold 11px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(String(rowIndex + 1), 30, y + this.cellHeight / 2);

            row.forEach((cell, colIndex) => {
                const x = startX + colIndex * this.cellWidth;
                const cellRef = `${this.columnToLetter(colIndex)}${rowIndex + 1}`;

                const isFormulaCell = this.formulas[cellRef];
                const isCalculatedCell = this.calculations[cellRef] !== undefined;

                if (isFormulaCell) {
                    ctx.fillStyle = this.colors.formulaCellBg;
                } else if (isCalculatedCell) {
                    ctx.fillStyle = this.colors.calculatedCellBg;
                } else if (rowIndex % 2 === 1) {
                    ctx.fillStyle = this.colors.alternateRowBg;
                } else {
                    ctx.fillStyle = this.colors.cellBg;
                }

                ctx.fillRect(x, y, this.cellWidth, this.cellHeight);
                ctx.strokeStyle = this.colors.gridColor;
                ctx.strokeRect(x, y, this.cellWidth, this.cellHeight);

                ctx.fillStyle = this.colors.cellText;
                ctx.font = `${this.fontSize}px Arial`;
                ctx.textAlign = 'left';

                let displayValue = String(cell);
                if (isFormulaCell) {
                    displayValue = this.formulas[cellRef].formula;
                }

                if (displayValue.length > 20) {
                    displayValue = displayValue.substring(0, 17) + '...';
                }

                ctx.fillText(displayValue, x + 5, y + this.cellHeight / 2);
            });
        });
    }

// ============================================================================
// UPDATED exportToPNG - Now includes Charts, Anatomical, Cross-Section, and Stereochemistry Diagrams
// ============================================================================

exportToPNG(filename = 'spreadsheet.png', options = {}) {
    const { 
        includeCharts = false, 
        includeAnatomicalDiagrams = false,
        includeCrossSectionDiagrams = false,
        includeStereochemistryDiagrams = false,
        chartIndices = [],
        anatomicalIndices = [],
        crossSectionIndices = [],
        stereochemistryIndices = []
    } = options;

    let totalHeight = this.height;
    const visualizationsToRender = {
        charts: [],
        anatomical: [],
        crossSection: [],
        stereochemistry: []
    };

    // Collect charts to render
    if (includeCharts && this.charts.length > 0) {
        const selectedCharts = chartIndices.length > 0
            ? chartIndices.map(i => this.charts[i]).filter(Boolean)
            : this.charts;
        visualizationsToRender.charts = selectedCharts;
    }

    // Collect anatomical diagrams to render
    if (includeAnatomicalDiagrams && this.anatomicalDiagrams.length > 0) {
        const selectedDiagrams = anatomicalIndices.length > 0
            ? anatomicalIndices.map(i => this.anatomicalDiagrams[i]).filter(Boolean)
            : this.anatomicalDiagrams;
        visualizationsToRender.anatomical = selectedDiagrams;
    }

    // Collect cross-section diagrams to render
    if (includeCrossSectionDiagrams && this.crossSectionDiagrams.length > 0) {
        const selectedCrossSections = crossSectionIndices.length > 0
            ? crossSectionIndices.map(i => this.crossSectionDiagrams[i]).filter(Boolean)
            : this.crossSectionDiagrams;
        visualizationsToRender.crossSection = selectedCrossSections;
    }

    // Collect stereochemistry diagrams to render
    if (includeStereochemistryDiagrams && this.stereochemistryDiagrams.length > 0) {
        const selectedStereochem = stereochemistryIndices.length > 0
            ? stereochemistryIndices.map(i => this.stereochemistryDiagrams[i]).filter(Boolean)
            : this.stereochemistryDiagrams;
        visualizationsToRender.stereochemistry = selectedStereochem;
    }

    // Calculate additional height needed
    const totalVisualizations = 
        visualizationsToRender.charts.length + 
        visualizationsToRender.anatomical.length +
        visualizationsToRender.crossSection.length +
        visualizationsToRender.stereochemistry.length;
    
    if (totalVisualizations > 0) {
        const sectionHeaderHeight = 80;
        const itemHeight = 350;
        const itemsPerRow = 2;
        const rows = Math.ceil(totalVisualizations / itemsPerRow);
        totalHeight += sectionHeaderHeight + (itemHeight * rows) + 50;
    }

    const canvas = createCanvas(this.width, totalHeight);
    const ctx = canvas.getContext('2d');

    // Render spreadsheet
    this.renderSpreadsheet(ctx);

    // Render visualizations if any
    if (totalVisualizations > 0) {
        this.renderVisualizationsToCanvas(ctx, visualizationsToRender);
    }

    const buffer = canvas.toBuffer('image/png');
    if (filename) {
        fs.writeFileSync(filename, buffer);
    }
    return buffer;
}

// ============================================================================
// UNIFIED Visualizations Renderer - All Visualization Types
// ============================================================================

renderVisualizationsToCanvas(ctx, visualizations) {
    const { 
        charts = [], 
        anatomical = [], 
        crossSection = [], 
        stereochemistry = [] 
    } = visualizations;
    
    const allVisualizations = [
        ...charts.map(c => ({ type: 'chart', data: c, icon: '📊' })),
        ...anatomical.map(d => ({ type: 'anatomical', data: d, icon: '🫀' })),
        ...crossSection.map(d => ({ type: 'crossSection', data: d, icon: '🔬' })),
        ...stereochemistry.map(d => ({ type: 'stereochemistry', data: d, icon: '🧪' }))
    ];

    if (allVisualizations.length === 0) return;

    // Calculate exact position right after spreadsheet ends
    const numRows = this.data.length;
    const spreadsheetEndY = 100 + this.headerHeight + (numRows * this.cellHeight) + 80;

    // Section header
    const headerY = spreadsheetEndY;
    ctx.fillStyle = this.colors.headerBg;
    ctx.fillRect(0, headerY, this.width, 60);

    ctx.fillStyle = this.colors.headerText;
    ctx.font = 'bold 20px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('📊 Visualizations', 30, headerY + 25);

    // Summary text
    ctx.font = '14px Arial';
    const summaryParts = [];
    if (charts.length > 0) summaryParts.push(`${charts.length} Chart${charts.length !== 1 ? 's' : ''}`);
    if (anatomical.length > 0) summaryParts.push(`${anatomical.length} Anatomical`);
    if (crossSection.length > 0) summaryParts.push(`${crossSection.length} Cross-Section`);
    if (stereochemistry.length > 0) summaryParts.push(`${stereochemistry.length} Molecule${stereochemistry.length !== 1 ? 's' : ''}`);
    
    ctx.fillText(summaryParts.join(' • '), 30, headerY + 45);

    // Visualizations layout
    let currentY = headerY + 80;
    const itemsPerRow = 2;
    const itemWidth = 700;
    const itemHeight = 500;
    const itemSpacingX = 80;
    const itemSpacingY = 80;

    allVisualizations.forEach((viz, index) => {
        const colIndex = index % itemsPerRow;
        const rowIndex = Math.floor(index / itemsPerRow);

        const vizX = 50 + (colIndex * (itemWidth + itemSpacingX));
        const vizY = currentY + (rowIndex * (itemHeight + itemSpacingY + 40));

        // Title with icon
        ctx.fillStyle = this.colors.cellText;
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(
            `${viz.icon} ${index + 1}. ${viz.data.title}`,
            vizX,
            vizY - 15
        );

        // Type label
        ctx.font = '11px Arial';
        ctx.fillStyle = '#666666';
        const typeLabels = {
            'chart': 'Chart',
            'anatomical': 'Anatomical Diagram',
            'crossSection': 'Cross-Section',
            'stereochemistry': 'Molecular Structure'
        };
        ctx.fillText(typeLabels[viz.type], vizX, vizY - 2);

        // Border
        ctx.strokeStyle = this.colors.borderColor;
        ctx.lineWidth = 2;
        ctx.strokeRect(vizX, vizY, itemWidth, itemHeight);

        // Background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(vizX + 1, vizY + 1, itemWidth - 2, itemHeight - 2);

        // Render the visualization
        try {
            ctx.save();
            ctx.translate(vizX, vizY);

            const tempCanvas = createCanvas(itemWidth, itemHeight);
            const tempCtx = tempCanvas.getContext('2d');

            if (viz.type === 'chart') {
                // Render chart
                this.chartRenderer.renderChart(
                    tempCanvas,
                    tempCtx,
                    viz.data.key,
                    viz.data.data,
                    { ...viz.data.options, width: itemWidth, height: itemHeight }
                );
            } else if (viz.type === 'anatomical') {
                // Render anatomical diagram
                this.diagramRenderer.canvas = tempCanvas;
                this.diagramRenderer.ctx = tempCtx;
                this.renderSpecificAnatomicalDiagram(viz.data.key, {
                    ...viz.data.options,
                    width: itemWidth,
                    height: itemHeight
                });
            } else if (viz.type === 'crossSection') {
                // Render cross-section diagram
                this.crossSectionRenderer.canvas = tempCanvas;
                this.crossSectionRenderer.ctx = tempCtx;
                this.crossSectionRenderer.renderDiagram(
                    viz.data.key,
                    0,
                    0,
                    itemWidth,
                    itemHeight,
                    viz.data.options
                );
            } else if (viz.type === 'stereochemistry') {
                // Render stereochemistry diagram
                this.stereochemistryRenderer.canvas = tempCanvas;
                this.stereochemistryRenderer.ctx = tempCtx;
                this.stereochemistryRenderer.renderDiagram(
                    viz.data.key,
                    0,
                    0,
                    itemWidth,
                    itemHeight,
                    viz.data.options
                );
            }

            // Draw the rendered visualization onto main canvas
            ctx.drawImage(tempCanvas, 0, 0);
            ctx.restore();

        } catch (error) {
            ctx.restore();
            // Error state
            ctx.fillStyle = '#ffcccc';
            ctx.fillRect(vizX, vizY, itemWidth, itemHeight);
            ctx.fillStyle = '#ff0000';
            ctx.font = '12px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(
                `Error rendering ${typeLabels[viz.type]}`,
                vizX + itemWidth / 2,
                vizY + itemHeight / 2
            );
            console.error(`${viz.type} ${index + 1} error:`, error.message);
        }
    });
}

// Helper method for rendering specific anatomical diagrams


// ============================================================================
// UPDATED exportToExcel - All Diagram Types
// ============================================================================

async exportToExcel(filename = 'spreadsheet.xlsx', options = {}) {
    const { 
        includeCharts = false,
        includeAnatomicalDiagrams = false,
        includeCrossSectionDiagrams = false,
        includeStereochemistryDiagrams = false
    } = options;
    
    const workbook = new ExcelJS.Workbook();
    workbook.creator = this.author;
    workbook.created = this.createdDate;
    workbook.modified = this.lastModified;
    workbook.lastPrinted = new Date();

    const worksheet = workbook.addWorksheet(this.sheetName);
    worksheet.properties.defaultRowHeight = 20;

    // Add headers
    const headerRow = worksheet.addRow(this.headers);
    headerRow.font = {
        bold: true,
        color: { argb: 'FFFFFFFF' },
        size: 12,
        name: 'Calibri'
    };
    headerRow.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FF4472C4' }
    };
    headerRow.alignment = {
        vertical: 'middle',
        horizontal: 'center'
    };
    headerRow.height = 30;

    headerRow.eachCell(cell => {
        cell.border = {
            top: { style: 'medium', color: { argb: 'FF2E5C8A' } },
            left: { style: 'thin', color: { argb: 'FF2E5C8A' } },
            bottom: { style: 'medium', color: { argb: 'FF2E5C8A' } },
            right: { style: 'thin', color: { argb: 'FF2E5C8A' } }
        };
    });

    // Add data rows
    this.data.forEach((row, rowIndex) => {
        const excelRow = worksheet.addRow(row);
        excelRow.height = 22;

        row.forEach((cellValue, colIndex) => {
            const cellRef = `${this.columnToLetter(colIndex)}${rowIndex + 1}`;
            const cell = excelRow.getCell(colIndex + 1);

            if (this.formulas[cellRef]) {
                cell.fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: { argb: 'FFFFF2CC' }
                };
                cell.font = { bold: true, color: { argb: 'FF000000' } };
                cell.note = {
                    texts: [
                        { font: { bold: true, size: 10 }, text: 'Formula: ' },
                        { font: { size: 10 }, text: this.formulas[cellRef].formula }
                    ],
                    margins: { insetmode: 'auto', inset: [5, 5, 5, 5] }
                };
            } else if (this.calculations[cellRef] !== undefined) {
                cell.fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: { argb: 'FFE2EFDA' }
                };
                cell.font = { italic: true };
            }

            if (typeof cellValue === 'number') {
                cell.numFmt = cellValue % 1 === 0 ? '#,##0' : '#,##0.00';
                cell.alignment = { horizontal: 'right', vertical: 'middle' };
            } else {
                cell.alignment = { horizontal: 'left', vertical: 'middle' };
            }

            cell.border = {
                top: { style: 'thin', color: { argb: 'FFD0D0D0' } },
                left: { style: 'thin', color: { argb: 'FFD0D0D0' } },
                bottom: { style: 'thin', color: { argb: 'FFD0D0D0' } },
                right: { style: 'thin', color: { argb: 'FFD0D0D0' } }
            };
        });

        if (rowIndex % 2 === 1) {
            excelRow.eachCell(cell => {
                if (!cell.fill || !cell.fill.fgColor || cell.fill.fgColor.argb === 'FFFFFFFF') {
                    cell.fill = {
                        type: 'pattern',
                        pattern: 'solid',
                        fgColor: { argb: 'FFF8F8F8' }
                    };
                }
            });
        }
    });

    // Auto-fit columns
    worksheet.columns.forEach((column, index) => {
        let maxLength = this.headers[index]?.toString().length || 10;
        column.eachCell({ includeEmpty: false }, cell => {
            const cellLength = cell.value ? cell.value.toString().length : 0;
            maxLength = Math.max(maxLength, cellLength);
        });
        column.width = Math.min(Math.max(maxLength + 3, 12), 45);
    });

    worksheet.views = [{ state: 'frozen', xSplit: 0, ySplit: 1 }];

    // ========== FORMULAS SHEET ==========
    if (Object.keys(this.formulas).length > 0) {
        const formulaSheet = workbook.addWorksheet('📋 Formulas');

        const formulaHeaderRow = formulaSheet.addRow([
            'Cell', 'Formula', 'Type', 'Category', 'Description', 'Applied'
        ]);

        formulaHeaderRow.font = { bold: true, color: { argb: 'FFFFFFFF' }, size: 11 };
        formulaHeaderRow.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'FF70AD47' }
        };
        formulaHeaderRow.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
        formulaHeaderRow.height = 30;

        Object.entries(this.formulas).forEach(([cell, data], index) => {
            const formula = SpreadsheetFormulaRegistry.getFormula(data.formulaKey);
            const formulaRow = formulaSheet.addRow([
                cell,
                data.formula,
                formula?.name || data.formulaKey,
                formula?.category || 'Unknown',
                formula?.description || '',
                data.timestamp.toLocaleString()
            ]);

            formulaRow.alignment = { vertical: 'top', wrapText: true };

            if (index % 2 === 1) {
                formulaRow.eachCell(cell => {
                    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF0F0F0' } };
                });
            }
        });

        formulaSheet.columns = [
            { width: 15 }, { width: 35 }, { width: 25 },
            { width: 20 }, { width: 45 }, { width: 22 }
        ];
    }

    // ========== VISUALIZATIONS SHEET (All Types) ==========
    const hasVisualizations = 
        (includeCharts && this.charts.length > 0) || 
        (includeAnatomicalDiagrams && this.anatomicalDiagrams.length > 0) ||
        (includeCrossSectionDiagrams && this.crossSectionDiagrams.length > 0) ||
        (includeStereochemistryDiagrams && this.stereochemistryDiagrams.length > 0);

    if (hasVisualizations) {
        const vizSheet = workbook.addWorksheet('📊 Visualizations');
        let currentRow = 1;

        // Track temp files for cleanup AFTER Excel is saved
        const tempFilesToCleanup = [];

        // HELPER FUNCTION: Add image to Excel with proper error handling
        const addImageToExcel = async (canvas, title, type, index, metadata = {}) => {
            let tempFilePath = null;
            
            try {
                // Create temp directory if it doesn't exist
                const tempDir = os.tmpdir();
                if (!fs.existsSync(tempDir)) {
                    fs.mkdirSync(tempDir, { recursive: true });
                }

                // Generate unique filename
                const timestamp = Date.now();
                const random = Math.random().toString(36).substring(2, 15);
                tempFilePath = path.join(tempDir, `${type}_${timestamp}_${index}_${random}.png`);

                // Save canvas to buffer
                const buffer = canvas.toBuffer('image/png');
                
                // Write buffer to temp file
                fs.writeFileSync(tempFilePath, buffer);

                // Verify file exists
                if (!fs.existsSync(tempFilePath)) {
                    throw new Error(`Failed to create temp file: ${tempFilePath}`);
                }

                console.log(`  • Created temp file: ${path.basename(tempFilePath)}`);

                // Add image to workbook
                const imageId = workbook.addImage({
                    filename: tempFilePath,
                    extension: 'png'
                });

                // Add title
                const titleCell = vizSheet.getCell(`A${currentRow}`);
                titleCell.value = title;
                
                const typeColors = {
                    'chart': 'FF4472C4',
                    'anatomical': 'FFE74C3C',
                    'crossSection': 'FF27AE60',
                    'stereochemistry': 'FF9B59B6'
                };
                
                titleCell.font = { 
                    bold: true, 
                    size: 12, 
                    color: { argb: typeColors[type] || 'FF000000' } 
                };
                titleCell.alignment = { horizontal: 'left', vertical: 'middle' };
                vizSheet.getRow(currentRow).height = 25;
                currentRow += 1;

                // Add metadata if provided
                if (Object.keys(metadata).length > 0) {
                    const metaCell = vizSheet.getCell(`A${currentRow}`);
                    const metaText = Object.entries(metadata)
                        .map(([key, value]) => `${key}: ${value}`)
                        .join(' • ');
                    metaCell.value = metaText;
                    metaCell.font = { size: 10, italic: true, color: { argb: 'FF666666' } };
                    vizSheet.getRow(currentRow).height = 20;
                    currentRow += 1;
                }

                // Insert image
                const imgWidth = canvas.width;
                const imgHeight = canvas.height;
                
                vizSheet.addImage(imageId, {
                    tl: { col: 0, row: currentRow - 1 },
                    ext: { width: imgWidth, height: imgHeight },
                    editAs: 'oneCell'
                });

                // Calculate rows for image
                const rowsNeeded = Math.ceil(imgHeight / 20);
                for (let r = 0; r < rowsNeeded; r++) {
                    vizSheet.getRow(currentRow + r).height = 20;
                }
                currentRow += rowsNeeded + 2;

                console.log(`  ✓ Added ${type} to Excel: ${title}`);

                // Add to cleanup list (don't delete yet!)
                tempFilesToCleanup.push(tempFilePath);

                return true;

            } catch (error) {
                console.error(`  ❌ Error adding ${type} ${index + 1}:`, error.message);
                
                // Add error message to sheet
                const errorCell = vizSheet.getCell(`A${currentRow}`);
                errorCell.value = `⚠ Error: ${title} - ${error.message}`;
                errorCell.font = { color: { argb: 'FFFF0000' }, italic: true };
                vizSheet.getRow(currentRow).height = 25;
                currentRow += 2;

                return false;
            }
        };

        // Add Charts
        if (includeCharts && this.charts.length > 0) {
            console.log('\n📊 Adding Charts to Excel...');
            
            // Section header
            const chartHeaderCell = vizSheet.getCell(`A${currentRow}`);
            chartHeaderCell.value = '📊 CHARTS';
            chartHeaderCell.font = { bold: true, size: 14, color: { argb: 'FF4472C4' } };
            chartHeaderCell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FFE7F3FF' }
            };
            vizSheet.getRow(currentRow).height = 30;
            currentRow += 2;

            for (let i = 0; i < this.charts.length; i++) {
                const chartConfig = this.charts[i];
                
                try {
                    // Render chart to canvas
                    const chartCanvas = createCanvas(
                        chartConfig.options.width || 700,
                        chartConfig.options.height || 500
                    );
                    const chartCtx = chartCanvas.getContext('2d');

                    this.chartRenderer.renderChart(
                        chartCanvas,
                        chartCtx,
                        chartConfig.key,
                        chartConfig.data,
                        chartConfig.options
                    );

                    // Add to Excel
                    await addImageToExcel(
                        chartCanvas,
                        `Chart ${i + 1}: ${chartConfig.title}`,
                        'chart',
                        i,
                        { Type: chartConfig.key }
                    );

                } catch (error) {
                    console.error(`  ❌ Chart ${i + 1} rendering failed:`, error.message);
                }
            }

            currentRow += 2;
        }

        // Add Anatomical Diagrams
        if (includeAnatomicalDiagrams && this.anatomicalDiagrams.length > 0) {
            console.log('\n🫀 Adding Anatomical Diagrams to Excel...');
            
            // Section header
            const anatomicalHeaderCell = vizSheet.getCell(`A${currentRow}`);
            anatomicalHeaderCell.value = '🫀 ANATOMICAL DIAGRAMS';
            anatomicalHeaderCell.font = { bold: true, size: 14, color: { argb: 'FFE74C3C' } };
            anatomicalHeaderCell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FFFFE7E7' }
            };
            vizSheet.getRow(currentRow).height = 30;
            currentRow += 2;

            for (let i = 0; i < this.anatomicalDiagrams.length; i++) {
                const diagramConfig = this.anatomicalDiagrams[i];
                
                try {
                    // Render diagram to canvas
                    const diagramWidth = diagramConfig.options.width || 800;
                    const diagramHeight = diagramConfig.options.height || 700;
                    const diagramCanvas = createCanvas(diagramWidth, diagramHeight);
                    const diagramCtx = diagramCanvas.getContext('2d');

                    this.diagramRenderer.canvas = diagramCanvas;
                    this.diagramRenderer.ctx = diagramCtx;
                    
                    this.renderSpecificAnatomicalDiagram(diagramConfig.key, diagramConfig.options);

                    const diagramInfo = AnatomicalDiagramsRegistry.getDiagram(diagramConfig.key);

                    // Add to Excel
                    await addImageToExcel(
                        diagramCanvas,
                        `Diagram ${i + 1}: ${diagramConfig.title}`,
                        'anatomical',
                        i,
                        { Category: diagramInfo.category }
                    );

                } catch (error) {
                    console.error(`  ❌ Anatomical Diagram ${i + 1} rendering failed:`, error.message);
                }
            }

            currentRow += 2;
        }

        // Add Cross-Section Diagrams
        if (includeCrossSectionDiagrams && this.crossSectionDiagrams.length > 0) {
            console.log('\n🔬 Adding Cross-Section Diagrams to Excel...');
            
            // Section header
            const crossSectionHeaderCell = vizSheet.getCell(`A${currentRow}`);
            crossSectionHeaderCell.value = '🔬 CROSS-SECTION DIAGRAMS';
            crossSectionHeaderCell.font = { bold: true, size: 14, color: { argb: 'FF27AE60' } };
            crossSectionHeaderCell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FFE7F9EF' }
            };
            vizSheet.getRow(currentRow).height = 30;
            currentRow += 2;

            for (let i = 0; i < this.crossSectionDiagrams.length; i++) {
                const diagramConfig = this.crossSectionDiagrams[i];
                
                try {
                    // Render diagram to canvas
                    const diagramWidth = diagramConfig.options.width || 800;
                    const diagramHeight = diagramConfig.options.height || 600;
                    const diagramCanvas = createCanvas(diagramWidth, diagramHeight);
                    const diagramCtx = diagramCanvas.getContext('2d');

                    this.crossSectionRenderer.canvas = diagramCanvas;
                    this.crossSectionRenderer.ctx = diagramCtx;
                    
                    this.crossSectionRenderer.renderDiagram(
                        diagramConfig.key,
                        0,
                        0,
                        diagramWidth,
                        diagramHeight,
                        diagramConfig.options
                    );

                    const diagramInfo = CrossSectionDiagramsRegistry.getDiagram(diagramConfig.key);

                    // Add to Excel
                    await addImageToExcel(
                        diagramCanvas,
                        `Cross-Section ${i + 1}: ${diagramConfig.title}`,
                        'crossSection',
                        i,
                        { Category: diagramInfo.category }
                    );

                } catch (error) {
                    console.error(`  ❌ Cross-Section Diagram ${i + 1} rendering failed:`, error.message);
                }
            }

            currentRow += 2;
        }

        // Add Stereochemistry Diagrams
        if (includeStereochemistryDiagrams && this.stereochemistryDiagrams.length > 0) {
            console.log('\n🧪 Adding Stereochemistry Diagrams to Excel...');
            
            // Section header
            const stereochemHeaderCell = vizSheet.getCell(`A${currentRow}`);
            stereochemHeaderCell.value = '🧪 MOLECULAR STRUCTURES';
            stereochemHeaderCell.font = { bold: true, size: 14, color: { argb: 'FF9B59B6' } };
            stereochemHeaderCell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FFF4ECF7' }
            };
            vizSheet.getRow(currentRow).height = 30;
            currentRow += 2;

            for (let i = 0; i < this.stereochemistryDiagrams.length; i++) {
                const diagramConfig = this.stereochemistryDiagrams[i];
                
                try {
                    // Render diagram to canvas
                    const diagramWidth = diagramConfig.options.width || 800;
                    const diagramHeight = diagramConfig.options.height || 600;
                    const diagramCanvas = createCanvas(diagramWidth, diagramHeight);
                    const diagramCtx = diagramCanvas.getContext('2d');

                    this.stereochemistryRenderer.canvas = diagramCanvas;
                    this.stereochemistryRenderer.ctx = diagramCtx;
                    
                    this.stereochemistryRenderer.renderDiagram(
                        diagramConfig.key,
                        0,
                        0,
                        diagramWidth,
                        diagramHeight,
                        diagramConfig.options
                    );

                    const diagramInfo = StereochemistryDiagramsRegistry.getDiagram(diagramConfig.key);

                    // Add to Excel with molecular info
                    await addImageToExcel(
                        diagramCanvas,
                        `Molecule ${i + 1}: ${diagramConfig.title}`,
                        'stereochemistry',
                        i,
                        { 
                            Formula: diagramInfo.formula,
                            Geometry: diagramInfo.geometry.replace(/_/g, ' '),
                            'Bond Angles': diagramInfo.bondAngles.join('°, ') + '°'
                        }
                    );

                } catch (error) {
                    console.error(`  ❌ Stereochemistry Diagram ${i + 1} rendering failed:`, error.message);
                }
            }

            currentRow += 2;
        }

        vizSheet.columns = [{ width: 100 }];

        // Save workbook FIRST, then cleanup temp files
        console.log('\n💾 Saving Excel workbook...');
        await workbook.xlsx.writeFile(filename);
        console.log(`✓ Excel file saved: ${filename}\n`);

        // NOW cleanup temp files after Excel is saved
        console.log('🧹 Cleaning up temporary files...');
        tempFilesToCleanup.forEach(tempFile => {
            try {
                if (fs.existsSync(tempFile)) {
                    fs.unlinkSync(tempFile);
                    console.log(`  • Cleaned up: ${path.basename(tempFile)}`);
                }
            } catch (e) {
                console.warn(`  ⚠ Failed to delete temp file: ${tempFile}`);
            }
        });
    } else {
        // No visualizations - just save
        console.log('\n💾 Saving Excel workbook...');
        await workbook.xlsx.writeFile(filename);
        console.log(`✓ Excel file saved: ${filename}\n`);
    }

    return {
        success: true,
        filename,
        sheets: workbook.worksheets.length,
        rows: this.data.length,
        columns: this.headers.length,
        formulas: Object.keys(this.formulas).length,
        visualizations: {
            charts: includeCharts ? this.charts.length : 0,
            anatomicalDiagrams: includeAnatomicalDiagrams ? this.anatomicalDiagrams.length : 0,
            crossSectionDiagrams: includeCrossSectionDiagrams ? this.crossSectionDiagrams.length : 0,
            stereochemistryDiagrams: includeStereochemistryDiagrams ? this.stereochemistryDiagrams.length : 0,
            total: 
                (includeCharts ? this.charts.length : 0) +
                (includeAnatomicalDiagrams ? this.anatomicalDiagrams.length : 0) +
                (includeCrossSectionDiagrams ? this.crossSectionDiagrams.length : 0) +
                (includeStereochemistryDiagrams ? this.stereochemistryDiagrams.length : 0)
        }
    };
}

// ============================================================================
// UPDATED generateCombinedReport - All Visualization Types
// ============================================================================

generateCombinedReport() {
    const baseReport = this.generateReport();
    
    return {
        ...baseReport,
        anatomicalDiagrams: this.listAnatomicalDiagrams(),
        crossSectionDiagrams: this.listCrossSectionDiagrams(),
        stereochemistryDiagrams: this.listStereochemistryDiagrams(),
        statistics: {
            anatomical: this.getAnatomicalDiagramStatistics(),
            crossSection: this.getCrossSectionDiagramStatistics(),
            stereochemistry: this.getStereochemistryDiagramStatistics()
        },
        visualizations: {
            charts: this.charts.length,
            anatomicalDiagrams: this.anatomicalDiagrams.length,
            crossSectionDiagrams: this.crossSectionDiagrams.length,
            stereochemistryDiagrams: this.stereochemistryDiagrams.length,
            total: 
                this.charts.length + 
                this.anatomicalDiagrams.length +
                this.crossSectionDiagrams.length +
                this.stereochemistryDiagrams.length
        }
    };
}

// ============================================================================
// UPDATED generateReport - Complete Metadata
// ============================================================================

generateReport() {
    return {
        metadata: {
            sheetName: this.sheetName,
            created: this.createdDate,
            lastModified: this.lastModified,
            author: this.author,
            rowCount: this.data.length,
            columnCount: this.headers.length
        },
        data: {
            headers: this.headers,
            totalRows: this.data.length,
            totalCells: this.data.length * this.headers.length
        },
        formulas: {
            count: Object.keys(this.formulas).length,
            formulas: Object.entries(this.formulas).map(([cell, data]) => ({
                cell,
                formula: data.formula,
                formulaKey: data.formulaKey,
                timestamp: data.timestamp
            }))
        },
        calculations: {
            count: Object.keys(this.calculations).length
        },
        visualizations: {
            charts: {
                count: this.charts.length,
                types: [...new Set(this.charts.map(c => c.key))]
            },
            diagrams: {
                anatomical: {
                    count: this.anatomicalDiagrams.length,
                    categories: [...new Set(this.anatomicalDiagrams.map(d => d.category))]
                },
                crossSection: {
                    count: this.crossSectionDiagrams.length,
                    categories: [...new Set(this.crossSectionDiagrams.map(d => d.category))]
                },
                stereochemistry: {
                    count: this.stereochemistryDiagrams.length,
                    formulas: [...new Set(this.stereochemistryDiagrams.map(d => d.formula))],
                    geometries: [...new Set(this.stereochemistryDiagrams.map(d => {
                        const diagram = StereochemistryDiagramsRegistry.getDiagram(d.key);
                        return diagram ? diagram.geometry : 'unknown';
                    }))]
                },
                total: 
                    this.anatomicalDiagrams.length +
                    this.crossSectionDiagrams.length +
                    this.stereochemistryDiagrams.length
            }
        },
        history: {
            entries: this.history.length,
            recentActions: this.history.slice(-10)
        }
    };
}

// ============================================================================
// EXPORT CONVENIENCE METHODS
// ============================================================================

// Export with all visualizations
async exportCompleteWorkbook(baseFilename = 'complete_workbook', format = 'both') {
    const results = {
        png: null,
        excel: null
    };

    const exportOptions = {
        includeCharts: true,
        includeAnatomicalDiagrams: true,
        includeCrossSectionDiagrams: true,
        includeStereochemistryDiagrams: true
    };

    try {
        if (format === 'png' || format === 'both') {
            console.log('📊 Exporting complete workbook to PNG...');
            const pngFilename = `${baseFilename}.png`;
            this.exportToPNG(pngFilename, exportOptions);
            results.png = {
                success: true,
                filename: pngFilename,
                visualizations: this.getDiagramCounts()
            };
            console.log(`✓ PNG export complete: ${pngFilename}\n`);
        }

        if (format === 'excel' || format === 'both') {
            console.log('📊 Exporting complete workbook to Excel...');
            const excelFilename = `${baseFilename}.xlsx`;
            const excelResult = await this.exportToExcel(excelFilename, exportOptions);
            results.excel = excelResult;
        }

        return {
            success: true,
            results,
            summary: {
                format,
                charts: this.charts.length,
                anatomicalDiagrams: this.anatomicalDiagrams.length,
                crossSectionDiagrams: this.crossSectionDiagrams.length,
                stereochemistryDiagrams: this.stereochemistryDiagrams.length,
                totalVisualizations: this.getDiagramCounts().total
            }
        };

    } catch (error) {
        console.error('❌ Export failed:', error.message);
        return {
            success: false,
            error: error.message
        };
    }
}

// Export specific visualization types
async exportSelectedVisualizations(baseFilename, options = {}) {
    const {
        format = 'both',
        includeCharts = false,
        includeAnatomicalDiagrams = false,
        includeCrossSectionDiagrams = false,
        includeStereochemistryDiagrams = false,
        chartIndices = [],
        anatomicalIndices = [],
        crossSectionIndices = [],
        stereochemistryIndices = []
    } = options;

    const exportOptions = {
        includeCharts,
        includeAnatomicalDiagrams,
        includeCrossSectionDiagrams,
        includeStereochemistryDiagrams,
        chartIndices,
        anatomicalIndices,
        crossSectionIndices,
        stereochemistryIndices
    };

    const results = {
        png: null,
        excel: null
    };

    try {
        if (format === 'png' || format === 'both') {
            const pngFilename = `${baseFilename}.png`;
            this.exportToPNG(pngFilename, exportOptions);
            results.png = {
                success: true,
                filename: pngFilename
            };
        }

        if (format === 'excel' || format === 'both') {
            const excelFilename = `${baseFilename}.xlsx`;
            results.excel = await this.exportToExcel(excelFilename, exportOptions);
        }

        return {
            success: true,
            results
        };

    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}

// Quick export methods
async exportWithCharts(filename = 'workbook_with_charts') {
    return this.exportSelectedVisualizations(filename, {
        format: 'both',
        includeCharts: true
    });
}

async exportWithAnatomicalDiagrams(filename = 'workbook_with_anatomical') {
    return this.exportSelectedVisualizations(filename, {
        format: 'both',
        includeAnatomicalDiagrams: true
    });
}

async exportWithCrossSectionDiagrams(filename = 'workbook_with_crosssection') {
    return this.exportSelectedVisualizations(filename, {
        format: 'both',
        includeCrossSectionDiagrams: true
    });
}

async exportWithStereochemistryDiagrams(filename = 'workbook_with_molecules') {
    return this.exportSelectedVisualizations(filename, {
        format: 'both',
        includeStereochemistryDiagrams: true
    });
}

async exportWithAllDiagrams(filename = 'workbook_with_all_diagrams') {
    return this.exportSelectedVisualizations(filename, {
        format: 'both',
        includeAnatomicalDiagrams: true,
        includeCrossSectionDiagrams: true,
        includeStereochemistryDiagrams: true
    });
}

// ============================================================================
// VISUALIZATION SUMMARY METHODS
// ============================================================================

getVisualizationSummary() {
    return {
        charts: {
            count: this.charts.length,
            types: this.charts.map(c => ({
                title: c.title,
                type: c.key
            }))
        },
        anatomicalDiagrams: {
            count: this.anatomicalDiagrams.length,
            diagrams: this.anatomicalDiagrams.map(d => ({
                title: d.title,
                category: d.category
            }))
        },
        crossSectionDiagrams: {
            count: this.crossSectionDiagrams.length,
            diagrams: this.crossSectionDiagrams.map(d => ({
                title: d.title,
                category: d.category
            }))
        },
        stereochemistryDiagrams: {
            count: this.stereochemistryDiagrams.length,
            molecules: this.stereochemistryDiagrams.map(d => ({
                title: d.title,
                formula: d.formula
            }))
        },
        total: 
            this.charts.length + 
            this.anatomicalDiagrams.length +
            this.crossSectionDiagrams.length +
            this.stereochemistryDiagrams.length
    };
}

hasAnyVisualizations() {
    return (
        this.charts.length > 0 ||
        this.anatomicalDiagrams.length > 0 ||
        this.crossSectionDiagrams.length > 0 ||
        this.stereochemistryDiagrams.length > 0
    );
}

getVisualizationTypes() {
    const types = [];
    if (this.charts.length > 0) types.push('charts');
    if (this.anatomicalDiagrams.length > 0) types.push('anatomical');
    if (this.crossSectionDiagrams.length > 0) types.push('crossSection');
    if (this.stereochemistryDiagrams.length > 0) types.push('stereochemistry');
    return types;
}

// ============================================================================
// BATCH EXPORT METHODS
// ============================================================================

async exportAllVisualizationsSeparately(folderPath) {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }

    const results = {
        charts: [],
        anatomical: [],
        crossSection: [],
        stereochemistry: [],
        errors: []
    };

    console.log('\n📊 Exporting all visualizations separately...\n');

    // Export charts
    for (let i = 0; i < this.charts.length; i++) {
        try {
            const chart = this.charts[i];
            const filename = `${folderPath}/chart_${i + 1}_${chart.title.replace(/[^a-z0-9]/gi, '_')}.png`;
            
            const canvas = createCanvas(
                chart.options.width || 700,
                chart.options.height || 500
            );
            const ctx = canvas.getContext('2d');

            this.chartRenderer.renderChart(canvas, ctx, chart.key, chart.data, chart.options);

            const buffer = canvas.toBuffer('image/png');
            fs.writeFileSync(filename, buffer);

            results.charts.push({ success: true, filename, title: chart.title });
            console.log(`✓ Chart ${i + 1}: ${chart.title}`);
        } catch (error) {
            results.errors.push({ type: 'chart', index: i, error: error.message });
            console.error(`✗ Chart ${i + 1} failed: ${error.message}`);
        }
    }

    // Export anatomical diagrams
    for (let i = 0; i < this.anatomicalDiagrams.length; i++) {
        try {
            const diagram = this.anatomicalDiagrams[i];
            const filename = `${folderPath}/anatomical_${i + 1}_${diagram.title.replace(/[^a-z0-9]/gi, '_')}.png`;
            
            const canvas = createCanvas(
                diagram.options.width || 800,
                diagram.options.height || 700
            );
            const ctx = canvas.getContext('2d');

            this.diagramRenderer.canvas = canvas;
            this.diagramRenderer.ctx = ctx;
            this.renderSpecificAnatomicalDiagram(diagram.key, diagram.options);

            const buffer = canvas.toBuffer('image/png');
            fs.writeFileSync(filename, buffer);

            results.anatomical.push({ success: true, filename, title: diagram.title });
            console.log(`✓ Anatomical ${i + 1}: ${diagram.title}`);
        } catch (error) {
            results.errors.push({ type: 'anatomical', index: i, error: error.message });
            console.error(`✗ Anatomical ${i + 1} failed: ${error.message}`);
        }
    }

    // Export cross-section diagrams
    for (let i = 0; i < this.crossSectionDiagrams.length; i++) {
        try {
            const diagram = this.crossSectionDiagrams[i];
            const filename = `${folderPath}/crosssection_${i + 1}_${diagram.title.replace(/[^a-z0-9]/gi, '_')}.png`;
            
            const canvas = createCanvas(
                diagram.options.width || 800,
                diagram.options.height || 600
            );
            const ctx = canvas.getContext('2d');

            this.crossSectionRenderer.canvas = canvas;
            this.crossSectionRenderer.ctx = ctx;
            this.crossSectionRenderer.renderDiagram(
                diagram.key,
                0,
                0,
                diagram.options.width || 800,
                diagram.options.height || 600,
                diagram.options
            );

            const buffer = canvas.toBuffer('image/png');
            fs.writeFileSync(filename, buffer);

            results.crossSection.push({ success: true, filename, title: diagram.title });
            console.log(`✓ Cross-Section ${i + 1}: ${diagram.title}`);
        } catch (error) {
            results.errors.push({ type: 'crossSection', index: i, error: error.message });
            console.error(`✗ Cross-Section ${i + 1} failed: ${error.message}`);
        }
    }

    // Export stereochemistry diagrams
    for (let i = 0; i < this.stereochemistryDiagrams.length; i++) {
        try {
            const diagram = this.stereochemistryDiagrams[i];
            const filename = `${folderPath}/molecule_${i + 1}_${diagram.title.replace(/[^a-z0-9]/gi, '_')}.png`;
            
            const canvas = createCanvas(
                diagram.options.width || 800,
                diagram.options.height || 600
            );
            const ctx = canvas.getContext('2d');

            this.stereochemistryRenderer.canvas = canvas;
            this.stereochemistryRenderer.ctx = ctx;
            this.stereochemistryRenderer.renderDiagram(
                diagram.key,
                0,
                0,
                diagram.options.width || 800,
                diagram.options.height || 600,
                diagram.options
            );

            const buffer = canvas.toBuffer('image/png');
            fs.writeFileSync(filename, buffer);

            results.stereochemistry.push({ success: true, filename, title: diagram.title });
            console.log(`✓ Molecule ${i + 1}: ${diagram.title}`);
        } catch (error) {
            results.errors.push({ type: 'stereochemistry', index: i, error: error.message });
            console.error(`✗ Molecule ${i + 1} failed: ${error.message}`);
        }
    }

    console.log('\n✓ Export complete!\n');

    return {
        folder: folderPath,
        results,
        summary: {
            chartsExported: results.charts.length,
            anatomicalExported: results.anatomical.length,
            crossSectionExported: results.crossSection.length,
            stereochemistryExported: results.stereochemistry.length,
            totalExported: 
                results.charts.length + 
                results.anatomical.length +
                results.crossSection.length +
                results.stereochemistry.length,
            errors: results.errors.length
        }
    };
}

  

    generateFormulaGuide() {
        const guide = {
            title: 'Available Formula Actions',
            categories: {},
            totalFormulas: 0,
            suggestions: []
        };

        const categories = SpreadsheetFormulaRegistry.getAllCategories();

        categories.forEach(category => {
            const formulas = SpreadsheetFormulaRegistry.getFormulasByCategory(category);
            guide.categories[category] = Object.entries(formulas).map(([key, formula]) => ({
                key,
                name: formula.name,
                description: formula.description,
                example: formula.example,
                excelFormula: formula.excelFormula,
                parameters: formula.paramNames || []
            }));
            guide.totalFormulas += Object.keys(formulas).length;
        });

        if (this.data.length > 0) {
            const sampleRange = `A2:A${Math.min(this.data.length + 1, 11)}`;
            guide.suggestions = this.suggestFormulas(sampleRange);
        }

        return guide;
    }

    getFormulaHelp(formulaKey) {
        const formula = SpreadsheetFormulaRegistry.getFormula(formulaKey);
        if (!formula) {
            return { error: 'Formula not found' };
        }

        return {
            name: formula.name,
            category: formula.category,
            description: formula.description,
            excelFormula: formula.excelFormula,
            example: formula.example,
            parameters: formula.params.map((param, index) => ({
                name: param,
                description: formula.paramNames[index] || param,
                required: true
            })),
            usage: formula.usage || 'Apply this formula to calculate results',
            tips: this.generateFormulaTips(formula)
        };
    }

    generateFormulaTips(formula) {
        const tips = [];

        if (formula.params.includes('range')) {
            tips.push('Use cell ranges like A1:A10 to reference multiple cells');
            tips.push('You can reference entire columns like A:A');
        }

        if (formula.category === 'Financial & Economic') {
            tips.push('Interest rates should be entered as decimals (e.g., 0.05 for 5%)');
            tips.push('Ensure time periods match (monthly rate with monthly periods)');
        }

        if (formula.category === 'Budget & Business') {
            tips.push('Compare actual vs budget to track performance');
            tips.push('Use conditional formatting to highlight variances');
        }

        if (formula.excelFormula === 'IF') {
            tips.push('Conditions can use operators: >, <, >=, <=, =, <>');
            tips.push('Nest multiple IF statements for complex logic');
        }

        return tips;
    }

    validateFormulaParams(formulaKey, params) {
        const formula = SpreadsheetFormulaRegistry.getFormula(formulaKey);
        if (!formula) {
            return { valid: false, error: 'Formula not found' };
        }

        const validation = {
            valid: true,
            warnings: [],
            errors: []
        };

        if (params.length < formula.params.length) {
            validation.errors.push(`Expected ${formula.params.length} parameters, got ${params.length}`);
            validation.valid = false;
        }

        params.forEach((param, index) => {
            const paramType = formula.params[index];

            if (typeof param === 'string' && param.includes(':')) {
                const range = this.parseRangeReference(param);
                if (!range.start || !range.end) {
                    validation.errors.push(`Invalid range reference: ${param}`);
                    validation.valid = false;
                }
            }
            else if (typeof param === 'string' && /^[A-Z]+\d+$/.test(param)) {
                const cell = this.parseCellReference(param);
                if (!cell) {
                    validation.errors.push(`Invalid cell reference: ${param}`);
                    validation.valid = false;
                }
            }

            if (formula.category === 'Financial & Economic' && typeof param !== 'string') {
                if (isNaN(parseFloat(param))) {
                    validation.errors.push(`Parameter ${index + 1} must be numeric`);
                    validation.valid = false;
                }
            }
        });

        return validation;
    }

    createFormulaTemplate(formulaKey, description = '') {
        const formula = SpreadsheetFormulaRegistry.getFormula(formulaKey);
        if (!formula) {
            return null;
        }

        return {
            key: formulaKey,
            name: formula.name,
            description: description || formula.description,
            template: formula.example,
            parameters: formula.paramNames.map((name, index) => ({
                name,
                placeholder: `<${name}>`,
                example: this.getParameterExample(formula.params[index])
            })),
            instructions: `Replace placeholders with your cell references or values`,
            example: formula.example
        };
    }

    getParameterExample(paramType) {
        switch (paramType) {
            case 'range':
                return 'A1:A10';
            case 'number':
                return '100';
            case 'rate':
                return '0.05';
            case 'text':
                return '"Sample Text"';
            default:
                return 'value';
        }
    }

    
    countEmptyCells() {
        let count = 0;
        this.data.forEach(row => {
            row.forEach(cell => {
                if (cell === '' || cell === null || cell === undefined) {
                    count++;
                }
            });
        });
        return count;
    }

    calculateStatistics() {
        const stats = {};

        for (let col = 0; col < this.headers.length; col++) {
            const values = [];
            this.data.forEach(row => {
                if (row[col] !== undefined && !isNaN(parseFloat(row[col]))) {
                    values.push(parseFloat(row[col]));
                }
            });

            if (values.length > 0) {
                const sum = values.reduce((a, b) => a + b, 0);
                const avg = sum / values.length;
                const sorted = [...values].sort((a, b) => a - b);

                stats[this.headers[col]] = {
                    count: values.length,
                    sum,
                    average: avg,
                    min: Math.min(...values),
                    max: Math.max(...values),
                    median: sorted[Math.floor(sorted.length / 2)]
                };
            }
        }

        return stats;
    }
}

// ============================================================================
// EXPORT REGISTRIES AND CLASSES
// ============================================================================

export { 
    SpreadsheetFormulaRegistry,
    GraphingCalculator, 
    GraphingCalculatorGame,
    Theme, 
    ExcelChartsRegistry, 
    ChartCanvasRenderer, 
    AnatomicalDiagramsRegistry, 
    AnatomicalShapes,
    AnatomicalDiagramRenderer,
    StereochemistryDiagramsRegistry,
    StereochemistryDiagramRenderer,
    CrossSectionDiagramsRegistry,
    CrossSectionDiagramRenderer,
    CrossSectionShapes,
    AtomProperties,
    MolecularGeometry,
    EnhancedStatisticalWorkbook,
    StatisticalDistributions,
    DistributionRegistry
};
*/
