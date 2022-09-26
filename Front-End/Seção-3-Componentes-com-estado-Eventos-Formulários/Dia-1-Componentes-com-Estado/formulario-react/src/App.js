import React from "react";
import Form from "./components/Form";
import "./App.css";

class App extends React.Component {

  teste = () => {
    console.log("Isso é um teste");
  };

  teste2 = () => {
    console.log("Isso é um teste2");
  };

  render() {
    return (
      <div className="App">
        <Form quandoClicar={this.teste2} />
      </div>
    );
  }
};

export default App;   
