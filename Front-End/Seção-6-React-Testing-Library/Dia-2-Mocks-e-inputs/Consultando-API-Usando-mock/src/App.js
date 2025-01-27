import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: '',
    }
  }

  componentDidMount() {
    const API_URL = 'https://icanhazdadjoke.com/';
    fetch(API_URL, { headers: { 'Accept': 'application/json' } })
      .then(response => response.json())
      // .then(data => this.setState({ joke: data.joke }));
      .then(({ joke }) => this.setState({ joke }));
  }


  render() {
    const { joke } = this.state;
    return (
      <main className="App">
        <h2>Resposta da API de piadas...</h2>
        <p>{joke}</p>
      </main>
    );
  }
}

export default App;
