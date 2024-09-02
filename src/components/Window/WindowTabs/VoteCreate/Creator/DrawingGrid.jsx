import React, { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';

const DrawingGrid = forwardRef(({ selectedColor }, ref) => {
    const drawingCanvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [lastPos, setLastPos] = useState(null);

    useImperativeHandle(ref, () => ({
        clearCanvas() {
            const ctx = drawingCanvasRef.current.getContext('2d');
            const cellSize = 100;
            ctx.fillStyle = '#fce184';
            for (let x = 0; x < drawingCanvasRef.current.width; x += cellSize) {
                for (let y = 0; y < drawingCanvasRef.current.height; y += cellSize) {
                    ctx.fillRect(x, y, cellSize, cellSize);
                }
            }
        },
        getCanvas() {
            return drawingCanvasRef.current;
        }
    }));

    useEffect(() => {
        const drawingCanvas = drawingCanvasRef.current;
        if (!drawingCanvas) return;

        drawingCanvas.width = 3200;
        drawingCanvas.height = 3200;
        drawingCanvas.style.width = '100%';
        drawingCanvas.style.height = '100%';

        const ctx = drawingCanvas.getContext('2d');
        const cellSize = 100;

        ctx.fillStyle = '#fce184';
        for (let x = 0; x < drawingCanvas.width; x += cellSize) {
            for (let y = 0; y < drawingCanvas.height; y += cellSize) {
                ctx.fillRect(x, y, cellSize, cellSize);
            }
        }
    }, []);

    const getPosition = (e) => {
        const drawingCanvas = drawingCanvasRef.current;
        const rect = drawingCanvas.getBoundingClientRect();
        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        const clientY = e.clientY || (e.touches && e.touches[0].clientY);
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        return { x, y };
    };

    const drawCell = (pos) => {
        const drawingCanvas = drawingCanvasRef.current;
        const ctx = drawingCanvas.getContext('2d');
        const rect = drawingCanvas.getBoundingClientRect();
        const cellSize = 100;

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

    const handleStart = (e) => {
        e.preventDefault();
        setIsDrawing(true);
        const pos = getPosition(e);
        setLastPos(pos);
        drawCell(pos);
    };

    const handleMove = (e) => {
        e.preventDefault();
        if (!isDrawing) return;
        const pos = getPosition(e);
        drawLine(lastPos, pos);
        setLastPos(pos);
    };

    const handleEnd = (e) => {
        e.preventDefault();
        setIsDrawing(false);
        setLastPos(null);
    };

    useEffect(() => {
        const drawingCanvas = drawingCanvasRef.current;
        if (!drawingCanvas) return;

        drawingCanvas.addEventListener('mousedown', handleStart);
        drawingCanvas.addEventListener('mousemove', handleMove);
        drawingCanvas.addEventListener('mouseup', handleEnd);
        drawingCanvas.addEventListener('mouseleave', handleEnd);

        drawingCanvas.addEventListener('touchstart', handleStart);
        drawingCanvas.addEventListener('touchmove', handleMove);
        drawingCanvas.addEventListener('touchend', handleEnd);

        return () => {
            drawingCanvas.removeEventListener('mousedown', handleStart);
            drawingCanvas.removeEventListener('mousemove', handleMove);
            drawingCanvas.removeEventListener('mouseup', handleEnd);
            drawingCanvas.removeEventListener('mouseleave', handleEnd);

            drawingCanvas.removeEventListener('touchstart', handleStart);
            drawingCanvas.removeEventListener('touchmove', handleMove);
            drawingCanvas.removeEventListener('touchend', handleEnd);
        };
    }, [handleStart, handleMove, handleEnd]);

    return <canvas ref={drawingCanvasRef} className="drawingCanvas" />;
});

export default DrawingGrid;