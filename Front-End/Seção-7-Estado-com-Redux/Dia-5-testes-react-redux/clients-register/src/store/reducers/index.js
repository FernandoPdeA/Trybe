import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import customerReducer from './customerReducer';

const rootReducer = combineReducers({
  customers: customerReducer,
  login: loginReducer,
});

export default rootReducer;
