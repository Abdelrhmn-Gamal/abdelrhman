import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import MoviesPage from './pages/MoviesPage';
import MyStuffPage from './pages/MyStuffPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/my-stuff" element={<MyStuffPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;