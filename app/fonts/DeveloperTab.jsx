'use client'

import { useState } from 'react'

export default function DeveloperTab({ workbookState }) {
  const [activeSection, setActiveSection] = useState('api')

  const sections = [
    { id: 'api', label: '🔌 API Access', icon: '🔌' },
    { id: 'formulas', label: '⚙️ Custom Formulas', icon: '⚙️' },
    { id: 'automation', label: '🤖 Automation', icon: '🤖' },
    { id: 'debug', label: '🐛 Debug Info', icon: '🐛' }
  ]

  return (
    <div className="developer-tab-wrapper">
      <div className="scrollable-content">
        <div className="tab-header">
          <h3>👨‍💻 Developer Tools</h3>
          <p className="subtitle">Advanced features for developers and power users</p>
        </div>

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

        <div className="content-wrapper">
          <div className="section-content">
            {activeSection === 'api' && (
              <div className="api-section">
                <h4>🔌 API Access</h4>
                <p className="section-desc">Access workbook data programmatically</p>

                <div className="code-block">
                  <div className="code-header">
                    <span>JavaScript API</span>
                    <button className="copy-code-btn">📋 Copy</button>
                  </div>
                  <pre>{`// Access session manager
const manager = window.sessionManager;

// Get current state
const state = manager.getState();

// Apply formula
await manager.applyFormula('D2', 'sum', ['B2:B10']);

// Add chart
await manager.addChart({
  key: 'columnChart',
  title: 'My Chart',
  data: { /* chart data */ }
});

// Export
await manager.exportToPNG();`}</pre>
                </div>

                <div className="api-endpoints">
                  <h5>Available API Endpoints:</h5>
                  <div className="endpoint">
                    <span className="method">GET</span>
                    <code>/api/workbook/formulas</code>
                    <span className="desc">Get available formulas</span>
                  </div>
                  <div className="endpoint">
                    <span className="method">POST</span>
                    <code>/api/workbook/generate-png</code>
                    <span className="desc">Generate PNG export</span>
                  </div>
                  <div className="endpoint">
                    <span className="method">POST</span>
                    <code>/api/workbook/export-excel</code>
                    <span className="desc">Export to Excel</span>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'formulas' && (
              <div className="formulas-section">
                <h4>⚙️ Custom Formula Development</h4>
                <p className="section-desc">Create and register custom formulas</p>

                <div className="code-block">
                  <div className="code-header">
                    <span>Custom Formula Template</span>
                  </div>
                  <pre>{`// Register custom formula
SpreadsheetFormulaRegistry.register({
  key: 'myCustomFormula',
  name: 'My Custom Formula',
  category: 'Custom',
  description: 'Does something awesome',
  params: ['range'],
  calculate: (range) => {
    // Your logic here
    return result;
  }
});`}</pre>
                </div>

                <div className="info-card">
                  <h5>📚 Formula Development Guide</h5>
                  <ul>
                    <li>Define clear parameter names</li>
                    <li>Handle edge cases and errors</li>
                    <li>Provide meaningful descriptions</li>
                    <li>Test with various data types</li>
                    <li>Document expected inputs/outputs</li>
                  </ul>
                </div>
              </div>
            )}

            {activeSection === 'automation' && (
              <div className="automation-section">
                <h4>🤖 Workflow Automation</h4>
                <p className="section-desc">Automate repetitive tasks with scripts</p>

                <div className="code-block">
                  <div className="code-header">
                    <span>Automation Script Example</span>
                  </div>
                  <pre>{`// Automated workflow
async function processWorkbook() {
  // 1. Load data
  await manager.loadData(myData);

  // 2. Apply formulas
  await manager.applyFormula('D2:D10', 'sum', ['B2:B10']);

  // 3. Create visualizations
  await manager.addChart({
    key: 'columnChart',
    title: 'Sales Report'
  });

  // 4. Export
  await manager.exportToExcel({
    includeCharts: true
  });
}

// Run automation
processWorkbook();`}</pre>
                </div>

                <div className="automation-triggers">
                  <h5>🎯 Automation Triggers:</h5>
                  <div className="trigger-item">
                    <span className="trigger-icon">⏰</span>
                    <span className="trigger-label">Scheduled (Coming Soon)</span>
                  </div>
                  <div className="trigger-item">
                    <span className="trigger-icon">📥</span>
                    <span className="trigger-label">On Data Load</span>
                  </div>
                  <div className="trigger-item">
                    <span className="trigger-icon">🔄</span>
                    <span className="trigger-label">On Data Update</span>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'debug' && (
              <div className="debug-section">
                <h4>🐛 Debug Information</h4>
                <p className="section-desc">View internal workbook state</p>

                {workbookState ? (
                  <div className="debug-data">
                    <div className="debug-card">
                      <h5>📊 Workbook State</h5>
                      <pre>{JSON.stringify(workbookState, null, 2)}</pre>
                    </div>

                    <div className="debug-stats">
                      <div className="stat-item">
                        <span className="stat-label">Data Rows:</span>
                        <span className="stat-value">{workbookState.data?.length || 0}</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">Headers:</span>
                        <span className="stat-value">{workbookState.headers?.length || 0}</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">Formulas:</span>
                        <span className="stat-value">{workbookState.formulas || 0}</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">Total Visualizations:</span>
                        <span className="stat-value">{workbookState.visualizations?.total || 0}</span>
                      </div>
                    </div>

                    <button className="export-debug-btn">
                      💾 Export Debug Info
                    </button>
                  </div>
                ) : (
                  <div className="empty-state">
                    <p>No workbook loaded. Load data to see debug information.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .developer-tab-wrapper {
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
          background: rgba(250, 204, 21, 0.5);
          border-radius: 5px;
        }

        .scrollable-content::-webkit-scrollbar-thumb:hover {
          background: rgba(250, 204, 21, 0.7);
        }

        .tab-header {
          margin-bottom: 20px;
        }

        .tab-header h3 {
          color: #facc15;
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
          padding: 10px 20px;
          background: rgba(250, 204, 21, 0.1);
          border: 2px solid rgba(250, 204, 21, 0.2);
          border-radius: 8px;
          color: #facc15;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .section-tab:hover {
          background: rgba(250, 204, 21, 0.2);
          transform: translateY(-2px);
        }

        .section-tab.active {
          background: rgba(250, 204, 21, 0.3);
          border-color: #facc15;
          box-shadow: 0 0 15px rgba(250, 204, 21, 0.4);
        }

        .tab-icon {
          font-size: 18px;
        }

        .tab-label {
          font-weight: bold;
          font-size: 14px;
        }

        .content-wrapper {
          display: flex;
          flex-direction: column;
        }

        .section-content {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          padding: 20px;
        }

        .section-content h4 {
          color: #facc15;
          font-size: 18px;
          margin: 0 0 8px 0;
        }

        .section-desc {
          color: #9ca3af;
          font-size: 13px;
          margin: 0 0 20px 0;
        }

        .code-block {
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(250, 204, 21, 0.3);
          border-radius: 8px;
          margin-bottom: 20px;
          overflow: hidden;
        }

        .code-header {
          padding: 10px 15px;
          background: rgba(250, 204, 21, 0.1);
          border-bottom: 1px solid rgba(250, 204, 21, 0.3);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 13px;
          color: #facc15;
          font-weight: bold;
        }

        .copy-code-btn {
          padding: 4px 10px;
          background: rgba(59, 130, 246, 0.2);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 4px;
          color: #3b82f6;
          cursor: pointer;
          font-size: 11px;
          transition: all 0.2s ease;
        }

        .copy-code-btn:hover {
          background: rgba(59, 130, 246, 0.3);
        }

        pre {
          padding: 15px;
          margin: 0;
          color: #22c55e;
          font-family: 'Courier New', monospace;
          font-size: 12px;
          line-height: 1.6;
          overflow-x: auto;
        }

        pre::-webkit-scrollbar {
          height: 6px;
        }

        pre::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
        }

        pre::-webkit-scrollbar-thumb {
          background: rgba(34, 197, 94, 0.5);
          border-radius: 3px;
        }

        .api-endpoints {
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 8px;
          padding: 15px;
        }

        .api-endpoints h5 {
          color: #3b82f6;
          font-size: 14px;
          margin: 0 0 12px 0;
        }

        .endpoint {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 6px;
          margin-bottom: 8px;
        }

        .endpoint:last-child {
          margin-bottom: 0;
        }

        .method {
          padding: 4px 10px;
          background: rgba(34, 197, 94, 0.2);
          border: 1px solid rgba(34, 197, 94, 0.4);
          border-radius: 4px;
          color: #22c55e;
          font-size: 11px;
          font-weight: bold;
          flex-shrink: 0;
        }

        .endpoint code {
          flex: 1;
          color: #3b82f6;
          font-family: 'Courier New', monospace;
          font-size: 12px;
        }

        .endpoint .desc {
          color: #9ca3af;
          font-size: 11px;
          flex-shrink: 0;
        }

        .info-card {
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: 8px;
          padding: 15px;
          margin-top: 20px;
        }

        .info-card h5 {
          color: #10b981;
          font-size: 14px;
          margin: 0 0 10px 0;
        }

        .info-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .info-card li {
          color: #e5e7eb;
          font-size: 12px;
          margin-bottom: 6px;
          padding-left: 18px;
          position: relative;
        }

        .info-card li:last-child {
          margin-bottom: 0;
        }

        .info-card li:before {
          content: "•";
          color: #10b981;
          position: absolute;
          left: 0;
        }

        .automation-triggers {
          background: rgba(168, 85, 247, 0.1);
          border: 1px solid rgba(168, 85, 247, 0.3);
          border-radius: 8px;
          padding: 15px;
          margin-top: 20px;
        }

        .automation-triggers h5 {
          color: #a855f7;
          font-size: 14px;
          margin: 0 0 12px 0;
        }

        .trigger-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 6px;
          margin-bottom: 8px;
        }

        .trigger-item:last-child {
          margin-bottom: 0;
        }

        .trigger-icon {
          font-size: 24px;
          flex-shrink: 0;
        }

        .trigger-label {
          color: #e5e7eb;
          font-size: 13px;
        }

        .debug-data {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .debug-card {
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(250, 204, 21, 0.3);
          border-radius: 8px;
          padding: 15px;
          max-height: 400px;
          overflow-y: auto;
        }

        .debug-card::-webkit-scrollbar {
          width: 8px;
        }

        .debug-card::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 4px;
        }

        .debug-card::-webkit-scrollbar-thumb {
          background: rgba(250, 204, 21, 0.5);
          border-radius: 4px;
        }

        .debug-card h5 {
          color: #facc15;
          font-size: 14px;
          margin: 0 0 10px 0;
        }

        .debug-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 12px;
        }

        .stat-item {
          padding: 12px;
          background: rgba(250, 204, 21, 0.1);
          border: 1px solid rgba(250, 204, 21, 0.3);
          border-radius: 6px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .stat-label {
          color: #facc15;
          font-size: 12px;
          font-weight: bold;
        }

        .stat-value {
          color: #e5e7eb;
          font-size: 18px;
          font-weight: bold;
        }

        .export-debug-btn {
          width: 100%;
          padding: 12px;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(37, 99, 235, 0.3));
          border: 2px solid rgba(59, 130, 246, 0.5);
          border-radius: 8px;
          color: #3b82f6;
          font-size: 14px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .export-debug-btn:hover {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.5), rgba(37, 99, 235, 0.5));
          transform: scale(1.02);
        }

        .empty-state {
          text-align: center;
          padding: 40px;
          color: #9ca3af;
        }

        .empty-state p {
          margin: 0;
        }

        @media (max-width: 1024px) {
          .debug-stats {
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          }

          .endpoint {
            flex-wrap: wrap;
          }
        }

        @media (max-width: 768px) {
          .scrollable-content {
            padding: 15px;
          }

          .tab-header h3 {
            font-size: 18px;
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

          .section-content {
            padding: 15px;
          }

          pre {
            font-size: 10px;
          }

          .debug-stats {
            grid-template-columns: 1fr;
          }

          .endpoint {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 480px) {
          .code-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }

          .copy-code-btn {
            align-self: flex-end;
          }
        }
      `}</style>
    </div>
  )
}
