import react from 'react';
import pokemonList from '../data';
import '../styles/oneOnly.css';

export default class PokemonDetails extends react.Component {
  render() {
    const { match: { params: { id } } } = this.props;
    return (
      pokemonList.map((pokemonAtual, index) => {
        if (pokemonAtual.id === Number(id)) {
          return (
            <div className="oneOnly" key={ index }>
              <h1>{`${pokemonAtual.name} details`}</h1>
              <p>{pokemonAtual.name}</p>
              <p>{pokemonAtual.type}</p>
              <p>
                {`Average weight: ${pokemonAtual.averageWeight.value} 
                ${pokemonAtual.averageWeight.measurementUnit}`}
              </p>
              <img src={ pokemonAtual.image } alt={ pokemonAtual.name } />
              {pokemonAtual.foundAt.map((local, index2) => (
                <div className="location" key={ index2 }>
                  <p>{local.location}</p>
                  <img src={ local.map } alt={ local.location } />
                </div>
              ))}
              <p>{pokemonAtual.summary}</p>
            </div>
          );
        } console.log('não é o pokemon');
        return null;
      })
    );
  }
}
