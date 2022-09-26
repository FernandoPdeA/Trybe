import React from 'react';
import DadosPessoais from './DadosPessoais';
import Endereco from './Endereco';
import DadosProfissionais from './DadosProfissionais';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: 'casa',
      resumo: '',
      cargo: '',
      descricaoCargo: '',
      alertOne: false,
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleNumbersExclud = ({ target }) => {
    const { value } = target;
    const verificar = ['1', '2', '3', '4', '5', '6',
      '7', '8', '9', '0'];
    const novoValor = value;
    verificar.forEach((numero) => {
      if (novoValor.includes(numero)) {
        this.setState({
          cidade: '',
        });
      }
    });
  }

  handleCharactersSpecials = (event) => {
    const { value } = event.target;
    const verificar = ['!', '@', '#', '$', '%', 'é', '&', '*',
      '(', ')', '-', '_', '^', '+', '=', ',', '.'];
    const novoValor = value;
    verificar.forEach((caracter) => {
      if (novoValor.includes(caracter)) {
        this.setState({
          endereco: novoValor.replace(caracter, ''),
        });
      }
    });
  }

  handleCheckRadio = (event) => {
    const { value } = event.target;
    const verificar = ['casa', 'apartamento'];
    const novoValor = value;
    verificar.forEach((tipo) => {
      if (novoValor.includes(tipo)) {
        this.setState({
          tipo: novoValor,
        });
      }
    });
  }

  handleMouseEnter = (event) => {
    const { alertOne } = this.state;
    if (alertOne === false) {
      global.alert('Preencha com cuidado esta informação.');
      event.target.style.border = '1px solid red';
      this.setState({
        alertOne: true,
      });
    } if (alertOne === true) {
      event.target.style.border = '1px solid green';
    }
  };

  renderInfo = (e) => {
    e.preventDefault();
    const { name, email, cpf, endereco, cidade,
      estado, resumo, cargo, descricaoCargo, tipo } = this.state;
    const divWriteData = document.querySelector('.writeData');
    // divWriteData.innerHTML = '';
    const div = document.createElement('div');
    div.innerHTML = `
      <p>Nome: ${name}</p>
      <p>Email: ${email}</p> 
      <p>CPF: ${cpf}</p> 
      <p>Endereço: ${endereco}</p>   
      <p>Cidade: ${cidade}</p>     
      <p>Estado: ${estado}</p>  
      <p>Tipo: ${tipo}</p>  
      <p>Resumo: ${resumo}</p>  
      <p>Cargo: ${cargo}</p>   
      <p>Descricao do Cargo: ${descricaoCargo}</p>   
    `;
    divWriteData.appendChild(div);
    divWriteData.style.display = 'block';
  }

  resetButton = () => {
    const divWriteData = document.querySelector('.writeData');
    divWriteData.innerHTML = '';
    divWriteData.style.display = 'none';
    this.setState({
      name: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: 'casa',
      resumo: '',
      cargo: '',
      descricaoCargo: '',
    });
  };

  render() {
    const { name, email, cpf, endereco, cidade,
      estado, resumo, cargo, descricaoCargo, tipo } = this.state;

    return (
      <form action="" method="">
        <h1>Formulário</h1>
        <fieldset>
          <DadosPessoais
            name={ name }
            email={ email }
            cpf={ cpf }
            handleChange={ this.handleChange }
          />
        </fieldset>

        <fieldset>
          <Endereco
            endereco={ endereco }
            cidade={ cidade }
            estado={ estado }
            tipo={ tipo }
            handleCharactersSpecials={ this.handleCharactersSpecials }
            handleNumbersExclud={ this.handleNumbersExclud }
            handleChange={ this.handleChange }
            handleCheckRadio={ this.handleCheckRadio }
          />
        </fieldset>

        <fieldset>
          <DadosProfissionais
            resumo={ resumo }
            cargo={ cargo }
            descricaoCargo={ descricaoCargo }
            handleChange={ this.handleChange }
            handleMouseEnter={ this.handleMouseEnter }
          />
        </fieldset>
        <button
          className="enviar"
          type="submit"
          onClick={ this.renderInfo }
        >
          Enviar

        </button>
        <button
          className="reset"
          type="reset"
          onClick={ this.resetButton }
        >
          Limpar

        </button>
      </form>
    );
  }
}

export default Form;
