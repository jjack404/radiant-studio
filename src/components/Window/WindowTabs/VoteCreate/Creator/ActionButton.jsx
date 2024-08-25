import React from 'react';
import styles from '../VoteCreateContainer.module.css';

const ActionButton = ({ iconSrc, label, submit }) => {
  return (
    <button className={`${styles.actionButton} ${submit ? styles.submitButton : styles.clearSaveButtons }`}>
      <img src={iconSrc} alt="" className={`${styles.icon} ${styles.smallIcon}`} />
      <span>{label}</span>
    </button>
  );
};

export default ActionButton;