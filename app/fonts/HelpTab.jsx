'use client'

import { useState } from 'react'

export default function HelpTab() {
  const [activeCategory, setActiveCategory] = useState('getting-started')
  const [searchQuery, setSearchQuery] = useState('')

  const helpCategories = [
    { id: 'getting-started', label: '🚀 Getting Started', icon: '🚀' },
    { id: 'formulas', label: '🧮 Formulas', icon: '🧮' },
    { id: 'visualizations', label: '📊 Visualizations', icon: ' 📊' },
    { id: 'export', label: '💾 Export', icon: '💾' },
    { id: 'faq', label: '❓ FAQ', icon: '❓' }
  ]

  const helpContent = {
    'getting-started': {
      title: '🚀 Getting Started',
      sections: [
        {
          title: 'Welcome to Excel Interactive Session',
          content: `This is a comprehensive educational tool for learning Excel concepts through an interactive web interface.
          You can load data, apply formulas, create visualizations, and export your work.`
        },
        {
          title: 'Loading Data',
          content: `1. Click the input box at the top
2. Choose from three options:
   • Sample Data - Pre-loaded sales data
   • Custom Data - Enter your own data
   • Paste Data - Copy from Excel/CSV
3. Press Enter to start your session`,
          steps: true
        },
        {
          title: 'Navigating Tabs',
          content: `• Home - View current spreadsheet state
• Formulas - Apply calculations
• Insert - Add charts and diagrams
• Review - Cell references guide
• View - Browse visualizations
• Export - Save your work`,
          steps: true
        }
      ]
    },
    'formulas': {
      title: '🧮 Formula Guide',
      sections: [
        {
          title: 'Applying Formulas',
          content: `1. Go to the Formulas tab
2. Select a category (Math, Statistical, etc.)
3. Choose a formula from the list
4. Enter target cell (e.g., D2 or D2:D8)
5. Provide parameters (cell ranges or values)
6. Click Apply Formula`,
          steps: true
        },
        {
          title: 'Common Formulas',
          examples: [
            { formula: 'SUM', usage: '=SUM(A2:A10)', description: 'Add up values in a range' },
            { formula: 'AVERAGE', usage: '=AVERAGE(B2:B10)', description: 'Calculate mean value' },
            { formula: 'MAX', usage: '=MAX(C2:C10)', description: 'Find highest value' },
            { formula: 'IF', usage: '=IF(D2>100,"High","Low")', description: 'Conditional logic' }
          ]
        },
        {
          title: 'Cell References',
          content: `• Single cell: A1, B2, C3
• Range: A1:A10, B2:D5
• Entire column: A:A
• Entire row: 1:1
• Use the Review tab for quick reference!`
        }
      ]
    },
    'visualizations': {
      title: '📊 Visualizations Guide',
      sections: [
        {
          title: 'Creating Charts',
          content: `1. Go to Insert tab
2. Select 📊 Charts category
3. Choose chart type (Column, Pie, Line, etc.)
4. Configure options (title, size)
5. Click Insert into Workbook`,
          steps: true
        },
        {
          title: 'Anatomical Diagrams',
          content: `Add scientific anatomical diagrams:
• Heart Anatomy
• Circulatory System
• Respiratory System
• Skeletal System
• And more...`,
          steps: true
        },
        {
          title: 'Molecular Structures',
          content: `Add chemistry molecular diagrams:
• Methane, Ethane, Water
• Glucose, Amino Acids
• View 3D models and bond angles
• Perfect for chemistry education`
        },
        {
          title: 'Viewing Visualizations',
          content: `Go to View tab to:
• Browse all created visualizations
• Download individual images
• View full-size preview
• Delete unwanted items`
        }
      ]
    },
    'export': {
      title: '💾 Export Options',
      sections: [
        {
          title: 'Export Formats',
          content: `Available export options:
• PNG - Spreadsheet only
• PNG - With visualizations
• Excel - Spreadsheet only
• Excel - With visualizations
• Separate visualization files
• Complete package (all formats)`,
          steps: true
        },
        {
          title: 'Exporting Your Work',
          content: `1. Go to Export tab
2. Select export format
3. Configure visualization options
4. Review export summary
5. Click Export button
6. File will download automatically`,
          steps: true
        }
      ]
    },
    'faq': {
      title: '❓ Frequently Asked Questions',
      sections: [
        {
          title: 'How do I save my work?',
          content: `Use the Export tab to save your workbook as PNG or Excel. You can also save individual
          visualizations from the View tab.`
        },
        {
          title: 'Can I edit the data after loading?',
          content: `Currently, you can add formulas and calculations. To edit raw data, export to Excel,
          make changes, and reload.`
        },
        {
          title: 'How many visualizations can I create?',
          content: `There's no hard limit! However, workbooks with many visualizations may take longer
          to export.`
        },
        {
          title: 'Are my visualizations saved?',
          content: `Visualizations are stored in the current session. Use the Export tab to save them
          permanently before closing.`
        },
        {
          title: 'Can I use this offline?',
          content: `This tool requires an internet connection for the initial load. Some features may work
          offline after caching.`
        },
        {
          title: 'Which browsers are supported?',
          content: `Works best on modern browsers: Chrome, Firefox, Safari, Edge (latest versions).`
        }
      ]
    }
  }

  const activeContent = helpContent[activeCategory]

  const filteredSections = activeContent?.sections.filter(section =>
    searchQuery === '' ||
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.content?.toLowerCase().includes(searchQuery.toLowerCase())
  ) || []

  return (
    <div className="help-tab-wrapper">
      <div className="scrollable-content">
        <div className="tab-header">
          <h3>❓ Help & Documentation</h3>
          <p className="subtitle">Learn how to use Excel Interactive Session</p>
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="🔍 Search help topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Help Categories */}
        <div className="help-categories">
          {helpCategories.map((cat) => (
            <button
              key={cat.id}
              className={`help-category ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span className="cat-icon">{cat.icon}</span>
              <span className="cat-label">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Help Content */}
        <div className="content-wrapper">
          <div className="help-content">
            <h2 className="content-title">{activeContent?.title}</h2>

            {filteredSections.length === 0 ? (
              <div className="no-results">
                <p>No help topics found for "{searchQuery}"</p>
              </div>
            ) : (
              filteredSections.map((section, index) => (
                <div key={index} className="help-section">
                  <h3 className="section-title">{section.title}</h3>

                  {section.content && (
                    <div className={`section-content ${section.steps ? 'steps' : ''}`}>
                      {section.content.split('\n').map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  )}

                  {section.examples && (
                    <div className="examples-grid">
                      {section.examples.map((ex, i) => (
                        <div key={i} className="example-card">
                          <div className="example-formula">{ex.formula}</div>
                          <code className="example-usage">{ex.usage}</code>
                          <div className="example-desc">{ex.description}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Quick Links */}
          <div className="quick-links">
            <h4>🔗 Quick Links</h4>
            <div className="links-grid">
              <a href="#" className="quick-link">
                <span className="link-icon">📖</span>
                <span className="link-label">Full Documentation</span>
              </a>
              <a href="#" className="quick-link">
                <span className="link-icon">🎓</span>
                <span className="link-label">Video Tutorials</span>
              </a>
              <a href="#" className="quick-link">
                <span className="link-icon">💬</span>
                <span className="link-label">Community Forum</span>
              </a>
              <a href="#" className="quick-link">
                <span className="link-icon">🐛</span>
                <span className="link-label">Report Issue</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .help-tab-wrapper {
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
          background: rgba(139, 92, 246, 0.5);
          border-radius: 5px;
        }

        .scrollable-content::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.7);
        }

        .tab-header {
          margin-bottom: 20px;
        }

        .tab-header h3 {
          color: #8b5cf6;
          font-size: 20px;
          margin: 0 0 5px 0;
        }

        .subtitle {
          color: #9ca3af;
          font-size: 13px;
          margin: 0;
        }

        .search-bar {
          margin-bottom: 20px;
        }

        .search-bar input {
          width: 100%;
          padding: 12px 16px;
          background: rgba(139, 92, 246, 0.1);
          border: 2px solid rgba(139, 92, 246, 0.3);
          border-radius: 8px;
          color: #e5e7eb;
          font-size: 14px;
          transition: all 0.3s ease;
          box-sizing: border-box;
        }

        .search-bar input:focus {
          outline: none;
          border-color: #8b5cf6;
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.3);
        }

        .search-bar input::placeholder {
          color: #9ca3af;
        }

        .help-categories {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .help-category {
          padding: 10px 18px;
          background: rgba(139, 92, 246, 0.1);
          border: 2px solid rgba(139, 92, 246, 0.2);
          border-radius: 8px;
          color: #8b5cf6;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .help-category:hover {
          background: rgba(139, 92, 246, 0.2);
          transform: translateY(-2px);
        }

        .help-category.active {
          background: rgba(139, 92, 246, 0.3);
          border-color: #8b5cf6;
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.4);
        }

        .cat-icon {
          font-size: 18px;
        }

        .cat-label {
          font-weight: bold;
          font-size: 14px;
        }

        .content-wrapper {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .help-content {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          padding: 25px;
        }

        .content-title {
          color: #8b5cf6;
          font-size: 24px;
          margin: 0 0 25px 0;
          border-bottom: 3px solid rgba(139, 92, 246, 0.3);
          padding-bottom: 12px;
        }

        .help-section {
          margin-bottom: 30px;
        }

        .section-title {
          color: #a855f7;
          font-size: 18px;
          margin: 0 0 12px 0;
        }

        .section-content {
          color: #e5e7eb;
          font-size: 14px;
          line-height: 1.8;
        }

        .section-content p {
          margin: 0 0 8px 0;
        }

        .section-content.steps {
          background: rgba(59, 130, 246, 0.1);
          border-left: 4px solid #3b82f6;
          padding: 15px;
          border-radius: 6px;
        }

        .examples-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 15px;
          margin-top: 15px;
        }

        .example-card {
          padding: 15px;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: 8px;
        }

        .example-formula {
          color: #10b981;
          font-weight: bold;
          font-size: 16px;
          margin-bottom: 8px;
        }

        .example-usage {
          display: block;
          background: rgba(0, 0, 0, 0.4);
          padding: 8px 12px;
          border-radius: 4px;
          color: #22c55e;
          font-family: 'Courier New', monospace;
          font-size: 13px;
          margin-bottom: 8px;
        }

        .example-desc {
          color: #9ca3af;
          font-size: 12px;
        }

        .no-results {
          text-align: center;
          padding: 40px;
          color: #9ca3af;
        }

        .no-results p {
          margin: 0;
        }

        .quick-links {
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 10px;
          padding: 20px;
        }

        .quick-links h4 {
          color: #3b82f6;
          font-size: 16px;
          margin: 0 0 15px 0;
        }

        .links-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 12px;
        }

        .quick-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 6px;
          color: #3b82f6;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .quick-link:hover {
          background: rgba(59, 130, 246, 0.2);
          transform: translateX(5px);
        }

        .link-icon {
          font-size: 24px;
          flex-shrink: 0;
        }

        .link-label {
          font-size: 13px;
          font-weight: bold;
        }

        @media (max-width: 1024px) {
          .examples-grid {
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .scrollable-content {
            padding: 15px;
          }

          .tab-header h3 {
            font-size: 18px;
          }

          .help-categories {
            gap: 8px;
          }

          .help-category {
            padding: 8px 14px;
            font-size: 12px;
          }

          .cat-icon {
            font-size: 16px;
          }

          .cat-label {
            font-size: 12px;
          }

          .help-content {
            padding: 20px;
          }

          .content-title {
            font-size: 20px;
          }

          .section-title {
            font-size: 16px;
          }

          .examples-grid,
          .links-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .help-content {
            padding: 15px;
          }

          .section-content {
            font-size: 13px;
          }

          .quick-link {
            padding: 10px;
          }

          .link-icon {
            font-size: 20px;
          }

          .link-label {
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  )
}

