import React, { useState } from 'react';
import './DrawingApp.css'; // Include the associated CSS file for styling

const DrawingApp = () => {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [drawing, setDrawing] = useState(false);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const startDrawing = () => {
    setDrawing(true);
  };

  const stopDrawing = () => {
    setDrawing(false);
  };

  const draw = (e) => {
    // Prevent the default touch behavior like scrolling
    e.preventDefault();
    if (!drawing) return;

    let target;
    // Check if it's a touch event
    if (e.touches) {
      target = document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY);
    } else {
      target = e.target;
    }

    if (target.classList.contains('drawing-cell')) {
      target.style.backgroundColor = selectedColor;
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
      <button className="clear-button" onClick={clearDrawing}>
        Clear Drawing
      </button>
      <div className="drawing-area" 
           onMouseDown={startDrawing} 
           onMouseUp={stopDrawing} 
           onMouseLeave={stopDrawing} // Add this to handle the cursor leaving the drawing area
           onMouseOver={draw} // Keep for desktop
           onTouchStart={startDrawing}
           onTouchMove={draw}
           onTouchEnd={stopDrawing}>
        {Array.from({ length: 400 }, (_, index) => (
          <div
            key={index}
            className="drawing-cell"
            // Remove onMouseOver here as it's handled in the drawing-area
          ></div>
        ))}
      </div>
    </div>
  );
};

export default DrawingApp;
