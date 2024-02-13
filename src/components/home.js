// components/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      <Link to="/memoryGame" className="card memory-game">
        <img src="/path-to-memory-game-image.jpg" alt="Memory Game" />
        <p>Memory Game</p>
      </Link>
      <Link to="/game1" className="card dad-jokes">
        <img src="/path-to-dad-jokes-image.jpg" alt="Dad Jokes" />
        <p>Dad Jokes</p>
      </Link>
      <Link to="/game2" className="card drawing">
        <img src="/path-to-drawing-image.jpg" alt="Drawing" />
        <p>Drawing</p>
      </Link>
      <Link to="/game3" className="card nursery-rhymes">
        <img src="/path-to-nursery-rhymes-image.jpg" alt="Nursery Rhymes" />
        <p>Nursery Rhymes</p>
      </Link>
    </div>
  );
};

export default HomePage;
