
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
// UPDATED exportToPNG() - ALL DIAGRAMS INCLUDING CHEMISTRY & PHYSICS
// ============================================================================

exportToPNG(filename = 'spreadsheet.png', options = {}) {
    const {
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

    let totalHeight = this.height;
    const visualizationsToRender = {
        charts: [],
        anatomical: [],
        chemistry: [],
        physics: [],
        crossSection: [],
        stereochemistry: [],
        geometric: [],
        graphs: []
    };

    // Collect charts
    if (includeCharts && this.charts.length > 0) {
        const selectedCharts = chartIndices.length > 0
            ? chartIndices.map(i => this.charts[i]).filter(Boolean)
            : this.charts;
        visualizationsToRender.charts = selectedCharts;
    }

    // Collect anatomical diagrams
    if (includeAnatomicalDiagrams && this.anatomicalDiagrams.length > 0) {
        const selectedDiagrams = anatomicalIndices.length > 0
            ? anatomicalIndices.map(i => this.anatomicalDiagrams[i]).filter(Boolean)
            : this.anatomicalDiagrams;
        visualizationsToRender.anatomical = selectedDiagrams;
    }

    // Collect chemistry diagrams
    if (includeChemistryDiagrams && this.chemistryDiagrams.length > 0) {
        const selectedChemistry = chemistryIndices.length > 0
            ? chemistryIndices.map(i => this.chemistryDiagrams[i]).filter(Boolean)
            : this.chemistryDiagrams;
        visualizationsToRender.chemistry = selectedChemistry;
    }

    // Collect physics diagrams
    if (includePhysicsDiagrams && this.physicsDiagrams.length > 0) {
        const selectedPhysics = physicsIndices.length > 0
            ? physicsIndices.map(i => this.physicsDiagrams[i]).filter(Boolean)
            : this.physicsDiagrams;
        visualizationsToRender.physics = selectedPhysics;
    }

    // Collect cross-section diagrams
    if (includeCrossSectionDiagrams && this.crossSectionDiagrams.length > 0) {
        const selectedCrossSections = crossSectionIndices.length > 0
            ? crossSectionIndices.map(i => this.crossSectionDiagrams[i]).filter(Boolean)
            : this.crossSectionDiagrams;
        visualizationsToRender.crossSection = selectedCrossSections;
    }

    // Collect stereochemistry diagrams
    if (includeStereochemistryDiagrams && this.stereochemistryDiagrams.length > 0) {
        const selectedStereochem = stereochemistryIndices.length > 0
            ? stereochemistryIndices.map(i => this.stereochemistryDiagrams[i]).filter(Boolean)
            : this.stereochemistryDiagrams;
        visualizationsToRender.stereochemistry = selectedStereochem;
    }

    // Collect geometric shapes
    if (includeGeometricShapes && this.geometricShapes.length > 0) {
        const selectedGeometric = geometricIndices.length > 0
            ? geometricIndices.map(i => this.geometricShapes[i]).filter(Boolean)
            : this.geometricShapes;
        visualizationsToRender.geometric = selectedGeometric;
    }

    // Collect graphs
    if (includeGraphs && this.graphs.length > 0) {
        const selectedGraphs = graphIndices.length > 0
            ? graphIndices.map(i => this.graphs[i]).filter(Boolean)
            : this.graphs;
        visualizationsToRender.graphs = selectedGraphs;
    }

    // Calculate additional height needed
    const totalVisualizations =
        visualizationsToRender.charts.length +
        visualizationsToRender.anatomical.length +
        visualizationsToRender.chemistry.length +
        visualizationsToRender.physics.length +
        visualizationsToRender.crossSection.length +
        visualizationsToRender.stereochemistry.length +
        visualizationsToRender.geometric.length +
        visualizationsToRender.graphs.length;

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
// UPDATED renderVisualizationsToCanvas() - ALL DIAGRAMS
// ============================================================================

renderVisualizationsToCanvas(ctx, visualizations) {
    const {
        charts = [],
        anatomical = [],
        chemistry = [],
        physics = [],
        crossSection = [],
        stereochemistry = [],
        geometric = [],
        graphs = []
    } = visualizations;

    const allVisualizations = [
        ...charts.map(c => ({ type: 'chart', data: c, icon: '📊' })),
        ...anatomical.map(d => ({ type: 'anatomical', data: d, icon: '🫀' })),
        ...chemistry.map(d => ({ type: 'chemistry', data: d, icon: '⚗️' })),
        ...physics.map(d => ({ type: 'physics', data: d, icon: '⚛️' })),
        ...crossSection.map(d => ({ type: 'crossSection', data: d, icon: '🔬' })),
        ...stereochemistry.map(d => ({ type: 'stereochemistry', data: d, icon: '🧪' })),
        ...geometric.map(d => ({ type: 'geometric', data: d, icon: '📐' })),
        ...graphs.map(d => ({ type: 'graph', data: d, icon: '📈' }))
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
    if (anatomical.length > 0) summaryParts.push(`${anatomical.length} Biology`);
    if (chemistry.length > 0) summaryParts.push(`${chemistry.length} Chemistry`);
    if (physics.length > 0) summaryParts.push(`${physics.length} Physics`);
    if (crossSection.length > 0) summaryParts.push(`${crossSection.length} Cross-Section`);
    if (stereochemistry.length > 0) summaryParts.push(`${stereochemistry.length} Molecule${stereochemistry.length !== 1 ? 's' : ''}`);
    if (geometric.length > 0) summaryParts.push(`${geometric.length} Geometric`);
    if (graphs.length > 0) summaryParts.push(`${graphs.length} Graph${graphs.length !== 1 ? 's' : ''}`);

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
            'anatomical': 'Biology Diagram',
            'chemistry': 'Chemistry Diagram',
            'physics': 'Physics Diagram',
            'crossSection': 'Cross-Section',
            'stereochemistry': 'Molecular Structure',
            'geometric': 'Geometric Shape',
            'graph': 'Mathematical Graph'
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
                this.chartRenderer.renderChart(
                    tempCanvas,
                    tempCtx,
                    viz.data.key,
                    viz.data.data,
                    { ...viz.data.options, width: itemWidth, height: itemHeight }
                );
            } else if (viz.type === 'anatomical') {
                this.diagramRenderer.canvas = tempCanvas;
                this.diagramRenderer.ctx = tempCtx;
                this.renderSpecificAnatomicalDiagram(viz.data.key, {
                    ...viz.data.options,
                    width: itemWidth,
                    height: itemHeight
                });
            } else if (viz.type === 'chemistry') {
                this.chemistryDiagramRenderer.canvas = tempCanvas;
                this.chemistryDiagramRenderer.ctx = tempCtx;
                this.renderSpecificChemistryDiagram(viz.data.key, {
                    ...viz.data.options,
                    width: itemWidth,
                    height: itemHeight
                });
            } else if (viz.type === 'physics') {
                this.physicsDiagramRenderer.canvas = tempCanvas;
                this.physicsDiagramRenderer.ctx = tempCtx;
                this.renderSpecificPhysicsDiagram(viz.data.key, {
                    ...viz.data.options,
                    width: itemWidth,
                    height: itemHeight
                });
            } else if (viz.type === 'crossSection') {
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
            } else if (viz.type === 'geometric') {
                this.geometricRenderer.canvas = tempCanvas;
                this.geometricRenderer.ctx = tempCtx;
                this.geometricRenderer.renderShape(
                    viz.data.key,
                    0,
                    0,
                    itemWidth,
                    itemHeight,
                    viz.data.config
                );
            } else if (viz.type === 'graph') {
                this.graphRenderer.canvas = tempCanvas;
                this.graphRenderer.ctx = tempCtx;
                this.graphRenderer.renderGraph(
                    viz.data.key,
                    0,
                    0,
                    itemWidth,
                    itemHeight,
                    viz.data.config
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

const EndSection4 = "close"