// GridCanvas.jsx
import React, { useEffect, useRef } from 'react';

const GridCanvas = ({ showGrid }) => {
    const gridCanvasRef = useRef(null);

    useEffect(() => {
        const gridCanvas = gridCanvasRef.current;
        if (!gridCanvas) return;

        // Set the actual size of the canvas
        gridCanvas.width = 3200;
        gridCanvas.height = 3200;

        // Scale down to fit container
        gridCanvas.style.width = '100%';
        gridCanvas.style.height = '100%';

        const ctx = gridCanvas.getContext('2d');
        ctx.clearRect(0, 0, gridCanvas.width, gridCanvas.height);

        if (showGrid) {
            const size = 32; // 32x32 grid
            const gridSize = gridCanvas.width / size;

            ctx.strokeStyle = 'rgba(0, 0, 0, 0.8)';
            ctx.lineWidth = 10; // Set grid line width to 1px
            for (let i = 0; i <= size; i++) {
                const position = i * gridSize;
                // Draw horizontal lines
                ctx.beginPath();
                ctx.moveTo(0, position);
                ctx.lineTo(gridCanvas.width, position);
                ctx.stroke();
                
                // Draw vertical lines
                ctx.beginPath();
                ctx.moveTo(position, 0);
                ctx.lineTo(position, gridCanvas.height);
                ctx.stroke();
            }
        }
    }, [showGrid]); // Re-run this effect when showGrid changes

    return (
        <canvas 
            ref={gridCanvasRef} 
            style={{ display: showGrid ? 'block' : 'none', position: 'absolute', top: 0, left: 0, zIndex: 1000 }}
        />
    );
};

export default GridCanvas;
