import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <li>
        <p>{ pokemon.type }</p>
        <p>{ pokemon.name }</p>
        <p>
          { `
${pokemon.averageWeight.value} 
${pokemon.averageWeight.measurementUnit} 
`}
        </p>
        <img src={ pokemon.image } alt={ pokemon.name } />
      </li>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
    moreInfo: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
