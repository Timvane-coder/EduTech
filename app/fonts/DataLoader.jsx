// components/DataLoader.jsx
'use client'

import { useState } from 'react'

export default function DataLoader({ onDataLoaded, onGraphDataLoaded, isVisible }) {
  const [inputValue, setInputValue] = useState('')
  const [dataType, setDataType] = useState('sample') // sample, custom, paste, equation, geometric, vectormatrix
  const [graphInputType, setGraphInputType] = useState('equation') // equation, geometric, vectormatrix

  const sampleData = [
    ['Agent Name', 'Target Sales', 'Actual Sales', 'Achievement %', 'Commission Rate', 'Commission Earned', 'Status'],
    ['John M.', 50000, 55000, '', 0.05, '', ''],
    ['Sarah K.', 60000, 48000, '', 0.05, '', ''],
    ['Daniel P.', 40000, 42500, '', 0.04, '', ''],
    ['Grace L.', 70000, 80000, '', 0.06, '', ''],
    ['Alice N.', 55000, 50000, '', 0.05, '', ''],
    ['Mike T.', 65000, 72000, '', 0.05, '', ''],
    ['Emma R.', 45000, 46500, '', 0.04, '', '']
  ]

  const handleLoadData = () => {
    let data

    if (dataType === 'sample') {
      data = sampleData
      onDataLoaded(data)
    } else if (dataType === 'paste' && inputValue) {
      const rows = inputValue.split('\n').map(row =>
        row.split(',').map(cell => {
          const trimmed = cell.trim()
          return isNaN(trimmed) ? trimmed : parseFloat(trimmed)
        })
      )
      data = rows
      onDataLoaded(data)
    } else if (dataType === 'custom' && inputValue) {
      const rows = inputValue.split('\n').map(row =>
        row.split(',').map(cell => {
          const trimmed = cell.trim()
          return isNaN(trimmed) ? trimmed : parseFloat(trimmed)
        })
      )
      data = rows
      onDataLoaded(data)
    } else if (dataType === 'equation' && inputValue) {
      const equations = inputValue.split('\n').filter(line => line.trim())
      onGraphDataLoaded({ type: 'equation', data: equations })
    } else if (dataType === 'geometric' && inputValue) {
      const shapes = inputValue.split('\n').filter(line => line.trim())
      onGraphDataLoaded({ type: 'geometric', data: shapes })
    } else if (dataType === 'vectormatrix' && inputValue) {
      const items = inputValue.split('\n').filter(line => line.trim())
      onGraphDataLoaded({ type: 'vectormatrix', data: items })
    } else {
      alert('Please enter data or select sample data')
      return
    }
  }

if (!isVisible) return null

  return (
    <div className="data-loader-modal">
      <div className="data-loader-content">
        <h2>📊 Load Your Data</h2>

        <div className="data-type-selector">
          <button
            className={`type-btn ${dataType === 'sample' ? 'active' : ''}`}
            onClick={() => setDataType('sample')}
          >
            Sample Data
          </button>
          <button
            className={`type-btn ${dataType === 'custom' ? 'active' : ''}`}
            onClick={() => setDataType('custom')}
          >
            Custom Data
          </button>
          <button
            className={`type-btn ${dataType === 'paste' ? 'active' : ''}`}
            onClick={() => setDataType('paste')}
          >
            Paste Data
          </button>
          <button
            className={`type-btn ${dataType === 'equation' ? 'active' : ''}`}
            onClick={() => setDataType('equation')}
          >
            📈 Equations
          </button>
          <button
            className={`type-btn ${dataType === 'geometric' ? 'active' : ''}`}
            onClick={() => setDataType('geometric')}
          >
            🔺 Geometric
          </button>
          <button
            className={`type-btn ${dataType === 'vectormatrix' ? 'active' : ''}`}
            onClick={() => setDataType('vectormatrix')}
          >
            ➡️ Vector/Matrix
          </button>
        </div>

        {dataType === 'sample' && (
          <div className="sample-preview">
            <h3>Sample Sales Data Preview:</h3>
            <table>
              <thead>
                <tr>
                  {sampleData[0].map((header, i) => (
                    <th key={i}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sampleData.slice(1, 4).map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="row-count">+ {sampleData.length - 4} more rows...</p>
          </div>
        )}

        {(dataType === 'custom' || dataType === 'paste') && (
          <div className="data-input-area">
            <label>
              {dataType === 'custom' ? 'Enter data (comma-separated):' : 'Paste your data (one row per line):'}
            </label>
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={
                dataType === 'custom'
                  ? "Name,Sales,Target\nJohn,5000,4500\nSarah,6000,5500"
                  : "Paste your CSV or comma-separated data here..."
              }
              rows={10}
            />
            <p className="hint">
              💡 {dataType === 'custom' ? 'First row should be headers' : 'Each line is a row, values separated by commas'}
            </p>
          </div>
        )}

        {dataType === 'equation' && (
          <div className="graph-input-area">
            <h3>📈 Enter Mathematical Equations</h3>
            <div className="instructions">
              <p><strong>Instructions:</strong> Enter one equation per line</p>
              <div className="examples-grid">
                <div className="example-category">
                  <h4>Linear Functions:</h4>
                  <code>y=2x+3</code>
                  <code>y=-0.5x+1</code>
                  <code>y=3x</code>
                </div>
                <div className="example-category">
                  <h4>Quadratic Functions:</h4>
                  <code>y=x**2</code>
                  <code>y=x**2+2x+1</code>
                  <code>y=-2x**2+4x</code>
                </div>
                <div className="example-category">
                  <h4>Trigonometric:</h4>
                  <code>y=sin(x)</code>
                  <code>y=cos(x)</code>
                  <code>y=tan(x)</code>
                </div>
                <div className="example-category">
                  <h4>Exponential:</h4>
                  <code>y=2**x</code>
                  <code>y=e**x</code>
                  <code>y=e**(-x)</code>
                </div>
              </div>
            </div>
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="y=x**2&#10;y=sin(x)&#10;y=2x+3"
              rows={8}
            />
            <p className="hint">
              💡 Each line will create a separate graph with coordinate points
            </p>
          </div>
        )}

        {dataType === 'geometric' && (
          <div className="graph-input-area">
            <h3>🔺 Enter Geometric Shapes</h3>
            <div className="instructions">
              <p><strong>Instructions:</strong> Enter one shape per line</p>
              <div className="examples-grid">
                <div className="example-category">
                  <h4>2D Shapes:</h4>
                  <code>triangle A(0,0) B(4,0) C(2,3)</code>
                  <code>circle center(0,0) radius 5</code>
                  <code>rectangle (0,0) 4 3</code>
                  <code>square (0,0) 4</code>
                  <code>ellipse center(0,0) 5 3</code>
                </div>
                <div className="example-category">
                  <h4>Advanced 2D:</h4>
                  <code>parallelogram (0,0) 5 4 3</code>
                  <code>polygon 6 sides (0,0) 2</code>
                  <code>quadrilateral A(0,0) B(4,0) C(5,3) D(1,3)</code>
                  <code>trapezoid (0,0) 6 4 3</code>
                </div>
                <div className="example-category">
                  <h4>3D Shapes:</h4>
                  <code>sphere center(0,0,0) radius 5</code>
                  <code>cylinder center(0,0,0) radius 3 height 5</code>
                  <code>cone center(0,0,0) radius 3 height 5</code>
                  <code>cube (0,0,0) 4</code>
                </div>
              </div>
            </div>
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="triangle A(0,0) B(4,0) C(2,3)&#10;circle center(0,0) radius 5&#10;rectangle (0,0) 4 3"
              rows={8}
            />
            <p className="hint">
              💡 Each shape creates a detailed analysis with properties
            </p>
          </div>
        )}

        {dataType === 'vectormatrix' && (
          <div className="graph-input-area">
            <h3>➡️ Enter Vectors & Matrices</h3>
            <div className="instructions">
              <p><strong>Instructions:</strong> Enter one vector/matrix per line</p>
              <div className="examples-grid">
                <div className="example-category">
                  <h4>Vectors:</h4>
                  <code>vector A(1,2) B(5,4)</code>
                  <code>vector &lt;3,4&gt;</code>
                  <code>vectors A(1,1) B(4,3) C(6,5)</code>
                  <code>vector A(1,2,3) B(4,5,6)</code>
                </div>
                <div className="example-category">
                  <h4>Matrices:</h4>
                  <code>matrix [[1,2],[3,4]]</code>
                  <code>matrix [1,2,3,4]</code>
                  <code>matrix 1 2 3 4</code>
                  <code>matrix 1 0 0 1</code>
                </div>
                <div className="example-category">
                  <h4>Transformations:</h4>
                  <code>matrix rotation 45</code>
                  <code>matrix scale 2 3</code>
                  <code>matrix reflection x</code>
                </div>
              </div>
            </div>
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="vector A(1,2) B(5,4)&#10;matrix [[1,2],[3,4]]&#10;matrix rotation 45"
              rows={8}
            />
            <p className="hint">
              💡 Creates visual analysis with operations and transformations
            </p>
          </div>
        )}

        <button className="load-btn" onClick={handleLoadData}>
          {dataType === 'sample' || dataType === 'custom' || dataType === 'paste' 
            ? 'Load Data & Start Session' 
            : 'Load & Generate Graphs'}
        </button>
      </div>

      <style jsx>{`
        .data-loader-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
          padding: 20px;
        }

        .data-loader-content {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          border: 2px solid rgba(59, 130, 246, 0.5);
          border-radius: 16px;
          padding: 30px;
          max-width: 1000px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
        }

        h2 {
          color: #3b82f6;
          text-align: center;
          margin-bottom: 25px;
          font-size: 24px;
        }

        .data-type-selector {
          display: flex;
          gap: 8px;
          margin-bottom: 25px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .type-btn {
          padding: 10px 18px;
          background: rgba(59, 130, 246, 0.1);
          border: 2px solid rgba(59, 130, 246, 0.3);
          border-radius: 8px;
          color: #3b82f6;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 13px;
        }

        .type-btn:hover {
          background: rgba(59, 130, 246, 0.2);
          transform: scale(1.05);
        }

        .type-btn.active {
          background: rgba(59, 130, 246, 0.3);
          border-color: #3b82f6;
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
        }

        .sample-preview {
          background: rgba(255, 255, 255, 0.05);
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 20px;
        }

        .sample-preview h3 {
          color: #3b82f6;
          margin-bottom: 15px;
          font-size: 16px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 10px;
        }

        th, td {
          padding: 8px 12px;
          text-align: left;
          border: 1px solid rgba(59, 130, 246, 0.2);
          color: #e5e7eb;
          font-size: 13px;
        }

        th {
          background: rgba(59, 130, 246, 0.2);
          color: #3b82f6;
          font-weight: bold;
        }

        .row-count {
          color: #3b82f6;
          font-size: 12px;
          font-style: italic;
          text-align: center;
        }

        .data-input-area,
        .graph-input-area {
          margin-bottom: 20px;
        }

        .data-input-area label,
        .graph-input-area h3 {
          display: block;
          color: #3b82f6;
          margin-bottom: 10px;
          font-weight: bold;
        }

        .graph-input-area h3 {
          font-size: 18px;
          text-align: center;
          margin-bottom: 15px;
        }

        .instructions {
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          border-radius: 8px;
          padding: 15px;
          margin-bottom: 15px;
        }

        .instructions p {
          color: #22c55e;
          margin: 0 0 12px 0;
          font-size: 14px;
          font-weight: bold;
        }

        .examples-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 12px;
        }

        .example-category {
          background: rgba(0, 0, 0, 0.3);
          padding: 10px;
          border-radius: 6px;
        }

        .example-category h4 {
          color: #22c55e;
          font-size: 13px;
          margin: 0 0 8px 0;
        }

        .example-category code {
          display: block;
          background: rgba(0, 0, 0, 0.4);
          padding: 6px 8px;
          border-radius: 4px;
          color: #3b82f6;
          font-family: 'Courier New', monospace;
          font-size: 11px;
          margin-bottom: 4px;
          word-break: break-all;
        }

        textarea {
          width: 100%;
          padding: 12px;
          background: rgba(0, 0, 0, 0.3);
          border: 2px solid rgba(59, 130, 246, 0.3);
          border-radius: 8px;
          color: #e5e7eb;
          font-family: 'Courier New', monospace;
          font-size: 13px;
          resize: vertical;
        }

        textarea:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
        }

        .hint {
          color: #10b981;
          font-size: 12px;
          margin-top: 8px;
        }

        .load-btn {
          width: 100%;
          padding: 15px;
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.3), rgba(22, 163, 74, 0.3));
          border: 2px solid rgba(34, 197, 94, 0.5);
          border-radius: 8px;
          color: #22c55e;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .load-btn:hover {
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.5), rgba(22, 163, 74, 0.5));
          transform: scale(1.02);
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.5);
        }

        @media (max-width: 768px) {
          .data-loader-content {
            padding: 20px;
          }

          h2 {
            font-size: 20px;
          }

          .type-btn {
            padding: 8px 14px;
            font-size: 11px;
          }

          .examples-grid {
            grid-template-columns: 1fr;
          }

          th, td {
            padding: 6px 8px;
            font-size: 11px;
          }

          textarea {
            font-size: 12px;
          }

          .load-btn {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  )
}
