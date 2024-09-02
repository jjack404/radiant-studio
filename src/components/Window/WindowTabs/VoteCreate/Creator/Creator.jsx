// Creator.jsx
import React, { useState, useRef } from 'react';
import styles from './Creator.module.css';
import ToolbarButton from './ToolbarButton';
import ToggleButton from './ToggleButton/ToggleButton';
import ColorPalette from './ColorPalette';
import ActionButton from './ActionButton';
import GridCanvas from './GridCanvas';
import DrawingGrid from './DrawingGrid';

const Creator = () => {
    const [showGrid, setShowGrid] = useState(false);
    const [selectedColor, setSelectedColor] = useState('#0f0e0c'); // Default color is 'black'
    const drawingCanvasRef = useRef(null);

    const handleClearCanvas = () => {
        if (drawingCanvasRef.current) {
            drawingCanvasRef.current.clearCanvas();
        }
    };

    const handleSaveCanvas = () => {
        const drawingCanvas = drawingCanvasRef.current?.getCanvas();
        if (drawingCanvas) {
            const link = document.createElement('a');
            link.href = drawingCanvas.toDataURL('image/png');
            link.download = 'drawing.png';
            link.click();
        }
    };

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

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
                    <DrawingGrid ref={drawingCanvasRef} selectedColor={selectedColor} />
                    <GridCanvas showGrid={showGrid} drawingCanvasRef={drawingCanvasRef} />
                </div>
                <div className={styles.paletteContainer}>
                    <ColorPalette onColorChange={handleColorChange} />
                </div>
            </div>

            <div className={styles.actionBar}>
                <div className={styles.actionGroup}>
                    <ActionButton iconSrc="./assets/clear-icon.png" label="Clear" onClick={handleClearCanvas} />
                    <ActionButton iconSrc="./assets/save-icon.png" label="Save" onClick={handleSaveCanvas} />
                </div>
                <ActionButton iconSrc="./assets/submit-icon.png" label="Submit" submit />
            </div>
        </section>
    );
};

export default Creator;
