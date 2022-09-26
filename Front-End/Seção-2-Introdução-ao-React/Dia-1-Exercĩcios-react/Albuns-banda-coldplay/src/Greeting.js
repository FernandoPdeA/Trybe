import React from 'react';

class Greeting extends React.Component {
  render() {
    const { name } = this.props;
    return <h1>Albuns da banda {name} </h1>;
  }
}

export default Greeting;