import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VideoGame from './VideoGame';

class VideoGameList extends Component {
  render() {
    const { games } = this.props;

    return (
      <section>
        {games.map((jogo) => (
          <VideoGame
            key={jogo.id}
            game={jogo}
          />
        ))}
      </section>
    );
  }
}

VideoGameList.propTypes = {
  games: PropTypes.array,
}

VideoGameList.defaultProps = {
  games: [],
}

export default VideoGameList;


// undefined.map()