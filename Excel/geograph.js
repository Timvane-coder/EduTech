



    



// ========== GEOMETRIC SHAPES MANAGEMENT METHODS ==========

/**
 * Get all available geometric shapes
 */


getAvailableGeometricShapes() {
    const shapes = {};
    const categories = ['2D Shapes', '3D Shapes'];

    categories.forEach(category => {
        shapes[category] = GeometricShapesRegistry.getShapesByCategory(category);
    });

    return shapes;
}

/**
 * Get geometric shapes by dimensionality
 */

getGeometricShapesByDimensionality(dimensionality) {
    return GeometricShapesRegistry.getShapesByDimensionality(dimensionality);
}

/**
 * Search geometric shapes
 */
searchGeometricShapes(query) {
    return GeometricShapesRegistry.searchShapes(query);
}

/**
 * Get geometric shape help
 */

getGeometricShapeHelp(shapeKey) {
    const shape = GeometricShapesRegistry.getShape(shapeKey);
    if (!shape) {
        return { error: 'Shape not found' };
    }

    return {
        name: shape.name,
        category: shape.category,
        description: shape.description,
        dimensionality: shape.dimensionality,
        usage: shape.usage,
        examples: shape.examples,
        configParameters: shape.configParameters,
        calculations: shape.calculations,
        defaultOptions: shape.defaultOptions
    };
}

/**
 * Add geometric shape to workbook
 */
addGeometricShape(config) {
    const {
        key,
        title = null,
        config: shapeConfig = {},
        options = {},
        filename = null
    } = config;

    // Validate shape exists
    const shape = GeometricShapesRegistry.getShape(key);
    if (!shape) {
        throw new Error(`Geometric shape '${key}' not found`);
    }

    // Merge configuration
    const mergedConfig = { ...shape.defaultOptions, ...shapeConfig };
    const mergedOptions = { ...options };

    // Validate configuration
    const validation = GeometricShapesRegistry.validateShapeConfig(key, mergedConfig);
    if (!validation.valid) {
        throw new Error(`Invalid configuration: ${validation.errors.join(', ')}`);
    }

    // Store shape
    const shapeObj = {
        id: `geometric_${this.geometricShapes.length + 1}`,
        key,
        title: title || `${shape.name} ${this.geometricShapes.length + 1}`,
        config: mergedConfig,
        options: mergedOptions,
        filename: filename || `${this.sheetName}_${key}_${Date.now()}.png`,
        createdAt: new Date(),
        category: shape.category,
        dimensionality: shape.dimensionality
    };

    this.geometricShapes.push(shapeObj);
    this.addToHistory(`Added geometric shape: ${shape.name}`);
    this.lastModified = new Date();

    return shapeObj;
}

/**
 * Update geometric shape
 */

updateGeometricShape(shapeIndex, updates) {
    if (shapeIndex < 0 || shapeIndex >= this.geometricShapes.length) {
        throw new Error(`Shape index ${shapeIndex} out of range`);
    }

    const shape = this.geometricShapes[shapeIndex];

    if (updates.title) shape.title = updates.title;
    if (updates.config) {
        shape.config = { ...shape.config, ...updates.config };
        
        // Validate updated configuration
        const validation = GeometricShapesRegistry.validateShapeConfig(shape.key, shape.config);
        if (!validation.valid) {
            throw new Error(`Invalid configuration: ${validation.errors.join(', ')}`);
        }
    }
    if (updates.options) {
        shape.options = { ...shape.options, ...updates.options };
    }

    this.addToHistory(`Updated geometric shape: ${shape.title}`);
    this.lastModified = new Date();

    return shape;
}

/**
 * Remove geometric shape
 */


removeGeometricShape(shapeIndex) {
    if (shapeIndex < 0 || shapeIndex >= this.geometricShapes.length) {
        throw new Error(`Shape index ${shapeIndex} out of range`);
    }

    const removed = this.geometricShapes.splice(shapeIndex, 1);
    this.addToHistory(`Removed geometric shape: ${removed[0].title}`);
    this.lastModified = new Date();

    return removed[0];
}

/**
 * Render geometric shape to PNG
 */


renderGeometricShapeToPNG(shapeIndex) {
    if (shapeIndex < 0 || shapeIndex >= this.geometricShapes.length) {
        throw new Error(`Shape index ${shapeIndex} out of range`);
    }

    const shapeConfig = this.geometricShapes[shapeIndex];
    const shapeInfo = GeometricShapesRegistry.getShape(shapeConfig.key);

    // Determine canvas size
    const width = shapeConfig.options.width || 800;
    const height = shapeConfig.options.height || 600;

    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // Set renderer context
    this.geometricRenderer.canvas = canvas;
    this.geometricRenderer.ctx = ctx;

    // Render shape
    this.geometricRenderer.renderShape(
        shapeConfig.key,
        0,
        0,
        width,
        height,
        shapeConfig.config
    );

    // Save to file
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(shapeConfig.filename, buffer);

    return {
        id: shapeConfig.id,
        filename: shapeConfig.filename,
        size: buffer.length,
        shape: shapeInfo.name
    };
}

/**
 * Render all geometric shapes
 */


renderAllGeometricShapes() {
    const results = [];

    this.geometricShapes.forEach((_, index) => {
        try {
            const result = this.renderGeometricShapeToPNG(index);
            results.push(result);
        } catch (error) {
            results.push({
                error: error.message,
                index,
                shape: this.geometricShapes[index].key
            });
        }
    });

    return results;
}

/**
 * List all geometric shapes in workbook
 */

listGeometricShapes() {
    return this.geometricShapes.map((shape, index) => ({
        index,
        id: shape.id,
        name: shape.title,
        type: shape.key,
        category: shape.category,
        dimensionality: shape.dimensionality,
        filename: shape.filename,
        created: shape.createdAt
    }));
}

/**
 * Get geometric shape statistics
 */

getGeometricShapeStatistics() {
    const stats = GeometricShapesRegistry.getShapeStatistics();
    
    return {
        ...stats,
        inWorkbook: this.geometricShapes.length,
        by2DInWorkbook: this.geometricShapes.filter(s => s.dimensionality === '2D').length,
        by3DInWorkbook: this.geometricShapes.filter(s => s.dimensionality === '3D').length,
        byCategoryInWorkbook: this.geometricShapes.reduce((acc, shape) => {
            acc[shape.category] = (acc[shape.category] || 0) + 1;
            return acc;
        }, {})
    };
}

/**
 * Suggest geometric shapes based on data
 */

suggestGeometricShapes() {
    const suggestions = [];

    // Basic educational suggestions
    suggestions.push({
        key: 'triangle',
        priority: 10,
        reason: 'Fundamental shape for teaching geometry basics'
    });

    suggestions.push({
        key: 'circle',
        priority: 9,
        reason: 'Essential for understanding π and circular measurements'
    });

    suggestions.push({
        key: 'rectangle',
        priority: 8,
        reason: 'Common shape for area and perimeter concepts'
    });

    // Check if user has 2D shapes, suggest 3D
    const has2D = this.geometricShapes.some(s => s.dimensionality === '2D');
    if (has2D) {
        suggestions.push({
            key: 'cube',
            priority: 7,
            reason: 'Progress from 2D to 3D understanding'
        });

        suggestions.push({
            key: 'sphere',
            priority: 7,
            reason: 'Understand 3D circular geometry'
        });
    }

    // Advanced shapes for comprehensive learning
    suggestions.push({
        key: 'polygon',
        priority: 6,
        reason: 'Explore regular polygons and their properties'
    });

    suggestions.push({
        key: 'cylinder',
        priority: 6,
        reason: 'Real-world 3D shape applications'
    });

    return suggestions.sort((a, b) => b.priority - a.priority);
}

/**
 * Add geometric shapes by category
 */

addGeometricShapesByCategory(category, options = {}) {
    const shapes = GeometricShapesRegistry.getShapesByCategory(category);
    const added = [];

    Object.keys(shapes).forEach(shapeKey => {
        try {
            const shape = this.addGeometricShape({
                key: shapeKey,
                config: {},
                options
            });
            added.push(shape);
        } catch (error) {
            added.push({
                key: shapeKey,
                error: error.message
            });
        }
    });

    return added;
}

/**
 * Export geometric shapes to folder
 */
exportGeometricShapesToFolder(folderPath) {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }

    const results = [];

    this.geometricShapes.forEach((shape, index) => {
        try {
            const originalFilename = shape.filename;
            shape.filename = `${folderPath}/geometric_${path.basename(shape.filename)}`;

            const result = this.renderGeometricShapeToPNG(index);
            results.push(result);

            shape.filename = originalFilename;
        } catch (error) {
            results.push({
                error: error.message,
                shape: shape.key,
                index
            });
        }
    });

    return {
        folder: folderPath,
        results,
        summary: {
            exported: results.filter(r => !r.error).length,
            errors: results.filter(r => r.error).length
        }
    };
}

/**
 * Generate geometric shapes guide
 */
generateGeometricShapesGuide() {
    const guide = {
        title: 'Available Geometric Shapes',
        generatedAt: new Date(),
        workbook: this.sheetName,
        shapes2D: {},
        shapes3D: {},
        totalAvailable: 0,
        inWorkbook: this.geometricShapes.length
    };

    // 2D Shapes
    const shapes2D = GeometricShapesRegistry.getShapesByDimensionality('2D');
    Object.entries(shapes2D).forEach(([key, shape]) => {
        guide.shapes2D[key] = {
            name: shape.name,
            description: shape.description,
            usage: shape.usage,
            examples: shape.examples,
            configParameters: shape.configParameters,
            calculations: shape.calculations
        };
    });
    guide.totalAvailable += Object.keys(shapes2D).length;

    // 3D Shapes
    const shapes3D = GeometricShapesRegistry.getShapesByDimensionality('3D');
    Object.entries(shapes3D).forEach(([key, shape]) => {
        guide.shapes3D[key] = {
            name: shape.name,
            description: shape.description,
            usage: shape.usage,
            examples: shape.examples,
            configParameters: shape.configParameters,
            calculations: shape.calculations
        };
    });
    guide.totalAvailable += Object.keys(shapes3D).length;

    guide.suggestions = this.suggestGeometricShapes();

    return guide;
}


/**
 * Generate comprehensive geometric shapes catalog
 */
generateGeometricShapesCatalog() {
    return {
        metadata: {
            generated: new Date().toISOString(),
            workbook: this.sheetName,
            author: this.author
        },
        shapes2D: {
            available: Object.keys(GeometricShapesRegistry.getShapesByDimensionality('2D')).length,
            inWorkbook: this.geometricShapes.filter(s => s.dimensionality === '2D').length,
            shapes: GeometricShapesRegistry.getShapesByDimensionality('2D')
        },
        shapes3D: {
            available: Object.keys(GeometricShapesRegistry.getShapesByDimensionality('3D')).length,
            inWorkbook: this.geometricShapes.filter(s => s.dimensionality === '3D').length,
            shapes: GeometricShapesRegistry.getShapesByDimensionality('3D')
        },
        totalShapes: {
            available: GeometricShapesRegistry.getAllShapes().length,
            inWorkbook: this.geometricShapes.length
        },
        suggestions: this.suggestGeometricShapes()
    };
}



// ============================================================================
// UNIFIED DIAGRAM MANAGEMENT (Anatomical + Cross-Section + Stereochemistry + Geometric)
// ============================================================================

// Get all available diagrams
getAllAvailableDiagrams() {
    return {
        anatomical: this.getAvailableAnatomicalDiagrams(),
        crossSection: this.getAvailableCrossSectionDiagrams(),
        stereochemistry: this.getAvailableStereochemistryDiagrams(),
        geometric: this.getAvailableGeometricShapes()
    };
}

// Search all diagrams
searchAllDiagrams(query) {
    return {
        anatomical: this.searchAnatomicalDiagrams(query),
        crossSection: this.searchCrossSectionDiagrams(query),
        stereochemistry: this.searchStereochemistryDiagrams(query),
        geometric: this.searchGeometricShapes(query)
    };
}

// Get all diagram statistics
getAllDiagramStatistics() {
    const anatomicalStats = this.getAnatomicalDiagramStatistics();
    const crossSectionStats = this.getCrossSectionDiagramStatistics();
    const stereochemStats = this.getStereochemistryDiagramStatistics();
    const geometricStats = this.getGeometricShapeStatistics();

    return {
        anatomical: anatomicalStats,
        crossSection: crossSectionStats,
        stereochemistry: stereochemStats,
        geometric: geometricStats,
        combined: {
            totalAvailable:
                anatomicalStats.totalDiagrams +
                crossSectionStats.totalAvailable +
                stereochemStats.totalAvailable +
                geometricStats.total,
            totalInWorkbook:
                this.anatomicalDiagrams.length +
                this.crossSectionDiagrams.length +
                this.stereochemistryDiagrams.length +
                this.geometricShapes.length
        }
    };
}

// List all diagrams by type
listAllDiagrams() {
    return {
        anatomical: this.listAnatomicalDiagrams(),
        crossSection: this.listCrossSectionDiagrams(),
        stereochemistry: this.listStereochemistryDiagrams(),
        geometric: this.listGeometricShapes(),
        total:
            this.anatomicalDiagrams.length +
            this.crossSectionDiagrams.length +
            this.stereochemistryDiagrams.length +
            this.geometricShapes.length
    };
}

// Get all diagram suggestions
getAllDiagramSuggestions() {
    return {
        anatomical: this.suggestAnatomicalDiagrams(),
        crossSection: this.suggestCrossSectionDiagrams(),
        stereochemistry: this.suggestStereochemistryDiagrams(),
        geometric: this.suggestGeometricShapes()
    };
}

// Render all diagrams (anatomical + cross-section + stereochemistry + geometric)
renderAllDiagrams() {
    const results = {
        anatomical: this.renderAllAnatomicalDiagrams(),
        crossSection: this.renderAllCrossSectionDiagrams(),
        stereochemistry: this.renderAllStereochemistryDiagrams(),
        geometric: this.renderAllGeometricShapes()
    };

    return {
        ...results,
        summary: {
            anatomicalRendered: results.anatomical.filter(r => !r.error).length,
            crossSectionRendered: results.crossSection.filter(r => !r.error).length,
            stereochemistryRendered: results.stereochemistry.filter(r => !r.error).length,
            geometricRendered: results.geometric.filter(r => !r.error).length,
            totalRendered:
                results.anatomical.filter(r => !r.error).length +
                results.crossSection.filter(r => !r.error).length +
                results.stereochemistry.filter(r => !r.error).length +
                results.geometric.filter(r => !r.error).length,
            totalErrors:
                results.anatomical.filter(r => r.error).length +
                results.crossSection.filter(r => r.error).length +
                results.stereochemistry.filter(r => r.error).length +
                results.geometric.filter(r => r.error).length
        }
    };
}

// Export all diagrams organized by type
exportAllDiagramsToFolder(folderPath, separateByType = true) {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }

    const results = {
        anatomical: [],
        crossSection: [],
        stereochemistry: [],
        geometric: []
    };

    if (separateByType) {
        // Create subfolders
        const anatomicalFolder = `${folderPath}/anatomical`;
        const crossSectionFolder = `${folderPath}/cross-section`;
        const stereochemFolder = `${folderPath}/stereochemistry`;
        const geometricFolder = `${folderPath}/geometric`;

        [anatomicalFolder, crossSectionFolder, stereochemFolder, geometricFolder].forEach(folder => {
            if (!fs.existsSync(folder)) {
                fs.mkdirSync(folder, { recursive: true });
            }
        });

        // Export anatomical diagrams
        const anatomicalExport = this.exportAnatomicalDiagramsToFolder(anatomicalFolder);
        results.anatomical = anatomicalExport.results;

        // Export cross-section diagrams
        const crossSectionExport = this.exportCrossSectionDiagramsToFolder(crossSectionFolder);
        results.crossSection = crossSectionExport.results;

        // Export stereochemistry diagrams
        const stereochemExport = this.exportStereochemistryDiagramsToFolder(stereochemFolder);
        results.stereochemistry = stereochemExport.results;

        // Export geometric shapes
        const geometricExport = this.exportGeometricShapesToFolder(geometricFolder);
        results.geometric = geometricExport.results;
    } else {
        // Export all to same folder
        const anatomicalExport = this.exportAnatomicalDiagramsToFolder(folderPath);
        results.anatomical = anatomicalExport.results;

        const crossSectionExport = this.exportCrossSectionDiagramsToFolder(folderPath);
        results.crossSection = crossSectionExport.results;

        const stereochemExport = this.exportStereochemistryDiagramsToFolder(folderPath);
        results.stereochemistry = stereochemExport.results;

        const geometricExport = this.exportGeometricShapesToFolder(folderPath);
        results.geometric = geometricExport.results;
    }

    return {
        folder: folderPath,
        separatedByType: separateByType,
        results,
        summary: {
            anatomicalExported: results.anatomical.filter(r => !r.error).length,
            crossSectionExported: results.crossSection.filter(r => !r.error).length,
            stereochemistryExported: results.stereochemistry.filter(r => !r.error).length,
            geometricExported: results.geometric.filter(r => !r.error).length,
            totalExported:
                results.anatomical.filter(r => !r.error).length +
                results.crossSection.filter(r => !r.error).length +
                results.stereochemistry.filter(r => !r.error).length +
                results.geometric.filter(r => !r.error).length,
            totalErrors:
                results.anatomical.filter(r => r.error).length +
                results.crossSection.filter(r => r.error).length +
                results.stereochemistry.filter(r => r.error).length +
                results.geometric.filter(r => r.error).length
        }
    };
}

// Batch add diagrams by category (all four types)
addDiagramsByCategory(category, diagramType = 'all', options = {}) {
    const results = {
        anatomical: [],
        crossSection: [],
        stereochemistry: [],
        geometric: []
    };

    if (diagramType === 'anatomical' || diagramType === 'all') {
        try {
            results.anatomical = this.addAnatomicalDiagramsByCategory(category, options);
        } catch (error) {
            results.anatomical = [{ error: error.message, category, type: 'anatomical' }];
        }
    }

    if (diagramType === 'crossSection' || diagramType === 'all') {
        try {
            results.crossSection = this.addCrossSectionDiagramsByCategory(category, options);
        } catch (error) {
            results.crossSection = [{ error: error.message, category, type: 'crossSection' }];
        }
    }

    if (diagramType === 'stereochemistry' || diagramType === 'all') {
        try {
            results.stereochemistry = this.addStereochemistryDiagramsByCategory(category, options);
        } catch (error) {
            results.stereochemistry = [{ error: error.message, category, type: 'stereochemistry' }];
        }
    }

    if (diagramType === 'geometric' || diagramType === 'all') {
        try {
            results.geometric = this.addGeometricShapesByCategory(category, options);
        } catch (error) {
            results.geometric = [{ error: error.message, category, type: 'geometric' }];
        }
    }

    return results;
}

// Generate comprehensive diagram guide
generateComprehensiveDiagramGuide() {
    const guide = {
        title: 'Complete Scientific & Geometric Diagram Reference',
        generatedAt: new Date(),
        workbook: this.sheetName,
        anatomical: {
            title: 'Anatomical Diagrams',
            categories: {},
            totalAvailable: 0
        },
        crossSection: {
            title: 'Cross-Section Diagrams',
            categories: {},
            totalAvailable: 0
        },
        stereochemistry: {
            title: 'Stereochemistry Diagrams',
            categories: {},
            totalAvailable: 0
        },
        geometric: {
            title: 'Geometric Shapes',
            categories: {},
            totalAvailable: 0
        },
        suggestions: this.getAllDiagramSuggestions(),
        inWorkbook: this.listAllDiagrams()
    };

    // Anatomical diagrams
    const anatomicalCategories = AnatomicalDiagramsRegistry.getAllCategories();
    anatomicalCategories.forEach(category => {
        const diagrams = AnatomicalDiagramsRegistry.getDiagramsByCategory(category);
        guide.anatomical.categories[category] = Object.entries(diagrams).map(([key, diagram]) => ({
            key,
            name: diagram.name,
            description: diagram.description,
            usage: diagram.usage,
            examples: diagram.examples
        }));
        guide.anatomical.totalAvailable += Object.keys(diagrams).length;
    });

    // Cross-section diagrams
    const crossSectionCategories = CrossSectionDiagramsRegistry.getAllCategories();
    crossSectionCategories.forEach(category => {
        const diagrams = CrossSectionDiagramsRegistry.getDiagramsByCategory(category);
        guide.crossSection.categories[category] = Object.entries(diagrams).map(([key, diagram]) => ({
            key,
            name: diagram.name,
            description: diagram.description,
            usage: diagram.usage,
            examples: diagram.examples
        }));
        guide.crossSection.totalAvailable += Object.keys(diagrams).length;
    });

    // Stereochemistry diagrams
    const stereochemCategories = StereochemistryDiagramsRegistry.getAllCategories();
    stereochemCategories.forEach(category => {
        const diagrams = StereochemistryDiagramsRegistry.getDiagramsByCategory(category);
        guide.stereochemistry.categories[category] = Object.entries(diagrams).map(([key, diagram]) => ({
            key,
            name: diagram.name,
            formula: diagram.formula,
            geometry: diagram.geometry,
            description: diagram.description,
            usage: diagram.usage,
            bondAngles: diagram.bondAngles
        }));
        guide.stereochemistry.totalAvailable += Object.keys(diagrams).length;
    });

    // Geometric shapes
    const geometricCategories = ['2D Shapes', '3D Shapes'];
    geometricCategories.forEach(category => {
        const shapes = GeometricShapesRegistry.getShapesByCategory(category);
        guide.geometric.categories[category] = Object.entries(shapes).map(([key, shape]) => ({
            key,
            name: shape.name,
            description: shape.description,
            dimensionality: shape.dimensionality,
            usage: shape.usage,
            examples: shape.examples,
            configParameters: shape.configParameters,
            calculations: shape.calculations
        }));
        guide.geometric.totalAvailable += Object.keys(shapes).length;
    });

    guide.summary = {
        totalAvailableDiagrams:
            guide.anatomical.totalAvailable +
            guide.crossSection.totalAvailable +
            guide.stereochemistry.totalAvailable +
            guide.geometric.totalAvailable,
        anatomicalInWorkbook: this.anatomicalDiagrams.length,
        crossSectionInWorkbook: this.crossSectionDiagrams.length,
        stereochemistryInWorkbook: this.stereochemistryDiagrams.length,
        geometricInWorkbook: this.geometricShapes.length,
        totalInWorkbook:
            this.anatomicalDiagrams.length +
            this.crossSectionDiagrams.length +
            this.stereochemistryDiagrams.length +
            this.geometricShapes.length
    };

    return guide;
}

// Generate unified report with all visualizations
generateUnifiedVisualizationReport() {
    const baseReport = this.generateReport();
    const diagramsList = this.listAllDiagrams();
    const stats = this.getAllDiagramStatistics();

    return {
        ...baseReport,
        visualizations: {
            charts: {
                count: this.charts.length,
                charts: this.charts.map((chart, index) => ({
                    index,
                    type: chart.type,
                    title: chart.title
                }))
            },
            anatomicalDiagrams: {
                count: diagramsList.anatomical.length,
                diagrams: diagramsList.anatomical
            },
            crossSectionDiagrams: {
                count: diagramsList.crossSection.length,
                diagrams: diagramsList.crossSection
            },
            stereochemistryDiagrams: {
                count: diagramsList.stereochemistry.length,
                diagrams: diagramsList.stereochemistry
            },
            geometricShapes: {
                count: diagramsList.geometric.length,
                shapes: diagramsList.geometric
            },
            summary: {
                totalCharts: this.charts.length,
                totalAnatomical: diagramsList.anatomical.length,
                totalCrossSection: diagramsList.crossSection.length,
                totalStereochemistry: diagramsList.stereochemistry.length,
                totalGeometric: diagramsList.geometric.length,
                totalDiagrams: diagramsList.total,
                totalVisualizations: this.charts.length + diagramsList.total
            }
        },
        statistics: stats,
        suggestions: this.getAllDiagramSuggestions()
    };
}

// Quick add: Suggest and add top diagrams based on data
quickAddSuggestedDiagrams(maxDiagrams = 5, diagramType = 'all') {
    const results = {
        anatomical: [],
        crossSection: [],
        stereochemistry: [],
        geometric: []
    };

    if (diagramType === 'anatomical' || diagramType === 'all') {
        const anatomicalSuggestions = this.suggestAnatomicalDiagrams().slice(0, maxDiagrams);
        anatomicalSuggestions.forEach(suggestion => {
            try {
                const diagram = this.addAnatomicalDiagram({ key: suggestion.key });
                results.anatomical.push({
                    ...diagram,
                    reason: suggestion.reason
                });
            } catch (error) {
                results.anatomical.push({
                    key: suggestion.key,
                    error: error.message
                });
            }
        });
    }

    if (diagramType === 'crossSection' || diagramType === 'all') {
        const crossSectionSuggestions = this.suggestCrossSectionDiagrams().slice(0, maxDiagrams);
        crossSectionSuggestions.forEach(suggestion => {
            try {
                const diagram = this.addCrossSectionDiagram({ key: suggestion.key });
                results.crossSection.push({
                    ...diagram,
                    reason: suggestion.reason
                });
            } catch (error) {
                results.crossSection.push({
                    key: suggestion.key,
                    error: error.message
                });
            }
        });
    }

    if (diagramType === 'stereochemistry' || diagramType === 'all') {
        const stereochemSuggestions = this.suggestStereochemistryDiagrams().slice(0, maxDiagrams);
        stereochemSuggestions.forEach(suggestion => {
            try {
                const diagram = this.addStereochemistryDiagram({ key: suggestion.key });
                results.stereochemistry.push({
                    ...diagram,
                    reason: suggestion.reason
                });
            } catch (error) {
                results.stereochemistry.push({
                    key: suggestion.key,
                    error: error.message
                });
            }
        });
    }

    if (diagramType === 'geometric' || diagramType === 'all') {
        const geometricSuggestions = this.suggestGeometricShapes().slice(0, maxDiagrams);
        geometricSuggestions.forEach(suggestion => {
            try {
                const shape = this.addGeometricShape({ key: suggestion.key });
                results.geometric.push({
                    ...shape,
                    reason: suggestion.reason
                });
            } catch (error) {
                results.geometric.push({
                    key: suggestion.key,
                    error: error.message
                });
            }
        });
    }

    return results;
}

// Get diagram by ID (searches all four types)
getDiagramById(diagramId) {
    const anatomical = this.anatomicalDiagrams.find(d => d.id === diagramId);
    if (anatomical) return { ...anatomical, type: 'anatomical' };

    const crossSection = this.crossSectionDiagrams.find(d => d.id === diagramId);
    if (crossSection) return { ...crossSection, type: 'crossSection' };

    const stereochemistry = this.stereochemistryDiagrams.find(d => d.id === diagramId);
    if (stereochemistry) return { ...stereochemistry, type: 'stereochemistry' };

    const geometric = this.geometricShapes.find(d => d.id === diagramId);
    if (geometric) return { ...geometric, type: 'geometric' };

    return null;
}

// Remove diagram by ID (searches all four types)
removeDiagramById(diagramId) {
    const anatomicalIndex = this.anatomicalDiagrams.findIndex(d => d.id === diagramId);
    if (anatomicalIndex !== -1) {
        return this.removeAnatomicalDiagram(anatomicalIndex);
    }

    const crossSectionIndex = this.crossSectionDiagrams.findIndex(d => d.id === diagramId);
    if (crossSectionIndex !== -1) {
        return this.removeCrossSectionDiagram(crossSectionIndex);
    }

    const stereochemIndex = this.stereochemistryDiagrams.findIndex(d => d.id === diagramId);
    if (stereochemIndex !== -1) {
        return this.removeStereochemistryDiagram(stereochemIndex);
    }

    const geometricIndex = this.geometricShapes.findIndex(d => d.id === diagramId);
    if (geometricIndex !== -1) {
        return this.removeGeometricShape(geometricIndex);
    }

    throw new Error(`Diagram with ID ${diagramId} not found`);
}

// Get diagram by identifier (searches all registries)
getDiagramByIdentifier(identifier) {
    // Try as key in stereochemistry first (for formula support)
    let diagram = StereochemistryDiagramsRegistry.getDiagram(identifier);
    if (diagram) return { type: 'stereochemistry', diagram };

    // Try as formula
    const byFormula = StereochemistryDiagramsRegistry.findByFormula(identifier);
    if (Object.keys(byFormula).length > 0) {
        return { type: 'stereochemistry', diagrams: byFormula };
    }

    // Try anatomical
    diagram = AnatomicalDiagramsRegistry.getDiagram(identifier);
    if (diagram) return { type: 'anatomical', diagram };

    // Try cross-section
    diagram = CrossSectionDiagramsRegistry.getDiagram(identifier);
    if (diagram) return { type: 'crossSection', diagram };

    // Try geometric
    diagram = GeometricShapesRegistry.getShape(identifier);
    if (diagram) return { type: 'geometric', diagram };

    return { error: 'Diagram not found' };
}

// Generate complete diagram catalog
generateDiagramCatalog() {
    const catalog = {
        metadata: {
            generated: new Date().toISOString(),
            workbook: this.sheetName,
            author: this.author
        },
        anatomical: {
            available: AnatomicalDiagramsRegistry.getAllDiagrams().length,
            inWorkbook: this.anatomicalDiagrams.length,
            categories: AnatomicalDiagramsRegistry.getAllCategories()
        },
        crossSection: {
            available: CrossSectionDiagramsRegistry.getAllDiagrams().length,
            inWorkbook: this.crossSectionDiagrams.length,
            categories: CrossSectionDiagramsRegistry.getAllCategories()
        },
        stereochemistry: {
            available: StereochemistryDiagramsRegistry.getAllDiagrams().length,
            inWorkbook: this.stereochemistryDiagrams.length,
            categories: StereochemistryDiagramsRegistry.getAllCategories(),
            formulas: Object.values(StereochemistryDiagramsRegistry.diagrams).map(d => d.formula)
        },
        geometric: {
            available: GeometricShapesRegistry.getAllShapes().length,
            inWorkbook: this.geometricShapes.length,
            by2D: Object.keys(GeometricShapesRegistry.getShapesByDimensionality('2D')).length,
            by3D: Object.keys(GeometricShapesRegistry.getShapesByDimensionality('3D')).length,
            categories: ['2D Shapes', '3D Shapes']
        },
        totalDiagrams: {
            available:
                AnatomicalDiagramsRegistry.getAllDiagrams().length +
                CrossSectionDiagramsRegistry.getAllDiagrams().length +
                StereochemistryDiagramsRegistry.getAllDiagrams().length +
                GeometricShapesRegistry.getAllShapes().length,
            inWorkbook:
                this.anatomicalDiagrams.length +
                this.crossSectionDiagrams.length +
                this.stereochemistryDiagrams.length +
                this.geometricShapes.length
        }
    };

    return catalog;
}



// Check if workbook has diagrams of specific type
hasDiagramsOfType(type) {
    const counts = this.getDiagramCounts();
    switch(type) {
        case 'anatomical':
            return counts.anatomical > 0;
        case 'crossSection':
            return counts.crossSection > 0;
        case 'stereochemistry':
            return counts.stereochemistry > 0;
        case 'geometric':
            return counts.geometric > 0;
        case 'any':
            return counts.total > 0;
        default:
            return false;
    }
}

// Get all diagrams of specific category across all types
getAllDiagramsByCategory(category) {
    const results = {
        anatomical: [],
        crossSection: [],
        stereochemistry: [],
        geometric: []
    };

    // Check anatomical
    const anatomicalInCategory = AnatomicalDiagramsRegistry.getDiagramsByCategory(category);
    results.anatomical = this.anatomicalDiagrams.filter(d =>
        Object.keys(anatomicalInCategory).includes(d.key)
    );

    // Check cross-section
    const crossSectionInCategory = CrossSectionDiagramsRegistry.getDiagramsByCategory(category);
    results.crossSection = this.crossSectionDiagrams.filter(d =>
        Object.keys(crossSectionInCategory).includes(d.key)
    );

    // Check stereochemistry
    const stereochemInCategory = StereochemistryDiagramsRegistry.getDiagramsByCategory(category);
    results.stereochemistry = this.stereochemistryDiagrams.filter(d =>
        Object.keys(stereochemInCategory).includes(d.key)
    );

    // Check geometric
    const geometricInCategory = GeometricShapesRegistry.getShapesByCategory(category);
    results.geometric = this.geometricShapes.filter(d =>
        Object.keys(geometricInCategory).includes(d.key)
    );

    return results;
}

// Export diagrams with comprehensive metadata
exportDiagramsWithFullMetadata(folderPath) {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }

    const results = {
        anatomical: [],
        crossSection: [],
        stereochemistry: [],
        geometric: []
    };

    const metadata = {
        exportDate: new Date().toISOString(),
        workbook: this.sheetName,
        author: this.author,
        diagrams: {
            anatomical: [],
            crossSection: [],
            stereochemistry: [],
            geometric: []
        }
    };

    // Export anatomical
    this.anatomicalDiagrams.forEach((diagram, index) => {
        try {
            const originalFilename = diagram.filename;
            diagram.filename = `${folderPath}/anatomical_${path.basename(diagram.filename)}`;

            const result = this.renderAnatomicalDiagramToPNG(index);
            results.anatomical.push(result);

            const diagramInfo = AnatomicalDiagramsRegistry.getDiagram(diagram.key);
            metadata.diagrams.anatomical.push({
                filename: path.basename(diagram.filename),
                name: diagramInfo.name,
                category: diagramInfo.category,
                description: diagramInfo.description
            });

            diagram.filename = originalFilename;
        } catch (error) {
            results.anatomical.push({ error: error.message, diagram: diagram.key });
        }
    });

    // Export cross-section
    this.crossSectionDiagrams.forEach((diagram, index) => {
        try {
            const originalFilename = diagram.filename;
            diagram.filename = `${folderPath}/crosssection_${path.basename(diagram.filename)}`;

            const result = this.renderCrossSectionDiagramToPNG(index);
            results.crossSection.push(result);

            const diagramInfo = CrossSectionDiagramsRegistry.getDiagram(diagram.key);
            metadata.diagrams.crossSection.push({
                filename: path.basename(diagram.filename),
                name: diagramInfo.name,
                category: diagramInfo.category,
                description: diagramInfo.description
            });

            diagram.filename = originalFilename;
        } catch (error) {
            results.crossSection.push({ error: error.message, diagram: diagram.key });
        }
    });

    // Export stereochemistry
    this.stereochemistryDiagrams.forEach((diagram, index) => {
        try {
            const originalFilename = diagram.filename;
            diagram.filename = `${folderPath}/molecule_${path.basename(diagram.filename)}`;

            const result = this.renderStereochemistryDiagramToPNG(index);
            results.stereochemistry.push(result);

            const diagramInfo = StereochemistryDiagramsRegistry.getDiagram(diagram.key);
            metadata.diagrams.stereochemistry.push({
                filename: path.basename(diagram.filename),
                name: diagramInfo.name,
                formula: diagramInfo.formula,
                geometry: diagramInfo.geometry,
                bondAngles: diagramInfo.bondAngles,
                category: diagramInfo.category
            });

            diagram.filename = originalFilename;
        } catch (error) {
            results.stereochemistry.push({ error: error.message, diagram: diagram.key });
        }
    });

    // Export geometric shapes
    this.geometricShapes.forEach((shape, index) => {
        try {
            const originalFilename = shape.filename;
            shape.filename = `${folderPath}/geometric_${path.basename(shape.filename)}`;

            const result = this.renderGeometricShapeToPNG(index);
            results.geometric.push(result);

            const shapeInfo = GeometricShapesRegistry.getShape(shape.key);
            metadata.diagrams.geometric.push({
                filename: path.basename(shape.filename),
                name: shapeInfo.name,
                type: shape.key,
                category: shapeInfo.category,
                dimensionality: shapeInfo.dimensionality,
                description: shapeInfo.description
            });

            shape.filename = originalFilename;
        } catch (error) {
            results.geometric.push({ error: error.message, shape: shape.key });
        }
    });

    // Write metadata JSON file
    const metadataPath = `${folderPath}/complete_metadata.json`;
    fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));

    return {
        folder: folderPath,
        results,
        metadataFile: metadataPath,
        summary: {
            anatomicalExported: results.anatomical.filter(r => !r.error).length,
            crossSectionExported: results.crossSection.filter(r => !r.error).length,
            stereochemistryExported: results.stereochemistry.filter(r => !r.error).length,
            geometricExported: results.geometric.filter(r => !r.error).length,
            totalExported:
                results.anatomical.filter(r => !r.error).length +
                results.crossSection.filter(r => !r.error).length +
                results.stereochemistry.filter(r => !r.error).length +
                results.geometric.filter(r => !r.error).length,
            totalErrors:
                results.anatomical.filter(r => r.error).length +
                results.crossSection.filter(r => r.error).length +
results.stereochemistry.filter(r => r.error).length +
results.geometric.filter(r => r.error).length
}
};
}
// Generate comparison report for all diagram types
generateDiagramTypeComparisonReport() {
return {
title: 'Diagram Type Comparison Report',
workbook: this.sheetName,
generatedAt: new Date().toISOString(),
anatomical: {
count: this.anatomicalDiagrams.length,
availableCount: AnatomicalDiagramsRegistry.getAllDiagrams().length,
categories: AnatomicalDiagramsRegistry.getAllCategories(),
utilizationRate: this.anatomicalDiagrams.length / AnatomicalDiagramsRegistry.getAllDiagrams().length
},
crossSection: {
count: this.crossSectionDiagrams.length,
availableCount: CrossSectionDiagramsRegistry.getAllDiagrams().length,
categories: CrossSectionDiagramsRegistry.getAllCategories(),
utilizationRate: this.crossSectionDiagrams.length / CrossSectionDiagramsRegistry.getAllDiagrams().length
},
stereochemistry: {
count: this.stereochemistryDiagrams.length,
availableCount: StereochemistryDiagramsRegistry.getAllDiagrams().length,
categories: StereochemistryDiagramsRegistry.getAllCategories(),
formulas: this.stereochemistryDiagrams.map(d => d.formula),
utilizationRate: this.stereochemistryDiagrams.length / StereochemistryDiagramsRegistry.getAllDiagrams().length
},
geometric: {
count: this.geometricShapes.length,
availableCount: GeometricShapesRegistry.getAllShapes().length,
by2D: this.geometricShapes.filter(s => s.dimensionality === '2D').length,
by3D: this.geometricShapes.filter(s => s.dimensionality === '3D').length,
categories: ['2D Shapes', '3D Shapes'],
utilizationRate: this.geometricShapes.length / GeometricShapesRegistry.getAllShapes().length
},
summary: {
totalDiagrams:
this.anatomicalDiagrams.length +
this.crossSectionDiagrams.length +
this.stereochemistryDiagrams.length +
this.geometricShapes.length,
totalAvailable:
AnatomicalDiagramsRegistry.getAllDiagrams().length +
CrossSectionDiagramsRegistry.getAllDiagrams().length +
StereochemistryDiagramsRegistry.getAllDiagrams().length +
GeometricShapesRegistry.getAllShapes().length,
overallUtilizationRate:
(this.anatomicalDiagrams.length + this.crossSectionDiagrams.length + this.stereochemistryDiagrams.length + this.geometricShapes.length) /
(AnatomicalDiagramsRegistry.getAllDiagrams().length + CrossSectionDiagramsRegistry.getAllDiagrams().length + StereochemistryDiagramsRegistry.getAllDiagrams().length + GeometricShapesRegistry.getAllShapes().length)
}
};
}
// Clear all diagrams of specific type
clearDiagramsByType(type) {
const removed = {
anatomical: 0,
crossSection: 0,
stereochemistry: 0,
geometric: 0
};
switch(type) {
    case 'anatomical':
        removed.anatomical = this.anatomicalDiagrams.length;
        this.anatomicalDiagrams = [];
        this.addToHistory(`Cleared all anatomical diagrams (${removed.anatomical})`);
        break;
    case 'crossSection':
        removed.crossSection = this.crossSectionDiagrams.length;
        this.crossSectionDiagrams = [];
        this.addToHistory(`Cleared all cross-section diagrams (${removed.crossSection})`);
        break;
    case 'stereochemistry':
        removed.stereochemistry = this.stereochemistryDiagrams.length;
        this.stereochemistryDiagrams = [];
        this.addToHistory(`Cleared all stereochemistry diagrams (${removed.stereochemistry})`);
        break;
    case 'geometric':
        removed.geometric = this.geometricShapes.length;
        this.geometricShapes = [];
        this.addToHistory(`Cleared all geometric shapes (${removed.geometric})`);
        break;
    case 'all':
        removed.anatomical = this.anatomicalDiagrams.length;
        removed.crossSection = this.crossSectionDiagrams.length;
        removed.stereochemistry = this.stereochemistryDiagrams.length;
        removed.geometric = this.geometricShapes.length;
        this.anatomicalDiagrams = [];
        this.crossSectionDiagrams = [];
        this.stereochemistryDiagrams = [];
        this.geometricShapes = [];
        const total = removed.anatomical + removed.crossSection + removed.stereochemistry + removed.geometric;
        this.addToHistory(`Cleared all diagrams (${total})`);
        break;
    default:
        throw new Error(`Invalid diagram type: ${type}`);
}

return removed;
}
// Get comprehensive workbook summary
getWorkbookSummary() {
return {
metadata: {
name: this.sheetName,
created: this.createdDate,
lastModified: this.lastModified,
author: this.author
},
data: {
rows: this.data.length,
columns: this.headers.length,
headers: this.headers
},
visualizations: {
charts: this.charts.length,
diagrams: {
anatomical: this.anatomicalDiagrams.length,
crossSection: this.crossSectionDiagrams.length,
stereochemistry: this.stereochemistryDiagrams.length,
geometric: this.geometricShapes.length,
total: this.getDiagramCounts().total
}
},
history: {
entries: this.history.length,
lastAction: this.history[this.history.length - 1] || null
}
};
}



    // ========================================================================
    // EXAM PAPER GENERATOR CONFIGURATION METHODS
    // ========================================================================

    /**
     * Initialize exam configuration with default settings
     */
    initializeExamConfig(subject = 'chemistry') {
        const subjectDefaults = {
            chemistry: {
                topics: ['stoichiometry', 'organic_chemistry', 'acid_base_chemistry'],
                sectionConfiguration: {
                    sectionA: { difficulty: 'easier', questionsCount: 7, marksPercentage: 40 },
                    sectionB: { difficulty: 'similar', questionsCount: 5, marksPercentage: 35 },
                    sectionC: { difficulty: 'harder', questionsCount: 3, marksPercentage: 25 }
                }
            },
            biology: {
                topics: ['cell_biology', 'genetics', 'human_anatomy'],
                sectionConfiguration: {
                    sectionA: { difficulty: 'easier', questionsCount: 8, marksPercentage: 40 },
                    sectionB: { difficulty: 'similar', questionsCount: 5, marksPercentage: 35 },
                    sectionC: { difficulty: 'harder', questionsCount: 3, marksPercentage: 25 }
                }
            },
            physics: {
                topics: ['mechanics', 'electricity', 'waves'],
                sectionConfiguration: {
                    sectionA: { difficulty: 'easier', questionsCount: 7, marksPercentage: 40 },
                    sectionB: { difficulty: 'similar', questionsCount: 5, marksPercentage: 35 },
                    sectionC: { difficulty: 'harder', questionsCount: 3, marksPercentage: 25 }
                }
            },
            mathematics: {
                topics: ['algebra', 'geometry', 'trigonometry'],
                sectionConfiguration: {
                    sectionA: { difficulty: 'easier', questionsCount: 8, marksPercentage: 40 },
                    sectionB: { difficulty: 'similar', questionsCount: 5, marksPercentage: 35 },
                    sectionC: { difficulty: 'harder', questionsCount: 3, marksPercentage: 25 }
                }
            }
        };

        this.currentExamConfig = {
            // Basic Information
            examBoard: 'National Examination Board',
            schoolName: 'Excellence High School',
            examType: 'Mid-Term Examination',
            academicYear: '2024/2025',
            term: 'First Term',
            
            // Subject Configuration
            subjectName: this.capitalizeSubject(subject),
            subjectCode: this.generateSubjectCode(subject),
            subject: subject,
            gradeLevel: 'Grade 11', // Default grade
            
            // Exam Details
            examDate: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
            duration: '2 hours 30 minutes',
            totalMarks: 100,
            
            // Topics and Configuration
            topics: subjectDefaults[subject]?.topics || [],
            sectionConfiguration: subjectDefaults[subject]?.sectionConfiguration || {},
            
            // Formatting
            paperSize: 'A4',
            orientation: 'Portrait',
            lineSpacing: 'comfortable',
            answerSpaceLines: 5,
            includeLogo: false,
            logoPath: '',
            
            // Instructions
            instructions: [
                'Answer ALL questions in the spaces provided',
                'Write your Name, Class, and Index Number clearly',
                'All working must be shown for full credit',
                'Use black or blue pen only (pencil for diagrams)',
                'Scientific calculators are allowed',
                'Non-programmable calculators only',
                'Mobile phones are strictly prohibited'
            ],
            
            // Examiner Information
            examinerName: 'Dr. John Smith',
            examinerTitle: `Senior ${this.capitalizeSubject(subject)} Teacher`,
            moderatorName: 'Prof. Jane Doe',
            copyrightYear: new Date().getFullYear(),
            copyrightHolder: 'National Examination Board',
            
            // Additional Settings
            includeMarkingScheme: true
        };

        console.log(`\n✅ Exam configuration initialized for ${subject.toUpperCase()}`);
        return this.currentExamConfig;
    }

    /**
     * Configure exam subject
     */
    configureSubject(subject) {
        if (!['chemistry', 'biology', 'physics', 'mathematics'].includes(subject.toLowerCase())) {
            throw new Error('Invalid subject. Choose from: chemistry, biology, physics, mathematics');
        }

        if (!this.currentExamConfig) {
            this.initializeExamConfig(subject);
        } else {
            this.currentExamConfig.subject = subject.toLowerCase();
            this.currentExamConfig.subjectName = this.capitalizeSubject(subject);
            this.currentExamConfig.subjectCode = this.generateSubjectCode(subject);
        }

        console.log(`📚 Subject configured: ${this.currentExamConfig.subjectName}`);
        return this.currentExamConfig;
    }

    /**
     * Configure grade level
     */
    configureGradeLevel(gradeLevel) {
        const validGradeLevels = [
            'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12',
            'Year 6', 'Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11', 'Year 12',
            'Form 1', 'Form 2', 'Form 3', 'Form 4', 'Form 5', 'Form 6',
            'O-Level', 'A-Level', 'AS-Level', 'AP', 'IB',
            'College', 'University', 'Undergraduate',
            'beginner', 'Beginner', 'intermediate', 'Intermediate', 'advanced', 'Advanced',
            'professional', 'Professional'
        ];

        if (!validGradeLevels.includes(gradeLevel)) {
            console.warn(`⚠ Non-standard grade level: ${gradeLevel}`);
        }

        if (!this.currentExamConfig) {
            this.initializeExamConfig();
        }

        this.currentExamConfig.gradeLevel = gradeLevel;

        // Get appropriate difficulty level
        const difficulty = this.examPaperGenerator.getGradeLevelInfo(gradeLevel);
        console.log(`🎓 Grade Level configured: ${gradeLevel} (Difficulty: ${difficulty})`);

        return this.currentExamConfig;
    }

    /**
     * Configure exam topics
     */
    configureTopics(topics) {
        if (!Array.isArray(topics) || topics.length === 0) {
            throw new Error('Topics must be a non-empty array');
        }

        if (!this.currentExamConfig) {
            this.initializeExamConfig();
        }

        this.currentExamConfig.topics = topics;

        console.log(`📋 Topics configured: ${topics.join(', ')}`);
        return this.currentExamConfig;
    }

    /**
     * Configure section structure
     */
    configureSections(sectionConfiguration) {
        if (!this.currentExamConfig) {
            this.initializeExamConfig();
        }

        this.currentExamConfig.sectionConfiguration = sectionConfiguration;

        console.log(`📊 Sections configured:`);
        Object.entries(sectionConfiguration).forEach(([section, config]) => {
            console.log(`   ${section}: ${config.questionsCount} questions, ${config.marksPercentage}%, ${config.difficulty}`);
        });

        return this.currentExamConfig;
    }

    /**
     * Configure exam metadata
     */
    configureMetadata(metadata) {
        if (!this.currentExamConfig) {
            this.initializeExamConfig();
        }

        Object.assign(this.currentExamConfig, metadata);

        console.log(`📝 Metadata configured`);
        return this.currentExamConfig;
    }

    /**
     * Get available topics for a subject
     */
    getAvailableTopics(subject = null, gradeLevel = null) {
        const subj = subject || this.currentExamConfig?.subject || 'chemistry';
        const grade = gradeLevel || this.currentExamConfig?.gradeLevel || 'intermediate';

        const gradeInfo = this.examPaperGenerator.getAppropriateProblemTypesForGrade(subj, grade);

        if (gradeInfo) {
            console.log(`\n📚 Available topics for ${subj.toUpperCase()} at ${grade}:`);
            console.log(`   Topics: ${gradeInfo.topics.join(', ')}`);
            console.log(`   Problem types available: ${gradeInfo.problemTypes.length}`);
            return gradeInfo.topics;
        }

        return [];
    }

    /**
     * Display current exam configuration
     */
    displayExamConfig() {
        if (!this.currentExamConfig) {
            console.log('\n⚠ No exam configuration initialized. Use initializeExamConfig() first.');
            return;
        }

        console.log('\n' + '='.repeat(80));
        console.log('CURRENT EXAM CONFIGURATION');
        console.log('='.repeat(80));
        console.log(`\n📋 EXAM DETAILS:`);
        console.log(`   Board: ${this.currentExamConfig.examBoard}`);
        console.log(`   School: ${this.currentExamConfig.schoolName}`);
        console.log(`   Type: ${this.currentExamConfig.examType}`);
        console.log(`   Year: ${this.currentExamConfig.academicYear} - ${this.currentExamConfig.term}`);
        
        console.log(`\n📚 SUBJECT:`);
        console.log(`   Name: ${this.currentExamConfig.subjectName}`);
        console.log(`   Code: ${this.currentExamConfig.subjectCode}`);
        console.log(`   Grade Level: ${this.currentExamConfig.gradeLevel}`);
        
        console.log(`\n📊 EXAM STRUCTURE:`);
        console.log(`   Total Marks: ${this.currentExamConfig.totalMarks}`);
        console.log(`   Duration: ${this.currentExamConfig.duration}`);
        console.log(`   Topics: ${this.currentExamConfig.topics.join(', ')}`);
        
        console.log(`\n📝 SECTIONS:`);
        Object.entries(this.currentExamConfig.sectionConfiguration).forEach(([section, config]) => {
            console.log(`   ${section}: ${config.questionsCount} questions, ${config.marksPercentage}%, ${config.difficulty}`);
        });

        console.log('\n' + '='.repeat(80) + '\n');
    }

    /**
     * Generate examination paper with current configuration
     */
    generateExaminationPaper() {
        if (!this.currentExamConfig) {
            throw new Error('No exam configuration found. Initialize configuration first.');
        }

        console.log('\n' + '='.repeat(80));
        console.log('GENERATING EXAMINATION PAPER');
        console.log('='.repeat(80) + '\n');

        try {
            const examPaper = this.examPaperGenerator.generateExaminationPaper(this.currentExamConfig);

            // Store generated paper
            this.examPapers.push({
                paper: examPaper,
                config: { ...this.currentExamConfig },
                generated: new Date(),
                id: `exam_${Date.now()}`
            });

            // Track in history
            this.examHistory.push({
                action: 'Generated Examination Paper',
                subject: this.currentExamConfig.subjectName,
                gradeLevel: this.currentExamConfig.gradeLevel,
                topics: this.currentExamConfig.topics,
                timestamp: new Date()
            });

            // Display preview
            this.examPaperGenerator.displayExamPaperPreview(examPaper);

            console.log(`✅ Examination paper generated successfully!`);
            console.log(`   Index: ${this.examPapers.length - 1}`);

            return {
                paper: examPaper,
                index: this.examPapers.length - 1
            };

        } catch (error) {
            console.error(`\n❌ Error generating examination paper: ${error.message}`);
            throw error;
        }
    }

    /**
     * Export exam paper to DOCX
     */
    async exportExamPaperToDOCX(examIndex = null, filename = null) {
        const index = examIndex !== null ? examIndex : this.examPapers.length - 1;

        if (index < 0 || index >= this.examPapers.length) {
            throw new Error(`Invalid exam index: ${index}`);
        }

        const exam = this.examPapers[index];
        const fname = filename || `exam_paper_${exam.config.subjectName}_${exam.config.gradeLevel}_${Date.now()}.docx`;

        console.log(`\n📄 Exporting exam paper to DOCX...`);

        try {
            const exportedFile = await this.examPaperGenerator.exportToDOCXFile(exam.paper, fname);
            
            this.examHistory.push({
                action: 'Exported to DOCX',
                filename: exportedFile,
                timestamp: new Date()
            });

            return exportedFile;
        } catch (error) {
            console.error(`❌ Error exporting to DOCX: ${error.message}`);
            throw error;
        }
    }

    /**
     * Export exam paper to PDF
     */
    async exportExamPaperToPDF(examIndex = null, filename = null) {
        const index = examIndex !== null ? examIndex : this.examPapers.length - 1;

        if (index < 0 || index >= this.examPapers.length) {
            throw new Error(`Invalid exam index: ${index}`);
        }

        const exam = this.examPapers[index];
        const fname = filename || `exam_paper_${exam.config.subjectName}_${exam.config.gradeLevel}_${Date.now()}.pdf`;

        console.log(`\n📄 Exporting exam paper to PDF...`);

        try {
            const exportedFile = await this.examPaperGenerator.exportToPDFFile(exam.paper, fname);
            
            this.examHistory.push({
                action: 'Exported to PDF',
                filename: exportedFile,
                timestamp: new Date()
            });

            return exportedFile;
        } catch (error) {
            console.error(`❌ Error exporting to PDF: ${error.message}`);
            throw error;
        }
    }

    /**
     * Export marking scheme to DOCX
     */
    async exportMarkingSchemeToDOCX(examIndex = null, filename = null) {
        const index = examIndex !== null ? examIndex : this.examPapers.length - 1;

        if (index < 0 || index >= this.examPapers.length) {
            throw new Error(`Invalid exam index: ${index}`);
        }

        const exam = this.examPapers[index];

        if (!exam.paper.markingScheme) {
            throw new Error('No marking scheme available for this exam paper');
        }

        const fname = filename || `marking_scheme_${exam.config.subjectName}_${exam.config.gradeLevel}_${Date.now()}.docx`;

        console.log(`\n📋 Exporting marking scheme to DOCX...`);

        try {
            const exportedFile = await this.examPaperGenerator.exportMarkingSchemeToDOCXFile(
                exam.paper.markingScheme,
                fname
            );
            
            this.examHistory.push({
                action: 'Exported Marking Scheme to DOCX',
                filename: exportedFile,
                timestamp: new Date()
            });

            return exportedFile;
        } catch (error) {
            console.error(`❌ Error exporting marking scheme: ${error.message}`);
            throw error;
        }
    }

    /**
     * Export marking scheme to PDF
     */
    async exportMarkingSchemeToPDF(examIndex = null, filename = null) {
        const index = examIndex !== null ? examIndex : this.examPapers.length - 1;

        if (index < 0 || index >= this.examPapers.length) {
            throw new Error(`Invalid exam index: ${index}`);
        }

        const exam = this.examPapers[index];

        if (!exam.paper.markingScheme) {
            throw new Error('No marking scheme available for this exam paper');
        }

        const fname = filename || `marking_scheme_${exam.config.subjectName}_${exam.config.gradeLevel}_${Date.now()}.pdf`;

        console.log(`\n📋 Exporting marking scheme to PDF...`);

        try {
            const exportedFile = await this.examPaperGenerator.exportMarkingSchemeToPDFFile(
                exam.paper.markingScheme,
                fname
            );
            
            this.examHistory.push({
                action: 'Exported Marking Scheme to PDF',
                filename: exportedFile,
                timestamp: new Date()
            });

            return exportedFile;
        } catch (error) {
            console.error(`❌ Error exporting marking scheme: ${error.message}`);
            throw error;
        }
    }

    /**
     * Generate comprehensive solutions document
     */
    async generateComprehensiveSolutions(examIndex = null, filename = null) {
        const index = examIndex !== null ? examIndex : this.examPapers.length - 1;

        if (index < 0 || index >= this.examPapers.length) {
            throw new Error(`Invalid exam index: ${index}`);
        }

        const exam = this.examPapers[index];
        const fname = filename || `comprehensive_solutions_${exam.config.subjectName}_${exam.config.gradeLevel}_${Date.now()}.docx`;

        console.log(`\n📚 Generating comprehensive solutions document...`);

        try {
            const exportedFile = await this.examPaperGenerator.generateComprehensiveDocumentForExam(
                exam.paper,
                fname
            );
            
            this.examHistory.push({
                action: 'Generated Comprehensive Solutions',
                filename: exportedFile,
                timestamp: new Date()
            });

            return exportedFile;
        } catch (error) {
            console.error(`❌ Error generating solutions: ${error.message}`);
            throw error;
        }
    }

    /**
     * Check available problems for exam paper
     */
    checkAvailableProblems(examIndex = null) {
        const index = examIndex !== null ? examIndex : this.examPapers.length - 1;

        if (index < 0 || index >= this.examPapers.length) {
            throw new Error(`Invalid exam index: ${index}`);
        }

        const exam = this.examPapers[index];
        return this.examPaperGenerator.checkAvailableProblemsInExam(exam.paper);
    }

    /**
     * List all generated exam papers
     */
    listExamPapers() {
        if (this.examPapers.length === 0) {
            console.log('\n📋 No exam papers generated yet.');
            return [];
        }

        console.log('\n' + '='.repeat(80));
        console.log('GENERATED EXAMINATION PAPERS');
        console.log('='.repeat(80) + '\n');

        this.examPapers.forEach((exam, index) => {
            console.log(`${index}. ${exam.config.subjectName} - ${exam.config.gradeLevel}`);
            console.log(`   Exam: ${exam.config.examType}`);
            console.log(`   Topics: ${exam.config.topics.join(', ')}`);
            console.log(`   Generated: ${exam.generated.toLocaleString()}`);
            console.log(`   Total Questions: ${exam.paper.questionSections.reduce((sum, sec) => sum + sec.questions.length, 0)}`);
            console.log();
        });

        return this.examPapers;
    }

    /**
     * Get exam paper by index
     */
    getExamPaper(index) {
        if (index < 0 || index >= this.examPapers.length) {
            throw new Error(`Invalid exam index: ${index}`);
        }
        return this.examPapers[index];
    }

    /**
     * Delete exam paper by index
     */
    deleteExamPaper(index) {
        if (index < 0 || index >= this.examPapers.length) {
            throw new Error(`Invalid exam index: ${index}`);
        }

        const deleted = this.examPapers.splice(index, 1)[0];

        this.examHistory.push({
            action: 'Deleted Exam Paper',
            subject: deleted.config.subjectName,
            gradeLevel: deleted.config.gradeLevel,
            timestamp: new Date()
        });

        console.log(`✅ Exam paper ${index} deleted`);
        return deleted;
    }

    /**
     * Clear all exam papers
     */
    clearAllExamPapers() {
        const count = this.examPapers.length;
        this.examPapers = [];
        this.currentExamConfig = null;

        this.examHistory.push({
            action: 'Cleared All Exam Papers',
            count: count,
            timestamp: new Date()
        });

        console.log(`✅ Cleared ${count} exam paper(s)`);
    }

    /**
     * Display exam generation history
     */
    displayExamHistory() {
        if (this.examHistory.length === 0) {
            console.log('\n📜 No exam generation history yet.');
            return;
        }

        console.log('\n' + '='.repeat(80));
        console.log('EXAM GENERATION HISTORY');
        console.log('='.repeat(80) + '\n');

        this.examHistory.forEach((entry, index) => {
            console.log(`${index + 1}. ${entry.action}`);
            if (entry.subject) console.log(`   Subject: ${entry.subject}`);
            if (entry.gradeLevel) console.log(`   Grade: ${entry.gradeLevel}`);
            if (entry.topics) console.log(`   Topics: ${entry.topics.join(', ')}`);
            if (entry.filename) console.log(`   File: ${entry.filename}`);
            console.log(`   Time: ${entry.timestamp.toLocaleString()}`);
            console.log();
        });
    }

    // ========================================================================
    // HELPER METHODS
    // ========================================================================

    capitalizeSubject(subject) {
        const subjectNames = {
            'chemistry': 'Chemistry',
            'biology': 'Biology',
            'physics': 'Physics',
            'mathematics': 'Mathematics',
            'math': 'Mathematics'
        };
        return subjectNames[subject.toLowerCase()] || subject.charAt(0).toUpperCase() + subject.slice(1);
    }

    generateSubjectCode(subject) {
        const codes = {
            'chemistry': 'CHEM-101',
            'biology': 'BIO-101',
            'physics': 'PHYS-101',
            'mathematics': 'MATH-101',
            'math': 'MATH-101'
        };
        return codes[subject.toLowerCase()] || 'SUBJ-101';
    }

   // ========================================================================
    // DEMONSTRATION METHOD FOR EXAM PAPER GENERATION
    // ========================================================================

    /**
     * Interactive demonstration of exam paper generation
     */
    async demonstrateExamPaperGenerator() {
        console.log('\n' + '='.repeat(80));
        console.log('EXAMINATION PAPER GENERATOR DEMONSTRATION');
        console.log('='.repeat(80) + '\n');

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        const question = (query) => new Promise((resolve) => rl.question(query, resolve));

        try {
            // Step 1: Choose Subject
            console.log('📚 STEP 1: Choose Subject');
            console.log('Available subjects:');
            console.log('  1. Chemistry');
            console.log('  2. Biology');
            console.log('  3. Physics');
            console.log('  4. Mathematics');
            
            const subjectChoice = await question('\nEnter subject number (1-4): ');
            const subjects = ['chemistry', 'biology', 'physics', 'mathematics'];
            const subject = subjects[parseInt(subjectChoice) - 1] || 'chemistry';

            this.configureSubject(subject);

            // Step 2: Choose Grade Level
            console.log('\n🎓 STEP 2: Choose Grade Level');
            console.log('Available grade levels:');
            console.log('  1. Beginner (Grade 6-8)');
            console.log('  2. Intermediate (Grade 9-10)');
            console.log('  3. Advanced (Grade 11-12)');
            console.log('  4. Professional (College/University)');
            
            const gradeChoice = await question('\nEnter grade level number (1-4): ');
            const gradeLevels = ['Grade 8', 'Grade 10', 'Grade 12', 'University'];
            const gradeLevel = gradeLevels[parseInt(gradeChoice) - 1] || 'Grade 10';

            this.configureGradeLevel(gradeLevel);

            // Step 3: Choose Topics
            console.log('\n📋 STEP 3: Choose Topics');
            const availableTopics = this.getAvailableTopics(subject, gradeLevel);
            
            console.log('\nAvailable topics:');
            availableTopics.forEach((topic, index) => {
                console.log(`  ${index + 1}. ${topic}`);
            });

            const topicInput = await question('\nEnter topic numbers (comma-separated, or "all"): ');
            
            let selectedTopics;
            if (topicInput.toLowerCase() === 'all') {
                selectedTopics = availableTopics;
            } else {
                const indices = topicInput.split(',').map(s => parseInt(s.trim()) - 1);
                selectedTopics = indices.map(i => availableTopics[i]).filter(Boolean);
            }

            if (selectedTopics.length === 0) {
                selectedTopics = availableTopics.slice(0, 3);
            }

            this.configureTopics(selectedTopics);

            // Step 4: Configure Exam Details
            console.log('\n📝 STEP 4: Configure Exam Details');
            
            const schoolName = await question('School Name (or press Enter for default): ');
            if (schoolName) {
                this.configureMetadata({ schoolName });
            }

            const examType = await question('Exam Type (or press Enter for "Mid-Term Examination"): ');
            if (examType) {
                this.configureMetadata({ examType });
            }

            const totalMarks = await question('Total Marks (or press Enter for 100): ');
            if (totalMarks) {
                this.configureMetadata({ totalMarks: parseInt(totalMarks) });
            }

            // Step 5: Review Configuration
            console.log('\n📊 STEP 5: Review Configuration');
            this.displayExamConfig();

            const confirm = await question('Generate exam paper with this configuration? (y/n): ');
            
            if (confirm.toLowerCase() !== 'y') {
                console.log('\n❌ Exam generation cancelled.');
                rl.close();
                return;
            }

            // Step 6: Generate Exam Paper
            console.log('\n⚙️  STEP 6: Generating Exam Paper...');
            const result = await this.generateExaminationPaper();

            // Step 7: Export Options
            console.log('\n📤 STEP 7: Export Options');
            console.log('What would you like to export?');
            console.log('  1. Exam Paper (DOCX)');
            console.log('  2. Exam Paper (PDF)');
            console.log('  3. Marking Scheme (DOCX)');
            console.log('  4. Marking Scheme (PDF)');
            console.log('  5. Comprehensive Solutions (DOCX)');
            console.log('  6. All of the above');
            console.log('  7. Skip export');

            const exportChoice = await question('\nEnter choice (1-7): ');

            switch(exportChoice) {
                case '1':
                    await this.exportExamPaperToDOCX();
                    break;
                case '2':
                    await this.exportExamPaperToPDF();
                    break;
                case '3':
                    await this.exportMarkingSchemeToDOCX();
                    break;
                case '4':
                    await this.exportMarkingSchemeToPDF();
                    break;
                case '5':
                    await this.generateComprehensiveSolutions();
                    break;
                case '6':
                    await this.exportExamPaperToDOCX();
                    await this.exportExamPaperToPDF();
                    await this.exportMarkingSchemeToDOCX();
                    await this.exportMarkingSchemeToPDF();
                    await this.generateComprehensiveSolutions();
                    break;
                case '7':
                    console.log('\n✅ Skipping export.');
                    break;
                default:
                    console.log('\n⚠ Invalid choice. Skipping export.');
            }

            // Step 8: Check Available Problems
            console.log('\n🔍 STEP 8: Checking Available Problems...');
            const problemCheck = this.checkAvailableProblems();

            console.log('\n' + '='.repeat(80));
            console.log('✅ EXAM PAPER GENERATION COMPLETE');
            console.log('='.repeat(80));
            console.log(`\nExam Index: ${result.index}`);
            console.log(`Problems with solutions: ${problemCheck.withSolvers.length}`);
            console.log(`Problems without solutions: ${problemCheck.withoutSolvers.length}`);
            console.log('\nUse listExamPapers() to view all generated papers.');
            console.log('='.repeat(80) + '\n');

        } catch (error) {
            console.error(`\n❌ Error during demonstration: ${error.message}`);
        } finally {
            rl.close();
        }
    }

    /**
     * Quick exam generation with minimal configuration
     */
    async quickGenerateExam(subject, gradeLevel, topicCount = 3) {
        console.log('\n⚡ QUICK EXAM GENERATION');
        console.log('='.repeat(80) + '\n');

        // Initialize configuration
        this.initializeExamConfig(subject);
        this.configureGradeLevel(gradeLevel);

        // Get and configure topics
        const availableTopics = this.getAvailableTopics(subject, gradeLevel);
        const selectedTopics = availableTopics.slice(0, topicCount);
        this.configureTopics(selectedTopics);

        // Generate exam
        const result = await this.generateExaminationPaper();

        // Export all documents
        console.log('\n📤 Exporting all documents...');
        await this.exportExamPaperToDOCX();
        await this.exportExamPaperToPDF();
        await this.exportMarkingSchemeToDOCX();
        await this.exportMarkingSchemeToPDF();
        await this.generateComprehensiveSolutions();

        console.log('\n✅ Quick exam generation complete!');
        console.log(`   Exam Index: ${result.index}`);
        console.log('='.repeat(80) + '\n');

        return result;
    }





// ==================== STATISTICAL WORKBOOK INTEGRATION ====================

    /**
     * Initialize EnhancedStatisticalWorkbook instance
     */
initializeStatisticalWorkbook(options = {}) {
        if (!this.statisticalWorkbook) {
            this.statisticalWorkbook = new EnhancedStatisticalWorkbook({
                ...options,
                progressCallback: (progress) => {
                    console.log(`📊 Statistical Analysis: ${progress.stage} - ${progress.progress}%`);
                }
            });
        }
        return this.statisticalWorkbook;
    }

    /**
     * Get statistical workbook instance
     */
    getStatisticalWorkbook() {
        if (!this.statisticalWorkbook) {
            this.initializeStatisticalWorkbook();
        }
        return this.statisticalWorkbook;
    }

    // ==================== DATA EXTRACTION FOR STATISTICAL ANALYSIS ====================

    /**
     * Extract column data as numeric array
     */
    extractColumnData(columnRef, options = {}) {
        const {
            startRow = 0,
            endRow = this.data.length - 1,
            skipNonNumeric = true,
            skipEmpty = true,
            skipNaN = true
        } = options;

        const colIndex = typeof columnRef === 'number' 
            ? columnRef 
            : this.letterToColumn(columnRef);

        if (colIndex < 0 || colIndex >= this.headers.length) {
            throw new Error(`Invalid column reference: ${columnRef}`);
        }

        let values = [];
        
        for (let row = startRow; row <= Math.min(endRow, this.data.length - 1); row++) {
            const value = this.data[row][colIndex];
            
            if (skipEmpty && (value === null || value === undefined || value === '')) {
                continue;
            }

            const numValue = parseFloat(value);
            
            if (skipNaN && isNaN(numValue)) {
                if (!skipNonNumeric) {
                    throw new Error(`Non-numeric value at row ${row + 1}: ${value}`);
                }
                continue;
            }

            values.push(numValue);
        }

        return values;
    }

    /**
     * Extract range data as numeric array
     */
    extractRangeData(rangeRef, options = {}) {
        const values = this.getRangeValues(rangeRef);
        
        const {
            skipNonNumeric = true,
            skipEmpty = true,
            skipNaN = true
        } = options;

        return values
            .filter(val => {
                if (skipEmpty && (val === null || val === undefined || val === '')) {
                    return false;
                }
                return true;
            })
            .map(val => parseFloat(val))
            .filter(val => {
                if (skipNaN && isNaN(val)) {
                    if (!skipNonNumeric) {
                        throw new Error(`Non-numeric value encountered: ${val}`);
                    }
                    return false;
                }
                return true;
            });
    }

    /**
     * Extract multiple columns as separate arrays
     */
    extractMultipleColumns(columnRefs, options = {}) {
        const datasets = {};
        
        columnRefs.forEach(ref => {
            const colName = typeof ref === 'string' ? ref : this.columnToLetter(ref);
            datasets[colName] = this.extractColumnData(ref, options);
        });

        return datasets;
    }

   // ==================== EXPLORATORY DATA ANALYSIS (EDA) ====================

    /**
     * Perform exploratory data analysis on column
     */
    performEDA(columnRef, options = {}) {
        console.log('\n📊 EXPLORATORY DATA ANALYSIS');
        console.log('='.repeat(70));

        const data = this.extractColumnData(columnRef, options);
        const colName = this.headers[typeof columnRef === 'number' ? columnRef : this.letterToColumn(columnRef)];

        console.log(`\nAnalyzing Column: ${colName}`);
        console.log(`Sample Size: ${data.length}`);

        const stats = this.getStatisticalWorkbook();
        stats.loadFromArray(data);
        stats.sampleName = colName;
        stats.variableName = colName;
        stats.unitName = options.unitName || 'units';

        // Calculate basic statistics
        stats.calculateStatistics();

        // Data validation
        const validation = stats.validateData();

        console.log(`\nData Quality: ${validation.dataQuality.rating} (${validation.dataQuality.score}/100)`);
        
        if (validation.issues.length > 0) {
            console.log('\n⚠️  Issues:');
            validation.issues.forEach(issue => console.log(`  • ${issue}`));
        }

        if (validation.warnings.length > 0) {
            console.log('\n⚡ Warnings:');
            validation.warnings.forEach(warning => console.log(`  • ${warning}`));
        }

        // Summary statistics
        console.log('\n📈 SUMMARY STATISTICS:');
        console.log(`  Mean: ${stats.statistics.mean.toFixed(4)}`);
        console.log(`  Median: ${stats.statistics.median.toFixed(4)}`);
        console.log(`  Std Dev: ${stats.statistics.standardDeviation.toFixed(4)}`);
        console.log(`  Min: ${stats.statistics.min.toFixed(4)}`);
        console.log(`  Max: ${stats.statistics.max.toFixed(4)}`);
        console.log(`  Range: ${stats.statistics.range.toFixed(4)}`);
        console.log(`  Skewness: ${stats.statistics.skewness.toFixed(4)}`);
        console.log(`  Kurtosis: ${stats.statistics.kurtosis.toFixed(4)}`);

        // Robust statistics
        stats.calculateRobustStatistics();
        
        console.log('\n🛡️  ROBUST STATISTICS:');
        console.log(`  MAD: ${stats.robustStatistics.mad.value.toFixed(4)}`);
        console.log(`  Scaled MAD: ${stats.robustStatistics.mad.scaledMAD.toFixed(4)}`);
        console.log(`  Trimmed Mean (10%): ${stats.robustStatistics.trimmedMean.value.toFixed(4)}`);

        // Outlier detection
        const outliers = stats.robustStatistics.outlierDetection;
        console.log('\n🔍 OUTLIER DETECTION:');
        console.log(`  Method: ${outliers.method}`);
        console.log(`  Outliers: ${outliers.outlierCount} (${outliers.outlierPercentage})`);
        console.log(`  Recommendation: ${outliers.recommendation}`);

        // Store analysis
        this.statisticalAnalyses[colName] = {
            type: 'EDA',
            timestamp: new Date(),
            statistics: stats.statistics,
            robustStatistics: stats.robustStatistics,
            validation: validation
        };

        this.addToHistory(`Performed EDA on column ${colName}`);

        return {
            columnName: colName,
            sampleSize: data.length,
            statistics: stats.statistics,
            robustStatistics: stats.robustStatistics,
            validation: validation,
            report: stats.generateEDAReport()
        };
    }
    // ==================== DISTRIBUTION IDENTIFICATION ====================

    /**
     * Identify best-fit distribution for column data
     */
    identifyDistribution(columnRef, options = {}) {
        console.log('\n📊 DISTRIBUTION IDENTIFICATION');
        console.log('='.repeat(70));

        const data = this.extractColumnData(columnRef, options);
        const colName = this.headers[typeof columnRef === 'number' ? columnRef : this.letterToColumn(columnRef)];

        const {
            candidateDistributions = ['normal', 't', 'exponential', 'gamma', 'lognormal', 'uniform'],
            confidenceLevel = 0.95
        } = options;

        console.log(`\nAnalyzing Column: ${colName}`);
        console.log(`Testing ${candidateDistributions.length} distributions...`);

        const stats = this.getStatisticalWorkbook();
        stats.loadFromArray(data);
        stats.sampleName = colName;
        stats.variableName = colName;

        // Perform comparison
        stats.compareDistributions(candidateDistributions);

        const bestFit = stats.comparisonResults.bestFit;
        const bestDist = DistributionRegistry.getDistribution(bestFit);

        console.log(`\n✓ Best Fit: ${bestDist.name}`);
        console.log(`  Parameters: ${JSON.stringify(stats.comparisonResults.distributions[bestFit].parameters)}`);
        console.log(`  Log-Likelihood: ${stats.comparisonResults.distributions[bestFit].logLikelihood.toFixed(4)}`);
        console.log(`  AIC: ${stats.comparisonResults.distributions[bestFit].aic.toFixed(4)}`);
        console.log(`  BIC: ${stats.comparisonResults.distributions[bestFit].bic.toFixed(4)}`);

        // Store distribution fit
        this.distributionFits[colName] = {
            bestFit: bestFit,
            timestamp: new Date(),
            distributions: stats.comparisonResults.distributions,
            data: data
        };

        this.addToHistory(`Identified ${bestDist.name} as best fit for ${colName}`);

        return {
            columnName: colName,
            bestFit: bestFit,
            distributionName: bestDist.name,
            parameters: stats.comparisonResults.distributions[bestFit].parameters,
            goodnessOfFit: stats.comparisonResults.distributions[bestFit].ksTest,
            comparison: stats.comparisonResults
        };
    }

    // ==================== DISTRIBUTION ANALYSIS ====================

    /**
     * Perform comprehensive distribution analysis
     */
    analyzeDistribution(columnRef, distributionType, options = {}) {
        console.log('\n📊 DISTRIBUTION ANALYSIS');
        console.log('='.repeat(70));

        const data = this.extractColumnData(columnRef, options);
        const colName = this.headers[typeof columnRef === 'number' ? columnRef : this.letterToColumn(columnRef)];

        console.log(`\nColumn: ${colName}`);
        console.log(`Distribution: ${distributionType}`);
        console.log(`Sample Size: ${data.length}`);

        const stats = this.getStatisticalWorkbook();

        const config = {
            samples: data,
            sampleName: colName,
            variableName: colName,
            unitName: options.unitName || 'units',
            distribution: distributionType,
            distributionParams: options.distributionParams || null,
            targetValue: options.targetValue || null,
            targetAnalysisType: options.targetAnalysisType || null,
            hypothesisTest: options.hypothesisTest || null,
            compareDistributions: options.compareDistributions || null,
            regression: options.regression || null,
            scenarioDescription: options.scenarioDescription || ''
        };

        // Run comprehensive analysis
        const workbook = stats.analyzeDistribution(config);

        console.log('\n✓ Analysis Complete');
        console.log(`  Distribution: ${stats.distributionAnalysis.distribution}`);
        console.log(`  Parameters: ${JSON.stringify(stats.distributionAnalysis.parameters)}`);
        console.log(`  Log-Likelihood: ${stats.distributionAnalysis.logLikelihood.toFixed(4)}`);
        console.log(`  AIC: ${stats.distributionAnalysis.aic.toFixed(4)}`);
        console.log(`  BIC: ${stats.distributionAnalysis.bic.toFixed(4)}`);

        // Store analysis
        this.statisticalAnalyses[`${colName}_${distributionType}`] = {
            type: 'Distribution Analysis',
            timestamp: new Date(),
            distribution: distributionType,
            statistics: stats.statistics,
            distributionAnalysis: stats.distributionAnalysis,
            goodnessOfFit: stats.goodnessOfFit,
            confidenceIntervals: stats.confidenceIntervals,
            workbook: workbook
        };

        this.addToHistory(`Analyzed ${colName} with ${distributionType} distribution`);

        return {
            columnName: colName,
            distribution: distributionType,
            statistics: stats.statistics,
            distributionAnalysis: stats.distributionAnalysis,
            goodnessOfFit: stats.goodnessOfFit,
            confidenceIntervals: stats.confidenceIntervals,
            parameterCI: stats.parameterConfidenceIntervals,
            targetAnalysis: stats.targetAnalysis,
            hypothesisTests: stats.hypothesisTests,
            workbook: workbook
        };
    }

    // ==================== FORMAL DISTRIBUTIONAL ASSUMPTION CHECKS ====================

    /**
     * Perform formal tests for distribution assumptions
     */
    checkDistributionAssumptions(columnRef, distributionType, options = {}) {
        console.log('\n🔍 DISTRIBUTION ASSUMPTION CHECKS');
        console.log('='.repeat(70));

        const data = this.extractColumnData(columnRef, options);
        const colName = this.headers[typeof columnRef === 'number' ? columnRef : this.letterToColumn(columnRef)];

        const stats = this.getStatisticalWorkbook();
        stats.loadFromArray(data);
        stats.sampleName = colName;
        stats.selectedDistribution = distributionType;

        // Fit distribution
        stats.fitDistribution();

        // Perform goodness of fit tests
        stats.performGoodnessOfFitTests();

        console.log(`\nColumn: ${colName}`);
        console.log(`Distribution: ${distributionType}`);

        console.log('\n📊 GOODNESS OF FIT TESTS:');
        
        // Kolmogorov-Smirnov
        const ks = stats.goodnessOfFit.kolmogorovSmirnov;
        console.log(`\n  Kolmogorov-Smirnov Test:`);
        console.log(`    Statistic: ${ks.testStatistic.toFixed(6)}`);
        console.log(`    p-value: ${ks.pValue.toFixed(6)}`);
        console.log(`    Reject (α=0.05): ${ks.reject['0.05'] ? 'YES' : 'NO'}`);

        // Anderson-Darling
        const ad = stats.goodnessOfFit.andersonDarling;
        console.log(`\n  Anderson-Darling Test:`);
        console.log(`    Statistic: ${ad.testStatistic.toFixed(6)}`);
        console.log(`    Reject (α=0.05): ${ad.reject['0.05'] ? 'YES' : 'NO'}`);

        // Chi-Square
        const chi = stats.goodnessOfFit.chisquareTest;
        console.log(`\n  Chi-Square Test:`);
        console.log(`    Statistic: ${chi.testStatistic.toFixed(6)}`);
        console.log(`    df: ${chi.degreesOfFreedom}`);
        console.log(`    p-value: ${chi.pValue.toFixed(6)}`);
        console.log(`    Reject (α=0.05): ${chi.reject['0.05'] ? 'YES' : 'NO'}`);

        // Shapiro-Wilk (if normal)
        if (distributionType === 'normal' && stats.goodnessOfFit.shapiroWilk) {
            const sw = stats.goodnessOfFit.shapiroWilk;
            if (sw.testStatistic !== null) {
                console.log(`\n  Shapiro-Wilk Test:`);
                console.log(`    Statistic: ${sw.testStatistic.toFixed(6)}`);
                console.log(`    p-value: ${sw.pValue.toFixed(6)}`);
                console.log(`    Reject (α=0.05): ${sw.reject['0.05'] ? 'YES' : 'NO'}`);
            }
        }

        // Store results
        this.statisticalAnalyses[`${colName}_assumptions_${distributionType}`] = {
            type: 'Assumption Checks',
            timestamp: new Date(),
            distribution: distributionType,
            goodnessOfFit: stats.goodnessOfFit
        };

        this.addToHistory(`Checked ${distributionType} assumptions for ${colName}`);

        return {
            columnName: colName,
            distribution: distributionType,
            goodnessOfFit: stats.goodnessOfFit,
            overallFit: this.assessOverallFit(stats.goodnessOfFit)
        };
    }

    /**
     * Assess overall fit from multiple tests
     */
    assessOverallFit(goodnessOfFit) {
        const tests = [
            goodnessOfFit.kolmogorovSmirnov,
            goodnessOfFit.andersonDarling,
            goodnessOfFit.chisquareTest
        ];

        const rejections = tests.filter(test => test && test.reject && test.reject['0.05']).length;
        const totalTests = tests.filter(test => test && test.testStatistic !== null).length;

        if (rejections === 0) {
            return {
                assessment: 'EXCELLENT',
                description: 'All tests support the distribution fit',
                recommendation: 'Distribution is appropriate for the data'
            };
        } else if (rejections <= totalTests / 2) {
            return {
                assessment: 'GOOD',
                description: 'Most tests support the distribution fit',
                recommendation: 'Distribution is reasonable for the data'
            };
        } else {
            return {
                assessment: 'POOR',
                description: 'Multiple tests reject the distribution fit',
                recommendation: 'Consider alternative distributions'
            };
        }
    }

    // ==================== GENERATE VISUALIZATIONS ====================

    /**
     * Generate statistical visualizations for column
     */
    generateStatisticalVisualizations(columnRef, distributionType, options = {}) {
        console.log('\n📊 GENERATING STATISTICAL VISUALIZATIONS');
        console.log('='.repeat(70));

        const data = this.extractColumnData(columnRef, options);
        const colName = this.headers[typeof columnRef === 'number' ? columnRef : this.letterToColumn(columnRef)];

        const stats = this.getStatisticalWorkbook();
        stats.loadFromArray(data);
        stats.sampleName = colName;
        stats.variableName = colName;
        stats.selectedDistribution = distributionType;

        // Fit distribution
        stats.fitDistribution();

        // Generate all visualizations
        const visualizations = stats.generateAllVisualizations();

        console.log(`\nGenerated ${Object.keys(visualizations).length} visualizations for ${colName}`);

        Object.keys(visualizations).forEach(vizType => {
            console.log(`  ✓ ${vizType}`);
        });

        // Store visualizations
        this.statisticalAnalyses[`${colName}_viz_${distributionType}`] = {
            type: 'Visualizations',
            timestamp: new Date(),
            distribution: distributionType,
            visualizations: visualizations
        };

        this.addToHistory(`Generated visualizations for ${colName}`);

        return {
            columnName: colName,
            distribution: distributionType,
            visualizations: visualizations,
            vizCount: Object.keys(visualizations).length
        };
    }

    /**
     * Save statistical visualizations to files
     */
    async saveStatisticalVisualizations(columnRef, distributionType, outputDir, options = {}) {
        const vizResult = this.generateStatisticalVisualizations(columnRef, distributionType, options);
        
        const stats = this.getStatisticalWorkbook();
        const savedFiles = await stats.saveAllVisualizations(outputDir);

        console.log(`\n✓ Saved ${savedFiles.length} visualization files to ${outputDir}`);

        return {
            ...vizResult,
            savedFiles: savedFiles,
            outputDirectory: outputDir
        };
    }

    // ==================== PARAMETER ESTIMATION ====================

    /**
     * Estimate distribution parameters
     */
    estimateParameters(columnRef, distributionType, options = {}) {
        console.log('\n📊 PARAMETER ESTIMATION');
        console.log('='.repeat(70));

        const data = this.extractColumnData(columnRef, options);
        const colName = this.headers[typeof columnRef === 'number' ? columnRef : this.letterToColumn(columnRef)];

        const stats = this.getStatisticalWorkbook();
        stats.loadFromArray(data);
        stats.sampleName = colName;
        stats.selectedDistribution = distributionType;

        // Fit distribution
        stats.fitDistribution();

        // Calculate parameter confidence intervals
        stats.calculateParameterConfidenceIntervals();

        const dist = DistributionRegistry.getDistribution(distributionType);

        console.log(`\nColumn: ${colName}`);
        console.log(`Distribution: ${dist.name}`);

        console.log('\n📈 ESTIMATED PARAMETERS:');
        dist.params.forEach((param, idx) => {
            console.log(`  ${param}: ${stats.distributionParams[idx].toFixed(6)}`);
        });

        console.log('\n🎯 PARAMETER CONFIDENCE INTERVALS (95%):');
        const paramCI = stats.parameterConfidenceIntervals[0.95];
        if (paramCI && paramCI.parameters) {
            Object.entries(paramCI.parameters).forEach(([param, ci]) => {
                console.log(`  ${param}:`);
                console.log(`    Estimate: ${ci.estimate.toFixed(6)}`);
                console.log(`    95% CI: [${ci.lowerBound.toFixed(6)}, ${ci.upperBound.toFixed(6)}]`);
                console.log(`    SE: ${ci.standardError.toFixed(6)}`);
            });
        }

        // Store results
        this.statisticalAnalyses[`${colName}_params_${distributionType}`] = {
            type: 'Parameter Estimation',
            timestamp: new Date(),
            distribution: distributionType,
            parameters: stats.distributionParams,
            confidenceIntervals: stats.parameterConfidenceIntervals
        };

        this.addToHistory(`Estimated parameters for ${colName} (${distributionType})`);

        return {
            columnName: colName,
            distribution: distributionType,
            parameters: stats.distributionParams,
            parameterNames: dist.params,
            confidenceIntervals: stats.parameterConfidenceIntervals,
            distributionAnalysis: stats.distributionAnalysis
        };
    }

    // ==================== POINT ESTIMATES ====================

    /**
     * Calculate point estimates for distribution properties
     */
    calculatePointEstimates(columnRef, distributionType, options = {}) {
        const data = this.extractColumnData(columnRef, options);
        const colName = this.headers[typeof columnRef === 'number' ? columnRef : this.letterToColumn(columnRef)];

        const stats = this.getStatisticalWorkbook();
        stats.loadFromArray(data);
        stats.selectedDistribution = distributionType;

        stats.fitDistribution();

        const dist = DistributionRegistry.getDistribution(distributionType);

        return {
            columnName: colName,
            distribution: dist.name,
            sampleSize: data.length,
            sampleMean: stats.statistics.mean,
            sampleMedian: stats.statistics.median,
            sampleStdDev: stats.statistics.standardDeviation,
            sampleVariance: stats.statistics.variance,
            sampleSkewness: stats.statistics.skewness,
            sampleKurtosis: stats.statistics.kurtosis,
            distributionParameters: stats.distributionParams,
            theoreticalMoments: stats.distributionAnalysis.theoreticalMoments
        };
    }

    // ==================== STANDARD ERROR CALCULATION ====================

    /**
     * Calculate standard errors for estimates
     */
    calculateStandardErrors(columnRef, distributionType, options = {}) {
        const paramResult = this.estimateParameters(columnRef, distributionType, options);

        const standardErrors = {};
        const paramCI = paramResult.confidenceIntervals[0.95];

        if (paramCI && paramCI.parameters) {
            Object.entries(paramCI.parameters).forEach(([param, ci]) => {
                standardErrors[param] = {
                    estimate: ci.estimate,
                    standardError: ci.standardError,
                    relativeSE: (ci.standardError / ci.estimate * 100).toFixed(2) + '%'
                };
            });
        }

        return {
            columnName: paramResult.columnName,
            distribution: paramResult.distribution,
            standardErrors: standardErrors
        };
    }

    // ==================== CONFIDENCE INTERVALS ====================

    /**
     * Calculate various confidence intervals
     */
    calculateConfidenceIntervals(columnRef, distributionType, options = {}) {
        console.log('\n📊 CONFIDENCE INTERVALS');
        console.log('='.repeat(70));

        const data = this.extractColumnData(columnRef, options);
        const colName = this.headers[typeof columnRef === 'number' ? columnRef : this.letterToColumn(columnRef)];

        const {
            levels = [0.90, 0.95, 0.99]
        } = options;

        const stats = this.getStatisticalWorkbook();
        stats.loadFromArray(data);
        stats.sampleName = colName;
        stats.selectedDistribution = distributionType;

        stats.fitDistribution();
        stats.calculateDistributionConfidenceIntervals();
        stats.calculateParameterConfidenceIntervals();

        console.log(`\nColumn: ${colName}`);
        console.log(`Distribution: ${distributionType}`);

        console.log('\n📈 DISTRIBUTION CONFIDENCE INTERVALS:');
        levels.forEach(level => {
            const ci = stats.confidenceIntervals[level];
            if (ci) {
                console.log(`\n  ${(level * 100)}% CI:`);
                console.log(`    Lower: ${ci.lowerBound.toFixed(6)}`);
                console.log(`    Upper: ${ci.upperBound.toFixed(6)}`);
                console.log(`    Width: ${ci.width.toFixed(6)}`);
            }
        });

        console.log('\n📈 PARAMETER CONFIDENCE INTERVALS:');
        levels.forEach(level => {
            const paramCI = stats.parameterConfidenceIntervals[level];
            if (paramCI && paramCI.parameters) {
                console.log(`\n  ${(level * 100)}% CI:`);
                Object.entries(paramCI.parameters).forEach(([param, ci]) => {
                    console.log(`    ${param}: [${ci.lowerBound.toFixed(6)}, ${ci.upperBound.toFixed(6)}]`);
                });
            }
        });

        return {
            columnName: colName,
            distribution: distributionType,
            distributionCI: stats.confidenceIntervals,
            parameterCI: stats.parameterConfidenceIntervals
        };
    }

    // ==================== HYPOTHESIS TESTING ====================

    /**
     * Perform hypothesis test on column data
     */
    performHypothesisTest(columnRef, testConfig, options = {}) {
        console.log('\n📊 HYPOTHESIS TEST');
        console.log('='.repeat(70));

        const data = this.extractColumnData(columnRef, options);
        const colName = this.headers[typeof columnRef === 'number' ? columnRef : this.letterToColumn(columnRef)];

        const stats = this.getStatisticalWorkbook();
        stats.loadFromArray(data);
        stats.sampleName = colName;

        // Perform test
        stats.performHypothesisTest(testConfig);

        const testType = testConfig.type;
        const testResult = stats.hypothesisTests[testType];

        console.log(`\nColumn: ${colName}`);
        console.log(`Test: ${testResult.testType}`);
        console.log(`\nNull Hypothesis: ${testResult.nullHypothesis}`);
        console.log(`Alternative: ${testResult.alternative}`);
        console.log(`\nTest Statistic: ${testResult.testStatistic.toFixed(6)}`);
        console.log(`p-value: ${testResult.pValue.toFixed(6)}`);
        console.log(`\nDecision: ${testResult.conclusion}`);

        // Store results
        this.statisticalAnalyses[`${colName}_test_${testType}`] = {
            type: 'Hypothesis Test',
            timestamp: new Date(),
            testType: testType,
            result: testResult
        };

        this.addToHistory(`Performed ${testType} test on ${colName}`);

        return {
            columnName: colName,
            testType: testType,
            result: testResult
        };
    }

    // ==================== CORRELATION MATRIX ====================

    /**
     * Calculate correlation matrix for multiple columns
     */
    calculateCorrelationMatrix(columnRefs, options = {}) {
        console.log('\n📊 CORRELATION MATRIX');
        console.log('='.repeat(70));

        const datasets = this.extractMultipleColumns(columnRefs, options);
        const colNames = Object.keys(datasets);
        const n = colNames.length;

        console.log(`\nAnalyzing ${n} columns:`);
        colNames.forEach(name => console.log(`  • ${name}`));

        // Calculate correlation matrix
        const correlationMatrix = [];
        const pValueMatrix = [];

        for (let i = 0; i < n; i++) {
            correlationMatrix[i] = [];
            pValueMatrix[i] = [];

            for (let j = 0; j < n; j++) {
                if (i === j) {
                    correlationMatrix[i][j] = 1.0;
                    pValueMatrix[i][j] = 0.0;
                } else {
                    const corr = this.pearsonCorrelation(
                        datasets[colNames[i]],
                        datasets[colNames[j]]
                    );
                    correlationMatrix[i][j] = corr.r;
                    pValueMatrix[i][j] = corr.pValue;
                }
            }
        }

        console.log('\n📈 CORRELATION MATRIX:');
        console.log('\n     ', colNames.map(n => n.substring(0, 8).padEnd(8)).join(' '));
        correlationMatrix.forEach((row, i) => {
            console.log(
                colNames[i].substring(0, 4).padEnd(5),
                row.map(r => r.toFixed(4).padStart(8)).join(' ')
            );
        });

        console.log('\n📊 p-VALUE MATRIX:');
        console.log('\n     ', colNames.map(n => n.substring(0, 8).padEnd(8)).join(' '));
        pValueMatrix.forEach((row, i) => {
            console.log(
                colNames[i].substring(0, 4).padEnd(5),
                row.map(p => p.toFixed(4).padStart(8)).join(' ')
            );
        });

        // Identify significant correlations
        const significantCorrelations = [];
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                if (pValueMatrix[i][j] < 0.05) {
                    significantCorrelations.push({
                        var1: colNames[i],
                        var2: colNames[j],
                        correlation: correlationMatrix[i][j],
                        pValue: pValueMatrix[i][j],
                        strength: this.interpretCorrelation(correlationMatrix[i][j])
                    });
                }
            }
        }

        console.log('\n🔍 SIGNIFICANT CORRELATIONS (p < 0.05):');
        if (significantCorrelations.length > 0) {
            significantCorrelations.forEach(corr => {
                console.log(
                    `  ${corr.var1} ↔ ${corr.var2}: r = ${corr.correlation.toFixed(4)} ` +
                    `(${corr.strength}, p = ${corr.pValue.toFixed(4)})`
                );
            });
        } else {
            console.log('  No significant correlations found');
        }

        // Store results
        this.statisticalAnalyses['correlation_matrix'] = {
            type: 'Correlation Matrix',
            timestamp: new Date(),
            columns: colNames,
            correlationMatrix: correlationMatrix,
            pValueMatrix: pValueMatrix,
            significantCorrelations: significantCorrelations
        };

        this.addToHistory(`Calculated correlation matrix for ${n} columns`);

        return {
            columns: colNames,
            correlationMatrix: correlationMatrix,
            pValueMatrix: pValueMatrix,
            significantCorrelations: significantCorrelations
        };
    }

    /**
     * Calculate Pearson correlation between two arrays
     */
    pearsonCorrelation(x, y) {
        if (x.length !== y.length) {
            throw new Error('Arrays must have equal length');
        }

        const n = x.length;
        const meanX = x.reduce((a, b) => a + b, 0) / n;
        const meanY = y.reduce((a, b) => a + b, 0) / n;

        let numerator = 0;
        let denomX = 0;
        let denomY = 0;

        for (let i = 0; i < n; i++) {
            const dx = x[i] - meanX;
            const dy = y[i] - meanY;
            numerator += dx * dy;
            denomX += dx * dx;
            denomY += dy * dy;
        }

        if (denomX === 0 || denomY === 0) {
            return { r: 0, pValue: 1 };
        }

        const r = numerator / Math.sqrt(denomX * denomY);

        // Calculate t-statistic and p-value
        const t = r * Math.sqrt((n - 2) / (1 - r * r));
        const stats = this.getStatisticalWorkbook();
        const pValue = 2 * (1 - StatisticalDistributions.tCDF(Math.abs(t), n - 2));

        return { r, t, pValue, n };
    }

    /**
     * Interpret correlation strength
     */
    interpretCorrelation(r) {
        const absR = Math.abs(r);
        if (absR < 0.3) return 'Weak';
        if (absR < 0.7) return 'Moderate';
        return 'Strong';
    }

    // ==================== STATISTICAL REPORTS ====================

    /**
     * Generate comprehensive statistical report for column
     */
    generateStatisticalReport(columnRef, options = {}) {
        console.log('\n📊 GENERATING STATISTICAL REPORT');
        console.log('='.repeat(70));

        const data = this.extractColumnData(columnRef, options);
        const colName = this.headers[typeof columnRef === 'number' ? columnRef : this.letterToColumn(columnRef)];

        const {
            distributionType = 'normal',
            includeVisualizations = true,
            outputFormat = 'both' // 'both', 'png', 'excel'
        } = options;

        console.log(`\nColumn: ${colName}`);
        console.log(`Distribution: ${distributionType}`);
        console.log(`Format: ${outputFormat}`);

        const stats = this.getStatisticalWorkbook();

        const config = {
            samples: data,
            sampleName: colName,
            variableName: colName,
            unitName: options.unitName || 'units',
            distribution: distributionType,
            distributionParams: options.distributionParams || null,
            targetValue: options.targetValue || null,
            targetAnalysisType: options.targetAnalysisType || null,
            hypothesisTest: options.hypothesisTest || null,
            compareDistributions: options.compareDistributions || null,
            scenarioDescription: options.scenarioDescription || ''
        };

        // Run comprehensive analysis
        stats.analyzeDistribution(config);

        // Generate visualizations if requested
        if (includeVisualizations) {
            stats.generateAllVisualizations();
        }

        console.log('\n✓ Report Generated');
        console.log(`  Pages: ${stats.currentWorkbook.length}`);
        console.log(`  Visualizations: ${includeVisualizations ? Object.keys(stats.visualizations || {}).length : 0}`);

        // Store report
        const report = {
            timestamp: new Date(),
            columnName: colName,
            distribution: distributionType,
            statistics: stats.statistics,
            distributionAnalysis: stats.distributionAnalysis,
            goodnessOfFit: stats.goodnessOfFit,
            confidenceIntervals: stats.confidenceIntervals,
            parameterCI: stats.parameterConfidenceIntervals,
            workbook: stats.currentWorkbook,
            visualizations: includeVisualizations ? stats.visualizations : null
        };

        this.statisticalReports.push(report);
        this.addToHistory(`Generated statistical report for ${colName}`);

        return report;
    }

 

    // ==================== REGRESSION ANALYSIS ====================

    /**
     * Perform regression analysis
     */
    performRegression(config, options = {}) {
        console.log('\n📊 REGRESSION ANALYSIS');
        console.log('='.repeat(70));

        const {
            predictorColumns,
            responseColumn,
            type = 'linear'
        } = config;

        // Extract data
        const X = predictorColumns.map(col => this.extractColumnData(col, options));
        const y = this.extractColumnData(responseColumn, options);

        // Transpose X for proper format
        const n = X[0].length;
        const k = X.length;
        const X_matrix = [];
        for (let i = 0; i < n; i++) {
            X_matrix[i] = [];
            for (let j = 0; j < k; j++) {
                X_matrix[i][j] = X[j][i];
            }
        }

        const stats = this.getStatisticalWorkbook();
        
        const regressionConfig = {
            type: type,
            predictors: X_matrix,
            response: y,
            ...config
        };

        stats.performRegression(regressionConfig);

        const result = stats.regressionResults[type];

        console.log(`\nRegression Type: ${result.type}`);
        console.log(`\nModel Fit:`);
        console.log(`  R²: ${result.modelFit.rSquared.toFixed(6)}`);
        console.log(`  Adjusted R²: ${result.modelFit.adjustedRSquared.toFixed(6)}`);
        console.log(`  RMSE: ${result.modelFit.RMSE.toFixed(6)}`);

        console.log(`\nCoefficients:`);
        result.coefficients.forEach(coef => {
            console.log(`  ${coef.name}: ${coef.value.toFixed(6)} (p = ${coef.pValue.toFixed(6)})`);
        });

        // Store results
        this.statisticalAnalyses[`regression_${type}`] = {
            type: 'Regression Analysis',
            timestamp: new Date(),
            regressionType: type,
            result: result
        };

        this.addToHistory(`Performed ${type} regression`);

        return result;
    }

    // ==================== BAYESIAN INFERENCE ====================

    /**
     * Perform Bayesian inference
     */
    performBayesianInference(columnRef, priorConfig, options = {}) {
        console.log('\n📊 BAYESIAN INFERENCE');
        console.log('='.repeat(70));

        const data = this.extractColumnData(columnRef, options);
        const colName = this.headers[typeof columnRef === 'number' ? columnRef : this.letterToColumn(columnRef)];

        const stats = this.getStatisticalWorkbook();
        stats.loadFromArray(data);
        stats.sampleName = colName;
        stats.selectedDistribution = options.distributionType || 'normal';

        stats.fitDistribution();
        stats.performBayesianInference(priorConfig);

        console.log(`\nColumn: ${colName}`);
        console.log(`Prior: ${priorConfig.priorDistribution}`);
        console.log(`Posterior: ${stats.bayesianAnalysis.posterior.distribution}`);

        console.log('\n📈 POSTERIOR STATISTICS:');
        const posterior = stats.bayesianAnalysis.posterior;
        if (posterior.parameters) {
            console.log(`  Mean: ${posterior.posteriorMean || 'N/A'}`);
            console.log(`  Mode: ${posterior.posteriorMode || 'N/A'}`);
        }

        console.log('\n📊 CREDIBLE INTERVALS:');
        Object.entries(stats.bayesianAnalysis.credibleIntervals).forEach(([level, ci]) => {
            console.log(`  ${(parseFloat(level) * 100)}%: [${ci.lower.toFixed(6)}, ${ci.upper.toFixed(6)}]`);
        });

        // Store results
        this.statisticalAnalyses[`${colName}_bayesian`] = {
            type: 'Bayesian Inference',
            timestamp: new Date(),
            prior: priorConfig,
            posterior: stats.bayesianAnalysis
        };

        this.addToHistory(`Performed Bayesian inference on ${colName}`);

        return stats.bayesianAnalysis;
    }

    // ==================== POWER ANALYSIS ====================

    /**
     * Perform power analysis
     */
    performPowerAnalysis(config, options = {}) {
        console.log('\n📊 POWER ANALYSIS');
        console.log('='.repeat(70));

        const stats = this.getStatisticalWorkbook();
        stats.calculatePowerAnalysis(config);

        const powerResult = stats.powerAnalysis;

        console.log(`\nEffect Size: ${config.effectSize}`);
        console.log(`Alpha: ${config.alpha}`);
        console.log(`Desired Power: ${config.desiredPower}`);

        console.log(`\n📈 RESULTS:`);
        console.log(`  Required Sample Size: ${powerResult.requiredSampleSize.toFixed(0)}`);
        console.log(`  Current Power: ${(powerResult.currentPower.power * 100).toFixed(2)}%`);
        console.log(`  Minimum Detectable Effect: ${powerResult.minimumDetectableEffect.toFixed(6)}`);

        console.log(`\n💡 RECOMMENDATION:`);
        console.log(`  ${powerResult.recommendation}`);

        // Store results
        this.statisticalAnalyses['power_analysis'] = {
            type: 'Power Analysis',
            timestamp: new Date(),
            config: config,
            result: powerResult
        };

        this.addToHistory('Performed power analysis');

        return powerResult;
    }

    // ==================== META-ANALYSIS ====================

    /**
     * Perform meta-analysis on multiple studies
     */
    performMetaAnalysis(studies, options = {}) {
        console.log('\n📊 META-ANALYSIS');
        console.log('='.repeat(70));

        const stats = this.getStatisticalWorkbook();
        stats.performMetaAnalysis(studies);

        const metaResult = stats.metaAnalysis;

        console.log(`\nNumber of Studies: ${studies.length}`);

        console.log(`\n📈 FIXED EFFECT MODEL:`);
        console.log(`  Pooled Effect: ${metaResult.fixedEffect.pooledEffect.toFixed(6)}`);
        console.log(`  95% CI: [${metaResult.fixedEffect.confidenceInterval.lower.toFixed(6)}, ${metaResult.fixedEffect.confidenceInterval.upper.toFixed(6)}]`);
        console.log(`  p-value: ${metaResult.fixedEffect.pValue.toFixed(6)}`);

        console.log(`\n📈 RANDOM EFFECTS MODEL:`);
        console.log(`  Pooled Effect: ${metaResult.randomEffects.pooledEffect.toFixed(6)}`);
        console.log(`  95% CI: [${metaResult.randomEffects.confidenceInterval.lower.toFixed(6)}, ${metaResult.randomEffects.confidenceInterval.upper.toFixed(6)}]`);
        console.log(`  Tau²: ${metaResult.randomEffects.tauSquared.toFixed(6)}`);

        console.log(`\n📊 HETEROGENEITY:`);
        console.log(`  Q: ${metaResult.heterogeneity.Q.toFixed(4)}`);
        console.log(`  I²: ${metaResult.heterogeneity.I2}`);
        console.log(`  Interpretation: ${metaResult.heterogeneity.interpretation}`);

        // Store results
        this.statisticalAnalyses['meta_analysis'] = {
            type: 'Meta-Analysis',
            timestamp: new Date(),
            studies: studies,
            result: metaResult
        };

        this.addToHistory(`Performed meta-analysis on ${studies.length} studies`);

        return metaResult;
    }

    // ==================== TIME SERIES ANALYSIS ====================

    /**
     * Perform time series analysis
     */
    performTimeSeriesAnalysis(columnRef, config = {}, options = {}) {
        console.log('\n📊 TIME SERIES ANALYSIS');
        console.log('='.repeat(70));

        const data = this.extractColumnData(columnRef, options);
        const colName = this.headers[typeof columnRef === 'number' ? columnRef : this.letterToColumn(columnRef)];

        const stats = this.getStatisticalWorkbook();
        stats.performTimeSeriesAnalysis(data, config);

        const tsResult = stats.timeSeriesAnalysis;

        console.log(`\nColumn: ${colName}`);
        console.log(`Observations: ${tsResult.descriptive.observations}`);

        console.log(`\n📈 TREND ANALYSIS:`);
        console.log(`  ${tsResult.trend.linearTrend.interpretation}`);
        console.log(`  Mann-Kendall: ${tsResult.trend.mannKendall.interpretation}`);

        if (tsResult.seasonality) {
            console.log(`\n📊 SEASONALITY:`);
            console.log(`  Period: ${tsResult.seasonality.period}`);
            console.log(`  ${tsResult.seasonality.interpretation}`);
        }

        console.log(`\n🔍 STATIONARITY:`);
        console.log(`  ${tsResult.stationarity.recommendation}`);

        if (tsResult.arima) {
            console.log(`\n📈 ARIMA MODEL:`);
            console.log(`  Order: (${tsResult.arima.order.p}, ${tsResult.arima.order.d}, ${tsResult.arima.order.q})`);
            console.log(`  AIC: ${tsResult.arima.diagnostics.AIC.toFixed(4)}`);
            console.log(`  BIC: ${tsResult.arima.diagnostics.BIC.toFixed(4)}`);
        }

        // Store results
        this.statisticalAnalyses[`${colName}_timeseries`] = {
            type: 'Time Series Analysis',
            timestamp: new Date(),
            result: tsResult
        };

        this.addToHistory(`Performed time series analysis on ${colName}`);

        return tsResult;
    }

    // ==================== ANOVA ====================

    /**
     * Perform ANOVA on grouped data
     */
    performANOVA(groupColumns, options = {}) {
        console.log('\n📊 ANALYSIS OF VARIANCE (ANOVA)');
        console.log('='.repeat(70));

        const groups = groupColumns.map(col => this.extractColumnData(col, options));
        const groupNames = groupColumns.map(col => 
            this.headers[typeof col === 'number' ? col : this.letterToColumn(col)]
        );

        const stats = this.getStatisticalWorkbook();
        const anovaResult = stats.performANOVA(groups);

        console.log(`\nGroups: ${groupNames.join(', ')}`);
        console.log(`Number of Groups: ${anovaResult.groups}`);
        console.log(`Total Sample Size: ${anovaResult.totalSampleSize}`);

        console.log(`\n📈 ANOVA TABLE:`);
        console.log(`  Source          SS          df      MS          F         p-value`);
        console.log(`  Between    ${anovaResult.sumOfSquares.between.toFixed(4).padStart(10)}  ${anovaResult.degreesOfFreedom.between.toString().padStart(3)}  ${anovaResult.meanSquares.between.toFixed(4).padStart(10)}  ${anovaResult.fStatistic.toFixed(4).padStart(8)}  ${anovaResult.pValue.toFixed(6)}`);
        console.log(`  Within     ${anovaResult.sumOfSquares.within.toFixed(4).padStart(10)}  ${anovaResult.degreesOfFreedom.within.toString().padStart(3)}  ${anovaResult.meanSquares.within.toFixed(4).padStart(10)}`);
        console.log(`  Total      ${anovaResult.sumOfSquares.total.toFixed(4).padStart(10)}  ${anovaResult.degreesOfFreedom.total.toString().padStart(3)}`);

        console.log(`\n💡 CONCLUSION:`);
        console.log(`  ${anovaResult.conclusion}`);

        // Store results
        this.statisticalAnalyses['anova'] = {
            type: 'ANOVA',
            timestamp: new Date(),
            groups: groupNames,
            result: anovaResult
        };

        this.addToHistory(`Performed ANOVA on ${groupNames.length} groups`);

        return anovaResult;
    }

    // ==================== STATISTICAL WORKBOOK GENERATION ====================

 
    // ==================== SUMMARY AND STATUS METHODS ====================

    /**
     * Get statistical analysis summary
     */
    getStatisticalAnalysisSummary() {
        return {
            totalAnalyses: Object.keys(this.statisticalAnalyses).length,
            distributionFits: Object.keys(this.distributionFits).length,
            reports: this.statisticalReports.length,
            analyses: Object.entries(this.statisticalAnalyses).map(([key, analysis]) => ({
                key,
                type: analysis.type,
                timestamp: analysis.timestamp
            }))
        };
    }

    /**
     * Display statistical analysis summary
     */
    displayStatisticalSummary() {
        const summary = this.getStatisticalAnalysisSummary();

        console.log('\n📊 STATISTICAL ANALYSIS SUMMARY');
        console.log('='.repeat(70));
        console.log(`\nTotal Analyses: ${summary.totalAnalyses}`);
        console.log(`Distribution Fits: ${summary.distributionFits}`);
        console.log(`Reports Generated: ${summary.reports}`);

        if (summary.analyses.length > 0) {
            console.log('\n📈 Recent Analyses:');
            summary.analyses.slice(-10).forEach(analysis => {
                console.log(`  ${analysis.type}: ${analysis.key} (${analysis.timestamp.toLocaleString()})`);
            });
        }

        console.log('\n='.repeat(70));
    }

 
    // ==================== INTEGRATION WITH EXISTING METHODS ====================






    // ==================== GRAPHING CALCULATOR INTEGRATION ====================
    // (Keep all existing graphing calculator methods unchanged)

    /**
     * Initialize GraphingCalculatorGame instance
     */
    initializeGraphingCalculator() {
        if (!this.graphingCalculator) {
            this.graphingCalculator = new GraphingCalculatorGame();
        }
        return this.graphingCalculator;
    }

    /**
     * Get graphing calculator instance
     */
    getGraphingCalculator() {
        if (!this.graphingCalculator) {
            this.initializeGraphingCalculator();
        }
        return this.graphingCalculator;
    }

    // ==================== EQUATION METHODS ====================

    /**
     * Add equation to graphing calculator
     */
    addEquation(equation) {
        const calc = this.getGraphingCalculator();
        const result = calc.addEquation(equation);
        if (result) {
            this.addToHistory(`Added equation: ${equation}`);
            this.lastModified = new Date();
        }
        return result;
    }

    /**
     * Get equation history
     */
    getEquationHistory() {
        const calc = this.getGraphingCalculator();
        return calc.equationHistory;
    }

    /**
     * Get equation count
     */
    getEquationCount() {
        const calc = this.getGraphingCalculator();
        return calc.equationCounter;
    }

    // ==================== TRIANGLE METHODS ====================

    /**
     * Add triangle
     */
    addTriangle(input) {
        const calc = this.getGraphingCalculator();
        const result = calc.addTriangle(input);
        if (result) {
            this.addToHistory(`Added triangle: ${input}`);
            this.lastModified = new Date();
        }
        return result;
    }

    /**
     * Get triangle history
     */
    getTriangleHistory() {
        const calc = this.getGraphingCalculator();
        return calc.triangleHistory;
    }

    /**
     * Get triangle count
     */
    getTriangleCount() {
        const calc = this.getGraphingCalculator();
        return calc.triangleCounter;
    }

    // ==================== CIRCLE METHODS ====================

    /**
     * Add circle
     */
    addCircle(input) {
        const calc = this.getGraphingCalculator();
        const result = calc.addCircle(input);
        if (result) {
            this.addToHistory(`Added circle: ${input}`);
            this.lastModified = new Date();
        }
        return result;
    }

    /**
     * Get circle history
     */
    getCircleHistory() {
        const calc = this.getGraphingCalculator();
        return calc.circleHistory;
    }

    /**
     * Get circle count
     */
    getCircleCount() {
        const calc = this.getGraphingCalculator();
        return calc.circleCounter;
    }

    // ==================== RECTANGLE METHODS ====================

    /**
     * Add rectangle
     */
    addRectangle(input) {
        const calc = this.getGraphingCalculator();
        const result = calc.addRectangle(input);
        if (result) {
            this.addToHistory(`Added rectangle: ${input}`);
            this.lastModified = new Date();
        }
        return result;
    }

    /**
     * Get rectangle history
     */
    getRectangleHistory() {
        const calc = this.getGraphingCalculator();
        return calc.rectangleHistory;
    }

    /**
     * Get rectangle count
     */
    getRectangleCount() {
        const calc = this.getGraphingCalculator();
        return calc.rectangleCounter;
    }

    // ==================== SQUARE METHODS ====================

    /**
     * Add square
     */
    addSquare(input) {
        const calc = this.getGraphingCalculator();
        const result = calc.addSquare(input);
        if (result) {
            this.addToHistory(`Added square: ${input}`);
            this.lastModified = new Date();
        }
        return result;
    }

    /**
     * Get square history
     */
    getSquareHistory() {
        const calc = this.getGraphingCalculator();
        return calc.squareHistory;
    }

    /**
     * Get square count
     */
    getSquareCount() {
        const calc = this.getGraphingCalculator();
        return calc.squareCounter;
    }

    // ==================== PARALLELOGRAM METHODS ====================

    /**
     * Add parallelogram
     */
    addParallelogram(input) {
        const calc = this.getGraphingCalculator();
        const result = calc.addParallelogram(input);
        if (result) {
            this.addToHistory(`Added parallelogram: ${input}`);
            this.lastModified = new Date();
        }
        return result;
    }

    /**
     * Get parallelogram history
     */
    getParallelogramHistory() {
        const calc = this.getGraphingCalculator();
        return calc.parallelogramHistory;
    }

    /**
     * Get parallelogram count
     */
    getParallelogramCount() {
        const calc = this.getGraphingCalculator();
        return calc.parallelogramCounter;
    }

    // ==================== POLYGON METHODS ====================

    /**
     * Add polygon
     */
    addPolygon(input) {
        const calc = this.getGraphingCalculator();
        const result = calc.addPolygon(input);
        if (result) {
            this.addToHistory(`Added polygon: ${input}`);
            this.lastModified = new Date();
        }
        return result;
    }

    /**
     * Get polygon history
     */
    getPolygonHistory() {
        const calc = this.getGraphingCalculator();
        return calc.polygonHistory;
    }

    /**
     * Get polygon count
     */
    getPolygonCount() {
        const calc = this.getGraphingCalculator();
        return calc.polygonCounter;
    }

    // ==================== ELLIPSE METHODS ====================

    /**
     * Add ellipse
     */
    addEllipse(input) {
        const calc = this.getGraphingCalculator();
        const result = calc.addEllipse(input);
        if (result) {
            this.addToHistory(`Added ellipse: ${input}`);
            this.lastModified = new Date();
        }
        return result;
    }

    /**
     * Get ellipse history
     */
    getEllipseHistory() {
        const calc = this.getGraphingCalculator();
        return calc.ellipseHistory;
    }

    /**
     * Get ellipse count
     */
    getEllipseCount() {
        const calc = this.getGraphingCalculator();
        return calc.ellipseCounter;
    }

    // ==================== QUADRILATERAL METHODS ====================

    /**
     * Add quadrilateral
     */
    addQuadrilateral(input) {
        const calc = this.getGraphingCalculator();
        const result = calc.addQuadrilateral(input);
        if (result) {
            this.addToHistory(`Added quadrilateral: ${input}`);
            this.lastModified = new Date();
        }
        return result;
    }

    /**
     * Get quadrilateral history
     */
    getQuadrilateralHistory() {
        const calc = this.getGraphingCalculator();
        return calc.quadrilateralHistory;
    }

    /**
     * Get quadrilateral count
     */
    getQuadrilateralCount() {
        const calc = this.getGraphingCalculator();
        return calc.quadrilateralCounter;
    }

    // ==================== TRAPEZOID METHODS ====================

    /**
     * Add trapezoid
     */
    addTrapezoid(input) {
        const calc = this.getGraphingCalculator();
        const result = calc.addTrapezoid(input);
        if (result) {
            this.addToHistory(`Added trapezoid: ${input}`);
            this.lastModified = new Date();
        }
        return result;
    }

    /**
     * Get trapezoid history
     */
    getTrapezoidHistory() {
        const calc = this.getGraphingCalculator();
        return calc.trapezoidHistory;
    }

    /**
     * Get trapezoid count
     */
    getTrapezoidCount() {
        const calc = this.getGraphingCalculator();
        return calc.trapezoidCounter;
    }

    // ==================== SPHERE METHODS ====================

    /**
     * Add sphere
     */
    addSphere(input) {
        const calc = this.getGraphingCalculator();
        const result = calc.addSphere(input);
        if (result) {
            this.addToHistory(`Added sphere: ${input}`);
            this.lastModified = new Date();
        }
        return result;
    }

    /**
     * Get sphere history
     */
    getSphereHistory() {
        const calc = this.getGraphingCalculator();
        return calc.sphereHistory;
    }

    /**
     * Get sphere count
     */
    getSphereCount() {
        const calc = this.getGraphingCalculator();
        return calc.sphereCounter;
    }

    // ==================== CYLINDER METHODS ====================

    /**
     * Add cylinder
     */
    addCylinder(input) {
        const calc = this.getGraphingCalculator();
        const result = calc.addCylinder(input);
        if (result) {
            this.addToHistory(`Added cylinder: ${input}`);
            this.lastModified = new Date();
        }
        return result;
    }

    /**
     * Get cylinder history
     */
    getCylinderHistory() {
        const calc = this.getGraphingCalculator();
        return calc.cylinderHistory;
    }

    /**
     * Get cylinder count
     */
    getCylinderCount() {
        const calc = this.getGraphingCalculator();
        return calc.cylinderCounter;
    }

    // ==================== CONE METHODS ====================

    /**
     * Add cone
     */
    addCone(input) {
        const calc = this.getGraphingCalculator();
        const result = calc.addCone(input);
        if (result) {
            this.addToHistory(`Added cone: ${input}`);
            this.lastModified = new Date();
        }
        return result;
    }

    /**
     * Get cone history
     */
    getConeHistory() {
        const calc = this.getGraphingCalculator();
        return calc.coneHistory;
    }

    /**
     * Get cone count
     */
    getConeCount() {
        const calc = this.getGraphingCalculator();
        return calc.coneCounter;
    }

    // ==================== CUBE METHODS ====================

    /**
     * Add cube
     */
    addCube(input) {
        const calc = this.getGraphingCalculator();
        const result = calc.addCube(input);
        if (result) {
            this.addToHistory(`Added cube: ${input}`);
            this.lastModified = new Date();
        }
        return result;
    }

    /**
     * Get cube history
     */
    getCubeHistory() {
        const calc = this.getGraphingCalculator();
        return calc.cubeHistory;
    }

    /**
     * Get cube count
     */
    getCubeCount() {
        const calc = this.getGraphingCalculator();
        return calc.cubeCounter;
    }

    // ==================== VECTOR METHODS ====================

    /**
     * Add vector
     */
    addVector(input) {
        const calc = this.getGraphingCalculator();
        const result = calc.addVector(input);
        if (result) {
            this.addToHistory(`Added vector: ${input}`);
            this.lastModified = new Date();
        }
        return result;
    }

    /**
     * Get vector history
     */
    getVectorHistory() {
        const calc = this.getGraphingCalculator();
        return calc.vectorHistory;
    }

    /**
     * Get vector count
     */
    getVectorCount() {
        const calc = this.getGraphingCalculator();
        return calc.vectorCounter;
    }

    /**
     * Display vector history
     */
    displayVectorHistory() {
        const calc = this.getGraphingCalculator();
        calc.displayVectorHistory();
    }

    /**
     * Toggle vector settings
     */
    toggleVectorSettings() {
        const calc = this.getGraphingCalculator();
        calc.toggleVectorSettings();
    }

    // ==================== MATRIX METHODS ====================

    /**
     * Add matrix
     */
    addMatrix(input) {
        const calc = this.getGraphingCalculator();
        if (calc.addMatrix) {
            const result = calc.addMatrix(input);
            if (result) {
                this.addToHistory(`Added matrix: ${input}`);
                this.lastModified = new Date();
            }
            return result;
        }
        console.log("❌ Matrix functionality not yet implemented in GraphingCalculatorGame");
        return false;
    }

    /**
     * Get matrix history
     */
    getMatrixHistory() {
        const calc = this.getGraphingCalculator();
        return calc.matrixHistory || [];
    }

    /**
     * Get matrix count
     */
    getMatrixCount() {
        const calc = this.getGraphingCalculator();
        return calc.matrixCounter || 0;
    }

    /**
     * Display matrix history
     */
    displayMatrixHistory() {
        const calc = this.getGraphingCalculator();
        if (calc.displayMatrixHistory) {
            calc.displayMatrixHistory();
        } else {
            console.log("❌ Matrix functionality not yet implemented");
        }
    }

    /**
     * Toggle matrix settings
     */
    toggleMatrixSettings() {
        const calc = this.getGraphingCalculator();
        if (calc.toggleMatrixSettings) {
            calc.toggleMatrixSettings();
        } else {
            console.log("❌ Matrix functionality not yet implemented");
        }
    }

    // ==================== DISPLAY METHODS ====================

    /**
     * Display all available formulas
     */
    displayAllFormulas() {
        const calc = this.getGraphingCalculator();
        calc.displayAllFormulas();
    }

    /**
     * Display help menu
     */
    displayHelp() {
        const calc = this.getGraphingCalculator();
        calc.displayHelp();
    }

    /**
     * Display current graph
     */
    displayCurrentGraph() {
        const calc = this.getGraphingCalculator();
        calc.displayCurrentGraph();
    }

    /**
     * Display complete history
     */
    displayCompleteHistory() {
        console.log("\n📜 COMPLETE WORKBOOK HISTORY:");
        console.log("=".repeat(70));

        // Spreadsheet history
        if (this.history.length > 0) {
            console.log("\n📊 Spreadsheet Actions:");
            this.history.forEach((entry, index) => {
                console.log(`  ${index + 1}. ${entry}`);
            });
        }

        // Statistical analyses
        if (this.statisticalAnalyses.length > 0) {
            console.log("\n📈 Statistical Analyses:");
            this.statisticalAnalyses.forEach((analysis, index) => {
                console.log(`  ${index + 1}. ${analysis.type} - ${analysis.timestamp.toLocaleString()}`);
            });
        }

        // Graphing calculator history
        if (this.graphingCalculator) {
            const calc = this.graphingCalculator;
            
            if (calc.equationHistory.length > 0) {
                console.log("\n📈 Equation History:");
                calc.equationHistory.forEach(eq => console.log(`  ${eq}`));
            }

            const allShapes = [
                { name: 'Triangle', history: calc.triangleHistory, icon: '🔺' },
                { name: 'Circle', history: calc.circleHistory, icon: '⭕' },
                { name: 'Rectangle', history: calc.rectangleHistory, icon: '▭' },
                { name: 'Square', history: calc.squareHistory, icon: '▢' },
                { name: 'Parallelogram', history: calc.parallelogramHistory, icon: '▱' },
                { name: 'Polygon', history: calc.polygonHistory, icon: '⬡' },
                { name: 'Ellipse', history: calc.ellipseHistory, icon: '⬭' },
                { name: 'Quadrilateral', history: calc.quadrilateralHistory, icon: '⬢' },
                { name: 'Trapezoid', history: calc.trapezoidHistory, icon: '⏢' },
                { name: 'Sphere', history: calc.sphereHistory, icon: '🌐' },
                { name: 'Cylinder', history: calc.cylinderHistory, icon: '🛢️' },
                { name: 'Cone', history: calc.coneHistory, icon: '🔺' },
                { name: 'Cube', history: calc.cubeHistory, icon: '🧊' }
            ];

            allShapes.forEach(shape => {
                if (shape.history && shape.history.length > 0) {
                    console.log(`\n${shape.icon} ${shape.name} History:`);
                    shape.history.forEach(item => console.log(`  ${item.id}. ${item.input}`));
                }
            });

            if (calc.vectorHistory && calc.vectorHistory.length > 0) {
                console.log("\n➡️  Vector History:");
                calc.vectorHistory.forEach(vec => console.log(`  ${vec.id}. ${vec.input}`));
            }

            if (calc.matrixHistory && calc.matrixHistory.length > 0) {
                console.log("\n🔢 Matrix History:");
                calc.matrixHistory.forEach(mat => {
                    const desc = mat.description ? ` (${mat.description})` : '';
                    console.log(`  ${mat.id}. ${mat.input}${desc}`);
                });
            }
        }

        if (this.getTotalItems() === 0) {
            console.log("\nNo items added yet.");
        }

        console.log("=".repeat(70));
    }

    /**
     * Display shape history by type
     */
    displayShapeHistory(shapeName) {
        const calc = this.getGraphingCalculator();
        calc.displayShapeHistory(shapeName, calc[`${shapeName}History`]);
    }

    // ==================== THEME & SETTINGS METHODS ====================

    /**
     * Change graphing calculator theme
     */
    changeGraphTheme(themeName) {
        const calc = this.getGraphingCalculator();
        const result = calc.changeTheme(themeName);
        if (result) {
            this.addToHistory(`Changed graph theme to: ${themeName}`);
            this.lastModified = new Date();
        }
        return result;
    }

    /**
     * Set viewing window for graphs
     */
    setGraphViewingWindow(xMin, xMax, yMin, yMax) {
        const calc = this.getGraphingCalculator();
        const result = calc.setViewingWindow(xMin, xMax, yMin, yMax);
        if (result) {
            this.addToHistory(`Updated viewing window: x[${xMin}, ${xMax}], y[${yMin}, ${yMax}]`);
            this.lastModified = new Date();
        }
        return result;
    }

    // ==================== STATUS & UTILITY METHODS ====================

    /**
     * Get calculator status
     */
    getCalculatorStatus() {
        const calc = this.getGraphingCalculator();
        return calc.getCalculatorStatus();
    }

    /**
     * Get total graphing items count
     */
    getTotalGraphingItems() {
        if (!this.graphingCalculator) return 0;
        const calc = this.graphingCalculator;
        return calc.getTotalItemCount();
    }

    /**
     * Get total items (spreadsheet + graphing + statistical)
     */
    getTotalItems() {
        return this.history.length + 
               this.getTotalGraphingItems() + 
               this.statisticalAnalyses.length;
    }

    /**
     * Clear all graphing items
     */
    clearAllGraphingItems() {
        const calc = this.getGraphingCalculator();
        calc.clearAll();
        this.addToHistory('Cleared all graphing calculator items');
        this.lastModified = new Date();
    }

    /**
     * Undo last graphing item
     */
    undoLastGraphingItem() {
        const calc = this.getGraphingCalculator();
        calc.undoLast();
        this.addToHistory('Undone last graphing calculator action');
        this.lastModified = new Date();
    }

    /**
     * Save current graph
     */
    async saveCurrentGraph() {
        const calc = this.getGraphingCalculator();
        await calc.saveCurrentGraph();
    }



    // ==================== UTILITY METHODS ====================

    /**
     * Add to history
     */
    addToHistory(action) {
        this.history.push({
            action: action,
            timestamp: new Date()
        });
    }


 

getDiagramCounts() {
    return {
        charts: this.charts.length,
        anatomicalDiagrams: this.anatomicalDiagrams.length,
        crossSectionDiagrams: this.crossSectionDiagrams.length,
        stereochemistryDiagrams: this.stereochemistryDiagrams.length,
        geometricShapes: this.geometricShapes.length,
        graphs: this.graphs.length,
        total:
            this.charts.length +
            this.anatomicalDiagrams.length +
            this.crossSectionDiagrams.length +
            this.stereochemistryDiagrams.length +
            this.geometricShapes.length +
            this.graphs.length
    };
}

// Update getCompleteWorkbookStatus:
getCompleteWorkbookStatus() {
    const calc = this.graphingCalculator;
    const statWb = this.statisticalWorkbook;
    
    return {
        metadata: {
            name: this.sheetName,
            created: this.createdDate,
            lastModified: this.lastModified,
            author: this.author
        },
        spreadsheet: {
            rows: this.data.length,
            columns: this.headers.length,
            formulas: Object.keys(this.formulas).length,
            calculations: Object.keys(this.calculations).length
        },
        visualizations: {
            charts: this.charts.length,
            anatomicalDiagrams: this.anatomicalDiagrams.length,
            crossSectionDiagrams: this.crossSectionDiagrams.length,
            stereochemistryDiagrams: this.stereochemistryDiagrams.length,
            geometricShapes: this.geometricShapes.length,
            graphs: this.graphs.length,
            total: this.getDiagramCounts().total
        },
        statisticalAnalysis: statWb ? {
            samplesLoaded: statWb.rawSamples.length,
            distribution: statWb.selectedDistribution,
            analysesPerformed: this.statisticalAnalyses.length,
            visualizationsGenerated: statWb.visualizations ? Object.keys(statWb.visualizations).length : 0
        } : {
            samplesLoaded: 0,
            distribution: null,
            analysesPerformed: 0,
            visualizationsGenerated: 0
        },
        graphingCalculator: calc ? {
            equations: calc.equationCounter,
            triangles: calc.triangleCounter,
            circles: calc.circleCounter,
            rectangles: calc.rectangleCounter,
            squares: calc.squareCounter,
            parallelograms: calc.parallelogramCounter,
            polygons: calc.polygonCounter,
            ellipses: calc.ellipseCounter,
            quadrilaterals: calc.quadrilateralCounter,
            trapezoids: calc.trapezoidCounter,
            spheres: calc.sphereCounter,
            cylinders: calc.cylinderCounter,
            cones: calc.coneCounter,
            cubes: calc.cubeCounter,
            vectors: calc.vectorCounter,
            matrices: calc.matrixCounter || 0,
            total: calc.getTotalItemCount()
        } : {
            equations: 0,
            total: 0
        },
        history: {
            spreadsheetActions: this.history.length,
            statisticalAnalyses: this.statisticalAnalyses.length,
            totalActions: this.history.length + this.statisticalAnalyses.length
        }
    };
}

// Update displayCompleteWorkbookStatus to include graphs:
displayCompleteWorkbookStatus() {
    const status = this.getCompleteWorkbookStatus();

    console.log("\n" + "=".repeat(70));
    console.log("📊 COMPLETE WORKBOOK STATUS");
    console.log("=".repeat(70));

    console.log("\n📋 METADATA:");
    console.log(`  Name: ${status.metadata.name}`);
    console.log(`  Author: ${status.metadata.author}`);
    console.log(`  Created: ${status.metadata.created.toLocaleString()}`);
    console.log(`  Last Modified: ${status.metadata.lastModified.toLocaleString()}`);

    console.log("\n📊 SPREADSHEET:");
    console.log(`  Rows: ${status.spreadsheet.rows}`);
    console.log(`  Columns: ${status.spreadsheet.columns}`);
    console.log(`  Formulas: ${status.spreadsheet.formulas}`);
    console.log(`  Calculations: ${status.spreadsheet.calculations}`);

    console.log("\n📈 VISUALIZATIONS:");
    console.log(`  Charts: ${status.visualizations.charts}`);
    console.log(`  Anatomical Diagrams: ${status.visualizations.anatomicalDiagrams}`);
    console.log(`  Cross-Section Diagrams: ${status.visualizations.crossSectionDiagrams}`);
    console.log(`  Stereochemistry Diagrams: ${status.visualizations.stereochemistryDiagrams}`);
    console.log(`  Geometric Shapes: ${status.visualizations.geometricShapes}`);
    console.log(`  Mathematical Graphs: ${status.visualizations.graphs}`);
    console.log(`  Total Visualizations: ${status.visualizations.total}`);

    console.log("\n📊 STATISTICAL ANALYSIS:");
    console.log(`  Samples Loaded: ${status.statisticalAnalysis.samplesLoaded}`);
    console.log(`  Distribution: ${status.statisticalAnalysis.distribution || 'None'}`);
    console.log(`  Analyses Performed: ${status.statisticalAnalysis.analysesPerformed}`);
    console.log(`  Visualizations Generated: ${status.statisticalAnalysis.visualizationsGenerated}`);

    console.log("\n🧮 GRAPHING CALCULATOR:");
    console.log(`  📈 Equations: ${status.graphingCalculator.equations}`);
    console.log(`  🔺 Triangles: ${status.graphingCalculator.triangles}`);
    console.log(`  ⭕ Circles: ${status.graphingCalculator.circles}`);
    console.log(`  ▭ Rectangles: ${status.graphingCalculator.rectangles}`);
    console.log(`  ▢ Squares: ${status.graphingCalculator.squares}`);
    console.log(`  ▱ Parallelograms: ${status.graphingCalculator.parallelograms}`);
    console.log(`  ⬡ Polygons: ${status.graphingCalculator.polygons}`);
    console.log(`  ⬭ Ellipses: ${status.graphingCalculator.ellipses}`);
    console.log(`  ⬢ Quadrilaterals: ${status.graphingCalculator.quadrilaterals}`);
    console.log(`  ⏢ Trapezoids: ${status.graphingCalculator.trapezoids}`);
    console.log(`  🌐 Spheres: ${status.graphingCalculator.spheres}`);
    console.log(`  🛢️ Cylinders: ${status.graphingCalculator.cylinders}`);
    console.log(`  🔺 Cones: ${status.graphingCalculator.cones}`);
    console.log(`  🧊 Cubes: ${status.graphingCalculator.cubes}`);
    console.log(`  ➡️  Vectors: ${status.graphingCalculator.vectors}`);
    console.log(`  🔢 Matrices: ${status.graphingCalculator.matrices}`);
    console.log(`  📊 Total Graphing Items: ${status.graphingCalculator.total}`);

    console.log("\n📜 HISTORY:");
    console.log(`  Total Actions: ${status.history.totalActions}`);
    console.log(`  Spreadsheet: ${status.history.spreadsheetActions}`);
    console.log(`  Statistical: ${status.history.statisticalAnalyses}`);

    console.log("\n=".repeat(70));
}

// Update clearAll to include graphs:
clearAll() {
    this.data = [];
    this.headers = [];
    this.formulas = {};
    this.calculations = {};
    this.charts = [];
    this.anatomicalDiagrams = [];
    this.crossSectionDiagrams = [];
    this.stereochemistryDiagrams = [];
    this.geometricShapes = [];
    this.graphs = [];
    this.statisticalAnalyses = [];
    
    if (this.graphingCalculator) {
        this.graphingCalculator.clearAll();
    }
    
    if (this.statisticalWorkbook) {
        this.statisticalWorkbook = null;
    }
    
    this.addToHistory('Cleared all workbook data including graphs');
    this.lastModified = new Date();
}

// Update exportCompleteWorkbook to include graphs:
exportCompleteWorkbook(filename = null) {
    if (!filename) {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        filename = `complete_workbook_${timestamp}.json`;
    }

    const completeData = {
        metadata: {
            name: this.sheetName,
            created: this.createdDate,
            lastModified: this.lastModified,
            author: this.author,
            version: '4.0.0'
        },
        spreadsheet: {
            headers: this.headers,
            data: this.data,
            formulas: this.formulas,
            calculations: this.calculations
        },
        charts: this.charts,
        diagrams: {
            anatomical: this.anatomicalDiagrams,
            crossSection: this.crossSectionDiagrams,
            stereochemistry: this.stereochemistryDiagrams,
            geometric: this.geometricShapes
        },
        graphs: this.graphs,
        statisticalAnalyses: this.statisticalAnalyses,
        graphingCalculator: this.graphingCalculator ? {
            equationHistory: this.graphingCalculator.equationHistory,
            triangleHistory: this.graphingCalculator.triangleHistory,
            circleHistory: this.graphingCalculator.circleHistory,
            rectangleHistory: this.graphingCalculator.rectangleHistory,
            squareHistory: this.graphingCalculator.squareHistory,
            parallelogramHistory: this.graphingCalculator.parallelogramHistory,
            polygonHistory: this.graphingCalculator.polygonHistory,
            ellipseHistory: this.graphingCalculator.ellipseHistory,
            quadrilateralHistory: this.graphingCalculator.quadrilateralHistory,
            trapezoidHistory: this.graphingCalculator.trapezoidHistory,
            sphereHistory: this.graphingCalculator.sphereHistory,
            cylinderHistory: this.graphingCalculator.cylinderHistory,
            coneHistory: this.graphingCalculator.coneHistory,
            cubeHistory: this.graphingCalculator.cubeHistory,
            vectorHistory: this.graphingCalculator.vectorHistory,
            matrixHistory: this.graphingCalculator.matrixHistory
        } : null,
        history: this.history
    };

    fs.writeFileSync(filename, JSON.stringify(completeData, null, 2));

    this.addToHistory(`Exported complete workbook with graphs to ${filename}`);
    console.log(`✅ Complete workbook exported to: ${filename}`);
    return filename;
}




// Add to EnhancedSpreadsheetWorkbook class:

/**
 * Get all available graph types
 */
getAvailableGraphs() {
    const graphs = {};
    const categories = GraphRegistry.getAllCategories();
    
    categories.forEach(category => {
        graphs[category] = GraphRegistry.getGraphsByCategory(category);
    });

    return graphs;
}

/**
 * Get graphs by category
 */
getGraphsByCategory(category) {
    return GraphRegistry.getGraphsByCategory(category);
}

/**
 * Search graphs
 */
searchGraphs(query) {
    return GraphRegistry.searchGraphs(query);
}

/**
 * Get graph help
 */
getGraphHelp(graphKey) {
    const graph = GraphRegistry.getGraph(graphKey);
    if (!graph) {
        return { error: 'Graph not found' };
    }

    return {
        name: graph.name,
        category: graph.category,
        description: graph.description,
        equation: graph.equation,
        usage: graph.usage,
        examples: graph.examples,
        configParameters: graph.configParameters,
        calculations: graph.calculations,
        defaultOptions: graph.defaultOptions
    };
}

/**
 * Add graph to workbook
 */
addGraph(config) {
    const {
        key,
        title = null,
        points = [],
        segments = null,
        options = {},
        filename = null
    } = config;

    // Validate graph exists
    const graph = GraphRegistry.getGraph(key);
    if (!graph) {
        throw new Error(`Graph '${key}' not found`);
    }

    // Prepare configuration
    const graphConfig = key === 'piecewise' ? { segments } : { points };
    const mergedConfig = { ...graph.defaultOptions, ...graphConfig, ...options };

    // Validate configuration
    const validation = GraphRegistry.validateGraphConfig(key, mergedConfig);
    if (!validation.valid) {
        throw new Error(`Invalid configuration: ${validation.errors.join(', ')}`);
    }

    // Store graph
    const graphObj = {
        id: `graph_${this.graphs.length + 1}`,
        key,
        title: title || `${graph.name} ${this.graphs.length + 1}`,
        config: mergedConfig,
        filename: filename || `${this.sheetName}_${key}_${Date.now()}.png`,
        createdAt: new Date(),
        category: graph.category
    };

    this.graphs.push(graphObj);
    this.addToHistory(`Added graph: ${graph.name}`);
    this.lastModified = new Date();

    return graphObj;
}

/**
 * Update graph
 */
updateGraph(graphIndex, updates) {
    if (graphIndex < 0 || graphIndex >= this.graphs.length) {
        throw new Error(`Graph index ${graphIndex} out of range`);
    }

    const graph = this.graphs[graphIndex];

    if (updates.title) graph.title = updates.title;
    if (updates.config) {
        graph.config = { ...graph.config, ...updates.config };

        // Validate updated configuration
        const validation = GraphRegistry.validateGraphConfig(graph.key, graph.config);
        if (!validation.valid) {
            throw new Error(`Invalid configuration: ${validation.errors.join(', ')}`);
        }
    }

    this.addToHistory(`Updated graph: ${graph.title}`);
    this.lastModified = new Date();

    return graph;
}

/**
 * Remove graph
 */
removeGraph(graphIndex) {
    if (graphIndex < 0 || graphIndex >= this.graphs.length) {
        throw new Error(`Graph index ${graphIndex} out of range`);
    }

    const removed = this.graphs.splice(graphIndex, 1);
    this.addToHistory(`Removed graph: ${removed[0].title}`);
    this.lastModified = new Date();

    return removed[0];
}

/**
 * Render graph to PNG
 */
// Update renderGraphToPNG method in EnhancedSpreadsheetWorkbook
async renderGraphToPNG(graphIndex) {
    if (graphIndex < 0 || graphIndex >= this.graphs.length) {
        throw new Error(`Graph index ${graphIndex} out of range`);
    }

    const graphConfig = this.graphs[graphIndex];
    const graphInfo = GraphRegistry.getGraph(graphConfig.key);

    const width = 1000;
    const height = 800;

    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    this.graphRenderer.canvas = canvas;
    this.graphRenderer.ctx = ctx;

    const graphData = this.graphRenderer.renderGraph(
        graphConfig.key,
        0,
        0,
        width,
        height,
        graphConfig.config
    );

    // Use encode for @napi-rs/canvas
    const buffer = await canvas.encode('png');
    fs.writeFileSync(graphConfig.filename, buffer);

    return {
        id: graphConfig.id,
        filename: graphConfig.filename,
        size: buffer.length,
        graph: graphInfo.name,
        calculations: graphData
    };
}

// Update renderAllGraphs to be async
async renderAllGraphs() {
    const results = [];

    for (let index = 0; index < this.graphs.length; index++) {
        try {
            const result = await this.renderGraphToPNG(index);
            results.push(result);
        } catch (error) {
            results.push({
                error: error.message,
                index,
                graph: this.graphs[index].key
            });
        }
    }

    return results;
}

/**
 * List all graphs in workbook
 */
listGraphs() {
    return this.graphs.map((graph, index) => ({
        index,
        id: graph.id,
        name: graph.title,
        type: graph.key,
        category: graph.category,
        pointCount: graph.config.points ? graph.config.points.length : 
                   (graph.config.segments ? graph.config.segments.length : 0),
        filename: graph.filename,
        created: graph.createdAt
    }));
}

/**
 * Get graph statistics
 */
getGraphStatistics() {
    const stats = GraphRegistry.getGraphStatistics();

    return {
        ...stats,
        inWorkbook: this.graphs.length,
        byCategoryInWorkbook: this.graphs.reduce((acc, graph) => {
            acc[graph.category] = (acc[graph.category] || 0) + 1;
            return acc;
        }, {})
    };
}

/**
 * Get graph calculations
 */
getGraphCalculations(graphIndex) {
    if (graphIndex < 0 || graphIndex >= this.graphs.length) {
        throw new Error(`Graph index ${graphIndex} out of range`);
    }

    const graphConfig = this.graphs[graphIndex];
    
    // Calculate without rendering
    const tempCanvas = createCanvas(100, 100);
    const tempCtx = tempCanvas.getContext('2d');
    const tempRenderer = new GraphRenderer(tempCanvas, tempCtx);
    
    const graphData = tempRenderer.calculateGraph(graphConfig.key, graphConfig.config);
    
    return {
        graph: graphConfig.title,
        type: graphConfig.key,
        ...graphData
    };
}

/**
 * Suggest graphs based on data patterns
 */
suggestGraphsFromData(columnX, columnY) {
    const xIndex = this.headers.indexOf(columnX);
    const yIndex = this.headers.indexOf(columnY);

    if (xIndex === -1 || yIndex === -1) {
        throw new Error('Column not found');
    }

    const points = this.data
        .map(row => [parseFloat(row[xIndex]), parseFloat(row[yIndex])])
        .filter(([x, y]) => !isNaN(x) && !isNaN(y));

    if (points.length < 3) {
        throw new Error('Insufficient data points for graph suggestion');
    }

    const suggestions = [];
    const tempRenderer = new GraphRenderer();

    // Try linear
    try {
        const linear = tempRenderer.calculateLinear(points);
        suggestions.push({
            key: 'linear',
            priority: linear.rSquared * 100,
            rSquared: linear.rSquared,
            equation: linear.equation,
            reason: `Strong linear fit (R² = ${linear.rSquared.toFixed(4)})`
        });
    } catch (e) {}

    // Try quadratic
    try {
        const quadratic = tempRenderer.calculateQuadratic(points);
        suggestions.push({
            key: 'quadratic',
            priority: quadratic.rSquared * 100,
            rSquared: quadratic.rSquared,
            equation: quadratic.equation,
            reason: `Quadratic fit (R² = ${quadratic.rSquared.toFixed(4)})`
        });
    } catch (e) {}

    // Try exponential (if all y > 0)
    if (points.every(([, y]) => y > 0)) {
        try {
            const exponential = tempRenderer.calculateExponential(points);
            suggestions.push({
                key: 'exponential',
                priority: exponential.rSquared * 100,
                rSquared: exponential.rSquared,
                equation: exponential.equation,
                reason: `Exponential fit (R² = ${exponential.rSquared.toFixed(4)})`
            });
        } catch (e) {}
    }

    // Try logarithmic (if all x > 0)
    if (points.every(([x]) => x > 0)) {
        try {
            const logarithmic = tempRenderer.calculateLogarithmic(points);
            suggestions.push({
                key: 'logarithmic',
                priority: logarithmic.rSquared * 100,
                rSquared: logarithmic.rSquared,
                equation: logarithmic.equation,
                reason: `Logarithmic fit (R² = ${logarithmic.rSquared.toFixed(4)})`
            });
        } catch (e) {}
    }

    // Try power (if all x, y > 0)
    if (points.every(([x, y]) => x > 0 && y > 0)) {
        try {
            const power = tempRenderer.calculatePower(points);
            suggestions.push({
                key: 'power',
                priority: power.rSquared * 100,
                rSquared: power.rSquared,
                equation: power.equation,
                reason: `Power fit (R² = ${power.rSquared.toFixed(4)})`
            });
        } catch (e) {}
    }

    // Sort by R² (highest first)
    suggestions.sort((a, b) => b.rSquared - a.rSquared);

    return {
        dataPoints: points.length,
        suggestions: suggestions.slice(0, 5), // Top 5 suggestions
        bestFit: suggestions[0]
    };
}

/**
 * Add graph from spreadsheet data
 */
addGraphFromData(config) {
    const {
        columnX,
        columnY,
        graphKey = null,
        title = null,
        options = {}
    } = config;

    const xIndex = this.headers.indexOf(columnX);
    const yIndex = this.headers.indexOf(columnY);

    if (xIndex === -1 || yIndex === -1) {
        throw new Error('Column not found');
    }

    const points = this.data
        .map(row => [parseFloat(row[xIndex]), parseFloat(row[yIndex])])
        .filter(([x, y]) => !isNaN(x) && !isNaN(y));

    if (points.length < 2) {
        throw new Error('Insufficient data points');
    }

    // Auto-select best graph if not specified
    let selectedGraphKey = graphKey;
    if (!selectedGraphKey) {
        const suggestions = this.suggestGraphsFromData(columnX, columnY);
        selectedGraphKey = suggestions.bestFit.key;
    }

    // Add graph
    return this.addGraph({
        key: selectedGraphKey,
        title: title || `${columnY} vs ${columnX}`,
        points,
        options
    });
}

/**
 * Export graphs to folder
 */
exportGraphsToFolder(folderPath) {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }

    const results = [];

    this.graphs.forEach((graph, index) => {
        try {
            const originalFilename = graph.filename;
            graph.filename = `${folderPath}/graph_${path.basename(graph.filename)}`;

            const result = this.renderGraphToPNG(index);
            results.push(result);

            graph.filename = originalFilename;
        } catch (error) {
            results.push({
                error: error.message,
                graph: graph.key,
                index
            });
        }
    });

    return {
        folder: folderPath,
        results,
        summary: {
            exported: results.filter(r => !r.error).length,
            errors: results.filter(r => r.error).length
        }
    };
}

/**
 * Generate graphs catalog
 */
generateGraphsCatalog() {
    return {
        metadata: {
            generated: new Date().toISOString(),
            workbook: this.sheetName,
            author: this.author
        },
        categories: GraphRegistry.getAllCategories().reduce((acc, category) => {
            acc[category] = {
                available: Object.keys(GraphRegistry.getGraphsByCategory(category)).length,
                inWorkbook: this.graphs.filter(g => g.category === category).length,
                graphs: GraphRegistry.getGraphsByCategory(category)
            };
            return acc;
        }, {}),
        totalGraphs: {
            available: GraphRegistry.getAllGraphs().length,
            inWorkbook: this.graphs.length
        },
        statistics: this.getGraphStatistics()
    };
}







    // ========================================================================
    // STEREOCHEMISTRY DIAGRAM MANAGEMENT METHODS
    // ========================================================================

    // Get available stereochemistry diagrams
    getAvailableStereochemistryDiagrams() {
        const diagrams = {};
        const categories = StereochemistryDiagramsRegistry.getAllCategories();

        categories.forEach(category => {
            diagrams[category] = StereochemistryDiagramsRegistry.getDiagramsByCategory(category);
        });

        return diagrams;
    }

    // Get stereochemistry diagram suggestions based on context
    suggestStereochemistryDiagrams(context = null) {
        const suggestions = [];

        // Check headers for chemistry keywords
        const hasChemistry = this.headers.some(h => 
            /molecule|compound|chemical|bond|atom|formula|reaction|chemistry/i.test(h)
        );
        
        const hasOrganic = this.headers.some(h => 
            /carbon|hydrocarbon|alkane|alkene|alkyne|organic|methane|ethane|benzene/i.test(h)
        );
        
        const hasInorganic = this.headers.some(h => 
            /sulfur|fluoride|oxide|chloride|inorganic|metal|ion/i.test(h)
        );

        const hasBiochemistry = this.headers.some(h => 
            /glucose|amino|protein|carbohydrate|lipid|biochem/i.test(h)
        );

        // Check data for chemical formulas
        const detectedFormulas = new Set();
        this.data.forEach(row => {
            Object.values(row).forEach(value => {
                if (typeof value === 'string') {
                    // Common chemical formula patterns
                    const formulaPatterns = [
                        /\bCH4\b/i, /\bC2H6\b/i, /\bC2H4\b/i, /\bH2O\b/i, 
                        /\bNH3\b/i, /\bCO2\b/i, /\bSF6\b/i, /\bC6H12O6\b/i
                    ];
                    
                    formulaPatterns.forEach(pattern => {
                        if (pattern.test(value)) {
                            const match = value.match(pattern)[0].toUpperCase().replace(/\s/g, '');
                            detectedFormulas.add(match);
                        }
                    });
                }
            });
        });

        // Add suggestions based on detected formulas
        detectedFormulas.forEach(formula => {
            const found = StereochemistryDiagramsRegistry.findByFormula(formula);
            Object.keys(found).forEach(key => {
                if (!suggestions.find(s => s.key === key)) {
                    suggestions.push({
                        key,
                        priority: 10,
                        reason: `Chemical formula ${formula} detected in data`
                    });
                }
            });
        });

        // Add context-based suggestions
        if (hasOrganic || hasChemistry) {
            if (!suggestions.find(s => s.key === 'methane')) {
                suggestions.push({ key: 'methane', priority: 9, reason: 'Organic chemistry context detected' });
            }
            if (!suggestions.find(s => s.key === 'ethane')) {
                suggestions.push({ key: 'ethane', priority: 8, reason: 'Hydrocarbon molecules' });
            }
            if (!suggestions.find(s => s.key === 'ethene')) {
                suggestions.push({ key: 'ethene', priority: 7, reason: 'Alkene structures' });
            }
        }

        if (hasInorganic) {
            if (!suggestions.find(s => s.key === 'water')) {
                suggestions.push({ key: 'water', priority: 9, reason: 'Inorganic chemistry context' });
            }
            if (!suggestions.find(s => s.key === 'ammonia')) {
                suggestions.push({ key: 'ammonia', priority: 8, reason: 'Simple inorganic molecules' });
            }
            if (!suggestions.find(s => s.key === 'sulfurHexafluoride')) {
                suggestions.push({ key: 'sulfurHexafluoride', priority: 7, reason: 'Complex inorganic structures' });
            }
        }

        if (hasBiochemistry) {
            if (!suggestions.find(s => s.key === 'glucose')) {
                suggestions.push({ key: 'glucose', priority: 9, reason: 'Biochemistry/carbohydrate data detected' });
            }
        }

        // General suggestions if no specific context
        if (suggestions.length === 0) {
            suggestions.push(
                { key: 'methane', priority: 7, reason: 'Common chemistry molecule' },
                { key: 'water', priority: 6, reason: 'Universal molecule' },
                { key: 'carbonDioxide', priority: 5, reason: 'Environmental chemistry' }
            );
        }

        return suggestions.sort((a, b) => b.priority - a.priority);
    }

    // Get stereochemistry diagram help
    getStereochemistryDiagramHelp(diagramKey) {
        const diagram = StereochemistryDiagramsRegistry.getDiagram(diagramKey);
        if (!diagram) {
            return { error: 'Stereochemistry diagram not found' };
        }

        return {
            name: diagram.name,
            formula: diagram.formula,
            category: diagram.category,
            description: diagram.description,
            geometry: diagram.geometry,
            bondAngles: diagram.bondAngles,
            centralAtom: diagram.centralAtom,
            atoms: diagram.atoms.length,
            defaultOptions: diagram.defaultOptions
        };
    }

    // Find stereochemistry diagram by formula
    findStereochemistryDiagramByFormula(formula) {
        return StereochemistryDiagramsRegistry.findByFormula(formula);
    }

    // Add stereochemistry diagram to workbook
    addStereochemistryDiagram(diagramConfig) {
        const {
            key,
            title = null,
            options = {},
            filename = null
        } = diagramConfig;

        // Validate diagram exists
        const diagram = StereochemistryDiagramsRegistry.getDiagram(key);
        if (!diagram) {
            throw new Error(`Stereochemistry diagram '${key}' not found`);
        }

        // Merge options
        const mergedOptions = { ...diagram.defaultOptions, ...options };
        if (title) mergedOptions.title = title;

        // Store diagram config
        const diagramObj = {
            id: `stereochem_${this.stereochemistryDiagrams.length + 1}`,
            key,
            type: 'stereochemistry',
            title: mergedOptions.title,
            options: mergedOptions,
            filename: filename || `${this.sheetName}_${key}_${Date.now()}.png`,
            createdAt: new Date(),
            category: diagram.category,
            formula: diagram.formula
        };

        this.stereochemistryDiagrams.push(diagramObj);
        this.addToHistory(`Added stereochemistry diagram: ${diagram.name}`);

        return diagramObj;
    }

    // Render stereochemistry diagram to PNG
    renderStereochemistryDiagramToPNG(diagramIndex) {
        if (diagramIndex < 0 || diagramIndex >= this.stereochemistryDiagrams.length) {
            throw new Error(`Stereochemistry diagram index ${diagramIndex} out of range`);
        }

        const diagramConfig = this.stereochemistryDiagrams[diagramIndex];
        
        const width = diagramConfig.options.width || 800;
        const height = diagramConfig.options.height || 600;
        const canvas = createCanvas(width, height);
        const ctx = canvas.getContext('2d');

        // Update renderer's canvas
        this.stereochemistryRenderer.canvas = canvas;
        this.stereochemistryRenderer.ctx = ctx;

        // Render the diagram
        this.stereochemistryRenderer.renderDiagram(
            diagramConfig.key,
            0,
            0,
            width,
            height,
            diagramConfig.options
        );

        // Save to file
        const buffer = canvas.toBuffer('image/png');
        fs.writeFileSync(diagramConfig.filename, buffer);

        return {
            id: diagramConfig.id,
            filename: diagramConfig.filename,
            size: buffer.length,
            category: diagramConfig.category,
            type: 'stereochemistry',
            formula: diagramConfig.formula
        };
    }

    // Render all stereochemistry diagrams
    renderAllStereochemistryDiagrams() {
        const results = [];

        this.stereochemistryDiagrams.forEach((_, index) => {
            try {
                const result = this.renderStereochemistryDiagramToPNG(index);
                results.push(result);
            } catch (error) {
                results.push({
                    error: error.message,
                    index
                });
            }
        });

        return results;
    }

    // Get stereochemistry diagram statistics
    getStereochemistryDiagramStatistics() {
        const stats = StereochemistryDiagramsRegistry.getDiagramStats();
        return {
            totalAvailable: Object.values(stats).reduce((sum, cat) => sum + cat.count, 0),
            byCategory: stats,
            diagramsInWorkbook: this.stereochemistryDiagrams.length
        };
    }

    // Search stereochemistry diagrams
    searchStereochemistryDiagrams(query) {
        return StereochemistryDiagramsRegistry.searchDiagrams(query);
    }

    // List all stereochemistry diagrams in workbook
    listStereochemistryDiagrams() {
        return this.stereochemistryDiagrams.map((diagram, index) => ({
            index,
            id: diagram.id,
            name: diagram.title,
            formula: diagram.formula,
            type: StereochemistryDiagramsRegistry.getDiagram(diagram.key).name,
            category: diagram.category,
            filename: diagram.filename,
            created: diagram.createdAt
        }));
    }

    // Remove stereochemistry diagram
    removeStereochemistryDiagram(diagramIndex) {
        if (diagramIndex < 0 || diagramIndex >= this.stereochemistryDiagrams.length) {
            throw new Error(`Stereochemistry diagram index ${diagramIndex} out of range`);
        }

        const removed = this.stereochemistryDiagrams.splice(diagramIndex, 1);
        this.addToHistory(`Removed stereochemistry diagram: ${removed[0].title}`);
        return removed[0];
    }

    // Update stereochemistry diagram
    updateStereochemistryDiagram(diagramIndex, updates) {
        if (diagramIndex < 0 || diagramIndex >= this.stereochemistryDiagrams.length) {
            throw new Error(`Stereochemistry diagram index ${diagramIndex} out of range`);
        }

        const diagram = this.stereochemistryDiagrams[diagramIndex];
        
        if (updates.title) diagram.title = updates.title;
        if (updates.options) {
            diagram.options = { ...diagram.options, ...updates.options };
        }

        this.addToHistory(`Updated stereochemistry diagram: ${diagram.title}`);
        return diagram;
    }

    // Batch add stereochemistry diagrams by category
    addStereochemistryDiagramsByCategory(category, options = {}) {
        const diagrams = StereochemistryDiagramsRegistry.getDiagramsByCategory(category);
        const results = [];

        Object.keys(diagrams).forEach(key => {
            try {
                const result = this.addStereochemistryDiagram({
                    key,
                    options,
                    filename: `${this.sheetName}_${key}_${Date.now()}.png`
                });
                results.push(result);
            } catch (error) {
                results.push({ key, error: error.message });
            }
        });

        return results;
    }

    // Auto-detect and add stereochemistry diagrams from data
    addStereochemistryDiagramsFromData(options = {}) {
        const results = [];
        const foundFormulas = new Set();

        // Search through data for chemical formulas
        this.data.forEach(row => {
            Object.values(row).forEach(value => {
                if (typeof value === 'string') {
                    // Common chemical formula patterns
                    const formulaPattern = /\b([A-Z][a-z]?\d*)+\b/g;
                    const matches = value.match(formulaPattern);
                    
                    if (matches) {
                        matches.forEach(formula => {
                            const found = StereochemistryDiagramsRegistry.findByFormula(formula);
                            Object.keys(found).forEach(key => {
                                if (!foundFormulas.has(key)) {
                                    foundFormulas.add(key);
                                    try {
                                        const result = this.addStereochemistryDiagram({
                                            key,
                                            options,
                                            filename: `${this.sheetName}_${key}_${Date.now()}.png`
                                        });
                                        results.push({
                                            ...result,
                                            detectedIn: 'data',
                                            formula
                                        });
                                    } catch (error) {
                                        results.push({
                                            key,
                                            formula,
                                            error: error.message
                                        });
                                    }
                                }
                            });
                        });
                    }
                }
            });
        });

        return {
            results,
            totalAdded: results.filter(r => !r.error).length,
            formulas: Array.from(foundFormulas)
        };
    }

    // Export stereochemistry diagrams to a folder
    exportStereochemistryDiagramsToFolder(folderPath) {
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
        }

        const results = [];

        this.stereochemistryDiagrams.forEach((diagram, index) => {
            try {
                const originalFilename = diagram.filename;
                diagram.filename = `${folderPath}/${path.basename(diagram.filename)}`;
                
                const result = this.renderStereochemistryDiagramToPNG(index);
                results.push(result);
                
                // Restore original filename
                diagram.filename = originalFilename;
            } catch (error) {
                results.push({
                    index,
                    error: error.message
                });
            }
        });

        return {
            folder: folderPath,
            results,
            totalExported: results.filter(r => !r.error).length
        };
    }

    // Generate stereochemistry comparison report
    generateStereochemistryComparisonReport(formulas) {
        const report = {
            title: 'Molecular Structure Comparison',
            molecules: [],
            summary: {}
        };

        formulas.forEach(formula => {
            const found = this.findStereochemistryDiagramByFormula(formula);
            Object.entries(found).forEach(([key, diagram]) => {
                report.molecules.push({
                    key,
                    name: diagram.name,
                    formula: diagram.formula,
                    geometry: diagram.geometry,
                    bondAngles: diagram.bondAngles,
                    centralAtom: diagram.centralAtom,
                    category: diagram.category
                });
            });
        });

        // Generate summary
        const geometries = {};
        report.molecules.forEach(mol => {
            geometries[mol.geometry] = (geometries[mol.geometry] || 0) + 1;
        });

        report.summary = {
            totalMolecules: report.molecules.length,
            geometryDistribution: geometries,
            categories: [...new Set(report.molecules.map(m => m.category))]
        };

        return report;
    }

    // Get molecular geometry information
    getMolecularGeometryInfo(geometry) {
        const geometryInfo = {
            'tetrahedral': {
                bondAngles: [109.5],
                coordination: 4,
                description: 'Four atoms arranged at corners of a tetrahedron',
                examples: ['CH₄', 'CCl₄', 'NH₄⁺']
            },
            'bent': {
                bondAngles: [104.5, 120],
                coordination: 2,
                description: 'Two atoms with lone pairs causing bent shape',
                examples: ['H₂O', 'H₂S', 'SO₂']
            },
            'trigonal_pyramidal': {
                bondAngles: [107],
                coordination: 3,
                description: 'Three atoms with one lone pair forming pyramid',
                examples: ['NH₃', 'PH₃', 'H₃O⁺']
            },
            'trigonal_planar': {
                bondAngles: [120],
                coordination: 3,
                description: 'Three atoms in flat triangular arrangement',
                examples: ['BF₃', 'CO₃²⁻', 'C₂H₄']
            },
            'linear': {
                bondAngles: [180],
                coordination: 2,
                description: 'Two atoms in straight line',
                examples: ['CO₂', 'HCN', 'BeF₂']
            },
            'octahedral': {
                bondAngles: [90, 180],
                coordination: 6,
                description: 'Six atoms arranged at corners of octahedron',
                examples: ['SF₆', 'Fe(CN)₆³⁻', 'Co(NH₃)₆³⁺']
            }
        };

        return geometryInfo[geometry] || { error: 'Geometry not found' };
    }

    // Generate molecular properties table
    generateMolecularPropertiesTable() {
        const molecules = this.stereochemistryDiagrams;
        
        if (molecules.length === 0) {
            return { error: 'No stereochemistry diagrams in workbook' };
        }

        const table = {
            headers: ['Name', 'Formula', 'Geometry', 'Bond Angles', 'Central Atom', 'Category'],
            rows: []
        };

        molecules.forEach(mol => {
            const diagram = StereochemistryDiagramsRegistry.getDiagram(mol.key);
            if (diagram) {
                table.rows.push([
                    diagram.name,
                    diagram.formula,
                    diagram.geometry.replace(/_/g, ' '),
                    diagram.bondAngles.join(', ') + '°',
                    diagram.centralAtom || 'N/A',
                    diagram.category
                ]);
            }
        });

        return table;
    }

    // Export stereochemistry diagrams with metadata
    exportStereochemistryWithMetadata(folderPath) {
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
        }

        const results = [];
        const metadata = {
            exportDate: new Date().toISOString(),
            workbookName: this.sheetName,
            molecules: []
        };

        this.stereochemistryDiagrams.forEach((diagram, index) => {
            try {
                const originalFilename = diagram.filename;
                diagram.filename = `${folderPath}/${path.basename(diagram.filename)}`;
                
                const result = this.renderStereochemistryDiagramToPNG(index);
                results.push(result);
                
                // Add metadata
                const diagramInfo = StereochemistryDiagramsRegistry.getDiagram(diagram.key);
                metadata.molecules.push({
                    filename: path.basename(diagram.filename),
                    name: diagramInfo.name,
                    formula: diagramInfo.formula,
                    geometry: diagramInfo.geometry,
                    bondAngles: diagramInfo.bondAngles,
                    centralAtom: diagramInfo.centralAtom,
                    category: diagramInfo.category
                });
                
                diagram.filename = originalFilename;
            } catch (error) {
                results.push({
                    error: error.message,
                    diagram: diagram.key
                });
            }
        });

        // Write metadata JSON file
        const metadataPath = `${folderPath}/metadata.json`;
        fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));

        return {
            folder: folderPath,
            results,
            metadataFile: metadataPath,
            totalExported: results.filter(r => !r.error).length
        };
    }


  // ========================================================================
    // CROSS-SECTION DIAGRAM MANAGEMENT METHODS
    // ========================================================================

    // Get available cross-section diagrams
   // ========================================================================
    // CROSS-SECTION DIAGRAM MANAGEMENT METHODS
    // ========================================================================

    // Get available cross-section diagrams
    getAvailableCrossSectionDiagrams() {
        const diagrams = {};
        const categories = CrossSectionDiagramsRegistry.getAllCategories();

        categories.forEach(category => {
            diagrams[category] = CrossSectionDiagramsRegistry.getDiagramsByCategory(category);
        });

        return diagrams;
    }

    // Get cross-section diagram suggestions based on context
    suggestCrossSectionDiagrams(context = null) {
        const suggestions = [];

        // Check headers for relevant keywords
        const hasBotany = this.headers.some(h => 
            /plant|leaf|stem|root|seed|fruit|flower|botany/i.test(h)
        );
        
        const hasZoology = this.headers.some(h => 
            /animal|insect|fish|brain|intestine|gill|zoology/i.test(h)
        );
        
        const hasGeography = this.headers.some(h => 
            /earth|mountain|volcano|river|valley|soil|glacier|coast|geology|landform/i.test(h)
        );

        const hasAgriculture = this.headers.some(h => 
            /farm|crop|agriculture|irrigation|greenhouse|compost|pond|cultivat/i.test(h)
        );

        // Add suggestions based on context
        if (hasBotany) {
            suggestions.push(
                { key: 'dicotLeafCrossSection', priority: 10, reason: 'Plant anatomy data detected' },
                { key: 'dicotStemCrossSection', priority: 9, reason: 'Plant structure context' },
                { key: 'rootTipCrossSection', priority: 8, reason: 'Plant growth data' },
                { key: 'seedCrossSection', priority: 7, reason: 'Plant reproduction context' }
            );
        }

        if (hasZoology) {
            suggestions.push(
                { key: 'brainCrossSection', priority: 10, reason: 'Animal anatomy detected' },
                { key: 'smallIntestineCrossSection', priority: 9, reason: 'Digestive system context' },
                { key: 'fishGillsCrossSection', priority: 8, reason: 'Aquatic anatomy' },
                { key: 'insectThoraxCrossSection', priority: 7, reason: 'Invertebrate anatomy' }
            );
        }

        if (hasGeography) {
            suggestions.push(
                { key: 'earthCrossSection', priority: 10, reason: 'Geological data detected' },
                { key: 'volcanoCrossSection', priority: 9, reason: 'Volcanic/geological context' },
                { key: 'riverValleyCrossSection', priority: 8, reason: 'Landform data' },
                { key: 'soilProfileCrossSection', priority: 7, reason: 'Soil science context' }
            );
        }

        if (hasAgriculture) {
            suggestions.push(
                { key: 'greenhouseCrossSection', priority: 10, reason: 'Agricultural structure detected' },
                { key: 'soilProfileCrossSection', priority: 9, reason: 'Soil/cultivation data' },
                { key: 'terraceFarmCrossSection', priority: 8, reason: 'Farming systems context' },
                { key: 'fishPondCrossSection', priority: 7, reason: 'Aquaculture data' }
            );
        }

        // General suggestions if no specific context
        if (suggestions.length === 0) {
            suggestions.push(
                { key: 'dicotLeafCrossSection', priority: 7, reason: 'Popular biology diagram' },
                { key: 'earthCrossSection', priority: 6, reason: 'Earth science education' },
                { key: 'soilProfileCrossSection', priority: 5, reason: 'Environmental science' }
            );
        }

        return suggestions.sort((a, b) => b.priority - a.priority);
    }

    // Get cross-section diagram help
    getCrossSectionDiagramHelp(diagramKey) {
        const diagram = CrossSectionDiagramsRegistry.getDiagram(diagramKey);
        if (!diagram) {
            return { error: 'Cross-section diagram not found' };
        }

        return {
            name: diagram.name,
            category: diagram.category,
            description: diagram.description,
            usage: diagram.usage,
            examples: diagram.examples,
            dataRequired: diagram.dataRequired,
            defaultOptions: diagram.defaultOptions
        };
    }

    // Add cross-section diagram to workbook
    addCrossSectionDiagram(diagramConfig) {
        const {
            key,
            title = null,
            options = {},
            filename = null
        } = diagramConfig;

        // Validate diagram exists
        const diagram = CrossSectionDiagramsRegistry.getDiagram(key);
        if (!diagram) {
            throw new Error(`Cross-section diagram '${key}' not found`);
        }

        // Merge options
        const mergedOptions = { ...diagram.defaultOptions, ...options };
        if (title) mergedOptions.title = title;

        // Store diagram config
        const diagramObj = {
            id: `crosssection_${this.crossSectionDiagrams.length + 1}`,
            key,
            type: 'crossSection',
            title: mergedOptions.title,
            options: mergedOptions,
            filename: filename || `${this.sheetName}_${key}_${Date.now()}.png`,
            createdAt: new Date(),
            category: diagram.category
        };

        this.crossSectionDiagrams.push(diagramObj);
        this.addToHistory(`Added cross-section diagram: ${diagram.name}`);

        return diagramObj;
    }

    // Render cross-section diagram to PNG
    renderCrossSectionDiagramToPNG(diagramIndex) {
        if (diagramIndex < 0 || diagramIndex >= this.crossSectionDiagrams.length) {
            throw new Error(`Cross-section diagram index ${diagramIndex} out of range`);
        }

        const diagramConfig = this.crossSectionDiagrams[diagramIndex];
        
        const width = diagramConfig.options.width || 800;
        const height = diagramConfig.options.height || 600;
        const canvas = createCanvas(width, height);
        const ctx = canvas.getContext('2d');

        // Update renderer's canvas
        this.crossSectionRenderer.canvas = canvas;
        this.crossSectionRenderer.ctx = ctx;

        // Render the diagram
        this.crossSectionRenderer.renderDiagram(
            diagramConfig.key,
            50,
            80,
            width - 100,
            height - 100,
            diagramConfig.options
        );

        // Save to file
        const buffer = canvas.toBuffer('image/png');
        fs.writeFileSync(diagramConfig.filename, buffer);

        return {
            id: diagramConfig.id,
            filename: diagramConfig.filename,
            size: buffer.length,
            category: diagramConfig.category,
            type: 'crossSection'
        };
    }

    // Render all cross-section diagrams
    renderAllCrossSectionDiagrams() {
        const results = [];

        this.crossSectionDiagrams.forEach((_, index) => {
            try {
                const result = this.renderCrossSectionDiagramToPNG(index);
                results.push(result);
            } catch (error) {
                results.push({
                    error: error.message,
                    index
                });
            }
        });

        return results;
    }

    // Get cross-section diagram statistics
    getCrossSectionDiagramStatistics() {
        const stats = CrossSectionDiagramsRegistry.getDiagramStats();
        return {
            totalAvailable: Object.values(stats).reduce((sum, cat) => sum + cat.count, 0),
            byCategory: stats,
            diagramsInWorkbook: this.crossSectionDiagrams.length
        };
    }

    // Search cross-section diagrams
    searchCrossSectionDiagrams(query) {
        return CrossSectionDiagramsRegistry.searchDiagrams(query);
    }

    // List all cross-section diagrams in workbook
    listCrossSectionDiagrams() {
        return this.crossSectionDiagrams.map((diagram, index) => ({
            index,
            id: diagram.id,
            name: diagram.title,
            type: CrossSectionDiagramsRegistry.getDiagram(diagram.key).name,
            category: diagram.category,
            filename: diagram.filename,
            created: diagram.createdAt
        }));
    }

    // Remove cross-section diagram
    removeCrossSectionDiagram(diagramIndex) {
        if (diagramIndex < 0 || diagramIndex >= this.crossSectionDiagrams.length) {
            throw new Error(`Cross-section diagram index ${diagramIndex} out of range`);
        }

        const removed = this.crossSectionDiagrams.splice(diagramIndex, 1);
        this.addToHistory(`Removed cross-section diagram: ${removed[0].title}`);
        return removed[0];
    }

    // Update cross-section diagram
    updateCrossSectionDiagram(diagramIndex, updates) {
        if (diagramIndex < 0 || diagramIndex >= this.crossSectionDiagrams.length) {
            throw new Error(`Cross-section diagram index ${diagramIndex} out of range`);
        }

        const diagram = this.crossSectionDiagrams[diagramIndex];
        
        if (updates.title) diagram.title = updates.title;
        if (updates.options) {
            diagram.options = { ...diagram.options, ...updates.options };
        }

        this.addToHistory(`Updated cross-section diagram: ${diagram.title}`);
        return diagram;
    }

    // Batch add cross-section diagrams by category
    addCrossSectionDiagramsByCategory(category, options = {}) {
        const diagrams = CrossSectionDiagramsRegistry.getDiagramsByCategory(category);
        const results = [];

        Object.keys(diagrams).forEach(key => {
            try {
                const result = this.addCrossSectionDiagram({
                    key,
                    options,
                    filename: `${this.sheetName}_${key}_${Date.now()}.png`
                });
                results.push(result);
            } catch (error) {
                results.push({ key, error: error.message });
            }
        });

        return results;
    }

    // Export cross-section diagrams to a folder
    exportCrossSectionDiagramsToFolder(folderPath) {
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
        }

        const results = [];

        this.crossSectionDiagrams.forEach((diagram, index) => {
            try {
                const originalFilename = diagram.filename;
                diagram.filename = `${folderPath}/${path.basename(diagram.filename)}`;
                
                const result = this.renderCrossSectionDiagramToPNG(index);
                results.push(result);
                
                // Restore original filename
                diagram.filename = originalFilename;
            } catch (error) {
                results.push({
                    index,
                    error: error.message
                });
            }
        });

        return {
            folder: folderPath,
            results,
            totalExported: results.filter(r => !r.error).length
        };
    }


const EndSection3 = "close"
