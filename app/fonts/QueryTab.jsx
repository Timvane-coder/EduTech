'use client'

import { useState } from 'react'

export default function QueryTab({ workbookState }) {
  const [queryType, setQueryType] = useState('simple')
  const [queryBuilder, setQueryBuilder] = useState({
    columns: [],
    filters: [],
    sort: { column: '', direction: 'asc' },
    limit: 10
  })
  const [queryResults, setQueryResults] = useState(null)

  const queryTypes = [
    { id: 'simple', label: '🔍 Simple Query', icon: '🔍' },
    { id: 'advanced', label: '⚡ Advanced', icon: '⚡' },
    { id: 'sql', label: '💻 SQL-Like', icon: '💻' }
  ]

  const handleAddFilter = () => {
    setQueryBuilder(prev => ({
      ...prev,
      filters: [...prev.filters, { column: '', operator: '=', value: '' }]
    }))
  }

  const handleRemoveFilter = (index) => {
    setQueryBuilder(prev => ({
      ...prev,
      filters: prev.filters.filter((_, i) => i !== index)
    }))
  }

  const handleExecuteQuery = () => {
    // Execute query logic
    alert('Query executed! (Implementation required)')
  }

  return (
    <div className="query-tab-wrapper">
      <div className="tab-header">
        <h3>🔎 Data Query Builder</h3>
        <p className="subtitle">Filter, sort, and analyze your data with powerful queries</p>
      </div>

      {/* Query Type Selector */}
      <div className="query-types">
        {queryTypes.map((type) => (
          <button
            key={type.id}
            className={`query-type-btn ${queryType === type.id ? 'active' : ''}`}
            onClick={() => setQueryType(type.id)}
          >
            <span className="type-icon">{type.icon}</span>
            <span className="type-label">{type.label}</span>
          </button>
        ))}
      </div>

      <div className="content-wrapper">
        {workbookState ? (
          <div className="query-builder">
            {queryType === 'simple' && (
              <div className="simple-query">
                <h4>🔍 Simple Query Builder</h4>

                {/* Column Selection */}
                <div className="query-section">
                  <h5>Select Columns:</h5>
                  <div className="column-checkboxes">
                    {workbookState.headers.map((header, index) => (
                      <label key={index} className="column-checkbox">
                        <input
                          type="checkbox"
                          checked={queryBuilder.columns.includes(header)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setQueryBuilder(prev => ({
                                ...prev,
                                columns: [...prev.columns, header]
                              }))
                            } else {
                              setQueryBuilder(prev => ({
                                ...prev,
                                columns: prev.columns.filter(c => c !== header)
                              }))
                            }
                          }}
                        />
                        <span>{header}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Filters */}
                <div className="query-section">
                  <div className="section-header">
                    <h5>Filters:</h5>
                    <button className="add-filter-btn" onClick={handleAddFilter}>
                      ➕ Add Filter
                    </button>
                  </div>

                  {queryBuilder.filters.map((filter, index) => (
                    <div key={index} className="filter-row">
                      <select className="filter-column">
                        <option value="">Select Column</option>
                        {workbookState.headers.map((header, i) => (
                          <option key={i} value={header}>{header}</option>
                        ))}
                      </select>

                      <select className="filter-operator">
                        <option value="=">=</option>
                        <option value="!=">!=</option>
                        <option value=">">&gt;</option>
                        <option value="<">&lt;</option>
                        <option value=">=">&gt;=</option>
                        <option value="<=">&lt;=</option>
                        <option value="contains">Contains</option>
                      </select>

                      <input
                        type="text"
                        className="filter-value"
                        placeholder="Value"
                      />

                      <button
                        className="remove-filter-btn"
                        onClick={() => handleRemoveFilter(index)}
                      >
                        ❌
                      </button>
                    </div>
                  ))}

                  {queryBuilder.filters.length === 0 && (
                    <div className="no-filters">
                      <p>No filters added. Click "Add Filter" to filter your data.</p>
                    </div>
                  )}
                </div>

                {/* Sort */}
                <div className="query-section">
                  <h5>Sort By:</h5>
                  <div className="sort-controls">
                    <select className="sort-column">
                      <option value="">None</option>
                      {workbookState.headers.map((header, i) => (
                        <option key={i} value={header}>{header}</option>
                      ))}
                    </select>

                    <select className="sort-direction">
                      <option value="asc">Ascending ↑</option>
                      <option value="desc">Descending ↓</option>
                    </select>
                  </div>
                </div>

                {/* Limit */}
                <div className="query-section">
                  <h5>Result Limit:</h5>
                  <input
                    type="number"
                    className="limit-input"
                    value={queryBuilder.limit}
                    onChange={(e) => setQueryBuilder(prev => ({
                      ...prev,
                      limit: parseInt(e.target.value)
                    }))}
                    min="1"
                    max="1000"
                  />
                </div>

                <button className="execute-query-btn" onClick={handleExecuteQuery}>
                  ▶️ Execute Query
                </button>
              </div>
            )}

            {queryType === 'advanced' && (
              <div className="advanced-query">
                <h4>⚡ Advanced Query</h4>
                <p className="coming-soon">Advanced query features coming soon!</p>
                <div className="feature-list">
                  <div className="feature-item">✅ Aggregations (SUM, AVG, COUNT)</div>
                  <div className="feature-item">✅ GROUP BY operations</div>
                  <div className="feature-item">✅ JOIN multiple tables</div>
                  <div className="feature-item">✅ Calculated fields</div>
                </div>
              </div>
            )}

            {queryType === 'sql' && (
              <div className="sql-query">
                <h4>💻 SQL-Like Query</h4>
                <textarea
                  className="sql-editor"
                  placeholder="SELECT * FROM workbook WHERE column > value ORDER BY column ASC LIMIT 10"
                  rows={8}
                />
                <button className="execute-query-btn" onClick={handleExecuteQuery}>
                  ▶️ Execute SQL Query
                </button>

                <div className="sql-help">
                  <h5>💡 SQL Syntax Help:</h5>
                  <code>SELECT column1, column2 FROM workbook</code>
                  <code>WHERE column &gt; value</code>
                  <code>ORDER BY column ASC|DESC</code>
                  <code>LIMIT number</code>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">🔍</div>
            <h3>No Data Loaded</h3>
            <p>Load data to start querying</p>
          </div>
        )}
      </div>

      <style jsx>{`
        .query-tab-wrapper {
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 20px;
          color: #e5e7eb;
          overflow: hidden;
        }

        .tab-header {
          flex-shrink: 0;
          margin-bottom: 20px;
        }

        .tab-header h3 {
          color: #06b6d4;
          font-size: 20px;
          margin: 0 0 5px 0;
        }

        .subtitle {
          color: #9ca3af;
          font-size: 13px;
          margin: 0;
        }

        .query-types {
          flex-shrink: 0;
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .query-type-btn {
          padding: 10px 20px;
          background: rgba(6, 182, 212, 0.1);
          border: 2px solid rgba(6, 182, 212, 0.2);
          border-radius: 8px;
          color: #06b6d4;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .query-type-btn:hover {
          background: rgba(6, 182, 212, 0.2);
          transform: translateY(-2px);
        }

        .query-type-btn.active {
          background: rgba(6, 182, 212, 0.3);
          border-color: #06b6d4;
          box-shadow: 0 0 15px rgba(6, 182, 212, 0.4);
        }

        .type-icon {
          font-size: 18px;
        }

        .type-label {
          font-weight: bold;
          font-size: 14px;
        }

        .content-wrapper {
          flex: 1;
          overflow-y: auto;
          overflow-x: hidden;
          min-height: 0;
        }

        .content-wrapper::-webkit-scrollbar {
          width: 8px;
        }

        .content-wrapper::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 4px;
        }

        .content-wrapper::-webkit-scrollbar-thumb {
          background: rgba(6, 182, 212, 0.5);
          border-radius: 4px;
        }

        .content-wrapper::-webkit-scrollbar-thumb:hover {
          background: rgba(6, 182, 212, 0.7);
        }

        .query-builder {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          padding: 25px;
          margin-bottom: 20px;
        }

        .simple-query h4,
        .advanced-query h4,
        .sql-query h4 {
          color: #06b6d4;
          font-size: 18px;
          margin: 0 0 20px 0;
        }

        .query-section {
          margin-bottom: 25px;
        }

        .query-section h5 {
          color: #06b6d4;
          font-size: 14px;
          margin: 0 0 12px 0;
          font-weight: bold;
        }

        .column-checkboxes {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 10px;
        }

        .column-checkbox {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          background: rgba(6, 182, 212, 0.1);
          border: 1px solid rgba(6, 182, 212, 0.2);
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .column-checkbox:hover {
          background: rgba(6, 182, 212, 0.2);
        }

        .column-checkbox input[type="checkbox"] {
          width: 18px;
          height: 18px;
          cursor: pointer;
          flex-shrink: 0;
        }

        .column-checkbox span {
          color: #e5e7eb;
          font-size: 13px;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .add-filter-btn {
          padding: 6px 12px;
          background: rgba(34, 197, 94, 0.2);
          border: 1px solid rgba(34, 197, 94, 0.4);
          border-radius: 6px;
          color: #22c55e;
          font-size: 12px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .add-filter-btn:hover {
          background: rgba(34, 197, 94, 0.3);
          transform: scale(1.05);
        }

        .filter-row {
          display: grid;
          grid-template-columns: 2fr 1fr 2fr auto;
          gap: 10px;
          margin-bottom: 10px;
        }

        .filter-column,
        .filter-operator,
        .sort-column,
        .sort-direction {
          padding: 8px 12px;
          background: rgba(0, 0, 0, 0.3);
          border: 2px solid rgba(6, 182, 212, 0.3);
          border-radius: 6px;
          color: #e5e7eb;
          font-size: 13px;
        }

        .filter-column:focus,
        .filter-operator:focus,
        .filter-value:focus,
        .sort-column:focus,
        .sort-direction:focus,
        .limit-input:focus {
          outline: none;
          border-color: #06b6d4;
          box-shadow: 0 0 10px rgba(6, 182, 212, 0.3);
        }

        .filter-value,
        .limit-input {
          padding: 8px 12px;
          background: rgba(0, 0, 0, 0.3);
          border: 2px solid rgba(6, 182, 212, 0.3);
          border-radius: 6px;
          color: #e5e7eb;
          font-size: 13px;
        }

        .remove-filter-btn {
          padding: 8px 12px;
          background: rgba(239, 68, 68, 0.2);
          border: 1px solid rgba(239, 68, 68, 0.4);
          border-radius: 6px;
          color: #ef4444;
          cursor: pointer;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .remove-filter-btn:hover {
          background: rgba(239, 68, 68, 0.3);
          transform: scale(1.1);
        }

        .no-filters {
          padding: 20px;
          background: rgba(6, 182, 212, 0.05);
          border: 1px dashed rgba(6, 182, 212, 0.3);
          border-radius: 6px;
          text-align: center;
          color: #9ca3af;
        }

        .no-filters p {
          margin: 0;
        }

        .sort-controls {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 10px;
        }

        .limit-input {
          width: 150px;
        }

        .execute-query-btn {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.3), rgba(22, 163, 74, 0.3));
          border: 2px solid rgba(34, 197, 94, 0.5);
          border-radius: 8px;
          color: #22c55e;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 20px;
        }

        .execute-query-btn:hover {
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.5), rgba(22, 163, 74, 0.5));
          transform: scale(1.02);
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.5);
        }

        .coming-soon {
          color: #9ca3af;
          font-size: 14px;
          margin: 0 0 20px 0;
        }

        .feature-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .feature-item {
          padding: 12px;
          background: rgba(6, 182, 212, 0.1);
          border-left: 4px solid #06b6d4;
          border-radius: 6px;
          color: #e5e7eb;
          font-size: 13px;
        }

        .sql-editor {
          width: 100%;
          padding: 15px;
          background: rgba(0, 0, 0, 0.5);
          border: 2px solid rgba(6, 182, 212, 0.3);
          border-radius: 8px;
          color: #22c55e;
          font-family: 'Courier New', monospace;
          font-size: 13px;
          resize: vertical;
          box-sizing: border-box;
        }

        .sql-editor:focus {
          outline: none;
          border-color: #06b6d4;
          box-shadow: 0 0 15px rgba(6, 182, 212, 0.3);
        }

        .sql-help {
          margin-top: 20px;
          padding: 15px;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: 8px;
        }

        .sql-help h5 {
          color: #10b981;
          font-size: 14px;
          margin: 0 0 10px 0;
        }

        .sql-help code {
          display: block;
          padding: 8px 12px;
          background: rgba(0, 0, 0, 0.4);
          border-radius: 4px;
          color: #22c55e;
          font-family: 'Courier New', monospace;
          font-size: 12px;
          margin-bottom: 8px;
        }

        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 400px;
          text-align: center;
        }

        .empty-icon {
          font-size: 80px;
          margin-bottom: 20px;
          opacity: 0.5;
        }

        .empty-state h3 {
          color: #06b6d4;
          font-size: 24px;
          margin: 0 0 10px 0;
        }

        .empty-state p {
          color: #9ca3af;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .column-checkboxes {
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          }

          .filter-row {
            grid-template-columns: 1fr 100px 1fr auto;
          }
        }

        @media (max-width: 768px) {
          .query-tab-wrapper {
            padding: 15px;
          }

          .tab-header h3 {
            font-size: 18px;
          }

          .query-types {
            gap: 8px;
          }

          .query-type-btn {
            padding: 8px 14px;
            font-size: 12px;
          }

          .type-icon {
            font-size: 16px;
          }

          .type-label {
            font-size: 12px;
          }

          .query-builder {
            padding: 20px;
          }

          .column-checkboxes {
            grid-template-columns: 1fr;
          }

          .filter-row {
            grid-template-columns: 1fr;
          }

          .sort-controls {
            grid-template-columns: 1fr;
          }

          .limit-input {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .query-builder {
            padding: 15px;
          }

          .column-checkbox {
            padding: 6px 10px;
          }

          .filter-column,
          .filter-operator,
          .filter-value,
          .sort-column,
          .sort-direction,
          .limit-input {
            padding: 6px 10px;
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  )
}
