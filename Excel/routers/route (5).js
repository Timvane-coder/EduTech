//api/workbook/download-visualization/[id]/route.js
import { NextResponse } from 'next/server'
import serverWorkbookManager from '@/lib/workbookManager.server'
import fs from 'fs'

const ALL_ARRAYS = [
  'charts',
  'anatomicalDiagrams',
  'crossSectionDiagrams',
  'stereochemistryDiagrams',
  'chemistryDiagrams',
  'physicsDiagrams',
  'geometricShapes',
  'graphs'
]

export async function GET(request, { params }) {
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

    // Search all arrays for the item
    let foundItem = null
    for (const arrayName of ALL_ARRAYS) {
      const items = workbook[arrayName] || []
      const item = items.find(i => i.id === id)
      if (item) { foundItem = item; break }
    }

    if (!foundItem) {
      return NextResponse.json({ error: 'Visualization not found' }, { status: 404 })
    }

    if (!foundItem.filename || !fs.existsSync(foundItem.filename)) {
      return NextResponse.json({ error: 'File not found on disk' }, { status: 404 })
    }

    const buffer = fs.readFileSync(foundItem.filename)
    const safeName = foundItem.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
        'Content-Disposition': `attachment; filename="${safeName}.png"`,
        'Content-Length': buffer.length.toString()
      }
    })
  } catch (error) {
    console.error('Download visualization error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
