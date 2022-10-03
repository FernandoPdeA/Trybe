import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
      searchName,
    } = this.props;

    return (
      <form action="">
        <h1>Add new letter</h1>
        <label htmlFor="name" className="name">
          <h3>Name</h3>
          <input
            id="name"
            value={ cardName }
            data-testid="name-input"
            type="text"
            name="cardName"
            onChange={ (event) => onInputChange(event) }
            placeholder="Name..."
          />
        </label>

        <label htmlFor="descriptionCard" className="textAreaDescriptionCard">
          <h3>Description</h3>
          <textarea
            id="descriptionCard"
            data-testid="description-input"
            value={ cardDescription }
            name="cardDescription"
            onChange={ (event) => onInputChange(event) }
            placeholder="Description..."
          />
        </label>

        <label htmlFor="primaryAtribute" className="primaryAtribute">
          <h3>Primary Atribute</h3>
          <input
            id="primaryAtribute"
            data-testid="attr1-input"
            type="number"
            value={ cardAttr1 }
            name="cardAttr1"
            onChange={ (event) => onInputChange(event) }
            placeholder="Primary Atribute..."
          />
        </label>

        <label htmlFor="secondaryAtribute" className="secondaryAtribute">
          <h3>Secondary Atribute</h3>
          <input
            id="secondaryAtribute"
            data-testid="attr2-input"
            type="number"
            value={ cardAttr2 }
            name="cardAttr2"
            onChange={ (event) => onInputChange(event) }
            placeholder="Secondary Atribute..."
          />
        </label>

        <label htmlFor="tertiaryAtribute" className="tertiaryAtribute">
          <h3>Tertiary Atribute</h3>
          <input
            id="tertiaryAtribute"
            data-testid="attr3-input"
            type="number"
            value={ cardAttr3 }
            name="cardAttr3"
            onChange={ (event) => onInputChange(event) }
            placeholder="Tertiary Atribute..."
          />
        </label>

        <label htmlFor="image" className="imageCard">
          <h3>Image</h3>
          <input
            id="image"
            data-testid="image-input"
            type="text"
            value={ cardImage }
            name="cardImage"
            onChange={ (event) => onInputChange(event) }
            placeholder="Image..."
          />
        </label>

        <label htmlFor="selectRareCard" className="selectRareCardDiv">
          <h3>Rarity</h3>
          <select
            id="selectRareCard"
            data-testid="rare-input"
            className="selectRareCard"
            value={ cardRare }
            name="cardRare"
            onChange={ (event) => onInputChange(event) }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>

        <label htmlFor="checkCard" className="checkCard">
          <h3>Super trump</h3>
          {
            hasTrunfo === true
              ? <p>Você já tem um Super Trunfo em seu baralho</p>
              : (
                <input
                  id="trunfoCheck"
                  name="cardTrunfo"
                  type="checkbox"
                  data-testid="trunfo-input"
                  checked={ cardTrunfo }
                  onChange={ (event) => onInputChange(event) }
                />)
          }
        </label>
        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
        <div className="searchName">
          <h3>Search name:</h3>
          <input
            type="text"
            name="findName"
            placeholder="Digite o nome da carta"
            data-testid="name-filter"
            onKeyUp={ (event) => searchName(event) }
          />
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
  searchName: PropTypes.func,
}.isRequired;

export default Form;
