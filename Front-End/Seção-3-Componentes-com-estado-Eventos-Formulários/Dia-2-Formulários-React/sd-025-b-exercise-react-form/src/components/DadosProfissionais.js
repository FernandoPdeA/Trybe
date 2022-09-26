import React from 'react';
import PropTypes from 'prop-types';

class DadosProfissionais extends React.Component {
  render() {
    const { resumo, cargo, descricaoCargo } = this.props;
    const { handleChange, handleMouseEnter } = this.props;

    return (
      <>
        <legend>Dados profissionais</legend>
        <label htmlFor="resumo">
          <h5>Resumo do curriculum</h5>
          <textarea
            type="textarea"
            onChange={ handleChange }
            value={ resumo }
            name="resumo"
            id="resumo"
            maxLength="1000"
          />
        </label>

        <label htmlFor="cargo">
          <h5>Cargo</h5>
          <input
            type="text"
            onChange={ handleChange }
            value={ cargo }
            name="cargo"
            id="cargo"
            maxLength="40"
            onMouseEnter={ handleMouseEnter }
          />
        </label>

        <label htmlFor="descricaoCargo">
          <h5>Descrição do cargo</h5>
          <textarea
            type="textarea"
            value={ descricaoCargo }
            onChange={ handleChange }
            name="descricaoCargo"
            id="descricaoCargo"
            maxLength="500"
          />
        </label>
      </>
    );
  }
}

DadosProfissionais.propTypes = {
  resumo: PropTypes.string.isRequired,
  cargo: PropTypes.string.isRequired,
  descricaoCargo: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleMouseEnter: PropTypes.func.isRequired,
};

export default DadosProfissionais;
