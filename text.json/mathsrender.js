import { createCanvas, loadImage } from '@napi-rs/canvas';
import { MathematicsSvgDiagrams } from './mathsvg.js';
import { MathematicsDiagramsRegistry } from './mathregistry.js';

class MathematicsDiagramsRenderer {
    constructor(canvas = null) {
        this.defaultFont = 'Arial, sans-serif';
        this.defaultFontSize = 12;
        this.canvas = canvas;
        this.ctx = canvas ? canvas.getContext('2d') : null;
        this.currentFrame = 0;
    }

    async renderDiagram(diagramKey, x, y, width, height, options = {}) {
        const diagram = MathematicsDiagramsRegistry.getDiagram(diagramKey);
        
        if (!diagram) {
            throw new Error(`Mathematics diagram '${diagramKey}' not found`);
        }

        const mergedOptions = { ...diagram.defaultOptions, ...options };

        // Create a new canvas for this diagram
        const diagramCanvas = createCanvas(width, height);
        const ctx = diagramCanvas.getContext('2d');

        // Clear background
        ctx.fillStyle = mergedOptions.backgroundColor;
        ctx.fillRect(0, 0, width, height);

        try {
            // Get the corresponding SVG from MathematicsSvgDiagrams
            const svgString = this.getSvgForDiagram(diagramKey);

            if (!svgString) {
                throw new Error(`SVG not found for diagram: ${diagramKey}`);
            }

            // Convert SVG to image and draw on canvas
            await this.drawSvgToCanvas(ctx, svgString, x, y, width, height);

            // Add category and info if needed
            if (mergedOptions.showLabels) {
                this.drawDiagramInfo(ctx, diagram, 20, height - 60, mergedOptions);
            }

        } catch (error) {
            console.error(`Error rendering ${diagramKey}:`, error);
            this.renderError(ctx, diagram, width / 2, height / 2, width * 0.7, height * 0.5, error.message);
        }

        return diagramCanvas;
    }

    async drawSvgToCanvas(ctx, svgString, x, y, width, height) {
        // Convert SVG string to Base64 Data URI
        const svgBase64 = Buffer.from(svgString).toString('base64');
        const svgUrl = `data:image/svg+xml;base64,${svgBase64}`;

        // Load the SVG as an image
        const image = await loadImage(svgUrl);

        // Draw the SVG onto the canvas
        ctx.drawImage(image, x, y, width, height);
    }

    getSvgForDiagram(diagramKey) {
        // Map diagram keys to their corresponding SVG static properties
        const svgMap = {
            // ===== NUMBER THEORY =====
            'numberLine': MathematicsSvgDiagrams.numberLineSvg,
            'primeFactorTree': MathematicsSvgDiagrams.primeFactorTreeSvg,
            'vennDiagramFactors': MathematicsSvgDiagrams.vennDiagramFactorsSvg,
            'divisibilityChart': MathematicsSvgDiagrams.divisibilityChartSvg,
            'realNumberHierarchy': MathematicsSvgDiagrams.realNumberHierarchySvg,
            'modularArithmeticClock': MathematicsSvgDiagrams.modularArithmeticClockSvg,

            // Number Theory Apparatus
            'sieveOfEratosthenes': MathematicsSvgDiagrams.sieveOfEratosthenesSvg,
            'euclideanAlgorithm': MathematicsSvgDiagrams.euclideanAlgorithmSvg,
            'longDivisionProcess': MathematicsSvgDiagrams.longDivisionProcessSvg,

            // ===== ALGEBRA =====
            'algebraicBalanceModel': MathematicsSvgDiagrams.algebraicBalanceModelSvg,
            'linearGraphPlot': MathematicsSvgDiagrams.linearGraphPlotSvg,
            'quadraticParabola': MathematicsSvgDiagrams.quadraticParabolaSvg,
            'quadraticFormulaVisual': MathematicsSvgDiagrams.quadraticFormulaVisualSvg,
            'completingSquareVisual': MathematicsSvgDiagrams.completingSquareVisualSvg,
            'simultaneousEquationsGraph': MathematicsSvgDiagrams.simultaneousEquationsGraphSvg,
            'polynomialDivisionLayout': MathematicsSvgDiagrams.polynomialDivisionLayoutSvg,
            'exponentialGraph': MathematicsSvgDiagrams.exponentialGraphSvg,
            'logarithmicGraph': MathematicsSvgDiagrams.logarithmicGraphSvg,
            'inequalityNumberLine': MathematicsSvgDiagrams.inequalityNumberLineSvg,

            // Algebra Apparatus
            'algebraTilesModel': MathematicsSvgDiagrams.algebraTilesModelSvg,
            'factorBoxMethod': MathematicsSvgDiagrams.factorBoxMethodSvg,
            'substituitionMethod': MathematicsSvgDiagrams.substituitionMethodSvg,
            'eliminationMethod': MathematicsSvgDiagrams.eliminationMethodSvg,

            // ===== FUNCTIONS =====
            'functionMachine': MathematicsSvgDiagrams.functionMachineSvg,
            'mappingDiagram': MathematicsSvgDiagrams.mappingDiagramSvg,
            'domainRangeGraph': MathematicsSvgDiagrams.domainRangeGraphSvg,
            'functionTypes': MathematicsSvgDiagrams.functionTypesSvg,
            'functionTransformations': MathematicsSvgDiagrams.functionTransformationsSvg,
            'inverseFunctionGraph': MathematicsSvgDiagrams.inverseFunctionGraphSvg,
            'piecewiseFunctionGraph': MathematicsSvgDiagrams.piecewiseFunctionGraphSvg,
            'compositeFunction': MathematicsSvgDiagrams.compositeFunctionSvg,

            // Functions Apparatus
            'verticalLineTest': MathematicsSvgDiagrams.verticalLineTestSvg,
            'horizontalLineTest': MathematicsSvgDiagrams.horizontalLineTestSvg,

            // ===== GEOMETRY =====
            'angleTypes': MathematicsSvgDiagrams.angleTypesSvg,
            'angleRelationships': MathematicsSvgDiagrams.angleRelationshipsSvg,
            'parallelLinesAngles': MathematicsSvgDiagrams.parallelLinesAnglesSvg,
            'triangleTypes': MathematicsSvgDiagrams.triangleTypesSvg,
            'triangleProperties': MathematicsSvgDiagrams.trianglePropertiesSvg,
            'pythagoreanTheorem': MathematicsSvgDiagrams.pythagoreanTheoremSvg,
            'congruentTriangles': MathematicsSvgDiagrams.congruentTrianglesSvg,
            'similarTriangles': MathematicsSvgDiagrams.similarTrianglesSvg,
            'quadrilateralTypes': MathematicsSvgDiagrams.quadrilateralTypesSvg,
            'quadrilateralHierarchy': MathematicsSvgDiagrams.quadrilateralHierarchySvg,
            'circleTheorem1': MathematicsSvgDiagrams.circleTheorem1Svg,
            'circleTheorem2': MathematicsSvgDiagrams.circleTheorem2Svg,
            'circleTheorem3': MathematicsSvgDiagrams.circleTheorem3Svg,
            'circleTheorem4': MathematicsSvgDiagrams.circleTheorem4Svg,
            'coordinateGeometryGrid': MathematicsSvgDiagrams.coordinateGeometryGridSvg,
            'distanceFormula': MathematicsSvgDiagrams.distanceFormulaSvg,
            'midpointFormula': MathematicsSvgDiagrams.midpointFormulaSvg,
            'slopeOfLine': MathematicsSvgDiagrams.slopeOfLineSvg,
            'equationOfLine': MathematicsSvgDiagrams.equationOfLineSvg,
            'solid3DShapes': MathematicsSvgDiagrams.solid3DShapesSvg,
            'nets3DShapes': MathematicsSvgDiagrams.nets3DShapesSvg,
            'surfaceAreaDiagram': MathematicsSvgDiagrams.surfaceAreaDiagramSvg,
            'volumeDiagram': MathematicsSvgDiagrams.volumeDiagramSvg,

            // Geometry Apparatus
            'compassStraightedgeConstruction': MathematicsSvgDiagrams.compassStraightedgeConstructionSvg,
            'angleBisectorConstruction': MathematicsSvgDiagrams.angleBisectorConstructionSvg,
            'locusConstruction': MathematicsSvgDiagrams.locusConstructionSvg,
            'transformationProcess': MathematicsSvgDiagrams.transformationProcessSvg,

            // ===== TRIGONOMETRY =====
            'rightTriangleTrigRatios': MathematicsSvgDiagrams.rightTriangleTrigRatiosSvg,
            'unitCircle': MathematicsSvgDiagrams.unitCircleSvg,
            'specialAnglesTriangle': MathematicsSvgDiagrams.specialAnglesTriangleSvg,
            'trigIdentitiesVisual': MathematicsSvgDiagrams.trigIdentitiesVisualSvg,
            'sineRuleDiagram': MathematicsSvgDiagrams.sineRuleDiagramSvg,
            'cosineRuleDiagram': MathematicsSvgDiagrams.cosineRuleDiagramSvg,
            'triangleAreaFormula': MathematicsSvgDiagrams.triangleAreaFormulaSvg,
            'radianMeasure': MathematicsSvgDiagrams.radianMeasureSvg,
            'sineGraph': MathematicsSvgDiagrams.sineGraphSvg,
            'cosineGraph': MathematicsSvgDiagrams.cosineGraphSvg,
            'tangentGraph': MathematicsSvgDiagrams.tangentGraphSvg,
            'trigGraphTransformations': MathematicsSvgDiagrams.trigGraphTransformationsSvg,

            // Trigonometry Apparatus
            'bearingsDiagram': MathematicsSvgDiagrams.bearingsDiagramSvg,
            'angleOfElevationDepression': MathematicsSvgDiagrams.angleOfElevationDepressionSvg,

            // ===== VECTORS =====
            'vectorRepresentation': MathematicsSvgDiagrams.vectorRepresentationSvg,
            'vectorAddition': MathematicsSvgDiagrams.vectorAdditionSvg,
            'vectorSubtraction': MathematicsSvgDiagrams.vectorSubtractionSvg,
            'scalarMultiplication': MathematicsSvgDiagrams.scalarMultiplicationSvg,
            'vectorComponents': MathematicsSvgDiagrams.vectorComponentsSvg,
            'dotProduct': MathematicsSvgDiagrams.dotProductSvg,
            'crossProduct': MathematicsSvgDiagrams.crossProductSvg,
            'vectorEquationLine': MathematicsSvgDiagrams.vectorEquationLineSvg,
            'positionVectors': MathematicsSvgDiagrams.positionVectorsSvg,

            // Vectors Apparatus
            'vectorNavigationProblem': MathematicsSvgDiagrams.vectorNavigationProblemSvg,

            // ===== MATRICES =====
            'matrixStructure': MathematicsSvgDiagrams.matrixStructureSvg,
            'matrixAddition': MathematicsSvgDiagrams.matrixAdditionSvg,
            'matrixScalarMultiplication': MathematicsSvgDiagrams.matrixScalarMultiplicationSvg,
            'matrixMultiplication': MathematicsSvgDiagrams.matrixMultiplicationSvg,
            'determinant2x2': MathematicsSvgDiagrams.determinant2x2Svg,
            'determinant3x3': MathematicsSvgDiagrams.determinant3x3Svg,
            'inverseMatrix': MathematicsSvgDiagrams.inverseMatrixSvg,
            'matrixTransformation': MathematicsSvgDiagrams.matrixTransformationSvg,

            // Matrices Apparatus
            'matrixMultiplicationProcess': MathematicsSvgDiagrams.matrixMultiplicationProcessSvg,
            'systemOfEquationsMatrixForm': MathematicsSvgDiagrams.systemOfEquationsMatrixFormSvg,

            // ===== SEQUENCES AND SERIES =====
            'arithmeticSequence': MathematicsSvgDiagrams.arithmeticSequenceSvg,
            'geometricSequence': MathematicsSvgDiagrams.geometricSequenceSvg,
            'arithmeticSeries': MathematicsSvgDiagrams.arithmeticSeriesSvg,
            'geometricSeries': MathematicsSvgDiagrams.geometricSeriesSvg,
            'infiniteGeometricSeries': MathematicsSvgDiagrams.infiniteGeometricSeriesSvg,
            'sequenceRecursive': MathematicsSvgDiagrams.sequenceRecursiveSvg,
            'binomialExpansion': MathematicsSvgDiagrams.binomialExpansionSvg,
            'pascalTriangle': MathematicsSvgDiagrams.pascalTriangleSvg,
            'fibonacciSequence': MathematicsSvgDiagrams.fibonacciSequenceSvg,

            // Sequences Apparatus
            'arithmeticSeriesVisualProof': MathematicsSvgDiagrams.arithmeticSeriesVisualProofSvg,
            'geometricSeriesDerivation': MathematicsSvgDiagrams.geometricSeriesDerivationSvg,

            // ===== SET THEORY =====
            'setNotation': MathematicsSvgDiagrams.setNotationSvg,
            'vennDiagram2Sets': MathematicsSvgDiagrams.vennDiagram2SetsSvg,
            'vennDiagram3Sets': MathematicsSvgDiagrams.vennDiagram3SetsSvg,
            'setOperationsUnion': MathematicsSvgDiagrams.setOperationsUnionSvg,
            'setOperationsIntersection': MathematicsSvgDiagrams.setOperationsIntersectionSvg,
            'setOperationsComplement': MathematicsSvgDiagrams.setOperationsComplementSvg,
            'setOperationsDifference': MathematicsSvgDiagrams.setOperationsDifferenceSvg,
            'subsetDiagram': MathematicsSvgDiagrams.subsetDiagramSvg,
            'disjointSets': MathematicsSvgDiagrams.disjointSetsSvg,
            'cardinality': MathematicsSvgDiagrams.cardinalitySvg,
            'deMorgansLaws': MathematicsSvgDiagrams.deMorgansLawsSvg,

            // Set Theory Apparatus
            'vennDiagramProblemSolving': MathematicsSvgDiagrams.vennDiagramProblemSolvingSvg,
            'setBuilderNotationProcess': MathematicsSvgDiagrams.setBuilderNotationProcessSvg,

            // ===== STATISTICS & PROBABILITY =====
            'barChart': MathematicsSvgDiagrams.barChartSvg,
            'histogram': MathematicsSvgDiagrams.histogramSvg,
            'pieChart': MathematicsSvgDiagrams.pieChartSvg,
            'lineGraph': MathematicsSvgDiagrams.lineGraphSvg,
            'scatterPlot': MathematicsSvgDiagrams.scatterPlotSvg,
            'stemAndLeafPlot': MathematicsSvgDiagrams.stemAndLeafPlotSvg,
            'boxPlot': MathematicsSvgDiagrams.boxPlotSvg,
            'frequencyPolygon': MathematicsSvgDiagrams.frequencyPolygonSvg,
            'cumulativeFrequencyCurve': MathematicsSvgDiagrams.cumulativeFrequencyCurveSvg,
            'meanMedianMode': MathematicsSvgDiagrams.meanMedianModeSvg,
            'rangeAndIQR': MathematicsSvgDiagrams.rangeAndIQRSvg,
            'probabilityTreeDiagram': MathematicsSvgDiagrams.probabilityTreeDiagramSvg,
            'probabilityVennDiagram': MathematicsSvgDiagrams.probabilityVennDiagramSvg,

            // Statistics Apparatus
            'meanCalculationProcess': MathematicsSvgDiagrams.meanCalculationProcessSvg,
            'standardDeviationProcess': MathematicsSvgDiagrams.standardDeviationProcessSvg,
            'quartileCalculationProcess': MathematicsSvgDiagrams.quartileCalculationProcessSvg,

            // ===== CALCULUS =====
            'gradientOfCurve': MathematicsSvgDiagrams.gradientOfCurveSvg,
            'areaUnderCurve': MathematicsSvgDiagrams.areaUnderCurveSvg,

            // ===== LOGIC & REASONING =====
            'truthTable': MathematicsSvgDiagrams.truthTableSvg,
            'logicGates': MathematicsSvgDiagrams.logicGatesSvg,
        };

        return svgMap[diagramKey] || null;
    }

    drawDiagramInfo(ctx, diagram, x, y, options) {
        ctx.font = '12px Arial';
        ctx.fillStyle = '#7F8C8D';
        ctx.textAlign = 'left';
        ctx.fillText(`Category: ${diagram.category}`, x, y);
        ctx.fillText(`Description: ${diagram.description}`, x, y + 15);
    }

    renderError(ctx, diagram, x, y, width, height, errorMessage) {
        ctx.fillStyle = '#FADBD8';
        ctx.fillRect(x - width/2, y - height/2, width, height);
        ctx.strokeStyle = '#E74C3C';
        ctx.lineWidth = 2;
        ctx.strokeRect(x - width/2, y - height/2, width, height);

        ctx.font = 'bold 18px Arial';
        ctx.fillStyle = '#C0392B';
        ctx.textAlign = 'center';
        ctx.fillText('Error Rendering Diagram', x, y - 10);
        ctx.font = '14px Arial';
        ctx.fillText(errorMessage, x, y + 15);
    }

    // Export diagram to PNG buffer
    async exportToPng(diagramKey, width = 800, height = 600, options = {}) {
        const canvas = await this.renderDiagram(diagramKey, 0, 0, width, height, options);
        return await canvas.encode('png');
    }

    // Export diagram to file
    async exportToFile(diagramKey, filename, width = 800, height = 600, options = {}) {
        const fs = await import('fs');
        const pngData = await this.exportToPng(diagramKey, width, height, options);
        fs.writeFileSync(filename, pngData);
        console.log(`✨ Mathematics diagram '${diagramKey}' saved to ${filename}`);
    }

    // Batch export multiple diagrams
    async exportMultipleDiagrams(diagramKeys, outputDir = './output', width = 800, height = 600, options = {}) {
        const fs = await import('fs');
        const path = await import('path');
        
        // Create output directory if it doesn't exist
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        const results = [];
        for (const key of diagramKeys) {
            try {
                const filename = path.join(outputDir, `${key}.png`);
                await this.exportToFile(key, filename, width, height, options);
                results.push({ key, success: true, filename });
            } catch (error) {
                console.error(`Failed to export ${key}:`, error.message);
                results.push({ key, success: false, error: error.message });
            }
        }

        return results;
    }

    // Export all diagrams by category
    async exportByCategory(category, outputDir = './output', width = 800, height = 600, options = {}) {
        const diagrams = MathematicsDiagramsRegistry.getDiagramsByCategory(category);
        const diagramKeys = Object.keys(diagrams);
        
        const categoryDir = outputDir + '/' + category.replace(/\s+/g, '_').toLowerCase();
        return await this.exportMultipleDiagrams(diagramKeys, categoryDir, width, height, options);
    }

    // Export all diagrams
    async exportAllDiagrams(outputDir = './output', width = 800, height = 600, options = {}) {
        const allKeys = MathematicsDiagramsRegistry.getAllDiagrams();
        return await this.exportMultipleDiagrams(allKeys, outputDir, width, height, options);
    }

    // Get renderer statistics
    getStats() {
        const registry = MathematicsDiagramsRegistry;
        return {
            totalDiagrams: registry.getTotalCount(),
            apparatusDiagrams: registry.getApparatusCount(),
            solveDiagrams: registry.getSolveCount(),
            categories: registry.getAllCategories().length,
            rendererReady: true
        };
    }
}

export { MathematicsDiagramsRenderer };
