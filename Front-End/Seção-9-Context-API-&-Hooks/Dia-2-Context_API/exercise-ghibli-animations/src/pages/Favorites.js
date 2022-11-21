import { useContext } from 'react';
import FavoriteContext from '../context/FavoriteContext';
import Header from '../components/Header';
import '../styles/Home&Favorites.css';

export default function Favorites() {
  const { favorites, handleFavorite } = useContext(FavoriteContext);
  const numberMax = 100;

  const filmList = favorites.map((film) => (
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
        Remover dos favoritos
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
