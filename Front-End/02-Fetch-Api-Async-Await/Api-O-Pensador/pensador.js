const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://allugofrases.herokuapp.com/frases/random';

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const { id, frase, livro, autor } = data;
    // console.log(id);
    // console.log(frase);
    // console.log(livro);
    // console.log(autor);
    console.log(`"${frase}" - ${autor}, ${livro}`);
    return `"${frase}" - ${autor}, ${livro}`;
  } catch (error) {
    return 'Always check your internet connection and your URLs';
  }
};

fetchJoke();


