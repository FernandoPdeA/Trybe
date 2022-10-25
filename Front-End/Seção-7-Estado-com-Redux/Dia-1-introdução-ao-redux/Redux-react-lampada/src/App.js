import React from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';

import light from './img/light.png';
import dark from './img/dark.png';
import interruptor from './img/interruptor.png';

import './App.css';

class App extends React.Component {
  render() {
    const { theme, dispatch } = this.props;
    return (
      <main id="wrapper" className={ theme }>
        <Header />
        <img
          className="lampada"
          src={ theme === 'dark' ? dark : light }
          alt="lampada"
        />
        <button
          type="button"
          onClick={ () => dispatch({ type: 'CHANGE_THEME' }) }
        >
          <img
            className="interruptor"
            src={ interruptor }
            alt="interruptor"
          />
        </button>
      </main>
    );
  }
}

const mapStateToProps = (globalState) => ({
  theme: globalState.theme,
  nome: globalState.name,
});

// const functionWithInfoStore = connect(mapStateToProps);

// const AppWithInfoStore = functionWithInfoStore(App);

//   <functionWithInfoStore>
//   <App theme="dark" />
// </functionWithInfoStore>;

// export default AppWithInfoStore;

export default connect(mapStateToProps)(App);
