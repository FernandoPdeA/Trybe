import React from 'react';

class ContadorClick extends React.Component {
  constructor() {
    super();
    this.state = {
      numeroDeCliques: 0,
      anotherKey: '',
    }
    this.handleClick = this.handleClick.bind(this);
  }

  verificaSeNumberPar = () => {
    if (this.state.numeroDeCliques % 2 === 0) {
      console.log(`Este número é par! = ${this.state.numeroDeCliques}`)
    } else {
      console.log(`Este número é ímpar! = ${this.state.numeroDeCliques}`)
    }
  }

  // Usando função normal, precisa usar o bind no construtor
  handleClick() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
      anotherKey: 'Qualquer valor',
    }), this.verificaSeNumberPar);
    // console.log(this);
  }

  render() {

    /* Posso desestruturar o this.state dessa forma abaixo 
      const { numeroDeCliques } = this.state; */

    return (
      <div>
        <button onClick={this.handleClick}>Botão que está em outro componente</button>
        <p>Você clicou = {this.state.numeroDeCliques} no botão que esta sendo chamado no componente App</p>
      </div>
    );
  }
}

export default ContadorClick;