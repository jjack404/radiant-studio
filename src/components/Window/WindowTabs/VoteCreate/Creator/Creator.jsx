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
                    <ToolbarButton iconSrc="./assets/undo-icon.svg" />
                    <ToolbarButton iconSrc="./assets/redo-icon.svg" />
                </div>
            </div>

            <div className={styles.canvasContainer}>
                <div className={styles.canvases}>
                    <DrawingGrid ref={drawingCanvasRef} selectedColor={selectedColor} />
                    <GridCanvas showGrid={showGrid} drawingCanvasRef={drawingCanvasRef} />
                </div>
                <div className={styles.paletteContainer}>
                    <div>
                        <button className={styles.bucketButton}>
                    <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.4257 12.1903H25.9057V6.09031H24.3857V7.62031H21.3357V6.09031H10.6657V7.62031H7.6157V6.09031H6.0957V10.6603H7.6157V12.1903H9.1457V13.7103H18.2857V15.2403H7.6157V16.7603H19.8057V21.3303H22.8557V18.2803H24.3857V16.7603H25.9057V13.7103H27.4257V27.4303H28.9557V4.57031H27.4257V12.1903Z" fill="#000001"/>
<path d="M27.4243 27.4297H25.9043V28.9497H27.4243V27.4297Z" fill="#000001"/>
<path d="M27.4243 3.0498H25.9043V4.5698H27.4243V3.0498Z" fill="#000001"/>
<path d="M25.9048 28.9502H24.3848V30.4702H25.9048V28.9502Z" fill="#000001"/>
<path d="M25.9048 1.51953H24.3848V3.04953H25.9048V1.51953Z" fill="#000001"/>
<path d="M24.3855 4.57031H22.8555V6.09031H24.3855V4.57031Z" fill="#000001"/>
<path d="M24.3852 30.4697H7.61523V31.9997H24.3852V30.4697Z" fill="#000001"/>
<path d="M15.2348 22.8496H13.7148V25.8996H15.2348V22.8496Z" fill="#000001"/>
<path d="M12.1941 21.3301H10.6641V27.4301H12.1941V21.3301Z" fill="#000001"/>
<path d="M22.8545 3.0498H9.14453V4.5698H22.8545V3.0498Z" fill="#000001"/>
<path d="M24.3852 0H7.61523V1.52H24.3852V0Z" fill="#000001"/>
<path d="M9.14524 19.8096H7.61523V25.8996H9.14524V19.8096Z" fill="#000001"/>
<path d="M9.14524 4.57031H7.61523V6.09031H9.14524V4.57031Z" fill="#000001"/>
<path d="M7.6157 28.9502H6.0957V30.4702H7.6157V28.9502Z" fill="#000001"/>
<path d="M7.6157 13.71H6.0957V15.24H7.6157V13.71Z" fill="#000001"/>
<path d="M7.6157 1.51953H6.0957V3.04953H7.6157V1.51953Z" fill="#000001"/>
<path d="M6.09422 27.4297H4.57422V28.9497H6.09422V27.4297Z" fill="#000001"/>
<path d="M6.09422 3.0498H4.57422V4.5698H6.09422V3.0498Z" fill="#000001"/>
<path d="M4.57492 13.7103H6.09492V12.1903H4.57492V4.57031H3.04492V27.4303H4.57492V13.7103Z" fill="#000001"/>
</svg>
</button>

                    </div>
                    <ColorPalette onColorChange={handleColorChange} />
                </div>
            </div>

            <div className={styles.actionBar}>
                <div className={styles.actionGroup}>
                    <ActionButton iconSrc="./assets/clear-icon.svg" label="Clear" onClick={handleClearCanvas} />
                    <ActionButton iconSrc="./assets/save-icon.svg" label="Save" onClick={handleSaveCanvas} />
                </div>
                <ActionButton iconSrc="./assets/submit-icon.svg" label="Submit" submit />
            </div>
        </section>
    );
};

export default Creator;
