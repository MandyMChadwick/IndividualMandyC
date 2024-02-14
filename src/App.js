import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Update this line
import Navbar from './components/Navbar';
import Cards from './components/cards';
import HomePage from './components/home';
import NurseryRhymeDisplay from './components/NurseryRhymeDisplay';
import DrawingApp from './components/DrawingApp';
import JokeDisplay from './components/JokeDisplay';
import SplashPage from './components/splash';

import './components/Navbar.css';

function App() {
  return (
    
    <Router>
        <Navbar />
        
      <div >
      
        <div className="content">
 
            <HomePage/>
          <Routes>
            <Route path="/" element={<SplashPage/>} />
            <Route path="/memoryGame" element={<Cards />} />
            <Route path="/jokes" element={<JokeDisplay/>} />
            <Route path="/draw" element={<DrawingApp />} />
            <Route path="/rhymes" element={<NurseryRhymeDisplay/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;