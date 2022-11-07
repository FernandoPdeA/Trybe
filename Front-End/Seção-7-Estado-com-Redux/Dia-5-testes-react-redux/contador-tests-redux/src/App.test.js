import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import clickReducer from './redux/reducers';
import NumberClicks from './components/NumberClicks';
import thunk from 'redux-thunk';

/*
 Obs: Será usado o applyMiddleware para usar o thunk, 
que é um middleware que permite que ações assíncronas sejam criadas.
 Nesse caso não estamos usando nenhuma ação assíncrona, mas esta 
implementado no código para que possa ser usado no futuro, caso seja necessário.
*/

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer, NumberClicks }),
    initialState, applyMiddleware(thunk)), } = {}) => ({
      ...render(<Provider store={store}>{component}</Provider>),
      store,
    });

afterEach(cleanup);
describe('testando os clicks', () => {
  beforeEach(cleanup);
  test('a página deve ter um botão e um texto 0', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('se ao iniciar um estado em 5, vai estar o valor correto no elemento html', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 } },  
    });

    expect(screen.getByText('5')).toBeInTheDocument();
  });

  test('se ao iniciar o estado com o valor do couter "4", após ser clicado no botão, mudará para "5"', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 4 } } });

    const buttonAdicionar = screen.queryByText('Clique aqui');
    act(() => {
      buttonAdicionar.click();
    });

    expect(screen.getByText('5')).toBeInTheDocument();
  });
});
