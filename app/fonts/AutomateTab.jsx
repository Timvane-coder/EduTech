'use client'

import { useState } from 'react'

export default function AutomateTab() {
  const [workflows, setWorkflows] = useState([])
  const [showCreateModal, setShowCreateModal] = useState(false)

  const workflowTemplates = [
    {
      id: 'monthly-report',
      name: 'Monthly Report Generator',
      description: 'Automatically generate monthly sales reports with charts',
      icon: '📊',
      steps: ['Load data', 'Apply formulas', 'Create charts', 'Export to PDF']
    },
    {
      id: 'data-cleanup',
      name: 'Data Cleanup Workflow',
      description: 'Clean and format imported data automatically',
      icon: '🧹',
      steps: ['Remove duplicates', 'Format dates', 'Calculate totals', 'Save']
    },
    {
      id: 'dashboard-update',
      name: 'Dashboard Auto-Update',
      description: 'Update dashboard visualizations on schedule',
      icon: '📈',
      steps: ['Fetch new data', 'Update charts', 'Refresh diagrams', 'Notify']
    },
    {
      id: 'export-batch',
      name: 'Batch Export',
      description: 'Export multiple formats simultaneously',
      icon: '💾',
      steps: ['Export PNG', 'Export Excel', 'Export visualizations', 'Archive']
    }
  ]

  return (
    <div className="automate-tab-wrapper">
      <div className="scrollable-content">
        <div className="tab-header">
          <h3>⚡ Workflow Automation</h3>
          <p className="subtitle">Automate repetitive tasks and create custom workflows</p>
        </div>

        {/* Action Bar */}
        <div className="action-bar">
          <button
            className="create-workflow-btn"
            onClick={() => setShowCreateModal(true)}
          >
            ➕ Create New Workflow
          </button>
          <button className="import-workflow-btn">
            📥 Import Workflow
          </button>
        </div>

        <div className="content-wrapper">
          {/* Workflow Templates */}
          <div className="section">
            <h4>📋 Workflow Templates</h4>
            <p className="section-desc">Start with pre-built automation templates</p>

            <div className="templates-grid">
              {workflowTemplates.map((template) => (
                <div key={template.id} className="template-card">
                  <div className="template-icon">{template.icon}</div>
                  <h5 className="template-name">{template.name}</h5>
                  <p className="template-desc">{template.description}</p>

                  <div className="template-steps">
                    <div className="steps-label">Steps:</div>
                    {template.steps.map((step, index) => (
                      <div key={index} className="step-item">
                        <span className="step-number">{index + 1}</span>
                        <span className="step-text">{step}</span>
                      </div>
                    ))}
                  </div>

                  <button className="use-template-btn">
                    ⚡ Use This Template
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* My Workflows */}
          <div className="section">
            <h4>🗂️ My Workflows</h4>

            {workflows.length === 0 ? (
              <div className="empty-workflows">
                <div className="empty-icon">⚡</div>
                <h5>No Workflows Yet</h5>
                <p>Create your first automation workflow to get started</p>
              </div>
            ) : (
              <div className="workflows-list">
                {workflows.map((workflow) => (
                  <div key={workflow.id} className="workflow-item">
                    <div className="workflow-info">
                      <h5>{workflow.name}</h5>
                      <p>{workflow.description}</p>
                    </div>
                    <div className="workflow-actions">
                      <button className="run-btn">▶️ Run</button>
                      <button className="edit-btn">✏️ Edit</button>
                      <button className="delete-btn">🗑️</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Automation Features */}
          <div className="features-section">
            <h4>✨ Automation Features</h4>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🔄</div>
                <h5>Scheduled Tasks</h5>
                <p>Run workflows automatically on schedule</p>
                <span className="badge coming-soon">Coming Soon</span>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h5>Triggers</h5>
                <p>Start workflows on specific events</p>
                <span className="badge coming-soon">Coming Soon</span>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔔</div>
                <h5>Notifications</h5>
                <p>Get alerts when workflows complete</p>
                <span className="badge coming-soon">Coming Soon</span>
              </div>
              <div className="feature-card active">
                <div className="feature-icon">📝</div>
                <h5>Custom Scripts</h5>
                <p>Write JavaScript automation scripts</p>
                <span className="badge available">Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .automate-tab-wrapper {
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
          background: rgba(244, 63, 94, 0.5);
          border-radius: 5px;
        }

        .scrollable-content::-webkit-scrollbar-thumb:hover {
          background: rgba(244, 63, 94, 0.7);
        }

        .tab-header {
          margin-bottom: 20px;
        }

        .tab-header h3 {
          color: #f43f5e;
          font-size: 20px;
          margin: 0 0 5px 0;
        }

        .subtitle {
          color: #9ca3af;
          font-size: 13px;
          margin: 0;
        }

        .action-bar {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .create-workflow-btn,
        .import-workflow-btn {
          padding: 12px 24px;
          background: linear-gradient(135deg, rgba(244, 63, 94, 0.3), rgba(225, 29, 72, 0.3));
          border: 2px solid rgba(244, 63, 94, 0.5);
          border-radius: 8px;
          color: #f43f5e;
          font-size: 14px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .create-workflow-btn:hover,
        .import-workflow-btn:hover {
          background: linear-gradient(135deg, rgba(244, 63, 94, 0.5), rgba(225, 29, 72, 0.5));
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(244, 63, 94, 0.4);
        }

        .content-wrapper {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .section {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          padding: 20px;
        }

        .section h4 {
          color: #f43f5e;
          font-size: 18px;
          margin: 0 0 8px 0;
        }

        .section-desc {
          color: #9ca3af;
          font-size: 13px;
          margin: 0 0 20px 0;
        }

        .templates-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }

        .template-card {
          padding: 20px;
          background: rgba(244, 63, 94, 0.1);
          border: 2px solid rgba(244, 63, 94, 0.2);
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .template-card:hover {
          background: rgba(244, 63, 94, 0.15);
          border-color: rgba(244, 63, 94, 0.4);
          transform: translateY(-4px);
          box-shadow: 0 6px 16px rgba(244, 63, 94, 0.3);
        }

        .template-icon {
          font-size: 48px;
          text-align: center;
          margin-bottom: 15px;
        }

        .template-name {
          color: #f43f5e;
          font-size: 16px;
          font-weight: bold;
          margin: 0 0 8px 0;
          text-align: center;
        }

        .template-desc {
          color: #9ca3af;
          font-size: 13px;
          text-align: center;
          margin: 0 0 15px 0;
          line-height: 1.5;
        }

        .template-steps {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 6px;
          padding: 12px;
          margin-bottom: 15px;
        }

        .steps-label {
          color: #3b82f6;
          font-size: 12px;
          font-weight: bold;
          margin-bottom: 8px;
        }

        .step-item {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 6px;
        }

        .step-item:last-child {
          margin-bottom: 0;
        }

        .step-number {
          width: 24px;
          height: 24px;
          background: rgba(59, 130, 246, 0.2);
          border: 1px solid rgba(59, 130, 246, 0.4);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3b82f6;
          font-size: 11px;
          font-weight: bold;
          flex-shrink: 0;
        }

        .step-text {
          color: #e5e7eb;
          font-size: 12px;
        }

        .use-template-btn {
          width: 100%;
          padding: 10px;
          background: rgba(34, 197, 94, 0.2);
          border: 2px solid rgba(34, 197, 94, 0.4);
          border-radius: 6px;
          color: #22c55e;
          font-size: 13px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .use-template-btn:hover {
          background: rgba(34, 197, 94, 0.3);
          transform: scale(1.02);
        }

        .empty-workflows {
          text-align: center;
          padding: 60px 20px;
        }

        .empty-icon {
          font-size: 80px;
          margin-bottom: 20px;
          opacity: 0.5;
        }

        .empty-workflows h5 {
          color: #f43f5e;
          font-size: 20px;
          margin: 0 0 10px 0;
        }

        .empty-workflows p {
          color: #9ca3af;
          font-size: 14px;
          margin: 0;
        }

        .workflows-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .workflow-item {
          padding: 15px;
          background: rgba(244, 63, 94, 0.1);
          border: 1px solid rgba(244, 63, 94, 0.2);
          border-radius: 8px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .workflow-info h5 {
          color: #f43f5e;
          font-size: 15px;
          margin: 0 0 4px 0;
        }

        .workflow-info p {
          color: #9ca3af;
          font-size: 12px;
          margin: 0;
        }

        .workflow-actions {
          display: flex;
          gap: 8px;
          flex-shrink: 0;
        }

        .run-btn,
        .edit-btn,
        .delete-btn {
          padding: 8px 14px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 6px;
          cursor: pointer;
          font-size: 12px;
          transition: all 0.3s ease;
        }

        .run-btn {
          background: rgba(34, 197, 94, 0.2);
          color: #22c55e;
        }

        .edit-btn {
          background: rgba(59, 130, 246, 0.2);
          color: #3b82f6;
        }

        .delete-btn {
          background: rgba(239, 68, 68, 0.2);
          color: #ef4444;
        }

        .run-btn:hover,
        .edit-btn:hover,
        .delete-btn:hover {
          transform: scale(1.05);
        }

        .features-section {
          background: rgba(59, 130, 246, 0.05);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 10px;
          padding: 20px;
        }

        .features-section h4 {
          color: #3b82f6;
          font-size: 18px;
          margin: 0 0 20px 0;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 15px;
        }

        .feature-card {
          padding: 20px;
          background: rgba(59, 130, 246, 0.1);
          border: 2px solid rgba(59, 130, 246, 0.2);
          border-radius: 8px;
          text-align: center;
          position: relative;
        }

        .feature-card.active {
          background: rgba(34, 197, 94, 0.1);
          border-color: rgba(34, 197, 94, 0.3);
        }

        .feature-icon {
          font-size: 40px;
          margin-bottom: 12px;
        }

        .feature-card h5 {
          color: #3b82f6;
          font-size: 15px;
          margin: 0 0 8px 0;
        }

        .feature-card.active h5 {
          color: #22c55e;
        }

        .feature-card p {
          color: #9ca3af;
          font-size: 12px;
          margin: 0 0 12px 0;
        }

        .badge {
          padding: 4px 10px;
          border-radius: 12px;
          font-size: 10px;
          font-weight: bold;
          text-transform: uppercase;
        }

        .badge.coming-soon {
          background: rgba(245, 158, 11, 0.2);
          color: #f59e0b;
          border: 1px solid rgba(245, 158, 11, 0.4);
        }

        .badge.available {
          background: rgba(34, 197, 94, 0.2);
          color: #22c55e;
          border: 1px solid rgba(34, 197, 94, 0.4);
        }

        @media (max-width: 1024px) {
          .templates-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          }

          .features-grid {
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

          .action-bar {
            flex-direction: column;
          }

          .create-workflow-btn,
          .import-workflow-btn {
            width: 100%;
          }

          .templates-grid,
          .features-grid {
            grid-template-columns: 1fr;
          }

          .workflow-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .workflow-actions {
            width: 100%;
            justify-content: space-between;
          }
        }

        @media (max-width: 480px) {
          .section {
            padding: 15px;
          }

          .template-card {
            padding: 15px;
          }

          .template-icon {
            font-size: 40px;
          }

          .feature-icon {
            font-size: 32px;
          }
        }
      `}</style>
    </div>
  )
}

