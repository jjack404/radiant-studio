import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import DrawingGrid from './DrawingGrid';

const DrawingGridLocalStorage = forwardRef((props, ref) => {
    const drawingGridRef = useRef(null);

    useImperativeHandle(ref, () => ({
        clearCanvas: () => {
            drawingGridRef.current?.clearCanvas();
        },
        getCanvas: () => {
            return drawingGridRef.current?.getCanvas();
        }
    }));

    useEffect(() => {
        const loadFromLocalStorage = () => {
            const canvas = drawingGridRef.current?.getCanvas();
            if (canvas) {
                const ctx = canvas.getContext('2d', { willReadFrequently: true });
                const dataUrl = localStorage.getItem('canvasData');
                if (dataUrl) {
                    const img = new Image();
                    img.src = dataUrl;
                    img.onload = () => {
                        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas before drawing
                        ctx.drawImage(img, 0, 0);
                    };
                }
            }
        };

        loadFromLocalStorage();

        return () => {
            const saveToLocalStorage = () => {
                const canvas = drawingGridRef.current?.getCanvas();
                if (canvas) {
                    const dataUrl = canvas.toDataURL();
                    localStorage.setItem('canvasData', dataUrl);
                }
            };
            saveToLocalStorage();
        };
    }, []);

    return <DrawingGrid ref={drawingGridRef} {...props} />;
});

export default DrawingGridLocalStorage;
