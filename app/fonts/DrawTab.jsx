'use client'

import { useState } from 'react'

export default function DrawTab({ onAddDrawing }) {
  const [activeSection, setActiveSection] = useState('shapes')
  const [selectedShape, setSelectedShape] = useState(null)
  const [shapeConfig, setShapeConfig] = useState({
    fillColor: '#3b82f6',
    strokeColor: '#1e40af',
    strokeWidth: 2,
    width: 200,
    height: 200
  })

  const sections = [
    { id: 'shapes', label: '⬜ Shapes', icon: '⬜' },
    { id: 'graphs', label: '📈 Graphs', icon: '📈' },
    { id: 'annotations', label: '✏️ Annotations', icon: '✏️' },
    { id: 'templates', label: '📐 Templates', icon: '📐' }
  ]

  const basicShapes = [
    { id: 'rectangle', name: 'Rectangle', icon: '▭', description: 'Draw rectangles and squares' },
    { id: 'circle', name: 'Circle', icon: '●', description: 'Draw circles and ellipses' },
    { id: 'triangle', name: 'Triangle', icon: '▲', description: 'Draw triangles' },
    { id: 'line', name: 'Line', icon: '─', description: 'Draw straight lines' },
    { id: 'arrow', name: 'Arrow', icon: '→', description: 'Draw directional arrows' },
    { id: 'star', name: 'Star', icon: '★', description: 'Draw star shapes' },
    { id: 'polygon', name: 'Polygon', icon: '⬡', description: 'Draw custom polygons' },
    { id: 'diamond', name: 'Diamond', icon: '◆', description: 'Draw diamond shapes' }
  ]

  const graphTypes = [
    { id: 'function', name: 'Function Graph', icon: '📈', description: 'Plot mathematical functions' },
    { id: 'scatter', name: 'Scatter Plot', icon: '⚬', description: 'Plot data points' },
    { id: 'vector', name: 'Vector Field', icon: '➤', description: 'Visualize vector fields' },
    { id: 'polar', name: 'Polar Graph', icon: '◎', description: 'Plot in polar coordinates' },
    { id: 'parametric', name: 'Parametric', icon: '∿', description: 'Parametric equations' },
    { id: 'implicit', name: 'Implicit', icon: '∞', description: 'Implicit function plots' }
  ]

  const geometricTemplates = [
    { id: 'coordinate-plane', name: 'Coordinate Plane', icon: '✛', description: 'X-Y axis grid' },
    { id: 'unit-circle', name: 'Unit Circle', icon: '◯', description: 'Trigonometric circle' },
    { id: 'flowchart', name: 'Flowchart', icon: '⊞', description: 'Process flowchart' },
    { id: 'venn', name: 'Venn Diagram', icon: '◎◎', description: 'Set relationships' },
    { id: 'tree', name: 'Tree Diagram', icon: '⊥', description: 'Hierarchical structure' },
    { id: 'network', name: 'Network Graph', icon: '⊚', description: 'Node connections' }
  ]

  const handleShapeSelect = (shape) => {
    setSelectedShape(shape)
  }

  const handleConfigChange = (key, value) => {
    setShapeConfig(prev => ({ ...prev, [key]: value }))
  }

  const handleAddShape = async () => {
    if (!selectedShape) {
      alert('Please select a shape first')
      return
    }

    try {
      await onAddDrawing({
        type: 'shape',
        shape: selectedShape.id,
        config: shapeConfig
      })
      alert(`✅ ${selectedShape.name} added successfully!`)
    } catch (error) {
      alert(`❌ Error: ${error.message}`)
    }
  }

  return (
    <div className="draw-tab-wrapper">
      <div className="scrollable-content">
        <div className="tab-header">
          <h3>✏️ Draw & Design</h3>
          <p className="subtitle">Create shapes, graphs, and geometric diagrams</p>
        </div>

        {/* Section Tabs */}
        <div className="section-tabs">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`section-tab ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => setActiveSection(section.id)}
            >
              <span className="tab-icon">{section.icon}</span>
              <span className="tab-label">{section.label}</span>
            </button>
          ))}
        </div>

        <div className="section-content">
          {/* Shapes Section */}
          {activeSection === 'shapes' && (
            <div className="shapes-section">
              <h4>⬜ Basic Shapes</h4>
              <p className="section-desc">Add geometric shapes to your workbook</p>

              <div className="shapes-grid">
                {basicShapes.map((shape) => (
                  <div
                    key={shape.id}
                    className={`shape-card ${selectedShape?.id === shape.id ? 'selected' : ''}`}
                    onClick={() => handleShapeSelect(shape)}
                  >
                    <div className="shape-icon">{shape.icon}</div>
                    <div className="shape-name">{shape.name}</div>
                    <div className="shape-desc">{shape.description}</div>
                  </div>
                ))}
              </div>

              {selectedShape && (
                <div className="shape-config">
                  <h5>🎨 Configure {selectedShape.name}</h5>

                  <div className="config-grid">
                    <div className="config-item">
                      <label>Fill Color:</label>
                      <div className="color-input">
                        <input
                          type="color"
                          value={shapeConfig.fillColor}
                          onChange={(e) => handleConfigChange('fillColor', e.target.value)}
                        />
                        <input
                          type="text"
                          value={shapeConfig.fillColor}
                          onChange={(e) => handleConfigChange('fillColor', e.target.value)}
                          className="color-text"
                        />
                      </div>
                    </div>

                    <div className="config-item">
                      <label>Stroke Color:</label>
                      <div className="color-input">
                        <input
                          type="color"
                          value={shapeConfig.strokeColor}
                          onChange={(e) => handleConfigChange('strokeColor', e.target.value)}
                        />
                        <input
                          type="text"
                          value={shapeConfig.strokeColor}
                          onChange={(e) => handleConfigChange('strokeColor', e.target.value)}
                          className="color-text"
                        />
                      </div>
                    </div>

                    <div className="config-item">
                      <label>Stroke Width:</label>
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value={shapeConfig.strokeWidth}
                        onChange={(e) => handleConfigChange('strokeWidth', parseInt(e.target.value))}
                      />
                      <span className="range-value">{shapeConfig.strokeWidth}px</span>
                    </div>

                    <div className="config-item">
                      <label>Width:</label>
                      <input
                        type="number"
                        value={shapeConfig.width}
                        onChange={(e) => handleConfigChange('width', parseInt(e.target.value))}
                        min="50"
                        max="800"
                      />
                    </div>

                    <div className="config-item">
                      <label>Height:</label>
                      <input
                        type="number"
                        value={shapeConfig.height}
                        onChange={(e) => handleConfigChange('height', parseInt(e.target.value))}
                        min="50"
                        max="800"
                      />
                    </div>
                  </div>

                  <div className="shape-preview">
                    <h6>Preview:</h6>
                    <div className="preview-container">
                      <div
                        className="preview-shape"
                        style={{
                          width: `${shapeConfig.width}px`,
                          height: `${shapeConfig.height}px`,
                          backgroundColor: shapeConfig.fillColor,
                          border: `${shapeConfig.strokeWidth}px solid ${shapeConfig.strokeColor}`
                        }}
                      />
                    </div>
                  </div>

                  <button className="add-shape-btn" onClick={handleAddShape}>
                    ➕ Add {selectedShape.name} to Workbook
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Graphs Section */}
          {activeSection === 'graphs' && (
            <div className="graphs-section">
              <h4>📈 Mathematical Graphs</h4>
              <p className="section-desc">Plot functions and mathematical visualizations</p>

              <div className="graphs-grid">
                {graphTypes.map((graph) => (
                  <div
                    key={graph.id}
                    className="graph-card"
                    onClick={() => alert(`${graph.name} coming soon!`)}
                  >
                    <div className="graph-icon">{graph.icon}</div>
                    <h5>{graph.name}</h5>
                    <p>{graph.description}</p>
                    <span className="badge">Coming Soon</span>
                  </div>
                ))}
              </div>

              <div className="graph-info">
                <h5>📐 Graph Features (Coming Soon):</h5>
                <ul>
                  <li>Plot mathematical functions like y = f(x)</li>
                  <li>Customize axes, scales, and gridlines</li>
                  <li>Add multiple functions to compare</li>
                  <li>Interactive zoom and pan controls</li>
                  <li>Export graphs as high-quality images</li>
                  <li>Calculus visualizations (derivatives, integrals)</li>
                </ul>
              </div>

              <div className="example-functions">
                <h5>🧮 Example Functions:</h5>
                <div className="function-examples">
                  <code>y = x²</code>
                  <code>y = sin(x)</code>
                  <code>y = e^x</code>
                  <code>y = log(x)</code>
                  <code>y = √x</code>
                  <code>y = |x|</code>
                </div>
              </div>
            </div>
          )}

          {/* Annotations Section */}
          {activeSection === 'annotations' && (
            <div className="annotations-section">
              <h4>✏️ Annotations & Labels</h4>
              <p className="section-desc">Add text, callouts, and annotations</p>

              <div className="annotation-tools">
                <div className="tool-group">
                  <h5>Text Tools:</h5>
                  <button className="tool-btn">📝 Text Box</button>
                  <button className="tool-btn">🏷️ Label</button>
                  <button className="tool-btn">💬 Callout</button>
                  <button className="tool-btn">📌 Note</button>
                </div>

                <div className="tool-group">
                  <h5>Drawing Tools:</h5>
                  <button className="tool-btn">✏️ Pen</button>
                  <button className="tool-btn">🖍️ Highlighter</button>
                  <button className="tool-btn">🗑️ Eraser</button>
                  <button className="tool-btn">↩️ Undo</button>
                </div>

                <div className="tool-group">
                  <h5>Markup Tools:</h5>
                  <button className="tool-btn">⭕ Circle</button>
                  <button className="tool-btn">❌ Cross Out</button>
                  <button className="tool-btn">✓ Checkmark</button>
                  <button className="tool-btn">⚠️ Warning</button>
                </div>
              </div>

              <div className="annotation-preview">
                <h5>Annotation Preview:</h5>
                <div className="preview-area">
                  <p className="preview-text">Annotations will appear here</p>
                  <p className="coming-soon-text">Feature in development</p>
                </div>
              </div>
            </div>
          )}

          {/* Templates Section */}
          {activeSection === 'templates' && (
            <div className="templates-section">
              <h4>📐 Geometric Templates</h4>
              <p className="section-desc">Pre-designed geometric diagrams and templates</p>

              <div className="templates-grid">
                {geometricTemplates.map((template) => (
                  <div
                    key={template.id}
                    className="template-card"
                    onClick={() => alert(`${template.name} template coming soon!`)}
                  >
                    <div className="template-icon">{template.icon}</div>
                    <h5>{template.name}</h5>
                    <p>{template.description}</p>
                    <button className="use-template-btn">Use Template</button>
                  </div>
                ))}
              </div>

              <div className="template-features">
                <h5>✨ Template Features:</h5>
                <div className="features-grid">
                  <div className="feature-item">
                    <span className="feature-icon">🎨</span>
                    <span>Customizable colors</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">📏</span>
                    <span>Adjustable dimensions</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">🏷️</span>
                    <span>Editable labels</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">💾</span>
                    <span>Save as preset</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .draw-tab-wrapper {
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
          background: rgba(236, 72, 153, 0.5);
          border-radius: 5px;
        }

        .scrollable-content::-webkit-scrollbar-thumb:hover {
          background: rgba(236, 72, 153, 0.7);
        }

        .tab-header {
          margin-bottom: 20px;
        }

        .tab-header h3 {
          color: #ec4899;
          font-size: 20px;
          margin: 0 0 5px 0;
        }

        .subtitle {
          color: #9ca3af;
          font-size: 13px;
          margin: 0;
        }

        .section-tabs {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .section-tab {
          padding: 10px 18px;
          background: rgba(236, 72, 153, 0.1);
          border: 2px solid rgba(236, 72, 153, 0.2);
          border-radius: 8px;
          color: #ec4899;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .section-tab:hover {
          background: rgba(236, 72, 153, 0.2);
          transform: translateY(-2px);
        }

        .section-tab.active {
          background: rgba(236, 72, 153, 0.3);
          border-color: #ec4899;
          box-shadow: 0 0 15px rgba(236, 72, 153, 0.4);
        }

        .tab-icon {
          font-size: 18px;
        }

        .tab-label {
          font-weight: bold;
          font-size: 14px;
        }

        .section-content {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          padding: 20px;
          margin-bottom: 20px;
        }

        .section-content h4 {
          color: #ec4899;
          font-size: 18px;
          margin: 0 0 8px 0;
        }

        .section-desc {
          color: #9ca3af;
          font-size: 13px;
          margin: 0 0 20px 0;
        }

        .shapes-grid,
        .graphs-grid,
        .templates-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 15px;
          margin-bottom: 20px;
        }

        .shape-card,
        .graph-card,
        .template-card {
          background: rgba(236, 72, 153, 0.1);
          border: 2px solid rgba(236, 72, 153, 0.2);
          border-radius: 8px;
          padding: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .shape-card:hover,
        .graph-card:hover,
        .template-card:hover {
          background: rgba(236, 72, 153, 0.2);
          transform: translateY(-4px);
          box-shadow: 0 4px 12px rgba(236, 72, 153, 0.3);
        }

        .shape-card.selected {
          background: rgba(236, 72, 153, 0.3);
          border-color: #ec4899;
          box-shadow: 0 0 15px rgba(236, 72, 153, 0.4);
        }

        .shape-icon,
        .graph-icon,
        .template-icon {
          font-size: 40px;
          margin-bottom: 10px;
        }

        .shape-name,
        .graph-card h5,
        .template-card h5 {
          color: #ec4899;
          font-size: 14px;
          font-weight: bold;
          margin: 0 0 6px 0;
        }

        .shape-desc,
        .graph-card p,
        .template-card p {
          color: #9ca3af;
          font-size: 11px;
          line-height: 1.4;
          margin: 0;
        }

        .badge {
          display: inline-block;
          margin-top: 10px;
          padding: 4px 10px;
          background: rgba(16, 185, 129, 0.2);
          border: 1px solid rgba(16, 185, 129, 0.4);
          border-radius: 12px;
          color: #10b981;
          font-size: 10px;
          font-weight: bold;
        }

        .shape-config {
          background: rgba(0, 0, 0, 0.3);
          border: 2px solid rgba(236, 72, 153, 0.3);
          border-radius: 8px;
          padding: 20px;
          margin-top: 20px;
        }

        .shape-config h5 {
          color: #ec4899;
          font-size: 16px;
          margin: 0 0 15px 0;
        }

        .config-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
          margin-bottom: 20px;
        }

        .config-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .config-item label {
          color: #ec4899;
          font-size: 13px;
          font-weight: bold;
        }

        .color-input {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .color-input input[type="color"] {
          width: 50px;
          height: 40px;
          border: 2px solid rgba(236, 72, 153, 0.3);
          border-radius: 6px;
          cursor: pointer;
          background: transparent;
        }

        .color-text {
          flex: 1;
          padding: 8px 12px;
          background: rgba(0, 0, 0, 0.3);
          border: 2px solid rgba(236, 72, 153, 0.3);
          border-radius: 6px;
          color: #e5e7eb;
          font-size: 13px;
        }

        .config-item input[type="range"] {
          width: 100%;
          height: 6px;
          background: rgba(236, 72, 153, 0.2);
          border-radius: 3px;
          outline: none;
          cursor: pointer;
        }

        .config-item input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          background: #ec4899;
          border-radius: 50%;
          cursor: pointer;
        }

        .range-value {
          color: #ec4899;
          font-size: 12px;
          font-weight: bold;
        }

        .config-item input[type="number"] {
          padding: 8px 12px;
          background: rgba(0, 0, 0, 0.3);
          border: 2px solid rgba(236, 72, 153, 0.3);
          border-radius: 6px;
          color: #e5e7eb;
          font-size: 13px;
        }

        .config-item input:focus {
          outline: none;
          border-color: #ec4899;
          box-shadow: 0 0 10px rgba(236, 72, 153, 0.3);
        }

        .shape-preview {
          background: rgba(0, 0, 0, 0.2);
          border: 2px dashed rgba(236, 72, 153, 0.3);
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 20px;
        }

        .shape-preview h6 {
          color: #ec4899;
          font-size: 14px;
          margin: 0 0 15px 0;
        }

        .preview-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 200px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 6px;
        }

        .preview-shape {
          border-radius: 4px;
        }

        .add-shape-btn {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.3), rgba(22, 163, 74, 0.3));
          border: 2px solid rgba(34, 197, 94, 0.5);
          border-radius: 8px;
          color: #22c55e;
          font-size: 15px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .add-shape-btn:hover {
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.5), rgba(22, 163, 74, 0.5));
          transform: scale(1.02);
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.5);
        }

        .annotation-tools {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 15px;
          margin-bottom: 20px;
        }

        .tool-group {
          background: rgba(236, 72, 153, 0.1);
          border: 2px solid rgba(236, 72, 153, 0.2);
          border-radius: 8px;
          padding: 15px;
        }

        .tool-group h5 {
          color: #ec4899;
          font-size: 14px;
          margin: 0 0 12px 0;
        }

        .tool-btn {
          display: block;
          width: 100%;
          padding: 10px;
          background: rgba(236, 72, 153, 0.1);
          border: 1px solid rgba(236, 72, 153, 0.3);
          border-radius: 6px;
          color: #ec4899;
          font-size: 13px;
          text-align: left;
          cursor: pointer;
          margin-bottom: 8px;
          transition: all 0.3s ease;
        }

        .tool-btn:last-child {
          margin-bottom: 0;
        }

        .tool-btn:hover {
          background: rgba(236, 72, 153, 0.2);
          transform: translateX(5px);
        }

        .annotation-preview,
        .graph-info,
        .example-functions,
        .template-features {
          background: rgba(0, 0, 0, 0.3);
          border: 2px solid rgba(236, 72, 153, 0.2);
          border-radius: 8px;
          padding: 15px;
          margin-top: 20px;
        }

        .annotation-preview h5,
        .graph-info h5,
        .example-functions h5,
        .template-features h5 {
          color: #ec4899;
          font-size: 14px;
          margin: 0 0 12px 0;
        }

        .preview-area {
          background: rgba(0, 0, 0, 0.3);
          border: 2px dashed rgba(16, 185, 129, 0.3);
          border-radius: 6px;
          padding: 40px;
          text-align: center;
          min-height: 200px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .preview-text {
          color: #9ca3af;
          font-size: 14px;
          margin: 0 0 10px 0;
        }

        .coming-soon-text {
          color: #10b981;
          font-size: 12px;
          font-style: italic;
          margin: 0;
        }

        .graph-info ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .graph-info li {
          color: #e5e7eb;
          font-size: 12px;
          margin-bottom: 8px;
          padding-left: 20px;
          position: relative;
        }

        .graph-info li:before {
          content: "•";
          color: #ec4899;
          position: absolute;
          left: 0;
          font-size: 16px;
        }

        .function-examples {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .function-examples code {
          padding: 8px 14px;
          background: rgba(59, 130, 246, 0.2);
          border: 1px solid rgba(59, 130, 246, 0.4);
          border-radius: 6px;
          color: #3b82f6;
          font-size: 13px;
          font-family: 'Courier New', monospace;
        }

        .use-template-btn {
          width: 100%;
          padding: 8px;
          background: rgba(34, 197, 94, 0.2);
          border: 1px solid rgba(34, 197, 94, 0.4);
          border-radius: 6px;
          color: #22c55e;
          font-size: 12px;
          font-weight: bold;
          cursor: pointer;
          margin-top: 10px;
          transition: all 0.3s ease;
        }

        .use-template-btn:hover {
          background: rgba(34, 197, 94, 0.3);
          transform: scale(1.05);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 10px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 6px;
          color: #e5e7eb;
          font-size: 12px;
        }

        .feature-icon {
          font-size: 20px;
          flex-shrink: 0;
        }

        @media (max-width: 1024px) {
          .config-grid {
            grid-template-columns: 1fr;
          }

          .annotation-tools {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .scrollable-content {
            padding: 15px;
          }

          .section-tabs {
            gap: 8px;
          }

          .section-tab {
            padding: 8px 14px;
            font-size: 12px;
          }

          .tab-icon {
            font-size: 16px;
          }

          .tab-label {
            font-size: 12px;
          }

          .shapes-grid,
          .graphs-grid,
          .templates-grid {
            grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
            gap: 10px;
          }

          .shape-icon,
          .graph-icon,
          .template-icon {
            font-size: 32px;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .function-examples {
            flex-direction: column;
          }

          .function-examples code {
            text-align: center;
          }
        }
      `}</style>
    </div>
  )
}
