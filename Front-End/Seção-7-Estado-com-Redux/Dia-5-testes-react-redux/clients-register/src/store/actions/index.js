export const ADD_CUSTOMER = 'ADD_CUSTOMER';
export const DELETE_CUSTOMER = 'DELETE_CUSTOMER';
export const LOGIN = 'LOGIN';

export const addCustomer = (value) => ({ type: ADD_CUSTOMER, data: value });
export const deleteCustomer = (value) => ({ type: DELETE_CUSTOMER, value });
export const login = (value) => ({ type: LOGIN, value });
