import React from 'react';
import styles from './SvgConverter.module.css';
import DropZone from '../DropZone/DropZone';
import ColorSelector from './ColorSelector';

function SvgConverter() {
  return (
    <main className={styles.container}>
<header className={styles.headerWrap}>
        <div className={styles.header}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/771271dc46435522b90c2a5bc7ce2053e7c2c9b9b2162a56ba4090da00df0766?placeholderIfAbsent=true&apiKey=05ecaddee9444e0b87f4e90bae6c22dc" alt="" className={styles.headerIcon} />
          <span>SVG Converter & Optimizer</span>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2122c42b9282056f31bb0c8e14744da2ad1ba654bf2442799d380a8051bb2bc7?placeholderIfAbsent=true&apiKey=05ecaddee9444e0b87f4e90bae6c22dc" alt="" className={styles.headerIcon} />
        </div>
      </header>
      <section className={styles.mainContent}>
        <DropZone />
        <ColorSelector />
      </section>
    </main>
  );
}

export default SvgConverter;