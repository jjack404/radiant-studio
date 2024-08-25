import React, { useState } from 'react';
import styles from './VoteCreateContainer.module.css';
import Tab from './Tab';
import Creator from './Creator/Creator';
import Vote from "./Vote/Vote";

const VoteCreateContainer = () => {
  const [activeTab, setActiveTab] = useState('Creator');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <main className={styles.container}>
      <div className={styles.containerPaletteWrap}>
        <div className={styles.tabContainer}>
          <div className={styles.tabWrapper}>
            <Tab 
              label="Art Voting" 
              isActive={activeTab === 'Art Voting'} 
              onClick={() => handleTabClick('Art Voting')}
            />
            <Tab 
              label="Creator" 
              isActive={activeTab === 'Creator'} 
              onClick={() => handleTabClick('Creator')}
            />
          </div>
        </div>
        
        {activeTab === 'Art Voting' ? <Vote /> : <Creator />}
      </div>    
    </main>
  );
};

export default VoteCreateContainer;