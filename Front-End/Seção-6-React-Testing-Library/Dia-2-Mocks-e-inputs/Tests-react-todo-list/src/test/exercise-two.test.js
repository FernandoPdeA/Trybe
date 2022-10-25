import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Item from '../Item';

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    render(<App />); // Caso precise de uma nova query adicione no object destructuring
    const inputTask = screen.getByLabelText('Tarefa:');
    const buttonAdd = screen.getByText('Adicionar');
    listTodo.forEach((item) => {
      userEvent.type(inputTask, item);
      userEvent.click(buttonAdd);
    });
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(listTodo.length);
  });
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    const task = 'Realizar CR';
    render(<Item content={ task } />);
    const listItem = screen.getByText(task);
    expect(listItem).toBeInTheDocument();
  });
});
