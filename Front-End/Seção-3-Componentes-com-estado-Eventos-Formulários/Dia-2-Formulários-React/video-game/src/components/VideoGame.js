import React from 'react';
import PropTypes from 'prop-types';

class VideoGame extends React.Component {
  render() {
    console.log(this.props);
    const { game: { img, title, developer } } = this.props;
    // const {  img, title, developer  } = this.props.game;
    return (
      <section className="card">
        <img src={ img } alt={ `o jogo ${title}` } />
        <h1>{ title }</h1>
        <p>{ developer }</p>

        {/* <img src={ this.props.imagem } alt={ `o jogo ${this.props.titulo }`} />
        <h1>{ this.props.titulo }</h1>
        <p>{ this.props.desenvolvedora }</p> */}
      </section>
    );
  }
}

VideoGame.propTypes = {
  game: PropTypes.shape({
    img: PropTypes.string,
    title: PropTypes.string,
    developer: PropTypes.string,
  }).isRequired,
};

export default VideoGame;
