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
      <svg 
      className={styles.dropZoneIcon}
      viewBox="0 0 30 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.955 23.6348H2.05496V8.40479H0.524963V26.6848H2.05496V28.2148H11.195V29.7348H12.715V28.2148H17.285V29.7348H18.815V28.2148H27.955V26.6848H29.475V8.40479H27.955V23.6348Z" fill="#0f0e0c"/>
<path d="M27.955 6.87479H21.865V8.40479H27.955V6.87479Z" fill="#0f0e0c"/>
<path d="M11.195 31.2548V29.7348H9.67499V32.7848H20.335V29.7348H18.815V31.2548H11.195Z" fill="#0f0e0c"/>
<path d="M17.285 16.0248H12.715V17.5448H17.285V16.0248Z" fill="#0f0e0c"/>
<path d="M17.285 19.0648H12.715V20.5948H17.285V19.0648Z" fill="#0f0e0c"/>
<path d="M14.245 0.78479V2.30479H12.715V3.83479H11.195V5.35479H9.67499V6.87479H12.715V14.4948H17.285V6.87479H20.335V5.35479H18.815V3.83479H17.285V2.30479H15.765V0.78479H14.245Z" fill="#0f0e0c"/>
<path d="M8.14499 6.87479H2.05499V8.40479H8.14499V6.87479Z" fill="#0f0e0c"/>
</svg>
 <p className={styles.dropZoneText}>DRAG & DROP IMAGES HERE OR CLICK TO SELECT FILES</p>
      <p className={styles.supportedFormats}>SUPPORTS PNG, JPG, GIF & SVG</p>
    </div>
  );
}

export default DropZone;