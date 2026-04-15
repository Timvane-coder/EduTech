//api/workbook/graph-image/route.js

import { NextResponse } from 'next/server'
import serverWorkbookManager from '@/lib/workbookManager.server'
import fs from 'fs'
import path from 'path'
import os from 'os'

// Maps the type name used in the frontend to the history array name in the calculator
const TYPE_TO_HISTORY = {
  equation: 'equationHistory',
  triangle: 'triangleHistory',
  circle: 'circleHistory',
  rectangle: 'rectangleHistory',
  square: 'squareHistory',
  parallelogram: 'parallelogramHistory',
  polygon: 'polygonHistory',
  ellipse: 'ellipseHistory',
  quadrilateral: 'quadrilateralHistory',
  trapezoid: 'trapezoidHistory',
  sphere: 'sphereHistory',
  cylinder: 'cylinderHistory',
  cone: 'coneHistory',
  cube: 'cubeHistory',
  vector: 'vectorHistory',
  matrix: 'matrixHistory'
}

// Directories to search for saved graph PNGs
function getSearchDirs() {
  const dirs = [
    os.tmpdir(),
    process.cwd(),
    path.join(process.cwd(), 'tmp'),
    path.join(process.cwd(), 'public'),
    path.join(process.cwd(), 'public', 'graphs'),
    '/tmp'
  ]
  return dirs.filter(d => {
    try { return fs.existsSync(d) } catch { return false }
  })
}

// Find a PNG file matching a type prefix and index across all search dirs
function findGraphFile(type, index) {
  const searchDirs = getSearchDirs()
  const paddedIndex = String(index + 1).padStart(3, '0')

  // Patterns to try, ordered from most to least specific
  const patterns = [
    // Exact index match: triangle_001_*, circle_001_*, etc.
    (filename) => {
      const lower = filename.toLowerCase()
      return lower.startsWith(`${type}_${paddedIndex}`) && lower.endsWith('.png')
    },
    // Any file starting with type and ending in .png
    (filename) => {
      const lower = filename.toLowerCase()
      return lower.startsWith(`${type}_`) && lower.endsWith('.png')
    },
    // summary_000 fallback for equations
    (filename) => {
      if (type !== 'equation') return false
      const lower = filename.toLowerCase()
      return lower.startsWith('summary_') && lower.endsWith('.png')
    }
  ]

  for (const pattern of patterns) {
    for (const dir of searchDirs) {
      try {
        const files = fs.readdirSync(dir)
        const matches = files
          .filter(f => pattern(f))
          .map(f => ({
            name: f,
            fullPath: path.join(dir, f),
            mtime: fs.statSync(path.join(dir, f)).mtime.getTime()
          }))
          .sort((a, b) => b.mtime - a.mtime) // newest first

        if (matches.length > 0) {
          console.log(`✅ Found graph file: ${matches[0].fullPath}`)
          return matches[0].fullPath
        }
      } catch (err) {
        // Directory not readable, skip
      }
    }
  }

  return null
}

// Try to get the file path from the workbook history item directly
function getFilenameFromHistory(workbook, type, index) {
  const historyKey = TYPE_TO_HISTORY[type]
  if (!historyKey) return null

  const calc = workbook.graphingCalculator
  if (!calc) return null

  const history = calc[historyKey]
  if (!history || !history[index]) return null

  const item = history[index]

  // The item may have a savedPath, filename, or pngPath property
  const candidates = [
    item.savedPath,
    item.filename,
    item.pngPath,
    item.filePath,
    item.path
  ].filter(Boolean)

  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) {
      console.log(`✅ Found via history item property: ${candidate}`)
      return candidate
    }
  }

  return null
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const sessionId = searchParams.get('sessionId') || 'dev_session'
    const type = searchParams.get('type')
    const index = parseInt(searchParams.get('index') || '0')
    if (!type) {
      return NextResponse.json({ error: 'type is required' }, { status: 400 })
    }

    if (!TYPE_TO_HISTORY[type]) {
      return NextResponse.json(
        { error: `Unknown graph type: ${type}. Valid: ${Object.keys(TYPE_TO_HISTORY).join(', ')}` },
        { status: 400 }
      )
    }

    let filePath = null

    // Strategy 1: Try to get path from workbook history if sessionId provided
    if (sessionId) {
      const workbook = serverWorkbookManager.getWorkbook(sessionId)
      if (workbook) {
        filePath = getFilenameFromHistory(workbook, type, index)
      }
    }

    // Strategy 2: Search filesystem by naming pattern
    if (!filePath) {
      console.log(`🔍 Searching filesystem for ${type} index ${index}...`)
      filePath = findGraphFile(type, index)
    }

    if (!filePath) {
      console.error(`❌ No file found for type=${type} index=${index}`)
      return NextResponse.json(
        { error: `Graph image not found for ${type} at index ${index}` },
        { status: 404 }
      )
    }

    // Read and return the file
    const buffer = fs.readFileSync(filePath)
    const filename = path.basename(filePath)

    console.log(`📤 Serving graph image: ${filename} (${buffer.length} bytes)`)

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
        'Content-Length': buffer.length.toString(),
        'Content-Disposition': `inline; filename="${filename}"`,
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    })
  } catch (error) {
    console.error('Graph image route error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
