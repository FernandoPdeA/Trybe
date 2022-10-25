import './Header.css';
import { connect } from 'react-redux';
import logoLight from '../img/trybe-positivo.png';
import logoDark from '../img/trybe-negativo.png';
import ToggleTheme from './ToggleTheme';

function Header({ themeHeader }) {
  return (
    <header className={ themeHeader }>
      <img
        src={ themeHeader === 'dark' ? logoDark : logoLight }
        alt="logo trybe"
        style={ { width: '100px' } }
      />
      <ToggleTheme />
    </header>
  );
}

const mapStateToProps = (globalState) => ({
  themeHeader: globalState.themeHeader,
});

export default connect(mapStateToProps)(Header);
