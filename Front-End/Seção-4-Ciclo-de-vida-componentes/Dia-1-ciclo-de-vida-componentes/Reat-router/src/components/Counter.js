import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    //console.log("construtor");
  }

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
    //console.log("render");
    return (
      <div className="container">
        <p>Contador</p>
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}
        >
          Soma
        </button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

export default Counter;
