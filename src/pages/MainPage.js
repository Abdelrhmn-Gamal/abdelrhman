import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import './MainPage.css';

function MainPage() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const banners = [
    {
      title: 'BE HAPPY',
      description: 'A joyful journey of self-discovery.',
      image: 'https://via.placeholder.com/1920x500?text=Be+Happy',
      included: 'Included with Prime',
    },
    {
      title: 'The Wheel of Time',
      description: 'Season 3 - A sorceress guides five youths on a perilous journey.',
      image: 'https://via.placeholder.com/1920x500?text=Wheel+of+Time',
      included: 'Included with Prime',
    },
  ];

  const contentRows = [
    {
      title: 'Recommended movies',
      items: [
        { title: 'Sultan', image: 'https://picsum.photos/200/300?random=1' },
        { title: 'Red One', image: 'https://picsum.photos/200/300?random=2' },
        { title: 'Jawan', image: 'https://picsum.photos/200/300?random=3' },
        { title: 'Fast & Furious', image: 'https://picsum.photos/200/300?random=4' },
      ],
    },
    {
      title: 'Popular movies with Arabic sub',
      items: [
        { title: 'Beast', image: 'https://picsum.photos/200/300?random=5' },
        { title: 'Reacher', image: 'https://picsum.photos/200/300?random=6' },
        { title: 'Dupahiya', image: 'https://picsum.photos/200/300?random=7' },
      ],
    },
    {
      title: 'TV shows we think you\'ll like',
      items: [
        { title: 'Game of Thrones', image: 'https://picsum.photos/200/300?random=8' },
        { title: 'Breaking Bad', image: 'https://picsum.photos/200/300?random=9' },
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000); // Change banner every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-page">
      {/* Banner Carousel */}
      <div className="banner">
        <img src={banners[currentBanner].image} alt={banners[currentBanner].title} className="banner-image" />
        <div className="banner-content">
          <h1>{banners[currentBanner].title}</h1>
          <p>{banners[currentBanner].description}</p>
          <div className="banner-buttons">
            <button className="watch-now">Watch now</button>
            <button className="add-to-list">+</button>
            <button className="info">ⓘ</button>
          </div>
          <span className="included-with-prime">{banners[currentBanner].included}</span>
        </div>
        <div className="banner-dots">
          {banners.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentBanner === index ? 'active' : ''}`}
              onClick={() => setCurrentBanner(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* Content Rows */}
      {contentRows.map((row, index) => (
        <section key={index} className="content-section">
          <h2>{row.title}</h2>
          <div className="movie-list">
            {row.items.map((item, idx) => (
              <MovieCard key={idx} title={item.title} image={item.image} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default MainPage;