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


/** new svg for maths pamphlets */
//====================================================//
   // ===== TRIGONOMETRY =====
        'rightTriangleTrigRatios': MathematicsSvgDiagrams.rightTriangleTrigRatiossvg,
        'unitCircle': MathematicsSvgDiagrams.unitCirclesvg,
        'specialAnglesTriangle': MathematicsSvgDiagrams.specialAnglesTrianglesvg,
        'trigIdentitiesVisual': MathematicsSvgDiagrams.trigIdentitiesVisualsvg,
        'sineRuleDiagram': MathematicsSvgDiagrams.sineRuleDiagramsvg,
        'cosineRuleDiagram': MathematicsSvgDiagrams.cosineRuleDiagramsvg,
        'triangleAreaFormula': MathematicsSvgDiagrams.triangleAreaFormulasvg,
        'radianMeasure': MathematicsSvgDiagrams.radianMeasuresvg,
        'sineGraph': MathematicsSvgDiagrams.sineGraphsvg,
        'cosineGraph': MathematicsSvgDiagrams.cosineGraphsvg,
        'tangentGraph': MathematicsSvgDiagrams.tangentGraphsvg,
        'trigGraphTransformations': MathematicsSvgDiagrams.trigGraphTransformationssvg,

        // ===== ALGEBRA / EQUATIONS =====
        'balanceScalesEquation': MathematicsSvgDiagrams.balanceScalesEquationsvg,
        'addSubtractInverseNumberLine': MathematicsSvgDiagrams.addSubtractInverseNumberLinesvg,
        'multiplyDivideInverseDiagram': MathematicsSvgDiagrams.multiplyDivideInverseDiagramsvg,
        'slopeInterceptFormDiagram': MathematicsSvgDiagrams.slopeInterceptFormDiagramsvg,
        'multiStepInverseOperationsChain': MathematicsSvgDiagrams.multiStepInverseOperationsChainsvg,
        'distributiveLawBracketDiagram': MathematicsSvgDiagrams.distributiveLawBracketDiagramsvg,
        'negativeVariableNumberLine': MathematicsSvgDiagrams.negativeVariableNumberLinesvg,
        'scienceFormulasReferenceChart': MathematicsSvgDiagrams.scienceFormulasReferenceChartsvg,
        'fractionNumeratorDenominatorDiagram': MathematicsSvgDiagrams.fractionNumeratorDenominatorDiagramsvg,
        'numeratorIsolationDiagram': MathematicsSvgDiagrams.numeratorIsolationDiagramsvg,
        'denominatorCrossMultiplyDiagram': MathematicsSvgDiagrams.denominatorCrossMultiplyDiagramsvg,
        'crossMultiplicationRatioDiagram': MathematicsSvgDiagrams.crossMultiplicationRatioDiagramsvg,
        'parallelResistorCircuitDiagram': MathematicsSvgDiagrams.parallelResistorCircuitDiagramsvg,
        'compoundFractionSimplificationDiagram': MathematicsSvgDiagrams.compoundFractionSimplificationDiagramsvg,
        'directInverseProportionGraph': MathematicsSvgDiagrams.directInverseProportionGraphsvg,
        'lensFormulaOpticsDiagram': MathematicsSvgDiagrams.lensFormulaOpticsDiagramsvg,
        'inverseOperationPowerRootPairs': MathematicsSvgDiagrams.inverseOperationPowerRootPairssvg,
        'circleAreaRadiusDiagram': MathematicsSvgDiagrams.circleAreaRadiusDiagramsvg,
        'pendulumLengthDiagram': MathematicsSvgDiagrams.pendulumLengthDiagramsvg,
        'sphereVolumeFormulaDiagram': MathematicsSvgDiagrams.sphereVolumeFormulaDiagramsvg,
        'nthRootFractionalExponentDiagram': MathematicsSvgDiagrams.nthRootFractionalExponentDiagramsvg,
        'kinematicEquationsDiagram': MathematicsSvgDiagrams.kinematicEquationsDiagramsvg,
        'circleEquationCoordinateDiagram': MathematicsSvgDiagrams.circleEquationCoordinateDiagramsvg,
        'pythagoreanTheoremDiagram': MathematicsSvgDiagrams.pythagoreanTheoremDiagramsvg,
        'collectFactoriseDivideFlowchart': MathematicsSvgDiagrams.collectFactoriseDivideFlowchartsvg,
        'collectingLikeTermsDiagram': MathematicsSvgDiagrams.collectingLikeTermsDiagramsvg,
        'fractionSubjectTwiceDiagram': MathematicsSvgDiagrams.fractionSubjectTwiceDiagramsvg,
        'expandCollectBracketsFlowchart': MathematicsSvgDiagrams.expandCollectBracketsFlowchartsvg,
        'lcmClearingMultipleFractionsDiagram': MathematicsSvgDiagrams.lcmClearingMultipleFractionsDiagramsvg,
        'sellingPriceMarkupDiagram': MathematicsSvgDiagrams.sellingPriceMarkupDiagramsvg,
        'nonLinearOccurrenceDiagram': MathematicsSvgDiagrams.nonLinearOccurrenceDiagramsvg,
        'subjectTwiceClassificationFlowchart': MathematicsSvgDiagrams.subjectTwiceClassificationFlowchartsvg,
        'inverseOperationSequenceChainDiagram': MathematicsSvgDiagrams.inverseOperationSequenceChainDiagramsvg,
        'resonantFrequencyLCCircuitDiagram': MathematicsSvgDiagrams.resonantFrequencyLCCircuitDiagramsvg,
        'gravitationalForceDiagram': MathematicsSvgDiagrams.gravitationalForceDiagramsvg,
        'multiStepFormulaChainDiagram': MathematicsSvgDiagrams.multiStepFormulaChainDiagramsvg,
        'completingTheSquareVertexFormDiagram': MathematicsSvgDiagrams.completingTheSquareVertexFormDiagramsvg,
        'substitutionMethodSimultaneousDiagram': MathematicsSvgDiagrams.substitutionMethodSimultaneousDiagramsvg,
        'inverseFunctionReflectionDiagram': MathematicsSvgDiagrams.inverseFunctionReflectionDiagramsvg,
        'exponentialLogInversePairGraph': MathematicsSvgDiagrams.exponentialLogInversePairGraphsvg,
        'naturalLogExponentialGraphDiagram': MathematicsSvgDiagrams.naturalLogExponentialGraphDiagramsvg,
        'arcsinArccosTanPrincipalValueDiagram': MathematicsSvgDiagrams.arcsinArccosTanPrincipalValueDiagramsvg,
        'piecewiseFunctionInverseDiagram': MathematicsSvgDiagrams.piecewiseFunctionInverseDiagramsvg,
        'derivativeInverseTrigFunctionsDiagram': MathematicsSvgDiagrams.derivativeInverseTrigFunctionsDiagramsvg,
        'masterRearrangingDecisionFlowchart': MathematicsSvgDiagrams.masterRearrangingDecisionFlowchartsvg,
        'formulaTaxonomyTierDiagram': MathematicsSvgDiagrams.formulaTaxonomyTierDiagramsvg,
        'progressiveDifficultyLadderDiagram': MathematicsSvgDiagrams.progressiveDifficultyLadderDiagramsvg,
        'techniqueReferenceTableDiagram': MathematicsSvgDiagrams.techniqueReferenceTableDiagramsvg,
        'commonRearrangingErrorsDiagram': MathematicsSvgDiagrams.commonRearrangingErrorsDiagramsvg,
        'mathTopicConnectionWebDiagram': MathematicsSvgDiagrams.mathTopicConnectionWebDiagramsvg,
        'curriculumProgressionSequenceDiagram': MathematicsSvgDiagrams.curriculumProgressionSequenceDiagramsvg,
        'sixTierWorkedExamplesDiagram': MathematicsSvgDiagrams.sixTierWorkedExamplesDiagramsvg,

        // ===== FACTORISATION =====
        'factorTreeDiagram': MathematicsSvgDiagrams.factorTreeDiagramsvg,
        'hcfVennDiagram': MathematicsSvgDiagrams.hcfVennDiagramsvg,
        'distributiveLawReversal': MathematicsSvgDiagrams.distributiveLawReversalsvg,
        'binomialTrinomialStructure': MathematicsSvgDiagrams.binomialTrinomialStructuresvg,
        'expansionVerificationModel': MathematicsSvgDiagrams.expansionVerificationModelsvg,
        'negativeHCFSignFlowDiagram': MathematicsSvgDiagrams.negativeHCFSignFlowDiagramsvg,
        'hcfErrorAnnotationDiagram': MathematicsSvgDiagrams.hcfErrorAnnotationDiagramsvg,
        'zeroProductPropertyDiagram': MathematicsSvgDiagrams.zeroProductPropertyDiagramsvg,
        'fourTermGroupingModel': MathematicsSvgDiagrams.fourTermGroupingModelsvg,
        'fourTermPairingDiagram': MathematicsSvgDiagrams.fourTermPairingDiagramsvg,
        'termReorderingFlowchart': MathematicsSvgDiagrams.termReorderingFlowchartsvg,
        'sixTermGroupingDiagram': MathematicsSvgDiagrams.sixTermGroupingDiagramsvg,
        'groupingSignPatternTable': MathematicsSvgDiagrams.groupingSignPatternTablesvg,
        'groupingExpansionCheckDiagram': MathematicsSvgDiagrams.groupingExpansionCheckDiagramsvg,
        'mismatchedBinomialDiagram': MathematicsSvgDiagrams.mismatchedBinomialDiagramsvg,
        'groupingToTrinomialBridgeDiagram': MathematicsSvgDiagrams.groupingToTrinomialBridgeDiagramsvg,
        'differenceOfSquaresGeometricProof': MathematicsSvgDiagrams.differenceOfSquaresGeometricProofsvg,
        'perfectSquareChecklist': MathematicsSvgDiagrams.perfectSquareChecklistsvg,
        'dosFactorizationStepDiagram': MathematicsSvgDiagrams.dosFactorizationStepDiagramsvg,
        'repeatedDosTree': MathematicsSvgDiagrams.repeatedDosTreesvg,
        'conjugateProductNumberLine': MathematicsSvgDiagrams.conjugateProductNumberLinesvg,
        'dosParabolaRootsDiagram': MathematicsSvgDiagrams.dosParabolaRootsDiagramsvg,
        'sumVsDifferenceSquaresAnnotated': MathematicsSvgDiagrams.sumVsDifferenceSquaresAnnotatedsvg,
        'algebraicFractionSimplificationDiagram': MathematicsSvgDiagrams.algebraicFractionSimplificationDiagramsvg,
        'squaredBinomialGeometricArea': MathematicsSvgDiagrams.squaredBinomialGeometricAreasvg,
        'pstThreeConditionChecklist': MathematicsSvgDiagrams.pstThreeConditionChecklistsvg,
        'pstFactoredFormDiagram': MathematicsSvgDiagrams.pstFactoredFormDiagramsvg,
        'pstVsGeneralTrinomialComparisonTable': MathematicsSvgDiagrams.pstVsGeneralTrinomialComparisonTablesvg,
        'completingTheSquareGeometricModel': MathematicsSvgDiagrams.completingTheSquareGeometricModelsvg,
        'doubleRootParabolaDiagram': MathematicsSvgDiagrams.doubleRootParabolaDiagramsvg,
        'pstSignErrorAnnotation': MathematicsSvgDiagrams.pstSignErrorAnnotationsvg,
        'vertexFormParabolaDiagram': MathematicsSvgDiagrams.vertexFormParabolaDiagramsvg,
        'trinomialStructureDiagram': MathematicsSvgDiagrams.trinomialStructureDiagramsvg,
        'monicTrinomialFactorPairTable': MathematicsSvgDiagrams.monicTrinomialFactorPairTablesvg,
        'acMethodStepByStepDiagram': MathematicsSvgDiagrams.acMethodStepByStepDiagramsvg,
        'signAnalysisACFlowchart': MathematicsSvgDiagrams.signAnalysisACFlowchartsvg,
        'substitutionTrinomialDiagram': MathematicsSvgDiagrams.substitutionTrinomialDiagramsvg,
        'trialAndErrorBracketDiagram': MathematicsSvgDiagrams.trialAndErrorBracketDiagramsvg,
        'quadraticRootsParabolaDiagram': MathematicsSvgDiagrams.quadraticRootsParabolaDiagramsvg,
        'acProductSumErrorAnnotation': MathematicsSvgDiagrams.acProductSumErrorAnnotationsvg,
        'cubeIdentityVerificationDiagram': MathematicsSvgDiagrams.cubeIdentityVerificationDiagramsvg,
        'perfectCubeReferenceTable': MathematicsSvgDiagrams.perfectCubeReferenceTablesvg,
        'cubeIdentityStepDiagram': MathematicsSvgDiagrams.cubeIdentityStepDiagramsvg,
        'discriminantTestCubesTrinomial': MathematicsSvgDiagrams.discriminantTestCubesTrinomialsvg,
        'sixthPowerFactorizationTree': MathematicsSvgDiagrams.sixthPowerFactorizationTreesvg,
        'soapSignErrorAnnotation': MathematicsSvgDiagrams.soapSignErrorAnnotationsvg,
        'cubicEquationRootsDiagram': MathematicsSvgDiagrams.cubicEquationRootsDiagramsvg,
        'irreducibleFactorDefinitionDiagram': MathematicsSvgDiagrams.irreducibleFactorDefinitionDiagramsvg,
        'factorizationDecisionFlowchart': MathematicsSvgDiagrams.factorizationDecisionFlowchartsvg,
        'factorizationPriorityLadder': MathematicsSvgDiagrams.factorizationPriorityLaddersvg,
        'multiStepFactorizationTree': MathematicsSvgDiagrams.multiStepFactorizationTreesvg,
        'rationalRootTheoremDiagram': MathematicsSvgDiagrams.rationalRootTheoremDiagramsvg,
        'numberSetsFactorizationComparisonTable': MathematicsSvgDiagrams.numberSetsFactorizationComparisonTablesvg,
        'degreeAndCoefficientCheckDiagram': MathematicsSvgDiagrams.degreeAndCoefficientCheckDiagramsvg,
        'prematureStopErrorDiagram': MathematicsSvgDiagrams.prematureStopErrorDiagramsvg,
        'polynomialGraphZerosDiagram': MathematicsSvgDiagrams.polynomialGraphZerosDiagramsvg,

        // ===== GENERAL ALGEBRA =====
        'algebraicVocabularyDiagram': MathematicsSvgDiagrams.algebraicVocabularyDiagramsvg,
        'inverseOperationsDiagram': MathematicsSvgDiagrams.inverseOperationsDiagramsvg,
        'twoStepSolvingFlowchart': MathematicsSvgDiagrams.twoStepSolvingFlowchartsvg,
        'distributivePropertyDiagram': MathematicsSvgDiagrams.distributivePropertyDiagramsvg,
        'lcdFractionsDiagram': MathematicsSvgDiagrams.lcdFractionsDiagramsvg,
        'decimalPlaceValueDiagram': MathematicsSvgDiagrams.decimalPlaceValueDiagramsvg,
        'formulaRearrangementDiagram': MathematicsSvgDiagrams.formulaRearrangementDiagramsvg,
        'numberLineInequalityDiagram': MathematicsSvgDiagrams.numberLineInequalityDiagramsvg,
        'absoluteValueNumberLineDiagram': MathematicsSvgDiagrams.absoluteValueNumberLineDiagramsvg,
        'systemsIntersectionGraph': MathematicsSvgDiagrams.systemsIntersectionGraphsvg,
        'slopeInterceptGraph': MathematicsSvgDiagrams.slopeInterceptGraphsvg,
        'rateDistanceTimeDiagram': MathematicsSvgDiagrams.rateDistanceTimeDiagramsvg,

        // ===== QUADRATICS =====
        'parabolaAnatomyDiagram': MathematicsSvgDiagrams.parabolaAnatomyDiagramsvg,
        'completingSquareAreaModel': MathematicsSvgDiagrams.completingSquareAreaModelsvg,
        'quadraticFormulaDerivationDiagram': MathematicsSvgDiagrams.quadraticFormulaDerivationDiagramsvg,
        'discriminantNatureOfRootsDiagram': MathematicsSvgDiagrams.discriminantNatureOfRootsDiagramsvg,
        'complexPlaneDiagram': MathematicsSvgDiagrams.complexPlaneDiagramsvg,
        'sumProductRootsDiagram': MathematicsSvgDiagrams.sumProductRootsDiagramsvg,
        'parabolaTransformationsDiagram': MathematicsSvgDiagrams.parabolaTransformationsDiagramsvg,
        'parabolaSignChartDiagram': MathematicsSvgDiagrams.parabolaSignChartDiagramsvg,
        'uSubstitutionDiagram': MathematicsSvgDiagrams.uSubstitutionDiagramsvg,
        'lineParabolaIntersectionDiagram': MathematicsSvgDiagrams.lineParabolaIntersectionDiagramsvg,
        'projectileMotionDiagram': MathematicsSvgDiagrams.projectileMotionDiagramsvg,

        // ===== POLYNOMIALS =====
        'polynomialAnatomyDiagram': MathematicsSvgDiagrams.polynomialAnatomyDiagramsvg,
        'longDivisionAlgorithmDiagram': MathematicsSvgDiagrams.longDivisionAlgorithmDiagramsvg,
        'remainderTheoremDiagram': MathematicsSvgDiagrams.remainderTheoremDiagramsvg,
        'rationalRootCandidatesDiagram': MathematicsSvgDiagrams.rationalRootCandidatesDiagramsvg,
        'sumDifferenceOfCubesDiagram': MathematicsSvgDiagrams.sumDifferenceOfCubesDiagramsvg,
        'polynomialEndBehaviourDiagram': MathematicsSvgDiagrams.polynomialEndBehaviourDiagramsvg,
        'cubicQuarticSolutionFlowchart': MathematicsSvgDiagrams.cubicQuarticSolutionFlowchartsvg,
        'binomialTheoremPascalTriangle': MathematicsSvgDiagrams.binomialTheoremPascalTrianglesvg,
        'evenOddFunctionSymmetryDiagram': MathematicsSvgDiagrams.evenOddFunctionSymmetryDiagramsvg,
        'polynomialIntersectionDiagram': MathematicsSvgDiagrams.polynomialIntersectionDiagramsvg,
        'openBoxVolumeDiagram': MathematicsSvgDiagrams.openBoxVolumeDiagramsvg,

        // ===== RATIONAL EXPRESSIONS =====
        'rationalExpressionAnatomyDiagram': MathematicsSvgDiagrams.rationalExpressionAnatomyDiagramsvg,
        'factorCancelDiagram': MathematicsSvgDiagrams.factorCancelDiagramsvg,
        'clearingDenominatorsFlowchart': MathematicsSvgDiagrams.clearingDenominatorsFlowchartsvg,
        'directInverseVariationGraph': MathematicsSvgDiagrams.directInverseVariationGraphsvg,
        'asymptolesAndHolesDiagram': MathematicsSvgDiagrams.asymptolesAndHolesDiagramsvg,
        'partialFractionDecompositionDiagram': MathematicsSvgDiagrams.partialFractionDecompositionDiagramsvg,
        'rationalInequalitySignChart': MathematicsSvgDiagrams.rationalInequalitySignChartsvg,
        'complexFractionSimplificationDiagram': MathematicsSvgDiagrams.complexFractionSimplificationDiagramsvg,
        'workRatePipesDiagram': MathematicsSvgDiagrams.workRatePipesDiagramsvg,

        // ===== RADICALS =====
        'radicalNotationAnatomyDiagram': MathematicsSvgDiagrams.radicalNotationAnatomyDiagramsvg,
        'productQuotientPropertyDiagram': MathematicsSvgDiagrams.productQuotientPropertyDiagramsvg,
        'likeRadicalsCombiningDiagram': MathematicsSvgDiagrams.likeRadicalsCombiningDiagramsvg,
        'isolateAndSquareDiagram': MathematicsSvgDiagrams.isolateAndSquareDiagramsvg,
        'cubeRootEquationDiagram': MathematicsSvgDiagrams.cubeRootEquationDiagramsvg,
        'doubleRadicalIsolationDiagram': MathematicsSvgDiagrams.doubleRadicalIsolationDiagramsvg,
        'radicalInequalityDomainDiagram': MathematicsSvgDiagrams.radicalInequalityDomainDiagramsvg,
        'squareRootTransformationsDiagram': MathematicsSvgDiagrams.squareRootTransformationsDiagramsvg,
        'uSubstitutionRadicalDiagram': MathematicsSvgDiagrams.uSubstitutionRadicalDiagramsvg,
        'extraneousSolutionGraphDiagram': MathematicsSvgDiagrams.extraneousSolutionGraphDiagramsvg,
        'pythagoreanDistanceDiagram': MathematicsSvgDiagrams.pythagoreanDistanceDiagramsvg,

        // ===== TRANSFORMATIONS =====
        'translationVectorDiagram': MathematicsSvgDiagrams.translationVectorDiagramsvg,
        'translationCoordinateGrid': MathematicsSvgDiagrams.translationCoordinateGridsvg,
        'translatedPolygonDiagram': MathematicsSvgDiagrams.translatedPolygonDiagramsvg,
        'translationCongruenceDiagram': MathematicsSvgDiagrams.translationCongruenceDiagramsvg,
        'columnVectorRepresentation': MathematicsSvgDiagrams.columnVectorRepresentationsvg,
        'translationGridPlot': MathematicsSvgDiagrams.translationGridPlotsvg,
        'functionHorizontalVerticalShiftDiagram': MathematicsSvgDiagrams.functionHorizontalVerticalShiftDiagramsvg,
        'composedTranslationVectorDiagram': MathematicsSvgDiagrams.composedTranslationVectorDiagramsvg,
        'tessellationTranslationPattern': MathematicsSvgDiagrams.tessellationTranslationPatternsvg,
        'translationalSymmetryPattern': MathematicsSvgDiagrams.translationalSymmetryPatternsvg,
        'mirrorLineDiagram': MathematicsSvgDiagrams.mirrorLineDiagramsvg,
        'standardMirrorLinesDiagram': MathematicsSvgDiagrams.standardMirrorLinesDiagramsvg,
        'reflectedPolygonDiagram': MathematicsSvgDiagrams.reflectedPolygonDiagramsvg,
        'orientationReversalDiagram': MathematicsSvgDiagrams.orientationReversalDiagramsvg,
        'linesOfSymmetryByShapeDiagram': MathematicsSvgDiagrams.linesOfSymmetryByShapeDiagramsvg,
        'obliqueReflectionConstruction': MathematicsSvgDiagrams.obliqueReflectionConstructionsvg,
        'doubleReflectionTranslationDiagram': MathematicsSvgDiagrams.doubleReflectionTranslationDiagramsvg,
        'inverseFunctionReflectionGraph': MathematicsSvgDiagrams.inverseFunctionReflectionGraphsvg,
        'midpointMirrorLineDiagram': MathematicsSvgDiagrams.midpointMirrorLineDiagramsvg,
        'reflectionMatrixDiagram': MathematicsSvgDiagrams.reflectionMatrixDiagramsvg,
        'rotationCenterAngleDiagram': MathematicsSvgDiagrams.rotationCenterAngleDiagramsvg,
        'standardRotationRulesDiagram': MathematicsSvgDiagrams.standardRotationRulesDiagramsvg,
        'nonOriginRotationDiagram': MathematicsSvgDiagrams.nonOriginRotationDiagramsvg,
        'rotatedPolygonDiagram': MathematicsSvgDiagrams.rotatedPolygonDiagramsvg,
        'rotationalSymmetryOrderDiagram': MathematicsSvgDiagrams.rotationalSymmetryOrderDiagramsvg,
        'rotationIsometryDiagram': MathematicsSvgDiagrams.rotationIsometryDiagramsvg,
        'composedRotationDiagram': MathematicsSvgDiagrams.composedRotationDiagramsvg,
        'complexPlaneRotationDiagram': MathematicsSvgDiagrams.complexPlaneRotationDiagramsvg,
        'rotationMatrixDiagram': MathematicsSvgDiagrams.rotationMatrixDiagramsvg,
        'clockBearingRotationDiagram': MathematicsSvgDiagrams.clockBearingRotationDiagramsvg,
        'dilationCenterScaleFactorDiagram': MathematicsSvgDiagrams.dilationCenterScaleFactorDiagramsvg,
        'dilationCoordinateRuleDiagram': MathematicsSvgDiagrams.dilationCoordinateRuleDiagramsvg,
        'dilatedPolygonDiagram': MathematicsSvgDiagrams.dilatedPolygonDiagramsvg,
        'dilationNonIsometryDiagram': MathematicsSvgDiagrams.dilationNonIsometryDiagramsvg,
        'similarFiguresScaleFactorDiagram': MathematicsSvgDiagrams.similarFiguresScaleFactorDiagramsvg,
        'verticalHorizontalDilationFunctionGraph': MathematicsSvgDiagrams.verticalHorizontalDilationFunctionGraphsvg,
        'triangleSimilarityCriteriaDiagram': MathematicsSvgDiagrams.triangleSimilarityCriteriaDiagramsvg,
        'spiralSimilarityDiagram': MathematicsSvgDiagrams.spiralSimilarityDiagramsvg,
        'centerOfDilationConstructionDiagram': MathematicsSvgDiagrams.centerOfDilationConstructionDiagramsvg,
        'mapScaleAndBlueprintDiagram': MathematicsSvgDiagrams.mapScaleAndBlueprintDiagramsvg,
        'compositionNotationDiagram': MathematicsSvgDiagrams.compositionNotationDiagramsvg,
        'compositionPairsResultsDiagram': MathematicsSvgDiagrams.compositionPairsResultsDiagramsvg,
        'glideReflectionFootprintDiagram': MathematicsSvgDiagrams.glideReflectionFootprintDiagramsvg,
        'fourIsometriesClassificationDiagram': MathematicsSvgDiagrams.fourIsometriesClassificationDiagramsvg,
        'stepByStepCompositionCoordinateDiagram': MathematicsSvgDiagrams.stepByStepCompositionCoordinateDiagramsvg,
        'inverseTransformationUndoDiagram': MathematicsSvgDiagrams.inverseTransformationUndoDiagramsvg,
        'dihedralCyclicGroupDiagram': MathematicsSvgDiagrams.dihedralCyclicGroupDiagramsvg,
        'homogeneousCoordinateMatrixDiagram': MathematicsSvgDiagrams.homogeneousCoordinateMatrixDiagramsvg,
        'equivalentSingleTransformationDiagram': MathematicsSvgDiagrams.equivalentSingleTransformationDiagramsvg,
        'computerGraphicsTransformationPipelineDiagram': MathematicsSvgDiagrams.computerGraphicsTransformationPipelineDiagramsvg,

        // ===== VECTORS =====
        'columnVectorComponentDiagram': MathematicsSvgDiagrams.columnVectorComponentDiagramsvg,
        'gridArrowToColumnVector': MathematicsSvgDiagrams.gridArrowToColumnVectorsvg,
        'translationShapeDiagram': MathematicsSvgDiagrams.translationShapeDiagramsvg,
        'equalVectorsParallelArrows': MathematicsSvgDiagrams.equalVectorsParallelArrowssvg,
        'negativeVectorReversalDiagram': MathematicsSvgDiagrams.negativeVectorReversalDiagramsvg,
        'threeDCoordinateAxesDiagram': MathematicsSvgDiagrams.threeDCoordinateAxesDiagramsvg,
        'ijBasisVectorsDiagram': MathematicsSvgDiagrams.ijBasisVectorsDiagramsvg,
        'vectorPathTracingDiagram': MathematicsSvgDiagrams.vectorPathTracingDiagramsvg,
        'originToPointArrowDiagram': MathematicsSvgDiagrams.originToPointArrowDiagramsvg,
        'positionVectorNotationChart': MathematicsSvgDiagrams.positionVectorNotationChartsvg,
        'abVectorFromPositionVectorsDiagram': MathematicsSvgDiagrams.abVectorFromPositionVectorsDiagramsvg,
        'midpointPositionVectorDiagram': MathematicsSvgDiagrams.midpointPositionVectorDiagramsvg,
        'sectionFormulaDivisionDiagram': MathematicsSvgDiagrams.sectionFormulaDivisionDiagramsvg,
        'triangleCentroidMediansDiagram': MathematicsSvgDiagrams.triangleCentroidMediansDiagramsvg,
        'parallelogramVectorProofDiagram': MathematicsSvgDiagrams.parallelogramVectorProofDiagramsvg,
        'threeDPositionVectorDiagram': MathematicsSvgDiagrams.threeDPositionVectorDiagramsvg,
        'navigationPositionVectorDiagram': MathematicsSvgDiagrams.navigationPositionVectorDiagramsvg,
        'componentWiseAdditionDiagram': MathematicsSvgDiagrams.componentWiseAdditionDiagramsvg,
        'triangleAndParallelogramRuleDiagram': MathematicsSvgDiagrams.triangleAndParallelogramRuleDiagramsvg,
        'commutativityParallelogramDiagram': MathematicsSvgDiagrams.commutativityParallelogramDiagramsvg,
        'componentWiseSubtractionDiagram': MathematicsSvgDiagrams.componentWiseSubtractionDiagramsvg,
        'tailToTailSubtractionDiagram': MathematicsSvgDiagrams.tailToTailSubtractionDiagramsvg,
        'nonCommutativitySubtractionDiagram': MathematicsSvgDiagrams.nonCommutativitySubtractionDiagramsvg,
        'resultantForceDiagram': MathematicsSvgDiagrams.resultantForceDiagramsvg,
        'vectorPathGeometricFigureDiagram': MathematicsSvgDiagrams.vectorPathGeometricFigureDiagramsvg,
        'linearCombinationDiagram': MathematicsSvgDiagrams.linearCombinationDiagramsvg,
        'navigationDisplacementDiagram': MathematicsSvgDiagrams.navigationDisplacementDiagramsvg,
        'scalarStretchDiagram': MathematicsSvgDiagrams.scalarStretchDiagramsvg,
        'scalarMultipleColumnVectorDiagram': MathematicsSvgDiagrams.scalarMultipleColumnVectorDiagramsvg,
        'scaledMagnitudeComparisonDiagram': MathematicsSvgDiagrams.scaledMagnitudeComparisonDiagramsvg,
        'distributiveScalarDiagram': MathematicsSvgDiagrams.distributiveScalarDiagramsvg,
        'parallelVectorsScalarDiagram': MathematicsSvgDiagrams.parallelVectorsScalarDiagramsvg,
        'normalisationUnitCircleDiagram': MathematicsSvgDiagrams.normalisationUnitCircleDiagramsvg,
        'scalarDivisionSegmentDiagram': MathematicsSvgDiagrams.scalarDivisionSegmentDiagramsvg,
        'scalarProofGeometricFigureDiagram': MathematicsSvgDiagrams.scalarProofGeometricFigureDiagramsvg,
        'forceScalingDiagram': MathematicsSvgDiagrams.forceScalingDiagramsvg,
        'sameOppositeDirectionDiagram': MathematicsSvgDiagrams.sameOppositeDirectionDiagramsvg,
        'fourQuadrantDirectionAngleDiagram': MathematicsSvgDiagrams.fourQuadrantDirectionAngleDiagramsvg,
        'compassBearingsDiagram': MathematicsSvgDiagrams.compassBearingsDiagramsvg,
        'unitVectorDirectionDiagram': MathematicsSvgDiagrams.unitVectorDirectionDiagramsvg,
        'directionRatioSimplificationDiagram': MathematicsSvgDiagrams.directionRatioSimplificationDiagramsvg,
        'dotProductAngleDiagram': MathematicsSvgDiagrams.dotProductAngleDiagramsvg,
        'directionCosines3DDiagram': MathematicsSvgDiagrams.directionCosines3DDiagramsvg,
        'gradientVectorConnectionDiagram': MathematicsSvgDiagrams.gradientVectorConnectionDiagramsvg,
        'velocityBearingApplicationDiagram': MathematicsSvgDiagrams.velocityBearingApplicationDiagramsvg,
        'vectorLengthArrowDiagram': MathematicsSvgDiagrams.vectorLengthArrowDiagramsvg,
        'pythagoreanMagnitudeDiagram': MathematicsSvgDiagrams.pythagoreanMagnitudeDiagramsvg,
        'pythagorean3DMagnitudeDiagram': MathematicsSvgDiagrams.pythagorean3DMagnitudeDiagramsvg,
        'triangleInequalityDiagram': MathematicsSvgDiagrams.triangleInequalityDiagramsvg,
        'distanceFormulaCoordinateDiagram': MathematicsSvgDiagrams.distanceFormulaCoordinateDiagramsvg,
        'unitVectorNormalisationDiagram': MathematicsSvgDiagrams.unitVectorNormalisationDiagramsvg,
        'missingComponentMagnitudeDiagram': MathematicsSvgDiagrams.missingComponentMagnitudeDiagramsvg,
        'speedForceMagnitudeDiagram': MathematicsSvgDiagrams.speedForceMagnitudeDiagramsvg,
        'parallelVectorsDefinitionDiagram': MathematicsSvgDiagrams.parallelVectorsDefinitionDiagramsvg,
        'ratioTestParallelDiagram': MathematicsSvgDiagrams.ratioTestParallelDiagramsvg,
        'parallelArrowsOnGridDiagram': MathematicsSvgDiagrams.parallelArrowsOnGridDiagramsvg,
        'collinearPointsVectorDiagram': MathematicsSvgDiagrams.collinearPointsVectorDiagramsvg,
        'parallelogramSidesVectorDiagram': MathematicsSvgDiagrams.parallelogramSidesVectorDiagramsvg,
        'unknownComponentParallelDiagram': MathematicsSvgDiagrams.unknownComponentParallelDiagramsvg,
        'midpointTheoremProofDiagram': MathematicsSvgDiagrams.midpointTheoremProofDiagramsvg,
        'dotProductParallelTestDiagram': MathematicsSvgDiagrams.dotProductParallelTestDiagramsvg,
        'forceAccelerationParallelDiagram': MathematicsSvgDiagrams.forceAccelerationParallelDiagramsvg,
        'parallelErrorCounterExampleDiagram': MathematicsSvgDiagrams.parallelErrorCounterExampleDiagramsvg,

        // ===== TRIGONOMETRY (EXTENDED) =====
        'rightTriangleLabelledSides': MathematicsSvgDiagrams.rightTriangleLabelledSidessvg,
        'specialAnglesTriangle_30_60_90_and_45_45_90': MathematicsSvgDiagrams.specialAnglesTriangle_30_60_90_and_45_45_90svg,
        'unitCircleCASTDiagram': MathematicsSvgDiagrams.unitCircleCASTDiagramsvg,
        'sineCosineAndTangentGraphs': MathematicsSvgDiagrams.sineCosineAndTangentGraphssvg,
        'pythagoreanIdentityUnitCircleProof': MathematicsSvgDiagrams.pythagoreanIdentityUnitCircleProofsvg,
        'unitCircleWithSolutionAngles': MathematicsSvgDiagrams.unitCircleWithSolutionAnglessvg,
        'sineRuleAndCosineRuleTriangleDiagram': MathematicsSvgDiagrams.sineRuleAndCosineRuleTriangleDiagramsvg,
        'elevationDepressionAngleDiagram': MathematicsSvgDiagrams.elevationDepressionAngleDiagramsvg,
        'radianDefinitionArcLengthDiagram': MathematicsSvgDiagrams.radianDefinitionArcLengthDiagramsvg,
        'rectangularPrismSpaceDiagonalDiagram': MathematicsSvgDiagrams.rectangularPrismSpaceDiagonalDiagramsvg,

        // ===== COORDINATE GEOMETRY =====
        'cartesianPlaneWithQuadrants': MathematicsSvgDiagrams.cartesianPlaneWithQuadrantssvg,
        'lineInclinationAngleDiagram': MathematicsSvgDiagrams.lineInclinationAngleDiagramsvg,
        'angleBetweenTwoLinesGradientDiagram': MathematicsSvgDiagrams.angleBetweenTwoLinesGradientDiagramsvg,
        'parallelAndPerpendicularLinesGradientDiagram': MathematicsSvgDiagrams.parallelAndPerpendicularLinesGradientDiagramsvg,
        'coordinateProofShapeVerificationDiagram': MathematicsSvgDiagrams.coordinateProofShapeVerificationDiagramsvg,
        'unitCircleCoordinateRepresentation': MathematicsSvgDiagrams.unitCircleCoordinateRepresentationsvg,
        'polygonVerticesCoordinatePlaneDiagram': MathematicsSvgDiagrams.polygonVerticesCoordinatePlaneDiagramsvg,

        // ===== TRIANGLES =====
        'triangleClassificationByAnglesAndSides': MathematicsSvgDiagrams.triangleClassificationByAnglesAndSidessvg,
        'triangleAngleSumParallelLineProof': MathematicsSvgDiagrams.triangleAngleSumParallelLineProofsvg,
        'triangleExteriorAngleDiagram': MathematicsSvgDiagrams.triangleExteriorAngleDiagramsvg,
        'isoscelesTriangleBaseAnglesAndAxisDiagram': MathematicsSvgDiagrams.isoscelesTriangleBaseAnglesAndAxisDiagramsvg,
        'equilateralTriangleSymmetryDiagram': MathematicsSvgDiagrams.equilateralTriangleSymmetryDiagramsvg,
        'rightTriangleSpecialCases_30_60_90_45_45_90': MathematicsSvgDiagrams.rightTriangleSpecialCases_30_60_90_45_45_90svg,
        'congruenceConditionsSSS_SAS_ASA_AAS_RHS': MathematicsSvgDiagrams.congruenceConditionsSSS_SAS_ASA_AAS_RHSsvg,
        'similarTrianglesAA_scaleFactor': MathematicsSvgDiagrams.similarTrianglesAA_scaleFactorsvg,
        'triangleCentresOrthocentre_Incentre_Centroid_Circumcentre': MathematicsSvgDiagrams.triangleCentresOrthocentre_Incentre_Centroid_Circumcentresvg,
        'triangleAngleSideInequalityDiagram': MathematicsSvgDiagrams.triangleAngleSideInequalityDiagramsvg,

        // ===== CIRCLES =====
        'circlePartsLabelledDiagram': MathematicsSvgDiagrams.circlePartsLabelledDiagramsvg,
        'centralAngleArcRelationshipDiagram': MathematicsSvgDiagrams.centralAngleArcRelationshipDiagramsvg,
        'inscribedAngleTheoremDiagram': MathematicsSvgDiagrams.inscribedAngleTheoremDiagramsvg,
        'tangentRadiusAndAlternateSegmentDiagram': MathematicsSvgDiagrams.tangentRadiusAndAlternateSegmentDiagramsvg,
        'cyclicQuadrilateralOppositeAnglesDiagram': MathematicsSvgDiagrams.cyclicQuadrilateralOppositeAnglesDiagramsvg,
        'intersectingChordsAndPerpendicularBisectorDiagram': MathematicsSvgDiagrams.intersectingChordsAndPerpendicularBisectorDiagramsvg,
        'thalesTheoremAndPowerOfAPointDiagram': MathematicsSvgDiagrams.thalesTheoremAndPowerOfAPointDiagramsvg,
        'circleTheoremProofStructureDiagram': MathematicsSvgDiagrams.circleTheoremProofStructureDiagramsvg,

        // ===== POLYGONS =====
        'polygonClassificationConvexConcaveRegular': MathematicsSvgDiagrams.polygonClassificationConvexConcaveRegularsvg,
        'polygonTriangulationInteriorAngleSumDiagram': MathematicsSvgDiagrams.polygonTriangulationInteriorAngleSumDiagramsvg,
        'polygonExteriorAngleWalkingArgumentDiagram': MathematicsSvgDiagrams.polygonExteriorAngleWalkingArgumentDiagramsvg,
        'quadrilateralFamilyAnglesDiagram': MathematicsSvgDiagrams.quadrilateralFamilyAnglesDiagramsvg,
        'regularPolygonSymmetryAndCentralAngleDiagram': MathematicsSvgDiagrams.regularPolygonSymmetryAndCentralAngleDiagramsvg,
        'polygonInteriorSumProofDiagram': MathematicsSvgDiagrams.polygonInteriorSumProofDiagramsvg,
        'regularAndSemiRegularTessellationPatterns': MathematicsSvgDiagrams.regularAndSemiRegularTessellationPatternssvg,

        // ===== PARALLEL LINES =====
        'parallelLinesTransversalLabelledDiagram': MathematicsSvgDiagrams.parallelLinesTransversalLabelledDiagramsvg,
        'correspondingAlternateCoInteriorAnglesDiagram': MathematicsSvgDiagrams.correspondingAlternateCoInteriorAnglesDiagramsvg,
        'parallelLineTheoremConversesDiagram': MathematicsSvgDiagrams.parallelLineTheoremConversesDiagramsvg,
        'algebraicAnglesParallelLinesDiagram': MathematicsSvgDiagrams.algebraicAnglesParallelLinesDiagramsvg,
        'twoColumnProofParallelLinesDiagram': MathematicsSvgDiagrams.twoColumnProofParallelLinesDiagramsvg,
        'interceptTheoremThreeParallelLinesDiagram': MathematicsSvgDiagrams.interceptTheoremThreeParallelLinesDiagramsvg,
        'architectureAndNavigationParallelLinesDiagram': MathematicsSvgDiagrams.architectureAndNavigationParallelLinesDiagramsvg,

        // ===== SIMPLIFICATION =====
        'simplificationDecisionFlowchart': MathematicsSvgDiagrams.simplificationDecisionFlowchartsvg,
        'likeTermsGroupingDiagram': MathematicsSvgDiagrams.likeTermsGroupingDiagramsvg,
        'foilExpansionDiagram': MathematicsSvgDiagrams.foilExpansionDiagramsvg,
        'factorisationTypesDiagram': MathematicsSvgDiagrams.factorisationTypesDiagramsvg,
        'indexLawsSummaryDiagram': MathematicsSvgDiagrams.indexLawsSummaryDiagramsvg,
        'algebraicFractionCancellationDiagram': MathematicsSvgDiagrams.algebraicFractionCancellationDiagramsvg,
        'surdSimplificationFlowchart': MathematicsSvgDiagrams.surdSimplificationFlowchartsvg,
        'multiStepSimplificationFlowchart': MathematicsSvgDiagrams.multiStepSimplificationFlowchartsvg,
        'expressionTypeDecisionTree': MathematicsSvgDiagrams.expressionTypeDecisionTreesvg,
        'commonAlgebraErrorsDiagram': MathematicsSvgDiagrams.commonAlgebraErrorsDiagramsvg,

        // ===== SURDS =====
        'differenceQuotientDiagram': MathematicsSvgDiagrams.differenceQuotientDiagramsvg,
        'rationalVsIrrationalNumberLineDiagram': MathematicsSvgDiagrams.rationalVsIrrationalNumberLineDiagramsvg,
        'perfectSquareFactorTreeDiagram': MathematicsSvgDiagrams.perfectSquareFactorTreeDiagramsvg,
        'surdMultiplicationGridDiagram': MathematicsSvgDiagrams.surdMultiplicationGridDiagramsvg,
        'conjugatePairsDiagram': MathematicsSvgDiagrams.conjugatePairsDiagramsvg,
        'squaringBothSidesFlowchart': MathematicsSvgDiagrams.squaringBothSidesFlowchartsvg,
        'nestedRadicalsDiagram': MathematicsSvgDiagrams.nestedRadicalsDiagramsvg,
        'pythagoreanSurdTriangleDiagram': MathematicsSvgDiagrams.pythagoreanSurdTriangleDiagramsvg,

        // ===== ALGEBRAIC FRACTIONS =====
        'algebraicFractionAnatomyDiagram': MathematicsSvgDiagrams.algebraicFractionAnatomyDiagramsvg,
        'cancellingCommonFactorsDiagram': MathematicsSvgDiagrams.cancellingCommonFactorsDiagramsvg,
        'algebraicFractionMultiplicationDiagram': MathematicsSvgDiagrams.algebraicFractionMultiplicationDiagramsvg,
        'lowestCommonDenominatorDiagram': MathematicsSvgDiagrams.lowestCommonDenominatorDiagramsvg,
        'compoundFractionStructureDiagram': MathematicsSvgDiagrams.compoundFractionStructureDiagramsvg,
        'workRateProblemDiagram': MathematicsSvgDiagrams.workRateProblemDiagramsvg,

        // ===== INDICES / EXPONENTS =====
        'baseExponentNotationDiagram': MathematicsSvgDiagrams.baseExponentNotationDiagramsvg,
        'positiveNegativeZeroExponentChart': MathematicsSvgDiagrams.positiveNegativeZeroExponentChartsvg,
        'indexLawsSummaryTable': MathematicsSvgDiagrams.indexLawsSummaryTablesvg,
        'fractionalExponentRootDiagram': MathematicsSvgDiagrams.fractionalExponentRootDiagramsvg,
        'algebraicSimplificationFlowchart': MathematicsSvgDiagrams.algebraicSimplificationFlowchartsvg,
        'powersOfTenNumberLine': MathematicsSvgDiagrams.powersOfTenNumberLinesvg,
        'sameBaseSolvingDiagram': MathematicsSvgDiagrams.sameBaseSolvingDiagramsvg,
        'scientificNotationPlaceValueChart': MathematicsSvgDiagrams.scientificNotationPlaceValueChartsvg,
        'exponentialGrowthDecayCurves': MathematicsSvgDiagrams.exponentialGrowthDecayCurvessvg,
        'compoundInterestGrowthGraph': MathematicsSvgDiagrams.compoundInterestGrowthGraphsvg,

        // ===== LIKE TERMS =====
        'termCoefficientVariablePartDiagram': MathematicsSvgDiagrams.termCoefficientVariablePartDiagramsvg,
        'likeVsUnlikeTermsSortingChart': MathematicsSvgDiagrams.likeVsUnlikeTermsSortingChartsvg,
        'singleVariableCollectionNumberLine': MathematicsSvgDiagrams.singleVariableCollectionNumberLinesvg,
        'multiVariableGroupingDiagram': MathematicsSvgDiagrams.multiVariableGroupingDiagramsvg,
        'polynomialDescendingOrderDiagram': MathematicsSvgDiagrams.polynomialDescendingOrderDiagramsvg,
        'fractionalCoefficientNumberLine': MathematicsSvgDiagrams.fractionalCoefficientNumberLinesvg,
        'bracketSignExpansionDiagram': MathematicsSvgDiagrams.bracketSignExpansionDiagramsvg,
        'polynomialAdditionSubtractionLayout': MathematicsSvgDiagrams.polynomialAdditionSubtractionLayoutsvg,
        'zeroResultCancellationDiagram': MathematicsSvgDiagrams.zeroResultCancellationDiagramsvg,
        'perimeterAlgebraicExpressionDiagram': MathematicsSvgDiagrams.perimeterAlgebraicExpressionDiagramsvg,

        // ===== EXPANSION =====
        'distributiveLawAreaModel': MathematicsSvgDiagrams.distributiveLawAreaModelsvg,
        'numericDistributionArrowDiagram': MathematicsSvgDiagrams.numericDistributionArrowDiagramsvg,
        'variableMultiplierIndexLawLink': MathematicsSvgDiagrams.variableMultiplierIndexLawLinksvg,
        'FOILGridMethodDiagram': MathematicsSvgDiagrams.FOILGridMethodDiagramsvg,
        'perfectSquareDifferenceOfSquaresDiagram': MathematicsSvgDiagrams.perfectSquareDifferenceOfSquaresDiagramsvg,
        'pascalsTriangleBinomialExpansion': MathematicsSvgDiagrams.pascalsTriangleBinomialExpansionsvg,
        'negativeMultiplierSignFlipDiagram': MathematicsSvgDiagrams.negativeMultiplierSignFlipDiagramsvg,
        'expandCollectSimplifyFlowchart': MathematicsSvgDiagrams.expandCollectSimplifyFlowchartsvg,
        'bracketEquationSolvingStepsDiagram': MathematicsSvgDiagrams.bracketEquationSolvingStepsDiagramsvg,
        'algebraicAreaVolumeModel': MathematicsSvgDiagrams.algebraicAreaVolumeModelsvg,

        // ===== SUBSTITUTION =====
        'variableReplacementDiagram': MathematicsSvgDiagrams.variableReplacementDiagramsvg,
        'linearExpressionSubstitutionTable': MathematicsSvgDiagrams.linearExpressionSubstitutionTablesvg,
        'negativeBaseEvenOddPowerDiagram': MathematicsSvgDiagrams.negativeBaseEvenOddPowerDiagramsvg,
        'twoVariableSubstitutionGrid': MathematicsSvgDiagrams.twoVariableSubstitutionGridsvg,
        'formulaSubstitutionReferenceSheet': MathematicsSvgDiagrams.formulaSubstitutionReferenceSheetsvg,
        'quadraticRootCheckDiagram': MathematicsSvgDiagrams.quadraticRootCheckDiagramsvg,
        'lhsRhsVerificationDiagram': MathematicsSvgDiagrams.lhsRhsVerificationDiagramsvg,
        'functionMachineInputOutputDiagram': MathematicsSvgDiagrams.functionMachineInputOutputDiagramsvg,
        'bidmasMultiStepExpressionDiagram': MathematicsSvgDiagrams.bidmasMultiStepExpressionDiagramsvg,
        'scienceFormulaSubstitutionExamples': MathematicsSvgDiagrams.scienceFormulaSubstitutionExamplessvg,

        // ===== ARC LENGTH / RADIANS =====
        'degreesVsRadiansCircle': MathematicsSvgDiagrams.degreesVsRadiansCirclesvg,
        'arcLengthSectorDiagram': MathematicsSvgDiagrams.arcLengthSectorDiagramsvg,
        'sectorWithLabelledArcAndRadii': MathematicsSvgDiagrams.sectorWithLabelledArcAndRadiisvg,
        'unitCircleRadianDefinition': MathematicsSvgDiagrams.unitCircleRadianDefinitionsvg,
        'sectorAndSegmentAreaDiagram': MathematicsSvgDiagrams.sectorAndSegmentAreaDiagramsvg,
        'circleOnCoordinatePlane': MathematicsSvgDiagrams.circleOnCoordinatePlanesvg,
        'integralArcLengthInfinitesimalDs': MathematicsSvgDiagrams.integralArcLengthInfinitesimalDssvg,
        'concentricCirclesArcComparison': MathematicsSvgDiagrams.concentricCirclesArcComparisonsvg,
        'roadCurveArcLengthDiagram': MathematicsSvgDiagrams.roadCurveArcLengthDiagramsvg,

        // ===== PYTHAGORAS =====
        'rightTriangleLegsHypotenuse': MathematicsSvgDiagrams.rightTriangleLegsHypotenusesvg,
        'pythagoreanTheoremSquaresOnSides': MathematicsSvgDiagrams.pythagoreanTheoremSquaresOnSidessvg,
        'rearrangementProofFourTriangles': MathematicsSvgDiagrams.rearrangementProofFourTrianglessvg,
        'pythagoreanTriplesFamilyTree': MathematicsSvgDiagrams.pythagoreanTriplesFamilyTreesvg,
        'triangleClassificationByConverse': MathematicsSvgDiagrams.triangleClassificationByConversesvg,
        'rectangleDiagonalPythagorean': MathematicsSvgDiagrams.rectangleDiagonalPythagoreansvg,
        'rectangularBoxSpaceDiagonal': MathematicsSvgDiagrams.rectangularBoxSpaceDiagonalsvg,
        'distanceFormulaCoordinatePlane': MathematicsSvgDiagrams.distanceFormulaCoordinatePlanesvg,
        'pythagoreanIdentityUnitCircle': MathematicsSvgDiagrams.pythagoreanIdentityUnitCirclesvg,
        'nDimensionalDistanceDiagram': MathematicsSvgDiagrams.nDimensionalDistanceDiagramsvg,
        'constructionSquaringCornersDiagram': MathematicsSvgDiagrams.constructionSquaringCornersDiagramsvg,

        // ===== BEARINGS =====
        'northReferenceDirectionArrow': MathematicsSvgDiagrams.northReferenceDirectionArrowsvg,
        'eightPointCompassRose': MathematicsSvgDiagrams.eightPointCompassRosesvg,
        'threeFigureBearingProtractorDiagram': MathematicsSvgDiagrams.threeFigureBearingProtractorDiagramsvg,
        'backBearingParallelNorthLines': MathematicsSvgDiagrams.backBearingParallelNorthLinessvg,
        'protractorBearingConstructionDiagram': MathematicsSvgDiagrams.protractorBearingConstructionDiagramsvg,
        'northingEastingComponentsDiagram': MathematicsSvgDiagrams.northingEastingComponentsDiagramsvg,
        'twoLegJourneyResultantVector': MathematicsSvgDiagrams.twoLegJourneyResultantVectorsvg,
        'interiorAngleFromBearingsDiagram': MathematicsSvgDiagrams.interiorAngleFromBearingsDiagramsvg,
        'bearingLociAndIntersectionDiagram': MathematicsSvgDiagrams.bearingLociAndIntersectionDiagramsvg,
        'maritimeNavigationBearingFix': MathematicsSvgDiagrams.maritimeNavigationBearingFixsvg,
        'bearingDiagramAnnotatedStepByStep': MathematicsSvgDiagrams.bearingDiagramAnnotatedStepByStepsvg,

        // ===== PERIMETER =====
        'perimeterBoundaryDiagram': MathematicsSvgDiagrams.perimeterBoundaryDiagramsvg,
        'triangleTypesPerimeterDiagram': MathematicsSvgDiagrams.triangleTypesPerimeterDiagramsvg,
        'quadrilateralFamilyDiagram': MathematicsSvgDiagrams.quadrilateralFamilyDiagramsvg,
        'regularPolygonsDiagram': MathematicsSvgDiagrams.regularPolygonsDiagramsvg,
        'circleRadiusDiameterDiagram': MathematicsSvgDiagrams.circleRadiusDiameterDiagramsvg,
        'compositeShapeBoundaryDiagram': MathematicsSvgDiagrams.compositeShapeBoundaryDiagramsvg,
        'coordinateGridDistanceDiagram': MathematicsSvgDiagrams.coordinateGridDistanceDiagramsvg,
        'arcAndSectorDiagram': MathematicsSvgDiagrams.arcAndSectorDiagramsvg,
        'algebraicSidesDiagram': MathematicsSvgDiagrams.algebraicSidesDiagramsvg,
        'fencingAndFramingDiagram': MathematicsSvgDiagrams.fencingAndFramingDiagramsvg,

        // ===== AREA =====
        'squareUnitGridDiagram': MathematicsSvgDiagrams.squareUnitGridDiagramsvg,
        'triangleBaseHeightDiagram': MathematicsSvgDiagrams.triangleBaseHeightDiagramsvg,
        'quadrilateralAreaDecompositionDiagram': MathematicsSvgDiagrams.quadrilateralAreaDecompositionDiagramsvg,
        'circleAreaSectorsDiagram': MathematicsSvgDiagrams.circleAreaSectorsDiagramsvg,
        'regularPolygonApothemDiagram': MathematicsSvgDiagrams.regularPolygonApothemDiagramsvg,
        'compositeAreaAddSubtractDiagram': MathematicsSvgDiagrams.compositeAreaAddSubtractDiagramsvg,
        'coordinateTriangleAreaDiagram': MathematicsSvgDiagrams.coordinateTriangleAreaDiagramsvg,
        'algebraicExpansionGeometricDiagram': MathematicsSvgDiagrams.algebraicExpansionGeometricDiagramsvg,
        'similarShapesScaleFactorDiagram': MathematicsSvgDiagrams.similarShapesScaleFactorDiagramsvg,
        'flooringAndPaintingDiagram': MathematicsSvgDiagrams.flooringAndPaintingDiagramsvg,

        // ===== SECTORS =====
        'sectorAngleFractionDiagram': MathematicsSvgDiagrams.sectorAngleFractionDiagramsvg,
        'radianMeasureDiagram': MathematicsSvgDiagrams.radianMeasureDiagramsvg,
        'arcLengthCentralAngleDiagram': MathematicsSvgDiagrams.arcLengthCentralAngleDiagramsvg,
        'sectorPerimeterDiagram': MathematicsSvgDiagrams.sectorPerimeterDiagramsvg,
        'circularSegmentDiagram': MathematicsSvgDiagrams.circularSegmentDiagramsvg,
        'compositeSectorShapesDiagram': MathematicsSvgDiagrams.compositeSectorShapesDiagramsvg,
        'algebraicSectorDiagram': MathematicsSvgDiagrams.algebraicSectorDiagramsvg,
        'radianDefinitionUnitCircleDiagram': MathematicsSvgDiagrams.radianDefinitionUnitCircleDiagramsvg,
        'pieChartAndSprinklerDiagram': MathematicsSvgDiagrams.pieChartAndSprinklerDiagramsvg,

        // ===== SURFACE AREA =====
        'cuboidNetDiagram': MathematicsSvgDiagrams.cuboidNetDiagramsvg,
        'prismNetFacesDiagram': MathematicsSvgDiagrams.prismNetFacesDiagramsvg,
        'pyramidSlantHeightDiagram': MathematicsSvgDiagrams.pyramidSlantHeightDiagramsvg,
        'cylinderNetDiagram': MathematicsSvgDiagrams.cylinderNetDiagramsvg,
        'coneSlantHeightNetDiagram': MathematicsSvgDiagrams.coneSlantHeightNetDiagramsvg,
        'sphereGreatCircleDiagram': MathematicsSvgDiagrams.sphereGreatCircleDiagramsvg,
        'compositeSolidHiddenFacesDiagram': MathematicsSvgDiagrams.compositeSolidHiddenFacesDiagramsvg,
        'algebraicSolidDimensionsDiagram': MathematicsSvgDiagrams.algebraicSolidDimensionsDiagramsvg,
        'optimisationSurfaceAreaDiagram': MathematicsSvgDiagrams.optimisationSurfaceAreaDiagramsvg,
        'packagingAndPaintingDiagram': MathematicsSvgDiagrams.packagingAndPaintingDiagramsvg,

        // ===== VOLUME =====
        'cubicUnitStackingDiagram': MathematicsSvgDiagrams.cubicUnitStackingDiagramsvg,
        'prismCrossSectionLayerDiagram': MathematicsSvgDiagrams.prismCrossSectionLayerDiagramsvg,
        'pyramidVsPrismOneThirdDiagram': MathematicsSvgDiagrams.pyramidVsPrismOneThirdDiagramsvg,
        'cylinderCapacityDiagram': MathematicsSvgDiagrams.cylinderCapacityDiagramsvg,
        'coneVsCylinderOneThirdDiagram': MathematicsSvgDiagrams.coneVsCylinderOneThirdDiagramsvg,
        'archimedesSphereInCylinderDiagram': MathematicsSvgDiagrams.archimedesSphereInCylinderDiagramsvg,
        'compositeSolidDecompositionDiagram': MathematicsSvgDiagrams.compositeSolidDecompositionDiagramsvg,
        'algebraicVolumeSolidDiagram': MathematicsSvgDiagrams.algebraicVolumeSolidDiagramsvg,
        'cavalieriStackedSlicesDiagram': MathematicsSvgDiagrams.cavalieriStackedSlicesDiagramsvg,
        'tankAndContainerVolumeDiagram': MathematicsSvgDiagrams.tankAndContainerVolumeDiagramsvg,

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
