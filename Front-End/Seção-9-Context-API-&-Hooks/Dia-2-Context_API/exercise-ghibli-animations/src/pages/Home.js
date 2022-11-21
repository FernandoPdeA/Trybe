import React, { useContext } from 'react';
import Header from '../components/Header';
import FavoriteContext from '../context/FavoriteContext';
import FilmContext from '../context/FilmsContext';
import '../styles/Home&Favorites.css';

export default function Home() {
  const { films } = useContext(FilmContext);
  const { handleFavorite } = useContext(FavoriteContext);
  const numberMax = 100;

  const filmList = films.map((film) => (
    <div className="filme" key={ film.id }>
      <h1>{film.title}</h1>
      <img src={ film.image } alt={ film.title } />
      <p>
        {film.description.length > numberMax
          ? `${film.description.substring(0, numberMax)}...`
          : film.description}
      </p>
      <button
        type="button"
        onClick={ () => handleFavorite(film.id) }
      >
        Adicionar aos favoritos
      </button>
    </div>
  ));

  return (
    <>
      <Header />
      <div className="filmes">
        {filmList}
      </div>
    </>
  );
}
