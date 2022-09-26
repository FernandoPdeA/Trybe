import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VideoGame from './VideoGame';

class VideoGameList extends Component {
  constructor() {
    super();

    this.state = {
      filterName: '',
    };
  }

  handleFilter = (event) => {
    console.log(event.target.value);

    this.setState({
      filterName: event.target.value,
    });
  };

  render() {
    const { games } = this.props;
    const { filterName } = this.state;
    const filteredGames = games.filter((game) => (
      game.title.toLowerCase().includes(filterName.toLowerCase())));

    return (
      <>
        <input type="text" onChange={ this.handleFilter } />
        <h4>
          O termo pesquisado é
          {' '}
          { filterName }
          {' '}
        </h4>
        <section className="video-game-list">
          { filteredGames.map((jogo) => (
            <VideoGame
              key={ jogo.id }
              game={ jogo }
            />
          )) }
        </section>
      </>
    );
  }
}

VideoGameList.propTypes = {
  games: PropTypes.arrayOf(),
};

VideoGameList.defaultProps = {
  games: [],
};

export default VideoGameList;

// input.addEventListener('change', (event) => {});
