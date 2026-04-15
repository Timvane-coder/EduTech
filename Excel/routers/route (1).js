//api/workbook/add-diagram/route.js
import { NextResponse } from 'next/server'
import serverWorkbookManager from '@/lib/workbookManager.server'

// Maps diagram type → [addMethod, renderMethod, arrayProperty]
const DIAGRAM_TYPE_MAP = {
  anatomical: {
    add: (wb, cfg) => wb.addAnatomicalDiagram(cfg),
    render: (wb, i) => wb.renderAnatomicalDiagramToPNG(i),
    array: 'anatomicalDiagrams'
  },
  crossSection: {
    add: (wb, cfg) => wb.addCrossSectionDiagram(cfg),
    render: (wb, i) => wb.renderCrossSectionDiagramToPNG(i),
    array: 'crossSectionDiagrams'
  },
  stereochemistry: {
    add: (wb, cfg) => wb.addStereochemistryDiagram(cfg),
    render: (wb, i) => wb.renderStereochemistryDiagramToPNG(i),
    array: 'stereochemistryDiagrams'
  },
  chemistry: {
    add: (wb, cfg) => wb.addChemistryDiagram(cfg),
    render: (wb, i) => wb.renderChemistryDiagramToPNG(i),
    array: 'chemistryDiagrams'
  },
  physics: {
    add: (wb, cfg) => wb.addPhysicsDiagram(cfg),
    render: (wb, i) => wb.renderPhysicsDiagramToPNG(i),
    array: 'physicsDiagrams'
  },
  geometric: {
    add: (wb, cfg) => wb.addGeometricShape(cfg),
    render: (wb, i) => wb.renderGeometricShapeToPNG(i),
    array: 'geometricShapes'
  },
  graphs: {
    add: (wb, cfg) => wb.addGraph(cfg),
    render: async (wb, i) => await wb.renderGraphToPNG(i),
    array: 'graphs'
  }
}

export async function POST(request) {
  try {
    const body = await request.json()
    const { sessionId: rawSessionId, type, config } = body
    const sessionId = rawSessionId || 'dev_session'
    if (!sessionId) {
      return NextResponse.json({ error: 'sessionId is required' }, { status: 400 })
    }
    if (!type) {
      return NextResponse.json({ error: 'type is required' }, { status: 400 })
    }
    if (!config || !config.key) {
      return NextResponse.json({ error: 'config.key is required' }, { status: 400 })
    }

    const typeHandler = DIAGRAM_TYPE_MAP[type]
    if (!typeHandler) {
      return NextResponse.json(
        { error: `Unknown diagram type: ${type}. Valid types: ${Object.keys(DIAGRAM_TYPE_MAP).join(', ')}` },
        { status: 400 }
      )
    }

    const workbook = serverWorkbookManager.getWorkbook(sessionId)
    if (!workbook) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 })
    }

    // Add diagram to workbook
    const diagram = typeHandler.add(workbook, config)

    // Get the index of the newly added diagram
    const diagramIndex = workbook[typeHandler.array].length - 1

    // Render to PNG
    const renderResult = await typeHandler.render(workbook, diagramIndex)

    // Get updated state
    const state = serverWorkbookManager.getCurrentState(sessionId)

    return NextResponse.json({
      success: true,
      diagram: {
        id: diagram.id,
        title: diagram.title,
        key: diagram.key,
        type,
        category: diagram.category,
        filename: renderResult.filename,
        size: renderResult.size,
        formula: diagram.formula || null
      },
      state
    })
  } catch (error) {
    console.error('Add diagram error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
