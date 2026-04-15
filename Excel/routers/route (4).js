//api/workbook/delete-visualization/[id]/route.js
import { NextResponse } from 'next/server'
import serverWorkbookManager from '@/lib/workbookManager.server'
import fs from 'fs'

const TYPE_REMOVE_MAP = [
  { array: 'charts', remove: (wb, i) => wb.removeChart(i) },
  { array: 'anatomicalDiagrams', remove: (wb, i) => wb.removeAnatomicalDiagram(i) },
  { array: 'crossSectionDiagrams', remove: (wb, i) => wb.removeCrossSectionDiagram(i) },
  { array: 'stereochemistryDiagrams', remove: (wb, i) => wb.removeStereochemistryDiagram(i) },
  { array: 'chemistryDiagrams', remove: (wb, i) => wb.removeChemistryDiagram(i) },
  { array: 'physicsDiagrams', remove: (wb, i) => wb.removePhysicsDiagram(i) },
  { array: 'geometricShapes', remove: (wb, i) => wb.removeGeometricShape(i) },
  { array: 'graphs', remove: (wb, i) => wb.removeGraph(i) }
]

export async function DELETE(request, { params }) {
  try {
    const { id } = params
    const { searchParams } = new URL(request.url)
    const sessionId = searchParams.get('sessionId') || 'dev_session'
    if (!id) return NextResponse.json({ error: 'id is required' }, { status: 400 })
    if (!sessionId) return NextResponse.json({ error: 'sessionId is required' }, { status: 400 })

    const workbook = serverWorkbookManager.getWorkbook(sessionId)
    if (!workbook) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 })
    }

    // Find item across all arrays
    let foundIndex = -1
    let foundHandler = null
    let foundItem = null

    for (const handler of TYPE_REMOVE_MAP) {
      const items = workbook[handler.array] || []
      const index = items.findIndex(i => i.id === id)
      if (index !== -1) {
        foundIndex = index
        foundHandler = handler
        foundItem = items[index]
        break
      }
    }

    if (foundIndex === -1) {
      return NextResponse.json({ error: 'Visualization not found' }, { status: 404 })
    }

    // Delete file
    if (foundItem.filename && fs.existsSync(foundItem.filename)) {
      try { fs.unlinkSync(foundItem.filename) } catch (e) { console.warn('File delete failed:', e.message) }
    }

    // Remove from workbook
    foundHandler.remove(workbook, foundIndex)

    return NextResponse.json({ success: true, deleted: id })
  } catch (error) {
    console.error('Delete visualization error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
