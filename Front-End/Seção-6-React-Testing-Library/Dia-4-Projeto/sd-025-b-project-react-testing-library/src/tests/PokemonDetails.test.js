import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import renderWithRouter from './renderWithRouter';
import App from '../App';

const pathnamePokemon = '/pokemons/25';

describe('Testes do PokemonDetails.js', () => {
  test('Teste se as informações detalhadas do pokémon selecionado são mostradas na tela', () => {
    const { getByText, getByRole, history } = renderWithRouter(<App />);

    const moreDetails = getByRole('link', { name: /more details/i });
    expect(moreDetails).toBeInTheDocument();

    act(() => {
      fireEvent.click(moreDetails);
    });

    const { pathname } = history.location;
    expect(pathname).toBe(pathnamePokemon);

    const pokemonName = getByRole('heading', { name: 'Pikachu Details', level: 2 });
    expect(pokemonName).toBeInTheDocument();

    const noMatchMoreDetails = screen.queryByText(/More details/i);
    expect(noMatchMoreDetails).not.toBeInTheDocument();

    const pokemonSummary = getByText(/summary/i);
    expect(pokemonSummary).toBeInTheDocument();

    const pokemonSummaryText = getByText(/This intelligent Pokémon roasts hard berries/i);
    expect(pokemonSummaryText).toBeInTheDocument();
  });

  test('Teste se existe na página uma seção com os mapas contendo as localizações do pokémon:', () => {
    const { getByText, getByRole, history, getAllByRole } = renderWithRouter(<App />);

    const moreDetails = getByRole('link', { name: /more details/i });
    expect(moreDetails).toBeInTheDocument();

    act(() => {
      fireEvent.click(moreDetails);
    });

    const { pathname } = history.location;
    expect(pathname).toBe(pathnamePokemon);

    const pokemonGameLocations = getByText(/game locations of pikachu/i);
    expect(pokemonGameLocations).toBeInTheDocument();

    const pokemonHabitat = getAllByRole('img', { name: /pikachu location/i })[0];
    expect(pokemonHabitat).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(pokemonHabitat).toHaveAttribute('alt', 'Pikachu location');
    expect(pokemonHabitat).toBeInTheDocument();
    const pokemonGameLocationsText = getByText(/Kanto Viridian Forest/i);
    expect(pokemonGameLocationsText).toBeInTheDocument();

    const pokemonHabitat2 = getAllByRole('img', { name: /pikachu location/i })[1];
    expect(pokemonHabitat2).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
    expect(pokemonHabitat2).toHaveAttribute('alt', 'Pikachu location');
    expect(pokemonHabitat2).toBeInTheDocument();
    const moreLocations = getByText(/Kanto Power Plant/i);
    expect(moreLocations).toBeInTheDocument();
  });

  test('Teste se o usuário pode favoritar um pokémon através da página de detalhes', () => {
    const { getByRole, history, getByLabelText } = renderWithRouter(<App />);

    const moreDetails = getByRole('link', { name: /more details/i });
    expect(moreDetails).toBeInTheDocument();

    act(() => {
      fireEvent.click(moreDetails);
    });

    const { pathname } = history.location;
    expect(pathname).toBe(pathnamePokemon);

    const favoriteCheckbox = getByLabelText(/Pokémon favoritado?/i);
    expect(favoriteCheckbox).toBeInTheDocument();

    act(() => {
      fireEvent.click(favoriteCheckbox);
    });

    expect(favoriteCheckbox.checked).toBe(true);
  });
});
