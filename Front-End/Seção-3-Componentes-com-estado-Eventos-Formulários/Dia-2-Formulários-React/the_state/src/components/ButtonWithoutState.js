import React from 'react';

class ButtonWithoutState extends React.Component {
  constructor() {
    super();

    this.clicks = 0;

    this.add = this.add.bind(this);
  }

  add() {
    this.clicks += 1;
    console.log(this.clicks);
  }

  render() {
    return (
      <>
        <h1>Butão sem usar o estado</h1>
        <h4>
          Número de cliques:
          {' '}
          {this.clicks}
        </h4>
        <button type="button" onClick={ this.add }>Add +1</button>
      </>
    );
  }
}

// script
// botao.addEventListener("click", () => {})

export default ButtonWithoutState;
