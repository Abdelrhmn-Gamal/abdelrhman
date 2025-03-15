import React from 'react';
import './MovieCard.css';

function MovieCard({ title, image }) {
  return (
    <div className="movie-card">
      <img src={image} alt={title} />
      <div className="overlay">
        <button className="play-button">▶</button>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;