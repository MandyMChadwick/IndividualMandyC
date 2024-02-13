// JokeDisplay.js
import React, { useState } from 'react';
import dadJokes from './dadJokes.json'; // Adjust the import path based on your project structure
import './JokeDisplay.css'; // Adjust the import path based on your project structure

const JokeDisplay = () => {
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
    <div id="joke-container">
      <h2 id="joke-title">Dad Joke:</h2>
      <p id="joke-setup">{currentJoke.setup}</p>
      <button id="get-joke-button" onClick={getRandomJoke}>
        Get A Joke
      </button>
      <button id="reveal-answer-button" onClick={revealAnswer} disabled={!currentJoke.setup || showAnswer}>
        Reveal Answer
      </button>
      {showAnswer && <p id="joke-punchline">{currentJoke.punchline}</p>}
    </div>
  );
};

export default JokeDisplay;
