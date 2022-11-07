import { ADD_CUSTOMER, DELETE_CUSTOMER } from '../actions';

const initialState = [];

function customerReducer(state = initialState, action) {
  switch (action.type) {
  case ADD_CUSTOMER:
    return [...state, action.data];
  case DELETE_CUSTOMER:
    return state.filter((customer) => customer !== action.value);
  default:
    return state;
  }
}

export default customerReducer;
