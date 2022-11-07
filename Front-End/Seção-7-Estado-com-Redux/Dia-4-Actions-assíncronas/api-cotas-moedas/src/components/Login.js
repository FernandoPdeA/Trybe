import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      disableButton: true,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      this.setState({
        username: value,
      });
    } else if (name === 'password') {
      this.setState({
        password: value,
      });
    }
    this.validateForm();
  }

  validateForm = () => {
    const seis = 6;
    const { username, password } = this.state;
    const RegexEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (username === '' || password === '') {
      this.setState({
        disableButton: true,
      });
    } else if (!RegexEmail.test(username)) {
      this.setState({
        disableButton: true,
      });
    } else if (password.length < seis) {
      this.setState({
        disableButton: true,
      });
    } else {
      this.setState({ disableButton: false });
      return true;
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    if (this.validateForm()) {
      localStorage.setItem('user', JSON.stringify({ username, password }));
      alert('Login efetuado com sucesso!');
    } else {
      alert('Dados inválidos');
    }
  }

  render() {
    const { disableButton } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form action="">
          <label htmlFor="email">Email</label>
          <input data-testid="email-input"
            type="email"
            name="email"
            id="email"
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input data-testid="password-input"
            type="password"
            name="password"
            id="password"
            onChange={this.handleChange}
          />
          <button type="submit"
            data-testid="login-button"
            onClick={this.handleSubmit}
            disabled={disableButton}
          >Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;