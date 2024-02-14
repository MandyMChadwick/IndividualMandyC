import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        Home
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>

      <li>
          <NavLink to="/memoryGame">Memory Game</NavLink>
        </li>
        <li>
          <NavLink to="/jokes">Dad Jokes</NavLink>
        </li>
        <li>
          <NavLink to="/draw">Drawing</NavLink>
        </li>
        <li>
          <NavLink to="/rhymes">Nursery Rhymnes</NavLink>
        </li>
      </ul>
    </nav>
  );
};

// // Navbar.js

// import React from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <nav id="main-navbar">
//       <div id="navbar-container">
//         <Link to="/" id="brand-link">Memory Game</Link>
//         <br />
//         <Link to="/game1" id="game1-link">Dad Jokes</Link>
//         <br />
//         <Link to="/game2" id="game2-link">Drawing Place</Link>
//         <br />
//         <Link to="/game3" id="game3-link">Nursery Rhymes</Link>
//       </div>
//     </nav>
//   );
// }

export default Navbar;
