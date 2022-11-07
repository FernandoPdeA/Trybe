import React from 'react';
import Login from '../components/Login';
import Main from '../components/Main';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Login />
        <Main />
      </div>
    );
  }
}

export default Home;