// components/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-links">
      <Link to="/memoryGame">
        <img src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYQsN2l67ybcWC-lPIjYK6WEIXqsrZpiwDRBimD9Yx1EC-WRQ7wv7x7S3Az-LZWoJ0JxRHoFYg66TaoJIL4cFdyTLcth=s2560" alt="Memory Game" className="home-image" />
        
      </Link>
      <Link to="/game1">
        <img src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYQm-VuQouW7AmiSHPtg6JMDUzHsyyvSkKIxaQIBrgeqrsu5TvRT82yp6OJMI6xFHPzPDIl93ntqgZhD6lMHIfE9QqlT=s2560" alt="Dad Jokes" className="home-image" />
      </Link>
      <Link to="/game2">
        <img src=" https://lh3.googleusercontent.com/drive-viewer/AEYmBYSp_slmcz8IEt3o0-c-KodyN_jsIpXGBhOhNj81boh9gG0v8fdKAQhLb0AcjabtxT-Mm0emaqqScCFtj-4lE6h18iDdUQ=s2560
     " alt="Drawing" className="home-image" />
       
      </Link>
      <Link to="/game3">
        <img src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYRhoExaCv6IvuVsUqzr0Fkwi5whwrN-mPSuEx2YmaDyPl0777IzdhF6cDiW8zB_frPZ79yszCrMVwbWIEEnk2P2fHE-=s2560" alt="Drawing" className="home-image" />
      </Link>
    </div>
  );
};

export default HomePage;
