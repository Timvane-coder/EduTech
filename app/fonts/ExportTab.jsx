'use client'

import { useState } from 'react'

export default function ExportTab({ workbookState, onExport }) {
  const [exportType, setExportType] = useState(null)
  const [exportOptions, setExportOptions] = useState({
    includeCharts: false,
    includeAnatomicalDiagrams: false,
    includeCrossSectionDiagrams: false,
    includeStereochemistryDiagrams: false
  })
  const [isExporting, setIsExporting] = useState(false)

  const exportTypes = [
    {
      id: 'png-only',
      title: '📄 PNG - Spreadsheet Only',
      description: 'Export spreadsheet as PNG image without visualizations',
      icon: '📄',
      format: 'PNG'
    },
    {
      id: 'png-viz',
      title: '🎨 PNG - With All Visualizations',
      description: 'Export spreadsheet PNG including all charts and diagrams',
      icon: '🎨',
      format: 'PNG'
    },
    {
      id: 'excel-only',
      title: '📗 Excel - Spreadsheet Only',
      description: 'Export to Excel (.xlsx) without embedded visualizations',
      icon: '📗',
      format: 'XLSX'
    },
    {
      id: 'excel-viz',
      title: '📊 Excel - With All Visualizations',
      description: 'Export to Excel with all charts and diagrams embedded',
      icon: '📊',
      format: 'XLSX'
    },
    {
      id: 'separate-viz',
      title: '🗂️ Separate Visualization Files',
      description: 'Export all charts and diagrams as individual PNG files',
      icon: '🗂️',
      format: 'Multiple PNGs'
    },
    {
      id: 'complete',
      title: '📦 Complete Package',
      description: 'Export everything: PNG, Excel, and all visualizations',
      icon: '📦',
      format: 'All Formats'
    }
  ]

  const handleExportTypeSelect = (type) => {
    setExportType(type)

    // Auto-configure options based on type
    if (type.id === 'png-viz' || type.id === 'excel-viz' || type.id === 'complete') {
      setExportOptions({
        includeCharts: true,
        includeAnatomicalDiagrams: true,
        includeCrossSectionDiagrams: true,
        includeStereochemistryDiagrams: true
      })
    } else if (type.id === 'separate-viz') {
      setExportOptions({
        includeCharts: true,
        includeAnatomicalDiagrams: true,
        includeCrossSectionDiagrams: true,
        includeStereochemistryDiagrams: true
      })
    } else {
      setExportOptions({
        includeCharts: false,
        includeAnatomicalDiagrams: false,
        includeCrossSectionDiagrams: false,
        includeStereochemistryDiagrams: false
      })
    }
  }

  const handleOptionChange = (key, value) => {
    setExportOptions(prev => ({ ...prev, [key]: value }))
  }

  const handleExport = async () => {
    if (!exportType) {
      alert('Please select an export type')
      return
    }

    setIsExporting(true)

    try {
      await onExport(exportType.id, exportOptions)
      alert(`✅ Export completed successfully!`)
    } catch (error) {
      alert(`❌ Export failed: ${error.message}`)
    } finally {
      setIsExporting(false)
    }
  }

  const getVisualizationCount = () => {
    if (!workbookState) return { total: 0, charts: 0, anatomical: 0, crossSection: 0, stereochemistry: 0 }
    return {
      total: workbookState.visualizations?.total || 0,
      charts: workbookState.visualizations?.charts || 0,
      anatomical: workbookState.visualizations?.anatomical || 0,
      crossSection: workbookState.visualizations?.crossSection || 0,
      stereochemistry: workbookState.visualizations?.stereochemistry || 0
    }
  }

  const vizCounts = getVisualizationCount()

  return (
    <div className="export-tab-wrapper">
      <div className="scrollable-content">
        <div className="tab-header">
          <h3>💾 Export Workbook</h3>
          <p className="subtitle">Choose export format and customize options</p>
        </div>

        <div className="content-wrapper">
          {/* Export Types Grid */}
          <div className="export-types-grid">
            {exportTypes.map((type) => (
              <div
                key={type.id}
                className={`export-type-card ${exportType?.id === type.id ? 'active' : ''}`}
                onClick={() => handleExportTypeSelect(type)}
              >
                <div className="type-icon">{type.icon}</div>
                <h4 className="type-title">{type.title}</h4>
                <p className="type-desc">{type.description}</p>
                <div className="type-format">{type.format}</div>
              </div>
            ))}
          </div>

          {/* Export Configuration */}
          {exportType && (
            <div className="export-config">
              <h4>⚙️ Export Configuration</h4>

              <div className="config-section">
                <div className="config-info">
                  <div className="info-icon">{exportType.icon}</div>
                  <div>
                    <div className="info-title">{exportType.title}</div>
                    <div className="info-desc">{exportType.description}</div>
                  </div>
                </div>

                {(exportType.id === 'png-viz' || exportType.id === 'excel-viz' || exportType.id === 'separate-viz' || exportType.id === 'complete') && (
                  <div className="visualization-options">
                    <h5>📊 Include Visualizations:</h5>

                    <label className="option-checkbox">
                      <input
                        type="checkbox"
                        checked={exportOptions.includeCharts}
                        onChange={(e) => handleOptionChange('includeCharts', e.target.checked)}
                      />
                      <span className="option-label">
                        📊 Charts ({vizCounts.charts})
                      </span>
                    </label>

                    <label className="option-checkbox">
                      <input
                        type="checkbox"
                        checked={exportOptions.includeAnatomicalDiagrams}
                        onChange={(e) => handleOptionChange('includeAnatomicalDiagrams', e.target.checked)}
                      />
                      <span className="option-label">
                        🫀 Anatomical Diagrams ({vizCounts.anatomical})
                      </span>
                    </label>

                    <label className="option-checkbox">
                      <input
                        type="checkbox"
                        checked={exportOptions.includeCrossSectionDiagrams}
                        onChange={(e) => handleOptionChange('includeCrossSectionDiagrams', e.target.checked)}
                      />
                      <span className="option-label">
                        🔬 Cross-Section Diagrams ({vizCounts.crossSection})
                      </span>
                    </label>

                    <label className="option-checkbox">
                      <input
                        type="checkbox"
                        checked={exportOptions.includeStereochemistryDiagrams}
                        onChange={(e) => handleOptionChange('includeStereochemistryDiagrams', e.target.checked)}
                      />
                      <span className="option-label">
                        🧪 Molecular Structures ({vizCounts.stereochemistry})
                      </span>
                    </label>

                    {vizCounts.total === 0 && (
                      <div className="warning-message">
                        ⚠️ No visualizations created yet. Add charts or diagrams in the Insert tab.
                      </div>
                    )}
                  </div>
                )}

                <button
                  className="export-btn"
                  onClick={handleExport}
                  disabled={isExporting}
                >
                  {isExporting ? '⏳ Exporting...' : `✅ Export ${exportType.format}`}
                </button>
              </div>

              {/* Export Summary */}
              <div className="export-summary">
                <h5>📋 Export Summary</h5>
                <div className="summary-grid">
                  <div className="summary-item">
                    <span className="summary-label">Data Rows:</span>
                    <span className="summary-value">{workbookState?.data.length || 0}</span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-label">Columns:</span>
                    <span className="summary-value">{workbookState?.headers.length || 0}</span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-label">Formulas:</span>
                    <span className="summary-value">{workbookState?.formulas || 0}</span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-label">Charts:</span>
                    <span className="summary-value">{vizCounts.charts}</span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-label">Anatomical:</span>
                    <span className="summary-value">{vizCounts.anatomical}</span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-label">Cross-Section:</span>
                    <span className="summary-value">{vizCounts.crossSection}</span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-label">Molecules:</span>
                    <span className="summary-value">{vizCounts.stereochemistry}</span>
                  </div>
                  <div className="summary-item total">
                    <span className="summary-label">Total Visualizations:</span>
                    <span className="summary-value">{vizCounts.total}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Export Tips */}
          <div className="export-tips">
            <h4>💡 Export Tips</h4>
            <ul>
              <li><strong>PNG exports</strong> are great for presentations and quick sharing</li>
              <li><strong>Excel exports</strong> preserve formulas and allow further editing</li>
              <li><strong>Complete Package</strong> gives you all formats for maximum flexibility</li>
              <li><strong>Separate files</strong> make it easy to use individual visualizations</li>
              <li>Large workbooks with many visualizations may take longer to export</li>
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .export-tab-wrapper {
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .scrollable-content {
          flex: 1;
          overflow-y: auto;
          overflow-x: hidden;
          padding: 20px;
        }

        .scrollable-content::-webkit-scrollbar {
          width: 10px;
        }

        .scrollable-content::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
        }

        .scrollable-content::-webkit-scrollbar-thumb {
          background: rgba(20, 184, 166, 0.5);
          border-radius: 5px;
        }

        .scrollable-content::-webkit-scrollbar-thumb:hover {
          background: rgba(20, 184, 166, 0.7);
        }

        .tab-header {
          margin-bottom: 25px;
        }

        .tab-header h3 {
          color: #14b8a6;
          font-size: 20px;
          margin: 0 0 5px 0;
        }

        .subtitle {
          color: #9ca3af;
          font-size: 13px;
          margin: 0;
        }

        .content-wrapper {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .export-types-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 15px;
        }

        .export-type-card {
          padding: 20px;
          background: rgba(20, 184, 166, 0.1);
          border: 2px solid rgba(20, 184, 166, 0.2);
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .export-type-card:hover {
          background: rgba(20, 184, 166, 0.2);
          transform: translateY(-4px);
          box-shadow: 0 6px 16px rgba(20, 184, 166, 0.3);
        }

        .export-type-card.active {
          background: rgba(20, 184, 166, 0.3);
          border-color: #14b8a6;
          box-shadow: 0 0 20px rgba(20, 184, 166, 0.4);
        }

        .type-icon {
          font-size: 48px;
          margin-bottom: 12px;
        }

        .type-title {
          color: #14b8a6;
          font-size: 16px;
          font-weight: bold;
          margin: 0 0 8px 0;
        }

        .type-desc {
          color: #9ca3af;
          font-size: 12px;
          line-height: 1.5;
          margin: 0 0 12px 0;
        }

        .type-format {
          padding: 6px 12px;
          background: rgba(59, 130, 246, 0.2);
          border: 1px solid rgba(59, 130, 246, 0.4);
          border-radius: 12px;
          color: #3b82f6;
          font-size: 11px;
          font-weight: bold;
          display: inline-block;
        }

        .export-config {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          padding: 20px;
        }

        .export-config h4 {
          color: #14b8a6;
          font-size: 18px;
          margin: 0 0 20px 0;
          border-bottom: 2px solid rgba(20, 184, 166, 0.3);
          padding-bottom: 10px;
        }

        .config-section {
          margin-bottom: 20px;
        }

        .config-info {
          display: flex;
          gap: 15px;
          padding: 15px;
          background: rgba(20, 184, 166, 0.1);
          border: 1px solid rgba(20, 184, 166, 0.3);
          border-radius: 8px;
          margin-bottom: 20px;
        }

        .info-icon {
          font-size: 40px;
          flex-shrink: 0;
        }

        .info-title {
          color: #14b8a6;
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 4px;
        }

        .info-desc {
          color: #9ca3af;
          font-size: 13px;
        }

        .visualization-options {
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 8px;
          padding: 15px;
          margin-bottom: 20px;
        }

        .visualization-options h5 {
          color: #3b82f6;
          font-size: 14px;
          margin: 0 0 12px 0;
          font-weight: bold;
        }

        .option-checkbox {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px;
          cursor: pointer;
          border-radius: 6px;
          transition: background 0.2s ease;
          margin-bottom: 4px;
        }

        .option-checkbox:hover {
          background: rgba(59, 130, 246, 0.1);
        }

        .option-checkbox input[type="checkbox"] {
          width: 20px;
          height: 20px;
          cursor: pointer;
          flex-shrink: 0;
        }

        .option-label {
          color: #e5e7eb;
          font-size: 14px;
        }

        .warning-message {
          padding: 12px;
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.3);
          border-radius: 6px;
          color: #f59e0b;
          font-size: 13px;
          margin-top: 12px;
        }

        .export-btn {
          width: 100%;
          padding: 16px;
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.3), rgba(22, 163, 74, 0.3));
          border: 2px solid rgba(34, 197, 94, 0.5);
          border-radius: 10px;
          color: #22c55e;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .export-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.5), rgba(22, 163, 74, 0.5));
          transform: scale(1.02);
          box-shadow: 0 0 25px rgba(34, 197, 94, 0.5);
        }

        .export-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .export-summary {
          background: rgba(168, 85, 247, 0.1);
          border: 1px solid rgba(168, 85, 247, 0.3);
          border-radius: 8px;
          padding: 15px;
        }

        .export-summary h5 {
          color: #a855f7;
          font-size: 14px;
          margin: 0 0 12px 0;
          font-weight: bold;
        }

        .summary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 10px;
        }

        .summary-item {
          padding: 10px;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 6px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .summary-item.total {
          grid-column: 1 / -1;
          background: rgba(168, 85, 247, 0.2);
          border: 1px solid rgba(168, 85, 247, 0.4);
        }

        .summary-label {
          color: #9ca3af;
          font-size: 12px;
        }

        .summary-value {
          color: #e5e7eb;
          font-size: 16px;
          font-weight: bold;
        }

        .summary-item.total .summary-label {
          color: #a855f7;
          font-weight: bold;
        }

        .summary-item.total .summary-value {
          color: #a855f7;
          font-size: 20px;
        }

        .export-tips {
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: 8px;
          padding: 20px;
        }

        .export-tips h4 {
          color: #10b981;
          font-size: 16px;
          margin: 0 0 12px 0;
        }

        .export-tips ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .export-tips li {
          color: #e5e7eb;
          font-size: 13px;
          margin-bottom: 8px;
          padding-left: 20px;
          position: relative;
          line-height: 1.6;
        }

        .export-tips li:before {
          content: "•";
          color: #10b981;
          font-size: 18px;
          position: absolute;
          left: 0;
        }

        .export-tips li strong {
          color: #10b981;
        }

        @media (max-width: 1024px) {
          .export-types-grid {
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          }

          .summary-grid {
            grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .scrollable-content {
            padding: 15px;
          }

          .tab-header h3 {
            font-size: 18px;
          }

          .export-types-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .type-icon {
            font-size: 36px;
          }

          .type-title {
            font-size: 14px;
          }

          .type-desc {
            font-size: 11px;
          }

          .summary-grid {
            grid-template-columns: 1fr;
          }

          .summary-item.total {
            grid-column: 1;
          }

          .config-info {
            flex-direction: column;
            text-align: center;
          }

          .info-icon {
            font-size: 36px;
          }
        }

        @media (max-width: 480px) {
          .export-config {
            padding: 15px;
          }

          .option-checkbox {
            padding: 8px;
          }

          .option-label {
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  )
}
