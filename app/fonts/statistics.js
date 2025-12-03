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
// ADD THIS TO EnhancedSpreadsheetWorkbook CLASS
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

    /**
     * Initialize EnhancedStatisticalWorkbook instance
     */
    initializeStatisticalWorkbook(options = {}) {
        if (!this.statisticalWorkbook) {
            this.statisticalWorkbook = new EnhancedStatisticalWorkbook(options);
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

    // ==================== DATA LOADING METHODS ====================

    /**
     * Load data from CSV for statistical analysis
     */
    loadStatisticalDataFromCSV(filePath) {
        const wb = this.getStatisticalWorkbook();
        wb.loadFromCSV(filePath);
        this.addToHistory(`Loaded statistical data from CSV: ${filePath}`);
        this.lastModified = new Date();
        return wb;
    }

    /**
     * Load data from JSON for statistical analysis
     */
    loadStatisticalDataFromJSON(filePath) {
        const wb = this.getStatisticalWorkbook();
        wb.loadFromJSON(filePath);
        this.addToHistory(`Loaded statistical data from JSON: ${filePath}`);
        this.lastModified = new Date();
        return wb;
    }

    /**
     * Load data from array for statistical analysis
     */
    loadStatisticalDataFromArray(data) {
        const wb = this.getStatisticalWorkbook();
        wb.loadFromArray(data);
        this.addToHistory(`Loaded statistical data from array (${data.length} samples)`);
        this.lastModified = new Date();
        return wb;
    }

    // ==================== EXPLORATORY DATA ANALYSIS ====================

    /**
     * Perform exploratory data analysis
     */
    /**
 * Perform exploratory data analysis
 */
performEDA() {
    const wb = this.getStatisticalWorkbook();
    
    // Ensure data is loaded and validated
    if (!wb.rawSamples || wb.rawSamples.length === 0) {
        throw new Error('No data loaded. Call loadStatisticalDataFromArray() first.');
    }
    
    // Calculate basic statistics if not already done
    if (!wb.statistics || Object.keys(wb.statistics).length === 0) {
        wb.calculateStatistics();
    }
    
    // Calculate robust statistics if not already done
    if (!wb.robustStatistics || Object.keys(wb.robustStatistics).length === 0) {
        wb.calculateRobustStatistics();
    }
    
    // Fit a default distribution for visualization purposes
    if (!wb.distributionParams) {
        wb.selectedDistribution = 'normal';
        wb.fitDistribution();
    }
    
    const eda = wb.generateEDAReport();
    
    this.statisticalAnalyses.push({
        type: 'EDA',
        timestamp: new Date(),
        results: eda
    });
    
    this.addToHistory('Performed Exploratory Data Analysis');
    this.lastModified = new Date();
    
    return eda;
}

    /**
     * Get data quality assessment
     */
    getDataQualityAssessment() {
        const wb = this.getStatisticalWorkbook();
        return wb.validationResults.dataQuality;
    }

    /**
     * Get outlier detection results
     */
    getOutlierDetection() {
        const wb = this.getStatisticalWorkbook();
        return wb.robustStatistics.outlierDetection;
    }




    // ==================== DISTRIBUTION IDENTIFICATION ====================

    /**
     * Identify best-fit distribution family
     */
    identifyDistributionFamily(distributionList = null) {
        const wb = this.getStatisticalWorkbook();
        
        if (!distributionList) {
            // Test common distributions
            distributionList = ['normal', 'lognormal', 'exponential', 'gamma', 'beta', 'pareto'];
        }
        
        wb.compareDistributions(distributionList);
        
        this.statisticalAnalyses.push({
            type: 'DistributionIdentification',
            timestamp: new Date(),
            results: wb.comparisonResults
        });
        
        this.addToHistory(`Identified best-fit distribution: ${wb.comparisonResults.bestFit}`);
        this.lastModified = new Date();
        
        return wb.comparisonResults;
    }

    /**
     * Get suggested distributions based on data characteristics
     */
    suggestDistributions() {
        const wb = this.getStatisticalWorkbook();
        const stats = wb.statistics;
        const suggestions = [];

        // Based on skewness
        if (Math.abs(stats.skewness) < 0.5) {
            suggestions.push({ 
                distribution: 'normal', 
                reason: 'Low skewness suggests symmetric distribution'
            });
        } else if (stats.skewness > 1) {
            suggestions.push({ 
                distribution: 'lognormal', 
                reason: 'High positive skewness'
            });
            suggestions.push({ 
                distribution: 'gamma', 
                reason: 'Right-skewed data'
            });
        }

        // Based on data range
        if (stats.min >= 0 && stats.max <= 1) {
            suggestions.push({ 
                distribution: 'beta', 
                reason: 'Data bounded between 0 and 1'
            });
        }

        // Based on minimum value
        if (stats.min > 0) {
            suggestions.push({ 
                distribution: 'exponential', 
                reason: 'Positive data, possibly waiting times'
            });
        }

        return suggestions;
    }

 
    // ==================== MAIN STATISTICAL ANALYSIS METHOD ====================

    /**
     * Comprehensive distribution analysis (main entry point)
     * This is the primary method for complete statistical analysis
     */
    analyzeDistribution(config) {
        console.log("\n📊 Starting Comprehensive Distribution Analysis...\n");

        const wb = this.getStatisticalWorkbook();
        
        // Set progress callback if provided
        if (config.progressCallback) {
            wb.progressCallback = config.progressCallback;
        }

        wb.progressCallback({ stage: 'initialization', progress: 0 });
        
        // Configure analysis
        wb.sampleName = config.sampleName || "Sample Data";
        wb.variableName = config.variableName || "Value";
        wb.unitName = config.unitName || "units";
        wb.scenarioDescription = config.scenarioDescription || "";
        wb.rawSamples = [...config.samples];
        wb.selectedDistribution = config.distribution || 'normal';
        wb.distributionParams = config.distributionParams || null;
        wb.targetValue = config.targetValue || null;
        wb.targetAnalysisType = config.targetAnalysisType || null;

        console.log(`Sample Name: ${wb.sampleName}`);
        console.log(`Variable: ${wb.variableName} (${wb.unitName})`);
        console.log(`Sample Size: ${wb.rawSamples.length}`);
        console.log(`Distribution: ${wb.selectedDistribution}`);

        // Step 1: Validate data
        console.log("\nStep 1: Validating data...");
        wb.validationResults = wb.validateData();
        wb.progressCallback({ stage: 'validation', progress: 5 });
        console.log(`✅ Data Quality: ${wb.validationResults.dataQuality.score}/100 (${wb.validationResults.dataQuality.rating})`);
        
        if (wb.validationResults.issues.length > 0) {
            console.log("⚠️  Issues found:");
            wb.validationResults.issues.forEach(issue => console.log(`   - ${issue}`));
        }

        // Step 2: Calculate basic statistics
        console.log("\nStep 2: Calculating descriptive statistics...");
        wb.calculateStatistics();
        wb.progressCallback({ stage: 'statistics', progress: 15 });
        console.log(`✅ Mean: ${wb.statistics.mean.toFixed(4)}, SD: ${wb.statistics.standardDeviation.toFixed(4)}`);

        // Step 3: Fit distribution
        console.log(`\nStep 3: Fitting ${wb.selectedDistribution} distribution...`);
        wb.fitDistribution();
        wb.progressCallback({ stage: 'distribution', progress: 25 });
        console.log(`✅ Distribution fitted`);
        console.log(`   Log-Likelihood: ${wb.distributionAnalysis.logLikelihood.toFixed(4)}`);
        console.log(`   AIC: ${wb.distributionAnalysis.aic.toFixed(4)}`);
        console.log(`   BIC: ${wb.distributionAnalysis.bic.toFixed(4)}`);

        // Step 4: Calculate confidence intervals
        console.log("\nStep 4: Calculating confidence intervals...");
        wb.calculateDistributionConfidenceIntervals();
        wb.calculateParameterConfidenceIntervals();
        wb.progressCallback({ stage: 'confidence_intervals', progress: 35 });
        console.log(`✅ Confidence intervals calculated`);

        // Step 5: Perform goodness of fit tests
        console.log("\nStep 5: Performing goodness-of-fit tests...");
        wb.performGoodnessOfFitTests();
        wb.progressCallback({ stage: 'goodness_of_fit', progress: 45 });
        console.log(`✅ Goodness-of-fit tests completed`);
        console.log(`   K-S p-value: ${wb.goodnessOfFit.kolmogorovSmirnov.pValue.toFixed(4)}`);

        // Step 6: Robust statistics
        console.log("\nStep 6: Calculating robust statistics...");
        wb.calculateRobustStatistics();
        wb.progressCallback({ stage: 'robust_stats', progress: 55 });
        console.log(`✅ Robust statistics calculated`);
        if (wb.robustStatistics.outlierDetection) {
            console.log(`   Outliers: ${wb.robustStatistics.outlierDetection.outlierCount} (${wb.robustStatistics.outlierDetection.outlierPercentage})`);
        }

        // Step 7: Hypothesis testing if specified
        if (config.hypothesisTest) {
            console.log("\nStep 7: Performing hypothesis tests...");
            wb.performHypothesisTest(config.hypothesisTest);
            wb.progressCallback({ stage: 'hypothesis', progress: 65 });
            console.log(`✅ Hypothesis test completed`);
        } else {
            wb.progressCallback({ stage: 'hypothesis', progress: 65 });
        }

        // Step 8: Compare with other distributions if requested
        if (config.compareDistributions) {
            console.log("\nStep 8: Comparing distributions...");
            wb.compareDistributions(config.compareDistributions);
            wb.progressCallback({ stage: 'comparison', progress: 75 });
            console.log(`✅ Distribution comparison completed`);
            console.log(`   Best fit: ${wb.comparisonResults.bestFit}`);
        } else {
            wb.progressCallback({ stage: 'comparison', progress: 75 });
        }

        // Step 9: Target analysis if target value provided
        if (wb.targetValue !== null) {
            console.log("\nStep 9: Performing target analysis...");
            wb.calculateDistributionSpecificTargetAnalysis();
            wb.progressCallback({ stage: 'target_analysis', progress: 85 });
            console.log(`✅ Target analysis completed for value: ${wb.targetValue}`);
        } else {
            wb.progressCallback({ stage: 'target_analysis', progress: 85 });
        }

        // Step 10: Regression if specified
        if (config.regression) {
            console.log("\nStep 10: Performing regression analysis...");
            wb.performRegression(config.regression);
            wb.progressCallback({ stage: 'regression', progress: 90 });
            console.log(`✅ Regression analysis completed`);
        } else {
            wb.progressCallback({ stage: 'regression', progress: 90 });
        }

        // Step 11: Generate workbook
        console.log("\nStep 11: Generating statistical workbook...");
        wb.generateWorkbook();
        wb.progressCallback({ stage: 'complete', progress: 100 });
        console.log(`✅ Workbook generated`);

        // Track in spreadsheet history
        this.statisticalAnalyses.push({
            type: 'ComprehensiveDistributionAnalysis',
            timestamp: new Date(),
            distribution: wb.selectedDistribution,
            sampleSize: wb.rawSamples.length,
            results: {
                validation: wb.validationResults,
                statistics: wb.statistics,
                distribution: wb.distributionAnalysis,
                goodnessOfFit: wb.goodnessOfFit
            }
        });

        this.addToHistory(`Performed comprehensive distribution analysis on ${wb.sampleName}`);
        this.lastModified = new Date();

        console.log("\n✅ Comprehensive Distribution Analysis Complete!\n");

        return {
            workbook: wb.currentWorkbook,
            analysis: {
                sampleName: wb.sampleName,
                variableName: wb.variableName,
                distribution: wb.selectedDistribution,
                dataQuality: wb.validationResults.dataQuality,
                statistics: wb.statistics,
                distributionFit: wb.distributionAnalysis,
                goodnessOfFit: wb.goodnessOfFit,
                confidenceIntervals: wb.confidenceIntervals,
                parameterCI: wb.parameterConfidenceIntervals,
                robustStatistics: wb.robustStatistics,
                hypothesisTests: wb.hypothesisTests,
                comparisonResults: wb.comparisonResults,
                targetAnalysis: wb.targetAnalysis,
                regressionResults: wb.regressionResults
            }
        };
    }

    /**
     * Simplified version - analyze distribution with minimal configuration
     */
    quickDistributionAnalysis(samples, distribution = 'normal') {
        return this.analyzeDistribution({
            samples: samples,
            distribution: distribution,
            sampleName: 'Quick Analysis',
            variableName: 'Value',
            unitName: 'units'
        });
    }

    /**
     * Analyze distribution with automatic distribution selection
     */
    autoDistributionAnalysis(samples, config = {}) {
        console.log("\n🤖 Automatic Distribution Analysis...\n");

        // First, load data and suggest distributions
        this.loadStatisticalDataFromArray(samples);
        const suggestions = this.suggestDistributions();
        
        console.log("Suggested distributions:");
        suggestions.forEach(s => console.log(`  - ${s.distribution}: ${s.reason}`));

        // Test all suggested distributions
        const distributionsToTest = suggestions.map(s => s.distribution);
        
        // Perform comparison
        const comparison = this.identifyDistributionFamily(distributionsToTest);
        const bestDistribution = comparison.bestFit;

        console.log(`\nBest distribution identified: ${bestDistribution}`);

        // Now perform full analysis with the best distribution
        return this.analyzeDistribution({
            samples: samples,
            distribution: bestDistribution,
            compareDistributions: distributionsToTest,
            sampleName: config.sampleName || 'Auto Analysis',
            variableName: config.variableName || 'Value',
            unitName: config.unitName || 'units',
            ...config
        });
    }


   // ==================== FORMAL DISTRIBUTIONAL ASSUMPTION CHECKS ====================

    /**
     * Perform comprehensive goodness-of-fit tests
     */
    performGoodnessOfFitTests(distribution = null) {
        const wb = this.getStatisticalWorkbook();
        
        if (distribution) {
            wb.selectedDistribution = distribution;
            wb.fitDistribution();
        }
        
        wb.performGoodnessOfFitTests();
        
        this.statisticalAnalyses.push({
            type: 'GoodnessOfFit',
            timestamp: new Date(),
            distribution: wb.selectedDistribution,
            results: wb.goodnessOfFit
        });
        
        this.addToHistory(`Performed goodness-of-fit tests for ${wb.selectedDistribution} distribution`);
        this.lastModified = new Date();
        
        return wb.goodnessOfFit;
    }

    /**
     * Test normality (comprehensive)
     */
    testNormality() {
        const wb = this.getStatisticalWorkbook();
        wb.selectedDistribution = 'normal';
        wb.fitDistribution();
        wb.performGoodnessOfFitTests();
        
        const normalityTests = {
            shapiroWilk: wb.goodnessOfFit.shapiroWilk,
            kolmogorovSmirnov: wb.goodnessOfFit.kolmogorovSmirnov,
            andersonDarling: wb.goodnessOfFit.andersonDarling,
            skewness: wb.statistics.skewness,
            kurtosis: wb.statistics.kurtosis,
            conclusion: this._getNormalityConclusion(wb.goodnessOfFit, wb.statistics)
        };
        
        this.statisticalAnalyses.push({
            type: 'NormalityTest',
            timestamp: new Date(),
            results: normalityTests
        });
        
        this.addToHistory('Performed comprehensive normality tests');
        this.lastModified = new Date();
        
        return normalityTests;
    }

    _getNormalityConclusion(gof, stats) {
        const tests = [
            gof.shapiroWilk.pValue > 0.05,
            gof.kolmogorovSmirnov.pValue > 0.05,
            !gof.andersonDarling.reject['0.05'],
            Math.abs(stats.skewness) < 2,
            Math.abs(stats.kurtosis) < 7
        ];
        
        const passCount = tests.filter(t => t).length;
        
        if (passCount >= 4) return 'Strong evidence of normality';
        if (passCount >= 3) return 'Moderate evidence of normality';
        if (passCount >= 2) return 'Weak evidence of normality';
        return 'Data appears non-normal';
    }

    // ==================== VISUALIZATION GENERATION ====================

    /**
     * Generate all statistical visualizations
     */
    generateStatisticalVisualizations() {
        const wb = this.getStatisticalWorkbook();
        const visualizations = wb.generateAllVisualizations();
        
        this.statisticalAnalyses.push({
            type: 'Visualizations',
            timestamp: new Date(),
            count: Object.keys(visualizations).length
        });
        
        this.addToHistory(`Generated ${Object.keys(visualizations).length} statistical visualizations`);
        this.lastModified = new Date();
        
        return visualizations;
    }

    /**
     * Save all statistical visualizations
     */
    async saveStatisticalVisualizations(outputDir = './visualizations') {
        const wb = this.getStatisticalWorkbook();
        const savedFiles = await wb.saveAllVisualizations(outputDir);
        
        this.addToHistory(`Saved ${savedFiles.length} visualization files to ${outputDir}`);
        this.lastModified = new Date();
        
        return savedFiles;
    }

    /**
     * Generate specific visualization
     */
    generateSpecificVisualization(type) {
        const wb = this.getStatisticalWorkbook();
        let visualization;
        
        switch(type) {
            case 'histogram':
                visualization = wb.generateHistogramData();
                break;
            case 'boxplot':
                visualization = wb.generateBoxplotData();
                break;
            case 'qqplot':
                visualization = wb.generateQQPlotData();
                break;
            case 'densityplot':
                visualization = wb.generateDensityPlotData();
                break;
            case 'ppplot':
                visualization = wb.generatePPPlotData();
                break;
            default:
                throw new Error(`Unknown visualization type: ${type}`);
        }
        
        this.addToHistory(`Generated ${type} visualization`);
        this.lastModified = new Date();
        
        return visualization;
    }

    // ==================== PARAMETER ESTIMATION ====================

    /**
     * Estimate distribution parameters (Maximum Likelihood Estimation)
     */
    estimateParameters(distribution) {
        const wb = this.getStatisticalWorkbook();
        wb.selectedDistribution = distribution;
        wb.fitDistribution();
        
        this.statisticalAnalyses.push({
            type: 'ParameterEstimation',
            timestamp: new Date(),
            distribution: distribution,
            parameters: wb.distributionParams
        });
        
        this.addToHistory(`Estimated parameters for ${distribution} distribution`);
        this.lastModified = new Date();
        
        return {
            distribution: distribution,
            parameters: wb.distributionParams,
            logLikelihood: wb.distributionAnalysis.logLikelihood,
            aic: wb.distributionAnalysis.aic,
            bic: wb.distributionAnalysis.bic
        };
    }

    // ==================== POINT ESTIMATES ====================

    /**
     * Calculate point estimates (mean, median, mode)
     */
    calculatePointEstimates() {
        const wb = this.getStatisticalWorkbook();
        const stats = wb.statistics;
        
        const pointEstimates = {
            mean: {
                value: stats.mean,
                description: 'Arithmetic average',
                robustness: 'Sensitive to outliers'
            },
            median: {
                value: stats.median,
                description: '50th percentile',
                robustness: 'Robust to outliers'
            },
            trimmedMean: {
                value: wb.robustStatistics.trimmedMean.value,
                description: wb.robustStatistics.trimmedMean.interpretation,
                robustness: 'Moderately robust'
            },
            winsorizedMean: {
                value: wb.robustStatistics.winsorizedMean.value,
                description: wb.robustStatistics.winsorizedMean.interpretation,
                robustness: 'Moderately robust'
            }
        };
        
        this.statisticalAnalyses.push({
            type: 'PointEstimates',
            timestamp: new Date(),
            results: pointEstimates
        });
        
        this.addToHistory('Calculated point estimates');
        this.lastModified = new Date();
        
        return pointEstimates;
    }

    // ==================== STANDARD ERROR CALCULATION ====================

    /**
     * Calculate standard errors
     */
    calculateStandardErrors() {
        const wb = this.getStatisticalWorkbook();
        const stats = wb.statistics;
        
        const standardErrors = {
            mean: {
                value: stats.standardError,
                formula: 'σ / √n',
                interpretation: 'Standard deviation of the sample mean'
            },
            proportion: stats.mean >= 0 && stats.mean <= 1 ? {
                value: Math.sqrt(stats.mean * (1 - stats.mean) / stats.n),
                formula: '√[p(1-p)/n]',
                interpretation: 'Standard error of proportion'
            } : null,
            median: {
                value: 1.253 * stats.standardDeviation / Math.sqrt(stats.n),
                formula: '1.253σ / √n',
                interpretation: 'Approximate standard error of median (for normal data)'
            }
        };
        
        this.statisticalAnalyses.push({
            type: 'StandardErrors',
            timestamp: new Date(),
            results: standardErrors
        });
        
        this.addToHistory('Calculated standard errors');
        this.lastModified = new Date();
        
        return standardErrors;
    }

    // ==================== CONFIDENCE INTERVALS ====================

    /**
     * Calculate confidence intervals for parameters
     */
    calculateConfidenceIntervals(confidenceLevel = 0.95) {
        const wb = this.getStatisticalWorkbook();
        
        // Mean confidence interval
        const meanCI = wb.calculateMeanConfidenceInterval(confidenceLevel);
        
        // Distribution parameter confidence intervals
        wb.calculateParameterConfidenceIntervals();
        const paramCI = wb.parameterConfidenceIntervals[confidenceLevel];
        
        // Distribution quantile confidence intervals
        const quantileCI = wb.confidenceIntervals[confidenceLevel];
        
        const allCIs = {
            mean: meanCI,
            parameters: paramCI,
            quantiles: quantileCI,
            confidenceLevel: confidenceLevel
        };
        
        this.statisticalAnalyses.push({
            type: 'ConfidenceIntervals',
            timestamp: new Date(),
            confidenceLevel: confidenceLevel,
            results: allCIs
        });
        
        this.addToHistory(`Calculated ${(confidenceLevel * 100)}% confidence intervals`);
        this.lastModified = new Date();
        
        return allCIs;
    }

    // ==================== HYPOTHESIS TESTING ====================

    /**
     * Perform hypothesis test
     */
    performHypothesisTest(testConfig) {
        const wb = this.getStatisticalWorkbook();
        wb.performHypothesisTest(testConfig);
        
        this.statisticalAnalyses.push({
            type: 'HypothesisTest',
            timestamp: new Date(),
            testType: testConfig.type,
            results: wb.hypothesisTests
        });
        
        this.addToHistory(`Performed ${testConfig.type} hypothesis test`);
        this.lastModified = new Date();
        
        return wb.hypothesisTests;
    }

    /**
     * One-sample t-test
     */
    oneSampleTTest(nullValue, alternative = 'two-sided', alpha = 0.05) {
        return this.performHypothesisTest({
            type: 'oneSample',
            nullValue: nullValue,
            alternative: alternative,
            alpha: alpha
        });
    }

    /**
     * Two-sample t-test
     */
    twoSampleTTest(sample2, equalVariance = true, alternative = 'two-sided', alpha = 0.05) {
        return this.performHypothesisTest({
            type: 'twoSample',
            sample2: sample2,
            equalVariance: equalVariance,
            alternative: alternative,
            alpha: alpha
        });
    }

    /**
     * Paired t-test
     */
    pairedTTest(sample2, alternative = 'two-sided', alpha = 0.05) {
        return this.performHypothesisTest({
            type: 'paired',
            sample2: sample2,
            alternative: alternative,
            alpha: alpha
        });
    }

    // ==================== CORRELATION ANALYSIS ====================

    /**
     * Calculate correlation matrix (if multiple variables in spreadsheet)
     */
    calculateCorrelationMatrix() {
        // Extract numeric columns from spreadsheet data
        const numericColumns = this._extractNumericColumns();
        
        if (numericColumns.length < 2) {
            throw new Error('Need at least 2 numeric columns for correlation analysis');
        }
        
        const correlationMatrix = [];
        const wb = this.getStatisticalWorkbook();
        
        for (let i = 0; i < numericColumns.length; i++) {
            correlationMatrix[i] = [];
            for (let j = 0; j < numericColumns.length; j++) {
                if (i === j) {
                    correlationMatrix[i][j] = 1.0;
                } else {
                    correlationMatrix[i][j] = wb.pearsonCorrelation(
                        numericColumns[i].data,
                        numericColumns[j].data
                    );
                }
            }
        }
        
        const result = {
            variables: numericColumns.map(col => col.name),
            correlationMatrix: correlationMatrix,
            interpretation: this._interpretCorrelations(correlationMatrix, numericColumns.map(col => col.name))
        };
        
        this.statisticalAnalyses.push({
            type: 'CorrelationMatrix',
            timestamp: new Date(),
            results: result
        });
        
        this.addToHistory('Calculated correlation matrix');
        this.lastModified = new Date();
        
        return result;
    }

    _extractNumericColumns() {
        const numericColumns = [];
        
        for (let col = 0; col < this.headers.length; col++) {
            const columnData = [];
            let isNumeric = true;
            
            for (let row = 0; row < this.data.length; row++) {
                const value = this.data[row][col];
                if (typeof value === 'number' && !isNaN(value)) {
                    columnData.push(value);
                } else if (value !== null && value !== undefined && value !== '') {
                    isNumeric = false;
                    break;
                }
            }
            
            if (isNumeric && columnData.length > 0) {
                numericColumns.push({
                    name: this.headers[col],
                    data: columnData
                });
            }
        }
        
        return numericColumns;
    }

    _interpretCorrelations(matrix, varNames) {
        const interpretations = [];
        
        for (let i = 0; i < matrix.length; i++) {
            for (let j = i + 1; j < matrix[i].length; j++) {
                const r = matrix[i][j];
                const absR = Math.abs(r);
                
                let strength;
                if (absR < 0.3) strength = 'weak';
                else if (absR < 0.7) strength = 'moderate';
                else strength = 'strong';
                
                const direction = r > 0 ? 'positive' : 'negative';
                
                interpretations.push({
                    var1: varNames[i],
                    var2: varNames[j],
                    correlation: r,
                    strength: strength,
                    direction: direction,
                    description: `${strength} ${direction} correlation (r = ${r.toFixed(3)})`
                });
            }
        }
        
        return interpretations;
    }

    // ==================== REGRESSION ANALYSIS ====================

    /**
     * Perform regression analysis
     */
    performRegression(config) {
        const wb = this.getStatisticalWorkbook();
        wb.performRegression(config);
        
        this.statisticalAnalyses.push({
            type: 'Regression',
            timestamp: new Date(),
            regressionType: config.type,
            results: wb.regressionResults
        });
        
        this.addToHistory(`Performed ${config.type} regression`);
        this.lastModified = new Date();
        
        return wb.regressionResults;
    }

    /**
     * Simple linear regression
     */
    linearRegression(x, y) {
        return this.performRegression({
            type: 'linear',
            predictors: x,
            response: y
        });
    }

    /**
     * Multiple regression
     */
    multipleRegression(X, y) {
        return this.performRegression({
            type: 'multiple',
            predictors: X,
            response: y
        });
    }

    /**
     * Polynomial regression
     */
    polynomialRegression(x, y, degree = 2) {
        return this.performRegression({
            type: 'polynomial',
            predictors: x,
            response: y,
            degree: degree
        });
    }

    /**
     * Logistic regression
     */
    logisticRegression(X, y) {
        return this.performRegression({
            type: 'logistic',
            predictors: X,
            response: y
        });
    }

    /**
     * Ridge regression
     */
    ridgeRegression(X, y, lambda = 1.0) {
        return this.performRegression({
            type: 'ridge',
            predictors: X,
            response: y,
            lambda: lambda
        });
    }

    /**
     * Lasso regression
     */
    lassoRegression(X, y, lambda = 1.0) {
        return this.performRegression({
            type: 'lasso',
            predictors: X,
            response: y,
            lambda: lambda
        });
    }

    // ==================== BAYESIAN INFERENCE ====================

    /**
     * Perform Bayesian inference
     */
    performBayesianInference(config) {
        const wb = this.getStatisticalWorkbook();
        const results = wb.performBayesianInference(config);
        
        this.statisticalAnalyses.push({
            type: 'BayesianInference',
            timestamp: new Date(),
            priorDistribution: config.priorDistribution,
            results: results
        });
        
        this.addToHistory('Performed Bayesian inference analysis');
        this.lastModified = new Date();
        
        return results;
    }

    // ==================== POWER ANALYSIS ====================

    /**
     * Calculate power analysis
     */
    calculatePowerAnalysis(config) {
        const wb = this.getStatisticalWorkbook();
        const results = wb.calculatePowerAnalysis(config);
        
        this.statisticalAnalyses.push({
            type: 'PowerAnalysis',
            timestamp: new Date(),
            config: config,
            results: results
        });
        
        this.addToHistory('Performed power analysis');
        this.lastModified = new Date();
        
        return results;
    }

    // ==================== META-ANALYSIS ====================

    /**
     * Perform meta-analysis
     */
    performMetaAnalysis(studies) {
        const wb = this.getStatisticalWorkbook();
        const results = wb.performMetaAnalysis(studies);
        
        this.statisticalAnalyses.push({
            type: 'MetaAnalysis',
            timestamp: new Date(),
            studyCount: studies.length,
            results: results
        });
        
        this.addToHistory(`Performed meta-analysis on ${studies.length} studies`);
        this.lastModified = new Date();
        
        return results;
    }

    // ==================== TIME SERIES ANALYSIS ====================

    /**
     * Perform time series analysis
     */
    performTimeSeriesAnalysis(timeData, config = {}) {
        const wb = this.getStatisticalWorkbook();
        const results = wb.performTimeSeriesAnalysis(timeData, config);
        
        this.statisticalAnalyses.push({
            type: 'TimeSeriesAnalysis',
            timestamp: new Date(),
            dataPoints: timeData.length,
            results: results
        });
        
        this.addToHistory('Performed time series analysis');
        this.lastModified = new Date();
        
        return results;
    }

    // ==================== ANOVA ====================

    /**
     * Perform ANOVA
     */
    performANOVA(groups) {
        const wb = this.getStatisticalWorkbook();
        const results = wb.performANOVA(groups);
        
        this.statisticalAnalyses.push({
            type: 'ANOVA',
            timestamp: new Date(),
            groupCount: groups.length,
            results: results
        });
        
        this.addToHistory(`Performed ANOVA on ${groups.length} groups`);
        this.lastModified = new Date();
        
        return results;
    }

    // ==================== STATISTICAL REPORTS ====================

    /**
     * Generate comprehensive statistical report
     */
    generateStatisticalReport() {
        const wb = this.getStatisticalWorkbook();
        
        // Ensure all analyses are complete
        if (!wb.statistics || Object.keys(wb.statistics).length === 0) {
            throw new Error('No statistical data loaded. Load data first.');
        }
        
        const report = {
            metadata: {
                generatedAt: new Date(),
                sampleName: wb.sampleName,
                sampleSize: wb.statistics.n,
                author: this.author
            },
            dataQuality: wb.validationResults,
            descriptiveStatistics: wb.statistics,
            robustStatistics: wb.robustStatistics,
            distributionAnalysis: wb.distributionAnalysis,
            goodnessOfFit: wb.goodnessOfFit,
            confidenceIntervals: wb.confidenceIntervals,
            parameterConfidenceIntervals: wb.parameterConfidenceIntervals,
            hypothesisTests: wb.hypothesisTests,
            regressionResults: wb.regressionResults,
            bayesianAnalysis: wb.bayesianAnalysis,
            powerAnalysis: wb.powerAnalysis,
            metaAnalysis: wb.metaAnalysis,
            timeSeriesAnalysis: wb.timeSeriesAnalysis,
            visualizations: wb.visualizations,
            recommendations: this._generateRecommendations(wb)
        };
        
        this.statisticalAnalyses.push({
            type: 'ComprehensiveReport',
            timestamp: new Date(),
            report: report
        });
        
        this.addToHistory('Generated comprehensive statistical report');
        this.lastModified = new Date();
        
        return report;
    }

    _generateRecommendations(wb) {
        const recommendations = [];
        
        // Data quality recommendations
        if (wb.validationResults.dataQuality.score < 75) {
            recommendations.push({
                category: 'Data Quality',
                priority: 'High',
                message: 'Consider collecting more data or investigating data quality issues',
                details: wb.validationResults.warnings
            });
        }
        
        // Distribution recommendations
        if (wb.goodnessOfFit && wb.goodnessOfFit.kolmogorovSmirnov) {
            if (wb.goodnessOfFit.kolmogorovSmirnov.reject['0.05']) {
                recommendations.push({
                    category: 'Distribution Fit',
                    priority: 'Medium',
                    message: `Current ${wb.selectedDistribution} distribution may not fit well`,
                    details: 'Consider alternative distributions'
                });
            }
        }
        
        // Outlier recommendations
        if (wb.robustStatistics.outlierDetection) {
            const outlierPct = parseFloat(wb.robustStatistics.outlierDetection.outlierPercentage);
            if (outlierPct > 5) {
                recommendations.push({
                    category: 'Outliers',
                    priority: 'Medium',
                    message: `${outlierPct}% outliers detected`,
                    details: wb.robustStatistics.outlierDetection.recommendation
                });
            }
        }
        
        return recommendations;
    }


    /**
     * Get analysis summary
     */
    getAnalysisSummary() {
        return {
            totalAnalyses: this.statisticalAnalyses.length,
            analysesByType: this._groupAnalysesByType(),
            latestAnalysis: this.statisticalAnalyses[this.statisticalAnalyses.length - 1],
            dataLoaded: this.statisticalWorkbook ? this.statisticalWorkbook.rawSamples.length > 0 : false
        };
    }

    _groupAnalysesByType() {
        const grouped = {};
        this.statisticalAnalyses.forEach(analysis => {
            if (!grouped[analysis.type]) {
                grouped[analysis.type] = [];
            }
            grouped[analysis.type].push(analysis);
        });
        return grouped;
    }


    // ==================== STATISTICAL WORKBOOK GENERATION ====================

/**
 * Generate statistical workbook (calls EnhancedStatisticalWorkbook.generateWorkbook)
 */
generateStatisticalWorkbook() {
    const wb = this.getStatisticalWorkbook();
    
    if (!wb.rawSamples || wb.rawSamples.length === 0) {
        throw new Error('No statistical data loaded. Load data first.');
    }
    
    wb.generateWorkbook();
    
    this.addToHistory('Generated statistical workbook');
    this.lastModified = new Date();
    
    return wb.currentWorkbook;
}

/**
 * Generate XLSX file with embedded images (synchronous)
 */
generateStatisticalXLSXWithImages(filename = null) {
    const wb = this.getStatisticalWorkbook();
    
    if (!filename) {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        filename = `statistical_workbook_${timestamp}.xlsx`;
    }
    
    // This is a synchronous wrapper that will work without async
    try {
        
        const workbook = new ExcelJS.Workbook();
        const sheet = workbook.addWorksheet('Analysis');
        
        // Generate workbook data if not already done
        if (!wb.currentWorkbook) {
            wb.generateWorkbook();
        }

        // Add all the text data rows first
        wb.currentWorkbook.forEach((row, rowIndex) => {
            const excelRow = sheet.getRow(rowIndex + 1);
            row.forEach((cell, colIndex) => {
                const excelCell = excelRow.getCell(colIndex + 1);
                excelCell.value = cell.value;

                // Apply styling based on cell type
                switch (cell.type) {
                    case 'header':
                        excelCell.fill = {
                            type: 'pattern',
                            pattern: 'solid',
                            fgColor: { argb: 'FF4472C4' }
                        };
                        excelCell.font = { color: { argb: 'FFFFFFFF' }, bold: true };
                        break;
                    case 'section':
                        excelCell.fill = {
                            type: 'pattern',
                            pattern: 'solid',
                            fgColor: { argb: 'FFD9E2F3' }
                        };
                        excelCell.font = { bold: true };
                        break;
                    case 'result':
                        excelCell.fill = {
                            type: 'pattern',
                            pattern: 'solid',
                            fgColor: { argb: 'FFE2EFDA' }
                        };
                        break;
                    case 'formula':
                        excelCell.fill = {
                            type: 'pattern',
                            pattern: 'solid',
                            fgColor: { argb: 'FFFFF2CC' }
                        };
                        excelCell.font = { color: { argb: 'FF7F6000' } };
                        break;
                    case 'label':
                        excelCell.font = { bold: true };
                        break;
                }

                excelCell.border = {
                    top: { style: 'thin', color: { argb: 'FF808080' } },
                    left: { style: 'thin', color: { argb: 'FF808080' } },
                    bottom: { style: 'thin', color: { argb: 'FF808080' } },
                    right: { style: 'thin', color: { argb: 'FF808080' } }
                };
            });
            excelRow.commit();
        });

        // Auto-width columns
        sheet.columns.forEach(column => {
            column.width = 30;
        });

        // Create a separate sheet for visualizations
        const vizSheet = workbook.addWorksheet('Visualizations');

        // Generate visualizations if not already done
        if (!wb.visualizations) {
            wb.generateAllVisualizations();
        }

        let currentRow = 1;

        // Add each visualization to the sheet
        for (const [name, data] of Object.entries(wb.visualizations)) {
            try {
                let canvas;

                switch(name) {
                    case 'histogram':
                        canvas = wb.renderHistogram(data);
                        break;
                    case 'boxplot':
                        canvas = wb.renderBoxplot(data);
                        break;
                    case 'qqplot':
                        canvas = wb.renderQQPlot(data);
                        break;
                    case 'densityplot':
                        canvas = wb.renderDensityPlot(data);
                        break;
                    case 'ppplot':
                        canvas = wb.renderPPPlot(data);
                        break;
                    case 'acf':
                        if (wb.renderACFPlot) canvas = wb.renderACFPlot(data);
                        break;
                    case 'pacf':
                        if (wb.renderPACFPlot) canvas = wb.renderPACFPlot(data);
                        break;
                    case 'timeseries':
                        if (wb.renderTimeSeriesPlot) canvas = wb.renderTimeSeriesPlot(data);
                        break;
                    default:
                        if (name.startsWith('residuals_') && wb.renderResidualPlots) {
                            canvas = wb.renderResidualPlots(data);
                        }
                }

                if (canvas) {
                    // Convert canvas to buffer
                    const imageBuffer = canvas.toBuffer('image/png');

                    // Add image to workbook
                    const imageId = workbook.addImage({
                        buffer: imageBuffer,
                        extension: 'png',
                    });

                    // Add title for the plot
                    vizSheet.getCell(`A${currentRow}`).value = name.toUpperCase().replace(/_/g, ' ');
                    vizSheet.getCell(`A${currentRow}`).font = { bold: true, size: 14 };
                    currentRow += 2;

                    // Embed image
                    vizSheet.addImage(imageId, {
                        tl: { col: 0, row: currentRow },
                        ext: { width: canvas.width / 2, height: canvas.height / 2 }
                    });

                    // Move to next position (leave space for image)
                    currentRow += Math.ceil(canvas.height / 2 / 20) + 3;
                }
            } catch (e) {
                console.error(`Error adding ${name} to workbook:`, e.message);
            }
        }

        // Save workbook synchronously using writeFile which returns a Promise
        // We'll wrap this properly
        return workbook.xlsx.writeFile(filename).then(() => {
            console.log(`✅ Statistical workbook with images saved: ${filename}`);
            this.addToHistory(`Generated XLSX workbook with images: ${filename}`);
            this.lastModified = new Date();
            return filename;
        }).catch(error => {
            console.error(`❌ Error saving workbook:`, error);
            throw error;
        });
        
    } catch (error) {
        console.error(`❌ Error generating workbook:`, error);
        throw error;
    }
}

/**
 * Get statistical workbook data (for manual export)
 */
getStatisticalWorkbookData() {
    const wb = this.getStatisticalWorkbook();
    
    if (!wb.currentWorkbook) {
        wb.generateWorkbook();
    }
    
    return wb.currentWorkbook;
}

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

    // ==================== COMPREHENSIVE WORKBOOK STATUS ====================

    /**
     * Get complete workbook status including all components
     */
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
                stereochemistryDiagrams: this.stereochemistryDiagrams.length
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

    /**
     * Display complete workbook status
     */
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

    /**
     * Clear all data
     */
    clearAll() {
        this.data = [];
        this.headers = [];
        this.formulas = {};
        this.calculations = {};
        this.charts = [];
        this.anatomicalDiagrams = [];
        this.crossSectionDiagrams = [];
        this.stereochemistryDiagrams = [];
        this.statisticalAnalyses = [];
        
        if (this.graphingCalculator) {
            this.graphingCalculator.clearAll();
        }
        
        if (this.statisticalWorkbook) {
            this.statisticalWorkbook = null;
        }
        
        this.addToHistory('Cleared all workbook data');
        this.lastModified = new Date();
        
        }

         /**
     * Export complete workbook (synchronous JSON only)
     */
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
                version: '2.0.0'
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
                stereochemistry: this.stereochemistryDiagrams
            },
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

        this.addToHistory(`Exported complete workbook to ${filename}`);
        console.log(`✅ Complete workbook exported to: ${filename}`);
        return filename;
    }

    /**
     * Import workbook from JSON file (synchronous only)
     */
    importWorkbook(filename) {
        const data = JSON.parse(fs.readFileSync(filename, 'utf8'));
        
        this.sheetName = data.metadata.name;
        this.author = data.metadata.author;
        this.createdDate = new Date(data.metadata.created);
        this.lastModified = new Date(data.metadata.lastModified);
        
        this.headers = data.spreadsheet.headers;
        this.data = data.spreadsheet.data;
        this.formulas = data.spreadsheet.formulas;
        this.calculations = data.spreadsheet.calculations;
        
        this.charts = data.charts || [];
        this.anatomicalDiagrams = data.diagrams?.anatomical || [];
        this.crossSectionDiagrams = data.diagrams?.crossSection || [];
        this.stereochemistryDiagrams = data.diagrams?.stereochemistry || [];
        
        this.statisticalAnalyses = data.statisticalAnalyses || [];
        this.history = data.history || [];

        this.addToHistory(`Imported workbook from ${filename}`);
        console.log(`✅ Workbook imported from: ${filename}`);
    }

    // ==================== ADVANCED STATISTICAL WORKFLOWS ====================

    /**
     * Complete statistical workflow for distribution analysis
     */
    completeDistributionAnalysisWorkflow(data, config = {}) {
        console.log("\n📊 Starting Complete Distribution Analysis Workflow...\n");

        // Step 1: Load data
        console.log("Step 1: Loading data...");
        this.loadStatisticalDataFromArray(data);
        const wb = this.getStatisticalWorkbook();
        console.log(`✅ Loaded ${data.length} samples`);

        // Step 2: EDA
        console.log("\nStep 2: Exploratory Data Analysis...");
        const eda = this.performEDA();
        console.log(`✅ Data Quality Score: ${eda.dataQuality.score}/100 (${eda.dataQuality.rating})`);

        // Step 3: Suggest distributions
        console.log("\nStep 3: Suggesting distributions...");
        const suggestions = this.suggestDistributions();
        console.log(`✅ ${suggestions.length} distributions suggested`);
        suggestions.forEach(s => console.log(`  - ${s.distribution}: ${s.reason}`));

        // Step 4: Identify best-fit distribution
        console.log("\nStep 4: Identifying best-fit distribution...");
        const distributionList = config.distributionsToTest || 
            suggestions.map(s => s.distribution).concat(['normal', 'lognormal']);
        const comparison = this.identifyDistributionFamily([...new Set(distributionList)]);
        console.log(`✅ Best fit: ${comparison.bestFit}`);

        // Step 5: Fit selected distribution
        console.log(`\nStep 5: Fitting ${comparison.bestFit} distribution...`);
        const paramEstimates = this.estimateParameters(comparison.bestFit);
        console.log(`✅ Parameters estimated`);
        console.log(`  Log-Likelihood: ${paramEstimates.logLikelihood.toFixed(4)}`);
        console.log(`  AIC: ${paramEstimates.aic.toFixed(4)}`);
        console.log(`  BIC: ${paramEstimates.bic.toFixed(4)}`);

        // Step 6: Goodness of fit tests
        console.log("\nStep 6: Performing goodness-of-fit tests...");
        const gof = this.performGoodnessOfFitTests();
        console.log(`✅ Goodness-of-fit tests completed`);
        console.log(`  K-S p-value: ${gof.kolmogorovSmirnov.pValue.toFixed(4)}`);

        // Step 7: Calculate confidence intervals
        console.log("\nStep 7: Calculating confidence intervals...");
        const ci = this.calculateConfidenceIntervals(0.95);
        console.log(`✅ 95% confidence intervals calculated`);

        // Step 8: Generate visualizations
        console.log("\nStep 8: Generating visualizations...");
        const visualizations = this.generateStatisticalVisualizations();
        console.log(`✅ ${Object.keys(visualizations).length} visualizations generated`);

        // Step 9: Save visualizations (synchronous)
        if (config.saveVisualizations !== false) {
            console.log("\nStep 9: Saving visualizations...");
            const outputDir = config.visualizationDir || './visualizations';
            const savedFiles = this.saveStatisticalVisualizationsSync(outputDir);
            console.log(`✅ Saved ${savedFiles.length} visualization files`);
        }

        // Step 10: Generate report
        console.log("\nStep 10: Generating comprehensive report...");
        const report = this.generateStatisticalReport();
        console.log(`✅ Report generated`);

        // Step 11: Export report (synchronous JSON only)
        if (config.exportReport !== false) {
            console.log("\nStep 11: Exporting report...");
            const reportFile = this.exportStatisticalReportSync(
                config.reportFilename
            );
            console.log(`✅ Report exported to: ${reportFile}`);
        }

        console.log("\n✅ Complete Distribution Analysis Workflow finished successfully!\n");

        return {
            dataQuality: eda.dataQuality,
            bestDistribution: comparison.bestFit,
            parameterEstimates: paramEstimates,
            goodnessOfFit: gof,
            confidenceIntervals: ci,
            visualizations: visualizations,
            report: report
        };
    }

    /**
     * Save statistical visualizations (synchronous version)
     */
    saveStatisticalVisualizationsSync(outputDir = './visualizations') {
        const wb = this.getStatisticalWorkbook();
        
        // Create output directory if it doesn't exist
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }
        
        // Generate all visualizations if not already done
        if (!wb.visualizations) {
            wb.generateAllVisualizations();
        }
        
        const savedFiles = [];
        
        // Render and save each visualization
        for (const [name, data] of Object.entries(wb.visualizations)) {
            try {
                let canvas;
                const filename = path.join(outputDir, `${wb.sampleName}_${name}.png`);
                
                switch(name) {
                    case 'histogram':
                        canvas = wb.renderHistogram(data);
                        break;
                    case 'boxplot':
                        canvas = wb.renderBoxplot(data);
                        break;
                    case 'qqplot':
                        canvas = wb.renderQQPlot(data);
                        break;
                    case 'densityplot':
                        canvas = wb.renderDensityPlot(data);
                        break;
                    case 'ppplot':
                        canvas = wb.renderPPPlot(data);
                        break;
                    case 'acf':
                        canvas = wb.renderACFPlot(data);
                        break;
                    case 'pacf':
                        canvas = wb.renderPACFPlot(data);
                        break;
                    case 'timeseries':
                        canvas = wb.renderTimeSeriesPlot(data);
                        break;
                    default:
                        if (name.startsWith('residuals_')) {
                            canvas = wb.renderResidualPlots(data);
                        }
                }
                
                if (canvas) {
                    const buffer = canvas.toBuffer('image/png');
                    fs.writeFileSync(filename, buffer);
                    savedFiles.push(filename);
                    console.log(`  Saved: ${filename}`);
                }
            } catch (e) {
                console.error(`  Error saving ${name}:`, e.message);
            }
        }
        
        this.addToHistory(`Saved ${savedFiles.length} visualization files to ${outputDir}`);
        this.lastModified = new Date();
        
        return savedFiles;
    }

    /**
     * Export statistical report (synchronous JSON only)
     */
    exportStatisticalReportSync(filename = null) {
        const report = this.generateStatisticalReport();
        
        if (!filename) {
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            filename = `statistical_report_${timestamp}.json`;
        }
        
        fs.writeFileSync(filename, JSON.stringify(report, null, 2));
        
        this.addToHistory(`Exported statistical report to ${filename}`);
        this.lastModified = new Date();
        
        return filename;
    }

    /**
     * Complete data analysis workflow (synchronous)
     */
    completeDataAnalysisWorkflow(config) {
        console.log("\n🚀 Starting Complete Data Analysis Workflow...\n");

        // 1. Load spreadsheet data
        if (config.spreadsheetData) {
            console.log("Loading spreadsheet data...");
            this.headers = config.spreadsheetData.headers;
            this.data = config.spreadsheetData.data;
            console.log(`✅ Loaded ${this.data.length} rows, ${this.headers.length} columns`);
        }

        // 2. Perform statistical analysis on specified column
        if (config.statisticalColumn) {
            console.log(`\nPerforming statistical analysis on column: ${config.statisticalColumn}...`);
            const columnIndex = this.headers.indexOf(config.statisticalColumn);
            
            if (columnIndex === -1) {
                throw new Error(`Column ${config.statisticalColumn} not found`);
            }

            const columnData = this.data.map(row => row[columnIndex]).filter(val => 
                typeof val === 'number' && !isNaN(val)
            );

            const analysisResults = this.completeDistributionAnalysisWorkflow(
                columnData,
                config.statisticalConfig || {}
            );

            console.log("\n✅ Statistical analysis completed");

            return {
                spreadsheet: {
                    headers: this.headers,
                    rows: this.data.length
                },
                statistics: analysisResults
            };
        }

        // 3. Correlation analysis if multiple numeric columns
        const numericColumns = this._extractNumericColumns();
        if (numericColumns.length >= 2 && config.performCorrelation !== false) {
            console.log("\nPerforming correlation analysis...");
            const correlations = this.calculateCorrelationMatrix();
            console.log(`✅ Correlation matrix calculated for ${numericColumns.length} variables`);
        }

        console.log("\n✅ Complete Data Analysis Workflow finished!\n");
    }

       /**
     * Quick statistical summary
     */

    /**
 * Quick statistical summary
 */
quickStatisticalSummary(data) {
    // Load data
    this.loadStatisticalDataFromArray(data);
    const wb = this.getStatisticalWorkbook();
    
    // Perform necessary calculations
    wb.validateData();
    wb.calculateStatistics();
    wb.calculateRobustStatistics();

    return {
        sampleSize: wb.statistics.n,
        mean: wb.statistics.mean,
        median: wb.statistics.median,
        standardDeviation: wb.statistics.standardDeviation,
        min: wb.statistics.min,
        max: wb.statistics.max,
        range: wb.statistics.range,
        skewness: wb.statistics.skewness,
        kurtosis: wb.statistics.kurtosis,
        outliers: wb.robustStatistics.outlierDetection ? 
                  wb.robustStatistics.outlierDetection.outlierCount : 0,
        dataQuality: wb.validationResults && wb.validationResults.dataQuality ? 
                     wb.validationResults.dataQuality.rating : 'Unknown'
    };
}

    /**
     * Hypothesis testing workflow
     */
    performHypothesisTestingWorkflow(testType, config) {
        console.log(`\n🧪 Hypothesis Testing Workflow: ${testType}\n`);

        const wb = this.getStatisticalWorkbook();
        
        if (!wb || !wb.rawSamples || wb.rawSamples.length === 0) {
            throw new Error('No data loaded. Load data first using loadStatisticalDataFromArray()');
        }

        // Perform the test
        const results = this.performHypothesisTest({
            type: testType,
            ...config
        });

        // Display results
        console.log("Test Results:");
        console.log(`  Test Type: ${results[testType].testType}`);
        console.log(`  Test Statistic: ${results[testType].testStatistic.toFixed(4)}`);
        console.log(`  p-value: ${results[testType].pValue.toFixed(4)}`);
        console.log(`  Conclusion: ${results[testType].conclusion}`);

        return results;
    }

    /**
     * Regression workflow
     */
    performRegressionWorkflow(regressionType, X, y, config = {}) {
        console.log(`\n📈 Regression Analysis Workflow: ${regressionType}\n`);

        const results = this.performRegression({
            type: regressionType,
            predictors: X,
            response: y,
            ...config
        });

        const regResult = results[regressionType];

        // Display results
        console.log("Regression Results:");
        console.log(`  Type: ${regResult.type}`);
        if (regResult.modelFit) {
            console.log(`  R²: ${regResult.modelFit.rSquared.toFixed(4)}`);
            console.log(`  Adjusted R²: ${regResult.modelFit.adjustedRSquared.toFixed(4)}`);
            console.log(`  RMSE: ${regResult.modelFit.RMSE.toFixed(4)}`);
        }

        console.log("\nCoefficients:");
        regResult.coefficients.forEach(coef => {
            console.log(`  ${coef.name}: ${coef.value.toFixed(4)}`);
        });

        // Generate residual plots
        if (config.generatePlots !== false) {
            console.log("\nGenerating residual plots...");
            const wb = this.getStatisticalWorkbook();
            wb.generateResidualPlots(regressionType);
            console.log("✅ Residual plots generated");
        }

        return regResult;
    }

    // ==================== HELPER DISPLAY METHODS ====================

    /**
     * Display statistical summary
     */
    displayStatisticalSummary() {
        const wb = this.getStatisticalWorkbook();
        
        if (!wb || !wb.statistics) {
            console.log("❌ No statistical data loaded");
            return;
        }

        console.log("\n📊 STATISTICAL SUMMARY");
        console.log("=".repeat(70));
        console.log(`Sample Size: ${wb.statistics.n}`);
        console.log(`Mean: ${wb.statistics.mean.toFixed(4)}`);
        console.log(`Median: ${wb.statistics.median.toFixed(4)}`);
        console.log(`Standard Deviation: ${wb.statistics.standardDeviation.toFixed(4)}`);
        console.log(`Min: ${wb.statistics.min.toFixed(4)}`);
        console.log(`Max: ${wb.statistics.max.toFixed(4)}`);
        console.log(`Range: ${wb.statistics.range.toFixed(4)}`);
        console.log(`Skewness: ${wb.statistics.skewness.toFixed(4)}`);
        console.log(`Kurtosis: ${wb.statistics.kurtosis.toFixed(4)}`);
        
        if (wb.robustStatistics.outlierDetection) {
            console.log(`\nOutliers: ${wb.robustStatistics.outlierDetection.outlierCount} (${wb.robustStatistics.outlierDetection.outlierPercentage})`);
        }
        
        if (wb.validationResults) {
            console.log(`\nData Quality: ${wb.validationResults.dataQuality.score}/100 (${wb.validationResults.dataQuality.rating})`);
        }
        
        console.log("=".repeat(70));
    }

    /**
     * Display distribution analysis
     */
    displayDistributionAnalysis() {
        const wb = this.getStatisticalWorkbook();
        
        if (!wb || !wb.distributionAnalysis) {
            console.log("❌ No distribution analysis performed");
            return;
        }

        const da = wb.distributionAnalysis;

        console.log("\n📈 DISTRIBUTION ANALYSIS");
        console.log("=".repeat(70));
        console.log(`Distribution: ${da.name}`);
        
        console.log("\nParameters:");
        Object.entries(da.parameters).forEach(([param, value]) => {
            console.log(`  ${param}: ${value.toFixed(4)}`);
        });

        console.log("\nModel Fit:");
        console.log(`  Log-Likelihood: ${da.logLikelihood.toFixed(4)}`);
        console.log(`  AIC: ${da.aic.toFixed(4)}`);
        console.log(`  BIC: ${da.bic.toFixed(4)}`);

        if (wb.goodnessOfFit) {
            console.log("\nGoodness of Fit:");
            console.log(`  K-S Statistic: ${wb.goodnessOfFit.kolmogorovSmirnov.testStatistic.toFixed(4)}`);
            console.log(`  K-S p-value: ${wb.goodnessOfFit.kolmogorovSmirnov.pValue.toFixed(4)}`);
        }

        console.log("=".repeat(70));
    }

    /**
     * Display analysis summary
     */
    displayAnalysisSummary() {
        const summary = this.getAnalysisSummary();

        console.log("\n📊 ANALYSIS SUMMARY");
        console.log("=".repeat(70));
        console.log(`Total Analyses: ${summary.totalAnalyses}`);
        console.log(`Data Loaded: ${summary.dataLoaded ? 'Yes' : 'No'}`);

        if (summary.totalAnalyses > 0) {
            console.log("\nAnalyses by Type:");
            Object.entries(summary.analysesByType).forEach(([type, analyses]) => {
                console.log(`  ${type}: ${analyses.length}`);
            });

            if (summary.latestAnalysis) {
                console.log(`\nLatest Analysis:`);
                console.log(`  Type: ${summary.latestAnalysis.type}`);
                console.log(`  Timestamp: ${summary.latestAnalysis.timestamp.toLocaleString()}`);
            }
        }

        console.log("=".repeat(70));
    }

  

    // ==================== DIAGNOSTIC METHODS ====================

    /**
     * Check system health
     */
    checkSystemHealth() {
        const health = {
            spreadsheet: {
                status: 'OK',
                rows: this.data.length,
                columns: this.headers.length,
                issues: []
            },
            statistics: {
                status: 'OK',
                initialized: !!this.statisticalWorkbook,
                samplesLoaded: this.statisticalWorkbook ? this.statisticalWorkbook.rawSamples.length : 0,
                issues: []
            },
            graphingCalculator: {
                status: 'OK',
                initialized: !!this.graphingCalculator,
                itemCount: this.getTotalGraphingItems(),
                issues: []
            },
            overall: 'OK'
        };

        // Check for issues
        if (this.data.length === 0) {
            health.spreadsheet.issues.push('No spreadsheet data loaded');
        }

        if (this.statisticalWorkbook && this.statisticalWorkbook.validationResults) {
            if (!this.statisticalWorkbook.validationResults.isValid) {
                health.statistics.status = 'WARNING';
                health.statistics.issues = this.statisticalWorkbook.validationResults.issues;
            }
        }

        // Set overall status
        if (health.spreadsheet.issues.length > 0 || 
            health.statistics.issues.length > 0 || 
            health.graphingCalculator.issues.length > 0) {
            health.overall = 'WARNING';
        }

        return health;
    }

    /**
     * Display system health
     */
    displaySystemHealth() {
        const health = this.checkSystemHealth();

        console.log("\n🏥 SYSTEM HEALTH CHECK");
        console.log("=".repeat(70));
        console.log(`Overall Status: ${health.overall}`);

        console.log("\n📊 Spreadsheet:");
        console.log(`  Status: ${health.spreadsheet.status}`);
        console.log(`  Rows: ${health.spreadsheet.rows}`);
        console.log(`  Columns: ${health.spreadsheet.columns}`);
        if (health.spreadsheet.issues.length > 0) {
            console.log(`  Issues:`);
            health.spreadsheet.issues.forEach(issue => console.log(`    - ${issue}`));
        }

        console.log("\n📈 Statistics:");
        console.log(`  Status: ${health.statistics.status}`);
        console.log(`  Initialized: ${health.statistics.initialized}`);
        console.log(`  Samples: ${health.statistics.samplesLoaded}`);
        if (health.statistics.issues.length > 0) {
            console.log(`  Issues:`);
            health.statistics.issues.forEach(issue => console.log(`    - ${issue}`));
        }

        console.log("\n🧮 Graphing Calculator:");
        console.log(`  Status: ${health.graphingCalculator.status}`);
        console.log(`  Initialized: ${health.graphingCalculator.initialized}`);
        console.log(`  Items: ${health.graphingCalculator.itemCount}`);

        console.log("=".repeat(70));
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
    // UNIFIED DIAGRAM MANAGEMENT (Anatomical + Cross-Section + Stereochemistry)
    // ========================================================================

    // Get all available diagrams
    getAllAvailableDiagrams() {
        return {
            anatomical: this.getAvailableAnatomicalDiagrams(),
            crossSection: this.getAvailableCrossSectionDiagrams(),
            stereochemistry: this.getAvailableStereochemistryDiagrams()
        };
    }

    // Search all diagrams
    searchAllDiagrams(query) {
        return {
            anatomical: this.searchAnatomicalDiagrams(query),
            crossSection: this.searchCrossSectionDiagrams(query),
            stereochemistry: this.searchStereochemistryDiagrams(query)
        };
    }

    // Get all diagram statistics
    getAllDiagramStatistics() {
        const anatomicalStats = this.getAnatomicalDiagramStatistics();
        const crossSectionStats = this.getCrossSectionDiagramStatistics();
        const stereochemStats = this.getStereochemistryDiagramStatistics();

        return {
            anatomical: anatomicalStats,
            crossSection: crossSectionStats,
            stereochemistry: stereochemStats,
            combined: {
                totalAvailable: 
                    anatomicalStats.totalDiagrams + 
                    crossSectionStats.totalAvailable + 
                    stereochemStats.totalAvailable,
                totalInWorkbook: 
                    this.anatomicalDiagrams.length + 
                    this.crossSectionDiagrams.length + 
                    this.stereochemistryDiagrams.length
            }
        };
    }

    // List all diagrams by type
    listAllDiagrams() {
        return {
            anatomical: this.listAnatomicalDiagrams(),
            crossSection: this.listCrossSectionDiagrams(),
            stereochemistry: this.listStereochemistryDiagrams(),
            total: 
                this.anatomicalDiagrams.length + 
                this.crossSectionDiagrams.length + 
                this.stereochemistryDiagrams.length
        };
    }

    // Get all diagram suggestions
    getAllDiagramSuggestions() {
        return {
            anatomical: this.suggestAnatomicalDiagrams(),
            crossSection: this.suggestCrossSectionDiagrams(),
            stereochemistry: this.suggestStereochemistryDiagrams()
        };
    }

    // Render all diagrams (anatomical + cross-section + stereochemistry)
    renderAllDiagrams() {
        const results = {
            anatomical: this.renderAllAnatomicalDiagrams(),
            crossSection: this.renderAllCrossSectionDiagrams(),
            stereochemistry: this.renderAllStereochemistryDiagrams()
        };

        return {
            ...results,
            summary: {
                anatomicalRendered: results.anatomical.filter(r => !r.error).length,
                crossSectionRendered: results.crossSection.filter(r => !r.error).length,
                stereochemistryRendered: results.stereochemistry.filter(r => !r.error).length,
                totalRendered: 
                    results.anatomical.filter(r => !r.error).length + 
                    results.crossSection.filter(r => !r.error).length +
                    results.stereochemistry.filter(r => !r.error).length,
                totalErrors: 
                    results.anatomical.filter(r => r.error).length + 
                    results.crossSection.filter(r => r.error).length +
                    results.stereochemistry.filter(r => r.error).length
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
            stereochemistry: []
        };

        if (separateByType) {
            // Create subfolders
            const anatomicalFolder = `${folderPath}/anatomical`;
            const crossSectionFolder = `${folderPath}/cross-section`;
            const stereochemFolder = `${folderPath}/stereochemistry`;
            
            [anatomicalFolder, crossSectionFolder, stereochemFolder].forEach(folder => {
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
        } else {
            // Export all to same folder
            const anatomicalExport = this.exportAnatomicalDiagramsToFolder(folderPath);
            results.anatomical = anatomicalExport.results;

            const crossSectionExport = this.exportCrossSectionDiagramsToFolder(folderPath);
            results.crossSection = crossSectionExport.results;

            const stereochemExport = this.exportStereochemistryDiagramsToFolder(folderPath);
            results.stereochemistry = stereochemExport.results;
        }

        return {
            folder: folderPath,
            separatedByType: separateByType,
            results,
            summary: {
                anatomicalExported: results.anatomical.filter(r => !r.error).length,
                crossSectionExported: results.crossSection.filter(r => !r.error).length,
                stereochemistryExported: results.stereochemistry.filter(r => !r.error).length,
                totalExported: 
                    results.anatomical.filter(r => !r.error).length + 
                    results.crossSection.filter(r => !r.error).length +
                    results.stereochemistry.filter(r => !r.error).length,
                totalErrors: 
                    results.anatomical.filter(r => r.error).length + 
                    results.crossSection.filter(r => r.error).length +
                    results.stereochemistry.filter(r => r.error).length
            }
        };
    }

    // Batch add diagrams by category (all three types)
    addDiagramsByCategory(category, diagramType = 'all', options = {}) {
        const results = {
            anatomical: [],
            crossSection: [],
            stereochemistry: []
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

        return results;
    }

    // Generate comprehensive diagram guide
    generateComprehensiveDiagramGuide() {
        const guide = {
            title: 'Complete Scientific Diagram Reference',
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

        guide.summary = {
            totalAvailableDiagrams: 
                guide.anatomical.totalAvailable + 
                guide.crossSection.totalAvailable +
                guide.stereochemistry.totalAvailable,
            anatomicalInWorkbook: this.anatomicalDiagrams.length,
            crossSectionInWorkbook: this.crossSectionDiagrams.length,
            stereochemistryInWorkbook: this.stereochemistryDiagrams.length,
            totalInWorkbook: 
                this.anatomicalDiagrams.length + 
                this.crossSectionDiagrams.length +
                this.stereochemistryDiagrams.length
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
                summary: {
                    totalCharts: this.charts.length,
                    totalAnatomical: diagramsList.anatomical.length,
                    totalCrossSection: diagramsList.crossSection.length,
                    totalStereochemistry: diagramsList.stereochemistry.length,
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
            stereochemistry: []
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

        return results;
    }

    // Get diagram by ID (searches all three types)
    getDiagramById(diagramId) {
        const anatomical = this.anatomicalDiagrams.find(d => d.id === diagramId);
        if (anatomical) return { ...anatomical, type: 'anatomical' };

        const crossSection = this.crossSectionDiagrams.find(d => d.id === diagramId);
        if (crossSection) return { ...crossSection, type: 'crossSection' };

        const stereochemistry = this.stereochemistryDiagrams.find(d => d.id === diagramId);
        if (stereochemistry) return { ...stereochemistry, type: 'stereochemistry' };

        return null;
    }

    // Remove diagram by ID (searches all three types)
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
            totalDiagrams: {
                available: 
                    AnatomicalDiagramsRegistry.getAllDiagrams().length +
                    CrossSectionDiagramsRegistry.getAllDiagrams().length +
                    StereochemistryDiagramsRegistry.getAllDiagrams().length,
                inWorkbook: 
                    this.anatomicalDiagrams.length +
                    this.crossSectionDiagrams.length +
                    this.stereochemistryDiagrams.length
            }
        };

        return catalog;
    }

    // Count diagrams by type
    getDiagramCounts() {
        return {
            anatomical: this.anatomicalDiagrams.length,
            crossSection: this.crossSectionDiagrams.length,
            stereochemistry: this.stereochemistryDiagrams.length,
            total: 
                this.anatomicalDiagrams.length + 
                this.crossSectionDiagrams.length + 
                this.stereochemistryDiagrams.length
        };
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
            stereochemistry: []
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
            stereochemistry: []
        };

        const metadata = {
            exportDate: new Date().toISOString(),
            workbook: this.sheetName,
            author: this.author,
            diagrams: {
                anatomical: [],
                crossSection: [],
                stereochemistry: []
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
                totalExported: 
                    results.anatomical.filter(r => !r.error).length +
                    results.crossSection.filter(r => !r.error).length +
                    results.stereochemistry.filter(r => !r.error).length,
                totalErrors: 
                    results.anatomical.filter(r => r.error).length +
                    results.crossSection.filter(r => r.error).length +
                    results.stereochemistry.filter(r => r.error).length
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
            summary: {
                totalDiagrams: 
                    this.anatomicalDiagrams.length + 
                    this.crossSectionDiagrams.length + 
                    this.stereochemistryDiagrams.length,
                totalAvailable: 
                    AnatomicalDiagramsRegistry.getAllDiagrams().length +
                    CrossSectionDiagramsRegistry.getAllDiagrams().length +
                    StereochemistryDiagramsRegistry.getAllDiagrams().length,
                overallUtilizationRate: 
                    (this.anatomicalDiagrams.length + this.crossSectionDiagrams.length + this.stereochemistryDiagrams.length) /
                    (AnatomicalDiagramsRegistry.getAllDiagrams().length + CrossSectionDiagramsRegistry.getAllDiagrams().length + StereochemistryDiagramsRegistry.getAllDiagrams().length)
            }
        };
    }

    // Clear all diagrams of specific type
    clearDiagramsByType(type) {
        const removed = {
            anatomical: 0,
            crossSection: 0,
            stereochemistry: 0
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
            case 'all':
                removed.anatomical = this.anatomicalDiagrams.length;
                removed.crossSection = this.crossSectionDiagrams.length;
                removed.stereochemistry = this.stereochemistryDiagrams.length;
                this.anatomicalDiagrams = [];
                this.crossSectionDiagrams = [];
                this.stereochemistryDiagrams = [];
                this.addToHistory(`Cleared all diagrams (${removed.anatomical + removed.crossSection + removed.stereochemistry})`);
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



    // ========================================================================
    // CHART MANAGEMENT METHODS
    // ========================================================================

    // Get available charts
    getAvailableCharts() {
        const charts = {};
        const categories = ExcelChartsRegistry.getAllCategories();

        categories.forEach(category => {
            charts[category] = ExcelChartsRegistry.getChartsByCategory(category);
        });

        return charts;
    }

    // Get chart suggestions based on data
    suggestCharts(dataRange = null) {
        const suggestions = [];

        // Check data structure
        const hasNumericData = this.data.some(row =>
            row.some(cell => !isNaN(parseFloat(cell)))
        );

        const hasMultipleSeries = this.data.length > 3;
        const hasMultipleColumns = this.data[0]?.length > 2;

        // Basic suggestions
        if (hasNumericData) {
            suggestions.push({
                key: 'columnChart',
                priority: 10,
                reason: 'Great for comparing values across categories'
            });

            suggestions.push({
                key: 'pieChart',
                priority: 9,
                reason: 'Perfect for showing composition/parts of whole'
            });
        }

        if (hasMultipleSeries) {
            suggestions.push({
                key: 'lineChart',
                priority: 8,
                reason: 'Excellent for showing trends over time'
            });

            suggestions.push({
                key: 'areaChart',
                priority: 7,
                reason: 'Good for showing cumulative trends'
            });
        }

        if (hasMultipleColumns && this.data.length > 5) {
            suggestions.push({
                key: 'radarChart',
                priority: 7,
                reason: 'Great for comparing multiple attributes'
            });
        }

        return suggestions.sort((a, b) => b.priority - a.priority);
    }

    // Get chart help
    getChartHelp(chartKey) {
        const chart = ExcelChartsRegistry.getChart(chartKey);
        if (!chart) {
            return { error: 'Chart not found' };
        }

        return {
            name: chart.name,
            category: chart.category,
            description: chart.description,
            excel: chart.excel,
            usage: chart.usage,
            examples: chart.examples,
            dataRequired: chart.dataRequired,
            defaultOptions: chart.defaultOptions
        };
    }

    // Add chart to workbook
    addChart(chartConfig) {
        const {
            key,
            title = null,
            data,
            options = {},
            filename = null
        } = chartConfig;

        // Validate chart exists
        const chart = ExcelChartsRegistry.getChart(key);
        if (!chart) {
            throw new Error(`Chart '${key}' not found`);
        }

        // Validate data
        const validation = ExcelChartsRegistry.validateChartData(key, data);
        if (!validation.valid) {
            throw new Error(`Data validation failed: ${validation.errors.join(', ')}`);
        }

        // Merge options
        const mergedOptions = { ...chart.defaultOptions, ...options };
        if (title) mergedOptions.title = title;

        // Store chart config
        const chartObj = {
            id: `chart_${this.charts.length + 1}`,
            key,
            title: mergedOptions.title,
            data,
            options: mergedOptions,
            filename: filename || `${this.sheetName}_${key}_${Date.now()}.png`,
            createdAt: new Date()
        };

        this.charts.push(chartObj);
        this.addToHistory(`Added chart: ${chart.name}`);

        return chartObj;
    }

    // Render chart to PNG
    renderChartToPNG(chartIndex) {
        if (chartIndex < 0 || chartIndex >= this.charts.length) {
            throw new Error(`Chart index ${chartIndex} out of range`);
        }

        const chartConfig = this.charts[chartIndex];
        
        const canvas = createCanvas(chartConfig.options.width, chartConfig.options.height);
        const ctx = canvas.getContext('2d');

        // Render the chart
        this.chartRenderer.renderChart(canvas, ctx, chartConfig.key, chartConfig.data, chartConfig.options);

        // Save to file
        const buffer = canvas.toBuffer('image/png');
        fs.writeFileSync(chartConfig.filename, buffer);

        return {
            id: chartConfig.id,
            filename: chartConfig.filename,
            size: buffer.length
        };
    }

    // Render all charts
    renderAllCharts() {
        const results = [];

        this.charts.forEach((_, index) => {
            try {
                const result = this.renderChartToPNG(index);
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

    // Get chart statistics
    getChartStatistics() {
        const stats = ExcelChartsRegistry.getChartStats();
        return {
            totalCharts: Object.values(stats).reduce((sum, cat) => sum + cat.count, 0),
            byCategory: stats,
            chartsInWorkbook: this.charts.length
        };
    }

    // Search charts
    searchCharts(query) {
        return ExcelChartsRegistry.searchCharts(query);
    }

    // List all charts in workbook
    listCharts() {
        return this.charts.map((chart, index) => ({
            index,
            id: chart.id,
            name: chart.title,
            type: ExcelChartsRegistry.getChart(chart.key).name,
            filename: chart.filename,
            created: chart.createdAt
        }));
    }

    // Remove chart
    removeChart(chartIndex) {
        if (chartIndex < 0 || chartIndex >= this.charts.length) {
            throw new Error(`Chart index ${chartIndex} out of range`);
        }

        const removed = this.charts.splice(chartIndex, 1);
        this.addToHistory(`Removed chart: ${removed[0].title}`);
        return removed[0];
    }

    // Update chart
    updateChart(chartIndex, updates) {
        if (chartIndex < 0 || chartIndex >= this.charts.length) {
            throw new Error(`Chart index ${chartIndex} out of range`);
        }

        const chart = this.charts[chartIndex];
        
        if (updates.title) chart.title = updates.title;
        if (updates.data) chart.data = updates.data;
        if (updates.options) {
            chart.options = { ...chart.options, ...updates.options };
        }

        this.addToHistory(`Updated chart: ${chart.title}`);
        return chart;
    }



       // ========================================================================
    // ANATOMICAL DIAGRAM MANAGEMENT METHODS
    // ========================================================================

    // Get available anatomical diagrams
    getAvailableAnatomicalDiagrams() {
        const diagrams = {};
        const categories = AnatomicalDiagramsRegistry.getAllCategories();

        categories.forEach(category => {
            diagrams[category] = AnatomicalDiagramsRegistry.getDiagramsByCategory(category);
        });

        return diagrams;
    }

    // Get diagram suggestions based on context
    suggestAnatomicalDiagrams(context = null) {
        const suggestions = [];

        // Check headers for medical/anatomical keywords
        const hasCardiovascular = this.headers.some(h => 
            /heart|blood|artery|vein|circulation|cardiac/i.test(h)
        );
        
        const hasRespiratory = this.headers.some(h => 
            /lung|breath|respiratory|oxygen|co2/i.test(h)
        );
        
        const hasDigestive = this.headers.some(h => 
            /stomach|intestine|digest|food|nutrition/i.test(h)
        );

        const hasNervous = this.headers.some(h => 
            /brain|nerve|neural|neuron|spine/i.test(h)
        );

        const hasSkeletal = this.headers.some(h => 
            /bone|skeleton|skull|spine|fracture/i.test(h)
        );

        // Add suggestions based on context
        if (hasCardiovascular) {
            suggestions.push({
                key: 'heartAnatomy',
                priority: 10,
                reason: 'Cardiovascular data detected in headers'
            });
            suggestions.push({
                key: 'circulatorySystem',
                priority: 9,
                reason: 'Blood circulation context identified'
            });
        }

        if (hasRespiratory) {
            suggestions.push({
                key: 'respiratorySystem',
                priority: 10,
                reason: 'Respiratory data detected'
            });
        }

        if (hasDigestive) {
            suggestions.push({
                key: 'digestiveSystem',
                priority: 10,
                reason: 'Digestive system data detected'
            });
        }

        if (hasNervous) {
            suggestions.push({
                key: 'nervousSystem',
                priority: 10,
                reason: 'Nervous system data detected'
            });
            suggestions.push({
                key: 'neuronStructure',
                priority: 8,
                reason: 'Neural anatomy context'
            });
        }

        if (hasSkeletal) {
            suggestions.push({
                key: 'skull',
                priority: 9,
                reason: 'Skeletal data detected'
            });
            suggestions.push({
                key: 'boneStructure',
                priority: 8,
                reason: 'Bone anatomy context'
            });
        }

        // General suggestions if no specific context
        if (suggestions.length === 0) {
            suggestions.push(
                { key: 'heartAnatomy', priority: 7, reason: 'Popular anatomy diagram' },
                { key: 'cellStructure', priority: 6, reason: 'Fundamental biology' },
                { key: 'bloodCells', priority: 5, reason: 'Common medical reference' }
            );
        }

        return suggestions.sort((a, b) => b.priority - a.priority);
    }

    // Get diagram help
    getAnatomicalDiagramHelp(diagramKey) {
        const diagram = AnatomicalDiagramsRegistry.getDiagram(diagramKey);
        if (!diagram) {
            return { error: 'Diagram not found' };
        }

        return {
            name: diagram.name,
            category: diagram.category,
            description: diagram.description,
            usage: diagram.usage,
            examples: diagram.examples,
            dataRequired: diagram.dataRequired,
            defaultOptions: diagram.defaultOptions,
            chamberOptions: diagram.chamberOptions || null
        };
    }

    // Add anatomical diagram to workbook
    addAnatomicalDiagram(diagramConfig) {
        const {
            key,
            title = null,
            options = {},
            filename = null
        } = diagramConfig;

        // Validate diagram exists
        const diagram = AnatomicalDiagramsRegistry.getDiagram(key);
        if (!diagram) {
            throw new Error(`Anatomical diagram '${key}' not found`);
        }

        // Merge options
        const mergedOptions = { ...diagram.defaultOptions, ...options };
        if (title) mergedOptions.title = title;

        // Store diagram config
        const diagramObj = {
            id: `diagram_${this.anatomicalDiagrams.length + 1}`,
            key,
            title: mergedOptions.title,
            options: mergedOptions,
            filename: filename || `${this.sheetName}_${key}_${Date.now()}.png`,
            createdAt: new Date(),
            category: diagram.category
        };

        this.anatomicalDiagrams.push(diagramObj);
        this.addToHistory(`Added anatomical diagram: ${diagram.name}`);

        return diagramObj;
    }

    // Render anatomical diagram to PNG
    renderAnatomicalDiagramToPNG(diagramIndex) {
        if (diagramIndex < 0 || diagramIndex >= this.anatomicalDiagrams.length) {
            throw new Error(`Diagram index ${diagramIndex} out of range`);
        }

        const diagramConfig = this.anatomicalDiagrams[diagramIndex];
        
        
        const width = diagramConfig.options.width || 800;
        const height = diagramConfig.options.height || 600;
        const canvas = createCanvas(width, height);
        const ctx = canvas.getContext('2d');

        // Update renderer's canvas
        this.diagramRenderer.canvas = canvas;
        this.diagramRenderer.ctx = ctx;

        // Render the appropriate diagram
        this.renderSpecificDiagram(diagramConfig.key, diagramConfig.options);

        // Save to file
        const buffer = canvas.toBuffer('image/png');
        fs.writeFileSync(diagramConfig.filename, buffer);

        return {
            id: diagramConfig.id,
            filename: diagramConfig.filename,
            size: buffer.length,
            category: diagramConfig.category
        };
    }

    // Helper method to render specific diagram types
    renderSpecificDiagram(key, options) {
        const x = 0;
        const y = 0;
        const width = options.width || 800;
        const height = options.height || 600;

        switch (key) {
            case 'heartAnatomy':
                this.diagramRenderer.renderHeartAnatomyDiagram(x, y, width, height, options);
                break;
            case 'circulatorySystem':
                this.diagramRenderer.renderCirculatorySystemDiagram(x, y, width, height, options);
                break;
            case 'bloodVesselComparison':
                this.diagramRenderer.renderBloodVesselComparison(x, y, width, height, options);
                break;
            case 'heartValves':
                this.diagramRenderer.renderHeartValvesDiagram(x, y, width, height, options);
                break;
            case 'respiratorySystem':
                this.diagramRenderer.renderRespiratorySystemDiagram(x, y, width, height, options);
                break;
            case 'digestiveSystem':
                this.diagramRenderer.renderDigestiveSystemDiagram(x, y, width, height, options);
                break;
            case 'digestiveOrgans':
                this.diagramRenderer.renderDigestiveOrganComparison(x, y, width, height);
                break;
            case 'nervousSystem':
                this.diagramRenderer.renderNervousSystemDiagram(x, y, width, height, options);
                break;
            case 'neuronStructure':
                this.diagramRenderer.renderNeuronDiagram(x, y, width, height, options);
                break;
            case 'skull':
            case 'femur':
            case 'ribcage':
            case 'spine':
                this.diagramRenderer.renderSkeletalSystemDiagram(x, y, width, height, options);
                break;
            case 'boneStructure':
                this.diagramRenderer.renderBoneStructureDiagram(x, y, width, height);
                break;
            case 'skeletalMuscle':
                this.diagramRenderer.renderMuscularSystemDiagram(x, y, width, height, options);
                break;
            case 'muscleContraction':
                this.diagramRenderer.renderMuscleContractionDiagram(x, y, width, height);
                break;
            case 'cellStructure':
                this.diagramRenderer.renderCellDiagram(x, y, width, height, options);
                break;
            case 'bloodCells':
                this.diagramRenderer.renderBloodCellsDiagram(x, y, width, height, options);
                break;
            case 'dnaStructure':
                this.diagramRenderer.renderDNADiagram(x, y, width, height, options);
                break;
            case 'skinStructure':
                this.diagramRenderer.renderSkinDiagram(x, y, width, height, options);
                break;
            case 'urinarySystem':
                this.diagramRenderer.renderUrinarySystemDiagram(x, y, width, height, options);
                break;
            case 'kidneyDetail':
                this.diagramRenderer.renderKidneyDetailDiagram(x, y, width, height);
                break;
            case 'eyeAnatomy':
                this.diagramRenderer.renderEyeDiagram(x, y, width, height, options);
                break;
            default:
                throw new Error(`Rendering for diagram '${key}' not implemented`);
        }
    }


    // Helper method for rendering specific anatomical diagrams
renderSpecificAnatomicalDiagram(key, options) {
    const x = 0;
    const y = 0;
    const width = options.width || 800;
    const height = options.height || 600;

    switch (key) {
        case 'heartAnatomy':
            this.diagramRenderer.renderHeartAnatomyDiagram(x, y, width, height, options);
            break;
        case 'circulatorySystem':
            this.diagramRenderer.renderCirculatorySystemDiagram(x, y, width, height, options);
            break;
        case 'bloodVesselComparison':
            this.diagramRenderer.renderBloodVesselComparison(x, y, width, height, options);
            break;
        case 'heartValves':
            this.diagramRenderer.renderHeartValvesDiagram(x, y, width, height, options);
            break;
        case 'respiratorySystem':
            this.diagramRenderer.renderRespiratorySystemDiagram(x, y, width, height, options);
            break;
        case 'digestiveSystem':
            this.diagramRenderer.renderDigestiveSystemDiagram(x, y, width, height, options);
            break;
        case 'digestiveOrgans':
            this.diagramRenderer.renderDigestiveOrganComparison(x, y, width, height);
            break;
        case 'nervousSystem':
            this.diagramRenderer.renderNervousSystemDiagram(x, y, width, height, options);
            break;
        case 'neuronStructure':
            this.diagramRenderer.renderNeuronDiagram(x, y, width, height, options);
            break;
        case 'skull':
        case 'femur':
        case 'ribcage':
        case 'spine':
            this.diagramRenderer.renderSkeletalSystemDiagram(x, y, width, height, options);
            break;
        case 'boneStructure':
            this.diagramRenderer.renderBoneStructureDiagram(x, y, width, height);
            break;
        case 'skeletalMuscle':
            this.diagramRenderer.renderMuscularSystemDiagram(x, y, width, height, options);
            break;
        case 'muscleContraction':
            this.diagramRenderer.renderMuscleContractionDiagram(x, y, width, height);
            break;
        case 'cellStructure':
            this.diagramRenderer.renderCellDiagram(x, y, width, height, options);
            break;
        case 'bloodCells':
            this.diagramRenderer.renderBloodCellsDiagram(x, y, width, height, options);
            break;
        case 'dnaStructure':
            this.diagramRenderer.renderDNADiagram(x, y, width, height, options);
            break;
        case 'skinStructure':
            this.diagramRenderer.renderSkinDiagram(x, y, width, height, options);
            break;
        case 'urinarySystem':
            this.diagramRenderer.renderUrinarySystemDiagram(x, y, width, height, options);
            break;
        case 'kidneyDetail':
            this.diagramRenderer.renderKidneyDetailDiagram(x, y, width, height);
            break;
        case 'eyeAnatomy':
            this.diagramRenderer.renderEyeDiagram(x, y, width, height, options);
            break;
        default:
            throw new Error(`Rendering for anatomical diagram '${key}' not implemented`);
    }
}



    // Render all anatomical diagrams
    renderAllAnatomicalDiagrams() {
        const results = [];

        this.anatomicalDiagrams.forEach((_, index) => {
            try {
                const result = this.renderAnatomicalDiagramToPNG(index);
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

    // Get anatomical diagram statistics
    getAnatomicalDiagramStatistics() {
        const stats = AnatomicalDiagramsRegistry.getDiagramStats();
        return {
            totalDiagrams: Object.values(stats).reduce((sum, cat) => sum + cat.count, 0),
            byCategory: stats,
            diagramsInWorkbook: this.anatomicalDiagrams.length
        };
    }

    // Search anatomical diagrams
    searchAnatomicalDiagrams(query) {
        return AnatomicalDiagramsRegistry.searchDiagrams(query);
    }

    // List all anatomical diagrams in workbook
    listAnatomicalDiagrams() {
        return this.anatomicalDiagrams.map((diagram, index) => ({
            index,
            id: diagram.id,
            name: diagram.title,
            type: AnatomicalDiagramsRegistry.getDiagram(diagram.key).name,
            category: diagram.category,
            filename: diagram.filename,
            created: diagram.createdAt
        }));
    }

    // Remove anatomical diagram
    removeAnatomicalDiagram(diagramIndex) {
        if (diagramIndex < 0 || diagramIndex >= this.anatomicalDiagrams.length) {
            throw new Error(`Diagram index ${diagramIndex} out of range`);
        }

        const removed = this.anatomicalDiagrams.splice(diagramIndex, 1);
        this.addToHistory(`Removed anatomical diagram: ${removed[0].title}`);
        return removed[0];
    }

    // Update anatomical diagram
    updateAnatomicalDiagram(diagramIndex, updates) {
        if (diagramIndex < 0 || diagramIndex >= this.anatomicalDiagrams.length) {
            throw new Error(`Diagram index ${diagramIndex} out of range`);
        }

        const diagram = this.anatomicalDiagrams[diagramIndex];
        
        if (updates.title) diagram.title = updates.title;
        if (updates.options) {
            diagram.options = { ...diagram.options, ...updates.options };
        }

        this.addToHistory(`Updated anatomical diagram: ${diagram.title}`);
        return diagram;
    }

    // Generate anatomical diagram guide
    generateAnatomicalDiagramGuide() {
        const guide = {
            title: 'Available Anatomical Diagrams',
            categories: {},
            totalDiagrams: 0,
            suggestions: []
        };

        const categories = AnatomicalDiagramsRegistry.getAllCategories();

        categories.forEach(category => {
            const diagrams = AnatomicalDiagramsRegistry.getDiagramsByCategory(category);
            guide.categories[category] = Object.entries(diagrams).map(([key, diagram]) => ({
                key,
                name: diagram.name,
                description: diagram.description,
                usage: diagram.usage,
                examples: diagram.examples
            }));
            guide.totalDiagrams += Object.keys(diagrams).length;
        });

        // Add suggestions based on workbook context
        guide.suggestions = this.suggestAnatomicalDiagrams();

        return guide;
    }

    // Batch add anatomical diagrams by category
    addAnatomicalDiagramsByCategory(category, options = {}) {
        const diagrams = AnatomicalDiagramsRegistry.getDiagramsByCategory(category);
        const results = [];

        Object.keys(diagrams).forEach(key => {
            try {
                const result = this.addAnatomicalDiagram({
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

    // Export anatomical diagrams to a folder
    exportAnatomicalDiagramsToFolder(folderPath) {
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
        }

        const results = [];

        this.anatomicalDiagrams.forEach((diagram, index) => {
            try {
                const originalFilename = diagram.filename;
                diagram.filename = `${folderPath}/${diagram.filename}`;
                
                const result = this.renderAnatomicalDiagramToPNG(index);
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

    // Generate combined report with charts and anatomical diagrams
    generateCombinedReport() {
        const baseReport = this.generateReport();
        
        return {
            ...baseReport,
            anatomicalDiagrams: this.listAnatomicalDiagrams(),
            anatomicalStats: this.getAnatomicalDiagramStatistics(),
            visualizations: {
                charts: this.charts.length,
                anatomicalDiagrams: this.anatomicalDiagrams.length,
                total: this.charts.length + this.anatomicalDiagrams.length
            }
        };
    }




    // ========================================================================
    // EXISTING METHODS (Keep all your existing methods here)
    // ========================================================================

    setThemeColors() {
        const themes = {
            professional: {
                background: '#ffffff',
                gridColor: '#d0d0d0',
                headerBg: '#4472C4',
                headerText: '#ffffff',
                cellBg: '#ffffff',
                cellText: '#000000',
                alternateRowBg: '#f2f2f2',
                formulaCellBg: '#fff2cc',
                calculatedCellBg: '#e2efda',
                borderColor: '#808080',
                highlightColor: '#ffeb9c'
            },
            dark: {
                background: '#1e1e1e',
                gridColor: '#3e3e3e',
                headerBg: '#2d2d30',
                headerText: '#ffffff',
                cellBg: '#252526',
                cellText: '#cccccc',
                alternateRowBg: '#2d2d30',
                formulaCellBg: '#3e3733',
                calculatedCellBg: '#283d2b',
                borderColor: '#555555',
                highlightColor: '#4d4d00'
            }
        };
        this.colors = themes[this.theme] || themes.professional;
    }

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

export default EnhancedSpreadsheetWorkbook;
