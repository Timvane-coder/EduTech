//api/workbook/generate-png/route.js
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

    const buffer = workbook.exportToPNG(null, options)

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
        'Content-Disposition': `attachment; filename="spreadsheet-${Date.now()}.png"`,
        'Content-Length': buffer.length.toString()
      }
    })
  } catch (error) {
    console.error('Generate PNG error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}


