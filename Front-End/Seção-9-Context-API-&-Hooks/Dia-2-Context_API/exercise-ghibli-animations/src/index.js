import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import FilmFechProvider from './context/FilmesProvider';
import FavoriteProvider from './context/FavoriteProvider';

console.log(FavoriteProvider);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <FilmFechProvider>
      <FavoriteProvider>
        <App />
      </FavoriteProvider>
    </FilmFechProvider>
  </BrowserRouter>,
);
