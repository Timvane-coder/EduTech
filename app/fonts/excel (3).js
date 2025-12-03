
import { GraphingCalculator, GraphingCalculatorGame,Theme} from './graphing.js'; 
import { ExcelChartsRegistry, ChartCanvasRenderer} from './chart.js';
import { AnatomicalDiagramsRegistry, AnatomicalShapes,AnatomicalDiagramRenderer} from './anatomy.js';
import { StereochemistryDiagramsRegistry,StereochemistryDiagramRenderer,AtomProperties,MolecularGeometry} from './chemistry.js'; 
import { CrossSectionDiagramsRegistry,CrossSectionDiagramRenderer,CrossSectionShapes} from './crossection.js';
import { EnhancedStatisticalWorkbook,StatisticalDistributions,DistributionRegistry} from './workbook.js';
import { GeometricShapesRegistry,GeometricShapeRenderer} from './geometry.js';
import { GraphRegistry,  GraphRenderer} from './graph.js';
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

        // Check headers for medical/anatomical keywords
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

        // Add suggestions based on context
        if (hasCardiovascular) {
            suggestions.push({
                key: 'heartAnatomy',
                priority: 10,
                reason: 'Cardiovascular data detected in headers'
            });
            suggestions.push({
                key: 'circulatorySystem',
                priority: 9,
                reason: 'Blood circulation context identified'
            });
        }

        if (hasRespiratory) {
            suggestions.push({
                key: 'respiratorySystem',
                priority: 10,
                reason: 'Respiratory data detected'
            });
        }

        if (hasDigestive) {
            suggestions.push({
                key: 'digestiveSystem',
                priority: 10,
                reason: 'Digestive system data detected'
            });
        }

        if (hasNervous) {
            suggestions.push({
                key: 'nervousSystem',
                priority: 10,
                reason: 'Nervous system data detected'
            });
            suggestions.push({
                key: 'neuronStructure',
                priority: 8,
                reason: 'Neural anatomy context'
            });
        }

        if (hasSkeletal) {
            suggestions.push({
                key: 'skull',
                priority: 9,
                reason: 'Skeletal data detected'
            });
            suggestions.push({
                key: 'boneStructure',
                priority: 8,
                reason: 'Bone anatomy context'
            });
        }

        // General suggestions if no specific context
        if (suggestions.length === 0) {
            suggestions.push(
                { key: 'heartAnatomy', priority: 7, reason: 'Popular anatomy diagram' },
                { key: 'cellStructure', priority: 6, reason: 'Fundamental biology' },
                { key: 'bloodCells', priority: 5, reason: 'Common medical reference' }
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
            chamberOptions: diagram.chamberOptions || null
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

        // Render the appropriate diagram
        this.renderSpecificDiagram(diagramConfig.key, diagramConfig.options);

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

    // Helper method to render specific diagram types
    renderSpecificDiagram(key, options) {
        const x = 0;
        const y = 0;
        const width = options.width || 800;
        const height = options.height || 600;

        switch (key) {
            case 'heartAnatomy':
                this.diagramRenderer.renderHeartAnatomyDiagram(x, y, width, height, options);
                break;
            case 'circulatorySystem':
                this.diagramRenderer.renderCirculatorySystemDiagram(x, y, width, height, options);
                break;
            case 'bloodVesselComparison':
                this.diagramRenderer.renderBloodVesselComparison(x, y, width, height, options);
                break;
            case 'heartValves':
                this.diagramRenderer.renderHeartValvesDiagram(x, y, width, height, options);
                break;
            case 'respiratorySystem':
                this.diagramRenderer.renderRespiratorySystemDiagram(x, y, width, height, options);
                break;
            case 'digestiveSystem':
                this.diagramRenderer.renderDigestiveSystemDiagram(x, y, width, height, options);
                break;
            case 'digestiveOrgans':
                this.diagramRenderer.renderDigestiveOrganComparison(x, y, width, height);
                break;
            case 'nervousSystem':
                this.diagramRenderer.renderNervousSystemDiagram(x, y, width, height, options);
                break;
            case 'neuronStructure':
                this.diagramRenderer.renderNeuronDiagram(x, y, width, height, options);
                break;
            case 'skull':
            case 'femur':
            case 'ribcage':
            case 'spine':
                this.diagramRenderer.renderSkeletalSystemDiagram(x, y, width, height, options);
                break;
            case 'boneStructure':
                this.diagramRenderer.renderBoneStructureDiagram(x, y, width, height);
                break;
            case 'skeletalMuscle':
                this.diagramRenderer.renderMuscularSystemDiagram(x, y, width, height, options);
                break;
            case 'muscleContraction':
                this.diagramRenderer.renderMuscleContractionDiagram(x, y, width, height);
                break;
            case 'cellStructure':
                this.diagramRenderer.renderCellDiagram(x, y, width, height, options);
                break;
            case 'bloodCells':
                this.diagramRenderer.renderBloodCellsDiagram(x, y, width, height, options);
                break;
            case 'dnaStructure':
                this.diagramRenderer.renderDNADiagram(x, y, width, height, options);
                break;
            case 'skinStructure':
                this.diagramRenderer.renderSkinDiagram(x, y, width, height, options);
                break;
            case 'urinarySystem':
                this.diagramRenderer.renderUrinarySystemDiagram(x, y, width, height, options);
                break;
            case 'kidneyDetail':
                this.diagramRenderer.renderKidneyDetailDiagram(x, y, width, height);
                break;
            case 'eyeAnatomy':
                this.diagramRenderer.renderEyeDiagram(x, y, width, height, options);
                break;
            default:
                throw new Error(`Rendering for diagram '${key}' not implemented`);
        }
    }


    // Helper method for rendering specific anatomical diagrams
renderSpecificAnatomicalDiagram(key, options) {
    const x = 0;
    const y = 0;
    const width = options.width || 800;
    const height = options.height || 600;

    switch (key) {
        case 'heartAnatomy':
            this.diagramRenderer.renderHeartAnatomyDiagram(x, y, width, height, options);
            break;
        case 'circulatorySystem':
            this.diagramRenderer.renderCirculatorySystemDiagram(x, y, width, height, options);
            break;
        case 'bloodVesselComparison':
            this.diagramRenderer.renderBloodVesselComparison(x, y, width, height, options);
            break;
        case 'heartValves':
            this.diagramRenderer.renderHeartValvesDiagram(x, y, width, height, options);
            break;
        case 'respiratorySystem':
            this.diagramRenderer.renderRespiratorySystemDiagram(x, y, width, height, options);
            break;
        case 'digestiveSystem':
            this.diagramRenderer.renderDigestiveSystemDiagram(x, y, width, height, options);
            break;
        case 'digestiveOrgans':
            this.diagramRenderer.renderDigestiveOrganComparison(x, y, width, height);
            break;
        case 'nervousSystem':
            this.diagramRenderer.renderNervousSystemDiagram(x, y, width, height, options);
            break;
        case 'neuronStructure':
            this.diagramRenderer.renderNeuronDiagram(x, y, width, height, options);
            break;
        case 'skull':
        case 'femur':
        case 'ribcage':
        case 'spine':
            this.diagramRenderer.renderSkeletalSystemDiagram(x, y, width, height, options);
            break;
        case 'boneStructure':
            this.diagramRenderer.renderBoneStructureDiagram(x, y, width, height);
            break;
        case 'skeletalMuscle':
            this.diagramRenderer.renderMuscularSystemDiagram(x, y, width, height, options);
            break;
        case 'muscleContraction':
            this.diagramRenderer.renderMuscleContractionDiagram(x, y, width, height);
            break;
        case 'cellStructure':
            this.diagramRenderer.renderCellDiagram(x, y, width, height, options);
            break;
        case 'bloodCells':
            this.diagramRenderer.renderBloodCellsDiagram(x, y, width, height, options);
            break;
        case 'dnaStructure':
            this.diagramRenderer.renderDNADiagram(x, y, width, height, options);
            break;
        case 'skinStructure':
            this.diagramRenderer.renderSkinDiagram(x, y, width, height, options);
            break;
        case 'urinarySystem':
            this.diagramRenderer.renderUrinarySystemDiagram(x, y, width, height, options);
            break;
        case 'kidneyDetail':
            this.diagramRenderer.renderKidneyDetailDiagram(x, y, width, height);
            break;
        case 'eyeAnatomy':
            this.diagramRenderer.renderEyeDiagram(x, y, width, height, options);
            break;
        default:
            throw new Error(`Rendering for anatomical diagram '${key}' not implemented`);
    }
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
            totalDiagrams: Object.values(stats).reduce((sum, cat) => sum + cat.count, 0),
            byCategory: stats,
            diagramsInWorkbook: this.anatomicalDiagrams.length
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
// UPDATED exportToPNG - All Visualization Types Including Geometric
// ============================================================================


exportToPNG(filename = 'spreadsheet.png', options = {}) {
    const {
        includeCharts = false,
        includeAnatomicalDiagrams = false,
        includeCrossSectionDiagrams = false,
        includeStereochemistryDiagrams = false,
        includeGeometricShapes = false,
        includeGraphs = false,
        chartIndices = [],
        anatomicalIndices = [],
        crossSectionIndices = [],
        stereochemistryIndices = [],
        geometricIndices = [],
        graphIndices = []
    } = options;

    let totalHeight = this.height;
    const visualizationsToRender = {
        charts: [],
        anatomical: [],
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

// Update renderVisualizationsToCanvas to include graphs:
renderVisualizationsToCanvas(ctx, visualizations) {
    const {
        charts = [],
        anatomical = [],
        crossSection = [],
        stereochemistry = [],
        geometric = [],
        graphs = []
    } = visualizations;

    const allVisualizations = [
        ...charts.map(c => ({ type: 'chart', data: c, icon: '📊' })),
        ...anatomical.map(d => ({ type: 'anatomical', data: d, icon: '🫀' })),
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
    if (anatomical.length > 0) summaryParts.push(`${anatomical.length} Anatomical`);
    if (crossSection.length > 0) summaryParts.push(`${crossSection.length} Cross-Section`);
    if (stereochemistry.length > 0) summaryParts.push(`${stereochemistry.length} Molecule${stereochemistry.length !== 1 ? 's' : ''}`);
    if (geometric.length > 0) summaryParts.push(`${geometric.length} Geometric Shape${geometric.length !== 1 ? 's' : ''}`);
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
            'anatomical': 'Anatomical Diagram',
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
                // Render mathematical graph
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


// Update exportToExcel to include graphs:
async exportToExcel(filename = 'spreadsheet.xlsx', options = {}) {
    const {
        includeCharts = false,
        includeAnatomicalDiagrams = false,
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


  // ========== VISUALIZATIONS SHEET (All Types Including Graphs) ==========
    const hasVisualizations =
        (includeCharts && this.charts.length > 0) ||
        (includeAnatomicalDiagrams && this.anatomicalDiagrams.length > 0) ||
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

        // Add Anatomical Diagrams
        if (includeAnatomicalDiagrams && this.anatomicalDiagrams.length > 0) {
            console.log('\n🫀 Adding Anatomical Diagrams to Excel...');

            const anatomicalHeaderCell = vizSheet.getCell(`A${currentRow}`);
            anatomicalHeaderCell.value = '🫀 ANATOMICAL DIAGRAMS';
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
                        `Diagram ${i + 1}: ${diagramConfig.title}`,
                        'anatomical',
                        i,
                        { Category: diagramInfo.category }
                    );

                } catch (error) {
                    console.error(`  ❌ Anatomical Diagram ${i + 1} rendering failed:`, error.message);
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
            crossSectionDiagrams: includeCrossSectionDiagrams ? this.crossSectionDiagrams.length : 0,
            stereochemistryDiagrams: includeStereochemistryDiagrams ? this.stereochemistryDiagrams.length : 0,
            geometricShapes: includeGeometricShapes ? this.geometricShapes.length : 0,
            graphs: includeGraphs ? this.graphs.length : 0,
            total:
                (includeCharts ? this.charts.length : 0) +
                (includeAnatomicalDiagrams ? this.anatomicalDiagrams.length : 0) +
                (includeCrossSectionDiagrams ? this.crossSectionDiagrams.length : 0) +
                (includeStereochemistryDiagrams ? this.stereochemistryDiagrams.length : 0) +
                (includeGeometricShapes ? this.geometricShapes.length : 0) +
                (includeGraphs ? this.graphs.length : 0)
        }
    };
}
    

// ============================================================================
// UPDATED generateCombinedReport - All Visualization Types
// ============================================================================

generateCombinedReport() {
    const baseReport = this.generateReport();

    return {
        ...baseReport,
        anatomicalDiagrams: this.listAnatomicalDiagrams(),
        crossSectionDiagrams: this.listCrossSectionDiagrams(),
        stereochemistryDiagrams: this.listStereochemistryDiagrams(),
        geometricShapes: this.listGeometricShapes(),
        statistics: {
            anatomical: this.getAnatomicalDiagramStatistics(),
            crossSection: this.getCrossSectionDiagramStatistics(),
            stereochemistry: this.getStereochemistryDiagramStatistics(),
            geometric: this.getGeometricShapeStatistics()
        },
        visualizations: {
            charts: this.charts.length,
            anatomicalDiagrams: this.anatomicalDiagrams.length,
            crossSectionDiagrams: this.crossSectionDiagrams.length,
            stereochemistryDiagrams: this.stereochemistryDiagrams.length,
            geometricShapes: this.geometricShapes.length,
            total:
                this.charts.length +
                this.anatomicalDiagrams.length +
                this.crossSectionDiagrams.length +
                this.stereochemistryDiagrams.length +
                this.geometricShapes.length
        }
    };
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




// ============================================================================
// UPDATED generateReport() - WITH GRAPHS
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
// UPDATED exportSelectedVisualizations() - WITH GRAPHS
// ============================================================================

async exportSelectedVisualizations(baseFilename, options = {}) {
    const {
        format = 'both',
        includeCharts = false,
        includeAnatomicalDiagrams = false,
        includeCrossSectionDiagrams = false,
        includeStereochemistryDiagrams = false,
        includeGeometricShapes = false,
        includeGraphs = false,
        chartIndices = [],
        anatomicalIndices = [],
        crossSectionIndices = [],
        stereochemistryIndices = [],
        geometricIndices = [],
        graphIndices = []
    } = options;

    const exportOptions = {
        includeCharts,
        includeAnatomicalDiagrams,
        includeCrossSectionDiagrams,
        includeStereochemistryDiagrams,
        includeGeometricShapes,
        includeGraphs,
        chartIndices,
        anatomicalIndices,
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
// UPDATED exportCompleteWorkbook() - WITH GRAPHS
// ============================================================================

async exportCompleteWorkbook(baseFilename = 'complete_workbook', format = 'both') {
    const results = {
        png: null,
        excel: null
    };

    const exportOptions = {
        includeCharts: true,
        includeAnatomicalDiagrams: true,
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
// UPDATED QUICK EXPORT METHODS - WITH GRAPHS
// ============================================================================

async exportWithCharts(filename = 'workbook_with_charts') {
    return this.exportSelectedVisualizations(filename, {
        format: 'both',
        includeCharts: true
    });
}

async exportWithAnatomicalDiagrams(filename = 'workbook_with_anatomical') {
    return this.exportSelectedVisualizations(filename, {
        format: 'both',
        includeAnatomicalDiagrams: true
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

async exportWithAllDiagrams(filename = 'workbook_with_all_diagrams') {
    return this.exportSelectedVisualizations(filename, {
        format: 'both',
        includeAnatomicalDiagrams: true,
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
        includeCrossSectionDiagrams: true,
        includeStereochemistryDiagrams: true,
        includeGeometricShapes: true,
        includeGraphs: true
    });
}

// ============================================================================
// UPDATED getVisualizationSummary() - WITH GRAPHS
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
            this.crossSectionDiagrams.length +
            this.stereochemistryDiagrams.length +
            this.geometricShapes.length +
            this.graphs.length
    };
}

// ============================================================================
// UPDATED hasAnyVisualizations() - WITH GRAPHS
// ============================================================================

hasAnyVisualizations() {
    return (
        this.charts.length > 0 ||
        this.anatomicalDiagrams.length > 0 ||
        this.crossSectionDiagrams.length > 0 ||
        this.stereochemistryDiagrams.length > 0 ||
        this.geometricShapes.length > 0 ||
        this.graphs.length > 0
    );
}

// ============================================================================
// UPDATED getVisualizationTypes() - WITH GRAPHS
// ============================================================================

getVisualizationTypes() {
    const types = [];
    if (this.charts.length > 0) types.push('charts');
    if (this.anatomicalDiagrams.length > 0) types.push('anatomical');
    if (this.crossSectionDiagrams.length > 0) types.push('crossSection');
    if (this.stereochemistryDiagrams.length > 0) types.push('stereochemistry');
    if (this.geometricShapes.length > 0) types.push('geometric');
    if (this.graphs.length > 0) types.push('graphs');
    return types;
}

// ============================================================================
// UPDATED exportAllVisualizationsSeparately() - WITH GRAPHS
// ============================================================================

async exportAllVisualizationsSeparately(folderPath) {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }

    const results = {
        charts: [],
        anatomical: [],
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

    // Export anatomical diagrams
    for (let i = 0; i < this.anatomicalDiagrams.length; i++) {
        try {
            const diagram = this.anatomicalDiagrams[i];
            const filename = `${folderPath}/anatomical_${i + 1}_${diagram.title.replace(/[^a-z0-9]/gi, '_')}.png`;

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
            console.log(`✓ Anatomical ${i + 1}: ${diagram.title}`);
        } catch (error) {
            results.errors.push({ type: 'anatomical', index: i, error: error.message });
            console.error(`✗ Anatomical ${i + 1} failed: ${error.message}`);
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
            crossSectionExported: results.crossSection.length,
            stereochemistryExported: results.stereochemistry.length,
            geometricExported: results.geometric.length,
            graphsExported: results.graphs.length,
            totalExported:
                results.charts.length +
                results.anatomical.length +
                results.crossSection.length +
                results.stereochemistry.length +
                results.geometric.length +
                results.graphs.length,
            errors: results.errors.length
        }
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
    GraphRegistry, 
    GraphRenderer,
    EnhancedStatisticalWorkbook,
    StatisticalDistributions,
    DistributionRegistry
};

export default EnhancedSpreadsheetWorkbook;
