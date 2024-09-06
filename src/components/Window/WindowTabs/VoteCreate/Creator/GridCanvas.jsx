import React, { useEffect, useRef } from 'react';

const GridCanvas = ({ showGrid }) => {
    const gridCanvasRef = useRef(null);

    useEffect(() => {
        const gridCanvas = gridCanvasRef.current;
        if (!gridCanvas) return;

        // Set the actual size of the canvas
        gridCanvas.width = 320;
        gridCanvas.height = 320;

        // Scale down to fit container
        gridCanvas.style.width = '100%';
        gridCanvas.style.height = '100%';

        const ctx = gridCanvas.getContext('2d');
        ctx.clearRect(0, 0, gridCanvas.width, gridCanvas.height);

        if (showGrid) {
            const size = 32; // 32x32 grid
            const gridSize = gridCanvas.width / size;

            for (let i = 0; i <= size; i++) {
                const position = i * gridSize;

                // Draw horizontal lines (only top two edges red)
                ctx.beginPath();
                ctx.moveTo(0, position);
                ctx.lineTo(gridCanvas.width, position);
                ctx.strokeStyle = (i === 0 || i === 1) ? 'red' : '#cccccc'; // Top two rows red, others gray
                ctx.stroke();

                // Draw vertical lines (only left two and right two edges red)
                ctx.beginPath();
                ctx.moveTo(position, 0);
                ctx.lineTo(position, gridCanvas.height);
                ctx.strokeStyle = (i === 0 || i === 1 || i === size || i === size - 1) ? 'red' : '#cccccc'; // Left two and right two edges red
                ctx.stroke();
            }
        }
    }, [showGrid]); // Re-run this effect when showGrid changes

    return (
        <canvas 
            ref={gridCanvasRef} 
            style={{ 
                display: showGrid ? 'block' : 'none', 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                zIndex: 1000,
                pointerEvents: 'none' // Ensure grid does not intercept mouse events
            }}
        />
    );
};

export default GridCanvas;
