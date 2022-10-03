import React from 'react';
import PropTypes from 'prop-types';

class CardSearch extends React.Component {
  render() {
    const {
      cardSearch,
      removeCardSearch,
    } = this.props;
    return (
      cardSearch.map((card, index) => (
        <div
          className="cardContainer"
          id={ `cardContainer-${index}` }
          key={ `card-container-${index}` }
        >
          <div className="componentCardMini">
            <div className="limiteCardMini">
              <h1 data-testid="name-card" className="cardMiniName">{card.cardName}</h1>
              <div className="imageCardMini">
                <img
                  src={ card.cardImage }
                  alt={ card.cardName }
                  data-testid="image-card"
                />
                <p className="descriptionMiniCard">{card.cardDescription}</p>
              </div>
              <div className="cardMiniAttr">
                <p data-testid="attr1-card">
                  {`Atribute one --------------------------------------${card.cardAttr1}`}

                </p>
                <p data-testid="attr2-card">
                  {`Atribute two --------------------------------------${card.cardAttr2}`}

                </p>
                <p data-testid="attr3-card">
                  {`Atribute three ------------------------------------${card.cardAttr3}`}

                </p>
              </div>
              <div className="rareCard">
                <p className="rare" data-testid="rare-card">{card.cardRare}</p>
              </div>
              <div className="trunfoCard">
                {card.cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>}
              </div>
            </div>
          </div>
          <button
            id={ `cardButtonDelete-${index}` }
            name={ card.cardName }
            type="button"
            data-testid="delete-button"
            onClick={ () => removeCardSearch(card) }
            className="deleteButton"
          >
            Excluir Carta
          </button>
        </div>
      ))
    );
  }
}

CardSearch.propTypes = {
  cardSearch: PropTypes.arrayOf(PropTypes.shape({
  })).isRequired,
  removeCardSearch: PropTypes.func.isRequired,
};

export default CardSearch;
