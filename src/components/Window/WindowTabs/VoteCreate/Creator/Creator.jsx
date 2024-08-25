import React from 'react';
import styles from '../VoteCreateContainer.module.css';
import ToolbarButton from './ToolbarButton';
import ToggleButton from './ToggleButton/ToggleButton';
import PixelGrid from './PixelGrid';
import ColorPalette from './ColorPalette';
import ActionButton from './ActionButton';


const Creator = () => {
    return (
<section className={styles.creatorContainer}>
        <div className={styles.toolbarTop}>
          <div className={styles.gridToggle}>
            <ToggleButton />
            <span>Show Grid</span>
          </div>
          <div className={styles.undoRedoWrap}>
            <ToolbarButton iconSrc="./assets/undo-icon.png" />
            <ToolbarButton iconSrc="./assets/redo-icon.png" />
          </div>
        </div>
        
        <div className={styles.canvasContainer}>
          <div className={styles.canvas}>
            <PixelGrid />
          </div>
          <div className={styles.paletteContainer}>
      <ColorPalette />
      </div>
        </div>
        
        <div className={styles.actionBar}>
          <div className={styles.actionGroup}>
            <ActionButton iconSrc="./assets/clear-icon.png" 
            label="Clear"  />
            <ActionButton iconSrc="./assets/save-icon.png"
            label="Save" />
          </div>
          <ActionButton iconSrc="./assets/submit-icon.png" label="Submit" submit />
        </div>
      </section>
    );
};

export default Creator;