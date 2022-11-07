import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import movieReducer from '../reducers/movieReducer';
import userReducer from '../reducers/userReducer';

const store = createStore(combineReducers({
  user: userReducer,
  movie: movieReducer,
}), composeWithDevTools());

export default store;
