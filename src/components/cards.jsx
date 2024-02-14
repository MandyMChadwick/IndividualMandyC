import React, { useState } from 'react';
import Card from './card'; // Adjust the import path based on your project structure
import './cards.css'

function shuffle(array) {
  let currentIndex = array.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

function Cards() {
  const initialItems = [
    { id: 1, img: '/img/circle.png', stat: '' },
    { id: 1, img: '/img/circle.png', stat: '' },
    { id: 2, img: '/img/diamond.png', stat: '' },
    { id: 2, img: '/img/diamond.png', stat: '' },
    { id: 3, img: '/img/heart.png', stat: '' },
    { id: 3, img: '/img/heart.png', stat: '' },
    { id: 4, img: '/img/purple.png', stat: '' },
    { id: 4, img: '/img/purple.png', stat: '' },
    { id: 5, img: '/img/square.png', stat: '' },
    { id: 5, img: '/img/square.png', stat: '' },
    { id: 6, img: '/img/star.png', stat: '' },
    { id: 6, img: '/img/star.png', stat: '' },
    { id: 7, img: '/img/triangle.png', stat: '' },
    { id: 7, img: '/img/triangle.png', stat: '' },
    { id: 8, img: '/img/vue.png', stat: '' },
    { id: 8, img: '/img/vue.png', stat: '' },
  ];

  const [items, setItems] = useState(shuffle([...initialItems])); // Initial shuffle
  const [prev, setPrev] = useState(-1);

  function check(current) {
    if (prev !== -1 && prev !== current && items[current].id === items[prev].id) {
      items[current].stat = 'correct';
      items[prev].stat = 'correct';
      setItems([...items]);
      setPrev(-1);
    } else {
      items[current].stat = 'wrong';
      items[prev].stat = 'wrong';
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = '';
        items[prev].stat = '';
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  }

  function handleClick(id) {
    if (prev === -1) {
      items[id].stat = 'active';
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  }

  function restartGame() {
    setItems(shuffle([...initialItems])); // Reshuffle
    setPrev(-1);
  }

  return (
    <div>
      <h2>Memory Game</h2>
      <button className="restart-button" onClick={restartGame}>Restart</button>
      <div className="container">
        {items.map((item, index) => (
          <Card key={index} item={item} id={index} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
