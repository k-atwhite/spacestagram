import React from 'react';
import './Cards.css';
import Card from '../Card/Card';

const Cards = ({ data }) => {
  const imageCards = data.map((datum) => {
    return (
      <Card
        title={`${datum.rover.name} ${datum.camera.full_name} ${datum.earth_date}`}
        image={datum.img_src}
        id={datum.id}
        key={datum.id}
      />
    );
  });
  return <div className="image-container">{imageCards}</div>;
};

export default Cards;
