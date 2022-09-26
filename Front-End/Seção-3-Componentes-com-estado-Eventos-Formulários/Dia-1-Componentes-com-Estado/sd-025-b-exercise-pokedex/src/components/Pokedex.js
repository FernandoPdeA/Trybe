import React from 'react';
import Pokemon from './Pokemon';
import pokemonList from '../data';

class Pokedex extends React.Component {
  render() {
    return (
      <div className="divPokemom">
        <h1>Pokédex</h1>
        <ul>
          {pokemonList.map((pokemon, index) => (
            <Pokemon key={ index } pokemon={ pokemon } />))}
        </ul>
      </div>
    );
  }
}

export default Pokedex;
