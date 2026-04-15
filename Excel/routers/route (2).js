//api/workbook/cleanup/route.js
import { NextResponse } from 'next/server'
import serverWorkbookManager from '@/lib/workbookManager.server'

export async function POST(request) {
  try {
    let sessionId = 'dev_session'

    const contentType = request.headers.get('content-type') || ''

    if (contentType.includes('application/json')) {
      const body = await request.json()
      sessionId = body.sessionId || 'dev_session'
    } else {
      // navigator.sendBeacon sends Content-Type: text/plain
      const text = await request.text()
      try {
        const parsed = JSON.parse(text)
        sessionId = parsed.sessionId || 'dev_session'
      } catch {
        // Last resort — maybe the raw text is just the session ID
        sessionId = text.trim() || 'dev_session'
      }
    }

    serverWorkbookManager.deleteWorkbook(sessionId)

    return NextResponse.json({ success: true, message: 'Session cleaned up successfully' })
  } catch (error) {
    console.error('Cleanup error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
