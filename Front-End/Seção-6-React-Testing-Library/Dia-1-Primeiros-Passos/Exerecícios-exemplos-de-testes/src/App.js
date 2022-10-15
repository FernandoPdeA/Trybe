import './App.css';
import React from 'react';
import Loading from './Loading';
import ImageProfile from './components/ImageProfile';
import ExibeMessage from './components/ExibeMessage';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      email2: '',
      loading: false,
      exibeImage: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  };

  handleChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    this.setState({
      email: value,
    });
  };

  env = () => {
    const { email } = this.state;
    const messageAssert = 'O email esta correto!';
    const messageError = 'O email esta incorreto!';
    if (email === 'pupygreen@gmail.com') {
      return <h3>{messageAssert}</h3>;
    } else {
      return <h3>{messageError}</h3>;
    }
  };

  showEmail = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
    const { email } = this.state;
    this.setState({
      email2: email,
    });
    if (email === 'pupygreen@gmail.com') {
      this.setState({
        exibeImage: true,
      });
    } else {
      this.setState({
        exibeImage: false,
      });
    }
  };

  render() {
    const { email2, loading, exibeImage } = this.state;
    return (
      <>{loading ? <Loading /> : <div className="App">
        <form>
          <label htmlFor="email">Email
            <input name="email" data-testid="input-email" onChange={this.handleChange} type="email" />
          </label>
          <button name="enviar" onClick={this.showEmail}>Enviar</button>
          <button type="button">Voltar</button>
        </form>
        <div>
          {this.env()}
          <h1 data-testid="email-render">{`Email digitado no input: ${email2}`}</h1>
        </div>
      </div>}
        <ImageProfile
          exibeImage={exibeImage}
          iage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&usqp=CAU"
          amlt="profile"
        />
        <ExibeMessage />
      </>
    );
  }
}

export default App;
