// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const REQUEST_API = 'REQUEST_API';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const UPDATE_EXPENSE = 'UPDATE_EXPENSE';
export const TOTAL = 'TOTAL';

export const login = (email) => ({
  type: LOGIN,
  email,
});

export const requestApi = (currencies) => ({
  type: REQUEST_API,
  currencies,
});

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  expense,
});

export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  id,
});

export const editExpense = (id) => ({
  type: EDIT_EXPENSE,
  id,
});

export const saveExpense = (expense) => ({
  type: UPDATE_EXPENSE,
  expense,
});

export const totalExpenses = (total) => ({
  type: TOTAL,
  total,
});
