// Creator.jsx
import React, { useRef, useState, useEffect } from 'react';
import styles from './Creator.module.css';
import ToolbarButton from './ToolbarButton';
import ToggleButton from './ToggleButton/ToggleButton';
import ColorPalette from './ColorPalette';
import ActionButton from './ActionButton';
import GridCanvas from './GridCanvas';

const Creator = () => {
    const drawingCanvasRef = useRef(null);
    const [showGrid, setShowGrid] = useState(false);

    useEffect(() => {
        const drawingCanvas = drawingCanvasRef.current;
        if (!drawingCanvas) return;

        // Set the actual size of the canvas
        drawingCanvas.width = 3200;
        drawingCanvas.height = 3200;

        // Scale down to fit container
        drawingCanvas.style.width = '100%';
        drawingCanvas.style.height = '100%';
    }, []);

    return (
        <section className={styles.creatorContainer}>
            <div className={styles.toolbarTop}>
                <div className={styles.gridToggle}>
                    <ToggleButton isActive={showGrid} onClick={() => setShowGrid(prev => !prev)} />
                    <span>Show Grid</span>
                </div>
                <div className={styles.undoRedoWrap}>
                    <ToolbarButton iconSrc="./assets/undo-icon.png" />
                    <ToolbarButton iconSrc="./assets/redo-icon.png" />
                </div>
            </div>
            
            <div className={styles.canvasContainer}>
                <div className={styles.canvases}>
                    <canvas ref={drawingCanvasRef} className={styles.drawingCanvas} />
                    <GridCanvas showGrid={showGrid} />
                </div>
                <div className={styles.paletteContainer}>
                    <ColorPalette />
                </div>
            </div>
            
            <div className={styles.actionBar}>
                <div className={styles.actionGroup}>
                    <ActionButton iconSrc="./assets/clear-icon.png" label="Clear" />
                    <ActionButton iconSrc="./assets/save-icon.png" label="Save" />
                </div>
                <ActionButton iconSrc="./assets/submit-icon.png" label="Submit" submit />
            </div>
        </section>
    );
};

export default Creator;
