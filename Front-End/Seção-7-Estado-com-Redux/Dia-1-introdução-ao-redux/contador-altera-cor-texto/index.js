import { composeWithDevTools } from '@redux-devtools/extension';
import { legacy_createStore as createStore } from 'redux';

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  count: 0,
  index: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  const max = state.colors.length;
  switch (action.type) {
    case 'Next_color':
      return {
        ...state,
        index: (state.index + 1) % max,
      };
    case 'Previous_color':
      return {
        ...state,
        index: (state.index - 1 + max) % max,
      };
    case 'INCREMENT_COUNT':
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

// Criando store
const store = createStore(reducer, composeWithDevTools());

// Criando ação
const action = { type: 'INCREMENT_COUNT' };
const action2 = { type: 'Next_color' };
const action3 = { type: 'Previous_color' };

// Capturando elementos do DOM
const incrementButton = document.querySelector('button');
const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');
const color = document.getElementById('value');

// Criando listeners e disparando as ações
incrementButton.addEventListener('click', () => {
  console.log('Disparando a ação!');
  store.dispatch(action);
});

nextButton.addEventListener('click', () => {
  console.log('Disparando a ação, Next_color!');
  store.dispatch(action2);
});

previousButton.addEventListener('click', () => {
  console.log('Disparando a ação, Previous_color!');
  store.dispatch(action3);
});

// Lendo as alterações do estado e atualizando o DOM
store.subscribe(() => {
  console.log('Retornando um objeto: ', store.getState());
  const h2 = document.getElementById('counter');
  h2.textContent = store.getState().count;

  color.textContent = store.getState().colors[store.getState().index];
  color.style.color = store.getState().colors[store.getState().index];
});
