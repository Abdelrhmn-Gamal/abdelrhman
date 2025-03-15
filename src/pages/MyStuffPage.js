import React from 'react';
import MovieCard from '../components/MovieCard';
import './MyStuffPage.css';

function MyStuffPage() {
  const myStuffSections = [
    {
      title: 'Recently Watched',
      items: [
        { title: 'Inception', image: 'https://picsum.photos/200/300?random=1' },
        { title: 'The Dark Knight', image: 'https://picsum.photos/200/300?random=2' },
        { title: 'Interstellar', image: 'https://picsum.photos/200/300?random=3' },
        { title: 'The Prestige', image: 'https://picsum.photos/200/300?random=4' },
        { title: 'Memento', image: 'https://picsum.photos/200/300?random=5' },
      ],
    },
    {
      title: 'Watchlist',
      items: [
        { title: 'The Godfather', image: 'https://picsum.photos/200/300?random=6' },
        { title: 'Pulp Fiction', image: 'https://picsum.photos/200/300?random=7' },
        { title: 'Fight Club', image: 'https://picsum.photos/200/300?random=8' },
        { title: 'Good Will Hunting', image: 'https://picsum.photos/200/300?random=9' },
        { title: 'The Departed', image: 'https://picsum.photos/200/300?random=10' },
      ],
    },
    {
      title: 'Continue Watching',
      items: [
        { title: 'Stranger Things', image: 'https://picsum.photos/200/300?random=11' },
        { title: 'Breaking Bad', image: 'https://picsum.photos/200/300?random=12' },
        { title: 'The Mandalorian', image: 'https://picsum.photos/200/300?random=13' },
        { title: 'The Witcher', image: 'https://picsum.photos/200/300?random=14' },
      ],
    },
  ];

  return (
    <div className="my-stuff-page">
      <h1>My Stuff</h1>
      {myStuffSections.map((section, index) => (
        <section key={index} className="content-section">
          <h2>{section.title}</h2>
          <div className="movie-list">
            {section.items.map((item, idx) => (
              <MovieCard key={idx} title={item.title} image={item.image} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default MyStuffPage;