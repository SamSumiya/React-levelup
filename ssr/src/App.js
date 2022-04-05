// import './App.css';
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import { About } from './pages/About';
import { Articles } from './pages/Articles'

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </>
  );
}

export default App;
