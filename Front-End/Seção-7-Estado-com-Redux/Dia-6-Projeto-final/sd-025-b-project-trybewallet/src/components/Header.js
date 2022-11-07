import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../styles/Header.module.css';

class Header extends Component {
  render() {
    const { userEmail, total } = this.props;
    return (
      <header>
        <div className={ styles.headerPageCarteira }>
          <p
            data-testid="email-field"
          >
            Usuário:
            {' '}
            {userEmail}
          </p>
          <div className={ styles.conversao }>
            <span>Convertido para</span>
            <p data-testid="header-currency-field">BRL</p>
          </div>
          <div className={ styles.valorTotal }>
            <span>Valor total</span>
            {' '}
            <strong>R$</strong>
            <p
              id="total"
              data-testid="total-field"
            >
              {total}
            </p>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  total: state.wallet.total,
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
