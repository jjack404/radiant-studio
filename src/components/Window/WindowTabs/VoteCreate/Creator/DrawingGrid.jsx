import React, { useEffect, useRef, useState, forwardRef, useImperativeHandle, useCallback } from 'react';

const DrawingGrid = forwardRef(({ selectedColor, isBucketFillMode, onDrawEnd }, ref) => {
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
            drawNeckLines(ctx);  // Redraw neck lines after clearing
            const newState = ctx.getImageData(0, 0, drawingCanvasRef.current.width, drawingCanvasRef.current.height);

            // Update history and currentStep
            const newHistory = history.slice(0, currentStep + 1);
            newHistory.push(newState);
            setHistory(newHistory);
            setCurrentStep(newHistory.length - 1);

            if (onDrawEnd) onDrawEnd();  // Save state after clearing canvas
        },
        getCanvas() {
            return drawingCanvasRef.current;
        },
        undo() {
            if (currentStep > 0) {
                const newStep = currentStep - 1;
                setCurrentStep(newStep);
                redrawCanvas(history[newStep]);
                if (onDrawEnd) onDrawEnd();  // Save state after undo
            }
        },
        redo() {
            if (currentStep < history.length - 1) {
                const newStep = currentStep + 1;
                setCurrentStep(newStep);
                redrawCanvas(history[newStep]);
                if (onDrawEnd) onDrawEnd();  // Save state after redo
            }
        }
    }), [history, currentStep, onDrawEnd]);

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

        drawNeckLines(ctx);  // Draw neck lines after initial fill

        // Save initial state
        const initialState = ctx.getImageData(0, 0, drawingCanvas.width, drawingCanvas.height);
        setHistory([initialState]);
        setCurrentStep(0);

        // Disable right-click context menu on the canvas
        const disableRightClick = (e) => e.preventDefault();
        drawingCanvas.addEventListener('contextmenu', disableRightClick);

        return () => {
            // Clean up event listeners on unmount
            drawingCanvas.removeEventListener('contextmenu', disableRightClick);
        };
    }, []);

    const drawNeckLines = (ctx) => {
        const pixelSize = drawingCanvasRef.current.width / 32;
        ctx.fillStyle = '#0F0E0C';

        const leftNeckX = 10 * pixelSize;
        const rightNeckX = (32 - 16) * pixelSize;

        for (let i = 0; i < 7; i++) {
            ctx.fillRect(leftNeckX, ctx.canvas.height - pixelSize - (i * pixelSize), pixelSize, pixelSize);
        }

        for (let i = 0; i < 5; i++) {
            ctx.fillRect(rightNeckX, ctx.canvas.height - pixelSize - (i * pixelSize), pixelSize, pixelSize);
        }
    };

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

        // Check if the position is part of the neck lines
        if (isNeckLine(pos)) return;

        ctx.fillStyle = selectedColor;
        ctx.fillRect(cellX, cellY, cellSize, cellSize);
    }, [selectedColor]);

    const isNeckLine = (pos) => {
        const pixelSize = drawingCanvasRef.current.width / 32;

        // Positions for left and right neck lines
        const leftNeckX = 10 * pixelSize;
        const rightNeckX = (32 - 16) * pixelSize;
        const bottomRowY = drawingCanvasRef.current.height - pixelSize;

        // Check left neck line
        for (let i = 0; i < 7; i++) {
            if (
                pos.x >= leftNeckX &&
                pos.x < leftNeckX + pixelSize &&
                pos.y >= bottomRowY - (i * pixelSize) &&
                pos.y < bottomRowY - (i * pixelSize) + pixelSize
            ) {
                return true;
            }
        }

        // Check right neck line
        for (let i = 0; i < 5; i++) {
            if (
                pos.x >= rightNeckX &&
                pos.x < rightNeckX + pixelSize &&
                pos.y >= bottomRowY - (i * pixelSize) &&
                pos.y < bottomRowY - (i * pixelSize) + pixelSize
            ) {
                return true;
            }
        }

        return false;
    };

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

    const hexToRgb = (hex) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return [r, g, b];
    };

    const colorMatch = (color1, color2) => {
        return color1[0] === color2[0] && color1[1] === color2[1] && color1[2] === color2[2];
    };

    const bucketFill = useCallback((startX, startY) => {
        const drawingCanvas = drawingCanvasRef.current;
        const ctx = drawingCanvas.getContext('2d', { willReadFrequently: true });
        const cellSize = 100;
        const width = drawingCanvas.width;
        const height = drawingCanvas.height;

        const startColor = ctx.getImageData(startX, startY, 1, 1).data;
        const targetColor = hexToRgb(selectedColor);

        if (colorMatch(startColor, targetColor)) return;

        const stack = [{x: startX, y: startY}];
        const visited = new Set();

        while (stack.length > 0) {
            const {x, y} = stack.pop();
            const cellX = Math.floor(x / cellSize) * cellSize;
            const cellY = Math.floor(y / cellSize) * cellSize;

            if (visited.has(`${cellX},${cellY}`)) continue;
            visited.add(`${cellX},${cellY}`);

            // Check if the current position is a neck line
            if (isNeckLine({ x: cellX, y: cellY })) continue;

            const currentColor = ctx.getImageData(cellX, cellY, 1, 1).data;
            if (colorMatch(currentColor, startColor)) {
                ctx.fillStyle = selectedColor;
                ctx.fillRect(cellX, cellY, cellSize, cellSize);

                if (cellX > 0) stack.push({x: cellX - cellSize, y: cellY});
                if (cellX < width - cellSize) stack.push({x: cellX + cellSize, y: cellY});
                if (cellY > 0) stack.push({x: cellX, y: cellY - cellSize});
                if (cellY < height - cellSize) stack.push({x: cellX, y: cellY + cellSize});
            }
        }
        if (onDrawEnd) onDrawEnd();  // Save state after bucket fill
    }, [selectedColor, onDrawEnd]);

    const handleStart = useCallback((e) => {
        e.preventDefault();
        if (e.button !== 0) return;  // Ignore all mouse button clicks except the primary (left) button
        const pos = getPosition(e);
        if (isBucketFillMode) {
            bucketFill(pos.x, pos.y);
        } else {
            setIsDrawing(true);
            setLastPos(pos);
            drawCell(pos);
        }
    }, [getPosition, drawCell, isBucketFillMode, bucketFill]);

    const handleMove = useCallback((e) => {
        e.preventDefault();
        if (e.button !== 0 || !isDrawing || isBucketFillMode) return;  // Ignore right-clicks or non-drawing mode
        const pos = getPosition(e);
        drawLine(lastPos, pos);
        setLastPos(pos);
    }, [isDrawing, getPosition, drawLine, lastPos, isBucketFillMode]);

    const handleEnd = useCallback((e) => {
        e.preventDefault();
        if (e.button !== 0 || (!isDrawing && !isBucketFillMode)) return;  // Ignore right-clicks or if not drawing
        setIsDrawing(false);
        setLastPos(null);

        // Save new state
        const ctx = drawingCanvasRef.current.getContext('2d', { willReadFrequently: true });
        const newState = ctx.getImageData(0, 0, drawingCanvasRef.current.width, drawingCanvasRef.current.height);
        const newHistory = history.slice(0, currentStep + 1);
        newHistory.push(newState);
        setHistory(newHistory);
        setCurrentStep(newHistory.length - 1);

        if (onDrawEnd) onDrawEnd();  // Save state after drawing ends
    }, [isDrawing, isBucketFillMode, history, currentStep, onDrawEnd]);

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
