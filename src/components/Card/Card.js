import React from 'react';
import './Card.css';

const Card = ({ title, image, rover, earthDate, camera, id }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="image"></img>
      <p>Rover: {rover}</p>
      <p>Date taken: {earthDate}</p>
    </div>
  );
};

export default Card;
