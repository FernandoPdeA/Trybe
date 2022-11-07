import React from 'react';
import { connect } from 'react-redux';
import './Header.css';

function Header({ name }) {
  return (
    <header>
      <div>YOUTRYBER</div>
      <div className="watched">
        { name }
      </div>
    </header>
  );
}
const mapStateToProps = (globalState) => ({
  name: globalState.movie.nome,
});

export default connect(mapStateToProps)(Header);
