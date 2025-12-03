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
  const [processText, setProcessText] = useState('Initializing...')

  // Session state
  const [workbookReady, setWorkbookReady] = useState(false)
  const [sessionStarted, setSessionStarted] = useState(false)
  const [workbookData, setWorkbookData] = useState(null)
  const [workbookState, setWorkbookState] = useState(null)
  const [currentPNG, setCurrentPNG] = useState(null)

  // Mode state - now includes statistics mode
  const [currentMode, setCurrentMode] = useState(null) // 'spreadsheet', 'graph', or 'statistics'
  const [graphData, setGraphData] = useState(null)
  const [graphMode, setGraphMode] = useState(false)
  const [graphsGenerated, setGraphsGenerated] = useState(false)
  const [statisticsActive, setStatisticsActive] = useState(false)

  const timeoutsRef = useRef([])
  const mediaRecorderRef = useRef(null)
  const streamRef = useRef(null)
  const recordedChunksRef = useRef([])

  const ribbonData = [
    {
      id: 'home',
      label: 'Home Tab',
      details: 'Current spreadsheet\nstate and quick\nactions',
      example: 'View, Edit, Format',
      className: 'home-tab',
      svgPath: 'M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z',
      color: '#22c55e'
    },
    {
      id: 'insert',
      label: 'Insert Tab',
      details: 'Add charts, diagrams,\nand molecular\nstructures',
      example: 'Charts, Diagrams',
      className: 'insert-tab',
      svgPath: 'M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z',
      color: '#3b82f6'
    },
    {
      id: 'formulas',
      label: 'Formulas Tab',
      details: 'Apply calculations\nand mathematical\nfunctions',
      example: 'SUM, AVG, MAX',
      className: 'formulas-tab',
      svgPath: 'M7,2H9V7H11V9H9V14H11V16H9V22H7V16H5V14H7V9H5V7H7V2M14,7H21V9H14V7M14,15H21V17H14V15Z',
      color: '#ef4444'
    },
    {
      id: 'data',
      label: 'Data Tab',
      details: 'Statistics, analysis,\nand data\ntransformation',
      example: 'Stats, Filter',
      className: 'data-tab',
      svgPath: 'M3,3H21V5H3V3M3,7H15V9H3V7M3,11H21V13H3V11M3,15H15V17H3V15M3,19H21V21H3V19Z',
      color: '#a855f7'
    },
    {
      id: 'review',
      label: 'Review Tab',
      details: 'Cell references\nand quick\nguide',
      example: 'References',
      className: 'review-tab',
      svgPath: 'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z',
      color: '#10b981'
    },
    {
      id: 'view',
      label: 'View Tab',
      details: 'Browse generated\nPNG images and\nvisualizations',
      example: 'Gallery, Preview',
      className: 'view-tab',
      svgPath: 'M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z',
      color: '#f97316'
    },
    {
      id: 'graph',
      label: 'Graph Tab',
      details: 'Mathematical graphs,\ngeometric shapes,\nvectors & matrices',
      example: 'Equations, Shapes',
      className: 'graph-tab',
      svgPath: 'M16,11.78L20.24,4.45L21.97,5.45L16.74,14.5L10.23,10.75L5.46,19H22V21H2V3H4V17.54L9.5,8L16,11.78Z',
      color: '#06b6d4'
    },
    {
      id: 'developer',
      label: 'Developer Tab',
      details: 'API access, custom\nformulas, and\nautomation',
      example: 'API, Debug',
      className: 'developer-tab',
      svgPath: 'M8,3C6.89,3 6,3.89 6,5V19C6,20.11 6.89,21 8,21H16C17.11,21 18,20.11 18,19V9L12,3H8M11,4L17,10H11V4M9,13V15H15V13H9M9,17V19H13V17H9Z',
      color: '#facc15'
    },
    {
      id: 'draw',
      label: 'Draw Tab',
      details: 'Create shapes,\ngraphs, and\ngeometric diagrams',
      example: 'Shapes, Graphs',
      className: 'draw-tab',
      svgPath: 'M20.71,4.63L19.37,3.29C19,2.9 18.35,2.9 17.96,3.29L9,12.25L11.75,15L20.71,6.04C21.1,5.65 21.1,5 20.71,4.63M7,14A3,3 0 0,0 4,17C4,18.31 2.84,19 2,19C2.92,20.22 4.5,21 6,21A4,4 0 0,0 10,17A3,3 0 0,0 7,14Z',
      color: '#ec4899'
    },
    {
      id: 'export',
      label: 'Export Tab',
      details: 'Export workbook\nto PNG, Excel\nand other formats',
      example: 'PNG, XLSX',
      className: 'export-tab',
      svgPath: 'M23,12L19,8V11H10V13H19V16M1,18V6C1,4.89 1.9,4 3,4H15A2,2 0 0,1 17,6V9H15V6H3V18H15V15H17V18A2,2 0 0,1 15,20H3A2,2 0 0,1 1,18Z',
      color: '#14b8a6'
    },
    {
      id: 'help',
      label: 'Help Tab',
      details: 'Documentation,\ntutorials, and\nsupport',
      example: 'Docs, FAQ',
      className: 'help-tab',
      svgPath: 'M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z',
      color: '#8b5cf6'
    },
    {
      id: 'automate',
      label: 'Automate Tab',
      details: 'Workflow automation\nand repetitive\ntask management',
      example: 'Scripts, Flow',
      className: 'automate-tab',
      svgPath: 'M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11.03L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11.03L19.5,12L19.43,12.97L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z',
      color: '#f43f5e'
    },
    {
      id: 'query',
      label: 'Query Tab',
      details: 'Data querying\nand filtering\ntools',
      example: 'Filter, Query',
      className: 'query-tab',
      svgPath: 'M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z',
      color: '#06b6d4'
    }
  ]

  const steps = [
    {
      title: "Welcome to Excel Interactive Session",
      description: "This interactive tool helps you learn Excel through hands-on practice with real spreadsheet functionality.",
      action: () => {},
      duration: 3000
    },
    {
      title: "Step 1: Select Data Type",
      description: "Choose your data type and enter your inputs.",
      action: () => {},
      duration: 5000
    }
  ]

  // Auto-initialize workbook on component mount
  useEffect(() => {
    const initializeWorkbook = async () => {
      setProcessText('🔧 Initializing workbook...')

      try {
        const workbookManager = (await import('@/lib/workbookManager')).default
        await workbookManager.initialize()

        setWorkbookReady(true)
        setProcessText('✅ Ready - Select Your Data Type')

        console.log('✅ Workbook auto-initialized with session:', workbookManager.sessionId)
      } catch (error) {
        console.error('Failed to initialize workbook:', error)
        setProcessText('❌ Initialization Failed - Retrying...')

        setTimeout(async () => {
          try {
            const workbookManager = (await import('@/lib/workbookManager')).default
            await workbookManager.initialize()
            setWorkbookReady(true)
            setProcessText('✅ Ready - Select Your Data Type')
          } catch (retryError) {
            console.error('Retry failed:', retryError)
            setProcessText('❌ Failed to Initialize')
          }
        }, 1000)
      }
    }

    initializeWorkbook()
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

      if (!workbookManager.isInitialized || !workbookManager.sessionId) {
        console.log('📝 Creating workbook session for graphs...')
        await workbookManager.initialize()
      }

      const sessionId = workbookManager.sessionId
      console.log(`📊 Using unified session: ${sessionId}`)

      let processedCount = 0
      let errorCount = 0

      if (graphInput.type === 'equation') {
        console.log(`\n📈 Processing ${graphInput.data.length} equation(s)...`)
        for (const equation of graphInput.data) {
          try {
            const response = await fetch('/api/workbook/graph-operations', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                sessionId,
                operation: 'addEquation',
                data: { equation }
              })
            })

            if (response.ok) {
              processedCount++
              console.log(`  ✓ Equation ${processedCount}: ${equation}`)
            } else {
              const error = await response.json()
              errorCount++
              console.error(`  ✗ Failed: ${equation}`, error.error)
            }
          } catch (error) {
            errorCount++
            console.error(`  ✗ Error: ${equation}`, error.message)
          }
        }
        setProcessText(`✅ ${processedCount} Equation(s) Graphed ${errorCount > 0 ? `(${errorCount} failed)` : ''}`)

      } else if (graphInput.type === 'geometric') {
        console.log(`\n🔺 Processing ${graphInput.data.length} shape(s)...`)
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
            else {
              console.warn(`  ⚠ Unknown shape: ${shape}`)
              errorCount++
              continue
            }

            const response = await fetch('/api/workbook/graph-operations', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                sessionId,
                operation,
                data: { input: shape }
              })
            })

            if (response.ok) {
              processedCount++
              console.log(`  ✓ Shape ${processedCount}: ${shape}`)
            } else {
              const error = await response.json()
              errorCount++
              console.error(`  ✗ Failed: ${shape}`, error.error)
            }
          } catch (error) {
            errorCount++
            console.error(`  ✗ Error: ${shape}`, error.message)
          }
        }
        setProcessText(`✅ ${processedCount} Shape(s) Analyzed ${errorCount > 0 ? `(${errorCount} failed)` : ''}`)

      } else if (graphInput.type === 'vectormatrix') {
        console.log(`\n➡️ Processing ${graphInput.data.length} vector/matrix item(s)...`)
        for (const item of graphInput.data) {
          try {
            const itemLower = item.toLowerCase()
            let operation = ''

            if (itemLower.includes('vector')) operation = 'addVector'
            else if (itemLower.includes('matrix')) operation = 'addMatrix'
            else {
              console.warn(`  ⚠ Unknown type: ${item}`)
              errorCount++
              continue
            }

            const response = await fetch('/api/workbook/graph-operations', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                sessionId,
                operation,
                data: { input: item }
              })
            })

            if (response.ok) {
              processedCount++
              console.log(`  ✓ Item ${processedCount}: ${item}`)
            } else {
              const error = await response.json()
              errorCount++
              console.error(`  ✗ Failed: ${item}`, error.error)
            }
          } catch (error) {
            errorCount++
            console.error(`  ✗ Error: ${item}`, error.message)
          }
        }
        setProcessText(`✅ ${processedCount} Vector/Matrix Processed ${errorCount > 0 ? `(${errorCount} failed)` : ''}`)
      }

      setGraphData(graphInput)
      setGraphsGenerated(true)

      console.log(`\n📊 Complete: ${processedCount} successful, ${errorCount} failed`)

    } catch (error) {
      console.error('❌ Graph processing error:', error)
      setProcessText('❌ Failed: ' + error.message)
      alert('Error: ' + error.message)
    }
  }

  // Handle mode changes from tabs (statistics, spreadsheet, graph)
  const handleModeChange = (mode) => {
    console.log(`🔄 Mode changed to: ${mode}`)
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

  const showRibbon = () => {
    if (!ribbonClosed) {
      // Already open
    }
  }

  const highlightTab = (tabId, arrowIndex) => {
    setActiveComponents(prev => ({ ...prev, [tabId]: true }))
    setTimeout(() => {
      setHighlightedComponent(tabId)
    }, 200)
    setActiveTab(tabId)
    setActiveArrows([arrowIndex])
  }

  const showCompleteRibbon = () => {
    ribbonData.forEach((ribbon, index) => {
      setTimeout(() => {
        setActiveComponents(prev => ({ ...prev, [ribbon.id]: true }))
        setTimeout(() => {
          setHighlightedComponent(ribbon.id)
        }, 200)
      }, index * 200)
    })

    ribbonData.forEach((ribbon, index) => {
      setTimeout(() => {
        setActiveTab(ribbon.id)
      }, index * 400)
    })

    const allArrows = Array.from({ length: 12 }, (_, i) => i)
    allArrows.forEach((arrow, index) => {
      setTimeout(() => {
        setActiveArrows(prev => [...prev, arrow])
      }, index * 150)
    })

    setTimeout(() => {
      setActiveArrows([])
    }, 3000)
  }

  const clearTimeouts = useCallback(() => {
    timeoutsRef.current.forEach(timeout => clearTimeout(timeout))
    timeoutsRef.current = []
  }, [])

  const runStep = useCallback(() => {
    if (!isRunning || isPaused || currentStep >= steps.length) {
      setIsRunning(false)
      if (currentStep >= steps.length) {
        setProcessText("Ready to explore!")
      }
      return
    }

    const step = steps[currentStep]
    setProcessText(step.title)
    step.action()

    const timeout = setTimeout(() => {
      setCurrentStep(prev => prev + 1)
    }, step.duration / speed)

    timeoutsRef.current.push(timeout)
  }, [currentStep, isRunning, isPaused, speed, steps])

  useEffect(() => {
    if (isRunning && !isPaused) {
      runStep()
    }
  }, [currentStep, isRunning, isPaused, runStep])

  const handleStart = () => {
    if (isPaused) {
      setIsPaused(false)
    } else {
      setIsRunning(true)
      setCurrentStep(0)
      setActiveComponents({})
      setHighlightedComponent(null)
      setActiveArrows([])
    }
  }

  const handlePause = () => {
    setIsPaused(true)
    clearTimeouts()
  }

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

    if (isRecording) {
      stopRecording()
    }

    setWorkbookReady(false)
    setProcessText('🔧 Reinitializing...')

    try {
      const workbookManager = (await import('@/lib/workbookManager')).default
      workbookManager.reset()
      await workbookManager.initialize()
      setWorkbookReady(true)
      setProcessText('✅ Ready - Select Your Data Type')
    } catch (error) {
      console.error('Failed to reinitialize:', error)
      setProcessText('❌ Reinitialization Failed')
    }
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

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          recordedChunksRef.current.push(event.data)
        }
      }

      mediaRecorder.onstop = () => {
        saveRecording()
        releaseStream()
      }

      recordedChunksRef.current = []
      setIsRecording(true)
      mediaRecorder.start(100)
    } catch (err) {
      console.error('Failed to start recording:', err)
      alert('Recording failed: ' + err.message)
      releaseStream()
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
    }
    setIsRecording(false)
  }

  const releaseStream = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop())
      streamRef.current = null
    }
  }

  const saveRecording = () => {
    if (recordedChunksRef.current.length === 0) {
      alert('No recording data available.')
      return
    }

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

  const toggleRecording = () => {
    if (!isRecording) {
      startRecording()
    } else {
      stopRecording()
    }
  }

  const handleTabClick = (tabId) => {
    setActiveTab(tabId)
    if (ribbonClosed) {
      setRibbonClosed(false)
    }
  }

  // Get mode display text
  const getModeDisplayText = () => {
    if (statisticsActive) return '✓ Statistics Mode Active'
    if (graphMode) return '✓ Graph Mode Active'
    if (workbookData) return '✓ Spreadsheet Mode Active'
    return ''
  }

  return (
    <div>
      <div className="grid-background"></div>
      <div className={`process-indicator ${workbookReady || sessionStarted ? 'active' : ''}`}>
        {processText}
      </div>

      {/* Session Active Indicator with Mode Display */}
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
            <span className="stats-badge">
              📊 Statistical Analysis Active
            </span>
          )}
        </div>
      )}

      <div className={`recording-indicator ${isRecording ? 'active' : ''}`}>
        ● RECORDING
      </div>

      {/* Data Loader */}
      {workbookReady && !sessionStarted && (
        <DataLoader
          onDataLoaded={handleDataLoaded}
          onGraphDataLoaded={handleGraphDataLoaded}
          isVisible={true}
        />
      )}

      {/* Loading indicator */}
      {!workbookReady && !sessionStarted && (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p className="loading-text">Initializing Excel Session...</p>
        </div>
      )}

      {/* Session Manager - For both spreadsheet and graph modes */}
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

      {/* Ribbon Display */}
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

      {/* Ribbon Components (floating buttons) - Only show when not in session */}
      {!sessionStarted && !workbookReady && (
        <div className="ribbon-container">
          {ribbonData.map((ribbon) => (
            <RibbonComponent
              key={ribbon.id}
              {...ribbon}
              active={activeComponents[ribbon.id]}
              highlighted={highlightedComponent === ribbon.id}
              onClick={() => handleTabClick(ribbon.id)}
            />
          ))}

          {/* Helper Arrows */}
          {[
            { id: 1, style: { left: '12%', top: '28%' }, direction: 'arrow-down' },
            { id: 2, style: { right: '12%', top: '28%' }, direction: 'arrow-down' },
            { id: 3, style: { left: '27%', top: '28%' }, direction: 'arrow-down' },
            { id: 4, style: { right: '27%', top: '28%' }, direction: 'arrow-down' },
            { id: 5, style: { left: '42%', top: '28%' }, direction: 'arrow-down' },
            { id: 6, style: { left: '27%', top: '60%' }, direction: 'arrow-up' },
            { id: 7, style: { left: '42%', top: '60%' }, direction: 'arrow-up' },
            { id: 8, style: { left: '43%', top: '38%' }, direction: 'arrow-right' },
            { id: 9, style: { right: '12%', top: '60%' }, direction: 'arrow-up' },
            { id: 10, style: { left: '12%', bottom: '28%' }, direction: 'arrow-up' },
            { id: 11, style: { left: '25%', bottom: '28%' }, direction: 'arrow-up' },
            { id: 12, style: { right: '25%', bottom: '28%' }, direction: 'arrow-up' }
          ].map((arrow) => (
            <div
              key={arrow.id}
              className={`helper-arrow ${arrow.direction} ${activeArrows.includes(arrow.id - 1) ? 'active' : ''}`}
              style={arrow.style}
            >
              {arrow.direction === 'arrow-down' ? '↓' : arrow.direction === 'arrow-up' ? '↑' : '→'}
            </div>
          ))}
        </div>
      )}

      <Controls
        isRunning={isRunning}
        isPaused={isPaused}
        isRecording={isRecording}
        onStart={handleStart}
        onPause={handlePause}
        onReset={handleReset}
        onToggleRecording={toggleRecording}
      />

      <style jsx>{`
        .process-indicator {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          padding: 15px 30px;
          background: rgba(0, 0, 0, 0.8);
          border: 2px solid rgba(59, 130, 246, 0.3);
          border-radius: 12px;
          color: #3b82f6;
          font-size: 16px;
          font-weight: bold;
          z-index: 150;
          opacity: 0.7;
          transition: all 0.3s ease;
        }

        .process-indicator.active {
          opacity: 1;
          border-color: rgba(34, 197, 94, 0.5);
          color: #22c55e;
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
        }

        .loading-container {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          z-index: 100;
        }

        .loading-spinner {
          width: 60px;
          height: 60px;
          border: 4px solid rgba(59, 130, 246, 0.2);
          border-top-color: #3b82f6;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 20px;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .loading-text {
          color: #3b82f6;
          font-size: 18px;
          font-weight: bold;
        }

        .session-active {
          position: fixed;
          top: 80px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 15px;
          z-index: 150;
          flex-wrap: wrap;
          justify-content: center;
        }

        .session-badge {
          padding: 10px 20px;
          background: rgba(34, 197, 94, 0.2);
          border: 2px solid rgba(34, 197, 94, 0.5);
          border-radius: 20px;
          color: #22c55e;
          font-size: 14px;
          font-weight: bold;
          box-shadow: 0 0 15px rgba(34, 197, 94, 0.3);
          transition: all 0.3s ease;
        }

        .session-badge.graph {
          background: rgba(6, 182, 212, 0.2);
          border-color: rgba(6, 182, 212, 0.5);
          color: #06b6d4;
          box-shadow: 0 0 15px rgba(6, 182, 212, 0.3);
        }

        .session-badge.statistics {
          background: rgba(168, 85, 247, 0.2);
          border-color: rgba(168, 85, 247, 0.5);
          color: #a855f7;
          box-shadow: 0 0 15px rgba(168, 85, 247, 0.3);
        }

        .session-badge.spreadsheet {
          background: rgba(34, 197, 94, 0.2);
          border-color: rgba(34, 197, 94, 0.5);
          color: #22c55e;
          box-shadow: 0 0 15px rgba(34, 197, 94, 0.3);
        }

        .graph-count-badge {
          padding: 10px 20px;
          background: rgba(6, 182, 212, 0.2);
          border: 2px solid rgba(6, 182, 212, 0.5);
          border-radius: 20px;
          color: #06b6d4;
          font-size: 14px;
          font-weight: bold;
          box-shadow: 0 0 15px rgba(6, 182, 212, 0.3);
        }

        .stats-badge {
          padding: 10px 20px;
          background: rgba(168, 85, 247, 0.2);
          border: 2px solid rgba(168, 85, 247, 0.5);
          border-radius: 20px;
          color: #a855f7;
          font-size: 14px;
          font-weight: bold;
          box-shadow: 0 0 15px rgba(168, 85, 247, 0.3);
        }

        .recording-indicator {
          position: fixed;
          top: 20px;
          left: 20px;
          padding: 12px 25px;
          background: rgba(239, 68, 68, 0.1);
          border: 2px solid rgba(239, 68, 68, 0.3);
          border-radius: 12px;
          color: #ef4444;
          font-size: 14px;
          font-weight: bold;
          opacity: 0;
          transition: all 0.3s ease;
          z-index: 150;
        }

        .recording-indicator.active {
          opacity: 1;
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            box-shadow: 0 0 10px rgba(239, 68, 68, 0.3);
          }
          50% {
            opacity: 0.7;
            box-shadow: 0 0 20px rgba(239, 68, 68, 0.6);
          }
        }

        .helper-arrow {
          position: fixed;
          font-size: 40px;
          color: rgba(59, 130, 246, 0.3);
          opacity: 0;
          transition: all 0.5s ease;
          pointer-events: none;
          z-index: 5;
        }

        .helper-arrow.active {
          opacity: 1;
          animation: bounce 1s infinite;
        }

        .helper-arrow.arrow-down {
          animation: bounceDown 1s infinite;
        }

        .helper-arrow.arrow-up {
          animation: bounceUp 1s infinite;
        }

        .helper-arrow.arrow-right {
          animation: bounceRight 1s infinite;
        }

        @keyframes bounceDown {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }

        @keyframes bounceUp {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes bounceRight {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(10px);
          }
        }

        @media (max-width: 1024px) {
          .process-indicator {
            font-size: 14px;
            padding: 12px 20px;
          }

          .session-active {
            flex-direction: column;
            align-items: center;
            gap: 10px;
          }

          .session-badge,
          .graph-count-badge,
          .stats-badge {
            font-size: 12px;
            padding: 8px 16px;
          }

          .loading-spinner {
            width: 50px;
            height: 50px;
          }

          .loading-text {
            font-size: 16px;
          }
        }

        @media (max-width: 768px) {
          .process-indicator {
            font-size: 12px;
            padding: 10px 15px;
            top: 10px;
          }

          .recording-indicator {
            top: 10px;
            left: 10px;
            padding: 10px 20px;
            font-size: 12px;
          }

          .session-active {
            top: 60px;
          }

          .session-badge,
          .graph-count-badge,
          .stats-badge {
            font-size: 11px;
            padding: 6px 12px;
          }

          .helper-arrow {
            font-size: 30px;
          }

          .loading-spinner {
            width: 40px;
            height: 40px;
          }

          .loading-text {
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .process-indicator {
            font-size: 11px;
            padding: 8px 12px;
            max-width: 90%;
          }

          .session-badge,
          .graph-count-badge,
          .stats-badge {
            font-size: 10px;
            padding: 5px 10px;
          }

          .recording-indicator {
            padding: 8px 15px;
            font-size: 11px;
          }

          .helper-arrow {
            font-size: 24px;
          }

          .loading-spinner {
            width: 35px;
            height: 35px;
          }

          .loading-text {
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  )
}
