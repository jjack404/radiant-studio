import React from 'react';
import styles from './Creator.module.css';

const ActionButton = ({ iconSrc, label, onClick, submit }) => {
  return (
    <button 
      className={`${styles.actionButton} ${submit ? styles.submitButton : styles.clearSaveButtons}`} 
      onClick={onClick}  // Add onClick handler
    >
      <img src={iconSrc} alt="" className={`${styles.icon} ${styles.smallIcon}`} />
      <span>{label}</span>
    </button>
  );
};

export default ActionButton;
