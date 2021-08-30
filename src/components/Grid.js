import React from 'react';
import Card from './Card';

function Grid({ data, handleImageClick }) {
  const cards = data.map((item) => (
    <Card
      key={item.id}
      url={item.url}
      name={item.name}
      handleImageClick={handleImageClick}
    />
  ));

  return <div className='grid'>{cards}</div>;
}

export default Grid;
