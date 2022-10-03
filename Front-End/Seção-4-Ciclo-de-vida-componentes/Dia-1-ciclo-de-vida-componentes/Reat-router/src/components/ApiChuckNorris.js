import React from 'react';

class ApiChuckNorris extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jokeyChuck: undefined,
      storageJokes: [],
    };
  };

  /*fetchPiadas = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ piadas: data.value });
      });
  };*/

  componentDidMount() {
    this.fetchPiadas();
  };

  savePiadas = () => {
    const { piadas, storageJokes } = this.state;
    this.setState({
      storageJokes: [...storageJokes, piadas],
    });
  };

  render() {
    const { piadas } = this.state;
    const loadingElement = <span>Loading...</span>;
    return (
      <div className="App">
        <h1>Chuck Norris piadas</h1>
        {piadas ? piadas : loadingElement}
      </div>
    );
  };
};

export default ApiChuckNorris;