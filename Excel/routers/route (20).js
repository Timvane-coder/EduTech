//api/workbook/statistical-analysis/route.js
import { NextResponse } from 'next/server'
import serverWorkbookManager from '@/lib/workbookManager.server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { sessionId: rawSessionId, operation, ...params } = body
    const sessionId = rawSessionId || 'dev_session'
    if (!sessionId) {
      return NextResponse.json({ error: 'sessionId is required' }, { status: 400 })
    }
    if (!operation) {
      return NextResponse.json({ error: 'operation is required' }, { status: 400 })
    }

    const workbook = serverWorkbookManager.getWorkbook(sessionId)
    if (!workbook) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 })
    }

    let result

    switch (operation) {
      case 'performEDA': {
        const { columnRef, options = {} } = params
        if (!columnRef) return NextResponse.json({ error: 'columnRef is required' }, { status: 400 })
        result = workbook.performEDA(columnRef, options)
        break
      }

      case 'calculateCorrelationMatrix': {
        const { columnRefs, options = {} } = params
        if (!columnRefs || !Array.isArray(columnRefs)) {
          return NextResponse.json({ error: 'columnRefs array is required' }, { status: 400 })
        }
        const stats = workbook.getStatisticalWorkbook()
        const datasets = workbook.extractMultipleColumns(columnRefs, options)
        stats.calculateCorrelationMatrix(datasets)
        result = stats.correlationMatrix
        break
      }

      case 'identifyDistribution': {
        const { columnRef, options = {} } = params
        if (!columnRef) return NextResponse.json({ error: 'columnRef is required' }, { status: 400 })
        result = workbook.identifyDistribution(columnRef, options)
        break
      }

      case 'analyzeDistribution': {
        const { columnRef, distributionType = 'normal', options = {} } = params
        if (!columnRef) return NextResponse.json({ error: 'columnRef is required' }, { status: 400 })
        const data = workbook.extractColumnData(columnRef, options)
        const colIndex = isNaN(columnRef)
          ? workbook.letterToColumn(columnRef)
          : parseInt(columnRef)
        const colName = workbook.headers[colIndex] || columnRef
        const stats = workbook.getStatisticalWorkbook()
        stats.analyzeDistribution({
          samples: data,
          sampleName: colName,
          variableName: colName,
          unitName: options.unitName || 'units',
          distribution: distributionType,
          ...options
        })
        result = {
          columnName: colName,
          distribution: distributionType,
          statistics: stats.statistics,
          distributionAnalysis: stats.distributionAnalysis,
          goodnessOfFit: stats.goodnessOfFit
        }
        break
      }

      case 'checkDistributionAssumptions': {
        const { columnRef, distributionType = 'normal', options = {} } = params
        if (!columnRef) return NextResponse.json({ error: 'columnRef is required' }, { status: 400 })
        const data = workbook.extractColumnData(columnRef, options)
        const stats = workbook.getStatisticalWorkbook()
        stats.loadFromArray(data)
        stats.selectedDistribution = distributionType
        stats.fitDistribution()
        stats.checkDistributionAssumptions()
        result = stats.assumptionChecks
        break
      }

      case 'estimateParameters': {
        const { columnRef, distributionType = 'normal', options = {} } = params
        if (!columnRef) return NextResponse.json({ error: 'columnRef is required' }, { status: 400 })
        const data = workbook.extractColumnData(columnRef, options)
        const stats = workbook.getStatisticalWorkbook()
        stats.loadFromArray(data)
        stats.selectedDistribution = distributionType
        stats.fitDistribution()
        stats.estimateParameters()
        result = stats.parameterEstimates
        break
      }

      case 'performHypothesisTest': {
        const { columnRef, testConfig, options = {} } = params
        if (!columnRef) return NextResponse.json({ error: 'columnRef is required' }, { status: 400 })
        const data = workbook.extractColumnData(columnRef, options)
        const colIndex = isNaN(columnRef)
          ? workbook.letterToColumn(columnRef)
          : parseInt(columnRef)
        const colName = workbook.headers[colIndex] || columnRef
        const stats = workbook.getStatisticalWorkbook()
        stats.loadFromArray(data)
        stats.sampleName = colName
        stats.calculateStatistics()
        stats.performHypothesisTest(testConfig)
        result = {
          columnName: colName,
          testConfig,
          result: stats.hypothesisTests[testConfig?.type || 'oneSample']
        }
        break
      }

      case 'calculateConfidenceIntervals': {
        const { columnRef, distributionType = 'normal', options = {} } = params
        if (!columnRef) return NextResponse.json({ error: 'columnRef is required' }, { status: 400 })
        const data = workbook.extractColumnData(columnRef, options)
        const stats = workbook.getStatisticalWorkbook()
        stats.loadFromArray(data)
        stats.selectedDistribution = distributionType
        stats.fitDistribution()
        stats.calculateConfidenceIntervals(options.levels || [0.90, 0.95, 0.99])
        result = {
          distribution: distributionType,
          distributionCI: stats.confidenceIntervals,
          parameterCI: stats.parameterConfidenceIntervals
        }
        break
      }

      case 'performRegression': {
        const { config: regressionConfig, options = {} } = params
        if (!regressionConfig) return NextResponse.json({ error: 'config is required' }, { status: 400 })
        result = workbook.performRegression(regressionConfig, options)
        break
      }

      case 'performBayesianInference': {
        const { columnRef, priorConfig, options = {} } = params
        if (!columnRef) return NextResponse.json({ error: 'columnRef is required' }, { status: 400 })
        if (!priorConfig) return NextResponse.json({ error: 'priorConfig is required' }, { status: 400 })
        result = workbook.performBayesianInference(columnRef, priorConfig, options)
        break
      }

      case 'performANOVA': {
        const { groupColumns, options = {} } = params
        if (!groupColumns || !Array.isArray(groupColumns)) {
          return NextResponse.json({ error: 'groupColumns array is required' }, { status: 400 })
        }
        const groups = groupColumns.map(col => workbook.extractColumnData(col, options))
        const stats = workbook.getStatisticalWorkbook()
        stats.performANOVA(groups, groupColumns)
        result = stats.anovaResults
        break
      }

      case 'performTimeSeriesAnalysis': {
        const { columnRef, config: tsConfig = {}, options = {} } = params
        if (!columnRef) return NextResponse.json({ error: 'columnRef is required' }, { status: 400 })
        const data = workbook.extractColumnData(columnRef, options)
        const stats = workbook.getStatisticalWorkbook()
        stats.loadFromArray(data)
        stats.performTimeSeriesAnalysis(tsConfig)
        result = stats.timeSeriesAnalysis
        break
      }

      case 'performMetaAnalysis': {
        const { studies, options = {} } = params
        if (!studies || !Array.isArray(studies)) {
          return NextResponse.json({ error: 'studies array is required' }, { status: 400 })
        }
        result = workbook.performMetaAnalysis(studies, options)
        break
      }

      case 'performPowerAnalysis': {
        const { config: powerConfig, options = {} } = params
        if (!powerConfig) return NextResponse.json({ error: 'config is required' }, { status: 400 })
        result = workbook.performPowerAnalysis(powerConfig, options)
        break
      }

      case 'generateStatisticalReport': {
        const { columnRef, options = {} } = params
        if (!columnRef) return NextResponse.json({ error: 'columnRef is required' }, { status: 400 })
        result = workbook.generateStatisticalReport(columnRef, options)
        break
      }

      default:
        return NextResponse.json({ error: `Unknown operation: ${operation}` }, { status: 400 })
    }

    return NextResponse.json(result)
  } catch (error) {
    console.error('Statistical analysis error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
