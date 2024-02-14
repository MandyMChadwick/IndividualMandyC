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
export default Navbar;
