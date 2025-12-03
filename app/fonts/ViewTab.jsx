'use client'

import { useState, useEffect } from 'react'

export default function ViewTab({ workbookState }) {
  const [viewType, setViewType] = useState('all')
  const [visualizations, setVisualizations] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (workbookState) {
      loadVisualizations()
    }
  }, [workbookState, viewType])

  const loadVisualizations = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(`/api/workbook/render-visualizations?type=${viewType}`)
      const data = await response.json()
      setVisualizations(data)
    } catch (error) {
      console.error('Failed to load visualizations:', error)
      setVisualizations([])
    } finally {
      setIsLoading(false)
    }
  }

  const viewTypes = [
    { id: 'all', label: '🎨 All', icon: '🎨' },
    { id: 'charts', label: '📊 Charts', icon: '📊' },
    { id: 'anatomical', label: '🫀 Anatomical', icon: '🫀' },
    { id: 'crossSection', label: '🔬 Cross-Section', icon: '🔬' },
    { id: 'stereochemistry', label: '🧪 Molecules', icon: '🧪' }
  ]

  const handleDownload = async (viz) => {
    try {
      const response = await fetch(`/api/workbook/download-visualization/${viz.id}`)
      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = viz.filename
      a.click()
      URL.revokeObjectURL(url)
    } catch (error) {
      alert('Failed to download: ' + error.message)
    }
  }

  const handleDelete = async (viz) => {
    if (!confirm(`Delete ${viz.title}?`)) return

    try {
      await fetch(`/api/workbook/delete-visualization/${viz.id}`, {
        method: 'DELETE'
      })
      loadVisualizations()
    } catch (error) {
      alert('Failed to delete: ' + error.message)
    }
  }

  const openLightbox = (viz) => {
    setSelectedImage(viz)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const getVisualizationCount = (type) => {
    if (!workbookState) return 0
    if (type === 'all') {
      return workbookState.visualizations?.total || 0
    }
    return workbookState.visualizations?.[type] || 0
  }

  return (
    <div className="view-tab-wrapper">
      <div className="tab-header">
        <h3>👁️ View Visualizations</h3>
        <p className="subtitle">Browse and manage generated PNG images</p>
      </div>

      {/* View Type Filters */}
      <div className="view-filters">
        {viewTypes.map((type) => (
          <button
            key={type.id}
            className={`filter-btn ${viewType === type.id ? 'active' : ''}`}
            onClick={() => setViewType(type.id)}
          >
            <span className="filter-icon">{type.icon}</span>
            <span className="filter-label">{type.label}</span>
            <span className="filter-count">({getVisualizationCount(type.id)})</span>
          </button>
        ))}
      </div>

      {/* Visualizations Grid */}
      <div className="visualizations-container">
        {isLoading ? (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Loading visualizations...</p>
          </div>
        ) : visualizations.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">🎨</div>
            <h3>No Visualizations Yet</h3>
            <p>Create charts or diagrams in the Insert tab to see them here</p>
          </div>
        ) : (
          <div className="viz-grid">
            {visualizations.map((viz) => (
              <div key={viz.id} className="viz-card">
                <div className="viz-image" onClick={() => openLightbox(viz)}>
                  <img src={viz.thumbnailUrl || viz.url} alt={viz.title} />
                  <div className="viz-overlay">
                    <span className="zoom-icon">🔍</span>
                  </div>
                </div>

                <div className="viz-info">
                  <div className="viz-header">
                    <h4 className="viz-title">{viz.title}</h4>
                    <span className="viz-type-badge">{viz.type}</span>
                  </div>

                  {viz.formula && (
                    <div className="viz-formula">{viz.formula}</div>
                  )}

                  {viz.category && (
                    <div className="viz-category">{viz.category}</div>
                  )}

                  <div className="viz-meta">
                    <span className="viz-date">
                      {new Date(viz.createdAt).toLocaleDateString()}
                    </span>
                    <span className="viz-size">{viz.size}</span>
                  </div>

                  <div className="viz-actions">
                    <button
                      className="viz-action-btn download"
                      onClick={() => handleDownload(viz)}
                      title="Download"
                    >
                      💾
                    </button>
                    <button
                      className="viz-action-btn view"
                      onClick={() => openLightbox(viz)}
                      title="View Full Size"
                    >
                      🔍
                    </button>
                    <button
                      className="viz-action-btn delete"
                      onClick={() => handleDelete(viz)}
                      title="Delete"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>

            <div className="lightbox-header">
              <h3>{selectedImage.title}</h3>
              <div className="lightbox-meta">
                <span>{selectedImage.type}</span>
                {selectedImage.formula && <span>{selectedImage.formula}</span>}
              </div>
            </div>

            <div className="lightbox-image">
              <img src={selectedImage.url} alt={selectedImage.title} />
            </div>

            <div className="lightbox-actions">
              <button
                className="lightbox-btn download"
                onClick={() => handleDownload(selectedImage)}
              >
                💾 Download
              </button>
              <button
                className="lightbox-btn delete"
                onClick={() => {
                  handleDelete(selectedImage)
                  closeLightbox()
                }}
              >
                🗑️ Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .view-tab-wrapper {
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
          color: #f97316;
          font-size: 20px;
          margin: 0 0 5px 0;
        }

        .subtitle {
          color: #9ca3af;
          font-size: 13px;
          margin: 0;
        }

        .view-filters {
          flex-shrink: 0;
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 10px 18px;
          background: rgba(249, 115, 22, 0.1);
          border: 2px solid rgba(249, 115, 22, 0.2);
          border-radius: 8px;
          color: #f97316;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 13px;
        }

        .filter-btn:hover {
          background: rgba(249, 115, 22, 0.2);
          transform: translateY(-2px);
        }

        .filter-btn.active {
          background: rgba(249, 115, 22, 0.3);
          border-color: #f97316;
          box-shadow: 0 0 15px rgba(249, 115, 22, 0.4);
        }

        .filter-icon {
          font-size: 18px;
        }

        .filter-label {
          font-weight: bold;
        }

        .filter-count {
          color: #9ca3af;
          font-size: 12px;
        }

        .visualizations-container {
          flex: 1;
          overflow-y: auto;
          overflow-x: hidden;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 8px;
          padding: 15px;
          min-height: 0;
        }

        .visualizations-container::-webkit-scrollbar {
          width: 8px;
        }

        .visualizations-container::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 4px;
        }

        .visualizations-container::-webkit-scrollbar-thumb {
          background: rgba(249, 115, 22, 0.5);
          border-radius: 4px;
        }

        .visualizations-container::-webkit-scrollbar-thumb:hover {
          background: rgba(249, 115, 22, 0.7);
        }

        .loading-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: #9ca3af;
        }

        .spinner {
          width: 50px;
          height: 50px;
          border: 4px solid rgba(249, 115, 22, 0.3);
          border-top-color: #f97316;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 20px;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .loading-state p {
          margin: 0;
        }

        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          text-align: center;
          padding: 40px;
        }

        .empty-icon {
          font-size: 80px;
          margin-bottom: 20px;
          opacity: 0.5;
        }

        .empty-state h3 {
          color: #f97316;
          font-size: 24px;
          margin: 0 0 10px 0;
        }

        .empty-state p {
          color: #9ca3af;
          font-size: 14px;
          margin: 0;
        }

        .viz-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
          padding-bottom: 20px;
        }

        .viz-card {
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(249, 115, 22, 0.2);
          border-radius: 10px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .viz-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(249, 115, 22, 0.3);
          border-color: #f97316;
        }

        .viz-image {
          position: relative;
          width: 100%;
          height: 200px;
          background: rgba(0, 0, 0, 0.3);
          cursor: pointer;
          overflow: hidden;
        }

        .viz-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .viz-card:hover .viz-image img {
          transform: scale(1.05);
        }

        .viz-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .viz-image:hover .viz-overlay {
          opacity: 1;
        }

        .zoom-icon {
          font-size: 40px;
        }

        .viz-info {
          padding: 15px;
        }

        .viz-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 10px;
        }

        .viz-title {
          color: #f97316;
          font-size: 15px;
          font-weight: bold;
          flex: 1;
          line-height: 1.3;
          margin: 0;
        }

        .viz-type-badge {
          padding: 4px 10px;
          background: rgba(59, 130, 246, 0.2);
          border: 1px solid rgba(59, 130, 246, 0.4);
          border-radius: 12px;
          color: #3b82f6;
          font-size: 10px;
          font-weight: bold;
          text-transform: uppercase;
          white-space: nowrap;
          margin-left: 10px;
          flex-shrink: 0;
        }

        .viz-formula {
          color: #22c55e;
          font-size: 12px;
          font-family: 'Courier New', monospace;
          margin-bottom: 6px;
        }

        .viz-category {
          color: #a855f7;
          font-size: 12px;
          margin-bottom: 8px;
        }

        .viz-meta {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          color: #9ca3af;
          margin-bottom: 12px;
          padding-top: 8px;
          border-top: 1px solid rgba(249, 115, 22, 0.2);
        }

        .viz-actions {
          display: flex;
          gap: 8px;
        }

        .viz-action-btn {
          flex: 1;
          padding: 8px;
          background: rgba(249, 115, 22, 0.1);
          border: 1px solid rgba(249, 115, 22, 0.3);
          border-radius: 6px;
          color: #f97316;
          cursor: pointer;
          font-size: 16px;
          transition: all 0.3s ease;
        }

        .viz-action-btn:hover {
          background: rgba(249, 115, 22, 0.2);
          transform: translateY(-2px);
        }

        .viz-action-btn.delete:hover {
          background: rgba(239, 68, 68, 0.2);
          border-color: rgba(239, 68, 68, 0.4);
          color: #ef4444;
        }

        .lightbox {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }

        .lightbox-content {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          border: 2px solid rgba(249, 115, 22, 0.5);
          border-radius: 12px;
          max-width: 1200px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
        }

        .lightbox-content::-webkit-scrollbar {
          width: 8px;
        }

        .lightbox-content::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
        }

        .lightbox-content::-webkit-scrollbar-thumb {
          background: rgba(249, 115, 22, 0.5);
          border-radius: 4px;
        }

        .lightbox-close {
          position: absolute;
          top: 15px;
          right: 15px;
          width: 40px;
          height: 40px;
          background: rgba(239, 68, 68, 0.3);
          border: 2px solid rgba(239, 68, 68, 0.5);
          border-radius: 50%;
          color: #ef4444;
          font-size: 24px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transition: all 0.3s ease;
        }

        .lightbox-close:hover {
          background: rgba(239, 68, 68, 0.5);
          transform: scale(1.1);
        }

        .lightbox-header {
          padding: 20px 60px 20px 20px;
          border-bottom: 2px solid rgba(249, 115, 22, 0.3);
        }

        .lightbox-header h3 {
          color: #f97316;
          font-size: 22px;
          margin: 0 0 8px 0;
        }

        .lightbox-meta {
          display: flex;
          gap: 15px;
          font-size: 13px;
        }

        .lightbox-meta span {
          color: #9ca3af;
        }

        .lightbox-image {
          padding: 20px;
          text-align: center;
          background: rgba(0, 0, 0, 0.3);
        }

        .lightbox-image img {
          max-width: 100%;
          max-height: 70vh;
          border-radius: 8px;
          border: 1px solid rgba(249, 115, 22, 0.3);
        }

        .lightbox-actions {
          padding: 20px;
          display: flex;
          gap: 15px;
          justify-content: center;
        }

        .lightbox-btn {
          padding: 12px 30px;
          background: rgba(249, 115, 22, 0.2);
          border: 2px solid rgba(249, 115, 22, 0.4);
          border-radius: 8px;
          color: #f97316;
          font-size: 14px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .lightbox-btn:hover {
          background: rgba(249, 115, 22, 0.3);
          transform: scale(1.05);
        }

        .lightbox-btn.delete {
          background: rgba(239, 68, 68, 0.2);
          border-color: rgba(239, 68, 68, 0.4);
          color: #ef4444;
        }

        .lightbox-btn.delete:hover {
          background: rgba(239, 68, 68, 0.3);
        }

        @media (max-width: 1024px) {
          .viz-grid {
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .view-tab-wrapper {
            padding: 15px;
          }

          .tab-header h3 {
            font-size: 18px;
          }

          .view-filters {
            gap: 8px;
          }

          .filter-btn {
            padding: 8px 12px;
            font-size: 12px;
          }

          .filter-icon {
            font-size: 16px;
          }

          .viz-grid {
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 15px;
          }

          .viz-image {
            height: 160px;
          }

          .lightbox-content {
            max-width: 100%;
          }

          .lightbox-header {
            padding: 15px 50px 15px 15px;
          }

          .lightbox-header h3 {
            font-size: 18px;
          }

          .lightbox-actions {
            flex-direction: column;
          }

          .lightbox-btn {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .viz-grid {
            grid-template-columns: 1fr;
          }

          .viz-header {
            flex-direction: column;
            gap: 8px;
          }

          .viz-type-badge {
            margin-left: 0;
            align-self: flex-start;
          }
        }
      `}</style>
    </div>
  )
}

