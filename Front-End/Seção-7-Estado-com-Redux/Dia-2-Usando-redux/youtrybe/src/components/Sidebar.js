import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../redux/actions';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    const { categories, dispatch } = this.props;
    return (
      <aside>
        <fieldset>
          <legend>Sidebar</legend>
          {categories.map((category) => (
            <div key={ category.id }>
              <h3>{category.name}</h3>
              <ul>
                {category.movies.map((movie) => (
                  <li key={ movie.id }>
                    <button
                      type="button"
                      onClick={ () => dispatch(selectMovie(movie, category)) }
                    >
                      Assistir
                    </button>
                    <div className="movie_title">
                      {movie.title}
                      <small>
                        {` (was released in ${movie.released})`}
                      </small>

                    </div>

                  </li>
                ))}
              </ul>
            </div>
          ))}
        </fieldset>
      </aside>
    );
  }
}

const mapStateToProps = (globalState) => ({
  categories: globalState.movie.categories,
});

export default connect(mapStateToProps)(Sidebar);
