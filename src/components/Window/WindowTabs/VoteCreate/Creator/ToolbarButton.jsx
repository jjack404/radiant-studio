import React from 'react';
import styles from '../VoteCreateContainer.module.css';

const ToolbarButton = ({ iconSrc }) => {
  return (
    <img src={iconSrc} alt="" className={`${styles.icon} ${styles.smallIcon}`} />
  );
};

export default ToolbarButton;