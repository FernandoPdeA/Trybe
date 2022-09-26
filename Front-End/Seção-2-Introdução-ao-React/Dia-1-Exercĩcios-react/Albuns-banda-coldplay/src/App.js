import './App.css';
import React from 'react';
import Greeting from './Greeting';
import Image from './Image';
import Album from './Album';

class App extends React.Component {
  render() {

    // Declaração do objeto contendo informações do album01
    const album01 = {
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/83/Coldplay_-_Mylo_Xyloto_%28Official_Album_Cover%29.png/220px-Coldplay_-_Mylo_Xyloto_%28Official_Album_Cover%29.png',
      title: 'Mylo Xyloto',
      releaseDate: {
        year: '2011',
        month: '10',
        day: '24',
      },
      others: {
        recordCompany: 'Capitol, Parlophone',
        formats: 'CD, digital'
      }
    };

    // Declaração do objeto contendo informações do album02
    const album02 = {
      image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
      title: 'Ghost Stories',
      releaseDate: {
        year: '2014',
        month: '05',
        day: '16',
      },
      others: {
        recordCompany: 'Parlophone',
        formats: 'CD, digital'
      }
    };
    // O que será renderizado na tela
    return (
      <div className="albuns">
        <Greeting name="Coldplay" />
        <Image src="https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2022/04/coldplay-mots-tour.jpg" alt="gatinho fofinho" />
        <article>
          <Album album={album01} />
          <Album album={album02} />
        </article>
      </div>
    );
  }
}

export default App;
