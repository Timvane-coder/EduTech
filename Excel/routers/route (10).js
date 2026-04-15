//api/workbook/formulas/list/route.js
import { NextResponse } from 'next/server'
import { SpreadsheetFormulaRegistry } from '@/lib/worksheet'

export async function GET(request) {
  try {
    const categories = SpreadsheetFormulaRegistry.getAllCategories()

    const categoriesWithCounts = categories.map(category => {
      const formulas = SpreadsheetFormulaRegistry.getFormulasByCategory(category)
      return {
        name: category,
        count: Object.keys(formulas).length
      }
    })

    return NextResponse.json({
      categories,
      categoriesWithCounts,
      total: categories.length
    })
  } catch (error) {
    console.error('List formulas error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
