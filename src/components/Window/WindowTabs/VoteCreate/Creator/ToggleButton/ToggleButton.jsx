// ToggleButton.jsx
import React from 'react';
import InnerFill from './InnerFill';
import OuterShape from './OuterShape';

const ToggleButton = ({ isActive, onClick }) => {
    return (
        <div onClick={onClick} style={styles.toggleContainer}>
            {/* OuterShape SVG */}
            <OuterShape />
            <div style={{ ...styles.innerFill, transform: isActive ? 'translateX(8px)' : 'translateX(0)' }}>
            {/* InnerFill SVG with conditional transform */}
           
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
    top: '3.25px',
    left: '3px',
    transition: 'transform 0.1s ease',
  },
};

export default ToggleButton;





