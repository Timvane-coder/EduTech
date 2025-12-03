'use client'

import { useState, useEffect } from 'react'

export default function DataTab({ workbookState, sessionManager, onModeChange }) {
  const [activeSection, setActiveSection] = useState('statistics')
  const [statistics, setStatistics] = useState(null)
  const [selectedColumn, setSelectedColumn] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [analysisResults, setAnalysisResults] = useState(null)
  const [activeSubSection, setActiveSubSection] = useState(null)
  const [sessionId, setSessionId] = useState(null)

  // Get session ID when component mounts or sessionManager changes
  useEffect(() => {
    const getSessionId = async () => {
      if (sessionManager && typeof sessionManager.getSessionId === 'function') {
        const id = sessionManager.getSessionId()
        console.log('📊 DataTab - Session ID:', id)
        setSessionId(id)
      } else if (typeof window !== 'undefined' && window.sessionManager) {
        const id = window.sessionManager.getSessionId()
        console.log('📊 DataTab - Session ID from window:', id)
        setSessionId(id)
      } else {
        try {
          const workbookManager = (await import('@/lib/workbookManager')).default
          if (workbookManager.sessionId) {
            console.log('📊 DataTab - Session ID from workbookManager:', workbookManager.sessionId)
            setSessionId(workbookManager.sessionId)
          }
        } catch (error) {
          console.error('Failed to get session ID:', error)
        }
      }
    }

    getSessionId()

    const interval = setInterval(() => {
      if (!sessionId) {
        getSessionId()
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [sessionManager, sessionId])

  useEffect(() => {
    if (workbookState && workbookState.data.length > 0) {
      calculateStatistics()
    }
  }, [workbookState])

  // Helper function to get session ID
  const getValidSessionId = () => {
    if (sessionId) return sessionId
    
    if (sessionManager && typeof sessionManager.getSessionId === 'function') {
      return sessionManager.getSessionId()
    }
    
    if (typeof window !== 'undefined' && window.sessionManager) {
      return window.sessionManager.getSessionId()
    }
    
    return null
  }

  const sections = [
    { id: 'statistics', label: '📊 Descriptive Statistics', icon: '📊' },
    { id: 'analysis', label: '🔬 Statistical Analysis', icon: '🔬' },
    { id: 'advanced', label: '🧮 Advanced Statistics', icon: '🧮' },
    { id: 'transform', label: '🔄 Transform', icon: '🔄' },
    { id: 'filter', label: '🔍 Filter & Sort', icon: '🔍' }
  ]

  const analysisSubSections = [
    { id: 'eda', label: 'Exploratory Data Analysis', icon: '📈', requiresColumn: true },
    { id: 'correlation', label: 'Correlation Matrix', icon: '🔗', requiresColumn: false },
    { id: 'distribution', label: 'Distribution Analysis', icon: '📊', requiresColumn: true },
    { id: 'outliers', label: 'Outlier Detection', icon: '🎯', requiresColumn: true },
    { id: 'dist_identification', label: 'Distribution Identification', icon: '🔍', requiresColumn: true },
    { id: 'assumptions', label: 'Assumption Checks', icon: '✓', requiresColumn: true },
    { id: 'parameters', label: 'Parameter Estimation', icon: '📐', requiresColumn: true },
    { id: 'hypothesis', label: 'Hypothesis Testing', icon: '🔬', requiresColumn: true },
    { id: 'confidence', label: 'Confidence Intervals', icon: '📊', requiresColumn: true }
  ]

  const advancedSubSections = [
    { id: 'regression', label: 'Regression Analysis', icon: '📈', requiresColumn: false },
    { id: 'bayesian', label: 'Bayesian Inference', icon: '🎲', requiresColumn: true },
    { id: 'anova', label: 'ANOVA', icon: '📊', requiresColumn: false },
    { id: 'timeseries', label: 'Time Series Analysis', icon: '⏱️', requiresColumn: true },
    { id: 'meta', label: 'Meta-Analysis', icon: '🔬', requiresColumn: false },
    { id: 'power', label: 'Power Analysis', icon: '⚡', requiresColumn: false },
    { id: 'report', label: 'Generate Report', icon: '📋', requiresColumn: true }
  ]

  const calculateStatistics = () => {
    if (!workbookState || !workbookState.data) return

    const stats = {}
    const numRows = workbookState.data.length

    workbookState.headers.forEach((header, colIndex) => {
      const values = []

      workbookState.data.forEach(row => {
        const value = row[colIndex]
        if (value !== null && value !== undefined && value !== '' && !isNaN(parseFloat(value))) {
          values.push(parseFloat(value))
        }
      })

      if (values.length > 0) {
        const sum = values.reduce((a, b) => a + b, 0)
        const avg = sum / values.length
        const sorted = [...values].sort((a, b) => a - b)
        const median = values.length % 2 === 0
          ? (sorted[values.length / 2 - 1] + sorted[values.length / 2]) / 2
          : sorted[Math.floor(values.length / 2)]

        const variance = values.reduce((acc, val) => acc + Math.pow(val - avg, 2), 0) / values.length
        const stdDev = Math.sqrt(variance)

        stats[header] = {
          count: values.length,
          sum: sum.toFixed(2),
          average: avg.toFixed(2),
          min: Math.min(...values).toFixed(2),
          max: Math.max(...values).toFixed(2),
          median: median.toFixed(2),
          stdDev: stdDev.toFixed(2),
          variance: variance.toFixed(2),
          range: (Math.max(...values) - Math.min(...values)).toFixed(2)
        }
      } else {
        stats[header] = {
          count: 0,
          type: 'non-numeric',
          uniqueValues: [...new Set(workbookState.data.map(row => row[colIndex]))].length
        }
      }
    })

    setStatistics(stats)

    // Auto-select first numeric column if none selected
    if (!selectedColumn && Object.keys(stats).length > 0) {
      const firstNumeric = Object.keys(stats).find(col => stats[col].type !== 'non-numeric')
      if (firstNumeric) {
        setSelectedColumn(firstNumeric)
        console.log('Auto-selected first numeric column:', firstNumeric)
      }
    }
  }

  // Get numeric columns for dropdown
  const getNumericColumns = () => {
    if (!statistics) return []
    return Object.keys(statistics).filter(col => statistics[col].type !== 'non-numeric')
  }

  // Column Selector Component
  const ColumnSelector = () => {
    const numericColumns = getNumericColumns()
    
    if (numericColumns.length === 0) {
      return (
        <div className="column-selector warning">
          <span>⚠️ No numeric columns available</span>
        </div>
      )
    }

    return (
      <div className="column-selector">
        <label>📊 Select Column for Analysis:</label>
        <select 
          value={selectedColumn || ''} 
          onChange={(e) => setSelectedColumn(e.target.value)}
          className="column-select"
        >
          <option value="">-- Select a Column --</option>
          {numericColumns.map(col => (
            <option key={col} value={col}>{col}</option>
          ))}
        </select>
      </div>
    )
  }

  // Statistical Analysis Functions
  const performEDA = async () => {
    if (!selectedColumn) {
      alert('⚠️ Please select a column first')
      return
    }

    const validSessionId = getValidSessionId()
    if (!validSessionId) {
      alert('❌ Session not ready. Please wait and try again.')
      console.error('No valid session ID found')
      return
    }

    console.log('🔍 Performing EDA with session ID:', validSessionId, 'Column:', selectedColumn)

    setIsProcessing(true)
    try {
      const response = await fetch('/api/workbook/statistical-analysis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: validSessionId,
          operation: 'performEDA',
          columnRef: selectedColumn,
          options: { unitName: 'units' }
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'EDA failed')
      }

      const result = await response.json()
      setAnalysisResults(result)
      
      if (onModeChange) {
        onModeChange('statistics')
      }

      alert(`✅ EDA Complete!\n\nColumn: ${result.columnName}\nSample Size: ${result.sampleSize}\nData Quality: ${result.validation.dataQuality.rating}\nMean: ${result.statistics.mean.toFixed(2)}\nMedian: ${result.statistics.median.toFixed(2)}`)
    } catch (error) {
      console.error('EDA Error:', error)
      alert(`❌ Error: ${error.message}`)
    } finally {
      setIsProcessing(false)
    }
  }

  const performCorrelationMatrix = async () => {
    const validSessionId = getValidSessionId()
    if (!validSessionId) {
      alert('❌ Session not ready. Please wait and try again.')
      console.error('No valid session ID found')
      return
    }

    console.log('🔍 Performing Correlation Matrix with session ID:', validSessionId)

    setIsProcessing(true)
    try {
      const numericColumns = Object.keys(statistics).filter(
        col => statistics[col].type !== 'non-numeric'
      )

      if (numericColumns.length < 2) {
        alert('Need at least 2 numeric columns for correlation analysis')
        return
      }

      const response = await fetch('/api/workbook/statistical-analysis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: validSessionId,
          operation: 'calculateCorrelationMatrix',
          columnRefs: numericColumns.slice(0, 4),
          options: {}
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Correlation analysis failed')
      }

      const result = await response.json()
      setAnalysisResults(result)

      if (onModeChange) {
        onModeChange('statistics')
      }

      let message = `✅ Correlation Matrix Complete!\n\nVariables: ${result.columns.length}\nSignificant Correlations: ${result.significantCorrelations.length}`
      
      if (result.significantCorrelations.length > 0) {
        message += '\n\nTop Correlations:\n'
        result.significantCorrelations.slice(0, 3).forEach(corr => {
          message += `${corr.var1} ↔ ${corr.var2}: r = ${corr.correlation.toFixed(4)} (${corr.strength})\n`
        })
      }

      alert(message)
    } catch (error) {
      console.error('Correlation Matrix Error:', error)
      alert(`❌ Error: ${error.message}`)
    } finally {
      setIsProcessing(false)
    }
  }

  const performDistributionIdentification = async () => {
    if (!selectedColumn) {
      alert('⚠️ Please select a column first')
      return
    }

    const validSessionId = getValidSessionId()
    if (!validSessionId) {
      alert('❌ Session not ready. Please wait and try again.')
      return
    }

    setIsProcessing(true)
    try {
      const response = await fetch('/api/workbook/statistical-analysis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: validSessionId,
          operation: 'identifyDistribution',
          columnRef: selectedColumn,
          options: {
            candidateDistributions: ['normal', 't', 'gamma', 'lognormal', 'exponential', 'uniform'],
            confidenceLevel: 0.95
          }
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Distribution identification failed')
      }

      const result = await response.json()
      setAnalysisResults(result)

      if (onModeChange) {
        onModeChange('statistics')
      }

      alert(`✅ Distribution Identified!\n\nBest Fit: ${result.distributionName}\nColumn: ${result.columnName}\nK-S p-value: ${result.goodnessOfFit.pValue.toFixed(6)}\nParameters: ${JSON.stringify(result.parameters)}`)
    } catch (error) {
      console.error('Distribution Identification Error:', error)
      alert(`❌ Error: ${error.message}`)
    } finally {
      setIsProcessing(false)
    }
  }

  const performDistributionAnalysis = async () => {
    if (!selectedColumn) {
      alert('⚠️ Please select a column first')
      return
    }

    const validSessionId = getValidSessionId()
    if (!validSessionId) {
      alert('❌ Session not ready. Please wait and try again.')
      return
    }

    setIsProcessing(true)
    try {
      const response = await fetch('/api/workbook/statistical-analysis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: validSessionId,
          operation: 'analyzeDistribution',
          columnRef: selectedColumn,
          distributionType: 'normal',
          options: {
            unitName: 'units',
            targetValue: null,
            hypothesisTest: null
          }
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Distribution analysis failed')
      }

      const result = await response.json()
      setAnalysisResults(result)

      if (onModeChange) {
        onModeChange('statistics')
      }

      alert(`✅ Distribution Analysis Complete!\n\nDistribution: ${result.distribution}\nMean: ${result.statistics.mean.toFixed(4)}\nStd Dev: ${result.statistics.standardDeviation.toFixed(4)}\nLog-Likelihood: ${result.distributionAnalysis.logLikelihood.toFixed(4)}`)
    } catch (error) {
      console.error('Distribution Analysis Error:', error)
      alert(`❌ Error: ${error.message}`)
    } finally {
      setIsProcessing(false)
    }
  }

  const checkDistributionAssumptions = async () => {
    if (!selectedColumn) {
      alert('⚠️ Please select a column first')
      return
    }

    const validSessionId = getValidSessionId()
    if (!validSessionId) {
      alert('❌ Session not ready. Please wait and try again.')
      return
    }

    setIsProcessing(true)
    try {
      const response = await fetch('/api/workbook/statistical-analysis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: validSessionId,
          operation: 'checkDistributionAssumptions',
          columnRef: selectedColumn,
          distributionType: 'normal',
          options: { unitName: 'units' }
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Assumption checks failed')
      }

      const result = await response.json()
      setAnalysisResults(result)

      if (onModeChange) {
        onModeChange('statistics')
      }

      const gof = result.goodnessOfFit
      let message = `✅ Assumption Checks Complete!\n\nOverall Fit: ${result.overallFit.assessment}\n${result.overallFit.description}\n\n`
      
      if (gof.kolmogorovSmirnov) {
        message += `K-S Test p-value: ${gof.kolmogorovSmirnov.pValue.toFixed(6)}\n`
        message += `Result: ${gof.kolmogorovSmirnov.reject['0.05'] ? 'REJECT H₀' : 'FAIL TO REJECT H₀'}\n`
      }

      alert(message)
    } catch (error) {
      console.error('Assumption Checks Error:', error)
      alert(`❌ Error: ${error.message}`)
    } finally {
      setIsProcessing(false)
    }
  }

  const estimateParameters = async () => {
    if (!selectedColumn) {
      alert('⚠️ Please select a column first')
      return
    }

    const validSessionId = getValidSessionId()
    if (!validSessionId) {
      alert('❌ Session not ready. Please wait and try again.')
      return
    }

    setIsProcessing(true)
    try {
      const response = await fetch('/api/workbook/statistical-analysis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: validSessionId,
          operation: 'estimateParameters',
          columnRef: selectedColumn,
          distributionType: 'normal',
          options: { unitName: 'units' }
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Parameter estimation failed')
      }

      const result = await response.json()
      setAnalysisResults(result)

      if (onModeChange) {
        onModeChange('statistics')
      }

      let message = `✅ Parameter Estimation Complete!\n\nDistribution: ${result.distribution}\n\nParameters:\n`
      result.parameterNames.forEach((name, idx) => {
        message += `${name}: ${result.parameters[idx].toFixed(6)}\n`
      })

      if (result.confidenceIntervals && result.confidenceIntervals[0.95]) {
        message += '\n95% Confidence Intervals:\n'
        Object.entries(result.confidenceIntervals[0.95].parameters).forEach(([param, ci]) => {
          message += `${param}: [${ci.lowerBound.toFixed(6)}, ${ci.upperBound.toFixed(6)}]\n`
        })
      }

      alert(message)
    } catch (error) {
      console.error('Parameter Estimation Error:', error)
      alert(`❌ Error: ${error.message}`)
    } finally {
      setIsProcessing(false)
    }
  }

  const performHypothesisTest = async () => {
    if (!selectedColumn) {
      alert('⚠️ Please select a column first')
      return
    }

    const nullValue = prompt('Enter null hypothesis value (e.g., 80):', '80')
    if (!nullValue) return

    const validSessionId = getValidSessionId()
    if (!validSessionId) {
      alert('❌ Session not ready. Please wait and try again.')
      return
    }

    setIsProcessing(true)
    try {
      const response = await fetch('/api/workbook/statistical-analysis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: validSessionId,
          operation: 'performHypothesisTest',
          columnRef: selectedColumn,
          testConfig: {
            type: 'oneSample',
            nullValue: parseFloat(nullValue),
            alternative: 'two-sided',
            alpha: 0.05
          },
          options: {}
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Hypothesis test failed')
      }

      const result = await response.json()
      setAnalysisResults(result)

      if (onModeChange) {
        onModeChange('statistics')
      }

      if (result.result) {
        const res = result.result
        alert(`✅ Hypothesis Test Complete!\n\nH₀: μ = ${nullValue}\nTest Statistic: ${res.testStatistic.toFixed(4)}\np-value: ${res.pValue.toFixed(6)}\n\nConclusion: ${res.conclusion}`)
      }
    } catch (error) {
      console.error('Hypothesis Test Error:', error)
      alert(`❌ Error: ${error.message}`)
    } finally {
      setIsProcessing(false)
    }
  }

  const calculateConfidenceIntervals = async () => {
    if (!selectedColumn) {
      alert('⚠️ Please select a column first')
      return
    }

    const validSessionId = getValidSessionId()
    if (!validSessionId) {
      alert('❌ Session not ready. Please wait and try again.')
      return
    }

    setIsProcessing(true)
    try {
      const response = await fetch('/api/workbook/statistical-analysis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: validSessionId,
          operation: 'calculateConfidenceIntervals',
          columnRef: selectedColumn,
          distributionType: 'normal',
          options: {
            levels: [0.90, 0.95, 0.99]
          }
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Confidence interval calculation failed')
      }

      const result = await response.json()
      setAnalysisResults(result)

      if (onModeChange) {
        onModeChange('statistics')
      }

      let message = `✅ Confidence Intervals Complete!\n\nDistribution: ${result.distribution}\n\n`
      
      if (result.distributionCI) {
        message += 'Distribution Confidence Intervals:\n'
        Object.entries(result.distributionCI).forEach(([level, ci]) => {
          if (ci && ci.lowerBound !== undefined) {
            message += `${(parseFloat(level) * 100)}%: [${ci.lowerBound.toFixed(4)}, ${ci.upperBound.toFixed(4)}]\n`
          }
        })
      }

      alert(message)
    } catch (error) {
      console.error('Confidence Intervals Error:', error)
      alert(`❌ Error: ${error.message}`)
    } finally {
      setIsProcessing(false)
    }
  }

  // Advanced Statistics Functions
  const performRegression = async () => {
    const validSessionId = getValidSessionId()
    if (!validSessionId) {
      alert('❌ Session not ready. Please wait and try again.')
      return
    }

    setIsProcessing(true)
    try {
      const numericColumns = Object.keys(statistics).filter(
        col => statistics[col].type !== 'non-numeric'
      )

      if (numericColumns.length < 2) {
        alert('Need at least 2 numeric columns for regression')
        return
      }

      const responseColumn = numericColumns[numericColumns.length - 1]
      const predictorColumns = numericColumns.slice(0, -1).slice(0, 3)

      const response = await fetch('/api/workbook/statistical-analysis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: validSessionId,
          operation: 'performRegression',
          config: {
            type: predictorColumns.length > 1 ? 'multiple' : 'linear',
            predictorColumns: predictorColumns,
            responseColumn: responseColumn
          },
          options: {}
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Regression analysis failed')
      }

      const result = await response.json()
      setAnalysisResults(result)

      if (onModeChange) {
        onModeChange('statistics')
      }

      let message = `✅ Regression Analysis Complete!\n\nModel: ${result.type}\nR²: ${result.modelFit.rSquared.toFixed(6)}\nAdjusted R²: ${result.modelFit.adjustedRSquared.toFixed(6)}\nRMSE: ${result.modelFit.RMSE.toFixed(6)}\n\nCoefficients:\n`
      
      result.coefficients.forEach(coef => {
        message += `${coef.name}: ${coef.value.toFixed(6)} (p = ${coef.pValue.toFixed(6)})\n`
      })

      alert(message)
    } catch (error) {
      console.error('Regression Error:', error)
      alert(`❌ Error: ${error.message}`)
    } finally {
      setIsProcessing(false)
    }
  }

  const performBayesianInference = async () => {
    if (!selectedColumn) {
      alert('⚠️ Please select a column first')
      return
    }

    const priorMean = prompt('Enter prior mean (e.g., 75):', '75')
    const priorSD = prompt('Enter prior standard deviation (e.g., 10):', '10')
    
    if (!priorMean || !priorSD) return

    const validSessionId = getValidSessionId()
    if (!validSessionId) {
      alert('❌ Session not ready. Please wait and try again.')
      return
    }

    setIsProcessing(true)
    try {
      const response = await fetch('/api/workbook/statistical-analysis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: validSessionId,
          operation: 'performBayesianInference',
          columnRef: selectedColumn,
          priorConfig: {
            priorDistribution: 'normal',
            priorMean: parseFloat(priorMean),
            priorSD: parseFloat(priorSD),
            alpha: 0.05
          },
          options: {
            unitName: 'units',
            distributionType: 'normal'
          }
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Bayesian inference failed')
      }

      const result = await response.json()
      setAnalysisResults(result)

      if (onModeChange) {
        onModeChange('statistics')
      }

      let message = `✅ Bayesian Inference Complete!\n\nPrior: Normal(μ=${priorMean}, σ=${priorSD})\n`
      
      if (result.posterior) {
        if (result.posterior.posteriorMean !== undefined) {
          message += `Posterior Mean: ${result.posterior.posteriorMean.toFixed(4)}\n`
        }

        if (result.credibleIntervals && result.credibleIntervals['0.95']) {
          const ci95 = result.credibleIntervals['0.95']
          message += `\n95% Credible Interval: [${ci95.lower.toFixed(4)}, ${ci95.upper.toFixed(4)}]`
        }
      }

      alert(message)
    } catch (error) {
      console.error('Bayesian Inference Error:', error)
      alert(`❌ Error: ${error.message}`)
    } finally {
      setIsProcessing(false)
    }
  }

  const performANOVA = async () => {
    const validSessionId = getValidSessionId()
    if (!validSessionId) {
      alert('❌ Session not ready. Please wait and try again.')
      return
    }

    setIsProcessing(true)
    try {
      const numericColumns = Object.keys(statistics).filter(
        col => statistics[col].type !== 'non-numeric'
      )

      if (numericColumns.length < 2) {
        alert('Need at least 2 numeric columns for ANOVA')
        return
      }

      const response = await fetch('/api/workbook/statistical-analysis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: validSessionId,
          operation: 'performANOVA',
          groupColumns: numericColumns.slice(0, 3),
          options: {}
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'ANOVA failed')
      }

      const result = await response.json()
      setAnalysisResults(result)

      if (onModeChange) {
        onModeChange('statistics')
      }

      alert(`✅ ANOVA Complete!\n\nGroups: ${result.groups}\nTotal Sample Size: ${result.totalSampleSize}\nF-statistic: ${result.fStatistic.toFixed(4)}\np-value: ${result.pValue.toFixed(6)}\n\nConclusion: ${result.conclusion}`)
    } catch (error) {
      console.error('ANOVA Error:', error)
      alert(`❌ Error: ${error.message}`)
    } finally {
      setIsProcessing(false)
    }
  }

  const performTimeSeriesAnalysis = async () => {
    if (!selectedColumn) {
      alert('⚠️ Please select a column first')
      return
    }

    const validSessionId = getValidSessionId()
    if (!validSessionId) {
      alert('❌ Session not ready. Please wait and try again.')
      return
    }

    setIsProcessing(true)
    try {
      const response = await fetch('/api/workbook/statistical-analysis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: validSessionId,
          operation: 'performTimeSeriesAnalysis',
          columnRef: selectedColumn,
          config: {
            method: 'arima',
            seasonal: false
          },
          options: {}
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Time series analysis failed')
      }

      const result = await response.json()
      setAnalysisResults(result)

      if (onModeChange) {
        onModeChange('statistics')
      }

      let message = `✅ Time Series Analysis Complete!\n\nObservations: ${result.descriptive?.observations || 'N/A'}\n`
      
      if (result.trend) {
        message += `Trend: ${result.trend.linearTrend?.interpretation || 'Analysis complete'}\n`
      }

      if (result.arima && result.arima.order) {
        message += `ARIMA Order: (${result.arima.order.p}, ${result.arima.order.d}, ${result.arima.order.q})\n`
      }

      alert(message)
    } catch (error) {
      console.error('Time Series Analysis Error:', error)
      alert(`❌ Error: ${error.message}`)
    } finally {
      setIsProcessing(false)
    }
  }

  const performMetaAnalysis = async () => {
    const studies = [
      { studyName: 'Study 1', effectSize: 0.45, sampleSize: 35, standardError: 0.12 },
      { studyName: 'Study 2', effectSize: 0.52, sampleSize: 42, standardError: 0.11 },
      { studyName: 'Study 3', effectSize: 0.38, sampleSize: 28, standardError: 0.14 },
      { studyName: 'Study 4', effectSize: 0.55, sampleSize: 50, standardError: 0.10 },
      { studyName: 'Study 5', effectSize: 0.48, sampleSize: 38, standardError: 0.12 }
    ]

    const validSessionId = getValidSessionId()
    if (!validSessionId) {
      alert('❌ Session not ready. Please wait and try again.')
      return
    }

    setIsProcessing(true)
    try {
      const response = await fetch('/api/workbook/statistical-analysis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: validSessionId,
          operation: 'performMetaAnalysis',
          studies: studies,
          options: {}
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Meta-analysis failed')
      }

      const result = await response.json()
      setAnalysisResults(result)

      if (onModeChange) {
        onModeChange('statistics')
      }

      let message = `✅ Meta-Analysis Complete!\n\nNumber of Studies: ${studies.length}\n\n`
      
      if (result.fixedEffect) {
        message += `Fixed Effects Model:\n  Pooled Effect: ${result.fixedEffect.pooledEffect.toFixed(4)}\n`
        if (result.fixedEffect.confidenceInterval) {
          message += `  95% CI: [${result.fixedEffect.confidenceInterval.lower.toFixed(4)}, ${result.fixedEffect.confidenceInterval.upper.toFixed(4)}]\n`
        }
      }

      if (result.randomEffects) {
        message += `\nRandom Effects Model:\n  Pooled Effect: ${result.randomEffects.pooledEffect.toFixed(4)}\n`
        if (result.randomEffects.confidenceInterval) {
          message += `  95% CI: [${result.randomEffects.confidenceInterval.lower.toFixed(4)}, ${result.randomEffects.confidenceInterval.upper.toFixed(4)}]\n`
        }
      }

      if (result.heterogeneity) {
        message += `\nHeterogeneity:\n  I²: ${result.heterogeneity.I2}\n  Interpretation: ${result.heterogeneity.interpretation}`
      }

      alert(message)
    } catch (error) {
      console.error('Meta-Analysis Error:', error)
      alert(`❌ Error: ${error.message}`)
    } finally {
      setIsProcessing(false)
    }
  }

  const performPowerAnalysis = async () => {
    const effectSize = prompt('Enter effect size (e.g., 0.5):', '0.5')
    const sampleSize = prompt('Enter sample size (e.g., 30):', '30')
    const alpha = prompt('Enter alpha level (e.g., 0.05):', '0.05')
    const desiredPower = prompt('Enter desired power (e.g., 0.80):', '0.80')

    if (!effectSize || !sampleSize || !alpha || !desiredPower) return

    const validSessionId = getValidSessionId()
    if (!validSessionId) {
      alert('❌ Session not ready. Please wait and try again.')
      return
    }

    setIsProcessing(true)
    try {
      const response = await fetch('/api/workbook/statistical-analysis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: validSessionId,
          operation: 'performPowerAnalysis',
          config: {
            testType: 'oneSample',
            alpha: parseFloat(alpha),
            desiredPower: parseFloat(desiredPower),
            effectSize: parseFloat(effectSize),
            sampleSize: parseInt(sampleSize)
          },
          options: {}
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Power analysis failed')
      }

      const result = await response.json()
      setAnalysisResults(result)

      if (onModeChange) {
        onModeChange('statistics')
      }

      let message = `✅ Power Analysis Complete!\n\nTest Type: oneSample\nAlpha: ${alpha}\nEffect Size: ${effectSize}\nSample Size: ${sampleSize}\nDesired Power: ${desiredPower}\n\n`
      
      if (result.requiredSampleSize !== undefined) {
        message += `Required Sample Size: ${Math.ceil(result.requiredSampleSize)}\n`
      }

      if (result.currentPower) {
        message += `Current Power: ${(result.currentPower.power * 100).toFixed(2)}%\n`
      }

      if (result.recommendation) {
        message += `\nRecommendation: ${result.recommendation}`
      }

      alert(message)
    } catch (error) {
      console.error('Power Analysis Error:', error)
      alert(`❌ Error: ${error.message}`)
    } finally {
      setIsProcessing(false)
    }
  }

  const generateStatisticalReport = async () => {
    if (!selectedColumn) {
      alert('⚠️ Please select a column first')
      return
    }

    const validSessionId = getValidSessionId()
    if (!validSessionId) {
      alert('❌ Session not ready. Please wait and try again.')
      return
    }

    setIsProcessing(true)
    try {
      const response = await fetch('/api/workbook/statistical-analysis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: validSessionId,
          operation: 'generateStatisticalReport',
          columnRef: selectedColumn,
          options: {
            distributionType: 'normal',
            unitName: 'units',
            includeVisualizations: true,
            outputFormat: 'both'
          }
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Report generation failed')
      }

      const result = await response.json()
      setAnalysisResults(result)

      if (onModeChange) {
        onModeChange('statistics')
      }

      alert(`✅ Statistical Report Generated!\n\nColumn: ${result.columnName}\nDistribution: ${result.distribution}\nWorkbook Pages: ${result.workbook?.length || 0}\nTimestamp: ${new Date(result.timestamp).toLocaleString()}`)
    } catch (error) {
      console.error('Report Generation Error:', error)
      alert(`❌ Error: ${error.message}`)
    } finally {
      setIsProcessing(false)
    }
  }

  if (!workbookState) {
    return (
      <div className="data-tab-wrapper">
        <div className="empty-state">
          <h3>📊 No Data Loaded</h3>
          <p>Load data to access statistics and analysis tools</p>
        </div>
      </div>
    )
  }

  return (
    <div className="data-tab-wrapper">
      <div className="scrollable-content">
        <div className="tab-header">
          <h3>📊 Data Analysis & Statistics</h3>
          <p className="subtitle">Comprehensive statistical analysis and data transformation</p>
        </div>

        {/* Session ID Debug Info */}
        {sessionId && (
          <div className="session-info">
            <small>✓ Session: {sessionId.substring(0, 8)}...</small>
          </div>
        )}

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
          {/* Descriptive Statistics Section */}
          {activeSection === 'statistics' && (
            <div className="statistics-section">
              <h4>📊 Descriptive Statistics</h4>
              <p className="section-desc">Summary statistics for all columns</p>

              {statistics && Object.keys(statistics).length > 0 ? (
                <div className="statistics-container">
                  {Object.entries(statistics).map(([column, stats]) => (
                    <div
                      key={column}
                      className={`stats-card ${selectedColumn === column ? 'selected' : ''}`}
                      onClick={() => setSelectedColumn(column)}
                    >
                      <div className="stats-header">
                        <h5>{column}</h5>
                        {stats.type === 'non-numeric' ? (
                          <span className="badge text">Text</span>
                        ) : (
                          <span className="badge numeric">Numeric</span>
                        )}
                      </div>

                      {stats.type === 'non-numeric' ? (
                        <div className="text-stats">
                          <div className="stat-item">
                            <span className="stat-label">Unique Values:</span>
                            <span className="stat-value">{stats.uniqueValues}</span>
                          </div>
                          <div className="stat-item">
                            <span className="stat-label">Total Entries:</span>
                            <span className="stat-value">{workbookState.data.length}</span>
                          </div>
                        </div>
                      ) : (
                        <div className="numeric-stats">
                          <div className="stats-grid">
                            <div className="stat-item">
                              <span className="stat-label">Count:</span>
                              <span className="stat-value">{stats.count}</span>
                            </div>
                            <div className="stat-item">
                              <span className="stat-label">Sum:</span>
                              <span className="stat-value">{stats.sum}</span>
                            </div>
                            <div className="stat-item">
                              <span className="stat-label">Average:</span>
                              <span className="stat-value highlight">{stats.average}</span>
                            </div>
                            <div className="stat-item">
                              <span className="stat-label">Median:</span>
                              <span className="stat-value">{stats.median}</span>
                            </div>
                            <div className="stat-item">
                              <span className="stat-label">Min:</span>
                              <span className="stat-value">{stats.min}</span>
                            </div>
                            <div className="stat-item">
                              <span className="stat-label">Max:</span>
                              <span className="stat-value">{stats.max}</span>
                            </div>
                            <div className="stat-item">
                              <span className="stat-label">Range:</span>
                              <span className="stat-value">{stats.range}</span>
                            </div>
                            <div className="stat-item">
                              <span className="stat-label">Std Dev:</span>
                              <span className="stat-value">{stats.stdDev}</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-stats">
                  <p>No statistics available. Ensure your data contains numeric columns.</p>
                </div>
              )}
            </div>
          )}

          {/* Statistical Analysis Section */}
          {activeSection === 'analysis' && (
            <div className="analysis-section">
              <h4>🔬 Statistical Analysis</h4>
              <p className="section-desc">Advanced statistical analysis tools</p>

              {/* Column Selector for Analysis Section */}
              <ColumnSelector />

              {!selectedColumn && (
                <div className="warning-message">
                  <span>⚠️ Please select a column above to enable analysis buttons</span>
                </div>
              )}

              <div className="analysis-tools">
                {analysisSubSections.map((subSection) => {
                  const isDisabled = subSection.requiresColumn && !selectedColumn
                  
                  return (
                    <div key={subSection.id} className={`tool-card ${isDisabled ? 'disabled' : ''}`}>
                      <div className="tool-icon">{subSection.icon}</div>
                      <h5>{subSection.label}</h5>
                      {subSection.requiresColumn && !selectedColumn && (
                        <p className="requirement-text">Requires column selection</p>
                      )}
                      <button 
                        className="tool-btn"
                        onClick={() => {
                          if (isDisabled) {
                            alert('⚠️ Please select a column first')
                            return
                          }
                          setActiveSubSection(subSection.id)
                          switch(subSection.id) {
                            case 'eda':
                              performEDA()
                              break
                            case 'correlation':
                              performCorrelationMatrix()
                              break
                            case 'distribution':
                              performDistributionAnalysis()
                              break
                            case 'outliers':
                              performEDA()
                              break
                            case 'dist_identification':
                              performDistributionIdentification()
                              break
                            case 'assumptions':
                              checkDistributionAssumptions()
                              break
                            case 'parameters':
                              estimateParameters()
                              break
                            case 'hypothesis':
                              performHypothesisTest()
                              break
                            case 'confidence':
                              calculateConfidenceIntervals()
                              break
                          }
                        }}
                        disabled={isProcessing || isDisabled}
                      >
                        {isProcessing && activeSubSection === subSection.id ? 'Processing...' : 'Run Analysis'}
                      </button>
                    </div>
                  )
                })}
              </div>

              {analysisResults && (
                <div className="analysis-results">
                  <h5>📊 Analysis Results</h5>
                  <pre>{JSON.stringify(analysisResults, null, 2)}</pre>
                </div>
              )}
            </div>
          )}

          {/* Advanced Statistics Section */}
          {activeSection === 'advanced' && (
            <div className="advanced-section">
              <h4>🧮 Advanced Statistics</h4>
              <p className="section-desc">Regression, Bayesian, ANOVA, Time Series, and more</p>

              {/* Column Selector for Advanced Section */}
              <ColumnSelector />

              {!selectedColumn && (
                <div className="warning-message">
                  <span>⚠️ Some analyses require column selection</span>
                </div>
              )}

              <div className="analysis-tools">
                {advancedSubSections.map((subSection) => {
                  const isDisabled = subSection.requiresColumn && !selectedColumn
                  
                  return (
                    <div key={subSection.id} className={`tool-card advanced ${isDisabled ? 'disabled' : ''}`}>
                      <div className="tool-icon">{subSection.icon}</div>
                      <h5>{subSection.label}</h5>
                      <p className="tool-description">
                        {subSection.id === 'regression' && 'Analyze relationships between variables'}
                        {subSection.id === 'bayesian' && 'Bayesian parameter estimation'}
                        {subSection.id === 'anova' && 'Compare means across groups'}
                        {subSection.id === 'timeseries' && 'Trend and seasonality analysis'}
                        {subSection.id === 'meta' && 'Combine results from multiple studies'}
                        {subSection.id === 'power' && 'Sample size and power calculations'}
                        {subSection.id === 'report' && 'Generate comprehensive report'}
                      </p>
                      {subSection.requiresColumn && !selectedColumn && (
                        <p className="requirement-text">Requires column selection</p>
                      )}
                      <button 
                        className="tool-btn"
                        onClick={() => {
                          if (isDisabled) {
                            alert('⚠️ Please select a column first')
                            return
                          }
                          setActiveSubSection(subSection.id)
                          switch(subSection.id) {
                            case 'regression':
                              performRegression()
                              break
                            case 'bayesian':
                              performBayesianInference()
                              break
                            case 'anova':
                              performANOVA()
                              break
                            case 'timeseries':
                              performTimeSeriesAnalysis()
                              break
                            case 'meta':
                              performMetaAnalysis()
                              break
                            case 'power':
                              performPowerAnalysis()
                              break
                            case 'report':
                              generateStatisticalReport()
                              break
                          }
                        }}
                        disabled={isProcessing || isDisabled}
                      >
                        {isProcessing && activeSubSection === subSection.id ? 'Processing...' : 'Run Analysis'}
                      </button>
                    </div>
                  )
                })}
              </div>

              {analysisResults && (
                <div className="analysis-results">
                  <h5>📊 Advanced Analysis Results</h5>
                  <div className="results-container">
                    <pre>{JSON.stringify(analysisResults, null, 2)}</pre>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Transform Section */}
          {activeSection === 'transform' && (
            <div className="transform-section">
              <h4>🔄 Data Transformation</h4>
              <p className="section-desc">Modify and reshape your data</p>

              <div className="transform-options">
                <div className="transform-card">
                  <h5>🧹 Clean Data</h5>
                  <div className="transform-actions">
                    <button className="transform-btn">Remove Duplicates</button>
                    <button className="transform-btn">Fill Missing Values</button>
                    <button className="transform-btn">Trim Whitespace</button>
                    <button className="transform-btn">Remove Empty Rows</button>
                  </div>
                </div>

                <div className="transform-card">
                  <h5>🔢 Normalize</h5>
                  <div className="transform-actions">
                    <button className="transform-btn">Min-Max Scaling</button>
                    <button className="transform-btn">Z-Score Normalization</button>
                    <button className="transform-btn">Log Transform</button>
                    <button className="transform-btn">Percentage Transform</button>
                  </div>
                </div>

                <div className="transform-card">
                  <h5>📊 Aggregate</h5>
                  <div className="transform-actions">
                    <button className="transform-btn">Group By</button>
                    <button className="transform-btn">Pivot Table</button>
                    <button className="transform-btn">Summarize</button>
                    <button className="transform-btn">Cross-Tab</button>
                  </div>
                </div>

                <div className="transform-card">
                  <h5>➕ Add Columns</h5>
                  <div className="transform-actions">
                    <button className="transform-btn">Calculated Column</button>
                    <button className="transform-btn">Index Column</button>
                    <button className="transform-btn">Date Parts</button>
                    <button className="transform-btn">Conditional Column</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Filter & Sort Section */}
          {activeSection === 'filter' && (
            <div className="filter-section">
              <h4>🔍 Filter & Sort Data</h4>
              <p className="section-desc">Organize and filter your data</p>

              <div className="filter-controls">
                <div className="control-group">
                  <h5>Sort Data:</h5>
                  <select className="sort-column">
                    <option value="">Select Column</option>
                    {workbookState.headers.map((header, i) => (
                      <option key={i} value={header}>{header}</option>
                    ))}
                  </select>
                  <select className="sort-order">
                    <option value="asc">Ascending (A→Z, 0→9)</option>
                    <option value="desc">Descending (Z→A, 9→0)</option>
                  </select>
                  <button className="apply-btn">↕️ Apply Sort</button>
                </div>

                <div className="control-group">
                  <h5>Filter Options:</h5>
                  <div className="filter-presets">
                    <button className="preset-btn">Show Top 10</button>
                    <button className="preset-btn">Show Bottom 10</button>
                    <button className="preset-btn">Show Above Average</button>
                    <button className="preset-btn">Show Below Average</button>
                    <button className="preset-btn">Show Unique Only</button>
                    <button className="preset-btn">Clear All Filters</button>
                  </div>
                </div>

                <div className="control-group">
                  <h5>Advanced Filter:</h5>
                  <div className="advanced-filter">
                    <select className="filter-column">
                      <option value="">Select Column</option>
                      {workbookState.headers.map((header, i) => (
                        <option key={i} value={header}>{header}</option>
                      ))}
                    </select>
                    <select className="filter-condition">
                      <option value="equals">Equals</option>
                      <option value="not-equals">Not Equals</option>
                      <option value="greater">Greater Than</option>
                      <option value="less">Less Than</option>
                      <option value="contains">Contains</option>
                      <option value="starts">Starts With</option>
                      <option value="ends">Ends With</option>
                    </select>
                    <input type="text" className="filter-value" placeholder="Value" />
                    <button className="apply-btn">🔍 Apply Filter</button>
                  </div>
                </div>
              </div>

              <div className="active-filters">
                <h5>Active Filters:</h5>
                <div className="filter-chips">
                  <span className="no-filters">No active filters</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Processing Overlay */}
        {isProcessing && (
          <div className="processing-overlay">
            <div className="spinner"></div>
            <p>Processing statistical analysis...</p>
          </div>
        )}
      </div>

      <style jsx>{`
        .data-tab-wrapper {
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
          background: rgba(168, 85, 247, 0.5);
          border-radius: 5px;
        }

        .scrollable-content::-webkit-scrollbar-thumb:hover {
          background: rgba(168, 85, 247, 0.7);
        }

        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          text-align: center;
          padding: 60px 20px;
        }

        .empty-state h3 {
          color: #a855f7;
          font-size: 24px;
          margin: 0 0 10px 0;
        }

        .empty-state p {
          color: #9ca3af;
          margin: 0;
        }

        .tab-header {
          margin-bottom: 20px;
        }

        .tab-header h3 {
          color: #a855f7;
          font-size: 20px;
          margin: 0 0 5px 0;
        }

        .subtitle {
          color: #9ca3af;
          font-size: 13px;
          margin: 0;
        }

        .session-info {
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          border-radius: 6px;
          padding: 8px 12px;
          margin-bottom: 15px;
        }

        .session-info small {
          color: #22c55e;
          font-size: 11px;
          font-family: monospace;
        }

        .section-tabs {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .section-tab {
          padding: 10px 18px;
          background: rgba(168, 85, 247, 0.1);
          border: 2px solid rgba(168, 85, 247, 0.2);
          border-radius: 8px;
          color: #a855f7;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .section-tab:hover {
          background: rgba(168, 85, 247, 0.2);
          transform: translateY(-2px);
        }

        .section-tab.active {
          background: rgba(168, 85, 247, 0.3);
          border-color: #a855f7;
          box-shadow: 0 0 15px rgba(168, 85, 247, 0.4);
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
          color: #a855f7;
          font-size: 18px;
          margin: 0 0 8px 0;
        }

        .section-desc {
          color: #9ca3af;
          font-size: 13px;
          margin: 0 0 20px 0;
        }

        .column-selector {
          background: rgba(59, 130, 246, 0.1);
          border: 2px solid rgba(59, 130, 246, 0.3);
          border-radius: 8px;
          padding: 15px;
          margin-bottom: 20px;
        }

        .column-selector.warning {
          background: rgba(245, 158, 11, 0.1);
          border-color: rgba(245, 158, 11, 0.3);
          color: #f59e0b;
          text-align: center;
        }

        .column-selector label {
          display: block;
          color: #3b82f6;
          font-weight: bold;
          margin-bottom: 10px;
          font-size: 14px;
        }

        .column-select {
          width: 100%;
          padding: 10px 15px;
          background: rgba(0, 0, 0, 0.3);
          border: 2px solid rgba(59, 130, 246, 0.4);
          border-radius: 6px;
          color: #e5e7eb;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .column-select:hover {
          border-color: rgba(59, 130, 246, 0.6);
          background: rgba(0, 0, 0, 0.4);
        }

        .column-select:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
        }

        .warning-message {
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.3);
          border-radius: 6px;
          padding: 12px;
          margin-bottom: 20px;
          text-align: center;
        }

        .warning-message span {
          color: #f59e0b;
          font-size: 14px;
          font-weight: 500;
        }

        .statistics-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px,1fr));
          gap: 15px;
          margin-bottom: 25px;
        }

        .stats-card {
          padding: 15px;
          background: rgba(168, 85, 247, 0.1);
          border: 2px solid rgba(168, 85, 247, 0.2);
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .stats-card:hover {
          background: rgba(168, 85, 247, 0.15);
          transform: translateY(-2px);
        }

        .stats-card.selected {
          background: rgba(168, 85, 247, 0.2);
          border-color: #a855f7;
          box-shadow: 0 0 15px rgba(168, 85, 247, 0.4);
        }

        .stats-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
          padding-bottom: 10px;
          border-bottom: 2px solid rgba(168, 85, 247, 0.3);
        }

        .stats-header h5 {
          color: #a855f7;
          font-size: 16px;
          font-weight: bold;
          margin: 0;
        }

        .badge {
          padding: 4px 10px;
          border-radius: 12px;
          font-size: 10px;
          font-weight: bold;
          text-transform: uppercase;
        }

        .badge.numeric {
          background: rgba(34, 197, 94, 0.2);
          color: #22c55e;
          border: 1px solid rgba(34, 197, 94, 0.4);
        }

        .badge.text {
          background: rgba(59, 130, 246, 0.2);
          color: #3b82f6;
          border: 1px solid rgba(59, 130, 246, 0.4);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
        }

        .stat-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 6px;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 4px;
        }

        .stat-label {
          color: #9ca3af;
          font-size: 12px;
        }

        .stat-value {
          color: #e5e7eb;
          font-size: 14px;
          font-weight: bold;
        }

        .stat-value.highlight {
          color: #a855f7;
        }

        .text-stats {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .analysis-tools {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 15px;
          margin-bottom: 20px;
        }

        .tool-card {
          padding: 20px;
          background: rgba(59, 130, 246, 0.1);
          border: 2px solid rgba(59, 130, 246, 0.2);
          border-radius: 8px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .tool-card.advanced {
          background: rgba(245, 158, 11, 0.1);
          border-color: rgba(245, 158, 11, 0.2);
        }

        .tool-card:hover:not(.disabled) {
          background: rgba(59, 130, 246, 0.15);
          border-color: rgba(59, 130, 246, 0.4);
          transform: translateY(-4px);
        }

        .tool-card.advanced:hover:not(.disabled) {
          background: rgba(245, 158, 11, 0.15);
          border-color: rgba(245, 158, 11, 0.4);
        }

        .tool-card.disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .tool-card.disabled:hover {
          transform: none;
        }

        .tool-icon {
          font-size: 48px;
          margin-bottom: 12px;
        }

        .tool-card h5 {
          color: #3b82f6;
          font-size: 15px;
          margin: 0 0 8px 0;
        }

        .tool-card.advanced h5 {
          color: #f59e0b;
        }

        .tool-description {
          color: #9ca3af;
          font-size: 12px;
          margin: 0 0 15px 0;
          min-height: 36px;
        }

        .requirement-text {
          color: #f59e0b;
          font-size: 11px;
          font-style: italic;
          margin: 5px 0;
          min-height: 0;
        }

        .tool-btn {
          padding: 8px 16px;
          background: rgba(59, 130, 246, 0.2);
          border: 1px solid rgba(59, 130, 246, 0.4);
          border-radius: 6px;
          color: #3b82f6;
          font-size: 12px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
        }

        .tool-card.advanced .tool-btn {
          background: rgba(245, 158, 11, 0.2);
          border-color: rgba(245, 158, 11, 0.4);
          color: #f59e0b;
        }

        .tool-btn:hover:not(:disabled) {
          background: rgba(59, 130, 246, 0.3);
          transform: scale(1.05);
        }

        .tool-card.advanced .tool-btn:hover:not(:disabled) {
          background: rgba(245, 158, 11, 0.3);
        }

        .tool-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .analysis-results {
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: 8px;
          padding: 15px;
          margin-top: 20px;
        }

        .analysis-results h5 {
          color: #10b981;
          font-size: 14px;
          margin: 0 0 10px 0;
        }

        .results-container {
          max-height: 400px;
          overflow-y: auto;
        }

        .results-container::-webkit-scrollbar {
          width: 8px;
        }

        .results-container::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
        }

        .results-container::-webkit-scrollbar-thumb {
          background: rgba(16, 185, 129, 0.5);
          border-radius: 4px;
        }

        .results-container pre {
          color: #e5e7eb;
          font-size: 12px;
          white-space: pre-wrap;
          word-wrap: break-word;
          margin: 0;
        }

        .transform-options {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 15px;
        }

        .transform-card {
          background: rgba(245, 158, 11, 0.1);
          border: 2px solid rgba(245, 158, 11, 0.2);
          border-radius: 8px;
          padding: 15px;
        }

        .transform-card h5 {
          color: #f59e0b;
          font-size: 15px;
          margin: 0 0 12px 0;
        }

        .transform-actions {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .transform-btn {
          padding: 10px;
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.3);
          border-radius: 6px;
          color: #f59e0b;
          font-size: 12px;
          text-align: left;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .transform-btn:hover {
          background: rgba(245, 158, 11, 0.2);
          transform: translateX(5px);
        }

        .filter-controls {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .control-group {
          background: rgba(168, 85, 247, 0.1);
          border: 1px solid rgba(168, 85, 247, 0.2);
          border-radius: 8px;
          padding: 15px;
        }

        .control-group h5 {
          color: #a855f7;
          font-size: 14px;
          margin: 0 0 12px 0;
        }

        .sort-column,
        .sort-order,
        .filter-column,
        .filter-condition {
          padding: 8px 12px;
          background: rgba(0, 0, 0, 0.3);
          border: 2px solid rgba(168, 85, 247, 0.3);
          border-radius: 6px;
          color: #e5e7eb;
          font-size: 13px;
          margin-right: 10px;
          margin-bottom: 10px;
        }

        .filter-value {
          padding: 8px 12px;
          background: rgba(0, 0, 0, 0.3);
          border: 2px solid rgba(168, 85, 247, 0.3);
          border-radius: 6px;
          color: #e5e7eb;
          font-size: 13px;
          margin-right: 10px;
          flex: 1;
        }

        .apply-btn {
          padding: 8px 20px;
          background: rgba(34, 197, 94, 0.2);
          border: 2px solid rgba(34, 197, 94, 0.4);
          border-radius: 6px;
          color: #22c55e;
          font-size: 13px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .apply-btn:hover {
          background: rgba(34, 197, 94, 0.3);
          transform: scale(1.05);
        }

        .filter-presets {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 8px;
        }

        .preset-btn {
          padding: 10px;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 6px;
          color: #3b82f6;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .preset-btn:hover {
          background: rgba(59, 130, 246, 0.2);
          transform: translateY(-2px);
        }

        .advanced-filter {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          align-items: center;
        }

        .active-filters {
          margin-top: 20px;
          padding: 15px;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: 8px;
        }

        .active-filters h5 {
          color: #10b981;
          font-size: 14px;
          margin: 0 0 10px 0;
        }

        .filter-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .no-filters {
          color: #9ca3af;
          font-size: 13px;
          font-style: italic;
        }

        .no-stats {
          text-align: center;
          padding: 40px 20px;
          color: #9ca3af;
        }

        .no-stats p {
          margin: 0;
          font-size: 14px;
        }

        .processing-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 200;
        }

        .spinner {
          width: 50px;
          height: 50px;
          border: 4px solid rgba(168, 85, 247, 0.3);
          border-top-color: #a855f7;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .processing-overlay p {
          color: #a855f7;
          margin-top: 20px;
          font-size: 18px;
          font-weight: bold;
        }

        @media (max-width: 1024px) {
          .statistics-container {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          }

          .analysis-tools {
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

          .statistics-container,
          .analysis-tools,
          .transform-options {
            grid-template-columns: 1fr;
          }

          .filter-presets {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .advanced-filter {
            flex-direction: column;
            align-items: stretch;
          }

          .filter-value {
            width: 100%;
            margin-right: 0;
            margin-bottom: 10px;
          }

          .sort-column,
          .sort-order,
          .filter-column,
          .filter-condition {
            width: 100%;
            margin-right: 0;
          }

          .apply-btn {
            width: 100%;
          }

          .tool-icon {
            font-size: 40px;
          }

          .tool-card h5 {
            font-size: 14px;
          }

          .tool-description {
            font-size: 11px;
            min-height: 32px;
          }
        }

        @media (max-width: 480px) {
          .stats-card {
            padding: 12px;
          }

          .stats-header h5 {
            font-size: 14px;
          }

          .stat-label {
            font-size: 11px;
          }

          .stat-value {
            font-size: 12px;
          }

          .tool-icon {
            font-size: 36px;
          }

          .session-info {
            padding: 6px 10px;
          }

          .session-info small {
            font-size: 10px;
          }
        }
      `}</style>
    </div>
  )
}
