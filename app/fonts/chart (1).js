import { createCanvas } from '@napi-rs/canvas';
import ExcelJS from 'exceljs';
import fs from 'fs';
import os from 'os';
import path from 'path';
import readline from 'readline';
import * as math from 'mathjs';
import GIFEncoder from 'gifencoder';
import { PassThrough } from 'stream';



// ============================================================================
// EXCEL CHARTS REGISTRY - Comprehensive Chart Configuration System
// ============================================================================

class ExcelChartsRegistry {
    static charts = {
        // ===== COMPARISON CHARTS =====
        'columnChart': {
            name: 'Column Chart',
            category: 'Comparison',
            description: 'Vertical bars comparing values across categories',
            excel: 'Column Chart',
            dataRequired: ['categories', 'series'],
            usage: 'Best for comparing values across different categories',
            examples: ['Sales by region', 'Monthly revenue', 'Product performance'],
            defaultOptions: {
                title: 'Column Chart',
                xlabel: 'Categories',
                ylabel: 'Values',
                color: '#4472C4',
                alternateColor: '#ED7D31',
                height: 400,
                width: 600,
                showGrid: true,
                showLegend: true,
                backgroundColor: '#ffffff'
            }
        },

        'barChart': {
            name: 'Bar Chart',
            category: 'Comparison',
            description: 'Horizontal bars comparing values across categories',
            excel: 'Bar Chart',
            dataRequired: ['categories', 'series'],
            usage: 'Best for comparing values with long category names',
            examples: ['Country sales', 'Department budgets', 'Team performance'],
            defaultOptions: {
                title: 'Bar Chart',
                xlabel: 'Values',
                ylabel: 'Categories',
                color: '#70AD47',
                alternateColor: '#FFC000',
                height: 400,
                width: 600,
                showGrid: true,
                showLegend: true,
                backgroundColor: '#ffffff'
            }
        },

        'lineChart': {
            name: 'Line Chart',
            category: 'Trend',
            description: 'Lines showing trends over time',
            excel: 'Line Chart',
            dataRequired: ['xValues', 'yValues'],
            usage: 'Best for showing trends and changes over time',
            examples: ['Stock price trends', 'Website traffic', 'Temperature over months'],
            defaultOptions: {
                title: 'Line Chart',
                xlabel: 'Time/Categories',
                ylabel: 'Values',
                lineColor: '#4472C4',
                lineWidth: 2,
                height: 400,
                width: 600,
                showGrid: true,
                showLegend: true,
                smooth: true,
                backgroundColor: '#ffffff',
                pointRadius: 4
            }
        },

        'areaChart': {
            name: 'Area Chart',
            category: 'Trend',
            description: 'Area under line showing cumulative trends',
            excel: 'Area Chart',
            dataRequired: ['xValues', 'yValues'],
            usage: 'Best for showing cumulative trends over time',
            examples: ['Revenue accumulation', 'Market share growth', 'Cumulative sales'],
            defaultOptions: {
                title: 'Area Chart',
                xlabel: 'Time/Categories',
                ylabel: 'Values',
                areaColor: '#4472C4',
                opacity: 0.6,
                height: 400,
                width: 600,
                showGrid: true,
                showLegend: true,
                backgroundColor: '#ffffff'
            }
        },

        'pieChart': {
            name: 'Pie Chart',
            category: 'Composition',
            description: 'Pie slices showing composition as percentages',
            excel: 'Pie Chart',
            dataRequired: ['labels', 'values'],
            usage: 'Best for showing parts of a whole (composition)',
            examples: ['Market share', 'Budget allocation', 'Sales by category'],
            defaultOptions: {
                title: 'Pie Chart',
                colors: ['#4472C4', '#ED7D31', '#A5A5A5', '#FFC000', '#70AD47', '#FF6B6B'],
                height: 400,
                width: 600,
                showLegend: true,
                showPercentage: true,
                explodeSlices: false,
                backgroundColor: '#ffffff',
                borderRadius: 50
            }
        },

        'donutChart': {
            name: 'Donut Chart',
            category: 'Composition',
            description: 'Pie chart with hollow center showing composition',
            excel: 'Doughnut Chart',
            dataRequired: ['labels', 'values'],
            usage: 'Best for showing parts of a whole with center text',
            examples: ['Resource allocation', 'Customer segments', 'Project breakdown'],
            defaultOptions: {
                title: 'Donut Chart',
                colors: ['#4472C4', '#ED7D31', '#A5A5A5', '#FFC000', '#70AD47', '#FF6B6B'],
                height: 400,
                width: 600,
                innerRadius: 60,
                outerRadius: 120,
                showLegend: true,
                showPercentage: true,
                centerText: '',
                backgroundColor: '#ffffff'
            }
        },

        'scatterChart': {
            name: 'Scatter Plot',
            category: 'Correlation',
            description: 'Points showing correlation between two variables',
            excel: 'Scatter Chart',
            dataRequired: ['xValues', 'yValues'],
            usage: 'Best for showing relationships between variables',
            examples: ['Price vs demand', 'Temperature vs sales', 'Height vs weight'],
            defaultOptions: {
                title: 'Scatter Plot',
                xlabel: 'X Axis',
                ylabel: 'Y Axis',
                pointColor: '#4472C4',
                pointSize: 6,
                height: 400,
                width: 600,
                showGrid: true,
                showTrendline: false,
                backgroundColor: '#ffffff'
            }
        },

        'bubbleChart': {
            name: 'Bubble Chart',
            category: 'Correlation',
            description: 'Bubbles showing three variables (x, y, size)',
            excel: 'Bubble Chart',
            dataRequired: ['xValues', 'yValues', 'sizes'],
            usage: 'Best for showing 3-dimensional relationships',
            examples: ['Company analysis (profit, growth, market cap)', 'Product metrics'],
            defaultOptions: {
                title: 'Bubble Chart',
                xlabel: 'X Axis',
                ylabel: 'Y Axis',
                bubbleColor: '#4472C4',
                height: 400,
                width: 600,
                showGrid: true,
                opacity: 0.7,
                backgroundColor: '#ffffff',
                minBubbleSize: 10,
                maxBubbleSize: 100
            }
        },

        'histogramChart': {
            name: 'Histogram',
            category: 'Distribution',
            description: 'Bars showing distribution of continuous data',
            excel: 'Histogram',
            dataRequired: ['values'],
            usage: 'Best for showing data distribution patterns',
            examples: ['Age distribution', 'Test scores', 'Income ranges'],
            defaultOptions: {
                title: 'Histogram',
                xlabel: 'Value Ranges',
                ylabel: 'Frequency',
                barColor: '#4472C4',
                height: 400,
                width: 600,
                bins: 10,
                showGrid: true,
                backgroundColor: '#ffffff'
            }
        },

        'boxPlotChart': {
            name: 'Box Plot',
            category: 'Distribution',
            description: 'Box and whisker plot showing data distribution',
            excel: 'Box & Whisker',
            dataRequired: ['series'],
            usage: 'Best for comparing distributions and identifying outliers',
            examples: ['Test score comparison', 'Salary ranges', 'Performance metrics'],
            defaultOptions: {
                title: 'Box Plot',
                xlabel: 'Categories',
                ylabel: 'Values',
                boxColor: '#4472C4',
                whiskerColor: '#000000',
                height: 400,
                width: 600,
                showGrid: true,
                backgroundColor: '#ffffff'
            }
        },

        'comboChart': {
            name: 'Combo Chart',
            category: 'Comparison',
            description: 'Combination of bar and line showing different data types',
            excel: 'Combo Chart',
            dataRequired: ['categories', 'barSeries', 'lineSeries'],
            usage: 'Best for comparing different metrics on same chart',
            examples: ['Revenue and profit', 'Sales and market share', 'Units and value'],
            defaultOptions: {
                title: 'Combo Chart',
                xlabel: 'Categories',
                ylabel1: 'Primary Values',
                ylabel2: 'Secondary Values',
                barColor: '#4472C4',
                lineColor: '#ED7D31',
                height: 400,
                width: 600,
                showGrid: true,
                showLegend: true,
                backgroundColor: '#ffffff'
            }
        },

        'waterfall': {
            name: 'Waterfall Chart',
            category: 'Comparison',
            description: 'Shows how initial value changes through sequence',
            excel: 'Waterfall Chart',
            dataRequired: ['categories', 'values'],
            usage: 'Best for showing impact of positive/negative changes',
            examples: ['Budget variance', 'Profit breakdown', 'Revenue changes'],
            defaultOptions: {
                title: 'Waterfall Chart',
                xlabel: 'Categories',
                ylabel: 'Values',
                positiveColor: '#70AD47',
                negativeColor: '#FF6B6B',
                totalColor: '#4472C4',
                height: 400,
                width: 600,
                showValues: true,
                backgroundColor: '#ffffff'
            }
        },

        'radarChart': {
            name: 'Radar Chart',
            category: 'Comparison',
            description: 'Multi-axis chart for comparing multiple variables',
            excel: 'Radar Chart',
            dataRequired: ['categories', 'series'],
            usage: 'Best for comparing multiple attributes of entities',
            examples: ['Product features', 'Employee skills', 'Company metrics'],
            defaultOptions: {
                title: 'Radar Chart',
                colors: ['#4472C4', '#ED7D31', '#A5A5A5'],
                height: 400,
                width: 600,
                showGrid: true,
                showLegend: true,
                fillOpacity: 0.2,
                backgroundColor: '#ffffff'
            }
        },

        'gaugeChart': {
            name: 'Gauge Chart',
            category: 'Dashboard',
            description: 'Speedometer-style gauge showing single metric',
            excel: 'Gauge (via conditional formatting)',
            dataRequired: ['value', 'min', 'max'],
            usage: 'Best for displaying KPIs and performance metrics',
            examples: ['Performance score', 'Completion percentage', 'Satisfaction rating'],
            defaultOptions: {
                title: 'Gauge Chart',
                value: 65,
                minValue: 0,
                maxValue: 100,
                unit: '%',
                colors: ['#FF6B6B', '#FFC000', '#70AD47'],
                height: 300,
                width: 400,
                backgroundColor: '#ffffff',
                showValue: true
            }
        },

        'funnelChart': {
            name: 'Funnel Chart',
            category: 'Specialized',
            description: 'Shows sequential stages with decreasing values',
            excel: 'Funnel Chart',
            dataRequired: ['stages', 'values'],
            usage: 'Best for showing conversion rates and process stages',
            examples: ['Sales funnel', 'Customer journey', 'Conversion stages'],
            defaultOptions: {
                title: 'Funnel Chart',
                colors: ['#4472C4', '#5B8FD8', '#70AD47', '#FFC000', '#ED7D31'],
                height: 400,
                width: 600,
                showValues: true,
                showPercentage: true,
                backgroundColor: '#ffffff'
            }
        },

        'treemap': {
            name: 'Treemap',
            category: 'Composition',
            description: 'Hierarchical rectangles showing composition and hierarchy',
            excel: 'Treemap',
            dataRequired: ['labels', 'values', 'parents'],
            usage: 'Best for showing hierarchical composition',
            examples: ['File storage usage', 'Market segments', 'Organizational structure'],
            defaultOptions: {
                title: 'Treemap',
                colors: ['#4472C4', '#ED7D31', '#A5A5A5', '#FFC000', '#70AD47'],
                height: 400,
                width: 600,
                backgroundColor: '#ffffff',
                showLabels: true,
                borderWidth: 2
            }
        },

        'sunburst': {
            name: 'Sunburst Chart',
            category: 'Composition',
            description: 'Multi-level pie chart showing hierarchical composition',
            excel: 'Sunburst Chart',
            dataRequired: ['labels', 'values', 'parents'],
            usage: 'Best for showing multi-level hierarchies',
            examples: ['Organization structure', 'File system', 'Product categories'],
            defaultOptions: {
                title: 'Sunburst Chart',
                colors: ['#4472C4', '#ED7D31', '#A5A5A5', '#FFC000', '#70AD47', '#FF6B6B'],
                height: 500,
                width: 600,
                backgroundColor: '#ffffff',
                showLabels: true
            }
        },

        'splineChart': {
            name: 'Spline Chart',
            category: 'Trend',
            description: 'Smooth curve line chart showing trends',
            excel: 'Line Chart (Spline)',
            dataRequired: ['xValues', 'yValues'],
            usage: 'Best for smooth trend visualization',
            examples: ['Temperature trends', 'Growth curves', 'Performance over time'],
            defaultOptions: {
                title: 'Spline Chart',
                xlabel: 'X Axis',
                ylabel: 'Y Axis',
                lineColor: '#4472C4',
                lineWidth: 2,
                height: 400,
                width: 600,
                showGrid: true,
                smoothness: 0.5,
                backgroundColor: '#ffffff'
            }
        },

        'bubbleMapChart': {
            name: 'Bubble Map',
            category: 'Specialized',
            description: 'Geographic map with bubbles showing regional data',
            excel: 'Map Chart',
            dataRequired: ['regions', 'values'],
            usage: 'Best for geographic comparison',
            examples: ['Sales by region', 'Population density', 'Website traffic by country'],
            defaultOptions: {
                title: 'Bubble Map',
                bubbleColor: '#4472C4',
                height: 400,
                width: 600,
                showGrid: true,
                minBubbleSize: 5,
                maxBubbleSize: 50,
                backgroundColor: '#f0f0f0'
            }
        }
    };

    // Get chart configuration
    static getChart(chartKey) {
        return this.charts[chartKey];
    }

    // Get all charts
    static getAllCharts() {
        return Object.keys(this.charts);
    }

    // Get charts by category
    static getChartsByCategory(category) {
        return Object.entries(this.charts)
            .filter(([_, chart]) => chart.category === category)
            .reduce((acc, [key, chart]) => {
                acc[key] = chart;
                return acc;
            }, {});
    }

    // Get all categories
    static getAllCategories() {
        return [...new Set(Object.values(this.charts).map(c => c.category))];
    }

    // Search charts
    static searchCharts(query) {
        const lowerQuery = query.toLowerCase();
        return Object.entries(this.charts)
            .filter(([key, chart]) =>
                chart.name.toLowerCase().includes(lowerQuery) ||
                chart.description.toLowerCase().includes(lowerQuery) ||
                chart.category.toLowerCase().includes(lowerQuery) ||
                key.toLowerCase().includes(lowerQuery)
            )
            .reduce((acc, [key, chart]) => {
                acc[key] = chart;
                return acc;
            }, {});
    }

    // Get chart statistics
    static getChartStats() {
        const stats = {};
        this.getAllCategories().forEach(category => {
            const charts = this.getChartsByCategory(category);
            stats[category] = {
                count: Object.keys(charts).length,
                charts: Object.keys(charts)
            };
        });
        return stats;
    }

    // Validate data for chart
    static validateChartData(chartKey, data) {
        const chart = this.getChart(chartKey);
        if (!chart) {
            return { valid: false, error: 'Chart not found' };
        }

        const validation = {
            valid: true,
            errors: []
        };

        // Check required data fields
        const missingFields = chart.dataRequired.filter(field => !data[field] || data[field].length === 0);
        if (missingFields.length > 0) {
            validation.errors.push(`Missing required data: ${missingFields.join(', ')}`);
            validation.valid = false;
        }

        // Check data consistency
        if (data.categories && data.series) {
            const categoryCount = data.categories.length;
            const seriesValid = data.series.every(s => s.length === categoryCount);
            if (!seriesValid) {
                validation.errors.push('Series data length must match categories');
                validation.valid = false;
            }
        }

        return validation;
    }
}


// ============================================================================
// CHART CANVAS RENDERER - Creates charts using napi-rs/canvas
// ============================================================================

class ChartCanvasRenderer {
    constructor() {
        this.defaultFont = 'Arial, sans-serif';
        this.defaultFontSize = 12;
    }

    // Render chart to canvas
    renderChart(canvas, ctx, chartKey, data, options = {}) {
        const chart = ExcelChartsRegistry.getChart(chartKey);
        if (!chart) {
            throw new Error(`Chart '${chartKey}' not found`);
        }

        const mergedOptions = { ...chart.defaultOptions, ...options };

        switch (chartKey) {
            case 'columnChart':
                return this.renderColumnChart(ctx, data, mergedOptions, canvas);
            case 'barChart':
                return this.renderBarChart(ctx, data, mergedOptions, canvas);
            case 'lineChart':
                return this.renderLineChart(ctx, data, mergedOptions, canvas);
            case 'areaChart':
                return this.renderAreaChart(ctx, data, mergedOptions, canvas);
            case 'pieChart':
                return this.renderPieChart(ctx, data, mergedOptions, canvas);
            case 'donutChart':
                return this.renderDonutChart(ctx, data, mergedOptions, canvas);
            case 'scatterChart':
                return this.renderScatterChart(ctx, data, mergedOptions, canvas);
            case 'gaugeChart':
                return this.renderGaugeChart(ctx, data, mergedOptions, canvas);
            case 'waterfall':
                return this.renderWaterfall(ctx, data, mergedOptions, canvas);
            case 'radarChart':
                return this.renderRadarChart(ctx, data, mergedOptions, canvas);
            case 'funnelChart':
                return this.renderFunnelChart(ctx, data, mergedOptions, canvas);
            default:
                throw new Error(`Rendering for chart '${chartKey}' not yet implemented`);
        }
    }

    // Column Chart Renderer
    renderColumnChart(ctx, data, options, canvas) {
        const padding = 60;
        const chartWidth = canvas.width - 2 * padding;
        const chartHeight = canvas.height - 2 * padding;

        // Background
        ctx.fillStyle = options.backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Title
        ctx.font = `bold 16px ${this.defaultFont}`;
        ctx.fillStyle = '#000000';
        ctx.textAlign = 'center';
        ctx.fillText(options.title, canvas.width / 2, 30);

        const categories = data.categories || [];
        const values = data.series?.[0] || [];

        if (categories.length === 0 || values.length === 0) {
            ctx.fillText('No data to display', canvas.width / 2, canvas.height / 2);
            return;
        }

        const maxValue = Math.max(...values.map(v => parseFloat(v)));
        const barWidth = (chartWidth / categories.length) * 0.7;
        const spacing = (chartWidth / categories.length) * 0.3;

        // Draw grid lines
        if (options.showGrid) {
            ctx.strokeStyle = '#e0e0e0';
            ctx.lineWidth = 1;
            for (let i = 0; i <= 5; i++) {
                const y = padding + (chartHeight * (1 - i / 5));
                ctx.beginPath();
                ctx.moveTo(padding, y);
                ctx.lineTo(padding + chartWidth, y);
                ctx.stroke();
            }
        }

        // Draw bars
        values.forEach((value, index) => {
            const barHeight = (parseFloat(value) / maxValue) * chartHeight;
            const x = padding + (index * (chartWidth / categories.length)) + spacing / 2;
            const y = padding + chartHeight - barHeight;

            ctx.fillStyle = index % 2 === 0 ? options.color : options.alternateColor;
            ctx.fillRect(x, y, barWidth, barHeight);

            // Value label on bar
            ctx.fillStyle = '#000000';
            ctx.font = `11px ${this.defaultFont}`;
            ctx.textAlign = 'center';
            ctx.fillText(value.toFixed(0), x + barWidth / 2, y - 5);
        });

        // X-axis labels
        ctx.fillStyle = '#666666';
        ctx.font = `11px ${this.defaultFont}`;
        ctx.textAlign = 'center';
        categories.forEach((cat, index) => {
            const x = padding + (index * (chartWidth / categories.length)) + chartWidth / (categories.length * 2);
            ctx.fillText(String(cat).substring(0, 10), x, padding + chartHeight + 20);
        });

        // Axes
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(padding, padding);
        ctx.lineTo(padding, padding + chartHeight);
        ctx.lineTo(padding + chartWidth, padding + chartHeight);
        ctx.stroke();

        // Y-axis label
        ctx.fillStyle = '#666666';
        ctx.font = `11px ${this.defaultFont}`;
        ctx.textAlign = 'right';
        for (let i = 0; i <= 5; i++) {
            const value = (maxValue * i / 5).toFixed(0);
            const y = padding + chartHeight * (1 - i / 5);
            ctx.fillText(value, padding - 10, y + 4);
        }
    }

    // Pie Chart Renderer
    renderPieChart(ctx, data, options, canvas) {
        const padding = 40;
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = Math.min(canvas.width, canvas.height) / 2.5;

        // Background
        ctx.fillStyle = options.backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Title
        ctx.font = `bold 16px ${this.defaultFont}`;
        ctx.fillStyle = '#000000';
        ctx.textAlign = 'center';
        ctx.fillText(options.title, canvas.width / 2, 30);

        const labels = data.labels || [];
        const values = data.values || [];

        if (labels.length === 0 || values.length === 0) {
            ctx.fillText('No data to display', centerX, centerY);
            return;
        }

        const total = values.reduce((sum, v) => sum + parseFloat(v), 0);
        let currentAngle = -Math.PI / 2;

        values.forEach((value, index) => {
            const sliceAngle = (parseFloat(value) / total) * 2 * Math.PI;

            // Draw slice
            ctx.fillStyle = options.colors[index % options.colors.length];
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
            ctx.closePath();
            ctx.fill();

            // Draw border
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 2;
            ctx.stroke();

            // Draw label
            if (options.showPercentage) {
                const labelAngle = currentAngle + sliceAngle / 2;
                const labelRadius = radius * 0.65;
                const labelX = centerX + Math.cos(labelAngle) * labelRadius;
                const labelY = centerY + Math.sin(labelAngle) * labelRadius;

                const percentage = ((parseFloat(value) / total) * 100).toFixed(1);
                ctx.fillStyle = '#ffffff';
                ctx.font = `bold 12px ${this.defaultFont}`;
                ctx.textAlign = 'center';
                ctx.fillText(percentage + '%', labelX, labelY);
            }

            currentAngle += sliceAngle;
        });

        // Draw legend
        if (options.showLegend) {
            const legendX = canvas.width - 200;
            const legendY = 80;
            const legendItemHeight = 20;

            labels.forEach((label, index) => {
                const y = legendY + index * legendItemHeight;

                // Color box
                ctx.fillStyle = options.colors[index % options.colors.length];
                ctx.fillRect(legendX, y, 12, 12);

                // Label
                ctx.fillStyle = '#000000';
                ctx.font = `11px ${this.defaultFont}`;
                ctx.textAlign = 'left';
                ctx.fillText(String(label).substring(0, 15), legendX + 18, y + 10);
            });
        }
    }

    // Line Chart Renderer
    renderLineChart(ctx, data, options, canvas) {
        const padding = 60;
        const chartWidth = canvas.width - 2 * padding;
        const chartHeight = canvas.height - 2 * padding;

        // Background
        ctx.fillStyle = options.backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Title
        ctx.font = `bold 16px ${this.defaultFont}`;
        ctx.fillStyle = '#000000';
        ctx.textAlign = 'center';
        ctx.fillText(options.title, canvas.width / 2, 30);

        const xValues = data.xValues || [];
        const yValues = data.yValues || [];

        if (xValues.length === 0 || yValues.length === 0) {
            ctx.fillText('No data to display', canvas.width / 2, canvas.height / 2);
            return;
        }

        const maxY = Math.max(...yValues.map(v => parseFloat(v)));
        const minY = Math.min(...yValues.map(v => parseFloat(v)));

        // Draw grid
        if (options.showGrid) {
            ctx.strokeStyle = '#e0e0e0';
            ctx.lineWidth = 1;
            for (let i = 0; i <= 5; i++) {
                const y = padding + (chartHeight * i / 5);
                ctx.beginPath();
                ctx.moveTo(padding, y);
                ctx.lineTo(padding + chartWidth, y);
                ctx.stroke();
            }
        }

        // Draw line
        ctx.strokeStyle = options.lineColor;
        ctx.lineWidth = options.lineWidth;
        ctx.beginPath();

        yValues.forEach((value, index) => {
            const x = padding + (index / (yValues.length - 1)) * chartWidth;
            const y = padding + chartHeight - (((parseFloat(value) - minY) / (maxY - minY)) * chartHeight);

            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });

        ctx.stroke();

        // Draw points
        yValues.forEach((value, index) => {
            const x = padding + (index / (yValues.length - 1)) * chartWidth;
            const y = padding + chartHeight - (((parseFloat(value) - minY) / (maxY - minY)) * chartHeight);

            ctx.fillStyle = options.lineColor;
            ctx.beginPath();
            ctx.arc(x, y, options.pointRadius, 0, 2 * Math.PI);
            ctx.fill();
        });

        // Axes
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(padding, padding);
        ctx.lineTo(padding, padding + chartHeight);
        ctx.lineTo(padding + chartWidth, padding + chartHeight);
        ctx.stroke();
    }

    // Gauge Chart Renderer
    renderGaugeChart(ctx, data, options, canvas) {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = 100;

        // Background
        ctx.fillStyle = options.backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Title
        ctx.font = `bold 16px ${this.defaultFont}`;
        ctx.fillStyle = '#000000';
        ctx.textAlign = 'center';
        ctx.fillText(options.title, centerX, 30);

        const value = parseFloat(data.value || options.value);
        const minVal = parseFloat(data.min || options.minValue);
        const maxVal = parseFloat(data.max || options.maxValue);

        // Draw gauge background
        ctx.strokeStyle = '#e0e0e0';
        ctx.lineWidth = 20;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, Math.PI, 2 * Math.PI);
        ctx.stroke();

        // Draw colored gauge sections
        const ranges = [
            { color: options.colors[0], start: 0, end: 0.33 },
            { color: options.colors[1], start: 0.33, end: 0.67 },
            { color: options.colors[2], start: 0.67, end: 1 }
        ];

        ranges.forEach(range => {
            ctx.strokeStyle = range.color;
            ctx.lineWidth = 20;
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, Math.PI + (Math.PI * range.start), Math.PI + (Math.PI * range.end));
            ctx.stroke();
        });

        // Draw needle
        const percentage = (value - minVal) / (maxVal - minVal);
        const angle = Math.PI + (Math.PI * percentage);

        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(centerX + Math.cos(angle) * radius * 0.8, centerY + Math.sin(angle) * radius * 0.8);
        ctx.stroke();

        // Draw center circle
        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.arc(centerX, centerY, 8, 0, 2 * Math.PI);
        ctx.fill();

        // Draw value display
        ctx.fillStyle = '#000000';
        ctx.font = `bold 24px ${this.defaultFont}`;
        ctx.textAlign = 'center';
        ctx.fillText(value.toFixed(1) + options.unit, centerX, centerY + 60);
    }

    // Waterfall Chart Renderer
    renderWaterfall(ctx, data, options, canvas) {
        const padding = 60;
        const chartWidth = canvas.width - 2 * padding;
        const chartHeight = canvas.height - 2 * padding;

        // Background
        ctx.fillStyle = options.backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Title
        ctx.font = `bold 16px ${this.defaultFont}`;
        ctx.fillStyle = '#000000';
        ctx.textAlign = 'center';
        ctx.fillText(options.title, canvas.width / 2, 30);

        const categories = data.categories || [];
        const values = data.values || [];

        if (categories.length === 0 || values.length === 0) {
            ctx.fillText('No data to display', canvas.width / 2, canvas.height / 2);
            return;
        }

        let cumulative = 0;
        const maxVal = Math.max(...values.map(v => Math.abs(parseFloat(v))));

        const barWidth = (chartWidth / (categories.length + 1)) * 0.7;
        const spacing = (chartWidth / (categories.length + 1)) * 0.3;

        // Draw bars
        values.forEach((value, index) => {
            const numValue = parseFloat(value);
            const previousCumulative = cumulative;
            cumulative += numValue;

            const isPositive = numValue >= 0;
            const barHeight = (Math.abs(numValue) / maxVal) * chartHeight;
            const x = padding + spacing / 2 + (index * (chartWidth / (categories.length + 1)));
            const y = isPositive
                ? padding + chartHeight - (((previousCumulative + numValue) / maxVal) * chartHeight)
                : padding + chartHeight - ((previousCumulative / maxVal) * chartHeight);

            // Draw bar
            ctx.fillStyle = isPositive ? options.positiveColor : options.negativeColor;
            ctx.fillRect(x, y, barWidth, barHeight);

            // Draw connector line
            if (index < values.length - 1) {
                ctx.strokeStyle = '#999999';
                ctx.lineWidth = 1;
                ctx.setLineDash([5, 5]);
                ctx.beginPath();
                ctx.moveTo(x + barWidth, padding + chartHeight - ((cumulative / maxVal) * chartHeight));
                const nextX = padding + spacing / 2 + ((index + 1) * (chartWidth / (categories.length + 1)));
                ctx.lineTo(nextX, padding + chartHeight - ((cumulative / maxVal) * chartHeight));
                ctx.stroke();
                ctx.setLineDash([]);
            }

            // Value label
            if (options.showValues) {
                ctx.fillStyle = '#000000';
                ctx.font = `11px ${this.defaultFont}`;
                ctx.textAlign = 'center';
                ctx.fillText(numValue.toFixed(0), x + barWidth / 2, y - 5);
            }
        });

        // X-axis labels
        ctx.fillStyle = '#666666';
        ctx.font = `11px ${this.defaultFont}`;
        ctx.textAlign = 'center';
        categories.forEach((cat, index) => {
            const x = padding + spacing / 2 + (index * (chartWidth / (categories.length + 1))) + barWidth / 2;
            ctx.fillText(String(cat).substring(0, 10), x, padding + chartHeight + 20);
        });

        // Axes
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(padding, padding);
        ctx.lineTo(padding, padding + chartHeight);
        ctx.lineTo(padding + chartWidth, padding + chartHeight);
        ctx.stroke();
    }

    // Radar Chart Renderer
    renderRadarChart(ctx, data, options, canvas) {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = 100;

        // Background
        ctx.fillStyle = options.backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Title
        ctx.font = `bold 16px ${this.defaultFont}`;
        ctx.fillStyle = '#000000';
        ctx.textAlign = 'center';
        ctx.fillText(options.title, centerX, 30);

        const categories = data.categories || [];
        const series = data.series || [];
        const numCategories = categories.length;

        if (numCategories === 0) {
            ctx.fillText('No data to display', centerX, centerY);
            return;
        }

        // Draw grid circles
        if (options.showGrid) {
            ctx.strokeStyle = '#e0e0e0';
            ctx.lineWidth = 1;
            for (let i = 1; i <= 5; i++) {
                ctx.beginPath();
                ctx.arc(centerX, centerY, (radius / 5) * i, 0, 2 * Math.PI);
                ctx.stroke();
            }
        }

        // Draw axes
        ctx.strokeStyle = '#cccccc';
        ctx.lineWidth = 1;
        for (let i = 0; i < numCategories; i++) {
            const angle = (i / numCategories) * 2 * Math.PI;
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(x, y);
            ctx.stroke();
        }

        // Draw data series
        series.forEach((seriesData, seriesIndex) => {
            ctx.fillStyle = options.colors[seriesIndex % options.colors.length];
            ctx.globalAlpha = options.fillOpacity;

            ctx.beginPath();
            seriesData.forEach((value, index) => {
                const angle = (index / numCategories) * 2 * Math.PI;
                const distance = (parseFloat(value) / 100) * radius;
                const x = centerX + Math.cos(angle) * distance;
                const y = centerY + Math.sin(angle) * distance;

                if (index === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            });
            ctx.closePath();
            ctx.fill();

            // Draw outline
            ctx.globalAlpha = 1;
            ctx.strokeStyle = options.colors[seriesIndex % options.colors.length];
            ctx.lineWidth = 2;
            ctx.stroke();
        });

        // Draw labels
        ctx.fillStyle = '#666666';
        ctx.font = `12px ${this.defaultFont}`;
        ctx.textAlign = 'center';
        categories.forEach((cat, index) => {
            const angle = (index / numCategories) * 2 * Math.PI;
            const x = centerX + Math.cos(angle) * (radius + 30);
            const y = centerY + Math.sin(angle) * (radius + 30);
            ctx.fillText(String(cat).substring(0, 12), x, y);
        });

        // Draw legend
        if (options.showLegend) {
            const legendX = canvas.width - 150;
            const legendY = 80;

            series.forEach((_, index) => {
                const y = legendY + index * 20;
                ctx.fillStyle = options.colors[index % options.colors.length];
                ctx.fillRect(legendX, y, 12, 12);

                ctx.fillStyle = '#000000';
                ctx.font = `11px ${this.defaultFont}`;
                ctx.textAlign = 'left';
                ctx.fillText(`Series ${index + 1}`, legendX + 18, y + 10);
            });
        }
    }

    // Funnel Chart Renderer
    renderFunnelChart(ctx, data, options, canvas) {
        const padding = 40;
        const chartWidth = canvas.width - 2 * padding;
        const chartHeight = canvas.height - 2 * padding;

        // Background
        ctx.fillStyle = options.backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Title
        ctx.font = `bold 16px ${this.defaultFont}`;
        ctx.fillStyle = '#000000';
        ctx.textAlign = 'center';
        ctx.fillText(options.title, canvas.width / 2, 30);

        const stages = data.stages || [];
        const values = data.values || [];

        if (stages.length === 0 || values.length === 0) {
            ctx.fillText('No data to display', canvas.width / 2, canvas.height / 2);
            return;
        }

        const maxValue = Math.max(...values.map(v => parseFloat(v)));
        const segmentHeight = chartHeight / stages.length;

        stages.forEach((stage, index) => {
            const value = parseFloat(values[index]);
            const percentage = value / maxValue;
            const width = chartWidth * percentage;
            const x = padding + (chartWidth - width) / 2;
            const y = padding + 40 + (index * segmentHeight);

            // Draw segment
            ctx.fillStyle = options.colors[index % options.colors.length];
            ctx.fillRect(x, y, width, segmentHeight - 5);

            // Draw label
            ctx.fillStyle = '#ffffff';
            ctx.font = `bold 12px ${this.defaultFont}`;
            ctx.textAlign = 'center';
            ctx.fillText(String(stage), padding + chartWidth / 2, y + segmentHeight / 2);

            // Draw value
            if (options.showValues) {
                ctx.fillStyle = '#000000';
                ctx.font = `11px ${this.defaultFont}`;
                ctx.textAlign = 'left';
                ctx.fillText(value.toFixed(0), x + width + 10, y + segmentHeight / 2);
            }

            // Draw percentage
            if (options.showPercentage) {
                const pct = ((value / maxValue) * 100).toFixed(1);
                ctx.fillStyle = '#666666';
                ctx.font = `10px ${this.defaultFont}`;
                ctx.fillText(pct + '%', x - 30, y + segmentHeight / 2);
            }
        });
    }

    // Area Chart Renderer
    renderAreaChart(ctx, data, options, canvas) {
        const padding = 60;
        const chartWidth = canvas.width - 2 * padding;
        const chartHeight = canvas.height - 2 * padding;

        // Background
        ctx.fillStyle = options.backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Title
        ctx.font = `bold 16px ${this.defaultFont}`;
        ctx.fillStyle = '#000000';
        ctx.textAlign = 'center';
        ctx.fillText(options.title, canvas.width / 2, 30);

        const xValues = data.xValues || [];
        const yValues = data.yValues || [];

        if (xValues.length === 0 || yValues.length === 0) {
            ctx.fillText('No data to display', canvas.width / 2, canvas.height / 2);
            return;
        }

        const maxY = Math.max(...yValues.map(v => parseFloat(v)));
        const minY = 0;

        // Draw area
        ctx.fillStyle = options.areaColor;
        ctx.globalAlpha = options.opacity;
        ctx.beginPath();
        ctx.moveTo(padding, padding + chartHeight);

        yValues.forEach((value, index) => {
            const x = padding + (index / (yValues.length - 1)) * chartWidth;
            const y = padding + chartHeight - (((parseFloat(value) - minY) / (maxY - minY)) * chartHeight);
            ctx.lineTo(x, y);
        });

        ctx.lineTo(padding + chartWidth, padding + chartHeight);
        ctx.closePath();
        ctx.fill();

        // Draw line on top
        ctx.globalAlpha = 1;
        ctx.strokeStyle = options.areaColor;
        ctx.lineWidth = 2;
        ctx.beginPath();

        yValues.forEach((value, index) => {
            const x = padding + (index / (yValues.length - 1)) * chartWidth;
            const y = padding + chartHeight - (((parseFloat(value) - minY) / (maxY - minY)) * chartHeight);

            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });

        ctx.stroke();

        // Axes
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(padding, padding);
        ctx.lineTo(padding, padding + chartHeight);
        ctx.lineTo(padding + chartWidth, padding + chartHeight);
        ctx.stroke();
    }

    // Bar Chart Renderer
    renderBarChart(ctx, data, options, canvas) {
        const padding = 60;
        const chartWidth = canvas.width - 2 * padding;
        const chartHeight = canvas.height - 2 * padding;

        // Background
        ctx.fillStyle = options.backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Title
        ctx.font = `bold 16px ${this.defaultFont}`;
        ctx.fillStyle = '#000000';
        ctx.textAlign = 'center';
        ctx.fillText(options.title, canvas.width / 2, 30);

        const categories = data.categories || [];
        const values = data.series?.[0] || [];

        if (categories.length === 0 || values.length === 0) {
            ctx.fillText('No data to display', canvas.width / 2, canvas.height / 2);
            return;
        }

        const maxValue = Math.max(...values.map(v => parseFloat(v)));
        const barHeight = (chartHeight / categories.length) * 0.7;
        const spacing = (chartHeight / categories.length) * 0.3;

        // Draw bars
        values.forEach((value, index) => {
            const barWidth = (parseFloat(value) / maxValue) * chartWidth;
            const y = padding + (index * (chartHeight / categories.length)) + spacing / 2;
            const x = padding;

            ctx.fillStyle = index % 2 === 0 ? options.color : options.alternateColor;
            ctx.fillRect(x, y, barWidth, barHeight);

            // Value label
            ctx.fillStyle = '#000000';
            ctx.font = `11px ${this.defaultFont}`;
            ctx.textAlign = 'left';
            ctx.fillText(value.toFixed(0), x + barWidth + 5, y + barHeight / 2 + 4);
        });

        // Y-axis labels
        ctx.fillStyle = '#666666';
        ctx.font = `11px ${this.defaultFont}`;
        ctx.textAlign = 'right';
        categories.forEach((cat, index) => {
            const y = padding + (index * (chartHeight / categories.length)) + (chartHeight / (categories.length * 2));
            ctx.fillText(String(cat).substring(0, 15), padding - 10, y + 4);
        });

        // Axes
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(padding, padding);
        ctx.lineTo(padding, padding + chartHeight);
        ctx.lineTo(padding + chartWidth, padding + chartHeight);
        ctx.stroke();
    }

    // Scatter Chart Renderer
    renderScatterChart(ctx, data, options, canvas) {
        const padding = 60;
        const chartWidth = canvas.width - 2 * padding;
        const chartHeight = canvas.height - 2 * padding;

        // Background
        ctx.fillStyle = options.backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Title
        ctx.font = `bold 16px ${this.defaultFont}`;
        ctx.fillStyle = '#000000';
        ctx.textAlign = 'center';
        ctx.fillText(options.title, canvas.width / 2, 30);

        const xValues = data.xValues || [];
        const yValues = data.yValues || [];

        if (xValues.length === 0 || yValues.length === 0) {
            ctx.fillText('No data to display', canvas.width / 2, canvas.height / 2);
            return;
        }

        const maxX = Math.max(...xValues.map(v => parseFloat(v)));
        const maxY = Math.max(...yValues.map(v => parseFloat(v)));
        const minX = Math.min(...xValues.map(v => parseFloat(v)));
        const minY = Math.min(...yValues.map(v => parseFloat(v)));

        // Draw grid
        if (options.showGrid) {
            ctx.strokeStyle = '#e0e0e0';
            ctx.lineWidth = 1;
            for (let i = 0; i <= 5; i++) {
                const y = padding + (chartHeight * i / 5);
                ctx.beginPath();
                ctx.moveTo(padding, y);
                ctx.lineTo(padding + chartWidth, y);
                ctx.stroke();

                const x = padding + (chartWidth * i / 5);
                ctx.beginPath();
                ctx.moveTo(x, padding);
                ctx.lineTo(x, padding + chartHeight);
                ctx.stroke();
            }
        }

        // Draw points
        ctx.fillStyle = options.pointColor;
        xValues.forEach((xValue, index) => {
            if (index < yValues.length) {
                const x = padding + (((parseFloat(xValue) - minX) / (maxX - minX)) * chartWidth);
                const y = padding + chartHeight - (((parseFloat(yValues[index]) - minY) / (maxY - minY)) * chartHeight);

                ctx.beginPath();
                ctx.arc(x, y, options.pointSize, 0, 2 * Math.PI);
                ctx.fill();
            }
        });

        // Axes
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(padding, padding);
        ctx.lineTo(padding, padding + chartHeight);
        ctx.lineTo(padding + chartWidth, padding + chartHeight);
        ctx.stroke();
    }

    // Donut Chart Renderer
    renderDonutChart(ctx, data, options, canvas) {
        const padding = 40;
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const outerRadius = 120;
        const innerRadius = options.innerRadius || 60;

        // Background
        ctx.fillStyle = options.backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Title
        ctx.font = `bold 16px ${this.defaultFont}`;
        ctx.fillStyle = '#000000';
        ctx.textAlign = 'center';
        ctx.fillText(options.title, centerX, 30);

        const labels = data.labels || [];
        const values = data.values || [];

        if (labels.length === 0 || values.length === 0) {
            ctx.fillText('No data to display', centerX, centerY);
            return;
        }

        const total = values.reduce((sum, v) => sum + parseFloat(v), 0);
        let currentAngle = -Math.PI / 2;

        values.forEach((value, index) => {
            const sliceAngle = (parseFloat(value) / total) * 2 * Math.PI;

            // Draw donut slice
            ctx.fillStyle = options.colors[index % options.colors.length];
            ctx.beginPath();
            ctx.arc(centerX, centerY, outerRadius, currentAngle, currentAngle + sliceAngle);
            ctx.lineTo(centerX + Math.cos(currentAngle + sliceAngle) * innerRadius, centerY + Math.sin(currentAngle + sliceAngle) * innerRadius);
            ctx.arc(centerX, centerY, innerRadius, currentAngle + sliceAngle, currentAngle, true);
            ctx.closePath();
            ctx.fill();

            // Draw border
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 2;
            ctx.stroke();

            // Draw label
            if (options.showPercentage) {
                const labelAngle = currentAngle + sliceAngle / 2;
                const labelRadius = (outerRadius + innerRadius) / 2;
                const labelX = centerX + Math.cos(labelAngle) * labelRadius;
                const labelY = centerY + Math.sin(labelAngle) * labelRadius;

                const percentage = ((parseFloat(value) / total) * 100).toFixed(1);
                ctx.fillStyle = '#ffffff';
                ctx.font = `bold 12px ${this.defaultFont}`;
                ctx.textAlign = 'center';
                ctx.fillText(percentage + '%', labelX, labelY);
            }

            currentAngle += sliceAngle;
        });

        // Draw center text
        if (options.centerText) {
            ctx.fillStyle = '#000000';
            ctx.font = `bold 14px ${this.defaultFont}`;
            ctx.textAlign = 'center';
            ctx.fillText(options.centerText, centerX, centerY);
        }

        // Draw legend
        if (options.showLegend) {
            const legendX = canvas.width - 180;
            const legendY = 80;

            labels.forEach((label, index) => {
                const y = legendY + index * 20;

                ctx.fillStyle = options.colors[index % options.colors.length];
                ctx.fillRect(legendX, y, 12, 12);

                ctx.fillStyle = '#000000';
                ctx.font = `11px ${this.defaultFont}`;
                ctx.textAlign = 'left';
                ctx.fillText(String(label).substring(0, 15), legendX + 18, y + 10);
            });
        }
    }
}




export {ExcelChartsRegistry,ChartCanvasRenderer};





// ============================================================================
// ADD THIS TO EnhancedSpreadsheetWorkbook CLASS
/**
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

        // Statistical Workbook management
        this.statisticalWorkbook = null;
        this.statisticalAnalyses = [];

        // Unified diagram tracking (for convenience)
        this.allDiagrams = {
            anatomical: this.anatomicalDiagrams,
            crossSection: this.crossSectionDiagrams,
            stereochemistry: this.stereochemistryDiagrams
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



   
// ============================================================================
// UPDATED exportToPNG - Now includes Charts, Anatomical, Cross-Section, and Stereochemistry Diagrams
// ============================================================================

exportToPNG(filename = 'spreadsheet.png', options = {}) {
    const { 
        includeCharts = false, 
        includeAnatomicalDiagrams = false,
        includeCrossSectionDiagrams = false,
        includeStereochemistryDiagrams = false,
        chartIndices = [],
        anatomicalIndices = [],
        crossSectionIndices = [],
        stereochemistryIndices = []
    } = options;

    let totalHeight = this.height;
    const visualizationsToRender = {
        charts: [],
        anatomical: [],
        crossSection: [],
        stereochemistry: []
    };

    // Collect charts to render
    if (includeCharts && this.charts.length > 0) {
        const selectedCharts = chartIndices.length > 0
            ? chartIndices.map(i => this.charts[i]).filter(Boolean)
            : this.charts;
        visualizationsToRender.charts = selectedCharts;
    }

    // Collect anatomical diagrams to render
    if (includeAnatomicalDiagrams && this.anatomicalDiagrams.length > 0) {
        const selectedDiagrams = anatomicalIndices.length > 0
            ? anatomicalIndices.map(i => this.anatomicalDiagrams[i]).filter(Boolean)
            : this.anatomicalDiagrams;
        visualizationsToRender.anatomical = selectedDiagrams;
    }

    // Collect cross-section diagrams to render
    if (includeCrossSectionDiagrams && this.crossSectionDiagrams.length > 0) {
        const selectedCrossSections = crossSectionIndices.length > 0
            ? crossSectionIndices.map(i => this.crossSectionDiagrams[i]).filter(Boolean)
            : this.crossSectionDiagrams;
        visualizationsToRender.crossSection = selectedCrossSections;
    }

    // Collect stereochemistry diagrams to render
    if (includeStereochemistryDiagrams && this.stereochemistryDiagrams.length > 0) {
        const selectedStereochem = stereochemistryIndices.length > 0
            ? stereochemistryIndices.map(i => this.stereochemistryDiagrams[i]).filter(Boolean)
            : this.stereochemistryDiagrams;
        visualizationsToRender.stereochemistry = selectedStereochem;
    }

    // Calculate additional height needed
    const totalVisualizations = 
        visualizationsToRender.charts.length + 
        visualizationsToRender.anatomical.length +
        visualizationsToRender.crossSection.length +
        visualizationsToRender.stereochemistry.length;
    
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
// UNIFIED Visualizations Renderer - All Visualization Types
// ============================================================================

renderVisualizationsToCanvas(ctx, visualizations) {
    const { 
        charts = [], 
        anatomical = [], 
        crossSection = [], 
        stereochemistry = [] 
    } = visualizations;
    
    const allVisualizations = [
        ...charts.map(c => ({ type: 'chart', data: c, icon: '📊' })),
        ...anatomical.map(d => ({ type: 'anatomical', data: d, icon: '🫀' })),
        ...crossSection.map(d => ({ type: 'crossSection', data: d, icon: '🔬' })),
        ...stereochemistry.map(d => ({ type: 'stereochemistry', data: d, icon: '🧪' }))
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
            'stereochemistry': 'Molecular Structure'
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
                // Render chart
                this.chartRenderer.renderChart(
                    tempCanvas,
                    tempCtx,
                    viz.data.key,
                    viz.data.data,
                    { ...viz.data.options, width: itemWidth, height: itemHeight }
                );
            } else if (viz.type === 'anatomical') {
                // Render anatomical diagram
                this.diagramRenderer.canvas = tempCanvas;
                this.diagramRenderer.ctx = tempCtx;
                this.renderSpecificAnatomicalDiagram(viz.data.key, {
                    ...viz.data.options,
                    width: itemWidth,
                    height: itemHeight
                });
            } else if (viz.type === 'crossSection') {
                // Render cross-section diagram
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
                // Render stereochemistry diagram
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

// Helper method for rendering specific anatomical diagrams


// ============================================================================
// UPDATED exportToExcel - All Diagram Types
// ============================================================================

async exportToExcel(filename = 'spreadsheet.xlsx', options = {}) {
    const { 
        includeCharts = false,
        includeAnatomicalDiagrams = false,
        includeCrossSectionDiagrams = false,
        includeStereochemistryDiagrams = false
    } = options;
    
    const workbook = new ExcelJS.Workbook();
    workbook.creator = this.author;
    workbook.created = this.createdDate;
    workbook.modified = this.lastModified;
    workbook.lastPrinted = new Date();

    const worksheet = workbook.addWorksheet(this.sheetName);
    worksheet.properties.defaultRowHeight = 20;

    // Add headers
    const headerRow = worksheet.addRow(this.headers);
    headerRow.font = {
        bold: true,
        color: { argb: 'FFFFFFFF' },
        size: 12,
        name: 'Calibri'
    };
    headerRow.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FF4472C4' }
    };
    headerRow.alignment = {
        vertical: 'middle',
        horizontal: 'center'
    };
    headerRow.height = 30;

    headerRow.eachCell(cell => {
        cell.border = {
            top: { style: 'medium', color: { argb: 'FF2E5C8A' } },
            left: { style: 'thin', color: { argb: 'FF2E5C8A' } },
            bottom: { style: 'medium', color: { argb: 'FF2E5C8A' } },
            right: { style: 'thin', color: { argb: 'FF2E5C8A' } }
        };
    });

    // Add data rows
    this.data.forEach((row, rowIndex) => {
        const excelRow = worksheet.addRow(row);
        excelRow.height = 22;

        row.forEach((cellValue, colIndex) => {
            const cellRef = `${this.columnToLetter(colIndex)}${rowIndex + 1}`;
            const cell = excelRow.getCell(colIndex + 1);

            if (this.formulas[cellRef]) {
                cell.fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: { argb: 'FFFFF2CC' }
                };
                cell.font = { bold: true, color: { argb: 'FF000000' } };
                cell.note = {
                    texts: [
                        { font: { bold: true, size: 10 }, text: 'Formula: ' },
                        { font: { size: 10 }, text: this.formulas[cellRef].formula }
                    ],
                    margins: { insetmode: 'auto', inset: [5, 5, 5, 5] }
                };
            } else if (this.calculations[cellRef] !== undefined) {
                cell.fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: { argb: 'FFE2EFDA' }
                };
                cell.font = { italic: true };
            }

            if (typeof cellValue === 'number') {
                cell.numFmt = cellValue % 1 === 0 ? '#,##0' : '#,##0.00';
                cell.alignment = { horizontal: 'right', vertical: 'middle' };
            } else {
                cell.alignment = { horizontal: 'left', vertical: 'middle' };
            }

            cell.border = {
                top: { style: 'thin', color: { argb: 'FFD0D0D0' } },
                left: { style: 'thin', color: { argb: 'FFD0D0D0' } },
                bottom: { style: 'thin', color: { argb: 'FFD0D0D0' } },
                right: { style: 'thin', color: { argb: 'FFD0D0D0' } }
            };
        });

        if (rowIndex % 2 === 1) {
            excelRow.eachCell(cell => {
                if (!cell.fill || !cell.fill.fgColor || cell.fill.fgColor.argb === 'FFFFFFFF') {
                    cell.fill = {
                        type: 'pattern',
                        pattern: 'solid',
                        fgColor: { argb: 'FFF8F8F8' }
                    };
                }
            });
        }
    });

    // Auto-fit columns
    worksheet.columns.forEach((column, index) => {
        let maxLength = this.headers[index]?.toString().length || 10;
        column.eachCell({ includeEmpty: false }, cell => {
            const cellLength = cell.value ? cell.value.toString().length : 0;
            maxLength = Math.max(maxLength, cellLength);
        });
        column.width = Math.min(Math.max(maxLength + 3, 12), 45);
    });

    worksheet.views = [{ state: 'frozen', xSplit: 0, ySplit: 1 }];

    // ========== FORMULAS SHEET ==========
    if (Object.keys(this.formulas).length > 0) {
        const formulaSheet = workbook.addWorksheet('📋 Formulas');

        const formulaHeaderRow = formulaSheet.addRow([
            'Cell', 'Formula', 'Type', 'Category', 'Description', 'Applied'
        ]);

        formulaHeaderRow.font = { bold: true, color: { argb: 'FFFFFFFF' }, size: 11 };
        formulaHeaderRow.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'FF70AD47' }
        };
        formulaHeaderRow.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
        formulaHeaderRow.height = 30;

        Object.entries(this.formulas).forEach(([cell, data], index) => {
            const formula = SpreadsheetFormulaRegistry.getFormula(data.formulaKey);
            const formulaRow = formulaSheet.addRow([
                cell,
                data.formula,
                formula?.name || data.formulaKey,
                formula?.category || 'Unknown',
                formula?.description || '',
                data.timestamp.toLocaleString()
            ]);

            formulaRow.alignment = { vertical: 'top', wrapText: true };

            if (index % 2 === 1) {
                formulaRow.eachCell(cell => {
                    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF0F0F0' } };
                });
            }
        });

        formulaSheet.columns = [
            { width: 15 }, { width: 35 }, { width: 25 },
            { width: 20 }, { width: 45 }, { width: 22 }
        ];
    }

    // ========== VISUALIZATIONS SHEET (All Types) ==========
    const hasVisualizations = 
        (includeCharts && this.charts.length > 0) || 
        (includeAnatomicalDiagrams && this.anatomicalDiagrams.length > 0) ||
        (includeCrossSectionDiagrams && this.crossSectionDiagrams.length > 0) ||
        (includeStereochemistryDiagrams && this.stereochemistryDiagrams.length > 0);

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
                    'stereochemistry': 'FF9B59B6'
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
            
            // Section header
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
                    // Render chart to canvas
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

                    // Add to Excel
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
            
            // Section header
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
                    // Render diagram to canvas
                    const diagramWidth = diagramConfig.options.width || 800;
                    const diagramHeight = diagramConfig.options.height || 700;
                    const diagramCanvas = createCanvas(diagramWidth, diagramHeight);
                    const diagramCtx = diagramCanvas.getContext('2d');

                    this.diagramRenderer.canvas = diagramCanvas;
                    this.diagramRenderer.ctx = diagramCtx;
                    
                    this.renderSpecificAnatomicalDiagram(diagramConfig.key, diagramConfig.options);

                    const diagramInfo = AnatomicalDiagramsRegistry.getDiagram(diagramConfig.key);

                    // Add to Excel
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
            
            // Section header
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
                    // Render diagram to canvas
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

                    // Add to Excel
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
            
            // Section header
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
                    // Render diagram to canvas
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

                    // Add to Excel with molecular info
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
            total: 
                (includeCharts ? this.charts.length : 0) +
                (includeAnatomicalDiagrams ? this.anatomicalDiagrams.length : 0) +
                (includeCrossSectionDiagrams ? this.crossSectionDiagrams.length : 0) +
                (includeStereochemistryDiagrams ? this.stereochemistryDiagrams.length : 0)
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
        statistics: {
            anatomical: this.getAnatomicalDiagramStatistics(),
            crossSection: this.getCrossSectionDiagramStatistics(),
            stereochemistry: this.getStereochemistryDiagramStatistics()
        },
        visualizations: {
            charts: this.charts.length,
            anatomicalDiagrams: this.anatomicalDiagrams.length,
            crossSectionDiagrams: this.crossSectionDiagrams.length,
            stereochemistryDiagrams: this.stereochemistryDiagrams.length,
            total: 
                this.charts.length + 
                this.anatomicalDiagrams.length +
                this.crossSectionDiagrams.length +
                this.stereochemistryDiagrams.length
        }
    };
}

// ============================================================================
// UPDATED generateReport - Complete Metadata
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
                total: 
                    this.anatomicalDiagrams.length +
                    this.crossSectionDiagrams.length +
                    this.stereochemistryDiagrams.length
            }
        },
        history: {
            entries: this.history.length,
            recentActions: this.history.slice(-10)
        }
    };
}

// ============================================================================
// EXPORT CONVENIENCE METHODS
// ============================================================================

// Export with all visualizations
async exportCompleteWorkbook(baseFilename = 'complete_workbook', format = 'both') {
    const results = {
        png: null,
        excel: null
    };

    const exportOptions = {
        includeCharts: true,
        includeAnatomicalDiagrams: true,
        includeCrossSectionDiagrams: true,
        includeStereochemistryDiagrams: true
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

// Export specific visualization types
async exportSelectedVisualizations(baseFilename, options = {}) {
    const {
        format = 'both',
        includeCharts = false,
        includeAnatomicalDiagrams = false,
        includeCrossSectionDiagrams = false,
        includeStereochemistryDiagrams = false,
        chartIndices = [],
        anatomicalIndices = [],
        crossSectionIndices = [],
        stereochemistryIndices = []
    } = options;

    const exportOptions = {
        includeCharts,
        includeAnatomicalDiagrams,
        includeCrossSectionDiagrams,
        includeStereochemistryDiagrams,
        chartIndices,
        anatomicalIndices,
        crossSectionIndices,
        stereochemistryIndices
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

// Quick export methods
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

async exportWithAllDiagrams(filename = 'workbook_with_all_diagrams') {
    return this.exportSelectedVisualizations(filename, {
        format: 'both',
        includeAnatomicalDiagrams: true,
        includeCrossSectionDiagrams: true,
        includeStereochemistryDiagrams: true
    });
}

// ============================================================================
// VISUALIZATION SUMMARY METHODS
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
        total: 
            this.charts.length + 
            this.anatomicalDiagrams.length +
            this.crossSectionDiagrams.length +
            this.stereochemistryDiagrams.length
    };
}

hasAnyVisualizations() {
    return (
        this.charts.length > 0 ||
        this.anatomicalDiagrams.length > 0 ||
        this.crossSectionDiagrams.length > 0 ||
        this.stereochemistryDiagrams.length > 0
    );
}

getVisualizationTypes() {
    const types = [];
    if (this.charts.length > 0) types.push('charts');
    if (this.anatomicalDiagrams.length > 0) types.push('anatomical');
    if (this.crossSectionDiagrams.length > 0) types.push('crossSection');
    if (this.stereochemistryDiagrams.length > 0) types.push('stereochemistry');
    return types;
}

// ============================================================================
// BATCH EXPORT METHODS
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

    console.log('\n✓ Export complete!\n');

    return {
        folder: folderPath,
        results,
        summary: {
            chartsExported: results.charts.length,
            anatomicalExported: results.anatomical.length,
            crossSectionExported: results.crossSection.length,
            stereochemistryExported: results.stereochemistry.length,
            totalExported: 
                results.charts.length + 
                results.anatomical.length +
                results.crossSection.length +
                results.stereochemistry.length,
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
    EnhancedStatisticalWorkbook,
    StatisticalDistributions,
    DistributionRegistry
};

*/
