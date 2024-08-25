import React from 'react';
import styles from '../VoteCreateContainer.module.css';

const PixelGrid = () => {
  const gridSize = 8;
  const pixels = Array(gridSize * gridSize).fill(null);

  return (
    <div className={styles.pixelGrid}>
      {pixels.map((_, index) => (
        <div key={index} className={styles.pixel} />
      ))}
    </div>
  );
};

export default PixelGrid;