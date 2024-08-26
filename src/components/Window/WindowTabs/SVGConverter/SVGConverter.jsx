import React, { useState } from 'react';

const SVGConverter = () => {
  const [svgContent, setSvgContent] = useState('');
  const [convertedImage, setConvertedImage] = useState(null);

  const handleSvgUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => setSvgContent(e.target.result);
    reader.readAsText(file);
  };

  const handleConversion = () => {
    // Example: SVG to PNG conversion logic here
    // setConvertedImage(convertedImageBlob);
  };

  return (
    <div>
      <h2>SVG Converter</h2>
      <input type="file" accept=".svg" onChange={handleSvgUpload} />
      <button onClick={handleConversion}>Convert to PNG</button>
      {convertedImage && (
        <div>
          <h3>Converted Image</h3>
          <img src={URL.createObjectURL(convertedImage)} alt="Converted" />
        </div>
      )}
    </div>
  );
};

export default SVGConverter;
