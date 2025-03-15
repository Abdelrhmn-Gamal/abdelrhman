import React from 'react';
import MovieCard from '../components/MovieCard';
import './MoviesPage.css';

function MoviesPage() {
  const featuredMovie = {
    title: 'Dune: Part Two',
    description: 'Paul Atreides unites with the Fremen to fight against House Harkonnen.',
    image: 'https://via.placeholder.com/1920x500?text=Dune+Part+Two',
    included: 'Included with Prime',
  };

  const movieCategories = [
    {
      title: 'Action Movies',
      items: [
        { title: 'The Matrix', image: 'https://picsum.photos/200/300?random=1' },
        { title: 'Mad Max: Fury Road', image: 'https://picsum.photos/200/300?random=2' },
        { title: 'John Wick', image: 'https://picsum.photos/200/300?random=3' },
        { title: 'Gladiator', image: 'https://picsum.photos/200/300?random=4' },
        { title: 'Die Hard', image: 'https://picsum.photos/200/300?random=5' },
      ],
    },
    {
      title: 'Comedy Movies',
      items: [
        { title: 'Superbad', image: 'https://picsum.photos/200/300?random=6' },
        { title: 'The Hangover', image: 'https://picsum.photos/200/300?random=7' },
        { title: 'Deadpool', image: 'https://picsum.photos/200/300?random=8' },
        { title: 'Zombieland', image: 'https://picsum.photos/200/300?random=9' },
      ],
    },
    {
      title: 'Drama Movies',
      items: [
        { title: 'The Shawshank Redemption', image: 'https://picsum.photos/200/300?random=10' },
        { title: 'Forrest Gump', image: 'https://picsum.photos/200/300?random=11' },
        { title: 'The Godfather', image: 'https://picsum.photos/200/300?random=12' },
        { title: '12 Years a Slave', image: 'https://picsum.photos/200/300?random=13' },
      ],
    },
    {
      title: 'New Releases',
      items: [
        { title: 'Oppenheimer', image: 'https://picsum.photos/200/300?random=14' },
        { title: 'Barbie', image: 'https://picsum.photos/200/300?random=15' },
        { title: 'Mission: Impossible - Dead Reckoning', image: 'https://picsum.photos/200/300?random=16' },
        { title: 'The Marvels', image: 'https://picsum.photos/200/300?random=17' },
      ],
    },
  ];

  return (
    <div className="movies-page">
      {/* Featured Movie Banner */}
      <div className="banner">
        <img src={featuredMovie.image} alt={featuredMovie.title} className="banner-image" />
        <div className="banner-content">
          <h1>{featuredMovie.title}</h1>
          <p>{featuredMovie.description}</p>
          <div className="banner-buttons">
            <button className="watch-now">Watch now</button>
            <button className="add-to-list">+</button>
            <button className="info">ⓘ</button>
          </div>
          <span className="included-with-prime">{featuredMovie.included}</span>
        </div>
      </div>

      {/* Movie Categories */}
      {movieCategories.map((category, index) => (
        <section key={index} className="content-section">
          <h2>{category.title}</h2>
          <div className="movie-list">
            {category.items.map((item, idx) => (
              <MovieCard key={idx} title={item.title} image={item.image} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default MoviesPage;