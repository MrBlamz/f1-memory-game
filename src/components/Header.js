import React from 'react';
import Scoreboard from './Scoreboard';

function Header({ title, currentScore, highestScore }) {
  return (
    <header className='header'>
      <h1 className='header__title'>{title}</h1>
      <Scoreboard currentScore={currentScore} highestScore={highestScore} />
    </header>
  );
}

export default Header;
