import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

function Header() {
  const { theme} = useContext(ThemeContext);
  return (
    <header className={theme}>
      <h1>React Hooks</h1>
    </header>
  );
}

export default Header;
