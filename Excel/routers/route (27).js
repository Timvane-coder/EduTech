//api/workbook/visualizations/search/route.js
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
    const query = searchParams.get('query')

    if (!type) return NextResponse.json({ error: 'type is required' }, { status: 400 })
    if (!query) return NextResponse.json({ error: 'query is required' }, { status: 400 })

    let rawResults = {}

    switch (type) {
      case 'charts':
        rawResults = ExcelChartsRegistry.searchCharts(query)
        break
      case 'anatomical':
        rawResults = AnatomicalDiagramsRegistry.searchDiagrams(query)
        break
      case 'crossSection':
        rawResults = CrossSectionDiagramsRegistry.searchDiagrams(query)
        break
      case 'stereochemistry':
        rawResults = StereochemistryDiagramsRegistry.searchDiagrams(query)
        break
      case 'chemistry':
        rawResults = ChemistryDiagramsRegistry.searchDiagrams(query)
        break
      case 'physics':
        rawResults = PhysicsDiagramsRegistry.searchDiagrams(query)
        break
      case 'geometric':
        rawResults = GeometricShapesRegistry.searchShapes(query)
        break
      case 'graphs':
        rawResults = GraphRegistry.searchGraphs(query)
        break
      default:
        return NextResponse.json({ error: `Unknown type: ${type}` }, { status: 400 })
    }

    const results = Object.entries(rawResults || {}).map(([key, item]) => ({
      key,
      name: item.name,
      description: item.description || '',
      icon: item.icon || null,
      category: item.category || '',
      formula: item.formula || null,
      dataRequired: item.dataRequired || null
    }))

    return NextResponse.json({ type, query, results, count: results.length })
  } catch (error) {
    console.error('Search visualizations error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
