import React from 'react';

class Loading extends React.Component {

  render() {
    return (
      <div data-testid="loading" className="loading">
        <h1>Carregando...</h1>
      </div>
    );
  }
}

export default Loading;