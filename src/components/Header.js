import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">prime video</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/movies">TV shows</Link>
        <Link to="/my-stuff">My Stuff</Link>
      </nav>
    </header>
  );
}

export default Header;