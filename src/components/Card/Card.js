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
        tabIndex={id}
        onClick={() => handleLike()}
        aria-label="heart shaped button to like image"
      ></i>
      <img
        src={image}
        alt={`${rover} ${camera}`}
        className="image"
        id="image"
      ></img>
      <section className="description-wrapper">
        <p className="description">Rover: {rover}</p>
        <p className="description">Date taken: {earthDate}</p>
        <p className="description">Camera: {camera}</p>
      </section>
    </div>
  );
};

export default Card;
