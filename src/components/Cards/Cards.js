import React from 'react';
import './Cards.css';
import Card from '../Card/Card';

const Cards = ({ data, likePhoto, unlikePhoto }) => {
  const imageCards = data.map((datum) => {
    return (
      <Card
        image={datum.img_src}
        rover={datum.rover.name}
        earthDate={datum.earth_date}
        camera={datum.camera.name}
        id={datum.id}
        key={datum.id}
        likePhoto={likePhoto}
        unlikePhoto={unlikePhoto}
        entireCard={datum}
      />
    );
  });
  return <div className="image-container">{imageCards}</div>;
};

export default Cards;
