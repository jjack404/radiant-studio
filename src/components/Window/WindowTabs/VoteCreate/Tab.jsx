import React from 'react';
import styles from './VoteCreateContainer.module.css';

const Tab = ({ label, isActive, onClick }) => {
  return (
    <button 
      className={`${styles.tab} ${isActive ? styles.activeTab : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Tab;