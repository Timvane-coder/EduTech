//api/workbook/create/route.js
import { NextResponse } from 'next/server'
import serverWorkbookManager from '@/lib/workbookManager.server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { sheetName, author, theme, sessionId: requestedId } = body

    // Use requested ID or fall back to dev_session
    const sessionId = requestedId || 'dev_session'

    // If session already exists, just return success — don't recreate
    const existing = serverWorkbookManager.getWorkbook(sessionId)
    if (existing) {
      console.log(`✅ Session already exists: ${sessionId}`)
      return NextResponse.json({
        sessionId,
        created: false,
        reused: true,
        sheetName: sheetName || 'Interactive Session'
      })
    }

    serverWorkbookManager.createWorkbook(sessionId, {
      sheetName: sheetName || 'Interactive Session',
      author: author || 'Dev User',
      theme: theme || 'professional'
    })

    console.log(`✅ Session created: ${sessionId}`)

    return NextResponse.json({
      sessionId,
      created: true,
      reused: false,
      sheetName: sheetName || 'Interactive Session'
    })
  } catch (error) {
    console.error('Create workbook error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
