import logo from './logo.svg';
import './App.css';
import VideoGame from './components/VideoGame';
import VideoGameList from './components/VideoGameList';
import bestGames from './bestGames';
import myGames from './myGames';
import TitleGameList from './components/TitleGameList';

// VideoGame -> Sou um componente de video Game
// VideoGameList

function App() {
  return (
    <div className="container">
      <h1>Olá mundo!!!</h1>
      <VideoGame game={ bestGames[0] } />

      <TitleGameList>Melhores jogos</TitleGameList>
      <VideoGameList games={ bestGames } />

      <TitleGameList>Meus jogos</TitleGameList>
      <VideoGameList games={ myGames} />
      {/* <VideoGame titulo={ bestGames[0].title } desenvolvedora={bestGames[0].developer} imagem={bestGames[0].img} /> */}
    </div>
  );
}

export default App;
