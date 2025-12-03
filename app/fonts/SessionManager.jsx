import { useState, useEffect } from 'react'
import workbookManager from '@/lib/workbookManager'

export default function SessionManager({
  data,
  onStateChange,
  activeTab,
  isRunning,
  isPaused,
  currentStep,
  onStepComplete,
  graphMode = false,
  graphData = null,
  statisticsMode = false,
  currentMode = null,
  onModeChange
}) {
  const [workbookState, setWorkbookState] = useState(null)
  const [currentPNG, setCurrentPNG] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)

  // Initialize workbook with data or graph mode or statistics mode
  useEffect(() => {
    if (graphMode && graphData) {
      console.log('📈 Graph mode active:', graphData)
      updateGraphState()
    } else if (statisticsMode) {
      console.log('📊 Statistics mode active')
      updateStatisticsState()
    } else if (data && data.length > 0) {
      console.log('📊 Spreadsheet mode active')
      initializeWorkbook()
    }
  }, [data, graphMode, graphData, statisticsMode])

  const initializeWorkbook = async () => {
    setIsProcessing(true)
    try {
      const result = await workbookManager.loadData(data)
      setWorkbookState(result.state || result)
      await generateCurrentPNG()
      onStateChange?.(result.state || result)
    } catch (error) {
      console.error('Failed to initialize workbook:', error)
    } finally {
      setIsProcessing(false)
    }
  }

  const updateGraphState = async () => {
    try {
      const state = await workbookManager.getCurrentState()
      setWorkbookState(state)
      onStateChange?.(state)
    } catch (error) {
      console.error('Failed to update graph state:', error)
    }
  }

  const updateStatisticsState = async () => {
    try {
      const state = await workbookManager.getCurrentState()
      setWorkbookState(state)
      onStateChange?.(state)
    } catch (error) {
      console.error('Failed to update statistics state:', error)
    }
  }

  // Generate PNG of current state
  const generateCurrentPNG = async () => {
    try {
      const blob = await workbookManager.exportToPNG({
        includeCharts: false,
        includeAnatomicalDiagrams: false,
        includeCrossSectionDiagrams: false,
        includeStereochemistryDiagrams: false
      })
      const url = URL.createObjectURL(blob)
      setCurrentPNG(url)
    } catch (error) {
      console.error('Failed to generate PNG:', error)
    }
  }

  // Apply formula
  const applyFormula = async (targetCell, formulaKey, params) => {
    setIsProcessing(true)
    try {
      const { result, state } = await workbookManager.applyFormula(targetCell, formulaKey, params)
      setWorkbookState(state)
      await generateCurrentPNG()
      onStateChange?.(state)
      return result
    } catch (error) {
      console.error('Failed to apply formula:', error)
      throw error
    } finally {
      setIsProcessing(false)
    }
  }

  // Add chart
  const addChart = async (config) => {
    setIsProcessing(true)
    try {
      const response = await fetch('/api/workbook/add-chart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: workbookManager.sessionId,
          config
        })
      })

      if (!response.ok) throw new Error('Failed to add chart')

      const { chart, state } = await response.json()
      setWorkbookState(state)
      await generateCurrentPNG()
      onStateChange?.(state)
      return chart
    } catch (error) {
      console.error('Failed to add chart:', error)
      throw error
    } finally {
      setIsProcessing(false)
    }
  }

  // Add diagram
  const addDiagram = async (type, config) => {
    setIsProcessing(true)
    try {
      const response = await fetch('/api/workbook/add-diagram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: workbookManager.sessionId,
          type,
          config
        })
      })

      if (!response.ok) throw new Error('Failed to add diagram')

      const { diagram, state } = await response.json()
      setWorkbookState(state)
      await generateCurrentPNG()
      onStateChange?.(state)
      return diagram
    } catch (error) {
      console.error('Failed to add diagram:', error)
      throw error
    } finally {
      setIsProcessing(false)
    }
  }

  // Export functions
  const exportToPNG = async (options = {}) => {
    try {
      const blob = await workbookManager.exportToPNG(options)
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `workbook-${Date.now()}.png`
      a.click()
      URL.revokeObjectURL(url)
      return true
    } catch (error) {
      console.error('Export failed:', error)
      throw error
    }
  }

  const exportToExcel = async (options = {}) => {
    try {
      const response = await fetch('/api/workbook/export-excel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: workbookManager.sessionId,
          options
        })
      })

      if (!response.ok) throw new Error('Export failed')

      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `workbook-${Date.now()}.xlsx`
      a.click()
      URL.revokeObjectURL(url)
      return true
    } catch (error) {
      console.error('Export failed:', error)
      throw error
    }
  }

  // Cleanup session
  const cleanupSession = async () => {
    try {
      const response = await fetch('/api/workbook/cleanup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: workbookManager.sessionId
        })
      })

      if (response.ok) {
        console.log('✅ Session cleaned up successfully')
      }
    } catch (error) {
      console.error('Failed to cleanup session:', error)
    }
  }

  // Reset workbook
  const resetWorkbook = async () => {
    await cleanupSession()
    workbookManager.reset()
    setWorkbookState(null)
    setCurrentPNG(null)
  }

  // Get graphing calculator
  const getGraphingCalculator = () => {
    if (!workbookManager.graphingCalculator) {
      workbookManager.initializeGraphingCalculator()
    }
    return workbookManager.graphingCalculator
  }

  // Expose methods to parent
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.sessionManager = {
        applyFormula,
        addChart,
        addDiagram,
        exportToPNG,
        exportToExcel,
        resetWorkbook,
        cleanupSession,
        getState: () => workbookState,
        getCurrentPNG: () => currentPNG,
        getSessionId: () => workbookManager.sessionId,
        refreshPNG: generateCurrentPNG,

        // Mode management
        getCurrentMode: () => currentMode,
        isStatisticsMode: () => statisticsMode,
        isGraphMode: () => graphMode,
        isSpreadsheetMode: () => !graphMode && !statisticsMode,

        // Graphing calculator methods
        getGraphingCalculator,

        changeGraphTheme: (theme) => {
          try {
            const response = fetch('/api/workbook/graph', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                sessionId: workbookManager.sessionId,
                operation: 'changeTheme',
                data: { theme }
              })
            })
            return true
          } catch (error) {
            console.error('Error changing theme:', error)
            return false
          }
        },

        saveCurrentGraph: async () => {
          try {
            await fetch('/api/workbook/graph', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                sessionId: workbookManager.sessionId,
                operation: 'saveGraph',
                data: {}
              })
            })
            return true
          } catch (error) {
            console.error('Error saving graph:', error)
            throw error
          }
        }
      }
    }

    return () => {
      if (typeof window !== 'undefined') {
        delete window.sessionManager
      }
    }
  }, [workbookState, currentPNG, currentMode, statisticsMode, graphMode])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      cleanupSession()
    }
  }, [])

  // Get processing message based on mode
  const getProcessingMessage = () => {
    if (statisticsMode) return 'Processing statistical analysis...'
    if (graphMode) return 'Processing graphs...'
    return 'Processing...'
  }

  return (
    <>
      {isProcessing && (
        <div className="processing-overlay">
          <div className="spinner"></div>
          <p>{getProcessingMessage()}</p>
        </div>
      )}

      <style jsx>{`
        .processing-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 200;
        }

        .spinner {
          width: 50px;
          height: 50px;
          border: 4px solid rgba(59, 130, 246, 0.3);
          border-top-color: #3b82f6;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .processing-overlay p {
          color: #3b82f6;
          margin-top: 20px;
          font-size: 18px;
          font-weight: bold;
        }
      `}</style>
    </>
  )
}
