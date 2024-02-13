
// MemoryGame1.js
import React, { useState } from 'react';
import dadJokes from './dadJokes.json'; // Adjust the import path based on your project structure
import './JokeDisplay.css'
const MemoryGame1 = () => {
  const [currentJoke, setCurrentJoke] = useState({});
  const [showAnswer, setShowAnswer] = useState(false);

  const getRandomJoke = () => {
    const randomIndex = Math.floor(Math.random() * dadJokes.length);
    const newJoke = dadJokes[randomIndex];
    setCurrentJoke(newJoke);
    setShowAnswer(false);
  };

  const revealAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <div>
      <h2 class="dad-jokes-title">Dad Joke:</h2>
      <p>{currentJoke.setup}</p>
      <button onClick={getRandomJoke}>Get Another Joke</button>
      <button onClick={revealAnswer} disabled={!currentJoke.setup || showAnswer}>
        Reveal Answer
      </button>
      {showAnswer && <p>{currentJoke.punchline}</p>}
    </div>
  );
};

export default MemoryGame1;
