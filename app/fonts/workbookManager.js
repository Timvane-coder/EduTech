// lib/workbookManager.js
class BrowserWorkbookManager {
  constructor() {
    this.sessionId = null;
    this.isInitialized = false;
  }

  async initialize() {
    if (this.isInitialized && this.sessionId) {
      console.log('Already initialized with session:', this.sessionId);
      return;
    }

    console.log('Creating new workbook session...');

    // Create workbook session on server
    const response = await fetch('/api/workbook/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sheetName: 'Interactive Session',
        author: 'Web User',
        theme: 'professional'
      })
    });

    if (!response.ok) {
      throw new Error('Failed to create workbook session');
    }

    const data = await response.json();
    this.sessionId = data.sessionId;
    this.isInitialized = true;

    console.log('✅ Workbook session created:', this.sessionId);
  }

  async loadData(data) {
    await this.initialize();

    console.log('Loading data with session:', this.sessionId);

    const response = await fetch('/api/workbook/load-data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId: this.sessionId,
        data
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to load data');
    }

    const result = await response.json();
    console.log('✅ Data loaded successfully');
    return result;
  }

  async applyFormula(targetCell, formulaKey, params) {
    if (!this.isInitialized) {
      throw new Error('Workbook not initialized');
    }

    console.log('Applying formula with session:', this.sessionId);

    const response = await fetch('/api/workbook/formulas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId: this.sessionId,
        targetCell,
        formulaKey,
        params
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to apply formula');
    }

    return await response.json();
  }

  async exportToPNG(options = {}) {
    if (!this.isInitialized) {
      throw new Error('Workbook not initialized');
    }

    console.log('Exporting PNG with session:', this.sessionId);

    const response = await fetch('/api/workbook/export-png', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId: this.sessionId,
        options
      })
    });

    if (!response.ok) {
      throw new Error('Failed to export PNG');
    }

    const blob = await response.blob();
    return blob;
  }

  async getCurrentState() {
    if (!this.isInitialized) return null;

    const response = await fetch(`/api/workbook/state?sessionId=${this.sessionId}`);

    if (!response.ok) {
      return null;
    }

    return await response.json();
  }

  reset() {
    console.log('Resetting workbook manager');
    this.sessionId = null;
    this.isInitialized = false;
  }
}

export default new BrowserWorkbookManager();
