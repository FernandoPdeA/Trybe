import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testes do About', () => {
  it('Teste as informações sobre a Pokédex', () => {
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push('/about');
    });

    const infoPokedexOne = screen.getByText('This application simulates a Pokédex, a digital encyclopedia containing all Pokémons');
    expect(infoPokedexOne).toBeInTheDocument();

    const infoPokedextwo = screen.getByText('One can filter Pokémons by type, and see more details for each one of them');
    expect(infoPokedextwo).toBeInTheDocument();
  });

  it('Teste se contém um h2 com o texto About Pokédex', () => {
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push('/about');
    });

    const aboutTitle = screen.getByRole('heading', { level: 2, name: 'About Pokédex' });
    expect(aboutTitle).toBeInTheDocument();
  });

  it('Teste se contém uma imagem de um Pokédex', () => {
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push('/about');
    });

    const pokedexImage = screen.getByRole('img');
    expect(pokedexImage).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
