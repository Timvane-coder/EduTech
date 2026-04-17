//app/api/workbook/visualizations/existing/route.js
import { NextResponse } from 'next/server'
import serverWorkbookManager from '@/lib/workbookManager.server'

const TYPE_TO_ARRAY = {
  charts:          'charts',
  anatomical:      'anatomicalDiagrams',
  crossSection:    'crossSectionDiagrams',
  stereochemistry: 'stereochemistryDiagrams',
  chemistry:       'chemistryDiagrams',
  physics:         'physicsDiagrams',
  geometric:       'geometricShapes',
  graphs:          'graphs',
  biochemical:     'biochemicalDiagrams'
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const sessionId = searchParams.get('sessionId') || 'dev_session'
    const type = searchParams.get('type')

    if (!sessionId) return NextResponse.json({ error: 'sessionId is required' }, { status: 400 })
    if (!type)      return NextResponse.json({ error: 'type is required' },      { status: 400 })

    const workbook = serverWorkbookManager.getWorkbook(sessionId)
    if (!workbook) return NextResponse.json({ error: 'Session not found' }, { status: 404 })

    const arrayName = TYPE_TO_ARRAY[type]
    if (!arrayName) return NextResponse.json({ error: `Unknown type: ${type}` }, { status: 400 })

    const rawItems = workbook[arrayName] || []

    const items = rawItems.map((item, index) => ({
      index,
      id: item.id,
      name: item.title,
      type: item.key,
      category: item.category || null,
      formula: item.formula || null,
      filename: item.filename,
      created: item.createdAt
    }))

    return NextResponse.json({ type, items, count: items.length })
  } catch (error) {
    console.error('Get existing items error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
