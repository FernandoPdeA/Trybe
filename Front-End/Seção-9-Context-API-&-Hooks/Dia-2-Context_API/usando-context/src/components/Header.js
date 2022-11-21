import { useContext } from 'react';
import themeContext from '../context/ThemeContext';

export default function Header() {
  const { value } = useContext(themeContext);
  const { color, toggleTheme, toggleThemeMain, toggleThemeFormTotal } = value;

  return (
    <header className={`header ${color}`}>
      <h4>CodeDreams</h4>
      <h6
        onClick={() => {
          toggleTheme();
          toggleThemeMain();
          toggleThemeFormTotal();
        }}
      >Mudar para: {color}
      </h6>
    </header>
  );
}