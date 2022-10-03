import React from 'react';
import pokemonList from '../data';
import Pokedex from '../components/Pokedex';

function App() {
  return (
    <div>
      <Pokedex pokemonList={ pokemonList } />
    </div>
  );
}

export default App;
