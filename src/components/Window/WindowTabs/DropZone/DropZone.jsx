import React, { useCallback } from 'react';
import styles from './DropZone.module.css';

function DropZone({ onFileSelect }) {
  const handleDrop = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    handleFiles(event.dataTransfer.files);
  }, []);

  const handleDragOver = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
  }, []);

  const handleClick = useCallback(() => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.png,.jpg,.gif,.svg';
    input.multiple = true;
    input.onchange = (event) => handleFiles(event.target.files);
    input.click();
  }, []);

  const handleFiles = (files) => {
    console.log('Files selected:', files);
    if (onFileSelect) {
      onFileSelect(files);
    }
  };

  return (
    <div 
      className={styles.dropZone} 
      role="button" 
      tabIndex="0"
      onClick={handleClick}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/498268cce26054e996f8d29a4db2a6cbf3366650f552af9eb942aa848280143d?placeholderIfAbsent=true&apiKey=05ecaddee9444e0b87f4e90bae6c22dc" className={styles.dropZoneIcon} alt="Upload icon" />
      <p className={styles.dropZoneText}>DRAG & DROP IMAGES HERE OR CLICK TO SELECT FILES</p>
      <p className={styles.supportedFormats}>SUPPORTS PNG, JPG, GIF & SVG</p>
    </div>
  );
}

export default DropZone;