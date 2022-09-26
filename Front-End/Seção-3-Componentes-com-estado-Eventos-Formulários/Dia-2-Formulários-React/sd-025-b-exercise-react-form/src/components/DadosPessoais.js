import React from 'react';
import PropTypes from 'prop-types';

class DadosPessoais extends React.Component {
  render() {
    const { name, email, cpf } = this.props;
    const { handleChange } = this.props;
    return (
      <>
        <legend>Dados pessoais</legend>
        <label htmlFor="name">
          Nome
          <input
            onChange={ handleChange }
            value={ name.toUpperCase() }
            type="text"
            id="name"
            name="name"
            maxLength="40"
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            onChange={ handleChange }
            value={ email }
            type="email"
            id="email"
            name="email"
            maxLength="50"
          />
        </label>

        <label htmlFor="cpf">
          CPF
          <input
            onChange={ handleChange }
            value={ cpf }
            type="text"
            id="cpf"
            name="cpf"
            maxLength="11"
          />
        </label>
      </>
    );
  }
}

DadosPessoais.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  cpf: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default DadosPessoais;
