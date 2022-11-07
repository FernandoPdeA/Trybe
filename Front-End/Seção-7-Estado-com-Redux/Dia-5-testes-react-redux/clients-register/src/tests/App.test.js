import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '../App';
import renderWithRouter from './helpers/renderWithRouter';
import rootReducer from '../store/reducers';
import renderWithRedux from './helpers/renderWithRedux';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';

describe('Cadastro de clientes', () => {
  test('se a tela inicial é renderizada', () => {
    renderWithRouter(<App />);

    const title = screen.getByRole('heading', { level: 3 });
    expect(title).toBeInTheDocument();

    const login = screen.getByRole('link', { name: 'Faça seu Login' });
    expect(login).toBeInTheDocument();
  });

  test('se a tela de login é renderizada corretemente', () => {
    const store = createStore(rootReducer);
    renderWithRouter(
      <Provider store={ store }>
        <App />
      </Provider>,
      ['/login'],
    );

    const loginTitle = screen.getByRole('heading', { name: 'Login' });
    expect(loginTitle).toBeInTheDocument();
  });

  test('se exibi a msg de login não efetuado', () => {
    // const store = createStore(rootReducer);
    // renderWithRouter(
    //   <Provider store={ store }>
    //     <App />
    //   </Provider>,
    //   ['/customers'],
    // );

    const renderAppWithRouter = (initialEntries = ['/']) => (
      <Router history={ createMemoryHistory({ initialEntries }) }>
        <App />
      </Router>
    );

    renderWithRedux(
      renderAppWithRouter(['/customers']),
    );

    const notLoginMsg = screen.getByText('Login não efetuado!');
    expect(notLoginMsg).toBeInTheDocument();
  });

  test('se a tela de clientes é exibida corretamente quando logado', () => {
    const initialStateMock = {
      login: {
        email: 'luanderson@betrybe.com',
        password: '123456',
      },
    };

    // const renderAppWithRouter = (initialEntries = ['/']) => (
    //   <Router history={ createMemoryHistory({ initialEntries }) }>
    //     <App />
    //   </Router>
    // );

    // const { store } = renderWithRedux(
    //   renderAppWithRouter(['/customers']),
    //   { initialState: initialStateMock },
    // );

    const { store, history } = renderWithRouterAndRedux(
      <App />,
      { initialState: initialStateMock, initialEntries: ['/customers'] },
    );

    const titleNotFoundClients = screen.getByText('Nenhum cliente cadastrado');
    expect(titleNotFoundClients).toBeInTheDocument();

    expect(store.getState().login.email).toBe(initialStateMock.login.email);
  });
});


//Arquivo de outro projeto 
it('Testa se o formulário para adicionar uma despesa contém um campo para descrição, um campo para valor, um campo para moedas, um campo para método de pagamento, um campo para tag, um botão para adicionar despesa e um botão para editar despesa', () => {
  renderWithRouterAndRedux(<App />);
  const descriptionInput = screen.getByTestId('description-input');
  const valueInput = screen.getByTestId('value-input');
  const currencyInput = screen.getByTestId('currency-input');
  const methodInput = screen.getByTestId('method-input');
  const tagInput = screen.getByTestId('tag-input');
  const addButton = screen.getByTestId('add-button');
  const editButton = screen.getByTestId('edit-button');
  expect(descriptionInput).toBeInTheDocument();
  expect(valueInput).toBeInTheDocument();
  expect(currencyInput).toBeInTheDocument();
  expect(methodInput).toBeInTheDocument();
  expect(tagInput).toBeInTheDocument();
  expect(addButton).toBeInTheDocument();
  expect(editButton).toBeInTheDocument();
});

it('Testa se a página principal contém uma tabela com os gastos', () => {
  renderWithRouterAndRedux(<App />);
  const table = screen.getByTestId('expenses-table');
  expect(table).toBeInTheDocument();
});

it('Testa se a tabela contém um cabeçalho com as descrições das colunas', () => {
  renderWithRouterAndRedux(<App />);
  const descriptionHeader = screen.getByRole('columnheader', { name: /descrição/i });
  const tagHeader = screen.getByRole('columnheader', { name: /tag/i });
  const methodHeader = screen.getByRole('columnheader', { name: /método de pagamento/i });
  const valueHeader = screen.getByRole('columnheader', { name: /valor/i });
  const currencyHeader = screen.getByRole('columnheader', { name: /moeda/i });
  const exchangeRatesHeader = screen.getByRole('columnheader', { name: /câmbio utilizado/i });
  const valueInBRLHeader = screen.getByRole('columnheader', { name: /valor convertido/i });
  const exchangeExpenseHeader = screen.getByRole('columnheader', { name: /moeda de conversão/i });
  const deleteHeader = screen.getByRole('columnheader', { name: /excluir/i });
  expect(descriptionHeader).toBeInTheDocument();
  expect(tagHeader).toBeInTheDocument();
  expect(methodHeader).toBeInTheDocument();
  expect(valueHeader).toBeInTheDocument();
  expect(currencyHeader).toBeInTheDocument();
  expect(exchangeRatesHeader).toBeInTheDocument();
  expect(valueInBRLHeader).toBeInTheDocument();
  expect(exchangeExpenseHeader).toBeInTheDocument();
  expect(deleteHeader).toBeInTheDocument();
});
