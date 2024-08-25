import React from 'react';
import styles from '../VoteCreateContainer.module.css';

const ColorPalette = () => {
  const colors = ['cream', 'yellow', 'black'];

  return (
    <div className={styles.colorPalette}>
      <img src="./assets/bucket-icon.png" alt="Color Picker" className={styles.bucketIcon} />
      <div>
        {colors.map((color, index) => (
          <div key={index} className={`${styles.colorSwatch} ${styles[color]}`} />
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;