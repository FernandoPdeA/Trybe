import React from 'react';
import { screen, waitForElementToBeRemoved, cleanup } from '@testing-library/react';
import mockFetch from './__mocks__/mockFetch';
import renderWithRedux from './helpers/renderWithRedux';
import App from './App';
import randomNumber from './utils/randomNumber';

jest.mock('./utils/randomNumber');

describe('Página principal', () => {
  beforeEach(() => {
    cleanup();
    global.fetch = jest.fn(mockFetch);
  });

  afterEach(() => {
    cleanup();
    global.fetch.mockClear();
  });

  test('1 - Verifica se o botão de "Próximo Pokémon" está presente na tela', async () => {
    renderWithRedux(<App />);
    await waitForElementToBeRemoved(() => screen.getByText(/Loading/i));
    expect(global.fetch).toHaveBeenCalled();

    const nextButton = screen.getByAltText(/next-pokemon/i);
    expect(nextButton).toBeInTheDocument();
  });

  test('2 - Verifica se foi feita uma requisição à API após carregar a página', async () => {
    renderWithRedux(<App />);
    await waitForElementToBeRemoved(() => screen.getByText(/Loading/i));
    expect(global.fetch).toHaveBeenCalled();
  });

  test('se o fetch é chamado apenas uma vez ao carregar a página', () => {
    renderWithRedux(<App />);
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  test('Teste se o fetch foi chamado utilizando o endpoint de um Pokémon.', async () => {
    const IdPokemon = 656;
    const endpoint = 'https://pokeapi.co/api/v2/pokemon/656/';

    randomNumber.mockReturnValue(IdPokemon);
    //console.log(randomNumber);

    renderWithRedux(<App />);
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(endpoint);
  });

  test('3 - Verifica se o endpoint da requisição é alterado ao clicar no botão', async () => {
    const endpoint = 'https://pokeapi.co/api/v2/pokemon/96/';
    const IdPokemon = 96;

    renderWithRedux(<App />);
    await waitForElementToBeRemoved(() => screen.getByText(/Loading/i));
    expect(global.fetch).toHaveBeenCalled();

    randomNumber.mockReturnValue(IdPokemon);
    const nextButton = screen.getByAltText(/next-pokemon/i);

    nextButton.click();
    expect(global.fetch).toHaveBeenCalledWith(endpoint);
  });

  test('4 - Verifica se os elementos contendo as informações do Pokémon são renderizados', async () => {
    renderWithRedux(<App />);
    await waitForElementToBeRemoved(() => screen.getByText(/Loading/i));
    expect(global.fetch).toHaveBeenCalled();

    const name = screen.getByTestId('pokemon-name');
    const image = screen.getByAltText('pokemon');

    expect(name).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });
});
