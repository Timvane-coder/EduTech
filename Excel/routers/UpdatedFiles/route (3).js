//app/api/workbook/render-visualizations/route.js
import { NextResponse } from 'next/server'
import serverWorkbookManager from '@/lib/workbookManager.server'
import fs from 'fs'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const sessionId = searchParams.get('sessionId') || 'dev_session'
    const type = searchParams.get('type') || 'all'

    if (!sessionId) return NextResponse.json([])

    const workbook = serverWorkbookManager.getWorkbook(sessionId)
    if (!workbook) return NextResponse.json([])

    const visualizations = []
    const shouldInclude = (t) => type === 'all' || type === t

    if (shouldInclude('charts')) {
      ;(workbook.charts || []).forEach(item => {
        visualizations.push({
          id: item.id,
          title: item.title,
          type: 'charts',
          category: null,
          formula: null,
          filename: item.filename,
          url: `/api/workbook/visualizations/image?sessionId=${sessionId}&type=charts&id=${item.id}`,
          thumbnailUrl: `/api/workbook/visualizations/image?sessionId=${sessionId}&type=charts&id=${item.id}`,
          createdAt: item.createdAt,
          size: item.filename && fs.existsSync(item.filename)
            ? `${Math.round(fs.statSync(item.filename).size / 1024)}KB`
            : 'N/A'
        })
      })
    }

    const diagramTypes = [
      { key: 'anatomicalDiagrams',      label: 'anatomical' },
      { key: 'crossSectionDiagrams',    label: 'crossSection' },
      { key: 'stereochemistryDiagrams', label: 'stereochemistry' },
      { key: 'chemistryDiagrams',       label: 'chemistry' },
      { key: 'physicsDiagrams',         label: 'physics' },
      { key: 'geometricShapes',         label: 'geometric' },
      { key: 'graphs',                  label: 'graphs' },
      { key: 'biochemicalDiagrams',     label: 'biochemical' }
    ]

    diagramTypes.forEach(({ key, label }) => {
      if (!shouldInclude(label)) return
      ;(workbook[key] || []).forEach(item => {
        visualizations.push({
          id: item.id,
          title: item.title,
          type: label,
          category: item.category || null,
          formula: item.formula || null,
          filename: item.filename,
          url: `/api/workbook/visualizations/image?sessionId=${sessionId}&type=${label}&id=${item.id}`,
          thumbnailUrl: `/api/workbook/visualizations/image?sessionId=${sessionId}&type=${label}&id=${item.id}`,
          createdAt: item.createdAt,
          size: item.filename && fs.existsSync(item.filename)
            ? `${Math.round(fs.statSync(item.filename).size / 1024)}KB`
            : 'N/A'
        })
      })
    })

    return NextResponse.json(visualizations)
  } catch (error) {
    console.error('Render visualizations error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
