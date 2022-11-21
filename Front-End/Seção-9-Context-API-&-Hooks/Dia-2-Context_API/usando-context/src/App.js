import Main from './components/Main';
import ThemeContext from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
import './App.css';

function App() {
  const [themeColor, setThemeColor] = useState('light');
  const [themeMain, setThemeMain] = useState('darkMain');
  const [themeForTotal, setThemeFormTotal] = useState('pageFormTotalDark');

  function toggleTheme() {
    setThemeColor(themeColor === 'light' ? 'dark' : 'light');
  }

  function toggleThemeMain() {
    setThemeMain(themeMain === 'lightMain' ? 'darkMain' : 'lightMain');
  }

  function toggleThemeFormTotal() {
    setThemeFormTotal(themeForTotal === 'pageFormTotalLight' ? 'pageFormTotalDark' : 'pageFormTotalLight');
  }

  const value = {
    color: themeColor,
    colorMain: themeMain,
    colorFormTotal: themeForTotal,
    toggleTheme,
    toggleThemeMain,
    toggleThemeFormTotal,
  };

  return (
    <ThemeContext.Provider value={{ value }}>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;