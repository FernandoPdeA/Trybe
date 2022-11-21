import { useState, useMemo, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import FilmContext from './FilmsContext';

function FilmsFechProvider({ children }) {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    function fetchFilms() {
      fetch('https://ghibliapi.herokuapp.com/films')
        .then((response) => response.json())
        .then((data) => setFilms(data));
    }
    fetchFilms();
  }, []);

  const values = useMemo(() => ({ films }), [films]);

  return (
    <FilmContext.Provider value={ values }>
      {children}
    </FilmContext.Provider>
  );
}

export default FilmsFechProvider;

FilmsFechProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
