import ThemeContext from "../context/ThemeContext";
import { useContext } from 'react';

function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className={theme}>
      <p>© 2020 My Company</p>
    </footer>
  );
}

export default Footer;