//api/workbook/search-formula/route.js
import { NextResponse } from 'next/server'
import { StereochemistryDiagramsRegistry } from '@/lib/worksheet'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const formula = searchParams.get('formula')

    if (!formula) {
      return NextResponse.json({ error: 'formula is required' }, { status: 400 })
    }

    const rawResults = StereochemistryDiagramsRegistry.findByFormula(formula)

    const results = Object.entries(rawResults || {}).map(([key, item]) => ({
      key,
      name: item.name,
      formula: item.formula,
      description: item.description || '',
      category: item.category || '',
      geometry: item.geometry || null,
      bondAngles: item.bondAngles || []
    }))

    return NextResponse.json({ formula, results, count: results.length })
  } catch (error) {
    console.error('Search formula error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
