import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testes do Pokemon', () => {
  it('Testa se é renderizado um card com as informções de determinado pokemon', () => {
    const { getByTestId, getAllByRole, getByRole, history } = renderWithRouter(<App />);

    const pokemonName = getByTestId('pokemon-name');
    expect(pokemonName).toHaveTextContent('Pikachu');

    const pokemonType = getByTestId('pokemon-type');
    expect(pokemonType).toHaveTextContent('Electric');

    const pokemonWeight = getByTestId('pokemon-weight');
    expect(pokemonWeight).toHaveTextContent('Average weight: 6.0 kg');

    const pokemonImage = getAllByRole('img')[0];
    expect(pokemonImage).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    expect(pokemonImage).toHaveAttribute('alt', 'Pikachu sprite');

    const pokemonMoreDetails = getByRole('link', { name: /more details/i });
    expect(pokemonMoreDetails).toHaveAttribute('href', '/pokemons/25');

    act(() => {
      fireEvent.click(pokemonMoreDetails);
    });

    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/25');

    const favoritePokemon = getByRole('checkbox', { name: /Pokémon favoritado\?/i });
    expect(favoritePokemon).toBeInTheDocument();

    act(() => {
      fireEvent.click(favoritePokemon);
    });

    const favoritePokemonChecked = getByRole('checkbox', { name: /Pokémon favoritado\?/i, checked: true });
    expect(favoritePokemonChecked).toBeInTheDocument();

    const imageSvgFavorite = screen.getByAltText('Pikachu is marked as favorite');
    expect(imageSvgFavorite).toHaveAttribute('src', '/star-icon.svg');
    expect(imageSvgFavorite).toBeInTheDocument();
  });
});
