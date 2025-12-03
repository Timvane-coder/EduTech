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
// GEOMETRIC SHAPES REGISTRY - Comprehensive Shape Configuration System
// ============================================================================

class GeometricShapesRegistry {
    static shapes = {
        // ===== 2D SHAPES =====
        'triangle': {
            name: 'Triangle',
            category: '2D Shapes',
            description: 'Three-sided polygon with configurable angles and sides',
            dimensionality: '2D',
            configParameters: {
                required: ['angleA', 'angleB', 'angleC'],
                optional: ['sideA', 'sideB', 'sideC', 'baseLength', 'height'],
                style: ['fillColor', 'strokeColor', 'strokeWidth', 'showLabels', 'showAngles', 'showGrid']
            },
            validation: {
                angleSum: 180, // angles must sum to 180°
                positiveAngles: true,
                positiveSides: true
            },
            usage: 'Educational tool for teaching triangle properties, angle relationships, and trigonometry',
            examples: [
                'Right triangle: ∠A=90°, ∠B=45°, ∠C=45°',
                'Equilateral: ∠A=60°, ∠B=60°, ∠C=60°',
                'Isosceles: ∠A=70°, ∠B=55°, ∠C=55°'
            ],
            calculations: ['area', 'perimeter', 'altitudes', 'medians', 'angleSum', 'triangleType'],
            defaultOptions: {
                angleA: 60,
                angleB: 60,
                angleC: 60,
                baseLength: 100,
                fillColor: '#E3F2FD',
                strokeColor: '#1976D2',
                strokeWidth: 2,
                showLabels: true,
                showAngles: true,
                showGrid: false,
                showMeasurements: true
            }
        },

        'circle': {
            name: 'Circle',
            category: '2D Shapes',
            description: 'Perfect round shape with constant radius',
            dimensionality: '2D',
            configParameters: {
                required: ['radius'],
                optional: ['diameter', 'circumference', 'centerX', 'centerY'],
                style: ['fillColor', 'strokeColor', 'strokeWidth', 'showCenter', 'showRadius', 'showDiameter']
            },
            validation: {
                positiveRadius: true,
                diameterRadiusRelation: true // diameter = 2 * radius
            },
            usage: 'Understanding circular geometry, pi relationships, and radial measurements',
            examples: [
                'Small circle: radius=5 units',
                'Medium circle: diameter=20 units',
                'Large circle: circumference=31.416 units'
            ],
            calculations: ['area', 'circumference', 'diameter', 'radius', 'arcLength', 'sectorArea'],
            defaultOptions: {
                radius: 50,
                centerX: 0,
                centerY: 0,
                fillColor: '#FFF9C4',
                strokeColor: '#F57C00',
                strokeWidth: 2,
                showCenter: true,
                showRadius: true,
                showDiameter: false,
                showMeasurements: true
            }
        },

        'rectangle': {
            name: 'Rectangle',
            category: '2D Shapes',
            description: 'Four-sided polygon with opposite sides equal and all angles 90°',
            dimensionality: '2D',
            configParameters: {
                required: ['length', 'width'],
                optional: ['diagonal', 'aspectRatio'],
                style: ['fillColor', 'strokeColor', 'strokeWidth', 'showDiagonals', 'showLabels']
            },
            validation: {
                positiveLength: true,
                positiveWidth: true
            },
            usage: 'Teaching area, perimeter, and rectangular coordinate systems',
            examples: [
                'Square-like: length=10, width=10',
                'Wide: length=15, width=8',
                'Tall: length=6, width=12'
            ],
            calculations: ['area', 'perimeter', 'diagonal', 'aspectRatio'],
            defaultOptions: {
                length: 100,
                width: 60,
                fillColor: '#E8F5E9',
                strokeColor: '#388E3C',
                strokeWidth: 2,
                showDiagonals: false,
                showLabels: true,
                showMeasurements: true
            }
        },

        'square': {
            name: 'Square',
            category: '2D Shapes',
            description: 'Special rectangle with all sides equal',
            dimensionality: '2D',
            configParameters: {
                required: ['sideLength'],
                optional: ['diagonal', 'area', 'perimeter'],
                style: ['fillColor', 'strokeColor', 'strokeWidth', 'showDiagonals']
            },
            validation: {
                positiveSide: true
            },
            usage: 'Understanding perfect symmetry and equal-sided properties',
            examples: [
                'Small square: side=5',
                'Medium square: side=10',
                'Large square: diagonal=14.142'
            ],
            calculations: ['area', 'perimeter', 'diagonal', 'inradius', 'circumradius'],
            defaultOptions: {
                sideLength: 80,
                fillColor: '#FCE4EC',
                strokeColor: '#C2185B',
                strokeWidth: 2,
                showDiagonals: true,
                showLabels: true,
                showMeasurements: true
            }
        },

        'ellipse': {
            name: 'Ellipse',
            category: '2D Shapes',
            description: 'Oval shape with two focal points and configurable axes',
            dimensionality: '2D',
            configParameters: {
                required: ['majorAxis', 'minorAxis'],
                optional: ['eccentricity', 'focalDistance', 'centerX', 'centerY'],
                style: ['fillColor', 'strokeColor', 'strokeWidth', 'showAxes', 'showFoci']
            },
            validation: {
                majorGreaterThanMinor: true,
                positiveAxes: true
            },
            usage: 'Teaching conic sections, planetary orbits, and elliptical geometry',
            examples: [
                'Nearly circular: major=10, minor=9',
                'Elongated: major=15, minor=6',
                'Very flat: major=20, minor=4'
            ],
            calculations: ['area', 'perimeter', 'eccentricity', 'focalDistance', 'circumference'],
            defaultOptions: {
                majorAxis: 100,
                minorAxis: 60,
                centerX: 0,
                centerY: 0,
                fillColor: '#F3E5F5',
                strokeColor: '#7B1FA2',
                strokeWidth: 2,
                showAxes: true,
                showFoci: true,
                showMeasurements: true
            }
        },

        'polygon': {
            name: 'Regular Polygon',
            category: '2D Shapes',
            description: 'Multi-sided shape with equal sides and angles',
            dimensionality: '2D',
            configParameters: {
                required: ['sides', 'sideLength'],
                optional: ['radius', 'apothem', 'centerAngle'],
                style: ['fillColor', 'strokeColor', 'strokeWidth', 'showVertices', 'showCenter']
            },
            validation: {
                minimumSides: 3,
                positiveSideLength: true
            },
            usage: 'Understanding regular polygons, interior angles, and symmetry',
            examples: [
                'Pentagon: sides=5, length=10',
                'Hexagon: sides=6, length=8',
                'Octagon: sides=8, length=7'
            ],
            calculations: ['area', 'perimeter', 'interiorAngle', 'exteriorAngle', 'apothem', 'radius'],
            defaultOptions: {
                sides: 6,
                sideLength: 50,
                fillColor: '#FFF3E0',
                strokeColor: '#E65100',
                strokeWidth: 2,
                showVertices: true,
                showCenter: true,
                showMeasurements: true
            }
        },

        'trapezoid': {
            name: 'Trapezoid',
            category: '2D Shapes',
            description: 'Quadrilateral with one pair of parallel sides',
            dimensionality: '2D',
            configParameters: {
                required: ['base1', 'base2', 'height'],
                optional: ['leg1', 'leg2', 'angleA', 'angleB'],
                style: ['fillColor', 'strokeColor', 'strokeWidth', 'showHeight', 'showParallelMarks']
            },
            validation: {
                positiveBases: true,
                positiveHeight: true,
                positiveLegs: true
            },
            usage: 'Teaching trapezoid properties, area calculation, and parallel lines',
            examples: [
                'Isosceles: base1=12, base2=8, height=5',
                'Right: base1=10, base2=6, height=7',
                'General: base1=15, base2=9, height=6'
            ],
            calculations: ['area', 'perimeter', 'median', 'height'],
            defaultOptions: {
                base1: 100,
                base2: 60,
                height: 50,
                fillColor: '#E0F2F1',
                strokeColor: '#00796B',
                strokeWidth: 2,
                showHeight: true,
                showParallelMarks: true,
                showMeasurements: true
            }
        },

        'parallelogram': {
            name: 'Parallelogram',
            category: '2D Shapes',
            description: 'Quadrilateral with opposite sides parallel and equal',
            dimensionality: '2D',
            configParameters: {
                required: ['base', 'side', 'angle'],
                optional: ['height', 'diagonalA', 'diagonalB'],
                style: ['fillColor', 'strokeColor', 'strokeWidth', 'showHeight', 'showDiagonals']
            },
            validation: {
                positiveBase: true,
                positiveSide: true,
                angleRange: { min: 0, max: 180 }
            },
            usage: 'Understanding parallel sides, area with height, and angle relationships',
            examples: [
                'Acute: base=10, side=6, angle=60°',
                'Obtuse: base=12, side=7, angle=120°',
                'Near rectangle: base=10, side=8, angle=85°'
            ],
            calculations: ['area', 'perimeter', 'height', 'diagonalLengths'],
            defaultOptions: {
                base: 100,
                side: 60,
                angle: 60,
                fillColor: '#EFEBE9',
                strokeColor: '#5D4037',
                strokeWidth: 2,
                showHeight: true,
                showDiagonals: false,
                showMeasurements: true
            }
        },

        // ===== 3D SHAPES =====
        'sphere': {
            name: 'Sphere',
            category: '3D Shapes',
            description: 'Perfect 3D ball with constant radius from center',
            dimensionality: '3D',
            configParameters: {
                required: ['radius'],
                optional: ['diameter', 'surfaceArea', 'volume'],
                style: ['fillColor', 'strokeColor', 'strokeWidth', 'showGreatCircle', 'show3DEffect']
            },
            validation: {
                positiveRadius: true
            },
            usage: 'Teaching 3D geometry, volume, surface area, and spherical coordinates',
            examples: [
                'Small sphere: radius=5',
                'Earth-like: radius=6371 (km)',
                'Large sphere: diameter=20'
            ],
            calculations: ['volume', 'surfaceArea', 'diameter', 'radius'],
            defaultOptions: {
                radius: 50,
                fillColor: '#BBDEFB',
                strokeColor: '#1565C0',
                strokeWidth: 2,
                showGreatCircle: true,
                show3DEffect: true,
                showMeasurements: true
            }
        },

        'cube': {
            name: 'Cube',
            category: '3D Shapes',
            description: 'Six equal square faces, all edges equal length',
            dimensionality: '3D',
            configParameters: {
                required: ['edgeLength'],
                optional: ['volume', 'surfaceArea', 'spaceDiagonal'],
                style: ['fillColor', 'strokeColor', 'strokeWidth', 'showHiddenEdges', 'perspective']
            },
            validation: {
                positiveEdge: true
            },
            usage: 'Understanding perfect 3D symmetry, volume, and surface area',
            examples: [
                'Unit cube: edge=1',
                'Dice size: edge=6',
                'Rubiks cube: edge=57mm'
            ],
            calculations: ['volume', 'surfaceArea', 'spaceDiagonal', 'faceDiagonal'],
            defaultOptions: {
                edgeLength: 60,
                fillColor: '#C8E6C9',
                strokeColor: '#2E7D32',
                strokeWidth: 2,
                showHiddenEdges: true,
                perspective: 'isometric',
                showMeasurements: true
            }
        },

        'cylinder': {
            name: 'Cylinder',
            category: '3D Shapes',
            description: 'Circular bases with straight sides',
            dimensionality: '3D',
            configParameters: {
                required: ['radius', 'height'],
                optional: ['volume', 'surfaceArea', 'lateralArea'],
                style: ['fillColor', 'strokeColor', 'strokeWidth', 'showBases', 'show3DEffect']
            },
            validation: {
                positiveRadius: true,
                positiveHeight: true
            },
            usage: 'Teaching cylindrical volumes, surface area, and real-world applications',
            examples: [
                'Can: radius=3, height=12',
                'Pipe: radius=5, height=20',
                'Tank: radius=10, height=15'
            ],
            calculations: ['volume', 'surfaceArea', 'lateralArea', 'baseArea'],
            defaultOptions: {
                radius: 40,
                height: 80,
                fillColor: '#FFECB3',
                strokeColor: '#F57F17',
                strokeWidth: 2,
                showBases: true,
                show3DEffect: true,
                showMeasurements: true
            }
        },

        'cone': {
            name: 'Cone',
            category: '3D Shapes',
            description: 'Circular base tapering to a point',
            dimensionality: '3D',
            configParameters: {
                required: ['radius', 'height'],
                optional: ['slantHeight', 'volume', 'surfaceArea'],
                style: ['fillColor', 'strokeColor', 'strokeWidth', 'showBase', 'showSlantHeight']
            },
            validation: {
                positiveRadius: true,
                positiveHeight: true
            },
            usage: 'Understanding conical volumes, slant height, and pyramidal structures',
            examples: [
                'Ice cream cone: radius=3, height=10',
                'Traffic cone: radius=15, height=50',
                'Funnel: radius=8, height=12'
            ],
            calculations: ['volume', 'surfaceArea', 'lateralArea', 'slantHeight'],
            defaultOptions: {
                radius: 50,
                height: 100,
                fillColor: '#F8BBD0',
                strokeColor: '#C2185B',
                strokeWidth: 2,
                showBase: true,
                showSlantHeight: true,
                showMeasurements: true
            }
        },

        'pyramid': {
            name: 'Pyramid',
            category: '3D Shapes',
            description: 'Polygonal base with triangular faces meeting at apex',
            dimensionality: '3D',
            configParameters: {
                required: ['baseType', 'baseLength', 'height'],
                optional: ['slantHeight', 'volume', 'surfaceArea', 'apexAngle'],
                style: ['fillColor', 'strokeColor', 'strokeWidth', 'showBase', 'showHiddenEdges']
            },
            validation: {
                positiveBase: true,
                positiveHeight: true,
                validBaseType: ['triangle', 'square', 'pentagon', 'hexagon']
            },
            usage: 'Teaching pyramid geometry, Egyptian pyramids, and 3D structures',
            examples: [
                'Square pyramid: base=10, height=12',
                'Triangular: base=8, height=10',
                'Hexagonal: base=6, height=15'
            ],
            calculations: ['volume', 'surfaceArea', 'lateralArea', 'slantHeight', 'baseArea'],
            defaultOptions: {
                baseType: 'square',
                baseLength: 80,
                height: 100,
                fillColor: '#FFF9C4',
                strokeColor: '#F57F17',
                strokeWidth: 2,
                showBase: true,
                showHiddenEdges: true,
                showMeasurements: true
            }
        },

        'prism': {
            name: 'Prism',
            category: '3D Shapes',
            description: 'Two parallel polygonal bases with rectangular faces',
            dimensionality: '3D',
            configParameters: {
                required: ['baseType', 'baseLength', 'height'],
                optional: ['volume', 'surfaceArea', 'lateralArea'],
                style: ['fillColor', 'strokeColor', 'strokeWidth', 'showBases', 'showHiddenEdges']
            },
            validation: {
                positiveBase: true,
                positiveHeight: true,
                validBaseType: ['triangle', 'square', 'pentagon', 'hexagon']
            },
            usage: 'Understanding prisms, volume calculation, and cross-sections',
            examples: [
                'Triangular prism: base=8, height=12',
                'Rectangular prism: base=10, height=15',
                'Hexagonal prism: base=6, height=10'
            ],
            calculations: ['volume', 'surfaceArea', 'lateralArea', 'baseArea'],
            defaultOptions: {
                baseType: 'triangle',
                baseLength: 60,
                height: 100,
                fillColor: '#E1F5FE',
                strokeColor: '#0277BD',
                strokeWidth: 2,
                showBases: true,
                showHiddenEdges: true,
                showMeasurements: true
            }
        }
    };

    // Get shape configuration
    static getShape(shapeKey) {
        return this.shapes[shapeKey];
    }

    // Get all shapes
    static getAllShapes() {
        return Object.keys(this.shapes);
    }

    // Get shapes by category
    static getShapesByCategory(category) {
        return Object.entries(this.shapes)
            .filter(([_, shape]) => shape.category === category)
            .reduce((acc, [key, shape]) => {
                acc[key] = shape;
                return acc;
            }, {});
    }

    // Get shapes by dimensionality
    static getShapesByDimensionality(dimensionality) {
        return Object.entries(this.shapes)
            .filter(([_, shape]) => shape.dimensionality === dimensionality)
            .reduce((acc, [key, shape]) => {
                acc[key] = shape;
                return acc;
            }, {});
    }

    // Get all categories
    static getAllCategories() {
        return [...new Set(Object.values(this.shapes).map(s => s.category))];
    }

    // Search shapes
    static searchShapes(query) {
        const lowerQuery = query.toLowerCase();
        return Object.entries(this.shapes)
            .filter(([key, shape]) =>
                shape.name.toLowerCase().includes(lowerQuery) ||
                shape.description.toLowerCase().includes(lowerQuery) ||
                shape.category.toLowerCase().includes(lowerQuery) ||
                key.toLowerCase().includes(lowerQuery)
            )
            .reduce((acc, [key, shape]) => {
                acc[key] = shape;
                return acc;
            }, {});
    }

    // Validate shape configuration
    static validateShapeConfig(shapeKey, config) {
        const shape = this.getShape(shapeKey);
        if (!shape) {
            return { valid: false, errors: ['Shape not found'] };
        }

        const validation = {
            valid: true,
            errors: [],
            warnings: []
        };

        // Check required parameters
        const missingRequired = shape.configParameters.required.filter(
            param => config[param] === undefined || config[param] === null
        );
        if (missingRequired.length > 0) {
            validation.errors.push(`Missing required parameters: ${missingRequired.join(', ')}`);
            validation.valid = false;
        }

        // Perform specific validations
        if (shape.validation) {
            // Angle sum validation (for triangles)
            if (shape.validation.angleSum && config.angleA && config.angleB && config.angleC) {
                const sum = config.angleA + config.angleB + config.angleC;
                if (Math.abs(sum - shape.validation.angleSum) > 0.01) {
                    validation.errors.push(`Angles must sum to ${shape.validation.angleSum}° (got ${sum.toFixed(2)}°)`);
                    validation.valid = false;
                }
            }

            // Positive value validations
            if (shape.validation.positiveRadius && config.radius <= 0) {
                validation.errors.push('Radius must be positive');
                validation.valid = false;
            }

            if (shape.validation.positiveLength && config.length <= 0) {
                validation.errors.push('Length must be positive');
                validation.valid = false;
            }

            if (shape.validation.positiveWidth && config.width <= 0) {
                validation.errors.push('Width must be positive');
                validation.valid = false;
            }

            // Diameter-radius relationship
            if (shape.validation.diameterRadiusRelation && config.diameter && config.radius) {
                if (Math.abs(config.diameter - 2 * config.radius) > 0.01) {
                    validation.warnings.push('Diameter should equal 2 × radius');
                }
            }

            // Major-minor axis validation
            if (shape.validation.majorGreaterThanMinor && config.majorAxis <= config.minorAxis) {
                validation.errors.push('Major axis must be greater than minor axis');
                validation.valid = false;
            }

            // Minimum sides validation
            if (shape.validation.minimumSides && config.sides < shape.validation.minimumSides) {
                validation.errors.push(`Polygon must have at least ${shape.validation.minimumSides} sides`);
                validation.valid = false;
            }
        }

        return validation;
    }

    // Get shape statistics
    static getShapeStatistics() {
        const stats = {
            total: Object.keys(this.shapes).length,
            by2D: 0,
            by3D: 0,
            byCategory: {}
        };

        Object.values(this.shapes).forEach(shape => {
            if (shape.dimensionality === '2D') stats.by2D++;
            if (shape.dimensionality === '3D') stats.by3D++;

            if (!stats.byCategory[shape.category]) {
                stats.byCategory[shape.category] = 0;
            }
            stats.byCategory[shape.category]++;
        });

        return stats;
    }
}

// ============================================================================
// GEOMETRIC SHAPE RENDERER - Renders geometric shapes to canvas
// ============================================================================

class GeometricShapeRenderer {
    constructor(canvas = null, ctx = null) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.defaultFont = 'Arial, sans-serif';
    }

    // Main render method
    renderShape(shapeKey, x, y, width, height, config = {}) {
        const shape = GeometricShapesRegistry.getShape(shapeKey);
        if (!shape) {
            throw new Error(`Shape '${shapeKey}' not found`);
        }

        // Validate configuration
        const validation = GeometricShapesRegistry.validateShapeConfig(shapeKey, config);
        if (!validation.valid) {
            throw new Error(`Invalid configuration: ${validation.errors.join(', ')}`);
        }

        // Merge with defaults
        const mergedConfig = { ...shape.defaultOptions, ...config };

        // Route to appropriate renderer
        switch (shapeKey) {
            case 'triangle':
                return this.renderTriangle(x, y, width, height, mergedConfig);
            case 'circle':
                return this.renderCircle(x, y, width, height, mergedConfig);
            case 'rectangle':
                return this.renderRectangle(x, y, width, height, mergedConfig);
            case 'square':
                return this.renderSquare(x, y, width, height, mergedConfig);
            case 'ellipse':
                return this.renderEllipse(x, y, width, height, mergedConfig);
            case 'polygon':
                return this.renderPolygon(x, y, width, height, mergedConfig);
            case 'trapezoid':
                return this.renderTrapezoid(x, y, width, height, mergedConfig);
            case 'parallelogram':
                return this.renderParallelogram(x, y, width, height, mergedConfig);
            case 'sphere':
                return this.renderSphere(x, y, width, height, mergedConfig);
            case 'cube':
                return this.renderCube(x, y, width, height, mergedConfig);
            case 'cylinder':
                return this.renderCylinder(x, y, width, height, mergedConfig);
            case 'cone':
                return this.renderCone(x, y, width, height, mergedConfig);
            case 'pyramid':
                return this.renderPyramid(x, y, width, height, mergedConfig);
            case 'prism':
                return this.renderPrism(x, y, width, height, mergedConfig);
            default:
                throw new Error(`Renderer for shape '${shapeKey}' not implemented`);
        }
    }

    // Triangle renderer
    renderTriangle(x, y, width, height, config) {
        const ctx = this.ctx;
        const centerX = x + width / 2;
        const centerY = y + height / 2;
        const scale = Math.min(width, height) * 0.7;

        // Calculate triangle type
        const { angleA, angleB, angleC } = config;
        const triangleType = this.classifyTriangle(angleA, angleB, angleC);

        // Draw background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(x, y, width, height);

        // Title
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`Triangle - ${triangleType}`, centerX, y + 25);

        // Calculate vertices
        const vertices = this.calculateTriangleVertices(centerX, centerY, scale, angleA, angleB, angleC);

        // Draw grid if enabled
        if (config.showGrid) {
            this.drawGrid(ctx, x, y, width, height);
        }

        // Draw triangle
        ctx.beginPath();
        ctx.moveTo(vertices[0].x, vertices[0].y);
        ctx.lineTo(vertices[1].x, vertices[1].y);
        ctx.lineTo(vertices[2].x, vertices[2].y);
        ctx.closePath();

        ctx.fillStyle = config.fillColor;
        ctx.fill();
        ctx.strokeStyle = config.strokeColor;
        ctx.lineWidth = config.strokeWidth;
        ctx.stroke();

        // Show angles
        if (config.showAngles) {
            const angles = [
                { angle: angleA, vertex: vertices[0], label: 'A' },
                { angle: angleB, vertex: vertices[1], label: 'B' },
                { angle: angleC, vertex: vertices[2], label: 'C' }
            ];

            angles.forEach(({ angle, vertex, label }) => {
                ctx.fillStyle = '#D32F2F';
                ctx.font = 'bold 12px Arial';
                ctx.textAlign = 'center';
                
                // Offset label slightly from vertex
                const offsetX = vertex.x + (vertex.x - centerX) * 0.15;
                const offsetY = vertex.y + (vertex.y - centerY) * 0.15;
                
                ctx.fillText(`∠${label} = ${angle.toFixed(1)}°`, offsetX, offsetY);
            });
        }

        // Show labels
        if (config.showLabels) {
            ctx.fillStyle = '#1976D2';
            ctx.font = 'bold 14px Arial';
            
            ['A', 'B', 'C'].forEach((label, i) => {
                const vertex = vertices[i];
                const offsetX = vertex.x + (vertex.x - centerX) * 0.25;
                const offsetY = vertex.y + (vertex.y - centerY) * 0.25;
                ctx.fillText(label, offsetX, offsetY);
            });
        }

        // Show measurements
        if (config.showMeasurements) {
            const calculations = this.calculateTriangleProperties(angleA, angleB, angleC, config.baseLength || 100);
            
            ctx.fillStyle = '#424242';
            ctx.font = '11px Arial';
            ctx.textAlign = 'left';
            
            const measurements = [
                `Type: ${triangleType}`,
                `Angle Sum: ${(angleA + angleB + angleC).toFixed(1)}°`,
                `Base: ${calculations.baseLength.toFixed(2)} units`,
                `Area: ${calculations.area.toFixed(2)} sq units`,
                `Perimeter: ${calculations.perimeter.toFixed(2)} units`
            ];

            measurements.forEach((text, i) => {
                ctx.fillText(text, x + 10, y + height - 80 + (i * 15));
            });
        }
    }

    // Circle renderer
    renderCircle(x, y, width, height, config) {
        const ctx = this.ctx;
        const centerX = x + width / 2;
        const centerY = y + height / 2;
        const maxRadius = Math.min(width, height) * 0.35;
        const radius = Math.min(config.radius, maxRadius);

        // Background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(x, y, width, height);

        // Title
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Circle', centerX, y + 25);

        // Draw circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.fillStyle = config.fillColor;
        ctx.fill();
        ctx.strokeStyle = config.strokeColor;
        ctx.lineWidth = config.strokeWidth;
        ctx.stroke();

        // Show center point
        if (config.showCenter) {
            ctx.fillStyle = config.strokeColor;
            ctx.beginPath();
            ctx.arc(centerX, centerY, 3, 0, 2 * Math.PI);
            ctx.fill();
            
            ctx.font = '11px Arial';
            ctx.fillText('Center', centerX, centerY - 10);
        }

        // Show radius
        if (config.showRadius) {
            ctx.strokeStyle = '#D32F2F';
            ctx.lineWidth = 2;
            ctx.setLineDash([5, 5]);
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(centerX + radius, centerY);
            ctx.stroke();
            ctx.setLineDash([]);

            ctx.fillStyle = '#D32F2F';
            ctx.font = 'bold 11px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(`r = ${config.radius.toFixed(2)}`, centerX + radius / 2, centerY - 8);
        }

        // Show diameter
        if (config.showDiameter) {
            ctx.strokeStyle = '#1976D2';
            ctx.lineWidth = 2;
            ctx.setLineDash([3, 3]);
            ctx.beginPath();
            ctx.moveTo(centerX - radius, centerY);
            ctx.lineTo(centerX + radius, centerY);
            ctx.stroke();
            ctx.setLineDash([]);

            ctx.fillStyle = '#1976D2';
            ctx.font = 'bold 11px Arial';
            ctx.fillText(`d = ${(config.radius * 2).toFixed(2)}`, centerX, centerY + radius + 20);
        }

        // Show measurements
        if (config.showMeasurements) {
            const calculations = this.calculateCircleProperties(config.radius);
            
            ctx.fillStyle = '#424242';
            ctx.font = '11px Arial';
            ctx.textAlign = 'left';
            
            const measurements = [
                `Radius: ${config.radius.toFixed(3)} units`,
                `Diameter: ${calculations.diameter.toFixed(3)} units`,
                `Circumference: ${calculations.circumference.toFixed(3)} units`,
                `Area: ${calculations.area.toFixed(3)} sq units`,
                `π ≈ ${Math.PI.toFixed(6)}`
            ];

            measurements.forEach((text, i) => {
                ctx.fillText(text, x + 10, y + height - 80 + (i * 15));
            });
        }
    }

    // Rectangle renderer
    renderRectangle(x, y, width, height, config) {
        const ctx = this.ctx;
        const centerX = x + width / 2;
        const centerY = y + height / 2;
        
        // Scale to fit
        const scale = Math.min(width * 0.6 / config.length, height * 0.5 / config.width);
        const rectWidth = config.length * scale;
        const rectHeight = config.width * scale;
        const rectX = centerX - rectWidth / 2;
        const rectY = centerY - rectHeight / 2;

        // Background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(x, y, width, height);

        // Title
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Rectangle', centerX, y + 25);

        // Draw rectangle
        ctx.fillStyle = config.fillColor;
        ctx.fillRect(rectX, rectY, rectWidth, rectHeight);
        
        ctx.strokeStyle = config.strokeColor;
        ctx.lineWidth = config.strokeWidth;
        ctx.strokeRect(rectX, rectY, rectWidth, rectHeight);

        // Show diagonals
        if (config.showDiagonals) {
            ctx.strokeStyle = '#9C27B0';
            ctx.lineWidth = 1.5;
            ctx.setLineDash([5, 5]);
            
            ctx.beginPath();
            ctx.moveTo(rectX, rectY);
            ctx.lineTo(rectX + rectWidth, rectY + rectHeight);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.moveTo(rectX + rectWidth, rectY);
            ctx.lineTo(rectX, rectY + rectHeight);
            ctx.stroke();
            
            ctx.setLineDash([]);
        }

        // Show labels
        if (config.showLabels) {
            ctx.fillStyle = '#1976D2';
            ctx.font = 'bold 12px Arial';
            ctx.textAlign = 'center';
            
            // Length label (top)
            ctx.fillText(`Length: ${config.length} units`, centerX, rectY - 10);
            
            // Width label (right side)
            ctx.save();
            ctx.translate(rectX + rectWidth + 20, centerY);
            ctx.rotate(-Math.PI / 2);
            ctx.fillText(`Width: ${config.width} units`, 0, 0);
            ctx.restore();
        }

        // Show measurements
        if (config.showMeasurements) {
            const calculations = this.calculateRectangleProperties(config.length, config.width);
            
            ctx.fillStyle = '#424242';
            ctx.font = '11px Arial';
            ctx.textAlign = 'left';
            
            const measurements = [
                `Length: ${config.length.toFixed(2)} units`,
                `Width: ${config.width.toFixed(2)} units`,
                `Area: ${calculations.area.toFixed(2)} sq units`,
                `Perimeter: ${calculations.perimeter.toFixed(2)} units`,
                `Diagonal: ${calculations.diagonal.toFixed(2)} units`,
                `Aspect Ratio: ${calculations.aspectRatio.toFixed(3)}`
            ];

            measurements.forEach((text, i) => {
                ctx.fillText(text, x + 10, y + height - 95 + (i * 15));
            });
        }
    }

    // Square renderer
    renderSquare(x, y, width, height, config) {
        const ctx = this.ctx;
        const centerX = x + width / 2;
        const centerY = y + height / 2;
        
        // Scale to fit
        const maxSize = Math.min(width, height) * 0.6;
        const squareSize = Math.min(config.sideLength * 2, maxSize);
        const squareX = centerX - squareSize / 2;
        const squareY = centerY - squareSize / 2;

        // Background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(x, y, width, height);

        // Title
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Square', centerX, y + 25);

        // Draw square
        ctx.fillStyle = config.fillColor;
        ctx.fillRect(squareX, squareY, squareSize, squareSize);
        
        ctx.strokeStyle = config.strokeColor;
        ctx.lineWidth = config.strokeWidth;
        ctx.strokeRect(squareX, squareY, squareSize, squareSize);

        // Show diagonals
        if (config.showDiagonals) {
            ctx.strokeStyle = '#C2185B';
            ctx.lineWidth = 2;
            ctx.setLineDash([5, 5]);
            
            ctx.beginPath();
            ctx.moveTo(squareX, squareY);
            ctx.lineTo(squareX + squareSize, squareY + squareSize);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.moveTo(squareX + squareSize, squareY);
            ctx.lineTo(squareX, squareY + squareSize);
            ctx.stroke();
            
            ctx.setLineDash([]);
        }

        // Show labels
        if (config.showLabels) {
            ctx.fillStyle = '#C2185B';
            ctx.font = 'bold 12px Arial';
            ctx.textAlign = 'center';
            
            // Side label
            ctx.fillText(`Side: ${config.sideLength} units`, centerX, squareY - 10);
        }

        // Show measurements
        if (config.showMeasurements) {
            const calculations = this.calculateSquareProperties(config.sideLength);
            
            ctx.fillStyle = '#424242';
            ctx.font = '11px Arial';
            ctx.textAlign = 'left';
            
            const measurements = [
                `Side Length: ${config.sideLength.toFixed(2)} units`,
                `Area: ${calculations.area.toFixed(2)} sq units`,
                `Perimeter: ${calculations.perimeter.toFixed(2)} units`,
                `Diagonal: ${calculations.diagonal.toFixed(2)} units`,
                `Inradius: ${calculations.inradius.toFixed(2)} units`,
                `Circumradius: ${calculations.circumradius.toFixed(2)} units`
            ];

            measurements.forEach((text, i) => {
                ctx.fillText(text, x + 10, y + height - 95 + (i * 15));
            });
        }
    }

    // Ellipse renderer
    renderEllipse(x, y, width, height, config) {
        const ctx = this.ctx;
        const centerX = x + width / 2;
        const centerY = y + height / 2;
        
        // Scale to fit
        const scale = Math.min(
            width * 0.35 / config.majorAxis,
            height * 0.35 / config.minorAxis
        );
        const radiusX = config.majorAxis * scale;
        const radiusY = config.minorAxis * scale;

        // Background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(x, y, width, height);

        // Title
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Ellipse', centerX, y + 25);

        // Draw ellipse
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
        ctx.fillStyle = config.fillColor;
        ctx.fill();
        ctx.strokeStyle = config.strokeColor;
        ctx.lineWidth = config.strokeWidth;
        ctx.stroke();

        // Show axes
        if (config.showAxes) {
            ctx.strokeStyle = '#7B1FA2';
            ctx.lineWidth = 2;
            ctx.setLineDash([5, 5]);
            
            // Major axis
            ctx.beginPath();
            ctx.moveTo(centerX - radiusX, centerY);
            ctx.lineTo(centerX + radiusX, centerY);
            ctx.stroke();
            
            // Minor axis
            ctx.beginPath();
            ctx.moveTo(centerX, centerY - radiusY);
            ctx.lineTo(centerX, centerY + radiusY);
            ctx.stroke();
            
            ctx.setLineDash([]);

            // Labels
            ctx.fillStyle = '#7B1FA2';
            ctx.font = 'bold 11px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(`Major: ${config.majorAxis.toFixed(2)}`, centerX, centerY - radiusY - 10);
            ctx.fillText(`Minor: ${config.minorAxis.toFixed(2)}`, centerX + radiusX + 40, centerY);
        }

        // Show foci
        if (config.showFoci) {
            const calculations = this.calculateEllipseProperties(config.majorAxis, config.minorAxis);
            const focalDist = calculations.focalDistance * scale;

            ctx.fillStyle = '#D32F2F';
            
            // Left focus
            ctx.beginPath();
            ctx.arc(centerX - focalDist, centerY, 4, 0, 2 * Math.PI);
            ctx.fill();
            
            // Right focus
            ctx.beginPath();
            ctx.arc(centerX + focalDist, centerY, 4, 0, 2 * Math.PI);
            ctx.fill();

            ctx.font = '10px Arial';
            ctx.fillText('F₁', centerX - focalDist, centerY + 15);
            ctx.fillText('F₂', centerX + focalDist, centerY + 15);
        }

        // Show measurements
        if (config.showMeasurements) {
            const calculations = this.calculateEllipseProperties(config.majorAxis, config.minorAxis);
            
            ctx.fillStyle = '#424242';
            ctx.font = '11px Arial';
            ctx.textAlign = 'left';
            
            const measurements = [
                `Major Axis: ${config.majorAxis.toFixed(2)} units`,
                `Minor Axis: ${config.minorAxis.toFixed(2)} units`,
                `Area: ${calculations.area.toFixed(2)} sq units`,
                `Perimeter: ${calculations.perimeter.toFixed(2)} units`,
                `Eccentricity: ${calculations.eccentricity.toFixed(4)}`,
                `Focal Distance: ${calculations.focalDistance.toFixed(2)} units`
            ];

            measurements.forEach((text, i) => {
                ctx.fillText(text, x + 10, y + height - 95 + (i * 15));
            });
        }
    }

    // Polygon renderer
    renderPolygon(x, y, width, height, config) {
        const ctx = this.ctx;
        const centerX = x + width / 2;
        const centerY = y + height / 2;
        const radius = Math.min(width, height) * 0.35;

        // Background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(x, y, width, height);

        // Title
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        const polygonName = this.getPolygonName(config.sides);
        ctx.fillText(`${polygonName} (${config.sides} sides)`, centerX, y + 25);

        // Calculate vertices
        const vertices = [];
        for (let i = 0; i < config.sides; i++) {
            const angle = (2 * Math.PI * i / config.sides) - Math.PI / 2;
            vertices.push({
                x: centerX + radius * Math.cos(angle),
                y: centerY + radius * Math.sin(angle)
            });
        }

        // Draw polygon
        ctx.beginPath();
        ctx.moveTo(vertices[0].x, vertices[0].y);
        for (let i = 1; i < vertices.length; i++) {
            ctx.lineTo(vertices[i].x, vertices[i].y);
        }
        ctx.closePath();

        ctx.fillStyle = config.fillColor;
        ctx.fill();
        ctx.strokeStyle = config.strokeColor;
        ctx.lineWidth = config.strokeWidth;
        ctx.stroke();

        // Show vertices
        if (config.showVertices) {
            ctx.fillStyle = config.strokeColor;
            vertices.forEach((vertex, i) => {
                ctx.beginPath();
                ctx.arc(vertex.x, vertex.y, 4, 0, 2 * Math.PI);
                ctx.fill();

                // Vertex label
                ctx.font = '10px Arial';
                const offsetX = vertex.x + (vertex.x - centerX) * 0.15;
                const offsetY = vertex.y + (vertex.y - centerY) * 0.15;
                ctx.fillText(`V${i + 1}`, offsetX, offsetY);
            });
        }

        // Show center
        if (config.showCenter) {
            ctx.fillStyle = '#D32F2F';
            ctx.beginPath();
            ctx.arc(centerX, centerY, 4, 0, 2 * Math.PI);
            ctx.fill();
            ctx.font = '10px Arial';
            ctx.fillText('C', centerX + 8, centerY - 8);
        }

        // Show measurements
        if (config.showMeasurements) {
            const calculations = this.calculatePolygonProperties(config.sides, config.sideLength);
            
            ctx.fillStyle = '#424242';
            ctx.font = '11px Arial';
            ctx.textAlign = 'left';
            
            const measurements = [
                `Sides: ${config.sides}`,
                `Side Length: ${config.sideLength.toFixed(2)} units`,
                `Interior Angle: ${calculations.interiorAngle.toFixed(2)}°`,
                `Exterior Angle: ${calculations.exteriorAngle.toFixed(2)}°`,
                `Area: ${calculations.area.toFixed(2)} sq units`,
                `Perimeter: ${calculations.perimeter.toFixed(2)} units`,
                `Apothem: ${calculations.apothem.toFixed(2)} units`
            ];

            measurements.forEach((text, i) => {
                ctx.fillText(text, x + 10, y + height - 110 + (i * 15));
            });
        }
    }

    // Trapezoid renderer
    renderTrapezoid(x, y, width, height, config) {
        const ctx = this.ctx;
        const centerX = x + width / 2;
        const centerY = y + height / 2;

        // Scale to fit
        const scale = Math.min(width * 0.6 / config.base1, height * 0.5 / config.height);
        const base1Width = config.base1 * scale;
        const base2Width = config.base2 * scale;
        const trapHeight = config.height * scale;

        // Calculate trapezoid vertices
        const vertices = [
            { x: centerX - base1Width / 2, y: centerY + trapHeight / 2 },
            { x: centerX + base1Width / 2, y: centerY + trapHeight / 2 },
            { x: centerX + base2Width / 2, y: centerY - trapHeight / 2 },
            { x: centerX - base2Width / 2, y: centerY - trapHeight / 2 }
        ];

        // Background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(x, y, width, height);

        // Title
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Trapezoid', centerX, y + 25);

        // Draw trapezoid
        ctx.beginPath();
        ctx.moveTo(vertices[0].x, vertices[0].y);
        for (let i = 1; i < vertices.length; i++) {
            ctx.lineTo(vertices[i].x, vertices[i].y);
        }
        ctx.closePath();

        ctx.fillStyle = config.fillColor;
        ctx.fill();
        ctx.strokeStyle = config.strokeColor;
        ctx.lineWidth = config.strokeWidth;
        ctx.stroke();

        // Show height
        if (config.showHeight) {
            ctx.strokeStyle = '#D32F2F';
            ctx.lineWidth = 2;
            ctx.setLineDash([5, 5]);
            ctx.beginPath();
            ctx.moveTo(centerX, vertices[0].y);
            ctx.lineTo(centerX, vertices[3].y);
            ctx.stroke();
            ctx.setLineDash([]);

            ctx.fillStyle = '#D32F2F';
            ctx.font = 'bold 11px Arial';
            ctx.fillText(`h = ${config.height}`, centerX + 15, centerY);
        }

        // Show parallel marks
        if (config.showParallelMarks) {
            const markSize = 10;
            ctx.strokeStyle = '#1976D2';
            ctx.lineWidth = 2;

            // Base 1 marks
            const mid1 = { x: centerX, y: vertices[0].y };
            ctx.beginPath();
            ctx.moveTo(mid1.x - markSize, mid1.y - 5);
            ctx.lineTo(mid1.x - markSize, mid1.y + 5);
            ctx.moveTo(mid1.x + markSize, mid1.y - 5);
            ctx.lineTo(mid1.x + markSize, mid1.y + 5);
            ctx.stroke();

            // Base 2 marks
            const mid2 = { x: centerX, y: vertices[3].y };
            ctx.beginPath();
            ctx.moveTo(mid2.x - markSize, mid2.y - 5);
            ctx.lineTo(mid2.x - markSize, mid2.y + 5);
            ctx.moveTo(mid2.x + markSize, mid2.y - 5);
            ctx.lineTo(mid2.x + markSize, mid2.y + 5);
            ctx.stroke();
        }

        // Show measurements
        if (config.showMeasurements) {
            const calculations = this.calculateTrapezoidProperties(config.base1, config.base2, config.height);
            
            ctx.fillStyle = '#424242';
            ctx.font = '11px Arial';
            ctx.textAlign = 'left';
            
            const measurements = [
                `Base 1: ${config.base1.toFixed(2)} units`,
                `Base 2: ${config.base2.toFixed(2)} units`,
                `Height: ${config.height.toFixed(2)} units`,
                `Area: ${calculations.area.toFixed(2)} sq units`,
                `Median: ${calculations.median.toFixed(2)} units`,
                `Perimeter: ${calculations.perimeter.toFixed(2)} units`
            ];

            measurements.forEach((text, i) => {
                ctx.fillText(text, x + 10, y + height - 95 + (i * 15));
            });
        }
    }

    // Parallelogram renderer
    renderParallelogram(x, y, width, height, config) {
        const ctx = this.ctx;
        const centerX = x + width / 2;
        const centerY = y + height / 2;

        // Scale to fit
        const scale = Math.min(width * 0.6 / config.base, height * 0.5 / config.side);
        const baseWidth = config.base * scale;
        const sideLength = config.side * scale;
        const angleRad = (config.angle * Math.PI) / 180;
        const offset = sideLength * Math.cos(angleRad);
        const pHeight = sideLength * Math.sin(angleRad);

        // Calculate vertices
        const vertices = [
            { x: centerX - baseWidth / 2, y: centerY + pHeight / 2 },
            { x: centerX + baseWidth / 2, y: centerY + pHeight / 2 },
            { x: centerX + baseWidth / 2 + offset, y: centerY - pHeight / 2 },
            { x: centerX - baseWidth / 2 + offset, y: centerY - pHeight / 2 }
        ];

        // Background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(x, y, width, height);

        // Title
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Parallelogram', centerX, y + 25);

        // Draw parallelogram
        ctx.beginPath();
        ctx.moveTo(vertices[0].x, vertices[0].y);
        for (let i = 1; i < vertices.length; i++) {
            ctx.lineTo(vertices[i].x, vertices[i].y);
        }
        ctx.closePath();

        ctx.fillStyle = config.fillColor;
        ctx.fill();
        ctx.strokeStyle = config.strokeColor;
        ctx.lineWidth = config.strokeWidth;
        ctx.stroke();

        // Show height
        if (config.showHeight) {
            ctx.strokeStyle = '#D32F2F';
            ctx.lineWidth = 2;
            ctx.setLineDash([5, 5]);
            ctx.beginPath();
            ctx.moveTo(vertices[0].x + offset, vertices[0].y);
            ctx.lineTo(vertices[3].x, vertices[3].y);
            ctx.stroke();
            ctx.setLineDash([]);

            ctx.fillStyle = '#D32F2F';
            ctx.font = 'bold 11px Arial';
            ctx.fillText(`h = ${pHeight.toFixed(1)}`, vertices[0].x + offset + 15, centerY);
        }

        // Show diagonals
        if (config.showDiagonals) {
            ctx.strokeStyle = '#9C27B0';
            ctx.lineWidth = 1.5;
            ctx.setLineDash([5, 5]);
            
            ctx.beginPath();
            ctx.moveTo(vertices[0].x, vertices[0].y);
            ctx.lineTo(vertices[2].x, vertices[2].y);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.moveTo(vertices[1].x, vertices[1].y);
            ctx.lineTo(vertices[3].x, vertices[3].y);
            ctx.stroke();
            
            ctx.setLineDash([]);
        }

        // Show measurements
        if (config.showMeasurements) {
            const calculations = this.calculateParallelogramProperties(config.base, config.side, config.angle);
            
            ctx.fillStyle = '#424242';
            ctx.font = '11px Arial';
            ctx.textAlign = 'left';
            
            const measurements = [
                `Base: ${config.base.toFixed(2)} units`,
                `Side: ${config.side.toFixed(2)} units`,
                `Angle: ${config.angle.toFixed(1)}°`,
                `Height: ${calculations.height.toFixed(2)} units`,
                `Area: ${calculations.area.toFixed(2)} sq units`,
                `Perimeter: ${calculations.perimeter.toFixed(2)} units`
            ];

            measurements.forEach((text, i) => {
                ctx.fillText(text, x + 10, y + height - 95 + (i * 15));
            });
        }
    }

    // Sphere renderer (3D)
    renderSphere(x, y, width, height, config) {
        const ctx = this.ctx;
        const centerX = x + width / 2;
        const centerY = y + height / 2;
        const maxRadius = Math.min(width, height) * 0.35;
        const radius = Math.min(config.radius * 2, maxRadius);

        // Background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(x, y, width, height);

        // Title
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Sphere (3D)', centerX, y + 25);

        // Draw sphere with 3D effect
        if (config.show3DEffect) {
            const gradient = ctx.createRadialGradient(
                centerX - radius * 0.3, centerY - radius * 0.3, radius * 0.1,
                centerX, centerY, radius
            );
            gradient.addColorStop(0, '#ffffff');
            gradient.addColorStop(0.5, config.fillColor);
            gradient.addColorStop(1, this.darkenColor(config.fillColor, 40));
            
            ctx.fillStyle = gradient;
        } else {
            ctx.fillStyle = config.fillColor;
        }

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.fill();
        
        ctx.strokeStyle = config.strokeColor;
        ctx.lineWidth = config.strokeWidth;
        ctx.stroke();

        // Show great circle
        if (config.showGreatCircle) {
            ctx.strokeStyle = this.darkenColor(config.strokeColor, 20);
            ctx.lineWidth = 1.5;
            ctx.setLineDash([5, 5]);
            
            // Equator
            ctx.beginPath();
            ctx.ellipse(centerX, centerY, radius, radius * 0.3, 0, 0, 2 * Math.PI);
            ctx.stroke();
            
            ctx.setLineDash([]);
        }

        // Show measurements
        if (config.showMeasurements) {
            const calculations = this.calculateSphereProperties(config.radius);
            
            ctx.fillStyle = '#424242';
            ctx.font = '11px Arial';
            ctx.textAlign = 'left';
            
            const measurements = [
                `Radius: ${config.radius.toFixed(2)} units`,
                `Diameter: ${calculations.diameter.toFixed(2)} units`,
                `Surface Area: ${calculations.surfaceArea.toFixed(2)} sq units`,
                `Volume: ${calculations.volume.toFixed(2)} cubic units`,
                `4/3 π r³`
            ];

            measurements.forEach((text, i) => {
                ctx.fillText(text, x + 10, y + height - 80 + (i * 15));
            });
        }
    }

    // Cube renderer (3D isometric)
    renderCube(x, y, width, height, config) {
        const ctx = this.ctx;
        const centerX = x + width / 2;
        const centerY = y + height / 2;
        
        // Isometric projection
        const edge = Math.min(width, height) * 0.25;
        const angle30 = Math.PI / 6;
        
        // Calculate vertices
        const vertices = this.calculateCubeVertices(centerX, centerY, edge, angle30);

        // Background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(x, y, width, height);

        // Title
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Cube (3D)', centerX, y + 25);

        // Draw back faces (hidden) first
        if (config.showHiddenEdges) {
            ctx.strokeStyle = '#BDBDBD';
            ctx.lineWidth = 1;
            ctx.setLineDash([3, 3]);
            
            // Back face
            this.drawQuad(ctx, [vertices[4], vertices[5], vertices[6], vertices[7]], null);
            
            // Hidden edges
            ctx.beginPath();
            ctx.moveTo(vertices[0].x, vertices[0].y);
            ctx.lineTo(vertices[4].x, vertices[4].y);
            ctx.moveTo(vertices[3].x, vertices[3].y);
            ctx.lineTo(vertices[7].x, vertices[7].y);
            ctx.stroke();
            
            ctx.setLineDash([]);
        }

        // Draw visible faces
        // Top face
        const topGradient = ctx.createLinearGradient(
            vertices[4].x, vertices[4].y,
            vertices[7].x, vertices[7].y
        );
        topGradient.addColorStop(0, this.lightenColor(config.fillColor, 20));
        topGradient.addColorStop(1, config.fillColor);
        this.drawQuad(ctx, [vertices[4], vertices[5], vertices[1], vertices[0]], topGradient);

        // Right face
        const rightGradient = ctx.createLinearGradient(
            vertices[1].x, vertices[1].y,
            vertices[2].x, vertices[2].y
        );
        rightGradient.addColorStop(0, config.fillColor);
        rightGradient.addColorStop(1, this.darkenColor(config.fillColor, 20));
        this.drawQuad(ctx, [vertices[1], vertices[5], vertices[6], vertices[2]], rightGradient);

        // Front face
        const frontGradient = ctx.createLinearGradient(
            vertices[0].x, vertices[0].y,
            vertices[3].x, vertices[3].y
        );
        frontGradient.addColorStop(0, this.lightenColor(config.fillColor, 10));
        frontGradient.addColorStop(1, this.darkenColor(config.fillColor, 10));
        this.drawQuad(ctx, [vertices[0], vertices[1], vertices[2], vertices[3]], frontGradient);

        // Draw edges
        ctx.strokeStyle = config.strokeColor;
        ctx.lineWidth = config.strokeWidth;

        // Front face edges
        this.drawQuad(ctx, [vertices[0], vertices[1], vertices[2], vertices[3]], null);
        // Top edges
        ctx.beginPath();
        ctx.moveTo(vertices[0].x, vertices[0].y);
        ctx.lineTo(vertices[4].x, vertices[4].y);
        ctx.lineTo(vertices[5].x, vertices[5].y);
        ctx.lineTo(vertices[1].x, vertices[1].y);
        ctx.stroke();
        // Right edges
        ctx.beginPath();
        ctx.moveTo(vertices[1].x, vertices[1].y);
        ctx.lineTo(vertices[5].x, vertices[5].y);
        ctx.lineTo(vertices[6].x, vertices[6].y);
        ctx.lineTo(vertices[2].x, vertices[2].y);
        ctx.stroke();

        // Show measurements
        if (config.showMeasurements) {
            const calculations = this.calculateCubeProperties(config.edgeLength);
            
            ctx.fillStyle = '#424242';
            ctx.font = '11px Arial';
            ctx.textAlign = 'left';
            
            const measurements = [
                `Edge Length: ${config.edgeLength.toFixed(2)} units`,
                `Surface Area: ${calculations.surfaceArea.toFixed(2)} sq units`,
                `Volume: ${calculations.volume.toFixed(2)} cubic units`,
                `Face Diagonal: ${calculations.faceDiagonal.toFixed(2)} units`,
                `Space Diagonal: ${calculations.spaceDiagonal.toFixed(2)} units`
            ];

            measurements.forEach((text, i) => {
                ctx.fillText(text, x + 10, y + height - 80 + (i * 15));
            });
        }
    }

    // Cylinder renderer (3D)
    renderCylinder(x, y, width, height, config) {
        const ctx = this.ctx;
        const centerX = x + width / 2;
        const centerY = y + height / 2;

        // Scale to fit
        const scale = Math.min(width * 0.3 / config.radius, height * 0.4 / config.height);
        const radius = config.radius * scale;
        const cylHeight = config.height * scale;

        // Background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(x, y, width, height);

        // Title
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Cylinder (3D)', centerX, y + 25);

        const topY = centerY - cylHeight / 2;
        const bottomY = centerY + cylHeight / 2;
        const ellipseHeight = radius * 0.3; // Perspective effect

        // Draw cylinder body
        const bodyGradient = ctx.createLinearGradient(
            centerX - radius, centerY,
            centerX + radius, centerY
        );
        bodyGradient.addColorStop(0, this.darkenColor(config.fillColor, 30));
        bodyGradient.addColorStop(0.5, config.fillColor);
        bodyGradient.addColorStop(1, this.darkenColor(config.fillColor, 30));

        ctx.fillStyle = bodyGradient;
        ctx.fillRect(centerX - radius, topY, radius * 2, cylHeight);

        // Draw bottom ellipse (base)
        if (config.showBases) {
            ctx.fillStyle = this.darkenColor(config.fillColor, 40);
            ctx.beginPath();
            ctx.ellipse(centerX, bottomY, radius, ellipseHeight, 0, 0, 2 * Math.PI);
            ctx.fill();
            
            ctx.strokeStyle = config.strokeColor;
            ctx.lineWidth = config.strokeWidth;
            ctx.stroke();
        }

        // Draw top ellipse
        if (config.showBases) {
            const topGradient = ctx.createRadialGradient(
                centerX, topY, 0,
                centerX, topY, radius
            );
            topGradient.addColorStop(0, this.lightenColor(config.fillColor, 20));
            topGradient.addColorStop(1, config.fillColor);

            ctx.fillStyle = topGradient;
            ctx.beginPath();
            ctx.ellipse(centerX, topY, radius, ellipseHeight, 0, 0, 2 * Math.PI);
            ctx.fill();
            
            ctx.strokeStyle = config.strokeColor;
            ctx.lineWidth = config.strokeWidth;
            ctx.stroke();
        }

        // Draw side edges
        ctx.strokeStyle = config.strokeColor;
        ctx.lineWidth = config.strokeWidth;
        ctx.beginPath();
        ctx.moveTo(centerX - radius, topY);
        ctx.lineTo(centerX - radius, bottomY);
        ctx.moveTo(centerX + radius, topY);
        ctx.lineTo(centerX + radius, bottomY);
        ctx.stroke();

        // Show 3D effect with highlights
        if (config.show3DEffect) {
            ctx.strokeStyle = this.lightenColor(config.fillColor, 40);
            ctx.lineWidth = 2;
            ctx.setLineDash([10, 5]);
            ctx.beginPath();
            ctx.moveTo(centerX - radius * 0.7, topY);
            ctx.lineTo(centerX - radius * 0.7, bottomY);
            ctx.stroke();
            ctx.setLineDash([]);
        }

        // Show measurements
        if (config.showMeasurements) {
            const calculations = this.calculateCylinderProperties(config.radius, config.height);
            
            ctx.fillStyle = '#424242';
            ctx.font = '11px Arial';
            ctx.textAlign = 'left';
            
            const measurements = [
                `Radius: ${config.radius.toFixed(2)} units`,
                `Height: ${config.height.toFixed(2)} units`,
                `Base Area: ${calculations.baseArea.toFixed(2)} sq units`,
                `Lateral Area: ${calculations.lateralArea.toFixed(2)} sq units`,
                `Surface Area: ${calculations.surfaceArea.toFixed(2)} sq units`,
                `Volume: ${calculations.volume.toFixed(2)} cubic units`
            ];

            measurements.forEach((text, i) => {
                ctx.fillText(text, x + 10, y + height - 95 + (i * 15));
            });
        }
    }

    // Cone renderer (3D)
    renderCone(x, y, width, height, config) {
        const ctx = this.ctx;
        const centerX = x + width / 2;
        const centerY = y + height / 2;

        // Scale to fit
        const scale = Math.min(width * 0.3 / config.radius, height * 0.4 / config.height);
        const radius = config.radius * scale;
        const coneHeight = config.height * scale;

        // Background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(x, y, width, height);

        // Title
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Cone (3D)', centerX, y + 25);

        const apexY = centerY - coneHeight / 2;
        const baseY = centerY + coneHeight / 2;
        const ellipseHeight = radius * 0.3;

        // Draw cone body with gradient
        const gradient = ctx.createLinearGradient(
            centerX - radius, baseY,
            centerX + radius, baseY
        );
        gradient.addColorStop(0, this.darkenColor(config.fillColor, 30));
        gradient.addColorStop(0.5, config.fillColor);
        gradient.addColorStop(1, this.darkenColor(config.fillColor, 30));

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(centerX, apexY);
        ctx.lineTo(centerX - radius, baseY);
        ctx.ellipse(centerX, baseY, radius, ellipseHeight, 0, 0, Math.PI);
        ctx.lineTo(centerX, apexY);
        ctx.closePath();
        ctx.fill();

        // Draw base ellipse
        if (config.showBase) {
            ctx.fillStyle = this.darkenColor(config.fillColor, 40);
            ctx.beginPath();
            ctx.ellipse(centerX, baseY, radius, ellipseHeight, 0, 0, 2 * Math.PI);
            ctx.fill();
            
            ctx.strokeStyle = config.strokeColor;
            ctx.lineWidth = config.strokeWidth;
            ctx.stroke();
        }

        // Draw cone outline
        ctx.strokeStyle = config.strokeColor;
        ctx.lineWidth = config.strokeWidth;
        ctx.beginPath();
        ctx.moveTo(centerX, apexY);
        ctx.lineTo(centerX - radius, baseY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(centerX, apexY);
        ctx.lineTo(centerX + radius, baseY);
        ctx.stroke();

        // Show slant height
        if (config.showSlantHeight) {
            const calculations = this.calculateConeProperties(config.radius, config.height);
            const slantHeight = calculations.slantHeight * scale;

            ctx.strokeStyle = '#D32F2F';
            ctx.lineWidth = 2;
            ctx.setLineDash([5, 5]);
            ctx.beginPath();
            ctx.moveTo(centerX, apexY);
            ctx.lineTo(centerX + radius, baseY);
            ctx.stroke();
            ctx.setLineDash([]);

            ctx.fillStyle = '#D32F2F';
            ctx.font = 'bold 11px Arial';
            ctx.fillText(`l = ${calculations.slantHeight.toFixed(2)}`, centerX + radius / 2 + 10, (apexY + baseY) / 2);
        }

        // Show measurements
        if (config.showMeasurements) {
            const calculations = this.calculateConeProperties(config.radius, config.height);
            
            ctx.fillStyle = '#424242';
            ctx.font = '11px Arial';
            ctx.textAlign = 'left';
            
            const measurements = [
                `Radius: ${config.radius.toFixed(2)} units`,
                `Height: ${config.height.toFixed(2)} units`,
                `Slant Height: ${calculations.slantHeight.toFixed(2)} units`,
                `Base Area: ${calculations.baseArea.toFixed(2)} sq units`,
                `Lateral Area: ${calculations.lateralArea.toFixed(2)} sq units`,
                `Surface Area: ${calculations.surfaceArea.toFixed(2)} sq units`,
                `Volume: ${calculations.volume.toFixed(2)} cubic units`
            ];

            measurements.forEach((text, i) => {
                ctx.fillText(text, x + 10, y + height - 110 + (i * 15));
            });
        }
    }

    // Pyramid renderer (3D)
    renderPyramid(x, y, width, height, config) {
        const ctx = this.ctx;
        const centerX = x + width / 2;
        const centerY = y + height / 2;

        // Scale to fit
        const scale = Math.min(width * 0.3 / config.baseLength, height * 0.4 / config.height);
        const baseSize = config.baseLength * scale;
        const pyrHeight = config.height * scale;

        // Background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(x, y, width, height);

        // Title
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`${this.capitalize(config.baseType)} Pyramid (3D)`, centerX, y + 25);

        const apexY = centerY - pyrHeight / 2;
        const baseY = centerY + pyrHeight / 2;

        // Calculate base vertices based on base type
        const baseVertices = this.calculatePyramidBaseVertices(centerX, baseY, baseSize, config.baseType);
        const apex = { x: centerX, y: apexY };

        // Draw hidden edges
        if (config.showHiddenEdges) {
            ctx.strokeStyle = '#BDBDBD';
            ctx.lineWidth = 1;
            ctx.setLineDash([3, 3]);

            // Back edges to apex
            for (let i = Math.floor(baseVertices.length / 2); i < baseVertices.length; i++) {
                ctx.beginPath();
                ctx.moveTo(baseVertices[i].x, baseVertices[i].y);
                ctx.lineTo(apex.x, apex.y);
                ctx.stroke();
            }

            ctx.setLineDash([]);
        }

        // Draw base
        if (config.showBase) {
            ctx.fillStyle = this.darkenColor(config.fillColor, 40);
            ctx.beginPath();
            ctx.moveTo(baseVertices[0].x, baseVertices[0].y);
            for (let i = 1; i < baseVertices.length; i++) {
                ctx.lineTo(baseVertices[i].x, baseVertices[i].y);
            }
            ctx.closePath();
            ctx.fill();
            
            ctx.strokeStyle = config.strokeColor;
            ctx.lineWidth = config.strokeWidth;
            ctx.stroke();
        }

        // Draw visible faces
        for (let i = 0; i < Math.floor(baseVertices.length / 2) + 1; i++) {
            const v1 = baseVertices[i];
            const v2 = baseVertices[(i + 1) % baseVertices.length];

            const faceGradient = ctx.createLinearGradient(v1.x, v1.y, apex.x, apex.y);
            faceGradient.addColorStop(0, this.darkenColor(config.fillColor, 20));
            faceGradient.addColorStop(1, this.lightenColor(config.fillColor, 10));

            ctx.fillStyle = faceGradient;
            ctx.beginPath();
            ctx.moveTo(v1.x, v1.y);
            ctx.lineTo(v2.x, v2.y);
            ctx.lineTo(apex.x, apex.y);
            ctx.closePath();
            ctx.fill();

            // Draw edges
            ctx.strokeStyle = config.strokeColor;
            ctx.lineWidth = config.strokeWidth;
            ctx.stroke();
        }

        // Show measurements
        if (config.showMeasurements) {
            const calculations = this.calculatePyramidProperties(config.baseType, config.baseLength, config.height);
            
            ctx.fillStyle = '#424242';
            ctx.font = '11px Arial';
            ctx.textAlign = 'left';
            
            const measurements = [
                `Base Type: ${this.capitalize(config.baseType)}`,
                `Base Length: ${config.baseLength.toFixed(2)} units`,
                `Height: ${config.height.toFixed(2)} units`,
                `Base Area: ${calculations.baseArea.toFixed(2)} sq units`,
                `Lateral Area: ${calculations.lateralArea.toFixed(2)} sq units`,
                `Surface Area: ${calculations.surfaceArea.toFixed(2)} sq units`,
                `Volume: ${calculations.volume.toFixed(2)} cubic units`
            ];

            measurements.forEach((text, i) => {
                ctx.fillText(text, x + 10, y + height - 110 + (i * 15));
            });
        }
    }

    // Prism renderer (3D)
    renderPrism(x, y, width, height, config) {
        const ctx = this.ctx;
        const centerX = x + width / 2;
        const centerY = y + height / 2;

        // Scale to fit
        const scale = Math.min(width * 0.25 / config.baseLength, height * 0.4 / config.height);
        const baseSize = config.baseLength * scale;
        const prismHeight = config.height * scale;

        // Background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(x, y, width, height);

        // Title
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`${this.capitalize(config.baseType)} Prism (3D)`, centerX, y + 25);

        const topY = centerY - prismHeight / 2;
        const bottomY = centerY + prismHeight / 2;

        // Calculate base vertices
        const bottomVertices = this.calculatePrismBaseVertices(centerX, bottomY, baseSize, config.baseType);
        const topVertices = this.calculatePrismBaseVertices(centerX, topY, baseSize, config.baseType);

        // Draw hidden edges
        if (config.showHiddenEdges) {
            ctx.strokeStyle = '#BDBDBD';
            ctx.lineWidth = 1;
            ctx.setLineDash([3, 3]);

            // Back vertical edges
            for (let i = Math.floor(bottomVertices.length / 2); i < bottomVertices.length; i++) {
                ctx.beginPath();
                ctx.moveTo(bottomVertices[i].x, bottomVertices[i].y);
                ctx.lineTo(topVertices[i].x, topVertices[i].y);
                ctx.stroke();
            }

            ctx.setLineDash([]);
        }

        // Draw bottom base
        if (config.showBases) {
            ctx.fillStyle = this.darkenColor(config.fillColor, 40);
            ctx.beginPath();
            ctx.moveTo(bottomVertices[0].x, bottomVertices[0].y);
            for (let i = 1; i < bottomVertices.length; i++) {
                ctx.lineTo(bottomVertices[i].x, bottomVertices[i].y);
            }
            ctx.closePath();
            ctx.fill();
            
            ctx.strokeStyle = config.strokeColor;
            ctx.lineWidth = config.strokeWidth;
            ctx.stroke();
        }

        // Draw visible side faces
        for (let i = 0; i < Math.floor(bottomVertices.length / 2) + 1; i++) {
            const b1 = bottomVertices[i];
            const b2 = bottomVertices[(i + 1) % bottomVertices.length];
            const t1 = topVertices[i];
            const t2 = topVertices[(i + 1) % topVertices.length];

            const faceGradient = ctx.createLinearGradient(b1.x, b1.y, t1.x, t1.y);
            faceGradient.addColorStop(0, this.darkenColor(config.fillColor, 20));
            faceGradient.addColorStop(1, this.lightenColor(config.fillColor, 10));

            ctx.fillStyle = faceGradient;
            ctx.beginPath();
            ctx.moveTo(b1.x, b1.y);
            ctx.lineTo(b2.x, b2.y);
            ctx.lineTo(t2.x, t2.y);
            ctx.lineTo(t1.x, t1.y);
            ctx.closePath();
            ctx.fill();

            // Draw edges
            ctx.strokeStyle = config.strokeColor;
            ctx.lineWidth = config.strokeWidth;
            ctx.stroke();
        }

        // Draw top base
        if (config.showBases) {
            const topGradient = ctx.createLinearGradient(
                topVertices[0].x, topVertices[0].y,
                topVertices[Math.floor(topVertices.length / 2)].x, topVertices[Math.floor(topVertices.length / 2)].y
            );
            topGradient.addColorStop(0, this.lightenColor(config.fillColor, 20));
            topGradient.addColorStop(1, config.fillColor);

            ctx.fillStyle = topGradient;
            ctx.beginPath();
            ctx.moveTo(topVertices[0].x, topVertices[0].y);
            for (let i = 1; i < topVertices.length; i++) {
                ctx.lineTo(topVertices[i].x, topVertices[i].y);
            }
            ctx.closePath();
            ctx.fill();
            
            ctx.strokeStyle = config.strokeColor;
            ctx.lineWidth = config.strokeWidth;
            ctx.stroke();
        }

        // Draw visible vertical edges
        for (let i = 0; i <= Math.floor(bottomVertices.length / 2); i++) {
            ctx.strokeStyle = config.strokeColor;
            ctx.lineWidth = config.strokeWidth;
            ctx.beginPath();
            ctx.moveTo(bottomVertices[i].x, bottomVertices[i].y);
            ctx.lineTo(topVertices[i].x, topVertices[i].y);
            ctx.stroke();
        }

        // Show measurements
        if (config.showMeasurements) {
            const calculations = this.calculatePrismProperties(config.baseType, config.baseLength, config.height);
            
            ctx.fillStyle = '#424242';
            ctx.font = '11px Arial';
            ctx.textAlign = 'left';
            
            const measurements = [
                `Base Type: ${this.capitalize(config.baseType)}`,
                `Base Length: ${config.baseLength.toFixed(2)} units`,
                `Height: ${config.height.toFixed(2)} units`,
                `Base Area: ${calculations.baseArea.toFixed(2)} sq units`,
                `Lateral Area: ${calculations.lateralArea.toFixed(2)} sq units`,
                `Surface Area: ${calculations.surfaceArea.toFixed(2)} sq units`,
                `Volume: ${calculations.volume.toFixed(2)} cubic units`
            ];

            measurements.forEach((text, i) => {
                ctx.fillText(text, x + 10, y + height - 110 + (i * 15));
            });
        }
    }

    // ========== HELPER CALCULATION METHODS ==========

    calculateTriangleProperties(angleA, angleB, angleC, baseLength) {
        const angleARad = (angleA * Math.PI) / 180;
        const angleBRad = (angleB * Math.PI) / 180;
        const angleCRad = (angleC * Math.PI) / 180;

        // Using law of sines
        const sideA = baseLength;
        const sideB = (sideA * Math.sin(angleBRad)) / Math.sin(angleARad);
        const sideC = (sideA * Math.sin(angleCRad)) / Math.sin(angleARad);

        const s = (sideA + sideB + sideC) / 2; // semi-perimeter
        const area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC)); // Heron's formula

        return {
            sideA,
            sideB,
            sideC,
            baseLength: sideA,
            area,
            perimeter: sideA + sideB + sideC
        };
    }

    calculateCircleProperties(radius) {
        return {
            radius,
            diameter: 2 * radius,
            circumference: 2 * Math.PI * radius,
            area: Math.PI * radius * radius
        };
    }

    calculateRectangleProperties(length, width) {
        return {
            length,
            width,
            area: length * width,
            perimeter: 2 * (length + width),
            diagonal: Math.sqrt(length * length + width * width),
            aspectRatio: length / width
        };
    }

    calculateSquareProperties(sideLength) {
        return {
            sideLength,
            area: sideLength * sideLength,
            perimeter: 4 * sideLength,
            diagonal: sideLength * Math.sqrt(2),
            inradius: sideLength / 2,
            circumradius: (sideLength * Math.sqrt(2)) / 2
        };
    }

    calculateEllipseProperties(majorAxis, minorAxis) {
        const a = majorAxis / 2;
        const b = minorAxis / 2;
        const c = Math.sqrt(a * a - b * b);
        const eccentricity = c / a;

        // Ramanujan's approximation for perimeter
        const h = Math.pow((a - b), 2) / Math.pow((a + b), 2);
        const perimeter = Math.PI * (a + b) * (1 + (3 * h) / (10 + Math.sqrt(4 - 3 * h)));

        return {
            majorAxis,
            minorAxis,
            area: Math.PI * a * b,
            perimeter,
            eccentricity,
            focalDistance: c
        };
    }

    calculatePolygonProperties(sides, sideLength) {
        const interiorAngle = ((sides - 2) * 180) / sides;
        const exteriorAngle = 360 / sides;
        const apothem = sideLength / (2 * Math.tan(Math.PI / sides));
        const area = (sides * sideLength * apothem) / 2;
        const perimeter = sides * sideLength;

        return {
            sides,
            sideLength,
            interiorAngle,
            exteriorAngle,
            apothem,
            area,
            perimeter,
            radius: sideLength / (2 * Math.sin(Math.PI / sides))
        };
    }

    calculateTrapezoidProperties(base1, base2, height) {
        const area = ((base1 + base2) / 2) * height;
        const median = (base1 + base2) / 2;
        
        // Assuming isosceles trapezoid for perimeter calculation
        const legLength = Math.sqrt(height * height + Math.pow((base1 - base2) / 2, 2));
        const perimeter = base1 + base2 + 2 * legLength;

        return {
            base1,
            base2,
            height,
            area,
            median,
            perimeter
        };
    }

    calculateParallelogramProperties(base, side, angle) {
        const angleRad = (angle * Math.PI) / 180;
        const height = side * Math.sin(angleRad);
        const area = base * height;
        const perimeter = 2 * (base + side);

        return {
            base,
            side,
            angle,
            height,
            area,
            perimeter
        };
    }

    calculateSphereProperties(radius) {
        return {
            radius,
            diameter: 2 * radius,
            surfaceArea: 4 * Math.PI * radius * radius,
            volume: (4 / 3) * Math.PI * Math.pow(radius, 3)
        };
    }

    calculateCubeProperties(edgeLength) {
        return {
            edgeLength,
            surfaceArea: 6 * edgeLength * edgeLength,
            volume: Math.pow(edgeLength, 3),
            faceDiagonal: edgeLength * Math.sqrt(2),
            spaceDiagonal: edgeLength * Math.sqrt(3)
        };
    }

    calculateCylinderProperties(radius, height) {
        const baseArea = Math.PI * radius * radius;
        const lateralArea = 2 * Math.PI * radius * height;
        const surfaceArea = 2 * baseArea + lateralArea;
        const volume = baseArea * height;

        return {
            radius,
            height,
            baseArea,
            lateralArea,
            surfaceArea,
            volume
        };
    }

    calculateConeProperties(radius, height) {
        const slantHeight = Math.sqrt(radius * radius + height * height);
        const baseArea = Math.PI * radius * radius;
        const lateralArea = Math.PI * radius * slantHeight;
        const surfaceArea = baseArea + lateralArea;
        const volume = (1 / 3) * baseArea * height;

        return {
            radius,
            height,
            slantHeight,
            baseArea,
            lateralArea,
            surfaceArea,
            volume
        };
    }

    calculatePyramidProperties(baseType, baseLength, height) {
        const baseArea = this.calculateBaseArea(baseType, baseLength);
        const perimeter = this.calculateBasePerimeter(baseType, baseLength);
        const slantHeight = Math.sqrt(height * height + Math.pow(baseLength / 2, 2));
        const lateralArea = (perimeter * slantHeight) / 2;
        const surfaceArea = baseArea + lateralArea;
        const volume = (1 / 3) * baseArea * height;

        return {
            baseType,
            baseLength,
            height,
            baseArea,
            lateralArea,
            surfaceArea,
            volume,
            slantHeight
        };
    }

    calculatePrismProperties(baseType, baseLength, height) {
        const baseArea = this.calculateBaseArea(baseType, baseLength);
        const perimeter = this.calculateBasePerimeter(baseType, baseLength);
        const lateralArea = perimeter * height;
        const surfaceArea = 2 * baseArea + lateralArea;
        const volume = baseArea * height;

        return {
            baseType,
            baseLength,
            height,
            baseArea,
            lateralArea,
            surfaceArea,
            volume
        };
    }

    // ========== HELPER GEOMETRY METHODS ==========

    calculateTriangleVertices(centerX, centerY, scale, angleA, angleB, angleC) {
        // Place vertex A at bottom left, B at bottom right, C at top
        const baseLength = scale;
        const angleBRad = (angleB * Math.PI) / 180;
        const height = baseLength * Math.tan(angleBRad);

        return [
            { x: centerX - baseLength / 2, y: centerY + height / 3 }, // A
            { x: centerX + baseLength / 2, y: centerY + height / 3 }, // B
            { x: centerX, y: centerY - (2 * height) / 3 }  // C
        ];
    }

    classifyTriangle(angleA, angleB, angleC) {
        const angles = [angleA, angleB, angleC].sort((a, b) => a - b);
        
        // Check if angles are equal
        const tolerance = 0.5;
        const allEqual = Math.abs(angles[0] - angles[1]) < tolerance && 
                        Math.abs(angles[1] - angles[2]) < tolerance;
        const twoEqual = Math.abs(angles[0] - angles[1]) < tolerance || 
                        Math.abs(angles[1] - angles[2]) < tolerance;
        
        // Classify by angles
        if (allEqual) return 'Equilateral';
        if (angles[2] > 90) return twoEqual ? 'Isosceles Obtuse' : 'Obtuse';
        if (Math.abs(angles[2] - 90) < tolerance) return twoEqual ? 'Isosceles Right' : 'Right';
        if (twoEqual) return 'Isosceles Acute';
        return 'Scalene Acute';
    }

    getPolygonName(sides) {
        const names = {
            3: 'Triangle',
            4: 'Quadrilateral',
            5: 'Pentagon',
            6: 'Hexagon',
            7: 'Heptagon',
            8: 'Octagon',
            9: 'Nonagon',
            10: 'Decagon',
            11: 'Hendecagon',
            12: 'Dodecagon'
        };
        return names[sides] || `${sides}-gon`;
    }

    calculateCubeVertices(centerX, centerY, edge, angle30) {
        const dx = edge * Math.cos(angle30);
        const dy = edge * Math.sin(angle30);

        return [
            { x: centerX - dx, y: centerY + dy },           // 0: front-bottom-left
            { x: centerX + dx, y: centerY + dy },           // 1: front-bottom-right
            { x: centerX + dx, y: centerY + dy - edge },    // 2: front-top-right
            { x: centerX - dx, y: centerY + dy - edge },    // 3: front-top-left
            { x: centerX, y: centerY },                     // 4: back-bottom-left
            { x: centerX + 2 * dx, y: centerY },            // 5: back-bottom-right
            { x: centerX + 2 * dx, y: centerY - edge },     // 6: back-top-right
            { x: centerX, y: centerY - edge }               // 7: back-top-left
        ];
    }

    calculatePyramidBaseVertices(centerX, baseY, baseSize, baseType) {
        const vertices = [];
        let numSides;

        switch (baseType) {
            case 'triangle':
                numSides = 3;
                break;
            case 'square':
                numSides = 4;
                break;
            case 'pentagon':
                numSides = 5;
                break;
            case 'hexagon':
                numSides = 6;
                break;
            default:
                numSides = 4;
        }

        for (let i = 0; i < numSides; i++) {
            const angle = (2 * Math.PI * i / numSides) - Math.PI / 2;
            vertices.push({
                x: centerX + baseSize * Math.cos(angle),
                y: baseY + baseSize * Math.sin(angle) * 0.3 // perspective
            });
        }

        return vertices;
    }

    calculatePrismBaseVertices(centerX, baseY, baseSize, baseType) {
        return this.calculatePyramidBaseVertices(centerX, baseY, baseSize, baseType);
    }

    calculateBaseArea(baseType, baseLength) {
        switch (baseType) {
            case 'triangle':
                return (Math.sqrt(3) / 4) * baseLength * baseLength;
            case 'square':
                return baseLength * baseLength;
            case 'pentagon':
                return (1 / 4) * Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) * baseLength * baseLength;
            case 'hexagon':
                return (3 * Math.sqrt(3) / 2) * baseLength * baseLength;
            default:
                return baseLength * baseLength;
        }
    }

    calculateBasePerimeter(baseType, baseLength) {
        switch (baseType) {
            case 'triangle':
                return 3 * baseLength;
            case 'square':
                return 4 * baseLength;
            case 'pentagon':
                return 5 * baseLength;
            case 'hexagon':
                return 6 * baseLength;
            default:
                return 4 * baseLength;
        }
    }

    drawQuad(ctx, vertices, fillStyle) {
        ctx.beginPath();
        ctx.moveTo(vertices[0].x, vertices[0].y);
        for (let i = 1; i < vertices.length; i++) {
            ctx.lineTo(vertices[i].x, vertices[i].y);
        }
        ctx.closePath();

        if (fillStyle) {
            ctx.fillStyle = fillStyle;
            ctx.fill();
        }
        ctx.stroke();
    }

    drawGrid(ctx, x, y, width, height) {
        ctx.strokeStyle = '#E0E0E0';
        ctx.lineWidth = 0.5;
        const gridSize = 20;

        for (let gx = x; gx < x + width; gx += gridSize) {
            ctx.beginPath();
            ctx.moveTo(gx, y);
            ctx.lineTo(gx, y + height);
            ctx.stroke();
        }

        for (let gy = y; gy < y + height; gy += gridSize) {
            ctx.beginPath();
            ctx.moveTo(x, gy);
            ctx.lineTo(x + width, gy);
            ctx.stroke();
        }
    }

    lightenColor(color, percent) {
        const num = parseInt(color.replace('#', ''), 16);
        const amt = Math.round(2.55 * percent);
        const R = Math.min(255, (num >> 16) + amt);
        const G = Math.min(255, ((num >> 8) & 0x00FF) + amt);
        const B = Math.min(255, (num & 0x0000FF) + amt);
        return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
    }

    darkenColor(color, percent) {
        const num = parseInt(color.replace('#', ''), 16);
        const amt = Math.round(2.55 * percent);
        const R = Math.max(0, (num >> 16) - amt);
        const G = Math.max(0, ((num >> 8) & 0x00FF) - amt);
        const B = Math.max(0, (num & 0x0000FF) - amt);
        return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
    }

    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}
                

export {GeometricShapesRegistry,GeometricShapeRenderer};


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

*/
