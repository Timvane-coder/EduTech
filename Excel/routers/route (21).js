//api/workbook/visualizations/categories/route.js
import { NextResponse } from 'next/server'
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

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type')

    if (!type) {
      return NextResponse.json({ error: 'type is required' }, { status: 400 })
    }

    let rawCategories = []

    switch (type) {
      case 'charts': {
        const cats = ExcelChartsRegistry.getAllCategories()
        rawCategories = cats.map(cat => {
          const items = ExcelChartsRegistry.getChartsByCategory(cat)
          return { name: cat, count: Object.keys(items).length }
        })
        break
      }
      case 'anatomical': {
        const cats = AnatomicalDiagramsRegistry.getAllCategories()
        rawCategories = cats.map(cat => {
          const items = AnatomicalDiagramsRegistry.getDiagramsByCategory(cat)
          return { name: cat, count: Object.keys(items).length }
        })
        break
      }
      case 'crossSection': {
        const cats = CrossSectionDiagramsRegistry.getAllCategories()
        rawCategories = cats.map(cat => {
          const items = CrossSectionDiagramsRegistry.getDiagramsByCategory(cat)
          return { name: cat, count: Object.keys(items).length }
        })
        break
      }
      case 'stereochemistry': {
        const cats = StereochemistryDiagramsRegistry.getAllCategories()
        rawCategories = cats.map(cat => {
          const items = StereochemistryDiagramsRegistry.getDiagramsByCategory(cat)
          return { name: cat, count: Object.keys(items).length }
        })
        break
      }
      case 'chemistry': {
        const cats = ChemistryDiagramsRegistry.getAllCategories()
        rawCategories = cats.map(cat => {
          const items = ChemistryDiagramsRegistry.getDiagramsByCategory(cat)
          return { name: cat, count: Object.keys(items).length }
        })
        break
      }
      case 'physics': {
        const cats = PhysicsDiagramsRegistry.getAllCategories()
        rawCategories = cats.map(cat => {
          const items = PhysicsDiagramsRegistry.getDiagramsByCategory(cat)
          return { name: cat, count: Object.keys(items).length }
        })
        break
      }
      case 'geometric': {
        const cats = GeometricShapesRegistry.getAllCategories?.() || ['2D Shapes', '3D Shapes']
        rawCategories = cats.map(cat => {
          const items = GeometricShapesRegistry.getShapesByCategory(cat)
          return { name: cat, count: Object.keys(items).length }
        })
        break
      }
      case 'graphs': {
        const cats = GraphRegistry.getAllCategories()
        rawCategories = cats.map(cat => {
          const items = GraphRegistry.getGraphsByCategory(cat)
          return { name: cat, count: Object.keys(items).length }
        })
        break
      }
      default:
        return NextResponse.json({ error: `Unknown type: ${type}` }, { status: 400 })
    }

    return NextResponse.json({ type, categories: rawCategories })
  } catch (error) {
    console.error('Get categories error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
