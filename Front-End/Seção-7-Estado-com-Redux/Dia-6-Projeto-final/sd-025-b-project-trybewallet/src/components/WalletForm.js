import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fecthCurrency, fecthCurrencyData } from '../services/currencysApi';
import styles from '../styles/WalletForm.module.css';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      idState: 0,
    };
  }

  async componentDidMount() {
    const { dispatch } = this.props;
    const exclude = ['USDT'];
    const currenciesActual = await fecthCurrency();
    const currencies = Object.values(currenciesActual)
      .filter((currency) => !exclude.includes(currency));
    dispatch({ type: 'REQUEST_API', currencies });
  }

  componentDidUpdate() {
    this.dispachExpenseTotalValue();
  }

  clearInputs = () => {
    document.getElementById('tag').value = 'Alimentação';
    document.getElementById('method').value = 'Dinheiro';
    document.getElementById('currency').value = 'USD';
    document.getElementById('value').value = '';
    document.getElementById('description').value = '';
  };

  addExpenses = async () => {
    const { idState } = this.state;
    this.setState({ idState: idState + 1 });
    const { dispatch } = this.props;
    const tag = document.getElementById('tag').value;
    const method = document.getElementById('method').value;
    const currency = document.getElementById('currency').value;
    const { value } = document.getElementById('value');
    const description = document.getElementById('description').value;
    const exchangeRates = await fecthCurrencyData().then((data) => data);
    const expenses = {
      id: idState,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    };
    dispatch({ type: 'ADD_EXPENSE', expense: expenses });
    this.dispachExpenseTotalValue();
    this.clearInputs();
  };

  newAddExpenses = async () => {
    const { dispatch, idToEdit } = this.props;
    const tag = document.getElementById('tag').value;
    const method = document.getElementById('method').value;
    const currency = document.getElementById('currency').value;
    const { value } = document.getElementById('value');
    const description = document.getElementById('description').value;
    const exchangeRates = await fecthCurrencyData().then((data) => data);
    const expenses = {
      id: idToEdit,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    };
    dispatch({ type: 'UPDATE_EXPENSE', expense: expenses });
    this.dispachExpenseTotalValue();
    this.clearInputs();
    const addExpense = document.getElementById('add-expense');
    addExpense.innerHTML = 'Adicionar despesa';
  };

  totalExpensesValue = () => {
    const { expenses } = this.props;
    const total = expenses
      .reduce((acc, curr) => acc + curr.exchangeRates[curr.currency]
        .ask * curr.value, 0)
      .toFixed(2);
    return total;
  };

  dispachExpenseTotalValue = () => {
    const { dispatch } = this.props;
    const total = this.totalExpensesValue();
    dispatch({ type: 'TOTAL', total });
  };

  render() {
    const { currencies, editor } = this.props;
    return (
      <form className={ styles.formCarteira }>
        <label htmlFor="value">
          Valor:
          {' '}
          <input
            type="number"
            id="value"
            data-testid="value-input"
          />
        </label>
        <label htmlFor="description">
          Descrição:
          {' '}
          <input
            type="text"
            id="description"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          {' '}
          <select
            id="currency"
            data-testid="currency-input"
          >
            {currencies.map((currency) => (
              <option
                key={ currency }
                value={ currency }
              >
                {currency}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          {' '}
          <select
            id="method"
            data-testid="method-input"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          {' '}
          <select
            id="tag"
            data-testid="tag-input"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <div className={ styles.divButton }>
          <button
            id="add-expense"
            type="button"
            data-testid="button-submit"
            onClick={ editor ? this.newAddExpenses : this.addExpenses }
          >
            Adicionar despesa
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  total: state.wallet.total,
  editor: state.wallet.editor,
  idToEdit: state.wallet.idToEdit,
  expenses: state.wallet.expenses,
});

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  editor: PropTypes.bool.isRequired,
  idToEdit: PropTypes.number.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
};

export default connect(mapStateToProps)(WalletForm);
