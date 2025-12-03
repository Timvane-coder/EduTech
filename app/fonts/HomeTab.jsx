'use client'

import { useState, useEffect } from 'react'

export default function HomeTab({ workbookState, currentPNG }) {
  const [quickRef, setQuickRef] = useState(null)

  useEffect(() => {
    if (workbookState && workbookState.data && workbookState.headers) {
      generateQuickReference()
    }
  }, [workbookState])

  const generateQuickReference = () => {
    const numRows = workbookState.data.length
    const numCols = workbookState.headers.length
    const lastCol = columnToLetter(numCols - 1)

    const namedColumns = workbookState.headers.map((header, index) => {
      const colLetter = columnToLetter(index)
      return {
        name: header,
        column: colLetter,
        dataRange: `${colLetter}2:${colLetter}${numRows + 1}`,
        fullRange: `${colLetter}1:${colLetter}${numRows + 1}`
      }
    })
    
    setQuickRef({
      dimensions: {
        rows: numRows,
        columns: numCols,
        lastColumn: lastCol,
        lastRow: numRows + 1
      },
      namedColumns
    })
  }

  const columnToLetter = (column) => {
    let temp, letter = ''
    while (column >= 0) {
      temp = column % 26
      letter = String.fromCharCode(temp + 65) + letter
      column = (column - temp) / 26 - 1
    }
    return letter
  }

  // Better validation - check if we have actual data
  if (!workbookState || !workbookState.data || !Array.isArray(workbookState.data)) {
    return (
      <div className="home-tab-wrapper">
        <div className="scrollable-content">
          <div className="empty-state">
            <h3>📊 No Data Loaded</h3>
            <p>Load your business data to see the spreadsheet preview here</p>
            {workbookState && (
              <pre style={{ color: '#666', fontSize: '10px', marginTop: '20px' }}>
                Debug: {JSON.stringify(workbookState, null, 2)}
              </pre>
            )}
          </div>
        </div>
      </div>
    )
  }

  // Safe access with defaults
  const dataLength = workbookState.data?.length || 0;
  const headersLength = workbookState.headers?.length || 0;
  const formulasCount = workbookState.formulas || 0;
  const visualizationsTotal = workbookState.visualizations?.total || 0;

  return (
    <div className="home-tab-wrapper">
      <div className="scrollable-content">
        <div className="tab-header">
          <h3>🏠 Current Spreadsheet State</h3>
          <div className="state-badges">
            <span className="badge">
              {dataLength} Rows
            </span>
            <span className="badge">
              {headersLength} Columns
            </span>
            {formulasCount > 0 && (
              <span className="badge formula">
                {formulasCount} Formulas
              </span>
            )}
            {visualizationsTotal > 0 && (
              <span className="badge viz">
                {visualizationsTotal} Visualizations
              </span>
            )}
          </div>
        </div>

        <div className="content-wrapper">
          <div className="spreadsheet-preview">
            {currentPNG ? (
              <div className="png-container">
                <img src={currentPNG} alt="Current Spreadsheet" />
                <div className="zoom-controls">
                  <button onClick={() => window.open(currentPNG, '_blank')}>
                    🔍 View Full Size
                  </button>
                </div>
              </div>
            ) : (
              <div className="data-table">
                {workbookState.headers && workbookState.data && (
                  <table>
                    <thead>
                      <tr>
                        {workbookState.headers.map((header, i) => (
                          <th key={i}>{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {workbookState.data.slice(0, 10).map((row, i) => (
                        <tr key={i}>
                          {(Array.isArray(row) ? row : Object.values(row)).map((cell, j) => (
                            <td key={j}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
                {dataLength > 10 && (
                  <p className="more-rows">
                    + {dataLength - 10} more rows...
                  </p>
                )}
              </div>
            )}
          </div>

          <div className="quick-actions">
            <h4>Quick Actions</h4>
            <div className="action-grid">
              <button className="action-btn" onClick={() => alert('Format cells feature coming soon!')}>
                📝 Format Cells
              </button>
              <button className="action-btn" onClick={() => alert('Navigate to Formulas tab')}>
                ➕ Add Formula
              </button>
              <button className="action-btn" onClick={() => alert('Navigate to Insert tab')}>
                📊 Insert Chart
              </button>
              <button className="action-btn" onClick={() => alert('Apply styles feature coming soon!')}>
                🎨 Apply Styles
              </button>
            </div>
          </div>

          {/* Review Tab Content Merged Below */}
          <div className="review-section">
            <div className="section-header">
              <h3>📋 Cell References & Quick Guide</h3>
              <p className="subtitle">Use these references when applying formulas</p>
            </div>

            {quickRef && (
              <>
                {/* Dimensions Card */}
                <div className="info-card dimensions">
                  <h4>📐 Worksheet Dimensions</h4>
                  <div className="dimension-grid">
                    <div className="dimension-item">
                      <span className="dim-label">Total Rows:</span>
                      <span className="dim-value">{quickRef.dimensions.rows}</span>
                    </div>
                    <div className="dimension-item">
                      <span className="dim-label">Total Columns:</span>
                      <span className="dim-value">{quickRef.dimensions.columns}</span>
                    </div>
                    <div className="dimension-item">
                      <span className="dim-label">Last Column:</span>
                      <span className="dim-value">{quickRef.dimensions.lastColumn}</span>
                    </div>
                    <div className="dimension-item">
                      <span className="dim-label">Last Row:</span>
                      <span className="dim-value">{quickRef.dimensions.lastRow}</span>
                    </div>
                  </div>
                </div>

                {/* Named Columns Reference */}
                <div className="info-card columns-ref">
                  <h4>📊 Named Columns Reference</h4>
                  <p className="ref-hint">💡 Copy these ranges for use in formulas</p>

                  <div className="columns-table">
                    <div className="table-header">
                      <div className="col">Column Name</div>
                      <div className="col">Letter</div>
                      <div className="col">Data Range</div>
                      <div className="col">Full Range</div>
                      <div className="col">Actions</div>
                    </div>

                    {quickRef.namedColumns.map((col, index) => (
                      <div key={index} className="table-row">
                        <div className="col col-name">{col.name}</div>
                        <div className="col col-letter">{col.column}</div>
                        <div className="col col-range">
                          <code>{col.dataRange}</code>
                          <button
                            className="copy-btn"
                            onClick={() => {
                              navigator.clipboard.writeText(col.dataRange)
                              alert(`Copied: ${col.dataRange}`)
                            }}
                          >
                            📋
                          </button>
                        </div>
                        <div className="col col-full">
                          <code>{col.fullRange}</code>
                          <button
                            className="copy-btn"
                            onClick={() => {
                              navigator.clipboard.writeText(col.fullRange)
                              alert(`Copied: ${col.fullRange}`)
                            }}
                          >
                            📋
                          </button>
                        </div>
                        <div className="col col-actions">
                          <button className="action-btn-small">
                            📊 Chart
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Common Formulas Reference */}
                <div className="info-card formulas-ref">
                  <h4>🧮 Common Formula Patterns</h4>
                  <div className="formula-examples">
                    <div className="formula-ex">
                      <div className="ex-title">Sum a column:</div>
                      <code>=SUM(A2:A10)</code>
                    </div>
                    <div className="formula-ex">
                      <div className="ex-title">Average of range:</div>
                      <code>=AVERAGE(B2:B10)</code>
                    </div>
                    <div className="formula-ex">
                      <div className="ex-title">Max value:</div>
                      <code>=MAX(C2:C10)</code>
                    </div>
                    <div className="formula-ex">
                      <div className="ex-title">Count values:</div>
                      <code>=COUNT(D2:D10)</code>
                    </div>
                    <div className="formula-ex">
                      <div className="ex-title">Conditional sum:</div>
                      <code>=SUMIF(E2:E10,"&gt;100")</code>
                    </div>
                    <div className="formula-ex">
                      <div className="ex-title">Percentage:</div>
                      <code>=(B2/C2)*100</code>
                    </div>
                  </div>
                </div>

                {/* Cell Naming Convention */}
                <div className="info-card naming-convention">
                  <h4>📝 Cell Reference Guide</h4>
                  <div className="guide-grid">
                    <div className="guide-item">
                      <div className="guide-icon">🔤</div>
                      <div className="guide-content">
                        <strong>Single Cell:</strong>
                        <p>A1, B2, C3</p>
                      </div>
                    </div>
                    <div className="guide-item">
                      <div className="guide-icon">📏</div>
                      <div className="guide-content">
                        <strong>Range:</strong>
                        <p>A1:A10, B2:D5</p>
                      </div>
                    </div>
                    <div className="guide-item">
                      <div className="guide-icon">📊</div>
                      <div className="guide-content">
                        <strong>Entire Column:</strong>
                        <p>A:A, B:B</p>
                      </div>
                    </div>
                    <div className="guide-item">
                      <div className="guide-icon">➡️</div>
                      <div className="guide-content">
                        <strong>Entire Row:</strong>
                        <p>1:1, 2:2</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .home-tab-wrapper {
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
          background: rgba(34, 197, 94, 0.5);
          border-radius: 5px;
        }

        .scrollable-content::-webkit-scrollbar-thumb:hover {
          background: rgba(34, 197, 94, 0.7);
        }

        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 400px;
          text-align: center;
          padding: 60px 20px;
        }

        .empty-state h3 {
          color: #3b82f6;
          font-size: 24px;
          margin: 0 0 10px 0;
        }

        .empty-state p {
          color: #9ca3af;
          margin: 0;
        }

        .tab-header {
          margin-bottom: 20px;
        }

        .tab-header h3 {
          color: #22c55e;
          font-size: 20px;
          margin: 0 0 15px 0;
        }

        .state-badges {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .badge {
          padding: 6px 12px;
          background: rgba(59, 130, 246, 0.2);
          border: 1px solid rgba(59, 130, 246, 0.4);
          border-radius: 20px;
          font-size: 12px;
          color: #3b82f6;
          font-weight: bold;
        }

        .badge.formula {
          background: rgba(239, 68, 68, 0.2);
          border-color: rgba(239, 68, 68, 0.4);
          color: #ef4444;
        }

        .badge.viz {
          background: rgba(168, 85, 247, 0.2);
          border-color: rgba(168, 85, 247, 0.4);
          color: #a855f7;
        }

        .content-wrapper {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .spreadsheet-preview {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          padding: 15px;
        }

        .png-container {
          text-align: center;
        }

        .png-container img {
          max-width: 100%;
          height: auto;
          border-radius: 4px;
          border: 1px solid rgba(59, 130, 246, 0.3);
        }

        .zoom-controls {
          margin-top: 10px;
        }

        .zoom-controls button {
          padding: 8px 16px;
          background: rgba(59, 130, 246, 0.2);
          border: 1px solid rgba(59, 130, 246, 0.4);
          border-radius: 6px;
          color: #3b82f6;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 13px;
          font-weight: 500;
        }

        .zoom-controls button:hover {
          background: rgba(59, 130, 246, 0.3);
          transform: scale(1.05);
        }

        .data-table {
          overflow-x: auto;
        }

        .data-table table {
          width: 100%;
          border-collapse: collapse;
          min-width: 600px;
        }

        .data-table th,
        .data-table td {
          padding: 10px;
          border: 1px solid rgba(59, 130, 246, 0.2);
          text-align: left;
          font-size: 13px;
        }

        .data-table th {
          background: rgba(59, 130, 246, 0.2);
          color: #3b82f6;
          font-weight: bold;
          position: sticky;
          top: 0;
          z-index: 1;
        }

        .data-table td {
          color: #e5e7eb;
        }

        .more-rows {
          text-align: center;
          color: #3b82f6;
          font-size: 12px;
          margin: 10px 0 0 0;
          font-style: italic;
        }

        .quick-actions {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          padding: 15px;
        }

        .quick-actions h4 {
          color: #3b82f6;
          font-size: 16px;
          margin: 0 0 15px 0;
        }

        .action-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 10px;
        }

        .action-btn {
          padding: 12px;
          background: rgba(34, 197, 94, 0.1);
          border: 2px solid rgba(34, 197, 94, 0.3);
          border-radius: 8px;
          color: #22c55e;
          font-size: 13px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .action-btn:hover {
          background: rgba(34, 197, 94, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);
        }

        /* Review Section Styles */
        .review-section {
          margin-top: 30px;
          padding-top: 30px;
          border-top: 2px solid rgba(16, 185, 129, 0.3);
        }

        .section-header {
          margin-bottom: 20px;
        }

        .section-header h3 {
          color: #10b981;
          font-size: 20px;
          margin: 0 0 5px 0;
        }

        .subtitle {
          color: #9ca3af;
          font-size: 13px;
          margin: 0;
        }

        .info-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 20px;
        }

        .info-card h4 {
          color: #10b981;
          font-size: 16px;
          margin: 0 0 15px 0;
          border-bottom: 2px solid rgba(16, 185, 129, 0.3);
          padding-bottom: 8px;
        }

        .dimension-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
        }

        .dimension-item {
          padding: 15px;
          background: rgba(16, 185, 129, 0.1);
          border: 2px solid rgba(16, 185, 129, 0.2);
          border-radius: 6px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .dim-label {
          color: #10b981;
          font-size: 13px;
          font-weight: bold;
        }

        .dim-value {
          color: #e5e7eb;
          font-size: 18px;
          font-weight: bold;
        }

        .ref-hint {
          color: #10b981;
          font-size: 12px;
          margin: 0 0 15px 0;
          font-style: italic;
        }

        .columns-table {
          width: 100%;
          overflow-x: auto;
        }

        .table-header,
        .table-row {
          display: grid;
          grid-template-columns: 2fr 1fr 2fr 2fr 1.5fr;
          gap: 10px;
          padding: 10px;
          border-bottom: 1px solid rgba(16, 185, 129, 0.2);
          min-width: 700px;
        }

        .table-header {
          background: rgba(16, 185, 129, 0.2);
          border-radius: 6px 6px 0 0;
          font-weight: bold;
          color: #10b981;
          font-size: 13px;
        }

        .table-row {
          background: rgba(255, 255, 255, 0.02);
          font-size: 12px;
          align-items: center;
        }

        .table-row:hover {
          background: rgba(16, 185, 129, 0.1);
        }

        .col-name {
          color: #e5e7eb;
          font-weight: bold;
        }

        .col-letter {
          color: #3b82f6;
          font-family: 'Courier New', monospace;
          font-weight: bold;
        }

        .col-range,
        .col-full {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        code {
          background: rgba(0, 0, 0, 0.3);
          padding: 4px 8px;
          border-radius: 4px;
          color: #22c55e;
          font-family: 'Courier New', monospace;
          font-size: 11px;
        }

        .copy-btn {
          padding: 4px 8px;
          background: rgba(59, 130, 246, 0.2);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 4px;
          color: #3b82f6;
          cursor: pointer;
          font-size: 12px;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .copy-btn:hover {
          background: rgba(59, 130, 246, 0.3);
          transform: scale(1.1);
        }

        .action-btn-small {
          padding: 6px 12px;
          background: rgba(168, 85, 247, 0.2);
          border: 1px solid rgba(168, 85, 247, 0.3);
          border-radius: 4px;
          color: #a855f7;
          cursor: pointer;
          font-size: 11px;
          transition: all 0.3s ease;
        }

        .action-btn-small:hover {
          background: rgba(168, 85, 247, 0.3);
          transform: translateY(-2px);
        }

        .formula-examples {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 12px;
        }

        .formula-ex {
          padding: 12px;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.2);
          border-radius: 6px;
        }

        .ex-title {
          color: #ef4444;
          font-size: 12px;
          font-weight: bold;
          margin-bottom: 6px;
        }

        .formula-ex code {
          display: block;
          background: rgba(0, 0, 0, 0.4);
          color: #22c55e;
        }

        .guide-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
        }

        .guide-item {
          display: flex;
          gap: 12px;
          padding: 15px;
          background: rgba(59, 130, 246, 0.1);
          border: 2px solid rgba(59, 130, 246, 0.2);
          border-radius: 6px;
        }

        .guide-icon {
          font-size: 32px;
          flex-shrink: 0;
        }

        .guide-content strong {
          color: #3b82f6;
          font-size: 13px;
          display: block;
          margin-bottom: 4px;
        }

        .guide-content p {
          color: #e5e7eb;
          font-size: 12px;
          font-family: 'Courier New', monospace;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .action-grid {
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          }

          .dimension-grid {
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          }

          .formula-examples {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .scrollable-content {
            padding: 15px;
          }

          .tab-header h3 {
            font-size: 18px;
          }

          .badge {
            font-size: 11px;
            padding: 5px 10px;
          }

          .spreadsheet-preview {
            padding: 12px;
          }

          .data-table th,
          .data-table td {
            padding: 6px;
            font-size: 11px;
          }

          .action-grid {
            grid-template-columns: 1fr;
          }

          .action-btn {
            padding: 10px;
            font-size: 12px;
          }

          .info-card {
            padding: 15px;
          }

          .table-header,
          .table-row {
            grid-template-columns: 1fr;
            gap: 8px;
            min-width: auto;
          }

          .col {
            padding: 5px 0;
          }

          .col-range,
          .col-full {
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
          }

          .dimension-grid,
          .formula-examples,
          .guide-grid {
            grid-template-columns: 1fr;
          }

          .guide-icon {
            font-size: 28px;
          }
        }

        @media (max-width: 480px) {
          .state-badges {
            flex-direction: column;
            align-items: flex-start;
          }

          .badge {
            font-size: 10px;
            padding: 4px 8px;
          }

          .dimension-item {
            padding: 12px;
          }

          .dim-label {
            font-size: 12px;
          }

          .dim-value {
            font-size: 16px;
          }

          .formula-ex {
            padding: 10px;
          }

          .ex-title {
            font-size: 11px;
          }
        }
      `}</style>
    </div>
  )
}

