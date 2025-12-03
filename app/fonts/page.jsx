'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Home() {
  const router = useRouter()
  const [isStarting, setIsStarting] = useState(false)

  const handleStart = () => {
    setIsStarting(true)
    setTimeout(() => {
      router.push('/session')
    }, 500)
  }

  return (
    <div className="landing-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">Excel Interactive Session</span>
          </h1>
          <p className="hero-subtitle">
            Learn Excel through hands-on practice with real spreadsheet functionality
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Interactive Learning</h3>
              <p>Load data, apply formulas, create visualizations</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🧮</div>
              <h3>Formula Library</h3>
              <p>Access 50+ Excel formulas with examples</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>Charts & Diagrams</h3>
              <p>Create professional charts and scientific diagrams</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🫀</div>
              <h3>Anatomical Diagrams</h3>
              <p>Biology and anatomy visualization tools</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔬</div>
              <h3>Cross-Sections</h3>
              <p>Earth science and plant anatomy diagrams</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🧪</div>
              <h3>Molecular Structures</h3>
              <p>3D chemistry molecular diagrams</p>
            </div>
          </div>

          <button 
            className="start-button"
            onClick={handleStart}
            disabled={isStarting}
          >
            {isStarting ? '⏳ Starting...' : '🚀 Start Interactive Session'}
          </button>

          <div className="info-tags">
            <span className="tag">✓ No Installation Required</span>
            <span className="tag">✓ Browser-Based</span>
            <span className="tag">✓ Educational Tool</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .landing-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
        }

        .hero-section {
          max-width: 1200px;
          width: 100%;
        }

        .hero-content {
          text-align: center;
        }

        .hero-title {
          font-size: 56px;
          font-weight: bold;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .gradient-text {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 20px;
          color: #9ca3af;
          margin-bottom: 50px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          margin-bottom: 50px;
        }

        .feature-card {
          padding: 30px;
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(59, 130, 246, 0.2);
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(59, 130, 246, 0.4);
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(59, 130, 246, 0.2);
        }

        .feature-icon {
          font-size: 48px;
          margin-bottom: 15px;
        }

        .feature-card h3 {
          color: #3b82f6;
          font-size: 18px;
          margin-bottom: 10px;
        }

        .feature-card p {
          color: #9ca3af;
          font-size: 14px;
          line-height: 1.6;
        }

        .start-button {
          padding: 18px 50px;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          border: none;
          border-radius: 12px;
          color: white;
          font-size: 18px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4);
        }

        .start-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(59, 130, 246, 0.6);
        }

        .start-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .info-tags {
          display: flex;
          gap: 15px;
          justify-content: center;
          margin-top: 30px;
          flex-wrap: wrap;
        }

        .tag {
          padding: 8px 16px;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          border-radius: 20px;
          color: #22c55e;
          font-size: 13px;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 36px;
          }

          .hero-subtitle {
            font-size: 16px;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .start-button {
            width: 100%;
            padding: 16px;
            font-size: 16px;
          }

          .info-tags {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  )
}
