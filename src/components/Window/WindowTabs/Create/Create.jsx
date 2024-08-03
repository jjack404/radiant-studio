import React, { useEffect } from 'react';
import styles from './Create.module.css';
import DrawingApplication from './DrawingApp';

function Create() {
    useEffect(() => {
        const canvas = document.getElementById('canvas');
        const gridCanvas = document.getElementById('grid-canvas');
        const highlightCanvas = document.getElementById('highlight-canvas');

        if (canvas && gridCanvas && highlightCanvas) {
            new DrawingApplication(canvas, gridCanvas, highlightCanvas);
        }
    }, []);

    return (
        <section id={styles.createContainer}>
            <div id={styles.controlContainer}>
                <div id={styles.colorPicker}>
                    <div id={styles.showGrid}>
                        <button id="show-grid-btn">Grid</button>
                    </div>
                    <div id={styles.colorGrid}>
                        <button id="color-1" className={styles.colorButton} style={{ backgroundColor: '#FCE184', color: 'rgba(255,255,255,0)' }}>O</button>
                        <button id="color-2" className={styles.colorButton} style={{ backgroundColor: '#FFF9E1', color: 'rgba(255,255,255,0)' }}>O</button>
                        <button id="color-3" className={styles.colorButton} style={{ backgroundColor: '#0F0E0C', color: 'rgba(255,255,255,0)' }}>O</button>
                    </div>
                </div>
                <div id={styles.undoRedoWrap}>
                    <button id="undo-btn">Undo</button>
                    <button id="redo-btn">Redo</button>
                </div>
            </div>

            <div id={styles.canvasContainer}>
                <canvas id="canvas" width="3200" height="3200" className={styles.canvas}></canvas>
                <canvas id="grid-canvas" width="3200" height="3200" className={styles.canvas}></canvas>
                <canvas id="highlight-canvas" width="3200" height="3200" className={styles.canvas}></canvas>
            </div>

            <div id={styles.btnContainer}>
                <div id={styles.clearSave}>
                    <button id="clear-btn">Clear</button>
                    <button id="save-btn">Save</button>
                </div>
            </div>
        </section>
    );
}

export default Create;
