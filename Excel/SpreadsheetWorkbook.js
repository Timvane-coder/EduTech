



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

        // Chemistry diagram management
        this.chemistryDiagrams = [];
        this.chemistryDiagramRenderer = new ChemistryDiagramRenderer(null);

         // Physics diagram management
        this.physicsDiagrams = [];
        this.physicsDiagramRenderer = new PhysicsDiagramRenderer(null);

        // Cross-section diagram management
        this.crossSectionDiagrams = [];
        this.crossSectionRenderer = new CrossSectionDiagramRenderer(null);

        // Stereochemistry diagram management
        this.stereochemistryDiagrams = [];
        this.stereochemistryRenderer = new StereochemistryDiagramRenderer(null);

        // Graphing Calculator management
        this.graphingCalculator = null;

        this.statisticalWorkbook = null;
        this.statisticalAnalyses = {};
        this.distributionFits = {};
        this.statisticalReports = [];

          // Geometric shapes management
        this.geometricShapes = [];
        this.geometricRenderer = new GeometricShapeRenderer(null);

        // Add these properties to the constructor:
        this.graphs = [];
        this.graphRenderer = new GraphRenderer(null);

        this.examPaperGenerator = new ChemistryExamPaperGenerator();
        this.examPapers = [];
        this.currentExamConfig = null;
        this.examHistory = [];

        
        // Update unified diagram tracking
        this.allDiagrams = {
            anatomical: this.anatomicalDiagrams,
            crossSection: this.crossSectionDiagrams,
            stereochemistry: this.stereochemistryDiagrams,
            geometric: this.geometricShapes
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


const EndSection1 = "close"