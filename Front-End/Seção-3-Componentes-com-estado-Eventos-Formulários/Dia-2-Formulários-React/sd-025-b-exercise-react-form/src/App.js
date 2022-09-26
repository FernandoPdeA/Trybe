import React from 'react';
import './App.css';
import Form from './components/Form';
import WritheData from './components/WritheData';

class App extends React.Component {
  render() {
    return (
      <>
        <Form />
        <WritheData />
      </>
    );
  }
}

export default App;
