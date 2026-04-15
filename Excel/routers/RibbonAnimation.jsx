'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import RibbonComponent from './RibbonComponent'
import RibbonDisplay from './RibbonDisplay'
import Controls from './Controls'
import DataLoader from './DataLoader'
import SessionManager from './SessionManager'

export default function RibbonAnimation() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [speed, setSpeed] = useState(1)
  const [activeComponents, setActiveComponents] = useState({})
  const [highlightedComponent, setHighlightedComponent] = useState(null)
  const [activeArrows, setActiveArrows] = useState([])
  const [ribbonClosed, setRibbonClosed] = useState(true)
  const [activeTab, setActiveTab] = useState(null)
  const [processText, setProcessText] = useState('Ready - Select Your Data Type')

  // Session state - always ready in dev mode
  const [sessionStarted, setSessionStarted] = useState(false)
  const [workbookData, setWorkbookData] = useState(null)
  const [workbookState, setWorkbookState] = useState(null)
  const [currentPNG, setCurrentPNG] = useState(null)

  // Mode state
  const [currentMode, setCurrentMode] = useState(null)
  const [graphData, setGraphData] = useState(null)
  const [graphMode, setGraphMode] = useState(false)
  const [graphsGenerated, setGraphsGenerated] = useState(false)
  const [statisticsActive, setStatisticsActive] = useState(false)

  const timeoutsRef = useRef([])
  const mediaRecorderRef = useRef(null)
  const streamRef = useRef(null)
  const recordedChunksRef = useRef([])

  const ribbonData = [
    { id: 'home', label: 'Home Tab', details: 'Current spreadsheet\nstate and quick\nactions', example: 'View, Edit, Format', className: 'home-tab', svgPath: 'M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z', color: '#22c55e' },
    { id: 'insert', label: 'Insert Tab', details: 'Add charts, diagrams,\nand molecular\nstructures', example: 'Charts, Diagrams', className: 'insert-tab', svgPath: 'M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z', color: '#3b82f6' },
    { id: 'formulas', label: 'Formulas Tab', details: 'Apply calculations\nand mathematical\nfunctions', example: 'SUM, AVG, MAX', className: 'formulas-tab', svgPath: 'M7,2H9V7H11V9H9V14H11V16H9V22H7V16H5V14H7V9H5V7H7V2M14,7H21V9H14V7M14,15H21V17H14V15Z', color: '#ef4444' },
    { id: 'data', label: 'Data Tab', details: 'Statistics, analysis,\nand data\ntransformation', example: 'Stats, Filter', className: 'data-tab', svgPath: 'M3,3H21V5H3V3M3,7H15V9H3V7M3,11H21V13H3V11M3,15H15V17H3V15M3,19H21V21H3V19Z', color: '#a855f7' },
    { id: 'review', label: 'Review Tab', details: 'Cell references\nand quick\nguide', example: 'References', className: 'review-tab', svgPath: 'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z', color: '#10b981' },
    { id: 'view', label: 'View Tab', details: 'Browse generated\nPNG images and\nvisualizations', example: 'Gallery, Preview', className: 'view-tab', svgPath: 'M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z', color: '#f97316' },
    { id: 'graph', label: 'Graph Tab', details: 'Mathematical graphs,\ngeometric shapes,\nvectors & matrices', example: 'Equations, Shapes', className: 'graph-tab', svgPath: 'M16,11.78L20.24,4.45L21.97,5.45L16.74,14.5L10.23,10.75L5.46,19H22V21H2V3H4V17.54L9.5,8L16,11.78Z', color: '#06b6d4' },
    { id: 'developer', label: 'Developer Tab', details: 'API access, custom\nformulas, and\nautomation', example: 'API, Debug', className: 'developer-tab', svgPath: 'M8,3C6.89,3 6,3.89 6,5V19C6,20.11 6.89,21 8,21H16C17.11,21 18,20.11 18,19V9L12,3H8M11,4L17,10H11V4M9,13V15H15V13H9M9,17V19H13V17H9Z', color: '#facc15' },
    { id: 'draw', label: 'Draw Tab', details: 'Create shapes,\ngraphs, and\ngeometric diagrams', example: 'Shapes, Graphs', className: 'draw-tab', svgPath: 'M20.71,4.63L19.37,3.29C19,2.9 18.35,2.9 17.96,3.29L9,12.25L11.75,15L20.71,6.04C21.1,5.65 21.1,5 20.71,4.63M7,14A3,3 0 0,0 4,17C4,18.31 2.84,19 2,19C2.92,20.22 4.5,21 6,21A4,4 0 0,0 10,17A3,3 0 0,0 7,14Z', color: '#ec4899' },
    { id: 'export', label: 'Export Tab', details: 'Export workbook\nto PNG, Excel\nand other formats', example: 'PNG, XLSX', className: 'export-tab', svgPath: 'M23,12L19,8V11H10V13H19V16M1,18V6C1,4.89 1.9,4 3,4H15A2,2 0 0,1 17,6V9H15V6H3V18H15V15H17V18A2,2 0 0,1 15,20H3A2,2 0 0,1 1,18Z', color: '#14b8a6' },
    { id: 'help', label: 'Help Tab', details: 'Documentation,\ntutorials, and\nsupport', example: 'Docs, FAQ', className: 'help-tab', svgPath: 'M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z', color: '#8b5cf6' },
    { id: 'automate', label: 'Automate Tab', details: 'Workflow automation\nand repetitive\ntask management', example: 'Scripts, Flow', className: 'automate-tab', svgPath: 'M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z', color: '#f43f5e' },
    { id: 'query', label: 'Query Tab', details: 'Data querying\nand filtering\ntools', example: 'Filter, Query', className: 'query-tab', svgPath: 'M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z', color: '#06b6d4' }
  ]

  // On mount: just ensure the dev session exists on the server, no spinner needed
  useEffect(() => {
    const ensureDevSession = async () => {
      try {
        const workbookManager = (await import('@/lib/workbookManager')).default
        await workbookManager.initialize()
        setProcessText('✅ Ready - Select Your Data Type')
      } catch (error) {
        // Non-fatal — DataLoader will retry when user submits data
        console.warn('Dev session pre-warm failed (non-fatal):', error.message)
        setProcessText('Ready - Select Your Data Type')
      }
    }
    ensureDevSession()
  }, [])

  // Handle regular spreadsheet data loading
  const handleDataLoaded = (data) => {
    setWorkbookData(data)
    setSessionStarted(true)
    setRibbonClosed(false)
    setActiveTab('home')
    setGraphMode(false)
    setStatisticsActive(false)
    setCurrentMode('spreadsheet')
    setProcessText('📊 Session Started - Data Loaded')
  }

  // Handle graph data loading
  const handleGraphDataLoaded = async (graphInput) => {
    setSessionStarted(true)
    setRibbonClosed(false)
    setActiveTab('graph')
    setGraphMode(true)
    setStatisticsActive(false)
    setCurrentMode('graph')
    setProcessText('📈 Processing Graphs...')

    try {
      const workbookManager = (await import('@/lib/workbookManager')).default
      const sessionId = workbookManager.sessionId
      console.log(`📊 Using dev session: ${sessionId}`)

      let processedCount = 0
      let errorCount = 0

      if (graphInput.type === 'equation') {
        for (const equation of graphInput.data) {
          try {
            const response = await fetch('/api/workbook/graph-operations', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ sessionId, operation: 'addEquation', data: { equation } })
            })
            if (response.ok) { processedCount++ } else { errorCount++ }
          } catch { errorCount++ }
        }
        setProcessText(`✅ ${processedCount} Equation(s) Graphed${errorCount > 0 ? ` (${errorCount} failed)` : ''}`)

      } else if (graphInput.type === 'geometric') {
        for (const shape of graphInput.data) {
          try {
            const shapeLower = shape.toLowerCase()
            let operation = ''
            if (shapeLower.includes('triangle')) operation = 'addTriangle'
            else if (shapeLower.includes('circle')) operation = 'addCircle'
            else if (shapeLower.includes('rectangle')) operation = 'addRectangle'
            else if (shapeLower.includes('square')) operation = 'addSquare'
            else if (shapeLower.includes('parallelogram')) operation = 'addParallelogram'
            else if (shapeLower.includes('polygon')) operation = 'addPolygon'
            else if (shapeLower.includes('ellipse')) operation = 'addEllipse'
            else if (shapeLower.includes('quadrilateral')) operation = 'addQuadrilateral'
            else if (shapeLower.includes('trapezoid')) operation = 'addTrapezoid'
            else if (shapeLower.includes('sphere')) operation = 'addSphere'
            else if (shapeLower.includes('cylinder')) operation = 'addCylinder'
            else if (shapeLower.includes('cone')) operation = 'addCone'
            else if (shapeLower.includes('cube')) operation = 'addCube'
            else { errorCount++; continue }

            const response = await fetch('/api/workbook/graph-operations', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ sessionId, operation, data: { input: shape } })
            })
            if (response.ok) { processedCount++ } else { errorCount++ }
          } catch { errorCount++ }
        }
        setProcessText(`✅ ${processedCount} Shape(s) Analyzed${errorCount > 0 ? ` (${errorCount} failed)` : ''}`)

      } else if (graphInput.type === 'vectormatrix') {
        for (const item of graphInput.data) {
          try {
            const itemLower = item.toLowerCase()
            let operation = ''
            if (itemLower.includes('vector')) operation = 'addVector'
            else if (itemLower.includes('matrix')) operation = 'addMatrix'
            else { errorCount++; continue }

            const response = await fetch('/api/workbook/graph-operations', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ sessionId, operation, data: { input: item } })
            })
            if (response.ok) { processedCount++ } else { errorCount++ }
          } catch { errorCount++ }
        }
        setProcessText(`✅ ${processedCount} Vector/Matrix Processed${errorCount > 0 ? ` (${errorCount} failed)` : ''}`)
      }

      setGraphData(graphInput)
      setGraphsGenerated(true)

    } catch (error) {
      console.error('❌ Graph processing error:', error)
      setProcessText('❌ Failed: ' + error.message)
      alert('Error: ' + error.message)
    }
  }

  const handleModeChange = (mode) => {
    setCurrentMode(mode)
    if (mode === 'statistics') {
      setStatisticsActive(true)
      setGraphMode(false)
      setActiveTab('data')
      setProcessText('📊 Statistics Mode Active')
    } else if (mode === 'graph') {
      setGraphMode(true)
      setStatisticsActive(false)
      setActiveTab('graph')
      setProcessText('📈 Graph Mode Active')
    } else if (mode === 'spreadsheet') {
      setGraphMode(false)
      setStatisticsActive(false)
      setActiveTab('home')
      setProcessText('📊 Spreadsheet Mode Active')
    }
  }

  const handleStateChange = (newState) => {
    setWorkbookState(newState)
  }

  const clearTimeouts = useCallback(() => {
    timeoutsRef.current.forEach(timeout => clearTimeout(timeout))
    timeoutsRef.current = []
  }, [])

  const handleReset = async () => {
    setIsRunning(false)
    setIsPaused(false)
    setCurrentStep(0)
    clearTimeouts()
    setActiveComponents({})
    setHighlightedComponent(null)
    setActiveArrows([])
    setActiveTab(null)
    setRibbonClosed(true)
    setSessionStarted(false)
    setWorkbookData(null)
    setWorkbookState(null)
    setGraphData(null)
    setGraphMode(false)
    setGraphsGenerated(false)
    setStatisticsActive(false)
    setCurrentMode(null)

    if (isRecording) stopRecording()

    setProcessText('🔧 Resetting...')

    try {
      // Delete and recreate dev session on server
      await fetch('/api/workbook/cleanup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId: 'dev_session' })
      })

      const workbookManager = (await import('@/lib/workbookManager')).default
      workbookManager.reset()
      await workbookManager.initialize()
      setProcessText('✅ Ready - Select Your Data Type')
    } catch (error) {
      console.warn('Reset warning (non-fatal):', error.message)
      setProcessText('Ready - Select Your Data Type')
    }
  }

  const handleStart = () => {
    setIsRunning(true)
    setCurrentStep(0)
  }

  const handlePause = () => {
    setIsPaused(true)
    clearTimeouts()
  }

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: { mediaSource: 'screen', width: 1920, height: 1080 },
        audio: false
      })
      streamRef.current = stream
      const mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm;codecs=vp9' })
      mediaRecorderRef.current = mediaRecorder
      mediaRecorder.ondataavailable = (e) => { if (e.data.size > 0) recordedChunksRef.current.push(e.data) }
      mediaRecorder.onstop = () => { saveRecording(); releaseStream() }
      recordedChunksRef.current = []
      setIsRecording(true)
      mediaRecorder.start(100)
    } catch (err) {
      alert('Recording failed: ' + err.message)
      releaseStream()
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) mediaRecorderRef.current.stop()
    setIsRecording(false)
  }

  const releaseStream = () => {
    if (streamRef.current) { streamRef.current.getTracks().forEach(t => t.stop()); streamRef.current = null }
  }

  const saveRecording = () => {
    if (recordedChunksRef.current.length === 0) { alert('No recording data.'); return }
    const blob = new Blob(recordedChunksRef.current, { type: 'video/webm' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `excel-session-${new Date().toISOString().slice(0, 19).replace(/:/g, '-')}.webm`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    recordedChunksRef.current = []
  }

  const toggleRecording = () => { if (!isRecording) startRecording(); else stopRecording() }

  const handleTabClick = (tabId) => {
    setActiveTab(tabId)
    if (ribbonClosed) setRibbonClosed(false)
  }

  const getModeDisplayText = () => {
    if (statisticsActive) return '✓ Statistics Mode Active'
    if (graphMode) return '✓ Graph Mode Active'
    if (workbookData) return '✓ Spreadsheet Mode Active'
    return ''
  }

  return (
    <div>
      <div className="grid-background"></div>

      <div className={`process-indicator ${sessionStarted ? 'active' : ''}`}>
        {processText}
      </div>

      {sessionStarted && (
        <div className="session-active">
          <span className={`session-badge ${currentMode || 'default'}`}>
            {getModeDisplayText()}
          </span>
          {graphMode && graphsGenerated && (
            <span className="graph-count-badge">
              {graphData?.data?.length || 0} graph(s) generated
            </span>
          )}
          {statisticsActive && (
            <span className="stats-badge">📊 Statistical Analysis Active</span>
          )}
        </div>
      )}

      <div className={`recording-indicator ${isRecording ? 'active' : ''}`}>
        ● RECORDING
      </div>

      {/* DataLoader shown immediately — no initialization gate */}
      {!sessionStarted && (
        <DataLoader
          onDataLoaded={handleDataLoaded}
          onGraphDataLoaded={handleGraphDataLoaded}
          isVisible={true}
        />
      )}

      {/* SessionManager runs once data is loaded */}
      {sessionStarted && (workbookData || graphMode) && (
        <SessionManager
          data={workbookData || []}
          onStateChange={handleStateChange}
          activeTab={activeTab}
          isRunning={isRunning}
          isPaused={isPaused}
          currentStep={currentStep}
          graphMode={graphMode}
          graphData={graphData}
          statisticsMode={statisticsActive}
          currentMode={currentMode}
          onModeChange={handleModeChange}
        />
      )}

      <RibbonDisplay
        activeTab={activeTab}
        ribbonClosed={ribbonClosed}
        onClose={() => setRibbonClosed(!ribbonClosed)}
        onTabClick={handleTabClick}
        workbookState={workbookState}
        currentPNG={currentPNG}
        sessionManager={typeof window !== 'undefined' ? window.sessionManager : null}
        graphMode={graphMode}
        graphData={graphData}
        statisticsActive={statisticsActive}
        currentMode={currentMode}
        onModeChange={handleModeChange}
      />

      <Controls
        isRunning={isRunning}
        isPaused={isPaused}
        isRecording={isRecording}
        onStart={handleStart}
        onPause={handlePause}
        onReset={handleReset}
        onToggleRecording={toggleRecording}
      />

      <style jsx>{``}</style>
    </div>
  )
}
