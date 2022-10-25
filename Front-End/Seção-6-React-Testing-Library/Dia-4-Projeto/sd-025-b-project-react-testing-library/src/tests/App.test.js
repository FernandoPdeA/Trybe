import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import renderWithRouter from './renderWithRouter';
import App from '../App';

it('Testa se o botão home leva a pagina /', () => {
  const { history } = renderWithRouter(<App />);

  const homeLink = screen.getByRole('link', { name: 'Home' });
  expect(homeLink).toBeInTheDocument();

  fireEvent.click(homeLink);

  const { pathname } = history.location;
  expect(pathname).toBe('/');
});

it('Testa se o botão about leva a pagina /about', () => {
  const { history } = renderWithRouter(<App />);

  const aboutLink = screen.getByRole('link', { name: 'About' });
  expect(aboutLink).toBeInTheDocument();

  fireEvent.click(aboutLink);

  const { pathname } = history.location;
  expect(pathname).toBe('/about');
});

it('Testa se o botão Favorite Pokémons leva a pagina /favorites', () => {
  const { history } = renderWithRouter(<App />);

  const favoritesLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
  expect(favoritesLink).toBeInTheDocument();

  fireEvent.click(favoritesLink);

  const { pathname } = history.location;
  expect(pathname).toBe('/favorites');
});

it('Testa se é exibida a pagina NotFound ao entrar em uma pagina inexistente', () => {
  const { history } = renderWithRouter(<App />);

  act(() => {
    history.push('/xablau');
  });

  const errorMessage = screen.getByRole('heading', { level: 2, name: 'Page requested not found' });
  expect(errorMessage).toBeInTheDocument();
});
