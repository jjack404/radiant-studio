import React, { useState } from 'react';
import OuterShape from './OuterShape';
import InnerFill from './InnerFill';

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div onClick={handleToggle} style={styles.toggleContainer}>
      <OuterShape />
      <div style={{ ...styles.innerFill, transform: isToggled ? 'translateX(8px)' : 'translateX(0)' }}>
        <InnerFill />
      </div>
    </div>
  );
};

const styles = {
  toggleContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: '33px',
    height: '18px',
    cursor: 'pointer',
  },
  innerFill: {
    position: 'absolute',
    top: '3.5px',
    left: '3px',
    transition: 'transform 0.1s ease',
  },
};

export default ToggleButton;
