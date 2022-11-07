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
