//api/workbook/add-chart/route.js
import { NextResponse } from 'next/server'
import serverWorkbookManager from '@/lib/workbookManager.server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { sessionId: rawSessionId, config } = body
    const sessionId = rawSessionId || 'dev_session'
    if (!sessionId) {
      return NextResponse.json({ error: 'sessionId is required' }, { status: 400 })
    }
    if (!config || !config.key) {
      return NextResponse.json({ error: 'config.key is required' }, { status: 400 })
    }

    const workbook = serverWorkbookManager.getWorkbook(sessionId)
    if (!workbook) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 })
    }

    const chart = workbook.addChart(config)
    const chartIndex = workbook.charts.length - 1
    const renderResult = workbook.renderChartToPNG(chartIndex)
    const state = serverWorkbookManager.getCurrentState(sessionId)

    return NextResponse.json({
      success: true,
      chart: {
        id: chart.id,
        title: chart.title,
        key: chart.key,
        filename: renderResult.filename,
        size: renderResult.size
      },
      state
    })
  } catch (error) {
    console.error('Add chart error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
