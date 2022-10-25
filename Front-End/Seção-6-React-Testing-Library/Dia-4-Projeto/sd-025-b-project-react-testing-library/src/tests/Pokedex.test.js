import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testes do Pokedex', () => {
  it('Teste se será exibido o próximo pokemon da lista quando o botão "Próximo pokémon" for clicado', () => {
    const { history } = renderWithRouter(<App />);

    expect(history.location.pathname).toBe('/');
    expect(screen.getByText(/Encountered pokémons/i)).toBeInTheDocument();
    const Pikachu = screen.getByRole('img', { name: /Pikachu sprite/i });
    expect(Pikachu).toBeInTheDocument();

    const buttonNextPokemon = screen.getByTestId('next-pokemon');
    expect(buttonNextPokemon).toBeInTheDocument();
    act(() => {
      fireEvent.click(buttonNextPokemon);
    });
    const Charmander = screen.getByRole('img', { name: /Charmander sprite/i });
    expect(Charmander).toBeInTheDocument();

    act(() => {
      fireEvent.click(buttonNextPokemon);
    });
    const Caterpie = screen.getByRole('img', { name: /Caterpie sprite/i });
    expect(Caterpie).toBeInTheDocument();

    act(() => {
      fireEvent.click(buttonNextPokemon);
    });
    const Ekans = screen.getByRole('img', { name: /Ekans sprite/i });
    expect(Ekans).toBeInTheDocument();

    act(() => {
      fireEvent.click(buttonNextPokemon);
    });
    const Alakazam = screen.getByRole('img', { name: /Alakazam sprite/i });
    expect(Alakazam).toBeInTheDocument();

    act(() => {
      fireEvent.click(buttonNextPokemon);
    });
    const Mew = screen.getByRole('img', { name: /Mew sprite/i });
    expect(Mew).toBeInTheDocument();

    act(() => {
      fireEvent.click(buttonNextPokemon);
    });
    const Rapidash = screen.getByRole('img', { name: /Rapidash sprite/i });
    expect(Rapidash).toBeInTheDocument();

    act(() => {
      fireEvent.click(buttonNextPokemon);
    });
    const Snorlax = screen.getByRole('img', { name: /Snorlax sprite/i });
    expect(Snorlax).toBeInTheDocument();

    act(() => {
      fireEvent.click(buttonNextPokemon);
    });
    const Dragonair = screen.getByRole('img', { name: /Dragonair sprite/i });
    expect(Dragonair).toBeInTheDocument();

    act(() => {
      fireEvent.click(buttonNextPokemon);
    });
    expect(Pikachu).toBeInTheDocument();
  });

  it('Teste se a Pokédex tem os botões de filtro', () => {
    const { history } = renderWithRouter(<App />);

    expect(history.location.pathname).toBe('/');
    expect(screen.getByText(/Encountered pokémons/i)).toBeInTheDocument();
    const buttonAll = screen.getByRole('button', { name: /All/i });
    expect(buttonAll).toBeInTheDocument();

    act(() => {
      fireEvent.click(buttonAll);
    });

    const pikachu = screen.getByRole('img', { name: /Pikachu sprite/i });
    expect(pikachu).toBeInTheDocument();

    const buttonTestID = screen.getAllByTestId('pokemon-type-button');
    const buttoMap = buttonTestID.map((button) => button.innerHTML);
    expect(buttoMap).toEqual([
      'Electric',
      'Fire',
      'Bug',
      'Poison',
      'Psychic',
      'Normal',
      'Dragon',
    ]);
  });
});
