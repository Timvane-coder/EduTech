// lib/workbookManager.server.js
import {
  ExcelChartsRegistry,
  AnatomicalDiagramsRegistry,
  CrossSectionDiagramsRegistry,
  StereochemistryDiagramsRegistry,
  ChemistryDiagramsRegistry,
  PhysicsDiagramsRegistry,
  GeometricShapesRegistry,
  GraphRegistry
} from '@/lib/worksheet'

import EnhancedSpreadsheetWorkbook from '@/lib/worksheet'

class ServerWorkbookManager {
  constructor() {
    this.workbooks = new Map();
    console.log('ServerWorkbookManager instance created');
  }

  createWorkbook(sessionId, options = {}) {
    console.log('Creating workbook for session:', sessionId);
    const workbook = new EnhancedSpreadsheetWorkbook(options);
    this.workbooks.set(sessionId, workbook);
    console.log('✓ Workbook created. Active sessions:', Array.from(this.workbooks.keys()));
    return {
      sessionId,
      created: true
    };
  }

  getWorkbook(sessionId) {
    const workbook = this.workbooks.get(sessionId);
    if (!workbook) {
      console.log('⚠ Workbook not found for session:', sessionId);
      console.log('Available sessions:', Array.from(this.workbooks.keys()));
    }
    return workbook;
  }

  async loadData(sessionId, data) {
    const workbook = this.getWorkbook(sessionId);
    if (!workbook) {
      throw new Error(`Workbook not found for session: ${sessionId}`);
    }

    workbook.loadData(data);
    return this.getCurrentState(sessionId);
  }

  async applyFormula(sessionId, targetCell, formulaKey, params) {
    const workbook = this.getWorkbook(sessionId);
    if (!workbook) throw new Error('Workbook not found');

    const result = workbook.applyFormula(targetCell, formulaKey, params);
    return {
      result,
      state: this.getCurrentState(sessionId)
    };
  }

  getCurrentState(sessionId) {
    const workbook = this.getWorkbook(sessionId);
    if (!workbook) return null;

    // Get graphing calculator counts if it exists
    let graphCounts = {
      equations: 0,
      triangles: 0,
      circles: 0,
      rectangles: 0,
      squares: 0,
      parallelograms: 0,
      polygons: 0,
      ellipses: 0,
      quadrilaterals: 0,
      trapezoids: 0,
      spheres: 0,
      cylinders: 0,
      cones: 0,
      cubes: 0,
      vectors: 0,
      matrices: 0,
      total: 0
    };

    if (workbook.graphingCalculator) {
      const calc = workbook.graphingCalculator;
      graphCounts = {
        equations: calc.equationCounter || 0,
        triangles: calc.triangleCounter || 0,
        circles: calc.circleCounter || 0,
        rectangles: calc.rectangleCounter || 0,
        squares: calc.squareCounter || 0,
        parallelograms: calc.parallelogramCounter || 0,
        polygons: calc.polygonCounter || 0,
        ellipses: calc.ellipseCounter || 0,
        quadrilaterals: calc.quadrilateralCounter || 0,
        trapezoids: calc.trapezoidCounter || 0,
        spheres: calc.sphereCounter || 0,
        cylinders: calc.cylinderCounter || 0,
        cones: calc.coneCounter || 0,
        cubes: calc.cubeCounter || 0,
        vectors: calc.vectorCounter || 0,
        matrices: calc.matrixCounter || 0
      };
      graphCounts.total = Object.values(graphCounts).reduce((sum, count) => sum + count, 0);
    }

    return {
      data: workbook.data,
      headers: workbook.headers,
      formulas: Object.keys(workbook.formulas).length,
      charts: workbook.charts.length,
      anatomicalDiagrams: workbook.anatomicalDiagrams.length,
      crossSectionDiagrams: workbook.crossSectionDiagrams.length,
      stereochemistryDiagrams: workbook.stereochemistryDiagrams.length,
      visualizations: workbook.getDiagramCounts(),
      graphingCalculator: graphCounts
    };
  }

  async exportToPNG(sessionId, options = {}) {
    const workbook = this.getWorkbook(sessionId);
    if (!workbook) throw new Error('Workbook not found');

    const buffer = workbook.exportToPNG(null, options);
    return buffer;
  }

  deleteWorkbook(sessionId) {
    console.log('Deleting workbook for session:', sessionId);
    this.workbooks.delete(sessionId);
  }
}

let instance;

if (!global.serverWorkbookManager) {
  global.serverWorkbookManager = new ServerWorkbookManager();
}

export default global.serverWorkbookManager;
