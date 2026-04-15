//api/workbook/visualizations/items/route.js
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
    const category = searchParams.get('category')

    if (!type) return NextResponse.json({ error: 'type is required' }, { status: 400 })
    if (!category) return NextResponse.json({ error: 'category is required' }, { status: 400 })

    let rawItems = {}

    switch (type) {
      case 'charts':
        rawItems = ExcelChartsRegistry.getChartsByCategory(category)
        break
      case 'anatomical':
        rawItems = AnatomicalDiagramsRegistry.getDiagramsByCategory(category)
        break
      case 'crossSection':
        rawItems = CrossSectionDiagramsRegistry.getDiagramsByCategory(category)
        break
      case 'stereochemistry':
        rawItems = StereochemistryDiagramsRegistry.getDiagramsByCategory(category)
        break
      case 'chemistry':
        rawItems = ChemistryDiagramsRegistry.getDiagramsByCategory(category)
        break
      case 'physics':
        rawItems = PhysicsDiagramsRegistry.getDiagramsByCategory(category)
        break
      case 'geometric':
        rawItems = GeometricShapesRegistry.getShapesByCategory(category)
        break
      case 'graphs':
        rawItems = GraphRegistry.getGraphsByCategory(category)
        break
      default:
        return NextResponse.json({ error: `Unknown type: ${type}` }, { status: 400 })
    }

    const items = Object.entries(rawItems || {}).map(([key, item]) => ({
      key,
      name: item.name,
      description: item.description || '',
      icon: item.icon || null,
      category: item.category || category,
      formula: item.formula || null,
      dataRequired: item.dataRequired || null,
      defaultOptions: item.defaultOptions || {}
    }))

    return NextResponse.json({ type, category, items, count: items.length })
  } catch (error) {
    console.error('Get items error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
