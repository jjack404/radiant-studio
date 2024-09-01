// ColorPalette.jsx
import React, { useState } from 'react';
import styles from './Creator.module.css'; // Adjust if your CSS file is named differently

const ColorPalette = ({ onColorChange }) => {
    const [selectedColor, setSelectedColor] = useState('black'); // Default selected color is 'black'

    const colors = [
        { name: 'cream', hex: '#fef8e2' },
        { name: 'yellow', hex: '#fce184' },
        { name: 'black', hex: '#0f0e0c' },
    ];

    const handleColorClick = (color) => {
        setSelectedColor(color.name);
        onColorChange(color.hex); // Notify parent about color change
    };

    return (
        <div className={styles.colorPalette}>
            {colors.map((color) => (
                <div
                    key={color.name}
                    className={`${styles.colorSwatch} ${styles[color.name]} ${selectedColor === color.name ? styles.active : ''}`}
                    onClick={() => handleColorClick(color)}
                />
            ))}
        </div>
    );
};

export default ColorPalette;
