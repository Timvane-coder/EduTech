/app/api/workbook/visualizations/image/route.js
import { NextResponse } from 'next/server'
import serverWorkbookManager from '@/lib/workbookManager.server'
import fs from 'fs'

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
    const id = searchParams.get('id')

    if (!type) return NextResponse.json({ error: 'type is required' }, { status: 400 })
    if (!id)   return NextResponse.json({ error: 'id is required' },   { status: 400 })

    const workbook = serverWorkbookManager.getWorkbook(sessionId)
    if (!workbook) return NextResponse.json({ error: 'Session not found' }, { status: 404 })

    const arrayName = TYPE_TO_ARRAY[type]
    if (!arrayName) return NextResponse.json({ error: `Unknown type: ${type}` }, { status: 400 })

    const items = workbook[arrayName] || []
    const item = items.find(i => i.id === id) || items[parseInt(id.split('_').pop())]

    if (!item) return NextResponse.json({ error: 'Item not found' }, { status: 404 })
    if (!item.filename || !fs.existsSync(item.filename)) {
      return NextResponse.json({ error: 'Image file not found on disk' }, { status: 404 })
    }

    const buffer = fs.readFileSync(item.filename)

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
        'Content-Length': buffer.length.toString(),
        'Cache-Control': 'public, max-age=3600'
      }
    })
  } catch (error) {
    console.error('Get visualization image error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
