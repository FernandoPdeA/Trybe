import React from 'react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../RenderWithRouter';

describe('Testa que a aplicação renderiza corretamente em seu estado inicial', () => {
  it('Testa que a página deverá possuir um título `Search Digimon`', () => {
    renderWithRouter(<App />);

    const title = screen.getByRole('heading', { level: 1, name: 'Search Digimon' });
    expect(title).toBeInTheDocument();
  });

  it('Testa se a página possui os links `About` e `Search Digimon`', () => {
    renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: 'About' });
    const searchLink = screen.getByRole('link', { name: 'Search Digimon' });
    expect(aboutLink).toBeInTheDocument();
    expect(searchLink).toBeInTheDocument();
  });
});

describe('Testa direcionamento para /about, e título "About" renderiza na tela', () => {
  it('Testa se ao clicar no link About, sera direcionado para /about', () => {
    const { history } = renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: 'About' });
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/about');

    const title = screen.getByRole('heading', { level: 1, name: 'About' });
    expect(title).toBeInTheDocument();
  });
});

describe('Se rota inexistente, devera ser direcionado para página "Not Found"', () => {
  it('Testa se será direcionado para a página "Not Found", e elementos presentes', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/xablau');
    });

    const notFound = screen.getByRole('heading', { level: 1, name: 'Page Not Found' });
    expect(notFound).toBeInTheDocument();
    expect(history.location.pathname).toBe('/xablau');
    console.log(history.location.pathname);
  });
});
