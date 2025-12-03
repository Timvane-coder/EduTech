// ============================================================================
// EXAMPLE USAGE - GRAPH REGISTRY AND RENDERER TESTING
// ============================================================================

import EnhancedSpreadsheetWorkbook from './excel.js';
import {GraphRegistry, GraphRenderer} from './graph.js';
import { createCanvas } from '@napi-rs/canvas';
import fs from 'fs';
import path from 'path';

// Import or require the classes
// const { GraphRegistry, GraphRenderer, EnhancedSpreadsheetWorkbook } = require('./your-file');

async function testGraphSystem() {
    console.log("\n" + "=".repeat(80));
    console.log("🧪 TESTING GRAPH REGISTRY AND RENDERER SYSTEM");
    console.log("=".repeat(80));

    // ========================================================================
    // PART 1: EXPLORE GRAPH REGISTRY
    // ========================================================================
    
    console.log("\n📚 PART 1: Exploring Graph Registry\n");

    // Get all available graphs
    const allGraphs = GraphRegistry.getAllGraphs();
    console.log(`✓ Total available graph types: ${allGraphs.length}`);
    console.log(`  Graph types: ${allGraphs.join(', ')}\n`);

    // Get graphs by category
    const categories = GraphRegistry.getAllCategories();
    console.log(`✓ Categories: ${categories.join(', ')}\n`);

    categories.forEach(category => {
        const graphsInCategory = GraphRegistry.getGraphsByCategory(category);
        console.log(`  ${category}: ${Object.keys(graphsInCategory).length} graphs`);
    });

    // Search for specific graphs
    console.log("\n✓ Searching for 'trigonometric' graphs:");
    const trigGraphs = GraphRegistry.searchGraphs('trigonometric');
    Object.keys(trigGraphs).forEach(key => {
        console.log(`  - ${trigGraphs[key].name}`);
    });

    // Get detailed info about a specific graph
    console.log("\n✓ Detailed info for 'quadratic' graph:");
    const quadraticInfo = GraphRegistry.getGraph('quadratic');
    console.log(`  Name: ${quadraticInfo.name}`);
    console.log(`  Equation: ${quadraticInfo.equation}`);
    console.log(`  Description: ${quadraticInfo.description}`);
    console.log(`  Calculations: ${quadraticInfo.calculations.join(', ')}`);

    // ========================================================================
    // PART 2: TEST INDIVIDUAL GRAPH RENDERERS
    // ========================================================================

    console.log("\n\n📊 PART 2: Testing Individual Graph Renderers\n");

    const testOutputDir = './test_graphs_output';
    if (!fs.existsSync(testOutputDir)) {
        fs.mkdirSync(testOutputDir, { recursive: true });
    }

    const graphRenderer = new GraphRenderer();

    // Test 1: Linear Graph
    console.log("1️⃣  Testing Linear Graph...");
    const linearPoints = [
        [-3, -3],
        [-2, -1],
        [-1, 1],
        [0, 3],
        [1, 5],
        [2, 7],
        [3, 9]
    ];

    const linearCanvas = createCanvas(1000, 800);
    const linearCtx = linearCanvas.getContext('2d');
    graphRenderer.canvas = linearCanvas;
    graphRenderer.ctx = linearCtx;

    const linearData = graphRenderer.renderGraph(
        'linear',
        0, 0, 1000, 800,
        { 
            points: linearPoints,
            showGrid: true,
            showEquation: true,
            showSlope: true,
            lineColor: '#2196F3'
        }
    );

    fs.writeFileSync(
        `${testOutputDir}/01_linear_graph.png`,
        linearCanvas.toBuffer('image/png')
    );
    console.log(`   ✓ Saved: 01_linear_graph.png`);
    console.log(`   ✓ Equation: ${linearData.equation}`);
    console.log(`   ✓ Slope: ${linearData.slope.toFixed(4)}`);
    console.log(`   ✓ R²: ${linearData.rSquared.toFixed(4)}\n`);

    // Test 2: Quadratic Graph
    console.log("2️⃣  Testing Quadratic Graph...");
    const quadraticPoints = [
        [-3, 9],
        [-2, 4],
        [-1, 1],
        [0, 0],
        [1, 1],
        [2, 4],
        [3, 9]
    ];

    const quadraticCanvas = createCanvas(1000, 800);
    const quadraticCtx = quadraticCanvas.getContext('2d');
    graphRenderer.canvas = quadraticCanvas;
    graphRenderer.ctx = quadraticCtx;

    const quadraticData = graphRenderer.renderGraph(
        'quadratic',
        0, 0, 1000, 800,
        {
            points: quadraticPoints,
            showGrid: true,
            showEquation: true,
            showVertex: true,
            showAxis: true,
            curveColor: '#9C27B0'
        }
    );

    fs.writeFileSync(
        `${testOutputDir}/02_quadratic_graph.png`,
        quadraticCanvas.toBuffer('image/png')
    );
    console.log(`   ✓ Saved: 02_quadratic_graph.png`);
    console.log(`   ✓ Equation: ${quadraticData.equation}`);
    console.log(`   ✓ Vertex: (${quadraticData.vertex.x.toFixed(2)}, ${quadraticData.vertex.y.toFixed(2)})`);
    console.log(`   ✓ R²: ${quadraticData.rSquared.toFixed(4)}\n`);

    // Test 3: Exponential Graph
    console.log("3️⃣  Testing Exponential Graph...");
    const exponentialPoints = [
        [-2, 0.25],
        [-1, 0.5],
        [0, 1],
        [1, 2],
        [2, 4],
        [3, 8],
        [4, 16]
    ];

    const exponentialCanvas = createCanvas(1000, 800);
    const exponentialCtx = exponentialCanvas.getContext('2d');
    graphRenderer.canvas = exponentialCanvas;
    graphRenderer.ctx = exponentialCtx;

    const exponentialData = graphRenderer.renderGraph(
        'exponential',
        0, 0, 1000, 800,
        {
            points: exponentialPoints,
            showGrid: true,
            showEquation: true,
            showAsymptote: true,
            curveColor: '#FF9800'
        }
    );

    fs.writeFileSync(
        `${testOutputDir}/03_exponential_graph.png`,
        exponentialCanvas.toBuffer('image/png')
    );
    console.log(`   ✓ Saved: 03_exponential_graph.png`);
    console.log(`   ✓ Equation: ${exponentialData.equation}`);
    console.log(`   ✓ Growth Rate: ${exponentialData.growthRate.toFixed(4)}`);
    console.log(`   ✓ R²: ${exponentialData.rSquared.toFixed(4)}\n`);

    // Test 4: Logarithmic Graph
    console.log("4️⃣  Testing Logarithmic Graph...");
    const logarithmicPoints = [
        [1, 0],
        [2, 0.693],
        [3, 1.099],
        [4, 1.386],
        [5, 1.609],
        [6, 1.792],
        [7, 1.946],
        [8, 2.079]
    ];

    const logarithmicCanvas = createCanvas(1000, 800);
    const logarithmicCtx = logarithmicCanvas.getContext('2d');
    graphRenderer.canvas = logarithmicCanvas;
    graphRenderer.ctx = logarithmicCtx;

    const logarithmicData = graphRenderer.renderGraph(
        'logarithmic',
        0, 0, 1000, 800,
        {
            points: logarithmicPoints,
            showGrid: true,
            showEquation: true,
            showAsymptote: true,
            curveColor: '#4CAF50'
        }
    );

    fs.writeFileSync(
        `${testOutputDir}/04_logarithmic_graph.png`,
        logarithmicCanvas.toBuffer('image/png')
    );
    console.log(`   ✓ Saved: 04_logarithmic_graph.png`);
    console.log(`   ✓ Equation: ${logarithmicData.equation}`);
    console.log(`   ✓ R²: ${logarithmicData.rSquared.toFixed(4)}\n`);

    // Test 5: Cubic Graph
    console.log("5️⃣  Testing Cubic Graph...");
    const cubicPoints = [
        [-2, -8],
        [-1, -1],
        [0, 0],
        [1, 1],
        [2, 8],
        [3, 27]
    ];

    const cubicCanvas = createCanvas(1000, 800);
    const cubicCtx = cubicCanvas.getContext('2d');
    graphRenderer.canvas = cubicCanvas;
    graphRenderer.ctx = cubicCtx;

    const cubicData = graphRenderer.renderGraph(
        'cubic',
        0, 0, 1000, 800,
        {
            points: cubicPoints,
            showGrid: true,
            showEquation: true,
            showInflection: true,
            curveColor: '#E91E63'
        }
    );

    fs.writeFileSync(
        `${testOutputDir}/05_cubic_graph.png`,
        cubicCanvas.toBuffer('image/png')
    );
    console.log(`   ✓ Saved: 05_cubic_graph.png`);
    console.log(`   ✓ Equation: ${cubicData.equation}`);
    console.log(`   ✓ Inflection Point: (${cubicData.inflectionPoint.x.toFixed(2)}, ${cubicData.inflectionPoint.y.toFixed(2)})`);
    console.log(`   ✓ R²: ${cubicData.rSquared.toFixed(4)}\n`);

    // Test 6: Sine Wave
    console.log("6️⃣  Testing Sine Wave...");
    const sinePoints = [];
    for (let i = 0; i <= 20; i++) {
        const x = (i / 20) * 2 * Math.PI;
        const y = Math.sin(x);
        sinePoints.push([x, y]);
    }

    const sineCanvas = createCanvas(1000, 800);
    const sineCtx = sineCanvas.getContext('2d');
    graphRenderer.canvas = sineCanvas;
    graphRenderer.ctx = sineCtx;

    const sineData = graphRenderer.renderGraph(
        'sine',
        0, 0, 1000, 800,
        {
            points: sinePoints,
            showGrid: true,
            showEquation: true,
            showAmplitude: true,
            showPeriod: true,
            curveColor: '#3F51B5'
        }
    );

    fs.writeFileSync(
        `${testOutputDir}/06_sine_wave.png`,
        sineCanvas.toBuffer('image/png')
    );
    console.log(`   ✓ Saved: 06_sine_wave.png`);
    console.log(`   ✓ Equation: ${sineData.equation}`);
    console.log(`   ✓ Amplitude: ${sineData.amplitude.toFixed(4)}`);
    console.log(`   ✓ Period: ${sineData.period.toFixed(4)}\n`);

    // Test 7: Cosine Wave
    console.log("7️⃣  Testing Cosine Wave...");
    const cosinePoints = [];
    for (let i = 0; i <= 20; i++) {
        const x = (i / 20) * 2 * Math.PI;
        const y = Math.cos(x);
        cosinePoints.push([x, y]);
    }

    const cosineCanvas = createCanvas(1000, 800);
    const cosineCtx = cosineCanvas.getContext('2d');
    graphRenderer.canvas = cosineCanvas;
    graphRenderer.ctx = cosineCtx;

    const cosineData = graphRenderer.renderGraph(
        'cosine',
        0, 0, 1000, 800,
        {
            points: cosinePoints,
            showGrid: true,
            showEquation: true,
            showAmplitude: true,
            curveColor: '#009688'
        }
    );

    fs.writeFileSync(
        `${testOutputDir}/07_cosine_wave.png`,
        cosineCanvas.toBuffer('image/png')
    );
    console.log(`   ✓ Saved: 07_cosine_wave.png`);
    console.log(`   ✓ Equation: ${cosineData.equation}`);
    console.log(`   ✓ Amplitude: ${cosineData.amplitude.toFixed(4)}\n`);

    // Test 8: Absolute Value
    console.log("8️⃣  Testing Absolute Value...");
    const absolutePoints = [
        [-4, 4],
        [-3, 3],
        [-2, 2],
        [-1, 1],
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 4]
    ];

    const absoluteCanvas = createCanvas(1000, 800);
    const absoluteCtx = absoluteCanvas.getContext('2d');
    graphRenderer.canvas = absoluteCanvas;
    graphRenderer.ctx = absoluteCtx;

    const absoluteData = graphRenderer.renderGraph(
        'absolute',
        0, 0, 1000, 800,
        {
            points: absolutePoints,
            showGrid: true,
            showEquation: true,
            showVertex: true,
            lineColor: '#00BCD4'
        }
    );

    fs.writeFileSync(
        `${testOutputDir}/08_absolute_value.png`,
        absoluteCanvas.toBuffer('image/png')
    );
    console.log(`   ✓ Saved: 08_absolute_value.png`);
    console.log(`   ✓ Equation: ${absoluteData.equation}`);
    console.log(`   ✓ Vertex: (${absoluteData.vertex.x.toFixed(2)}, ${absoluteData.vertex.y.toFixed(2)})`);
    console.log(`   ✓ R²: ${absoluteData.rSquared.toFixed(4)}\n`);

    // Test 9: Square Root
    console.log("9️⃣  Testing Square Root...");
    const sqrtPoints = [
        [0, 0],
        [1, 1],
        [4, 2],
        [9, 3],
        [16, 4],
        [25, 5]
    ];

    const sqrtCanvas = createCanvas(1000, 800);
    const sqrtCtx = sqrtCanvas.getContext('2d');
    graphRenderer.canvas = sqrtCanvas;
    graphRenderer.ctx = sqrtCtx;

    const sqrtData = graphRenderer.renderGraph(
        'squareRoot',
        0, 0, 1000, 800,
        {
            points: sqrtPoints,
            showGrid: true,
            showEquation: true,
            showDomain: true,
            curveColor: '#673AB7'
        }
    );

    fs.writeFileSync(
        `${testOutputDir}/09_square_root.png`,
        sqrtCanvas.toBuffer('image/png')
    );
    console.log(`   ✓ Saved: 09_square_root.png`);
    console.log(`   ✓ Equation: ${sqrtData.equation}`);
    console.log(`   ✓ Domain: ${sqrtData.domain}`);
    console.log(`   ✓ R²: ${sqrtData.rSquared.toFixed(4)}\n`);

    // Test 10: Power Function
    console.log("🔟 Testing Power Function...");
    const powerPoints = [
        [1, 1],
        [2, 8],
        [3, 27],
        [4, 64],
        [5, 125]
    ];

    const powerCanvas = createCanvas(1000, 800);
    const powerCtx = powerCanvas.getContext('2d');
    graphRenderer.canvas = powerCanvas;
    graphRenderer.ctx = powerCtx;

    const powerData = graphRenderer.renderGraph(
        'power',
        0, 0, 1000, 800,
        {
            points: powerPoints,
            showGrid: true,
            showEquation: true,
            curveColor: '#8BC34A'
        }
    );

    fs.writeFileSync(
        `${testOutputDir}/10_power_function.png`,
        powerCanvas.toBuffer('image/png')
    );
    console.log(`   ✓ Saved: 10_power_function.png`);
    console.log(`   ✓ Equation: ${powerData.equation}`);
    console.log(`   ✓ Exponent: ${powerData.exponent.toFixed(4)}`);
    console.log(`   ✓ R²: ${powerData.rSquared.toFixed(4)}\n`);

    // ========================================================================
    // PART 3: TEST WITH ENHANCED SPREADSHEET WORKBOOK
    // ========================================================================

    console.log("\n\n📋 PART 3: Testing with EnhancedSpreadsheetWorkbook\n");

    const workbook = new EnhancedSpreadsheetWorkbook({
        sheetName: 'Graph Testing Sheet',
        author: 'Graph Tester'
    });

    // Add sample data
    console.log("✓ Adding sample data to spreadsheet...");
    workbook.setHeaders(['X', 'Linear Y', 'Quadratic Y', 'Exponential Y']);
    
    const sampleData = [
        [-3, -3, 9, 0.125],
        [-2, -1, 4, 0.25],
        [-1, 1, 1, 0.5],
        [0, 3, 0, 1],
        [1, 5, 1, 2],
        [2, 7, 4, 4],
        [3, 9, 9, 8]
    ];

    sampleData.forEach(row => workbook.addRow(row));
    console.log(`   Added ${sampleData.length} rows of data\n`);

    // Add graphs from spreadsheet data
    console.log("✓ Adding graphs from spreadsheet data...");

    // Graph 1: Linear from spreadsheet
    const linearGraph = workbook.addGraphFromData({
        columnX: 'X',
        columnY: 'Linear Y',
        graphKey: 'linear',
        title: 'Linear Relationship'
    });
    console.log(`   Added: ${linearGraph.title}`);

    // Graph 2: Quadratic from spreadsheet
    const quadGraph = workbook.addGraphFromData({
        columnX: 'X',
        columnY: 'Quadratic Y',
        graphKey: 'quadratic',
        title: 'Quadratic Relationship'
    });
    console.log(`   Added: ${quadGraph.title}`);

    // Graph 3: Exponential from spreadsheet
    const expGraph = workbook.addGraphFromData({
        columnX: 'X',
        columnY: 'Exponential Y',
        graphKey: 'exponential',
        title: 'Exponential Growth'
    });
    console.log(`   Added: ${expGraph.title}\n`);

    // Add custom graph with manual points
    console.log("✓ Adding custom sine wave graph...");
    const customSinePoints = [];
    for (let i = 0; i <= 30; i++) {
        const x = (i / 30) * 4 * Math.PI;
        const y = 2 * Math.sin(x) + 1;
        customSinePoints.push([x, y]);
    }

    const customSineGraph = workbook.addGraph({
        key: 'sine',
        title: 'Custom Sine Wave (Amplitude=2, Shift=1)',
        points: customSinePoints,
        options: {
            showAmplitude: true,
            showPeriod: true,
            curveColor: '#FF5722'
        }
    });
    console.log(`   Added: ${customSineGraph.title}\n`);

    // Get graph suggestions
    console.log("✓ Getting graph suggestions for Linear Y vs X...");
    const suggestions = workbook.suggestGraphsFromData('X', 'Linear Y');
    console.log(`   Best fit: ${suggestions.bestFit.key} (R² = ${suggestions.bestFit.rSquared.toFixed(4)})`);
    console.log(`   Top 3 suggestions:`);
    suggestions.suggestions.slice(0, 3).forEach((s, i) => {
        console.log(`     ${i + 1}. ${s.key}: R² = ${s.rSquared.toFixed(4)}`);
    });
    console.log();

    // List all graphs
    console.log("✓ All graphs in workbook:");
    const graphList = workbook.listGraphs();
    graphList.forEach(g => {
        console.log(`   - [${g.index}] ${g.name} (${g.type}, ${g.pointCount} points)`);
    });
    console.log();

    // Get graph calculations
    console.log("✓ Getting calculations for graph 0...");
    const calculations = workbook.getGraphCalculations(0);
    console.log(`   Equation: ${calculations.equation}`);
    console.log(`   Slope: ${calculations.slope?.toFixed(4) || 'N/A'}`);
    console.log(`   R²: ${calculations.rSquared?.toFixed(4) || 'N/A'}`);
    console.log();

    // Render individual graphs to PNG
    console.log("✓ Rendering individual graphs to PNG...");
    const graphRenderResults = workbook.renderAllGraphs();
    graphRenderResults.forEach(result => {
        if (result.filename) {
            console.log(`   ✓ Rendered: ${result.filename}`);
        } else {
            console.log(`   ✗ Error: ${result.error}`);
        }
    });
    console.log();

    // Export graphs to folder
    console.log("✓ Exporting all graphs to folder...");
    const folderExport = workbook.exportGraphsToFolder(`${testOutputDir}/workbook_graphs`);
    console.log(`   Folder: ${folderExport.folder}`);
    console.log(`   Exported: ${folderExport.summary.exported}`);
    console.log(`   Errors: ${folderExport.summary.errors}\n`);

    // ========================================================================
    // PART 4: TEST EXPORT FUNCTIONS
    // ========================================================================

    console.log("\n📤 PART 4: Testing Export Functions\n");

    // Export to PNG with graphs
    console.log("✓ Exporting workbook to PNG with graphs...");
    workbook.exportToPNG(`${testOutputDir}/workbook_with_graphs.png`, {
        includeGraphs: true
    });
    console.log(`   Saved: workbook_with_graphs.png\n`);

    // Export to Excel with graphs
    console.log("✓ Exporting workbook to Excel with graphs...");
    const excelResult = await workbook.exportToExcel(`${testOutputDir}/workbook_with_graphs.xlsx`, {
        includeGraphs: true
    });
    console.log(`   Saved: workbook_with_graphs.xlsx`);
    console.log(`   Sheets: ${excelResult.sheets}`);
    console.log(`   Graphs included: ${excelResult.visualizations.graphs}\n`);

    // Export complete workbook with all visualizations
    console.log("✓ Exporting complete workbook (PNG + Excel)...");
    const completeExport = await workbook.exportCompleteWorkbook(
        `${testOutputDir}/complete_workbook`,
        'both'
    );
    console.log(`   PNG: ${completeExport.results.png?.filename || 'N/A'}`);
    console.log(`   Excel: ${completeExport.results.excel?.filename || 'N/A'}`);
    console.log(`   Total visualizations: ${completeExport.summary.totalVisualizations}\n`);

    // Export all visualizations separately
    console.log("✓ Exporting all visualizations separately...");
    const separateExport = await workbook.exportAllVisualizationsSeparately(
        `${testOutputDir}/separate_visualizations`
    );
    console.log(`   Folder: ${separateExport.folder}`);
    console.log(`   Graphs exported: ${separateExport.summary.graphsExported}`);
    console.log(`   Total exported: ${separateExport.summary.totalExported}`);
    console.log(`   Errors: ${separateExport.summary.errors}\n`);

    // ========================================================================
    // PART 5: TEST WORKBOOK STATUS AND REPORTS
    // ========================================================================

    console.log("\n📊 PART 5: Workbook Status and Reports\n");

    // Get complete workbook status
    console.log("✓ Complete workbook status:");
    const status = workbook.getCompleteWorkbookStatus();
    console.log(`   Rows: ${status.spreadsheet.rows}`);
    console.log(`   Columns: ${status.spreadsheet.columns}`);
    console.log(`   Graphs: ${status.visualizations.graphs}`);
    console.log(`   Total visualizations: ${status.visualizations.total}\n`);

    // Get visualization summary
    console.log("✓ Visualization summary:");
    const vizSummary = workbook.getVisualizationSummary();
    console.log(`   Charts: ${vizSummary.charts.count}`);
    console.log(`   Graphs: ${vizSummary.graphs.count}`);
    console.log(`   Total: ${vizSummary.total}\n`);

    // Get graph statistics
    console.log("✓ Graph statistics:");
    const graphStats = workbook.getGraphStatistics();
    console.log(`   Total available: ${graphStats.total}`);
    console.log(`   In workbook: ${graphStats.inWorkbook}`);
    console.log(`   By category in workbook:`, graphStats.byCategoryInWorkbook);
    console.log();

    // Generate graphs catalog
    console.log("✓ Generating graphs catalog...");
    const catalog = workbook.generateGraphsCatalog();
    console.log(`   Generated at: ${catalog.metadata.generated}`);
    console.log(`   Total available graphs: ${catalog.totalGraphs.available}`);
    console.log(`   Graphs in workbook: ${catalog.totalGraphs.inWorkbook}`);
    
    fs.writeFileSync(
        `${testOutputDir}/graphs_catalog.json`,
        JSON.stringify(catalog, null, 2)
    );
    console.log(`   Saved catalog to: graphs_catalog.json\n`);

    // Generate combined report
    console.log("✓ Generating combined report...");
    const report = workbook.generateCombinedReport();
    fs.writeFileSync(
        `${testOutputDir}/workbook_report.json`,
        JSON.stringify(report, null, 2)
    );
    console.log(`   Saved report to: workbook_report.json\n`);

    // List all visualizations
    console.log("✓ All visualizations in workbook:");
    const allVisualizations = workbook.listAllVisualizations();
    allVisualizations.forEach(viz => {
        console.log(`   - ${viz.type}: ${viz.title} (${viz.key})`);
    });
    console.log();

    // Search visualizations
    console.log("✓ Searching for 'linear' visualizations:");
    const searchResults = workbook.searchAllVisualizations('linear');
    searchResults.forEach(viz => {
        console.log(`   Found: ${viz.title} (${viz.type})`);
    });
    console.log();

    // ========================================================================
    // PART 6: CLEANUP AND SUMMARY
    // ========================================================================

    console.log("\n📋 PART 6: Test Summary\n");

    // Count files created
    const files = fs.readdirSync(testOutputDir);
    const pngFiles = files.filter(f => f.endsWith('.png'));
    const xlsxFiles = files.filter(f => f.endsWith('.xlsx'));
    const jsonFiles = files.filter(f => f.endsWith('.json'));

    console.log("✅ TEST COMPLETE!");
    console.log(`\n📁 Output directory: ${testOutputDir}`);
    console.log(`   PNG files: ${pngFiles.length}`);
    console.log(`   Excel files: ${xlsxFiles.length}`);
    console.log(`   JSON files: ${jsonFiles.length}`);
    console.log(`   Total files: ${files.length}`);

    console.log("\n📊 Graphs tested:");
    console.log("   ✓ Linear");
    console.log("   ✓ Quadratic");
    console.log("   ✓ Exponential");
    console.log("   ✓ Logarithmic");
    console.log("   ✓ Cubic");
    console.log("   ✓ Sine");
    console.log("   ✓ Cosine");
    console.log("   ✓ Absolute Value");
    console.log("   ✓ Square Root");
    console.log("   ✓ Power Function");

    console.log("\n📤 Export formats tested:");
    console.log("   ✓ Individual PNG images");
    console.log("   ✓ Workbook PNG export");
    console.log("   ✓ Excel export with graphs");
    console.log("   ✓ Complete workbook export");
    console.log("   ✓ Separate visualizations export");

    console.log("\n🎉 All tests completed successfully!");
    console.log("=".repeat(80) + "\n");
}

// Run the test
(async () => {
    try {
        await testGraphSystem();
    } catch (error) {
        console.error("\n❌ TEST FAILED:");
        console.error(error);
        process.exit(1);
    }
})();
