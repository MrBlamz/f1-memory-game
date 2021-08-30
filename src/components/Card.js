import React from 'react';

function Card({ url, name, handleImageClick }) {
  return (
    <button className='card' onClick={() => handleImageClick(name)}>
      <img className='card__image' src={url} alt='' />
    </button>
  );
}

export default Card;
