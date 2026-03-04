
import { GraphingCalculator, GraphingCalculatorGame,Theme} from './graphing.js'; 
import { ExcelChartsRegistry, ChartCanvasRenderer} from './chart.js';
import { AnatomicalDiagramsRegistry, AnatomicalShapes,AnatomicalDiagramRenderer} from './anatomy.js';
import { ChemistryDiagramsRegistry, ChemistryDiagramRenderer } from './chemDiagrams.js';
import { PhysicsDiagramsRegistry, PhysicsDiagramRenderer } from './physics.js';
import { StereochemistryDiagramsRegistry,StereochemistryDiagramRenderer,AtomProperties,MolecularGeometry} from './chemistry.js'; 
import { CrossSectionDiagramsRegistry,CrossSectionDiagramRenderer,CrossSectionShapes} from './crossection.js';
import { EnhancedStatisticalWorkbook,StatisticalDistributions,DistributionRegistry} from './workbook.js';
import { GeometricShapesRegistry,GeometricShapeRenderer} from './geometry.js';
import { GraphRegistry,  GraphRenderer} from './graph.js';
import { ChemistryExamPaperGenerator } from './testdocx.js';
import { createCanvas } from '@napi-rs/canvas';
import ExcelJS from 'exceljs';
import fs from 'fs';
import os from 'os';
import path from 'path';
import readline from 'readline';
import * as math from 'mathjs';
import GIFEncoder from 'gifencoder';
import { PassThrough } from 'stream';




// Enhanced Formula Registry for Spreadsheet Operations - UPDATED with 25 Financial Formulas
class SpreadsheetFormulaRegistry {
    static formulas = {
        // Basic Mathematics
        'sum': {
            name: 'Add Numbers',
            category: 'Basic Mathematics',
            excelFormula: 'SUM',
            description: 'Add numbers together',
            example: '=SUM(A1:A10)',
            params: ['range'],
            paramNames: ['Cell Range (e.g., A1:A10)'],
            usage: 'Add all numbers in a range',
            calculate: (values) => values.reduce((sum, val) => sum + (parseFloat(val) || 0), 0)
        },
        'average': {
            name: 'Average Numbers',
            category: 'Basic Mathematics',
            excelFormula: 'AVERAGE',
            description: 'Calculate average of numbers',
            example: '=AVERAGE(A1:A10)',
            params: ['range'],
            paramNames: ['Cell Range'],
            calculate: (values) => {
                const nums = values.filter(v => !isNaN(parseFloat(v))).map(v => parseFloat(v));
                return nums.length > 0 ? nums.reduce((sum, val) => sum + val, 0) / nums.length : 0;
            }
        },
        'max': {
            name: 'Highest Value',
            category: 'Basic Mathematics',
            excelFormula: 'MAX',
            description: 'Find highest value',
            example: '=MAX(A1:A10)',
            params: ['range'],
            calculate: (values) => Math.max(...values.filter(v => !isNaN(parseFloat(v))).map(v => parseFloat(v)))
        },
        'min': {
            name: 'Lowest Value',
            category: 'Basic Mathematics',
            excelFormula: 'MIN',
            description: 'Find lowest value',
            example: '=MIN(A1:A10)',
            params: ['range'],
            calculate: (values) => Math.min(...values.filter(v => !isNaN(parseFloat(v))).map(v => parseFloat(v)))
        },
        'product': {
            name: 'Multiply Numbers',
            category: 'Basic Mathematics',
            excelFormula: 'PRODUCT',
            description: 'Multiply numbers together',
            example: '=PRODUCT(A1:A5)',
            params: ['range'],
            calculate: (values) => values.filter(v => !isNaN(parseFloat(v))).reduce((prod, val) => prod * parseFloat(val), 1)
        },
        'power': {
            name: 'Power (Exponent)',
            category: 'Basic Mathematics',
            excelFormula: 'POWER',
            description: 'Raise number to power',
            example: '=POWER(A1,2)',
            params: ['number', 'power'],
            paramNames: ['Number', 'Power'],
            calculate: (number, power) => Math.pow(parseFloat(number), parseFloat(power))
        },
        'sqrt': {
            name: 'Square Root',
            category: 'Basic Mathematics',
            excelFormula: 'SQRT',
            description: 'Calculate square root',
            example: '=SQRT(A1)',
            params: ['number'],
            calculate: (number) => Math.sqrt(parseFloat(number))
        },
        'round': {
            name: 'Round Number',
            category: 'Basic Mathematics',
            excelFormula: 'ROUND',
            description: 'Round to specified decimals',
            example: '=ROUND(A1,2)',
            params: ['number', 'decimals'],
            paramNames: ['Number', 'Decimal Places'],
            calculate: (number, decimals) => {
                const factor = Math.pow(10, parseInt(decimals) || 0);
                return Math.round(parseFloat(number) * factor) / factor;
            }
        },

'sumByRow': {
    name: 'Sum Each Row Separately',
    category: 'Basic Mathematics',
    excelFormula: 'SUM_BY_ROW',
    description: 'Sum values across columns for each row, results placed in target range',
    example: 'Sum C2:E2, C3:E3, C4:E4 → F2:F4',
    params: ['sourceRange', 'targetRange'],
    paramNames: ['Source Range (e.g., C2:E8)', 'Target Range (e.g., F2:F8)'],
    usage: 'Automatically sums each row in the source range',
    tips: [
        'Source range defines the data to sum (e.g., C2:E8)',
        'Target range defines where results go (e.g., F2:F8)',
        'Number of rows must match between source and target',
        'Works with any number of columns'
    ],
    calculate: () => null // Handled in applyFormulaBatch
},

'productByRow': {
    name: 'Multiply Each Row Separately',
    category: 'Basic Mathematics',
    excelFormula: 'PRODUCT_BY_ROW',
    description: 'Multiply values across columns for each row, results placed in target range',
    example: 'Multiply C2:E2, C3:E3, C4:E4 → F2:F4',
    params: ['sourceRange', 'targetRange'],
    paramNames: ['Source Range (e.g., C2:E8)', 'Target Range (e.g., F2:F8)'],
    usage: 'Automatically multiplies each row in the source range',
    tips: [
        'Source range defines the data to multiply (e.g., C2:E8)',
        'Target range defines where results go (e.g., F2:F8)',
        'Number of rows must match between source and target',
        'Works with any number of columns'
    ],
    calculate: () => null // Handled in applyFormulaBatch
},

'sumByColumn': {
    name: 'Sum Each Column Separately',
    category: 'Basic Mathematics',
    excelFormula: 'SUM_BY_COLUMN',
    description: 'Sum values down rows for each column, results placed in target range',
    example: 'Sum B2:B8, C2:C8, D2:D8 → B9:D9',
    params: ['sourceRange', 'targetRange'],
    paramNames: ['Source Range (e.g., B2:D8)', 'Target Range (e.g., B9:D9)'],
    usage: 'Automatically sums each column in the source range',
    tips: [
        'Source range defines the data to sum (e.g., B2:D8)',
        'Target range defines where results go (e.g., B9:D9)',
        'Number of columns must match between source and target',
        'Works with any number of rows'
    ],
    calculate: () => null // Handled in applyFormulaBatch
},

'averageByRow': {
    name: 'Average Each Row Separately',
    category: 'Basic Mathematics',
    excelFormula: 'AVERAGE_BY_ROW',
    description: 'Calculate average across columns for each row',
    example: 'Average C2:E2, C3:E3, C4:E4 → F2:F4',
    params: ['sourceRange', 'targetRange'],
    paramNames: ['Source Range (e.g., C2:E8)', 'Target Range (e.g., F2:F8)'],
    usage: 'Automatically averages each row in the source range',
    calculate: () => null // Handled in applyFormulaBatch
},


'subtractByRow': {
    name: 'Subtract Each Row Separately',
    category: 'Basic Mathematics',
    excelFormula: 'SUBTRACT_BY_ROW',
    description: 'Subtract values across columns for each row (first - second - third - ...)',
    example: 'Subtract C2:E2, C3:E3, C4:E4 → F2:F4',
    params: ['sourceRange'],
    paramNames: ['Source Range (e.g., C2:E8)'],
    usage: 'Takes first value and subtracts all subsequent values in each row. Target range determines where results go.',
    tips: [
        'Source range defines the data (e.g., C2:E8)',
        'Target range defines where results go (e.g., F2:F8)',
        'Number of rows must match between source and target',
        'Formula: First value - Second value - Third value - ...',
        'Example: If C2=100, D2=30, E2=20, result is 100-30-20=50',
        'Each row gets: =C2-D2-E2, =C3-D3-E3, etc.'
    ],
    calculate: () => null // Handled in applyFormulaBatch
},

'divideByRow': {
    name: 'Divide Each Row Separately',
    category: 'Basic Mathematics',
    excelFormula: 'DIVIDE_BY_ROW',
    description: 'Divide values across columns for each row (first / second / third / ...)',
    example: 'Divide C2:E2, C3:E3, C4:E4 → F2:F4',
    params: ['sourceRange'],
    paramNames: ['Source Range (e.g., C2:E8)'],
    usage: 'Takes first value and divides by all subsequent values in each row. Target range determines where results go.',
    tips: [
        'Source range defines the data (e.g., C2:E8)',
        'Target range defines where results go (e.g., F2:F8)',
        'Number of rows must match between source and target',
        'Formula: First value / Second value / Third value / ...',
        'Example: If C2=100, D2=5, E2=2, result is 100/5/2=10',
        'Each row gets: =C2/D2/E2, =C3/D3/E3, etc.',
        'Will throw error if any divisor is zero'
    ],
    calculate: () => null // Handled in applyFormulaBatch
},

'maxByRow': {
    name: 'Maximum Each Row Separately',
    category: 'Statistical Analysis',
    excelFormula: 'MAX_BY_ROW',
    description: 'Find maximum value across columns for each row',
    example: 'Max of C2:E2, C3:E3, C4:E4 → F2:F4',
    params: ['sourceRange'],
    paramNames: ['Source Range (e.g., C2:E8)'],
    usage: 'Finds the largest value in each row. Target range determines where results go.',
    tips: [
        'Source range defines the data (e.g., C2:E8)',
        'Target range defines where results go (e.g., F2:F8)',
        'Number of rows must match between source and target',
        'Each row gets its own MAX formula: =MAX(C2:E2), =MAX(C3:E3), etc.',
        'Automatically ignores non-numeric values',
        'Useful for finding highest scores, prices, or values per row'
    ],
    calculate: () => null // Handled in applyFormulaBatch
},

'minByRow': {
    name: 'Minimum Each Row Separately',
    category: 'Statistical Analysis',
    excelFormula: 'MIN_BY_ROW',
    description: 'Find minimum value across columns for each row',
    example: 'Min of C2:E2, C3:E3, C4:E4 → F2:F4',
    params: ['sourceRange'],
    paramNames: ['Source Range (e.g., C2:E8)'],
    usage: 'Finds the smallest value in each row. Target range determines where results go.',
    tips: [
        'Source range defines the data (e.g., C2:E8)',
        'Target range defines where results go (e.g., F2:F8)',
        'Number of rows must match between source and target',
        'Each row gets its own MIN formula: =MIN(C2:E2), =MIN(C3:E3), etc.',
        'Automatically ignores non-numeric values',
        'Useful for finding lowest scores, prices, or values per row'
    ],
    calculate: () => null // Handled in applyFormulaBatch
},

'countByRow': {
    name: 'Count Non-Empty Cells Each Row',
    category: 'Statistical Analysis',
    excelFormula: 'COUNT_BY_ROW',
    description: 'Count non-empty cells across columns for each row',
    example: 'Count C2:E2, C3:E3, C4:E4 → F2:F4',
    params: ['sourceRange'],
    paramNames: ['Source Range (e.g., C2:E8)'],
    usage: 'Counts non-empty cells in each row. Target range determines where results go.',
    tips: [
        'Source range defines the data (e.g., C2:E8)',
        'Target range defines where results go (e.g., F2:F8)',
        'Number of rows must match between source and target',
        'Each row gets its own COUNT formula: =COUNT(C2:E2), =COUNT(C3:E3), etc.',
        'Counts cells that are not null, undefined, or empty string',
        'Useful for tracking data completeness per row'
    ],
    calculate: () => null // Handled in applyFormulaBatch
},


        // Financial Functions - EXPANDED
        'pv': {
            name: 'Present Value',
            category: 'Financial & Economic',
            excelFormula: 'PV',
            description: 'Calculate present value of future cash flows',
            example: '=PV(r,n,fv)',
            params: ['rate', 'nper', 'fv', 'pmt'],
            paramNames: ['Interest Rate per Period', 'Number of Periods', 'Future Value', 'Payment per Period (Optional)'],
            usage: 'PV = FV / (1 + r)^n + PMT × [(1 - (1 + r)^-n) / r]',
            calculate: (rate, nper, fv, pmt = 0) => {
                const r = parseFloat(rate);
                const n = parseFloat(nper);
                const fvVal = parseFloat(fv);
                const pmtVal = parseFloat(pmt) || 0;
                
                if (r === 0) return -(fvVal + pmtVal * n);
                
                const pvFromFv = fvVal / Math.pow(1 + r, n);
                const pvFromPmt = pmtVal * ((1 - Math.pow(1 + r, -n)) / r);
                return pvFromFv + pvFromPmt;
            }
        },
        'fv': {
            name: 'Future Value',
            category: 'Financial & Economic',
            excelFormula: 'FV',
            description: 'Calculate future value of investments',
            example: '=FV(rate,nper,pmt,pv)',
            params: ['rate', 'nper', 'pmt', 'pv'],
            paramNames: ['Interest Rate', 'Number of Periods', 'Payment per Period', 'Present Value'],
            usage: 'FV = PV × (1 + r)^n + PMT × [((1 + r)^n - 1) / r]',
            calculate: (rate, nper, pmt, pv) => {
                const r = parseFloat(rate);
                const n = parseFloat(nper);
                const pm = parseFloat(pmt) || 0;
                const p = parseFloat(pv) || 0;
                if (r === 0) return -(p + pm * n);
                return -(p * Math.pow(1 + r, n) + pm * ((Math.pow(1 + r, n) - 1) / r));
            }
        },
        'pmt': {
            name: 'Loan Payment',
            category: 'Financial & Economic',
            excelFormula: 'PMT',
            description: 'Calculate periodic payment for a loan',
            example: '=PMT(rate,nper,pv)',
            params: ['rate', 'nper', 'pv'],
            paramNames: ['Interest Rate per Period', 'Number of Periods', 'Present Value (Loan Amount)'],
            calculate: (rate, nper, pv) => {
                const r = parseFloat(rate);
                const n = parseFloat(nper);
                const p = parseFloat(pv);
                if (r === 0) return -p / n;
                return -(r * p) / (1 - Math.pow(1 + r, -n));
            }
        },
        'compoundInterest': {
            name: 'Compound Interest',
            category: 'Financial & Economic',
            excelFormula: 'COMPOUND_INTEREST',
            description: 'Calculate compound interest amount',
            example: '=P*(1+r/n)^(n*t)',
            params: ['principal', 'rate', 'compoundingPeriods', 'years'],
            paramNames: ['Principal Amount', 'Annual Interest Rate', 'Compounding Periods per Year', 'Number of Years'],
            usage: 'A = P × (1 + r/n)^(n×t)',
            calculate: (principal, rate, n, t) => {
                const p = parseFloat(principal);
                const r = parseFloat(rate);
                const periods = parseFloat(n);
                const years = parseFloat(t);
                return p * Math.pow(1 + (r / periods), periods * years);
            }
        },
        'earEffectiveRate': {
            name: 'Effective Annual Rate (EAR)',
            category: 'Financial & Economic',
            excelFormula: 'EAR',
            description: 'Calculate effective annual interest rate',
            example: '=(1+r/n)^n - 1',
            params: ['nominalRate', 'compoundingPeriods'],
            paramNames: ['Nominal Annual Rate', 'Compounding Periods per Year'],
            usage: 'EAR = (1 + r/n)^n - 1',
            calculate: (nominalRate, n) => {
                const r = parseFloat(nominalRate);
                const periods = parseFloat(n);
                return Math.pow(1 + (r / periods), periods) - 1;
            }
        },
        'npv': {
            name: 'Net Present Value (NPV)',
            category: 'Financial & Economic',
            excelFormula: 'NPV',
            description: 'Calculate net present value of cash flows',
            example: '=NPV(rate,cashflows)',
            params: ['rate', 'cashFlows'],
            paramNames: ['Discount Rate', 'Cash Flows (comma-separated or range)'],
            usage: 'NPV = Σ [CFt / (1 + r)^t]',
            calculate: (rate, cashFlows) => {
                const r = parseFloat(rate);
                const flows = Array.isArray(cashFlows) ? cashFlows : [cashFlows];
                let npv = 0;
                flows.forEach((cf, index) => {
                    npv += parseFloat(cf) / Math.pow(1 + r, index);
                });
                return npv;
            }
        },
        'irr': {
            name: 'Internal Rate of Return (IRR)',
            category: 'Financial & Economic',
            excelFormula: 'IRR',
            description: 'Calculate internal rate of return using Newton-Raphson method',
            example: '=IRR(cashflows)',
            params: ['cashFlows'],
            paramNames: ['Cash Flows (range or array)'],
            usage: 'IRR: Rate where NPV = 0. Uses Newton-Raphson iteration.',
            calculate: (cashFlows) => {
                const flows = Array.isArray(cashFlows) ? cashFlows.map(cf => parseFloat(cf)) : [parseFloat(cashFlows)];
                
                // Newton-Raphson method to find IRR
                let rate = 0.1; // Initial guess
                const maxIterations = 100;
                const tolerance = 1e-6;
                
                for (let i = 0; i < maxIterations; i++) {
                    let npv = 0, dnpv = 0;
                    
                    for (let t = 0; t < flows.length; t++) {
                        const pow = Math.pow(1 + rate, t);
                        npv += flows[t] / pow;
                        if (t > 0) dnpv -= t * flows[t] / Math.pow(1 + rate, t + 1);
                    }
                    
                    const newRate = rate - (npv / dnpv);
                    if (Math.abs(newRate - rate) < tolerance) return rate;
                    rate = newRate;
                }
                
                return rate;
            }
        },
        'paybackPeriod': {
            name: 'Payback Period',
            category: 'Financial & Economic',
            excelFormula: 'PAYBACK_PERIOD',
            description: 'Calculate simple payback period',
            example: '=PAYBACK_PERIOD(initialInvestment,cashflows)',
            params: ['initialInvestment', 'cashFlows'],
            paramNames: ['Initial Investment', 'Annual Cash Flows (range or array)'],
            usage: 'Payback Period = Years when Cumulative Cash Flows = Initial Investment',
            calculate: (initialInvestment, cashFlows) => {
                const investment = parseFloat(initialInvestment);
                const flows = Array.isArray(cashFlows) ? cashFlows.map(cf => parseFloat(cf)) : [parseFloat(cashFlows)];
                
                let cumulative = 0;
                for (let i = 0; i < flows.length; i++) {
                    cumulative += flows[i];
                    if (cumulative >= investment) {
                        const remaining = investment - (cumulative - flows[i]);
                        return i + (remaining / flows[i]);
                    }
                }
                return flows.length; // Not recovered within period
            }
        },
        'discountedPaybackPeriod': {
            name: 'Discounted Payback Period',
            category: 'Financial & Economic',
            excelFormula: 'DISCOUNTED_PAYBACK',
            description: 'Calculate discounted payback period',
            example: '=DISCOUNTED_PAYBACK(initialInvestment,rate,cashflows)',
            params: ['initialInvestment', 'rate', 'cashFlows'],
            paramNames: ['Initial Investment', 'Discount Rate', 'Annual Cash Flows'],
            usage: 'DPB = Years when Σ [CFt / (1 + r)^t] = Initial Investment',
            calculate: (initialInvestment, rate, cashFlows) => {
                const investment = parseFloat(initialInvestment);
                const r = parseFloat(rate);
                const flows = Array.isArray(cashFlows) ? cashFlows.map(cf => parseFloat(cf)) : [parseFloat(cashFlows)];
                
                let cumulative = 0;
                for (let i = 0; i < flows.length; i++) {
                    cumulative += flows[i] / Math.pow(1 + r, i);
                    if (cumulative >= investment) {
                        const remaining = investment - (cumulative - (flows[i] / Math.pow(1 + r, i)));
                        return i + (remaining / (flows[i] / Math.pow(1 + r, i)));
                    }
                }
                return flows.length;
            }
        },
        'currentRatio': {
            name: 'Current Ratio',
            category: 'Financial & Economic',
            excelFormula: 'CURRENT_RATIO',
            description: 'Calculate current ratio (liquidity measure)',
            example: '=CURRENT_RATIO(currentAssets,currentLiabilities)',
            params: ['currentAssets', 'currentLiabilities'],
            paramNames: ['Current Assets', 'Current Liabilities'],
            usage: 'Current Ratio = Current Assets / Current Liabilities',
            calculate: (currentAssets, currentLiabilities) => {
                return parseFloat(currentAssets) / parseFloat(currentLiabilities);
            }
        },
        'quickRatio': {
            name: 'Quick Ratio (Acid-Test)',
            category: 'Financial & Economic',
            excelFormula: 'QUICK_RATIO',
            description: 'Calculate quick ratio excluding inventory',
            example: '=QUICK_RATIO(currentAssets,inventory,currentLiabilities)',
            params: ['currentAssets', 'inventory', 'currentLiabilities'],
            paramNames: ['Current Assets', 'Inventory', 'Current Liabilities'],
            usage: 'Quick Ratio = (Current Assets - Inventory) / Current Liabilities',
            calculate: (currentAssets, inventory, currentLiabilities) => {
                return (parseFloat(currentAssets) - parseFloat(inventory)) / parseFloat(currentLiabilities);
            }
        },
        'workingCapital': {
            name: 'Working Capital',
            category: 'Financial & Economic',
            excelFormula: 'WORKING_CAPITAL',
            description: 'Calculate working capital',
            example: '=WORKING_CAPITAL(currentAssets,currentLiabilities)',
            params: ['currentAssets', 'currentLiabilities'],
            paramNames: ['Current Assets', 'Current Liabilities'],
            usage: 'Working Capital = Current Assets - Current Liabilities',
            calculate: (currentAssets, currentLiabilities) => {
                return parseFloat(currentAssets) - parseFloat(currentLiabilities);
            }
        },
        'cashConversionCycle': {
            name: 'Cash Conversion Cycle',
            category: 'Financial & Economic',
            excelFormula: 'CASH_CONVERSION_CYCLE',
            description: 'Calculate cash conversion cycle',
            example: '=CCC(dio,dro,dpo)',
            params: ['dio', 'dro', 'dpo'],
            paramNames: ['Days Inventory Outstanding', 'Days Receivable Outstanding', 'Days Payable Outstanding'],
            usage: 'CCC = DIO + DRO - DPO',
            calculate: (dio, dro, dpo) => {
                return parseFloat(dio) + parseFloat(dro) - parseFloat(dpo);
            }
        },
        'debtToEquity': {
            name: 'Debt-to-Equity Ratio',
            category: 'Financial & Economic',
            excelFormula: 'DEBT_TO_EQUITY',
            description: 'Calculate debt-to-equity ratio (leverage measure)',
            example: '=DEBT_TO_EQUITY(totalDebt,totalEquity)',
            params: ['totalDebt', 'totalEquity'],
            paramNames: ['Total Debt', 'Total Equity'],
            usage: 'D/E Ratio = Total Debt / Total Equity',
            calculate: (totalDebt, totalEquity) => {
                return parseFloat(totalDebt) / parseFloat(totalEquity);
            }
        },
        'roe': {
            name: 'Return on Equity (ROE)',
            category: 'Financial & Economic',
            excelFormula: 'ROE',
            description: 'Calculate return on equity',
            example: '=ROE(netIncome,averageEquity)',
            params: ['netIncome', 'averageEquity'],
            paramNames: ['Net Income', 'Average Shareholders\' Equity'],
            usage: 'ROE = Net Income / Average Shareholders\' Equity',
            calculate: (netIncome, averageEquity) => {
                return parseFloat(netIncome) / parseFloat(averageEquity);
            }
        },
        'roa': {
            name: 'Return on Assets (ROA)',
            category: 'Financial & Economic',
            excelFormula: 'ROA',
            description: 'Calculate return on assets',
            example: '=ROA(netIncome,averageAssets)',
            params: ['netIncome', 'averageAssets'],
            paramNames: ['Net Income', 'Average Total Assets'],
            usage: 'ROA = Net Income / Average Total Assets',
            calculate: (netIncome, averageAssets) => {
                return parseFloat(netIncome) / parseFloat(averageAssets);
            }
        },
        'grossProfitMargin': {
            name: 'Gross Profit Margin',
            category: 'Financial & Economic',
            excelFormula: 'GROSS_PROFIT_MARGIN',
            description: 'Calculate gross profit margin percentage',
            example: '=GROSS_PROFIT_MARGIN(grossProfit,revenue)',
            params: ['grossProfit', 'revenue'],
            paramNames: ['Gross Profit', 'Revenue'],
            usage: 'Gross Profit Margin = Gross Profit / Revenue',
            calculate: (grossProfit, revenue) => {
                return parseFloat(grossProfit) / parseFloat(revenue);
            }
        },
        'operatingMargin': {
            name: 'Operating Margin',
            category: 'Financial & Economic',
            excelFormula: 'OPERATING_MARGIN',
            description: 'Calculate operating margin percentage',
            example: '=OPERATING_MARGIN(operatingIncome,revenue)',
            params: ['operatingIncome', 'revenue'],
            paramNames: ['Operating Income', 'Revenue'],
            usage: 'Operating Margin = Operating Income / Revenue',
            calculate: (operatingIncome, revenue) => {
                return parseFloat(operatingIncome) / parseFloat(revenue);
            }
        },
        'netProfitMargin': {
            name: 'Net Profit Margin',
            category: 'Financial & Economic',
            excelFormula: 'NET_PROFIT_MARGIN',
            description: 'Calculate net profit margin percentage',
            example: '=NET_PROFIT_MARGIN(netIncome,revenue)',
            params: ['netIncome', 'revenue'],
            paramNames: ['Net Income', 'Revenue'],
            usage: 'Net Profit Margin = Net Income / Revenue',
            calculate: (netIncome, revenue) => {
                return parseFloat(netIncome) / parseFloat(revenue);
            }
        },
        'eps': {
            name: 'Earnings Per Share (EPS)',
            category: 'Financial & Economic',
            excelFormula: 'EPS',
            description: 'Calculate earnings per share',
            example: '=EPS(netIncome,sharesOutstanding)',
            params: ['netIncome', 'sharesOutstanding'],
            paramNames: ['Net Income', 'Weighted Average Shares Outstanding'],
            usage: 'EPS = Net Income / Weighted Average Shares Outstanding',
            calculate: (netIncome, sharesOutstanding) => {
                return parseFloat(netIncome) / parseFloat(sharesOutstanding);
            }
        },
        'peRatio': {
            name: 'Price-to-Earnings Ratio (P/E)',
            category: 'Financial & Economic',
            excelFormula: 'PE_RATIO',
            description: 'Calculate price-to-earnings ratio',
            example: '=PE_RATIO(marketPrice,eps)',
            params: ['marketPrice', 'eps'],
            paramNames: ['Market Price per Share', 'Earnings Per Share'],
            usage: 'P/E Ratio = Market Price per Share / Earnings Per Share',
            calculate: (marketPrice, eps) => {
                return parseFloat(marketPrice) / parseFloat(eps);
            }
        },
        'breakEvenUnits': {
            name: 'Break-Even Units',
            category: 'Financial & Economic',
            excelFormula: 'BREAK_EVEN_UNITS',
            description: 'Calculate break-even point in units',
            example: '=BREAK_EVEN_UNITS(fixedCosts,price,variableCost)',
            params: ['fixedCosts', 'price', 'variableCost'],
            paramNames: ['Fixed Costs', 'Price per Unit', 'Variable Cost per Unit'],
            usage: 'Break-Even Units = Fixed Costs / (Price - Variable Cost per Unit)',
            calculate: (fixedCosts, price, variableCost) => {
                return parseFloat(fixedCosts) / (parseFloat(price) - parseFloat(variableCost));
            }
        },
        'breakEvenRevenue': {
            name: 'Break-Even Revenue',
            category: 'Financial & Economic',
            excelFormula: 'BREAK_EVEN_REVENUE',
            description: 'Calculate break-even point in revenue',
            example: '=BREAK_EVEN_REVENUE(fixedCosts,contributionMarginRatio)',
            params: ['fixedCosts', 'contributionMarginRatio'],
            paramNames: ['Fixed Costs', 'Contribution Margin Ratio'],
            usage: 'Break-Even Revenue = Fixed Costs / Contribution Margin Ratio',
            calculate: (fixedCosts, cmRatio) => {
                return parseFloat(fixedCosts) / parseFloat(cmRatio);
            }
        },
        'dividendDiscountModel': {
            name: 'Dividend Discount Model',
            category: 'Financial & Economic',
            excelFormula: 'DIVIDEND_DISCOUNT_MODEL',
            description: 'Calculate stock value using dividend discount model',
            example: '=DDM(dividend,requiredReturn,growthRate)',
            params: ['dividend', 'requiredReturn', 'growthRate'],
            paramNames: ['Annual Dividend', 'Required Return', 'Perpetual Growth Rate'],
            usage: 'Value = Dividend / (Required Return - Growth Rate)',
            calculate: (dividend, requiredReturn, growthRate) => {
                const d = parseFloat(dividend);
                const r = parseFloat(requiredReturn);
                const g = parseFloat(growthRate);
                
                if (r <= g) return Infinity; // Invalid: growth rate must be less than required return
                return d / (r - g);
            }
        },
        'economicValueAdded': {
            name: 'Economic Value Added (EVA)',
            category: 'Financial & Economic',
            excelFormula: 'EVA',
            description: 'Calculate economic value added',
            example: '=EVA(nopat,wacc,investedCapital)',
            params: ['nopat', 'wacc', 'investedCapital'],
            paramNames: ['NOPAT (Net Operating Profit After Tax)', 'WACC (Weighted Average Cost of Capital)', 'Invested Capital'],
            usage: 'EVA = NOPAT - (WACC × Invested Capital)',
            calculate: (nopat, wacc, investedCapital) => {
                return parseFloat(nopat) - (parseFloat(wacc) * parseFloat(investedCapital));
            }
        },
        'amortizationPayment': {
            name: 'Amortization Payment',
            category: 'Financial & Economic',
            excelFormula: 'AMORTIZATION_PAYMENT',
            description: 'Calculate fixed amortization payment',
            example: '=AMORTIZATION_PAYMENT(principal,rate,periods)',
            params: ['principal', 'rate', 'periods'],
            paramNames: ['Principal Amount', 'Interest Rate per Period', 'Number of Periods'],
            usage: 'Payment = P × [r(1+r)^n] / [(1+r)^n - 1]',
            calculate: (principal, rate, periods) => {
                const p = parseFloat(principal);
                const r = parseFloat(rate);
                const n = parseFloat(periods);
                
                if (r === 0) return p / n;
                return (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
            }
        },

        
        // Economic Functions - MICROECONOMICS
        'marketEquilibriumPrice': {
            name: 'Market Equilibrium Price',
            category: 'Economics',
            excelFormula: 'EQUILIBRIUM_PRICE',
            description: 'Calculate equilibrium price where Qd = Qs',
            example: '=EQUILIBRIUM_PRICE(a,b,c,d)',
            params: ['a', 'b', 'c', 'd'],
            paramNames: ['Demand Intercept (a)', 'Demand Slope (b)', 'Supply Intercept (c)', 'Supply Slope (d)'],
            usage: 'Qd = a - bP, Qs = c + dP, Equilibrium: P = (a - c) / (b + d)',
            calculate: (a, b, c, d) => {
                return (parseFloat(a) - parseFloat(c)) / (parseFloat(b) + parseFloat(d));
            }
        },
        'marketEquilibriumQuantity': {
            name: 'Market Equilibrium Quantity',
            category: 'Economics',
            excelFormula: 'EQUILIBRIUM_QUANTITY',
            description: 'Calculate equilibrium quantity where Qd = Qs',
            example: '=EQUILIBRIUM_QUANTITY(a,b,c,d)',
            params: ['a', 'b', 'c', 'd'],
            paramNames: ['Demand Intercept (a)', 'Demand Slope (b)', 'Supply Intercept (c)', 'Supply Slope (d)'],
            usage: 'Q = a - b×P, substitute equilibrium price',
            calculate: (a, b, c, d) => {
                const price = (parseFloat(a) - parseFloat(c)) / (parseFloat(b) + parseFloat(d));
                return parseFloat(a) - parseFloat(b) * price;
            }
        },
        'priceElasticityDemand': {
            name: 'Price Elasticity of Demand',
            category: 'Economics',
            excelFormula: 'PRICE_ELASTICITY_DEMAND',
            description: 'Calculate price elasticity of demand',
            example: '=PED(percentChangeQ,percentChangeP)',
            params: ['percentChangeQuantity', 'percentChangePrice'],
            paramNames: ['% Change in Quantity', '% Change in Price'],
            usage: 'Ed = (%ΔQ / %ΔP)',
            calculate: (pctChangeQ, pctChangeP) => {
                return parseFloat(pctChangeQ) / parseFloat(pctChangeP);
            }
        },
        'priceElasticitySupply': {
            name: 'Price Elasticity of Supply',
            category: 'Economics',
            excelFormula: 'PRICE_ELASTICITY_SUPPLY',
            description: 'Calculate price elasticity of supply',
            example: '=PES(percentChangeQs,percentChangeP)',
            params: ['percentChangeQuantity', 'percentChangePrice'],
            paramNames: ['% Change in Quantity Supplied', '% Change in Price'],
            usage: 'Es = (%ΔQs / %ΔP)',
            calculate: (pctChangeQ, pctChangeP) => {
                return parseFloat(pctChangeQ) / parseFloat(pctChangeP);
            }
        },
        'crossPriceElasticity': {
            name: 'Cross-Price Elasticity',
            category: 'Economics',
            excelFormula: 'CROSS_PRICE_ELASTICITY',
            description: 'Calculate cross-price elasticity between two goods',
            example: '=CROSS_ELASTICITY(percentChangeQx,percentChangePy)',
            params: ['percentChangeQx', 'percentChangePy'],
            paramNames: ['% Change in Quantity of Good X', '% Change in Price of Good Y'],
            usage: 'Exy = (%ΔQx / %ΔPy)',
            calculate: (pctChangeQx, pctChangePy) => {
                return parseFloat(pctChangeQx) / parseFloat(pctChangePy);
            }
        },
        'incomeElasticity': {
            name: 'Income Elasticity of Demand',
            category: 'Economics',
            excelFormula: 'INCOME_ELASTICITY',
            description: 'Calculate income elasticity of demand',
            example: '=INCOME_ELASTICITY(percentChangeQ,percentChangeIncome)',
            params: ['percentChangeQuantity', 'percentChangeIncome'],
            paramNames: ['% Change in Quantity', '% Change in Income'],
            usage: 'Ei = (%ΔQ / %ΔIncome)',
            calculate: (pctChangeQ, pctChangeIncome) => {
                return parseFloat(pctChangeQ) / parseFloat(pctChangeIncome);
            }
        },
        'consumerSurplus': {
            name: 'Consumer Surplus',
            category: 'Economics',
            excelFormula: 'CONSUMER_SURPLUS',
            description: 'Calculate consumer surplus',
            example: '=CONSUMER_SURPLUS(reservationPrice,marketPrice,quantity)',
            params: ['reservationPrice', 'marketPrice', 'quantity'],
            paramNames: ['Reservation Price', 'Market Price', 'Quantity'],
            usage: 'CS = 0.5 × (Reservation Price - Market Price) × Quantity',
            calculate: (reservationPrice, marketPrice, quantity) => {
                return 0.5 * (parseFloat(reservationPrice) - parseFloat(marketPrice)) * parseFloat(quantity);
            }
        },
        'producerSurplus': {
            name: 'Producer Surplus',
            category: 'Economics',
            excelFormula: 'PRODUCER_SURPLUS',
            description: 'Calculate producer surplus',
            example: '=PRODUCER_SURPLUS(marketPrice,minSupplyPrice,quantity)',
            params: ['marketPrice', 'minSupplyPrice', 'quantity'],
            paramNames: ['Market Price', 'Minimum Supply Price', 'Quantity'],
            usage: 'PS = 0.5 × (Market Price - Minimum Supply Price) × Quantity',
            calculate: (marketPrice, minSupplyPrice, quantity) => {
                return 0.5 * (parseFloat(marketPrice) - parseFloat(minSupplyPrice)) * parseFloat(quantity);
            }
        },
        'marginalUtilityPerDollar': {
            name: 'Marginal Utility per Dollar',
            category: 'Economics',
            excelFormula: 'MU_PER_DOLLAR',
            description: 'Calculate marginal utility per dollar spent',
            example: '=MU_PER_DOLLAR(marginalUtility,price)',
            params: ['marginalUtility', 'price'],
            paramNames: ['Marginal Utility', 'Price'],
            usage: 'MU/P (for consumer optimization)',
            calculate: (mu, price) => {
                return parseFloat(mu) / parseFloat(price);
            }
        },
        'profitMaximization': {
            name: 'Profit (TR - TC)',
            category: 'Economics',
            excelFormula: 'PROFIT',
            description: 'Calculate profit from total revenue and total cost',
            example: '=PROFIT(totalRevenue,totalCost)',
            params: ['totalRevenue', 'totalCost'],
            paramNames: ['Total Revenue', 'Total Cost'],
            usage: 'Profit = Total Revenue - Total Cost',
            calculate: (tr, tc) => {
                return parseFloat(tr) - parseFloat(tc);
            }
        },
        'averageTotalCost': {
            name: 'Average Total Cost (ATC)',
            category: 'Economics',
            excelFormula: 'ATC',
            description: 'Calculate average total cost',
            example: '=ATC(totalCost,quantity)',
            params: ['totalCost', 'quantity'],
            paramNames: ['Total Cost', 'Quantity'],
            usage: 'ATC = TC / Q',
            calculate: (tc, q) => {
                return parseFloat(tc) / parseFloat(q);
            }
        },
        'marginalCost': {
            name: 'Marginal Cost (MC)',
            category: 'Economics',
            excelFormula: 'MARGINAL_COST',
            description: 'Calculate marginal cost',
            example: '=MC(changeTotalCost,changeQuantity)',
            params: ['changeTotalCost', 'changeQuantity'],
            paramNames: ['Change in Total Cost', 'Change in Quantity'],
            usage: 'MC = ΔTC / ΔQ',
            calculate: (changeTC, changeQ) => {
                return parseFloat(changeTC) / parseFloat(changeQ);
            }
        },
        'totalRevenue': {
            name: 'Total Revenue',
            category: 'Economics',
            excelFormula: 'TOTAL_REVENUE',
            description: 'Calculate total revenue',
            example: '=TOTAL_REVENUE(price,quantity)',
            params: ['price', 'quantity'],
            paramNames: ['Price', 'Quantity'],
            usage: 'TR = P × Q',
            calculate: (price, quantity) => {
                return parseFloat(price) * parseFloat(quantity);
            }
        },
        'taxIncidenceConsumer': {
            name: 'Tax Incidence (Consumer)',
            category: 'Economics',
            excelFormula: 'TAX_INCIDENCE_CONSUMER',
            description: 'Calculate consumer burden of tax',
            example: '=TAX_INCIDENCE_CONSUMER(elasticitySupply,elasticityDemand)',
            params: ['elasticitySupply', 'elasticityDemand'],
            paramNames: ['Elasticity of Supply (|Es|)', 'Elasticity of Demand (|Ed|)'],
            usage: 'Consumer Burden = |Es| / (|Ed| + |Es|)',
            calculate: (es, ed) => {
                const absEs = Math.abs(parseFloat(es));
                const absEd = Math.abs(parseFloat(ed));
                return absEs / (absEd + absEs);
            }
        },
        'deadweightLoss': {
            name: 'Deadweight Loss from Tax',
            category: 'Economics',
            excelFormula: 'DEADWEIGHT_LOSS',
            description: 'Calculate deadweight loss from taxation',
            example: '=DWL(tax,changeQuantity)',
            params: ['tax', 'changeQuantity'],
            paramNames: ['Tax Amount', 'Change in Quantity'],
            usage: 'DWL = 0.5 × Tax × ΔQuantity',
            calculate: (tax, deltaQ) => {
                return 0.5 * parseFloat(tax) * parseFloat(deltaQ);
            }
        },

        // Economic Functions - MACROECONOMICS
        'gdp': {
            name: 'Gross Domestic Product (GDP)',
            category: 'Economics',
            excelFormula: 'GDP',
            description: 'Calculate GDP using expenditure approach',
            example: '=GDP(consumption,investment,govSpending,exports,imports)',
            params: ['consumption', 'investment', 'govSpending', 'exports', 'imports'],
            paramNames: ['Consumption (C)', 'Investment (I)', 'Government Spending (G)', 'Exports (X)', 'Imports (M)'],
            usage: 'GDP = C + I + G + (X - M)',
            calculate: (c, i, g, x, m) => {
                return parseFloat(c) + parseFloat(i) + parseFloat(g) + parseFloat(x) - parseFloat(m);
            }
        },
        'realGDP': {
            name: 'Real GDP',
            category: 'Economics',
            excelFormula: 'REAL_GDP',
            description: 'Calculate real GDP adjusted for inflation',
            example: '=REAL_GDP(nominalGDP,gdpDeflator)',
            params: ['nominalGDP', 'gdpDeflator'],
            paramNames: ['Nominal GDP', 'GDP Deflator'],
            usage: 'Real GDP = (Nominal GDP / GDP Deflator) × 100',
            calculate: (nominalGDP, deflator) => {
                return (parseFloat(nominalGDP) / parseFloat(deflator)) * 100;
            }
        },
        'gdpDeflator': {
            name: 'GDP Deflator',
            category: 'Economics',
            excelFormula: 'GDP_DEFLATOR',
            description: 'Calculate GDP deflator',
            example: '=GDP_DEFLATOR(nominalGDP,realGDP)',
            params: ['nominalGDP', 'realGDP'],
            paramNames: ['Nominal GDP', 'Real GDP'],
            usage: 'GDP Deflator = (Nominal GDP / Real GDP) × 100',
            calculate: (nominalGDP, realGDP) => {
                return (parseFloat(nominalGDP) / parseFloat(realGDP)) * 100;
            }
        },
        'fiscalMultiplier': {
            name: 'Fiscal Multiplier',
            category: 'Economics',
            excelFormula: 'FISCAL_MULTIPLIER',
            description: 'Calculate fiscal spending multiplier',
            example: '=FISCAL_MULTIPLIER(mpc)',
            params: ['mpc'],
            paramNames: ['Marginal Propensity to Consume (MPC)'],
            usage: 'Multiplier = 1 / (1 - MPC)',
            calculate: (mpc) => {
                return 1 / (1 - parseFloat(mpc));
            }
        },
        'taxMultiplier': {
            name: 'Tax Multiplier',
            category: 'Economics',
            excelFormula: 'TAX_MULTIPLIER',
            description: 'Calculate tax multiplier effect',
            example: '=TAX_MULTIPLIER(mpc)',
            params: ['mpc'],
            paramNames: ['Marginal Propensity to Consume (MPC)'],
            usage: 'Tax Multiplier = -MPC / (1 - MPC)',
            calculate: (mpc) => {
                const mpcVal = parseFloat(mpc);
                return -mpcVal / (1 - mpcVal);
            }
        },
        'inflationRate': {
            name: 'Inflation Rate',
            category: 'Economics',
            excelFormula: 'INFLATION_RATE',
            description: 'Calculate inflation rate using CPI',
            example: '=INFLATION_RATE(cpi1,cpi0)',
            params: ['cpi1', 'cpi0'],
            paramNames: ['Current CPI', 'Previous CPI'],
            usage: 'Inflation Rate = ((CPI₁ - CPI₀) / CPI₀) × 100',
            calculate: (cpi1, cpi0) => {
                return ((parseFloat(cpi1) - parseFloat(cpi0)) / parseFloat(cpi0)) * 100;
            }
        },
        'unemploymentRate': {
            name: 'Unemployment Rate',
            category: 'Economics',
            excelFormula: 'UNEMPLOYMENT_RATE',
            description: 'Calculate unemployment rate',
            example: '=UNEMPLOYMENT_RATE(unemployed,laborForce)',
            params: ['unemployed', 'laborForce'],
            paramNames: ['Number Unemployed', 'Labor Force'],
            usage: 'Unemployment Rate = (Unemployed / Labor Force) × 100',
            calculate: (unemployed, laborForce) => {
                return (parseFloat(unemployed) / parseFloat(laborForce)) * 100;
            }
        },
        'moneyMultiplier': {
            name: 'Money Multiplier',
            category: 'Economics',
            excelFormula: 'MONEY_MULTIPLIER',
            description: 'Calculate money multiplier',
            example: '=MONEY_MULTIPLIER(reserveRatio)',
            params: ['reserveRatio'],
            paramNames: ['Reserve Ratio'],
            usage: 'Money Multiplier = 1 / Reserve Ratio',
            calculate: (reserveRatio) => {
                return 1 / parseFloat(reserveRatio);
            }
        },
        'quantityTheoryPrice': {
            name: 'Quantity Theory of Money (Price Level)',
            category: 'Economics',
            excelFormula: 'QTM_PRICE',
            description: 'Calculate price level using quantity theory',
            example: '=QTM_PRICE(moneySupply,velocity,realOutput)',
            params: ['moneySupply', 'velocity', 'realOutput'],
            paramNames: ['Money Supply (M)', 'Velocity (V)', 'Real Output (Y)'],
            usage: 'MV = PY, therefore P = MV / Y',
            calculate: (m, v, y) => {
                return (parseFloat(m) * parseFloat(v)) / parseFloat(y);
            }
        },
        'economicGrowthRate': {
            name: 'Economic Growth Rate',
            category: 'Economics',
            excelFormula: 'GROWTH_RATE',
            description: 'Calculate economic growth rate',
            example: '=GROWTH_RATE(gdp1,gdp0)',
            params: ['gdp1', 'gdp0'],
            paramNames: ['Current GDP', 'Previous GDP'],
            usage: 'Growth Rate = ((GDP₁ - GDP₀) / GDP₀) × 100',
            calculate: (gdp1, gdp0) => {
                return ((parseFloat(gdp1) - parseFloat(gdp0)) / parseFloat(gdp0)) * 100;
            }
        },
        'solowSteadyStateGrowth': {
            name: 'Solow Steady State Growth',
            category: 'Economics',
            excelFormula: 'SOLOW_GROWTH',
            description: 'Calculate steady state growth rate',
            example: '=SOLOW_GROWTH(populationGrowth,techProgress)',
            params: ['populationGrowth', 'techProgress'],
            paramNames: ['Population Growth Rate (n)', 'Technological Progress (g)'],
            usage: 'Steady State Growth = n + g',
            calculate: (n, g) => {
                return parseFloat(n) + parseFloat(g);
            }
        },
        'realInterestRate': {
            name: 'Real Interest Rate',
            category: 'Economics',
            excelFormula: 'REAL_INTEREST_RATE',
            description: 'Calculate real interest rate',
            example: '=REAL_INTEREST_RATE(nominalRate,inflationRate)',
            params: ['nominalRate', 'inflationRate'],
            paramNames: ['Nominal Interest Rate', 'Inflation Rate'],
            usage: 'Real Rate = Nominal Rate - Inflation Rate',
            calculate: (nominalRate, inflationRate) => {
                return parseFloat(nominalRate) - parseFloat(inflationRate);
            }
        },
        'aggregateExpenditure': {
            name: 'Aggregate Expenditure',
            category: 'Economics',
            excelFormula: 'AGGREGATE_EXPENDITURE',
            description: 'Calculate aggregate expenditure',
            example: '=AE(consumption,investment,govSpending,netExports)',
            params: ['consumption', 'investment', 'govSpending', 'netExports'],
            paramNames: ['Consumption (C)', 'Investment (I)', 'Government Spending (G)', 'Net Exports (NX)'],
            usage: 'AE = C + I + G + NX',
            calculate: (c, i, g, nx) => {
                return parseFloat(c) + parseFloat(i) + parseFloat(g) + parseFloat(nx);
            }
        },
        'exchangeRate': {
            name: 'Exchange Rate',
            category: 'Economics',
            excelFormula: 'EXCHANGE_RATE',
            description: 'Calculate exchange rate',
            example: '=EXCHANGE_RATE(domesticCurrency,foreignCurrency)',
            params: ['domesticCurrency', 'foreignCurrency'],
            paramNames: ['Domestic Currency Amount', 'Foreign Currency Amount'],
            usage: 'Exchange Rate = Domestic Currency / Foreign Currency',
            calculate: (domestic, foreign) => {
                return parseFloat(domestic) / parseFloat(foreign);
            }
        },
        'balanceOfPayments': {
            name: 'Balance of Payments',
            category: 'Economics',
            excelFormula: 'BALANCE_OF_PAYMENTS',
            description: 'Calculate balance of payments',
            example: '=BOP(currentAccount,capitalAccount,financialAccount)',
            params: ['currentAccount', 'capitalAccount', 'financialAccount'],
            paramNames: ['Current Account', 'Capital Account', 'Financial Account'],
            usage: 'BOP = Current Account + Capital Account + Financial Account',
            calculate: (current, capital, financial) => {
                return parseFloat(current) + parseFloat(capital) + parseFloat(financial);
            }
        },

        // Budget & Business

        // Budget & Business
        'budgetDifference': {
            name: 'Budget vs Actual Difference',
            category: 'Budget & Business',
            excelFormula: 'SUBTRACT',
            description: 'Calculate difference between budget and actual',
            example: '=C2-D2',
            params: ['budget', 'actual'],
            paramNames: ['Budget Amount', 'Actual Amount'],
            calculate: (budget, actual) => parseFloat(actual) - parseFloat(budget)
        },
        'budgetPercentage': {
            name: '% of Budget Used',
            category: 'Budget & Business',
            excelFormula: 'DIVIDE',
            description: 'Calculate percentage of budget used',
            example: '=D2/C2',
            params: ['actual', 'budget'],
            paramNames: ['Actual Amount', 'Budget Amount'],
            calculate: (actual, budget) => (parseFloat(actual) / parseFloat(budget))
        },
        'profitMargin': {
            name: 'Profit Margin %',
            category: 'Budget & Business',
            excelFormula: 'PROFIT_MARGIN',
            description: 'Calculate profit margin percentage',
            example: '=(Revenue-Expenses)/Revenue',
            params: ['revenue', 'expenses'],
            paramNames: ['Revenue', 'Expenses'],
            calculate: (revenue, expenses) => ((parseFloat(revenue) - parseFloat(expenses)) / parseFloat(revenue))
        },
        'breakEven': {
            name: 'Break-Even Units',
            category: 'Budget & Business',
            excelFormula: 'BREAK_EVEN',
            description: 'Calculate break-even units',
            example: '=FixedCosts/(Price-VariableCost)',
            params: ['fixedCosts', 'price', 'variableCost'],
            paramNames: ['Fixed Costs', 'Price per Unit', 'Variable Cost per Unit'],
            calculate: (fixed, price, variable) => parseFloat(fixed) / (parseFloat(price) - parseFloat(variable))
        },

        // Statistics
        'median': {
            name: 'Median Value',
            category: 'Statistics & Science',
            excelFormula: 'MEDIAN',
            description: 'Find middle value',
            example: '=MEDIAN(A1:A10)',
            params: ['range'],
            calculate: (values) => {
                const sorted = values.filter(v => !isNaN(parseFloat(v))).map(v => parseFloat(v)).sort((a, b) => a - b);
                const mid = Math.floor(sorted.length / 2);
                return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
            }
        },
        'stdev': {
            name: 'Standard Deviation',
            category: 'Statistics & Science',
            excelFormula: 'STDEV',
            description: 'Calculate standard deviation',
            example: '=STDEV(A1:A10)',
            params: ['range'],
            calculate: (values) => {
                const nums = values.filter(v => !isNaN(parseFloat(v))).map(v => parseFloat(v));
                const avg = nums.reduce((sum, val) => sum + val, 0) / nums.length;
                const variance = nums.reduce((sum, val) => sum + Math.pow(val - avg, 2), 0) / (nums.length - 1);
                return Math.sqrt(variance);
            }
        },

        
        // Date & Time
        'today': {
            name: "Today's Date",
            category: 'Date & Time',
            excelFormula: 'TODAY',
            description: 'Get current date',
            example: '=TODAY()',
            params: [],
            calculate: () => new Date().toISOString().split('T')[0]
        },
        'datedif': {
            name: 'Days Between Dates',
            category: 'Date & Time',
            excelFormula: 'DATEDIF',
            description: 'Calculate days between dates',
            example: '=DATEDIF(Start,End,"d")',
            params: ['startDate', 'endDate'],
            paramNames: ['Start Date', 'End Date'],
            calculate: (start, end) => {
                const d1 = new Date(start);
                const d2 = new Date(end);
                return Math.floor((d2 - d1) / (1000 * 60 * 60 * 24));
            }
        },

        // Logical
        'if': {
            name: 'IF Statement',
            category: 'Logical & Error Handling',
            excelFormula: 'IF',
            description: 'Conditional logic',
            example: '=IF(A1>100,"Yes","No")',
            params: ['condition', 'valueIfTrue', 'valueIfFalse'],
            paramNames: ['Condition', 'Value if True', 'Value if False'],
            calculate: (condition, valueTrue, valueFalse) => condition ? valueTrue : valueFalse
        },

        // Text Functions
        'concatenate': {
            name: 'Join Text',
            category: 'Text Functions',
            excelFormula: 'CONCATENATE',
            description: 'Combine text values',
            example: '=A1&" "&B1',
            params: ['text1', 'text2'],
            paramNames: ['Text 1', 'Text 2'],
            calculate: (text1, text2) => String(text1) + String(text2)
        },
        'upper': {
            name: 'Convert to Uppercase',
            category: 'Text Functions',
            excelFormula: 'UPPER',
            description: 'Convert text to uppercase',
            example: '=UPPER(A1)',
            params: ['text'],
            calculate: (text) => String(text).toUpperCase()
        },
        'lower': {
            name: 'Convert to Lowercase',
            category: 'Text Functions',
            excelFormula: 'LOWER',
            description: 'Convert text to lowercase',
            example: '=LOWER(A1)',
            params: ['text'],
            calculate: (text) => String(text).toLowerCase()
        },
        'len': {
            name: 'Text Length',
            category: 'Text Functions',
            excelFormula: 'LEN',
            description: 'Count characters in text',
            example: '=LEN(A1)',
            params: ['text'],
            calculate: (text) => String(text).length
        }
    };

    static getFormula(key) {
        return this.formulas[key];
    }

    static getAllFormulas() {
        return Object.keys(this.formulas);
    }

    static getFormulasByCategory(category) {
        return Object.entries(this.formulas)
            .filter(([_, formula]) => formula.category === category)
            .reduce((acc, [key, formula]) => {
                acc[key] = formula;
                return acc;
            }, {});
    }

    static getAllCategories() {
        return [...new Set(Object.values(this.formulas).map(f => f.category))];
    }

    static searchFormulas(query) {
        const lowerQuery = query.toLowerCase();
        return Object.entries(this.formulas)
            .filter(([key, formula]) =>
                formula.name.toLowerCase().includes(lowerQuery) ||
                formula.description.toLowerCase().includes(lowerQuery) ||
                key.toLowerCase().includes(lowerQuery)
            )
            .reduce((acc, [key, formula]) => {
                acc[key] = formula;
                return acc;
            }, {});
    }

    // Get formulas by category with metadata
    static getCategoryStats() {
        const stats = {};
        this.getAllCategories().forEach(category => {
            const formulas = this.getFormulasByCategory(category);
            stats[category] = {
                count: Object.keys(formulas).length,
                formulas: Object.keys(formulas)
            };
        });
        return stats;
    }

    // Get financial formulas specifically
    static getFinancialFormulas() {
        return this.getFormulasByCategory('Financial & Economic');
    }

    // Check if formula exists
    static formulaExists(key) {
        return this.formulas.hasOwnProperty(key);
    }
}













// ============================================================================
// ADD THIS TO EnhancedSpreadsheetWorkbook CLASS
export class EnhancedSpreadsheetWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1600;
        this.height = options.height || 2000;
        this.theme = options.theme || 'professional';

        // Spreadsheet data
        this.data = [];
        this.headers = [];
        this.formulas = {};
        this.calculations = {};
        this.history = [];

        // Chart management
        this.charts = [];
        this.chartRenderer = new ChartCanvasRenderer();

        // Anatomical diagram management
        this.anatomicalDiagrams = [];
        this.diagramRenderer = new AnatomicalDiagramRenderer(null);

        // Chemistry diagram management
        this.chemistryDiagrams = [];
        this.chemistryDiagramRenderer = new ChemistryDiagramRenderer(null);

         // Physics diagram management
        this.physicsDiagrams = [];
        this.physicsDiagramRenderer = new PhysicsDiagramRenderer(null);

        // Cross-section diagram management
        this.crossSectionDiagrams = [];
        this.crossSectionRenderer = new CrossSectionDiagramRenderer(null);

        // Stereochemistry diagram management
        this.stereochemistryDiagrams = [];
        this.stereochemistryRenderer = new StereochemistryDiagramRenderer(null);

        // Graphing Calculator management
        this.graphingCalculator = null;

        this.statisticalWorkbook = null;
        this.statisticalAnalyses = {};
        this.distributionFits = {};
        this.statisticalReports = [];

          // Geometric shapes management
        this.geometricShapes = [];
        this.geometricRenderer = new GeometricShapeRenderer(null);

        // Add these properties to the constructor:
        this.graphs = [];
        this.graphRenderer = new GraphRenderer(null);

        this.examPaperGenerator = new ChemistryExamPaperGenerator();
        this.examPapers = [];
        this.currentExamConfig = null;
        this.examHistory = [];

        
        // Update unified diagram tracking
        this.allDiagrams = {
            anatomical: this.anatomicalDiagrams,
            crossSection: this.crossSectionDiagrams,
            stereochemistry: this.stereochemistryDiagrams,
            geometric: this.geometricShapes
        };

        // Visual settings
        this.cellWidth = 150;
        this.cellHeight = 30;
        this.headerHeight = 35;
        this.fontSize = 11;
        this.headerFontSize = 12;

        // Metadata
        this.sheetName = options.sheetName || 'Sheet1';
        this.createdDate = new Date();
        this.lastModified = new Date();
        this.author = options.author || 'User';

        this.setThemeColors();
    }

    // ==================== THEME COLORS ====================
    setThemeColors() {
        const themes = {
            professional: {
                background: '#ffffff',
                gridColor: '#e0e0e0',
                headerBg: '#2c3e50',
                headerText: '#ffffff',
                cellBg: '#ffffff',
                cellText: '#000000',
                borderColor: '#c0c0c0'
            },
            dark: {
                background: '#1e1e1e',
                gridColor: '#404040',
                headerBg: '#0d47a1',
                headerText: '#ffffff',
                cellBg: '#2d2d2d',
                cellText: '#ffffff',
                borderColor: '#505050'
            },
            light: {
                background: '#f5f5f5',
                gridColor: '#d0d0d0',
                headerBg: '#4caf50',
                headerText: '#ffffff',
                cellBg: '#ffffff',
                cellText: '#000000',
                borderColor: '#bdbdbd'
            }
        };
        this.colors = themes[this.theme] || themes.professional;
    }

    



// ========== GEOMETRIC SHAPES MANAGEMENT METHODS ==========

/**
 * Get all available geometric shapes
 */


getAvailableGeometricShapes() {
    const shapes = {};
    const categories = ['2D Shapes', '3D Shapes'];

    categories.forEach(category => {
        shapes[category] = GeometricShapesRegistry.getShapesByCategory(category);
    });

    return shapes;
}

/**
 * Get geometric shapes by dimensionality
 */

getGeometricShapesByDimensionality(dimensionality) {
    return GeometricShapesRegistry.getShapesByDimensionality(dimensionality);
}

/**
 * Search geometric shapes
 */
searchGeometricShapes(query) {
    return GeometricShapesRegistry.searchShapes(query);
}

/**
 * Get geometric shape help
 */

getGeometricShapeHelp(shapeKey) {
    const shape = GeometricShapesRegistry.getShape(shapeKey);
    if (!shape) {
        return { error: 'Shape not found' };
    }

    return {
        name: shape.name,
        category: shape.category,
        description: shape.description,
        dimensionality: shape.dimensionality,
        usage: shape.usage,
        examples: shape.examples,
        configParameters: shape.configParameters,
        calculations: shape.calculations,
        defaultOptions: shape.defaultOptions
    };
}

/**
 * Add geometric shape to workbook
 */
addGeometricShape(config) {
    const {
        key,
        title = null,
        config: shapeConfig = {},
        options = {},
        filename = null
    } = config;

    // Validate shape exists
    const shape = GeometricShapesRegistry.getShape(key);
    if (!shape) {
        throw new Error(`Geometric shape '${key}' not found`);
    }

    // Merge configuration
    const mergedConfig = { ...shape.defaultOptions, ...shapeConfig };
    const mergedOptions = { ...options };

    // Validate configuration
    const validation = GeometricShapesRegistry.validateShapeConfig(key, mergedConfig);
    if (!validation.valid) {
        throw new Error(`Invalid configuration: ${validation.errors.join(', ')}`);
    }

    // Store shape
    const shapeObj = {
        id: `geometric_${this.geometricShapes.length + 1}`,
        key,
        title: title || `${shape.name} ${this.geometricShapes.length + 1}`,
        config: mergedConfig,
        options: mergedOptions,
        filename: filename || `${this.sheetName}_${key}_${Date.now()}.png`,
        createdAt: new Date(),
        category: shape.category,
        dimensionality: shape.dimensionality
    };

    this.geometricShapes.push(shapeObj);
    this.addToHistory(`Added geometric shape: ${shape.name}`);
    this.lastModified = new Date();

    return shapeObj;
}

/**
 * Update geometric shape
 */

updateGeometricShape(shapeIndex, updates) {
    if (shapeIndex < 0 || shapeIndex >= this.geometricShapes.length) {
        throw new Error(`Shape index ${shapeIndex} out of range`);
    }

    const shape = this.geometricShapes[shapeIndex];

    if (updates.title) shape.title = updates.title;
    if (updates.config) {
        shape.config = { ...shape.config, ...updates.config };
        
        // Validate updated configuration
        const validation = GeometricShapesRegistry.validateShapeConfig(shape.key, shape.config);
        if (!validation.valid) {
            throw new Error(`Invalid configuration: ${validation.errors.join(', ')}`);
        }
    }
    if (updates.options) {
        shape.options = { ...shape.options, ...updates.options };
    }

    this.addToHistory(`Updated geometric shape: ${shape.title}`);
    this.lastModified = new Date();

    return shape;
}

/**
 * Remove geometric shape
 */


removeGeometricShape(shapeIndex) {
    if (shapeIndex < 0 || shapeIndex >= this.geometricShapes.length) {
        throw new Error(`Shape index ${shapeIndex} out of range`);
    }

    const removed = this.geometricShapes.splice(shapeIndex, 1);
    this.addToHistory(`Removed geometric shape: ${removed[0].title}`);
    this.lastModified = new Date();

    return removed[0];
}

/**
 * Render geometric shape to PNG
 */


renderGeometricShapeToPNG(shapeIndex) {
    if (shapeIndex < 0 || shapeIndex >= this.geometricShapes.length) {
        throw new Error(`Shape index ${shapeIndex} out of range`);
    }

    const shapeConfig = this.geometricShapes[shapeIndex];
    const shapeInfo = GeometricShapesRegistry.getShape(shapeConfig.key);

    // Determine canvas size
    const width = shapeConfig.options.width || 800;
    const height = shapeConfig.options.height || 600;

    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // Set renderer context
    this.geometricRenderer.canvas = canvas;
    this.geometricRenderer.ctx = ctx;

    // Render shape
    this.geometricRenderer.renderShape(
        shapeConfig.key,
        0,
        0,
        width,
        height,
        shapeConfig.config
    );

    // Save to file
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(shapeConfig.filename, buffer);

    return {
        id: shapeConfig.id,
        filename: shapeConfig.filename,
        size: buffer.length,
        shape: shapeInfo.name
    };
}

/**
 * Render all geometric shapes
 */


renderAllGeometricShapes() {
    const results = [];

    this.geometricShapes.forEach((_, index) => {
        try {
            const result = this.renderGeometricShapeToPNG(index);
            results.push(result);
        } catch (error) {
            results.push({
                error: error.message,
                index,
                shape: this.geometricShapes[index].key
            });
        }
    });

    return results;
}

/**
 * List all geometric shapes in workbook
 */

listGeometricShapes() {
    return this.geometricShapes.map((shape, index) => ({
        index,
        id: shape.id,
        name: shape.title,
        type: shape.key,
        category: shape.category,
        dimensionality: shape.dimensionality,
        filename: shape.filename,
        created: shape.createdAt
    }));
}

/**
 * Get geometric shape statistics
 */

getGeometricShapeStatistics() {
    const stats = GeometricShapesRegistry.getShapeStatistics();
    
    return {
        ...stats,
        inWorkbook: this.geometricShapes.length,
        by2DInWorkbook: this.geometricShapes.filter(s => s.dimensionality === '2D').length,
        by3DInWorkbook: this.geometricShapes.filter(s => s.dimensionality === '3D').length,
        byCategoryInWorkbook: this.geometricShapes.reduce((acc, shape) => {
            acc[shape.category] = (acc[shape.category] || 0) + 1;
            return acc;
        }, {})
    };
}

/**
 * Suggest geometric shapes based on data
 */

suggestGeometricShapes() {
    const suggestions = [];

    // Basic educational suggestions
    suggestions.push({
        key: 'triangle',
        priority: 10,
        reason: 'Fundamental shape for teaching geometry basics'
    });

    suggestions.push({
        key: 'circle',
        priority: 9,
        reason: 'Essential for understanding π and circular measurements'
    });

    suggestions.push({
        key: 'rectangle',
        priority: 8,
        reason: 'Common shape for area and perimeter concepts'
    });

    // Check if user has 2D shapes, suggest 3D
    const has2D = this.geometricShapes.some(s => s.dimensionality === '2D');
    if (has2D) {
        suggestions.push({
            key: 'cube',
            priority: 7,
            reason: 'Progress from 2D to 3D understanding'
        });

        suggestions.push({
            key: 'sphere',
            priority: 7,
            reason: 'Understand 3D circular geometry'
        });
    }

    // Advanced shapes for comprehensive learning
    suggestions.push({
        key: 'polygon',
        priority: 6,
        reason: 'Explore regular polygons and their properties'
    });

    suggestions.push({
        key: 'cylinder',
        priority: 6,
        reason: 'Real-world 3D shape applications'
    });

    return suggestions.sort((a, b) => b.priority - a.priority);
}

/**
 * Add geometric shapes by category
 */

addGeometricShapesByCategory(category, options = {}) {
    const shapes = GeometricShapesRegistry.getShapesByCategory(category);
    const added = [];

    Object.keys(shapes).forEach(shapeKey => {
        try {
            const shape = this.addGeometricShape({
                key: shapeKey,
                config: {},
                options
            });
            added.push(shape);
        } catch (error) {
            added.push({
                key: shapeKey,
                error: error.message
            });
        }
    });

    return added;
}

/**
 * Export geometric shapes to folder
 */
exportGeometricShapesToFolder(folderPath) {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }

    const results = [];

    this.geometricShapes.forEach((shape, index) => {
        try {
            const originalFilename = shape.filename;
            shape.filename = `${folderPath}/geometric_${path.basename(shape.filename)}`;

            const result = this.renderGeometricShapeToPNG(index);
            results.push(result);

            shape.filename = originalFilename;
        } catch (error) {
            results.push({
                error: error.message,
                shape: shape.key,
                index
            });
        }
    });

    return {
        folder: folderPath,
        results,
        summary: {
            exported: results.filter(r => !r.error).length,
            errors: results.filter(r => r.error).length
        }
    };
}

/**
 * Generate geometric shapes guide
 */
generateGeometricShapesGuide() {
    const guide = {
        title: 'Available Geometric Shapes',
        generatedAt: new Date(),
        workbook: this.sheetName,
        shapes2D: {},
        shapes3D: {},
        totalAvailable: 0,
        inWorkbook: this.geometricShapes.length
    };

    // 2D Shapes
    const shapes2D = GeometricShapesRegistry.getShapesByDimensionality('2D');
    Object.entries(shapes2D).forEach(([key, shape]) => {
        guide.shapes2D[key] = {
            name: shape.name,
            description: shape.description,
            usage: shape.usage,
            examples: shape.examples,
            configParameters: shape.configParameters,
            calculations: shape.calculations
        };
    });
    guide.totalAvailable += Object.keys(shapes2D).length;

    // 3D Shapes
    const shapes3D = GeometricShapesRegistry.getShapesByDimensionality('3D');
    Object.entries(shapes3D).forEach(([key, shape]) => {
        guide.shapes3D[key] = {
            name: shape.name,
            description: shape.description,
            usage: shape.usage,
            examples: shape.examples,
            configParameters: shape.configParameters,
            calculations: shape.calculations
        };
    });
    guide.totalAvailable += Object.keys(shapes3D).length;

    guide.suggestions = this.suggestGeometricShapes();

    return guide;
}


/**
 * Generate comprehensive geometric shapes catalog
 */
generateGeometricShapesCatalog() {
    return {
        metadata: {
            generated: new Date().toISOString(),
            workbook: this.sheetName,
            author: this.author
        },
        shapes2D: {
            available: Object.keys(GeometricShapesRegistry.getShapesByDimensionality('2D')).length,
            inWorkbook: this.geometricShapes.filter(s => s.dimensionality === '2D').length,
            shapes: GeometricShapesRegistry.getShapesByDimensionality('2D')
        },
        shapes3D: {
            available: Object.keys(GeometricShapesRegistry.getShapesByDimensionality('3D')).length,
            inWorkbook: this.geometricShapes.filter(s => s.dimensionality === '3D').length,
            shapes: GeometricShapesRegistry.getShapesByDimensionality('3D')
        },
        totalShapes: {
            available: GeometricShapesRegistry.getAllShapes().length,
            inWorkbook: this.geometricShapes.length
        },
        suggestions: this.suggestGeometricShapes()
    };
}



// ============================================================================
// UNIFIED DIAGRAM MANAGEMENT (Anatomical + Cross-Section + Stereochemistry + Geometric)
// ============================================================================

// Get all available diagrams
getAllAvailableDiagrams() {
    return {
        anatomical: this.getAvailableAnatomicalDiagrams(),
        crossSection: this.getAvailableCrossSectionDiagrams(),
        stereochemistry: this.getAvailableStereochemistryDiagrams(),
        geometric: this.getAvailableGeometricShapes()
    };
}

// Search all diagrams
searchAllDiagrams(query) {
    return {
        anatomical: this.searchAnatomicalDiagrams(query),
        crossSection: this.searchCrossSectionDiagrams(query),
        stereochemistry: this.searchStereochemistryDiagrams(query),
        geometric: this.searchGeometricShapes(query)
    };
}

// Get all diagram statistics
getAllDiagramStatistics() {
    const anatomicalStats = this.getAnatomicalDiagramStatistics();
    const crossSectionStats = this.getCrossSectionDiagramStatistics();
    const stereochemStats = this.getStereochemistryDiagramStatistics();
    const geometricStats = this.getGeometricShapeStatistics();

    return {
        anatomical: anatomicalStats,
        crossSection: crossSectionStats,
        stereochemistry: stereochemStats,
        geometric: geometricStats,
        combined: {
            totalAvailable:
                anatomicalStats.totalDiagrams +
                crossSectionStats.totalAvailable +
                stereochemStats.totalAvailable +
                geometricStats.total,
            totalInWorkbook:
                this.anatomicalDiagrams.length +
                this.crossSectionDiagrams.length +
                this.stereochemistryDiagrams.length +
                this.geometricShapes.length
        }
    };
}

// List all diagrams by type
listAllDiagrams() {
    return {
        anatomical: this.listAnatomicalDiagrams(),
        crossSection: this.listCrossSectionDiagrams(),
        stereochemistry: this.listStereochemistryDiagrams(),
        geometric: this.listGeometricShapes(),
        total:
            this.anatomicalDiagrams.length +
            this.crossSectionDiagrams.length +
            this.stereochemistryDiagrams.length +
            this.geometricShapes.length
    };
}

// Get all diagram suggestions
getAllDiagramSuggestions() {
    return {
        anatomical: this.suggestAnatomicalDiagrams(),
        crossSection: this.suggestCrossSectionDiagrams(),
        stereochemistry: this.suggestStereochemistryDiagrams(),
        geometric: this.suggestGeometricShapes()
    };
}

// Render all diagrams (anatomical + cross-section + stereochemistry + geometric)
renderAllDiagrams() {
    const results = {
        anatomical: this.renderAllAnatomicalDiagrams(),
        crossSection: this.renderAllCrossSectionDiagrams(),
        stereochemistry: this.renderAllStereochemistryDiagrams(),
        geometric: this.renderAllGeometricShapes()
    };

    return {
        ...results,
        summary: {
            anatomicalRendered: results.anatomical.filter(r => !r.error).length,
            crossSectionRendered: results.crossSection.filter(r => !r.error).length,
            stereochemistryRendered: results.stereochemistry.filter(r => !r.error).length,
            geometricRendered: results.geometric.filter(r => !r.error).length,
            totalRendered:
                results.anatomical.filter(r => !r.error).length +
                results.crossSection.filter(r => !r.error).length +
                results.stereochemistry.filter(r => !r.error).length +
                results.geometric.filter(r => !r.error).length,
            totalErrors:
                results.anatomical.filter(r => r.error).length +
                results.crossSection.filter(r => r.error).length +
                results.stereochemistry.filter(r => r.error).length +
                results.geometric.filter(r => r.error).length
        }
    };
}

// Export all diagrams organized by type
exportAllDiagramsToFolder(folderPath, separateByType = true) {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }

    const results = {
        anatomical: [],
        crossSection: [],
        stereochemistry: [],
        geometric: []
    };

    if (separateByType) {
        // Create subfolders
        const anatomicalFolder = `${folderPath}/anatomical`;
        const crossSectionFolder = `${folderPath}/cross-section`;
        const stereochemFolder = `${folderPath}/stereochemistry`;
        const geometricFolder = `${folderPath}/geometric`;

        [anatomicalFolder, crossSectionFolder, stereochemFolder, geometricFolder].forEach(folder => {
            if (!fs.existsSync(folder)) {
                fs.mkdirSync(folder, { recursive: true });
            }
        });

        // Export anatomical diagrams
        const anatomicalExport = this.exportAnatomicalDiagramsToFolder(anatomicalFolder);
        results.anatomical = anatomicalExport.results;

        // Export cross-section diagrams
        const crossSectionExport = this.exportCrossSectionDiagramsToFolder(crossSectionFolder);
        results.crossSection = crossSectionExport.results;

        // Export stereochemistry diagrams
        const stereochemExport = this.exportStereochemistryDiagramsToFolder(stereochemFolder);
        results.stereochemistry = stereochemExport.results;

        // Export geometric shapes
        const geometricExport = this.exportGeometricShapesToFolder(geometricFolder);
        results.geometric = geometricExport.results;
    } else {
        // Export all to same folder
        const anatomicalExport = this.exportAnatomicalDiagramsToFolder(folderPath);
        results.anatomical = anatomicalExport.results;

        const crossSectionExport = this.exportCrossSectionDiagramsToFolder(folderPath);
        results.crossSection = crossSectionExport.results;

        const stereochemExport = this.exportStereochemistryDiagramsToFolder(folderPath);
        results.stereochemistry = stereochemExport.results;

        const geometricExport = this.exportGeometricShapesToFolder(folderPath);
        results.geometric = geometricExport.results;
    }

    return {
        folder: folderPath,
        separatedByType: separateByType,
        results,
        summary: {
            anatomicalExported: results.anatomical.filter(r => !r.error).length,
            crossSectionExported: results.crossSection.filter(r => !r.error).length,
            stereochemistryExported: results.stereochemistry.filter(r => !r.error).length,
            geometricExported: results.geometric.filter(r => !r.error).length,
            totalExported:
                results.anatomical.filter(r => !r.error).length +
                results.crossSection.filter(r => !r.error).length +
                results.stereochemistry.filter(r => !r.error).length +
                results.geometric.filter(r => !r.error).length,
            totalErrors:
                results.anatomical.filter(r => r.error).length +
                results.crossSection.filter(r => r.error).length +
                results.stereochemistry.filter(r => r.error).length +
                results.geometric.filter(r => r.error).length
        }
    };
}

// Batch add diagrams by category (all four types)
addDiagramsByCategory(category, diagramType = 'all', options = {}) {
    const results = {
        anatomical: [],
        crossSection: [],
        stereochemistry: [],
        geometric: []
    };

    if (diagramType === 'anatomical' || diagramType === 'all') {
        try {
            results.anatomical = this.addAnatomicalDiagramsByCategory(category, options);
        } catch (error) {
            results.anatomical = [{ error: error.message, category, type: 'anatomical' }];
        }
    }

    if (diagramType === 'crossSection' || diagramType === 'all') {
        try {
            results.crossSection = this.addCrossSectionDiagramsByCategory(category, options);
        } catch (error) {
            results.crossSection = [{ error: error.message, category, type: 'crossSection' }];
        }
    }

    if (diagramType === 'stereochemistry' || diagramType === 'all') {
        try {
            results.stereochemistry = this.addStereochemistryDiagramsByCategory(category, options);
        } catch (error) {
            results.stereochemistry = [{ error: error.message, category, type: 'stereochemistry' }];
        }
    }

    if (diagramType === 'geometric' || diagramType === 'all') {
        try {
            results.geometric = this.addGeometricShapesByCategory(category, options);
        } catch (error) {
            results.geometric = [{ error: error.message, category, type: 'geometric' }];
        }
    }

    return results;
}

// Generate comprehensive diagram guide
generateComprehensiveDiagramGuide() {
    const guide = {
        title: 'Complete Scientific & Geometric Diagram Reference',
        generatedAt: new Date(),
        workbook: this.sheetName,
        anatomical: {
            title: 'Anatomical Diagrams',
            categories: {},
            totalAvailable: 0
        },
        crossSection: {
            title: 'Cross-Section Diagrams',
            categories: {},
            totalAvailable: 0
        },
        stereochemistry: {
            title: 'Stereochemistry Diagrams',
            categories: {},
            totalAvailable: 0
        },
        geometric: {
            title: 'Geometric Shapes',
            categories: {},
            totalAvailable: 0
        },
        suggestions: this.getAllDiagramSuggestions(),
        inWorkbook: this.listAllDiagrams()
    };

    // Anatomical diagrams
    const anatomicalCategories = AnatomicalDiagramsRegistry.getAllCategories();
    anatomicalCategories.forEach(category => {
        const diagrams = AnatomicalDiagramsRegistry.getDiagramsByCategory(category);
        guide.anatomical.categories[category] = Object.entries(diagrams).map(([key, diagram]) => ({
            key,
            name: diagram.name,
            description: diagram.description,
            usage: diagram.usage,
            examples: diagram.examples
        }));
        guide.anatomical.totalAvailable += Object.keys(diagrams).length;
    });

    // Cross-section diagrams
    const crossSectionCategories = CrossSectionDiagramsRegistry.getAllCategories();
    crossSectionCategories.forEach(category => {
        const diagrams = CrossSectionDiagramsRegistry.getDiagramsByCategory(category);
        guide.crossSection.categories[category] = Object.entries(diagrams).map(([key, diagram]) => ({
            key,
            name: diagram.name,
            description: diagram.description,
            usage: diagram.usage,
            examples: diagram.examples
        }));
        guide.crossSection.totalAvailable += Object.keys(diagrams).length;
    });

    // Stereochemistry diagrams
    const stereochemCategories = StereochemistryDiagramsRegistry.getAllCategories();
    stereochemCategories.forEach(category => {
        const diagrams = StereochemistryDiagramsRegistry.getDiagramsByCategory(category);
        guide.stereochemistry.categories[category] = Object.entries(diagrams).map(([key, diagram]) => ({
            key,
            name: diagram.name,
            formula: diagram.formula,
            geometry: diagram.geometry,
            description: diagram.description,
            usage: diagram.usage,
            bondAngles: diagram.bondAngles
        }));
        guide.stereochemistry.totalAvailable += Object.keys(diagrams).length;
    });

    // Geometric shapes
    const geometricCategories = ['2D Shapes', '3D Shapes'];
    geometricCategories.forEach(category => {
        const shapes = GeometricShapesRegistry.getShapesByCategory(category);
        guide.geometric.categories[category] = Object.entries(shapes).map(([key, shape]) => ({
            key,
            name: shape.name,
            description: shape.description,
            dimensionality: shape.dimensionality,
            usage: shape.usage,
            examples: shape.examples,
            configParameters: shape.configParameters,
            calculations: shape.calculations
        }));
        guide.geometric.totalAvailable += Object.keys(shapes).length;
    });

    guide.summary = {
        totalAvailableDiagrams:
            guide.anatomical.totalAvailable +
            guide.crossSection.totalAvailable +
            guide.stereochemistry.totalAvailable +
            guide.geometric.totalAvailable,
        anatomicalInWorkbook: this.anatomicalDiagrams.length,
        crossSectionInWorkbook: this.crossSectionDiagrams.length,
        stereochemistryInWorkbook: this.stereochemistryDiagrams.length,
        geometricInWorkbook: this.geometricShapes.length,
        totalInWorkbook:
            this.anatomicalDiagrams.length +
            this.crossSectionDiagrams.length +
            this.stereochemistryDiagrams.length +
            this.geometricShapes.length
    };

    return guide;
}

// Generate unified report with all visualizations
generateUnifiedVisualizationReport() {
    const baseReport = this.generateReport();
    const diagramsList = this.listAllDiagrams();
    const stats = this.getAllDiagramStatistics();

    return {
        ...baseReport,
        visualizations: {
            charts: {
                count: this.charts.length,
                charts: this.charts.map((chart, index) => ({
                    index,
                    type: chart.type,
                    title: chart.title
                }))
            },
            anatomicalDiagrams: {
                count: diagramsList.anatomical.length,
                diagrams: diagramsList.anatomical
            },
            crossSectionDiagrams: {
                count: diagramsList.crossSection.length,
                diagrams: diagramsList.crossSection
            },
            stereochemistryDiagrams: {
                count: diagramsList.stereochemistry.length,
                diagrams: diagramsList.stereochemistry
            },
            geometricShapes: {
                count: diagramsList.geometric.length,
                shapes: diagramsList.geometric
            },
            summary: {
                totalCharts: this.charts.length,
                totalAnatomical: diagramsList.anatomical.length,
                totalCrossSection: diagramsList.crossSection.length,
                totalStereochemistry: diagramsList.stereochemistry.length,
                totalGeometric: diagramsList.geometric.length,
                totalDiagrams: diagramsList.total,
                totalVisualizations: this.charts.length + diagramsList.total
            }
        },
        statistics: stats,
        suggestions: this.getAllDiagramSuggestions()
    };
}

// Quick add: Suggest and add top diagrams based on data
quickAddSuggestedDiagrams(maxDiagrams = 5, diagramType = 'all') {
    const results = {
        anatomical: [],
        crossSection: [],
        stereochemistry: [],
        geometric: []
    };

    if (diagramType === 'anatomical' || diagramType === 'all') {
        const anatomicalSuggestions = this.suggestAnatomicalDiagrams().slice(0, maxDiagrams);
        anatomicalSuggestions.forEach(suggestion => {
            try {
                const diagram = this.addAnatomicalDiagram({ key: suggestion.key });
                results.anatomical.push({
                    ...diagram,
                    reason: suggestion.reason
                });
            } catch (error) {
                results.anatomical.push({
                    key: suggestion.key,
                    error: error.message
                });
            }
        });
    }

    if (diagramType === 'crossSection' || diagramType === 'all') {
        const crossSectionSuggestions = this.suggestCrossSectionDiagrams().slice(0, maxDiagrams);
        crossSectionSuggestions.forEach(suggestion => {
            try {
                const diagram = this.addCrossSectionDiagram({ key: suggestion.key });
                results.crossSection.push({
                    ...diagram,
                    reason: suggestion.reason
                });
            } catch (error) {
                results.crossSection.push({
                    key: suggestion.key,
                    error: error.message
                });
            }
        });
    }

    if (diagramType === 'stereochemistry' || diagramType === 'all') {
        const stereochemSuggestions = this.suggestStereochemistryDiagrams().slice(0, maxDiagrams);
        stereochemSuggestions.forEach(suggestion => {
            try {
                const diagram = this.addStereochemistryDiagram({ key: suggestion.key });
                results.stereochemistry.push({
                    ...diagram,
                    reason: suggestion.reason
                });
            } catch (error) {
                results.stereochemistry.push({
                    key: suggestion.key,
                    error: error.message
                });
            }
        });
    }

    if (diagramType === 'geometric' || diagramType === 'all') {
        const geometricSuggestions = this.suggestGeometricShapes().slice(0, maxDiagrams);
        geometricSuggestions.forEach(suggestion => {
            try {
                const shape = this.addGeometricShape({ key: suggestion.key });
                results.geometric.push({
                    ...shape,
                    reason: suggestion.reason
                });
            } catch (error) {
                results.geometric.push({
                    key: suggestion.key,
                    error: error.message
                });
            }
        });
    }

    return results;
}

// Get diagram by ID (searches all four types)
getDiagramById(diagramId) {
    const anatomical = this.anatomicalDiagrams.find(d => d.id === diagramId);
    if (anatomical) return { ...anatomical, type: 'anatomical' };

    const crossSection = this.crossSectionDiagrams.find(d => d.id === diagramId);
    if (crossSection) return { ...crossSection, type: 'crossSection' };

    const stereochemistry = this.stereochemistryDiagrams.find(d => d.id === diagramId);
    if (stereochemistry) return { ...stereochemistry, type: 'stereochemistry' };

    const geometric = this.geometricShapes.find(d => d.id === diagramId);
    if (geometric) return { ...geometric, type: 'geometric' };

    return null;
}

// Remove diagram by ID (searches all four types)
removeDiagramById(diagramId) {
    const anatomicalIndex = this.anatomicalDiagrams.findIndex(d => d.id === diagramId);
    if (anatomicalIndex !== -1) {
        return this.removeAnatomicalDiagram(anatomicalIndex);
    }

    const crossSectionIndex = this.crossSectionDiagrams.findIndex(d => d.id === diagramId);
    if (crossSectionIndex !== -1) {
        return this.removeCrossSectionDiagram(crossSectionIndex);
    }

    const stereochemIndex = this.stereochemistryDiagrams.findIndex(d => d.id === diagramId);
    if (stereochemIndex !== -1) {
        return this.removeStereochemistryDiagram(stereochemIndex);
    }

    const geometricIndex = this.geometricShapes.findIndex(d => d.id === diagramId);
    if (geometricIndex !== -1) {
        return this.removeGeometricShape(geometricIndex);
    }

    throw new Error(`Diagram with ID ${diagramId} not found`);
}

// Get diagram by identifier (searches all registries)
getDiagramByIdentifier(identifier) {
    // Try as key in stereochemistry first (for formula support)
    let diagram = StereochemistryDiagramsRegistry.getDiagram(identifier);
    if (diagram) return { type: 'stereochemistry', diagram };

    // Try as formula
    const byFormula = StereochemistryDiagramsRegistry.findByFormula(identifier);
    if (Object.keys(byFormula).length > 0) {
        return { type: 'stereochemistry', diagrams: byFormula };
    }

    // Try anatomical
    diagram = AnatomicalDiagramsRegistry.getDiagram(identifier);
    if (diagram) return { type: 'anatomical', diagram };

    // Try cross-section
    diagram = CrossSectionDiagramsRegistry.getDiagram(identifier);
    if (diagram) return { type: 'crossSection', diagram };

    // Try geometric
    diagram = GeometricShapesRegistry.getShape(identifier);
    if (diagram) return { type: 'geometric', diagram };

    return { error: 'Diagram not found' };
}

// Generate complete diagram catalog
generateDiagramCatalog() {
    const catalog = {
        metadata: {
            generated: new Date().toISOString(),
            workbook: this.sheetName,
            author: this.author
        },
        anatomical: {
            available: AnatomicalDiagramsRegistry.getAllDiagrams().length,
            inWorkbook: this.anatomicalDiagrams.length,
            categories: AnatomicalDiagramsRegistry.getAllCategories()
        },
        crossSection: {
            available: CrossSectionDiagramsRegistry.getAllDiagrams().length,
            inWorkbook: this.crossSectionDiagrams.length,
            categories: CrossSectionDiagramsRegistry.getAllCategories()
        },
        stereochemistry: {
            available: StereochemistryDiagramsRegistry.getAllDiagrams().length,
            inWorkbook: this.stereochemistryDiagrams.length,
            categories: StereochemistryDiagramsRegistry.getAllCategories(),
            formulas: Object.values(StereochemistryDiagramsRegistry.diagrams).map(d => d.formula)
        },
        geometric: {
            available: GeometricShapesRegistry.getAllShapes().length,
            inWorkbook: this.geometricShapes.length,
            by2D: Object.keys(GeometricShapesRegistry.getShapesByDimensionality('2D')).length,
            by3D: Object.keys(GeometricShapesRegistry.getShapesByDimensionality('3D')).length,
            categories: ['2D Shapes', '3D Shapes']
        },
        totalDiagrams: {
            available:
                AnatomicalDiagramsRegistry.getAllDiagrams().length +
                CrossSectionDiagramsRegistry.getAllDiagrams().length +
                StereochemistryDiagramsRegistry.getAllDiagrams().length +
                GeometricShapesRegistry.getAllShapes().length,
            inWorkbook:
                this.anatomicalDiagrams.length +
                this.crossSectionDiagrams.length +
                this.stereochemistryDiagrams.length +
                this.geometricShapes.length
        }
    };

    return catalog;
}



// Check if workbook has diagrams of specific type
hasDiagramsOfType(type) {
    const counts = this.getDiagramCounts();
    switch(type) {
        case 'anatomical':
            return counts.anatomical > 0;
        case 'crossSection':
            return counts.crossSection > 0;
        case 'stereochemistry':
            return counts.stereochemistry > 0;
        case 'geometric':
            return counts.geometric > 0;
        case 'any':
            return counts.total > 0;
        default:
            return false;
    }
}

// Get all diagrams of specific category across all types
getAllDiagramsByCategory(category) {
    const results = {
        anatomical: [],
        crossSection: [],
        stereochemistry: [],
        geometric: []
    };

    // Check anatomical
    const anatomicalInCategory = AnatomicalDiagramsRegistry.getDiagramsByCategory(category);
    results.anatomical = this.anatomicalDiagrams.filter(d =>
        Object.keys(anatomicalInCategory).includes(d.key)
    );

    // Check cross-section
    const crossSectionInCategory = CrossSectionDiagramsRegistry.getDiagramsByCategory(category);
    results.crossSection = this.crossSectionDiagrams.filter(d =>
        Object.keys(crossSectionInCategory).includes(d.key)
    );

    // Check stereochemistry
    const stereochemInCategory = StereochemistryDiagramsRegistry.getDiagramsByCategory(category);
    results.stereochemistry = this.stereochemistryDiagrams.filter(d =>
        Object.keys(stereochemInCategory).includes(d.key)
    );

    // Check geometric
    const geometricInCategory = GeometricShapesRegistry.getShapesByCategory(category);
    results.geometric = this.geometricShapes.filter(d =>
        Object.keys(geometricInCategory).includes(d.key)
    );

    return results;
}

// Export diagrams with comprehensive metadata
exportDiagramsWithFullMetadata(folderPath) {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }

    const results = {
        anatomical: [],
        crossSection: [],
        stereochemistry: [],
        geometric: []
    };

    const metadata = {
        exportDate: new Date().toISOString(),
        workbook: this.sheetName,
        author: this.author,
        diagrams: {
            anatomical: [],
            crossSection: [],
            stereochemistry: [],
            geometric: []
        }
    };

    // Export anatomical
    this.anatomicalDiagrams.forEach((diagram, index) => {
        try {
            const originalFilename = diagram.filename;
            diagram.filename = `${folderPath}/anatomical_${path.basename(diagram.filename)}`;

            const result = this.renderAnatomicalDiagramToPNG(index);
            results.anatomical.push(result);

            const diagramInfo = AnatomicalDiagramsRegistry.getDiagram(diagram.key);
            metadata.diagrams.anatomical.push({
                filename: path.basename(diagram.filename),
                name: diagramInfo.name,
                category: diagramInfo.category,
                description: diagramInfo.description
            });

            diagram.filename = originalFilename;
        } catch (error) {
            results.anatomical.push({ error: error.message, diagram: diagram.key });
        }
    });

    // Export cross-section
    this.crossSectionDiagrams.forEach((diagram, index) => {
        try {
            const originalFilename = diagram.filename;
            diagram.filename = `${folderPath}/crosssection_${path.basename(diagram.filename)}`;

            const result = this.renderCrossSectionDiagramToPNG(index);
            results.crossSection.push(result);

            const diagramInfo = CrossSectionDiagramsRegistry.getDiagram(diagram.key);
            metadata.diagrams.crossSection.push({
                filename: path.basename(diagram.filename),
                name: diagramInfo.name,
                category: diagramInfo.category,
                description: diagramInfo.description
            });

            diagram.filename = originalFilename;
        } catch (error) {
            results.crossSection.push({ error: error.message, diagram: diagram.key });
        }
    });

    // Export stereochemistry
    this.stereochemistryDiagrams.forEach((diagram, index) => {
        try {
            const originalFilename = diagram.filename;
            diagram.filename = `${folderPath}/molecule_${path.basename(diagram.filename)}`;

            const result = this.renderStereochemistryDiagramToPNG(index);
            results.stereochemistry.push(result);

            const diagramInfo = StereochemistryDiagramsRegistry.getDiagram(diagram.key);
            metadata.diagrams.stereochemistry.push({
                filename: path.basename(diagram.filename),
                name: diagramInfo.name,
                formula: diagramInfo.formula,
                geometry: diagramInfo.geometry,
                bondAngles: diagramInfo.bondAngles,
                category: diagramInfo.category
            });

            diagram.filename = originalFilename;
        } catch (error) {
            results.stereochemistry.push({ error: error.message, diagram: diagram.key });
        }
    });

    // Export geometric shapes
    this.geometricShapes.forEach((shape, index) => {
        try {
            const originalFilename = shape.filename;
            shape.filename = `${folderPath}/geometric_${path.basename(shape.filename)}`;

            const result = this.renderGeometricShapeToPNG(index);
            results.geometric.push(result);

            const shapeInfo = GeometricShapesRegistry.getShape(shape.key);
            metadata.diagrams.geometric.push({
                filename: path.basename(shape.filename),
                name: shapeInfo.name,
                type: shape.key,
                category: shapeInfo.category,
                dimensionality: shapeInfo.dimensionality,
                description: shapeInfo.description
            });

            shape.filename = originalFilename;
        } catch (error) {
            results.geometric.push({ error: error.message, shape: shape.key });
        }
    });

    // Write metadata JSON file
    const metadataPath = `${folderPath}/complete_metadata.json`;
    fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));

    return {
        folder: folderPath,
        results,
        metadataFile: metadataPath,
        summary: {
            anatomicalExported: results.anatomical.filter(r => !r.error).length,
            crossSectionExported: results.crossSection.filter(r => !r.error).length,
            stereochemistryExported: results.stereochemistry.filter(r => !r.error).length,
            geometricExported: results.geometric.filter(r => !r.error).length,
            totalExported:
                results.anatomical.filter(r => !r.error).length +
                results.crossSection.filter(r => !r.error).length +
                results.stereochemistry.filter(r => !r.error).length +
                results.geometric.filter(r => !r.error).length,
            totalErrors:
                results.anatomical.filter(r => r.error).length +
                results.crossSection.filter(r => r.error).length +
results.stereochemistry.filter(r => r.error).length +
results.geometric.filter(r => r.error).length
}
};
}
// Generate comparison report for all diagram types
generateDiagramTypeComparisonReport() {
return {
title: 'Diagram Type Comparison Report',
workbook: this.sheetName,
generatedAt: new Date().toISOString(),
anatomical: {
count: this.anatomicalDiagrams.length,
availableCount: AnatomicalDiagramsRegistry.getAllDiagrams().length,
categories: AnatomicalDiagramsRegistry.getAllCategories(),
utilizationRate: this.anatomicalDiagrams.length / AnatomicalDiagramsRegistry.getAllDiagrams().length
},
crossSection: {
count: this.crossSectionDiagrams.length,
availableCount: CrossSectionDiagramsRegistry.getAllDiagrams().length,
categories: CrossSectionDiagramsRegistry.getAllCategories(),
utilizationRate: this.crossSectionDiagrams.length / CrossSectionDiagramsRegistry.getAllDiagrams().length
},
stereochemistry: {
count: this.stereochemistryDiagrams.length,
availableCount: StereochemistryDiagramsRegistry.getAllDiagrams().length,
categories: StereochemistryDiagramsRegistry.getAllCategories(),
formulas: this.stereochemistryDiagrams.map(d => d.formula),
utilizationRate: this.stereochemistryDiagrams.length / StereochemistryDiagramsRegistry.getAllDiagrams().length
},
geometric: {
count: this.geometricShapes.length,
availableCount: GeometricShapesRegistry.getAllShapes().length,
by2D: this.geometricShapes.filter(s => s.dimensionality === '2D').length,
by3D: this.geometricShapes.filter(s => s.dimensionality === '3D').length,
categories: ['2D Shapes', '3D Shapes'],
utilizationRate: this.geometricShapes.length / GeometricShapesRegistry.getAllShapes().length
},
summary: {
totalDiagrams:
this.anatomicalDiagrams.length +
this.crossSectionDiagrams.length +
this.stereochemistryDiagrams.length +
this.geometricShapes.length,
totalAvailable:
AnatomicalDiagramsRegistry.getAllDiagrams().length +
CrossSectionDiagramsRegistry.getAllDiagrams().length +
StereochemistryDiagramsRegistry.getAllDiagrams().length +
GeometricShapesRegistry.getAllShapes().length,
overallUtilizationRate:
(this.anatomicalDiagrams.length + this.crossSectionDiagrams.length + this.stereochemistryDiagrams.length + this.geometricShapes.length) /
(AnatomicalDiagramsRegistry.getAllDiagrams().length + CrossSectionDiagramsRegistry.getAllDiagrams().length + StereochemistryDiagramsRegistry.getAllDiagrams().length + GeometricShapesRegistry.getAllShapes().length)
}
};
}
// Clear all diagrams of specific type
clearDiagramsByType(type) {
const removed = {
anatomical: 0,
crossSection: 0,
stereochemistry: 0,
geometric: 0
};
switch(type) {
    case 'anatomical':
        removed.anatomical = this.anatomicalDiagrams.length;
        this.anatomicalDiagrams = [];
        this.addToHistory(`Cleared all anatomical diagrams (${removed.anatomical})`);
        break;
    case 'crossSection':
        removed.crossSection = this.crossSectionDiagrams.length;
        this.crossSectionDiagrams = [];
        this.addToHistory(`Cleared all cross-section diagrams (${removed.crossSection})`);
        break;
    case 'stereochemistry':
        removed.stereochemistry = this.stereochemistryDiagrams.length;
        this.stereochemistryDiagrams = [];
        this.addToHistory(`Cleared all stereochemistry diagrams (${removed.stereochemistry})`);
        break;
    case 'geometric':
        removed.geometric = this.geometricShapes.length;
        this.geometricShapes = [];
        this.addToHistory(`Cleared all geometric shapes (${removed.geometric})`);
        break;
    case 'all':
        removed.anatomical = this.anatomicalDiagrams.length;
        removed.crossSection = this.crossSectionDiagrams.length;
        removed.stereochemistry = this.stereochemistryDiagrams.length;
        removed.geometric = this.geometricShapes.length;
        this.anatomicalDiagrams = [];
        this.crossSectionDiagrams = [];
        this.stereochemistryDiagrams = [];
        this.geometricShapes = [];
        const total = removed.anatomical + removed.crossSection + removed.stereochemistry + removed.geometric;
        this.addToHistory(`Cleared all diagrams (${total})`);
        break;
    default:
        throw new Error(`Invalid diagram type: ${type}`);
}

return removed;
}
// Get comprehensive workbook summary
getWorkbookSummary() {
return {
metadata: {
name: this.sheetName,
created: this.createdDate,
lastModified: this.lastModified,
author: this.author
},
data: {
rows: this.data.length,
columns: this.headers.length,
headers: this.headers
},
visualizations: {
charts: this.charts.length,
diagrams: {
anatomical: this.anatomicalDiagrams.length,
crossSection: this.crossSectionDiagrams.length,
stereochemistry: this.stereochemistryDiagrams.length,
geometric: this.geometricShapes.length,
total: this.getDiagramCounts().total
}
},
history: {
entries: this.history.length,
lastAction: this.history[this.history.length - 1] || null
}
};
}



    // ========================================================================
    // EXAM PAPER GENERATOR CONFIGURATION METHODS
    // ========================================================================

    /**
     * Initialize exam configuration with default settings
     */
    initializeExamConfig(subject = 'chemistry') {
        const subjectDefaults = {
            chemistry: {
                topics: ['stoichiometry', 'organic_chemistry', 'acid_base_chemistry'],
                sectionConfiguration: {
                    sectionA: { difficulty: 'easier', questionsCount: 7, marksPercentage: 40 },
                    sectionB: { difficulty: 'similar', questionsCount: 5, marksPercentage: 35 },
                    sectionC: { difficulty: 'harder', questionsCount: 3, marksPercentage: 25 }
                }
            },
            biology: {
                topics: ['cell_biology', 'genetics', 'human_anatomy'],
                sectionConfiguration: {
                    sectionA: { difficulty: 'easier', questionsCount: 8, marksPercentage: 40 },
                    sectionB: { difficulty: 'similar', questionsCount: 5, marksPercentage: 35 },
                    sectionC: { difficulty: 'harder', questionsCount: 3, marksPercentage: 25 }
                }
            },
            physics: {
                topics: ['mechanics', 'electricity', 'waves'],
                sectionConfiguration: {
                    sectionA: { difficulty: 'easier', questionsCount: 7, marksPercentage: 40 },
                    sectionB: { difficulty: 'similar', questionsCount: 5, marksPercentage: 35 },
                    sectionC: { difficulty: 'harder', questionsCount: 3, marksPercentage: 25 }
                }
            },
            mathematics: {
                topics: ['algebra', 'geometry', 'trigonometry'],
                sectionConfiguration: {
                    sectionA: { difficulty: 'easier', questionsCount: 8, marksPercentage: 40 },
                    sectionB: { difficulty: 'similar', questionsCount: 5, marksPercentage: 35 },
                    sectionC: { difficulty: 'harder', questionsCount: 3, marksPercentage: 25 }
                }
            }
        };

        this.currentExamConfig = {
            // Basic Information
            examBoard: 'National Examination Board',
            schoolName: 'Excellence High School',
            examType: 'Mid-Term Examination',
            academicYear: '2024/2025',
            term: 'First Term',
            
            // Subject Configuration
            subjectName: this.capitalizeSubject(subject),
            subjectCode: this.generateSubjectCode(subject),
            subject: subject,
            gradeLevel: 'Grade 11', // Default grade
            
            // Exam Details
            examDate: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
            duration: '2 hours 30 minutes',
            totalMarks: 100,
            
            // Topics and Configuration
            topics: subjectDefaults[subject]?.topics || [],
            sectionConfiguration: subjectDefaults[subject]?.sectionConfiguration || {},
            
            // Formatting
            paperSize: 'A4',
            orientation: 'Portrait',
            lineSpacing: 'comfortable',
            answerSpaceLines: 5,
            includeLogo: false,
            logoPath: '',
            
            // Instructions
            instructions: [
                'Answer ALL questions in the spaces provided',
                'Write your Name, Class, and Index Number clearly',
                'All working must be shown for full credit',
                'Use black or blue pen only (pencil for diagrams)',
                'Scientific calculators are allowed',
                'Non-programmable calculators only',
                'Mobile phones are strictly prohibited'
            ],
            
            // Examiner Information
            examinerName: 'Dr. John Smith',
            examinerTitle: `Senior ${this.capitalizeSubject(subject)} Teacher`,
            moderatorName: 'Prof. Jane Doe',
            copyrightYear: new Date().getFullYear(),
            copyrightHolder: 'National Examination Board',
            
            // Additional Settings
            includeMarkingScheme: true
        };

        console.log(`\n✅ Exam configuration initialized for ${subject.toUpperCase()}`);
        return this.currentExamConfig;
    }

    /**
     * Configure exam subject
     */
    configureSubject(subject) {
        if (!['chemistry', 'biology', 'physics', 'mathematics'].includes(subject.toLowerCase())) {
            throw new Error('Invalid subject. Choose from: chemistry, biology, physics, mathematics');
        }

        if (!this.currentExamConfig) {
            this.initializeExamConfig(subject);
        } else {
            this.currentExamConfig.subject = subject.toLowerCase();
            this.currentExamConfig.subjectName = this.capitalizeSubject(subject);
            this.currentExamConfig.subjectCode = this.generateSubjectCode(subject);
        }

        console.log(`📚 Subject configured: ${this.currentExamConfig.subjectName}`);
        return this.currentExamConfig;
    }

    /**
     * Configure grade level
     */
    configureGradeLevel(gradeLevel) {
        const validGradeLevels = [
            'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12',
            'Year 6', 'Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11', 'Year 12',
            'Form 1', 'Form 2', 'Form 3', 'Form 4', 'Form 5', 'Form 6',
            'O-Level', 'A-Level', 'AS-Level', 'AP', 'IB',
            'College', 'University', 'Undergraduate',
            'beginner', 'Beginner', 'intermediate', 'Intermediate', 'advanced', 'Advanced',
            'professional', 'Professional'
        ];

        if (!validGradeLevels.includes(gradeLevel)) {
            console.warn(`⚠ Non-standard grade level: ${gradeLevel}`);
        }

        if (!this.currentExamConfig) {
            this.initializeExamConfig();
        }

        this.currentExamConfig.gradeLevel = gradeLevel;

        // Get appropriate difficulty level
        const difficulty = this.examPaperGenerator.getGradeLevelInfo(gradeLevel);
        console.log(`🎓 Grade Level configured: ${gradeLevel} (Difficulty: ${difficulty})`);

        return this.currentExamConfig;
    }

    /**
     * Configure exam topics
     */
    configureTopics(topics) {
        if (!Array.isArray(topics) || topics.length === 0) {
            throw new Error('Topics must be a non-empty array');
        }

        if (!this.currentExamConfig) {
            this.initializeExamConfig();
        }

        this.currentExamConfig.topics = topics;

        console.log(`📋 Topics configured: ${topics.join(', ')}`);
        return this.currentExamConfig;
    }

    /**
     * Configure section structure
     */
    configureSections(sectionConfiguration) {
        if (!this.currentExamConfig) {
            this.initializeExamConfig();
        }

        this.currentExamConfig.sectionConfiguration = sectionConfiguration;

        console.log(`📊 Sections configured:`);
        Object.entries(sectionConfiguration).forEach(([section, config]) => {
            console.log(`   ${section}: ${config.questionsCount} questions, ${config.marksPercentage}%, ${config.difficulty}`);
        });

        return this.currentExamConfig;
    }

    /**
     * Configure exam metadata
     */
    configureMetadata(metadata) {
        if (!this.currentExamConfig) {
            this.initializeExamConfig();
        }

        Object.assign(this.currentExamConfig, metadata);

        console.log(`📝 Metadata configured`);
        return this.currentExamConfig;
    }

    /**
     * Get available topics for a subject
     */
    getAvailableTopics(subject = null, gradeLevel = null) {
        const subj = subject || this.currentExamConfig?.subject || 'chemistry';
        const grade = gradeLevel || this.currentExamConfig?.gradeLevel || 'intermediate';

        const gradeInfo = this.examPaperGenerator.getAppropriateProblemTypesForGrade(subj, grade);

        if (gradeInfo) {
            console.log(`\n📚 Available topics for ${subj.toUpperCase()} at ${grade}:`);
            console.log(`   Topics: ${gradeInfo.topics.join(', ')}`);
            console.log(`   Problem types available: ${gradeInfo.problemTypes.length}`);
            return gradeInfo.topics;
        }

        return [];
    }

    /**
     * Display current exam configuration
     */
    displayExamConfig() {
        if (!this.currentExamConfig) {
            console.log('\n⚠ No exam configuration initialized. Use initializeExamConfig() first.');
            return;
        }

        console.log('\n' + '='.repeat(80));
        console.log('CURRENT EXAM CONFIGURATION');
        console.log('='.repeat(80));
        console.log(`\n📋 EXAM DETAILS:`);
        console.log(`   Board: ${this.currentExamConfig.examBoard}`);
        console.log(`   School: ${this.currentExamConfig.schoolName}`);
        console.log(`   Type: ${this.currentExamConfig.examType}`);
        console.log(`   Year: ${this.currentExamConfig.academicYear} - ${this.currentExamConfig.term}`);
        
        console.log(`\n📚 SUBJECT:`);
        console.log(`   Name: ${this.currentExamConfig.subjectName}`);
        console.log(`   Code: ${this.currentExamConfig.subjectCode}`);
        console.log(`   Grade Level: ${this.currentExamConfig.gradeLevel}`);
        
        console.log(`\n📊 EXAM STRUCTURE:`);
        console.log(`   Total Marks: ${this.currentExamConfig.totalMarks}`);
        console.log(`   Duration: ${this.currentExamConfig.duration}`);
        console.log(`   Topics: ${this.currentExamConfig.topics.join(', ')}`);
        
        console.log(`\n📝 SECTIONS:`);
        Object.entries(this.currentExamConfig.sectionConfiguration).forEach(([section, config]) => {
            console.log(`   ${section}: ${config.questionsCount} questions, ${config.marksPercentage}%, ${config.difficulty}`);
        });

        console.log('\n' + '='.repeat(80) + '\n');
    }

    /**
     * Generate examination paper with current configuration
     */
    generateExaminationPaper() {
        if (!this.currentExamConfig) {
            throw new Error('No exam configuration found. Initialize configuration first.');
        }

        console.log('\n' + '='.repeat(80));
        console.log('GENERATING EXAMINATION PAPER');
        console.log('='.repeat(80) + '\n');

        try {
            const examPaper = this.examPaperGenerator.generateExaminationPaper(this.currentExamConfig);

            // Store generated paper
            this.examPapers.push({
                paper: examPaper,
                config: { ...this.currentExamConfig },
                generated: new Date(),
                id: `exam_${Date.now()}`
            });

            // Track in history
            this.examHistory.push({
                action: 'Generated Examination Paper',
                subject: this.currentExamConfig.subjectName,
                gradeLevel: this.currentExamConfig.gradeLevel,
                topics: this.currentExamConfig.topics,
                timestamp: new Date()
            });

            // Display preview
            this.examPaperGenerator.displayExamPaperPreview(examPaper);

            console.log(`✅ Examination paper generated successfully!`);
            console.log(`   Index: ${this.examPapers.length - 1}`);

            return {
                paper: examPaper,
                index: this.examPapers.length - 1
            };

        } catch (error) {
            console.error(`\n❌ Error generating examination paper: ${error.message}`);
            throw error;
        }
    }

    /**
     * Export exam paper to DOCX
     */
    async exportExamPaperToDOCX(examIndex = null, filename = null) {
        const index = examIndex !== null ? examIndex : this.examPapers.length - 1;

        if (index < 0 || index >= this.examPapers.length) {
            throw new Error(`Invalid exam index: ${index}`);
        }

        const exam = this.examPapers[index];
        const fname = filename || `exam_paper_${exam.config.subjectName}_${exam.config.gradeLevel}_${Date.now()}.docx`;

        console.log(`\n📄 Exporting exam paper to DOCX...`);

        try {
            const exportedFile = await this.examPaperGenerator.exportToDOCXFile(exam.paper, fname);
            
            this.examHistory.push({
                action: 'Exported to DOCX',
                filename: exportedFile,
                timestamp: new Date()
            });

            return exportedFile;
        } catch (error) {
            console.error(`❌ Error exporting to DOCX: ${error.message}`);
            throw error;
        }
    }

    /**
     * Export exam paper to PDF
     */
    async exportExamPaperToPDF(examIndex = null, filename = null) {
        const index = examIndex !== null ? examIndex : this.examPapers.length - 1;

        if (index < 0 || index >= this.examPapers.length) {
            throw new Error(`Invalid exam index: ${index}`);
        }

        const exam = this.examPapers[index];
        const fname = filename || `exam_paper_${exam.config.subjectName}_${exam.config.gradeLevel}_${Date.now()}.pdf`;

        console.log(`\n📄 Exporting exam paper to PDF...`);

        try {
            const exportedFile = await this.examPaperGenerator.exportToPDFFile(exam.paper, fname);
            
            this.examHistory.push({
                action: 'Exported to PDF',
                filename: exportedFile,
                timestamp: new Date()
            });

            return exportedFile;
        } catch (error) {
            console.error(`❌ Error exporting to PDF: ${error.message}`);
            throw error;
        }
    }

    /**
     * Export marking scheme to DOCX
     */
    async exportMarkingSchemeToDOCX(examIndex = null, filename = null) {
        const index = examIndex !== null ? examIndex : this.examPapers.length - 1;

        if (index < 0 || index >= this.examPapers.length) {
            throw new Error(`Invalid exam index: ${index}`);
        }

        const exam = this.examPapers[index];

        if (!exam.paper.markingScheme) {
            throw new Error('No marking scheme available for this exam paper');
        }

        const fname = filename || `marking_scheme_${exam.config.subjectName}_${exam.config.gradeLevel}_${Date.now()}.docx`;

        console.log(`\n📋 Exporting marking scheme to DOCX...`);

        try {
            const exportedFile = await this.examPaperGenerator.exportMarkingSchemeToDOCXFile(
                exam.paper.markingScheme,
                fname
            );
            
            this.examHistory.push({
                action: 'Exported Marking Scheme to DOCX',
                filename: exportedFile,
                timestamp: new Date()
            });

            return exportedFile;
        } catch (error) {
            console.error(`❌ Error exporting marking scheme: ${error.message}`);
            throw error;
        }
    }

    /**
     * Export marking scheme to PDF
     */
    async exportMarkingSchemeToPDF(examIndex = null, filename = null) {
        const index = examIndex !== null ? examIndex : this.examPapers.length - 1;

        if (index < 0 || index >= this.examPapers.length) {
            throw new Error(`Invalid exam index: ${index}`);
        }

        const exam = this.examPapers[index];

        if (!exam.paper.markingScheme) {
            throw new Error('No marking scheme available for this exam paper');
        }

        const fname = filename || `marking_scheme_${exam.config.subjectName}_${exam.config.gradeLevel}_${Date.now()}.pdf`;

        console.log(`\n📋 Exporting marking scheme to PDF...`);

        try {
            const exportedFile = await this.examPaperGenerator.exportMarkingSchemeToPDFFile(
                exam.paper.markingScheme,
                fname
            );
            
            this.examHistory.push({
                action: 'Exported Marking Scheme to PDF',
                filename: exportedFile,
                timestamp: new Date()
            });

            return exportedFile;
        } catch (error) {
            console.error(`❌ Error exporting marking scheme: ${error.message}`);
            throw error;
        }
    }

    /**
     * Generate comprehensive solutions document
     */
    async generateComprehensiveSolutions(examIndex = null, filename = null) {
        const index = examIndex !== null ? examIndex : this.examPapers.length - 1;

        if (index < 0 || index >= this.examPapers.length) {
            throw new Error(`Invalid exam index: ${index}`);
        }

        const exam = this.examPapers[index];
        const fname = filename || `comprehensive_solutions_${exam.config.subjectName}_${exam.config.gradeLevel}_${Date.now()}.docx`;

        console.log(`\n📚 Generating comprehensive solutions document...`);

        try {
            const exportedFile = await this.examPaperGenerator.generateComprehensiveDocumentForExam(
                exam.paper,
                fname
            );
            
            this.examHistory.push({
                action: 'Generated Comprehensive Solutions',
                filename: exportedFile,
                timestamp: new Date()
            });

            return exportedFile;
        } catch (error) {
            console.error(`❌ Error generating solutions: ${error.message}`);
            throw error;
        }
    }

    /**
     * Check available problems for exam paper
     */
    checkAvailableProblems(examIndex = null) {
        const index = examIndex !== null ? examIndex : this.examPapers.length - 1;

        if (index < 0 || index >= this.examPapers.length) {
            throw new Error(`Invalid exam index: ${index}`);
        }

        const exam = this.examPapers[index];
        return this.examPaperGenerator.checkAvailableProblemsInExam(exam.paper);
    }

    /**
     * List all generated exam papers
     */
    listExamPapers() {
        if (this.examPapers.length === 0) {
            console.log('\n📋 No exam papers generated yet.');
            return [];
        }

        console.log('\n' + '='.repeat(80));
        console.log('GENERATED EXAMINATION PAPERS');
        console.log('='.repeat(80) + '\n');

        this.examPapers.forEach((exam, index) => {
            console.log(`${index}. ${exam.config.subjectName} - ${exam.config.gradeLevel}`);
            console.log(`   Exam: ${exam.config.examType}`);
            console.log(`   Topics: ${exam.config.topics.join(', ')}`);
            console.log(`   Generated: ${exam.generated.toLocaleString()}`);
            console.log(`   Total Questions: ${exam.paper.questionSections.reduce((sum, sec) => sum + sec.questions.length, 0)}`);
            console.log();
        });

        return this.examPapers;
    }

    /**
     * Get exam paper by index
     */
    getExamPaper(index) {
        if (index < 0 || index >= this.examPapers.length) {
            throw new Error(`Invalid exam index: ${index}`);
        }
        return this.examPapers[index];
    }

    /**
     * Delete exam paper by index
     */
    deleteExamPaper(index) {
        if (index < 0 || index >= this.examPapers.length) {
            throw new Error(`Invalid exam index: ${index}`);
        }

        const deleted = this.examPapers.splice(index, 1)[0];

        this.examHistory.push({
            action: 'Deleted Exam Paper',
            subject: deleted.config.subjectName,
            gradeLevel: deleted.config.gradeLevel,
            timestamp: new Date()
        });

        console.log(`✅ Exam paper ${index} deleted`);
        return deleted;
    }

    /**
     * Clear all exam papers
     */
    clearAllExamPapers() {
        const count = this.examPapers.length;
        this.examPapers = [];
        this.currentExamConfig = null;

        this.examHistory.push({
            action: 'Cleared All Exam Papers',
            count: count,
            timestamp: new Date()
        });

        console.log(`✅ Cleared ${count} exam paper(s)`);
    }

    /**
     * Display exam generation history
     */
    displayExamHistory() {
        if (this.examHistory.length === 0) {
            console.log('\n📜 No exam generation history yet.');
            return;
        }

        console.log('\n' + '='.repeat(80));
        console.log('EXAM GENERATION HISTORY');
        console.log('='.repeat(80) + '\n');

        this.examHistory.forEach((entry, index) => {
            console.log(`${index + 1}. ${entry.action}`);
            if (entry.subject) console.log(`   Subject: ${entry.subject}`);
            if (entry.gradeLevel) console.log(`   Grade: ${entry.gradeLevel}`);
            if (entry.topics) console.log(`   Topics: ${entry.topics.join(', ')}`);
            if (entry.filename) console.log(`   File: ${entry.filename}`);
            console.log(`   Time: ${entry.timestamp.toLocaleString()}`);
            console.log();
        });
    }

    // ========================================================================
    // HELPER METHODS
    // ========================================================================

    capitalizeSubject(subject) {
        const subjectNames = {
            'chemistry': 'Chemistry',
            'biology': 'Biology',
            'physics': 'Physics',
            'mathematics': 'Mathematics',
            'math': 'Mathematics'
        };
        return subjectNames[subject.toLowerCase()] || subject.charAt(0).toUpperCase() + subject.slice(1);
    }

    generateSubjectCode(subject) {
        const codes = {
            'chemistry': 'CHEM-101',
            'biology': 'BIO-101',
            'physics': 'PHYS-101',
            'mathematics': 'MATH-101',
            'math': 'MATH-101'
        };
        return codes[subject.toLowerCase()] || 'SUBJ-101';
    }

   // ========================================================================
    // DEMONSTRATION METHOD FOR EXAM PAPER GENERATION
    // ========================================================================

    /**
     * Interactive demonstration of exam paper generation
     */
    async demonstrateExamPaperGenerator() {
        console.log('\n' + '='.repeat(80));
        console.log('EXAMINATION PAPER GENERATOR DEMONSTRATION');
        console.log('='.repeat(80) + '\n');

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        const question = (query) => new Promise((resolve) => rl.question(query, resolve));

        try {
            // Step 1: Choose Subject
            console.log('📚 STEP 1: Choose Subject');
            console.log('Available subjects:');
            console.log('  1. Chemistry');
            console.log('  2. Biology');
            console.log('  3. Physics');
            console.log('  4. Mathematics');
            
            const subjectChoice = await question('\nEnter subject number (1-4): ');
            const subjects = ['chemistry', 'biology', 'physics', 'mathematics'];
            const subject = subjects[parseInt(subjectChoice) - 1] || 'chemistry';

            this.configureSubject(subject);

            // Step 2: Choose Grade Level
            console.log('\n🎓 STEP 2: Choose Grade Level');
            console.log('Available grade levels:');
            console.log('  1. Beginner (Grade 6-8)');
            console.log('  2. Intermediate (Grade 9-10)');
            console.log('  3. Advanced (Grade 11-12)');
            console.log('  4. Professional (College/University)');
            
            const gradeChoice = await question('\nEnter grade level number (1-4): ');
            const gradeLevels = ['Grade 8', 'Grade 10', 'Grade 12', 'University'];
            const gradeLevel = gradeLevels[parseInt(gradeChoice) - 1] || 'Grade 10';

            this.configureGradeLevel(gradeLevel);

            // Step 3: Choose Topics
            console.log('\n📋 STEP 3: Choose Topics');
            const availableTopics = this.getAvailableTopics(subject, gradeLevel);
            
            console.log('\nAvailable topics:');
            availableTopics.forEach((topic, index) => {
                console.log(`  ${index + 1}. ${topic}`);
            });

            const topicInput = await question('\nEnter topic numbers (comma-separated, or "all"): ');
            
            let selectedTopics;
            if (topicInput.toLowerCase() === 'all') {
                selectedTopics = availableTopics;
            } else {
                const indices = topicInput.split(',').map(s => parseInt(s.trim()) - 1);
                selectedTopics = indices.map(i => availableTopics[i]).filter(Boolean);
            }

            if (selectedTopics.length === 0) {
                selectedTopics = availableTopics.slice(0, 3);
            }

            this.configureTopics(selectedTopics);

            // Step 4: Configure Exam Details
            console.log('\n📝 STEP 4: Configure Exam Details');
            
            const schoolName = await question('School Name (or press Enter for default): ');
            if (schoolName) {
                this.configureMetadata({ schoolName });
            }

            const examType = await question('Exam Type (or press Enter for "Mid-Term Examination"): ');
            if (examType) {
                this.configureMetadata({ examType });
            }

            const totalMarks = await question('Total Marks (or press Enter for 100): ');
            if (totalMarks) {
                this.configureMetadata({ totalMarks: parseInt(totalMarks) });
            }

            // Step 5: Review Configuration
            console.log('\n📊 STEP 5: Review Configuration');
            this.displayExamConfig();

            const confirm = await question('Generate exam paper with this configuration? (y/n): ');
            
            if (confirm.toLowerCase() !== 'y') {
                console.log('\n❌ Exam generation cancelled.');
                rl.close();
                return;
            }

            // Step 6: Generate Exam Paper
            console.log('\n⚙️  STEP 6: Generating Exam Paper...');
            const result = await this.generateExaminationPaper();

            // Step 7: Export Options
            console.log('\n📤 STEP 7: Export Options');
            console.log('What would you like to export?');
            console.log('  1. Exam Paper (DOCX)');
            console.log('  2. Exam Paper (PDF)');
            console.log('  3. Marking Scheme (DOCX)');
            console.log('  4. Marking Scheme (PDF)');
            console.log('  5. Comprehensive Solutions (DOCX)');
            console.log('  6. All of the above');
            console.log('  7. Skip export');

            const exportChoice = await question('\nEnter choice (1-7): ');

            switch(exportChoice) {
                case '1':
                    await this.exportExamPaperToDOCX();
                    break;
                case '2':
                    await this.exportExamPaperToPDF();
                    break;
                case '3':
                    await this.exportMarkingSchemeToDOCX();
                    break;
                case '4':
                    await this.exportMarkingSchemeToPDF();
                    break;
                case '5':
                    await this.generateComprehensiveSolutions();
                    break;
                case '6':
                    await this.exportExamPaperToDOCX();
                    await this.exportExamPaperToPDF();
                    await this.exportMarkingSchemeToDOCX();
                    await this.exportMarkingSchemeToPDF();
                    await this.generateComprehensiveSolutions();
                    break;
                case '7':
                    console.log('\n✅ Skipping export.');
                    break;
                default:
                    console.log('\n⚠ Invalid choice. Skipping export.');
            }

            // Step 8: Check Available Problems
            console.log('\n🔍 STEP 8: Checking Available Problems...');
            const problemCheck = this.checkAvailableProblems();

            console.log('\n' + '='.repeat(80));
            console.log('✅ EXAM PAPER GENERATION COMPLETE');
            console.log('='.repeat(80));
            console.log(`\nExam Index: ${result.index}`);
            console.log(`Problems with solutions: ${problemCheck.withSolvers.length}`);
            console.log(`Problems without solutions: ${problemCheck.withoutSolvers.length}`);
            console.log('\nUse listExamPapers() to view all generated papers.');
            console.log('='.repeat(80) + '\n');

        } catch (error) {
            console.error(`\n❌ Error during demonstration: ${error.message}`);
        } finally {
            rl.close();
        }
    }

    /**
     * Quick exam generation with minimal configuration
     */
    async quickGenerateExam(subject, gradeLevel, topicCount = 3) {
        console.log('\n⚡ QUICK EXAM GENERATION');
        console.log('='.repeat(80) + '\n');

        // Initialize configuration
        this.initializeExamConfig(subject);
        this.configureGradeLevel(gradeLevel);

        // Get and configure topics
        const availableTopics = this.getAvailableTopics(subject, gradeLevel);
        const selectedTopics = availableTopics.slice(0, topicCount);
        this.configureTopics(selectedTopics);

        // Generate exam
        const result = await this.generateExaminationPaper();

        // Export all documents
        console.log('\n📤 Exporting all documents...');
        await this.exportExamPaperToDOCX();
        await this.exportExamPaperToPDF();
        await this.exportMarkingSchemeToDOCX();
        await this.exportMarkingSchemeToPDF();
        await this.generateComprehensiveSolutions();

        console.log('\n✅ Quick exam generation complete!');
        console.log(`   Exam Index: ${result.index}`);
        console.log('='.repeat(80) + '\n');

        return result;
    }





// ==================== STATISTICAL WORKBOOK INTEGRATION ====================

    /**
     * Initialize EnhancedStatisticalWorkbook instance
     */
initializeStatisticalWorkbook(options = {}) {
        if (!this.statisticalWorkbook) {
            this.statisticalWorkbook = new EnhancedStatisticalWorkbook({
                ...options,
                progressCallback: (progress) => {
                    console.log(`📊 Statistical Analysis: ${progress.stage} - ${progress.progress}%`);
                }
            });
        }
        return this.statisticalWorkbook;
    }

    /**
     * Get statistical workbook instance
     */
    getStatisticalWorkbook() {
        if (!this.statisticalWorkbook) {
            this.initializeStatisticalWorkbook();
        }
        return this.statisticalWorkbook;
    }

    // ==================== DATA EXTRACTION FOR STATISTICAL ANALYSIS ====================

    /**
     * Extract column data as numeric array
     */
    extractColumnData(columnRef, options = {}) {
        const {
            startRow = 0,
            endRow = this.data.length - 1,
            skipNonNumeric = true,
            skipEmpty = true,
            skipNaN = true
        } = options;

        const colIndex = typeof columnRef === 'number' 
            ? columnRef 
            : this.letterToColumn(columnRef);

        if (colIndex < 0 || colIndex >= this.headers.length) {
            throw new Error(`Invalid column reference: ${columnRef}`);
        }

        let values = [];
        
        for (let row = startRow; row <= Math.min(endRow, this.data.length - 1); row++) {
            const value = this.data[row][colIndex];
            
            if (skipEmpty && (value === null || value === undefined || value === '')) {
                continue;
            }

            const numValue = parseFloat(value);
            
            if (skipNaN && isNaN(numValue)) {
                if (!skipNonNumeric) {
                    throw new Error(`Non-numeric value at row ${row + 1}: ${value}`);
                }
                continue;
            }

            values.push(numValue);
        }

        return values;
    }

    /**
     * Extract range data as numeric array
     */
    extractRangeData(rangeRef, options = {}) {
        const values = this.getRangeValues(rangeRef);
        
        const {
            skipNonNumeric = true,
            skipEmpty = true,
            skipNaN = true
        } = options;

        return values
            .filter(val => {
                if (skipEmpty && (val === null || val === undefined || val === '')) {
                    return false;
                }
                return true;
            })
            .map(val => parseFloat(val))
            .filter(val => {
                if (skipNaN && isNaN(val)) {
                    if (!skipNonNumeric) {
                        throw new Error(`Non-numeric value encountered: ${val}`);
                    }
                    return false;
                }
                return true;
            });
    }

    /**
     * Extract multiple columns as separate arrays
     */
    extractMultipleColumns(columnRefs, options = {}) {
        const datasets = {};
        
        columnRefs.forEach(ref => {
            const colName = typeof ref === 'string' ? ref : this.columnToLetter(ref);
            datasets[colName] = this.extractColumnData(ref, options);
        });

        return datasets;
    }

   // ==================== EXPLORATORY DATA ANALYSIS (EDA) ====================

    /**
     * Perform exploratory data analysis on column
     */
    performEDA(columnRef, options = {}) {
        console.log('\n📊 EXPLORATORY DATA ANALYSIS');
        console.log('='.repeat(70));

        const data = this.extractColumnData(columnRef, options);
        const colName = this.headers[typeof columnRef === 'number' ? columnRef : this.letterToColumn(columnRef)];

        console.log(`\nAnalyzing Column: ${colName}`);
        console.log(`Sample Size: ${data.length}`);

        const stats = this.getStatisticalWorkbook();
        stats.loadFromArray(data);
        stats.sampleName = colName;
        stats.variableName = colName;
        stats.unitName = options.unitName || 'units';

        // Calculate basic statistics
        stats.calculateStatistics();

        // Data validation
        const validation = stats.validateData();

        console.log(`\nData Quality: ${validation.dataQuality.rating} (${validation.dataQuality.score}/100)`);
        
        if (validation.issues.length > 0) {
            console.log('\n⚠️  Issues:');
            validation.issues.forEach(issue => console.log(`  • ${issue}`));
        }

        if (validation.warnings.length > 0) {
            console.log('\n⚡ Warnings:');
            validation.warnings.forEach(warning => console.log(`  • ${warning}`));
        }

        // Summary statistics
        console.log('\n📈 SUMMARY STATISTICS:');
        console.log(`  Mean: ${stats.statistics.mean.toFixed(4)}`);
        console.log(`  Median: ${stats.statistics.median.toFixed(4)}`);
        console.log(`  Std Dev: ${stats.statistics.standardDeviation.toFixed(4)}`);
        console.log(`  Min: ${stats.statistics.min.toFixed(4)}`);
        console.log(`  Max: ${stats.statistics.max.toFixed(4)}`);
        console.log(`  Range: ${stats.statistics.range.toFixed(4)}`);
        console.log(`  Skewness: ${stats.statistics.skewness.toFixed(4)}`);
        console.log(`  Kurtosis: ${stats.statistics.kurtosis.toFixed(4)}`);

        // Robust statistics
        stats.calculateRobustStatistics();
        
        console.log('\n🛡️  ROBUST STATISTICS:');
        console.log(`  MAD: ${stats.robustStatistics.mad.value.toFixed(4)}`);
        console.log(`  Scaled MAD: ${stats.robustStatistics.mad.scaledMAD.toFixed(4)}`);
        console.log(`  Trimmed Mean (10%): ${stats.robustStatistics.trimmedMean.value.toFixed(4)}`);

        // Outlier detection
        const outliers = stats.robustStatistics.outlierDetection;
        console.log('\n🔍 OUTLIER DETECTION:');
        console.log(`  Method: ${outliers.method}`);
        console.log(`  Outliers: ${outliers.outlierCount} (${outliers.outlierPercentage})`);
        console.log(`  Recommendation: ${outliers.recommendation}`);

        // Store analysis
        this.statisticalAnalyses[colName] = {
            type: 'EDA',
            timestamp: new Date(),
            statistics: stats.statistics,
            robustStatistics: stats.robustStatistics,
            validation: validation
        };

        this.addToHistory(`Performed EDA on column ${colName}`);

        return {
            columnName: colName,
            sampleSize: data.length,
            statistics: stats.statistics,
            robustStatistics: stats.robustStatistics,
            validation: validation,
            report: stats.generateEDAReport()
        };
    }
    // ==================== DISTRIBUTION IDENTIFICATION ====================

    /**
     * Identify best-fit distribution for column data
     */
    identifyDistribution(columnRef, options = {}) {
        console.log('\n📊 DISTRIBUTION IDENTIFICATION');
        console.log('='.repeat(70));

        const data = this.extractColumnData(columnRef, options);
        const colName = this.headers[typeof columnRef === 'number' ? columnRef : this.letterToColumn(columnRef)];

        const {
            candidateDistributions = ['normal', 't', 'exponential', 'gamma', 'lognormal', 'uniform'],
            confidenceLevel = 0.95
        } = options;

        console.log(`\nAnalyzing Column: ${colName}`);
        console.log(`Testing ${candidateDistributions.length} distributions...`);

        const stats = this.getStatisticalWorkbook();
        stats.loadFromArray(data);
        stats.sampleName = colName;
        stats.variableName = colName;

        // Perform comparison
        stats.compareDistributions(candidateDistributions);

        const bestFit = stats.comparisonResults.bestFit;
        const bestDist = DistributionRegistry.getDistribution(bestFit);

        console.log(`\n✓ Best Fit: ${bestDist.name}`);
        console.log(`  Parameters: ${JSON.stringify(stats.comparisonResults.distributions[bestFit].parameters)}`);
        console.log(`  Log-Likelihood: ${stats.comparisonResults.distributions[bestFit].logLikelihood.toFixed(4)}`);
        console.log(`  AIC: ${stats.comparisonResults.distributions[bestFit].aic.toFixed(4)}`);
        console.log(`  BIC: ${stats.comparisonResults.distributions[bestFit].bic.toFixed(4)}`);

        // Store distribution fit
        this.distributionFits[colName] = {
            bestFit: bestFit,
            timestamp: new Date(),
            distributions: stats.comparisonResults.distributions,
            data: data
        };

        this.addToHistory(`Identified ${bestDist.name} as best fit for ${colName}`);

        return {
            columnName: colName,
            bestFit: bestFit,
            distributionName: bestDist.name,
            parameters: stats.comparisonResults.distributions[bestFit].parameters,
            goodnessOfFit: stats.comparisonResults.distributions[bestFit].ksTest,
            comparison: stats.comparisonResults
        };
    }

    // ==================== DISTRIBUTION ANALYSIS ====================

    /**
     * Perform comprehensive distribution analysis
     */
    analyzeDistribution(columnRef, distributionType, options = {}) {
        console.log('\n📊 DISTRIBUTION ANALYSIS');
        console.log('='.repeat(70));

        const data = this.extractColumnData(columnRef, options);
        const colName = this.headers[typeof columnRef === 'number' ? columnRef : this.letterToColumn(columnRef)];

        console.log(`\nColumn: ${colName}`);
        console.log(`Distribution: ${distributionType}`);
        console.log(`Sample Size: ${data.length}`);

        const stats = this.getStatisticalWorkbook();

        const config = {
            samples: data,
            sampleName: colName,
            variableName: colName,
            unitName: options.unitName || 'units',
            distribution: distributionType,
            distributionParams: options.distributionParams || null,
            targetValue: options.targetValue || null,
            targetAnalysisType: options.targetAnalysisType || null,
            hypothesisTest: options.hypothesisTest || null,
            compareDistributions: options.compareDistributions || null,
            regression: options.regression || null,
            scenarioDescription: options.scenarioDescription || ''
        };

        // Run comprehensive analysis
        const workbook = stats.analyzeDistribution(config);

        console.log('\n✓ Analysis Complete');
        console.log(`  Distribution: ${stats.distributionAnalysis.distribution}`);
        console.log(`  Parameters: ${JSON.stringify(stats.distributionAnalysis.parameters)}`);
        console.log(`  Log-Likelihood: ${stats.distributionAnalysis.logLikelihood.toFixed(4)}`);
        console.log(`  AIC: ${stats.distributionAnalysis.aic.toFixed(4)}`);
        console.log(`  BIC: ${stats.distributionAnalysis.bic.toFixed(4)}`);

        // Store analysis
        this.statisticalAnalyses[`${colName}_${distributionType}`] = {
            type: 'Distribution Analysis',
            timestamp: new Date(),
            distribution: distributionType,
            statistics: stats.statistics,
            distributionAnalysis: stats.distributionAnalysis,
            goodnessOfFit: stats.goodnessOfFit,
            confidenceIntervals: stats.confidenceIntervals,
            workbook: workbook
        };

        this.addToHistory(`Analyzed ${colName} with ${distributionType} distribution`);

        return {
            columnName: colName,
            distribution: distributionType,
            statistics: stats.statistics,
            distributionAnalysis: stats.distributionAnalysis,
            goodnessOfFit: stats.goodnessOfFit,
            confidenceIntervals: stats.confidenceIntervals,
            parameterCI: stats.parameterConfidenceIntervals,
            targetAnalysis: stats.targetAnalysis,
            hypothesisTests: stats.hypothesisTests,
            workbook: workbook
        };
    }

    // ==================== FORMAL DISTRIBUTIONAL ASSUMPTION CHECKS ====================

    /**
     * Perform formal tests for distribution assumptions
     */
    checkDistributionAssumptions(columnRef, distributionType, options = {}) {
        console.log('\n🔍 DISTRIBUTION ASSUMPTION CHECKS');
        console.log('='.repeat(70));

        const data = this.extractColumnData(columnRef, options);
        const colName = this.headers[typeof columnRef === 'number' ? columnRef : this.letterToColumn(columnRef)];

        const stats = this.getStatisticalWorkbook();
        stats.loadFromArray(data);
        stats.sampleName = colName;
        stats.selectedDistribution = distributionType;

        // Fit distribution
        stats.fitDistribution();

        // Perform goodness of fit tests
        stats.performGoodnessOfFitTests();

        console.log(`\nColumn: ${colName}`);
        console.log(`Distribution: ${distributionType}`);

        console.log('\n📊 GOODNESS OF FIT TESTS:');
        
        // Kolmogorov-Smirnov
        const ks = stats.goodnessOfFit.kolmogorovSmirnov;
        console.log(`\n  Kolmogorov-Smirnov Test:`);
        console.log(`    Statistic: ${ks.testStatistic.toFixed(6)}`);
        console.log(`    p-value: ${ks.pValue.toFixed(6)}`);
        console.log(`    Reject (α=0.05): ${ks.reject['0.05'] ? 'YES' : 'NO'}`);

        // Anderson-Darling
        const ad = stats.goodnessOfFit.andersonDarling;
        console.log(`\n  Anderson-Darling Test:`);
        console.log(`    Statistic: ${ad.testStatistic.toFixed(6)}`);
        console.log(`    Reject (α=0.05): ${ad.reject['0.05'] ? 'YES' : 'NO'}`);

        // Chi-Square
        const chi = stats.goodnessOfFit.chisquareTest;
        console.log(`\n  Chi-Square Test:`);
        console.log(`    Statistic: ${chi.testStatistic.toFixed(6)}`);
        console.log(`    df: ${chi.degreesOfFreedom}`);
        console.log(`    p-value: ${chi.pValue.toFixed(6)}`);
        console.log(`    Reject (α=0.05): ${chi.reject['0.05'] ? 'YES' : 'NO'}`);

        // Shapiro-Wilk (if normal)
        if (distributionType === 'normal' && stats.goodnessOfFit.shapiroWilk) {
            const sw = stats.goodnessOfFit.shapiroWilk;
            if (sw.testStatistic !== null) {
                console.log(`\n  Shapiro-Wilk Test:`);
                console.log(`    Statistic: ${sw.testStatistic.toFixed(6)}`);
                console.log(`    p-value: ${sw.pValue.toFixed(6)}`);
                console.log(`    Reject (α=0.05): ${sw.reject['0.05'] ? 'YES' : 'NO'}`);
            }
        }

        // Store results
        this.statisticalAnalyses[`${colName}_assumptions_${distributionType}`] = {
            type: 'Assumption Checks',
            timestamp: new Date(),
            distribution: distributionType,
            goodnessOfFit: stats.goodnessOfFit
        };

        this.addToHistory(`Checked ${distributionType} assumptions for ${colName}`);

        return {
            columnName: colName,
            distribution: distributionType,
            goodnessOfFit: stats.goodnessOfFit,
            overallFit: this.assessOverallFit(stats.goodnessOfFit)
        };
    }

    /**
     * Assess overall fit from multiple tests
     */
    assessOverallFit(goodnessOfFit) {
        const tests = [
            goodnessOfFit.kolmogorovSmirnov,
            goodnessOfFit.andersonDarling,
            goodnessOfFit.chisquareTest
        ];

        const rejections = tests.filter(test => test && test.reject && test.reject['0.05']).length;
        const totalTests = tests.filter(test => test && test.testStatistic !== null).length;

        if (rejections === 0) {
            return {
                assessment: 'EXCELLENT',
                description: 'All tests support the distribution fit',
                recommendation: 'Distribution is appropriate for the data'
            };
        } else if (rejections <= totalTests / 2) {
            return {
                assessment: 'GOOD',
                description: 'Most tests support the distribution fit',
                recommendation: 'Distribution is reasonable for the data'
            };
        } else {
            return {
                assessment: 'POOR',
                description: 'Multiple tests reject the distribution fit',
                recommendation: 'Consider alternative distributions'
            };
        }
    }

    // ==================== GENERATE VISUALIZATIONS ====================

    /**
     * Generate statistical visualizations for column
     */
    generateStatisticalVisualizations(columnRef, distributionType, options = {}) {
        console.log('\n📊 GENERATING STATISTICAL VISUALIZATIONS');
        console.log('='.repeat(70));

        const data = this.extractColumnData(columnRef, options);
        const colName = this.headers[typeof columnRef === 'number' ? columnRef : this.letterToColumn(columnRef)];

        const stats = this.getStatisticalWorkbook();
        stats.loadFromArray(data);
        stats.sampleName = colName;
        stats.variableName = colName;
        stats.selectedDistribution = distributionType;

        // Fit distribution
        stats.fitDistribution();

        // Generate all visualizations
        const visualizations = stats.generateAllVisualizations();

        console.log(`\nGenerated ${Object.keys(visualizations).length} visualizations for ${colName}`);

        Object.keys(visualizations).forEach(vizType => {
            console.log(`  ✓ ${vizType}`);
        });

        // Store visualizations
        this.statisticalAnalyses[`${colName}_viz_${distributionType}`] = {
            type: 'Visualizations',
            timestamp: new Date(),
            distribution: distributionType,
            visualizations: visualizations
        };

        this.addToHistory(`Generated visualizations for ${colName}`);

        return {
            columnName: colName,
            distribution: distributionType,
            visualizations: visualizations,
            vizCount: Object.keys(visualizations).length
        };
    }

    /**
     * Save statistical visualizations to files
     */
    async saveStatisticalVisualizations(columnRef, distributionType, outputDir, options = {}) {
        const vizResult = this.generateStatisticalVisualizations(columnRef, distributionType, options);
        
        const stats = this.getStatisticalWorkbook();
        const savedFiles = await stats.saveAllVisualizations(outputDir);

        console.log(`\n✓ Saved ${savedFiles.length} visualization files to ${outputDir}`);

        return {
            ...vizResult,
            savedFiles: savedFiles,
            outputDirectory: outputDir
        };
    }

    // ==================== PARAMETER ESTIMATION ====================

    /**
     * Estimate distribution parameters
     */
    estimateParameters(columnRef, distributionType, options = {}) {
        console.log('\n📊 PARAMETER ESTIMATION');
        console.log('='.repeat(70));

        const data = this.extractColumnData(columnRef, options);
        const colName = this.headers[typeof columnRef === 'number' ? columnRef : this.letterToColumn(columnRef)];

        const stats = this.getStatisticalWorkbook();
        stats.loadFromArray(data);
        stats.sampleName = colName;
        stats.selectedDistribution = distributionType;

        // Fit distribution
        stats.fitDistribution();

        // Calculate parameter confidence intervals
        stats.calculateParameterConfidenceIntervals();

        const dist = DistributionRegistry.getDistribution(distributionType);

        console.log(`\nColumn: ${colName}`);
        console.log(`Distribution: ${dist.name}`);

        console.log('\n📈 ESTIMATED PARAMETERS:');
        dist.params.forEach((param, idx) => {
            console.log(`  ${param}: ${stats.distributionParams[idx].toFixed(6)}`);
        });

        console.log('\n🎯 PARAMETER CONFIDENCE INTERVALS (95%):');
        const paramCI = stats.parameterConfidenceIntervals[0.95];
        if (paramCI && paramCI.parameters) {
            Object.entries(paramCI.parameters).forEach(([param, ci]) => {
                console.log(`  ${param}:`);
                console.log(`    Estimate: ${ci.estimate.toFixed(6)}`);
                console.log(`    95% CI: [${ci.lowerBound.toFixed(6)}, ${ci.upperBound.toFixed(6)}]`);
                console.log(`    SE: ${ci.standardError.toFixed(6)}`);
            });
        }

        // Store results
        this.statisticalAnalyses[`${colName}_params_${distributionType}`] = {
            type: 'Parameter Estimation',
            timestamp: new Date(),
            distribution: distributionType,
            parameters: stats.distributionParams,
            confidenceIntervals: stats.parameterConfidenceIntervals
        };

        this.addToHistory(`Estimated parameters for ${colName} (${distributionType})`);

        return {
            columnName: colName,
            distribution: distributionType,
            parameters: stats.distributionParams,
            parameterNames: dist.params,
            confidenceIntervals: stats.parameterConfidenceIntervals,
            distributionAnalysis: stats.distributionAnalysis
        };
    }

    // ==================== POINT ESTIMATES ====================

    /**
     * Calculate point estimates for distribution properties
     */
    calculatePointEstimates(columnRef, distributionType, options = {}) {
        const data = this.extractColumnData(columnRef, options);
        const colName = this.headers[typeof columnRef === 'number' ? columnRef : this.letterToColumn(columnRef)];

        const stats = this.getStatisticalWorkbook();
        stats.loadFromArray(data);
        stats.selectedDistribution = distributionType;

        stats.fitDistribution();

        const dist = DistributionRegistry.getDistribution(distributionType);

        return {
            columnName: colName,
            distribution: dist.name,
            sampleSize: data.length,
            sampleMean: stats.statistics.mean,
            sampleMedian: stats.statistics.median,
            sampleStdDev: stats.statistics.standardDeviation,
            sampleVariance: stats.statistics.variance,
            sampleSkewness: stats.statistics.skewness,
            sampleKurtosis: stats.statistics.kurtosis,
            distributionParameters: stats.distributionParams,
            theoreticalMoments: stats.distributionAnalysis.theoreticalMoments
        };
    }

    // ==================== STANDARD ERROR CALCULATION ====================

    /**
     * Calculate standard errors for estimates
     */
    calculateStandardErrors(columnRef, distributionType, options = {}) {
        const paramResult = this.estimateParameters(columnRef, distributionType, options);

        const standardErrors = {};
        const paramCI = paramResult.confidenceIntervals[0.95];

        if (paramCI && paramCI.parameters) {
            Object.entries(paramCI.parameters).forEach(([param, ci]) => {
                standardErrors[param] = {
                    estimate: ci.estimate,
                    standardError: ci.standardError,
                    relativeSE: (ci.standardError / ci.estimate * 100).toFixed(2) + '%'
                };
            });
        }

        return {
            columnName: paramResult.columnName,
            distribution: paramResult.distribution,
            standardErrors: standardErrors
        };
    }

    // ==================== CONFIDENCE INTERVALS ====================

    /**
     * Calculate various confidence intervals
     */
    calculateConfidenceIntervals(columnRef, distributionType, options = {}) {
        console.log('\n📊 CONFIDENCE INTERVALS');
        console.log('='.repeat(70));

        const data = this.extractColumnData(columnRef, options);
        const colName = this.headers[typeof columnRef === 'number' ? columnRef : this.letterToColumn(columnRef)];

        const {
            levels = [0.90, 0.95, 0.99]
        } = options;

        const stats = this.getStatisticalWorkbook();
        stats.loadFromArray(data);
        stats.sampleName = colName;
        stats.selectedDistribution = distributionType;

        stats.fitDistribution();
        stats.calculateDistributionConfidenceIntervals();
        stats.calculateParameterConfidenceIntervals();

        console.log(`\nColumn: ${colName}`);
        console.log(`Distribution: ${distributionType}`);

        console.log('\n📈 DISTRIBUTION CONFIDENCE INTERVALS:');
        levels.forEach(level => {
            const ci = stats.confidenceIntervals[level];
            if (ci) {
                console.log(`\n  ${(level * 100)}% CI:`);
                console.log(`    Lower: ${ci.lowerBound.toFixed(6)}`);
                console.log(`    Upper: ${ci.upperBound.toFixed(6)}`);
                console.log(`    Width: ${ci.width.toFixed(6)}`);
            }
        });

        console.log('\n📈 PARAMETER CONFIDENCE INTERVALS:');
        levels.forEach(level => {
            const paramCI = stats.parameterConfidenceIntervals[level];
            if (paramCI && paramCI.parameters) {
                console.log(`\n  ${(level * 100)}% CI:`);
                Object.entries(paramCI.parameters).forEach(([param, ci]) => {
                    console.log(`    ${param}: [${ci.lowerBound.toFixed(6)}, ${ci.upperBound.toFixed(6)}]`);
                });
            }
        });

        return {
            columnName: colName,
            distribution: distributionType,
            distributionCI: stats.confidenceIntervals,
            parameterCI: stats.parameterConfidenceIntervals
        };
    }

    // ==================== HYPOTHESIS TESTING ====================

    /**
     * Perform hypothesis test on column data
     */
    performHypothesisTest(columnRef, testConfig, options = {}) {
        console.log('\n📊 HYPOTHESIS TEST');
        console.log('='.repeat(70));

        const data = this.extractColumnData(columnRef, options);
        const colName = this.headers[typeof columnRef === 'number' ? columnRef : this.letterToColumn(columnRef)];

        const stats = this.getStatisticalWorkbook();
        stats.loadFromArray(data);
        stats.sampleName = colName;

        // Perform test
        stats.performHypothesisTest(testConfig);

        const testType = testConfig.type;
        const testResult = stats.hypothesisTests[testType];

        console.log(`\nColumn: ${colName}`);
        console.log(`Test: ${testResult.testType}`);
        console.log(`\nNull Hypothesis: ${testResult.nullHypothesis}`);
        console.log(`Alternative: ${testResult.alternative}`);
        console.log(`\nTest Statistic: ${testResult.testStatistic.toFixed(6)}`);
        console.log(`p-value: ${testResult.pValue.toFixed(6)}`);
        console.log(`\nDecision: ${testResult.conclusion}`);

        // Store results
        this.statisticalAnalyses[`${colName}_test_${testType}`] = {
            type: 'Hypothesis Test',
            timestamp: new Date(),
            testType: testType,
            result: testResult
        };

        this.addToHistory(`Performed ${testType} test on ${colName}`);

        return {
            columnName: colName,
            testType: testType,
            result: testResult
        };
    }

    // ==================== CORRELATION MATRIX ====================

    /**
     * Calculate correlation matrix for multiple columns
     */
    calculateCorrelationMatrix(columnRefs, options = {}) {
        console.log('\n📊 CORRELATION MATRIX');
        console.log('='.repeat(70));

        const datasets = this.extractMultipleColumns(columnRefs, options);
        const colNames = Object.keys(datasets);
        const n = colNames.length;

        console.log(`\nAnalyzing ${n} columns:`);
        colNames.forEach(name => console.log(`  • ${name}`));

        // Calculate correlation matrix
        const correlationMatrix = [];
        const pValueMatrix = [];

        for (let i = 0; i < n; i++) {
            correlationMatrix[i] = [];
            pValueMatrix[i] = [];

            for (let j = 0; j < n; j++) {
                if (i === j) {
                    correlationMatrix[i][j] = 1.0;
                    pValueMatrix[i][j] = 0.0;
                } else {
                    const corr = this.pearsonCorrelation(
                        datasets[colNames[i]],
                        datasets[colNames[j]]
                    );
                    correlationMatrix[i][j] = corr.r;
                    pValueMatrix[i][j] = corr.pValue;
                }
            }
        }

        console.log('\n📈 CORRELATION MATRIX:');
        console.log('\n     ', colNames.map(n => n.substring(0, 8).padEnd(8)).join(' '));
        correlationMatrix.forEach((row, i) => {
            console.log(
                colNames[i].substring(0, 4).padEnd(5),
                row.map(r => r.toFixed(4).padStart(8)).join(' ')
            );
        });

        console.log('\n📊 p-VALUE MATRIX:');
        console.log('\n     ', colNames.map(n => n.substring(0, 8).padEnd(8)).join(' '));
        pValueMatrix.forEach((row, i) => {
            console.log(
                colNames[i].substring(0, 4).padEnd(5),
                row.map(p => p.toFixed(4).padStart(8)).join(' ')
            );
        });

        // Identify significant correlations
        const significantCorrelations = [];
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                if (pValueMatrix[i][j] < 0.05) {
                    significantCorrelations.push({
                        var1: colNames[i],
                        var2: colNames[j],
                        correlation: correlationMatrix[i][j],
                        pValue: pValueMatrix[i][j],
                        strength: this.interpretCorrelation(correlationMatrix[i][j])
                    });
                }
            }
        }

        console.log('\n🔍 SIGNIFICANT CORRELATIONS (p < 0.05):');
        if (significantCorrelations.length > 0) {
            significantCorrelations.forEach(corr => {
                console.log(
                    `  ${corr.var1} ↔ ${corr.var2}: r = ${corr.correlation.toFixed(4)} ` +
                    `(${corr.strength}, p = ${corr.pValue.toFixed(4)})`
                );
            });
        } else {
            console.log('  No significant correlations found');
        }

        // Store results
        this.statisticalAnalyses['correlation_matrix'] = {
            type: 'Correlation Matrix',
            timestamp: new Date(),
            columns: colNames,
            correlationMatrix: correlationMatrix,
            pValueMatrix: pValueMatrix,
            significantCorrelations: significantCorrelations
        };

        this.addToHistory(`Calculated correlation matrix for ${n} columns`);

        return {
            columns: colNames,
            correlationMatrix: correlationMatrix,
            pValueMatrix: pValueMatrix,
            significantCorrelations: significantCorrelations
        };
    }

    /**
     * Calculate Pearson correlation between two arrays
     */
    pearsonCorrelation(x, y) {
        if (x.length !== y.length) {
            throw new Error('Arrays must have equal length');
        }

        const n = x.length;
        const meanX = x.reduce((a, b) => a + b, 0) / n;
        const meanY = y.reduce((a, b) => a + b, 0) / n;

        let numerator = 0;
        let denomX = 0;
        let denomY = 0;

        for (let i = 0; i < n; i++) {
            const dx = x[i] - meanX;
            const dy = y[i] - meanY;
            numerator += dx * dy;
            denomX += dx * dx;
            denomY += dy * dy;
        }

        if (denomX === 0 || denomY === 0) {
            return { r: 0, pValue: 1 };
        }

        const r = numerator / Math.sqrt(denomX * denomY);

        // Calculate t-statistic and p-value
        const t = r * Math.sqrt((n - 2) / (1 - r * r));
        const stats = this.getStatisticalWorkbook();
        const pValue = 2 * (1 - StatisticalDistributions.tCDF(Math.abs(t), n - 2));

        return { r, t, pValue, n };
    }

    /**
     * Interpret correlation strength
     */
    interpretCorrelation(r) {
        const absR = Math.abs(r);
        if (absR < 0.3) return 'Weak';
        if (absR < 0.7) return 'Moderate';
        return 'Strong';
    }

    // ==================== STATISTICAL REPORTS ====================

    /**
     * Generate comprehensive statistical report for column
     */
    generateStatisticalReport(columnRef, options = {}) {
        console.log('\n📊 GENERATING STATISTICAL REPORT');
        console.log('='.repeat(70));

        const data = this.extractColumnData(columnRef, options);
        const colName = this.headers[typeof columnRef === 'number' ? columnRef : this.letterToColumn(columnRef)];

        const {
            distributionType = 'normal',
            includeVisualizations = true,
            outputFormat = 'both' // 'both', 'png', 'excel'
        } = options;

        console.log(`\nColumn: ${colName}`);
        console.log(`Distribution: ${distributionType}`);
        console.log(`Format: ${outputFormat}`);

        const stats = this.getStatisticalWorkbook();

        const config = {
            samples: data,
            sampleName: colName,
            variableName: colName,
            unitName: options.unitName || 'units',
            distribution: distributionType,
            distributionParams: options.distributionParams || null,
            targetValue: options.targetValue || null,
            targetAnalysisType: options.targetAnalysisType || null,
            hypothesisTest: options.hypothesisTest || null,
            compareDistributions: options.compareDistributions || null,
            scenarioDescription: options.scenarioDescription || ''
        };

        // Run comprehensive analysis
        stats.analyzeDistribution(config);

        // Generate visualizations if requested
        if (includeVisualizations) {
            stats.generateAllVisualizations();
        }

        console.log('\n✓ Report Generated');
        console.log(`  Pages: ${stats.currentWorkbook.length}`);
        console.log(`  Visualizations: ${includeVisualizations ? Object.keys(stats.visualizations || {}).length : 0}`);

        // Store report
        const report = {
            timestamp: new Date(),
            columnName: colName,
            distribution: distributionType,
            statistics: stats.statistics,
            distributionAnalysis: stats.distributionAnalysis,
            goodnessOfFit: stats.goodnessOfFit,
            confidenceIntervals: stats.confidenceIntervals,
            parameterCI: stats.parameterConfidenceIntervals,
            workbook: stats.currentWorkbook,
            visualizations: includeVisualizations ? stats.visualizations : null
        };

        this.statisticalReports.push(report);
        this.addToHistory(`Generated statistical report for ${colName}`);

        return report;
    }

 

    // ==================== REGRESSION ANALYSIS ====================

    /**
     * Perform regression analysis
     */
    performRegression(config, options = {}) {
        console.log('\n📊 REGRESSION ANALYSIS');
        console.log('='.repeat(70));

        const {
            predictorColumns,
            responseColumn,
            type = 'linear'
        } = config;

        // Extract data
        const X = predictorColumns.map(col => this.extractColumnData(col, options));
        const y = this.extractColumnData(responseColumn, options);

        // Transpose X for proper format
        const n = X[0].length;
        const k = X.length;
        const X_matrix = [];
        for (let i = 0; i < n; i++) {
            X_matrix[i] = [];
            for (let j = 0; j < k; j++) {
                X_matrix[i][j] = X[j][i];
            }
        }

        const stats = this.getStatisticalWorkbook();
        
        const regressionConfig = {
            type: type,
            predictors: X_matrix,
            response: y,
            ...config
        };

        stats.performRegression(regressionConfig);

        const result = stats.regressionResults[type];

        console.log(`\nRegression Type: ${result.type}`);
        console.log(`\nModel Fit:`);
        console.log(`  R²: ${result.modelFit.rSquared.toFixed(6)}`);
        console.log(`  Adjusted R²: ${result.modelFit.adjustedRSquared.toFixed(6)}`);
        console.log(`  RMSE: ${result.modelFit.RMSE.toFixed(6)}`);

        console.log(`\nCoefficients:`);
        result.coefficients.forEach(coef => {
            console.log(`  ${coef.name}: ${coef.value.toFixed(6)} (p = ${coef.pValue.toFixed(6)})`);
        });

        // Store results
        this.statisticalAnalyses[`regression_${type}`] = {
            type: 'Regression Analysis',
            timestamp: new Date(),
            regressionType: type,
            result: result
        };

        this.addToHistory(`Performed ${type} regression`);

        return result;
    }

    // ==================== BAYESIAN INFERENCE ====================

    /**
     * Perform Bayesian inference
     */
    performBayesianInference(columnRef, priorConfig, options = {}) {
        console.log('\n📊 BAYESIAN INFERENCE');
        console.log('='.repeat(70));

        const data = this.extractColumnData(columnRef, options);
        const colName = this.headers[typeof columnRef === 'number' ? columnRef : this.letterToColumn(columnRef)];

        const stats = this.getStatisticalWorkbook();
        stats.loadFromArray(data);
        stats.sampleName = colName;
        stats.selectedDistribution = options.distributionType || 'normal';

        stats.fitDistribution();
        stats.performBayesianInference(priorConfig);

        console.log(`\nColumn: ${colName}`);
        console.log(`Prior: ${priorConfig.priorDistribution}`);
        console.log(`Posterior: ${stats.bayesianAnalysis.posterior.distribution}`);

        console.log('\n📈 POSTERIOR STATISTICS:');
        const posterior = stats.bayesianAnalysis.posterior;
        if (posterior.parameters) {
            console.log(`  Mean: ${posterior.posteriorMean || 'N/A'}`);
            console.log(`  Mode: ${posterior.posteriorMode || 'N/A'}`);
        }

        console.log('\n📊 CREDIBLE INTERVALS:');
        Object.entries(stats.bayesianAnalysis.credibleIntervals).forEach(([level, ci]) => {
            console.log(`  ${(parseFloat(level) * 100)}%: [${ci.lower.toFixed(6)}, ${ci.upper.toFixed(6)}]`);
        });

        // Store results
        this.statisticalAnalyses[`${colName}_bayesian`] = {
            type: 'Bayesian Inference',
            timestamp: new Date(),
            prior: priorConfig,
            posterior: stats.bayesianAnalysis
        };

        this.addToHistory(`Performed Bayesian inference on ${colName}`);

        return stats.bayesianAnalysis;
    }

    // ==================== POWER ANALYSIS ====================

    /**
     * Perform power analysis
     */
    performPowerAnalysis(config, options = {}) {
        console.log('\n📊 POWER ANALYSIS');
        console.log('='.repeat(70));

        const stats = this.getStatisticalWorkbook();
        stats.calculatePowerAnalysis(config);

        const powerResult = stats.powerAnalysis;

        console.log(`\nEffect Size: ${config.effectSize}`);
        console.log(`Alpha: ${config.alpha}`);
        console.log(`Desired Power: ${config.desiredPower}`);

        console.log(`\n📈 RESULTS:`);
        console.log(`  Required Sample Size: ${powerResult.requiredSampleSize.toFixed(0)}`);
        console.log(`  Current Power: ${(powerResult.currentPower.power * 100).toFixed(2)}%`);
        console.log(`  Minimum Detectable Effect: ${powerResult.minimumDetectableEffect.toFixed(6)}`);

        console.log(`\n💡 RECOMMENDATION:`);
        console.log(`  ${powerResult.recommendation}`);

        // Store results
        this.statisticalAnalyses['power_analysis'] = {
            type: 'Power Analysis',
            timestamp: new Date(),
            config: config,
            result: powerResult
        };

        this.addToHistory('Performed power analysis');

        return powerResult;
    }

    // ==================== META-ANALYSIS ====================

    /**
     * Perform meta-analysis on multiple studies
     */
    performMetaAnalysis(studies, options = {}) {
        console.log('\n📊 META-ANALYSIS');
        console.log('='.repeat(70));

        const stats = this.getStatisticalWorkbook();
        stats.performMetaAnalysis(studies);

        const metaResult = stats.metaAnalysis;

        console.log(`\nNumber of Studies: ${studies.length}`);

        console.log(`\n📈 FIXED EFFECT MODEL:`);
        console.log(`  Pooled Effect: ${metaResult.fixedEffect.pooledEffect.toFixed(6)}`);
        console.log(`  95% CI: [${metaResult.fixedEffect.confidenceInterval.lower.toFixed(6)}, ${metaResult.fixedEffect.confidenceInterval.upper.toFixed(6)}]`);
        console.log(`  p-value: ${metaResult.fixedEffect.pValue.toFixed(6)}`);

        console.log(`\n📈 RANDOM EFFECTS MODEL:`);
        console.log(`  Pooled Effect: ${metaResult.randomEffects.pooledEffect.toFixed(6)}`);
        console.log(`  95% CI: [${metaResult.randomEffects.confidenceInterval.lower.toFixed(6)}, ${metaResult.randomEffects.confidenceInterval.upper.toFixed(6)}]`);
        console.log(`  Tau²: ${metaResult.randomEffects.tauSquared.toFixed(6)}`);

        console.log(`\n📊 HETEROGENEITY:`);
        console.log(`  Q: ${metaResult.heterogeneity.Q.toFixed(4)}`);
        console.log(`  I²: ${metaResult.heterogeneity.I2}`);
        console.log(`  Interpretation: ${metaResult.heterogeneity.interpretation}`);

        // Store results
        this.statisticalAnalyses['meta_analysis'] = {
            type: 'Meta-Analysis',
            timestamp: new Date(),
            studies: studies,
            result: metaResult
        };

        this.addToHistory(`Performed meta-analysis on ${studies.length} studies`);

        return metaResult;
    }

    // ==================== TIME SERIES ANALYSIS ====================

    /**
     * Perform time series analysis
     */
    performTimeSeriesAnalysis(columnRef, config = {}, options = {}) {
        console.log('\n📊 TIME SERIES ANALYSIS');
        console.log('='.repeat(70));

        const data = this.extractColumnData(columnRef, options);
        const colName = this.headers[typeof columnRef === 'number' ? columnRef : this.letterToColumn(columnRef)];

        const stats = this.getStatisticalWorkbook();
        stats.performTimeSeriesAnalysis(data, config);

        const tsResult = stats.timeSeriesAnalysis;

        console.log(`\nColumn: ${colName}`);
        console.log(`Observations: ${tsResult.descriptive.observations}`);

        console.log(`\n📈 TREND ANALYSIS:`);
        console.log(`  ${tsResult.trend.linearTrend.interpretation}`);
        console.log(`  Mann-Kendall: ${tsResult.trend.mannKendall.interpretation}`);

        if (tsResult.seasonality) {
            console.log(`\n📊 SEASONALITY:`);
            console.log(`  Period: ${tsResult.seasonality.period}`);
            console.log(`  ${tsResult.seasonality.interpretation}`);
        }

        console.log(`\n🔍 STATIONARITY:`);
        console.log(`  ${tsResult.stationarity.recommendation}`);

        if (tsResult.arima) {
            console.log(`\n📈 ARIMA MODEL:`);
            console.log(`  Order: (${tsResult.arima.order.p}, ${tsResult.arima.order.d}, ${tsResult.arima.order.q})`);
            console.log(`  AIC: ${tsResult.arima.diagnostics.AIC.toFixed(4)}`);
            console.log(`  BIC: ${tsResult.arima.diagnostics.BIC.toFixed(4)}`);
        }

        // Store results
        this.statisticalAnalyses[`${colName}_timeseries`] = {
            type: 'Time Series Analysis',
            timestamp: new Date(),
            result: tsResult
        };

        this.addToHistory(`Performed time series analysis on ${colName}`);

        return tsResult;
    }

    // ==================== ANOVA ====================

    /**
     * Perform ANOVA on grouped data
     */
    performANOVA(groupColumns, options = {}) {
        console.log('\n📊 ANALYSIS OF VARIANCE (ANOVA)');
        console.log('='.repeat(70));

        const groups = groupColumns.map(col => this.extractColumnData(col, options));
        const groupNames = groupColumns.map(col => 
            this.headers[typeof col === 'number' ? col : this.letterToColumn(col)]
        );

        const stats = this.getStatisticalWorkbook();
        const anovaResult = stats.performANOVA(groups);

        console.log(`\nGroups: ${groupNames.join(', ')}`);
        console.log(`Number of Groups: ${anovaResult.groups}`);
        console.log(`Total Sample Size: ${anovaResult.totalSampleSize}`);

        console.log(`\n📈 ANOVA TABLE:`);
        console.log(`  Source          SS          df      MS          F         p-value`);
        console.log(`  Between    ${anovaResult.sumOfSquares.between.toFixed(4).padStart(10)}  ${anovaResult.degreesOfFreedom.between.toString().padStart(3)}  ${anovaResult.meanSquares.between.toFixed(4).padStart(10)}  ${anovaResult.fStatistic.toFixed(4).padStart(8)}  ${anovaResult.pValue.toFixed(6)}`);
        console.log(`  Within     ${anovaResult.sumOfSquares.within.toFixed(4).padStart(10)}  ${anovaResult.degreesOfFreedom.within.toString().padStart(3)}  ${anovaResult.meanSquares.within.toFixed(4).padStart(10)}`);
        console.log(`  Total      ${anovaResult.sumOfSquares.total.toFixed(4).padStart(10)}  ${anovaResult.degreesOfFreedom.total.toString().padStart(3)}`);

        console.log(`\n💡 CONCLUSION:`);
        console.log(`  ${anovaResult.conclusion}`);

        // Store results
        this.statisticalAnalyses['anova'] = {
            type: 'ANOVA',
            timestamp: new Date(),
            groups: groupNames,
            result: anovaResult
        };

        this.addToHistory(`Performed ANOVA on ${groupNames.length} groups`);

        return anovaResult;
    }

    // ==================== STATISTICAL WORKBOOK GENERATION ====================

 
    // ==================== SUMMARY AND STATUS METHODS ====================

    /**
     * Get statistical analysis summary
     */
    getStatisticalAnalysisSummary() {
        return {
            totalAnalyses: Object.keys(this.statisticalAnalyses).length,
            distributionFits: Object.keys(this.distributionFits).length,
            reports: this.statisticalReports.length,
            analyses: Object.entries(this.statisticalAnalyses).map(([key, analysis]) => ({
                key,
                type: analysis.type,
                timestamp: analysis.timestamp
            }))
        };
    }

    /**
     * Display statistical analysis summary
     */
    displayStatisticalSummary() {
        const summary = this.getStatisticalAnalysisSummary();

        console.log('\n📊 STATISTICAL ANALYSIS SUMMARY');
        console.log('='.repeat(70));
        console.log(`\nTotal Analyses: ${summary.totalAnalyses}`);
        console.log(`Distribution Fits: ${summary.distributionFits}`);
        console.log(`Reports Generated: ${summary.reports}`);

        if (summary.analyses.length > 0) {
            console.log('\n📈 Recent Analyses:');
            summary.analyses.slice(-10).forEach(analysis => {
                console.log(`  ${analysis.type}: ${analysis.key} (${analysis.timestamp.toLocaleString()})`);
            });
        }

        console.log('\n='.repeat(70));
    }

 
    // ==================== INTEGRATION WITH EXISTING METHODS ====================






    // ==================== GRAPHING CALCULATOR INTEGRATION ====================
    // (Keep all existing graphing calculator methods unchanged)

    /**
     * Initialize GraphingCalculatorGame instance
     */
    initializeGraphingCalculator() {
        if (!this.graphingCalculator) {
            this.graphingCalculator = new GraphingCalculatorGame();
        }
        return this.graphingCalculator;
    }

    /**
     * Get graphing calculator instance
     */
    getGraphingCalculator() {
        if (!this.graphingCalculator) {
            this.initializeGraphingCalculator();
        }
        return this.graphingCalculator;
    }

    // ==================== EQUATION METHODS ====================

    /**
     * Add equation to graphing calculator
     */
    addEquation(equation) {
        const calc = this.getGraphingCalculator();
        const result = calc.addEquation(equation);
        if (result) {
            this.addToHistory(`Added equation: ${equation}`);
            this.lastModified = new Date();
        }
        return result;
    }

    /**
     * Get equation history
     */
    getEquationHistory() {
        const calc = this.getGraphingCalculator();
        return calc.equationHistory;
    }

    /**
     * Get equation count
     */
    getEquationCount() {
        const calc = this.getGraphingCalculator();
        return calc.equationCounter;
    }

    // ==================== TRIANGLE METHODS ====================

    /**
     * Add triangle
     */
    addTriangle(input) {
        const calc = this.getGraphingCalculator();
        const result = calc.addTriangle(input);
        if (result) {
            this.addToHistory(`Added triangle: ${input}`);
            this.lastModified = new Date();
        }
        return result;
    }

    /**
     * Get triangle history
     */
    getTriangleHistory() {
        const calc = this.getGraphingCalculator();
        return calc.triangleHistory;
    }

    /**
     * Get triangle count
     */
    getTriangleCount() {
        const calc = this.getGraphingCalculator();
        return calc.triangleCounter;
    }

    // ==================== CIRCLE METHODS ====================

    /**
     * Add circle
     */
    addCircle(input) {
        const calc = this.getGraphingCalculator();
        const result = calc.addCircle(input);
        if (result) {
            this.addToHistory(`Added circle: ${input}`);
            this.lastModified = new Date();
        }
        return result;
    }

    /**
     * Get circle history
     */
    getCircleHistory() {
        const calc = this.getGraphingCalculator();
        return calc.circleHistory;
    }

    /**
     * Get circle count
     */
    getCircleCount() {
        const calc = this.getGraphingCalculator();
        return calc.circleCounter;
    }

    // ==================== RECTANGLE METHODS ====================

    /**
     * Add rectangle
     */
    addRectangle(input) {
        const calc = this.getGraphingCalculator();
        const result = calc.addRectangle(input);
        if (result) {
            this.addToHistory(`Added rectangle: ${input}`);
            this.lastModified = new Date();
        }
        return result;
    }

    /**
     * Get rectangle history
     */
    getRectangleHistory() {
        const calc = this.getGraphingCalculator();
        return calc.rectangleHistory;
    }

    /**
     * Get rectangle count
     */
    getRectangleCount() {
        const calc = this.getGraphingCalculator();
        return calc.rectangleCounter;
    }

    // ==================== SQUARE METHODS ====================

    /**
     * Add square
     */
    addSquare(input) {
        const calc = this.getGraphingCalculator();
        const result = calc.addSquare(input);
        if (result) {
            this.addToHistory(`Added square: ${input}`);
            this.lastModified = new Date();
        }
        return result;
    }

    /**
     * Get square history
     */
    getSquareHistory() {
        const calc = this.getGraphingCalculator();
        return calc.squareHistory;
    }

    /**
     * Get square count
     */
    getSquareCount() {
        const calc = this.getGraphingCalculator();
        return calc.squareCounter;
    }

    // ==================== PARALLELOGRAM METHODS ====================

    /**
     * Add parallelogram
     */
    addParallelogram(input) {
        const calc = this.getGraphingCalculator();
        const result = calc.addParallelogram(input);
        if (result) {
            this.addToHistory(`Added parallelogram: ${input}`);
            this.lastModified = new Date();
        }
        return result;
    }

    /**
     * Get parallelogram history
     */
    getParallelogramHistory() {
        const calc = this.getGraphingCalculator();
        return calc.parallelogramHistory;
    }

    /**
     * Get parallelogram count
     */
    getParallelogramCount() {
        const calc = this.getGraphingCalculator();
        return calc.parallelogramCounter;
    }

    // ==================== POLYGON METHODS ====================

    /**
     * Add polygon
     */
    addPolygon(input) {
        const calc = this.getGraphingCalculator();
        const result = calc.addPolygon(input);
        if (result) {
            this.addToHistory(`Added polygon: ${input}`);
            this.lastModified = new Date();
        }
        return result;
    }

    /**
     * Get polygon history
     */
    getPolygonHistory() {
        const calc = this.getGraphingCalculator();
        return calc.polygonHistory;
    }

    /**
     * Get polygon count
     */
    getPolygonCount() {
        const calc = this.getGraphingCalculator();
        return calc.polygonCounter;
    }

    // ==================== ELLIPSE METHODS ====================

    /**
     * Add ellipse
     */
    addEllipse(input) {
        const calc = this.getGraphingCalculator();
        const result = calc.addEllipse(input);
        if (result) {
            this.addToHistory(`Added ellipse: ${input}`);
            this.lastModified = new Date();
        }
        return result;
    }

    /**
     * Get ellipse history
     */
    getEllipseHistory() {
        const calc = this.getGraphingCalculator();
        return calc.ellipseHistory;
    }

    /**
     * Get ellipse count
     */
    getEllipseCount() {
        const calc = this.getGraphingCalculator();
        return calc.ellipseCounter;
    }

    // ==================== QUADRILATERAL METHODS ====================

    /**
     * Add quadrilateral
     */
    addQuadrilateral(input) {
        const calc = this.getGraphingCalculator();
        const result = calc.addQuadrilateral(input);
        if (result) {
            this.addToHistory(`Added quadrilateral: ${input}`);
            this.lastModified = new Date();
        }
        return result;
    }

    /**
     * Get quadrilateral history
     */
    getQuadrilateralHistory() {
        const calc = this.getGraphingCalculator();
        return calc.quadrilateralHistory;
    }

    /**
     * Get quadrilateral count
     */
    getQuadrilateralCount() {
        const calc = this.getGraphingCalculator();
        return calc.quadrilateralCounter;
    }

    // ==================== TRAPEZOID METHODS ====================

    /**
     * Add trapezoid
     */
    addTrapezoid(input) {
        const calc = this.getGraphingCalculator();
        const result = calc.addTrapezoid(input);
        if (result) {
            this.addToHistory(`Added trapezoid: ${input}`);
            this.lastModified = new Date();
        }
        return result;
    }

    /**
     * Get trapezoid history
     */
    getTrapezoidHistory() {
        const calc = this.getGraphingCalculator();
        return calc.trapezoidHistory;
    }

    /**
     * Get trapezoid count
     */
    getTrapezoidCount() {
        const calc = this.getGraphingCalculator();
        return calc.trapezoidCounter;
    }

    // ==================== SPHERE METHODS ====================

    /**
     * Add sphere
     */
    addSphere(input) {
        const calc = this.getGraphingCalculator();
        const result = calc.addSphere(input);
        if (result) {
            this.addToHistory(`Added sphere: ${input}`);
            this.lastModified = new Date();
        }
        return result;
    }

    /**
     * Get sphere history
     */
    getSphereHistory() {
        const calc = this.getGraphingCalculator();
        return calc.sphereHistory;
    }

    /**
     * Get sphere count
     */
    getSphereCount() {
        const calc = this.getGraphingCalculator();
        return calc.sphereCounter;
    }

    // ==================== CYLINDER METHODS ====================

    /**
     * Add cylinder
     */
    addCylinder(input) {
        const calc = this.getGraphingCalculator();
        const result = calc.addCylinder(input);
        if (result) {
            this.addToHistory(`Added cylinder: ${input}`);
            this.lastModified = new Date();
        }
        return result;
    }

    /**
     * Get cylinder history
     */
    getCylinderHistory() {
        const calc = this.getGraphingCalculator();
        return calc.cylinderHistory;
    }

    /**
     * Get cylinder count
     */
    getCylinderCount() {
        const calc = this.getGraphingCalculator();
        return calc.cylinderCounter;
    }

    // ==================== CONE METHODS ====================

    /**
     * Add cone
     */
    addCone(input) {
        const calc = this.getGraphingCalculator();
        const result = calc.addCone(input);
        if (result) {
            this.addToHistory(`Added cone: ${input}`);
            this.lastModified = new Date();
        }
        return result;
    }

    /**
     * Get cone history
     */
    getConeHistory() {
        const calc = this.getGraphingCalculator();
        return calc.coneHistory;
    }

    /**
     * Get cone count
     */
    getConeCount() {
        const calc = this.getGraphingCalculator();
        return calc.coneCounter;
    }

    // ==================== CUBE METHODS ====================

    /**
     * Add cube
     */
    addCube(input) {
        const calc = this.getGraphingCalculator();
        const result = calc.addCube(input);
        if (result) {
            this.addToHistory(`Added cube: ${input}`);
            this.lastModified = new Date();
        }
        return result;
    }

    /**
     * Get cube history
     */
    getCubeHistory() {
        const calc = this.getGraphingCalculator();
        return calc.cubeHistory;
    }

    /**
     * Get cube count
     */
    getCubeCount() {
        const calc = this.getGraphingCalculator();
        return calc.cubeCounter;
    }

    // ==================== VECTOR METHODS ====================

    /**
     * Add vector
     */
    addVector(input) {
        const calc = this.getGraphingCalculator();
        const result = calc.addVector(input);
        if (result) {
            this.addToHistory(`Added vector: ${input}`);
            this.lastModified = new Date();
        }
        return result;
    }

    /**
     * Get vector history
     */
    getVectorHistory() {
        const calc = this.getGraphingCalculator();
        return calc.vectorHistory;
    }

    /**
     * Get vector count
     */
    getVectorCount() {
        const calc = this.getGraphingCalculator();
        return calc.vectorCounter;
    }

    /**
     * Display vector history
     */
    displayVectorHistory() {
        const calc = this.getGraphingCalculator();
        calc.displayVectorHistory();
    }

    /**
     * Toggle vector settings
     */
    toggleVectorSettings() {
        const calc = this.getGraphingCalculator();
        calc.toggleVectorSettings();
    }

    // ==================== MATRIX METHODS ====================

    /**
     * Add matrix
     */
    addMatrix(input) {
        const calc = this.getGraphingCalculator();
        if (calc.addMatrix) {
            const result = calc.addMatrix(input);
            if (result) {
                this.addToHistory(`Added matrix: ${input}`);
                this.lastModified = new Date();
            }
            return result;
        }
        console.log("❌ Matrix functionality not yet implemented in GraphingCalculatorGame");
        return false;
    }

    /**
     * Get matrix history
     */
    getMatrixHistory() {
        const calc = this.getGraphingCalculator();
        return calc.matrixHistory || [];
    }

    /**
     * Get matrix count
     */
    getMatrixCount() {
        const calc = this.getGraphingCalculator();
        return calc.matrixCounter || 0;
    }

    /**
     * Display matrix history
     */
    displayMatrixHistory() {
        const calc = this.getGraphingCalculator();
        if (calc.displayMatrixHistory) {
            calc.displayMatrixHistory();
        } else {
            console.log("❌ Matrix functionality not yet implemented");
        }
    }

    /**
     * Toggle matrix settings
     */
    toggleMatrixSettings() {
        const calc = this.getGraphingCalculator();
        if (calc.toggleMatrixSettings) {
            calc.toggleMatrixSettings();
        } else {
            console.log("❌ Matrix functionality not yet implemented");
        }
    }

    // ==================== DISPLAY METHODS ====================

    /**
     * Display all available formulas
     */
    displayAllFormulas() {
        const calc = this.getGraphingCalculator();
        calc.displayAllFormulas();
    }

    /**
     * Display help menu
     */
    displayHelp() {
        const calc = this.getGraphingCalculator();
        calc.displayHelp();
    }

    /**
     * Display current graph
     */
    displayCurrentGraph() {
        const calc = this.getGraphingCalculator();
        calc.displayCurrentGraph();
    }

    /**
     * Display complete history
     */
    displayCompleteHistory() {
        console.log("\n📜 COMPLETE WORKBOOK HISTORY:");
        console.log("=".repeat(70));

        // Spreadsheet history
        if (this.history.length > 0) {
            console.log("\n📊 Spreadsheet Actions:");
            this.history.forEach((entry, index) => {
                console.log(`  ${index + 1}. ${entry}`);
            });
        }

        // Statistical analyses
        if (this.statisticalAnalyses.length > 0) {
            console.log("\n📈 Statistical Analyses:");
            this.statisticalAnalyses.forEach((analysis, index) => {
                console.log(`  ${index + 1}. ${analysis.type} - ${analysis.timestamp.toLocaleString()}`);
            });
        }

        // Graphing calculator history
        if (this.graphingCalculator) {
            const calc = this.graphingCalculator;
            
            if (calc.equationHistory.length > 0) {
                console.log("\n📈 Equation History:");
                calc.equationHistory.forEach(eq => console.log(`  ${eq}`));
            }

            const allShapes = [
                { name: 'Triangle', history: calc.triangleHistory, icon: '🔺' },
                { name: 'Circle', history: calc.circleHistory, icon: '⭕' },
                { name: 'Rectangle', history: calc.rectangleHistory, icon: '▭' },
                { name: 'Square', history: calc.squareHistory, icon: '▢' },
                { name: 'Parallelogram', history: calc.parallelogramHistory, icon: '▱' },
                { name: 'Polygon', history: calc.polygonHistory, icon: '⬡' },
                { name: 'Ellipse', history: calc.ellipseHistory, icon: '⬭' },
                { name: 'Quadrilateral', history: calc.quadrilateralHistory, icon: '⬢' },
                { name: 'Trapezoid', history: calc.trapezoidHistory, icon: '⏢' },
                { name: 'Sphere', history: calc.sphereHistory, icon: '🌐' },
                { name: 'Cylinder', history: calc.cylinderHistory, icon: '🛢️' },
                { name: 'Cone', history: calc.coneHistory, icon: '🔺' },
                { name: 'Cube', history: calc.cubeHistory, icon: '🧊' }
            ];

            allShapes.forEach(shape => {
                if (shape.history && shape.history.length > 0) {
                    console.log(`\n${shape.icon} ${shape.name} History:`);
                    shape.history.forEach(item => console.log(`  ${item.id}. ${item.input}`));
                }
            });

            if (calc.vectorHistory && calc.vectorHistory.length > 0) {
                console.log("\n➡️  Vector History:");
                calc.vectorHistory.forEach(vec => console.log(`  ${vec.id}. ${vec.input}`));
            }

            if (calc.matrixHistory && calc.matrixHistory.length > 0) {
                console.log("\n🔢 Matrix History:");
                calc.matrixHistory.forEach(mat => {
                    const desc = mat.description ? ` (${mat.description})` : '';
                    console.log(`  ${mat.id}. ${mat.input}${desc}`);
                });
            }
        }

        if (this.getTotalItems() === 0) {
            console.log("\nNo items added yet.");
        }

        console.log("=".repeat(70));
    }

    /**
     * Display shape history by type
     */
    displayShapeHistory(shapeName) {
        const calc = this.getGraphingCalculator();
        calc.displayShapeHistory(shapeName, calc[`${shapeName}History`]);
    }

    // ==================== THEME & SETTINGS METHODS ====================

    /**
     * Change graphing calculator theme
     */
    changeGraphTheme(themeName) {
        const calc = this.getGraphingCalculator();
        const result = calc.changeTheme(themeName);
        if (result) {
            this.addToHistory(`Changed graph theme to: ${themeName}`);
            this.lastModified = new Date();
        }
        return result;
    }

    /**
     * Set viewing window for graphs
     */
    setGraphViewingWindow(xMin, xMax, yMin, yMax) {
        const calc = this.getGraphingCalculator();
        const result = calc.setViewingWindow(xMin, xMax, yMin, yMax);
        if (result) {
            this.addToHistory(`Updated viewing window: x[${xMin}, ${xMax}], y[${yMin}, ${yMax}]`);
            this.lastModified = new Date();
        }
        return result;
    }

    // ==================== STATUS & UTILITY METHODS ====================

    /**
     * Get calculator status
     */
    getCalculatorStatus() {
        const calc = this.getGraphingCalculator();
        return calc.getCalculatorStatus();
    }

    /**
     * Get total graphing items count
     */
    getTotalGraphingItems() {
        if (!this.graphingCalculator) return 0;
        const calc = this.graphingCalculator;
        return calc.getTotalItemCount();
    }

    /**
     * Get total items (spreadsheet + graphing + statistical)
     */
    getTotalItems() {
        return this.history.length + 
               this.getTotalGraphingItems() + 
               this.statisticalAnalyses.length;
    }

    /**
     * Clear all graphing items
     */
    clearAllGraphingItems() {
        const calc = this.getGraphingCalculator();
        calc.clearAll();
        this.addToHistory('Cleared all graphing calculator items');
        this.lastModified = new Date();
    }

    /**
     * Undo last graphing item
     */
    undoLastGraphingItem() {
        const calc = this.getGraphingCalculator();
        calc.undoLast();
        this.addToHistory('Undone last graphing calculator action');
        this.lastModified = new Date();
    }

    /**
     * Save current graph
     */
    async saveCurrentGraph() {
        const calc = this.getGraphingCalculator();
        await calc.saveCurrentGraph();
    }



    // ==================== UTILITY METHODS ====================

    /**
     * Add to history
     */
    addToHistory(action) {
        this.history.push({
            action: action,
            timestamp: new Date()
        });
    }


 

getDiagramCounts() {
    return {
        charts: this.charts.length,
        anatomicalDiagrams: this.anatomicalDiagrams.length,
        crossSectionDiagrams: this.crossSectionDiagrams.length,
        stereochemistryDiagrams: this.stereochemistryDiagrams.length,
        geometricShapes: this.geometricShapes.length,
        graphs: this.graphs.length,
        total:
            this.charts.length +
            this.anatomicalDiagrams.length +
            this.crossSectionDiagrams.length +
            this.stereochemistryDiagrams.length +
            this.geometricShapes.length +
            this.graphs.length
    };
}

// Update getCompleteWorkbookStatus:
getCompleteWorkbookStatus() {
    const calc = this.graphingCalculator;
    const statWb = this.statisticalWorkbook;
    
    return {
        metadata: {
            name: this.sheetName,
            created: this.createdDate,
            lastModified: this.lastModified,
            author: this.author
        },
        spreadsheet: {
            rows: this.data.length,
            columns: this.headers.length,
            formulas: Object.keys(this.formulas).length,
            calculations: Object.keys(this.calculations).length
        },
        visualizations: {
            charts: this.charts.length,
            anatomicalDiagrams: this.anatomicalDiagrams.length,
            crossSectionDiagrams: this.crossSectionDiagrams.length,
            stereochemistryDiagrams: this.stereochemistryDiagrams.length,
            geometricShapes: this.geometricShapes.length,
            graphs: this.graphs.length,
            total: this.getDiagramCounts().total
        },
        statisticalAnalysis: statWb ? {
            samplesLoaded: statWb.rawSamples.length,
            distribution: statWb.selectedDistribution,
            analysesPerformed: this.statisticalAnalyses.length,
            visualizationsGenerated: statWb.visualizations ? Object.keys(statWb.visualizations).length : 0
        } : {
            samplesLoaded: 0,
            distribution: null,
            analysesPerformed: 0,
            visualizationsGenerated: 0
        },
        graphingCalculator: calc ? {
            equations: calc.equationCounter,
            triangles: calc.triangleCounter,
            circles: calc.circleCounter,
            rectangles: calc.rectangleCounter,
            squares: calc.squareCounter,
            parallelograms: calc.parallelogramCounter,
            polygons: calc.polygonCounter,
            ellipses: calc.ellipseCounter,
            quadrilaterals: calc.quadrilateralCounter,
            trapezoids: calc.trapezoidCounter,
            spheres: calc.sphereCounter,
            cylinders: calc.cylinderCounter,
            cones: calc.coneCounter,
            cubes: calc.cubeCounter,
            vectors: calc.vectorCounter,
            matrices: calc.matrixCounter || 0,
            total: calc.getTotalItemCount()
        } : {
            equations: 0,
            total: 0
        },
        history: {
            spreadsheetActions: this.history.length,
            statisticalAnalyses: this.statisticalAnalyses.length,
            totalActions: this.history.length + this.statisticalAnalyses.length
        }
    };
}

// Update displayCompleteWorkbookStatus to include graphs:
displayCompleteWorkbookStatus() {
    const status = this.getCompleteWorkbookStatus();

    console.log("\n" + "=".repeat(70));
    console.log("📊 COMPLETE WORKBOOK STATUS");
    console.log("=".repeat(70));

    console.log("\n📋 METADATA:");
    console.log(`  Name: ${status.metadata.name}`);
    console.log(`  Author: ${status.metadata.author}`);
    console.log(`  Created: ${status.metadata.created.toLocaleString()}`);
    console.log(`  Last Modified: ${status.metadata.lastModified.toLocaleString()}`);

    console.log("\n📊 SPREADSHEET:");
    console.log(`  Rows: ${status.spreadsheet.rows}`);
    console.log(`  Columns: ${status.spreadsheet.columns}`);
    console.log(`  Formulas: ${status.spreadsheet.formulas}`);
    console.log(`  Calculations: ${status.spreadsheet.calculations}`);

    console.log("\n📈 VISUALIZATIONS:");
    console.log(`  Charts: ${status.visualizations.charts}`);
    console.log(`  Anatomical Diagrams: ${status.visualizations.anatomicalDiagrams}`);
    console.log(`  Cross-Section Diagrams: ${status.visualizations.crossSectionDiagrams}`);
    console.log(`  Stereochemistry Diagrams: ${status.visualizations.stereochemistryDiagrams}`);
    console.log(`  Geometric Shapes: ${status.visualizations.geometricShapes}`);
    console.log(`  Mathematical Graphs: ${status.visualizations.graphs}`);
    console.log(`  Total Visualizations: ${status.visualizations.total}`);

    console.log("\n📊 STATISTICAL ANALYSIS:");
    console.log(`  Samples Loaded: ${status.statisticalAnalysis.samplesLoaded}`);
    console.log(`  Distribution: ${status.statisticalAnalysis.distribution || 'None'}`);
    console.log(`  Analyses Performed: ${status.statisticalAnalysis.analysesPerformed}`);
    console.log(`  Visualizations Generated: ${status.statisticalAnalysis.visualizationsGenerated}`);

    console.log("\n🧮 GRAPHING CALCULATOR:");
    console.log(`  📈 Equations: ${status.graphingCalculator.equations}`);
    console.log(`  🔺 Triangles: ${status.graphingCalculator.triangles}`);
    console.log(`  ⭕ Circles: ${status.graphingCalculator.circles}`);
    console.log(`  ▭ Rectangles: ${status.graphingCalculator.rectangles}`);
    console.log(`  ▢ Squares: ${status.graphingCalculator.squares}`);
    console.log(`  ▱ Parallelograms: ${status.graphingCalculator.parallelograms}`);
    console.log(`  ⬡ Polygons: ${status.graphingCalculator.polygons}`);
    console.log(`  ⬭ Ellipses: ${status.graphingCalculator.ellipses}`);
    console.log(`  ⬢ Quadrilaterals: ${status.graphingCalculator.quadrilaterals}`);
    console.log(`  ⏢ Trapezoids: ${status.graphingCalculator.trapezoids}`);
    console.log(`  🌐 Spheres: ${status.graphingCalculator.spheres}`);
    console.log(`  🛢️ Cylinders: ${status.graphingCalculator.cylinders}`);
    console.log(`  🔺 Cones: ${status.graphingCalculator.cones}`);
    console.log(`  🧊 Cubes: ${status.graphingCalculator.cubes}`);
    console.log(`  ➡️  Vectors: ${status.graphingCalculator.vectors}`);
    console.log(`  🔢 Matrices: ${status.graphingCalculator.matrices}`);
    console.log(`  📊 Total Graphing Items: ${status.graphingCalculator.total}`);

    console.log("\n📜 HISTORY:");
    console.log(`  Total Actions: ${status.history.totalActions}`);
    console.log(`  Spreadsheet: ${status.history.spreadsheetActions}`);
    console.log(`  Statistical: ${status.history.statisticalAnalyses}`);

    console.log("\n=".repeat(70));
}

// Update clearAll to include graphs:
clearAll() {
    this.data = [];
    this.headers = [];
    this.formulas = {};
    this.calculations = {};
    this.charts = [];
    this.anatomicalDiagrams = [];
    this.crossSectionDiagrams = [];
    this.stereochemistryDiagrams = [];
    this.geometricShapes = [];
    this.graphs = [];
    this.statisticalAnalyses = [];
    
    if (this.graphingCalculator) {
        this.graphingCalculator.clearAll();
    }
    
    if (this.statisticalWorkbook) {
        this.statisticalWorkbook = null;
    }
    
    this.addToHistory('Cleared all workbook data including graphs');
    this.lastModified = new Date();
}

// Update exportCompleteWorkbook to include graphs:
exportCompleteWorkbook(filename = null) {
    if (!filename) {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        filename = `complete_workbook_${timestamp}.json`;
    }

    const completeData = {
        metadata: {
            name: this.sheetName,
            created: this.createdDate,
            lastModified: this.lastModified,
            author: this.author,
            version: '4.0.0'
        },
        spreadsheet: {
            headers: this.headers,
            data: this.data,
            formulas: this.formulas,
            calculations: this.calculations
        },
        charts: this.charts,
        diagrams: {
            anatomical: this.anatomicalDiagrams,
            crossSection: this.crossSectionDiagrams,
            stereochemistry: this.stereochemistryDiagrams,
            geometric: this.geometricShapes
        },
        graphs: this.graphs,
        statisticalAnalyses: this.statisticalAnalyses,
        graphingCalculator: this.graphingCalculator ? {
            equationHistory: this.graphingCalculator.equationHistory,
            triangleHistory: this.graphingCalculator.triangleHistory,
            circleHistory: this.graphingCalculator.circleHistory,
            rectangleHistory: this.graphingCalculator.rectangleHistory,
            squareHistory: this.graphingCalculator.squareHistory,
            parallelogramHistory: this.graphingCalculator.parallelogramHistory,
            polygonHistory: this.graphingCalculator.polygonHistory,
            ellipseHistory: this.graphingCalculator.ellipseHistory,
            quadrilateralHistory: this.graphingCalculator.quadrilateralHistory,
            trapezoidHistory: this.graphingCalculator.trapezoidHistory,
            sphereHistory: this.graphingCalculator.sphereHistory,
            cylinderHistory: this.graphingCalculator.cylinderHistory,
            coneHistory: this.graphingCalculator.coneHistory,
            cubeHistory: this.graphingCalculator.cubeHistory,
            vectorHistory: this.graphingCalculator.vectorHistory,
            matrixHistory: this.graphingCalculator.matrixHistory
        } : null,
        history: this.history
    };

    fs.writeFileSync(filename, JSON.stringify(completeData, null, 2));

    this.addToHistory(`Exported complete workbook with graphs to ${filename}`);
    console.log(`✅ Complete workbook exported to: ${filename}`);
    return filename;
}




// Add to EnhancedSpreadsheetWorkbook class:

/**
 * Get all available graph types
 */
getAvailableGraphs() {
    const graphs = {};
    const categories = GraphRegistry.getAllCategories();
    
    categories.forEach(category => {
        graphs[category] = GraphRegistry.getGraphsByCategory(category);
    });

    return graphs;
}

/**
 * Get graphs by category
 */
getGraphsByCategory(category) {
    return GraphRegistry.getGraphsByCategory(category);
}

/**
 * Search graphs
 */
searchGraphs(query) {
    return GraphRegistry.searchGraphs(query);
}

/**
 * Get graph help
 */
getGraphHelp(graphKey) {
    const graph = GraphRegistry.getGraph(graphKey);
    if (!graph) {
        return { error: 'Graph not found' };
    }

    return {
        name: graph.name,
        category: graph.category,
        description: graph.description,
        equation: graph.equation,
        usage: graph.usage,
        examples: graph.examples,
        configParameters: graph.configParameters,
        calculations: graph.calculations,
        defaultOptions: graph.defaultOptions
    };
}

/**
 * Add graph to workbook
 */
addGraph(config) {
    const {
        key,
        title = null,
        points = [],
        segments = null,
        options = {},
        filename = null
    } = config;

    // Validate graph exists
    const graph = GraphRegistry.getGraph(key);
    if (!graph) {
        throw new Error(`Graph '${key}' not found`);
    }

    // Prepare configuration
    const graphConfig = key === 'piecewise' ? { segments } : { points };
    const mergedConfig = { ...graph.defaultOptions, ...graphConfig, ...options };

    // Validate configuration
    const validation = GraphRegistry.validateGraphConfig(key, mergedConfig);
    if (!validation.valid) {
        throw new Error(`Invalid configuration: ${validation.errors.join(', ')}`);
    }

    // Store graph
    const graphObj = {
        id: `graph_${this.graphs.length + 1}`,
        key,
        title: title || `${graph.name} ${this.graphs.length + 1}`,
        config: mergedConfig,
        filename: filename || `${this.sheetName}_${key}_${Date.now()}.png`,
        createdAt: new Date(),
        category: graph.category
    };

    this.graphs.push(graphObj);
    this.addToHistory(`Added graph: ${graph.name}`);
    this.lastModified = new Date();

    return graphObj;
}

/**
 * Update graph
 */
updateGraph(graphIndex, updates) {
    if (graphIndex < 0 || graphIndex >= this.graphs.length) {
        throw new Error(`Graph index ${graphIndex} out of range`);
    }

    const graph = this.graphs[graphIndex];

    if (updates.title) graph.title = updates.title;
    if (updates.config) {
        graph.config = { ...graph.config, ...updates.config };

        // Validate updated configuration
        const validation = GraphRegistry.validateGraphConfig(graph.key, graph.config);
        if (!validation.valid) {
            throw new Error(`Invalid configuration: ${validation.errors.join(', ')}`);
        }
    }

    this.addToHistory(`Updated graph: ${graph.title}`);
    this.lastModified = new Date();

    return graph;
}

/**
 * Remove graph
 */
removeGraph(graphIndex) {
    if (graphIndex < 0 || graphIndex >= this.graphs.length) {
        throw new Error(`Graph index ${graphIndex} out of range`);
    }

    const removed = this.graphs.splice(graphIndex, 1);
    this.addToHistory(`Removed graph: ${removed[0].title}`);
    this.lastModified = new Date();

    return removed[0];
}

/**
 * Render graph to PNG
 */
// Update renderGraphToPNG method in EnhancedSpreadsheetWorkbook
async renderGraphToPNG(graphIndex) {
    if (graphIndex < 0 || graphIndex >= this.graphs.length) {
        throw new Error(`Graph index ${graphIndex} out of range`);
    }

    const graphConfig = this.graphs[graphIndex];
    const graphInfo = GraphRegistry.getGraph(graphConfig.key);

    const width = 1000;
    const height = 800;

    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    this.graphRenderer.canvas = canvas;
    this.graphRenderer.ctx = ctx;

    const graphData = this.graphRenderer.renderGraph(
        graphConfig.key,
        0,
        0,
        width,
        height,
        graphConfig.config
    );

    // Use encode for @napi-rs/canvas
    const buffer = await canvas.encode('png');
    fs.writeFileSync(graphConfig.filename, buffer);

    return {
        id: graphConfig.id,
        filename: graphConfig.filename,
        size: buffer.length,
        graph: graphInfo.name,
        calculations: graphData
    };
}

// Update renderAllGraphs to be async
async renderAllGraphs() {
    const results = [];

    for (let index = 0; index < this.graphs.length; index++) {
        try {
            const result = await this.renderGraphToPNG(index);
            results.push(result);
        } catch (error) {
            results.push({
                error: error.message,
                index,
                graph: this.graphs[index].key
            });
        }
    }

    return results;
}

/**
 * List all graphs in workbook
 */
listGraphs() {
    return this.graphs.map((graph, index) => ({
        index,
        id: graph.id,
        name: graph.title,
        type: graph.key,
        category: graph.category,
        pointCount: graph.config.points ? graph.config.points.length : 
                   (graph.config.segments ? graph.config.segments.length : 0),
        filename: graph.filename,
        created: graph.createdAt
    }));
}

/**
 * Get graph statistics
 */
getGraphStatistics() {
    const stats = GraphRegistry.getGraphStatistics();

    return {
        ...stats,
        inWorkbook: this.graphs.length,
        byCategoryInWorkbook: this.graphs.reduce((acc, graph) => {
            acc[graph.category] = (acc[graph.category] || 0) + 1;
            return acc;
        }, {})
    };
}

/**
 * Get graph calculations
 */
getGraphCalculations(graphIndex) {
    if (graphIndex < 0 || graphIndex >= this.graphs.length) {
        throw new Error(`Graph index ${graphIndex} out of range`);
    }

    const graphConfig = this.graphs[graphIndex];
    
    // Calculate without rendering
    const tempCanvas = createCanvas(100, 100);
    const tempCtx = tempCanvas.getContext('2d');
    const tempRenderer = new GraphRenderer(tempCanvas, tempCtx);
    
    const graphData = tempRenderer.calculateGraph(graphConfig.key, graphConfig.config);
    
    return {
        graph: graphConfig.title,
        type: graphConfig.key,
        ...graphData
    };
}

/**
 * Suggest graphs based on data patterns
 */
suggestGraphsFromData(columnX, columnY) {
    const xIndex = this.headers.indexOf(columnX);
    const yIndex = this.headers.indexOf(columnY);

    if (xIndex === -1 || yIndex === -1) {
        throw new Error('Column not found');
    }

    const points = this.data
        .map(row => [parseFloat(row[xIndex]), parseFloat(row[yIndex])])
        .filter(([x, y]) => !isNaN(x) && !isNaN(y));

    if (points.length < 3) {
        throw new Error('Insufficient data points for graph suggestion');
    }

    const suggestions = [];
    const tempRenderer = new GraphRenderer();

    // Try linear
    try {
        const linear = tempRenderer.calculateLinear(points);
        suggestions.push({
            key: 'linear',
            priority: linear.rSquared * 100,
            rSquared: linear.rSquared,
            equation: linear.equation,
            reason: `Strong linear fit (R² = ${linear.rSquared.toFixed(4)})`
        });
    } catch (e) {}

    // Try quadratic
    try {
        const quadratic = tempRenderer.calculateQuadratic(points);
        suggestions.push({
            key: 'quadratic',
            priority: quadratic.rSquared * 100,
            rSquared: quadratic.rSquared,
            equation: quadratic.equation,
            reason: `Quadratic fit (R² = ${quadratic.rSquared.toFixed(4)})`
        });
    } catch (e) {}

    // Try exponential (if all y > 0)
    if (points.every(([, y]) => y > 0)) {
        try {
            const exponential = tempRenderer.calculateExponential(points);
            suggestions.push({
                key: 'exponential',
                priority: exponential.rSquared * 100,
                rSquared: exponential.rSquared,
                equation: exponential.equation,
                reason: `Exponential fit (R² = ${exponential.rSquared.toFixed(4)})`
            });
        } catch (e) {}
    }

    // Try logarithmic (if all x > 0)
    if (points.every(([x]) => x > 0)) {
        try {
            const logarithmic = tempRenderer.calculateLogarithmic(points);
            suggestions.push({
                key: 'logarithmic',
                priority: logarithmic.rSquared * 100,
                rSquared: logarithmic.rSquared,
                equation: logarithmic.equation,
                reason: `Logarithmic fit (R² = ${logarithmic.rSquared.toFixed(4)})`
            });
        } catch (e) {}
    }

    // Try power (if all x, y > 0)
    if (points.every(([x, y]) => x > 0 && y > 0)) {
        try {
            const power = tempRenderer.calculatePower(points);
            suggestions.push({
                key: 'power',
                priority: power.rSquared * 100,
                rSquared: power.rSquared,
                equation: power.equation,
                reason: `Power fit (R² = ${power.rSquared.toFixed(4)})`
            });
        } catch (e) {}
    }

    // Sort by R² (highest first)
    suggestions.sort((a, b) => b.rSquared - a.rSquared);

    return {
        dataPoints: points.length,
        suggestions: suggestions.slice(0, 5), // Top 5 suggestions
        bestFit: suggestions[0]
    };
}

/**
 * Add graph from spreadsheet data
 */
addGraphFromData(config) {
    const {
        columnX,
        columnY,
        graphKey = null,
        title = null,
        options = {}
    } = config;

    const xIndex = this.headers.indexOf(columnX);
    const yIndex = this.headers.indexOf(columnY);

    if (xIndex === -1 || yIndex === -1) {
        throw new Error('Column not found');
    }

    const points = this.data
        .map(row => [parseFloat(row[xIndex]), parseFloat(row[yIndex])])
        .filter(([x, y]) => !isNaN(x) && !isNaN(y));

    if (points.length < 2) {
        throw new Error('Insufficient data points');
    }

    // Auto-select best graph if not specified
    let selectedGraphKey = graphKey;
    if (!selectedGraphKey) {
        const suggestions = this.suggestGraphsFromData(columnX, columnY);
        selectedGraphKey = suggestions.bestFit.key;
    }

    // Add graph
    return this.addGraph({
        key: selectedGraphKey,
        title: title || `${columnY} vs ${columnX}`,
        points,
        options
    });
}

/**
 * Export graphs to folder
 */
exportGraphsToFolder(folderPath) {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }

    const results = [];

    this.graphs.forEach((graph, index) => {
        try {
            const originalFilename = graph.filename;
            graph.filename = `${folderPath}/graph_${path.basename(graph.filename)}`;

            const result = this.renderGraphToPNG(index);
            results.push(result);

            graph.filename = originalFilename;
        } catch (error) {
            results.push({
                error: error.message,
                graph: graph.key,
                index
            });
        }
    });

    return {
        folder: folderPath,
        results,
        summary: {
            exported: results.filter(r => !r.error).length,
            errors: results.filter(r => r.error).length
        }
    };
}

/**
 * Generate graphs catalog
 */
generateGraphsCatalog() {
    return {
        metadata: {
            generated: new Date().toISOString(),
            workbook: this.sheetName,
            author: this.author
        },
        categories: GraphRegistry.getAllCategories().reduce((acc, category) => {
            acc[category] = {
                available: Object.keys(GraphRegistry.getGraphsByCategory(category)).length,
                inWorkbook: this.graphs.filter(g => g.category === category).length,
                graphs: GraphRegistry.getGraphsByCategory(category)
            };
            return acc;
        }, {}),
        totalGraphs: {
            available: GraphRegistry.getAllGraphs().length,
            inWorkbook: this.graphs.length
        },
        statistics: this.getGraphStatistics()
    };
}







    // ========================================================================
    // STEREOCHEMISTRY DIAGRAM MANAGEMENT METHODS
    // ========================================================================

    // Get available stereochemistry diagrams
    getAvailableStereochemistryDiagrams() {
        const diagrams = {};
        const categories = StereochemistryDiagramsRegistry.getAllCategories();

        categories.forEach(category => {
            diagrams[category] = StereochemistryDiagramsRegistry.getDiagramsByCategory(category);
        });

        return diagrams;
    }

    // Get stereochemistry diagram suggestions based on context
    suggestStereochemistryDiagrams(context = null) {
        const suggestions = [];

        // Check headers for chemistry keywords
        const hasChemistry = this.headers.some(h => 
            /molecule|compound|chemical|bond|atom|formula|reaction|chemistry/i.test(h)
        );
        
        const hasOrganic = this.headers.some(h => 
            /carbon|hydrocarbon|alkane|alkene|alkyne|organic|methane|ethane|benzene/i.test(h)
        );
        
        const hasInorganic = this.headers.some(h => 
            /sulfur|fluoride|oxide|chloride|inorganic|metal|ion/i.test(h)
        );

        const hasBiochemistry = this.headers.some(h => 
            /glucose|amino|protein|carbohydrate|lipid|biochem/i.test(h)
        );

        // Check data for chemical formulas
        const detectedFormulas = new Set();
        this.data.forEach(row => {
            Object.values(row).forEach(value => {
                if (typeof value === 'string') {
                    // Common chemical formula patterns
                    const formulaPatterns = [
                        /\bCH4\b/i, /\bC2H6\b/i, /\bC2H4\b/i, /\bH2O\b/i, 
                        /\bNH3\b/i, /\bCO2\b/i, /\bSF6\b/i, /\bC6H12O6\b/i
                    ];
                    
                    formulaPatterns.forEach(pattern => {
                        if (pattern.test(value)) {
                            const match = value.match(pattern)[0].toUpperCase().replace(/\s/g, '');
                            detectedFormulas.add(match);
                        }
                    });
                }
            });
        });

        // Add suggestions based on detected formulas
        detectedFormulas.forEach(formula => {
            const found = StereochemistryDiagramsRegistry.findByFormula(formula);
            Object.keys(found).forEach(key => {
                if (!suggestions.find(s => s.key === key)) {
                    suggestions.push({
                        key,
                        priority: 10,
                        reason: `Chemical formula ${formula} detected in data`
                    });
                }
            });
        });

        // Add context-based suggestions
        if (hasOrganic || hasChemistry) {
            if (!suggestions.find(s => s.key === 'methane')) {
                suggestions.push({ key: 'methane', priority: 9, reason: 'Organic chemistry context detected' });
            }
            if (!suggestions.find(s => s.key === 'ethane')) {
                suggestions.push({ key: 'ethane', priority: 8, reason: 'Hydrocarbon molecules' });
            }
            if (!suggestions.find(s => s.key === 'ethene')) {
                suggestions.push({ key: 'ethene', priority: 7, reason: 'Alkene structures' });
            }
        }

        if (hasInorganic) {
            if (!suggestions.find(s => s.key === 'water')) {
                suggestions.push({ key: 'water', priority: 9, reason: 'Inorganic chemistry context' });
            }
            if (!suggestions.find(s => s.key === 'ammonia')) {
                suggestions.push({ key: 'ammonia', priority: 8, reason: 'Simple inorganic molecules' });
            }
            if (!suggestions.find(s => s.key === 'sulfurHexafluoride')) {
                suggestions.push({ key: 'sulfurHexafluoride', priority: 7, reason: 'Complex inorganic structures' });
            }
        }

        if (hasBiochemistry) {
            if (!suggestions.find(s => s.key === 'glucose')) {
                suggestions.push({ key: 'glucose', priority: 9, reason: 'Biochemistry/carbohydrate data detected' });
            }
        }

        // General suggestions if no specific context
        if (suggestions.length === 0) {
            suggestions.push(
                { key: 'methane', priority: 7, reason: 'Common chemistry molecule' },
                { key: 'water', priority: 6, reason: 'Universal molecule' },
                { key: 'carbonDioxide', priority: 5, reason: 'Environmental chemistry' }
            );
        }

        return suggestions.sort((a, b) => b.priority - a.priority);
    }

    // Get stereochemistry diagram help
    getStereochemistryDiagramHelp(diagramKey) {
        const diagram = StereochemistryDiagramsRegistry.getDiagram(diagramKey);
        if (!diagram) {
            return { error: 'Stereochemistry diagram not found' };
        }

        return {
            name: diagram.name,
            formula: diagram.formula,
            category: diagram.category,
            description: diagram.description,
            geometry: diagram.geometry,
            bondAngles: diagram.bondAngles,
            centralAtom: diagram.centralAtom,
            atoms: diagram.atoms.length,
            defaultOptions: diagram.defaultOptions
        };
    }

    // Find stereochemistry diagram by formula
    findStereochemistryDiagramByFormula(formula) {
        return StereochemistryDiagramsRegistry.findByFormula(formula);
    }

    // Add stereochemistry diagram to workbook
    addStereochemistryDiagram(diagramConfig) {
        const {
            key,
            title = null,
            options = {},
            filename = null
        } = diagramConfig;

        // Validate diagram exists
        const diagram = StereochemistryDiagramsRegistry.getDiagram(key);
        if (!diagram) {
            throw new Error(`Stereochemistry diagram '${key}' not found`);
        }

        // Merge options
        const mergedOptions = { ...diagram.defaultOptions, ...options };
        if (title) mergedOptions.title = title;

        // Store diagram config
        const diagramObj = {
            id: `stereochem_${this.stereochemistryDiagrams.length + 1}`,
            key,
            type: 'stereochemistry',
            title: mergedOptions.title,
            options: mergedOptions,
            filename: filename || `${this.sheetName}_${key}_${Date.now()}.png`,
            createdAt: new Date(),
            category: diagram.category,
            formula: diagram.formula
        };

        this.stereochemistryDiagrams.push(diagramObj);
        this.addToHistory(`Added stereochemistry diagram: ${diagram.name}`);

        return diagramObj;
    }

    // Render stereochemistry diagram to PNG
    renderStereochemistryDiagramToPNG(diagramIndex) {
        if (diagramIndex < 0 || diagramIndex >= this.stereochemistryDiagrams.length) {
            throw new Error(`Stereochemistry diagram index ${diagramIndex} out of range`);
        }

        const diagramConfig = this.stereochemistryDiagrams[diagramIndex];
        
        const width = diagramConfig.options.width || 800;
        const height = diagramConfig.options.height || 600;
        const canvas = createCanvas(width, height);
        const ctx = canvas.getContext('2d');

        // Update renderer's canvas
        this.stereochemistryRenderer.canvas = canvas;
        this.stereochemistryRenderer.ctx = ctx;

        // Render the diagram
        this.stereochemistryRenderer.renderDiagram(
            diagramConfig.key,
            0,
            0,
            width,
            height,
            diagramConfig.options
        );

        // Save to file
        const buffer = canvas.toBuffer('image/png');
        fs.writeFileSync(diagramConfig.filename, buffer);

        return {
            id: diagramConfig.id,
            filename: diagramConfig.filename,
            size: buffer.length,
            category: diagramConfig.category,
            type: 'stereochemistry',
            formula: diagramConfig.formula
        };
    }

    // Render all stereochemistry diagrams
    renderAllStereochemistryDiagrams() {
        const results = [];

        this.stereochemistryDiagrams.forEach((_, index) => {
            try {
                const result = this.renderStereochemistryDiagramToPNG(index);
                results.push(result);
            } catch (error) {
                results.push({
                    error: error.message,
                    index
                });
            }
        });

        return results;
    }

    // Get stereochemistry diagram statistics
    getStereochemistryDiagramStatistics() {
        const stats = StereochemistryDiagramsRegistry.getDiagramStats();
        return {
            totalAvailable: Object.values(stats).reduce((sum, cat) => sum + cat.count, 0),
            byCategory: stats,
            diagramsInWorkbook: this.stereochemistryDiagrams.length
        };
    }

    // Search stereochemistry diagrams
    searchStereochemistryDiagrams(query) {
        return StereochemistryDiagramsRegistry.searchDiagrams(query);
    }

    // List all stereochemistry diagrams in workbook
    listStereochemistryDiagrams() {
        return this.stereochemistryDiagrams.map((diagram, index) => ({
            index,
            id: diagram.id,
            name: diagram.title,
            formula: diagram.formula,
            type: StereochemistryDiagramsRegistry.getDiagram(diagram.key).name,
            category: diagram.category,
            filename: diagram.filename,
            created: diagram.createdAt
        }));
    }

    // Remove stereochemistry diagram
    removeStereochemistryDiagram(diagramIndex) {
        if (diagramIndex < 0 || diagramIndex >= this.stereochemistryDiagrams.length) {
            throw new Error(`Stereochemistry diagram index ${diagramIndex} out of range`);
        }

        const removed = this.stereochemistryDiagrams.splice(diagramIndex, 1);
        this.addToHistory(`Removed stereochemistry diagram: ${removed[0].title}`);
        return removed[0];
    }

    // Update stereochemistry diagram
    updateStereochemistryDiagram(diagramIndex, updates) {
        if (diagramIndex < 0 || diagramIndex >= this.stereochemistryDiagrams.length) {
            throw new Error(`Stereochemistry diagram index ${diagramIndex} out of range`);
        }

        const diagram = this.stereochemistryDiagrams[diagramIndex];
        
        if (updates.title) diagram.title = updates.title;
        if (updates.options) {
            diagram.options = { ...diagram.options, ...updates.options };
        }

        this.addToHistory(`Updated stereochemistry diagram: ${diagram.title}`);
        return diagram;
    }

    // Batch add stereochemistry diagrams by category
    addStereochemistryDiagramsByCategory(category, options = {}) {
        const diagrams = StereochemistryDiagramsRegistry.getDiagramsByCategory(category);
        const results = [];

        Object.keys(diagrams).forEach(key => {
            try {
                const result = this.addStereochemistryDiagram({
                    key,
                    options,
                    filename: `${this.sheetName}_${key}_${Date.now()}.png`
                });
                results.push(result);
            } catch (error) {
                results.push({ key, error: error.message });
            }
        });

        return results;
    }

    // Auto-detect and add stereochemistry diagrams from data
    addStereochemistryDiagramsFromData(options = {}) {
        const results = [];
        const foundFormulas = new Set();

        // Search through data for chemical formulas
        this.data.forEach(row => {
            Object.values(row).forEach(value => {
                if (typeof value === 'string') {
                    // Common chemical formula patterns
                    const formulaPattern = /\b([A-Z][a-z]?\d*)+\b/g;
                    const matches = value.match(formulaPattern);
                    
                    if (matches) {
                        matches.forEach(formula => {
                            const found = StereochemistryDiagramsRegistry.findByFormula(formula);
                            Object.keys(found).forEach(key => {
                                if (!foundFormulas.has(key)) {
                                    foundFormulas.add(key);
                                    try {
                                        const result = this.addStereochemistryDiagram({
                                            key,
                                            options,
                                            filename: `${this.sheetName}_${key}_${Date.now()}.png`
                                        });
                                        results.push({
                                            ...result,
                                            detectedIn: 'data',
                                            formula
                                        });
                                    } catch (error) {
                                        results.push({
                                            key,
                                            formula,
                                            error: error.message
                                        });
                                    }
                                }
                            });
                        });
                    }
                }
            });
        });

        return {
            results,
            totalAdded: results.filter(r => !r.error).length,
            formulas: Array.from(foundFormulas)
        };
    }

    // Export stereochemistry diagrams to a folder
    exportStereochemistryDiagramsToFolder(folderPath) {
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
        }

        const results = [];

        this.stereochemistryDiagrams.forEach((diagram, index) => {
            try {
                const originalFilename = diagram.filename;
                diagram.filename = `${folderPath}/${path.basename(diagram.filename)}`;
                
                const result = this.renderStereochemistryDiagramToPNG(index);
                results.push(result);
                
                // Restore original filename
                diagram.filename = originalFilename;
            } catch (error) {
                results.push({
                    index,
                    error: error.message
                });
            }
        });

        return {
            folder: folderPath,
            results,
            totalExported: results.filter(r => !r.error).length
        };
    }

    // Generate stereochemistry comparison report
    generateStereochemistryComparisonReport(formulas) {
        const report = {
            title: 'Molecular Structure Comparison',
            molecules: [],
            summary: {}
        };

        formulas.forEach(formula => {
            const found = this.findStereochemistryDiagramByFormula(formula);
            Object.entries(found).forEach(([key, diagram]) => {
                report.molecules.push({
                    key,
                    name: diagram.name,
                    formula: diagram.formula,
                    geometry: diagram.geometry,
                    bondAngles: diagram.bondAngles,
                    centralAtom: diagram.centralAtom,
                    category: diagram.category
                });
            });
        });

        // Generate summary
        const geometries = {};
        report.molecules.forEach(mol => {
            geometries[mol.geometry] = (geometries[mol.geometry] || 0) + 1;
        });

        report.summary = {
            totalMolecules: report.molecules.length,
            geometryDistribution: geometries,
            categories: [...new Set(report.molecules.map(m => m.category))]
        };

        return report;
    }

    // Get molecular geometry information
    getMolecularGeometryInfo(geometry) {
        const geometryInfo = {
            'tetrahedral': {
                bondAngles: [109.5],
                coordination: 4,
                description: 'Four atoms arranged at corners of a tetrahedron',
                examples: ['CH₄', 'CCl₄', 'NH₄⁺']
            },
            'bent': {
                bondAngles: [104.5, 120],
                coordination: 2,
                description: 'Two atoms with lone pairs causing bent shape',
                examples: ['H₂O', 'H₂S', 'SO₂']
            },
            'trigonal_pyramidal': {
                bondAngles: [107],
                coordination: 3,
                description: 'Three atoms with one lone pair forming pyramid',
                examples: ['NH₃', 'PH₃', 'H₃O⁺']
            },
            'trigonal_planar': {
                bondAngles: [120],
                coordination: 3,
                description: 'Three atoms in flat triangular arrangement',
                examples: ['BF₃', 'CO₃²⁻', 'C₂H₄']
            },
            'linear': {
                bondAngles: [180],
                coordination: 2,
                description: 'Two atoms in straight line',
                examples: ['CO₂', 'HCN', 'BeF₂']
            },
            'octahedral': {
                bondAngles: [90, 180],
                coordination: 6,
                description: 'Six atoms arranged at corners of octahedron',
                examples: ['SF₆', 'Fe(CN)₆³⁻', 'Co(NH₃)₆³⁺']
            }
        };

        return geometryInfo[geometry] || { error: 'Geometry not found' };
    }

    // Generate molecular properties table
    generateMolecularPropertiesTable() {
        const molecules = this.stereochemistryDiagrams;
        
        if (molecules.length === 0) {
            return { error: 'No stereochemistry diagrams in workbook' };
        }

        const table = {
            headers: ['Name', 'Formula', 'Geometry', 'Bond Angles', 'Central Atom', 'Category'],
            rows: []
        };

        molecules.forEach(mol => {
            const diagram = StereochemistryDiagramsRegistry.getDiagram(mol.key);
            if (diagram) {
                table.rows.push([
                    diagram.name,
                    diagram.formula,
                    diagram.geometry.replace(/_/g, ' '),
                    diagram.bondAngles.join(', ') + '°',
                    diagram.centralAtom || 'N/A',
                    diagram.category
                ]);
            }
        });

        return table;
    }

    // Export stereochemistry diagrams with metadata
    exportStereochemistryWithMetadata(folderPath) {
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
        }

        const results = [];
        const metadata = {
            exportDate: new Date().toISOString(),
            workbookName: this.sheetName,
            molecules: []
        };

        this.stereochemistryDiagrams.forEach((diagram, index) => {
            try {
                const originalFilename = diagram.filename;
                diagram.filename = `${folderPath}/${path.basename(diagram.filename)}`;
                
                const result = this.renderStereochemistryDiagramToPNG(index);
                results.push(result);
                
                // Add metadata
                const diagramInfo = StereochemistryDiagramsRegistry.getDiagram(diagram.key);
                metadata.molecules.push({
                    filename: path.basename(diagram.filename),
                    name: diagramInfo.name,
                    formula: diagramInfo.formula,
                    geometry: diagramInfo.geometry,
                    bondAngles: diagramInfo.bondAngles,
                    centralAtom: diagramInfo.centralAtom,
                    category: diagramInfo.category
                });
                
                diagram.filename = originalFilename;
            } catch (error) {
                results.push({
                    error: error.message,
                    diagram: diagram.key
                });
            }
        });

        // Write metadata JSON file
        const metadataPath = `${folderPath}/metadata.json`;
        fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));

        return {
            folder: folderPath,
            results,
            metadataFile: metadataPath,
            totalExported: results.filter(r => !r.error).length
        };
    }


  // ========================================================================
    // CROSS-SECTION DIAGRAM MANAGEMENT METHODS
    // ========================================================================

    // Get available cross-section diagrams
   // ========================================================================
    // CROSS-SECTION DIAGRAM MANAGEMENT METHODS
    // ========================================================================

    // Get available cross-section diagrams
    getAvailableCrossSectionDiagrams() {
        const diagrams = {};
        const categories = CrossSectionDiagramsRegistry.getAllCategories();

        categories.forEach(category => {
            diagrams[category] = CrossSectionDiagramsRegistry.getDiagramsByCategory(category);
        });

        return diagrams;
    }

    // Get cross-section diagram suggestions based on context
    suggestCrossSectionDiagrams(context = null) {
        const suggestions = [];

        // Check headers for relevant keywords
        const hasBotany = this.headers.some(h => 
            /plant|leaf|stem|root|seed|fruit|flower|botany/i.test(h)
        );
        
        const hasZoology = this.headers.some(h => 
            /animal|insect|fish|brain|intestine|gill|zoology/i.test(h)
        );
        
        const hasGeography = this.headers.some(h => 
            /earth|mountain|volcano|river|valley|soil|glacier|coast|geology|landform/i.test(h)
        );

        const hasAgriculture = this.headers.some(h => 
            /farm|crop|agriculture|irrigation|greenhouse|compost|pond|cultivat/i.test(h)
        );

        // Add suggestions based on context
        if (hasBotany) {
            suggestions.push(
                { key: 'dicotLeafCrossSection', priority: 10, reason: 'Plant anatomy data detected' },
                { key: 'dicotStemCrossSection', priority: 9, reason: 'Plant structure context' },
                { key: 'rootTipCrossSection', priority: 8, reason: 'Plant growth data' },
                { key: 'seedCrossSection', priority: 7, reason: 'Plant reproduction context' }
            );
        }

        if (hasZoology) {
            suggestions.push(
                { key: 'brainCrossSection', priority: 10, reason: 'Animal anatomy detected' },
                { key: 'smallIntestineCrossSection', priority: 9, reason: 'Digestive system context' },
                { key: 'fishGillsCrossSection', priority: 8, reason: 'Aquatic anatomy' },
                { key: 'insectThoraxCrossSection', priority: 7, reason: 'Invertebrate anatomy' }
            );
        }

        if (hasGeography) {
            suggestions.push(
                { key: 'earthCrossSection', priority: 10, reason: 'Geological data detected' },
                { key: 'volcanoCrossSection', priority: 9, reason: 'Volcanic/geological context' },
                { key: 'riverValleyCrossSection', priority: 8, reason: 'Landform data' },
                { key: 'soilProfileCrossSection', priority: 7, reason: 'Soil science context' }
            );
        }

        if (hasAgriculture) {
            suggestions.push(
                { key: 'greenhouseCrossSection', priority: 10, reason: 'Agricultural structure detected' },
                { key: 'soilProfileCrossSection', priority: 9, reason: 'Soil/cultivation data' },
                { key: 'terraceFarmCrossSection', priority: 8, reason: 'Farming systems context' },
                { key: 'fishPondCrossSection', priority: 7, reason: 'Aquaculture data' }
            );
        }

        // General suggestions if no specific context
        if (suggestions.length === 0) {
            suggestions.push(
                { key: 'dicotLeafCrossSection', priority: 7, reason: 'Popular biology diagram' },
                { key: 'earthCrossSection', priority: 6, reason: 'Earth science education' },
                { key: 'soilProfileCrossSection', priority: 5, reason: 'Environmental science' }
            );
        }

        return suggestions.sort((a, b) => b.priority - a.priority);
    }

    // Get cross-section diagram help
    getCrossSectionDiagramHelp(diagramKey) {
        const diagram = CrossSectionDiagramsRegistry.getDiagram(diagramKey);
        if (!diagram) {
            return { error: 'Cross-section diagram not found' };
        }

        return {
            name: diagram.name,
            category: diagram.category,
            description: diagram.description,
            usage: diagram.usage,
            examples: diagram.examples,
            dataRequired: diagram.dataRequired,
            defaultOptions: diagram.defaultOptions
        };
    }

    // Add cross-section diagram to workbook
    addCrossSectionDiagram(diagramConfig) {
        const {
            key,
            title = null,
            options = {},
            filename = null
        } = diagramConfig;

        // Validate diagram exists
        const diagram = CrossSectionDiagramsRegistry.getDiagram(key);
        if (!diagram) {
            throw new Error(`Cross-section diagram '${key}' not found`);
        }

        // Merge options
        const mergedOptions = { ...diagram.defaultOptions, ...options };
        if (title) mergedOptions.title = title;

        // Store diagram config
        const diagramObj = {
            id: `crosssection_${this.crossSectionDiagrams.length + 1}`,
            key,
            type: 'crossSection',
            title: mergedOptions.title,
            options: mergedOptions,
            filename: filename || `${this.sheetName}_${key}_${Date.now()}.png`,
            createdAt: new Date(),
            category: diagram.category
        };

        this.crossSectionDiagrams.push(diagramObj);
        this.addToHistory(`Added cross-section diagram: ${diagram.name}`);

        return diagramObj;
    }

    // Render cross-section diagram to PNG
    renderCrossSectionDiagramToPNG(diagramIndex) {
        if (diagramIndex < 0 || diagramIndex >= this.crossSectionDiagrams.length) {
            throw new Error(`Cross-section diagram index ${diagramIndex} out of range`);
        }

        const diagramConfig = this.crossSectionDiagrams[diagramIndex];
        
        const width = diagramConfig.options.width || 800;
        const height = diagramConfig.options.height || 600;
        const canvas = createCanvas(width, height);
        const ctx = canvas.getContext('2d');

        // Update renderer's canvas
        this.crossSectionRenderer.canvas = canvas;
        this.crossSectionRenderer.ctx = ctx;

        // Render the diagram
        this.crossSectionRenderer.renderDiagram(
            diagramConfig.key,
            50,
            80,
            width - 100,
            height - 100,
            diagramConfig.options
        );

        // Save to file
        const buffer = canvas.toBuffer('image/png');
        fs.writeFileSync(diagramConfig.filename, buffer);

        return {
            id: diagramConfig.id,
            filename: diagramConfig.filename,
            size: buffer.length,
            category: diagramConfig.category,
            type: 'crossSection'
        };
    }

    // Render all cross-section diagrams
    renderAllCrossSectionDiagrams() {
        const results = [];

        this.crossSectionDiagrams.forEach((_, index) => {
            try {
                const result = this.renderCrossSectionDiagramToPNG(index);
                results.push(result);
            } catch (error) {
                results.push({
                    error: error.message,
                    index
                });
            }
        });

        return results;
    }

    // Get cross-section diagram statistics
    getCrossSectionDiagramStatistics() {
        const stats = CrossSectionDiagramsRegistry.getDiagramStats();
        return {
            totalAvailable: Object.values(stats).reduce((sum, cat) => sum + cat.count, 0),
            byCategory: stats,
            diagramsInWorkbook: this.crossSectionDiagrams.length
        };
    }

    // Search cross-section diagrams
    searchCrossSectionDiagrams(query) {
        return CrossSectionDiagramsRegistry.searchDiagrams(query);
    }

    // List all cross-section diagrams in workbook
    listCrossSectionDiagrams() {
        return this.crossSectionDiagrams.map((diagram, index) => ({
            index,
            id: diagram.id,
            name: diagram.title,
            type: CrossSectionDiagramsRegistry.getDiagram(diagram.key).name,
            category: diagram.category,
            filename: diagram.filename,
            created: diagram.createdAt
        }));
    }

    // Remove cross-section diagram
    removeCrossSectionDiagram(diagramIndex) {
        if (diagramIndex < 0 || diagramIndex >= this.crossSectionDiagrams.length) {
            throw new Error(`Cross-section diagram index ${diagramIndex} out of range`);
        }

        const removed = this.crossSectionDiagrams.splice(diagramIndex, 1);
        this.addToHistory(`Removed cross-section diagram: ${removed[0].title}`);
        return removed[0];
    }

    // Update cross-section diagram
    updateCrossSectionDiagram(diagramIndex, updates) {
        if (diagramIndex < 0 || diagramIndex >= this.crossSectionDiagrams.length) {
            throw new Error(`Cross-section diagram index ${diagramIndex} out of range`);
        }

        const diagram = this.crossSectionDiagrams[diagramIndex];
        
        if (updates.title) diagram.title = updates.title;
        if (updates.options) {
            diagram.options = { ...diagram.options, ...updates.options };
        }

        this.addToHistory(`Updated cross-section diagram: ${diagram.title}`);
        return diagram;
    }

    // Batch add cross-section diagrams by category
    addCrossSectionDiagramsByCategory(category, options = {}) {
        const diagrams = CrossSectionDiagramsRegistry.getDiagramsByCategory(category);
        const results = [];

        Object.keys(diagrams).forEach(key => {
            try {
                const result = this.addCrossSectionDiagram({
                    key,
                    options,
                    filename: `${this.sheetName}_${key}_${Date.now()}.png`
                });
                results.push(result);
            } catch (error) {
                results.push({ key, error: error.message });
            }
        });

        return results;
    }

    // Export cross-section diagrams to a folder
    exportCrossSectionDiagramsToFolder(folderPath) {
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
        }

        const results = [];

        this.crossSectionDiagrams.forEach((diagram, index) => {
            try {
                const originalFilename = diagram.filename;
                diagram.filename = `${folderPath}/${path.basename(diagram.filename)}`;
                
                const result = this.renderCrossSectionDiagramToPNG(index);
                results.push(result);
                
                // Restore original filename
                diagram.filename = originalFilename;
            } catch (error) {
                results.push({
                    index,
                    error: error.message
                });
            }
        });

        return {
            folder: folderPath,
            results,
            totalExported: results.filter(r => !r.error).length
        };
    }



    // ========================================================================
    // CHART MANAGEMENT METHODS
    // ========================================================================

    // Get available charts
    getAvailableCharts() {
        const charts = {};
        const categories = ExcelChartsRegistry.getAllCategories();

        categories.forEach(category => {
            charts[category] = ExcelChartsRegistry.getChartsByCategory(category);
        });

        return charts;
    }

    // Get chart suggestions based on data
    suggestCharts(dataRange = null) {
        const suggestions = [];

        // Check data structure
        const hasNumericData = this.data.some(row =>
            row.some(cell => !isNaN(parseFloat(cell)))
        );

        const hasMultipleSeries = this.data.length > 3;
        const hasMultipleColumns = this.data[0]?.length > 2;

        // Basic suggestions
        if (hasNumericData) {
            suggestions.push({
                key: 'columnChart',
                priority: 10,
                reason: 'Great for comparing values across categories'
            });

            suggestions.push({
                key: 'pieChart',
                priority: 9,
                reason: 'Perfect for showing composition/parts of whole'
            });
        }

        if (hasMultipleSeries) {
            suggestions.push({
                key: 'lineChart',
                priority: 8,
                reason: 'Excellent for showing trends over time'
            });

            suggestions.push({
                key: 'areaChart',
                priority: 7,
                reason: 'Good for showing cumulative trends'
            });
        }

        if (hasMultipleColumns && this.data.length > 5) {
            suggestions.push({
                key: 'radarChart',
                priority: 7,
                reason: 'Great for comparing multiple attributes'
            });
        }

        return suggestions.sort((a, b) => b.priority - a.priority);
    }

    // Get chart help
    getChartHelp(chartKey) {
        const chart = ExcelChartsRegistry.getChart(chartKey);
        if (!chart) {
            return { error: 'Chart not found' };
        }

        return {
            name: chart.name,
            category: chart.category,
            description: chart.description,
            excel: chart.excel,
            usage: chart.usage,
            examples: chart.examples,
            dataRequired: chart.dataRequired,
            defaultOptions: chart.defaultOptions
        };
    }

    // Add chart to workbook
    addChart(chartConfig) {
        const {
            key,
            title = null,
            data,
            options = {},
            filename = null
        } = chartConfig;

        // Validate chart exists
        const chart = ExcelChartsRegistry.getChart(key);
        if (!chart) {
            throw new Error(`Chart '${key}' not found`);
        }

        // Validate data
        const validation = ExcelChartsRegistry.validateChartData(key, data);
        if (!validation.valid) {
            throw new Error(`Data validation failed: ${validation.errors.join(', ')}`);
        }

        // Merge options
        const mergedOptions = { ...chart.defaultOptions, ...options };
        if (title) mergedOptions.title = title;

        // Store chart config
        const chartObj = {
            id: `chart_${this.charts.length + 1}`,
            key,
            title: mergedOptions.title,
            data,
            options: mergedOptions,
            filename: filename || `${this.sheetName}_${key}_${Date.now()}.png`,
            createdAt: new Date()
        };

        this.charts.push(chartObj);
        this.addToHistory(`Added chart: ${chart.name}`);

        return chartObj;
    }

    // Render chart to PNG
    renderChartToPNG(chartIndex) {
        if (chartIndex < 0 || chartIndex >= this.charts.length) {
            throw new Error(`Chart index ${chartIndex} out of range`);
        }

        const chartConfig = this.charts[chartIndex];
        
        const canvas = createCanvas(chartConfig.options.width, chartConfig.options.height);
        const ctx = canvas.getContext('2d');

        // Render the chart
        this.chartRenderer.renderChart(canvas, ctx, chartConfig.key, chartConfig.data, chartConfig.options);

        // Save to file
        const buffer = canvas.toBuffer('image/png');
        fs.writeFileSync(chartConfig.filename, buffer);

        return {
            id: chartConfig.id,
            filename: chartConfig.filename,
            size: buffer.length
        };
    }

    // Render all charts
    renderAllCharts() {
        const results = [];

        this.charts.forEach((_, index) => {
            try {
                const result = this.renderChartToPNG(index);
                results.push(result);
            } catch (error) {
                results.push({
                    error: error.message,
                    index
                });
            }
        });

        return results;
    }

    // Get chart statistics
    getChartStatistics() {
        const stats = ExcelChartsRegistry.getChartStats();
        return {
            totalCharts: Object.values(stats).reduce((sum, cat) => sum + cat.count, 0),
            byCategory: stats,
            chartsInWorkbook: this.charts.length
        };
    }

    // Search charts
    searchCharts(query) {
        return ExcelChartsRegistry.searchCharts(query);
    }

    // List all charts in workbook
    listCharts() {
        return this.charts.map((chart, index) => ({
            index,
            id: chart.id,
            name: chart.title,
            type: ExcelChartsRegistry.getChart(chart.key).name,
            filename: chart.filename,
            created: chart.createdAt
        }));
    }

    // Remove chart
    removeChart(chartIndex) {
        if (chartIndex < 0 || chartIndex >= this.charts.length) {
            throw new Error(`Chart index ${chartIndex} out of range`);
        }

        const removed = this.charts.splice(chartIndex, 1);
        this.addToHistory(`Removed chart: ${removed[0].title}`);
        return removed[0];
    }

    // Update chart
    updateChart(chartIndex, updates) {
        if (chartIndex < 0 || chartIndex >= this.charts.length) {
            throw new Error(`Chart index ${chartIndex} out of range`);
        }

        const chart = this.charts[chartIndex];
        
        if (updates.title) chart.title = updates.title;
        if (updates.data) chart.data = updates.data;
        if (updates.options) {
            chart.options = { ...chart.options, ...updates.options };
        }

        this.addToHistory(`Updated chart: ${chart.title}`);
        return chart;
    }



       // ========================================================================
    // ANATOMICAL DIAGRAM MANAGEMENT METHODS
    // ========================================================================

    // Get available anatomical diagrams
    // ========================================================================
// ANATOMICAL DIAGRAM MANAGEMENT METHODS
// ========================================================================

// Get available anatomical diagrams
getAvailableAnatomicalDiagrams() {
    const diagrams = {};
    const categories = AnatomicalDiagramsRegistry.getAllCategories();
    
    categories.forEach(category => {
        diagrams[category] = AnatomicalDiagramsRegistry.getDiagramsByCategory(category);
    });
    
    return diagrams;
}

// Get diagram suggestions based on context
suggestAnatomicalDiagrams(context = null) {
    const suggestions = [];
    
    // Check headers for biological/anatomical keywords
    const hasCellBiology = this.headers.some(h => 
        /cell|organelle|mitosis|meiosis|membrane|nucleus/i.test(h)
    );
    
    const hasGenetics = this.headers.some(h => 
        /dna|rna|gene|chromosome|mutation|genetic/i.test(h)
    );
    
    const hasEvolution = this.headers.some(h => 
        /evolution|selection|adaptation|species|darwin/i.test(h)
    );
    
    const hasEcology = this.headers.some(h => 
        /ecosystem|food|energy|carbon|nitrogen|population/i.test(h)
    );
    
    const hasCardiovascular = this.headers.some(h => 
        /heart|blood|artery|vein|circulation|cardiac/i.test(h)
    );
    
    const hasRespiratory = this.headers.some(h => 
        /lung|breath|respiratory|oxygen|co2/i.test(h)
    );
    
    const hasDigestive = this.headers.some(h => 
        /stomach|intestine|digest|food|nutrition/i.test(h)
    );
    
    const hasNervous = this.headers.some(h => 
        /brain|nerve|neural|neuron|spine/i.test(h)
    );
    
    const hasSkeletal = this.headers.some(h => 
        /bone|skeleton|skull|spine|fracture/i.test(h)
    );
    
    const hasBotany = this.headers.some(h => 
        /plant|leaf|flower|root|photosynthesis|seed/i.test(h)
    );
    
    const hasMicrobiology = this.headers.some(h => 
        /bacteria|virus|microbe|pathogen|culture/i.test(h)
    );
    
    const hasBiotechnology = this.headers.some(h => 
        /genetic engineering|crispr|pcr|cloning|gmo/i.test(h)
    );
    
    const hasImmunology = this.headers.some(h => 
        /immune|antibody|antigen|vaccine|inflammation/i.test(h)
    );
    
    const hasEnergy = this.headers.some(h => 
        /atp|respiration|photosynthesis|mitochondria|chloroplast/i.test(h)
    );
    
    // Add suggestions based on context
    if (hasCellBiology) {
        suggestions.push(
            { key: 'animalCell', priority: 10, reason: 'Cell biology data detected' },
            { key: 'plantCell', priority: 9, reason: 'Plant cell context' },
            { key: 'cellMembrane', priority: 8, reason: 'Membrane biology context' },
            { key: 'mitosis', priority: 8, reason: 'Cell division context' }
        );
    }
    
    if (hasGenetics) {
        suggestions.push(
            { key: 'dnaStructure', priority: 10, reason: 'DNA/genetics data detected' },
            { key: 'transcription', priority: 9, reason: 'Gene expression context' },
            { key: 'translation', priority: 9, reason: 'Protein synthesis context' },
            { key: 'punnettSquare', priority: 8, reason: 'Inheritance patterns' }
        );
    }
    
    if (hasEvolution) {
        suggestions.push(
            { key: 'naturalSelection', priority: 10, reason: 'Evolution data detected' },
            { key: 'darwinsFinches', priority: 9, reason: 'Adaptation context' },
            { key: 'phylogeneticTree', priority: 8, reason: 'Evolutionary relationships' }
        );
    }
    
    if (hasEcology) {
        suggestions.push(
            { key: 'foodWeb', priority: 10, reason: 'Ecology data detected' },
            { key: 'energyPyramid', priority: 9, reason: 'Energy flow context' },
            { key: 'carbonCycle', priority: 8, reason: 'Biogeochemical cycles' }
        );
    }
    
    if (hasCardiovascular) {
        suggestions.push(
            { key: 'heartAnatomy', priority: 10, reason: 'Cardiovascular data detected' },
            { key: 'circulatorySystem', priority: 9, reason: 'Blood circulation context' },
            { key: 'bloodVesselComparison', priority: 7, reason: 'Vascular anatomy' }
        );
    }
    
    if (hasRespiratory) {
        suggestions.push(
            { key: 'respiratorySystem', priority: 10, reason: 'Respiratory data detected' }
        );
    }
    
    if (hasDigestive) {
        suggestions.push(
            { key: 'digestiveSystem', priority: 10, reason: 'Digestive system data detected' },
            { key: 'digestiveOrgans', priority: 8, reason: 'Organ anatomy context' }
        );
    }
    
    if (hasNervous) {
        suggestions.push(
            { key: 'nervousSystem', priority: 10, reason: 'Nervous system data detected' },
            { key: 'neuronStructure', priority: 9, reason: 'Neural anatomy context' },
            { key: 'synapse', priority: 8, reason: 'Synaptic transmission' }
        );
    }
    
    if (hasSkeletal) {
        suggestions.push(
            { key: 'skeletalSystem', priority: 10, reason: 'Skeletal data detected' },
            { key: 'boneStructure', priority: 8, reason: 'Bone anatomy context' }
        );
    }
    
    if (hasBotany) {
        suggestions.push(
            { key: 'photosynthesis', priority: 10, reason: 'Plant biology detected' },
            { key: 'leafCrossSection', priority: 9, reason: 'Plant anatomy context' },
            { key: 'flowerStructure', priority: 8, reason: 'Plant reproduction' }
        );
    }
    
    if (hasMicrobiology) {
        suggestions.push(
            { key: 'bacteriaStructure', priority: 10, reason: 'Microbiology data detected' },
            { key: 'virusStructure', priority: 9, reason: 'Viral biology context' },
            { key: 'viralReplication', priority: 8, reason: 'Viral life cycles' }
        );
    }
    
    if (hasBiotechnology) {
        suggestions.push(
            { key: 'crispr', priority: 10, reason: 'Biotechnology data detected' },
            { key: 'geneticEngineering', priority: 9, reason: 'Genetic modification context' },
            { key: 'pcrCycle', priority: 8, reason: 'Molecular techniques' }
        );
    }
    
    if (hasImmunology) {
        suggestions.push(
            { key: 'immuneResponse', priority: 10, reason: 'Immunology data detected' },
            { key: 'vaccination', priority: 9, reason: 'Immune defense context' },
            { key: 'antibodyStructure', priority: 8, reason: 'Antibody structure' }
        );
    }
    
    if (hasEnergy) {
        suggestions.push(
            { key: 'cellularRespiration', priority: 10, reason: 'Energy metabolism detected' },
            { key: 'atpStructure', priority: 9, reason: 'ATP context' },
            { key: 'electronTransportChain', priority: 8, reason: 'Energy production' }
        );
    }
    
    // General suggestions if no specific context
    if (suggestions.length === 0) {
        suggestions.push(
            { key: 'animalCell', priority: 7, reason: 'Fundamental biology' },
            { key: 'dnaStructure', priority: 6, reason: 'Core genetics concept' },
            { key: 'heartAnatomy', priority: 5, reason: 'Popular anatomy diagram' }
        );
    }
    
    return suggestions.sort((a, b) => b.priority - a.priority);
}

// Get diagram help
getAnatomicalDiagramHelp(diagramKey) {
    const diagram = AnatomicalDiagramsRegistry.getDiagram(diagramKey);
    if (!diagram) {
        return { error: 'Diagram not found' };
    }
    
    return {
        name: diagram.name,
        category: diagram.category,
        description: diagram.description,
        usage: diagram.usage,
        examples: diagram.examples,
        dataRequired: diagram.dataRequired,
        defaultOptions: diagram.defaultOptions,
        chamberOptions: diagram.chamberOptions || null,
        organelleTypes: diagram.organelleTypes || null,
        crossTypes: diagram.crossTypes || null
    };
}

// Add anatomical diagram to workbook
addAnatomicalDiagram(diagramConfig) {
    const {
        key,
        title = null,
        options = {},
        filename = null
    } = diagramConfig;
    
    // Validate diagram exists
    const diagram = AnatomicalDiagramsRegistry.getDiagram(key);
    if (!diagram) {
        throw new Error(`Anatomical diagram '${key}' not found`);
    }
    
    // Merge options
    const mergedOptions = { ...diagram.defaultOptions, ...options };
    if (title) mergedOptions.title = title;
    
    // Store diagram config
    const diagramObj = {
        id: `diagram_${this.anatomicalDiagrams.length + 1}`,
        key,
        title: mergedOptions.title,
        options: mergedOptions,
        filename: filename || `${this.sheetName}_${key}_${Date.now()}.png`,
        createdAt: new Date(),
        category: diagram.category
    };
    
    this.anatomicalDiagrams.push(diagramObj);
    this.addToHistory(`Added anatomical diagram: ${diagram.name}`);
    
    return diagramObj;
}

// Render anatomical diagram to PNG
renderAnatomicalDiagramToPNG(diagramIndex) {
    if (diagramIndex < 0 || diagramIndex >= this.anatomicalDiagrams.length) {
        throw new Error(`Diagram index ${diagramIndex} out of range`);
    }
    
    const diagramConfig = this.anatomicalDiagrams[diagramIndex];
    
    const width = diagramConfig.options.width || 800;
    const height = diagramConfig.options.height || 600;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');
    
    // Update renderer's canvas
    this.diagramRenderer.canvas = canvas;
    this.diagramRenderer.ctx = ctx;
    
    // Render the diagram
    this.diagramRenderer.renderDiagram(
        diagramConfig.key,
        0,
        0,
        width,
        height,
        diagramConfig.options
    );
    
    // Save to file
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(diagramConfig.filename, buffer);
    
    return {
        id: diagramConfig.id,
        filename: diagramConfig.filename,
        size: buffer.length,
        category: diagramConfig.category
    };
}

// Render all anatomical diagrams
renderAllAnatomicalDiagrams() {
    const results = [];
    
    this.anatomicalDiagrams.forEach((_, index) => {
        try {
            const result = this.renderAnatomicalDiagramToPNG(index);
            results.push(result);
        } catch (error) {
            results.push({
                error: error.message,
                index
            });
        }
    });
    
    return results;
}

// Get anatomical diagram statistics
getAnatomicalDiagramStatistics() {
    const stats = AnatomicalDiagramsRegistry.getDiagramStats();
    
    return {
        totalAvailable: AnatomicalDiagramsRegistry.getTotalDiagramCount(),
        byCategory: stats,
        diagramsInWorkbook: this.anatomicalDiagrams.length,
        workbookCategories: this.anatomicalDiagrams.reduce((acc, diagram) => {
            acc[diagram.category] = (acc[diagram.category] || 0) + 1;
            return acc;
        }, {})
    };
}

// Search anatomical diagrams
searchAnatomicalDiagrams(query) {
    return AnatomicalDiagramsRegistry.searchDiagrams(query);
}

// List all anatomical diagrams in workbook
listAnatomicalDiagrams() {
    return this.anatomicalDiagrams.map((diagram, index) => ({
        index,
        id: diagram.id,
        name: diagram.title,
        type: AnatomicalDiagramsRegistry.getDiagram(diagram.key).name,
        category: diagram.category,
        filename: diagram.filename,
        created: diagram.createdAt
    }));
}

// Remove anatomical diagram
removeAnatomicalDiagram(diagramIndex) {
    if (diagramIndex < 0 || diagramIndex >= this.anatomicalDiagrams.length) {
        throw new Error(`Diagram index ${diagramIndex} out of range`);
    }
    
    const removed = this.anatomicalDiagrams.splice(diagramIndex, 1);
    this.addToHistory(`Removed anatomical diagram: ${removed[0].title}`);
    return removed[0];
}

// Update anatomical diagram
updateAnatomicalDiagram(diagramIndex, updates) {
    if (diagramIndex < 0 || diagramIndex >= this.anatomicalDiagrams.length) {
        throw new Error(`Diagram index ${diagramIndex} out of range`);
    }
    
    const diagram = this.anatomicalDiagrams[diagramIndex];
    
    if (updates.title) diagram.title = updates.title;
    if (updates.options) {
        diagram.options = { ...diagram.options, ...updates.options };
    }
    
    this.addToHistory(`Updated anatomical diagram: ${diagram.title}`);
    return diagram;
}

// Generate anatomical diagram guide
generateAnatomicalDiagramGuide() {
    const guide = {
        title: 'Available Anatomical Diagrams',
        categories: {},
        totalDiagrams: 0,
        suggestions: []
    };
    
    const categories = AnatomicalDiagramsRegistry.getAllCategories();
    
    categories.forEach(category => {
        const diagrams = AnatomicalDiagramsRegistry.getDiagramsByCategory(category);
        guide.categories[category] = Object.entries(diagrams).map(([key, diagram]) => ({
            key,
            name: diagram.name,
            description: diagram.description,
            usage: diagram.usage,
            examples: diagram.examples
        }));
        guide.totalDiagrams += Object.keys(diagrams).length;
    });
    
    // Add suggestions based on workbook context
    guide.suggestions = this.suggestAnatomicalDiagrams();
    
    return guide;
}

// Batch add anatomical diagrams by category
addAnatomicalDiagramsByCategory(category, options = {}) {
    const diagrams = AnatomicalDiagramsRegistry.getDiagramsByCategory(category);
    const results = [];
    
    Object.keys(diagrams).forEach(key => {
        try {
            const result = this.addAnatomicalDiagram({
                key,
                options,
                filename: `${this.sheetName}_${key}_${Date.now()}.png`
            });
            results.push(result);
        } catch (error) {
            results.push({ key, error: error.message });
        }
    });
    
    return results;
}

// Batch add anatomical diagrams by topic
addAnatomicalDiagramsByTopic(topic, options = {}) {
    const diagramKeys = AnatomicalDiagramsRegistry.getDiagramsByTopic(topic);
    const results = [];
    
    diagramKeys.forEach(key => {
        try {
            const result = this.addAnatomicalDiagram({
                key,
                options,
                filename: `${this.sheetName}_${key}_${Date.now()}.png`
            });
            results.push(result);
        } catch (error) {
            results.push({ key, error: error.message });
        }
    });
    
    return results;
}

// Export anatomical diagrams to a folder
exportAnatomicalDiagramsToFolder(folderPath) {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }
    
    const results = [];
    
    this.anatomicalDiagrams.forEach((diagram, index) => {
        try {
            const originalFilename = diagram.filename;
            diagram.filename = `${folderPath}/${diagram.filename}`;
            
            const result = this.renderAnatomicalDiagramToPNG(index);
            results.push(result);
            
            // Restore original filename
            diagram.filename = originalFilename;
        } catch (error) {
            results.push({
                index,
                error: error.message
            });
        }
    });
    
    return {
        folder: folderPath,
        results,
        totalExported: results.filter(r => !r.error).length
    };
}

// Get diagrams by category from workbook
getDiagramsByCategory(category) {
    return this.anatomicalDiagrams.filter(diagram => diagram.category === category);
}

// Get all categories used in workbook
getWorkbookCategories() {
    const categories = new Set(this.anatomicalDiagrams.map(d => d.category));
    return Array.from(categories);
}

// Clear all anatomical diagrams
clearAnatomicalDiagrams() {
    const count = this.anatomicalDiagrams.length;
    this.anatomicalDiagrams = [];
    this.addToHistory(`Cleared all ${count} anatomical diagrams`);
    return count;
}


// Helper method to render specific anatomical diagram types
renderSpecificAnatomicalDiagram(key, options) {
    const x = 0;
    const y = 0;
    const width = options.width || 800;
    const height = options.height || 600;
    
    // Calculate center positions for diagrams that need them
    const centerX = width / 2;
    const centerY = height / 2 + 30; // Offset for title
    
    switch (key) {
        // ===== CELL BIOLOGY =====
        case 'animalCell':
            this.diagramRenderer.renderAnimalCellDiagram(x, y,width, height, options);
            break;
        case 'plantCell':
            this.diagramRenderer.renderPlantCellDiagram(x, y,width, height, options);
            break;
        case 'prokaryoticVsEukaryotic':
            this.diagramRenderer.renderProkaryoticVsEukaryoticDiagram(x, y,width, height , options);
            break;
        case 'cellMembrane':
            this.diagramRenderer.renderCellMembraneDiagram(x, y,width, height, options);
            break;
        case 'osmosisDiffusion':
            this.diagramRenderer.renderOsmosisDiffusionDiagram(x, y, width, height, options);
            break;
        case 'activePassiveTransport':
            this.diagramRenderer.renderActivePassiveTransportDiagram(x, y, width, height, options);
            break;
        case 'mitosis':
            this.diagramRenderer.renderMitosisDiagram(x, y, width, height, options);
            break;
        case 'meiosis':
            this.diagramRenderer.renderMeiosisDiagram(x, y, width, height, options);
            break;
        case 'organelles':
            this.diagramRenderer.renderOrganellesDiagram(x, y, width, height, options);
            break;
        case 'cellCycle':
            this.diagramRenderer.renderCellCycleDiagram(x, y, width, height, options);
            break;
        case 'enzymeAction':
            this.diagramRenderer.renderEnzymeActionDiagram(x, y, width, height, options);
            break;
            
        // ===== GENETICS & MOLECULAR BIOLOGY =====
        case 'dnaStructure':
            this.diagramRenderer.renderDNAStructureDiagram(centerX, centerY, width * 0.5, height * 0.7, options);
            break;
        case 'rnaStructure':
            this.diagramRenderer.renderRNAStructureDiagram(centerX, centerY, width * 0.6, height * 0.7, options);
            break;
        case 'dnaReplication':
            this.diagramRenderer.renderDNAReplicationDiagram(centerX, centerY, width * 0.5, height * 0.7, options);
            break;
        case 'transcription':
            this.diagramRenderer.renderTranscriptionDiagram(centerX, centerY, width * 0.8, height * 0.6, options);
            break;
        case 'translation':
            this.diagramRenderer.renderTranslationDiagram(centerX, centerY, width * 0.8, height * 0.6, options);
            break;
        case 'codonChart':
            this.diagramRenderer.renderCodonChartDiagram(centerX, centerY, Math.min(width, height) * 0.6, options);
            break;
        case 'geneExpression':
            this.diagramRenderer.renderGeneExpressionDiagram(centerX, centerY, width * 0.8, height * 0.7, options);
            break;
        case 'punnettSquare':
            this.diagramRenderer.renderPunnettSquareDiagram(centerX, centerY, Math.min(width, height) * 0.5, options);
            break;
        case 'chromosomes':
            this.diagramRenderer.renderChromosomesDiagram(centerX, centerY, width * 0.8, height * 0.6, options);
            break;
        case 'crossingOver':
            this.diagramRenderer.renderCrossingOverDiagram(centerX, centerY, width * 0.8, height * 0.6, options);
            break;
        case 'mutations':
            this.diagramRenderer.renderMutationsDiagram(centerX, centerY, width * 0.85, height * 0.6, options);
            break;
        case 'recombinantDNA':
            this.diagramRenderer.renderRecombinantDNADiagram(centerX, centerY, width * 0.8, height * 0.7, options);
            break;
        case 'pcrCycle':
            this.diagramRenderer.renderPCRCycleDiagram(centerX, centerY, width * 0.8, height * 0.7, options);
            break;
            
        // ===== EVOLUTION & NATURAL SELECTION =====
        case 'darwinsFinches':
            this.diagramRenderer.renderDarwinsFinchesDiagram(centerX, centerY, width * 0.85, height * 0.6, options);
            break;
        case 'naturalSelection':
            this.diagramRenderer.renderNaturalSelectionDiagram(centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'phylogeneticTree':
            this.diagramRenderer.renderPhylogeneticTreeDiagram(centerX, centerY, width * 0.8, height * 0.7, options);
            break;
        case 'adaptiveRadiation':
            this.diagramRenderer.renderAdaptiveRadiationDiagram(centerX, centerY, width * 0.8, height * 0.7, options);
            break;
        case 'fossilLayers':
            this.diagramRenderer.renderFossilLayersDiagram(centerX, centerY, width * 0.6, height * 0.8, options);
            break;
        case 'hardyWeinberg':
            this.diagramRenderer.renderHardyWeinbergDiagram(centerX, centerY, width * 0.8, height * 0.6, options);
            break;
        case 'speciation':
            this.diagramRenderer.renderSpeciationDiagram(centerX, centerY, width * 0.85, height * 0.6, options);
            break;
        case 'comparativeAnatomy':
            this.diagramRenderer.renderComparativeAnatomyDiagram(centerX, centerY, width * 0.85, height * 0.6, options);
            break;
            
        // ===== ECOLOGY =====
        case 'foodChain':
            this.diagramRenderer.renderFoodChainDiagram(centerX, centerY, width * 0.5, height * 0.7, options);
            break;
        case 'foodWeb':
            this.diagramRenderer.renderFoodWebDiagram(centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'energyPyramid':
            this.diagramRenderer.renderEnergyPyramidDiagram(centerX, centerY, width * 0.6, height * 0.6, options);
            break;
        case 'carbonCycle':
            this.diagramRenderer.renderCarbonCycleDiagram(centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'nitrogenCycle':
            this.diagramRenderer.renderNitrogenCycleDiagram(centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'waterCycle':
            this.diagramRenderer.renderWaterCycleDiagram(centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'populationGrowth':
            this.diagramRenderer.renderPopulationGrowthDiagram(centerX, centerY, width * 0.8, height * 0.6, options);
            break;
        case 'ecosystem':
            this.diagramRenderer.renderEcosystemDiagram(centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'biomes':
            this.diagramRenderer.renderBiomesDiagram(centerX, centerY, width * 0.9, height * 0.6, options);
            break;
        case 'predatorPrey':
            this.diagramRenderer.renderPredatorPreyDiagram(centerX, centerY, width * 0.8, height * 0.6, options);
            break;
            
        // ===== HUMAN ANATOMY & PHYSIOLOGY =====
        case 'skeletalSystem':
            this.diagramRenderer.renderSkeletalSystemDiagram(centerX, centerY, width * 0.5, height * 0.85, options);
            break;
        case 'muscularSystem':
            this.diagramRenderer.renderMuscularSystemDiagram(centerX, centerY, width * 0.5, height * 0.85, options);
            break;
        case 'digestiveSystem':
            this.diagramRenderer.renderCompleteDigestiveSystemDiagram(centerX, centerY, width * 0.5, height * 0.8, options);
            break;
        case 'respiratorySystem':
            this.diagramRenderer.renderRespiratorySystemDiagram(x, y, width, height, options);
            break;
        case 'circulatorySystem':
            this.diagramRenderer.renderCirculatorySystemDiagram(centerX, centerY, width * 0.5, height * 0.7, options);
            break;
        case 'excretorySystem':
        case 'urinarySystem':
            this.diagramRenderer.renderUrinarySystemDiagram(centerX, centerY, width * 0.5, height * 0.7, options);
            break;
        case 'nervousSystem':
            this.diagramRenderer.renderCompleteNervousSystemDiagram(centerX, centerY, width * 0.5, height * 0.8, options);
            break;
        case 'neuronStructure':
            this.diagramRenderer.renderNeuronDiagram(centerX, centerY, width * 0.5, height * 0.7, options);
            break;
        case 'synapse':
            this.diagramRenderer.renderSynapseDiagram(centerX, centerY, width * 0.8, height * 0.6, options);
            break;
        case 'endocrineSystem':
            this.diagramRenderer.renderEndocrineSystemDiagram(centerX, centerY, width * 0.5, height * 0.8, options);
            break;
        case 'reproductiveSystem':
            this.diagramRenderer.renderReproductiveSystemDiagram(centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'immuneSystem':
            this.diagramRenderer.renderImmuneSystemDiagram(centerX, centerY, width * 0.6, height * 0.8, options);
            break;
        case 'skinStructure':
            this.diagramRenderer.renderSkinDiagram(centerX, centerY, width * 0.8, height * 0.6, options);
            break;
            
        // ===== PLANTS (BOTANY) =====
        case 'leafCrossSection':
            this.diagramRenderer.renderLeafCrossSectionDiagram(centerX, centerY, width * 0.8, height * 0.6, options);
            break;
        case 'photosynthesis':
            this.diagramRenderer.renderPhotosynthesisDiagram(centerX, centerY, width * 0.7, height * 0.6, options);
            break;
        case 'stomata':
            this.diagramRenderer.renderStomataDiagram(centerX, centerY, width * 0.8, height * 0.6, options);
            break;
        case 'xylemPhloem':
            this.diagramRenderer.renderXylemPhloemDiagram(centerX, centerY, width * 0.8, height * 0.7, options);
            break;
        case 'flowerStructure':
            this.diagramRenderer.renderFlowerStructureDiagram(centerX, centerY, Math.min(width, height) * 0.6, options);
            break;
        case 'seedGermination':
            this.diagramRenderer.renderSeedGerminationDiagram(centerX, centerY, width * 0.85, height * 0.6, options);
            break;
        case 'tropisms':
            this.diagramRenderer.renderTropismsDiagram(centerX, centerY, width * 0.85, height * 0.6, options);
            break;
            
        // ===== MICROBIOLOGY =====
        case 'bacteriaStructure':
            this.diagramRenderer.renderBacterialCellDiagram(centerX, centerY, width * 0.6, height * 0.6, options);
            break;
        case 'virusStructure':
            this.diagramRenderer.renderVirusStructureDiagram(centerX, centerY, Math.min(width, height) * 0.6, options);
            break;
        case 'fungalCell':
            this.diagramRenderer.renderFungalCellDiagram(centerX, centerY, width * 0.8, height * 0.6, options);
            break;
        case 'protists':
            this.diagramRenderer.renderProtistsDiagram(centerX, centerY, width * 0.85, height * 0.6, options);
            break;
        case 'bacterialGrowthCurve':
            this.diagramRenderer.renderBacterialGrowthCurveDiagram(centerX, centerY, width * 0.8, height * 0.6, options);
            break;
        case 'viralReplication':
            this.diagramRenderer.renderViralReplicationDiagram(centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'microscopy':
            this.diagramRenderer.renderMicroscopyDiagram(centerX, centerY, width * 0.85, height * 0.6, options);
            break;
            
        // ===== BIOTECHNOLOGY =====
        case 'geneticEngineering':
            this.diagramRenderer.renderGeneticEngineeringDiagram(centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'gelElectrophoresis':
            this.diagramRenderer.renderGelElectrophoresisDiagram(centerX, centerY, width * 0.8, height * 0.6, options);
            break;
        case 'cloning':
            this.diagramRenderer.renderCloningProcessDiagram(centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'crispr':
            this.diagramRenderer.renderCRISPRDiagram(centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'bioreactor':
            this.diagramRenderer.renderBioreactorDiagram(centerX, centerY, width * 0.6, height * 0.8, options);
            break;
        case 'gmoProduction':
            this.diagramRenderer.renderGMOProductionDiagram(centerX, centerY, width * 0.85, height * 0.7, options);
            break;
            
        // ===== REPRODUCTION & DEVELOPMENT =====
        case 'fertilization':
            this.diagramRenderer.renderFertilizationDiagram(centerX, centerY, width * 0.8, height * 0.7, options);
            break;
        case 'embryoDevelopment':
            this.diagramRenderer.renderEmbryoDevelopmentDiagram(centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'menstrualCycle':
            this.diagramRenderer.renderMenstrualCycleDiagram(centerX, centerY, width * 0.85, height * 0.6, options);
            break;
        case 'gametogenesis':
            this.diagramRenderer.renderGametogenesisDiagram(centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'placenta':
            this.diagramRenderer.renderPlacentaDiagram(centerX, centerY, width * 0.8, height * 0.7, options);
            break;
            
        // ===== HEALTH, DISEASE & IMMUNOLOGY =====
        case 'immuneResponse':
            this.diagramRenderer.renderImmuneResponseDiagram(centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'antibodyStructure':
            this.diagramRenderer.renderAntibodyStructureDiagram(centerX, centerY, Math.min(width, height) * 0.6, options);
            break;
        case 'pathogenTypes':
            this.diagramRenderer.renderPathogenTypesDiagram(centerX, centerY, width * 0.85, height * 0.6, options);
            break;
        case 'vaccination':
            this.diagramRenderer.renderVaccinationDiagram(centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'inflammation':
            this.diagramRenderer.renderInflammationDiagram(centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'diseaseTransmission':
            this.diagramRenderer.renderDiseaseTransmissionDiagram(centerX, centerY, width * 0.8, height * 0.7, options);
            break;
        case 'bloodCells':
            this.diagramRenderer.renderBloodCellsDiagram(centerX, centerY, width * 0.8, height * 0.6, options);
            break;
            
        // ===== CLASSIFICATION & TAXONOMY =====
        case 'fiveKingdoms':
            this.diagramRenderer.renderFiveKingdomsDiagram(centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'threeDomains':
            this.diagramRenderer.renderThreeDomainsDiagram(centerX, centerY, width * 0.8, height * 0.7, options);
            break;
        case 'taxonomyHierarchy':
            this.diagramRenderer.renderTaxonomyHierarchyDiagram(centerX, centerY, width * 0.6, height * 0.8, options);
            break;
        case 'dichotomousKey':
            this.diagramRenderer.renderDichotomousKeyDiagram(centerX, centerY, width * 0.8, height * 0.7, options);
            break;
        case 'cladogram':
            this.diagramRenderer.renderCladogramDiagram(centerX, centerY, width * 0.8, height * 0.6, options);
            break;
            
        // ===== HOMEOSTASIS & REGULATION =====
        case 'negativeFeedback':
            this.diagramRenderer.renderNegativeFeedbackDiagram(centerX, centerY, Math.min(width, height) * 0.6, options);
            break;
        case 'thermoregulation':
            this.diagramRenderer.renderThermoregulationDiagram(centerX, centerY, width * 0.85, height * 0.6, options);
            break;
        case 'bloodGlucoseRegulation':
            this.diagramRenderer.renderBloodGlucoseRegulationDiagram(centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'waterBalance':
            this.diagramRenderer.renderWaterBalanceDiagram(centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'nephron':
            this.diagramRenderer.renderNephronDiagram(centerX, centerY, width * 0.6, height * 0.8, options);
            break;
            
        // ===== ENERGY IN LIVING SYSTEMS =====
        case 'atpStructure':
            this.diagramRenderer.renderATPStructureDiagram(centerX, centerY, width * 0.8, height * 0.6, options);
            break;
        case 'cellularRespiration':
            this.diagramRenderer.renderCellularRespirationDiagram(centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'mitochondrion':
            this.diagramRenderer.renderMitochondrionDiagram(centerX, centerY, width * 0.7, height * 0.6, options);
            break;
        case 'electronTransportChain':
            this.diagramRenderer.renderElectronTransportChainDiagram(centerX, centerY, width * 0.85, height * 0.6, options);
            break;
        case 'chloroplastStructure':
            this.diagramRenderer.renderChloroplastStructureDiagram(centerX, centerY, width * 0.7, height * 0.6, options);
            break;
        case 'photosynthesisDetailed':
            this.diagramRenderer.renderPhotosynthesisDetailedDiagram(centerX, centerY, width * 0.85, height * 0.7, options);
            break;
            
        // ===== DNA TECHNOLOGY & FORENSICS =====
        case 'dnaFingerprinting':
            this.diagramRenderer.renderDNAFingerprintingDiagram(centerX, centerY, width * 0.8, height * 0.6, options);
            break;
        case 'gelElectrophoresisForensic':
            this.diagramRenderer.renderGelElectrophoresisForensicDiagram(centerX, centerY, width * 0.8, height * 0.6, options);
            break;
        case 'strAnalysis':
            this.diagramRenderer.renderSTRAnalysisDiagram(centerX, centerY, width * 0.85, height * 0.6, options);
            break;
        case 'forensicComparison':
            this.diagramRenderer.renderForensicDNAComparisonDiagram(centerX, centerY, width * 0.85, height * 0.7, options);
            break;
            
        // ===== EXISTING CARDIOVASCULAR, ETC. (Legacy support) =====
        case 'heartAnatomy':
            this.diagramRenderer.renderHeartAnatomyDiagram(x, y, width, height, options);
            break;
        case 'bloodVesselComparison':
            this.diagramRenderer.renderBloodVesselComparison(centerX, centerY, width * 0.7, height * 0.4, options);
            break;
        case 'heartValves':
            this.diagramRenderer.renderHeartValvesDiagram(centerX, centerY, width * 0.8, height * 0.5, options);
            break;
        case 'digestiveOrgans':
            this.diagramRenderer.renderDigestiveOrganComparison(centerX, centerY, width * 0.8, height * 0.6, options);
            break;
        case 'brain':
            this.diagramRenderer.renderBrainDiagram(centerX, centerY, width * 0.5, height * 0.7, options);
            break;
        case 'liver':
            this.diagramRenderer.renderLiverDiagram(centerX, centerY, width * 0.6, height * 0.6, options);
            break;
        case 'kidney':
            this.diagramRenderer.renderKidneyDiagram(centerX, centerY, width * 0.5, height * 0.7, options);
            break;
        case 'kidneyDetail':
            this.diagramRenderer.renderKidneyDetailDiagram(centerX, centerY, width * 0.7, height * 0.7, options);
            break;
        case 'eyeAnatomy':
            this.diagramRenderer.renderEyeDiagram(centerX, centerY, width * 0.7, height * 0.6, options);
            break;
        case 'skull':
            this.diagramRenderer.renderSkullDiagram(centerX, centerY, width * 0.4, height * 0.6, options);
            break;
        case 'femur':
            this.diagramRenderer.renderFemurDiagram(centerX, centerY, width * 0.3, height * 0.7, options);
            break;
        case 'ribcage':
            this.diagramRenderer.renderRibcageDiagram(centerX, centerY, width * 0.5, height * 0.7, options);
            break;
        case 'spine':
            this.diagramRenderer.renderSpineDiagram(centerX, centerY, width * 0.3, height * 0.8, options);
            break;
        case 'boneStructure':
            this.diagramRenderer.renderBoneStructureDiagram(centerX, centerY, width * 0.7, height * 0.6, options);
            break;
        case 'skeletalMuscle':
            this.diagramRenderer.renderSkeletalMuscleDiagram(centerX, centerY, width * 0.5, height * 0.7, options);
            break;
        case 'muscleContraction':
            this.diagramRenderer.renderMuscleContractionDiagram(centerX, centerY, width * 0.8, height * 0.6, options);
            break;
        case 'cellStructure':
            this.diagramRenderer.renderCellDiagram(centerX, centerY, Math.min(width, height) * 0.7, options);
            break;
            
        default:
            throw new Error(`Rendering for anatomical diagram '${key}' not implemented`);
    }
}

// Keep the old method name for backward compatibility
renderSpecificDiagram(key, options) {
    return this.renderSpecificAnatomicalDiagram(key, options);
}



// ========================================================================
// CHEMISTRY DIAGRAM MANAGEMENT METHODS
// ========================================================================

// Get available chemistry diagrams
getAvailableChemistryDiagrams() {
    const diagrams = {};
    const categories = ChemistryDiagramsRegistry.getAllCategories();
    
    categories.forEach(category => {
        diagrams[category] = ChemistryDiagramsRegistry.getDiagramsByCategory(category);
    });
    
    return diagrams;
}

// Get chemistry diagram suggestions based on context
suggestChemistryDiagrams(context = null) {
    const suggestions = [];
    
    // Check headers for chemistry keywords
    const hasAtomicStructure = this.headers.some(h => 
        /atom|electron|proton|neutron|orbital|shell|bohr/i.test(h)
    );
    
    const hasBonding = this.headers.some(h => 
        /bond|lewis|vsepr|molecular|geometry|polar|covalent|ionic/i.test(h)
    );
    
    const hasOrganic = this.headers.some(h => 
        /organic|hydrocarbon|functional|isomer|carbon|alkane|alkene/i.test(h)
    );
    
    const hasStates = this.headers.some(h => 
        /solid|liquid|gas|phase|particle|state|matter/i.test(h)
    );
    
    const hasReactions = this.headers.some(h => 
        /reaction|energy|activation|catalyst|collision|enthalpy/i.test(h)
    );
    
    const hasSolutions = this.headers.some(h => 
        /acid|base|ph|titration|solution|solubility|concentration/i.test(h)
    );
    
    const hasElectrochemistry = this.headers.some(h => 
        /electrode|cell|galvanic|electrolytic|oxidation|reduction|redox/i.test(h)
    );
    
    const hasThermochemistry = this.headers.some(h => 
        /enthalpy|entropy|gibbs|thermodynamic|heat|temperature|phase/i.test(h)
    );
    
    const hasKinetics = this.headers.some(h => 
        /rate|kinetic|maxwell|boltzmann|speed|velocity|collision/i.test(h)
    );
    
    const hasEquilibrium = this.headers.some(h => 
        /equilibrium|le chatelier|kc|kp|ice table|reversible/i.test(h)
    );
    
    const hasNuclear = this.headers.some(h => 
        /nuclear|radioactive|decay|alpha|beta|gamma|fission|fusion|isotope/i.test(h)
    );
    
    const hasLab = this.headers.some(h => 
        /lab|laboratory|apparatus|equipment|distillation|filtration|titration/i.test(h)
    );
    
    const hasStoichiometry = this.headers.some(h => 
        /mole|stoichiometry|limiting|reagent|yield|molarity|mass|avogadro/i.test(h)
    );
    
    // Add suggestions based on context
    if (hasAtomicStructure) {
        suggestions.push(
            { key: 'bohrModelCarbon', priority: 10, reason: 'Atomic structure data detected' },
            { key: 'electronConfiguration', priority: 9, reason: 'Electron configuration context' },
            { key: 'orbitalShapes', priority: 8, reason: 'Orbital theory' },
            { key: 'periodicTrends', priority: 7, reason: 'Periodic properties' }
        );
    }
    
    if (hasBonding) {
        suggestions.push(
            { key: 'lewisStructureWater', priority: 10, reason: 'Chemical bonding detected' },
            { key: 'vsepGeometry', priority: 9, reason: 'Molecular geometry context' },
            { key: 'polarBonds', priority: 8, reason: 'Bond polarity' },
            { key: 'hybridization', priority: 7, reason: 'Hybridization theory' }
        );
    }
    
    if (hasOrganic) {
        suggestions.push(
            { key: 'functionalGroups', priority: 10, reason: 'Organic chemistry detected' },
            { key: 'organicStructuralFormula', priority: 9, reason: 'Structural formulas' },
            { key: 'reactionMechanism', priority: 8, reason: 'Organic mechanisms' },
            { key: 'isomers', priority: 7, reason: 'Isomerism' }
        );
    }
    
    if (hasStates) {
        suggestions.push(
            { key: 'particleStates', priority: 10, reason: 'States of matter detected' },
            { key: 'heatingCurve', priority: 9, reason: 'Phase changes' },
            { key: 'intermolecularForces', priority: 8, reason: 'IMF context' },
            { key: 'diffusion', priority: 7, reason: 'Particle motion' }
        );
    }
    
    if (hasReactions) {
        suggestions.push(
            { key: 'energyProfile', priority: 10, reason: 'Reaction energy detected' },
            { key: 'catalystEffect', priority: 9, reason: 'Catalysis context' },
            { key: 'collisionTheory', priority: 8, reason: 'Reaction mechanisms' },
            { key: 'enthalpyChange', priority: 7, reason: 'Energy changes' }
        );
    }
    
    if (hasSolutions) {
        suggestions.push(
            { key: 'phScale', priority: 10, reason: 'Acid-base chemistry detected' },
            { key: 'titrationCurve', priority: 9, reason: 'Titration context' },
            { key: 'dissociationDiagram', priority: 8, reason: 'Ionic solutions' },
            { key: 'solubilityCurve', priority: 7, reason: 'Solubility' }
        );
    }
    
    if (hasElectrochemistry) {
        suggestions.push(
            { key: 'galvanicCell', priority: 10, reason: 'Electrochemistry detected' },
            { key: 'electrolyticCell', priority: 9, reason: 'Electrolysis context' },
            { key: 'electrochemicalSeries', priority: 8, reason: 'Electrode potentials' },
            { key: 'electrodeProcesses', priority: 7, reason: 'Redox reactions' }
        );
    }
    
    if (hasThermochemistry) {
        suggestions.push(
            { key: 'phaseDiagram', priority: 10, reason: 'Thermochemistry detected' },
            { key: 'hessLawCycle', priority: 9, reason: "Hess's law context" },
            { key: 'enthalpyLevelDiagram', priority: 8, reason: 'Energy levels' },
            { key: 'calorimeter', priority: 7, reason: 'Calorimetry' }
        );
    }
    
    if (hasKinetics) {
        suggestions.push(
            { key: 'maxwellBoltzmann', priority: 10, reason: 'Kinetics data detected' },
            { key: 'concentrationVsRate', priority: 9, reason: 'Rate laws' },
            { key: 'temperatureVsRate', priority: 8, reason: 'Temperature effects' },
            { key: 'surfaceAreaEffect', priority: 7, reason: 'Surface area factors' }
        );
    }
    
    if (hasEquilibrium) {
        suggestions.push(
            { key: 'concentrationVsTime', priority: 10, reason: 'Equilibrium detected' },
            { key: 'leChatelierShift', priority: 9, reason: "Le Chatelier's principle" },
            { key: 'iceTable', priority: 8, reason: 'ICE calculations' },
            { key: 'equilibriumGraph', priority: 7, reason: 'Equilibrium position' }
        );
    }
    
    if (hasNuclear) {
        suggestions.push(
            { key: 'alphaDecay', priority: 10, reason: 'Nuclear chemistry detected' },
            { key: 'nuclearFission', priority: 9, reason: 'Nuclear reactions' },
            { key: 'radioactiveDecayCurve', priority: 8, reason: 'Radioactive decay' },
            { key: 'halfLifeGraph', priority: 7, reason: 'Half-life calculations' }
        );
    }
    
    if (hasLab) {
        suggestions.push(
            { key: 'distillationApparatus', priority: 10, reason: 'Laboratory work detected' },
            { key: 'titrationSetup', priority: 9, reason: 'Lab techniques' },
            { key: 'filtrationSetup', priority: 8, reason: 'Separation methods' },
            { key: 'laboratoryGlassware', priority: 7, reason: 'Lab equipment' }
        );
    }
    
    if (hasStoichiometry) {
        suggestions.push(
            { key: 'moleTriangle', priority: 10, reason: 'Stoichiometry detected' },
            { key: 'limitingReagent', priority: 9, reason: 'Limiting reagent problems' },
            { key: 'molarity', priority: 8, reason: 'Solution calculations' },
            { key: 'stoichiometryRoadmap', priority: 7, reason: 'Problem-solving guide' }
        );
    }
    
    // General chemistry suggestions if no specific context
    if (suggestions.length === 0) {
        suggestions.push(
            { key: 'bohrModelCarbon', priority: 7, reason: 'Fundamental atomic structure' },
            { key: 'lewisStructureWater', priority: 6, reason: 'Basic bonding concept' },
            { key: 'particleStates', priority: 5, reason: 'States of matter basics' }
        );
    }
    
    return suggestions.sort((a, b) => b.priority - a.priority);
}

// Get chemistry diagram help
getChemistryDiagramHelp(diagramKey) {
    const diagram = ChemistryDiagramsRegistry.getDiagram(diagramKey);
    if (!diagram) {
        return { error: 'Chemistry diagram not found' };
    }
    
    return {
        name: diagram.name,
        formula: diagram.formula || null,
        category: diagram.category,
        description: diagram.description,
        type: diagram.type,
        defaultOptions: diagram.defaultOptions,
        analogies: ChemistryDiagramsRegistry.getAnalogies(diagramKey)
    };
}

// Add chemistry diagram to workbook
addChemistryDiagram(diagramConfig) {
    const {
        key,
        title = null,
        options = {},
        filename = null
    } = diagramConfig;
    
    // Validate diagram exists
    const diagram = ChemistryDiagramsRegistry.getDiagram(key);
    if (!diagram) {
        throw new Error(`Chemistry diagram '${key}' not found`);
    }
    
    // Merge options
    const mergedOptions = { ...diagram.defaultOptions, ...options };
    if (title) mergedOptions.title = title;
    
    // Store diagram config
    const diagramObj = {
        id: `chem_diagram_${this.chemistryDiagrams.length + 1}`,
        key,
        title: mergedOptions.title,
        options: mergedOptions,
        filename: filename || `${this.sheetName}_${key}_${Date.now()}.png`,
        createdAt: new Date(),
        category: diagram.category,
        formula: diagram.formula || null,
        type: diagram.type
    };
    
    this.chemistryDiagrams.push(diagramObj);
    this.addToHistory(`Added chemistry diagram: ${diagram.name}`);
    
    return diagramObj;
}

// Render chemistry diagram to PNG


// Render all chemistry diagrams
renderAllChemistryDiagrams() {
    const results = [];
    
    this.chemistryDiagrams.forEach((_, index) => {
        try {
            const result = this.renderChemistryDiagramToPNG(index);
            results.push(result);
        } catch (error) {
            results.push({
                error: error.message,
                index
            });
        }
    });
    
    return results;
}

// Get chemistry diagram statistics
getChemistryDiagramStatistics() {
    const stats = ChemistryDiagramsRegistry.getDiagramStats();
    
    return {
        totalAvailable: Object.values(stats).reduce((sum, cat) => sum + cat.count, 0),
        byCategory: stats,
        diagramsInWorkbook: this.chemistryDiagrams.length,
        workbookCategories: this.chemistryDiagrams.reduce((acc, diagram) => {
            acc[diagram.category] = (acc[diagram.category] || 0) + 1;
            return acc;
        }, {}),
        byType: this.chemistryDiagrams.reduce((acc, diagram) => {
            acc[diagram.type] = (acc[diagram.type] || 0) + 1;
            return acc;
        }, {})
    };
}

// Search chemistry diagrams
searchChemistryDiagrams(query) {
    return ChemistryDiagramsRegistry.searchDiagrams(query);
}

// List all chemistry diagrams in workbook
listChemistryDiagrams() {
    return this.chemistryDiagrams.map((diagram, index) => ({
        index,
        id: diagram.id,
        name: diagram.title,
        type: ChemistryDiagramsRegistry.getDiagram(diagram.key).name,
        category: diagram.category,
        formula: diagram.formula,
        filename: diagram.filename,
        created: diagram.createdAt
    }));
}

// Remove chemistry diagram
removeChemistryDiagram(diagramIndex) {
    if (diagramIndex < 0 || diagramIndex >= this.chemistryDiagrams.length) {
        throw new Error(`Chemistry diagram index ${diagramIndex} out of range`);
    }
    
    const removed = this.chemistryDiagrams.splice(diagramIndex, 1);
    this.addToHistory(`Removed chemistry diagram: ${removed[0].title}`);
    return removed[0];
}

// Update chemistry diagram
updateChemistryDiagram(diagramIndex, updates) {
    if (diagramIndex < 0 || diagramIndex >= this.chemistryDiagrams.length) {
        throw new Error(`Chemistry diagram index ${diagramIndex} out of range`);
    }
    
    const diagram = this.chemistryDiagrams[diagramIndex];
    
    if (updates.title) diagram.title = updates.title;
    if (updates.options) {
        diagram.options = { ...diagram.options, ...updates.options };
    }
    
    this.addToHistory(`Updated chemistry diagram: ${diagram.title}`);
    return diagram;
}

// Generate chemistry diagram guide
generateChemistryDiagramGuide() {
    const guide = {
        title: 'Available Chemistry Diagrams',
        categories: {},
        totalDiagrams: 0,
        suggestions: []
    };
    
    const categories = ChemistryDiagramsRegistry.getAllCategories();
    
    categories.forEach(category => {
        const diagrams = ChemistryDiagramsRegistry.getDiagramsByCategory(category);
        guide.categories[category] = {
            description: ChemistryDiagramsRegistry.getCategoryDescription(category),
            diagrams: Object.entries(diagrams).map(([key, diagram]) => ({
                key,
                name: diagram.name,
                formula: diagram.formula || null,
                description: diagram.description,
                type: diagram.type
            }))
        };
        guide.totalDiagrams += Object.keys(diagrams).length;
    });
    
    // Add suggestions based on workbook context
    guide.suggestions = this.suggestChemistryDiagrams();
    
    return guide;
}

// Batch add chemistry diagrams by category
addChemistryDiagramsByCategory(category, options = {}) {
    const diagrams = ChemistryDiagramsRegistry.getDiagramsByCategory(category);
    const results = [];
    
    Object.keys(diagrams).forEach(key => {
        try {
            const result = this.addChemistryDiagram({
                key,
                options,
                filename: `${this.sheetName}_${key}_${Date.now()}.png`
            });
            results.push(result);
        } catch (error) {
            results.push({ key, error: error.message });
        }
    });
    
    return results;
}

// Batch add chemistry diagrams by type
addChemistryDiagramsByType(type, options = {}) {
    const diagrams = ChemistryDiagramsRegistry.getDiagramsByType(type);
    const results = [];
    
    Object.keys(diagrams).forEach(key => {
        try {
            const result = this.addChemistryDiagram({
                key,
                options,
                filename: `${this.sheetName}_${key}_${Date.now()}.png`
            });
            results.push(result);
        } catch (error) {
            results.push({ key, error: error.message });
        }
    });
    
    return results;
}

// Export chemistry diagrams to a folder
exportChemistryDiagramsToFolder(folderPath) {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }
    
    const results = [];
    
    this.chemistryDiagrams.forEach((diagram, index) => {
        try {
            const originalFilename = diagram.filename;
            diagram.filename = `${folderPath}/${diagram.filename}`;
            
            const result = this.renderChemistryDiagramToPNG(index);
            results.push(result);
            
            // Restore original filename
            diagram.filename = originalFilename;
        } catch (error) {
            results.push({
                index,
                error: error.message
            });
        }
    });
    
    return {
        folder: folderPath,
        results,
        totalExported: results.filter(r => !r.error).length
    };
}

// Get chemistry diagrams by category from workbook
getChemistryDiagramsByCategory(category) {
    return this.chemistryDiagrams.filter(diagram => diagram.category === category);
}

// Get chemistry diagrams by type from workbook
getChemistryDiagramsByType(type) {
    return this.chemistryDiagrams.filter(diagram => diagram.type === type);
}

// Get all categories used in workbook for chemistry
getWorkbookChemistryCategories() {
    const categories = new Set(this.chemistryDiagrams.map(d => d.category));
    return Array.from(categories);
}

// Clear all chemistry diagrams
clearChemistryDiagrams() {
    const count = this.chemistryDiagrams.length;
    this.chemistryDiagrams = [];
    this.addToHistory(`Cleared all ${count} chemistry diagrams`);
    return count;
}

// Get diagrams by formula
getChemistryDiagramsByFormula(formula) {
    return this.chemistryDiagrams.filter(diagram => 
        diagram.formula && diagram.formula.toLowerCase().includes(formula.toLowerCase())
    );
}



// Helper method to render specific chemistry diagram types
renderSpecificChemistryDiagram(key, options) {
    const x = 0;
    const y = 0;
    const width = options.width || 800;
    const height = options.height || 600;
    
    // Calculate center positions for diagrams that need them
    const centerX = width / 2;
    const centerY = height / 2 + 30; // Offset for title
    
    const diagram = ChemistryDiagramsRegistry.getDiagram(key);
    if (!diagram) {
        throw new Error(`Chemistry diagram '${key}' not found`);
    }
    
    switch (diagram.type) {
        // ===== ATOMIC STRUCTURE =====
        case 'bohr_model':
            this.chemistryDiagramRenderer.renderBohrModel(diagram, centerX, centerY, Math.min(width, height) * 0.4, options);
            break;
        case 'nuclear_structure':
            this.chemistryDiagramRenderer.renderNuclearStructure(diagram, centerX, centerY, Math.min(width, height) * 0.35, options);
            break;
        case 'orbital_shapes':
            this.chemistryDiagramRenderer.renderOrbitalShapes(diagram, centerX, centerY, width * 0.8, height * 0.7, options);
            break;
        case 'electron_configuration':
            this.chemistryDiagramRenderer.renderElectronConfiguration(diagram, centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'periodic_trends':
            this.chemistryDiagramRenderer.renderPeriodicTrends(diagram, centerX, centerY, width * 0.9, height * 0.75, options);
            break;
            
        // ===== CHEMICAL BONDING =====
        case 'lewis_structure':
            this.chemistryDiagramRenderer.renderLewisStructure(diagram, centerX, centerY, width * 0.6, options);
            break;
        case 'vsepr_geometry':
            this.chemistryDiagramRenderer.renderVSEPRGeometry(diagram, centerX, centerY, Math.min(width, height) * 0.4, options);
            break;
        case 'polar_bonds':
            this.chemistryDiagramRenderer.renderPolarBonds(diagram, centerX, centerY, width * 0.7, options);
            break;
        case 'hybridization':
            this.chemistryDiagramRenderer.renderHybridization(diagram, centerX, centerY, width * 0.8, height * 0.7, options);
            break;
        case 'sigma_pi_bonds':
            this.chemistryDiagramRenderer.renderSigmaPiBonds(diagram, centerX, centerY, width * 0.7, options);
            break;
        case 'resonance':
            this.chemistryDiagramRenderer.renderResonance(diagram, 50, centerY, width * 0.9, options);
            break;
            
        // ===== ORGANIC CHEMISTRY =====
        case 'structural_formula':
        case 'skeletal_formula':
            this.chemistryDiagramRenderer.renderOrganicFormula(diagram, centerX, centerY, width * 0.7, options);
            break;
        case 'reaction_mechanism':
            this.chemistryDiagramRenderer.renderReactionMechanism(diagram, 50, centerY, width * 0.9, options);
            break;
        case 'functional_groups':
            this.chemistryDiagramRenderer.renderFunctionalGroups(diagram, 50, 80, width * 0.95, height * 0.85, options);
            break;
        case 'isomers':
            this.chemistryDiagramRenderer.renderIsomers(diagram, 50, centerY, width * 0.9, options);
            break;
        case 'polymerization':
            this.chemistryDiagramRenderer.renderPolymerization(diagram, 50, centerY, width * 0.9, options);
            break;
        case 'aromatic':
            this.chemistryDiagramRenderer.renderAromatic(diagram, centerX, centerY, width * 0.5, options);
            break;
            
        // ===== STATES OF MATTER =====
        case 'particle_states':
            this.chemistryDiagramRenderer.renderParticleStates(diagram, 50, centerY, width * 0.9, height * 0.6, options);
            break;
        case 'diffusion':
        case 'brownian_motion':
            this.chemistryDiagramRenderer.renderParticleMotion(diagram, centerX, centerY, width * 0.8, height * 0.7, options);
            break;
        case 'heating_curve':
        case 'cooling_curve':
            this.chemistryDiagramRenderer.renderHeatingCoolingCurve(diagram, centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'intermolecular_forces':
            this.chemistryDiagramRenderer.renderIntermolecularForces(diagram, 50, 80, width * 0.9, height * 0.8, options);
            break;
            
        // ===== REACTIONS & ENERGY =====
        case 'energy_profile':
        case 'catalyst_effect':
            this.chemistryDiagramRenderer.renderEnergyProfile(diagram, centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'collision_theory':
            this.chemistryDiagramRenderer.renderCollisionTheory(diagram, centerX, centerY, width * 0.8, height * 0.7, options);
            break;
        case 'enthalpy_change':
        case 'enthalpy_levels':
            this.chemistryDiagramRenderer.renderEnthalpyDiagram(diagram, centerX, centerY, width * 0.7, height * 0.7, options);
            break;
            
        // ===== SOLUTIONS & ACIDS =====
        case 'dissociation':
            this.chemistryDiagramRenderer.renderDissociation(diagram, centerX, centerY, width * 0.8, options);
            break;
        case 'ion_hydration':
            this.chemistryDiagramRenderer.renderIonHydration(diagram, centerX, centerY, width * 0.6, options);
            break;
        case 'ph_scale':
            this.chemistryDiagramRenderer.renderPHScale(diagram, centerX, centerY, width * 0.9, height * 0.4, options);
            break;
        case 'titration_curve':
            this.chemistryDiagramRenderer.renderTitrationCurve(diagram, centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'solubility_curve':
            this.chemistryDiagramRenderer.renderSolubilityCurve(diagram, centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'indicator_chart':
            this.chemistryDiagramRenderer.renderIndicatorChart(diagram, 50, 80, width * 0.9, height * 0.75, options);
            break;
            
        // ===== ELECTROCHEMISTRY =====
        case 'galvanic_cell':
        case 'electrolytic_cell':
            this.chemistryDiagramRenderer.renderElectrochemicalCell(diagram, centerX, centerY, width * 0.85, height * 0.75, options);
            break;
        case 'electrode_processes':
            this.chemistryDiagramRenderer.renderElectrodeProcesses(diagram, centerX, centerY, width * 0.8, height * 0.7, options);
            break;
        case 'electrochemical_series':
            this.chemistryDiagramRenderer.renderElectrochemicalSeries(diagram, centerX, centerY, width * 0.7, height * 0.8, options);
            break;
            
        // ===== THERMOCHEMISTRY =====
        case 'phase_diagram':
            this.chemistryDiagramRenderer.renderPhaseDiagram(diagram, centerX, centerY, width * 0.85, height * 0.75, options);
            break;
        case 'hess_cycle':
            this.chemistryDiagramRenderer.renderHessCycle(diagram, centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'calorimeter':
            this.chemistryDiagramRenderer.renderCalorimeter(diagram, centerX, centerY, width * 0.5, height * 0.7, options);
            break;
        case 'energy_bar_chart':
            this.chemistryDiagramRenderer.renderEnergyBarChart(diagram, centerX, centerY, width * 0.8, height * 0.7, options);
            break;
            
        // ===== KINETICS =====
        case 'maxwell_boltzmann':
        case 'catalyst_curve':
            this.chemistryDiagramRenderer.renderMaxwellBoltzmann(diagram, centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'concentration_rate':
        case 'temperature_rate':
            this.chemistryDiagramRenderer.renderRateGraph(diagram, centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'surface_area':
            this.chemistryDiagramRenderer.renderSurfaceAreaEffect(diagram, centerX, centerY, width * 0.85, height * 0.6, options);
            break;
            
        // ===== EQUILIBRIUM =====
        case 'equilibrium_time':
        case 'equilibrium_graph':
            this.chemistryDiagramRenderer.renderEquilibriumGraph(diagram, centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'le_chatelier':
            this.chemistryDiagramRenderer.renderLeChatelierShift(diagram, centerX, centerY, width * 0.8, height * 0.7, options);
            break;
        case 'ice_table':
            this.chemistryDiagramRenderer.renderICETable(diagram, centerX, centerY, width * 0.85, height * 0.5, options);
            break;
            
        // ===== NUCLEAR CHEMISTRY =====
        case 'nuclear_decay':
            this.chemistryDiagramRenderer.renderNuclearDecay(diagram, centerX, centerY, width * 0.8, height * 0.7, options);
            break;
        case 'fission':
        case 'fusion':
            this.chemistryDiagramRenderer.renderNuclearReaction(diagram, centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'chain_reaction':
            this.chemistryDiagramRenderer.renderChainReaction(diagram, centerX, centerY, width * 0.9, height * 0.8, options);
            break;
        case 'decay_curve':
        case 'half_life':
            this.chemistryDiagramRenderer.renderDecayCurve(diagram, centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'penetration':
            this.chemistryDiagramRenderer.renderPenetrationPower(diagram, centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'binding_energy':
            this.chemistryDiagramRenderer.renderBindingEnergyCurve(diagram, centerX, centerY, width * 0.85, height * 0.7, options);
            break;
            
        // ===== LABORATORY =====
        case 'lab_apparatus':
            this.chemistryDiagramRenderer.renderLabApparatus(diagram, centerX, centerY, width * 0.6, height * 0.75, options);
            break;
        case 'hazard_symbols':
            this.chemistryDiagramRenderer.renderHazardSymbols(diagram, 50, 80, width * 0.9, height * 0.8, options);
            break;
        case 'glassware_collection':
            this.chemistryDiagramRenderer.renderGlasswareCollection(diagram, 50, 80, width * 0.95, height * 0.8, options);
            break;
        case 'safety_equipment':
            this.chemistryDiagramRenderer.renderSafetyEquipment(diagram, 50, 80, width * 0.95, height * 0.8, options);
            break;
            
        // ===== STOICHIOMETRY =====
        case 'mole_triangle':
        case 'gas_triangle':
        case 'particle_triangle':
            this.chemistryDiagramRenderer.renderStoichiometryTriangle(diagram, centerX, centerY, Math.min(width, height) * 0.5, options);
            break;
        case 'conversion_map':
            this.chemistryDiagramRenderer.renderConversionMap(diagram, centerX, centerY, width * 0.85, height * 0.75, options);
            break;
        case 'stoichiometric_ratio':
            this.chemistryDiagramRenderer.renderStoichiometricRatio(diagram, centerX, centerY, width * 0.85, height * 0.6, options);
            break;
        case 'limiting_reagent':
            this.chemistryDiagramRenderer.renderLimitingReagent(diagram, centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'limiting_bar':
            this.chemistryDiagramRenderer.renderLimitingBar(diagram, centerX, centerY, width * 0.8, height * 0.6, options);
            break;
        case 'yield_diagram':
            this.chemistryDiagramRenderer.renderYieldDiagram(diagram, centerX, centerY, width * 0.7, height * 0.6, options);
            break;
        case 'empirical_formula':
            this.chemistryDiagramRenderer.renderEmpiricalFormula(diagram, centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'composition_pie':
            this.chemistryDiagramRenderer.renderCompositionPie(diagram, centerX, centerY, Math.min(width, height) * 0.6, options);
            break;
        case 'molarity':
            this.chemistryDiagramRenderer.renderMolarity(diagram, centerX, centerY, width * 0.5, height * 0.7, options);
            break;
        case 'dilution':
            this.chemistryDiagramRenderer.renderDilution(diagram, centerX, centerY, width * 0.85, height * 0.6, options);
            break;
        case 'gas_laws':
            this.chemistryDiagramRenderer.renderGasLaws(diagram, centerX, centerY, width * 0.8, height * 0.7, options);
            break;
        case 'titration_stoichiometry':
            this.chemistryDiagramRenderer.renderTitrationStoichiometry(diagram, centerX, centerY, width * 0.85, height * 0.8, options);
            break;
        case 'avogadro':
            this.chemistryDiagramRenderer.renderAvogadroNumber(diagram, centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'molar_mass':
            this.chemistryDiagramRenderer.renderMolarMass(diagram, centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'stoichiometry_roadmap':
            this.chemistryDiagramRenderer.renderStoichiometryRoadmap(diagram, 50, 80, width * 0.9, height * 0.75, options);
            break;
        case 'balancing_equations':
            this.chemistryDiagramRenderer.renderBalancingEquations(diagram, centerX, centerY, width * 0.85, height * 0.7, options);
            break;
            
        default:
            throw new Error(`Rendering for chemistry diagram type '${diagram.type}' not implemented`);
    }
}

// Render chemistry diagram to PNG
renderChemistryDiagramToPNG(diagramIndex) {
    if (diagramIndex < 0 || diagramIndex >= this.chemistryDiagrams.length) {
        throw new Error(`Chemistry diagram index ${diagramIndex} out of range`);
    }
    
    const diagramConfig = this.chemistryDiagrams[diagramIndex];
    
    const width = diagramConfig.options.width || 800;
    const height = diagramConfig.options.height || 600;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');
    
    // Update renderer's canvas
    this.chemistryDiagramRenderer.canvas = canvas;
    this.chemistryDiagramRenderer.ctx = ctx;
    
    // Render the specific chemistry diagram
    this.renderSpecificChemistryDiagram(diagramConfig.key, diagramConfig.options);
    
    // Save to file
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(diagramConfig.filename, buffer);
    
    return {
        id: diagramConfig.id,
        filename: diagramConfig.filename,
        size: buffer.length,
        category: diagramConfig.category,
        formula: diagramConfig.formula
    };
}



// ========================================================================
// PHYSICS DIAGRAM MANAGEMENT METHODS
// ========================================================================

// Get available physics diagrams
getAvailablePhysicsDiagrams() {
    const diagrams = {};
    const categories = PhysicsDiagramsRegistry.getAllCategories();
    
    categories.forEach(category => {
        diagrams[category] = PhysicsDiagramsRegistry.getDiagramsByCategory(category);
    });
    
    return diagrams;
}

// Get physics diagram suggestions based on context
suggestPhysicsDiagrams(context = null) {
    const suggestions = [];
    
    // Check headers for physics keywords
    const hasMechanics = this.headers.some(h => 
        /force|motion|velocity|acceleration|momentum|energy|work|torque|mass/i.test(h)
    );
    
    const hasWaves = this.headers.some(h => 
        /wave|frequency|wavelength|amplitude|sound|interference|diffraction/i.test(h)
    );
    
    const hasThermodynamics = this.headers.some(h => 
        /heat|temperature|thermal|entropy|phase|gas law|pressure|volume/i.test(h)
    );
    
    const hasElectricity = this.headers.some(h => 
        /electric|current|voltage|resistance|circuit|charge|capacitor|field/i.test(h)
    );
    
    const hasMagnetism = this.headers.some(h => 
        /magnetic|magnet|induction|flux|transformer|coil/i.test(h)
    );
    
    const hasOptics = this.headers.some(h => 
        /light|lens|mirror|refraction|reflection|optic|ray|image/i.test(h)
    );
    
    const hasModernPhysics = this.headers.some(h => 
        /quantum|photon|photoelectric|spectrum|blackbody|electron|wave function/i.test(h)
    );
    
    const hasRelativity = this.headers.some(h => 
        /relativity|spacetime|time dilation|length contraction|einstein|lorentz/i.test(h)
    );
    
    const hasNuclear = this.headers.some(h => 
        /nuclear|radioactive|decay|fission|fusion|isotope|half.?life|radiation/i.test(h)
    );
    
    const hasParticlePhysics = this.headers.some(h => 
        /particle|quark|lepton|boson|standard model|feynman|accelerator/i.test(h)
    );
    
    // Add suggestions based on context
    if (hasMechanics) {
        suggestions.push(
            { key: 'freeBodyDiagram', priority: 10, reason: 'Mechanics/forces detected' },
            { key: 'motionGraphs', priority: 9, reason: 'Kinematics context' },
            { key: 'vectorDiagram', priority: 8, reason: 'Vector analysis' },
            { key: 'projectileMotion', priority: 7, reason: 'Motion trajectories' }
        );
    }
    
    if (hasWaves) {
        suggestions.push(
            { key: 'transverseLongitudinalWaves', priority: 10, reason: 'Wave physics detected' },
            { key: 'waveInterference', priority: 9, reason: 'Interference patterns' },
            { key: 'standingWaves', priority: 8, reason: 'Wave harmonics' },
            { key: 'dopplerEffect', priority: 7, reason: 'Wave phenomena' }
        );
    }
    
    if (hasThermodynamics) {
        suggestions.push(
            { key: 'pvDiagram', priority: 10, reason: 'Thermodynamics detected' },
            { key: 'heatingCurvePhysics', priority: 9, reason: 'Phase transitions' },
            { key: 'phaseDiagramPhysics', priority: 8, reason: 'Phase diagrams' },
            { key: 'kineticTheoryParticles', priority: 7, reason: 'Gas theory' }
        );
    }
    
    if (hasElectricity) {
        suggestions.push(
            { key: 'circuitDiagram', priority: 10, reason: 'Electricity detected' },
            { key: 'seriesParallelCircuits', priority: 9, reason: 'Circuit analysis' },
            { key: 'electricFieldLines', priority: 8, reason: 'Electric fields' },
            { key: 'potentialDistanceGraph', priority: 7, reason: 'Electric potential' }
        );
    }
    
    if (hasMagnetism) {
        suggestions.push(
            { key: 'magneticFieldLines', priority: 10, reason: 'Magnetism detected' },
            { key: 'electromagneticInduction', priority: 9, reason: 'EM induction' },
            { key: 'transformer', priority: 8, reason: 'Transformers' },
            { key: 'lorentzForce', priority: 7, reason: 'Magnetic forces' }
        );
    }
    
    if (hasOptics) {
        suggestions.push(
            { key: 'convexLensRayDiagram', priority: 10, reason: 'Optics detected' },
            { key: 'concaveMirrorRayDiagram', priority: 9, reason: 'Mirror optics' },
            { key: 'snellsLawRefraction', priority: 8, reason: 'Refraction' },
            { key: 'prismDispersion', priority: 7, reason: 'Light dispersion' }
        );
    }
    
    if (hasModernPhysics) {
        suggestions.push(
            { key: 'photoelectricEffect', priority: 10, reason: 'Quantum physics detected' },
            { key: 'lineEmissionSpectra', priority: 9, reason: 'Atomic spectra' },
            { key: 'blackbodyRadiation', priority: 8, reason: 'Radiation curves' },
            { key: 'quantumTunneling', priority: 7, reason: 'Quantum mechanics' }
        );
    }
    
    if (hasRelativity) {
        suggestions.push(
            { key: 'spacetimeDiagram', priority: 10, reason: 'Relativity detected' },
            { key: 'timeDilation', priority: 9, reason: 'Special relativity' },
            { key: 'lengthContraction', priority: 8, reason: 'Relativistic effects' },
            { key: 'curvedSpacetime', priority: 7, reason: 'General relativity' }
        );
    }
    
    if (hasNuclear) {
        suggestions.push(
            { key: 'alphaDecayDiagram', priority: 10, reason: 'Nuclear physics detected' },
            { key: 'nuclearFissionDiagram', priority: 9, reason: 'Nuclear reactions' },
            { key: 'halfLifeGraph', priority: 8, reason: 'Radioactive decay' },
            { key: 'bindingEnergyCurve', priority: 7, reason: 'Nuclear energy' }
        );
    }
    
    if (hasParticlePhysics) {
        suggestions.push(
            { key: 'standardModelChart', priority: 10, reason: 'Particle physics detected' },
            { key: 'feynmanDiagram', priority: 9, reason: 'Particle interactions' },
            { key: 'quarkStructure', priority: 8, reason: 'Quark composition' },
            { key: 'particleAccelerator', priority: 7, reason: 'Accelerator physics' }
        );
    }
    
    // General physics suggestions if no specific context
    if (suggestions.length === 0) {
        suggestions.push(
            { key: 'freeBodyDiagram', priority: 7, reason: 'Fundamental mechanics' },
            { key: 'motionGraphs', priority: 6, reason: 'Basic kinematics' },
            { key: 'circuitDiagram', priority: 5, reason: 'Basic electricity' }
        );
    }
    
    return suggestions.sort((a, b) => b.priority - a.priority);
}

// Get physics diagram help
getPhysicsDiagramHelp(diagramKey) {
    const diagram = PhysicsDiagramsRegistry.getDiagram(diagramKey);
    if (!diagram) {
        return { error: 'Physics diagram not found' };
    }
    
    return {
        name: diagram.name,
        category: diagram.category,
        description: diagram.description,
        type: diagram.type,
        defaultOptions: diagram.defaultOptions,
        analogies: PhysicsDiagramsRegistry.getAnalogies(diagramKey)
    };
}

// Add physics diagram to workbook
addPhysicsDiagram(diagramConfig) {
    const {
        key,
        title = null,
        options = {},
        filename = null
    } = diagramConfig;
    
    // Validate diagram exists
    const diagram = PhysicsDiagramsRegistry.getDiagram(key);
    if (!diagram) {
        throw new Error(`Physics diagram '${key}' not found`);
    }
    
    // Merge options
    const mergedOptions = { ...diagram.defaultOptions, ...options };
    if (title) mergedOptions.title = title;
    
    // Store diagram config
    const diagramObj = {
        id: `phys_diagram_${this.physicsDiagrams.length + 1}`,
        key,
        title: mergedOptions.title,
        options: mergedOptions,
        filename: filename || `${this.sheetName}_${key}_${Date.now()}.png`,
        createdAt: new Date(),
        category: diagram.category,
        type: diagram.type
    };
    
    this.physicsDiagrams.push(diagramObj);
    this.addToHistory(`Added physics diagram: ${diagram.name}`);
    
    return diagramObj;
}

// Render physics diagram to PNG
renderPhysicsDiagramToPNG(diagramIndex) {
    if (diagramIndex < 0 || diagramIndex >= this.physicsDiagrams.length) {
        throw new Error(`Physics diagram index ${diagramIndex} out of range`);
    }
    
    const diagramConfig = this.physicsDiagrams[diagramIndex];
    
    const width = diagramConfig.options.width || 800;
    const height = diagramConfig.options.height || 600;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');
    
    // Update renderer's canvas
    this.physicsDiagramRenderer.canvas = canvas;
    this.physicsDiagramRenderer.ctx = ctx;
    
    // Render the specific physics diagram
    this.renderSpecificPhysicsDiagram(diagramConfig.key, diagramConfig.options);
    
    // Save to file
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(diagramConfig.filename, buffer);
    
    return {
        id: diagramConfig.id,
        filename: diagramConfig.filename,
        size: buffer.length,
        category: diagramConfig.category
    };
}

// Helper method to render specific physics diagram types
renderSpecificPhysicsDiagram(key, options) {
    const x = 0;
    const y = 0;
    const width = options.width || 800;
    const height = options.height || 600;
    
    // Calculate center positions for diagrams that need them
    const centerX = width / 2;
    const centerY = height / 2 + 30; // Offset for title
    
    const diagram = PhysicsDiagramsRegistry.getDiagram(key);
    if (!diagram) {
        throw new Error(`Physics diagram '${key}' not found`);
    }
    
    switch (diagram.type) {
        // ===== MECHANICS =====
        case 'free_body_diagram':
            this.physicsDiagramRenderer.renderFreeBodyDiagram(diagram, centerX, centerY, Math.min(width, height) * 0.4, options);
            break;
        case 'vector_diagram':
            this.physicsDiagramRenderer.renderVectorDiagram(diagram, centerX, centerY, Math.min(width, height) * 0.6, options);
            break;
        case 'motion_graphs':
            this.physicsDiagramRenderer.renderMotionGraphs(diagram, centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'projectile_motion':
            this.physicsDiagramRenderer.renderProjectileMotion(diagram, centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'inclined_plane':
            this.physicsDiagramRenderer.renderInclinedPlane(diagram, centerX, centerY, width * 0.7, height * 0.6, options);
            break;
        case 'momentum_collision':
            this.physicsDiagramRenderer.renderMomentumCollision(diagram, centerX, centerY, width * 0.85, height * 0.6, options);
            break;
        case 'circular_motion':
            this.physicsDiagramRenderer.renderCircularMotion(diagram, centerX, centerY, Math.min(width, height) * 0.5, options);
            break;
        case 'work_energy_chart':
            this.physicsDiagramRenderer.renderWorkEnergyChart(diagram, centerX, centerY, width * 0.8, height * 0.7, options);
            break;
        case 'spring_harmonic':
            this.physicsDiagramRenderer.renderSpringHarmonic(diagram, centerX, centerY, width * 0.7, height * 0.7, options);
            break;
        case 'torque_lever':
            this.physicsDiagramRenderer.renderTorqueLever(diagram, centerX, centerY, width * 0.85, height * 0.6, options);
            break;
            
        // ===== WAVES & SOUND =====
        case 'wave_types':
            this.physicsDiagramRenderer.renderWaveTypes(diagram, centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'wavefront':
            this.physicsDiagramRenderer.renderWavefront(diagram, centerX, centerY, Math.min(width, height) * 0.6, options);
            break;
        case 'reflection_refraction':
            this.physicsDiagramRenderer.renderReflectionRefraction(diagram, centerX, centerY, width * 0.7, height * 0.7, options);
            break;
        case 'wave_interference':
            this.physicsDiagramRenderer.renderWaveInterference(diagram, centerX, centerY, width * 0.8, height * 0.7, options);
            break;
        case 'standing_waves':
            this.physicsDiagramRenderer.renderStandingWaves(diagram, centerX, centerY, width * 0.85, height * 0.6, options);
            break;
        case 'doppler_effect':
            this.physicsDiagramRenderer.renderDopplerEffect(diagram, centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'sound_pressure':
            this.physicsDiagramRenderer.renderSoundPressure(diagram, centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'diffraction':
            this.physicsDiagramRenderer.renderDiffraction(diagram, centerX, centerY, width * 0.85, height * 0.7, options);
            break;
            
        // ===== THERMODYNAMICS =====
        case 'heating_curve_physics':
            this.physicsDiagramRenderer.renderHeatingCurvePhysics(diagram, centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'phase_diagram_physics':
            this.physicsDiagramRenderer.renderPhaseDiagramPhysics(diagram, centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'pv_diagram':
            this.physicsDiagramRenderer.renderPVDiagram(diagram, centerX, centerY, width * 0.8, height * 0.7, options);
            break;
        case 'carnot_cycle':
            this.physicsDiagramRenderer.renderCarnotCycle(diagram, centerX, centerY, width * 0.85, height * 0.8, options);
            break;
        case 'heat_transfer':
            this.physicsDiagramRenderer.renderHeatTransfer(diagram, 50, centerY, width * 0.9, height * 0.7, options);
            break;
        case 'kinetic_theory':
            this.physicsDiagramRenderer.renderKineticTheory(diagram, centerX, centerY, Math.min(width, height) * 0.6, options);
            break;
            
        // ===== ELECTRICITY & MAGNETISM =====
        case 'electric_field':
            this.physicsDiagramRenderer.renderElectricField(diagram, centerX, centerY, width * 0.8, height * 0.7, options);
            break;
        case 'circuit_diagram':
            this.physicsDiagramRenderer.renderCircuitDiagram(diagram, centerX, centerY, width * 0.8, height * 0.7, options);
            break;
        case 'series_parallel':
            this.physicsDiagramRenderer.renderSeriesParallel(diagram, centerX, centerY, width * 0.9, height * 0.8, options);
            break;
        case 'potential_distance':
            this.physicsDiagramRenderer.renderPotentialDistance(diagram, centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'magnetic_field':
            this.physicsDiagramRenderer.renderMagneticField(diagram, centerX, centerY, width * 0.8, height * 0.7, options);
            break;
        case 'em_induction':
            this.physicsDiagramRenderer.renderEMInduction(diagram, centerX, centerY, width * 0.8, height * 0.7, options);
            break;
        case 'transformer':
            this.physicsDiagramRenderer.renderTransformer(diagram, centerX, centerY, width * 0.7, height * 0.7, options);
            break;
        case 'capacitor_curve':
            this.physicsDiagramRenderer.renderCapacitorCurve(diagram, centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'lorentz_force':
            this.physicsDiagramRenderer.renderLorentzForce(diagram, centerX, centerY, width * 0.7, height * 0.7, options);
            break;
            
        // ===== OPTICS =====
        case 'mirror_ray_diagram':
            this.physicsDiagramRenderer.renderMirrorRayDiagram(diagram, centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'lens_ray_diagram':
            this.physicsDiagramRenderer.renderLensRayDiagram(diagram, centerX, centerY, width * 0.9, height * 0.7, options);
            break;
        case 'snells_law':
            this.physicsDiagramRenderer.renderSnellsLaw(diagram, centerX, centerY, width * 0.7, height * 0.7, options);
            break;
        case 'total_internal_reflection':
            this.physicsDiagramRenderer.renderTotalInternalReflection(diagram, centerX, centerY, width * 0.8, height * 0.7, options);
            break;
        case 'prism_dispersion':
            this.physicsDiagramRenderer.renderPrismDispersion(diagram, centerX, centerY, width * 0.8, height * 0.7, options);
            break;
        case 'optical_fiber':
            this.physicsDiagramRenderer.renderOpticalFiber(diagram, centerX, centerY, width * 0.85, height * 0.5, options);
            break;
        case 'optical_interference':
            this.physicsDiagramRenderer.renderOpticalInterference(diagram, centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'polarization':
            this.physicsDiagramRenderer.renderPolarization(diagram, centerX, centerY, width * 0.85, height * 0.6, options);
            break;
            
        // ===== MODERN PHYSICS =====
        case 'photoelectric_effect':
            this.physicsDiagramRenderer.renderPhotoelectricEffect(diagram, centerX, centerY, width * 0.8, height * 0.7, options);
            break;
        case 'emission_spectra':
            this.physicsDiagramRenderer.renderEmissionSpectra(diagram, centerX, centerY, width * 0.85, height * 0.75, options);
            break;
        case 'blackbody_radiation':
            this.physicsDiagramRenderer.renderBlackbodyRadiation(diagram, centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'quantum_tunneling':
            this.physicsDiagramRenderer.renderQuantumTunneling(diagram, centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'electron_probability':
            this.physicsDiagramRenderer.renderElectronProbability(diagram, centerX, centerY, Math.min(width, height) * 0.6, options);
            break;
        case 'wave_particle_duality':
            this.physicsDiagramRenderer.renderWaveParticleDuality(diagram, centerX, centerY, width * 0.9, height * 0.7, options);
            break;
        case 'de_broglie':
            this.physicsDiagramRenderer.renderDeBroglie(diagram, centerX, centerY, width * 0.85, height * 0.7, options);
            break;
            
        // ===== RELATIVITY =====
        case 'spacetime_diagram':
            this.physicsDiagramRenderer.renderSpacetimeDiagram(diagram, centerX, centerY, width * 0.7, height * 0.7, options);
            break;
        case 'time_dilation':
            this.physicsDiagramRenderer.renderTimeDilation(diagram, centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'length_contraction':
            this.physicsDiagramRenderer.renderLengthContraction(diagram, centerX, centerY, width * 0.85, height * 0.6, options);
            break;
        case 'curved_spacetime':
            this.physicsDiagramRenderer.renderCurvedSpacetime(diagram, centerX, centerY, width * 0.7, height * 0.7, options);
            break;
        case 'twin_paradox':
            this.physicsDiagramRenderer.renderTwinParadox(diagram, centerX, centerY, width * 0.85, height * 0.8, options);
            break;
        case 'velocity_addition':
            this.physicsDiagramRenderer.renderVelocityAddition(diagram, centerX, centerY, width * 0.85, height * 0.7, options);
            break;
            
        // ===== NUCLEAR PHYSICS =====
        case 'nuclear_structure_physics':
            this.physicsDiagramRenderer.renderNuclearStructurePhysics(diagram, centerX, centerY, Math.min(width, height) * 0.5, options);
            break;
        case 'nuclear_decay_physics':
            this.physicsDiagramRenderer.renderNuclearDecayPhysics(diagram, centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'half_life_graph':
            this.physicsDiagramRenderer.renderHalfLifeGraph(diagram, centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'binding_energy_curve':
            this.physicsDiagramRenderer.renderBindingEnergyCurve(diagram, centerX, centerY, width * 0.85, height * 0.7, options);
            break;
        case 'fission_diagram':
            this.physicsDiagramRenderer.renderFissionDiagram(diagram, centerX, centerY, width * 0.9, height * 0.7, options);
            break;
        case 'fusion_diagram':
            this.physicsDiagramRenderer.renderFusionDiagram(diagram, centerX, centerY, width * 0.9, height * 0.7, options);
            break;
        case 'chain_reaction_diagram':
            this.physicsDiagramRenderer.renderChainReactionDiagram(diagram, centerX, centerY, width * 0.9, height * 0.8, options);
            break;
        case 'reactor_diagram':
            this.physicsDiagramRenderer.renderReactorDiagram(diagram, centerX, centerY, width * 0.8, height * 0.75, options);
            break;
        case 'mass_defect':
            this.physicsDiagramRenderer.renderMassDefect(diagram, centerX, centerY, width * 0.8, height * 0.7, options);
            break;
        case 'radiation_penetration':
            this.physicsDiagramRenderer.renderRadiationPenetration(diagram, centerX, centerY, width * 0.9, height * 0.7, options);
            break;
            
        // ===== PARTICLE PHYSICS =====
        case 'standard_model':
            this.physicsDiagramRenderer.renderStandardModel(diagram, centerX, centerY, width * 0.9, height * 0.85, options);
            break;
        case 'feynman_diagram':
            this.physicsDiagramRenderer.renderFeynmanDiagram(diagram, centerX, centerY, width * 0.7, height * 0.7, options);
            break;
        case 'quark_structure':
            this.physicsDiagramRenderer.renderQuarkStructure(diagram, centerX, centerY, Math.min(width, height) * 0.5, options);
            break;
        case 'accelerator':
            this.physicsDiagramRenderer.renderAccelerator(diagram, centerX, centerY, Math.min(width, height) * 0.7, options);
            break;
        case 'collision_tracks':
            this.physicsDiagramRenderer.renderCollisionTracks(diagram, centerX, centerY, Math.min(width, height) * 0.7, options);
            break;
            
        default:
            throw new Error(`Rendering for physics diagram type '${diagram.type}' not implemented`);
    }
}

// Render all physics diagrams
renderAllPhysicsDiagrams() {
    const results = [];
    
    this.physicsDiagrams.forEach((_, index) => {
        try {
            const result = this.renderPhysicsDiagramToPNG(index);
            results.push(result);
        } catch (error) {
            results.push({
                error: error.message,
                index
            });
        }
    });
    
    return results;
}

// Get physics diagram statistics
getPhysicsDiagramStatistics() {
    const stats = PhysicsDiagramsRegistry.getDiagramStats();
    
    return {
        totalAvailable: Object.values(stats).reduce((sum, cat) => sum + cat.count, 0),
        byCategory: stats,
        diagramsInWorkbook: this.physicsDiagrams.length,
        workbookCategories: this.physicsDiagrams.reduce((acc, diagram) => {
            acc[diagram.category] = (acc[diagram.category] || 0) + 1;
            return acc;
        }, {}),
        byType: this.physicsDiagrams.reduce((acc, diagram) => {
            acc[diagram.type] = (acc[diagram.type] || 0) + 1;
            return acc;
        }, {})
    };
}

// Search physics diagrams
searchPhysicsDiagrams(query) {
    return PhysicsDiagramsRegistry.searchDiagrams(query);
}

// List all physics diagrams in workbook
listPhysicsDiagrams() {
    return this.physicsDiagrams.map((diagram, index) => ({
        index,
        id: diagram.id,
        name: diagram.title,
        type: PhysicsDiagramsRegistry.getDiagram(diagram.key).name,
        category: diagram.category,
        filename: diagram.filename,
        created: diagram.createdAt
    }));
}

// Remove physics diagram
removePhysicsDiagram(diagramIndex) {
    if (diagramIndex < 0 || diagramIndex >= this.physicsDiagrams.length) {
        throw new Error(`Physics diagram index ${diagramIndex} out of range`);
    }
    
    const removed = this.physicsDiagrams.splice(diagramIndex, 1);
    this.addToHistory(`Removed physics diagram: ${removed[0].title}`);
    return removed[0];
}

// Update physics diagram
updatePhysicsDiagram(diagramIndex, updates) {
    if (diagramIndex < 0 || diagramIndex >= this.physicsDiagrams.length) {
        throw new Error(`Physics diagram index ${diagramIndex} out of range`);
    }
    
    const diagram = this.physicsDiagrams[diagramIndex];
    
    if (updates.title) diagram.title = updates.title;
    if (updates.options) {
        diagram.options = { ...diagram.options, ...updates.options };
    }
    
    this.addToHistory(`Updated physics diagram: ${diagram.title}`);
    return diagram;
}

// Generate physics diagram guide
generatePhysicsDiagramGuide() {
    const guide = {
        title: 'Available Physics Diagrams',
        categories: {},
        totalDiagrams: 0,
        suggestions: []
    };
    
    const categories = PhysicsDiagramsRegistry.getAllCategories();
    
    categories.forEach(category => {
        const diagrams = PhysicsDiagramsRegistry.getDiagramsByCategory(category);
        guide.categories[category] = {
            description: PhysicsDiagramsRegistry.getCategoryDescription(category),
            diagrams: Object.entries(diagrams).map(([key, diagram]) => ({
                key,
                name: diagram.name,
                description: diagram.description,
                type: diagram.type
            }))
        };
        guide.totalDiagrams += Object.keys(diagrams).length;
    });
    
    // Add suggestions based on workbook context
    guide.suggestions = this.suggestPhysicsDiagrams();
    
    return guide;
}

// Batch add physics diagrams by category
addPhysicsDiagramsByCategory(category, options = {}) {
    const diagrams = PhysicsDiagramsRegistry.getDiagramsByCategory(category);
    const results = [];
    
    Object.keys(diagrams).forEach(key => {
        try {
            const result = this.addPhysicsDiagram({
                key,options,
                filename: `${this.sheetName}_${key}_${Date.now()}.png`
            });
            results.push(result);
        } catch (error) {
            results.push({ key, error: error.message });
        }
    });
    
    return results;
}

// Batch add physics diagrams by type
addPhysicsDiagramsByType(type, options = {}) {
    const diagrams = PhysicsDiagramsRegistry.getDiagramsByType(type);
    const results = [];
    
    Object.keys(diagrams).forEach(key => {
        try {
            const result = this.addPhysicsDiagram({
                key,
                options,
                filename: `${this.sheetName}_${key}_${Date.now()}.png`
            });
            results.push(result);
        } catch (error) {
            results.push({ key, error: error.message });
        }
    });
    
    return results;
}

// Export physics diagrams to a folder
exportPhysicsDiagramsToFolder(folderPath) {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }
    
    const results = [];
    
    this.physicsDiagrams.forEach((diagram, index) => {
        try {
            const originalFilename = diagram.filename;
            diagram.filename = `${folderPath}/${diagram.filename}`;
            
            const result = this.renderPhysicsDiagramToPNG(index);
            results.push(result);
            
            // Restore original filename
            diagram.filename = originalFilename;
        } catch (error) {
            results.push({
                index,
                error: error.message
            });
        }
    });
    
    return {
        folder: folderPath,
        results,
        totalExported: results.filter(r => !r.error).length
    };
}

// Get physics diagrams by category from workbook
getPhysicsDiagramsByCategory(category) {
    return this.physicsDiagrams.filter(diagram => diagram.category === category);
}

// Get physics diagrams by type from workbook
getPhysicsDiagramsByType(type) {
    return this.physicsDiagrams.filter(diagram => diagram.type === type);
}

// Get all categories used in workbook for physics
getWorkbookPhysicsCategories() {
    const categories = new Set(this.physicsDiagrams.map(d => d.category));
    return Array.from(categories);
}

// Clear all physics diagrams
clearPhysicsDiagrams() {
    const count = this.physicsDiagrams.length;
    this.physicsDiagrams = [];
    this.addToHistory(`Cleared all ${count} physics diagrams`);
    return count;
}

// Generate ultimate comprehensive combined report (all diagram types)
generateUltimateComprehensiveReport() {
    const baseReport = this.generateReport();
    
    return {
        ...baseReport,
        anatomicalDiagrams: this.listAnatomicalDiagrams(),
        anatomicalStats: this.getAnatomicalDiagramStatistics(),
        chemistryDiagrams: this.listChemistryDiagrams(),
        chemistryStats: this.getChemistryDiagramStatistics(),
        physicsDiagrams: this.listPhysicsDiagrams(),
        physicsStats: this.getPhysicsDiagramStatistics(),
        visualizations: {
            charts: this.charts.length,
            anatomicalDiagrams: this.anatomicalDiagrams.length,
            chemistryDiagrams: this.chemistryDiagrams.length,
            physicsDiagrams: this.physicsDiagrams.length,
            crossSectionDiagrams: this.crossSectionDiagrams.length,
            stereochemistryDiagrams: this.stereochemistryDiagrams.length,
            total: this.charts.length + this.anatomicalDiagrams.length + 
                   this.chemistryDiagrams.length + this.physicsDiagrams.length +
                   this.crossSectionDiagrams.length + this.stereochemistryDiagrams.length
        }
    };
}

// Export all science diagrams to organized folder structure
exportAllScienceDiagramsToFolder(folderPath) {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }
    
    const anatomicalResults = this.exportAnatomicalDiagramsToFolder(`${folderPath}/biology`);
    const chemistryResults = this.exportChemistryDiagramsToFolder(`${folderPath}/chemistry`);
    const physicsResults = this.exportPhysicsDiagramsToFolder(`${folderPath}/physics`);
    
    return {
        folder: folderPath,
        biology: anatomicalResults,
        chemistry: chemistryResults,
        physics: physicsResults,
        totalExported: anatomicalResults.totalExported + chemistryResults.totalExported + physicsResults.totalExported
    };
}

// Get all available science diagram types
getAllAvailableScienceDiagramTypes() {
    return {
        biology: this.getAvailableAnatomicalDiagrams(),
        chemistry: this.getAvailableChemistryDiagrams(),
        physics: this.getAvailablePhysicsDiagrams()
    };
}

// Search across all science diagram types
searchAllScienceDiagrams(query) {
    return {
        biology: this.searchAnatomicalDiagrams(query),
        chemistry: this.searchChemistryDiagrams(query),
        physics: this.searchPhysicsDiagrams(query)
    };
}

// Get comprehensive science diagram statistics
getComprehensiveScienceDiagramStatistics() {
    return {
        biology: this.getAnatomicalDiagramStatistics(),
        chemistry: this.getChemistryDiagramStatistics(),
        physics: this.getPhysicsDiagramStatistics(),
        summary: {
            totalInWorkbook: this.anatomicalDiagrams.length + this.chemistryDiagrams.length + this.physicsDiagrams.length,
            totalAvailable: 
                this.getAnatomicalDiagramStatistics().totalAvailable +
                Object.values(this.getChemistryDiagramStatistics().byCategory).reduce((sum, cat) => sum + cat.count, 0) +
                Object.values(this.getPhysicsDiagramStatistics().byCategory).reduce((sum, cat) => sum + cat.count, 0)
        }
    };
}

// Generate comprehensive science diagram guide
generateComprehensiveScienceDiagramGuide() {
    return {
        title: 'Complete Science Diagram Library',
        biology: this.generateAnatomicalDiagramGuide(),
        chemistry: this.generateChemistryDiagramGuide(),
        physics: this.generatePhysicsDiagramGuide(),
        totalDiagrams: 
            this.generateAnatomicalDiagramGuide().totalDiagrams +
            this.generateChemistryDiagramGuide().totalDiagrams +
            this.generatePhysicsDiagramGuide().totalDiagrams
    };
}

// Smart suggest diagrams based on workbook content (all sciences)
suggestAllScienceDiagrams() {
    return {
        biology: this.suggestAnatomicalDiagrams(),
        chemistry: this.suggestChemistryDiagrams(),
        physics: this.suggestPhysicsDiagrams(),
        topSuggestions: [
            ...this.suggestAnatomicalDiagrams().slice(0, 3),
            ...this.suggestChemistryDiagrams().slice(0, 3),
            ...this.suggestPhysicsDiagrams().slice(0, 3)
        ].sort((a, b) => b.priority - a.priority).slice(0, 10)
    };
}

// Clear all science diagrams
clearAllScienceDiagrams() {
    const anatomicalCount = this.clearAnatomicalDiagrams();
    const chemistryCount = this.clearChemistryDiagrams();
    const physicsCount = this.clearPhysicsDiagrams();
    
    return {
        biology: anatomicalCount,
        chemistry: chemistryCount,
        physics: physicsCount,
        total: anatomicalCount + chemistryCount + physicsCount
    };
}

// List all science diagrams in workbook
listAllScienceDiagrams() {
    return {
        biology: this.listAnatomicalDiagrams(),
        chemistry: this.listChemistryDiagrams(),
        physics: this.listPhysicsDiagrams(),
        total: this.anatomicalDiagrams.length + this.chemistryDiagrams.length + this.physicsDiagrams.length
    };
}

// Render all science diagrams
renderAllScienceDiagrams() {
    return {
        biology: this.renderAllAnatomicalDiagrams(),
        chemistry: this.renderAllChemistryDiagrams(),
        physics: this.renderAllPhysicsDiagrams()
    };
}

// Get diagram by ID across all types
getDiagramById(diagramId) {
    // Search in anatomical diagrams
    const anatomical = this.anatomicalDiagrams.find(d => d.id === diagramId);
    if (anatomical) {
        return { type: 'biology', diagram: anatomical };
    }
    
    // Search in chemistry diagrams
    const chemistry = this.chemistryDiagrams.find(d => d.id === diagramId);
    if (chemistry) {
        return { type: 'chemistry', diagram: chemistry };
    }
    
    // Search in physics diagrams
    const physics = this.physicsDiagrams.find(d => d.id === diagramId);
    if (physics) {
        return { type: 'physics', diagram: physics };
    }
    
    return null;
}

// Remove diagram by ID across all types
removeDiagramById(diagramId) {
    // Try anatomical diagrams
    const anatomicalIndex = this.anatomicalDiagrams.findIndex(d => d.id === diagramId);
    if (anatomicalIndex >= 0) {
        return this.removeAnatomicalDiagram(anatomicalIndex);
    }
    
    // Try chemistry diagrams
    const chemistryIndex = this.chemistryDiagrams.findIndex(d => d.id === diagramId);
    if (chemistryIndex >= 0) {
        return this.removeChemistryDiagram(chemistryIndex);
    }
    
    // Try physics diagrams
    const physicsIndex = this.physicsDiagrams.findIndex(d => d.id === diagramId);
    if (physicsIndex >= 0) {
        return this.removePhysicsDiagram(physicsIndex);
    }
    
    throw new Error(`Diagram with ID '${diagramId}' not found`);
}

// Get science diagram help by category
getScienceDiagramHelpByCategory(category) {
    // Try each registry
    const anatomicalDiagrams = AnatomicalDiagramsRegistry.getDiagramsByCategory(category);
    const chemistryDiagrams = ChemistryDiagramsRegistry.getDiagramsByCategory(category);
    const physicsDiagrams = PhysicsDiagramsRegistry.getDiagramsByCategory(category);
    
    const results = {
        category,
        found: false,
        diagrams: []
    };
    
    if (Object.keys(anatomicalDiagrams).length > 0) {
        results.found = true;
        results.science = 'biology';
        results.diagrams = Object.keys(anatomicalDiagrams);
    } else if (Object.keys(chemistryDiagrams).length > 0) {
        results.found = true;
        results.science = 'chemistry';
        results.diagrams = Object.keys(chemistryDiagrams);
    } else if (Object.keys(physicsDiagrams).length > 0) {
        results.found = true;
        results.science = 'physics';
        results.diagrams = Object.keys(physicsDiagrams);
    }
    
    return results;
}


    // Generate combined report with charts and anatomical diagrams
    generateCombinedReport() {
        const baseReport = this.generateReport();
        
        return {
            ...baseReport,
            anatomicalDiagrams: this.listAnatomicalDiagrams(),
            anatomicalStats: this.getAnatomicalDiagramStatistics(),
            visualizations: {
                charts: this.charts.length,
                anatomicalDiagrams: this.anatomicalDiagrams.length,
                total: this.charts.length + this.anatomicalDiagrams.length
            }
        };
    }




    // ========================================================================
    // EXISTING METHODS (Keep all your existing methods here)
    // ========================================================================

    setThemeColors() {
        const themes = {
            professional: {
                background: '#ffffff',
                gridColor: '#d0d0d0',
                headerBg: '#4472C4',
                headerText: '#ffffff',
                cellBg: '#ffffff',
                cellText: '#000000',
                alternateRowBg: '#f2f2f2',
                formulaCellBg: '#fff2cc',
                calculatedCellBg: '#e2efda',
                borderColor: '#808080',
                highlightColor: '#ffeb9c'
            },
            dark: {
                background: '#1e1e1e',
                gridColor: '#3e3e3e',
                headerBg: '#2d2d30',
                headerText: '#ffffff',
                cellBg: '#252526',
                cellText: '#cccccc',
                alternateRowBg: '#2d2d30',
                formulaCellBg: '#3e3733',
                calculatedCellBg: '#283d2b',
                borderColor: '#555555',
                highlightColor: '#4d4d00'
            }
        };
        this.colors = themes[this.theme] || themes.professional;
    }

    loadData(data, headers = null) {
        if (!Array.isArray(data) || data.length === 0) {
            throw new Error('Data must be a non-empty array');
        }

        this.data = data.map(row => Array.isArray(row) ? row : Object.values(row));
        this.headers = headers || (Array.isArray(data[0]) ? data[0].map((_, i) => this.columnToLetter(i)) : Object.keys(data[0]));

        if (this.data.length > 0 && this.data[0].every(cell => typeof cell === 'string')) {
            this.headers = this.data[0];
            this.data = this.data.slice(1);
        }

        this.lastModified = new Date();
        this.addToHistory('Data loaded');

        return this;
    }

    columnToLetter(column) {
        let temp, letter = '';
        while (column >= 0) {
            temp = column % 26;
            letter = String.fromCharCode(temp + 65) + letter;
            column = (column - temp) / 26 - 1;
        }
        return letter;
    }

    letterToColumn(letter) {
        let column = 0;
        for (let i = 0; i < letter.length; i++) {
            column = column * 26 + letter.charCodeAt(i) - 64;
        }
        return column - 1;
    }

    parseCellReference(ref) {
        const match = ref.match(/^([A-Z]+)(\d+)$/);
        if (!match) return null;
        return {
            col: this.letterToColumn(match[1]),
            row: parseInt(match[2]) - 1
        };
    }

    parseRangeReference(range) {
        const [start, end] = range.split(':');
        const startCell = this.parseCellReference(start);
        const endCell = this.parseCellReference(end || start);
        return { start: startCell, end: endCell };
    }

    getCellValue(cellRef) {
        const cell = this.parseCellReference(cellRef);
        if (!cell || cell.row < 0 || cell.row >= this.data.length) return null;
        if (cell.col < 0 || cell.col >= this.data[cell.row].length) return null;
        return this.data[cell.row][cell.col];
    }

    setCellValue(cellRef, value) {
        const cell = this.parseCellReference(cellRef);
        if (!cell) return false;

        while (this.data.length <= cell.row) {
            this.data.push([]);
        }
        while (this.data[cell.row].length <= cell.col) {
            this.data[cell.row].push('');
        }

        this.data[cell.row][cell.col] = value;
        this.lastModified = new Date();
        return true;
    }

    getRangeValues(rangeRef) {
        const range = this.parseRangeReference(rangeRef);
        if (!range.start || !range.end) return [];

        const values = [];
        for (let row = range.start.row; row <= range.end.row; row++) {
            for (let col = range.start.col; col <= range.end.col; col++) {
                if (row >= 0 && row < this.data.length && col >= 0 && col < this.data[row].length) {
                    values.push(this.data[row][col]);
                }
            }
        }
        return values;
    }

    applyFormula(targetCell, formulaKey, params) {
        const formula = SpreadsheetFormulaRegistry.getFormula(formulaKey);
        if (!formula) {
            throw new Error(`Formula '${formulaKey}' not found`);
        }

        const processedParams = params.map(param => {
            if (typeof param === 'string' && param.includes(':')) {
                return this.getRangeValues(param);
            }
            else if (typeof param === 'string' && /^[A-Z]+\d+$/.test(param)) {
                return this.getCellValue(param);
            }
            return param;
        });

        const result = formula.calculate(...processedParams);

        this.formulas[targetCell] = {
            formulaKey,
            formula: `=${formula.excelFormula}(${params.join(',')})`,
            params,
            timestamp: new Date()
        };
        this.calculations[targetCell] = result;

        this.setCellValue(targetCell, result);

        this.addToHistory(`Applied ${formula.name} to ${targetCell}`);

        return {
            cell: targetCell,
            formula: this.formulas[targetCell].formula,
            result,
            formatted: this.formatCellValue(result, formula.category)
        };
    }

  applyFormulaBatch(targetRange, formulaKey, paramTemplate) {
    const range = this.parseRangeReference(targetRange);
    if (!range.start || !range.end) {
        throw new Error('Invalid target range');
    }

    const formula = SpreadsheetFormulaRegistry.getFormula(formulaKey);
    if (!formula) {
        throw new Error(`Formula '${formulaKey}' not found`);
    }

    const results = [];

    // Handle row-wise operations
    const rowWiseFormulas = [
        'sumByRow', 'productByRow', 'averageByRow', 'divideByRow', 
        'subtractByRow', 'maxByRow', 'minByRow', 'countByRow'
    ];
    
    if (rowWiseFormulas.includes(formulaKey)) {
        const sourceRange = this.parseRangeReference(paramTemplate[0]);
        
        if (!sourceRange.start || !sourceRange.end) {
            throw new Error('Invalid source range');
        }
        
        // Calculate number of rows in source and target
        const sourceRows = sourceRange.end.row - sourceRange.start.row + 1;
        const targetRows = range.end.row - range.start.row + 1;
        
        if (sourceRows !== targetRows) {
            throw new Error(`Source has ${sourceRows} rows but target has ${targetRows} rows. They must match.`);
        }
        
        // Process each row
        for (let i = 0; i < sourceRows; i++) {
            const sourceRow = sourceRange.start.row + i;
            const targetRow = range.start.row + i;
            
            // Build row range (e.g., C2:E2, C3:E3, etc.)
            const rowRangeStart = `${this.columnToLetter(sourceRange.start.col)}${sourceRow + 1}`;
            const rowRangeEnd = `${this.columnToLetter(sourceRange.end.col)}${sourceRow + 1}`;
            const rowRange = `${rowRangeStart}:${rowRangeEnd}`;
            
            // Get values for this row
            const rowValues = this.getRangeValues(rowRange);
            
            // Calculate based on formula type
            let result;
            let excelFormulaName;
            
            switch (formulaKey) {
                case 'sumByRow':
                    result = rowValues.reduce((sum, val) => sum + (parseFloat(val) || 0), 0);
                    excelFormulaName = 'SUM';
                    break;
                    
                case 'productByRow':
                    result = rowValues.reduce((prod, val) => prod * (parseFloat(val) || 1), 1);
                    excelFormulaName = 'PRODUCT';
                    break;
                    
                case 'averageByRow':
                    const nums = rowValues.filter(v => !isNaN(parseFloat(v))).map(v => parseFloat(v));
                    result = nums.length > 0 ? nums.reduce((sum, val) => sum + val, 0) / nums.length : 0;
                    excelFormulaName = 'AVERAGE';
                    break;
                    
                case 'subtractByRow':
                    // First value minus all subsequent values
                    result = rowValues.length > 0 ? parseFloat(rowValues[0]) || 0 : 0;
                    for (let j = 1; j < rowValues.length; j++) {
                        result -= (parseFloat(rowValues[j]) || 0);
                    }
                    excelFormulaName = 'SUBTRACT';
                    break;
                    
                case 'divideByRow':
                    // First value divided by product of all subsequent values
                    result = rowValues.length > 0 ? parseFloat(rowValues[0]) || 1 : 1;
                    for (let j = 1; j < rowValues.length; j++) {
                        const divisor = parseFloat(rowValues[j]) || 1;
                        if (divisor === 0) {
                            throw new Error(`Division by zero in row ${sourceRow + 1}`);
                        }
                        result /= divisor;
                    }
                    excelFormulaName = 'DIVIDE';
                    break;
                    
                case 'maxByRow':
                    const maxNums = rowValues.filter(v => !isNaN(parseFloat(v))).map(v => parseFloat(v));
                    result = maxNums.length > 0 ? Math.max(...maxNums) : 0;
                    excelFormulaName = 'MAX';
                    break;
                    
                case 'minByRow':
                    const minNums = rowValues.filter(v => !isNaN(parseFloat(v))).map(v => parseFloat(v));
                    result = minNums.length > 0 ? Math.min(...minNums) : 0;
                    excelFormulaName = 'MIN';
                    break;
                    
                case 'countByRow':
                    result = rowValues.filter(v => v !== null && v !== undefined && v !== '').length;
                    excelFormulaName = 'COUNT';
                    break;
                    
                default:
                    throw new Error(`Unknown row-wise formula: ${formulaKey}`);
            }
            
            // Target cell (e.g., F2, F3, F4, etc.)
            const targetCell = `${this.columnToLetter(range.start.col)}${targetRow + 1}`;
            
            // Set value
            this.setCellValue(targetCell, result);
            
            // Store formula
            this.formulas[targetCell] = {
                formulaKey,
                formula: `=${excelFormulaName}(${rowRange})`,
                params: [rowRange],
                timestamp: new Date()
            };
            
            this.calculations[targetCell] = result;
            
            results.push({
                cell: targetCell,
                formula: `=${excelFormulaName}(${rowRange})`,
                result,
                formatted: this.formatCellValue(result, formula.category)
            });
        }
        
        this.addToHistory(`Applied ${formula.name} to ${targetRange}`);
        return results;
    }
    
    // Original batch logic for other formulas
    for (let row = range.start.row; row <= range.end.row; row++) {
        for (let col = range.start.col; col <= range.end.col; col++) {
            const cellRef = `${this.columnToLetter(col)}${row + 1}`;

            // Adjust parameters for current row
            const adjustedParams = paramTemplate.map(param => {
                if (typeof param === 'string' && param.includes('{row}')) {
                    return param.replace('{row}', String(row + 1));
                }
                return param;
            });

            try {
                const result = this.applyFormula(cellRef, formulaKey, adjustedParams);
                results.push(result);
            } catch (error) {
                results.push({ cell: cellRef, error: error.message });
            }
        }
    }

    return results;
}
    formatCellValue(value, category) {
        if (value === null || value === undefined) return '';

        switch (category) {
            case 'Budget & Business':
            case 'Financial & Economic':
                if (typeof value === 'number') {
                    if (Math.abs(value) < 1 && value !== 0) {
                        return (value * 100).toFixed(2) + '%';
                    }
                    return '$' + value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                }
                break;
            case 'Statistics & Science':
                if (typeof value === 'number') {
                    return value.toFixed(4);
                }
                break;
            default:
                if (typeof value === 'number') {
                    return value.toLocaleString('en-US', { maximumFractionDigits: 2 });
                }
        }

        return String(value);
    }

    getAvailableActions() {
        const actions = {};
        const categories = SpreadsheetFormulaRegistry.getAllCategories();

        categories.forEach(category => {
            actions[category] = SpreadsheetFormulaRegistry.getFormulasByCategory(category);
        });

        return actions;
    }

    suggestFormulas(cellRange) {
        const values = this.getRangeValues(cellRange);
        const suggestions = [];

        const hasNumbers = values.some(v => !isNaN(parseFloat(v)));
        if (hasNumbers) {
            suggestions.push(
                { key: 'sum', priority: 10, reason: 'Numeric data detected' },
                { key: 'average', priority: 9, reason: 'Calculate central tendency' },
                { key: 'max', priority: 8, reason: 'Find highest value' },
                { key: 'min', priority: 8, reason: 'Find lowest value' }
            );
        }

        if (this.headers.some(h => /revenue|sales|income|cost|expense|budget/i.test(h))) {
            suggestions.push(
                { key: 'profitMargin', priority: 10, reason: 'Financial data detected' },
                { key: 'budgetPercentage', priority: 9, reason: 'Budget tracking recommended' }
            );
        }

        if (values.some(v => !isNaN(Date.parse(v)))) {
            suggestions.push(
                { key: 'datedif', priority: 7, reason: 'Date data detected' }
            );
        }

        return suggestions.sort((a, b) => b.priority - a.priority);
    }

    addToHistory(action) {
        this.history.push({
            action,
            timestamp: new Date(),
            dataSnapshot: JSON.parse(JSON.stringify({
                data: this.data,
                formulas: this.formulas
            }))
        });

        if (this.history.length > 50) {
            this.history = this.history.slice(-50);
        }
    }


    renderSpreadsheet(ctx) {
        ctx.fillStyle = this.colors.background;
        ctx.fillRect(0, 0, this.width, this.height);

        const startX = 60;
        const startY = 100;

        ctx.fillStyle = this.colors.cellText;
        ctx.font = 'bold 24px Arial';
        ctx.fillText(this.sheetName, 30, 40);

        ctx.font = '12px Arial';
        ctx.fillText(`Last Modified: ${this.lastModified.toLocaleString()}`, 30, 70);

        this.headers.forEach((header, colIndex) => {
            const x = startX + colIndex * this.cellWidth;

            ctx.fillStyle = this.colors.headerBg;
            ctx.fillRect(x, startY, this.cellWidth, this.headerHeight);

            ctx.strokeStyle = this.colors.borderColor;
            ctx.strokeRect(x, startY, this.cellWidth, this.headerHeight);

            ctx.fillStyle = this.colors.headerText;
            ctx.font = `bold ${this.headerFontSize}px Arial`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(
                String(header).substring(0, 15),
                x + this.cellWidth / 2,
                startY + this.headerHeight / 2
            );
        });

        this.data.forEach((row, rowIndex) => {
            const y = startY + this.headerHeight + rowIndex * this.cellHeight;

            ctx.fillStyle = this.colors.headerBg;
            ctx.fillRect(10, y, 40, this.cellHeight);
            ctx.strokeStyle = this.colors.borderColor;
            ctx.strokeRect(10, y, 40, this.cellHeight);

            ctx.fillStyle = this.colors.headerText;
            ctx.font = 'bold 11px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(String(rowIndex + 1), 30, y + this.cellHeight / 2);

            row.forEach((cell, colIndex) => {
                const x = startX + colIndex * this.cellWidth;
                const cellRef = `${this.columnToLetter(colIndex)}${rowIndex + 1}`;

                const isFormulaCell = this.formulas[cellRef];
                const isCalculatedCell = this.calculations[cellRef] !== undefined;

                if (isFormulaCell) {
                    ctx.fillStyle = this.colors.formulaCellBg;
                } else if (isCalculatedCell) {
                    ctx.fillStyle = this.colors.calculatedCellBg;
                } else if (rowIndex % 2 === 1) {
                    ctx.fillStyle = this.colors.alternateRowBg;
                } else {
                    ctx.fillStyle = this.colors.cellBg;
                }

                ctx.fillRect(x, y, this.cellWidth, this.cellHeight);
                ctx.strokeStyle = this.colors.gridColor;
                ctx.strokeRect(x, y, this.cellWidth, this.cellHeight);

                ctx.fillStyle = this.colors.cellText;
                ctx.font = `${this.fontSize}px Arial`;
                ctx.textAlign = 'left';

                let displayValue = String(cell);
                if (isFormulaCell) {
                    displayValue = this.formulas[cellRef].formula;
                }

                if (displayValue.length > 20) {
                    displayValue = displayValue.substring(0, 17) + '...';
                }

                ctx.fillText(displayValue, x + 5, y + this.cellHeight / 2);
            });
        });
    }




// ============================================================================
// UPDATED exportToPNG() - ALL DIAGRAMS INCLUDING CHEMISTRY & PHYSICS
// ============================================================================

exportToPNG(filename = 'spreadsheet.png', options = {}) {
    const {
        includeCharts = false,
        includeAnatomicalDiagrams = false,
        includeChemistryDiagrams = false,
        includePhysicsDiagrams = false,
        includeCrossSectionDiagrams = false,
        includeStereochemistryDiagrams = false,
        includeGeometricShapes = false,
        includeGraphs = false,
        chartIndices = [],
        anatomicalIndices = [],
        chemistryIndices = [],
        physicsIndices = [],
        crossSectionIndices = [],
        stereochemistryIndices = [],
        geometricIndices = [],
        graphIndices = []
    } = options;

    let totalHeight = this.height;
    const visualizationsToRender = {
        charts: [],
        anatomical: [],
        chemistry: [],
        physics: [],
        crossSection: [],
        stereochemistry: [],
        geometric: [],
        graphs: []
    };

    // Collect charts
    if (includeCharts && this.charts.length > 0) {
        const selectedCharts = chartIndices.length > 0
            ? chartIndices.map(i => this.charts[i]).filter(Boolean)
            : this.charts;
        visualizationsToRender.charts = selectedCharts;
    }

    // Collect anatomical diagrams
    if (includeAnatomicalDiagrams && this.anatomicalDiagrams.length > 0) {
        const selectedDiagrams = anatomicalIndices.length > 0
            ? anatomicalIndices.map(i => this.anatomicalDiagrams[i]).filter(Boolean)
            : this.anatomicalDiagrams;
        visualizationsToRender.anatomical = selectedDiagrams;
    }

    // Collect chemistry diagrams
    if (includeChemistryDiagrams && this.chemistryDiagrams.length > 0) {
        const selectedChemistry = chemistryIndices.length > 0
            ? chemistryIndices.map(i => this.chemistryDiagrams[i]).filter(Boolean)
            : this.chemistryDiagrams;
        visualizationsToRender.chemistry = selectedChemistry;
    }

    // Collect physics diagrams
    if (includePhysicsDiagrams && this.physicsDiagrams.length > 0) {
        const selectedPhysics = physicsIndices.length > 0
            ? physicsIndices.map(i => this.physicsDiagrams[i]).filter(Boolean)
            : this.physicsDiagrams;
        visualizationsToRender.physics = selectedPhysics;
    }

    // Collect cross-section diagrams
    if (includeCrossSectionDiagrams && this.crossSectionDiagrams.length > 0) {
        const selectedCrossSections = crossSectionIndices.length > 0
            ? crossSectionIndices.map(i => this.crossSectionDiagrams[i]).filter(Boolean)
            : this.crossSectionDiagrams;
        visualizationsToRender.crossSection = selectedCrossSections;
    }

    // Collect stereochemistry diagrams
    if (includeStereochemistryDiagrams && this.stereochemistryDiagrams.length > 0) {
        const selectedStereochem = stereochemistryIndices.length > 0
            ? stereochemistryIndices.map(i => this.stereochemistryDiagrams[i]).filter(Boolean)
            : this.stereochemistryDiagrams;
        visualizationsToRender.stereochemistry = selectedStereochem;
    }

    // Collect geometric shapes
    if (includeGeometricShapes && this.geometricShapes.length > 0) {
        const selectedGeometric = geometricIndices.length > 0
            ? geometricIndices.map(i => this.geometricShapes[i]).filter(Boolean)
            : this.geometricShapes;
        visualizationsToRender.geometric = selectedGeometric;
    }

    // Collect graphs
    if (includeGraphs && this.graphs.length > 0) {
        const selectedGraphs = graphIndices.length > 0
            ? graphIndices.map(i => this.graphs[i]).filter(Boolean)
            : this.graphs;
        visualizationsToRender.graphs = selectedGraphs;
    }

    // Calculate additional height needed
    const totalVisualizations =
        visualizationsToRender.charts.length +
        visualizationsToRender.anatomical.length +
        visualizationsToRender.chemistry.length +
        visualizationsToRender.physics.length +
        visualizationsToRender.crossSection.length +
        visualizationsToRender.stereochemistry.length +
        visualizationsToRender.geometric.length +
        visualizationsToRender.graphs.length;

    if (totalVisualizations > 0) {
        const sectionHeaderHeight = 80;
        const itemHeight = 350;
        const itemsPerRow = 2;
        const rows = Math.ceil(totalVisualizations / itemsPerRow);
        totalHeight += sectionHeaderHeight + (itemHeight * rows) + 50;
    }

    const canvas = createCanvas(this.width, totalHeight);
    const ctx = canvas.getContext('2d');

    // Render spreadsheet
    this.renderSpreadsheet(ctx);

    // Render visualizations if any
    if (totalVisualizations > 0) {
        this.renderVisualizationsToCanvas(ctx, visualizationsToRender);
    }

    const buffer = canvas.toBuffer('image/png');
    if (filename) {
        fs.writeFileSync(filename, buffer);
    }
    return buffer;
}

// ============================================================================
// UPDATED renderVisualizationsToCanvas() - ALL DIAGRAMS
// ============================================================================

renderVisualizationsToCanvas(ctx, visualizations) {
    const {
        charts = [],
        anatomical = [],
        chemistry = [],
        physics = [],
        crossSection = [],
        stereochemistry = [],
        geometric = [],
        graphs = []
    } = visualizations;

    const allVisualizations = [
        ...charts.map(c => ({ type: 'chart', data: c, icon: '📊' })),
        ...anatomical.map(d => ({ type: 'anatomical', data: d, icon: '🫀' })),
        ...chemistry.map(d => ({ type: 'chemistry', data: d, icon: '⚗️' })),
        ...physics.map(d => ({ type: 'physics', data: d, icon: '⚛️' })),
        ...crossSection.map(d => ({ type: 'crossSection', data: d, icon: '🔬' })),
        ...stereochemistry.map(d => ({ type: 'stereochemistry', data: d, icon: '🧪' })),
        ...geometric.map(d => ({ type: 'geometric', data: d, icon: '📐' })),
        ...graphs.map(d => ({ type: 'graph', data: d, icon: '📈' }))
    ];

    if (allVisualizations.length === 0) return;

    // Calculate exact position right after spreadsheet ends
    const numRows = this.data.length;
    const spreadsheetEndY = 100 + this.headerHeight + (numRows * this.cellHeight) + 80;

    // Section header
    const headerY = spreadsheetEndY;
    ctx.fillStyle = this.colors.headerBg;
    ctx.fillRect(0, headerY, this.width, 60);

    ctx.fillStyle = this.colors.headerText;
    ctx.font = 'bold 20px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('📊 Visualizations', 30, headerY + 25);

    // Summary text
    ctx.font = '14px Arial';
    const summaryParts = [];
    if (charts.length > 0) summaryParts.push(`${charts.length} Chart${charts.length !== 1 ? 's' : ''}`);
    if (anatomical.length > 0) summaryParts.push(`${anatomical.length} Biology`);
    if (chemistry.length > 0) summaryParts.push(`${chemistry.length} Chemistry`);
    if (physics.length > 0) summaryParts.push(`${physics.length} Physics`);
    if (crossSection.length > 0) summaryParts.push(`${crossSection.length} Cross-Section`);
    if (stereochemistry.length > 0) summaryParts.push(`${stereochemistry.length} Molecule${stereochemistry.length !== 1 ? 's' : ''}`);
    if (geometric.length > 0) summaryParts.push(`${geometric.length} Geometric`);
    if (graphs.length > 0) summaryParts.push(`${graphs.length} Graph${graphs.length !== 1 ? 's' : ''}`);

    ctx.fillText(summaryParts.join(' • '), 30, headerY + 45);

    // Visualizations layout
    let currentY = headerY + 80;
    const itemsPerRow = 2;
    const itemWidth = 700;
    const itemHeight = 500;
    const itemSpacingX = 80;
    const itemSpacingY = 80;

    allVisualizations.forEach((viz, index) => {
        const colIndex = index % itemsPerRow;
        const rowIndex = Math.floor(index / itemsPerRow);

        const vizX = 50 + (colIndex * (itemWidth + itemSpacingX));
        const vizY = currentY + (rowIndex * (itemHeight + itemSpacingY + 40));

        // Title with icon
        ctx.fillStyle = this.colors.cellText;
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(
            `${viz.icon} ${index + 1}. ${viz.data.title}`,
            vizX,
            vizY - 15
        );

        // Type label
        ctx.font = '11px Arial';
        ctx.fillStyle = '#666666';
        const typeLabels = {
            'chart': 'Chart',
            'anatomical': 'Biology Diagram',
            'chemistry': 'Chemistry Diagram',
            'physics': 'Physics Diagram',
            'crossSection': 'Cross-Section',
            'stereochemistry': 'Molecular Structure',
            'geometric': 'Geometric Shape',
            'graph': 'Mathematical Graph'
        };
        ctx.fillText(typeLabels[viz.type], vizX, vizY - 2);

        // Border
        ctx.strokeStyle = this.colors.borderColor;
        ctx.lineWidth = 2;
        ctx.strokeRect(vizX, vizY, itemWidth, itemHeight);

        // Background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(vizX + 1, vizY + 1, itemWidth - 2, itemHeight - 2);

        // Render the visualization
        try {
            ctx.save();
            ctx.translate(vizX, vizY);

            const tempCanvas = createCanvas(itemWidth, itemHeight);
            const tempCtx = tempCanvas.getContext('2d');

            if (viz.type === 'chart') {
                this.chartRenderer.renderChart(
                    tempCanvas,
                    tempCtx,
                    viz.data.key,
                    viz.data.data,
                    { ...viz.data.options, width: itemWidth, height: itemHeight }
                );
            } else if (viz.type === 'anatomical') {
                this.diagramRenderer.canvas = tempCanvas;
                this.diagramRenderer.ctx = tempCtx;
                this.renderSpecificAnatomicalDiagram(viz.data.key, {
                    ...viz.data.options,
                    width: itemWidth,
                    height: itemHeight
                });
            } else if (viz.type === 'chemistry') {
                this.chemistryDiagramRenderer.canvas = tempCanvas;
                this.chemistryDiagramRenderer.ctx = tempCtx;
                this.renderSpecificChemistryDiagram(viz.data.key, {
                    ...viz.data.options,
                    width: itemWidth,
                    height: itemHeight
                });
            } else if (viz.type === 'physics') {
                this.physicsDiagramRenderer.canvas = tempCanvas;
                this.physicsDiagramRenderer.ctx = tempCtx;
                this.renderSpecificPhysicsDiagram(viz.data.key, {
                    ...viz.data.options,
                    width: itemWidth,
                    height: itemHeight
                });
            } else if (viz.type === 'crossSection') {
                this.crossSectionRenderer.canvas = tempCanvas;
                this.crossSectionRenderer.ctx = tempCtx;
                this.crossSectionRenderer.renderDiagram(
                    viz.data.key,
                    0,
                    0,
                    itemWidth,
                    itemHeight,
                    viz.data.options
                );
            } else if (viz.type === 'stereochemistry') {
                this.stereochemistryRenderer.canvas = tempCanvas;
                this.stereochemistryRenderer.ctx = tempCtx;
                this.stereochemistryRenderer.renderDiagram(
                    viz.data.key,
                    0,
                    0,
                    itemWidth,
                    itemHeight,
                    viz.data.options
                );
            } else if (viz.type === 'geometric') {
                this.geometricRenderer.canvas = tempCanvas;
                this.geometricRenderer.ctx = tempCtx;
                this.geometricRenderer.renderShape(
                    viz.data.key,
                    0,
                    0,
                    itemWidth,
                    itemHeight,
                    viz.data.config
                );
            } else if (viz.type === 'graph') {
                this.graphRenderer.canvas = tempCanvas;
                this.graphRenderer.ctx = tempCtx;
                this.graphRenderer.renderGraph(
                    viz.data.key,
                    0,
                    0,
                    itemWidth,
                    itemHeight,
                    viz.data.config
                );
            }

            // Draw the rendered visualization onto main canvas
            ctx.drawImage(tempCanvas, 0, 0);
            ctx.restore();

        } catch (error) {
            ctx.restore();
            // Error state
            ctx.fillStyle = '#ffcccc';
            ctx.fillRect(vizX, vizY, itemWidth, itemHeight);
            ctx.fillStyle = '#ff0000';
            ctx.font = '12px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(
                `Error rendering ${typeLabels[viz.type]}`,
                vizX + itemWidth / 2,
                vizY + itemHeight / 2
            );
            console.error(`${viz.type} ${index + 1} error:`, error.message);
        }
    });
}

// ============================================================================
// UPDATED exportToExcel() - ALL DIAGRAMS INCLUDING CHEMISTRY & PHYSICS
// ============================================================================

async exportToExcel(filename = 'spreadsheet.xlsx', options = {}) {
    const {
        includeCharts = false,
        includeAnatomicalDiagrams = false,
        includeChemistryDiagrams = false,
        includePhysicsDiagrams = false,
        includeCrossSectionDiagrams = false,
        includeStereochemistryDiagrams = false,
        includeGeometricShapes = false,
        includeGraphs = false
    } = options;

    const workbook = new ExcelJS.Workbook();
    workbook.creator = this.author;
    workbook.created = this.createdDate;
    workbook.modified = this.lastModified;
    workbook.lastPrinted = new Date();

    const worksheet = workbook.addWorksheet(this.sheetName);
    worksheet.properties.defaultRowHeight = 20;

    // [... existing spreadsheet data code ...]

    // ========== VISUALIZATIONS SHEET (All Types) ==========
    const hasVisualizations =
        (includeCharts && this.charts.length > 0) ||
        (includeAnatomicalDiagrams && this.anatomicalDiagrams.length > 0) ||
        (includeChemistryDiagrams && this.chemistryDiagrams.length > 0) ||
        (includePhysicsDiagrams && this.physicsDiagrams.length > 0) ||
        (includeCrossSectionDiagrams && this.crossSectionDiagrams.length > 0) ||
        (includeStereochemistryDiagrams && this.stereochemistryDiagrams.length > 0) ||
        (includeGeometricShapes && this.geometricShapes.length > 0) ||
        (includeGraphs && this.graphs.length > 0);

    if (hasVisualizations) {
        const vizSheet = workbook.addWorksheet('📊 Visualizations');
        let currentRow = 1;

        // Track temp files for cleanup AFTER Excel is saved
        const tempFilesToCleanup = [];

        // HELPER FUNCTION: Add image to Excel with proper error handling
        const addImageToExcel = async (canvas, title, type, index, metadata = {}) => {
            let tempFilePath = null;

            try {
                // Create temp directory if it doesn't exist
                const tempDir = os.tmpdir();
                if (!fs.existsSync(tempDir)) {
                    fs.mkdirSync(tempDir, { recursive: true });
                }

                // Generate unique filename
                const timestamp = Date.now();
                const random = Math.random().toString(36).substring(2, 15);
                tempFilePath = path.join(tempDir, `${type}_${timestamp}_${index}_${random}.png`);

                // Save canvas to buffer
                const buffer = canvas.toBuffer('image/png');

                // Write buffer to temp file
                fs.writeFileSync(tempFilePath, buffer);

                // Verify file exists
                if (!fs.existsSync(tempFilePath)) {
                    throw new Error(`Failed to create temp file: ${tempFilePath}`);
                }

                console.log(`  • Created temp file: ${path.basename(tempFilePath)}`);

                // Add image to workbook
                const imageId = workbook.addImage({
                    filename: tempFilePath,
                    extension: 'png'
                });

                // Add title
                const titleCell = vizSheet.getCell(`A${currentRow}`);
                titleCell.value = title;

                const typeColors = {
                    'chart': 'FF4472C4',
                    'anatomical': 'FFE74C3C',
                    'chemistry': 'FFFF9800',
                    'physics': 'FF2196F3',
                    'crossSection': 'FF27AE60',
                    'stereochemistry': 'FF9B59B6',
                    'geometric': 'FFFF9800',
                    'graph': 'FF2196F3'
                };

                titleCell.font = {
                    bold: true,
                    size: 12,
                    color: { argb: typeColors[type] || 'FF000000' }
                };
                titleCell.alignment = { horizontal: 'left', vertical: 'middle' };
                vizSheet.getRow(currentRow).height = 25;
                currentRow += 1;

                // Add metadata if provided
                if (Object.keys(metadata).length > 0) {
                    const metaCell = vizSheet.getCell(`A${currentRow}`);
                    const metaText = Object.entries(metadata)
                        .map(([key, value]) => `${key}: ${value}`)
                        .join(' • ');
                    metaCell.value = metaText;
                    metaCell.font = { size: 10, italic: true, color: { argb: 'FF666666' } };
                    vizSheet.getRow(currentRow).height = 20;
                    currentRow += 1;
                }

                // Insert image
                const imgWidth = canvas.width;
                const imgHeight = canvas.height;

                vizSheet.addImage(imageId, {
                    tl: { col: 0, row: currentRow - 1 },
                    ext: { width: imgWidth, height: imgHeight },
                    editAs: 'oneCell'
                });

                // Calculate rows for image
                const rowsNeeded = Math.ceil(imgHeight / 20);
                for (let r = 0; r < rowsNeeded; r++) {
                    vizSheet.getRow(currentRow + r).height = 20;
                }
                currentRow += rowsNeeded + 2;

                console.log(`  ✓ Added ${type} to Excel: ${title}`);

                // Add to cleanup list (don't delete yet!)
                tempFilesToCleanup.push(tempFilePath);

                return true;

            } catch (error) {
                console.error(`  ❌ Error adding ${type} ${index + 1}:`, error.message);

                // Add error message to sheet
                const errorCell = vizSheet.getCell(`A${currentRow}`);
                errorCell.value = `⚠ Error: ${title} - ${error.message}`;
                errorCell.font = { color: { argb: 'FFFF0000' }, italic: true };
                vizSheet.getRow(currentRow).height = 25;
                currentRow += 2;

                return false;
            }
        };

        // Add Charts
        if (includeCharts && this.charts.length > 0) {
            console.log('\n📊 Adding Charts to Excel...');

            const chartHeaderCell = vizSheet.getCell(`A${currentRow}`);
            chartHeaderCell.value = '📊 CHARTS';
            chartHeaderCell.font = { bold: true, size: 14, color: { argb: 'FF4472C4' } };
            chartHeaderCell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FFE7F3FF' }
            };
            vizSheet.getRow(currentRow).height = 30;
            currentRow += 2;

            for (let i = 0; i < this.charts.length; i++) {
                const chartConfig = this.charts[i];

                try {
                    const chartCanvas = createCanvas(
                        chartConfig.options.width || 700,
                        chartConfig.options.height || 500
                    );
                    const chartCtx = chartCanvas.getContext('2d');

                    this.chartRenderer.renderChart(
                        chartCanvas,
                        chartCtx,
                        chartConfig.key,
                        chartConfig.data,
                        chartConfig.options
                    );

                    await addImageToExcel(
                        chartCanvas,
                        `Chart ${i + 1}: ${chartConfig.title}`,
                        'chart',
                        i,
                        { Type: chartConfig.key }
                    );

                } catch (error) {
                    console.error(`  ❌ Chart ${i + 1} rendering failed:`, error.message);
                }
            }

            currentRow += 2;
        }

        // Add Anatomical Diagrams (Biology)
        if (includeAnatomicalDiagrams && this.anatomicalDiagrams.length > 0) {
            console.log('\n🫀 Adding Biology Diagrams to Excel...');

            const anatomicalHeaderCell = vizSheet.getCell(`A${currentRow}`);
            anatomicalHeaderCell.value = '🫀 BIOLOGY DIAGRAMS';
            anatomicalHeaderCell.font = { bold: true, size: 14, color: { argb: 'FFE74C3C' } };
            anatomicalHeaderCell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FFFFE7E7' }
            };
            vizSheet.getRow(currentRow).height = 30;
            currentRow += 2;

            for (let i = 0; i < this.anatomicalDiagrams.length; i++) {
                const diagramConfig = this.anatomicalDiagrams[i];

                try {
                    const diagramWidth = diagramConfig.options.width || 800;
                    const diagramHeight = diagramConfig.options.height || 700;
                    const diagramCanvas = createCanvas(diagramWidth, diagramHeight);
                    const diagramCtx = diagramCanvas.getContext('2d');

                    this.diagramRenderer.canvas = diagramCanvas;
                    this.diagramRenderer.ctx = diagramCtx;

                    this.renderSpecificAnatomicalDiagram(diagramConfig.key, diagramConfig.options);

                    const diagramInfo = AnatomicalDiagramsRegistry.getDiagram(diagramConfig.key);

                    await addImageToExcel(
                        diagramCanvas,
                        `Biology ${i + 1}: ${diagramConfig.title}`,
                        'anatomical',
                        i,
                        { Category: diagramInfo.category }
                    );

                } catch (error) {
                    console.error(`  ❌ Biology Diagram ${i + 1} rendering failed:`, error.message);
                }
            }

            currentRow += 2;
        }

        // Add Chemistry Diagrams
        if (includeChemistryDiagrams && this.chemistryDiagrams.length > 0) {
            console.log('\n⚗️ Adding Chemistry Diagrams to Excel...');

            const chemistryHeaderCell = vizSheet.getCell(`A${currentRow}`);
            chemistryHeaderCell.value = '⚗️ CHEMISTRY DIAGRAMS';
            chemistryHeaderCell.font = { bold: true, size: 14, color: { argb: 'FFFF9800' } };
            chemistryHeaderCell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FFFFF3E0' }
            };
            vizSheet.getRow(currentRow).height = 30;
            currentRow += 2;

            for (let i = 0; i < this.chemistryDiagrams.length; i++) {
                const diagramConfig = this.chemistryDiagrams[i];

                try {
                    const diagramWidth = diagramConfig.options.width || 800;
                    const diagramHeight = diagramConfig.options.height || 700;
                    const diagramCanvas = createCanvas(diagramWidth, diagramHeight);
                    const diagramCtx = diagramCanvas.getContext('2d');

                    this.chemistryDiagramRenderer.canvas = diagramCanvas;
                    this.chemistryDiagramRenderer.ctx = diagramCtx;

                    this.renderSpecificChemistryDiagram(diagramConfig.key, diagramConfig.options);

                    const diagramInfo = ChemistryDiagramsRegistry.getDiagram(diagramConfig.key);

                    await addImageToExcel(
                        diagramCanvas,
                        `Chemistry ${i + 1}: ${diagramConfig.title}`,
                        'chemistry',
                        i,
                        {
                            Category: diagramInfo.category,
                            Formula: diagramInfo.formula || 'N/A'
                        }
                    );

                } catch (error) {
                    console.error(`  ❌ Chemistry Diagram ${i + 1} rendering failed:`, error.message);
                }
            }

            currentRow += 2;
        }

        // Add Physics Diagrams
        if (includePhysicsDiagrams && this.physicsDiagrams.length > 0) {
            console.log('\n⚛️ Adding Physics Diagrams to Excel...');

            const physicsHeaderCell = vizSheet.getCell(`A${currentRow}`);
            physicsHeaderCell.value = '⚛️ PHYSICS DIAGRAMS';
            physicsHeaderCell.font = { bold: true, size: 14, color: { argb: 'FF2196F3' } };
            physicsHeaderCell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FFE3F2FD' }
            };
            vizSheet.getRow(currentRow).height = 30;
            currentRow += 2;

            for (let i = 0; i < this.physicsDiagrams.length; i++) {
                const diagramConfig = this.physicsDiagrams[i];

                try {
                    const diagramWidth = diagramConfig.options.width || 800;
                    const diagramHeight = diagramConfig.options.height || 700;
                    const diagramCanvas = createCanvas(diagramWidth, diagramHeight);
                    const diagramCtx = diagramCanvas.getContext('2d');

                    this.physicsDiagramRenderer.canvas = diagramCanvas;
                    this.physicsDiagramRenderer.ctx = diagramCtx;

                    this.renderSpecificPhysicsDiagram(diagramConfig.key, diagramConfig.options);

                    const diagramInfo = PhysicsDiagramsRegistry.getDiagram(diagramConfig.key);

                    await addImageToExcel(
                        diagramCanvas,
                        `Physics ${i + 1}: ${diagramConfig.title}`,
                        'physics',
                        i,
                        { Category: diagramInfo.category }
                    );

                } catch (error) {
                    console.error(`  ❌ Physics Diagram ${i + 1} rendering failed:`, error.message);
                }
            }

            currentRow += 2;
        }

        // Add Cross-Section Diagrams
        if (includeCrossSectionDiagrams && this.crossSectionDiagrams.length > 0) {
            console.log('\n🔬 Adding Cross-Section Diagrams to Excel...');

            const crossSectionHeaderCell = vizSheet.getCell(`A${currentRow}`);
            crossSectionHeaderCell.value = '🔬 CROSS-SECTION DIAGRAMS';
            crossSectionHeaderCell.font = { bold: true, size: 14, color: { argb: 'FF27AE60' } };
            crossSectionHeaderCell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FFE7F9EF' }
            };
            vizSheet.getRow(currentRow).height = 30;
            currentRow += 2;

            for (let i = 0; i < this.crossSectionDiagrams.length; i++) {
                const diagramConfig = this.crossSectionDiagrams[i];

                try {
                    const diagramWidth = diagramConfig.options.width || 800;
                    const diagramHeight = diagramConfig.options.height || 600;
                    const diagramCanvas = createCanvas(diagramWidth, diagramHeight);
                    const diagramCtx = diagramCanvas.getContext('2d');

                    this.crossSectionRenderer.canvas = diagramCanvas;
                    this.crossSectionRenderer.ctx = diagramCtx;
                    this.crossSectionRenderer.renderDiagram(
                        diagramConfig.key,
                        0,
                        0,
                        diagramWidth,
                        diagramHeight,
                        diagramConfig.options
                    );

                    const diagramInfo = CrossSectionDiagramsRegistry.getDiagram(diagramConfig.key);

                    await addImageToExcel(
                        diagramCanvas,
                        `Cross-Section ${i + 1}: ${diagramConfig.title}`,
                        'crossSection',
                        i,
                        { Category: diagramInfo.category }
                    );

                } catch (error) {
                    console.error(`  ❌ Cross-Section Diagram ${i + 1} rendering failed:`, error.message);
                }
            }

            currentRow += 2;
        }

        // Add Stereochemistry Diagrams
        if (includeStereochemistryDiagrams && this.stereochemistryDiagrams.length > 0) {
            console.log('\n🧪 Adding Stereochemistry Diagrams to Excel...');

            const stereochemHeaderCell = vizSheet.getCell(`A${currentRow}`);
            stereochemHeaderCell.value = '🧪 MOLECULAR STRUCTURES';
            stereochemHeaderCell.font = { bold: true, size: 14, color: { argb: 'FF9B59B6' } };
            stereochemHeaderCell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FFF4ECF7' }
            };
            vizSheet.getRow(currentRow).height = 30;
            currentRow += 2;

            for (let i = 0; i < this.stereochemistryDiagrams.length; i++) {
                const diagramConfig = this.stereochemistryDiagrams[i];

                try {
                    const diagramWidth = diagramConfig.options.width || 800;
                    const diagramHeight = diagramConfig.options.height || 600;
                    const diagramCanvas = createCanvas(diagramWidth, diagramHeight);
                    const diagramCtx = diagramCanvas.getContext('2d');

                    this.stereochemistryRenderer.canvas = diagramCanvas;
                    this.stereochemistryRenderer.ctx = diagramCtx;

                    this.stereochemistryRenderer.renderDiagram(
                        diagramConfig.key,
                        0,
                        0,
                        diagramWidth,
                        diagramHeight,
                        diagramConfig.options
                    );

                    const diagramInfo = StereochemistryDiagramsRegistry.getDiagram(diagramConfig.key);

                    await addImageToExcel(
                        diagramCanvas,
                        `Molecule ${i + 1}: ${diagramConfig.title}`,
                        'stereochemistry',
                        i,
                        {
                            Formula: diagramInfo.formula,
                            Geometry: diagramInfo.geometry.replace(/_/g, ' '),
                            'Bond Angles': diagramInfo.bondAngles.join('°, ') + '°'
                        }
                    );

                } catch (error) {
                    console.error(`  ❌ Stereochemistry Diagram ${i + 1} rendering failed:`, error.message);
                }
            }

            currentRow += 2;
        }

        // Add Geometric Shapes
        if (includeGeometricShapes && this.geometricShapes.length > 0) {
            console.log('\n📐 Adding Geometric Shapes to Excel...');

            const geometricHeaderCell = vizSheet.getCell(`A${currentRow}`);
            geometricHeaderCell.value = '📐 GEOMETRIC SHAPES';
            geometricHeaderCell.font = { bold: true, size: 14, color: { argb: 'FFFF9800' } };
            geometricHeaderCell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FFFFF3E0' }
            };
            vizSheet.getRow(currentRow).height = 30;
            currentRow += 2;

            for (let i = 0; i < this.geometricShapes.length; i++) {
                const shapeConfig = this.geometricShapes[i];

                try {
                    const shapeWidth = shapeConfig.options.width || 800;
                    const shapeHeight = shapeConfig.options.height || 600;
                    const shapeCanvas = createCanvas(shapeWidth, shapeHeight);
                    const shapeCtx = shapeCanvas.getContext('2d');

                    this.geometricRenderer.canvas = shapeCanvas;
                    this.geometricRenderer.ctx = shapeCtx;

                    this.geometricRenderer.renderShape(
                        shapeConfig.key,
                        0,
                        0,
                        shapeWidth,
                        shapeHeight,
                        shapeConfig.config
                    );

                    const shapeInfo = GeometricShapesRegistry.getShape(shapeConfig.key);

                    await addImageToExcel(
                        shapeCanvas,
                        `Shape ${i + 1}: ${shapeConfig.title}`,
                        'geometric',
                        i,
                        {
                            Type: shapeInfo.name,
                            Category: shapeInfo.category,
                            Dimensionality: shapeInfo.dimensionality
                        }
                    );

                } catch (error) {
                    console.error(`  ❌ Geometric Shape ${i + 1} rendering failed:`, error.message);
                }
            }

            currentRow += 2;
        }

        // Add Mathematical Graphs
        if (includeGraphs && this.graphs.length > 0) {
            console.log('\n📈 Adding Mathematical Graphs to Excel...');

            const graphsHeaderCell = vizSheet.getCell(`A${currentRow}`);
            graphsHeaderCell.value = '📈 MATHEMATICAL GRAPHS';
            graphsHeaderCell.font = { bold: true, size: 14, color: { argb: 'FF2196F3' } };
            graphsHeaderCell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FFE3F2FD' }
            };
            vizSheet.getRow(currentRow).height = 30;
            currentRow += 2;

            for (let i = 0; i < this.graphs.length; i++) {
                const graphConfig = this.graphs[i];

                try {
                    const graphWidth = 1000;
                    const graphHeight = 800;
                    const graphCanvas = createCanvas(graphWidth, graphHeight);
                    const graphCtx = graphCanvas.getContext('2d');

                    this.graphRenderer.canvas = graphCanvas;
                    this.graphRenderer.ctx = graphCtx;

                    const graphData = this.graphRenderer.renderGraph(
                        graphConfig.key,
                        0,
                        0,
                        graphWidth,
                        graphHeight,
                        graphConfig.config
                    );

                    const graphInfo = GraphRegistry.getGraph(graphConfig.key);

                    const metadata = {
                        Type: graphInfo.name,
                        Category: graphInfo.category,
                        Equation: graphData.equation || graphInfo.equation,
                        'Data Points': graphConfig.config.points ? graphConfig.config.points.length : 0
                    };

                    if (graphData.rSquared !== undefined) {
                        metadata['R²'] = graphData.rSquared.toFixed(4);
                    }

                    if (graphData.slope !== undefined) {
                        metadata['Slope'] = graphData.slope.toFixed(4);
                    }

                    await addImageToExcel(
                        graphCanvas,
                        `Graph ${i + 1}: ${graphConfig.title}`,
                        'graph',
                        i,
                        metadata
                    );

                } catch (error) {
                    console.error(`  ❌ Graph ${i + 1} rendering failed:`, error.message);
                }
            }

            currentRow += 2;
        }

        vizSheet.columns = [{ width: 100 }];

        // Save workbook FIRST, then cleanup temp files
        console.log('\n💾 Saving Excel workbook...');
        await workbook.xlsx.writeFile(filename);
        console.log(`✓ Excel file saved: ${filename}\n`);

        // NOW cleanup temp files after Excel is saved
        console.log('🧹 Cleaning up temporary files...');
        tempFilesToCleanup.forEach(tempFile => {
            try {
                if (fs.existsSync(tempFile)) {
                    fs.unlinkSync(tempFile);
                    console.log(`  • Cleaned up: ${path.basename(tempFile)}`);
                }
            } catch (e) {
                console.warn(`  ⚠ Failed to delete temp file: ${tempFile}`);
            }
        });
    } else {
        // No visualizations - just save
        console.log('\n💾 Saving Excel workbook...');
        await workbook.xlsx.writeFile(filename);
        console.log(`✓ Excel file saved: ${filename}\n`);
    }

    return {
        success: true,
        filename,
        sheets: workbook.worksheets.length,
        rows: this.data.length,
        columns: this.headers.length,
        formulas: Object.keys(this.formulas).length,
        visualizations: {
            charts: includeCharts ? this.charts.length : 0,
            anatomicalDiagrams: includeAnatomicalDiagrams ? this.anatomicalDiagrams.length : 0,
            chemistryDiagrams: includeChemistryDiagrams ? this.chemistryDiagrams.length : 0,
            physicsDiagrams: includePhysicsDiagrams ? this.physicsDiagrams.length : 0,
            crossSectionDiagrams: includeCrossSectionDiagrams ? this.crossSectionDiagrams.length : 0,
            stereochemistryDiagrams: includeStereochemistryDiagrams ? this.stereochemistryDiagrams.length : 0,
            geometricShapes: includeGeometricShapes ? this.geometricShapes.length : 0,
            graphs: includeGraphs ? this.graphs.length : 0,
            total:
                (includeCharts ? this.charts.length : 0) +
                (includeAnatomicalDiagrams ? this.anatomicalDiagrams.length : 0) +
                (includeChemistryDiagrams ? this.chemistryDiagrams.length : 0) +
                (includePhysicsDiagrams ? this.physicsDiagrams.length : 0) +
                (includeCrossSectionDiagrams ? this.crossSectionDiagrams.length : 0) +
                (includeStereochemistryDiagrams ? this.stereochemistryDiagrams.length : 0) +
                (includeGeometricShapes ? this.geometricShapes.length : 0) +
                (includeGraphs ? this.graphs.length : 0)
        }
    };
}

// ============================================================================
// UPDATED generateCombinedReport() - ALL DIAGRAMS
// ============================================================================

generateCombinedReport() {
    const baseReport = this.generateReport();

    return {
        ...baseReport,
        anatomicalDiagrams: this.listAnatomicalDiagrams(),
        chemistryDiagrams: this.listChemistryDiagrams(),
        physicsDiagrams: this.listPhysicsDiagrams(),
        crossSectionDiagrams: this.listCrossSectionDiagrams(),
        stereochemistryDiagrams: this.listStereochemistryDiagrams(),
        geometricShapes: this.listGeometricShapes(),
        graphs: this.listGraphs(),
        statistics: {
            anatomical: this.getAnatomicalDiagramStatistics(),
            chemistry: this.getChemistryDiagramStatistics(),
            physics: this.getPhysicsDiagramStatistics(),
            crossSection: this.getCrossSectionDiagramStatistics(),
            stereochemistry: this.getStereochemistryDiagramStatistics(),
            geometric: this.getGeometricShapeStatistics()
        },
        visualizations: {
            charts: this.charts.length,
            anatomicalDiagrams: this.anatomicalDiagrams.length,
            chemistryDiagrams: this.chemistryDiagrams.length,
            physicsDiagrams: this.physicsDiagrams.length,
            crossSectionDiagrams: this.crossSectionDiagrams.length,
            stereochemistryDiagrams: this.stereochemistryDiagrams.length,
            geometricShapes: this.geometricShapes.length,
            graphs: this.graphs.length,
            total:
                this.charts.length +
                this.anatomicalDiagrams.length +
                this.chemistryDiagrams.length +
                this.physicsDiagrams.length +
                this.crossSectionDiagrams.length +
                this.stereochemistryDiagrams.length +
                this.geometricShapes.length +
                this.graphs.length
        }
    };
}

// ============================================================================
// UPDATED generateReport() - WITH ALL DIAGRAMS
// ============================================================================

generateReport() {
    return {
        metadata: {
            sheetName: this.sheetName,
            created: this.createdDate,
            lastModified: this.lastModified,
            author: this.author,
            rowCount: this.data.length,
            columnCount: this.headers.length
        },
        data: {
            headers: this.headers,
            totalRows: this.data.length,
            totalCells: this.data.length * this.headers.length
        },
        formulas: {
            count: Object.keys(this.formulas).length,
            formulas: Object.entries(this.formulas).map(([cell, data]) => ({
                cell,
                formula: data.formula,
                formulaKey: data.formulaKey,
                timestamp: data.timestamp
            }))
        },
        calculations: {
            count: Object.keys(this.calculations).length
        },
        visualizations: {
            charts: {
                count: this.charts.length,
                types: [...new Set(this.charts.map(c => c.key))]
            },
            diagrams: {
                anatomical: {
                    count: this.anatomicalDiagrams.length,
                    categories: [...new Set(this.anatomicalDiagrams.map(d => d.category))]
                },
                chemistry: {
                    count: this.chemistryDiagrams.length,
                    categories: [...new Set(this.chemistryDiagrams.map(d => d.category))],
                    formulas: [...new Set(this.chemistryDiagrams.map(d => d.formula).filter(Boolean))]
                },
                physics: {
                    count: this.physicsDiagrams.length,
                    categories: [...new Set(this.physicsDiagrams.map(d => d.category))]
                },
                crossSection: {
                    count: this.crossSectionDiagrams.length,
                    categories: [...new Set(this.crossSectionDiagrams.map(d => d.category))]
                },
                stereochemistry: {
                    count: this.stereochemistryDiagrams.length,
                    formulas: [...new Set(this.stereochemistryDiagrams.map(d => d.formula))],
                    geometries: [...new Set(this.stereochemistryDiagrams.map(d => {
                        const diagram = StereochemistryDiagramsRegistry.getDiagram(d.key);
                        return diagram ? diagram.geometry : 'unknown';
                    }))]
                },
                geometric: {
                    count: this.geometricShapes.length,
                    types: [...new Set(this.geometricShapes.map(d => d.key))],
                    dimensionalities: [...new Set(this.geometricShapes.map(d => d.dimensionality))]
                },
                graphs: {
                    count: this.graphs.length,
                    types: [...new Set(this.graphs.map(g => g.key))],
                    categories: [...new Set(this.graphs.map(g => g.category))]
                },
                total:
                    this.anatomicalDiagrams.length +
                    this.chemistryDiagrams.length +
                    this.physicsDiagrams.length +
                    this.crossSectionDiagrams.length +
                    this.stereochemistryDiagrams.length +
                    this.geometricShapes.length +
                    this.graphs.length
            }
        },
        history: {
            entries: this.history.length,
            recentActions: this.history.slice(-10)
        }
    };
}

// ============================================================================
// UPDATED exportSelectedVisualizations() - ALL DIAGRAMS
// ============================================================================

async exportSelectedVisualizations(baseFilename, options = {}) {
    const {
        format = 'both',
        includeCharts = false,
        includeAnatomicalDiagrams = false,
        includeChemistryDiagrams = false,
        includePhysicsDiagrams = false,
        includeCrossSectionDiagrams = false,
        includeStereochemistryDiagrams = false,
        includeGeometricShapes = false,
        includeGraphs = false,
        chartIndices = [],
        anatomicalIndices = [],
        chemistryIndices = [],
        physicsIndices = [],
        crossSectionIndices = [],
        stereochemistryIndices = [],
        geometricIndices = [],
        graphIndices = []
    } = options;

    const exportOptions = {
        includeCharts,
        includeAnatomicalDiagrams,
        includeChemistryDiagrams,
        includePhysicsDiagrams,
        includeCrossSectionDiagrams,
        includeStereochemistryDiagrams,
        includeGeometricShapes,
        includeGraphs,
        chartIndices,
        anatomicalIndices,
        chemistryIndices,
        physicsIndices,
        crossSectionIndices,
        stereochemistryIndices,
        geometricIndices,
        graphIndices
    };

    const results = {
        png: null,
        excel: null
    };

    try {
        if (format === 'png' || format === 'both') {
            const pngFilename = `${baseFilename}.png`;
            this.exportToPNG(pngFilename, exportOptions);
            results.png = {
                success: true,
                filename: pngFilename
            };
        }

        if (format === 'excel' || format === 'both') {
            const excelFilename = `${baseFilename}.xlsx`;
            results.excel = await this.exportToExcel(excelFilename, exportOptions);
        }

        return {
            success: true,
            results
        };

    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}

// ============================================================================
// UPDATED exportCompleteWorkbook() - ALL DIAGRAMS
// ============================================================================

async exportCompleteWorkbook(baseFilename = 'complete_workbook', format = 'both') {
    const results = {
        png: null,
        excel: null
    };

    const exportOptions = {
        includeCharts: true,
        includeAnatomicalDiagrams: true,
        includeChemistryDiagrams: true,
        includePhysicsDiagrams: true,
        includeCrossSectionDiagrams: true,
        includeStereochemistryDiagrams: true,
        includeGeometricShapes: true,
        includeGraphs: true
    };

    try {
        if (format === 'png' || format === 'both') {
            console.log('📊 Exporting complete workbook to PNG...');
            const pngFilename = `${baseFilename}.png`;
            this.exportToPNG(pngFilename, exportOptions);
            results.png = {
                success: true,
                filename: pngFilename,
                visualizations: this.getDiagramCounts()
            };
            console.log(`✓ PNG export complete: ${pngFilename}\n`);
        }

        if (format === 'excel' || format === 'both') {
            console.log('📊 Exporting complete workbook to Excel...');
            const excelFilename = `${baseFilename}.xlsx`;
            const excelResult = await this.exportToExcel(excelFilename, exportOptions);
            results.excel = excelResult;
        }

        return {
            success: true,
            results,
            summary: {
                format,
                charts: this.charts.length,
                anatomicalDiagrams: this.anatomicalDiagrams.length,
                chemistryDiagrams: this.chemistryDiagrams.length,
                physicsDiagrams: this.physicsDiagrams.length,
                crossSectionDiagrams: this.crossSectionDiagrams.length,
                stereochemistryDiagrams: this.stereochemistryDiagrams.length,
                geometricShapes: this.geometricShapes.length,
                graphs: this.graphs.length,
                totalVisualizations: this.getDiagramCounts().total
            }
        };

    } catch (error) {
        console.error('❌ Export failed:', error.message);
        return {
            success: false,
            error: error.message
        };
    }
}

// ============================================================================
// UPDATED QUICK EXPORT METHODS - ALL DIAGRAMS
// ============================================================================

async exportWithCharts(filename = 'workbook_with_charts') {
    return this.exportSelectedVisualizations(filename, {
        format: 'both',
        includeCharts: true
    });
}

async exportWithAnatomicalDiagrams(filename = 'workbook_with_biology') {
    return this.exportSelectedVisualizations(filename, {
        format: 'both',
        includeAnatomicalDiagrams: true
    });
}

async exportWithChemistryDiagrams(filename = 'workbook_with_chemistry') {
    return this.exportSelectedVisualizations(filename, {
        format: 'both',
        includeChemistryDiagrams: true
    });
}

async exportWithPhysicsDiagrams(filename = 'workbook_with_physics') {
    return this.exportSelectedVisualizations(filename, {
        format: 'both',
        includePhysicsDiagrams: true
    });
}

async exportWithCrossSectionDiagrams(filename = 'workbook_with_crosssection') {
    return this.exportSelectedVisualizations(filename, {
        format: 'both',
        includeCrossSectionDiagrams: true
    });
}

async exportWithStereochemistryDiagrams(filename = 'workbook_with_molecules') {
    return this.exportSelectedVisualizations(filename, {
        format: 'both',
        includeStereochemistryDiagrams: true
    });
}

async exportWithGeometricShapes(filename = 'workbook_with_geometric') {
    return this.exportSelectedVisualizations(filename, {
        format: 'both',
        includeGeometricShapes: true
    });
}

async exportWithGraphs(filename = 'workbook_with_graphs') {
    return this.exportSelectedVisualizations(filename, {
        format: 'both',
        includeGraphs: true
    });
}

async exportWithAllScienceDiagrams(filename = 'workbook_with_science') {
    return this.exportSelectedVisualizations(filename, {
        format: 'both',
        includeAnatomicalDiagrams: true,
        includeChemistryDiagrams: true,
        includePhysicsDiagrams: true
    });
}

async exportWithAllDiagrams(filename = 'workbook_with_all_diagrams') {
    return this.exportSelectedVisualizations(filename, {
        format: 'both',
        includeAnatomicalDiagrams: true,
        includeChemistryDiagrams: true,
        includePhysicsDiagrams: true,
        includeCrossSectionDiagrams: true,
        includeStereochemistryDiagrams: true,
        includeGeometricShapes: true,
        includeGraphs: true
    });
}

async exportWithAllVisualizations(filename = 'workbook_complete') {
    return this.exportSelectedVisualizations(filename, {
        format: 'both',
        includeCharts: true,
        includeAnatomicalDiagrams: true,
        includeChemistryDiagrams: true,
        includePhysicsDiagrams: true,
        includeCrossSectionDiagrams: true,
        includeStereochemistryDiagrams: true,
        includeGeometricShapes: true,
        includeGraphs: true
    });
}

// ============================================================================
// UPDATED getVisualizationSummary() - ALL DIAGRAMS
// ============================================================================

getVisualizationSummary() {
    return {
        charts: {
            count: this.charts.length,
            types: this.charts.map(c => ({
                title: c.title,
                type: c.key
            }))
        },
        anatomicalDiagrams: {
            count: this.anatomicalDiagrams.length,
            diagrams: this.anatomicalDiagrams.map(d => ({
                title: d.title,
                category: d.category
            }))
        },
        chemistryDiagrams: {
            count: this.chemistryDiagrams.length,
            diagrams: this.chemistryDiagrams.map(d => ({
                title: d.title,
                category: d.category,
                formula: d.formula
            }))
        },
        physicsDiagrams: {
            count: this.physicsDiagrams.length,
            diagrams: this.physicsDiagrams.map(d => ({
                title: d.title,
                category: d.category
            }))
        },
        crossSectionDiagrams: {
            count: this.crossSectionDiagrams.length,
            diagrams: this.crossSectionDiagrams.map(d => ({
                title: d.title,
                category: d.category
            }))
        },
        stereochemistryDiagrams: {
            count: this.stereochemistryDiagrams.length,
            molecules: this.stereochemistryDiagrams.map(d => ({
                title: d.title,
                formula: d.formula
            }))
        },
        geometricShapes: {
            count: this.geometricShapes.length,
            shapes: this.geometricShapes.map(d => ({
                title: d.title,
                type: d.key,
                dimensionality: d.dimensionality
            }))
        },
        graphs: {
            count: this.graphs.length,
            graphs: this.graphs.map(g => ({
                title: g.title,
                type: g.key,
                category: g.category,
                pointCount: g.config.points ? g.config.points.length : 0
            }))
        },
        total:
            this.charts.length +
            this.anatomicalDiagrams.length +
            this.chemistryDiagrams.length +
            this.physicsDiagrams.length +
            this.crossSectionDiagrams.length +
            this.stereochemistryDiagrams.length +
            this.geometricShapes.length +
            this.graphs.length
    };
}

// ============================================================================
// UPDATED hasAnyVisualizations() - ALL DIAGRAMS
// ============================================================================

hasAnyVisualizations() {
    return (
        this.charts.length > 0 ||
        this.anatomicalDiagrams.length > 0 ||
        this.chemistryDiagrams.length > 0 ||
        this.physicsDiagrams.length > 0 ||
        this.crossSectionDiagrams.length > 0 ||
        this.stereochemistryDiagrams.length > 0 ||
        this.geometricShapes.length > 0 ||
        this.graphs.length > 0
    );
}

// ============================================================================
// UPDATED getVisualizationTypes() - ALL DIAGRAMS
// ============================================================================

getVisualizationTypes() {
    const types = [];
    if (this.charts.length > 0) types.push('charts');
    if (this.anatomicalDiagrams.length > 0) types.push('anatomical');
    if (this.chemistryDiagrams.length > 0) types.push('chemistry');
    if (this.physicsDiagrams.length > 0) types.push('physics');
    if (this.crossSectionDiagrams.length > 0) types.push('crossSection');
    if (this.stereochemistryDiagrams.length > 0) types.push('stereochemistry');
    if (this.geometricShapes.length > 0) types.push('geometric');
    if (this.graphs.length > 0) types.push('graphs');
    return types;
}

// ============================================================================
// UPDATED getDiagramCounts() - ALL DIAGRAMS
// ============================================================================

getDiagramCounts() {
    return {
        charts: this.charts.length,
        anatomical: this.anatomicalDiagrams.length,
        chemistry: this.chemistryDiagrams.length,
        physics: this.physicsDiagrams.length,
        crossSection: this.crossSectionDiagrams.length,
        stereochemistry: this.stereochemistryDiagrams.length,
        geometric: this.geometricShapes.length,
        graphs: this.graphs.length,
        total:
            this.charts.length +
            this.anatomicalDiagrams.length +
            this.chemistryDiagrams.length +
            this.physicsDiagrams.length +
            this.crossSectionDiagrams.length +
            this.stereochemistryDiagrams.length +
            this.geometricShapes.length +
            this.graphs.length
    };
}

// ============================================================================
// UPDATED exportAllVisualizationsSeparately() - ALL DIAGRAMS
// ============================================================================

async exportAllVisualizationsSeparately(folderPath) {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }

    const results = {
        charts: [],
        anatomical: [],
        chemistry: [],
        physics: [],
        crossSection: [],
        stereochemistry: [],
        geometric: [],
        graphs: [],
        errors: []
    };

    console.log('\n📊 Exporting all visualizations separately...\n');

    // Export charts
    for (let i = 0; i < this.charts.length; i++) {
        try {
            const chart = this.charts[i];
            const filename = `${folderPath}/chart_${i + 1}_${chart.title.replace(/[^a-z0-9]/gi, '_')}.png`;

            const canvas = createCanvas(
                chart.options.width || 700,
                chart.options.height || 500
            );
            const ctx = canvas.getContext('2d');

            this.chartRenderer.renderChart(canvas, ctx, chart.key, chart.data, chart.options);

            const buffer = canvas.toBuffer('image/png');
            fs.writeFileSync(filename, buffer);

            results.charts.push({ success: true, filename, title: chart.title });
            console.log(`✓ Chart ${i + 1}: ${chart.title}`);
        } catch (error) {
            results.errors.push({ type: 'chart', index: i, error: error.message });
            console.error(`✗ Chart ${i + 1} failed: ${error.message}`);
        }
    }

    // Export anatomical diagrams (Biology)
    for (let i = 0; i < this.anatomicalDiagrams.length; i++) {
        try {
            const diagram = this.anatomicalDiagrams[i];
            const filename = `${folderPath}/biology_${i + 1}_${diagram.title.replace(/[^a-z0-9]/gi, '_')}.png`;

            const canvas = createCanvas(
                diagram.options.width || 800,
                diagram.options.height || 700
            );
            const ctx = canvas.getContext('2d');

            this.diagramRenderer.canvas = canvas;
            this.diagramRenderer.ctx = ctx;
            this.renderSpecificAnatomicalDiagram(diagram.key, diagram.options);

            const buffer = canvas.toBuffer('image/png');
            fs.writeFileSync(filename, buffer);

            results.anatomical.push({ success: true, filename, title: diagram.title });
            console.log(`✓ Biology ${i + 1}: ${diagram.title}`);
        } catch (error) {
            results.errors.push({ type: 'anatomical', index: i, error: error.message });
            console.error(`✗ Biology ${i + 1} failed: ${error.message}`);
        }
    }

    // Export chemistry diagrams
    for (let i = 0; i < this.chemistryDiagrams.length; i++) {
        try {
            const diagram = this.chemistryDiagrams[i];
            const filename = `${folderPath}/chemistry_${i + 1}_${diagram.title.replace(/[^a-z0-9]/gi, '_')}.png`;

            const canvas = createCanvas(
                diagram.options.width || 800,
                diagram.options.height || 700
            );
            const ctx = canvas.getContext('2d');

            this.chemistryDiagramRenderer.canvas = canvas;
            this.chemistryDiagramRenderer.ctx = ctx;
            this.renderSpecificChemistryDiagram(diagram.key, diagram.options);

            const buffer = canvas.toBuffer('image/png');
            fs.writeFileSync(filename, buffer);

            results.chemistry.push({ success: true, filename, title: diagram.title });
            console.log(`✓ Chemistry ${i + 1}: ${diagram.title}`);
        } catch (error) {
            results.errors.push({ type: 'chemistry', index: i, error: error.message });
            console.error(`✗ Chemistry ${i + 1} failed: ${error.message}`);
        }
    }

    // Export physics diagrams
    for (let i = 0; i < this.physicsDiagrams.length; i++) {
        try {
            const diagram = this.physicsDiagrams[i];
            const filename = `${folderPath}/physics_${i + 1}_${diagram.title.replace(/[^a-z0-9]/gi, '_')}.png`;

            const canvas = createCanvas(
                diagram.options.width || 800,
                diagram.options.height || 700
            );
            const ctx = canvas.getContext('2d');

            this.physicsDiagramRenderer.canvas = canvas;
            this.physicsDiagramRenderer.ctx = ctx;
            this.renderSpecificPhysicsDiagram(diagram.key, diagram.options);

            const buffer = canvas.toBuffer('image/png');
            fs.writeFileSync(filename, buffer);

            results.physics.push({ success: true, filename, title: diagram.title });
            console.log(`✓ Physics ${i + 1}: ${diagram.title}`);
        } catch (error) {
            results.errors.push({ type: 'physics', index: i, error: error.message });
            console.error(`✗ Physics ${i + 1} failed: ${error.message}`);
        }
    }

    // Export cross-section diagrams
    for (let i = 0; i < this.crossSectionDiagrams.length; i++) {
        try {
            const diagram = this.crossSectionDiagrams[i];
            const filename = `${folderPath}/crosssection_${i + 1}_${diagram.title.replace(/[^a-z0-9]/gi, '_')}.png`;

            const canvas = createCanvas(
                diagram.options.width || 800,
                diagram.options.height || 600
            );
            const ctx = canvas.getContext('2d');

            this.crossSectionRenderer.canvas = canvas;
            this.crossSectionRenderer.ctx = ctx;
            this.crossSectionRenderer.renderDiagram(
                diagram.key,
                0,
                0,
                diagram.options.width || 800,
                diagram.options.height || 600,
                diagram.options
            );

            const buffer = canvas.toBuffer('image/png');
            fs.writeFileSync(filename, buffer);

            results.crossSection.push({ success: true, filename, title: diagram.title });
            console.log(`✓ Cross-Section ${i + 1}: ${diagram.title}`);
        } catch (error) {
            results.errors.push({ type: 'crossSection', index: i, error: error.message });
            console.error(`✗ Cross-Section ${i + 1} failed: ${error.message}`);
        }
    }

    // Export stereochemistry diagrams
    for (let i = 0; i < this.stereochemistryDiagrams.length; i++) {
        try {
            const diagram = this.stereochemistryDiagrams[i];
            const filename = `${folderPath}/molecule_${i + 1}_${diagram.title.replace(/[^a-z0-9]/gi, '_')}.png`;

            const canvas = createCanvas(
                diagram.options.width || 800,
                diagram.options.height || 600
            );
            const ctx = canvas.getContext('2d');

            this.stereochemistryRenderer.canvas = canvas;
            this.stereochemistryRenderer.ctx = ctx;
            this.stereochemistryRenderer.renderDiagram(
                diagram.key,
                0,
                0,
                diagram.options.width || 800,
                diagram.options.height || 600,
                diagram.options
            );

            const buffer = canvas.toBuffer('image/png');
            fs.writeFileSync(filename, buffer);

            results.stereochemistry.push({ success: true, filename, title: diagram.title });
            console.log(`✓ Molecule ${i + 1}: ${diagram.title}`);
        } catch (error) {
            results.errors.push({ type: 'stereochemistry', index: i, error: error.message });
            console.error(`✗ Molecule ${i + 1} failed: ${error.message}`);
        }
    }

    // Export geometric shapes
    for (let i = 0; i < this.geometricShapes.length; i++) {
        try {
            const shape = this.geometricShapes[i];
            const filename = `${folderPath}/geometric_${i + 1}_${shape.title.replace(/[^a-z0-9]/gi, '_')}.png`;

            const canvas = createCanvas(
                shape.options.width || 800,
                shape.options.height || 600
            );
            const ctx = canvas.getContext('2d');

            this.geometricRenderer.canvas = canvas;
            this.geometricRenderer.ctx = ctx;
            this.geometricRenderer.renderShape(
                shape.key,
                0,
                0,
                shape.options.width || 800,
                shape.options.height || 600,
                shape.config
            );

            const buffer = canvas.toBuffer('image/png');
            fs.writeFileSync(filename, buffer);

            results.geometric.push({ success: true, filename, title: shape.title });
            console.log(`✓ Geometric Shape ${i + 1}: ${shape.title}`);
        } catch (error) {
            results.errors.push({ type: 'geometric', index: i, error: error.message });
            console.error(`✗ Geometric Shape ${i + 1} failed: ${error.message}`);
        }
    }

    // Export graphs
    for (let i = 0; i < this.graphs.length; i++) {
        try {
            const graph = this.graphs[i];
            const filename = `${folderPath}/graph_${i + 1}_${graph.title.replace(/[^a-z0-9]/gi, '_')}.png`;

            const canvas = createCanvas(1000, 800);
            const ctx = canvas.getContext('2d');

            this.graphRenderer.canvas = canvas;
            this.graphRenderer.ctx = ctx;

            const graphData = this.graphRenderer.renderGraph(
                graph.key,
                0,
                0,
                1000,
                800,
                graph.config
            );

            const buffer = canvas.toBuffer('image/png');
            fs.writeFileSync(filename, buffer);

            results.graphs.push({ 
                success: true, 
                filename, 
                title: graph.title,
                equation: graphData.equation,
                rSquared: graphData.rSquared
            });
            console.log(`✓ Graph ${i + 1}: ${graph.title}`);
        } catch (error) {
            results.errors.push({ type: 'graph', index: i, error: error.message });
            console.error(`✗ Graph ${i + 1} failed: ${error.message}`);
        }
    }

    console.log('\n✓ Export complete!\n');

    return {
        folder: folderPath,
        results,
        summary: {
            chartsExported: results.charts.length,
            anatomicalExported: results.anatomical.length,
            chemistryExported: results.chemistry.length,
            physicsExported: results.physics.length,
            crossSectionExported: results.crossSection.length,
            stereochemistryExported: results.stereochemistry.length,
            geometricExported: results.geometric.length,
            graphsExported: results.graphs.length,
            totalExported:
                results.charts.length +
                results.anatomical.length +
                results.chemistry.length +
                results.physics.length +
                results.crossSection.length +
                results.stereochemistry.length +
                results.geometric.length +
                results.graphs.length,
            errors: results.errors.length
        }
    };
}

// ============================================================================
// NEW: Export science diagrams to organized folder structure
// ============================================================================

async exportScienceDiagramsToFolders(baseFolderPath) {
    if (!fs.existsSync(baseFolderPath)) {
        fs.mkdirSync(baseFolderPath, { recursive: true });
    }

    const biologyFolder = `${baseFolderPath}/biology`;
    const chemistryFolder = `${baseFolderPath}/chemistry`;
    const physicsFolder = `${baseFolderPath}/physics`;

    // Create subfolders
    [biologyFolder, chemistryFolder, physicsFolder].forEach(folder => {
        if (!fs.existsSync(folder)) {
            fs.mkdirSync(folder, { recursive: true });
        }
    });

    const results = {
        biology: [],
        chemistry: [],
        physics: [],
        errors: []
    };

    console.log('\n🔬 Exporting science diagrams to organized folders...\n');

    // Export biology diagrams
    for (let i = 0; i < this.anatomicalDiagrams.length; i++) {
        try {
            const diagram = this.anatomicalDiagrams[i];
            const filename = `${biologyFolder}/${i + 1}_${diagram.title.replace(/[^a-z0-9]/gi, '_')}.png`;

            const canvas = createCanvas(
                diagram.options.width || 800,
                diagram.options.height || 700
            );
            const ctx = canvas.getContext('2d');

            this.diagramRenderer.canvas = canvas;
            this.diagramRenderer.ctx = ctx;
            this.renderSpecificAnatomicalDiagram(diagram.key, diagram.options);

            const buffer = canvas.toBuffer('image/png');
            fs.writeFileSync(filename, buffer);

            results.biology.push({ 
                success: true, 
                filename, 
                title: diagram.title,
                category: diagram.category 
            });
            console.log(`✓ Biology ${i + 1}: ${diagram.title}`);
        } catch (error) {
            results.errors.push({ type: 'biology', index: i, error: error.message });
            console.error(`✗ Biology ${i + 1} failed: ${error.message}`);
        }
    }

    // Export chemistry diagrams
    for (let i = 0; i < this.chemistryDiagrams.length; i++) {
        try {
            const diagram = this.chemistryDiagrams[i];
            const filename = `${chemistryFolder}/${i + 1}_${diagram.title.replace(/[^a-z0-9]/gi, '_')}.png`;

            const canvas = createCanvas(
                diagram.options.width || 800,
                diagram.options.height || 700
            );
            const ctx = canvas.getContext('2d');

            this.chemistryDiagramRenderer.canvas = canvas;
            this.chemistryDiagramRenderer.ctx = ctx;
            this.renderSpecificChemistryDiagram(diagram.key, diagram.options);

            const buffer = canvas.toBuffer('image/png');
            fs.writeFileSync(filename, buffer);

            results.chemistry.push({ 
                success: true, 
                filename, 
                title: diagram.title,
                category: diagram.category,
                formula: diagram.formula
            });
            console.log(`✓ Chemistry ${i + 1}: ${diagram.title}`);
        } catch (error) {
            results.errors.push({ type: 'chemistry', index: i, error: error.message });
            console.error(`✗ Chemistry ${i + 1} failed: ${error.message}`);
        }
    }

    // Export physics diagrams
    for (let i = 0; i < this.physicsDiagrams.length; i++) {
        try {
            const diagram = this.physicsDiagrams[i];
            const filename = `${physicsFolder}/${i + 1}_${diagram.title.replace(/[^a-z0-9]/gi, '_')}.png`;

            const canvas = createCanvas(
                diagram.options.width || 800,
                diagram.options.height || 700
            );
            const ctx = canvas.getContext('2d');

            this.physicsDiagramRenderer.canvas = canvas;
            this.physicsDiagramRenderer.ctx = ctx;
            this.renderSpecificPhysicsDiagram(diagram.key, diagram.options);

            const buffer = canvas.toBuffer('image/png');
            fs.writeFileSync(filename, buffer);

            results.physics.push({ 
                success: true, 
                filename, 
                title: diagram.title,
                category: diagram.category
            });
            console.log(`✓ Physics ${i + 1}: ${diagram.title}`);
        } catch (error) {
            results.errors.push({ type: 'physics', index: i, error: error.message });
            console.error(`✗ Physics ${i + 1} failed: ${error.message}`);
        }
    }

    console.log('\n✓ Science diagrams export complete!\n');

    return {
        baseFolder: baseFolderPath,
        folders: {
            biology: biologyFolder,
            chemistry: chemistryFolder,
            physics: physicsFolder
        },
        results,
        summary: {
            biologyExported: results.biology.length,
            chemistryExported: results.chemistry.length,
            physicsExported: results.physics.length,
            totalExported: 
                results.biology.length + 
                results.chemistry.length + 
                results.physics.length,
            errors: results.errors.length
        }
    };
}

// ============================================================================
// NEW: Get comprehensive statistics for all visualizations
// ============================================================================

getComprehensiveVisualizationStatistics() {
    return {
        charts: {
            count: this.charts.length,
            types: [...new Set(this.charts.map(c => c.key))]
        },
        science: {
            biology: {
                count: this.anatomicalDiagrams.length,
                categories: [...new Set(this.anatomicalDiagrams.map(d => d.category))]
            },
            chemistry: {
                count: this.chemistryDiagrams.length,
                categories: [...new Set(this.chemistryDiagrams.map(d => d.category))],
                formulas: [...new Set(this.chemistryDiagrams.map(d => d.formula).filter(Boolean))]
            },
            physics: {
                count: this.physicsDiagrams.length,
                categories: [...new Set(this.physicsDiagrams.map(d => d.category))]
            },
            total: this.anatomicalDiagrams.length + this.chemistryDiagrams.length + this.physicsDiagrams.length
        },
        specialized: {
            crossSection: this.crossSectionDiagrams.length,
            stereochemistry: this.stereochemistryDiagrams.length,
            geometric: this.geometricShapes.length,
            graphs: this.graphs.length,
            total: 
                this.crossSectionDiagrams.length + 
                this.stereochemistryDiagrams.length + 
                this.geometricShapes.length + 
                this.graphs.length
        },
        overall: {
            total: 
                this.charts.length +
                this.anatomicalDiagrams.length +
                this.chemistryDiagrams.length +
                this.physicsDiagrams.length +
                this.crossSectionDiagrams.length +
                this.stereochemistryDiagrams.length +
                this.geometricShapes.length +
                this.graphs.length,
            types: this.getVisualizationTypes()
        }
    };
}

// ============================================================================
// NEW: List all diagrams by science subject
// ============================================================================

listDiagramsByScience() {
    return {
        biology: this.listAnatomicalDiagrams(),
        chemistry: this.listChemistryDiagrams(),
        physics: this.listPhysicsDiagrams()
    };
}

// ============================================================================
// NEW: Clear all science diagrams
// ============================================================================

clearAllScienceDiagrams() {
    const counts = {
        biology: this.anatomicalDiagrams.length,
        chemistry: this.chemistryDiagrams.length,
        physics: this.physicsDiagrams.length
    };

    this.anatomicalDiagrams = [];
    this.chemistryDiagrams = [];
    this.physicsDiagrams = [];

    this.addToHistory(
        `Cleared all science diagrams: ${counts.biology} biology, ${counts.chemistry} chemistry, ${counts.physics} physics`
    );

    return {
        ...counts,
        total: counts.biology + counts.chemistry + counts.physics
    };
}

// ============================================================================
// NEW: Export only science diagrams (biology, chemistry, physics)
// ============================================================================

async exportScienceDiagramsOnly(filename = 'science_diagrams', format = 'both') {
    return this.exportSelectedVisualizations(filename, {
        format,
        includeAnatomicalDiagrams: true,
        includeChemistryDiagrams: true,
        includePhysicsDiagrams: true
    });
}



/**
     * Export statistical report to file
     */
    async exportStatisticalReport(columnRef, filename, options = {}) {
        const report = this.generateStatisticalReport(columnRef, options);
        const stats = this.getStatisticalWorkbook();

        const {
            outputFormat = 'both',
            includeVisualizations = true
        } = options;

        const results = {};

        if (outputFormat === 'png' || outputFormat === 'both') {
            const pngFilename = `${filename}.png`;
            
            if (includeVisualizations) {
                // Export with visualizations
                await stats.generateXLSXWithImages(pngFilename);
            } else {
                // Export spreadsheet only
                stats.exportToPNG(pngFilename);
            }

            results.png = pngFilename;
            console.log(`✓ PNG report saved: ${pngFilename}`);
        }

        if (outputFormat === 'excel' || outputFormat === 'both') {
            const excelFilename = `${filename}.xlsx`;
            await stats.generateXLSXWithImages(excelFilename);
            results.excel = excelFilename;
            console.log(`✓ Excel report saved: ${excelFilename}`);
        }

        return {
            report: report,
            files: results
        };
    }


   /**
     * Generate complete statistical workbook
     */
    async generateStatisticalWorkbook(columnRef, distributionType, filename, options = {}) {
        console.log('\n📊 GENERATING STATISTICAL WORKBOOK');
        console.log('='.repeat(70));

        const report = this.generateStatisticalReport(columnRef, {
            ...options,
            distributionType: distributionType,
            includeVisualizations: true
        });

        const stats = this.getStatisticalWorkbook();

        // Export to Excel with images
        const excelFilename = `${filename}.xlsx`;
        await stats.generateXLSXWithImages(excelFilename);

        console.log(`\n✓ Statistical Workbook Generated`);
        console.log(`  File: ${excelFilename}`);
        console.log(`  Sheets: Multiple`);
        console.log(`  Visualizations: ${Object.keys(stats.visualizations || {}).length}`);

        return {
            filename: excelFilename,
            report: report,
            visualizations: stats.visualizations
        };
    }

 /**
     * Export all statistical analyses
     */
    async exportAllStatisticalAnalyses(outputDir) {
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        console.log('\n📊 EXPORTING ALL STATISTICAL ANALYSES');
        console.log('='.repeat(70));

        const exports = [];

        // Export each report
        for (let i = 0; i < this.statisticalReports.length; i++) {
            const report = this.statisticalReports[i];
            const filename = `${outputDir}/statistical_report_${i + 1}_${report.columnName}`;

            try {
                const stats = new EnhancedStatisticalWorkbook();
                stats.currentWorkbook = report.workbook;
                stats.visualizations = report.visualizations;

                await stats.generateXLSXWithImages(`${filename}.xlsx`);
                exports.push({
                    success: true,
                    filename: `${filename}.xlsx`,
                    report: report.columnName
                });

                console.log(`✓ Exported: ${report.columnName}`);
            } catch (error) {
                console.error(`✗ Failed: ${report.columnName} - ${error.message}`);
                exports.push({
                    success: false,
                    error: error.message,
                    report: report.columnName
                });
            }
        }

        console.log(`\n✓ Export Complete: ${exports.filter(e => e.success).length}/${exports.length} successful`);

        return {
            outputDirectory: outputDir,
            exports: exports,
            successCount: exports.filter(e => e.success).length,
            totalCount: exports.length
        };
    }








    generateFormulaGuide() {
        const guide = {
            title: 'Available Formula Actions',
            categories: {},
            totalFormulas: 0,
            suggestions: []
        };

        const categories = SpreadsheetFormulaRegistry.getAllCategories();

        categories.forEach(category => {
            const formulas = SpreadsheetFormulaRegistry.getFormulasByCategory(category);
            guide.categories[category] = Object.entries(formulas).map(([key, formula]) => ({
                key,
                name: formula.name,
                description: formula.description,
                example: formula.example,
                excelFormula: formula.excelFormula,
                parameters: formula.paramNames || []
            }));
            guide.totalFormulas += Object.keys(formulas).length;
        });

        if (this.data.length > 0) {
            const sampleRange = `A2:A${Math.min(this.data.length + 1, 11)}`;
            guide.suggestions = this.suggestFormulas(sampleRange);
        }

        return guide;
    }

    getFormulaHelp(formulaKey) {
        const formula = SpreadsheetFormulaRegistry.getFormula(formulaKey);
        if (!formula) {
            return { error: 'Formula not found' };
        }

        return {
            name: formula.name,
            category: formula.category,
            description: formula.description,
            excelFormula: formula.excelFormula,
            example: formula.example,
            parameters: formula.params.map((param, index) => ({
                name: param,
                description: formula.paramNames[index] || param,
                required: true
            })),
            usage: formula.usage || 'Apply this formula to calculate results',
            tips: this.generateFormulaTips(formula)
        };
    }

    generateFormulaTips(formula) {
        const tips = [];

        if (formula.params.includes('range')) {
            tips.push('Use cell ranges like A1:A10 to reference multiple cells');
            tips.push('You can reference entire columns like A:A');
        }

        if (formula.category === 'Financial & Economic') {
            tips.push('Interest rates should be entered as decimals (e.g., 0.05 for 5%)');
            tips.push('Ensure time periods match (monthly rate with monthly periods)');
        }

        if (formula.category === 'Budget & Business') {
            tips.push('Compare actual vs budget to track performance');
            tips.push('Use conditional formatting to highlight variances');
        }

        if (formula.excelFormula === 'IF') {
            tips.push('Conditions can use operators: >, <, >=, <=, =, <>');
            tips.push('Nest multiple IF statements for complex logic');
        }

        return tips;
    }

    validateFormulaParams(formulaKey, params) {
        const formula = SpreadsheetFormulaRegistry.getFormula(formulaKey);
        if (!formula) {
            return { valid: false, error: 'Formula not found' };
        }

        const validation = {
            valid: true,
            warnings: [],
            errors: []
        };

        if (params.length < formula.params.length) {
            validation.errors.push(`Expected ${formula.params.length} parameters, got ${params.length}`);
            validation.valid = false;
        }

        params.forEach((param, index) => {
            const paramType = formula.params[index];

            if (typeof param === 'string' && param.includes(':')) {
                const range = this.parseRangeReference(param);
                if (!range.start || !range.end) {
                    validation.errors.push(`Invalid range reference: ${param}`);
                    validation.valid = false;
                }
            }
            else if (typeof param === 'string' && /^[A-Z]+\d+$/.test(param)) {
                const cell = this.parseCellReference(param);
                if (!cell) {
                    validation.errors.push(`Invalid cell reference: ${param}`);
                    validation.valid = false;
                }
            }

            if (formula.category === 'Financial & Economic' && typeof param !== 'string') {
                if (isNaN(parseFloat(param))) {
                    validation.errors.push(`Parameter ${index + 1} must be numeric`);
                    validation.valid = false;
                }
            }
        });

        return validation;
    }

    createFormulaTemplate(formulaKey, description = '') {
        const formula = SpreadsheetFormulaRegistry.getFormula(formulaKey);
        if (!formula) {
            return null;
        }

        return {
            key: formulaKey,
            name: formula.name,
            description: description || formula.description,
            template: formula.example,
            parameters: formula.paramNames.map((name, index) => ({
                name,
                placeholder: `<${name}>`,
                example: this.getParameterExample(formula.params[index])
            })),
            instructions: `Replace placeholders with your cell references or values`,
            example: formula.example
        };
    }

    getParameterExample(paramType) {
        switch (paramType) {
            case 'range':
                return 'A1:A10';
            case 'number':
                return '100';
            case 'rate':
                return '0.05';
            case 'text':
                return '"Sample Text"';
            default:
                return 'value';
        }
    }

    
    countEmptyCells() {
        let count = 0;
        this.data.forEach(row => {
            row.forEach(cell => {
                if (cell === '' || cell === null || cell === undefined) {
                    count++;
                }
            });
        });
        return count;
    }

    calculateStatistics() {
        const stats = {};

        for (let col = 0; col < this.headers.length; col++) {
            const values = [];
            this.data.forEach(row => {
                if (row[col] !== undefined && !isNaN(parseFloat(row[col]))) {
                    values.push(parseFloat(row[col]));
                }
            });

            if (values.length > 0) {
                const sum = values.reduce((a, b) => a + b, 0);
                const avg = sum / values.length;
                const sorted = [...values].sort((a, b) => a - b);

                stats[this.headers[col]] = {
                    count: values.length,
                    sum,
                    average: avg,
                    min: Math.min(...values),
                    max: Math.max(...values),
                    median: sorted[Math.floor(sorted.length / 2)]
                };
            }
        }

        return stats;
    }
}

// ============================================================================
// EXPORT REGISTRIES AND CLASSES
// ============================================================================

export { 
    SpreadsheetFormulaRegistry,
    GraphingCalculator, 
    GraphingCalculatorGame,
    Theme, 
    ExcelChartsRegistry, 
    ChartCanvasRenderer, 
    AnatomicalDiagramsRegistry, 
    AnatomicalShapes,
    AnatomicalDiagramRenderer,
    StereochemistryDiagramsRegistry,
    StereochemistryDiagramRenderer,
    CrossSectionDiagramsRegistry,
    CrossSectionDiagramRenderer,
    CrossSectionShapes,
    AtomProperties,
    MolecularGeometry,
    ChemistryDiagramsRegistry, 
    ChemistryDiagramRenderer, 
    PhysicsDiagramsRegistry, 
    PhysicsDiagramRenderer,
    GeometricShapesRegistry,
    GeometricShapeRenderer,
    GraphRegistry, 
    GraphRenderer,
    EnhancedStatisticalWorkbook,
    StatisticalDistributions,
    DistributionRegistry
};

export default EnhancedSpreadsheetWorkbook;
