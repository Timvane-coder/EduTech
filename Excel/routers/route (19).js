//api/workbook/state/route.js

import { NextResponse } from 'next/server'
import serverWorkbookManager from '@/lib/workbookManager.server'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const sessionId = searchParams.get('sessionId') || 'dev_session'

    if (!sessionId) {
      return NextResponse.json({ error: 'sessionId is required' }, { status: 400 })
    }

    const state = serverWorkbookManager.getCurrentState(sessionId)

    if (!state) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 })
    }

    return NextResponse.json(state)
  } catch (error) {
    console.error('Get state error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

