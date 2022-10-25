import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import renderWithRouter from './renderWithRouter';
import App from '../App';

/*
const Pikachu = [
  {
    id: 25,
    name: 'Pikachu',
    type: 'Electric',
    averageWeight: {
      value: '6.0',
      measurementUnit: 'kg',
    },
    image: 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
    moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)',
    foundAt: [
      {
        location: 'Kanto Viridian Forest',
        map: 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png',
      },
      {
        location: 'Kanto Power Plant',
        map: 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png',
      },
    ],
    summary: 'This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat.',
  },
];
*/

it('Teste se é exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha pokémons favoritos;', () => {
  const { history } = renderWithRouter(<App />);

  act(() => {
    history.push('/favorites');
  });

  const NotFoundPokemons = screen.getByText('No favorite pokemon found');

  expect(NotFoundPokemons).toBeInTheDocument();
});

it('Teste se são exibidos todos os cards de pokémons favoritados.', async () => {
  const { history } = renderWithRouter(<App />);

  act(() => {
    history.push('/pokemons/25');
  });

  const user = userEvent.setup();
  await user.click(screen.getByRole('checkbox'));

  act(() => {
    history.push('/favorites');
  });
  console.log(history.location.pathname);

  const pikachu = screen.getByText('Pikachu');
  expect(pikachu).toBeInTheDocument();
});
