import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dog: undefined,
      storageDogs: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchDog();
  }

  shouldComponentUpdate(/* nextProps, nextState */) {
    // Implemente sua lógica aqui
    return true;
  }

  componentDidUpdate() {
    const { storageDogs } = this.state;
    localStorage.setItem('dogURL', JSON.stringify(storageDogs));
  }

  fetchDog = async () => {
    this.setState({ loading: true }, async () => {
      // const requestHeaders = { headers: { Accept: 'application/json' } };
      const requestReturn = await fetch('https://dog.ceo/api/breeds/image/random');
      const requestObject = await requestReturn.json();
      this.setState({
        loading: false,
        dog: requestObject.message,
      });
      const dogBreed = requestObject.message.split('/')[4];
      global.alert(dogBreed);
      // console.log(requestObject.message);
      // console.log(requestReturn);
    });
  };

  saveDog = () => {
    this.setState(({ dog, storageDogs }) => ({
      storageDogs: [...storageDogs, dog],
    }));
  };

  renderDogElement = () => {
    const { dog } = this.state;
    return (
      <div className="divImageDog">
        <img src={ dog } alt="Doguinho aleatório" className="imageDog" />
        <button
          className="buttonSalve"
          type="button"
          onClick={ this.saveDog }
        >
          Salvar
        </button>
      </div>
    );
  };

  render() {
    const { loading, storageDogs } = this.state;
    return (
      <div className="App">
        <h1>Imagens de doguinhos fofinhos</h1>
        {loading ? <span className="loading">Loading...</span> : this.renderDogElement()}
        <button
          className="buttonNewDog"
          type="button"
          onClick={ this.fetchDog }
        >
          Novo doguinho!
        </button>
        <div>
          {storageDogs.map((dog, index) => <img key={ index } src={ dog } alt="dog" />)}
        </div>
      </div>
    );
  }
}

export default App;
