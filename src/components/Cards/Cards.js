import React from 'react';
import './Cards.css';
const Cards = ({ images }) => {
  const imageCards = images.map((image) => {
    return (
      <Card
        title={idea.title}
        description={idea.description}
        id={idea.id}
        key={idea.id}
      />
    );
  });
  return <div className="image-container">{imageCards}</div>;
};

export default Cards;
