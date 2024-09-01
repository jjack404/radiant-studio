import React from 'react';
import styles from './Creator.module.css';

const ToolbarButton = ({ iconSrc }) => {
  return (
    <button
    style={{ padding: 0, margin: 'auto', display: 'flex', background: 'none', border: 0 }}><img src={iconSrc} alt="" className={`${styles.icon} ${styles.smallIcon}`} /></button>
  );
};

export default ToolbarButton;