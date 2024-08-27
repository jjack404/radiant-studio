import React, { useState } from 'react';
import styles from './SvgConverter.module.css';

function ColorSelector() {
  const [colorCount, setColorCount] = useState(64);

  const handleSliderChange = (e) => {
    setColorCount(e.target.value);
  };

  return (
    <div className={styles.colorSelector}>
      <div className={styles.colorSelectorHeader}>
        <label htmlFor="colorSlider" className={styles.colorCount}>NUMBER OF Colors</label>
        <span className={styles.colorCount}>{colorCount}</span>
      </div>
      <div className={styles.colorSlider}>
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
