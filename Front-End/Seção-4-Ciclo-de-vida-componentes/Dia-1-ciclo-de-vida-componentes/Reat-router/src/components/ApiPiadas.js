import React from "react";

class ApiPiadas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jokeObj: undefined,
      storageJokes: [],
      loading: true,
    };
  }

  // Usando assync await
  fetchJoke = async () => {
    this.setState(
      { loading: true }, //Primeiro parâmetro do setState
      async () => {
        const requestHeaders = { headers: { Accept: "application/json" } };
        const requestReturn = await fetch("https://api.chucknorris.io/jokes/random", requestHeaders);
        const requestObject = await requestReturn.json();
        this.setState({
          loading: false,
          jokeObj: requestObject,

        });
      }
    );
  };


  componentDidMount() {
    this.fetchJoke();
    //console.log("componentDidMount");
  }

  saveJoke = () => {
    this.setState(({ jokeObj, storageJokes }) => ({
      storageJokes: [...storageJokes, jokeObj],
    }));
  };

  componentWillUnmount() {
    //console.log("componentWillUnmount"); 
  };

  renderJokeElement = () => {
    return (
      <div>
        <p>{this.state.jokeObj.value}</p>
        <button type="button" onClick={this.saveJoke}>Salvar piada</button>
      </div>
    );
  };

  render() {
    const { loading, storageJokes } = this.state;
    const loadingElement = <span>Loading...</span>;
    return (
      <div className="App">
        <h1>Piadas</h1>
        <button type="button" onClick={this.fetchJoke}>Nova piada</button>
        <p>{loading ? loadingElement : this.renderJokeElement()}</p>
        <h2>Salvas</h2>
        {storageJokes.map((joke) => <p key={joke.id}>{joke.value}</p>)}
      </div>
    );
  }
};

export default ApiPiadas;