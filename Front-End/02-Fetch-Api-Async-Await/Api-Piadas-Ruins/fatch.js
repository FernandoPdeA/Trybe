const API_URL = 'https://icanhazdadjoke.com/';
const p = document.querySelector('p');
const button = document.querySelector('#btn');

const fetchJoke = async () => {
  try {
    const myObject = {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    };

    const result = await fetch(API_URL, myObject)
    const data = await result.json();
    const resultJoke = await data.joke;
    return resultJoke;
  } catch (error) {
    return 'Always check your internet connection and your URLs';
  }
};

const imprimePiada = () => {
  p.innerHTML = 'Aguarde enquanto sua piada sem graça carrega...';
  setTimeout(() => {
    fetchJoke()
      .then((data) => (p.innerHTML = data));
  }, 5000);
};

button.addEventListener('click', imprimePiada);
window.onload = () => fetchJoke();