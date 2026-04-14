
    /**
     * Draw cone (as 2D projection)
     */
    drawCone(ctx, coneProps) {
        const { center, radius, height, slantHeight, volume, totalSurfaceArea } = coneProps;

        // Project to 2D (side view)
        const screenCenter = this.calculator.graphToScreen(center.x, center.y);
        const screenRadius = Math.abs(this.calculator.graphToScreen(radius, 0)[0] - this.calculator.graphToScreen(0, 0)[0]);
        const screenHeight = Math.abs(this.calculator.graphToScreen(0, height)[1] - this.calculator.graphToScreen(0, 0)[1]);

        // Draw base ellipse
        ctx.strokeStyle = '#ff0000';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.ellipse(screenCenter[0], screenCenter[1] + screenHeight/2, screenRadius, screenRadius * 0.3, 0, 0, 2 * Math.PI);
        ctx.stroke();

        // Draw cone sides
        ctx.beginPath();
        ctx.moveTo(screenCenter[0] - screenRadius, screenCenter[1] + screenHeight/2);
        ctx.lineTo(screenCenter[0], screenCenter[1] - screenHeight/2);
        ctx.lineTo(screenCenter[0] + screenRadius, screenCenter[1] + screenHeight/2);
        ctx.stroke();

        // Draw height line
        ctx.strokeStyle = '#00aa00';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(screenCenter[0], screenCenter[1] - screenHeight/2);
        ctx.lineTo(screenCenter[0], screenCenter[1] + screenHeight/2);
        ctx.stroke();
        ctx.setLineDash([]);

        // Draw apex point
        ctx.fillStyle = '#0066ff';
        ctx.beginPath();
        ctx.arc(screenCenter[0], screenCenter[1] - screenHeight/2, 5, 0, 2 * Math.PI);
        ctx.fill();

        // Draw base center
        ctx.beginPath();
        ctx.arc(screenCenter[0], screenCenter[1] + screenHeight/2, 5, 0, 2 * Math.PI);
        ctx.fill();

        // Title and properties
        ctx.fillStyle = 'black';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(`Cone (3D)`, 10, 25);

        ctx.font = '12px Arial';
        const props = [
            `Center: (${center.x}, ${center.y}, ${center.z})`,
            `Radius: ${radius.toFixed(2)} units`,
            `Height: ${height.toFixed(2)} units`,
            `Slant Height: ${slantHeight.toFixed(2)} units`,
            `Surface Area: ${totalSurfaceArea.toFixed(2)} sq units`,
            `Volume: ${volume.toFixed(2)} cubic units`,
            `[2D projection shown]`
        ];

        props.forEach((prop, index) => {
            ctx.fillText(prop, 10, 50 + index * 15);
        });
    }
    
