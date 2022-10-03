import React from 'react';
import Card from './components/Card';
import CardList from './components/CardList';
import Form from './components/Form';
import CardSearch from './components/CardSearch';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: 'https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=2000',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      cardSave: [],
      cardSearch: [],
    };
  }

  onInputChange = (event) => {
    const element = event.target;
    const value = element.type === 'checkbox' ? element.checked : element.value;
    this.setState({
      [event.target.name]: value,
    });
  };

  validateEntries = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const imputCheckName = cardName.length > 0;
    const inputCheckDescription = cardDescription.length > 0;
    const inputCheckimage = cardImage.length > 0;
    const inputCheckRare = cardRare.length > 0;
    const ninety = 90;
    const nought = 0;
    const maximumScore = 210;
    const handleNumbers1 = parseInt(cardAttr1, 10);
    const handleNumbers2 = parseInt(cardAttr2, 10);
    const handleNumbers3 = parseInt(cardAttr3, 10);
    const biggerSmaller1 = handleNumbers1 <= ninety && handleNumbers1 >= nought;
    const biggerSmaller2 = handleNumbers2 <= ninety && handleNumbers2 >= nought;
    const biggerSmaller3 = handleNumbers3 <= ninety && handleNumbers3 >= nought;
    const sumEntries = (handleNumbers1 + handleNumbers2 + handleNumbers3) <= maximumScore;
    return imputCheckName && inputCheckDescription && inputCheckimage
      && inputCheckRare && biggerSmaller1
      && biggerSmaller2 && biggerSmaller3 && sumEntries;
  };

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    if (cardTrunfo === true) {
      this.setState({
        hasTrunfo: true,
      });
    }
    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    this.setState((estadoAnterior) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      cardSave: [...estadoAnterior.cardSave, newCard],
      cardSearch: [...estadoAnterior.cardSearch, newCard],
    }));
  };

  removeCard = (card) => {
    const { cardSave } = this.state;
    if (card.cardTrunfo) {
      this.setState({
        hasTrunfo: false,
      });
    }
    const newArray = cardSave.filter((objeto) => objeto.cardName !== card.cardName);
    this.setState({
      cardSave: newArray,
    });
  };

  removeCardSearch = (card) => {
    const { cardSearch } = this.state;
    if (card.cardTrunfo) {
      this.setState({
        hasTrunfo: false,
      });
    }
    const newArray = cardSearch.filter((objeto) => objeto.cardName !== card.cardName);
    this.setState({
      cardSearch: newArray,
    });
  };

  searchName = (event) => {
    event.preventDefault();
    const { cardSave, cardSearch } = this.state;
    const { value } = event.target;
    const cardSaveSearch = cardSave.filter((objeto) => objeto.cardName === value);
    const cardSearchCard = cardSearch.filter((objeto) => objeto.cardName === value);
    if (cardSaveSearch.length > 0) {
      this.setState({
        cardSearch: cardSaveSearch,
      });
    } if (cardSearchCard.length > 0) {
      this.setState({
        cardSearch: cardSearchCard,
      });
    }
  };

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
      cardSave,
      cardSearch,
    } = this.state;
    this.validateEntries();
    return (
      <div className="main">
        <div className="App">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ !this.validateEntries() }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
            searchName={ this.searchName }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            onInputChange={ this.onInputChange }
          />
        </div>
        {cardSearch.length > 0 ? (
          <div className="cards">
            <CardSearch
              cardSearch={ cardSearch }
              removeCardSearch={ this.removeCardSearch }
              hasTrunfo={ hasTrunfo }
            />
          </div>
        ) : (
          <div className="cards">
            <CardList
              cardSave={ cardSave }
              removeCard={ this.removeCard }
              hasTrunfo={ hasTrunfo }
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
