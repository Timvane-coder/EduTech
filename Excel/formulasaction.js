

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


    const EndSection3 = "close"