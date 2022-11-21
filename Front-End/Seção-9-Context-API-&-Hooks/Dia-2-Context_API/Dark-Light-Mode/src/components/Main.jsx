import { useContext } from 'react';
import reactLogo from '../assets/react.svg';
import ThemeContext from '../context/ThemeContext';

function Main() {
  const { toggleTheme, themeNameMessage, themeName, theme } = useContext(ThemeContext);
  console.log('themeName', themeName);

  return (
    <main className={theme === 'dark' ? 'light' : 'dark'}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h3>Vite + React</h3>
      <h1>{themeName}</h1>
      <button
        onClick={() => {
          toggleTheme();
          themeNameMessage();
        }}
      >
        Clique aqui!
      </button>
    </main>
  )
}

export default Main;
