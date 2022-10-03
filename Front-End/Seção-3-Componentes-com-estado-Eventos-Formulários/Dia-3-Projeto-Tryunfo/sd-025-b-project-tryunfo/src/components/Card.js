import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
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
    } = this.props;

    return (
      <div className="componentCard">
        <h2 className="previewLetterH1">Preview Letter</h2>
        <div className="limiteCard">
          <h1 data-testid="name-card">{cardName}</h1>
          <div className="imageCard">
            <img
              src={ cardImage }
              alt={ cardName }
              data-testid="image-card"
            />
            <p
              data-testid="description-card"
              className="descriptionCard"
            >
              {cardDescription}

            </p>
          </div>
          <div className="atributesCard">
            <div className="atribute">
              <p>Atribute 01 ---------------------------------</p>
              <p className="atributeNumber" data-testid="attr1-card">{cardAttr1}</p>
            </div>
            <div className="atribute">
              <p>Atribute 02 ---------------------------------</p>
              <p className="atributeNumber" data-testid="attr2-card">{cardAttr2}</p>
            </div>
            <div className="atribute">
              <p>Atribute 03 ---------------------------------</p>
              <p className="atributeNumber" data-testid="attr3-card">{cardAttr3}</p>
            </div>
          </div>
          <div className="rareCard">
            <p className="rare" data-testid="rare-card">{cardRare}</p>
          </div>
          <div className="trunfoCard">
            {cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>}
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
}.isRequired;

export default Card;
