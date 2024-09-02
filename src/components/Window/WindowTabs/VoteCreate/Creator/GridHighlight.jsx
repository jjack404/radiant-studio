// GridHighlight.jsx
import React, { useEffect, useRef } from 'react';

const GridHighlight = ({ pixelSize = 100 }) => {
    const highlightCanvasRef = useRef(null);

    useEffect(() => {
        const highlightCanvas = highlightCanvasRef.current;
        const ctx = highlightCanvas.getContext('2d');

        // Set the size of the highlight canvas
        highlightCanvas.width = 3200;
        highlightCanvas.height = 3200;

        // Resize to fit container
        highlightCanvas.style.width = '100%';
        highlightCanvas.style.height = '100%';

        const drawHighlight = (event) => {
            const rect = highlightCanvas.getBoundingClientRect();
            const x = Math.floor((event.clientX - rect.left) / rect.width * highlightCanvas.width / pixelSize);
            const y = Math.floor((event.clientY - rect.top) / rect.height * highlightCanvas.height / pixelSize);

            // Clear previous highlights
            ctx.clearRect(0, 0, highlightCanvas.width, highlightCanvas.height);

            // Draw new highlight
            ctx.strokeStyle = '#888888';
            ctx.lineWidth = 1;
            ctx.strokeRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
        };

        highlightCanvas.addEventListener('mousemove', drawHighlight);

        return () => {
            highlightCanvas.removeEventListener('mousemove', drawHighlight);
        };
    }, [pixelSize]);

    return (
        <canvas ref={highlightCanvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: 1001, pointerEvents: 'none' }} />
    );
};

export default GridHighlight;
