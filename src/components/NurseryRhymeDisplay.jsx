// NurseryRhymeDisplay.jsx
import React, { useState } from 'react';
import nurseryRhymes from './nurseryRhymns.json';
import './NurseryRhymeDisplay.css'; // Adjust the import path based on your project structure

const NurseryRhymeDisplay = () => {
  const [currentRhyme, setCurrentRhyme] = useState({});

  const getRandomRhyme = () => {
    const randomIndex = Math.floor(Math.random() * nurseryRhymes.length);
    const newRhyme = nurseryRhymes[randomIndex];
    setCurrentRhyme(newRhyme);
  };

  return (
    <div id="nursery-container">
      <h2 id="rhyme-title">Nursery Rhymes</h2>
      <button id="random-button" onClick={getRandomRhyme}>
        Get A Rhyme
      </button>
      {currentRhyme && (
        <div id="rhyme-details">
          <h3 id="rhyme-title">{currentRhyme.title}</h3>
          <p id="rhyme-lyrics">{currentRhyme.lyrics}</p>
        </div>
      )}
    </div>
  );
};

export default NurseryRhymeDisplay;
