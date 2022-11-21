import React, { useState, useContext } from 'react';
import { PropTypes } from 'prop-types';
import FavoriteContext from './FavoriteContext';
import FilmContext from './FilmsContext';

function FavoriteProvider({ children }) {
  const { films } = useContext(FilmContext);
  const [favorites, setFavorites] = useState([]);

  function handleFavorite(id) {
    const isFavorite = favorites.find((film) => film.id === id);
    if (isFavorite) {
      const newFavorites = favorites.filter((film) => film.id !== id);
      setFavorites(newFavorites);
    } else {
      const newFavorite = films.find((film) => film.id === id);
      setFavorites([...favorites, newFavorite]);
    }
  }

  const context = {
    favorites,
    handleFavorite,
  };

  return (
    <FavoriteContext.Provider value={ context }>
      {children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteProvider;

FavoriteProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
