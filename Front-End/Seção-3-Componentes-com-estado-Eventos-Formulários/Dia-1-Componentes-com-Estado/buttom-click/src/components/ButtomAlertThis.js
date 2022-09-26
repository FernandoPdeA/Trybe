import React from 'react';

class ButtomAlertThis extends React.Component {

  constructor() {
    super();
    this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
      numeroDeCliques4: 0
    }
  }

  // usando arrow function, não precisa usar o bind no construtor
  enventClick1 = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1,
    }))
  }

  enventClick2 = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1,
    }))
  }

  enventClick3 = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1,
    }))
  }

  enventClick4 = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques4: estadoAnterior.numeroDeCliques4 + 1,
    }))
  }

  render() {
    console.log(this);
    return (
      <div className="App">
        <button onClick={this.enventClick1}>Botão 1</button>
        <button onClick={this.enventClick2}>Botão 2</button>
        <button onClick={this.enventClick3}>Botão 3</button>
        <button onClick={this.enventClick4}>Botão 4</button>
        <p>Você clicou = {this.state.numeroDeCliques1} no botão numero 1...</p>
        <p>Você clicou = {this.state.numeroDeCliques2} no botão numero 2...</p>
        <p>Você clicou = {this.state.numeroDeCliques3} no botão numero 3...</p>
        <p>Você clicou = {this.state.numeroDeCliques4} no botão numero 4...</p>
      </div>
    );
  }
}

export default ButtomAlertThis;
