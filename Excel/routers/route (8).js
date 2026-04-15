//api/workbook/formulas/route.js

import { NextResponse } from 'next/server'
import serverWorkbookManager from '@/lib/workbookManager.server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { sessionId: rawSessionId, targetCell, formulaKey, params } = body
    const sessionId = rawSessionId || 'dev_session'

    if (!sessionId) {
      return NextResponse.json({ error: 'sessionId is required' }, { status: 400 })
    }
    if (!targetCell) {
      return NextResponse.json({ error: 'targetCell is required' }, { status: 400 })
    }
    if (!formulaKey) {
      return NextResponse.json({ error: 'formulaKey is required' }, { status: 400 })
    }

    const workbook = serverWorkbookManager.getWorkbook(sessionId)
    if (!workbook) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 })
    }

    const result = workbook.applyFormula(targetCell, formulaKey, params || [])
    const state = serverWorkbookManager.getCurrentState(sessionId)

    return NextResponse.json({ result, state })
  } catch (error) {
    console.error('Apply formula error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
