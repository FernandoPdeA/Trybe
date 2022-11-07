import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../styles/Table.module.css';

class Table extends Component {
  deleteExpense(id) {
    const { dispatch } = this.props;
    dispatch({ type: 'DELETE_EXPENSE', id });
  }

  editExpense(id) {
    const { dispatch } = this.props;
    dispatch({ type: 'EDIT_EXPENSE', id });
    const addExpense = document.getElementById('add-expense');
    addExpense.innerText = 'Editar despesa';
  }

  render() {
    const { expenses } = this.props;
    return (
      <table data-testid="table">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses && expenses.map((expense) => (
            <tr key={ expense.id }>
              <td>{expense.description}</td>
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>{Number(expense.value).toFixed(2)}</td>
              <td>{expense.exchangeRates[expense.currency].name}</td>
              <td>
                {Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}
              </td>
              <td>
                {Number(expense.value
                  * expense.exchangeRates[expense.currency].ask).toFixed(2)}
              </td>
              <td>Real</td>
              <td>
                <button
                  id="edit-expense"
                  type="button"
                  data-testid="edit-btn"
                  onClick={ () => this.editExpense(expense.id) }
                >
                  Editar
                </button>
                <button
                  id="delete-expense"
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => this.deleteExpense(expense.id) }
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ wallet: { expenses } }) => ({
  expenses,
});

export default connect(mapStateToProps)(Table);
