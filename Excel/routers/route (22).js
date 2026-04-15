//api/workbook/visualizations/delete/route.js
import { NextResponse } from 'next/server'
import serverWorkbookManager from '@/lib/workbookManager.server'
import fs from 'fs'

const TYPE_TO_REMOVE = {
  charts: (wb, i) => wb.removeChart(i),
  anatomical: (wb, i) => wb.removeAnatomicalDiagram(i),
  crossSection: (wb, i) => wb.removeCrossSectionDiagram(i),
  stereochemistry: (wb, i) => wb.removeStereochemistryDiagram(i),
  chemistry: (wb, i) => wb.removeChemistryDiagram(i),
  physics: (wb, i) => wb.removePhysicsDiagram(i),
  geometric: (wb, i) => wb.removeGeometricShape(i),
  graphs: (wb, i) => wb.removeGraph(i)
}

const TYPE_TO_ARRAY = {
  charts: 'charts',
  anatomical: 'anatomicalDiagrams',
  crossSection: 'crossSectionDiagrams',
  stereochemistry: 'stereochemistryDiagrams',
  chemistry: 'chemistryDiagrams',
  physics: 'physicsDiagrams',
  geometric: 'geometricShapes',
  graphs: 'graphs'
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url)
    const sessionId = searchParams.get('sessionId')
    const type = searchParams.get('type')
    const id = searchParams.get('id')

    if (!sessionId) return NextResponse.json({ error: 'sessionId is required' }, { status: 400 })
    if (!type) return NextResponse.json({ error: 'type is required' }, { status: 400 })
    if (!id) return NextResponse.json({ error: 'id is required' }, { status: 400 })

    const workbook = serverWorkbookManager.getWorkbook(sessionId)
    if (!workbook) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 })
    }

    const arrayName = TYPE_TO_ARRAY[type]
    const removeFn = TYPE_TO_REMOVE[type]

    if (!arrayName || !removeFn) {
      return NextResponse.json({ error: `Unknown type: ${type}` }, { status: 400 })
    }

    const items = workbook[arrayName] || []
    const itemIndex = items.findIndex(i => i.id === id)

    if (itemIndex === -1) {
      return NextResponse.json({ error: 'Item not found' }, { status: 404 })
    }

    const item = items[itemIndex]

    // Delete file from disk if it exists
    if (item.filename && fs.existsSync(item.filename)) {
      try {
        fs.unlinkSync(item.filename)
      } catch (fileError) {
        console.warn('Could not delete file:', fileError.message)
      }
    }

    // Remove from workbook
    removeFn(workbook, itemIndex)

    const state = serverWorkbookManager.getCurrentState(sessionId)

    return NextResponse.json({ success: true, deleted: id, state })
  } catch (error) {
    console.error('Delete visualization error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
