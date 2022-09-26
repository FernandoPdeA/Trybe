import React from 'react';
import Button from './components/Button/Button';

class HelloWorld extends React.Component {
  render(){
    return (
      <>
        <h1 className="hello-world" id="teste">Hello World!!!</h1>
        <p>E turma 25B gosta muito do React</p>
        <Button>Sou um botao difente</Button>
      </>
    );
  }
}

export default HelloWorld; // module.exports = HelloWorld