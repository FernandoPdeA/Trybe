import React from 'react';
import './Header.css';

import TrybeLogo from '../assets/img/logo.png';

class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <img src={ TrybeLogo } alt="Trybe Logo" />
        <h4>Trybe</h4>
      </header>
    );
  }
}

export default Header;
