// components/TabContent/GraphTab.jsx
'use client'

import { useState, useEffect } from 'react'

export default function GraphTab({ workbookState, sessionManager }) {
  const [graphs, setGraphs] = useState([])
  const [activeView, setActiveView] = useState('graphs') // graphs, history, formulas, help
  const [graphingStatus, setGraphingStatus] = useState(null)
  const [selectedGraph, setSelectedGraph] = useState(null)
  const [loadedImages, setLoadedImages] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [imageErrors, setImageErrors] = useState({})

  useEffect(() => {
    if (sessionManager) {
      refreshGraphs()
    }
  }, [sessionManager])

  useEffect(() => {
    if (sessionManager && workbookState) {
      console.log('📊 Workbook state updated, refreshing graphs...')
      refreshGraphs()
    }
  }, [workbookState])

  const refreshGraphs = async () => {
    if (!sessionManager?.getSessionId) {
      console.log('❌ No session manager')
      return
    }

    try {
      const sessionId = sessionManager.getSessionId()
      console.log(`🔄 Refreshing graphs for session: ${sessionId}`)
      
      const response = await fetch('/api/workbook/graph-operations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId,
          operation: 'getGraphHistory',
          data: {}
        })
      })

      if (!response.ok) {
        const error = await response.json()
        console.error('❌ Failed to fetch graphs:', error)
        return
      }

      const { result } = await response.json()
      const allGraphs = []

      // Process all graph types
      const graphTypes = [
        { data: result.equations, type: 'equation', icon: '📈', name: 'Equation' },
        { data: result.triangles, type: 'triangle', icon: '🔺', name: 'Triangle' },
        { data: result.circles, type: 'circle', icon: '⭕', name: 'Circle' },
        { data: result.rectangles, type: 'rectangle', icon: '▭', name: 'Rectangle' },
        { data: result.squares, type: 'square', icon: '▢', name: 'Square' },
        { data: result.parallelograms, type: 'parallelogram', icon: '▱', name: 'Parallelogram' },
        { data: result.polygons, type: 'polygon', icon: '⬡', name: 'Polygon' },
        { data: result.ellipses, type: 'ellipse', icon: '⬭', name: 'Ellipse' },
        { data: result.quadrilaterals, type: 'quadrilateral', icon: '⬢', name: 'Quadrilateral' },
        { data: result.trapezoids, type: 'trapezoid', icon: '⏢', name: 'Trapezoid' },
        { data: result.spheres, type: 'sphere', icon: '🌐', name: 'Sphere' },
        { data: result.cylinders, type: 'cylinder', icon: '🛢️', name: 'Cylinder' },
        { data: result.cones, type: 'cone', icon: '🔺', name: 'Cone' },
        { data: result.cubes, type: 'cube', icon: '🧊', name: 'Cube' },
        { data: result.vectors, type: 'vector', icon: '➡️', name: 'Vector' },
        { data: result.matrices, type: 'matrix', icon: '🔢', name: 'Matrix' }
      ]

      graphTypes.forEach(({ data, type, icon, name }) => {
        if (data && data.length > 0) {
          data.forEach((item, index) => {
            const graphId = `${type}_${index}`
            const graphTitle = type === 'equation' 
              ? (typeof item === 'string' ? item : `${name} ${index + 1}`)
              : `${name} ${item.id || index + 1}`
            
            allGraphs.push({
              id: graphId,
              type,
              title: graphTitle,
              icon,
              data: item,
              index
            })
          })
        }
      })

      console.log(`✅ Loaded ${allGraphs.length} graph(s)`)
      setGraphs(allGraphs)

      // Get status
      const statusResponse = await fetch('/api/workbook/graph-operations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId,
          operation: 'getStatus',
          data: {}
        })
      })

      if (statusResponse.ok) {
        const { result: status } = await statusResponse.json()
        setGraphingStatus(status)
      }

    } catch (error) {
      console.error('❌ Failed to refresh graphs:', error)
    }
  }

  const loadGraphImage = async (graph) => {
    if (loadedImages[graph.id] || imageErrors[graph.id]) {
      return
    }

    try {
      console.log(`🖼️ Loading image for ${graph.type} ${graph.index}`)
      
      const response = await fetch(
        `/api/workbook/graph-image?type=${graph.type}&index=${graph.index}`
      )

      if (response.ok) {
        const blob = await response.blob()
        const imageUrl = URL.createObjectURL(blob)
        setLoadedImages(prev => ({
          ...prev,
          [graph.id]: imageUrl
        }))
        console.log(`✅ Image loaded for ${graph.id}`)
      } else {
        const error = await response.json()
        console.error(`❌ Failed to load image for ${graph.id}:`, error)
        setImageErrors(prev => ({
          ...prev,
          [graph.id]: error.error || 'Failed to load'
        }))
      }
    } catch (error) {
      console.error(`❌ Error loading image for ${graph.id}:`, error)
      setImageErrors(prev => ({
        ...prev,
        [graph.id]: error.message
      }))
    }
  }

  // Load images when graphs change
  useEffect(() => {
    if (graphs.length > 0) {
      console.log(`🖼️ Loading ${graphs.length} graph images...`)
      graphs.forEach(graph => {
        loadGraphImage(graph)
      })
    }
  }, [graphs])

  // Cleanup image URLs on unmount
  useEffect(() => {
    return () => {
      Object.values(loadedImages).forEach(url => {
        if (url) {
          URL.revokeObjectURL(url)
        }
      })
    }
  }, [loadedImages])

  const handleViewGraph = (graph) => {
    setSelectedGraph(graph)
    setShowModal(true)
  }

  const displayFormulas = async () => {
    if (!sessionManager?.getSessionId) return
    
    try {
      await fetch('/api/workbook/graph-operations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: sessionManager.getSessionId(),
          operation: 'displayFormulas',
          data: {}
        })
      })
      alert('✅ Formulas displayed in server console (check terminal)')
    } catch (error) {
      console.error('Error:', error)
      alert('❌ Error displaying formulas')
    }
  }

  const displayHelp = async () => {
    if (!sessionManager?.getSessionId) return
    
    try {
      await fetch('/api/workbook/graph-operations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: sessionManager.getSessionId(),
          operation: 'displayHelp',
          data: {}
        })
      })
      alert('✅ Help displayed in server console (check terminal)')
    } catch (error) {
      console.error('Error:', error)
      alert('❌ Error displaying help')
    }
  }

  const displayHistory = async () => {
    if (!sessionManager?.getSessionId) return
    
    try {
      await fetch('/api/workbook/graph-operations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: sessionManager.getSessionId(),
          operation: 'displayHistory',
          data: {}
        })
      })
      alert('✅ Complete history displayed in server console (check terminal)')
    } catch (error) {
      console.error('Error:', error)
      alert('❌ Error displaying history')
    }
  }

  const changeTheme = async (theme) => {
    if (!sessionManager?.getSessionId) return
    
    try {
      await fetch('/api/workbook/graph-operations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: sessionManager.getSessionId(),
          operation: 'changeTheme',
          data: { theme }
        })
      })
      alert(`✅ Theme changed to ${theme}`)
      refreshGraphs()
    } catch (error) {
      console.error('Error:', error)
      alert('❌ Error changing theme')
    }
  }

  const saveGraph = async () => {
    if (!sessionManager?.getSessionId) return
    
    try {
      await fetch('/api/workbook/graph-operations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: sessionManager.getSessionId(),
          operation: 'saveGraph',
          data: {}
        })
      })
      alert('✅ Graph saved to temp folder!')
    } catch (error) {
      console.error('Error:', error)
      alert('❌ Failed to save: ' + error.message)
    }
  }

  if (!sessionManager) {
    return (
      <div className="graph-tab-wrapper">
        <div className="empty-state">
          <h3>📈 Graphing Calculator Not Initialized</h3>
          <p>Load data to initialize the graphing calculator</p>
        </div>
      </div>
    )
  }

  if (graphs.length === 0) {
    return (
      <div className="graph-tab-wrapper">
        <div className="empty-state">
          <h3>📈 No Graphs Yet</h3>
          <p>Add equations, shapes, vectors, or matrices to see graphs here</p>
          <div className="quick-examples">
            <h4>Quick Examples:</h4>
            <p className="example-text">Use the "Load Data" button to add:</p>
            <div className="example-list">
              <span>📈 Equations: y=x**2, y=sin(x)</span>
              <span>🔺 Shapes: triangle A(0,0) B(4,0) C(2,3)</span>
              <span>➡️ Vectors: vector A(1,2) B(5,4)</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="graph-tab-wrapper">
      <div className="scrollable-content">
        <div className="tab-header">
          <h3>📈 Graphing Calculator</h3>
          <div className="status-badge">
            {graphingStatus || `${graphs.length} graph(s)`}
          </div>
        </div>

        {/* View Selector */}
        <div className="view-selector">
          <button
            className={`view-btn ${activeView === 'graphs' ? 'active' : ''}`}
            onClick={() => setActiveView('graphs')}
          >
            📊 Graphs
          </button>
          <button
            className={`view-btn ${activeView === 'history' ? 'active' : ''}`}
            onClick={() => setActiveView('history')}
          >
            📜 History
          </button>
          <button
            className={`view-btn ${activeView === 'formulas' ? 'active' : ''}`}
            onClick={() => setActiveView('formulas')}
          >
            📋 Formulas
          </button>
          <button
            className={`view-btn ${activeView === 'help' ? 'active' : ''}`}
            onClick={() => setActiveView('help')}
          >
            ❓ Help
          </button>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="action-btn refresh-btn" onClick={refreshGraphs}>
            🔄 Refresh
          </button>
          <button className="action-btn theme-btn" onClick={() => changeTheme('standard')}>
            🎨 Standard
          </button>
          <button className="action-btn theme-btn" onClick={() => changeTheme('dark')}>
            🌙 Dark
          </button>
          <button className="action-btn theme-btn" onClick={() => changeTheme('scientific')}>
            🔬 Scientific
          </button>
          <button className="action-btn save-btn" onClick={saveGraph}>
            💾 Save
          </button>
        </div>

        {/* Content Area */}
        <div className="content-area">
          {activeView === 'graphs' && (
            <div className="graphs-grid">
              {graphs.map((graph) => (
                <div key={graph.id} className="graph-card" onClick={() => handleViewGraph(graph)}>
                  <div className="graph-header">
                    <span className="graph-icon">{graph.icon}</span>
                    <span className="graph-title">{graph.title}</span>
                  </div>
                  <div className="graph-preview">
                    {loadedImages[graph.id] ? (
                      <img 
                        src={loadedImages[graph.id]} 
                        alt={graph.title}
                        className="graph-image"
                      />
                    ) : imageErrors[graph.id] ? (
                      <div className="error-placeholder">
                        <span className="error-icon">⚠️</span>
                        <p>Image not available</p>
                        <span className="error-hint">Graph saved in temp folder</span>
                      </div>
                    ) : (
                      <div className="loading-placeholder">
                        <div className="spinner-small"></div>
                        <p>Loading...</p>
                      </div>
                    )}
                  </div>
                  <div className="graph-info">
                    <span className="graph-type">{graph.type}</span>
                    {graph.data && graph.data.properties && (
                      <span className="graph-details">
                        {graph.data.properties.area && `Area: ${graph.data.properties.area.toFixed(2)}`}
                        {graph.data.properties.radius && `R: ${graph.data.properties.radius}`}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeView === 'history' && (
            <div className="history-view">
              <h4>📜 Complete History</h4>
              <button className="action-btn" onClick={displayHistory}>
                View Full History
              </button>
              <p className="info-text">Check server console for detailed history</p>
              <div className="history-list">
                {graphs.map((graph, idx) => (
                  <div key={graph.id} className="history-item">
                    <span className="history-number">{idx + 1}</span>
                    <span className="history-icon">{graph.icon}</span>
                    <span className="history-title">{graph.title}</span>
                    <span className="history-type">{graph.type}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeView === 'formulas' && (
            <div className="formulas-view">
              <h4>📋 Available Formulas & Functions</h4>
              <button className="action-btn" onClick={displayFormulas}>
                Display All Formulas
              </button>
              <p className="info-text">Check server console for complete formula reference</p>
              <div className="formula-summary">
                <h5>Quick Reference:</h5>
                <ul>
                  <li><strong>Linear:</strong> y=mx+c</li>
                  <li><strong>Quadratic:</strong> y=ax**2+bx+c</li>
                  <li><strong>Trigonometric:</strong> y=sin(x), y=cos(x), y=tan(x)</li>
                  <li><strong>Exponential:</strong> y=a**x, y=e**x</li>
                  <li><strong>Logarithmic:</strong> y=log(x)</li>
                </ul>
              </div>
            </div>
          )}

          {activeView === 'help' && (
            <div className="help-view">
              <h4>❓ Help & Documentation</h4>
              <button className="action-btn" onClick={displayHelp}>
                Show Help Menu
              </button>
              <p className="info-text">Check server console for detailed help information</p>
              <div className="help-summary">
                <h5>Quick Guide:</h5>
                <div className="help-section">
                  <h6>📈 Adding Equations:</h6>
                  <p>Use the Load Data button → Equations tab</p>
                  <code>y=x**2</code>
                  <code>y=sin(x)</code>
                </div>
                <div className="help-section">
                  <h6>🔺 Adding Shapes:</h6>
                  <p>Use the Load Data button → Geometric tab</p>
                  <code>triangle A(0,0) B(4,0) C(2,3)</code>
                  <code>circle center(0,0) radius 5</code>
                </div>
                <div className="help-section">
                  <h6>➡️ Adding Vectors/Matrices:</h6>
                  <p>Use the Load Data button → Vector/Matrix tab</p>
                  <code>vector A(1,2) B(5,4)</code>
                  <code>matrix [[1,2],[3,4]]</code>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Full-Size Modal */}
      {showModal && selectedGraph && (
        <div className="graph-modal" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>
              ✕
            </button>
            <h3>{selectedGraph.icon} {selectedGraph.title}</h3>
            <div className="modal-image-container">
              {loadedImages[selectedGraph.id] ? (
                <img 
                  src={loadedImages[selectedGraph.id]} 
                  alt={selectedGraph.title}
                  className="modal-image"
                />
              ) : imageErrors[selectedGraph.id] ? (
                <div className="error-placeholder">
                  <span className="error-icon">⚠️</span>
                  <p>Image not available in viewer</p>
                  <span className="error-hint">Check temp folder for saved graph</span>
                </div>
              ) : (
                <div className="loading-placeholder">
                  <div className="spinner-small"></div>
                  <p>Loading graph...</p>
                </div>
              )}
            </div>
            {selectedGraph.data && selectedGraph.data.properties && (
              <div className="modal-info">
                <h5>📊 Properties:</h5>
                {selectedGraph.data.properties.area && (
                  <p><strong>Area:</strong> {selectedGraph.data.properties.area.toFixed(3)} sq units</p>
                )}
                {selectedGraph.data.properties.perimeter && (
                  <p><strong>Perimeter:</strong> {selectedGraph.data.properties.perimeter.toFixed(3)} units</p>
                )}
                {selectedGraph.data.properties.radius && (
                  <p><strong>Radius:</strong> {selectedGraph.data.properties.radius}</p>
                )}
                {selectedGraph.data.properties.circumference && (
                  <p><strong>Circumference:</strong> {selectedGraph.data.properties.circumference.toFixed(3)} units</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}


      <style jsx>{`
        .graph-tab-wrapper {
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
          background: rgba(59, 130, 246, 0.5);
          border-radius: 5px;
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
          margin: 0 0 30px 0;
        }

        .quick-examples {
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: center;
        }

        .quick-examples h4 {
          color: #3b82f6;
          margin: 0 0 15px 0;
        }

        .quick-examples button {
          padding: 12px 24px;
          background: rgba(59, 130, 246, 0.2);
          border: 2px solid rgba(59, 130, 246, 0.4);
          border-radius: 8px;
          color: #3b82f6;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .quick-examples button:hover {
          background: rgba(59, 130, 246, 0.3);
          transform: scale(1.05);
        }

        .tab-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .tab-header h3 {
          color: #3b82f6;
          font-size: 20px;
          margin: 0;
        }

        .status-badge {
          padding: 8px 16px;
          background: rgba(34, 197, 94, 0.2);
          border: 1px solid rgba(34, 197, 94, 0.4);
          border-radius: 20px;
          font-size: 12px;
          color: #22c55e;
          font-weight: bold;
        }

        .view-selector {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .view-btn {
          padding: 10px 20px;
          background: rgba(59, 130, 246, 0.1);
          border: 2px solid rgba(59, 130, 246, 0.2);
          border-radius: 8px;
          color: #3b82f6;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .view-btn:hover {
          background: rgba(59, 130, 246, 0.2);
          transform: translateY(-2px);
        }

        .view-btn.active {
          background: rgba(59, 130, 246, 0.3);
          border-color: #3b82f6;
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.4);
        }

        .action-buttons {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .action-btn {
          padding: 10px 18px;
          background: rgba(34, 197, 94, 0.2);
          border: 2px solid rgba(34, 197, 94, 0.4);
          border-radius: 8px;
          color: #22c55e;
          font-size: 13px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .action-btn:hover {
          background: rgba(34, 197, 94, 0.3);
          transform: scale(1.05);
        }

        .theme-btn {
          background: rgba(168, 85, 247, 0.2);
          border-color: rgba(168, 85, 247, 0.4);
          color: #a855f7;
        }

        .theme-btn:hover {
          background: rgba(168, 85, 247, 0.3);
        }

        .save-btn {
          background: rgba(59, 130, 246, 0.2);
          border-color: rgba(59, 130, 246, 0.4);
          color: #3b82f6;
        }

        .save-btn:hover {
          background: rgba(59, 130, 246, 0.3);
        }

        .refresh-btn {
          background: rgba(245, 158, 11, 0.2);
          border-color: rgba(245, 158, 11, 0.4);
          color: #f59e0b;
        }

        .refresh-btn:hover {
          background: rgba(245, 158, 11, 0.3);
        }

        .content-area {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          padding: 20px;
          min-height: 400px;
        }

        .graphs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }

        .graph-card {
          background: rgba(255, 255, 255, 0.08);
          border: 2px solid rgba(59, 130, 246, 0.3);
          border-radius: 12px;
          padding: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .graph-card:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(59, 130, 246, 0.5);
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
        }

        .graph-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
          padding-bottom: 10px;
          border-bottom: 2px solid rgba(59, 130, 246, 0.2);
        }

        .graph-icon {
          font-size: 24px;
        }

        .graph-title {
          color: #3b82f6;
          font-weight: bold;
          font-size: 15px;
        }

        .graph-preview {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 8px;
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
        }

        .preview-placeholder {
          color: #9ca3af;
          font-size: 13px;
          text-align: center;
        }

        .graph-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .graph-type {
          color: #3b82f6;
          font-size: 12px;
          font-weight: bold;
          text-transform: uppercase;
        }

        .graph-details {
          color: #9ca3af;
          font-size: 11px;
        }

        .history-view,
        .formulas-view,
        .help-view {
          padding: 20px;
        }

        .history-view h4,
        .formulas-view h4,
        .help-view h4 {
          color: #3b82f6;
          font-size: 18px;
          margin: 0 0 20px 0;
        }

        .history-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .history-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 8px;
        }

        .history-icon {
          font-size: 20px;
        }

        .history-title {
          flex: 1;
          color: #e5e7eb;
          font-size: 14px;
        }

        .history-type {
          color: #3b82f6;
          font-size: 12px;
          text-transform: uppercase;
        }

        .formulas-view button,
        .help-view button {
          padding: 12px 24px;
          background: rgba(34, 197, 94, 0.2);
          border: 2px solid rgba(34, 197, 94, 0.4);
          border-radius: 8px;
          color: #22c55e;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .formulas-view button:hover,
        .help-view button:hover {
          background: rgba(34, 197, 94, 0.3);
          transform: scale(1.05);
        }

        .info-text {
          color: #9ca3af;
          font-size: 13px;
          margin-top: 15px;
        }

        @media (max-width: 768px) {
          .scrollable-content {
            padding: 15px;
          }

          .graphs-grid {
            grid-template-columns: 1fr;
          }

          .view-selector {
            gap: 8px;
          }

          .view-btn {
            padding: 8px 14px;
            font-size: 12px;
          }

          .action-buttons {
            gap: 8px;
          }

          .action-btn {
            padding: 8px 14px;
            font-size: 11px;
          }
        }
      `}</style>
    </div>
  )
}
