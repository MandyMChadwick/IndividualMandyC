// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Memory Game</Link>
        <br></br>
        <Link to="/game1" className="navbar-brand">Dad Jokes</Link>
        <br></br>
        <Link to="/game2" className="navbar-brand">Drawing Place</Link>
        <br></br>
       
        <Link to="/game3" className="navbar-brand">Nursery Rhymes</Link>
      </div>
    </nav>
  );
}

export default Navbar;
