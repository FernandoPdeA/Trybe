/*import { composeWithDevTools } from '@redux-devtools/extension';
import { legacy_createStore as createStore } from 'redux';

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  if (action.type === 'Next_color') {
    const max = state.colors.length;
    return {
      ...state,
      index: (state.index + 1) % max,
    };
  } else if (action.type === 'Previous_color') {
    const max = state.colors.length;
    return {
      ...state,
      index: (state.index - 1 + max) % max,
    };
  }
  return state;
};

const store = createStore(reducer, composeWithDevTools());

const action2 = { type: 'Next_color' };
const action3 = { type: 'Previous_color' };

const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');
const color = document.getElementById('value');

nextButton.addEventListener('click', () => {
  console.log('Disparando a ação, Next_color!');
  store.dispatch(action2);
});

previousButton.addEventListener('click', () => {
  console.log('Disparando a ação, Previous_color!');
  store.dispatch(action3);
});

store.subscribe(() => {
  color.textContent = store.getState().colors[store.getState().index];
  color.style.color = store.getState().colors[store.getState().index];
});
*/
