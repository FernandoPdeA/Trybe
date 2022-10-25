import { composeWithDevTools } from '@redux-devtools/extension';
import { legacy_createStore as createStore } from 'redux';

const THEME_INITIAL_STATE = {
  themes: ['dark', 'light'],
  status: ['online', 'offline'],
};

const themeReducer = (state = THEME_INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        themes: state.themes.reverse(),
      };
    case 'TOGGLE_STATUS':
      return {
        ...state,
        status: state.status.reverse(),
      };
    default:
      return state;
  }
}

const store = createStore(themeReducer, composeWithDevTools());

const action = { type: 'TOGGLE_THEME' };
const action2 = { type: 'TOGGLE_STATUS' };

const toggleButton = document.getElementById('toggle-theme');
const toggleStatus = document.getElementById('toggle-status');
const spanStatus = document.getElementById('status');

toggleButton.addEventListener('click', () => {
  console.log('Disparando a ação!');
  store.dispatch(action);
});

toggleStatus.addEventListener('click', () => {
  console.log('Disparando a ação!');
  store.dispatch(action2);
});

store.subscribe(() => {
  const { themes } = store.getState();
  const { status } = store.getState();

  document.body.className = themes[0];
  toggleButton.textContent = `Toggle to ${themes[1]}`;
  toggleButton.className = themes[1];
  console.log('Mudando o tema!', themes[0]);

  toggleStatus.textContent = `Toggle to ${status[1]}`;
  toggleStatus.className = status[1];
  spanStatus.textContent = status[0];
  console.log('Mudando o status!', status[0]);
});

