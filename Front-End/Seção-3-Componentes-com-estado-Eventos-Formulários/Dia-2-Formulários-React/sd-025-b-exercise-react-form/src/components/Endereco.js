import React from 'react';
import PropTypes from 'prop-types';
import CountryStates from '../countryStates';

class Endereco extends React.Component {
  render() {
    const { endereco, cidade, estado, tipo } = this.props;
    const { handleCheckRadio, handleChange,
      handleNumbersExclud, handleCharactersSpecials } = this.props;

    return (
      <>
        <legend>Endereço</legend>
        <label htmlFor="endereco">
          Endereço
          <input
            onChange={ handleChange }
            value={ endereco }
            type="text"
            id="endereco"
            name="endereco"
            maxLength="200"
            onKeyUp={ handleCharactersSpecials }
          />
        </label>

        <label htmlFor="cidade">
          Cidade
          <input
            onChange={ handleChange }
            value={ cidade }
            type="text"
            id="cidade"
            name="cidade"
            maxLength="28"
            onBlur={ handleNumbersExclud }
          />
        </label>

        <label htmlFor="estado">
          <strong>Estado</strong>
          <select
            onChange={ handleChange }
            value={ estado }
            name="estado"
            id="estado"
            type="comboBox"
          >
            {CountryStates.map((stateAtual) => (
              <option key={ stateAtual } value={ stateAtual }>
                {stateAtual}
              </option>
            ))}
          </select>
        </label>

        <label className="tipoCasa" htmlFor="tipo">
          <label htmlFor="casa">
            <h4>casa</h4>
            <input
              type="Radio"
              name="tipo"
              id="casa"
              value="casa"
              onChange={ handleChange }
              checked={ tipo === 'casa' }
              onClick={ handleCheckRadio }
            />
          </label>
          <label htmlFor="apartamento">
            <h4>apartamento</h4>
            <input
              type="Radio"
              name="tipo"
              id="apartamento"
              value="apartamento"
              checked={ tipo === 'apartamento' }
              onChange={ handleChange }
              onClick={ handleCheckRadio }
            />
          </label>
        </label>
      </>
    );
  }
}

Endereco.propTypes = {
  endereco: PropTypes.string.isRequired,
  cidade: PropTypes.string.isRequired,
  estado: PropTypes.string.isRequired,
  tipo: PropTypes.string.isRequired,
  handleCheckRadio: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleNumbersExclud: PropTypes.func.isRequired,
  handleCharactersSpecials: PropTypes.func.isRequired,
};

export default Endereco;
