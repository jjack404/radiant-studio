// ActionButton.jsx
import React from 'react';
import styles from './Creator.module.css'; // Adjust if your CSS file is named differently

const ActionButton = ({ iconSrc, label, onClick, submit }) => {
    return (
        <button 
            className={`${styles.actionButton} ${submit ? styles.submitButton : styles.clearSaveButtons}`}
            onClick={onClick} // Ensure the onClick handler is properly passed and used
        >
            {iconSrc && <img src={iconSrc} alt={`${label} icon`} className={styles.icon} />}
            {label}
        </button>
    );
};

export default ActionButton;
