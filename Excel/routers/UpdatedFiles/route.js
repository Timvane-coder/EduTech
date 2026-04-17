//app/api/workbook/add-biochemical-diagram/route.js
import { NextResponse } from 'next/server'
import serverWorkbookManager from '@/lib/workbookManager.server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { sessionId: rawSessionId, config } = body
    const sessionId = rawSessionId || 'dev_session'

    if (!config || !config.key) {
      return NextResponse.json({ error: 'config.key is required' }, { status: 400 })
    }

    const workbook = serverWorkbookManager.getWorkbook(sessionId)
    if (!workbook) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 })
    }

    // Add to workbook (registers in biochemicalDiagrams array)
    const diagram = workbook.addBiochemicalDiagram(config)

    // Render to PNG immediately
    const diagramIndex = workbook.biochemicalDiagrams.length - 1
    const renderResult = workbook.renderBiochemicalDiagramToPNG(diagramIndex)

    const state = serverWorkbookManager.getCurrentState(sessionId)

    return NextResponse.json({
      success: true,
      diagram: {
        id: diagram.id,
        title: diagram.title,
        key: diagram.key,
        type: 'biochemical',
        category: diagram.category,
        filename: renderResult.filename,
        size: renderResult.size
      },
      state
    })
  } catch (error) {
    console.error('Add biochemical diagram error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
