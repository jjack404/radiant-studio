import React, { useEffect, useRef, useState, forwardRef, useImperativeHandle, useCallback } from 'react';

const DrawingGrid = forwardRef(({ selectedColor }, ref) => {
    const drawingCanvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [lastPos, setLastPos] = useState(null);
    const [history, setHistory] = useState([]);
    const [currentStep, setCurrentStep] = useState(-1);

    useImperativeHandle(ref, () => ({
        clearCanvas() {
            const ctx = drawingCanvasRef.current.getContext('2d', { willReadFrequently: true });
            const cellSize = 100;
            ctx.fillStyle = '#fce184';
            for (let x = 0; x < drawingCanvasRef.current.width; x += cellSize) {
                for (let y = 0; y < drawingCanvasRef.current.height; y += cellSize) {
                    ctx.fillRect(x, y, cellSize, cellSize);
                }
            }
            const newState = ctx.getImageData(0, 0, drawingCanvasRef.current.width, drawingCanvasRef.current.height);
            
            // Update history and currentStep
            const newHistory = history.slice(0, currentStep + 1);
            newHistory.push(newState);
            setHistory(newHistory);
            setCurrentStep(newHistory.length - 1);
        },
        getCanvas() {
            return drawingCanvasRef.current;
        },
        undo() {
            if (currentStep > 0) {
                const newStep = currentStep - 1;
                setCurrentStep(newStep);
                redrawCanvas(history[newStep]);
            }
        },
        redo() {
            if (currentStep < history.length - 1) {
                const newStep = currentStep + 1;
                setCurrentStep(newStep);
                redrawCanvas(history[newStep]);
            }
        }
    }));

    const redrawCanvas = useCallback((imageData) => {
        const ctx = drawingCanvasRef.current.getContext('2d', { willReadFrequently: true });
        ctx.putImageData(imageData, 0, 0);
    }, []);

    useEffect(() => {
        const drawingCanvas = drawingCanvasRef.current;
        if (!drawingCanvas) return;

        drawingCanvas.width = 3200;
        drawingCanvas.height = 3200;
        drawingCanvas.style.width = '100%';
        drawingCanvas.style.height = '100%';

        const ctx = drawingCanvas.getContext('2d', { willReadFrequently: true });
        const cellSize = 100;

        ctx.fillStyle = '#fce184';
        for (let x = 0; x < drawingCanvas.width; x += cellSize) {
            for (let y = 0; y < drawingCanvas.height; y += cellSize) {
                ctx.fillRect(x, y, cellSize, cellSize);
            }
        }

        // Save initial state
        const initialState = ctx.getImageData(0, 0, drawingCanvas.width, drawingCanvas.height);
        setHistory([initialState]);
        setCurrentStep(0);
    }, []);

    const getPosition = useCallback((e) => {
        const drawingCanvas = drawingCanvasRef.current;
        const rect = drawingCanvas.getBoundingClientRect();
        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        const clientY = e.clientY || (e.touches && e.touches[0].clientY);
        const x = (clientX - rect.left) * (drawingCanvas.width / rect.width);
        const y = (clientY - rect.top) * (drawingCanvas.height / rect.height);
        return { x, y };
    }, []);

    const drawCell = useCallback((pos) => {
        const drawingCanvas = drawingCanvasRef.current;
        const ctx = drawingCanvas.getContext('2d', { willReadFrequently: true });
        const cellSize = 100;

        const cellX = Math.floor(pos.x / cellSize) * cellSize;
        const cellY = Math.floor(pos.y / cellSize) * cellSize;

        ctx.fillStyle = selectedColor;
        ctx.fillRect(cellX, cellY, cellSize, cellSize);
    }, [selectedColor]);

    const drawLine = useCallback((start, end) => {
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
    }, [drawCell]);

    const handleStart = useCallback((e) => {
        e.preventDefault();
        setIsDrawing(true);
        const pos = getPosition(e);
        setLastPos(pos);
        drawCell(pos);
    }, [getPosition, drawCell]);

    const handleMove = useCallback((e) => {
        e.preventDefault();
        if (!isDrawing) return;
        const pos = getPosition(e);
        drawLine(lastPos, pos);
        setLastPos(pos);
    }, [isDrawing, getPosition, drawLine, lastPos]);

    const handleEnd = useCallback((e) => {
        e.preventDefault();
        if (!isDrawing) return;
        setIsDrawing(false);
        setLastPos(null);

        // Save new state
        const ctx = drawingCanvasRef.current.getContext('2d', { willReadFrequently: true });
        const newState = ctx.getImageData(0, 0, drawingCanvasRef.current.width, drawingCanvasRef.current.height);
        const newHistory = history.slice(0, currentStep + 1);
        newHistory.push(newState);
        setHistory(newHistory);
        setCurrentStep(newHistory.length - 1);
    }, [isDrawing, history, currentStep]);

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