import React from 'react';
//import Counter from './components/Counter';
//import Api from './components/Api';
import ApiPiadas from './components/ApiPiadas';
//import ApiChuckNorris from './components/ApiChuckNorris';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    //console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    //console.log("shouldComponentUpdate", this.state, nextState);
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log("componentDidUpdate", this.state, prevState);
  }

  render() {
    return (
      <div>
        <ApiPiadas />
      </div>
    );
  }
}

export default App;
