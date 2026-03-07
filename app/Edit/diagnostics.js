// diagnostic.js — paste and run this alongside your workbook to trace the filter
// It monkey-patches filterContentByParameters to log exactly what goes in and out.

import { EnhancedGeometricMeasurementWorkbook } from './measurement.js';

const workbook = new EnhancedGeometricMeasurementWorkbook({});

// Patch to trace
const original = workbook.filterContentByParameters.bind(workbook);
workbook.filterContentByParameters = function(content, parameters) {
    console.log('\n=== filterContentByParameters called ===');
    console.log('parameters:', JSON.stringify(parameters));
    console.log('content TOP-LEVEL KEYS:', Object.keys(content));
    const result = original(content, parameters);
    console.log('result TOP-LEVEL KEYS:', Object.keys(result));
    console.log('========================================\n');
    return result;
};

// Also patch getGeometricContent to see if filter is even called
const originalGet = workbook.getGeometricContent.bind(workbook);
workbook.getGeometricContent = function(problem) {
    console.log('\n=== getGeometricContent called ===');
    console.log('problem.parameters:', JSON.stringify(problem.parameters));
    console.log('problem.type:', problem.type);
    const result = originalGet(problem);
    console.log('getGeometricContent result keys:', Object.keys(result));
    return result;
};

// Fire a single request
const result = workbook.handleGeometricProblem({
    topic: 'trigonometry_ratios',
    subTopic: 'trigonometry_ratios',
    parameters: {
        specificItems: ['primaryRatios'],
        difficulty: 'detailed',
        focusArea: 'structure'
    },
    requestType: 'content',
    context: {}
});

console.log('\nFINAL content keys:', Object.keys(result.content || workbook.currentContent));
