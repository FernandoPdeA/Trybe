import React from 'react';
import ButtomAlertThis from './components/ButtomAlertThis';
import ContadorClick from './components/ContadorClick';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ButtomAlertThis />
        <ContadorClick />
      </div>
    );
  }
}

export default App;
