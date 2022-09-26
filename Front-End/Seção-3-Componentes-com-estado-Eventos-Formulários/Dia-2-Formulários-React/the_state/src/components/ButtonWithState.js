import React from 'react';

class ButtonWithState extends React.Component {
  constructor() {
    super();

    this.state = {
      clicks: 0,
      anotherKey: '',
    };

    this.add = this.add.bind(this);
  }

  verificaSeEstaEm3 = () => {
    if (this.state.clicks === 3) {
      console.log('Está em 3');
    }
  };

  add = () => {
    this.setState((estadoAnterior) => ({
      clicks: estadoAnterior.clicks + 1,
      anotherKey: 'Qualquer valor',
    }), this.verificaSeEstaEm3);

    /* as 3 formas do setState */
    // this.setState({ clicks: 10 }) =>  atualiza um valor no estado
    // this.setState((prevState) => { clicks})) =>  atualiza um valor com base no estado anterior})
    // this.setState(updater, callbakc) => chama a callback quando o estado atualizar
  };

  render() {
    const { clicks } = this.state;
    return (
      <>
        <h1>Butão com o estado</h1>
        <h4>
          Número de cliques:
          {' '}
          { clicks }
        </h4>
        <button type="button" onClick={ this.add }>Add +1</button>
      </>
    );
  }
}

export default ButtonWithState;
