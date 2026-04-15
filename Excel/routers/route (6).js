//api/workbook/export-excel/route.js
import { NextResponse } from 'next/server'
import serverWorkbookManager from '@/lib/workbookManager.server'

export async function POST(request) {
  try {

    const body = await request.json()
    const { sessionId: rawSessionId, options = {} } = body
    const sessionId = rawSessionId || 'dev_session'
    if (!sessionId) {
      return NextResponse.json({ error: 'sessionId is required' }, { status: 400 })
    }

    const workbook = serverWorkbookManager.getWorkbook(sessionId)
    if (!workbook) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 })
    }

    const buffer = await workbook.exportToExcel(null, {
      includeCharts: options.includeCharts || false,
      includeAnatomicalDiagrams: options.includeAnatomicalDiagrams || false,
      includeCrossSectionDiagrams: options.includeCrossSectionDiagrams || false,
      includeStereochemistryDiagrams: options.includeStereochemistryDiagrams || false,
      includeChemistryDiagrams: options.includeChemistryDiagrams || false,
      includePhysicsDiagrams: options.includePhysicsDiagrams || false,
      includeGeometricShapes: options.includeGeometricShapes || false,
      includeGraphs: options.includeGraphs || false
    })

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Disposition': `attachment; filename="workbook-${Date.now()}.xlsx"`,
        'Content-Length': buffer.length.toString()
      }
    })
  } catch (error) {
    console.error('Export Excel error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
