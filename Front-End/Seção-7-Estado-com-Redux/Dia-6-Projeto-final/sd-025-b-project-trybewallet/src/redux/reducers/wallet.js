const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  total: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'REQUEST_API':
    return { ...state, currencies: action.currencies };
  case 'ADD_EXPENSE':
    return { ...state, expenses: [...state.expenses, action.expense] };
  case 'DELETE_EXPENSE':
    return {
      ...state,
      expenses: state.expenses
        .filter((expense) => expense.id !== action.id),
    };
  case 'EDIT_EXPENSE':
    return {
      ...state,
      editor: true,
      idToEdit: action.id,
    };
  case 'UPDATE_EXPENSE':
    return {
      ...state,
      expenses: state.expenses.map((expense) => {
        if (expense.id === action.expense.id) {
          return action.expense;
        }
        return expense;
      }),
      editor: false,
      idToEdit: 0,
    };
  case 'TOTAL':
    return { ...state, total: action.total };
  default:
    return state;
  }
};

export default wallet;
