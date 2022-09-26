import React from 'react';
import MessageTextArea from './MessageTextArea';
import MessageEmail from './MessageEmail';
import MessageName from './MessageName';
import Age from './Age';
import CheckBox from './CheckBox';
import SelectCity from './SelectCity';

class Form extends React.Component {
  constructor() {
    super();
    /* Nesse caso não precisamos usar o bind, pois estamos usando arrow function 
    this.handletextChange = this.handletextChange.bind(this);*/
    this.state = {
      messageTextArea: '',
      email: '',
      nome: '',
      idade: '',
      comparecera: false,
      cidade: '',
    };
  };

  handleChange = ({target}) => {
    const { id, name, type } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    });
    console.log(id, name, value, type);
  };

  render() {

    const { messageTextArea, email, nome, idade, comparecera, cidade } = this.state;
    const { quandoClicar } = this.props;

    return (
      <div>
        <h1>Estados e react: ferramenta incrível ou reagindo a regionalismo?</h1>
        <form action="" className='form'>
          <h4> Diga qual é o seu estado favorito?De React ou do Brasil, você decide!</h4>
          <MessageTextArea value={messageTextArea} handleChange={this.handleChange} />
          <MessageEmail value={email} handleChange={this.handleChange} />
          <MessageName value={nome} handleChange={this.handleChange} />
          <Age value={idade} handleChange={this.handleChange} />
          <CheckBox value={comparecera} handleChange={this.handleChange} />
          <SelectCity value={cidade} handleChange={this.handleChange} />
          <button type="button" onClick={() => quandoClicar()}>Enviar</button>
        </form>
      </div>
    );
  };
};

export default Form;
