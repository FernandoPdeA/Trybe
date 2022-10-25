import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const INITIAL_STATE = {
  theme: 'dark',
  themeHeader: 'light',
};

const reducer = (state = INITIAL_STATE, action) => {
  console.log('chegou um pedido: ', action);
  switch (action.type) {
  case 'CHANGE_THEME':
    return {
      ...state,
      theme: state.theme === 'dark' ? 'light' : 'dark',
    };
  case 'CHANGE_THEME_HEADER':
    return {
      ...state,
      themeHeader: state.themeHeader === 'dark' ? 'light' : 'dark',
    };
  default:
    return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

export default store;
