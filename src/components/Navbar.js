// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/game1">Memory Game 1</Link></li>
        <li><Link to="/game2">Memory Game 2</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;