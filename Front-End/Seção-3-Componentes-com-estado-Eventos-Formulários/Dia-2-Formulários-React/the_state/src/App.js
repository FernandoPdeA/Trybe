import React from 'react';
import ButtonWithoutState from './components/ButtonWithoutState';
import ButtonWithState from './components/ButtonWithState';

function App() {
  return (
    <div className="App">
      <ButtonWithoutState />
      <hr />
      <ButtonWithState />
      <hr />
    </div>
  );
}

export default App;
