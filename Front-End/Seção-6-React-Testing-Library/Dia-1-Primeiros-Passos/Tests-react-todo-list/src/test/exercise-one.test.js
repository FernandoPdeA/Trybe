import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

// arquivo App.test.js pode servir de exemplo
describe('Testando a aplicação, testando botão, e sua funcionalidade', () => {
  test('Verifica se o botão está na tela com o texto "Adicionar"', () => {
    render(<App />);
    const buttonAdd = screen.getByRole('button', { name: /Adicionar/i });
    expect(buttonAdd).toBeInTheDocument();
  });

  test('Ao clicar no botão Adicionar a tarefa deve ser adicionada na tela', () => {
    // Use o userEvent, para simular a digitação do usuário e o clique.
    render(<App />);
    const buttonAdd = screen.getByRole('button', { name: /Adicionar/i });
    const inputTask = screen.getByLabelText('Tarefa:');
    userEvent.type(inputTask, 'Tarefa de teste');
    userEvent.click(buttonAdd);
    const task = screen.getByText('Tarefa de teste');
    expect(task).toBeInTheDocument();
  });
});
