import React from 'react';
import styles from './SvgConverter.module.css';
import DropZone from '../DropZone';
import ColorSelector from './ColorSelector';

function SvgConverter() {
  return (
    <main className={styles.container}>
<header className={styles.headerWrap}>
      <div className={styles.header}>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b066bcbaac843e439ebfc9c99f9879f417097f530efded48836362789906edac?placeholderIfAbsent=true&apiKey=05ecaddee9444e0b87f4e90bae6c22dc" className={styles.headerIcon} alt="" />
        <span>Rad SVG converter & compressor</span>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/06a6de1c7882f1d5289d1c109be9f6019caef73b7b60c5504b7db5565d265fe3?placeholderIfAbsent=true&apiKey=05ecaddee9444e0b87f4e90bae6c22dc" className={styles.headerIcon} alt="" />
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