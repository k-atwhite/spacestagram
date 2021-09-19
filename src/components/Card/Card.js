import React from 'react';
import './Card.css';

const Card = ({
  image,
  rover,
  earthDate,
  camera,
  id,
  entireCard,
  likePhoto,
  unlikePhoto
}) => {
  return (
    <div className="card">
      <i
        className="fas fa-heart"
        id={id}
        onClick={(event) => likePhoto(entireCard)}
      ></i>
      <img
        src={image}
        alt={`${rover} ${camera}`}
        className="image"
        id="image"
      ></img>
      <p>Rover: {rover}</p>
      <p>Date taken: {earthDate}</p>
    </div>
  );
};

export default Card;
