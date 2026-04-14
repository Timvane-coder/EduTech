
// ============================================================================
// UPDATED exportToExcel() - ALL DIAGRAMS INCLUDING CHEMISTRY & PHYSICS
// ============================================================================

async exportToExcel(filename = 'spreadsheet.xlsx', options = {}) {
    const {
        includeCharts = false,
        includeAnatomicalDiagrams = false,
        includeChemistryDiagrams = false,
        includePhysicsDiagrams = false,
        includeCrossSectionDiagrams = false,
        includeStereochemistryDiagrams = false,
        includeGeometricShapes = false,
        includeGraphs = false
    } = options;

    const workbook = new ExcelJS.Workbook();
    workbook.creator = this.author;
    workbook.created = this.createdDate;
    workbook.modified = this.lastModified;
    workbook.lastPrinted = new Date();

    const worksheet = workbook.addWorksheet(this.sheetName);
    worksheet.properties.defaultRowHeight = 20;

    // [... existing spreadsheet data code ...]

    // ========== VISUALIZATIONS SHEET (All Types) ==========
    const hasVisualizations =
        (includeCharts && this.charts.length > 0) ||
        (includeAnatomicalDiagrams && this.anatomicalDiagrams.length > 0) ||
        (includeChemistryDiagrams && this.chemistryDiagrams.length > 0) ||
        (includePhysicsDiagrams && this.physicsDiagrams.length > 0) ||
        (includeCrossSectionDiagrams && this.crossSectionDiagrams.length > 0) ||
        (includeStereochemistryDiagrams && this.stereochemistryDiagrams.length > 0) ||
        (includeGeometricShapes && this.geometricShapes.length > 0) ||
        (includeGraphs && this.graphs.length > 0);

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
                    'chemistry': 'FFFF9800',
                    'physics': 'FF2196F3',
                    'crossSection': 'FF27AE60',
                    'stereochemistry': 'FF9B59B6',
                    'geometric': 'FFFF9800',
                    'graph': 'FF2196F3'
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

        // Add Anatomical Diagrams (Biology)
        if (includeAnatomicalDiagrams && this.anatomicalDiagrams.length > 0) {
            console.log('\n🫀 Adding Biology Diagrams to Excel...');

            const anatomicalHeaderCell = vizSheet.getCell(`A${currentRow}`);
            anatomicalHeaderCell.value = '🫀 BIOLOGY DIAGRAMS';
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
                    const diagramWidth = diagramConfig.options.width || 800;
                    const diagramHeight = diagramConfig.options.height || 700;
                    const diagramCanvas = createCanvas(diagramWidth, diagramHeight);
                    const diagramCtx = diagramCanvas.getContext('2d');

                    this.diagramRenderer.canvas = diagramCanvas;
                    this.diagramRenderer.ctx = diagramCtx;

                    this.renderSpecificAnatomicalDiagram(diagramConfig.key, diagramConfig.options);

                    const diagramInfo = AnatomicalDiagramsRegistry.getDiagram(diagramConfig.key);

                    await addImageToExcel(
                        diagramCanvas,
                        `Biology ${i + 1}: ${diagramConfig.title}`,
                        'anatomical',
                        i,
                        { Category: diagramInfo.category }
                    );

                } catch (error) {
                    console.error(`  ❌ Biology Diagram ${i + 1} rendering failed:`, error.message);
                }
            }

            currentRow += 2;
        }

        // Add Chemistry Diagrams
        if (includeChemistryDiagrams && this.chemistryDiagrams.length > 0) {
            console.log('\n⚗️ Adding Chemistry Diagrams to Excel...');

            const chemistryHeaderCell = vizSheet.getCell(`A${currentRow}`);
            chemistryHeaderCell.value = '⚗️ CHEMISTRY DIAGRAMS';
            chemistryHeaderCell.font = { bold: true, size: 14, color: { argb: 'FFFF9800' } };
            chemistryHeaderCell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FFFFF3E0' }
            };
            vizSheet.getRow(currentRow).height = 30;
            currentRow += 2;

            for (let i = 0; i < this.chemistryDiagrams.length; i++) {
                const diagramConfig = this.chemistryDiagrams[i];

                try {
                    const diagramWidth = diagramConfig.options.width || 800;
                    const diagramHeight = diagramConfig.options.height || 700;
                    const diagramCanvas = createCanvas(diagramWidth, diagramHeight);
                    const diagramCtx = diagramCanvas.getContext('2d');

                    this.chemistryDiagramRenderer.canvas = diagramCanvas;
                    this.chemistryDiagramRenderer.ctx = diagramCtx;

                    this.renderSpecificChemistryDiagram(diagramConfig.key, diagramConfig.options);

                    const diagramInfo = ChemistryDiagramsRegistry.getDiagram(diagramConfig.key);

                    await addImageToExcel(
                        diagramCanvas,
                        `Chemistry ${i + 1}: ${diagramConfig.title}`,
                        'chemistry',
                        i,
                        {
                            Category: diagramInfo.category,
                            Formula: diagramInfo.formula || 'N/A'
                        }
                    );

                } catch (error) {
                    console.error(`  ❌ Chemistry Diagram ${i + 1} rendering failed:`, error.message);
                }
            }

            currentRow += 2;
        }

        // Add Physics Diagrams
        if (includePhysicsDiagrams && this.physicsDiagrams.length > 0) {
            console.log('\n⚛️ Adding Physics Diagrams to Excel...');

            const physicsHeaderCell = vizSheet.getCell(`A${currentRow}`);
            physicsHeaderCell.value = '⚛️ PHYSICS DIAGRAMS';
            physicsHeaderCell.font = { bold: true, size: 14, color: { argb: 'FF2196F3' } };
            physicsHeaderCell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FFE3F2FD' }
            };
            vizSheet.getRow(currentRow).height = 30;
            currentRow += 2;

            for (let i = 0; i < this.physicsDiagrams.length; i++) {
                const diagramConfig = this.physicsDiagrams[i];

                try {
                    const diagramWidth = diagramConfig.options.width || 800;
                    const diagramHeight = diagramConfig.options.height || 700;
                    const diagramCanvas = createCanvas(diagramWidth, diagramHeight);
                    const diagramCtx = diagramCanvas.getContext('2d');

                    this.physicsDiagramRenderer.canvas = diagramCanvas;
                    this.physicsDiagramRenderer.ctx = diagramCtx;

                    this.renderSpecificPhysicsDiagram(diagramConfig.key, diagramConfig.options);

                    const diagramInfo = PhysicsDiagramsRegistry.getDiagram(diagramConfig.key);

                    await addImageToExcel(
                        diagramCanvas,
                        `Physics ${i + 1}: ${diagramConfig.title}`,
                        'physics',
                        i,
                        { Category: diagramInfo.category }
                    );

                } catch (error) {
                    console.error(`  ❌ Physics Diagram ${i + 1} rendering failed:`, error.message);
                }
            }

            currentRow += 2;
        }

        // Add Cross-Section Diagrams
        if (includeCrossSectionDiagrams && this.crossSectionDiagrams.length > 0) {
            console.log('\n🔬 Adding Cross-Section Diagrams to Excel...');

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

        // Add Geometric Shapes
        if (includeGeometricShapes && this.geometricShapes.length > 0) {
            console.log('\n📐 Adding Geometric Shapes to Excel...');

            const geometricHeaderCell = vizSheet.getCell(`A${currentRow}`);
            geometricHeaderCell.value = '📐 GEOMETRIC SHAPES';
            geometricHeaderCell.font = { bold: true, size: 14, color: { argb: 'FFFF9800' } };
            geometricHeaderCell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FFFFF3E0' }
            };
            vizSheet.getRow(currentRow).height = 30;
            currentRow += 2;

            for (let i = 0; i < this.geometricShapes.length; i++) {
                const shapeConfig = this.geometricShapes[i];

                try {
                    const shapeWidth = shapeConfig.options.width || 800;
                    const shapeHeight = shapeConfig.options.height || 600;
                    const shapeCanvas = createCanvas(shapeWidth, shapeHeight);
                    const shapeCtx = shapeCanvas.getContext('2d');

                    this.geometricRenderer.canvas = shapeCanvas;
                    this.geometricRenderer.ctx = shapeCtx;

                    this.geometricRenderer.renderShape(
                        shapeConfig.key,
                        0,
                        0,
                        shapeWidth,
                        shapeHeight,
                        shapeConfig.config
                    );

                    const shapeInfo = GeometricShapesRegistry.getShape(shapeConfig.key);

                    await addImageToExcel(
                        shapeCanvas,
                        `Shape ${i + 1}: ${shapeConfig.title}`,
                        'geometric',
                        i,
                        {
                            Type: shapeInfo.name,
                            Category: shapeInfo.category,
                            Dimensionality: shapeInfo.dimensionality
                        }
                    );

                } catch (error) {
                    console.error(`  ❌ Geometric Shape ${i + 1} rendering failed:`, error.message);
                }
            }

            currentRow += 2;
        }

        // Add Mathematical Graphs
        if (includeGraphs && this.graphs.length > 0) {
            console.log('\n📈 Adding Mathematical Graphs to Excel...');

            const graphsHeaderCell = vizSheet.getCell(`A${currentRow}`);
            graphsHeaderCell.value = '📈 MATHEMATICAL GRAPHS';
            graphsHeaderCell.font = { bold: true, size: 14, color: { argb: 'FF2196F3' } };
            graphsHeaderCell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FFE3F2FD' }
            };
            vizSheet.getRow(currentRow).height = 30;
            currentRow += 2;

            for (let i = 0; i < this.graphs.length; i++) {
                const graphConfig = this.graphs[i];

                try {
                    const graphWidth = 1000;
                    const graphHeight = 800;
                    const graphCanvas = createCanvas(graphWidth, graphHeight);
                    const graphCtx = graphCanvas.getContext('2d');

                    this.graphRenderer.canvas = graphCanvas;
                    this.graphRenderer.ctx = graphCtx;

                    const graphData = this.graphRenderer.renderGraph(
                        graphConfig.key,
                        0,
                        0,
                        graphWidth,
                        graphHeight,
                        graphConfig.config
                    );

                    const graphInfo = GraphRegistry.getGraph(graphConfig.key);

                    const metadata = {
                        Type: graphInfo.name,
                        Category: graphInfo.category,
                        Equation: graphData.equation || graphInfo.equation,
                        'Data Points': graphConfig.config.points ? graphConfig.config.points.length : 0
                    };

                    if (graphData.rSquared !== undefined) {
                        metadata['R²'] = graphData.rSquared.toFixed(4);
                    }

                    if (graphData.slope !== undefined) {
                        metadata['Slope'] = graphData.slope.toFixed(4);
                    }

                    await addImageToExcel(
                        graphCanvas,
                        `Graph ${i + 1}: ${graphConfig.title}`,
                        'graph',
                        i,
                        metadata
                    );

                } catch (error) {
                    console.error(`  ❌ Graph ${i + 1} rendering failed:`, error.message);
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
            chemistryDiagrams: includeChemistryDiagrams ? this.chemistryDiagrams.length : 0,
            physicsDiagrams: includePhysicsDiagrams ? this.physicsDiagrams.length : 0,
            crossSectionDiagrams: includeCrossSectionDiagrams ? this.crossSectionDiagrams.length : 0,
            stereochemistryDiagrams: includeStereochemistryDiagrams ? this.stereochemistryDiagrams.length : 0,
            geometricShapes: includeGeometricShapes ? this.geometricShapes.length : 0,
            graphs: includeGraphs ? this.graphs.length : 0,
            total:
                (includeCharts ? this.charts.length : 0) +
                (includeAnatomicalDiagrams ? this.anatomicalDiagrams.length : 0) +
                (includeChemistryDiagrams ? this.chemistryDiagrams.length : 0) +
                (includePhysicsDiagrams ? this.physicsDiagrams.length : 0) +
                (includeCrossSectionDiagrams ? this.crossSectionDiagrams.length : 0) +
                (includeStereochemistryDiagrams ? this.stereochemistryDiagrams.length : 0) +
                (includeGeometricShapes ? this.geometricShapes.length : 0) +
                (includeGraphs ? this.graphs.length : 0)
        }
    };
}

const EndSection5 = "close"