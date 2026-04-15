'use client'

import { useState, useEffect } from 'react'
import HomeTab from './TabContent/HomeTab'
import FormulasTab from './TabContent/FormulasTab'
import InsertTab from './TabContent/InsertTab'
import DataTab from './TabContent/DataTab'
import ReviewTab from './TabContent/ReviewTab'
import DrawTab from './TabContent/DrawTab'
import ViewTab from './TabContent/ViewTab'
import DeveloperTab from './TabContent/DeveloperTab'
import ExportTab from './TabContent/ExportTab'
import HelpTab from './TabContent/HelpTab'
import AutomateTab from './TabContent/AutomateTab'
import QueryTab from './TabContent/QueryTab'
import GraphTab from './TabContent/GraphTab'

export default function RibbonDisplay({
  activeTab,
  ribbonClosed,
  onClose,
  onTabClick,
  workbookState,
  currentPNG,
  sessionManager
}) {
  const [isMinimized, setIsMinimized] = useState(false)

const tabs = [
  { id: 'home', label: 'Home', icon: '🏠', color: '#22c55e' },
  { id: 'insert', label: 'Insert', icon: '➕', color: '#3b82f6' },
  { id: 'formulas', label: 'Formulas', icon: '🧮', color: '#ef4444' },
  { id: 'data', label: 'Data', icon: '📊', color: '#a855f7' },
  { id: 'review', label: 'Review', icon: '📋', color: '#10b981' },
  { id: 'draw', label: 'Draw', icon: '✏️', color: '#ec4899' },
  { id: 'view', label: 'View', icon: '👁️', color: '#f97316' },
  { id: 'graph', label: 'Graph', icon: '📈', color: '#06b6d4' }, // NEW
  { id: 'developer', label: 'Developer', icon: '👨‍💻', color: '#facc15' },
  { id: 'export', label: 'Export', icon: '💾', color: '#14b8a6' },
  { id: 'help', label: 'Help', icon: '❓', color: '#8b5cf6' },
  { id: 'automate', label: 'Automate', icon: '⚡', color: '#f43f5e' },
  { id: 'query', label: 'Query', icon: '🔍', color: '#06b6d4' }
]
  // Handlers for tab actions
  const handleApplyFormula = async (targetCell, formulaKey, params) => {
    if (!sessionManager) return
    try {
      await sessionManager.applyFormula(targetCell, formulaKey, params)
    } catch (error) {
      console.error('Failed to apply formula:', error)
      throw error
    }
  }

  const handleAddVisualization = async (type, config) => {
  if (!sessionManager) return
  try {
    switch (type) {
      case 'charts':
        await sessionManager.addChart(config)
        break
      case 'anatomical':
        await sessionManager.addAnatomicalDiagram(config)
        break
      case 'crossSection':
        await sessionManager.addCrossSectionDiagram(config)
        break
      case 'stereochemistry':
        await sessionManager.addStereochemistryDiagram(config)
        break
      case 'chemistry':
        await sessionManager.addChemistryDiagram(config)
        break
      case 'physics':
        await sessionManager.addPhysicsDiagram(config)
        break
      case 'geometric':
        await sessionManager.addGeometricShape(config)
        break
      case 'graphs':
        await sessionManager.addGraph(config)
        break
      default:
        await sessionManager.addDiagram(type, config)
    }
  } catch (error) {
    console.error('Failed to add visualization:', error)
    throw error
  }
}

  const handleApplyStatistics = async (column, statType) => {
    if (!sessionManager) return
    console.log('Applying statistic:', statType, 'to column:', column)
  }

  const handleAddDrawing = async (drawingConfig) => {
    if (!sessionManager) return
    console.log('Adding drawing:', drawingConfig)
  }

  const handleExport = async (exportType, options) => {
    if (!sessionManager) return
    try {
      if (exportType.includes('png')) {
        await sessionManager.exportToPNG(options)
      } else if (exportType.includes('excel')) {
        await sessionManager.exportToExcel(options)
      }
    } catch (error) {
      console.error('Export failed:', error)
      throw error
    }
  }

  // Render active tab content
  const renderTabContent = () => {
    const commonProps = {
      workbookState,
      currentPNG,
      sessionManager
    }

    switch (activeTab) {
      case 'home':
        return <HomeTab {...commonProps} />

      case 'formulas':
        return <FormulasTab onApplyFormula={handleApplyFormula} />

      case 'insert':
        return <InsertTab 
          onAddVisualization={handleAddVisualization}
          sessionId={sessionManager?.getSessionId?.()} 
        />
      case 'data':
        return <DataTab
          workbookState={workbookState}
          sessionManager={sessionManager}
          onApplyStatistics={handleApplyStatistics}
          onModeChange={onModeChange}
      />

      case 'review':
        return <ReviewTab workbookState={workbookState} />

      case 'graph':
        return <GraphTab {...commonProps} />

      case 'draw':
        return <DrawTab onAddDrawing={handleAddDrawing} />

      case 'view':
        return <ViewTab workbookState={workbookState} />

      case 'developer':
        return <DeveloperTab workbookState={workbookState} />

      case 'export':
        return <ExportTab
          workbookState={workbookState}
          onExport={handleExport}
        />

      case 'help':
        return <HelpTab />

      case 'automate':
        return <AutomateTab />

      case 'query':
        return <QueryTab workbookState={workbookState} />

      default:
        return (
          <div className="no-tab-content">
            <p>Select a tab to view its content</p>
          </div>
        )
    }
  }

  if (ribbonClosed) return null

  return (
    <div className={`ribbon-display ${isMinimized ? 'minimized' : 'active'}`}>
      {/* Header */}
      <div className="ribbon-header">
        <h3 className="ribbon-title">
          {tabs.find(t => t.id === activeTab)?.icon || '📊'} Excel Interactive Session
        </h3>

        <div className="header-controls">
          <button
            className="minimize-btn"
            onClick={() => setIsMinimized(!isMinimized)}
            title={isMinimized ? 'Expand' : 'Minimize'}
          >
            {isMinimized ? '⬆️' : '⬇️'}
          </button>
          <button
            className="close-ribbon-btn"
            onClick={onClose}
            title="Close"
          >
            ×
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      {!isMinimized && (
        <>
          <div className="ribbon-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`ribbon-tab ${activeTab === tab.id ? 'active-tab' : ''}`}
                onClick={() => onTabClick(tab.id)}
                style={{
                  '--tab-color': tab.color
                }}
              >
                <span className="tab-icon">{tab.icon}</span>
                <span className="tab-label">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content Area */}
          <div className="ribbon-content-wrapper">
            {renderTabContent()}
          </div>
        </>
      )}

      <style jsx global>{`
        /* CRITICAL FIX: Override tab-content height constraints */
        .ribbon-content-wrapper .tab-content {
          height: auto !important;
          min-height: auto !important;
          max-height: none !important;
          overflow-y: visible !important;
          padding: 20px !important;
        }
      `}</style>

      <style jsx>{`
        .ribbon-display {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          z-index: 100;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          opacity: 0;
          transform: translateY(-100%);
          transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .ribbon-display.active {
          opacity: 1;
          transform: translateY(0);
        }

        .ribbon-display.minimized {
          height: 60px;
        }

        .ribbon-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 30px;
          background: rgba(0, 0, 0, 0.5);
          border-bottom: 2px solid rgba(59, 130, 246, 0.3);
          flex-shrink: 0;
        }

        .ribbon-title {
          color: #3b82f6;
          font-size: 20px;
          font-weight: bold;
          margin: 0;
        }

        .header-controls {
          display: flex;
          gap: 10px;
        }

        .minimize-btn,
        .close-ribbon-btn {
          width: 36px;
          height: 36px;
          background: rgba(59, 130, 246, 0.2);
          border: 2px solid rgba(59, 130, 246, 0.4);
          border-radius: 6px;
          color: #3b82f6;
          font-size: 18px;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .close-ribbon-btn {
          background: rgba(239, 68, 68, 0.2);
          border-color: rgba(239, 68, 68, 0.4);
          color: #ef4444;
          font-size: 24px;
        }

        .minimize-btn:hover {
          background: rgba(59, 130, 246, 0.4);
          transform: scale(1.1);
        }

        .close-ribbon-btn:hover {
          background: rgba(239, 68, 68, 0.4);
          transform: scale(1.1);
        }

        .ribbon-tabs {
          display: flex;
          gap: 4px;
          padding: 10px 20px;
          background: rgba(0, 0, 0, 0.3);
          border-bottom: 2px solid rgba(59, 130, 246, 0.2);
          overflow-x: auto;
          scrollbar-width: thin;
          flex-shrink: 0;
        }

        .ribbon-tabs::-webkit-scrollbar {
          height: 6px;
        }

        .ribbon-tabs::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
        }

        .ribbon-tabs::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.5);
          border-radius: 3px;
        }

        .ribbon-tab {
          padding: 10px 20px;
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px 8px 0 0;
          color: #9ca3af;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
          font-size: 13px;
          font-weight: 600;
        }

        .ribbon-tab:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--tab-color, rgba(59, 130, 246, 0.3));
          color: #e5e7eb;
          transform: translateY(-2px);
        }

        .ribbon-tab.active-tab {
          background: rgba(255, 255, 255, 0.15);
          border-color: var(--tab-color, #3b82f6);
          color: var(--tab-color, #3b82f6);
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
          transform: translateY(0);
        }

        .tab-icon {
          font-size: 16px;
        }

        .tab-label {
          font-weight: bold;
        }

        /* FIXED: Scrollable content wrapper */
        .ribbon-content-wrapper {
          flex: 1;
          background: rgba(0, 0, 0, 0.2);
          overflow-y: auto;
          overflow-x: hidden;
          padding-bottom: 80px;
        }

        /* Custom scrollbar */
        .ribbon-content-wrapper::-webkit-scrollbar {
          width: 12px;
        }

        .ribbon-content-wrapper::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.4);
        }

        .ribbon-content-wrapper::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.6);
          border-radius: 6px;
          border: 2px solid rgba(0, 0, 0, 0.4);
        }

        .ribbon-content-wrapper::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.8);
        }

        .no-tab-content {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 400px;
          color: #9ca3af;
          font-size: 16px;
        }

        @media (max-width: 1024px) {
          .ribbon-header {
            padding: 12px 20px;
          }

          .ribbon-title {
            font-size: 16px;
          }

          .ribbon-tabs {
            padding: 8px 15px;
            gap: 3px;
          }

          .ribbon-tab {
            padding: 8px 14px;
            font-size: 11px;
          }

          .tab-icon {
            font-size: 14px;
          }

          .minimize-btn,
          .close-ribbon-btn {
            width: 32px;
            height: 32px;
            font-size: 16px;
          }

          .close-ribbon-btn {
            font-size: 20px;
          }

          .ribbon-content-wrapper {
            padding-bottom: 60px;
          }
        }

        @media (max-width: 768px) {
          .ribbon-display.minimized {
            height: 50px;
          }

          .ribbon-header {
            padding: 10px 15px;
          }

          .ribbon-title {
            font-size: 14px;
          }

          .ribbon-tabs {
            padding: 6px 10px;
          }

          .ribbon-tab {
            padding: 6px 10px;
            font-size: 10px;
          }

          .tab-label {
            display: none;
          }

          .tab-icon {
            font-size: 18px;
          }

          .minimize-btn,
          .close-ribbon-btn {
            width: 28px;
            height: 28px;
            font-size: 14px;
          }

          .close-ribbon-btn {
            font-size: 18px;
          }

          .ribbon-content-wrapper {
            padding-bottom: 40px;
          }
        }
      `}</style>
    </div>
  )
}
