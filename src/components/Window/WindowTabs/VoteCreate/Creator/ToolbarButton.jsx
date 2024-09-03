import React from 'react';
import styles from './Creator.module.css';

const ToolbarButton = ({ iconSrc, onClick }) => {
  return (
    <button
      style={{ cursor: 'pointer', padding: 0, margin: 'auto', display: 'flex', background: 'none', border: 0 }}
      onClick={onClick}
    >
      <img src={iconSrc} alt="" className={`${styles.icon} ${styles.smallIcon}`} />
    </button>
  );
};

export default ToolbarButton;