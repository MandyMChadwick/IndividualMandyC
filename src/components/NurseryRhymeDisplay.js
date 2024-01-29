import React, { useState } from 'react';
import nurseryRhymes from './nurseryRhymns.json'; // Adjust the import path based on your project structure

const NurseryRhymeDisplay = () => {
  const [currentRhyme, setCurrentRhyme] = useState({});

  const getRandomRhyme = () => {
    const randomIndex = Math.floor(Math.random() * nurseryRhymes.length);
    const newRhyme = nurseryRhymes[randomIndex];
    setCurrentRhyme(newRhyme);
  };

  return (
    <div>
      <h2>Nursery Rhyme Display</h2>
      <button onClick={getRandomRhyme}>Get Random Rhyme</button>
      {currentRhyme && (
        <div>
          <h3>{currentRhyme.title}</h3>
          <p>{currentRhyme.lyrics}</p>
        </div>
      )}
    </div>
  );
};

export default NurseryRhymeDisplay;
