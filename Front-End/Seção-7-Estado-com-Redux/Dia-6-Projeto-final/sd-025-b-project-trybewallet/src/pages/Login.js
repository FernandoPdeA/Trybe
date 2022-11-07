import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../styles/Form.module.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disableButton: true,
      messageErrorEmail: false,
      messageErrorPassword: false,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      this.setState({
        email: value,
      });
    } else if (name === 'password') {
      this.setState({
        password: value,
      });
    }
    this.validateForm();
  };

  validateForm = () => {
    const seis = 5;
    const { email, password } = this.state;
    const RegexEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (email === '' || password === '') {
      this.setState({
        disableButton: true,
        messageErrorEmail: true,
        messageErrorPassword: true,
      });
    } if (password.length < seis || !RegexEmail.test(email)) {
      this.setState({
        disableButton: true,
        messageErrorEmail: true,
        messageErrorPassword: true,
      });
    } if (password.length >= seis && RegexEmail.test(email)) {
      this.setState({
        disableButton: false,
        messageErrorEmail: false,
        messageErrorPassword: false,
      });
      return true;
    }
  };

  handleSubmit = (event) => {
    const { email } = this.state;
    const { dispatch, history } = this.props;
    event.preventDefault();
    if (this.validateForm()) {
      dispatch({ type: 'LOGIN', email });
      history.push('/carteira');
    }
  };

  render() {
    const { disableButton, messageErrorEmail, messageErrorPassword } = this.state;
    return (
      <div className={ styles.formPageMain }>
        <h1>TrybeWallet</h1>
        <form action="">
          <label htmlFor="email">
            {!disableButton && <strong>Tudo certo...vamos lá!</strong>}
            {messageErrorEmail && <span>Email precisa ser válido!</span>}
            <input
              placeholder="Digite seu email..."
              data-testid="email-input"
              type="email"
              name="email"
              id="email"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password">
            {messageErrorPassword
              && <span>Senha precisa ter mais de 5 caracteres!</span>}
            <input
              placeholder="Digite sua senha..."
              data-testid="password-input"
              type="password"
              name="password"
              id="password"
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            data-testid="login-button"
            onClick={ this.handleSubmit }
            disabled={ disableButton }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.emal,
});

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
};

export default connect(mapStateToProps)(Login);
