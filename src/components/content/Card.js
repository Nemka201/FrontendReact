import React from 'react';

const Card = ({ image, title, text }) => {
    const imagenPath = require('../../assets/card/' + image);
    return (
      <div className="card" style={{ width: '18rem' }}>
        <img src={imagenPath} className="card-img-top" alt="habitacion" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href="/" className="btn btn-primary botoncard">Ver Habitacion</a>
        </div>
      </div>
    );
  };

export default Card;