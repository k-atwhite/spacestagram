import React from 'react';
import './Card.css';

const Card = ({ title, image, id, key }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <img src={image} alt={title} className="image"></img>
    </div>
  );
};

export default Card;
