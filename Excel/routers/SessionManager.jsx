import { useState, useEffect } from 'react'
import workbookManager from '@/lib/workbookManager'

const DEV_SESSION_ID = 'dev_session'

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

  useEffect(() => {
    if (graphMode && graphData) {
      updateGraphState()
    } else if (statisticsMode) {
      updateStatisticsState()
    } else if (data && data.length > 0) {
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

  const generateCurrentPNG = async () => {
    try {
      const blob = await workbookManager.exportToPNG({
        includeCharts: false,
        includeAnatomicalDiagrams: false,
        includeCrossSectionDiagrams: false,
        includeStereochemistryDiagrams: false,
        includeChemistryDiagrams: false,
        includePhysicsDiagrams: false,
        includeGeometricShapes: false,
        includeGraphs: false
      })
      const url = URL.createObjectURL(blob)
      setCurrentPNG(url)
    } catch (error) {
      console.error('Failed to generate PNG:', error)
    }
  }

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

  const addChart = async (config) => {
    setIsProcessing(true)
    try {
      const response = await fetch('/api/workbook/add-chart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId: DEV_SESSION_ID, config })
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

  const addDiagram = async (type, config) => {
    setIsProcessing(true)
    try {
      const response = await fetch('/api/workbook/add-diagram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId: DEV_SESSION_ID, type, config })
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

  const addChemistryDiagram = (config) => addDiagram('chemistry', config)
  const addPhysicsDiagram = (config) => addDiagram('physics', config)
  const addGeometricShape = (config) => addDiagram('geometric', config)
  const addGraph = (config) => addDiagram('graphs', config)
  const addAnatomicalDiagram = (config) => addDiagram('anatomical', config)
  const addCrossSectionDiagram = (config) => addDiagram('crossSection', config)
  const addStereochemistryDiagram = (config) => addDiagram('stereochemistry', config)

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
        body: JSON.stringify({ sessionId: DEV_SESSION_ID, options })
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

  const cleanupSession = async () => {
    // In dev mode we don't clean up automatically — session persists
    console.log('Dev mode: skipping session cleanup')
  }

  const resetWorkbook = async () => {
    try {
      await fetch('/api/workbook/cleanup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId: DEV_SESSION_ID })
      })
      await workbookManager.initialize()
      setWorkbookState(null)
      setCurrentPNG(null)
    } catch (error) {
      console.error('Reset failed:', error)
    }
  }

  // Expose to window
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.sessionManager = {
        applyFormula,
        addChart,
        addDiagram,
        addAnatomicalDiagram,
        addCrossSectionDiagram,
        addStereochemistryDiagram,
        addChemistryDiagram,
        addPhysicsDiagram,
        addGeometricShape,
        addGraph,
        exportToPNG,
        exportToExcel,
        resetWorkbook,
        cleanupSession,
        getState: () => workbookState,
        getCurrentPNG: () => currentPNG,
        getSessionId: () => DEV_SESSION_ID,
        refreshPNG: generateCurrentPNG,
        getCurrentMode: () => currentMode,
        isStatisticsMode: () => statisticsMode,
        isGraphMode: () => graphMode,
        isSpreadsheetMode: () => !graphMode && !statisticsMode,

        changeGraphTheme: (theme) => {
          fetch('/api/workbook/graph-operations', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sessionId: DEV_SESSION_ID, operation: 'changeTheme', data: { theme } })
          })
          return true
        },

        saveCurrentGraph: async () => {
          await fetch('/api/workbook/graph-operations', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sessionId: DEV_SESSION_ID, operation: 'saveGraph', data: {} })
          })
          return true
        }
      }
    }

    return () => {
      if (typeof window !== 'undefined') delete window.sessionManager
    }
  }, [workbookState, currentPNG, currentMode, statisticsMode, graphMode])

  // No cleanup on unmount in dev mode
  useEffect(() => { return () => {} }, [])

  return (
    <>
      {isProcessing && (
        <div className="processing-overlay">
          <div className="spinner"></div>
          <p>{statisticsMode ? 'Processing statistical analysis...' : graphMode ? 'Processing graphs...' : 'Processing...'}</p>
        </div>
      )}
      <style jsx>{``}</style>
    </>
  )
}
