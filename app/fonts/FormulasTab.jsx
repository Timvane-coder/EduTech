'use client'

import { useState, useEffect } from 'react'

export default function FormulasTab({ onApplyFormula }) {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [formulas, setFormulas] = useState([])
  const [selectedFormula, setSelectedFormula] = useState(null)
  const [targetCell, setTargetCell] = useState('')
  const [params, setParams] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    loadFormulas()
  }, [])

  const loadFormulas = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/workbook/formulas/list')

      if (!response.ok) {
        throw new Error('Failed to load formulas')
      }

      const data = await response.json()

      console.log('Loaded formulas:', data)

      if (data.categories) {
        setCategories(data.categories)
      }
    } catch (error) {
      console.error('Failed to load formulas:', error)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const loadCategoryFormulas = async (category) => {
    setSelectedCategory(category)

    try {
      const response = await fetch(`/api/workbook/formulas/category?name=${encodeURIComponent(category)}`)

      if (!response.ok) {
        throw new Error('Failed to load category formulas')
      }

      const data = await response.json()

      console.log('Loaded category formulas:', data)

      if (data.formulas) {
        setFormulas(Object.entries(data.formulas))
      }
    } catch (error) {
      console.error('Failed to load category formulas:', error)
      setError(error.message)
    }
  }

  const handleFormulaSelect = (formulaKey, formula) => {
    setSelectedFormula({ key: formulaKey, ...formula })
    setParams(new Array(formula.params.length).fill(''))
  }

  const handleApply = async () => {
    if (!selectedFormula || !targetCell) {
      alert('Please select a formula and enter target cell')
      return
    }

    try {
      await onApplyFormula(targetCell, selectedFormula.key, params)
      alert('Formula applied successfully!')
      setSelectedFormula(null)
      setTargetCell('')
      setParams([])
    } catch (error) {
      alert('Failed to apply formula: ' + error.message)
    }
  }

  return (
    <div className="formulas-tab-wrapper">
      <div className="scrollable-content">
        <div className="tab-header">
          <h3>🧮 Excel Formulas Library</h3>
          <p className="subtitle">Select a category to explore available formulas</p>
        </div>

        {loading && (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Loading formulas...</p>
          </div>
        )}

        {error && (
          <div className="error-state">
            <p>❌ Error: {error}</p>
            <button onClick={loadFormulas}>Retry</button>
          </div>
        )}

        {!loading && !error && (
          <div className="formulas-layout">
            {/* Categories Sidebar */}
            <div className="categories-panel">
              <h4>Categories ({categories.length})</h4>
              <div className="category-list">
                {categories.length > 0 ? (
                  categories.map((category) => (
                    <button
                      key={category}
                      className={`category-item ${selectedCategory === category ? 'active' : ''}`}
                      onClick={() => loadCategoryFormulas(category)}
                    >
                      {category}
                    </button>
                  ))
                ) : (
                  <p className="no-data">No categories available</p>
                )}
              </div>
            </div>

            {/* Formulas List */}
            <div className="formulas-panel">
              {selectedCategory ? (
                <>
                  <h4>{selectedCategory} Formulas ({formulas.length})</h4>
                  <div className="formula-list">
                    {formulas.length > 0 ? (
                      formulas.map(([key, formula]) => (
                        <div
                          key={key}
                          className={`formula-item ${selectedFormula?.key === key ? 'active' : ''}`}
                          onClick={() => handleFormulaSelect(key, formula)}
                        >
                          <div className="formula-name">{formula.name}</div>
                          <div className="formula-desc">{formula.description}</div>
                          <div className="formula-example">
                            <strong>Example:</strong> {formula.example}
                          </div>
                          <div className="formula-excel">
                            <strong>Excel:</strong> <code>{formula.excelFormula}</code>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="empty-state">
                        <p>No formulas found in this category</p>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="empty-state">
                  <p>👈 Select a category to see available formulas</p>
                </div>
              )}
            </div>

            {/* Formula Application Panel */}
            <div className="apply-panel">
              {selectedFormula ? (
                <>
                  <h4>Apply: {selectedFormula.name}</h4>
                  <div className="apply-content">
                    <div className="form-group">
                      <label>Target Cell/Range:</label>
                      <input
                        type="text"
                        value={targetCell}
                        onChange={(e) => setTargetCell(e.target.value)}
                        placeholder="e.g., D2 or D2:D8"
                      />
                    </div>

                    {selectedFormula.params.map((param, index) => (
                      <div key={index} className="form-group">
                        <label>{selectedFormula.paramNames?.[index] || param}:</label>
                        <input
                          type="text"
                          value={params[index] || ''}
                          onChange={(e) => {
                            const newParams = [...params]
                            newParams[index] = e.target.value
                            setParams(newParams)
                          }}
                          placeholder={`Enter ${param}`}
                        />
                      </div>
                    ))}

                    <button className="apply-btn" onClick={handleApply}>
                      ✅ Apply Formula
                    </button>

                    {selectedFormula.tips && selectedFormula.tips.length > 0 && (
                      <div className="formula-tips">
                        <h5>💡 Tips:</h5>
                        <ul>
                          {selectedFormula.tips.map((tip, i) => (
                            <li key={i}>{tip}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="empty-state">
                  <p>Select a formula to configure and apply it</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .formulas-tab-wrapper {
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
          background: rgba(239, 68, 68, 0.5);
          border-radius: 5px;
        }

        .scrollable-content::-webkit-scrollbar-thumb:hover {
          background: rgba(239, 68, 68, 0.7);
        }

        .tab-header {
          margin-bottom: 20px;
        }

        .tab-header h3 {
          color: #ef4444;
          font-size: 20px;
          margin: 0 0 5px 0;
        }

        .subtitle {
          color: #9ca3af;
          font-size: 13px;
          margin: 0;
        }

        .loading-state,
        .error-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 400px;
          color: #9ca3af;
        }

        .spinner {
          width: 50px;
          height: 50px;
          border: 4px solid rgba(239, 68, 68, 0.3);
          border-top-color: #ef4444;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 20px;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .error-state button {
          margin-top: 15px;
          padding: 10px 20px;
          background: rgba(239, 68, 68, 0.2);
          border: 2px solid #ef4444;
          border-radius: 6px;
          color: #ef4444;
          cursor: pointer;
        }

        .no-data {
          color: #9ca3af;
          font-size: 13px;
          text-align: center;
          padding: 20px;
        }

        .formulas-layout {
          display: grid;
          grid-template-columns: 200px 1fr 320px;
          gap: 15px;
          min-height: 600px;
        }

        .categories-panel,
        .formulas-panel,
        .apply-panel {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          min-height: 0;
        }

        .categories-panel h4,
        .formulas-panel h4,
        .apply-panel h4 {
          color: #ef4444;
          font-size: 16px;
          margin: 0;
          padding: 15px;
          border-bottom: 2px solid rgba(239, 68, 68, 0.3);
          background: rgba(0, 0, 0, 0.3);
          flex-shrink: 0;
        }

        .category-list {
          padding: 15px;
          overflow-y: auto;
          overflow-x: hidden;
          flex: 1;
          min-height: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .category-list::-webkit-scrollbar,
        .formula-list::-webkit-scrollbar,
        .apply-content::-webkit-scrollbar {
          width: 8px;
        }

        .category-list::-webkit-scrollbar-track,
        .formula-list::-webkit-scrollbar-track,
        .apply-content::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 4px;
        }

        .category-list::-webkit-scrollbar-thumb,
        .formula-list::-webkit-scrollbar-thumb,
        .apply-content::-webkit-scrollbar-thumb {
          background: rgba(239, 68, 68, 0.5);
          border-radius: 4px;
        }

        .category-list::-webkit-scrollbar-thumb:hover,
        .formula-list::-webkit-scrollbar-thumb:hover,
        .apply-content::-webkit-scrollbar-thumb:hover {
          background: rgba(239, 68, 68, 0.7);
        }

        .category-item {
          padding: 10px;
          background: rgba(239, 68, 68, 0.1);
          border: 2px solid rgba(239, 68, 68, 0.2);
          border-radius: 6px;
          color: #ef4444;
          text-align: left;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 13px;
          flex-shrink: 0;
        }

        .category-item:hover {
          background: rgba(239, 68, 68, 0.2);
          transform: translateX(5px);
        }

        .category-item.active {
          background: rgba(239, 68, 68, 0.3);
          border-color: #ef4444;
          box-shadow: 0 0 10px rgba(239, 68, 68, 0.3);
        }

        .formulas-panel {
          display: flex;
          flex-direction: column;
          min-height: 0;
        }

        .formula-list {
          padding: 15px;
          overflow-y: auto;
          overflow-x: hidden;
          flex: 1;
          min-height: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .formula-item {
          padding: 12px;
          background: rgba(59, 130, 246, 0.1);
          border: 2px solid rgba(59, 130, 246, 0.2);
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .formula-item:hover {
          background: rgba(59, 130, 246, 0.2);
          transform: translateY(-2px);
        }

        .formula-item.active {
          background: rgba(59, 130, 246, 0.3);
          border-color: #3b82f6;
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
        }

        .formula-name {
          color: #3b82f6;
          font-weight: bold;
          font-size: 14px;
          margin-bottom: 5px;
        }

        .formula-desc {
          color: #e5e7eb;
          font-size: 12px;
          margin-bottom: 8px;
          line-height: 1.4;
        }

        .formula-example,
        .formula-excel {
          font-size: 11px;
          color: #9ca3af;
          margin-top: 5px;
          line-height: 1.4;
        }

        .formula-excel code {
          background: rgba(0, 0, 0, 0.3);
          padding: 2px 6px;
          border-radius: 3px;
          color: #22c55e;
          font-family: 'Courier New', monospace;
        }

        .apply-panel {
          display: flex;
          flex-direction: column;
          min-height: 0;
        }

        .apply-content {
          padding: 15px;
          overflow-y: auto;
          overflow-x: hidden;
          flex: 1;
          min-height: 0;
        }

        .form-group {
          margin-bottom: 15px;
        }

        .form-group label {
          display: block;
          color: #3b82f6;
          font-size: 13px;
          font-weight: bold;
          margin-bottom: 5px;
        }

        .form-group input {
          width: 100%;
          padding: 8px 12px;
          background: rgba(0, 0, 0, 0.3);
          border: 2px solid rgba(59, 130, 246, 0.3);
          border-radius: 6px;
          color: #e5e7eb;
          font-size: 13px;
          box-sizing: border-box;
        }

        .form-group input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
        }

        .apply-btn {
          width: 100%;
          padding: 12px;
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.3), rgba(22, 163, 74, 0.3));
          border: 2px solid rgba(34, 197, 94, 0.5);
          border-radius: 8px;
          color: #22c55e;
          font-size: 14px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 15px;
        }

        .apply-btn:hover {
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.5), rgba(22, 163, 74, 0.5));
          transform: scale(1.02);
          box-shadow: 0 0 15px rgba(34, 197, 94, 0.5);
        }

        .formula-tips {
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: 6px;
          padding: 12px;
        }

        .formula-tips h5 {
          color: #10b981;
          font-size: 13px;
          margin: 0 0 8px 0;
        }

        .formula-tips ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .formula-tips li {
          color: #e5e7eb;
          font-size: 11px;
          margin-bottom: 5px;
          padding-left: 15px;
          position: relative;
          line-height: 1.4;
        }

        .formula-tips li:before {
          content: "•";
          color: #10b981;
          position: absolute;
          left: 0;
        }

        .empty-state {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: #9ca3af;
          font-size: 14px;
          text-align: center;
          padding: 20px;
        }

        @media (max-width: 1200px) {
          .formulas-layout {
            grid-template-columns: 1fr;
            grid-template-rows: auto 1fr auto;
          }

          .categories-panel {
            order: 1;
            max-height: 150px;
          }

          .category-list {
            flex-direction: row;
            flex-wrap: wrap;
          }

          .category-item {
            flex-shrink: 0;
          }

          .formulas-panel {
            order: 2;
          }

          .apply-panel {
            order: 3;
            max-height: 500px;
          }
        }

        @media (max-width: 768px) {
          .scrollable-content {
            padding: 15px;
          }

          .tab-header h3 {
            font-size: 18px;
          }

          .category-item {
            font-size: 11px;
            padding: 8px;
          }

          .formula-name {
            font-size: 13px;
          }

          .formula-desc {
            font-size: 11px;
          }

          .formula-example,
          .formula-excel {
            font-size: 10px;
          }
        }
      `}</style>
    </div>
  )
}
