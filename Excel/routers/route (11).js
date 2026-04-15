//api/workbook/formulas/category/route.js
import { NextResponse } from 'next/server'
import { SpreadsheetFormulaRegistry } from '@/lib/worksheet'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const categoryName = searchParams.get('name')

    if (!categoryName) {
      return NextResponse.json({ error: 'name is required' }, { status: 400 })
    }

    const formulas = SpreadsheetFormulaRegistry.getFormulasByCategory(categoryName)

    if (!formulas || Object.keys(formulas).length === 0) {
      return NextResponse.json({ error: 'Category not found or empty' }, { status: 404 })
    }

    const clientFormulas = {}
    Object.entries(formulas).forEach(([key, formula]) => {
      clientFormulas[key] = {
        name: formula.name,
        category: formula.category,
        description: formula.description,
        excelFormula: formula.excelFormula,
        example: formula.example,
        params: formula.params,
        paramNames: formula.paramNames,
        usage: formula.usage,
        tips: formula.tips || []
      }
    })

    return NextResponse.json({
      category: categoryName,
      formulas: clientFormulas,
      count: Object.keys(clientFormulas).length
    })
  } catch (error) {
    console.error('Get category formulas error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
