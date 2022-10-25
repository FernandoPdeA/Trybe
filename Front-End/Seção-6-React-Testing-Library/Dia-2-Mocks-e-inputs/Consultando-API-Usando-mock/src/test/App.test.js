/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('Verifica que quando recebe uma piada, mostra ela na tela', async () => {
  /* Nesse caso, quando quisermos apenas simular uma requisição fetch */
  /* global.fetch = (_url) => Promise.resolve({
    json: () => Promise.resolve({
      id: '7h3oGtrOfxc',
      joke: 'Uma piada qualquer',
      status: 200,
    }),
  }); */

  /* Nesse caso se precisarmos verificar
se o fetch foi chamado, ou se foi chamado com a URL correta etc...
  precisamos fazer dessa forma, usando jest.fn().mockResolvedValue */
  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue({
      id: '7h3oGtrOfxc',
      joke: 'Uma piada qualquer',
      status: 200,
    }),
  });

  render(<App />);
  const renderJoke = await screen.findByText(/Uma piada qualquer/i);
  expect(renderJoke).toBeInTheDocument();
});
