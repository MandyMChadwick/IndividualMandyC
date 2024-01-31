// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav id="main-navbar">
      <div id="navbar-container">
        <Link to="/" id="brand-link">Memory Game</Link>
        <br />
        <Link to="/game1" id="game1-link">Dad Jokes</Link>
        <br />
        <Link to="/game2" id="game2-link">Drawing Place</Link>
        <br />
        <Link to="/game3" id="game3-link">Nursery Rhymes</Link>
      </div>
    </nav>
  );
}

export default Navbar;
