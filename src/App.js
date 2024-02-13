import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Update this line
import Navbar from './components/Navbar';
import Cards from './components/cards';
import HomePage from './components/home';
import NurseryRhymeDisplay from './components/NurseryRhymeDisplay';
import DrawingApp from './components/DrawingApp';
import JokeDisplay from './components/JokeDisplay';

import './components/Navbar.css';

function App() {
  return (
    
    <Router>
        <Navbar />
      <div >
      
        <div className="content">
          <div className="title-container">
            <br></br>
            <br></br>
            <h1>Fun With Mom and Dad</h1>
          </div>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/memoryGame" element={<Cards />} />
            <Route path="/game1" element={<JokeDisplay/>} />
            <Route path="/game2" element={<DrawingApp />} />
            <Route path="/game3" element={<NurseryRhymeDisplay/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;