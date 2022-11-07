import React from 'react';
import ButtonClicks from './components/ButtonClicks';
import NumberClicks from './components/NumberClicks';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <br />
        <NumberClicks />
        <br />
        <ButtonClicks />
      </div>
    );
  }
}
export default App;
