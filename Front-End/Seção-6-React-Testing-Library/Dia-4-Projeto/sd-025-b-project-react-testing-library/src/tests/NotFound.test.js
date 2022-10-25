import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import renderWithRouter from './renderWithRouter';
import App from '../App';

it('Teste se contém h2 com o texto Page requested not found;', () => {
  const { history } = renderWithRouter(<App />);

  act(() => {
    history.push('/xablau');
  });

  const errorMessage = screen.getByRole('heading', { level: 2, name: 'Page requested not found' });
  expect(errorMessage).toBeInTheDocument();
});

it('Teste se a página mostra a imagem', () => {
  const { history } = renderWithRouter(<App />);

  act(() => {
    history.push('/xablau');
  });

  const errorImg = screen.getByRole('img');
  expect(errorImg).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
