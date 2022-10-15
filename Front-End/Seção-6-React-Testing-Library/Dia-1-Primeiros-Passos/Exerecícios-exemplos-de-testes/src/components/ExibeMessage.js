import React from 'react';

class ExibeMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      message: '',
    }
  }

  exibeName = (e) => {
    e.preventDefault();
    const { value } = e.target;
    this.setState({
      nome: value,
    });
  };

  whriteName = () => {
    const { nome } = this.state;
    if (nome === 'Fernando') {
      this.setState({
        message: 'Seja bem vindo Fernando!',
      });
    } else {
      this.setState({
        message: 'Nome desconhecido!',
      });
    }
  }

  render() {
    const { message } = this.state;
    return (
      <div>
        <label htmlFor="nome">
          Digite seu nome:
          <input onChange={this.exibeName} type="text" id="nome" name="nome" />
        </label>
        <button type="button" onClick={this.whriteName}>Enviar</button>
        <p>{message}</p>
      </div>
    );
  };
};

export default ExibeMessage;
