import React, { useState } from 'react';

const BgRemover = () => {
  const [image, setImage] = useState(null);
  const [removedBgImage, setRemovedBgImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
    // Implement the logic to remove the background here
  };

  const handleBgRemoval = () => {
    // Example: Background removal logic here
    // setRemovedBgImage(processedImage);
  };

  return (
    <div>
      <h2>Background Remover</h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <button onClick={handleBgRemoval}>Remove Background</button>
      {removedBgImage && (
        <div>
          <h3>Image with Removed Background</h3>
          <img src={URL.createObjectURL(removedBgImage)} alt="With Removed Background" />
        </div>
      )}
    </div>
  );
};

export default BgRemover;
