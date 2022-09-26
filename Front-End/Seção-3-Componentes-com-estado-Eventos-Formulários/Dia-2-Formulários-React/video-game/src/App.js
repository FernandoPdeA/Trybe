import './App.css';
import VideoGameList from './components/VideoGameList';
import bestGames from './bestGames';
import myGames from './myGames';
import TitleGameList from './components/TitleGameList';

function App() {
  return (
    <div className="container">

      <TitleGameList>Melhores jogos</TitleGameList>

      <VideoGameList games={ bestGames } />

      <TitleGameList>Meus jogos</TitleGameList>

      <VideoGameList games={ myGames } />
    </div>
  );
}

export default App;
