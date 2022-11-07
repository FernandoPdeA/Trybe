import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import { render } from '@testing-library/react';
import rootReducer from '../../store/reducers';

function renderWithRedux(component, {
  initialState = {},
  store = createStore(rootReducer, initialState),
} = {}) {
  // const store = createStore(rootReducer, initialState);
  const allSelectors = render(
    <Provider store={ store }>
      {component}
    </Provider>,
  );

  return {
    ...allSelectors, store,
  };
}

export default renderWithRedux;

///
// renderWithRedux(<App />, { initialState, store });
// const { getByRole, store } = renderWithRedux(<App />)

// const store = createStore(rootReducer);
// <Provider store={ store }>
//         <App />
//       </Provider>
