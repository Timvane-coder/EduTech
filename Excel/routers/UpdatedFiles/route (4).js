//app/api/workbook/visualizations/gallery/route.js
import { NextResponse } from 'next/server'
import serverWorkbookManager from '@/lib/workbookManager.server'
import fs from 'fs'

const TYPE_TO_ARRAY = {
  charts:          { array: 'charts',                  label: 'charts' },
  anatomical:      { array: 'anatomicalDiagrams',      label: 'anatomical' },
  crossSection:    { array: 'crossSectionDiagrams',    label: 'crossSection' },
  stereochemistry: { array: 'stereochemistryDiagrams', label: 'stereochemistry' },
  chemistry:       { array: 'chemistryDiagrams',       label: 'chemistry' },
  physics:         { array: 'physicsDiagrams',         label: 'physics' },
  geometric:       { array: 'geometricShapes',         label: 'geometric' },
  graphs:          { array: 'graphs',                  label: 'graphs' },
  biochemical:     { array: 'biochemicalDiagrams',     label: 'biochemical' }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const sessionId = searchParams.get('sessionId') || 'dev_session'
    const viewType = searchParams.get('type') || 'all'

    if (!sessionId) return NextResponse.json({ error: 'sessionId is required' }, { status: 400 })

    const workbook = serverWorkbookManager.getWorkbook(sessionId)
    if (!workbook) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 })
    }

    const allItems = []
    const typesToFetch = viewType === 'all' ? Object.keys(TYPE_TO_ARRAY) : [viewType]

    typesToFetch.forEach(type => {
      const mapping = TYPE_TO_ARRAY[type]
      if (!mapping) return

      const rawItems = workbook[mapping.array] || []
      rawItems.forEach((item, index) => {
        const fileExists = item.filename && fs.existsSync(item.filename)
        allItems.push({
          id: item.id || `${type}_${index}`,
          title: item.title,
          type: mapping.label,
          category: item.category || null,
          formula: item.formula || null,
          index,
          filename: item.filename,
          hasFile: fileExists,
          createdAt: item.createdAt || new Date().toISOString(),
          size: fileExists
            ? `${Math.round(fs.statSync(item.filename).size / 1024)}KB`
            : 'N/A'
        })
      })
    })

    return NextResponse.json({ items: allItems, count: allItems.length })
  } catch (error) {
    console.error('Gallery error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
