import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <h1>About Pokédex</h1>
        <p>
          A Pokédex (japonês:ポケモン図鑑 enciclopédia Pokémon ilustrada )
          é uma ferramenta inestimável para os Treinadores no mundo Pokémon .
          Ele fornece informações sobre todos os Pokémon do mundo que estão
          contidos em seu banco de dados, embora seja diferente na forma
          como adquire e apresenta informações nas diferentes mídias.
          No entanto, eles também são dados apenas a alguns Treinadores de cada vez,
          geralmente àqueles que são considerados como tendo potencial e
          habilidade excepcionais. Pokédexes regionais fornecem informações sobre
          Pokémon nativos de uma determinada região , enquanto a Pokédex Nacionalregistra
          informações sobre todos os Pokémon conhecidos. Enquanto o conceito de Pokédex
          existe há muito tempo, a versão digital dele é uma invenção mais recente criada
          pelo Professor Oak
          {' '}
          <br />
          <br />
          <a href="https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9dex" target="_black">
            Acesse esse link para mais infromações.
          </a>
        </p>
      </div>
    );
  }
}

export default About;
