

// ============================================================================
// UPDATED exportSelectedVisualizations() - ALL DIAGRAMS
// ============================================================================

async exportSelectedVisualizations(baseFilename, options = {}) {
    const {
        format = 'both',
        includeCharts = false,
        includeAnatomicalDiagrams = false,
        includeChemistryDiagrams = false,
        includePhysicsDiagrams = false,
        includeCrossSectionDiagrams = false,
        includeStereochemistryDiagrams = false,
        includeGeometricShapes = false,
        includeGraphs = false,
        chartIndices = [],
        anatomicalIndices = [],
        chemistryIndices = [],
        physicsIndices = [],
        crossSectionIndices = [],
        stereochemistryIndices = [],
        geometricIndices = [],
        graphIndices = []
    } = options;

    const exportOptions = {
        includeCharts,
        includeAnatomicalDiagrams,
        includeChemistryDiagrams,
        includePhysicsDiagrams,
        includeCrossSectionDiagrams,
        includeStereochemistryDiagrams,
        includeGeometricShapes,
        includeGraphs,
        chartIndices,
        anatomicalIndices,
        chemistryIndices,
        physicsIndices,
        crossSectionIndices,
        stereochemistryIndices,
        geometricIndices,
        graphIndices
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

// ============================================================================
// UPDATED exportCompleteWorkbook() - ALL DIAGRAMS
// ============================================================================

async exportCompleteWorkbook(baseFilename = 'complete_workbook', format = 'both') {
    const results = {
        png: null,
        excel: null
    };

    const exportOptions = {
        includeCharts: true,
        includeAnatomicalDiagrams: true,
        includeChemistryDiagrams: true,
        includePhysicsDiagrams: true,
        includeCrossSectionDiagrams: true,
        includeStereochemistryDiagrams: true,
        includeGeometricShapes: true,
        includeGraphs: true
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
                chemistryDiagrams: this.chemistryDiagrams.length,
                physicsDiagrams: this.physicsDiagrams.length,
                crossSectionDiagrams: this.crossSectionDiagrams.length,
                stereochemistryDiagrams: this.stereochemistryDiagrams.length,
                geometricShapes: this.geometricShapes.length,
                graphs: this.graphs.length,
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

// ============================================================================
// UPDATED QUICK EXPORT METHODS - ALL DIAGRAMS
// ============================================================================

async exportWithCharts(filename = 'workbook_with_charts') {
    return this.exportSelectedVisualizations(filename, {
        format: 'both',
        includeCharts: true
    });
}

async exportWithAnatomicalDiagrams(filename = 'workbook_with_biology') {
    return this.exportSelectedVisualizations(filename, {
        format: 'both',
        includeAnatomicalDiagrams: true
    });
}

async exportWithChemistryDiagrams(filename = 'workbook_with_chemistry') {
    return this.exportSelectedVisualizations(filename, {
        format: 'both',
        includeChemistryDiagrams: true
    });
}

async exportWithPhysicsDiagrams(filename = 'workbook_with_physics') {
    return this.exportSelectedVisualizations(filename, {
        format: 'both',
        includePhysicsDiagrams: true
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

async exportWithGeometricShapes(filename = 'workbook_with_geometric') {
    return this.exportSelectedVisualizations(filename, {
        format: 'both',
        includeGeometricShapes: true
    });
}

async exportWithGraphs(filename = 'workbook_with_graphs') {
    return this.exportSelectedVisualizations(filename, {
        format: 'both',
        includeGraphs: true
    });
}

async exportWithAllScienceDiagrams(filename = 'workbook_with_science') {
    return this.exportSelectedVisualizations(filename, {
        format: 'both',
        includeAnatomicalDiagrams: true,
        includeChemistryDiagrams: true,
        includePhysicsDiagrams: true
    });
}

async exportWithAllDiagrams(filename = 'workbook_with_all_diagrams') {
    return this.exportSelectedVisualizations(filename, {
        format: 'both',
        includeAnatomicalDiagrams: true,
        includeChemistryDiagrams: true,
        includePhysicsDiagrams: true,
        includeCrossSectionDiagrams: true,
        includeStereochemistryDiagrams: true,
        includeGeometricShapes: true,
        includeGraphs: true
    });
}

async exportWithAllVisualizations(filename = 'workbook_complete') {
    return this.exportSelectedVisualizations(filename, {
        format: 'both',
        includeCharts: true,
        includeAnatomicalDiagrams: true,
        includeChemistryDiagrams: true,
        includePhysicsDiagrams: true,
        includeCrossSectionDiagrams: true,
        includeStereochemistryDiagrams: true,
        includeGeometricShapes: true,
        includeGraphs: true
    });
}

// ============================================================================
// UPDATED getVisualizationSummary() - ALL DIAGRAMS
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
        chemistryDiagrams: {
            count: this.chemistryDiagrams.length,
            diagrams: this.chemistryDiagrams.map(d => ({
                title: d.title,
                category: d.category,
                formula: d.formula
            }))
        },
        physicsDiagrams: {
            count: this.physicsDiagrams.length,
            diagrams: this.physicsDiagrams.map(d => ({
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
        geometricShapes: {
            count: this.geometricShapes.length,
            shapes: this.geometricShapes.map(d => ({
                title: d.title,
                type: d.key,
                dimensionality: d.dimensionality
            }))
        },
        graphs: {
            count: this.graphs.length,
            graphs: this.graphs.map(g => ({
                title: g.title,
                type: g.key,
                category: g.category,
                pointCount: g.config.points ? g.config.points.length : 0
            }))
        },
        total:
            this.charts.length +
            this.anatomicalDiagrams.length +
            this.chemistryDiagrams.length +
            this.physicsDiagrams.length +
            this.crossSectionDiagrams.length +
            this.stereochemistryDiagrams.length +
            this.geometricShapes.length +
            this.graphs.length
    };
}

// ============================================================================
// UPDATED hasAnyVisualizations() - ALL DIAGRAMS
// ============================================================================

hasAnyVisualizations() {
    return (
        this.charts.length > 0 ||
        this.anatomicalDiagrams.length > 0 ||
        this.chemistryDiagrams.length > 0 ||
        this.physicsDiagrams.length > 0 ||
        this.crossSectionDiagrams.length > 0 ||
        this.stereochemistryDiagrams.length > 0 ||
        this.geometricShapes.length > 0 ||
        this.graphs.length > 0
    );
}

// ============================================================================
// UPDATED getVisualizationTypes() - ALL DIAGRAMS
// ============================================================================

getVisualizationTypes() {
    const types = [];
    if (this.charts.length > 0) types.push('charts');
    if (this.anatomicalDiagrams.length > 0) types.push('anatomical');
    if (this.chemistryDiagrams.length > 0) types.push('chemistry');
    if (this.physicsDiagrams.length > 0) types.push('physics');
    if (this.crossSectionDiagrams.length > 0) types.push('crossSection');
    if (this.stereochemistryDiagrams.length > 0) types.push('stereochemistry');
    if (this.geometricShapes.length > 0) types.push('geometric');
    if (this.graphs.length > 0) types.push('graphs');
    return types;
}

// ============================================================================
// UPDATED getDiagramCounts() - ALL DIAGRAMS
// ============================================================================

getDiagramCounts() {
    return {
        charts: this.charts.length,
        anatomical: this.anatomicalDiagrams.length,
        chemistry: this.chemistryDiagrams.length,
        physics: this.physicsDiagrams.length,
        crossSection: this.crossSectionDiagrams.length,
        stereochemistry: this.stereochemistryDiagrams.length,
        geometric: this.geometricShapes.length,
        graphs: this.graphs.length,
        total:
            this.charts.length +
            this.anatomicalDiagrams.length +
            this.chemistryDiagrams.length +
            this.physicsDiagrams.length +
            this.crossSectionDiagrams.length +
            this.stereochemistryDiagrams.length +
            this.geometricShapes.length +
            this.graphs.length
    };
}

// ============================================================================
// UPDATED exportAllVisualizationsSeparately() - ALL DIAGRAMS
// ============================================================================

async exportAllVisualizationsSeparately(folderPath) {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }

    const results = {
        charts: [],
        anatomical: [],
        chemistry: [],
        physics: [],
        crossSection: [],
        stereochemistry: [],
        geometric: [],
        graphs: [],
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

    // Export anatomical diagrams (Biology)
    for (let i = 0; i < this.anatomicalDiagrams.length; i++) {
        try {
            const diagram = this.anatomicalDiagrams[i];
            const filename = `${folderPath}/biology_${i + 1}_${diagram.title.replace(/[^a-z0-9]/gi, '_')}.png`;

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
            console.log(`✓ Biology ${i + 1}: ${diagram.title}`);
        } catch (error) {
            results.errors.push({ type: 'anatomical', index: i, error: error.message });
            console.error(`✗ Biology ${i + 1} failed: ${error.message}`);
        }
    }

    // Export chemistry diagrams
    for (let i = 0; i < this.chemistryDiagrams.length; i++) {
        try {
            const diagram = this.chemistryDiagrams[i];
            const filename = `${folderPath}/chemistry_${i + 1}_${diagram.title.replace(/[^a-z0-9]/gi, '_')}.png`;

            const canvas = createCanvas(
                diagram.options.width || 800,
                diagram.options.height || 700
            );
            const ctx = canvas.getContext('2d');

            this.chemistryDiagramRenderer.canvas = canvas;
            this.chemistryDiagramRenderer.ctx = ctx;
            this.renderSpecificChemistryDiagram(diagram.key, diagram.options);

            const buffer = canvas.toBuffer('image/png');
            fs.writeFileSync(filename, buffer);

            results.chemistry.push({ success: true, filename, title: diagram.title });
            console.log(`✓ Chemistry ${i + 1}: ${diagram.title}`);
        } catch (error) {
            results.errors.push({ type: 'chemistry', index: i, error: error.message });
            console.error(`✗ Chemistry ${i + 1} failed: ${error.message}`);
        }
    }

    // Export physics diagrams
    for (let i = 0; i < this.physicsDiagrams.length; i++) {
        try {
            const diagram = this.physicsDiagrams[i];
            const filename = `${folderPath}/physics_${i + 1}_${diagram.title.replace(/[^a-z0-9]/gi, '_')}.png`;

            const canvas = createCanvas(
                diagram.options.width || 800,
                diagram.options.height || 700
            );
            const ctx = canvas.getContext('2d');

            this.physicsDiagramRenderer.canvas = canvas;
            this.physicsDiagramRenderer.ctx = ctx;
            this.renderSpecificPhysicsDiagram(diagram.key, diagram.options);

            const buffer = canvas.toBuffer('image/png');
            fs.writeFileSync(filename, buffer);

            results.physics.push({ success: true, filename, title: diagram.title });
            console.log(`✓ Physics ${i + 1}: ${diagram.title}`);
        } catch (error) {
            results.errors.push({ type: 'physics', index: i, error: error.message });
            console.error(`✗ Physics ${i + 1} failed: ${error.message}`);
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

    // Export geometric shapes
    for (let i = 0; i < this.geometricShapes.length; i++) {
        try {
            const shape = this.geometricShapes[i];
            const filename = `${folderPath}/geometric_${i + 1}_${shape.title.replace(/[^a-z0-9]/gi, '_')}.png`;

            const canvas = createCanvas(
                shape.options.width || 800,
                shape.options.height || 600
            );
            const ctx = canvas.getContext('2d');

            this.geometricRenderer.canvas = canvas;
            this.geometricRenderer.ctx = ctx;
            this.geometricRenderer.renderShape(
                shape.key,
                0,
                0,
                shape.options.width || 800,
                shape.options.height || 600,
                shape.config
            );

            const buffer = canvas.toBuffer('image/png');
            fs.writeFileSync(filename, buffer);

            results.geometric.push({ success: true, filename, title: shape.title });
            console.log(`✓ Geometric Shape ${i + 1}: ${shape.title}`);
        } catch (error) {
            results.errors.push({ type: 'geometric', index: i, error: error.message });
            console.error(`✗ Geometric Shape ${i + 1} failed: ${error.message}`);
        }
    }

    // Export graphs
    for (let i = 0; i < this.graphs.length; i++) {
        try {
            const graph = this.graphs[i];
            const filename = `${folderPath}/graph_${i + 1}_${graph.title.replace(/[^a-z0-9]/gi, '_')}.png`;

            const canvas = createCanvas(1000, 800);
            const ctx = canvas.getContext('2d');

            this.graphRenderer.canvas = canvas;
            this.graphRenderer.ctx = ctx;

            const graphData = this.graphRenderer.renderGraph(
                graph.key,
                0,
                0,
                1000,
                800,
                graph.config
            );

            const buffer = canvas.toBuffer('image/png');
            fs.writeFileSync(filename, buffer);

            results.graphs.push({ 
                success: true, 
                filename, 
                title: graph.title,
                equation: graphData.equation,
                rSquared: graphData.rSquared
            });
            console.log(`✓ Graph ${i + 1}: ${graph.title}`);
        } catch (error) {
            results.errors.push({ type: 'graph', index: i, error: error.message });
            console.error(`✗ Graph ${i + 1} failed: ${error.message}`);
        }
    }

    console.log('\n✓ Export complete!\n');

    return {
        folder: folderPath,
        results,
        summary: {
            chartsExported: results.charts.length,
            anatomicalExported: results.anatomical.length,
            chemistryExported: results.chemistry.length,
            physicsExported: results.physics.length,
            crossSectionExported: results.crossSection.length,
            stereochemistryExported: results.stereochemistry.length,
            geometricExported: results.geometric.length,
            graphsExported: results.graphs.length,
            totalExported:
                results.charts.length +
                results.anatomical.length +
                results.chemistry.length +
                results.physics.length +
                results.crossSection.length +
                results.stereochemistry.length +
                results.geometric.length +
                results.graphs.length,
            errors: results.errors.length
        }
    };
}

const EndSection7 = "close"