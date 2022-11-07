import React from 'react';
import { connect } from 'react-redux';
import './Player.css';

function Player({ category, movie }) {
  return (
    <div className="player">
      <fieldset>
        <legend>Player</legend>
        <h1>{category.name}</h1>
        <h2>{movie.title}</h2>
        <h3>{movie.released}</h3>
        <iframe
          width="320"
          height="240"
          src={ `https://www.youtube.com/embed/${movie.embedId}` }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media;
          gyroscope; picture-in-picture"
          allowFullScreen
        />
      </fieldset>
    </div>
  );
}

const mapStateToProps = (globalState) => ({
  category: globalState.movie.selectedCategory,
  movie: globalState.movie.selectedMovie,
});

export default connect(mapStateToProps)(Player);
