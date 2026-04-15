// lib/workbookManager.js
class BrowserWorkbookManager {
  constructor() {
    // Fixed session ID - no initialization needed
    this.sessionId = 'dev_session'
    this.isInitialized = true
  }

  async initialize() {
    // Always ensure the server-side session exists for dev_session
    try {
      const response = await fetch('/api/workbook/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: 'dev_session',
          sheetName: 'Interactive Session',
          author: 'Dev User',
          theme: 'professional'
        })
      })
      // 200 or 409 (already exists) are both fine
      console.log('✅ Dev session ready: dev_session')
    } catch (error) {
      console.warn('Session init warning (non-fatal):', error.message)
    }
    this.sessionId = 'dev_session'
    this.isInitialized = true
  }

  async loadData(data) {
    console.log('Loading data with session:', this.sessionId)

    const response = await fetch('/api/workbook/load-data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId: this.sessionId,
        data
      })
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || 'Failed to load data')
    }

    const result = await response.json()
    console.log('✅ Data loaded successfully')
    return result
  }

  async applyFormula(targetCell, formulaKey, params) {
    const response = await fetch('/api/workbook/formulas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId: this.sessionId,
        targetCell,
        formulaKey,
        params
      })
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || 'Failed to apply formula')
    }

    return await response.json()
  }

  async exportToPNG(options = {}) {
    const response = await fetch('/api/workbook/export-png', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId: this.sessionId,
        options
      })
    })

    if (!response.ok) {
      throw new Error('Failed to export PNG')
    }

    return await response.blob()
  }

  async getCurrentState() {
    const response = await fetch(`/api/workbook/state?sessionId=${this.sessionId}`)
    if (!response.ok) return null
    return await response.json()
  }

  reset() {
    // In dev mode, reset just reloads the session on server
    // but keeps the same sessionId
    this.sessionId = 'dev_session'
    this.isInitialized = true
    console.log('Workbook manager reset (dev mode - session ID preserved)')
  }
}

export default new BrowserWorkbookManager()
