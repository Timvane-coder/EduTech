



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

const EndSection1 = "close"