import React from 'react';

function Scoreboard({ currentScore, highestScore }) {
  return (
    <div className='scoreboard'>
      <h2 className='scoreboard__score'>Current Score: {currentScore}</h2>
      <h2 className='scoreboard__score'>Highest Score: {highestScore}</h2>
    </div>
  );
}

export default Scoreboard;
