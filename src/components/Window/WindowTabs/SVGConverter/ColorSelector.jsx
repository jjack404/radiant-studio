import React, { useState } from 'react';
import styles from './ColorSelector.module.css';

function ColorSelector() {
  const [colorCount, setColorCount] = useState(64);

  const handleSliderChange = (e) => {
    setColorCount(parseInt(e.target.value));
  };

  // Calculate the width of the gradient cover
  const gradientCoverWidth = 100 - ((colorCount / 256) * 100);

  return (
    <div className={styles.colorSelector}>
      <div className={styles.colorSelectorHeader}>
        <label htmlFor="colorSlider" className={styles.colorCount}>NUMBER OF COLORS</label>
        <span className={styles.colorCount}>{colorCount}</span>
      </div>
      <div className={styles.colorSliderContainer}>
        <div className={styles.colorGradient}></div>
        <div 
          className={styles.gradientCover} 
          style={{ width: `${gradientCoverWidth}%` }}
        ></div>
        <input
          type="range"
          id="colorSlider"
          min="1"
          max="256"
          value={colorCount}
          onChange={handleSliderChange}
          className={styles.slider}
          aria-label="Select number of colors"
        />
      </div>
    </div>
  );
}

export default ColorSelector;