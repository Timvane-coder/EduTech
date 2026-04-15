//api/workbook/load-data/route.js

import { NextResponse } from 'next/server'
import serverWorkbookManager from '@/lib/workbookManager.server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { sessionId: rawSessionId, data } = body
    const sessionId = rawSessionId || 'dev_session'

    if (!sessionId) {
      return NextResponse.json({ error: 'sessionId is required' }, { status: 400 })
    }

    if (!data || !Array.isArray(data)) {
      return NextResponse.json({ error: 'data must be a non-empty array' }, { status: 400 })
    }

    const state = await serverWorkbookManager.loadData(sessionId, data)

    return NextResponse.json({
      success: true,
      state,
      rows: state.data?.length || 0,
      columns: state.headers?.length || 0
    })
  } catch (error) {
    console.error('Load data error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
