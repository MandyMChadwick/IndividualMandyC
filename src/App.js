import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Update this line
import Navbar from './components/Navbar';
import Cards from './components/cards';
import MemoryGame1 from './components/MemoryGame1';
import MemoryGame2 from './components/MemoryGame2';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <div className="content">
          <div className="title-container">
            <h1>Minding Babies</h1>
          </div>
          <Routes>
            <Route path="/" element={<Cards />} />
            <Route path="/game1" element={<MemoryGame1 />} />
            <Route path="/game2" element={<MemoryGame2 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;