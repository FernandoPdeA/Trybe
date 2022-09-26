import React from 'react';

class TitleGameList extends React.Component {
  render(){
    const { children } = this.props;
    return (
      <header>
        <h1>{ children } </h1>
      </header>
    )
  }
}

export default TitleGameList;