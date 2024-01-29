import React, { useState } from 'react';
import './DrawingApp.css'; // Include the associated CSS file for styling

const DrawingApp = () => {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [drawing, setDrawing] = useState(false);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleMouseDown = () => {
    setDrawing(true);
  };

  const handleMouseUp = () => {
    setDrawing(false);
  };

  const handleMouseOver = (e) => {
    if (drawing) {
      e.target.style.backgroundColor = selectedColor;
    }
  };

  const clearDrawing = () => {
    const cells = document.querySelectorAll('.drawing-cell');
    cells.forEach((cell) => (cell.style.backgroundColor = 'white'));
  };

  return (
    <div className="drawing-app">
      <div className="color-palette">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color"
            style={{ backgroundColor: color }}
            onClick={() => handleColorChange(color)}
          ></div>
        ))}
      </div>
      <div className="drawing-area" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
        {Array.from({ length: 400 }, (_, index) => (
          <div
            key={index}
            className="drawing-cell"
            onMouseOver={handleMouseOver}
          ></div>
        ))}
      </div>
      <button className="clear-button" onClick={clearDrawing}>
        Clear Drawing
      </button>
    </div>
  );
};

export default DrawingApp;
