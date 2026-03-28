
// ==================== GEOMETRY GENERATORS WITH DIAGRAMS ====================

generateRelatedAnglesDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Complementary Angles',
        problem: 'Two angles are complementary. One angle measures 35°. Find the other angle and verify they form a right angle together.',
        parameters: { type: 'complementary', angle1: 35 },
        type: 'angles',
        subparts: [
            'Given: Two complementary angles, one is 35°',
            'Definition: Complementary angles sum to 90°',
            'Let other angle = x',
            'Equation: 35° + x = 90°',
            'x = 90° - 35°',
            'x = 55°',
            'Verification: 35° + 55° = 90° ✓',
            'Together they form a right angle (90°)',
            'Answer: The other angle is 55°'
        ],
        helper: 'Complementary angles sum to 90° (form a right angle). To find complement: 90° - given angle',
        solution: 'The other angle is 55°',
        realWorldContext: 'Right angle relationships in construction, carpentry, corner designs',
        diagramInfo: {
            type: 'angles',
            renderType: 'complementary',
            angle1: 35,
            angle2: 55,
            showLabels: true,
            showMeasurements: true,
            showRightAngle: true
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(800, 600);
                const ctx = canvas.getContext('2d');
                
                // Clear background
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(0, 0, 800, 600);
                
                // Title
                ctx.fillStyle = '#000000';
                ctx.font = 'bold 20px Arial';
                ctx.textAlign = 'center';
                ctx.fillText('Complementary Angles', 400, 40);
                
                const centerX = 400;
                const centerY = 350;
                const radius = 150;
                
                // Draw base horizontal line
                ctx.strokeStyle = '#424242';
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.moveTo(centerX - radius - 50, centerY);
                ctx.lineTo(centerX + radius + 50, centerY);
                ctx.stroke();
                
                // Draw vertical line (90° reference)
                ctx.beginPath();
                ctx.moveTo(centerX, centerY);
                ctx.lineTo(centerX, centerY - radius - 50);
                ctx.stroke();
                
                // Draw dividing line for the two angles
                const angle1Rad = (this.diagramInfo.angle1 * Math.PI) / 180;
                const divideX = centerX + Math.cos(Math.PI/2 - angle1Rad) * (radius + 30);
                const divideY = centerY - Math.sin(Math.PI/2 - angle1Rad) * (radius + 30);
                
                ctx.strokeStyle = '#1976D2';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(centerX, centerY);
                ctx.lineTo(divideX, divideY);
                ctx.stroke();
                
                // Draw arc for angle 1 (35°)
                ctx.strokeStyle = '#D32F2F';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(centerX, centerY, radius * 0.4, -Math.PI/2, -Math.PI/2 + angle1Rad, false);
                ctx.stroke();
                
                // Draw arc for angle 2 (55°)
                ctx.strokeStyle = '#388E3C';
                ctx.beginPath();
                ctx.arc(centerX, centerY, radius * 0.5, -Math.PI/2 + angle1Rad, 0, false);
                ctx.stroke();
                
                // Right angle symbol
                const squareSize = 20;
                ctx.strokeStyle = '#000000';
                ctx.lineWidth = 2;
                ctx.strokeRect(centerX, centerY - squareSize, squareSize, squareSize);
                
                // Labels
                ctx.fillStyle = '#D32F2F';
                ctx.font = 'bold 16px Arial';
                ctx.textAlign = 'center';
                ctx.fillText(`∠1 = ${this.diagramInfo.angle1}°`, centerX - 80, centerY - 60);
                
                ctx.fillStyle = '#388E3C';
                ctx.fillText(`∠2 = ${this.diagramInfo.angle2}°`, centerX + 80, centerY - 100);
                
                // Sum label
                ctx.fillStyle = '#000000';
                ctx.font = '14px Arial';
                ctx.fillText(`∠1 + ∠2 = 90°`, centerX, centerY + 100);
                ctx.fillText('(Complementary Angles)', centerX, centerY + 120);
                
                const buffer = canvas.toBuffer('image/png');
                const filename = `angles_complementary_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                
                return {
                    success: true,
                    filename: filename,
                    path: `./${filename}`
                };
            } catch (error) {
                return {
                    success: false,
                    error: error.message
                };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Supplementary Angles',
        problem: 'Two angles are supplementary. One angle is twice the other. Find both angles.',
        parameters: { type: 'supplementary', relationship: 'twice' },
        type: 'angles',
        subparts: [
            'Given: Supplementary angles, one is twice the other',
            'Definition: Supplementary angles sum to 180°',
            'Let smaller angle = x',
            'Larger angle = 2x',
            'Equation: x + 2x = 180°',
            '3x = 180°',
            'x = 60°',
            'Smaller angle = 60°',
            'Larger angle = 2(60°) = 120°',
            'Verification: 60° + 120° = 180° ✓',
            'Answer: 60° and 120°'
        ],
        helper: 'Supplementary angles sum to 180° (form a straight line). Set up equation with given relationship',
        solution: 'The angles are 60° and 120°',
        realWorldContext: 'Linear pairs, straight angles in roads, adjacent angles on a line',
        diagramInfo: {
            type: 'angles',
            renderType: 'supplementary',
            angle1: 60,
            angle2: 120,
            showLabels: true,
            showMeasurements: true,
            showStraightLine: true
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(800, 600);
                const ctx = canvas.getContext('2d');
                
                // Clear background
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(0, 0, 800, 600);
                
                // Title
                ctx.fillStyle = '#000000';
                ctx.font = 'bold 20px Arial';
                ctx.textAlign = 'center';
                ctx.fillText('Supplementary Angles', 400, 40);
                
                const centerX = 400;
                const centerY = 300;
                const radius = 150;
                
                // Draw straight line (180° line)
                ctx.strokeStyle = '#424242';
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.moveTo(centerX - radius - 50, centerY);
                ctx.lineTo(centerX + radius + 50, centerY);
                ctx.stroke();
                
                // Draw dividing line
                const angle1Rad = (this.diagramInfo.angle1 * Math.PI) / 180;
                const divideX = centerX + Math.cos(Math.PI - angle1Rad) * (radius + 30);
                const divideY = centerY - Math.sin(Math.PI - angle1Rad) * (radius + 30);
                
                ctx.strokeStyle = '#1976D2';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(centerX, centerY);
                ctx.lineTo(divideX, divideY);
                ctx.stroke();
                
                // Draw arc for angle 1 (60°)
                ctx.strokeStyle = '#D32F2F';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(centerX, centerY, radius * 0.5, Math.PI - angle1Rad, Math.PI, false);
                ctx.stroke();
                
                // Draw arc for angle 2 (120°)
                const angle2Rad = (this.diagramInfo.angle2 * Math.PI) / 180;
                ctx.strokeStyle = '#388E3C';
                ctx.beginPath();
                ctx.arc(centerX, centerY, radius * 0.6, 0, angle2Rad, false);
                ctx.stroke();
                
                // Labels
                ctx.fillStyle = '#D32F2F';
                ctx.font = 'bold 16px Arial';
                ctx.textAlign = 'center';
                ctx.fillText(`∠1 = ${this.diagramInfo.angle1}°`, centerX - 80, centerY - 80);
                
                ctx.fillStyle = '#388E3C';
                ctx.fillText(`∠2 = ${this.diagramInfo.angle2}°`, centerX + 100, centerY - 80);
                
                // Sum label
                ctx.fillStyle = '#000000';
                ctx.font = '14px Arial';
                ctx.fillText(`∠1 + ∠2 = 180°`, centerX, centerY + 80);
                ctx.fillText('(Supplementary Angles)', centerX, centerY + 100);
                ctx.fillText('Form a straight line', centerX, centerY + 120);
                
                const buffer = canvas.toBuffer('image/png');
                const filename = `angles_supplementary_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                
                return {
                    success: true,
                    filename: filename,
                    path: `./${filename}`
                };
            } catch (error) {
                return {
                    success: false,
                    error: error.message
                };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Vertical Angles',
        problem: 'Two lines intersect. One angle formed is 3x + 20° and its vertical angle is 5x - 10°. Find x and all four angle measures.',
        parameters: { type: 'vertical', expressions: true },
        type: 'angles',
        subparts: [
            'Given: Vertical angles (3x + 20°) and (5x - 10°)',
            'Property: Vertical angles are equal',
            'Set up equation: 3x + 20 = 5x - 10',
            'Solve for x:',
            '20 + 10 = 5x - 3x',
            '30 = 2x',
            'x = 15',
            'Find angle measure:',
            'Angle 1: 3x + 20 = 3(15) + 20 = 45 + 20 = 65°',
            'Verify with other expression:',
            'Angle 2: 5x - 10 = 5(15) - 10 = 75 - 10 = 65° ✓',
            'Find other pair of vertical angles:',
            'These angles are supplementary to 65°',
            'Other angles: 180° - 65° = 115° each',
            'All four angles: 65°, 115°, 65°, 115°',
            'Check: 65° + 115° + 65° + 115° = 360° ✓'
        ],
        helper: 'Vertical angles are equal (formed by intersecting lines). Adjacent angles are supplementary (sum to 180°)',
        solution: 'x = 15, angles are 65°, 115°, 65°, 115°',
        realWorldContext: 'Intersecting streets, structural designs, X-shaped crossings',
        diagramInfo: {
            type: 'angles',
            renderType: 'vertical',
            angle1: 65,
            angle2: 115,
            showLabels: true,
            showMeasurements: true,
            showIntersection: true
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(800, 600);
                const ctx = canvas.getContext('2d');
                
                // Clear background
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(0, 0, 800, 600);
                
                // Title
                ctx.fillStyle = '#000000';
                ctx.font = 'bold 20px Arial';
                ctx.textAlign = 'center';
                ctx.fillText('Vertical Angles (Intersecting Lines)', 400, 40);
                
                const centerX = 400;
                const centerY = 300;
                const lineLength = 180;
                
                // Draw first line (slightly tilted)
                const tilt1 = 15 * Math.PI / 180;
                ctx.strokeStyle = '#424242';
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.moveTo(centerX - Math.cos(tilt1) * lineLength, centerY + Math.sin(tilt1) * lineLength);
                ctx.lineTo(centerX + Math.cos(tilt1) * lineLength, centerY - Math.sin(tilt1) * lineLength);
                ctx.stroke();
                
                // Draw second line (perpendicular-ish)
                const tilt2 = 75 * Math.PI / 180;
                ctx.beginPath();
                ctx.moveTo(centerX - Math.cos(tilt2) * lineLength, centerY + Math.sin(tilt2) * lineLength);
                ctx.lineTo(centerX + Math.cos(tilt2) * lineLength, centerY - Math.sin(tilt2) * lineLength);
                ctx.stroke();
                
                // Draw center point
                ctx.fillStyle = '#1976D2';
                ctx.beginPath();
                ctx.arc(centerX, centerY, 5, 0, 2 * Math.PI);
                ctx.fill();
                
                // Draw angle arcs
                const arcRadius = 60;
                
                // Angle 1 (top right) - 65°
                ctx.strokeStyle = '#D32F2F';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(centerX, centerY, arcRadius, -tilt1, tilt2, false);
                ctx.stroke();
                
                // Angle 2 (bottom right) - 115°
                ctx.strokeStyle = '#388E3C';
                ctx.beginPath();
                ctx.arc(centerX, centerY, arcRadius * 0.8, tilt2, Math.PI - tilt1, false);
                ctx.stroke();
                
                // Angle 3 (bottom left) - 65° (vertical to angle 1)
                ctx.strokeStyle = '#D32F2F';
                ctx.beginPath();
                ctx.arc(centerX, centerY, arcRadius, Math.PI - tilt1, Math.PI + tilt2, false);
                ctx.stroke();
                
                // Angle 4 (top left) - 115° (vertical to angle 2)
                ctx.strokeStyle = '#388E3C';
                ctx.beginPath();
                ctx.arc(centerX, centerY, arcRadius * 0.8, Math.PI + tilt2, 2 * Math.PI - tilt1, false);
                ctx.stroke();
                
                // Labels
                ctx.fillStyle = '#D32F2F';
                ctx.font = 'bold 16px Arial';
                ctx.textAlign = 'center';
                ctx.fillText(`∠1 = ${this.diagramInfo.angle1}°`, centerX + 100, centerY - 70);
                ctx.fillText(`∠3 = ${this.diagramInfo.angle1}°`, centerX - 100, centerY + 90);
                
                ctx.fillStyle = '#388E3C';
                ctx.fillText(`∠2 = ${this.diagramInfo.angle2}°`, centerX + 100, centerY + 90);
                ctx.fillText(`∠4 = ${this.diagramInfo.angle2}°`, centerX - 100, centerY - 70);
                
                // Properties
                ctx.fillStyle = '#000000';
                ctx.font = '14px Arial';
                ctx.fillText('Vertical angles are equal: ∠1 = ∠3, ∠2 = ∠4', centerX, 500);
                ctx.fillText('Adjacent angles are supplementary: ∠1 + ∠2 = 180°', centerX, 520);
                
                const buffer = canvas.toBuffer('image/png');
                const filename = `angles_vertical_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                
                return {
                    success: true,
                    filename: filename,
                    path: `./${filename}`
                };
            } catch (error) {
                return {
                    success: false,
                    error: error.message
                };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Adjacent Angles on Straight Line',
        problem: 'Three angles lie on a straight line with measures 2x, 3x, and 4x. Find each angle measure.',
        parameters: { type: 'straight_line', count: 3 },
        type: 'angles',
        subparts: [
            'Given: Three angles on straight line: 2x, 3x, 4x',
            'Property: Angles on straight line sum to 180°',
            'Equation: 2x + 3x + 4x = 180°',
            '9x = 180°',
            'x = 20°',
            'Find each angle:',
            'First angle: 2x = 2(20°) = 40°',
            'Second angle: 3x = 3(20°) = 60°',
            'Third angle: 4x = 4(20°) = 80°',
            'Verification: 40° + 60° + 80° = 180° ✓',
            'Answer: 40°, 60°, and 80°'
        ],
        helper: 'Angles on a straight line sum to 180°. Set up equation, solve for variable, then find each angle',
        solution: 'The angles are 40°, 60°, and 80°',
        realWorldContext: 'Dividing straight angles, beam supports, linear partitions',
        diagramInfo: {
            type: 'angles',
            renderType: 'straight_line',
            angles: [40, 60, 80],
            showLabels: true,
            showMeasurements: true
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(800, 600);
                const ctx = canvas.getContext('2d');
                
                // Clear background
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(0, 0, 800, 600);
                
                // Title
                ctx.fillStyle = '#000000';
                ctx.font = 'bold 20px Arial';
                ctx.textAlign = 'center';
                ctx.fillText('Adjacent Angles on a Straight Line', 400, 40);
                
                const centerX = 400;
                const centerY = 300;
                const radius = 150;
                
                // Draw straight line
                ctx.strokeStyle = '#424242';
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.moveTo(centerX - radius - 50, centerY);
                ctx.lineTo(centerX + radius + 50, centerY);
                ctx.stroke();
                
                // Calculate cumulative angles
                const angles = this.diagramInfo.angles;
                let cumulative = 0;
                const colors = ['#D32F2F', '#388E3C', '#1976D2'];
                
                // Draw rays and arcs
                angles.forEach((angle, index) => {
                    const angleRad = (angle * Math.PI) / 180;
                    const nextCumulative = cumulative + angleRad;
                    
                    // Draw ray
                    const rayX = centerX + Math.cos(Math.PI - nextCumulative) * (radius + 30);
                    const rayY = centerY - Math.sin(Math.PI - nextCumulative) * (radius + 30);
                    
                    if (index < angles.length - 1) {  // Don't draw last ray (it's the end of straight line)
                        ctx.strokeStyle = '#1976D2';
                        ctx.lineWidth = 2;
                        ctx.beginPath();
                        ctx.moveTo(centerX, centerY);
                        ctx.lineTo(rayX, rayY);
                        ctx.stroke();
                    }
                    
                    // Draw arc
                    ctx.strokeStyle = colors[index];
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.arc(centerX, centerY, radius * (0.5 + index * 0.15), 
                            Math.PI - nextCumulative, Math.PI - cumulative, true);
                    ctx.stroke();
                    
                    // Label
                    const labelAngle = Math.PI - (cumulative + angleRad / 2);
                    const labelRadius = radius * (0.5 + index * 0.15) + 30;
                    const labelX = centerX + Math.cos(labelAngle) * labelRadius;
                    const labelY = centerY - Math.sin(labelAngle) * labelRadius;
                    
                    ctx.fillStyle = colors[index];
                    ctx.font = 'bold 16px Arial';
                    ctx.textAlign = 'center';
                    ctx.fillText(`∠${index + 1} = ${angle}°`, labelX, labelY);
                    
                    cumulative = nextCumulative;
                });
                
                // Sum label
                ctx.fillStyle = '#000000';
                ctx.font = '14px Arial';
                ctx.fillText('Sum of angles = 40° + 60° + 80° = 180°', centerX, centerY + 100);
                ctx.fillText('(Angles on a straight line)', centerX, centerY + 120);
                
                const buffer = canvas.toBuffer('image/png');
                const filename = `angles_straight_line_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                
                return {
                    success: true,
                    filename: filename,
                    path: `./${filename}`
                };
            } catch (error) {
                return {
                    success: false,
                    error: error.message
                };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Angles Around a Point',
        problem: 'Four angles meet at a point with measures x, 2x, 3x, and 4x. Find all angle measures.',
        parameters: { type: 'around_point', count: 4 },
        type: 'angles',
        subparts: [
            'Given: Four angles around point: x, 2x, 3x, 4x',
            'Property: Angles around a point sum to 360°',
            'Equation: x + 2x + 3x + 4x = 360°',
            '10x = 360°',
            'x = 36°',
            'Find each angle:',
            'First: x = 36°',
            'Second: 2x = 2(36°) = 72°',
            'Third: 3x = 3(36°) = 108°',
            'Fourth: 4x = 4(36°) = 144°',
            'Verification: 36° + 72° + 108° + 144° = 360° ✓',
            'Answer: 36°, 72°, 108°, and 144°'
        ],
        helper: 'Angles around a point sum to 360° (full rotation). Similar to circle = 360°',
        solution: 'The angles are 36°, 72°, 108°, and 144°',
        realWorldContext: 'Circular divisions, pie charts, wheel spokes, rotational designs',
        diagramInfo: {
            type: 'angles',
            renderType: 'around_point',
            angles: [36, 72, 108, 144],
            showLabels: true,
            showMeasurements: true
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(800, 600);
                const ctx = canvas.getContext('2d');
                
                // Clear background
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(0, 0, 800, 600);
                
                // Title
                ctx.fillStyle = '#000000';
                ctx.font = 'bold 20px Arial';
                ctx.textAlign = 'center';
                ctx.fillText('Angles Around a Point', 400, 40);
                
                const centerX = 400;
                const centerY = 300;
                const radius = 120;
                
                // Draw center point
                ctx.fillStyle = '#1976D2';
                ctx.beginPath();
                ctx.arc(centerX, centerY, 5, 0, 2 * Math.PI);
                ctx.fill();
                
                const angles = this.diagramInfo.angles;
                const colors = ['#D32F2F', '#388E3C', '#1976D2', '#F57C00'];
                let startAngle = -Math.PI / 2;  // Start from top
                
                angles.forEach((angle, index) => {
                    const angleRad = (angle * Math.PI) / 180;
                    const endAngle = startAngle + angleRad;
                    
                    // Draw ray for start of this angle
                    const rayX = centerX + Math.cos(startAngle) * (radius + 40);
                    const rayY = centerY + Math.sin(startAngle) * (radius + 40);
                    
                    ctx.strokeStyle = '#424242';
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.moveTo(centerX, centerY);
                    ctx.lineTo(rayX, rayY);
                    ctx.stroke();
                    
                    // Draw filled sector
                    ctx.fillStyle = colors[index] + '33';  // Add transparency
                    ctx.beginPath();
                    ctx.moveTo(centerX, centerY);
                    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
                    ctx.closePath();
                    ctx.fill();
                    
                    // Draw arc border
                    ctx.strokeStyle = colors[index];
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
                    ctx.stroke();
                    
                    // Label
                    const labelAngle = startAngle + angleRad / 2;
                    const labelRadius = radius * 0.6;
                    const labelX = centerX + Math.cos(labelAngle) * labelRadius;
                    const labelY = centerY + Math.sin(labelAngle) * labelRadius;
                    
                    ctx.fillStyle = colors[index];
                    ctx.font = 'bold 14px Arial';
                    ctx.textAlign = 'center';
                    ctx.fillText(`∠${index + 1}`, labelX, labelY - 10);
                    ctx.fillText(`${angle}°`, labelX, labelY + 10);
                    
                    startAngle = endAngle;
                });
                
                // Draw final ray to close
                const finalRayX = centerX + Math.cos(startAngle) * (radius + 40);
                const finalRayY = centerY + Math.sin(startAngle) * (radius + 40);
                ctx.strokeStyle = '#424242';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(centerX, centerY);
                ctx.lineTo(finalRayX, finalRayY);
                ctx.stroke();
                
                // Sum label
                ctx.fillStyle = '#000000';
                ctx.font = '14px Arial';
                ctx.fillText('Sum: 36° + 72° + 108° + 144° = 360°', centerX, 500);
                ctx.fillText('(Angles around a point = full rotation)', centerX, 520);
                
                const buffer = canvas.toBuffer('image/png');
                const filename = `angles_around_point_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                
                return {
                    success: true,
                    filename: filename,
                    path: `./${filename}`
                };
            } catch (error) {
                return {
                    success: false,
                    error: error.message
                };
            }
        }
    });

    return relatedProblems;
}


const EndSection1 = "close";