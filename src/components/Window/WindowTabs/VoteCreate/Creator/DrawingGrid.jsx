// DrawingGrid.jsx
import React, { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';

const DrawingGrid = forwardRef(({ selectedColor }, ref) => {
    const drawingCanvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [lastPos, setLastPos] = useState(null); // Track the last position for line drawing

    useImperativeHandle(ref, () => ({
        clearCanvas() {
            const ctx = drawingCanvasRef.current.getContext('2d');
            const cellSize = 100; // 3200px canvas / 32 cells = 100px per cell
            ctx.fillStyle = '#fce184';
            for (let x = 0; x < drawingCanvasRef.current.width; x += cellSize) {
                for (let y = 0; y < drawingCanvasRef.current.height; y += cellSize) {
                    ctx.fillRect(x, y, cellSize, cellSize);
                }
            }
        },
    }));

    useEffect(() => {
        const drawingCanvas = drawingCanvasRef.current;
        if (!drawingCanvas) return;

        // Set the actual size of the canvas
        drawingCanvas.width = 3200;
        drawingCanvas.height = 3200;

        // Scale down to fit container
        drawingCanvas.style.width = '100%';
        drawingCanvas.style.height = '100%';

        const ctx = drawingCanvas.getContext('2d');
        const cellSize = 100; // 3200px canvas / 32 cells = 100px per cell

        // Fill each grid cell with yellow only once on mount
        ctx.fillStyle = '#fce184';
        for (let x = 0; x < drawingCanvas.width; x += cellSize) {
            for (let y = 0; y < drawingCanvas.height; y += cellSize) {
                ctx.fillRect(x, y, cellSize, cellSize);
            }
        }
    }, []); // Empty dependency array ensures this effect only runs once

    const handleMouseDown = (e) => {
        setIsDrawing(true);
        const pos = getMousePosition(e);
        setLastPos(pos);
        drawCell(pos);
    };

    const handleMouseMove = (e) => {
        if (!isDrawing) return;
        const pos = getMousePosition(e);
        drawLine(lastPos, pos); // Draw a line between the last and current position
        setLastPos(pos);
    };

    const handleMouseUp = () => {
        setIsDrawing(false);
        setLastPos(null);
    };

    const getMousePosition = (e) => {
        const drawingCanvas = drawingCanvasRef.current;
        const rect = drawingCanvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        return { x, y };
    };

    const drawCell = (pos) => {
        const drawingCanvas = drawingCanvasRef.current;
        const ctx = drawingCanvas.getContext('2d');
        const rect = drawingCanvas.getBoundingClientRect();
        const cellSize = 100; // 3200px canvas / 32 cells = 100px per cell

        const cellX = Math.floor((pos.x / rect.width) * 32) * cellSize;
        const cellY = Math.floor((pos.y / rect.height) * 32) * cellSize;

        ctx.fillStyle = selectedColor;
        ctx.fillRect(cellX, cellY, cellSize, cellSize);
    };

    const drawLine = (start, end) => {
        const dx = end.x - start.x;
        const dy = end.y - start.y;
        const steps = Math.max(Math.abs(dx), Math.abs(dy));
        const xIncrement = dx / steps;
        const yIncrement = dy / steps;

        let x = start.x;
        let y = start.y;

        for (let i = 0; i <= steps; i++) {
            drawCell({ x, y });
            x += xIncrement;
            y += yIncrement;
        }
    };

    useEffect(() => {
        const drawingCanvas = drawingCanvasRef.current;
        if (!drawingCanvas) return;

        drawingCanvas.addEventListener('mousedown', handleMouseDown);
        drawingCanvas.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            drawingCanvas.removeEventListener('mousedown', handleMouseDown);
            drawingCanvas.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [handleMouseDown, handleMouseMove, handleMouseUp]);

    return <canvas ref={drawingCanvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 100 }} />;
});

export default DrawingGrid;
