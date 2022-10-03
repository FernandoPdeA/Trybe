import React from 'react';
import { Link } from 'react-router-dom';
import Routes from './Routes';
import './styles/oneOnly.css';

function App() {
  return (
    <div className="oneOnly">
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <Routes />
    </div>
  );
}

export default App;
