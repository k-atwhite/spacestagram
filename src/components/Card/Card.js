import React, { useState } from 'react';
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
  const [liked, setLikeStatus] = useState(false);

  const handleLike = () => {
    setLikeStatus(!liked);
    if (liked) {
      unlikePhoto(id);
    } else {
      likePhoto(entireCard);
    }
  };

  return (
    <div className="card">
      <i
        className={`fas fa-heart ${liked && 'favorite'}`}
        id={id}
        onClick={() => handleLike()}
      ></i>
      <img
        src={image}
        alt={`${rover} ${camera}`}
        className="image"
        id="image"
      ></img>
      <p className="description">Rover: {rover}</p>
      <p className="description">Date taken: {earthDate}</p>
    </div>
  );
};

export default Card;
