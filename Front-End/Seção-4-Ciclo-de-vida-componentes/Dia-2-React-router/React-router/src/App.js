import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './App.css';
import Routes from './Routes';

function App() {
  return (
    <>
      <Header />
      <main>
        <Sidebar />
        <Routes />
      </main>
    </>
  );
}

export default App;
